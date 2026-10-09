var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'learning-curves',\r
  title: 'Learning Curves',\r
  desc: 'Learning Curves — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LearningCurves',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","learning-curves"],\r
}\r
\r
export default function LearningCurves({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"trainSizes":[50,100,200,500,1000,2000,5000,10000],"trainScores":[[0.95,0.93,0.91,0.89,0.88,0.87,0.86,0.85],[0.94,0.92,0.9,0.88,0.87,0.86,0.85,0.84],[0.96,0.94,0.92,0.9,0.89,0.88,0.87,0.86],[0.93,0.91,0.89,0.87,0.86,0.85,0.84,0.83],[0.95,0.93,0.91,0.89,0.88,0.87,0.86,0.85]],"valScores":[[0.65,0.72,0.78,0.82,0.84,0.85,0.85,0.85],[0.63,0.7,0.76,0.8,0.82,0.83,0.84,0.84],[0.67,0.74,0.8,0.84,0.86,0.87,0.87,0.87],[0.62,0.69,0.75,0.79,0.81,0.82,0.83,0.83],[0.65,0.72,0.78,0.82,0.84,0.85,0.85,0.85]]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { trainSizes, trainScores, valScores } = data\r
\r
    // Calculate mean and std for train and val\r
    const trainMean = trainSizes.map((_, i) => d3.mean(trainScores.map(fold => fold[i])))\r
    const trainStd = trainSizes.map((_, i) => d3.deviation(trainScores.map(fold => fold[i])))\r
    const valMean = trainSizes.map((_, i) => d3.mean(valScores.map(fold => fold[i])))\r
    const valStd = trainSizes.map((_, i) => d3.deviation(valScores.map(fold => fold[i])))\r
\r
    const x = d3.scaleLog()\r
      .domain(d3.extent(trainSizes))\r
      .range([0, IW])\r
      .nice()\r
\r
    const y = d3.scaleLinear()\r
      .domain([0.5, 1.0])\r
      .range([IH, 0])\r
      .nice()\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
\r
    // Train confidence band\r
    const trainArea = d3.area()\r
      .x((_, i) => x(trainSizes[i]))\r
      .y0((_, i) => y(trainMean[i] + trainStd[i]))\r
      .y1((_, i) => y(trainMean[i] - trainStd[i]))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(trainSizes)\r
      .attr('d', trainArea)\r
      .attr('fill', colors[0])\r
      .attr('opacity', 0.15)\r
\r
    // Val confidence band\r
    const valArea = d3.area()\r
      .x((_, i) => x(trainSizes[i]))\r
      .y0((_, i) => y(valMean[i] + valStd[i]))\r
      .y1((_, i) => y(valMean[i] - valStd[i]))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(trainSizes)\r
      .attr('d', valArea)\r
      .attr('fill', colors[1])\r
      .attr('opacity', 0.15)\r
\r
    // Train mean line\r
    const trainLine = d3.line()\r
      .x((_, i) => x(trainSizes[i]))\r
      .y((_, i) => y(trainMean[i]))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(trainSizes)\r
      .attr('d', trainLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    // Val mean line\r
    const valLine = d3.line()\r
      .x((_, i) => x(trainSizes[i]))\r
      .y((_, i) => y(valMean[i]))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(trainSizes)\r
      .attr('d', valLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[1])\r
      .attr('stroke-width', 2.5)\r
\r
    // Points\r
    g.selectAll('.train-point')\r
      .data(trainSizes)\r
      .enter()\r
      .append('circle')\r
      .attr('class', 'train-point')\r
      .attr('cx', (_, i) => x(trainSizes[i]))\r
      .attr('cy', (_, i) => y(trainMean[i]))\r
      .attr('r', 4)\r
      .attr('fill', colors[0])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
\r
    g.selectAll('.val-point')\r
      .data(trainSizes)\r
      .enter()\r
      .append('circle')\r
      .attr('class', 'val-point')\r
      .attr('cx', (_, i) => x(trainSizes[i]))\r
      .attr('cy', (_, i) => y(valMean[i]))\r
      .attr('r', 4)\r
      .attr('fill', colors[1])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
\r
    // Legend\r
    const legend = g.append('g')\r
      .attr('transform', \`translate(\${IW - 150}, 20)\`)\r
\r
    legend.append('circle')\r
      .attr('cx', 0).attr('cy', 0).attr('r', 6)\r
      .attr('fill', colors[0])\r
    legend.append('text')\r
      .attr('x', 12).attr('y', 4)\r
      .attr('font-size', '11px').attr('fill', 'var(--text)')\r
      .text('Training Score')\r
\r
    legend.append('circle')\r
      .attr('cx', 0).attr('cy', 20).attr('r', 6)\r
      .attr('fill', colors[1])\r
    legend.append('text')\r
      .attr('x', 12).attr('y', 24)\r
      .attr('font-size', '11px').attr('fill', 'var(--text)')\r
      .text('Validation Score')\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5, 'd').tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 38)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('Training Set Size')\r
\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('Score (Accuracy)')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Learning Curves')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};