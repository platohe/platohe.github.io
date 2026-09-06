var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
const DEFAULT_DATA = [{"month":"Jan","sales":92,"revenue":292,"units":48},{"month":"Feb","sales":119,"revenue":302,"units":49},{"month":"Mar","sales":131,"revenue":299,"units":33},{"month":"Apr","sales":140,"revenue":252,"units":21},{"month":"May","sales":136,"revenue":221,"units":19},{"month":"Jun","sales":105,"revenue":195,"units":33},{"month":"Jul","sales":104,"revenue":199,"units":47},{"month":"Aug","sales":67,"revenue":169,"units":50},{"month":"Sep","sales":54,"revenue":165,"units":37},{"month":"Oct","sales":57,"revenue":127,"units":22},{"month":"Nov","sales":56,"revenue":151,"units":24},{"month":"Dec","sales":68,"revenue":164,"units":29}]\r
\r
export const meta = {\r
  id: 'linked-views',\r
  title: 'Linked Views',\r
  desc: 'Linked Views — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LinkedViews',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","linked-views"],\r
}\r
\r
export default function LinkedViews({ data }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const d = (data && Array.isArray(data) && data.length > 0) ? data : DEFAULT_DATA\r
\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const views = [\r
      { key: 'sales',   label: 'Sales',   color: colors[0] },\r
      { key: 'revenue', label: 'Revenue', color: colors[1] },\r
      { key: 'units',   label: 'Units',   color: colors[2] },\r
    ]\r
\r
    const nViews = views.length\r
    const viewH = (H - 20) / nViews\r
    const ml = 48, mr = 10, mt = 8\r
\r
    let selectedRange = null\r
\r
    function render(range) {\r
      svg.selectAll('*').remove()\r
\r
      svg.append('text')\r
        .attr('x', W / 2).attr('y', 12)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '11px').attr('font-weight', 600)\r
        .text('Linked Views · Brush to filter all charts')\r
\r
      views.forEach((view, vi) => {\r
        const top = mt + vi * viewH + 8\r
        const innerW = W - ml - mr\r
        const innerH = viewH - 20\r
\r
        const x = d3.scaleBand()\r
          .domain(d.map(dd => dd.month))\r
          .range([0, innerW])\r
          .padding(0.15)\r
\r
        const vals = d.map(dd => dd[view.key])\r
        const y = d3.scaleLinear()\r
          .domain([0, d3.max(vals) * 1.1])\r
          .range([innerH, 0])\r
\r
        const g = svg.append('g').attr('transform', \`translate(\${ml},\${top})\`)\r
\r
        // Subtle background\r
        g.append('rect')\r
          .attr('width', innerW).attr('height', innerH)\r
          .attr('fill', 'var(--bg)').attr('rx', 3)\r
\r
        // Y axis\r
        g.append('g')\r
          .call(d3.axisLeft(y).ticks(3).tickSize(-innerW).tickPadding(4))\r
          .call(gg => gg.select('.domain').remove())\r
          .call(gg => gg.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
          .call(gg => gg.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
        // Bars\r
        d.forEach(dd => {\r
          const bx = x(dd.month)\r
          const inRange = !range || (bx >= range[0] && bx + x.bandwidth() <= range[1])\r
\r
          g.append('rect')\r
            .attr('x', bx)\r
            .attr('y', y(dd[view.key]))\r
            .attr('width', x.bandwidth())\r
            .attr('height', innerH - y(dd[view.key]))\r
            .attr('fill', view.color)\r
            .attr('opacity', inRange ? 0.85 : 0.15)\r
            .attr('rx', 2)\r
        })\r
\r
        // X axis labels (bottom view only)\r
        if (vi === nViews - 1) {\r
          g.append('g')\r
            .attr('transform', \`translate(0,\${innerH})\`)\r
            .call(d3.axisBottom(x).tickSize(0))\r
            .call(gg => gg.select('.domain').attr('stroke', 'var(--border)'))\r
            .call(gg => gg.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
        }\r
\r
        // Label\r
        g.append('text')\r
          .attr('x', 4).attr('y', 12)\r
          .attr('fill', view.color)\r
          .attr('font-size', '10px').attr('font-weight', 700)\r
          .text(view.label)\r
\r
        // Brush overlay on first chart only\r
        if (vi === 0) {\r
          const brush = d3.brushX()\r
            .extent([[0, 0], [innerW, innerH]])\r
            .on('brush end', (event) => {\r
              const sel = event.selection\r
              render(sel)\r
            })\r
\r
          g.append('g')\r
            .attr('class', 'brush')\r
            .call(brush)\r
            .call(g => g.selectAll('.selection')\r
              .attr('fill', '#6366f1')\r
              .attr('fill-opacity', 0.15)\r
              .attr('stroke', '#6366f1')\r
              .attr('stroke-width', 1))\r
\r
          if (range) {\r
            g.select('.brush').call(brush.move, range)\r
          }\r
        }\r
      })\r
    }\r
\r
    render(null)\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};