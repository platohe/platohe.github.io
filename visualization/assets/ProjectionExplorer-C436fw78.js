var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const PROJECTIONS = [\r
  { name: 'Equirectangular', fn: () => d3.geoEquirectangular().scale(W / 6.5).translate([W / 2, H / 2]) },\r
  { name: 'Mercator',        fn: () => d3.geoMercator().scale(W / 7).translate([W / 2, H / 2]) },\r
  { name: 'Orthographic',    fn: () => d3.geoOrthographic().scale(Math.min(W, H) * 0.44).translate([W / 2, H / 2]) },\r
  { name: 'Stereographic',   fn: () => d3.geoStereographic().scale(W / 8).translate([W / 2, H / 2]) },\r
  { name: 'Natural Earth',   fn: () => d3.geoNaturalEarth1().scale(W / 6.2).translate([W / 2, H / 2]) },\r
  { name: 'Azimuthal EqA',   fn: () => d3.geoAzimuthalEqualArea().scale(W / 7).translate([W / 2, H / 2]) },\r
]\r
\r
const LAND_FEATURES = [\r
  { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-170,72],[-50,72],[-50,15],[-170,15],[-170,72]]] }},\r
  { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-82,12],[-35,12],[-35,-55],[-82,-55],[-82,12]]] }},\r
  { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-12,72],[40,72],[40,35],[-12,35],[-12,72]]] }},\r
  { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-20,38],[52,38],[52,-35],[-20,-35],[-20,38]]] }},\r
  { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[40,72],[180,72],[180,0],[40,0],[40,72]]] }},\r
  { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[114,-10],[155,-10],[155,-45],[114,-45],[114,-10]]] }},\r
]\r
\r
export const meta = {\r
  id: 'projection-explorer',\r
  title: 'Projection Explorer',\r
  desc: 'Projection Explorer — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ProjectionExplorer',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","projection-explorer"],\r
}\r
\r
export default function ProjectionExplorer({ data }) {\r
  const ref = useRef(null)\r
  const [projIdx, setProjIdx] = useState(0)\r
  const intervalRef = useRef(null)\r
\r
  useEffect(() => {\r
    // Auto-rotate through projections\r
    intervalRef.current = setInterval(() => {\r
      setProjIdx(i => (i + 1) % PROJECTIONS.length)\r
    }, 2500)\r
    return () => clearInterval(intervalRef.current)\r
  }, [])\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const proj = PROJECTIONS[projIdx].fn()\r
    const path = d3.geoPath().projection(proj)\r
    const graticule = d3.geoGraticule().step([30, 30])\r
\r
    // Ocean\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0f172a')\r
\r
    // Clip sphere if orthographic\r
    const defs = svg.append('defs')\r
    defs.append('clipPath').attr('id', 'peSphere')\r
      .append('path').datum({ type: 'Sphere' }).attr('d', path)\r
\r
    svg.append('path')\r
      .datum({ type: 'Sphere' })\r
      .attr('d', path)\r
      .attr('fill', '#0ea5e9')\r
      .attr('opacity', 0.3)\r
\r
    svg.append('path')\r
      .datum(graticule())\r
      .attr('d', path)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#1e40af')\r
      .attr('stroke-width', 0.5)\r
      .attr('clip-path', 'url(#peSphere)')\r
\r
    svg.selectAll('.land')\r
      .data(LAND_FEATURES).enter().append('path')\r
      .attr('d', path)\r
      .attr('fill', '#22c55e')\r
      .attr('fill-opacity', 0.7)\r
      .attr('stroke', '#16a34a')\r
      .attr('stroke-width', 0.5)\r
      .attr('clip-path', 'url(#peSphere)')\r
\r
    svg.append('path')\r
      .datum({ type: 'Sphere' })\r
      .attr('d', path)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 1)\r
\r
    // Projection name badge\r
    svg.append('rect')\r
      .attr('x', W / 2 - 65).attr('y', H - 34)\r
      .attr('width', 130).attr('height', 22)\r
      .attr('rx', 11).attr('fill', '#6366f1').attr('opacity', 0.85)\r
\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', H - 19)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '11px').attr('font-weight', 700)\r
      .text(PROJECTIONS[projIdx].name)\r
\r
    // Dot indicators\r
    PROJECTIONS.forEach((_, i) => {\r
      svg.append('circle')\r
        .attr('cx', W / 2 - (PROJECTIONS.length - 1) * 7 + i * 14)\r
        .attr('cy', H - 7)\r
        .attr('r', 3)\r
        .attr('fill', i === projIdx ? '#6366f1' : 'var(--border)')\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 15)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Projection Explorer')\r
\r
  }, [projIdx, data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};