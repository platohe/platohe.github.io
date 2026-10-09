var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'corrgram',\r
  title: 'Corrgram',\r
  desc: 'Corrgram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Corrgram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","corrgram"],\r
}\r
\r
export default function Corrgram({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const vars=['A','B','C','D','E']\r
    const gen=()=>{ const m=new Map(); vars.forEach((a,i)=> vars.forEach((b,j)=>{ if(i===j) m.set(\`\${a}-\${b}\`,1); else if(i<j){ const v=(Math.random()*1.6-0.8); m.set(\`\${a}-\${b}\`,v); m.set(\`\${b}-\${a}\`,v) } })); return m }\r
    const mat=customData&&customData.get?customData:gen()\r
    const get=(a,b)=> mat.get(\`\${a}-\${b}\`)??0\r
    const margin={top:28,right:46,bottom:12,left:36}\r
    const n=vars.length, cell=46\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const angle=d3.scaleLinear().domain([-1,1]).range([-45,45])\r
    const color=d3.scaleLinear().domain([-1,0,1]).range(['#3b82f6','#f8fafc','#ef4444'])\r
    vars.forEach((r,i)=> vars.forEach((c,j)=>{\r
      const v=get(c,r)\r
      const x=j*cell, y=i*cell\r
      g.append('rect').attr('x',x).attr('y',y).attr('width',cell-1).attr('height',cell-1).attr('fill','var(--bg)').attr('stroke','var(--border)').attr('rx',3)\r
      if(i===j){ g.append('text').attr('x',x+cell/2).attr('y',y+cell/2+3).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',700).text(r) }\r
      else {\r
        const cx=x+cell/2, cy=y+cell/2, len=18\r
        const a=angle(v)\r
        g.append('ellipse').attr('cx',cx).attr('cy',cy).attr('rx',len).attr('ry',Math.max(3, len*(1-Math.abs(v)*0.7))).attr('transform',\`rotate(\${a} \${cx} \${cy})\`).attr('fill',color(v)).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
        if(Math.abs(v)>0.42) g.append('text').attr('x',cx).attr('y',cy+2).attr('text-anchor','middle').attr('fill',Math.abs(v)>0.6?'#fff':'var(--text)').attr('font-size','5px').text(v.toFixed(2))\r
      }\r
    }))\r
    // var labels\r
    vars.forEach((v,i)=>{\r
      g.append('text').attr('x',i*cell+cell/2).attr('y',-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text(v)\r
      g.append('text').attr('x',-6).attr('y',i*cell+cell/2+3).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','7px').text(v)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Corrgram')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};