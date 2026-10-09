var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'line-chart-tooltip',\r
  title: 'Line Chart Tooltip',\r
  desc: 'Line Chart Tooltip — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineChartTooltip',\r
  complexity: 'beginner',\r
  interactivity: ["hover"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-chart-tooltip"],\r
}\r
\r
export default function LineChartTooltip({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":25,"label":"Jan"},{"x":5,"y":35,"label":"Feb"},{"x":10,"y":28,"label":"Mar"},{"x":15,"y":55,"label":"Apr"},{"x":20,"y":48,"label":"May"},{"x":25,"y":70,"label":"Jun"},{"x":30,"y":65,"label":"Jul"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const maxX = d3.max(data, (d) => d.x) || 10\r
    const maxY = (d3.max(data, (d) => d.y) || 10) * 1.1\r
\r
    const x = d3.scaleLinear().domain([0, maxX]).range([0, 310])\r
    const y = d3.scaleLinear().domain([0, maxY]).range([230, 0])\r
\r
    const g = svg.append('g').attr('transform', 'translate(50,20)')\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((group) => group.select('.domain').remove())\r
      .call((group) => group.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((group) => group.selectAll('text').remove())\r
      .lower()\r
\r
    // Line\r
    const line = d3.line()\r
      .x((d) => x(d.x))\r
      .y((d) => y(d.y))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.5)\r
\r
    // Area fill\r
    const area = d3.area()\r
      .x((d) => x(d.x))\r
      .y0(230)\r
      .y1((d) => y(d.y))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', area)\r
      .attr('fill', 'url(#lineGrad)')\r
      .attr('opacity', 0.3)\r
\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'lineGrad').attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#6366f1').attr('stop-opacity', 0.6)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#6366f1').attr('stop-opacity', 0)\r
\r
    // Tooltip group (hidden by default)\r
    const tooltip = g.append('g')\r
      .attr('class', 'tooltip')\r
      .style('opacity', 0)\r
\r
    const tooltipRect = tooltip.append('rect')\r
      .attr('rx', 4)\r
      .attr('fill', 'rgba(0, 0, 0, 0.8)')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 1)\r
\r
    const tooltipText = tooltip.append('text')\r
      .attr('fill', 'white')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 'bold')\r
\r
    const tooltipValue = tooltip.append('text')\r
      .attr('fill', '#fbbf24')\r
      .attr('font-size', '10px')\r
      .attr('dy', '1.2em')\r
\r
    // Interactive dots with tooltip\r
    g.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.x))\r
      .attr('cy', (d) => y(d.y))\r
      .attr('r', 6)\r
      .attr('fill', '#6366f1')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function(event, d) {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 10)\r
          .attr('fill', '#4f46e5')\r
\r
        // Show tooltip\r
        const cx = x(d.x)\r
        const cy = y(d.y)\r
        const label = d.label || \`X: \${d.x}\`\r
        const value = \`Value: \${d.y}\`\r
\r
        tooltipText.text(label)\r
        tooltipValue.text(value)\r
\r
        // Get text dimensions\r
        const textNode = tooltipText.node()\r
        const valueNode = tooltipValue.node()\r
        const textWidth = Math.max(textNode.getBBox().width, valueNode.getBBox().width) + 16\r
        const textHeight = 32\r
\r
        tooltipRect\r
          .attr('width', textWidth)\r
          .attr('height', textHeight)\r
          .attr('x', cx - textWidth / 2)\r
          .attr('y', cy - textHeight - 15)\r
\r
        tooltipText\r
          .attr('x', cx)\r
          .attr('y', cy - textHeight - 5)\r
          .attr('text-anchor', 'middle')\r
\r
        tooltipValue\r
          .attr('x', cx)\r
          .attr('text-anchor', 'middle')\r
\r
        tooltip.transition()\r
          .duration(200)\r
          .style('opacity', 1)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 6)\r
          .attr('fill', '#6366f1')\r
\r
        tooltip.transition()\r
          .duration(200)\r
          .style('opacity', 0)\r
      })\r
\r
    // Axes\r
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
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};