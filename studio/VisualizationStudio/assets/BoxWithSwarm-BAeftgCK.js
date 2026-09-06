var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'box-with-swarm',\r
  title: 'Box With Swarm',\r
  desc: 'Box With Swarm — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BoxWithSwarm',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","box-with-swarm"],\r
}\r
\r
export default function BoxWithSwarm({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","v":30.526},{"group":"A","v":38.724},{"group":"A","v":19.9},{"group":"A","v":28.309},{"group":"A","v":35.647},{"group":"A","v":56.743},{"group":"A","v":38.778},{"group":"A","v":20.378},{"group":"A","v":34.008},{"group":"A","v":8},{"group":"A","v":48.783},{"group":"A","v":54.041},{"group":"A","v":60.052},{"group":"A","v":46.607},{"group":"A","v":55.319},{"group":"A","v":54.363},{"group":"A","v":47.211},{"group":"A","v":24.762},{"group":"A","v":71.169},{"group":"A","v":31.336},{"group":"A","v":29.737},{"group":"A","v":34.985},{"group":"A","v":47.896},{"group":"A","v":45.965},{"group":"A","v":36.921},{"group":"A","v":27.333},{"group":"A","v":38.317},{"group":"A","v":45.953},{"group":"A","v":38.292},{"group":"A","v":44.691},{"group":"A","v":67.04},{"group":"A","v":24.97},{"group":"A","v":51.602},{"group":"A","v":36.848},{"group":"A","v":41.222},{"group":"A","v":46.28},{"group":"B","v":63.988},{"group":"B","v":82.673},{"group":"B","v":69.121},{"group":"B","v":44.341},{"group":"B","v":43.439},{"group":"B","v":55.673},{"group":"B","v":40.181},{"group":"B","v":55.628},{"group":"B","v":59.014},{"group":"B","v":43.073},{"group":"B","v":73.089},{"group":"B","v":54.048},{"group":"B","v":64.882},{"group":"B","v":32.195},{"group":"B","v":63.145},{"group":"B","v":59.227},{"group":"B","v":54.909},{"group":"B","v":40.255},{"group":"B","v":45.122},{"group":"B","v":62.736},{"group":"B","v":66.759},{"group":"B","v":62.731},{"group":"B","v":69.123},{"group":"B","v":53.562},{"group":"B","v":55.11},{"group":"B","v":66.13},{"group":"B","v":59.342},{"group":"B","v":45.976},{"group":"B","v":79.104},{"group":"B","v":55.408},{"group":"B","v":54.996},{"group":"B","v":75.413},{"group":"B","v":78.837},{"group":"B","v":70.644},{"group":"B","v":68.89},{"group":"B","v":54.595},{"group":"C","v":37.006},{"group":"C","v":45.812},{"group":"C","v":43.616},{"group":"C","v":49.369},{"group":"C","v":41.089},{"group":"C","v":40.829},{"group":"C","v":42.692},{"group":"C","v":43.998},{"group":"C","v":53.956},{"group":"C","v":44.337},{"group":"C","v":64.918},{"group":"C","v":69.625},{"group":"C","v":55.304},{"group":"C","v":41.429},{"group":"C","v":60.437},{"group":"C","v":44.804},{"group":"C","v":67.632},{"group":"C","v":59.319},{"group":"C","v":46.61},{"group":"C","v":34.731},{"group":"C","v":54.027},{"group":"C","v":36.198},{"group":"C","v":49.881},{"group":"C","v":55.65},{"group":"C","v":60.719},{"group":"C","v":65.462},{"group":"C","v":45.776},{"group":"C","v":60.86},{"group":"C","v":46.818},{"group":"C","v":56.315},{"group":"C","v":44.797},{"group":"C","v":62.996},{"group":"C","v":45.857},{"group":"C","v":48.97},{"group":"C","v":62.022},{"group":"C","v":36.503}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.42)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v).sort(d3.ascending)\r
      const q1=d3.quantile(vals,0.25)||0, m=d3.median(vals)||0, q3=d3.quantile(vals,0.75)||0, min=d3.min(vals)||0, max=d3.max(vals)||0\r
      const cx=(x(gr)??0)+x.bandwidth()/2\r
      const bw=x.bandwidth()*0.42\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('rect').attr('x',cx-bw/2).attr('y',y(q3)).attr('width',bw).attr('height',Math.max(2, y(q1)-y(q3))).attr('fill',colors[i]).attr('fill-opacity',0.22).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-bw/2).attr('x2',cx+bw/2).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',1.4)\r
      // swarm on top of box\r
      vals.forEach(v=>{\r
        const j=(Math.random()-0.5)*bw*0.9\r
        g.append('circle').attr('cx',cx+j).attr('cy',y(v)).attr('r',1.8).attr('fill',colors[i]).attr('opacity',0.62).attr('stroke','var(--bg)').attr('stroke-width',0.4)\r
      })\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Box with Swarm')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};