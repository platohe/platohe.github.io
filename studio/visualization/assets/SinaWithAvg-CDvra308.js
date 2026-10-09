var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sina-with-avg',\r
  title: 'Sina With Avg',\r
  desc: 'Sina With Avg — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'SinaWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","sina-with-avg"],\r
}\r
\r
export default function SinaWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East']\r
    const gen = () => [{"group":"North","v":33.482},{"group":"North","v":40.997},{"group":"North","v":23.742},{"group":"North","v":31.45},{"group":"North","v":38.176},{"group":"North","v":57.514},{"group":"North","v":41.046},{"group":"North","v":24.18},{"group":"North","v":36.674},{"group":"North","v":8},{"group":"North","v":50.218},{"group":"North","v":55.037},{"group":"North","v":60.547},{"group":"North","v":48.223},{"group":"North","v":56.21},{"group":"North","v":55.333},{"group":"North","v":48.777},{"group":"North","v":28.199},{"group":"North","v":70.738},{"group":"North","v":34.225},{"group":"North","v":32.759},{"group":"North","v":37.57},{"group":"North","v":49.404},{"group":"North","v":47.634},{"group":"North","v":39.344},{"group":"North","v":30.555},{"group":"North","v":40.624},{"group":"North","v":47.623},{"group":"North","v":40.601},{"group":"North","v":46.467},{"group":"North","v":66.953},{"group":"North","v":28.389},{"group":"North","v":52.802},{"group":"North","v":39.278},{"group":"South","v":61.287},{"group":"South","v":65.923},{"group":"South","v":67.489},{"group":"South","v":84.617},{"group":"South","v":72.194},{"group":"South","v":49.479},{"group":"South","v":48.652},{"group":"South","v":59.867},{"group":"South","v":45.666},{"group":"South","v":59.826},{"group":"South","v":62.93},{"group":"South","v":48.317},{"group":"South","v":75.832},{"group":"South","v":58.378},{"group":"South","v":68.309},{"group":"South","v":38.346},{"group":"South","v":66.716},{"group":"South","v":63.125},{"group":"South","v":59.167},{"group":"South","v":45.734},{"group":"South","v":50.196},{"group":"South","v":66.341},{"group":"South","v":70.029},{"group":"South","v":66.336},{"group":"South","v":72.196},{"group":"South","v":57.932},{"group":"South","v":59.351},{"group":"South","v":69.452},{"group":"South","v":63.23},{"group":"South","v":50.978},{"group":"South","v":81.346},{"group":"South","v":59.624},{"group":"South","v":59.246},{"group":"South","v":77.962},{"group":"East","v":71.101},{"group":"East","v":63.591},{"group":"East","v":61.983},{"group":"East","v":48.879},{"group":"East","v":38.256},{"group":"East","v":46.328},{"group":"East","v":44.314},{"group":"East","v":49.589},{"group":"East","v":41.998},{"group":"East","v":41.76},{"group":"East","v":43.468},{"group":"East","v":44.665},{"group":"East","v":53.793},{"group":"East","v":44.976},{"group":"East","v":63.842},{"group":"East","v":68.156},{"group":"East","v":55.028},{"group":"East","v":42.31},{"group":"East","v":59.733},{"group":"East","v":45.404},{"group":"East","v":66.329},{"group":"East","v":58.709},{"group":"East","v":47.059},{"group":"East","v":36.17},{"group":"East","v":53.858},{"group":"East","v":37.515},{"group":"East","v":50.058},{"group":"East","v":55.346},{"group":"East","v":59.992},{"group":"East","v":64.341},{"group":"East","v":46.295},{"group":"East","v":60.122},{"group":"East","v":47.25},{"group":"East","v":55.956}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.46)\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      const kde=d3.range(0,101,2).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/8; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const w=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()*0.42])\r
      vals.forEach(v=>{\r
        const kd=kde.find(k=>Math.abs(k.v-v)<1)\r
        const ww=w(kd?kd.d:0)\r
        const j=(Math.random()-0.5)*ww\r
        g.append('circle').attr('cx',(x(gr)??0)+x.bandwidth()/2 + j).attr('cy',y(v)).attr('r',2).attr('fill',colors[i]).attr('opacity',0.68).attr('stroke','var(--bg)').attr('stroke-width',0.4)\r
      })\r
      const avg=d3.mean(vals)||50\r
      g.append('line').attr('x1',(x(gr)??0)+x.bandwidth()/2-12).attr('x2',(x(gr)??0)+x.bandwidth()/2+12).attr('y1',y(avg)).attr('y2',y(avg)).attr('stroke','#0f172a').attr('stroke-width',1.2).attr('stroke-dasharray','2,2')\r
      g.append('circle').attr('cx',(x(gr)??0)+x.bandwidth()/2).attr('cy',y(avg)).attr('r',2).attr('fill','#0f172a')\r
    })\r
    const totalAvg=d3.mean(data,d=>d.v)||50\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(totalAvg)).attr('y2',y(totalAvg)).attr('stroke','#f59e0b').attr('stroke-width',1).attr('stroke-dasharray','3,2').attr('opacity',0.62)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Sina with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};