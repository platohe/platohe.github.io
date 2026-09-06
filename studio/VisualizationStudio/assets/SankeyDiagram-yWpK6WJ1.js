var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { sankey, sankeyLinkHorizontal } from 'd3-sankey'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-diagram',\r
  title: 'Sankey Diagram',\r
  desc: 'Sankey Diagram — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-diagram"],\r
}\r
\r
export default function SankeyDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Sankey diagram data\r
    const DEFAULT_DATA = {"nodes":[{"name":"Source A"},{"name":"Source B"},{"name":"Source C"},{"name":"Target X"},{"name":"Target Y"},{"name":"Target Z"}],"links":[{"source":0,"target":3,"value":30},{"source":0,"target":4,"value":20},{"source":1,"target":3,"value":25},{"source":1,"target":5,"value":15},{"source":2,"target":4,"value":35},{"source":2,"target":5,"value":20}]}\r
\r
    const data = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 80 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const sankeyGenerator = sankey()\r
      .nodeWidth(20)\r
      .nodePadding(15)\r
      .size([width, height])\r
\r
    // d3-sankey mutates the input graph (adds sourceLinks/targetLinks, converts\r
    // link indices to node refs) — clone so the shared default/preview data stays clean\r
    const graph = sankeyGenerator(JSON.parse(JSON.stringify(data)))\r
\r
    const color = d3.scaleOrdinal()\r
      .domain(graph.nodes.map(d => d.name))\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4'])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Draw links\r
    g.selectAll('.link')\r
      .data(graph.links)\r
      .join('path')\r
      .attr('class', 'link')\r
      .attr('d', sankeyLinkHorizontal())\r
      .attr('stroke', d => color(d.source.name))\r
      .attr('stroke-width', d => Math.max(1, d.width))\r
      .attr('fill', 'none')\r
      .attr('opacity', 0.4)\r
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
          .attr('opacity', 0.4)\r
      })\r
\r
    // Draw nodes\r
    g.selectAll('.node')\r
      .data(graph.nodes)\r
      .join('rect')\r
      .attr('class', 'node')\r
      .attr('x', d => d.x0)\r
      .attr('y', d => d.y0)\r
      .attr('width', d => d.x1 - d.x0)\r
      .attr('height', d => d.y1 - d.y0)\r
      .attr('fill', d => color(d.name))\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .attr('rx', 2)\r
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
    // Add labels\r
    g.selectAll('.label')\r
      .data(graph.nodes)\r
      .join('text')\r
      .attr('x', d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)\r
      .attr('y', d => (d.y1 + d.y0) / 2)\r
      .attr('dy', '0.35em')\r
      .attr('text-anchor', d => d.x0 < width / 2 ? 'start' : 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text(d => d.name)\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Sankey Diagram')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};