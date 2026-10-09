var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'stacked-diverging-bar',\r
  title: 'Stacked Diverging Bar',\r
  desc: 'Stacked Diverging Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StackedDivergingBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","stacked-diverging-bar"],\r
}\r
\r
export default function StackedDivergingBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"category":"Strongly Disagree","disagree":5,"neutral":8,"agree":45,"stronglyAgree":32},{"category":"Disagree","disagree":12,"neutral":15,"agree":38,"stronglyAgree":25},{"category":"Neutral","disagree":8,"neutral":20,"agree":40,"stronglyAgree":22},{"category":"Agree","disagree":3,"neutral":10,"agree":50,"stronglyAgree":30},{"category":"Strongly Agree","disagree":2,"neutral":5,"agree":35,"stronglyAgree":48}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const barH = IH / n * 0.7\r
    const gap = IH / n\r
    const zeroX = IW / 2\r
\r
    const xNeg = d3.scaleLinear().domain([0, d3.max(data, d => d.disagree + d.neutral) * 1.1]).range([zeroX, 0])\r
    const xPos = d3.scaleLinear().domain([0, d3.max(data, d => d.agree + d.stronglyAgree) * 1.1]).range([zeroX, IW])\r
\r
    data.forEach((d, i) => {\r
      const y = M.top + i * gap + (gap - barH) / 2\r
\r
      // Disagree (red, left)\r
      svg.append('rect').attr('x', zeroX - xNeg(d.disagree)).attr('y', y)\r
        .attr('width', xNeg(d.disagree)).attr('height', barH)\r
        .attr('fill', colors[3]).attr('opacity', 0.8).attr('rx', 2)\r
\r
      // Neutral (gray, left)\r
      svg.append('rect').attr('x', zeroX - xNeg(d.disagree + d.neutral)).attr('y', y)\r
        .attr('width', xNeg(d.neutral)).attr('height', barH)\r
        .attr('fill', '#6b7280').attr('opacity', 0.6).attr('rx', 2)\r
\r
      // Agree (green, right)\r
      svg.append('rect').attr('x', zeroX).attr('y', y)\r
        .attr('width', xPos(d.agree)).attr('height', barH)\r
        .attr('fill', colors[2]).attr('opacity', 0.8).attr('rx', 2)\r
\r
      // Strongly Agree (dark green, right)\r
      svg.append('rect').attr('x', zeroX + xPos(d.agree)).attr('y', y)\r
        .attr('width', xPos(d.stronglyAgree)).attr('height', barH)\r
        .attr('fill', colors[0]).attr('opacity', 0.8).attr('rx', 2)\r
\r
      // Label\r
      svg.append('text').attr('x', zeroX - 6).attr('y', y + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '10px').text(d.category)\r
    })\r
\r
    // Zero line\r
    svg.append('line').attr('x1', zeroX).attr('x2', zeroX).attr('y1', M.top).attr('y2', M.top + IH)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5)\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Stacked Diverging Bar (Likert)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};