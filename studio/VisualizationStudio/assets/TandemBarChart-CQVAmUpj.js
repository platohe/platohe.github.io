var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
\r
export const meta = {\r
  id: 'tandem-bar-chart',\r
  title: 'Tandem Bar Chart',\r
  desc: 'Tandem Bar Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TandemBarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","tandem-bar-chart"],\r
}\r
\r
export default function TandemBarChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"category":"A","current":65,"previous":45},{"category":"B","current":80,"previous":72},{"category":"C","current":55,"previous":60},{"category":"D","current":90,"previous":75},{"category":"E","current":70,"previous":68}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleBand().domain(data.map(d => d.category)).range([M.left, W - M.right]).padding(0.3)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => Math.max(d.current, d.previous)) * 1.15]).range([H - M.bottom, M.top])\r
\r
    const barH = 8\r
\r
    data.forEach(d => {\r
      const cx = x(d.category)\r
      const bw = x.bandwidth()\r
\r
      // Previous bar (left)\r
      svg.append('rect')\r
        .attr('x', cx).attr('y', y(d.previous) - barH / 2)\r
        .attr('width', bw / 2 - 2).attr('height', barH)\r
        .attr('fill', '#6b7280').attr('rx', 2).attr('opacity', 0.7)\r
\r
      // Current bar (right)\r
      svg.append('rect')\r
        .attr('x', cx + bw / 2 + 2).attr('y', y(d.current) - barH / 2)\r
        .attr('width', bw / 2 - 2).attr('height', barH)\r
        .attr('fill', '#6366f1').attr('rx', 2)\r
    })\r
\r
    // Axes\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${W - 100},\${M.top})\`)\r
    lg.append('rect').attr('x', 0).attr('y', 0).attr('width', 8).attr('height', 8).attr('fill', '#6366f1').attr('rx', 1)\r
    lg.append('text').attr('x', 12).attr('y', 8).attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('Current')\r
    lg.append('rect').attr('x', 0).attr('y', 14).attr('width', 8).attr('height', 8).attr('fill', '#6b7280').attr('rx', 1)\r
    lg.append('text').attr('x', 12).attr('y', 22).attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('Previous')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};