var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
const DEFAULT_CONFIG = {\r
  rows: 12,\r
  numBalls: 300,\r
}\r
\r
export const meta = {\r
  id: 'galton-board',\r
  title: 'Galton Board',\r
  desc: 'Galton Board — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GaltonBoard',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","galton-board"],\r
}\r
\r
export default function GaltonBoard({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_CONFIG, ...customData }\r
      : DEFAULT_CONFIG\r
\r
    const rows = config.rows || 12\r
    const cols = rows + 1\r
    const pegRadius = 4\r
    const slotWidth = IW / cols\r
    const pegSpacingY = IH / (rows + 2)\r
\r
    const pegs = []\r
    for (let row = 0; row < rows; row++) {\r
      for (let col = 0; col <= row; col++) {\r
        const x = slotWidth / 2 + col * slotWidth\r
        const y = M.top + 30 + row * pegSpacingY\r
        pegs.push({ x, y, row, col })\r
      }\r
    }\r
\r
    // Draw pegs\r
    pegs.forEach(p => {\r
      svg.append('circle').attr('cx', p.x).attr('cy', p.y).attr('r', pegRadius)\r
        .attr('fill', 'var(--border)').attr('stroke', 'var(--text-secondary)').attr('stroke-width', 0.5)\r
    })\r
\r
    // Simulate ball drops\r
    const numBalls = config.numBalls || 300\r
    const bins = new Array(cols).fill(0)\r
    for (let b = 0; b < numBalls; b++) {\r
      let col = Math.floor(cols / 2)\r
      for (let row = 0; row < rows; row++) {\r
        col += Math.random() < 0.5 ? -1 : 1\r
        col = Math.max(0, Math.min(cols - 1, col))\r
      }\r
      bins[col]++\r
    }\r
\r
    // Draw bins (histogram at bottom)\r
    const maxBin = d3.max(bins) || 1\r
    const binH = 60\r
    const yBase = M.top + IH - 10\r
    bins.forEach((count, i) => {\r
      const barH = (count / maxBin) * (IH * 0.4)\r
      svg.append('rect').attr('x', i * slotWidth + 1).attr('y', yBase - barH)\r
        .attr('width', slotWidth - 2).attr('height', barH)\r
        .attr('fill', colors[0]).attr('opacity', 0.7).attr('rx', 1)\r
    })\r
\r
    // Bin counts\r
    bins.forEach((count, i) => {\r
      const barH = (count / maxBin) * (IH * 0.4)\r
      svg.append('text').attr('x', i * slotWidth + slotWidth / 2).attr('y', yBase - barH - 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text(count)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold')\r
      .text('Galton Board / Quincunx')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH - 5})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text(\`\${numBalls} balls · \${rows} rows · Binomial distribution\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};