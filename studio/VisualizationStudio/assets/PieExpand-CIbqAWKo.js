var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'pie-expand',\r
  title: 'Pie Expand',\r
  desc: 'Pie Expand — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieExpand',\r
  complexity: 'beginner',\r
  interactivity: ["drag"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-expand"],\r
}\r
\r
export default function PieExpand({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const rawData=Array.isArray(customData)&&customData.length? customData:null\r
    let data\r
    if(rawData){\r
      const mapped=rawData.map(d=>{\r
        if(d==null) return null\r
        if(typeof d==='number') return toNum(d)\r
        if(typeof d==='object'){\r
          const v=toNum(d.value??d.v)\r
          return v!==null?v:null\r
        }\r
        return toNum(d)\r
      }).filter(v=>v!==null&&v>0)\r
      if(mapped.length) data=mapped\r
    }\r
    if(!data||!data.length) data=[30,20,25,15,10]\r
    data=data.map(v=> Number.isFinite(v)&&v>0? v:10).filter(v=>v>0)\r
    if(!data.length) data=[30,20,25,15,10]\r
    const g = svg.append('g').attr('transform', \`translate(\${W / 2},\${H / 2})\`)\r
    const pie = d3.pie().sort(null).value(v=>v)\r
    const arc = d3.arc().innerRadius(30).outerRadius(100)\r
    const pieData=pie(data)\r
    const arcs = pieData.map((d, i) =>{\r
      const dStr=arc(d)\r
      const safeD=(dStr&&!dStr.includes('NaN'))?dStr:''\r
      return g.append('path').attr('d', safeD).attr('fill', colors[i % colors.length]).attr('opacity', 0.85)\r
    })\r
    const timer = d3.timer(elapsed => {\r
      const sRaw = 1 + Math.sin(elapsed * 0.003) * 0.15\r
      const s=Number.isFinite(sRaw)? sRaw:1\r
      arcs.forEach((a, i) => {\r
        const d=pieData[i]\r
        if(!d) return\r
        const inner=30 + i*3\r
        const outer=100*s\r
        if(!Number.isFinite(inner)||!Number.isFinite(outer)) return\r
        const expanded = d3.arc().innerRadius(inner).outerRadius(outer)\r
        const dStr=expanded(d)\r
        if(!dStr||dStr.includes('NaN')) return\r
        a.attr('d', dStr)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};