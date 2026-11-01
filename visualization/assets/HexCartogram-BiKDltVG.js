var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'hex-cartogram',\r
  title: 'Hex Cartogram',\r
  desc: 'Hex Cartogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HexCartogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hex-cartogram"],\r
}\r
\r
export default function HexCartogram({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"id":"CA","name":"California","value":39.5,"region":"West","q":0,"r":0},{"id":"TX","name":"Texas","value":29,"region":"South","q":2,"r":1},{"id":"FL","name":"Florida","value":21.5,"region":"South","q":4,"r":2},{"id":"NY","name":"New York","value":19.5,"region":"Northeast","q":4,"r":-1},{"id":"PA","name":"Pennsylvania","value":13,"region":"Northeast","q":3,"r":-1},{"id":"IL","name":"Illinois","value":12.5,"region":"Midwest","q":2,"r":-1},{"id":"OH","name":"Ohio","value":11.8,"region":"Midwest","q":3,"r":0},{"id":"GA","name":"Georgia","value":10.7,"region":"South","q":4,"r":1},{"id":"NC","name":"North Carolina","value":10.5,"region":"South","q":4,"r":0},{"id":"MI","name":"Michigan","value":10,"region":"Midwest","q":3,"r":-2},{"id":"NJ","name":"New Jersey","value":9.3,"region":"Northeast","q":4,"r":-2},{"id":"VA","name":"Virginia","value":8.6,"region":"South","q":3,"r":1},{"id":"WA","name":"Washington","value":7.7,"region":"West","q":-1,"r":-2},{"id":"AZ","name":"Arizona","value":7.3,"region":"West","q":1,"r":2},{"id":"MA","name":"Massachusetts","value":7,"region":"Northeast","q":5,"r":-2},{"id":"TN","name":"Tennessee","value":6.9,"region":"South","q":3,"r":2},{"id":"IN","name":"Indiana","value":6.8,"region":"Midwest","q":3,"r":0},{"id":"MO","name":"Missouri","value":6.2,"region":"Midwest","q":2,"r":1},{"id":"MD","name":"Maryland","value":6.2,"region":"South","q":4,"r":0},{"id":"WI","name":"Wisconsin","value":5.9,"region":"Midwest","q":2,"r":-2},{"id":"CO","name":"Colorado","value":5.8,"region":"West","q":0,"r":1},{"id":"MN","name":"Minnesota","value":5.7,"region":"Midwest","q":1,"r":-2},{"id":"SC","name":"South Carolina","value":5.2,"region":"South","q":4,"r":2},{"id":"AL","name":"Alabama","value":5,"region":"South","q":3,"r":2},{"id":"LA","name":"Louisiana","value":4.7,"region":"South","q":2,"r":3},{"id":"KY","name":"Kentucky","value":4.5,"region":"South","q":3,"r":1},{"id":"OR","name":"Oregon","value":4.2,"region":"West","q":-1,"r":-1},{"id":"OK","name":"Oklahoma","value":4,"region":"South","q":1,"r":2},{"id":"CT","name":"Connecticut","value":3.6,"region":"Northeast","q":5,"r":-1},{"id":"UT","name":"Utah","value":3.3,"region":"West","q":0,"r":2},{"id":"IA","name":"Iowa","value":3.2,"region":"Midwest","q":1,"r":-1},{"id":"NV","name":"Nevada","value":3.1,"region":"West","q":1,"r":1},{"id":"AR","name":"Arkansas","value":3,"region":"South","q":2,"r":2},{"id":"MS","name":"Mississippi","value":2.9,"region":"South","q":3,"r":3},{"id":"KS","name":"Kansas","value":2.9,"region":"Midwest","q":1,"r":2},{"id":"NM","name":"New Mexico","value":2.1,"region":"West","q":1,"r":3},{"id":"NE","name":"Nebraska","value":1.9,"region":"Midwest","q":1,"r":1},{"id":"ID","name":"Idaho","value":1.8,"region":"West","q":-1,"r":0},{"id":"WV","name":"West Virginia","value":1.8,"region":"South","q":4,"r":0},{"id":"HI","name":"Hawaii","value":1.4,"region":"West","q":5,"r":3},{"id":"NH","name":"New Hampshire","value":1.4,"region":"Northeast","q":5,"r":-3},{"id":"ME","name":"Maine","value":1.4,"region":"Northeast","q":6,"r":-3},{"id":"RI","name":"Rhode Island","value":1.1,"region":"Northeast","q":5,"r":-2},{"id":"MT","name":"Montana","value":1.1,"region":"West","q":-1,"r":-2},{"id":"DE","name":"Delaware","value":1,"region":"South","q":4,"r":-1},{"id":"SD","name":"South Dakota","value":0.9,"region":"Midwest","q":1,"r":-2},{"id":"ND","name":"North Dakota","value":0.8,"region":"Midwest","q":0,"r":-2},{"id":"AK","name":"Alaska","value":0.7,"region":"West","q":-2,"r":-3},{"id":"VT","name":"Vermont","value":0.6,"region":"Northeast","q":5,"r":-3},{"id":"WY","name":"Wyoming","value":0.6,"region":"West","q":0,"r":0}]\r
\r
  const hexSize = options.hexSize || 12\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    // Hex grid layout\r
    const hexWidth = hexSize * 2\r
    const hexHeight = Math.sqrt(3) * hexSize\r
    const colWidth = hexWidth * 0.75\r
    const rowHeight = hexHeight\r
\r
    // Find bounds\r
    const qValues = data.map(d => d.q)\r
    const rValues = data.map(d => d.r)\r
    const minQ = d3.min(qValues)\r
    const maxQ = d3.max(qValues)\r
    const minR = d3.min(rValues)\r
    const maxR = d3.max(rValues)\r
\r
    // Convert hex coordinates to pixel positions\r
    const nodes = data.map(d => {\r
      const x = (d.q - minQ) * colWidth + hexWidth\r
      const y = (d.r - minR) * rowHeight + (d.q % 2 === 0 ? 0 : hexHeight / 2) + hexHeight\r
      return { ...d, px: x, py: y }\r
    })\r
\r
    const maxValue = d3.max(data, d => d.value) || 1\r
    const colorScale = d3.scaleSequential()\r
      .domain([0, maxValue])\r
      .interpolator(d3.interpolateViridis)\r
\r
    const regionColors = {\r
      'West': colors[0],\r
      'Midwest': colors[1],\r
      'South': colors[2],\r
      'Northeast': colors[3],\r
    }\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + 40},\${M.top + 40})\`)\r
\r
    // Draw hexagons\r
    const hexagonDraw = (context, size) => {\r
  const r = Math.sqrt(size) / 2\r
  for (let i = 0; i < 6; i++) {\r
    const a = Math.PI / 3 * i - Math.PI / 6\r
    const x = r * Math.sin(a), y = -r * Math.cos(a)\r
    if (i === 0) context.moveTo(x, y); else context.lineTo(x, y)\r
  }\r
  context.closePath()\r
}\r
const hexagon = d3.symbol().type({ draw: hexagonDraw }).size(hexSize * hexSize * 2.5)\r
\r
    nodes.forEach((node, i) => {\r
      const color = options.colorBy === 'value' ? colorScale(node.value) : (regionColors[node.region] || colors[i % colors.length])\r
\r
      g.append('path')\r
        .attr('transform', \`translate(\${node.px},\${node.py})\`)\r
        .attr('d', hexagon)\r
        .attr('fill', color)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
        .attr('opacity', 0.85)\r
\r
      // State abbreviation\r
      g.append('text')\r
        .attr('x', node.px)\r
        .attr('y', node.py + 4)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 600)\r
        .attr('fill', node.value > maxValue / 2 ? 'white' : 'var(--text)')\r
        .text(node.id)\r
    })\r
\r
    // Color legend (if coloring by value)\r
    if (options.colorBy === 'value') {\r
      const legendWidth = 120\r
      const legendHeight = 12\r
      const legendX = IW - legendWidth - 20\r
      const legendY = 20\r
\r
      const defs = svg.append('defs')\r
      const grad = defs.append('linearGradient').attr('id', 'hexGrad').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')\r
      d3.range(0, 1.01, 0.01).forEach(t => {\r
        grad.append('stop')\r
          .attr('offset', \`\${t * 100}%\`)\r
          .attr('stop-color', colorScale(t * maxValue))\r
      })\r
\r
      g.append('rect')\r
        .attr('x', legendX).attr('y', legendY)\r
        .attr('width', legendWidth).attr('height', legendHeight)\r
        .attr('fill', 'url(#hexGrad)')\r
\r
      g.append('text')\r
        .attr('x', legendX).attr('y', legendY - 4)\r
        .attr('font-size', '9px').attr('fill', 'var(--text-secondary)')\r
        .text('Low')\r
\r
      g.append('text')\r
        .attr('x', legendX + legendWidth).attr('y', legendY - 4)\r
        .attr('text-anchor', 'end').attr('font-size', '9px').attr('fill', 'var(--text-secondary)')\r
        .text('High')\r
    }\r
\r
    // Region legend\r
    if (options.colorBy !== 'value') {\r
      const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
      Object.entries(regionColors).forEach(([region, color], i) => {\r
        lg.append('path')\r
          .attr('transform', \`translate(0, \${i * 20})\`)\r
          .attr('d', hexagon)\r
          .attr('fill', color)\r
          .attr('stroke', 'var(--bg)')\r
          .attr('stroke-width', 1)\r
\r
        lg.append('text')\r
          .attr('x', 20).attr('y', i * 20 + 4)\r
          .attr('font-size', '10px').attr('fill', 'var(--text)')\r
          .text(region)\r
      })\r
    }\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', M.top - 10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Hex Cartogram - Equal Area Hexagons')\r
\r
  }, [customData, options.colorBy])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};