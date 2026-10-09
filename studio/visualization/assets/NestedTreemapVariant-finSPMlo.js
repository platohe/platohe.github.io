var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'nested-treemap-variant',\r
  title: 'Nested Treemap Variant',\r
  desc: 'Nested Treemap Variant — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NestedTreemapVariant',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","nested-treemap-variant"],\r
}\r
\r
export default function NestedTreemapVariant({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const rootData=(customData&&customData.children)?customData:{name:'root', children:[\r
      {name:'Tech', children:[{name:'AI',value:32},{name:'Cloud',value:22},{name:'Web',value:18}]},\r
      {name:'Finance', children:[{name:'Trading',value:28},{name:'Banking',value:20}]},\r
      {name:'Health', children:[{name:'Bio',value:24},{name:'Care',value:16}]},\r
    ]}\r
    const root=d3.hierarchy(rootData).sum(d=>d.value||0).sort((a,b)=> (b.value||0)-(a.value||0))\r
    d3.treemap().size([360,188]).paddingInner(2).paddingOuter(4).round(true)(root)\r
    const g=svg.append('g').attr('transform','translate(20,34)')\r
    const col=d3.scaleOrdinal(colors).domain(root.children?.map(d=>d.data.name)??[])\r
    root.leaves().forEach(leaf=>{\r
      const p=leaf.parent\r
      g.append('rect').attr('x',leaf.x0).attr('y',leaf.y0).attr('width',leaf.x1-leaf.x0).attr('height',leaf.y1-leaf.y0)\r
        .attr('fill',col(p.data.name)).attr('fill-opacity',0.82).attr('stroke','var(--bg)').attr('stroke-width',1.2).attr('rx',3)\r
      if((leaf.x1-leaf.x0)>28 && (leaf.y1-leaf.y0)>16){\r
        g.append('text').attr('x',(leaf.x0+leaf.x1)/2).attr('y',(leaf.y0+leaf.y1)/2-4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').attr('font-weight',700).text(leaf.data.name)\r
        g.append('text').attr('x',(leaf.x0+leaf.x1)/2).attr('y',(leaf.y0+leaf.y1)/2+6).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','6px').text(leaf.value)\r
      }\r
    })\r
    root.children?.forEach(c=>{\r
      g.append('text').attr('x',c.x0+4).attr('y',c.y0+10).attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',700).text(c.data.name)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Nested Treemap Variant')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};