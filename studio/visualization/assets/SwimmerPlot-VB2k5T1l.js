var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
const RESPONSE_COLORS = { CR: '#10b981', PR: '#6366f1', SD: '#f59e0b', PD: '#ef4444' }\r
\r
export const meta = {\r
  id: 'swimmer-plot',\r
  title: 'Swimmer Plot',\r
  desc: 'Swimmer Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SwimmerPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","swimmer-plot"],\r
}\r
\r
export default function SwimmerPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"patient":"P01","start":0,"duration":18,"response":"CR","progression":null},{"patient":"P02","start":2,"duration":22,"response":"PR","progression":20},{"patient":"P03","start":1,"duration":12,"response":"SD","progression":11},{"patient":"P04","start":0,"duration":26,"response":"CR","progression":null},{"patient":"P05","start":3,"duration":14,"response":"PD","progression":13},{"patient":"P06","start":1,"duration":20,"response":"PR","progression":18},{"patient":"P07","start":0,"duration":16,"response":"SD","progression":15},{"patient":"P08","start":2,"duration":24,"response":"CR","progression":null},{"patient":"P09","start":4,"duration":10,"response":"PD","progression":10},{"patient":"P10","start":0,"duration":28,"response":"PR","progression":null},{"patient":"P11","start":2,"duration":19,"response":"CR","progression":17},{"patient":"P12","start":1,"duration":15,"response":"SD","progression":14}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const xMax = d3.max(data, (d) => d.start + d.duration)\r
    const x = d3.scaleLinear().domain([0, xMax + 2]).range([M.left, W - M.right])\r
    const y = d3.scaleBand().domain(data.map((d) => d.patient)).range([M.top, H - M.bottom]).padding(0.35)\r
\r
    data.forEach((d) => {\r
      const yc = y(d.patient)\r
      svg.append('rect')\r
        .attr('x', x(d.start)).attr('y', yc)\r
        .attr('width', Math.max(2, x(d.start + d.duration) - x(d.start))).attr('height', y.bandwidth())\r
        .attr('rx', 2)\r
        .attr('fill', RESPONSE_COLORS[d.response] || '#94a3b8')\r
        .attr('opacity', 0.75)\r
      if (d.progression != null) {\r
        const px = x(d.progression)\r
        svg.append('path')\r
          .attr('d', \`M\${px},\${yc - 3} L\${px + 5},\${yc + y.bandwidth() / 2} L\${px},\${yc + y.bandwidth() + 3} Z\`)\r
          .attr('fill', '#1f2937')\r
      }\r
    })\r
\r
    const legend = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top - 16})\`)\r
    Object.entries(RESPONSE_COLORS).forEach(([k, c], i) => {\r
      const g = legend.append('g').attr('transform', \`translate(\${i * 52},0)\`)\r
      g.append('rect').attr('width', 9).attr('height', 9).attr('rx', 2).attr('fill', c).attr('opacity', 0.8)\r
      g.append('text').attr('x', 13).attr('y', 9)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(k)\r
    })\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};