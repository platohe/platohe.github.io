var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'spiral-heatmap',\r
  title: 'Spiral Heatmap',\r
  desc: 'Spiral Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpiralHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","spiral-heatmap"],\r
}\r
\r
export default function SpiralHeatmap({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.SpiralHeatmap\r
    const width = 500\r
    const height = 500\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '10px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const color = d3.scaleSequential(d3.interpolateInferno)\r
      .domain([0, d3.max(chartData, d => d.value) || 100])\r
\r
    const startRadius = 30\r
    const spiralSpacing = 16\r
    const angleStep = 0.25\r
\r
    chartData.forEach((d, i) => {\r
      const angle = i * angleStep\r
      const r = startRadius + (angle / (2 * Math.PI)) * spiralSpacing\r
      const px = r * Math.cos(angle)\r
      const py = r * Math.sin(angle)\r
\r
      svg.append('rect')\r
        .attr('x', px - 6)\r
        .attr('y', py - 6)\r
        .attr('width', 12)\r
        .attr('height', 12)\r
        .attr('fill', color(d.value))\r
        .attr('rx', 2)\r
        .attr('transform', \`rotate(\${angle * 180 / Math.PI}, \${px}, \${py})\`)\r
\r
      if (i % 12 === 0) {\r
        svg.append('text')\r
          .attr('x', px)\r
          .attr('y', py)\r
          .attr('fill', '#cbd5e1')\r
          .attr('text-anchor', 'middle')\r
          .style('font-size', '8px')\r
          .text(d.label || i)\r
      }\r
    })\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};