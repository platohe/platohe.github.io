var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'distance-matrix-heatmap',\r
  title: 'Distance Matrix Heatmap',\r
  desc: 'Distance Matrix Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DistanceMatrixHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","distance-matrix-heatmap"],\r
}\r
\r
export default function DistanceMatrixHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [[0,12,28,35],[12,0,18,22],[28,18,0,15],[35,22,15,0]]\r
    const data = (customData && Array.isArray(customData) && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const n = data.length; const m = data[0].length\r
    const cellW = (W - M.left - M.right) / m; const cellH = (H - M.top - M.bottom) / n\r
    const maxV = d3.max(data.flat())\r
    const color = d3.scaleSequential(d3.interpolateViridis).domain([0, maxV])\r
    const g = svg.append('g')\r
    data.forEach((row, i) => row.forEach((v, j) => {\r
      g.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH).attr('width', cellW - 1).attr('height', cellH - 1).attr('fill', color(v)).attr('rx', 2)\r
      g.append('text').attr('x', M.left + j * cellW + cellW / 2).attr('y', M.top + i * cellH + cellH / 2 + 3).attr('text-anchor', 'middle').attr('fill', v > maxV * 0.6 ? '#fff' : '#111').attr('font-size', '9px').text(v)\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};