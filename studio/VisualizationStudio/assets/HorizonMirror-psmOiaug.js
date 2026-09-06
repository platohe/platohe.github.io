var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'horizon-mirror',\r
  title: 'Horizon Mirror',\r
  desc: 'Horizon Mirror — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonMirror',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-mirror"],\r
}\r
\r
export default function HorizonMirror({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const n=80\r
    const gen = () => [{"x":0,"y":12.607},{"x":1,"y":18.524},{"x":2,"y":26.909},{"x":3,"y":30.271},{"x":4,"y":29.769},{"x":5,"y":32.054},{"x":6,"y":28.333},{"x":7,"y":26.013},{"x":8,"y":21.161},{"x":9,"y":11.179},{"x":10,"y":1.564},{"x":11,"y":-2.857},{"x":12,"y":-11.106},{"x":13,"y":-19.756},{"x":14,"y":-24.533},{"x":15,"y":-24.638},{"x":16,"y":-23.184},{"x":17,"y":-21.191},{"x":18,"y":-20.637},{"x":19,"y":-12.429},{"x":20,"y":-4.261},{"x":21,"y":-3.141},{"x":22,"y":5.138},{"x":23,"y":5.422},{"x":24,"y":8.678},{"x":25,"y":7.257},{"x":26,"y":5.771},{"x":27,"y":5.306},{"x":28,"y":-1.672},{"x":29,"y":-10.983},{"x":30,"y":-16.558},{"x":31,"y":-18.447},{"x":32,"y":-25.277},{"x":33,"y":-26.292},{"x":34,"y":-30.029},{"x":35,"y":-27.726},{"x":36,"y":-26.408},{"x":37,"y":-20.532},{"x":38,"y":-10.178},{"x":39,"y":-1.706},{"x":40,"y":4.614},{"x":41,"y":14.915},{"x":42,"y":18.985},{"x":43,"y":24.469},{"x":44,"y":29.847},{"x":45,"y":31.013},{"x":46,"y":27.088},{"x":47,"y":21.454},{"x":48,"y":16.602},{"x":49,"y":10.411},{"x":50,"y":2.636},{"x":51,"y":0.16},{"x":52,"y":-4.589},{"x":53,"y":-7.769},{"x":54,"y":-7.665},{"x":55,"y":-11.944},{"x":56,"y":-4.094},{"x":57,"y":-2.821},{"x":58,"y":5.727},{"x":59,"y":6.881},{"x":60,"y":12.519},{"x":61,"y":16.872},{"x":62,"y":22.388},{"x":63,"y":24.626},{"x":64,"y":24.71},{"x":65,"y":23.478},{"x":66,"y":13.505},{"x":67,"y":10.619},{"x":68,"y":4.034},{"x":69,"y":-8.242},{"x":70,"y":-13.738},{"x":71,"y":-23.989},{"x":72,"y":-27.439},{"x":73,"y":-29.066},{"x":74,"y":-34.386},{"x":75,"y":-27.882},{"x":76,"y":-27.046},{"x":77,"y":-19.706},{"x":78,"y":-16.152},{"x":79,"y":-8.283}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].y!=null?customData:gen()\r
    const margin={top:28,right:12,bottom:22,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    // Derive x domain from data extent\r
    const xDomain=data.length?d3.extent(data,d=>d.x):[0,n-1]\r
    const x=d3.scaleLinear().domain(xDomain).range([0,width])\r
    // Derive y domain from data\r
    const yDomain=data.length?d3.extent(data,d=>d.y):[-38,38]\r
    const y=d3.scaleLinear().domain(yDomain).range([height,0])\r
    const mid=y(0)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    // bands\r
    const bandMax=Math.max(...yDomain.map(Math.abs))*1.1\r
    const bands=[bandMax*0.33,bandMax*0.66,bandMax]\r
    const colPos=['#dbeafe','#93c5fd','#3b82f6']\r
    const colNeg=['#fee2e2','#fca5a5','#ef4444']\r
    bands.forEach((thr,i)=>{\r
      const posArea=d3.area().x(d=>x(d.x)).y0(d=>Math.min(mid,y(Math.min(thr,Math.max(0,d.y))))).y1(d=>Math.min(mid,y(Math.max(0,Math.min(d.y,i?bands[i-1]:0))))).curve(d3.curveBasis)\r
      const negArea=d3.area().x(d=>x(d.x)).y0(d=>Math.max(mid,y(-Math.min(thr,Math.max(0,-d.y))))).y1(d=>Math.max(mid,y(-Math.max(0,Math.min(-d.y,i?bands[i-1]:0))))).curve(d3.curveBasis)\r
      const posData=data.filter(d=>d.y>(i?bands[i-1]:0))\r
      const negData=data.filter(d=>d.y<-(i?bands[i-1]:0))\r
      if(posData.length) g.append('path').datum(data).attr('d',posArea).attr('fill',colPos[i]).attr('opacity',0.92)\r
      if(negData.length) g.append('path').datum(data).attr('d',negArea).attr('fill',colNeg[i]).attr('opacity',0.92)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',mid).attr('y2',mid).attr('stroke','var(--border)').attr('stroke-width',1)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Horizon Mirror')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};