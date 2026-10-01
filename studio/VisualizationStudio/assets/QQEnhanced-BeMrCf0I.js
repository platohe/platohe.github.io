var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'qqenhanced',\r
  title: 'Q Q Enhanced',\r
  desc: 'Q Q Enhanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QQEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","q-q-enhanced"],\r
}\r
\r
export default function QQEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [4.093,24.217,24.775,29.89,30.132,32.889,33.012,34.028,34.064,35.693,36.614,37.559,40.676,41.816,42.588,43.99,44.074,45.675,45.703,46.178,46.241,47.285,49.093,53.139,54.612,54.625,54.993,55.375,56.08,56.878,56.985,57.914,61.203,62.974,64.048,64.424,65.539,67.2,71.06,78.785,79.213,84.03]\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:gen()\r
    const n=vals.length\r
    const theor=vals.map((_,i)=> d3.quantile(vals, (i+0.5)/n) || 0) // placeholder\r
    // theoretical quantiles from normal\r
    const qTheor=d3.range(n).map(i=> d3.quantile(vals, (i+0.5)/n) ?? 0) // actually use normal inverse approx via d3\r
    // simpler: sort vals vs normal quantiles via d3.randomNormal\r
    const sorted=[...vals].sort(d3.ascending)\r
    const exp=d3.range(n).map(i=> {\r
      const p=(i+0.5)/n\r
      // approx normal quantile via probit\r
      const a= Math.sqrt(-2*Math.log(Math.min(p,1-p)))\r
      const q= p<0.5? -(a - (0.010328*a*a+0.802853*a+2.515517)/(1+0.010328*a*a+1.432788*a+1.189269*a)) : (a - (0.010328*a*a+0.802853*a+2.515517)/(1+0.010328*a*a+1.432788*a+1.189269*a))\r
      return 50+ q*14\r
    })\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(exp) ).nice().range([0,width])\r
    const y=d3.scaleLinear().domain(d3.extent(sorted) ).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    // diagonal\r
    const minV=Math.min(d3.min(exp)||0, d3.min(sorted)||0), maxV=Math.max(d3.max(exp)||100, d3.max(sorted)||100)\r
    g.append('line').attr('x1',x(minV)).attr('x2',x(maxV)).attr('y1',y(minV)).attr('y2',y(maxV)).attr('stroke','#94a3b8').attr('stroke-dasharray','3,3')\r
    // confidence band\r
    const band=3.2\r
    const area=d3.area().x(d=>x(d.x)).y0(d=>y(d.y-band)).y1(d=>y(d.y+band)).curve(d3.curveBasis)\r
    const bandData=exp.map((v,i)=>({x:v, y:sorted[i]}))\r
    g.append('path').datum(bandData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.08).attr('stroke','none')\r
    sorted.forEach((v,i)=> g.append('circle').attr('cx',x(exp[i])).attr('cy',y(v)).attr('r',2).attr('fill',colors[0]).attr('opacity',0.82))\r
    g.append('text').attr('x',width/2).attr('y',-8).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('Theoretical quantiles →')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Q-Q Enhanced with Band')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};