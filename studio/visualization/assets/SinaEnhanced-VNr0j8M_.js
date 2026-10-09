var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sina-enhanced',\r
  title: 'Sina Enhanced',\r
  desc: 'Sina Enhanced — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'SinaEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","sina-enhanced"],\r
}\r
\r
export default function SinaEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","v":31.57},{"group":"A","v":40.451},{"group":"A","v":20.059},{"group":"A","v":29.169},{"group":"A","v":37.117},{"group":"A","v":59.972},{"group":"A","v":40.509},{"group":"A","v":20.577},{"group":"A","v":35.342},{"group":"A","v":6},{"group":"A","v":51.349},{"group":"A","v":57.044},{"group":"A","v":63.556},{"group":"A","v":48.991},{"group":"A","v":58.429},{"group":"A","v":57.394},{"group":"A","v":49.646},{"group":"A","v":25.326},{"group":"A","v":75.6},{"group":"A","v":32.447},{"group":"A","v":30.715},{"group":"A","v":36.401},{"group":"A","v":50.387},{"group":"A","v":48.295},{"group":"A","v":38.497},{"group":"A","v":28.111},{"group":"A","v":40.01},{"group":"A","v":48.282},{"group":"A","v":39.984},{"group":"A","v":46.915},{"group":"A","v":71.126},{"group":"A","v":25.551},{"group":"A","v":54.403},{"group":"A","v":38.419},{"group":"A","v":43.158},{"group":"A","v":48.636},{"group":"A","v":50.486},{"group":"A","v":70.729},{"group":"B","v":71.267},{"group":"B","v":50.617},{"group":"B","v":49.866},{"group":"B","v":60.061},{"group":"B","v":47.151},{"group":"B","v":60.023},{"group":"B","v":62.845},{"group":"B","v":49.561},{"group":"B","v":74.574},{"group":"B","v":58.707},{"group":"B","v":67.735},{"group":"B","v":40.496},{"group":"B","v":66.287},{"group":"B","v":63.022},{"group":"B","v":59.424},{"group":"B","v":47.212},{"group":"B","v":51.269},{"group":"B","v":65.946},{"group":"B","v":69.299},{"group":"B","v":65.942},{"group":"B","v":71.269},{"group":"B","v":58.301},{"group":"B","v":59.592},{"group":"B","v":68.775},{"group":"B","v":63.119},{"group":"B","v":51.98},{"group":"B","v":79.587},{"group":"B","v":59.84},{"group":"B","v":59.496},{"group":"B","v":76.511},{"group":"B","v":79.364},{"group":"B","v":72.537},{"group":"B","v":71.075},{"group":"B","v":59.162},{"group":"B","v":49.505},{"group":"B","v":56.844},{"group":"B","v":55.013},{"group":"B","v":59.808},{"group":"C","v":42.907},{"group":"C","v":42.691},{"group":"C","v":44.244},{"group":"C","v":45.332},{"group":"C","v":53.63},{"group":"C","v":45.614},{"group":"C","v":62.765},{"group":"C","v":66.688},{"group":"C","v":54.753},{"group":"C","v":43.191},{"group":"C","v":59.03},{"group":"C","v":46.004},{"group":"C","v":65.027},{"group":"C","v":58.099},{"group":"C","v":47.508},{"group":"C","v":37.61},{"group":"C","v":53.689},{"group":"C","v":38.832},{"group":"C","v":50.234},{"group":"C","v":55.041},{"group":"C","v":59.266},{"group":"C","v":63.219},{"group":"C","v":46.814},{"group":"C","v":59.384},{"group":"C","v":47.682},{"group":"C","v":55.596},{"group":"C","v":45.997},{"group":"C","v":61.163},{"group":"C","v":46.881},{"group":"C","v":49.475},{"group":"C","v":60.352},{"group":"C","v":39.086},{"group":"C","v":76.036},{"group":"C","v":50.621},{"group":"C","v":54.181},{"group":"C","v":48.739},{"group":"C","v":49.158},{"group":"C","v":70.976}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.42)\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      // KDE for width\r
      const kde=d3.range(0,101,2).map(yy=>{ let s=0; vals.forEach(v=>{const d=(yy-v)/9; s+=Math.exp(-0.5*d*d)}); return {yy, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const wScale=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()*0.44])\r
      vals.forEach(v=>{\r
        const kdePt=kde.find(k=>Math.abs(k.yy-v)<1)\r
        const w=wScale(kdePt?kdePt.d:0)\r
        const j=(Math.random()-0.5)*w\r
        const cx=(x(gr)??0)+x.bandwidth()/2 + j\r
        g.append('circle').attr('cx',cx).attr('cy',y(v)).attr('r',2.2).attr('fill',colors[i]).attr('opacity',0.72).attr('stroke','var(--bg)').attr('stroke-width',0.4)\r
      })\r
      // median line\r
      const m=d3.median(vals)||50\r
      g.append('line').attr('x1',(x(gr)??0)+x.bandwidth()/2-14).attr('x2',(x(gr)??0)+x.bandwidth()/2+14).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',1.6)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Sina Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};