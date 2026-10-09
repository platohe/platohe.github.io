var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'transform-flip',\r
  title: 'Transform Flip',\r
  desc: 'Transform Flip — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TransformFlip',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","transform-flip"],\r
}\r
\r
export default function TransformFlip({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const cards = [\r
      { x: -60, y: -40, w: 50, h: 70, color: colors[0], label: 'A' },\r
      { x: 10, y: -40, w: 50, h: 70, color: colors[1], label: 'B' },\r
      { x: -60, y: 35, w: 50, h: 70, color: colors[2], label: 'C' },\r
      { x: 10, y: 35, w: 50, h: 70, color: colors[3], label: 'D' },\r
    ]\r
    const rEls = cards.map(c =>\r
      svg.append('g').attr('transform', \`translate(\${cx + c.x},\${cy + c.y})\`)\r
        .append('rect').attr('width', c.w).attr('height', c.h).attr('fill', c.color).attr('rx', 4)\r
    )\r
    const labels = cards.map(c =>\r
      svg.append('text').attr('x', cx + c.x + c.w / 2).attr('y', cy + c.y + c.h / 2 + 5)\r
        .attr('text-anchor', 'middle').attr('fill', 'white').attr('font-size', '14px').attr('font-weight', 700).text(c.label)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      cards.forEach((c, i) => {\r
        const flip = Math.sin(elapsed * 0.002 + i * 1.5)\r
        rEls[i].attr('transform', \`skewY(\${flip * 15})\`)\r
        labels[i].attr('opacity', 0.5 + Math.abs(flip) * 0.5)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};