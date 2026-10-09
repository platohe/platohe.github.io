var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
\r
export const meta = {\r
  id: 'thermometer-chart',\r
  title: 'Thermometer Chart',\r
  desc: 'Thermometer Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ThermometerChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","thermometer-chart"],\r
}\r
\r
export default function ThermometerChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"label":"CPU","value":72,"min":0,"max":100},{"label":"RAM","value":58,"min":0,"max":100},{"label":"Disk","value":34,"min":0,"max":100},{"label":"GPU","value":86,"min":0,"max":100}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const n = data.length\r
    const slotW = (W - M.left - M.right) / n\r
    const tubeW = 22\r
    const tubeH = H - M.top - M.bottom - 26\r
    const bulbR = tubeW / 2 + 6\r
\r
    data.forEach((d, i) => {\r
      const cx = M.left + slotW * i + slotW / 2\r
      const tubeTop = M.top\r
      const tubeBottom = tubeTop + tubeH\r
      const color = d.value > 80 ? '#ef4444' : d.value > 60 ? '#f59e0b' : colors[0]\r
      const frac = Math.max(0, Math.min(1, (d.value - d.min) / (d.max - d.min)))\r
      const fillH = frac * tubeH\r
\r
      svg.append('rect')\r
        .attr('x', cx - tubeW / 2).attr('y', tubeTop)\r
        .attr('width', tubeW).attr('height', tubeH)\r
        .attr('rx', tubeW / 2)\r
        .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
      svg.append('rect')\r
        .attr('x', cx - tubeW / 2 + 2).attr('y', tubeBottom - fillH)\r
        .attr('width', tubeW - 4).attr('height', fillH)\r
        .attr('rx', (tubeW - 4) / 2)\r
        .attr('fill', color).attr('opacity', 0.85)\r
      svg.append('circle')\r
        .attr('cx', cx).attr('cy', tubeBottom + bulbR - 6)\r
        .attr('r', bulbR)\r
        .attr('fill', color).attr('opacity', 0.85)\r
      svg.append('text')\r
        .attr('x', cx).attr('y', tubeTop - 8)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(\`\${d.label} \${d.value}\`)\r
      svg.append('text')\r
        .attr('x', cx - tubeW / 2 - 6).attr('y', tubeTop + 10)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px')\r
        .text(d.max)\r
      svg.append('text')\r
        .attr('x', cx - tubeW / 2 - 6).attr('y', tubeBottom + 2)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px')\r
        .text(d.min)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};