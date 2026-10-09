var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'notched-box-plot',\r
  title: 'Notched Box Plot',\r
  desc: 'Notched Box Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NotchedBoxPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","notched-box-plot"],\r
}\r
\r
export default function NotchedBoxPlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C','D']\r
    const gen = () => [[31.482,38.997,21.742,29.45,36.176,55.514,39.046,22.18,34.674,8,48.218,53.037,58.547,46.223,54.21,53.333,46.777,26.199,68.738,32.225,30.759,35.57,47.404,45.634,37.344,28.555,38.624,45.623,38.601,44.467,64.953,26.389,50.802,37.278],[48.287,52.923,54.489,71.617,59.194,36.479,35.652,46.867,32.666,46.826,49.93,35.317,62.832,45.378,55.309,25.346,53.716,50.125,46.167,32.734,37.196,53.341,57.029,53.336,59.196,44.932,46.351,56.452,50.23,37.978,68.346,46.624,46.246,64.962],[75.101,67.591,65.983,52.879,42.256,50.328,48.314,53.589,45.998,45.76,47.468,48.665,57.793,48.976,67.842,72.156,59.028,46.31,63.733,49.404,70.329,62.709,51.059,40.17,57.858,41.515,54.058,59.346,63.992,68.341,50.295,64.122,51.25,59.956],[56.397,73.079,57.369,60.223,72.187,48.794,89.439,61.483,65.4,59.412,59.874,83.874,46.89,60.549,64.622,53.036,51.165,49.91,55.916,73.129,61.596,51.173,53.53,85.015,83.143,80.475,48.718,73.302,44.888,57.482,72.752,63.002,65.875,67.071]]\r
    const raw=Array.isArray(customData)&&customData.length&&Array.isArray(customData[0])?customData:gen()\r
    const data=groups.map((g,i)=> raw[i]||gen()[i])\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.42)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    data.forEach((vals,i)=>{\r
      const sorted=[...vals].sort(d3.ascending)\r
      const q1=d3.quantile(sorted,0.25)||0, m=d3.median(sorted)||0, q3=d3.quantile(sorted,0.75)||0\r
      const min=d3.min(sorted)||0, max=d3.max(sorted)||0\r
      const n=vals.length\r
      const notch=1.58*( (d3.quantile(sorted,0.75)-d3.quantile(sorted,0.25)) / Math.sqrt(n)) || 4\r
      const cx=(x(groups[i])??0)+x.bandwidth()/2\r
      const bw=x.bandwidth()*0.62\r
      // box with notch as polygon\r
      const left=cx-bw/2, right=cx+bw/2, midL=cx-bw*0.22, midR=cx+bw*0.22\r
      const yQ1=y(q1), yQ3=y(q3), yM=y(m), yNM=y(m-notch), yPM=y(m+notch)\r
      const path=\`M\${left},\${yQ3} L\${left},\${yPM} L\${midL},\${yM} L\${left},\${yNM} L\${left},\${yQ1} L\${right},\${yQ1} L\${right},\${yNM} L\${midR},\${yM} L\${right},\${yPM} L\${right},\${yQ3}Z\`\r
      g.append('path').attr('d',path).attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',1.1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-bw/2).attr('x2',cx+bw/2).attr('y1',y(min)).attr('y2',y(min)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-bw/2).attr('x2',cx+bw/2).attr('y1',y(max)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Notched Box Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};