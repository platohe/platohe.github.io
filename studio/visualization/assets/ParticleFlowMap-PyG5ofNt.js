var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'particle-flow-map',\r
  title: 'Particle Flow Map',\r
  desc: 'Particle Flow Map — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleFlowMap',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-flow-map"],\r
}\r
\r
export default function ParticleFlowMap({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const width=360, height=188\r
    const g=svg.append('g').attr('transform','translate(20,34)')\r
    g.append('rect').attr('width',width).attr('height',height).attr('fill','#f1f5f9').attr('stroke','var(--border)').attr('rx',6)\r
    // vector field\r
    const cols=18, rows=10\r
    const field=[]\r
    for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){\r
      const x=c*width/cols+8, y=r*height/rows+10\r
      const ang= Math.sin(c*0.6)*0.9 + Math.cos(r*0.5)*0.6\r
      const mag= 6 + Math.sin(c*0.8+r*0.5)*2\r
      field.push({x,y, ang, mag})\r
    }\r
    field.forEach(f=>{\r
      const x2=f.x+Math.cos(f.ang)*f.mag, y2=f.y+Math.sin(f.ang)*f.mag\r
      g.append('line').attr('x1',f.x).attr('y1',f.y).attr('x2',x2).attr('y2',y2).attr('stroke','#0ea5e9').attr('stroke-width',1.1).attr('opacity',0.72).attr('marker-end','url(#arrP)')\r
    })\r
    svg.append('defs').append('marker').attr('id','arrP').attr('viewBox','0 -3 6 6').attr('refX',5).attr('refY',0).attr('markerWidth',5).attr('markerHeight',5).attr('orient','auto').append('path').attr('d','M0,-3L6,0L0,3').attr('fill','#0ea5e9')\r
    // particles\r
    const particles=Array.from({length:14},(_,i)=>({x: 20+ Math.random()*300, y: 50+Math.random()*120, vx: (Math.random()-0.3)*2, vy:(Math.random()-0.5)*1.2}))\r
    const pg=g.append('g')\r
    let iv\r
    const tick=()=>{\r
      pg.selectAll('*').remove()\r
      particles.forEach(p=>{\r
        p.x+=p.vx; p.y+=p.vy\r
        if(p.x<0||p.x>width) p.vx*=-1\r
        if(p.y<0||p.y>height) p.vy*=-1\r
        // snap to field\r
        const col=Math.floor(p.x/width*cols), row=Math.floor(p.y/height*rows)\r
        const f=field[row*cols+col]\r
        if(f){ p.vx+=Math.cos(f.ang)*0.04; p.vy+=Math.sin(f.ang)*0.04; p.vx*=0.98; p.vy*=0.98 }\r
        pg.append('circle').attr('cx',p.x).attr('cy',p.y).attr('r',2.6).attr('fill','#f59e0b').attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
        pg.append('circle').attr('cx',p.x-p.vx*2).attr('cy',p.y-p.vy*2).attr('r',1).attr('fill','#f59e0b').attr('opacity',0.32)\r
      })\r
    }\r
    tick(); iv=setInterval(tick,90)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Particle Flow Map')\r
    return ()=> clearInterval(iv)\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};