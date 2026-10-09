var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'kdemarginals',\r
  title: 'K D E Marginals',\r
  desc: 'K D E Marginals — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KDEMarginals',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","k-d-e-marginals"],\r
}\r
\r
export default function KDEMarginals({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":84.044,"y":148.19},{"x":111.83,"y":154.944},{"x":100.871,"y":146.984},{"x":117.929,"y":145.633},{"x":150.541,"y":133.866},{"x":129.847,"y":140.387},{"x":148.26,"y":111.363},{"x":119.683,"y":108.524},{"x":127.992,"y":102.412},{"x":85.797,"y":87.617},{"x":101.961,"y":63.485},{"x":74.228,"y":54.179},{"x":44.127,"y":47.793},{"x":26.162,"y":67.08},{"x":28.919,"y":36.338},{"x":8.268,"y":62.494},{"x":19.74,"y":60.901},{"x":17.23,"y":49.906},{"x":15.132,"y":39.461},{"x":49.223,"y":63.837},{"x":53.042,"y":72.417},{"x":69.389,"y":68.614},{"x":108.237,"y":97.188},{"x":115.026,"y":84.039},{"x":118.988,"y":97.13},{"x":119.268,"y":119.778},{"x":147.143,"y":130.184},{"x":155.307,"y":117.314},{"x":149.025,"y":136.368},{"x":137.47,"y":131.581},{"x":89.165,"y":131.063},{"x":81.885,"y":149.187},{"x":74.017,"y":163.644},{"x":35.651,"y":155.198},{"x":55.402,"y":135.709},{"x":35.482,"y":126.482},{"x":21.956,"y":141.684},{"x":5.151,"y":139.275},{"x":27.352,"y":127.127},{"x":31.641,"y":105.444},{"x":41.284,"y":96.093},{"x":57.124,"y":91.072},{"x":73.826,"y":72.277},{"x":113.373,"y":72.891},{"x":135.285,"y":73.102},{"x":125.503,"y":56.026},{"x":128.459,"y":37.289},{"x":147.827,"y":43.481},{"x":149.377,"y":64.933},{"x":114.49,"y":52.617},{"x":131.895,"y":45.096},{"x":122.714,"y":53.031},{"x":94.842,"y":78.94},{"x":57.476,"y":77.683},{"x":38.192,"y":95.697},{"x":30.73,"y":89.965},{"x":31.902,"y":123.691},{"x":14.011,"y":129.909},{"x":16.158,"y":115.513},{"x":39.793,"y":131.461},{"x":15.322,"y":150.502},{"x":54.072,"y":159.839},{"x":81.508,"y":139.124},{"x":87.183,"y":149.595},{"x":87.96,"y":132.803},{"x":124.554,"y":152.665},{"x":120.48,"y":132.436},{"x":130.411,"y":117.128},{"x":128.823,"y":142.858},{"x":140.563,"y":133.64},{"x":116.754,"y":95.316},{"x":120.684,"y":89.598},{"x":98.661,"y":84.714},{"x":82.196,"y":84.191},{"x":63.5,"y":63.497},{"x":66.595,"y":55.972},{"x":36.401,"y":60.194},{"x":28.143,"y":55.478},{"x":10.201,"y":44.179},{"x":12.522,"y":43.931}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 70, bottom: 65, left: 65 }\r
    const plotW = W - margin.left - margin.right\r
    const plotH = H - margin.top - margin.bottom\r
    const histH = 55\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(data, d => d.x)).nice()\r
      .range([0, plotW])\r
    const y = d3.scaleLinear()\r
      .domain(d3.extent(data, d => d.y)).nice()\r
      .range([plotH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Main scatter\r
    g.selectAll('.dot').data(data).join('circle').attr('class', 'dot')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 3.5)\r
      .attr('fill', colors[0]).attr('fill-opacity', 0.6)\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
\r
    // X-axis histogram (top area)\r
    const xBins = d3.bin().domain(x.domain()).thresholds(15)(data.map(d => d.x))\r
    const xMax = d3.max(xBins, b => b.length) || 1\r
    const xHistScale = d3.scaleLinear().domain([0, xMax]).range([0, histH])\r
\r
    xBins.forEach(b => {\r
      g.append('rect')\r
        .attr('x', x(b.x0)).attr('y', plotH - xHistScale(b.length))\r
        .attr('width', Math.max(1, x(b.x1) - x(b.x0) - 1)).attr('height', xHistScale(b.length))\r
        .attr('fill', colors[1]).attr('opacity', 0.5)\r
    })\r
\r
    // KDE line for X\r
    const kdeDataX = kde(x.domain(), data.map(d => d.x))\r
    if (kdeDataX.length > 1) {\r
      const lineX = d3.line()\r
        .x(d => x(d.x))\r
        .y(d => plotH - xHistScale(d.density))\r
        .curve(d3.curveBasis)\r
      g.append('path').datum(kdeDataX)\r
        .attr('d', lineX).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5)\r
    }\r
\r
    // Y-axis histogram (right area)\r
    const yBins = d3.bin().domain(y.domain()).thresholds(15)(data.map(d => d.y))\r
    const yMax = d3.max(yBins, b => b.length) || 1\r
    const yHistScale = d3.scaleLinear().domain([0, yMax]).range([0, histH])\r
\r
    yBins.forEach(b => {\r
      const by = y(b.x1)\r
      const bh = y(b.x0) - by\r
      g.append('rect')\r
        .attr('x', plotW).attr('y', by)\r
        .attr('width', yHistScale(b.length)).attr('height', Math.max(1, bh))\r
        .attr('fill', colors[2]).attr('opacity', 0.5)\r
    })\r
\r
    // KDE line for Y\r
    const kdeDataY = kde(y.domain(), data.map(d => d.y))\r
    if (kdeDataY.length > 1) {\r
      const lineY = d3.line()\r
        .x(d => plotW + yHistScale(d.density))\r
        .y(d => y(d.x))\r
        .curve(d3.curveBasis)\r
      g.append('path').datum(kdeDataY)\r
        .attr('d', lineY).attr('fill', 'none').attr('stroke', colors[2]).attr('stroke-width', 1.5)\r
    }\r
\r
    // Axes\r
    g.append('g').attr('transform', \`translate(0,\${plotH})\`)\r
      .call(d3.axisBottom(x).ticks(6)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    // Labels\r
    svg.append('text').attr('x', W / 2).attr('y', H - 6)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text('X Variable')\r
    svg.append('text').attr('x', 10).attr('y', margin.top + plotH / 2)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .attr('transform', 'rotate(-90, 10, ' + (margin.top + plotH / 2) + ')')\r
      .text('Y Variable')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
\r
// Gaussian kernel density estimate, normalized to peak 1 (d3 has no built-in KDE)\r
function kde(domain, values) {\r
  const n = values.length\r
  const bw = (d3.deviation(values) || 1) * Math.pow(n, -1 / 5) * 0.9\r
  const raw = domain.map(x => ({\r
    x,\r
    density: values.reduce((s, v) => s + Math.exp(-((x - v) ** 2) / (2 * bw * bw)), 0),\r
  }))\r
  const max = d3.max(raw, d => d.density) || 1\r
  return raw.map(d => ({ x: d.x, density: d.density / max }))\r
}\r
`;export{e as default};