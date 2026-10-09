var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'spherical-contours',\r
  title: 'Spherical Contours',\r
  desc: 'Spherical Contours — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SphericalContours',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spherical-contours"],\r
}\r
\r
export default function SphericalContours({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"speedMs":40}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
    const r = Math.min(width, height) / 2 - 38\r
\r
    const projection = d3.geoOrthographic()\r
      .scale(r)\r
      .translate([cx, cy])\r
      .clipAngle(90)\r
\r
    const path = d3.geoPath().projection(projection)\r
    const graticule = d3.geoGraticule()\r
\r
    // Sphere shell\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy).attr('r', r)\r
      .attr('fill', '#090d16').attr('stroke', '#334155').attr('stroke-width', 1.5)\r
\r
    // Graticule lines\r
    svg.append('path')\r
      .attr('class', 'graticule')\r
      .attr('fill', 'none')\r
      .attr('stroke', 'rgba(56,189,248,0.18)')\r
      .attr('stroke-width', 0.6)\r
\r
    // Tropics & Equator\r
    const parallels = [-66.5, -23.5, 0, 23.5, 66.5]\r
    const parallelNames = ['Antarctic', 'Capricorn', 'Equator', 'Cancer', 'Arctic']\r
    const parallelG = svg.append('g')\r
\r
    parallels.forEach((lat, i) => {\r
      parallelG.append('path')\r
        .datum({ type: 'LineString', coordinates: d3.range(-180, 181, 2).map(lon => [lon, lat]) })\r
        .attr('d', path)\r
        .attr('fill', 'none')\r
        .attr('stroke', lat === 0 ? '#ef4444' : '#f59e0b')\r
        .attr('stroke-width', lat === 0 ? 1.5 : 0.8)\r
        .attr('stroke-dasharray', lat === 0 ? 'none' : '3,3')\r
    })\r
\r
    // Rotating animation\r
    const config = (customData && typeof customData === 'object') ? customData : DEFAULT_DATA\r
    const speed = config.speedMs || 40\r
\r
    const timer = d3.timer((elapsed) => {\r
      const rotate = (elapsed / 1000) * (speed / 10)\r
      projection.rotate([rotate, -20])\r
\r
      svg.select('.graticule').attr('d', path(graticule()))\r
      parallelG.selectAll('path').attr('d', function (d) { return path(d) })\r
    })\r
\r
    // Axis labels\r
    const labels = ['N', 'S', 'E', 'W']\r
    const angles = [270, 90, 0, 180]\r
    const legG = svg.append('g')\r
    labels.forEach((l, i) => {\r
      const a = (angles[i] * Math.PI) / 180\r
      legG.append('text')\r
        .attr('x', cx + (r + 14) * Math.cos(a))\r
        .attr('y', cy + (r + 14) * Math.sin(a) + 3)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px').attr('font-weight', '700')\r
        .text(l)\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Rotating Globe with Equator & Tropics')\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};