var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'delaunay-mesh',\r
  title: 'Delaunay Mesh',\r
  desc: 'Delaunay Mesh — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DelaunayMesh',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","delaunay-mesh"],\r
}\r
\r
export default function DelaunayMesh({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":20,"y":280},{"x":376.999,"y":193.232},{"x":111.995,"y":49.16},{"x":353.293,"y":232.089},{"x":197.881,"y":273.459},{"x":307.455,"y":145.659},{"x":271.955,"y":106.012},{"x":242.529,"y":260.275},{"x":329.298,"y":254.166},{"x":162.827,"y":91.764},{"x":366.103,"y":158.537},{"x":73.64,"y":276.372},{"x":379.925,"y":223.092},{"x":59.109,"y":34.259},{"x":369.847,"y":204.091},{"x":149.261,"y":279.57},{"x":336.538,"y":181.799},{"x":230.829,"y":63.964},{"x":282.21,"y":240.384},{"x":298.398,"y":269.709},{"x":210.47,"y":132.366},{"x":347.48,"y":119.975},{"x":126.082,"y":265.588},{"x":374.816,"y":247.284},{"x":34.65,"y":77.28},{"x":378.591,"y":170.956},{"x":97.755,"y":278.436},{"x":358.554,"y":213.424},{"x":184.997,"y":20.689},{"x":316.036,"y":214.342}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const pts = (Array.isArray(customData) && customData.length >= 4)\r
      ? customData.map(d => ({ x: d.x ?? d[0], y: d.y ?? d[1] }))\r
      : DEFAULT_DATA\r
\r
    const g = svg.append('g')\r
\r
    const delaunay = d3.Delaunay.from(pts.map(p => [p.x, p.y]))\r
    const voronoi = delaunay.voronoi([0, 0, W, H])\r
\r
    // Voronoi cells\r
    g.selectAll('.voronoi-cell')\r
      .data(pts)\r
      .join('path')\r
      .attr('class', 'voronoi-cell')\r
      .attr('d', (d, i) => voronoi.renderCell(i))\r
      .attr('fill', (d, i) => d3.interpolateCool(i / pts.length))\r
      .attr('fill-opacity', 0.08)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 0.8)\r
      .attr('stroke-opacity', 0.5)\r
\r
    // Delaunay triangulation edges\r
    const triangleG = g.append('g')\r
    for (let i = 0; i < delaunay.triangles.length; i += 3) {\r
      const a = delaunay.triangles[i]\r
      const b = delaunay.triangles[i + 1]\r
      const c = delaunay.triangles[i + 2]\r
      const pa = pts[a], pb = pts[b], pc = pts[c]\r
\r
      triangleG.append('polygon')\r
        .attr('points', \`\${pa.x},\${pa.y} \${pb.x},\${pb.y} \${pc.x},\${pc.y}\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', '#6366f1')\r
        .attr('stroke-width', 1)\r
        .attr('stroke-opacity', 0.5)\r
    }\r
\r
    // Point sites\r
    g.selectAll('.site')\r
      .data(pts)\r
      .join('circle')\r
      .attr('class', 'site')\r
      .attr('cx', d => d.x)\r
      .attr('cy', d => d.y)\r
      .attr('r', 4)\r
      .attr('fill', '#38bdf8')\r
      .attr('stroke', '#ffffff')\r
      .attr('stroke-width', 1.2)\r
\r
    // Circumcenter dots (Voronoi vertices)\r
    const verts = Array.from({ length: delaunay.triangles.length / 3 }, (_, i) => {\r
      const [x, y] = voronoi.circumcenters.slice(i * 2, i * 2 + 2)\r
      return { x, y }\r
    }).filter(v => v.x > 0 && v.x < W && v.y > 0 && v.y < H)\r
\r
    g.selectAll('.vcenter')\r
      .data(verts)\r
      .join('circle')\r
      .attr('class', 'vcenter')\r
      .attr('cx', d => d.x).attr('cy', d => d.y)\r
      .attr('r', 2).attr('fill', '#ec4899').attr('fill-opacity', 0.6)\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Delaunay Triangulation & Voronoi Tessellation')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};