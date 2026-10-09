var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bean-plot',\r
  title: 'Bean Plot',\r
  desc: 'Bean Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BeanPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bean-plot"],\r
}\r
\r
export default function BeanPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"Control","values":[2,3,3,4,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12]},{"group":"Treatment","values":[3,4,4,5,5,6,6,6,7,7,7,8,8,9,9,10,10,11]},{"group":"High Dose","values":[5,6,6,7,7,7,8,8,9,9,10,10,11,11,12,12,13]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && Array.isArray(customData[0]?.values)) ? customData : DEFAULT_DATA\r
    const allVals = data.flatMap(d => d.values)\r
    const validVals = allVals.filter(v => typeof v === 'number' && !isNaN(v) && isFinite(v))\r
    if (validVals.length === 0) return\r
    const y = d3.scaleBand().domain(data.map(d => d.group)).range([0, IH]).padding(0.4)\r
    const x = d3.scaleLinear().domain([d3.min(validVals) - 1, d3.max(validVals) + 1]).range([0, IW])\r
\r
    const barH = y.bandwidth()\r
    const kernelWidth = (x.domain()[1] - x.domain()[0]) / 8\r
\r
    data.forEach((d, i) => {\r
      const centerY = M.top + y(d.group) + barH / 2\r
\r
      // Filter to numeric values before histogram — null/undefined/string break d3.histogram bins\r
      const nums = (d.values || []).filter(v => typeof v === 'number' && !isNaN(v) && isFinite(v))\r
      if (nums.length === 0) return\r
\r
      // KDE density using simple histogram-based approach\r
      const bins = d3.histogram().domain(x.domain()).thresholds(20)(nums)\r
      const maxDensity = d3.max(bins, b => b.length) || 1\r
\r
      // Right half (density)\r
      const points = []\r
      bins.forEach(bin => {\r
        const density = bin.length / maxDensity\r
        const midX = (bin.x0 + bin.x1) / 2\r
        points.push({ x: x(midX), width: density * 60 })\r
      })\r
\r
      if (points.length === 0) return\r
\r
      // Filter out points with invalid (undefined/NaN) coordinates\r
      const validPoints = points.filter(p => typeof p.x === 'number' && !isNaN(p.x) && isFinite(p.x) && typeof p.width === 'number' && !isNaN(p.width) && isFinite(p.width))\r
      if (validPoints.length === 0) return\r
\r
      // Draw bean shape — build a closed path: top cap → top density ridge → bottom cap → bottom ridge\r
      const rawMean = d3.mean(nums)\r
      const meanVal = rawMean != null && isFinite(rawMean) ? rawMean : d3.mean(validVals)\r
      const meanX = x(meanVal)\r
      if (!isFinite(meanX)) return\r
      const topY = centerY - barH / 2\r
      const botY = centerY + barH / 2\r
      if (![topY, botY, centerY].every(isFinite)) return\r
      const topRidge = validPoints.map(p => \`Q\${p.x},\${topY - p.width} \${p.x},\${centerY}\`).join(' ')\r
      const bottomRidge = [...validPoints].reverse().map(p => \`Q\${p.x},\${botY + p.width} \${p.x},\${centerY}\`).join(' ')\r
      // Bridge between ridges with straight lines (Q with 2 numbers is invalid SVG)\r
      const beanPath = \`M\${meanX},\${topY} \${topRidge} L\${meanX},\${botY} \${bottomRidge} Z\`\r
\r
      svg.append('path').attr('d', beanPath).attr('fill', colors[i % colors.length]).attr('opacity', 0.3)\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5)\r
\r
      // Data points (striped)\r
      d.values.forEach(v => {\r
        if (!Number.isFinite(v)) return\r
        svg.append('circle').attr('cx', x(v)).attr('cy', centerY + (Math.random() - 0.5) * barH * 0.6).attr('r', 2.5)\r
          .attr('fill', colors[i % colors.length]).attr('opacity', 0.7)\r
      })\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Value')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Bean Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};