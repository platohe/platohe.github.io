var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'arc-diagram-radial',\r
  title: 'Arc Diagram Radial',\r
  desc: 'Arc Diagram Radial — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagramRadial',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","arc-diagram-radial"],\r
}\r
\r
export default function ArcDiagramRadial({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const nodes=(customData&&customData.nodes)||['A','B','C','D','E','F','G','H']\r
    const links=(customData&&customData.links)||[{source:0,target:3,v:8},{source:1,target:5,v:12},{source:2,target:6,v:6},{source:0,target:4,v:5},{source:3,target:7,v:9},{source:1,target:2,v:7}]\r
    const cx=200, cy=152, R=72\r
    const angle=d3.scalePoint().domain(d3.range(nodes.length)).range([0, Math.PI*2])\r
    const pos=i=>{ const a=angle(i)??0; return [cx+Math.cos(a)*R, cy+Math.sin(a)*R] }\r
    const g=svg.append('g')\r
    g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',R).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
    links.forEach(l=>{\r
      const [x1,y1]=pos(l.source), [x2,y2]=pos(l.target)\r
      const mx=(x1+x2)/2, my=(y1+y2)/2\r
      const dx=x2-x1, dy=y2-y1\r
      const dist=Math.hypot(dx,dy)\r
      const scale=0.42 + l.v*0.02\r
      const cx2=cx+(mx-cx)*scale, cy2=cy+(my-cy)*scale\r
      g.append('path').attr('d',\`M\${x1},\${y1} Q\${cx2},\${cy2} \${x2},\${y2}\`).attr('fill','none').attr('stroke',colors[l.source%colors.length]).attr('stroke-width',Math.max(1,l.v*0.55)).attr('opacity',0.46)\r
    })\r
    nodes.forEach((n,i)=>{\r
      const [x,y]=pos(i)\r
      g.append('circle').attr('cx',x).attr('cy',y).attr('r',6).attr('fill',colors[i%colors.length]).attr('stroke','var(--bg)').attr('stroke-width',1)\r
      const a=angle(i)??0\r
      g.append('text').attr('x',x+Math.cos(a)*10).attr('y',y+Math.sin(a)*10+3).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600).text(n)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Radial Arc Diagram')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};