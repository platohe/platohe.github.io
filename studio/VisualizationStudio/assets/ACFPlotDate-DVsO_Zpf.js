var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'acfplot-date',\r
  title: 'A C F Plot Date',\r
  desc: 'A C F Plot Date — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ACFPlotDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","a-c-f-plot-date"],\r
}\r
\r
export default function ACFPlotDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42}]\r
    const data = (customData && customData[0]?.date) ? customData : DEFAULT_DATA\r
    const lags=d3.range(12).map(i=>({lag:i,acf: Math.cos(i*0.6)*Math.exp(-i*0.15)}))\r
    const x=d3.scaleBand().domain(lags.map(d=>d.lag)).range([M.left,W-M.right]).padding(0.3)\r
    const y=d3.scaleLinear().domain([-1,1]).range([H-M.bottom,M.top])\r
    const g=svg.append('g')\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(0)).attr('y2',y(0)).attr('stroke','var(--border)')\r
    g.selectAll('line.bar').data(lags).join('line').attr('x1',d=>x(d.lag)+x.bandwidth()/2).attr('x2',d=>x(d.lag)+x.bandwidth()/2).attr('y1',y(0)).attr('y2',d=>y(d.acf)).attr('stroke',colors[0]).attr('stroke-width',x.bandwidth())\r
    const sig=1.96/Math.sqrt(50); g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(sig)).attr('y2',y(sig)).attr('stroke','#ef4444').attr('stroke-dasharray','3,3'); g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(-sig)).attr('y2',y(-sig)).attr('stroke','#ef4444').attr('stroke-dasharray','3,3')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};