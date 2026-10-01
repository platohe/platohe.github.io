var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'bullet-multi',\r
  title: 'Bullet Multi',\r
  desc: 'Bullet Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-multi"],\r
}\r
\r
export default function BulletMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Sales', v:68, target:74, ranges:[40,65,90]}, {label:'Profit',v:52,target:60, ranges:[30,55,85]}, {label:'CSAT',v:82,target:80, ranges:[50,75,100]}]\r
    // Editor/default data may arrive under field aliases ({actual}/{value} for {v}) or with\r
    // non-numeric values; coerce to finite numbers and fall back to the synthetic series.\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const normalized=Array.isArray(customData)?customData.flatMap(d=>{\r
      if(!d||typeof d!=='object')return []\r
      const v=toNum(d.v??d.actual??d.value); if(v===null)return []\r
      return {\r
        label:String(d.label??'Item'),\r
        v,\r
        target:toNum(d.target)??v,\r
        ranges:Array.isArray(d.ranges)?d.ranges.map(toNum).filter(x=>x!==null):[],\r
      }\r
    }):[]\r
    const data=normalized.length?normalized:DEFAULT\r
    const margin={top:28,right:14,bottom:14,left:66}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.label)).range([0,height]).padding(0.38)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    data.forEach(d=>{\r
      const yy=(y(d.label)??0)+y.bandwidth()/2\r
      const cols=['#e5e7eb','#cbd5e1','#94a3b8']\r
      d.ranges.forEach((r,i)=> g.append('rect').attr('x',i?x(d.ranges[i-1]):0).attr('y',yy-8).attr('width',x(r)-(i?x(d.ranges[i-1]):0)).attr('height',16).attr('fill',cols[i]).attr('rx',2))\r
      g.append('rect').attr('x',0).attr('y',yy-4).attr('width',x(d.v)).attr('height',8).attr('fill','#0f172a').attr('rx',2)\r
      g.append('line').attr('x1',x(d.target)).attr('x2',x(d.target)).attr('y1',yy-10).attr('y2',yy+10).attr('stroke','#ef4444').attr('stroke-width',1.6)\r
      g.append('text').attr('x',x(d.v)+4).attr('y',yy+3).attr('fill','var(--text-secondary)').attr('font-size','6px').text(d.v)\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bullet Multi')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};