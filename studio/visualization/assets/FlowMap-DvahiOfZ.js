var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'flow-map',\r
  title: 'Flow Map',\r
  desc: 'Flow Map — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'FlowMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["networks","flow-map"],\r
}\r
\r
export default function FlowMap({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":"NYC","name":"New York","lat":40.71,"lon":-74.01,"value":100},{"id":"LAX","name":"Los Angeles","lat":34.05,"lon":-118.24,"value":80},{"id":"CHI","name":"Chicago","lat":41.88,"lon":-87.63,"value":60},{"id":"HOU","name":"Houston","lat":29.76,"lon":-95.37,"value":50},{"id":"PHX","name":"Phoenix","lat":33.45,"lon":-112.07,"value":40},{"id":"PHL","name":"Philadelphia","lat":39.95,"lon":-75.17,"value":35},{"id":"SAT","name":"San Antonio","lat":29.42,"lon":-98.49,"value":30},{"id":"SDG","name":"San Diego","lat":32.72,"lon":-117.16,"value":25},{"id":"DAL","name":"Dallas","lat":32.78,"lon":-96.81,"value":45},{"id":"SFO","name":"San Francisco","lat":37.77,"lon":-122.42,"value":55}],"flows":[{"source":"NYC","target":"LAX","value":500},{"source":"NYC","target":"CHI","value":300},{"source":"NYC","target":"SFO","value":400},{"source":"LAX","target":"CHI","value":250},{"source":"LAX","target":"SFO","value":350},{"source":"CHI","target":"HOU","value":200},{"source":"CHI","target":"DAL","value":180},{"source":"HOU","target":"DAL","value":150},{"source":"SFO","target":"SDG","value":120},{"source":"PHX","target":"LAX","value":100}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { nodes, flows } = data\r
\r
    // Create a projection for US map\r
    const projection = d3.geoAlbersUsa()\r
      .scale(1000)\r
      .translate([IW / 2 + M.left, IH / 2 + M.top])\r
\r
    const path = d3.geoPath().projection(projection)\r
\r
    // For this example, we'll use the node positions directly projected\r
    const nodeMap = {}\r
    nodes.forEach(node => {\r
      const [x, y] = projection([node.lon, node.lat])\r
      if (x && y) {\r
        nodeMap[node.id] = { ...node, x, y }\r
      }\r
    })\r
\r
    const validFlows = flows.filter(f => nodeMap[f.source] && nodeMap[f.target])\r
    const maxFlow = d3.max(validFlows, f => f.value) || 1\r
\r
    const g = svg.append('g')\r
\r
    // Flow curves (great circle arcs)\r
    validFlows.forEach(flow => {\r
      const source = nodeMap[flow.source]\r
      const target = nodeMap[flow.target]\r
\r
      // Create great circle path\r
      const line = d3.line()\r
        .x(d => d[0])\r
        .y(d => d[1])\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      // Generate intermediate points for curved line\r
      const points = []\r
      for (let t = 0; t <= 1; t += 0.02) {\r
        // Simple interpolation with curve\r
        const lng = source.lon + (target.lon - source.lon) * t\r
        const lat = source.lat + (target.lat - source.lat) * t\r
        // Add some curve (great circle approximation)\r
        const curveHeight = Math.sin(t * Math.PI) * 0.3\r
        const curvedLat = lat + curveHeight\r
        const [px, py] = projection([lng, curvedLat])\r
        if (px && py) points.push([px, py])\r
      }\r
\r
      const width = Math.max(1, (flow.value / maxFlow) * 5)\r
      const opacity = 0.3 + 0.5 * (flow.value / maxFlow)\r
\r
      g.append('path')\r
        .datum(points)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', width)\r
        .attr('stroke-opacity', opacity)\r
        .attr('stroke-linecap', 'round')\r
\r
      // Arrow head at target\r
      if (points.length > 10) {\r
        const last = points[points.length - 1]\r
        const prev = points[points.length - 10]\r
        const angle = Math.atan2(last[1] - prev[1], last[0] - prev[0])\r
        \r
        g.append('path')\r
          .attr('d', d3.symbol().type(d3.symbolTriangle).size(50))\r
          .attr('transform', \`translate(\${last[0]},\${last[1]}) rotate(\${angle * 180 / Math.PI - 90})\`)\r
          .attr('fill', colors[0])\r
          .attr('opacity', opacity)\r
      }\r
    })\r
\r
    // Nodes\r
    Object.values(nodeMap).forEach((node, i) => {\r
      const size = Math.sqrt(node.value) * 2\r
\r
      g.append('circle')\r
        .attr('cx', node.x)\r
        .attr('cy', node.y)\r
        .attr('r', size)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('opacity', 0.8)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
\r
      g.append('text')\r
        .attr('x', node.x)\r
        .attr('y', node.y + size + 12)\r
        .attr('text-anchor', 'middle')\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-weight', 500)\r
        .text(node.name)\r
    })\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 0).attr('y2', 0).attr('stroke', colors[0]).attr('stroke-width', 3)\r
    lg.append('text').attr('x', 25).attr('y', 4).attr('font-size', '10px').attr('fill', 'var(--text)').text('High Flow')\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 20).attr('y2', 20).attr('stroke', colors[0]).attr('stroke-width', 1)\r
    lg.append('text').attr('x', 25).attr('y', 24).attr('font-size', '10px').attr('fill', 'var(--text)').text('Low Flow')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2 + M.left)\r
      .attr('y', M.top - 10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Flow Map - Origin-Destination Flows')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};