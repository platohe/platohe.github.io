var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'point-figure',\r
  title: 'Point Figure',\r
  desc: 'Point Figure — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PointFigure',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","point-figure"],\r
}\r
\r
export default function PointFigure({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"Jan 1","close":100},{"date":"Jan 2","close":102},{"date":"Jan 3","close":105},{"date":"Jan 4","close":103},{"date":"Jan 5","close":100},{"date":"Jan 6","close":97},{"date":"Jan 7","close":95},{"date":"Jan 8","close":98},{"date":"Jan 9","close":101},{"date":"Jan 10","close":104},{"date":"Jan 11","close":107},{"date":"Jan 12","close":105},{"date":"Jan 13","close":102},{"date":"Jan 14","close":99},{"date":"Jan 15","close":96},{"date":"Jan 16","close":99},{"date":"Jan 17","close":102},{"date":"Jan 18","close":105},{"date":"Jan 19","close":108},{"date":"Jan 20","close":111}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    // Convert to Point & Figure style (X for rising, O for falling)\r
    const boxSize = 3\r
    let pfData = []\r
    let lastValue = data[0].close\r
    let lastDirection = null\r
\r
    data.forEach((d, i) => {\r
      const change = d.close - lastValue\r
      if (Math.abs(change) >= boxSize) {\r
        if (change > 0 && (lastDirection !== 'up' || lastDirection === null)) {\r
          // Add X's for upward movement\r
          const numX = Math.floor(change / boxSize)\r
          for (let j = 0; j < numX; j++) {\r
            pfData.push({ date: d.date, type: 'X', value: lastValue + j * boxSize + boxSize / 2 })\r
          }\r
          lastDirection = 'up'\r
        } else if (change < 0 && (lastDirection !== 'down' || lastDirection === null)) {\r
          // Add O's for downward movement\r
          const numO = Math.floor(Math.abs(change) / boxSize)\r
          for (let j = 0; j < numO; j++) {\r
            pfData.push({ date: d.date, type: 'O', value: lastValue - j * boxSize - boxSize / 2 })\r
          }\r
          lastDirection = 'down'\r
        }\r
      }\r
      lastValue = d.close\r
    })\r
\r
    if (pfData.length === 0) {\r
      pfData = data.map((d, i) => ({\r
        date: d.date,\r
        type: i % 2 === 0 ? 'X' : 'O',\r
        value: d.close\r
      }))\r
    }\r
\r
    const x = d3.scaleBand()\r
      .domain(pfData.map((d, i) => i.toString()))\r
      .range([0, IW])\r
      .padding(0.2)\r
\r
    const y = d3.scaleLinear()\r
      .domain([d3.min(pfData, d => d.value) - 5, d3.max(pfData, d => d.value) + 5])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Draw X's and O's\r
    pfData.forEach((d, i) => {\r
      const cx = x(i.toString()) + x.bandwidth() / 2\r
      const cy = y(d.value)\r
      const isX = d.type === 'X'\r
\r
      if (isX) {\r
        const size = x.bandwidth() * 0.35\r
        svg.append('line')\r
          .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', cx - size).attr('x2', cx + size)\r
          .attr('y1', cy - size).attr('y2', cy + size)\r
          .attr('stroke', '#10b981').attr('stroke-width', 2)\r
        svg.append('line')\r
          .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', cx + size).attr('x2', cx - size)\r
          .attr('y1', cy - size).attr('y2', cy + size)\r
          .attr('stroke', '#10b981').attr('stroke-width', 2)\r
      } else {\r
        svg.append('circle')\r
          .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('cx', cx).attr('cy', cy)\r
          .attr('r', x.bandwidth() * 0.35)\r
          .attr('fill', 'none')\r
          .attr('stroke', '#ef4444').attr('stroke-width', 2)\r
      }\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').remove())\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Point & Figure Chart - Price Action')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 100},\${M.top + IH + 15})\`)\r
    lg.append('text').attr('x', 0).attr('y', 10).text('X').attr('fill', '#10b981').attr('font-size', '14px').attr('font-weight', 'bold')\r
    lg.append('text').attr('x', 16).attr('y', 10).text('Rising').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('circle').attr('cx', 56).attr('cy', 6).attr('r', 6).attr('fill', 'none').attr('stroke', '#ef4444').attr('stroke-width', 2)\r
    lg.append('text').attr('x', 66).attr('y', 10).text('Falling').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};