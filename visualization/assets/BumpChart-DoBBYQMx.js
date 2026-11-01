var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bump-chart',\r
  title: 'Bump Chart',\r
  desc: 'Bump Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BumpChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bump-chart"],\r
}\r
\r
export default function BumpChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"JavaScript","ranks":[1,1,1,1,1]},{"name":"Python","ranks":[4,3,2,2,2]},{"name":"TypeScript","ranks":[6,5,4,3,3]},{"name":"Java","ranks":[2,2,3,4,4]},{"name":"C++","ranks":[3,4,5,5,5]},{"name":"Rust","ranks":[8,7,6,6,6]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    // Support both old format ({round, A, B, ...}) and new format ({name, ranks: [...]})\r
    let participants\r
    let rounds\r
    let rowData\r
\r
    if (d[0] && Array.isArray(d[0].ranks)) {\r
      // New format: { name, ranks: [...] }\r
      participants = d.map(row => row.name)\r
      rounds = d[0].ranks.map((_, i) => \`Period \${i + 1}\`)\r
      rowData = d\r
    } else {\r
      // Old format: { round, A, B, C, ... }\r
      rounds = d.map(row => row.round)\r
      participants = d.length > 0 ? Object.keys(d[0]).filter(k => k !== 'round') : ['A', 'B', 'C', 'D', 'E']\r
      rowData = d\r
    }\r
\r
    const nRounds = rounds.length\r
\r
    const x = d3.scalePoint().domain(rounds).range([0, IW]).padding(0.5)\r
    const y = d3.scaleLinear().domain([1, nRounds + 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(nRounds).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    const participantColors = colors.slice(0, participants.length)\r
\r
    participants.forEach((p, pi) => {\r
      let points\r
      if (Array.isArray(rowData[0].ranks)) {\r
        // New format: extract rank for participant p at each round\r
        points = rounds.map((_, i) => ({\r
          round: rounds[i],\r
          rank: rowData[i].ranks ? rowData[i].ranks[participants.indexOf(p)] : null\r
        }))\r
      } else {\r
        // Old format\r
        points = rowData.map(row => ({ round: row.round, rank: row[p] }))\r
      }\r
\r
      // Only draw if ranks are valid\r
      const validPoints = points.filter(pp => pp.rank > 0 && pp.rank <= nRounds + 1)\r
      if (validPoints.length < 2) return\r
\r
      const line = d3.line()\r
        .x(dd => M.left + x(dd.round))\r
        .y(dd => M.top + y(dd.rank))\r
        .curve(d3.curveMonotoneX)\r
\r
      svg.append('path').datum(validPoints).attr('d', line)\r
        .attr('fill', 'none').attr('stroke', participantColors[pi]).attr('stroke-width', 2.5).attr('opacity', 0.8)\r
\r
      validPoints.forEach(vp => {\r
        svg.append('circle').attr('cx', M.left + x(vp.round)).attr('cy', M.top + y(vp.rank)).attr('r', 5)\r
          .attr('fill', participantColors[pi]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
        svg.append('text').attr('x', M.left + x(vp.round) + 10).attr('y', M.top + y(vp.rank) + 4)\r
          .attr('fill', participantColors[pi]).attr('font-size', '10px').attr('font-weight', 'bold').text(vp.rank)\r
      })\r
    })\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Time Period')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Bump Chart (Rankings Over Time)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};