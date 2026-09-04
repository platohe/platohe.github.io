var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'scatter3d',\r
  title: 'Scatter3 D',\r
  desc: 'Scatter3 D — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'Scatter3D',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatter3-d"],\r
}\r
\r
export default function Scatter3D({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":60.11,"y":44.829,"z":85.247,"category":"C"},{"x":17.481,"y":52.659,"z":27.323,"category":"B"},{"x":86.547,"y":47.232,"z":24.992,"category":"C"},{"x":74.574,"y":30.7,"z":19.725,"category":"B"},{"x":68.661,"y":61.062,"z":0.384,"category":"B"},{"x":83.734,"y":5.121,"z":59.232,"category":"A"},{"x":26.696,"y":6.178,"z":18.569,"category":"C"},{"x":53.034,"y":2.712,"z":17.301,"category":"C"},{"x":48.774,"y":80.902,"z":31.946,"category":"B"},{"x":3.744,"y":5.139,"z":55.66,"category":"B"},{"x":24.517,"y":64.569,"z":20.951,"category":"A"},{"x":73.862,"y":85.871,"z":50.8,"category":"A"},{"x":28.421,"y":29.299,"z":7.469,"category":"B"},{"x":68.077,"y":69.309,"z":92.784,"category":"A"},{"x":94.374,"y":43.114,"z":94.229,"category":"A"},{"x":11.094,"y":1.584,"z":36.045,"category":"B"},{"x":61.192,"y":89.956,"z":7.758,"category":"C"},{"x":93.487,"y":27.825,"z":70.659,"category":"A"},{"x":52.032,"y":82.189,"z":12.059,"category":"C"},{"x":56.28,"y":91.612,"z":43.399,"category":"B"},{"x":33.696,"y":59.624,"z":32.296,"category":"C"},{"x":29.521,"y":44.976,"z":84.313,"category":"C"},{"x":99.401,"y":89.02,"z":43.189,"category":"B"},{"x":29.593,"y":10.088,"z":69.672,"category":"A"},{"x":78.594,"y":90.478,"z":9.364,"category":"B"},{"x":82.195,"y":12.998,"z":97.275,"category":"A"},{"x":70.943,"y":69.969,"z":22.318,"category":"B"},{"x":16.344,"y":65.467,"z":33.593,"category":"A"},{"x":62.89,"y":88.688,"z":32.638,"category":"C"},{"x":39.295,"y":13.139,"z":86.37,"category":"B"},{"x":0.953,"y":73.742,"z":63.526,"category":"C"},{"x":90.816,"y":20.899,"z":60.393,"category":"B"},{"x":18.402,"y":4.747,"z":70.555,"category":"C"},{"x":29.149,"y":27.548,"z":33.66,"category":"A"},{"x":22.09,"y":99.352,"z":57.235,"category":"C"},{"x":16.387,"y":17.083,"z":56.096,"category":"A"},{"x":39.466,"y":43.441,"z":41.836,"category":"C"},{"x":39.851,"y":33.612,"z":89.564,"category":"A"},{"x":49.526,"y":61.087,"z":54.636,"category":"B"},{"x":23.541,"y":32.537,"z":29.878,"category":"A"},{"x":66.93,"y":22.089,"z":16.93,"category":"C"},{"x":31.422,"y":12.491,"z":31.379,"category":"A"},{"x":57.754,"y":20.769,"z":48.153,"category":"B"},{"x":71.205,"y":91.263,"z":81.17,"category":"B"},{"x":15.414,"y":86.763,"z":52.568,"category":"C"},{"x":89.451,"y":45.01,"z":14.66,"category":"B"},{"x":80.759,"y":20.841,"z":38.964,"category":"B"},{"x":98.449,"y":49.2,"z":85.948,"category":"C"},{"x":74.362,"y":5.354,"z":6.934,"category":"A"},{"x":50.654,"y":67.666,"z":76.08,"category":"C"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const categories = [...new Set(data.map(d => d.category))]\r
    \r
    // 3D projection parameters\r
    const centerX = IW / 2\r
    const centerY = IH / 2\r
    const scale = 2.5\r
    const rotation = { x: 0.5, y: 0.5 }\r
\r
    // Project 3D to 2D\r
    const project = (x, y, z) => {\r
      // Apply rotation\r
      const cosX = Math.cos(rotation.x)\r
      const sinX = Math.sin(rotation.x)\r
      const cosY = Math.cos(rotation.y)\r
      const sinY = Math.sin(rotation.y)\r
\r
      // Rotate around Y axis\r
      const x1 = x * cosY - z * sinY\r
      const z1 = x * sinY + z * cosY\r
\r
      // Rotate around X axis\r
      const y1 = y * cosX - z1 * sinX\r
      const z2 = y * sinX + z1 * cosX\r
\r
      // Perspective projection\r
      const perspective = 1000\r
      const factor = perspective / (perspective + z2)\r
\r
      return {\r
        x: centerX + x1 * scale * factor,\r
        y: centerY + y1 * scale * factor,\r
        z: z2,\r
        scale: factor\r
      }\r
    }\r
\r
    // Calculate bounds for normalization\r
    const xExtent = d3.extent(data, d => d.x)\r
    const yExtent = d3.extent(data, d => d.y)\r
    const zExtent = d3.extent(data, d => d.z)\r
\r
    const normalize = (value, extent) => \r
      ((value - extent[0]) / (extent[1] - extent[0] || 1)) * 100 - 50\r
\r
    // Project all points\r
    const projectedData = data.map(d => {\r
      const normalized = {\r
        x: normalize(d.x, xExtent),\r
        y: normalize(d.y, yExtent),\r
        z: normalize(d.z, zExtent)\r
      }\r
      const projected = project(normalized.x, normalized.y, normalized.z)\r
      return {\r
        ...d,\r
        ...projected,\r
        originalX: d.x,\r
        originalY: d.y,\r
        originalZ: d.z\r
      }\r
    })\r
\r
    // Sort by z for proper depth rendering\r
    projectedData.sort((a, b) => a.z - b.z)\r
\r
    // Draw 3D axes\r
    const axisLength = 40\r
    const origin = project(0, 0, 0)\r
    const xAxis = project(axisLength, 0, 0)\r
    const yAxis = project(0, axisLength, 0)\r
    const zAxis = project(0, 0, axisLength)\r
\r
    // Draw axes\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('line')\r
      .data([\r
        { x1: origin.x, y1: origin.y, x2: xAxis.x, y2: xAxis.y, color: colors[0] },\r
        { x1: origin.x, y1: origin.y, x2: yAxis.x, y2: yAxis.y, color: colors[1] },\r
        { x1: origin.x, y1: origin.y, x2: zAxis.x, y2: zAxis.y, color: colors[2] }\r
      ])\r
      .join('line')\r
      .attr('x1', d => d.x1)\r
      .attr('y1', d => d.y1)\r
      .attr('x2', d => d.x2)\r
      .attr('y2', d => d.y2)\r
      .attr('stroke', d => d.color)\r
      .attr('stroke-width', 2)\r
\r
    // Axis labels\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('text')\r
      .data([\r
        { x: xAxis.x, y: xAxis.y, text: 'X' },\r
        { x: yAxis.x, y: yAxis.y, text: 'Y' },\r
        { x: zAxis.x, y: zAxis.y, text: 'Z' }\r
      ])\r
      .join('text')\r
      .attr('x', d => d.x + 5)\r
      .attr('y', d => d.y + 5)\r
      .text(d => d.text)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 'bold')\r
\r
    // Draw points\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle')\r
      .data(projectedData)\r
      .join('circle')\r
      .attr('cx', d => d.x)\r
      .attr('cy', d => d.y)\r
      .attr('r', d => 5 * d.scale)\r
      .attr('fill', d => colors[categories.indexOf(d.category) % colors.length])\r
      .attr('fill-opacity', 0.7)\r
      .attr('stroke', d => colors[categories.indexOf(d.category) % colors.length])\r
      .attr('stroke-width', 1)\r
\r
    // Add title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('3D Scatter Plot - Interactive Perspective')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Add legend\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 80},\${M.top + 10})\`)\r
      .selectAll('g')\r
      .data(categories)\r
      .join('g')\r
      .attr('transform', (d, i) => \`translate(0,\${i * 20})\`)\r
      .each(function(d, i) {\r
        d3.select(this)\r
          .append('circle')\r
          .attr('r', 5)\r
          .attr('fill', colors[i % colors.length])\r
          .attr('fill-opacity', 0.7)\r
        \r
        d3.select(this)\r
          .append('text')\r
          .attr('x', 12)\r
          .attr('y', 4)\r
          .text(d)\r
          .attr('fill', 'var(--text-secondary)')\r
          .attr('font-size', '11px')\r
      })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};