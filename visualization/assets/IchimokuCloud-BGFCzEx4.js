var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'ichimoku-cloud',\r
  title: 'Ichimoku Cloud',\r
  desc: 'Ichimoku Cloud — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IchimokuCloud',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ichimoku-cloud"],\r
}\r
\r
export default function IchimokuCloud({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const gen = () => [{"open":100,"high":101.708,"low":97.443,"close":100.363},{"open":100.363,"high":101.457,"low":98.784,"close":100.933},{"open":100.933,"high":102.807,"low":97.716,"close":100.312},{"open":100.312,"high":101.062,"low":97.643,"close":100.289},{"open":100.289,"high":102.007,"low":99.697,"close":101.086},{"open":101.086,"high":103.208,"low":99.254,"close":101.149},{"open":101.149,"high":102.561,"low":97.208,"close":99.72},{"open":99.72,"high":101.497,"low":98.339,"close":98.434},{"open":98.434,"high":98.619,"low":97.238,"close":97.795},{"open":97.795,"high":100.296,"low":97.713,"close":98.705},{"open":98.705,"high":101.233,"low":96.321,"close":97.784},{"open":97.784,"high":99.73,"low":96.435,"close":98.771},{"open":98.771,"high":98.925,"low":95.774,"close":97.444},{"open":97.444,"high":98.529,"low":95.507,"close":97.794},{"open":97.794,"high":98.705,"low":94.766,"close":96.982},{"open":96.982,"high":99.642,"low":96.37,"close":98.118},{"open":98.118,"high":98.997,"low":97.307,"close":97.531},{"open":97.531,"high":100.113,"low":95.452,"close":98.071},{"open":98.071,"high":99.678,"low":95.239,"close":99.414},{"open":99.414,"high":102.241,"low":98.856,"close":99.268},{"open":99.268,"high":99.315,"low":97.079,"close":98.16},{"open":98.16,"high":100.001,"low":95.462,"close":98.166},{"open":98.166,"high":100.324,"low":94.154,"close":96.958},{"open":96.958,"high":99.078,"low":95.814,"close":96.353},{"open":96.353,"high":98.94,"low":95.991,"close":96.474},{"open":96.474,"high":99.709,"low":93.726,"close":98.021},{"open":98.021,"high":99.756,"low":96.872,"close":97.883},{"open":97.883,"high":99.201,"low":95.695,"close":98.232},{"open":98.232,"high":99.581,"low":95.148,"close":97.677},{"open":97.677,"high":101.305,"low":95.007,"close":98.322},{"open":98.322,"high":99.958,"low":97.29,"close":98.178},{"open":98.178,"high":100.268,"low":96.101,"close":97.041},{"open":97.041,"high":100.673,"low":96.76,"close":97.959},{"open":97.959,"high":100.424,"low":97.555,"close":97.945},{"open":97.945,"high":99.958,"low":95.816,"close":99.423},{"open":99.423,"high":100.752,"low":98.184,"close":100.082},{"open":100.082,"high":102.046,"low":98.125,"close":99.132},{"open":99.132,"high":101.019,"low":95.653,"close":98.313},{"open":98.313,"high":100.691,"low":96.674,"close":97.852},{"open":97.852,"high":100.444,"low":95.697,"close":96.807},{"open":96.807,"high":99.019,"low":93.489,"close":95.395},{"open":95.395,"high":99.307,"low":94.768,"close":96.583},{"open":96.583,"high":98.422,"low":96.031,"close":96.955},{"open":96.955,"high":99.071,"low":93.532,"close":95.657},{"open":95.657,"high":96.484,"low":94.082,"close":95.092},{"open":95.092,"high":95.754,"low":90.758,"close":93.739},{"open":93.739,"high":96.982,"low":93.247,"close":94.016},{"open":94.016,"high":95.699,"low":92.211,"close":93.089},{"open":93.089,"high":94.392,"low":91.577,"close":92.832},{"open":92.832,"high":94.646,"low":91.824,"close":93.451},{"open":93.451,"high":95.68,"low":91.965,"close":94.698},{"open":94.698,"high":96.73,"low":92.93,"close":95.09}]\r
    const raw = Array.isArray(customData) && customData.length ? customData : gen()\r
    const n=raw.length\r
    const tenkan = raw.map((_,i)=> i<8?null:(d3.max(raw.slice(i-8,i+1),d=>d.high)+d3.min(raw.slice(i-8,i+1),d=>d.low))/2)\r
    const kijun = raw.map((_,i)=> i<25?null:(d3.max(raw.slice(i-25,i+1),d=>d.high)+d3.min(raw.slice(i-25,i+1),d=>d.low))/2)\r
    const senA = raw.map((_,i)=> tenkan[i]!=null&&kijun[i]!=null ? (tenkan[i]+kijun[i])/2 : null)\r
    const senB = raw.map((_,i)=> i<51?null:(d3.max(raw.slice(i-51,i+1),d=>d.high)+d3.min(raw.slice(i-51,i+1),d=>d.low))/2)\r
    const chikou = raw.map((_,i)=> raw[i+25]?.close ?? null)\r
    const margin={top:28,right:14,bottom:22,left:40}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(d3.range(n)).range([0,width]).padding(0.2)\r
    const y=d3.scaleLinear().domain([d3.min(raw,d=>d.low)*0.97,d3.max(raw,d=>d.high)*1.03]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove())\r
      .call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    // cloud (shifted 26)\r
    const shiftedA = senA.flatMap((v,i)=> i+26<n ? [{i:i+26, v}] : [])\r
    const shiftedB = senB.flatMap((v,i)=> i+26<n ? [{i:i+26, v}] : [])\r
    if(shiftedA.length&&shiftedB.length){\r
      const area=d3.area().x(d=> d.i!=null ? (x(d.i)??0)+x.bandwidth()/2 : undefined).y0(d=>d.vA!=null?y(d.vA):undefined).y1(d=>d.vB!=null?y(d.vB):undefined).curve(d3.curveMonotoneX)\r
      const shiftedBByI = Object.fromEntries(shiftedB.map(s=>[s.i,s.v]))\r
      const cloudData=shiftedA.map(a=>({i:a.i, vA:a.v, vB:shiftedBByI[a.i]??null})).filter(d=>d.vB!=null)\r
      // split into green/red segments\r
      for(let i=0;i<cloudData.length-1;i++){\r
        const a=cloudData[i], b=cloudData[i+1]\r
        const col = a.vA > a.vB ? 'rgba(16,185,129,0.22)' : 'rgba(239,68,68,0.22)'\r
        g.append('path').attr('d', d3.area().x(d=> d.i!=null ? (x(d.i)??0)+x.bandwidth()/2 : undefined).y0(d=>d.vA!=null?y(d.vA):undefined).y1(d=>d.vB!=null?y(d.vB):undefined).curve(d3.curveMonotoneX)([a,b])).attr('fill',col).attr('stroke','none')\r
      }\r
      const lineA=d3.line().x(d=> d.i!=null ? (x(d.i)??0)+x.bandwidth()/2 : undefined).y(d=> d.v!=null ? y(d.v) : undefined).defined(d=>d.v!=null).curve(d3.curveMonotoneX)\r
      g.append('path').datum(shiftedA).attr('d',lineA).attr('fill','none').attr('stroke','#10b981').attr('stroke-width',1).attr('opacity',0.9)\r
      g.append('path').datum(shiftedB).attr('d',lineA).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1).attr('opacity',0.9)\r
    }\r
    // candlesticks\r
    raw.forEach((d,i)=>{\r
      const cx=(x(i)??0)+x.bandwidth()/2\r
      const green=d.close>=d.open\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(d.high)).attr('y2',y(d.low)).attr('stroke',green?'#10b981':'#ef4444').attr('stroke-width',1)\r
      g.append('rect').attr('x',(x(i)??0)).attr('width',x.bandwidth()).attr('y',y(Math.max(d.open,d.close))).attr('height',Math.max(1, Math.abs(y(d.open)-y(d.close)))).attr('fill',green?'#10b981':'#ef4444')\r
    })\r
    // tenkan/kijun/chikou\r
    const lineIdx=d3.line().x((d,i)=> (x(i)??0)+x.bandwidth()/2).y(d=> d==null? height: y(d)).curve(d3.curveMonotoneX)\r
    g.append('path').datum(tenkan).attr('d', d3.line().x((d,i)=> (x(i)??0)+x.bandwidth()/2).y(d=> d==null? null: y(d)).defined(d=>d!=null).curve(d3.curveMonotoneX) ).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1.1)\r
    g.append('path').datum(kijun).attr('d', d3.line().x((d,i)=> (x(i)??0)+x.bandwidth()/2).y(d=> d==null? null: y(d)).defined(d=>d!=null).curve(d3.curveMonotoneX) ).attr('fill','none').attr('stroke','#6366f1').attr('stroke-width',1.1)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Ichimoku Cloud')\r
    const leg=[['Tenkan','#ef4444'],['Kijun','#6366f1'],['Cloud','#10b981']]; leg.forEach(([t,c],i)=>{ g.append('rect').attr('x', width-62).attr('y',6+i*9).attr('width',8).attr('height',2).attr('fill',c); g.append('text').attr('x',width-51).attr('y',8+i*9).attr('fill','var(--text-secondary)').attr('font-size','7px').text(t) })\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};