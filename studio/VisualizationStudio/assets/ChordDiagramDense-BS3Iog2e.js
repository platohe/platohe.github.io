var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// ChordDiagramDense: Nine languages, translucent overlap.\r
export const meta = {\r
  id: 'chord-diagram-dense',\r
  title: 'Chord Diagram Dense',\r
  desc: 'Chord Diagram Dense — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ChordDiagramDense',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","chord-diagram-dense"],\r
}\r
\r
export default function ChordDiagramDense({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { names: ["JS","Py","Go","Rust","Java","C#","Ruby","TS","Kt"], matrix: [[0,30,12,8,20,15,9,44,18],[30,0,22,14,26,12,17,20,24],[12,22,0,30,10,8,6,14,20],[8,14,30,0,12,10,4,18,12],[20,26,10,12,0,32,22,16,14],[15,12,8,10,32,0,18,13,9],[9,17,6,4,22,18,0,10,16],[44,20,14,18,16,13,10,0,38],[18,24,20,12,14,9,16,38,0]] }\r
    const data = (customData && customData.matrix && customData.names) ? customData : DEFAULT_DATA\r
\r
    const cx = 200, cy = 150\r
    const outerRadius = 82\r
    const innerRadius = 62\r
    const tr = 'translate(' + cx + ',' + cy + ')'\r
    const chord = d3.chord().padAngle(0.02)\r
      .sortSubgroups(d3.descending)\r
    const chords = chord(data.matrix)\r
    const flat = chords.flat()\r
    const ribbon = d3.ribbon().radius(innerRadius)\r
    const color = d3.scaleOrdinal().domain(data.names)\r
      .range(['#6366f1','#f59e0b','#10b981','#ef4444','#8b5cf6'])\r
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)\r
    chords.groups.forEach((group, i) => {\r
      svg.append('path').attr('d', arc(group)).attr('transform', tr)\r
        .attr('fill', color(data.names[i])).attr('fill-opacity', 0.9)\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
      const ang = (group.startAngle + group.endAngle) / 2\r
      const lr = outerRadius + 14\r
      svg.append('text').attr('x', cx + Math.cos(ang)*lr).attr('y', cy + Math.sin(ang)*lr)\r
        .attr('text-anchor', Math.cos(ang) > 0 ? 'start' : 'end')\r
        .attr('dominant-baseline','middle').attr('fill','var(--text-secondary)')\r
        .attr('font-size','7.5px').attr('font-weight',600).text(data.names[i])\r
    })\r
    const maxV = Math.max(...flat.map(c=>c.source.value))\r
    flat.forEach(cd => {\r
      const si = cd.source.index\r
      svg.append('path').attr('d', ribbon(cd)).attr('transform', tr)\r
        .attr('fill', color(data.names[si]))\r
        .attr('fill-opacity', 0.35 * (0.55 + 0.45*cd.source.value/maxV))\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 0.5)\r
    })\r
    \r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};