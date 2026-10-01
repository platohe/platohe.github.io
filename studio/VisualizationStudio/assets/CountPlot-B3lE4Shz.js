var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'count-plot',\r
  title: 'Count Plot',\r
  desc: 'Count Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CountPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","count-plot"],\r
}\r
\r
export default function CountPlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['A','B','C','D','E','F']\r
    const gen = () => [{"cat":"A","n":28},{"cat":"B","n":23},{"cat":"C","n":38},{"cat":"D","n":31},{"cat":"E","n":12},{"cat":"F","n":26}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:46,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(cats).range([0,width]).padding(0.18)\r
    const y=d3.scaleLinear().domain([0, d3.max(data,d=>d.n)||50]).range([height,0]).nice()\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    data.forEach((d,i)=>{\r
      // bar + overlaid count dot\r
      g.append('rect').attr('x',x(d.cat)??0).attr('y',y(d.n)).attr('width',x.bandwidth()).attr('height',height-y(d.n)).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.22).attr('stroke',colors[i%colors.length]).attr('rx',3)\r
      g.append('circle').attr('cx',(x(d.cat)??0)+x.bandwidth()/2).attr('cy',y(d.n)-6).attr('r',10).attr('fill',colors[i%colors.length]).attr('stroke','var(--bg)').attr('stroke-width',1.2)\r
      g.append('text').attr('x',(x(d.cat)??0)+x.bandwidth()/2).attr('y',y(d.n)-2).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').attr('font-weight',700).text(d.n)\r
      // small jitter dots below for count illustration\r
      for(let k=0;k<Math.min(d.n,12);k++){\r
        const jx=(x(d.cat)??0)+x.bandwidth()/2 + (Math.random()-0.5)*18\r
        const jy=y(0)-4 - k*7\r
        if(jy>y(d.n)) g.append('circle').attr('cx',jx).attr('cy',jy).attr('r',1.4).attr('fill',colors[i%colors.length]).attr('opacity',0.42)\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Count Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};