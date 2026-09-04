var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'flow-map-geo-json2',\r
  title: 'Flow Map Geo J S O N2',\r
  desc: 'Flow Map Geo J S O N2 — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'FlowMapGeoJSON2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["networks","flow-map-geo-j-s-o-n2"],\r
}\r
\r
export default function FlowMapGeoJSON2({ data: customData }) {\r
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
    for(let i=0;i<cents.length;i++)for(let j=i+1;j<cents.length;j++){\r
      const a=cents[i].c, b=cents[j].c\r
      if(!Number.isFinite(a[0])||!Number.isFinite(a[1])||!Number.isFinite(b[0])||!Number.isFinite(b[1])) continue\r
      const mx=(a[0]+b[0])/2, my=Math.min(a[1],b[1])-34\r
      if(!Number.isFinite(mx)||!Number.isFinite(my)) continue\r
      const sw=1+(cents[i].v+cents[j].v)/60\r
      g.append('path').attr('d','M'+a[0]+','+a[1]+' Q'+mx+','+my+' '+b[0]+','+b[1]).attr('fill','none').attr('stroke',colors[(i+j)%colors.length]).attr('stroke-width',Number.isFinite(sw)?sw:1).attr('opacity',0.65).attr('marker-end','url(#fmArrow)')\r
    }\r
    g.append('defs').append('marker').attr('id','fmArrow').attr('viewBox','0 -5 10 10').attr('refX',8).attr('markerWidth',5).attr('markerHeight',5).attr('orient','auto').append('path').attr('d','M0,-5L10,0L0,5').attr('fill','var(--border)')\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};