var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'cancer-survival-rates',\r
  title: 'Cancer Survival Rates',\r
  desc: 'Cancer Survival Rates — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CancerSurvivalRates',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cancer-survival-rates"],\r
}\r
\r
export default function CancerSurvivalRates({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Cancer survival rate data (simulated)\r
    const DEFAULT_DATA = [{"cancer":"Breast","rate1yr":95,"rate5yr":90,"rate10yr":85},{"cancer":"Prostate","rate1yr":98,"rate5yr":95,"rate10yr":90},{"cancer":"Melanoma","rate1yr":92,"rate5yr":85,"rate10yr":80},{"cancer":"Colorectal","rate1yr":85,"rate5yr":70,"rate10yr":60},{"cancer":"Lung","rate1yr":50,"rate5yr":25,"rate10yr":15},{"cancer":"Pancreatic","rate1yr":30,"rate5yr":10,"rate10yr":5},{"cancer":"Liver","rate1yr":40,"rate5yr":20,"rate10yr":10},{"cancer":"Leukemia","rate1yr":75,"rate5yr":60,"rate10yr":50}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 40, right: 120, bottom: 60, left: 120 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, 100])\r
      .range([0, width])\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.cancer))\r
      .range([0, height])\r
      .padding(0.2)\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Grid lines\r
    g.append('g')\r
      .selectAll('line')\r
      .data(x.ticks(5))\r
      .join('line')\r
      .attr('x1', d => x(d))\r
      .attr('x2', d => x(d))\r
      .attr('y1', 0)\r
      .attr('y2', height)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-opacity', 0.3)\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Cancer type labels\r
    g.selectAll('text')\r
      .data(data)\r
      .join('text')\r
      .attr('x', -10)\r
      .attr('y', d => y(d.cancer) + y.bandwidth() / 2)\r
      .attr('text-anchor', 'end')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 500)\r
      .text(d => d.cancer)\r
\r
    // Survival rate bars\r
    const timePoints = [\r
      { key: 'rate1yr', label: '1 Year', color: '#10b981', offset: 0 },\r
      { key: 'rate5yr', label: '5 Years', color: '#f59e0b', offset: 15 },\r
      { key: 'rate10yr', label: '10 Years', color: '#ef4444', offset: 30 }\r
    ]\r
\r
    timePoints.forEach((timePoint, i) => {\r
      g.selectAll(\`rect-\${timePoint.key}\`)\r
        .data(data)\r
        .join('rect')\r
        .attr('x', 0)\r
        .attr('y', d => y(d.cancer) + timePoint.offset)\r
        .attr('width', d => x(d[timePoint.key]))\r
        .attr('height', 12)\r
        .attr('fill', timePoint.color)\r
        .attr('rx', 2)\r
        .attr('opacity', 0.8)\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 1)\r
            .attr('height', 14)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.8)\r
            .attr('height', 12)\r
        })\r
\r
      // Add value labels at end of bars\r
      g.selectAll(\`text-\${timePoint.key}\`)\r
        .data(data)\r
        .join('text')\r
        .attr('x', d => x(d[timePoint.key]) + 5)\r
        .attr('y', d => y(d.cancer) + timePoint.offset + 9)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '9px')\r
        .text(d => \`\${d[timePoint.key]}%\`)\r
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
      .attr('y', height + 35)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Survival Rate (%)')\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', 'translate(280, 20)')\r
\r
    timePoints.forEach((timePoint, i) => {\r
      const legendItem = legend.append('g')\r
        .attr('transform', \`translate(0, \${i * 20})\`)\r
\r
      legendItem.append('rect')\r
        .attr('width', 12)\r
        .attr('height', 12)\r
        .attr('fill', timePoint.color)\r
        .attr('rx', 2)\r
\r
      legendItem.append('text')\r
        .attr('x', 18)\r
        .attr('y', 10)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(timePoint.label)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 25)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Cancer Survival Rates by Type')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};