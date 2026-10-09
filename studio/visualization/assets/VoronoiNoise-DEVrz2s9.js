var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// VoronoiNoise: Perlin noise field jitter on grid seeds\r
export const meta = {\r
  id: 'voronoi-noise',\r
  title: 'Voronoi Noise',\r
  desc: 'Voronoi Noise — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiNoise',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-noise"],\r
}\r
\r
export default function VoronoiNoise({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    // Simple Perlin-like noise using deterministic hash\r
    const noise = (x, y, seed = 42) => {\r
      let n = seed + x * 12.9898 + y * 78.233\r
      n = (n * 43758.5453) % 1\r
      return n < 0 ? n + 1 : n\r
    }\r
    const fbm = (x, y) => {\r
      let val = 0, amp = 0.5, freq = 0.01\r
      for (let i = 0; i < 4; i++) {\r
        val += noise(x * freq, y * freq) * amp\r
        amp *= 0.5\r
        freq *= 2\r
      }\r
      return val\r
    }\r
    // Grid seeds with noise jitter\r
    const cols = 6, rows = 5\r
    const margin = 20\r
    const cellW = (W - 2 * margin) / cols\r
    const cellH = (H - 2 * margin) / rows\r
    const pts = []\r
    for (let r = 0; r < rows; r++) {\r
      for (let c = 0; c < cols; c++) {\r
        const baseX = margin + c * cellW + cellW / 2\r
        const baseY = margin + r * cellH + cellH / 2\r
        const jitter = 15\r
        const nx = baseX + (fbm(baseX, baseY) - 0.5) * jitter * 2\r
        const ny = baseY + (fbm(baseX + 1000, baseY + 1000) - 0.5) * jitter * 2\r
        pts.push([Math.max(margin, Math.min(W - margin, nx)), Math.max(margin, Math.min(H - margin, ny))])\r
      }\r
    }\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([margin, margin, W - margin, H - margin])\r
    // Color by noise field\r
    pts.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      const n = fbm(p[0], p[1])\r
      const hue = 200 + n * 60 // blue to cyan range\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', \`hsl(\${hue}, 60%, 50%)\`)\r
        .attr('fill-opacity', 0.65)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 2).attr('fill', '#0f172a').attr('fill-opacity', 0.5)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};