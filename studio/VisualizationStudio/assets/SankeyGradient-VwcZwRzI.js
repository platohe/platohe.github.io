var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import * as d3Sankey from 'd3-sankey'\r
import { W, H, colors } from './utils'\r
// SankeyGradient: Gradient-colored link fills.\r
export const meta = {\r
  id: 'sankey-gradient',\r
  title: 'Sankey Gradient',\r
  desc: 'Sankey Gradient — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyGradient',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-gradient"],\r
}\r
\r
export default function SankeyGradient({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"nodes":[{"name":"A"},{"name":"B"},{"name":"C"},{"name":"D"}],"links":[{"source":0,"target":2,"value":30},{"source":0,"target":3,"value":20},{"source":1,"target":2,"value":25},{"source":1,"target":3,"value":35}]}\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const sk = d3Sankey.sankey()\r
      .nodeWidth(14)\r
      .nodePadding(12)\r
      .extent([[30, 44], [370, 258]])\r
    // deep copy so re-renders never mutate DEFAULT_DATA in place\r
    const work = JSON.parse(JSON.stringify(data))\r
    sk(work)\r
    \r
    work.links.forEach(lk => {\r
      svg.append('path')\r
        .attr('d', d3Sankey.sankeyLinkHorizontal()(lk))\r
        .attr('fill', 'none')\r
        .attr('stroke', d3.interpolateRgbBasis(colors)(lk.source.index / Math.max(work.nodes.length - 1, 1)))\r
        .attr('stroke-width', Math.max(1, lk.width))\r
        .attr('stroke-opacity', 0.55)\r
    })\r
    work.nodes.forEach((nd, i) => {\r
      svg.append('rect')\r
        .attr('x', nd.x0).attr('y', nd.y0)\r
        .attr('width', nd.x1 - nd.x0).attr('height', Math.max(nd.y1 - nd.y0, 2))\r
        .attr('rx', 2)\r
        .attr('fill', d3.interpolateRgbBasis(colors)(i / Math.max(work.nodes.length - 1, 1)))\r
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