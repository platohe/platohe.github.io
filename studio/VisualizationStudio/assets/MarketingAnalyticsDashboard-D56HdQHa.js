var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// MarketingAnalyticsDashboard: KPI tiles + mini charts composition.\r
export const meta = {\r
  id: 'marketing-analytics-dashboard',\r
  title: 'Marketing Analytics Dashboard',\r
  desc: 'Marketing Analytics Dashboard — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MarketingAnalyticsDashboard',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","marketing-analytics-dashboard"],\r
}\r
\r
export default function MarketingAnalyticsDashboard({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    g.append('rect').attr('x', 8).attr('y', 8).attr('width', 384).attr('height', 284).attr('rx', 10)\r
      .attr('fill', 'none').attr('stroke', 'var(--border)')\r
    g.append('text').attr('x', 24).attr('y', 34).attr('font-size', '11px').attr('font-weight', 700)\r
      .attr('fill', 'var(--text-secondary)').text('MarketingAnalytics · This Week')\r
    const kpis = [["Leads","8.4k",12],["CTR","2.1%",-3],["CAC","$41",6]]\r
    kpis.forEach((k, i) => {\r
      const x = 24 + i * 122\r
      g.append('rect').attr('x', x).attr('y', 48).attr('width', 112).attr('height', 84).attr('rx', 8)\r
        .attr('fill', 'var(--border)').attr('fill-opacity', 0.14)\r
      g.append('text').attr('x', x + 10).attr('y', 70).attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(k[0])\r
      g.append('text').attr('x', x + 10).attr('y', 92).attr('font-size', '15px').attr('font-weight', 700).attr('fill', 'var(--text-secondary)').text(k[1])\r
      const up = k[2] >= 0\r
      g.append('text').attr('x', x + 10).attr('y', 112).attr('font-size', '8px').attr('font-weight', 700)\r
        .attr('fill', up ? '#10b981' : '#ef4444').text((up ? '▲ +' : '▼ ') + k[2] + '%')\r
      const sp = [30,38,35,47,52,49]\r
      const sx = d3.scaleLinear().domain([0, sp.length - 1]).range([x + 10, x + 102])\r
      const sy = d3.scaleLinear().domain(d3.extent(sp)).range([126, 106])\r
      g.append('path').attr('d', d3.line().x((j) => sx(j)).y((j) => sy(sp[j]))(d3.range(sp.length)))\r
        .attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.6)\r
    })\r
    const bars = [["Email",28],["Social",41],["Paid",31]]\r
    let by = 178\r
    bars.forEach((b, i) => {\r
      g.append('text').attr('x', 24).attr('y', by + 9).attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(b[0])\r
      g.append('rect').attr('x', 70).attr('y', by).attr('width', (b[1] / d3.sum(bars, bb => bb[1])) * 240).attr('height', 12).attr('rx', 3)\r
        .attr('fill', colors[i % colors.length]).attr('fill-opacity', 0.85)\r
      g.append('text').attr('x', 320).attr('y', by + 9).attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(b[1] + '%')\r
      by += 22\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};