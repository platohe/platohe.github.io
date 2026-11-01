var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'confusion-matrix',\r
  title: 'Confusion Matrix',\r
  desc: 'Confusion Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConfusionMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","confusion-matrix"],\r
}\r
\r
export default function ConfusionMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"actual":["Positive","Negative"],"predicted":["Positive","Negative"],"matrix":[[85,15],[10,90]],"labels":["TP=85","FP=15","FN=10","TN=90"]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && Object.keys(customData).length > 0) ? customData : DEFAULT_DATA\r
    const rows = d.actual || ['Positive', 'Negative']\r
    const cols = d.predicted || ['Positive', 'Negative']\r
    const mat = d.matrix || [[85, 15], [10, 90]]\r
    const n = mat.length\r
\r
    const cellW = IW / (n + 1)\r
    const cellH = IH / (n + 1)\r
    const startGutter = cellW * 0.5\r
    const startLabel = M.left + startGutter\r
\r
    const maxVal = d3.max(mat.flat()) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateReds).domain([0, maxVal])\r
\r
    // Column labels\r
    cols.forEach((c, i) => {\r
      svg.append('text').attr('x', startLabel + cellW * (i + 1) + cellW / 2)\r
        .attr('y', M.top + 14).attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold').text(c)\r
    })\r
\r
    // Row labels\r
    rows.forEach((r, i) => {\r
      svg.append('text').attr('x', startLabel - 6).attr('y', M.top + cellH * (i + 1) + cellH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold').text(r)\r
    })\r
\r
    // Cells\r
    mat.forEach((row, i) => {\r
      row.forEach((val, j) => {\r
        const cx = startLabel + cellW * (j + 1) + cellW / 2\r
        const cy = M.top + cellH * (i + 1) + cellH / 2\r
\r
        svg.append('rect').attr('x', startLabel + cellW * j + cellW * 0.15)\r
          .attr('y', M.top + cellH * i + cellH * 0.15)\r
          .attr('width', cellW * 0.7).attr('height', cellH * 0.7)\r
          .attr('fill', colorScale(val)).attr('rx', 3)\r
\r
        svg.append('text').attr('x', cx).attr('y', cy - 3)\r
          .attr('text-anchor', 'middle').attr('fill', val > maxVal * 0.5 ? '#fff' : 'var(--text-primary)')\r
          .attr('font-size', '13px').attr('font-weight', 'bold').text(val)\r
\r
        svg.append('text').attr('x', cx).attr('y', cy + 11)\r
          .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(d.labels ? d.labels[i * n + j] : '')\r
      })\r
    })\r
\r
    // Overall accuracy\r
    const total = mat.flat().reduce((a, b) => a + b, 0)\r
    const correct = mat[0][0] + mat[1][1]\r
    const accuracy = (correct / total * 100).toFixed(1)\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 22})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '12px')\r
      .text(\`Accuracy: \${accuracy}%  (\${correct}/\${total})\`)\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Confusion Matrix')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};