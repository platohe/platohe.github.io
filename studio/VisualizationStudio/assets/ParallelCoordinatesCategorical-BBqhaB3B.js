var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ParallelCoordinatesCategorical: String categories mapped to positions.\r
export const meta = {\r
  id: 'parallel-coordinates-categorical',\r
  title: 'Parallel Coordinates Categorical',\r
  desc: 'Parallel Coordinates Categorical — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'ParallelCoordinatesCategorical',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","parallel-coordinates-categorical"],\r
}\r
\r
export default function ParallelCoordinatesCategorical({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"headers":["Size","Fuel","Region"],"rows":[{"name":"c1","Size":"Small","Fuel":"EV","Region":"EU"},{"name":"c2","Size":"Large","Fuel":"Diesel","Region":"US"},{"name":"c3","Size":"Medium","Fuel":"Hybrid","Region":"Asia"},{"name":"c4","Size":"Small","Fuel":"Hybrid","Region":"EU"},{"name":"c5","Size":"Large","Fuel":"Petrol","Region":"US"},{"name":"c6","Size":"Medium","Fuel":"EV","Region":"Asia"}]}\r
    const data = (customData && Array.isArray(customData.rows) && customData.headers) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
\r
    const n = data.headers.length\r
    const xs = (i) => 45 + i * ((W - 90) / (n - 1))\r
    const y0 = 252\r
    const band = 192\r
    const scales = data.headers.map(h => {\r
      const dom = [...new Set(data.rows.map(r => r[h]))]\r
      return (val) => (val == null ? y0 - 8 : y0 - 8 - (dom.indexOf(val) / Math.max(dom.length - 1, 1)) * band)\r
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