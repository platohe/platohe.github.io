var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'collision',\r
  title: 'Collision',\r
  desc: 'Collision — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Collision',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","collision"],\r
}\r
\r
export default function Collision({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const width = 380, height = 265\r
    const DEFAULT_DATA = [{"r":17.017,"x":172.419,"y":211.805,"vx":0.339,"vy":-0.65,"color":"#ef4444"},{"r":12.098,"x":232.413,"y":214.732,"vx":-0.055,"vy":-0.5,"color":"#06b6d4"},{"r":19.186,"x":124.381,"y":64.382,"vx":0.001,"vy":0.373,"color":"#ef4444"},{"r":8.058,"x":180.066,"y":208.401,"vx":-0.898,"vy":0.185,"color":"#6366f1"},{"r":12.004,"x":41.006,"y":61.78,"vx":0.567,"vy":0.061,"color":"#6366f1"},{"r":10.595,"x":306.514,"y":129.741,"vx":0.618,"vy":-0.361,"color":"#10b981"},{"r":8.562,"x":37.474,"y":145.235,"vx":0.193,"vy":-0.51,"color":"#ef4444"},{"r":11.143,"x":123.234,"y":186.19,"vx":0.717,"vy":0.016,"color":"#f59e0b"},{"r":12.263,"x":119.617,"y":36.806,"vx":0.32,"vy":0.362,"color":"#8b5cf6"},{"r":21.918,"x":49.909,"y":232.34,"vx":-0.138,"vy":0.885,"color":"#6366f1"},{"r":9.664,"x":25.387,"y":101.1,"vx":-0.037,"vy":0.224,"color":"#06b6d4"},{"r":9.164,"x":264.663,"y":230.345,"vx":-0.443,"vy":0.413,"color":"#f59e0b"},{"r":15.805,"x":299.443,"y":47.133,"vx":0.991,"vy":0.126,"color":"#06b6d4"},{"r":14.51,"x":216.674,"y":95.816,"vx":0.192,"vy":-0.354,"color":"#8b5cf6"},{"r":12.428,"x":172.919,"y":209.703,"vx":0.39,"vy":0.988,"color":"#06b6d4"},{"r":14.478,"x":205.372,"y":86.584,"vx":-0.798,"vy":0.393,"color":"#f59e0b"},{"r":19.789,"x":327.624,"y":41.069,"vx":-0.049,"vy":0.644,"color":"#6366f1"},{"r":22.591,"x":80.654,"y":179.622,"vx":0.399,"vy":-0.554,"color":"#10b981"},{"r":10.452,"x":242.587,"y":95.585,"vx":-0.586,"vy":0.258,"color":"#06b6d4"},{"r":12.896,"x":289.425,"y":108.413,"vx":-0.737,"vy":0.727,"color":"#10b981"},{"r":8.143,"x":270.724,"y":162.934,"vx":0.752,"vy":0.816,"color":"#f59e0b"},{"r":17.059,"x":186.342,"y":61.405,"vx":-0.905,"vy":0.411,"color":"#8b5cf6"},{"r":12.372,"x":113.665,"y":95.735,"vx":-0.942,"vy":-0.558,"color":"#06b6d4"},{"r":16.585,"x":356.112,"y":56.87,"vx":-0.658,"vy":0.122,"color":"#f59e0b"},{"r":13.92,"x":167.7,"y":114.13,"vx":0.372,"vy":-0.203,"color":"#10b981"},{"r":21.435,"x":131.288,"y":131.434,"vx":0.222,"vy":0.093,"color":"#ef4444"},{"r":11.531,"x":130.624,"y":87.226,"vx":-0.359,"vy":0.339,"color":"#f59e0b"},{"r":10.54,"x":256.295,"y":90.7,"vx":-0.75,"vy":-0.372,"color":"#6366f1"},{"r":16.663,"x":90.614,"y":128.345,"vx":-0.24,"vy":0.424,"color":"#06b6d4"},{"r":20.175,"x":169.383,"y":54.682,"vx":0.735,"vy":0.051,"color":"#06b6d4"}]\r
    const circles = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const simulation = d3.forceSimulation(circles)\r
      .force('charge', d3.forceManyBody().strength(-50))\r
      .force('collision', d3.forceCollide().radius((d) => d.r + 2))\r
      .force('x', d3.forceX(width / 2).strength(0.05))\r
      .force('y', d3.forceY(height / 2).strength(0.05))\r
\r
    const circle = svg.selectAll('circle')\r
      .data(circles)\r
      .join('circle')\r
      .attr('r', (d) => d.r)\r
      .attr('fill', (d) => d.color)\r
      .attr('opacity', 0.8)\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
\r
    simulation.on('tick', () => {\r
      circle.attr('cx', (d) => d.x).attr('cy', (d) => d.y)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};