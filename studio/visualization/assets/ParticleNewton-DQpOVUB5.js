var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-newton',\r
  title: 'Particle Newton',\r
  desc: 'Particle Newton — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleNewton',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-newton"],\r
}\r
\r
export default function ParticleNewton({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 20 }\r
    const { count = 20 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const particles = Array.from({ length: count }, (_, i) => ({\r
      x: 50 + Math.random() * (W - 100),\r
      y: 50 + Math.random() * (H - 100),\r
      vx: (Math.random() - 0.5) * 2,\r
      vy: (Math.random() - 0.5) * 2,\r
      color: colors[i % colors.length],\r
      radius: 6 + Math.random() * 8\r
    }))\r
\r
    // Create persistent circles\r
    const circles = svg.append('g').selectAll('circle')\r
      .data(particles)\r
      .join('circle')\r
      .attr('r', d => d.radius)\r
      .attr('fill', d => d.color)\r
      .attr('opacity', 0.7)\r
\r
    const timer = d3.timer(() => {\r
      particles.forEach(p => {\r
        p.x += p.vx; p.y += p.vy\r
        if (p.x < p.radius || p.x > W - p.radius) p.vx *= -1\r
        if (p.y < p.radius || p.y > H - p.radius) p.vy *= -1\r
      })\r
\r
      // Handle collisions\r
      for (let i = 0; i < particles.length; i++) {\r
        for (let j = i + 1; j < particles.length; j++) {\r
          const a = particles[i], b = particles[j]\r
          const dx = b.x - a.x, dy = b.y - a.y\r
          const dist = Math.sqrt(dx * dx + dy * dy)\r
          const minDist = a.radius + b.radius\r
          if (dist < minDist) {\r
            const nx = dx / dist, ny = dy / dist\r
            const overlap = minDist - dist\r
            a.x -= nx * overlap * 0.5; a.y -= ny * overlap * 0.5\r
            b.x += nx * overlap * 0.5; b.y += ny * overlap * 0.5\r
            const v1 = a.vx * nx + a.vy * ny\r
            const v2 = b.vx * nx + b.vy * ny\r
            a.vx -= (v1 - v2) * nx * 0.8; a.vy -= (v1 - v2) * ny * 0.8\r
            b.vx += (v1 - v2) * nx * 0.8; b.vy += (v1 - v2) * ny * 0.8\r
          }\r
        }\r
      }\r
\r
      circles.attr('cx', d => d.x).attr('cy', d => d.y)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};