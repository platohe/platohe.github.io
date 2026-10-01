var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'zoomable-area',\r
  title: 'Zoomable Area',\r
  desc: 'Zoomable Area — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ZoomableArea',\r
  complexity: 'beginner',\r
  interactivity: ["zoom"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","zoomable-area"],\r
}\r
\r
export default function ZoomableArea({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":0,"y":36.011},{"x":1,"y":40.393},{"x":2,"y":49.818},{"x":3,"y":52.364},{"x":4,"y":50.389},{"x":5,"y":55.216},{"x":6,"y":52.209},{"x":7,"y":53.512},{"x":8,"y":52.164},{"x":9,"y":43.271},{"x":10,"y":35.322},{"x":11,"y":35.666},{"x":12,"y":28.607},{"x":13,"y":19.315},{"x":14,"y":14.541},{"x":15,"y":15.457},{"x":16,"y":16.943},{"x":17,"y":17.59},{"x":18,"y":14.583},{"x":19,"y":23.694},{"x":20,"y":32.785},{"x":21,"y":30.848},{"x":22,"y":42.154},{"x":23,"y":41.884},{"x":24,"y":48.543},{"x":25,"y":49.378},{"x":26,"y":51.828},{"x":27,"y":57.233},{"x":28,"y":52.395},{"x":29,"y":43.531},{"x":30,"y":39.972},{"x":31,"y":40.916},{"x":32,"y":31.391},{"x":33,"y":28.94},{"x":34,"y":19.197},{"x":35,"y":16.905},{"x":36,"y":10.756},{"x":37,"y":10.623},{"x":38,"y":17.179},{"x":39,"y":20.728},{"x":40,"y":21.72},{"x":41,"y":31.192},{"x":42,"y":32.768},{"x":43,"y":39.586},{"x":44,"y":49.228},{"x":45,"y":54.663},{"x":46,"y":53.954},{"x":47,"y":52.028},{"x":48,"y":52.155},{"x":49,"y":49.845},{"x":50,"y":43.753},{"x":51,"y":44.533},{"x":52,"y":38.963},{"x":53,"y":33.114},{"x":54,"y":29.83},{"x":55,"y":16.644},{"x":56,"y":21.686},{"x":57,"y":14.63},{"x":58,"y":19.57},{"x":59,"y":13.121}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'zaGrad').attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#6366f1').attr('stop-opacity', 0.5)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#6366f1').attr('stop-opacity', 0.05)\r
\r
    const clip = defs.append('clipPath').attr('id', 'zaClip')\r
      .append('rect').attr('x', 30).attr('y', 10).attr('width', 340).attr('height', 250)\r
\r
    const x = d3.scaleLinear().domain([0, 59]).range([0, 340])\r
    const y = d3.scaleLinear().domain([0, 70]).range([250, 10])\r
\r
    const area = d3.area().x((d) => x(d.x)).y0(250).y1((d) => y(d.y)).curve(d3.curveCatmullRom.alpha(0.5))\r
    const line = d3.line().x((d) => x(d.x)).y((d) => y(d.y)).curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const g = svg.append('g').attr('transform', 'translate(50,20)')\r
      .attr('clip-path', 'url(#zaClip)')\r
\r
    g.append('path').datum(data).attr('d', area).attr('fill', 'url(#zaGrad)')\r
    g.append('path').datum(data).attr('d', line).attr('fill', 'none').attr('stroke', '#6366f1').attr('stroke-width', 2)\r
\r
    // Grid\r
    g.call(d3.axisLeft(y).ticks(5).tickSize(-340).tickPadding(0))\r
      .call((gg) => gg.select('.domain').remove())\r
      .call((gg) => gg.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((gg) => gg.selectAll('text').remove())\r
      .lower()\r
\r
    const zoom = d3.zoom()\r
      .scaleExtent([1, 8])\r
      .translateExtent([[0, 0], [340, 250]])\r
      .extent([[0, 0], [340, 250]])\r
      .on('zoom', (event) => {\r
        const newX = event.transform.rescaleX(x)\r
        const newY = event.transform.rescaleY(y)\r
        g.select('path').attr('d', area.x((d) => newX(d.x)).y1((d) => newY(d.y)))\r
        g.selectAll('path').filter((d, i) => i === 1).attr('d', line.x((d) => newX(d.x)).y((d) => newY(d.y)))\r
        g.call(d3.axisLeft(newY).ticks(5).tickSize(-340).tickPadding(0))\r
          .call((gg) => gg.select('.domain').remove())\r
          .call((gg) => gg.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
          .call((gg) => gg.selectAll('text').remove())\r
      })\r
\r
    svg.append('g').attr('transform', 'translate(50,20)').call(zoom)\r
\r
    // Axis\r
    svg.append('g')\r
      .attr('transform', 'translate(50,270)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};