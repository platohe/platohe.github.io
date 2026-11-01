var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'icicle-chart',\r
  title: 'Icicle Chart',\r
  desc: 'Icicle Chart — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'IcicleChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","icicle-chart"],\r
}\r
\r
export default function IcicleChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Icicle chart data\r
    const DEFAULT_DATA = {"name":"Root","children":[{"name":"Section A","children":[{"name":"A1","value":30},{"name":"A2","value":25},{"name":"A3","value":20}]},{"name":"Section B","children":[{"name":"B1","value":35},{"name":"B2","value":28},{"name":"B3","value":22}]},{"name":"Section C","children":[{"name":"C1","value":40},{"name":"C2","value":18}]}]}\r
\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const root = d3.hierarchy(data)\r
      .sum(d => d.value)\r
      .sort((a, b) => b.value - a.value)\r
\r
    const partition = d3.partition()\r
      .size([width, height])\r
\r
    partition(root)\r
\r
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, root.children?.length || 10))\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Draw rectangles\r
    g.selectAll('rect')\r
      .data(root.descendants())\r
      .join('rect')\r
      .attr('x', d => d.x0)\r
      .attr('y', d => d.y0)\r
      .attr('width', d => d.x1 - d.x0)\r
      .attr('height', d => d.y1 - d.y0)\r
      .attr('fill', d => {\r
        while (d.depth > 1) d = d.parent\r
        return color(d.data.name)\r
      })\r
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
    // Add labels for larger cells\r
    g.selectAll('text')\r
      .data(root.descendants().filter(d => (d.x1 - d.x0) > 30 && (d.y1 - d.y0) > 15))\r
      .join('text')\r
      .attr('x', d => (d.x0 + d.x1) / 2)\r
      .attr('y', d => (d.y0 + d.y1) / 2)\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text(d => d.data.name)\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Icicle Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};