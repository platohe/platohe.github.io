var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiClusters: k-means clustering on seeds → cluster-colored cells\r
export const meta = {\r
  id: 'voronoi-clusters',\r
  title: 'Voronoi Clusters',\r
  desc: 'Voronoi Clusters — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiClusters',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["math-&-simulation","voronoi-clusters"],\r
}\r
\r
export default function VoronoiClusters({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    let seed = 42\r
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }\r
    // Generate 16 random seeds\r
    const N = 16\r
    let pts = Array.from({ length: N }, () => [40 + rnd() * 320, 30 + rnd() * 240])\r
    // Simple k-means (k=4)\r
    const k = 4\r
    let centroids = pts.slice(0, k).map(p => [...p])\r
    for (let iter = 0; iter < 10; iter++) {\r
      const clusters = Array.from({ length: k }, () => [])\r
      pts.forEach(p => {\r
        let best = 0, bestDist = Infinity\r
        centroids.forEach((c, i) => {\r
          const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2\r
          if (d < bestDist) { bestDist = d; best = i }\r
        })\r
        clusters[best].push(p)\r
      })\r
      centroids = clusters.map((cls, i) => {\r
        if (cls.length === 0) return centroids[i]\r
        return [d3.mean(cls, d => d[0]), d3.mean(cls, d => d[1])]\r
      })\r
    }\r
    // Assign cluster to each point\r
    const assignments = pts.map(p => {\r
      let best = 0, bestDist = Infinity\r
      centroids.forEach((c, i) => {\r
        const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2\r
        if (d < bestDist) { bestDist = d; best = i }\r
      })\r
      return best\r
    })\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([20, 20, 380, 280])\r
    pts.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      const cluster = assignments[i]\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', colors[cluster % colors.length])\r
        .attr('fill-opacity', 0.75)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1.6)\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 3).attr('fill', '#0f172a').attr('fill-opacity', 0.55)\r
    })\r
    // Draw cluster centroids\r
    centroids.forEach((c, i) => {\r
      g.append('circle').attr('cx', c[0]).attr('cy', c[1]).attr('r', 6)\r
        .attr('fill', 'none').attr('stroke', colors[i]).attr('stroke-width', 2.5)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};