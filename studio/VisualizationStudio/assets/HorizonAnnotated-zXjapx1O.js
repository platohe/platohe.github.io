var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'horizon-annotated',\r
  title: 'Horizon Annotated',\r
  desc: 'Horizon Annotated — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonAnnotated',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-annotated"],\r
}\r
\r
export default function HorizonAnnotated({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const n=60\r
    const gen = () => [{"x":0,"y":10.404},{"x":1,"y":14.754},{"x":2,"y":20.678},{"x":3,"y":23.145},{"x":4,"y":22.897},{"x":5,"y":24.353},{"x":6,"y":21.645},{"x":7,"y":19.723},{"x":8,"y":15.987},{"x":9,"y":8.74},{"x":10,"y":1.689},{"x":11,"y":-1.901},{"x":12,"y":-8.001},{"x":13,"y":-14.284},{"x":14,"y":-17.871},{"x":15,"y":-18.208},{"x":16,"y":-17.364},{"x":17,"y":-16.028},{"x":18,"y":-15.536},{"x":19,"y":-9.858},{"x":20,"y":-4.16},{"x":21,"y":-3.156},{"x":22,"y":2.587},{"x":23,"y":2.933},{"x":24,"y":5.166},{"x":25,"y":4.177},{"x":26,"y":3.039},{"x":27,"y":2.489},{"x":28,"y":-2.47},{"x":29,"y":-9.016},{"x":30,"y":-13.065},{"x":31,"y":-14.606},{"x":32,"y":-19.354},{"x":33,"y":-20.104},{"x":34,"y":-22.526},{"x":35,"y":-20.77},{"x":36,"y":-19.524},{"x":37,"y":-15.111},{"x":38,"y":-7.616},{"x":39,"y":-1.317},{"x":40,"y":3.56},{"x":41,"y":11.056},{"x":42,"y":14.322},{"x":43,"y":18.418},{"x":44,"y":22.305},{"x":45,"y":23.232},{"x":46,"y":20.617},{"x":47,"y":16.729},{"x":48,"y":13.255},{"x":49,"y":8.817},{"x":50,"y":3.294},{"x":51,"y":1.314},{"x":52,"y":-2.132},{"x":53,"y":-4.451},{"x":54,"y":-4.482},{"x":55,"y":-7.327},{"x":56,"y":-1.986},{"x":57,"y":-0.946},{"x":58,"y":4.996},{"x":59,"y":6.026}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].y!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,n-1]).range([0,width])\r
    const y=d3.scaleLinear().domain([-30,30]).range([height,0])\r
    const mid=y(0)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const bands=[10,20,30], cols=['#dbeafe','#93c5fd','#2563eb']\r
    bands.forEach((thr,i)=>{\r
      g.append('path').datum(data.filter(d=>d.y>0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.min(d.y, thr))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.72-i*0.14)\r
      g.append('path').datum(data.filter(d=>d.y<0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.max(-thr,d.y))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.42)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',mid).attr('y2',mid).attr('stroke','var(--border)')\r
    // annotations\r
    const peaks=[10,28,44]\r
    peaks.forEach(idx=>{\r
      const d=data[idx]\r
      g.append('circle').attr('cx',x(d.x)).attr('cy',y(d.y)).attr('r',2.4).attr('fill','#0f172a').attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x(d.x)).attr('y',y(d.y)-10).attr('text-anchor','middle').attr('fill','#0f172a').attr('font-size','6px').attr('font-weight',700).text(d.y>0?'↑':'↓')\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Horizon Annotated')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};