var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'force-graph-canvas',\r
  title: 'Force Graph Canvas',\r
  desc: 'Force Graph Canvas — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ForceGraphCanvas',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["networks","force-graph-canvas"],\r
}\r
\r
export default function ForceGraphCanvas({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"id":0,"group":0,"label":"A"},{"id":1,"group":1,"label":"B"},{"id":2,"group":2,"label":"C"},{"id":3,"group":3,"label":"D"},{"id":4,"group":0,"label":"A"},{"id":5,"group":1,"label":"B"},{"id":6,"group":2,"label":"C"},{"id":7,"group":3,"label":"D"},{"id":8,"group":0,"label":"A"},{"id":9,"group":1,"label":"B"},{"id":10,"group":2,"label":"C"},{"id":11,"group":3,"label":"D"},{"id":12,"group":0,"label":"A"},{"id":13,"group":1,"label":"B"},{"id":14,"group":2,"label":"C"},{"id":15,"group":3,"label":"D"},{"id":16,"group":0,"label":"A"},{"id":17,"group":1,"label":"B"},{"id":18,"group":2,"label":"C"},{"id":19,"group":3,"label":"D"},{"id":20,"group":0,"label":"A"},{"id":21,"group":1,"label":"B"},{"id":22,"group":2,"label":"C"},{"id":23,"group":3,"label":"D"},{"id":24,"group":0,"label":"A"},{"id":25,"group":1,"label":"B"},{"id":26,"group":2,"label":"C"},{"id":27,"group":3,"label":"D"},{"id":28,"group":0,"label":"A"},{"id":29,"group":1,"label":"B"},{"id":30,"group":2,"label":"C"},{"id":31,"group":3,"label":"D"},{"id":32,"group":0,"label":"A"},{"id":33,"group":1,"label":"B"},{"id":34,"group":2,"label":"C"},{"id":35,"group":3,"label":"D"},{"id":36,"group":0,"label":"A"},{"id":37,"group":1,"label":"B"},{"id":38,"group":2,"label":"C"},{"id":39,"group":3,"label":"D"},{"id":40,"group":0,"label":"A"},{"id":41,"group":1,"label":"B"},{"id":42,"group":2,"label":"C"},{"id":43,"group":3,"label":"D"},{"id":44,"group":0,"label":"A"},{"id":45,"group":1,"label":"B"},{"id":46,"group":2,"label":"C"},{"id":47,"group":3,"label":"D"},{"id":48,"group":0,"label":"A"},{"id":49,"group":1,"label":"B"}]\r
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
    // Create canvas (must be wrapped in foreignObject — canvas is not an SVG element)\r
    const canvas = svg.append('foreignObject')\r
      .attr('x', 10)\r
      .attr('y', 17)\r
      .attr('width', width)\r
      .attr('height', height)\r
      .append('xhtml:canvas')\r
        .attr('width', width)\r
        .attr('height', height)\r
        .attr('style', 'display: block;')\r
\r
    const context = canvas.node()?.getContext?.('2d')\r
    if (!context) return\r
\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id((d) => d.id).distance(50))\r
      .force('charge', d3.forceManyBody().strength(-200))\r
      .force('center', d3.forceCenter(width / 2, height / 2))\r
      .force('collision', d3.forceCollide().radius(12))\r
\r
    // Draw function\r
    function draw() {\r
      if (!context) return\r
      context.clearRect(0, 0, width, height)\r
      \r
      // Draw links\r
      context.strokeStyle = '#e5e7eb'\r
      context.lineWidth = 1\r
      context.globalAlpha = 0.5\r
      links.forEach(link => {\r
        context.beginPath()\r
        context.moveTo(link.source.x, link.source.y)\r
        context.lineTo(link.target.x, link.target.y)\r
        context.stroke()\r
      })\r
      \r
      // Draw nodes\r
      context.globalAlpha = 1\r
      nodes.forEach(node => {\r
        context.beginPath()\r
        context.arc(node.x, node.y, node.group === 0 ? 10 : 7, 0, 2 * Math.PI)\r
        context.fillStyle = color[node.group]\r
        context.fill()\r
        context.strokeStyle = '#ffffff'\r
        context.lineWidth = 2\r
        context.stroke()\r
        \r
        // Draw labels\r
        context.fillStyle = '#ffffff'\r
        context.font = 'bold 9px sans-serif'\r
        context.textAlign = 'center'\r
        context.textBaseline = 'middle'\r
        context.fillText(node.label, node.x, node.y)\r
      })\r
    }\r
\r
    simulation.on('tick', draw)\r
    \r
    // Initial draw\r
    draw()\r
\r
    // Add interaction tracking\r
    canvas.on('mousemove', function(event) {\r
      const [mx, my] = d3.pointer(event)\r
      const transform = d3.zoomTransform(canvas.node())\r
      const x = (mx - transform.x) / transform.k\r
      const y = (my - transform.y) / transform.k\r
      \r
      // Find hovered node\r
      const hoveredNode = nodes.find(node => {\r
        const dx = node.x - x\r
        const dy = node.y - y\r
        return Math.sqrt(dx * dx + dy * dy) < (node.group === 0 ? 10 : 7)\r
      })\r
      \r
      canvas.style('cursor', hoveredNode ? 'pointer' : 'default')\r
    })\r
\r
    // Stop simulation after a few seconds\r
    setTimeout(() => simulation.stop(), 5000)\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};