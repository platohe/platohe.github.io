var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
export const meta = {\r
  id: 'vase-plot',\r
  title: 'Vase Plot',\r
  desc: 'Vase Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VasePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","vase-plot"],\r
}\r
\r
export default function VasePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    groups: [\r
      { name: 'Normal', data: d3.range(200).map(() => d3.randomNormal(0, 1)()) },\r
      { name: 'Bimodal', data: d3.range(200).map((i) => (i % 2 === 0 ? d3.randomNormal(-2, 0.5)() : d3.randomNormal(2, 0.5)())) },\r
      { name: 'Skewed', data: d3.range(200).map(() => d3.randomLogNormal(0, 1)()) },\r
      { name: 'Uniform', data: d3.range(200).map(() => d3.randomUniform(-3, 3)()) }\r
    ],\r
    bins: 30\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && customData.groups) ? customData : DEFAULT_DATA\r
    const { groups, bins } = input\r
\r
    const allValues = groups.flatMap(g => g.data)\r
    const xMin = d3.min(allValues) - 0.5\r
    const xMax = d3.max(allValues) + 0.5\r
\r
    const x = d3.scaleLinear().domain([xMin, xMax]).range([M.left, M.left + IW])\r
    const y = d3.scaleBand()\r
      .domain(groups.map(g => g.name))\r
      .range([M.top, M.top + IH])\r
      .padding(0.3)\r
\r
    // Global max density for consistent scaling\r
    const globalMaxDensity = d3.max(groups.map(g => {\r
      const histogram = d3.histogram()\r
        .domain(x.domain())\r
        .thresholds(bins)\r
        (g.data)\r
      return d3.max(histogram, d => d.length) || 0\r
    })) || 1\r
\r
    const g = svg.append('g')\r
\r
    // Grid\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 500))\r
\r
    const maxBarWidth = y.bandwidth() * 0.9\r
\r
    groups.forEach((group, i) => {\r
      const fy = y(group.name) + y.bandwidth() / 2\r
      \r
      // Histogram\r
      const histogram = d3.histogram()\r
        .domain(x.domain())\r
        .thresholds(bins)\r
        (group.data)\r
\r
      const densityScale = d3.scaleLinear()\r
        .domain([0, globalMaxDensity])\r
        .range([0, maxBarWidth / 2])\r
\r
      // Vase shape: histogram mirrored vertically\r
      histogram.forEach(bin => {\r
        const barWidth = densityScale(bin.length)\r
        const binX = x(bin.x0)\r
        const binWidth = Math.max(1, x(bin.x1) - x(bin.x1))\r
\r
        // Upper half (positive)\r
        g.append('rect')\r
          .attr('x', binX)\r
          .attr('y', fy - barWidth)\r
          .attr('width', binWidth)\r
          .attr('height', barWidth)\r
          .attr('fill', colors[i % colors.length])\r
          .attr('fill-opacity', 0.7)\r
          .attr('stroke', colors[i % colors.length])\r
          .attr('stroke-width', 0.5)\r
\r
        // Lower half (negative) - mirrored\r
        g.append('rect')\r
          .attr('x', binX)\r
          .attr('y', fy)\r
          .attr('width', binWidth)\r
          .attr('height', barWidth)\r
          .attr('fill', colors[i % colors.length])\r
          .attr('fill-opacity', 0.7)\r
          .attr('stroke', colors[i % colors.length])\r
          .attr('stroke-width', 0.5)\r
      })\r
\r
      // Central line\r
      g.append('line')\r
        .attr('x1', M.left)\r
        .attr('x2', M.left + IW)\r
        .attr('y1', fy)\r
        .attr('y2', fy)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 0.5)\r
        .attr('stroke-dasharray', '2,2')\r
\r
      // KDE overlay (smooth curve)\r
      const kdePoints = d3.range(0, bins).map(j => {\r
        const xPos = x.invert(M.left + (j / bins) * IW)\r
        // Simple KDE approximation using histogram\r
        const bin = histogram.find(b => xPos >= b.x0 && xPos < b.x1)\r
        return [xPos, bin ? bin.length / globalMaxDensity : 0]\r
      })\r
\r
      const vaseAreaUpper = d3.area()\r
        .curve(d3.curveBasis)\r
        .x(d => x(d[0]))\r
        .y0(fy)\r
        .y1(d => fy - densityScale(d[1]))\r
\r
      const vaseAreaLower = d3.area()\r
        .curve(d3.curveBasis)\r
        .x(d => x(d[0]))\r
        .y0(fy)\r
        .y1(d => fy + densityScale(d[1]))\r
\r
      g.append('path')\r
        .datum(kdePoints)\r
        .attr('d', vaseAreaUpper)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('fill-opacity', 0.15)\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-linecap', 'round')\r
        .attr('fill', 'none')\r
\r
      g.append('path')\r
        .datum(kdePoints)\r
        .attr('d', vaseAreaLower)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('fill-opacity', 0.15)\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-linecap', 'round')\r
        .attr('fill', 'none')\r
\r
      // Mean and median markers\r
      const mean = d3.mean(group.data)\r
      const median = d3.median(group.data)\r
      \r
      g.append('circle')\r
        .attr('cx', x(mean))\r
        .attr('cy', fy)\r
        .attr('r', 4)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('stroke', 'white')\r
        .attr('stroke-width', 1.5)\r
      \r
      g.append('line')\r
        .attr('x1', x(median))\r
        .attr('x2', x(median))\r
        .attr('y1', fy - maxBarWidth / 2)\r
        .attr('y2', fy + maxBarWidth / 2)\r
        .attr('stroke', 'white')\r
        .attr('stroke-width', 2)\r
    })\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 180}, \${M.top})\`)\r
\r
    legend.append('text')\r
      .attr('x', 0).attr('y', -5)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .attr('font-weight', 500)\r
      .text('Histogram bins')\r
\r
    legend.append('rect')\r
      .attr('x', 0).attr('y', 0)\r
      .attr('width', 14).attr('height', 8)\r
      .attr('fill', '#6366f1')\r
      .attr('fill-opacity', 0.7)\r
      .attr('stroke', '#6366f1').attr('stroke-width', 0.5)\r
    legend.append('text')\r
      .attr('x', 18).attr('y', 7)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Binned counts')\r
\r
    legend.append('path')\r
      .attr('d', 'M0,20 L14,20')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-linecap', 'round')\r
    legend.append('text')\r
      .attr('x', 18).attr('y', 24)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('KDE curve')\r
\r
    legend.append('circle')\r
      .attr('cx', 7).attr('cy', 40)\r
      .attr('r', 4)\r
      .attr('fill', '#6366f1')\r
      .attr('stroke', 'white').attr('stroke-width', 1.5)\r
    legend.append('text')\r
      .attr('x', 18).attr('y', 44)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Mean')\r
\r
    legend.append('line')\r
      .attr('x1', 0).attr('x2', 14)\r
      .attr('y1', 55).attr('y2', 55)\r
      .attr('stroke', 'white').attr('stroke-width', 2)\r
    legend.append('text')\r
      .attr('x', 18).attr('y', 59)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Median')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Vase Plot — Mirrored Histogram + KDE')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Symmetric violin-like shape')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};