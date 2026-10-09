var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'dumbbell-matrix',\r
  title: 'Dumbbell Matrix',\r
  desc: 'Dumbbell Matrix — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'DumbbellMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","dumbbell-matrix"],\r
}\r
\r
export default function DumbbellMatrix({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['Alpha','Beta','Gamma','Delta']\r
    const gen = () => [{"group":"Alpha","a":36,"b":55},{"group":"Beta","a":44,"b":63},{"group":"Gamma","a":21,"b":58},{"group":"Delta","a":24,"b":61}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(groups).range([0,height]).padding(0.36)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach(d=>{\r
      const ya=(y(d.group)??0)+y.bandwidth()/2\r
      g.append('line').attr('x1',x(d.a)).attr('x2',x(d.b)).attr('y1',ya).attr('y2',ya).attr('stroke',colors[0]).attr('stroke-width',2).attr('opacity',0.48)\r
      g.append('circle').attr('cx',x(d.a)).attr('cy',ya).attr('r',5).attr('fill','#94a3b8').attr('stroke','var(--bg)')\r
      g.append('circle').attr('cx',x(d.b)).attr('cy',ya).attr('r',5).attr('fill',colors[0]).attr('stroke','var(--bg)')\r
      const diff=d.b-d.a\r
      g.append('text').attr('x',x(d.b)+6).attr('y',ya+3).attr('fill',diff>=0?'#22c55e':'#ef4444').attr('font-size','7px').text(\`\${diff>0?'+':''}\${diff}\`)\r
    })\r
    // legend\r
    g.append('circle').attr('cx',width-54).attr('cy',8).attr('r',4).attr('fill','#94a3b8'); g.append('text').attr('x',width-47).attr('y',11).attr('fill','var(--text-secondary)').attr('font-size','7px').text('Before')\r
    g.append('circle').attr('cx',width-54).attr('cy',18).attr('r',4).attr('fill',colors[0]); g.append('text').attr('x',width-47).attr('y',21).attr('fill','var(--text-secondary)').attr('font-size','7px').text('After')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Dumbbell Matrix')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};