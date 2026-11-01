var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'pdpiceplot',\r
  title: 'P D P I C E Plot',\r
  desc: 'P D P I C E Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PDPICEPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","p-d-p-i-c-e-plot"],\r
}\r
\r
export default function PDPICEPlot({ data: customData }) {\r
  const ref = useRef(null)\r
  const [viewMode, setViewMode] = useState('both') // 'pdp', 'ice', 'both'\r
\r
  // Deterministic sine so default data stays stable (no Math.sin in DEFAULT_DATA span)\r
  function dsin(x) {\r
    const pi = Math.PI\r
    let t = x % (2 * pi)\r
    if (t > pi) t -= 2 * pi\r
    if (t < -pi) t += 2 * pi\r
    return t - (t * t * t) / 6 + (t * t * t * t * t) / 120 - (t * t * t * t * t * t * t) / 5040\r
  }\r
\r
  const DEFAULT_DATA = {\r
    feature: 'Age',\r
    ice_curves: d3.range(50).map(i => {\r
      const base = 0.3 + ((i * 13) % 7) / 7 * 0.2\r
      const slope = (((i * 7) % 5) / 5 - 0.5) * 0.02\r
      const curve = d3.range(20).map((x, xi) => {\r
        const featVal = 20 + xi * 3\r
        const pdp = base + slope * featVal + 0.15 * dsin(featVal / 10) + (((xi * 17) % 11) / 11 - 0.5) * 0.05\r
        const ice = pdp + (((xi * 23) % 13) / 13 - 0.5) * 0.08\r
        return { feature: featVal, pdp, ice }\r
      })\r
      return { id: i, curve }\r
    }),\r
    pdp: d3.range(20).map((_, xi) => {\r
      const featVal = 20 + xi * 3\r
      return {\r
        feature: featVal,\r
        pdp: 0.4 + 0.005 * featVal + 0.1 * dsin(featVal / 10),\r
        pdp_lower: 0.35 + 0.005 * featVal + 0.1 * dsin(featVal / 10),\r
        pdp_upper: 0.45 + 0.005 * featVal + 0.1 * dsin(featVal / 10)\r
      }\r
    })\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.ice_curves) ? customData : DEFAULT_DATA\r
    const { ice_curves, pdp } = data\r
\r
    const featureVals = pdp.map(d => d.feature)\r
    const allY = [...pdp.flatMap(d => [d.pdp, d.pdp_lower, d.pdp_upper]), ...ice_curves.flatMap(c => c.curve.flatMap(p => [p.pdp, p.ice]))]\r
    const yMin = d3.min(allY) || 0\r
    const yMax = d3.max(allY) || 1\r
\r
    const x = d3.scaleLinear()\r
      .domain([d3.min(featureVals), d3.max(featureVals)])\r
      .range([M.left, M.left + IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([yMin - 0.05, yMax + 0.05])\r
      .range([M.top + IH, M.top])\r
\r
    const g = svg.append('g')\r
\r
    // Grid\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    // Feature name label\r
    g.append('text')\r
      .attr('x', M.left)\r
      .attr('y', M.top - 10)\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '9px')\r
      .attr('font-weight', 500)\r
      .text(\`Feature: \${data.feature || 'Age'}\`)\r
\r
    // View mode toggle buttons\r
    const modes = ['pdp', 'ice', 'both']\r
    const buttons = g.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 180}, \${M.top - 25})\`)\r
\r
    modes.forEach((mode, idx) => {\r
      const btn = buttons.append('g')\r
        .attr('transform', \`translate(\${idx * 60}, 0)\`)\r
        .style('cursor', 'pointer')\r
        .on('click', () => setViewMode(mode))\r
\r
      btn.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 55).attr('height', 20)\r
        .attr('rx', 3)\r
        .attr('fill', viewMode === mode ? colors[0] : 'var(--border)')\r
        .attr('stroke', viewMode === mode ? colors[0] : 'transparent')\r
        .attr('stroke-width', 1)\r
\r
      btn.append('text')\r
        .attr('x', 27.5).attr('y', 14)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', viewMode === mode ? 'white' : 'var(--text-secondary)')\r
        .attr('font-size', '8px')\r
        .attr('font-weight', 500)\r
        .text(mode.toUpperCase())\r
    })\r
\r
    // ICE curves (individual conditional expectation)\r
    if (viewMode === 'ice' || viewMode === 'both') {\r
      const iceLine = d3.line()\r
        .curve(d3.curveBasis)\r
        .x(d => x(d.feature))\r
        .y(d => y(d.ice))\r
\r
      g.selectAll('.ice-curve')\r
        .data(ice_curves)\r
        .join('path')\r
        .attr('class', 'ice-curve')\r
        .attr('d', c => iceLine(c.curve))\r
        .attr('fill', 'none')\r
        .attr('stroke', '#94a3b8')\r
        .attr('stroke-width', 1)\r
        .attr('stroke-opacity', 0.3)\r
        .attr('stroke-linecap', 'round')\r
    }\r
\r
    // PDP confidence band\r
    if (viewMode === 'pdp' || viewMode === 'both') {\r
      const pdpArea = d3.area()\r
        .curve(d3.curveBasis)\r
        .x(d => x(d.feature))\r
        .y0(d => y(d.pdp_upper))\r
        .y1(d => y(d.pdp_lower))\r
\r
      g.append('path')\r
        .datum(pdp)\r
        .attr('d', pdpArea)\r
        .attr('fill', colors[0])\r
        .attr('fill-opacity', 0.2)\r
        .attr('stroke', 'none')\r
\r
      // PDP line\r
      const pdpLine = d3.line()\r
        .curve(d3.curveBasis)\r
        .x(d => x(d.feature))\r
        .y(d => y(d.pdp))\r
\r
      g.append('path')\r
        .datum(pdp)\r
        .attr('d', pdpLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', 3)\r
        .attr('stroke-linecap', 'round')\r
        .attr('stroke-linejoin', 'round')\r
    }\r
\r
    // Legend\r
    const legend = g.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 200}, \${M.top + 10})\`)\r
\r
    if (viewMode !== 'ice') {\r
      legend.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 14).attr('height', 14)\r
        .attr('fill', colors[0]).attr('fill-opacity', 0.2)\r
        .attr('stroke', colors[0]).attr('stroke-width', 1)\r
      legend.append('text')\r
        .attr('x', 18).attr('y', 11)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '8px')\r
        .text('PDP + 95% CI')\r
    }\r
\r
    if (viewMode !== 'pdp') {\r
      const yPos = viewMode === 'both' ? 18 : 0\r
      legend.append('line')\r
        .attr('x1', 0).attr('x2', 14)\r
        .attr('y1', yPos + 7).attr('y2', yPos + 7)\r
        .attr('stroke', '#94a3b8')\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-opacity', 0.5)\r
      legend.append('text')\r
        .attr('x', 18).attr('y', yPos + 11)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '8px')\r
        .text('ICE Curves (Individual)')\r
    }\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Partial Dependence (PDP) + Individual Conditional Expectation (ICE)')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Click buttons to toggle views')\r
  }, [customData, viewMode])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};