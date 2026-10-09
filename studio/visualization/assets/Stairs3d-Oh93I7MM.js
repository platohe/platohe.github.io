var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// Stairs3d: Stairs3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'stairs3d',\r
  title: 'Stairs3d',\r
  desc: 'Stairs3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Stairs3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","stairs3d"],\r
}\r
\r
export default function Stairs3d({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2 + 20\r
    const cos30 = Math.cos(Math.PI / 6), sin30 = Math.sin(Math.PI / 6)\r
    const proj = (x, y, z) => [cx + (x - y) * cos30 * 1.6, cy - z * 2.4 + (x + y) * sin30 * 0.9]\r
    void proj\r
const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16); const r = Math.min(255, ((n >> 16) & 255) * f), gg = Math.min(255, ((n >> 8) & 255) * f), b2 = Math.min(255, (n & 255) * f); return '#' + [r, gg, b2].map(v => Math.round(v).toString(16).padStart(2, '0')).join('') }\r
    const box = (bx, by, bz, w, dpt, ht, col) => { const p00 = proj(bx, by, bz), p10 = proj(bx+w, by, bz), p11 = proj(bx+w, by, bz+ht), p01 = proj(bx, by, bz+ht); const q00 = proj(bx, by+dpt, bz), q10 = proj(bx+w, by+dpt, bz), q11 = proj(bx+w, by+dpt, bz+ht), q01 = proj(bx, by+dpt, bz+ht); const face = (pts, fill) => g.append('path').attr('d', 'M' + pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('L') + 'Z').attr('fill', fill); face([q00, q10, q11, q01], shade(col, 0.55)); face([p10, q10, q11, p11], shade(col, 0.75)); face([p00, p10, p11, p01], shade(col, 1)) }\r
    for(let s=0;s<7;s++) box(s*20-60, 0, s*9, 20, 40, 9, s%2?'#f59e0b':'#6366f1')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};