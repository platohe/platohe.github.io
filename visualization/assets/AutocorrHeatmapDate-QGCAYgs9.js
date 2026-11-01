var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'autocorr-heatmap-date',\r
  title: 'Autocorr Heatmap Date',\r
  desc: 'Autocorr Heatmap Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AutocorrHeatmapDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","autocorr-heatmap-date"],\r
}\r
\r
export default function AutocorrHeatmapDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const N = 6\r
    const cell = Math.min((W-M.left-M.right)/N,(H-M.top-M.bottom)/N)\r
    const ox = M.left + ((W-M.left-M.right)-cell*N)/2\r
    const oy = M.top + ((H-M.top-M.bottom)-cell*N)/2\r
    const c = d3.scaleSequential(d3.interpolatePuOr).domain([-1,1])\r
    const g = svg.append('g').attr('transform','translate('+ox+','+oy+')')\r
    for(let i=0;i<N;i++)for(let j=0;j<N;j++){\r
      const v = i===j ? 1 : Math.cos(i*1.1+j*0.7)/(1+0.3*(i+j))\r
      g.append('rect').attr('x',j*cell).attr('y',i*cell).attr('width',cell-2).attr('height',cell-2).attr('fill',c(v)).attr('rx',3)\r
      g.append('text').attr('x',j*cell+cell/2).attr('y',i*cell+cell/2+3).attr('text-anchor','middle').attr('fill',Math.abs(v)>0.55?'#fff':'#111').attr('font-size','8px').text(v.toFixed(1))\r
    }\r
    for(let k=0;k<N;k++){\r
      g.append('text').attr('x',k*cell+cell/2).attr('y',-5).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('L'+k)\r
      g.append('text').attr('x',-6).attr('y',k*cell+cell/2+3).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','7px').text('L'+k)\r
    }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};