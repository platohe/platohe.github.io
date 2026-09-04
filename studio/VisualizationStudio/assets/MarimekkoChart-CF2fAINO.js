var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'marimekko-chart',\r
  title: 'Marimekko Chart',\r
  desc: 'Marimekko Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MarimekkoChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","marimekko-chart"],\r
}\r
\r
export default function MarimekkoChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Marimekko chart data\r
    const DEFAULT_DATA = [{"category":"Segment A","subcategories":[{"name":"A1","value":20},{"name":"A2","value":30},{"name":"A3","value":25}]},{"category":"Segment B","subcategories":[{"name":"B1","value":15},{"name":"B2","value":35},{"name":"B3","value":20}]},{"category":"Segment C","subcategories":[{"name":"C1","value":25},{"name":"C2","value":20},{"name":"C3","value":30}]}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && Array.isArray(customData[0]?.subcategories)) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    // Calculate segment widths (total values)\r
    const segmentTotals = data.map(d => ({\r
      category: d.category,\r
      total: d3.sum(d.subcategories, s => s.value),\r
      subcategories: d.subcategories\r
    }))\r
\r
    const maxTotal = d3.max(segmentTotals, d => d.total)\r
\r
    // X scale for segments\r
    const x = d3.scaleLinear()\r
      .domain([0, d3.sum(segmentTotals, d => d.total)])\r
      .range([0, width])\r
\r
    // Y scale for subcategories\r
    const y = d3.scaleLinear()\r
      .domain([0, maxTotal])\r
      .range([height, 0])\r
\r
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4']\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    let xPosition = 0\r
\r
    segmentTotals.forEach((segment, segmentIndex) => {\r
      const segmentWidth = x(segment.total)\r
      let yPosition = 0\r
\r
      segment.subcategories.forEach((sub, subIndex) => {\r
        const subHeight = y(0) - y(sub.value)\r
\r
        g.append('rect')\r
          .attr('x', xPosition)\r
          .attr('y', yPosition)\r
          .attr('width', segmentWidth)\r
          .attr('height', subHeight)\r
          .attr('fill', colors[subIndex % colors.length])\r
          .attr('opacity', 0.8)\r
          .attr('stroke', 'var(--bg)')\r
          .attr('stroke-width', 1)\r
          .attr('cursor', 'pointer')\r
          .on('mouseover', function() {\r
            d3.select(this)\r
              .transition()\r
              .duration(200)\r
              .attr('opacity', 1)\r
          })\r
          .on('mouseout', function() {\r
            d3.select(this)\r
              .transition()\r
              .duration(200)\r
              .attr('opacity', 0.8)\r
          })\r
\r
        // Add subcategory label\r
        if (subHeight > 15) {\r
          g.append('text')\r
            .attr('x', xPosition + segmentWidth / 2)\r
            .attr('y', yPosition + subHeight / 2)\r
            .attr('text-anchor', 'middle')\r
            .attr('dominant-baseline', 'middle')\r
            .attr('fill', 'white')\r
            .attr('font-size', '10px')\r
            .text(sub.name)\r
        }\r
\r
        yPosition += subHeight\r
      })\r
\r
      // Add segment label\r
      g.append('text')\r
        .attr('x', xPosition + segmentWidth / 2)\r
        .attr('y', height + 20)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '11px')\r
        .text(segment.category)\r
\r
      xPosition += segmentWidth\r
    })\r
\r
    // Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Marimekko Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};