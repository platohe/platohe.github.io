var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sparkline-grid',\r
  title: 'Sparkline Grid',\r
  desc: 'Sparkline Grid — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SparklineGrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","sparkline-grid"],\r
}\r
\r
export default function SparklineGrid({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"id":"Series A","values":[51.011,61.071,74.354,77.647,72.934,72.235,62.555,58.232,54.519,48.173,48.321,61.71]},{"id":"Series B","values":[69.287,70.02,69.158,67.977,62.689,54.091,41.902,44.157,50.195,49.401,65.335,71.618]},{"id":"Series C","values":[65.856,59.587,53.679,51.82,43.167,35.721,39.552,53.316,60.289,75.393,81.334,90.259]},{"id":"Series D","values":[48.197,40.498,39.43,37.417,36.273,47.346,53.507,66.339,81.526,90.347,89.867,85.012]},{"id":"Series E","values":[32.706,30.379,30.568,43.488,54.219,66.233,79.418,78.64,90.225,83.281,82.665,66.87]},{"id":"Series F","values":[26.931,33.048,47.016,60.12,72.259,82.756,77.563,82.166,78.591,64.279,61.185,51.202]},{"id":"Series G","values":[44.615,59.521,63.346,79.716,78.415,80.131,69.582,63.282,53.489,51.368,48.23,56.785]},{"id":"Series H","values":[61.092,70.258,77.218,73.92,71.182,62.399,50.438,46.858,43.959,46.5,61.236,68.807]},{"id":"Series I","values":[72.647,72.017,58.179,54.251,50.339,38.706,46.728,43.275,57.363,68.67,75.635,87.204]},{"id":"Series J","values":[54.877,52.044,41.479,35.476,39.289,46.36,49.532,65.598,73.333,80.39,93.449,89.395]},{"id":"Series K","values":[34.215,36.78,35.353,42.25,51.35,55.763,71.443,79.968,82.652,82.173,85.061,78.213]},{"id":"Series L","values":[27.915,32.246,41.635,49.965,63.612,81.011,82.536,87.584,75.644,68.838,64.852,55.689]},{"id":"Series M","values":[38.215,50.018,61.587,73.937,76.797,77.059,78.962,66.403,60.195,54.873,51.236,53.38]},{"id":"Series N","values":[55.757,66.329,71.8,72.904,72.699,61.338,52.935,51.714,44.914,44.737,53.118,60.575]},{"id":"Series O","values":[70.588,67.775,66.821,58.929,54.362,49.891,45.889,43.881,47.522,64.827,73.254,87.515]},{"id":"Series P","values":[66.951,55.63,44.708,42.952,41.848,37.572,45.877,57.607,73.842,80.031,91.854,95.369]},{"id":"Series Q","values":[46.678,33.3,30.465,33.18,43.046,54.917,67.606,81.025,87.419,89.253,90.103,84.962]},{"id":"Series R","values":[31.766,30.998,38.449,52.934,62.807,70.603,84.634,85.196,81.026,80.879,66.339,60.914]},{"id":"Series S","values":[30.18,41.005,58.474,70.374,80.818,83.731,78.396,75.508,62.274,55.988,49.467,47.515]},{"id":"Series T","values":[50.907,63.521,72.947,78.1,77.669,72.281,58.782,55.92,49.254,47.474,51.579,59.763]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && Array.isArray(customData[0]?.values)) ? customData : DEFAULT_DATA\r
    const cols = 5\r
    const rows = Math.ceil(data.length / cols)\r
    const cellW = IW / cols\r
    const cellH = IH / rows\r
\r
    data.forEach((series, idx) => {\r
      const col = idx % cols\r
      const row = Math.floor(idx / cols)\r
      const cx = M.left + col * cellW\r
      const cy = M.top + row * cellH\r
      const subW = cellW - 10\r
      const subH = cellH - 30\r
\r
      const x = d3.scaleLinear().domain([0, series.values.length - 1]).range([0, subW])\r
      const y = d3.scaleLinear().domain(d3.extent(series.values)).range([subH, 0])\r
\r
      // Background\r
      svg.append('rect').attr('x', cx + 5).attr('y', cy + 15).attr('width', subW).attr('height', subH)\r
        .attr('fill', 'var(--panel-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5).attr('rx', 2)\r
\r
      // Sparkline\r
      const line = d3.line().x((_, i) => x(i)).y(d => y(d)).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(series.values).attr('transform', \`translate(\${cx + 5},\${cy + 15})\`)\r
        .attr('d', line).attr('fill', 'none').attr('stroke', colors[idx % colors.length]).attr('stroke-width', 1.5)\r
\r
      // Min/max\r
      const min = d3.min(series.values), max = d3.max(series.values)\r
      svg.append('text').attr('x', cx + subW + 8).attr('y', cy + 26)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('M:' + min.toFixed(0) + '/' + max.toFixed(0))\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Sparkline Grid (' + data.length + ' series)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};