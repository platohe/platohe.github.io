var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-rain',\r
  title: 'Line Rain',\r
  desc: 'Line Rain — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineRain',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-rain"],\r
}\r
\r
export default function LineRain({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 80\r
    const line = d3.line().defined(d=>Number.isFinite(d)).x((d, i) => (i / N) * W).y(d => d).curve(d3.curveCatmullRom.alpha(0.5))\r
    const baseRaw = Array.from({ length: N + 1 }, (_, i) => H / 2 + Math.sin(i * 0.1) * 30)\r
    const base = baseRaw.map(v=>Number.isFinite(v)?v:H/2)\r
    const initPath=line(base)\r
    const track = svg.append('path').attr('d', (initPath&&!initPath.includes('NaN'))?initPath:'').attr('fill', 'none')\r
      .attr('stroke', colors[0]).attr('stroke-width', 2).attr('opacity', 0.6)\r
\r
    const drops = Array.from({ length: 15 }, () => {\r
      const idx=Math.floor(Math.random()* (base.length||1))\r
      const bv=base[idx]\r
      const ty=Number.isFinite(bv)? bv + Math.random()*20 : H/2\r
      return {\r
      x: Math.random() * W, targetY: ty,\r
      y: Math.random() * H * 0.5, vy: 0, r: 1.5 + Math.random()\r
    }})\r
    const dotR = 3\r
    const dropsSel = svg.append('g').selectAll('circle').data(drops).join('circle')\r
      .attr('r', d => Number.isFinite(d.r)?d.r:1.5).attr('fill', colors[4]).attr('opacity', 0.8)\r
    const dropNodes=dropsSel.nodes()\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      drops.forEach(d => {\r
        if(!Number.isFinite(d.vy)||!Number.isFinite(d.y)) return\r
        d.vy += 0.3; d.y += d.vy\r
        if(!Number.isFinite(d.y)||!Number.isFinite(d.targetY)) return\r
        if (d.y >= d.targetY) { d.y = d.targetY; d.vy = 0; \r
          const nIdx=Math.floor(Math.random() * N)\r
          const bv=base[Math.max(0,Math.min(N, Number.isFinite(nIdx)?nIdx:0))]\r
          d.targetY = Number.isFinite(bv)? bv + Math.random()*20 : H/2 }\r
        if(!Number.isFinite(d.y)) return\r
        const idx=drops.indexOf(d)\r
        const node=dropNodes[idx]\r
        if(!node) return\r
        node.setAttribute('cy', d.y)\r
      })\r
      const pts = base.map((v, i) => {\r
        const bv=Number.isFinite(v)?v:H/2\r
        return bv + Math.sin(t * 2 + i * 0.1) * 5\r
      })\r
      const safePts=pts.map(v=>Number.isFinite(v)?v:H/2)\r
      const pathD=line(safePts)\r
      if(pathD&&!pathD.includes('NaN')) track.attr('d', pathD)\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};