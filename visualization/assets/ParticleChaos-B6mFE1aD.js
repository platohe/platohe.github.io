var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-chaos',\r
  title: 'Particle Chaos',\r
  desc: 'Particle Chaos — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleChaos',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-chaos"],\r
}\r
\r
export default function ParticleChaos({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 50 }\r
    const { count = 50 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const particles = Array.from({ length: count }, (_, i) => ({\r
      x: Math.random() * W,\r
      y: Math.random() * H,\r
      vx: (Math.random() - 0.5) * 3,\r
      vy: (Math.random() - 0.5) * 3,\r
      color: colors[i % colors.length],\r
      size: 2 + Math.random() * 3\r
    }))\r
\r
    // Create persistent circles\r
    const circles = svg.append('g').selectAll('circle')\r
      .data(particles)\r
      .join('circle')\r
      .attr('r', d => d.size)\r
      .attr('fill', d => d.color)\r
      .attr('opacity', 0.7)\r
\r
    const timer = d3.timer(() => {\r
      particles.forEach(p => {\r
        p.x += p.vx; p.y += p.vy\r
        if (p.x < 0 || p.x > W) p.vx *= -1\r
        if (p.y < 0 || p.y > H) p.vy *= -1\r
      })\r
      circles.attr('cx', d => d.x).attr('cy', d => d.y)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};