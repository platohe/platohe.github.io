var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiTreemapColors: Nested polygonal treemap variant 4.\r
export const meta = {\r
  id: 'voronoi-treemap-colors',\r
  title: 'Voronoi Treemap Colors',\r
  desc: 'Voronoi Treemap Colors — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiTreemapColors',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["math-&-simulation","voronoi-treemap-colors"],\r
}\r
\r
export default function VoronoiTreemapColors({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    // weighted recursive subdivision of the frame into polygonal treemap cells\r
    const rawWeights = [["Red",25,3],["Blue",25,0],["Green",25,2],["Amber",13,1],["Grey",8,5]]\r
    const weights = rawWeights.map(w => Array.isArray(w) ? {n:w[0], v:Number(w[1]), ci:Number(w[2])} : {n:String(w.n??w.label??w.name??''), v:Number(w.v??w.value)??0, ci:Number(w.ci??w.colorIndex??0)}).filter(w=>Number.isFinite(w.v)&&w.v>0)\r
    const total = d3.sum(weights, w => w.v) || 1\r
    let seed = 42\r
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }\r
\r
    // Generate seed points for Delaunay triangulation\r
    const pts = weights.map((w, i) => {\r
      const angle = (i / weights.length) * 2 * Math.PI\r
      const r = 70 + (w.v / total) * 60 + (rnd() * 16 - 8)\r
      const x = 200 + r * Math.cos(angle) + (rnd() - 0.5) * 20\r
      const y = 150 + r * Math.sin(angle) + (rnd() - 0.5) * 20\r
      return [Math.max(36, Math.min(364, x)), Math.max(36, Math.min(264, y))]\r
    })\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([30, 30, 370, 270])\r
\r
    pts.forEach((pt, i) => {\r
      const cell = voronoi.cellPolygon(i)\r
      if (!cell) return\r
      const clean = cell.filter(p=>Array.isArray(p)&&Number.isFinite(p[0])&&Number.isFinite(p[1]))\r
      if (clean.length < 3) return\r
      const wgt = weights[i]\r
      if(!wgt) return\r
      const col = colors[(Number.isFinite(wgt.ci)?wgt.ci:i) % colors.length]\r
      const pathStr = 'M' + clean.map(c=>c[0].toFixed(1)+','+c[1].toFixed(1)).join('L') + 'Z'\r
      if (pathStr.includes('NaN')) return\r
      g.append('path').attr('d', pathStr).attr('fill', col).attr('fill-opacity', 0.35 + 0.5*(wgt.v/(total||1))).attr('stroke','var(--bg)').attr('stroke-width',2)\r
      const cx = pt[0], cy = pt[1]\r
      g.append('text').attr('x', cx).attr('y', cy).attr('text-anchor','middle').attr('font-size','8px').attr('font-weight',700).attr('fill','var(--text-secondary)').text((wgt.n??'')+' · '+wgt.v)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};