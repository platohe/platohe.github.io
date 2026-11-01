var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'calendar-heatmap-small-multiples',\r
  title: 'Calendar Heatmap Small Multiples',\r
  desc: 'Calendar Heatmap Small Multiples — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CalendarHeatmapSmallMultiples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","calendar-heatmap-small-multiples"],\r
}\r
\r
export default function CalendarHeatmapSmallMultiples({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    years: [2021, 2022, 2023, 2024],\r
    metrics: [\r
      { name: 'Commits', color: '#6366f1', data: generateYearData(2021, 50) },\r
      { name: 'PRs Merged', color: '#10b981', data: generateYearData(2022, 30) },\r
      { name: 'Issues Closed', color: '#f59e0b', data: generateYearData(2023, 20) },\r
      { name: 'Lines Changed', color: '#ef4444', data: generateYearData(2024, 200) }\r
    ]\r
  }\r
\r
  function generateYearData(year, maxVal) {\r
    const days = new Date(year, 12, 0).getDate()\r
    const data = []\r
    for (let m = 0; m < 12; m++) {\r
      const daysInMonth = new Date(year, m + 1, 0).getDate()\r
      for (let d = 1; d <= daysInMonth; d++) {\r
        const date = new Date(year, m, d)\r
        const dayOfWeek = date.getDay()\r
        const weekOfYear = Math.ceil((date.getTime() - new Date(year, 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000))\r
        data.push({\r
          date: date.toISOString().split('T')[0],\r
          value: Math.random() * maxVal,\r
          day: dayOfWeek,\r
          week: weekOfYear,\r
          month: m\r
        })\r
      }\r
    }\r
    return data\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && customData.metrics) ? customData : DEFAULT_DATA\r
    const { years, metrics } = input\r
\r
    const nCols = years.length\r
    const nRows = metrics.length\r
    const cellSize = Math.min(IW / nCols / 53, IH / nRows / 8) * 0.9\r
    const gap = 2\r
\r
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\r
\r
    const g = svg.append('g')\r
\r
    metrics.forEach((metric, rowIdx) => {\r
      metric.years = years.map(year => ({\r
        year,\r
        data: metric.data.filter(d => d.date.startsWith(year.toString()))\r
      }))\r
    })\r
\r
    // Global color scale per metric\r
    metrics.forEach((metric, rowIdx) => {\r
      const allValues = metric.data.map(d => d.value)\r
      metric.colorScale = d3.scaleSequential(d3.interpolateYlOrRd)\r
        .domain([0, d3.max(allValues) || 1])\r
\r
      const rowY = M.top + rowIdx * (IH / nRows) + 10\r
      const rowH = IH / nRows - 10\r
\r
      // Metric label\r
      g.append('text')\r
        .attr('x', M.left - 10)\r
        .attr('y', rowY + rowH / 2 + 5)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 500)\r
        .text(metric.name)\r
\r
      metric.years.forEach((yearData, colIdx) => {\r
        const colX = M.left + colIdx * (IW / nCols) + 10\r
        const colW = IW / nCols - 10\r
\r
        // Year label\r
        if (rowIdx === 0) {\r
          g.append('text')\r
            .attr('x', colX + colW / 2)\r
            .attr('y', M.top - 5)\r
            .attr('text-anchor', 'middle')\r
            .attr('fill', 'var(--text)')\r
            .attr('font-size', '10px')\r
            .attr('font-weight', 600)\r
            .text(yearData.year)\r
        }\r
\r
        // Month labels\r
        monthNames.forEach((month, m) => {\r
          const firstDayOfMonth = new Date(yearData.year, m, 1)\r
          const weekOfFirst = Math.ceil((firstDayOfMonth.getTime() - new Date(yearData.year, 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000))\r
          const xPos = colX + weekOfFirst * cellSize\r
          if (xPos < colX + colW - 20) {\r
            g.append('text')\r
              .attr('x', xPos)\r
              .attr('y', rowY - 5)\r
              .attr('text-anchor', 'middle')\r
              .attr('fill', 'var(--text-secondary)')\r
              .attr('font-size', '6px')\r
              .text(month)\r
          }\r
        })\r
\r
        // Day-of-week labels (leftmost column)\r
        if (colIdx === 0 && rowIdx === 0) {\r
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach((day, d) => {\r
            g.append('text')\r
              .attr('x', M.left - 15)\r
              .attr('y', rowY + d * cellSize + cellSize / 2 + 3)\r
              .attr('text-anchor', 'end')\r
              .attr('fill', 'var(--text-secondary)')\r
              .attr('font-size', '6px')\r
              .text(day)\r
          })\r
        }\r
\r
        // Heatmap cells\r
        const yearG = g.append('g')\r
          .attr('transform', \`translate(\${colX}, \${rowY})\`)\r
\r
        yearData.data.forEach(d => {\r
          const week = d.week\r
          const day = d.day\r
          const xPos = week * cellSize\r
          const yPos = day * cellSize\r
\r
          if (xPos < colW && yPos < 7 * cellSize) {\r
            yearG.append('rect')\r
              .attr('x', xPos)\r
              .attr('y', yPos)\r
              .attr('width', cellSize - gap)\r
              .attr('height', cellSize - gap)\r
              .attr('fill', metric.colorScale(d.value))\r
              .attr('rx', 1)\r
              .attr('stroke', 'var(--bg)')\r
              .attr('stroke-width', 0.5)\r
          }\r
        })\r
      })\r
    })\r
\r
    // Color legends (one per metric)\r
    metrics.forEach((metric, rowIdx) => {\r
      const rowY = M.top + rowIdx * (IH / nRows) + 10\r
      const legendWidth = 100\r
      const legendHeight = 8\r
      const legendX = M.left + IW + 5\r
      const legendY = rowY\r
\r
      const defs = svg.append('defs')\r
      const grad = defs.append('linearGradient')\r
        .attr('id', \`cal-grad-\${rowIdx}\`)\r
        .attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')\r
      d3.range(0, 1.01, 0.01).forEach(t => {\r
        grad.append('stop')\r
          .attr('offset', \`\${t * 100}%\`)\r
          .attr('stop-color', metric.colorScale(t * (d3.max(metric.data.map(d => d.value)) || 1)))\r
      })\r
\r
      g.append('rect')\r
        .attr('x', legendX).attr('y', legendY)\r
        .attr('width', legendWidth).attr('height', legendHeight)\r
        .attr('fill', \`url(#cal-grad-\${rowIdx})\`)\r
        .attr('rx', 2)\r
\r
      g.append('text')\r
        .attr('x', legendX).attr('y', legendY - 3)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .text('Low')\r
\r
      g.append('text')\r
        .attr('x', legendX + legendWidth).attr('y', legendY - 3)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .text('High')\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Calendar Heatmap Small Multiples')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Years × Metrics Grid')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};