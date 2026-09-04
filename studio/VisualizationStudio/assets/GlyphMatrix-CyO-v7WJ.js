var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'glyph-matrix',\r
  title: 'Glyph Matrix',\r
  desc: 'Glyph Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GlyphMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","glyph-matrix"],\r
}\r
\r
export default function GlyphMatrix({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const entities=(customData&&customData.entities)||[\r
      {name:'Alice', a:62,b:48,c:72,d:36},{name:'Bob',a:38,b:72,c:44,d:68},{name:'Cara',a:82,b:28,c:58,d:52},{name:'Dan',a:48,b:62,c:32,d:78},{name:'Eva',a:70,b:54,c:88,d:42},{name:'Finn',a:44,b:40,c:62,d:58},\r
    ]\r
    const attrs=['a','b','c','d']\r
    const cols=3, cellW=112, cellH=62\r
    const g=svg.append('g').attr('transform','translate(20,30)')\r
    const rScale=d3.scaleLinear().domain([0,100]).range([0,22])\r
    const angle=d3.scalePoint().domain(attrs).range([0,Math.PI*2])\r
    entities.forEach((e,i)=>{\r
      const col=i%cols, row=Math.floor(i/cols)\r
      const cx=col*cellW+cellW/2, cy=row*cellH+cellH/2\r
      g.append('rect').attr('x',col*cellW+2).attr('y',row*cellH+2).attr('width',cellW-4).attr('height',cellH-4).attr('fill','var(--bg)').attr('stroke','var(--border)').attr('rx',6)\r
      g.append('text').attr('x',cx).attr('y',row*cellH+12).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',700).text(e.name)\r
      const star=d3.lineRadial().angle(d=>angle(d.k)??0).radius(d=>rScale(d.v)).curve(d3.curveLinearClosed)\r
      const pts=attrs.map(k=>({k, v:e[k]}))\r
      g.append('path').attr('d',star(pts)).attr('transform',\`translate(\${cx},\${cy+8})\`).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.22).attr('stroke',colors[i%colors.length]).attr('stroke-width',1.2)\r
      attrs.forEach(k=>{\r
        const a=angle(k)??0, r=rScale(e[k])\r
        g.append('circle').attr('cx',cx+Math.sin(a)*r).attr('cy',cy+8-Math.cos(a)*r).attr('r',1.8).attr('fill',colors[i%colors.length])\r
      })\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Glyph Matrix')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};