var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// VoronoiHeatmap: Cell area proportional to data value\r
export const meta = {\r
  id: 'voronoi-heatmap',\r
  title: 'Voronoi Heatmap',\r
  desc: 'Voronoi Heatmap — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["math-&-simulation","voronoi-heatmap"],\r
}\r
\r
export default function VoronoiHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const g = svg.append('g')\r
    // Use custom data or default: [label, value]\r
    const DEFAULT_DATA = [["Revenue",42],["Profit",55],["Growth",78],["Margin",63],["Costs",35],["EBITDA",50],["CashFlow",28],["ROI",45],["Users",70],["Churn",22]]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const weights = data.map((d, i) => ({ label: Array.isArray(d) ? d[0] : d.label, value: Array.isArray(d) ? Number(d[1]) : Number(d.value), idx: i }))\r
      .filter(w => Number.isFinite(w.value) && w.value > 0)\r
    const total = d3.sum(weights, w => w.value) || 1\r
    // Generate seed points with density proportional to weight\r
    const pts = []\r
    weights.forEach(w => {\r
      const count = Math.max(1, Math.round(15 * w.value / total))\r
      for (let j = 0; j < count; j++) {\r
        const angle = Math.random() * 2 * Math.PI\r
        const r = 40 + Math.random() * 100\r
        pts.push({\r
          x: 200 + r * Math.cos(angle),\r
          y: 150 + r * Math.sin(angle),\r
          weightIdx: w.idx,\r
          label: w.label,\r
          value: w.value\r
        })\r
      }\r
    })\r
    // Shuffle\r
    for (let i = pts.length - 1; i > 0; i--) {\r
      const j = Math.floor(Math.random() * (i + 1))\r
      ;[pts[i], pts[j]] = [pts[j], pts[i]]\r
    }\r
    const xy = pts.map(p => [p.x, p.y])\r
    const delaunay = d3.Delaunay.from(xy)\r
    const voronoi = delaunay.voronoi([20, 20, 380, 280])\r
    // Color by value (heatmap)\r
    const colorScale = d3.scaleSequential(d3.interpolateRgbBasis(['#e0e7ff', '#4338ca', '#1e1b4b']))\r
      .domain([0, d3.max(weights, w => w.value) || 1])\r
    pts.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', colorScale(p.value))\r
        .attr('fill-opacity', 0.8)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
    })\r
    // Draw original weight centers with labels\r
    weights.forEach(w => {\r
      const clusterPts = pts.filter(p => p.weightIdx === w.idx)\r
      if (clusterPts.length === 0) return\r
      const cx = d3.mean(clusterPts, d => d.x)\r
      const cy = d3.mean(clusterPts, d => d.y)\r
      g.append('circle').attr('cx', cx).attr('cy', cy).attr('r', 5)\r
        .attr('fill', 'none').attr('stroke', '#fff').attr('stroke-width', 2)\r
      g.append('text').attr('x', cx).attr('y', cy + 4).attr('text-anchor', 'middle')\r
        .attr('font-size', '8px').attr('font-weight', 700).attr('fill', '#fff')\r
        .text(\`\${w.label} \${w.value}\`)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};