var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'shapsummary-plot',\r
  title: 'S H A P Summary Plot',\r
  desc: 'S H A P Summary Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SHAPSummaryPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","s-h-a-p-summary-plot"],\r
}\r
\r
export default function SHAPSummaryPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"feature":"Feature_1","shapValues":[-0.5,-0.3,-0.1,0.05,0.2,0.4,0.6,0.8],"featureValues":[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8]},{"feature":"Feature_2","shapValues":[-0.4,-0.2,0,0.1,0.25,0.35,0.5],"featureValues":[0.2,0.3,0.4,0.5,0.6,0.7,0.8]},{"feature":"Feature_3","shapValues":[-0.3,-0.15,0,0.1,0.2,0.3,0.4],"featureValues":[0.1,0.25,0.4,0.55,0.7,0.85,0.9]},{"feature":"Feature_4","shapValues":[-0.2,-0.1,0,0.05,0.15,0.25],"featureValues":[0.15,0.3,0.45,0.6,0.75,0.9]},{"feature":"Feature_5","shapValues":[-0.15,-0.05,0.02,0.1,0.18],"featureValues":[0.2,0.35,0.5,0.65,0.8]},{"feature":"Feature_6","shapValues":[-0.1,0,0.05,0.12],"featureValues":[0.25,0.4,0.55,0.7]},{"feature":"Feature_7","shapValues":[-0.08,0,0.03,0.08],"featureValues":[0.3,0.45,0.6,0.75]},{"feature":"Feature_8","shapValues":[-0.05,0,0.02,0.05],"featureValues":[0.35,0.5,0.65,0.8]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const allShapValues = data.flatMap(d => d.shapValues)\r
    const maxAbsShap = d3.max(allShapValues.map(Math.abs)) || 1\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.feature))\r
      .range([0, IH])\r
      .padding(0.4)\r
\r
    const x = d3.scaleLinear()\r
      .domain([-maxAbsShap * 1.1, maxAbsShap * 1.1])\r
      .range([0, IW])\r
\r
    const colorScale = d3.scaleSequential()\r
      .domain([0, 1])\r
      .interpolator(d3.interpolateRdBu)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Vertical line at 0\r
    g.append('line')\r
      .attr('x1', x(0))\r
      .attr('y1', 0)\r
      .attr('x2', x(0))\r
      .attr('y2', IH)\r
      .attr('stroke', 'var(--text-secondary)')\r
      .attr('stroke-dasharray', '4,4')\r
      .attr('stroke-width', 1)\r
\r
    // Beeswarm points\r
    data.forEach((d, featureIdx) => {\r
      const yPos = y(d.feature) + y.bandwidth() / 2\r
      const bandwidth = y.bandwidth()\r
\r
      // Jitter points vertically\r
      const jitter = d.shapValues.map((_, i) => (Math.random() - 0.5) * bandwidth * 0.8)\r
\r
      d.shapValues.forEach((shapVal, i) => {\r
        const featureVal = d.featureValues[i] || 0\r
        const color = colorScale(1 - featureVal) // Low=blue, High=red\r
\r
        g.append('circle')\r
          .attr('cx', x(shapVal))\r
          .attr('cy', yPos + jitter[i])\r
          .attr('r', Math.max(2, bandwidth * 0.2))\r
          .attr('fill', color)\r
          .attr('opacity', 0.7)\r
          .attr('stroke', 'none')\r
      })\r
    })\r
\r
    // Feature names (y-axis)\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(10))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '11px'))\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis label\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 35)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('SHAP Value (Impact on Model Output)')\r
\r
    // Color legend\r
    const legendWidth = 100\r
    const legendHeight = 12\r
    const legendX = IW - legendWidth - 20\r
    const legendY = 20\r
\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient')\r
      .attr('id', 'shap-grad')\r
      .attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')\r
    d3.range(0, 1.01, 0.01).forEach(t => {\r
      grad.append('stop')\r
        .attr('offset', \`\${t * 100}%\`)\r
        .attr('stop-color', colorScale(1 - t))\r
    })\r
\r
    g.append('rect')\r
      .attr('x', legendX)\r
      .attr('y', legendY)\r
      .attr('width', legendWidth)\r
      .attr('height', legendHeight)\r
      .attr('fill', 'url(#shap-grad)')\r
\r
    g.append('text')\r
      .attr('x', legendX)\r
      .attr('y', legendY - 4)\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('Low')\r
\r
    g.append('text')\r
      .attr('x', legendX + legendWidth)\r
      .attr('y', legendY - 4)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('High')\r
\r
    g.append('text')\r
      .attr('x', legendX + legendWidth / 2)\r
      .attr('y', legendY + legendHeight + 14)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('Feature Value')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('SHAP Summary Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};