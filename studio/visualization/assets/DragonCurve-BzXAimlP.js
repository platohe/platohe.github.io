var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'dragon-curve',\r
  title: 'Dragon Curve',\r
  desc: 'Dragon Curve — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'DragonCurve',\r
  complexity: 'beginner',\r
  interactivity: ["drag"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","dragon-curve"],\r
}\r
\r
export default function DragonCurve({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const folds = Math.min(14, Math.max(3, Math.round((data.iterations || 2000) / 200)))\r
    let seq=[1]\r
    for(let k=0;k<folds;k++) seq=seq.concat([1].concat(seq.slice().reverse().map(v=>-v)))\r
    let x=170,y=210,a=rnd()>0.5 ? -Math.PI/2 : Math.PI/2; const D=[[x,y]]\r
    const maxPts = Math.min(seq.length, 3000)\r
    seq.slice(0,maxPts).forEach(t=>{ a+=t*Math.PI/2; x+=Math.cos(a)*8.5; y+=Math.sin(a)*8.5; D.push([x,y]) })\r
    g.append('path').attr('d','M'+D.map(q=>q.join(',')).join('L')).attr('fill','none').attr('stroke',colors[1]).attr('stroke-width',1)\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('DragonCurve')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};