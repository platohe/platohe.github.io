var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'anomaly-timeline',\r
  title: 'Anomaly Timeline',\r
  desc: 'Anomaly Timeline — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AnomalyTimeline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","anomaly-timeline"],\r
}\r
\r
export default function AnomalyTimeline({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ date: parse(d.date), value: d.value }))\r
    const mean = d3.mean(pts,d=>d.value), sd = d3.deviation(pts,d=>d.value)||1\r
    const x = d3.scaleTime().domain(d3.extent(pts,d=>d.date)).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([mean-3.5*sd, mean+3.5*sd]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.append('rect').attr('x',M.left).attr('y',y(mean+2*sd)).attr('width',W-M.left-M.right).attr('height',y(mean-2*sd)-y(mean+2*sd)).attr('fill','var(--border)').attr('opacity',0.15)\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(mean)).attr('y2',y(mean)).attr('stroke',colors[0]).attr('stroke-dasharray','4,3')\r
    pts.forEach(p=>{\r
      const z = Math.abs(p.value-mean)/sd\r
      g.append('circle').attr('cx',x(p.date)).attr('cy',y(p.value)).attr('r', z>2?5:3).attr('fill', z>2?'#ef4444':colors[0]).attr('stroke',z>2?'#fff':'none')\r
    })\r
    g.append('text').attr('x',M.left).attr('y',M.top-6).attr('fill','#ef4444').attr('font-size','9px').text('anomalies |z|>2')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};