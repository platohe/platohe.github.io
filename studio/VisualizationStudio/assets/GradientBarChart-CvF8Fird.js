var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'gradient-bar-chart',\r
  title: 'Gradient Bar Chart',\r
  desc: 'Gradient Bar Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GradientBarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","gradient-bar-chart"],\r
}\r
\r
export default function GradientBarChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'North',v:62},{cat:'South',v:48},{cat:'East',v:74},{cat:'West',v:38},{cat:'Central',v:56}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,width]).padding(0.18)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||80]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    // gradient per bar by value\r
    const defs=svg.append('defs')\r
    data.forEach((d,i)=>{\r
      const grad=defs.append('linearGradient').attr('id',\`gradBar\${i}\`).attr('x1','0%').attr('y1','0%').attr('x2','0%').attr('y2','100%')\r
      grad.append('stop').attr('offset','0%').attr('stop-color',d3.interpolateBlues(0.85))\r
      grad.append('stop').attr('offset','100%').attr('stop-color',d3.interpolateBlues(0.45))\r
      g.append('rect').attr('x',x(d.cat)??0).attr('y',y(d.v)).attr('width',x.bandwidth()).attr('height',height-y(d.v))\r
        .attr('fill',\`url(#gradBar\${i})\`).attr('stroke','var(--bg)').attr('rx',3)\r
      g.append('text').attr('x',(x(d.cat)??0)+x.bandwidth()/2).attr('y',y(d.v)-4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text(d.v)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Gradient Bar Chart')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};