var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'ladder-plot',\r
  title: 'Ladder Plot',\r
  desc: 'Ladder Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LadderPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ladder-plot"],\r
}\r
\r
export default function LadderPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"from":"A","to":"B","value":40},{"from":"A","to":"C","value":25},{"from":"A","to":"D","value":15},{"from":"B","to":"C","value":30},{"from":"B","to":"E","value":20},{"from":"C","to":"D","value":35},{"from":"C","to":"E","value":10},{"from":"D","to":"E","value":25}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const allNodes = [...new Set(data.flatMap(d => [d.from, d.to]))]\r
    const y = d3.scaleBand()\r
      .domain(allNodes)\r
      .range([0, IH])\r
      .padding(0.4)\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d.value) * 1.1])\r
      .range([0, IW / 2])\r
\r
    // Left bar (from values)\r
    const fromValues = allNodes.map(node => ({\r
      node,\r
      value: data.filter(d => d.from === node).reduce((sum, d) => sum + d.value, 0)\r
    }))\r
\r
    // Right bar (to values)\r
    const toValues = allNodes.map(node => ({\r
      node,\r
      value: data.filter(d => d.to === node).reduce((sum, d) => sum + d.value, 0)\r
    }))\r
\r
    // Draw connecting arcs\r
    data.forEach((d, i) => {\r
      const fromY = y(d.from) + y.bandwidth() / 2\r
      const toY = y(d.to) + y.bandwidth() / 2\r
      const startX = x(d.value)\r
      const endX = 0\r
\r
      // Arc path\r
      const path = \`M \${startX} \${fromY} C \${startX + 30} \${fromY}, \${endX - 30} \${toY}, \${endX} \${toY}\`\r
\r
      svg.append('path')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', path)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', Math.max(1, d.value / 10))\r
        .attr('stroke-opacity', 0.5)\r
    })\r
\r
    // Left bars\r
    fromValues.forEach(d => {\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.value)).attr('y', y(d.node))\r
        .attr('width', Math.max(0, IW / 2 - x(d.value)))\r
        .attr('height', y.bandwidth())\r
        .attr('fill', colors[0]).attr('opacity', 0.3)\r
        .attr('stroke', colors[0]).attr('stroke-width', 1)\r
    })\r
\r
    // Right bars\r
    toValues.forEach(d => {\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left + IW / 2},\${M.top})\`)\r
        .attr('x', 0).attr('y', y(d.node))\r
        .attr('width', x(d.value))\r
        .attr('height', y.bandwidth())\r
        .attr('fill', colors[1]).attr('opacity', 0.3)\r
        .attr('stroke', colors[1]).attr('stroke-width', 1)\r
    })\r
\r
    // Node labels\r
    allNodes.forEach(node => {\r
      const cy = y(node) + y.bandwidth() / 2\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left - 5},\${M.top + cy})\`)\r
        .attr('text-anchor', 'end')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 'bold')\r
        .text(node)\r
\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + IW / 2 + 5},\${M.top + cy})\`)\r
        .attr('text-anchor', 'start')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 'bold')\r
        .text(node)\r
    })\r
\r
    // Divider line\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', 0)\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Ladder Plot - Flow Comparison')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};