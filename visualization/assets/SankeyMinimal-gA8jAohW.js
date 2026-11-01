var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import * as d3Sankey from 'd3-sankey'\r
import { W, H } from './utils'\r
// SankeyMinimal: Hairline links, quiet chrome.\r
export const meta = {\r
  id: 'sankey-minimal',\r
  title: 'Sankey Minimal',\r
  desc: 'Sankey Minimal — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyMinimal',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-minimal"],\r
}\r
\r
export default function SankeyMinimal({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"nodes":[{"name":"N1"},{"name":"N2"},{"name":"N3"},{"name":"N4"}],"links":[{"source":0,"target":2,"value":22},{"source":1,"target":3,"value":28},{"source":0,"target":3,"value":14}]}\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const sk = d3Sankey.sankey()\r
      .nodeWidth(8)\r
      .nodePadding(12)\r
      .extent([[30, 34], [370, 268]])\r
    // deep copy so re-renders never mutate DEFAULT_DATA in place\r
    const work = JSON.parse(JSON.stringify(data))\r
    sk(work)\r
    const maxV = Math.max(...work.links.map(lk => lk.value))\r
    work.links.forEach(lk => {\r
      svg.append('path')\r
        .attr('d', d3Sankey.sankeyLinkHorizontal()(lk))\r
        .attr('fill', 'none')\r
        .attr('stroke', '#94a3b8')\r
        .attr('stroke-width', Math.max(1, lk.width))\r
        .attr('stroke-opacity', 0.3 + 0.25 * lk.value / maxV)\r
    })\r
    work.nodes.forEach((nd) => {\r
      svg.append('rect')\r
        .attr('x', nd.x0).attr('y', nd.y0)\r
        .attr('width', nd.x1 - nd.x0).attr('height', Math.max(nd.y1 - nd.y0, 2))\r
        .attr('rx', 2)\r
        .attr('fill', 'var(--border)')\r
      const leftSide = nd.x0 < W / 2\r
      svg.append('text')\r
        .attr('x', leftSide ? nd.x1 + 5 : nd.x0 - 5)\r
        .attr('y', (nd.y0 + nd.y1) / 2 + 3)\r
        .attr('text-anchor', leftSide ? 'start' : 'end')\r
        .attr('font-size', '8.5px').attr('font-weight', 600)\r
        .attr('fill', 'var(--text-secondary)').text(nd.name)\r
    })\r
    \r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};