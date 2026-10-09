var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'perlin-noise-field',\r
  title: 'Perlin Noise Field',\r
  desc: 'Perlin Noise Field — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'PerlinNoiseField',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","perlin-noise-field"],\r
}\r
\r
export default function PerlinNoiseField({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
    const val=(ix,iy)=>{ const n=Math.sin(ix*127.1+iy*311.7+(data.seed||42))*43758.5453; return n-Math.floor(n) }\r
    const sm=(t)=>t*t*(3-2*t)\r
    const noise=(px,py)=>{ const ix=Math.floor(px), iy=Math.floor(py), tx=sm(px-ix), ty=sm(py-iy); const a=val(ix,iy), b=val(ix+1,iy), c=val(ix,iy+1), dd=val(ix+1,iy+1); return a+(b-a)*tx+(c-a)*ty+(a-b-c+dd)*tx*ty }\r
    const streamlines = Math.min(60, Math.max(4, Math.round((data.iterations || 2000) / 300)))\r
    for(let sIdx=0;sIdx<streamlines;sIdx++){\r
      let px=20+rnd()*(W-40), py=20+rnd()*(H-50)\r
      const trail=[[px,py]]\r
      for(let k=0;k<36;k++){\r
        const ang=noise(px*0.02,py*0.02)*Math.PI*4\r
        px+=Math.cos(ang)*6; py+=Math.sin(ang)*6\r
        if(px<10||px>W-10||py<10||py>H-20) break\r
        trail.push([px,py])\r
      }\r
      if(trail.length>1) g.append('path').attr('d','M'+trail.map(q=>q.join(',')).join('L')).attr('fill','none').attr('stroke',colors[sIdx%colors.length]).attr('opacity',0.55)\r
    }\r
    g.append('text').attr('x',W/2).attr('y',H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('PerlinNoiseField')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};