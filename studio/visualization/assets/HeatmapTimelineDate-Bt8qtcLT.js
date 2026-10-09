var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'heatmap-timeline-date',\r
  title: 'Heatmap Timeline Date',\r
  desc: 'Heatmap Timeline Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapTimelineDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-color"],\r
  tags: ["bars","heatmap-timeline-date"],\r
}\r
\r
export default function HeatmapTimelineDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const cols = 4\r
    const rows = Math.ceil(data.length/cols)\r
    const cellW = (W-M.left-M.right)/cols\r
    const cellH = (H-M.top-M.bottom)/rows\r
    const c = d3.scaleSequential(d3.interpolatePlasma).domain([d3.min(data,d=>d.value), d3.max(data,d=>d.value)])\r
    const g = svg.append('g').attr('transform','translate('+M.left+','+M.top+')')\r
    data.forEach((d,i)=>{\r
      const col=i%cols, row=Math.floor(i/cols)\r
      g.append('rect').attr('x',col*cellW+1).attr('y',row*cellH+1).attr('width',cellW-3).attr('height',cellH-3).attr('fill',c(d.value)).attr('rx',4)\r
      g.append('text').attr('x',col*cellW+cellW/2).attr('y',row*cellH+cellH/2+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','9px').text(d.value)\r
    })\r
    ;['W1','W2'].forEach((w,i)=> g.append('text').attr('x',-8).attr('y',i*cellH+cellH/2+3).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','8px').text(w))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};