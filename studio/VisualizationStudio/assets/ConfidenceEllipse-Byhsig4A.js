var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
// 95% confidence ellipse from the 2D covariance matrix (chi2(2, 0.95) = 5.991)\r
function ellipseParams(pts) {\r
  const n = pts.length\r
  const mx = d3.mean(pts, (p) => p.x)\r
  const my = d3.mean(pts, (p) => p.y)\r
  let cxx = 0, cyy = 0, cxy = 0\r
  pts.forEach((p) => {\r
    cxx += (p.x - mx) ** 2\r
    cyy += (p.y - my) ** 2\r
    cxy += (p.x - mx) * (p.y - my)\r
  })\r
  cxx /= n - 1; cyy /= n - 1; cxy /= n - 1\r
  const trace = cxx + cyy\r
  const det = cxx * cyy - cxy * cxy\r
  const disc = Math.sqrt(Math.max(0, trace * trace / 4 - det))\r
  const l1 = trace / 2 + disc\r
  const l2 = Math.max(0.0001, trace / 2 - disc)\r
  const theta = 0.5 * Math.atan2(2 * cxy, cxx - cyy)\r
  const k = 5.991\r
  return { mx, my, a: Math.sqrt(k * l1), b: Math.sqrt(k * l2), theta }\r
}\r
\r
export const meta = {\r
  id: 'confidence-ellipse',\r
  title: 'Confidence Ellipse',\r
  desc: 'Confidence Ellipse — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConfidenceEllipse',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","confidence-ellipse"],\r
}\r
\r
export default function ConfidenceEllipse({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":22,"y":45},{"x":28,"y":52},{"x":31,"y":48},{"x":35,"y":60},{"x":38,"y":55},{"x":42,"y":66},{"x":45,"y":62},{"x":50,"y":72},{"x":53,"y":68},{"x":58,"y":78},{"x":62,"y":74},{"x":66,"y":84},{"x":70,"y":80},{"x":75,"y":90},{"x":78,"y":86},{"x":84,"y":95},{"x":88,"y":92},{"x":93,"y":102},{"x":97,"y":98},{"x":104,"y":108},{"x":108,"y":104},{"x":114,"y":114},{"x":118,"y":110},{"x":124,"y":120},{"x":128,"y":116}]\r
    const pts = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([d3.min(pts, (p) => p.x) - 8, d3.max(pts, (p) => p.x) + 8]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([d3.min(pts, (p) => p.y) - 8, d3.max(pts, (p) => p.y) + 8]).range([H - M.bottom, M.top])\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(8))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
      .call((g) => g.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
      .lower()\r
\r
    const { mx, my, a, b, theta } = ellipseParams(pts)\r
    const ellipsePath = d3.range(64).map((i) => {\r
      const t = (i / 63) * 2 * Math.PI\r
      const ex = mx + a * Math.cos(t) * Math.cos(theta) - b * Math.sin(t) * Math.sin(theta)\r
      const ey = my + a * Math.cos(t) * Math.sin(theta) + b * Math.sin(t) * Math.cos(theta)\r
      return [x(ex), y(ey)]\r
    })\r
    const line = d3.line().curve(d3.curveCatmullRomClosed)\r
    svg.append('path')\r
      .attr('d', line(ellipsePath))\r
      .attr('fill', colors[0]).attr('fill-opacity', 0.15)\r
      .attr('stroke', colors[0]).attr('stroke-width', 1.8)\r
\r
    svg.selectAll('circle')\r
      .data(pts)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.x)).attr('cy', (d) => y(d.y))\r
      .attr('r', 3.5).attr('fill', colors[0]).attr('opacity', 0.6).attr('stroke', '#fff').attr('stroke-width', 0.8)\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};