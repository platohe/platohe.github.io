var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-pack',\r
  title: 'Treemap Pack',\r
  desc: 'Treemap Pack — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapPack',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-pack"],\r
}\r
\r
export default function TreemapPack({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const rows = Array.isArray(customData) && customData.length > 0 ? customData : null\r
    const nCircles = rows ? Math.max(3, Math.min(24, rows.length)) : 12\r
    const vals = rows ? rows.map(r => Number(r.value ?? r.score ?? 50)) : null\r
    const maxV = vals ? Math.max(...vals) || 1 : 1\r
    let seed = 42\r
    const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648 }\r
    const circles = Array.from({ length: nCircles }, (_, i) => {\r
      const a = (i / nCircles) * Math.PI * 2\r
      const base = rows ? 18 + 22 * (vals[i] / maxV) : 25 + rnd() * 15\r
      const orbit = 40 + 20 * (nCircles / 24)\r
      return { x: cx + Math.cos(a) * orbit, y: cy + Math.sin(a) * orbit, r: base, color: colors[i % colors.length], targetX: cx + Math.cos(a) * orbit, targetY: cy + Math.sin(a) * orbit }\r
    })\r
    const cEls = circles.map(c =>\r
      svg.append('circle').attr('r', 0).attr('fill', c.color).attr('opacity', 0.7)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      const expand = Math.min(1, elapsed * 0.001)\r
      circles.forEach((c, i) => {\r
        const r = c.r * expand\r
        const offset = Math.sin(elapsed * 0.002 + i) * 5 * (1 - expand)\r
        cEls[i].attr('cx', c.targetX + offset).attr('cy', c.targetY + offset).attr('r', r)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};