var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-vortex',\r
  title: 'Particle Vortex',\r
  desc: 'Particle Vortex — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleVortex',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-vortex"],\r
}\r
\r
export default function ParticleVortex({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 100 }\r
    const { count = 100 } = config\r
\r
    const cx = W / 2, cy = H / 2\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const particles = Array.from({ length: count }, (_, i) => ({\r
      angle: (i / count) * Math.PI * 2,\r
      radius: 20 + Math.random() * 120,\r
      speed: 0.01 + Math.random() * 0.02,\r
      color: colors[i % colors.length],\r
      size: 1 + Math.random() * 2\r
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
      particles.forEach(p => { p.angle += p.speed })\r
      circles\r
        .attr('cx', d => cx + d.radius * Math.cos(d.angle))\r
        .attr('cy', d => cy + d.radius * Math.sin(d.angle))\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};