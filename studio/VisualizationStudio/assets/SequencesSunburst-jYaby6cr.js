var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'sequences-sunburst',\r
  title: 'Sequences Sunburst',\r
  desc: 'Sequences Sunburst — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SequencesSunburst',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sequences-sunburst"],\r
}\r
\r
export default function SequencesSunburst({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.SequencesSunburst\r
    const width = 500\r
    const height = 500\r
    const radius = Math.min(width, height) / 2\r
\r
    const root = d3.hierarchy(chartData)\r
      .sum(d => d.value || 0)\r
      .sort((a, b) => b.value - a.value)\r
\r
    d3.partition().size([2 * Math.PI, radius])(root)\r
\r
    const arc = d3.arc()\r
      .startAngle(d => d.x0)\r
      .endAngle(d => d.x1)\r
      .innerRadius(d => d.y0)\r
      .outerRadius(d => d.y1 - 2)\r
\r
    const color = d3.scaleOrdinal(d3.schemeTableau10)\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const g = svg.append('g')\r
\r
    const path = g.selectAll('path')\r
      .data(root.descendants().filter(d => d.depth))\r
      .join('path')\r
        .attr('d', arc)\r
        .attr('fill', d => color(d.ancestors().reverse()[1]?.data.name || d.data.name))\r
        .attr('fill-opacity', d => 0.8 - d.depth * 0.1)\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 0.5)\r
        .attr('cursor', 'pointer')\r
\r
    // Center label\r
    const centerLabel = svg.append('text')\r
      .attr('text-anchor', 'middle')\r
      .attr('dy', '0.35em')\r
      .attr('fill', '#f8fafc')\r
      .style('font-size', '14px')\r
      .style('font-weight', 'bold')\r
      .text(root.data.name)\r
\r
    // Breadcrumb path highlight on hover\r
    path.on('mouseenter', function(_event, d) {\r
      const ancestors = d.ancestors()\r
      path.attr('fill-opacity', p => ancestors.includes(p) ? 1 : 0.25)\r
      centerLabel.text(d.data.name)\r
    }).on('mouseleave', function() {\r
      path.attr('fill-opacity', d => 0.8 - d.depth * 0.1)\r
      centerLabel.text(root.data.name)\r
    })\r
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