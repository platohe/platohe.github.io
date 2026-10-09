var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'grouped-dot-strip-chart',\r
  title: 'Grouped Dot Strip Chart',\r
  desc: 'Grouped Dot Strip Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedDotStripChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","grouped-dot-strip-chart"],\r
}\r
\r
export default function GroupedDotStripChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"group":"Control","values":[14,18,22,25,29,31,35,38,42,45,52,58,64,70,75,80]},{"group":"Treatment A","values":[25,32,38,44,49,53,58,62,69,74,80,85,92,98,105,110]},{"group":"Treatment B","values":[5,12,18,22,28,32,38,45,50,55,60,65,70,75,82,90]}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const all = data.flatMap((d) => d.values)\r
    const x = d3.scaleLinear().domain([d3.min(all) - 6, d3.max(all) + 6]).range([M.left, W - M.right])\r
    const y = d3.scaleBand().domain(data.map((d) => d.group)).range([M.top, H - M.bottom]).padding(0.32)\r
    const g = svg.append('g')\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(7).tickSize(-IH).tickPadding(8))\r
      .call((s) => s.select('.domain').remove())\r
      .call((s) => s.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
      .call((s) => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
      .lower()\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call((s) => s.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((s) => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600))\r
\r
    data.forEach((grp, i) => {\r
      const col = colors[i % colors.length]\r
      const cy = y(grp.group) + y.bandwidth() / 2\r
      const sorted = [...grp.values].sort(d3.ascending)\r
      const q1 = d3.quantile(sorted, 0.25)\r
      const q3 = d3.quantile(sorted, 0.75)\r
      const median = d3.quantile(sorted, 0.5)\r
      const mean = d3.mean(sorted)\r
\r
      // IQR line\r
      g.append('line')\r
        .attr('x1', x(q1)).attr('x2', x(q3))\r
        .attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', col).attr('stroke-width', 8).attr('opacity', 0.18).attr('stroke-linecap', 'round')\r
      // median tick\r
      g.append('line')\r
        .attr('x1', x(median)).attr('x2', x(median))\r
        .attr('y1', cy - y.bandwidth() * 0.32).attr('y2', cy + y.bandwidth() * 0.32)\r
        .attr('stroke', col).attr('stroke-width', 2)\r
      // mean diamond\r
      const d = 5\r
      g.append('path')\r
        .attr('d', \`M \${x(mean)} \${cy - d} L \${x(mean) + d} \${cy} L \${x(mean)} \${cy + d} L \${x(mean) - d} \${cy} Z\`)\r
        .attr('fill', '#fff').attr('stroke', col).attr('stroke-width', 1.5)\r
      // jittered dots\r
      grp.values.forEach((v) => {\r
        const jy = (Math.random() - 0.5) * y.bandwidth() * 0.55\r
        g.append('circle')\r
          .attr('cx', x(v)).attr('cy', cy + jy)\r
          .attr('r', 3).attr('fill', col).attr('opacity', 0.82).attr('stroke', '#fff').attr('stroke-width', 0.7)\r
      })\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};