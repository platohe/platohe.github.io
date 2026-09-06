var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
// Bilinear interpolation over a vector-field grid\r
function interp(field, nx, ny, px, py) {\r
  const fx = Math.max(0, Math.min(nx - 1.001, px))\r
  const fy = Math.max(0, Math.min(ny - 1.001, py))\r
  const x0 = Math.floor(fx), y0 = Math.floor(fy)\r
  const tx = fx - x0, ty = fy - y0\r
  const v00 = field[y0 * nx + x0], v10 = field[y0 * nx + x0 + 1]\r
  const v01 = field[(y0 + 1) * nx + x0], v11 = field[(y0 + 1) * nx + x0 + 1]\r
  return {\r
    vx: (1 - ty) * ((1 - tx) * v00.vx + tx * v10.vx) + ty * ((1 - tx) * v01.vx + tx * v11.vx),\r
    vy: (1 - ty) * ((1 - tx) * v00.vy + tx * v10.vy) + ty * ((1 - tx) * v01.vy + tx * v11.vy),\r
  }\r
}\r
\r
function seedStreamline(field, nx, ny, x0, y0, steps = 60, stepLen = 0.18) {\r
  const path = [[x0, y0]]\r
  let px = x0, py = y0\r
  for (let i = 0; i < steps; i++) {\r
    const v = interp(field, nx, ny, px, py)\r
    const mag = Math.hypot(v.vx, v.vy)\r
    if (mag < 1e-6) break\r
    px += (v.vx / mag) * stepLen\r
    py += (v.vy / mag) * stepLen\r
    if (px < 0 || px > nx - 1 || py < 0 || py > ny - 1) break\r
    path.push([px, py])\r
  }\r
  return path\r
}\r
\r
export const meta = {\r
  id: 'streamline-plot',\r
  title: 'Streamline Plot',\r
  desc: 'Streamline Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StreamlinePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","streamline-plot"],\r
}\r
\r
export default function StreamlinePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const nx = 20, ny = 16\r
    const DEFAULT_DATA = {"nx":20,"ny":16,"vectors":[]}\r
    // Swirl + sink flow field sampled as data\r
    for (let j = 0; j < ny; j++) {\r
      for (let i = 0; i < nx; i++) {\r
        const gx = i - (nx - 1) / 2, gy = j - (ny - 1) / 2\r
        const r = Math.hypot(gx, gy) || 0.001\r
        DEFAULT_DATA.vectors.push({\r
          x: i, y: j,\r
          vx: -gy / r + -gx * 0.12,\r
          vy: gx / r + -gy * 0.12,\r
        })\r
      }\r
    }\r
\r
    const field = (customData && Array.isArray(customData.vectors) && customData.vectors.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, field.nx - 1]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, field.ny - 1]).range([H - M.bottom, M.top])\r
\r
    const seeds = []\r
    for (let i = 2; i < field.nx; i += 4) for (let j = 2; j < field.ny; j += 3) seeds.push([i, j])\r
    const line = d3.line().curve(d3.curveCatmullRom.alpha(0.6))\r
    seeds.forEach(([sx, sy]) => {\r
      const path = seedStreamline(field.vectors, field.nx, field.ny, sx, sy)\r
      svg.append('path')\r
        .attr('d', line(path.map(([px, py]) => [x(px), y(py)])))\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0]).attr('stroke-width', 1.4).attr('opacity', 0.7)\r
    })\r
\r
    svg.selectAll('line.glyph')\r
      .data(field.vectors)\r
      .join('line')\r
      .attr('class', 'glyph')\r
      .attr('x1', (d) => x(d.x)).attr('y1', (d) => y(d.y))\r
      .attr('x2', (d) => x(d.x + d.vx * 0.28)).attr('y2', (d) => y(d.y + d.vy * 0.28))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 0.8).attr('opacity', 0.5)\r
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