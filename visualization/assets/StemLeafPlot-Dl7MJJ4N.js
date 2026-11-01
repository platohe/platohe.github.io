var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
\r
export const meta = {\r
  id: 'stem-leaf-plot',\r
  title: 'Stem Leaf Plot',\r
  desc: 'Stem Leaf Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StemLeafPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","stem-leaf-plot"],\r
}\r
\r
export default function StemLeafPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [12,15,14,18,22,24,25,28,30,32,35,38,40,42,45,48,50,55,58,62,65,70,73,78,81,84,88,90,95]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const sorted = [...data].sort(d3.ascending)\r
    const groups = d3.group(sorted, (d) => Math.floor(d / 10))\r
    const rows = Array.from(groups.keys()).sort(d3.ascending)\r
    const rowH = 20\r
    const y0 = M.top\r
\r
    svg.append('text')\r
      .attr('x', M.left).attr('y', M.top - 8)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Stem | Leaf')\r
\r
    rows.forEach((stem, i) => {\r
      const leaves = groups.get(stem)\r
      svg.append('text')\r
        .attr('x', M.left).attr('y', y0 + i * rowH + 14)\r
        .attr('fill', colors[0]).attr('font-size', '13px').attr('font-weight', 600)\r
        .attr('font-family', 'ui-monospace, SFMono-Regular, Menlo, monospace')\r
        .text(String(stem).padStart(2, '0'))\r
      svg.append('text')\r
        .attr('x', M.left + 44).attr('y', y0 + i * rowH + 14)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '13px')\r
        .attr('font-family', 'ui-monospace, SFMono-Regular, Menlo, monospace')\r
        .text(leaves.map((d) => Math.abs(d % 10)).join(' '))\r
    })\r
\r
    svg.append('text')\r
      .attr('x', M.left).attr('y', y0 + rows.length * rowH + 26)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '11px')\r
      .text(\`n = \${sorted.length}\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};