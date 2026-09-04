var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cyclic-sankey',\r
  title: 'Cyclic Sankey',\r
  desc: 'Cyclic Sankey — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CyclicSankey',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","cyclic-sankey"],\r
}\r
\r
export default function CyclicSankey({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const nodes=(customData&&customData.nodes)||[{name:'Raw'},{name:'Manufacture'},{name:'Use'},{name:'Recycle'},{name:'Waste'}]\r
    const links=(customData&&customData.links)||[{source:0,target:1,value:30},{source:1,target:2,value:25},{source:2,target:3,value:12},{source:2,target:4,value:8},{source:3,target:0,value:10},{source:3,target:1,value:5}]\r
    const margin={top:36,right:16,bottom:16,left:16}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const x=d3.scalePoint().domain(d3.range(nodes.length)).range([0,width]).padding(0.5)\r
    const y=height/2\r
    const nodeH=d=> 14 + d.value*0.9\r
    // compute node value as max in/out\r
    const nodeVals=nodes.map((_,i)=> d3.sum(links.filter(l=>l.source===i||l.target===i),l=>l.value)/2)\r
    // nodes\r
    nodes.forEach((n,i)=>{\r
      const h=nodeH({value:nodeVals[i]})\r
      g.append('rect').attr('x',(x(i)??0)-8).attr('y',y - h/2).attr('width',16).attr('height',h).attr('fill',colors[i]).attr('rx',3).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x(i)??0).attr('y',y - h/2 -6).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600).text(n.name)\r
      g.append('text').attr('x',x(i)??0).attr('y',y + h/2 +10).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(Math.round(nodeVals[i]))\r
    })\r
    const wScale=d3.scaleLinear().domain([0,30]).range([2,12])\r
    links.forEach(l=>{\r
      const sx=(x(l.source)??0)+8, tx=(x(l.target)??0)-8\r
      const isCycle=l.target <= l.source\r
      if(!isCycle){\r
        const mx=(sx+tx)/2\r
        const path=\`M\${sx},\${y} C\${mx},\${y-18} \${mx},\${y-18} \${tx},\${y}\`\r
        g.append('path').attr('d',path).attr('fill','none').attr('stroke',colors[l.source]).attr('stroke-width',wScale(l.value)).attr('opacity',0.48).attr('marker-end','url(#arrC)')\r
        g.append('text').attr('x',mx).attr('y',y-10).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(l.value)\r
      } else {\r
        // loop around top\r
        const path=\`M\${sx},\${y-10} C\${sx},12 \${tx},12 \${tx},\${y-10}\`\r
        g.append('path').attr('d',path).attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',wScale(l.value)).attr('opacity',0.76).attr('stroke-dasharray','4,3')\r
        g.append('text').attr('x',(sx+tx)/2).attr('y',10).attr('text-anchor','middle').attr('fill','#f59e0b').attr('font-size','7px').attr('font-weight',700).text(\`\${l.value} ↺\`)\r
      }\r
    })\r
    const defs=svg.append('defs')\r
    defs.append('marker').attr('id','arrC').attr('viewBox','0 -5 10 10').attr('refX',8).attr('refY',0).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto').append('path').attr('d','M0,-5L10,0L0,5').attr('fill','var(--text-secondary)')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cyclic Sankey — Feedback Loop')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};