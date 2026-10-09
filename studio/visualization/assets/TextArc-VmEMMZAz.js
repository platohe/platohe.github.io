var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'text-arc',\r
  title: 'Text Arc',\r
  desc: 'Text Arc — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TextArc',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","text-arc"],\r
}\r
\r
export default function TextArc({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let text = 'data visualization is powerful data science is beautiful machine learning learns patterns data reveals insight patterns drive decisions visualization helps understanding'\r
    if (typeof customData === 'string') text = customData\r
    else if (Array.isArray(customData) && typeof customData[0] === 'string') text = customData.join(' ')\r
    else if (customData?.text) text = customData.text\r
\r
    const words = text.split(/\\s+/).filter(Boolean)\r
    const n = words.length\r
    const baselineY = H - M.bottom - 12\r
    const x = d3.scaleLinear().domain([0, Math.max(n - 1, 1)]).range([M.left, W - M.right])\r
\r
    // counts for color\r
    const counts = {}\r
    words.forEach(w => { const k = w.toLowerCase(); counts[k] = (counts[k] || 0) + 1 })\r
    const repeated = new Set(Object.entries(counts).filter(([, c]) => c >= 2).map(([k]) => k))\r
    const uniqRepeated = [...repeated]\r
    const col = d3.scaleOrdinal(colors).domain(uniqRepeated)\r
\r
    // baseline\r
    svg.append('line').attr('x1', M.left).attr('x2', W - M.right).attr('y1', baselineY).attr('y2', baselineY)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1.2)\r
\r
    // arcs for each repetition pair\r
    const pairs = []\r
    const posByWord = {}\r
    words.forEach((w, i) => {\r
      const k = w.toLowerCase()\r
      if (!repeated.has(k)) return\r
      if (!posByWord[k]) posByWord[k] = []\r
      posByWord[k].push(i)\r
    })\r
    Object.entries(posByWord).forEach(([k, arr]) => {\r
      for (let i = 0; i < arr.length; i++) for (let j = i + 1; j < arr.length; j++) pairs.push({ word: k, a: arr[i], b: arr[j] })\r
    })\r
\r
    // sort by span descending so small arcs on top\r
    pairs.sort((a, b) => Math.abs(b.b - b.a) - Math.abs(a.b - a.a))\r
\r
    pairs.forEach(p => {\r
      const x1 = x(p.a), x2 = x(p.b)\r
      const dx = Math.abs(x2 - x1)\r
      const r = dx / 2\r
      const h = Math.min(90, r * 0.9)\r
      // upper arc via quadratic\r
      const mx = (x1 + x2) / 2\r
      const my = baselineY - h\r
      svg.append('path')\r
        .attr('d', \`M\${x1},\${baselineY} Q\${mx},\${my} \${x2},\${baselineY}\`)\r
        .attr('fill', 'none').attr('stroke', col(p.word)).attr('stroke-width', 1.2).attr('opacity', 0.45)\r
    })\r
\r
    // word labels on baseline\r
    const labelG = svg.append('g')\r
    words.forEach((w, i) => {\r
      const isRep = repeated.has(w.toLowerCase())\r
      labelG.append('text')\r
        .attr('x', x(i)).attr('y', baselineY + 10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', isRep ? col(w.toLowerCase()) : 'var(--text-secondary)')\r
        .attr('font-size', isRep ? '8.5px' : '7.5px')\r
        .attr('font-weight', isRep ? 700 : 400)\r
        .text(w.length > 12 ? w.slice(0, 11) + '…' : w)\r
    })\r
\r
    // little ticks at each word\r
    words.forEach((w, i) => {\r
      svg.append('line').attr('x1', x(i)).attr('x2', x(i)).attr('y1', baselineY).attr('y2', baselineY - 3)\r
        .attr('stroke', repeated.has(w.toLowerCase()) ? col(w.toLowerCase()) : 'var(--border)').attr('stroke-width', 1)\r
    })\r
\r
    svg.append('text').attr('x', W / 2).attr('y', 14).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 700).text('TextArc: Repetition Rings')\r
    svg.append('text').attr('x', W / 2).attr('y', H - 4).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('Arcs connect repeated words — color = word identity')\r
\r
    // legend for repeated words (max 4)\r
    const leg = svg.append('g')\r
    uniqRepeated.slice(0, 4).forEach((w, i) => {\r
      const lx = M.left + i * 90\r
      leg.append('circle').attr('cx', lx + 5).attr('cy', 26).attr('r', 4).attr('fill', col(w))\r
      leg.append('text').attr('x', lx + 12).attr('y', 29).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text(w)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};