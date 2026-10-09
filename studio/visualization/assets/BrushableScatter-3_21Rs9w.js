var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'brushable-scatter',\r
  title: 'Brushable Scatter',\r
  desc: 'Brushable Scatter — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BrushableScatter',\r
  complexity: 'beginner',\r
  interactivity: ["brush"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","brushable-scatter"],\r
}\r
\r
export default function BrushableScatter({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":58.088,"y":45.863},{"x":78.197,"y":63.579},{"x":23.985,"y":52.127},{"x":31.858,"y":59.98},{"x":79.238,"y":47.785},{"x":29.994,"y":80.565},{"x":69.659,"y":34.56},{"x":25.78,"y":50.058},{"x":64.929,"y":58.85},{"x":10.307,"y":47.663},{"x":76.987,"y":14.097},{"x":57.386,"y":12.523},{"x":31.356,"y":14.943},{"x":24.855,"y":72.684},{"x":52.427,"y":12.17},{"x":23.84,"y":77.415},{"x":49.019,"y":74.722},{"x":35.557,"y":45.992},{"x":12.995,"y":14.111},{"x":54.528,"y":57.738},{"x":29.614,"y":61.656},{"x":26.761,"y":34.29},{"x":69.09,"y":78.697},{"x":50.64,"y":26.335},{"x":32.737,"y":33.439},{"x":15.976,"y":62.789},{"x":64.462,"y":65.447},{"x":84.227,"y":17.037},{"x":85.499,"y":44.491},{"x":85.384,"y":20.984},{"x":18.875,"y":11.267},{"x":38.836,"y":48.538},{"x":58.954,"y":81.965},{"x":16.207,"y":67.568},{"x":84.789,"y":32.26},{"x":66.527,"y":24.37},{"x":51.625,"y":75.751},{"x":19.647,"y":89.651},{"x":55.024,"y":83.29},{"x":44.719,"y":56.276},{"x":36.957,"y":57.699},{"x":35.837,"y":68.353},{"x":33.617,"y":45.981},{"x":77.45,"y":65.605},{"x":89.521,"y":81.216},{"x":44.551,"y":53.617},{"x":33.674,"y":18.07},{"x":65.738,"y":35.064},{"x":72.875,"y":82.382},{"x":17.491,"y":48.031},{"x":75.756,"y":20.398},{"x":87.82,"y":24.272},{"x":66.754,"y":65.975},{"x":27.855,"y":43.029},{"x":23.075,"y":62.373},{"x":36.874,"y":26.556},{"x":60.312,"y":80.95},{"x":36.11,"y":73.394},{"x":41.436,"y":20.511},{"x":79.096,"y":39.577},{"x":10.762,"y":68.994},{"x":60.821,"y":80.074},{"x":82.653,"y":26.719},{"x":58.315,"y":49.139},{"x":24.722,"y":13.798},{"x":66.444,"y":66.67},{"x":33.319,"y":32.039},{"x":36.928,"y":12.329},{"x":27.672,"y":89.482},{"x":55.788,"y":89.085},{"x":23.109,"y":23.667},{"x":54.877,"y":33.4},{"x":41.573,"y":44.753},{"x":43.468,"y":64.891},{"x":41.881,"y":36.89},{"x":81.651,"y":36.185},{"x":49.621,"y":58.87},{"x":53.709,"y":57.144},{"x":28.833,"y":36.029},{"x":33.902,"y":35.645},{"x":63.544,"y":27.671},{"x":23.544,"y":65.599},{"x":35.138,"y":19.993},{"x":35.104,"y":13.393},{"x":56.203,"y":26.615},{"x":48.523,"y":40.394},{"x":66.964,"y":83.01},{"x":74.936,"y":45.149},{"x":22.331,"y":79.41},{"x":52.054,"y":77.23},{"x":81.56,"y":46.008},{"x":21.728,"y":59.5},{"x":74.607,"y":26.673},{"x":41.171,"y":53.653},{"x":88.759,"y":49.36},{"x":78.759,"y":77.455},{"x":69.49,"y":14.284},{"x":15.547,"y":23.544},{"x":50.523,"y":64.133},{"x":70.864,"y":89.317}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 265\r
    const x = d3.scaleLinear().domain([0, 100]).range([30, 370])\r
    const y = d3.scaleLinear().domain([100, 0]).range([20, 250])\r
\r
    const inner = svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.x))\r
      .attr('cy', (d) => y(d.y))\r
      .attr('r', 4)\r
      .attr('fill', '#6366f1')\r
      .attr('opacity', 0.6)\r
\r
    // Brush\r
    const brush = d3.brush()\r
      .extent([[0, 0], [300, 240]])\r
      .on('end', (event) => {\r
        if (!event.selection) {\r
          inner.attr('opacity', 0.6)\r
          return\r
        }\r
        const [[x0, y0], [x1, y1]] = event.selection\r
        inner.attr('opacity', (d) => {\r
          const px = x(d.x), py = y(d.y)\r
          return px >= x0 && px <= x1 && py >= y0 && py <= y1 ? 0.8 : 0.1\r
        })\r
      })\r
\r
    svg.append('g')\r
      .attr('class', 'brush')\r
      .attr('transform', 'translate(50,20)')\r
      .call(brush)\r
\r
    // Axes\r
    svg.append('g')\r
      .attr('transform', 'translate(50,260)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};