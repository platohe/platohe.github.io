var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-shooting-stars',\r
  title: 'Particle Shooting Stars',\r
  desc: 'Particle Shooting Stars — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleShootingStars',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-shooting-stars"],\r
}\r
\r
export default function ParticleShootingStars({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Draw background + faint starfield once so the sky is never empty black\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#050510')\r
    const field = svg.append('g')\r
    for (let i = 0; i < 60; i++) {\r
      field.append('circle')\r
        .attr('cx', Math.random() * W).attr('cy', Math.random() * H)\r
        .attr('r', 0.3 + Math.random())\r
        .attr('fill', '#94a3b8')\r
        .attr('opacity', 0.15 + Math.random() * 0.35)\r
    }\r
\r
    const g = svg.append('g')\r
    const stars = []\r
\r
    const spawn = () => ({\r
      x: Math.random() * W,\r
      y: Math.random() * H * 0.5,\r
      vx: 3 + Math.random() * 4,\r
      vy: 1 + Math.random() * 2,\r
      len: 40 + Math.random() * 60,\r
      color: colors[Math.floor(Math.random() * colors.length)],\r
      life: 1\r
    })\r
\r
    // Seed a few trails so motion is visible immediately.\r
    for (let i = 0; i < 3; i++) stars.push(spawn())\r
\r
    const timer = d3.timer(() => {\r
      if (Math.random() < 0.05) stars.push(spawn())\r
\r
      for (let i = stars.length - 1; i >= 0; i--) {\r
        const s = stars[i]\r
        s.x += s.vx; s.y += s.vy; s.life -= 0.015\r
        if (s.life <= 0 || s.x > W + 50) { stars.splice(i, 1) }\r
      }\r
\r
      const lineData = stars.map(s => ({\r
        x1: s.x, y1: s.y,\r
        x2: s.x + s.len, y2: s.y - s.len * 0.5,\r
        color: s.color,\r
        opacity: s.life\r
      }))\r
\r
      const lines = g.selectAll('line').data(lineData)\r
      lines.enter()\r
        .append('line')\r
        .merge(lines)\r
        .attr('x1', d => d.x1).attr('y1', d => d.y1)\r
        .attr('x2', d => d.x2).attr('y2', d => d.y2)\r
        .attr('stroke', d => d.color)\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-linecap', 'round')\r
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