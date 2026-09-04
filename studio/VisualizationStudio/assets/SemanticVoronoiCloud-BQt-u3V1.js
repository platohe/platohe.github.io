var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'semantic-voronoi-cloud',\r
  title: 'Semantic Voronoi Cloud',\r
  desc: 'Semantic Voronoi Cloud — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SemanticVoronoiCloud',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","semantic-voronoi-cloud"],\r
}\r
\r
export default function SemanticVoronoiCloud({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT = [\r
    { text: 'Data', size: 40, cluster: 'Tech' },\r
    { text: 'AI', size: 36, cluster: 'Tech' },\r
    { text: 'Model', size: 28, cluster: 'Tech' },\r
    { text: 'Neural', size: 26, cluster: 'Tech' },\r
    { text: 'Algorithm', size: 22, cluster: 'Tech' },\r
    { text: 'Cloud', size: 20, cluster: 'Tech' },\r
    { text: 'Forest', size: 34, cluster: 'Nature' },\r
    { text: 'Ocean', size: 30, cluster: 'Nature' },\r
    { text: 'River', size: 24, cluster: 'Nature' },\r
    { text: 'Flora', size: 20, cluster: 'Nature' },\r
    { text: 'Fauna', size: 18, cluster: 'Nature' },\r
    { text: 'Soil', size: 16, cluster: 'Nature' },\r
    { text: 'Market', size: 32, cluster: 'Finance' },\r
    { text: 'Risk', size: 26, cluster: 'Finance' },\r
    { text: 'Yield', size: 22, cluster: 'Finance' },\r
    { text: 'Equity', size: 18, cluster: 'Finance' },\r
    { text: 'Bond', size: 16, cluster: 'Finance' },\r
    { text: 'Fund', size: 14, cluster: 'Finance' },\r
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
    const colScale = d3.scaleOrdinal(colors).domain(clusters)\r
\r
    // pack layout as semantic proxy (clustered)\r
    const root = { children: clusters.map(c => ({ name: c, children: words.filter(w => w.cluster === c).map(w => ({ name: w.text, value: w.size, cluster: w.cluster })) })) }\r
    const pack = d3.pack().size([IW, IH - 20]).padding(3)\r
    const hier = d3.hierarchy(root).sum(d => d.value)\r
    const packed = pack(hier)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + 12})\`)\r
\r
    // cluster hulls (light background)\r
    packed.descendants().forEach(d => {\r
      if (d.depth === 1) {\r
        g.append('circle')\r
          .attr('cx', d.x).attr('cy', d.y).attr('r', d.r)\r
          .attr('fill', colScale(d.data.name)).attr('fill-opacity', 0.09)\r
          .attr('stroke', colScale(d.data.name)).attr('stroke-width', 1).attr('stroke-dasharray', '4,3')\r
        g.append('text')\r
          .attr('x', d.x).attr('y', d.y - d.r - 6)\r
          .attr('text-anchor', 'middle').attr('fill', colScale(d.data.name)).attr('font-size', '7px').attr('font-weight', 700)\r
          .text(d.data.name)\r
      } else if (d.depth === 2) {\r
        g.append('circle')\r
          .attr('cx', d.x).attr('cy', d.y).attr('r', d.r)\r
          .attr('fill', colScale(d.data.cluster)).attr('fill-opacity', 0.75)\r
          .attr('stroke', 'var(--bg)').attr('stroke-width', 0.8)\r
        const fs = Math.max(6, Math.sqrt(d.value) * 1.45)\r
        g.append('text')\r
          .attr('x', d.x).attr('y', d.y + 3)\r
          .attr('text-anchor', 'middle').attr('fill', '#fff').attr('font-size', fs).attr('font-weight', 600)\r
          .text(d.data.name)\r
      }\r
    })\r
\r
    svg.append('text').attr('x', W / 2).attr('y', 14).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 700).text('Semantic Voronoi Cloud')\r
    svg.append('text').attr('x', W / 2).attr('y', H - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('Cluster color = semantic group — size ∝ importance')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};