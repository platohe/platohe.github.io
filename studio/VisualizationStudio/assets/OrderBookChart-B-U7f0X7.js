var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'order-book-chart',\r
  title: 'Order Book Chart',\r
  desc: 'Order Book Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OrderBookChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","order-book-chart"],\r
}\r
\r
export default function OrderBookChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"bids":[[100.5,12],[100.4,18],[100.3,25],[100.2,15],[100.1,30],[100,22],[99.9,28],[99.8,35]],"asks":[[100.6,10],[100.7,16],[100.8,20],[100.9,14],[101,26],[101.1,19],[101.2,24],[101.3,30]]}\r
    const book = (customData && Array.isArray(customData.bids) && Array.isArray(customData.asks)) ? customData : DEFAULT_DATA\r
\r
    const bids = book.bids.sort((a, b) => b[0] - a[0])\r
    const asks = book.asks.sort((a, b) => a[0] - b[0])\r
    const all = [...bids, ...asks]\r
    const priceExtent = d3.extent(all, (d) => d[0])\r
    const maxSize = d3.max(all, (d) => d[1])\r
\r
    const x = d3.scaleLinear().domain([0, maxSize * 1.1]).range([0, IW / 2])\r
    const y = d3.scaleLinear().domain(priceExtent).range([H - M.bottom, M.top])\r
    const midX = W / 2\r
\r
    bids.forEach(([price, size]) => {\r
      const yc = y(price)\r
      svg.append('rect')\r
        .attr('x', midX).attr('y', yc - 4)\r
        .attr('width', x(size)).attr('height', 8)\r
        .attr('fill', '#10b981').attr('opacity', 0.65).attr('rx', 1)\r
      svg.append('text')\r
        .attr('x', midX + 4).attr('y', yc + 3)\r
        .attr('fill', '#10b981').attr('font-size', '9px').attr('font-family', 'ui-monospace, monospace')\r
        .text(price.toFixed(1))\r
    })\r
\r
    asks.forEach(([price, size]) => {\r
      const yc = y(price)\r
      svg.append('rect')\r
        .attr('x', midX - x(size)).attr('y', yc - 4)\r
        .attr('width', x(size)).attr('height', 8)\r
        .attr('fill', '#ef4444').attr('opacity', 0.65).attr('rx', 1)\r
      svg.append('text')\r
        .attr('x', midX - 4).attr('y', yc + 3)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', '#ef4444').attr('font-size', '9px').attr('font-family', 'ui-monospace, monospace')\r
        .text(price.toFixed(1))\r
    })\r
\r
    svg.append('line')\r
      .attr('x1', midX).attr('y1', M.top).attr('x2', midX).attr('y2', H - M.bottom)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${midX},\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(4).tickSize(0).tickPadding(6))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};