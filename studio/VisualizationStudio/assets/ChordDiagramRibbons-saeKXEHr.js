var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// ChordDiagramRibbons: Ribbons only — outer arcs removed.\r
export const meta = {\r
  id: 'chord-diagram-ribbons',\r
  title: 'Chord Diagram Ribbons',\r
  desc: 'Chord Diagram Ribbons — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ChordDiagramRibbons',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","chord-diagram-ribbons"],\r
}\r
\r
export default function ChordDiagramRibbons({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { names: ["A","B","C","D","E","F"], matrix: [[0,20,12,8,15,9],[20,0,18,6,11,7],[12,18,0,22,5,10],[8,6,22,0,14,16],[15,11,5,14,0,19],[9,7,10,16,19,0]] }\r
    const data = (customData && customData.matrix && customData.names) ? customData : DEFAULT_DATA\r
\r
    const cx = 200, cy = 150\r
    \r
    const innerRadius = 62\r
    const tr = 'translate(' + cx + ',' + cy + ')'\r
    const chord = d3.chord().padAngle(0.05)\r
      .sortSubgroups(d3.descending)\r
    const chords = chord(data.matrix)\r
    const flat = chords.flat()\r
    const ribbon = d3.ribbon().radius(innerRadius)\r
    const color = d3.scaleOrdinal().domain(data.names)\r
      .range(['#6366f1','#f59e0b','#10b981','#ef4444','#8b5cf6'])\r
    // ribbons only — outer arcs omitted\r
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