var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'tsneplot',\r
  title: 'T S N E Plot',\r
  desc: 'T S N E Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TSNEPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","t-s-n-e-plot"],\r
}\r
\r
export default function TSNEPlot({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [perplexity, setPerplexity] = useState(options.perplexity || 30)\r
  const [iterations, setIterations] = useState(options.iterations || 250)\r
  const [showLabels, setShowLabels] = useState(options.showLabels !== false)\r
  const [colorBy, setColorBy] = useState(options.colorBy || 'cluster')\r
\r
  const DEFAULT_DATA = {"embeddings":[{"x":2.249,"y":0.352,"cluster":0,"label":"Point 1","metadata":{"cluster":"A","value":66.973}},{"x":2.048,"y":0.292,"cluster":0,"label":"Point 2","metadata":{"cluster":"A","value":62.474}},{"x":2.104,"y":0.922,"cluster":0,"label":"Point 3","metadata":{"cluster":"A","value":88.206}},{"x":1.537,"y":1.322,"cluster":0,"label":"Point 4","metadata":{"cluster":"A","value":50.073}},{"x":1.366,"y":1.482,"cluster":0,"label":"Point 5","metadata":{"cluster":"A","value":47.078}},{"x":0.299,"y":2.393,"cluster":0,"label":"Point 6","metadata":{"cluster":"A","value":3.154}},{"x":-0.304,"y":1.815,"cluster":0,"label":"Point 7","metadata":{"cluster":"A","value":78.355}},{"x":-0.897,"y":1.898,"cluster":0,"label":"Point 8","metadata":{"cluster":"A","value":84.269}},{"x":-0.646,"y":1.85,"cluster":0,"label":"Point 9","metadata":{"cluster":"A","value":44.99}},{"x":-1.735,"y":1.612,"cluster":0,"label":"Point 10","metadata":{"cluster":"A","value":59.673}},{"x":-1.572,"y":0.957,"cluster":0,"label":"Point 11","metadata":{"cluster":"A","value":30.363}},{"x":-1.844,"y":0.88,"cluster":0,"label":"Point 12","metadata":{"cluster":"A","value":20.419}},{"x":-2.332,"y":-0.157,"cluster":0,"label":"Point 13","metadata":{"cluster":"A","value":65.986}},{"x":-2.129,"y":0.135,"cluster":0,"label":"Point 14","metadata":{"cluster":"A","value":8.797}},{"x":-2.367,"y":-0.468,"cluster":0,"label":"Point 15","metadata":{"cluster":"A","value":13.73}},{"x":-2.147,"y":-1.348,"cluster":0,"label":"Point 16","metadata":{"cluster":"A","value":48.172}},{"x":-1.07,"y":-2.199,"cluster":0,"label":"Point 17","metadata":{"cluster":"A","value":71.96}},{"x":-1.272,"y":-2.026,"cluster":0,"label":"Point 18","metadata":{"cluster":"A","value":17.962}},{"x":-0.102,"y":-2.6,"cluster":0,"label":"Point 19","metadata":{"cluster":"A","value":99.564}},{"x":0.559,"y":-2.343,"cluster":0,"label":"Point 20","metadata":{"cluster":"A","value":57.845}},{"x":0.766,"y":-2.239,"cluster":0,"label":"Point 21","metadata":{"cluster":"A","value":72.941}},{"x":1.101,"y":-1.47,"cluster":0,"label":"Point 22","metadata":{"cluster":"A","value":69.507}},{"x":2.21,"y":-1.777,"cluster":0,"label":"Point 23","metadata":{"cluster":"A","value":54.521}},{"x":1.483,"y":-0.838,"cluster":0,"label":"Point 24","metadata":{"cluster":"A","value":31.331}},{"x":2.723,"y":-1.001,"cluster":0,"label":"Point 25","metadata":{"cluster":"A","value":47.539}},{"x":6.541,"y":1.973,"cluster":1,"label":"Point 26","metadata":{"cluster":"B","value":17.839}},{"x":6.933,"y":2.182,"cluster":1,"label":"Point 27","metadata":{"cluster":"B","value":41.286}},{"x":6.293,"y":3.061,"cluster":1,"label":"Point 28","metadata":{"cluster":"B","value":20.695}},{"x":6.167,"y":3.938,"cluster":1,"label":"Point 29","metadata":{"cluster":"B","value":79.243}},{"x":4.612,"y":4.985,"cluster":1,"label":"Point 30","metadata":{"cluster":"B","value":36.971}},{"x":4.32,"y":4.968,"cluster":1,"label":"Point 31","metadata":{"cluster":"B","value":87.592}},{"x":2.957,"y":5.55,"cluster":1,"label":"Point 32","metadata":{"cluster":"B","value":48.924}},{"x":1.874,"y":5.234,"cluster":1,"label":"Point 33","metadata":{"cluster":"B","value":70.837}},{"x":1.223,"y":4.635,"cluster":1,"label":"Point 34","metadata":{"cluster":"B","value":2.911}},{"x":1.192,"y":4.354,"cluster":1,"label":"Point 35","metadata":{"cluster":"B","value":98.856}},{"x":-0.227,"y":3.666,"cluster":1,"label":"Point 36","metadata":{"cluster":"B","value":29.25}},{"x":-0.503,"y":2.779,"cluster":1,"label":"Point 37","metadata":{"cluster":"B","value":68.614}},{"x":-0.834,"y":2.359,"cluster":1,"label":"Point 38","metadata":{"cluster":"B","value":32.732}},{"x":-0.607,"y":1.077,"cluster":1,"label":"Point 39","metadata":{"cluster":"B","value":58.93}},{"x":-0.538,"y":-0.033,"cluster":1,"label":"Point 40","metadata":{"cluster":"B","value":32.057}},{"x":-0.381,"y":-1.085,"cluster":1,"label":"Point 41","metadata":{"cluster":"B","value":69.499}},{"x":0.294,"y":-1.504,"cluster":1,"label":"Point 42","metadata":{"cluster":"B","value":4.242}},{"x":1.095,"y":-1.947,"cluster":1,"label":"Point 43","metadata":{"cluster":"B","value":37.993}},{"x":2.69,"y":-1.976,"cluster":1,"label":"Point 44","metadata":{"cluster":"B","value":43.936}},{"x":3.592,"y":-2.044,"cluster":1,"label":"Point 45","metadata":{"cluster":"B","value":84.038}},{"x":4.17,"y":-2.607,"cluster":1,"label":"Point 46","metadata":{"cluster":"B","value":61.874}},{"x":4.8,"y":-1.906,"cluster":1,"label":"Point 47","metadata":{"cluster":"B","value":54.566}},{"x":5.902,"y":-0.873,"cluster":1,"label":"Point 48","metadata":{"cluster":"B","value":84.319}},{"x":5.946,"y":-0.796,"cluster":1,"label":"Point 49","metadata":{"cluster":"B","value":16.93}},{"x":6.812,"y":0.827,"cluster":1,"label":"Point 50","metadata":{"cluster":"B","value":99.146}},{"x":11.54,"y":3.337,"cluster":2,"label":"Point 51","metadata":{"cluster":"C","value":85.296}},{"x":10.984,"y":4.265,"cluster":2,"label":"Point 52","metadata":{"cluster":"C","value":87.838}},{"x":10.529,"y":6.01,"cluster":2,"label":"Point 53","metadata":{"cluster":"C","value":62.594}},{"x":10.11,"y":6.187,"cluster":2,"label":"Point 54","metadata":{"cluster":"C","value":36.575}},{"x":8.27,"y":7.378,"cluster":2,"label":"Point 55","metadata":{"cluster":"C","value":72.636}},{"x":8.072,"y":8.176,"cluster":2,"label":"Point 56","metadata":{"cluster":"C","value":70.748}},{"x":6.092,"y":7.702,"cluster":2,"label":"Point 57","metadata":{"cluster":"C","value":4.768}},{"x":4.977,"y":8.123,"cluster":2,"label":"Point 58","metadata":{"cluster":"C","value":71.637}},{"x":3.987,"y":7.579,"cluster":2,"label":"Point 59","metadata":{"cluster":"C","value":66.636}},{"x":2.591,"y":7.021,"cluster":2,"label":"Point 60","metadata":{"cluster":"C","value":45.906}},{"x":1.615,"y":5.871,"cluster":2,"label":"Point 61","metadata":{"cluster":"C","value":14.765}},{"x":0.884,"y":4.964,"cluster":2,"label":"Point 62","metadata":{"cluster":"C","value":54.796}},{"x":0.655,"y":3.302,"cluster":2,"label":"Point 63","metadata":{"cluster":"C","value":0.376}},{"x":1.409,"y":1.933,"cluster":2,"label":"Point 64","metadata":{"cluster":"C","value":87.066}},{"x":1.153,"y":0.679,"cluster":2,"label":"Point 65","metadata":{"cluster":"C","value":82.167}},{"x":1.803,"y":-0.226,"cluster":2,"label":"Point 66","metadata":{"cluster":"C","value":70.276}},{"x":2.228,"y":-0.603,"cluster":2,"label":"Point 67","metadata":{"cluster":"C","value":75.011}},{"x":4.027,"y":-1.774,"cluster":2,"label":"Point 68","metadata":{"cluster":"C","value":80.484}},{"x":4.691,"y":-2.592,"cluster":2,"label":"Point 69","metadata":{"cluster":"C","value":9.588}},{"x":6.079,"y":-1.848,"cluster":2,"label":"Point 70","metadata":{"cluster":"C","value":66.836}},{"x":8.108,"y":-2.5,"cluster":2,"label":"Point 71","metadata":{"cluster":"C","value":39.676}},{"x":8.554,"y":-1.031,"cluster":2,"label":"Point 72","metadata":{"cluster":"C","value":53.667}},{"x":10.164,"y":-0.041,"cluster":2,"label":"Point 73","metadata":{"cluster":"C","value":26.625}},{"x":10.969,"y":0.902,"cluster":2,"label":"Point 74","metadata":{"cluster":"C","value":68.498}},{"x":11.428,"y":1.498,"cluster":2,"label":"Point 75","metadata":{"cluster":"C","value":49.403}},{"x":15.925,"y":4.687,"cluster":3,"label":"Point 76","metadata":{"cluster":"D","value":55.429}},{"x":16.027,"y":6.669,"cluster":3,"label":"Point 77","metadata":{"cluster":"D","value":76.656}},{"x":14.963,"y":7.874,"cluster":3,"label":"Point 78","metadata":{"cluster":"D","value":86.468}},{"x":14.257,"y":8.899,"cluster":3,"label":"Point 79","metadata":{"cluster":"D","value":87.987}},{"x":12.433,"y":10.195,"cluster":3,"label":"Point 80","metadata":{"cluster":"D","value":83.676}},{"x":11.472,"y":11.167,"cluster":3,"label":"Point 81","metadata":{"cluster":"D","value":15.086}},{"x":9.879,"y":11.117,"cluster":3,"label":"Point 82","metadata":{"cluster":"D","value":27.483}},{"x":7.994,"y":11.433,"cluster":3,"label":"Point 83","metadata":{"cluster":"D","value":71.483}},{"x":6.54,"y":10.868,"cluster":3,"label":"Point 84","metadata":{"cluster":"D","value":54.473}},{"x":4.279,"y":9.69,"cluster":3,"label":"Point 85","metadata":{"cluster":"D","value":89.322}},{"x":3.389,"y":8.462,"cluster":3,"label":"Point 86","metadata":{"cluster":"D","value":61.586}},{"x":2.641,"y":6.568,"cluster":3,"label":"Point 87","metadata":{"cluster":"D","value":16.759}},{"x":2.124,"y":5.196,"cluster":3,"label":"Point 88","metadata":{"cluster":"D","value":82.818}},{"x":2.319,"y":3.218,"cluster":3,"label":"Point 89","metadata":{"cluster":"D","value":3.281}},{"x":3.031,"y":1.827,"cluster":3,"label":"Point 90","metadata":{"cluster":"D","value":85.607}},{"x":3.897,"y":0.884,"cluster":3,"label":"Point 91","metadata":{"cluster":"D","value":34.508}},{"x":4.952,"y":-0.807,"cluster":3,"label":"Point 92","metadata":{"cluster":"D","value":48.018}},{"x":5.933,"y":-1.287,"cluster":3,"label":"Point 93","metadata":{"cluster":"D","value":51.905}},{"x":7.828,"y":-2.516,"cluster":3,"label":"Point 94","metadata":{"cluster":"D","value":78.194}},{"x":9.848,"y":-2.714,"cluster":3,"label":"Point 95","metadata":{"cluster":"D","value":5.879}},{"x":10.854,"y":-1.957,"cluster":3,"label":"Point 96","metadata":{"cluster":"D","value":22.993}},{"x":12.829,"y":-1.066,"cluster":3,"label":"Point 97","metadata":{"cluster":"D","value":34.162}},{"x":13.507,"y":0.063,"cluster":3,"label":"Point 98","metadata":{"cluster":"D","value":79.862}},{"x":14.565,"y":1.564,"cluster":3,"label":"Point 99","metadata":{"cluster":"D","value":50.508}},{"x":14.945,"y":3.139,"cluster":3,"label":"Point 100","metadata":{"cluster":"D","value":43.163}}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const points = data.embeddings || data\r
\r
    if (!points.length) {\r
      console.warn('TSNE Plot expects array of points with x, y coordinates')\r
      return\r
    }\r
\r
    const xExtent = d3.extent(points, d => d.x)\r
    const yExtent = d3.extent(points, d => d.y)\r
    const padding = 0.1\r
    const xRange = xExtent[1] - xExtent[0]\r
    const yRange = yExtent[1] - yExtent[0]\r
\r
    const x = d3.scaleLinear()\r
      .domain([xExtent[0] - xRange * padding, xExtent[1] + xRange * padding])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([yExtent[0] - yRange * padding, yExtent[1] + yRange * padding])\r
      .range([IH, 0])\r
\r
    const clusters = [...new Set(points.map(d => d.cluster).filter(c => c !== undefined))]\r
    const colorScale = d3.scaleOrdinal()\r
      .domain(clusters)\r
      .range(colors)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Points\r
    const pointSelection = g.selectAll('.tsne-point')\r
      .data(points)\r
      .enter()\r
      .append('g')\r
      .attr('class', 'tsne-point')\r
      .attr('transform', d => \`translate(\${x(d.x)},\${y(d.y)})\`)\r
\r
    pointSelection.append('circle')\r
      .attr('r', 5)\r
      .attr('fill', d => colorBy === 'cluster' && d.cluster !== undefined ? colorScale(d.cluster) : colors[0])\r
      .attr('opacity', 0.7)\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1.5)\r
      .on('mouseover', function(event, d) {\r
        d3.select(this).attr('r', 8).attr('opacity', 1)\r
        showTooltip(event, d)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this).attr('r', 5).attr('opacity', 0.7)\r
        hideTooltip()\r
      })\r
\r
    // Labels\r
    if (showLabels) {\r
      pointSelection.append('text')\r
        .attr('x', 8)\r
        .attr('y', 4)\r
        .attr('font-size', '9px')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('pointer-events', 'none')\r
        .text(d => d.label || '')\r
    }\r
\r
    // Cluster legend\r
    if (colorBy === 'cluster' && clusters.length > 0) {\r
      const legend = g.append('g')\r
        .attr('transform', \`translate(\${IW - 120}, 20)\`)\r
\r
      clusters.forEach((cluster, i) => {\r
        const row = legend.append('g')\r
          .attr('transform', \`translate(0, \${i * 20})\`)\r
\r
        row.append('circle')\r
          .attr('cx', 0).attr('cy', 0).attr('r', 6)\r
          .attr('fill', colorScale(cluster))\r
\r
        row.append('text')\r
          .attr('x', 12).attr('y', 4)\r
          .attr('font-size', '11px')\r
          .attr('fill', 'var(--text)')\r
          .text(points.find(p => p.cluster === cluster)?.metadata?.cluster || \`Cluster \${cluster}\`)\r
      })\r
    }\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('t-SNE / UMAP Embedding')\r
\r
    // Controls info\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 45)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('Hover points for details • Use options.perplexity, iterations, showLabels, colorBy')\r
\r
    // Tooltip\r
    const tooltip = d3.select('body').append('div')\r
      .attr('class', 'tsne-tooltip')\r
      .style('position', 'absolute')\r
      .style('pointer-events', 'none')\r
      .style('opacity', 0)\r
      .style('background', 'var(--bg-card)')\r
      .style('border', '1px solid var(--border)')\r
      .style('border-radius', '6px')\r
      .style('padding', '8px 12px')\r
      .style('font-size', '11px')\r
      .style('color', 'var(--text)')\r
      .style('box-shadow', '0 4px 12px rgba(0,0,0,0.15)')\r
      .style('z-index', 1000)\r
\r
    function showTooltip(event, d) {\r
      const content = \`\r
        <strong>\${d.label || 'Point'}</strong><br/>\r
        \${d.cluster !== undefined ? \`Cluster: \${d.metadata?.cluster || d.cluster}<br/>\` : ''}\r
        \${Object.entries(d.metadata || {}).filter(([k]) => k !== 'cluster').map(([k, v]) => \`\${k}: \${v}\`).join('<br/>')}\r
      \`\r
      tooltip.html(content)\r
        .style('left', \`\${event.pageX + 10}px\`)\r
        .style('top', \`\${event.pageY - 10}px\`)\r
        .style('opacity', 1)\r
    }\r
\r
    function hideTooltip() {\r
      tooltip.style('opacity', 0)\r
    }\r
\r
    return () => {\r
      tooltip.remove()\r
    }\r
\r
  }, [customData, perplexity, iterations, showLabels, colorBy])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};