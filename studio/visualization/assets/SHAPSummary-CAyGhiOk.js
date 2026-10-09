var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'shapsummary',\r
  title: 'S H A P Summary',\r
  desc: 'S H A P Summary — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SHAPSummary',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","s-h-a-p-summary"],\r
}\r
\r
export default function SHAPSummary({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"feature":"Age","meanAbsShap":0.18,"shaps":[0.04,-0.021,0.141,0.068,-0.13,0.011,-0.091,0.05,0.146,-0.011,-0.1,0.153,0.098,-0.077,-0.121,0,0.075,0.044,-0.198,-0.012,0.135,-0.18,0.037,-0.187,-0.093,-0.175,-0.126,0.113,0.012,-0.189,-0.131,0.137,-0.005,0.124,-0.072,-0.02,-0.185,-0.179,0.023,0.039,-0.102,0.058,-0.116,-0.079,0.095,0.143,0.003,-0.118,-0.086,-0.083]},{"feature":"Income","meanAbsShap":0.22,"shaps":[-0.213,0.08,0.09,0.097,0.214,-0.206,0.222,-0.034,0.221,-0.181,-0.195,-0.242,-0.07,-0.009,0.056,0.2,-0.211,0.11,0.217,-0.111,0.103,-0.16,0.01,0.161,-0.19,0.248,0.031,0.208,-0.033,0.039,-0.082,0.048,-0.089,0.115,-0.102,-0.025,0.172,0.098,0.247,0.195,-0.034,0.023,-0.102,-0.2,0.098,-0.093,0.143,0.202,-0.203,-0.012]},{"feature":"CreditScore","meanAbsShap":0.15,"shaps":[0.097,-0.111,0.142,-0.096,0.063,0.06,-0.083,-0.026,-0.101,0.046,-0.049,-0.088,0.039,0.116,-0.052,0.088,-0.032,-0.111,0.109,-0.039,-0.147,0.071,0.041,0.113,0.122,-0.087,0.031,-0.003,-0.095,-0.136,0.062,0.063,-0.063,-0.067,-0.049,-0.141,-0.084,0.148,0.022,0.147,-0.101,-0.099,0.018,-0.062,-0.032,-0.02,-0.024,0.056,-0.03,-0.049]},{"feature":"DebtRatio","meanAbsShap":0.12,"shaps":[0.099,-0.043,-0.001,0.028,0.012,0.022,-0.066,-0.044,-0.05,-0.045,0.042,-0.07,-0.083,0.049,-0.046,-0.094,-0.047,-0.114,0.019,-0.073,-0.005,-0.03,0.053,0.103,0.078,-0.015,-0.086,0.092,0.006,0.085,0.099,-0.012,-0.088,0.03,0.077,-0.073,-0.028,0.011,0.121,-0.002,0.09,0.086,0.061,-0.112,-0.108,-0.083,0.002,0.044,0.065,0.123]},{"feature":"EmploymentYrs","meanAbsShap":0.08,"shaps":[0.063,0.026,0.067,0.071,0.02,-0.03,-0.011,0.076,0.036,-0.03,0.088,0.025,-0.034,0.069,-0.07,-0.027,-0.096,-0.083,0.03,0.045,0.091,0.076,-0.007,0.041,-0.071,-0.045,-0.072,-0.09,-0.042,-0.012,0.014,0.043,0.059,0.057,-0.061,0.033,0.004,-0.011,-0.006,-0.008,-0.015,-0.034,-0.038,-0.07,0.001,-0.047,0.006,0.01,0.029,-0.013]},{"feature":"LoanAmount","meanAbsShap":0.06,"shaps":[-0.055,-0.074,-0.053,0.066,-0.065,0.056,-0.01,0,-0.06,0.048,-0.066,-0.019,-0.041,0.03,0.01,-0.061,0.07,0.038,0.024,0.044,0.007,0.046,0.004,-0.048,-0.063,-0.061,-0.066,-0.036,0.026,0.025,0.009,0.071,-0.072,-0.015,-0.024,-0.032,0.05,0.006,-0.044,0.067,0.068,-0.035,0.003,0.054,0.065,0.028,0.01,0.046,-0.028,-0.001]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && Array.isArray(customData[0]?.shaps)) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => b.meanAbsShap - a.meanAbsShap)\r
\r
    const y = d3.scaleBand().domain(sorted.map(d => d.feature)).range([0, IH]).padding(0.4)\r
    const x = d3.scaleLinear().domain([-0.3, 0.3]).range([0, IW])\r
    const barH = y.bandwidth()\r
\r
    const colorScale = d3.scaleLinear().domain([-0.3, 0, 0.3]).range([colors[3], 'var(--panel-bg)', colors[0]])\r
\r
    sorted.forEach((d, i) => {\r
      const cy = M.top + y(d.feature) + barH / 2\r
\r
      // Mean absolute (importance bar)\r
      svg.append('rect').attr('x', x(0)).attr('y', cy - barH * 0.35)\r
        .attr('width', Math.abs(x(d.meanAbsShap) - x(0))).attr('height', barH * 0.7)\r
        .attr('fill', d.meanAbsShap > 0 ? colors[0] : colors[3]).attr('opacity', 0.5).attr('rx', 2)\r
\r
      // Beeswarm dots\r
      d.shaps.forEach((s, si) => {\r
        const jitter = (si / d.shaps.length - 0.5) * barH * 0.6\r
        svg.append('circle').attr('cx', x(s)).attr('cy', cy + jitter)\r
          .attr('r', 2.5).attr('fill', s >= 0 ? colors[0] : colors[3]).attr('opacity', 0.6)\r
      })\r
    })\r
\r
    // Zero line\r
    svg.append('line').attr('x1', x(0)).attr('x2', x(0)).attr('y1', M.top).attr('y2', M.top + IH)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('SHAP Value')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('SHAP Summary (Beeswarm)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};