var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'funnel-performance',\r
  title: 'Funnel Performance',\r
  desc: 'Funnel Performance — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelPerformance',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-performance"],\r
}\r
\r
export default function FunnelPerformance({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{stage:'Lead',v:1000, t:12},{stage:'MQL',v:620, t:9},{stage:'SQL',v:380, t:14},{stage:'Won',v:210, t:21}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].stage?customData:DEFAULT\r
    const margin={top:28,right:46,bottom:14,left:14}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||1000]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.stage)).range([0,height]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    data.forEach((d,i)=>{\r
      const col=d3.interpolateBlues(0.32+i*0.18)\r
      g.append('rect').attr('x',0).attr('y',y(d.stage)??0).attr('width',x(d.v)).attr('height',y.bandwidth()).attr('fill',col).attr('stroke','var(--bg)').attr('rx',3)\r
      g.append('text').attr('x',x(d.v)+4).attr('y',(y(d.stage)??0)+y.bandwidth()/2+3).attr('fill','var(--text-secondary)').attr('font-size','7px').text(\`\${d.v} (\${d.t}d)\`)\r
      if(i>0){\r
        const prev=data[i-1]\r
        const rate=Math.round(d.v/prev.v*100)\r
        g.append('text').attr('x',x(prev.v)+4).attr('y',(y(prev.stage)??0)+y.bandwidth()+10).attr('fill','#94a3b8').attr('font-size','6px').text(\`\${rate}%\`)\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Funnel Performance')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};