var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-wave',\r
  title: 'Particle Wave',\r
  desc: 'Particle Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-wave"],\r
}\r
\r
export default function ParticleWave({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { cols: 20, rows: 10 }\r
    const { cols = 20, rows = 10 } = config\r
\r
    const spx = W / (cols - 1), spy = H / (rows - 1)\r
\r
    // Create persistent circles with data join\r
    const circles = svg.append('g').selectAll('circle')\r
      .data(Array.from({ length: cols * rows }, (_, i) => ({\r
        col: i % cols,\r
        row: Math.floor(i / cols),\r
        baseX: (i % cols) * spx,\r
        baseY: Math.floor(i / cols) * spy,\r
        idx: i\r
      })))\r
      .join('circle')\r
      .attr('r', 3)\r
\r
    const timer = d3.timer(elapsed => {\r
      circles.each(function(d) {\r
        const wave = Math.sin((d.baseX + elapsed * 0.03) * 0.03) * 20 + Math.sin((d.row + elapsed * 0.02) * 0.2) * 10\r
        const y = d.baseY + wave\r
        const idx = (d.row * cols + d.col) % colors.length\r
        d3.select(this)\r
          .attr('cx', d.baseX)\r
          .attr('cy', y)\r
          .attr('r', 2.5 + Math.abs(wave) * 0.1)\r
          .attr('fill', colors[idx])\r
          .attr('opacity', 0.6 + Math.abs(wave) * 0.01)\r
      })\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};