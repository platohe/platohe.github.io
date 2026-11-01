var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
export const meta = {\r
  id: 'van-der-pol-oscillator',\r
  title: 'Van Der Pol Oscillator',\r
  desc: 'Van Der Pol Oscillator — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VanDerPolOscillator',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","van-der-pol-oscillator"],\r
}\r
\r
export default function VanDerPolOscillator({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    mu: 1.5,\r
    dt: 0.01,\r
    steps: 5000,\r
    x0: 2.0,\r
    y0: 0.0,\r
    showPhaseSpace: true,\r
    showTimeSeries: true,\r
    transientSteps: 500\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && typeof customData === 'object') ? { ...DEFAULT_DATA, ...customData } : DEFAULT_DATA\r
    const { mu, dt, steps, x0, y0, showPhaseSpace, showTimeSeries, transientSteps } = input\r
\r
    // Van der Pol oscillator: x'' - mu(1-x^2)x' + x = 0\r
    // Convert to system: dx/dt = y, dy/dt = mu(1-x^2)y - x\r
    const trajectory = []\r
    let x = x0\r
    let y = y0\r
\r
    for (let i = 0; i < steps; i++) {\r
      // RK4 integration\r
      const dx1 = y\r
      const dy1 = mu * (1 - x * x) * y - x\r
\r
      const x2 = x + 0.5 * dt * dx1\r
      const y2 = y + 0.5 * dt * dy1\r
      const dx2 = y2\r
      const dy2 = mu * (1 - x2 * x2) * y2 - x2\r
\r
      const x3 = x + 0.5 * dt * dx2\r
      const y3 = y + 0.5 * dt * dy2\r
      const dx3 = y3\r
      const dy3 = mu * (1 - x3 * x3) * y3 - x3\r
\r
      const x4 = x + dt * dx3\r
      const y4 = y + dt * dy3\r
      const dx4 = y4\r
      const dy4 = mu * (1 - x4 * x4) * y4 - x4\r
\r
      x += dt / 6 * (dx1 + 2 * dx2 + 2 * dx3 + dx4)\r
      y += dt / 6 * (dy1 + 2 * dy2 + 2 * dy3 + dy4)\r
\r
      if (i >= transientSteps) {\r
        trajectory.push({ x, y, t: (i - transientSteps) * dt })\r
      }\r
    }\r
\r
    // Scales\r
    const allX = trajectory.map(p => p.x)\r
    const allY = trajectory.map(p => p.y)\r
    const tMax = trajectory[trajectory.length - 1].t\r
\r
    const xScale = d3.scaleLinear()\r
      .domain([d3.min(allX) - 0.5, d3.max(allX) + 0.5])\r
      .range(showPhaseSpace ? [M.left, M.left + IW / 2 - 10] : [M.left, M.left + IW])\r
\r
    const yScale = d3.scaleLinear()\r
      .domain([d3.min(allY) - 0.5, d3.max(allY) + 0.5])\r
      .range([M.top + IH, M.top])\r
\r
    const tScale = d3.scaleLinear()\r
      .domain([0, tMax])\r
      .range(showTimeSeries ? [M.left + IW / 2 + 10, M.left + IW] : [M.left, M.left + IW])\r
\r
    const g = svg.append('g')\r
\r
    if (showPhaseSpace) {\r
      // Phase space plot\r
      const phaseG = g.append('g')\r
\r
      // Grid\r
      phaseG.append('g')\r
        .attr('transform', \`translate(0,\${M.top + IH})\`)\r
        .call(d3.axisBottom(xScale).ticks(6).tickSize(-IH).tickPadding(8))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
      phaseG.append('g')\r
        .attr('transform', \`translate(\${M.left},0)\`)\r
        .call(d3.axisLeft(yScale).ticks(6).tickSize(-IW / 2 + 10).tickPadding(8))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
      // Axes\r
      phaseG.append('line')\r
        .attr('x1', xScale(0)).attr('x2', xScale(0))\r
        .attr('y1', M.top).attr('y2', M.top + IH)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
      phaseG.append('line')\r
        .attr('x1', M.left).attr('x2', M.left + IW / 2 - 10)\r
        .attr('y1', yScale(0)).attr('y2', yScale(0))\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
      // Nullclines\r
      // dx/dt = 0 => y = 0\r
      // dy/dt = 0 => mu(1-x^2)y - x = 0 => y = x / (mu(1-x^2)) for x != ±1\r
      const nullclineX = d3.range(-2.5, 2.5, 0.05)\r
      const nullclineY = nullclineX.map(xv => {\r
        if (Math.abs(xv) >= 1) return null\r
        return xv / (mu * (1 - xv * xv))\r
      })\r
\r
      const nullclineLine = d3.line()\r
        .defined(d => d.y !== null)\r
        .x(d => xScale(d.x))\r
        .y(d => yScale(d.y))\r
\r
      phaseG.append('path')\r
        .datum(d3.zip(nullclineX, nullclineY).map(([x, y]) => ({ x, y })))\r
        .attr('d', nullclineLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[3])\r
        .attr('stroke-width', 1)\r
        .attr('stroke-dasharray', '4,4')\r
        .attr('opacity', 0.6)\r
\r
      // Trajectory with color gradient\r
      const trajectoryLine = d3.line()\r
        .curve(d3.curveBasis)\r
        .x(d => xScale(d.x))\r
        .y(d => yScale(d.y))\r
\r
      const path = phaseG.append('path')\r
        .datum(trajectory)\r
        .attr('d', trajectoryLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'url(#vdp-gradient)')\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-linecap', 'round')\r
\r
      // Gradient for trajectory\r
      const defs = svg.append('defs')\r
      const grad = defs.append('linearGradient')\r
        .attr('id', 'vdp-gradient')\r
        .attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')\r
      trajectory.forEach((p, i) => {\r
        grad.append('stop')\r
          .attr('offset', \`\${(i / trajectory.length) * 100}%\`)\r
          .attr('stop-color', d3.interpolateViridis(i / trajectory.length))\r
      })\r
\r
      // Start/end markers\r
      phaseG.append('circle')\r
        .attr('cx', xScale(trajectory[0].x))\r
        .attr('cy', yScale(trajectory[0].y))\r
        .attr('r', 5)\r
        .attr('fill', colors[2])\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
      phaseG.append('circle')\r
        .attr('cx', xScale(trajectory[trajectory.length - 1].x))\r
        .attr('cy', yScale(trajectory[trajectory.length - 1].y))\r
        .attr('r', 5)\r
        .attr('fill', colors[3])\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
      // Labels\r
      phaseG.append('text')\r
        .attr('x', M.left + IW / 4)\r
        .attr('y', M.top - 8)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 600)\r
        .text('Phase Space (x vs y)')\r
    }\r
\r
    if (showTimeSeries) {\r
      // Time series plot\r
      const tsG = g.append('g')\r
        .attr('transform', showPhaseSpace ? \`translate(\${IW / 2 + 20}, 0)\` : '')\r
\r
      const tsWidth = showPhaseSpace ? IW / 2 - 20 : IW\r
      const tsHeight = IH / 2 - 10\r
\r
      const tScale = d3.scaleLinear().domain([0, tMax]).range([M.left, M.left + tsWidth])\r
      const xTScale = d3.scaleLinear().domain([0, tMax]).range([M.left, M.left + tsWidth])\r
      const yTScale = d3.scaleLinear()\r
        .domain([d3.min(trajectory, d => d.x) - 0.5, d3.max(trajectory, d => d.x) + 0.5])\r
        .range([M.top + tsHeight, M.top])\r
\r
      const tsG2 = g.append('g')\r
\r
      // Grid\r
      tsG2.append('g')\r
        .attr('transform', \`translate(0,\${M.top + tsHeight})\`)\r
        .call(d3.axisBottom(tScale).ticks(6).tickSize(-tsHeight).tickPadding(8))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
      tsG2.append('g')\r
        .attr('transform', \`translate(\${M.left + (showPhaseSpace ? IW / 2 + 10 : 0)},0)\`)\r
        .call(d3.axisLeft(d3.scaleLinear()\r
          .domain([d3.min(trajectory, d => d.x) - 0.5, d3.max(trajectory, d => d.x) + 0.5])\r
          .range([M.top + tsHeight, M.top]))\r
          .ticks(4).tickSize(-tsWidth).tickPadding(8))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
      // x(t)\r
      const xLine = d3.line()\r
        .curve(d3.curveBasis)\r
        .x(d => M.left + (showPhaseSpace ? IW / 2 + 10 : 0) + tScale(d.t))\r
        .y(d => d3.scaleLinear()\r
          .domain([d3.min(trajectory, d => d.x) - 0.5, d3.max(trajectory, d => d.x) + 0.5])\r
          .range([M.top + tsHeight, M.top])(d.x))\r
\r
      g.append('path')\r
        .datum(trajectory)\r
        .attr('d', xLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-linecap', 'round')\r
\r
      // y(t) - velocity\r
      const yLine = d3.line()\r
        .curve(d3.curveBasis)\r
        .x(d => M.left + (showPhaseSpace ? IW / 2 + 10 : 0) + tScale(d.t))\r
        .y(d => d3.scaleLinear()\r
          .domain([d3.min(trajectory, d => d.y) - 0.5, d3.max(trajectory, d => d.y) + 0.5])\r
          .range([M.top + tsHeight, M.top])(d.y))\r
\r
      g.append('path')\r
        .datum(trajectory)\r
        .attr('d', yLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[1])\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-dasharray', '4,4')\r
\r
      // Legend\r
      const legend = g.append('g')\r
        .attr('transform', \`translate(\${M.left + (showPhaseSpace ? IW / 2 + 20 : 0)}, \${M.top})\`)\r
\r
      legend.append('line')\r
        .attr('x1', 0).attr('x2', 20)\r
        .attr('y1', 6).attr('y2', 6)\r
        .attr('stroke', colors[0]).attr('stroke-width', 2)\r
      legend.append('text')\r
        .attr('x', 25).attr('y', 10)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
        .text('x(t) - position')\r
\r
      legend.append('line')\r
        .attr('x1', 0).attr('x2', 20)\r
        .attr('y1', 22).attr('y2', 22)\r
        .attr('stroke', colors[1]).attr('stroke-width', 2).attr('stroke-dasharray', '4,4')\r
      legend.append('text')\r
        .attr('x', 25).attr('y', 26)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
        .text('y(t) - velocity')\r
\r
      // Labels\r
      g.append('text')\r
        .attr('x', M.left + (showPhaseSpace ? IW / 2 + 10 : 0) + (IW / 2 - 20) / 2)\r
        .attr('y', M.top - 8)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 600)\r
        .text('Time Series')\r
    }\r
\r
    // Parameter display\r
    g.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text(\`μ = \${mu} | dt = \${dt} | steps = \${steps}\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};