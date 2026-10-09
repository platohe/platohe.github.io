var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'alluvial-flow',\r
  title: 'Alluvial Flow',\r
  desc: 'Alluvial Flow — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'AlluvialFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["networks","alluvial-flow"],\r
}\r
\r
export default function AlluvialFlow({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"step1":"Organic Search","step2":"Desktop","step3":"Purchased","value":450},{"step1":"Organic Search","step2":"Mobile","step3":"Bounced","value":320},{"step1":"Paid Ads","step2":"Desktop","step3":"Purchased","value":280},{"step1":"Paid Ads","step2":"Mobile","step3":"Purchased","value":350},{"step1":"Social","step2":"Mobile","step3":"Bounced","value":410},{"step1":"Social","step2":"Desktop","step3":"Bounced","value":160}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const margin = { top: 35, right: 35, bottom: 25, left: 35 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const stages = ['step1', 'step2', 'step3']\r
    const stageLabels = ['Traffic Source', 'Device Platform', 'Outcome']\r
    const stageX = d3.scalePoint()\r
      .domain(stages)\r
      .range([0, plotW])\r
      .padding(0.1)\r
\r
    const stageColors = {\r
      'Organic Search': '#10b981',\r
      'Paid Ads': '#f59e0b',\r
      'Social': '#ec4899',\r
      'Desktop': '#6366f1',\r
      'Mobile': '#06b6d4',\r
      'Purchased': '#3b82f6',\r
      'Bounced': '#94a3b8',\r
    }\r
\r
    const totalVal = d3.sum(data, d => d.value || 0) || 1\r
    const nodeWidth = 14\r
\r
    // Calculate node positions for each stage\r
    const stageNodes = {}\r
    stages.forEach(s => {\r
      const grouped = d3.rollup(data, v => d3.sum(v, d => d.value || 0), d => d[s])\r
      const entries = Array.from(grouped, ([key, val]) => ({ key, val }))\r
      let currentY = 0\r
      stageNodes[s] = entries.map(d => {\r
        const hNode = (d.val / totalVal) * (plotH - (entries.length - 1) * 8)\r
        const node = { ...d, y: currentY, h: hNode }\r
        currentY += hNode + 8\r
        return node\r
      })\r
    })\r
\r
    // Draw Alluvial Stream Ribbons between Stage 1 -> Stage 2 and Stage 2 -> Stage 3\r
    function drawRibbons(s1, s2) {\r
      const links = []\r
      const s1Offsets = {}\r
      const s2Offsets = {}\r
      stageNodes[s1].forEach(n => s1Offsets[n.key] = n.y)\r
      stageNodes[s2].forEach(n => s2Offsets[n.key] = n.y)\r
\r
      data.forEach(d => {\r
        const k1 = d[s1]\r
        const k2 = d[s2]\r
        const hRibbon = (d.value / totalVal) * (plotH - (stageNodes[s1].length - 1) * 8)\r
\r
        const y0 = s1Offsets[k1]\r
        s1Offsets[k1] += hRibbon\r
        const y1 = s2Offsets[k2]\r
        s2Offsets[k2] += hRibbon\r
\r
        const x0 = stageX(s1) + nodeWidth\r
        const x1 = stageX(s2)\r
\r
        const pathData = d3.linkHorizontal()({\r
          source: [x0, y0 + hRibbon / 2],\r
          target: [x1, y1 + hRibbon / 2],\r
        })\r
\r
        g.append('path')\r
          .attr('d', pathData)\r
          .attr('fill', 'none')\r
          .attr('stroke', stageColors[k1] || '#6366f1')\r
          .attr('stroke-width', Math.max(1, hRibbon))\r
          .attr('stroke-opacity', 0.45)\r
      })\r
    }\r
\r
    drawRibbons('step1', 'step2')\r
    drawRibbons('step2', 'step3')\r
\r
    // Draw Stage Node Bars\r
    stages.forEach((s, sIdx) => {\r
      const nodes = stageNodes[s]\r
      const xPos = stageX(s)\r
\r
      // Column Header\r
      g.append('text')\r
        .attr('x', xPos + nodeWidth / 2)\r
        .attr('y', -10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '600')\r
        .text(stageLabels[sIdx])\r
\r
      nodes.forEach(node => {\r
        g.append('rect')\r
          .attr('x', xPos)\r
          .attr('y', node.y)\r
          .attr('width', nodeWidth)\r
          .attr('height', Math.max(2, node.h))\r
          .attr('fill', stageColors[node.key] || '#6366f1')\r
          .attr('rx', 2.5)\r
\r
        // Node Label\r
        const isRight = sIdx === stages.length - 1\r
        g.append('text')\r
          .attr('x', isRight ? xPos - 5 : xPos + nodeWidth + 5)\r
          .attr('y', node.y + node.h / 2 + 2.5)\r
          .attr('text-anchor', isRight ? 'end' : 'start')\r
          .attr('fill', 'var(--text-primary)')\r
          .attr('font-size', '6.5px')\r
          .attr('font-weight', '600')\r
          .text(node.key)\r
      })\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Alluvial Flow Diagram')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};