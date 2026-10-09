var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
// MonteCarloPi: Pi estimation via seeded sampling.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'monte-carlo-pi',\r
  title: 'Monte Carlo Pi',\r
  desc: 'Monte Carlo Pi — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'MonteCarloPi',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","monte-carlo-pi"],\r
}\r
\r
export default function MonteCarloPi({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
const inside = [], outside = []\r
for (let i = 0; i < 600; i++) { const px = rnd(), py = rnd(); (px*px + py*py <= 1 ? inside : outside).push([px, py]) }\r
g.append('circle').attr('cx', M.left).attr('cy', M.top).attr('r', IW/2).attr('fill', 'none').attr('stroke','var(--border)').attr('stroke-dasharray','3,3')\r
inside.forEach(p => g.append('circle').attr('cx', M.left + p[0]*IW/2).attr('cy', M.top + p[1]*IW/2).attr('r', 1.6).attr('fill', '#10b981'))\r
outside.forEach(p => g.append('circle').attr('cx', M.left + p[0]*IW/2).attr('cy', M.top + p[1]*IW/2).attr('r', 1.6).attr('fill', '#ef4444'))\r
const est = (4 * inside.length / (inside.length + outside.length)).toFixed(3)\r
g.append('text').attr('x', W/2).attr('y', H-12).attr('text-anchor','middle').attr('font-size','9px').attr('fill','var(--text-secondary)').text('π ≈ ' + est)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};