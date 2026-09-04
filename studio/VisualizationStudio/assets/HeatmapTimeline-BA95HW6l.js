var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'heatmap-timeline',\r
  title: 'Heatmap Timeline',\r
  desc: 'Heatmap Timeline — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapTimeline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-color"],\r
  tags: ["bars","heatmap-timeline"],\r
}\r
\r
export default function HeatmapTimeline({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"days":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"hours":["6am","8am","10am","12pm","2pm","4pm","6pm","8pm","10pm"],"values":[[0,2,5,8,6,4,1],[1,3,7,9,7,5,2],[0,1,4,6,5,3,0],[2,4,8,10,8,6,3],[1,3,6,8,6,4,1],[0,2,5,7,5,3,0],[1,3,6,9,7,5,2],[0,1,3,5,4,2,0]]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.days && customData.hours && customData.values) ? customData : DEFAULT_DATA\r
\r
    const cellW = (IW - 20) / data.days.length\r
    const cellH = (IH - 20) / data.hours.length\r
    const color = d3.scaleSequential(d3.interpolateViridis)\r
      .domain([0, d3.max(data.values.flat()) || 1])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    data.values.forEach((row, ri) => {\r
      row.forEach((val, ci) => {\r
        g.append('rect')\r
          .attr('x', ci * cellW + 2).attr('y', ri * cellH + 2)\r
          .attr('width', cellW - 4).attr('height', cellH - 4)\r
          .attr('fill', color(val))\r
          .attr('rx', 2)\r
      })\r
    })\r
\r
    // Day labels\r
    data.days.forEach((day, i) => {\r
      g.append('text')\r
        .attr('x', i * cellW + cellW / 2).attr('y', data.hours.length * cellH + 14)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
        .text(day)\r
    })\r
\r
    // Hour labels\r
    data.hours.forEach((hour, i) => {\r
      g.append('text')\r
        .attr('x', -4).attr('y', i * cellH + cellH / 2 + 3)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
        .text(hour)\r
    })\r
\r
    // Color legend\r
    const legW = 80, legH = 8\r
    const legX = IW - legW - 10, legY = -10\r
    const legScale = d3.scaleLinear().domain([0, d3.max(data.values.flat()) || 1]).range([0, legW])\r
    for (let i = 0; i < legW; i++) {\r
      g.append('rect')\r
        .attr('x', legX + i).attr('y', legY)\r
        .attr('width', 1).attr('height', legH)\r
        .attr('fill', color(i / legW * (d3.max(data.values.flat()) || 1)))\r
    }\r
    g.append('text').attr('x', legX).attr('y', legY + legH + 8)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '6px').text('0')\r
    g.append('text').attr('x', legX + legW).attr('y', legY + legH + 8)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '6px').text(d3.max(data.values.flat()) || 0)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};