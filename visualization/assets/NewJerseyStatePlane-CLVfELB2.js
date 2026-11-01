var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'new-jersey-state-plane',\r
  title: 'New Jersey State Plane',\r
  desc: 'New Jersey State Plane — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NewJerseyStatePlane',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","new-jersey-state-plane"],\r
}\r
\r
export default function NewJerseyStatePlane({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Simplified New Jersey-like coordinates\r
    const DEFAULT_DATA = [{"name":"North Jersey","points":[[80,40],[120,35],[140,60],[100,80],[60,70]]},{"name":"Central Jersey","points":[[60,70],[100,80],[140,60],[160,100],[120,120],[80,110]]},{"name":"South Jersey","points":[[80,110],[120,120],[160,100],[180,140],[140,160],[100,150],[60,130]]},{"name":"Shore Region","points":[[140,60],[180,70],[200,100],[180,140],[160,100]]}]\r
\r
    const regions = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const values = { 'North Jersey': 75, 'Central Jersey': 82, 'South Jersey': 68, 'Shore Region': 91 }\r
\r
    // Custom New Jersey State Plane-like projection\r
    // In reality, this would use d3.geoTransverseMercator or similar\r
    // Here we simulate the projection effect\r
    function njProjection(long, lat) {\r
      // Simulated NJ State Plane coordinates\r
      const x = long * 1.2 + 100\r
      const y = lat * 0.8 + 50\r
      return [x, y]\r
    }\r
\r
    const color = d3.scaleSequential(d3.interpolateYlOrRd)\r
      .domain([d3.min(Object.values(values)), d3.max(Object.values(values))])\r
\r
    const path = d3.line()\r
      .x((d) => d[0])\r
      .y((d) => d[1])\r
      .curve(d3.curveCatmullRom.alpha(0.3))\r
\r
    regions.forEach((r) => {\r
      // Apply projection to points\r
      const projectedPoints = r.points.map(p => njProjection(p[0], p[1]))\r
\r
      svg.append('path')\r
        .attr('d', path(projectedPoints) + 'Z')\r
        .attr('fill', color(values[r.name]))\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 4)\r
            .attr('stroke', '#6366f1')\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 2)\r
            .attr('stroke', 'var(--bg)')\r
        })\r
\r
      const cx = d3.mean(projectedPoints, (d) => d[0])\r
      const cy = d3.mean(projectedPoints, (d) => d[1])\r
      svg.append('text')\r
        .attr('x', cx).attr('y', cy + 4)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'white').attr('font-size', '10px').attr('font-weight', 700)\r
        .text(values[r.name])\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 25)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('New Jersey State Plane Projection')\r
\r
    // Legend\r
    const gradW = 100, gradH = 8\r
    const grad = svg.append('defs').append('linearGradient').attr('id', 'njGrad')\r
      .attr('x1', '0%').attr('x2', '100%').attr('y1', '0%').attr('y2', '0%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', color(68))\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', color(91))\r
\r
    svg.append('rect').attr('x', 150).attr('y', 275).attr('width', gradW).attr('height', gradH).attr('fill', 'url(#njGrad)').attr('rx', 4)\r
    svg.append('text').attr('x', 148).attr('y', 281).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('68')\r
    svg.append('text').attr('x', 252).attr('y', 281).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('91')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};