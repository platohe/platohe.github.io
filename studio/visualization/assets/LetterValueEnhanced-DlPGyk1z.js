var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'letter-value-enhanced',\r
  title: 'Letter Value Enhanced',\r
  desc: 'Letter Value Enhanced — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LetterValueEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","letter-value-enhanced"],\r
}\r
\r
export default function LetterValueEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [[28.614,38.178,16.217,26.028,34.588,59.2,38.241,16.775,32.676,6,49.914,56.048,63.06,47.375,57.539,56.424,48.08,21.89,76.03,29.559,27.693,33.816,48.878,46.625,36.074,24.889,37.703,46.612,37.675,45.139,71.213,22.132,53.203,35.99,41.093,46.993,48.985,70.785,54.974,26.064,25.012,39.285,21.211,39.233,43.184,24.586,59.604,37.39,50.029,11.894,48.002,43.431,38.394,21.297,26.976,47.525,52.219,47.519,54.976,36.822,38.628,51.485,43.566,27.972],[82.622,54.976,54.495,78.315,82.31,72.752,70.705,54.027,40.508,50.781,48.218,54.931,45.27,44.967,47.141,48.665,60.282,49.06,73.071,78.563,61.854,45.667,67.843,49.605,76.237,66.539,51.712,37.853,60.365,39.564,55.528,62.258,68.172,73.706,50.739,68.337,51.954,63.034,49.596,70.828,50.833,54.465,69.693,39.92,91.65,56.069,61.054,53.434,54.022,84.567,37.497,54.881,60.065,45.318,42.938,41.34,48.984,70.892,56.213,42.948,45.948,86.019,83.637,80.24],[49.823,81.111,44.948,60.977,80.412,68.002,71.659,73.181,75.03,94,65.334,61.876,82.891,37.2,63.611,59.763,91.415,67.553,78.231,65.967,73.47,46.647,57.901,56.574,83.071,68.259,53.46,76.299,81.892,83.459,58.062,76.145,77.261,75.015,89.482,65.389,69.786,65.61,82.666,61.909,83.42,80.912,57.086,54.659,56.659,85.363,89.868,77.244,64.614,94,61.005,82.012,79.391,64.164,47.044,44.524,66.577,56.744,53.952,73.875,78.536,94,48.319,70.974]]\r
    const raw=Array.isArray(customData)&&customData.length&&Array.isArray(customData[0])?customData:gen()\r
    const labels=['A','B','C']\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(labels).range([0,width]).padding(0.48)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    raw.forEach((vals,i)=>{\r
      const sorted=[...vals].sort(d3.ascending)\r
      const qs=[0.5,0.25,0.75,0.125,0.875,0.0625,0.9375]\r
      const levels=[ [0.25,0.75, colors[i]], [0.125,0.875, colors[i]], [0.0625,0.9375, colors[i]] ]\r
      const cx=(x(labels[i])??0)+x.bandwidth()/2\r
      const bw=x.bandwidth()*0.62\r
      // central median line\r
      const m=d3.median(sorted)||50\r
      g.append('line').attr('x1',cx-bw/2).attr('x2',cx+bw/2).attr('y1',y(m)).attr('y2',y(m)).attr('stroke','#0f172a').attr('stroke-width',1.4)\r
      levels.forEach(([q0,q1,col],li)=>{\r
        const v0=d3.quantile(sorted,q0)||0, v1=d3.quantile(sorted,q1)||0\r
        const alpha=0.72 - li*0.18\r
        g.append('rect').attr('x',cx-bw/2+li*3).attr('y',y(v1)).attr('width',bw-li*6).attr('height',Math.max(1, y(v0)-y(v1))).attr('fill',col).attr('fill-opacity',alpha).attr('stroke',col).attr('stroke-width',0.6).attr('rx',2)\r
      })\r
      const min=d3.min(sorted)||0, max=d3.max(sorted)||0\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(d3.quantile(sorted,0.0625)||min)).attr('stroke',colors[i]).attr('stroke-width',0.8)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(max)).attr('y2',y(d3.quantile(sorted,0.9375)||max)).attr('stroke',colors[i]).attr('stroke-width',0.8)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Letter-Value Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};