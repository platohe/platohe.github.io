var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'albers-usageo-json2',\r
  title: 'Albers U S A Geo J S O N2',\r
  desc: 'Albers U S A Geo J S O N2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AlbersUSAGeoJSON2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","albers-u-s-a-geo-j-s-o-n2"],\r
}\r
\r
export default function AlbersUSAGeoJSON2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":42},"geometry":{"type":"Polygon","coordinates":[[[0,0],[100,0],[100,100],[0,100],[0,0]]]}},{"type":"Feature","properties":{"value":68},"geometry":{"type":"Polygon","coordinates":[[[110,10],[190,10],[190,90],[110,90],[110,10]]]}},{"type":"Feature","properties":{"value":55},"geometry":{"type":"Polygon","coordinates":[[[50,110],[150,110],[150,200],[50,200],[50,110]]]}}]}\r
    const raw = (customData && customData.type === 'FeatureCollection') ? customData : DEFAULT_DATA\r
    // Filter out features with invalid (null) coordinate data\r
    const data = { ...raw, features: raw.features.filter(f => f.geometry.coordinates.every(ring => ring.every(([x, y]) => x != null && y != null))) }\r
    if (!data.features.length) return\r
    const g = svg.append('g')\r
    const proj = d3.geoNaturalEarth1().fitSize([W-40, H-40], data)\r
    const path = d3.geoPath().projection(proj)\r
    const vals = data.features.map(f=>f.properties.value); const c = d3.scaleSequential(d3.interpolateViridis).domain([Math.min(...vals), Math.max(...vals)])\r
    g.selectAll('path').data(data.features).join('path').attr('d', path).attr('fill', d=>c(d.properties.value)).attr('stroke','#fff').attr('stroke-width',1)\r
    \r
    g.selectAll('line').data(data.features).join('line').attr('x1',d=>{const c=path.centroid(d);return isFinite(c[0])?c[0]:0}).attr('y1',d=>{const c=path.centroid(d);return isFinite(c[1])?c[1]:0}).attr('x2',d=>{const c=path.centroid(d);return isFinite(c[0])?c[0]:0}).attr('y2',d=>{const c=path.centroid(d);return isFinite(c[1])?c[1]-d.properties.value*0.6:0}).attr('stroke',colors[6]).attr('stroke-width',3)\r
    g.append('text').attr('x',W/2).attr('y',H-8).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('AlbersUSAGeoJSON2 - geoNaturalEarth1')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};