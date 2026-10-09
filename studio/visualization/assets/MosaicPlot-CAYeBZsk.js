var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'mosaic-plot',\r
  title: 'Mosaic Plot',\r
  desc: 'Mosaic Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MosaicPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","mosaic-plot"],\r
}\r
\r
export default function MosaicPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"A","category":"X","value":30},{"group":"A","category":"Y","value":20},{"group":"A","category":"Z","value":10},{"group":"B","category":"X","value":15},{"group":"B","category":"Y","value":25},{"group":"B","category":"Z","value":20},{"group":"C","category":"X","value":25},{"group":"C","category":"Y","value":15},{"group":"C","category":"Z","value":5}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    // Calculate group totals and category totals\r
    const groups = [...new Set(data.map(d => d.group))]\r
    const categories = [...new Set(data.map(d => d.category))]\r
    \r
    const groupTotals = groups.map(group => ({\r
      group,\r
      total: data.filter(d => d.group === group).reduce((sum, d) => sum + d.value, 0)\r
    }))\r
    \r
    const categoryTotals = categories.map(category => ({\r
      category,\r
      total: data.filter(d => d.category === category).reduce((sum, d) => sum + d.value, 0)\r
    }))\r
\r
    const grandTotal = d3.sum(data, d => d.value) || 1\r
\r
    // Create scales\r
    const x = d3.scaleBand()\r
      .domain(groups)\r
      .range([0, IW])\r
      .padding(0.1)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, grandTotal])\r
      .range([IH, 0])\r
\r
    // Calculate tile positions\r
    let currentX = 0\r
    const tiles = []\r
\r
    groups.forEach((group, groupIndex) => {\r
      const groupTotal = groupTotals.find(g => g.group === group)?.total || 0\r
      const groupWidth = (groupTotal / grandTotal) * IW\r
      const groupStartX = currentX\r
\r
      let currentY = IH\r
      const groupData = data.filter(d => d.group === group)\r
      \r
      groupData.forEach((d, catIndex) => {\r
        const tileHeight = (d.value / groupTotal) * IH\r
        tiles.push({\r
          group,\r
          category: d.category,\r
          value: d.value,\r
          x: groupStartX,\r
          y: currentY - tileHeight,\r
          width: groupWidth,\r
          height: tileHeight,\r
          colorIndex: categories.indexOf(d.category)\r
        })\r
        currentY -= tileHeight\r
      })\r
\r
      currentX += groupWidth\r
    })\r
\r
    // Draw tiles\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('rect')\r
      .data(tiles)\r
      .join('rect')\r
      .attr('x', d => d.x)\r
      .attr('y', d => d.y)\r
      .attr('width', d => d.width - 1)\r
      .attr('height', d => d.height - 1)\r
      .attr('fill', (d, i) => colors[d.colorIndex % colors.length])\r
      .attr('fill-opacity', 0.8)\r
      .attr('stroke', 'white')\r
      .attr('stroke-width', 1)\r
\r
    // Add value labels for larger tiles\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('text')\r
      .data(tiles.filter(d => d.width > 20 && d.height > 15))\r
      .join('text')\r
      .attr('x', d => d.x + d.width / 2)\r
      .attr('y', d => d.y + d.height / 2 + 4)\r
      .text(d => d.value)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 'bold')\r
\r
    // X axis (groups)\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .selectAll('text')\r
      .data(groupTotals)\r
      .join('text')\r
      .attr('x', d => (groups.indexOf(d.group) * IW / groups.length) + (IW / groups.length) / 2)\r
      .attr('y', 15)\r
      .text(d => \`\${d.group} (\${d.total})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
\r
    // Y axis (categories - as legend on right)\r
    const legendY = M.top\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW + 20},\${legendY})\`)\r
      .selectAll('g')\r
      .data(categories)\r
      .join('g')\r
      .attr('transform', (d, i) => \`translate(0,\${i * 25})\`)\r
      .each(function(d, i) {\r
        const catTotal = categoryTotals.find(c => c.category === d)?.total || 0\r
        d3.select(this)\r
          .append('rect')\r
          .attr('width', 15)\r
          .attr('height', 15)\r
          .attr('fill', colors[i % colors.length])\r
          .attr('fill-opacity', 0.8)\r
          .attr('stroke', 'white')\r
          .attr('stroke-width', 1)\r
        \r
        d3.select(this)\r
          .append('text')\r
          .attr('x', 20)\r
          .attr('y', 12)\r
          .text(\`\${d} (\${catTotal})\`)\r
          .attr('fill', 'var(--text-secondary)')\r
          .attr('font-size', '11px')\r
      })\r
\r
    // Add title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Mosaic Plot - Categorical Relationships')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};