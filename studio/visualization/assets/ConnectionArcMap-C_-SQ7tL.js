var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'connection-arc-map',\r
  title: 'Connection Arc Map',\r
  desc: 'Connection Arc Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConnectionArcMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","connection-arc-map"],\r
}\r
\r
export default function ConnectionArcMap({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const nodes=(customData&&customData.nodes)||[{id:'NYC',x:282,y:102},{id:'LON',x:198,y:84},{id:'TOK',x:318,y:112},{id:'SYD',x:322,y:198},{id:'SFO',x:42,y:118},{id:'DXB',x:242,y:128}]\r
    const links=(customData&&customData.links)||[{from:'NYC',to:'LON',v:42},{from:'LON',to:'TOK',v:28},{from:'SFO',to:'TOK',v:35},{from:'NYC',to:'SFO',v:22},{from:'DXB',to:'LON',v:18},{from:'SYD',to:'TOK',v:14},{from:'SFO',to:'SYD',v:9}]\r
    const byId=new Map(nodes.map(n=>[n.id,n]))\r
    const g=svg.append('g').attr('transform','translate(12,28)')\r
    g.append('rect').attr('width',376).attr('height',200).attr('fill','#f8fafc').attr('stroke','var(--border)').attr('rx',6)\r
    g.append('path').attr('d','M12,88 Q90,22 182,68 T322,108').attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3').attr('opacity',0.18)\r
    const s=d3.scaleLinear().domain([0,45]).range([1.2,5.5])\r
    const o=d3.scaleLinear().domain([0,45]).range([0.24,0.82])\r
    links.forEach((l,i)=>{\r
      const a=byId.get(l.from), b=byId.get(l.to); if(!a||!b) return\r
      const mx=(a.x+b.x)/2, h=Math.hypot(b.x-a.x,b.y-a.y)*0.2\r
      const d=\`M\${a.x},\${a.y} Q\${mx},\${(a.y+b.y)/2 - h} \${b.x},\${b.y}\`\r
      g.append('path').attr('d',d).attr('fill','none').attr('stroke',colors[i%colors.length]).attr('stroke-width',s(l.v)).attr('opacity',o(l.v))\r
    })\r
    nodes.forEach(n=>{\r
      g.append('circle').attr('cx',n.x).attr('cy',n.y).attr('r',6).attr('fill',colors[0]).attr('stroke','var(--bg)').attr('stroke-width',1.2)\r
      g.append('text').attr('x',n.x).attr('y',n.y-10).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','6px').attr('font-weight',700).text(n.id)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Connection Arc Map')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};