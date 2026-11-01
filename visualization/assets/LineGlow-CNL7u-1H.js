var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-glow',\r
  title: 'Line Glow',\r
  desc: 'Line Glow — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineGlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-glow"],\r
}\r
\r
export default function LineGlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const defs = svg.append('defs')\r
    const glow = defs.append('filter').attr('id', 'glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%')\r
    glow.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur')\r
    glow.append('feMerge').selectAll('feMergeNode').data(['blur', 'SourceGraphic']).join('feMergeNode').attr('in', d => d)\r
\r
    const N = 80\r
    const line = d3.line().x((d, i) => (i / N) * W).y(d => d).curve(d3.curveCatmullRom.alpha(0.5))\r
    const data = Array.from({ length: N + 1 }, (_, i) => H / 2 + Math.sin(i * 0.1) * 50)\r
\r
    const glowPath = svg.append('path').attr('d', line(data)).attr('fill', 'none')\r
      .attr('stroke', colors[0]).attr('stroke-width', 8).attr('filter', 'url(#glow)').attr('opacity', 0.6)\r
    const mainPath = svg.append('path').attr('d', line(data)).attr('fill', 'none')\r
      .attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.003\r
      const pulse = 0.3 + 0.7 * ((Math.sin(t) + 1) / 2)\r
      mainPath.attr('stroke-opacity', pulse)\r
      glowPath.attr('opacity', pulse * 0.8)\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};