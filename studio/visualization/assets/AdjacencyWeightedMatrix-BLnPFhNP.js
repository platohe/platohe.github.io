var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'adjacency-weighted-matrix',\r
  title: 'Adjacency Weighted Matrix',\r
  desc: 'Adjacency Weighted Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AdjacencyWeightedMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","adjacency-weighted-matrix"],\r
}\r
\r
export default function AdjacencyWeightedMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [[0,0.8,0.3,0],[0.8,0,0.6,0.4],[0.3,0.6,0,0.9],[0,0.4,0.9,0]]\r
    const data = (customData && Array.isArray(customData) && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const n = data.length; const m = data[0].length\r
    const cellW = (W - M.left - M.right) / m; const cellH = (H - M.top - M.bottom) / n\r
    const color = d3.scaleSequential(d3.interpolateGreens).domain([0, 1])\r
    const g = svg.append('g')\r
    data.forEach((row, i) => row.forEach((v, j) => {\r
      if (v > 0) g.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH).attr('width', cellW - 1).attr('height', cellH - 1).attr('fill', color(v)).attr('rx', 2)\r
      else g.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH).attr('width', cellW - 1).attr('height', cellH - 1).attr('fill', '#f1f5f9').attr('rx', 2)\r
      g.append('text').attr('x', M.left + j * cellW + cellW / 2).attr('y', M.top + i * cellH + cellH / 2 + 3).attr('text-anchor', 'middle').attr('fill', v > 0.5 ? '#fff' : '#64748b').attr('font-size', '8px').text(v ? v.toFixed(1) : '')\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};