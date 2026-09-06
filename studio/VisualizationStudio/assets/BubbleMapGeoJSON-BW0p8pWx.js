var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'bubble-map-geo-json',\r
  title: 'Bubble Map Geo J S O N',\r
  desc: 'Bubble Map Geo J S O N — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BubbleMapGeoJSON',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bubble-map-geo-j-s-o-n"],\r
}\r
\r
export default function BubbleMapGeoJSON({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":42},"geometry":{"type":"Polygon","coordinates":[[[-100,30],[-90,30],[-90,40],[-100,40],[-100,30]]]}},{"type":"Feature","properties":{"value":68},"geometry":{"type":"Polygon","coordinates":[[[-80,30],[-70,30],[-70,40],[-80,40],[-80,30]]]}},{"type":"Feature","properties":{"value":55},"geometry":{"type":"Polygon","coordinates":[[[-100,15],[-90,15],[-90,25],[-100,25],[-100,15]]]}},{"type":"Feature","properties":{"value":30},"geometry":{"type":"Polygon","coordinates":[[[-80,15],[-70,15],[-70,25],[-80,25],[-80,15]]]}}]}\r
    const data = (customData && customData.type === 'FeatureCollection') ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const proj = d3.geoAlbersUsa().fitSize([W-40, H-40], data)\r
    const path = d3.geoPath().projection(proj)\r
    const vals = data.features.map(f=>f.properties.value); const c = d3.scaleSequential(d3.interpolateBlues).domain([Math.min(...vals), Math.max(...vals)])\r
    g.selectAll('path').data(data.features).join('path').attr('d', path).attr('fill', d=>c(d.properties.value)).attr('stroke','#fff').attr('stroke-width',2)\r
    g.selectAll('circle').data(data.features).join('circle').attr('cx',d=>path.centroid(d)[0]).attr('cy',d=>path.centroid(d)[1]).attr('r',d=>4+ d.properties.value*0.15).attr('fill',colors[1]).attr('opacity',0.6)\r
    \r
    g.append('text').attr('x',W/2).attr('y',H-8).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('BubbleMapGeoJSON - geoAlbersUsa')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};