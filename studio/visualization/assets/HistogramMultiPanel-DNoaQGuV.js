var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'histogram-multi-panel',\r
  title: 'Histogram Multi Panel',\r
  desc: 'Histogram Multi Panel — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'HistogramMultiPanel',\r
  complexity: 'beginner',\r
  interactivity: ["drag"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","histogram-multi-panel"],\r
}\r
\r
export default function HistogramMultiPanel({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","v":29.57},{"group":"A","v":38.451},{"group":"A","v":18.059},{"group":"A","v":27.169},{"group":"A","v":35.117},{"group":"A","v":57.972},{"group":"A","v":38.509},{"group":"A","v":18.577},{"group":"A","v":33.342},{"group":"A","v":6},{"group":"A","v":49.349},{"group":"A","v":55.044},{"group":"A","v":61.556},{"group":"A","v":46.991},{"group":"A","v":56.429},{"group":"A","v":55.394},{"group":"A","v":47.646},{"group":"A","v":23.326},{"group":"A","v":73.6},{"group":"A","v":30.447},{"group":"A","v":28.715},{"group":"A","v":34.401},{"group":"A","v":48.387},{"group":"A","v":46.295},{"group":"A","v":36.497},{"group":"A","v":26.111},{"group":"A","v":38.01},{"group":"A","v":46.282},{"group":"A","v":37.984},{"group":"A","v":44.915},{"group":"A","v":69.126},{"group":"A","v":23.551},{"group":"A","v":52.403},{"group":"A","v":36.419},{"group":"A","v":41.158},{"group":"A","v":46.636},{"group":"B","v":64.486},{"group":"B","v":84.729},{"group":"B","v":70.047},{"group":"B","v":43.203},{"group":"B","v":42.225},{"group":"B","v":55.479},{"group":"B","v":38.696},{"group":"B","v":55.43},{"group":"B","v":59.099},{"group":"B","v":41.829},{"group":"B","v":74.346},{"group":"B","v":53.719},{"group":"B","v":65.456},{"group":"B","v":30.045},{"group":"B","v":63.574},{"group":"B","v":59.329},{"group":"B","v":54.651},{"group":"B","v":38.776},{"group":"B","v":44.049},{"group":"B","v":63.13},{"group":"B","v":67.489},{"group":"B","v":63.125},{"group":"B","v":70.05},{"group":"B","v":53.192},{"group":"B","v":54.869},{"group":"B","v":66.807},{"group":"B","v":59.454},{"group":"B","v":44.974},{"group":"B","v":80.863},{"group":"B","v":55.192},{"group":"B","v":54.745},{"group":"B","v":76.864},{"group":"B","v":80.573},{"group":"B","v":71.698},{"group":"B","v":69.798},{"group":"B","v":54.311},{"group":"C","v":35.757},{"group":"C","v":45.297},{"group":"C","v":42.917},{"group":"C","v":49.15},{"group":"C","v":40.179},{"group":"C","v":39.898},{"group":"C","v":41.917},{"group":"C","v":43.331},{"group":"C","v":54.119},{"group":"C","v":43.699},{"group":"C","v":65.995},{"group":"C","v":71.094},{"group":"C","v":55.579},{"group":"C","v":40.548},{"group":"C","v":61.14},{"group":"C","v":44.205},{"group":"C","v":68.935},{"group":"C","v":59.929},{"group":"C","v":46.161},{"group":"C","v":33.292},{"group":"C","v":54.196},{"group":"C","v":34.881},{"group":"C","v":49.704},{"group":"C","v":55.954},{"group":"C","v":61.445},{"group":"C","v":66.584},{"group":"C","v":45.258},{"group":"C","v":61.599},{"group":"C","v":46.386},{"group":"C","v":56.675},{"group":"C","v":44.197},{"group":"C","v":63.912},{"group":"C","v":45.345},{"group":"C","v":48.718},{"group":"C","v":62.857},{"group":"C","v":35.212}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:22,left:26}\r
    const panelH=(H-margin.top-margin.bottom)/3\r
    const width=W-margin.left-margin.right\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v)\r
      const bins=d3.bin().domain([0,100]).thresholds(16)(vals)\r
      const y=d3.scaleLinear().domain([0,d3.max(bins,d=>d.length)||8]).range([panelH-4,0])\r
      const pg=g.append('g').attr('transform',\`translate(0,\${i*panelH})\`)\r
      pg.append('rect').attr('width',width).attr('height',panelH-4).attr('fill','var(--bg)').attr('stroke','var(--border)').attr('rx',4).attr('opacity',0.22)\r
      pg.selectAll('rect.bar').data(bins).join('rect')\r
        .attr('x',d=>x(d.x0??0)).attr('y',d=>y(d.length)).attr('width',d=>Math.max(1, x(d.x1??0)-x(d.x0??0)-1)).attr('height',d=>panelH-4 - y(d.length))\r
        .attr('fill',colors[i]).attr('fill-opacity',0.72).attr('stroke',colors[i]).attr('rx',2)\r
      pg.append('text').attr('x',4).attr('y',10).attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',700).text(gr)\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${3*panelH})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Histogram Multi-Panel')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};