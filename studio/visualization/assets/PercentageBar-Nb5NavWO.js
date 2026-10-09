var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'percentage-bar',\r
  title: 'Percentage Bar',\r
  desc: 'Percentage Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PercentageBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","percentage-bar"],\r
}\r
\r
export default function PercentageBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Q1","values":[40,35,25]},{"label":"Q2","values":[35,40,25]},{"label":"Q3","values":[30,45,25]},{"label":"Q4","value":[25,50,25]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 35, right: 30, bottom: 30, left: 40 }\r
    const w = W - margin.left - margin.right\r
    const rowH = (H - margin.top - margin.bottom) / data.length\r
    const barH = rowH * 0.55\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach((d, i) => {\r
      const vals = d.values || []\r
      let acc = 0\r
      vals.forEach((v, j) => {\r
        g.append('rect')\r
          .attr('x', acc / 100 * w).attr('y', i * rowH + (rowH - barH) / 2)\r
          .attr('width', v / 100 * w).attr('height', barH)\r
          .attr('fill', colors[j % colors.length]).attr('opacity', 0.85)\r
        acc += v\r
      })\r
      g.append('text')\r
        .attr('x', -6).attr('y', i * rowH + rowH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text)').attr('font-size', '10px').attr('font-weight', 500)\r
        .text(d.label)\r
      vals.forEach((v, j) => {\r
        const cx = (acc - v / 2) / 100 * w\r
        g.append('text')\r
          .attr('x', cx).attr('y', i * rowH + rowH / 2 + 4)\r
          .attr('text-anchor', 'middle').attr('fill', '#fff').attr('font-size', '9px').attr('font-weight', 600)\r
          .text(v + '%')\r
        acc -= v\r
      })\r
    })\r
\r
    g.append('g').attr('transform', \`translate(0,\${data.length * rowH + 5})\`)\r
      .call(d3.axisBottom(d3.scaleLinear().domain([0, 100]).range([0, w])).ticks(5).tickSize(0).tickPadding(4))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};