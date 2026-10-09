var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// HelixRibbon3d: HelixRibbon3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'helix-ribbon3d',\r
  title: 'Helix Ribbon3d',\r
  desc: 'Helix Ribbon3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HelixRibbon3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","helix-ribbon3d"],\r
}\r
\r
export default function HelixRibbon3d({ data: customData }) {\r
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
    let dA='',dB=''\r
    for(let t=0;t<=60;t++){ const u=t/60*4*Math.PI; const yy=250-t*3.4\r
     dA+=(dA?'L':'M')+(cx+Math.cos(u)*54).toFixed(1)+' '+yy.toFixed(1)\r
     dB+=(dB?'L':'M')+(cx+Math.cos(u+Math.PI)*54).toFixed(1)+' '+yy.toFixed(1) }\r
    g.append('path').attr('d',dA).attr('fill','none').attr('stroke','#6366f1').attr('stroke-width',9).attr('stroke-opacity',0.8).attr('stroke-linecap','round')\r
    g.append('path').attr('d',dB).attr('fill','none').attr('stroke','#10b981').attr('stroke-width',9).attr('stroke-opacity',0.8).attr('stroke-linecap','round')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};