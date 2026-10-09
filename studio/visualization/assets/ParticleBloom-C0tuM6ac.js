var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'particle-bloom',\r
  title: 'Particle Bloom',\r
  desc: 'Particle Bloom — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleBloom',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-bloom"],\r
}\r
\r
export default function ParticleBloom({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 10 }\r
    const { count = 10 } = config\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a1a0a')\r
\r
    const flowers = Array.from({ length: count }, (_, i) => ({\r
      x: 40 + (i % 5) * 80,\r
      y: 40 + Math.floor(i / 5) * 140,\r
      color: colors[i % colors.length],\r
      phase: i * 0.7\r
    }))\r
\r
    // Create persistent elements\r
    const petals = flowers.flatMap((f, fi) =>\r
      Array.from({ length: 6 }, (_, pi) => ({\r
        flowerIdx: fi,\r
        petalIdx: pi,\r
        x: f.x,\r
        y: f.y\r
      }))\r
    )\r
\r
    const petalElts = svg.append('g').selectAll('.petal')\r
      .data(petals)\r
      .join('ellipse')\r
      .attr('class', 'petal')\r
      .attr('rx', 8)\r
      .attr('ry', 5)\r
\r
    const centers = svg.append('g').selectAll('.center')\r
      .data(flowers)\r
      .join('circle')\r
      .attr('class', 'center')\r
      .attr('r', 5)\r
      .attr('fill', '#f59e0b')\r
      .attr('opacity', 0.7)\r
\r
    const timer = d3.timer(elapsed => {\r
      flowers.forEach((f, fi) => {\r
        const cycle = ((elapsed * 0.001 + f.phase) % (Math.PI * 2))\r
        const bloom = Math.max(0, Math.sin(cycle))\r
        const baseR = 5\r
\r
        petalElts\r
          .filter((d, i) => Math.floor(i / 6) === fi)\r
          .each(function(_, pi) {\r
            const pIdx = pi % 6\r
            const angle = (pIdx / 6) * Math.PI * 2 + cycle * 0.2\r
            const r = baseR * (0.3 + bloom * 0.7)\r
            const px = f.x + Math.cos(angle) * r * 2.5\r
            const py = f.y + Math.sin(angle) * r * 2.5\r
            d3.select(this)\r
              .attr('cx', px)\r
              .attr('cy', py)\r
              .attr('rx', r * 1.5)\r
              .attr('ry', r)\r
              .attr('fill', f.color)\r
              .attr('opacity', 0.5 + bloom * 0.3)\r
          })\r
\r
        centers\r
          .filter((d, i) => i === fi)\r
          .attr('cx', f.x)\r
          .attr('cy', f.y)\r
          .attr('r', baseR * (0.3 + bloom * 0.4))\r
      })\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};