var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'bipartite-enhanced',\r
  title: 'Bipartite Enhanced',\r
  desc: 'Bipartite Enhanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BipartiteEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bipartite-enhanced"],\r
}\r
\r
export default function BipartiteEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const left=['A1','A2','A3','A4'], right=['B1','B2','B3','B4','B5']\r
    const rawLinks=(customData&&Array.isArray(customData.links)&&customData.links.length)?customData.links:[\r
      {s:0,t:0,v:12},{s:0,t:2,v:8},{s:1,t:1,v:14},{s:1,t:3,v:6},{s:2,t:0,v:9},{s:2,t:4,v:11},{s:3,t:2,v:7},{s:3,t:3,v:10},\r
    ]\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const links=rawLinks.flatMap(l=>{\r
      if(!l||typeof l!=='object') return []\r
      // Support multiple shapes: {s,t,v} or {source,target,value} or {left,right,value}\r
      const sRaw=l.s??l.source??l.left??l.from\r
      const tRaw=l.t??l.target??l.right??l.to\r
      const vRaw=l.v??l.value??l.weight\r
      const s=toNum(sRaw), t=toNum(tRaw), v=toNum(vRaw)\r
      if(s===null||t===null) return []\r
      // indices must be within band domains\r
      if(s<0||s>=left.length||t<0||t>=right.length) return []\r
      const vSafe=v!==null?v:1\r
      return [{s:Math.floor(s), t:Math.floor(t), v:vSafe}]\r
    })\r
    const effLinks=links.length?links:[\r
      {s:0,t:0,v:12},{s:0,t:2,v:8},{s:1,t:1,v:14},{s:1,t:3,v:6},{s:2,t:0,v:9},{s:2,t:4,v:11},{s:3,t:2,v:7},{s:3,t:3,v:10},\r
    ]\r
    const margin={top:28,right:86,bottom:14,left:86}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const yL=d3.scaleBand().domain(d3.range(left.length)).range([0,height]).padding(0.32)\r
    const yR=d3.scaleBand().domain(d3.range(right.length)).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const xL=0, xR=width\r
    const safeY=(scale, idx)=>{\r
      const pos=scale(idx)\r
      return Number.isFinite(pos)?pos:0\r
    }\r
    // ribbons\r
    effLinks.forEach(l=>{\r
      const bwL=yL.bandwidth(), bwR=yR.bandwidth()\r
      if(!Number.isFinite(bwL)||!Number.isFinite(bwR)) return\r
      const y1=safeY(yL,l.s)+bwL/2, y2=safeY(yR,l.t)+bwR/2\r
      if(!Number.isFinite(y1)||!Number.isFinite(y2)) return\r
      const wRaw=Number.isFinite(l.v)? l.v*0.9 : 1\r
      const w=Math.max(1.2, wRaw)\r
      if(!Number.isFinite(w)) return\r
      const src={x:xL+56, y:y1}, tgt={x:xR-56, y:y2}\r
      if(!Number.isFinite(src.x)||!Number.isFinite(src.y)||!Number.isFinite(tgt.x)||!Number.isFinite(tgt.y)) return\r
      const path=d3.linkHorizontal()({source:src, target:tgt})\r
      if(!path||path.includes('NaN')) return\r
      g.append('path').attr('d',path).attr('fill','none').attr('stroke',colors[l.s%colors.length]).attr('stroke-width',w).attr('opacity',0.48)\r
    })\r
    left.forEach((n,i)=>{\r
      g.append('rect').attr('x',xL).attr('y',yL(i)??0).attr('width',56).attr('height',yL.bandwidth()).attr('fill',colors[i%colors.length]).attr('rx',4).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',xL+28).attr('y',(yL(i)??0)+yL.bandwidth()/2+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').attr('font-weight',700).text(n)\r
    })\r
    right.forEach((n,i)=>{\r
      g.append('rect').attr('x',xR-56).attr('y',yR(i)??0).attr('width',56).attr('height',yR.bandwidth()).attr('fill',colors[(i+2)%colors.length]).attr('fill-opacity',0.82).attr('rx',4).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',xR-28).attr('y',(yR(i)??0)+yR.bandwidth()/2+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').attr('font-weight',700).text(n)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bipartite Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};