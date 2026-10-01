var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'candlestick',\r
  title: 'Candlestick',\r
  desc: 'Candlestick — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'Candlestick',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["lines","candlestick"],\r
}\r
\r
export default function Candlestick({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"date":"Jan 1","open":150,"high":158,"low":147,"close":155},{"date":"Jan 2","open":155,"high":162,"low":152,"close":160},{"date":"Jan 3","open":160,"high":161,"low":150,"close":152},{"date":"Jan 4","open":152,"high":159,"low":151,"close":157},{"date":"Jan 5","open":157,"high":165,"low":155,"close":163}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleBand().domain(data.map((d) => d.date)).range([40, 360]).padding(0.4)\r
    const minLow = d3.min(data, (d) => d.low) || 100\r
    const maxHigh = d3.max(data, (d) => d.high) || 200\r
    const y = d3.scaleLinear().domain([minLow - 5, maxHigh + 5]).range([250, 20])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Candlesticks\r
    data.forEach((d) => {\r
      const isUp = d.close >= d.open\r
      const candleColor = isUp ? '#10b981' : '#ef4444'\r
      const cx = x(d.date) + 50 + x.bandwidth() / 2\r
\r
      // Wick\r
      svg.append('line')\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(d.high) + 20).attr('y2', y(d.low) + 20)\r
        .attr('stroke', candleColor).attr('stroke-width', 1.5)\r
\r
      // Body\r
      const topY = y(Math.max(d.open, d.close)) + 20\r
      const botY = y(Math.min(d.open, d.close)) + 20\r
      const bodyH = Math.max(2, botY - topY)\r
\r
      svg.append('rect')\r
        .attr('x', x(d.date) + 50)\r
        .attr('y', topY)\r
        .attr('width', x.bandwidth())\r
        .attr('height', bodyH)\r
        .attr('fill', candleColor)\r
        .attr('rx', 1)\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', 'translate(50,270)')\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};