var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'significance-matrix',\r
  title: 'Significance Matrix',\r
  desc: 'Significance Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SignificanceMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","significance-matrix"],\r
}\r
\r
export default function SignificanceMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [[1,0.04,0.21,0.001],[0.04,1,0.03,0.15],[0.21,0.03,1,0.08],[0.001,0.15,0.08,1]]\r
    const data = (customData && Array.isArray(customData) && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const n = data.length; const m = data[0].length\r
    const cellW = (W - M.left - M.right) / m; const cellH = (H - M.top - M.bottom) / n\r
    const g = svg.append('g')\r
    data.forEach((row, i) => row.forEach((v, j) => {\r
      const isSig = v < 0.05 && i !== j\r
      g.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH).attr('width', cellW - 1).attr('height', cellH - 1).attr('fill', i === j ? '#e2e8f0' : isSig ? '#10b981' : '#f1f5f9').attr('rx', 2)\r
      g.append('text').attr('x', M.left + j * cellW + cellW / 2).attr('y', M.top + i * cellH + cellH / 2 + 3).attr('text-anchor', 'middle').attr('fill', isSig ? '#fff' : '#334155').attr('font-size', '8px').text(i === j ? '-' : v.toFixed(3))\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};