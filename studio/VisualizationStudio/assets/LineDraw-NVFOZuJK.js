var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-draw',\r
  title: 'Line Draw',\r
  desc: 'Line Draw — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineDraw',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-draw"],\r
}\r
\r
export default function LineDraw({ data: customData }) {\r
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
    if(!data||data.length<2) data=Array.from({ length: 20 }, (_, i) => 50 + Math.sin(i * 0.5) * 30 + Math.random() * 20)\r
    data=data.map(v=> Number.isFinite(v)?v:50)\r
    const N=Math.max(data.length-1,1)\r
    const line = d3.line()\r
      .defined(d=>Number.isFinite(d))\r
      .x((d, i) => (i / N) * (W - 40) + 20)\r
      .y(d => H - 30 - d).curve(d3.curveCatmullRom.alpha(0.5))\r
    const pathD=line(data)\r
    const safePathD=(pathD&&!pathD.includes('NaN'))?pathD:''\r
    const path = svg.append('path')\r
      .attr('d', safePathD)\r
      .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    const domPath = path.node()\r
    let len=0\r
    if (domPath && typeof domPath.getTotalLength === 'function') {\r
      try{\r
        const l=domPath.getTotalLength()\r
        len=Number.isFinite(l)?l:0\r
        if(len) path.attr('stroke-dasharray', len).attr('stroke-dashoffset', len)\r
      }catch(e){}\r
    }\r
\r
    let t = 0, cycling = true\r
    const timer = d3.timer(elapsed => {\r
      t = elapsed * 0.001\r
      const draw = (Math.sin(t * 0.8) + 1) / 2\r
      if(!Number.isFinite(len)||!Number.isFinite(draw)) return\r
      path.attr('stroke-dashoffset', len * (1 - draw))\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};