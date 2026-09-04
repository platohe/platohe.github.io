var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stacked-bar-outliers-v2',\r
  title: 'Stacked Bar Outliers V2',\r
  desc: 'Stacked Bar Outliers V2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StackedBarOutliersV2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","stacked-bar-outliers-v2"],\r
}\r
\r
export default function StackedBarOutliersV2({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['A','B','C','D'], segs=['X','Y','Z']\r
    const gen = () => [{"cat":"A","X":14,"Y":12,"Z":17,"total":43},{"cat":"B","X":15,"Y":8,"Z":13,"total":36},{"cat":"C","X":9,"Y":14,"Z":18,"total":41},{"cat":"D","X":12,"Y":9,"Z":18,"total":39}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const vals=data.map(d=>d.total)\r
    const q1=d3.quantile(vals,0.25)||0, q3=d3.quantile(vals,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(cats).range([0,width]).padding(0.18)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.total)||40]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const stack=d3.stack().keys(segs)\r
    const series=stack(data)\r
    const col=d3.scaleOrdinal(colors).domain(segs)\r
    series.forEach(s=> g.selectAll(\`rect.\${s.key}\`).data(s).join('rect')\r
      .attr('x',d=>x(d.data.cat)??0).attr('y',d=>y(d[1])).attr('width',x.bandwidth()).attr('height',d=>y(d[0])-y(d[1]))\r
      .attr('fill',col(s.key)).attr('stroke','var(--bg)').attr('rx',1).attr('fill-opacity',d=> d.data.total>hi||d.data.total<lo?0.92:0.62))\r
    data.forEach(d=>{\r
      const isOut=d.total>hi||d.total<lo\r
      if(isOut) g.append('text').attr('x',(x(d.cat)??0)+x.bandwidth()/2).attr('y',y(d.total)-4).attr('text-anchor','middle').attr('fill','#ef4444').attr('font-size','6px').text('outlier')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Stacked Outliers V2')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};