var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// ChordDiagramTrade: $B values labeled on largest ribbons.\r
export const meta = {\r
  id: 'chord-diagram-trade',\r
  title: 'Chord Diagram Trade',\r
  desc: 'Chord Diagram Trade — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ChordDiagramTrade',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","chord-diagram-trade"],\r
}\r
\r
export default function ChordDiagramTrade({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { names: ["CN","US","DE","JP"], matrix: [[0,560,210,180],[560,0,130,140],[210,130,0,90],[180,140,90,0]] }\r
    const data = (customData && customData.matrix && customData.names) ? customData : DEFAULT_DATA\r
\r
    const cx = 200, cy = 150\r
    const outerRadius = 82\r
    const innerRadius = 62\r
    const tr = 'translate(' + cx + ',' + cy + ')'\r
    const chord = d3.chord().padAngle(0.05)\r
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
        .attr('font-size','9px').attr('font-weight',600).text(data.names[i])\r
    })\r
    const maxV = Math.max(...flat.map(c=>c.source.value))\r
    flat.forEach(cd => {\r
      const si = cd.source.index\r
      svg.append('path').attr('d', ribbon(cd)).attr('transform', tr)\r
        .attr('fill', color(data.names[si]))\r
        .attr('fill-opacity', 0.55 * (0.55 + 0.45*cd.source.value/maxV))\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 0.5)\r
    })\r
    flat.sort((a,b)=>b.source.value-a.source.value).slice(0,2).forEach(c=>{\r
      const mid=((c.source.startAngle+c.source.endAngle)/2+(c.target.startAngle+c.target.endAngle)/2)/2\r
      svg.append('text').attr('x',cx+Math.cos(mid)*(innerRadius-12)).attr('y',cy+Math.sin(mid)*(innerRadius-12)).attr('text-anchor','middle').attr('font-size','8.5px').attr('fill','var(--text-secondary)').text('$'+c.source.value+'B') })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};