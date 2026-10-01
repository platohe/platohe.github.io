var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ppwith-ci',\r
  title: 'P P With C I',\r
  desc: 'P P With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PPWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","p-p-with-c-i"],\r
}\r
\r
export default function PPWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B']\r
    const gen = () => [{"group":"A","vals":[29.57,38.451,18.059,27.169,35.117,57.972,38.509,18.577,33.342,6,49.349,55.044,61.556,46.991,56.429,55.394,47.646,23.326,73.6,30.447,28.715,34.401,48.387,46.295,36.497,26.111,38.01,46.282,37.984,44.915,69.126,23.551,52.403,36.419]},{"group":"B","vals":[57.158,62.636,64.486,84.729,70.047,43.203,42.225,55.479,38.696,55.43,59.099,41.829,74.346,53.719,65.456,30.045,63.574,59.329,54.651,38.776,44.049,63.13,67.489,63.125,70.05,53.192,54.869,66.807,59.454,44.974,80.863,55.192,54.745,76.864]}]\r
    const series=Array.isArray(customData)&&customData.length&&customData[0].vals?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,1]).range([0,width])\r
    const y=d3.scaleLinear().domain([0,1]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickFormat(d3.format('.0%')).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickFormat(d3.format('.0%')).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('line').attr('x1',x(0)).attr('x2',x(1)).attr('y1',y(0)).attr('y2',y(1)).attr('stroke','#94a3b8').attr('stroke-dasharray','3,3')\r
    series.forEach((s,i)=>{\r
      const sorted=[...s.vals].sort(d3.ascending)\r
      const pts=sorted.map((v,idx)=>({th: 0.5+ (v-50)/40, emp:(idx+1)/sorted.length}))\r
      pts.forEach(p=>{ p.th=Math.max(0,Math.min(1,p.th)) })\r
      const band=0.06\r
      const area=d3.area().x(d=>x(d.th)).y0(d=>y(Math.max(0,d.emp-band))).y1(d=>y(Math.min(1,d.emp+band))).curve(d3.curveBasis)\r
      g.append('path').datum(pts).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.08)\r
      g.append('path').datum(pts).attr('d',d3.line().x(d=>x(d.th)).y(d=>y(d.emp)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[i]).attr('stroke-width',1.6)\r
    })\r
    groups.forEach((g2,i)=>{ g.append('rect').attr('x',width-42).attr('y',8+i*12).attr('width',8).attr('height',8).attr('fill',colors[i]).attr('rx',2); g.append('text').attr('x',width-32).attr('y',15+i*12).attr('fill','var(--text-secondary)').attr('font-size','7px').text(g2) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('P-P with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};