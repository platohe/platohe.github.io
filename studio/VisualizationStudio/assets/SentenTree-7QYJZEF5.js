var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
function buildGraph(phrases) {\r
  const counts = {}\r
  const edges = {}\r
  const positions = {}\r
  phrases.forEach(p => {\r
    const words = p.toLowerCase().replace(/[^a-z ]/g, '').split(/\\s+/).filter(Boolean)\r
    words.forEach((w, idx) => {\r
      counts[w] = (counts[w] || 0) + 1\r
      if (!positions[w]) positions[w] = []\r
      positions[w].push(idx)\r
    })\r
    for (let i = 0; i < words.length - 1; i++) {\r
      const a = words[i], b = words[i + 1]\r
      const key = \`\${a}|\${b}\`\r
      edges[key] = (edges[key] || 0) + 1\r
    }\r
  })\r
  // keep frequent words (>=1) but size by count\r
  const nodes = Object.entries(counts).map(([id, count]) => ({\r
    id,\r
    count,\r
    rank: positions[id] ? d3.mean(positions[id]) : 0,\r
  }))\r
  const links = Object.entries(edges)\r
    .filter(([, v]) => v >= 1)\r
    .map(([key, value]) => {\r
      const [a, b] = key.split('|')\r
      return { source: a, target: b, value }\r
    })\r
  return { nodes, links }\r
}\r
\r
export const meta = {\r
  id: 'senten-tree',\r
  title: 'Senten Tree',\r
  desc: 'Senten Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SentenTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","senten-tree"],\r
}\r
\r
export default function SentenTree({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT = [\r
      'data visualization is powerful',\r
      'data visualization is beautiful',\r
      'data visualization helps insight',\r
      'data science is powerful',\r
      'data science drives insight',\r
      'machine learning is powerful',\r
      'machine learning drives insight',\r
      'machine learning learns patterns',\r
      'patterns reveal insight',\r
      'patterns are beautiful',\r
      'data and machine learning',\r
      'science and patterns',\r
    ]\r
    const phrases = Array.isArray(customData) && customData.length ? customData : DEFAULT\r
    const { nodes, links } = buildGraph(phrases)\r
\r
    const freq = d3.scaleSqrt().domain([1, d3.max(nodes, d => d.count) || 1]).range([6, 16])\r
    const xScale = d3.scaleLinear().domain(d3.extent(nodes, d => d.rank) || [0, 1]).range([30, W - 30])\r
\r
    // seed x by rank\r
    nodes.forEach(n => { n.x = xScale(n.rank) + (Math.random() - 0.5) * 40; n.y = H / 2 + (Math.random() - 0.5) * 80 })\r
\r
    const sim = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id(d => d.id).distance(42).strength(0.6))\r
      .force('charge', d3.forceManyBody().strength(-90))\r
      .force('center', d3.forceCenter(W / 2, H / 2))\r
      .force('x', d3.forceX(d => xScale(d.rank)).strength(0.35))\r
      .force('collide', d3.forceCollide().radius(d => freq(d.count) + 8))\r
      .stop()\r
    for (let i = 0; i < 180; i++) sim.tick()\r
\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(links).join('path')\r
      .attr('d', d => {\r
        const sx = d.source.x, sy = d.source.y, tx = d.target.x, ty = d.target.y\r
        const mx = (sx + tx) / 2\r
        const my = (sy + ty) / 2 - 10\r
        return \`M\${sx},\${sy} Q\${mx},\${my} \${tx},\${ty}\`\r
      })\r
      .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('opacity', 0.5)\r
\r
    const node = svg.append('g').selectAll('g').data(nodes).join('g').attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
\r
    node.append('circle')\r
      .attr('r', d => freq(d.count))\r
      .attr('fill', (d, i) => colors[i % colors.length])\r
      .attr('opacity', 0.85).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    node.append('text')\r
      .attr('y', d => -freq(d.count) - 4)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').attr('font-weight', 600)\r
      .text(d => d.id)\r
\r
    svg.append('text').attr('x', W / 2).attr('y', 14).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 700).text('SentenTree: Frequent Patterns')\r
    svg.append('text').attr('x', W / 2).attr('y', H - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('DAG of sequential patterns — x ≈ word order')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};