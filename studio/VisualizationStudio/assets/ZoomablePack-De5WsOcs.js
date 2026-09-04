var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'zoomable-pack',\r
  title: 'Zoomable Pack',\r
  desc: 'Zoomable Pack — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ZoomablePack',\r
  complexity: 'beginner',\r
  interactivity: ["zoom"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","zoomable-pack"],\r
}\r
\r
export default function ZoomablePack({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"root","children":[{"name":"Web","children":[{"name":"React","value":95},{"name":"Vue","value":72},{"name":"Svelte","value":38}]},{"name":"Mobile","children":[{"name":"iOS","value":68},{"name":"Android","value":85}]},{"name":"Backend","children":[{"name":"Node","value":78},{"name":"Go","value":55}]}]}\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 265\r
    const color = d3.scaleOrdinal()\r
      .domain(['Web', 'Mobile', 'Backend'])\r
      .range(['#6366f1', '#f59e0b', '#10b981'])\r
\r
    const root = d3.hierarchy(data)\r
      .sum((d) => d.value)\r
      .sort((a, b) => b.value - a.value)\r
\r
    d3.pack()\r
      .size([width, height])\r
      .padding(5)(root)\r
\r
    let focus = root\r
    let view\r
\r
    function click(d) {\r
      if (d.depth > focus.depth) {\r
        const tx = d.x0 + d.r, ty = d.y0 + d.r\r
        view = [d.x0, d.y0, d.x1 - d.x0, d.y1 - d.y0]\r
        focus = d\r
      } else {\r
        view = [0, 0, width, height]\r
        focus = root\r
      }\r
      svg.transition().duration(750).attr('transform',\r
        \`translate(\${width / 2 - view[0] * width / view[2]},\${height / 2 - view[1] * height / view[3]}) scale(\${Math.min(width / view[2], height / view[3])})\`)\r
    }\r
\r
    function render() {\r
      svg.selectAll('*').remove()\r
\r
      root.each((d) => { d.current = d })\r
      const nodes = root.leaves()\r
\r
      nodes.forEach((d) => {\r
        const parentColor = color[d.depth === 1 ? d.data.name : d.parent.data.name]\r
        svg.append('circle')\r
          .attr('cx', d.x).attr('cy', d.y)\r
          .attr('r', d.r)\r
          .attr('fill', parentColor).attr('opacity', 0.7)\r
          .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
          .on('click', (event) => { event.stopPropagation(); click(d) })\r
\r
        if (d.r > 12) {\r
          svg.append('text')\r
            .attr('x', d.x).attr('y', d.y + 4)\r
            .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
            .attr('fill', 'white').attr('font-size', '10px').attr('font-weight', 600)\r
            .text(d.data.name)\r
        }\r
      })\r
    }\r
\r
    render()\r
    svg.on('click', () => click(root))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};