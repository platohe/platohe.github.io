var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'violin-box-hybrid',\r
  title: 'Violin Box Hybrid',\r
  desc: 'Violin Box Hybrid — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ViolinBoxHybrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","violin-box-hybrid"],\r
}\r
\r
export default function ViolinBoxHybrid({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","v":30.526},{"group":"A","v":38.724},{"group":"A","v":19.9},{"group":"A","v":28.309},{"group":"A","v":35.647},{"group":"A","v":56.743},{"group":"A","v":38.778},{"group":"A","v":20.378},{"group":"A","v":34.008},{"group":"A","v":8},{"group":"A","v":48.783},{"group":"A","v":54.041},{"group":"A","v":60.052},{"group":"A","v":46.607},{"group":"A","v":55.319},{"group":"A","v":54.363},{"group":"A","v":47.211},{"group":"A","v":24.762},{"group":"A","v":71.169},{"group":"A","v":31.336},{"group":"A","v":29.737},{"group":"A","v":34.985},{"group":"A","v":47.896},{"group":"A","v":45.965},{"group":"A","v":36.921},{"group":"A","v":27.333},{"group":"A","v":38.317},{"group":"A","v":45.953},{"group":"A","v":38.292},{"group":"A","v":44.691},{"group":"A","v":67.04},{"group":"A","v":24.97},{"group":"A","v":51.602},{"group":"A","v":36.848},{"group":"A","v":41.222},{"group":"A","v":46.28},{"group":"A","v":47.988},{"group":"A","v":66.673},{"group":"A","v":53.121},{"group":"A","v":28.341},{"group":"A","v":27.439},{"group":"A","v":39.673},{"group":"A","v":24.181},{"group":"A","v":39.628},{"group":"A","v":43.014},{"group":"A","v":27.073},{"group":"A","v":57.089},{"group":"A","v":38.048},{"group":"B","v":68.882},{"group":"B","v":36.195},{"group":"B","v":67.145},{"group":"B","v":63.227},{"group":"B","v":58.909},{"group":"B","v":44.255},{"group":"B","v":49.122},{"group":"B","v":66.736},{"group":"B","v":70.759},{"group":"B","v":66.731},{"group":"B","v":73.123},{"group":"B","v":57.562},{"group":"B","v":59.11},{"group":"B","v":70.13},{"group":"B","v":63.342},{"group":"B","v":49.976},{"group":"B","v":83.104},{"group":"B","v":59.408},{"group":"B","v":58.996},{"group":"B","v":79.413},{"group":"B","v":82.837},{"group":"B","v":74.644},{"group":"B","v":72.89},{"group":"B","v":58.595},{"group":"B","v":47.006},{"group":"B","v":55.812},{"group":"B","v":53.616},{"group":"B","v":59.369},{"group":"B","v":51.089},{"group":"B","v":50.829},{"group":"B","v":52.692},{"group":"B","v":53.998},{"group":"B","v":63.956},{"group":"B","v":54.337},{"group":"B","v":74.918},{"group":"B","v":79.625},{"group":"B","v":65.304},{"group":"B","v":51.429},{"group":"B","v":70.437},{"group":"B","v":54.804},{"group":"B","v":77.632},{"group":"B","v":69.319},{"group":"B","v":56.61},{"group":"B","v":44.731},{"group":"B","v":64.027},{"group":"B","v":46.198},{"group":"B","v":59.881},{"group":"B","v":65.65},{"group":"C","v":60.719},{"group":"C","v":65.462},{"group":"C","v":45.776},{"group":"C","v":60.86},{"group":"C","v":46.818},{"group":"C","v":56.315},{"group":"C","v":44.797},{"group":"C","v":62.996},{"group":"C","v":45.857},{"group":"C","v":48.97},{"group":"C","v":62.022},{"group":"C","v":36.503},{"group":"C","v":80.843},{"group":"C","v":50.345},{"group":"C","v":54.618},{"group":"C","v":48.086},{"group":"C","v":48.59},{"group":"C","v":74.772},{"group":"C","v":34.426},{"group":"C","v":49.326},{"group":"C","v":53.77},{"group":"C","v":41.13},{"group":"C","v":39.089},{"group":"C","v":37.72},{"group":"C","v":44.272},{"group":"C","v":63.05},{"group":"C","v":50.469},{"group":"C","v":39.098},{"group":"C","v":41.67},{"group":"C","v":76.016},{"group":"C","v":73.974},{"group":"C","v":71.063},{"group":"C","v":36.42},{"group":"C","v":63.238},{"group":"C","v":32.241},{"group":"C","v":45.981},{"group":"C","v":62.639},{"group":"C","v":52.002},{"group":"C","v":55.136},{"group":"C","v":56.441},{"group":"C","v":58.026},{"group":"C","v":74.329},{"group":"C","v":49.715},{"group":"C","v":46.751},{"group":"C","v":64.764},{"group":"C","v":25.6},{"group":"C","v":48.238},{"group":"C","v":44.94}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      const kde=d3.range(0,101,1).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/8; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const w=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()/2 -2])\r
      const cx=(x(gr)??0)+x.bandwidth()/2\r
      const area=d3.area().x0(d=>cx - w(d.d)).x1(d=>cx + w(d.d)).y(d=>y(d.v)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',1)\r
      // box inside violin\r
      const q1=d3.quantile(vals,0.25)||0, m=d3.median(vals)||0, q3=d3.quantile(vals,0.75)||0\r
      const min=d3.min(vals)||0, max=d3.max(vals)||0\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('rect').attr('x',cx-8).attr('y',y(q3)).attr('width',16).attr('height',Math.max(2, y(q1)-y(q3))).attr('fill','#fff').attr('stroke',colors[i]).attr('stroke-width',1.2)\r
      g.append('line').attr('x1',cx-8).attr('x2',cx+8).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',1.6)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Violin + Box Hybrid')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};