var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'hilbert-curve-simulation',\r
  title: 'Hilbert Curve Simulation',\r
  desc: 'Hilbert Curve Simulation — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'HilbertCurveSimulation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","hilbert-curve-simulation"],\r
}\r
\r
export default function HilbertCurveSimulation({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":1000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const pts=[]\r
    function hil(x0,y0,xi,xj,yi,yj,n){ if(n<=0){ pts.push([x0+(xi+yi)/2,(y0+(xj+yj)/2)]); return } hil(x0,y0,yi/2,yj/2,xi/2,xj/2,n-1); hil(x0+xi/2,y0+xj/2,xi/2,xj/2,yi/2,yj/2,n-1); hil(x0+xi/2+yi/2,y0+xj/2+yj/2,xi/2,xj/2,yi/2,yj/2,n-1); hil(x0+xi/2+yi,y0+xj/2+yj,-yi/2,-yj/2,-xi/2,-xj/2,n-1) }\r
    const order = Math.min(7, Math.max(2, Math.round((data.iterations || 1000) / 200)))\r
    hil(20,20,W-40,0,0,H-40,order)\r
    const strokeColor = colors[Math.floor(rnd() * colors.length)]\r
    g.append('path').attr('d','M'+pts.map(q=>q.join(',')).join('L')).attr('fill','none').attr('stroke',strokeColor).attr('stroke-width',1.1)\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('HilbertCurveSimulation')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};