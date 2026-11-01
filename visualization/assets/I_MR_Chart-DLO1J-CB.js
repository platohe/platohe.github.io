var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'i_mr_chart',\r
  title: 'I_ M R_ Chart',\r
  desc: 'I_ M R_ Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'I_MR_Chart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","i_-m-r_-chart"],\r
}\r
\r
export default function I_MR_Chart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"value":50.4},{"period":2,"value":50.2},{"period":3,"value":51.61},{"period":4,"value":52.29},{"period":5,"value":50.99},{"period":6,"value":51.09},{"period":7,"value":50.18},{"period":8,"value":50.68},{"period":9,"value":52.15},{"period":10,"value":52.04},{"period":11,"value":51.03},{"period":12,"value":52.56},{"period":13,"value":53.55},{"period":14,"value":52.77},{"period":15,"value":51.56},{"period":16,"value":51.57},{"period":17,"value":52.31},{"period":18,"value":52.75},{"period":19,"value":50.77},{"period":20,"value":50.65},{"period":21,"value":52},{"period":22,"value":52.21},{"period":23,"value":54.58},{"period":24,"value":54.7},{"period":25,"value":55.77},{"period":26,"value":56.02},{"period":27,"value":56.76},{"period":28,"value":59.89},{"period":29,"value":62.02},{"period":30,"value":62.12}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.value !== undefined) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const panelH = (IH - 20) / 2\r
    const x = d3.scaleLinear().domain([1, n]).range([0, IW])\r
\r
    // Compute MR\r
    const mrData = []\r
    const movingRange = []\r
    for (let i = 1; i < data.length; i++) {\r
      const mr = Math.abs(data[i].value - data[i-1].value)\r
      movingRange.push(mr)\r
      mrData.push({ period: i + 1, mr })\r
    }\r
\r
    const drawPanel = (yScale, yOff, lineData, lineKey, color, title, ucl, lcl) => {\r
      svg.append('rect').attr('x', M.left).attr('y', M.top + yOff).attr('width', IW).attr('height', panelH)\r
        .attr('fill', 'var(--panel-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5);\r
\r
      [ucl, lcl].forEach((val, vi) => {\r
        if (isFinite(val) && val > 0) {\r
          svg.append('line').attr('x1', M.left).attr('x2', M.left + IW).attr('y1', M.top + yOff + yScale(val)).attr('y2', M.top + yOff + yScale(val))\r
            .attr('stroke', vi === 0 ? colors[1] : colors[2]).attr('stroke-width', 1).attr('stroke-dasharray', '4,4').attr('opacity', 0.7)\r
        }\r
      })\r
\r
      const line = d3.line().x(d => x(d.period)).y(d => M.top + yOff + yScale(d[lineKey])).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(lineData).attr('d', line).attr('fill', 'none').attr('stroke', color).attr('stroke-width', 2)\r
\r
      svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + yOff})\`)\r
        .selectAll('circle').data(lineData).join('circle')\r
        .attr('cx', d => x(d.period)).attr('cy', d => yScale(d[lineKey])).attr('r', 3)\r
        .attr('fill', color).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
      svg.append('text').attr('x', M.left + 4).attr('y', M.top + yOff + 14)\r
        .attr('fill', color).attr('font-size', '11px').attr('font-weight', 'bold').text(title)\r
    }\r
\r
    const I_mean = d3.mean(data, d => d.value)\r
    const d2 = 1.693\r
    const sigma = d3.mean(movingRange) / d2\r
    const I_UCL = I_mean + 3 * sigma\r
    const I_LCL = Math.max(0, I_mean - 3 * sigma)\r
\r
    const yI = d3.scaleLinear().domain([I_LCL - sigma, I_UCL + sigma]).range([panelH, 0])\r
    drawPanel(yI, 0, data, 'value', colors[0], 'Individuals (I)', I_UCL, I_LCL)\r
\r
    const MR_mean = d3.mean(movingRange)\r
    const MR_UCL = 3.267 * MR_mean\r
\r
    const yMR = d3.scaleLinear().domain([0, MR_UCL * 1.2]).range([panelH, 0])\r
    drawPanel(yMR, panelH, mrData, 'mr', colors[1], 'Moving Range (MR)', MR_UCL, 0)\r
\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH - 20})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('I-MR Control Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};