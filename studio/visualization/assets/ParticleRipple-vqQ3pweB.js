var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-ripple',\r
  title: 'Particle Ripple',\r
  desc: 'Particle Ripple — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleRipple',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-ripple"],\r
}\r
\r
export default function ParticleRipple({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const cx = W / 2, cy = H / 2\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    const g = svg.append('g')\r
    const ripples = []\r
    let last = 0\r
\r
    const timer = d3.timer(elapsed => {\r
      if (elapsed - last > 500) {\r
        ripples.push({ r: 0, opacity: 0.7, color: colors[ripples.length % colors.length] })\r
        last = elapsed\r
      }\r
      ripples.forEach(rp => { rp.r += 1.5; rp.opacity -= 0.008 })\r
      const alive = ripples.filter(rp => rp.opacity > 0)\r
\r
      const circles = g.selectAll('circle').data(alive, (d, i) => i)\r
      circles.exit().remove()\r
      circles.enter()\r
        .append('circle')\r
        .merge(circles)\r
        .attr('cx', cx).attr('cy', cy)\r
        .attr('r', d => d.r)\r
        .attr('fill', 'none')\r
        .attr('stroke', d => d.color)\r
        .attr('stroke-width', 1.5)\r
        .attr('opacity', d => d.opacity)\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};