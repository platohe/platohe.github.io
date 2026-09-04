var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes } from './utils'\r
// BivariateHistogram: 2-D binned heat grid.\r
export const meta = {\r
  id: 'bivariate-histogram',\r
  title: 'Bivariate Histogram',\r
  desc: 'Bivariate Histogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BivariateHistogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bivariate-histogram"],\r
}\r
\r
export default function BivariateHistogram({ data: customData }) {\r
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
void bins\r
    const grid = []\r
    for (let i = 0; i < 8; i++) for (let j = 0; j < 6; j++) grid.push({ i, j, v: ((i * 3 + j * 5) % 7) + ((i * j) % 3) })\r
    const cw = IW / 8, ch = IH / 6\r
    grid.forEach(cell => {\r
      g.append('rect').attr('x', M.left + cell.i * cw + 1).attr('y', M.top + IH - (cell.j + 1) * ch + 1)\r
        .attr('width', cw - 2).attr('height', ch - 2).attr('rx', 3)\r
        .attr('fill', d3.interpolateRgbBasis(['#e0e7ff', '#3730a3'])(cell.v / 9))\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};