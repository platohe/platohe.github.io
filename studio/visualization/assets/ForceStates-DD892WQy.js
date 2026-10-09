var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const DEFAULT_DATA = [{"code":"WA","name":"Washington","x":70,"y":55,"pop":7.7},{"code":"OR","name":"Oregon","x":65,"y":95,"pop":4.2},{"code":"CA","name":"California","x":55,"y":155,"pop":39},{"code":"NV","name":"Nevada","x":85,"y":135,"pop":3.1},{"code":"ID","name":"Idaho","x":105,"y":75,"pop":1.9},{"code":"MT","name":"Montana","x":145,"y":60,"pop":1.1},{"code":"WY","name":"Wyoming","x":145,"y":100,"pop":0.6},{"code":"UT","name":"Utah","x":115,"y":140,"pop":3.3},{"code":"AZ","name":"Arizona","x":105,"y":195,"pop":7.2},{"code":"CO","name":"Colorado","x":155,"y":145,"pop":5.8},{"code":"NM","name":"New Mexico","x":150,"y":200,"pop":2.1},{"code":"TX","name":"Texas","x":200,"y":245,"pop":29.5},{"code":"FL","name":"Florida","x":335,"y":260,"pop":21.8},{"code":"NY","name":"New York","x":350,"y":85,"pop":19.8},{"code":"IL","name":"Illinois","x":265,"y":130,"pop":12.6}]\r
\r
export const meta = {\r
  id: 'force-states',\r
  title: 'Force States',\r
  desc: 'Force States — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ForceStates',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","force-states"],\r
}\r
\r
export default function ForceStates({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const nodes = data.map(d => ({\r
      ...d,\r
      targetX: d.x,\r
      targetY: d.y,\r
      x: d.x + (Math.random() - 0.5) * 40,\r
      y: d.y + (Math.random() - 0.5) * 40,\r
      r: Math.max(6, Math.min(16, Math.sqrt(d.pop || 2) * 2.8)),\r
    }))\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateYlGnBu)\r
      .domain([0, 40])\r
\r
    const linkG = svg.append('g')\r
    const nodeG = svg.append('g')\r
\r
    // Simulation\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('x', d3.forceX(d => d.targetX).strength(0.25))\r
      .force('y', d3.forceY(d => d.targetY).strength(0.25))\r
      .force('collide', d3.forceCollide(d => d.r + 2).iterations(3))\r
      .alphaDecay(0.03)\r
\r
    // Anchor tether lines\r
    const lines = linkG.selectAll('line')\r
      .data(nodes)\r
      .join('line')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 0.8)\r
      .attr('stroke-dasharray', '2,2')\r
      .attr('stroke-opacity', 0.5)\r
\r
    // Drag behavior\r
    const drag = d3.drag()\r
      .on('start', (event, d) => {\r
        if (!event.active) simulation.alphaTarget(0.3).restart()\r
        d.fx = d.x\r
        d.fy = d.y\r
      })\r
      .on('drag', (event, d) => {\r
        d.fx = event.x\r
        d.fy = event.y\r
      })\r
      .on('end', (event, d) => {\r
        if (!event.active) simulation.alphaTarget(0)\r
        d.fx = null\r
        d.fy = null\r
      })\r
\r
    // Node circles & labels\r
    const nodeGroups = nodeG.selectAll('g')\r
      .data(nodes)\r
      .join('g')\r
      .style('cursor', 'grab')\r
      .call(drag)\r
\r
    nodeGroups.append('circle')\r
      .attr('r', d => d.r)\r
      .attr('fill', d => colorScale(d.pop || 2))\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 1)\r
      .attr('fill-opacity', 0.9)\r
\r
    nodeGroups.append('text')\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'central')\r
      .attr('fill', '#0f172a')\r
      .attr('font-size', d => Math.max(5.5, d.r * 0.7) + 'px')\r
      .attr('font-weight', '700')\r
      .attr('pointer-events', 'none')\r
      .text(d => d.code || d.name || d.id || '')\r
\r
    simulation.on('tick', () => {\r
      lines\r
        .attr('x1', d => d.targetX)\r
        .attr('y1', d => d.targetY)\r
        .attr('x2', d => d.x)\r
        .attr('y2', d => d.y)\r
\r
      nodeGroups.attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14).attr('y', 20)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Force-Directed Positions')\r
\r
    svg.append('text')\r
      .attr('x', 14).attr('y', 31)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Drag nodes to rearrange · Spring-anchored layout')\r
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