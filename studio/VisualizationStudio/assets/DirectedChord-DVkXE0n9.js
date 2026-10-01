var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'directed-chord',\r
  title: 'Directed Chord',\r
  desc: 'Directed Chord — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DirectedChord',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","directed-chord"],\r
}\r
\r
export default function DirectedChord({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.DirectedChord\r
    const width = 500\r
    const height = 500\r
    const outerRadius = Math.min(width, height) / 2 - 30\r
    const innerRadius = outerRadius - 20\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const names = chartData.names\r
    const matrix = chartData.matrix\r
\r
    const color = d3.scaleOrdinal(d3.schemeTableau10).domain(names)\r
\r
    const chord = d3.chordDirected()\r
      .padAngle(0.05)\r
      .sortSubgroups(d3.descending)\r
      .sortChords(d3.descending)(matrix)\r
\r
    const arc = d3.arc()\r
      .innerRadius(innerRadius)\r
      .outerRadius(outerRadius)\r
\r
    const ribbon = d3.ribbonArrow()\r
      .radius(innerRadius - 0.5)\r
      .padAngle(1 / innerRadius)\r
\r
    // Outer arcs\r
    const g = svg.append('g')\r
\r
    g.append('g')\r
      .selectAll('path')\r
      .data(chord.groups)\r
      .join('path')\r
        .attr('d', arc)\r
        .attr('fill', d => color(names[d.index]))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 0.5)\r
\r
    // Labels\r
    g.append('g')\r
      .selectAll('text')\r
      .data(chord.groups)\r
      .join('text')\r
        .each(d => { d.angle = (d.startAngle + d.endAngle) / 2 })\r
        .attr('dy', '0.35em')\r
        .attr('transform', d => \`\r
          rotate(\${d.angle * 180 / Math.PI - 90})\r
          translate(\${outerRadius + 8})\r
          \${d.angle > Math.PI ? 'rotate(180)' : ''}\r
        \`)\r
        .attr('text-anchor', d => d.angle > Math.PI ? 'end' : 'start')\r
        .attr('fill', '#cbd5e1')\r
        .text(d => names[d.index])\r
\r
    // Ribbons (directional)\r
    g.append('g')\r
      .attr('fill-opacity', 0.7)\r
      .selectAll('path')\r
      .data(chord)\r
      .join('path')\r
        .attr('d', ribbon)\r
        .attr('fill', d => color(names[d.target.index]))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 0.5)\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};