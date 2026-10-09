var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'twin-histogram-multi',\r
  title: 'Twin Histogram Multi',\r
  desc: 'Twin Histogram Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TwinHistogramMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","twin-histogram-multi"],\r
}\r
\r
export default function TwinHistogramMulti({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"groupA":[12,15,18,22,25,28,30,32,35,38,40,42,45],"groupB":[20,24,28,32,36,40,44,48,52,56,60,64,68]}\r
    const data = (customData && customData.groupA && customData.groupB) ? customData : DEFAULT_DATA\r
    const all = [...data.groupA, ...data.groupB]\r
    const x = d3.scaleLinear().domain([d3.min(all) - 2, d3.max(all) + 2]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, 6]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    const hist = d3.histogram().domain(x.domain()).thresholds(12)\r
    const binsA = hist(data.groupA); const binsB = hist(data.groupB)\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.selectAll('rect.a').data(binsA).join('rect').attr('x', d => x(d.x0) + 1).attr('y', d => y(d.length)).attr('width', d => Math.max(1, x(d.x1) - x(d.x0) - 2)).attr('height', d => y(0) - y(d.length)).attr('fill', colors[0]).attr('opacity', 0.65)\r
    g.selectAll('rect.b').data(binsB).join('rect').attr('x', d => x(d.x0) + 1).attr('y', d => y(d.length) - 14).attr('width', d => Math.max(1, x(d.x1) - x(d.x0) - 2)).attr('height', d => y(0) - y(d.length)).attr('fill', colors[1]).attr('opacity', 0.45)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};