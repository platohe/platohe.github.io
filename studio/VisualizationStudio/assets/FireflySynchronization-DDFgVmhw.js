var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
// FireflySynchronization: Phase-syncing firefly grid.\r
export const meta = {\r
  id: 'firefly-synchronization',\r
  title: 'Firefly Synchronization',\r
  desc: 'Firefly Synchronization — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'FireflySynchronization',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","firefly-synchronization"],\r
}\r
\r
export default function FireflySynchronization({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    \r
    void customData\r
    const g = svg.append('g')\r
const N=12,S=24\r
for(let i=0;i<N;i++)for(let j=0;j<N;j++){ const phase=(i+j)%N/N\r
 const glow=Math.max(0,1-phase*3)\r
 g.append('circle').attr('cx',M.left+i*S+S/2).attr('cy',M.top+j*S+S/2).attr('r',4+glow*4)\r
 .attr('fill','#fde047').attr('fill-opacity',0.25+glow*0.75) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};