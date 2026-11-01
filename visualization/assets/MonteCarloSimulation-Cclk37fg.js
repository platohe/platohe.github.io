var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'monte-carlo-simulation',\r
  title: 'Monte Carlo Simulation',\r
  desc: 'Monte Carlo Simulation — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'MonteCarloSimulation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","monte-carlo-simulation"],\r
}\r
\r
export default function MonteCarloSimulation({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [running, setRunning] = useState(false)\r
  const [paths, setPaths] = useState([])\r
  const [showPercentiles, setShowPercentiles] = useState(true)\r
\r
  const DEFAULT_DATA = {"initialValue":100000,"expectedReturn":0.08,"volatility":0.15,"timeHorizon":10,"stepsPerYear":12,"nSimulations":200,"riskFreeRate":0.02}\r
\r
  function runSimulation(config) {\r
    const { initialValue, expectedReturn, volatility, timeHorizon, stepsPerYear, nSimulations } = config\r
    const nSteps = timeHorizon * stepsPerYear\r
    const dt = 1 / stepsPerYear\r
    const drift = expectedReturn - 0.5 * volatility * volatility\r
    \r
    const newPaths = []\r
    \r
    for (let sim = 0; sim < nSimulations; sim++) {\r
      const path = [{ step: 0, value: initialValue }]\r
      let value = initialValue\r
      \r
      for (let step = 1; step <= nSteps; step++) {\r
        // Box-Muller transform for normal distribution\r
        const u1 = Math.random()\r
        const u2 = Math.random()\r
        const zNormal = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)\r
        \r
        value = value * Math.exp(drift * dt + volatility * Math.sqrt(dt) * zNormal)\r
        path.push({ step, value })\r
      }\r
      newPaths.push(path)\r
    }\r
    \r
    setPaths(newPaths)\r
  }\r
\r
  useEffect(() => {\r
    const config = customData || DEFAULT_DATA\r
    runSimulation(config)\r
  }, [customData])\r
\r
  useEffect(() => {\r
    if (paths.length === 0) return\r
\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || DEFAULT_DATA\r
    const { initialValue, timeHorizon, stepsPerYear } = config\r
    const nSteps = timeHorizon * stepsPerYear\r
\r
    // Calculate percentiles\r
    const percentiles = [10, 25, 50, 75, 90]\r
    const percentileData = {}\r
    \r
    for (let step = 0; step <= nSteps; step++) {\r
      const valuesAtStep = paths.map(p => p[step].value).sort((a, b) => a - b)\r
      percentiles.forEach(p => {\r
        const idx = Math.floor(p / 100 * (valuesAtStep.length - 1))\r
        if (!percentileData[p]) percentileData[p] = []\r
        percentileData[p].push({ step, value: valuesAtStep[idx] })\r
      })\r
    }\r
\r
    const x = d3.scaleLinear().domain([0, nSteps]).range([0, IW])\r
    const maxVal = d3.max(paths.flatMap(p => p.map(d => d.value)))\r
    const minVal = d3.min(paths.flatMap(p => p.map(d => d.value)))\r
    const y = d3.scaleLinear().domain([minVal * 0.95, maxVal * 1.05]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Percentile bands\r
    if (showPercentiles) {\r
      // 10-90 band\r
      const area1090 = d3.area()\r
        .x(d => x(d.step))\r
        .y0(d => y(percentileData[90].find(p => p.step === d.step)?.value || 0))\r
        .y1(d => y(percentileData[10].find(p => p.step === d.step)?.value || 0))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(percentileData[50])\r
        .attr('d', area1090)\r
        .attr('fill', colors[3])\r
        .attr('opacity', 0.1)\r
\r
      // 25-75 band\r
      const area2575 = d3.area()\r
        .x(d => x(d.step))\r
        .y0(d => y(percentileData[75].find(p => p.step === d.step)?.value || 0))\r
        .y1(d => y(percentileData[25].find(p => p.step === d.step)?.value || 0))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(percentileData[50])\r
        .attr('d', area2575)\r
        .attr('fill', colors[1])\r
        .attr('opacity', 0.2)\r
\r
      // Median line\r
      const medianLine = d3.line()\r
        .x(d => x(d.step))\r
        .y(d => y(d.value))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(percentileData[50])\r
        .attr('d', medianLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', 3)\r
\r
      // Percentile labels\r
      g.append('text')\r
        .attr('x', IW + 10)\r
        .attr('y', y(percentileData[90][percentileData[90].length - 1]?.value || 0) + 4)\r
        .attr('font-size', '9px').attr('fill', 'var(--text-secondary)').text('90th')\r
      g.append('text')\r
        .attr('x', IW + 10)\r
        .attr('y', y(percentileData[75][percentileData[75].length - 1]?.value || 0) + 4)\r
        .attr('font-size', '9px').attr('fill', 'var(--text-secondary)').text('75th')\r
      g.append('text')\r
        .attr('x', IW + 10)\r
        .attr('y', y(percentileData[50][percentileData[50].length - 1]?.value || 0) + 4)\r
        .attr('font-size', '9px').attr('fill', colors[0]).attr('font-weight', 600).text('50th (Median)')\r
      g.append('text')\r
        .attr('x', IW + 10)\r
        .attr('y', y(percentileData[25][percentileData[25].length - 1]?.value || 0) + 4)\r
        .attr('font-size', '9px').attr('fill', 'var(--text-secondary)').text('25th')\r
      g.append('text')\r
        .attr('x', IW + 10)\r
        .attr('y', y(percentileData[10][percentileData[10].length - 1]?.value || 0) + 4)\r
        .attr('font-size', '9px').attr('fill', 'var(--text-secondary)').text('10th')\r
    }\r
\r
    // Individual paths (sample)\r
    const sampleSize = Math.min(50, paths.length)\r
    const sampledPaths = paths.slice(0, sampleSize)\r
\r
    sampledPaths.forEach((path, i) => {\r
      const line = d3.line()\r
        .x(d => x(d.step))\r
        .y(d => y(d.value))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(path)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 1)\r
        .attr('opacity', 0.3)\r
    })\r
\r
    // Initial value line\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', y(config.initialValue)).attr('y2', y(config.initialValue))\r
      .attr('stroke', 'var(--text-secondary)')\r
      .attr('stroke-width', 1)\r
      .attr('stroke-dasharray', '4,4')\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickFormat(d => d / config.stepsPerYear).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => '$' + (d/1000).toFixed(0) + 'k').tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 38)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('Years')\r
\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('Portfolio Value')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Monte Carlo Simulation - Portfolio Paths')\r
\r
    // Stats box\r
    const finalValues = paths.map(p => p[p.length - 1].value)\r
    const meanFinal = d3.mean(finalValues)\r
    const medianFinal = d3.median(finalValues)\r
    const probLoss = finalValues.filter(v => v < config.initialValue).length / finalValues.length * 100\r
    const probDouble = finalValues.filter(v => v > config.initialValue * 2).length / finalValues.length * 100\r
\r
    const stats = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    stats.append('text').attr('x', 0).attr('y', 0).attr('font-size', '10px').attr('fill', 'var(--text)').attr('font-weight', 600).text('Final Value Statistics')\r
    stats.append('text').attr('x', 0).attr('y', 18).attr('font-size', '10px').attr('fill', 'var(--text)').text(\`Mean: $\${meanFinal.toLocaleString(undefined, {maximumFractionDigits: 0})}\`)\r
    stats.append('text').attr('x', 0).attr('y', 34).attr('font-size', '10px').attr('fill', 'var(--text)').text(\`Median: $\${medianFinal.toLocaleString(undefined, {maximumFractionDigits: 0})}\`)\r
    stats.append('text').attr('x', 0).attr('y', 50).attr('font-size', '10px').attr('fill', '#ef4444').text(\`Prob. Loss: \${probLoss.toFixed(1)}%\`)\r
    stats.append('text').attr('x', 0).attr('y', 66).attr('font-size', '10px').attr('fill', '#22c55e').text(\`Prob. 2x: \${probDouble.toFixed(1)}%\`)\r
    stats.append('text').attr('x', 0).attr('y', 82).attr('font-size', '9px').attr('fill', 'var(--text-secondary)').text(\`Simulations: \${paths.length}\`)\r
\r
    // Controls hint\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 55)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('Use options.nSimulations, timeHorizon, expectedReturn, volatility to configure')\r
\r
  }, [paths, customData])\r
\r
  return (\r
    <div>\r
      <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
    </div>\r
  )\r
}`;export{e as default};