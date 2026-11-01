var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cumulative-flow-diagram',\r
  title: 'Cumulative Flow Diagram',\r
  desc: 'Cumulative Flow Diagram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CumulativeFlowDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cumulative-flow-diagram"],\r
}\r
\r
export default function CumulativeFlowDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"week":1,"backlog":40,"inProgress":8,"review":3,"done":2},{"week":2,"backlog":36,"inProgress":10,"review":5,"done":5},{"week":3,"backlog":30,"inProgress":12,"review":6,"done":9},{"week":4,"backlog":26,"inProgress":14,"review":7,"done":13},{"week":5,"backlog":22,"inProgress":13,"review":9,"done":17},{"week":6,"backlog":18,"inProgress":15,"review":10,"done":21},{"week":7,"backlog":14,"inProgress":16,"review":11,"done":26},{"week":8,"backlog":10,"inProgress":14,"review":12,"done":31},{"week":9,"backlog":8,"inProgress":15,"review":13,"done":36},{"week":10,"backlog":5,"inProgress":13,"review":14,"done":41},{"week":11,"backlog":3,"inProgress":12,"review":13,"done":46},{"week":12,"backlog":1,"inProgress":10,"review":12,"done":51}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    // Derive time key and stack keys from data shape\r
    const timeKey = data[0] && data[0].week !== undefined ? 'week'\r
      : data[0] && data[0].time !== undefined ? 'time'\r
      : data[0] && data[0].x !== undefined ? 'x'\r
      : null\r
    const keys = Object.keys(data[0]).filter(k => k !== timeKey && typeof data[0][k] === 'number')\r
    const series = d3.stack().keys(keys)(data)\r
\r
    const x = d3.scaleLinear()\r
      .domain(timeKey ? d3.extent(data, d => d[timeKey]) : [0, data.length])\r
      .range([M.left, W - M.right])\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d3.sum(keys, k => d[k]))])\r
      .range([H - M.bottom, M.top])\r
\r
    const area = d3.area()\r
      .x((d) => x(timeKey ? d.data[timeKey] : d.index))\r
      .y0((d) => y(d[0]))\r
      .y1((d) => y(d[1]))\r
      .curve(d3.curveCatmullRom)\r
\r
    const col = d3.scaleOrdinal(colors).domain(keys)\r
\r
    series.forEach((s, i) => {\r
      svg.append('path')\r
        .datum(s)\r
        .attr('d', area)\r
        .attr('fill', col(s.key))\r
        .attr('opacity', 0.75)\r
    })\r
\r
    const legend = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top - 18})\`)\r
    keys.forEach((k, i) => {\r
      const g = legend.append('g').attr('transform', \`translate(\${i * 78},0)\`)\r
      g.append('rect').attr('width', 10).attr('height', 10).attr('rx', 2)\r
        .attr('fill', col(k)).attr('opacity', 0.8)\r
      g.append('text')\r
        .attr('x', 14).attr('y', 9)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '11px')\r
        .text(k.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()))\r
    })\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(8))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
      .call((g) => g.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
      .lower()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};