var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'spike-globe-map',\r
  title: 'Spike Globe Map',\r
  desc: 'Spike Globe Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpikeGlobeMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spike-globe-map"],\r
}\r
\r
export default function SpikeGlobeMap({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const spikes=(customData&&customData.spikes)||[{lat:40.7,lng:-74,v:82},{lat:51.5,lng:0,v:64},{lat:35.6,lng:139.6,v:90},{lat:-33.8,lng:151,v:38},{lat:19,lng:-99,v:42},{lat:55.7,lng:37.6,v:55}]\r
    const proj=d3.geoOrthographic().scale(88).translate([200,148]).rotate([20,-12]).clipAngle(90)\r
    const path=d3.geoPath(proj)\r
    const g=svg.append('g')\r
    g.append('path').datum({type:'Sphere'}).attr('d',path).attr('fill','#0f172a').attr('stroke','var(--border)')\r
    g.append('path').datum(d3.geoGraticule10()).attr('d',path).attr('fill','none').attr('stroke','var(--border)').attr('opacity',0.28).attr('stroke-width',0.4)\r
    const hScale=d3.scaleLinear().domain([0,100]).range([0,28])\r
    spikes.forEach(s=>{\r
      const p=proj([s.lng,s.lat]); if(!p) return\r
      if(d3.geoDistance([s.lng,s.lat],[20,-12])>Math.PI/2) return\r
      const [x,y]=p\r
      const h=hScale(s.v)\r
      const ang=Math.atan2(y-148, x-200)\r
      const x2=x+Math.cos(ang)*h, y2=y+Math.sin(ang)*h\r
      g.append('line').attr('x1',x).attr('y1',y).attr('x2',x2).attr('y2',y2).attr('stroke','#f59e0b').attr('stroke-width',3).attr('stroke-linecap','round').attr('opacity',0.92)\r
      g.append('circle').attr('cx',x2).attr('cy',y2).attr('r',2).attr('fill','#f59e0b').attr('stroke','var(--bg)')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Spike Globe Map')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};