var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'great-circle-map',\r
  title: 'Great Circle Map',\r
  desc: 'Great Circle Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GreatCircleMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","great-circle-map"],\r
}\r
\r
export default function GreatCircleMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"from":{"lat":40.7,"lon":-74},"to":{"lat":51.5,"lon":-0.1},"name":"NYC-London","value":100},{"from":{"lat":35.7,"lon":139.7},"to":{"lat":48.9,"lon":2.4},"name":"Tokyo-Paris","value":80},{"from":{"lat":-33.9,"lon":18.4},"to":{"lat":-23.5,"lon":-46.6},"name":"Cape Town-Sao Paulo","value":60},{"from":{"lat":37.8,"lon":-122.4},"to":{"lat":35.7,"lon":139.7},"name":"SF-Tokyo","value":90},{"from":{"lat":55.8,"lon":37.6},"to":{"lat":28.6,"lon":77.2},"name":"Moscow-Delhi","value":45},{"from":{"lat":-34.6,"lon":-58.4},"to":{"lat":-22.9,"lon":-43.2},"name":"Buenos Aires-Rio","value":55}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.from) ? customData : DEFAULT_DATA\r
\r
    // Simple equirectangular projection\r
    const proj = d3.geoEquirectangular().scale(IW / (2 * Math.PI)).translate([IW / 2, IH / 2])\r
\r
    // Draw graticule\r
    const graticule = d3.geoGraticule()\r
    const graticulePath = d3.geoPath(proj)\r
    const graticuleD = graticulePath(graticule)\r
    if (graticuleD) {\r
      svg.append('path').datum(graticule).attr('d', graticulePath).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 0.3).attr('opacity', 0.5)\r
    }\r
\r
    // Draw map outline (simplified world)\r
    svg.append('rect').attr('x', M.left).attr('y', M.top).attr('width', IW).attr('height', IH)\r
      .attr('fill', 'var(--map-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
    const maxVal = d3.max(data, d => d.value) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateOranges).domain([0, maxVal])\r
\r
    data.forEach(d => {\r
      const from = proj([d.from.lon, d.from.lat])\r
      const to = proj([d.to.lon, d.to.lat])\r
      if (from.some(isNaN) || to.some(isNaN)) return\r
\r
      // Great circle arc\r
      const midLat = (d.from.lat + d.to.lat) / 2 + Math.abs(d.to.lat - d.from.lat) * 0.3\r
      const midLon = (d.from.lon + d.to.lon) / 2\r
      const mid = proj([midLon, midLat])\r
      if (mid.some(isNaN)) return\r
\r
      const path = \`M\${from[0]},\${from[1]} Q\${mid[0]},\${mid[1]} \${to[0]},\${to[1]}\`\r
      svg.append('path').attr('d', path)\r
        .attr('fill', 'none').attr('stroke', colorScale(d.value)).attr('stroke-width', d.value / maxVal * 3)\r
        .attr('opacity', 0.7)\r
\r
      // Endpoints\r
      svg.append('circle').attr('cx', from[0]).attr('cy', from[1]).attr('r', 4)\r
        .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
      svg.append('circle').attr('cx', to[0]).attr('cy', to[1]).attr('r', 4)\r
        .attr('fill', colors[1]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
      // City labels\r
      svg.append('text').attr('x', from[0] + 6).attr('y', from[1] + 4)\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '8px').text(d.from.lat.toFixed(0) + '°')\r
      svg.append('text').attr('x', to[0] + 6).attr('y', to[1] + 4)\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '8px').text(d.to.lat.toFixed(0) + '°')\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Great Circle Routes')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};