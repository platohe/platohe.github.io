var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'cleveland-dot-multi',\r
  title: 'Cleveland Dot Multi',\r
  desc: 'Cleveland Dot Multi — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ClevelandDotMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","cleveland-dot-multi"],\r
}\r
\r
export default function ClevelandDotMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['Q1','Q2','Q3','Q4','Q5']\r
    const series=['2022','2023','2024']\r
    const gen = () => [{"cat":"Q1","series":"2022","v":33},{"cat":"Q1","series":"2023","v":28},{"cat":"Q1","series":"2024","v":42},{"cat":"Q2","series":"2022","v":36},{"cat":"Q2","series":"2023","v":18},{"cat":"Q2","series":"2024","v":30},{"cat":"Q3","series":"2022","v":21},{"cat":"Q3","series":"2023","v":34},{"cat":"Q3","series":"2024","v":43},{"cat":"Q4","series":"2022","v":29},{"cat":"Q4","series":"2023","v":20},{"cat":"Q4","series":"2024","v":43},{"cat":"Q5","series":"2022","v":38},{"cat":"Q5","series":"2023","v":23},{"cat":"Q5","series":"2024","v":19}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,60]).range([0,width])\r
    const y=d3.scaleBand().domain(cats).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const col=d3.scaleOrdinal(colors).domain(series)\r
    // lines per cat\r
    cats.forEach(cat=>{\r
      const pts=series.flatMap(s=>{const found=data.find(d=>d.cat===cat&&d.series===s);return found?[found]:[]})\r
      pts.sort((a,b)=> series.indexOf(a.series)-series.indexOf(b.series))\r
      for(let i=1;i<pts.length;i++){\r
        g.append('line').attr('x1',x(pts[i-1].v)).attr('x2',x(pts[i].v)).attr('y1',(y(cat)??0)+y.bandwidth()/2).attr('y2',(y(cat)??0)+y.bandwidth()/2).attr('stroke','#94a3b8').attr('stroke-width',1).attr('opacity',0.48)\r
      }\r
    })\r
    data.forEach(d=>{\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',(y(d.cat)??0)+y.bandwidth()/2).attr('r',4).attr('fill',col(d.series)).attr('stroke','var(--bg)')\r
    })\r
    series.forEach((s,i)=>{ g.append('circle').attr('cx',width-44+i*18).attr('cy',8).attr('r',3).attr('fill',col(s)); g.append('text').attr('x',width-38+i*18).attr('y',11).attr('fill','var(--text-secondary)').attr('font-size','7px').text(s) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cleveland Dot Multi-Series')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};