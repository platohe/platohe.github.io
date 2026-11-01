var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'zoomable-icicle',\r
  title: 'Zoomable Icicle',\r
  desc: 'Zoomable Icicle — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ZoomableIcicle',\r
  complexity: 'beginner',\r
  interactivity: ["zoom"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","zoomable-icicle"],\r
}\r
\r
export default function ZoomableIcicle({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ZoomableIcicle\r
    const width = 650\r
    const height = 400\r
\r
    const root = d3.hierarchy(chartData)\r
      .sum(d => d.value || 0)\r
      .sort((a, b) => b.height - a.height || b.value - a.value)\r
\r
    d3.partition()\r
      .size([height, (root.height + 1) * width / 4])(root)\r
\r
    let focus = root\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
      .style('user-select', 'none')\r
\r
    svg.selectAll('*').remove()\r
\r
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateSpectral, root.children ? root.children.length + 1 : 5))\r
\r
    const cell = svg.append('g')\r
      .selectAll('g')\r
      .data(root.descendants())\r
      .join('g')\r
        .attr('transform', d => \`translate(\${d.y0},\${d.x0})\`)\r
\r
    const rect = cell.append('rect')\r
      .attr('width', d => d.y1 - d.y0 - 1)\r
      .attr('height', d => rectHeight(d))\r
      .attr('fill', d => {\r
        while (d.depth > 1) d = d.parent\r
        return color(d.data.name)\r
      })\r
      .attr('cursor', 'pointer')\r
      .on('click', clicked)\r
\r
    const text = cell.append('text')\r
      .attr('pointer-events', 'none')\r
      .attr('x', 6)\r
      .attr('y', 14)\r
      .attr('fill-opacity', d => +labelVisible(d))\r
      .attr('fill', '#0f172a')\r
      .style('font-weight', 'bold')\r
      .text(d => d.data.name)\r
\r
    function clicked(event, p) {\r
      focus = focus === p ? p.parent || root : p\r
\r
      root.each(d => d.target = {\r
        x0: (d.x0 - focus.x0) / (focus.x1 - focus.x0) * height,\r
        x1: (d.x1 - focus.x0) / (focus.x1 - focus.x0) * height,\r
        y0: d.y0 - focus.y0,\r
        y1: d.y1 - focus.y0\r
      })\r
\r
      const t = svg.transition().duration(750)\r
\r
      cell.transition(t)\r
        .attr('transform', d => \`translate(\${d.target.y0},\${d.target.x0})\`)\r
\r
      rect.transition(t)\r
        .attr('height', d => rectHeight(d.target))\r
\r
      text.transition(t)\r
        .attr('fill-opacity', d => +labelVisible(d.target))\r
    }\r
\r
    function rectHeight(d) {\r
      return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2)\r
    }\r
\r
    function labelVisible(d) {\r
      return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 14\r
    }\r
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