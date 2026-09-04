var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'wave-interference',\r
  title: 'Wave Interference',\r
  desc: 'Wave Interference — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'WaveInterference',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","wave-interference"],\r
}\r
\r
export default function WaveInterference({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { seed: 42, iterations: 2000 }\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const cell = 6\r
    const s1 = [W * 0.35, H * 0.45]\r
    const s2 = [W * 0.65, H * 0.45]\r
\r
    // Build all rect elements once\r
    const rects = []\r
    for (let yy = 20; yy < H - 30; yy += cell) {\r
      for (let xx = 10; xx < W - 10; xx += cell) {\r
        rects.push(g.append('rect')\r
          .attr('x', xx).attr('y', yy)\r
          .attr('width', cell - 1).attr('height', cell - 1))\r
      }\r
    }\r
\r
    const pulseCount = 3\r
    const pulsePeriod = 3000 // ms per full cycle\r
\r
    // Draw source dots\r
    g.append('circle').attr('cx', s1[0]).attr('cy', s1[1]).attr('r', 3).attr('fill', colors[0])\r
    g.append('circle').attr('cx', s2[0]).attr('cy', s2[1]).attr('r', 3).attr('fill', colors[3])\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      const phase = (t * 2 * Math.PI) / (pulsePeriod / 1000)\r
\r
      rects.forEach(r => {\r
        const xx = +r.attr('x')\r
        const yy = +r.attr('y')\r
        const d1 = Math.hypot(xx - s1[0], yy - s1[1])\r
        const d2 = Math.hypot(xx - s2[0], yy - s2[1])\r
        // Two overlapping sine waves with moving phase\r
        const v = (Math.sin(d1 * 0.45 - phase) + Math.sin(d2 * 0.45 - phase)) / 2\r
        r.attr('fill', d3.interpolateRdBu(v))\r
      })\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};