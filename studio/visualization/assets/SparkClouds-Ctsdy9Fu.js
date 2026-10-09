var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'spark-clouds',\r
  title: 'Spark Clouds',\r
  desc: 'Spark Clouds — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SparkClouds',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spark-clouds"],\r
}\r
\r
export default function SparkClouds({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT = [\r
    { year: '2022', words: [{ text: 'Data', size: 28 }, { text: 'Chart', size: 22 }, { text: 'AI', size: 18 }, { text: 'Model', size: 16 }, { text: 'Graph', size: 14 }, { text: 'Insight', size: 12 }] },\r
    { year: '2023', words: [{ text: 'Design', size: 30 }, { text: 'Data', size: 24 }, { text: 'Story', size: 20 }, { text: 'Visual', size: 18 }, { text: 'Pattern', size: 14 }, { text: 'Network', size: 12 }] },\r
    { year: '2024', words: [{ text: 'AI', size: 32 }, { text: 'Learning', size: 26 }, { text: 'Data', size: 22 }, { text: 'Neural', size: 18 }, { text: 'Risk', size: 14 }, { text: 'Future', size: 12 }] },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let timeline = DEFAULT\r
    if (Array.isArray(customData) && customData.length && customData[0]?.year) timeline = customData\r
    else if (customData?.timeline) timeline = customData.timeline\r
\r
    const n = timeline.length\r
    const colW = IW / n\r
    const cloudH = IH - 28\r
    const colPad = 4\r
\r
    svg.append('text').attr('x', W / 2).attr('y', 14).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 700).text('SparkClouds: Words over Time')\r
\r
    timeline.forEach((slot, idx) => {\r
      const gx = M.left + idx * colW\r
      const gy = M.top + 8\r
      const g = svg.append('g').attr('transform', \`translate(\${gx},\${gy})\`)\r
\r
      // card bg\r
      g.append('rect').attr('x', colPad / 2).attr('y', 0).attr('width', colW - colPad).attr('height', cloudH + 14).attr('rx', 8)\r
        .attr('fill', 'var(--bg-card)').attr('stroke', 'var(--border)').attr('stroke-width', 0.8)\r
\r
      // mini cloud spiral\r
      const words = slot.words ?? []\r
      const placed = []\r
      const cx = colW / 2, cy = cloudH / 2\r
      words.forEach((w, i) => {\r
        const fontSize = w.size * 0.42\r
        let x = cx, y = cy\r
        let angle = 0, spiralR = 0, found = false\r
        while (!found && spiralR < 54) {\r
          x = cx + spiralR * Math.cos(angle)\r
          y = cy + spiralR * Math.sin(angle)\r
          if (x < 10 || x > colW - 10 || y < 8 || y > cloudH - 8) { angle += 0.5; spiralR = 6 + angle * 1.8; continue }\r
          const overlap = placed.some(p => Math.hypot(x - p.x, y - p.y) < (fontSize + p.size * 0.42) / 2 + 4)\r
          if (!overlap) found = true\r
          else { angle += 0.5; spiralR = 6 + angle * 1.8 }\r
        }\r
        if (found) {\r
          placed.push({ x, y, size: fontSize, text: w.text })\r
          g.append('text').attr('x', x).attr('y', y).attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
            .attr('fill', colors[i % colors.length]).attr('font-size', \`\${fontSize}px\`).attr('font-weight', 700)\r
            .text(w.text)\r
        }\r
      })\r
\r
      // year label\r
      g.append('text').attr('x', colW / 2).attr('y', cloudH + 10).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 700).text(slot.year)\r
\r
      // divider vertical (except last)\r
      if (idx < n - 1) {\r
        svg.append('line').attr('x1', gx + colW).attr('x2', gx + colW).attr('y1', M.top + 8).attr('y2', M.top + 8 + cloudH + 14)\r
          .attr('stroke', 'var(--border)').attr('stroke-dasharray', '3,3').attr('opacity', 0.6)\r
      }\r
    })\r
\r
    svg.append('text').attr('x', W / 2).attr('y', H - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('Mini clouds per time slice — size ∝ frequency')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};