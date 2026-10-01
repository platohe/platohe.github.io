var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'lollipop-chart',\r
  title: 'Lollipop Chart',\r
  desc: 'Lollipop Chart — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'LollipopChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["historical","lollipop-chart"],\r
}\r
\r
export default function LollipopChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"React","value":92},{"label":"Vue","value":78},{"label":"Angular","value":65},{"label":"Svelte","value":58},{"label":"Next.js","value":88},{"label":"SvelteKit","value":45},{"label":"Nuxt","value":52}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => a.value - b.value)\r
    const n = sorted.length\r
\r
    const y = d3.scaleBand().domain(sorted.map(d => d.label)).range([0, IH]).padding(0.4)\r
    const x = d3.scaleLinear().domain([0, d3.max(sorted, d => d.value) * 1.1]).range([0, IW])\r
    const barH = y.bandwidth()\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisTop(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    sorted.forEach((d, i) => {\r
      const cy = M.top + y(d.label) + barH / 2\r
      const barW = x(d.value)\r
\r
      // Stem line\r
      svg.append('line').attr('x1', M.left).attr('x2', M.left + barW).attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 2.5)\r
\r
      // Dot\r
      svg.append('circle').attr('cx', M.left + barW).attr('cy', cy).attr('r', 6)\r
        .attr('fill', colors[i % colors.length]).attr('stroke', '#fff').attr('stroke-width', 2)\r
\r
      // Value label\r
      svg.append('text').attr('x', M.left + barW + 8).attr('y', cy + 4)\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold').text(d.value)\r
    })\r
\r
    // Y axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Value')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Lollipop Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};