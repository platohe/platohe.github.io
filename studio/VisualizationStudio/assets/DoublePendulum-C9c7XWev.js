var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'double-pendulum',\r
  title: 'Double Pendulum',\r
  desc: 'Double Pendulum — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'DoublePendulum',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","double-pendulum"],\r
}\r
\r
export default function DoublePendulum({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = { seed: 42, iterations: 2000 }\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let a1 = 2.1 + rnd() * 0.1, a2 = 2.4 + rnd() * 0.1, w1 = 0, w2 = 0\r
    const m1 = 1, m2 = 1, l1 = 1, l2 = 0.9, gr = 9.81, dt = 0.008\r
    const trace = []\r
\r
    // Anchor point — centered vertically so the full swing stays inside viewBox\r
    const cx = W / 2, cy = H / 2 - 45\r
    const scale1 = 70, scale2 = 63\r
\r
    // Pivot dot\r
    g.append('circle').attr('cx', cx).attr('cy', cy).attr('r', 4).attr('fill', 'var(--text-secondary)')\r
\r
    // Trail (fading)\r
    const trailPath = g.append('path')\r
      .attr('fill', 'none').attr('stroke', colors[3]).attr('stroke-width', 0.9).attr('opacity', 0.8)\r
\r
    // Bob 1 and arm 1\r
    const bob1 = g.append('circle').attr('r', 6).attr('fill', colors[0]).attr('opacity', 0.9)\r
    const arm1 = g.append('line').attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5)\r
\r
    // Bob 2 and arm 2\r
    const bob2 = g.append('circle').attr('r', 6).attr('fill', colors[3]).attr('opacity', 0.9)\r
    const arm2 = g.append('line').attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5)\r
\r
    let frame = 0\r
    const maxFrames = Math.min(800, Math.max(100, data.iterations || 300))\r
    const stepPerFrame = 3\r
    const timer = d3.timer(elapsed => {\r
      for (let s = 0; s < stepPerFrame; s++) {\r
        const num1 = -gr * (2 * m1 + m2) * Math.sin(a1)\r
          - m2 * gr * Math.sin(a1 - 2 * a2)\r
          - 2 * Math.sin(a1 - a2) * m2 * (w2 * w2 * l2 + w1 * w1 * l1 * Math.cos(a1 - a2))\r
        const den1 = l1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2))\r
        const num2 = 2 * Math.sin(a1 - a2) * (\r
          w1 * w1 * l1 * (m1 + m2)\r
          + gr * (m1 + m2) * Math.cos(a1)\r
          + w2 * w2 * l2 * m2 * Math.cos(a1 - a2)\r
        )\r
        const den2 = l2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2))\r
        w1 += (num1 / den1) * dt\r
        w2 += (num2 / den2) * dt\r
        a1 += w1 * dt\r
        a2 += w2 * dt\r
      }\r
      frame++\r
\r
      const x1 = cx + l1 * scale1 * Math.sin(a1)\r
      const y1 = cy + l1 * scale1 * Math.cos(a1)\r
      const x2 = cx + l1 * scale1 * Math.sin(a1) + l2 * scale2 * Math.sin(a2)\r
      const y2 = cy + l1 * scale1 * Math.cos(a1) + l2 * scale2 * Math.cos(a2)\r
\r
      if (isFinite(x1) && isFinite(y1) && isFinite(x2) && isFinite(y2)) {\r
        trace.push([x2, y2])\r
        if (trace.length > 1200) trace.shift()\r
        trailPath.attr('d', 'M' + trace.map(p => p.join(',')).join('L'))\r
        arm1.attr('x1', cx).attr('y1', cy).attr('x2', x1).attr('y2', y1)\r
        arm2.attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2)\r
        bob1.attr('cx', x1).attr('cy', y1)\r
        bob2.attr('cx', x2).attr('cy', y2)\r
      }\r
\r
      if (frame >= maxFrames) timer.stop()\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};