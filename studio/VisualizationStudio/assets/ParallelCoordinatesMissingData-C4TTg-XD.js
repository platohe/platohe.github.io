var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ParallelCoordinatesMissingData: Nulls leave gaps with markers.\r
export const meta = {\r
  id: 'parallel-coordinates-missing-data',\r
  title: 'Parallel Coordinates Missing Data',\r
  desc: 'Parallel Coordinates Missing Data — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'ParallelCoordinatesMissingData',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","parallel-coordinates-missing-data"],\r
}\r
\r
export default function ParallelCoordinatesMissingData({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"headers":["Speed","Power","Economy","Safety"],"rows":[{"name":"Model X","Speed":70,"Power":null,"Economy":55,"Safety":80},{"name":"Model Y","Speed":null,"Power":66,"Economy":48,"Safety":74},{"name":"Model Z","Speed":62,"Power":58,"Economy":null,"Safety":69},{"name":"Full","Speed":76,"Power":72,"Economy":60,"Safety":85}]}\r
    const data = (customData && Array.isArray(customData.rows) && customData.headers) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
\r
    const n = data.headers.length\r
    const xs = (i) => 45 + i * ((W - 90) / (n - 1))\r
    const y0 = 252\r
    const band = 192\r
    const rows2 = data.rows.filter(r => data.headers.every(h => typeof r[h] === 'number'))\r
    const invertSet = new Set([])\r
    const scales = data.headers.map((h, hi) => {\r
      const dm = [d3.min(rows2, r => r[h]), d3.max(rows2, r => r[h])]\r
      const rg = invertSet.has(hi) ? [y0 - 8 - band, y0 - 8] : [y0 - 8, y0 - 8 - band]\r
      return d3.scaleLinear().domain(dm).range(rg)\r
    })\r
    data.headers.forEach((h, i) => {\r
      const x = xs(i)\r
      g.append('line').attr('x1', x).attr('x2', x).attr('y1', y0 - 8 - band).attr('y2', y0 - 8).attr('stroke', 'var(--border)')\r
      g.append('text').attr('x', x).attr('y', y0 + 16).attr('text-anchor', 'middle')\r
        .attr('font-size', '9px').attr('font-weight', 600).attr('fill', 'var(--text-secondary)').text(h)\r
      ;[0.25, 0.5, 0.75, 1].forEach(f => {\r
        g.append('line').attr('x1', x - 3).attr('x2', x + 3).attr('y1', y0 - 8 - band * f).attr('y2', y0 - 8 - band * f)\r
          .attr('stroke', 'var(--border)').attr('stroke-opacity', 0.7)\r
      })\r
    })\r
    \r
    data.rows.forEach((r, idx) => {\r
      const c = colors[idx % colors.length]\r
      const segs = []; let prev = null\r
      const pts = []\r
      data.headers.forEach((h, hi) => {\r
        const val = r[h]\r
        if (val == null) { prev = null; return }\r
        const p = [xs(hi), scales[hi](val)]\r
        if (prev) segs.push([prev, p])\r
        prev = p; pts.push(p)\r
      })\r
      segs.forEach(([p, q]) => g.append('line').attr('x1', p[0]).attr('y1', p[1]).attr('x2', q[0]).attr('y2', q[1])\r
        .attr('stroke', c).attr('stroke-width', 1.8).attr('stroke-opacity', 0.8))\r
      pts.forEach(p => g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 2.6).attr('fill', c))\r
      g.append('text').attr('x', xs(0) - 8).attr('y', pts[0][1] + 3).attr('text-anchor', 'end').attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(r.name)\r
    })\r
    \r
    void data\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};