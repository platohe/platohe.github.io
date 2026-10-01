var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'yield-curve',\r
  title: 'Yield Curve',\r
  desc: 'Yield Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'YieldCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","yield-curve"],\r
}\r
\r
export default function YieldCurve({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [animated, setAnimated] = useState(options.animated !== false)\r
\r
  const DEFAULT_DATA = [{"tenor":"1M","yield":4.25,"label":"1 Mo"},{"tenor":"3M","yield":4.5,"label":"3 Mo"},{"tenor":"6M","yield":4.75,"label":"6 Mo"},{"tenor":"1Y","yield":4.6,"label":"1 Yr"},{"tenor":"2Y","yield":4.35,"label":"2 Yr"},{"tenor":"3Y","yield":4.2,"label":"3 Yr"},{"tenor":"5Y","yield":4.05,"label":"5 Yr"},{"tenor":"7Y","yield":4.1,"label":"7 Yr"},{"tenor":"10Y","yield":4.25,"label":"10 Yr"},{"tenor":"20Y","yield":4.45,"label":"20 Yr"},{"tenor":"30Y","yield":4.5,"label":"30 Yr"}]\r
\r
  // Historical curves for animation\r
  const HISTORICAL_CURVES = [\r
    DEFAULT_DATA,\r
    DEFAULT_DATA.map(d => ({ ...d, yield: d.yield + (Math.random() - 0.5) * 0.3 })),\r
    DEFAULT_DATA.map(d => ({ ...d, yield: d.yield + (Math.random() - 0.5) * 0.3 })),\r
    DEFAULT_DATA.map(d => ({ ...d, yield: d.yield + (Math.random() - 0.5) * 0.3 })),\r
    DEFAULT_DATA.map(d => ({ ...d, yield: d.yield + (Math.random() - 0.5) * 0.3 })),\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    // Parse tenors to numeric values for x-axis\r
    const tenorOrder = ['1M', '3M', '6M', '1Y', '2Y', '3Y', '5Y', '7Y', '10Y', '20Y', '30Y']\r
    const tenorValues = data.map(d => tenorOrder.indexOf(d.tenor))\r
    \r
    const x = d3.scaleLinear()\r
      .domain([0, tenorValues.length - 1])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([d3.min(data, d => d.yield) - 0.2, d3.max(data, d => d.yield) + 0.2])\r
      .range([IH, 0])\r
      .nice()\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickValues(tenorValues).tickFormat((d, i) => data[i]?.label || '').tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // X axis labels (tenors)\r
    g.selectAll('.tenor-label')\r
      .data(data)\r
      .enter()\r
      .append('text')\r
      .attr('class', 'tenor-label')\r
      .attr('x', (d, i) => x(i))\r
      .attr('y', IH + 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(d => d.label)\r
\r
    // Yield curve line\r
    const line = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => y(d.yield))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    // Area under curve\r
    const area = d3.area()\r
      .x((d, i) => x(i))\r
      .y0(IH)\r
      .y1(d => y(d.yield))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    if (animated) {\r
      // Animated path\r
      const path = g.append('path')\r
        .datum(data)\r
        .attr('d', area)\r
        .attr('fill', 'url(#yieldGrad)')\r
        .attr('opacity', 0.3)\r
\r
      const linePath = g.append('path')\r
        .datum(data)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', 3)\r
        .attr('stroke-linecap', 'round')\r
        .attr('stroke-linejoin', 'round')\r
\r
      // Animate line drawing\r
      const domLine = linePath.node()\r
      if (typeof domLine.getTotalLength === 'function') {\r
        const totalLength = domLine.getTotalLength()\r
        linePath\r
        .attr('stroke-dasharray', totalLength + ' ' + totalLength)\r
        .attr('stroke-dashoffset', totalLength)\r
        .transition()\r
        .duration(1500)\r
        .ease(d3.easeCubic)\r
        .attr('stroke-dashoffset', 0)\r
      }\r
    } else {\r
      // Static curve\r
      g.append('path')\r
        .datum(data)\r
        .attr('d', area)\r
        .attr('fill', 'url(#yieldGrad)')\r
        .attr('opacity', 0.3)\r
\r
      g.append('path')\r
        .datum(data)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', 3)\r
        .attr('stroke-linecap', 'round')\r
        .attr('stroke-linejoin', 'round')\r
    }\r
\r
    // Data points\r
    g.selectAll('.yield-point')\r
      .data(data)\r
      .enter()\r
      .append('circle')\r
      .attr('class', 'yield-point')\r
      .attr('cx', (d, i) => x(i))\r
      .attr('cy', d => y(d.yield))\r
      .attr('r', 6)\r
      .attr('fill', colors[0])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .on('mouseover', function(event, d) {\r
        d3.select(this).attr('r', 9).attr('fill', colors[2])\r
        showTooltip(event, d)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this).attr('r', 6).attr('fill', colors[0])\r
        hideTooltip()\r
      })\r
\r
    // Gradient definition\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'yieldGrad').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', colors[0]).attr('stop-opacity', 0.4)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', colors[0]).attr('stop-opacity', 0)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Yield Curve')\r
\r
    // Y-axis label\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 500)\r
      .text('Yield (%)')\r
\r
    // X-axis label\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 500)\r
      .text('Maturity')\r
\r
    // Legend / Key rates table\r
    const keyRates = ['3M', '2Y', '5Y', '10Y', '30Y']\r
    const table = g.append('g').attr('transform', \`translate(\${IW - 120}, 20)\`)\r
    \r
    table.append('text')\r
      .attr('x', 0).attr('y', 0)\r
      .attr('font-size', '10px').attr('fill', 'var(--text)').attr('font-weight', 600)\r
      .text('Key Rates')\r
\r
    keyRates.forEach((tenor, i) => {\r
      const point = data.find(d => d.tenor === tenor)\r
      if (!point) return\r
      const row = table.append('g').attr('transform', \`translate(0, \${(i + 1) * 18})\`)\r
      row.append('text')\r
        .attr('x', 0).attr('y', 10)\r
        .attr('font-size', '9px').attr('fill', 'var(--text-secondary)')\r
        .text(tenor)\r
      row.append('text')\r
        .attr('x', 50).attr('y', 10)\r
        .attr('text-anchor', 'end')\r
        .attr('font-size', '9px').attr('fill', 'var(--text)').attr('font-weight', 600)\r
        .text(point.yield.toFixed(2) + '%')\r
    })\r
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
      tooltip.html(\`<strong>\${d.label}</strong><br/>Yield: \${d.yield.toFixed(2)}%\`)\r
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
  }, [customData, animated])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};