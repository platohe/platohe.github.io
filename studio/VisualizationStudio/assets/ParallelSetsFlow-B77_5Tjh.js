var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'parallel-sets-flow',\r
  title: 'Parallel Sets Flow',\r
  desc: 'Parallel Sets Flow — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ParallelSetsFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","parallel-sets-flow"],\r
}\r
\r
export default function ParallelSetsFlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {\r
      headers: ['Gender', 'Age', 'Plan'],\r
      rows: [\r
        { Gender: 'F', Age: '18-30', Plan: 'Pro' }, { Gender: 'M', Age: '18-30', Plan: 'Free' },\r
        { Gender: 'F', Age: '31-45', Plan: 'Team' }, { Gender: 'M', Age: '31-45', Plan: 'Pro' },\r
        { Gender: 'F', Age: '18-30', Plan: 'Free' }, { Gender: 'M', Age: '46+', Plan: 'Team' },\r
        { Gender: 'F', Age: '46+', Plan: 'Free' }, { Gender: 'M', Age: '18-30', Plan: 'Pro' },\r
        { Gender: 'F', Age: '31-45', Plan: 'Pro' }, { Gender: 'M', Age: '31-45', Plan: 'Free' },\r
        { Gender: 'F', Age: '18-30', Plan: 'Team' }, { Gender: 'M', Age: '46+', Plan: 'Pro' }\r
      ]\r
    }\r
    const data = (customData && Array.isArray(customData.rows) && customData.headers) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const axes = data.headers\r
    const n = axes.length\r
    const xs = (i) => 60 + i * ((W - 120) / (n - 1))\r
    const top = 40, y0 = 250, band = y0 - top\r
    const domains = axes.map(a => [...new Set(data.rows.map(r => r[a]))])\r
    // slot assignment per axis: stack rows grouped by their category on that axis\r
    const slots = data.rows.map(() => new Array(n))\r
    domains.forEach((dom, i) => {\r
      let cursor = top\r
      dom.forEach(dcat => {\r
        const members = data.rows.map((r, ri) => ({ r, ri })).filter(o => o.r[axes[i]] === dcat)\r
        members.forEach((o, k) => { slots[o.ri][i] = cursor + k * (band / Math.max(data.rows.length, 1)) })\r
        cursor += band * (members.length / data.rows.length)\r
      })\r
    })\r
    // flowing ribbons between consecutive axes\r
    data.rows.forEach((r, ri) => {\r
      for (let i = 0; i < n - 1; i++) {\r
        const midX = xs(i) + (xs(i + 1) - xs(i)) / 2\r
        g.append('path')\r
          .attr('d', 'M' + xs(i) + ' ' + slots[ri][i] + ' C' + midX + ' ' + slots[ri][i] + ' ' + midX + ' ' + slots[ri][i + 1] + ' ' + xs(i + 1) + ' ' + slots[ri][i + 1])\r
          .attr('fill', 'none')\r
          .attr('stroke', colors[domains[0].indexOf(r[axes[0]]) % colors.length])\r
          .attr('stroke-width', 12).attr('stroke-opacity', 0.22).attr('stroke-linecap', 'butt')\r
      }\r
    })\r
    axes.forEach((a, i) => {\r
      g.append('line').attr('x1', xs(i)).attr('x2', xs(i)).attr('y1', top).attr('y2', y0).attr('stroke', 'var(--border)')\r
      g.append('text').attr('x', xs(i)).attr('y', top - 12).attr('text-anchor', 'middle')\r
        .attr('font-size', '9px').attr('font-weight', 600).attr('fill', 'var(--text-secondary)').text(a)\r
      let cursor = top\r
      domains[i].forEach(dcat => {\r
        const cnt = data.rows.filter(r => r[axes[i]] === dcat).length\r
        const frac = cnt / data.rows.length\r
        g.append('rect').attr('x', xs(i) - 2.5).attr('y', cursor).attr('width', 5).attr('height', Math.max(frac * band - 2, 2))\r
          .attr('rx', 1.5).attr('fill', 'var(--border)')\r
        g.append('text').attr('x', xs(i) + (i === n - 1 ? -8 : 8)).attr('y', cursor + (frac * band) / 2 + 3)\r
          .attr('text-anchor', i === n - 1 ? 'end' : 'start').attr('font-size', '7.5px')\r
          .attr('fill', 'var(--text-secondary)').text(dcat + ' (' + cnt + ')')\r
        cursor += frac * band\r
      })\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};