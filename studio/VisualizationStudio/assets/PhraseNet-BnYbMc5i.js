var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
function buildGraph(phrases) {\r
  const counts = {}\r
  const edges = {}\r
  phrases.forEach((p) => {\r
    const words = [...new Set(p.toLowerCase().replace(/[^a-z ]/g, '').split(/\\s+/).filter(Boolean))]\r
    words.forEach((w) => { counts[w] = (counts[w] || 0) + 1 })\r
    for (let i = 0; i < words.length; i++) {\r
      for (let j = i + 1; j < words.length; j++) {\r
        const key = [words[i], words[j]].sort().join('|')\r
        edges[key] = (edges[key] || 0) + 1\r
      }\r
    }\r
  })\r
  const nodes = Object.entries(counts)\r
    .filter(([, c]) => c >= 1)\r
    .map(([id, count]) => ({ id, count }))\r
  const links = Object.entries(edges).map(([key, value]) => {\r
    const [a, b] = key.split('|')\r
    return { source: a, target: b, value }\r
  })\r
  return { nodes, links }\r
}\r
\r
export const meta = {\r
  id: 'phrase-net',\r
  title: 'Phrase Net',\r
  desc: 'Phrase Net — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PhraseNet',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","phrase-net"],\r
}\r
\r
export default function PhraseNet({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = ["data visualization is powerful","data visualization is beautiful","data visualization helps insight","data science is powerful","data science drives insight","machine learning is powerful","machine learning drives insight","machine learning learns patterns","patterns reveal insight","patterns are beautiful","data and machine learning","science and patterns"]\r
    const phrases = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const { nodes, links } = buildGraph(phrases)\r
    const nodeCount = nodes.length\r
    const freq = d3.scaleSqrt().domain([1, d3.max(nodes, (d) => d.count)]).range([7, 20])\r
    const weight = d3.scaleSqrt().domain([0, d3.max(links, (d) => d.value)]).range([0.5, 3])\r
\r
    const sim = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id((d) => d.id).distance(55))\r
      .force('charge', d3.forceManyBody().strength(-120))\r
      .force('center', d3.forceCenter(W / 2, H / 2))\r
      .force('collide', d3.forceCollide().radius((d) => freq(d.count) + 6))\r
      .stop()\r
    for (let i = 0; i < 150; i++) sim.tick()\r
\r
    svg.append('g')\r
      .selectAll('line')\r
      .data(links)\r
      .join('line')\r
      .attr('x1', (d) => d.source.x).attr('y1', (d) => d.source.y)\r
      .attr('x2', (d) => d.target.x).attr('y2', (d) => d.target.y)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', (d) => weight(d.value))\r
      .attr('opacity', 0.35)\r
\r
    const node = svg.append('g')\r
      .selectAll('g')\r
      .data(nodes)\r
      .join('g')\r
      .attr('transform', (d) => \`translate(\${d.x},\${d.y})\`)\r
\r
    node.append('circle')\r
      .attr('r', (d) => freq(d.count))\r
      .attr('fill', (d, i) => colors[i % colors.length])\r
      .attr('opacity', 0.8)\r
    node.append('text')\r
      .attr('y', (d) => -freq(d.count) - 4).attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text((d) => d.id)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};