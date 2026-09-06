var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'word-embedding2d',\r
  title: 'Word Embedding2 D',\r
  desc: 'Word Embedding2 D — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordEmbedding2D',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","word-embedding2-d"],\r
}\r
\r
export default function WordEmbedding2D({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const pts = d3.range(18).map(i=>({x:Math.random()*200, y:Math.random()*160, w: ['king','queen','man','woman','paris','tokyo'][i%6]}))\r
    const x = d3.scaleLinear().domain([0,200]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0,160]).range([H-M.bottom,M.top])\r
    const delaunay = d3.Delaunay.from(pts.map(p=>[x(p.x),y(p.y)]))\r
    const voronoi = delaunay.voronoi([0,0,W,H])\r
    const g = svg.append('g')\r
    g.append('g').selectAll('path').data(pts).join('path').attr('d',(d,i)=> voronoi.renderCell(i)).attr('fill','none').attr('stroke','var(--border)').attr('opacity',0.2)\r
    g.selectAll('circle').data(pts).join('circle').attr('cx',d=>x(d.x)).attr('cy',d=>y(d.y)).attr('r',4).attr('fill',(d,i)=>colors[i%colors.length])\r
    g.selectAll('text').data(pts).join('text').attr('x',d=>x(d.x)+6).attr('y',d=>y(d.y)+3).attr('fill','var(--text-secondary)').attr('font-size','7px').text(d=>d.w)\r
    const hull = d3.polygonHull(pts.map(p=>[x(p.x),y(p.y)]))\r
    if(hull) g.append('path').attr('d','M'+hull.join('L')+'Z').attr('fill','none').attr('stroke',colors[0]).attr('stroke-dasharray','4,4')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};