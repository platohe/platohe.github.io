var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
\r
export const meta = {\r
  id: 'tournament-bracket',\r
  title: 'Tournament Bracket',\r
  desc: 'Tournament Bracket — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TournamentBracket',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tournament-bracket"],\r
}\r
\r
export default function TournamentBracket({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = ["Eagles","Falcons","Hawks","Owls","Ravens","Sparrows","Swifts","Wrens"]\r
    const teams = (customData && Array.isArray(customData) && customData.length >= 2) ? customData : DEFAULT_DATA\r
\r
    const n = teams.length\r
    const rounds = Math.log2(n)\r
    const boxW = 86\r
    const boxH = 22\r
    const gapX = 34\r
    const startX = M.left + 4\r
\r
    const roundY = (r, m) => {\r
      const matchesInRound = n / Math.pow(2, r + 1)\r
      const span = H - M.top - M.bottom - boxH\r
      return M.top + ((m + 0.5) / matchesInRound) * span - boxH / 2\r
    }\r
\r
    for (let r = 0; r < rounds; r++) {\r
      const x0 = startX + r * (boxW + gapX)\r
      const matches = n / Math.pow(2, r + 1)\r
      for (let m = 0; m < matches; m++) {\r
        const y0 = roundY(r, m)\r
        const isFirst = r === 0\r
        const name = isFirst ? teams[m * 2] : 'TBD'\r
        const name2 = isFirst ? teams[m * 2 + 1] : ''\r
\r
        svg.append('rect')\r
          .attr('x', x0).attr('y', y0)\r
          .attr('width', boxW).attr('height', boxH).attr('rx', 4)\r
          .attr('fill', isFirst ? colors[r % colors.length] : '#f8fafc')\r
          .attr('fill-opacity', isFirst ? 0.18 : 0.5)\r
          .attr('stroke', colors[r % colors.length]).attr('stroke-width', 1.1)\r
        svg.append('text')\r
          .attr('x', x0 + 6).attr('y', y0 + 14.5)\r
          .attr('fill', 'var(--text-secondary)').attr('font-size', '9.5px')\r
          .text(name)\r
        if (name2) {\r
          svg.append('rect')\r
            .attr('x', x0).attr('y', y0 + boxH + 4)\r
            .attr('width', boxW).attr('height', boxH).attr('rx', 4)\r
            .attr('fill', colors[r % colors.length]).attr('fill-opacity', 0.18)\r
            .attr('stroke', colors[r % colors.length]).attr('stroke-width', 1.1)\r
          svg.append('text')\r
            .attr('x', x0 + 6).attr('y', y0 + boxH + 4 + 14.5)\r
            .attr('fill', 'var(--text-secondary)').attr('font-size', '9.5px')\r
            .text(name2)\r
        }\r
        if (r < rounds - 1) {\r
          const nextY = roundY(r + 1, Math.floor(m / 2))\r
          const cxNext = startX + (r + 1) * (boxW + gapX)\r
          const cx = x0 + boxW\r
          const midY = (y0 + boxH + (isFirst ? y0 + boxH * 2 + 4 : y0) / 2)\r
          const cy1 = isFirst ? y0 + boxH + 2 : y0 + boxH / 2\r
          svg.append('path')\r
            .attr('d', \`M\${cx},\${cy1} L\${cx + gapX / 2},\${cy1} L\${cx + gapX / 2},\${nextY + boxH / 2} L\${cxNext},\${nextY + boxH / 2}\`)\r
            .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 1.2)\r
        }\r
      }\r
    }\r
\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', H - 6)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text('Round 1 → Finals')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};