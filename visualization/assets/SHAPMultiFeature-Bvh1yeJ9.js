var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'shapmulti-feature',\r
  title: 'S H A P Multi Feature',\r
  desc: 'S H A P Multi Feature — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SHAPMultiFeature',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","s-h-a-p-multi-feature"],\r
}\r
\r
export default function SHAPMultiFeature({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"trainShap":[{"feature":"Age","shap":0.32},{"feature":"Income","shap":0.45},{"feature":"Score","shap":0.28},{"feature":"Tenure","shap":0.15}],"valShap":[{"feature":"Age","shap":0.29},{"feature":"Income","shap":0.41},{"feature":"Score","shap":0.31},{"feature":"Tenure","shap":0.18}]}\r
    const data = (customData && customData.trainShap && customData.valShap) ? customData : DEFAULT_DATA\r
    const features = data.trainShap.map(d => d.feature)\r
    const y = d3.scaleBand().domain(features).range([M.top, H - M.bottom]).padding(0.3)\r
    const x = d3.scaleLinear().domain([0, 0.6]).range([M.left, W - M.right])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    data.trainShap.forEach((d, i) => {\r
      const yPos = y(d.feature)\r
      const bw = y.bandwidth()\r
      g.append('rect').attr('x', x(0)).attr('y', yPos).attr('width', x(d.shap) - x(0)).attr('height', bw / 2 - 1).attr('fill', colors[0]).attr('opacity', 0.85)\r
      g.append('rect').attr('x', x(0)).attr('y', yPos + bw / 2 + 1).attr('width', x(data.valShap[i].shap) - x(0)).attr('height', bw / 2 - 1).attr('fill', colors[1]).attr('opacity', 0.85)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};