var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'ppoverlay-multi',\r
  title: 'P P Overlay Multi',\r
  desc: 'P P Overlay Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PPOverlayMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","p-p-overlay-multi"],\r
}\r
\r
export default function PPOverlayMulti({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"observed":[{"p":0.1,"q":0.12},{"p":0.3,"q":0.28},{"p":0.5,"q":0.52},{"p":0.7,"q":0.73},{"p":0.9,"q":0.88}],"theoretical":[{"p":0,"q":0},{"p":1,"q":1}]}\r
    const data = (customData && customData.observed && customData.theoretical) ? customData : DEFAULT_DATA\r
    const x = d3.scaleLinear().domain([0, 1]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, 1]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('line').attr('x1', x(0)).attr('y1', y(0)).attr('x2', x(1)).attr('y2', y(1)).attr('stroke', 'var(--border)').attr('stroke-dasharray', '4,4')\r
    g.selectAll('circle').data(data.observed).join('circle').attr('cx', d => x(d.p)).attr('cy', d => y(d.q)).attr('r', 4).attr('fill', colors[0])\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};