var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'topography-contours',\r
  title: 'Topography Contours',\r
  desc: 'Topography Contours — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TopographyContours',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","topography-contours"],\r
}\r
\r
export default function TopographyContours({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"peaks":[{"x":120,"y":110,"height":100,"spread":45},{"x":260,"y":170,"height":85,"spread":55},{"x":180,"y":220,"height":70,"spread":40}],"nThresholds":14}\r
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
    const nx = 80\r
    const ny = 60\r
    const values = new Float64Array(nx * ny)\r
\r
    const peaks = config.peaks || DEFAULT_DATA.peaks\r
\r
    // Synthesize elevation grid\r
    for (let j = 0; j < ny; ++j) {\r
      for (let i = 0; i < nx; ++i) {\r
        const px = (i / nx) * width\r
        const py = (j / ny) * height\r
        let val = 0\r
\r
        peaks.forEach(p => {\r
          const dx = px - p.x\r
          const dy = py - p.y\r
          const distSq = dx * dx + dy * dy\r
          val += p.height * Math.exp(-distSq / (2 * p.spread * p.spread))\r
        })\r
\r
        values[j * nx + i] = val\r
      }\r
    }\r
\r
    const contours = d3.contours()\r
      .size([nx, ny])\r
      .thresholds(config.nThresholds || 14)(values)\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateYlGnBu)\r
      .domain([0, 100])\r
\r
    const transformPath = d3.geoIdentity()\r
      .scale(width / nx)\r
\r
    const path = d3.geoPath(transformPath)\r
\r
    const g = svg.append('g')\r
\r
    // Render hypsometric tinted contour polygons\r
    g.selectAll('path')\r
      .data(contours)\r
      .join('path')\r
      .attr('d', path)\r
      .attr('fill', d => colorScale(d.value))\r
      .attr('stroke', 'rgba(0,0,0,0.18)')\r
      .attr('stroke-width', 0.6)\r
\r
    // Elevation Peaks & Labels\r
    peaks.forEach((p, idx) => {\r
      svg.append('circle')\r
        .attr('cx', p.x)\r
        .attr('cy', p.y)\r
        .attr('r', 2.5)\r
        .attr('fill', '#ffffff')\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1)\r
\r
      svg.append('text')\r
        .attr('x', p.x)\r
        .attr('y', p.y - 6)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', '#0f172a')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', '700')\r
        .text(\`Peak \${idx + 1}: \${p.height}m\`)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Marching Squares Topographic Elevation Map')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};