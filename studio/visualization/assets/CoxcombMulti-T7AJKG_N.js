var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'coxcomb-multi',\r
  title: 'Coxcomb Multi',\r
  desc: 'Coxcomb Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CoxcombMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","coxcomb-multi"],\r
}\r
\r
export default function CoxcombMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const months=['J','F','M','A','M','J','J','A','S','O','N','D']\r
    const gen = () => [{"year":2022,"month":"J","v":28.831},{"year":2022,"month":"F","v":24.552},{"year":2022,"month":"M","v":35.869},{"year":2022,"month":"A","v":30.753},{"year":2022,"month":"M","v":16.895},{"year":2022,"month":"J","v":26.745},{"year":2022,"month":"J","v":33.65},{"year":2022,"month":"A","v":43.493},{"year":2022,"month":"S","v":36.233},{"year":2022,"month":"O","v":25.225},{"year":2022,"month":"N","v":18.998},{"year":2022,"month":"D","v":36.698},{"year":2023,"month":"J","v":32.881},{"year":2023,"month":"F","v":20.596},{"year":2023,"month":"M","v":17.523},{"year":2023,"month":"A","v":26.02},{"year":2023,"month":"M","v":31.225},{"year":2023,"month":"J","v":29.097},{"year":2023,"month":"J","v":26.108},{"year":2023,"month":"A","v":39.182},{"year":2023,"month":"S","v":35.445},{"year":2023,"month":"O","v":13.434},{"year":2023,"month":"N","v":28.585},{"year":2023,"month":"D","v":12.883},{"year":2024,"month":"J","v":19.475},{"year":2024,"month":"F","v":13.73},{"year":2024,"month":"M","v":17.199},{"year":2024,"month":"A","v":33.939},{"year":2024,"month":"M","v":26.849},{"year":2024,"month":"J","v":12.759},{"year":2024,"month":"J","v":30.844},{"year":2024,"month":"A","v":49.595},{"year":2024,"month":"S","v":25.657},{"year":2024,"month":"O","v":34.653},{"year":2024,"month":"N","v":20.945},{"year":2024,"month":"D","v":24.597}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].year?customData:gen()\r
    const g=svg.append('g').attr('transform','translate(200,148)')\r
    const angle=d3.scaleBand().domain(months).range([0,Math.PI*2]).padding(0.08)\r
    // Derive years from data\r
    const years=d3.sort([...new Set(data.map(d=>d.year))]).map(String)\r
    const byYear=d3.group(data,d=>d.year)\r
    const r=d3.scaleLinear().domain([0,50]).range([0,66])\r
    const col=d3.scaleOrdinal(d3.schemeTableau10).domain(years)\r
    // concentric coxcombs per year with radius offset\r
    years.forEach((y, yi)=>{\r
      const vals=byYear.get(Number(y))||byYear.get(y)||[]\r
      const inner= yi*6\r
      vals.forEach(d=>{\r
        const a0=angle(d.month)??0, a1=a0+angle.bandwidth()\r
        const rr=r(d.v)\r
        const path=d3.arc().innerRadius(inner).outerRadius(inner+rr/3+10).startAngle(a0).endAngle(a1)()\r
        svg.select('g').append('path').attr('d',path).attr('fill',col(y)).attr('fill-opacity',0.7-yi*0.12).attr('stroke','var(--bg)').attr('stroke-width',0.7)\r
      })\r
    })\r
    months.forEach(m=>{\r
      const a=(angle(m)??0)+angle.bandwidth()/2\r
      svg.select('g').append('text').attr('x',Math.sin(a)*78).attr('y',-Math.cos(a)*78+4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(m)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Coxcomb (Multi-Year)')\r
    years.forEach((y,i)=>{ svg.append('rect').attr('x', 18+i*52).attr('y',252).attr('width',8).attr('height',8).attr('fill',col(y)).attr('rx',2)\r
      svg.append('text').attr('x',28+i*52).attr('y',259).attr('fill','var(--text-secondary)').attr('font-size','7px').text(y) })\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};