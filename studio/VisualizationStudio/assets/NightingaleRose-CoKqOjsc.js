var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
const DEFAULT_DATA = [{"month":"Apr 1854","zymotic":1.4,"wounds":0,"other":7},{"month":"May 1854","zymotic":6.2,"wounds":0,"other":4.6},{"month":"Jun 1854","zymotic":4.7,"wounds":0,"other":2.5},{"month":"Jul 1854","zymotic":150,"wounds":0,"other":9.6},{"month":"Aug 1854","zymotic":328.5,"wounds":0.4,"other":11.9},{"month":"Sep 1854","zymotic":312.3,"wounds":32.1,"other":27.7},{"month":"Oct 1854","zymotic":197,"wounds":51.7,"other":31.7},{"month":"Nov 1854","zymotic":340.6,"wounds":115.8,"other":31},{"month":"Dec 1854","zymotic":631.5,"wounds":41.7,"other":45.4},{"month":"Jan 1855","zymotic":1022.8,"wounds":30.7,"other":42},{"month":"Feb 1855","zymotic":822.8,"wounds":16.3,"other":56.4},{"month":"Mar 1855","zymotic":480.3,"wounds":12.8,"other":35.2}]\r
\r
export const meta = {\r
  id: 'nightingale-rose',\r
  title: 'Nightingale Rose',\r
  desc: 'Nightingale Rose — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NightingaleRose',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","nightingale-rose"],\r
}\r
\r
export default function NightingaleRose({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 12\r
    const maxRadius = Math.min(width, height) / 2 - 32\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    const n = data.length\r
    const angleStep = (2 * Math.PI) / n\r
\r
    const maxVal = d3.max(data, d => {\r
      const total = Object.values(d).reduce((s, v) => s + (typeof v === 'number' ? v : 0), 0)\r
      return total\r
    }) || 1000\r
    const rScale = d3.scaleSqrt()\r
      .domain([0, maxVal])\r
      .range([0, maxRadius])\r
\r
    // Concentric grid circles\r
    const ticks = [Math.round(maxVal * 0.25), Math.round(maxVal * 0.5), Math.round(maxVal * 0.75)]\r
    ticks.forEach(t => {\r
      const r = rScale(t)\r
      g.append('circle')\r
        .attr('r', r)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-opacity', 0.4)\r
        .attr('stroke-dasharray', '2,2')\r
\r
      g.append('text')\r
        .attr('x', 2)\r
        .attr('y', -r + 8)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .attr('font-family', 'var(--font-mono)')\r
        .text(t)\r
    })\r
\r
    const arc = d3.arc()\r
\r
    // Collect all keys except 'month' for layer colors\r
    const keys = data.length > 0\r
      ? Object.keys(data[0]).filter(k => k !== 'month' && typeof data[0][k] === 'number')\r
      : ['value']\r
    const layerColors = ['#38bdf8', '#f43f5e', '#94a3b8', '#10b981', '#f59e0b', '#8b5cf6']\r
\r
    data.forEach((d, i) => {\r
      const startAngle = i * angleStep - Math.PI / 2\r
      const endAngle = startAngle + angleStep\r
\r
      // Spoke line\r
      g.append('line')\r
        .attr('x1', 0).attr('y1', 0)\r
        .attr('x2', Math.cos(startAngle) * (maxRadius + 6))\r
        .attr('y2', Math.sin(startAngle) * (maxRadius + 6))\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-opacity', 0.3)\r
\r
      // Build layers from data keys\r
      const layers = keys.map((key, ki) => ({\r
        key,\r
        val: d[key] || 0,\r
        color: layerColors[ki % layerColors.length],\r
      })).sort((a, b) => b.val - a.val)\r
\r
      layers.forEach(layer => {\r
        const rad = rScale(layer.val)\r
        if (rad > 0) {\r
          g.append('path')\r
            .attr('d', arc({ innerRadius: 0, outerRadius: rad, startAngle, endAngle }))\r
            .attr('fill', \`\${layer.color}99\`)\r
            .attr('stroke', layer.color)\r
            .attr('stroke-width', 0.8)\r
        }\r
      })\r
\r
      // Month Label\r
      const midAngle = startAngle + angleStep / 2\r
      const labelRad = maxRadius + 14\r
      const lx = Math.cos(midAngle) * labelRad\r
      const ly = Math.sin(midAngle) * labelRad\r
\r
      g.append('text')\r
        .attr('x', lx).attr('y', ly)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '6.5px').attr('font-weight', '500')\r
        .text(String(d.month || d.label || d.name || d.key || '').slice(0, 8))\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W - 12).attr('y', 15)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '8px')\r
      .text('Polar Area')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};