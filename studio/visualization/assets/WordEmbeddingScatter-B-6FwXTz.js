var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'word-embedding-scatter',\r
  title: 'Word Embedding Scatter',\r
  desc: 'Word Embedding Scatter — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordEmbeddingScatter',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","word-embedding-scatter"],\r
}\r
\r
export default function WordEmbeddingScatter({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT = [\r
    { word: 'data', x: 12, y: 28, cluster: 0, size: 40 },\r
    { word: 'analytics', x: 18, y: 34, cluster: 0, size: 28 },\r
    { word: 'insight', x: 8, y: 22, cluster: 0, size: 22 },\r
    { word: 'pattern', x: 15, y: 18, cluster: 0, size: 20 },\r
    { word: 'model', x: 22, y: 26, cluster: 0, size: 26 },\r
    { word: 'algorithm', x: 10, y: 32, cluster: 0, size: 24 },\r
    { word: 'forest', x: -18, y: -12, cluster: 1, size: 30 },\r
    { word: 'ocean', x: -22, y: -8, cluster: 1, size: 26 },\r
    { word: 'river', x: -14, y: -18, cluster: 1, size: 20 },\r
    { word: 'flora', x: -20, y: -16, cluster: 1, size: 18 },\r
    { word: 'fauna', x: -12, y: -10, cluster: 1, size: 16 },\r
    { word: 'soil', x: -16, y: -6, cluster: 1, size: 14 },\r
    { word: 'market', x: 5, y: -20, cluster: 2, size: 32 },\r
    { word: 'risk', x: 10, y: -16, cluster: 2, size: 24 },\r
    { word: 'yield', x: 2, y: -24, cluster: 2, size: 20 },\r
    { word: 'equity', x: 8, y: -12, cluster: 2, size: 18 },\r
    { word: 'bond', x: 0, y: -18, cluster: 2, size: 16 },\r
    { word: 'fund', x: 6, y: -8, cluster: 2, size: 14 },\r
    { word: 'chart', x: 20, y: 12, cluster: 0, size: 30 },\r
    { word: 'network', x: -8, y: 10, cluster: 1, size: 20 },\r
    { word: 'text', x: 14, y: -4, cluster: 0, size: 22 },\r
    { word: 'visual', x: 16, y: 6, cluster: 0, size: 24 },\r
    { word: 'design', x: -4, y: 14, cluster: 1, size: 26 },\r
    { word: 'story', x: 4, y: 8, cluster: 2, size: 18 },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let words = DEFAULT\r
    if (Array.isArray(customData) && customData.length && customData[0]?.word) words = customData\r
    else if (customData?.words) words = customData.words\r
\r
    const xExtent = d3.extent(words, d => d.x)\r
    const yExtent = d3.extent(words, d => d.y)\r
    const xPad = (xExtent[1] - xExtent[0]) * 0.12 || 5\r
    const yPad = (yExtent[1] - yExtent[0]) * 0.12 || 5\r
    const x = d3.scaleLinear().domain([xExtent[0] - xPad, xExtent[1] + xPad]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([yExtent[0] - yPad, yExtent[1] + yPad]).range([H - M.bottom, M.top + 10])\r
    const r = d3.scaleSqrt().domain(d3.extent(words, d => d.size)).range([4, 10])\r
\r
    // grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + 10})\`)\r
      .call(d3.axisLeft(y).ticks(4).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3').attr('opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + 10})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(- (IH - 10)).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3').attr('opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    const g = svg.append('g')\r
\r
    // points\r
    g.selectAll('circle').data(words).join('circle')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', d => r(d.size))\r
      .attr('fill', d => colors[d.cluster % colors.length]).attr('opacity', 0.78).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // labels\r
    g.selectAll('text').data(words).join('text')\r
      .attr('x', d => x(d.x) + r(d.size) + 2).attr('y', d => y(d.y) + 3)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '7.5px').attr('font-weight', 500)\r
      .text(d => d.word)\r
\r
    // axes\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(4).tickSize(0).tickPadding(4))\r
      .call(g2 => g2.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g2 => g2.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(4).tickSize(0).tickPadding(4))\r
      .call(g2 => g2.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g2 => g2.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // legend clusters\r
    const clusters = [...new Set(words.map(d => d.cluster))].sort()\r
    const leg = svg.append('g')\r
    clusters.forEach((c, i) => {\r
      const lx = M.left + i * 70\r
      leg.append('circle').attr('cx', lx + 6).attr('cy', 14).attr('r', 5).attr('fill', colors[c % colors.length])\r
      leg.append('text').attr('x', lx + 14).attr('y', 17).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(\`Cluster \${c}\`)\r
    })\r
\r
    svg.append('text').attr('x', W / 2).attr('y', H - 2).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('Embedding — proximity ≈ semantic similarity')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};