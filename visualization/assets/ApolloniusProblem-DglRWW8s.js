var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'apollonius-problem',\r
  title: 'Apollonius Problem',\r
  desc: 'Apollonius Problem — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ApolloniusProblem',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","apollonius-problem"],\r
}\r
\r
export default function ApolloniusProblem({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove();\r
\r
    // Three circles for Apollonius problem\r
    const DEFAULT_DATA = [{"cx":120,"cy":150,"r":40,"color":"#6366f1"},{"cx":200,"cy":100,"r":30,"color":"#f59e0b"},{"cx":280,"cy":180,"r":35,"color":"#10b981"}]\r
\r
    const circles = (Array.isArray(customData) && customData.length >= 3 && customData[0]?.cx !== undefined) ? customData : DEFAULT_DATA\r
\r
    const g = svg.append('g')\r
\r
    // Draw the three given circles\r
    circles.forEach((circle, i) => {\r
      g.append('circle')\r
        .attr('cx', circle.cx)\r
        .attr('cy', circle.cy)\r
        .attr('r', circle.r)\r
        .attr('fill', circle.color)\r
        .attr('opacity', 0.3)\r
        .attr('stroke', circle.color)\r
        .attr('stroke-width', 2)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.6)\r
            .attr('stroke-width', 3)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('opacity', 0.3)\r
            .attr('stroke-width', 2)\r
        })\r
\r
      // Add center point\r
      g.append('circle')\r
        .attr('cx', circle.cx)\r
        .attr('cy', circle.cy)\r
        .attr('r', 3)\r
        .attr('fill', circle.color)\r
    })\r
\r
    // Calculate Apollonius circle (tangent to all three circles)\r
    // This is a simplified calculation - in reality would need solving Apollonius problem\r
    const c1 = circles[0]\r
    const c2 = circles[1]\r
    const c3 = circles[2]\r
\r
    // Approximate solution center\r
    const solutionX = (c1.cx + c2.cx + c3.cx) / 3\r
    const solutionY = (c1.cy + c2.cy + c3.cy) / 3\r
\r
    // Calculate distances to each circle\r
    const dist1 = Math.sqrt(Math.pow(solutionX - c1.cx, 2) + Math.pow(solutionY - c1.cy, 2))\r
    const dist2 = Math.sqrt(Math.pow(solutionX - c2.cx, 2) + Math.pow(solutionY - c2.cy, 2))\r
    const dist3 = Math.sqrt(Math.pow(solutionX - c3.cx, 2) + Math.pow(solutionY - c3.cy, 2))\r
\r
    // Solution radius (simplified)\r
    const solutionR = Math.min(\r
      dist1 - c1.r,\r
      dist2 - c2.r,\r
      dist3 - c3.r\r
    )\r
\r
    if (solutionR > 0) {\r
      // Draw Apollonius solution circle\r
      g.append('circle')\r
        .attr('cx', solutionX)\r
        .attr('cy', solutionY)\r
        .attr('r', Math.max(solutionR, 10))\r
        .attr('fill', 'none')\r
        .attr('stroke', '#ef4444')\r
        .attr('stroke-width', 3)\r
        .attr('stroke-dasharray', '8,4')\r
        .attr('opacity', 0.8)\r
\r
      // Label\r
      g.append('text')\r
        .attr('x', solutionX)\r
        .attr('y', solutionY - Math.max(solutionR, 10) - 10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', '#ef4444')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .text('Solution')\r
    }\r
\r
    // Draw tangent lines (simplified visualization)\r
    circles.forEach((circle, i) => {\r
      if (solutionR > 0) {\r
        const angle = Math.atan2(solutionY - circle.cy, solutionX - circle.cx)\r
        const tangentX = circle.cx + Math.cos(angle + Math.PI/2) * circle.r\r
        const tangentY = circle.cy + Math.sin(angle + Math.PI/2) * circle.r\r
\r
        g.append('line')\r
          .attr('x1', circle.cx)\r
          .attr('y1', circle.cy)\r
          .attr('x2', solutionX)\r
          .attr('y2', solutionY)\r
          .attr('stroke', 'var(--border)')\r
          .attr('stroke-width', 1)\r
          .attr('stroke-dasharray', '3,3')\r
          .attr('opacity', 0.5)\r
      }\r
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
      .text("Apollonius' Problem")\r
\r
    // Description\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 295)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '9px')\r
      .text('Find circle tangent to three given circles')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};