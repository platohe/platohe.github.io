var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'marey-train',\r
  title: 'Marey Train',\r
  desc: 'Marey Train — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MareyTrain',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","marey-train"],\r
}\r
\r
export default function MareyTrain({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"stations":[{"name":"Paris","km":0},{"name":"Versailles","km":18},{"name":"Rambouillet","km":54},{"name":"Chartres","km":89}],"trains":[{"id":"Express A","times":[360,385,415,440],"type":"express"},{"id":"Local B","times":[390,428,470,510],"type":"local"},{"id":"Express C","times":[420,445,476,500],"type":"express"},{"id":"Local D","times":[450,492,540,580],"type":"local"},{"id":"Express E","times":[480,506,536,560],"type":"express"}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.stations && customData.trains) ? customData : DEFAULT_DATA\r
    const { stations, trains } = config\r
\r
    const margin = { top: 38, right: 55, bottom: 25, left: 70 }\r
    const iW = W - margin.left - margin.right\r
    const iH = H - margin.top - margin.bottom\r
\r
    const tMin = d3.min(trains, t => d3.min(t.times))\r
    const tMax = d3.max(trains, t => d3.max(t.times))\r
\r
    const x = d3.scaleLinear().domain([tMin, tMax]).range([0, iW])\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(stations, s => s.km)])\r
      .range([0, iH])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Station horizontal lines\r
    stations.forEach(s => {\r
      g.append('line')\r
        .attr('x1', 0).attr('x2', iW)\r
        .attr('y1', y(s.km)).attr('y2', y(s.km))\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-opacity', 0.5)\r
\r
      g.append('text')\r
        .attr('x', -6).attr('y', y(s.km) + 3)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '7.5px').attr('font-weight', '500')\r
        .text(s.name)\r
    })\r
\r
    // Time axis\r
    g.append('g').attr('transform', \`translate(0,\${iH})\`)\r
      .call(d3.axisBottom(x).tickFormat(d => {\r
        const h = Math.floor(d / 60)\r
        const m = String(d % 60).padStart(2, '0')\r
        return \`\${h}:\${m}\`\r
      }).ticks(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px'))\r
\r
    // Train lines\r
    trains.forEach(train => {\r
      const pts = train.times.map((t, i) => [x(t), y(stations[i].km)])\r
      const isExpress = train.type === 'express'\r
\r
      g.append('path')\r
        .attr('d', d3.line()(pts))\r
        .attr('fill', 'none')\r
        .attr('stroke', isExpress ? '#38bdf8' : '#f59e0b')\r
        .attr('stroke-width', isExpress ? 2 : 1.2)\r
        .attr('stroke-dasharray', isExpress ? 'none' : '3,2')\r
\r
      // Terminal label\r
      const last = pts[pts.length - 1]\r
      g.append('text')\r
        .attr('x', last[0] + 4).attr('y', last[1] + 3)\r
        .attr('fill', isExpress ? '#38bdf8' : '#f59e0b')\r
        .attr('font-size', '6px').attr('font-weight', '600')\r
        .text(train.id)\r
    })\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', \`translate(\${W - 140}, 14)\`)\r
    legG.append('line').attr('x1', 0).attr('x2', 14).attr('y1', 0).attr('y2', 0).attr('stroke', '#38bdf8').attr('stroke-width', 2)\r
    legG.append('text').attr('x', 18).attr('y', 3).attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px').text('Express')\r
    legG.append('line').attr('x1', 55).attr('x2', 69).attr('y1', 0).attr('y2', 0).attr('stroke', '#f59e0b').attr('stroke-width', 1.5).attr('stroke-dasharray', '3,2')\r
    legG.append('text').attr('x', 73).attr('y', 3).attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px').text('Local')\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text("Marey's Train Schedule (Space–Time Diagram)")\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};