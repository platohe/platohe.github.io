var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'spiral-bar-chart',\r
  title: 'Spiral Bar Chart',\r
  desc: 'Spiral Bar Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpiralBarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","spiral-bar-chart"],\r
}\r
\r
export default function SpiralBarChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=Array.from({length:24},(_,i)=>({label:\`\${i+1}\`, v: 12+ Math.random()*42 + (i%6===0?18:0)}))\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].v!=null?customData:DEFAULT\r
    const cx=200, cy=148, a0= -Math.PI*0.5\r
    const turns=1.8\r
    const r0=18, dr=3.2\r
    const g=svg.append('g')\r
    const maxV=d3.max(data,d=>d.v)||60\r
    data.forEach((d,i)=>{\r
      const t=i/data.length * turns * Math.PI*2 + a0\r
      const r=r0 + i*dr\r
      const h= (d.v/maxV)*14 + 4\r
      const x=cx+Math.cos(t)*r, y=cy+Math.sin(t)*r\r
      const x2=cx+Math.cos(t)*(r+h), y2=cy+Math.sin(t)*(r+h)\r
      g.append('line').attr('x1',x).attr('y1',y).attr('x2',x2).attr('y2',y2).attr('stroke',colors[i%colors.length]).attr('stroke-width',4).attr('stroke-linecap','round')\r
    })\r
    // spiral guide faint\r
    const spiral=d3.range(0, turns*Math.PI*2, 0.08).map(t=> [cx+Math.cos(t+a0)*(r0+ t/(turns*Math.PI*2)*data.length*dr), cy+Math.sin(t+a0)*(r0+ t/(turns*Math.PI*2)*data.length*dr)])\r
    g.append('path').attr('d',d3.line()(spiral)).attr('fill','none').attr('stroke','var(--border)').attr('stroke-width',0.6).attr('opacity',0.22)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Spiral Bar Chart')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};