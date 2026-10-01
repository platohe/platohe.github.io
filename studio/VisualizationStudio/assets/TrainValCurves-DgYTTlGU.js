var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'train-val-curves',\r
  title: 'Train Val Curves',\r
  desc: 'Train Val Curves — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TrainValCurves',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","train-val-curves"],\r
}\r
\r
export default function TrainValCurves({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"train":[{"epoch":1,"loss":1.8},{"epoch":2,"loss":1.2},{"epoch":3,"loss":0.9},{"epoch":4,"loss":0.65},{"epoch":5,"loss":0.52},{"epoch":6,"loss":0.41},{"epoch":7,"loss":0.35},{"epoch":8,"loss":0.3}],"val":[{"epoch":1,"loss":1.9},{"epoch":2,"loss":1.35},{"epoch":3,"loss":1.05},{"epoch":4,"loss":0.85},{"epoch":5,"loss":0.72},{"epoch":6,"loss":0.68},{"epoch":7,"loss":0.66},{"epoch":8,"loss":0.67}]}\r
    const data = (customData && customData.train && customData.val) ? customData : DEFAULT_DATA\r
    const all = [...data.train, ...data.val]\r
    const x = d3.scaleLinear().domain([1, 8]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, d3.max(all, d => d.loss) * 1.1]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    const line = d3.line().x(d => x(d.epoch)).y(d => y(d.loss)).curve(d3.curveMonotoneX)\r
    g.append('path').datum(data.train).attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.2)\r
    g.append('path').datum(data.val).attr('d', line).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2.2).attr('stroke-dasharray', '6,4')\r
    g.selectAll('circle.train').data(data.train).join('circle').attr('cx', d => x(d.epoch)).attr('cy', d => y(d.loss)).attr('r', 3).attr('fill', colors[0])\r
    g.selectAll('circle.val').data(data.val).join('circle').attr('cx', d => x(d.epoch)).attr('cy', d => y(d.loss)).attr('r', 3).attr('fill', colors[1])\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};