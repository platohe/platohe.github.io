var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'normalized-stacked-area',\r
  title: 'Normalized Stacked Area',\r
  desc: 'Normalized Stacked Area — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NormalizedStackedArea',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","normalized-stacked-area"],\r
}\r
\r
export default function NormalizedStackedArea({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Multi-series time series data for normalized stacked area\r
    const DEFAULT_DATA = [{"date":"Jan","seriesA":30,"seriesB":45,"seriesC":25},{"date":"Feb","seriesA":35,"seriesB":50,"seriesC":30},{"date":"Mar","seriesA":45,"seriesB":55,"seriesC":35},{"date":"Apr","seriesA":40,"seriesB":60,"seriesC":40},{"date":"May","seriesA":55,"seriesB":65,"seriesC":45},{"date":"Jun","seriesA":60,"seriesB":70,"seriesC":50},{"date":"Jul","seriesA":65,"seriesB":75,"seriesC":55},{"date":"Aug","seriesA":70,"seriesB":80,"seriesC":60}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 120, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const series = ['seriesA', 'seriesB', 'seriesC']\r
    const seriesNames = ['Product A', 'Product B', 'Product C']\r
    const colors = ['#6366f1', '#f59e0b', '#10b981']\r
\r
    const x = d3.scalePoint()\r
      .domain(data.map(d => d.date))\r
      .range([0, width])\r
\r
    // Normalize data to percentages\r
    const normalizedData = data.map(d => {\r
      const total = d3.sum(series, s => d[s])\r
      return {\r
        date: d.date,\r
        ...series.reduce((acc, s) => {\r
          acc[s] = (d[s] / total) * 100\r
          return acc\r
        }, {})\r
      }\r
    })\r
\r
    // Stack the normalized data\r
    const stack = d3.stack()\r
      .keys(series)\r
      .offset(d3.stackOffsetExpand)\r
\r
    const stackedData = stack(normalizedData)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, 1])\r
      .range([height, 0])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Area generator\r
    const area = d3.area()\r
      .x(d => x(d.data.date))\r
      .y0(d => y(d[0]))\r
      .y1(d => y(d[1]))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    // Draw stacked areas\r
    stackedData.forEach((layer, i) => {\r
      g.append('path')\r
        .datum(layer)\r
        .attr('d', area)\r
        .attr('fill', colors[i])\r
        .attr('opacity', 0.8)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 1)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.8)\r
        })\r
    })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis with percentage labels\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => \`\${Math.round(d * 100)}%\`).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', 'translate(280, 30)')\r
\r
    seriesNames.forEach((name, i) => {\r
      const legendItem = legend.append('g')\r
        .attr('transform', \`translate(0, \${i * 20})\`)\r
\r
      legendItem.append('rect')\r
        .attr('width', 16)\r
        .attr('height', 16)\r
        .attr('fill', colors[i])\r
        .attr('rx', 2)\r
\r
      legendItem.append('text')\r
        .attr('x', 22)\r
        .attr('y', 12)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(name)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Normalized Stacked Area Chart (100%)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};