var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'horizon-with-avg',\r
  title: 'Horizon With Avg',\r
  desc: 'Horizon With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-with-avg"],\r
}\r
\r
export default function HorizonWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const n=64\r
    const gen = () => [{"x":0,"y":8.404},{"x":1,"y":12.36},{"x":2,"y":17.807},{"x":3,"y":19.704},{"x":4,"y":18.806},{"x":5,"y":19.563},{"x":6,"y":16.168},{"x":7,"y":13.645},{"x":8,"y":9.485},{"x":9,"y":2.074},{"x":10,"y":-4.811},{"x":11,"y":-7.863},{"x":12,"y":-13.047},{"x":13,"y":-18.078},{"x":14,"y":-20.158},{"x":15,"y":-18.858},{"x":16,"y":-16.393},{"x":17,"y":-13.608},{"x":18,"y":-11.987},{"x":19,"y":-5.613},{"x":20,"y":0.281},{"x":21,"y":0.976},{"x":22,"y":5.968},{"x":23,"y":5.25},{"x":24,"y":6.29},{"x":25,"y":4.197},{"x":26,"y":2.273},{"x":27,"y":1.468},{"x":28,"y":-3.052},{"x":29,"y":-8.373},{"x":30,"y":-10.406},{"x":31,"y":-9.241},{"x":32,"y":-10.784},{"x":33,"y":-8.112},{"x":34,"y":-7.23},{"x":35,"y":-2.65},{"x":36,"y":0.591},{"x":37,"y":5.875},{"x":38,"y":12.91},{"x":39,"y":17.33},{"x":40,"y":18.954},{"x":41,"y":22.007},{"x":42,"y":19.944},{"x":43,"y":18.231},{"x":44,"y":16.293},{"x":45,"y":11.856},{"x":46,"y":4.776},{"x":47,"y":-2.322},{"x":48,"y":-7.522},{"x":49,"y":-12.121},{"x":50,"y":-16.325},{"x":51,"y":-15.744},{"x":52,"y":-15.76},{"x":53,"y":-14.242},{"x":54,"y":-10.532},{"x":55,"y":-10.223},{"x":56,"y":-2.726},{"x":57,"y":-0.824},{"x":58,"y":4.557},{"x":59,"y":3.651},{"x":60,"y":4.563},{"x":61,"y":3.8},{"x":62,"y":3.466},{"x":63,"y":1.152}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].y!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,n-1]).range([0,width])\r
    const y=d3.scaleLinear().domain([-24,24]).range([height,0])\r
    const mid=y(0)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const bands=[8,16,24], cols=['#bfdbfe','#60a5fa','#1d4ed8']\r
    bands.forEach((th,i)=>{\r
      g.append('path').datum(data.filter(d=>d.y>0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.min(d.y, th))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.72-i*0.12)\r
      g.append('path').datum(data.filter(d=>d.y<0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.max(-th, d.y))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.42)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',mid).attr('y2',mid).attr('stroke','var(--border)')\r
    const avg=d3.mean(data,d=>d.y)||0\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(avg)).attr('y2',y(avg)).attr('stroke','#0f172a').attr('stroke-width',1).attr('stroke-dasharray','3,2').attr('opacity',0.72)\r
    g.append('circle').attr('cx',width-8).attr('cy',y(avg)).attr('r',2).attr('fill','#0f172a')\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Horizon with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};