var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'circle-packing-drag',\r
  title: 'Circle Packing Drag',\r
  desc: 'Circle Packing Drag — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CirclePackingDrag',\r
  complexity: 'beginner',\r
  interactivity: ["drag"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","circle-packing-drag"],\r
}\r
\r
export default function CirclePackingDrag({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.CirclePackingDrag\r
    const width = 500\r
    const height = 500\r
\r
    const root = d3.hierarchy(chartData)\r
      .sum(d => d.value || 0)\r
      .sort((a, b) => b.value - a.value)\r
\r
    d3.pack()\r
      .size([width - 20, height - 20])\r
      .padding(5)(root)\r
\r
    const nodes = root.descendants()\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '10px sans-serif')\r
      .style('user-select', 'none')\r
\r
    svg.selectAll('*').remove()\r
\r
    const color = d3.scaleOrdinal(d3.schemeTableau10)\r
\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('collide', d3.forceCollide(d => d.r + 2))\r
      .force('x', d3.forceX(width / 2).strength(0.05))\r
      .force('y', d3.forceY(height / 2).strength(0.05))\r
\r
    const gNode = svg.append('g')\r
      .selectAll('g')\r
      .data(nodes)\r
      .join('g')\r
        .attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
        .attr('cursor', 'pointer')\r
        .call(d3.drag()\r
          .on('start', dragstarted)\r
          .on('drag', dragged)\r
          .on('end', dragended))\r
\r
    gNode.append('circle')\r
      .attr('r', d => d.r)\r
      .attr('fill', d => color(d.depth))\r
      .attr('fill-opacity', d => d.children ? 0.3 : 0.8)\r
      .attr('stroke', '#cbd5e1')\r
      .attr('stroke-width', 1.5)\r
\r
    gNode.filter(d => !d.children).append('text')\r
      .attr('text-anchor', 'middle')\r
      .attr('dy', '0.31em')\r
      .attr('fill', '#f8fafc')\r
      .style('font-weight', 'bold')\r
      .text(d => d.data.name)\r
\r
    simulation.on('tick', () => {\r
      gNode.attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
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