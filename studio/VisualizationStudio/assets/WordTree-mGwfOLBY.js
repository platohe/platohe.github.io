var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
function buildTrie(phrases) {\r
  const root = { name: '', children: [] }\r
  phrases.forEach((p) => {\r
    const words = p.toLowerCase().replace(/[^a-z ]/g, '').split(/\\s+/).filter(Boolean)\r
    let node = root\r
    words.forEach((w) => {\r
      let child = node.children.find((c) => c.name === w)\r
      if (!child) {\r
        child = { name: w, children: [] }\r
        node.children.push(child)\r
      }\r
      node = child\r
    })\r
  })\r
  return root\r
}\r
\r
export const meta = {\r
  id: 'word-tree',\r
  title: 'Word Tree',\r
  desc: 'Word Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","word-tree"],\r
}\r
\r
export default function WordTree({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = ["data visualization is powerful","data visualization is beautiful","data visualization helps insight","data science is powerful","data science drives insight","machine learning is powerful","machine learning drives insight","machine learning learns patterns","patterns reveal insight","patterns are beautiful"]\r
    const phrases = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const root = d3.hierarchy(buildTrie(phrases))\r
    root.children.forEach((c) => {\r
      c.x = 0\r
      c.y = 0\r
    })\r
    const tree = d3.tree().nodeSize([24, 34])(root)\r
    const x = d3.scaleLinear().domain([0, d3.max(root.descendants(), (d) => d.depth)]).range([M.left + 30, W - M.right - 20])\r
    const y = d3.scaleLinear().domain(d3.extent(root.descendants(), (d) => d.y)).range([M.top, H - M.bottom])\r
\r
    svg.append('g')\r
      .selectAll('line')\r
      .data(root.links())\r
      .join('line')\r
      .attr('x1', (d) => x(d.source.depth)).attr('y1', (d) => y(d.source.y))\r
      .attr('x2', (d) => x(d.target.depth)).attr('y2', (d) => y(d.target.y))\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
\r
    const node = svg.append('g')\r
      .selectAll('g')\r
      .data(root.descendants().slice(1))\r
      .join('g')\r
      .attr('transform', (d) => \`translate(\${x(d.depth)},\${y(d.y)})\`)\r
\r
    node.append('circle')\r
      .attr('r', 3.2)\r
      .attr('fill', (d) => colors[(d.depth - 1) % colors.length])\r
      .attr('opacity', 0.9)\r
    node.append('text')\r
      .attr('x', 7).attr('y', 3.5)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text((d) => d.data.name)\r
\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', H - 4)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text('Word tree of shared phrase prefixes')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};