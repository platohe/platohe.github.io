var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'ternary-plot',\r
  title: 'Ternary Plot',\r
  desc: 'Ternary Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TernaryPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ternary-plot"],\r
}\r
\r
export default function TernaryPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Sample A","a":60,"b":20,"c":20,"type":"Clay dominant"},{"label":"Sample B","a":20,"b":65,"c":15,"type":"Sand dominant"},{"label":"Sample C","a":15,"b":25,"c":60,"type":"Silt dominant"},{"label":"Sample D","a":33,"b":34,"c":33,"type":"Loam balance"},{"label":"Sample E","a":45,"b":45,"c":10,"type":"Sandy clay"},{"label":"Sample F","a":10,"b":45,"c":45,"type":"Sandy silt"},{"label":"Sample G","a":50,"b":10,"c":40,"type":"Silty clay"},{"label":"Sample H","a":75,"b":15,"c":10,"type":"Heavy clay"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const margin = { top: 35, right: 35, bottom: 35, left: 35 }\r
    const size = Math.min(width - margin.left - margin.right, height - margin.top - margin.bottom)\r
    const triHeight = size * (Math.sqrt(3) / 2)\r
\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Triangle vertices (Top: A / Clay, Bottom-Left: B / Sand, Bottom-Right: C / Silt)\r
    const vTop = [0, -triHeight / 2]\r
    const vLeft = [-size / 2, triHeight / 2]\r
    const vRight = [size / 2, triHeight / 2]\r
\r
    // Barycentric coordinate conversion to (x, y)\r
    function coord(a, b, c) {\r
      const sum = (a + b + c) || 1\r
      const na = a / sum\r
      const nb = b / sum\r
      const nc = c / sum\r
\r
      const x = na * vTop[0] + nb * vLeft[0] + nc * vRight[0]\r
      const y = na * vTop[1] + nb * vLeft[1] + nc * vRight[1]\r
      return [x, y]\r
    }\r
\r
    // Draw background triangle\r
    g.append('polygon')\r
      .attr('points', \`\${vTop.join(',')} \${vLeft.join(',')} \${vRight.join(',')}\`)\r
      .attr('fill', 'var(--background)')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.5)\r
\r
    // Grid lines (every 20%)\r
    const gridSteps = [0.2, 0.4, 0.6, 0.8]\r
    gridSteps.forEach(s => {\r
      // Line constant A\r
      const pA1 = coord(1 - s, s, 0)\r
      const pA2 = coord(1 - s, 0, s)\r
      g.append('line')\r
        .attr('x1', pA1[0]).attr('y1', pA1[1]).attr('x2', pA2[0]).attr('y2', pA2[1])\r
        .attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4)\r
\r
      // Line constant B\r
      const pB1 = coord(s, 1 - s, 0)\r
      const pB2 = coord(0, 1 - s, s)\r
      g.append('line')\r
        .attr('x1', pB1[0]).attr('y1', pB1[1]).attr('x2', pB2[0]).attr('y2', pB2[1])\r
        .attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4)\r
\r
      // Line constant C\r
      const pC1 = coord(s, 0, 1 - s)\r
      const pC2 = coord(0, s, 1 - s)\r
      g.append('line')\r
        .attr('x1', pC1[0]).attr('y1', pC1[1]).attr('x2', pC2[0]).attr('y2', pC2[1])\r
        .attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4)\r
    })\r
\r
    // Vertex labels\r
    g.append('text')\r
      .attr('x', vTop[0]).attr('y', vTop[1] - 8)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', '#ef4444')\r
      .attr('font-size', '8px')\r
      .attr('font-weight', '700')\r
      .text('Clay (100% A)')\r
\r
    g.append('text')\r
      .attr('x', vLeft[0] - 6).attr('y', vLeft[1] + 12)\r
      .attr('text-anchor', 'start')\r
      .attr('fill', '#f59e0b')\r
      .attr('font-size', '8px')\r
      .attr('font-weight', '700')\r
      .text('Sand (100% B)')\r
\r
    g.append('text')\r
      .attr('x', vRight[0] + 6).attr('y', vRight[1] + 12)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', '#10b981')\r
      .attr('font-size', '8px')\r
      .attr('font-weight', '700')\r
      .text('Silt (100% C)')\r
\r
    // Data points\r
    const colorScale = d3.scaleOrdinal(d3.schemeTableau10)\r
\r
    data.forEach((d, i) => {\r
      const [px, py] = coord(d.a || 0, d.b || 0, d.c || 0)\r
\r
      g.append('circle')\r
        .attr('cx', px)\r
        .attr('cy', py)\r
        .attr('r', 4.5)\r
        .attr('fill', colorScale(d.type || i))\r
        .attr('stroke', '#ffffff')\r
        .attr('stroke-width', 1.2)\r
\r
      g.append('text')\r
        .attr('x', px + 6)\r
        .attr('y', py + 2.5)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', '600')\r
        .text(d.label || \`S\${i + 1}\`)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Ternary Plot (3-Phase Barycentric Graph)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};