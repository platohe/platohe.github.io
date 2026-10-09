var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'tissot-indicatrix',\r
  title: 'Tissot Indicatrix',\r
  desc: 'Tissot Indicatrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TissotIndicatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tissot-indicatrix"],\r
}\r
\r
export default function TissotIndicatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"circleRadius":6,"stepLon":30,"stepLat":20}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const projection = d3.geoMercator()\r
      .scale(42)\r
      .translate([cx, cy])\r
\r
    const path = d3.geoPath().projection(projection)\r
    const graticule = d3.geoGraticule()()\r
\r
    // Graticule grid\r
    svg.append('path')\r
      .datum(graticule)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 0.5)\r
      .attr('stroke-opacity', 0.4)\r
\r
    // Generate Tissot's Indicatrix circles across lat/lon grid\r
    const circleGen = d3.geoCircle().radius(config.circleRadius || 6)\r
    const indicatrices = []\r
\r
    for (let lat = -70; lat <= 70; lat += (config.stepLat || 20)) {\r
      for (let lon = -150; lon <= 150; lon += (config.stepLon || 30)) {\r
        indicatrices.push({\r
          lat,\r
          lon,\r
          geom: circleGen.center([lon, lat])(),\r
        })\r
      }\r
    }\r
\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(indicatrices)\r
      .join('path')\r
      .attr('d', d => path(d.geom))\r
      .attr('fill', 'rgba(244, 63, 94, 0.35)')\r
      .attr('stroke', '#f43f5e')\r
      .attr('stroke-width', 1)\r
\r
    // Center points\r
    svg.append('g')\r
      .selectAll('circle')\r
      .data(indicatrices)\r
      .join('circle')\r
      .attr('cx', d => projection([d.lon, d.lat])?.[0] || 0)\r
      .attr('cy', d => projection([d.lon, d.lat])?.[1] || 0)\r
      .attr('r', 1.5)\r
      .attr('fill', '#ffffff')\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text("Tissot's Indicatrix (Map Projection Distortion)")\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Spherical Geodesic Circles Illustrating Area & Conformal Deformation')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};