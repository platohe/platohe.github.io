var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'horizontal-stacked-bar',\r
  title: 'Horizontal Stacked Bar',\r
  desc: 'Horizontal Stacked Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizontalStackedBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","horizontal-stacked-bar"],\r
}\r
\r
export default function HorizontalStackedBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Product A","web":40,"mobile":30,"desktop":20},{"label":"Product B","web":35,"mobile":45,"desktop":15},{"label":"Product C","web":55,"mobile":25,"desktop":30},{"label":"Product D","web":30,"mobile":50,"desktop":25}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const keys = Object.keys(data[0]).filter(k => k !== 'label')\r
    const margin = { top: 30, right: 40, bottom: 30, left: 80 }\r
    const w = W - margin.left - margin.right\r
    const rowH = (H - margin.top - margin.bottom) / data.length\r
    const barH = rowH * 0.55\r
\r
    const x = d3.scaleLinear().domain([0, d3.max(data, d => d3.sum(keys, k => d[k])) * 1.05]).range([0, w])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach((d, i) => {\r
      const gy = i * rowH + (rowH - barH) / 2\r
      let acc = 0\r
      keys.forEach((k, ki) => {\r
        g.append('rect')\r
          .attr('x', x(acc)).attr('y', gy)\r
          .attr('width', Math.max(0, (x(d[k]) - x(acc)) || 0)).attr('height', barH)\r
          .attr('fill', colors[ki % colors.length]).attr('opacity', 0.85).attr('rx', ki === keys.length - 1 ? 2 : 0)\r
        acc += d[k]\r
      })\r
      g.append('text')\r
        .attr('x', -6).attr('y', gy + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text)').attr('font-size', '10px').attr('font-weight', 500)\r
        .text(d.label)\r
      g.append('text')\r
        .attr('x', x(acc) + 6).attr('y', gy + barH / 2 + 4)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').attr('font-family', 'var(--font-mono)')\r
        .text(acc)\r
    })\r
\r
    g.append('g').attr('transform', \`translate(0,\${data.length * rowH + 8})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(4))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};