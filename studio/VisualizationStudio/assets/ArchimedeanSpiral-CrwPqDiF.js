var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// ArchimedeanSpiral: Equally spaced archimedean arms.\r
export const meta = {\r
  id: 'archimedean-spiral',\r
  title: 'Archimedean Spiral',\r
  desc: 'Archimedean Spiral — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'ArchimedeanSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["math-&-simulation","archimedean-spiral"],\r
}\r
\r
export default function ArchimedeanSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
let d=''\r
    for(let t=0;t<6*Math.PI;t+=0.08){ const r=6+t*3.4; const x=cx+Math.cos(t)*r, y=cy+Math.sin(t)*r\r
     d+=(d?'L':'M')+x+' '+y }\r
    g.append('path').attr('d',d).attr('fill','none').attr('stroke','#6366f1').attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};