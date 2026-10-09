var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'difference-area-multi',\r
  title: 'Difference Area Multi',\r
  desc: 'Difference Area Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DifferenceAreaMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","difference-area-multi"],\r
}\r
\r
export default function DifferenceAreaMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [{"x":0,"a":45.607,"b":50.241},{"x":1,"a":50.984,"b":51.108},{"x":2,"a":50.485,"b":49.68},{"x":3,"a":54.064,"b":49.024},{"x":4,"a":59.794,"b":46.733},{"x":5,"a":57.296,"b":46.946},{"x":6,"a":60.391,"b":42.017},{"x":7,"a":56.136,"b":40.812},{"x":8,"a":57.1,"b":39.172},{"x":9,"a":50.176,"b":36.375},{"x":10,"a":51.714,"b":32.371},{"x":11,"a":46.416,"b":30.65},{"x":12,"a":40.568,"b":29.541},{"x":13,"a":36.422,"b":32.312},{"x":14,"a":35.352,"b":28.155},{"x":15,"a":30.836,"b":32.339},{"x":16,"a":31.303,"b":32.753},{"x":17,"a":29.933,"b":31.987},{"x":18,"a":28.969,"b":31.423},{"x":19,"a":33.845,"b":35.908},{"x":20,"a":34.633,"b":38.155},{"x":21,"a":37.764,"b":38.596},{"x":22,"a":44.711,"b":43.566},{"x":23,"a":47.234,"b":42.427},{"x":24,"a":49.628,"b":44.841},{"x":25,"a":51.646,"b":48.386},{"x":26,"a":57.841,"b":49.921},{"x":27,"a":60.966,"b":47.857},{"x":28,"a":61.661,"b":50.08},{"x":29,"a":61.161,"b":48.64},{"x":30,"a":54.63,"b":47.582},{"x":31,"a":53.652,"b":49.002}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].a!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(data,d=>d.x)).range([0,width])\r
    const y=d3.scaleLinear().domain([d3.min(data,d=>Math.min(d.a,d.b))*0.92, d3.max(data,d=>Math.max(d.a,d.b))*1.08]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const areaPos=d3.area().x(d=>x(d.x)).y0(d=>y(d.a)).y1(d=>y(d.b)).curve(d3.curveBasis)\r
    const areaNeg=d3.area().x(d=>x(d.x)).y0(d=>y(d.b)).y1(d=>y(d.a)).curve(d3.curveBasis)\r
    // split by which is on top\r
    const posData=data.filter(d=>d.b>=d.a)\r
    const negData=data.filter(d=>d.b<d.a)\r
    // simpler: two areas with clip\r
    g.append('path').datum(data).attr('d', d3.area().x(d=>x(d.x)).y0(d=>y(Math.min(d.a,d.b))).y1(d=>y(Math.max(d.a,d.b))).curve(d3.curveBasis)).attr('fill','#94a3b8').attr('fill-opacity',0.18)\r
    // highlight pos where b>a in green, neg in red via overlay\r
    g.append('path').datum(data).attr('d', d3.line().x(d=>x(d.x)).y(d=>y(d.a)).curve(d3.curveBasis)).attr('fill','none').attr('stroke','#3b82f6').attr('stroke-width',1.6)\r
    g.append('path').datum(data).attr('d', d3.line().x(d=>x(d.x)).y(d=>y(d.b)).curve(d3.curveBasis)).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Difference Area Multi')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};