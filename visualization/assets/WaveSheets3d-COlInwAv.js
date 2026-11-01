var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// WaveSheets3d: WaveSheets3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'wave-sheets3d',\r
  title: 'Wave Sheets3d',\r
  desc: 'Wave Sheets3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WaveSheets3d',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","wave-sheets3d"],\r
}\r
\r
export default function WaveSheets3d({ data: customData }) {\r
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
    for(let sh=0;sh<4;sh++){ let d=''\r
     for(let t=0;t<=24;t++){ const xx=t*7-84; const p=proj(xx,sh*16-24,20*Math.abs(Math.sin(t*0.35+sh))+sh*10)\r
      d+=(d?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke',colors[sh%colors.length]).attr('stroke-width',2.4).attr('stroke-opacity',0.8) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};