var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'bigram-network',\r
  title: 'Bigram Network',\r
  desc: 'Bigram Network — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BigramNetwork',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bigram-network"],\r
}\r
\r
export default function BigramNetwork({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const nodes = [{id:data[0].text},{id:data[1].text},{id:'Analysis'},{id:'Insight'},{id:'Chart'}]\r
    const links = [{source:data[0].text,target:data[1].text},{source:data[1].text,target:'Analysis'},{source:'Analysis',target:'Insight'}]\r
    const g = svg.append('g')\r
    const sim = d3.forceSimulation(nodes).force('link',d3.forceLink(links).id(d=>d.id).distance(70)).force('charge',d3.forceManyBody().strength(-180)).force('center',d3.forceCenter(W/2,H/2)).stop(); for(let i=0;i<100;i++) sim.tick()\r
    g.selectAll('line').data(links).join('line').attr('x1',d=>d.source.x).attr('y1',d=>d.source.y).attr('x2',d=>d.target.x).attr('y2',d=>d.target.y).attr('stroke','var(--border)').attr('marker-end','url(#arr2)')\r
    g.append('defs').append('marker').attr('id','arr2').attr('viewBox','0 -5 10 10').attr('refX',10).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto').append('path').attr('d','M0,-5L10,0L0,5').attr('fill','var(--border)')\r
    g.selectAll('circle').data(nodes).join('circle').attr('cx',d=>d.x).attr('cy',d=>d.y).attr('r',14).attr('fill',(d,i)=>colors[i%colors.length])\r
    g.selectAll('text').data(nodes).join('text').attr('x',d=>d.x).attr('y',d=>d.y+4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').text(d=>d.id.slice(0,6))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};