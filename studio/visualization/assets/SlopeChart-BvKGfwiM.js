var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'slope-chart',\r
  title: 'Slope Chart',\r
  desc: 'Slope Chart — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'SlopeChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","slope-chart"],\r
}\r
\r
export default function SlopeChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Design","left":35,"right":72},{"name":"Engineering","left":82,"right":91},{"name":"Marketing","left":45,"right":58},{"name":"Sales","left":68,"right":65},{"name":"Support","left":52,"right":70},{"name":"Research","left":90,"right":85},{"name":"Operations","left":40,"right":48}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => (b.right - b.left) - (a.right - a.left))\r
    const n = sorted.length\r
    const barH = IH / n * 0.7\r
    const gap = IH / n\r
\r
    const x = d3.scalePoint().domain(['Before', 'After']).range([IW * 0.25, IW * 0.75])\r
    const allVals = sorted.flatMap(d => [d.left, d.right])\r
    const y = d3.scaleLinear().domain([d3.min(allVals) * 0.9, d3.max(allVals) * 1.1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    sorted.forEach((d, i) => {\r
      const cy = M.top + i * gap + (gap - barH) / 2\r
      const x1 = M.left + x('Before')\r
      const x2 = M.left + x('After')\r
      const y1 = y(d.left)\r
      const y2 = y(d.right)\r
      const color = d.right >= d.left ? colors[2] : colors[3]\r
\r
      // Slope line\r
      svg.append('line').attr('x1', x1).attr('x2', x2).attr('y1', y1).attr('y2', y2)\r
        .attr('stroke', color).attr('stroke-width', 2.5).attr('opacity', 0.8)\r
\r
      // Dots\r
      svg.append('circle').attr('cx', x1).attr('cy', y1).attr('r', 5)\r
        .attr('fill', colors[1]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
      svg.append('circle').attr('cx', x2).attr('cy', y2).attr('r', 5)\r
        .attr('fill', color).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
\r
      // Labels\r
      svg.append('text').attr('x', x1 - 8).attr('y', cy + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold').text(d.name)\r
      svg.append('text').attr('x', x1 - 8).attr('y', y1 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d.left)\r
      svg.append('text').attr('x', x2 + 8).attr('y', y2 + 4)\r
        .attr('text-anchor', 'start').attr('fill', color).attr('font-size', '10px').text(d.right)\r
    })\r
\r
    // X axis labels\r
    svg.append('text').attr('x', M.left + x('Before')).attr('y', M.top + IH + 20)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Before')\r
    svg.append('text').attr('x', M.left + x('After')).attr('y', M.top + IH + 20)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('After')\r
\r
    // Y axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Slope Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};