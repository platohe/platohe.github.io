var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'john-snow-map',\r
  title: 'John Snow Map',\r
  desc: 'John Snow Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'JohnSnowMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","john-snow-map"],\r
}\r
\r
export default function JohnSnowMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"pumps":[{"name":"Broad Street (Contaminated)","x":200,"y":155,"contaminated":true},{"name":"Rupert St Pump","x":80,"y":80,"contaminated":false},{"name":"Warwick St Pump","x":90,"y":220,"contaminated":false},{"name":"Great Marlborough Pump","x":310,"y":85,"contaminated":false},{"name":"Dean St Pump","x":330,"y":230,"contaminated":false}],"deaths":[{"x":195,"y":150,"count":18},{"x":205,"y":152,"count":15},{"x":198,"y":162,"count":12},{"x":210,"y":145,"count":10},{"x":185,"y":155,"count":14},{"x":190,"y":140,"count":8},{"x":215,"y":165,"count":9},{"x":220,"y":150,"count":7},{"x":175,"y":160,"count":6},{"x":180,"y":130,"count":5},{"x":230,"y":140,"count":4},{"x":160,"y":170,"count":3},{"x":240,"y":180,"count":2},{"x":140,"y":120,"count":1},{"x":270,"y":130,"count":2},{"x":130,"y":200,"count":1},{"x":290,"y":190,"count":1}],"streets":[[[50,60],[350,75]],[[50,140],[350,150]],[[50,210],[350,220]],[[70,40],[90,250]],[[150,40],[170,250]],[[200,40],[200,250]],[[260,40],[270,250]],[[320,40],[330,250]]]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.pumps && customData.deaths)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const g = svg.append('g')\r
\r
    // Draw Soho London 1854 street network\r
    const streets = data.streets || DEFAULT_DATA.streets\r
    streets.forEach(st => {\r
      g.append('line')\r
        .attr('x1', st[0][0])\r
        .attr('y1', st[0][1])\r
        .attr('x2', st[1][0])\r
        .attr('y2', st[1][1])\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 2.5)\r
        .attr('stroke-opacity', 0.45)\r
    })\r
\r
    // Draw Cholera Deaths bars (Black stacked ticks)\r
    data.deaths.forEach(d => {\r
      for (let i = 0; i < d.count; i++) {\r
        g.append('rect')\r
          .attr('x', d.x - 3)\r
          .attr('y', d.y - (i * 2.2))\r
          .attr('width', 6)\r
          .attr('height', 1.8)\r
          .attr('fill', '#ef4444')\r
          .attr('rx', 0.5)\r
      }\r
    })\r
\r
    // Draw Water Pumps\r
    data.pumps.forEach(p => {\r
      if (p.contaminated) {\r
        // Highlight broad street pump\r
        g.append('circle')\r
          .attr('cx', p.x)\r
          .attr('cy', p.y)\r
          .attr('r', 10)\r
          .attr('fill', 'none')\r
          .attr('stroke', '#38bdf8')\r
          .attr('stroke-width', 1.5)\r
          .attr('stroke-dasharray', '2,2')\r
      }\r
\r
      g.append('circle')\r
        .attr('cx', p.x)\r
        .attr('cy', p.y)\r
        .attr('r', 4.5)\r
        .attr('fill', p.contaminated ? '#38bdf8' : '#64748b')\r
        .attr('stroke', '#ffffff')\r
        .attr('stroke-width', 1.2)\r
\r
      g.append('text')\r
        .attr('x', p.x)\r
        .attr('y', p.y + 12)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', p.contaminated ? '#38bdf8' : 'var(--text-secondary)')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', p.contaminated ? '700' : '500')\r
        .text(p.name)\r
    })\r
\r
    // Legend & Notes\r
    const legG = svg.append('g').attr('transform', \`translate(\${width - 150}, 14)\`)\r
    legG.append('rect').attr('x', 0).attr('y', 0).attr('width', 6).attr('height', 6).attr('fill', '#ef4444')\r
    legG.append('text').attr('x', 10).attr('y', 5.5).attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px').text('Cholera Death Cluster')\r
\r
    legG.append('circle').attr('cx', 3).attr('cy', 15).attr('r', 3).attr('fill', '#38bdf8')\r
    legG.append('text').attr('x', 10).attr('y', 17.5).attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px').text('Broad St Water Pump')\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('John Snow 1854 Broad St Cholera Map')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};