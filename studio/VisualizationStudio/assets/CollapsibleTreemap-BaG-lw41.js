var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'collapsible-treemap',\r
  title: 'Collapsible Treemap',\r
  desc: 'Collapsible Treemap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CollapsibleTreemap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","collapsible-treemap"],\r
}\r
\r
export default function CollapsibleTreemap({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.CollapsibleTreemap\r
    const width = 600\r
    const height = 400\r
\r
    const root = d3.hierarchy(chartData)\r
      .sum(d => d.value || 0)\r
      .sort((a, b) => b.value - a.value)\r
\r
    d3.treemap()\r
      .size([width, height])\r
      .padding(3)(root)\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
      .style('user-select', 'none')\r
\r
    svg.selectAll('*').remove()\r
\r
    const color = d3.scaleOrdinal(d3.schemeTableau10)\r
\r
    const leaf = svg.append('g')\r
      .selectAll('g')\r
      .data(root.leaves())\r
      .join('g')\r
        .attr('transform', d => \`translate(\${d.x0},\${d.y0})\`)\r
\r
    leaf.append('rect')\r
      .attr('width', d => d.x1 - d.x0)\r
      .attr('height', d => d.y1 - d.y0)\r
      .attr('fill', d => color(d.parent ? d.parent.data.name : d.data.name))\r
      .attr('rx', 3)\r
      .attr('cursor', 'pointer')\r
      .attr('opacity', 0.85)\r
\r
    leaf.append('text')\r
      .attr('x', 6)\r
      .attr('y', 16)\r
      .attr('fill', '#f8fafc')\r
      .style('font-weight', 'bold')\r
      .text(d => d.data.name)\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};