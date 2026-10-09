var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'waterfall-with-deviation',\r
  title: 'Waterfall With Deviation',\r
  desc: 'Waterfall With Deviation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WaterfallWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","waterfall-with-deviation"],\r
}\r
\r
export default function WaterfallWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Start',v:100,dev:0},{label:'Sales',v:28,dev:4},{label:'Refund',v:-10,dev:-2},{label:'Costs',v:-16,dev:3},{label:'Profit',v:102, dev:5, isTotal:true}]\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const raw0=Array.isArray(customData)&&customData.length?customData:[]\r
    const raw=raw0.flatMap(d=>{\r
      if(!d||typeof d!=='object')return []\r
      const label=d.label??d.cat??d.name; if(label==null)return []\r
      const v=toNum(d.v??d.value); if(v===null)return []\r
      const dev=toNum(d.dev??d.deviation)??0\r
      return [{label:String(label), v, dev, isTotal:!!d.isTotal}]\r
    })\r
    if(!raw.length) raw.push(...DEFAULT.map(d=>({label:d.label, v:d.v, dev:d.dev||0, isTotal:!!d.isTotal})))\r
    const data=[]; let cum=0\r
    raw.forEach(d=>{\r
      const v=Number.isFinite(d.v)?d.v:0\r
      if(d.isTotal){ data.push({...d, y0:0,y1:v}); cum=v }\r
      else { const y0=cum, y1=cum+v; data.push({...d, y0,y1}); cum=y1 }\r
    })\r
    const avg=Number.isFinite(d3.mean(raw.filter(d=>!d.isTotal),d=>d.v))? d3.mean(raw.filter(d=>!d.isTotal),d=>d.v):0\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(data.map(d=>d.label)).range([0,width]).padding(0.18)\r
    const yMaxRaw=d3.max(data,d=>Math.max(d.y0,d.y1))\r
    const yMax=Number.isFinite(yMaxRaw)? yMaxRaw*1.08:110\r
    const y=d3.scaleLinear().domain([0, yMax||110]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const safeY=v=>{const yy=y(v);return Number.isFinite(yy)?yy:height}\r
    const safeX=v=>{const xx=x(v);return Number.isFinite(xx)?xx:0}\r
    data.forEach(d=>{\r
      const col=d.isTotal?'#0f172a': (d.v>=0?'#22c55e':'#ef4444')\r
      const dev=Number.isFinite(d.dev)?d.dev:0\r
      const xPos=safeX(d.label)??0\r
      const bw=x.bandwidth(); const bwSafe=Number.isFinite(bw)?bw:0\r
      const yTop=safeY(Math.max(d.y0,d.y1))\r
      const h=Math.max(0, Math.abs(safeY(d.y0)-safeY(d.y1)))\r
      g.append('rect').attr('x',xPos).attr('y',yTop).attr('width',bwSafe).attr('height',h).attr('fill',col).attr('fill-opacity',Math.abs(dev)>3?0.82:0.52).attr('rx',3).attr('stroke','var(--bg)')\r
      if(!d.isTotal) g.append('text').attr('x',xPos+bwSafe/2).attr('y',yTop-4).attr('text-anchor','middle').attr('fill',col).attr('font-size','6px').text(\`\${dev>=0?'+':''}\${dev}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Waterfall with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};