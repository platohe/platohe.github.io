var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'diverging-stacked-enhanced',\r
  title: 'Diverging Stacked Enhanced',\r
  desc: 'Diverging Stacked Enhanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingStackedEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","diverging-stacked-enhanced"],\r
}\r
\r
export default function DivergingStackedEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['Q1','Q2','Q3','Q4','Q5']\r
    const segs=['Strong Disagree','Disagree','Neutral','Agree','Strong Agree']\r
    const gen = () => [{"cat":"Q1","Strong Disagree":0.212,"Disagree":0.176,"Neutral":0.271,"Agree":0.228,"Strong Agree":0.112},{"cat":"Q2","Strong Disagree":0.194,"Disagree":0.134,"Neutral":0.217,"Agree":0.273,"Strong Agree":0.181},{"cat":"Q3","Strong Disagree":0.142,"Disagree":0.304,"Neutral":0.269,"Agree":0.156,"Strong Agree":0.128},{"cat":"Q4","Strong Disagree":0.212,"Disagree":0.262,"Neutral":0.241,"Agree":0.081,"Strong Agree":0.204},{"cat":"Q5","Strong Disagree":0.347,"Disagree":0.107,"Neutral":0.272,"Agree":0.101,"Strong Agree":0.173}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleBand().domain(cats).range([0,height]).padding(0.22)\r
    // diverging at Neutral center: left = Strong Disagree+Disagree, right = Agree+Strong Agree, Neutral split\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const x=d3.scaleLinear().domain([-1,1]).range([0,width])\r
    const col=d3.scaleOrdinal(['#ef4444','#fca5a5','#e5e7eb','#93c5fd','#2563eb']).domain(segs)\r
    g.append('line').attr('x1',x(0)).attr('x2',x(0)).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    data.forEach(d=>{\r
      let left=-d['Neutral']/2 - d['Disagree'] - d['Strong Disagree']\r
      const order=['Strong Disagree','Disagree','Neutral','Agree','Strong Agree']\r
      let cur=left\r
      order.forEach(k=>{\r
        const w=d[k]\r
        g.append('rect').attr('x',x(cur)).attr('y',y(d.cat)??0).attr('width',x(cur+w)-x(cur)).attr('height',y.bandwidth()).attr('fill',col(k)).attr('stroke','var(--bg)').attr('rx',2)\r
        cur+=w\r
      })\r
      g.append('text').attr('x',x(1)+4).attr('y',(y(d.cat)??0)+y.bandwidth()/2+3).attr('fill','var(--text-secondary)').attr('font-size','6px').text(\`\${Math.round(d['Agree']*100+d['Strong Agree']*100)}%\`)\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickFormat(d3.format('.0%')).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Diverging Stacked Enhanced (Likert)')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};