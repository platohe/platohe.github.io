var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'raincloud-multi-group',\r
  title: 'Raincloud Multi Group',\r
  desc: 'Raincloud Multi Group — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RaincloudMultiGroup',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","raincloud-multi-group"],\r
}\r
\r
export default function RaincloudMultiGroup({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East']\r
    const gen = () => [{"group":"North","v":31.482},{"group":"North","v":38.997},{"group":"North","v":21.742},{"group":"North","v":29.45},{"group":"North","v":36.176},{"group":"North","v":55.514},{"group":"North","v":39.046},{"group":"North","v":22.18},{"group":"North","v":34.674},{"group":"North","v":8},{"group":"North","v":48.218},{"group":"North","v":53.037},{"group":"North","v":58.547},{"group":"North","v":46.223},{"group":"North","v":54.21},{"group":"North","v":53.333},{"group":"North","v":46.777},{"group":"North","v":26.199},{"group":"North","v":68.738},{"group":"North","v":32.225},{"group":"North","v":30.759},{"group":"North","v":35.57},{"group":"North","v":47.404},{"group":"North","v":45.634},{"group":"North","v":37.344},{"group":"North","v":28.555},{"group":"North","v":38.624},{"group":"North","v":45.623},{"group":"North","v":38.601},{"group":"North","v":44.467},{"group":"North","v":64.953},{"group":"North","v":26.389},{"group":"North","v":50.802},{"group":"North","v":37.278},{"group":"South","v":61.287},{"group":"South","v":65.923},{"group":"South","v":67.489},{"group":"South","v":84.617},{"group":"South","v":72.194},{"group":"South","v":49.479},{"group":"South","v":48.652},{"group":"South","v":59.867},{"group":"South","v":45.666},{"group":"South","v":59.826},{"group":"South","v":62.93},{"group":"South","v":48.317},{"group":"South","v":75.832},{"group":"South","v":58.378},{"group":"South","v":68.309},{"group":"South","v":38.346},{"group":"South","v":66.716},{"group":"South","v":63.125},{"group":"South","v":59.167},{"group":"South","v":45.734},{"group":"South","v":50.196},{"group":"South","v":66.341},{"group":"South","v":70.029},{"group":"South","v":66.336},{"group":"South","v":72.196},{"group":"South","v":57.932},{"group":"South","v":59.351},{"group":"South","v":69.452},{"group":"South","v":63.23},{"group":"South","v":50.978},{"group":"South","v":81.346},{"group":"South","v":59.624},{"group":"South","v":59.246},{"group":"South","v":77.962},{"group":"East","v":71.101},{"group":"East","v":63.591},{"group":"East","v":61.983},{"group":"East","v":48.879},{"group":"East","v":38.256},{"group":"East","v":46.328},{"group":"East","v":44.314},{"group":"East","v":49.589},{"group":"East","v":41.998},{"group":"East","v":41.76},{"group":"East","v":43.468},{"group":"East","v":44.665},{"group":"East","v":53.793},{"group":"East","v":44.976},{"group":"East","v":63.842},{"group":"East","v":68.156},{"group":"East","v":55.028},{"group":"East","v":42.31},{"group":"East","v":59.733},{"group":"East","v":45.404},{"group":"East","v":66.329},{"group":"East","v":58.709},{"group":"East","v":47.059},{"group":"East","v":36.17},{"group":"East","v":53.858},{"group":"East","v":37.515},{"group":"East","v":50.058},{"group":"East","v":55.346},{"group":"East","v":59.992},{"group":"East","v":64.341},{"group":"East","v":46.295},{"group":"East","v":60.122},{"group":"East","v":47.25},{"group":"East","v":55.956}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleBand().domain(groups).range([0,height]).padding(0.42)\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      const yy=(y(gr)??0)+y.bandwidth()/2\r
      // density half-violin on top\r
      const kde=d3.range(0,101,2).map(xx=>{ let s=0; vals.forEach(v=>{const d=(xx-v)/9; s+=Math.exp(-0.5*d*d)}); return {xx, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const hScale=d3.scaleLinear().domain([0,maxD]).range([0, y.bandwidth()*0.42])\r
      const area=d3.area().x(d=>x(d.xx)).y0(yy).y1(d=>yy - hScale(d.d)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.22).attr('stroke',colors[i]).attr('stroke-width',1)\r
      // box\r
      const q1=d3.quantile(vals,0.25)||0, m=d3.median(vals)||50, q3=d3.quantile(vals,0.75)||0\r
      g.append('rect').attr('x',x(q1)).attr('y',yy-4).attr('width',x(q3)-x(q1)).attr('height',8).attr('fill',colors[i]).attr('fill-opacity',0.32).attr('stroke',colors[i])\r
      g.append('line').attr('x1',x(m)).attr('x2',x(m)).attr('y1',yy-6).attr('y2',yy+6).attr('stroke',colors[i]).attr('stroke-width',1.6)\r
      // rain dots below\r
      vals.forEach(v=> g.append('circle').attr('cx',x(v)).attr('cy',yy+10+(Math.random()-0.5)*8).attr('r',1.8).attr('fill',colors[i]).attr('opacity',0.62))\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Raincloud Multi-Group')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};