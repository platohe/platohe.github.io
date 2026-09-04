var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'word-tree-vertical',\r
  title: 'Word Tree Vertical',\r
  desc: 'Word Tree Vertical — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordTreeVertical',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","word-tree-vertical"],\r
}\r
\r
export default function WordTreeVertical({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28},{"text":"Chart","size":22},{"text":"Insight","size":18}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const root = d3.hierarchy({name:'root',children:data.map(d=>({name:d.text,value:d.size}))})\r
    const tree = d3.tree().size([W-80,H-160])(root)\r
    const g = svg.append('g').attr('transform','translate(40,20)')\r
    g.selectAll('line').data(root.links()).join('line').attr('x1',d=>d.source.x).attr('y1',d=>d.source.y).attr('x2',d=>d.target.x).attr('y2',d=>d.target.y).attr('stroke','var(--border)')\r
    g.selectAll('circle').data(root.descendants()).join('circle').attr('cx',d=>d.x).attr('cy',d=>d.y).attr('r',d=>d.data.value? d.data.value*0.18:4).attr('fill',(d,i)=>colors[i%colors.length])\r
    g.selectAll('text').data(root.leaves()).join('text').attr('x',d=>d.x).attr('y',d=>d.y+4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','8px').text(d=>d.data.name)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};