var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes } from './utils'\r
// PredatorPreyCycle: Lotka-Volterra oscillation.\r
export const meta = {\r
  id: 'predator-prey-cycle',\r
  title: 'Predator Prey Cycle',\r
  desc: 'Predator Prey Cycle — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PredatorPreyCycle',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","predator-prey-cycle"],\r
}\r
\r
export default function PredatorPreyCycle({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    \r
    void customData\r
    const g = svg.append('g')\r
 makeAxes(g, d3.scaleLinear().domain([0,100]).range([0,IW]), d3.scaleLinear().domain([0,100]).range([IH,0]), M.left, M.top+IH)\r
let prey=50,pred=30; const pts=[]\r
for(let t=0;t<100;t++){ \r
  const preySafe=Number.isFinite(prey)?prey:50\r
  const predSafe=Number.isFinite(pred)?pred:30\r
  pts.push([t,preySafe]); \r
  const dp=preySafe*(0.06-predSafe*0.002), dq=-predSafe*(0.08-preySafe*0.0015); \r
  prey=Math.max(preySafe+(Number.isFinite(dp)?dp:0),1); \r
  pred=Math.max(predSafe+(Number.isFinite(dq)?dq:0),1) \r
}\r
const line1=d3.line().defined(p=>Array.isArray(p)&&Number.isFinite(p[0])&&Number.isFinite(p[1])).x(p=>M.left+p[0]*IW/100).y(p=>M.top+IH-p[1]*IH/100)\r
const line2=d3.line().defined(p=>Array.isArray(p)&&Number.isFinite(p[0])&&Number.isFinite(p[1])).x(p=>M.left+p[0]*IW/100).y(p=>M.top+IH-(p[1]*0.6)*IH/100)\r
const d1=line1(pts), d2=line2(pts)\r
if(d1&&!d1.includes('NaN')) g.append('path').attr('d',d1).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',2)\r
if(d2&&!d2.includes('NaN')) g.append('path').attr('d',d2).attr('fill','none').attr('stroke','#10b981').attr('stroke-width',1.8)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};