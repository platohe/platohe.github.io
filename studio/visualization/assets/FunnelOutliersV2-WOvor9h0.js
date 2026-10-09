var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'funnel-outliers-v2',\r
  title: 'Funnel Outliers V2',\r
  desc: 'Funnel Outliers V2 — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelOutliersV2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-outliers-v2"],\r
}\r
\r
export default function FunnelOutliersV2({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{stage:'Visit',v:1000},{stage:'Signup',v:620},{stage:'Trial',v:380},{stage:'Purchase',v:96}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].stage?customData:DEFAULT\r
    const vals=data.map(d=>d.v)\r
    const q1=d3.quantile(vals,0.25)||0, q3=d3.quantile(vals,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
    const margin={top:28,right:14,bottom:14,left:14}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||1000]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.stage)).range([0,height]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    data.forEach((d,i)=>{\r
      const isOut=d.v<lo||d.v>hi\r
      g.append('rect').attr('x',0).attr('y',y(d.stage)??0).attr('width',x(d.v)).attr('height',y.bandwidth()).attr('fill',isOut?'#ef4444':d3.interpolateBlues(0.32+i*0.18)).attr('fill-opacity',isOut?0.92:1).attr('stroke','var(--bg)').attr('rx',3)\r
      g.append('text').attr('x',x(d.v)+4).attr('y',(y(d.stage)??0)+y.bandwidth()/2+3).attr('fill',isOut?'#ef4444':'var(--text-secondary)').attr('font-size','7px').text(\`\${d.v}\${isOut?' outlier':''}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Funnel Outliers V2')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};