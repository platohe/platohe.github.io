var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'prism-map-geo-json2',\r
  title: 'Prism Map Geo J S O N2',\r
  desc: 'Prism Map Geo J S O N2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PrismMapGeoJSON2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","prism-map-geo-j-s-o-n2"],\r
}\r
\r
export default function PrismMapGeoJSON2({ data: customData }) {\r
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
    data.features.forEach(f=>{\r
      g.append('path').attr('d',path(f)).attr('transform','translate(5,7)').attr('fill','#94a3b8').attr('opacity',0.6)\r
    })\r
    data.features.forEach(f=>{\r
      g.append('path').attr('d',path(f)).attr('fill',cScale(f.properties.value)).attr('stroke','#fff').attr('stroke-width',1)\r
    })\r
    g.append('text').attr('x',14).attr('y',H-8).attr('fill','var(--text-secondary)').attr('font-size','8px').text('prism extrusion (offset shadow)')\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};