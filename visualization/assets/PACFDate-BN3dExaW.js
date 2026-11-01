var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'pacfdate',\r
  title: 'P A C F Date',\r
  desc: 'P A C F Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PACFDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","p-a-c-f-date"],\r
}\r
\r
export default function PACFDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42}]\r
    const lags = d3.range(10).map(i=>({ lag:i, v: i===0?1 : Math.pow(-0.55, Math.ceil(i/2))*Math.exp(-i*0.22) }))\r
    const x = d3.scaleBand().domain(lags.map(d=>d.lag)).range([M.left,W-M.right]).padding(0.35)\r
    const y = d3.scaleLinear().domain([-1,1]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(0)).attr('y2',y(0)).attr('stroke','var(--border)')\r
    lags.forEach(L=>{\r
      const cx=x(L.lag)+x.bandwidth()/2\r
      const col=L.v>=0?colors[0]:colors[3]\r
      g.append('rect').attr('x',cx-9).attr('y',Math.min(y(L.v),y(0))).attr('width',18).attr('height',Math.max(1.5,Math.abs(y(L.v)-y(0)))).attr('fill',col).attr('rx',2)\r
      if(Math.abs(L.v)>0.25) g.append('text').attr('x',cx).attr('y',Math.min(y(L.v),y(0))-4).attr('text-anchor','middle').attr('fill',col).attr('font-size','7px').text(L.v.toFixed(2))\r
      g.append('text').attr('x',cx).attr('y',H-M.bottom+12).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','8px').text(L.lag)\r
    })\r
    g.append('text').attr('x',M.left).attr('y',M.top-6).attr('fill','var(--text-secondary)').attr('font-size','9px').text('Partial autocorrelation by lag')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};