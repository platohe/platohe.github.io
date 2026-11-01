var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'streamgraph-date',\r
  title: 'Streamgraph Date',\r
  desc: 'Streamgraph Date — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'StreamgraphDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["areas","streamgraph-date"],\r
}\r
\r
export default function StreamgraphDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const s1 = data.map(d=>d.value)\r
    const s2 = data.map((d,i)=>d.value*0.6+4+(i%3))\r
    const s3 = data.map((d,i)=>d.value*0.35+2)\r
    const l1=[],l2=[],l3=[]\r
    s1.forEach((v,i)=>{\r
      const base = -(s1[i]+s2[i]+s3[i])/2\r
      l1.push([base, base+v]); l2.push([base+v, base+v+s2[i]]); l3.push([base+v+s2[i], base+v+s2[i]+s3[i]])\r
    })\r
    const yMin = d3.min(l3,d=>d[0]), yMax = d3.max(l3,d=>d[1])\r
    const x = d3.scaleLinear().domain([0,n-1]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([yMin,yMax]).range([H-M.bottom,M.top])\r
    const areaGen = d3.area().x((d,i)=>x(i)).y0(d=>y(d[0])).y1(d=>y(d[1])).curve(d3.curveBasis)\r
    const g = svg.append('g')\r
    ;[l1,l2,l3].forEach((L,i)=> g.append('path').datum(L).attr('d',areaGen).attr('fill',colors[i%colors.length]).attr('opacity',0.72).attr('stroke','#fff').attr('stroke-width',0.6))\r
    g.append('text').attr('x',W/2).attr('y',M.top-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','9px').text('Streamgraph (wiggle offset)')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};