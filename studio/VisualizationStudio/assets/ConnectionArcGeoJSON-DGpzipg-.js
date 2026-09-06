var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'connection-arc-geo-json',\r
  title: 'Connection Arc Geo J S O N',\r
  desc: 'Connection Arc Geo J S O N — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConnectionArcGeoJSON',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","connection-arc-geo-j-s-o-n"],\r
}\r
\r
export default function ConnectionArcGeoJSON({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":42},"geometry":{"type":"Polygon","coordinates":[[[-100,30],[-90,30],[-90,40],[-100,40],[-100,30]]]}},{"type":"Feature","properties":{"value":68},"geometry":{"type":"Polygon","coordinates":[[[-80,30],[-70,30],[-70,40],[-80,40],[-80,30]]]}},{"type":"Feature","properties":{"value":55},"geometry":{"type":"Polygon","coordinates":[[[-100,15],[-90,15],[-90,25],[-100,25],[-100,15]]]}},{"type":"Feature","properties":{"value":30},"geometry":{"type":"Polygon","coordinates":[[[-80,15],[-70,15],[-70,25],[-80,25],[-80,15]]]}}]}\r
    const isValidFeature=f=>f&&f.geometry&&f.geometry.coordinates&&f.properties&&Number.isFinite(Number(f.properties.value))&&!f.geometry.coordinates.flat(Infinity).some(v=>v===null||(typeof v==='number'&&!Number.isFinite(v)))\r
    const raw=(customData&&customData.type==='FeatureCollection'&&Array.isArray(customData.features)&&customData.features.length)?customData:DEFAULT_DATA\r
    let filtered=raw.features.filter(isValidFeature)\r
    if(filtered.length<2) filtered=DEFAULT_DATA.features\r
    const data={type:'FeatureCollection',features:filtered.map(f=>({type:'Feature',properties:{value:Number(f.properties.value)},geometry:f.geometry}))}\r
    const proj = d3.geoMercator().fitSize([W-40, H-40], data)\r
    const path = d3.geoPath().projection(proj)\r
    const centsAll=data.features.map(f=>({ f, c: path.centroid(f), v: Number(f.properties.value) })).filter(q=>Number.isFinite(q.c[0])&&Number.isFinite(q.c[1])&&Number.isFinite(q.v))\r
    if(centsAll.length<2) return\r
    const cents=centsAll\r
    const g = svg.append('g')\r
    const maxV=Math.max(...cents.map(q=>q.v),1)\r
    const cScale = d3.scaleSequential(d3.interpolateBlues).domain([0, maxV])\r
\r
    const pairs=[[0,1]]\r
    for(let i=1;i<cents.length;i++) pairs.push([i-1,i])\r
    pairs.forEach(pr=>{\r
      const a=cents[pr[0]].c, b=cents[pr[1]].c\r
      if(!Number.isFinite(a[0])||!Number.isFinite(a[1])||!Number.isFinite(b[0])||!Number.isFinite(b[1])) return\r
      g.append('line').attr('x1',a[0]).attr('y1',a[1]).attr('x2',b[0]).attr('y2',b[1]).attr('stroke','var(--border)')\r
      const mx=(a[0]+b[0])/2, my=(a[1]+b[1])/2\r
      if(!Number.isFinite(mx)||!Number.isFinite(my)) return\r
      g.append('path').attr('d','M'+a[0]+','+a[1]+' Q'+mx+','+(my-46)+' '+b[0]+','+b[1]).attr('fill','none').attr('stroke',colors[pr[0]%colors.length]).attr('stroke-width',1.6).attr('opacity',0.7)\r
      ;[a,b].forEach(pt=>{\r
        if(!Number.isFinite(pt[0])||!Number.isFinite(pt[1])) return\r
        g.append('circle').attr('cx',pt[0]).attr('cy',pt[1]).attr('r',3).attr('fill','#111')\r
      })\r
    })\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};