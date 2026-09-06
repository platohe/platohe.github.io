var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-fountain',\r
  title: 'Line Fountain',\r
  desc: 'Line Fountain — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineFountain',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-fountain"],\r
}\r
\r
export default function LineFountain({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const cx = W / 2, ground = H - 20\r
    const particles = Array.from({ length: 40 }, (_, i) => ({\r
      x: cx, y: ground, vx: (Math.random() - 0.5) * 3, vy: -(8 + Math.random() * 6),\r
      color: colors[i % colors.length], r: 2 + Math.random() * 2\r
    }))\r
    const dotsSel = svg.append('g').selectAll('circle').data(particles).join('circle')\r
      .attr('r', d => Number.isFinite(d.r)?d.r:2).attr('fill', d => d.color)\r
    const dotNodes = dotsSel.nodes()\r
\r
    const timer = d3.timer(elapsed => {\r
      const g = 0.15\r
      particles.forEach(p => {\r
        if(!Number.isFinite(p.vy)||!Number.isFinite(p.x)||!Number.isFinite(p.y)||!Number.isFinite(p.vx)) return\r
        p.vy += g; p.x += p.vx; p.y += p.vy\r
        if (p.y >= ground) { p.y = ground; p.vy = -(8 + Math.random() * 6); p.vx = (Math.random() - 0.5) * 3 }\r
        if(!Number.isFinite(p.x)||!Number.isFinite(p.y)) return\r
        const idx=particles.indexOf(p)\r
        const node=dotNodes[idx]\r
        if(!node) return\r
        node.setAttribute('cx', p.x)\r
        node.setAttribute('cy', p.y)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};