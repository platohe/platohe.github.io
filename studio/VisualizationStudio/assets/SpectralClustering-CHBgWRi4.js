var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes, colors } from './utils'\r
// SpectralClustering: Two-moons spectral grouping.\r
export const meta = {\r
  id: 'spectral-clustering',\r
  title: 'Spectral Clustering',\r
  desc: 'Spectral Clustering — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpectralClustering',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","spectral-clustering"],\r
}\r
\r
export default function SpectralClustering({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { points: [{x:10,y:55,g:0},{x:18,y:42,g:0},{x:28,y:34,g:0},{x:40,y:31,g:0},{x:52,y:33,g:0},{x:64,y:40,g:0},{x:74,y:51,g:0},{x:82,y:64,g:0},{x:30,y:78,g:1},{x:40,y:84,g:1},{x:52,y:86,g:1},{x:64,y:83,g:1},{x:74,y:77,g:1},{x:82,y:68,g:1}] }\r
    const data = (customData && customData.points) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 100]).range([IH, 0])\r
    makeAxes(g, x, y, M.left, M.top + IH)\r
    data.points.forEach((p, i) => {\r
      g.append('circle').attr('cx', M.left + x(p.x)).attr('cy', M.top + y(p.y))\r
        .attr('r', p.r || 4).attr('fill', colors[(p.g ?? i) % colors.length]).attr('fill-opacity', 0.8)\r
    })\r
\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};