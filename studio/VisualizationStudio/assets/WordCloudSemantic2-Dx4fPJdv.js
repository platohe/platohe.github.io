var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'word-cloud-semantic2',\r
  title: 'Word Cloud Semantic2',\r
  desc: 'Word Cloud Semantic2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordCloudSemantic2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","word-cloud-semantic2"],\r
}\r
\r
export default function WordCloudSemantic2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28},{"text":"Chart","size":22},{"text":"Insight","size":18}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const pts = data.map((d,i)=>[W/2 + (Math.random()-0.5)*200, H/2 + (Math.random()-0.5)*160])\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([0,0,W,H])\r
    const g = svg.append('g')\r
    pts.forEach((p,i)=>{\r
      const cell = voronoi.cellPolygon(i)\r
      if(cell) g.append('path').attr('d','M'+cell.join('L')+'Z').attr('fill',colors[i%colors.length]).attr('opacity',0.15).attr('stroke',colors[i%colors.length])\r
      g.append('text').attr('x',p[0]).attr('y',p[1]).attr('text-anchor','middle').attr('fill',colors[i%colors.length]).attr('font-size',data[i].size*0.5+'px').text(data[i].text)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};