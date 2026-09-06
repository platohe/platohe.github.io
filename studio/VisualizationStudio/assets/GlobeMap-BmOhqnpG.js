var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
// Simplified continent polygons [longitude, latitude]\r
const CONTINENTS = [\r
  {\r
    name: 'North America',\r
    coords: [[-168,72],[-140,72],[-95,78],[-65,82],[-15,78],[10,72],[-10,60],[-15,50],[-55,47],[-60,45],[-65,42],[-75,35],[-80,25],[-88,15],[-83,10],[-77,8],[-72,12],[-68,12],[-63,15],[-55,25],[-50,35],[-40,45],[-38,52],[-50,55],[-65,60],[-70,62],[-80,65],[-90,70],[-100,72],[-120,73],[-140,75],[-155,72],[-168,72]],\r
    color: '#22c55e'\r
  },\r
  {\r
    name: 'South America',\r
    coords: [[-80,12],[-75,12],[-68,12],[-62,10],[-58,7],[-52,4],[-50,0],[-48,-5],[-35,-8],[-35,-15],[-40,-22],[-43,-23],[-48,-28],[-52,-33],[-58,-38],[-62,-45],[-65,-52],[-67,-55],[-68,-55],[-72,-50],[-75,-45],[-73,-38],[-68,-30],[-68,-22],[-68,-15],[-70,-8],[-75,-3],[-77,5],[-80,8],[-80,12]],\r
    color: '#16a34a'\r
  },\r
  {\r
    name: 'Europe',\r
    coords: [[-10,72],[10,72],[30,72],[40,68],[38,62],[30,60],[25,55],[20,58],[15,58],[12,55],[8,55],[5,52],[-2,50],[-8,45],[-10,38],[-5,36],[5,36],[12,38],[18,40],[22,38],[26,38],[30,42],[36,42],[28,45],[25,50],[20,52],[15,55],[10,58],[8,62],[5,63],[0,65],[-8,65],[-12,65],[-15,68],[-15,72],[-10,72]],\r
    color: '#3b82f6'\r
  },\r
  {\r
    name: 'Africa',\r
    coords: [[-17,15],[-15,12],[-15,5],[-10,5],[0,5],[10,5],[15,2],[20,0],[25,-2],[30,-5],[35,-8],[38,-12],[40,-15],[38,-20],[35,-25],[32,-30],[28,-35],[22,-35],[17,-35],[12,-30],[10,-25],[15,-20],[15,-15],[12,-10],[8,-5],[5,2],[2,5],[5,8],[8,12],[10,15],[12,20],[15,22],[15,25],[12,28],[8,30],[5,32],[5,37],[10,38],[15,38],[20,38],[25,37],[30,38],[35,35],[38,30],[40,25],[42,20],[40,15],[35,12],[30,10],[25,8],[20,10],[15,12],[10,12],[5,12],[0,12],[-8,12],[-17,15]],\r
    color: '#f59e0b'\r
  },\r
  {\r
    name: 'Asia',\r
    coords: [[30,72],[60,72],[100,72],[140,72],[170,72],[180,65],[170,60],[160,58],[155,52],[145,45],[135,42],[125,40],[120,35],[115,30],[108,25],[105,18],[100,10],[95,5],[90,8],[85,12],[80,10],[75,8],[70,12],[65,15],[60,20],[55,22],[50,28],[45,30],[40,35],[38,42],[36,42],[30,42],[26,38],[22,38],[18,40],[15,38],[12,38],[10,38],[8,38],[10,42],[12,45],[15,48],[20,50],[25,55],[30,58],[38,62],[40,68],[60,72],[30,72]],\r
    color: '#ef4444'\r
  },\r
  {\r
    name: 'Australia',\r
    coords: [[114,-22],[118,-20],[122,-18],[128,-15],[135,-15],[140,-18],[148,-20],[153,-25],[152,-30],[150,-35],[148,-38],[144,-38],[140,-36],[135,-35],[130,-32],[125,-30],[120,-28],[115,-28],[112,-25],[114,-22]],\r
    color: '#a855f7'\r
  },\r
  {\r
    name: 'Greenland',\r
    coords: [[-50,60],[-40,62],[-25,68],[-18,72],[-20,78],[-30,83],[-40,83],[-55,82],[-65,78],[-65,72],[-58,68],[-50,65],[-50,60]],\r
    color: '#22c55e'\r
  },\r
]\r
\r
export const meta = {\r
  id: 'globe-map',\r
  title: 'Globe Map',\r
  desc: 'Globe Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GlobeMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","globe-map"],\r
}\r
\r
export default function GlobeMap({ data }) {\r
  const ref = useRef(null)\r
  const rafRef = useRef(null)\r
  const angleRef = useRef(0)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const cx = W / 2, cy = H / 2\r
    const radius = Math.min(W, H) * 0.42\r
\r
    // Radial gradient for 3D sheen\r
    const defs = svg.append('defs')\r
\r
    const grad = defs.append('radialGradient')\r
      .attr('id', 'globeGrad')\r
      .attr('cx', '35%').attr('cy', '35%').attr('r', '60%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#60a5fa').attr('stop-opacity', 0.6)\r
    grad.append('stop').attr('offset', '60%').attr('stop-color', '#1e40af').attr('stop-opacity', 0.3)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#0f172a').attr('stop-opacity', 0.8)\r
\r
    const shineGrad = defs.append('radialGradient')\r
      .attr('id', 'globeShine')\r
      .attr('cx', '30%').attr('cy', '30%').attr('r', '50%')\r
    shineGrad.append('stop').attr('offset', '0%').attr('stop-color', 'white').attr('stop-opacity', 0.3)\r
    shineGrad.append('stop').attr('offset', '100%').attr('stop-color', 'white').attr('stop-opacity', 0)\r
\r
    // Clip to sphere\r
    defs.append('clipPath').attr('id', 'globeClip')\r
      .append('circle').attr('cx', cx).attr('cy', cy).attr('r', radius)\r
\r
    // Globe base (ocean)\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy).attr('r', radius)\r
      .attr('fill', '#0ea5e9').attr('opacity', 0.9)\r
\r
    // Graticule layer\r
    const gratLayer = svg.append('g').attr('clip-path', 'url(#globeClip)')\r
    const contLayer = svg.append('g').attr('clip-path', 'url(#globeClip)')\r
\r
    // Shine overlay (static)\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy).attr('r', radius)\r
      .attr('fill', 'url(#globeShine)')\r
\r
    // Sphere border\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy).attr('r', radius)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#93c5fd')\r
      .attr('stroke-width', 1.5)\r
      .attr('opacity', 0.6)\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', H - 8)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('Orthographic Globe · Rotating')\r
\r
    function render(rotation) {\r
      const proj = d3.geoOrthographic()\r
        .scale(radius)\r
        .translate([cx, cy])\r
        .rotate([rotation, -20, 0])\r
        .clipAngle(90)\r
\r
      const path = d3.geoPath().projection(proj)\r
      const graticule = d3.geoGraticule().step([20, 20])\r
\r
      gratLayer.selectAll('*').remove()\r
      contLayer.selectAll('*').remove()\r
\r
      // Graticule\r
      gratLayer.append('path')\r
        .datum(graticule())\r
        .attr('d', path)\r
        .attr('fill', 'none')\r
        .attr('stroke', '#bfdbfe')\r
        .attr('stroke-width', 0.4)\r
        .attr('opacity', 0.5)\r
\r
      // Equator\r
      gratLayer.append('path')\r
        .datum({ type: 'LineString', coordinates: Array.from({ length: 361 }, (_, i) => [i - 180, 0]) })\r
        .attr('d', path)\r
        .attr('fill', 'none')\r
        .attr('stroke', '#7dd3fc')\r
        .attr('stroke-width', 0.8)\r
        .attr('opacity', 0.7)\r
\r
      // Continents\r
      CONTINENTS.forEach(cont => {\r
        const feature = {\r
          type: 'Feature',\r
          geometry: { type: 'Polygon', coordinates: [cont.coords] }\r
        }\r
        contLayer.append('path')\r
          .datum(feature)\r
          .attr('d', path)\r
          .attr('fill', cont.color)\r
          .attr('fill-opacity', 0.85)\r
          .attr('stroke', 'white')\r
          .attr('stroke-width', 0.6)\r
          .attr('stroke-opacity', 0.7)\r
      })\r
    }\r
\r
    function animate() {\r
      angleRef.current += 0.25\r
      render(angleRef.current)\r
      rafRef.current = requestAnimationFrame(animate)\r
    }\r
\r
    render(0)\r
    animate()\r
\r
    return () => {\r
      if (rafRef.current) cancelAnimationFrame(rafRef.current)\r
    }\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};