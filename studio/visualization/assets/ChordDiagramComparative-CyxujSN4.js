var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ChordDiagramComparative: 2020 vs 2021 mini chords compared.\r
const SNAPSHOTS = [{"names":["Agri","Ind","Svc"],"matrix":[[0,20,10],[20,0,34],[10,34,0]]},{"names":["Agri","Ind","Svc"],"matrix":[[0,26,18],[26,0,42],[18,42,0]]}]\r
export const meta = {\r
  id: 'chord-diagram-comparative',\r
  title: 'Chord Diagram Comparative',\r
  desc: 'Chord Diagram Comparative — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ChordDiagramComparative',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","chord-diagram-comparative"],\r
}\r
\r
export default function ChordDiagramComparative({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const panels = SNAPSHOTS.length === 2 && SNAPSHOTS[0].names.length <= 2 ? [110, 290] : [105, 295]\r
    const titles = ["2020","2021"]\r
    SNAPSHOTS.forEach((snap, p) => {\r
      const cx = panels[p], cy = 150\r
      const outerRadius = 62, innerRadius = 46\r
      const g = svg.append('g')\r
      const chord = d3.chord().padAngle(0.06).sortSubgroups(d3.descending)\r
      const chords = chord(snap.matrix)\r
      const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)\r
      const ribbon = d3.ribbon().radius(innerRadius)\r
      const color = d3.scaleOrdinal().domain(snap.names).range(colors)\r
      g.attr('transform','translate('+cx+','+cy+')')\r
      chords.groups.forEach((grp,i)=>{\r
        g.append('path').attr('d',arc(grp)).attr('fill',color(snap.names[i])).attr('stroke','var(--bg)').attr('stroke-width',2)\r
        const a=(grp.startAngle+grp.endAngle)/2\r
        g.append('text').attr('x',Math.cos(a)*(outerRadius+10)).attr('y',Math.sin(a)*(outerRadius+10))\r
          .attr('text-anchor','middle').attr('dominant-baseline','middle').attr('font-size','8px').attr('fill','var(--text-secondary)').text(snap.names[i])\r
      })\r
      chords.forEach(cd=>{ g.append('path').attr('d',ribbon(cd)).attr('fill',color(snap.names[cd.source.index])).attr('fill-opacity',0.5).attr('stroke','var(--bg)').attr('stroke-width',0.5) })\r
      svg.append('text').attr('x',cx).attr('y',26).attr('text-anchor','middle').attr('font-size','10px').attr('font-weight',700).attr('fill','var(--text-secondary)').text(titles[p])\r
    })\r
    void customData\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};