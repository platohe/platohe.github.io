var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'joyplot',\r
  title: 'Joyplot',\r
  desc: 'Joyplot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Joyplot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","joyplot"],\r
}\r
\r
export default function Joyplot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Joyplot (ridgeline plot) data\r
    const DEFAULT_DATA = [{"category":"1990","values":[62.022,68.782,85.6,88.639,82.654,90.394,82.743,84.187,81.028,63.68,49.281,52.603,42.211,28.27,23.976,31.247,39.332,44.866,41.694,60.919]},{"category":"1995","values":[65.933,57.732,81.451,75.24,85.692,81.384,81.468,89.897,74.263,50.617,42.655,48.523,30.705,32.71,18.023,22.685,17.469,26.048,49.135,61.673]},{"category":"2000","values":[59.903,76.094,74.649,82.109,94.071,97.059,87.892,77.161,72.116,64.388,51.73,55.665,49.695,45.636,48.583,32.786,53.541,49.168,66.861,58.999]},{"category":"2005","values":[61.664,70.053,83.958,92.47,98.337,103.356,88.443,92.487,87.741,68.407,64.882,47.656,45.101,44.458,31.84,46.167,44.042,56.396,58.127,70.181]},{"category":"2010","values":[78.424,91.45,90.441,105.065,96.819,101.152,109.264,101.838,103.996,95.077,76.986,73.605,62.262,53.942,67.439,58.654,73.382,81.055,66.753,82.887]}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && Array.isArray(customData[0]?.values)) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 60 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, 19])\r
      .range([0, width])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d3.max(d.values))])\r
      .range([height, 0])\r
\r
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach((series, i) => {\r
      const offset = i * 40\r
      const seriesHeight = height - offset\r
\r
      const area = d3.area()\r
        .x((d, j) => x(j))\r
        .y0(seriesHeight)\r
        .y1((d) => seriesHeight - y(d))\r
        .curve(d3.curveBasis)\r
\r
      g.append('path')\r
        .datum(series.values)\r
        .attr('d', area)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('opacity', 0.7)\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 1)\r
\r
      // Category label\r
      g.append('text')\r
        .attr('x', -10)\r
        .attr('y', seriesHeight + 15)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 500)\r
        .text(series.category)\r
    })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Joyplot (Ridgeline Plot)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};