var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
export const meta = {\r
  id: 'bid-ask-depth-chart',\r
  title: 'Bid Ask Depth Chart',\r
  desc: 'Bid Ask Depth Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BidAskDepthChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bid-ask-depth-chart"],\r
}\r
\r
export default function BidAskDepthChart({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"bids":[{"price":98,"volume":120},{"price":99,"volume":200},{"price":100,"volume":340},{"price":101,"volume":280},{"price":102,"volume":180}],"asks":[{"price":103,"volume":150},{"price":104,"volume":260},{"price":105,"volume":320},{"price":106,"volume":240},{"price":107,"volume":160}]}\r
    const data = (customData && customData.bids && customData.asks) ? customData : DEFAULT_DATA\r
    const all = [...data.bids, ...data.asks]\r
    const x = d3.scaleLinear().domain([d3.min(all, d => d.price) - 1, d3.max(all, d => d.price) + 1]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, d3.max(all, d => d.volume) * 1.1]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    const areaB = d3.area().x(d => x(d.price)).y0(y(0)).y1(d => y(d.volume)).curve(d3.curveStepAfter)\r
    const areaA = d3.area().x(d => x(d.price)).y0(y(0)).y1(d => y(d.volume)).curve(d3.curveStepAfter)\r
    g.append('path').datum(data.bids).attr('d', areaB).attr('fill', colors[2]).attr('opacity', 0.35).attr('stroke', colors[2]).attr('stroke-width', 1.5)\r
    g.append('path').datum(data.asks).attr('d', areaA).attr('fill', colors[3]).attr('opacity', 0.35).attr('stroke', colors[3]).attr('stroke-width', 1.5)\r
    g.selectAll('circle.bid').data(data.bids).join('circle').attr('cx', d => x(d.price)).attr('cy', d => y(d.volume)).attr('r', 3).attr('fill', colors[2])\r
    g.selectAll('circle.ask').data(data.asks).join('circle').attr('cx', d => x(d.price)).attr('cy', d => y(d.volume)).attr('r', 3).attr('fill', colors[3])\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};