var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-orbit',\r
  title: 'Treemap Orbit',\r
  desc: 'Treemap Orbit — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapOrbit',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-orbit"],\r
}\r
\r
export default function TreemapOrbit({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const n = 8\r
    const rects = Array.from({ length: n }, (_, i) => ({\r
      angle: (i / n) * Math.PI * 2, r: 60 + (i % 3) * 20, w: 30, h: 20,\r
      fill: colors[i % colors.length]\r
    }))\r
    const rEls = rects.map(r =>\r
      svg.append('rect').attr('x', cx).attr('y', cy - r.h / 2).attr('width', r.w).attr('height', r.h)\r
        .attr('fill', r.fill).attr('opacity', 0.7).attr('rx', 2)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      rects.forEach((r, i) => {\r
        const a = r.angle + elapsed * 0.001\r
        rEls[i].attr('x', cx + Math.cos(a) * r.r - r.w / 2).attr('y', cy + Math.sin(a) * r.r - r.h / 2)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};