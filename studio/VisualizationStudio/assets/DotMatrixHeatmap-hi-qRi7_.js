var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'dot-matrix-heatmap',\r
  title: 'Dot Matrix Heatmap',\r
  desc: 'Dot Matrix Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DotMatrixHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","dot-matrix-heatmap"],\r
}\r
\r
export default function DotMatrixHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [[3,5,2,6],[4,2,7,3],[5,6,3,4],[2,4,5,7]]\r
    const data = (customData && Array.isArray(customData) && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const n = data.length; const m = data[0].length\r
    const cellW = (W - M.left - M.right) / m; const cellH = (H - M.top - M.bottom) / n\r
    const maxV = d3.max(data.flat())\r
    const rScale = d3.scaleSqrt().domain([0, maxV]).range([0, Math.min(cellW, cellH) * 0.4])\r
    const g = svg.append('g')\r
    data.forEach((row, i) => row.forEach((v, j) => {\r
      g.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH).attr('width', cellW - 1).attr('height', cellH - 1).attr('fill', '#f1f5f9').attr('rx', 2)\r
      g.append('circle').attr('cx', M.left + j * cellW + cellW / 2).attr('cy', M.top + i * cellH + cellH / 2).attr('r', rScale(v)).attr('fill', '#6366f1')\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};