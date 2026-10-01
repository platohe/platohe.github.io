var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-sine',\r
  title: 'Bar Sine',\r
  desc: 'Bar Sine — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarSine',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-sine"],\r
}\r
\r
export default function BarSine({ data: customData }) {\r
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
      if(mapped.length) data=mapped.map(v=> Math.max(2, Math.min(H, v)))\r
    }\r
    if(!data||!data.length) data=Array.from({ length: 16 }, () => 40 + Math.random() * 60)\r
    data=data.map(v=> Number.isFinite(v)? Math.max(2,Math.min(H,v)):40)\r
    const n = Math.max(data.length,1), bwRaw = W / n * 0.7, gapRaw = W / n * 0.3\r
    const bw=Number.isFinite(bwRaw)?bwRaw:10, gap=Number.isFinite(gapRaw)?gapRaw:2\r
    const baseYRaw = H / 2\r
    const baseY=Number.isFinite(baseYRaw)?baseYRaw:150\r
\r
    const bars = svg.append('g').selectAll('rect').data(data).join('rect')\r
      .attr('x', (_, i) => i * (bw + gap) + gap / 2)\r
      .attr('y', d => baseY - (Number.isFinite(d)?d:0) / 2).attr('width', bw).attr('height', d => Number.isFinite(d)?d:0)\r
      .attr('fill', (d, i) => colors[i % colors.length]).attr('rx', 1)\r
\r
    const t = Date.now() * 0.001\r
    const timer = d3.timer(elapsed => {\r
      const ts = elapsed * 0.003 + t\r
      bars.each((d, i, nodes) => {\r
        const dv=Number.isFinite(d)?d:0\r
        const shiftRaw = Math.sin(ts + i * 0.4) * 40\r
        const shift=Number.isFinite(shiftRaw)?shiftRaw:0\r
        const nhRaw = dv + Math.sin(ts + i * 0.4) * 30\r
        const nh=Number.isFinite(nhRaw)? Math.max(2, nhRaw):2\r
        const y=baseY - nh/2 + shift\r
        if(!Number.isFinite(y)||!Number.isFinite(nh)) return\r
        d3.select(nodes[i]).attr('y', y).attr('height', nh)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};