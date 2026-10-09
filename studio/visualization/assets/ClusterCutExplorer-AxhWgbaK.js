var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'cluster-cut-explorer',\r
  title: 'Cluster Cut Explorer',\r
  desc: 'Cluster Cut Explorer — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ClusterCutExplorer',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","cluster-cut-explorer"],\r
}\r
\r
export default function ClusterCutExplorer({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"clusters":[{"id":"A","members":[12,15,14,18,20]},{"id":"B","members":[30,32,35,38,40]},{"id":"C","members":[55,58,60,62,65]}],"cuts":[{"level":1,"groups":6},{"level":2,"groups":4},{"level":3,"groups":3},{"level":4,"groups":2}]}\r
    const data = (customData && customData.clusters && customData.cuts) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const y = d3.scaleBand().domain(data.clusters.map(d => d.id)).range([M.top, H - M.bottom]).padding(0.3)\r
    const x = d3.scaleLinear().domain([0, 70]).range([M.left, W - M.right])\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    data.clusters.forEach((c, i) => {\r
      const cy = y(c.id) + y.bandwidth() / 2\r
      c.members.forEach(m => g.append('circle').attr('cx', x(m)).attr('cy', cy + (Math.random() - 0.5) * y.bandwidth() * 0.6).attr('r', 3).attr('fill', colors[i % colors.length]).attr('opacity', 0.8))\r
    })\r
    const x2 = d3.scaleLinear().domain([1, 4]).range([M.left, W - M.right])\r
    const y2 = d3.scaleLinear().domain([0, 7]).range([H - M.bottom, M.top])\r
    const line = d3.line().x(d => x2(d.level)).y(d => y2(d.groups)).curve(d3.curveMonotoneX)\r
    g.append('path').datum(data.cuts).attr('d', line).attr('fill', 'none').attr('stroke', colors[4]).attr('stroke-width', 1.5).attr('opacity', 0.6)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};