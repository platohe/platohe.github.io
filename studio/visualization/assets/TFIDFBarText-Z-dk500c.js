var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'tfidfbar-text',\r
  title: 'T F I D F Bar Text',\r
  desc: 'T F I D F Bar Text — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TFIDFBarText',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","t-f-i-d-f-bar-text"],\r
}\r
\r
export default function TFIDFBarText({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28},{"text":"Chart","size":22}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const y = d3.scaleBand().domain(data.map(d=>d.text)).range([M.top,H-M.bottom]).padding(0.25)\r
    const x = d3.scaleLinear().domain([0,50]).range([M.left,W-M.right])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform','translate('+M.left+',0)').call(d3.axisLeft(y).tickSize(0)).selectAll('text').attr('fill','var(--text-secondary)')\r
    data.forEach(d=>{\r
      g.append('rect').attr('x',x(0)).attr('y',y(d.text)).attr('width',x(d.size*0.9)-x(0)).attr('height',y.bandwidth()).attr('fill',colors[0]).attr('rx',3)\r
      g.append('text').attr('x',x(d.size*0.9)+6).attr('y',y(d.text)+y.bandwidth()/2+4).attr('fill','var(--text-secondary)').attr('font-size','10px').text(d.text)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};