var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'trips-layer-map',\r
  title: 'Trips Layer Map',\r
  desc: 'Trips Layer Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TripsLayerMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","trips-layer-map"],\r
}\r
\r
export default function TripsLayerMap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const trips = (customData && customData.trips) ? customData.trips : [\r
      { id:'A', pts: Array.from({length:20},(_,i)=>({x:22+i*15, y:62+i*7.5})) },\r
      { id:'B', pts: Array.from({length:20},(_,i)=>({x:22+i*15, y:118+Math.sin(i*0.6)*14})) },\r
      { id:'C', pts: Array.from({length:20},(_,i)=>({x:22+i*15+Math.sin(i*0.4)*8, y:168})) },\r
      { id:'D', pts: Array.from({length:20},(_,i)=>({x:22+Math.sin(i*0.3)*10+i*4, y:62+i*8.2})) },\r
    ]\r
    const margin={top:28,right:12,bottom:32,left:12}\r
    const width=W-margin.left-margin.right, height=190\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('rect').attr('width',width).attr('height',height).attr('fill','var(--bg)').attr('stroke','var(--border)').attr('rx',6)\r
    let t=0\r
    const xScale=i=> 22 + i*15\r
    const line=d3.line().x(d=>d.x).y(d=>d.y).curve(d3.curveBasis)\r
    trips.forEach((tr,i)=>{\r
      g.append('path').attr('d', line(tr.pts)).attr('fill','none').attr('stroke',colors[i]).attr('stroke-width',1.2).attr('opacity',0.22)\r
    })\r
    const segGs=trips.map((tr,i)=> g.append('path').attr('fill','none').attr('stroke',colors[i]).attr('stroke-width',2.2).attr('stroke-linecap','round'))\r
    const dots=trips.map((tr,i)=> g.append('circle').attr('r',5).attr('fill',colors[i]).attr('stroke','var(--bg)').attr('stroke-width',1.4))\r
    // slider\r
    const sliderY=height+14\r
    g.append('rect').attr('y',sliderY).attr('width',width).attr('height',4).attr('fill','var(--border)').attr('rx',2)\r
    const prog=g.append('rect').attr('y',sliderY).attr('height',4).attr('fill',colors[0]).attr('rx',2)\r
    const label=g.append('text').attr('x',width/2).attr('y',sliderY+14).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','8px').text('t = 0 / 19')\r
    const tick=()=>{\r
      t=(t+1)%20\r
      trips.forEach((tr,i)=>{\r
        const seg=tr.pts.slice(0,t+1)\r
        segGs[i].attr('d', seg.length>1 ? line(seg): null)\r
        const p=tr.pts[t]\r
        dots[i].attr('cx',p.x).attr('cy',p.y)\r
      })\r
      prog.attr('width', (t/19)*width)\r
      label.text(\`t = \${t} / 19\`)\r
    }\r
    tick()\r
    const iv=setInterval(tick,160)\r
    return ()=> clearInterval(iv)\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};