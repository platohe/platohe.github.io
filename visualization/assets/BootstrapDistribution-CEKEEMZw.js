var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bootstrap-distribution',\r
  title: 'Bootstrap Distribution',\r
  desc: 'Bootstrap Distribution — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BootstrapDistribution',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bootstrap-distribution"],\r
}\r
\r
export default function BootstrapDistribution({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"Sample A","values":[52.022,48.966,57.049,53.395,43.496,50.532,45.465,52.495,57.309,49.446,44.998,57.641,54.915,46.14,43.945,50.015,53.732,52.212,40.077,49.416,56.747,41.024,51.846,40.631,45.339,41.236,43.714,55.671,50.607,40.542,43.46,56.854,49.755,56.18,46.389,48.998,40.749,41.028,51.132,51.935,44.903,52.914,44.19,46.073,54.772,57.174,50.16,44.084,45.684,45.86]},{"group":"Sample B","values":[56.12,64.898,65.212,65.396,68.918,56.32,69.156,61.467,69.134,57.059,56.664,55.238,60.407,62.226,64.179,68.493,56.164,65.794,69.023,59.174,65.599,57.694,62.805,67.328,56.809,69.935,63.442,68.742,61.51,63.677,60.054,63.944,59.844,65.941,59.428,61.746,67.647,65.426,69.91,68.353,61.478,63.178,59.439,56.513,65.451,59.7,66.789,68.572,56.405,62.131]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const nBootstrap = 1000\r
    const bootstrappedMeans = data.map(group => {\r
      const means = []\r
      for (let i = 0; i < nBootstrap; i++) {\r
        const sample = Array.from({ length: group.values.length }, () =>\r
          group.values[Math.floor(Math.random() * group.values.length)]\r
        )\r
        means.push(d3.mean(sample))\r
      }\r
      return { group: group.group, means: means.sort(d3.ascending) }\r
    })\r
\r
    const allMeans = bootstrappedMeans.flatMap(d => d.means)\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(allMeans))\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, 80])\r
      .range([IH, 0])\r
\r
    // Histogram for each bootstrap distribution\r
    const binCount = 30\r
    bootstrappedMeans.forEach((d, i) => {\r
      const histogram = d3.histogram()\r
        .domain(x.domain())\r
        .thresholds(binCount)(d.means)\r
\r
      const binWidth = IW / binCount\r
      const maxCount = d3.max(histogram, h => h.length)\r
\r
      svg.append('g')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .selectAll('rect')\r
        .data(histogram)\r
        .join('rect')\r
        .attr('x', (h, j) => j * binWidth + 1)\r
        .attr('y', h => y(h.length / maxCount * IH))\r
        .attr('width', binWidth - 2)\r
        .attr('height', d => IH - y(d.length / maxCount * IH))\r
        .attr('fill', colors[i % colors.length])\r
        .attr('opacity', 0.6)\r
    })\r
\r
    // Density curves\r
    bootstrappedMeans.forEach((d, i) => {\r
      // Manual gaussian KDE (d3 v7 has no d3.kde)\r
      const bw = 2\r
      const gauss = (x) => Math.exp(-x * x / (2 * bw * bw))\r
      const min = d3.min(d.means)\r
      const max = d3.max(d.means)\r
      const step = min === max ? 1 : (max - min) / 50\r
      const pts = d3.range(min, max + step / 2, step)\r
      const rawDensity = pts.map(p => d3.mean(d.means, v => gauss(p - v)))\r
      const peak = d3.max(rawDensity) || 1\r
      const density = rawDensity.map(g => (g / peak) * 70)\r
\r
      const line = d3.line()\r
        .x((v, j) => x(d.means[0] + (d.means[d.means.length - 1] - d.means[0]) * j / (density.length - 1)))\r
        .y(v => y(v * 0.8))\r
\r
      svg.append('path')\r
        .datum(density.map((v, j) => ({ x: x(d.means[0] + (d.means[d.means.length - 1] - d.means[0]) * j / (density.length - 1)), y: y(v * 0.8) })))\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', d3.line().x(d => d.x).y(d => d.y).curve(d3.curveBasis))\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 2)\r
    })\r
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
      .text('Bootstrap Distribution - Sampling Variability')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 110},\${M.top + IH + 15})\`)\r
    data.forEach((d, i) => {\r
      const yOff = i * 18\r
      lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', colors[i % colors.length]).attr('opacity', 0.6).attr('rx', 2)\r
      lg.append('text').attr('x', 16).attr('y', yOff + 10).text(d.group).attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};