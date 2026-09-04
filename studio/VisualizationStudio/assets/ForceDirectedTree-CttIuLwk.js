var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'force-directed-tree',\r
  title: 'Force Directed Tree',\r
  desc: 'Force Directed Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ForceDirectedTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","force-directed-tree"],\r
}\r
\r
export default function ForceDirectedTree({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"nodes":[{"id":0,"name":"Root"},{"id":1,"name":"Child A"},{"id":2,"name":"Child B"},{"id":3,"name":"Child C"}],"links":[{"source":0,"target":1},{"source":0,"target":2},{"source":0,"target":3}]}\r
\r
    let graph = DEFAULT_DATA\r
    if (customData && customData.nodes && Array.isArray(customData.nodes)) {\r
      graph = customData\r
    } else if (customData && customData.name && customData.children) {\r
      // Flatten hierarchy tree\r
      const nodes = []\r
      const links = []\r
      let id = 0\r
      const traverse = (item, parentId = null) => {\r
        const myId = id++\r
        nodes.push({ id: myId, name: item.name })\r
        if (parentId !== null) links.push({ source: parentId, target: myId })\r
        if (Array.isArray(item.children)) {\r
          item.children.forEach(c => traverse(c, myId))\r
        }\r
      }\r
      traverse(customData)\r
      graph = { nodes, links }\r
    }\r
\r
    const nodes = graph.nodes.map(d => ({ ...d }))\r
    const links = graph.links.map(d => ({ ...d }))\r
\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']\r
\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id((d) => d.id).distance(60))\r
      .force('charge', d3.forceManyBody().strength(-200))\r
      .force('center', d3.forceCenter(200, 150))\r
      .force('collision', d3.forceCollide().radius(20))\r
\r
    const link = svg.append('g')\r
      .selectAll('line')\r
      .data(links)\r
      .join('line')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.5)\r
\r
    const node = svg.append('g')\r
      .selectAll('circle')\r
      .data(nodes)\r
      .join('circle')\r
      .attr('r', 10)\r
      .attr('fill', (d, i) => color[i % color.length])\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
    simulation.on('tick', () => {\r
      link.attr('x1', (d) => d.source.x).attr('y1', (d) => d.source.y)\r
        .attr('x2', (d) => d.target.x).attr('y2', (d) => d.target.y)\r
      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)\r
    })\r
\r
    setTimeout(() => simulation.stop(), 2000)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};