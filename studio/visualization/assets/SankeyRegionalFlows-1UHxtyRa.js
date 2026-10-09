var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import * as d3Sankey from 'd3-sankey'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-regional-flows',\r
  title: 'Sankey Regional Flows',\r
  desc: 'Sankey Regional Flows — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyRegionalFlows',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-regional-flows"],\r
}\r
\r
export default function SankeyRegionalFlows({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { nodes: [{ name: 'North' }, { name: 'South' }, { name: 'East' }, { name: 'Hub' }, { name: 'Export' }, { name: 'Local' }], links: [{ source: 0, target: 3, value: 42 }, { source: 1, target: 3, value: 31 }, { source: 2, target: 3, value: 27 }, { source: 3, target: 4, value: 55 }, { source: 3, target: 5, value: 38 }] }\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const sk = d3Sankey.sankey().nodeWidth(14).nodePadding(12)\r
      .extent([[30, 44], [370, 258]])\r
    const work = JSON.parse(JSON.stringify(data))\r
    sk(work)\r
    work.links.forEach((lk) => {\r
      svg.append('path')\r
        .attr('d', d3Sankey.sankeyLinkHorizontal()(lk))\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[lk.source.index % colors.length])\r
        .attr('stroke-width', Math.max(1, lk.width))\r
        .attr('stroke-opacity', 0.45)\r
    })\r
    work.nodes.forEach((nd, i) => {\r
      svg.append('rect').attr('x', nd.x0).attr('y', nd.y0)\r
        .attr('width', nd.x1 - nd.x0).attr('height', Math.max(nd.y1 - nd.y0, 2))\r
        .attr('rx', 2).attr('fill', colors[i % colors.length])\r
      const leftSide = nd.x0 < W / 2\r
      svg.append('text').attr('x', leftSide ? nd.x1 + 5 : nd.x0 - 5)\r
        .attr('y', (nd.y0 + nd.y1) / 2 + 3)\r
        .attr('text-anchor', leftSide ? 'start' : 'end')\r
        .attr('font-size', '8.5px').attr('font-weight', 600)\r
        .attr('fill', 'var(--text-secondary)').text(nd.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};