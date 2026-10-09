var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'fan-chart',\r
  title: 'Fan Chart',\r
  desc: 'Fan Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FanChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","fan-chart"],\r
}\r
\r
export default function FanChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"value":100.8,"lower95":85.8,"upper95":115.8,"lower50":92.8,"upper50":108.8},{"period":2,"value":100.7,"lower95":85.2,"upper95":116.2,"lower50":92.4,"upper50":109},{"period":3,"value":102.8,"lower95":86.8,"upper95":118.8,"lower50":94.2,"upper50":111.4},{"period":4,"value":103.9,"lower95":87.4,"upper95":120.4,"lower50":95,"upper50":112.8},{"period":5,"value":102.5,"lower95":85.5,"upper95":119.5,"lower50":93.3,"upper50":111.7},{"period":6,"value":102.9,"lower95":85.4,"upper95":120.4,"lower50":93.4,"upper50":112.4},{"period":7,"value":102,"lower95":84,"upper95":120,"lower50":92.2,"upper50":111.8},{"period":8,"value":102.9,"lower95":84.4,"upper95":121.4,"lower50":92.8,"upper50":113},{"period":9,"value":104.9,"lower95":85.9,"upper95":123.9,"lower50":94.5,"upper50":115.3},{"period":10,"value":105,"lower95":85.5,"upper95":124.5,"lower50":94.3,"upper50":115.7},{"period":11,"value":104,"lower95":84,"upper95":124,"lower50":93,"upper50":115},{"period":12,"value":106.2,"lower95":85.7,"upper95":126.7,"lower50":94.9,"upper50":117.5},{"period":13,"value":107.7,"lower95":86.7,"upper95":128.7,"lower50":96.1,"upper50":119.3},{"period":14,"value":107,"lower95":85.5,"upper95":128.5,"lower50":95.1,"upper50":118.9},{"period":15,"value":105.7,"lower95":83.7,"upper95":127.7,"lower50":93.5,"upper50":117.9},{"period":16,"value":106,"lower95":83.5,"upper95":128.5,"lower50":93.5,"upper50":118.5},{"period":17,"value":107.1,"lower95":84.1,"upper95":130.1,"lower50":94.3,"upper50":119.9},{"period":18,"value":107.9,"lower95":84.4,"upper95":131.4,"lower50":94.8,"upper50":121},{"period":19,"value":105.7,"lower95":81.7,"upper95":129.7,"lower50":92.3,"upper50":119.1},{"period":20,"value":105.8,"lower95":81.3,"upper95":130.3,"lower50":92.1,"upper50":119.5},{"period":21,"value":null,"forecast":107.7,"lower95":97.7,"upper95":117.7,"lower50":102.7,"upper50":112.7},{"period":23,"value":null,"forecast":-2,"lower95":-15,"upper95":11,"lower50":-8.5,"upper50":4.5},{"period":26,"value":null,"forecast":0.7,"lower95":-15.3,"upper95":16.7,"lower50":-7.3,"upper50":8.7},{"period":30,"value":null,"forecast":-2.1,"lower95":-21.1,"upper95":16.9,"lower50":-11.6,"upper50":7.4},{"period":35,"value":null,"forecast":-0.9,"lower95":-22.9,"upper95":21.1,"lower50":-11.9,"upper50":10.1},{"period":41,"value":null,"forecast":-1.9,"lower95":-26.9,"upper95":23.1,"lower50":-14.4,"upper50":10.6},{"period":48,"value":null,"forecast":-1.3,"lower95":-29.3,"upper95":26.7,"lower50":-15.3,"upper50":12.7},{"period":56,"value":null,"forecast":1.7,"lower95":-29.3,"upper95":32.7,"lower50":-13.8,"upper50":17.2},{"period":65,"value":null,"forecast":0.4,"lower95":-33.6,"upper95":34.4,"lower50":-16.6,"upper50":17.4},{"period":75,"value":null,"forecast":-2.1,"lower95":-39.1,"upper95":34.9,"lower50":-20.6,"upper50":16.4},{"period":86,"value":null,"forecast":-1.4,"lower95":-41.4,"upper95":38.6,"lower50":-21.4,"upper50":18.6},{"period":98,"value":null,"forecast":2,"lower95":-41,"upper95":45,"lower50":-19.5,"upper50":23.5},{"period":111,"value":null,"forecast":0.2,"lower95":-45.8,"upper95":46.2,"lower50":-22.8,"upper50":23.2},{"period":125,"value":null,"forecast":1.8,"lower95":-47.2,"upper95":50.8,"lower50":-22.7,"upper50":26.3},{"period":140,"value":null,"forecast":-0.7,"lower95":-52.7,"upper95":51.3,"lower50":-26.7,"upper50":25.3}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const forecastStart = data.findIndex(d => d.forecast !== null)\r
\r
    const x = d3.scaleLinear().domain([1, data.length]).range([0, IW])\r
    const allVals = data.flatMap(d => [d.value || d.forecast, d.lower95, d.upper95, d.lower50, d.upper50])\r
    const y = d3.scaleLinear().domain([d3.min(allVals) * 0.95, d3.max(allVals) * 1.05]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Fan bands (back to front)\r
    const fanLayers = [\r
      { key: ['lower95', 'upper95'], fill: colors[0], opacity: 0.1, label: '95%' },\r
      { key: ['lower50', 'upper50'], fill: colors[1], opacity: 0.2, label: '50%' },\r
    ]\r
\r
    fanLayers.forEach(layer => {\r
      const bandData = data.filter(d => d[layer.key[0]] != null && d[layer.key[1]] != null)\r
      if (bandData.length < 2) return\r
      const area = d3.area()\r
        .x(d => x(d.period))\r
        .y0(d => y(d[layer.key[0]]))\r
        .y1(d => y(d[layer.key[1]]))\r
        .curve(d3.curveMonotoneX)\r
      svg.append('path').datum(bandData).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', area).attr('fill', layer.fill).attr('fill-opacity', layer.opacity)\r
    })\r
\r
    // Forecast line\r
    const forecastData = data.filter(d => d.forecast != null)\r
    if (forecastData.length > 0) {\r
      const line = d3.line().x(d => x(d.period)).y(d => y(d.forecast)).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(forecastData).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
    }\r
\r
    // Historical line\r
    const histData = data.filter(d => d.value != null)\r
    if (histData.length > 0) {\r
      const line = d3.line().x(d => x(d.period)).y(d => y(d.value)).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(histData).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', line).attr('fill', 'none').attr('stroke', colors[2]).attr('stroke-width', 2)\r
    }\r
\r
    // Split marker\r
    if (forecastStart > 0) {\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(forecastStart)).attr('x2', x(forecastStart)).attr('y1', 0).attr('y2', IH)\r
        .attr('stroke', colors[3]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
      svg.append('text').attr('x', x(forecastStart) + 4).attr('y', M.top + 12)\r
        .attr('fill', colors[3]).attr('font-size', '10px').text('Forecast')\r
    }\r
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
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Fan Chart (Prediction Intervals)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};