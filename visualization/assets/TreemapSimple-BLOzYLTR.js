var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'treemap-simple',\r
  title: 'Treemap Simple',\r
  desc: 'Treemap Simple — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapSimple',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-simple"],\r
}\r
\r
export default function TreemapSimple({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = {"name":"root","children":[{"name":"A","value":40},{"name":"B","value":30},{"name":"C","value":25},{"name":"D","value":20},{"name":"E","value":15}]}\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const root = d3.hierarchy(customData && customData.children ? customData : DEFAULT_DATA).sum(d => d.value || 0).sort((a, b) => b.value - a.value)\r
    d3.treemap().size([W, H]).padding(2).round(true)(root)\r
    const color = d3.scaleOrdinal(colors)\r
    root.descendants().forEach(d => {\r
      if (d.depth === 0) return\r
      const c = color(d.data.name.charCodeAt(0) % colors.length)\r
      svg.append('rect').attr('x', d.x0).attr('y', d.y0).attr('width', d.x1 - d.x0).attr('height', d.y1 - d.y0)\r
        .attr('fill', c).attr('opacity', 0.8).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      if (d.x1 - d.x0 > 20 && d.y1 - d.y0 > 12) {\r
        const fs = Math.min(10, Math.max(6, (d.x1 - d.x0) / 5))\r
        svg.append('text').attr('x', d.x0 + 3).attr('y', d.y0 + 14).attr('font-size', fs + 'px').attr('font-weight', 600).attr('fill', '#fff').text(d.data.name)\r
      }\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};