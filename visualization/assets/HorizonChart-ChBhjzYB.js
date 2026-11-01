var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'horizon-chart',\r
  title: 'Horizon Chart',\r
  desc: 'Horizon Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-chart"],\r
}\r
\r
export default function HorizonChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"key":"A","data":[15,35,65,45,85,30]},{"key":"B","data":[20,-10,40,-30,50,25]},{"key":"C","data":[-15,25,-45,65,-20,40]}]\r
\r
    let datasets = DEFAULT_DATA\r
    if (customData && Array.isArray(customData) && customData.length > 0) {\r
      if (customData[0].data && Array.isArray(customData[0].data)) {\r
        datasets = customData\r
      } else {\r
        datasets = [{ key: 'Series 1', data: customData.map((d) => Number(d.value || d.y || d) || 0) }]\r
      }\r
    }\r
\r
    const bandH = 65\r
\r
    datasets.forEach((ds, di) => {\r
      const yBase = 20 + di * (bandH + 15)\r
      const x = d3.scaleLinear().domain([0, ds.data.length - 1]).range([50, 360])\r
      const y = d3.scaleLinear().domain([-100, 100]).range([yBase + bandH, yBase])\r
\r
      ds.data.forEach((v, i) => {\r
        const c = v >= 0 ? '#f87171' : '#60a5fa'\r
        const h = Math.abs(y(v) - y(0))\r
        svg.append('rect')\r
          .attr('x', x(i))\r
          .attr('y', v >= 0 ? y(0) - h : y(0))\r
          .attr('width', Math.max(2, (310 / ds.data.length) - 2))\r
          .attr('height', Math.max(h, 2))\r
          .attr('fill', c)\r
          .attr('opacity', 0.8)\r
          .attr('rx', 1)\r
      })\r
\r
      svg.append('line')\r
        .attr('x1', 50).attr('x2', 360).attr('y1', y(0)).attr('y2', y(0))\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
\r
      svg.append('text')\r
        .attr('x', 40).attr('y', y(0))\r
        .attr('dominant-baseline', 'middle').attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(ds.key || \`S\${di+1}\`)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};