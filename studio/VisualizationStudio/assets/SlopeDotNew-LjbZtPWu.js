var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'slope-dot-new',\r
  title: 'Slope Dot New',\r
  desc: 'Slope Dot New — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'SlopeDotNew',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","slope-dot-new"],\r
}\r
\r
export default function SlopeDotNew({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Alice","before":65,"after":82},{"name":"Bob","before":78,"after":71},{"name":"Carol","before":52,"after":90},{"name":"Dave","before":88,"after":85},{"name":"Eve","before":45,"after":78},{"name":"Frank","before":70,"after":62}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 35, right: 40, bottom: 30, left: 60 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const y = d3.scaleLinear().domain([0, 100]).range([h, 0])\r
\r
    const g = svg.append('g')\r
\r
    data.forEach((d, i) => {\r
      const dy = y(d.after) - y(d.before)\r
      const color = dy > 0 ? colors[2] : dy < 0 ? colors[3] : colors[0]\r
      const delay = i * 120\r
\r
      // Line connecting dots — animate from collapsed to full slope\r
      const line = g.append('line')\r
        .attr('x1', margin.left + w * 0.45).attr('y1', y(d.before))\r
        .attr('x2', margin.left + w * 0.45).attr('y2', y(d.before))\r
        .attr('stroke', color).attr('stroke-width', 1.5).attr('opacity', 0)\r
      line.transition().delay(delay).duration(700).ease(d3.easeCubicOut)\r
        .attr('x2', margin.left + w * 0.55).attr('y2', y(d.after))\r
        .attr('opacity', 0.5)\r
\r
      // Before dot — grow in\r
      const c1 = g.append('circle').attr('cx', margin.left + w * 0.2).attr('cy', y(d.before)).attr('r', 0)\r
        .attr('fill', colors[0]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      c1.transition().delay(delay + 200).duration(400).ease(d3.easeBackOut.overshoot(1.5)).attr('r', 5)\r
\r
      const t1 = g.append('text').attr('x', margin.left + w * 0.2).attr('y', y(d.before) - 10)\r
        .attr('text-anchor', 'middle').attr('fill', colors[0]).attr('font-size', '9px').attr('font-weight', 600)\r
        .attr('opacity', 0).text(d.before)\r
      t1.transition().delay(delay + 400).duration(400).attr('opacity', 1)\r
\r
      // After dot — grow in\r
      const c2 = g.append('circle').attr('cx', margin.left + w * 0.8).attr('cy', y(d.after)).attr('r', 0)\r
        .attr('fill', colors[1]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      c2.transition().delay(delay + 300).duration(400).ease(d3.easeBackOut.overshoot(1.5)).attr('r', 5)\r
\r
      const t2 = g.append('text').attr('x', margin.left + w * 0.8).attr('y', y(d.after) - 10)\r
        .attr('text-anchor', 'middle').attr('fill', colors[1]).attr('font-size', '9px').attr('font-weight', 600)\r
        .attr('opacity', 0).text(d.after)\r
      t2.transition().delay(delay + 500).duration(400).attr('opacity', 1)\r
\r
      // Label — fade/slide in\r
      const lab = g.append('text').attr('x', margin.left + w * 0.5).attr('y', (y(d.before) + y(d.after)) / 2 + 3)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '9px')\r
        .attr('opacity', 0).text(d.name)\r
      lab.transition().delay(delay + 600).duration(400).attr('opacity', 1)\r
\r
      // Subtle loop pulse after entrance\r
      const pulse = () => {\r
        c1.transition().duration(1200).delay(3000 + i * 200).attr('r', 6).transition().duration(600).attr('r', 5)\r
        c2.transition().duration(1200).delay(3000 + i * 200).attr('r', 6).transition().duration(600).attr('r', 5)\r
      }\r
      // Only start pulse after entrance completes\r
      setTimeout(pulse, delay + 1500)\r
    })\r
\r
    // Axis labels — fade in\r
    g.append('text').attr('x', margin.left + w * 0.2).attr('y', h + 20)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').attr('opacity', 0).text('Before')\r
      .transition().delay(200).duration(600).attr('opacity', 1)\r
    g.append('text').attr('x', margin.left + w * 0.8).attr('y', h + 20)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').attr('opacity', 0).text('After')\r
      .transition().delay(300).duration(600).attr('opacity', 1)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};