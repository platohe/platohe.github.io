var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'bollinger-bands',\r
  title: 'Bollinger Bands',\r
  desc: 'Bollinger Bands — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BollingerBands',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bollinger-bands"],\r
}\r
\r
export default function BollingerBands({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"day":1,"price":100},{"day":2,"price":102},{"day":3,"price":101},{"day":4,"price":105},{"day":5,"price":108},{"day":6,"price":106},{"day":7,"price":112},{"day":8,"price":115},{"day":9,"price":110}]\r
\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([1, data.length]).range([0, 310])\r
    const prices = data.map(d => d.price || d.y || 100)\r
    const minP = d3.min(prices) - 5\r
    const maxP = d3.max(prices) + 5\r
    const y = d3.scaleLinear().domain([minP, maxP]).range([230, 0])\r
\r
    const g = svg.append('g').attr('transform', 'translate(50,20)')\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((group) => group.select('.domain').remove())\r
      .call((group) => group.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((group) => group.selectAll('text').remove())\r
      .lower()\r
\r
    const line = d3.line().x((d, i) => x(i + 1)).y((d) => y(d.price || d.y || 100)).curve(d3.curveCatmullRom.alpha(0.5))\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.5)\r
\r
    data.forEach((d, i) => {\r
      g.append('circle')\r
        .attr('cx', x(i + 1))\r
        .attr('cy', y(d.price || d.y || 100))\r
        .attr('r', 4)\r
        .attr('fill', '#6366f1')\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1.5)\r
    })\r
\r
    g.append('g')\r
      .attr('transform', 'translate(0,230)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((group) => group.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((group) => group.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((group) => group.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((group) => group.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};