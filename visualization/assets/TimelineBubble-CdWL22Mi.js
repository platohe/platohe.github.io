var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'timeline-bubble',\r
  title: 'Timeline Bubble',\r
  desc: 'Timeline Bubble — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'TimelineBubble',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["historical","timeline-bubble"],\r
}\r
\r
export default function TimelineBubble({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"event":"World Wide Web","year":1991,"impact":95,"category":"Technology"},{"event":"Human Genome","year":2003,"impact":88,"category":"Science"},{"event":"iPhone Launch","year":2007,"impact":90,"category":"Technology"},{"event":"Bitcoin Genesis","year":2009,"impact":72,"category":"Finance"},{"event":"Arab Spring","year":2011,"impact":80,"category":"Politics"},{"event":"CRISPR","year":2012,"impact":85,"category":"Science"},{"event":"GPT-3","year":2020,"impact":88,"category":"AI"},{"event":"COVID Vaccine","year":2021,"impact":92,"category":"Science"},{"event":"GPT-4","year":2023,"impact":95,"category":"AI"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 45, right: 20, bottom: 25, left: 20 }\r
    const iW = W - margin.left - margin.right\r
    const iH = H - margin.top - margin.bottom\r
\r
    const years = d3.extent(data, d => d.year)\r
    const x = d3.scaleLinear().domain([years[0] - 2, years[1] + 2]).range([0, iW])\r
    const rScale = d3.scaleSqrt().domain([0, 100]).range([0, 22])\r
\r
    const categories = [...new Set(data.map(d => d.category))]\r
    const color = d3.scaleOrdinal(d3.schemeTableau10).domain(categories)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Timeline axis\r
    const cy = iH / 2\r
    g.append('line').attr('x1', 0).attr('x2', iW).attr('y1', cy).attr('y2', cy)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
\r
    // Tick years\r
    d3.range(Math.ceil(years[0] / 5) * 5, years[1] + 1, 5).forEach(yr => {\r
      const xp = x(yr)\r
      g.append('line').attr('x1', xp).attr('x2', xp).attr('y1', cy - 5).attr('y2', cy + 5)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
      g.append('text').attr('x', xp).attr('y', cy + 16)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
        .text(yr)\r
    })\r
\r
    // Bubbles alternating above/below\r
    data.forEach((d, i) => {\r
      const xp = x(d.year)\r
      const r = rScale(d.impact)\r
      const above = i % 2 === 0\r
      const yp = above ? cy - r - 18 : cy + r + 18\r
      const col = color(d.category)\r
\r
      // Stem\r
      g.append('line').attr('x1', xp).attr('x2', xp)\r
        .attr('y1', above ? cy - 4 : cy + 4).attr('y2', above ? yp + r : yp - r)\r
        .attr('stroke', col).attr('stroke-opacity', 0.5).attr('stroke-width', 1)\r
\r
      // Bubble\r
      g.append('circle').attr('cx', xp).attr('cy', yp).attr('r', r)\r
        .attr('fill', col).attr('fill-opacity', 0.2)\r
        .attr('stroke', col).attr('stroke-width', 1.5)\r
\r
      // Event label\r
      g.append('text').attr('x', xp).attr('y', yp + 3)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '6px').attr('font-weight', '600')\r
        .text(d.event)\r
    })\r
\r
    // Category legend\r
    const legG = svg.append('g').attr('transform', \`translate(\${W / 2 - categories.length * 40 / 2}, 14)\`)\r
    categories.slice(0, 5).forEach((cat, i) => {\r
      legG.append('circle').attr('cx', i * 65 + 4).attr('cy', 0).attr('r', 3).attr('fill', color(cat))\r
      legG.append('text').attr('x', i * 65 + 10).attr('y', 3)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(cat)\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 12)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Bubble Timeline (Impact Events Over Time)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};