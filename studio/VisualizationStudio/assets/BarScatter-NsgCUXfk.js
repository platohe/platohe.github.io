var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-scatter',\r
  title: 'Bar Scatter',\r
  desc: 'Bar Scatter — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarScatter',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-scatter"],\r
}\r
\r
export default function BarScatter({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const rawData=Array.isArray(customData)&&customData.length? customData : null\r
    let data\r
    if(rawData){\r
      const mapped=rawData.map(d=>{\r
        if(d==null) return null\r
        if(typeof d==='number') return toNum(d)\r
        if(typeof d==='object'){\r
          const v=toNum(d.value??d.v??d.h??d.height)\r
          return v!==null?v:null\r
        }\r
        return toNum(d)\r
      }).filter(v=>v!==null&&Number.isFinite(v)&&v>=0)\r
      if(mapped.length) data=mapped.map(v=> Math.max(2, Math.min(200, v)))\r
    }\r
    if(!data||!data.length) data=Array.from({ length: 8 }, () => 30 + Math.random() * 70)\r
    data=data.map(v=> Number.isFinite(v)? Math.max(2,Math.min(H-20,v)):30)\r
    const n = data.length||1, bw = W / n * 0.7, gap = W / n * 0.3\r
    const targetX = data.map((_, i) => i * (bw + gap) + gap / 2)\r
    const targetY = data.map(d => H - 20 - d), targetH = data.map(d => d)\r
\r
    const scatter = data.map(() => ({\r
      x: Math.random() * W, y: Math.random() * H, h: 30+Math.random()*40\r
    }))\r
\r
    const barsG = svg.append('g')\r
    const barsSel = barsG.selectAll('rect').data(data).join('rect')\r
      .attr('x', scatter[0].x).attr('y', scatter[0].y)\r
      .attr('width', bw).attr('height', d => d)\r
      .attr('fill', (d, i) => colors[i % colors.length]).attr('rx', 2)\r
    const barNodes=barsSel.nodes()\r
\r
    let t = 0\r
    const timer = d3.timer(elapsed => {\r
      t = elapsed * 0.001\r
      scatter.forEach((p, i) => {\r
        const tx=targetX[i], ty=targetY[i], th=targetH[i]\r
        if(!Number.isFinite(tx)||!Number.isFinite(ty)||!Number.isFinite(th)) return\r
        p.x += (tx - p.x) * 0.05 + (Math.random() - 0.5) * 2\r
        p.y += (ty - p.y) * 0.05 + (Math.random() - 0.5) * 2\r
        p.h += (th - p.h) * 0.05 + (Math.random() - 0.5)\r
        if(!Number.isFinite(p.x)||!Number.isFinite(p.y)||!Number.isFinite(p.h)) return\r
        const node=barNodes[i]\r
        if(!node) return\r
        node.setAttribute('x', p.x)\r
        node.setAttribute('y', p.y)\r
        node.setAttribute('height', Math.max(2, p.h))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};