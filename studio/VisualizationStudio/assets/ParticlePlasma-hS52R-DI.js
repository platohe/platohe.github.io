var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-plasma',\r
  title: 'Particle Plasma',\r
  desc: 'Particle Plasma — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticlePlasma',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-plasma"],\r
}\r
\r
export default function ParticlePlasma({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 5 }\r
    const { count = 5 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const blobs = Array.from({ length: count }, (_, i) => ({\r
      x: W / 2,\r
      y: H / 2,\r
      color: colors[i % colors.length],\r
      phase: i * 1.3,\r
      rx: 80 + i * 20,\r
      ry: 60 + i * 15\r
    }))\r
\r
    // Create persistent ellipses\r
    const ellipses = svg.append('g').selectAll('ellipse')\r
      .data(blobs)\r
      .join('ellipse')\r
      .attr('cx', W / 2).attr('cy', H / 2)\r
\r
    const timer = d3.timer(elapsed => {\r
      blobs.forEach(b => {\r
        const x = b.x + Math.sin(elapsed * 0.001 + b.phase) * 80\r
        const y = b.y + Math.cos(elapsed * 0.0013 + b.phase) * 60\r
        const rx = b.rx * (0.8 + 0.2 * Math.sin(elapsed * 0.002 + b.phase))\r
        const ry = b.ry * (0.8 + 0.2 * Math.cos(elapsed * 0.0018 + b.phase))\r
        ellipses\r
          .attr('cx', x).attr('cy', y)\r
          .attr('rx', rx).attr('ry', ry)\r
          .attr('fill', b.color)\r
          .attr('opacity', 0.3)\r
      })\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};