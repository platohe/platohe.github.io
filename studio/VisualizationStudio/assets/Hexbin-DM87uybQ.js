var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'hexbin',\r
  title: 'Hexbin',\r
  desc: 'Hexbin — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Hexbin',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hexbin"],\r
}\r
\r
export default function Hexbin({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":100,"y":150},{"x":105,"y":152},{"x":110,"y":148},{"x":200,"y":80},{"x":205,"y":85},{"x":210,"y":78},{"x":150,"y":220},{"x":155,"y":225},{"x":148,"y":218}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const color = d3.scaleSequential(d3.interpolateBlues).domain([0, 300])\r
\r
    svg.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => d.x || 50)\r
      .attr('cy', (d) => d.y || 50)\r
      .attr('r', 8)\r
      .attr('fill', (d) => color(d.x || 100))\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1.5)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};