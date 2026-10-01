var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'word-frequency-rank',\r
  title: 'Word Frequency Rank',\r
  desc: 'Word Frequency Rank — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordFrequencyRank',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","word-frequency-rank"],\r
}\r
\r
export default function WordFrequencyRank({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"word":"the","rank":1,"freq":1002},{"word":"be","rank":2,"freq":573},{"word":"to","rank":3,"freq":422},{"word":"of","rank":4,"freq":333},{"word":"and","rank":5,"freq":269},{"word":"a","rank":6,"freq":239},{"word":"in","rank":7,"freq":206},{"word":"that","rank":8,"freq":192},{"word":"have","rank":9,"freq":180},{"word":"i","rank":10,"freq":158},{"word":"it","rank":11,"freq":142},{"word":"for","rank":12,"freq":145},{"word":"not","rank":13,"freq":133},{"word":"on","rank":14,"freq":117},{"word":"with","rank":15,"freq":109},{"word":"he","rank":16,"freq":109},{"word":"as","rank":17,"freq":107},{"word":"you","rank":18,"freq":101},{"word":"do","rank":19,"freq":85},{"word":"at","rank":20,"freq":90},{"word":"this","rank":21,"freq":94},{"word":"but","rank":22,"freq":75},{"word":"his","rank":23,"freq":83},{"word":"by","rank":24,"freq":69},{"word":"from","rank":25,"freq":71},{"word":"they","rank":26,"freq":65},{"word":"we","rank":27,"freq":65},{"word":"say","rank":28,"freq":75},{"word":"her","rank":29,"freq":68},{"word":"she","rank":30,"freq":56},{"word":"or","rank":31,"freq":58},{"word":"an","rank":32,"freq":69},{"word":"will","rank":33,"freq":61},{"word":"my","rank":34,"freq":66},{"word":"one","rank":35,"freq":55},{"word":"all","rank":36,"freq":56},{"word":"would","rank":37,"freq":46},{"word":"there","rank":38,"freq":45},{"word":"their","rank":39,"freq":54},{"word":"what","rank":40,"freq":54},{"word":"so","rank":41,"freq":46},{"word":"up","rank":42,"freq":53},{"word":"out","rank":43,"freq":44},{"word":"if","rank":44,"freq":45},{"word":"about","rank":45,"freq":52},{"word":"who","rank":46,"freq":54},{"word":"get","rank":47,"freq":46},{"word":"which","rank":48,"freq":39},{"word":"go","rank":49,"freq":40},{"word":"me","rank":50,"freq":40}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLog().domain([1, data.length]).range([0, IW])\r
    const y = d3.scaleLog().domain([d3.min(data, d => d.freq) * 0.5, d3.max(data, d => d.freq) * 1.5]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Zipf reference line\r
    const zipfLine = d3.line()\r
      .x(d => x(d.rank))\r
      .y(d => y(d.freq * 1.2 / (d.rank ** 0.8)))\r
      .curve(d3.curveLinear)\r
    // Actually compute zipf line from data\r
    const maxFreq = d3.max(data, d => d.freq)\r
    const zipfPoints = data.map(d => ({ rank: d.rank, freq: maxFreq / d.rank }))\r
    const zipfPath = 'M' + zipfPoints.map(d => x(d.rank) + ',' + y(d.freq)).join('L')\r
    svg.append('path').attr('d', zipfPath).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('fill', 'none').attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4').attr('opacity', 0.7)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.rank)).attr('cy', d => y(d.freq)).attr('r', 4)\r
      .attr('fill', colors[0]).attr('opacity', 0.7).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Line connecting\r
    const line = d3.line().x(d => x(d.rank)).y(d => y(d.freq)).curve(d3.curveLinear)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1).attr('opacity', 0.4)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Rank (log scale)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Frequency (log scale)')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Zipf Plot - Word Frequency')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};