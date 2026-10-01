var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'treemap',\r
  title: 'Treemap',\r
  desc: 'Treemap — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'Treemap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap"],\r
}\r
\r
export default function Treemap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"root","children":[{"name":"Design","children":[{"name":"UI","value":42},{"name":"UX","value":35},{"name":"Motion","value":18}]},{"name":"Engineering","children":[{"name":"Frontend","value":55},{"name":"Backend","value":48},{"name":"DevOps","value":22},{"name":"Mobile","value":30}]},{"name":"Marketing","children":[{"name":"SEO","value":28},{"name":"Content","value":35},{"name":"Ads","value":20}]},{"name":"Sales","children":[{"name":"Enterprise","value":45},{"name":"SMB","value":38}]},{"name":"Support","children":[{"name":"Tickets","value":30},{"name":"Docs","value":25}]}]}\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 270\r
    const color = d3.scaleOrdinal()\r
      .domain(['Design', 'Engineering', 'Marketing', 'Sales', 'Support'])\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'])\r
\r
    const root = d3.hierarchy(data)\r
      .sum((d) => d.value)\r
      .sort((a, b) => b.value - a.value)\r
\r
    d3.treemap()\r
      .tile(d3.treemapSquarify)\r
      .size([width, height])\r
      .paddingTop(20)\r
      .paddingRight(4)\r
      .padding(3)\r
      .round(true)(root)\r
\r
    const nodes = root.descendants().filter((d) => d.depth >= 1)\r
    const leaves = root.leaves()\r
\r
    // Draw leaves\r
    leaves.forEach((d) => {\r
      const parent = d.parent\r
      const bgColor = color(parent.data.name)\r
      svg.append('rect')\r
        .attr('x', d.x0 + 50).attr('y', d.y0 + 15)\r
        .attr('width', Math.max(0, d.x1 - d.x0)).attr('height', Math.max(0, d.y1 - d.y0))\r
        .attr('fill', bgColor)\r
        .attr('opacity', 0.85)\r
        .attr('rx', 2)\r
\r
      const w = d.x1 - d.x0, h = d.y1 - d.y0\r
      if (w > 40 && h > 18) {\r
        svg.append('text')\r
          .attr('x', (d.x0 + d.x1) / 2 + 50)\r
          .attr('y', (d.y0 + d.y1) / 2 + 15 + 4)\r
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
          .attr('fill', 'white').attr('font-size', '11px').attr('font-weight', 600)\r
          .text(d.data.name)\r
\r
        svg.append('text')\r
          .attr('x', (d.x0 + d.x1) / 2 + 50)\r
          .attr('y', (d.y0 + d.y1) / 2 + 15 + 16)\r
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
          .attr('fill', 'rgba(255,255,255,0.7)').attr('font-size', '9px')\r
          .text(d.value)\r
      }\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};