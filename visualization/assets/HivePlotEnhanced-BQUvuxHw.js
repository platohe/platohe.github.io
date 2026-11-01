var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'hive-plot-enhanced',\r
  title: 'Hive Plot Enhanced',\r
  desc: 'Hive Plot Enhanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HivePlotEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hive-plot-enhanced"],\r
}\r
\r
export default function HivePlotEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const nodes=(customData&&customData.nodes)||[\r
      {id:'A1',axis:0, pos:0.2},{id:'A2',axis:0,pos:0.5},{id:'A3',axis:0,pos:0.82},\r
      {id:'B1',axis:1,pos:0.28},{id:'B2',axis:1,pos:0.62},{id:'C1',axis:2,pos:0.34},{id:'C2',axis:2,pos:0.71},\r
    ]\r
    const links=(customData&&customData.links)||[\r
      {source:'A1',target:'B1',v:8},{source:'A2',target:'C1',v:12},{source:'A3',target:'B2',v:6},{source:'B1',target:'C2',v:9},{source:'A1',target:'C1',v:5},\r
    ]\r
    const cx=200, cy=152, R=82\r
    const axes=[-Math.PI/2, Math.PI/6, 5*Math.PI/6]\r
    const posToXY=(axis,pos)=>{ const a=axes[axis]; const r=18+pos*(R-18); return [cx+Math.cos(a)*r, cy+Math.sin(a)*r] }\r
    const byId=new Map(nodes.map(n=>[n.id,n]))\r
    const g=svg.append('g')\r
    // axes\r
    axes.forEach(a=>{\r
      g.append('line').attr('x1',cx+Math.cos(a)*18).attr('y1',cy+Math.sin(a)*18).attr('x2',cx+Math.cos(a)*R).attr('y2',cy+Math.sin(a)*R).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
      g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',18).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3').attr('opacity',0.48)\r
    })\r
    links.forEach(l=>{\r
      const s=byId.get(l.source), t=byId.get(l.target); if(!s||!t) return\r
      const [x1,y1]=posToXY(s.axis,s.pos), [x2,y2]=posToXY(t.axis,t.pos)\r
      const mx=cx+(x1+y1+x2+y2)/4 - cx*0.5, my=cy // control near center with curvature\r
      g.append('path').attr('d',\`M\${x1},\${y1} Q\${cx},\${cy} \${x2},\${y2}\`).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',Math.max(1, l.v*0.5)).attr('opacity',0.42)\r
    })\r
    nodes.forEach(n=>{\r
      const [x,y]=posToXY(n.axis,n.pos)\r
      g.append('circle').attr('cx',x).attr('cy',y).attr('r',5).attr('fill',colors[n.axis]).attr('stroke','var(--bg)').attr('stroke-width',1.2)\r
      g.append('text').attr('x',x + (Math.cos(axes[n.axis])*8)).attr('y',y+3).attr('fill','var(--text)').attr('font-size','6px').attr('font-weight',600).text(n.id)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Hive Plot Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};