var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CashFlowDiagram: Income splitting into expense buckets.\r
const SOURCES = [["Salary",62],["Side Gig",23],["Interest",8]]\r
const SINKS = [["Rent",34],["Groceries",21],["Transport",12],["Leisure",14],["Invest",12]]\r
export const meta = {\r
  id: 'cash-flow-diagram',\r
  title: 'Cash Flow Diagram',\r
  desc: 'Cash Flow Diagram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CashFlowDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cash-flow-diagram"],\r
}\r
\r
export default function CashFlowDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { sources: SOURCES, sinks: SINKS }\r
    const data = (customData && customData.sources && customData.sinks) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const lx = 86, rx = 306\r
    const srcY = (i) => 74 + i * (110 / Math.max(data.sources.length - 1, 1))\r
    const snkY = (i) => 92 + i * (128 / Math.max(data.sinks.length - 1, 1))\r
    const totalSink = data.sinks.reduce((a, s) => a + s[1], 0)\r
    data.sources.forEach(([_nm, val], i) => {\r
      data.sinks.forEach(([_sn, sv], j) => {\r
        const share = sv / totalSink\r
        const w = Math.max(1.2, val * share * 0.24)\r
        const bend = (lx + rx) / 2 + (i - j) * 16\r
        g.append('path')\r
          .attr('d', 'M' + (lx + 68) + ' ' + srcY(i) + ' C' + bend + ' ' + srcY(i) + ' ' + bend + ' ' + snkY(j) + ' ' + (rx - 70) + ' ' + snkY(j))\r
          .attr('fill', 'none').attr('stroke', colors[(i + j) % colors.length])\r
          .attr('stroke-width', w).attr('stroke-opacity', 0.5)\r
          .attr('marker-end', 'url(#arrow-CashFlowDiagram)')\r
      })\r
    })\r
    g.append('defs').append('marker').attr('id', 'arrow-CashFlowDiagram')\r
      .attr('viewBox', '0 0 8 8').attr('refX', 7).attr('refY', 4)\r
      .attr('markerWidth', 5).attr('markerHeight', 5).attr('orient', 'auto')\r
      .append('path').attr('d', 'M0 0 L8 4 L0 8 z').attr('fill', 'var(--border)')\r
    data.sources.forEach(([nm, val], i) => {\r
      g.append('rect').attr('x', lx - 68).attr('y', srcY(i) - 11).attr('width', 68).attr('height', 22).attr('rx', 5)\r
        .attr('fill', colors[i % colors.length]).attr('fill-opacity', 0.9)\r
      g.append('text').attr('x', lx - 34).attr('y', srcY(i) + 3).attr('text-anchor', 'middle')\r
        .attr('font-size', '8px').attr('font-weight', 700).attr('fill', '#fff').text(nm)\r
      g.append('text').attr('x', lx + 4).attr('y', srcY(i) - 15)\r
        .attr('font-size', '7.5px').attr('fill', 'var(--text-secondary)').text(val + '/wk')\r
    })\r
    data.sinks.forEach(([nm, val], i) => {\r
      g.append('rect').attr('x', rx).attr('y', snkY(i) - 11).attr('width', 76).attr('height', 22).attr('rx', 5)\r
        .attr('fill', 'var(--bg)').attr('stroke', 'var(--border)')\r
      g.append('text').attr('x', rx + 38).attr('y', snkY(i) + 3).attr('text-anchor', 'middle')\r
        .attr('font-size', '7.5px').attr('fill', 'var(--text-secondary)').text(nm + ' · ' + val)\r
    })\r
    g.append('text').attr('x', lx).attr('y', 36).attr('text-anchor', 'middle')\r
      .attr('font-size', '9px').attr('font-weight', 700).attr('fill', 'var(--text-secondary)').text('Inflows')\r
    g.append('text').attr('x', rx + 38).attr('y', 36).attr('text-anchor', 'middle')\r
      .attr('font-size', '9px').attr('font-weight', 700).attr('fill', 'var(--text-secondary)').text('Expenses')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};