var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-galaxy',\r
  title: 'Particle Galaxy',\r
  desc: 'Particle Galaxy — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleGalaxy',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-galaxy"],\r
}\r
\r
export default function ParticleGalaxy({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    if (!ref.current) return\r
\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Static background painted once — re-appending it every frame would\r
    // stack opaque rects above the particles and black out the canvas.\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#050510')\r
\r
    const cfg = (customData && typeof customData === 'object' && !Array.isArray(customData)) ? customData : {}\r
    const armsCfg = Number(cfg.arms)\r
    const countCfg = Number(cfg.count)\r
    const arms = Number.isFinite(armsCfg) && armsCfg > 0 ? Math.min(armsCfg, 8) : 3\r
    const count = Number.isFinite(countCfg) && countCfg > 0 ? Math.min(countCfg, 800) : 200\r
\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2\r
    const particles = Array.from({ length: count }, (_, i) => {\r
      const arm = i % arms\r
      const angle = (arm / arms) * Math.PI * 2\r
      const dist = 10 + Math.random() * 130\r
      return {\r
        angle,\r
        dist,\r
        speed: 0.001 + (1 - dist / 140) * 0.004,\r
        size: 0.5 + Math.random() * 2,\r
        color: colors[i % colors.length],\r
      }\r
    })\r
\r
    // Core + particle dots created once; the timer only updates attributes.\r
    const core = g.append('circle')\r
      .attr('cx', cx).attr('cy', cy).attr('r', 5)\r
      .attr('fill', '#f59e0b').attr('opacity', 0.8)\r
\r
    const dots = g.selectAll('circle.dot').data(particles).join('circle')\r
      .attr('class', 'dot')\r
      .attr('r', p => p.size)\r
      .attr('fill', p => p.color)\r
      .attr('opacity', () => 0.6 + Math.random() * 0.2)\r
\r
    const timer = d3.timer(() => {\r
      particles.forEach(p => { p.angle += p.speed })\r
      dots\r
        .attr('cx', p => cx + p.dist * Math.cos(p.angle))\r
        .attr('cy', p => cy + p.dist * Math.sin(p.angle) * 0.6)\r
      core.raise()\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};