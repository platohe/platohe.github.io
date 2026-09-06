var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'force-graph-web-worker',\r
  title: 'Force Graph Web Worker',\r
  desc: 'Force Graph Web Worker — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ForceGraphWebWorker',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["networks","force-graph-web-worker"],\r
}\r
\r
export default function ForceGraphWebWorker({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"id":0,"group":0,"label":"A"},{"id":1,"group":1,"label":"B"},{"id":2,"group":2,"label":"C"},{"id":3,"group":3,"label":"D"},{"id":4,"group":0,"label":"A"},{"id":5,"group":1,"label":"B"},{"id":6,"group":2,"label":"C"},{"id":7,"group":3,"label":"D"},{"id":8,"group":0,"label":"A"},{"id":9,"group":1,"label":"B"},{"id":10,"group":2,"label":"C"},{"id":11,"group":3,"label":"D"},{"id":12,"group":0,"label":"A"},{"id":13,"group":1,"label":"B"},{"id":14,"group":2,"label":"C"},{"id":15,"group":3,"label":"D"},{"id":16,"group":0,"label":"A"},{"id":17,"group":1,"label":"B"},{"id":18,"group":2,"label":"C"},{"id":19,"group":3,"label":"D"},{"id":20,"group":0,"label":"A"},{"id":21,"group":1,"label":"B"},{"id":22,"group":2,"label":"C"},{"id":23,"group":3,"label":"D"},{"id":24,"group":0,"label":"A"},{"id":25,"group":1,"label":"B"},{"id":26,"group":2,"label":"C"},{"id":27,"group":3,"label":"D"},{"id":28,"group":0,"label":"A"},{"id":29,"group":1,"label":"B"},{"id":30,"group":2,"label":"C"},{"id":31,"group":3,"label":"D"},{"id":32,"group":0,"label":"A"},{"id":33,"group":1,"label":"B"},{"id":34,"group":2,"label":"C"},{"id":35,"group":3,"label":"D"},{"id":36,"group":0,"label":"A"},{"id":37,"group":1,"label":"B"},{"id":38,"group":2,"label":"C"},{"id":39,"group":3,"label":"D"}]\r
    const nodes = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
    \r
    // Create simple links with indices\r
    const links = []\r
    nodes.forEach((n, i) => {\r
      const numLinks = 1 + Math.floor(Math.random() * 3)\r
      for (let j = 0; j < numLinks; j++) {\r
        const target = Math.floor(Math.random() * nodes.length)\r
        if (target !== i) links.push({ source: i, target: target })\r
      }\r
    })\r
\r
    const width = 380, height = 265\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']\r
\r
    // Create a blob URL for the worker script\r
    const workerScript = \`\r
      self.onmessage = function(e) {\r
        const { nodes, links, width, height } = e.data\r
        \r
        // Simple force simulation\r
        const nodesCopy = JSON.parse(JSON.stringify(nodes))\r
        const linksCopy = JSON.parse(JSON.stringify(links))\r
        \r
        // Initialize positions randomly\r
        nodesCopy.forEach(node => {\r
          node.x = Math.random() * width\r
          node.y = Math.random() * height\r
          node.vx = 0\r
          node.vy = 0\r
        })\r
        \r
        // Simulation parameters\r
        const k = 0.01 // spring constant\r
        const repulsion = 5000\r
        const damping = 0.9\r
        const centerStrength = 0.01\r
        \r
        function simulate() {\r
          // Apply repulsion\r
          for (let i = 0; i < nodesCopy.length; i++) {\r
            for (let j = i + 1; j < nodesCopy.length; j++) {\r
              const dx = nodesCopy[j].x - nodesCopy[i].x\r
              const dy = nodesCopy[j].y - nodesCopy[i].y\r
              const dist = Math.sqrt(dx * dx + dy * dy) || 1\r
              const force = repulsion / (dist * dist)\r
              \r
              const fx = (dx / dist) * force\r
              const fy = (dy / dist) * force\r
              \r
              nodesCopy[i].vx -= fx\r
              nodesCopy[i].vy -= fy\r
              nodesCopy[j].vx += fx\r
              nodesCopy[j].vy += fy\r
            }\r
          }\r
          \r
          // Apply spring forces\r
          linksCopy.forEach(link => {\r
            const source = nodesCopy[link.source]\r
            const target = nodesCopy[link.target]\r
            if (!source || !target) return\r
            \r
            const dx = target.x - source.x\r
            const dy = target.y - source.y\r
            const dist = Math.sqrt(dx * dx + dy * dy) || 1\r
            const force = (dist - 50) * k\r
            \r
            const fx = (dx / dist) * force\r
            const fy = (dy / dist) * force\r
            \r
            source.vx += fx\r
            source.vy += fy\r
            target.vx -= fx\r
            target.vy -= fy\r
          })\r
          \r
          // Apply center force\r
          nodesCopy.forEach(node => {\r
            node.vx += (width / 2 - node.x) * centerStrength\r
            node.vy += (height / 2 - node.y) * centerStrength\r
          })\r
          \r
          // Update positions with damping\r
          nodesCopy.forEach(node => {\r
            node.vx *= damping\r
            node.vy *= damping\r
            node.x += node.vx\r
            node.y += node.vy\r
            \r
            // Keep within bounds\r
            node.x = Math.max(20, Math.min(width - 20, node.x))\r
            node.y = Math.max(20, Math.min(height - 20, node.y))\r
          })\r
          \r
          // Send updated positions\r
          self.postMessage({ type: 'tick', nodes: nodesCopy.map(n => ({ id: n.id, x: n.x, y: n.y })) })\r
        }\r
        \r
        // Run simulation\r
        let iteration = 0\r
        const interval = setInterval(() => {\r
          simulate()\r
          iteration++\r
          if (iteration > 300) {\r
            clearInterval(interval)\r
            self.postMessage({ type: 'done' })\r
          }\r
        }, 16)\r
      }\r
    \`\r
\r
    let worker = null\r
    let workerUrl = null\r
    try {\r
      if (typeof Worker !== 'undefined') {\r
        const blob = new Blob([workerScript], { type: 'application/javascript' })\r
        workerUrl = URL.createObjectURL(blob)\r
        worker = new Worker(workerUrl)\r
      }\r
    } catch {\r
      worker = null\r
    }\r
\r
    const g = svg.append('g').attr('transform', 'translate(10, 17)')\r
\r
    // Initialize with random positions\r
    nodes.forEach(node => {\r
      node.x = Math.random() * width\r
      node.y = Math.random() * height\r
    })\r
\r
    // Create elements\r
    const linkElements = g.selectAll('line')\r
      .data(links)\r
      .join('line')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
      .attr('stroke-opacity', 0.5)\r
\r
    const nodeElements = g.selectAll('circle')\r
      .data(nodes)\r
      .join('circle')\r
      .attr('r', (d) => d.group === 0 ? 10 : 7)\r
      .attr('fill', (d) => color[d.group])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
\r
    const labelElements = g.selectAll('text')\r
      .data(nodes)\r
      .join('text')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '9px')\r
      .attr('font-weight', 'bold')\r
      .attr('pointer-events', 'none')\r
      .text((d) => d.label)\r
\r
    // Handle worker messages\r
    if (worker) {\r
      worker.onmessage = function(e) {\r
        if (e.data.type === 'tick') {\r
          const updatedNodes = e.data.nodes\r
          \r
          // Update node positions\r
          nodeElements.attr('cx', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.id)\r
            return updated ? updated.x : d.x\r
          }).attr('cy', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.id)\r
            return updated ? updated.y : d.y\r
          })\r
\r
          // Update label positions\r
          labelElements.attr('x', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.id)\r
            return updated ? updated.x : d.x\r
          }).attr('y', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.id)\r
            return updated ? updated.y + 4 : d.y + 4\r
          })\r
\r
          // Update link positions\r
          linkElements.attr('x1', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.source.id)\r
            return updated ? updated.x : d.source.x\r
          }).attr('y1', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.source.id)\r
            return updated ? updated.y : d.source.y\r
          }).attr('x2', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.target.id)\r
            return updated ? updated.x : d.target.x\r
          }).attr('y2', (d) => {\r
            const updated = updatedNodes.find(n => n.id === d.target.id)\r
            return updated ? updated.y : d.target.y\r
          })\r
        } else if (e.data.type === 'done') {\r
          worker.terminate()\r
          if (workerUrl) URL.revokeObjectURL(workerUrl)\r
        }\r
      }\r
\r
      // Start the worker\r
      worker.postMessage({ nodes, links, width, height })\r
    }\r
\r
    // Cleanup\r
    return () => {\r
      if (worker) worker.terminate()\r
      if (workerUrl) URL.revokeObjectURL(workerUrl)\r
    }\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};