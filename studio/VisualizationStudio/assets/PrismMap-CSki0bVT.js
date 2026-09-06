var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'prism-map',\r
  title: 'Prism Map',\r
  desc: 'Prism Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PrismMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","prism-map"],\r
}\r
\r
export default function PrismMap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{state:'CA',value:85},{state:'TX',value:60},{state:'NY',value:48},{state:'FL',value:38},{state:'WA',value:25},{state:'CO',value:18}]\r
    const data = Array.isArray(customData)&&customData.length&&customData[0].state?customData:DEFAULT\r
    const color=d3.scaleSequential(d3.interpolateBlues).domain([0,90])\r
    const g=svg.append('g')\r
    const baseY=212, dx=56, w=34, depth=12\r
    data.forEach((d,i)=>{\r
      const x=18+i*dx\r
      const h=d.value*1.15\r
      const topFill=color(d.value)\r
      const sideFill=d3.color(topFill).darker(0.5).toString()\r
      const frontFill=d3.color(topFill).darker(0.2).toString()\r
      const top=\`M\${x},\${baseY-h} L\${x+depth},\${baseY-h-depth} L\${x+w+depth},\${baseY-h-depth} L\${x+w},\${baseY-h} Z\`\r
      const front=\`M\${x},\${baseY-h} L\${x},\${baseY} L\${x+w},\${baseY} L\${x+w},\${baseY-h} Z\`\r
      const side=\`M\${x+w},\${baseY-h} L\${x+w+depth},\${baseY-h-depth} L\${x+w+depth},\${baseY-depth} L\${x+w},\${baseY} Z\`\r
      g.append('path').attr('d',side).attr('fill',sideFill).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
      g.append('path').attr('d',front).attr('fill',frontFill).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
      g.append('path').attr('d',top).attr('fill',topFill).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
      g.append('text').attr('x',x+w/2+depth/2).attr('y',baseY-h-depth-6).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',700).text(d.value)\r
      g.append('text').attr('x',x+w/2).attr('y',baseY+12).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','8px').text(d.state)\r
      g.append('line').attr('x1',18).attr('x2',18).attr('y1',40).attr('y2',baseY).attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Prism Map (Extruded Choropleth)')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};