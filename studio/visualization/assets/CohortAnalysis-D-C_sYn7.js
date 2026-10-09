var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'cohort-analysis',\r
  title: 'Cohort Analysis',\r
  desc: 'Cohort Analysis — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CohortAnalysis',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cohort-analysis"],\r
}\r
\r
export default function CohortAnalysis({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Cohort analysis data\r
    const DEFAULT_DATA = [{"cohort":"Cohort 1","months":[{"month":1,"retention":93.989},{"month":2,"retention":87.517},{"month":3,"retention":75.475},{"month":4,"retention":69.303},{"month":5,"retention":66.252},{"month":6,"retention":54.734}]},{"cohort":"Cohort 2","months":[{"month":1,"retention":92.268},{"month":2,"retention":80.753},{"month":3,"retention":70.345},{"month":4,"retention":66.277},{"month":5,"retention":60.501},{"month":6,"retention":46.179}]},{"cohort":"Cohort 3","months":[{"month":1,"retention":82.543},{"month":2,"retention":78.93},{"month":3,"retention":72.027},{"month":4,"retention":60.993},{"month":5,"retention":51.134},{"month":6,"retention":43.894}]},{"cohort":"Cohort 4","months":[{"month":1,"retention":84.962},{"month":2,"retention":72.292},{"month":3,"retention":60.627},{"month":4,"retention":60.488},{"month":5,"retention":47.077},{"month":6,"retention":44.685}]},{"cohort":"Cohort 5","months":[{"month":1,"retention":77.33},{"month":2,"retention":71.382},{"month":3,"retention":62.143},{"month":4,"retention":48.165},{"month":5,"retention":42.697},{"month":6,"retention":39.729}]},{"cohort":"Cohort 6","months":[{"month":1,"retention":73.27},{"month":2,"retention":58.573},{"month":3,"retention":54.123},{"month":4,"retention":42.91},{"month":5,"retention":39.805},{"month":6,"retention":30.501}]},{"cohort":"Cohort 7","months":[{"month":1,"retention":69.626},{"month":2,"retention":61.486},{"month":3,"retention":48.434},{"month":4,"retention":40.033},{"month":5,"retention":35.548},{"month":6,"retention":23.543}]},{"cohort":"Cohort 8","months":[{"month":1,"retention":62.905},{"month":2,"retention":53.964},{"month":3,"retention":41.614},{"month":4,"retention":32.413},{"month":5,"retention":27.92},{"month":6,"retention":22.958}]}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && Array.isArray(customData[0]?.months)) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 80 }\r
    const cellWidth = 40\r
    const cellHeight = 25\r
    const width = data[0].months.length * cellWidth\r
    const height = data.length * cellHeight\r
\r
    const color = d3.scaleSequential(d3.interpolateYlOrRd)\r
      .domain([0, 100])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach((cohort, i) => {\r
      // Cohort label\r
      g.append('text')\r
        .attr('x', -10)\r
        .attr('y', i * cellHeight + cellHeight / 2)\r
        .attr('text-anchor', 'end')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(cohort.cohort)\r
\r
      cohort.months.forEach((month, j) => {\r
        const cell = g.append('g')\r
          .attr('transform', \`translate(\${j * cellWidth},\${i * cellHeight})\`)\r
\r
        cell.append('rect')\r
          .attr('width', cellWidth - 2)\r
          .attr('height', cellHeight - 2)\r
          .attr('fill', color(month.retention))\r
          .attr('rx', 2)\r
          .attr('cursor', 'pointer')\r
          .on('mouseover', function() {\r
            d3.select(this)\r
              .transition()\r
              .duration(200)\r
              .attr('stroke', '#6366f1')\r
              .attr('stroke-width', 2)\r
          })\r
          .on('mouseout', function() {\r
            d3.select(this)\r
              .transition()\r
              .duration(200)\r
              .attr('stroke', 'none')\r
          })\r
\r
        // Add retention percentage for better visibility\r
        if (month.retention > 50) {\r
          cell.append('text')\r
            .attr('x', cellWidth / 2)\r
            .attr('y', cellHeight / 2)\r
            .attr('text-anchor', 'middle')\r
            .attr('dominant-baseline', 'middle')\r
            .attr('fill', 'white')\r
            .attr('font-size', '9px')\r
            .text(Math.round(month.retention))\r
        }\r
      })\r
    })\r
\r
    // Month labels\r
    const monthLabels = g.append('g')\r
      .attr('transform', \`translate(0,\${height + 15})\`)\r
\r
    data[0].months.forEach((month, j) => {\r
      monthLabels.append('text')\r
        .attr('x', j * cellWidth + cellWidth / 2)\r
        .attr('y', 0)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(\`M\${month.month}\`)\r
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
      .text('Cohort Analysis')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};