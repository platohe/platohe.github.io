var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'epicyclic-gearing',\r
  title: 'Epicyclic Gearing',\r
  desc: 'Epicyclic Gearing — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EpicyclicGearing',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","epicyclic-gearing"],\r
}\r
\r
export default function EpicyclicGearing({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"teethSun":16,"teethPlanet":12,"teethRing":40,"speed":0.001}\r
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
    const cx = width / 2\r
    const cy = height / 2\r
\r
    const radius = 5\r
    const toothRadius = 4\r
    const holeRadius = 8\r
\r
    const sunTeeth = config.teethSun || 16\r
    const planetTeeth = config.teethPlanet || 12\r
    const ringTeeth = config.teethRing || (sunTeeth + 2 * planetTeeth)\r
\r
    const rSun = radius * sunTeeth\r
    const rPlanet = radius * planetTeeth\r
    const rRing = radius * ringTeeth\r
    const rOrbit = rSun + rPlanet\r
\r
    // Path generator for an involute gear\r
    function gearPath({ teeth, radius: r, toothRadius: tr, holeRadius: hr, isAnnular = false }) {\r
      const n = teeth\r
      const angle = (2 * Math.PI) / n\r
      const points = []\r
\r
      if (!isAnnular) {\r
        for (let i = 0; i < n; i++) {\r
          const a = i * angle\r
          // Tooth root\r
          points.push([Math.cos(a - angle / 4) * (r - tr), Math.sin(a - angle / 4) * (r - tr)])\r
          // Tooth tip 1\r
          points.push([Math.cos(a - angle / 8) * (r + tr), Math.sin(a - angle / 8) * (r + tr)])\r
          // Tooth tip 2\r
          points.push([Math.cos(a + angle / 8) * (r + tr), Math.sin(a + angle / 8) * (r + tr)])\r
          // Tooth root 2\r
          points.push([Math.cos(a + angle / 4) * (r - tr), Math.sin(a + angle / 4) * (r - tr)])\r
        }\r
        let d = 'M' + points.map(p => p.join(',')).join('L') + 'Z'\r
        if (hr > 0) {\r
          d += \` M \${hr},0 A \${hr},\${hr} 0 1,0 \${-hr},0 A \${hr},\${hr} 0 1,0 \${hr},0 Z\`\r
        }\r
        return d\r
      } else {\r
        // Annular / Ring gear: external ring with internal teeth\r
        const outerR = r + tr + 20\r
        let d = \`M 0,\${-outerR} A \${outerR},\${outerR} 0 1,1 0,\${outerR} A \${outerR},\${outerR} 0 1,1 0,\${-outerR} Z\`\r
        const innerPoints = []\r
        for (let i = 0; i < n; i++) {\r
          const a = i * angle\r
          innerPoints.push([Math.cos(a - angle / 4) * (r + tr), Math.sin(a - angle / 4) * (r + tr)])\r
          innerPoints.push([Math.cos(a - angle / 8) * (r - tr), Math.sin(a - angle / 8) * (r - tr)])\r
          innerPoints.push([Math.cos(a + angle / 8) * (r - tr), Math.sin(a + angle / 8) * (r - tr)])\r
          innerPoints.push([Math.cos(a + angle / 4) * (r + tr), Math.sin(a + angle / 4) * (r + tr)])\r
        }\r
        d += ' M' + innerPoints.map(p => p.join(',')).join('L') + 'Z'\r
        return d\r
      }\r
    }\r
\r
    const scaleRatio = 120 / (rRing + 20)\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${cx},\${cy}) scale(\${scaleRatio})\`)\r
\r
    // Ring Gear\r
    g.append('path')\r
      .attr('d', gearPath({ teeth: ringTeeth, radius: rRing, toothRadius, holeRadius: 0, isAnnular: true }))\r
      .attr('fill', '#334155')\r
      .attr('fill-rule', 'evenodd')\r
      .attr('stroke', '#64748b')\r
      .attr('stroke-width', 1.5)\r
\r
    // Sun Gear\r
    const sunPath = g.append('path')\r
      .attr('d', gearPath({ teeth: sunTeeth, radius: rSun, toothRadius, holeRadius: 10 }))\r
      .attr('fill', '#ef4444')\r
      .attr('stroke', '#f87171')\r
      .attr('stroke-width', 1.5)\r
\r
    // 3 Planet Gears\r
    const planetCount = 3\r
    const planets = []\r
    for (let p = 0; p < planetCount; p++) {\r
      const pg = g.append('g')\r
      pg.append('path')\r
        .attr('d', gearPath({ teeth: planetTeeth, radius: rPlanet, toothRadius, holeRadius: 6 }))\r
        .attr('fill', '#3b82f6')\r
        .attr('stroke', '#60a5fa')\r
        .attr('stroke-width', 1.5)\r
      planets.push({ g: pg, index: p })\r
    }\r
\r
    // Animation timer\r
    const speed = config.speed || 0.0008\r
    const timer = d3.timer((elapsed) => {\r
      const angle = elapsed * speed\r
\r
      // Sun rotation\r
      sunPath.attr('transform', \`rotate(\${(angle * 180) / Math.PI})\`)\r
\r
      // Planets rotation & orbit\r
      planets.forEach(({ g: pg, index }) => {\r
        const orbitAngle = (angle * sunTeeth) / (sunTeeth + ringTeeth) + (index * 2 * Math.PI) / planetCount\r
        const px = rOrbit * Math.cos(orbitAngle)\r
        const py = rOrbit * Math.sin(orbitAngle)\r
        const spinAngle = -((angle * sunTeeth) / planetTeeth) * (ringTeeth / (sunTeeth + ringTeeth))\r
\r
        pg.attr('transform', \`translate(\${px},\${py}) rotate(\${(spinAngle * 180) / Math.PI})\`)\r
      })\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 20)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Epicyclic Gearing (Planetary Gears)')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 31)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Involute Gear Train Physics Simulation')\r
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