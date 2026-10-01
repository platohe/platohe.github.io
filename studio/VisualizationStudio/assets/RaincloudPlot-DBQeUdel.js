var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
function gauss(z) { return Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI) }\r
\r
function density(values, samples) {\r
  const sd = d3.deviation(values) || 1\r
  const bw = 1.06 * sd * Math.pow(values.length, -0.2)\r
  return samples.map((t) => [t, d3.mean(values, (v) => gauss((t - v) / bw)) / bw])\r
}\r
\r
export const meta = {\r
  id: 'raincloud-plot',\r
  title: 'Raincloud Plot',\r
  desc: 'Raincloud Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RaincloudPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","raincloud-plot"],\r
}\r
\r
export default function RaincloudPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"group":"Group A","values":[12,15,14,18,22,24,25,28,30,32,35,38,40,42,45,48,50,55,58,62]},{"group":"Group B","values":[20,22,25,28,30,32,35,38,40,42,44,46,48,50,52,54,56,58,60,62]},{"group":"Group C","values":[5,8,10,12,14,15,18,20,22,24,25,28,30,32,34,38,40,42,45,48]}]\r
    const groups = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const all = groups.flatMap((g) => g.values)\r
    const x = d3.scaleLinear().domain([d3.min(all) - 5, d3.max(all) + 5]).range([M.left, W - M.right])\r
    const n = groups.length\r
    const laneH = IH / n\r
\r
    groups.forEach((g, i) => {\r
      const color = colors[i % colors.length]\r
      const sorted = [...g.values].sort(d3.ascending)\r
      const q1 = d3.quantile(sorted, 0.25)\r
      const q3 = d3.quantile(sorted, 0.75)\r
      const med = d3.quantile(sorted, 0.5)\r
      const min = sorted[0]\r
      const max = sorted[sorted.length - 1]\r
      const mid = M.top + i * laneH + laneH / 2\r
\r
      const lo = x.domain()[0]\r
      const hi = x.domain()[1]\r
      const samples = d3.range(40).map((j) => lo + (j / 39) * (hi - lo))\r
      const dens = density(g.values, samples)\r
      const dMax = d3.max(dens, (d) => d[1]) || 1\r
      const yD = d3.scaleLinear().domain([0, dMax]).range([0, laneH * 0.34])\r
      const area = d3.area()\r
        .x((d) => x(d[0]))\r
        .y0((d) => mid - yD(d[1]))\r
        .y1(mid)\r
        .curve(d3.curveCatmullRom)\r
      const line = d3.line()\r
        .x((d) => x(d[0]))\r
        .y((d) => mid - yD(d[1]))\r
        .curve(d3.curveCatmullRom)\r
      svg.append('path').attr('d', area(dens)).attr('fill', color).attr('opacity', 0.35)\r
      svg.append('path').attr('d', line(dens)).attr('fill', 'none').attr('stroke', color).attr('stroke-width', 1.5)\r
\r
      svg.append('rect')\r
        .attr('x', x(q1)).attr('y', mid - 3)\r
        .attr('width', Math.max(2, x(q3) - x(q1))).attr('height', 6)\r
        .attr('fill', color).attr('opacity', 0.55).attr('rx', 1.5)\r
      svg.append('line')\r
        .attr('x1', x(med)).attr('x2', x(med)).attr('y1', mid - 5).attr('y2', mid + 5)\r
        .attr('stroke', '#1f2937').attr('stroke-width', 1.8)\r
      svg.append('line')\r
        .attr('x1', x(q1)).attr('x2', x(min)).attr('y1', mid).attr('y2', mid)\r
        .attr('stroke', color).attr('stroke-width', 1.2)\r
      svg.append('line')\r
        .attr('x1', x(q3)).attr('x2', x(max)).attr('y1', mid).attr('y2', mid)\r
        .attr('stroke', color).attr('stroke-width', 1.2)\r
      svg.append('circle').attr('cx', x(min)).attr('cy', mid).attr('r', 2).attr('fill', color)\r
      svg.append('circle').attr('cx', x(max)).attr('cy', mid).attr('r', 2).attr('fill', color)\r
\r
      svg.selectAll('circle.points')\r
        .data(g.values)\r
        .join('circle')\r
        .attr('class', 'points')\r
        .attr('cx', (d) => x(d))\r
        .attr('cy', () => mid + 10 + (Math.random() - 0.5) * laneH * 0.34)\r
        .attr('r', 2.2)\r
        .attr('fill', color)\r
        .attr('opacity', 0.55)\r
\r
      svg.append('text')\r
        .attr('x', W - M.right - 4).attr('y', mid - 6)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '11px').attr('font-weight', 600)\r
        .text(g.group)\r
    })\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};