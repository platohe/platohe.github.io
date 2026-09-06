var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'propensity-score',\r
  title: 'Propensity Score',\r
  desc: 'Propensity Score — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PropensityScore',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","propensity-score"],\r
}\r
\r
export default function PropensityScore({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"treated":[0.74,0.679,0.841,0.768,0.57,0.711,0.609,0.75,0.846,0.689,0.6,0.853,0.798,0.623,0.579,0.7,0.775,0.744,0.502,0.688,0.835,0.52,0.737,0.513,0.607,0.525,0.574,0.813,0.712,0.511,0.569,0.837,0.695,0.824,0.628,0.68,0.515,0.521,0.723,0.739,0.598,0.758,0.584,0.621,0.795,0.843,0.703,0.582,0.614,0.617,0.53,0.764,0.772,0.777,0.871,0.535,0.877,0.672,0.877,0.555,0.544,0.506,0.644,0.693,0.745,0.86,0.531,0.788,0.874,0.611,0.783,0.572,0.708,0.829,0.548,0.898,0.725,0.866,0.674,0.731,0.635,0.738,0.629,0.792,0.618,0.68,0.837,0.778,0.898,0.856,0.673,0.718,0.618,0.54,0.779,0.625,0.814,0.862,0.537,0.69,0.829,0.552,0.889,0.571,0.784,0.78,0.589,0.665,0.565,0.762,0.634,0.583,0.752,0.855,0.631,0.817,0.657,0.553,0.845,0.648,0.504,0.795,0.754,0.85,0.863,0.584,0.742,0.696,0.574,0.519,0.782,0.783,0.617,0.61,0.635,0.512,0.588,0.897,0.729,0.895,0.566,0.568,0.724,0.617,0.658,0.674,0.667,0.774,0.659,0.634,0.858,0.631,0.698,0.744,0.719,0.736,0.594,0.63,0.62,0.628,0.768,0.588,0.568,0.778,0.626,0.55,0.626,0.517,0.731,0.583,0.693,0.652,0.785,0.865,0.825,0.676,0.562,0.847,0.71,0.836,0.858,0.68,0.559,0.747,0.823,0.583,0.656,0.718,0.894,0.697,0.844,0.837,0.797,0.521,0.528,0.568,0.703,0.771,0.804,0.897],"control":[0.508,0.416,0.518,0.526,0.4,0.276,0.323,0.539,0.44,0.275,0.569,0.413,0.265,0.522,0.176,0.283,0.11,0.143,0.424,0.463,0.578,0.54,0.333,0.454,0.173,0.237,0.17,0.124,0.245,0.32,0.384,0.458,0.497,0.492,0.198,0.433,0.359,0.322,0.335,0.33,0.313,0.266,0.254,0.174,0.352,0.234,0.365,0.374,0.424,0.319,0.167,0.102,0.174,0.572,0.135,0.535,0.315,0.351,0.149,0.511,0.128,0.285,0.215,0.451,0.382,0.147,0.583,0.475,0.431,0.498,0.374,0.502,0.364,0.188,0.139,0.148,0.13,0.231,0.436,0.434,0.381,0.588,0.111,0.298,0.269,0.242,0.517,0.368,0.202,0.572,0.576,0.233,0.359,0.53,0.568,0.442,0.384,0.505,0.256,0.347,0.475,0.375,0.444,0.377,0.373,0.583,0.592,0.483,0.254,0.416,0.434,0.532,0.293,0.539,0.258,0.54,0.307,0.27,0.366,0.518,0.409,0.534,0.446,0.175,0.243,0.581,0.343,0.237,0.415,0.486,0.469,0.457,0.193,0.523,0.551,0.372,0.336,0.136,0.35,0.547,0.438,0.311,0.321,0.408,0.459,0.359,0.122,0.184,0.149,0.161,0.288,0.514,0.519,0.442,0.142,0.116,0.235,0.45,0.235,0.528,0.413,0.554,0.544,0.273,0.15,0.414,0.22,0.34,0.239,0.23,0.46,0.36,0.344,0.396,0.155,0.491,0.445,0.559,0.158,0.129,0.117,0.27,0.22,0.215,0.595,0.391,0.52,0.271,0.425,0.116,0.467,0.499,0.288,0.202,0.493,0.353,0.169,0.141,0.486,0.316]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.treated) ? customData : DEFAULT_DATA\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 0.15]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Kernel density estimation for treated\r
    const treatedDensity = estimateDensity(d.treated, 0, 1, 100)\r
    const treatedLine = d3.line()\r
      .x((v, i) => x(i / 100))\r
      .y(v => y(v))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path').datum(treatedDensity).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', treatedLine).attr('fill', colors[0]).attr('fill-opacity', 0.3).attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
    // Kernel density estimation for control\r
    const controlDensity = estimateDensity(d.control, 0, 1, 100)\r
    const controlLine = d3.line()\r
      .x((v, i) => x(i / 100))\r
      .y(v => y(v))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path').datum(controlDensity).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', controlLine).attr('fill', colors[1]).attr('fill-opacity', 0.3).attr('stroke', colors[1]).attr('stroke-width', 2)\r
\r
    // Overlap region shading\r
    const overlap = treatedDensity.map((v, i) => ({ x: i / 100, y: Math.min(v, controlDensity[i]) }))\r
    const overlapArea = d3.area()\r
      .x(v => x(v.x))\r
      .y0(y(0))\r
      .y1(v => y(v.y))\r
      .curve(d3.curveMonotoneX)\r
    svg.append('path').datum(overlap).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', overlapArea).attr('fill', colors[2]).attr('fill-opacity', 0.2)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8).tickFormat(d => d.toFixed(1)))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Propensity Score')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Density')\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${M.left + IW - 80},\${M.top + 8})\`)\r
    lg.append('rect').attr('width', 14).attr('height', 10).attr('fill', colors[0]).attr('opacity', 0.5).attr('rx', 2)\r
    lg.append('text').attr('x', 18).attr('y', 9).text('Treated').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('rect').attr('x', 0).attr('y', 16).attr('width', 14).attr('height', 10).attr('fill', colors[1]).attr('opacity', 0.5).attr('rx', 2)\r
    lg.append('text').attr('x', 18).attr('y', 25).text('Control').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Propensity Score Distribution')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
\r
// Simple kernel density estimation\r
function estimateDensity(data, min, max, steps) {\r
  const bandwidth = (max - min) / 10\r
  const points = []\r
  for (let i = 0; i <= steps; i++) {\r
    const x = min + (max - min) * i / steps\r
    let density = 0\r
    for (const val of data) {\r
      const u = (x - val) / bandwidth\r
      density += Math.exp(-0.5 * u * u) / Math.sqrt(2 * Math.PI)\r
    }\r
    density /= data.length * bandwidth\r
    points.push(density)\r
  }\r
  return points\r
}\r
`;export{e as default};