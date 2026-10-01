var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'autocorrelation-heatmap',\r
  title: 'Autocorrelation Heatmap',\r
  desc: 'Autocorrelation Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AutocorrelationHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","autocorrelation-heatmap"],\r
}\r
\r
export default function AutocorrelationHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"matrix":[[1,0.741,0.549,0.407,0.301,0.223,0.165,0.122,0.091,0.067,0.05,0.037],[0.741,1,0.741,0.549,0.407,0.301,0.223,0.165,0.122,0.091,0.067,0.05],[0.549,0.741,1,0.741,0.549,0.407,0.301,0.223,0.165,0.122,0.091,0.067],[0.407,0.549,0.741,1,0.741,0.549,0.407,0.301,0.223,0.165,0.122,0.091],[0.301,0.407,0.549,0.741,1,0.741,0.549,0.407,0.301,0.223,0.165,0.122],[0.223,0.301,0.407,0.549,0.741,1,0.741,0.549,0.407,0.301,0.223,0.165],[0.165,0.223,0.301,0.407,0.549,0.741,1,0.741,0.549,0.407,0.301,0.223],[0.122,0.165,0.223,0.301,0.407,0.549,0.741,1,0.741,0.549,0.407,0.301],[0.091,0.122,0.165,0.223,0.301,0.407,0.549,0.741,1,0.741,0.549,0.407],[0.067,0.091,0.122,0.165,0.223,0.301,0.407,0.549,0.741,1,0.741,0.549],[0.05,0.067,0.091,0.122,0.165,0.223,0.301,0.407,0.549,0.741,1,0.741],[0.037,0.05,0.067,0.091,0.122,0.165,0.223,0.301,0.407,0.549,0.741,1]],"labels":["Lag 0","Lag 1","Lag 2","Lag 3","Lag 4","Lag 5","Lag 6","Lag 7","Lag 8","Lag 9","Lag 10","Lag 11"]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && Array.isArray(customData.matrix)) ? customData : DEFAULT_DATA\r
    const matrix = d.matrix || DEFAULT_DATA.matrix\r
    const n = matrix.length\r
    const labels = Array.isArray(d.labels) ? d.labels : (Array.isArray(d.variables) ? d.variables : Array.from({ length: n }, (_, i) => 'Lag ' + i))\r
\r
    const cellSize = Math.min(IW / (n + 1), IH / (n + 1))\r
    const offsetX = (IW - cellSize * n) / 2\r
    const offsetY = (IH - cellSize * n) / 2 + 10\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateRdBu).domain([-1, 1])\r
\r
    for (let i = 0; i < n; i++) {\r
      for (let j = 0; j < n; j++) {\r
        const val = matrix[i][j]\r
        svg.append('rect').attr('x', offsetX + j * cellSize).attr('y', offsetY + i * cellSize)\r
          .attr('width', cellSize - 1).attr('height', cellSize - 1)\r
          .attr('fill', colorScale(val)).attr('rx', 1)\r
\r
        if (cellSize > 20) {\r
          svg.append('text').attr('x', offsetX + j * cellSize + cellSize / 2)\r
            .attr('y', offsetY + i * cellSize + cellSize / 2 + 4)\r
            .attr('text-anchor', 'middle').attr('fill', Math.abs(val) > 0.5 ? '#fff' : 'var(--text-primary)')\r
            .attr('font-size', Math.max(8, cellSize / 4) + 'px').text(val.toFixed(2))\r
        }\r
      }\r
    }\r
\r
    labels.forEach((l, i) => {\r
      svg.append('text').attr('x', offsetX + i * cellSize + cellSize / 2).attr('y', offsetY - 6)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(l)\r
      svg.append('text').attr('x', offsetX - 6).attr('y', offsetY + i * cellSize + cellSize / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(l)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Autocorrelation Heatmap')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};