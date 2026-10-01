var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'mosaic-with-residual',\r
  title: 'Mosaic With Residual',\r
  desc: 'Mosaic With Residual — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MosaicWithResidual',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","mosaic-with-residual"],\r
}\r
\r
export default function MosaicWithResidual({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{x:'A',y:'X',n:34},{x:'A',y:'Y',n:18},{x:'A',y:'Z',n:12},{x:'B',y:'X',n:22},{x:'B',y:'Y',n:28},{x:'B',y:'Z',n:16},{x:'C',y:'X',n:14},{x:'C',y:'Y',n:20},{x:'C',y:'Z',n:30}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].n!=null?customData:DEFAULT\r
    const xs=['A','B','C'], ys=['X','Y','Z']\r
    const total=d3.sum(data,d=>d.n)\r
    const colSums=new Map(xs.map(x=>[x, d3.sum(data.filter(d=>d.x===x),d=>d.n)]))\r
    const margin={top:28,right:46,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const xScale=d3.scaleLinear().domain([0,total]).range([0,width])\r
    // compute expected = rowSum*colSum/total, residual = (obs-exp)/sqrt(exp)\r
    const rowSums=new Map(ys.map(y=>[y, d3.sum(data.filter(d=>d.y===y),d=>d.n)]))\r
    const maxAbs=d3.max(data,d=> Math.abs((d.n - (rowSums.get(d.y)*colSums.get(d.x)/total))/Math.sqrt(rowSums.get(d.y)*colSums.get(d.x)/total)) )||1\r
    const color=d3.scaleLinear().domain([-maxAbs,0,maxAbs]).range(['#3b82f6','#f8fafc','#ef4444'])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    let xOff=0\r
    xs.forEach(xv=>{\r
      const w=xScale(colSums.get(xv))-xScale(0)\r
      let yOff=0\r
      ys.forEach(yv=>{\r
        const d=data.find(e=>e.x===xv&&e.y===yv)\r
        const h= d.n/colSums.get(xv)*height\r
        const exp=rowSums.get(yv)*colSums.get(xv)/total\r
        const resid=(d.n-exp)/Math.sqrt(exp)\r
        g.append('rect').attr('x',xOff).attr('y',yOff).attr('width',w).attr('height',h).attr('fill',color(resid)).attr('stroke','var(--bg)').attr('stroke-width',1)\r
        if(h>14) g.append('text').attr('x',xOff+w/2).attr('y',yOff+h/2+3).attr('text-anchor','middle').attr('fill',Math.abs(resid)>maxAbs*0.5?'#fff':'var(--text)').attr('font-size','6px').text(d.n)\r
        yOff+=h\r
      })\r
      g.append('text').attr('x',xOff+w/2).attr('y',height+12).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600).text(xv)\r
      xOff+=w\r
    })\r
    // legend\r
    const legW=46, legH=6\r
    const grad=svg.append('defs').append('linearGradient').attr('id','mosaicGrad').attr('x1','0%').attr('x2','100%')\r
    grad.append('stop').attr('offset','0%').attr('stop-color','#3b82f6')\r
    grad.append('stop').attr('offset','50%').attr('stop-color','#f8fafc')\r
    grad.append('stop').attr('offset','100%').attr('stop-color','#ef4444')\r
    svg.append('rect').attr('x',W-60).attr('y',8).attr('width',legW).attr('height',legH).attr('fill','url(#mosaicGrad)').attr('stroke','var(--border)').attr('rx',2)\r
    svg.append('text').attr('x',W-60).attr('y',7).attr('fill','var(--text-secondary)').attr('font-size','6px').text('-res')\r
    svg.append('text').attr('x',W-14).attr('y',7).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','6px').text('+res')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Mosaic with Residuals')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};