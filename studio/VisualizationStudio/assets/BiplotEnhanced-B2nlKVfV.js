var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'biplot-enhanced',\r
  title: 'Biplot Enhanced',\r
  desc: 'Biplot Enhanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BiplotEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","biplot-enhanced"],\r
}\r
\r
export default function BiplotEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const pts=Array.isArray(customData)&&customData.length&&customData[0].pc1!=null?customData:Array.from({length:48},()=>({pc1:(Math.random()-0.5)*6, pc2:(Math.random()-0.5)*6, group: Math.floor(Math.random()*3)}))\r
    const loads=[{var:'Var A', x:2.8,y:1.2},{var:'Var B', x:-2.2,y:2.4},{var:'Var C', x:1.6,y:-2.1},{var:'Var D', x:-1.4,y:-1.8}]\r
    const margin={top:28,right:46,bottom:24,left:40}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([-4,4]).range([0,width])\r
    const y=d3.scaleLinear().domain([-4,4]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    // confidence ellipse per group\r
    ;[0,1,2].forEach(gr=>{\r
      const vals=pts.filter(p=>p.group===gr)\r
      const mx=d3.mean(vals,d=>d.pc1)||0, my=d3.mean(vals,d=>d.pc2)||0\r
      const rx=1.9, ry=1.4\r
      g.append('ellipse').attr('cx',x(mx)).attr('cy',y(my)).attr('rx',rx*22).attr('ry',ry*22).attr('fill',colors[gr]).attr('fill-opacity',0.08).attr('stroke',colors[gr]).attr('stroke-width',0.9).attr('stroke-dasharray','3,2')\r
    })\r
    pts.forEach(p=> g.append('circle').attr('cx',x(p.pc1)).attr('cy',y(p.pc2)).attr('r',2.6).attr('fill',colors[p.group]).attr('opacity',0.82).attr('stroke','var(--bg)').attr('stroke-width',0.5))\r
    loads.forEach(l=>{\r
      g.append('line').attr('x1',x(0)).attr('y1',y(0)).attr('x2',x(l.x)).attr('y2',y(l.y)).attr('stroke','#0f172a').attr('stroke-width',1.6).attr('marker-end','url(#arrBi)')\r
      g.append('text').attr('x',x(l.x)+4).attr('y',y(l.y)-4).attr('fill','#0f172a').attr('font-size','7px').attr('font-weight',700).text(l.var)\r
    })\r
    svg.append('defs').append('marker').attr('id','arrBi').attr('viewBox','0 -5 10 10').attr('refX',8).attr('refY',0).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto').append('path').attr('d','M0,-5L10,0L0,5').attr('fill','#0f172a')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Biplot Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};