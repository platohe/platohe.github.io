var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'markov-chain',\r
  title: 'Markov Chain',\r
  desc: 'Markov Chain — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MarkovChain',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","markov-chain"],\r
}\r
\r
export default function MarkovChain({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"states":[{"id":"Sunny","x":130,"y":90},{"id":"Cloudy","x":270,"y":90},{"id":"Rainy","x":200,"y":220}],"transitions":[{"from":"Sunny","to":"Sunny","prob":0.7},{"from":"Sunny","to":"Cloudy","prob":0.2},{"from":"Sunny","to":"Rainy","prob":0.1},{"from":"Cloudy","to":"Sunny","prob":0.3},{"from":"Cloudy","to":"Cloudy","prob":0.4},{"from":"Cloudy","to":"Rainy","prob":0.3},{"from":"Rainy","to":"Sunny","prob":0.1},{"from":"Rainy","to":"Cloudy","prob":0.4},{"from":"Rainy","to":"Rainy","prob":0.5}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.states && customData.transitions) ? customData : DEFAULT_DATA\r
    const { states, transitions } = config\r
\r
    const stateMap = Object.fromEntries(states.map(s => [s.id, s]))\r
    const nodeR = 28\r
\r
    const defs = svg.append('defs')\r
    defs.append('marker').attr('id', 'arrow-mc')\r
      .attr('viewBox', '0 -4 8 8').attr('refX', 8).attr('refY', 0)\r
      .attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto')\r
      .append('path').attr('d', 'M0,-4L8,0L0,4').attr('fill', '#6366f1')\r
\r
    const g = svg.append('g')\r
\r
    const colors = { Sunny: '#f59e0b', Cloudy: '#6b7280', Rainy: '#3b82f6' }\r
    const stateColors = states.reduce((acc, s, i) => {\r
      acc[s.id] = ['#f59e0b', '#6b7280', '#3b82f6', '#10b981', '#ec4899'][i % 5]\r
      return acc\r
    }, {})\r
\r
    // Draw inter-state transitions\r
    transitions.filter(t => t.from !== t.to).forEach(t => {\r
      const src = stateMap[t.from]\r
      const dst = stateMap[t.to]\r
      if (!src || !dst) return\r
\r
      // Offset for bidirectionality\r
      const dx = dst.x - src.x\r
      const dy = dst.y - src.y\r
      const len = Math.sqrt(dx * dx + dy * dy)\r
      const nx = -dy / len * 10\r
      const ny = dx / len * 10\r
\r
      const x1 = src.x + nx + (dx / len) * nodeR\r
      const y1 = src.y + ny + (dy / len) * nodeR\r
      const x2 = dst.x + nx - (dx / len) * nodeR\r
      const y2 = dst.y + ny - (dy / len) * nodeR\r
\r
      g.append('line')\r
        .attr('x1', x1).attr('y1', y1)\r
        .attr('x2', x2).attr('y2', y2)\r
        .attr('stroke', '#6366f1').attr('stroke-width', Math.max(1, t.prob * 5))\r
        .attr('stroke-opacity', 0.7)\r
        .attr('marker-end', 'url(#arrow-mc)')\r
\r
      // Probability label on midpoint\r
      g.append('text')\r
        .attr('x', (x1 + x2) / 2 + nx / 2).attr('y', (y1 + y2) / 2 + ny / 2 + 3)\r
        .attr('text-anchor', 'middle').attr('fill', '#a78bfa')\r
        .attr('font-size', '7px').attr('font-family', 'var(--font-mono)').attr('font-weight', '600')\r
        .text(t.prob.toFixed(1))\r
    })\r
\r
    // Self-loops\r
    transitions.filter(t => t.from === t.to).forEach(t => {\r
      const s = stateMap[t.from]\r
      if (!s) return\r
      const loopR = 20\r
      g.append('ellipse')\r
        .attr('cx', s.x).attr('cy', s.y - nodeR - loopR + 4)\r
        .attr('rx', loopR / 1.5).attr('ry', loopR / 2)\r
        .attr('fill', 'none').attr('stroke', '#6366f1').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.6)\r
      g.append('text')\r
        .attr('x', s.x + 14).attr('y', s.y - nodeR - loopR + 4)\r
        .attr('fill', '#a78bfa').attr('font-size', '6.5px').attr('font-family', 'var(--font-mono)')\r
        .text(t.prob.toFixed(1))\r
    })\r
\r
    // State nodes\r
    states.forEach(s => {\r
      const col = stateColors[s.id] || '#6366f1'\r
      g.append('circle')\r
        .attr('cx', s.x).attr('cy', s.y).attr('r', nodeR)\r
        .attr('fill', col).attr('fill-opacity', 0.2)\r
        .attr('stroke', col).attr('stroke-width', 2)\r
\r
      g.append('text')\r
        .attr('x', s.x).attr('y', s.y + 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '8px').attr('font-weight', '600')\r
        .text(s.id)\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Markov Chain State Transition Diagram')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};