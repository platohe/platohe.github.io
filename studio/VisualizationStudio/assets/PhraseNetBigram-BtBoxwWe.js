var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'phrase-net-bigram',\r
  title: 'Phrase Net Bigram',\r
  desc: 'Phrase Net Bigram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PhraseNetBigram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","phrase-net-bigram"],\r
}\r
\r
export default function PhraseNetBigram({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28},{"text":"Chart","size":22},{"text":"Insight","size":18}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const words = data.map(d=>d.text)\r
    const nodes = words.map((w,i)=>({id:w, r:10+data[i].size*0.3}))\r
    const links = d3.pairs(words).map(([s,t])=>({source:s,target:t}))\r
    const g = svg.append('g')\r
    const sim = d3.forceSimulation(nodes).force('charge',d3.forceManyBody().strength(-120)).force('center',d3.forceCenter(W/2,H/2)).force('link',d3.forceLink(links).id(d=>d.id).distance(80)).stop()\r
    for(let i=0;i<120;i++) sim.tick()\r
    g.selectAll('line').data(links).join('line').attr('x1',d=>d.source.x).attr('y1',d=>d.source.y).attr('x2',d=>d.target.x).attr('y2',d=>d.target.y).attr('stroke','var(--border)').attr('stroke-width',1.5).attr('marker-end','url(#arrow)')\r
    g.append('defs').append('marker').attr('id','arrow').attr('viewBox','0 -5 10 10').attr('refX',12).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto').append('path').attr('d','M0,-5L10,0L0,5').attr('fill','var(--border)')\r
    g.selectAll('circle').data(nodes).join('circle').attr('cx',d=>d.x).attr('cy',d=>d.y).attr('r',d=>d.r).attr('fill',(d,i)=>colors[i%colors.length]).attr('opacity',0.7)\r
    g.selectAll('text').data(nodes).join('text').attr('x',d=>d.x).attr('y',d=>d.y+4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','9px').text(d=>d.id)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};