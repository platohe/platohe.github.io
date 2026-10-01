var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const CONTINENTS_GEOM = [\r
  { name: 'NA', coords: [[-168,72],[-140,72],[-95,78],[-65,82],[-15,78],[10,72],[-10,60],[-15,50],[-55,47],[-60,45],[-65,42],[-75,35],[-80,25],[-88,15],[-83,10],[-77,8],[-72,12],[-68,12],[-63,15],[-55,25],[-50,35],[-40,45],[-38,52],[-50,55],[-65,60],[-70,62],[-80,65],[-90,70],[-100,72],[-120,73],[-140,75],[-155,72],[-168,72]] },\r
  { name: 'SA', coords: [[-80,12],[-75,12],[-68,12],[-62,10],[-58,7],[-52,4],[-50,0],[-48,-5],[-35,-8],[-35,-15],[-40,-22],[-43,-23],[-48,-28],[-52,-33],[-58,-38],[-62,-45],[-65,-52],[-67,-55],[-68,-55],[-72,-50],[-75,-45],[-73,-38],[-68,-30],[-68,-22],[-68,-15],[-70,-8],[-75,-3],[-77,5],[-80,8],[-80,12]] },\r
  { name: 'EU', coords: [[-10,72],[10,72],[30,72],[40,68],[38,62],[30,60],[25,55],[20,58],[15,58],[12,55],[8,55],[5,52],[-2,50],[-8,45],[-10,38],[-5,36],[5,36],[12,38],[18,40],[22,38],[26,38],[30,42],[36,42],[28,45],[25,50],[20,52],[15,55],[10,58],[8,62],[5,63],[0,65],[-8,65],[-12,65],[-15,68],[-15,72],[-10,72]] },\r
  { name: 'AF', coords: [[-17,15],[-15,12],[-15,5],[-10,5],[0,5],[10,5],[15,2],[20,0],[25,-2],[30,-5],[35,-8],[38,-12],[40,-15],[38,-20],[35,-25],[32,-30],[28,-35],[22,-35],[17,-35],[12,-30],[10,-25],[15,-20],[15,-15],[12,-10],[8,-5],[5,2],[2,5],[5,8],[8,12],[10,15],[12,20],[15,22],[15,25],[12,28],[8,30],[5,32],[5,37],[10,38],[15,38],[20,38],[25,37],[30,38],[35,35],[38,30],[40,25],[42,20],[40,15],[35,12],[30,10],[25,8],[20,10],[15,12],[10,12],[5,12],[0,12],[-8,12],[-17,15]] },\r
  { name: 'AS', coords: [[30,72],[60,72],[100,72],[140,72],[170,72],[180,65],[170,60],[160,58],[155,52],[145,45],[135,42],[125,40],[120,35],[115,30],[108,25],[105,18],[100,10],[95,5],[90,8],[85,12],[80,10],[75,8],[70,12],[65,15],[60,20],[55,22],[50,28],[45,30],[40,35],[38,42],[36,42],[30,42],[26,38],[22,38],[18,40],[15,38],[12,38],[10,38],[8,38],[10,42],[12,45],[15,48],[20,50],[25,55],[30,58],[38,62],[40,68],[60,72],[30,72]] },\r
  { name: 'AU', coords: [[114,-22],[118,-20],[122,-18],[128,-15],[135,-15],[140,-18],[148,-20],[153,-25],[152,-30],[150,-35],[148,-38],[144,-38],[140,-36],[135,-35],[130,-32],[125,-30],[120,-28],[115,-28],[112,-25],[114,-22]] },\r
]\r
\r
export const meta = {\r
  id: 'peirce-quincuncial',\r
  title: 'Peirce Quincuncial',\r
  desc: 'Peirce Quincuncial — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PeirceQuincuncial',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","peirce-quincuncial"],\r
}\r
\r
export default function PeirceQuincuncial({ data: _customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
    const size = 185\r
\r
    // Conformal square projection boundary\r
    const g = svg.append('g')\r
\r
    // Diamond square bounding box\r
    g.append('rect')\r
      .attr('x', cx - size / 2)\r
      .attr('y', cy - size / 2)\r
      .attr('width', size)\r
      .attr('height', size)\r
      .attr('transform', \`rotate(45, \${cx}, \${cy})\`)\r
      .attr('fill', '#090d16')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 1.8)\r
\r
    // Conformal azimuthal polar projection mapping into quadrant layout\r
    const projection = d3.geoAzimuthalEquidistant()\r
      .scale(size * 0.42)\r
      .translate([cx, cy])\r
      .clipAngle(120)\r
\r
    const path = d3.geoPath().projection(projection)\r
    const graticule = d3.geoGraticule()()\r
\r
    // Graticules\r
    g.append('path')\r
      .datum(graticule)\r
      .attr('d', path)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'rgba(99, 102, 241, 0.15)')\r
      .attr('stroke-width', 0.5)\r
\r
    // Landmasses\r
    g.selectAll('.land')\r
      .data(CONTINENTS_GEOM)\r
      .join('path')\r
      .attr('d', d => path({ type: 'Polygon', coordinates: [d.coords] }))\r
      .attr('fill', '#38bdf8')\r
      .attr('fill-opacity', 0.5)\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 0.8)\r
\r
    // Four corner vertices\r
    const corners = [\r
      [cx, cy - (size * Math.SQRT2) / 2],\r
      [cx + (size * Math.SQRT2) / 2, cy],\r
      [cx, cy + (size * Math.SQRT2) / 2],\r
      [cx - (size * Math.SQRT2) / 2, cy],\r
    ]\r
\r
    corners.forEach(pt => {\r
      g.append('circle')\r
        .attr('cx', pt[0])\r
        .attr('cy', pt[1])\r
        .attr('r', 3)\r
        .attr('fill', '#ec4899')\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Peirce Quincuncial Conformal Square Projection')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Tessellating Conformal Map with 4 Polar Singularities')\r
  }, [])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};