var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'calendar-heatmap',\r
  title: 'Calendar Heatmap',\r
  desc: 'Calendar Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CalendarHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","calendar-heatmap"],\r
}\r
\r
export default function CalendarHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"2024-01-01","value":17},{"date":"2024-01-02","value":13},{"date":"2024-01-03","value":22},{"date":"2024-01-04","value":18},{"date":"2024-01-05","value":8},{"date":"2024-01-06","value":10},{"date":"2024-01-07","value":5},{"date":"2024-01-08","value":17},{"date":"2024-01-09","value":22},{"date":"2024-01-10","value":14},{"date":"2024-01-11","value":9},{"date":"2024-01-12","value":22},{"date":"2024-01-13","value":14},{"date":"2024-01-14","value":6},{"date":"2024-01-15","value":8},{"date":"2024-01-16","value":15},{"date":"2024-01-17","value":18},{"date":"2024-01-18","value":17},{"date":"2024-01-19","value":5},{"date":"2024-01-20","value":9},{"date":"2024-01-21","value":16},{"date":"2024-01-22","value":6},{"date":"2024-01-23","value":16},{"date":"2024-01-24","value":5},{"date":"2024-01-25","value":10},{"date":"2024-01-26","value":6},{"date":"2024-01-27","value":3},{"date":"2024-01-28","value":15},{"date":"2024-01-29","value":15},{"date":"2024-01-30","value":5},{"date":"2024-01-31","value":8},{"date":"2024-02-01","value":21},{"date":"2024-02-02","value":14},{"date":"2024-02-03","value":16},{"date":"2024-02-04","value":6},{"date":"2024-02-05","value":13},{"date":"2024-02-06","value":5},{"date":"2024-02-07","value":6},{"date":"2024-02-08","value":16},{"date":"2024-02-09","value":16},{"date":"2024-02-10","value":4},{"date":"2024-02-11","value":12},{"date":"2024-02-12","value":9},{"date":"2024-02-13","value":11},{"date":"2024-02-14","value":19},{"date":"2024-02-15","value":22},{"date":"2024-02-16","value":15},{"date":"2024-02-17","value":4},{"date":"2024-02-18","value":5},{"date":"2024-02-19","value":10},{"date":"2024-02-20","value":6},{"date":"2024-02-21","value":18},{"date":"2024-02-22","value":18},{"date":"2024-02-23","value":18},{"date":"2024-02-24","value":18},{"date":"2024-02-25","value":1},{"date":"2024-02-26","value":23},{"date":"2024-02-27","value":13},{"date":"2024-02-28","value":23},{"date":"2024-02-29","value":7},{"date":"2024-03-01","value":7},{"date":"2024-03-02","value":0},{"date":"2024-03-03","value":7},{"date":"2024-03-04","value":14},{"date":"2024-03-05","value":17},{"date":"2024-03-06","value":22},{"date":"2024-03-07","value":6},{"date":"2024-03-08","value":19},{"date":"2024-03-09","value":18},{"date":"2024-03-10","value":5},{"date":"2024-03-10","value":19},{"date":"2024-03-11","value":8},{"date":"2024-03-12","value":15},{"date":"2024-03-13","value":21},{"date":"2024-03-14","value":7},{"date":"2024-03-15","value":19},{"date":"2024-03-16","value":11},{"date":"2024-03-17","value":23},{"date":"2024-03-18","value":13},{"date":"2024-03-19","value":16},{"date":"2024-03-20","value":11},{"date":"2024-03-21","value":16},{"date":"2024-03-22","value":6},{"date":"2024-03-23","value":14},{"date":"2024-03-24","value":10},{"date":"2024-03-25","value":13},{"date":"2024-03-26","value":21},{"date":"2024-03-27","value":18},{"date":"2024-03-28","value":24},{"date":"2024-03-29","value":17},{"date":"2024-03-30","value":8},{"date":"2024-03-31","value":15},{"date":"2024-04-01","value":10},{"date":"2024-04-02","value":7},{"date":"2024-04-03","value":18},{"date":"2024-04-04","value":11},{"date":"2024-04-05","value":15},{"date":"2024-04-06","value":18},{"date":"2024-04-07","value":6},{"date":"2024-04-08","value":14},{"date":"2024-04-09","value":21},{"date":"2024-04-10","value":7},{"date":"2024-04-11","value":24},{"date":"2024-04-12","value":3},{"date":"2024-04-13","value":14},{"date":"2024-04-14","value":18},{"date":"2024-04-15","value":9},{"date":"2024-04-16","value":13},{"date":"2024-04-17","value":8},{"date":"2024-04-18","value":18},{"date":"2024-04-19","value":6},{"date":"2024-04-20","value":4},{"date":"2024-04-21","value":17},{"date":"2024-04-22","value":22},{"date":"2024-04-23","value":11},{"date":"2024-04-24","value":20},{"date":"2024-04-25","value":12},{"date":"2024-04-26","value":2},{"date":"2024-04-27","value":17},{"date":"2024-04-28","value":12},{"date":"2024-04-29","value":5},{"date":"2024-04-30","value":19},{"date":"2024-05-01","value":17},{"date":"2024-05-02","value":22},{"date":"2024-05-03","value":18},{"date":"2024-05-04","value":4},{"date":"2024-05-05","value":17},{"date":"2024-05-06","value":14},{"date":"2024-05-07","value":8},{"date":"2024-05-08","value":5},{"date":"2024-05-09","value":19},{"date":"2024-05-10","value":14},{"date":"2024-05-11","value":5},{"date":"2024-05-12","value":10},{"date":"2024-05-13","value":11},{"date":"2024-05-14","value":5},{"date":"2024-05-15","value":9},{"date":"2024-05-16","value":24},{"date":"2024-05-17","value":11},{"date":"2024-05-18","value":19},{"date":"2024-05-19","value":8},{"date":"2024-05-20","value":8},{"date":"2024-05-21","value":16},{"date":"2024-05-22","value":10},{"date":"2024-05-23","value":12},{"date":"2024-05-24","value":8},{"date":"2024-05-25","value":8},{"date":"2024-05-26","value":18},{"date":"2024-05-27","value":12},{"date":"2024-05-28","value":11},{"date":"2024-05-29","value":22},{"date":"2024-05-30","value":11},{"date":"2024-05-31","value":9},{"date":"2024-06-01","value":12},{"date":"2024-06-02","value":15},{"date":"2024-06-03","value":16},{"date":"2024-06-04","value":9},{"date":"2024-06-05","value":11},{"date":"2024-06-06","value":10},{"date":"2024-06-07","value":6},{"date":"2024-06-08","value":13},{"date":"2024-06-09","value":9},{"date":"2024-06-10","value":8},{"date":"2024-06-11","value":18},{"date":"2024-06-12","value":11},{"date":"2024-06-13","value":7},{"date":"2024-06-14","value":6},{"date":"2024-06-15","value":0},{"date":"2024-06-16","value":16},{"date":"2024-06-17","value":9},{"date":"2024-06-18","value":14},{"date":"2024-06-19","value":12},{"date":"2024-06-20","value":19},{"date":"2024-06-21","value":18},{"date":"2024-06-22","value":16},{"date":"2024-06-23","value":13},{"date":"2024-06-24","value":8},{"date":"2024-06-25","value":22},{"date":"2024-06-26","value":15},{"date":"2024-06-27","value":21},{"date":"2024-06-28","value":17},{"date":"2024-06-29","value":9},{"date":"2024-06-30","value":7},{"date":"2024-07-01","value":17},{"date":"2024-07-02","value":21},{"date":"2024-07-03","value":9},{"date":"2024-07-04","value":12},{"date":"2024-07-05","value":10},{"date":"2024-07-06","value":19},{"date":"2024-07-07","value":14},{"date":"2024-07-08","value":22},{"date":"2024-07-09","value":21},{"date":"2024-07-10","value":19},{"date":"2024-07-11","value":6},{"date":"2024-07-12","value":1},{"date":"2024-07-13","value":3},{"date":"2024-07-14","value":15},{"date":"2024-07-15","value":18},{"date":"2024-07-16","value":20},{"date":"2024-07-17","value":24}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const cellSize = 10\r
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\r
    const weeks = Math.ceil(data.length / 7)\r
    const gridW = weeks * (cellSize + 1)\r
    const gridH = 7 * (cellSize + 1)\r
    const offsetX = (IW - gridW) / 2\r
    const contentH = gridH + 30 // account for day labels and month labels\r
    const offsetY = M.top + Math.max(0, (IH - contentH) / 2)\r
\r
    const maxVal = d3.max(data, d => d.value) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateGreens).domain([0, maxVal])\r
\r
    data.forEach((d, i) => {\r
      const date = new Date(d.date)\r
      const week = Math.floor(i / 7)\r
      const day = date.getDay()\r
      const x = offsetX + week * (cellSize + 1)\r
      const y = offsetY + day * (cellSize + 1)\r
\r
      svg.append('rect').attr('x', x).attr('y', y).attr('width', cellSize).attr('height', cellSize)\r
        .attr('fill', colorScale(d.value)).attr('rx', 1)\r
    })\r
\r
    // Day labels\r
    days.forEach((day, i) => {\r
      svg.append('text').attr('x', offsetX - 4).attr('y', offsetY + i * (cellSize + 1) + cellSize / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(day)\r
    })\r
\r
    // Month labels\r
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\r
    months.forEach((m, i) => {\r
      const week = Math.round(i * 365 / 12 / (cellSize + 1))\r
      svg.append('text').attr('x', offsetX + week * (cellSize + 1)).attr('y', offsetY - 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(m)\r
    })\r
\r
    // Color legend\r
    const legendX = offsetX + gridW + 10\r
    const legendH = 80\r
    const grad = svg.append('defs').append('linearGradient').attr('id', 'calGrad').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', colorScale(0))\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', colorScale(maxVal))\r
    svg.append('rect').attr('x', legendX).attr('y', offsetY).attr('width', 8).attr('height', legendH)\r
      .attr('fill', 'url(#calGrad)').attr('rx', 2)\r
    svg.append('text').attr('x', legendX + 12).attr('y', offsetY + 10).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('Low')\r
    svg.append('text').attr('x', legendX + 12).attr('y', offsetY + legendH).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('High')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 6})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Calendar Heatmap')\r
\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};