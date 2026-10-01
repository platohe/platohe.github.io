var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes } from './utils'\r
// TrafficJamSimulation: Spacetime congestion diagram.\r
export const meta = {\r
  id: 'traffic-jam-simulation',\r
  title: 'Traffic Jam Simulation',\r
  desc: 'Traffic Jam Simulation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TrafficJamSimulation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","traffic-jam-simulation"],\r
}\r
\r
export default function TrafficJamSimulation({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":1200}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
    const timeSteps = Math.min(200, Math.max(30, Math.round((data.iterations || 1200) / 20)))\r
    const carCount = Math.min(50, Math.max(10, Math.round(26 + (data.iterations - 1200) / 150)))\r
    const jitter = rnd()\r
makeAxes(g, d3.scaleLinear().domain([0,timeSteps]).range([0,IW]), d3.scaleLinear().domain([0,40]).range([0,IH]), M.left, M.top)\r
for(let carch=0;carch<carCount;carch++){ let pos=carch*2.3 + jitter; let dd=''\r
 for(let t=0;t<timeSteps;t++){ const wave=Math.exp(-((t-t/2-carch%5)**2)/30); pos+= wave<0.05?1.2:wave>0.4?0.15:0.6\r
 dd+=(dd?'L':'M')+(M.left+t*IW/timeSteps)+' '+(M.top+pos*IH/40) }\r
 g.append('path').attr('d',dd).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1.4).attr('stroke-opacity',0.7) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};