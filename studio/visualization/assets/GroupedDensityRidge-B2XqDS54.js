var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'grouped-density-ridge',\r
  title: 'Grouped Density Ridge',\r
  desc: 'Grouped Density Ridge — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedDensityRidge',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","grouped-density-ridge"],\r
}\r
\r
export default function GroupedDensityRidge({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"group":"Alpha","values":[12,14,16,19,22,25,27,29,31,33,35,37,40,42,44,46,48,51,54,58]},{"group":"Beta","values":[20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,78]},{"group":"Gamma","values":[6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63]},{"group":"Delta","values":[28,32,36,40,43,46,49,52,54,56,58,60,62,64,66,68,70,72,75,80]}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const all = data.flatMap((d) => d.values)\r
    const x = d3.scaleLinear().domain([d3.min(all) - 5, d3.max(all) + 5]).range([M.left, W - M.right])\r
    const xDomain = x.domain()\r
    const g = svg.append('g')\r
\r
    const n = data.length\r
    const laneH = IH / n\r
\r
    function density(values) {\r
      const sd = d3.deviation(values) || 1\r
      const bw = 1.06 * sd * Math.pow(values.length, -0.2)\r
      const gauss = (u) => Math.exp(-0.5 * u * u) / Math.sqrt(2 * Math.PI)\r
      const pts = d3.range(60).map((i) => xDomain[0] + (i / 59) * (xDomain[1] - xDomain[0]))\r
      return pts.map((t) => [t, d3.mean(values, (v) => gauss((t - v) / bw)) / bw])\r
    }\r
\r
    const maxDAll = d3.max(data, (grp) => d3.max(density(grp.values), (d) => d[1])) || 1\r
    const yD = d3.scaleLinear().domain([0, maxDAll]).range([0, laneH * 0.9])\r
\r
    data.forEach((grp, i) => {\r
      const col = colors[i % colors.length]\r
      const dens = density(grp.values)\r
      const baseY = M.top + i * laneH + laneH\r
      const area = d3.area()\r
        .x((d) => x(d[0]))\r
        .y0(baseY)\r
        .y1((d) => baseY - yD(d[1]))\r
        .curve(d3.curveBasis)\r
      const line = d3.line()\r
        .x((d) => x(d[0]))\r
        .y((d) => baseY - yD(d[1]))\r
        .curve(d3.curveBasis)\r
\r
      g.append('path').datum(dens).attr('d', area).attr('fill', col).attr('opacity', 0.32)\r
      g.append('path').datum(dens).attr('d', line).attr('fill', 'none').attr('stroke', col).attr('stroke-width', 1.6)\r
\r
      g.append('text')\r
        .attr('x', M.left).attr('y', baseY - laneH * 0.5)\r
        .attr('dominant-baseline', 'middle').attr('text-anchor', 'start')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(grp.group)\r
    })\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((s) => s.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((s) => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};