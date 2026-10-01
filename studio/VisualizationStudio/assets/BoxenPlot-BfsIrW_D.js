var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, colors } from './utils'\r
\r
// Letter-value (boxen) decomposition: nested quantile intervals around the median\r
function letterValues(data, maxDepth = 4) {\r
  const sorted = [...data].sort(d3.ascending)\r
  const stack = [{ lo: 0, hi: sorted.length - 1, depth: 0 }]\r
  const levels = []\r
  while (stack.length) {\r
    const { lo, hi, depth } = stack.pop()\r
    if (depth > maxDepth || hi - lo <= 0) continue\r
    levels.push({ depth, min: sorted[lo], max: sorted[hi] })\r
    if (hi - lo > 2) {\r
      const mid = (lo + hi) / 2\r
      stack.push({ lo: Math.floor(mid), hi, depth: depth + 1 })\r
      stack.push({ lo, hi: Math.ceil(mid), depth: depth + 1 })\r
    }\r
  }\r
  return levels\r
}\r
\r
export const meta = {\r
  id: 'boxen-plot',\r
  title: 'Boxen Plot',\r
  desc: 'Boxen Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BoxenPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","boxen-plot"],\r
}\r
\r
export default function BoxenPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"group":"Group A","values":[10,15,18,20,22,25,28,30,32,35,38,40,42,45,48,50,52,55,58,60,65,70]},{"group":"Group B","values":[20,25,28,30,33,36,38,40,42,45,48,50,52,55,58,60,62,65,68,70,75,80]},{"group":"Group C","values":[5,8,12,15,18,20,22,25,28,30,32,35,38,40,45,48,52,55,60]}]\r
    const groups = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const all = groups.flatMap((g) => g.values)\r
    const x = d3.scaleLinear().domain([d3.min(all) - 5, d3.max(all) + 5]).range([M.left, W - M.right])\r
    const y = d3.scaleBand().domain(groups.map((g) => g.group)).range([M.top, H - M.bottom]).padding(0.35)\r
\r
    groups.forEach((g, i) => {\r
      const color = colors[i % colors.length]\r
      const levels = letterValues(g.values).sort((a, b) => b.depth - a.depth)\r
      const yc = y(g.group)\r
      const bh = y.bandwidth()\r
\r
      levels.forEach((l) => {\r
        svg.append('rect')\r
          .attr('x', x(l.min)).attr('y', yc)\r
          .attr('width', Math.max(2, x(l.max) - x(l.min))).attr('height', bh)\r
          .attr('fill', color)\r
          .attr('opacity', 0.14 + (4 - l.depth) * 0.15)\r
          .attr('stroke', color).attr('stroke-width', 0.8)\r
      })\r
\r
      const med = d3.quantile([...g.values].sort(d3.ascending), 0.5)\r
      svg.append('line')\r
        .attr('x1', x(med)).attr('x2', x(med)).attr('y1', yc).attr('y2', yc + bh)\r
        .attr('stroke', '#1f2937').attr('stroke-width', 2)\r
    })\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};