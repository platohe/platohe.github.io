var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes, colors } from './utils'\r
// HistogramNormalCurve: Bars plus normal overlay.\r
export const meta = {\r
  id: 'histogram-normal-curve',\r
  title: 'Histogram Normal Curve',\r
  desc: 'Histogram Normal Curve — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'HistogramNormalCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","histogram-normal-curve"],\r
}\r
\r
export default function HistogramNormalCurve({ data: customData }) {\r
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
const mean = 50, sd = 18\r
    const yMax = d3.max(bins, b => b.length)\r
    const yb = d3.scaleLinear().domain([0, yMax]).range([IH, 0])\r
    bins.forEach(b => {\r
      if (!b.length) return\r
      g.append('rect').attr('x', M.left + x(b.x0) + 1).attr('y', M.top + yb(b.length))\r
        .attr('width', Math.max(x(b.x1) - x(b.x0) - 2, 1)).attr('height', IH - yb(b.length))\r
        .attr('fill', colors[0]).attr('fill-opacity', 0.65)\r
    })\r
    let d = ''\r
    for (let t = 0; t <= 100; t += 2) {\r
      const pdf = Math.exp(-((t - mean) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI))\r
      const px = M.left + x(t), py = M.top + yb(pdf * yMax * sd * 2.6)\r
      d += (d ? 'L' : 'M') + px + ' ' + py\r
    }\r
    g.append('path').attr('d', d).attr('fill', 'none').attr('stroke', '#ef4444').attr('stroke-width', 2.2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};