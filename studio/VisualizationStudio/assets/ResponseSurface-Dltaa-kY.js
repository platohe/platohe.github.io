var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'response-surface',\r
  title: 'Response Surface',\r
  desc: 'Response Surface — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ResponseSurface',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","response-surface"],\r
}\r
\r
export default function ResponseSurface({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [[49.202,46.897,45.705,43.339,40.35],[59.227,54.544,48.04,41.441,36.783],[64.496,60.728,51.2,41.243,36.416],[64.756,61.079,54.024,46.027,43.198],[61.091,57.696,57.202,54.494,53.117]]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const rows = data.length\r
    const cols = data[0].length\r
\r
    const cellW = IW / cols\r
    const cellH = IH / rows\r
\r
    const minVal = d3.min(data.flat()) || 0\r
    const maxVal = d3.max(data.flat()) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateViridis).domain([minVal, maxVal])\r
\r
    for (let i = 0; i < rows; i++) {\r
      for (let j = 0; j < cols; j++) {\r
        svg.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH)\r
          .attr('width', cellW).attr('height', cellH)\r
          .attr('fill', colorScale(data[i][j])).attr('stroke', 'var(--cell-bg)').attr('stroke-width', 0.5)\r
\r
        if (cellW > 30 && cellH > 20) {\r
          svg.append('text').attr('x', M.left + j * cellW + cellW / 2).attr('y', M.top + i * cellH + cellH / 2 + 4)\r
            .attr('text-anchor', 'middle').attr('fill', Math.abs(data[i][j] - (minVal + maxVal) / 2) > (maxVal - minVal) / 3 ? '#fff' : 'var(--text-primary)')\r
            .attr('font-size', Math.max(8, cellW / 5) + 'px').text(data[i][j].toFixed(1))\r
        }\r
      }\r
    }\r
\r
    // Contour labels on edges\r
    svg.append('text').attr('x', M.left + IW / 2).attr('y', M.top - 8)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Factor B')\r
    svg.append('text').attr('transform', \`translate(10,\${M.top + IH / 2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Factor A')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 16})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Response Surface Contour')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 18})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Response Surface')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};