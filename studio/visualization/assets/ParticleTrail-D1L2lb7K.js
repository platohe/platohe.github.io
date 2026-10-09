var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-trail',\r
  title: 'Particle Trail',\r
  desc: 'Particle Trail — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleTrail',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-trail"],\r
}\r
\r
export default function ParticleTrail({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 8 }\r
    const { count = 8 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const g = svg.append('g')\r
    const particles = Array.from({ length: count }, (_, i) => ({\r
      x: Math.random() * W,\r
      y: Math.random() * H,\r
      vx: (Math.random() - 0.5) * 2,\r
      vy: (Math.random() - 0.5) * 2,\r
      color: colors[i % colors.length],\r
      trail: []\r
    }))\r
\r
    const timer = d3.timer(() => {\r
      particles.forEach(p => {\r
        p.trail.push({ x: p.x, y: p.y })\r
        if (p.trail.length > 25) p.trail.shift()\r
        p.x += p.vx; p.y += p.vy\r
        if (p.x < 0 || p.x > W) p.vx *= -1\r
        if (p.y < 0 || p.y > H) p.vy *= -1\r
      })\r
\r
      // Flatten all points\r
      const allPoints = particles.flatMap(p =>\r
        p.trail.map((t, ti) => ({\r
          x: t.x, y: t.y,\r
          color: p.color,\r
          alpha: ti / p.trail.length * 0.5,\r
          size: 2 * (ti / p.trail.length)\r
        }))\r
        .concat([{ x: p.x, y: p.y, color: p.color, alpha: 0.9, size: 4 }])\r
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