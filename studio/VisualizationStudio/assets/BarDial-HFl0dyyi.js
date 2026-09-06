var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-dial',\r
  title: 'Bar Dial',\r
  desc: 'Bar Dial — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarDial',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-dial"],\r
}\r
\r
export default function BarDial({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Alpha","value":85},{"label":"Beta","value":62},{"label":"Gamma","value":91},{"label":"Delta","value":45},{"label":"Epsilon","value":73},{"label":"Zeta","value":58}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => a.value - b.value)\r
    const n = sorted.length\r
    const r = 120\r
    const cx = W / 2, cy = H / 2 + 10\r
\r
    const angle = (2 * Math.PI) / n\r
    const maxVal = d3.max(data, d => d.value) || 100\r
\r
    sorted.forEach((d, i) => {\r
      const a = angle * i - Math.PI / 2\r
      const barR = r * (d.value / maxVal)\r
\r
      svg.append('rect')\r
        .attr('x', cx - 6).attr('y', cy - barR)\r
        .attr('width', 12).attr('height', barR * 2)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.8)\r
        .attr('rx', 3)\r
        .attr('transform', \`rotate(\${(a * 180) / Math.PI},\${cx},\${cy})\`)\r
\r
      const labelR = r + 20\r
      const lx = cx + labelR * Math.cos(a)\r
      const ly = cy + labelR * Math.sin(a)\r
      svg.append('text')\r
        .attr('x', lx).attr('y', ly + 3)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
        .text(d.label)\r
      svg.append('text')\r
        .attr('x', lx).attr('y', ly + 14)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', colors[i % colors.length]).attr('font-size', '9px').attr('font-weight', 700)\r
        .text(d.value)\r
    })\r
\r
    svg.append('circle').attr('cx', cx).attr('cy', cy).attr('r', r * 0.15)\r
      .attr('fill', 'var(--bg-card)').attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};