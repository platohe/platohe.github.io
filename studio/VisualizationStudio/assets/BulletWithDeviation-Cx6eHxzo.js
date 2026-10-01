var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'bullet-with-deviation',\r
  title: 'Bullet With Deviation',\r
  desc: 'Bullet With Deviation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-with-deviation"],\r
}\r
\r
export default function BulletWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Sales', v:68, dev:-4}, {label:'Profit',v:52, dev:6}, {label:'CSAT',v:82, dev:2}]\r
    // Editor/default data may arrive under field aliases ({actual}/{value} for {v}) or with\r
    // non-numeric values; coerce to finite numbers and fall back to the synthetic series.\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const normalized=Array.isArray(customData)?customData.flatMap(d=>{\r
      if(!d||typeof d!=='object')return []\r
      const v=toNum(d.v??d.actual??d.value); if(v===null)return []\r
      return [{ label:String(d.label??'Item'), v, dev:toNum(d.dev)??0 }]\r
    }):[]\r
    const data=normalized.length?normalized:DEFAULT\r
    const margin={top:28,right:14,bottom:14,left:66}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.label)).range([0,height]).padding(0.38)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    data.forEach(d=>{\r
      const yy=(y(d.label)??0)+y.bandwidth()/2\r
      g.append('rect').attr('x',0).attr('y',yy-10).attr('width',x(100)).attr('height',20).attr('fill','#e5e7eb').attr('rx',2)\r
      g.append('rect').attr('x',0).attr('y',yy-4).attr('width',x(d.v)).attr('height',8).attr('fill',d.dev>=0?'#22c55e':'#ef4444').attr('fill-opacity',d.dev>=0?0.82:0.62).attr('rx',2)\r
      g.append('text').attr('x',x(d.v)+4).attr('y',yy+3).attr('fill',d.dev>=0?'#22c55e':'#ef4444').attr('font-size','7px').text(\`\${d.dev>=0?'+':''}\${d.dev}\`)\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bullet with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};