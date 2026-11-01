var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-metronome',\r
  title: 'Particle Metronome',\r
  desc: 'Particle Metronome — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleMetronome',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-metronome"],\r
}\r
\r
export default function ParticleMetronome({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 10 }\r
    const { count = 10 } = config\r
    const spacing = W / (count + 1)\r
\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
    svg.append('line')\r
      .attr('x1', 0).attr('y1', 30).attr('x2', W).attr('y2', 30)\r
      .attr('stroke', 'rgba(255,255,255,0.2)').attr('stroke-width', 2)\r
\r
    const pendulums = Array.from({ length: count }, (_, i) => ({\r
      x: spacing * (i + 1),\r
      angle: (Math.random() - 0.5) * 0.3,  // small initial nudge so they move\r
      velocity: 0,\r
      length: 60 + i * 3,\r
      color: colors[i % colors.length],\r
    }))\r
\r
    const lines = svg.append('g')\r
      .selectAll('.string').data(pendulums).join('line')\r
      .attr('class', 'string').attr('stroke', 'rgba(255,255,255,0.3)').attr('stroke-width', 1)\r
      .attr('x1', d => d.x).attr('y1', 30)\r
\r
    const circles = svg.append('g')\r
      .selectAll('.bob').data(pendulums).join('circle')\r
      .attr('class', 'bob').attr('r', 5)\r
      .attr('fill', d => d.color)\r
\r
    const gravity = 0.3\r
    const timer = d3.timer(elapsed => {\r
      pendulums.forEach(p => {\r
        const acceleration = (-gravity / p.length) * Math.sin(p.angle)\r
        p.velocity += acceleration\r
        p.velocity *= 0.999\r
        p.angle += p.velocity\r
      })\r
      lines\r
        .attr('x2', d => d.x + Math.sin(d.angle) * d.length)\r
        .attr('y2', d => 30 + Math.cos(d.angle) * d.length)\r
      circles\r
        .attr('cx', d => d.x + Math.sin(d.angle) * d.length)\r
        .attr('cy', d => 30 + Math.cos(d.angle) * d.length)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};