var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// SpiralRadialBars: Perpendicular bar comb.\r
export const meta = {\r
  id: 'spiral-radial-bars',\r
  title: 'Spiral Radial Bars',\r
  desc: 'Spiral Radial Bars — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpiralRadialBars',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","spiral-radial-bars"],\r
}\r
\r
export default function SpiralRadialBars({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
for(let k=0;k<48;k++){ const t=k/48*4*Math.PI; const r=16+k*2.1; const h=6+((k*37)%23)\r
     const a=t; const x1=cx+Math.cos(a)*r,y1=cy+Math.sin(a)*r\r
     const x2=cx+Math.cos(a)*(r+h),y2=cy+Math.sin(a)*(r+h)\r
     g.append('line').attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2).attr('stroke',colors[k%colors.length]).attr('stroke-width',3.2).attr('stroke-linecap','round').attr('stroke-opacity',0.85) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};