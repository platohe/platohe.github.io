var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'partial-dependence-plot',\r
  title: 'Partial Dependence Plot',\r
  desc: 'Partial Dependence Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PartialDependencePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","partial-dependence-plot"],\r
}\r
\r
export default function PartialDependencePlot({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [plotType, setPlotType] = useState(options.plotType || '1d') // '1d' or '2d'\r
\r
  const DEFAULT_DATA_1D = {\r
    feature: 'Feature_1',\r
    grid: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],\r
    predictions: [0.12, 0.18, 0.25, 0.35, 0.48, 0.62, 0.73, 0.81, 0.86, 0.89, 0.91],\r
    ice: [\r
      [0.08, 0.14, 0.20, 0.28, 0.38, 0.50, 0.60, 0.68, 0.74, 0.78, 0.81],\r
      [0.15, 0.22, 0.30, 0.40, 0.52, 0.65, 0.75, 0.82, 0.87, 0.90, 0.92],\r
      [0.10, 0.16, 0.23, 0.33, 0.45, 0.58, 0.68, 0.76, 0.81, 0.85, 0.88],\r
      [0.14, 0.20, 0.28, 0.38, 0.50, 0.63, 0.73, 0.80, 0.85, 0.88, 0.90],\r
      [0.11, 0.17, 0.24, 0.34, 0.46, 0.59, 0.69, 0.77, 0.82, 0.86, 0.89],\r
    ],\r
    featureValues: [0.1, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95]\r
  }\r
\r
  const DEFAULT_DATA_2D = {\r
    feature1: 'Feature_1',\r
    feature2: 'Feature_2',\r
    grid1: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],\r
    grid2: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],\r
    predictions: [\r
      [0.15, 0.22, 0.30, 0.38, 0.45, 0.50],\r
      [0.20, 0.28, 0.38, 0.48, 0.55, 0.60],\r
      [0.28, 0.38, 0.50, 0.60, 0.68, 0.72],\r
      [0.35, 0.45, 0.58, 0.68, 0.75, 0.78],\r
      [0.42, 0.52, 0.65, 0.75, 0.80, 0.83],\r
      [0.48, 0.58, 0.70, 0.80, 0.85, 0.88],\r
    ]\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || (plotType === '1d' ? DEFAULT_DATA_1D : DEFAULT_DATA_2D)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    if (plotType === '1d') {\r
      render1D(g, data)\r
    } else {\r
      render2D(g, data)\r
    }\r
\r
    function render1D(g, data) {\r
      const { feature, grid, predictions, ice, featureValues } = data\r
\r
      const x = d3.scaleLinear().domain(d3.extent(grid)).range([0, IW])\r
      const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
      // Grid\r
      g.append('g')\r
        .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
        .call(g => g.select('.domain').remove())\r
        .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
      g.append('g')\r
        .attr('transform', \`translate(0,\${IH})\`)\r
        .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickFormat(''))\r
        .call(g => g.select('.domain').remove())\r
        .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
      // ICE curves (individual conditional expectation)\r
      if (ice && ice.length > 0) {\r
        const iceLine = d3.line()\r
          .x((_, i) => x(grid[i]))\r
          .y(d => y(d))\r
          .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
        ice.forEach((iceCurve, idx) => {\r
          g.append('path')\r
            .datum(iceCurve)\r
            .attr('d', iceLine)\r
            .attr('fill', 'none')\r
            .attr('stroke', colors[0])\r
            .attr('stroke-width', 0.8)\r
            .attr('opacity', 0.15)\r
        })\r
      }\r
\r
      // PDP line (average)\r
      const pdpLine = d3.line()\r
        .x((_, i) => x(grid[i]))\r
        .y(d => y(d))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      g.append('path')\r
        .datum(predictions)\r
        .attr('d', pdpLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[1])\r
        .attr('stroke-width', 3)\r
        .attr('opacity', 0.9)\r
\r
      // Confidence band (percentiles of ICE)\r
      if (ice && ice.length > 1) {\r
        const lower = grid.map((_, i) => d3.quantile(ice.map(c => c[i]), 0.05))\r
        const upper = grid.map((_, i) => d3.quantile(ice.map(c => c[i]), 0.95))\r
\r
        const area = d3.area()\r
          .x((_, i) => x(grid[i]))\r
          .y0((_, i) => y(upper[i]))\r
          .y1((_, i) => y(lower[i]))\r
          .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
        g.append('path')\r
          .datum(grid)\r
          .attr('d', area)\r
          .attr('fill', colors[1])\r
          .attr('opacity', 0.15)\r
      }\r
\r
      // Rug plot - feature value distribution\r
      if (featureValues && featureValues.length > 0) {\r
        g.selectAll('.rug')\r
          .data(featureValues)\r
          .enter()\r
          .append('line')\r
          .attr('class', 'rug')\r
          .attr('x1', d => x(d))\r
          .attr('x2', d => x(d))\r
          .attr('y1', IH)\r
          .attr('y2', IH - 8)\r
          .attr('stroke', 'var(--text-secondary)')\r
          .attr('stroke-width', 1)\r
          .attr('opacity', 0.4)\r
      }\r
\r
      // Axes\r
      g.append('g')\r
        .attr('transform', \`translate(0,\${IH})\`)\r
        .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
        .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
        .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
      g.append('g')\r
        .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
        .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
        .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
      // Labels\r
      g.append('text')\r
        .attr('x', IW / 2)\r
        .attr('y', IH + 38)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 500)\r
        .text(feature)\r
\r
      g.append('text')\r
        .attr('transform', 'rotate(-90)')\r
        .attr('x', -IH / 2)\r
        .attr('y', -45)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 500)\r
        .text('Partial Dependence')\r
\r
      // Title\r
      g.append('text')\r
        .attr('x', IW / 2)\r
        .attr('y', -10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '14px')\r
        .attr('font-weight', 600)\r
        .text('Partial Dependence Plot (1D)')\r
\r
      // Legend\r
      const legend = g.append('g').attr('transform', \`translate(20, 20)\`)\r
      legend.append('line').attr('x1', 0).attr('x2', 20).attr('stroke', colors[1]).attr('stroke-width', 3)\r
      legend.append('text').attr('x', 25).attr('y', 4).attr('font-size', '11px').attr('fill', 'var(--text)').text('Average (PDP)')\r
      if (ice && ice.length > 0) {\r
        legend.append('line').attr('x1', 0).attr('y1', 20).attr('x2', 20).attr('y2', 20).attr('stroke', colors[0]).attr('stroke-width', 1).attr('opacity', 0.3)\r
        legend.append('text').attr('x', 25).attr('y', 24).attr('font-size', '11px').attr('fill', 'var(--text)').text('Individual (ICE)')\r
      }\r
    }\r
\r
    function render2D(g, data) {\r
      const { feature1, feature2, grid1, grid2, predictions } = data\r
\r
      const cellWidth = IW / grid1.length\r
      const cellHeight = IH / grid2.length\r
\r
      const maxPred = d3.max(predictions.flat()) || 1\r
      const minPred = d3.min(predictions.flat()) || 0\r
\r
      const colorScale = d3.scaleSequential()\r
        .domain([minPred, maxPred])\r
        .interpolator(d3.interpolateViridis)\r
\r
      // Heatmap cells\r
      predictions.forEach((row, i) => {\r
        row.forEach((val, j) => {\r
          g.append('rect')\r
            .attr('x', j * cellWidth)\r
            .attr('y', i * cellHeight)\r
            .attr('width', cellWidth)\r
            .attr('height', cellHeight)\r
            .attr('fill', colorScale(val))\r
            .attr('stroke', 'none')\r
        })\r
      })\r
\r
      // Text values\r
      predictions.forEach((row, i) => {\r
        row.forEach((val, j) => {\r
          g.append('text')\r
            .attr('x', j * cellWidth + cellWidth / 2)\r
            .attr('y', i * cellHeight + cellHeight / 2 + 4)\r
            .attr('text-anchor', 'middle')\r
            .attr('dominant-baseline', 'middle')\r
            .attr('font-size', '10px')\r
            .attr('font-weight', 600)\r
            .attr('fill', val > (minPred + maxPred) / 2 ? 'white' : 'var(--text)')\r
            .text(val.toFixed(2))\r
        })\r
      })\r
\r
      // X axis labels\r
      grid1.forEach((val, j) => {\r
        g.append('text')\r
          .attr('x', j * cellWidth + cellWidth / 2)\r
          .attr('y', IH + 20)\r
          .attr('text-anchor', 'middle')\r
          .attr('font-size', '11px')\r
          .attr('fill', 'var(--text-secondary)')\r
          .text(val.toFixed(1))\r
      })\r
\r
      // Y axis labels\r
      grid2.forEach((val, i) => {\r
        g.append('text')\r
          .attr('x', -10)\r
          .attr('y', i * cellHeight + cellHeight / 2 + 4)\r
          .attr('text-anchor', 'end')\r
          .attr('dominant-baseline', 'middle')\r
          .attr('font-size', '11px')\r
          .attr('fill', 'var(--text-secondary)')\r
          .text(val.toFixed(1))\r
      })\r
\r
      // Axis titles\r
      g.append('text')\r
        .attr('x', IW / 2)\r
        .attr('y', IH + 45)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 500)\r
        .text(feature1)\r
\r
      g.append('text')\r
        .attr('transform', 'rotate(-90)')\r
        .attr('x', -IH / 2)\r
        .attr('y', -45)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 500)\r
        .text(feature2)\r
\r
      // Color legend\r
      const legendWidth = 100\r
      const legendHeight = 12\r
      const legendX = IW - legendWidth - 20\r
      const legendY = 20\r
\r
      const defs = svg.append('defs')\r
      const grad = defs.append('linearGradient')\r
        .attr('id', 'pdp2d-grad')\r
        .attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')\r
      d3.range(0, 1.01, 0.01).forEach(t => {\r
        grad.append('stop')\r
          .attr('offset', \`\${t * 100}%\`)\r
          .attr('stop-color', colorScale(minPred + t * (maxPred - minPred)))\r
      })\r
\r
      g.append('rect')\r
        .attr('x', legendX)\r
        .attr('y', legendY)\r
        .attr('width', legendWidth)\r
        .attr('height', legendHeight)\r
        .attr('fill', 'url(#pdp2d-grad)')\r
\r
      g.append('text')\r
        .attr('x', legendX)\r
        .attr('y', legendY - 4)\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text-secondary)')\r
        .text(minPred.toFixed(2))\r
\r
      g.append('text')\r
        .attr('x', legendX + legendWidth)\r
        .attr('y', legendY - 4)\r
        .attr('text-anchor', 'end')\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text-secondary)')\r
        .text(maxPred.toFixed(2))\r
\r
      g.append('text')\r
        .attr('x', legendX + legendWidth / 2)\r
        .attr('y', legendY + legendHeight + 14)\r
        .attr('text-anchor', 'middle')\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text-secondary)')\r
        .text('Prediction')\r
\r
      // Title\r
      g.append('text')\r
        .attr('x', IW / 2)\r
        .attr('y', -10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '14px')\r
        .attr('font-weight', 600)\r
        .text('Partial Dependence Plot (2D)')\r
    }\r
\r
  }, [customData, plotType])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};