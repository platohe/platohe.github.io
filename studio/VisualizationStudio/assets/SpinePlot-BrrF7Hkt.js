var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'spine-plot',\r
  title: 'Spine Plot',\r
  desc: 'Spine Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpinePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spine-plot"],\r
}\r
\r
export default function SpinePlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{x:'Low',y:'Fail',n:18},{x:'Low',y:'Pass',n:12},{x:'Med',y:'Fail',n:14},{x:'Med',y:'Pass',n:26},{x:'High',y:'Fail',n:6},{x:'High',y:'Pass',n:34}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].n!=null?customData:DEFAULT\r
    const xs=['Low','Med','High'], ys=['Fail','Pass']\r
    const total=d3.sum(data,d=>d.n)\r
    const colW=new Map(xs.map(x=>[x, d3.sum(data.filter(d=>d.x===x),d=>d.n)/total]))\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const color=d3.scaleOrdinal(['#ef4444','#22c55e']).domain(ys)\r
    let xOff=0\r
    xs.forEach(xv=>{\r
      const w=colW.get(xv)*width\r
      let yOff=0\r
      const colTotal=d3.sum(data.filter(d=>d.x===xv),d=>d.n)\r
      ys.forEach(yv=>{\r
        const d=data.find(e=>e.x===xv&&e.y===yv)\r
        const h=d.n/colTotal*height\r
        g.append('rect').attr('x',xOff).attr('y',yOff).attr('width',w).attr('height',h).attr('fill',color(yv)).attr('stroke','var(--bg)').attr('stroke-width',1)\r
        if(h>12) g.append('text').attr('x',xOff+w/2).attr('y',yOff+h/2+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','6px').attr('font-weight',600).text(\`\${d.n}\`)\r
        yOff+=h\r
      })\r
      g.append('text').attr('x',xOff+w/2).attr('y',height+12).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600).text(xv)\r
      xOff+=w\r
    })\r
    ys.forEach((y,i)=>{ g.append('rect').attr('x',width+8).attr('y',18+i*14).attr('width',8).attr('height',8).attr('fill',color(y)).attr('rx',2); g.append('text').attr('x',width+18).attr('y',25+i*14).attr('fill','var(--text-secondary)').attr('font-size','7px').text(y) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Spine Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};