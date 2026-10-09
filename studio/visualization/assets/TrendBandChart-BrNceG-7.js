var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'trend-band-chart',\r
  title: 'Trend Band Chart',\r
  desc: 'Trend Band Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TrendBandChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","trend-band-chart"],\r
}\r
\r
export default function TrendBandChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"month":"Jan","value":50.506,"upper":59.345,"lower":39.443},{"month":"Feb","value":61.237,"upper":68.913,"lower":50.809},{"month":"Mar","value":67.296,"upper":78.304,"lower":57.833},{"month":"Apr","value":72.211,"upper":81.1,"lower":61.704},{"month":"May","value":72.615,"upper":80.307,"lower":62.794},{"month":"Jun","value":65.973,"upper":76.029,"lower":56.138},{"month":"Jul","value":55.142,"upper":67.035,"lower":47.11},{"month":"Aug","value":46.34,"upper":58.361,"lower":40.49},{"month":"Sep","value":40.099,"upper":49.449,"lower":32.707},{"month":"Oct","value":39.067,"upper":47.24,"lower":29.568},{"month":"Nov","value":37.187,"upper":49.35,"lower":29.358},{"month":"Dec","value":46.234,"upper":53.648,"lower":35.34},{"month":"Jan","value":51.699,"upper":62.166,"lower":44.342},{"month":"Feb","value":65.186,"upper":73.438,"lower":54.765},{"month":"Mar","value":72.887,"upper":83.251,"lower":64.124},{"month":"Apr","value":82.554,"upper":90.284,"lower":72.147},{"month":"May","value":81.508,"upper":91.466,"lower":74.363},{"month":"Jun","value":80.369,"upper":89.612,"lower":69.49},{"month":"Jul","value":74.782,"upper":80.906,"lower":61.811},{"month":"Aug","value":63.353,"upper":74.524,"lower":55.285},{"month":"Sep","value":53.174,"upper":63.167,"lower":46.038},{"month":"Oct","value":49.115,"upper":59.042,"lower":38.507},{"month":"Nov","value":45.488,"upper":57.759,"lower":36.796},{"month":"Dec","value":49.782,"upper":61.011,"lower":42.352}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scalePoint().domain(data.map(d => d.month)).range([0, IW]).padding(0.5)\r
    const y = d3.scaleLinear().domain([d3.min(data, d => d.lower) * 0.95, d3.max(data, d => d.upper) * 1.05]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Trend band\r
    const band = d3.area()\r
      .x(d => x(d.month))\r
      .y0(d => y(d.lower))\r
      .y1(d => y(d.upper))\r
      .curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', band).attr('fill', colors[0]).attr('fill-opacity', 0.2)\r
\r
    // Trend line\r
    const line = d3.line()\r
      .x(d => x(d.month))\r
      .y(d => y(d.value))\r
      .curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Boundary lines\r
    const lowerLine = d3.line().x(d => x(d.month)).y(d => y(d.lower)).curve(d3.curveMonotoneX)\r
    const upperLine = d3.line().x(d => x(d.month)).y(d => y(d.upper)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', lowerLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1).attr('opacity', 0.5)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', upperLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1).attr('opacity', 0.5)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.month)).attr('cy', d => y(d.value)).attr('r', 3)\r
      .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(6))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').attr('transform', 'rotate(-30)').attr('text-anchor', 'end'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Month')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Trend Band Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};