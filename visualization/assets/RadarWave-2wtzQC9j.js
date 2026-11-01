var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'radar-wave',\r
  title: 'Radar Wave',\r
  desc: 'Radar Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'RadarWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","radar-wave"],\r
}\r
\r
export default function RadarWave({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { axes: 6, values: [60, 80, 50, 90, 70, 40] }\r
    const { axes = 6, values = [60, 80, 50, 90, 70, 40] } = config\r
\r
    const cx = W / 2, cy = H / 2, R = 100\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Draw static grid circles once\r
    for (let r = 20; r <= R; r += 25) {\r
      const pts = Array.from({ length: axes }, (_, i) => {\r
        const a = (i / axes) * Math.PI * 2\r
        return [Math.cos(a) * r, Math.sin(a) * r]\r
      })\r
      g.append('polygon')\r
        .attr('points', pts.map(p => p.join(',')).join(' '))\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 0.5)\r
    }\r
\r
    const poly = g.append('polygon')\r
      .attr('fill', colors[0])\r
      .attr('fill-opacity', 0.3)\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2)\r
\r
    const timer = d3.timer(elapsed => {\r
      const pts = values.map((v, i) => {\r
        const a = (i / axes) * Math.PI * 2\r
        const w = Math.sin(elapsed * 0.003 + i * 0.8) * 10\r
        return [Math.cos(a) * (v + w), Math.sin(a) * (v + w)]\r
      })\r
      poly.attr('points', pts.map(p => p.join(',')).join(' '))\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};