var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'shapwaterfall',\r
  title: 'S H A P Waterfall',\r
  desc: 'S H A P Waterfall — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SHAPWaterfall',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","s-h-a-p-waterfall"],\r
}\r
\r
export default function SHAPWaterfall({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"baseValue":0.45,"features":[{"name":"Age","shap":0.12},{"name":"Income","shap":0.08},{"name":"CreditScore","shap":-0.05},{"name":"DebtRatio","shap":-0.03},{"name":"Employment","shap":0.06}],"predictedValue":0.63}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.baseValue !== undefined) ? customData : DEFAULT_DATA\r
\r
    const n = d.features.length\r
    const barH = IH / (n + 2)\r
    const yOff = M.top\r
\r
    const x = d3.scaleLinear().domain([d.baseValue + d3.sum(d.features, f => Math.abs(f.shap)) + 0.2, d.baseValue + d3.sum(d.features, f => Math.abs(f.shap)) + 0.2 - 0.3]).range([IW, 0])\r
    const midX = IW / 2\r
\r
    // Base value bar\r
    const baseBarH = barH * 0.6\r
    svg.append('rect').attr('x', midX - 30).attr('y', yOff + baseBarH / 2).attr('width', 60).attr('height', baseBarH)\r
      .attr('fill', colors[2]).attr('rx', 3)\r
    svg.append('text').attr('x', midX - 34).attr('y', yOff + baseBarH / 2 + 4)\r
      .attr('text-anchor', 'end').attr('fill', colors[2]).attr('font-size', '10px').text('Base: ' + d.baseValue.toFixed(2))\r
    svg.append('text').attr('x', midX + 34).attr('y', yOff + baseBarH / 2 + 4)\r
      .attr('text-anchor', 'start').attr('fill', colors[2]).attr('font-size', '10px').text('= ' + d.baseValue.toFixed(2))\r
\r
    // Feature bars\r
    let cumulative = d.baseValue\r
    d.features.forEach((f, i) => {\r
      const by = yOff + (i + 1) * barH + barH * 0.1\r
      const barH_f = barH * 0.4\r
      const color = f.shap >= 0 ? colors[0] : colors[3]\r
      const barW = Math.abs(f.shap) * 150\r
\r
      // Bar\r
      const barX = f.shap >= 0 ? midX + (cumulative - d.baseValue) * 150 : midX + (cumulative - d.baseValue) * 150 - barW\r
      svg.append('rect').attr('x', midX + (cumulative - d.baseValue) * 150 - (f.shap >= 0 ? 0 : barW))\r
        .attr('y', by).attr('width', barW).attr('height', barH_f)\r
        .attr('fill', color).attr('opacity', 0.8).attr('rx', 2)\r
\r
      // Label\r
      svg.append('text').attr('x', midX + (cumulative - d.baseValue) * 150 - (f.shap >= 0 ? barW + 4 : -4))\r
        .attr('text-anchor', f.shap >= 0 ? 'end' : 'start')\r
        .attr('fill', color).attr('font-size', '10px').text(f.name + ': ' + (f.shap >= 0 ? '+' : '') + f.shap.toFixed(2))\r
\r
      cumulative += f.shap\r
    })\r
\r
    // Final value\r
    const finalY = yOff + (n + 1) * barH + barH * 0.1\r
    svg.append('rect').attr('x', midX - 30).attr('y', finalY).attr('width', 60).attr('height', baseBarH)\r
      .attr('fill', colors[1]).attr('rx', 3)\r
    svg.append('text').attr('x', midX - 34).attr('y', finalY + baseBarH / 2 + 4)\r
      .attr('text-anchor', 'end').attr('fill', colors[1]).attr('font-size', '10px').text('Pred')\r
    svg.append('text').attr('x', midX + 34).attr('y', finalY + baseBarH / 2 + 4)\r
      .attr('text-anchor', 'start').attr('fill', colors[1]).attr('font-size', '10px').text('= ' + d.predictedValue.toFixed(2))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('SHAP Waterfall Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};