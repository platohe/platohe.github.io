var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'epi-curve',\r
  title: 'Epi Curve',\r
  desc: 'Epi Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EpiCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","epi-curve"],\r
}\r
\r
export default function EpiCurve({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [aggregation, setAggregation] = useState(options.aggregation || 'daily') // 'daily', 'weekly'\r
\r
  const DEFAULT_DATA = {"cases":[{"date":"2026-05-26","cases":9,"type":"local"},{"date":"2026-05-27","cases":12,"type":"local"},{"date":"2026-05-28","cases":6,"type":"local"},{"date":"2026-05-29","cases":8,"type":"local"},{"date":"2026-05-30","cases":14,"type":"local"},{"date":"2026-05-31","cases":9,"type":"imported"},{"date":"2026-06-01","cases":15,"type":"local"},{"date":"2026-06-02","cases":11,"type":"local"},{"date":"2026-06-03","cases":17,"type":"local"},{"date":"2026-06-04","cases":12,"type":"local"},{"date":"2026-06-05","cases":22,"type":"local"},{"date":"2026-06-06","cases":21,"type":"local"},{"date":"2026-06-07","cases":20,"type":"local"},{"date":"2026-06-08","cases":22,"type":"local"},{"date":"2026-06-09","cases":28,"type":"local"},{"date":"2026-06-10","cases":27,"type":"imported"},{"date":"2026-06-11","cases":33,"type":"imported"},{"date":"2026-06-12","cases":34,"type":"local"},{"date":"2026-06-13","cases":34,"type":"local"},{"date":"2026-06-14","cases":43,"type":"local"},{"date":"2026-06-15","cases":44,"type":"local"},{"date":"2026-06-16","cases":47,"type":"local"},{"date":"2026-06-17","cases":56,"type":"imported"},{"date":"2026-06-18","cases":58,"type":"local"},{"date":"2026-06-19","cases":59,"type":"local"},{"date":"2026-06-20","cases":61,"type":"local"},{"date":"2026-06-21","cases":71,"type":"local"},{"date":"2026-06-22","cases":78,"type":"local"},{"date":"2026-06-23","cases":82,"type":"local"},{"date":"2026-06-24","cases":86,"type":"local"},{"date":"2026-06-25","cases":81,"type":"local"},{"date":"2026-06-26","cases":87,"type":"local"},{"date":"2026-06-27","cases":93,"type":"imported"},{"date":"2026-06-28","cases":90,"type":"local"},{"date":"2026-06-29","cases":102,"type":"local"},{"date":"2026-06-30","cases":102,"type":"local"},{"date":"2026-07-01","cases":102,"type":"imported"},{"date":"2026-07-02","cases":99,"type":"imported"},{"date":"2026-07-03","cases":105,"type":"imported"},{"date":"2026-07-04","cases":104,"type":"local"},{"date":"2026-07-05","cases":103,"type":"local"},{"date":"2026-07-06","cases":103,"type":"local"},{"date":"2026-07-07","cases":102,"type":"local"},{"date":"2026-07-08","cases":106,"type":"local"},{"date":"2026-07-09","cases":106,"type":"imported"},{"date":"2026-07-10","cases":99,"type":"local"},{"date":"2026-07-11","cases":95,"type":"local"},{"date":"2026-07-12","cases":97,"type":"local"},{"date":"2026-07-13","cases":95,"type":"imported"},{"date":"2026-07-14","cases":84,"type":"local"},{"date":"2026-07-15","cases":88,"type":"local"},{"date":"2026-07-16","cases":86,"type":"local"},{"date":"2026-07-17","cases":80,"type":"local"},{"date":"2026-07-18","cases":71,"type":"local"},{"date":"2026-07-19","cases":66,"type":"local"},{"date":"2026-07-20","cases":64,"type":"local"},{"date":"2026-07-21","cases":63,"type":"imported"},{"date":"2026-07-22","cases":56,"type":"local"},{"date":"2026-07-23","cases":53,"type":"local"},{"date":"2026-07-24","cases":53,"type":"local"},{"date":"2026-07-25","cases":41,"type":"local"},{"date":"2026-07-26","cases":44,"type":"imported"},{"date":"2026-07-27","cases":43,"type":"local"},{"date":"2026-07-28","cases":37,"type":"local"},{"date":"2026-07-29","cases":30,"type":"local"},{"date":"2026-07-30","cases":32,"type":"local"},{"date":"2026-07-31","cases":25,"type":"local"},{"date":"2026-08-01","cases":23,"type":"local"},{"date":"2026-08-02","cases":20,"type":"imported"},{"date":"2026-08-03","cases":21,"type":"imported"},{"date":"2026-08-04","cases":15,"type":"local"},{"date":"2026-08-05","cases":17,"type":"local"},{"date":"2026-08-06","cases":14,"type":"local"},{"date":"2026-08-07","cases":13,"type":"local"},{"date":"2026-08-08","cases":12,"type":"local"},{"date":"2026-08-09","cases":16,"type":"local"},{"date":"2026-08-10","cases":11,"type":"local"},{"date":"2026-08-11","cases":10,"type":"local"},{"date":"2026-08-12","cases":6,"type":"local"},{"date":"2026-08-13","cases":6,"type":"local"},{"date":"2026-08-14","cases":10,"type":"local"},{"date":"2026-08-15","cases":4,"type":"local"},{"date":"2026-08-16","cases":5,"type":"local"},{"date":"2026-08-17","cases":5,"type":"local"},{"date":"2026-08-18","cases":7,"type":"local"},{"date":"2026-08-19","cases":6,"type":"local"},{"date":"2026-08-20","cases":8,"type":"imported"},{"date":"2026-08-21","cases":9,"type":"local"},{"date":"2026-08-22","cases":2,"type":"imported"},{"date":"2026-08-23","cases":6,"type":"imported"}],"population":1000000}\r
\r
  function aggregateData(data, aggType) {\r
    if (aggType === 'daily') return data\r
    \r
    // Weekly aggregation\r
    const grouped = d3.groups(data, d => {\r
      const d3Date = d3.timeParse('%Y-%m-%d')(d.date)\r
      return d3.timeFormat('%Y-W%U')(d3Date)\r
    })\r
    \r
    return grouped.map(([week, cases]) => ({\r
      date: week,\r
      cases: d3.sum(cases, d => d.cases),\r
      type: cases.some(c => c.type === 'imported') ? 'mixed' : cases[0].type\r
    }))\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const processedData = aggregateData(data.cases, aggregation)\r
    \r
    const n = processedData.length\r
    const x = d3.scaleLinear().domain([0, n - 1]).range([0, IW])\r
    const maxCases = d3.max(processedData, d => d.cases)\r
    const y = d3.scaleLinear().domain([0, maxCases * 1.15]).range([IH, 0]).nice()\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Area under curve\r
    const area = d3.area()\r
      .x((d, i) => x(i))\r
      .y0(IH)\r
      .y1(d => y(d.cases))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(processedData)\r
      .attr('d', area)\r
      .attr('fill', colors[0])\r
      .attr('opacity', 0.2)\r
\r
    // Line\r
    const line = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => y(d.cases))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(processedData)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    // Bars (stacked by type)\r
    const stackedData = processedData.map(d => ({\r
      ...d,\r
      local: d.type === 'local' ? d.cases : (d.type === 'mixed' ? d.cases * 0.8 : 0),\r
      imported: d.type === 'imported' ? d.cases : (d.type === 'mixed' ? d.cases * 0.2 : 0)\r
    }))\r
\r
    const localArea = d3.area()\r
      .x((d, i) => x(i))\r
      .y0(IH)\r
      .y1(d => y(d.local))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const importedArea = d3.area()\r
      .x((d, i) => x(i))\r
      .y0(d => y(d.local))\r
      .y1(d => y(d.local + d.imported))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(stackedData)\r
      .attr('d', localArea)\r
      .attr('fill', colors[1])\r
      .attr('opacity', 0.6)\r
\r
    g.append('path')\r
      .datum(stackedData)\r
      .attr('d', importedArea)\r
      .attr('fill', colors[2])\r
      .attr('opacity', 0.6)\r
\r
    // Moving average (7-day)\r
    const windowSize = 7\r
    const maData = processedData.map((d, i) => {\r
      const start = Math.max(0, i - windowSize + 1)\r
      const window = processedData.slice(start, i + 1)\r
      return {\r
        ...d,\r
        ma: d3.mean(window, w => w.cases)\r
      }\r
    })\r
\r
    const maLine = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => y(d.ma))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(maData)\r
      .attr('d', maLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[3])\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '6,4')\r
\r
    // Peak annotation\r
    const peak = processedData.reduce((max, d) => d.cases > max.cases ? d : max, processedData[0])\r
    const peakIdx = processedData.indexOf(peak)\r
    \r
    g.append('circle')\r
      .attr('cx', x(peakIdx))\r
      .attr('cy', y(peak.cases))\r
      .attr('r', 6)\r
      .attr('fill', colors[2])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
\r
    g.append('text')\r
      .attr('x', x(peakIdx))\r
      .attr('y', y(peak.cases) - 15)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '11px')\r
      .attr('fill', colors[2])\r
      .attr('font-weight', 600)\r
      .text(\`Peak: \${peak.cases} cases\`)\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickFormat((_, i) => {\r
        const d = processedData[i]\r
        if (!d) return ''\r
        return d.date.length > 7 ? d.date.slice(5) : d.date\r
      }).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', colors[1]).attr('opacity', 0.6)\r
    lg.append('text').attr('x', 16).attr('y', 10).attr('font-size', '10px').attr('fill', 'var(--text)').text('Local transmission')\r
    lg.append('rect').attr('x', 0).attr('y', 18).attr('width', 12).attr('height', 12).attr('fill', colors[2]).attr('opacity', 0.6)\r
    lg.append('text').attr('x', 16).attr('y', 28).attr('font-size', '10px').attr('fill', 'var(--text)').text('Imported')\r
    lg.append('line').attr('x1', 0).attr('x2', 12).attr('y1', 36).attr('y2', 36).attr('stroke', colors[3]).attr('stroke-width', 2).attr('stroke-dasharray', '4,4')\r
    lg.append('text').attr('x', 16).attr('y', 40).attr('font-size', '10px').attr('fill', 'var(--text)').text('7-day moving avg')\r
\r
    // Stats\r
    const totalCases = d3.sum(data.cases, d => d.cases)\r
    const maxDaily = d3.max(processedData, d => d.cases)\r
    const peakDay = processedData[peakIdx]?.date || 'N/A'\r
    \r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', 30)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Total: \${d3.sum(data.cases, d => d.cases).toLocaleString()} | Peak: \${peak.cases} (\${peakDay})\`)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(\`Epidemic Curve (\${aggregation === 'daily' ? 'Daily' : 'Weekly'})\`)\r
\r
    // Aggregation toggle hint\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 45)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('Use options.aggregation: "daily" | "weekly"')\r
\r
  }, [customData, aggregation])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};