var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'point-figure-chart',\r
  title: 'Point Figure Chart',\r
  desc: 'Point Figure Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PointFigureChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","point-figure-chart"],\r
}\r
\r
export default function PointFigureChart({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"Day 1","close":100},{"date":"Day 2","close":102},{"date":"Day 3","close":106},{"date":"Day 4","close":112},{"date":"Day 5","close":114},{"date":"Day 6","close":118},{"date":"Day 7","close":122},{"date":"Day 8","close":126},{"date":"Day 9","close":120},{"date":"Day 10","close":115},{"date":"Day 11","close":111},{"date":"Day 12","close":108},{"date":"Day 13","close":114},{"date":"Day 14","close":119},{"date":"Day 15","close":125},{"date":"Day 16","close":131},{"date":"Day 17","close":137},{"date":"Day 18","close":142},{"date":"Day 19","close":138},{"date":"Day 20","close":132},{"date":"Day 21","close":128},{"date":"Day 22","close":125},{"date":"Day 23","close":130},{"date":"Day 24","close":135},{"date":"Day 25","close":140},{"date":"Day 26","close":136},{"date":"Day 27","close":133},{"date":"Day 28","close":138},{"date":"Day 29","close":144},{"date":"Day 30","close":148}]\r
\r
  const boxSize = options.boxSize || 2\r
  const reversal = options.reversal || 3\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const prices = data.map(d => d.close)\r
\r
    // Build Point & Figure chart\r
    // X and O columns alternate\r
    // X = rising prices, O = falling prices\r
    // Each box = boxSize price movement\r
    // Column changes after reversal boxes in opposite direction\r
\r
    let currentColumn = 'X' // 'X' or 'O'\r
    let currentPrice = prices[0]\r
    let columnBoxes = [{ price: currentPrice, type: 'X' }]\r
    const columns = [columnBoxes]\r
    let colIndex = 0\r
\r
    for (let i = 1; i < prices.length; i++) {\r
      const price = prices[i]\r
      const change = price - currentPrice\r
      const boxesChange = Math.floor(Math.abs(change) / boxSize)\r
\r
      if (boxesChange === 0) continue\r
\r
      if (currentColumn === 'X') {\r
        if (change > 0) {\r
          // Continue X column\r
          for (let b = 1; b <= boxesChange; b++) {\r
            currentPrice += boxSize\r
            columnBoxes.push({ price: currentPrice, type: 'X' })\r
          }\r
        } else if (Math.abs(change) >= boxSize * reversal) {\r
          // Reversal to O column\r
          currentColumn = 'O'\r
          colIndex++\r
          columnBoxes = []\r
          columns.push(columnBoxes)\r
          currentPrice = price\r
          columnBoxes.push({ price: currentPrice, type: 'O' })\r
        }\r
      } else {\r
        if (change < 0) {\r
          // Continue O column\r
          for (let b = 1; b <= boxesChange; b++) {\r
            currentPrice -= boxSize\r
            columnBoxes.push({ price: currentPrice, type: 'O' })\r
          }\r
        } else if (Math.abs(change) >= boxSize * reversal) {\r
          // Reversal to X column\r
          currentColumn = 'X'\r
          colIndex++\r
          columnBoxes = []\r
          columns.push(columnBoxes)\r
          currentPrice = price\r
          columnBoxes.push({ price: currentPrice, type: 'X' })\r
        }\r
      }\r
    }\r
\r
    // Calculate dimensions\r
    const maxColHeight = d3.max(columns, c => c.length) || 1\r
    const numCols = columns.length\r
    const boxW = Math.min(24, IW / (numCols * 1.2))\r
    const boxH = Math.min(18, IH / (maxColHeight * 1.1))\r
    const colSpacing = boxW * 0.3\r
\r
    const totalWidth = numCols * boxW + (numCols - 1) * colSpacing\r
    const startX = (IW - totalWidth) / 2\r
    const maxPrice = d3.max(columns.flatMap(c => c.map(b => b.price)))\r
    const minPrice = d3.min(columns.flatMap(c => c.map(b => b.price)))\r
\r
    const y = d3.scaleLinear()\r
      .domain([minPrice - boxSize, maxPrice + boxSize])\r
      .range([IH, 0])\r
      .nice()\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left + startX},\${M.top})\`)\r
\r
    // Draw columns\r
    columns.forEach((col, colIdx) => {\r
      const colX = colIdx * (boxW + colSpacing)\r
\r
      col.forEach((box, rowIdx) => {\r
        const boxY = y(box.price)\r
        const isX = box.type === 'X'\r
        const color = isX ? '#22c55e' : '#ef4444'\r
\r
        // Box\r
        g.append('rect')\r
          .attr('x', colX)\r
          .attr('y', boxY)\r
          .attr('width', boxW)\r
          .attr('height', boxH)\r
          .attr('fill', 'none')\r
          .attr('stroke', color)\r
          .attr('stroke-width', 2)\r
          .attr('rx', 2)\r
\r
        // X or O text\r
        g.append('text')\r
          .attr('x', colX + boxW / 2)\r
          .attr('y', boxY + boxH / 2 + 4)\r
          .attr('text-anchor', 'middle')\r
          .attr('dominant-baseline', 'middle')\r
          .attr('font-size', boxH * 0.6)\r
          .attr('font-weight', 'bold')\r
          .attr('fill', color)\r
          .text(isX ? 'X' : 'O')\r
      })\r
    })\r
\r
    // Price scale on right\r
    const priceAxis = g.append('g')\r
      .attr('transform', \`translate(\${totalWidth + 10}, 0)\`)\r
      .call(d3.axisRight(y).ticks(8).tickSize(0).tickPadding(5))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Grid lines at price levels\r
    g.append('g')\r
      .attr('class', 'grid')\r
      .call(d3.axisLeft(y).ticks(8).tickSize(totalWidth).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', totalWidth / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Point & Figure Chart')\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('text').attr('x', 0).attr('y', 14).attr('font-size', '12px').attr('fill', '#22c55e').attr('font-weight', 'bold').text('X')\r
    lg.append('text').attr('x', 16).attr('y', 14).attr('font-size', '11px').attr('fill', 'var(--text)').text('= Rising')\r
    lg.append('text').attr('x', 60).attr('y', 14).attr('font-size', '12px').attr('fill', '#ef4444').attr('font-weight', 'bold').text('O')\r
    lg.append('text').attr('x', 76).attr('y', 14).attr('font-size', '11px').attr('fill', 'var(--text)').text('= Falling')\r
\r
    // Info text\r
    g.append('text')\r
      .attr('x', totalWidth / 2)\r
      .attr('y', IH + 25)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Box size: \${boxSize} | Reversal: \${reversal} boxes\`)\r
\r
  }, [customData, boxSize, reversal])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};