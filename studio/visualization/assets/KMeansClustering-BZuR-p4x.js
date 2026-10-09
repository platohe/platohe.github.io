var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'kmeans-clustering',\r
  title: 'K Means Clustering',\r
  desc: 'K Means Clustering — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KMeansClustering',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","k-means-clustering"],\r
}\r
\r
export default function KMeansClustering({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"k":3,"points":[{"x":110,"y":150},{"x":304.708,"y":80.012},{"x":191.056,"y":216.635},{"x":77.596,"y":144.472},{"x":287.294,"y":70.755},{"x":227.947,"y":234.499},{"x":85.504,"y":129.924},{"x":248.365,"y":72.276},{"x":230.071,"y":247.019},{"x":123.886,"y":111.719},{"x":236.351,"y":84.015},{"x":194.785,"y":249.581},{"x":144.993,"y":96.566},{"x":266.198,"y":101.645},{"x":165.987,"y":241.241},{"x":122.567,"y":90.05},{"x":300.775,"y":118.669},{"x":179.503,"y":225.073},{"x":84.507,"y":94.571},{"x":297.066,"y":128.813},{"x":218.518,"y":207.035},{"x":78.162,"y":108.464},{"x":259.686,"y":128.337},{"x":234.496,"y":193.775},{"x":111.424,"y":126.609},{"x":235.137,"y":117.418},{"x":207.56,"y":190.18},{"x":142.915,"y":142.318},{"x":253.959,"y":100.079},{"x":171.219,"y":197.576},{"x":133.458,"y":149.802},{"x":292.736,"y":82.712},{"x":170.683,"y":213.236},{"x":94.818,"y":146.302},{"x":303.229,"y":71.716},{"x":206.619,"y":231.389},{"x":75.065,"y":133.109},{"x":272.383,"y":71.144},{"x":234.321,"y":245.344},{"x":98.773,"y":115.084},{"x":238.573,"y":81.207},{"x":219.326,"y":249.959},{"x":136.447,"y":98.871},{"x":243.859,"y":98.196},{"x":180.289,"y":243.533},{"x":141.22,"y":90.446},{"x":281.666,"y":115.85},{"x":165.773,"y":228.433},{"x":107.154,"y":92.912},{"x":304.96,"y":127.663},{"x":193.837,"y":210.226},{"x":76.628,"y":105.362},{"x":284.762,"y":129.28},{"x":229.568,"y":195.621},{"x":87.618,"y":123.207},{"x":246.2,"y":120.107},{"x":228.515,"y":190},{"x":126.453,"y":139.869},{"x":237.246,"y":103.522},{"x":191.988,"y":195.437}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.points) ? customData : DEFAULT_DATA\r
    const k = config.k || 3\r
    const points = config.points\r
\r
    const color = d3.scaleOrdinal(['#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#6366f1']).domain(d3.range(k))\r
\r
    // K-Means one-shot assignment using random initial centroids\r
    const shuffled = [...points].sort(() => Math.random() - 0.5)\r
    let centroids = shuffled.slice(0, k).map((p, i) => ({ x: p.x, y: p.y, id: i }))\r
\r
    function assign(pts, cents) {\r
      return pts.map(p => {\r
        let minDist = Infinity, closest = 0\r
        cents.forEach((c, i) => {\r
          const d = Math.sqrt((p.x - c.x) ** 2 + (p.y - c.y) ** 2)\r
          if (d < minDist) { minDist = d; closest = i }\r
        })\r
        return { ...p, cluster: closest }\r
      })\r
    }\r
\r
    function updateCentroids(assigned, k) {\r
      return d3.range(k).map(ci => {\r
        const group = assigned.filter(p => p.cluster === ci)\r
        return { id: ci, x: d3.mean(group, p => p.x) || 0, y: d3.mean(group, p => p.y) || 0 }\r
      })\r
    }\r
\r
    // Run 5 iterations\r
    let assigned = assign(points, centroids)\r
    for (let iter = 0; iter < 5; iter++) {\r
      centroids = updateCentroids(assigned, k)\r
      assigned = assign(points, centroids)\r
    }\r
\r
    const g = svg.append('g')\r
\r
    // Voronoi regions for cluster boundaries\r
    const voronoi = d3.Delaunay.from(centroids.map(c => [c.x, c.y])).voronoi([0, 0, W, H])\r
    centroids.forEach((c, i) => {\r
      g.append('path')\r
        .attr('d', voronoi.renderCell(i))\r
        .attr('fill', color(i))\r
        .attr('fill-opacity', 0.06)\r
        .attr('stroke', color(i))\r
        .attr('stroke-width', 1)\r
        .attr('stroke-opacity', 0.3)\r
        .attr('stroke-dasharray', '4,3')\r
    })\r
\r
    // Data points\r
    g.selectAll('.pt')\r
      .data(assigned)\r
      .join('circle')\r
      .attr('class', 'pt')\r
      .attr('cx', d => d.x).attr('cy', d => d.y)\r
      .attr('r', 4)\r
      .attr('fill', d => color(d.cluster)).attr('fill-opacity', 0.85)\r
      .attr('stroke', '#0f172a').attr('stroke-width', 0.5)\r
\r
    // Centroids (crosses)\r
    centroids.forEach(c => {\r
      const arm = 8\r
      g.append('line').attr('x1', c.x - arm).attr('x2', c.x + arm).attr('y1', c.y).attr('y2', c.y)\r
        .attr('stroke', color(c.id)).attr('stroke-width', 3)\r
      g.append('line').attr('x1', c.x).attr('x2', c.x).attr('y1', c.y - arm).attr('y2', c.y + arm)\r
        .attr('stroke', color(c.id)).attr('stroke-width', 3)\r
      g.append('circle').attr('cx', c.x).attr('cy', c.y).attr('r', 10)\r
        .attr('fill', 'none').attr('stroke', color(c.id)).attr('stroke-width', 2)\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text(\`K-Means Clustering (k=\${k}, Voronoi Decision Boundaries)\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};