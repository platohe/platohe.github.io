var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'world-choropleth',\r
  title: 'World Choropleth',\r
  desc: 'World Choropleth — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WorldChoropleth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","world-choropleth"],\r
}\r
\r
export default function WorldChoropleth({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Simplified world regions\r
    const DEFAULT_DATA = [{"id":"NA","name":"North America","points":[[50,30],[120,25],[140,80],[80,90]]},{"id":"SA","name":"South America","points":[[80,90],[140,80],[150,140],[90,150]]},{"id":"EU","name":"Europe","points":[[160,30],[200,25],[210,60],[170,65]]},{"id":"AF","name":"Africa","points":[[150,70],[210,65],[220,120],[160,130]]},{"id":"AS","name":"Asia","points":[[220,25],[300,20],[310,70],[230,75]]},{"id":"OC","name":"Oceania","points":[[260,90],[320,85],[330,130],[270,135]]}]\r
\r
    const regions = (Array.isArray(customData) && customData.length > 0 && customData[0]?.points) ? customData : DEFAULT_DATA\r
\r
    const values = { NA: 85, SA: 72, EU: 78, AF: 45, AS: 92, OC: 35 }\r
\r
    const color = d3.scaleSequential(d3.interpolateYlGnBu)\r
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
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 3)\r
            .attr('stroke', '#6366f1')\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 1.5)\r
            .attr('stroke', 'var(--bg)')\r
        })\r
\r
      const cx = d3.mean(r.points, (d) => d[0])\r
      const cy = d3.mean(r.points, (d) => d[1])\r
      svg.append('text')\r
        .attr('x', cx).attr('y', cy + 4)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'white').attr('font-size', '10px').attr('font-weight', 700)\r
        .text(r.id)\r
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
      .text('World Choropleth')\r
\r
    // Legend\r
    const gradW = 80, gradH = 8\r
    const grad = svg.append('defs').append('linearGradient').attr('id', 'worldGrad')\r
      .attr('x1', '0%').attr('x2', '100%').attr('y1', '0%').attr('y2', '0%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', color(8))\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', color(92))\r
\r
    svg.append('rect').attr('x', 310).attr('y', 275).attr('width', gradW).attr('height', gradH).attr('fill', 'url(#worldGrad)').attr('rx', 4)\r
    svg.append('text').attr('x', 308).attr('y', 281).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('8')\r
    svg.append('text').attr('x', 392).attr('y', 281).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('92')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};