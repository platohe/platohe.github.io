var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'heatmap-matrix',\r
  title: 'Heatmap Matrix',\r
  desc: 'Heatmap Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","heatmap-matrix"],\r
}\r
\r
export default function HeatmapMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Heatmap matrix data\r
    const rows = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r
    const cols = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']\r
    \r
    const DEFAULT_DATA = [{"row":"Mon","col":"9am","value":60},{"row":"Mon","col":"10am","value":44},{"row":"Mon","col":"11am","value":85},{"row":"Mon","col":"12pm","value":66},{"row":"Mon","col":"1pm","value":17},{"row":"Mon","col":"2pm","value":52},{"row":"Mon","col":"3pm","value":27},{"row":"Mon","col":"4pm","value":62},{"row":"Mon","col":"5pm","value":86},{"row":"Tue","col":"9am","value":47},{"row":"Tue","col":"10am","value":24},{"row":"Tue","col":"11am","value":88},{"row":"Tue","col":"12pm","value":74},{"row":"Tue","col":"1pm","value":30},{"row":"Tue","col":"2pm","value":19},{"row":"Tue","col":"3pm","value":50},{"row":"Tue","col":"4pm","value":68},{"row":"Tue","col":"5pm","value":61},{"row":"Wed","col":"9am","value":0},{"row":"Wed","col":"10am","value":47},{"row":"Wed","col":"11am","value":83},{"row":"Wed","col":"12pm","value":5},{"row":"Wed","col":"1pm","value":59},{"row":"Wed","col":"2pm","value":3},{"row":"Wed","col":"3pm","value":26},{"row":"Wed","col":"4pm","value":6},{"row":"Wed","col":"5pm","value":18},{"row":"Thu","col":"9am","value":78},{"row":"Thu","col":"10am","value":53},{"row":"Thu","col":"11am","value":2},{"row":"Thu","col":"12pm","value":17},{"row":"Thu","col":"1pm","value":84},{"row":"Thu","col":"2pm","value":48},{"row":"Thu","col":"3pm","value":80},{"row":"Thu","col":"4pm","value":31},{"row":"Thu","col":"5pm","value":44},{"row":"Fri","col":"9am","value":3},{"row":"Fri","col":"10am","value":5},{"row":"Fri","col":"11am","value":55},{"row":"Fri","col":"12pm","value":59},{"row":"Fri","col":"1pm","value":24},{"row":"Fri","col":"2pm","value":64},{"row":"Fri","col":"3pm","value":20},{"row":"Fri","col":"4pm","value":30},{"row":"Fri","col":"5pm","value":73},{"row":"Sat","col":"9am","value":85},{"row":"Sat","col":"10am","value":50},{"row":"Sat","col":"11am","value":20},{"row":"Sat","col":"12pm","value":28},{"row":"Sat","col":"1pm","value":29},{"row":"Sat","col":"2pm","value":7},{"row":"Sat","col":"3pm","value":65},{"row":"Sat","col":"4pm","value":68},{"row":"Sat","col":"5pm","value":69},{"row":"Sun","col":"9am","value":92},{"row":"Sun","col":"10am","value":8},{"row":"Sun","col":"11am","value":94},{"row":"Sun","col":"12pm","value":43},{"row":"Sun","col":"1pm","value":94},{"row":"Sun","col":"2pm","value":13},{"row":"Sun","col":"3pm","value":11},{"row":"Sun","col":"4pm","value":1},{"row":"Sun","col":"5pm","value":36}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 40, right: 20, bottom: 40, left: 60 }\r
    const cellSize = 35\r
    const width = cols.length * cellSize\r
    const height = rows.length * cellSize\r
\r
    const x = d3.scaleBand()\r
      .domain(cols)\r
      .range([0, width])\r
\r
    const y = d3.scaleBand()\r
      .domain(rows)\r
      .range([0, height])\r
\r
    const color = d3.scaleSequential(d3.interpolateYlOrRd)\r
      .domain([0, 100])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Color scale legend\r
    const legendWidth = 80\r
    const legendHeight = 8\r
    const grad = svg.append('defs')\r
      .append('linearGradient')\r
      .attr('id', 'heatmapGrad')\r
      .attr('x1', '0%')\r
      .attr('x2', '100%')\r
      .attr('y1', '0%')\r
      .attr('y2', '0%')\r
\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', color(0))\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', color(100))\r
\r
    svg.append('rect')\r
      .attr('x', margin.left)\r
      .attr('y', 15)\r
      .attr('width', legendWidth)\r
      .attr('height', legendHeight)\r
      .attr('fill', 'url(#heatmapGrad)')\r
      .attr('rx', 4)\r
\r
    svg.append('text')\r
      .attr('x', margin.left)\r
      .attr('y', 10)\r
      .attr('text-anchor', 'start')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '9px')\r
      .text('0')\r
\r
    svg.append('text')\r
      .attr('x', margin.left + legendWidth)\r
      .attr('y', 10)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '9px')\r
      .text('100')\r
\r
    // Heatmap cells\r
    g.selectAll('rect')\r
      .data(data)\r
      .join('rect')\r
      .attr('x', d => x(d.col))\r
      .attr('y', d => y(d.row))\r
      .attr('width', x.bandwidth())\r
      .attr('height', y.bandwidth())\r
      .attr('fill', d => color(d.value))\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function(event, d) {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('stroke-width', 3)\r
          .attr('stroke', '#6366f1')\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('stroke-width', 1)\r
          .attr('stroke', 'var(--bg)')\r
      })\r
\r
    // Value labels for high values\r
    g.selectAll('text')\r
      .data(data.filter(d => d.value > 50))\r
      .join('text')\r
      .attr('x', d => x(d.col) + x.bandwidth() / 2)\r
      .attr('y', d => y(d.row) + y.bandwidth() / 2)\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text(d => d.value)\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Heatmap Matrix')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};