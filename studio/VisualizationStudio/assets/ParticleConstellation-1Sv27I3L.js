var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-constellation',\r
  title: 'Particle Constellation',\r
  desc: 'Particle Constellation — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleConstellation',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-constellation"],\r
}\r
\r
export default function ParticleConstellation({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 40 }\r
    const { count = 40 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#050510')\r
\r
    const stars = Array.from({ length: count }, (_, i) => ({\r
      x: Math.random() * W,\r
      y: Math.random() * H,\r
      vx: (Math.random() - 0.5) * 0.5,\r
      vy: (Math.random() - 0.5) * 0.5,\r
      color: colors[i % colors.length],\r
      size: 1 + Math.random() * 2\r
    }))\r
\r
    // Create persistent star circles\r
    const starCircles = svg.append('g').selectAll('.star')\r
      .data(stars)\r
      .join('circle')\r
      .attr('class', 'star')\r
      .attr('r', d => d.size)\r
      .attr('fill', d => d.color)\r
      .attr('opacity', 0.8)\r
\r
    // Line group\r
    const lineG = svg.append('g').attr('class', 'lines')\r
\r
    const timer = d3.timer(() => {\r
      stars.forEach(s => {\r
        s.x += s.vx; s.y += s.vy\r
        if (s.x < 0 || s.x > W) s.vx *= -1\r
        if (s.y < 0 || s.y > H) s.vy *= -1\r
      })\r
      starCircles.attr('cx', d => d.x).attr('cy', d => d.y)\r
\r
      // Update lines\r
      const lineData = []\r
      for (let i = 0; i < stars.length; i++) {\r
        for (let j = i + 1; j < stars.length; j++) {\r
          const dx = stars[j].x - stars[i].x, dy = stars[j].y - stars[i].y\r
          const dist = Math.sqrt(dx * dx + dy * dy)\r
          if (dist < 80) {\r
            lineData.push({ x1: stars[i].x, y1: stars[i].y, x2: stars[j].x, y2: stars[j].y, opacity: (1 - dist / 80) * 0.3 })\r
          }\r
        }\r
      }\r
      const lines = lineG.selectAll('line').data(lineData)\r
      lines.enter()\r
        .append('line')\r
        .merge(lines)\r
        .attr('x1', d => d.x1).attr('y1', d => d.y1)\r
        .attr('x2', d => d.x2).attr('y2', d => d.y2)\r
        .attr('stroke', d => stars[lineData.indexOf(d)]?.color || colors[0])\r
        .attr('stroke-width', 0.5)\r
        .attr('opacity', d => d.opacity)\r
      lines.exit().remove()\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};