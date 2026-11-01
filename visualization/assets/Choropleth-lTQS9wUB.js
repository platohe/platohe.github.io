var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'choropleth',\r
  title: 'Choropleth',\r
  desc: 'Choropleth — a maps chart visualization',\r
  category: 'Maps',\r
  component: 'Choropleth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["maps","choropleth"],\r
}\r
\r
export default function Choropleth({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Simplified US-like regions\r
    const DEFAULT_DATA = [{"id":"NW","name":"NW","points":[[30,30],[80,25],[90,70],[40,80]]},{"id":"SW","name":"SW","points":[[30,80],[90,70],[100,130],[40,140]]},{"id":"MW","name":"MW","points":[[90,25],[150,20],[160,80],[100,70]]},{"id":"SE","name":"SE","points":[[90,70],[160,80],[170,140],[100,130]]},{"id":"NE","name":"NE","points":[[150,20],[210,15],[220,75],[160,80]]},{"id":"C","name":"C","points":[[100,70],[160,80],[170,140],[110,150]]},{"id":"W","name":"W","points":[[210,15],[260,10],[270,80],[220,75]]},{"id":"S","name":"S","points":[[170,140],[220,75],[230,160],[180,170]]}]\r
    const regions = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const values = { NW: 45, SW: 72, MW: 58, SE: 85, NE: 35, C: 63, W: 78, S: 50 }\r
\r
    const color = d3.scaleSequential(d3.interpolateBlues)\r
      .domain([d3.min(Object.values(values)), d3.max(Object.values(values))])\r
\r
    const path = d3.line()\r
      .x((d) => d[0])\r
      .y((d) => d[1])\r
      .curve(d3.curveCatmullRom.alpha(0.3))\r
\r
    regions.forEach((r) => {\r
      svg.append('path')\r
        .attr('d', path(r.points) + 'Z')\r
        .attr('fill', color(values[r.id]))\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1.5)\r
\r
      const cx = d3.mean(r.points, (d) => d[0])\r
      const cy = d3.mean(r.points, (d) => d[1])\r
      svg.append('text')\r
        .attr('x', cx).attr('y', cy + 4)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'white').attr('font-size', '12px').attr('font-weight', 700)\r
        .text(values[r.id])\r
    })\r
\r
    // Legend\r
    const gradW = 120, gradH = 8\r
    const grad = svg.append('defs').append('linearGradient').attr('id', 'clGrad')\r
      .attr('x1', '0%').attr('x2', '100%').attr('y1', '0%').attr('y2', '0%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', color(35))\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', color(85))\r
\r
    svg.append('rect').attr('x', 280).attr('y', 270).attr('width', gradW).attr('height', gradH).attr('fill', 'url(#clGrad)').attr('rx', 4)\r
    svg.append('text').attr('x', 278).attr('y', 276).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('35')\r
    svg.append('text').attr('x', 402).attr('y', 276).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('85')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};