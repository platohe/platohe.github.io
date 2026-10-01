var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'dorling-geo-json',\r
  title: 'Dorling Geo J S O N',\r
  desc: 'Dorling Geo J S O N — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DorlingGeoJSON',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dorling-geo-j-s-o-n"],\r
}\r
\r
export default function DorlingGeoJSON({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":42},"geometry":{"type":"Polygon","coordinates":[[[-100,30],[-90,30],[-90,40],[-100,40],[-100,30]]]}},{"type":"Feature","properties":{"value":68},"geometry":{"type":"Polygon","coordinates":[[[-80,30],[-70,30],[-70,40],[-80,40],[-80,30]]]}},{"type":"Feature","properties":{"value":55},"geometry":{"type":"Polygon","coordinates":[[[-100,15],[-90,15],[-90,25],[-100,25],[-100,15]]]}},{"type":"Feature","properties":{"value":30},"geometry":{"type":"Polygon","coordinates":[[[-80,15],[-70,15],[-70,25],[-80,25],[-80,15]]]}}]}\r
    const data = (customData && customData.type === 'FeatureCollection') ? customData : DEFAULT_DATA\r
    const proj = d3.geoMercator().fitSize([W-40, H-40], data)\r
    const path = d3.geoPath().projection(proj)\r
    const cents = data.features.map(f=>({ f, c: path.centroid(f), v: f.properties.value }))\r
    const g = svg.append('g')\r
    const cScale = d3.scaleSequential(d3.interpolateBlues).domain([0, Math.max(...cents.map(q=>q.v))])\r
\r
    cents.forEach(q=>{ q.r=6+Math.sqrt(q.v)*2.6; q.x=q.c[0]; q.y=q.c[1] })\r
    for(let t=0;t<40;t++){\r
      for(let i=0;i<cents.length;i++)for(let j=i+1;j<cents.length;j++){\r
        const a=cents[i],b=cents[j], dx=b.x-a.x, dy=b.y-a.y, dist=Math.hypot(dx,dy)||1, min=a.r+b.r+2\r
        if(dist<min){ const push=(min-dist)/2, ux=dx/dist, uy=dy/dist; a.x-=ux*push; a.y-=uy*push; b.x+=ux*push; b.y+=uy*push }\r
      }\r
      cents.forEach(q=>{ q.y=Math.max(q.r,Math.min(H-q.r,q.y)); q.x=Math.max(q.r,Math.min(W-q.r,q.x)) })\r
    }\r
    cents.forEach((q,i)=>{\r
      g.append('circle').attr('cx',q.x).attr('cy',q.y).attr('r',q.r).attr('fill',cScale(q.v)).attr('stroke','#fff').attr('stroke-width',1.5)\r
      g.append('text').attr('x',q.x).attr('y',q.y+4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','9px').text(q.v)\r
    })\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};