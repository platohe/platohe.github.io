var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'zoomable-sunburst',\r
  title: 'Zoomable Sunburst',\r
  desc: 'Zoomable Sunburst — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ZoomableSunburst',\r
  complexity: 'beginner',\r
  interactivity: ["zoom"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","zoomable-sunburst"],\r
}\r
\r
export default function ZoomableSunburst({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ZoomableSunburst\r
    const width = 500\r
    const radius = width / 6\r
\r
    const root = d3.hierarchy(chartData)\r
      .sum(d => d.value || 0)\r
      .sort((a, b) => b.value - a.value)\r
\r
    d3.partition()\r
      .size([2 * Math.PI, root.height + 1])(root)\r
\r
    root.each(d => d.current = d)\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -width / 2, width, width])\r
      .style('font', '10px sans-serif')\r
      .style('user-select', 'none')\r
\r
    svg.selectAll('*').remove()\r
\r
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, root.children ? root.children.length + 1 : 5))\r
\r
    const arc = d3.arc()\r
      .startAngle(d => d.x0)\r
      .endAngle(d => d.x1)\r
      .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))\r
      .padRadius(radius * 1.5)\r
      .innerRadius(d => d.y0 * radius)\r
      .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))\r
\r
    const path = svg.append('g')\r
      .selectAll('path')\r
      .data(root.descendants().slice(1))\r
      .join('path')\r
        .attr('fill', d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })\r
        .attr('fill-opacity', d => arcVisible(d.current) ? (d.children ? 0.8 : 0.5) : 0)\r
        .attr('pointer-events', d => arcVisible(d.current) ? 'auto' : 'none')\r
        .attr('d', d => arc(d.current))\r
        .attr('cursor', 'pointer')\r
\r
    path.filter(d => d.children)\r
      .style('cursor', 'pointer')\r
      .on('click', clicked)\r
\r
    const parent = svg.append('circle')\r
      .datum(root)\r
      .attr('r', radius)\r
      .attr('fill', 'none')\r
      .attr('pointer-events', 'all')\r
      .on('click', clicked)\r
\r
    const label = svg.append('g')\r
      .attr('pointer-events', 'none')\r
      .attr('text-anchor', 'middle')\r
      .style('user-select', 'none')\r
      .selectAll('text')\r
      .data(root.descendants().slice(1))\r
      .join('text')\r
        .attr('dy', '0.35em')\r
        .attr('fill-opacity', d => +labelVisible(d.current))\r
        .attr('transform', d => labelTransform(d.current))\r
        .attr('fill', '#f8fafc')\r
        .text(d => d.data.name)\r
\r
    function clicked(event, p) {\r
      parent.datum(p.parent || root)\r
\r
      root.each(d => d.target = {\r
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,\r
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,\r
        y0: Math.max(0, d.y0 - p.depth),\r
        y1: Math.max(0, d.y1 - p.depth)\r
      })\r
\r
      const t = svg.transition().duration(750)\r
\r
      path.transition(t)\r
        .tween('data', d => {\r
          const i = d3.interpolate(d.current, d.target)\r
          return t => d.current = i(t)\r
        })\r
        .attr('fill-opacity', d => arcVisible(d.target) ? (d.children ? 0.8 : 0.5) : 0)\r
        .attr('pointer-events', d => arcVisible(d.target) ? 'auto' : 'none')\r
        .attrTween('d', d => () => arc(d.current))\r
\r
      label.filter(function(d) {\r
        return +this.getAttribute('fill-opacity') || labelVisible(d.target)\r
      }).transition(t)\r
        .attr('fill-opacity', d => +labelVisible(d.target))\r
        .attrTween('transform', d => () => labelTransform(d.current))\r
    }\r
\r
    function arcVisible(d) {\r
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0\r
    }\r
\r
    function labelVisible(d) {\r
      return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03\r
    }\r
\r
    function labelTransform(d) {\r
      const x = (d.x0 + d.x1) / 2 * 180 / Math.PI\r
      const y = (d.y0 + d.y1) / 2 * radius\r
      return \`rotate(\${x - 90}) translate(\${y},0) rotate(\${x < 180 ? 0 : 180})\`\r
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