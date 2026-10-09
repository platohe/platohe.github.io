var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'curve-bezier-xy',\r
  title: 'Curve Bezier X Y',\r
  desc: 'Curve Bezier X Y — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CurveBezierXY',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","curve-bezier-x-y"],\r
}\r
\r
export default function CurveBezierXY({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Bezier curve visualization data\r
    const DEFAULT_DATA = Array.from({ length: 5 }, (_, i) => ({\r
      id: i,\r
      points: [\r
        { x: 50 + i * 60, y: 200 },\r
        { x: 80 + i * 60, y: 100 },\r
        { x: 120 + i * 60, y: 150 },\r
        { x: 150 + i * 60, y: 80 }\r
      ],\r
      color: d3.interpolateRainbow(i / 5)\r
    }))\r
\r
    const curves = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    curves.forEach((curve) => {\r
      const line = d3.line()\r
        .x((d) => d.x)\r
        .y((d) => d.y)\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      svg.append('path')\r
        .datum(curve.points)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', curve.color)\r
        .attr('stroke-width', 2)\r
        .attr('stroke-linecap', 'round')\r
        .attr('stroke-linejoin', 'round')\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 4)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 2)\r
        })\r
\r
      // Draw control points\r
      curve.points.forEach((point, i) => {\r
        svg.append('circle')\r
          .attr('cx', point.x)\r
          .attr('cy', point.y)\r
          .attr('r', 4)\r
          .attr('fill', curve.color)\r
          .attr('opacity', 0.7)\r
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
      .text('curveBezierX & curveBezierY')\r
\r
    // Description\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 295)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '9px')\r
      .text('Custom Bezier curve interpolation variants')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};