var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sina-plot',\r
  title: 'Sina Plot',\r
  desc: 'Sina Plot — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'SinaPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","sina-plot"],\r
}\r
\r
export default function SinaPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"category":"A","values":[12,15,18,22,25,28,30,32,35,38,40,42,45,48,50]},{"category":"B","values":[8,10,12,15,18,20,22,25,28,30,32,35,38,40,42]},{"category":"C","values":[20,22,25,28,30,32,35,38,40,42,45,48,50,52,55]},{"category":"D","values":[5,8,10,12,15,18,20,22,25,28,30,32,35,38,40]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const categories = data.map(d => d.category)\r
    const x = d3.scaleBand()\r
      .domain(categories)\r
      .range([0, IW])\r
      .padding(0.3)\r
\r
    const allValues = data.flatMap(d => d.values)\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(allValues) * 1.1])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // For each category, create sina plot\r
    data.forEach((d, i) => {\r
      const categoryData = d.values\r
      const categoryX = x(d.category)\r
      const categoryWidth = x.bandwidth()\r
      \r
      // Calculate simple density-based jittering\r
      const pointData = categoryData.map((value) => {\r
        // Normalize value to 0-1 range\r
        const normalizedValue = (value - y.domain()[0]) / (y.domain()[1] - y.domain()[0])\r
        \r
        // Simple density estimation using count of nearby points\r
        const nearbyCount = categoryData.filter(v => Math.abs(v - value) < 5).length\r
        const density = nearbyCount / categoryData.length\r
        \r
        // Jitter width inversely proportional to density\r
        const jitterWidth = (1 - density) * (categoryWidth / 2 - 4)\r
        const jitter = (Math.random() - 0.5) * jitterWidth * 2\r
        \r
        return {\r
          value,\r
          x: categoryX + categoryWidth / 2 + jitter,\r
          y: y(value)\r
        }\r
      })\r
      \r
      svg.append('g')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .selectAll('circle')\r
        .data(pointData)\r
        .join('circle')\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.y)\r
        .attr('r', 3)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('fill-opacity', 0.7)\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 0.5)\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};