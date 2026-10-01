var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'trend-band-date',\r
  title: 'Trend Band Date',\r
  desc: 'Trend Band Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TrendBandDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","trend-band-date"],\r
}\r
\r
export default function TrendBandDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map((d,i)=>({ i, date: parse(d.date), value: d.value }))\r
    const x = d3.scaleLinear().domain([0,pts.length-1]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0, d3.max(pts,d=>d.value)*1.25]).range([H-M.bottom,M.top])\r
    // least squares trend\r
    const n=pts.length; let sx=0,sy=0,sxx=0,sxy=0\r
    pts.forEach(p=>{ sx+=p.i; sy+=p.value; sxx+=p.i*p.i; sxy+=p.i*p.value })\r
    const slope=(n*sxy-sx*sy)/((n*sxx-sx*sx)||1), icept=(sy-slope*sx)/n\r
    const trend=pts.map(p=>icept+slope*p.i)\r
    const residMax=Math.max(...pts.map((p,i)=>Math.abs(p.value-trend[i])),2)\r
    const bandU=trend.map(v=>v+residMax), bandL=trend.map(v=>v-residMax)\r
    const g=svg.append('g')\r
    const bp=trend.map((v,i)=>[x(i),y(bandU[i]),y(bandL[i])])\r
    g.append('path').datum(bp).attr('d',d3.area().x(d=>d[0]).y0(d=>d[1]).y1(d=>d[2]).curve(d3.curveMonotoneX)).attr('fill',colors[1]).attr('opacity',0.15)\r
    g.append('path').datum(trend.map((v,i)=>[x(i),y(v)])).attr('d',d3.line().x(d=>d[0]).y(d=>d[1]).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-width',1.6).attr('stroke-dasharray','5,4')\r
    g.append('path').datum(pts).attr('d',d3.line().x(d=>x(d.i)).y(d=>y(d.value)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2.2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};