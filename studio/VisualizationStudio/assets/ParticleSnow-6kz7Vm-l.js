var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-snow',\r
  title: 'Particle Snow',\r
  desc: 'Particle Snow — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleSnow',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-snow"],\r
}\r
\r
export default function ParticleSnow({ data: customData }) {\r
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
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0d1a2a')\r
\r
    const flakes = Array.from({ length: count }, () => ({\r
      x: Math.random() * W,\r
      y: Math.random() * H,\r
      r: 1 + Math.random() * 2.5,\r
      vy: 0.5 + Math.random() * 1,\r
      vx: (Math.random() - 0.5) * 0.5,\r
      opacity: 0.4 + Math.random() * 0.6\r
    }))\r
\r
    // Create persistent circles\r
    const circles = svg.append('g').selectAll('circle')\r
      .data(flakes)\r
      .join('circle')\r
      .attr('r', d => d.r)\r
      .attr('fill', '#e8e8f0')\r
      .attr('opacity', d => d.opacity)\r
\r
    const timer = d3.timer(() => {\r
      flakes.forEach(f => {\r
        f.y += f.vy; f.x += f.vx + Math.sin(f.y * 0.02) * 0.3\r
        if (f.y > H + 5) { f.y = -5; f.x = Math.random() * W }\r
        if (f.x < 0) f.x = W; if (f.x > W) f.x = 0\r
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