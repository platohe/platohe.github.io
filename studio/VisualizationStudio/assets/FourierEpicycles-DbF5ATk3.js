var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'fourier-epicycles',\r
  title: 'Fourier Epicycles',\r
  desc: 'Fourier Epicycles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FourierEpicycles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","fourier-epicycles"],\r
}\r
\r
export default function FourierEpicycles({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"epicycles":[{"freq":1,"amp":45,"phase":0},{"freq":-1,"amp":25,"phase":0.785},{"freq":3,"amp":18,"phase":0},{"freq":-3,"amp":12,"phase":1.571},{"freq":5,"amp":8,"phase":0}],"speed":0.002}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const epicycles = config.epicycles || DEFAULT_DATA.epicycles\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Trace path\r
    const tracePath = g.append('path')\r
      .attr('fill', 'none')\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 2)\r
\r
    // Epicycle arm groups\r
    const armsG = g.append('g')\r
    const tracePoints = []\r
    const maxPoints = 400\r
\r
    const speed = config.speed || 0.0015\r
    const timer = d3.timer((elapsed) => {\r
      const time = elapsed * speed\r
\r
      armsG.selectAll('*').remove()\r
      let prevX = 0, prevY = 0\r
\r
      epicycles.forEach((epi, i) => {\r
        const theta = epi.freq * time + epi.phase\r
        const x = prevX + epi.amp * Math.cos(theta)\r
        const y = prevY + epi.amp * Math.sin(theta)\r
\r
        // Circle outline\r
        armsG.append('circle')\r
          .attr('cx', prevX)\r
          .attr('cy', prevY)\r
          .attr('r', epi.amp)\r
          .attr('fill', 'none')\r
          .attr('stroke', 'var(--border)')\r
          .attr('stroke-opacity', 0.35)\r
          .attr('stroke-dasharray', '2,2')\r
\r
        // Arm vector line\r
        armsG.append('line')\r
          .attr('x1', prevX)\r
          .attr('y1', prevY)\r
          .attr('x2', x)\r
          .attr('y2', y)\r
          .attr('stroke', i === epicycles.length - 1 ? '#ef4444' : '#6366f1')\r
          .attr('stroke-width', 1.2)\r
\r
        prevX = x\r
        prevY = y\r
      })\r
\r
      // Pen dot\r
      armsG.append('circle')\r
        .attr('cx', prevX)\r
        .attr('cy', prevY)\r
        .attr('r', 3)\r
        .attr('fill', '#ef4444')\r
\r
      tracePoints.push([prevX, prevY])\r
      if (tracePoints.length > maxPoints) tracePoints.shift()\r
\r
      tracePath.attr('d', d3.line()(tracePoints))\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Discrete Fourier Transform Epicyclic Drawing')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Tip-to-Tail Rotating Complex Harmonic Phasor Vectors')\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};