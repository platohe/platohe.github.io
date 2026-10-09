var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'particle-boids',\r
  title: 'Particle Boids',\r
  desc: 'Particle Boids — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleBoids',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-boids"],\r
}\r
\r
export default function ParticleBoids() {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const g = svg.append('g')\r
    const boids = Array.from({ length: 20 }, (_, i) => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3, color: colors[i % colors.length] }))\r
    const sep = 20, ali = 0.05, coh = 0.03, maxSpd = 3\r
    let timer\r
    timer = d3.timer(() => {\r
      boids.forEach(b => {\r
        let sx = 0, sy = 0, ax = 0, ay = 0, cx = 0, cy = 0, cn = 0\r
        boids.forEach(o => { if (o === b) return; const d = Math.hypot(b.x - o.x, b.y - o.y); if (d < sep) { sx += (b.x - o.x) / d; sy += (b.y - o.y) / d } ax += o.vx; ay += o.vy; cx += o.x; cy += o.y; cn++ })\r
        if (cn > 0) { ax /= cn; ay /= cn; cx = cx / cn - b.x; cy = cy / cn - b.y }\r
        b.vx += sx * 0.05 + ax * ali + cx * coh; b.vy += sy * 0.05 + ay * ali + cy * coh\r
        const spd = Math.hypot(b.vx, b.vy); if (spd > maxSpd) { b.vx = b.vx / spd * maxSpd; b.vy = b.vy / spd * maxSpd }\r
        b.x += b.vx; b.y += b.vy; if (b.x < 0) b.x = W; if (b.x > W) b.x = 0; if (b.y < 0) b.y = H; if (b.y > H) b.y = 0\r
      })\r
      g.selectAll('*').remove()\r
      boids.forEach(b => { const a = Math.atan2(b.vy, b.vx); g.append('polygon').attr('points', \`\${b.x + Math.cos(a) * 8},\${b.y + Math.sin(a) * 8} \${b.x + Math.cos(a + 2.5) * 5},\${b.y + Math.sin(a + 2.5) * 5} \${b.x + Math.cos(a - 2.5) * 5},\${b.y + Math.sin(a - 2.5) * 5}\`).attr('fill', b.color).attr('opacity', 0.8) })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};