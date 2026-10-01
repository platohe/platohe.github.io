var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'letter-value-multi',\r
  title: 'Letter Value Multi',\r
  desc: 'Letter Value Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LetterValueMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","letter-value-multi"],\r
}\r
\r
export default function LetterValueMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['P','Q','R']\r
    const gen = () => [[29.57,38.451,18.059,27.169,35.117,57.972,38.509,18.577,33.342,6,49.349,55.044,61.556,46.991,56.429,55.394,47.646,23.326,73.6,30.447,28.715,34.401,48.387,46.295,36.497,26.111,38.01,46.282,37.984,44.915,69.126,23.551,52.403,36.419,41.158,46.636,48.486,68.729,54.047,27.203,26.225,39.479,22.696,39.43,43.099,25.829,58.346,37.719,49.456,14.045,47.574,43.329,38.651,22.776,28.049,47.13,51.489,47.125,54.05,37.192,38.869,50.807,43.454,28.974,64.863,39.192,38.745,60.864,64.573,55.698,53.798,38.311],[41.757,51.297,48.917,55.15,46.179,45.898,47.917,49.331,60.119,49.699,71.995,77.094,61.579,46.548,67.14,50.205,74.935,65.929,52.161,39.292,60.196,40.881,55.704,61.954,67.445,72.584,51.258,67.599,52.386,62.675,50.197,69.912,51.345,54.718,68.857,41.212,89.247,56.207,60.836,53.76,54.306,82.669,38.961,55.104,59.917,46.224,44.014,42.53,49.628,69.971,56.341,44.023,46.809,84.017,81.805,78.652,41.122,70.175,36.595,51.479,69.525,58.002,61.398,62.811,64.528,82.19,55.524,52.313,71.827,29.4,53.924,50.352],[89.742,67.585,77.501,66.112,73.079,48.172,58.622,57.39,81.994,68.24,54.499,75.706,80.9,82.355,58.772,75.563,76.6,74.514,87.948,65.576,69.658,65.78,81.618,62.344,82.319,79.99,57.866,55.612,57.469,84.123,88.306,76.584,64.856,94,61.505,81.011,78.577,64.438,48.541,46.201,66.678,57.548,54.956,73.455,77.784,93.134,49.725,70.762,66.423,63.821,79.84,71.07,73.135,58.971,90.47,59.509,69.792,82.74,82.806,61.537,70.917,82.497,58.534,71.905,62.811,77.487,64.648,87.733,63.393,67.937,61.207,53.03]]\r
    const raw=Array.isArray(customData)&&customData.length&&Array.isArray(customData[0])?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.5)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    raw.forEach((vals,i)=>{\r
      const sorted=[...vals].sort(d3.ascending)\r
      const levels=[[0.25,0.75,0.72],[0.125,0.875,0.52],[0.0625,0.9375,0.32]]\r
      const cx=(x(groups[i])??0)+x.bandwidth()/2\r
      levels.forEach(([q0,q1,alpha],li)=>{\r
        const v0=d3.quantile(sorted,q0)||0, v1=d3.quantile(sorted,q1)||0\r
        const w= x.bandwidth()*0.62 - li*8\r
        g.append('rect').attr('x',cx-w/2).attr('y',y(v1)).attr('width',w).attr('height',Math.max(1, y(v0)-y(v1))).attr('fill',colors[i]).attr('fill-opacity',alpha).attr('stroke',colors[i]).attr('stroke-width',0.6).attr('rx',2)\r
      })\r
      const m=d3.median(sorted)||0\r
      g.append('line').attr('x1',cx- x.bandwidth()*0.31).attr('x2',cx+ x.bandwidth()*0.31).attr('y1',y(m)).attr('y2',y(m)).attr('stroke','#0f172a').attr('stroke-width',1.2)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Letter-Value Multi')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};