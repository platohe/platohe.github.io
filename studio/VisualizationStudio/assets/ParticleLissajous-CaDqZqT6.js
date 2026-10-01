var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-lissajous',\r
  title: 'Particle Lissajous',\r
  desc: 'Particle Lissajous — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleLissajous',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-lissajous"],\r
}\r
\r
export default function ParticleLissajous({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { a: 3, b: 2, delta: Math.PI / 2 }\r
    const { a = 3, b = 2, delta = Math.PI / 2 } = config\r
\r
    const cx = W / 2, cy = H / 2, R = 100\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const points = Array.from({ length: 200 }, (_, i) => i / 200)\r
\r
    // Create persistent circles\r
    const circles = svg.append('g').selectAll('circle')\r
      .data(points)\r
      .join('circle')\r
      .attr('r', 2)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      circles\r
        .attr('cx', (d, i) => cx + R * Math.sin(a * (i / 200) * Math.PI * 2 + t))\r
        .attr('cy', (d, i) => cy + R * Math.sin(b * (i / 200) * Math.PI * 2 + delta + t * 0.7))\r
        .attr('fill', (d, i) => colors[Math.floor((i / 200) * colors.length) % colors.length])\r
        .attr('opacity', 0.8)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};