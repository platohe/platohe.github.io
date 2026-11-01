var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'degree-distribution',\r
  title: 'Degree Distribution',\r
  desc: 'Degree Distribution — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DegreeDistribution',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","degree-distribution"],\r
}\r
\r
export default function DegreeDistribution({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"edges":[{"source":30,"target":22},{"source":42,"target":33},{"source":8,"target":26},{"source":13,"target":31},{"source":43,"target":23},{"source":12,"target":44},{"source":37,"target":15},{"source":9,"target":25},{"source":34,"target":30},{"source":0,"target":23},{"source":41,"target":2},{"source":29,"target":1},{"source":13,"target":3},{"source":9,"target":39},{"source":26,"target":1},{"source":8,"target":42},{"source":24,"target":40},{"source":15,"target":22},{"source":1,"target":2},{"source":27,"target":29},{"source":12,"target":32},{"source":10,"target":15},{"source":36,"target":42},{"source":25,"target":10},{"source":14,"target":14},{"source":3,"target":32},{"source":34,"target":34},{"source":46,"target":4},{"source":47,"target":21},{"source":47,"target":6},{"source":5,"target":0},{"source":18,"target":24},{"source":30,"target":44},{"source":3,"target":35},{"source":46,"target":13},{"source":35,"target":8},{"source":26,"target":41},{"source":6,"target":49},{"source":28,"target":45},{"source":21,"target":28},{"source":16,"target":29},{"source":16,"target":36},{"source":14,"target":22},{"source":42,"target":34},{"source":49,"target":44},{"source":21,"target":27},{"source":14,"target":5},{"source":34,"target":15},{"source":39,"target":45},{"source":4,"target":23},{"source":41,"target":6},{"source":48,"target":8},{"source":35,"target":34},{"source":11,"target":20},{"source":8,"target":32},{"source":16,"target":10},{"source":31,"target":44},{"source":16,"target":39},{"source":19,"target":6},{"source":43,"target":18},{"source":0,"target":36},{"source":31,"target":43},{"source":45,"target":10},{"source":30,"target":24},{"source":9,"target":2},{"source":35,"target":35},{"source":14,"target":13},{"source":16,"target":1},{"source":11,"target":49},{"source":28,"target":49},{"source":8,"target":8},{"source":28,"target":14},{"source":19,"target":21},{"source":20,"target":34},{"source":19,"target":16},{"source":44,"target":16},{"source":24,"target":30},{"source":27,"target":29},{"source":11,"target":16},{"source":14,"target":16},{"source":33,"target":11},{"source":8,"target":34},{"source":15,"target":6},{"source":15,"target":2},{"source":28,"target":10},{"source":24,"target":18},{"source":35,"target":45},{"source":40,"target":21},{"source":7,"target":43},{"source":26,"target":42},{"source":44,"target":22},{"source":7,"target":30},{"source":40,"target":10},{"source":19,"target":27},{"source":49,"target":24},{"source":42,"target":42},{"source":37,"target":2},{"source":3,"target":8},{"source":25,"target":33},{"source":38,"target":49},{"source":40,"target":31},{"source":41,"target":42},{"source":29,"target":17},{"source":22,"target":43},{"source":34,"target":17},{"source":46,"target":31},{"source":16,"target":42},{"source":7,"target":18},{"source":0,"target":4},{"source":32,"target":36},{"source":47,"target":43},{"source":23,"target":35},{"source":7,"target":13},{"source":6,"target":2},{"source":14,"target":22},{"source":28,"target":35},{"source":39,"target":39},{"source":9,"target":33},{"source":25,"target":22},{"source":23,"target":22},{"source":21,"target":16},{"source":15,"target":7},{"source":25,"target":13},{"source":26,"target":27},{"source":32,"target":21},{"source":6,"target":0},{"source":7,"target":47},{"source":3,"target":43},{"source":21,"target":25},{"source":4,"target":41},{"source":2,"target":18},{"source":11,"target":35},{"source":28,"target":4},{"source":48,"target":37},{"source":33,"target":39},{"source":27,"target":40},{"source":26,"target":8},{"source":3,"target":4},{"source":2,"target":13},{"source":33,"target":33},{"source":28,"target":48},{"source":1,"target":19},{"source":16,"target":14},{"source":41,"target":26},{"source":10,"target":47},{"source":47,"target":13},{"source":25,"target":43},{"source":46,"target":34},{"source":28,"target":40},{"source":15,"target":24},{"source":37,"target":27},{"source":34,"target":27},{"source":27,"target":48},{"source":49,"target":38},{"source":15,"target":31},{"source":33,"target":43},{"source":19,"target":43},{"source":15,"target":43},{"source":20,"target":16},{"source":26,"target":41},{"source":30,"target":43},{"source":34,"target":7},{"source":14,"target":48},{"source":24,"target":13},{"source":31,"target":38},{"source":36,"target":35},{"source":9,"target":42},{"source":45,"target":27},{"source":23,"target":3},{"source":24,"target":44},{"source":33,"target":21},{"source":22,"target":30},{"source":35,"target":25},{"source":2,"target":8},{"source":4,"target":6},{"source":18,"target":41},{"source":41,"target":34},{"source":4,"target":1},{"source":13,"target":35},{"source":13,"target":42},{"source":31,"target":45},{"source":44,"target":17},{"source":4,"target":31},{"source":11,"target":24},{"source":13,"target":13},{"source":36,"target":25},{"source":24,"target":29},{"source":5,"target":39},{"source":34,"target":45},{"source":5,"target":2},{"source":1,"target":17},{"source":12,"target":11},{"source":49,"target":29},{"source":42,"target":17},{"source":32,"target":1},{"source":36,"target":39},{"source":18,"target":10},{"source":39,"target":25},{"source":6,"target":4},{"source":38,"target":21}],"nodes":[{"id":0},{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12},{"id":13},{"id":14},{"id":15},{"id":16},{"id":17},{"id":18},{"id":19},{"id":20},{"id":21},{"id":22},{"id":23},{"id":24},{"id":25},{"id":26},{"id":27},{"id":28},{"id":29},{"id":30},{"id":31},{"id":32},{"id":33},{"id":34},{"id":35},{"id":36},{"id":37},{"id":38},{"id":39},{"id":40},{"id":41},{"id":42},{"id":43},{"id":44},{"id":45},{"id":46},{"id":47},{"id":48},{"id":49}]}\r
\r
  function computeDegreeDistribution(edges, nNodes) {\r
    const degrees = new Array(nNodes).fill(0)\r
    edges.forEach(e => {\r
      degrees[e.source]++\r
      degrees[e.target]++\r
    })\r
    return degrees\r
  }\r
\r
  function powerLawFit(degrees) {\r
    const nonZero = degrees.filter(d => d > 0)\r
    const logDegrees = nonZero.map(d => Math.log(d))\r
    const logFreq = {}\r
    nonZero.forEach(d => { logFreq[d] = (logFreq[d] || 0) + 1 })\r
    const points = Object.entries(logFreq).map(([k, v]) => ({ k: +k, v: Math.log(v) }))\r
    return points\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { edges, nodes } = data\r
    const nNodes = nodes.length\r
\r
    const degrees = computeDegreeDistribution(edges, nNodes)\r
    const maxDegree = d3.max(degrees)\r
    const degreeCounts = {}\r
    degrees.forEach(d => { degreeCounts[d] = (degreeCounts[d] || 0) + 1 })\r
\r
    const dist = Object.entries(degreeCounts).map(([k, v]) => ({ degree: +k, count: v }))\r
    const maxCount = d3.max(dist, d => d.count)\r
\r
    const x = d3.scaleLinear().domain([0, maxDegree]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, maxCount * 1.1]).range([IH, 0])\r
    const yLog = d3.scaleLog().domain([1, maxCount * 1.1]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid (linear)\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Bars\r
    g.selectAll('.bar')\r
      .data(dist)\r
      .enter()\r
      .append('rect')\r
      .attr('class', 'bar')\r
      .attr('x', d => x(d.degree))\r
      .attr('y', d => y(d.count))\r
      .attr('width', Math.max(1, x(1) - x(0) - 2))\r
      .attr('height', d => IH - y(d.count))\r
      .attr('fill', colors[0])\r
      .attr('opacity', 0.7)\r
\r
    // Power law fit line\r
    const fitPoints = powerLawFit(Object.values(degreeCounts).flatMap((count, deg) => \r
      Array(count).fill(deg)\r
    ))\r
    if (fitPoints.length > 2) {\r
      const fitLine = d3.line()\r
        .x(d => x(Math.exp(d.k)))\r
        .y(d => y(Math.exp(d.v)))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(fitPoints)\r
        .attr('d', fitLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[2])\r
        .attr('stroke-width', 2)\r
        .attr('stroke-dasharray', '6,4')\r
        .attr('opacity', 0.8)\r
    }\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Log scale axis (right)\r
    g.append('g')\r
      .attr('transform', \`translate(\${IW},0)\`)\r
      .call(d3.axisRight(yLog).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('text').attr('fill', colors[1]).attr('font-size', '9px'))\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Degree Distribution')\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', colors[0]).attr('opacity', 0.7)\r
    lg.append('text').attr('x', 16).attr('y', 10).attr('font-size', '10px').attr('fill', 'var(--text)').text('Degree Frequency')\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 20).attr('y2', 20).attr('stroke', colors[2]).attr('stroke-width', 2).attr('stroke-dasharray', '6,4')\r
    lg.append('text').attr('x', 16).attr('y', 24).attr('font-size', '10px').attr('fill', colors[2]).text('Power Law Fit (log-log)')\r
\r
    // Stats\r
    const meanDeg = d3.mean(Object.values(degreeCounts).flatMap((count, deg) => \r
      Array(count).fill(deg)\r
    ))\r
    const maxDeg = d3.max(Object.keys(degreeCounts).map(k => +k))\r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', 30)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Mean: \${meanDeg.toFixed(1)} | Max: \${maxDeg} | Nodes: \${nNodes}\`)\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};