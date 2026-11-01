var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'shot-chart',\r
  title: 'Shot Chart',\r
  desc: 'Shot Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ShotChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","shot-chart"],\r
}\r
\r
export default function ShotChart({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [courtType, setCourtType] = useState(options.courtType || 'nba') // 'nba', 'ncaa', 'fiba'\r
\r
  const DEFAULT_DATA = [{"x":5.055,"y":21.07,"made":true,"value":2,"player":"Player 7"},{"x":-16.259,"y":24.75,"made":false,"value":3,"player":"Player 7"},{"x":18.274,"y":22.199,"made":false,"value":2,"player":"Player 9"},{"x":12.287,"y":14.429,"made":false,"value":2,"player":"Player 6"},{"x":9.331,"y":28.699,"made":false,"value":3,"player":"Player 5"},{"x":16.867,"y":2.407,"made":true,"value":2,"player":"Player 1"},{"x":-11.652,"y":2.904,"made":false,"value":2,"player":"Player 8"},{"x":1.517,"y":1.275,"made":false,"value":2,"player":"Player 9"},{"x":-0.613,"y":38.024,"made":false,"value":3,"player":"Player 5"},{"x":-23.128,"y":2.415,"made":true,"value":2,"player":"Player 6"},{"x":-12.741,"y":30.348,"made":false,"value":3,"player":"Player 4"},{"x":11.931,"y":40.359,"made":false,"value":3,"player":"Player 3"},{"x":-10.79,"y":13.771,"made":false,"value":2,"player":"Player 7"},{"x":9.038,"y":32.575,"made":true,"value":3,"player":"Player 1"},{"x":22.187,"y":20.263,"made":true,"value":2,"player":"Player 2"},{"x":-19.453,"y":0.745,"made":false,"value":2,"player":"Player 5"},{"x":5.596,"y":42.279,"made":false,"value":3,"player":"Player 8"},{"x":21.743,"y":13.078,"made":true,"value":2,"player":"Player 2"},{"x":1.016,"y":38.629,"made":false,"value":3,"player":"Player 10"},{"x":3.14,"y":43.058,"made":false,"value":3,"player":"Player 6"},{"x":-8.152,"y":28.023,"made":false,"value":3,"player":"Player 8"},{"x":-10.24,"y":21.139,"made":true,"value":2,"player":"Player 7"},{"x":24.701,"y":41.839,"made":false,"value":3,"player":"Player 6"},{"x":-10.204,"y":4.741,"made":true,"value":2,"player":"Player 4"},{"x":14.297,"y":42.524,"made":false,"value":3,"player":"Player 5"},{"x":16.098,"y":6.109,"made":true,"value":2,"player":"Player 2"},{"x":10.471,"y":32.885,"made":false,"value":3,"player":"Player 5"},{"x":-16.828,"y":30.769,"made":false,"value":3,"player":"Player 3"},{"x":6.445,"y":41.683,"made":false,"value":3,"player":"Player 8"},{"x":-5.353,"y":6.175,"made":true,"value":2,"player":"Player 4"},{"x":-24.524,"y":34.659,"made":true,"value":3,"player":"Player 9"},{"x":20.408,"y":9.822,"made":true,"value":2,"player":"Player 5"},{"x":-15.799,"y":2.231,"made":true,"value":2,"player":"Player 8"},{"x":-10.425,"y":12.948,"made":false,"value":2,"player":"Player 1"},{"x":-13.955,"y":46.695,"made":true,"value":3,"player":"Player 10"},{"x":-16.807,"y":8.029,"made":true,"value":2,"player":"Player 3"},{"x":-5.267,"y":20.417,"made":false,"value":2,"player":"Player 7"},{"x":-5.074,"y":15.798,"made":true,"value":2,"player":"Player 4"},{"x":-0.237,"y":28.711,"made":false,"value":3,"player":"Player 6"},{"x":-13.23,"y":15.292,"made":false,"value":2,"player":"Player 4"},{"x":8.465,"y":10.382,"made":false,"value":2,"player":"Player 7"},{"x":-9.289,"y":5.871,"made":false,"value":2,"player":"Player 1"},{"x":3.877,"y":9.761,"made":false,"value":2,"player":"Player 4"},{"x":10.602,"y":42.894,"made":true,"value":3,"player":"Player 5"},{"x":-17.293,"y":40.779,"made":false,"value":3,"player":"Player 9"},{"x":19.725,"y":21.155,"made":false,"value":2,"player":"Player 7"},{"x":15.38,"y":9.795,"made":false,"value":2,"player":"Player 6"},{"x":24.225,"y":23.124,"made":true,"value":2,"player":"Player 9"},{"x":12.181,"y":2.517,"made":false,"value":2,"player":"Player 2"},{"x":0.327,"y":31.803,"made":true,"value":3,"player":"Player 10"},{"x":15.799,"y":29.686,"made":true,"value":3,"player":"Player 9"},{"x":4.969,"y":16.501,"made":false,"value":2,"player":"Player 9"},{"x":9.049,"y":16.415,"made":true,"value":2,"player":"Player 7"},{"x":-8.533,"y":39.699,"made":false,"value":3,"player":"Player 4"},{"x":-24.001,"y":4.019,"made":true,"value":2,"player":"Player 8"},{"x":22.797,"y":41.335,"made":false,"value":3,"player":"Player 8"},{"x":-17.742,"y":12.836,"made":false,"value":2,"player":"Player 1"},{"x":-10.451,"y":20.726,"made":true,"value":2,"player":"Player 8"},{"x":14.679,"y":36.885,"made":false,"value":3,"player":"Player 7"},{"x":0.89,"y":20.847,"made":false,"value":2,"player":"Player 5"},{"x":-3.747,"y":15.6,"made":false,"value":2,"player":"Player 2"},{"x":0.23,"y":12.568,"made":false,"value":2,"player":"Player 6"},{"x":7.369,"y":20.548,"made":false,"value":2,"player":"Player 1"},{"x":-17.591,"y":44.332,"made":false,"value":3,"player":"Player 9"},{"x":-3.48,"y":23.616,"made":false,"value":2,"player":"Player 9"},{"x":-22.163,"y":17.419,"made":false,"value":2,"player":"Player 8"},{"x":3.203,"y":4.447,"made":true,"value":2,"player":"Player 8"},{"x":8.06,"y":37.43,"made":false,"value":3,"player":"Player 9"},{"x":1.353,"y":8.311,"made":false,"value":2,"player":"Player 1"},{"x":-22.021,"y":12.35,"made":true,"value":2,"player":"Player 7"},{"x":3.05,"y":45.902,"made":false,"value":3,"player":"Player 4"},{"x":-8.108,"y":13.354,"made":true,"value":2,"player":"Player 6"},{"x":-14.752,"y":44.382,"made":true,"value":3,"player":"Player 3"},{"x":0.918,"y":40.421,"made":true,"value":3,"player":"Player 7"},{"x":3.427,"y":38.066,"made":false,"value":3,"player":"Player 5"},{"x":12.513,"y":25.837,"made":true,"value":3,"player":"Player 6"},{"x":2.301,"y":45.448,"made":true,"value":3,"player":"Player 8"},{"x":-9.564,"y":29.683,"made":true,"value":3,"player":"Player 9"},{"x":-5.658,"y":41.263,"made":false,"value":3,"player":"Player 9"},{"x":-4.338,"y":15.963,"made":false,"value":2,"player":"Player 9"},{"x":5.893,"y":40.784,"made":true,"value":3,"player":"Player 2"},{"x":-10.663,"y":45.188,"made":false,"value":3,"player":"Player 3"},{"x":6.538,"y":36.247,"made":true,"value":3,"player":"Player 8"},{"x":-15.706,"y":39.796,"made":true,"value":3,"player":"Player 6"},{"x":-1.434,"y":3.408,"made":false,"value":2,"player":"Player 9"},{"x":8.763,"y":19.793,"made":false,"value":2,"player":"Player 7"},{"x":10.864,"y":24.34,"made":false,"value":3,"player":"Player 2"},{"x":-20.122,"y":5.694,"made":false,"value":2,"player":"Player 9"},{"x":16.893,"y":32.117,"made":false,"value":3,"player":"Player 1"},{"x":-11.487,"y":32.901,"made":false,"value":3,"player":"Player 9"},{"x":6.305,"y":42.72,"made":true,"value":3,"player":"Player 4"},{"x":-20.011,"y":29.479,"made":false,"value":3,"player":"Player 5"},{"x":-11.063,"y":12.226,"made":true,"value":2,"player":"Player 6"},{"x":-0.595,"y":27.821,"made":false,"value":3,"player":"Player 8"},{"x":9.455,"y":43.175,"made":false,"value":3,"player":"Player 1"},{"x":-23.342,"y":16.004,"made":false,"value":2,"player":"Player 3"},{"x":24.519,"y":27.316,"made":true,"value":3,"player":"Player 4"},{"x":7.457,"y":1.508,"made":true,"value":2,"player":"Player 8"},{"x":-6.206,"y":9.609,"made":true,"value":2,"player":"Player 6"},{"x":-18.095,"y":3.877,"made":true,"value":2,"player":"Player 5"},{"x":18.519,"y":37.23,"made":false,"value":3,"player":"Player 10"},{"x":-16.229,"y":6.838,"made":true,"value":2,"player":"Player 7"},{"x":-14.672,"y":36.198,"made":false,"value":3,"player":"Player 2"},{"x":7.994,"y":28.331,"made":true,"value":3,"player":"Player 3"},{"x":21.102,"y":24.523,"made":true,"value":3,"player":"Player 1"},{"x":22.876,"y":27.277,"made":false,"value":3,"player":"Player 1"},{"x":-8.686,"y":33.462,"made":true,"value":3,"player":"Player 3"},{"x":18.139,"y":21.423,"made":false,"value":2,"player":"Player 7"},{"x":0.376,"y":8.854,"made":true,"value":2,"player":"Player 1"},{"x":-18.183,"y":46.764,"made":false,"value":3,"player":"Player 5"},{"x":0.435,"y":29.123,"made":false,"value":3,"player":"Player 7"},{"x":-17.082,"y":46.015,"made":true,"value":3,"player":"Player 4"},{"x":-14.756,"y":24.351,"made":true,"value":3,"player":"Player 5"},{"x":-0.741,"y":11.853,"made":false,"value":2,"player":"Player 1"},{"x":18.085,"y":17.089,"made":false,"value":2,"player":"Player 3"},{"x":0.198,"y":1.926,"made":true,"value":2,"player":"Player 1"},{"x":20.057,"y":35.87,"made":true,"value":3,"player":"Player 9"},{"x":-22.312,"y":27.574,"made":false,"value":3,"player":"Player 5"},{"x":0.622,"y":22.343,"made":false,"value":2,"player":"Player 6"},{"x":-24.185,"y":33.289,"made":false,"value":3,"player":"Player 7"},{"x":-15.838,"y":17.343,"made":true,"value":2,"player":"Player 10"},{"x":-11.049,"y":29.051,"made":true,"value":3,"player":"Player 5"},{"x":-22.72,"y":26.67,"made":false,"value":3,"player":"Player 5"},{"x":-1.583,"y":35.429,"made":false,"value":3,"player":"Player 8"},{"x":4.754,"y":44.442,"made":true,"value":3,"player":"Player 5"},{"x":-24.587,"y":42.793,"made":false,"value":3,"player":"Player 6"},{"x":-0.66,"y":32.049,"made":true,"value":3,"player":"Player 7"},{"x":17.596,"y":31.222,"made":true,"value":3,"player":"Player 10"},{"x":23.356,"y":38.148,"made":true,"value":3,"player":"Player 9"},{"x":-17.034,"y":4.195,"made":true,"value":2,"player":"Player 1"},{"x":-0.442,"y":41.092,"made":true,"value":3,"player":"Player 8"},{"x":-8.619,"y":39.508,"made":false,"value":3,"player":"Player 10"},{"x":7.786,"y":11.775,"made":false,"value":2,"player":"Player 4"},{"x":11.231,"y":2.368,"made":false,"value":2,"player":"Player 3"},{"x":6.044,"y":17.591,"made":true,"value":2,"player":"Player 10"},{"x":-4.523,"y":37.25,"made":true,"value":3,"player":"Player 1"},{"x":9.207,"y":41.138,"made":false,"value":3,"player":"Player 6"},{"x":19.973,"y":21.945,"made":false,"value":2,"player":"Player 9"},{"x":6.559,"y":14.81,"made":false,"value":2,"player":"Player 6"},{"x":24.792,"y":8.116,"made":true,"value":2,"player":"Player 1"},{"x":7.205,"y":37.387,"made":false,"value":3,"player":"Player 6"},{"x":16.74,"y":18.42,"made":true,"value":2,"player":"Player 2"},{"x":23.826,"y":8.52,"made":true,"value":2,"player":"Player 8"},{"x":3.338,"y":25.69,"made":true,"value":3,"player":"Player 9"},{"x":13.579,"y":0.007,"made":false,"value":2,"player":"Player 1"},{"x":20.479,"y":0.003,"made":false,"value":2,"player":"Player 6"},{"x":-22.126,"y":35.02,"made":true,"value":3,"player":"Player 1"},{"x":-4.714,"y":38.822,"made":false,"value":3,"player":"Player 2"},{"x":12.13,"y":30.675,"made":false,"value":3,"player":"Player 7"},{"x":4.481,"y":39.998,"made":true,"value":3,"player":"Player 5"},{"x":4.408,"y":19.327,"made":true,"value":2,"player":"Player 2"},{"x":-18.242,"y":33.243,"made":true,"value":3,"player":"Player 3"},{"x":21.165,"y":44.336,"made":false,"value":3,"player":"Player 6"},{"x":-8.089,"y":31.31,"made":true,"value":3,"player":"Player 9"},{"x":9.659,"y":16.138,"made":true,"value":2,"player":"Player 6"},{"x":20.874,"y":10.965,"made":false,"value":2,"player":"Player 4"},{"x":24.133,"y":23.771,"made":true,"value":3,"player":"Player 1"},{"x":7.59,"y":28.364,"made":true,"value":3,"player":"Player 3"},{"x":23.159,"y":10.522,"made":true,"value":2,"player":"Player 4"},{"x":0.624,"y":18.322,"made":false,"value":2,"player":"Player 3"},{"x":22.214,"y":29.47,"made":false,"value":3,"player":"Player 6"},{"x":-6.774,"y":20.96,"made":false,"value":2,"player":"Player 6"},{"x":19.991,"y":30.978,"made":false,"value":3,"player":"Player 9"},{"x":4.366,"y":40.147,"made":false,"value":3,"player":"Player 7"},{"x":-2.257,"y":27.639,"made":true,"value":3,"player":"Player 7"},{"x":-4.562,"y":8.134,"made":false,"value":2,"player":"Player 8"},{"x":-5.893,"y":15.349,"made":false,"value":2,"player":"Player 2"},{"x":7.452,"y":13.213,"made":false,"value":2,"player":"Player 5"},{"x":9.986,"y":6.42,"made":true,"value":2,"player":"Player 3"},{"x":-11.061,"y":29.171,"made":false,"value":3,"player":"Player 4"},{"x":5.797,"y":21.987,"made":true,"value":2,"player":"Player 1"},{"x":-15.03,"y":16.25,"made":true,"value":2,"player":"Player 9"},{"x":22.643,"y":21.892,"made":false,"value":2,"player":"Player 7"},{"x":5.603,"y":35.346,"made":true,"value":3,"player":"Player 5"},{"x":-6.196,"y":7.632,"made":true,"value":2,"player":"Player 6"},{"x":-16.308,"y":1.635,"made":true,"value":2,"player":"Player 1"},{"x":1.725,"y":24.569,"made":true,"value":3,"player":"Player 10"},{"x":1.293,"y":31.728,"made":false,"value":3,"player":"Player 10"},{"x":19.214,"y":4.135,"made":false,"value":2,"player":"Player 10"},{"x":-5.6,"y":33.054,"made":false,"value":3,"player":"Player 5"},{"x":-8.776,"y":17.476,"made":false,"value":2,"player":"Player 7"},{"x":18.579,"y":41.42,"made":false,"value":3,"player":"Player 6"},{"x":-0.375,"y":24.285,"made":true,"value":3,"player":"Player 6"},{"x":-4.567,"y":46.863,"made":false,"value":3,"player":"Player 5"},{"x":-22.884,"y":7.264,"made":false,"value":2,"player":"Player 2"},{"x":-8.052,"y":35.989,"made":false,"value":3,"player":"Player 5"},{"x":-6.046,"y":46.861,"made":true,"value":3,"player":"Player 5"},{"x":-7.573,"y":35.221,"made":false,"value":3,"player":"Player 6"},{"x":-11.802,"y":5.301,"made":true,"value":2,"player":"Player 4"},{"x":-19.102,"y":44.57,"made":false,"value":3,"player":"Player 8"},{"x":3.755,"y":3.076,"made":true,"value":2,"player":"Player 9"},{"x":-15.513,"y":39.609,"made":false,"value":3,"player":"Player 10"},{"x":-2.449,"y":19.621,"made":false,"value":2,"player":"Player 4"},{"x":-22.376,"y":17.993,"made":false,"value":2,"player":"Player 5"},{"x":-24.18,"y":45.229,"made":true,"value":3,"player":"Player 3"},{"x":-18.776,"y":8.93,"made":true,"value":2,"player":"Player 8"},{"x":23.793,"y":40.046,"made":true,"value":3,"player":"Player 3"},{"x":10.322,"y":23.925,"made":true,"value":3,"player":"Player 3"},{"x":-24.917,"y":39.551,"made":true,"value":3,"player":"Player 10"},{"x":-13.674,"y":6.366,"made":false,"value":2,"player":"Player 10"}]\r
\r
  function getCourtDimensions(type) {\r
    if (type === 'nba') return { width: 50, height: 94, threePoint: 23.75, paintWidth: 16, paintHeight: 19 }\r
    if (type === 'ncaa') return { width: 50, height: 94, threePoint: 22.15, paintWidth: 12, paintHeight: 19 }\r
    return { width: 49, height: 92, threePoint: 22.15, paintWidth: 11.5, paintHeight: 19 } // FIBA\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const court = getCourtDimensions(courtType)\r
\r
    // Scale to fit court\r
    const scaleX = IW / court.width\r
    const scaleY = IH / court.height\r
    const scale = Math.min(scaleX, scaleY) * 0.9\r
    const offsetX = (IW - court.width * scale) / 2\r
    const offsetY = (IH - court.height * scale) / 2\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${offsetX},\${offsetY})\`)\r
\r
    // Court outline\r
    g.append('rect')\r
      .attr('x', 0).attr('y', 0)\r
      .attr('width', court.width * scale).attr('height', court.height * scale)\r
      .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 2 / scale)\r
\r
    // Center circle\r
    g.append('circle')\r
      .attr('cx', court.width / 2 * scale).attr('cy', court.height / 2 * scale)\r
      .attr('r', 6 * scale)\r
      .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 1.5 / scale)\r
\r
    // Center line\r
    g.append('line')\r
      .attr('x1', court.width / 2 * scale).attr('x2', court.width / 2 * scale)\r
      .attr('y1', 0).attr('y2', court.height * scale)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1 / scale)\r
\r
    // Three-point lines\r
    const threePoint = court.threePoint\r
    const basketY = 5.25 // Distance from baseline to basket center\r
    \r
    // Left three-point arc\r
    const leftArc = d3.arc()\r
      .innerRadius(0)\r
      .outerRadius(threePoint * scale)\r
      .startAngle(-Math.PI / 2)\r
      .endAngle(Math.PI / 2)\r
      .centroid([court.width / 2 * scale, basketY * scale]) // This won't work directly, use path\r
\r
    // Draw three-point line as path\r
    const threePointPath = d3.path()\r
    threePointPath.moveTo(0, basketY * scale)\r
    threePointPath.lineTo(0, (basketY - Math.sqrt(Math.max(0, threePoint**2 - (court.width/2)**2))) * scale)\r
    // Arc\r
    threePointPath.arc(court.width / 2 * scale, basketY * scale, threePoint * scale, -Math.PI/2, Math.PI/2)\r
    threePointPath.lineTo(court.width * scale, basketY * scale)\r
    \r
    g.append('path')\r
      .attr('d', threePointPath.toString())\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 2 / scale)\r
\r
    // Paint (key)\r
    g.append('rect')\r
      .attr('x', (court.width - court.paintWidth) / 2 * scale)\r
      .attr('y', 0)\r
      .attr('width', court.paintWidth * scale)\r
      .attr('height', court.paintHeight * scale)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.5 / scale)\r
\r
    // Free throw circle\r
    g.append('circle')\r
      .attr('cx', court.width / 2 * scale)\r
      .attr('cy', court.paintHeight * scale)\r
      .attr('r', 6 * scale)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1 / scale)\r
      .attr('stroke-dasharray', '4,4')\r
\r
    // Baskets\r
    g.append('circle')\r
      .attr('cx', court.width / 2 * scale)\r
      .attr('cy', basketY * scale)\r
      .attr('r', 0.75 * scale)\r
      .attr('fill', '#D50000')\r
      .attr('stroke', '#FFD700')\r
      .attr('stroke-width', 2 / scale)\r
\r
    // Tooltip setup\r
    const tooltip = d3.select('body').append('div')\r
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
      tooltip.html(\`\r
        <strong>\${d.player}</strong><br/>\r
        \${d.made ? '✓ MADE' : '✗ MISSED'}<br/>\r
        \${d.value}PT<br/>\r
        (\${d.x.toFixed(1)}, \${d.y.toFixed(1)}) ft\r
      \`)\r
        .style('left', \`\${event.pageX + 10}px\`)\r
        .style('top', \`\${event.pageY - 10}px\`)\r
        .style('opacity', 1)\r
    }\r
\r
    function hideTooltip() {\r
      tooltip.style('opacity', 0)\r
    }\r
\r
    // Shots\r
    g.selectAll('.shot')\r
      .data(data)\r
      .enter()\r
      .append('circle')\r
      .attr('class', 'shot')\r
      .attr('cx', d => d.x * scale)\r
      .attr('cy', d => d.y * scale)\r
      .attr('r', 4 / scale)\r
      .attr('fill', d => d.made ? colors[2] : colors[1])\r
      .attr('opacity', 0.7)\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1 / scale)\r
      .on('mouseover', function(event, d) {\r
        d3.select(this).attr('r', 6 / scale).attr('opacity', 1)\r
        showTooltip(event, d)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this).attr('r', 4 / scale).attr('opacity', 0.7)\r
        hideTooltip()\r
      })\r
\r
    // Court type selector\r
    const selector = g.append('g').attr('transform', \`translate(10, 10)\`)\r
    selector.append('text')\r
      .attr('x', 0).attr('y', 0)\r
      .attr('font-size', '10px').attr('fill', 'var(--text)').attr('font-weight', 600)\r
      .text('Court: ');\r
    \r
    ['nba', 'ncaa', 'fiba'].forEach((type, i) => {\r
      const btn = selector.append('g')\r
        .attr('transform', \`translate(\${i * 60 + 40}, -8)\`)\r
        .style('cursor', 'pointer')\r
        .on('click', () => setCourtType(type))\r
      \r
      btn.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 50).attr('height', 20)\r
        .attr('rx', 4)\r
        .attr('fill', courtType === type ? colors[0] : 'var(--border)')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1)\r
      \r
      btn.append('text')\r
        .attr('x', 25).attr('y', 14)\r
        .attr('text-anchor', 'middle')\r
        .attr('font-size', '9px')\r
        .attr('fill', courtType === type ? 'white' : 'var(--text)')\r
        .attr('font-weight', 500)\r
        .text(type.toUpperCase())\r
    })\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, \${IH * scale - 60})\`)\r
    lg.append('circle').attr('cx', 0).attr('cy', 0).attr('r', 5).attr('fill', colors[2])\r
    lg.append('text').attr('x', 10).attr('y', 4).attr('font-size', '10px').attr('fill', 'var(--text)').text('Made')\r
    lg.append('circle').attr('cx', 0).attr('cy', 20).attr('r', 5).attr('fill', colors[1])\r
    lg.append('text').attr('x', 10).attr('y', 24).attr('font-size', '10px').attr('fill', 'var(--text)').text('Missed')\r
\r
    // Stats\r
    const madeCount = data.filter(d => d.made).length\r
    const totalCount = data.length\r
    const pct = (madeCount / totalCount * 100).toFixed(1)\r
    \r
    g.append('text')\r
      .attr('x', court.width * scale - 10)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '12px')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-weight', 600)\r
      .text(\`\${pct}% FG (\${madeCount}/\${totalCount})\`)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', court.width / 2 * scale)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(\`\${courtType.toUpperCase()} Shot Chart\`)\r
\r
    return () => {\r
      tooltip.remove()\r
    }\r
\r
  }, [customData, courtType])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};