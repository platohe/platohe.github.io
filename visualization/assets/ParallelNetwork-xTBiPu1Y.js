var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, IW } from './utils'\r
\r
export const meta = {\r
  id: 'parallel-network',\r
  title: 'Parallel Network',\r
  desc: 'Parallel Network — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ParallelNetwork',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","parallel-network"],\r
}\r
\r
export default function ParallelNetwork({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"item":"Product A","score1":80,"score2":60,"score3":90,"score4":70},{"item":"Product B","score1":60,"score2":90,"score3":50,"score4":85},{"item":"Product C","score1":70,"score2":50,"score3":85,"score4":60},{"item":"Product D","score1":90,"score2":80,"score3":70,"score4":95},{"item":"Product E","score1":50,"score2":70,"score3":60,"score4":40}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const keys = Object.keys(data[0]).filter(k => k !== 'item')\r
    const numAxes = keys.length\r
    const axisSpacing = IW / (numAxes - 1)\r
\r
    // Axes span local y 80..220 (140 tall); translate so they fit H=300 with legend at bottom\r
    const g = svg.append('g').attr('transform', \`translate(50,10)\`)\r
\r
    // Scales for each axis\r
    const scales = keys.map(key => {\r
      const values = data.map(d => d[key])\r
      return d3.scaleLinear().domain(d3.extent(values)).range([80, 220])\r
    })\r
\r
    // Draw axes\r
    keys.forEach((key, i) => {\r
      const x = i * axisSpacing + axisSpacing / 2\r
      g.append('line')\r
        .attr('x1', x).attr('x2', x).attr('y1', 80).attr('y2', 220)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
      g.append('text')\r
        .attr('x', x).attr('y', 70)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').attr('font-weight', 600)\r
        .text(key)\r
    })\r
\r
    // Draw lines for each data point\r
    const color = d3.scaleOrdinal(d3.schemeTableau10)\r
    data.forEach((d, i) => {\r
      const points = keys.map((key, j) => [j * axisSpacing + axisSpacing / 2, scales[j](d[key])])\r
      const line = d3.line().x(d => d[0]).y(d => d[1]).curve(d3.curveLinear)\r
\r
      g.append('path')\r
        .datum(points)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', color(i))\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-opacity', 0.7)\r
\r
      // Dots\r
      points.forEach(([px, py]) => {\r
        g.append('circle')\r
          .attr('cx', px).attr('cy', py)\r
          .attr('r', 2.5).attr('fill', color(i))\r
      })\r
    })\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', \`translate(\${W / 2 - data.length * 40 / 2},\${H - 20})\`)\r
    data.forEach((d, i) => {\r
      const lx = i * 75\r
      legG.append('circle').attr('cx', lx).attr('cy', 0).attr('r', 3).attr('fill', color(i))\r
      legG.append('text').attr('x', lx + 7).attr('y', 3)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(d.item)\r
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