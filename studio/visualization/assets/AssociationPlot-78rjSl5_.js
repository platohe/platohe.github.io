var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'association-plot',\r
  title: 'Association Plot',\r
  desc: 'Association Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AssociationPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","association-plot"],\r
}\r
\r
export default function AssociationPlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{x:'A',y:'X',n:34},{x:'A',y:'Y',n:18},{x:'A',y:'Z',n:12},{x:'B',y:'X',n:22},{x:'B',y:'Y',n:28},{x:'B',y:'Z',n:16},{x:'C',y:'X',n:14},{x:'C',y:'Y',n:20},{x:'C',y:'Z',n:30}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].n!=null?customData:DEFAULT\r
    const xs=['A','B','C'], ys=['X','Y','Z']\r
    const total=d3.sum(data,d=>d.n)\r
    const rowSums=new Map(ys.map(y=>[y, d3.sum(data.filter(d=>d.y===y),d=>d.n)]))\r
    const colSums=new Map(xs.map(x=>[x, d3.sum(data.filter(d=>d.x===x),d=>d.n)]))\r
    const maxR=d3.max(data,d=> Math.abs(d.n - rowSums.get(d.y)*colSums.get(d.x)/total)/Math.sqrt(rowSums.get(d.y)*colSums.get(d.x)/total))||1\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(xs).range([0,width]).padding(0.18)\r
    const y=d3.scaleBand().domain(ys).range([0,height]).padding(0.18)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    const rScale=d3.scaleSqrt().domain([0,maxR]).range([0, Math.min(x.bandwidth(), y.bandwidth())/2 -2])\r
    const color=d3.scaleLinear().domain([-maxR,0,maxR]).range(['#3b82f6','#f8fafc','#ef4444'])\r
    data.forEach(d=>{\r
      const exp=rowSums.get(d.y)*colSums.get(d.x)/total\r
      const resid=(d.n-exp)/Math.sqrt(exp)\r
      const cx=(x(d.x)??0)+x.bandwidth()/2, cy=(y(d.y)??0)+y.bandwidth()/2\r
      g.append('rect').attr('x',x(d.x)??0).attr('y',y(d.y)??0).attr('width',x.bandwidth()).attr('height',y.bandwidth()).attr('fill','var(--bg)').attr('stroke','var(--border)').attr('rx',4)\r
      g.append('rect').attr('x',cx - rScale(Math.abs(resid))).attr('y',cy - rScale(Math.abs(resid))).attr('width',rScale(Math.abs(resid))*2).attr('height',rScale(Math.abs(resid))*2).attr('fill',color(resid)).attr('stroke','var(--bg)')\r
      if(rScale(Math.abs(resid))>6) g.append('text').attr('x',cx).attr('y',cy+3).attr('text-anchor','middle').attr('fill',Math.abs(resid)>maxR*0.6?'#fff':'var(--text)').attr('font-size','6px').text(resid.toFixed(1))\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Association Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};