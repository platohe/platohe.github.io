var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'cycle-plot-date',\r
  title: 'Cycle Plot Date',\r
  desc: 'Cycle Plot Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CyclePlotDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cycle-plot-date"],\r
}\r
\r
export default function CyclePlotDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const cl = 3\r
    const cyc = Math.ceil(data.length/cl)\r
    const slotW = (W-M.left-M.right)/cyc\r
    const y = d3.scaleLinear().domain([0, d3.max(data,d=>d.value)*1.2]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    for(let c=0;c<cyc;c++){\r
      const sub = data.slice(c*cl,(c+1)*cl)\r
      if(!sub.length) continue\r
      const x0 = M.left+c*slotW\r
      const lx = d3.scaleLinear().domain([0,Math.max(1,sub.length-1)]).range([x0+6,x0+slotW*0.82])\r
      g.append('path').datum(sub).attr('d', d3.line().x((d,i)=>lx(i)).y(d=>y(d.value)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[c%colors.length]).attr('stroke-width',1.8)\r
      sub.forEach((d,i)=> g.append('circle').attr('cx',lx(i)).attr('cy',y(d.value)).attr('r',2.5).attr('fill',colors[c%colors.length]))\r
      const m = d3.mean(sub,d=>d.value)\r
      g.append('line').attr('x1',x0).attr('x2',x0+slotW*0.82).attr('y1',y(m)).attr('y2',y(m)).attr('stroke','var(--border)').attr('stroke-width',2)\r
      g.append('text').attr('x',x0+slotW*0.41).attr('y',H-M.bottom+12).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','8px').text('C'+(c+1))\r
      if(c>0) g.append('line').attr('x1',x0).attr('x2',x0).attr('y1',M.top).attr('y2',H-M.bottom).attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
    }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};