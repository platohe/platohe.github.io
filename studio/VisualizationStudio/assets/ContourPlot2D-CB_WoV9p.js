var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'contour-plot2d',\r
  title: 'Contour Plot2 D',\r
  desc: 'Contour Plot2 D — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ContourPlot2D',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","contour-plot2-d"],\r
}\r
\r
export default function ContourPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [[53.006,52.241,54.262,53.349,50.874,52.633,51.366,53.124,54.327,52.362],[75.221,75.447,66.68,53.231,41.011,33.299,29.702,30.605,34.351,47.301],[96.26,87.179,75.694,53.134,33.826,16.602,9.276,14.518,25.151,41.267],[100.74,97.983,79.386,57.573,30.842,12.293,0.812,3.551,20.183,42.47],[96.691,93.128,75.612,54.734,34.773,17.87,7.53,8.445,21.703,41.881],[80.297,79.56,69.572,55.582,42.187,26.467,25.095,24.134,35.152,44.379],[57.611,56.271,55.615,52.908,50.123,48.845,43.403,46.99,50.062,49.904],[35.994,35.506,43.125,52.869,57.902,69.03,70.178,71.005,63.634,56.589],[13.845,19.773,31.17,50.97,67.223,82.564,91.677,88.911,79.704,62.428],[3.283,9.833,25.072,47.047,73.823,90.724,102.317,100.295,82.416,62.68]]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && Array.isArray(customData[0])) ? customData : DEFAULT_DATA\r
    const rows = data.length\r
    const cols = data[0].length\r
    const cellW = IW / cols\r
    const cellH = IH / rows\r
\r
    const minVal = d3.min(data.flat()) || 0\r
    const maxVal = d3.max(data.flat()) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateViridis).domain([minVal, maxVal])\r
\r
    // Cells\r
    for (let i = 0; i < rows; i++) {\r
      for (let j = 0; j < cols; j++) {\r
        svg.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH)\r
          .attr('width', cellW).attr('height', cellH)\r
          .attr('fill', colorScale(data[i][j])).attr('stroke', 'var(--cell-bg)').attr('stroke-width', 0.5)\r
      }\r
    }\r
\r
    // Contour lines (simplified)\r
    const levelCount = 5\r
    for (let l = 1; l < levelCount; l++) {\r
      const level = minVal + (maxVal - minVal) * l / levelCount\r
      svg.append('text').attr('x', IW - 6).attr('y', M.top + l * (IH / levelCount))\r
        .attr('text-anchor', 'end').attr('fill', colors[l % colors.length]).attr('font-size', '9px').text(level.toFixed(1))\r
    }\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Contour Plot (2D)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};