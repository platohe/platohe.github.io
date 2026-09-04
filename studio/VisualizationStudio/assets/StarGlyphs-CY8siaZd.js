var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'star-glyphs',\r
  title: 'Star Glyphs',\r
  desc: 'Star Glyphs — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StarGlyphs',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","star-glyphs"],\r
}\r
\r
export default function StarGlyphs({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Model Alpha","speed":85,"accuracy":92,"efficiency":70,"memory":65,"cost":40},{"name":"Model Beta","speed":60,"accuracy":75,"efficiency":95,"memory":90,"cost":85},{"name":"Model Gamma","speed":95,"accuracy":88,"efficiency":60,"memory":55,"cost":30},{"name":"Model Delta","speed":45,"accuracy":65,"efficiency":85,"memory":80,"cost":95},{"name":"Model Epsilon","speed":75,"accuracy":82,"efficiency":80,"memory":75,"cost":60},{"name":"Model Zeta","speed":90,"accuracy":95,"efficiency":90,"memory":85,"cost":50}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const margin = { top: 40, right: 20, bottom: 20, left: 20 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const cols = 3\r
    const rows = 2\r
    const cellW = plotW / cols\r
    const cellH = plotH / rows\r
    const glyphR = Math.min(cellW, cellH) * 0.35\r
\r
    const attributes = ['speed', 'accuracy', 'efficiency', 'memory', 'cost']\r
    const nAttr = attributes.length\r
    const angleStep = (2 * Math.PI) / nAttr\r
\r
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#3b82f6', '#8b5cf6']\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.slice(0, 6).forEach((item, idx) => {\r
      const col = idx % cols\r
      const row = Math.floor(idx / cols)\r
      const cx = col * cellW + cellW / 2\r
      const cy = row * cellH + cellH / 2 - 5\r
\r
      const glyphG = g.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
      // Concentric guide circles\r
      glyphG.append('circle')\r
        .attr('r', glyphR)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-dasharray', '2,2')\r
        .attr('stroke-opacity', 0.4)\r
\r
      // Radial spokes\r
      attributes.forEach((_, i) => {\r
        const a = i * angleStep - Math.PI / 2\r
        glyphG.append('line')\r
          .attr('x1', 0).attr('y1', 0)\r
          .attr('x2', glyphR * Math.cos(a))\r
          .attr('y2', glyphR * Math.sin(a))\r
          .attr('stroke', 'var(--border)')\r
          .attr('stroke-opacity', 0.3)\r
      })\r
\r
      // Star shape polygon\r
      const points = attributes.map((attr, i) => {\r
        const a = i * angleStep - Math.PI / 2\r
        const val = (item[attr] ?? 50) / 100\r
        const r = glyphR * val\r
        return [r * Math.cos(a), r * Math.sin(a)]\r
      })\r
\r
      glyphG.append('polygon')\r
        .attr('points', points.map(p => p.join(',')).join(' '))\r
        .attr('fill', colors[idx % colors.length])\r
        .attr('fill-opacity', 0.35)\r
        .attr('stroke', colors[idx % colors.length])\r
        .attr('stroke-width', 1.5)\r
\r
      // Center and vertices\r
      points.forEach(p => {\r
        glyphG.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 2).attr('fill', colors[idx % colors.length])\r
      })\r
\r
      // Label below glyph\r
      glyphG.append('text')\r
        .attr('x', 0)\r
        .attr('y', glyphR + 12)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '600')\r
        .text(item.name)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Multi-Attribute Star Glyphs Matrix')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};