var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'tile-grid-map',\r
  title: 'Tile Grid Map',\r
  desc: 'Tile Grid Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TileGridMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tile-grid-map"],\r
}\r
\r
export default function TileGridMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  // US state grid layout (approximate geographic positions)\r
  const STATE_GRID = [\r
    ['AK', null, null, null, null, null, null, null, 'ME'],\r
    [null, null, null, null, null, null, 'VT', 'NH', null],\r
    [null, null, null, null, null, 'NY', 'MA', 'RI', null],\r
    [null, null, null, null, 'WI', 'MI', 'CT', null, null],\r
    [null, null, null, 'MN', 'IL', 'IN', 'OH', 'PA', 'NJ'],\r
    [null, null, 'ND', 'SD', 'IA', 'MO', 'KY', 'WV', 'VA'],\r
    [null, null, 'MT', 'WY', 'NE', 'KS', 'TN', 'NC', 'SC'],\r
    [null, null, 'ID', 'CO', 'OK', 'AR', 'AL', 'GA', null],\r
    [null, 'WA', 'OR', 'NV', 'UT', 'AZ', 'NM', null, null],\r
    [null, null, null, 'CA', 'TX', null, null, null, null],\r
  ]\r
\r
  const DEFAULT_DATA = [{"state":"CA","value":85},{"state":"TX","value":72},{"state":"FL","value":65},{"state":"NY","value":58},{"state":"IL","value":45},{"state":"PA","value":42},{"state":"OH","value":38},{"state":"GA","value":35},{"state":"NC","value":32},{"state":"MI","value":30},{"state":"NJ","value":28},{"state":"VA","value":25},{"state":"WA","value":22},{"state":"AZ","value":20},{"state":"MA","value":18},{"state":"IN","value":15},{"state":"MO","value":12},{"state":"TN","value":10},{"state":"CO","value":8},{"state":"MN","value":6},{"state":"WI","value":5},{"state":"AR","value":4},{"state":"AL","value":3},{"state":"SC","value":2},{"state":"KY","value":1}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const maxValue = d3.max(data, d => d.value) || 100\r
    const colorScale = d3.scaleSequential(d3.interpolateBlues)\r
      .domain([0, maxValue])\r
\r
    // Calculate grid dimensions\r
    const gridWidth = STATE_GRID[0].length\r
    const gridHeight = STATE_GRID.length\r
    const tileSize = Math.min(IW / gridWidth, IH / gridHeight) * 0.9\r
    const offsetX = (IW - tileSize * gridWidth) / 2\r
    const offsetY = (IH - tileSize * gridHeight) / 2\r
\r
    // Create grid cells\r
    STATE_GRID.forEach((row, rowIndex) => {\r
      row.forEach((state, colIndex) => {\r
        if (state) {\r
          const stateData = data.find(d => d.state === state)\r
          const value = stateData ? stateData.value : 0\r
          \r
          const x = offsetX + colIndex * tileSize\r
          const y = offsetY + rowIndex * tileSize\r
\r
          // Draw tile\r
          svg.append('rect')\r
            .attr('transform', \`translate(\${M.left + x},\${M.top + y})\`)\r
            .attr('width', tileSize - 2)\r
            .attr('height', tileSize - 2)\r
            .attr('fill', colorScale(value))\r
            .attr('stroke', 'white')\r
            .attr('stroke-width', 1)\r
            .attr('rx', 2)\r
\r
          // Add state abbreviation\r
          svg.append('text')\r
            .attr('transform', \`translate(\${M.left + x + tileSize / 2},\${M.top + y + tileSize / 2 + 4})\`)\r
            .text(state)\r
            .attr('text-anchor', 'middle')\r
            .attr('fill', value > maxValue / 2 ? 'white' : 'black')\r
            .attr('font-size', Math.min(tileSize / 3, 12))\r
            .attr('font-weight', 'bold')\r
\r
          // Add value for tiles with data\r
          if (stateData) {\r
            svg.append('text')\r
              .attr('transform', \`translate(\${M.left + x + tileSize / 2},\${M.top + y + tileSize - 5})\`)\r
              .text(value)\r
              .attr('text-anchor', 'middle')\r
              .attr('fill', value > maxValue / 2 ? 'white' : 'black')\r
              .attr('font-size', Math.min(tileSize / 4, 10))\r
          }\r
        }\r
      })\r
    })\r
\r
    // Add title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('US States Tile Grid Map')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Add color legend\r
    const legendWidth = 80\r
    const legendHeight = 10\r
    const legendX = M.left + IW - legendWidth - 10\r
    const legendY = M.top + IH + 20\r
\r
    // Legend gradient\r
    const defs = svg.append('defs')\r
    const gradient = defs.append('linearGradient')\r
      .attr('id', 'legendGradient')\r
      .attr('x1', '0%')\r
      .attr('y1', '0%')\r
      .attr('x2', '100%')\r
      .attr('y2', '0%')\r
\r
    gradient.append('stop')\r
      .attr('offset', '0%')\r
      .attr('stop-color', colorScale(0))\r
\r
    gradient.append('stop')\r
      .attr('offset', '100%')\r
      .attr('stop-color', colorScale(maxValue))\r
\r
    svg.append('rect')\r
      .attr('transform', \`translate(\${legendX},\${legendY})\`)\r
      .attr('width', legendWidth)\r
      .attr('height', legendHeight)\r
      .attr('fill', 'url(#legendGradient)')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    // Legend labels\r
    svg.append('text')\r
      .attr('transform', \`translate(\${legendX},\${legendY + legendHeight + 12})\`)\r
      .text('0')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(\${legendX + legendWidth},\${legendY + legendHeight + 12})\`)\r
      .text(maxValue)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};