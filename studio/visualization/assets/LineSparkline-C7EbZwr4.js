var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-sparkline',\r
  title: 'Line Sparkline',\r
  desc: 'Line Sparkline — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineSparkline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-sparkline"],\r
}\r
\r
export default function LineSparkline({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const rawData=Array.isArray(customData)&&customData.length? customData:null\r
    let data\r
    if(rawData){\r
      const mapped=rawData.map(d=>{\r
        if(d==null) return null\r
        if(typeof d==='number') return toNum(d)\r
        if(typeof d==='object'){\r
          const v=toNum(d.value??d.v??d.y)\r
          return v!==null?v:null\r
        }\r
        return toNum(d)\r
      }).filter(v=>v!==null)\r
      if(mapped.length>=2) data=mapped.map(v=> Math.max(5,Math.min(H-30,v)))\r
    }\r
    if(!data||data.length<2) data=Array.from({ length: 30 }, (_, i) => 40 + Math.sin(i * 0.4) * 25 + Math.random() * 15)\r
    data=data.map(v=> Number.isFinite(v)?v:40)\r
    const N = Math.max(data.length - 1,1)\r
    const line = d3.line()\r
      .defined(d=>Number.isFinite(d))\r
      .x((d, i) => (i / N) * (W - 40) + 20)\r
      .y(d => H - 30 - d).curve(d3.curveCatmullRom.alpha(0.5))\r
    const pathD=line(data)\r
    const safePath=(pathD&&!pathD.includes('NaN'))? pathD : ''\r
    const path = svg.append('path').attr('d', safePath).attr('fill', 'none')\r
      .attr('stroke', colors[0]).attr('stroke-width', 2).attr('opacity', 0.7)\r
\r
    const dot = svg.append('circle').attr('r', 5).attr('fill', colors[1]).attr('stroke', '#fff').attr('stroke-width', 2)\r
    const grad = svg.append('defs').append('radialGradient').attr('id', 'dotGlow')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', colors[1]).attr('stop-opacity', 1)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', colors[1]).attr('stop-opacity', 0)\r
\r
    let idx = 0\r
    const timer = d3.timer(elapsed => {\r
      if(!N) return\r
      idx = (idx + 1) % N\r
      const idxSafe=Number.isFinite(idx)?idx:0\r
      const x = (idxSafe / N) * (W - 40) + 20\r
      const v=data[idxSafe]\r
      const y = H - 30 - (Number.isFinite(v)?v:40)\r
      if(!Number.isFinite(x)||!Number.isFinite(y)) return\r
      dot.attr('cx', x).attr('cy', y)\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};