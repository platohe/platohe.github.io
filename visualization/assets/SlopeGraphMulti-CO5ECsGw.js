var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'slope-graph-multi',\r
  title: 'Slope Graph Multi',\r
  desc: 'Slope Graph Multi — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'SlopeGraphMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","slope-graph-multi"],\r
}\r
\r
export default function SlopeGraphMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['Design','Engineering','Sales','Support','Research']\r
    const gen = () => [{"cat":"Design","v2019":54,"v2024":47},{"cat":"Engineering","v2019":64,"v2024":56},{"cat":"Sales","v2019":36,"v2024":51},{"cat":"Support","v2019":40,"v2024":54},{"cat":"Research","v2019":64,"v2024":48}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:80,bottom:22,left:80}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const x0=0, x1=width\r
    g.append('line').attr('x1',x0).attr('x2',x0).attr('y1',0).attr('y2',height).attr('stroke','var(--border)')\r
    g.append('line').attr('x1',x1).attr('x2',x1).attr('y1',0).attr('y2',height).attr('stroke','var(--border)')\r
    g.append('text').attr('x',x0).attr('y',-8).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','9px').attr('font-weight',700).text('2019')\r
    g.append('text').attr('x',x1).attr('y',-8).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','9px').attr('font-weight',700).text('2024')\r
    data.forEach((d,i)=>{\r
      const col=colors[i%colors.length]\r
      const up=d.v2024>d.v2019\r
      g.append('line').attr('x1',x0).attr('x2',x1).attr('y1',y(d.v2019)).attr('y2',y(d.v2024)).attr('stroke',col).attr('stroke-width',2.2).attr('opacity',0.9)\r
      g.append('circle').attr('cx',x0).attr('cy',y(d.v2019)).attr('r',4).attr('fill',col).attr('stroke','var(--bg)')\r
      g.append('circle').attr('cx',x1).attr('cy',y(d.v2024)).attr('r',4).attr('fill',col).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x0-6).attr('y',y(d.v2019)+3).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','6px').text(\`\${d.cat} \${d.v2019}\`)\r
      g.append('text').attr('x',x1+6).attr('y',y(d.v2024)+3).attr('fill',col).attr('font-size','6px').attr('font-weight',600).text(\`\${d.v2024} \${up?'↗':'↘'}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Slope Graph (Multi-Year)')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};