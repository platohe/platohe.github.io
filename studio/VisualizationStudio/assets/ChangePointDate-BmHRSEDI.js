var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'change-point-date',\r
  title: 'Change Point Date',\r
  desc: 'Change Point Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ChangePointDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","change-point-date"],\r
}\r
\r
export default function ChangePointDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const seg = Math.max(2, Math.floor(n/3))\r
    const bounds = [seg, 2*seg].filter(b=>b<n)\r
    const x = d3.scaleLinear().domain([0,n-1]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0, d3.max(data,d=>d.value)*1.2]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.append('path').datum(data).attr('d', d3.area().x((d,i)=>x(i)).y0(y(0)).y1(d=>y(d.value)).curve(d3.curveMonotoneX)).attr('fill',colors[0]).attr('opacity',0.12)\r
    const segs = [[0,bounds[0]||n],[bounds[0]||n,bounds[1]||n],[bounds[1]||n,n]]\r
    segs.forEach(([a,b],i)=>{\r
      if(b<=a) return\r
      const slice = data.slice(a,b)\r
      if(!slice.length) return\r
      const m = d3.mean(slice,d=>d.value)\r
      g.append('line').attr('x1',x(a)).attr('x2',x(b-1)).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i%colors.length]).attr('stroke-width',2.5)\r
    })\r
    bounds.forEach(b=> g.append('line').attr('x1',x(b-0.5)).attr('x2',x(b-0.5)).attr('y1',M.top).attr('y2',H-M.bottom).attr('stroke','#ef4444').attr('stroke-dasharray','4,4'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};