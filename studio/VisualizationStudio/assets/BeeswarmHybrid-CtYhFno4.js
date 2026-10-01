var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'beeswarm-hybrid',\r
  title: 'Beeswarm Hybrid',\r
  desc: 'Beeswarm Hybrid — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'BeeswarmHybrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","beeswarm-hybrid"],\r
}\r
\r
export default function BeeswarmHybrid({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const groups = ['A', 'B', 'C']\r
    const gen = () => [{"group":"A","value":36.614},{"group":"A","value":46.178},{"group":"A","value":24.217},{"group":"A","value":34.028},{"group":"A","value":42.588},{"group":"A","value":67.2},{"group":"A","value":46.241},{"group":"A","value":24.775},{"group":"A","value":40.676},{"group":"A","value":5},{"group":"A","value":57.914},{"group":"A","value":64.048},{"group":"A","value":71.06},{"group":"A","value":55.375},{"group":"A","value":65.539},{"group":"A","value":64.424},{"group":"A","value":56.08},{"group":"A","value":29.89},{"group":"A","value":84.03},{"group":"A","value":37.559},{"group":"A","value":35.693},{"group":"A","value":41.816},{"group":"A","value":56.878},{"group":"A","value":54.625},{"group":"A","value":44.074},{"group":"A","value":32.889},{"group":"A","value":45.703},{"group":"A","value":54.612},{"group":"A","value":45.675},{"group":"A","value":53.139},{"group":"A","value":79.213},{"group":"A","value":30.132},{"group":"A","value":61.203},{"group":"A","value":43.99},{"group":"A","value":49.093},{"group":"A","value":54.993},{"group":"A","value":56.985},{"group":"A","value":78.785},{"group":"A","value":62.974},{"group":"A","value":34.064},{"group":"A","value":33.012},{"group":"A","value":47.285},{"group":"B","value":57.666},{"group":"B","value":71.826},{"group":"B","value":74.93},{"group":"B","value":60.317},{"group":"B","value":87.832},{"group":"B","value":70.378},{"group":"B","value":80.309},{"group":"B","value":50.346},{"group":"B","value":78.716},{"group":"B","value":75.125},{"group":"B","value":71.167},{"group":"B","value":57.734},{"group":"B","value":62.196},{"group":"B","value":78.341},{"group":"B","value":82.029},{"group":"B","value":78.336},{"group":"B","value":84.196},{"group":"B","value":69.932},{"group":"B","value":71.351},{"group":"B","value":81.452},{"group":"B","value":75.23},{"group":"B","value":62.978},{"group":"B","value":93.346},{"group":"B","value":71.624},{"group":"B","value":71.246},{"group":"B","value":89.962},{"group":"B","value":93.101},{"group":"B","value":85.591},{"group":"B","value":83.983},{"group":"B","value":70.879},{"group":"B","value":60.256},{"group":"B","value":68.328},{"group":"B","value":66.314},{"group":"B","value":71.589},{"group":"B","value":63.998},{"group":"B","value":63.76},{"group":"B","value":65.468},{"group":"B","value":66.665},{"group":"B","value":75.793},{"group":"B","value":66.976},{"group":"B","value":85.842},{"group":"B","value":90.156},{"group":"C","value":40.68},{"group":"C","value":21.024},{"group":"C","value":47.952},{"group":"C","value":25.806},{"group":"C","value":58.145},{"group":"C","value":46.369},{"group":"C","value":28.364},{"group":"C","value":11.536},{"group":"C","value":38.871},{"group":"C","value":13.614},{"group":"C","value":32.998},{"group":"C","value":41.17},{"group":"C","value":48.351},{"group":"C","value":55.072},{"group":"C","value":27.183},{"group":"C","value":48.552},{"group":"C","value":28.659},{"group":"C","value":42.113},{"group":"C","value":25.796},{"group":"C","value":51.577},{"group":"C","value":27.298},{"group":"C","value":31.708},{"group":"C","value":50.198},{"group":"C","value":14.046},{"group":"C","value":76.861},{"group":"C","value":33.655},{"group":"C","value":39.708},{"group":"C","value":30.456},{"group":"C","value":31.169},{"group":"C","value":68.26},{"group":"C","value":11.103},{"group":"C","value":32.212},{"group":"C","value":38.507},{"group":"C","value":20.601},{"group":"C","value":17.71},{"group":"C","value":15.769},{"group":"C","value":25.053},{"group":"C","value":51.655},{"group":"C","value":33.831},{"group":"C","value":17.722},{"group":"C","value":21.365},{"group":"C","value":70.023}]\r
    const data = Array.isArray(customData) && customData.length && customData[0].group ? customData : gen()\r
    const margin={top:28,right:16,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.26)\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove())\r
      .call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','9px'))\r
    groups.forEach((grp,i)=>{\r
      const vals=data.filter(d=>d.group===grp).map(d=>d.value).sort(d3.ascending)\r
      const q1=d3.quantile(vals,0.25)??0, m=d3.quantile(vals,0.5)??0, q3=d3.quantile(vals,0.75)??0\r
      const min=d3.min(vals)??0, max=d3.max(vals)??100\r
      const cx=(x(grp)??0)+x.bandwidth()/2\r
      // box\r
      g.append('rect').attr('x',cx-14).attr('y',y(q3)).attr('width',28).attr('height',Math.max(2,y(q1)-y(q3))).attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',1.2)\r
      g.append('line').attr('x1',cx-14).attr('x2',cx+14).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',2)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      // KDE on right edge of band\r
      const kdeY=d3.range(0,101,2)\r
      const kde=kdeY.map(yy=>{ let s=0; vals.forEach(v=>{ const d=(yy-v)/8; s+=Math.exp(-0.5*d*d)}); return {yy, d:s/vals.length}})\r
      const kx=d3.scaleLinear().domain([0,d3.max(kde,d=>d.d)??1]).range([0, x.bandwidth()/2 - 4])\r
      const kdeLine=d3.line().x(d=>cx + 14 + kx(d.d)).y(d=>y(d.yy)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',kdeLine).attr('fill','none').attr('stroke',colors[i]).attr('stroke-width',1).attr('opacity',0.9)\r
      // beeswarm dots with simple jitter + collision-ish\r
      const bw=x.bandwidth()*0.42\r
      vals.forEach(v=>{\r
        const j=(Math.random()-0.5)*bw\r
        g.append('circle').attr('cx',cx+j).attr('cy',y(v)).attr('r',2.6).attr('fill',colors[i]).attr('fill-opacity',0.72).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
      })\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Beeswarm + Box + Density')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};