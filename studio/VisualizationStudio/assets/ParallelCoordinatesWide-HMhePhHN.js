var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ParallelCoordinatesWide: Seven production phases.\r
export const meta = {\r
  id: 'parallel-coordinates-wide',\r
  title: 'Parallel Coordinates Wide',\r
  desc: 'Parallel Coordinates Wide — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'ParallelCoordinatesWide',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","parallel-coordinates-wide"],\r
}\r
\r
export default function ParallelCoordinatesWide({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"headers":["P1","P2","P3","P4","P5","P6","P7"],"rows":[{"name":"Alpha","P1":40,"P2":65,"P3":52,"P4":78,"P5":33,"P6":60,"P7":71},{"name":"Beta","P1":62,"P2":41,"P3":70,"P4":44,"P5":82,"P6":49,"P7":57},{"name":"Gamma","P1":28,"P2":74,"P3":46,"P4":63,"P5":51,"P6":77,"P7":39},{"name":"Delta","P1":75,"P2":52,"P3":84,"P4":36,"P5":67,"P6":42,"P7":80},{"name":"Eps","P1":53,"P2":37,"P3":59,"P4":71,"P5":45,"P6":83,"P7":48}]}\r
    const data = (customData && Array.isArray(customData.rows) && customData.headers) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
\r
    const n = data.headers.length\r
    const xs = (i) => 26 + i * ((W - 52) / (n - 1))\r
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
        .attr('stroke-opacity', 0.85)\r
      g.append('text').attr('x', xs(0) - 8).attr('y', pts[0][1] + 3).attr('text-anchor', 'end').attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(r.name)\r
    })\r
    \r
    void data\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};