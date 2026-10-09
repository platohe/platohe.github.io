var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-echo',\r
  title: 'Bar Echo',\r
  desc: 'Bar Echo — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarEcho',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-echo"],\r
}\r
\r
export default function BarEcho({ data: customData }) {\r
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
    const n = Math.max(data.length,1), bwRaw = W / n * 0.7, gapRaw = W / n * 0.3\r
    const bw=Number.isFinite(bwRaw)?bwRaw:10, gap=Number.isFinite(gapRaw)?gapRaw:2\r
    const bg = svg.append('g').attr('transform', \`translate(0,\${H - 20})\`)\r
    const ghostN = 4\r
\r
    const layers = []\r
    for (let li = 0; li <= ghostN; li++) {\r
      const layerData = data.map((d, i) => ({ d, i }))\r
      const sel = bg.selectAll(\`.l\${li}\`).data(layerData)\r
      const rects = sel.join('rect')\r
        .attr('class', \`l\${li}\`)\r
        .attr('x', d => d.i * (bw + gap))\r
        .attr('y', d => -(Number.isFinite(d.d)?d.d:0)).attr('width', bw).attr('height', d => Number.isFinite(d.d)?d.d:0)\r
        .attr('fill', d => colors[d.i % colors.length]).attr('rx', 2)\r
      if (li > 0) rects.attr('opacity', 0.3 - li * 0.06)\r
      layers.push({ rects, layerData })\r
    }\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      layers.forEach(({ rects, layerData: ld }, li) => {\r
        const phase = t - li * 0.35\r
        rects.attr('height', d => {\r
          const dv=Number.isFinite(d.d)?d.d:0\r
          const hRaw = dv * (0.4 + 0.6 * ((Math.sin(phase + d.i * 0.6) + 1) / 2))\r
          const h=Number.isFinite(hRaw)? Math.max(2, hRaw * (1 - li * 0.15)):2\r
          return h\r
        })\r
        rects.attr('y', d => {\r
          const dv=Number.isFinite(d.d)?d.d:0\r
          const hRaw = dv * (0.4 + 0.6 * ((Math.sin(phase + d.i * 0.6) + 1) / 2))\r
          const h=Number.isFinite(hRaw)? Math.max(2, hRaw * (1 - li * 0.15)):2\r
          return -h\r
        })\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};