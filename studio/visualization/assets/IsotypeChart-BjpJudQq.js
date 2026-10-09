var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'isotype-chart',\r
  title: 'Isotype Chart',\r
  desc: 'Isotype Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IsotypeChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","isotype-chart"],\r
}\r
\r
export default function IsotypeChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Apples","value":45,"icon":"🍎"},{"label":"Oranges","value":30,"icon":"🍊"},{"label":"Bananas","value":25,"icon":"🍌"},{"label":"Grapes","value":20,"icon":"🍇"},{"label":"Strawberries","value":15,"icon":"🍓"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const iconSize = 18\r
    const rowH = iconSize + 2\r
\r
    let idx = 0\r
    data.forEach((d, di) => {\r
      const yBase = M.top + di * (IH / data.length) + 10\r
      const rowW = IW * 0.8\r
      const colsPerRow = Math.ceil(Math.sqrt(d.value))\r
\r
      for (let i = 0; i < d.value; i++) {\r
        const col = i % colsPerRow\r
        const row = Math.floor(i / colsPerRow)\r
        const ix = M.left + 30 + col * (iconSize + 2)\r
        const iy = yBase + row * rowH\r
\r
        svg.append('text').attr('x', ix).attr('y', iy + iconSize)\r
          .attr('font-size', iconSize + 'px').attr('dominant-baseline', 'middle').text(d.icon)\r
      }\r
\r
      // Label\r
      svg.append('text').attr('x', M.left + rowW + 10).attr('y', yBase + iconSize / 2 + 4)\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold').text(d.label)\r
      svg.append('text').attr('x', M.left + rowW + 10).attr('y', yBase + iconSize / 2 + 18)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d.value + ' items')\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Isotype Chart (Pictogram)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};