var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'disjoint-force',\r
  title: 'Disjoint Force',\r
  desc: 'Disjoint Force — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DisjointForce',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","disjoint-force"],\r
}\r
\r
export default function DisjointForce({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.DisjointForce\r
    const width = 600\r
    const height = 400\r
\r
    const links = chartData.links.map(d => ({ ...d }))\r
    const nodes = chartData.nodes.map(d => ({ ...d }))\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '10px sans-serif')\r
      .style('user-select', 'none')\r
\r
    svg.selectAll('*').remove()\r
\r
    const color = d3.scaleOrdinal(d3.schemeCategory10)\r
\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id(d => d.id).distance(30))\r
      .force('charge', d3.forceManyBody().strength(-80))\r
      .force('x', d3.forceX(width / 2).strength(0.05))\r
      .force('y', d3.forceY(height / 2).strength(0.05))\r
\r
    const link = svg.append('g')\r
      .attr('stroke', '#475569')\r
      .attr('stroke-opacity', 0.6)\r
      .attr('stroke-width', 1.5)\r
      .selectAll('line')\r
      .data(links)\r
      .join('line')\r
\r
    const node = svg.append('g')\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 1.5)\r
      .selectAll('circle')\r
      .data(nodes)\r
      .join('circle')\r
        .attr('r', 6)\r
        .attr('fill', d => color(d.group))\r
        .call(d3.drag()\r
          .on('start', dragstarted)\r
          .on('drag', dragged)\r
          .on('end', dragended))\r
\r
    node.append('title')\r
      .text(d => d.id)\r
\r
    simulation.on('tick', () => {\r
      link\r
        .attr('x1', d => d.source.x)\r
        .attr('y1', d => d.source.y)\r
        .attr('x2', d => d.target.x)\r
        .attr('y2', d => d.target.y)\r
\r
      node\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.y)\r
    })\r
\r
    function dragstarted(event, d) {\r
      if (!event.active) simulation.alphaTarget(0.3).restart()\r
      d.fx = d.x\r
      d.fy = d.y\r
    }\r
\r
    function dragged(event, d) {\r
      d.fx = event.x\r
      d.fy = event.y\r
    }\r
\r
    function dragended(event, d) {\r
      if (!event.active) simulation.alphaTarget(0)\r
      d.fx = null\r
      d.fy = null\r
    }\r
\r
    return () => simulation.stop()\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};