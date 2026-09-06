var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'violin-with-median',\r
  title: 'Violin With Median',\r
  desc: 'Violin With Median — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ViolinWithMedian',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","violin-with-median"],\r
}\r
\r
export default function ViolinWithMedian({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East']\r
    const gen = () => [{"group":"North","v":33.482},{"group":"North","v":40.997},{"group":"North","v":23.742},{"group":"North","v":31.45},{"group":"North","v":38.176},{"group":"North","v":57.514},{"group":"North","v":41.046},{"group":"North","v":24.18},{"group":"North","v":36.674},{"group":"North","v":8},{"group":"North","v":50.218},{"group":"North","v":55.037},{"group":"North","v":60.547},{"group":"North","v":48.223},{"group":"North","v":56.21},{"group":"North","v":55.333},{"group":"North","v":48.777},{"group":"North","v":28.199},{"group":"North","v":70.738},{"group":"North","v":34.225},{"group":"North","v":32.759},{"group":"North","v":37.57},{"group":"North","v":49.404},{"group":"North","v":47.634},{"group":"North","v":39.344},{"group":"North","v":30.555},{"group":"North","v":40.624},{"group":"North","v":47.623},{"group":"North","v":40.601},{"group":"North","v":46.467},{"group":"North","v":66.953},{"group":"North","v":28.389},{"group":"North","v":52.802},{"group":"North","v":39.278},{"group":"North","v":43.287},{"group":"North","v":47.923},{"group":"North","v":49.489},{"group":"North","v":66.617},{"group":"North","v":54.194},{"group":"North","v":31.479},{"group":"North","v":30.652},{"group":"North","v":41.867},{"group":"South","v":45.666},{"group":"South","v":59.826},{"group":"South","v":62.93},{"group":"South","v":48.317},{"group":"South","v":75.832},{"group":"South","v":58.378},{"group":"South","v":68.309},{"group":"South","v":38.346},{"group":"South","v":66.716},{"group":"South","v":63.125},{"group":"South","v":59.167},{"group":"South","v":45.734},{"group":"South","v":50.196},{"group":"South","v":66.341},{"group":"South","v":70.029},{"group":"South","v":66.336},{"group":"South","v":72.196},{"group":"South","v":57.932},{"group":"South","v":59.351},{"group":"South","v":69.452},{"group":"South","v":63.23},{"group":"South","v":50.978},{"group":"South","v":81.346},{"group":"South","v":59.624},{"group":"South","v":59.246},{"group":"South","v":77.962},{"group":"South","v":81.101},{"group":"South","v":73.591},{"group":"South","v":71.983},{"group":"South","v":58.879},{"group":"South","v":48.256},{"group":"South","v":56.328},{"group":"South","v":54.314},{"group":"South","v":59.589},{"group":"South","v":51.998},{"group":"South","v":51.76},{"group":"South","v":53.468},{"group":"South","v":54.665},{"group":"South","v":63.793},{"group":"South","v":54.976},{"group":"South","v":73.842},{"group":"South","v":78.156},{"group":"East","v":55.028},{"group":"East","v":42.31},{"group":"East","v":59.733},{"group":"East","v":45.404},{"group":"East","v":66.329},{"group":"East","v":58.709},{"group":"East","v":47.059},{"group":"East","v":36.17},{"group":"East","v":53.858},{"group":"East","v":37.515},{"group":"East","v":50.058},{"group":"East","v":55.346},{"group":"East","v":59.992},{"group":"East","v":64.341},{"group":"East","v":46.295},{"group":"East","v":60.122},{"group":"East","v":47.25},{"group":"East","v":55.956},{"group":"East","v":45.397},{"group":"East","v":62.079},{"group":"East","v":46.369},{"group":"East","v":49.223},{"group":"East","v":61.187},{"group":"East","v":37.794},{"group":"East","v":78.439},{"group":"East","v":50.483},{"group":"East","v":54.4},{"group":"East","v":48.412},{"group":"East","v":48.874},{"group":"East","v":72.874},{"group":"East","v":35.89},{"group":"East","v":49.549},{"group":"East","v":53.622},{"group":"East","v":42.036},{"group":"East","v":40.165},{"group":"East","v":38.91},{"group":"East","v":44.916},{"group":"East","v":62.129},{"group":"East","v":50.596},{"group":"East","v":40.173},{"group":"East","v":42.53},{"group":"East","v":74.015}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.42)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      const kde=d3.range(0,101,1).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/7; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const w=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()/2 -2])\r
      const cx=(x(gr)??0)+x.bandwidth()/2\r
      const area=d3.area().x0(d=>cx - w(d.d)).x1(d=>cx + w(d.d)).y(d=>y(d.v)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.14).attr('stroke',colors[i]).attr('stroke-width',1)\r
      const m=d3.median(vals)||50\r
      g.append('line').attr('x1',cx-8).attr('x2',cx+8).attr('y1',y(m)).attr('y2',y(m)).attr('stroke','#0f172a').attr('stroke-width',1.2)\r
      g.append('circle').attr('cx',cx).attr('cy',y(m)).attr('r',2).attr('fill','#0f172a')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Violin with Median')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};