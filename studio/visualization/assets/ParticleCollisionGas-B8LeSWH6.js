var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-collision-gas',\r
  title: 'Particle Collision Gas',\r
  desc: 'Particle Collision Gas — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleCollisionGas',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-collision-gas"],\r
}\r
\r
export default function ParticleCollisionGas({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { seed: 42, iterations: 2000 }\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const parts = []\r
    for (let i = 0; i < 26; i++) {\r
      parts.push({\r
        x: 40 + rnd() * (W - 80), y: 40 + rnd() * (H - 90),\r
        vx: (rnd() - 0.5) * 3.4, vy: (rnd() - 0.5) * 3.4,\r
        r: 4 + rnd() * 3,\r
        color: colors[i % colors.length],\r
      })\r
    }\r
\r
    const circles = g.selectAll('circle.particle').data(parts).join('circle')\r
      .attr('class', 'particle')\r
      .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', d => d.r)\r
      .attr('fill', d => d.color).attr('opacity', 0.8)\r
      .attr('stroke', '#fff').attr('stroke-width', 0.5)\r
\r
    const trails = g.selectAll('circle.trail').data(parts).join('circle')\r
      .attr('class', 'trail')\r
      .attr('r', d => d.r * 0.5)\r
      .attr('fill', d => d.color).attr('opacity', 0.2)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      parts.forEach(p => {\r
        p.x += p.vx; p.y += p.vy\r
        if (p.x < p.r) { p.x = p.r; p.vx *= -1 }\r
        if (p.x > W - p.r) { p.x = W - p.r; p.vx *= -1 }\r
        if (p.y < p.r + 10) { p.y = p.r + 10; p.vy *= -1 }\r
        if (p.y > H - p.r - 20) { p.y = H - p.r - 20; p.vy *= -1 }\r
        // elastic collisions\r
        for (let j = 0; j < parts.length; j++) {\r
          if (j === parts.indexOf(p)) continue\r
          const a = p, b = parts[j]\r
          const dx = a.x - b.x, dy = a.y - b.y\r
          const dist = Math.sqrt(dx * dx + dy * dy)\r
          if (dist < a.r + b.r && dist > 0) {\r
            const nx = dx / dist, ny = dy / dist\r
            const dvx = a.vx - b.vx, dvy = a.vy - b.vy\r
            const dvn = dvx * nx + dvy * ny\r
            if (dvn > 0) {\r
              a.vx -= dvn * nx; a.vy -= dvn * ny\r
              b.vx += dvn * nx; b.vy += dvn * ny\r
            }\r
          }\r
        }\r
      })\r
      circles.attr('cx', d => d.x).attr('cy', d => d.y)\r
      trails.attr('cx', d => d.x - d.vx * 2).attr('cy', d => d.y - d.vy * 2)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};