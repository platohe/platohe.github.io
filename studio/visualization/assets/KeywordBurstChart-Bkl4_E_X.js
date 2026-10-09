var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'keyword-burst-chart',\r
  title: 'Keyword Burst Chart',\r
  desc: 'Keyword Burst Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KeywordBurstChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","keyword-burst-chart"],\r
}\r
\r
export default function KeywordBurstChart({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Viz","size":36},{"text":"Design","size":28}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const x = d3.scaleLinear().domain([0,10]).range([M.left,W-M.right])\r
    const y = d3.scaleBand().domain(data.map(d=>d.text)).range([M.top,H-M.bottom]).padding(0.3)\r
    const g = svg.append('g')\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).ticks(5)).selectAll('text').attr('fill','var(--text-secondary)')\r
    g.append('g').attr('transform','translate('+M.left+',0)').call(d3.axisLeft(y).tickSize(0)).selectAll('text').attr('fill','var(--text-secondary)')\r
    data.forEach((d,i)=>{\r
      const cx = x(2+Math.random()*6), r = 6+d.size*0.25\r
      g.append('circle').attr('cx',cx).attr('cy',y(d.text)+y.bandwidth()/2).attr('r',r).attr('fill',colors[i%colors.length]).attr('opacity',0.6)\r
      g.append('text').attr('x',M.left+4).attr('y',y(d.text)+y.bandwidth()/2+4).attr('fill','var(--text-secondary)').attr('font-size','10px').text(d.text)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};