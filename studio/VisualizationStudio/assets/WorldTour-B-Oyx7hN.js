var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const LANDS = [\r
  { name: 'North America', coords: [[-168,72],[-140,72],[-95,78],[-65,82],[-15,78],[10,72],[-10,60],[-15,50],[-55,47],[-60,45],[-65,42],[-75,35],[-80,25],[-88,15],[-83,10],[-77,8],[-72,12],[-68,12],[-63,15],[-55,25],[-50,35],[-40,45],[-38,52],[-50,55],[-65,60],[-70,62],[-80,65],[-90,70],[-100,72],[-120,73],[-140,75],[-155,72],[-168,72]], color: '#10b981' },\r
  { name: 'South America', coords: [[-80,12],[-75,12],[-68,12],[-62,10],[-58,7],[-52,4],[-50,0],[-48,-5],[-35,-8],[-35,-15],[-40,-22],[-43,-23],[-48,-28],[-52,-33],[-58,-38],[-62,-45],[-65,-52],[-67,-55],[-68,-55],[-72,-50],[-75,-45],[-73,-38],[-68,-30],[-68,-22],[-68,-15],[-70,-8],[-75,-3],[-77,5],[-80,8],[-80,12]], color: '#059669' },\r
  { name: 'Europe', coords: [[-10,72],[10,72],[30,72],[40,68],[38,62],[30,60],[25,55],[20,58],[15,58],[12,55],[8,55],[5,52],[-2,50],[-8,45],[-10,38],[-5,36],[5,36],[12,38],[18,40],[22,38],[26,38],[30,42],[36,42],[28,45],[25,50],[20,52],[15,55],[10,58],[8,62],[5,63],[0,65],[-8,65],[-12,65],[-15,68],[-15,72],[-10,72]], color: '#3b82f6' },\r
  { name: 'Africa', coords: [[-17,15],[-15,12],[-15,5],[-10,5],[0,5],[10,5],[15,2],[20,0],[25,-2],[30,-5],[35,-8],[38,-12],[40,-15],[38,-20],[35,-25],[32,-30],[28,-35],[22,-35],[17,-35],[12,-30],[10,-25],[15,-20],[15,-15],[12,-10],[8,-5],[5,2],[2,5],[5,8],[8,12],[10,15],[12,20],[15,22],[15,25],[12,28],[8,30],[5,32],[5,37],[10,38],[15,38],[20,38],[25,37],[30,38],[35,35],[38,30],[40,25],[42,20],[40,15],[35,12],[30,10],[25,8],[20,10],[15,12],[10,12],[5,12],[0,12],[-8,12],[-17,15]], color: '#f59e0b' },\r
  { name: 'Asia', coords: [[30,72],[60,72],[100,72],[140,72],[170,72],[180,65],[170,60],[160,58],[155,52],[145,45],[135,42],[125,40],[120,35],[115,30],[108,25],[105,18],[100,10],[95,5],[90,8],[85,12],[80,10],[75,8],[70,12],[65,15],[60,20],[55,22],[50,28],[45,30],[40,35],[38,42],[36,42],[30,42],[26,38],[22,38],[18,40],[15,38],[12,38],[10,38],[8,38],[10,42],[12,45],[15,48],[20,50],[25,55],[30,58],[38,62],[40,68],[60,72],[30,72]], color: '#ef4444' },\r
  { name: 'Australia', coords: [[114,-22],[118,-20],[122,-18],[128,-15],[135,-15],[140,-18],[148,-20],[153,-25],[152,-30],[150,-35],[148,-38],[144,-38],[140,-36],[135,-35],[130,-32],[125,-30],[120,-28],[115,-28],[112,-25],[114,-22]], color: '#8b5cf6' },\r
]\r
\r
export const meta = {\r
  id: 'world-tour',\r
  title: 'World Tour',\r
  desc: 'World Tour — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WorldTour',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","world-tour"],\r
}\r
\r
export default function WorldTour({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DESTINATIONS = [\r
    { name: 'Tokyo', lon: 139.69, lat: 35.68, country: 'Japan' },\r
    { name: 'Paris', lon: 2.35, lat: 48.85, country: 'France' },\r
    { name: 'New York', lon: -74.00, lat: 40.71, country: 'USA' },\r
    { name: 'Cairo', lon: 31.23, lat: 30.04, country: 'Egypt' },\r
    { name: 'Sydney', lon: 151.20, lat: -33.86, country: 'Australia' },\r
    { name: 'Rio de Janeiro', lon: -43.17, lat: -22.90, country: 'Brazil' },\r
    { name: 'San Francisco', lon: -122.41, lat: 37.77, country: 'USA' },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const destinations = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DESTINATIONS\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
    const radius = Math.min(width, height) * 0.38\r
\r
    const defs = svg.append('defs')\r
\r
    // Sphere gradient\r
    const grad = defs.append('radialGradient')\r
      .attr('id', 'tourGlobeGrad')\r
      .attr('cx', '35%').attr('cy', '35%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#38bdf8').attr('stop-opacity', 0.25)\r
    grad.append('stop').attr('offset', '70%').attr('stop-color', '#0284c7').attr('stop-opacity', 0.1)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#0f172a').attr('stop-opacity', 0.6)\r
\r
    // Glow filter\r
    const filter = defs.append('filter').attr('id', 'glow')\r
    filter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'coloredBlur')\r
    const feMerge = filter.append('feMerge')\r
    feMerge.append('feMergeNode').attr('in', 'coloredBlur')\r
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic')\r
\r
    const projection = d3.geoOrthographic()\r
      .scale(radius)\r
      .translate([cx, cy])\r
      .clipAngle(90)\r
\r
    const path = d3.geoPath().projection(projection)\r
    const graticule = d3.geoGraticule()()\r
\r
    // Ocean circle\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy)\r
      .attr('r', radius)\r
      .attr('fill', '#090d16')\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 1.5)\r
\r
    // Shading layer\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy)\r
      .attr('r', radius)\r
      .attr('fill', 'url(#tourGlobeGrad)')\r
      .attr('pointer-events', 'none')\r
\r
    // Graticules\r
    const gratPath = svg.append('path')\r
      .datum(graticule)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'rgba(255,255,255,0.08)')\r
      .attr('stroke-width', 0.5)\r
\r
    // Landmasses\r
    const landPaths = svg.append('g')\r
      .selectAll('path')\r
      .data(LANDS)\r
      .join('path')\r
      .attr('fill', d => d.color)\r
      .attr('fill-opacity', 0.45)\r
      .attr('stroke', d => d.color)\r
      .attr('stroke-width', 0.8)\r
\r
    // Target pin marker group\r
    const targetG = svg.append('g')\r
    targetG.append('circle')\r
      .attr('r', 8)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#f43f5e')\r
      .attr('stroke-width', 1.5)\r
      .attr('filter', 'url(#glow)')\r
\r
    targetG.append('circle')\r
      .attr('r', 3)\r
      .attr('fill', '#f43f5e')\r
\r
    const targetLabel = svg.append('text')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', '#f8fafc')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', '700')\r
\r
    const countryLabel = svg.append('text')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', '#38bdf8')\r
      .attr('font-size', '7.5px')\r
\r
    function render(currentDest) {\r
      gratPath.attr('d', path)\r
      landPaths.attr('d', d => path({ type: 'Polygon', coordinates: [d.coords] }))\r
\r
      const p = projection([currentDest.lon, currentDest.lat])\r
      // Check if location is on visible hemisphere\r
      const center = projection.invert([cx, cy])\r
      const isVisible = d3.geoDistance([currentDest.lon, currentDest.lat], center) < Math.PI / 2\r
\r
      if (isVisible && p) {\r
        targetG.attr('display', 'inline').attr('transform', \`translate(\${p[0]},\${p[1]})\`)\r
        targetLabel\r
          .attr('x', p[0])\r
          .attr('y', p[1] - 14)\r
          .attr('display', 'inline')\r
          .text(currentDest.name)\r
        countryLabel\r
          .attr('x', p[0])\r
          .attr('y', p[1] - 5)\r
          .attr('display', 'inline')\r
          .text(currentDest.country || '')\r
      } else {\r
        targetG.attr('display', 'none')\r
        targetLabel.attr('display', 'none')\r
        countryLabel.attr('display', 'none')\r
      }\r
    }\r
\r
    let active = true\r
    let step = 0\r
    let timer = null\r
\r
    function tourNext() {\r
      if (!active) return\r
      const current = destinations[step % destinations.length]\r
      const next = destinations[(step + 1) % destinations.length]\r
      step++\r
\r
      const interpolator = d3.geoInterpolate(\r
        [current.lon, current.lat],\r
        [next.lon, next.lat]\r
      )\r
\r
      d3.transition()\r
        .duration(2400)\r
        .ease(d3.easeCubicInOut)\r
        .tween('rotate', () => {\r
          return (t) => {\r
            const p = interpolator(t)\r
            projection.rotate([-p[0], -p[1]])\r
            render(next)\r
          }\r
        })\r
        .on('end', () => {\r
          if (active) {\r
            timer = setTimeout(tourNext, 1200)\r
          }\r
        })\r
    }\r
\r
    // Initial render\r
    projection.rotate([-destinations[0].lon, -destinations[0].lat])\r
    render(destinations[0])\r
    timer = setTimeout(tourNext, 1500)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 20)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('World Tour (Orthographic Geodesic Flyover)')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 31)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Smooth Great-Circle Rotation via d3.geoInterpolate')\r
\r
    return () => {\r
      active = false\r
      if (timer) clearTimeout(timer)\r
    }\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};