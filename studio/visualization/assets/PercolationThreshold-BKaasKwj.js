var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
// PercolationThreshold: Site percolation near threshold.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'percolation-threshold',\r
  title: 'Percolation Threshold',\r
  desc: 'Percolation Threshold — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'PercolationThreshold',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","percolation-threshold"],\r
}\r
\r
export default function PercolationThreshold({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
const N=24,S=12\r
for(let i=0;i<N;i++)for(let j=0;j<N;j++){ const open=rnd()<0.59\r
 g.append('rect').attr('x',M.left+i*S).attr('y',M.top+j*S).attr('width',S-1).attr('height',S-1).attr('rx',2)\r
 .attr('fill',open?(rnd()<0.3?'#10b981':'#c7d2fe'):'transparent').attr('stroke','var(--border)').attr('stroke-opacity',open?0:0.4) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};