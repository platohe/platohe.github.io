var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'force-graph',\r
  title: 'Force Graph',\r
  desc: 'Force Graph — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ForceGraph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["networks","force-graph"],\r
}\r
\r
export default function ForceGraph({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"id":0,"group":0,"label":"A"},{"id":1,"group":1,"label":"B"},{"id":2,"group":2,"label":"C"},{"id":3,"group":3,"label":"D"},{"id":4,"group":0,"label":"A"},{"id":5,"group":1,"label":"B"},{"id":6,"group":2,"label":"C"},{"id":7,"group":3,"label":"D"},{"id":8,"group":0,"label":"A"},{"id":9,"group":1,"label":"B"},{"id":10,"group":2,"label":"C"},{"id":11,"group":3,"label":"D"},{"id":12,"group":0,"label":"A"},{"id":13,"group":1,"label":"B"},{"id":14,"group":2,"label":"C"},{"id":15,"group":3,"label":"D"},{"id":16,"group":0,"label":"A"},{"id":17,"group":1,"label":"B"},{"id":18,"group":2,"label":"C"},{"id":19,"group":3,"label":"D"},{"id":20,"group":0,"label":"A"},{"id":21,"group":1,"label":"B"},{"id":22,"group":2,"label":"C"},{"id":23,"group":3,"label":"D"},{"id":24,"group":0,"label":"A"},{"id":25,"group":1,"label":"B"},{"id":26,"group":2,"label":"C"},{"id":27,"group":3,"label":"D"},{"id":28,"group":0,"label":"A"},{"id":29,"group":1,"label":"B"}]\r
    const nodes = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
    const links = []\r
    nodes.forEach((n, i) => {\r
      const numLinks = 1 + Math.floor(Math.random() * 3)\r
      for (let j = 0; j < numLinks; j++) {\r
        const target = Math.floor(Math.random() * nodes.length)\r
        if (target !== i) links.push({ source: i, target })\r
      }\r
    })\r
\r
    const width = 380, height = 265\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']\r
\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id((d) => d.id).distance(50))\r
      .force('charge', d3.forceManyBody().strength(-250))\r
      .force('center', d3.forceCenter(width / 2 + 50, height / 2 + 15))\r
      .force('collision', d3.forceCollide().radius(15))\r
\r
    const link = svg.append('g')\r
      .selectAll('line')\r
      .data(links)\r
      .join('line')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
      .attr('stroke-opacity', 0.5)\r
\r
    const node = svg.append('g')\r
      .selectAll('circle')\r
      .data(nodes)\r
      .join('circle')\r
      .attr('r', (d) => d.group === 0 ? 10 : 7)\r
      .attr('fill', (d) => color[d.group])\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
    simulation.on('tick', () => {\r
      link.attr('x1', (d) => d.source.x + 50).attr('y1', (d) => d.source.y + 15)\r
        .attr('x2', (d) => d.target.x + 50).attr('y2', (d) => d.target.y + 15)\r
      node.attr('cx', (d) => d.x + 50).attr('cy', (d) => d.y + 15)\r
    })\r
\r
    setTimeout(() => simulation.stop(), 3000)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};