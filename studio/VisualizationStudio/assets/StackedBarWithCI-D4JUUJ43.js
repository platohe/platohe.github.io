var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stacked-bar-with-ci',\r
  title: 'Stacked Bar With C I',\r
  desc: 'Stacked Bar With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StackedBarWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","stacked-bar-with-c-i"],\r
}\r
\r
export default function StackedBarWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['A','B','C','D'], segs=['X','Y','Z']\r
    const gen = () => [{"cat":"A","X":14,"Y":12,"Z":17,"total":43,"err":4},{"cat":"B","X":8,"Y":13,"Z":9,"total":30,"err":4},{"cat":"C","X":18,"Y":12,"Z":9,"total":39,"err":5},{"cat":"D","X":16,"Y":10,"Z":8,"total":34,"err":4}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(cats).range([0,width]).padding(0.18)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.total+d.err)||40]).nice().range([height,0])\r
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
      .attr('fill',col(s.key)).attr('stroke','var(--bg)').attr('rx',1))\r
    data.forEach(d=>{\r
      const cx=(x(d.cat)??0)+x.bandwidth()/2\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(d.total-d.err)).attr('y2',y(d.total+d.err)).attr('stroke','var(--text)').attr('stroke-width',1.2)\r
      g.append('line').attr('x1',cx-4).attr('x2',cx+4).attr('y1',y(d.total-d.err)).attr('y2',y(d.total-d.err)).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-4).attr('x2',cx+4).attr('y1',y(d.total+d.err)).attr('y2',y(d.total+d.err)).attr('stroke','var(--text)').attr('stroke-width',1)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Stacked Bar with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};