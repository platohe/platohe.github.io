var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes, colors } from './utils'\r
// CumulativeHistogram: Rising cumulative step area.\r
export const meta = {\r
  id: 'cumulative-histogram',\r
  title: 'Cumulative Histogram',\r
  desc: 'Cumulative Histogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CumulativeHistogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cumulative-histogram"],\r
}\r
\r
export default function CumulativeHistogram({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { values: [12,18,22,25,29,31,33,35,38,41,44,47,49,53,56,59,62,66,69,73,77,81,85,90] }\r
    const data = (customData && customData.values) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 10]).range([IH, 0])\r
    makeAxes(g, x, y, M.left, M.top + IH)\r
    const bins = d3.bin().domain([0, 100]).thresholds(10)(data.values)\r
let acc = 0\r
    const cum = bins.map(b => { acc += b.length; return acc })\r
    const yMax = d3.max(cum)\r
    const yc = d3.scaleLinear().domain([0, yMax]).range([IH, 0])\r
    let d = 'M' + M.left + ' ' + (M.top + IH)\r
    bins.forEach((b, i) => { d += ' L' + (M.left + x(b.x1)) + ' ' + (M.top + yc(cum[i])) })\r
    d += ' L' + (M.left + IW) + ' ' + (M.top + IH) + ' Z'\r
    g.append('path').attr('d', d).attr('fill', colors[0]).attr('fill-opacity', 0.3).attr('stroke', colors[0]).attr('stroke-width', 2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};