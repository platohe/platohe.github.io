var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'tornado-chart',\r
  title: 'Tornado Chart',\r
  desc: 'Tornado Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TornadoChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tornado-chart"],\r
}\r
\r
export default function TornadoChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"factor":"Temperature","low":-15,"high":20},{"factor":"Pressure","low":-10,"high":12},{"factor":"Humidity","low":-8,"high":18},{"factor":"Wind Speed","low":-12,"high":10},{"factor":"Rainfall","low":-6,"high":14}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const maxAbs = d3.max(data, d => Math.max(Math.abs(d.low), d.high)) || 1\r
    const n = data.length\r
    const barH = IH / n * 0.7\r
    const gap = IH / n\r
    const zeroX = IW / 2\r
\r
    const xNeg = d3.scaleLinear().domain([0, maxAbs]).range([zeroX, 0])\r
    const xPos = d3.scaleLinear().domain([0, maxAbs]).range([zeroX, IW])\r
\r
    // Zero line\r
    svg.append('line').attr('x1', zeroX).attr('x2', zeroX).attr('y1', M.top).attr('y2', M.top + IH)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5)\r
\r
    data.forEach((d, i) => {\r
      const y = M.top + i * gap + (gap - barH) / 2\r
\r
      // Negative bar (left)\r
      svg.append('rect').attr('x', zeroX + xNeg(-d.low)).attr('y', y)\r
        .attr('width', Math.abs(xNeg(-d.low))).attr('height', barH)\r
        .attr('fill', colors[3]).attr('opacity', 0.8).attr('rx', 2)\r
\r
      // Positive bar (right)\r
      svg.append('rect').attr('x', zeroX).attr('y', y)\r
        .attr('width', xPos(d.high)).attr('height', barH)\r
        .attr('fill', colors[0]).attr('opacity', 0.8).attr('rx', 2)\r
\r
      // Label\r
      svg.append('text').attr('x', zeroX - 6).attr('y', y + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '10px').text(d.factor)\r
\r
      // Values\r
      svg.append('text').attr('x', zeroX + xNeg(-d.low) - 4).attr('y', y + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', colors[3]).attr('font-size', '9px').text(Math.abs(d.low).toFixed(0))\r
      svg.append('text').attr('x', zeroX + xPos(d.high) + 4).attr('y', y + barH / 2 + 4)\r
        .attr('text-anchor', 'start').attr('fill', colors[0]).attr('font-size', '9px').text(d.high.toFixed(0))\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Sensitivity Range')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Tornado Diagram (Sensitivity Analysis)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};