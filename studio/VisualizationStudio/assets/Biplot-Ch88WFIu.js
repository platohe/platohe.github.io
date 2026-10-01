var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'biplot',\r
  title: 'Biplot',\r
  desc: 'Biplot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Biplot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","biplot"],\r
}\r
\r
export default function Biplot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":10.11,"y":-5.171,"cluster":"Setosa"},{"x":35.247,"y":16.973,"cluster":"Setosa"},{"x":-32.519,"y":2.659,"cluster":"Setosa"},{"x":-22.677,"y":12.474,"cluster":"Setosa"},{"x":36.547,"y":-2.768,"cluster":"Setosa"},{"x":-25.008,"y":38.206,"cluster":"Setosa"},{"x":24.574,"y":-19.3,"cluster":"Setosa"},{"x":-30.275,"y":0.073,"cluster":"Setosa"},{"x":18.661,"y":11.062,"cluster":"Setosa"},{"x":-49.616,"y":-2.922,"cluster":"Setosa"},{"x":33.734,"y":-44.879,"cluster":"Setosa"},{"x":9.232,"y":-46.846,"cluster":"Setosa"},{"x":-23.304,"y":-43.822,"cluster":"Setosa"},{"x":-31.431,"y":28.355,"cluster":"Setosa"},{"x":3.034,"y":-47.288,"cluster":"Setosa"},{"x":-32.699,"y":34.269,"cluster":"Setosa"},{"x":-1.226,"y":30.902,"cluster":"Setosa"},{"x":-18.054,"y":-5.01,"cluster":"Setosa"},{"x":-46.256,"y":-44.861,"cluster":"Setosa"},{"x":5.66,"y":9.673,"cluster":"Setosa"},{"x":-25.483,"y":14.569,"cluster":"Setosa"},{"x":-29.049,"y":-19.637,"cluster":"Setosa"},{"x":23.862,"y":35.871,"cluster":"Setosa"},{"x":0.8,"y":-29.581,"cluster":"Setosa"},{"x":-21.579,"y":-20.701,"cluster":"Setosa"},{"x":-42.531,"y":15.986,"cluster":"Setosa"},{"x":18.077,"y":19.309,"cluster":"Setosa"},{"x":42.784,"y":-41.203,"cluster":"Setosa"},{"x":44.374,"y":-6.886,"cluster":"Setosa"},{"x":44.229,"y":-36.27,"cluster":"Setosa"},{"x":-38.906,"y":-48.416,"cluster":"Setosa"},{"x":-13.955,"y":-1.828,"cluster":"Setosa"},{"x":11.192,"y":39.956,"cluster":"Setosa"},{"x":-42.242,"y":21.96,"cluster":"Setosa"},{"x":43.487,"y":-22.175,"cluster":"Setosa"},{"x":20.659,"y":-32.038,"cluster":"Setosa"},{"x":2.032,"y":32.189,"cluster":"Setosa"},{"x":-37.941,"y":49.564,"cluster":"Setosa"},{"x":6.28,"y":41.612,"cluster":"Setosa"},{"x":-6.601,"y":7.845,"cluster":"Setosa"},{"x":-16.304,"y":9.624,"cluster":"Setosa"},{"x":-17.704,"y":22.941,"cluster":"Setosa"},{"x":-20.479,"y":-5.024,"cluster":"Setosa"},{"x":34.313,"y":19.507,"cluster":"Setosa"},{"x":49.401,"y":39.02,"cluster":"Setosa"},{"x":-6.811,"y":4.521,"cluster":"Setosa"},{"x":-20.407,"y":-39.912,"cluster":"Setosa"},{"x":19.672,"y":-18.669,"cluster":"Setosa"},{"x":28.594,"y":40.478,"cluster":"Setosa"},{"x":-40.636,"y":-2.461,"cluster":"Setosa"},{"x":32.195,"y":-37.002,"cluster":"Versicolor"},{"x":47.275,"y":-32.161,"cluster":"Versicolor"},{"x":20.943,"y":19.969,"cluster":"Versicolor"},{"x":-27.682,"y":-8.714,"cluster":"Versicolor"},{"x":-33.656,"y":15.467,"cluster":"Versicolor"},{"x":-16.407,"y":-29.305,"cluster":"Versicolor"},{"x":12.89,"y":38.688,"cluster":"Versicolor"},{"x":-17.362,"y":29.243,"cluster":"Versicolor"},{"x":-10.705,"y":-36.861,"cluster":"Versicolor"},{"x":36.37,"y":-13.029,"cluster":"Versicolor"},{"x":-49.047,"y":23.742,"cluster":"Versicolor"},{"x":13.526,"y":37.592,"cluster":"Versicolor"},{"x":40.816,"y":-29.101,"cluster":"Versicolor"},{"x":10.393,"y":-1.076,"cluster":"Versicolor"},{"x":-31.598,"y":-45.253,"cluster":"Versicolor"},{"x":20.555,"y":20.837,"cluster":"Versicolor"},{"x":-20.851,"y":-22.452,"cluster":"Versicolor"},{"x":-16.34,"y":-47.089,"cluster":"Versicolor"},{"x":-27.91,"y":49.352,"cluster":"Versicolor"},{"x":7.235,"y":48.856,"cluster":"Versicolor"},{"x":-33.613,"y":-32.917,"cluster":"Versicolor"},{"x":6.096,"y":-20.75,"cluster":"Versicolor"},{"x":-10.534,"y":-6.559,"cluster":"Versicolor"},{"x":-8.164,"y":18.614,"cluster":"Versicolor"},{"x":-10.149,"y":-16.388,"cluster":"Versicolor"},{"x":39.564,"y":-17.268,"cluster":"Versicolor"},{"x":-0.474,"y":11.087,"cluster":"Versicolor"},{"x":4.636,"y":8.93,"cluster":"Versicolor"},{"x":-26.459,"y":-17.463,"cluster":"Versicolor"},{"x":-20.122,"y":-17.943,"cluster":"Versicolor"},{"x":16.93,"y":-27.911,"cluster":"Versicolor"},{"x":-33.07,"y":19.499,"cluster":"Versicolor"},{"x":-18.578,"y":-37.509,"cluster":"Versicolor"},{"x":-18.621,"y":-45.758,"cluster":"Versicolor"},{"x":7.754,"y":-29.231,"cluster":"Versicolor"},{"x":-1.847,"y":-12.007,"cluster":"Versicolor"},{"x":21.205,"y":41.263,"cluster":"Versicolor"},{"x":31.17,"y":-6.064,"cluster":"Versicolor"},{"x":-34.586,"y":36.763,"cluster":"Versicolor"},{"x":2.568,"y":34.038,"cluster":"Versicolor"},{"x":39.451,"y":-4.99,"cluster":"Versicolor"},{"x":-35.34,"y":11.874,"cluster":"Versicolor"},{"x":30.759,"y":-29.159,"cluster":"Versicolor"},{"x":-11.036,"y":4.566,"cluster":"Versicolor"},{"x":48.449,"y":-0.8,"cluster":"Versicolor"},{"x":35.948,"y":34.319,"cluster":"Versicolor"},{"x":24.362,"y":-44.646,"cluster":"Versicolor"},{"x":-43.066,"y":-33.07,"cluster":"Versicolor"},{"x":0.654,"y":17.666,"cluster":"Versicolor"},{"x":26.08,"y":49.146,"cluster":"Versicolor"},{"x":31.598,"y":13.161,"cluster":"Virginica"},{"x":33.698,"y":35.296,"cluster":"Virginica"},{"x":9.939,"y":-14.892,"cluster":"Virginica"},{"x":-5.309,"y":37.838,"cluster":"Virginica"},{"x":18.099,"y":-15.075,"cluster":"Virginica"},{"x":43.753,"y":12.594,"cluster":"Virginica"},{"x":-17.067,"y":34.467,"cluster":"Virginica"},{"x":-34.841,"y":-13.425,"cluster":"Virginica"},{"x":-48.003,"y":-41.45,"cluster":"Virginica"},{"x":14.766,"y":22.636,"cluster":"Virginica"},{"x":45.594,"y":37.946,"cluster":"Virginica"},{"x":-3.375,"y":20.748,"cluster":"Virginica"},{"x":-35.485,"y":-22.69,"cluster":"Virginica"},{"x":-36.086,"y":-45.232,"cluster":"Virginica"},{"x":-20.902,"y":-5.902,"cluster":"Virginica"},{"x":6.876,"y":21.637,"cluster":"Virginica"},{"x":29.357,"y":28.479,"cluster":"Virginica"},{"x":-30.407,"y":16.636,"cluster":"Virginica"},{"x":1.78,"y":-5.646,"cluster":"Virginica"},{"x":-3.097,"y":-4.094,"cluster":"Virginica"},{"x":-7.495,"y":-16.808,"cluster":"Virginica"},{"x":-19.24,"y":-35.235,"cluster":"Virginica"},{"x":0.46,"y":-23.26,"cluster":"Virginica"},{"x":3.056,"y":4.796,"cluster":"Virginica"},{"x":14.737,"y":-6.281,"cluster":"Virginica"},{"x":-36.517,"y":-49.624,"cluster":"Virginica"},{"x":-35.182,"y":44.324,"cluster":"Virginica"},{"x":-43.07,"y":37.066,"cluster":"Virginica"},{"x":-6.96,"y":0.247,"cluster":"Virginica"},{"x":-40.121,"y":32.167,"cluster":"Virginica"},{"x":-44.327,"y":-12.939,"cluster":"Virginica"},{"x":-27.029,"y":20.276,"cluster":"Virginica"},{"x":6.405,"y":-40.538,"cluster":"Virginica"},{"x":46.639,"y":25.011,"cluster":"Virginica"},{"x":16.12,"y":29.638,"cluster":"Virginica"},{"x":4.881,"y":30.484,"cluster":"Virginica"},{"x":2.705,"y":-32.317,"cluster":"Virginica"},{"x":-42.191,"y":-40.412,"cluster":"Virginica"},{"x":-44.043,"y":-23.722,"cluster":"Virginica"},{"x":17.214,"y":16.836,"cluster":"Virginica"},{"x":6.1,"y":47.665,"cluster":"Virginica"},{"x":-47.787,"y":-10.324,"cluster":"Virginica"},{"x":-16.216,"y":-21.587,"cluster":"Virginica"},{"x":33.31,"y":3.667,"cluster":"Virginica"},{"x":-29.503,"y":44.43,"cluster":"Virginica"},{"x":45.21,"y":-23.375,"cluster":"Virginica"},{"x":1.836,"y":36.002,"cluster":"Virginica"},{"x":43.535,"y":18.498,"cluster":"Virginica"},{"x":6.854,"y":30.992,"cluster":"Virginica"},{"x":-18.802,"y":-0.597,"cluster":"Virginica"}]\r
\r
  const DEFAULT_VECTORS = [\r
    { label: 'PC1', x: 0.8, y: 0.3 },\r
    { label: 'PC2', x: -0.3, y: 0.9 },\r
    { label: 'Feature A', x: 0.5, y: 0.6 },\r
    { label: 'Feature B', x: -0.6, y: 0.4 },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const vectors = (customData && customData.vectors)\r
      ? customData.vectors\r
      : DEFAULT_VECTORS\r
\r
    const clusters = [...new Set(data.map(d => d.cluster))]\r
    const clusterColors = { 'Setosa': colors[0], 'Versicolor': colors[1], 'Virginica': colors[2] }\r
\r
    const x = d3.scaleLinear()\r
      .domain([-60, 60])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([-60, 60])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Draw observation points\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.x))\r
      .attr('cy', d => y(d.y))\r
      .attr('r', 4)\r
      .attr('fill', d => clusterColors[d.cluster] || colors[0])\r
      .attr('fill-opacity', 0.6)\r
      .attr('stroke', 'white').attr('stroke-width', 0.5)\r
\r
    // Draw PCA vectors\r
    const vectorScale = 40\r
    vectors.forEach((v, i) => {\r
      const endX = v.x * vectorScale\r
      const endY = -v.y * vectorScale\r
      const startX = 0\r
      const startY = 0\r
\r
      // Arrow line\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(startX)).attr('x2', x(endX))\r
        .attr('y1', y(startY)).attr('y2', y(endY))\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 2)\r
        .attr('marker-end', 'url(#arrowhead)')\r
\r
      // Label\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + x(endX) + 5},\${M.top + y(endY) - 5})\`)\r
        .text(v.label)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('font-size', '10px')\r
        .attr('font-weight', 'bold')\r
    })\r
\r
    // Arrow marker definition\r
    const defs = svg.append('defs')\r
    defs.append('marker')\r
      .attr('id', 'arrowhead')\r
      .attr('viewBox', '0 -5 10 10')\r
      .attr('refX', 8).attr('refY', 0)\r
      .attr('markerWidth', 6).attr('markerHeight', 6)\r
      .attr('orient', 'auto')\r
      .append('path')\r
      .attr('d', 'M0,-5L10,0L0,5')\r
      .attr('fill', '#6366f1')\r
\r
    // Origin\r
    svg.append('circle')\r
      .attr('transform', \`translate(\${M.left + x(0)},\${M.top + y(0)})\`)\r
      .attr('r', 3).attr('fill', 'var(--text-primary)')\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('PCA Biplot - Principal Components')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Cluster legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 80},\${M.top + IH + 15})\`)\r
    clusters.forEach((cluster, i) => {\r
      const yOff = i * 18\r
      lg.append('circle').attr('cx', 6).attr('cy', yOff + 6).attr('r', 5)\r
        .attr('fill', clusterColors[cluster] || colors[i % colors.length])\r
        .attr('fill-opacity', 0.6)\r
      lg.append('text').attr('x', 16).attr('y', yOff + 10)\r
        .text(cluster).attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};