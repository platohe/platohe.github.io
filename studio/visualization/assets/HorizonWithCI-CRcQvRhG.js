var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'horizon-with-ci',\r
  title: 'Horizon With C I',\r
  desc: 'Horizon With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-with-c-i"],\r
}\r
\r
export default function HorizonWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const n=64\r
    const gen = () => [{"x":0,"y":8.404,"lo":2.897,"hi":3.705},{"x":1,"y":13.246,"lo":2.35,"hi":3.053},{"x":2,"y":15.49,"lo":3.249,"hi":3.731},{"x":3,"y":18.915,"lo":2.5,"hi":3.764},{"x":4,"y":21.09,"lo":2.614,"hi":2.395},{"x":5,"y":19.46,"lo":3.373,"hi":3.221},{"x":6,"y":15.091,"lo":2.942,"hi":3.675},{"x":7,"y":11.351,"lo":3.185,"hi":2.063},{"x":8,"y":7.091,"lo":2.124,"hi":2.371},{"x":9,"y":3.319,"lo":3.061,"hi":2.054},{"x":10,"y":-5.119,"lo":3.685,"hi":2.975},{"x":11,"y":-8.155,"lo":2.639,"hi":2.9},{"x":12,"y":-15.88,"lo":2.103,"hi":3.113},{"x":13,"y":-16.919,"lo":2.49,"hi":3.291},{"x":14,"y":-20.109,"lo":2.607,"hi":3.477},{"x":15,"y":-17.426,"lo":3.016,"hi":2.408},{"x":16,"y":-18.003,"lo":2.586,"hi":2.149},{"x":17,"y":-13.411,"lo":3.362,"hi":3.386},{"x":18,"y":-8.291,"lo":2.176,"hi":3.887},{"x":19,"y":-5.772,"lo":3.885,"hi":2.275},{"x":20,"y":-2.625,"lo":2.032,"hi":2.721},{"x":21,"y":2.698,"lo":3.224,"hi":3.799},{"x":22,"y":3.909,"lo":3.439,"hi":3.87},{"x":23,"y":6.237,"lo":3.413,"hi":2.359},{"x":24,"y":7.304,"lo":3.644,"hi":2.241},{"x":25,"y":7.932,"lo":3.126,"hi":3.832},{"x":26,"y":3.266,"lo":3.157,"hi":2.674},{"x":27,"y":0.719,"lo":2.646,"hi":3.459},{"x":28,"y":-3.993,"lo":2.9,"hi":3.686},{"x":29,"y":-5.701,"lo":3.988,"hi":3.78},{"x":30,"y":-9.371,"lo":3.09,"hi":2.592},{"x":31,"y":-12.208,"lo":3.393,"hi":2.627},{"x":32,"y":-9.591,"lo":3.81,"hi":2.187},{"x":33,"y":-9.446,"lo":3.644,"hi":2.26},{"x":34,"y":-4.617,"lo":2.357,"hi":3.419},{"x":35,"y":-1.651,"lo":2.446,"hi":2.826},{"x":36,"y":1.095,"lo":3.309,"hi":2.672},{"x":37,"y":6.497,"lo":3.258,"hi":3.774},{"x":38,"y":11.989,"lo":3.585,"hi":2.786},{"x":39,"y":15.469,"lo":3.727,"hi":2.739},{"x":40,"y":18.012,"lo":3.475,"hi":3.271},{"x":41,"y":22.928,"lo":3.816,"hi":2.418},{"x":42,"y":21.522,"lo":2.978,"hi":2.368},{"x":43,"y":17.206,"lo":3.411,"hi":3.417},{"x":44,"y":14.504,"lo":2.551,"hi":2.673},{"x":45,"y":8.538,"lo":2.442,"hi":3.987},{"x":46,"y":5.033,"lo":3.977,"hi":2.328},{"x":47,"y":-2.456,"lo":3.122,"hi":2.585},{"x":48,"y":-7.08,"lo":2.869,"hi":2.837},{"x":49,"y":-10.548,"lo":2.797,"hi":2.672},{"x":50,"y":-13.041,"lo":2.655,"hi":2.991},{"x":51,"y":-15.94,"lo":3.093,"hi":3.179},{"x":52,"y":-17.541,"lo":2.651,"hi":2.598},{"x":53,"y":-15.732,"lo":3.339,"hi":2.442},{"x":54,"y":-13.566,"lo":3.39,"hi":2.628},{"x":55,"y":-10.075,"lo":2.628,"hi":2.085},{"x":56,"y":-4.191,"lo":2.415,"hi":2.963},{"x":57,"y":-1.029,"lo":3.424,"hi":3.825},{"x":58,"y":4.035,"lo":2.879,"hi":2.308},{"x":59,"y":6.572,"lo":3.051,"hi":3.681},{"x":60,"y":7.698,"lo":2.9,"hi":2.293},{"x":61,"y":6.211,"lo":3.615,"hi":2.417},{"x":62,"y":3.583,"lo":3.091,"hi":3.969},{"x":63,"y":1.193,"lo":3.719,"hi":3.686}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].y!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,n-1]).range([0,width])\r
    const y=d3.scaleLinear().domain([-24,24]).range([height,0])\r
    const mid=y(0)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const bands=[8,16,24], cols=['#bfdbfe','#60a5fa','#1d4ed8']\r
    bands.forEach((th,i)=>{\r
      g.append('path').datum(data.filter(d=>d.y>0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.min(d.y, th))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.72-i*0.14)\r
      g.append('path').datum(data.filter(d=>d.y<0)).attr('d',d3.area().x(d=>x(d.x)).y0(mid).y1(d=>y(Math.max(-th, d.y))).curve(d3.curveBasis)).attr('fill',cols[i]).attr('opacity',0.42)\r
    })\r
    // CI faint band\r
    const ciArea=d3.area().x(d=>x(d.x)).y0(d=>y(d.y-d.lo)).y1(d=>y(d.y+d.hi)).curve(d3.curveBasis)\r
    g.append('path').datum(data).attr('d',ciArea).attr('fill','#94a3b8').attr('fill-opacity',0.12)\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',mid).attr('y2',mid).attr('stroke','var(--border)')\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Horizon with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};