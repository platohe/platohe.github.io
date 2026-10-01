var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'animated-treemap',\r
  title: 'Animated Treemap',\r
  desc: 'Animated Treemap — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'AnimatedTreemap',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-hierarchy","d3-transition"],\r
  tags: ["animation","animated-treemap"],\r
}\r
\r
export default function AnimatedTreemap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [\r
      [{ A: 95, B: 60, C: 80, D: 45 }, { A: 70, B: 85, C: 55, D: 90 }],\r
      [{ A: 50, B: 70, C: 95, D: 60 }, { A: 85, B: 45, C: 65, D: 80 }],\r
      [{ A: 60, B: 90, C: 40, D: 70 }, { A: 95, B: 55, C: 75, D: 30 }],\r
    ]\r
\r
    const datasets = (customData && Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const keys = Object.keys(datasets[0][0] || { A: 1, B: 1, C: 1, D: 1 })\r
    const color = d3.scaleOrdinal().domain(keys).range(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'])\r
\r
    const margin = { top: 24, right: 12, bottom: 20, left: 12 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, w])\r
    const y = d3.scaleLinear().domain([0, 1]).range([h, 0])\r
\r
    let state = 0\r
    let currentRects = []\r
\r
    const render = (nextState) => {\r
      const rows = datasets[nextState % datasets.length]\r
      // Flatten: iterate each row object's values in key order\r
      const flatValues = rows.reduce((acc, row) => acc.concat(Object.values(row)), [])\r
      const rowCount = rows.length\r
      const colCount = keys.length\r
      const cellW = 1 / colCount\r
      const cellH = 1 / rowCount\r
\r
      const newRects = flatValues.map((val, i) => {\r
        const col = i % colCount\r
        const row = Math.floor(i / colCount)\r
        return {\r
          key: \`\${col}-\${row}\`,\r
          val,\r
          x0: col * cellW,\r
          x1: (col + 1) * cellW,\r
          y0: row * cellH,\r
          y1: (row + 1) * cellH,\r
        }\r
      })\r
\r
      const rectSel = svg.selectAll('.treemap-rect').data(newRects, d => d.key)\r
\r
      rectSel.enter()\r
        .append('rect')\r
        .attr('class', 'treemap-rect')\r
        .attr('x', d => x(d.x0))\r
        .attr('y', d => y(d.y1))\r
        .attr('width', d => Math.max(0, x(d.x1) - x(d.x0)))\r
        .attr('height', d => Math.max(0, y(d.y0) - y(d.y1)))\r
        .attr('fill', d => color(keys[flatValues.indexOf(d.val)] || 0))\r
        .attr('opacity', 0.85)\r
        .attr('rx', 2)\r
        .raise()\r
\r
      rectSel\r
        .transition()\r
        .duration(800)\r
        .ease(d3.easeCubicOut)\r
        .attr('x', d => x(d.x0))\r
        .attr('y', d => y(d.y1))\r
        .attr('width', d => Math.max(0, x(d.x1) - x(d.x0)))\r
        .attr('height', d => Math.max(0, y(d.y0) - y(d.y1)))\r
        .attr('fill', d => {\r
          const idx = flatValues.indexOf(d.val)\r
          const col = idx % keys.length\r
          return color(keys[col])\r
        })\r
        .attr('opacity', 0.85)\r
\r
      rectSel.exit()\r
        .transition()\r
        .duration(400)\r
        .attr('opacity', 0)\r
        .remove()\r
\r
      // Labels\r
      const textSel = svg.selectAll('.treemap-label').data(newRects, d => d.key)\r
      textSel.enter()\r
        .append('text')\r
        .attr('class', 'treemap-label')\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'white')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .attr('pointer-events', 'none')\r
        .text(d => d.val)\r
        .attr('x', d => (x(d.x0) + x(d.x1)) / 2)\r
        .attr('y', d => (y(d.y0) + y(d.y1)) / 2)\r
        .raise()\r
      textSel\r
        .transition()\r
        .duration(800)\r
        .ease(d3.easeCubicOut)\r
        .attr('x', d => (x(d.x0) + x(d.x1)) / 2)\r
        .attr('y', d => (y(d.y0) + y(d.y1)) / 2)\r
      textSel.exit().remove()\r
\r
      currentRects = newRects\r
      state = (nextState + 1) % datasets.length\r
    }\r
\r
    render(state)\r
    const interval = setInterval(() => render(state), 2200)\r
\r
    return () => clearInterval(interval)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};