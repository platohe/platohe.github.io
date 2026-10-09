var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-vertical',\r
  title: 'Sankey Vertical',\r
  desc: 'Sankey Vertical — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyVertical',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-vertical"],\r
}\r
\r
export default function SankeyVertical({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { nodes: [{ name: 'Coal' }, { name: 'Gas' }, { name: 'Solar' }, { name: 'Demand' }], links: [{ source: 0, target: 3, value: 30 }, { source: 1, target: 3, value: 45 }, { source: 2, target: 3, value: 25 }] }\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const sources = data.nodes.slice(0, data.nodes.length - 1)\r
    const sinks = data.nodes.slice(data.nodes.length - 1)\r
    const totalIn = data.links.reduce((a, lk) => a + lk.value, 0)\r
    const topY = 60, botY = 235\r
    const sx = (i) => 70 + i * ((W - 140) / Math.max(sources.length - 1, 1))\r
    // stacked offsets at each source so ribbons leave without overlap\r
    const srcOffsets = new Array(sources.length).fill(0)\r
    const sinkOffsets = [0]\r
    const scaleV = (val) => (val / totalIn) * 120\r
    const order = [...data.links].sort((a, b) => a.source - b.source)\r
    order.forEach(lk => {\r
      const sIdx = typeof lk.source === 'object' ? lk.source.index ?? lk.source : lk.source\r
      const h = scaleV(lk.value)\r
      const x1 = sx(sIdx), y1 = topY + srcOffsets[sIdx]\r
      const x2 = W / 2, y2 = botY + sinkOffsets[0]\r
      srcOffsets[sIdx] += h\r
      sinkOffsets[0] += h\r
      g.append('path')\r
        .attr('d', 'M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + (y1 + h * 0.5 + 40) + ' ' + x2 + ' ' + (y2 - h * 0.5 - 40) + ' ' + x2 + ' ' + y2 +\r
          ' L' + (x2 + h) + ' ' + y2 + ' C' + (x2 + h) + ' ' + (y2 - h * 0.5 - 40) + ' ' + (x1 + h) + ' ' + (y1 + h * 0.5 + 40) + ' ' + (x1 + h) + ' ' + y1 + ' Z')\r
        .attr('fill', colors[sIdx % colors.length]).attr('fill-opacity', 0.45)\r
    })\r
    sources.forEach((nd, i) => {\r
      const tot = data.links.filter(lk => (typeof lk.source === 'object' ? lk.source.index : lk.source) === i).reduce((a, lk) => a + lk.value, 0)\r
      g.append('rect').attr('x', sx(i) - scaleV(tot) / 2).attr('y', topY - 10).attr('width', scaleV(tot)).attr('height', 10).attr('rx', 2)\r
        .attr('fill', colors[i % colors.length])\r
      g.append('text').attr('x', sx(i)).attr('y', topY - 16).attr('text-anchor', 'middle').attr('font-size', '8.5px').attr('font-weight', 600).attr('fill', 'var(--text-secondary)').text(nd.name)\r
    })\r
    sinks.forEach((nd) => {\r
      g.append('rect').attr('x', W / 2 - scaleV(totalIn) / 2).attr('y', botY).attr('width', scaleV(totalIn)).attr('height', 12).attr('rx', 2).attr('fill', 'var(--border)')\r
      g.append('text').attr('x', W / 2).attr('y', botY + 26).attr('text-anchor', 'middle').attr('font-size', '8.5px').attr('font-weight', 600).attr('fill', 'var(--text-secondary)').text(nd.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};