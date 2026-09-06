var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'drill-down-chart',\r
  title: 'Drill Down Chart',\r
  desc: 'Drill Down Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DrillDownChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","drill-down-chart"],\r
}\r
\r
export default function DrillDownChart({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [level, setLevel] = useState(0) // 0 = overview, 1 = category, 2 = subcategory\r
  const [selectedCategory, setSelectedCategory] = useState(null)\r
\r
  const DEFAULT_DATA = [{"category":"Electronics","subcategory":"Phones","value":12000,"count":150},{"category":"Electronics","subcategory":"Laptops","value":25000,"count":80},{"category":"Electronics","subcategory":"Tablets","value":8000,"count":60},{"category":"Electronics","subcategory":"Accessories","value":5000,"count":200},{"category":"Clothing","subcategory":"Men","value":18000,"count":300},{"category":"Clothing","subcategory":"Women","value":22000,"count":350},{"category":"Clothing","subcategory":"Kids","value":8000,"count":150},{"category":"Clothing","subcategory":"Accessories","value":6000,"count":100},{"category":"Home","subcategory":"Furniture","value":30000,"count":80},{"category":"Home","subcategory":"Decor","value":12000,"count":200},{"category":"Home","subcategory":"Kitchen","value":15000,"count":180},{"category":"Sports","subcategory":"Outdoor","value":10000,"count":120},{"category":"Sports","subcategory":"Fitness","value":15000,"count":200},{"category":"Sports","subcategory":"Team Sports","value":8000,"count":90}]\r
\r
  const dataset = Array.isArray(customData) && customData.length > 0 ? customData : DEFAULT_DATA\r
\r
  const categories = [...new Set(dataset.map(d => d.category))]\r
  const subcategoriesByCategory = {}\r
  dataset.forEach(d => {\r
    if (!subcategoriesByCategory[d.category]) subcategoriesByCategory[d.category] = []\r
    subcategoriesByCategory[d.category].push(d)\r
  })\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let displayData = []\r
    let title = ''\r
    let xKey = 'category'\r
    let yKey = 'value'\r
    let xLabel = 'Category'\r
    let yLabel = 'Value ($)'\r
    let colorScale = d3.scaleOrdinal(colors)\r
\r
    if (level === 0) {\r
      // Overview: Categories\r
      displayData = categories.map(cat => ({\r
        name: cat,\r
        value: dataset.filter(d => d.category === cat).reduce((sum, d) => sum + d.value, 0),\r
        count: dataset.filter(d => d.category === cat).reduce((sum, d) => sum + d.count, 0)\r
      }))\r
      title = 'Sales by Category (Click to Drill Down)'\r
      colorScale = d3.scaleOrdinal(colors).domain(categories)\r
    } else if (level === 1) {\r
      // Subcategories within selected category\r
      displayData = subcategoriesByCategory[selectedCategory] || []\r
      title = \`\${selectedCategory} - Subcategories (Click to Drill Down)\`\r
      colorScale = d3.scaleOrdinal(colors).domain(displayData.map(d => d.subcategory))\r
      xKey = 'subcategory'\r
      xLabel = 'Subcategory'\r
    } else if (level === 2) {\r
      // Individual items (could be time series, etc.)\r
      displayData = subcategoriesByCategory[selectedCategory] || []\r
      title = \`\${selectedCategory} - Details\`\r
    }\r
\r
    const maxVal = d3.max(displayData, d => d.value) || 1\r
\r
    const x = d3.scaleBand()\r
      .domain(displayData.map(d => d[xKey] || d.name))\r
      .range([0, IW])\r
      .padding(0.2)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(displayData, d => d.value) * 1.1])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(d3.scaleLinear().domain([0, d3.max(displayData, d => d.value) * 1.1]).range([IH, 0])).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Back button (if not at root)\r
    if (level > 0) {\r
      const backBtn = g.append('g')\r
        .attr('class', 'back-button')\r
        .attr('transform', \`translate(-10, -30)\`)\r
        .style('cursor', 'pointer')\r
        .on('click', () => {\r
          if (level === 2) setLevel(1)\r
          else if (level === 1) { setLevel(0); setSelectedCategory(null) }\r
        })\r
\r
      backBtn.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 80).attr('height', 25)\r
        .attr('rx', 4)\r
        .attr('fill', colors[3])\r
        .attr('opacity', 0.9)\r
\r
      backBtn.append('text')\r
        .attr('x', 40).attr('y', 17)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'white')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .text(level === 1 ? '← Back' : '← Subcategories')\r
    }\r
\r
    // Bars\r
    const barHeight = x.bandwidth ? x.bandwidth() : IH / displayData.length * 0.8\r
\r
    g.selectAll('.bar')\r
      .data(displayData)\r
      .enter()\r
      .append('rect')\r
      .attr('class', 'bar')\r
      .attr('x', d => x(d[xKey] || d.name))\r
      .attr('y', d => y(d.value))\r
      .attr('width', x.bandwidth ? x.bandwidth() : IW / displayData.length * 0.8)\r
      .attr('height', d => IH - y(d.value))\r
      .attr('fill', d => colorScale(d[xKey] || d.name))\r
      .attr('opacity', 0.8)\r
      .attr('rx', 3)\r
      .style('cursor', level < 2 ? 'pointer' : 'default')\r
      .on('click', (event, d) => {\r
        if (level === 0) {\r
          setSelectedCategory(d.name)\r
          setLevel(1)\r
        } else if (level === 1) {\r
          setLevel(2)\r
        }\r
      })\r
      .on('mouseover', function(event, d) {\r
        d3.select(this).attr('opacity', 1)\r
        showTooltip(event, d)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this).attr('opacity', 0.8)\r
        hideTooltip()\r
      })\r
\r
    // Value labels\r
    g.selectAll('.label')\r
      .data(displayData)\r
      .enter()\r
      .append('text')\r
      .attr('class', 'label')\r
      .attr('x', d => x(d[xKey] || d.name) + (x.bandwidth ? x.bandwidth() / 2 : IW / displayData.length / 2))\r
      .attr('y', d => y(d.value) - 5)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-weight', 600)\r
      .text(d => '$' + d.value.toLocaleString())\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 38)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text(xLabel)\r
\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text(yLabel)\r
\r
    // Level indicator\r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Level \${level + 1} of 3\`)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(title)\r
\r
    // Click hint\r
    if (level < 2) {\r
      g.append('text')\r
        .attr('x', IW / 2)\r
        .attr('y', IH + 45)\r
        .attr('text-anchor', 'middle')\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text-secondary)')\r
        .text('Click a bar to drill down')\r
    }\r
\r
    // Tooltip\r
    const tooltip = d3.select('body').append('div')\r
      .style('position', 'absolute')\r
      .style('pointer-events', 'none')\r
      .style('opacity', 0)\r
      .style('background', 'var(--bg-card)')\r
      .style('border', '1px solid var(--border)')\r
      .style('border-radius', '6px')\r
      .style('padding', '8px 12px')\r
      .style('font-size', '11px')\r
      .style('color', 'var(--text)')\r
      .style('box-shadow', '0 4px 12px rgba(0,0,0,0.15)')\r
      .style('z-index', 1000)\r
\r
    function showTooltip(event, d) {\r
      tooltip.html(\`\r
        <strong>\${d.name || d.category || d.subcategory}</strong><br/>\r
        Value: $\${d.value.toLocaleString()}<br/>\r
        Count: \${d.count || 'N/A'}<br/>\r
        Level: \${level + 1}\r
      \`)\r
        .style('left', \`\${event.pageX + 10}px\`)\r
        .style('top', \`\${event.pageY - 10}px\`)\r
        .style('opacity', 1)\r
    }\r
\r
    function hideTooltip() {\r
      tooltip.style('opacity', 0)\r
    }\r
\r
    return () => {\r
      tooltip.remove()\r
    }\r
\r
  }, [level, selectedCategory])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};