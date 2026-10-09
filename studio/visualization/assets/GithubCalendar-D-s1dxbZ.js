var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'github-calendar',\r
  title: 'Github Calendar',\r
  desc: 'Github Calendar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GithubCalendar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","github-calendar"],\r
}\r
\r
export default function GithubCalendar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"2024-01-01","count":7},{"date":"2024-01-02","count":5},{"date":"2024-01-03","count":7},{"date":"2024-01-04","count":5},{"date":"2024-01-05","count":0},{"date":"2024-01-06","count":1},{"date":"2024-01-07","count":0},{"date":"2024-01-08","count":0},{"date":"2024-01-09","count":1},{"date":"2024-01-10","count":0},{"date":"2024-01-11","count":0},{"date":"2024-01-12","count":0},{"date":"2024-01-13","count":0},{"date":"2024-01-14","count":0},{"date":"2024-01-15","count":0},{"date":"2024-01-16","count":0},{"date":"2024-01-17","count":0},{"date":"2024-01-18","count":0},{"date":"2024-01-19","count":0},{"date":"2024-01-20","count":0},{"date":"2024-01-21","count":1},{"date":"2024-01-22","count":0},{"date":"2024-01-23","count":1},{"date":"2024-01-24","count":0},{"date":"2024-01-25","count":1},{"date":"2024-01-26","count":0},{"date":"2024-01-27","count":2},{"date":"2024-01-28","count":8},{"date":"2024-01-29","count":7},{"date":"2024-01-30","count":4},{"date":"2024-01-31","count":6},{"date":"2024-02-01","count":12},{"date":"2024-02-02","count":10},{"date":"2024-02-03","count":13},{"date":"2024-02-04","count":10},{"date":"2024-02-05","count":11},{"date":"2024-02-06","count":8},{"date":"2024-02-07","count":8},{"date":"2024-02-08","count":12},{"date":"2024-02-09","count":11},{"date":"2024-02-10","count":8},{"date":"2024-02-11","count":11},{"date":"2024-02-12","count":6},{"date":"2024-02-13","count":6},{"date":"2024-02-14","count":9},{"date":"2024-02-15","count":8},{"date":"2024-02-16","count":5},{"date":"2024-02-17","count":1},{"date":"2024-02-18","count":0},{"date":"2024-02-19","count":0},{"date":"2024-02-20","count":0},{"date":"2024-02-21","count":0},{"date":"2024-02-22","count":0},{"date":"2024-02-23","count":0},{"date":"2024-02-24","count":0},{"date":"2024-02-25","count":0},{"date":"2024-02-26","count":0},{"date":"2024-02-27","count":0},{"date":"2024-02-28","count":0},{"date":"2024-02-29","count":0},{"date":"2024-03-01","count":0},{"date":"2024-03-02","count":0},{"date":"2024-03-03","count":0},{"date":"2024-03-04","count":0},{"date":"2024-03-05","count":0},{"date":"2024-03-06","count":3},{"date":"2024-03-07","count":0},{"date":"2024-03-08","count":3},{"date":"2024-03-09","count":6},{"date":"2024-03-10","count":2},{"date":"2024-03-11","count":6},{"date":"2024-03-12","count":3},{"date":"2024-03-13","count":7},{"date":"2024-03-14","count":11},{"date":"2024-03-15","count":6},{"date":"2024-03-16","count":14},{"date":"2024-03-17","count":11},{"date":"2024-03-18","count":14},{"date":"2024-03-19","count":11},{"date":"2024-03-20","count":12},{"date":"2024-03-21","count":10},{"date":"2024-03-22","count":12},{"date":"2024-03-23","count":10},{"date":"2024-03-24","count":13},{"date":"2024-03-25","count":9},{"date":"2024-03-26","count":9},{"date":"2024-03-27","count":11},{"date":"2024-03-28","count":9},{"date":"2024-03-29","count":11},{"date":"2024-03-30","count":9},{"date":"2024-03-31","count":4},{"date":"2024-04-01","count":4},{"date":"2024-04-02","count":1},{"date":"2024-04-03","count":0},{"date":"2024-04-04","count":2},{"date":"2024-04-05","count":0},{"date":"2024-04-06","count":0},{"date":"2024-04-07","count":1},{"date":"2024-04-08","count":0},{"date":"2024-04-09","count":0},{"date":"2024-04-10","count":0},{"date":"2024-04-11","count":0},{"date":"2024-04-12","count":0},{"date":"2024-04-13","count":0},{"date":"2024-04-14","count":0},{"date":"2024-04-15","count":0},{"date":"2024-04-16","count":0},{"date":"2024-04-17","count":0},{"date":"2024-04-18","count":0},{"date":"2024-04-19","count":1},{"date":"2024-04-20","count":0},{"date":"2024-04-21","count":0},{"date":"2024-04-22","count":4},{"date":"2024-04-23","count":7},{"date":"2024-04-24","count":3},{"date":"2024-04-25","count":8},{"date":"2024-04-26","count":6},{"date":"2024-04-27","count":5},{"date":"2024-04-28","count":12},{"date":"2024-04-29","count":9},{"date":"2024-04-30","count":6},{"date":"2024-05-01","count":13},{"date":"2024-05-02","count":12},{"date":"2024-05-03","count":14},{"date":"2024-05-04","count":15},{"date":"2024-05-05","count":9},{"date":"2024-05-06","count":12},{"date":"2024-05-07","count":11},{"date":"2024-05-08","count":8},{"date":"2024-05-09","count":6},{"date":"2024-05-10","count":10},{"date":"2024-05-11","count":9},{"date":"2024-05-12","count":5},{"date":"2024-05-13","count":4},{"date":"2024-05-14","count":3},{"date":"2024-05-15","count":0},{"date":"2024-05-16","count":0},{"date":"2024-05-17","count":5},{"date":"2024-05-18","count":1},{"date":"2024-05-19","count":3},{"date":"2024-05-20","count":0},{"date":"2024-05-21","count":0},{"date":"2024-05-22","count":0},{"date":"2024-05-23","count":0},{"date":"2024-05-24","count":0},{"date":"2024-05-25","count":0},{"date":"2024-05-26","count":0},{"date":"2024-05-27","count":0},{"date":"2024-05-28","count":0},{"date":"2024-05-29","count":0},{"date":"2024-05-30","count":0},{"date":"2024-05-31","count":0},{"date":"2024-06-01","count":0},{"date":"2024-06-02","count":0},{"date":"2024-06-03","count":1},{"date":"2024-06-04","count":2},{"date":"2024-06-05","count":0},{"date":"2024-06-06","count":2},{"date":"2024-06-07","count":3},{"date":"2024-06-08","count":5},{"date":"2024-06-09","count":8},{"date":"2024-06-10","count":6},{"date":"2024-06-11","count":6},{"date":"2024-06-12","count":11},{"date":"2024-06-13","count":9},{"date":"2024-06-14","count":8},{"date":"2024-06-15","count":10},{"date":"2024-06-16","count":8},{"date":"2024-06-17","count":12},{"date":"2024-06-18","count":9},{"date":"2024-06-19","count":11},{"date":"2024-06-20","count":10},{"date":"2024-06-21","count":12},{"date":"2024-06-22","count":13},{"date":"2024-06-23","count":11},{"date":"2024-06-24","count":7},{"date":"2024-06-25","count":4},{"date":"2024-06-26","count":9},{"date":"2024-06-27","count":5},{"date":"2024-06-28","count":6},{"date":"2024-06-29","count":5},{"date":"2024-06-30","count":1},{"date":"2024-07-01","count":0},{"date":"2024-07-02","count":0},{"date":"2024-07-03","count":1},{"date":"2024-07-04","count":0},{"date":"2024-07-05","count":0},{"date":"2024-07-06","count":0},{"date":"2024-07-07","count":0},{"date":"2024-07-08","count":0},{"date":"2024-07-09","count":0},{"date":"2024-07-10","count":0},{"date":"2024-07-11","count":0},{"date":"2024-07-12","count":0},{"date":"2024-07-13","count":0},{"date":"2024-07-14","count":0},{"date":"2024-07-15","count":0},{"date":"2024-07-16","count":1},{"date":"2024-07-17","count":2},{"date":"2024-07-18","count":5}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const parseDate = d3.timeParse('%Y-%m-%d')\r
    const parsed = data.map(d => ({ date: parseDate(d.date), count: d.count || 0 }))\r
      .filter(d => d.date)\r
\r
    const maxCount = d3.max(parsed, d => d.count) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateGreens).domain([0, maxCount])\r
\r
    const cellSize = 10\r
    const pad = 2\r
    const step = cellSize + pad\r
    const weeksPerYear = 53\r
    const margin = { top: 38, right: 16, bottom: 16, left: 28 }\r
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Day of week labels\r
    daysOfWeek.forEach((day, i) => {\r
      if (i % 2 === 1) {\r
        g.append('text').attr('x', -8).attr('y', i * step + cellSize - 1)\r
          .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px')\r
          .text(day)\r
      }\r
    })\r
\r
    // Month labels\r
    const months = d3.timeMonths(new Date(parsed[0]?.date), new Date(parsed[parsed.length - 1]?.date || ''))\r
    months.forEach(month => {\r
      const weekNum = d3.timeWeek.count(d3.timeYear(month), month)\r
      g.append('text')\r
        .attr('x', weekNum * step).attr('y', -6)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px')\r
        .text(d3.timeFormat('%b')(month))\r
    })\r
\r
    // Calendar cells\r
    g.selectAll('rect')\r
      .data(parsed)\r
      .join('rect')\r
      .attr('x', d => d3.timeWeek.count(d3.timeYear(d.date), d.date) * step)\r
      .attr('y', d => d.date.getDay() * step)\r
      .attr('width', cellSize).attr('height', cellSize)\r
      .attr('fill', d => d.count === 0 ? 'var(--bg-secondary)' : colorScale(d.count))\r
      .attr('stroke', 'var(--bg-primary)').attr('stroke-width', 0.5)\r
      .attr('rx', 1.5)\r
\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};