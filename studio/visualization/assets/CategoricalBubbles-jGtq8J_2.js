var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CategoricalBubbles: CategoricalBubbles variant.\r
export const meta = {\r
  id: 'categorical-bubbles',\r
  title: 'Categorical Bubbles',\r
  desc: 'Categorical Bubbles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CategoricalBubbles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","categorical-bubbles"],\r
}\r
\r
export default function CategoricalBubbles({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [\r
      { name: 'Tokyo', x: 120, y: 120, r: 34, v: 80 }, { name: 'Delhi', x: 210, y: 90, r: 30, v: 70 },\r
      { name: 'Shanghai', x: 290, y: 140, r: 27, v: 62 }, { name: 'Paris', x: 100, y: 200, r: 22, v: 50 },\r
      { name: 'Cairo', x: 190, y: 215, r: 25, v: 56 }, { name: 'Lagos', x: 280, y: 225, r: 20, v: 44 },\r
      { name: 'NYC', x: 330, y: 70, r: 17, v: 36 }, { name: 'Sydney', x: 55, y: 55, r: 13, v: 26 }\r
    ]\r
    const data = (Array.isArray(customData) && customData.length && customData[0].r !== undefined) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
const cats=['A','B','C']\r
    cats.forEach((c,ci)=>{ g.append('line').attr('x1',95+ci*105).attr('x2',95+ci*105).attr('y1',50).attr('y2',250).attr('stroke','var(--border)')\r
     g.append('text').attr('x',95+ci*105).attr('y',42).attr('text-anchor','middle').attr('font-size','8.5px').attr('font-weight',700).attr('fill','var(--text-secondary)').text('Cat '+c)\r
     data.filter((d,i)=>i%3===ci).forEach((d)=>{ const k=data.filter((dd,j)=>j%3===ci).indexOf(d)\r
      g.append('circle').attr('cx',95+ci*105+(k%2?24:-24)).attr('cy',75+k*52).attr('r',d.r*0.7).attr('fill',colors[ci%colors.length]).attr('fill-opacity',0.8) }) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};