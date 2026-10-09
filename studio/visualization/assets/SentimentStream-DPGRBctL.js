var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'sentiment-stream',\r
  title: 'Sentiment Stream',\r
  desc: 'Sentiment Stream — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SentimentStream',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sentiment-stream"],\r
}\r
\r
export default function SentimentStream({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const series = [[10,20,15,25,18],[8,12,20,14,22],[5,9,11,8,13]]\r
    const x = d3.scaleLinear().domain([0,4]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0,50]).range([H-M.bottom,M.top])\r
    const stack = d3.stack().keys([0,1,2])(d3.transpose(series))\r
    const area = d3.area().x((d,i)=>x(i)).y0(d=>y(d[0])).y1(d=>y(d[1])).curve(d3.curveBasis)\r
    const g = svg.append('g')\r
    stack.forEach((s,i)=> g.append('path').datum(s).attr('d',area).attr('fill',colors[i%colors.length]).attr('opacity',0.7))\r
    data.slice(0,3).forEach((d,i)=> g.append('text').attr('x',W/2).attr('y',M.top+i*18).attr('text-anchor','middle').attr('fill',colors[i%colors.length]).attr('font-weight',600).text(d.text))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};