var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'reaction-diffusion',\r
  title: 'Reaction Diffusion',\r
  desc: 'Reaction Diffusion — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'ReactionDiffusion',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","reaction-diffusion"],\r
}\r
\r
export default function ReactionDiffusion({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const w=52, hh=38\r
    let A=new Float32Array(w*hh).fill(1), B=new Float32Array(w*hh)\r
    for(let s=0;s<6;s++){ const sx=Math.floor(rnd()*w), sy=Math.floor(rnd()*hh); for(let dr=-2;dr<=2;dr++)for(let dc=-2;dc<=2;dc++){ const ix=((sy+dr+hh)%hh)*w+((sx+dc+w)%w); B[ix]=1 } }\r
    const rdSteps = Math.min(120, Math.max(10, data.iterations || 40))\r
    for(let it=0;it<rdSteps;it++){\r
      const nA=new Float32Array(A), nB=new Float32Array(B)\r
      for(let y=0;y<hh;y++)for(let x=0;x<w;x++){\r
        const ix=y*w+x\r
        const lapA=(A[(y+1)%hh*w+x]+A[((y-1+hh)%hh)*w+x]+A[y*w+(x+1)%w]+A[y*w+(x-1+w)%w])/4 - A[ix]\r
        const lapB=(B[(y+1)%hh*w+x]+B[((y-1+hh)%hh)*w+x]+B[y*w+(x+1)%w]+B[y*w+(x-1+w)%w])/4 - B[ix]\r
        nA[ix]=Math.max(0,Math.min(1,A[ix]+(1.0*lapA-A[ix]*B[ix]*B[ix]+0.037*(1-A[ix]))))\r
        nB[ix]=Math.max(0,Math.min(1,B[ix]+(0.5*lapB+A[ix]*B[ix]*B[ix]-(0.062+0.06)*B[ix])))\r
      }\r
      A=nA; B=nB\r
    }\r
    const cs=7\r
    for(let y=0;y<hh;y++)for(let x=0;x<w;x++){ const v=B[y*w+x]; if(v>0.12) g.append('rect').attr('x',x*cs+8).attr('y',y*cs+14).attr('width',cs-1).attr('height',cs-1).attr('fill',d3.interpolateMagma(Math.min(1,v))) }\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('ReactionDiffusion')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};