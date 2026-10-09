var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'spark-cloud-matrix',\r
  title: 'Spark Cloud Matrix',\r
  desc: 'Spark Cloud Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SparkCloudMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spark-cloud-matrix"],\r
}\r
\r
export default function SparkCloudMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const g = svg.append('g')\r
    for(let r=0;r<2;r++) for(let c=0;c<3;c++){\r
      const x0=10+c*130, y0=20+r*130\r
      g.append('rect').attr('x',x0).attr('y',y0).attr('width',120).attr('height',110).attr('fill','none').attr('stroke','var(--border)').attr('rx',6)\r
      g.append('text').attr('x',x0+60).attr('y',y0+55).attr('text-anchor','middle').attr('fill',colors[(r*3+c)%colors.length]).attr('font-size',16+'px').text('Cloud '+(r*3+c+1))\r
      g.append('text').attr('x',x0+60).attr('y',y0+14).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','8px').text('202'+(r*3+c))\r
    }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};