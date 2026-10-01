var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'cleveland-with-error',\r
  title: 'Cleveland With Error',\r
  desc: 'Cleveland With Error — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ClevelandWithError',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","cleveland-with-error"],\r
}\r
\r
export default function ClevelandWithError({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['Alpha','Beta','Gamma','Delta','Epsilon']\r
    const gen = () => [{"cat":"Alpha","v":35,"lo":4,"hi":6},{"cat":"Beta","v":38,"lo":2,"hi":4},{"cat":"Gamma","v":23,"lo":5,"hi":6},{"cat":"Delta","v":31,"lo":3,"hi":6},{"cat":"Epsilon","v":40,"lo":3,"hi":2}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v+d.hi)||40]).nice().range([0,width])\r
    const y=d3.scaleBand().domain(cats).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach(d=>{\r
      const cy=(y(d.cat)??0)+y.bandwidth()/2\r
      g.append('line').attr('x1',x(d.v-d.lo)).attr('x2',x(d.v+d.hi)).attr('y1',cy).attr('y2',cy).attr('stroke',colors[0]).attr('stroke-width',1.2)\r
      g.append('line').attr('x1',x(d.v-d.lo)).attr('x2',x(d.v-d.lo)).attr('y1',cy-4).attr('y2',cy+4).attr('stroke',colors[0]).attr('stroke-width',1.2)\r
      g.append('line').attr('x1',x(d.v+d.hi)).attr('x2',x(d.v+d.hi)).attr('y1',cy-4).attr('y2',cy+4).attr('stroke',colors[0]).attr('stroke-width',1.2)\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',cy).attr('r',4).attr('fill',colors[0]).attr('stroke','var(--bg)')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cleveland with Error')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};