var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'wind-rose',\r
  title: 'Wind Rose',\r
  desc: 'Wind Rose — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WindRose',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","wind-rose"],\r
}\r
\r
export default function WindRose({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"direction":"N","speed":15},{"direction":"NE","speed":12},{"direction":"E","speed":8},{"direction":"SE","speed":10},{"direction":"S","speed":5},{"direction":"SW","speed":7},{"direction":"W","speed":12},{"direction":"NW","speed":18}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const centerX = IW / 2\r
    const centerY = IH / 2\r
    const maxRadius = Math.min(IW, IH) / 2 - 30\r
    const maxSpeed = d3.max(data, d => d.speed) || 1\r
\r
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']\r
    const angleSlice = (2 * Math.PI) / directions.length\r
\r
    const radiusScale = d3.scaleLinear()\r
      .domain([0, maxSpeed])\r
      .range([0, maxRadius]);\r
\r
    // Draw concentric circles\r
    [0.25, 0.5, 0.75, 1.0].forEach(level => {\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY})\`)\r
        .attr('r', maxRadius * level)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 0.5)\r
        .attr('stroke-opacity', 0.5)\r
\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY - maxRadius * level + 3})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '9px')\r
        .text(Math.round(maxSpeed * level))\r
    })\r
\r
    // Draw wind rose petals\r
    data.forEach((d, i) => {\r
      const angle = i * angleSlice - Math.PI / 2\r
      const barLength = radiusScale(d.speed)\r
      const barColor = colors[i % colors.length]\r
\r
      const petalWidth = angleSlice * 0.4\r
      const startAngle = angle - petalWidth / 2\r
      const endAngle = angle + petalWidth / 2\r
\r
      const path = d3.arc()\r
        .innerRadius(0)\r
        .outerRadius(barLength)\r
        .startAngle(startAngle)\r
        .endAngle(endAngle)\r
\r
      svg.append('path')\r
        .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY})\`)\r
        .attr('d', path())\r
        .attr('fill', barColor)\r
        .attr('fill-opacity', 0.7)\r
        .attr('stroke', barColor)\r
        .attr('stroke-width', 0.5)\r
        .attr('stroke-opacity', 0.9)\r
    })\r
\r
    // Direction labels\r
    directions.forEach((dir, i) => {\r
      const angle = i * angleSlice - Math.PI / 2\r
      const labelRadius = maxRadius + 18\r
      const x = centerX + labelRadius * Math.cos(angle)\r
      const y = centerY + labelRadius * Math.sin(angle)\r
\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + x},\${M.top + y})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 'bold')\r
        .text(dir)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top - 10})\`)\r
      .text('Wind Rose - Directional Distribution')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};