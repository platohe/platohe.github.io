var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'collapsible-force',\r
  title: 'Collapsible Force',\r
  desc: 'Collapsible Force — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CollapsibleForce',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","collapsible-force"],\r
}\r
\r
export default function CollapsibleForce({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.CollapsibleForce\r
    const width = 600\r
    const height = 400\r
\r
    const root = d3.hierarchy(chartData)\r
    root.descendants().forEach((d, i) => {\r
      d.id = i\r
      d._children = d.children\r
      if (d.depth > 1) d.children = null\r
    })\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '10px sans-serif')\r
      .style('user-select', 'none')\r
\r
    svg.selectAll('*').remove()\r
\r
    const gLink = svg.append('g')\r
      .attr('stroke', '#475569')\r
      .attr('stroke-opacity', 0.6)\r
\r
    const gNode = svg.append('g')\r
      .attr('cursor', 'pointer')\r
\r
    const simulation = d3.forceSimulation()\r
      .force('link', d3.forceLink().id(d => d.id).distance(45))\r
      .force('charge', d3.forceManyBody().strength(-120))\r
      .force('center', d3.forceCenter(width / 2, height / 2))\r
\r
    function update() {\r
      const nodes = root.descendants()\r
      const links = root.links()\r
\r
      simulation.nodes(nodes)\r
      simulation.force('link').links(links)\r
\r
      // Links\r
      const link = gLink.selectAll('line')\r
        .data(links, d => \`\${d.source.id}-\${d.target.id}\`)\r
\r
      link.exit().remove()\r
\r
      link.enter().append('line')\r
        .attr('stroke-width', 1.5)\r
\r
      // Nodes\r
      const node = gNode.selectAll('g')\r
        .data(nodes, d => d.id)\r
\r
      node.exit().remove()\r
\r
      const nodeEnter = node.enter().append('g')\r
        .on('click', (event, d) => {\r
          if (d.children) {\r
            d.children = null\r
          } else {\r
            d.children = d._children\r
          }\r
          update()\r
        })\r
        .call(d3.drag()\r
          .on('start', dragstarted)\r
          .on('drag', dragged)\r
          .on('end', dragended))\r
\r
      nodeEnter.append('circle')\r
        .attr('r', d => d._children ? 7 : 4)\r
        .attr('fill', d => d._children ? '#6366f1' : '#ec4899')\r
        .attr('stroke', '#cbd5e1')\r
        .attr('stroke-width', 1.5)\r
\r
      nodeEnter.append('text')\r
        .attr('x', 9)\r
        .attr('dy', '0.31em')\r
        .attr('fill', '#f8fafc')\r
        .text(d => d.data.name)\r
\r
      simulation.alpha(1).restart()\r
\r
      simulation.on('tick', () => {\r
        gLink.selectAll('line')\r
          .attr('x1', d => d.source.x)\r
          .attr('y1', d => d.source.y)\r
          .attr('x2', d => d.target.x)\r
          .attr('y2', d => d.target.y)\r
\r
        gNode.selectAll('g')\r
          .attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
      })\r
    }\r
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
    update()\r
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