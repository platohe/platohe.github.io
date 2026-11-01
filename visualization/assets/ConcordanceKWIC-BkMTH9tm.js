var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'concordance-kwic',\r
  title: 'Concordance K W I C',\r
  desc: 'Concordance K W I C — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConcordanceKWIC',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","concordance-k-w-i-c"],\r
}\r
\r
export default function ConcordanceKWIC({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const kw = data[1] ? data[1].text : 'Visualization'\r
    const g = svg.append('g').attr('transform','translate(20,40)')\r
    const rows = [['data','analysis of',kw,'is powerful'],['interactive',kw,'helps insight'],['modern',kw,'reveals patterns']]\r
    rows.forEach((r,i)=>{\r
      g.append('text').attr('x',110).attr('y',i*32+20).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','11px').text(r[0]+' '+r[1])\r
      g.append('rect').attr('x',118).attr('y',i*32+6).attr('width',110).attr('height',18).attr('fill',colors[1]).attr('rx',4)\r
      g.append('text').attr('x',173).attr('y',i*32+19).attr('text-anchor','middle').attr('fill','#fff').attr('font-weight',700).attr('font-size','11px').text(r[2])\r
      g.append('text').attr('x',232).attr('y',i*32+20).attr('text-anchor','start').attr('fill','var(--text-secondary)').attr('font-size','11px').text(r[3])\r
    })\r
    g.append('line').attr('x1',170).attr('x2',170).attr('y1',0).attr('y2',100).attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};