var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bundled-flow-map',\r
  title: 'Bundled Flow Map',\r
  desc: 'Bundled Flow Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BundledFlowMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bundled-flow-map"],\r
}\r
\r
export default function BundledFlowMap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const nodes=(customData&&customData.nodes)||[{id:'NYC',x:280,y:98},{id:'LA',x:62,y:178},{id:'CHI',x:178,y:108},{id:'MIA',x:258,y:198},{id:'SEA',x:72,y:62},{id:'DAL',x:168,y:158}]\r
    const flows=(customData&&customData.flows)||[{from:'NYC',to:'LA',value:44},{from:'LA',to:'NYC',value:31},{from:'CHI',to:'NYC',value:26},{from:'NYC',to:'MIA',value:18},{from:'SEA',to:'LA',value:22},{from:'DAL',to:'CHI',value:15},{from:'LA',to:'DAL',value:12},{from:'MIA',to:'NYC',value:9},{from:'NYC',to:'SEA',value:7},{from:'CHI',to:'DAL',value:20}]\r
    const byId=new Map(nodes.map(n=>[n.id,n]))\r
    const wScale=d3.scaleLinear().domain([5,50]).range([1.2,7])\r
    const oScale=d3.scaleLinear().domain([5,50]).range([0.22,0.82])\r
    const g=svg.append('g')\r
    // defs for arrow\r
    const defs=svg.append('defs')\r
    flows.forEach((_,i)=>{\r
      defs.append('marker').attr('id',\`arr-\${i}\`).attr('viewBox','0 -5 10 10').attr('refX',8).attr('refY',0).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto')\r
        .append('path').attr('d','M0,-5L10,0L0,5').attr('fill',colors[i%colors.length])\r
    })\r
    flows.forEach((f,i)=>{\r
      const a=byId.get(f.from), b=byId.get(f.to); if(!a||!b) return\r
      const mx=(a.x+b.x)/2, dx=b.x-a.x, dy=b.y-a.y, dist=Math.hypot(dx,dy)\r
      const off=dist*0.18\r
      const cx=mx, cy=(a.y+b.y)/2 - off\r
      const d=\`M\${a.x},\${a.y} Q\${cx},\${cy} \${b.x},\${b.y}\`\r
      g.append('path').attr('d',d).attr('fill','none').attr('stroke',colors[i%colors.length]).attr('stroke-width',wScale(f.value)).attr('opacity',oScale(f.value)).attr('marker-end',\`url(#arr-\${i})\`)\r
      g.append('text').attr('x',cx).attr('y',cy-4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(f.value)\r
    })\r
    nodes.forEach(n=>{\r
      g.append('circle').attr('cx',n.x).attr('cy',n.y).attr('r',9).attr('fill','var(--bg)').attr('stroke',colors[0]).attr('stroke-width',1.4)\r
      g.append('circle').attr('cx',n.x).attr('cy',n.y).attr('r',3).attr('fill',colors[0])\r
      g.append('text').attr('x',n.x).attr('y',n.y-14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',700).text(n.id)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bundled OD Flow Map')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};