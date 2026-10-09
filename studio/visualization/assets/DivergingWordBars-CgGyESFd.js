var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'diverging-word-bars',\r
  title: 'Diverging Word Bars',\r
  desc: 'Diverging Word Bars — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingWordBars',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","diverging-word-bars"],\r
}\r
\r
export default function DivergingWordBars({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"word":"data","freqA":52,"freqB":34},{"word":"visualization","freqA":44,"freqB":28},{"word":"design","freqA":18,"freqB":42},{"word":"chart","freqA":38,"freqB":31},{"word":"analysis","freqA":29,"freqB":37},{"word":"insight","freqA":22,"freqB":30},{"word":"AI","freqA":41,"freqB":19},{"word":"nature","freqA":12,"freqB":40},{"word":"story","freqA":26,"freqB":33},{"word":"pattern","freqA":35,"freqB":21},{"word":"network","freqA":31,"freqB":26},{"word":"text","freqA":24,"freqB":29}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let data = DEFAULT_DATA\r
    if (Array.isArray(customData) && customData.length > 0) {\r
      const hasBoth = customData[0] && 'freqA' in customData[0] && 'freqB' in customData[0]\r
      const hasFreq = customData[0] && 'freq' in customData[0] && 'word' in customData[0]\r
      if (hasBoth) data = customData\r
      else if (hasFreq) data = customData.map(d => ({ word: d.word, freqA: d.freq, freqB: Math.round(d.freq * (0.5 + Math.random() * 0.7)) }))\r
    }\r
\r
    // sort by max freq descending for better visual\r
    data = [...data].sort((a, b) => Math.max(b.freqA, b.freqB) - Math.max(a.freqA, a.freqB)).slice(0, 12)\r
\r
    const maxVal = d3.max(data, d => Math.max(d.freqA, d.freqB)) || 1\r
    const innerH = IH - 10\r
    const y = d3.scaleBand().domain(data.map(d => d.word)).range([0, innerH]).padding(0.28)\r
    const x = d3.scaleLinear().domain([0, maxVal]).range([0, IW / 2 - 28])\r
    const cx = M.left + IW / 2\r
\r
    // grid\r
    svg.append('g')\r
      .selectAll('line')\r
      .data(d3.range(0, maxVal + 1, Math.ceil(maxVal / 4)))\r
      .join('line')\r
      .attr('x1', d => cx + x(d)).attr('x2', d => cx + x(d))\r
      .attr('y1', M.top).attr('y2', M.top + innerH)\r
      .attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3').attr('opacity', 0.5)\r
    svg.append('g')\r
      .selectAll('line')\r
      .data(d3.range(0, maxVal + 1, Math.ceil(maxVal / 4)))\r
      .join('line')\r
      .attr('x1', d => cx - x(d)).attr('x2', d => cx - x(d))\r
      .attr('y1', M.top).attr('y2', M.top + innerH)\r
      .attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3').attr('opacity', 0.5)\r
\r
    // center line\r
    svg.append('line')\r
      .attr('x1', cx).attr('x2', cx)\r
      .attr('y1', M.top).attr('y2', M.top + innerH)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1.2)\r
\r
    // bars\r
    const row = svg.append('g')\r
\r
    // left bars (freqA) — extend left from center\r
    row.selectAll('rect.left')\r
      .data(data).join('rect')\r
      .attr('x', d => cx - x(d.freqA))\r
      .attr('y', d => M.top + (y(d.word) ?? 0))\r
      .attr('width', d => x(d.freqA))\r
      .attr('height', y.bandwidth())\r
      .attr('rx', 3).attr('fill', colors[0]).attr('opacity', 0.88)\r
\r
    // right bars (freqB)\r
    row.selectAll('rect.right')\r
      .data(data).join('rect')\r
      .attr('x', cx)\r
      .attr('y', d => M.top + (y(d.word) ?? 0))\r
      .attr('width', d => x(d.freqB))\r
      .attr('height', y.bandwidth())\r
      .attr('rx', 3).attr('fill', colors[2]).attr('opacity', 0.88)\r
\r
    // lollipop dots at bar ends\r
    row.selectAll('circle.left')\r
      .data(data).join('circle')\r
      .attr('cx', d => cx - x(d.freqA))\r
      .attr('cy', d => M.top + (y(d.word) ?? 0) + y.bandwidth() / 2)\r
      .attr('r', 3.2).attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
    row.selectAll('circle.right')\r
      .data(data).join('circle')\r
      .attr('cx', d => cx + x(d.freqB))\r
      .attr('cy', d => M.top + (y(d.word) ?? 0) + y.bandwidth() / 2)\r
      .attr('r', 3.2).attr('fill', colors[2]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // word labels centered\r
    row.selectAll('text.word')\r
      .data(data).join('text')\r
      .attr('x', cx).attr('y', d => M.top + (y(d.word) ?? 0) + y.bandwidth() / 2 + 3.5)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '8.5px').attr('font-weight', 600)\r
      .text(d => d.word)\r
\r
    // value labels at bar ends (small)\r
    row.selectAll('text.valL')\r
      .data(data).join('text')\r
      .attr('x', d => cx - x(d.freqA) - 4).attr('y', d => M.top + (y(d.word) ?? 0) + y.bandwidth() / 2 + 3)\r
      .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
      .text(d => d.freqA)\r
    row.selectAll('text.valR')\r
      .data(data).join('text')\r
      .attr('x', d => cx + x(d.freqB) + 4).attr('y', d => M.top + (y(d.word) ?? 0) + y.bandwidth() / 2 + 3)\r
      .attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
      .text(d => d.freqB)\r
\r
    // legend\r
    const leg = svg.append('g')\r
    leg.append('rect').attr('x', M.left).attr('y', 6).attr('width', 10).attr('height', 10).attr('rx', 2).attr('fill', colors[0])\r
    leg.append('text').attr('x', M.left + 14).attr('y', 14).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('Corpus A')\r
    leg.append('rect').attr('x', W - M.right - 52).attr('y', 6).attr('width', 10).attr('height', 10).attr('rx', 2).attr('fill', colors[2])\r
    leg.append('text').attr('x', W - M.right - 38).attr('y', 14).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('Corpus B')\r
\r
    svg.append('text').attr('x', W / 2).attr('y', H - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('Diverging word frequency — left vs right corpus')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};