var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'radial-histogram',\r
  title: 'Radial Histogram',\r
  desc: 'Radial Histogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialHistogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","radial-histogram"],\r
}\r
\r
export default function RadialHistogram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Radial histogram data\r
    const DEFAULT_DATA = [{"angle":0,"value":60.11},{"angle":22.5,"value":44.829},{"angle":45,"value":85.247},{"angle":67.5,"value":66.973},{"angle":90,"value":17.481},{"angle":112.5,"value":52.659},{"angle":135,"value":27.323},{"angle":157.5,"value":62.474},{"angle":180,"value":86.547},{"angle":202.5,"value":47.232},{"angle":225,"value":24.992},{"angle":247.5,"value":88.206},{"angle":270,"value":74.574},{"angle":292.5,"value":30.7},{"angle":315,"value":19.725},{"angle":337.5,"value":50.073}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const centerX = 200\r
    const centerY = 150\r
    const innerRadius = 30\r
    const outerRadius = 120\r
\r
    const color = d3.scaleSequential(d3.interpolateViridis)\r
      .domain([0, d3.max(data, d => d.value)])\r
\r
    data.forEach((d) => {\r
      const angle = (d.angle - 90) * Math.PI / 180\r
      const angleEnd = ((d.angle + 22.5) - 90) * Math.PI / 180\r
\r
      const barHeight = (d.value / d3.max(data, d => d.value)) * (outerRadius - innerRadius)\r
\r
      // Create arc for each bar\r
      const arc = d3.arc()\r
        .innerRadius(innerRadius)\r
        .outerRadius(innerRadius + barHeight)\r
        .startAngle(angle)\r
        .endAngle(angleEnd)\r
\r
      svg.append('path')\r
        .attr('d', arc)\r
        .attr('transform', \`translate(\${centerX},\${centerY})\`)\r
        .attr('fill', color(d.value))\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.8)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 1)\r
        })\r
\r
      // Add value label\r
      const midAngle = (angle + angleEnd) / 2\r
      const labelRadius = innerRadius + barHeight + 15\r
      svg.append('text')\r
        .attr('x', centerX + Math.cos(midAngle) * labelRadius)\r
        .attr('y', centerY + Math.sin(midAngle) * labelRadius)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '9px')\r
        .text(Math.round(d.value))\r
    })\r
\r
    // Center circle\r
    svg.append('circle')\r
      .attr('cx', centerX)\r
      .attr('cy', centerY)\r
      .attr('r', innerRadius - 5)\r
      .attr('fill', 'var(--bg-secondary)')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 2)\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Radial Histogram')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};