var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'horizon-with-annotation',\r
  title: 'Horizon With Annotation',\r
  desc: 'Horizon With Annotation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonWithAnnotation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-with-annotation"],\r
}\r
\r
export default function HorizonWithAnnotation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const n=70\r
    const gen = () => [{"x":0,"y":10.506},{"x":1,"y":14.618},{"x":2,"y":20.934},{"x":3,"y":23.383},{"x":4,"y":23.048},{"x":5,"y":25.519},{"x":6,"y":23.434},{"x":7,"y":22.848},{"x":8,"y":20.302},{"x":9,"y":13.402},{"x":10,"y":6.479},{"x":11,"y":3.326},{"x":12,"y":-3.761},{"x":13,"y":-12.036},{"x":14,"y":-17.947},{"x":15,"y":-20.733},{"x":16,"y":-22.787},{"x":17,"y":-24.664},{"x":18,"y":-27.653},{"x":19,"y":-23.787},{"x":20,"y":-19.098},{"x":21,"y":-19.104},{"x":22,"y":-11.731},{"x":23,"y":-9.5},{"x":24,"y":-3.313},{"x":25,"y":0.27},{"x":26,"y":4.76},{"x":27,"y":10.615},{"x":28,"y":11.03},{"x":29,"y":8.932},{"x":30,"y":8.845},{"x":31,"y":10.276},{"x":32,"y":5.704},{"x":33,"y":3.93},{"x":34,"y":-2.138},{"x":35,"y":-4.982},{"x":36,"y":-10.063},{"x":37,"y":-12.221},{"x":38,"y":-10.882},{"x":39,"y":-10.666},{"x":40,"y":-11.144},{"x":41,"y":-6.64},{"x":42,"y":-5.246},{"x":43,"y":-0.369},{"x":44,"y":6.727},{"x":45,"y":12.397},{"x":46,"y":15.471},{"x":47,"y":18.152},{"x":48,"y":21.782},{"x":49,"y":23.803},{"x":50,"y":23.243},{"x":51,"y":25.164},{"x":52,"y":22.748},{"x":53,"y":18.905},{"x":54,"y":15.021},{"x":55,"y":4.93},{"x":56,"y":2.862},{"x":57,"y":-6.09},{"x":58,"y":-9.549},{"x":59,"y":-18.825},{"x":60,"y":-23.114},{"x":61,"y":-26.401},{"x":62,"y":-25.991},{"x":63,"y":-25.156},{"x":64,"y":-22.804},{"x":65,"y":-18.366},{"x":66,"y":-18.443},{"x":67,"y":-10.502},{"x":68,"y":-4.373},{"x":69,"y":-2.674}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].y!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,n-1]).range([0,width])\r
    const y=d3.scaleLinear().domain([-32,32]).range([height,0])\r
    const mid=y(0)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    // bands\r
    const bands=[8,16,32]\r
    const cols=['#bfdbfe','#60a5fa','#2563eb']\r
    bands.forEach((thr,i)=>{\r
      const area=d3.area().x(d=>x(d.x)).y0(d=>y(Math.max(0, Math.min(thr, d.y - (i?bands[i-1]:0))))).y1(d=>y(0)).curve(d3.curveBasis)\r
      // actually simple horizon: clip to band\r
      g.append('path').datum(data.filter(d=>d.y>0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.min(d.y, thr))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.72 - i*0.14)\r
    })\r
    // negative mirrored\r
    bands.forEach((thr,i)=>{\r
      g.append('path').datum(data.filter(d=>d.y<0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.max(-thr, d.y))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.48)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',mid).attr('y2',mid).attr('stroke','var(--border)')\r
    // annotations at peaks\r
    const peaks=[12,34,52]\r
    peaks.forEach(idx=>{\r
      const d=data[idx]\r
      g.append('line').attr('x1',x(d.x)).attr('x2',x(d.x)).attr('y1',y(d.y)-14).attr('y2',y(d.y)-4).attr('stroke','#0f172a').attr('stroke-width',1)\r
      g.append('text').attr('x',x(d.x)).attr('y',y(d.y)-16).attr('text-anchor','middle').attr('fill','#0f172a').attr('font-size','6px').attr('font-weight',700).text('peak')\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Horizon with Annotation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};