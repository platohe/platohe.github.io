var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors, makeAxes } from './utils'\r
// RandomWalkBridge: Mean-reverting random walk paths.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'random-walk-bridge',\r
  title: 'Random Walk Bridge',\r
  desc: 'Random Walk Bridge — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'RandomWalkBridge',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","random-walk-bridge"],\r
}\r
\r
export default function RandomWalkBridge({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
makeAxes(g, d3.scaleLinear().domain([0,200]).range([0,IW]), d3.scaleLinear().domain([-40,40]).range([IH,0]), M.left, M.top+IH)\r
for (let w = 0; w < 7; w++) { let pos = 0; let dd = 'M' + M.left + ' ' + (M.top + IH/2)\r
 for (let s = 1; s <= 200; s++) { pos += (rnd()-0.5)*6 - pos*0.02; dd += 'L' + (M.left + IW*s/200) + ' ' + (M.top + IH/2 - pos*3) }\r
 g.append('path').attr('d',dd).attr('fill','none').attr('stroke',colors[w%colors.length]).attr('stroke-opacity',0.65).attr('stroke-width',1.3) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};