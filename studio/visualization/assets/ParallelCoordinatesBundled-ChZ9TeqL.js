var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ParallelCoordinatesBundled: Translucent bundled ribbons.\r
export const meta = {\r
  id: 'parallel-coordinates-bundled',\r
  title: 'Parallel Coordinates Bundled',\r
  desc: 'Parallel Coordinates Bundled — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'ParallelCoordinatesBundled',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","parallel-coordinates-bundled"],\r
}\r
\r
export default function ParallelCoordinatesBundled({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"headers":["Air","Transit","Cost","Green","Nightlife"],"rows":[{"name":"Berlin","Air":62,"Transit":90,"Cost":55,"Green":78,"Nightlife":95},{"name":"Tokyo","Air":70,"Transit":96,"Cost":40,"Green":60,"Nightlife":85},{"name":"Austin","Air":55,"Transit":35,"Cost":65,"Green":50,"Nightlife":75},{"name":"Oslo","Air":88,"Transit":74,"Cost":30,"Green":85,"Nightlife":55},{"name":"Lima","Air":48,"Transit":52,"Cost":72,"Green":42,"Nightlife":68},{"name":"Seoul","Air":66,"Transit":92,"Cost":52,"Green":58,"Nightlife":88}]}\r
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
      const pts = data.headers.map((h, hi) => [xs(hi), scales[hi](r[h])])\r
      g.append('path').attr('d', d3.line()(pts)).attr('fill', 'none')\r
        .attr('stroke', c).attr('stroke-width', 1.6)\r
        .attr('stroke-opacity', 0.45)\r
      g.append('text').attr('x', xs(0) - 8).attr('y', pts[0][1] + 3).attr('text-anchor', 'end').attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(r.name)\r
    })\r
    \r
    void data\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};