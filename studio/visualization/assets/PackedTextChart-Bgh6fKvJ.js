var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'packed-text-chart',\r
  title: 'Packed Text Chart',\r
  desc: 'Packed Text Chart — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'PackedTextChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","packed-text-chart"],\r
}\r
\r
export default function PackedTextChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT={ topics:[\r
      {name:'Tech', words:[{word:'AI',freq:30},{word:'React',freq:25},{word:'Cloud',freq:18},{word:'Data',freq:16},{word:'API',freq:12},{word:'UX',freq:9}]},\r
      {name:'Nature', words:[{word:'Forest',freq:28},{word:'Ocean',freq:22},{word:'River',freq:16},{word:'Flora',freq:13},{word:'Fauna',freq:11},{word:'Soil',freq:8}]},\r
      {name:'Finance', words:[{word:'Market',freq:32},{word:'Risk',freq:20},{word:'Yield',freq:15},{word:'Equity',freq:13},{word:'Bond',freq:10},{word:'Fund',freq:7}]},\r
    ]}\r
    const src = customData && customData.topics ? customData : DEFAULT\r
    const root={children: src.topics.map(t=>({name:t.name, children: t.words.map(w=>({name:w.word, value:w.freq}))}))}\r
    const pack=d3.pack().size([360, 200]).padding(4)\r
    const hier=d3.hierarchy(root).sum(d=>d.value)\r
    const packed=pack(hier)\r
    const g=svg.append('g').attr('transform','translate(20,34)')\r
    const col=d3.scaleOrdinal(colors).domain(src.topics.map(t=>t.name))\r
    packed.descendants().forEach(d=>{\r
      if(d.depth===1){\r
        g.append('circle').attr('cx',d.x).attr('cy',d.y).attr('r',d.r).attr('fill',col(d.data.name)).attr('fill-opacity',0.14).attr('stroke',col(d.data.name)).attr('stroke-width',1).attr('stroke-dasharray','3,2')\r
        g.append('text').attr('x',d.x).attr('y',d.y - d.r - 6).attr('text-anchor','middle').attr('fill',col(d.data.name)).attr('font-size','7px').attr('font-weight',700).text(d.data.name)\r
      } else if(d.depth===2){\r
        const p=d.parent?.data.name\r
        g.append('circle').attr('cx',d.x).attr('cy',d.y).attr('r',d.r).attr('fill',col(p)).attr('fill-opacity',0.72).attr('stroke','var(--bg)').attr('stroke-width',0.8)\r
        g.append('text').attr('x',d.x).attr('y',d.y+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size', Math.max(6, Math.sqrt(d.value)*1.6)).attr('font-weight',600).text(d.data.name)\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Packed Text by Topic')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};