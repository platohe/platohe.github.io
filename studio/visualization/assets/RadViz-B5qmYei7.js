var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'rad-viz',\r
  title: 'Rad Viz',\r
  desc: 'Rad Viz — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadViz',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","rad-viz"],\r
}\r
\r
export default function RadViz({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"sepal_length":5.1,"sepal_width":3.5,"petal_length":1.4,"petal_width":0.2,"species":"setosa"},{"sepal_length":4.9,"sepal_width":3,"petal_length":1.4,"petal_width":0.2,"species":"setosa"},{"sepal_length":7,"sepal_width":3.2,"petal_length":4.7,"petal_width":1.4,"species":"versicolor"},{"sepal_length":6.3,"sepal_width":3.3,"petal_length":6,"petal_width":2.5,"species":"virginica"},{"sepal_length":5.8,"sepal_width":2.7,"petal_length":3.9,"petal_width":1.9,"species":"versicolor"},{"sepal_length":6.9,"sepal_width":3.1,"petal_length":5.4,"petal_width":2.1,"species":"virginica"},{"sepal_length":5,"sepal_width":3.6,"petal_length":1.4,"petal_width":0.2,"species":"setosa"},{"sepal_length":6.7,"sepal_width":3,"petal_length":5.2,"petal_width":2.3,"species":"virginica"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const keys = Object.keys(data[0]).filter(k => k !== 'species')\r
    const n = keys.length\r
    const speciesColors = { setosa: colors[0], versicolor: colors[1], virginica: colors[2] }\r
\r
    const cx = M.left + IW / 2\r
    const cy = M.top + IH / 2\r
    const radius = Math.min(IW, IH) * 0.38\r
\r
    // Draw axes from center to perimeter\r
    keys.forEach((key, i) => {\r
      const angle = (i / n) * 2 * Math.PI - Math.PI / 2\r
      const ex = cx + radius * Math.cos(angle)\r
      const ey = cy + radius * Math.sin(angle)\r
\r
      svg.append('line').attr('x1', cx).attr('x2', ex).attr('y1', cy).attr('y2', ey)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
\r
      // Label\r
      const lx = cx + (radius + 20) * Math.cos(angle)\r
      const ly = cy + (radius + 20) * Math.sin(angle)\r
      svg.append('text').attr('x', lx).attr('y', ly)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '10px').text(key.replace(/_/g, ' '))\r
    })\r
\r
    // Normalize and plot points\r
    const mins = {}, maxs = {}\r
    keys.forEach(k => {\r
      mins[k] = d3.min(data, d => d[k])\r
      maxs[k] = d3.max(data, d => d[k])\r
    })\r
\r
    data.forEach(d => {\r
      let x = 0, y = 0\r
      keys.forEach((key, i) => {\r
        const angle = (i / n) * 2 * Math.PI - Math.PI / 2\r
        const norm = maxs[key] - mins[key] > 0 ? (d[key] - mins[key]) / (maxs[key] - mins[key]) : 0.5\r
        x += norm * Math.cos(angle)\r
        y += norm * Math.sin(angle)\r
      })\r
      x = cx + (x / n) * radius * 1.5\r
      y = cy + (y / n) * radius * 1.5\r
\r
      svg.append('circle').attr('cx', x).attr('cy', y).attr('r', 5)\r
        .attr('fill', speciesColors[d.species] || colors[0]).attr('opacity', 0.7)\r
        .attr('stroke', '#fff').attr('stroke-width', 1)\r
    })\r
\r
    // Legend\r
    Object.keys(speciesColors).forEach((s, i) => {\r
      svg.append('circle').attr('cx', M.left + IW - 80).attr('cy', M.top + 10 + i * 18).attr('r', 4)\r
        .attr('fill', speciesColors[s]).attr('opacity', 0.7)\r
      svg.append('text').attr('x', M.left + IW - 70).attr('y', M.top + 14 + i * 18)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(s)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Radial Vector (RadViz)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};