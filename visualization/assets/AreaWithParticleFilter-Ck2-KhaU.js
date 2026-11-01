var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-particle-filter',\r
  title: 'Area With Particle Filter',\r
  desc: 'Area With Particle Filter — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithParticleFilter',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-particle-filter"],\r
}\r
\r
export default function AreaWithParticleFilter({ data: customData, onCurveData }) {\r
  const ref=useRef(null)\r
  const isCurveData = Array.isArray(customData) && customData.length > 0 && customData[0].x != null\r
  const params = useMemo(() => ({\r
    formula: 'sinusoidal',\r
    amp: customData?.amp ?? 15,\r
    offset: customData?.offset ?? 40,\r
    freq: customData?.freq ?? 2,\r
    points: customData?.points ?? 60,\r
  }), [customData])\r
\r
  const curveData = useMemo(() => isCurveData ? customData : makeBaseCurve(params), [isCurveData, params, customData])\r
  useEffect(()=>{\r
    if (onCurveData) onCurveData(curveData)\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(curveData,d=>d.x)).range([0,width])\r
    const y=d3.scaleLinear().domain([0,80]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    // Particle filter\r
    const particles=100\r
    let particlesData=Array.from({length:100},()=>({x:0, y:42, weight:1/100}))\r
    // Resample and propagate\r
    const filtered=curveData.map((d,i)=>{\r
      particlesData.forEach(p=>{ p.x+= (Math.random()-0.5)*2; p.y+= (Math.random()-0.5)*2 })\r
      // Weight by likelihood\r
      particlesData.forEach(p=>{ p.weight = Math.exp(-0.5*Math.pow((d.y-p.y)/5,2)) })\r
      // Normalize\r
      const sum=d3.sum(particlesData, p=>p.weight)\r
      particlesData.forEach(p=> p.weight/=d3.sum(particlesData, p=>p.weight))\r
      // Resample\r
      const newParticles=[]\r
      for(let i=0;i<100;i++){\r
        const r=Math.random()\r
        let cum=0, idx=0\r
        while(cum<r && idx<100){ cum+=particlesData[idx].weight; idx++ }\r
        newParticles.push({...particlesData[Math.min(idx,99)]})\r
      }\r
      particlesData=newParticles\r
      const mean=d3.mean(particlesData, p=>p.y)||42\r
      return {x:d.x, y:d3.mean(particlesData, p=>p.y)||42}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    // Particles\r
    const particlesG=g.append('g')\r
    particlesData.forEach(p=> particlesG.append('circle').attr('cx',x(p.x)).attr('cy',y(p.y)).attr('r',1.5).attr('fill',colors[0]).attr('opacity',0.2))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Particle Filter')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};