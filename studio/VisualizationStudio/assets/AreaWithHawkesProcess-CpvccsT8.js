var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
\r
export const meta = {\r
  id: 'area-with-hawkes-process',\r
  title: 'Area With Hawkes Process',\r
  desc: 'Area With Hawkes Process — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithHawkesProcess',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-hawkes-process"],\r
}\r
\r
export default function AreaWithHawkesProcess({ data: customData, onCurveData }) {\r
  const ref = useRef(null)\r
  const params = useMemo(() => ({\r
    baseline: customData?.baseline ?? 0.1,\r
    alpha: customData?.alpha ?? 0.8,\r
    beta: customData?.beta ?? 1.5,\r
    seed: customData?.seed ?? 42,\r
  }), [customData])\r
\r
  const curveData = useMemo(() => makeBaseCurve({ formula: 'sinusoidal', points: 60, amp: 15, offset: 40, freq: 2, seed: params.seed }), [params.seed])\r
\r
  useEffect(() => {\r
    if (onCurveData) onCurveData(curveData)\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const margin = { top: 28, right: 14, bottom: 24, left: 36 }\r
    const width = W - margin.left - margin.right, height = H - margin.top - margin.bottom\r
    const x = d3.scaleLinear().domain(d3.extent(curveData, d => d.x)).range([0, width])\r
    const yMax = d3.max(curveData, d => d.y) * 1.3 || 80\r
    const y = d3.scaleLinear().domain([0, yMax]).range([height, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Hawkes process intensity with params\r
    const { baseline, alpha, beta } = params\r
    let intensity = baseline\r
    const intensityData = curveData.map((d, i) => {\r
      if (i === 0) return { x: d.x, lambda: baseline * yMax }\r
      const dt = d.x - curveData[i - 1].x || 1\r
      intensity = baseline + (intensity - baseline) * Math.exp(-beta * dt) + alpha * Math.exp(-beta * dt)\r
      return { x: d.x, lambda: intensity * yMax }\r
    })\r
\r
    // Intensity ribbon\r
    g.append('path').datum(intensityData)\r
      .attr('d', d3.area().x(d => x(d.x)).y0(y(0)).y1(d => y(d.lambda)).curve(d3.curveBasis))\r
      .attr('fill', '#ef4444').attr('fill-opacity', 0.15).attr('stroke', 'none')\r
\r
    // Original area\r
    g.append('path').datum(curveData)\r
      .attr('d', d3.area().x(d => x(d.x)).y0(y(0)).y1(d => y(d.y)).curve(d3.curveBasis))\r
      .attr('fill', colors[0]).attr('fill-opacity', 0.18).attr('stroke', colors[0]).attr('stroke-width', 1.6)\r
    g.append('path').datum(curveData)\r
      .attr('d', d3.line().x(d => x(d.x)).y(d => y(d.y)).curve(d3.curveBasis))\r
      .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1.8)\r
\r
    // Axes\r
    g.append('g').attr('transform', \`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0))\r
      .call(g2 => g2.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2 => g2.select('.domain').remove())\r
      .call(g2 => g2.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
      .call(g2 => g2.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    svg.append('text').attr('x', 200).attr('y', 14).attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Area with Hawkes Process')\r
  }, [params, curveData, onCurveData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};