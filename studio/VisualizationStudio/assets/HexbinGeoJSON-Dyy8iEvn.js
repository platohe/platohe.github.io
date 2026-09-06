var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'hexbin-geo-json',\r
  title: 'Hexbin Geo J S O N',\r
  desc: 'Hexbin Geo J S O N — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HexbinGeoJSON',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hexbin-geo-j-s-o-n"],\r
}\r
\r
export default function HexbinGeoJSON({ data: customData }) {\r
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
    const R=22, centers={}\r
    cents.forEach(q=>{ const gx=Math.round(q.c[0]/(R*1.5)), gy=Math.round(q.c[1]/(R*Math.sqrt(3))); const key=gx+'_'+gy; centers[key]=(centers[key]||0)+1 })\r
    Object.keys(centers).forEach(key=>{\r
      const [gx,gy]=key.split('_').map(Number)\r
      const cx=gx*R*1.5, cy=gy*R*Math.sqrt(3)+(gx%2?R*Math.sqrt(3)/2:0)\r
      const pts=d3.range(6).map(i=>{ const a=Math.PI/3*i+Math.PI/6; return [cx+R*0.62*Math.cos(a), cy+R*0.62*Math.sin(a)] })\r
      g.append('path').attr('d','M'+pts.join('L')+'Z').attr('fill', d3.interpolateBlues(Math.min(1,centers[key]/2))).attr('fill-opacity',0.75).attr('stroke','#fff')\r
      g.append('text').attr('x',cx).attr('y',cy+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','8px').text(centers[key])\r
    })\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};