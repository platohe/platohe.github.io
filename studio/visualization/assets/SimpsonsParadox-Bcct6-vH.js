var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'simpsons-paradox',\r
  title: 'Simpsons Paradox',\r
  desc: 'Simpsons Paradox — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SimpsonsParadox',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","simpsons-paradox"],\r
}\r
\r
export default function SimpsonsParadox({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_AGGREGATED = [\r
    { department: 'Overall', admitMale: 44, totalMale: 100, admitFemale: 35, totalFemale: 100 }\r
  ]\r
  const DEFAULT_DISAGGREGATED = [\r
    { department: 'A', admitMale: 82, totalMale: 50, admitFemale: 68, totalFemale: 50 },\r
    { department: 'B', admitMale: 13, totalMale: 50, admitFemale: 34, totalFemale: 50 },\r
    { department: 'C', admitMale: 62, totalMale: 60, admitFemale: 71, totalFemale: 60 },\r
    { department: 'D', admitMale: 26, totalMale: 40, admitFemale: 33, totalFemale: 40 },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.length > 0 && customData[0].department !== 'A') ? customData : { aggregated: DEFAULT_AGGREGATED, disaggregated: DEFAULT_DISAGGREGATED }\r
    const aggr = customData && customData[0]?.department ? customData : DEFAULT_AGGREGATED\r
    const disaggr = customData && customData[0]?.department === 'A' ? customData : DEFAULT_DISAGGREGATED\r
\r
    const cellW = IW / 2\r
    const panelH = IH / 2\r
    const x = d3.scaleBand().domain(['Male', 'Female']).range([0, cellW]).padding(0.3)\r
    const y = d3.scaleLinear().domain([0, 100]).range([panelH, 0])\r
\r
    const drawPanel = (data, ox, oy, title, color) => {\r
      svg.append('text').attr('x', ox + cellW / 2).attr('y', oy - 4)\r
        .attr('text-anchor', 'middle').attr('fill', color).attr('font-size', '11px').attr('font-weight', 'bold').text(title)\r
\r
      data.forEach(d => {\r
        const maleRate = d.totalMale > 0 ? (d.admitMale / d.totalMale * 100) : 0\r
        const femaleRate = d.totalFemale > 0 ? (d.admitFemale / d.totalFemale * 100) : 0\r
\r
        // Male bar\r
        svg.append('rect').attr('x', ox + x('Male')).attr('y', oy + y(maleRate))\r
          .attr('width', x.bandwidth()).attr('height', y(0) - y(maleRate))\r
          .attr('fill', colors[0]).attr('opacity', 0.8).attr('rx', 2)\r
        svg.append('text').attr('x', ox + x('Male') + x.bandwidth() / 2).attr('y', oy + y(maleRate) - 4)\r
          .attr('text-anchor', 'middle').attr('fill', colors[0]).attr('font-size', '9px').text(maleRate.toFixed(1) + '%')\r
\r
        // Female bar\r
        svg.append('rect').attr('x', ox + x('Female')).attr('y', oy + y(femaleRate))\r
          .attr('width', x.bandwidth()).attr('height', y(0) - y(femaleRate))\r
          .attr('fill', colors[3]).attr('opacity', 0.8).attr('rx', 2)\r
        svg.append('text').attr('x', ox + x('Female') + x.bandwidth() / 2).attr('y', oy + y(femaleRate) - 4)\r
          .attr('text-anchor', 'middle').attr('fill', colors[3]).attr('font-size', '9px').text(femaleRate.toFixed(1) + '%')\r
      })\r
    }\r
\r
    // Aggregated (top)\r
    drawPanel(aggr, 0, 0, 'Aggregated (Overall)', colors[2])\r
\r
    // Disaggregated (bottom)\r
    disaggr.forEach((d, i) => {\r
      const dx = i < 2 ? 0 : cellW\r
      const dy = i % 2 === 0 ? panelH : 0\r
      const title = d.department === 'Overall' ? 'Aggregated' : 'Dept ' + d.department\r
      drawPanel([d], dx, dy, title, colors[1])\r
    })\r
\r
    // Paradox annotation\r
    svg.append('text').attr('x', IW / 2).attr('y', IH - 8)\r
      .attr('text-anchor', 'middle').attr('fill', colors[3]).attr('font-size', '11px').attr('font-weight', 'bold')\r
      .text('Simpson\\'s Paradox: Overall male advantage reverses within each department')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};