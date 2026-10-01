var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'up-set-multi-view',\r
  title: 'Up Set Multi View',\r
  desc: 'Up Set Multi View — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'UpSetMultiView',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","up-set-multi-view"],\r
}\r
\r
export default function UpSetMultiView({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"sets":[{"name":"A","size":120},{"name":"B","size":90},{"name":"C","size":70}],"intersections":[{"sets":["A","B"],"size":30},{"sets":["A","C"],"size":20},{"sets":["B","C"],"size":15},{"sets":["A","B","C"],"size":10}]}\r
    const data = (customData && customData.sets && customData.intersections) ? customData : DEFAULT_DATA\r
    const x = d3.scaleBand().domain(data.intersections.map((_, i) => i)).range([M.left, W - M.right]).padding(0.2)\r
    const y = d3.scaleLinear().domain([0, d3.max(data.intersections, d => d.size) * 1.2]).range([H - M.bottom, M.top + 40])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).tickFormat(i => data.intersections[i].sets.join('&')).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(4).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.selectAll('rect').data(data.intersections).join('rect').attr('x', (_, i) => x(i)).attr('y', d => y(d.size)).attr('width', x.bandwidth()).attr('height', d => H - M.bottom - y(d.size)).attr('fill', colors[0]).attr('rx', 2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};