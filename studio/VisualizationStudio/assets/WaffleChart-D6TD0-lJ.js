var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'waffle-chart',\r
  title: 'Waffle Chart',\r
  desc: 'Waffle Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WaffleChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","waffle-chart"],\r
}\r
\r
export default function WaffleChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Renewable","value":38,"color":"#10b981"},{"label":"Natural Gas","value":28,"color":"#3b82f6"},{"label":"Coal","value":20,"color":"#6b7280"},{"label":"Nuclear","value":14,"color":"#f59e0b"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData : DEFAULT_DATA\r
\r
    const total = d3.sum(data, d => d.value)\r
    const cells = 100\r
    const cols = 10\r
    const rows = 10\r
    const margin = { top: 38, right: 20, bottom: 20, left: 20 }\r
    const plotW = W - margin.left - margin.right\r
    const cellSize = Math.min(plotW / cols, (H - margin.top - margin.bottom) / rows) - 2\r
    const pad = 2\r
    const step = cellSize + pad\r
    const totalW = cols * step - pad\r
    const totalH = rows * step - pad\r
    const ox = (W - margin.left - margin.right - totalW) / 2 + margin.left\r
    const oy = margin.top\r
\r
    // Build an array of 100 category assignments\r
    const cellData = []\r
    let idx = 0\r
    data.forEach(cat => {\r
      const count = Math.round((cat.value / total) * cells)\r
      for (let c = 0; c < count && idx < cells; c++, idx++) {\r
        cellData.push({ ...cat })\r
      }\r
    })\r
    while (cellData.length < cells) cellData.push({ ...data[data.length - 1] })\r
\r
    const g = svg.append('g')\r
\r
    // Grid cells\r
    cellData.forEach((d, i) => {\r
      const col = i % cols\r
      const row = Math.floor(i / cols)\r
      g.append('rect')\r
        .attr('x', ox + col * step)\r
        .attr('y', oy + row * step)\r
        .attr('width', cellSize)\r
        .attr('height', cellSize)\r
        .attr('fill', d.color)\r
        .attr('rx', 2)\r
        .attr('fill-opacity', 0.9)\r
    })\r
\r
    // Legend row\r
    const legG = svg.append('g').attr('transform', \`translate(\${W / 2 - data.length * 50 / 2},\${margin.top + totalH + 14})\`)\r
    data.forEach((d, i) => {\r
      const lx = i * (totalW / data.length)\r
      legG.append('rect').attr('x', lx).attr('y', 0).attr('width', 9).attr('height', 9).attr('fill', d.color).attr('rx', 2)\r
      legG.append('text').attr('x', lx + 12).attr('y', 8)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
        .text(\`\${d.label} \${d.value}%\`)\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Waffle / Unit Square Chart (Energy Mix 2025)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};