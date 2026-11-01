var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'bivariate-contour',\r
  title: 'Bivariate Contour',\r
  desc: 'Bivariate Contour — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BivariateContour',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bivariate-contour"],\r
}\r
\r
export default function BivariateContour({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":78,"y":81},{"x":44.175,"y":47.097},{"x":40.766,"y":16.211},{"x":55.193,"y":66.255},{"x":25.607,"y":57.146},{"x":57.524,"y":38.543},{"x":68.768,"y":57.971},{"x":26.683,"y":29.335},{"x":24.473,"y":50.025},{"x":80.395,"y":82.208},{"x":51.528,"y":21.075},{"x":15.69,"y":30.093},{"x":65.296,"y":80.56},{"x":40.207,"y":44.745},{"x":48.677,"y":36.886},{"x":66.195,"y":51.487},{"x":13.453,"y":40.525},{"x":48.726,"y":62.818},{"x":78.822,"y":56.081},{"x":34.431,"y":22.177},{"x":20.565,"y":49.682},{"x":66.003,"y":73.559},{"x":58.684,"y":42.414},{"x":28.225,"y":27.911},{"x":59.499,"y":55.149},{"x":30.427,"y":62.197},{"x":47.443,"y":43.39},{"x":81.806,"y":44.574},{"x":12.357,"y":41.6},{"x":34.653,"y":48.861},{"x":79.594,"y":72.487},{"x":44.092,"y":33.552},{"x":27.161,"y":21.964},{"x":51.616,"y":80.385},{"x":53.649,"y":54.541},{"x":41.457,"y":22.742},{"x":63.558,"y":58.927},{"x":23.039,"y":45.792},{"x":36.245,"y":50.117},{"x":92.674,"y":66.949},{"x":22.595,"y":18.526},{"x":24.405,"y":44.204},{"x":71.809,"y":86.454},{"x":47.448,"y":30.459},{"x":41.341,"y":28.967},{"x":46.016,"y":65.666},{"x":39.967,"y":49.102},{"x":47.184,"y":50.634},{"x":73.262,"y":46.086},{"x":24.745,"y":31.759},{"x":21.291,"y":62.312},{"x":92.106,"y":65.249},{"x":37.441,"y":28.017},{"x":23.867,"y":35.488},{"x":62.354,"y":69.473},{"x":40.582,"y":56.869},{"x":54.647,"y":29.162},{"x":52.65,"y":46.535},{"x":26.362,"y":57.061},{"x":42.838,"y":49.168},{"x":80.345,"y":56.006},{"x":35.902,"y":32.249},{"x":11.844,"y":37.543},{"x":80.494,"y":83.511},{"x":47.694,"y":40.628},{"x":31.895,"y":16.397},{"x":59.327,"y":72.384},{"x":26.829,"y":54.702},{"x":58.622,"y":36.597},{"x":67.354,"y":57.228},{"x":20.915,"y":30.525},{"x":33.001,"y":54.715},{"x":78.39,"y":77.297},{"x":50.018,"y":17.756},{"x":14.077,"y":36.168}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const rawData = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const xExt = d3.extent(rawData, d => d.x)\r
    const yExt = d3.extent(rawData, d => d.y)\r
\r
    const x = d3.scaleLinear()\r
      .domain([xExt[0] - 10, xExt[1] + 10])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([yExt[0] - 10, yExt[1] + 10])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // 2D Contour Density Estimation\r
    const densityContours = d3.contourDensity()\r
      .x(d => x(d.x))\r
      .y(d => y(d.y))\r
      .size([IW, IH])\r
      .bandwidth(20)\r
      .thresholds(10)(rawData)\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateYlGnBu)\r
      .domain([0, d3.max(densityContours, d => d.value) || 0.005])\r
\r
    // Contour polygons\r
    g.selectAll('.contour')\r
      .data(densityContours)\r
      .join('path')\r
      .attr('class', 'contour')\r
      .attr('d', d3.geoPath())\r
      .attr('fill', d => colorScale(d.value))\r
      .attr('fill-opacity', 0.45)\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 0.8)\r
      .attr('stroke-opacity', 0.6)\r
\r
    // Scatter data points on top\r
    g.selectAll('circle')\r
      .data(rawData)\r
      .join('circle')\r
      .attr('cx', d => x(d.x))\r
      .attr('cy', d => y(d.y))\r
      .attr('r', 2.5)\r
      .attr('fill', '#ef4444')\r
      .attr('stroke', '#ffffff')\r
      .attr('stroke-width', 0.8)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Bivariate 2D Density Contours + Scatter Overlay')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};