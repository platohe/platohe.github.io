var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'time-series-brush',\r
  title: 'Time Series Brush',\r
  desc: 'Time Series Brush — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TimeSeriesBrush',\r
  complexity: 'beginner',\r
  interactivity: ["brush"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","time-series-brush"],\r
}\r
\r
export default function TimeSeriesBrush({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Time series with brush data\r
    const DEFAULT_DATA = [{"date":"2025-01-01","value":56.011},{"date":"2025-01-02","value":58.456},{"date":"2025-01-03","value":66.313},{"date":"2025-01-04","value":67.99},{"date":"2025-01-05","value":66.095},{"date":"2025-01-06","value":72.095},{"date":"2025-01-07","value":71.373},{"date":"2025-01-08","value":75.956},{"date":"2025-01-09","value":78.646},{"date":"2025-01-10","value":74.2},{"date":"2025-01-11","value":70.685},{"date":"2025-01-12","value":74.991},{"date":"2025-01-13","value":70.967},{"date":"2025-01-14","value":63.38},{"date":"2025-01-15","value":58.672},{"date":"2025-01-16","value":57.83},{"date":"2025-01-17","value":55.699},{"date":"2025-01-18","value":50.995},{"date":"2025-01-19","value":41.188},{"date":"2025-01-20","value":42.471},{"date":"2025-01-21","value":43.237},{"date":"2025-01-22","value":33.081},{"date":"2025-01-23","value":36.891},{"date":"2025-01-24","value":30.442},{"date":"2025-01-25","value":32.746},{"date":"2025-01-26","value":31.439},{"date":"2025-01-27","value":34.188},{"date":"2025-01-28","value":42.38},{"date":"2025-01-29","value":42.678},{"date":"2025-01-30","value":40.979},{"date":"2025-01-31","value":46.142},{"date":"2025-02-01","value":56.765},{"date":"2025-02-02","value":57.208},{"date":"2025-02-03","value":64.321},{"date":"2025-02-04","value":63.077},{"date":"2025-02-05","value":67.639},{"date":"2025-02-06","value":66.248},{"date":"2025-02-07","value":68.488},{"date":"2025-02-08","value":74.924},{"date":"2025-02-09","value":75.938},{"date":"2025-02-10","value":72.239},{"date":"2025-02-11","value":75.272},{"date":"2025-02-12","value":69.187},{"date":"2025-02-13","value":67.724},{"date":"2025-02-14","value":69.085},{"date":"2025-02-15","value":66.829},{"date":"2025-02-16","value":59.538},{"date":"2025-02-17","value":52.537},{"date":"2025-02-18","value":49.356},{"date":"2025-02-19","value":45.6}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData.map((d, i) => {\r
          if (!d || typeof d !== 'object') return null\r
          // Unparseable dates fall back to a synthetic daily sequence from a fixed epoch —\r
          // never day-of-month arithmetic, which yields Invalid Dates past the 31st.\r
          const dateVal = d.date instanceof Date ? d.date : new Date(d.date)\r
          return {\r
            date: !isNaN(dateVal.getTime()) ? dateVal : new Date(Date.UTC(2025, 0, 1) + i * 86400000),\r
            value: d.value != null ? Number(d.value) : 0,\r
          }\r
        }).filter(d => d && isFinite(d.value) && !isNaN(d.date.getTime()))\r
      : DEFAULT_DATA\r
\r
    if (!data.length) return\r
\r
    const margin = { top: 30, right: 30, bottom: 80, left: 50 }\r
    const mainHeight = 150\r
    const brushHeight = 50\r
    const width = 380 - margin.left - margin.right\r
    const height = mainHeight + brushHeight\r
\r
    const x = d3.scaleTime()\r
      .domain(d3.extent(data, d => d.date))\r
      .range([0, width])\r
\r
    const yMax = d3.max(data, d => d.value)\r
    const y = d3.scaleLinear()\r
      .domain([0, yMax != null ? yMax : 1])\r
      .range([mainHeight, 0])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Main chart area\r
    const mainChart = g.append('g')\r
\r
    const line = d3.line()\r
      .x(d => x(d.date))\r
      .y(d => y(d.value))\r
      .curve(d3.curveMonotoneX)\r
      .defined(d => !isNaN(d.date.getTime()) && isFinite(y(d.value)))\r
\r
    mainChart.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
\r
    // Brush chart area\r
    const brushChart = g.append('g')\r
      .attr('transform', \`translate(0,\${mainHeight + 20})\`)\r
\r
    const brushYMax = d3.max(data, d => d.value)\r
    const brushY = d3.scaleLinear()\r
      .domain([0, brushYMax != null ? brushYMax : 1])\r
      .range([brushHeight, 0])\r
\r
    const brushLine = d3.line()\r
      .x(d => x(d.date))\r
      .y(d => brushY(d.value))\r
      .curve(d3.curveMonotoneX)\r
      .defined(d => !isNaN(d.date.getTime()) && isFinite(brushY(d.value)))\r
\r
    brushChart.append('path')\r
      .datum(data)\r
      .attr('d', brushLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#f59e0b')\r
      .attr('stroke-width', 1)\r
\r
    // Brush\r
    const brush = d3.brushX()\r
      .extent([[0, 0], [width, brushHeight]])\r
      .on('end', (event) => {\r
        if (!event.selection) return\r
        const [x0, x1] = event.selection.map(x.invert)\r
        const filteredData = data.filter(d => d.date >= x0 && d.date <= x1)\r
        \r
        // Update main chart\r
        mainChart.select('path')\r
          .datum(filteredData)\r
          .attr('d', line)\r
      })\r
\r
    brushChart.append('g')\r
      .attr('class', 'brush')\r
      .call(brush)\r
\r
    // X axis for main chart\r
    mainChart.append('g')\r
      .attr('transform', \`translate(0,\${mainHeight})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis for main chart\r
    mainChart.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Time Series with Brush')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};