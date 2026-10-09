var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'main-effects-plot',\r
  title: 'Main Effects Plot',\r
  desc: 'Main Effects Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MainEffectsPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","main-effects-plot"],\r
}\r
\r
export default function MainEffectsPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"factor":"Temperature","level":"Low","response":45},{"factor":"Temperature","level":"High","response":78},{"factor":"Pressure","level":"Low","response":52},{"factor":"Pressure","level":"High","response":65},{"factor":"Catalyst","level":"A","response":40},{"factor":"Catalyst","level":"B","response":75}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const factors = [...new Set(data.map(d => d.factor))]\r
    const levels = [...new Set(data.map(d => d.level))]\r
    const nFactors = factors.length\r
    const panelW = IW / nFactors\r
    const panelH = IH\r
\r
    const x = d3.scaleBand().domain(levels).range([0, panelW]).padding(0.3)\r
    const y = d3.scaleLinear().domain([d3.min(data, d => d.response) - 5, d3.max(data, d => d.response) + 5]).range([panelH, 0])\r
\r
    factors.forEach((factor, fi) => {\r
      const factorData = data.filter(d => d.factor === factor)\r
      const ox = M.left + fi * panelW\r
\r
      // Panel bg\r
      svg.append('rect').attr('x', ox).attr('y', M.top).attr('width', panelW).attr('height', panelH)\r
        .attr('fill', 'var(--panel-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
      // Grid\r
      svg.append('g').attr('transform', \`translate(\${ox},\${M.top})\`)\r
        .call(d3.axisLeft(y).ticks(3).tickSize(-(panelW - 10)).tickPadding(0))\r
        .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3)).call(g => g.selectAll('text').remove()).lower()\r
\r
      // Bars\r
      factorData.forEach(d => {\r
        svg.append('rect').attr('x', ox + x(d.level)).attr('y', M.top + y(d.response))\r
          .attr('width', x.bandwidth()).attr('height', y(0) - y(d.response))\r
          .attr('fill', colors[fi % colors.length]).attr('opacity', 0.8).attr('rx', 2)\r
      })\r
\r
      // Line connecting means\r
      if (factorData.length === 2) {\r
        svg.append('line').attr('x1', ox + x(factorData[0].level) + x.bandwidth() / 2)\r
          .attr('x2', ox + x(factorData[1].level) + x.bandwidth() / 2)\r
          .attr('y1', M.top + y(factorData[0].response)).attr('y2', M.top + y(factorData[1].response))\r
          .attr('stroke', colors[fi % colors.length]).attr('stroke-width', 2)\r
      }\r
\r
      // Factor label\r
      svg.append('text').attr('x', ox + panelW / 2).attr('y', M.top + panelH - 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '10px').text(factor)\r
    })\r
\r
    // Y axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(4).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Main Effects Plot (DOE)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};