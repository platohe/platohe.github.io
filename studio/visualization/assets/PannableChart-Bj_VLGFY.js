var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'pannable-chart',\r
  title: 'Pannable Chart',\r
  desc: 'Pannable Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PannableChart',\r
  complexity: 'beginner',\r
  interactivity: ["drag"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","pannable-chart"],\r
}\r
\r
export default function PannableChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":0,"y":49.017},{"x":1,"y":50.46},{"x":2,"y":60.175},{"x":3,"y":60.92},{"x":4,"y":56.738},{"x":5,"y":64.94},{"x":6,"y":63.682},{"x":7,"y":71.057},{"x":8,"y":76.283},{"x":9,"y":71.478},{"x":10,"y":68.686},{"x":11,"y":78.153},{"x":12,"y":75.532},{"x":13,"y":67.829},{"x":14,"y":64.539},{"x":15,"y":66.963},{"x":16,"y":67.186},{"x":17,"y":63.101},{"x":18,"y":50.742},{"x":19,"y":54.249},{"x":20,"y":56.088},{"x":21,"y":40.558},{"x":22,"y":44.941},{"x":23,"y":32.885},{"x":24,"y":32.941},{"x":25,"y":26.638},{"x":26,"y":25.591},{"x":27,"y":32.04},{"x":28,"y":26.166},{"x":29,"y":17.031},{"x":30,"y":18.157},{"x":31,"y":27.689},{"x":32,"y":22.412},{"x":33,"y":27.838},{"x":34,"y":21.647},{"x":35,"y":25.275},{"x":36,"y":21.242},{"x":37,"y":24.04},{"x":38,"y":34.582},{"x":39,"y":38.457},{"x":40,"y":36.692},{"x":41,"y":46.366},{"x":42,"y":43.563},{"x":43,"y":48.705},{"x":44,"y":58.868},{"x":45,"y":64.132},{"x":46,"y":62.081},{"x":47,"y":60.409},{"x":48,"y":64.105},{"x":49,"y":66.287},{"x":50,"y":64.57},{"x":51,"y":74.38},{"x":52,"y":75.175},{"x":53,"y":75.281},{"x":54,"y":78.165},{"x":55,"y":64.385},{"x":56,"y":75.521},{"x":57,"y":65.652},{"x":58,"y":70.709},{"x":59,"y":55.651},{"x":60,"y":51.967},{"x":61,"y":47.021},{"x":62,"y":48.518},{"x":63,"y":46.595},{"x":64,"y":44.821},{"x":65,"y":45.505},{"x":66,"y":29.725},{"x":67,"y":36.162},{"x":68,"y":36.526},{"x":69,"y":24.205},{"x":70,"y":28.606},{"x":71,"y":19.172},{"x":72,"y":23.281},{"x":73,"y":27.354},{"x":74,"y":16.945},{"x":75,"y":30.739},{"x":76,"y":25.459},{"x":77,"y":32.487},{"x":78,"y":27.46},{"x":79,"y":32.261}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 79]).range([0, 600])\r
    const y = d3.scaleLinear().domain([0, 90]).range([250, 10])\r
\r
    const g = svg.append('g')\r
      .attr('transform', 'translate(50,10)')\r
\r
    // Clip\r
    const clip = svg.append('defs').append('clipPath').attr('id', 'panClip')\r
      .append('rect').attr('x', 30).attr('y', 10).attr('width', 340).attr('height', 250)\r
\r
    const line = d3.line().x((d) => x(d.x)).y((d) => y(d.y)).curve(d3.curveCatmullRom.alpha(0.5))\r
    const area = d3.area().x((d) => x(d.x)).y0(260).y1((d) => y(d.y)).curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path').datum(data).attr('d', area).attr('fill', '#6366f1').attr('opacity', 0.15).attr('clip-path', 'url(#panClip)')\r
    g.append('path').datum(data).attr('d', line).attr('fill', 'none').attr('stroke', '#6366f1').attr('stroke-width', 2).attr('clip-path', 'url(#panClip)')\r
\r
    // Grid inside clip\r
    g.call(d3.axisLeft(y).ticks(5).tickSize(-600).tickPadding(0))\r
      .attr('clip-path', 'url(#panClip)')\r
      .call((gg) => gg.select('.domain').remove())\r
      .call((gg) => gg.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((gg) => gg.selectAll('text').remove())\r
      .lower()\r
\r
    const pan = d3.zoom()\r
      .scaleExtent([1, 1])\r
      .translateExtent([[0, 0], [600, 270]])\r
      .extent([[0, 0], [400, 270]])\r
      .on('zoom', (event) => {\r
        g.attr('transform', \`translate(\${event.transform.x},0)\`)\r
      })\r
\r
    svg.append('g').call(pan)\r
    g.append('g')\r
      .attr('transform', 'translate(0,270)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(6))\r
      .attr('clip-path', 'url(#panClip)')\r
      .call((gg) => gg.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((gg) => gg.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};