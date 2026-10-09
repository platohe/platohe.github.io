var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'focus-context',\r
  title: 'Focus Context',\r
  desc: 'Focus Context — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FocusContext',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","focus-context"],\r
}\r
\r
export default function FocusContext({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"2025-01-01","value":60},{"date":"2025-01-02","value":78},{"date":"2025-01-03","value":59},{"date":"2025-01-04","value":48},{"date":"2025-01-05","value":68},{"date":"2025-01-06","value":71},{"date":"2025-01-07","value":48},{"date":"2025-01-08","value":51},{"date":"2025-01-09","value":76},{"date":"2025-01-10","value":73},{"date":"2025-01-11","value":57},{"date":"2025-01-12","value":71},{"date":"2025-01-13","value":88},{"date":"2025-01-14","value":68},{"date":"2025-01-15","value":50},{"date":"2025-01-16","value":62},{"date":"2025-01-17","value":61},{"date":"2025-01-18","value":30},{"date":"2025-01-19","value":21},{"date":"2025-01-20","value":39},{"date":"2025-01-21","value":34},{"date":"2025-01-22","value":14},{"date":"2025-01-23","value":27},{"date":"2025-01-24","value":50},{"date":"2025-01-25","value":39},{"date":"2025-01-26","value":26},{"date":"2025-01-27","value":45},{"date":"2025-01-28","value":55},{"date":"2025-01-29","value":32},{"date":"2025-01-30","value":25},{"date":"2025-01-31","value":47},{"date":"2025-02-01","value":48},{"date":"2025-02-02","value":30},{"date":"2025-02-03","value":43},{"date":"2025-02-04","value":71},{"date":"2025-02-05","value":68},{"date":"2025-02-06","value":58},{"date":"2025-02-07","value":78},{"date":"2025-02-08","value":94},{"date":"2025-02-09","value":73},{"date":"2025-02-10","value":60},{"date":"2025-02-11","value":76},{"date":"2025-02-12","value":73},{"date":"2025-02-13","value":45},{"date":"2025-02-14","value":43},{"date":"2025-02-15","value":63},{"date":"2025-02-16","value":54},{"date":"2025-02-17","value":35},{"date":"2025-02-18","value":50},{"date":"2025-02-19","value":66},{"date":"2025-02-20","value":46},{"date":"2025-02-21","value":31},{"date":"2025-02-22","value":46},{"date":"2025-02-23","value":46},{"date":"2025-02-24","value":18},{"date":"2025-02-25","value":13},{"date":"2025-02-26","value":33},{"date":"2025-02-27","value":29},{"date":"2025-02-28","value":12},{"date":"2025-02-29","value":29}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const rawData = (Array.isArray(customData) && customData.length > 0)\r
      ? customData.map((d, i) => {\r
          if (!d || typeof d !== 'object') return null\r
          // Unparseable dates fall back to a synthetic daily sequence from a fixed epoch —\r
          // never day-of-month arithmetic, which yields Invalid Dates past the 31st.\r
          const dateVal = d.date instanceof Date ? d.date : new Date(d.date)\r
          return {\r
            date: !isNaN(dateVal.getTime()) ? dateVal : new Date(Date.UTC(2025, 0, 1) + i * 86400000),\r
            value: d.value != null ? Number(d.value) : 20,\r
          }\r
        }).filter(d => d && isFinite(d.value) && !isNaN(d.date.getTime()))\r
      : DEFAULT_DATA\r
\r
    if (!rawData.length) return\r
\r
    const width = W\r
    const height = H\r
\r
    const marginFocus = { top: 25, right: 20, bottom: 95, left: 35 }\r
    const marginContext = { top: 235, right: 20, bottom: 25, left: 35 }\r
\r
    const focusW = width - marginFocus.left - marginFocus.right\r
    const focusH = height - marginFocus.top - marginFocus.bottom\r
    const contextH = height - marginContext.top - marginContext.bottom\r
\r
    // Clip path for focus area\r
    svg.append('defs').append('clipPath')\r
      .attr('id', 'focus-clip')\r
      .append('rect')\r
      .attr('width', focusW)\r
      .attr('height', focusH)\r
\r
    const xFocus = d3.scaleTime()\r
      .domain(d3.extent(rawData, d => d.date))\r
      .range([0, focusW])\r
\r
    const xContext = d3.scaleTime()\r
      .domain(xFocus.domain())\r
      .range([0, focusW])\r
\r
    const yFocus = d3.scaleLinear()\r
      .domain([0, (d3.max(rawData, d => d.value) || 100) * 1.1])\r
      .range([focusH, 0])\r
\r
    const yContext = d3.scaleLinear()\r
      .domain(yFocus.domain())\r
      .range([contextH, 0])\r
\r
    // Focus area generator\r
    const areaFocus = d3.area()\r
      .curve(d3.curveMonotoneX)\r
      .x(d => xFocus(d.date))\r
      .y0(focusH)\r
      .y1(d => yFocus(d.value))\r
      .defined(d => !isNaN(d.date.getTime()) && isFinite(yFocus(d.value)))\r
\r
    const lineFocus = d3.line()\r
      .curve(d3.curveMonotoneX)\r
      .x(d => xFocus(d.date))\r
      .y(d => yFocus(d.value))\r
      .defined(d => !isNaN(d.date.getTime()) && isFinite(yFocus(d.value)))\r
\r
    // Context area generator\r
    const areaContext = d3.area()\r
      .curve(d3.curveMonotoneX)\r
      .x(d => xContext(d.date))\r
      .y0(contextH)\r
      .y1(d => yContext(d.value))\r
      .defined(d => !isNaN(d.date.getTime()) && isFinite(yContext(d.value)))\r
\r
    // Create Focus Group\r
    const focus = svg.append('g')\r
      .attr('transform', \`translate(\${marginFocus.left},\${marginFocus.top})\`)\r
\r
    const focusAxisX = focus.append('g')\r
      .attr('transform', \`translate(0,\${focusH})\`)\r
      .call(d3.axisBottom(xFocus).ticks(5).tickSize(-focusH).tickPadding(6))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    focus.append('g')\r
      .call(d3.axisLeft(yFocus).ticks(4).tickSize(-focusW).tickPadding(6))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    const focusContent = focus.append('g')\r
      .attr('clip-path', 'url(#focus-clip)')\r
\r
    const focusAreaPath = focusContent.append('path')\r
      .datum(rawData)\r
      .attr('fill', 'rgba(99, 102, 241, 0.18)')\r
      .attr('d', areaFocus)\r
\r
    const focusLinePath = focusContent.append('path')\r
      .datum(rawData)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
      .attr('d', lineFocus)\r
\r
    // Create Context Group\r
    const context = svg.append('g')\r
      .attr('transform', \`translate(\${marginContext.left},\${marginContext.top})\`)\r
\r
    context.append('path')\r
      .datum(rawData)\r
      .attr('fill', 'rgba(148, 163, 184, 0.25)')\r
      .attr('stroke', '#94a3b8')\r
      .attr('stroke-width', 1)\r
      .attr('d', areaContext)\r
\r
    context.append('g')\r
      .attr('transform', \`translate(0,\${contextH})\`)\r
      .call(d3.axisBottom(xContext).ticks(5).tickPadding(4))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px'))\r
\r
    // Brush\r
    const brush = d3.brushX()\r
      .extent([[0, 0], [focusW, contextH]])\r
      .on('brush end', (event) => {\r
        if (!event.selection) {\r
          xFocus.domain(xContext.domain())\r
        } else {\r
          const [x0, x1] = event.selection.map(xContext.invert)\r
          xFocus.domain([x0, x1])\r
        }\r
        focusAreaPath.attr('d', areaFocus)\r
        focusLinePath.attr('d', lineFocus)\r
        focusAxisX.call(d3.axisBottom(xFocus).ticks(5).tickSize(-focusH).tickPadding(6))\r
          .call(g => g.select('.domain').remove())\r
          .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
          .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
      })\r
\r
    const brushG = context.append('g')\r
      .attr('class', 'brush')\r
      .call(brush)\r
\r
    // Initial brush selection (middle third)\r
    const initialSelection = [focusW * 0.25, focusW * 0.75]\r
    brushG.call(brush.move, initialSelection)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 15)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Focus + Context (Dual Brush & Zoom)')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 15)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Drag & Resize Bottom Timeline')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};