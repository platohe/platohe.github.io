var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
// Approximate world region centroids [lon, lat, value, name]\r
const DEFAULT_BUBBLES = [\r
  { name: 'USA',        lon: -98,  lat: 39,   value: 330 },\r
  { name: 'Canada',     lon: -96,  lat: 60,   value: 38  },\r
  { name: 'Brazil',     lon: -55,  lat: -10,  value: 215 },\r
  { name: 'UK',         lon: -2,   lat: 54,   value: 67  },\r
  { name: 'France',     lon: 2,    lat: 46,   value: 68  },\r
  { name: 'Germany',    lon: 10,   lat: 51,   value: 84  },\r
  { name: 'Russia',     lon: 100,  lat: 62,   value: 145 },\r
  { name: 'China',      lon: 104,  lat: 35,   value: 1400},\r
  { name: 'India',      lon: 80,   lat: 22,   value: 1380},\r
  { name: 'Japan',      lon: 138,  lat: 36,   value: 126 },\r
  { name: 'Australia',  lon: 135,  lat: -25,  value: 26  },\r
  { name: 'Nigeria',    lon: 8,    lat: 9,    value: 211 },\r
  { name: 'Egypt',      lon: 30,   lat: 26,   value: 102 },\r
  { name: 'S.Africa',   lon: 25,   lat: -29,  value: 59  },\r
  { name: 'Argentina',  lon: -64,  lat: -34,  value: 45  },\r
  { name: 'Mexico',     lon: -102, lat: 24,   value: 129 },\r
]\r
\r
export const meta = {\r
  id: 'bubble-map',\r
  title: 'Bubble Map',\r
  desc: 'Bubble Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BubbleMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bubble-map"],\r
}\r
\r
export default function BubbleMap({ data }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const bubbles = (data && Array.isArray(data) && data.length > 0) ? data : DEFAULT_BUBBLES\r
\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Equirectangular projection\r
    const proj = d3.geoEquirectangular()\r
      .scale(W / 6.5)\r
      .translate([W / 2, H / 2 + 10])\r
\r
    const path = d3.geoPath().projection(proj)\r
    const graticule = d3.geoGraticule().step([30, 30])\r
\r
    const defs = svg.append('defs')\r
    const oceanGrad = defs.append('linearGradient').attr('id', 'bmOcean')\r
      .attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%')\r
    oceanGrad.append('stop').attr('offset', '0%').attr('stop-color', '#0f2942')\r
    oceanGrad.append('stop').attr('offset', '100%').attr('stop-color', '#1e3a5f')\r
\r
    // Ocean background\r
    svg.append('rect')\r
      .attr('width', W).attr('height', H)\r
      .attr('fill', 'url(#bmOcean)')\r
\r
    // Graticule\r
    svg.append('path')\r
      .datum(graticule())\r
      .attr('d', path)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#1e4976')\r
      .attr('stroke-width', 0.5)\r
      .attr('opacity', 0.7)\r
\r
    // Outline sphere border\r
    svg.append('path')\r
      .datum({ type: 'Sphere' })\r
      .attr('d', path)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#2563eb')\r
      .attr('stroke-width', 0.8)\r
\r
    // Simple land patches as approximate rects/paths — equirectangular boxes\r
    const landRegions = [\r
      // North America\r
      { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-170,72],[-50,72],[-50,15],[-170,15],[-170,72]]] }},\r
      // South America\r
      { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-82,12],[-35,12],[-35,-55],[-82,-55],[-82,12]]] }},\r
      // Europe\r
      { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-12,72],[40,72],[40,35],[-12,35],[-12,72]]] }},\r
      // Africa\r
      { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-20,38],[52,38],[52,-35],[-20,-35],[-20,38]]] }},\r
      // Asia\r
      { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[40,72],[180,72],[180,0],[40,0],[40,72]]] }},\r
      // Australia\r
      { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[114,-10],[155,-10],[155,-45],[114,-45],[114,-10]]] }},\r
    ]\r
\r
    svg.selectAll('.land')\r
      .data(landRegions)\r
      .enter().append('path')\r
      .attr('d', path)\r
      .attr('fill', '#1a3a2a')\r
      .attr('fill-opacity', 0.8)\r
      .attr('stroke', '#2d6a4f')\r
      .attr('stroke-width', 0.5)\r
\r
    // Bubble size scale\r
    const rScale = d3.scaleSqrt()\r
      .domain([0, d3.max(bubbles, d => d.value)])\r
      .range([3, 22])\r
\r
    // Bubbles\r
    bubbles.forEach((b, i) => {\r
      const [px, py] = proj([b.lon, b.lat])\r
      if (!px || !py) return\r
\r
      const r = rScale(b.value)\r
      const col = colors[i % colors.length]\r
\r
      svg.append('circle')\r
        .attr('cx', px).attr('cy', py)\r
        .attr('r', r)\r
        .attr('fill', col)\r
        .attr('fill-opacity', 0.6)\r
        .attr('stroke', col)\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-opacity', 0.9)\r
\r
      // Label for larger bubbles\r
      if (r > 10) {\r
        svg.append('text')\r
          .attr('x', px).attr('y', py - r - 3)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', col)\r
          .attr('font-size', '8px')\r
          .attr('font-weight', 600)\r
          .text(b.name)\r
      }\r
    })\r
\r
    // Legend\r
    const legendX = 10, legendY = H - 55\r
    const legendSizes = [100, 500, 1000]\r
    svg.append('text')\r
      .attr('x', legendX).attr('y', legendY - 5)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').attr('font-weight', 600)\r
      .text('Population (M)')\r
\r
    let lx = legendX + 10\r
    legendSizes.forEach(s => {\r
      const r = rScale(s)\r
      svg.append('circle')\r
        .attr('cx', lx + r).attr('cy', legendY + 15)\r
        .attr('r', r)\r
        .attr('fill', 'none').attr('stroke', '#6366f1').attr('stroke-width', 1)\r
      svg.append('text')\r
        .attr('x', lx + r).attr('y', legendY + 15 + r + 9)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
        .text(s)\r
      lx += r * 2 + 10\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 14)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Bubble Map · Population by Country')\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};