var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-orbit',\r
  title: 'Bar Orbit',\r
  desc: 'Bar Orbit — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarOrbit',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-orbit"],\r
}\r
\r
export default function BarOrbit({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const rawData=Array.isArray(customData)&&customData.length?customData:null\r
    let data\r
    if(rawData){\r
      const mapped=rawData.map(d=>{\r
        if(d==null) return null\r
        if(typeof d==='number') return toNum(d)\r
        if(typeof d==='object'){\r
          const v=toNum(d.value??d.v??d.h)\r
          return v!==null?v:null\r
        }\r
        return toNum(d)\r
      }).filter(v=>v!==null&&Number.isFinite(v)&&v>=0)\r
      if(mapped.length) data=mapped.map(v=> Math.max(2, Math.min(160, v)))\r
    }\r
    if(!data||!data.length) data=Array.from({ length: 8 }, () => 15 + Math.random() * 40)\r
    data=data.map(v=> Number.isFinite(v)? Math.max(2,Math.min(160,v)):15)\r
    const n = Math.max(data.length,1), cxRaw = W / 2, cyRaw = H / 2, RRaw = 110\r
    const cx=Number.isFinite(cxRaw)?cxRaw:W/2, cy=Number.isFinite(cyRaw)?cyRaw:H/2, R=Number.isFinite(RRaw)?RRaw:110\r
\r
    const bars = svg.append('g').selectAll('rect').data(data).join('rect')\r
      .attr('x', -6).attr('y', -R).attr('width', 12).attr('height', d => Number.isFinite(d)?d:0)\r
      .attr('fill', (d, i) => colors[i % colors.length]).attr('rx', 2)\r
\r
    const bg = svg.append('circle').attr('cx', cx).attr('cy', cy).attr('r', R)\r
      .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      bars.attr('transform', (d, i) => \`translate(\${cx},\${cy}) rotate(\${i * (360 / n) + t * 50})\`)\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};