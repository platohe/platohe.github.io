var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-drill',\r
  title: 'Treemap Drill',\r
  desc: 'Treemap Drill — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapDrill',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-drill"],\r
}\r
\r
export default function TreemapDrill({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    let level = 0\r
    const sizes = [\r
      [{ x: -180, y: -140, w: 360, h: 280 }],\r
      [{ x: -180, y: -140, w: 180, h: 280 }, { x: 0, y: -140, w: 180, h: 280 }],\r
      [{ x: -180, y: -140, w: 180, h: 140 }, { x: 0, y: -140, w: 180, h: 140 },\r
       { x: -180, y: 0, w: 180, h: 140 }, { x: 0, y: 0, w: 180, h: 140 }],\r
    ]\r
    const depthCap = Array.isArray(customData) && customData.length > 0 ? Math.max(1, Math.min(sizes.length, Math.ceil(customData.length / 4))) : sizes.length\r
    const rEls = sizes[0].map(s =>\r
      svg.append('rect').attr('x', cx + s.x).attr('y', cy + s.y).attr('width', s.w).attr('height', s.h)\r
        .attr('fill', colors[level % colors.length]).attr('opacity', 0.8).attr('rx', 3)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      const newLevel = Math.floor((elapsed * 0.0005) % depthCap)\r
      if (newLevel !== level) {\r
        level = newLevel\r
        svg.selectAll('rect').remove()\r
        sizes[level].forEach((s, i) =>\r
          svg.append('rect').attr('x', cx + s.x).attr('y', cy + s.y).attr('width', s.w).attr('height', s.h)\r
            .attr('fill', colors[i % colors.length]).attr('opacity', 0.8).attr('rx', 3)\r
        )\r
      }\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};