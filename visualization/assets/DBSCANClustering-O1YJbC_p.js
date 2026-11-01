var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes, colors } from './utils'\r
// DBSCANClustering: Core/border/noise distinction.\r
export const meta = {\r
  id: 'dbscanclustering',\r
  title: 'D B S C A N Clustering',\r
  desc: 'D B S C A N Clustering — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DBSCANClustering',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","d-b-s-c-a-n-clustering"],\r
}\r
\r
export default function DBSCANClustering({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { points: [{x:25,y:30,g:0},{x:30,y:24,g:0},{x:22,y:38,g:0},{x:28,y:33,g:0},{x:70,y:65,g:1},{x:76,y:72,g:1},{x:64,y:70,g:1},{x:73,y:61,g:1},{x:45,y:15,g:2},{x:52,y:20,g:2},{x:40,y:22,g:2},{x:20,y:75,g:3},{x:28,y:82,g:3},{x:15,y:68,g:3},{x:80,y:25,g:4},{x:88,y:32,g:4},{x:74,y:18,g:4}] }\r
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
    ;// core points get rings, noise gets X marks\r
    data.points.filter(p=>p.g===0&&p.x%2===0).forEach(p=>g.append('circle').attr('cx',M.left+x(p.x)).attr('cy',M.top+y(p.y)).attr('r',8).attr('fill','none').attr('stroke','#6366f1'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};