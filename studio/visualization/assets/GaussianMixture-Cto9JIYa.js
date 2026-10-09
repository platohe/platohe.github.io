var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, makeAxes, colors } from './utils'\r
\r
export const meta = {\r
  id: 'gaussian-mixture',\r
  title: 'Gaussian Mixture',\r
  desc: 'Gaussian Mixture — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GaussianMixture',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gaussian-mixture"],\r
}\r
\r
export default function GaussianMixture({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { comps: [{ cx: 30, cy: 35, rx: 14, ry: 9, rot: -25 }, { cx: 70, cy: 65, rx: 16, ry: 8, rot: 20 }, { cx: 45, cy: 18, rx: 10, ry: 12, rot: 0 }], points: [{x:25,y:30,g:0},{x:30,y:24,g:0},{x:22,y:38,g:0},{x:28,y:33,g:0},{x:70,y:65,g:1},{x:76,y:72,g:1},{x:64,y:70,g:1},{x:73,y:61,g:1},{x:45,y:15,g:2},{x:52,y:20,g:2},{x:40,y:22,g:2},{x:20,y:75,g:3},{x:28,y:82,g:3},{x:15,y:68,g:3},{x:80,y:25,g:4},{x:88,y:32,g:4},{x:74,y:18,g:4}] }\r
    const data = (customData && customData.comps) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 100]).range([IH, 0])\r
    makeAxes(g, x, y, M.left, M.top + IH)\r
    data.comps.forEach((c, i) => {\r
      g.append('ellipse')\r
        .attr('transform', 'translate(' + (M.left + x(c.cx)) + ',' + (M.top + y(c.cy)) + ') rotate(' + (-c.rot) + ')')\r
        .attr('rx', x(c.rx)).attr('ry', IH - y(c.ry)).attr('fill', 'none')\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 2).attr('stroke-dasharray', '5,3')\r
    })\r
    data.points.forEach((p) => {\r
      g.append('circle').attr('cx', M.left + x(p.x)).attr('cy', M.top + y(p.y))\r
        .attr('r', 3.5).attr('fill', colors[(p.g ?? 0) % colors.length]).attr('fill-opacity', 0.7)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};