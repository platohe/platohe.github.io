var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'globe-bars',\r
  title: 'Globe Bars',\r
  desc: 'Globe Bars — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GlobeBars',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","globe-bars"],\r
}\r
\r
export default function GlobeBars({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_BARS=[{city:'NYC',lat:40.7,lng:-74,value:80},{city:'London',lat:51.5,lng:0,value:65},{city:'Tokyo',lat:35.6,lng:139.6,value:90},{city:'Sydney',lat:-33.8,lng:151,value:45},{city:'Cairo',lat:30,lng:31,value:55},{city:'Rio',lat:-22.9,lng:-43,value:40},{city:'Paris',lat:48.8,lng:2.3,value:62},{city:'Mumbai',lat:19,lng:72.8,value:70}]\r
    const bars = customData && customData.bars ? customData.bars : DEFAULT_BARS\r
    const proj=d3.geoOrthographic().scale(92).translate([200,152]).rotate([-10,-18]).clipAngle(90)\r
    const path=d3.geoPath(proj)\r
    const g=svg.append('g')\r
    g.append('path').datum({type:'Sphere'}).attr('d',path).attr('fill','#0f172a').attr('stroke','var(--border)').attr('stroke-width',1)\r
    g.append('path').datum(d3.geoGraticule10()).attr('d',path).attr('fill','none').attr('stroke','var(--border)').attr('stroke-width',0.4).attr('opacity',0.5)\r
    const color=d3.scaleSequential(d3.interpolateYlOrRd).domain([0,100])\r
    bars.forEach(d=>{\r
      const p=proj([d.lng,d.lat]); if(!p) return\r
      const [x,y]=p\r
      // visibility: check if point is on front hemisphere\r
      const visible = d3.geoDistance([d.lng,d.lat], [-10,-18]) < Math.PI/2\r
      if(!visible) return\r
      const len=d.value*0.42\r
      const ang=Math.atan2(y-152, x-200)\r
      const x2=x+Math.cos(ang)*len, y2=y+Math.sin(ang)*len\r
      g.append('line').attr('x1',x).attr('y1',y).attr('x2',x2).attr('y2',y2).attr('stroke',color(d.value)).attr('stroke-width',4).attr('stroke-linecap','round')\r
      g.append('circle').attr('cx',x2).attr('cy',y2).attr('r',2.5).attr('fill',color(d.value)).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x2+4).attr('y',y2+3).attr('fill','var(--text-secondary)').attr('font-size','6px').text(d.city)\r
    })\r
    // 3 great-circle arcs on sphere\r
    const arcs=[[[ -74,40.7],[0,51.5]],[[139.6,35.6],[151,-33.8]],[[2.3,48.8],[72.8,19]]]\r
    arcs.forEach(a=>{\r
      const line={type:'LineString', coordinates: d3.geoInterpolate(a[0],a[1]) ? Array.from({length:40},(_,i)=> d3.geoInterpolate(a[0],a[1])(i/39)) : a}\r
      g.append('path').datum(line).attr('d',path).attr('fill','none').attr('stroke','#38bdf8').attr('stroke-width',1.2).attr('opacity',0.85).attr('stroke-dasharray','3,2')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Globe with Bars & Arcs')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};