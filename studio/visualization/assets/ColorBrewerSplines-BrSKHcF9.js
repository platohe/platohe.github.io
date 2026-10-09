var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'color-brewer-splines',\r
  title: 'Color Brewer Splines',\r
  desc: 'Color Brewer Splines — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ColorBrewerSplines',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","color-brewer-splines"],\r
}\r
\r
export default function ColorBrewerSplines({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // ColorBrewer-like color schemes\r
    const colorSchemes = [\r
      { name: 'Blues', colors: ['#deebf7', '#9ecae1', '#3182bd', '#08519c'] },\r
      { name: 'Reds', colors: ['#fee5d9', '#fcae91', '#fb6a4a', '#cb181d'] },\r
      { name: 'Greens', colors: ['#edf8e9', '#bae4b3', '#74c476', '#238b45'] },\r
      { name: 'Purples', colors: ['#f2f0f7', '#dadaeb', '#bcbddc', '#756bb1'] },\r
      { name: 'Oranges', colors: ['#feedde', '#fdbe85', '#fd8d3c', '#d94701'] },\r
    ]\r
\r
    const margin = { top: 40, right: 20, bottom: 40, left: 100 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const y = d3.scaleBand()\r
      .domain(colorSchemes.map(s => s.name))\r
      .range([0, height])\r
      .padding(0.3)\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, 100])\r
      .range([0, width])\r
\r
    // Draw color gradient bars for each scheme\r
    colorSchemes.forEach((scheme, i) => {\r
      const yPos = y(scheme.name)\r
      const barHeight = y.bandwidth()\r
\r
      // Create gradient for this scheme\r
      const gradientId = \`gradient-\${i}\`\r
      const gradient = svg.append('defs')\r
        .append('linearGradient')\r
        .attr('id', gradientId)\r
        .attr('x1', '0%')\r
        .attr('x2', '100%')\r
        .attr('y1', '0%')\r
        .attr('y2', '0%')\r
\r
      scheme.colors.forEach((color, j) => {\r
        const offset = (j / (scheme.colors.length - 1)) * 100\r
        gradient.append('stop')\r
          .attr('offset', \`\${offset}%\`)\r
          .attr('stop-color', color)\r
      })\r
\r
      // Draw gradient bar\r
      g.append('rect')\r
        .attr('x', 0)\r
        .attr('y', yPos)\r
        .attr('width', width)\r
        .attr('height', barHeight)\r
        .attr('fill', \`url(#\${gradientId})\`)\r
        .attr('rx', 4)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('height', barHeight + 4)\r
            .attr('y', yPos - 2)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('height', barHeight)\r
            .attr('y', yPos)\r
        })\r
\r
      // Draw color points (interpolation visualization)\r
      scheme.colors.forEach((color, j) => {\r
        const xPos = (j / (scheme.colors.length - 1)) * width\r
        g.append('circle')\r
          .attr('cx', xPos)\r
          .attr('cy', yPos + barHeight / 2)\r
          .attr('r', 6)\r
          .attr('fill', color)\r
          .attr('stroke', 'white')\r
          .attr('stroke-width', 2)\r
          .attr('cursor', 'pointer')\r
          .on('mouseover', function() {\r
            d3.select(this)\r
              .transition()\r
              .duration(200)\r
              .attr('r', 9)\r
          })\r
          .on('mouseout', function() {\r
            d3.select(this)\r
              .transition()\r
              .duration(200)\r
              .attr('r', 6)\r
          })\r
      })\r
\r
      // Add scheme name\r
      g.append('text')\r
        .attr('x', -10)\r
        .attr('y', yPos + barHeight / 2)\r
        .attr('text-anchor', 'end')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 500)\r
        .text(scheme.name)\r
    })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // X axis label\r
    g.append('text')\r
      .attr('x', width / 2)\r
      .attr('y', height + 25)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Interpolation Scale')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 25)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('ColorBrewer Splines')\r
\r
    // Description\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 295)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '9px')\r
      .text('Sequential color scale interpolation')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};