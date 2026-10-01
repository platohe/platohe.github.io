var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'marey-trains',\r
  title: 'Marey Trains',\r
  desc: 'Marey Trains — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MareyTrains',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","marey-trains"],\r
}\r
\r
export default function MareyTrains({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.MareyTrains\r
    const width = 600\r
    const height = 400\r
    const margin = { top: 20, right: 30, bottom: 40, left: 100 }\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '10px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    // stations along y-axis (distance), time along x-axis\r
    const stations = chartData.stations\r
    const trains = chartData.trains\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, 1440]) // minutes in day\r
      .range([margin.left, width - margin.right])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(stations, s => s.distance) || 100])\r
      .range([margin.top, height - margin.bottom])\r
\r
    const color = d3.scaleOrdinal(['#6366f1', '#10b981', '#f59e0b'])\r
\r
    // Station gridlines and labels\r
    stations.forEach(s => {\r
      svg.append('line')\r
        .attr('x1', margin.left)\r
        .attr('x2', width - margin.right)\r
        .attr('y1', y(s.distance))\r
        .attr('y2', y(s.distance))\r
        .attr('stroke', '#334155')\r
        .attr('stroke-dasharray', '4,4')\r
\r
      svg.append('text')\r
        .attr('x', margin.left - 6)\r
        .attr('y', y(s.distance))\r
        .attr('dy', '0.35em')\r
        .attr('text-anchor', 'end')\r
        .attr('fill', '#94a3b8')\r
        .text(s.name)\r
    })\r
\r
    // Time axis\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${height - margin.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickFormat(m => {\r
        const h = Math.floor(m / 60)\r
        const mm = m % 60\r
        return \`\${h}:\${String(mm).padStart(2, '0')}\`\r
      }))\r
      .attr('color', '#94a3b8')\r
\r
    // Train lines\r
    const line = d3.line()\r
      .x(stop => x(stop.time))\r
      .y(stop => y(stop.distance))\r
\r
    trains.forEach((train, i) => {\r
      svg.append('path')\r
        .datum(train.stops)\r
        .attr('fill', 'none')\r
        .attr('stroke', color(i % 3))\r
        .attr('stroke-width', 1.5)\r
        .attr('d', line)\r
    })\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};