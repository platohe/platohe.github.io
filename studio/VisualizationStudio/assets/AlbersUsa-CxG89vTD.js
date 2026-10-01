var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'albers-usa',\r
  title: 'Albers Usa',\r
  desc: 'Albers Usa — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AlbersUsa',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","albers-usa"],\r
}\r
\r
export default function AlbersUsa({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"state":"WA","val":78,"x":75,"y":70},{"state":"OR","val":62,"x":70,"y":100},{"state":"CA","val":95,"x":60,"y":150},{"state":"NV","val":45,"x":90,"y":130},{"state":"ID","val":38,"x":110,"y":85},{"state":"MT","val":32,"x":145,"y":70},{"state":"WY","val":28,"x":145,"y":105},{"state":"UT","val":54,"x":120,"y":140},{"state":"AZ","val":70,"x":110,"y":185},{"state":"CO","val":82,"x":155,"y":145},{"state":"NM","val":40,"x":150,"y":190},{"state":"ND","val":30,"x":195,"y":70},{"state":"SD","val":35,"x":195,"y":100},{"state":"NE","val":50,"x":195,"y":130},{"state":"KS","val":58,"x":200,"y":160},{"state":"OK","val":64,"x":205,"y":190},{"state":"TX","val":88,"x":200,"y":235},{"state":"MN","val":76,"x":235,"y":80},{"state":"IA","val":60,"x":240,"y":120},{"state":"MO","val":68,"x":245,"y":155},{"state":"WI","val":72,"x":260,"y":90},{"state":"IL","val":85,"x":265,"y":130},{"state":"MI","val":79,"x":295,"y":100},{"state":"FL","val":92,"x":330,"y":240},{"state":"NY","val":90,"x":345,"y":90},{"state":"AK","val":42,"x":55,"y":245,"isInset":true},{"state":"HI","val":65,"x":115,"y":245,"isInset":true}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateViridis)\r
      .domain([20, 100])\r
\r
    const g = svg.append('g')\r
\r
    // Continental US region\r
    data.filter(d => !d.isInset).forEach(d => {\r
      g.append('circle')\r
        .attr('cx', d.x)\r
        .attr('cy', d.y)\r
        .attr('r', 11)\r
        .attr('fill', colorScale(d.val))\r
        .attr('stroke', '#ffffff')\r
        .attr('stroke-width', 1.2)\r
\r
      g.append('text')\r
        .attr('x', d.x)\r
        .attr('y', d.y + 3)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', '#ffffff')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', '700')\r
        .text(d.state)\r
    })\r
\r
    // Inset Boxes for Alaska & Hawaii\r
    // Alaska Inset Box\r
    g.append('rect')\r
      .attr('x', 30)\r
      .attr('y', 225)\r
      .attr('width', 50)\r
      .attr('height', 40)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '2,2')\r
\r
    g.append('text')\r
      .attr('x', 35)\r
      .attr('y', 235)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '6px')\r
      .text('Alaska Inset')\r
\r
    // Hawaii Inset Box\r
    g.append('rect')\r
      .attr('x', 90)\r
      .attr('y', 225)\r
      .attr('width', 50)\r
      .attr('height', 40)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '2,2')\r
\r
    g.append('text')\r
      .attr('x', 95)\r
      .attr('y', 235)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '6px')\r
      .text('Hawaii Inset')\r
\r
    // Inset Nodes\r
    data.filter(d => d.isInset).forEach(d => {\r
      g.append('circle')\r
        .attr('cx', d.x)\r
        .attr('cy', d.y)\r
        .attr('r', 9)\r
        .attr('fill', colorScale(d.val))\r
        .attr('stroke', '#ffffff')\r
        .attr('stroke-width', 1)\r
\r
      g.append('text')\r
        .attr('x', d.x)\r
        .attr('y', d.y + 2.5)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', '#ffffff')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', '700')\r
        .text(d.state)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Albers USA Composite Equal-Area Projection')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Composite Conic with Scaled Insets for AK & HI')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};