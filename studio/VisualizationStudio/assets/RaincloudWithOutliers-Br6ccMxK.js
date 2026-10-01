var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'raincloud-with-outliers',\r
  title: 'Raincloud With Outliers',\r
  desc: 'Raincloud With Outliers — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RaincloudWithOutliers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","raincloud-with-outliers"],\r
}\r
\r
export default function RaincloudWithOutliers({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","v":31.482},{"group":"A","v":38.997},{"group":"A","v":21.742},{"group":"A","v":29.45},{"group":"A","v":36.176},{"group":"A","v":55.514},{"group":"A","v":39.046},{"group":"A","v":22.18},{"group":"A","v":34.674},{"group":"A","v":8},{"group":"A","v":48.218},{"group":"A","v":53.037},{"group":"A","v":58.547},{"group":"A","v":46.223},{"group":"A","v":54.21},{"group":"A","v":53.333},{"group":"A","v":46.777},{"group":"A","v":26.199},{"group":"A","v":68.738},{"group":"A","v":32.225},{"group":"A","v":30.759},{"group":"A","v":35.57},{"group":"A","v":47.404},{"group":"A","v":45.634},{"group":"A","v":37.344},{"group":"A","v":28.555},{"group":"A","v":38.624},{"group":"A","v":45.623},{"group":"A","v":38.601},{"group":"A","v":44.467},{"group":"A","v":64.953},{"group":"A","v":26.389},{"group":"A","v":50.802},{"group":"A","v":37.278},{"group":"B","v":57.287},{"group":"B","v":61.923},{"group":"B","v":63.489},{"group":"B","v":80.617},{"group":"B","v":68.194},{"group":"B","v":45.479},{"group":"B","v":44.652},{"group":"B","v":55.867},{"group":"B","v":41.666},{"group":"B","v":55.826},{"group":"B","v":58.93},{"group":"B","v":44.317},{"group":"B","v":71.832},{"group":"B","v":54.378},{"group":"B","v":64.309},{"group":"B","v":34.346},{"group":"B","v":62.716},{"group":"B","v":59.125},{"group":"B","v":55.167},{"group":"B","v":41.734},{"group":"B","v":46.196},{"group":"B","v":62.341},{"group":"B","v":66.029},{"group":"B","v":62.336},{"group":"B","v":68.196},{"group":"B","v":53.932},{"group":"B","v":55.351},{"group":"B","v":65.452},{"group":"B","v":59.23},{"group":"B","v":46.978},{"group":"B","v":77.346},{"group":"B","v":55.624},{"group":"B","v":55.246},{"group":"B","v":73.962},{"group":"C","v":87.101},{"group":"C","v":79.591},{"group":"C","v":77.983},{"group":"C","v":64.879},{"group":"C","v":54.256},{"group":"C","v":62.328},{"group":"C","v":60.314},{"group":"C","v":65.589},{"group":"C","v":57.998},{"group":"C","v":57.76},{"group":"C","v":59.468},{"group":"C","v":60.665},{"group":"C","v":69.793},{"group":"C","v":60.976},{"group":"C","v":79.842},{"group":"C","v":84.156},{"group":"C","v":71.028},{"group":"C","v":58.31},{"group":"C","v":75.733},{"group":"C","v":61.404},{"group":"C","v":82.329},{"group":"C","v":74.709},{"group":"C","v":63.059},{"group":"C","v":52.17},{"group":"C","v":69.858},{"group":"C","v":53.515},{"group":"C","v":66.058},{"group":"C","v":71.346},{"group":"C","v":75.992},{"group":"C","v":80.341},{"group":"C","v":62.295},{"group":"C","v":76.122},{"group":"C","v":63.25},{"group":"C","v":71.956}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const valsAll=data.map(d=>d.v)\r
    const q1=d3.quantile(valsAll,0.25)||0, q3=d3.quantile(valsAll,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
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
      const kde=d3.range(0,101,1).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/8; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const h=d3.scaleLinear().domain([0,maxD]).range([0, y.bandwidth()*0.42])\r
      const area=d3.area().x(d=>x(d.v)).y0(yy).y1(d=>yy - h(d.d)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.22).attr('stroke',colors[i]).attr('stroke-width',1)\r
      vals.forEach(v=>{\r
        const isOut=v<lo||v>hi\r
        g.append('circle').attr('cx',x(v)).attr('cy',yy+10+(Math.random()-0.5)*6).attr('r',isOut?3:1.6).attr('fill',isOut?'#ef4444':colors[i]).attr('fill-opacity',isOut?0.92:0.62).attr('stroke','var(--bg)').attr('stroke-width',isOut?0.8:0)\r
        if(isOut) g.append('text').attr('x',x(v)).attr('y',yy+20).attr('text-anchor','middle').attr('fill','#ef4444').attr('font-size','5px').text('outlier')\r
      })\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Raincloud with Outliers')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};