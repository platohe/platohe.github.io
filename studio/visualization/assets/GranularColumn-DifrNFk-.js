var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IH } from './utils'\r
// GranularColumn: Column collapse pile.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'granular-column',\r
  title: 'Granular Column',\r
  desc: 'Granular Column — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GranularColumn',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","granular-column"],\r
}\r
\r
export default function GranularColumn({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
const grains=[]\r
for(let i=0;i<160;i++){ grains.push([W/2+(rnd()-0.5)*30, rnd()*70]) }\r
grains.forEach(gr=>{ const fall=IH-60-gr[1]*2.2; const spread=(rnd()-0.5)*fall*0.45\r
 g.append('circle').attr('cx',gr[0]+spread).attr('cy',M.top+fall).attr('r',2.2).attr('fill','#a8a29e').attr('fill-opacity',0.85) })\r
g.append('rect').attr('x',W/2-16).attr('y',30).attr('width',32).attr('height',50).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','3,3')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};