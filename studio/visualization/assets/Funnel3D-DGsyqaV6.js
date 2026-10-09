var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'funnel3d',\r
  title: 'Funnel3 D',\r
  desc: 'Funnel3 D — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'Funnel3D',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel3-d"],\r
}\r
\r
export default function Funnel3D({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{stage:'Visit',v:1000},{stage:'Signup',v:620},{stage:'Trial',v:380},{stage:'Purchase',v:210},{stage:'Renew',v:140}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].stage?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:22,left:14}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||1000]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.stage)).range([0,height]).padding(0.12)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const h=y.bandwidth()\r
    data.forEach((d,i)=>{\r
      const next=data[i+1]\r
      const w0=x(d.v), w1=next? x(next.v): x(d.v)*0.62\r
      const y0=y(d.stage)??0, y1=y0+h\r
      const cx=width/2\r
      const path=\`M\${cx-w0/2},\${y0} L\${cx+w0/2},\${y0} L\${cx+w1/2},\${y1} L\${cx-w1/2},\${y1}Z\`\r
      const col=d3.interpolateBlues(0.35 + i*0.13)\r
      g.append('path').attr('d',path).attr('fill',col).attr('stroke','var(--bg)').attr('stroke-width',1)\r
      g.append('text').attr('x',cx).attr('y',y0+h/2+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').attr('font-weight',700).text(\`\${d.stage} \${d.v}\`)\r
      if(next){\r
        const rate=Math.round(next.v/d.v*100)\r
        g.append('text').attr('x',cx+w0/2+6).attr('y',y0+h/2+3).attr('fill','var(--text-secondary)').attr('font-size','6px').text(\`\${rate}%\`)\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Funnel 3D')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};