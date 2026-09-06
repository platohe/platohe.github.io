var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'correlation-diverging-matrix',\r
  title: 'Correlation Diverging Matrix',\r
  desc: 'Correlation Diverging Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CorrelationDivergingMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","correlation-diverging-matrix"],\r
}\r
\r
export default function CorrelationDivergingMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [[1,0.82,0.45,-0.32],[0.82,1,0.61,-0.18],[0.45,0.61,1,0.22],[-0.32,-0.18,0.22,1]]\r
    const data = (customData && Array.isArray(customData) && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const n = data.length; const m = data[0].length\r
    const cellW = (W - M.left - M.right) / m; const cellH = (H - M.top - M.bottom) / n\r
    const g = svg.append('g')\r
    const color = d3.scaleDiverging(d3.interpolateRdBu).domain([-1, 0, 1])\r
    data.forEach((row, i) => row.forEach((v, j) => {\r
      g.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH).attr('width', cellW - 1).attr('height', cellH - 1).attr('fill', color(v)).attr('rx', 2)\r
      g.append('text').attr('x', M.left + j * cellW + cellW / 2).attr('y', M.top + i * cellH + cellH / 2 + 3).attr('text-anchor', 'middle').attr('fill', Math.abs(v) > 0.5 ? '#fff' : '#111').attr('font-size', '9px').text(v.toFixed(2))\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};