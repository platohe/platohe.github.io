var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'fishbone-diagram',\r
  title: 'Fishbone Diagram',\r
  desc: 'Fishbone Diagram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FishboneDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","fishbone-diagram"],\r
}\r
\r
export default function FishboneDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"problem":"Defective Product","categories":[{"name":"Methods","color":"#6366f1","causes":["SOP outdated","Training gaps","Process variance","No QC checks"]},{"name":"Machines","color":"#f59e0b","causes":["Calibration drift","Tool wear","Maintenance schedule","Capacity limits"]},{"name":"Materials","color":"#10b981","causes":["Supplier quality","Raw material specs","Batch variation","Storage conditions"]},{"name":"People","color":"#ef4444","causes":["Fatigue","Skill level","Communication","Motivation"]},{"name":"Measurement","color":"#8b5cf6","causes":["Instrument error","Sampling method","Data accuracy","Observer bias"]},{"name":"Environment","color":"#06b6d4","causes":["Temperature","Humidity","Lighting","Noise levels"]}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const spineY = IH / 2\r
    const spineStart = M.left + 30\r
    const spineEnd = M.left + IW - 90\r
    const boxWidth = 70\r
    const boxHeight = 28\r
\r
    // Main spine\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', spineStart).attr('x2', spineEnd)\r
      .attr('y1', spineY).attr('y2', spineY)\r
      .attr('stroke', 'var(--text-primary)')\r
      .attr('stroke-width', 3)\r
\r
    // Arrow head\r
    svg.append('polygon')\r
      .attr('transform', \`translate(\${M.left + spineEnd},\${M.top + spineY})\`)\r
      .attr('points', '0,0 -12,-8 -12,8')\r
      .attr('fill', 'var(--text-primary)')\r
\r
    // Problem box\r
    svg.append('rect')\r
      .attr('transform', \`translate(\${M.left + spineEnd + 10},\${M.top + spineY - boxHeight / 2})\`)\r
      .attr('width', boxWidth).attr('height', boxHeight)\r
      .attr('fill', colors[0]).attr('opacity', 0.2)\r
      .attr('stroke', colors[0]).attr('stroke-width', 2)\r
      .attr('rx', 4)\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + spineEnd + 10 + boxWidth / 2},\${M.top + spineY + 4})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 'bold')\r
      .text(data.problem)\r
\r
    // Draw categories and causes\r
    // Fit categories inside the spine so nothing overflows the right edge\r
    const categorySpacing = (spineEnd - spineStart) / (data.categories.length + 1)\r
\r
    data.categories.forEach((cat, i) => {\r
      const baseX = spineStart + categorySpacing * (i + 1)\r
      const isAbove = i % 2 === 0\r
\r
      // Main diagonal line from spine to category\r
      const catY = isAbove ? spineY - 80 : spineY + 80\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', baseX).attr('x2', baseX)\r
        .attr('y1', spineY).attr('y2', catY)\r
        .attr('stroke', cat.color).attr('stroke-width', 2).attr('stroke-opacity', 0.7)\r
\r
      // Sub-diagonals for causes\r
      const causeSpacing = 20\r
      cat.causes.forEach((cause, j) => {\r
        const causeX = baseX + (j - (cat.causes.length - 1) / 2) * causeSpacing\r
        const causeY = isAbove ? catY - 15 : catY + 15\r
\r
        // Sub-line\r
        svg.append('line')\r
          .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', baseX + (j - (cat.causes.length - 1) / 2) * causeSpacing * 0.5)\r
          .attr('x2', causeX)\r
          .attr('y1', catY)\r
          .attr('y2', causeY)\r
          .attr('stroke', cat.color).attr('stroke-width', 1).attr('stroke-opacity', 0.5)\r
\r
        // Cause label\r
        svg.append('text')\r
          .attr('transform', \`translate(\${M.left + causeX},\${M.top + causeY})\`)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', 'var(--text-secondary)')\r
          .attr('font-size', '8px')\r
          .text(cause)\r
      })\r
\r
      // Category label\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left + baseX - boxWidth / 2},\${M.top + catY - 12})\`)\r
        .attr('width', boxWidth).attr('height', 24)\r
        .attr('fill', cat.color).attr('opacity', 0.15)\r
        .attr('stroke', cat.color).attr('stroke-width', 1)\r
        .attr('rx', 3)\r
\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + baseX},\${M.top + catY + 4})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', cat.color)\r
        .attr('font-size', '10px')\r
        .attr('font-weight', 'bold')\r
        .text(cat.name)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Fishbone Diagram - Root Cause Analysis')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};