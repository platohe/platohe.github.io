var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'notched-enhanced',\r
  title: 'Notched Enhanced',\r
  desc: 'Notched Enhanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NotchedEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","notched-enhanced"],\r
}\r
\r
export default function NotchedEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East','West']\r
    const gen = () => [[34.438,41.27,25.584,32.591,38.706,56.286,41.315,25.982,37.34,11.209,49.653,54.034,59.043,47.839,55.1,54.303,48.343,29.635,68.307,35.113,33.781,38.154,48.913,47.304,39.767,31.778,40.93,47.294,40.91,46.242,64.866,29.808,52.002,39.707,43.352,47.566],[54.99,70.561,59.267,38.617,37.866,48.061,35.151,48.023,50.845,37.561,62.574,46.707,55.735,28.496,54.287,51.022,47.424,35.212,39.269,53.946,57.299,53.942,59.269,46.301,47.592,56.775,51.119,39.98,67.587,47.84,47.496,64.511,67.364,60.537,59.075,47.162],[43.505,50.844,49.013,53.808,46.907,46.691,48.244,49.332,57.63,49.614,66.765,70.688,58.753,47.191,63.03,50.004,69.027,62.099,51.508,41.61,57.689,42.832,54.234,59.041,63.266,67.219,50.814,63.384,51.682,59.596,49.997,65.163,50.881,53.475,64.352,43.086],[86.036,60.621,64.181,58.739,59.158,80.976,47.355,59.772,63.475,52.942,51.241,50.1,55.56,71.209,60.724,51.248,53.391,82.013,80.312,77.886,49.017,71.365,45.534,56.984,70.865,62.002,64.614,65.701,67.022,80.608,60.096,57.626,72.636,40,58.865,56.117]]\r
    const raw=Array.isArray(customData)&&customData.length&&Array.isArray(customData[0])?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.42)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    raw.forEach((vals,i)=>{\r
      const sorted=[...vals].sort(d3.ascending)\r
      const q1=d3.quantile(sorted,0.25)||0, m=d3.median(sorted)||0, q3=d3.quantile(sorted,0.75)||0, min=d3.min(sorted)||0, max=d3.max(sorted)||0\r
      const n=vals.length\r
      const notch=1.58*(q3-q1)/Math.sqrt(n)\r
      const cx=(x(groups[i])??0)+x.bandwidth()/2, bw=x.bandwidth()*0.62\r
      const yQ1=y(q1), yQ3=y(q3), yM=y(m), yNM=y(m-notch), yPM=y(m+notch)\r
      const left=cx-bw/2, right=cx+bw/2, midL=cx-bw*0.22, midR=cx+bw*0.22\r
      const path=\`M\${left},\${yQ3} L\${left},\${yPM} L\${midL},\${yM} L\${left},\${yNM} L\${left},\${yQ1} L\${right},\${yQ1} L\${right},\${yNM} L\${midR},\${yM} L\${right},\${yPM} L\${right},\${yQ3}Z\`\r
      g.append('path').attr('d',path).attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',1.1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      // significance between A vs B\r
      if(i===1){\r
        const mA=d3.median(raw[0])||0, mB=m\r
        const sig=Math.abs(mA-mB)>4\r
        g.append('line').attr('x1',(x(groups[0])??0)+x.bandwidth()/2).attr('x2',cx).attr('y1',12).attr('y2',12).attr('stroke',sig?'#ef4444':'#94a3b8').attr('stroke-width',1)\r
        g.append('text').attr('x',((x(groups[0])??0)+(x(groups[1])??0))/2 + x.bandwidth()/2).attr('y',10).attr('text-anchor','middle').attr('fill',sig?'#ef4444':'#94a3b8').attr('font-size','7px').text(sig?'* sig':'ns')\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Notched Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};