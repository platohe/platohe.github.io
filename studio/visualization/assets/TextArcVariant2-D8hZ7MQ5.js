var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'text-arc-variant2',\r
  title: 'Text Arc Variant2',\r
  desc: 'Text Arc Variant2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TextArcVariant2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","text-arc-variant2"],\r
}\r
\r
export default function TextArcVariant2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28},{"text":"Chart","size":22},{"text":"Insight","size":18}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const g = svg.append('g').attr('transform','translate('+(W/2)+','+(H/2+40)+')')\r
    const arc = d3.arc().innerRadius(80).outerRadius(80).startAngle(-Math.PI*0.7).endAngle(Math.PI*0.7)\r
    g.append('path').attr('d',arc()).attr('fill','none').attr('stroke','var(--border)').attr('id','arcPath')\r
    data.forEach((d,i)=>{\r
      const a = -Math.PI*0.6 + (i/(data.length-1))*Math.PI*1.2\r
      const x = Math.cos(a)*80, y = Math.sin(a)*80\r
      g.append('text').attr('x',x).attr('y',y).attr('text-anchor','middle').attr('fill',colors[i%colors.length]).attr('font-size',d.size*0.45+'px').attr('transform','rotate('+(a*180/Math.PI+90)+','+x+','+y+')').text(d.text)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};