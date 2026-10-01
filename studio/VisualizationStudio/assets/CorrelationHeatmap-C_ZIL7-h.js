var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'correlation-heatmap',\r
  title: 'Correlation Heatmap',\r
  desc: 'Correlation Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CorrelationHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","correlation-heatmap"],\r
}\r
\r
export default function CorrelationHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"a":1,"b":0.85},{"a":2,"b":0.72},{"a":1,"c":-0.45},{"a":2,"c":-0.3},{"b":1,"c":0.6},{"b":2,"c":0.55}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    // Default correlation matrix\r
    const matrix = [\r
      [1.0, 0.85, -0.45, 0.30],\r
      [0.85, 1.0, 0.60, -0.20],\r
      [-0.45, 0.60, 1.0, 0.15],\r
      [0.30, -0.20, 0.15, 1.0],\r
    ]\r
    const variables = ['A', 'B', 'C', 'D']\r
    const n = matrix.length\r
\r
    const cellSize = Math.min(IW / (n + 1), IH / (n + 1))\r
    const offsetX = (IW - cellSize * n) / 2\r
    const offsetY = (IH - cellSize * n) / 2 + 10\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateRdBu).domain([-1, 1])\r
\r
    // Cells\r
    for (let i = 0; i < n; i++) {\r
      for (let j = 0; j < n; j++) {\r
        const val = matrix[i][j]\r
        svg.append('rect').attr('x', offsetX + j * cellSize).attr('y', offsetY + i * cellSize)\r
          .attr('width', cellSize - 2).attr('height', cellSize - 2)\r
          .attr('fill', colorScale(val)).attr('rx', 3)\r
\r
        svg.append('text').attr('x', offsetX + j * cellSize + cellSize / 2)\r
          .attr('y', offsetY + i * cellSize + cellSize / 2 + 4)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', Math.abs(val) > 0.5 ? '#fff' : 'var(--text-primary)')\r
          .attr('font-size', '11px').attr('font-weight', Math.abs(val) > 0.7 ? 'bold' : 'normal')\r
          .text(val.toFixed(2))\r
      }\r
    }\r
\r
    // Labels\r
    variables.forEach((v, i) => {\r
      svg.append('text').attr('x', offsetX + i * cellSize + cellSize / 2).attr('y', offsetY - 6)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '11px').text(v)\r
      svg.append('text').attr('x', offsetX - 6).attr('y', offsetY + i * cellSize + cellSize / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '11px').text(v)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Correlation Matrix')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};