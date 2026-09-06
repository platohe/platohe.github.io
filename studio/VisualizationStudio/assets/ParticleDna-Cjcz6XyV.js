var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-dna',\r
  title: 'Particle Dna',\r
  desc: 'Particle Dna — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleDna',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-dna"],\r
}\r
\r
export default function ParticleDna({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { turns: 5 }\r
    const { turns = 5 } = config\r
\r
    const points = 100\r
    const amplitude = 80\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a1a0a')\r
\r
    // Create persistent paths and lines\r
    const path1 = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
    const path2 = svg.append('path').attr('fill', 'none').attr('stroke', colors[2]).attr('stroke-width', 2)\r
    const rungLines = svg.selectAll('line').data(Array.from({ length: 25 }, (_, i) => i * 4)).join('line')\r
      .attr('stroke', colors[4]).attr('stroke-width', 1).attr('opacity', 0.4)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      const strand1 = Array.from({ length: points }, (_, i) => {\r
        const x = (i / points) * W\r
        const y = H / 2 + Math.sin(x * 0.03 + t) * amplitude\r
        return [x, y]\r
      })\r
      const strand2 = Array.from({ length: points }, (_, i) => {\r
        const x = (i / points) * W\r
        const y = H / 2 + Math.sin(x * 0.03 + t + Math.PI) * amplitude\r
        return [x, y]\r
      })\r
      path1.attr('d', 'M' + strand1.map(p => p.join(',')).join('L')).attr('opacity', 0.8)\r
      path2.attr('d', 'M' + strand2.map(p => p.join(',')).join('L')).attr('opacity', 0.8)\r
      rungLines\r
        .attr('x1', (d, i) => strand1[i * 4][0])\r
        .attr('y1', (d, i) => strand1[i * 4][1])\r
        .attr('x2', (d, i) => strand2[i * 4][0])\r
        .attr('y2', (d, i) => strand2[i * 4][1])\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};