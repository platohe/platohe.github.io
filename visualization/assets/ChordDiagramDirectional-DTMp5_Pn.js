var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// ChordDiagramDirectional: Asymmetric flows; opacity encodes direction strength.\r
export const meta = {\r
  id: 'chord-diagram-directional',\r
  title: 'Chord Diagram Directional',\r
  desc: 'Chord Diagram Directional — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ChordDiagramDirectional',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","chord-diagram-directional"],\r
}\r
\r
export default function ChordDiagramDirectional({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { names: ["Farm","Factory","Port","Market"], matrix: [[0,90,10,5],[20,0,85,10],[5,15,0,95],[60,8,12,0]] }\r
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
    \r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};