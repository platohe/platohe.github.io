var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'scatter-log-log',\r
  title: 'Scatter Log Log',\r
  desc: 'Scatter Log Log — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ScatterLogLog',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatter-log-log"],\r
}\r
\r
export default function ScatterLogLog({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":605.093,"y":453.808},{"x":853.941,"y":673.037},{"x":183.066,"y":531.327},{"x":280.496,"y":628.497},{"x":866.82,"y":477.594},{"x":257.424,"y":883.238},{"x":748.28,"y":313.931},{"x":205.281,"y":505.722},{"x":689.746,"y":614.515},{"x":13.805,"y":476.074},{"x":838.964,"y":60.697},{"x":596.401,"y":41.223},{"x":274.286,"y":71.164},{"x":193.832,"y":785.712},{"x":535.032,"y":36.852},{"x":181.275,"y":844.261},{"x":492.863,"y":810.933},{"x":326.267,"y":455.397},{"x":47.065,"y":60.879},{"x":561.034,"y":600.762},{"x":252.723,"y":649.237},{"x":217.415,"y":310.593},{"x":741.235,"y":860.124},{"x":512.916,"y":212.148},{"x":291.365,"y":300.062},{"x":83.948,"y":663.261},{"x":683.961,"y":696.157},{"x":928.562,"y":97.088},{"x":944.298,"y":436.826},{"x":942.872,"y":145.925},{"x":119.834,"y":25.684},{"x":366.841,"y":486.905},{"x":615.803,"y":900.562},{"x":86.807,"y":722.402},{"x":935.519,"y":285.469},{"x":709.52,"y":187.826},{"x":525.113,"y":823.673},{"x":129.387,"y":995.682},{"x":567.172,"y":916.959},{"x":439.65,"y":582.668},{"x":343.592,"y":600.277},{"x":329.728,"y":732.12},{"x":302.257,"y":455.265},{"x":844.695,"y":698.115},{"x":994.071,"y":891.296},{"x":437.573,"y":549.761},{"x":302.97,"y":109.869},{"x":699.754,"y":320.173},{"x":788.083,"y":905.728},{"x":102.705,"y":480.638}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 30, bottom: 40, left: 50 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleLog().domain([10, 1000]).range([0, w])\r
    const y = d3.scaleLog().domain([10, 1000]).range([h, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    g.selectAll('.pt').data(data).join('circle')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 4)\r
      .attr('fill', colors[0]).attr('opacity', 0.7)\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
\r
    // Reference line y=x\r
    g.append('line')\r
      .attr('x1', x(10)).attr('y1', y(10)).attr('x2', x(1000)).attr('y2', y(1000))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).ticks(5, '.0s')).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(5, '.0s')).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};