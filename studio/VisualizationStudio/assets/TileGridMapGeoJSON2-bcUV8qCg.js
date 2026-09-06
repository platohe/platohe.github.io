var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'tile-grid-map-geo-json2',\r
  title: 'Tile Grid Map Geo J S O N2',\r
  desc: 'Tile Grid Map Geo J S O N2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TileGridMapGeoJSON2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tile-grid-map-geo-j-s-o-n2"],\r
}\r
\r
export default function TileGridMapGeoJSON2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":42},"geometry":{"type":"Polygon","coordinates":[[[-100,30],[-90,30],[-90,40],[-100,40],[-100,30]]]}},{"type":"Feature","properties":{"value":68},"geometry":{"type":"Polygon","coordinates":[[[-80,30],[-70,30],[-70,40],[-80,40],[-80,30]]]}},{"type":"Feature","properties":{"value":55},"geometry":{"type":"Polygon","coordinates":[[[-100,15],[-90,15],[-90,25],[-100,25],[-100,15]]]}},{"type":"Feature","properties":{"value":30},"geometry":{"type":"Polygon","coordinates":[[[-80,15],[-70,15],[-70,25],[-80,25],[-80,15]]]}}]}\r
    const isValidFeature=f=>f&&f.geometry&&f.geometry.coordinates&&f.properties&&Number.isFinite(Number(f.properties.value))&&!f.geometry.coordinates.flat(Infinity).some(v=>v===null||(typeof v==='number'&&!Number.isFinite(v)))\r
    const raw=(customData&&customData.type==='FeatureCollection'&&Array.isArray(customData.features)&&customData.features.length)?customData:DEFAULT_DATA\r
    let filtered=raw.features.filter(isValidFeature)\r
    if(!filtered.length) filtered=DEFAULT_DATA.features\r
    const data={type:'FeatureCollection',features:filtered.map(f=>({type:'Feature',properties:{value:Number(f.properties.value)},geometry:f.geometry}))}\r
    const proj = d3.geoMercator().fitSize([W-40, H-40], data)\r
    const path = d3.geoPath().projection(proj)\r
    const centsAll=data.features.map(f=>({ f, c: path.centroid(f), v: Number(f.properties.value) })).filter(q=>Number.isFinite(q.c[0])&&Number.isFinite(q.c[1])&&Number.isFinite(q.v))\r
    if(!centsAll.length) return\r
    const cents=centsAll\r
    const g = svg.append('g')\r
    const maxV=Math.max(...cents.map(q=>q.v),1)\r
    const cScale = d3.scaleSequential(d3.interpolateBlues).domain([0, maxV])\r
\r
    const S=30\r
    cents.forEach(q=>{\r
      if(!Number.isFinite(q.c[0])||!Number.isFinite(q.c[1])) return\r
      const x=q.c[0]-S/2, y=q.c[1]-S/2\r
      if(!Number.isFinite(x)||!Number.isFinite(y)) return\r
      g.append('rect').attr('x',x).attr('y',y).attr('width',S).attr('height',S).attr('rx',5).attr('fill',cScale(q.v)).attr('stroke','#fff').attr('stroke-width',1.5)\r
      g.append('text').attr('x',q.c[0]).attr('y',q.c[1]+4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','10px').attr('font-weight',600).text(q.v)\r
    })\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};