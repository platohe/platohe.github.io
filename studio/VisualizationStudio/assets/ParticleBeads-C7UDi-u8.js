var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-beads',\r
  title: 'Particle Beads',\r
  desc: 'Particle Beads — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleBeads',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-beads"],\r
}\r
\r
export default function ParticleBeads({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 30 }\r
    const { count = 30 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const beads = Array.from({ length: count }, (_, i) => ({\r
      x: 50 + Math.random() * (W - 100),\r
      y: 50 + Math.random() * (H - 100),\r
      radius: 8 + Math.random() * 15,\r
      color: colors[i % colors.length],\r
      phase: Math.random() * Math.PI * 2,\r
      speed: 0.5 + Math.random() * 1.5\r
    }))\r
\r
    // Create persistent circles\r
    const circles = svg.append('g').selectAll('circle')\r
      .data(beads)\r
      .join('circle')\r
      .attr('r', d => d.radius)\r
      .attr('fill', d => d.color)\r
      .attr('opacity', 0.6)\r
\r
    const innerCircles = svg.append('g').selectAll('.inner')\r
      .data(beads)\r
      .join('circle')\r
      .attr('class', 'inner')\r
      .attr('r', d => d.radius * 0.4)\r
      .attr('fill', '#fff')\r
      .attr('opacity', 0.3)\r
\r
    const timer = d3.timer(elapsed => {\r
      beads.forEach(b => {\r
        b.x += Math.sin(elapsed * 0.001 * b.speed + b.phase) * 0.5\r
        b.y += Math.cos(elapsed * 0.001 * b.speed + b.phase) * 0.3\r
      })\r
      circles.attr('cx', d => d.x).attr('cy', d => d.y)\r
      innerCircles.attr('cx', d => d.x).attr('cy', d => d.y)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};