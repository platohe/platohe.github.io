var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'zoomable-treemap',\r
  title: 'Zoomable Treemap',\r
  desc: 'Zoomable Treemap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ZoomableTreemap',\r
  complexity: 'beginner',\r
  interactivity: ["zoom"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","zoomable-treemap"],\r
}\r
\r
export default function ZoomableTreemap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"root","children":[{"name":"Design","children":[{"name":"UI","value":42},{"name":"UX","value":35},{"name":"Motion","value":18}]},{"name":"Engineering","children":[{"name":"Frontend","value":55},{"name":"Backend","value":48},{"name":"DevOps","value":22}]},{"name":"Marketing","children":[{"name":"SEO","value":28},{"name":"Content","value":35}]},{"name":"Sales","children":[{"name":"Enterprise","value":45},{"name":"SMB","value":38}]}]}\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 265\r
    const color = d3.scaleOrdinal()\r
      .domain(['Design', 'Engineering', 'Marketing', 'Sales'])\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444'])\r
\r
    let current = d3.hierarchy(data)\r
    let focus = current\r
    let view\r
\r
    const treemap = d3.treemap()\r
      .tile(d3.treemapSquarify)\r
      .size([width, height])\r
      .round(true)\r
      .paddingTop(20)\r
      .paddingRight(4)\r
      .padding(3)\r
\r
    const root = d3.hierarchy(data)\r
      .sum((d) => d.value)\r
      .sort((a, b) => b.value - a.value)\r
    treemap(root)\r
\r
    function click(d) {\r
      if (d.depth > focus.depth) {\r
        const tx = d.x0 + (d.x1 - d.x0) / 2\r
        const ty = d.y0 + (d.y1 - d.y0) / 2\r
        view = [d.x0, d.y0, d.x1 - d.x0, d.y1 - d.y0]\r
        focus = d\r
      } else {\r
        view = [0, 0, width, height]\r
        focus = root\r
      }\r
\r
      svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity\r
        .translate(width / 2 - view[0] * width, height / 2 - view[1] * height)\r
        .scale(Math.min(width / view[2], height / view[3]))\r
        .translate(-width / 2, -height / 2))\r
    }\r
\r
    const zoom = d3.zoom()\r
      .on('zoom', (event) => {\r
        svg.attr('transform', event.transform)\r
      })\r
\r
    const g = svg.append('g')\r
\r
    function render(node) {\r
      const leaves = node.leaves()\r
      g.selectAll('*').remove()\r
\r
      leaves.forEach((d) => {\r
        const parent = d.parent\r
        const bg = color(parent.data.name)\r
        const r = Math.max(0, d.x1 - d.x0)\r
        const h = Math.max(0, d.y1 - d.y0)\r
\r
        if (r > 10 && h > 10) {\r
          g.append('rect')\r
            .attr('x', d.x0 + 50).attr('y', d.y0 + 15)\r
            .attr('width', r).attr('height', h)\r
            .attr('fill', bg).attr('opacity', 0.85)\r
            .attr('rx', 2)\r
            .on('click', (event) => { event.stopPropagation(); click(d) })\r
\r
          if (r > 35 && h > 18) {\r
            g.append('text')\r
              .attr('x', d.x0 + r / 2 + 50).attr('y', d.y0 + h / 2 + 19)\r
              .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
              .attr('fill', 'white').attr('font-size', '11px').attr('font-weight', 600)\r
              .text(d.data.name)\r
          }\r
        }\r
      })\r
\r
      // Back button\r
      if (focus !== root) {\r
        g.append('text')\r
          .attr('x', 60).attr('y', 30)\r
          .attr('fill', '#6366f1').attr('font-size', '12px').attr('font-weight', 600)\r
          .attr('cursor', 'pointer')\r
          .text('< Back')\r
          .on('click', () => click(focus.parent))\r
      }\r
    }\r
\r
    render(root)\r
    svg.on('click', () => click(root))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};