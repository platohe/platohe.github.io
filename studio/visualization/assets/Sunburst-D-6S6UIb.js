var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'sunburst',\r
  title: 'Sunburst',\r
  desc: 'Sunburst — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'Sunburst',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","sunburst"],\r
}\r
\r
export default function Sunburst({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Sunburst data\r
    const DEFAULT_DATA = {"name":"Root","children":[{"name":"Category A","children":[{"name":"A1","value":30},{"name":"A2","value":25},{"name":"A3","value":20}]},{"name":"Category B","children":[{"name":"B1","value":35},{"name":"B2","value":28},{"name":"B3","value":22}]},{"name":"Category C","children":[{"name":"C1","value":40},{"name":"C2","value":18}]}]}\r
\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
\r
    const centerX = 200\r
    const centerY = 150\r
    const radius = 120\r
\r
    const root = d3.hierarchy(data)\r
      .sum(d => d.value)\r
      .sort((a, b) => b.value - a.value)\r
\r
    const partition = d3.partition()\r
      .size([2 * Math.PI, radius])\r
\r
    partition(root)\r
\r
    const arc = d3.arc()\r
      .startAngle(d => d.x0)\r
      .endAngle(d => d.x1)\r
      .innerRadius(d => d.y0)\r
      .outerRadius(d => d.y1)\r
\r
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, root.children?.length || 10))\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${centerX},\${centerY})\`)\r
\r
    // Draw arcs\r
    g.selectAll('path')\r
      .data(root.descendants())\r
      .join('path')\r
      .attr('d', arc)\r
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
    // Add labels for larger segments\r
    g.selectAll('text')\r
      .data(root.descendants().filter(d => (d.y1 - d.y0) > 20 && (d.x1 - d.x0) > 0.1))\r
      .join('text')\r
      .attr('transform', d => {\r
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI\r
        const y = (d.y0 + d.y1) / 2\r
        return \`rotate(\${x - 90}) translate(\${y},0) rotate(\${x < 180 ? 0 : 180})\`\r
      })\r
      .attr('dy', '0.35em')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '9px')\r
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
      .text('Sunburst Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};