var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'volume-profile',\r
  title: 'Volume Profile',\r
  desc: 'Volume Profile — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VolumeProfile',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","volume-profile"],\r
}\r
\r
export default function VolumeProfile({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"price":96.803,"volume":32,"timestamp":"T0"},{"price":99.052,"volume":43,"timestamp":"T1"},{"price":98.48,"volume":36,"timestamp":"T2"},{"price":100.169,"volume":41,"timestamp":"T3"},{"price":103.243,"volume":33,"timestamp":"T4"},{"price":102.566,"volume":54,"timestamp":"T5"},{"price":105.07,"volume":25,"timestamp":"T6"},{"price":104.266,"volume":35,"timestamp":"T7"},{"price":106.38,"volume":40,"timestamp":"T8"},{"price":104.769,"volume":33,"timestamp":"T9"},{"price":107.487,"volume":12,"timestamp":"T10"},{"price":106.746,"volume":11,"timestamp":"T11"},{"price":105.539,"volume":13,"timestamp":"T12"},{"price":104.847,"volume":49,"timestamp":"T13"},{"price":105.223,"volume":11,"timestamp":"T14"},{"price":103.3,"volume":52,"timestamp":"T15"},{"price":103.218,"volume":50,"timestamp":"T16"},{"price":101.535,"volume":32,"timestamp":"T17"},{"price":99.386,"volume":12,"timestamp":"T18"},{"price":99.545,"volume":39,"timestamp":"T19"},{"price":97.147,"volume":42,"timestamp":"T20"},{"price":95.544,"volume":25,"timestamp":"T21"},{"price":95.638,"volume":52,"timestamp":"T22"},{"price":93.489,"volume":20,"timestamp":"T23"},{"price":91.427,"volume":24,"timestamp":"T24"},{"price":89.508,"volume":42,"timestamp":"T25"},{"price":90.165,"volume":44,"timestamp":"T26"},{"price":89.898,"volume":14,"timestamp":"T27"},{"price":89.115,"volume":31,"timestamp":"T28"},{"price":88.476,"volume":16,"timestamp":"T29"},{"price":85.558,"volume":10,"timestamp":"T30"},{"price":86.101,"volume":34,"timestamp":"T31"},{"price":86.874,"volume":54,"timestamp":"T32"},{"price":85.514,"volume":45,"timestamp":"T33"},{"price":88.546,"volume":23,"timestamp":"T34"},{"price":88.53,"volume":18,"timestamp":"T35"},{"price":88.833,"volume":51,"timestamp":"T36"},{"price":88.669,"volume":59,"timestamp":"T37"},{"price":91.182,"volume":55,"timestamp":"T38"},{"price":92.104,"volume":38,"timestamp":"T39"},{"price":93.217,"volume":39,"timestamp":"T40"},{"price":94.641,"volume":46,"timestamp":"T41"},{"price":96.054,"volume":32,"timestamp":"T42"},{"price":99.19,"volume":44,"timestamp":"T43"},{"price":101.097,"volume":54,"timestamp":"T44"},{"price":100.796,"volume":37,"timestamp":"T45"},{"price":101.672,"volume":15,"timestamp":"T46"},{"price":104.029,"volume":25,"timestamp":"T47"},{"price":105.295,"volume":55,"timestamp":"T48"},{"price":104.038,"volume":33,"timestamp":"T49"},{"price":106.846,"volume":16,"timestamp":"T50"},{"price":107.711,"volume":18,"timestamp":"T51"},{"price":107.114,"volume":44,"timestamp":"T52"},{"price":105.623,"volume":30,"timestamp":"T53"},{"price":105.189,"volume":42,"timestamp":"T54"},{"price":105.234,"volume":20,"timestamp":"T55"},{"price":105.433,"volume":54,"timestamp":"T56"},{"price":103.653,"volume":49,"timestamp":"T57"},{"price":102.809,"volume":16,"timestamp":"T58"},{"price":103.028,"volume":28,"timestamp":"T59"},{"price":99.15,"volume":46,"timestamp":"T60"},{"price":99.619,"volume":53,"timestamp":"T61"},{"price":98.969,"volume":20,"timestamp":"T62"},{"price":96.56,"volume":34,"timestamp":"T63"},{"price":93.809,"volume":12,"timestamp":"T64"},{"price":93.921,"volume":45,"timestamp":"T65"},{"price":91.299,"volume":23,"timestamp":"T66"},{"price":90.157,"volume":11,"timestamp":"T67"},{"price":88.664,"volume":59,"timestamp":"T68"},{"price":88.73,"volume":59,"timestamp":"T69"},{"price":86.695,"volume":18,"timestamp":"T70"},{"price":87.274,"volume":24,"timestamp":"T71"},{"price":86.375,"volume":31,"timestamp":"T72"},{"price":86.265,"volume":44,"timestamp":"T73"},{"price":86.25,"volume":26,"timestamp":"T74"},{"price":88.009,"volume":26,"timestamp":"T75"},{"price":87.293,"volume":40,"timestamp":"T76"},{"price":88.137,"volume":39,"timestamp":"T77"},{"price":88.086,"volume":26,"timestamp":"T78"},{"price":89.33,"volume":26,"timestamp":"T79"},{"price":91.642,"volume":21,"timestamp":"T80"},{"price":91.463,"volume":44,"timestamp":"T81"},{"price":93.31,"volume":16,"timestamp":"T82"},{"price":94.78,"volume":12,"timestamp":"T83"},{"price":97.069,"volume":20,"timestamp":"T84"},{"price":98.271,"volume":28,"timestamp":"T85"},{"price":100.411,"volume":55,"timestamp":"T86"},{"price":102.085,"volume":31,"timestamp":"T87"},{"price":101.383,"volume":53,"timestamp":"T88"},{"price":103.636,"volume":52,"timestamp":"T89"},{"price":105.721,"volume":32,"timestamp":"T90"},{"price":104.276,"volume":40,"timestamp":"T91"},{"price":106.86,"volume":20,"timestamp":"T92"},{"price":105.994,"volume":37,"timestamp":"T93"},{"price":107.947,"volume":34,"timestamp":"T94"},{"price":107.515,"volume":52,"timestamp":"T95"},{"price":106.887,"volume":12,"timestamp":"T96"},{"price":104.368,"volume":18,"timestamp":"T97"},{"price":104.977,"volume":43,"timestamp":"T98"},{"price":104.848,"volume":59,"timestamp":"T99"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(data, d => d.price))\r
      .range([0, IW])\r
\r
    const totalVol = d3.sum(data, d => d.volume)\r
    const y = d3.scaleLinear()\r
      .domain([0, totalVol])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Aggregate by price level\r
    const priceBuckets = {}\r
    data.forEach(d => {\r
      const bucket = Math.round(d.price * 10) / 10\r
      priceBuckets[bucket] = (priceBuckets[bucket] || 0) + d.volume\r
    })\r
\r
    const sortedBuckets = Object.entries(priceBuckets)\r
      .map(([price, vol]) => ({ price: parseFloat(price), volume: vol }))\r
      .sort((a, b) => a.price - b.price)\r
\r
    // Draw horizontal volume bars\r
    sortedBuckets.forEach((bucket, i) => {\r
      const barHeight = IH / sortedBuckets.length - 0.5\r
      const barWidth = (bucket.volume / totalVol) * IW * 0.8\r
\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', IW - barWidth)\r
        .attr('y', i * (IH / sortedBuckets.length))\r
        .attr('width', barWidth)\r
        .attr('height', barHeight)\r
        .attr('fill', colors[0])\r
        .attr('opacity', 0.4 + (bucket.volume / d3.max(sortedBuckets, b => b.volume)) * 0.6)\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 0.5)\r
    })\r
\r
    // Cumulative volume curve\r
    let cumVol = 0\r
    const cumData = sortedBuckets.map(b => {\r
      cumVol += b.volume\r
      return { price: b.price, cumVol }\r
    })\r
\r
    const cumLine = d3.line()\r
      .x(d => x(d.price))\r
      .y(d => y(d.cumVol))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path')\r
      .datum(cumData)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', cumLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[1])\r
      .attr('stroke-width', 2)\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis labels\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top + IH + 30})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Price Level')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(12,\${M.top + IH / 2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Volume')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text('Volume Profile - Price/Volume Distribution')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};