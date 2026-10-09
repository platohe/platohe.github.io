var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'wilkinson-dot-plot',\r
  title: 'Wilkinson Dot Plot',\r
  desc: 'Wilkinson Dot Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WilkinsonDotPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","wilkinson-dot-plot"],\r
}\r
\r
export default function WilkinsonDotPlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [{"group":"A","value":26.526},{"group":"A","value":34.724},{"group":"A","value":15.9},{"group":"A","value":24.309},{"group":"A","value":31.647},{"group":"A","value":52.743},{"group":"A","value":34.778},{"group":"A","value":16.378},{"group":"A","value":30.008},{"group":"A","value":8},{"group":"A","value":44.783},{"group":"A","value":50.041},{"group":"A","value":56.052},{"group":"A","value":42.607},{"group":"A","value":51.319},{"group":"A","value":50.363},{"group":"A","value":43.211},{"group":"A","value":20.762},{"group":"A","value":67.169},{"group":"A","value":27.336},{"group":"A","value":25.737},{"group":"A","value":30.985},{"group":"A","value":43.896},{"group":"A","value":41.965},{"group":"A","value":32.921},{"group":"A","value":23.333},{"group":"A","value":34.317},{"group":"A","value":41.953},{"group":"A","value":34.292},{"group":"A","value":40.691},{"group":"A","value":63.04},{"group":"A","value":20.97},{"group":"A","value":47.602},{"group":"A","value":32.848},{"group":"A","value":37.222},{"group":"A","value":42.28},{"group":"A","value":43.988},{"group":"A","value":62.673},{"group":"A","value":49.121},{"group":"A","value":24.341},{"group":"A","value":23.439},{"group":"A","value":35.673},{"group":"B","value":44.181},{"group":"B","value":59.628},{"group":"B","value":63.014},{"group":"B","value":47.073},{"group":"B","value":77.089},{"group":"B","value":58.048},{"group":"B","value":68.882},{"group":"B","value":36.195},{"group":"B","value":67.145},{"group":"B","value":63.227},{"group":"B","value":58.909},{"group":"B","value":44.255},{"group":"B","value":49.122},{"group":"B","value":66.736},{"group":"B","value":70.759},{"group":"B","value":66.731},{"group":"B","value":73.123},{"group":"B","value":57.562},{"group":"B","value":59.11},{"group":"B","value":70.13},{"group":"B","value":63.342},{"group":"B","value":49.976},{"group":"B","value":83.104},{"group":"B","value":59.408},{"group":"B","value":58.996},{"group":"B","value":79.413},{"group":"B","value":82.837},{"group":"B","value":74.644},{"group":"B","value":72.89},{"group":"B","value":58.595},{"group":"B","value":47.006},{"group":"B","value":55.812},{"group":"B","value":53.616},{"group":"B","value":59.369},{"group":"B","value":51.089},{"group":"B","value":50.829},{"group":"B","value":52.692},{"group":"B","value":53.998},{"group":"B","value":63.956},{"group":"B","value":54.337},{"group":"B","value":74.918},{"group":"B","value":79.625},{"group":"C","value":54.304},{"group":"C","value":40.429},{"group":"C","value":59.437},{"group":"C","value":43.804},{"group":"C","value":66.632},{"group":"C","value":58.319},{"group":"C","value":45.61},{"group":"C","value":33.731},{"group":"C","value":53.027},{"group":"C","value":35.198},{"group":"C","value":48.881},{"group":"C","value":54.65},{"group":"C","value":59.719},{"group":"C","value":64.462},{"group":"C","value":44.776},{"group":"C","value":59.86},{"group":"C","value":45.818},{"group":"C","value":55.315},{"group":"C","value":43.797},{"group":"C","value":61.996},{"group":"C","value":44.857},{"group":"C","value":47.97},{"group":"C","value":61.022},{"group":"C","value":35.503},{"group":"C","value":79.843},{"group":"C","value":49.345},{"group":"C","value":53.618},{"group":"C","value":47.086},{"group":"C","value":47.59},{"group":"C","value":73.772},{"group":"C","value":33.426},{"group":"C","value":48.326},{"group":"C","value":52.77},{"group":"C","value":40.13},{"group":"C","value":38.089},{"group":"C","value":36.72},{"group":"C","value":43.272},{"group":"C","value":62.05},{"group":"C","value":49.469},{"group":"C","value":38.098},{"group":"C","value":40.67},{"group":"C","value":75.016}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(groups).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(-height))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)'))\r
      .call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    const r=3.4\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.value).sort(d3.ascending)\r
      // bin by x with width 2*r, stack vertically\r
      const bins=d3.bin().domain([0,100]).thresholds(28)(vals)\r
      bins.forEach(bin=>{\r
        const cx=x((bin.x0+bin.x1)/2)\r
        bin.forEach((_,k)=>{\r
          const cy=(y(gr)??0)+y.bandwidth()/2 - (bin.length-1)*r + k*2*r\r
          g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',r-0.4).attr('fill',colors[i]).attr('fill-opacity',0.82).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
        })\r
      })\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Wilkinson Dot Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};