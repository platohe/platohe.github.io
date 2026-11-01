var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
export const meta = {\r
  id: 'kuramoto-sync-simulation',\r
  title: 'Kuramoto Sync Simulation',\r
  desc: 'Kuramoto Sync Simulation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KuramotoSyncSimulation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","kuramoto-sync-simulation"],\r
}\r
\r
export default function KuramotoSyncSimulation({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    N: 50,\r
    K: 1.5,\r
    omegaMean: 0,\r
    omegaStd: 1.0,\r
    dt: 0.05,\r
    steps: 2000,\r
    showOrderParameter: true,\r
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
    const { N, K, omegaMean, omegaStd, dt, steps, showOrderParameter, showPhaseSpace, showTimeSeries, transientSteps } = input\r
\r
    // Natural frequencies\r
    const omegas = d3.range(N).map(() => d3.randomNormal(omegaMean, omegaStd)())\r
    \r
    // Initial phases\r
    let phases = d3.range(N).map(() => Math.random() * 2 * Math.PI)\r
\r
    const trajectory = []\r
    const orderParameter = []\r
\r
    for (let step = 0; step < steps; step++) {\r
      // Compute order parameter\r
      const sumCos = d3.sum(phases.map(p => Math.cos(p)))\r
      const sumSin = d3.sum(phases.map(p => Math.sin(p)))\r
      const r = Math.sqrt(sumCos**2 + sumSin**2) / N\r
      const psi = Math.atan2(sumSin, sumCos)\r
      orderParameter.push(r)\r
\r
      // Kuramoto coupling\r
      const newPhases = phases.map((theta_i, i) => {\r
        let sum = 0\r
        for (let j = 0; j < N; j++) {\r
          sum += Math.sin(phases[j] - theta_i)\r
        }\r
        return theta_i + dt * (omegas[i] + K / N * sum)\r
      })\r
\r
      // Normalize to [0, 2π]\r
      phases = newPhases.map(p => p % (2 * Math.PI))\r
\r
      if (step >= transientSteps) {\r
        trajectory.push({ phases: [...phases], r, psi, t: (step - transientSteps) * dt })\r
      }\r
    }\r
\r
    const tMax = trajectory[trajectory.length - 1]?.t || (steps - transientSteps) * dt\r
\r
    const g = svg.append('g')\r
    svg.selectAll('*').remove()\r
\r
    // Layout: Phase space (circle) on left, order parameter + time series on right\r
    const circleR = Math.min(IW, IH) / 4\r
\r
    if (showPhaseSpace) {\r
      const circleG = g.append('g')\r
        .attr('transform', \`translate(\${M.left + IW / 4}, \${M.top + IH / 2})\`)\r
\r
      // Unit circle\r
      circleG.append('circle')\r
        .attr('r', circleR)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1.5)\r
\r
      // Center\r
      circleG.append('circle')\r
        .attr('r', 3)\r
        .attr('fill', 'var(--text-secondary)')\r
\r
      // Order parameter radius indicator\r
      const rScale = d3.scaleLinear().domain([0, 1]).range([0, circleR])\r
\r
      // Oscillators\r
      const lastFrame = trajectory[trajectory.length - 1]\r
      const oscillatorG = g.append('g')\r
\r
      if (lastFrame) {\r
        oscillatorG.selectAll('.oscillator')\r
          .data(lastFrame.phases)\r
          .join('circle')\r
          .attr('cx', d => rScale(1) * Math.cos(d))\r
          .attr('cy', d => rScale(1) * Math.sin(d))\r
          .attr('r', 4)\r
          .attr('fill', d => d3.interpolateRainbow(d / (2 * Math.PI)))\r
          .attr('stroke', 'var(--bg)')\r
          .attr('stroke-width', 1)\r
\r
        // Order parameter vector\r
        circleG.append('line')\r
          .attr('x1', 0).attr('y1', 0)\r
          .attr('x2', rScale(lastFrame.r) * Math.cos(lastFrame.psi))\r
          .attr('y2', rScale(lastFrame.r) * Math.sin(lastFrame.psi))\r
          .attr('stroke', colors[0])\r
          .attr('stroke-width', 3)\r
          .attr('stroke-linecap', 'round')\r
\r
        circleG.append('circle')\r
          .attr('cx', rScale(lastFrame.r) * Math.cos(lastFrame.psi))\r
          .attr('cy', rScale(lastFrame.r) * Math.sin(lastFrame.psi))\r
          .attr('r', 6)\r
          .attr('fill', colors[0])\r
          .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
      }\r
\r
      // Labels\r
      circleG.append('text')\r
        .attr('x', 0)\r
        .attr('y', -circleR - 10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 600)\r
        .text('Kuramoto Oscillators on Unit Circle')\r
\r
      // r value\r
      circleG.append('text')\r
        .attr('x', 0)\r
        .attr('y', circleR + 20)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', colors[0])\r
        .attr('font-size', '14px')\r
        .attr('font-weight', 600)\r
        .text(lastFrame ? \`r = \${lastFrame.r.toFixed(3)}\` : 'r = 0')\r
    }\r
\r
    // Order parameter time series\r
    if (showOrderParameter) {\r
      const opG = g.append('g')\r
        .attr('transform', \`translate(\${M.left + IW / 2}, \${M.top})\`)\r
\r
      const opWidth = IW / 2 - 20\r
      const opHeight = IH / 2 - 10\r
\r
      const tScale = d3.scaleLinear().domain([0, tMax]).range([0, opWidth])\r
      const rScale = d3.scaleLinear().domain([0, 1]).range([opHeight, 0])\r
\r
      const opLine = d3.line()\r
        .curve(d3.curveBasis)\r
        .x((d, i) => tScale(i * dt))\r
        .y(d => rScale(d))\r
\r
      g.append('path')\r
        .datum(orderParameter.slice(transientSteps))\r
        .attr('d', opLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', 2)\r
\r
      opG.append('g')\r
        .attr('transform', \`translate(0,\${opHeight})\`)\r
        .call(d3.axisBottom(tScale).ticks(6).tickSize(-opHeight).tickPadding(8))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
      opG.append('g')\r
        .call(d3.axisLeft(rScale).ticks(4).tickSize(-opWidth).tickPadding(8))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
      opG.append('text')\r
        .attr('x', (IW / 2 - 20) / 2)\r
        .attr('y', -5)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 600)\r
        .text('Order Parameter r(t)')\r
    }\r
\r
    // Individual oscillator phases time series\r
    if (showTimeSeries) {\r
      const nShow = Math.min(8, N)\r
      const sampleIndices = d3.range(nShow).map(i => Math.floor(i * N / nShow))\r
\r
      const colorsRainbow = d3.range(nShow).map(i => d3.interpolateRainbow(i / nShow))\r
      const tScale = d3.scaleLinear().domain([0, tMax]).range([M.left + IW / 2 + 10, M.left + IW])\r
      const phaseScale = d3.scaleLinear().domain([0, 2 * Math.PI]).range([IH / 2 - 20, 0])\r
\r
      sampleIndices.forEach((idx, i) => {\r
        const phaseData = trajectory.map(f => f.phases[idx])\r
        const line = d3.line()\r
          .curve(d3.curveBasis)\r
          .x((d, j) => M.left + IW / 2 + 10 + j * dt * (IW / 2 - 20) / tMax)\r
          .y(d => d3.scaleLinear().domain([0, 2 * Math.PI]).range([IH / 2 - 20, 0])(d % (2 * Math.PI)))\r
\r
        g.append('path')\r
          .datum(phaseData.slice(transientSteps))\r
          .attr('d', line)\r
          .attr('fill', 'none')\r
          .attr('stroke', colorsRainbow[i])\r
          .attr('stroke-width', 1.2)\r
          .attr('stroke-opacity', 0.8)\r
      })\r
    }\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Kuramoto Synchronization Model')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text(\`N=\${N} | K=\${K} | σ_ω=\${omegaStd}\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};