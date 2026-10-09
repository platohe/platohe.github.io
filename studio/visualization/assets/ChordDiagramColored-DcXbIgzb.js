var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ChordDiagramColored: Full palette per group, tinted ribbons.\r
export const meta = {\r
  id: 'chord-diagram-colored',\r
  title: 'Chord Diagram Colored',\r
  desc: 'Chord Diagram Colored — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ChordDiagramColored',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","chord-diagram-colored"],\r
}\r
\r
export default function ChordDiagramColored({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { names: ["Design","Eng","QA","Docs"], matrix: [[0,35,15,20],[35,0,42,12],[15,42,0,18],[20,12,18,0]] }\r
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
      .range(colors)\r
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
    \r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};