var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'letter-value-plot',\r
  title: 'Letter Value Plot',\r
  desc: 'Letter Value Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LetterValuePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","letter-value-plot"],\r
}\r
\r
export default function LetterValuePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [\r
    { name: 'Normal', data: d3.range(100).map(() => d3.randomNormal(50, 15)()) },\r
    { name: 'Heavy-tailed (Cauchy)', data: d3.range(100).map(() => d3.randomCauchy(50, 20)()) },\r
    { name: 'Log-normal', data: d3.range(100).map(() => d3.randomLogNormal(3.5, 0.8)()) },\r
    { name: 'Exponential', data: d3.range(100).map(() => d3.randomExponential(30)()) }\r
  ]\r
\r
  // Letter value depths (from Tukey)\r
  // M (median), H (hinges/quartiles), E (eighths), D (sixteenths), C (thirty-seconds), B (sixty-fourths), A (128ths)\r
  const LETTER_DEPTHS = [\r
    { letter: 'M', depth: 0.5, label: 'Median' },\r
    { letter: 'H', depth: 0.25, label: 'Hinges (Q1/Q3)' },\r
    { letter: 'E', depth: 0.125, label: 'Eighths' },\r
    { letter: 'D', depth: 0.0625, label: 'Sixteenths' },\r
    { letter: 'C', depth: 0.03125, label: 'Thirty-seconds' },\r
    { letter: 'B', depth: 0.015625, label: 'Sixty-fourths' },\r
    { letter: 'A', depth: 0.0078125, label: '128ths' }\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const groups = (Array.isArray(customData) && customData.length > 0 && customData[0]?.data)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const names = groups.map(g => g.name || g.group || 'Group')\r
    const x = d3.scaleBand().domain(names).range([M.left, M.left + IW]).padding(0.4)\r
\r
    const allValues = groups.flatMap(g => Array.isArray(g.data) ? g.data : (Array.isArray(g.values) ? g.values : [20, 40, 60]))\r
    const yMin = d3.min(allValues) || 0\r
    const yMax = d3.max(allValues) || 100\r
    const y = d3.scaleLinear().domain([yMin - 5, yMax + 5]).range([M.top + IH, M.top])\r
\r
    const g = svg.append('g')\r
\r
    // Grid\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 500))\r
\r
    groups.forEach((group, i) => {\r
      const vals = Array.isArray(group.data) ? group.data : (Array.isArray(group.values) ? group.values : [20, 40, 60])\r
      const sorted = [...vals].sort(d3.ascending)\r
      const n = sorted.length\r
      const cx = (x(group.name) || 0) + x.bandwidth() / 2\r
      const bw = x.bandwidth() * 0.9\r
\r
      // Compute letter values\r
      const letterValues = LETTER_DEPTHS.map(({ letter, depth, label }) => {\r
        const d = Math.floor(depth * (n + 1))\r
        if (d >= 1 && d <= n) {\r
          const lower = sorted[d - 1]\r
          const upper = sorted[n - d]\r
          return { letter, depth, label, lower, upper, mid: (lower + upper) / 2, spread: upper - lower }\r
        }\r
        return null\r
      }).filter(Boolean)\r
\r
      // Draw letter value boxes (spreads)\r
      letterValues.forEach((lv, idx) => {\r
        if (!lv) return\r
        const boxHeight = y(lv.lower) - y(lv.upper)\r
        const boxWidth = bw * (0.9 - idx * 0.12)\r
\r
        // Spread rectangle\r
        g.append('rect')\r
          .attr('x', cx - boxWidth / 2)\r
          .attr('y', y(lv.upper))\r
          .attr('width', boxWidth)\r
          .attr('height', Math.max(2, boxHeight))\r
          .attr('fill', colors[i % colors.length])\r
          .attr('fill-opacity', 0.15 + idx * 0.08)\r
          .attr('stroke', colors[i % colors.length])\r
          .attr('stroke-width', 1)\r
          .attr('rx', 1)\r
\r
        // Midline\r
        g.append('line')\r
          .attr('x1', cx - boxWidth * 0.8)\r
          .attr('x2', cx + boxWidth * 0.8)\r
          .attr('y1', y(lv.mid))\r
          .attr('y2', y(lv.mid))\r
          .attr('stroke', colors[i % colors.length])\r
          .attr('stroke-width', idx === 0 ? 2 : 1.5)\r
      })\r
\r
      // Outlier detection using pseudo-sigma (Hspread)\r
      const hSpread = letterValues[1] ? letterValues[1].spread : 0\r
      const innerFence = 1.5 * hSpread\r
      const outerFence = 3 * hSpread\r
      const lowerHinge = letterValues[1] ? letterValues[1].lower : d3.quantile(sorted, 0.25)\r
      const upperHinge = letterValues[1] ? letterValues[1].upper : d3.quantile(sorted, 0.75)\r
      const lowerInner = lowerHinge - innerFence\r
      const upperInner = upperHinge + innerFence\r
      const lowerOuter = lowerHinge - outerFence\r
      const upperOuter = upperHinge + outerFence\r
\r
      // Whiskers to inner fence\r
      const adjLower = sorted.find(v => v >= lowerInner) || sorted[0]\r
      const adjUpper = [...sorted].reverse().find(v => v <= upperInner) || sorted[sorted.length - 1]\r
\r
      g.append('line')\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(letterValues[0]?.mid || lowerHinge)).attr('y2', y(adjUpper))\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5)\r
\r
      g.append('line')\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(letterValues[0]?.mid || lowerHinge)).attr('y2', y(adjLower))\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5)\r
\r
      // Whisker caps\r
      g.append('line')\r
        .attr('x1', cx - bw * 0.15).attr('x2', cx + bw * 0.15)\r
        .attr('y1', y(adjUpper)).attr('y2', y(adjUpper))\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5)\r
\r
      g.append('line')\r
        .attr('x1', cx - bw * 0.15).attr('x2', cx + bw * 0.15)\r
        .attr('y1', y(adjLower)).attr('y2', y(adjLower))\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5)\r
\r
      // Outliers (between inner and outer fence - mild; beyond outer - extreme)\r
      const mildOutliers = sorted.filter(v => (v > upperInner && v <= upperOuter) || (v < lowerInner && v >= lowerOuter))\r
      const extremeOutliers = sorted.filter(v => v > upperOuter || v < lowerOuter)\r
\r
      g.selectAll(\`.mild-outlier-\${i}\`)\r
        .data(mildOutliers)\r
        .join('circle')\r
        .attr('cx', cx)\r
        .attr('cy', d => y(d))\r
        .attr('r', 3)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 1.5)\r
\r
      g.selectAll(\`.extreme-outlier-\${i}\`)\r
        .data(extremeOutliers)\r
        .join('circle')\r
        .attr('cx', cx)\r
        .attr('cy', d => y(d))\r
        .attr('r', 4)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
\r
      // Group label\r
      g.append('text')\r
        .attr('x', cx)\r
        .attr('y', M.top + IH + 18)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 500)\r
        .text(group.name)\r
    })\r
\r
    // Legend for letter values\r
    const legend = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 150}, \${M.top})\`)\r
\r
    LETTER_DEPTHS.slice(0, 5).forEach((lv, idx) => {\r
      const yPos = idx * 16\r
      legend.append('rect')\r
        .attr('x', 0).attr('y', yPos - 4)\r
        .attr('width', 12).attr('height', 8)\r
        .attr('fill', '#6366f1')\r
        .attr('fill-opacity', 0.15 + idx * 0.08)\r
        .attr('stroke', '#6366f1')\r
        .attr('stroke-width', 1)\r
        .attr('rx', 1)\r
\r
      legend.append('text')\r
        .attr('x', 16).attr('y', yPos + 3)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .attr('font-family', 'monospace')\r
        .text(\`\${lv.letter} (\${lv.label})\`)\r
    })\r
\r
    // Outlier legend\r
    const outlierY = LETTER_DEPTHS.slice(0, 5).length * 16\r
    legend.append('circle')\r
      .attr('cx', 6).attr('cy', outlierY)\r
      .attr('r', 3)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 1.5)\r
    legend.append('text')\r
      .attr('x', 16).attr('y', outlierY + 3)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Mild outliers')\r
\r
    legend.append('circle')\r
      .attr('cx', 6).attr('cy', outlierY + 16)\r
      .attr('r', 4)\r
      .attr('fill', '#6366f1')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1)\r
    legend.append('text')\r
      .attr('x', 16).attr('y', outlierY + 19)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Extreme outliers')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Letter-Value Plot (Tukey) — Beyond Box Plots')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('M,H,E,D,C,B,A depths')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};