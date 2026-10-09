var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'comparison-cloud-matrix',\r
  title: 'Comparison Cloud Matrix',\r
  desc: 'Comparison Cloud Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ComparisonCloudMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","comparison-cloud-matrix"],\r
}\r
\r
export default function ComparisonCloudMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const g = svg.append('g')\r
    const cells = [[20,20],[210,20],[20,160],[210,160]]\r
    cells.forEach((pos,i)=>{\r
      const cg = g.append('g').attr('transform','translate('+pos[0]+','+pos[1]+')')\r
      cg.append('rect').attr('width',170).attr('height',110).attr('fill','none').attr('stroke','var(--border)').attr('rx',6)\r
      cg.append('text').attr('x',85).attr('y',55).attr('text-anchor','middle').attr('fill',colors[i%colors.length]).attr('font-size',18+i*2+'px').text(['Data','Viz','Design','Insight'][i])\r
      cg.append('text').attr('x',85).attr('y',75).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','9px').text('corpus '+(i+1))\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};