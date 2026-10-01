var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'horizon-with-threshold',\r
  title: 'Horizon With Threshold',\r
  desc: 'Horizon With Threshold — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonWithThreshold',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-with-threshold"],\r
}\r
\r
export default function HorizonWithThreshold({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const n=64\r
    const gen = () => [{"x":0,"y":9.404},{"x":1,"y":14.014},{"x":2,"y":20.014},{"x":3,"y":22.296},{"x":4,"y":21.564},{"x":5,"y":22.243},{"x":6,"y":18.525},{"x":7,"y":15.461},{"x":8,"y":10.59},{"x":9,"y":2.367},{"x":10,"y":-5.352},{"x":11,"y":-9.178},{"x":12,"y":-15.002},{"x":13,"y":-20.48},{"x":14,"y":-22.776},{"x":15,"y":-21.447},{"x":16,"y":-18.722},{"x":17,"y":-15.485},{"x":18,"y":-13.278},{"x":19,"y":-6.256},{"x":20,"y":0.271},{"x":21,"y":1.511},{"x":22,"y":6.9},{"x":23,"y":6.39},{"x":24,"y":7.432},{"x":25,"y":5.14},{"x":26,"y":2.852},{"x":27,"y":1.57},{"x":28,"y":-3.473},{"x":29,"y":-9.288},{"x":30,"y":-11.718},{"x":31,"y":-10.792},{"x":32,"y":-12.375},{"x":33,"y":-9.524},{"x":34,"y":-8.255},{"x":35,"y":-3.111},{"x":36,"y":0.816},{"x":37,"y":6.837},{"x":38,"y":14.582},{"x":39,"y":19.608},{"x":40,"y":21.666},{"x":41,"y":24.93},{"x":42,"y":22.83},{"x":43,"y":20.83},{"x":44,"y":18.38},{"x":45,"y":13.258},{"x":46,"y":5.386},{"x":47,"y":-2.532},{"x":48,"y":-8.498},{"x":49,"y":-13.736},{"x":50,"y":-18.393},{"x":51,"y":-18.042},{"x":52,"y":-18.05},{"x":53,"y":-16.303},{"x":54,"y":-12.18},{"x":55,"y":-11.332},{"x":56,"y":-3.242},{"x":57,"y":-0.766},{"x":58,"y":5.097},{"x":59,"y":4.523},{"x":60,"y":5.578},{"x":61,"y":4.754},{"x":62,"y":4.166},{"x":63,"y":1.44}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].y!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,n-1]).range([0,width])\r
    const y=d3.scaleLinear().domain([-28,28]).range([height,0])\r
    const mid=y(0)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const thr=14\r
    const bands=[7,14,28], cols=['#bfdbfe','#60a5fa','#1d4ed8']\r
    bands.forEach((th,i)=>{\r
      g.append('path').datum(data.filter(d=>d.y>0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.min(d.y, th))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.72-i*0.12)\r
      g.append('path').datum(data.filter(d=>d.y<0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.max(-th, d.y))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.42)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',mid).attr('y2',mid).attr('stroke','var(--border)')\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(thr)).attr('y2',y(thr)).attr('stroke','#ef4444').attr('stroke-dasharray','3,2').attr('opacity',0.72)\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(-thr)).attr('y2',y(-thr)).attr('stroke','#ef4444').attr('stroke-dasharray','3,2').attr('opacity',0.72)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Horizon with Threshold')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};