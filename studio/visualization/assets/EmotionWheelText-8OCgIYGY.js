var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'emotion-wheel-text',\r
  title: 'Emotion Wheel Text',\r
  desc: 'Emotion Wheel Text — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EmotionWheelText',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","emotion-wheel-text"],\r
}\r
\r
export default function EmotionWheelText({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Joy","size":30},{"text":"Trust","size":24},{"text":"Fear","size":20},{"text":"Surprise","size":22},{"text":"Sadness","size":18},{"text":"Disgust","size":16},{"text":"Anger","size":20},{"text":"Anticipation","size":26}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const g = svg.append('g').attr('transform','translate('+(W/2)+','+(H/2)+')')\r
    const arc = d3.arc().innerRadius(50).outerRadius(90)\r
    const pie = d3.pie().value(d=>d.size).sort(null)\r
    const arcs = pie(data)\r
    arcs.forEach((a,i)=>{ g.append('path').attr('d',arc(a)).attr('fill',colors[i%colors.length]).attr('stroke','#fff'); const [x,y]=arc.centroid(a); g.append('text').attr('x',x).attr('y',y).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','8px').text(a.data.text.slice(0,5)) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};