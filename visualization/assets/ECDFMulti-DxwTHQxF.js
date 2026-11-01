var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ecdfmulti',\r
  title: 'E C D F Multi',\r
  desc: 'E C D F Multi — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ECDFMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","e-c-d-f-multi"],\r
}\r
\r
export default function ECDFMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","vals":[28.614,38.178,16.217,26.028,34.588,59.2,38.241,16.775,32.676,6,49.914,56.048,63.06,47.375,57.539,56.424,48.08,21.89,76.03,29.559,27.693,33.816,48.878,46.625,36.074,24.889,37.703,46.612,37.675,45.139,71.213,22.132]},{"group":"B","vals":[69.203,51.99,57.093,62.993,64.985,86.785,70.974,42.064,41.012,55.285,37.211,55.233,59.184,40.586,75.604,53.39,66.029,27.894,64.002,59.431,54.394,37.297,42.976,63.525,68.219,63.519,70.976,52.822,54.628,67.485,59.566,43.972]},{"group":"C","vals":[76.622,48.976,48.495,72.315,76.31,66.752,64.705,48.027,34.508,44.781,42.218,48.931,39.27,38.967,41.141,42.665,54.282,43.06,67.071,72.563,55.854,39.667,61.843,43.605,70.237,60.539,45.712,31.853,54.365,33.564,49.528,56.258]}]\r
    const series=Array.isArray(customData)&&customData.length&&customData[0].vals?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleLinear().domain([0,1]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    series.forEach((s,i)=>{\r
      const sorted=[...s.vals].sort(d3.ascending)\r
      const pts=sorted.map((v,idx)=>({x:v, y:(idx+1)/sorted.length}))\r
      const line=d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveStepAfter)\r
      g.append('path').datum(pts).attr('d',line).attr('fill','none').attr('stroke',colors[i]).attr('stroke-width',1.8)\r
      pts.forEach(p=> g.append('circle').attr('cx',x(p.x)).attr('cy',y(p.y)).attr('r',1.6).attr('fill',colors[i]).attr('opacity',0.62))\r
    })\r
    series.forEach((s,i)=>{ g.append('rect').attr('x',width-42).attr('y',8+i*12).attr('width',8).attr('height',8).attr('fill',colors[i]).attr('rx',2); g.append('text').attr('x',width-32).attr('y',15+i*12).attr('fill','var(--text-secondary)').attr('font-size','7px').text(s.group) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('ECDF Multi-Group')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};