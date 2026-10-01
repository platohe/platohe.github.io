var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'dot-density-map',\r
  title: 'Dot Density Map',\r
  desc: 'Dot Density Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DotDensityMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dot-density-map"],\r
}\r
\r
export default function DotDensityMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Dot density map data\r
    const DEFAULT_DATA = [{"region":"North","population":5000,"area":100},{"region":"South","population":8000,"area":150},{"region":"East","population":6500,"area":120},{"region":"West","population":4500,"area":90}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const regions = [\r
      { name: 'North', x: 0, y: 0, w: width / 2, h: height / 2 },\r
      { name: 'South', x: 0, y: height / 2, w: width / 2, h: height / 2 },\r
      { name: 'East', x: width / 2, y: 0, w: width / 2, h: height / 2 },\r
      { name: 'West', x: width / 2, y: height / 2, w: width / 2, h: height / 2 },\r
    ]\r
\r
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']\r
\r
    regions.forEach((region, i) => {\r
      const regionData = data.find(d => d.region === region.name)\r
      if (!regionData) return\r
\r
      // Draw region boundary\r
      g.append('rect')\r
        .attr('x', region.x)\r
        .attr('y', region.y)\r
        .attr('width', region.w)\r
        .attr('height', region.h)\r
        .attr('fill', colors[i])\r
        .attr('opacity', 0.1)\r
        .attr('stroke', colors[i])\r
        .attr('stroke-width', 2)\r
\r
      // Add dots based on population density\r
      const density = regionData.population / regionData.area\r
      const numDots = Math.min(50, Math.floor(density / 20))\r
\r
      for (let j = 0; j < numDots; j++) {\r
        const dotX = region.x + Math.random() * (region.w - 10) + 5\r
        const dotY = region.y + Math.random() * (region.h - 10) + 5\r
\r
        g.append('circle')\r
          .attr('cx', dotX)\r
          .attr('cy', dotY)\r
          .attr('r', 2)\r
          .attr('fill', colors[i])\r
          .attr('opacity', 0.7)\r
      }\r
\r
      // Add region label\r
      g.append('text')\r
        .attr('x', region.x + region.w / 2)\r
        .attr('y', region.y + 15)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', colors[i])\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 600)\r
        .text(region.name)\r
\r
      // Add population count\r
      g.append('text')\r
        .attr('x', region.x + region.w / 2)\r
        .attr('y', region.y + region.h - 15)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(\`\${regionData.population.toLocaleString()}\`)\r
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
      .text('Dot Density Map')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};