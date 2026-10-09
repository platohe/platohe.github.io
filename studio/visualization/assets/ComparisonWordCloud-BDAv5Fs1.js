var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'comparison-word-cloud',\r
  title: 'Comparison Word Cloud',\r
  desc: 'Comparison Word Cloud — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ComparisonWordCloud',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","comparison-word-cloud"],\r
}\r
\r
export default function ComparisonWordCloud({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT = {\r
    corpusA: [\r
      { text: 'Data', size: 48 }, { text: 'AI', size: 42 }, { text: 'Machine', size: 36 },\r
      { text: 'Learning', size: 34 }, { text: 'Model', size: 28 }, { text: 'Neural', size: 24 },\r
      { text: 'Algorithm', size: 22 }, { text: 'Cloud', size: 20 },\r
    ],\r
    corpusB: [\r
      { text: 'Design', size: 46 }, { text: 'Nature', size: 40 }, { text: 'Forest', size: 34 },\r
      { text: 'Ocean', size: 30 }, { text: 'Flora', size: 26 }, { text: 'Fauna', size: 24 },\r
      { text: 'River', size: 22 }, { text: 'Soil', size: 18 },\r
    ],\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let corpusA = DEFAULT.corpusA\r
    let corpusB = DEFAULT.corpusB\r
\r
    if (customData) {\r
      if (Array.isArray(customData) && customData[0]?.sizeA !== undefined) {\r
        corpusA = customData.map(d => ({ text: d.word ?? d.text, size: d.sizeA }))\r
        corpusB = customData.map(d => ({ text: d.word ?? d.text, size: d.sizeB }))\r
      } else if (customData.corpusA && customData.corpusB) {\r
        corpusA = customData.corpusA\r
        corpusB = customData.corpusB\r
      } else if (Array.isArray(customData) && customData.length > 0 && customData[0]?.text) {\r
        // single list — split half\r
        const mid = Math.ceil(customData.length / 2)\r
        corpusA = customData.slice(0, mid)\r
        corpusB = customData.slice(mid)\r
      }\r
    }\r
\r
    const leftColor = ['#6366f1', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981']\r
    const rightColor = ['#f59e0b', '#ef4444', '#84cc16', '#f97316', '#14b8a6']\r
\r
    function renderCloud(words, cx, cy, palette) {\r
      const placed = []\r
      const W2 = W / 2\r
      words.forEach((w) => {\r
        const fontSize = w.size\r
        let x = cx, y = cy\r
        let angle = 0\r
        let spiralR = 0\r
        let found = false\r
        while (!found && spiralR < 90) {\r
          x = cx + spiralR * Math.cos(angle)\r
          y = cy + spiralR * Math.sin(angle)\r
          // keep inside half\r
          const inHalf = palette === leftColor ? x > 6 && x < W2 - 6 : x > W2 + 6 && x < W - 6\r
          if (!inHalf) { angle += 0.35; spiralR = 8 + angle * 2.2; continue }\r
          const overlapping = placed.some(p => {\r
            const dx = x - p.x, dy = y - p.y\r
            return Math.sqrt(dx * dx + dy * dy) < (fontSize + p.size) / 2 + 5\r
          })\r
          if (!overlapping) found = true\r
          else { angle += 0.35; spiralR = 8 + angle * 2.2 }\r
        }\r
        if (found) {\r
          placed.push({ text: w.text, x, y, size: fontSize })\r
          svg.append('text')\r
            .attr('x', x).attr('y', y)\r
            .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
            .attr('fill', palette[Math.floor(Math.random() * palette.length)])\r
            .attr('font-size', \`\${fontSize * 0.62}px\`)\r
            .attr('font-weight', 700)\r
            .text(w.text)\r
        }\r
      })\r
    }\r
\r
    const cy = 155\r
    renderCloud(corpusA, W * 0.25, cy, leftColor)\r
    renderCloud(corpusB, W * 0.75, cy, rightColor)\r
\r
    // divider\r
    svg.append('line').attr('x1', W / 2).attr('x2', W / 2).attr('y1', 28).attr('y2', H - 18)\r
      .attr('stroke', 'var(--border)').attr('stroke-dasharray', '3,3')\r
\r
    // headers\r
    svg.append('text').attr('x', W * 0.25).attr('y', 16).attr('text-anchor', 'middle').attr('fill', '#6366f1').attr('font-size', '10px').attr('font-weight', 700).text('Corpus A')\r
    svg.append('text').attr('x', W * 0.75).attr('y', 16).attr('text-anchor', 'middle').attr('fill', '#f59e0b').attr('font-size', '10px').attr('font-weight', 700).text('Corpus B')\r
\r
    svg.append('text').attr('x', W / 2).attr('y', H - 3).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('Comparison word clouds — size ∝ frequency')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};