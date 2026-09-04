var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'word-cloud-vertical',\r
  title: 'Word Cloud Vertical',\r
  desc: 'Word Cloud Vertical — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordCloudVertical',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","word-cloud-vertical"],\r
}\r
\r
export default function WordCloudVertical({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":36},{"text":"Design","size":28},{"text":"Chart","size":22},{"text":"Insight","size":18}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const g = svg.append('g').attr('transform','translate('+(W/2)+','+40+')')\r
    const x = d3.scaleBand().domain(data.map(d=>d.text)).range([0,W-80])\r
    const y = d3.scaleLinear().domain([0,50]).range([H-80,0])\r
    data.forEach((d,i)=>{\r
      g.append('text').attr('x',x(d.text)+x.bandwidth()/2).attr('y',y(d.size/2)).attr('text-anchor','middle').attr('fill',colors[i%colors.length]).attr('font-size',12+d.size*0.35+'px').attr('transform','rotate(-90,'+(x(d.text)+x.bandwidth()/2)+','+y(d.size/2)+')').text(d.text)\r
    })\r
    g.append('g').attr('transform','translate(0,'+(H-80)+')').call(d3.axisBottom(x).tickSize(0)).selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};