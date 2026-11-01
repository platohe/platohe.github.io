var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bode-plot',\r
  title: 'Bode Plot',\r
  desc: 'Bode Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BodePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bode-plot"],\r
}\r
\r
export default function BodePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"mag":[{"freq":0.01,"mag":40.202},{"freq":0.012,"mag":39.105},{"freq":0.014,"mag":36.15},{"freq":0.017,"mag":34.746},{"freq":0.021,"mag":34.331},{"freq":0.025,"mag":31.5},{"freq":0.03,"mag":30.891},{"freq":0.036,"mag":28.195},{"freq":0.044,"mag":27.573},{"freq":0.052,"mag":24.608},{"freq":0.063,"mag":24.675},{"freq":0.076,"mag":22.585},{"freq":0.091,"mag":20.334},{"freq":0.11,"mag":18.571},{"freq":0.132,"mag":17.661},{"freq":0.158,"mag":15.346},{"freq":0.191,"mag":14.375},{"freq":0.229,"mag":12.439},{"freq":0.275,"mag":10.275},{"freq":0.331,"mag":9.713},{"freq":0.398,"mag":7.49},{"freq":0.479,"mag":5.819},{"freq":0.575,"mag":5.277},{"freq":0.692,"mag":3.216},{"freq":0.832,"mag":1.168},{"freq":1,"mag":-0.851},{"freq":1.202,"mag":-1.238},{"freq":1.445,"mag":-2.344},{"freq":1.738,"mag":-3.913},{"freq":2.089,"mag":-5.515},{"freq":2.512,"mag":-8.778},{"freq":3.02,"mag":-9.879},{"freq":3.631,"mag":-10.976},{"freq":4.365,"mag":-13.645},{"freq":5.248,"mag":-13.53},{"freq":6.31,"mag":-15.587},{"freq":7.586,"mag":-17.559},{"freq":9.12,"mag":-19.959},{"freq":10.965,"mag":-20.674},{"freq":13.183,"mag":-22.532},{"freq":15.849,"mag":-24.326},{"freq":19.055,"mag":-25.954},{"freq":22.909,"mag":-27.61},{"freq":27.542,"mag":-28.114},{"freq":33.113,"mag":-29.412},{"freq":39.811,"mag":-32.136},{"freq":47.863,"mag":-34.008},{"freq":57.544,"mag":-34.807},{"freq":69.183,"mag":-36.228},{"freq":83.176,"mag":-39.213}],"phase":[{"freq":0.01,"phase":-1.046},{"freq":0.012,"phase":-0.56},{"freq":0.014,"phase":-1.203},{"freq":0.017,"phase":-1.163},{"freq":0.021,"phase":-1.925},{"freq":0.025,"phase":-1.059},{"freq":0.03,"phase":-3.217},{"freq":0.036,"phase":-3.151},{"freq":0.044,"phase":-3.432},{"freq":0.052,"phase":-4.575},{"freq":0.063,"phase":-6.688},{"freq":0.076,"phase":-7.751},{"freq":0.091,"phase":-8.837},{"freq":0.11,"phase":-8.043},{"freq":0.132,"phase":-11.901},{"freq":0.158,"phase":-11.285},{"freq":0.191,"phase":-13.477},{"freq":0.229,"phase":-16.925},{"freq":0.275,"phase":-20.781},{"freq":0.331,"phase":-22.098},{"freq":0.398,"phase":-25.19},{"freq":0.479,"phase":-29.722},{"freq":0.575,"phase":-31.797},{"freq":0.692,"phase":-37.691},{"freq":0.832,"phase":-41.488},{"freq":1,"phase":-44.52},{"freq":1.202,"phase":-48.554},{"freq":1.445,"phase":-54.433},{"freq":1.738,"phase":-57.333},{"freq":2.089,"phase":-61.955},{"freq":2.512,"phase":-65.825},{"freq":3.02,"phase":-67.667},{"freq":3.631,"phase":-69.366},{"freq":4.365,"phase":-72.566},{"freq":5.248,"phase":-76.261},{"freq":6.31,"phase":-78.649},{"freq":7.586,"phase":-78.552},{"freq":9.12,"phase":-79.62},{"freq":10.965,"phase":-81.23},{"freq":13.183,"phase":-83.419},{"freq":15.849,"phase":-84.37},{"freq":19.055,"phase":-84.824},{"freq":22.909,"phase":-86.386},{"freq":27.542,"phase":-86.262},{"freq":33.113,"phase":-86.191},{"freq":39.811,"phase":-87.659},{"freq":47.863,"phase":-89.355},{"freq":57.544,"phase":-89.023},{"freq":69.183,"phase":-87.503},{"freq":83.176,"phase":-89.005}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.mag) ? customData : DEFAULT_DATA\r
    const panelH = (IH - 20) / 2\r
\r
    // Magnitude plot\r
    const x1 = d3.scaleLog().domain([0.01, 10]).range([0, IW])\r
    const y1 = d3.scaleLinear().domain([-60, 20]).range([panelH, 0])\r
    const magLine = d3.line().x(dd => x1(dd.freq)).y(dd => y1(dd.mag)).curve(d3.curveMonotoneX)\r
\r
    svg.append('rect').attr('x', M.left).attr('y', M.top).attr('width', IW).attr('height', panelH)\r
      .attr('fill', 'var(--panel-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
    svg.append('path').datum(d.mag).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', magLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
    // Phase plot\r
    const x2 = d3.scaleLog().domain([0.01, 10]).range([0, IW])\r
    const y2 = d3.scaleLinear().domain([-100, 10]).range([panelH, 0])\r
    const phaseLine = d3.line().x(dd => x2(dd.freq)).y(dd => y2(dd.phase)).curve(d3.curveMonotoneX)\r
\r
    svg.append('rect').attr('x', M.left).attr('y', M.top + panelH).attr('width', IW).attr('height', panelH)\r
      .attr('fill', 'var(--panel-bg)').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
    svg.append('path').datum(d.phase).attr('transform', \`translate(\${M.left},\${M.top + panelH})\`)\r
      .attr('d', phaseLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2)\r
\r
    // Labels\r
    svg.append('text').attr('x', M.left + 4).attr('y', M.top + 14).attr('fill', colors[0]).attr('font-size', '11px').attr('font-weight', 'bold').text('Magnitude (dB)')\r
    svg.append('text').attr('x', M.left + 4).attr('y', M.top + panelH + 14).attr('fill', colors[1]).attr('font-size', '11px').attr('font-weight', 'bold').text('Phase (deg)')\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH - 20})\`)\r
      .call(d3.axisBottom(x1).ticks(4).tickFormat(d => '10^' + d)).call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH - 2})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Frequency')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Bode Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};