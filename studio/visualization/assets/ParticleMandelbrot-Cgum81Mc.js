var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'particle-mandelbrot',\r
  title: 'Particle Mandelbrot',\r
  desc: 'Particle Mandelbrot — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleMandelbrot',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-mandelbrot"],\r
}\r
\r
export default function ParticleMandelbrot() {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
    const g = svg.append('g')\r
    const palette = d3.scaleSequential(d3.interpolateRainbow).domain([0, 60])\r
    let zoom = 0\r
    let timer\r
    timer = d3.timer(elapsed => {\r
      zoom = Math.min(elapsed * 0.0003, 1)\r
      const cx = -0.5, cy = 0, maxIter = 50\r
      g.selectAll('*').remove()\r
      const step = 4\r
      for (let px = 0; px < W; px += step) for (let py = 0; py < H; py += step) {\r
        const scale = 2.5 - zoom * 1.5\r
        let x0 = cx + (px - W / 2) / (W / 2) * scale, y0 = cy + (py - H / 2) / (H / 2) * scale, x = 0, y = 0, iter = 0\r
        while (x * x + y * y <= 4 && iter < maxIter) { const xt = x * x - y * y + x0; y = 2 * x * y + y0; x = xt; iter++ }\r
        if (iter === maxIter) continue\r
        g.append('rect').attr('x', px).attr('y', py).attr('width', step).attr('height', step).attr('fill', palette(iter))\r
      }\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};