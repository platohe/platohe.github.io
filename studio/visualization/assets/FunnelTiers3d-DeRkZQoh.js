var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// FunnelTiers3d: FunnelTiers3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'funnel-tiers3d',\r
  title: 'Funnel Tiers3d',\r
  desc: 'Funnel Tiers3d — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelTiers3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-tiers3d"],\r
}\r
\r
export default function FunnelTiers3d({ data: customData }) {\r
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
    const tiers=[['Visitors',120],['Signups',88],['Trials',56],['Paid',28]]\r
    tiers.forEach(([lb,w2],ti)=>{ const yTop=60+ti*48, yBot=yTop+40; const wTop=w2, wBot=(tiers[ti+1]||[0,16])[1]\r
     const pA=proj(-wTop/2,-wTop/2,yTop),pB=proj(wTop/2,wTop/2,yTop),pC=proj(wBot/2,wBot/2,yBot),pD=proj(-wBot/2,-wBot/2,yBot)\r
     g.append('path').attr('d','M'+pA[0]+' '+pA[1]+'L'+pB[0]+' '+pB[1]+'L'+pC[0]+' '+pC[1]+'L'+pD[0]+' '+pD[1]+'Z')\r
      .attr('fill',colors[ti%colors.length]).attr('fill-opacity',0.8).attr('stroke','var(--bg)')\r
     g.append('text').attr('x',cx).attr('y',(pA[1]+pC[1])/2+3).attr('text-anchor','middle').attr('font-size','7.5px').attr('font-weight',700).attr('fill','#fff').text(lb) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};