var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
\r
export const meta = {\r
  id: 'area-with-wave-distortion',\r
  title: 'Area With Wave Distortion',\r
  desc: 'Area With Wave Distortion — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithWaveDistortion',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-wave-distortion"],\r
}\r
\r
export default function AreaWithWaveDistortion({ data: customData, onCurveData }) {\r
  const ref = useRef(null)\r
  const params = useMemo(() => ({\r
    formula: 'sinusoidal',\r
    amp: customData?.amp ?? 15,\r
    offset: customData?.offset ?? 40,\r
    freq: customData?.freq ?? 2,\r
    numLayers: customData?.numLayers ?? 3,\r
    distortionAmp: customData?.distortionAmp ?? 3,\r
    distortionFreq: customData?.distortionFreq ?? 0.5,\r
    seed: customData?.seed ?? 42,\r
  }), [customData])\r
\r
  const curveData = useMemo(() => makeBaseCurve(params), [params])\r
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
    const { numLayers, distortionAmp, distortionFreq } = params\r
\r
    // Wave distortion ghost layers\r
    for (let w = 0; w < numLayers; w++) {\r
      const phase = w * Math.PI * 2 / numLayers\r
      const ghostData = curveData.map(d => ({ x: d.x, y: d.y + distortionAmp * Math.sin(d.x * distortionFreq + phase) }))\r
      g.append('path').datum(ghostData)\r
        .attr('d', d3.area().x(d => x(d.x)).y0(y(0)).y1(d => y(d.y)).curve(d3.curveBasis))\r
        .attr('fill', colors[w % colors.length]).attr('fill-opacity', 0.06).attr('stroke', 'none')\r
    }\r
\r
    // Main area\r
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
      .text('Area with Wave Distortion')\r
  }, [params, curveData, onCurveData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};