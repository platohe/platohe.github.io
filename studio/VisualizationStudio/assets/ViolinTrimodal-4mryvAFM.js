var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'violin-trimodal',\r
  title: 'Violin Trimodal',\r
  desc: 'Violin Trimodal — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ViolinTrimodal',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","violin-trimodal"],\r
}\r
\r
export default function ViolinTrimodal({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South']\r
    const gen = () => [{"group":"North","v":23.219},{"group":"North","v":26.635},{"group":"North","v":18.792},{"group":"North","v":22.296},{"group":"North","v":25.353},{"group":"North","v":34.143},{"group":"North","v":26.657},{"group":"North","v":18.991},{"group":"North","v":24.67},{"group":"North","v":11.605},{"group":"North","v":30.826},{"group":"North","v":33.017},{"group":"North","v":35.522},{"group":"North","v":29.92},{"group":"North","v":33.55},{"group":"North","v":33.151},{"group":"North","v":30.171},{"group":"North","v":20.818},{"group":"North","v":74.154},{"group":"North","v":57.557},{"group":"North","v":56.89},{"group":"North","v":59.077},{"group":"North","v":64.457},{"group":"North","v":63.652},{"group":"North","v":59.884},{"group":"North","v":55.889},{"group":"North","v":60.465},{"group":"North","v":63.647},{"group":"North","v":60.455},{"group":"North","v":63.121},{"group":"North","v":72.433},{"group":"North","v":54.904},{"group":"North","v":66.001},{"group":"North","v":59.853},{"group":"North","v":61.676},{"group":"North","v":63.783},{"group":"North","v":46.996},{"group":"North","v":53.224},{"group":"North","v":48.707},{"group":"North","v":40.447},{"group":"North","v":40.146},{"group":"North","v":44.224},{"group":"North","v":39.06},{"group":"North","v":44.209},{"group":"North","v":45.338},{"group":"North","v":40.024},{"group":"North","v":50.03},{"group":"North","v":43.683},{"group":"South","v":59.456},{"group":"South","v":24.045},{"group":"South","v":57.574},{"group":"South","v":53.329},{"group":"South","v":48.651},{"group":"South","v":32.776},{"group":"South","v":38.049},{"group":"South","v":57.13},{"group":"South","v":61.489},{"group":"South","v":57.125},{"group":"South","v":64.05},{"group":"South","v":47.192},{"group":"South","v":48.869},{"group":"South","v":60.807},{"group":"South","v":53.454},{"group":"South","v":38.974},{"group":"South","v":74.863},{"group":"South","v":49.192},{"group":"South","v":48.745},{"group":"South","v":70.864},{"group":"South","v":74.573},{"group":"South","v":65.698},{"group":"South","v":63.798},{"group":"South","v":48.311},{"group":"South","v":35.757},{"group":"South","v":45.297},{"group":"South","v":42.917},{"group":"South","v":49.15},{"group":"South","v":40.179},{"group":"South","v":39.898},{"group":"South","v":41.917},{"group":"South","v":43.331},{"group":"South","v":54.119},{"group":"South","v":43.699},{"group":"South","v":65.995},{"group":"South","v":71.094},{"group":"South","v":55.579},{"group":"South","v":40.548},{"group":"South","v":61.14},{"group":"South","v":44.205},{"group":"South","v":68.935},{"group":"South","v":59.929},{"group":"South","v":46.161},{"group":"South","v":33.292},{"group":"South","v":54.196},{"group":"South","v":34.881},{"group":"South","v":49.704},{"group":"South","v":55.954}]\r
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
      const kde=d3.range(0,101,1).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/6; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const w=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()/2 -2])\r
      const cx=(x(gr)??0)+x.bandwidth()/2\r
      const area=d3.area().x0(d=>cx - w(d.d)).x1(d=>cx + w(d.d)).y(d=>y(d.v)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',1)\r
      // trimodal peaks annotated\r
      if(gr==='North'){\r
        [28,45,62].forEach(pk=> g.append('line').attr('x1',cx-6).attr('x2',cx+6).attr('y1',y(pk)).attr('y2',y(pk)).attr('stroke',colors[i]).attr('stroke-width',0.8).attr('stroke-dasharray','2,2'))\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Violin Trimodal')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};