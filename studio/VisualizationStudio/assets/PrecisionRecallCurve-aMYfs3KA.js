var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'precision-recall-curve',\r
  title: 'Precision Recall Curve',\r
  desc: 'Precision Recall Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PrecisionRecallCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","precision-recall-curve"],\r
}\r
\r
export default function PrecisionRecallCurve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"class":"Class A","recall":[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],"precision":[1,0.95,0.92,0.88,0.84,0.8,0.75,0.68,0.6,0.5,0.4],"ap":0.78},{"class":"Class B","recall":[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],"precision":[1,0.85,0.78,0.7,0.62,0.55,0.48,0.4,0.32,0.25,0.2],"ap":0.58},{"class":"Class C","recall":[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],"precision":[1,0.75,0.65,0.55,0.45,0.38,0.3,0.22,0.15,0.1,0.05],"ap":0.42}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    // Validate data structure\r
    if (!data[0]?.recall || !data[0]?.precision) {\r
      console.warn('Precision-Recall Curve expects data with recall and precision arrays')\r
      return\r
    }\r
\r
    // Find max precision for domain\r
    const maxPrecision = d3.max(data, d => d3.max(d.precision)) || 1\r
\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, maxPrecision * 1.05]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid lines\r
    g.append('g')\r
      .attr('class', 'grid')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
    g.append('g')\r
      .attr('class', 'grid')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
    // PR curves\r
    const line = d3.line()\r
      .x(d => x(d.recall))\r
      .y(d => y(d.precision))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    data.forEach((d, i) => {\r
      const points = d.recall.map((recall, idx) => ({ recall, precision: d.precision[idx] }))\r
      const color = d.color || colors[i % colors.length]\r
\r
      // Fill under curve\r
      const area = d3.area()\r
        .x(d => x(d.recall))\r
        .y0(IH)\r
        .y1(d => y(d.precision))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(points)\r
        .attr('d', area)\r
        .attr('fill', color)\r
        .attr('opacity', 0.1)\r
\r
      // Curve line\r
      g.append('path')\r
        .datum(points)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', color)\r
        .attr('stroke-width', 2.5)\r
        .attr('opacity', 0.9)\r
\r
      // AP label\r
      const labelX = IW + 10\r
      const labelY = (IH / data.length) * i + 20\r
      g.append('text')\r
        .attr('x', labelX)\r
        .attr('y', labelY)\r
        .attr('fill', color)\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 500)\r
        .text(\`\${d.class} (AP = \${d.ap.toFixed(2)})\`)\r
    })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 40)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '13px')\r
      .attr('font-weight', 500)\r
      .text('Recall (Sensitivity)')\r
\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '13px')\r
      .attr('font-weight', 500)\r
      .text('Precision (Positive Predictive Value)')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Precision-Recall Curve')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};