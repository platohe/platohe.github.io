var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'arc-bar-chart',\r
  title: 'Arc Bar Chart',\r
  desc: 'Arc Bar Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ArcBarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","arc-bar-chart"],\r
}\r
\r
export default function ArcBarChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'A',v:82},{label:'B',v:64},{label:'C',v:48},{label:'D',v:36},{label:'E',v:22},{label:'F',v:12}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].v!=null?customData:DEFAULT\r
    const cx=200, cy=168, r0=28, band=14\r
    const angle=d3.scaleLinear().domain([0,100]).range([ -Math.PI*0.82, Math.PI*0.82 ])\r
    const g=svg.append('g')\r
    g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',r0-8).attr('fill','var(--bg)').attr('stroke','var(--border)')\r
    g.append('text').attr('x',cx).attr('y',cy-2).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',700).text('Arc Bars')\r
    g.append('text').attr('x',cx).attr('y',cy+10).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('radial')\r
    data.forEach((d,i)=>{\r
      const r=r0+i*band\r
      const arc=d3.arc().innerRadius(r).outerRadius(r+10).startAngle(angle(0)).endAngle(angle(d.v)).cornerRadius(3)\r
      g.append('path').attr('d',arc).attr('transform',\`translate(\${cx},\${cy})\`).attr('fill',colors[i%colors.length]).attr('stroke','var(--bg)').attr('stroke-width',0.8)\r
      const a=angle(d.v), x=cx+Math.sin(a)*(r+6), y=cy-Math.cos(a)*(r+6)\r
      g.append('text').attr('x',x + (Math.sin(a)>0?4:-4)).attr('y',y+3).attr('text-anchor',Math.sin(a)>0?'start':'end').attr('fill','var(--text-secondary)').attr('font-size','6px').text(\`\${d.label} \${d.v}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Arc Bar Chart')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};