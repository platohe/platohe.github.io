var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'clustered-heatmap',\r
  title: 'Clustered Heatmap',\r
  desc: 'Clustered Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ClusteredHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy","d3-color"],\r
  tags: ["bars","clustered-heatmap"],\r
}\r
\r
export default function ClusteredHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const rows = ['Gene A', 'Gene B', 'Gene C', 'Gene D', 'Gene E', 'Gene F', 'Gene G', 'Gene H']\r
    const cols = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10']\r
    const DEFAULT = rows.flatMap(r => cols.map(c => ({ row: r, col: c, value: Math.floor(Math.random() * 100) })))\r
    const raw = Array.isArray(customData) && customData.length ? customData : DEFAULT\r
    // order rows/cols by mean to simulate clustering\r
    const rowMean = d3.rollup(raw, v => d3.mean(v, d => d.value), d => d.row)\r
    const colMean = d3.rollup(raw, v => d3.mean(v, d => d.value), d => d.col)\r
    const rowOrder = [...rows].sort((a, b) => (rowMean.get(b) || 0) - (rowMean.get(a) || 0))\r
    const colOrder = [...cols].sort((a, b) => (colMean.get(a) || 0) - (colMean.get(b) || 0))\r
    const dendTopH = 28, dendLeftW = 28\r
    const margin = { top: 38, right: 14, bottom: 22, left: 62 }\r
    const cellW = 22, cellH = 18\r
    const x = d3.scaleBand().domain(colOrder).range([0, colOrder.length * cellW])\r
    const y = d3.scaleBand().domain(rowOrder).range([0, rowOrder.length * cellH])\r
    const color = d3.scaleSequential(d3.interpolateYlOrRd).domain([0, 100])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left + dendLeftW},\${margin.top + dendTopH})\`)\r
    // cells\r
    g.selectAll('rect.cell')\r
      .data(raw)\r
      .join('rect')\r
      .attr('class', 'cell')\r
      .attr('x', d => x(d.col) ?? 0)\r
      .attr('y', d => y(d.row) ?? 0)\r
      .attr('width', x.bandwidth())\r
      .attr('height', y.bandwidth())\r
      .attr('fill', d => color(d.value))\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 0.7)\r
      .attr('rx', 2)\r
    // column dendrogram (top)\r
    const topG = svg.append('g').attr('transform', \`translate(\${margin.left + dendLeftW},\${margin.top})\`)\r
    const colX = (c) => x(c) + x.bandwidth() / 2\r
    // simple binary tree elbows\r
    const colLinks = []\r
    for (let i = 0; i < colOrder.length - 1; i += 2) {\r
      const a = colOrder[i], b = colOrder[i + 1]\r
      const mx = (colX(a) + colX(b)) / 2\r
      colLinks.push([[colX(a), dendTopH], [colX(a), dendTopH - 10], [mx, dendTopH - 10], [mx, dendTopH - 16]])\r
      colLinks.push([[colX(b), dendTopH], [colX(b), dendTopH - 10], [mx, dendTopH - 10]])\r
    }\r
    colLinks.forEach(pts => {\r
      topG.append('path').attr('d', d3.line()(pts)).attr('fill', 'none').attr('stroke', 'var(--text-secondary)').attr('stroke-width', 0.9)\r
    })\r
    // row dendrogram (left)\r
    const leftG = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top + dendTopH})\`)\r
    const rowY = (r) => y(r) + y.bandwidth() / 2\r
    for (let i = 0; i < rowOrder.length - 1; i += 2) {\r
      const a = rowOrder[i], b = rowOrder[i + 1]\r
      const my = (rowY(a) + rowY(b)) / 2\r
      const ptsA = [[dendLeftW, rowY(a)], [dendLeftW - 10, rowY(a)], [dendLeftW - 10, my], [dendLeftW - 16, my]]\r
      const ptsB = [[dendLeftW, rowY(b)], [dendLeftW - 10, rowY(b)], [dendLeftW - 10, my]]\r
      ;[ptsA, ptsB].forEach(pts => leftG.append('path').attr('d', d3.line()(pts)).attr('fill', 'none').attr('stroke', 'var(--text-secondary)').attr('stroke-width', 0.9))\r
    }\r
    // col labels\r
    g.append('g').attr('transform', \`translate(0,\${rowOrder.length * cellH})\`)\r
      .selectAll('text').data(colOrder).join('text')\r
      .attr('x', d => (x(d) ?? 0) + x.bandwidth() / 2).attr('y', 12)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(d => d)\r
    // row labels\r
    g.selectAll('text.row').data(rowOrder).join('text')\r
      .attr('x', -6).attr('y', d => (y(d) ?? 0) + y.bandwidth() / 2 + 3)\r
      .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(d => d)\r
    svg.append('text').attr('x', 200).attr('y', 14).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '12px').attr('font-weight', 600).text('Clustered Heatmap')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};