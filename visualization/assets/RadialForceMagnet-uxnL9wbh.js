var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'radial-force-magnet',\r
  title: 'Radial Force Magnet',\r
  desc: 'Radial Force Magnet — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialForceMagnet',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","radial-force-magnet"],\r
}\r
\r
export default function RadialForceMagnet({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"id":0,"group":0,"r":4},{"id":1,"group":1,"r":5.5},{"id":2,"group":2,"r":7},{"id":3,"group":3,"r":8.5},{"id":4,"group":0,"r":10},{"id":5,"group":1,"r":4},{"id":6,"group":2,"r":5.5},{"id":7,"group":3,"r":7},{"id":8,"group":0,"r":8.5},{"id":9,"group":1,"r":10},{"id":10,"group":2,"r":4},{"id":11,"group":3,"r":5.5},{"id":12,"group":0,"r":7},{"id":13,"group":1,"r":8.5},{"id":14,"group":2,"r":10},{"id":15,"group":3,"r":4},{"id":16,"group":0,"r":5.5},{"id":17,"group":1,"r":7},{"id":18,"group":2,"r":8.5},{"id":19,"group":3,"r":10},{"id":20,"group":0,"r":4},{"id":21,"group":1,"r":5.5},{"id":22,"group":2,"r":7},{"id":23,"group":3,"r":8.5},{"id":24,"group":0,"r":10},{"id":25,"group":1,"r":4},{"id":26,"group":2,"r":5.5},{"id":27,"group":3,"r":7},{"id":28,"group":0,"r":8.5},{"id":29,"group":1,"r":10},{"id":30,"group":2,"r":4},{"id":31,"group":3,"r":5.5},{"id":32,"group":0,"r":7},{"id":33,"group":1,"r":8.5},{"id":34,"group":2,"r":10},{"id":35,"group":3,"r":4},{"id":36,"group":0,"r":5.5},{"id":37,"group":1,"r":7},{"id":38,"group":2,"r":8.5},{"id":39,"group":3,"r":10},{"id":40,"group":0,"r":4},{"id":41,"group":1,"r":5.5},{"id":42,"group":2,"r":7},{"id":43,"group":3,"r":8.5},{"id":44,"group":0,"r":10},{"id":45,"group":1,"r":4},{"id":46,"group":2,"r":5.5},{"id":47,"group":3,"r":7},{"id":48,"group":0,"r":8.5},{"id":49,"group":1,"r":10},{"id":50,"group":2,"r":4},{"id":51,"group":3,"r":5.5},{"id":52,"group":0,"r":7},{"id":53,"group":1,"r":8.5},{"id":54,"group":2,"r":10},{"id":55,"group":3,"r":4},{"id":56,"group":0,"r":5.5},{"id":57,"group":1,"r":7},{"id":58,"group":2,"r":8.5},{"id":59,"group":3,"r":10},{"id":60,"group":0,"r":4},{"id":61,"group":1,"r":5.5},{"id":62,"group":2,"r":7},{"id":63,"group":3,"r":8.5},{"id":64,"group":0,"r":10}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const rawData = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2\r
\r
    const nodes = rawData.map((d, i) => ({\r
      id: d.id ?? i,\r
      group: d.group ?? (i % 4),\r
      r: d.r ?? 6,\r
      x: cx + (Math.random() - 0.5) * 100,\r
      y: cy + (Math.random() - 0.5) * 100,\r
    }))\r
\r
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#38bdf8']\r
\r
    // Force simulation\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('charge', d3.forceManyBody().strength(-8))\r
      .force('r', d3.forceRadial(65, cx, cy).strength(0.3))\r
      .force('collide', d3.forceCollide(d => d.r + 2).iterations(3))\r
      .alphaDecay(0.02)\r
\r
    // Center ring\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy)\r
      .attr('r', 65)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-opacity', 0.4)\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Attractor cursor magnet circle\r
    const magnet = svg.append('circle')\r
      .attr('r', 12)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-dasharray', '2,2')\r
      .attr('display', 'none')\r
\r
    const nodeElements = svg.selectAll('.node')\r
      .data(nodes)\r
      .join('circle')\r
      .attr('class', 'node')\r
      .attr('r', d => d.r)\r
      .attr('fill', d => colors[d.group % colors.length])\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 1)\r
      .attr('fill-opacity', 0.85)\r
\r
    simulation.on('tick', () => {\r
      nodeElements\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.y)\r
    })\r
\r
    // Mouse move interaction creates attractor gravity\r
    svg.on('mousemove', (event) => {\r
      const [mx, my] = d3.pointer(event)\r
      magnet.attr('display', 'inline').attr('cx', mx).attr('cy', my)\r
\r
      simulation.force('magnet', d3.forceRadial(10, mx, my).strength(0.45))\r
      simulation.alphaTarget(0.3).restart()\r
    })\r
\r
    svg.on('mouseleave', () => {\r
      magnet.attr('display', 'none')\r
      simulation.force('magnet', null)\r
      simulation.alphaTarget(0)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Radial Force Collision + Mouse Gravity Magnet')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Hover mouse to attract and interact with physics particles')\r
\r
    return () => simulation.stop()\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};