var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'missing-value-heatmap',\r
  title: 'Missing Value Heatmap',\r
  desc: 'Missing Value Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MissingValueHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","missing-value-heatmap"],\r
}\r
\r
export default function MissingValueHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"data":[{"row":0,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":1,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":2,"Age":0,"Income":0,"Score":1,"Tenure":0,"Feedback":0,"Rating":1,"Notes":0,"Active":1},{"row":3,"Age":0,"Income":1,"Score":0,"Tenure":0,"Feedback":0,"Rating":1,"Notes":0,"Active":0},{"row":4,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":1,"Rating":1,"Notes":0,"Active":0},{"row":5,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":6,"Age":0,"Income":0,"Score":1,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":1},{"row":7,"Age":0,"Income":0,"Score":0,"Tenure":1,"Feedback":1,"Rating":1,"Notes":0,"Active":0},{"row":8,"Age":0,"Income":0,"Score":1,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":9,"Age":0,"Income":0,"Score":1,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":10,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":11,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":1,"Notes":0,"Active":0},{"row":12,"Age":0,"Income":0,"Score":1,"Tenure":0,"Feedback":0,"Rating":1,"Notes":0,"Active":0},{"row":13,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":14,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":1,"Notes":0,"Active":0},{"row":15,"Age":1,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":16,"Age":0,"Income":1,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":1},{"row":17,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":18,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":19,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":20,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":1,"Notes":0,"Active":1},{"row":21,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":22,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":1,"Active":0},{"row":23,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":24,"Age":0,"Income":1,"Score":1,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":25,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":26,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":27,"Age":1,"Income":1,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":28,"Age":1,"Income":0,"Score":1,"Tenure":1,"Feedback":0,"Rating":0,"Notes":0,"Active":0},{"row":29,"Age":0,"Income":0,"Score":0,"Tenure":0,"Feedback":0,"Rating":0,"Notes":0,"Active":0}],"cols":["Age","Income","Score","Tenure","Feedback","Rating","Notes","Active"],"rows":[{"row":0},{"row":1},{"row":2},{"row":3},{"row":4},{"row":5},{"row":6},{"row":7},{"row":8},{"row":9},{"row":10},{"row":11},{"row":12},{"row":13},{"row":14},{"row":15},{"row":16},{"row":17},{"row":18},{"row":19},{"row":20},{"row":21},{"row":22},{"row":23},{"row":24},{"row":25},{"row":26},{"row":27},{"row":28},{"row":29}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.data) ? customData : DEFAULT_DATA\r
    const { data, cols } = d\r
    const nRows = data.length\r
    const nCols = cols.length\r
\r
    const cellW = IW / nCols\r
    const cellH = (IH - 20) / nRows\r
\r
    // Cells\r
    data.forEach((row, i) => {\r
      cols.forEach((col, j) => {\r
        const isMissing = row[col] === 1\r
        svg.append('rect').attr('x', M.left + j * cellW).attr('y', M.top + i * cellH)\r
          .attr('width', cellW - 1).attr('height', cellH - 1)\r
          .attr('fill', isMissing ? '#ef4444' : 'var(--cell-bg)')\r
          .attr('rx', 1)\r
      })\r
    })\r
\r
    // Column labels\r
    cols.forEach((c, i) => {\r
      svg.append('text').attr('x', M.left + i * cellW + cellW / 2)\r
        .attr('y', M.top - 6).attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(c.length > 8 ? c.slice(0, 7) + '…' : c)\r
    })\r
\r
    // Row count\r
    const totalMissing = data.reduce((s, r) => cols.reduce((ss, c) => ss + (r[c] || 0), 0), 0)\r
    const pct = (totalMissing / (nRows * nCols) * 100).toFixed(1)\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 16})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px')\r
      .text(nRows + ' rows × ' + nCols + ' cols  ·  ' + pct + '% missing')\r
\r
    // Legend\r
    svg.append('rect').attr('x', M.left + IW - 60).attr('y', M.top).attr('width', 12).attr('height', 12).attr('fill', '#ef4444').attr('rx', 2)\r
    svg.append('text').attr('x', M.left + IW - 44).attr('y', M.top + 10).attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Missing')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 22})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Missing Value Heatmap')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};