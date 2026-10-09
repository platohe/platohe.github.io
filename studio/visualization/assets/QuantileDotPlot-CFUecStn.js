var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'quantile-dot-plot',\r
  title: 'Quantile Dot Plot',\r
  desc: 'Quantile Dot Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QuantileDotPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","quantile-dot-plot"],\r
}\r
\r
export default function QuantileDotPlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","value":32.57},{"group":"A","value":41.451},{"group":"A","value":21.059},{"group":"A","value":30.169},{"group":"A","value":38.117},{"group":"A","value":60.972},{"group":"A","value":41.509},{"group":"A","value":21.577},{"group":"A","value":36.342},{"group":"A","value":5},{"group":"A","value":52.349},{"group":"A","value":58.044},{"group":"A","value":64.556},{"group":"A","value":49.991},{"group":"A","value":59.429},{"group":"A","value":58.394},{"group":"A","value":50.646},{"group":"A","value":26.326},{"group":"A","value":76.6},{"group":"A","value":33.447},{"group":"A","value":31.715},{"group":"A","value":37.401},{"group":"A","value":51.387},{"group":"A","value":49.295},{"group":"A","value":39.497},{"group":"A","value":29.111},{"group":"A","value":41.01},{"group":"A","value":49.282},{"group":"A","value":40.984},{"group":"A","value":47.915},{"group":"B","value":95},{"group":"B","value":49.551},{"group":"B","value":78.403},{"group":"B","value":62.419},{"group":"B","value":67.158},{"group":"B","value":72.636},{"group":"B","value":74.486},{"group":"B","value":94.729},{"group":"B","value":80.047},{"group":"B","value":53.203},{"group":"B","value":52.225},{"group":"B","value":65.479},{"group":"B","value":48.696},{"group":"B","value":65.43},{"group":"B","value":69.099},{"group":"B","value":51.829},{"group":"B","value":84.346},{"group":"B","value":63.719},{"group":"B","value":75.456},{"group":"B","value":40.045},{"group":"B","value":73.574},{"group":"B","value":69.329},{"group":"B","value":64.651},{"group":"B","value":48.776},{"group":"B","value":54.049},{"group":"B","value":73.13},{"group":"B","value":77.489},{"group":"B","value":73.125},{"group":"B","value":80.05},{"group":"B","value":63.192},{"group":"C","value":48.869},{"group":"C","value":60.807},{"group":"C","value":53.454},{"group":"C","value":38.974},{"group":"C","value":74.863},{"group":"C","value":49.192},{"group":"C","value":48.745},{"group":"C","value":70.864},{"group":"C","value":74.573},{"group":"C","value":65.698},{"group":"C","value":63.798},{"group":"C","value":48.311},{"group":"C","value":35.757},{"group":"C","value":45.297},{"group":"C","value":42.917},{"group":"C","value":49.15},{"group":"C","value":40.179},{"group":"C","value":39.898},{"group":"C","value":41.917},{"group":"C","value":43.331},{"group":"C","value":54.119},{"group":"C","value":43.699},{"group":"C","value":65.995},{"group":"C","value":71.094},{"group":"C","value":55.579},{"group":"C","value":40.548},{"group":"C","value":61.14},{"group":"C","value":44.205},{"group":"C","value":68.935},{"group":"C","value":59.929}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(groups).range([0,height]).padding(0.36)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)'))\r
      .call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.value).sort(d3.ascending)\r
      const n=vals.length, cols=6\r
      vals.forEach((v,idx)=>{\r
        const row=Math.floor(idx/cols), col=idx%cols\r
        const baseY=(y(gr)??0)+y.bandwidth()/2 - 14 + row*7\r
        const baseX=x(v) + (col - cols/2)*5\r
        // Actually quantile dot: x = quantile position, y = stacked; simpler: x = value, y = baseY + col offset\r
        // Use value for x, stack y for quantile index within bin\r
        g.append('circle').attr('cx',x(v)).attr('cy',baseY+col*1.2).attr('r',2.2).attr('fill',colors[i]).attr('opacity',0.78).attr('stroke','var(--bg)').attr('stroke-width',0.4)\r
      })\r
      // median line\r
      const m=d3.median(vals)||0\r
      g.append('line').attr('x1',x(m)).attr('x2',x(m)).attr('y1',y(gr)??0).attr('y2',(y(gr)??0)+y.bandwidth()).attr('stroke',colors[i]).attr('stroke-width',1.4).attr('stroke-dasharray','3,2')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Quantile Dot Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};