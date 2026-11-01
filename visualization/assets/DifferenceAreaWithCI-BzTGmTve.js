var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'difference-area-with-ci',\r
  title: 'Difference Area With C I',\r
  desc: 'Difference Area With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DifferenceAreaWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","difference-area-with-c-i"],\r
}\r
\r
export default function DifferenceAreaWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [{"x":0,"a":44.404,"b":49.793},{"x":1,"a":49.185,"b":50.392},{"x":2,"a":49.866,"b":48.976},{"x":3,"a":52.923,"b":48.017},{"x":4,"a":56.958,"b":45.624},{"x":5,"a":54.995,"b":45.152},{"x":6,"a":56.259,"b":40.532},{"x":7,"a":52.201,"b":38.913},{"x":8,"a":51.339,"b":37.021},{"x":9,"a":45.119,"b":34.326},{"x":10,"a":44.649,"b":30.831},{"x":11,"a":39.936,"b":29.358},{"x":12,"a":35.352,"b":28.587},{"x":13,"a":32.527,"b":31.137},{"x":14,"a":32.444,"b":28.346},{"x":15,"a":30.738,"b":32.403},{"x":16,"a":32.934,"b":33.577},{"x":17,"a":34.317,"b":33.889},{"x":18,"a":36.154,"b":34.382},{"x":19,"a":41.805,"b":38.869},{"x":20,"a":44.379,"b":41.458},{"x":21,"a":47.915,"b":42.432},{"x":22,"a":53.194,"b":46.811},{"x":23,"a":54.597,"b":46.043},{"x":24,"a":54.956,"b":47.834},{"x":25,"a":54.171,"b":50.241},{"x":26,"a":55.443,"b":50.763},{"x":27,"a":54.191,"b":48.159}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].a!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(data,d=>d.x)).range([0,width])\r
    const y=d3.scaleLinear().domain([d3.min(data,d=>Math.min(d.a,d.b))*0.92, d3.max(data,d=>Math.max(d.a,d.b))*1.08]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const band=d3.area().x(d=>x(d.x)).y0(d=>y(d.a-3)).y1(d=>y(d.a+3)).curve(d3.curveBasis)\r
    const bandB=d3.area().x(d=>x(d.x)).y0(d=>y(d.b-3)).y1(d=>y(d.b+3)).curve(d3.curveBasis)\r
    g.append('path').datum(data).attr('d',band).attr('fill',colors[0]).attr('fill-opacity',0.14)\r
    g.append('path').datum(data).attr('d',bandB).attr('fill',colors[1]).attr('fill-opacity',0.14)\r
    g.append('path').datum(data).attr('d',d3.area().x(d=>x(d.x)).y0(d=>y(Math.min(d.a,d.b))).y1(d=>y(Math.max(d.a,d.b))).curve(d3.curveBasis)).attr('fill','#94a3b8').attr('fill-opacity',0.18)\r
    g.append('path').datum(data).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.a)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(data).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.b)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Difference Area with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};