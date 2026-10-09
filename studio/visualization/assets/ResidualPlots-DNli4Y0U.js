var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'residual-plots',\r
  title: 'Residual Plots',\r
  desc: 'Residual Plots — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ResidualPlots',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","residual-plots"],\r
}\r
\r
export default function ResidualPlots({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [plotType, setPlotType] = useState(options.plotType || 'fitted') // 'fitted', 'qq', 'scale-location'\r
\r
  const DEFAULT_DATA = {"fitted":[1.2,2.8,3.1,4.5,5.9,7.2,8.1,9.8,11.2,12.5,14.1,15.3,16.8,18.2,19.5],"residuals":[0.3,-0.5,0.2,-0.1,0.4,-0.3,0.1,-0.2,0.5,-0.4,0.2,-0.1,0.3,-0.2,0.1],"leverage":[0.08,0.07,0.06,0.05,0.06,0.07,0.06,0.05,0.07,0.08,0.07,0.06,0.05,0.06,0.07],"standardizedResiduals":[0.4,-0.6,0.3,-0.1,0.5,-0.4,0.1,-0.3,0.6,-0.5,0.3,-0.1,0.4,-0.3,0.1],"sqrtAbsResiduals":[0.55,0.71,0.45,0.32,0.63,0.55,0.32,0.45,0.71,0.63,0.45,0.32,0.55,0.55,0.32]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { fitted, residuals, leverage, standardizedResiduals, sqrtAbsResiduals } = data\r
\r
    if (!fitted || !residuals) {\r
      console.warn('Residual Plots expects { fitted: [], residuals: [] }')\r
      return\r
    }\r
\r
    const n = fitted.length\r
    const maxFitted = d3.max(fitted)\r
    const minFitted = d3.min(fitted)\r
    const maxResid = d3.max(residuals.map(Math.abs))\r
    const maxStdResid = d3.max(standardizedResiduals.map(Math.abs)) || 3\r
    const maxSqrtAbs = d3.max(sqrtAbsResiduals) || 1\r
\r
    // Setup scales based on plot type\r
    let xScale, yScale, xLabel, yLabel, title\r
\r
    if (plotType === 'fitted') {\r
      xScale = d3.scaleLinear().domain([minFitted, maxFitted]).range([0, IW])\r
      yScale = d3.scaleLinear().domain([-maxResid * 1.2, maxResid * 1.2]).range([IH, 0])\r
      xLabel = 'Fitted Values'\r
      yLabel = 'Residuals'\r
      title = 'Residuals vs Fitted'\r
    } else if (plotType === 'qq') {\r
      // Q-Q plot - theoretical vs sample quantiles\r
      const sortedResid = [...residuals].sort((a, b) => a - b)\r
      const theoreticalQuantiles = sortedResid.map((_, i) => {\r
        const p = (i + 0.5) / n\r
        // Approximate normal quantile\r
        return Math.sqrt(2) * erfinv(2 * p - 1)\r
      })\r
      xScale = d3.scaleLinear().domain(d3.extent(theoreticalQuantiles)).range([0, IW])\r
      yScale = d3.scaleLinear().domain(d3.extent(sortedResid)).range([IH, 0])\r
      xLabel = 'Theoretical Quantiles'\r
      yLabel = 'Sample Quantiles'\r
      title = 'Normal Q-Q Plot'\r
    } else if (plotType === 'scale-location') {\r
      xScale = d3.scaleLinear().domain([minFitted, maxFitted]).range([0, IW])\r
      yScale = d3.scaleLinear().domain([0, maxSqrtAbs * 1.2]).range([IH, 0])\r
      xLabel = 'Fitted Values'\r
      yLabel = '√|Standardized Residuals|'\r
      title = 'Scale-Location'\r
    }\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(yScale).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(xScale).ticks(5).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
    // Zero line for residuals\r
    if (plotType === 'fitted') {\r
      g.append('line')\r
        .attr('x1', 0).attr('x2', IW)\r
        .attr('y1', yScale(0)).attr('y2', yScale(0))\r
        .attr('stroke', 'var(--text-secondary)')\r
        .attr('stroke-dasharray', '4,4')\r
        .attr('stroke-width', 1)\r
    }\r
\r
    // Reference line for Q-Q\r
    if (plotType === 'qq') {\r
      const lineData = xScale.domain().map(d => ({ x: d, y: d }))\r
      const refLine = d3.line()\r
        .x(d => xScale(d.x))\r
        .y(d => yScale(d.y))\r
      g.append('path')\r
        .datum(lineData)\r
        .attr('d', refLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--text-secondary)')\r
        .attr('stroke-dasharray', '4,4')\r
        .attr('stroke-width', 1)\r
    }\r
\r
    // LOESS smooth line\r
    const smoothLine = d3.line()\r
      .x(d => xScale(d.x))\r
      .y(d => yScale(d.y))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    // Plot points\r
    let points = []\r
    if (plotType === 'fitted') {\r
      points = fitted.map((f, i) => ({ x: f, y: residuals[i], leverage: leverage[i], stdResid: standardizedResiduals[i] }))\r
    } else if (plotType === 'qq') {\r
      const sortedResid = [...residuals].sort((a, b) => a - b)\r
      const theoreticalQuantiles = sortedResid.map((_, i) => {\r
        const p = (i + 0.5) / n\r
        return Math.sqrt(2) * erfinv(2 * p - 1)\r
      })\r
      points = theoreticalQuantiles.map((x, i) => ({ x, y: sortedResid[i] }))\r
    } else if (plotType === 'scale-location') {\r
      points = fitted.map((f, i) => ({ x: f, y: sqrtAbsResiduals[i], leverage: leverage[i] }))\r
    }\r
\r
    // Highlight high leverage points\r
    g.selectAll('.point')\r
      .data(points)\r
      .enter()\r
      .append('circle')\r
      .attr('class', 'point')\r
      .attr('cx', d => xScale(d.x))\r
      .attr('cy', d => yScale(d.y))\r
      .attr('r', d => d.leverage && d.leverage > 0.1 ? 6 : 4)\r
      .attr('fill', d => d.leverage && d.leverage > 0.1 ? colors[2] : colors[0])\r
      .attr('opacity', 0.7)\r
      .attr('stroke', d => d.leverage && d.leverage > 0.1 ? '#fff' : 'var(--bg)')\r
      .attr('stroke-width', d => d.leverage && d.leverage > 0.1 ? 2 : 1.5)\r
\r
    // Add LOESS smooth (simplified - using polynomial fit)\r
    if (plotType === 'fitted' || plotType === 'scale-location') {\r
      // Simple polynomial regression for trend\r
      const degree = 2\r
      const X = points.map(p => [1, p.x, p.x * p.x])\r
      const Y = points.map(p => p.y)\r
      // Simplified: just draw a smooth curve through points\r
      const smoothPoints = points.slice().sort((a, b) => a.x - b.x)\r
      const loessLine = d3.line()\r
        .x(d => xScale(d.x))\r
        .y(d => yScale(d.y))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(smoothPoints)\r
        .attr('d', loessLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[2])\r
        .attr('stroke-width', 2)\r
        .attr('opacity', 0.8)\r
    }\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(xScale).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(yScale).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 38)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text(xLabel)\r
\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text(yLabel)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(title)\r
\r
    // Plot type selector info\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 55)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('Use options.plotType: "fitted" | "qq" | "scale-location"')\r
\r
  }, [customData, plotType])\r
\r
  // Inverse error function approximation for Q-Q plot\r
  function erfinv(x) {\r
    const a = 0.147\r
    const sign = x >= 0 ? 1 : -1\r
    const xAbs = Math.abs(x)\r
    const ln = Math.log(1 - xAbs * xAbs)\r
    const val = Math.sqrt(Math.sqrt((ln / a) ** 2 - ln / a) - ln / a)\r
    return sign * val\r
  }\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};