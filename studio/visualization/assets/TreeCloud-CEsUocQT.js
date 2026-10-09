var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'tree-cloud',\r
  title: 'Tree Cloud',\r
  desc: 'Tree Cloud — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TreeCloud',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","tree-cloud"],\r
}\r
\r
export default function TreeCloud({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT = [\r
    { text: 'Data', size: 40, cluster: 'Tech' },\r
    { text: 'AI', size: 34, cluster: 'Tech' },\r
    { text: 'Model', size: 28, cluster: 'Tech' },\r
    { text: 'Neural', size: 24, cluster: 'Tech' },\r
    { text: 'Algorithm', size: 20, cluster: 'Tech' },\r
    { text: 'Forest', size: 32, cluster: 'Nature' },\r
    { text: 'Ocean', size: 28, cluster: 'Nature' },\r
    { text: 'River', size: 22, cluster: 'Nature' },\r
    { text: 'Flora', size: 18, cluster: 'Nature' },\r
    { text: 'Market', size: 30, cluster: 'Finance' },\r
    { text: 'Risk', size: 24, cluster: 'Finance' },\r
    { text: 'Yield', size: 20, cluster: 'Finance' },\r
    { text: 'Equity', size: 16, cluster: 'Finance' },\r
    { text: 'Bond', size: 14, cluster: 'Finance' },\r
    { text: 'Chart', size: 26, cluster: 'Tech' },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let words = DEFAULT\r
    if (Array.isArray(customData) && customData.length && customData[0]?.text) words = customData\r
    else if (customData?.words) words = customData.words\r
\r
    const clusters = [...new Set(words.map(w => w.cluster))]\r
    const col = d3.scaleOrdinal(colors).domain(clusters)\r
\r
    // hierarchy pack — cluster groups as parents\r
    const root = { children: words.map(w => ({ name: w.text, value: w.size, cluster: w.cluster })) }\r
    const pack = d3.pack().size([IW, IH - 18]).padding(4)\r
    const hier = d3.hierarchy(root).sum(d => d.value).sort((a, b) => (b.value ?? 0) - (a.value ?? 0))\r
    const packed = pack(hier)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + 12})\`)\r
\r
    // subtle overall silhouette\r
    g.append('rect').attr('x', -4).attr('y', -4).attr('width', IW + 8).attr('height', IH - 10).attr('rx', 14)\r
      .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-dasharray', '4,3').attr('opacity', 0.5)\r
\r
    packed.leaves().forEach(d => {\r
      g.append('circle').attr('cx', d.x).attr('cy', d.y).attr('r', d.r)\r
        .attr('fill', col(d.data.cluster)).attr('fill-opacity', 0.82).attr('stroke', 'var(--bg)').attr('stroke-width', 0.9)\r
      const fs = Math.max(7, Math.min(14, d.r * 0.45))\r
      g.append('text').attr('x', d.x).attr('y', d.y + 3).attr('text-anchor', 'middle')\r
        .attr('fill', '#fff').attr('font-size', fs).attr('font-weight', 700)\r
        .text(d.data.name)\r
    })\r
\r
    // legend\r
    const leg = svg.append('g')\r
    clusters.forEach((c, i) => {\r
      const lx = M.left + i * 85\r
      leg.append('circle').attr('cx', lx + 6).attr('cy', 14).attr('r', 5).attr('fill', col(c))\r
      leg.append('text').attr('x', lx + 14).attr('y', 17).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').attr('font-weight', 600).text(c)\r
    })\r
\r
    svg.append('text').attr('x', W / 2).attr('y', H - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('TreeCloud — packed circle cloud with cluster color')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};