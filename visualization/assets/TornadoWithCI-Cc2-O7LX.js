var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'tornado-with-ci',\r
  title: 'Tornado With C I',\r
  desc: 'Tornado With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TornadoWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tornado-with-c-i"],\r
}\r
\r
export default function TornadoWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'Price',low:-14,high:18, loCI:2, hiCI:3},{cat:'Cost',low:-9,high:12, loCI:1.5, hiCI:2},{cat:'Demand',low:-7,high:9, loCI:1, hiCI:1.5},{cat:'Rate',low:-4,high:6, loCI:0.8, hiCI:1}]\r
    const toNum=n=>{ const x=Number(n); return Number.isFinite(x)?x:null }\r
    const normalized=Array.isArray(customData)?customData.flatMap(d=>{\r
      if(!d||typeof d!=='object') return []\r
      const cat=d.cat??d.label??d.factor; if(cat==null) return []\r
      let low=toNum(d.low), high=toNum(d.high)\r
      let loCI=toNum(d.loCI), hiCI=toNum(d.hiCI)\r
      if(low===null||high===null){\r
        const v=toNum(d.v)\r
        if(v===null) return []\r
        const loAbs=toNum(d.loCI), hiAbs=toNum(d.hiCI)\r
        if(loAbs!==null&&hiAbs!==null){\r
          const ciLow=Math.min(loAbs,hiAbs), ciHigh=Math.max(loAbs,hiAbs)\r
          low=v<0?v:0; high=v>0?v:0\r
          return {cat:String(cat), low, high, loCI:0, hiCI:0, ciLow, ciHigh}\r
        }\r
        low=v<0?v:0; high=v>0?v:0\r
        return {cat:String(cat), low, high, loCI:Number.isFinite(loCI)?loCI:0, hiCI:Number.isFinite(hiCI)?hiCI:0}\r
      }\r
      return {cat:String(cat), low, high, loCI:Number.isFinite(loCI)?loCI:0, hiCI:Number.isFinite(hiCI)?hiCI:0}\r
    }):[]\r
    const data=normalized.length?normalized:DEFAULT\r
    const sorted=[...data].sort((a,b)=> (b.high-b.low)-(a.high-a.low))\r
    const margin={top:28,right:46,bottom:14,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleBand().domain(sorted.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const hasAbsoluteCI=data.some(d=>d.ciLow!==undefined)\r
    let domainLow, domainHigh\r
    if(hasAbsoluteCI){\r
      domainLow=d3.min(sorted,d=> d.ciLow!==undefined? Math.min(d.low, d.ciLow) : d.low-(d.loCI??0))\r
      domainHigh=d3.max(sorted,d=> d.ciHigh!==undefined? Math.max(d.high, d.ciHigh) : d.high+(d.hiCI??0))\r
    } else {\r
      domainLow=d3.min(sorted,d=>d.low-(d.loCI??0))\r
      domainHigh=d3.max(sorted,d=>d.high+(d.hiCI??0))\r
    }\r
    if(!Number.isFinite(domainLow)||!Number.isFinite(domainHigh)){ domainLow=-20; domainHigh=20 }\r
    if(domainLow===domainHigh){ domainLow-=1; domainHigh+=1 }\r
    const x=d3.scaleLinear().domain([domainLow*1.1, domainHigh*1.1]).nice().range([0,width])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zeroRaw=x(0); const zero=Number.isFinite(zeroRaw)?zeroRaw:width/2\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const safeX=v=>{ const xv=x(v); return Number.isFinite(xv)?xv:zero }\r
    sorted.forEach(d=>{\r
      const yy=(y(d.cat)??0)+y.bandwidth()/2\r
      const xLow=safeX(d.low), xHigh=safeX(d.high)\r
      const wLeft=Math.max(0, zero - xLow)\r
      const wRight=Math.max(0, xHigh - zero)\r
      g.append('rect').attr('x',xLow).attr('y',yy-6).attr('width',wLeft).attr('height',12).attr('fill','#f59e0b').attr('rx',2)\r
      g.append('rect').attr('x',zero).attr('y',yy-6).attr('width',wRight).attr('height',12).attr('fill','#22c55e').attr('rx',2)\r
      if(d.ciLow!==undefined&&d.ciHigh!==undefined){\r
        const xCiLow=safeX(d.ciLow), xCiHigh=safeX(d.ciHigh)\r
        g.append('line').attr('x1',xCiLow).attr('x2',xCiHigh).attr('y1',yy).attr('y2',yy).attr('stroke','var(--text)').attr('stroke-width',1)\r
        g.append('line').attr('x1',xCiLow).attr('x2',xCiLow).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
        g.append('line').attr('x1',xCiHigh).attr('x2',xCiHigh).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
      } else {\r
        const xLo=safeX(d.low-(d.loCI??0)), xHi=safeX(d.high+(d.hiCI??0))\r
        g.append('line').attr('x1',xLo).attr('x2',xLow).attr('y1',yy).attr('y2',yy).attr('stroke','var(--text)').attr('stroke-width',1)\r
        g.append('line').attr('x1',xHigh).attr('x2',xHi).attr('y1',yy).attr('y2',yy).attr('stroke','var(--text)').attr('stroke-width',1)\r
        g.append('line').attr('x1',xLo).attr('x2',xLo).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
        g.append('line').attr('x1',xHi).attr('x2',xHi).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Tornado with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};