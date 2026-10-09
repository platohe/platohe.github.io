var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiGrowth: Animated sequential point insertion with growth rings\r
export const meta = {\r
  id: 'voronoi-growth',\r
  title: 'Voronoi Growth',\r
  desc: 'Voronoi Growth — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiGrowth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-growth"],\r
}\r
\r
export default function VoronoiGrowth({ data: customData }) {\r
  const ref = useRef(null)\r
  const [frame, setFrame] = useState(0)\r
  useEffect(() => {\r
    const timer = setInterval(() => setFrame(f => (f + 1) % 200), 120)\r
    return () => clearInterval(timer)\r
  }, [])\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    // 12 seed points that grow over time\r
    const N = 12\r
    let seed = 42\r
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }\r
    // Generate fixed seed positions\r
    const seeds = Array.from({ length: N }, (_, i) => {\r
      const angle = (i / N) * 2 * Math.PI\r
      const r = 80 + (rnd() * 60)\r
      return [200 + r * Math.cos(angle), 150 + r * Math.sin(angle)]\r
    })\r
    // Animation: points inserted sequentially\r
    const maxPoints = Math.min(N, Math.floor(frame / 15) + 1)\r
    const activeSeeds = seeds.slice(0, maxPoints)\r
    if (activeSeeds.length < 2) {\r
      // Just show first point\r
      activeSeeds.forEach((p, i) => {\r
        g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 6)\r
          .attr('fill', colors[i % colors.length]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
      })\r
      return\r
    }\r
    const delaunay = d3.Delaunay.from(activeSeeds)\r
    const voronoi = delaunay.voronoi([20, 20, 380, 280])\r
    activeSeeds.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      // Growth ring animation\r
      const progress = (frame % 30) / 30\r
      const ringR = 4 + progress * 12\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', ringR)\r
        .attr('fill', 'none').attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 2).attr('stroke-opacity', 1 - progress)\r
      // Cell\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', colors[i % colors.length]).attr('fill-opacity', 0.3 + 0.2 * Math.sin(progress * Math.PI))\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 1.6)\r
      // Center point with pulse\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 3 + progress * 3)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 1 - progress)\r
    })\r
    // Show count\r
    g.append('text').attr('x', W / 2).attr('y', H - 8).attr('text-anchor', 'middle')\r
      .attr('font-size', '9px').attr('fill', 'var(--text-secondary)')\r
      .text(\`Growing: \${maxPoints}/\${N} sites\`)\r
  }, [customData, frame])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};