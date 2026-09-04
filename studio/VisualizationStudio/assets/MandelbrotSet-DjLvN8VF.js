var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'mandelbrot-set',\r
  title: 'Mandelbrot Set',\r
  desc: 'Mandelbrot Set — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'MandelbrotSet',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","mandelbrot-set"],\r
}\r
\r
export default function MandelbrotSet({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":64}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const cell=5, cols=Math.ceil(W/cell), rows=Math.ceil(H/cell)\r
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){\r
      let x0=(c/cols)*3.5-2.5, y0=(r/rows)*2.4-1.2, zx=0, zy=0, it=0\r
      const maxIt = Math.min(256, Math.max(16, Math.round(data.iterations || 64)))\r
      while(zx*zx+zy*zy<=4 && it<maxIt){ const t=zx*zx-zy*zy+x0; zy=2*zx*zy+y0; zx=t; it++ }\r
      g.append('rect').attr('x',c*cell).attr('y',r*cell).attr('width',cell-1).attr('height',cell-1).attr('fill', it===maxIt?'#0f172a':d3.interpolateTurbo(it/maxIt))\r
    }\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('MandelbrotSet')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};