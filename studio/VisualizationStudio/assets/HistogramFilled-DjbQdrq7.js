var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'histogram-filled',\r
  title: 'Histogram Filled',\r
  desc: 'Histogram Filled — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'HistogramFilled',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","histogram-filled"],\r
}\r
\r
export default function HistogramFilled({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [54.044,47.932,64.099,56.789,36.993,51.064,40.929,54.99,64.619,48.893,39.997,65.282,59.83,42.28,37.89,50.029,57.464,54.425,30.154,48.831,63.493,32.048,53.693,31.262,40.678,32.471,37.428,61.342,51.213,31.085,36.92,63.708,49.51,62.361,42.778,47.996,31.498,32.056,52.264,53.869,39.807,55.828,38.38,42.145,59.545,64.348,50.32,38.168,41.368,41.72,32.988,56.394,57.231,57.724,67.114,33.519,67.749,47.245,67.692,35.492,34.438,30.634,44.418,49.269,54.477,65.982,33.103,58.784,67.395,41.13,58.263,37.185,50.813,62.876,34.824,69.826,52.512,66.645,47.36,53.138,43.478,53.85,42.918,59.177,41.808,47.991,63.725,57.803,69.76,65.608,47.276,51.809,41.837,34.035,57.869,42.532,61.438,66.191,33.746,49.016,62.878,35.199,68.91,37.136,58.377,57.988,38.927,46.514,36.537,56.187,43.437,38.278,55.156,65.475,43.055,61.697,45.718,35.256,64.548,44.788,30.381,59.497,55.411,65.037,66.327,38.36,54.157,49.57,37.361,31.899,58.222,58.335,41.66,41.019,43.464,31.164,38.836,69.741,52.894,69.543,36.555,36.833,52.439,41.7,45.786,47.376,46.734,57.445,45.941,43.445]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 20, right: 15, bottom: 30, left: 35 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const hist = d3.histogram().domain([0, 100]).thresholds(15)(data)\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, w])\r
    const y = d3.scaleLinear().domain([0, d3.max(hist, b => b.length) * 1.1]).range([h, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    g.selectAll('rect').data(hist).join('rect').attr('x', d => x(d.x0) + 1).attr('y', d => y(d.length)).attr('width', d => Math.max(1, x(d.x1) - x(d.x0) - 2)).attr('height', d => h - y(d.length))\r
      .attr('fill', colors[0]).attr('opacity', 0.65).attr('rx', 1)\r
    g.append('path').datum(hist).attr('d', d3.area().x(d => x((d.x0 + d.x1) / 2)).y0(h).y1(d => y(d.length)).curve(d3.curveBasis)).attr('fill', colors[0]).attr('opacity', 0.15)\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).ticks(8)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};