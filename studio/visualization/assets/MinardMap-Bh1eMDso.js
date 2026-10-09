var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'minard-map',\r
  title: 'Minard Map',\r
  desc: 'Minard Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MinardMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","minard-map"],\r
}\r
\r
export default function MinardMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"army":[{"lon":24,"lat":54.9,"size":422000,"dir":1,"name":"Kowno"},{"lon":25.3,"lat":54.7,"size":400000,"dir":1,"name":"Wilna"},{"lon":26.8,"lat":54.3,"size":300000,"dir":1,"name":"Molodexno"},{"lon":28.5,"lat":54.1,"size":280000,"dir":1,"name":"Glubokoe"},{"lon":30.2,"lat":55.2,"size":175000,"dir":1,"name":"Witebsk"},{"lon":32,"lat":54.8,"size":145000,"dir":1,"name":"Smolensk"},{"lon":34.3,"lat":55.5,"size":127000,"dir":1,"name":"Dorogobouge"},{"lon":35.8,"lat":55.5,"size":100000,"dir":1,"name":"Mojaisk"},{"lon":37.6,"lat":55.7,"size":100000,"dir":1,"name":"Moscou"},{"lon":37.6,"lat":55.7,"size":100000,"dir":-1},{"lon":36,"lat":55.5,"size":96000,"dir":-1},{"lon":34.3,"lat":55.2,"size":55000,"dir":-1},{"lon":32,"lat":54.6,"size":37000,"dir":-1},{"lon":30.4,"lat":54.5,"size":24000,"dir":-1,"name":"Orscha"},{"lon":28.7,"lat":54,"size":20000,"dir":-1,"name":"Berezina"},{"lon":26.8,"lat":54.3,"size":12000,"dir":-1},{"lon":25.3,"lat":54.7,"size":10000,"dir":-1}],"temperatures":[{"lon":37.6,"temp":0,"date":"Oct 18"},{"lon":36,"temp":0,"date":"Oct 24"},{"lon":32,"temp":-9,"date":"Nov 9"},{"lon":30.4,"temp":-21,"date":"Nov 14"},{"lon":28.7,"temp":-11,"date":"Nov 24"},{"lon":26.8,"temp":-20,"date":"Nov 28"},{"lon":25.3,"temp":-26,"date":"Dec 6"},{"lon":24,"temp":-30,"date":"Dec 7"}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.army)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const margin = { top: 32, right: 20, bottom: 50, left: 35 }\r
    const plotW = width - margin.left - margin.right\r
    const mapH = 135\r
    const tempH = 55\r
    const gap = 20\r
\r
    // Scales\r
    const xLon = d3.scaleLinear()\r
      .domain([23.5, 38.2])\r
      .range([margin.left, margin.left + plotW])\r
\r
    const yLat = d3.scaleLinear()\r
      .domain([53.8, 56.2])\r
      .range([margin.top + mapH, margin.top])\r
\r
    const strokeWidthScale = d3.scaleLinear()\r
      .domain([10000, 422000])\r
      .range([2.5, 22])\r
\r
    // Upper Map Region\r
    const advanceData = data.army.filter(d => d.dir === 1)\r
    const retreatData = data.army.filter(d => d.dir === -1)\r
\r
    // Draw Advance segments\r
    for (let i = 0; i < advanceData.length - 1; i++) {\r
      const p1 = advanceData[i]\r
      const p2 = advanceData[i + 1]\r
      const sw = strokeWidthScale((p1.size + p2.size) / 2)\r
\r
      svg.append('line')\r
        .attr('x1', xLon(p1.lon))\r
        .attr('y1', yLat(p1.lat))\r
        .attr('x2', xLon(p2.lon))\r
        .attr('y2', yLat(p2.lat))\r
        .attr('stroke', '#eab308')\r
        .attr('stroke-width', sw)\r
        .attr('stroke-linecap', 'round')\r
        .attr('stroke-opacity', 0.85)\r
    }\r
\r
    // Draw Retreat segments\r
    for (let i = 0; i < retreatData.length - 1; i++) {\r
      const p1 = retreatData[i]\r
      const p2 = retreatData[i + 1]\r
      const sw = strokeWidthScale((p1.size + p2.size) / 2)\r
\r
      svg.append('line')\r
        .attr('x1', xLon(p1.lon))\r
        .attr('y1', yLat(p1.lat) + 3)\r
        .attr('x2', xLon(p2.lon))\r
        .attr('y2', yLat(p2.lat) + 3)\r
        .attr('stroke', '#334155')\r
        .attr('stroke-width', sw)\r
        .attr('stroke-linecap', 'round')\r
        .attr('stroke-opacity', 0.9)\r
    }\r
\r
    // City Labels\r
    data.army.filter(d => d.name).forEach(d => {\r
      svg.append('circle')\r
        .attr('cx', xLon(d.lon))\r
        .attr('cy', yLat(d.lat))\r
        .attr('r', 2)\r
        .attr('fill', '#ffffff')\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 0.8)\r
\r
      svg.append('text')\r
        .attr('x', xLon(d.lon))\r
        .attr('y', yLat(d.lat) - 6)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', '600')\r
        .text(d.name)\r
    })\r
\r
    // Lower Temperature Region\r
    const tempYTop = margin.top + mapH + gap\r
    const yTemp = d3.scaleLinear()\r
      .domain([0, -35])\r
      .range([tempYTop, tempYTop + tempH])\r
\r
    // Grid for temperature\r
    const tempTicks = [0, -10, -20, -30]\r
    tempTicks.forEach(t => {\r
      svg.append('line')\r
        .attr('x1', margin.left)\r
        .attr('x2', margin.left + plotW)\r
        .attr('y1', yTemp(t))\r
        .attr('y2', yTemp(t))\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-opacity', 0.4)\r
        .attr('stroke-dasharray', '2,2')\r
\r
      svg.append('text')\r
        .attr('x', margin.left - 5)\r
        .attr('y', yTemp(t) + 2.5)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '6.5px')\r
        .attr('font-family', 'var(--font-mono)')\r
        .text(\`\${t}°C\`)\r
    })\r
\r
    // Temp line\r
    const tempLine = d3.line()\r
      .x(d => xLon(d.lon))\r
      .y(d => yTemp(d.temp))\r
\r
    svg.append('path')\r
      .datum(data.temperatures)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 2)\r
      .attr('d', tempLine)\r
\r
    // Temp points + connecting dashed lines to retreat map\r
    data.temperatures.forEach(t => {\r
      // Dashed vertical connector\r
      svg.append('line')\r
        .attr('x1', xLon(t.lon))\r
        .attr('y1', tempYTop)\r
        .attr('x2', xLon(t.lon))\r
        .attr('y2', yTemp(t.temp))\r
        .attr('stroke', '#38bdf8')\r
        .attr('stroke-dasharray', '2,2')\r
        .attr('stroke-opacity', 0.5)\r
\r
      svg.append('circle')\r
        .attr('cx', xLon(t.lon))\r
        .attr('cy', yTemp(t.temp))\r
        .attr('r', 2.5)\r
        .attr('fill', '#38bdf8')\r
\r
      svg.append('text')\r
        .attr('x', xLon(t.lon))\r
        .attr('y', yTemp(t.temp) + 9)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '5.5px')\r
        .text(t.date)\r
    })\r
\r
    // Legend / Title\r
    svg.append('text')\r
      .attr('x', margin.left)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Minard 1812: Napoleon\\'s Russian Campaign')\r
\r
    const leg = svg.append('g').attr('transform', \`translate(\${width - 155}, 10)\`)\r
    leg.append('rect').attr('x', 0).attr('y', 0).attr('width', 10).attr('height', 5).attr('fill', '#eab308')\r
    leg.append('text').attr('x', 14).attr('y', 5).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('Advance (422k)')\r
\r
    leg.append('rect').attr('x', 75).attr('y', 0).attr('width', 10).attr('height', 5).attr('fill', '#334155')\r
    leg.append('text').attr('x', 89).attr('y', 5).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('Retreat (10k)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};