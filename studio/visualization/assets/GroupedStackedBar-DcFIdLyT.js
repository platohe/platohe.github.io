var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'grouped-stacked-bar',\r
  title: 'Grouped Stacked Bar',\r
  desc: 'Grouped Stacked Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedStackedBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","grouped-stacked-bar"],\r
}\r
\r
export default function GroupedStackedBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"year":"2019","A":{"web":30,"mobile":20},"B":{"web":25,"mobile":30}},{"year":"2020","A":{"web":35,"mobile":25},"B":{"web":30,"mobile":28}},{"year":"2021","A":{"web":45,"mobile":30},"B":{"web":35,"mobile":32}},{"year":"2022","A":{"web":55,"mobile":35},"B":{"web":40,"mobile":38}}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 30, bottom: 40, left: 40 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const subKeys = Object.keys(data[0]).filter(k => k !== 'year')\r
    const xGroup = d3.scaleBand().domain(data.map(d => d.year)).range([0, w]).padding(0.3)\r
    const xSub = d3.scaleBand().domain(subKeys).range([0, xGroup.bandwidth()]).padding(0.1)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => subKeys.reduce((s, k) => s + (d[k].web || 0) + (d[k].mobile || 0), 0)) * 1.1]).range([h, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach(d => {\r
      subKeys.forEach(grp => {\r
        const gx = xGroup(d.year) + xSub(grp)\r
        const vals = [d[grp].web || 0, d[grp].mobile || 0]\r
        let acc = 0\r
        vals.forEach((v, i) => {\r
          g.append('rect')\r
            .attr('x', gx).attr('y', y(acc + v)).attr('width', xSub.bandwidth())\r
            .attr('height', h - y(v)).attr('fill', colors[i]).attr('opacity', 0.85).attr('rx', i === 1 ? 2 : 0)\r
          acc += v\r
        })\r
      })\r
    })\r
\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(xGroup)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(5))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};