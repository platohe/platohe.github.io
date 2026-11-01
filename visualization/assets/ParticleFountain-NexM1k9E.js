var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-fountain',\r
  title: 'Particle Fountain',\r
  desc: 'Particle Fountain — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleFountain',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-fountain"],\r
}\r
\r
export default function ParticleFountain({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const particles = []\r
    const spawn = () => ({\r
      x: W / 2 + (Math.random() - 0.5) * 10,\r
      y: H - 10,\r
      vy: -(6 + Math.random() * 5),\r
      vx: (Math.random() - 0.5) * 2,\r
      color: colors[Math.floor(Math.random() * colors.length)],\r
      life: 1,\r
      trail: []\r
    })\r
\r
    // Persistent circle group\r
    const g = svg.append('g')\r
\r
    const timer = d3.timer(elapsed => {\r
      if (particles.length < 30 && Math.random() < 0.15) particles.push(spawn())\r
\r
      for (let i = particles.length - 1; i >= 0; i--) {\r
        const p = particles[i]\r
        p.trail.push({ x: p.x, y: p.y })\r
        if (p.trail.length > 12) p.trail.shift()\r
        p.vy += 0.15; p.x += p.vx; p.y += p.vy; p.life -= 0.012\r
        if (p.life <= 0 || p.y > H) { particles.splice(i, 1) }\r
      }\r
\r
      // Flatten all trail + head points\r
      const allPoints = particles.flatMap(p =>\r
        p.trail.map((t, ti) => ({ x: t.x, y: t.y, color: p.color, alpha: ti / p.trail.length * p.life * 0.4, size: 1.2, head: false }))\r
          .concat([{ x: p.x, y: p.y, color: p.color, alpha: p.life, size: 3, head: true }])\r
      )\r
\r
      const circles = g.selectAll('circle').data(allPoints)\r
      circles.enter()\r
        .append('circle')\r
        .merge(circles)\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.y)\r
        .attr('r', d => d.size)\r
        .attr('fill', d => d.color)\r
        .attr('opacity', d => d.alpha)\r
      circles.exit().remove()\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};