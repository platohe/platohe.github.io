var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-height-swap',\r
  title: 'Bar Height Swap',\r
  desc: 'Bar Height Swap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarHeightSwap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-height-swap"],\r
}\r
\r
export default function BarHeightSwap({ data: customData }) {\r
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
    if(!data||!data.length) data=Array.from({ length: 8 }, () => 20 + Math.random() * 80)\r
    data=data.map(v=> Number.isFinite(v)? Math.max(2,Math.min(H-20,v)):20)\r
    const n = Math.max(data.length,1), bwRaw = W / n * 0.75, gapRaw = W / n * 0.25\r
    const bw=Number.isFinite(bwRaw)?bwRaw:10, gap=Number.isFinite(gapRaw)?gapRaw:2\r
    const bg = svg.append('g').attr('transform', \`translate(0,\${H - 20})\`)\r
\r
    const values = [...data].map(v=> Number.isFinite(v)?v:20)\r
    const bars = bg.selectAll('rect').data(values).join('rect')\r
      .attr('x', (_, i) => i * (bw + gap))\r
      .attr('y', d => -(Number.isFinite(d)?d:0)).attr('width', bw).attr('height', d => Number.isFinite(d)?d:0)\r
      .attr('fill', (d, i) => colors[i % colors.length]).attr('rx', 2)\r
\r
    const timer = d3.timer(elapsed => {\r
      if (Math.floor(elapsed * 0.001) % 2 === 0 && Math.floor(elapsed * 0.002) % 2 === 1) {\r
        for (let i = 0; i < values.length - 1; i += 2) {\r
          [values[i], values[i + 1]] = [values[i + 1], values[i]]\r
        }\r
      }\r
      bars.transition().duration(400).attr('y', d => -(Number.isFinite(d)?d:0)).attr('height', d => Number.isFinite(d)?d:0)\r
        .attr('fill', (d, i) => colors[i % colors.length])\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};