var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sina-with-box',\r
  title: 'Sina With Box',\r
  desc: 'Sina With Box — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'SinaWithBox',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","sina-with-box"],\r
}\r
\r
export default function SinaWithBox({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East']\r
    const gen = () => [{"group":"North","v":32.526},{"group":"North","v":40.724},{"group":"North","v":21.9},{"group":"North","v":30.309},{"group":"North","v":37.647},{"group":"North","v":58.743},{"group":"North","v":40.778},{"group":"North","v":22.378},{"group":"North","v":36.008},{"group":"North","v":8},{"group":"North","v":50.783},{"group":"North","v":56.041},{"group":"North","v":62.052},{"group":"North","v":48.607},{"group":"North","v":57.319},{"group":"North","v":56.363},{"group":"North","v":49.211},{"group":"North","v":26.762},{"group":"North","v":73.169},{"group":"North","v":33.336},{"group":"North","v":31.737},{"group":"North","v":36.985},{"group":"North","v":49.896},{"group":"North","v":47.965},{"group":"North","v":38.921},{"group":"North","v":29.333},{"group":"North","v":40.317},{"group":"North","v":47.953},{"group":"North","v":40.292},{"group":"North","v":46.691},{"group":"North","v":69.04},{"group":"North","v":26.97},{"group":"North","v":53.602},{"group":"North","v":38.848},{"group":"North","v":43.222},{"group":"North","v":48.28},{"group":"South","v":67.988},{"group":"South","v":86.673},{"group":"South","v":73.121},{"group":"South","v":48.341},{"group":"South","v":47.439},{"group":"South","v":59.673},{"group":"South","v":44.181},{"group":"South","v":59.628},{"group":"South","v":63.014},{"group":"South","v":47.073},{"group":"South","v":77.089},{"group":"South","v":58.048},{"group":"South","v":68.882},{"group":"South","v":36.195},{"group":"South","v":67.145},{"group":"South","v":63.227},{"group":"South","v":58.909},{"group":"South","v":44.255},{"group":"South","v":49.122},{"group":"South","v":66.736},{"group":"South","v":70.759},{"group":"South","v":66.731},{"group":"South","v":73.123},{"group":"South","v":57.562},{"group":"South","v":59.11},{"group":"South","v":70.13},{"group":"South","v":63.342},{"group":"South","v":49.976},{"group":"South","v":83.104},{"group":"South","v":59.408},{"group":"South","v":58.996},{"group":"South","v":79.413},{"group":"South","v":82.837},{"group":"South","v":74.644},{"group":"South","v":72.89},{"group":"South","v":58.595},{"group":"East","v":37.006},{"group":"East","v":45.812},{"group":"East","v":43.616},{"group":"East","v":49.369},{"group":"East","v":41.089},{"group":"East","v":40.829},{"group":"East","v":42.692},{"group":"East","v":43.998},{"group":"East","v":53.956},{"group":"East","v":44.337},{"group":"East","v":64.918},{"group":"East","v":69.625},{"group":"East","v":55.304},{"group":"East","v":41.429},{"group":"East","v":60.437},{"group":"East","v":44.804},{"group":"East","v":67.632},{"group":"East","v":59.319},{"group":"East","v":46.61},{"group":"East","v":34.731},{"group":"East","v":54.027},{"group":"East","v":36.198},{"group":"East","v":49.881},{"group":"East","v":55.65},{"group":"East","v":60.719},{"group":"East","v":65.462},{"group":"East","v":45.776},{"group":"East","v":60.86},{"group":"East","v":46.818},{"group":"East","v":56.315},{"group":"East","v":44.797},{"group":"East","v":62.996},{"group":"East","v":45.857},{"group":"East","v":48.97},{"group":"East","v":62.022},{"group":"East","v":36.503}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.46)\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      const kde=d3.range(0,101,2).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/8; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const w=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()*0.42])\r
      vals.forEach(v=>{\r
        const kd=kde.find(k=>Math.abs(k.v-v)<1)\r
        const ww=w(kd?kd.d:0)\r
        const j=(Math.random()-0.5)*ww\r
        g.append('circle').attr('cx',(x(gr)??0)+x.bandwidth()/2 + j).attr('cy',y(v)).attr('r',2).attr('fill',colors[i]).attr('opacity',0.68).attr('stroke','var(--bg)').attr('stroke-width',0.4)\r
      })\r
      // box overlay\r
      const q1=d3.quantile(vals,0.25)||0, m=d3.median(vals)||0, q3=d3.quantile(vals,0.75)||0\r
      const cx=(x(gr)??0)+x.bandwidth()/2\r
      g.append('rect').attr('x',cx-10).attr('y',y(q3)).attr('width',20).attr('height',Math.max(2, y(q1)-y(q3))).attr('fill','#fff').attr('stroke',colors[i]).attr('stroke-width',1.1).attr('fill-opacity',0.92)\r
      g.append('line').attr('x1',cx-10).attr('x2',cx+10).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',1.4)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Sina with Box')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};