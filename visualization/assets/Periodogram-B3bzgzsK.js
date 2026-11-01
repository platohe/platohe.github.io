var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'periodogram',\r
  title: 'Periodogram',\r
  desc: 'Periodogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Periodogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","periodogram"],\r
}\r
\r
export default function Periodogram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"frequency":0,"power":0.06},{"frequency":1,"power":0.047},{"frequency":2,"power":0.096},{"frequency":3,"power":0.111},{"frequency":4,"power":0.153},{"frequency":5,"power":0.377},{"frequency":6,"power":0.634},{"frequency":7,"power":0.945},{"frequency":8,"power":1.087},{"frequency":9,"power":0.93},{"frequency":10,"power":0.632},{"frequency":11,"power":0.413},{"frequency":12,"power":0.21},{"frequency":13,"power":0.075},{"frequency":14,"power":0.031},{"frequency":15,"power":0.053},{"frequency":16,"power":0.078},{"frequency":17,"power":0.114},{"frequency":18,"power":0.184},{"frequency":19,"power":0.436},{"frequency":20,"power":0.584},{"frequency":21,"power":0.395},{"frequency":22,"power":0.243},{"frequency":23,"power":0.056},{"frequency":24,"power":0.036},{"frequency":25,"power":0.007},{"frequency":26,"power":0.019},{"frequency":27,"power":0.078},{"frequency":28,"power":0.053},{"frequency":29,"power":0.003},{"frequency":30,"power":0.017},{"frequency":31,"power":0.084},{"frequency":32,"power":0.049},{"frequency":33,"power":0.081},{"frequency":34,"power":0.032},{"frequency":35,"power":0.045},{"frequency":36,"power":0.004},{"frequency":37,"power":0.005},{"frequency":38,"power":0.056},{"frequency":39,"power":0.06},{"frequency":40,"power":0.025},{"frequency":41,"power":0.065},{"frequency":42,"power":0.021},{"frequency":43,"power":0.03},{"frequency":44,"power":0.074},{"frequency":45,"power":0.086},{"frequency":46,"power":0.051},{"frequency":47,"power":0.02},{"frequency":48,"power":0.028},{"frequency":49,"power":0.029},{"frequency":50,"power":0.007},{"frequency":51,"power":0.066},{"frequency":52,"power":0.068},{"frequency":53,"power":0.069},{"frequency":54,"power":0.093},{"frequency":55,"power":0.009},{"frequency":56,"power":0.094},{"frequency":57,"power":0.043},{"frequency":58,"power":0.094},{"frequency":59,"power":0.014},{"frequency":60,"power":0.011},{"frequency":61,"power":0.002},{"frequency":62,"power":0.036},{"frequency":63,"power":0.048}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const maxPower = d3.max(data, d => d.power) || 1\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.frequency)).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, maxPower * 1.1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Bars\r
    const barW = Math.max(1, IW / data.length - 1)\r
    data.forEach((d, i) => {\r
      const barH = IH - y(d.power)\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.frequency)).attr('y', y(d.power)).attr('width', barW)\r
        .attr('height', barH)\r
        .attr('fill', colors[0]).attr('opacity', 0.8).attr('rx', 1)\r
    })\r
\r
    // Highlight dominant frequency\r
    const dominant = d3.max(data, d => d.power)\r
    const domFreq = data.find(d => d.power === dominant)?.frequency\r
    if (domFreq !== undefined) {\r
      svg.append('text').attr('x', M.left + x(domFreq)).attr('y', M.top + y(dominant) - 6)\r
        .attr('text-anchor', 'middle').attr('fill', colors[3]).attr('font-size', '10px').text('f=' + domFreq)\r
    }\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => 'f' + d))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Frequency')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Power')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Periodogram (Spectral Density)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};