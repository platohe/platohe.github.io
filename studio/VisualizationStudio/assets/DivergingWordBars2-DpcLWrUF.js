var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'diverging-word-bars2',\r
  title: 'Diverging Word Bars2',\r
  desc: 'Diverging Word Bars2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingWordBars2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","diverging-word-bars2"],\r
}\r
\r
export default function DivergingWordBars2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Viz","size":36},{"text":"Design","size":22}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const y = d3.scaleBand().domain(data.map(d=>d.text)).range([M.top,H-M.bottom]).padding(0.3)\r
    const x = d3.scaleLinear().domain([-50,50]).range([M.left,W-M.right])\r
    const g = svg.append('g')\r
    g.append('line').attr('x1',x(0)).attr('x2',x(0)).attr('y1',M.top).attr('y2',H-M.bottom).attr('stroke','var(--border)')\r
    data.forEach(d=>{\r
      const v = d.size-30\r
      g.append('rect').attr('x', v<0?x(v):x(0)).attr('y',y(d.text)).attr('width',Math.abs(x(v)-x(0))).attr('height',y.bandwidth()).attr('fill', v<0?colors[1]:colors[0])\r
      g.append('text').attr('x',W/2).attr('y',y(d.text)+y.bandwidth()/2+4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','10px').text(d.text)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};