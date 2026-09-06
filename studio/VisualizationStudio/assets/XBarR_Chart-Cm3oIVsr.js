var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'xbar-r_chart',\r
  title: 'X Bar R_ Chart',\r
  desc: 'X Bar R_ Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'XBarR_Chart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","x-bar-r_-chart"],\r
}\r
\r
export default function XBarR_Chart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"mean":50.49,"range":6.78},{"period":2,"mean":50.52,"range":5.92},{"period":3,"mean":49.76,"range":6.85},{"period":4,"mean":49.55,"range":6.83},{"period":5,"mean":48.56,"range":8.06},{"period":6,"mean":48.18,"range":7.56},{"period":7,"mean":50.26,"range":6.7},{"period":8,"mean":48.38,"range":5.59},{"period":9,"mean":49.29,"range":5.29},{"period":10,"mean":49.3,"range":6.55},{"period":11,"mean":51.07,"range":8.53},{"period":12,"mean":50.08,"range":8.56},{"period":13,"mean":48.16,"range":5.96},{"period":14,"mean":50.82,"range":8.57},{"period":15,"mean":49.7,"range":7.01},{"period":16,"mean":51.97,"range":5.62},{"period":17,"mean":49.56,"range":4.34},{"period":18,"mean":52.74,"range":5.44},{"period":19,"mean":49.14,"range":5.96},{"period":20,"mean":54.15,"range":8.11},{"period":21,"mean":54.63,"range":8.43},{"period":22,"mean":53.31,"range":5.36},{"period":23,"mean":53.77,"range":6.8},{"period":24,"mean":54.1,"range":7.32},{"period":25,"mean":55.33,"range":8.99}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.mean !== undefined) ? customData : DEFAULT_DATA\r
    const n = data.length\r
\r
    const panelH = (IH - 20) / 2\r
    const x = d3.scaleLinear().domain([1, n]).range([0, IW])\r
\r
    // XBar chart (top)\r
    const yXbar = d3.scaleLinear().domain([d3.min(data, d => d.mean) - 1, d3.max(data, d => d.mean) + 1]).range([panelH, 0])\r
    const xbarMean = d3.mean(data, d => d.mean)\r
    const xbarUCL = xbarMean + 3 * (d3.deviation(data, d => d.mean) || 1)\r
    const xbarLCL = xbarMean - 3 * (d3.deviation(data, d => d.mean) || 1)\r
\r
    // R chart (bottom)\r
    const yR = d3.scaleLinear().domain([0, d3.max(data, d => d.range) * 1.2]).range([panelH, 0])\r
    const rMean = d3.mean(data, d => d.range)\r
    const rUCL = rMean * 2.114\r
    const rLCL = rMean * 0\r
\r
    const drawPanel = (yScale, yOff, ucl, lcl, lineData, lineKey, color, title) => {\r
      // Panel bg\r
      svg.append('rect').attr('x', M.left).attr('y', M.top + yOff).attr('width', IW).attr('height', panelH)\r
        .attr('fill', 'var(--panel-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5);\r
\r
      // UCL/LCL\r
      [ucl, lcl].forEach((val, vi) => {\r
        if (isFinite(val) && val > 0) {\r
          svg.append('line').attr('x1', M.left).attr('x2', M.left + IW).attr('y1', M.top + yOff + yScale(val)).attr('y2', M.top + yOff + yScale(val))\r
            .attr('stroke', vi === 0 ? colors[1] : colors[2]).attr('stroke-width', 1).attr('stroke-dasharray', '4,4').attr('opacity', 0.7)\r
        }\r
      })\r
\r
      // Center line\r
      svg.append('line').attr('x1', M.left).attr('x2', M.left + IW).attr('y1', M.top + yOff + yScale(lineData?.[0]?.[lineKey] ?? xbarMean)).attr('y2', M.top + yOff + yScale(lineData?.[0]?.[lineKey] ?? xbarMean))\r
        .attr('stroke', colors[0]).attr('stroke-width', 1.5).attr('opacity', 0.5)\r
\r
      // Line\r
      const line = d3.line().x(d => x(d.period)).y(d => M.top + yOff + yScale(d[lineKey])).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(lineData).attr('d', line).attr('fill', 'none').attr('stroke', color).attr('stroke-width', 2)\r
\r
      // Points\r
      svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + yOff})\`)\r
        .selectAll('circle').data(lineData).join('circle')\r
        .attr('cx', d => x(d.period)).attr('cy', d => yScale(d[lineKey])).attr('r', 3)\r
        .attr('fill', color).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
      // Title\r
      svg.append('text').attr('x', M.left + 4).attr('y', M.top + yOff + 14)\r
        .attr('fill', color).attr('font-size', '11px').attr('font-weight', 'bold').text(title)\r
    }\r
\r
    drawPanel(yXbar, 0, xbarUCL, xbarLCL, data, 'mean', colors[0], 'XBar Chart (Mean)')\r
    drawPanel(yR, panelH, rUCL, rLCL, data, 'range', colors[1], 'R Chart (Range)')\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH - 20})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('XBar-R Control Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};