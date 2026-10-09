var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'word-cloud-spiral',\r
  title: 'Word Cloud Spiral',\r
  desc: 'Word Cloud Spiral — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordCloudSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","word-cloud-spiral"],\r
}\r
\r
export default function WordCloudSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28},{"text":"Chart","size":22},{"text":"Insight","size":18}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const g = svg.append('g').attr('transform','translate('+(W/2)+','+(H/2)+')')\r
    let angle=0, radius=10\r
    data.forEach((d,i)=>{\r
      const placed = {x: Math.cos(angle)*radius, y: Math.sin(angle)*radius}\r
      g.append('text').attr('x',placed.x).attr('y',placed.y).attr('text-anchor','middle').attr('fill',colors[i%colors.length]).attr('font-size',d.size*0.6+'px').attr('font-weight',600).text(d.text)\r
      angle+=0.65; radius+=2.2\r
      const spiral = d3.path(); spiral.moveTo(0,0); for(let a=0;a<angle;a+=0.2) spiral.lineTo(Math.cos(a)*(10+a*1.8), Math.sin(a)*(10+a*1.8))\r
      if(i===data.length-1) g.append('path').attr('d',spiral.toString()).attr('fill','none').attr('stroke','var(--border)').attr('opacity',0.2)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};