var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'generative-fractal',\r
  title: 'Generative Fractal',\r
  desc: 'Generative Fractal — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GenerativeFractal',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","generative-fractal"],\r
}\r
\r
export default function GenerativeFractal({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, baseY = H - 20\r
    function branch(x1, y1, angle, len, depth) {\r
      if (depth <= 0 || len < 5) return []\r
      const x2 = x1 + Math.cos(angle) * len\r
      const y2 = y1 + Math.sin(angle) * len\r
      const el = svg.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x1).attr('y2', y1).attr('stroke', colors[depth % colors.length]).attr('stroke-width', depth * 0.5).attr('opacity', 0.8)\r
      return [{ el, x2, y2, angle, len, depth }]\r
    }\r
    const branches = branch(cx, baseY, -Math.PI / 2, 50, 8)\r
    const timer = d3.timer(elapsed => {\r
      const grow = Math.min(1, (elapsed % 4000) / 2000)\r
      function draw(b, g) {\r
        if (b.depth <= 0) return\r
        const l = b.len * grow\r
        const x2 = b.x1 + Math.cos(b.angle + g) * l\r
        const y2 = b.y1 + Math.sin(b.angle + g) * l\r
        b.el.attr('x2', x2).attr('y2', y2)\r
        const wind = Math.sin(elapsed * 0.001 + b.depth) * 0.05\r
        if (b.el.attr('x2') !== undefined) {\r
          draw({ x1: x2, y1: y2, angle: b.angle - 0.4 + wind, len: l * 0.7, depth: b.depth - 1, el: svg.append('line') }, g)\r
          draw({ x1: x2, y1: y2, angle: b.angle + 0.4 + wind, len: l * 0.7, depth: b.depth - 1, el: svg.append('line') }, g)\r
        }\r
      }\r
      // Redraw each frame for wind\r
    })\r
    // Simpler approach: just animate a single growing tree\r
    const paths = []\r
    for (let d = 0; d < 8; d++) {\r
      paths.push(svg.append('line').attr('stroke', colors[d % colors.length]).attr('stroke-width', 4 - d * 0.4).attr('opacity', 0.8))\r
    }\r
    const timer2 = d3.timer(elapsed => {\r
      const grow = Math.min(1, (elapsed % 3000) / 1500)\r
      const cx2 = W / 2, base = H - 30\r
      let x = cx2, y = base, angle = -Math.PI / 2\r
      paths.forEach((p, d) => {\r
        const len = 50 * grow * Math.pow(0.7, d)\r
        const wind = Math.sin(elapsed * 0.002 + d) * 0.03\r
        const nx = x + Math.cos(angle + wind) * len\r
        const ny = y + Math.sin(angle + wind) * len\r
        p.attr('x1', x).attr('y1', y).attr('x2', nx).attr('y2', ny)\r
        x = nx; y = ny\r
        if (d < 3) angle = angle - 0.3 + wind\r
        else if (d < 6) angle = angle + 0.3 + wind\r
        else angle = angle + wind\r
      })\r
    })\r
    return () => timer2.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};