var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'grouped-bar-with-error',\r
  title: 'Grouped Bar With Error',\r
  desc: 'Grouped Bar With Error — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedBarWithError',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","grouped-bar-with-error"],\r
}\r
\r
export default function GroupedBarWithError({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['Q1','Q2','Q3','Q4'], cats=['Alpha','Beta']\r
    const gen = () => [{"group":"Q1","cat":"Alpha","v":34,"err":4},{"group":"Q1","cat":"Beta","v":41,"err":6},{"group":"Q2","cat":"Alpha","v":22,"err":5},{"group":"Q2","cat":"Beta","v":25,"err":5},{"group":"Q3","cat":"Alpha","v":42,"err":4},{"group":"Q3","cat":"Beta","v":24,"err":7},{"group":"Q4","cat":"Alpha","v":38,"err":3},{"group":"Q4","cat":"Beta","v":23,"err":5}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x0=d3.scaleBand().domain(groups).range([0,width]).padding(0.18)\r
    const x1=d3.scaleBand().domain(cats).range([0,x0.bandwidth()]).padding(0.12)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.v+d.err)||40]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x0).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    data.forEach(d=>{\r
      const x=(x0(d.group)??0)+(x1(d.cat)??0)\r
      g.append('rect').attr('x',x).attr('y',y(d.v)).attr('width',x1.bandwidth()).attr('height',height-y(d.v)).attr('fill',col(d.cat)).attr('rx',2).attr('stroke','var(--bg)')\r
      const cx=x+x1.bandwidth()/2\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(d.v-d.err)).attr('y2',y(d.v+d.err)).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-4).attr('x2',cx+4).attr('y1',y(d.v-d.err)).attr('y2',y(d.v-d.err)).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-4).attr('x2',cx+4).attr('y1',y(d.v+d.err)).attr('y2',y(d.v+d.err)).attr('stroke','var(--text)').attr('stroke-width',1)\r
    })\r
    cats.forEach((c,i)=>{ g.append('rect').attr('x',width-46).attr('y',6+i*12).attr('width',8).attr('height',8).attr('fill',col(c)).attr('rx',2); g.append('text').attr('x',width-36).attr('y',13+i*12).attr('fill','var(--text-secondary)').attr('font-size','7px').text(c) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Grouped Bar with Error')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};