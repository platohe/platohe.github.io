var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'flow-map-particles',\r
  title: 'Flow Map Particles',\r
  desc: 'Flow Map Particles — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'FlowMapParticles',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["networks","flow-map-particles"],\r
}\r
\r
export default function FlowMapParticles({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const flows=(customData&&customData.flows)||[\r
      {from:[42,118], to:[282,102], v:32},{from:[42,118], to:[258,188], v:18},{from:[282,102], to:[322,188], v:14},{from:[142,198], to:[282,102], v:22},{from:[42,118], to:[142,198], v:9},\r
    ]\r
    const g=svg.append('g').attr('transform','translate(12,28)')\r
    g.append('rect').attr('width',376).attr('height',200).attr('fill','#f8fafc').attr('stroke','var(--border)').attr('rx',6)\r
    flows.forEach((f,i)=>{\r
      const [x1,y1]=f.from, [x2,y2]=f.to\r
      const mx=(x1+x2)/2, my=(y1+y2)/2 - Math.hypot(x2-x1,y2-y1)*0.16\r
      const path=\`M\${x1},\${y1} Q\${mx},\${my} \${x2},\${y2}\`\r
      g.append('path').attr('d',path).attr('fill','none').attr('stroke',colors[i%colors.length]).attr('stroke-width',Math.max(1.4, f.v*0.16)).attr('opacity',0.42)\r
      // particles along path\r
      for(let t=0.18; t<0.9; t+=0.22){\r
        const x= (1-t)*(1-t)*x1 + 2*(1-t)*t*mx + t*t*x2\r
        const y= (1-t)*(1-t)*y1 + 2*(1-t)*t*my + t*t*y2\r
        g.append('circle').attr('cx',x).attr('cy',y).attr('r',2.8).attr('fill',colors[i%colors.length]).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
        g.append('circle').attr('cx',x).attr('cy',y).attr('r',5).attr('fill',colors[i%colors.length]).attr('opacity',0.14)\r
      }\r
      g.append('circle').attr('cx',x1).attr('cy',y1).attr('r',4).attr('fill',colors[i%colors.length]).attr('stroke','var(--bg)')\r
      g.append('circle').attr('cx',x2).attr('cy',y2).attr('r',4).attr('fill','var(--bg)').attr('stroke',colors[i%colors.length]).attr('stroke-width',1.4)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Flow Map with Particles')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};