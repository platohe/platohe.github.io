var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes, colors } from './utils'\r
// BackToBackHistogram: Mirrored population-style bins.\r
export const meta = {\r
  id: 'back-to-back-histogram',\r
  title: 'Back To Back Histogram',\r
  desc: 'Back To Back Histogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BackToBackHistogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","back-to-back-histogram"],\r
}\r
\r
export default function BackToBackHistogram({ data: customData }) {\r
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
const left = bins.map((b,i)=>b.length*(1-(i%3)*0.2))\r
    const right = bins.map((b,i)=>b.length*(0.8+(i%4)*0.1))\r
    const yl = d3.scaleLinear().domain([0,d3.max(left)]).range([0,IH/2-10])\r
    const yr = d3.scaleLinear().domain([0,d3.max(right)]).range([0,IH/2-10])\r
    const midY = M.top + IH/2\r
    bins.forEach((b,i)=>{\r
      g.append('rect').attr('x',M.left+x(b.x0)+0.5).attr('width',x(b.x1)-x(b.x0)-1).attr('y',midY-yl(left[i])).attr('height',yl(left[i])).attr('fill',colors[0]).attr('fill-opacity',0.8)\r
      g.append('rect').attr('x',M.left+x(b.x0)+0.5).attr('width',x(b.x1)-x(b.x0)-1).attr('y',midY).attr('height',yr(right[i])).attr('fill',colors[3]).attr('fill-opacity',0.8)\r
    })\r
    g.append('line').attr('x1',M.left).attr('x2',M.left+IW).attr('y1',midY).attr('y2',midY).attr('stroke','var(--border)')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};