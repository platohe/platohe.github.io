var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'notched-with-ci',\r
  title: 'Notched With C I',\r
  desc: 'Notched With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NotchedWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","notched-with-c-i"],\r
}\r
\r
export default function NotchedWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East']\r
    const gen = () => [[33.482,40.997,23.742,31.45,38.176,57.514,41.046,24.18,36.674,8,50.218,55.037,60.547,48.223,56.21,55.333,48.777,28.199,70.738,34.225,32.759,37.57,49.404,47.634,39.344,30.555,40.624,47.623,40.601,46.467,66.953,28.389,52.802,39.278,43.287,47.923,49.489,66.617,54.194,31.479,30.652,41.867],[41.666,55.826,58.93,44.317,71.832,54.378,64.309,34.346,62.716,59.125,55.167,41.734,46.196,62.341,66.029,62.336,68.196,53.932,55.351,65.452,59.23,46.978,77.346,55.624,55.246,73.962,77.101,69.591,67.983,54.879,44.256,52.328,50.314,55.589,47.998,47.76,49.468,50.665,59.793,50.976,69.842,74.156],[55.028,42.31,59.733,45.404,66.329,58.709,47.059,36.17,53.858,37.515,50.058,55.346,59.992,64.341,46.295,60.122,47.25,55.956,45.397,62.079,46.369,49.223,61.187,37.794,78.439,50.483,54.4,48.412,48.874,72.874,35.89,49.549,53.622,42.036,40.165,38.91,44.916,62.129,50.596,40.173,42.53,74.015]]\r
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
      const n=vals.length, notch=1.58*(q3-q1)/Math.sqrt(n)\r
      const cx=(x(groups[i])??0)+x.bandwidth()/2, bw=x.bandwidth()*0.62\r
      const yQ1=y(q1), yQ3=y(q3), yM=y(m), yNM=y(m-notch), yPM=y(m+notch)\r
      const left=cx-bw/2, right=cx+bw/2, midL=cx-bw*0.22, midR=cx+bw*0.22\r
      const path=\`M\${left},\${yQ3} L\${left},\${yPM} L\${midL},\${yM} L\${left},\${yNM} L\${left},\${yQ1} L\${right},\${yQ1} L\${right},\${yNM} L\${midR},\${yM} L\${right},\${yPM} L\${right},\${yQ3}Z\`\r
      g.append('path').attr('d',path).attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',1.1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      // CI band faint\r
      g.append('rect').attr('x',cx-2).attr('y',yPM).attr('width',4).attr('height',yNM-yPM).attr('fill','#0f172a').attr('opacity',0.08)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Notched with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};