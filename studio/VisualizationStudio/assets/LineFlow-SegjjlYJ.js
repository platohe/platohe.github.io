var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-flow',\r
  title: 'Line Flow',\r
  desc: 'Line Flow — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-flow"],\r
}\r
\r
export default function LineFlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 100\r
    const lineFn = d3.line()\r
      .x((d, i) => (i / N) * W)\r
      .y(d => d).curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const basePath = Array.from({ length: N + 1 }, (_, i) =>\r
      H / 2 + Math.sin(i * 0.1) * 40 + Math.cos(i * 0.05) * 20\r
    )\r
\r
    const trail = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2).attr('opacity', 0.5)\r
    const particles = Array.from({ length: 20 }, (_, i) => ({ t: i / 20, r: 3, color: colors[i % colors.length] }))\r
    const dotsSel = svg.append('g').selectAll('circle').data(particles).join('circle').attr('r', 3)\r
    const dotNodes = dotsSel.nodes()\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      const pts = Array.from({ length: N + 1 }, (_, i) =>{\r
        const b=basePath[i]\r
        const v=Number.isFinite(b)?b:H/2\r
        return v + Math.sin(t + i * 0.08) * 10\r
      })\r
      const safePts=pts.map(v=>Number.isFinite(v)?v:H/2)\r
      const pathD=lineFn(safePts)\r
      if(pathD&&!pathD.includes('NaN')) trail.attr('d', pathD)\r
      particles.forEach(p => {\r
        p.t = (p.t + 0.003) % 1\r
        if(!Number.isFinite(p.t)) p.t=0\r
        const idxRaw=Math.floor(p.t * N)\r
        const idx=Math.max(0,Math.min(N, Number.isFinite(idxRaw)?idxRaw:0))\r
        const cx=idx * W / N\r
        const cy=safePts[idx]\r
        if(!Number.isFinite(cx)||!Number.isFinite(cy)) return\r
        const nodeIdx=particles.indexOf(p)\r
        const node=dotNodes[nodeIdx]\r
        if(!node) return\r
        node.setAttribute('cx', cx)\r
        node.setAttribute('cy', cy)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};