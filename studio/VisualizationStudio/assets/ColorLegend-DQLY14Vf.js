var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'color-legend',\r
  title: 'Color Legend',\r
  desc: 'Color Legend — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ColorLegend',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","color-legend"],\r
}\r
\r
export default function ColorLegend({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Continuous gradient\r
    const width = 380, height = 265\r
    const DEFAULT_DATA = 12\r
    const gradW = (typeof customData === 'number' && customData > 0) ? customData : DEFAULT_DATA\r
\r
    const grad = svg.append('defs').append('linearGradient').attr('id', 'clGrad')\r
      .attr('x1', '0%').attr('x2', '100%').attr('y1', '0%').attr('y2', '0%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#1e3a5f')\r
    grad.append('stop').attr('offset', '25%').attr('stop-color', '#4a90c4')\r
    grad.append('stop').attr('offset', '50%').attr('stop-color', '#fbbf24')\r
    grad.append('stop').attr('offset', '75%').attr('stop-color', '#ef4444')\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#7c2d12')\r
\r
    svg.append('rect')\r
      .attr('x', 100).attr('y', 40)\r
      .attr('width', 200).attr('height', 16)\r
      .attr('fill', 'url(#clGrad)').attr('rx', 6)\r
\r
    svg.append('text').attr('x', 95).attr('y', 50).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Low')\r
    svg.append('text').attr('x', 305).attr('y', 50).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('High')\r
\r
    // Discrete legend\r
    const categories = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon']\r
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']\r
    const lg = svg.append('g').attr('transform', 'translate(100,100)')\r
\r
    categories.forEach((cat, i) => {\r
      lg.append('rect').attr('width', 14).attr('height', 14).attr('rx', 3).attr('fill', colors[i])\r
      lg.append('text').attr('x', 20).attr('y', 12).attr('fill', 'var(--text)').attr('font-size', '12px').text(cat)\r
      lg.attr('transform', \`translate(100, \${100 + i * 28})\`)\r
    })\r
\r
    // Sequential legend (vertical)\r
    const vGrad = svg.append('defs').append('linearGradient').attr('id', 'vGrad')\r
      .attr('x1', '0%').attr('x2', '0%').attr('y1', '0%').attr('y2', '100%')\r
    vGrad.append('stop').attr('offset', '0%').attr('stop-color', '#6366f1')\r
    vGrad.append('stop').attr('offset', '100%').attr('stop-color', '#e0e7ff')\r
\r
    svg.append('rect').attr('x', 320).attr('y', 30).attr('width', 12).attr('height', 120)\r
      .attr('fill', 'url(#vGrad)').attr('rx', 6)\r
    svg.append('text').attr('x', 340).attr('y', 38).attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('High')\r
    svg.append('text').attr('x', 340).attr('y', 148).attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Low')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};