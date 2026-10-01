var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'tornado-multi',\r
  title: 'Tornado Multi',\r
  desc: 'Tornado Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TornadoMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tornado-multi"],\r
}\r
\r
export default function TornadoMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'Price',low:-18,high:22},{cat:'Demand',low:-12,high:16},{cat:'Cost',low:-9,high:14},{cat:'Rate',low:-6,high:10},{cat:'Tax',low:-4,high:7}]\r
    // Editor/default data may arrive as a single signed {v} per row instead of {low,high};\r
    // derive the pair when needed, coerce to finite numbers, fall back to the synthetic series.\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const normalized=Array.isArray(customData)?customData.flatMap(d=>{\r
      if(!d||typeof d!=='object')return []\r
      const cat=d.cat??d.label; if(cat==null)return []\r
      let low=toNum(d.low), high=toNum(d.high)\r
      if(low===null||high===null){\r
        const v=toNum(d.v)\r
        if(v===null)return []\r
        low=v<0?v:0; high=v>0?v:0\r
      }\r
      return [{cat:String(cat), low, high}]\r
    }):[]\r
    const data=normalized.length?normalized:DEFAULT\r
    const sorted=[...data].sort((a,b)=> (b.high-b.low)-(a.high-a.low))\r
    const margin={top:28,right:46,bottom:14,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleBand().domain(sorted.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const domainLow=d3.min(sorted,d=>d.low), domainHigh=d3.max(sorted,d=>d.high)\r
    const x=d3.scaleLinear().domain([domainLow*1.1, domainHigh*1.1]).nice().range([0,width])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zero=isNaN(domainLow)||isNaN(domainHigh)?width/2:x(0)\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    sorted.forEach(d=>{\r
      const yy=(y(d.cat)??0)+y.bandwidth()/2\r
      g.append('rect').attr('x',x(d.low)).attr('y',yy-6).attr('width',zero - x(d.low)).attr('height',12).attr('fill','#f59e0b').attr('rx',2)\r
      g.append('rect').attr('x',zero).attr('y',yy-6).attr('width',x(d.high)-zero).attr('height',12).attr('fill','#22c55e').attr('rx',2)\r
      g.append('text').attr('x',x(d.low)-4).attr('y',yy+3).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','6px').text(d.low)\r
      g.append('text').attr('x',x(d.high)+4).attr('y',yy+3).attr('fill','var(--text-secondary)').attr('font-size','6px').text(\`+\${d.high}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Tornado Sensitivity (Multi)')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};