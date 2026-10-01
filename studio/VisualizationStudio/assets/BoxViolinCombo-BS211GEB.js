var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'box-violin-combo',\r
  title: 'Box Violin Combo',\r
  desc: 'Box Violin Combo — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BoxViolinCombo',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","box-violin-combo"],\r
}\r
\r
export default function BoxViolinCombo({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['X','Y','Z']\r
    const gen = () => [{"group":"X","v":26.526},{"group":"X","v":34.724},{"group":"X","v":15.9},{"group":"X","v":24.309},{"group":"X","v":31.647},{"group":"X","v":52.743},{"group":"X","v":34.778},{"group":"X","v":16.378},{"group":"X","v":30.008},{"group":"X","v":8},{"group":"X","v":44.783},{"group":"X","v":50.041},{"group":"X","v":56.052},{"group":"X","v":42.607},{"group":"X","v":51.319},{"group":"X","v":50.363},{"group":"X","v":43.211},{"group":"X","v":20.762},{"group":"X","v":67.169},{"group":"X","v":27.336},{"group":"X","v":25.737},{"group":"X","v":30.985},{"group":"X","v":43.896},{"group":"X","v":41.965},{"group":"X","v":32.921},{"group":"X","v":23.333},{"group":"X","v":34.317},{"group":"X","v":41.953},{"group":"X","v":34.292},{"group":"X","v":40.691},{"group":"X","v":63.04},{"group":"X","v":20.97},{"group":"X","v":47.602},{"group":"X","v":32.848},{"group":"X","v":37.222},{"group":"X","v":42.28},{"group":"X","v":43.988},{"group":"X","v":62.673},{"group":"X","v":49.121},{"group":"X","v":24.341},{"group":"X","v":23.439},{"group":"X","v":35.673},{"group":"X","v":20.181},{"group":"X","v":35.628},{"group":"Y","v":57.014},{"group":"Y","v":41.073},{"group":"Y","v":71.089},{"group":"Y","v":52.048},{"group":"Y","v":62.882},{"group":"Y","v":30.195},{"group":"Y","v":61.145},{"group":"Y","v":57.227},{"group":"Y","v":52.909},{"group":"Y","v":38.255},{"group":"Y","v":43.122},{"group":"Y","v":60.736},{"group":"Y","v":64.759},{"group":"Y","v":60.731},{"group":"Y","v":67.123},{"group":"Y","v":51.562},{"group":"Y","v":53.11},{"group":"Y","v":64.13},{"group":"Y","v":57.342},{"group":"Y","v":43.976},{"group":"Y","v":77.104},{"group":"Y","v":53.408},{"group":"Y","v":52.996},{"group":"Y","v":73.413},{"group":"Y","v":76.837},{"group":"Y","v":68.644},{"group":"Y","v":66.89},{"group":"Y","v":52.595},{"group":"Y","v":41.006},{"group":"Y","v":49.812},{"group":"Y","v":47.616},{"group":"Y","v":53.369},{"group":"Y","v":45.089},{"group":"Y","v":44.829},{"group":"Y","v":46.692},{"group":"Y","v":47.998},{"group":"Y","v":57.956},{"group":"Y","v":48.337},{"group":"Y","v":68.918},{"group":"Y","v":73.625},{"group":"Y","v":59.304},{"group":"Y","v":45.429},{"group":"Y","v":64.437},{"group":"Y","v":48.804},{"group":"Z","v":83.632},{"group":"Z","v":75.319},{"group":"Z","v":62.61},{"group":"Z","v":50.731},{"group":"Z","v":70.027},{"group":"Z","v":52.198},{"group":"Z","v":65.881},{"group":"Z","v":71.65},{"group":"Z","v":76.719},{"group":"Z","v":81.462},{"group":"Z","v":61.776},{"group":"Z","v":76.86},{"group":"Z","v":62.818},{"group":"Z","v":72.315},{"group":"Z","v":60.797},{"group":"Z","v":78.996},{"group":"Z","v":61.857},{"group":"Z","v":64.97},{"group":"Z","v":78.022},{"group":"Z","v":52.503},{"group":"Z","v":92},{"group":"Z","v":66.345},{"group":"Z","v":70.618},{"group":"Z","v":64.086},{"group":"Z","v":64.59},{"group":"Z","v":90.772},{"group":"Z","v":50.426},{"group":"Z","v":65.326},{"group":"Z","v":69.77},{"group":"Z","v":57.13},{"group":"Z","v":55.089},{"group":"Z","v":53.72},{"group":"Z","v":60.272},{"group":"Z","v":79.05},{"group":"Z","v":66.469},{"group":"Z","v":55.098},{"group":"Z","v":57.67},{"group":"Z","v":92},{"group":"Z","v":89.974},{"group":"Z","v":87.063},{"group":"Z","v":52.42},{"group":"Z","v":79.238},{"group":"Z","v":48.241},{"group":"Z","v":61.981}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.36)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      // violin on left half\r
      const kde=d3.range(0,101,1).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/7; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const w=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()/2 -1])\r
      const cx=(x(gr)??0)+x.bandwidth()/2\r
      const leftArea=d3.area().x0(d=>cx - w(d.d)).x1(()=>cx).y(d=>y(d.v)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',leftArea).attr('fill',colors[i]).attr('fill-opacity',0.22).attr('stroke',colors[i]).attr('stroke-width',0.9)\r
      // box on right half\r
      const q1=d3.quantile(vals,0.25)||0, m=d3.median(vals)||0, q3=d3.quantile(vals,0.75)||0, min=d3.min(vals)||0, max=d3.max(vals)||0\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('rect').attr('x',cx).attr('y',y(q3)).attr('width',x.bandwidth()/2 -2).attr('height',Math.max(2, y(q1)-y(q3))).attr('fill','#fff').attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx+x.bandwidth()/2 -2).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',1.4)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Box-Violin Combo')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};