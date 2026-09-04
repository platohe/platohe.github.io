var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'sparkline',\r
  title: 'Sparkline',\r
  desc: 'Sparkline — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Sparkline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","sparkline"],\r
}\r
\r
export default function Sparkline({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Revenue","values":[30,45,35,60,55,80,70,90,85,95],"color":"#6366f1"},{"label":"Expenses","values":[20,25,30,28,35,40,38,45,42,50],"color":"#ef4444"},{"label":"Profit","values":[10,20,5,32,20,40,32,45,43,45],"color":"#10b981"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const cellW = (IW - 20) / data.length\r
    const cellH = IH / 3\r
\r
    data.forEach((series, si) => {\r
      const yOff = si * cellH + 10\r
      const x = d3.scaleLinear().domain([0, series.values.length - 1]).range([0, cellW - 10])\r
      const y = d3.scaleLinear().domain([0, d3.max(series.values) * 1.1]).range([cellH - 5, 0])\r
\r
      const area = d3.area()\r
        .x((d, i) => x(i) + si * cellW + 10)\r
        .y0(y(0) + yOff)\r
        .y1(d => y(d) + yOff)\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      const line = d3.line()\r
        .x((d, i) => x(i) + si * cellW + 10)\r
        .y(d => y(d) + yOff)\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      const gradId = \`sg-\${si}\`\r
      const defs = svg.append('defs')\r
      const grad = defs.append('linearGradient').attr('id', gradId).attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')\r
      grad.append('stop').attr('offset', '0%').attr('stop-color', series.color).attr('stop-opacity', 0.3)\r
      grad.append('stop').attr('offset', '100%').attr('stop-color', series.color).attr('stop-opacity', 0.02)\r
\r
      svg.append('path').datum(series.values).attr('d', area).attr('fill', \`url(#\${gradId})\`)\r
      svg.append('path').datum(series.values).attr('d', line).attr('fill', 'none').attr('stroke', series.color).attr('stroke-width', 1.5)\r
\r
      // Last point\r
      const lastVal = series.values[series.values.length - 1]\r
      svg.append('circle')\r
        .attr('cx', x(series.values.length - 1) + si * cellW + 10)\r
        .attr('cy', y(lastVal) + yOff).attr('r', 2.5)\r
        .attr('fill', series.color)\r
\r
      // Label\r
      svg.append('text')\r
        .attr('x', si * cellW + 4).attr('y', yOff + 8)\r
        .attr('fill', series.color).attr('font-size', '7px').attr('font-weight', '600')\r
        .text(\`\${series.label} \${lastVal}\`)\r
    })\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};