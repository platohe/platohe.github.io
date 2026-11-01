var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-glow',\r
  title: 'Particle Glow',\r
  desc: 'Particle Glow — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleGlow',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-glow"],\r
}\r
\r
export default function ParticleGlow({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 10 }\r
    const { count = 10 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const particles = Array.from({ length: count }, (_, i) => ({\r
      x: 50 + Math.random() * (W - 100),\r
      y: 50 + Math.random() * (H - 100),\r
      color: colors[i % colors.length],\r
      phase: Math.random() * Math.PI * 2,\r
      baseR: 8 + Math.random() * 12\r
    }))\r
\r
    // Create persistent glow layers\r
    const outerCircles = svg.append('g').selectAll('.outer')\r
      .data(particles).join('circle').attr('class', 'outer').attr('r', d => d.baseR * 2.5).attr('fill', d => d.color).attr('opacity', 0.1)\r
\r
    const midCircles = svg.append('g').selectAll('.mid')\r
      .data(particles).join('circle').attr('class', 'mid').attr('r', d => d.baseR * 1.5).attr('fill', d => d.color).attr('opacity', 0.25)\r
\r
    const innerCircles = svg.append('g').selectAll('.inner')\r
      .data(particles).join('circle').attr('class', 'inner').attr('r', d => d.baseR).attr('fill', d => d.color).attr('opacity', 0.7)\r
\r
    const timer = d3.timer(elapsed => {\r
      particles.forEach(p => {\r
        const pulse = 0.5 + 0.5 * Math.sin(elapsed * 0.002 + p.phase)\r
        const r = p.baseR * (0.7 + pulse * 0.5)\r
        outerCircles.attr('cx', p.x).attr('cy', p.y).attr('r', r * 2.5).attr('opacity', pulse * 0.1)\r
        midCircles.attr('cx', p.x).attr('cy', p.y).attr('r', r * 1.5).attr('opacity', pulse * 0.25)\r
        innerCircles.attr('cx', p.x).attr('cy', p.y).attr('r', r).attr('opacity', 0.7 + pulse * 0.3)\r
      })\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};