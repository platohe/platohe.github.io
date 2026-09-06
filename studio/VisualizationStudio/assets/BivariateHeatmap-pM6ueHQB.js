var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { hexbin } from 'd3-hexbin'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bivariate-heatmap',\r
  title: 'Bivariate Heatmap',\r
  desc: 'Bivariate Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BivariateHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","bivariate-heatmap"],\r
}\r
\r
export default function BivariateHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":114.155,"y":92.761},{"x":149.345,"y":123.763},{"x":54.474,"y":103.723},{"x":68.252,"y":117.464},{"x":151.166,"y":96.124},{"x":64.989,"y":153.488},{"x":134.403,"y":72.98},{"x":57.616,"y":100.102},{"x":126.126,"y":115.487},{"x":30.538,"y":95.909},{"x":147.227,"y":37.169},{"x":112.925,"y":34.415},{"x":67.374,"y":38.649},{"x":55.996,"y":139.697},{"x":104.247,"y":33.797},{"x":54.221,"y":147.976},{"x":98.284,"y":143.263},{"x":74.725,"y":92.985},{"x":35.241,"y":37.195},{"x":107.924,"y":113.542},{"x":64.324,"y":120.397},{"x":59.331,"y":72.508},{"x":133.407,"y":150.22},{"x":101.119,"y":58.587},{"x":69.789,"y":71.019},{"x":40.457,"y":122.38},{"x":125.308,"y":127.032},{"x":159.898,"y":42.316},{"x":162.123,"y":90.359},{"x":161.921,"y":49.222},{"x":45.532,"y":32.218},{"x":80.462,"y":97.441},{"x":115.669,"y":155.938},{"x":40.862,"y":130.744},{"x":160.881,"y":68.955},{"x":128.922,"y":55.147},{"x":102.844,"y":145.065},{"x":46.883,"y":169.389},{"x":108.792,"y":158.257},{"x":90.759,"y":110.983},{"x":77.175,"y":113.473},{"x":75.214,"y":132.118},{"x":71.329,"y":92.967},{"x":148.038,"y":127.309},{"x":169.162,"y":154.628},{"x":90.465,"y":106.33},{"x":71.43,"y":44.123},{"x":127.541,"y":73.863},{"x":140.032,"y":156.669},{"x":43.11,"y":96.555},{"x":145.073,"y":48.197},{"x":166.184,"y":54.975},{"x":129.32,"y":127.957},{"x":61.245,"y":87.801},{"x":52.881,"y":121.653},{"x":77.03,"y":58.974},{"x":118.046,"y":154.163},{"x":75.693,"y":140.94},{"x":85.012,"y":48.395},{"x":150.918,"y":81.759},{"x":31.334,"y":133.239},{"x":118.937,"y":152.629},{"x":157.143,"y":59.258},{"x":114.551,"y":98.494},{"x":55.763,"y":36.646},{"x":128.777,"y":129.172},{"x":70.809,"y":68.568},{"x":77.124,"y":34.075},{"x":60.925,"y":169.093},{"x":110.129,"y":168.399},{"x":52.941,"y":53.917},{"x":108.535,"y":70.951},{"x":85.252,"y":90.818},{"x":88.57,"y":126.059},{"x":85.792,"y":77.057},{"x":155.39,"y":75.824},{"x":99.337,"y":115.522},{"x":106.491,"y":112.502},{"x":62.957,"y":75.551},{"x":71.829,"y":74.879},{"x":123.701,"y":60.925},{"x":53.703,"y":127.298},{"x":73.991,"y":47.488},{"x":73.931,"y":35.938},{"x":110.855,"y":59.076},{"x":97.415,"y":83.19},{"x":129.687,"y":157.768},{"x":143.638,"y":91.511},{"x":51.58,"y":151.468},{"x":103.595,"y":147.653},{"x":155.231,"y":93.014},{"x":50.523,"y":116.624},{"x":143.063,"y":59.177},{"x":84.55,"y":106.393},{"x":167.829,"y":98.88},{"x":150.328,"y":148.047},{"x":134.107,"y":37.496},{"x":39.708,"y":53.702},{"x":100.916,"y":124.732},{"x":136.512,"y":168.804},{"x":165.278,"y":150.529},{"x":166.958,"y":168.237},{"x":147.951,"y":128.087},{"x":135.753,"y":170.27},{"x":154.479,"y":127.94},{"x":175.003,"y":150.075},{"x":126.347,"y":167.574},{"x":112.128,"y":129.26},{"x":101.598,"y":106.84},{"x":151.813,"y":158.109},{"x":176.475,"y":170.357},{"x":137.3,"y":156.598},{"x":111.612,"y":121.848},{"x":111.131,"y":103.814},{"x":123.279,"y":135.279},{"x":145.501,"y":157.31},{"x":163.486,"y":162.783},{"x":115.674,"y":153.309},{"x":141.424,"y":135.484},{"x":137.522,"y":136.725},{"x":134.004,"y":126.554},{"x":124.608,"y":111.812},{"x":140.368,"y":121.392},{"x":142.445,"y":143.837},{"x":151.79,"y":134.975},{"x":110.786,"y":100.301},{"x":111.854,"y":175.459},{"x":105.544,"y":169.652},{"x":134.432,"y":140.197},{"x":107.903,"y":165.734},{"x":104.539,"y":129.649},{"x":118.377,"y":156.221},{"x":145.124,"y":107.569},{"x":177.311,"y":160.009},{"x":152.896,"y":163.711},{"x":143.905,"y":164.388},{"x":142.164,"y":114.147},{"x":106.247,"y":107.67},{"x":104.766,"y":121.022},{"x":153.771,"y":153.469},{"x":144.88,"y":178.132},{"x":101.771,"y":131.741},{"x":127.027,"y":122.73},{"x":166.648,"y":142.934},{"x":116.397,"y":175.544},{"x":176.168,"y":121.3},{"x":141.469,"y":168.801},{"x":174.828,"y":154.798},{"x":145.483,"y":164.793},{"x":124.958,"y":139.522}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 40, bottom: 45, left: 50 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, w]).nice()\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([h, 0]).nice()\r
\r
    // Hexbin\r
    const hexBin = hexbin().size([w, h]).radius(18)\r
    const bins = hexBin(data.map(d => [x(d.x), y(d.y)]))\r
\r
    const maxCount = d3.max(bins, b => b.length) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateOranges).domain([0, maxCount])\r
\r
    bins.forEach(bin => {\r
      if (bin.length === 0) return\r
      const cx = bin.x, cy = bin.y\r
      svg.append('polygon')\r
        .attr('points', hexRing(cx, cy, 16))\r
        .attr('fill', colorScale(bin.length))\r
        .attr('fill-opacity', 0.8)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 0.5)\r
    })\r
\r
    // Scatter overlay (sparse)\r
    data.slice(0, 80).forEach(d => {\r
      svg.append('circle')\r
        .attr('cx', x(d.x)).attr('cy', y(d.y)).attr('r', 2.5)\r
        .attr('fill', colors[0]).attr('fill-opacity', 0.4)\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top + h})\`)\r
      .call(d3.axisBottom(x).ticks(6)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
      .call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    // Axis labels\r
    svg.append('text').attr('x', margin.left + w / 2).attr('y', H - 5)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text('X Variable')\r
    svg.append('text').attr('x', 10).attr('y', margin.top + h / 2)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .attr('transform', \`rotate(-90, 10, \${margin.top + h / 2})\`)\r
      .text('Y Variable')\r
\r
    // Color legend\r
    const lgW = 80, lgH = 8\r
    const lgX = W - margin.right - lgW - 5\r
    const lgY = margin.top + h + 25\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'bv-grad').attr('x1', '0%').attr('x2', '100%')\r
    d3.range(0, 1.01, 0.05).forEach(t =>\r
      grad.append('stop').attr('offset', t * 100 + '%').attr('stop-color', colorScale(t * maxCount))\r
    )\r
    svg.append('rect').attr('x', lgX).attr('y', lgY).attr('width', lgW).attr('height', lgH)\r
      .attr('fill', 'url(#bv-grad)').attr('rx', 2)\r
    svg.append('text').attr('x', lgX).attr('y', lgY - 3)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(Math.round(maxCount))\r
    svg.append('text').attr('x', lgX + lgW).attr('y', lgY - 3)\r
      .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('0')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
\r
function hexRing(cx, cy, r) {\r
  return Array.from({ length: 6 }, (_, i) => {\r
    const a = (Math.PI / 3) * i - Math.PI / 6\r
    return \`\${cx + r * Math.cos(a)},\${cy + r * Math.sin(a)}\`\r
  }).join(' ')\r
}\r
`;export{e as default};