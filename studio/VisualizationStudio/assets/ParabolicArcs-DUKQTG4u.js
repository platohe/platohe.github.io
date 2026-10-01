var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'parabolic-arcs',\r
  title: 'Parabolic Arcs',\r
  desc: 'Parabolic Arcs — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ParabolicArcs',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","parabolic-arcs"],\r
}\r
\r
export default function ParabolicArcs({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = Array.from({ length: 8 }, (_, i) => ({\r
      id: i,\r
      startX: 50 + i * 40,\r
      startY: 250,\r
      endX: 150 + i * 30,\r
      endY: 50,\r
      controlY: 150 - i * 5,\r
      color: d3.interpolateRainbow(i / 8)\r
    }))\r
\r
    const arcs = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const g = svg.append('g')\r
\r
    arcs.forEach((arc, i) => {\r
      const midX = (arc.startX + arc.endX) / 2\r
      const midY = (arc.startY + arc.endY) / 2\r
      const height = Math.abs(midY - (arc.controlY ?? midY))\r
      const controlX = midX\r
      const controlY = (arc.controlY !== undefined) ? arc.controlY : midY - height\r
\r
      const path = d3.path()\r
      path.moveTo(arc.startX, arc.startY)\r
      path.quadraticCurveTo(controlX, controlY, arc.endX, arc.endY)\r
\r
      g.append('path')\r
        .attr('d', path.toString())\r
        .attr('fill', 'none')\r
        .attr('stroke', arc.color)\r
        .attr('stroke-width', 2)\r
        .attr('stroke-opacity', 0.8)\r
        .attr('stroke-dasharray', '5,3')\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this).transition().duration(200)\r
            .attr('stroke-width', 4).attr('stroke-opacity', 1).attr('stroke-dasharray', 'none')\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this).transition().duration(200)\r
            .attr('stroke-width', 2).attr('stroke-opacity', 0.8).attr('stroke-dasharray', '5,3')\r
        })\r
\r
      g.append('circle')\r
        .attr('cx', controlX).attr('cy', controlY).attr('r', 4)\r
        .attr('fill', arc.color).attr('opacity', 0.5)\r
\r
      g.append('circle')\r
        .attr('cx', arc.startX).attr('cy', arc.startY).attr('r', 4)\r
        .attr('fill', arc.color)\r
\r
      g.append('circle')\r
        .attr('cx', arc.endX).attr('cy', arc.endY).attr('r', 4)\r
        .attr('fill', arc.color)\r
    })\r
\r
    // Draw axes\r
    g.append('line').attr('x1', 30).attr('y1', 270).attr('x2', 370).attr('y2', 270)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
    g.append('line').attr('x1', 30).attr('y1', 30).attr('x2', 30).attr('y2', 270)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
\r
    g.append('text').attr('x', 200).attr('y', 290).attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('X')\r
    g.append('text').attr('x', 20).attr('y', 150).attr('text-anchor', 'middle')\r
      .attr('transform', 'rotate(-90, 20, 150)')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Y')\r
\r
    svg.append('text').attr('x', 200).attr('y', 20).attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)').attr('font-size', '14px').attr('font-weight', 600)\r
      .text('Parabolic Arcs')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};