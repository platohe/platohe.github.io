var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW } from './utils'\r
// SandpileModel: Abelian sandpile avalanche field.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'sandpile-model',\r
  title: 'Sandpile Model',\r
  desc: 'Sandpile Model — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'SandpileModel',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","sandpile-model"],\r
}\r
\r
export default function SandpileModel({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
const N=26,S=Math.floor(IW/N),h={}\r
for(let i=0;i<N;i++)for(let j=0;j<N;j++)h[i+'_'+j]=0\r
for(let k=0;k<400;k++){ const a=Math.floor(N/2)+Math.floor((rnd()-0.5)*4),b=Math.floor(N/2)+Math.floor((rnd()-0.5)*4); h[a+'_'+b]=(h[a+'_'+b]||0)+1 }\r
Object.entries(h).forEach(([k,v])=>{ const [i,j]=k.split('_'); g.append('rect').attr('x',M.left+(+i)*S).attr('y',M.top+(+j)*S).attr('width',S-1).attr('height',S-1)\r
 .attr('fill',d3.interpolateRgbBasis(['#fef3c7','#b45309'])(Math.min(v,4)/4)) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};