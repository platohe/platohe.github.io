var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiDiagram: Classic labeled cells.\r
export const meta = {\r
  id: 'voronoi-diagram',\r
  title: 'Voronoi Diagram',\r
  desc: 'Voronoi Diagram — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-diagram"],\r
}\r
\r
export default function VoronoiDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const pts = [[70,80],[180,60],[300,90],[120,170],[230,150],[330,200],[90,250],[210,240],[310,260],[160,120]]\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([20, 20, 380, 280])\r
    pts.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', ((i) => colors[i % colors.length])(i)).attr('fill-opacity', 0.75).attr('stroke', 'var(--bg)').attr('stroke-width', 1.6)\r
      g.append('text').attr('x', p[0]).attr('y', p[1] + 3).attr('text-anchor', 'middle').attr('font-size', '8px').attr('font-weight', 700).attr('fill', '#fff').text('C' + i)\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 3).attr('fill', '#0f172a').attr('fill-opacity', 0.55)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};