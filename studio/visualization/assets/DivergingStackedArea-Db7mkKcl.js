var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'diverging-stacked-area',\r
  title: 'Diverging Stacked Area',\r
  desc: 'Diverging Stacked Area — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingStackedArea',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","diverging-stacked-area"],\r
}\r
\r
export default function DivergingStackedArea({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"Jan","positive":30,"neutral":15,"negative":-20},{"date":"Feb","positive":45,"neutral":12,"negative":-25},{"date":"Mar","positive":40,"neutral":18,"negative":-30},{"date":"Apr","positive":55,"neutral":10,"negative":-35},{"date":"May","positive":50,"neutral":20,"negative":-28},{"date":"Jun","positive":65,"neutral":15,"negative":-40}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    // Derive keys from data: positive/negative values go one way, the rest stack\r
    // Try to detect: keys ending in 'pos' or with positive convention vs 'neg' convention\r
    const allKeys = Object.keys(data[0]).filter(k => k !== 'date' && k !== 'time' && k !== 'x')\r
    const negKeys = allKeys.filter(k => {\r
      const vals = data.map(d => d[k])\r
      return vals.some(v => v < 0)\r
    })\r
    const posKeys = allKeys.filter(k => !negKeys.includes(k))\r
\r
    // Color scale for all keys\r
    const color = d3.scaleOrdinal(colors).domain(allKeys)\r
\r
    const x = d3.scalePoint().domain(data.map(d => d.date || d.time || d.x)).range([0, IW]).padding(0.1)\r
    const posValues = data.map(d => d3.sum(posKeys, k => d[k]))\r
    const negValues = data.map(d => d3.sum(negKeys, k => d[k]))\r
    const maxPos = d3.max(posValues) || 1\r
    const maxNeg = Math.abs(d3.min(negValues) || 0)\r
    const y = d3.scaleLinear().domain([-maxNeg * 1.2, maxPos * 1.2]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
      .lower()\r
\r
    // Zero line\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text)').attr('stroke-width', 1.5)\r
\r
    // Draw each key as a separate area layer\r
    const stackedPos = posKeys.length ? d3.stack().keys(posKeys)(data) : []\r
    const stackedNeg = negKeys.length ? d3.stack().keys(negKeys)(data) : []\r
\r
    // Positive areas (stacked upward from zero)\r
    stackedPos.forEach((s, i) => {\r
      const area = d3.area()\r
        .x(d => x(d.data.date || d.data.time || d.data.x))\r
        .y0(d => y(0))\r
        .y1(d => y(d[1]))\r
        .curve(d3.curveCatmullRom)\r
      g.append('path').datum(s).attr('d', area).attr('fill', color(s.key)).attr('fill-opacity', 0.65)\r
    })\r
\r
    // Negative areas (stacked downward from zero)\r
    stackedNeg.forEach(s => {\r
      const area = d3.area()\r
        .x(d => x(d.data.date || d.data.time || d.data.x))\r
        .y0(d => y(0))\r
        .y1(d => y(d[1]))\r
        .curve(d3.curveCatmullRom)\r
      g.append('path').datum(s).attr('d', area).attr('fill', color(s.key)).attr('fill-opacity', 0.65)\r
    })\r
\r
    // Axes\r
    g.append('g').attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7.5px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickFormat(d => d3.format('.2s')(d)).tickSize(0).tickPadding(6))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', \`translate(\${W / 2 - allKeys.length * 25}, 12)\`)\r
    allKeys.forEach((k, i) => {\r
      legG.append('rect').attr('x', i * 55).attr('y', -4).attr('width', 7).attr('height', 7).attr('fill', color(k)).attr('rx', 1)\r
      legG.append('text').attr('x', i * 55 + 10).attr('y', 2)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(k)\r
    })\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};