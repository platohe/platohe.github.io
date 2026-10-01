var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'density-contours',\r
  title: 'Density Contours',\r
  desc: 'Density Contours — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'DensityContours',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","density-contours"],\r
}\r
\r
export default function DensityContours({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":20,"y":30},{"x":25,"y":35},{"x":22,"y":28},{"x":30,"y":32},{"x":75,"y":70},{"x":70,"y":75},{"x":80,"y":72},{"x":78,"y":78},{"x":50,"y":50},{"x":55,"y":48},{"x":48,"y":52},{"x":52,"y":55}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 100]).range([30, 370])\r
    const y = d3.scaleLinear().domain([0, 100]).range([270, 20])\r
\r
    const color = d3.scaleSequential(d3.interpolateViridis).domain([0, 100])\r
\r
    svg.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.x || 0))\r
      .attr('cy', (d) => y(d.y || 0))\r
      .attr('r', 5)\r
      .attr('fill', (d) => color(d.x || 50))\r
      .attr('opacity', 0.8)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};