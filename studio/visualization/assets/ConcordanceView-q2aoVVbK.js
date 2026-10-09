var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'concordance-view',\r
  title: 'Concordance View',\r
  desc: 'Concordance View — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConcordanceView',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","concordance-view"],\r
}\r
\r
export default function ConcordanceView({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT = {\r
    keyword: 'visualization',\r
    lines: [\r
      { left: 'data ', keyword: 'visualization', right: ' is powerful' },\r
      { left: 'interactive ', keyword: 'visualization', right: ' helps insight' },\r
      { left: 'effective ', keyword: 'visualization', right: ' drives decisions' },\r
      { left: 'modern ', keyword: 'visualization', right: ' uses D3 and React' },\r
      { left: 'text ', keyword: 'visualization', right: ' reveals patterns' },\r
      { left: 'network ', keyword: 'visualization', right: ' shows connections' },\r
      { left: 'scientific ', keyword: 'visualization', right: ' explores data' },\r
      { left: 'geospatial ', keyword: 'visualization', right: ' maps the world' },\r
      { left: 'temporal ', keyword: 'visualization', right: ' tracks change' },\r
      { left: 'hierarchical ', keyword: 'visualization', right: ' nests categories' },\r
    ],\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let keyword = DEFAULT.keyword\r
    let lines = DEFAULT.lines\r
\r
    if (customData) {\r
      if (customData.keyword && customData.lines) {\r
        keyword = customData.keyword\r
        lines = customData.lines\r
      } else if (customData.keyword && customData.contexts) {\r
        keyword = customData.keyword\r
        lines = customData.contexts.map(ctx => {\r
          const lower = ctx.toLowerCase()\r
          const idx = lower.indexOf(keyword.toLowerCase())\r
          if (idx === -1) return { left: ctx.slice(0, 14), keyword, right: ctx.slice(14, 32) }\r
          return { left: ctx.slice(Math.max(0, idx - 18), idx), keyword: ctx.slice(idx, idx + keyword.length), right: ctx.slice(idx + keyword.length, idx + keyword.length + 18) }\r
        })\r
      } else if (Array.isArray(customData) && customData.length && typeof customData[0] === 'string') {\r
        // string[] contexts\r
        lines = customData.map(ctx => {\r
          const kw = keyword\r
          const lower = ctx.toLowerCase()\r
          const idx = lower.indexOf(kw.toLowerCase())\r
          if (idx === -1) return { left: ctx.slice(0, 18), keyword: kw, right: ctx.slice(18, 36) }\r
          return { left: ctx.slice(Math.max(0, idx - 18), idx), keyword: ctx.slice(idx, idx + kw.length), right: ctx.slice(idx + kw.length, idx + kw.length + 18) }\r
        })\r
      }\r
    }\r
\r
    lines = lines.slice(0, 10)\r
    const rowH = Math.min(22, (IH - 6) / Math.max(lines.length, 1))\r
    const cx = W / 2\r
    const top = M.top\r
\r
    // title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 16)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 700)\r
      .text(\`KWIC: "\${keyword}"\`)\r
\r
    // header line\r
    svg.append('line').attr('x1', M.left).attr('x2', W - M.right).attr('y1', 22).attr('y2', 22)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
\r
    // column headers\r
    svg.append('text').attr('x', cx - 46).attr('y', 30).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').attr('font-weight', 600).text('LEFT')\r
    svg.append('text').attr('x', cx).attr('y', 30).attr('text-anchor', 'middle').attr('fill', colors[0]).attr('font-size', '7px').attr('font-weight', 700).text('KEYWORD')\r
    svg.append('text').attr('x', cx + 46).attr('y', 30).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').attr('font-weight', 600).text('RIGHT')\r
\r
    const g = svg.append('g')\r
\r
    lines.forEach((line, i) => {\r
      const y = top + 10 + i * rowH\r
\r
      // alternating bg\r
      if (i % 2 === 0) {\r
        g.append('rect').attr('x', M.left).attr('y', y - rowH + 7).attr('width', IW).attr('height', rowH).attr('fill', 'var(--border)').attr('opacity', 0.1).attr('rx', 2)\r
      }\r
\r
      // line number\r
      g.append('text').attr('x', M.left + 4).attr('y', y + 1).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(\`\${i + 1}\`)\r
\r
      // left context right-aligned\r
      g.append('text').attr('x', cx - 6).attr('y', y + 1).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '8.5px').text(line.left.length > 20 ? '…' + line.left.slice(-19) : line.left)\r
\r
      // keyword centered bold\r
      g.append('text').attr('x', cx).attr('y', y + 1).attr('text-anchor', 'middle').attr('fill', colors[0]).attr('font-size', '8.5px').attr('font-weight', 800).text(line.keyword)\r
\r
      // right context\r
      g.append('text').attr('x', cx + 6).attr('y', y + 1).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '8.5px').text(line.right.length > 20 ? line.right.slice(0, 19) + '…' : line.right)\r
    })\r
\r
    // footer\r
    svg.append('text').attr('x', W / 2).attr('y', H - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text(\`\${lines.length} contexts — keyword centered\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};