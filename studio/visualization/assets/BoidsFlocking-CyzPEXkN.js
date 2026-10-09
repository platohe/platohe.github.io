var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'boids-flocking',\r
  title: 'Boids Flocking',\r
  desc: 'Boids Flocking — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BoidsFlocking',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","boids-flocking"],\r
}\r
\r
export default function BoidsFlocking({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"count":40,"maxSpeed":2.2,"maxForce":0.05}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const n = Math.min(80, config.count || 40)\r
    const maxSpeed = config.maxSpeed || 2.2\r
\r
    // Initialize boids\r
    const boids = Array.from({ length: n }, (_, i) => ({\r
      id: i,\r
      x: Math.random() * width,\r
      y: Math.random() * height,\r
      vx: (Math.random() - 0.5) * maxSpeed,\r
      vy: (Math.random() - 0.5) * maxSpeed,\r
    }))\r
\r
    const g = svg.append('g')\r
\r
    const boidElements = g.selectAll('.boid')\r
      .data(boids)\r
      .join('path')\r
      .attr('class', 'boid')\r
      .attr('d', 'M 0 -4 L 3 3 L 0 1.5 L -3 3 Z')\r
      .attr('fill', (d) => d.id % 2 === 0 ? '#38bdf8' : '#6366f1')\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 0.5)\r
\r
    const timer = d3.timer(() => {\r
      boids.forEach((boid) => {\r
        // Flocking rules (Separation, Alignment, Cohesion)\r
        let sepX = 0, sepY = 0, countSep = 0\r
        let alignX = 0, alignY = 0, countAlign = 0\r
        let cohX = 0, cohY = 0, countCoh = 0\r
\r
        boids.forEach(other => {\r
          if (other === boid) return\r
          const dx = other.x - boid.x\r
          const dy = other.y - boid.y\r
          const dist = Math.sqrt(dx * dx + dy * dy)\r
\r
          if (dist < 20 && dist > 0) {\r
            sepX -= (dx / dist) / dist\r
            sepY -= (dy / dist) / dist\r
            countSep++\r
          }\r
          if (dist < 50) {\r
            alignX += other.vx\r
            alignY += other.vy\r
            countAlign++\r
            cohX += other.x\r
            cohY += other.y\r
            countCoh++\r
          }\r
        })\r
\r
        if (countSep > 0) {\r
          boid.vx += sepX * 0.8\r
          boid.vy += sepY * 0.8\r
        }\r
        if (countAlign > 0) {\r
          boid.vx += (alignX / countAlign - boid.vx) * 0.05\r
          boid.vy += (alignY / countAlign - boid.vy) * 0.05\r
        }\r
        if (countCoh > 0) {\r
          const targetX = cohX / countCoh\r
          const targetY = cohY / countCoh\r
          boid.vx += (targetX - boid.x) * 0.005\r
          boid.vy += (targetY - boid.y) * 0.005\r
        }\r
\r
        // Limit speed\r
        const speed = Math.sqrt(boid.vx * boid.vx + boid.vy * boid.vy)\r
        if (speed > maxSpeed) {\r
          boid.vx = (boid.vx / speed) * maxSpeed\r
          boid.vy = (boid.vy / speed) * maxSpeed\r
        }\r
\r
        // Move & Wrap around bounds\r
        boid.x = (boid.x + boid.vx + width) % width\r
        boid.y = (boid.y + boid.vy + height) % height\r
      })\r
\r
      boidElements.attr('transform', d => {\r
        const angle = (Math.atan2(d.vy, d.vx) * 180) / Math.PI + 90\r
        return \`translate(\${d.x},\${d.y}) rotate(\${angle})\`\r
      })\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Boids Flocking Simulation (Reynolds Emergent Swarm)')\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};