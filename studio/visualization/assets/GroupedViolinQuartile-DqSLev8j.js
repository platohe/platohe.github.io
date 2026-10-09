var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'grouped-violin-quartile',\r
  title: 'Grouped Violin Quartile',\r
  desc: 'Grouped Violin Quartile — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedViolinQuartile',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","grouped-violin-quartile"],\r
}\r
\r
export default function GroupedViolinQuartile({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"group":"Alpha","values":[12,15,18,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,55]},{"group":"Beta","values":[20,24,28,32,35,38,41,44,47,50,53,56,58,61,64,67,70,73,76,80]},{"group":"Gamma","values":[8,11,14,17,20,23,26,28,31,34,36,39,42,45,48,51,54,57,60,64]},{"group":"Delta","values":[30,34,38,42,45,48,51,54,56,58,60,62,64,66,68,70,72,74,76,78]}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const all = data.flatMap((d) => d.values)\r
    const x = d3.scaleLinear().domain([d3.min(all) - 4, d3.max(all) + 4]).range([M.left, W - M.right])\r
    const y = d3.scaleBand().domain(data.map((d) => d.group)).range([M.top, H - M.bottom]).padding(0.35)\r
    const g = svg.append('g')\r
\r
    // helper: gaussian KDE\r
    function kde(values, xDomain, samples = 60) {\r
      const sd = d3.deviation(values) || 1\r
      const bw = 1.06 * sd * Math.pow(values.length, -0.2)\r
      const gauss = (u) => Math.exp(-0.5 * u * u) / Math.sqrt(2 * Math.PI)\r
      const lo = xDomain[0]\r
      const hi = xDomain[1]\r
      const step = (hi - lo) / (samples - 1)\r
      const pts = d3.range(samples).map((i) => lo + i * step)\r
      return pts.map((t) => [t, d3.mean(values, (v) => gauss((t - v) / bw)) / bw])\r
    }\r
\r
    const xDomain = x.domain()\r
    data.forEach((grp, i) => {\r
      const col = colors[i % colors.length]\r
      const cy = y(grp.group) + y.bandwidth() / 2\r
      const half = y.bandwidth() * 0.38\r
      const sorted = [...grp.values].sort(d3.ascending)\r
      const q1 = d3.quantile(sorted, 0.25)\r
      const q3 = d3.quantile(sorted, 0.75)\r
      const median = d3.quantile(sorted, 0.5)\r
      const min = d3.min(sorted)\r
      const max = d3.max(sorted)\r
      const dens = kde(grp.values, xDomain)\r
      const maxD = d3.max(dens, (d) => d[1]) || 1\r
      const yD = d3.scaleLinear().domain([0, maxD]).range([0, half])\r
\r
      // violin area (mirrored)\r
      const area = d3.area()\r
        .x((d) => x(d[0]))\r
        .y0((d) => cy - yD(d[1]))\r
        .y1((d) => cy + yD(d[1]))\r
        .curve(d3.curveCatmullRom)\r
      const line = d3.line()\r
        .x((d) => x(d[0]))\r
        .y((d) => cy - yD(d[1]))\r
        .curve(d3.curveCatmullRom)\r
      const line2 = d3.line()\r
        .x((d) => x(d[0]))\r
        .y((d) => cy + yD(d[1]))\r
        .curve(d3.curveCatmullRom)\r
\r
      g.append('path').datum(dens).attr('d', area).attr('fill', col).attr('opacity', 0.22).attr('stroke', 'none')\r
      g.append('path').datum(dens).attr('d', line).attr('fill', 'none').attr('stroke', col).attr('stroke-width', 1.4)\r
      g.append('path').datum(dens).attr('d', line2).attr('fill', 'none').attr('stroke', col).attr('stroke-width', 1.4)\r
\r
      // IQR box\r
      g.append('rect')\r
        .attr('x', x(q1)).attr('y', cy - 5)\r
        .attr('width', Math.max(1, x(q3) - x(q1))).attr('height', 10)\r
        .attr('fill', col).attr('opacity', 0.9).attr('rx', 2)\r
      // median\r
      g.append('line')\r
        .attr('x1', x(median)).attr('x2', x(median))\r
        .attr('y1', cy - 7).attr('y2', cy + 7)\r
        .attr('stroke', '#fff').attr('stroke-width', 1.8)\r
      // whiskers\r
      g.append('line').attr('x1', x(q1)).attr('x2', x(min)).attr('y1', cy).attr('y2', cy).attr('stroke', col).attr('stroke-width', 1.2)\r
      g.append('line').attr('x1', x(q3)).attr('x2', x(max)).attr('y1', cy).attr('y2', cy).attr('stroke', col).attr('stroke-width', 1.2)\r
      g.append('circle').attr('cx', x(min)).attr('cy', cy).attr('r', 2).attr('fill', col)\r
      g.append('circle').attr('cx', x(max)).attr('cy', cy).attr('r', 2).attr('fill', col)\r
    })\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((sel) => sel.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((sel) => sel.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call((sel) => sel.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((sel) => sel.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};