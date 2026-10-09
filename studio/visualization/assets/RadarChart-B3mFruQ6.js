var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'radar-chart',\r
  title: 'Radar Chart',\r
  desc: 'Radar Chart — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["fun","radar-chart"],\r
}\r
\r
export default function RadarChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Radar chart data\r
    const DEFAULT_DATA = [{"category":"Team A","metrics":{"Speed":80,"Strength":70,"Intelligence":90,"Endurance":60,"Agility":85}},{"category":"Team B","metrics":{"Speed":70,"Strength":85,"Intelligence":75,"Endurance":80,"Agility":70}}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const dimensions = ['Speed', 'Strength', 'Intelligence', 'Endurance', 'Agility']\r
    const colors = ['#6366f1', '#f59e0b']\r
\r
    const centerX = 200\r
    const centerY = 150\r
    const radius = 100\r
\r
    const angleSlice = Math.PI * 2 / dimensions.length\r
\r
    // Draw grid\r
    const levels = 5\r
    for (let i = 1; i <= levels; i++) {\r
      const levelRadius = radius * (i / levels)\r
      const points = dimensions.map((_, d) => ({\r
        x: centerX + levelRadius * Math.cos(angleSlice * d - Math.PI / 2),\r
        y: centerY + levelRadius * Math.sin(angleSlice * d - Math.PI / 2)\r
      }))\r
\r
      const line = d3.line()\r
        .x(d => d.x)\r
        .y(d => d.y)\r
        .curve(d3.curveLinearClosed)\r
\r
      svg.append('path')\r
        .datum(points)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1)\r
        .attr('opacity', 0.5)\r
    }\r
\r
    // Draw axes\r
    dimensions.forEach((d, i) => {\r
      const x = centerX + radius * Math.cos(angleSlice * i - Math.PI / 2)\r
      const y = centerY + radius * Math.sin(angleSlice * i - Math.PI / 2)\r
\r
      svg.append('line')\r
        .attr('x1', centerX)\r
        .attr('y1', centerY)\r
        .attr('x2', x)\r
        .attr('y2', y)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1)\r
\r
      // Labels\r
      const labelX = centerX + (radius + 20) * Math.cos(angleSlice * i - Math.PI / 2)\r
      const labelY = centerY + (radius + 20) * Math.sin(angleSlice * i - Math.PI / 2)\r
      \r
      svg.append('text')\r
        .attr('x', labelX)\r
        .attr('y', labelY)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(d)\r
    })\r
\r
    // Draw data polygons\r
    data.forEach((series, seriesIndex) => {\r
      const points = dimensions.map((dim, i) => {\r
        const value = series.metrics[dim] || 50\r
        const r = radius * (value / 100)\r
        return {\r
          x: centerX + r * Math.cos(angleSlice * i - Math.PI / 2),\r
          y: centerY + r * Math.sin(angleSlice * i - Math.PI / 2)\r
        }\r
      })\r
\r
      const line = d3.line()\r
        .x(d => d.x)\r
        .y(d => d.y)\r
        .curve(d3.curveLinearClosed)\r
\r
      svg.append('path')\r
        .datum(points)\r
        .attr('d', line)\r
        .attr('fill', colors[seriesIndex])\r
        .attr('opacity', 0.3)\r
        .attr('stroke', colors[seriesIndex])\r
        .attr('stroke-width', 2)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.6)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.3)\r
        })\r
\r
      // Draw points\r
      points.forEach((point) => {\r
        svg.append('circle')\r
          .attr('cx', point.x)\r
          .attr('cy', point.y)\r
          .attr('r', 4)\r
          .attr('fill', colors[seriesIndex])\r
      })\r
    })\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', 'translate(300, 260)')\r
\r
    data.forEach((series, i) => {\r
      const legendItem = legend.append('g')\r
        .attr('transform', \`translate(0, \${i * 20})\`)\r
\r
      legendItem.append('rect')\r
        .attr('width', 16)\r
        .attr('height', 16)\r
        .attr('fill', colors[i])\r
        .attr('rx', 2)\r
\r
      legendItem.append('text')\r
        .attr('x', 22)\r
        .attr('y', 12)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(series.category)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Radar Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};