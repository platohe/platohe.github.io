var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'tree-branch',\r
  title: 'Tree Branch',\r
  desc: 'Tree Branch — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TreeBranch',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","tree-branch"],\r
}\r
\r
export default function TreeBranch({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, baseY = H - 30\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${baseY})\`)\r
    const rows = Array.isArray(customData) && customData.length > 0 ? customData : null\r
    const maxV = rows ? Math.max(...rows.map(r => Number(r.value ?? r.score ?? 50))) || 1 : 1\r
    const branches = rows\r
      ? rows.map((r, i) => ({\r
          angle: -1.2 + (2.4 * i) / Math.max(1, rows.length - 1),\r
          len: 40 + 60 * (Number(r.value ?? r.score ?? 50) / maxV),\r
          color: colors[i % colors.length],\r
        }))\r
      : [\r
      { angle: -0.5, len: 80, color: colors[0] }, { angle: 0.5, len: 80, color: colors[1] },\r
      { angle: -1.0, len: 60, color: colors[2] }, { angle: 1.0, len: 60, color: colors[3] },\r
    ]\r
    const lines = branches.map(b => g.append('line').attr('stroke', b.color).attr('stroke-width', 4).attr('stroke-linecap', 'round'))\r
    const leaves = branches.map(b => g.append('circle').attr('r', 0).attr('fill', b.color))\r
    const timer = d3.timer(elapsed => {\r
      const grow = Math.min(1, elapsed * 0.001)\r
      branches.forEach((b, i) => {\r
        const len = b.len * grow\r
        const sway = Math.sin(elapsed * 0.002 + i) * 5\r
        lines[i].attr('x1', 0).attr('y1', 0).attr('x2', Math.sin(b.angle + sway * 0.02) * len).attr('y2', -len)\r
        leaves[i].attr('cx', Math.sin(b.angle + sway * 0.02) * len).attr('cy', -len).attr('r', 6 * grow)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};