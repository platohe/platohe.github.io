var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'waterfall-bridge',\r
  title: 'Waterfall Bridge',\r
  desc: 'Waterfall Bridge — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WaterfallBridge',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","waterfall-bridge"],\r
}\r
\r
export default function WaterfallBridge({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Q1',v:42},{label:'Q2',v:18},{label:'Q3',v:-9},{label:'Q4',v:24},{label:'Total',v:75, isTotal:true}]\r
    // Editor/default data may arrive as {value} instead of {v} or with non-numeric values;\r
    // coerce to finite numbers and fall back to the synthetic series when nothing is usable.\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const raw0=Array.isArray(customData)&&customData.length?customData:[]\r
    const raw=raw0.map(d=>{\r
      if(!d||typeof d!=='object')return null\r
      const label=d.label??d.cat??d.name; if(label==null)return null\r
      const v=toNum(d.v??d.value); if(v===null)return null\r
      return {...d, label:String(label), v, isTotal:!!d.isTotal}\r
    }).filter(Boolean)\r
    if(!raw.length){raw.push(...DEFAULT)}\r
    const data=[]; let cum=0\r
    raw.forEach(d=>{\r
      if(d.isTotal){ data.push({...d, y0:0,y1:d.v}); cum=d.v }\r
      else { const y0=cum, y1=cum+d.v; data.push({...d, y0,y1}); cum=y1 }\r
    })\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(data.map(d=>d.label)).range([0,width]).padding(0.18)\r
    const yMax=d3.max(data,d=>Math.max(d.y0,d.y1))\r
    const y=d3.scaleLinear().domain([0,(yMax!=null?yMax*1.08:80)]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const safeY=v=>{const yy=y(v);return Number.isFinite(yy)?yy:height}\r
\r
    const safeX=v=>{const xx=x(v);return Number.isFinite(xx)?xx:0}\r
\r
    data.forEach(d=>{\r
      const col=d.isTotal?'#0f172a': (d.y1>=d.y0?'#22c55e':'#ef4444')\r
      g.append('rect').attr('x',safeX(d.label)??0).attr('y',safeY(Math.max(d.y0,d.y1))).attr('width',x.bandwidth()).attr('height',Math.max(0, Math.abs(safeY(d.y0)-safeY(d.y1)))).attr('fill',col).attr('rx',3).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',(safeX(d.label)??0)+x.bandwidth()/2).attr('y',safeY(Math.max(d.y0,d.y1))-4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(d.isTotal?d.v: (d.y1-d.y0>0?\`+\${d.y1-d.y0}\`:d.y1-d.y0))\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Waterfall Bridge')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};