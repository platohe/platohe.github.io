var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'bar-race',\r
  title: 'Bar Race',\r
  desc: 'Bar Race — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'BarRace',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","bar-race"],\r
}\r
\r
export default function BarRace({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const rows = Array.isArray(customData) && customData.length > 0 ? customData : null\r
    const labels = rows\r
      ? rows.map(r => String(r.label ?? r.name ?? 'Item'))\r
      : ['A', 'B', 'C', 'D', 'E']\r
    const years = [2018, 2019, 2020, 2021, 2022]\r
    const data = {}\r
    labels.forEach((l, li) => {\r
      data[l] = {}\r
      let v = rows ? Number(rows[li]?.value ?? rows[li]?.score ?? 50) : 30 + Math.random() * 40\r
      years.forEach(y => {\r
        v = Math.max(10, Math.min(90, v + (Math.random() - 0.45) * 20))\r
        data[l][y] = Math.round(v)\r
      })\r
    })\r
    let frame = 0\r
    const x = d3.scaleLinear().domain([0, 100]).range([60, 370])\r
    const y = d3.scaleBand().domain(labels).range([20, 260]).padding(0.3)\r
    const color = d3.scaleOrdinal().domain(labels).range(colors)\r
    const bars = labels.map(l =>\r
      svg.append('rect').attr('x', 60).attr('y', y(l)).attr('width', 0).attr('height', y.bandwidth())\r
        .attr('fill', color(l)).attr('rx', 2)\r
    )\r
    const labelsG = svg.append('g')\r
    const valuesG = svg.append('g')\r
    const yearText = svg.append('text').attr('x', 370).attr('y', 15).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '18px').attr('font-weight', 700).text('2018')\r
    const timer = d3.timer(elapsed => {\r
      const yr = years[Math.min(frame, years.length - 1)]\r
      yearText.text(yr)\r
      const sorted = labels.map(l => ({ l, v: data[l][yr] })).sort((a, b) => b.v - a.v)\r
      bars.forEach((bar, i) => {\r
        const d = sorted[i]\r
        bar.transition().duration(600).ease(d3.easeCubicOut)\r
          .attr('y', y(d.l)).attr('width', x(d.v)).attr('height', y.bandwidth())\r
      })\r
      labelsG.selectAll('text').remove()\r
      labelsG.selectAll('text').data(sorted).join('text')\r
        .attr('x', 52).attr('y', d => y(d.l) + y.bandwidth() / 2).attr('dominant-baseline', 'middle').attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text)').attr('font-size', '12px').text(d => d.l)\r
      valuesG.selectAll('text').remove()\r
      valuesG.selectAll('text').data(sorted).join('text')\r
        .attr('x', d => x(d.v) + 6).attr('y', d => y(d.l) + y.bandwidth() / 2).attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d => d.v)\r
      frame = Math.min(frame + 1, years.length - 1)\r
      if (frame >= years.length - 1 && elapsed > 5000) frame = 0\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};