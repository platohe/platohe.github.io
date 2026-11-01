var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'generative-cellular',\r
  title: 'Generative Cellular',\r
  desc: 'Generative Cellular — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GenerativeCellular',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","generative-cellular"],\r
}\r
\r
export default function GenerativeCellular({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cols = 25, rows = 18, cw = W / cols, ch = H / rows\r
    let grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.random() > 0.5 ? 1 : 0))\r
    const cells = Array.from({ length: cols * rows }, (_, i) =>\r
      svg.append('rect').attr('x', i % cols * cw).attr('y', Math.floor(i / cols) * ch).attr('width', cw).attr('height', ch).attr('fill', colors[0]).attr('opacity', 0.5)\r
    )\r
    const tick = () => {\r
      const next = grid.map(row => [...row])\r
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {\r
        let n = 0\r
        for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {\r
          if (dr || dc) n += grid[(r + dr + rows) % rows][(c + dc + cols) % cols]\r
        }\r
        if (grid[r][c] === 1) next[r][c] = n === 2 || n === 3 ? 1 : 0\r
        else next[r][c] = n === 3 ? 1 : 0\r
      }\r
      grid = next\r
      cells.forEach((c, i) => {\r
        const val = grid[Math.floor(i / cols)][i % cols]\r
        c.attr('fill', val ? colors[1] : 'var(--bg-card)').attr('opacity', val ? 0.8 : 0.1)\r
      })\r
    }\r
    const timer = d3.timer(elapsed => { if (elapsed % 200 < 20) tick() })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};