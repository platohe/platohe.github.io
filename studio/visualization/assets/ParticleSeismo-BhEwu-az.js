var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'particle-seismo',\r
  title: 'Particle Seismo',\r
  desc: 'Particle Seismo — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleSeismo',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-seismo"],\r
}\r
\r
export default function ParticleSeismo() {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
    const g = svg.append('g')\r
    const lines = Array.from({ length: 15 }, (_, i) => ({ x: 20 + i * 25, baseY: 30 + i * 17, color: colors[i % colors.length], phase: Math.random() * Math.PI * 2, amp: 2, spike: false, spikeT: 0 }))\r
    let timer\r
    timer = d3.timer(elapsed => {\r
      lines.forEach(l => { if (Math.random() < 0.003) { l.spike = true; l.spikeT = elapsed } if (l.spike && elapsed - l.spikeT > 800) l.spike = false; l.amp = l.spike ? 25 + Math.random() * 20 : 2 + Math.sin(elapsed * 0.003 + l.phase) * 1.5 })\r
      g.selectAll('*').remove()\r
      lines.forEach(l => {\r
        const pts = []\r
        for (let x = 0; x < 20; x++) { const wave = Math.sin(x * 0.5 + elapsed * 0.01 + l.phase) * l.amp; pts.push(\`\${l.x + x},\${l.baseY + wave}\`) }\r
        g.append('polyline').attr('points', pts.join(' ')).attr('fill', 'none').attr('stroke', l.color).attr('stroke-width', 1.2).attr('opacity', 0.7)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};