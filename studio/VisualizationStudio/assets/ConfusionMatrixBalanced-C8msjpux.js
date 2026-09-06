var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'confusion-matrix-balanced',\r
  title: 'Confusion Matrix Balanced',\r
  desc: 'Confusion Matrix Balanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConfusionMatrixBalanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","confusion-matrix-balanced"],\r
}\r
\r
export default function ConfusionMatrixBalanced({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [[45,8,3],[6,52,7],[4,9,38]]\r
    const data = (customData && Array.isArray(customData) && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const n = data.length; const m = data[0].length\r
    const cellW = (W - M.left - M.right) / m; const cellH = (H - M.top - M.bottom) / n\r
    const maxV = d3.max(data.flat())\r
    const color = d3.scaleSequential(d3.interpolateBlues).domain([0, maxV])\r
    const g = svg.append('g')\r
    data.forEach((row, i) => row.forEach((v, j) => {\r
      g.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH).attr('width', cellW - 1).attr('height', cellH - 1).attr('fill', color(v)).attr('stroke', i === j ? '#6366f1' : 'none').attr('stroke-width', i === j ? 1.5 : 0).attr('rx', 2)\r
      g.append('text').attr('x', M.left + j * cellW + cellW / 2).attr('y', M.top + i * cellH + cellH / 2 + 3).attr('text-anchor', 'middle').attr('fill', v > maxV * 0.5 ? '#fff' : '#111').attr('font-size', '10px').attr('font-weight', 600).text(v)\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};