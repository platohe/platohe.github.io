var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'lag-plot',\r
  title: 'Lag Plot',\r
  desc: 'Lag Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LagPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","lag-plot"],\r
}\r
\r
export default function LagPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"series":[{"t":0,"value":52.022},{"t":1,"value":50.381},{"t":2,"value":57.316},{"t":3,"value":58.516},{"t":4,"value":49.457},{"t":5,"value":50.152},{"t":6,"value":45.571},{"t":7,"value":49.395},{"t":8,"value":56.886},{"t":9,"value":54.266},{"t":10,"value":47.985},{"t":11,"value":56.231},{"t":12,"value":59.276},{"t":13,"value":52.633},{"t":14,"value":45.788},{"t":15,"value":47.066},{"t":16,"value":51.679},{"t":17,"value":53.388},{"t":18,"value":42.448},{"t":19,"value":44.129},{"t":20,"value":52.637},{"t":21,"value":42.87},{"t":22,"value":46.856},{"t":23,"value":38.43},{"t":24,"value":37.24},{"t":25,"value":32.304},{"t":26,"value":31.326},{"t":27,"value":42.599},{"t":28,"value":45.426},{"t":29,"value":37.341},{"t":30,"value":34.599},{"t":31,"value":46.073},{"t":32,"value":47.006},{"t":33,"value":54.085},{"t":34,"value":49.248},{"t":35,"value":48.472},{"t":36,"value":39.679},{"t":37,"value":33.803},{"t":38,"value":39.794},{"t":39,"value":44.791},{"t":40,"value":41.257},{"t":41,"value":46.794},{"t":42,"value":41.946},{"t":43,"value":40.435},{"t":44,"value":48.077},{"t":45,"value":55.828},{"t":46,"value":54.239},{"t":47,"value":47.051},{"t":48,"value":43.62},{"t":49,"value":41.394},{"t":50,"value":35.47},{"t":51,"value":43.026},{"t":52,"value":48.734},{"t":53,"value":52.975},{"t":54,"value":60.639},{"t":55,"value":49.207},{"t":56,"value":58.32},{"t":57,"value":54.446},{"t":58,"value":61.958},{"t":59,"value":51.117},{"t":60,"value":43.001},{"t":61,"value":35.417},{"t":62,"value":37.001},{"t":63,"value":40.535},{"t":64,"value":45.613},{"t":65,"value":54.92},{"t":66,"value":44.996},{"t":67,"value":50.889},{"t":68,"value":59.32},{"t":69,"value":52.089},{"t":70,"value":55.594},{"t":71,"value":47.508},{"t":72,"value":48.662},{"t":73,"value":55.501},{"t":74,"value":46.263},{"t":75,"value":57.297},{"t":76,"value":56.364},{"t":77,"value":62.777},{"t":78,"value":57.624},{"t":79,"value":56.906},{"t":80,"value":51.573},{"t":81,"value":53.026},{"t":82,"value":48.577},{"t":83,"value":53.592},{"t":84,"value":48.419},{"t":85,"value":47.888},{"t":86,"value":55.384},{"t":87,"value":57.67},{"t":88,"value":65.25},{"t":89,"value":68.479},{"t":90,"value":61.573},{"t":91,"value":59.005},{"t":92,"value":52.222},{"t":93,"value":43.573},{"t":94,"value":49.436},{"t":95,"value":45.871},{"t":96,"value":52.829},{"t":97,"value":60.076},{"t":98,"value":48.926},{"t":99,"value":48.756}],"lag":1}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.series) ? customData : DEFAULT_DATA\r
    const series = d.series\r
    const lag = d.lag || 1\r
\r
    // Create lag pairs\r
    const pairs = series.slice(lag).map((p, i) => ({ x: series[i].value, y: p.value }))\r
\r
    const x = d3.scaleLinear().domain(d3.extent(series, d => d.value)).range([0, IW])\r
    const y = d3.scaleLinear().domain(d3.extent(series, d => d.value)).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Identity line\r
    const minV = d3.min(series, d => d.value)\r
    const maxV = d3.max(series, d => d.value)\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(minV)).attr('x2', x(maxV)).attr('y1', y(minV)).attr('y2', y(maxV))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(pairs).join('circle')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 3.5)\r
      .attr('fill', colors[0]).attr('opacity', 0.5).attr('stroke', 'none')\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('x[t-' + lag + '] (Lagged)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('x[t] (Current)')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Lag Plot (k=' + lag + ')')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};