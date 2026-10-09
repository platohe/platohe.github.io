var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'hamiltonian-orbit',\r
  title: 'Hamiltonian Orbit',\r
  desc: 'Hamiltonian Orbit — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'HamiltonianOrbit',\r
  complexity: 'beginner',\r
  interactivity: ['none'],\r
  d3Api: ['d3-scale'],\r
  tags: ['math-&-simulation', 'hamiltonian-orbit'],\r
}\r
\r
export default function HamiltonianOrbit({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { steps: 1200, e: 0.6 }\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    const g = svg.append('g')\r
    const pts = []\r
    let r = 120, theta = 0, vr = 2.5\r
    const dt = 0.02\r
    const MAX_VR = 5\r
    for (let i = 0; i < data.steps; i++) {\r
      if (!isFinite(r) || !isFinite(theta) || !isFinite(vr) || r <= 0) break\r
      const vf = r * theta * theta\r
      const ar = vf - 5000 / (r * r)\r
      vr += ar * dt\r
      if (Math.abs(vr) > MAX_VR) vr = Math.sign(vr) * MAX_VR\r
      theta += vr * dt / r\r
      r += vr * dt\r
      if (r < 20) r = 200\r
      if (r > 180) r = 180\r
      pts.push([200 + r * Math.cos(theta), 150 + r * Math.sin(theta)])\r
    }\r
    if (pts.length > 1) {\r
      g.append('path').attr('d', 'M' + pts.map(p => p.join(',')).join('L'))\r
        .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1.2).attr('opacity', 0.7)\r
      g.append('circle').attr('cx', 200).attr('cy', 150).attr('r', 6).attr('fill', colors[1])\r
    }\r
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('HamiltonianOrbit')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};