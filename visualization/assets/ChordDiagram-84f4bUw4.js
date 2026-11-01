var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'chord-diagram',\r
  title: 'Chord Diagram',\r
  desc: 'Chord Diagram — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ChordDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","chord-diagram"],\r
}\r
\r
export default function ChordDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Chord diagram data\r
    const DEFAULT_DATA = {"names":["A","B","C","D","E"],"matrix":[[0,15,10,5,20],[15,0,8,12,7],[10,8,0,18,4],[5,12,18,0,9],[20,7,4,9,0]]}\r
\r
    const data = (customData && customData.matrix) ? customData : DEFAULT_DATA\r
\r
    const centerX = 200\r
    const centerY = 150\r
    const outerRadius = 80\r
    const innerRadius = 60\r
\r
    const chord = d3.chord()\r
      .padAngle(0.05)\r
      .sortSubgroups(d3.descending)\r
\r
    const chords = chord(data.matrix)\r
\r
    const arc = d3.arc()\r
      .innerRadius(innerRadius)\r
      .outerRadius(outerRadius)\r
\r
    const ribbon = d3.ribbon()\r
      .radius(innerRadius)\r
\r
    const color = d3.scaleOrdinal()\r
      .domain(data.names)\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'])\r
\r
    // Draw arcs\r
    chords.groups.forEach((group, i) => {\r
      svg.append('path')\r
        .attr('d', arc(group))\r
        .attr('transform', \`translate(\${centerX},\${centerY})\`)\r
        .attr('fill', color(data.names[i]))\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.8)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 1)\r
        })\r
\r
      // Add labels\r
      const angle = (group.startAngle + group.endAngle) / 2\r
      const labelRadius = outerRadius + 15\r
      svg.append('text')\r
        .attr('x', centerX + Math.cos(angle) * labelRadius)\r
        .attr('y', centerY + Math.sin(angle) * labelRadius)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .text(data.names[i])\r
    })\r
\r
    // Draw ribbons\r
    chords.forEach((chordData, i) => {\r
      svg.append('path')\r
        .attr('d', ribbon(chordData))\r
        .attr('transform', \`translate(\${centerX},\${centerY})\`)\r
        .attr('fill', color(data.names[chordData.source.index]))\r
        .attr('opacity', 0.6)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.9)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.6)\r
        })\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Chord Diagram')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};