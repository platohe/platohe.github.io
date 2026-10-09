var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'polar-area-chart',\r
  title: 'Polar Area Chart',\r
  desc: 'Polar Area Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PolarAreaChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","polar-area-chart"],\r
}\r
\r
export default function PolarAreaChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Polar area chart data\r
    const DEFAULT_DATA = [{"category":"A","value":45},{"category":"B","value":70},{"category":"C","value":35},{"category":"D","value":55},{"category":"E","value":65},{"category":"F","value":40}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const centerX = 200\r
    const centerY = 150\r
    const maxRadius = 100\r
\r
    const angleSlice = Math.PI * 2 / data.length\r
    const maxValue = d3.max(data, d => d.value)\r
\r
    const color = d3.scaleOrdinal()\r
      .domain(data.map(d => d.category))\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4'])\r
\r
    data.forEach((d, i) => {\r
      const startAngle = i * angleSlice - Math.PI / 2\r
      const endAngle = (i + 1) * angleSlice - Math.PI / 2\r
      const radius = (d.value / maxValue) * maxRadius\r
\r
      const arc = d3.arc()\r
        .innerRadius(20)\r
        .outerRadius(radius)\r
        .startAngle(startAngle)\r
        .endAngle(endAngle)\r
\r
      svg.append('path')\r
        .attr('d', arc)\r
        .attr('transform', \`translate(\${centerX},\${centerY})\`)\r
        .attr('fill', color(d.category))\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
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
      // Labels\r
      const midAngle = (startAngle + endAngle) / 2\r
      const labelRadius = radius + 20\r
      svg.append('text')\r
        .attr('x', centerX + Math.cos(midAngle) * labelRadius)\r
        .attr('y', centerY + Math.sin(midAngle) * labelRadius)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(d.category)\r
    })\r
\r
    // Center circle\r
    svg.append('circle')\r
      .attr('cx', centerX)\r
      .attr('cy', centerY)\r
      .attr('r', 15)\r
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
      .text('Polar Area Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};