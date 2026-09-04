var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'euler-diagram',\r
  title: 'Euler Diagram',\r
  desc: 'Euler Diagram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EulerDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","euler-diagram"],\r
}\r
\r
export default function EulerDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const DEFAULT = { sets: [{ label: 'Designers', size: 30 }, { label: 'Engineers', size: 45 }, { label: 'Managers', size: 25 }], intersections: { '0,1': 12, '0,2': 8, '1,2': 10, '0,1,2': 4 } }\r
    const src = customData && customData.sets ? customData : DEFAULT\r
    const r = src.sets.map(s => Math.sqrt(s.size) * 6 + 14)\r
    // heuristic positions to approximate overlap areas\r
    const inter01 = src.intersections['0,1'] || 0\r
    const inter02 = src.intersections['0,2'] || 0\r
    const inter12 = src.intersections['1,2'] || 0\r
    const d01 = r[0] + r[1] - (inter01 / ((src.sets[0].size + src.sets[1].size) / 2)) * Math.min(r[0], r[1]) * 1.1\r
    const d02 = r[0] + r[2] - (inter02 / ((src.sets[0].size + src.sets[2].size) / 2)) * Math.min(r[0], r[2]) * 1.1\r
    const c0 = [150, 150], c1 = [c0[0] + d01, c0[1] - 6], c2 = [c0[0] + d02 * 0.5, c0[1] + 52]\r
    const centers = [c0, c1, c2]\r
    const g = svg.append('g')\r
    centers.forEach((c, i) => {\r
      g.append('circle').attr('cx', c[0]).attr('cy', c[1]).attr('r', r[i])\r
        .attr('fill', colors[i]).attr('fill-opacity', 0.32).attr('stroke', colors[i]).attr('stroke-width', 2)\r
    })\r
    // labels in centers\r
    centers.forEach((c, i) => {\r
      g.append('text').attr('x', c[0]).attr('y', c[1] - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 700).text(src.sets[i].label)\r
      g.append('text').attr('x', c[0]).attr('y', c[1] + 9).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(\`\${src.sets[i].size}\`)\r
    })\r
    // intersection labels at midpoints\r
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]\r
    const pairs = [['0,1', [c0, c1]], ['0,2', [c0, c2]], ['1,2', [c1, c2]]]\r
    pairs.forEach(([k, [a, b]]) => {\r
      const v = src.intersections[k]\r
      if (v) { const m = mid(a, b); g.append('text').attr('x', m[0]).attr('y', m[1]).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '7px').attr('font-weight', 600).text(v) }\r
    })\r
    if (src.intersections['0,1,2']) g.append('text').attr('x', 188).attr('y', 152).attr('text-anchor', 'middle').attr('fill', '#fff').attr('font-size', '7px').attr('font-weight', 700).text(src.intersections['0,1,2'])\r
    svg.append('text').attr('x', 200).attr('y', 16).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 600).text('Euler Diagram (Area-Proportional)')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};