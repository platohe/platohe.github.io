var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'violin-plot',\r
  title: 'Violin Plot',\r
  desc: 'Violin Plot — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ViolinPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","violin-plot"],\r
}\r
\r
export default function ViolinPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Violin plot data\r
    const DEFAULT_DATA = [{"category":"Group A","values":[35.658,45.905,22.376,32.887,42.058,68.429,45.972,22.973,40.01,0.814,58.479,65.051,72.565,55.759,66.649,65.454,56.514,28.453,86.461,36.67,34.671,41.232,57.37,54.956,43.651,31.666,45.396,54.941,45.366,53.364,81.3,28.713,62.003,43.56,49.028,55.35,57.484,80.841,63.901,32.926,31.798,47.091,27.726,47.035,51.268,31.342,68.861,45.06,58.603,17.744]},{"category":"Group B","values":[68.575,62.045,54.848,30.425,38.537,67.893,74.598,67.884,78.538,52.603,55.183,73.55,62.237,39.96,95.174,55.68,54.993,89.022,94.728,81.074,78.15,54.325,35.011,49.687,46.026,55.616,41.814,41.381,44.487,46.664,63.26,47.229,81.531,89.375,65.506,42.382,74.061,48.007,86.053,72.199,51.016,31.219,63.378,33.663,56.468,66.083,74.531,82.437,49.627,74.767]},{"category":"Group C","values":[39.818,49.315,37.797,55.996,38.857,41.97,55.022,29.503,73.843,43.345,47.618,41.086,41.59,67.772,27.426,42.326,46.77,34.13,32.089,30.72,37.272,56.05,43.469,32.098,34.67,69.016,66.974,64.063,29.42,56.238,25.241,38.981,55.639,45.002,48.136,49.441,51.026,67.329,42.715,39.751,57.764,18.6,41.238,37.94,65.07,44.617,53.77,43.257,49.688,26.697]},{"category":"Group D","values":[42.015,40.309,74.377,55.332,36.306,65.671,72.862,74.876,42.222,65.472,66.907,64.02,82.62,51.644,57.296,51.927,73.856,47.169,74.826,71.602,40.968,37.848,40.418,77.324,83.116,66.886,50.646,94.144,46.006,73.015,69.645,50.068,28.057,24.817,53.17,40.528,36.939,62.553,68.547,89.8,29.696,58.824,52.817,49.214,71.394,59.251,62.111,42.498,86.113,43.244]}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 80 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scaleBand()\r
      .domain(data.map(d => d.category))\r
      .range([0, width])\r
      .padding(0.3)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d3.max(d.values))])\r
      .range([height, 0])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']\r
\r
    data.forEach((group, i) => {\r
      const violinX = x(group.category) + x.bandwidth() / 2\r
\r
      // Calculate violin shape using kernel density estimation\r
      const kde = d3.scaleLinear()\r
        .domain(d3.extent(group.values))\r
      \r
      const binCount = 20\r
      const histogram = d3.histogram()\r
        .domain(kde.domain())\r
        .thresholds(binCount - 1)\r
      \r
      const bins = histogram(group.values)\r
      const maxCount = d3.max(bins, d => d.length)\r
\r
      const violinArea = d3.area()\r
        .x((d) => violinX + (d.length / maxCount - 0.5) * (x.bandwidth() / 2))\r
        .y0((d) => y(d.x0))\r
        .y1((d) => y(d.x1))\r
        .curve(d3.curveBasis)\r
\r
      g.append('path')\r
        .datum(bins)\r
        .attr('d', violinArea)\r
        .attr('fill', colors[i])\r
        .attr('opacity', 0.6)\r
        .attr('stroke', colors[i])\r
        .attr('stroke-width', 2)\r
\r
      // Box plot elements\r
      const sorted = [...group.values].sort(d3.ascending)\r
      const q1 = d3.quantile(sorted, 0.25)\r
      const median = d3.quantile(sorted, 0.5)\r
      const q3 = d3.quantile(sorted, 0.75)\r
      const iqr = q3 - q1\r
      const min = Math.max(q1 - 1.5 * iqr, d3.min(sorted))\r
      const max = Math.min(q3 + 1.5 * iqr, d3.max(sorted))\r
\r
      // Whisker line\r
      g.append('line')\r
        .attr('x1', violinX)\r
        .attr('x2', violinX)\r
        .attr('y1', y(min))\r
        .attr('y2', y(max))\r
        .attr('stroke', colors[i])\r
        .attr('stroke-width', 2)\r
\r
      // Box\r
      g.append('rect')\r
        .attr('x', violinX - x.bandwidth() / 4)\r
        .attr('y', y(q3))\r
        .attr('width', x.bandwidth() / 2)\r
        .attr('height', y(q1) - y(q3))\r
        .attr('fill', colors[i])\r
        .attr('opacity', 0.8)\r
\r
      // Median line\r
      g.append('line')\r
        .attr('x1', violinX - x.bandwidth() / 4)\r
        .attr('x2', violinX + x.bandwidth() / 4)\r
        .attr('y1', y(median))\r
        .attr('y2', y(median))\r
        .attr('stroke', 'white')\r
        .attr('stroke-width', 2)\r
    })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Violin Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};