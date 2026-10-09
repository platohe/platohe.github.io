var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'collapsible-tree',\r
  title: 'Collapsible Tree',\r
  desc: 'Collapsible Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CollapsibleTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","collapsible-tree"],\r
}\r
\r
export default function CollapsibleTree({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const isValidHierarchy=o=>o&&typeof o==='object'&&!Array.isArray(o)&&typeof o.name==='string'\r
    const fallbackData=defaultDataMap.CollapsibleTree || {\r
      "name": "Analytics",\r
      "children": [\r
        { "name": "Metrics", "children": [{ "name": "Views", "value": 1200 }, { "name": "Clicks", "value": 450 }] },\r
        { "name": "Users", "children": [{ "name": "New", "value": 300 }, { "name": "Returning", "value": 850 }] }\r
      ]\r
    }\r
    let rawChartData=data\r
    // Editor may pass array or flat invalid shape; coerce to hierarchy\r
    if(Array.isArray(rawChartData)){\r
      // If array of nodes with name, wrap; otherwise fallback\r
      const maybeHierarchy=rawChartData.length===1&&isValidHierarchy(rawChartData[0])?rawChartData[0]:null\r
      rawChartData=maybeHierarchy||null\r
    }\r
    const chartData=isValidHierarchy(rawChartData)?rawChartData:fallbackData\r
    const width = 650\r
    const dx = 28\r
    const dy = width / 6\r
    const margin = { top: 20, right: 120, bottom: 20, left: 60 }\r
\r
    const root = d3.hierarchy(chartData)\r
\r
    root.x0 = dy / 2\r
    root.y0 = 0\r
    root.descendants().forEach((d, i) => {\r
      d.id = i\r
      d._children = d.children\r
      if (d.depth > 1) d.children = null\r
    })\r
\r
    const svg = d3.select(svgRef.current)\r
      .style('font', '12px sans-serif')\r
      .style('user-select', 'none')\r
\r
    const gLink = svg.append('g')\r
      .attr('fill', 'none')\r
      .attr('stroke', '#475569')\r
      .attr('stroke-opacity', 0.6)\r
      .attr('stroke-width', 1.5)\r
\r
    const gNode = svg.append('g')\r
      .attr('cursor', 'pointer')\r
      .attr('pointer-events', 'all')\r
\r
    function update(source) {\r
      const duration = 250\r
      const s=v=>Number.isFinite(v)?v:0\r
      const safeLink=d3.linkHorizontal().x(d=>s(d.y)).y(d=>s(d.x))\r
      const nodes = root.descendants().reverse()\r
      const links = root.links()\r
\r
      // Compute tree layout\r
      d3.tree().nodeSize([dx, dy])(root)\r
      // Sanitize NaN positions (e.g. bad hierarchy)\r
      root.eachBefore(d=>{ if(!Number.isFinite(d.x)) d.x=0; if(!Number.isFinite(d.y)) d.y=0; if(!Number.isFinite(d.x0)) d.x0=s(source.x0); if(!Number.isFinite(d.y0)) d.y0=s(source.y0) })\r
\r
      let left = root\r
      let right = root\r
      root.eachBefore(d => {\r
        if (Number.isFinite(d.x)) {\r
          if (d.x < left.x) left = d\r
          if (d.x > right.x) right = d\r
        }\r
      })\r
\r
      const rawHeight=right.x - left.x + margin.top + margin.bottom\r
      const rawVbWidth=right.y + margin.right\r
      const height=Number.isFinite(rawHeight)?rawHeight: 300\r
      const vbWidth=Number.isFinite(rawVbWidth)?rawVbWidth: 650\r
\r
      const transition = svg.transition()\r
        .duration(duration)\r
        .attr('viewBox', [-margin.left, s(left.x) - margin.top, vbWidth, height])\r
\r
      // Nodes\r
      const node = gNode.selectAll('g')\r
        .data(nodes, d => d.id)\r
\r
      const nodeEnter = node.enter().append('g')\r
        .attr('transform', () => \`translate(\${s(source.y0)},\${s(source.x0)})\`)\r
        .attr('fill-opacity', 0)\r
        .attr('stroke-opacity', 0)\r
        .on('click', (event, d) => {\r
          d.children = d.children ? null : d._children\r
          update(d)\r
        })\r
\r
      nodeEnter.append('circle')\r
        .attr('r', 5)\r
        .attr('fill', d => d._children ? '#6366f1' : '#a855f7')\r
        .attr('stroke', '#cbd5e1')\r
        .attr('stroke-width', 1.5)\r
\r
      nodeEnter.append('text')\r
        .attr('dy', '0.31em')\r
        .attr('x', d => d._children ? -10 : 10)\r
        .attr('text-anchor', d => d._children ? 'end' : 'start')\r
        .text(d => d.data.name ?? '')\r
        .attr('fill', '#f8fafc')\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 3)\r
        .attr('paint-order', 'stroke')\r
\r
      node.merge(nodeEnter).transition(transition)\r
        .attr('transform', d => \`translate(\${s(d.y)},\${s(d.x)})\`)\r
        .attr('fill-opacity', 1)\r
        .attr('stroke-opacity', 1)\r
\r
      node.exit().transition(transition).remove()\r
        .attr('transform', () => \`translate(\${s(source.y)},\${s(source.x)})\`)\r
        .attr('fill-opacity', 0)\r
        .attr('stroke-opacity', 0)\r
\r
      // Links\r
      const link = gLink.selectAll('path')\r
        .data(links, d => d.target.id)\r
\r
      const linkEnter = link.enter().append('path')\r
        .attr('d', () => {\r
          const o = { x: s(source.x0), y: s(source.y0) }\r
          return safeLink({ source: o, target: o })\r
        })\r
\r
      link.merge(linkEnter).transition(transition)\r
        .attr('d', safeLink)\r
\r
      link.exit().transition(transition).remove()\r
        .attr('d', () => {\r
          const o = { x: s(source.x), y: s(source.y) }\r
          return safeLink({ source: o, target: o })\r
        })\r
\r
      root.eachBefore(d => {\r
        d.x0 = s(d.x)\r
        d.y0 = s(d.y)\r
      })\r
    }\r
\r
    root.x0 = dy / 2\r
    root.y0 = 0\r
    update(root)\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};