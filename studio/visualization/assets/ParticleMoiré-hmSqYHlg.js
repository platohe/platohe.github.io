var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-moiré',\r
  title: 'Particle Moiré',\r
  desc: 'Particle Moiré — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleMoiré',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-moiré"],\r
}\r
\r
export default function ParticleMoiré({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { circles: 20 }\r
    const { circles = 20 } = config\r
\r
    const cx = W / 2, cy = H / 2\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    // Create two groups of circles\r
    const circles1 = svg.append('g').selectAll('.circles1')\r
      .data(Array.from({ length: circles }, (_, i) => i + 1))\r
      .join('circle')\r
      .attr('class', 'circles1')\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 0.5)\r
      .attr('cx', cx).attr('cy', cy)\r
\r
    const circles2 = svg.append('g').selectAll('.circles2')\r
      .data(Array.from({ length: circles }, (_, i) => i + 1))\r
      .join('circle')\r
      .attr('class', 'circles2')\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[2])\r
      .attr('stroke-width', 0.5)\r
      .attr('cx', cx).attr('cy', cy)\r
\r
    const timer = d3.timer(elapsed => {\r
      const offset = Math.sin(elapsed * 0.001) * 30\r
      circles1.attr('r', d => d * 8).attr('cx', cx - offset).attr('opacity', 0.4)\r
      circles2.attr('r', d => d * 8).attr('cx', cx + offset).attr('opacity', 0.4)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};