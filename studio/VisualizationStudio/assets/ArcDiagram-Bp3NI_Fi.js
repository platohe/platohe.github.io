var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'arc-diagram',\r
  title: 'Arc Diagram',\r
  desc: 'Arc Diagram — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","arc-diagram"],\r
}\r
\r
export default function ArcDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Arc diagram data\r
    const DEFAULT_DATA = {"nodes":[{"id":0,"name":"Node 0"},{"id":1,"name":"Node 1"},{"id":2,"name":"Node 2"},{"id":3,"name":"Node 3"},{"id":4,"name":"Node 4"},{"id":5,"name":"Node 5"},{"id":6,"name":"Node 6"},{"id":7,"name":"Node 7"},{"id":8,"name":"Node 8"},{"id":9,"name":"Node 9"},{"id":10,"name":"Node 10"},{"id":11,"name":"Node 11"},{"id":12,"name":"Node 12"},{"id":13,"name":"Node 13"},{"id":14,"name":"Node 14"}],"links":[{"source":9,"target":6,"value":0.852},{"source":10,"target":2,"value":0.527},{"source":4,"target":9,"value":0.865},{"source":7,"target":3,"value":0.882},{"source":11,"target":4,"value":0.197},{"source":7,"target":10,"value":0.611},{"source":0,"target":7,"value":0.837},{"source":0,"target":8,"value":0.032},{"source":4,"target":0,"value":0.186},{"source":11,"target":7,"value":0.027},{"source":2,"target":12,"value":0.488},{"source":12,"target":4,"value":0.45},{"source":8,"target":3,"value":0.646},{"source":3,"target":4,"value":0.739},{"source":12,"target":7,"value":0.204},{"source":9,"target":10,"value":0.693},{"source":13,"target":1,"value":0.944},{"source":6,"target":14,"value":0.137}]}\r
\r
    const data = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const nodeX = d3.scalePoint()\r
      .domain(data.nodes.map(d => d.id))\r
      .range([0, width])\r
\r
    // Color by node index (ids may be strings → index lookup keeps scale numeric)\r
    const idIndex = new Map(data.nodes.map((n, i) => [n.id, i]))\r
    const color = d3.scaleSequential(d3.interpolateRainbow)\r
      .domain([0, data.nodes.length - 1])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Draw links\r
    data.links.forEach(link => {\r
      const sourceX = nodeX(link.source)\r
      const targetX = nodeX(link.target)\r
      const midX = (sourceX + targetX) / 2\r
      const linkHeight = link.value * 50 + 20\r
\r
      const path = d3.path()\r
      path.moveTo(sourceX, height / 2)\r
      path.quadraticCurveTo(midX, height / 2 - linkHeight, targetX, height / 2)\r
\r
      svg.append('path')\r
        .attr('d', path.toString())\r
        .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', color(idIndex.get(link.source)))\r
        .attr('stroke-width', Math.max(1, link.value * 3))\r
        .attr('opacity', 0.6)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 1)\r
            .attr('stroke-width', Math.max(2, link.value * 4))\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.6)\r
            .attr('stroke-width', Math.max(1, link.value * 3))\r
        })\r
    })\r
\r
    // Draw nodes\r
    g.selectAll('.node')\r
      .data(data.nodes)\r
      .join('circle')\r
      .attr('cx', d => nodeX(d.id))\r
      .attr('cy', height / 2)\r
      .attr('r', 6)\r
      .attr('fill', d => color(idIndex.get(d.id)))\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 10)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 6)\r
      })\r
\r
    // Add labels\r
    g.selectAll('.label')\r
      .data(data.nodes)\r
      .join('text')\r
      .attr('x', d => nodeX(d.id))\r
      .attr('y', height / 2 + 25)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '9px')\r
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
      .text('Arc Diagram')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};