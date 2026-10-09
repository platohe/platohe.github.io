var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'spiral-plot',\r
  title: 'Spiral Plot',\r
  desc: 'Spiral Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpiralPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spiral-plot"],\r
}\r
\r
export default function SpiralPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"index":0,"value":56.011},{"index":1,"value":60.443},{"index":2,"value":70.207},{"index":3,"value":73.637},{"index":4,"value":73.269},{"index":5,"value":80.51},{"index":6,"value":80.693},{"index":7,"value":85.811},{"index":8,"value":88.642},{"index":9,"value":83.939},{"index":10,"value":79.778},{"index":11,"value":83.075},{"index":12,"value":77.721},{"index":13,"value":68.535},{"index":14,"value":62.022},{"index":15,"value":59.241},{"index":16,"value":55.115},{"index":17,"value":48.44},{"index":18,"value":36.763},{"index":19,"value":36.352},{"index":20,"value":35.669},{"index":21,"value":24.365},{"index":22,"value":27.375},{"index":23,"value":20.505},{"index":24,"value":22.785},{"index":25,"value":21.85},{"index":26,"value":25.353},{"index":27,"value":34.653},{"index":28,"value":36.365},{"index":29,"value":36.333},{"index":30,"value":43.348},{"index":31,"value":55.934},{"index":32,"value":58.374},{"index":33,"value":67.436},{"index":34,"value":68.018},{"index":35,"value":74.209},{"index":36,"value":74.184},{"index":37,"value":77.475},{"index":38,"value":84.604},{"index":39,"value":85.924},{"index":40,"value":82.132},{"index":41,"value":84.679},{"index":42,"value":77.733},{"index":43,"value":75.068},{"index":44,"value":74.934},{"index":45,"value":70.951},{"index":46,"value":61.767},{"index":47,"value":52.785},{"index":48,"value":47.612},{"index":49,"value":41.936},{"index":50,"value":34.426},{"index":51,"value":35.602},{"index":52,"value":31.973},{"index":53,"value":29.248},{"index":54,"value":29.85},{"index":55,"value":20.88},{"index":56,"value":30.062},{"index":57,"value":26.732},{"index":58,"value":34.738},{"index":59,"value":30.567},{"index":60,"value":35.012},{"index":61,"value":39.412},{"index":62,"value":48.636},{"index":63,"value":55.826},{"index":64,"value":63.065},{"index":65,"value":71.601},{"index":66,"value":68.538},{"index":67,"value":79.407},{"index":68,"value":85.124},{"index":69,"value":81.093},{"index":70,"value":86.784},{"index":71,"value":81.737},{"index":72,"value":84.173},{"index":73,"value":85.063},{"index":74,"value":74.853},{"index":75,"value":79.465},{"index":76,"value":70.22},{"index":77,"value":68.255},{"index":78,"value":57.573},{"index":79,"value":53.027},{"index":80,"value":44.733},{"index":81,"value":41.79},{"index":82,"value":34.086},{"index":83,"value":33.944},{"index":84,"value":26.325},{"index":85,"value":25.656},{"index":86,"value":28.524},{"index":87,"value":27.171},{"index":88,"value":31.475},{"index":89,"value":32.886},{"index":90,"value":31.789},{"index":91,"value":37.307},{"index":92,"value":39.922},{"index":93,"value":43.6},{"index":94,"value":55.481},{"index":95,"value":57.629},{"index":96,"value":68.159},{"index":97,"value":74.74},{"index":98,"value":71.395},{"index":99,"value":79.164}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const centerX = IW / 2\r
    const centerY = IH / 2\r
    const maxRadius = Math.min(IW, IH) / 2 - 20\r
    const spiralLoops = 3\r
    const pointsPerLoop = Math.ceil(data.length / spiralLoops)\r
\r
    // Calculate spiral positions\r
    const spiralData = data.map((d, i) => {\r
      const progress = i / data.length\r
      const angle = progress * spiralLoops * 2 * Math.PI\r
      const radius = progress * maxRadius\r
\r
      return {\r
        ...d,\r
        x: centerX + radius * Math.cos(angle),\r
        y: centerY + radius * Math.sin(angle),\r
        angle,\r
        radius\r
      }\r
    })\r
\r
    const maxValue = d3.max(data, d => d.value) || 100\r
    const minValue = d3.min(data, d => d.value) || 0\r
    const valueRange = maxValue - minValue || 1\r
\r
    // Draw spiral segments\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('line')\r
      .data(spiralData.slice(0, -1))\r
      .join('line')\r
      .attr('x1', d => d.x)\r
      .attr('y1', d => d.y)\r
      .attr('x2', (_, i) => spiralData[i + 1].x)\r
      .attr('y2', (_, i) => spiralData[i + 1].y)\r
      .attr('stroke', d => {\r
        const normalizedValue = (d.value - minValue) / valueRange\r
        const colorIndex = Math.floor(normalizedValue * (colors.length - 1))\r
        return colors[Math.max(0, Math.min(colorIndex, colors.length - 1))]\r
      })\r
      .attr('stroke-width', 2)\r
      .attr('stroke-opacity', 0.8)\r
\r
    // Draw points on spiral\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle')\r
      .data(spiralData)\r
      .join('circle')\r
      .attr('cx', d => d.x)\r
      .attr('cy', d => d.y)\r
      .attr('r', 3)\r
      .attr('fill', d => {\r
        const normalizedValue = (d.value - minValue) / valueRange\r
        const colorIndex = Math.floor(normalizedValue * (colors.length - 1))\r
        return colors[Math.max(0, Math.min(colorIndex, colors.length - 1))]\r
      })\r
      .attr('fill-opacity', 0.9)\r
      .attr('stroke', 'white')\r
      .attr('stroke-width', 1)\r
\r
    // Draw center point\r
    svg.append('circle')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY})\`)\r
      .attr('r', 4)\r
      .attr('fill', colors[0])\r
      .attr('fill-opacity', 0.8)\r
\r
    // Add spiral loops indicators\r
    for (let i = 1; i <= spiralLoops; i++) {\r
      const radius = (i / spiralLoops) * maxRadius\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY})\`)\r
        .attr('r', radius)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1)\r
        .attr('stroke-dasharray', '3,3')\r
        .attr('stroke-opacity', 0.3)\r
    }\r
\r
    // Add color legend\r
    const legendWidth = 80\r
    const legendHeight = 10\r
    const legendX = M.left + IW - legendWidth - 10\r
    const legendY = M.top + IH + 20\r
\r
    const defs = svg.append('defs')\r
    const gradient = defs.append('linearGradient')\r
      .attr('id', 'spiralLegendGradient')\r
      .attr('x1', '0%')\r
      .attr('y1', '0%')\r
      .attr('x2', '100%')\r
      .attr('y2', '0%')\r
\r
    gradient.append('stop')\r
      .attr('offset', '0%')\r
      .attr('stop-color', colors[0])\r
\r
    gradient.append('stop')\r
      .attr('offset', '100%')\r
      .attr('stop-color', colors[colors.length - 1])\r
\r
    svg.append('rect')\r
      .attr('transform', \`translate(\${legendX},\${legendY})\`)\r
      .attr('width', legendWidth)\r
      .attr('height', legendHeight)\r
      .attr('fill', 'url(#spiralLegendGradient)')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(\${legendX},\${legendY + legendHeight + 12})\`)\r
      .text(minValue.toFixed(0))\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(\${legendX + legendWidth},\${legendY + legendHeight + 12})\`)\r
      .text(maxValue.toFixed(0))\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
\r
    // Add title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top - 10})\`)\r
      .text('Spiral Plot - Periodic Pattern Detection')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Add data count label\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top + IH + 45})\`)\r
      .text(\`\${data.length} data points, \${spiralLoops} spiral loops\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};