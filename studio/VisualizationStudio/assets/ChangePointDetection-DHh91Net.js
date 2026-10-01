var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'change-point-detection',\r
  title: 'Change Point Detection',\r
  desc: 'Change Point Detection — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ChangePointDetection',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","change-point-detection"],\r
}\r
\r
export default function ChangePointDetection({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [method, setMethod] = useState(options.method || 'PELT') // 'PELT', 'CUSUM', 'BOCPD'\r
\r
  const DEFAULT_DATA = {"values":[10.303,9.845,11.057,10.509,9.024,10.08,9.32,10.374,11.096,9.917,9.25,11.146,10.737,9.421,9.092,10.002,10.56,10.332,8.512,9.912,11.012,8.654,10.277,8.595,9.301,23.685,24.057,25.851,25.091,23.581,24.019,26.028,24.963,25.927,24.458,24.85,23.612,23.654,25.17,25.29,24.236,25.437,24.129,24.411,25.716,26.076,25.024,24.113,24.353,24.379,3.724,5.48,5.542,5.579,6.284,3.764,6.331,4.793,6.327,3.912,3.833,3.548,4.581,4.945,5.336,6.199,3.733,5.659,6.305,4.335,5.62,4.039,5.061,5.966,3.862,31.487,30.188,31.248,29.802,30.235,29.511,30.289,29.469,30.688,29.386,29.849,31.029,30.585,31.482,31.171,29.796,30.136,29.388,28.803,30.59,29.44,30.858,31.214,28.781,29.926],"trueChangePoints":[25,50,75]}\r
\r
  // Simple PELT-like algorithm\r
  function detectPELT(data, penalty = 10) {\r
    const n = data.length\r
    const cost = (start, end) => {\r
      const segment = data.slice(start, end)\r
      const mean = d3.mean(segment)\r
      return segment.reduce((sum, v) => sum + (v - mean) ** 2, 0)\r
    }\r
\r
    const dp = new Array(n + 1).fill(Infinity)\r
    const prev = new Array(n + 1).fill(-1)\r
    dp[0] = 0\r
\r
    for (let i = 1; i <= n; i++) {\r
      for (let j = 0; j < i; j++) {\r
        const c = dp[j] + cost(j, i) + penalty\r
        if (c < dp[i]) {\r
          dp[i] = c\r
          prev[i] = j\r
        }\r
      }\r
    }\r
\r
    // Backtrack\r
    const changes = []\r
    let idx = n\r
    while (idx > 0) {\r
      changes.unshift(prev[idx])\r
      idx = prev[idx]\r
    }\r
    return changes.filter(c => c > 0 && c < n)\r
  }\r
\r
  // Simple CUSUM\r
  function detectCUSUM(data, threshold = 5, drift = 0.5) {\r
    const n = data.length\r
    const mean = d3.mean(data)\r
    const changes = []\r
    let cusumPos = 0, cusumNeg = 0\r
\r
    for (let i = 0; i < n; i++) {\r
      cusumPos = Math.max(0, cusumPos + data[i] - mean - drift)\r
      cusumNeg = Math.max(0, cusumNeg - data[i] + mean - drift)\r
\r
      if (cusumPos > threshold || cusumNeg > threshold) {\r
        changes.push(i)\r
        cusumPos = 0\r
        cusumNeg = 0\r
      }\r
    }\r
    return changes\r
  }\r
\r
  // Simple BOCPD (Bayesian Online Change Point Detection) - simplified\r
  function detectBOCPD(data, hazard = 0.1) {\r
    const n = data.length\r
    const runLengths = [1]\r
    const probs = [1]\r
    const changes = []\r
    \r
    // Very simplified BOCPD\r
    let runLength = 0\r
    let mean = data[0]\r
    let var_ = 1\r
    \r
    for (let i = 1; i < n; i++) {\r
      runLength++\r
      const diff = data[i] - mean\r
      const prob = Math.exp(-diff * diff / (2 * var_)) / Math.sqrt(2 * Math.PI * var_)\r
      \r
      if (prob < hazard / runLength) {\r
        changes.push(i)\r
        runLength = 0\r
        mean = data[i]\r
      } else {\r
        mean = (mean * (runLength - 1) + data[i]) / runLength\r
      }\r
    }\r
    return changes\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { values, trueChangePoints } = data\r
\r
    if (!values || values.length === 0) return\r
\r
    let detectedChanges = []\r
    if (method === 'PELT') detectedChanges = detectPELT(values)\r
    else if (method === 'CUSUM') detectedChanges = detectCUSUM(values)\r
    else if (method === 'BOCPD') detectedChanges = detectBOCPD(values)\r
\r
    const n = values.length\r
    const x = d3.scaleLinear().domain([0, n - 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain(d3.extent(values)).range([IH, 0]).nice()\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Time series line\r
    const line = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => y(d))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(values)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 1.5)\r
\r
    // True change points\r
    if (trueChangePoints) {\r
      trueChangePoints.forEach(cp => {\r
        g.append('line')\r
          .attr('x1', x(cp)).attr('x2', x(cp))\r
          .attr('y1', 0).attr('y2', IH)\r
          .attr('stroke', '#22c55e')\r
          .attr('stroke-width', 2)\r
          .attr('stroke-dasharray', '8,4')\r
          .attr('opacity', 0.7)\r
\r
        g.append('text')\r
          .attr('x', x(cp) + 5).attr('y', 20)\r
          .attr('font-size', '10px').attr('fill', '#22c55e').attr('font-weight', 600)\r
          .text('True')\r
      })\r
    }\r
\r
    // Detected change points\r
    detectedChanges.forEach((cp, i) => {\r
      g.append('line')\r
        .attr('x1', x(cp)).attr('x2', x(cp))\r
        .attr('y1', 0).attr('y2', IH)\r
        .attr('stroke', colors[2])\r
        .attr('stroke-width', 2)\r
        .attr('stroke-dasharray', '4,4')\r
\r
      g.append('circle')\r
        .attr('cx', x(cp)).attr('cy', y(values[cp]))\r
        .attr('r', 6)\r
        .attr('fill', colors[2])\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
\r
      g.append('text')\r
        .attr('x', x(cp) + 5).attr('y', 40 + i * 15)\r
        .attr('font-size', '10px').attr('fill', colors[2]).attr('font-weight', 600)\r
        .text(\`Detected: \${cp}\`)\r
    })\r
\r
    // Segment means\r
    const segments = [0, ...detectedChanges, n]\r
    for (let i = 0; i < segments.length - 1; i++) {\r
      const start = segments[i]\r
      const end = segments[i + 1]\r
      const segment = values.slice(start, end)\r
      const mean = d3.mean(segment)\r
\r
      g.append('line')\r
        .attr('x1', x(start)).attr('x2', x(end - 1))\r
        .attr('y1', y(mean)).attr('y2', y(mean))\r
        .attr('stroke', colors[2])\r
        .attr('stroke-width', 3)\r
        .attr('opacity', 0.5)\r
    }\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 0).attr('y2', 0).attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
    lg.append('text').attr('x', 25).attr('y', 4).attr('font-size', '10px').attr('fill', 'var(--text)').text('Time Series')\r
    if (trueChangePoints) {\r
      lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 20).attr('y2', 20).attr('stroke', '#22c55e').attr('stroke-width', 2).attr('stroke-dasharray', '8,4')\r
      lg.append('text').attr('x', 25).attr('y', 24).attr('font-size', '10px').attr('fill', '#22c55e').text('True Change Points')\r
    }\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 40).attr('y2', 40).attr('stroke', colors[2]).attr('stroke-width', 2).attr('stroke-dasharray', '4,4')\r
    lg.append('text').attr('x', 25).attr('y', 44).attr('font-size', '10px').attr('fill', colors[2]).text(\`Detected (\${method})\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 60).attr('y2', 60).attr('stroke', colors[2]).attr('stroke-width', 3).attr('opacity', 0.5)\r
    lg.append('text').attr('x', 25).attr('y', 64).attr('font-size', '10px').attr('fill', colors[2]).text('Segment Means')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(\`Change Point Detection (\${method})\`)\r
\r
  }, [customData, method])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};