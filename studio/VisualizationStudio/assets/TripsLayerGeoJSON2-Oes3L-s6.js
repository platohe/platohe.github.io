var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'trips-layer-geo-json2',\r
  title: 'Trips Layer Geo J S O N2',\r
  desc: 'Trips Layer Geo J S O N2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TripsLayerGeoJSON2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","trips-layer-geo-j-s-o-n2"],\r
}\r
\r
export default function TripsLayerGeoJSON2({ data: customData }) {\r
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
    for(let t=0;t<6;t++){\r
      const a=cents[t%cents.length].c, b=cents[(t+1)%cents.length].c\r
      g.append('line').attr('x1',a[0]).attr('y1',a[1]).attr('x2',b[0]).attr('y2',b[1]).attr('stroke',colors[t%colors.length]).attr('stroke-width',2+t%2).attr('stroke-dasharray',(4+t*2)+','+(3+t)).attr('stroke-dashoffset',t*3).attr('opacity',0.8)\r
    }\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};