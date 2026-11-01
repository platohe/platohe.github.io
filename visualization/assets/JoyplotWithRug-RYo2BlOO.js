var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'joyplot-with-rug',\r
  title: 'Joyplot With Rug',\r
  desc: 'Joyplot With Rug — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'JoyplotWithRug',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","joyplot-with-rug"],\r
}\r
\r
export default function JoyplotWithRug({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C','D']\r
    const gen = () => [{"group":"A","v":31.482},{"group":"A","v":38.997},{"group":"A","v":21.742},{"group":"A","v":29.45},{"group":"A","v":36.176},{"group":"A","v":55.514},{"group":"A","v":39.046},{"group":"A","v":22.18},{"group":"A","v":34.674},{"group":"A","v":6},{"group":"A","v":48.218},{"group":"A","v":53.037},{"group":"A","v":58.547},{"group":"A","v":46.223},{"group":"A","v":54.21},{"group":"A","v":53.333},{"group":"A","v":46.777},{"group":"A","v":26.199},{"group":"A","v":68.738},{"group":"A","v":32.225},{"group":"A","v":30.759},{"group":"A","v":35.57},{"group":"A","v":47.404},{"group":"A","v":45.634},{"group":"A","v":37.344},{"group":"A","v":28.555},{"group":"A","v":38.624},{"group":"A","v":45.623},{"group":"A","v":38.601},{"group":"A","v":44.467},{"group":"A","v":64.953},{"group":"A","v":26.389},{"group":"B","v":57.802},{"group":"B","v":44.278},{"group":"B","v":48.287},{"group":"B","v":52.923},{"group":"B","v":54.489},{"group":"B","v":71.617},{"group":"B","v":59.194},{"group":"B","v":36.479},{"group":"B","v":35.652},{"group":"B","v":46.867},{"group":"B","v":32.666},{"group":"B","v":46.826},{"group":"B","v":49.93},{"group":"B","v":35.317},{"group":"B","v":62.832},{"group":"B","v":45.378},{"group":"B","v":55.309},{"group":"B","v":25.346},{"group":"B","v":53.716},{"group":"B","v":50.125},{"group":"B","v":46.167},{"group":"B","v":32.734},{"group":"B","v":37.196},{"group":"B","v":53.341},{"group":"B","v":57.029},{"group":"B","v":53.336},{"group":"B","v":59.196},{"group":"B","v":44.932},{"group":"B","v":46.351},{"group":"B","v":56.452},{"group":"B","v":50.23},{"group":"B","v":37.978},{"group":"C","v":75.346},{"group":"C","v":53.624},{"group":"C","v":53.246},{"group":"C","v":71.962},{"group":"C","v":75.101},{"group":"C","v":67.591},{"group":"C","v":65.983},{"group":"C","v":52.879},{"group":"C","v":42.256},{"group":"C","v":50.328},{"group":"C","v":48.314},{"group":"C","v":53.589},{"group":"C","v":45.998},{"group":"C","v":45.76},{"group":"C","v":47.468},{"group":"C","v":48.665},{"group":"C","v":57.793},{"group":"C","v":48.976},{"group":"C","v":67.842},{"group":"C","v":72.156},{"group":"C","v":59.028},{"group":"C","v":46.31},{"group":"C","v":63.733},{"group":"C","v":49.404},{"group":"C","v":70.329},{"group":"C","v":62.709},{"group":"C","v":51.059},{"group":"C","v":40.17},{"group":"C","v":57.858},{"group":"C","v":41.515},{"group":"C","v":54.058},{"group":"C","v":59.346},{"group":"D","v":70.992},{"group":"D","v":75.341},{"group":"D","v":57.295},{"group":"D","v":71.122},{"group":"D","v":58.25},{"group":"D","v":66.956},{"group":"D","v":56.397},{"group":"D","v":73.079},{"group":"D","v":57.369},{"group":"D","v":60.223},{"group":"D","v":72.187},{"group":"D","v":48.794},{"group":"D","v":89.439},{"group":"D","v":61.483},{"group":"D","v":65.4},{"group":"D","v":59.412},{"group":"D","v":59.874},{"group":"D","v":83.874},{"group":"D","v":46.89},{"group":"D","v":60.549},{"group":"D","v":64.622},{"group":"D","v":53.036},{"group":"D","v":51.165},{"group":"D","v":49.91},{"group":"D","v":55.916},{"group":"D","v":73.129},{"group":"D","v":61.596},{"group":"D","v":51.173},{"group":"D","v":53.53},{"group":"D","v":85.015},{"group":"D","v":83.143},{"group":"D","v":80.475}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(groups).range([0,height]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      const yy=(y(gr)??0)+y.bandwidth()/2\r
      const kde=d3.range(0,101,1).map(xx=>{ let s=0; vals.forEach(v=>{const d=(xx-v)/8; s+=Math.exp(-0.5*d*d)}); return {xx, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const h=d3.scaleLinear().domain([0,maxD]).range([0, y.bandwidth()*0.62])\r
      const area=d3.area().x(d=>x(d.xx)).y0(yy).y1(d=>yy - h(d.d)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',1.1)\r
      // rug below baseline\r
      vals.forEach(v=> g.append('line').attr('x1',x(v)).attr('x2',x(v)).attr('y1',yy+2).attr('y2',yy+8).attr('stroke',colors[i]).attr('stroke-width',0.7).attr('opacity',0.62))\r
      // median dot\r
      const m=d3.median(vals)||50\r
      g.append('circle').attr('cx',x(m)).attr('cy',yy).attr('r',2).attr('fill',colors[i]).attr('stroke','var(--bg)')\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Joyplot with Rug')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};