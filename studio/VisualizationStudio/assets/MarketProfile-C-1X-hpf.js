var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'market-profile',\r
  title: 'Market Profile',\r
  desc: 'Market Profile — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MarketProfile',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","market-profile"],\r
}\r
\r
export default function MarketProfile({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"price":85.685,"volume":119,"time":"Day 38"},{"price":86.202,"volume":104,"time":"Day 16"},{"price":87.496,"volume":100,"time":"Day 17"},{"price":87.71,"volume":64,"time":"Day 18"},{"price":87.888,"volume":102,"time":"Day 37"},{"price":88.596,"volume":25,"time":"Day 19"},{"price":89.024,"volume":111,"time":"Day 39"},{"price":89.578,"volume":22,"time":"Day 15"},{"price":90.337,"volume":37,"time":"Day 36"},{"price":90.612,"volume":98,"time":"Day 14"},{"price":90.74,"volume":77,"time":"Day 40"},{"price":93.525,"volume":91,"time":"Day 34"},{"price":93.636,"volume":79,"time":"Day 41"},{"price":94.176,"volume":47,"time":"Day 35"},{"price":94.523,"volume":79,"time":"Day 20"},{"price":94.697,"volume":26,"time":"Day 13"},{"price":97.035,"volume":84,"time":"Day 21"},{"price":97.666,"volume":92,"time":"Day 42"},{"price":100.445,"volume":109,"time":"Day 33"},{"price":100.595,"volume":23,"time":"Day 12"},{"price":101.3,"volume":50,"time":"Day 22"},{"price":101.98,"volume":64,"time":"Day 43"},{"price":103.006,"volume":64,"time":"Day 1"},{"price":103.669,"volume":68,"time":"Day 32"},{"price":106.303,"volume":25,"time":"Day 11"},{"price":106.43,"volume":67,"time":"Day 10"},{"price":106.736,"volume":21,"time":"Day 31"},{"price":108.366,"volume":105,"time":"Day 23"},{"price":108.695,"volume":86,"time":"Day 2"},{"price":109.128,"volume":89,"time":"Day 44"},{"price":109.344,"volume":72,"time":"Day 3"},{"price":111.217,"volume":40,"time":"Day 24"},{"price":113.116,"volume":82,"time":"Day 4"},{"price":113.154,"volume":67,"time":"Day 50"},{"price":113.326,"volume":49,"time":"Day 25"},{"price":113.565,"volume":81,"time":"Day 9"},{"price":113.851,"volume":109,"time":"Day 45"},{"price":113.934,"volume":70,"time":"Day 8"},{"price":114.216,"volume":74,"time":"Day 46"},{"price":114.443,"volume":85,"time":"Day 26"},{"price":114.656,"volume":33,"time":"Day 30"},{"price":115.635,"volume":30,"time":"Day 47"},{"price":116.212,"volume":108,"time":"Day 6"},{"price":117.538,"volume":63,"time":"Day 29"},{"price":118.308,"volume":67,"time":"Day 5"},{"price":118.336,"volume":50,"time":"Day 7"},{"price":118.382,"volume":89,"time":"Day 27"},{"price":118.415,"volume":110,"time":"Day 49"},{"price":118.473,"volume":51,"time":"Day 48"},{"price":119.188,"volume":28,"time":"Day 28"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    // Bin prices\r
    const priceExtent = d3.extent(data, d => d.price)\r
    const binCount = 20\r
    const histogram = d3.histogram()\r
      .domain(priceExtent)\r
      .thresholds(binCount)(data.map(d => d.price))\r
\r
    const x = d3.scaleLinear()\r
      .domain(priceExtent)\r
      .range([0, IW])\r
\r
    const maxVol = d3.max(histogram, d => d.length) || 1\r
    const y = d3.scaleLinear()\r
      .domain([0, maxVol])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Draw horizontal bars (Market Profile style)\r
    histogram.forEach((bin, i) => {\r
      const barHeight = IH / binCount - 1\r
      const barY = y(bin.length)\r
\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(bin.x0) + 2)\r
        .attr('y', M.top + IH - (i + 1) * (IH / binCount) + 1)\r
        .attr('width', Math.max(0, x(bin.x1) - x(bin.x0) - 4))\r
        .attr('height', Math.max(0, IH / binCount - 2))\r
        .attr('fill', colors[0])\r
        .attr('opacity', 0.3 + (bin.length / maxVol) * 0.7)\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 0.5)\r
    })\r
\r
    // Value Area (70% of volume)\r
    let cumulative = 0\r
    const total = d3.sum(histogram, d => d.length)\r
    const valueAreaStart = total * 0.15\r
    const valueAreaEnd = total * 0.85\r
\r
    let acc = 0\r
    let vaStartIdx = 0, vaEndIdx = 0\r
    histogram.forEach((bin, i) => {\r
      acc += bin.length\r
      if (acc >= valueAreaStart && vaStartIdx === 0) vaStartIdx = i\r
      if (acc >= valueAreaEnd) { vaEndIdx = i + 1; }\r
    })\r
\r
    // Highlight value area\r
    const vaX0 = x(histogram[vaStartIdx]?.x0 ?? priceExtent[0])\r
    const vaX1 = x(histogram[vaEndIdx]?.x0 ?? priceExtent[1])\r
    svg.append('rect')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x', vaX0)\r
      .attr('y', 0)\r
      .attr('width', Math.max(0, vaX1 - vaX0))\r
      .attr('height', IH)\r
      .attr('fill', colors[2]).attr('opacity', 0.1)\r
\r
    // POC (Point of Control)\r
    const pocIdx = histogram.findIndex(d => d.length === maxVol)\r
    const pocPrice = (histogram[pocIdx].x0 + histogram[pocIdx].x1) / 2\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(pocPrice)).attr('x2', x(pocPrice))\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', colors[1]).attr('stroke-width', 2).attr('stroke-dasharray', '5,3')\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text('Market Profile - Price Distribution')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 130},\${M.top + IH + 15})\`)\r
    const legends = [\r
      { color: colors[1], dash: '5,3', label: 'POC' },\r
      { color: colors[2], opacity: 0.2, label: 'Value Area' },\r
    ]\r
    legends.forEach((l, i) => {\r
      const yOff = i * 16\r
      if (l.dash) {\r
        lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', yOff + 8).attr('y2', yOff + 8)\r
          .attr('stroke', l.color).attr('stroke-width', 2).attr('stroke-dasharray', l.dash)\r
      } else {\r
        lg.append('rect').attr('x', 0).attr('y', yOff).attr('width', 20).attr('height', 16)\r
          .attr('fill', l.color).attr('opacity', l.opacity)\r
      }\r
      lg.append('text').attr('x', 24).attr('y', yOff + 12).text(l.label)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};