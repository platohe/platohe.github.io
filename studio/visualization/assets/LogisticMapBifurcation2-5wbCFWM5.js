var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'logistic-map-bifurcation2',\r
  title: 'Logistic Map Bifurcation2',\r
  desc: 'Logistic Map Bifurcation2 — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'LogisticMapBifurcation2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","logistic-map-bifurcation2"],\r
}\r
\r
export default function LogisticMapBifurcation2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    for(let px=0; px<W-20; px+=2){\r
      const rr=2.5+(px/(W-20))*1.15\r
      let v=0.5\r
      const maxIt = Math.min(400, Math.max(30, data.iterations || 130))\r
      for(let i=0;i<maxIt;i++){ v=rr*v*(1-v); if(i>maxIt*0.7&&v>0&&v<1) g.append('circle').attr('cx',px+12).attr('cy',H-25-v*(H-70)).attr('r',0.8).attr('fill','#111827').attr('opacity',0.5) }\r
    }\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('LogisticMapBifurcation2')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};