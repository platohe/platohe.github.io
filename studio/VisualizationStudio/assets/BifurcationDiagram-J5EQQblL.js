var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bifurcation-diagram',\r
  title: 'Bifurcation Diagram',\r
  desc: 'Bifurcation Diagram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BifurcationDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bifurcation-diagram"],\r
}\r
\r
export default function BifurcationDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_CONFIG = {\r
    rMin: 2.4,\r
    rMax: 4.0,\r
    rStep: 0.005,\r
    transients: 200,\r
    plotPoints: 100,\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_CONFIG, ...customData }\r
      : DEFAULT_CONFIG\r
\r
    const rMin = config.rMin ?? 2.4\r
    const rMax = config.rMax ?? 4.0\r
    const rStep = config.rStep ?? 0.005\r
    const transients = config.transients ?? 200\r
    const plotPoints = config.plotPoints ?? 100\r
\r
    const x = d3.scaleLinear().domain([rMin, rMax]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    // Ricker map: x_{n+1} = x_n * exp(r * (1 - x_n))\r
    const points = []\r
    for (let r = rMin; r <= rMax; r += rStep) {\r
      let xVal = 0.5\r
      // Discard transients\r
      for (let i = 0; i < transients; i++) {\r
        xVal = xVal * Math.exp(r * (1 - xVal))\r
      }\r
      // Plot attractor\r
      for (let i = 0; i < plotPoints; i++) {\r
        xVal = xVal * Math.exp(r * (1 - xVal))\r
        if (xVal >= 0 && xVal <= 1) {\r
          points.push({ r, x: xVal })\r
        }\r
      }\r
    }\r
\r
    // Subsample for performance\r
    const sampled = points.filter((_, i) => i % 3 === 0)\r
\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(sampled).join('circle')\r
      .attr('cx', d => x(d.r)).attr('cy', d => y(d.x)).attr('r', 1)\r
      .attr('fill', colors[0]).attr('opacity', 0.4)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => d.toFixed(1)))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(\`r ∈ [\${rMin}, \${rMax}]\`)\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Bifurcation Diagram (Ricker Map)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};