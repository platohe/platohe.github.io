var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-explosion',\r
  title: 'Particle Explosion',\r
  desc: 'Particle Explosion — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleExplosion',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-explosion"],\r
}\r
\r
export default function ParticleExplosion() {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Background painted once — appending it inside the timer stacked opaque\r
    // rects above the particle layer and rendered a solid black canvas.\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2\r
    let particles = []\r
\r
    const spawnBurst = () => {\r
      for (let k = 0; k < 30; k++) {\r
        const ang = (k / 30) * Math.PI * 2 + Math.random() * 0.5\r
        const spd = 4 + Math.random() * 7\r
        particles.push({\r
          x: cx, y: cy,\r
          vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,\r
          color: colors[Math.floor(Math.random() * colors.length)],\r
          life: 1,\r
          r: 2.5 + Math.random() * 3.5,\r
        })\r
      }\r
    }\r
    spawnBurst()\r
\r
    const timer = d3.timer(elapsed => {\r
      const phase = (elapsed % 2600) / 2600\r
      // Re-burst at the top of each cycle once the previous burst has cleared.\r
      if (phase < 0.04 && particles.length === 0) spawnBurst()\r
\r
      // Reverse loop so splicing never skips a particle.\r
      for (let i = particles.length - 1; i >= 0; i--) {\r
        const p = particles[i]\r
        p.x += p.vx; p.y += p.vy\r
        p.vx *= 0.96; p.vy *= 0.96\r
        p.life -= 0.006\r
        if (p.life <= 0 || p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {\r
          particles.splice(i, 1)\r
        }\r
      }\r
\r
      const circles = g.selectAll('circle').data(particles)\r
      circles.exit().remove()\r
      circles.enter().append('circle')\r
        .merge(circles)\r
        .attr('cx', p => p.x).attr('cy', p => p.y)\r
        .attr('r', p => Math.max(0.5, p.r * p.life))\r
        .attr('fill', p => p.color)\r
        .attr('opacity', p => Math.max(0, p.life) * 0.9)\r
    })\r
\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};