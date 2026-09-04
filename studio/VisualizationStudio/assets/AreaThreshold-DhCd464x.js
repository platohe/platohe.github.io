var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-threshold',\r
  title: 'Area Threshold',\r
  desc: 'Area Threshold — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaThreshold',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-threshold"],\r
}\r
\r
export default function AreaThreshold({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [{"x":0,"y":42.809},{"x":1,"y":48.11},{"x":2,"y":56.734},{"x":3,"y":58.591},{"x":4,"y":55.303},{"x":5,"y":56.024},{"x":6,"y":49.503},{"x":7,"y":46.202},{"x":8,"y":41.457},{"x":9,"y":32.244},{"x":10,"y":26.054},{"x":11,"y":29.125},{"x":12,"y":28.817},{"x":13,"y":28.723},{"x":14,"y":33.3},{"x":15,"y":42.275},{"x":16,"y":50.262},{"x":17,"y":54.977},{"x":18,"y":53.344},{"x":19,"y":57.639},{"x":20,"y":58.372},{"x":21,"y":47.507},{"x":22,"y":45.678},{"x":23,"y":34.523},{"x":24,"y":30.386},{"x":25,"y":24.419},{"x":26,"y":23.531},{"x":27,"y":29.208},{"x":28,"y":30.694},{"x":29,"y":32.188},{"x":30,"y":39.922},{"x":31,"y":51.753},{"x":32,"y":54.169},{"x":33,"y":59.862},{"x":34,"y":56.393},{"x":35,"y":55.131}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].y!=null?customData:gen()\r
    const thr=45\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(data,d=>d.x)).range([0,width])\r
    const y=d3.scaleLinear().domain([0,80]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    const clipAbove=svg.append('defs').append('clipPath').attr('id','clipAboveAreaThreshold')\r
    clipAbove.append('rect').attr('x',margin.left).attr('y',margin.top).attr('width',width).attr('height',y(thr)-margin.top)\r
    const clipBelow=svg.append('defs').append('clipPath').attr('id','clipBelowAreaThreshold2')\r
    clipBelow.append('rect').attr('x',margin.left).attr('y',y(thr)).attr('width',width).attr('height',height - (y(thr)-margin.top))\r
    // simpler: two paths with fill\r
    g.append('path').datum(data).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.22)\r
    g.append('path').datum(data.filter(d=>d.y>=thr)).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1.6)\r
    g.append('path').datum(data.filter(d=>d.y<thr)).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(thr)).attr('y2',y(thr)).attr('stroke','#ef4444').attr('stroke-dasharray','4,3')\r
    g.append('text').attr('x',width-2).attr('y',y(thr)-4).attr('text-anchor','end').attr('fill','#ef4444').attr('font-size','7px').text(\`thr \${thr}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area Threshold')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};