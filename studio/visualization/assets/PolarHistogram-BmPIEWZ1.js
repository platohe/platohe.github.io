var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'polar-histogram',\r
  title: 'Polar Histogram',\r
  desc: 'Polar Histogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PolarHistogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","polar-histogram"],\r
}\r
\r
export default function PolarHistogram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"direction":"N","angle":0,"frequency":7.607},{"direction":"NNE","angle":22.5,"frequency":12.142},{"direction":"NE","angle":45,"frequency":19.158},{"direction":"ENE","angle":67.5,"frequency":21.067},{"direction":"E","angle":90,"frequency":19.043},{"direction":"ESE","angle":112.5,"frequency":19.89},{"direction":"SE","angle":135,"frequency":15.096},{"direction":"SSE","angle":157.5,"frequency":12.438},{"direction":"S","angle":180,"frequency":10.01},{"direction":"SSW","angle":202.5,"frequency":13.029},{"direction":"SW","angle":225,"frequency":16.095},{"direction":"WSW","angle":247.5,"frequency":22.615},{"direction":"W","angle":270,"frequency":22.421},{"direction":"WNW","angle":292.5,"frequency":18.21},{"direction":"NW","angle":315,"frequency":14.021},{"direction":"NNW","angle":337.5,"frequency":10.916}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 8\r
    const innerR = 18\r
    const outerR = Math.min(width, height) / 2 - 32\r
\r
    const maxVal = d3.max(data, d => d.frequency) || 20\r
    const rScale = d3.scaleLinear().domain([0, maxVal]).range([innerR, outerR])\r
    const n = data.length\r
    const sliceAngle = (2 * Math.PI) / n\r
    const color = d3.scaleSequential(d3.interpolateWarm).domain([0, n])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`);\r
\r
    // Concentric guide circles\r
    [0.25, 0.5, 0.75, 1.0].forEach(t => {\r
      const r = innerR + t * (outerR - innerR)\r
      g.append('circle').attr('r', r)\r
        .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4)\r
      g.append('text').attr('x', 3).attr('y', -r - 2)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '6px')\r
        .text(Math.round(maxVal * t))\r
    })\r
\r
    // Pie slices\r
    data.forEach((d, i) => {\r
      const startAngle = (i / n) * 2 * Math.PI - Math.PI / 2 - sliceAngle / 2\r
      const endAngle = startAngle + sliceAngle\r
\r
      const arc = d3.arc()\r
        .innerRadius(innerR)\r
        .outerRadius(rScale(d.frequency))\r
        .startAngle(startAngle)\r
        .endAngle(endAngle)\r
        .padAngle(0.015)\r
\r
      g.append('path')\r
        .attr('d', arc())\r
        .attr('fill', color(i))\r
        .attr('fill-opacity', 0.85)\r
        .attr('stroke', 'var(--bg-primary)').attr('stroke-width', 0.5)\r
    })\r
\r
    // Direction labels\r
    data.forEach((d, i) => {\r
      const a = (i / n) * 2 * Math.PI - Math.PI / 2\r
      const labelR = outerR + 12\r
      g.append('text')\r
        .attr('x', labelR * Math.cos(a)).attr('y', labelR * Math.sin(a) + 2.5)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '6.5px').attr('font-weight', '500')\r
        .text(d.direction)\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Polar Wind Rose Histogram (16-Point Compass)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};