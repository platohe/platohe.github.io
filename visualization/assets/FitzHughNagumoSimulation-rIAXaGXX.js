var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
export const meta = {\r
  id: 'fitz-hugh-nagumo-simulation',\r
  title: 'Fitz Hugh Nagumo Simulation',\r
  desc: 'Fitz Hugh Nagumo Simulation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FitzHughNagumoSimulation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","fitz-hugh-nagumo-simulation"],\r
}\r
\r
export default function FitzHughNagumoSimulation({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    a: 0.7,\r
    b: 0.8,\r
    epsilon: 0.08,\r
    I_ext: 0.5,\r
    dt: 0.01,\r
    steps: 5000,\r
    v0: -1.0,\r
    w0: 0.0,\r
    showPhaseSpace: true,\r
    showTimeSeries: true,\r
    transientSteps: 1000\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && typeof customData === 'object') ? { ...DEFAULT_DATA, ...customData } : DEFAULT_DATA\r
    const { a, b, epsilon, I_ext, dt, steps, v0, w0, showPhaseSpace, showTimeSeries, transientSteps } = input\r
\r
    // FitzHugh-Nagumo model:\r
    // dv/dt = v - v³/3 - w + I_ext\r
    // dw/dt = epsilon * (v + a - b*w)\r
\r
    const trajectory = []\r
    let v = v0\r
    let w = w0\r
\r
    for (let i = 0; i < steps; i++) {\r
      // RK4\r
      const dv1 = v - v**3 / 3 - w + I_ext\r
      const dw1 = epsilon * (v + a - b * w)\r
\r
      const v2 = v + 0.5 * dt * dv1\r
      const w2 = w + 0.5 * dt * dw1\r
      const dv2 = v2 - v2**3 / 3 - w2 + I_ext\r
      const dw2 = epsilon * (v2 + a - b * w2)\r
\r
      const v3 = v + 0.5 * dt * dv2\r
      const w3 = w + 0.5 * dt * dw2\r
      const dv3 = v3 - v3**3 / 3 - w3 + I_ext\r
      const dw3 = epsilon * (v3 + a - b * w3)\r
\r
      const v4 = v + dt * dv3\r
      const w4 = w + dt * dw3\r
      const dv4 = v4 - v4**3 / 3 - w4 + I_ext\r
      const dw4 = epsilon * (v4 + a - b * w4)\r
\r
      v += dt / 6 * (dv1 + 2 * dv2 + 2 * dv3 + dv4)\r
      w += dt / 6 * (dw1 + 2 * dw2 + 2 * dw3 + dw4)\r
\r
      if (i >= transientSteps) {\r
        trajectory.push({ v, w, t: (i - transientSteps) * dt })\r
      }\r
    }\r
\r
    // Nullclines\r
    const vNullcline = d3.range(-2.5, 2.5, 0.05).map(vv => ({\r
      v: vv,\r
      w: vv - vv**3 / 3 + I_ext\r
    }))\r
\r
    const wNullcline = d3.range(-2.5, 2.5, 0.05).map(vv => ({\r
      v: vv,\r
      w: (vv + a) / b\r
    }))\r
\r
    // Scales\r
    const allV = trajectory.map(p => p.v)\r
    const allW = trajectory.map(p => p.w)\r
    const tMax = trajectory[trajectory.length - 1]?.t || steps * dt\r
\r
    const vScale = d3.scaleLinear()\r
      .domain([d3.min(allV) - 0.5, d3.max(allV) + 0.5])\r
      .range([M.left, M.left + IW / 2 - 10])\r
\r
    const wScale = d3.scaleLinear()\r
      .domain([d3.min(allW) - 0.5, d3.max(allW) + 0.5])\r
      .range([M.top + IH, M.top])\r
\r
    const tScale = d3.scaleLinear()\r
      .domain([0, tMax])\r
      .range([M.left + IW / 2 + 10, M.left + IW])\r
\r
    const g = svg.append('g')\r
\r
    // Phase space\r
    const phaseG = g.append('g')\r
\r
    phaseG.append('g')\r
      .attr('transform', \`translate(0,\${M.top + IH})\`)\r
      .call(d3.axisBottom(vScale).ticks(6).tickSize(-IH).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    phaseG.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(wScale).ticks(6).tickSize(-IW / 2 + 10).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // v-nullcline (cubic)\r
    const vNullLine = d3.line()\r
      .x(d => d.v)\r
      .y(d => d.w)\r
\r
    phaseG.append('path')\r
      .datum(vNullcline)\r
      .attr('d', vNullLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[3])\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-dasharray', '4,4')\r
      .attr('opacity', 0.7)\r
\r
    // w-nullcline (linear)\r
    const wNullLine = d3.line()\r
      .x(d => d.v)\r
      .y(d => d.w)\r
\r
    phaseG.append('path')\r
      .datum(wNullcline)\r
      .attr('d', wNullLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[4])\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-dasharray', '4,4')\r
      .attr('opacity', 0.7)\r
\r
    // Fixed point\r
    const intersection = vNullcline.find(d => Math.abs(d.w - (d.v + a) / b) < 0.01)\r
    if (intersection) {\r
      phaseG.append('circle')\r
        .attr('cx', vScale(intersection.v))\r
        .attr('cy', wScale(intersection.w))\r
        .attr('r', 6)\r
        .attr('fill', colors[3])\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
    }\r
\r
    // Trajectory\r
    const trajLine = d3.line()\r
      .curve(d3.curveBasis)\r
      .x(d => vScale(d.v))\r
      .y(d => wScale(d.w))\r
\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient')\r
      .attr('id', 'fhn-gradient')\r
      .attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')\r
\r
    trajectory.forEach((p, i) => {\r
      grad.append('stop')\r
        .attr('offset', \`\${(i / trajectory.length) * 100}%\`)\r
        .attr('stop-color', d3.interpolatePlasma(i / trajectory.length))\r
    })\r
\r
    phaseG.append('path')\r
      .datum(trajectory)\r
      .attr('d', trajLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'url(#fhn-gradient)')\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-linecap', 'round')\r
\r
    // Start/end\r
    phaseG.append('circle')\r
      .attr('cx', vScale(trajectory[0].v))\r
      .attr('cy', wScale(trajectory[0].w))\r
      .attr('r', 5)\r
      .attr('fill', colors[2]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
    phaseG.append('circle')\r
      .attr('cx', vScale(trajectory[trajectory.length - 1].v))\r
      .attr('cy', wScale(trajectory[trajectory.length - 1].w))\r
      .attr('r', 5)\r
      .attr('fill', colors[3]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
    // Axes\r
    phaseG.append('line')\r
      .attr('x1', vScale(0)).attr('x2', vScale(0))\r
      .attr('y1', M.top).attr('y2', M.top + IH)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
    phaseG.append('line')\r
      .attr('x1', M.left).attr('x2', M.left + IW / 2 - 10)\r
      .attr('y1', wScale(0)).attr('y2', wScale(0))\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
    phaseG.append('text')\r
      .attr('x', M.left + IW / 4)\r
      .attr('y', M.top - 8)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '9px')\r
      .attr('font-weight', 600)\r
      .text('Phase Space (v vs w)')\r
\r
    // Time series\r
    const vTScale = d3.scaleLinear()\r
      .domain([d3.min(trajectory, d => d.v) - 0.5, d3.max(trajectory, d => d.v) + 0.5])\r
      .range([M.top + IH / 2 - 10, M.top])\r
\r
    const wTScale = d3.scaleLinear()\r
      .domain([d3.min(trajectory, d => d.w) - 0.5, d3.max(trajectory, d => d.w) + 0.5])\r
      .range([M.top + IH, M.top + IH / 2 + 10])\r
\r
    // v(t)\r
    const vLine = d3.line()\r
      .curve(d3.curveBasis)\r
      .x(d => M.left + IW / 2 + 10 + tScale(d.t))\r
      .y(d => vTScale(d.v))\r
\r
    g.append('path')\r
      .datum(trajectory)\r
      .attr('d', vLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 1.5)\r
\r
    // w(t)\r
    const wLine = d3.line()\r
      .curve(d3.curveBasis)\r
      .x(d => M.left + IW / 2 + 10 + tScale(d.t))\r
      .y(d => wTScale(d.w))\r
\r
    g.append('path')\r
      .datum(trajectory)\r
      .attr('d', wLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[1])\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-dasharray', '4,4')\r
\r
    // Legend\r
    const legend = g.append('g')\r
      .attr('transform', \`translate(\${M.left + IW / 2 + 20}, \${M.top})\`)\r
\r
    legend.append('line')\r
      .attr('x1', 0).attr('x2', 20)\r
      .attr('y1', 6).attr('y2', 6)\r
      .attr('stroke', colors[0]).attr('stroke-width', 2)\r
    legend.append('text')\r
      .attr('x', 25).attr('y', 10)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
      .text('v(t) - voltage')\r
\r
    legend.append('line')\r
      .attr('x1', 0).attr('x2', 20)\r
      .attr('y1', 22).attr('y2', 22)\r
      .attr('stroke', colors[1]).attr('stroke-width', 2).attr('stroke-dasharray', '4,4')\r
    legend.append('text')\r
      .attr('x', 25).attr('y', 26)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
      .text('w(t) - recovery')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('FitzHugh-Nagumo Neuron Model')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text(\`a=\${a}, b=\${b}, ε=\${epsilon}, I=\${I_ext}\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};