var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-explosion',\r
  title: 'Treemap Explosion',\r
  desc: 'Treemap Explosion — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapExplosion',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-explosion"],\r
}\r
\r
export default function TreemapExplosion({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const nTiles = Array.isArray(customData) && customData.length > 0 ? Math.max(2, Math.min(16, customData.length)) : 4\r
    const rects = Array.from({ length: nTiles }, (_, i) => ({\r
      x: -100 + (i % Math.ceil(Math.sqrt(nTiles))) * 100,\r
      y: -80 + Math.floor(i / Math.ceil(Math.sqrt(nTiles))) * 80,\r
      w: 100, h: 80, fill: colors[i % colors.length],\r
    }))\r
    const rEls = rects.map(r =>\r
      svg.append('rect').attr('x', cx + r.x).attr('y', cy + r.y).attr('width', r.w).attr('height', r.h)\r
        .attr('fill', r.fill).attr('opacity', 0.8).attr('rx', 2)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      const phase = (elapsed * 0.001) % 1\r
      rects.forEach((r, i) => {\r
        const explode = phase < 0.5 ? phase * 2 : (1 - phase) * 2\r
        const angle = (i / rects.length) * Math.PI * 2\r
        const dist = explode * 60\r
        rEls[i].attr('x', cx + r.x + Math.cos(angle) * dist).attr('y', cy + r.y + Math.sin(angle) * dist)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};