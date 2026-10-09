var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'forecast-fan-chart',\r
  title: 'Forecast Fan Chart',\r
  desc: 'Forecast Fan Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ForecastFanChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","forecast-fan-chart"],\r
}\r
\r
export default function ForecastFanChart({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"historical":[{"date":"2022-01-01","value":100.303},{"date":"2022-02-01","value":103.145},{"date":"2022-03-01","value":106.988},{"date":"2022-04-01","value":107.909},{"date":"2022-05-01","value":106.555},{"date":"2022-06-01","value":106.58},{"date":"2022-07-01","value":104.12},{"date":"2022-08-01","value":103.474},{"date":"2022-09-01","value":103.166},{"date":"2022-10-01","value":102.117},{"date":"2022-11-01","value":102.92},{"date":"2022-12-01","value":107.446},{"date":"2023-01-01","value":110.337},{"date":"2023-02-01","value":112.321},{"date":"2023-03-01","value":114.622},{"date":"2023-04-01","value":117.002},{"date":"2023-05-01","value":117.69},{"date":"2023-06-01","value":116.432},{"date":"2023-07-01","value":112.912},{"date":"2023-08-01","value":112.612},{"date":"2023-09-01","value":112.682},{"date":"2023-10-01","value":110.454},{"date":"2023-11-01","value":113.547},{"date":"2023-12-01","value":114.495},{"date":"2024-01-01","value":118.501},{"date":"2024-02-01","value":121.185},{"date":"2024-03-01","value":124.187},{"date":"2024-04-01","value":127.451},{"date":"2024-05-01","value":126.821},{"date":"2024-06-01","value":124.281},{"date":"2024-07-01","value":123.019},{"date":"2024-08-01","value":123.328},{"date":"2024-09-01","value":121.233},{"date":"2024-10-01","value":122.327},{"date":"2024-11-01","value":122.328},{"date":"2024-12-01","value":125.35}],"forecast":[{"date":"2025-01-01","mean":130,"lower80":122,"upper80":138,"lower95":118,"upper95":142},{"date":"2025-02-01","mean":130.7,"lower80":122.2,"upper80":139.2,"lower95":118,"upper95":143.4},{"date":"2025-03-01","mean":131.4,"lower80":122.4,"upper80":140.4,"lower95":118,"upper95":144.8},{"date":"2025-04-01","mean":132.1,"lower80":122.6,"upper80":141.6,"lower95":118,"upper95":146.2},{"date":"2025-05-01","mean":132.8,"lower80":122.8,"upper80":142.8,"lower95":118,"upper95":147.6},{"date":"2025-06-01","mean":133.5,"lower80":123,"upper80":144,"lower95":118,"upper95":149},{"date":"2025-07-01","mean":134.2,"lower80":123.2,"upper80":145.2,"lower95":118,"upper95":150.4},{"date":"2025-08-01","mean":134.9,"lower80":123.4,"upper80":146.4,"lower95":118,"upper95":151.8},{"date":"2025-09-01","mean":135.6,"lower80":123.6,"upper80":147.6,"lower95":118,"upper95":153.2},{"date":"2025-10-01","mean":136.3,"lower80":123.8,"upper80":148.8,"lower95":118,"upper95":154.6},{"date":"2025-11-01","mean":137,"lower80":124,"upper80":150,"lower95":118,"upper95":156},{"date":"2025-12-01","mean":137.7,"lower80":124.2,"upper80":151.2,"lower95":118,"upper95":157.4}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { historical, forecast } = data\r
\r
    const nHist = historical.length\r
    const nFore = forecast.length\r
    const nTotal = nHist + nFore\r
\r
    const x = d3.scaleLinear().domain([0, nTotal - 1]).range([0, IW])\r
\r
    const allValues = [\r
      ...historical.map(h => h.value),\r
      ...forecast.flatMap(f => [f.lower95, f.upper95])\r
    ]\r
    const y = d3.scaleLinear().domain(d3.extent(allValues)).range([IH, 0]).nice()\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Historical line\r
    const histLine = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => y(d.value))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(historical)\r
      .attr('d', histLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    // Forecast mean line\r
    const foreLine = d3.line()\r
      .x((d, i) => x(nHist + i))\r
      .y(d => y(d.mean))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(forecast)\r
      .attr('d', foreLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[1])\r
      .attr('stroke-width', 2.5)\r
      .attr('stroke-dasharray', '6,4')\r
\r
    // 95% prediction interval\r
    const area95 = d3.area()\r
      .x((d, i) => x(nHist + i))\r
      .y0(d => y(d.lower95))\r
      .y1(d => y(d.upper95))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(forecast)\r
      .attr('d', area95)\r
      .attr('fill', colors[1])\r
      .attr('opacity', 0.15)\r
\r
    // 80% prediction interval\r
    const area80 = d3.area()\r
      .x((d, i) => x(nHist + i))\r
      .y0(d => y(d.lower80))\r
      .y1(d => y(d.upper80))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(forecast)\r
      .attr('d', area80)\r
      .attr('fill', colors[1])\r
      .attr('opacity', 0.25)\r
\r
    // Forecast mean line\r
    g.append('path')\r
      .datum(forecast)\r
      .attr('d', foreLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[1])\r
      .attr('stroke-width', 2.5)\r
\r
    // Vertical separator line\r
    g.append('line')\r
      .attr('x1', x(nHist - 1)).attr('x2', x(nHist - 1))\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '4,4')\r
\r
    g.append('text')\r
      .attr('x', x(nHist - 1))\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text('Forecast Start')\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickFormat((d, i) => {\r
        if (d < nHist) return historical[d]?.date?.slice(0, 7)\r
        return forecast[d - nHist]?.date?.slice(0, 7)\r
      }).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 0).attr('y2', 0).attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    lg.append('text').attr('x', 25).attr('y', 4).attr('font-size', '10px').attr('fill', 'var(--text)').text('Historical')\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 20).attr('y2', 20).attr('stroke', colors[1]).attr('stroke-width', 2.5).attr('stroke-dasharray', '6,4')\r
    lg.append('text').attr('x', 25).attr('y', 24).attr('font-size', '10px').attr('fill', 'var(--text)').text('Forecast Mean')\r
    lg.append('rect').attr('x', 0).attr('y', 38).attr('width', 20).attr('height', 12).attr('fill', colors[1]).attr('opacity', 0.15)\r
    lg.append('text').attr('x', 25).attr('y', 48).attr('font-size', '10px').attr('fill', 'var(--text)').text('95% PI')\r
    lg.append('rect').attr('x', 0).attr('y', 55).attr('width', 20).attr('height', 12).attr('fill', colors[1]).attr('opacity', 0.25)\r
    lg.append('text').attr('x', 25).attr('y', 65).attr('font-size', '10px').attr('fill', 'var(--text)').text('80% PI')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Forecast Fan Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};