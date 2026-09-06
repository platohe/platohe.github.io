var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
// Approx region bounding boxes [x%, y%, w%, h%] in normalized 0-1 space\r
// representing continents/regions in a simplified world layout\r
const REGIONS = [\r
  { id: 'NAM', name: 'N. America', gx: 0.05, gy: 0.10, gw: 0.22, gh: 0.45, value: 580  },\r
  { id: 'SAM', name: 'S. America', gx: 0.12, gy: 0.55, gw: 0.16, gh: 0.38, value: 435  },\r
  { id: 'EUR', name: 'Europe',     gx: 0.38, gy: 0.08, gw: 0.12, gh: 0.30, value: 750  },\r
  { id: 'AFR', name: 'Africa',     gx: 0.36, gy: 0.38, gw: 0.18, gh: 0.50, value: 1340 },\r
  { id: 'MDE', name: 'Mid East',   gx: 0.50, gy: 0.28, gw: 0.10, gh: 0.22, value: 410  },\r
  { id: 'SAS', name: 'S. Asia',    gx: 0.58, gy: 0.30, gw: 0.12, gh: 0.25, value: 1900 },\r
  { id: 'EAS', name: 'E. Asia',    gx: 0.68, gy: 0.12, gw: 0.18, gh: 0.35, value: 1700 },\r
  { id: 'SEA', name: 'SE Asia',    gx: 0.70, gy: 0.45, gw: 0.14, gh: 0.25, value: 680  },\r
  { id: 'OCE', name: 'Oceania',    gx: 0.75, gy: 0.60, gw: 0.16, gh: 0.30, value: 42   },\r
  { id: 'RUS', name: 'Russia/CAS', gx: 0.38, gy: 0.05, gw: 0.32, gh: 0.25, value: 320  },\r
]\r
\r
export const meta = {\r
  id: 'cartogram',\r
  title: 'Cartogram',\r
  desc: 'Cartogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Cartogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cartogram"],\r
}\r
\r
export default function Cartogram({ data }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const regions = (data && Array.isArray(data) && data.length > 0) ? data : REGIONS\r
\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const maxVal = d3.max(regions, d => d.value)\r
    const areaScale = d3.scaleSqrt().domain([0, maxVal]).range([0, 1])\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateYlOrRd)\r
      .domain([0, maxVal])\r
\r
    const pad = 30\r
    const innerW = W - pad * 2\r
    const innerH = H - pad * 2 - 30\r
\r
    // For each region, compute distorted rect based on value\r
    const processed = regions.map(r => {\r
      const scaleFactor = areaScale(r.value)\r
      const baseW = r.gw * innerW\r
      const baseH = r.gh * innerH\r
      const area = baseW * baseH\r
      const cartArea = area * (0.2 + 0.8 * scaleFactor / areaScale(maxVal))\r
      const ratio = baseW / baseH\r
      const newW = Math.sqrt(cartArea * ratio)\r
      const newH = Math.sqrt(cartArea / ratio)\r
      return {\r
        ...r,\r
        x: pad + r.gx * innerW,\r
        y: pad + r.gy * innerH,\r
        w: Math.max(newW, 20),\r
        h: Math.max(newH, 15),\r
      }\r
    })\r
\r
    // Background\r
    svg.append('rect')\r
      .attr('width', W).attr('height', H)\r
      .attr('fill', 'var(--bg)').attr('rx', 6)\r
\r
    // Grid hint\r
    svg.append('g').selectAll('line')\r
      .data(d3.range(0, W, 40)).enter().append('line')\r
      .attr('x1', d => d).attr('x2', d => d)\r
      .attr('y1', pad).attr('y2', H - pad - 25)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 0.3)\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 16)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Cartogram · Regions Sized by Population')\r
\r
    // Draw regions\r
    const groups = svg.selectAll('.region')\r
      .data(processed).enter()\r
      .append('g').attr('class', 'region')\r
\r
    groups.append('rect')\r
      .attr('x', d => d.x)\r
      .attr('y', d => d.y)\r
      .attr('width', d => d.w)\r
      .attr('height', d => d.h)\r
      .attr('fill', d => colorScale(d.value))\r
      .attr('rx', 4)\r
      .attr('stroke', 'white')\r
      .attr('stroke-width', 1.5)\r
      .attr('opacity', 0.85)\r
\r
    groups.append('text')\r
      .attr('x', d => d.x + d.w / 2)\r
      .attr('y', d => d.y + d.h / 2 - 3)\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', d => Math.min(d.w / 5, 10) + 'px')\r
      .attr('font-weight', 700)\r
      .text(d => d.name)\r
\r
    groups.append('text')\r
      .attr('x', d => d.x + d.w / 2)\r
      .attr('y', d => d.y + d.h / 2 + 10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'rgba(255,255,255,0.8)')\r
      .attr('font-size', d => Math.min(d.w / 6, 9) + 'px')\r
      .text(d => \`\${d.value}M\`)\r
\r
    // Legend bar\r
    const lW = 120, lH = 6\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'cartGrad')\r
      .attr('x1', '0%').attr('x2', '100%')\r
    for (let i = 0; i <= 10; i++) {\r
      grad.append('stop')\r
        .attr('offset', \`\${i * 10}%\`)\r
        .attr('stop-color', colorScale(maxVal * i / 10))\r
    }\r
    const lx = W - lW - 10\r
    const ly = H - 22\r
    svg.append('rect').attr('x', lx).attr('y', ly).attr('width', lW).attr('height', lH)\r
      .attr('rx', 3).attr('fill', 'url(#cartGrad)')\r
    svg.append('text').attr('x', lx).attr('y', ly + lH + 10)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('Low')\r
    svg.append('text').attr('x', lx + lW).attr('y', ly + lH + 10)\r
      .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('High Pop.')\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};