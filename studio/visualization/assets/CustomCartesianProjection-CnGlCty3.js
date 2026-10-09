var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'custom-cartesian-projection',\r
  title: 'Custom Cartesian Projection',\r
  desc: 'Custom Cartesian Projection — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CustomCartesianProjection',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","custom-cartesian-projection"],\r
}\r
\r
export default function CustomCartesianProjection({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Sample data points\r
    const DEFAULT_DATA = [{"x":-180,"y":-90,"value":25},{"x":-90,"y":-45,"value":45},{"x":0,"y":0,"value":65},{"x":90,"y":45,"value":55},{"x":180,"y":90,"value":35},{"x":-45,"y":30,"value":70},{"x":45,"y":-30,"value":80},{"x":120,"y":60,"value":40},{"x":-120,"y":-60,"value":50},{"x":30,"y":75,"value":60}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    // Custom Cartesian projection function\r
    // This demonstrates how to create a custom projection\r
    function customProjection(lambda, phi) {\r
      // Convert to radians\r
      const lambdaRad = lambda * Math.PI / 180\r
      const phiRad = phi * Math.PI / 180\r
\r
      // Simple equirectangular-like projection with custom scaling\r
      // Map lon [-180,180] → x [20,380]; lat [-90,90] → y [280,20] (inverted)\r
      const x = ((lambda + 180) / 360) * 360 + 20\r
      const y = ((90 - phi) / 180) * 260 + 20\r
\r
      return [x, y]\r
    }\r
\r
    // Apply projection to data\r
    const projectedData = data.map(d => ({\r
      ...d,\r
      projected: customProjection(d.x, d.y)\r
    }))\r
\r
    // Color scale based on values\r
    const color = d3.scaleSequential(d3.interpolateViridis)\r
      .domain([d3.min(data, d => d.value), d3.max(data, d => d.value)])\r
\r
    // Draw grid lines\r
    const gridGroup = svg.append('g').attr('class', 'grid')\r
\r
    // Longitude lines\r
    for (let lon = -180; lon <= 180; lon += 45) {\r
      const lineData = [\r
        customProjection(lon, -90),\r
        customProjection(lon, 90)\r
      ]\r
      gridGroup.append('line')\r
        .attr('x1', lineData[0][0]).attr('y1', lineData[0][1])\r
        .attr('x2', lineData[1][0]).attr('y2', lineData[1][1])\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 0.5)\r
        .attr('stroke-opacity', 0.3)\r
    }\r
\r
    // Latitude lines\r
    for (let lat = -90; lat <= 90; lat += 30) {\r
      const lineData = [\r
        customProjection(-180, lat),\r
        customProjection(180, lat)\r
      ]\r
      gridGroup.append('line')\r
        .attr('x1', lineData[0][0]).attr('y1', lineData[0][1])\r
        .attr('x2', lineData[1][0]).attr('y2', lineData[1][1])\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 0.5)\r
        .attr('stroke-opacity', 0.3)\r
    }\r
\r
    // Draw data points\r
    svg.selectAll('circle')\r
      .data(projectedData)\r
      .join('circle')\r
      .attr('cx', d => d.projected[0])\r
      .attr('cy', d => d.projected[1])\r
      .attr('r', d => d.value / 10)\r
      .attr('fill', d => color(d.value))\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function(event, d) {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', d.value / 8)\r
          .attr('stroke', '#6366f1')\r
      })\r
      .on('mouseout', function(event, d) {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', d.value / 10)\r
          .attr('stroke', 'var(--bg)')\r
      })\r
\r
    // Draw axes\r
    const axisGroup = svg.append('g').attr('class', 'axes')\r
\r
    // X axis\r
    axisGroup.append('line')\r
      .attr('x1', 20).attr('y1', 150)\r
      .attr('x2', 380).attr('y2', 150)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    // Y axis\r
    axisGroup.append('line')\r
      .attr('x1', 200).attr('y1', 20)\r
      .attr('x2', 200).attr('y2', 280)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    // Axis labels\r
    axisGroup.append('text')\r
      .attr('x', 200).attr('y', 295)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('Longitude')\r
\r
    axisGroup.append('text')\r
      .attr('x', 10).attr('y', 150)\r
      .attr('text-anchor', 'middle')\r
      .attr('transform', 'rotate(-90, 10, 150)')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('Latitude')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Custom Cartesian Projection')\r
\r
    // Legend\r
    const gradW = 80, gradH = 8\r
    const grad = svg.append('defs').append('linearGradient').attr('id', 'customGrad')\r
      .attr('x1', '0%').attr('x2', '100%').attr('y1', '0%').attr('y2', '0%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', color(25))\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', color(80))\r
\r
    svg.append('rect').attr('x', 310).attr('y', 275).attr('width', gradW).attr('height', gradH).attr('fill', 'url(#customGrad)').attr('rx', 4)\r
    svg.append('text').attr('x', 308).attr('y', 281).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('25')\r
    svg.append('text').attr('x', 392).attr('y', 281).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('80')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};