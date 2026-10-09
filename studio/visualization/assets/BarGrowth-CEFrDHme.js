var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-growth',\r
  title: 'Bar Growth',\r
  desc: 'Bar Growth — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarGrowth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-growth"],\r
}\r
\r
export default function BarGrowth({ data: customData }) {\r
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
      if(mapped.length) data=mapped.map(v=> Math.max(2, Math.min(H-20, v)))\r
    }\r
    if(!data||!data.length) data=Array.from({ length: 8 }, () => 30 + Math.random() * 70)\r
    data=data.map(v=> Number.isFinite(v)? Math.max(2,Math.min(H-20,v)):30)\r
    const n = Math.max(data.length,1), bwRaw = W / n * 0.8, gapRaw = W / n * 0.2\r
    const bw=Number.isFinite(bwRaw)?bwRaw:10, gap=Number.isFinite(gapRaw)?gapRaw:2\r
    const bg = svg.append('g').attr('transform', \`translate(0,\${H - 20})\`)\r
    const cxRaw = W / 2\r
    const cx=Number.isFinite(cxRaw)?cxRaw:W/2\r
\r
    const left = data.slice(0, Math.ceil(n / 2)).reverse()\r
    const right = data.slice(Math.ceil(n / 2))\r
    const all = [...left, ...right]\r
\r
    const bars = bg.selectAll('rect').data(all).join('rect')\r
      .attr('x', (_, i) => cx + (i - (n - 1) / 2) * (bw + gap) - bw / 2)\r
      .attr('y', d => -(Number.isFinite(d)?d:0)).attr('width', bw).attr('height', 0)\r
      .attr('fill', (d, i) => colors[i % colors.length]).attr('rx', 2)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      bars.each((d, i, nodes) => {\r
        const dv=Number.isFinite(d)?d:0\r
        const side = i < left.length ? -1 : 1\r
        const phase = (t + i * 0.25 + side * Math.PI) % (Math.PI * 2)\r
        const growthRaw = (Math.sin(phase) + 1) / 2\r
        const growth=Number.isFinite(growthRaw)?growthRaw:0\r
        const hRaw = dv * growth\r
        const h=Number.isFinite(hRaw)? Math.max(0,hRaw):0\r
        if(!Number.isFinite(h)) return\r
        d3.select(nodes[i]).attr('height', h).attr('y', -h)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};