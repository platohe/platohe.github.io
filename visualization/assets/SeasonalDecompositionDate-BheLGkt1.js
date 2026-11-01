var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'seasonal-decomposition-date',\r
  title: 'Seasonal Decomposition Date',\r
  desc: 'Seasonal Decomposition Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SeasonalDecompositionDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","seasonal-decomposition-date"],\r
}\r
\r
export default function SeasonalDecompositionDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map((d,i)=>({ i, date: parse(d.date), value: d.value }))\r
    const plotTop = M.top, panelH = (H-M.top-M.bottom)/3\r
    const x = d3.scaleLinear().domain([0, pts.length-1]).range([M.left, W-M.right])\r
    const g = svg.append('g')\r
    ;['Trend','Seasonal','Residual'].forEach((t,i)=>{\r
      g.append('text').attr('x', M.left).attr('y', plotTop+i*panelH+12).attr('fill','var(--text-secondary)').attr('font-size','9px').text(t)\r
      if(i>0) g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',plotTop+i*panelH).attr('y2',plotTop+i*panelH).attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
    })\r
    const ma = pts.map((p,i)=>({ i:p.i, v: d3.mean(pts.slice(Math.max(0,i-1), i+2), d=>d.value) }))\r
    const yT = d3.scaleLinear().domain([0, d3.max(pts,d=>d.value)*1.15]).range([plotTop+panelH-8, plotTop+18])\r
    g.append('path').datum(ma.filter(d=>d.v!=null)).attr('d', d3.line().x(d=>x(d.i)).y(d=>yT(d.v)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2)\r
    const yS = d3.scaleLinear().domain([-1,1]).range([plotTop+2*panelH-8, plotTop+panelH+18])\r
    const seas = pts.map(p=>({ i:p.i, v: Math.sin(p.i*1.6)*0.85 }))\r
    g.append('path').datum(seas).attr('d', d3.line().x(d=>x(d.i)).y(d=>yS(d.v)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-width',2)\r
    const res = pts.map((p,i)=>({ i:p.i, r: p.value - (ma[i].v==null?p.value:ma[i].v) }))\r
    const rMax = Math.max(3, d3.max(res,d=>Math.abs(d.r)))\r
    const yR = d3.scaleLinear().domain([-rMax,rMax]).range([H-M.bottom-8, plotTop+2*panelH+18])\r
    res.forEach(p=>{\r
      if(p.r==null) return\r
      g.append('rect').attr('x',x(p.i)-3).attr('y',Math.min(yR(p.r),yR(0))).attr('width',6).attr('height',Math.max(1,Math.abs(yR(p.r)-yR(0)))).attr('fill', p.r>=0?colors[2]:colors[3]).attr('opacity',0.75)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};