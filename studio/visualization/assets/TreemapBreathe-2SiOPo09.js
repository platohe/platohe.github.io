var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-breathe',\r
  title: 'Treemap Breathe',\r
  desc: 'Treemap Breathe — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapBreathe',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-breathe"],\r
}\r
\r
export default function TreemapBreathe({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const data = [\r
      { label: 'A', value: 40, color: colors[0] }, { label: 'B', value: 30, color: colors[1] },\r
      { label: 'C', value: 20, color: colors[2] }, { label: 'D', value: 10, color: colors[3] }\r
    ]\r
    const total = data.reduce((s, d) => s + d.value, 0)\r
    const margin = 20\r
    const w = W - margin * 2, h = H - margin * 2\r
    const x = d3.scaleLinear().domain([0, total]).range([margin, W - margin])\r
    let curX = margin\r
    data.forEach((d, i) => {\r
      svg.append('rect').attr('x', curX).attr('y', margin).attr('width', x(d.value) - x(0)).attr('height', h)\r
        .attr('fill', d.color).attr('opacity', 0.8).attr('rx', 2).attr('class', \`tb-\${i}\`)\r
      svg.append('text').attr('x', curX + (x(d.value) - x(0)) / 2).attr('y', H / 2)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle').attr('fill', 'white').attr('font-size', '14px').attr('font-weight', 700).text(d.label)\r
      curX += x(d.value) - x(0)\r
    })\r
    const timer = d3.timer(elapsed => {\r
      data.forEach((d, i) => {\r
        const s = 1 + Math.sin(elapsed * 0.003 + i * 0.5) * 0.05\r
        svg.select(\`.tb-\${i}\`).attr('height', h * s).attr('y', margin + (h - h * s) / 2)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};