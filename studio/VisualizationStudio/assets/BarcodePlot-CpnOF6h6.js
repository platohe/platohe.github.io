var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'barcode-plot',\r
  title: 'Barcode Plot',\r
  desc: 'Barcode Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarcodePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","barcode-plot"],\r
}\r
\r
export default function BarcodePlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['Team A','Team B','Team C']\r
    const gen = () => [{"group":"Team A","value":43.438},{"group":"Team A","value":50.27},{"group":"Team A","value":34.584},{"group":"Team A","value":41.591},{"group":"Team A","value":47.706},{"group":"Team A","value":65.286},{"group":"Team A","value":50.315},{"group":"Team A","value":34.982},{"group":"Team A","value":46.34},{"group":"Team A","value":20.209},{"group":"Team A","value":58.653},{"group":"Team A","value":63.034},{"group":"Team A","value":68.043},{"group":"Team A","value":56.839},{"group":"Team A","value":64.1},{"group":"Team A","value":63.303},{"group":"Team A","value":57.343},{"group":"Team A","value":38.635},{"group":"Team A","value":77.307},{"group":"Team A","value":44.113},{"group":"Team A","value":42.781},{"group":"Team A","value":47.154},{"group":"Team A","value":57.913},{"group":"Team A","value":56.304},{"group":"Team A","value":48.767},{"group":"Team A","value":40.778},{"group":"Team A","value":49.93},{"group":"Team A","value":56.294},{"group":"Team A","value":49.91},{"group":"Team A","value":55.242},{"group":"Team A","value":73.866},{"group":"Team A","value":38.808},{"group":"Team A","value":61.002},{"group":"Team A","value":48.707},{"group":"Team A","value":52.352},{"group":"Team A","value":56.566},{"group":"Team A","value":57.99},{"group":"Team A","value":73.561},{"group":"Team B","value":62.267},{"group":"Team B","value":41.617},{"group":"Team B","value":40.866},{"group":"Team B","value":51.061},{"group":"Team B","value":38.151},{"group":"Team B","value":51.023},{"group":"Team B","value":53.845},{"group":"Team B","value":40.561},{"group":"Team B","value":65.574},{"group":"Team B","value":49.707},{"group":"Team B","value":58.735},{"group":"Team B","value":31.496},{"group":"Team B","value":57.287},{"group":"Team B","value":54.022},{"group":"Team B","value":50.424},{"group":"Team B","value":38.212},{"group":"Team B","value":42.269},{"group":"Team B","value":56.946},{"group":"Team B","value":60.299},{"group":"Team B","value":56.942},{"group":"Team B","value":62.269},{"group":"Team B","value":49.301},{"group":"Team B","value":50.592},{"group":"Team B","value":59.775},{"group":"Team B","value":54.119},{"group":"Team B","value":42.98},{"group":"Team B","value":70.587},{"group":"Team B","value":50.84},{"group":"Team B","value":50.496},{"group":"Team B","value":67.511},{"group":"Team B","value":70.364},{"group":"Team B","value":63.537},{"group":"Team B","value":62.075},{"group":"Team B","value":50.162},{"group":"Team B","value":40.505},{"group":"Team B","value":47.844},{"group":"Team B","value":46.013},{"group":"Team B","value":50.808},{"group":"Team C","value":43.907},{"group":"Team C","value":43.691},{"group":"Team C","value":45.244},{"group":"Team C","value":46.332},{"group":"Team C","value":54.63},{"group":"Team C","value":46.614},{"group":"Team C","value":63.765},{"group":"Team C","value":67.688},{"group":"Team C","value":55.753},{"group":"Team C","value":44.191},{"group":"Team C","value":60.03},{"group":"Team C","value":47.004},{"group":"Team C","value":66.027},{"group":"Team C","value":59.099},{"group":"Team C","value":48.508},{"group":"Team C","value":38.61},{"group":"Team C","value":54.689},{"group":"Team C","value":39.832},{"group":"Team C","value":51.234},{"group":"Team C","value":56.041},{"group":"Team C","value":60.266},{"group":"Team C","value":64.219},{"group":"Team C","value":47.814},{"group":"Team C","value":60.384},{"group":"Team C","value":48.682},{"group":"Team C","value":56.596},{"group":"Team C","value":46.997},{"group":"Team C","value":62.163},{"group":"Team C","value":47.881},{"group":"Team C","value":50.475},{"group":"Team C","value":61.352},{"group":"Team C","value":40.086},{"group":"Team C","value":77.036},{"group":"Team C","value":51.621},{"group":"Team C","value":55.181},{"group":"Team C","value":49.739},{"group":"Team C","value":50.158},{"group":"Team C","value":71.976}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:22,left:66}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(groups).range([0,height]).padding(0.42)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)'))\r
      .call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).tickSize(0).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    const col=d3.scaleOrdinal(colors).domain(groups)\r
    data.forEach(d=>{\r
      const yy=(y(d.group)??0)+y.bandwidth()/2\r
      g.append('line').attr('x1',x(d.value)).attr('x2',x(d.value)).attr('y1',yy- y.bandwidth()/2*0.9).attr('y2',yy+ y.bandwidth()/2*0.9)\r
        .attr('stroke',col(d.group)).attr('stroke-width',1.2).attr('opacity',0.72)\r
    })\r
    // mean ticks\r
    groups.forEach(gr=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.value)\r
      const m=d3.mean(vals)||0\r
      g.append('line').attr('x1',x(m)).attr('x2',x(m)).attr('y1',(y(gr)??0)).attr('y2',(y(gr)??0)+y.bandwidth())\r
        .attr('stroke',col(gr)).attr('stroke-width',2.2).attr('opacity',1)\r
      g.append('circle').attr('cx',x(m)).attr('cy',(y(gr)??0)+y.bandwidth()/2).attr('r',3).attr('fill',col(gr)).attr('stroke','var(--bg)')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Barcode Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};