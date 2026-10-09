var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'zoomable-bar',\r
  title: 'Zoomable Bar',\r
  desc: 'Zoomable Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ZoomableBar',\r
  complexity: 'beginner',\r
  interactivity: ["zoom"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","zoomable-bar"],\r
}\r
\r
export default function ZoomableBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"label":"Item 1","value":68.088},{"label":"Item 2","value":55.863},{"label":"Item 3","value":88.197},{"label":"Item 4","value":73.579},{"label":"Item 5","value":33.985},{"label":"Item 6","value":62.127},{"label":"Item 7","value":41.858},{"label":"Item 8","value":69.98},{"label":"Item 9","value":89.238},{"label":"Item 10","value":57.785},{"label":"Item 11","value":39.994},{"label":"Item 12","value":90.565},{"label":"Item 13","value":79.659},{"label":"Item 14","value":44.56},{"label":"Item 15","value":35.78},{"label":"Item 16","value":60.058},{"label":"Item 17","value":74.929},{"label":"Item 18","value":68.85},{"label":"Item 19","value":20.307},{"label":"Item 20","value":57.663},{"label":"Item 21","value":86.987},{"label":"Item 22","value":24.097},{"label":"Item 23","value":67.386},{"label":"Item 24","value":22.523},{"label":"Item 25","value":41.356},{"label":"Item 26","value":24.943},{"label":"Item 27","value":34.855},{"label":"Item 28","value":82.684},{"label":"Item 29","value":62.427},{"label":"Item 30","value":22.17}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleBand().domain(data.map((d) => d.label)).range([10, 390]).padding(0.2)\r
    const y = d3.scaleLinear().domain([0, 100]).range([260, 20])\r
\r
    const g = svg.append('g').attr('transform', 'translate(0,20)')\r
\r
    g.selectAll('rect').data(data).join('rect')\r
      .attr('x', (d) => x(d.label))\r
      .attr('y', (d) => y(d.value))\r
      .attr('width', x.bandwidth())\r
      .attr('height', (d) => 260 - y(d.value))\r
      .attr('fill', '#6366f1').attr('opacity', 0.8).attr('rx', 2)\r
\r
    const zoom = d3.zoom()\r
      .scaleExtent([1, 5])\r
      .translateExtent([[0, 0], [400, 280]])\r
      .extent([[0, 0], [400, 260]])\r
      .on('zoom', (event) => {\r
        const newX = event.transform.rescaleX(x)\r
        g.selectAll('rect')\r
          .attr('x', (d) => newX(d.label))\r
          .attr('width', newX.bandwidth())\r
      })\r
\r
    svg.append('g').call(zoom)\r
\r
    svg.append('g')\r
      .attr('transform', 'translate(0,280)')\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(6))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};