var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ParallelCoordinatesBrushable: Brush selection hint on first axis.\r
export const meta = {\r
  id: 'parallel-coordinates-brushable',\r
  title: 'Parallel Coordinates Brushable',\r
  desc: 'Parallel Coordinates Brushable — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'ParallelCoordinatesBrushable',\r
  complexity: 'beginner',\r
  interactivity: ["brush"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","parallel-coordinates-brushable"],\r
}\r
\r
export default function ParallelCoordinatesBrushable({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"headers":["Speed","Power","Economy","Safety","Comfort"],"rows":[{"name":"Sedan","Speed":70,"Power":55,"Economy":65,"Safety":80,"Comfort":75},{"name":"SUV","Speed":55,"Power":70,"Economy":40,"Safety":85,"Comfort":88},{"name":"Sports","Speed":92,"Power":95,"Economy":25,"Safety":60,"Comfort":45},{"name":"Hatch","Speed":58,"Power":42,"Economy":78,"Safety":68,"Comfort":60},{"name":"Truck","Speed":48,"Power":82,"Economy":30,"Safety":72,"Comfort":66},{"name":"Van","Speed":52,"Power":50,"Economy":48,"Safety":76,"Comfort":84},{"name":"Coupe","Speed":84,"Power":78,"Economy":38,"Safety":62,"Comfort":52}]}\r
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
        .attr('stroke-opacity', 0.85)\r
      g.append('text').attr('x', xs(0) - 8).attr('y', pts[0][1] + 3).attr('text-anchor', 'end').attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(r.name)\r
    })\r
    ;g.append('rect').attr('x', xs(0) - 10).attr('y', y0 - 8 - band * 0.72).attr('width', 20).attr('height', band * 0.72)\r
      .attr('rx', 4).attr('fill', '#6366f1').attr('fill-opacity', 0.08).attr('stroke', '#6366f1').attr('stroke-opacity', 0.4)\r
    void data\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};