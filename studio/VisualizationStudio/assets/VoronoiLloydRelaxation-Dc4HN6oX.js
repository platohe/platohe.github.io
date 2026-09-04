var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiLloydRelaxation: Actual Lloyd relaxation iterations\r
export const meta = {\r
  id: 'voronoi-lloyd-relaxation',\r
  title: 'Voronoi Lloyd Relaxation',\r
  desc: 'Voronoi Lloyd Relaxation — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiLloydRelaxation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-lloyd-relaxation"],\r
}\r
\r
export default function VoronoiLloydRelaxation({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    let seed = 42\r
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }\r
    // Initial random seeds\r
    let pts = Array.from({ length: 12 }, () => [40 + rnd() * 320, 30 + rnd() * 240])\r
    // Lloyd relaxation: 8 iterations\r
    for (let iter = 0; iter < 8; iter++) {\r
      const delaunay = d3.Delaunay.from(pts)\r
      const voronoi = delaunay.voronoi([20, 20, 380, 280])\r
      const newPts = pts.map((p, i) => {\r
        const cell = voronoi.cellPolygon(i)\r
        if (!cell || cell.length < 3) return p\r
        const cx = d3.mean(cell, d => d[0])\r
        const cy = d3.mean(cell, d => d[1])\r
        if (!Number.isFinite(cx) || !Number.isFinite(cy)) return p\r
        return [cx, cy]\r
      })\r
      pts = newPts\r
    }\r
    // Final Voronoi\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([20, 20, 380, 280])\r
    pts.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', colors[i % colors.length])\r
        .attr('fill-opacity', 0.7)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1.6)\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 3).attr('fill', '#0f172a').attr('fill-opacity', 0.55)\r
    })\r
    // Show original positions as ghost circles\r
    let origSeed = 42\r
    const rnd2 = () => { origSeed = (origSeed * 16807) % 2147483647; return origSeed / 2147483647 }\r
    const origPts = Array.from({ length: 12 }, () => [40 + rnd2() * 320, 30 + rnd2() * 240])\r
    origPts.forEach(p => {\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 2.5)\r
        .attr('fill', 'none').attr('stroke', '#94a3b8').attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};