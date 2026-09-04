var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-fireflies',\r
  title: 'Particle Fireflies',\r
  desc: 'Particle Fireflies — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleFireflies',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-fireflies"],\r
}\r
\r
export default function ParticleFireflies({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 15 }\r
    const { count = 15 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#050a05')\r
\r
    const flies = Array.from({ length: count }, (_, i) => ({\r
      x: Math.random() * W,\r
      y: Math.random() * H,\r
      vx: (Math.random() - 0.5) * 0.8,\r
      vy: (Math.random() - 0.5) * 0.8,\r
      color: colors[i % colors.length],\r
      phase: Math.random() * Math.PI * 2\r
    }))\r
\r
    // Create persistent glow layers\r
    const outerCircles = svg.append('g').selectAll('.outer')\r
      .data(flies).join('circle').attr('class', 'outer').attr('r', 10).attr('fill', d => d.color).attr('opacity', 0.15)\r
\r
    const midCircles = svg.append('g').selectAll('.mid')\r
      .data(flies).join('circle').attr('class', 'mid').attr('r', 4).attr('fill', d => d.color).attr('opacity', 0.4)\r
\r
    const innerCircles = svg.append('g').selectAll('.inner')\r
      .data(flies).join('circle').attr('class', 'inner').attr('r', 2).attr('fill', '#fff').attr('opacity', 0.8)\r
\r
    const timer = d3.timer(elapsed => {\r
      flies.forEach(f => {\r
        f.x += f.vx; f.y += f.vy\r
        f.vx += (Math.random() - 0.5) * 0.1; f.vy += (Math.random() - 0.5) * 0.1\r
        if (f.x < 0) f.x = W; if (f.x > W) f.x = 0\r
        if (f.y < 0) f.y = H; if (f.y > H) f.y = 0\r
        f.vx *= 0.98; f.vy *= 0.98\r
      })\r
      const pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(elapsed * 0.003))\r
      outerCircles.attr('cx', d => d.x).attr('cy', d => d.y).attr('opacity', pulse * 0.15)\r
      midCircles.attr('cx', d => d.x).attr('cy', d => d.y).attr('opacity', pulse * 0.4)\r
      innerCircles.attr('cx', d => d.x).attr('cy', d => d.y).attr('opacity', pulse)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};