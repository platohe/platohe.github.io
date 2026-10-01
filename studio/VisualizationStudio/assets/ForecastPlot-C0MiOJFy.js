var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'forecast-plot',\r
  title: 'Forecast Plot',\r
  desc: 'Forecast Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ForecastPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","forecast-plot"],\r
}\r
\r
export default function ForecastPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"actual":100.8,"lower":90.8,"upper":110.8},{"period":2,"actual":100.7,"lower":90.7,"upper":110.7},{"period":3,"actual":102.8,"lower":92.8,"upper":112.8},{"period":4,"actual":103.9,"lower":93.9,"upper":113.9},{"period":5,"actual":102.5,"lower":92.5,"upper":112.5},{"period":6,"actual":102.9,"lower":92.9,"upper":112.9},{"period":7,"actual":102,"lower":92,"upper":112},{"period":8,"actual":102.9,"lower":92.9,"upper":112.9},{"period":9,"actual":104.9,"lower":94.9,"upper":114.9},{"period":10,"actual":105,"lower":95,"upper":115},{"period":11,"actual":104,"lower":94,"upper":114},{"period":12,"actual":106.2,"lower":96.2,"upper":116.2},{"period":13,"actual":107.7,"lower":97.7,"upper":117.7},{"period":14,"actual":107,"lower":97,"upper":117},{"period":15,"actual":105.7,"lower":95.7,"upper":115.7},{"period":16,"actual":106,"lower":96,"upper":116},{"period":17,"actual":107.1,"lower":97.1,"upper":117.1},{"period":18,"actual":107.9,"lower":97.9,"upper":117.9},{"period":19,"actual":105.7,"lower":95.7,"upper":115.7},{"period":20,"actual":105.8,"lower":95.8,"upper":115.8},{"period":21,"actual":107.8,"lower":97.8,"upper":117.8},{"period":22,"actual":105.8,"lower":95.8,"upper":115.8},{"period":23,"actual":106.5,"lower":96.5,"upper":116.5},{"period":24,"actual":104.4,"lower":94.4,"upper":114.4},{"period":25,"actual":103.5,"lower":93.5,"upper":113.5},{"period":26,"actual":101.5,"lower":91.5,"upper":111.5},{"period":27,"actual":100.2,"lower":90.2,"upper":110.2},{"period":28,"actual":101.9,"lower":91.9,"upper":111.9},{"period":29,"actual":102.3,"lower":92.3,"upper":112.3},{"period":30,"actual":100.2,"lower":90.2,"upper":110.2},{"period":31,"actual":null,"forecast":98.8,"lower":90.8,"upper":106.8},{"period":33,"actual":null,"forecast":2,"lower":-6,"upper":10},{"period":36,"actual":null,"forecast":0.2,"lower":-7.8,"upper":8.2},{"period":40,"actual":null,"forecast":1.8,"lower":-6.2,"upper":9.8},{"period":45,"actual":null,"forecast":-0.7,"lower":-8.7,"upper":7.3},{"period":51,"actual":null,"forecast":0,"lower":-8,"upper":8},{"period":58,"actual":null,"forecast":-2.1,"lower":-10.1,"upper":5.9},{"period":66,"actual":null,"forecast":-2,"lower":-10,"upper":6},{"period":75,"actual":null,"forecast":0.5,"lower":-7.5,"upper":8.5},{"period":85,"actual":null,"forecast":0.7,"lower":-7.3,"upper":8.7}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const split = data.findIndex(d => d.forecast !== null)\r
\r
    const x = d3.scaleLinear().domain([1, data.length]).range([0, IW])\r
    const allVals = data.flatMap(d => [d.actual, d.forecast, d.lower, d.upper].filter(v => typeof v === 'number' && !isNaN(v) && isFinite(v)))\r
    const yDomain = d3.extent(allVals)\r
    const y = d3.scaleLinear().domain(Array.isArray(yDomain) && isFinite(yDomain[0]) && isFinite(yDomain[1]) ? yDomain : [0, 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Confidence band\r
    const bandData = data.filter(d => d.upper != null && d.lower != null)\r
    const band = d3.area()\r
      .x(d => x(d.period)).y0(d => y(d.lower)).y1(d => y(d.upper)).curve(d3.curveMonotoneX)\r
    if (bandData.length > 0) {\r
      svg.append('path').datum(bandData).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', band).attr('fill', colors[0]).attr('fill-opacity', 0.15)\r
    }\r
\r
    // Actual line\r
    const actualData = data.filter(d => typeof d.actual === 'number' && !isNaN(d.actual) && isFinite(d.actual))\r
    if (actualData.length > 0) {\r
      const line = d3.line().x(d => x(d.period)).y(d => y(d.actual)).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(actualData).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    }\r
\r
    // Forecast line\r
    const forecastData = data.filter(d => typeof d.forecast === 'number' && !isNaN(d.forecast) && isFinite(d.forecast))\r
    if (forecastData.length > 0) {\r
      const line = d3.line().x(d => x(d.period)).y(d => y(d.forecast)).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(forecastData).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', line).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2.5).attr('stroke-dasharray', '6,3')\r
    }\r
\r
    // Split line\r
    if (split > 0) {\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(split)).attr('x2', x(split)).attr('y1', 0).attr('y2', IH)\r
        .attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
      svg.append('text').attr('x', x(split) + 4).attr('y', M.top + 12)\r
        .attr('fill', colors[2]).attr('font-size', '10px').text('Forecast')\r
    }\r
\r
    // Actual points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(actualData).join('circle')\r
      .attr('cx', d => x(d.period)).attr('cy', d => y(d.actual)).attr('r', 3.5)\r
      .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Forecast points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(forecastData).join('circle')\r
      .attr('cx', d => x(d.period)).attr('cy', d => y(d.forecast)).attr('r', 3.5)\r
      .attr('fill', colors[1]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Period')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Forecast with Confidence Bands')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};