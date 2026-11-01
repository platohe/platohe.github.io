var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'particle-flow-geo-json',\r
  title: 'Particle Flow Geo J S O N',\r
  desc: 'Particle Flow Geo J S O N — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleFlowGeoJSON',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-flow-geo-j-s-o-n"],\r
}\r
\r
export default function ParticleFlowGeoJSON({ data: customData }) {\r
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
    for(let p=0;p<70;p++){\r
      const src=cents[p%cents.length]\r
      const jit=(f)=>{ const q=Math.sin((p+1)*f)*43758.5453; return q-Math.floor(q) }\r
      let px=src.c[0]+(jit(12.9898)-0.5)*30, py=src.c[1]+(jit(78.233)-0.5)*30\r
      const tgt=cents[(p+1)%cents.length].c\r
      px+=(tgt[0]-px)*0.35+(jit(39.11)-0.5)*6; py+=(tgt[1]-py)*0.35+(jit(51.7)-0.5)*6\r
      g.append('circle').attr('cx',px).attr('cy',py).attr('r',1.6).attr('fill',colors[p%colors.length]).attr('opacity',0.7)\r
    }\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};