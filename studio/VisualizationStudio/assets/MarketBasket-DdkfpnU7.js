var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'market-basket',\r
  title: 'Market Basket',\r
  desc: 'Market Basket — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MarketBasket',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","market-basket"],\r
}\r
\r
export default function MarketBasket({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"source":"Bread","target":"Butter","value":45},{"source":"Bread","target":"Milk","value":38},{"source":"Bread","target":"Eggs","value":25},{"source":"Milk","target":"Eggs","value":52},{"source":"Milk","target":"Bread","value":38},{"source":"Butter","target":"Bread","value":45},{"source":"Cheese","target":"Crackers","value":30},{"source":"Cheese","target":"Wine","value":15},{"source":"Crackers","target":"Cheese","value":30},{"source":"Wine","target":"Cheese","value":15}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const allNodes = [...new Set(data.flatMap(d => [d.source, d.target]))]\r
    const n = allNodes.length\r
\r
    const x = d3.scaleBand().domain(allNodes).range([0, IW]).padding(0.3)\r
    const y = d3.scaleBand().domain(allNodes).range([0, IH]).padding(0.3)\r
    const maxVal = d3.max(data, d => d.value) || 1\r
    const thickness = d3.scaleLinear().domain([0, maxVal]).range([2, 12])\r
    const color = d3.scaleSequential(d3.interpolateOranges).domain([0, maxVal])\r
\r
    // Background grid\r
    allNodes.forEach(node => {\r
      svg.append('rect').attr('x', x(node)).attr('y', y(node)).attr('width', x.bandwidth()).attr('height', y.bandwidth())\r
        .attr('fill', 'var(--panel-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5).attr('rx', 2)\r
\r
      svg.append('text').attr('x', x(node) + x.bandwidth() / 2).attr('y', y(node) + y.bandwidth() / 2 + 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(node)\r
    })\r
\r
    // Associations (diagonal highlight)\r
    data.forEach(d => {\r
      const sx = x(d.source) + x.bandwidth() / 2\r
      const sy = y(d.target) + y.bandwidth() / 2\r
      const tx = x(d.target) + x.bandwidth() / 2\r
      const ty = y(d.source) + y.bandwidth() / 2\r
\r
      // Curved arc\r
      const midX = (sx + tx) / 2 - (ty - sy) * 0.2\r
      const midY = (sy + ty) / 2 + (tx - sx) * 0.2\r
      const path = \`M\${sx},\${sy} Q\${midX},\${midY} \${tx},\${ty}\`\r
      svg.append('path').attr('d', path)\r
        .attr('fill', 'none').attr('stroke', color(d.value)).attr('stroke-width', thickness(d.value))\r
        .attr('opacity', 0.6)\r
\r
      // Node values\r
      svg.append('text').attr('x', sx + 8).attr('y', sy + 4)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text(d.value)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Market Basket Analysis')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};