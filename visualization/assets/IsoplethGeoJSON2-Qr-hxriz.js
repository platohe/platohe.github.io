var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'isopleth-geo-json2',\r
  title: 'Isopleth Geo J S O N2',\r
  desc: 'Isopleth Geo J S O N2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IsoplethGeoJSON2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","isopleth-geo-j-s-o-n2"],\r
}\r
\r
export default function IsoplethGeoJSON2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":42},"geometry":{"type":"Polygon","coordinates":[[[-100,30],[-90,30],[-90,40],[-100,40],[-100,30]]]}},{"type":"Feature","properties":{"value":68},"geometry":{"type":"Polygon","coordinates":[[[-80,30],[-70,30],[-70,40],[-80,40],[-80,30]]]}},{"type":"Feature","properties":{"value":55},"geometry":{"type":"Polygon","coordinates":[[[-100,15],[-90,15],[-90,25],[-100,25],[-100,15]]]}},{"type":"Feature","properties":{"value":30},"geometry":{"type":"Polygon","coordinates":[[[-80,15],[-70,15],[-70,25],[-80,25],[-80,15]]]}}]}\r
    const data = (customData && customData.type === 'FeatureCollection') ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const proj = d3.geoNaturalEarth1().fitSize([W-40, H-40], data)\r
    const path = d3.geoPath().projection(proj)\r
    const vals = data.features.map(f=>f.properties.value); const c = d3.scaleSequential(d3.interpolateViridis).domain([Math.min(...vals), Math.max(...vals)])\r
    g.selectAll('path').data(data.features).join('path').attr('d', path).attr('fill', d=>c(d.properties.value)).attr('stroke','#fff').attr('stroke-width',1)\r
    \r
    g.selectAll('line').data(data.features).join('line').attr('x1',d=>path.centroid(d)[0]).attr('y1',d=>path.centroid(d)[1]).attr('x2',d=>path.centroid(d)[0]).attr('y2',d=>path.centroid(d)[1]-d.properties.value*0.6).attr('stroke',colors[2]).attr('stroke-width',3)\r
    g.append('text').attr('x',W/2).attr('y',H-8).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('IsoplethGeoJSON2 - geoNaturalEarth1')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};