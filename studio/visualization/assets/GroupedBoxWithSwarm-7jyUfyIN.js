var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'grouped-box-with-swarm',\r
  title: 'Grouped Box With Swarm',\r
  desc: 'Grouped Box With Swarm — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedBoxWithSwarm',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","grouped-box-with-swarm"],\r
}\r
\r
export default function GroupedBoxWithSwarm({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"group":"Setosa","values":[12,15,14,18,22,24,25,28,30,32,35,38,40,42,45,48,50,55,58,62]},{"group":"Versicolor","values":[20,22,25,28,30,32,35,38,40,42,44,46,48,50,52,54,56,58,60,64]},{"group":"Virginica","values":[30,32,35,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,72]},{"group":"Hybrid","values":[18,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,75]}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const all = data.flatMap((d) => d.values)\r
    const x = d3.scaleLinear().domain([d3.min(all) - 4, d3.max(all) + 4]).range([M.left, W - M.right])\r
    const y = d3.scaleBand().domain(data.map((d) => d.group)).range([M.top, H - M.bottom]).padding(0.3)\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8)).call((s) => s.select('.domain').attr('stroke', 'var(--border)')).call((s) => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).tickSize(0).tickPadding(8)).call((s) => s.select('.domain').attr('stroke', 'var(--border)')).call((s) => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600))\r
    data.forEach((grp, i) => {\r
      const col = colors[i % colors.length]\r
      const cy = y(grp.group) + y.bandwidth() / 2\r
      const sorted = [...grp.values].sort(d3.ascending)\r
      const q1 = d3.quantile(sorted, 0.25)\r
      const q3 = d3.quantile(sorted, 0.75)\r
      const median = d3.quantile(sorted, 0.5)\r
      const min = d3.min(sorted)\r
      const max = d3.max(sorted)\r
      // box\r
      g.append('rect').attr('x', x(q1)).attr('y', cy - y.bandwidth() * 0.22).attr('width', Math.max(1, x(q3) - x(q1))).attr('height', y.bandwidth() * 0.44).attr('fill', col).attr('opacity', 0.85).attr('rx', 2)\r
      g.append('line').attr('x1', x(median)).attr('x2', x(median)).attr('y1', cy - y.bandwidth() * 0.22).attr('y2', cy + y.bandwidth() * 0.22).attr('stroke', '#fff').attr('stroke-width', 1.8)\r
      g.append('line').attr('x1', x(min)).attr('x2', x(q1)).attr('y1', cy).attr('y2', cy).attr('stroke', col).attr('stroke-width', 1.4)\r
      g.append('line').attr('x1', x(q3)).attr('x2', x(max)).attr('y1', cy).attr('y2', cy).attr('stroke', col).attr('stroke-width', 1.4)\r
      grp.values.forEach((v) => {\r
        const jy = (Math.random() - 0.5) * y.bandwidth() * 0.7\r
        g.append('circle').attr('cx', x(v)).attr('cy', cy + jy).attr('r', 2.6).attr('fill', col).attr('opacity', 0.72).attr('stroke', '#fff').attr('stroke-width', 0.6)\r
      })\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};