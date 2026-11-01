var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'dasymetric-map',\r
  title: 'Dasymetric Map',\r
  desc: 'Dasymetric Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DasymetricMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dasymetric-map"],\r
}\r
\r
export default function DasymetricMap({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const regs=(customData&&customData.regions)||[\r
      {id:'Urban', x:18,y:34,w:170,h:92,v:88},{id:'Suburb',x:194,y:34,w:170,h:92,v:52},{id:'Rural',x:18,y:132,w:110,h:72,v:18},{id:'Forest',x:134,y:132,w:96,h:72,v:8},{id:'Water',x:236,y:132,w:128,h:72,v:2},\r
    ]\r
    const color=d3.scaleSequential(d3.interpolateYlGnBu).domain([0,90])\r
    const g=svg.append('g')\r
    // dasymetric: regions sized not by geo area but by population density zones (already var sized)\r
    regs.forEach(r=>{\r
      g.append('rect').attr('x',r.x).attr('y',r.y).attr('width',r.w).attr('height',r.h).attr('fill',color(r.v)).attr('stroke','var(--bg)').attr('stroke-width',1.2).attr('rx',4)\r
      g.append('text').attr('x',r.x+r.w/2).attr('y',r.y+r.h/2-4).attr('text-anchor','middle').attr('fill',r.v>50?'#fff':'var(--text)').attr('font-size','8px').attr('font-weight',700).text(r.id)\r
      g.append('text').attr('x',r.x+r.w/2).attr('y',r.y+r.h/2+8).attr('text-anchor','middle').attr('fill',r.v>50?'#fff':'var(--text-secondary)').attr('font-size','7px').text(\`\${r.v}/km²\`)\r
    })\r
    // land-use dots inside\r
    regs.forEach(r=>{\r
      const n=Math.round(r.v/10)\r
      for(let i=0;i<n;i++) g.append('circle').attr('cx',r.x+10+ (i%6)*14).attr('cy',r.y+ r.h-10 - Math.floor(i/6)*10).attr('r',2).attr('fill','#0f172a').attr('opacity',0.22)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Dasymetric Map')\r
    svg.append('text').attr('x',200).attr('y',24).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('Population reallocated by land use')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};