var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'silhouette-plot',\r
  title: 'Silhouette Plot',\r
  desc: 'Silhouette Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SilhouettePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","silhouette-plot"],\r
}\r
\r
export default function SilhouettePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"k":2,"meanSil":0.414,"scores":[0.398,0.519,0.465,0.316,0.422,0.346,0.451,0.523,0.405,0.339,0.528,0.487,0.356,0.323,0.414,0.47,0.447,0.265,0.405,0.515,0.279,0.441,0.273,0.344,0.282,0.319,0.499,0.423,0.272,0.316]},{"k":3,"meanSil":0.373,"scores":[0.369,0.466,0.319,0.358,0.234,0.238,0.39,0.402,0.296,0.417,0.286,0.314,0.445,0.481,0.375,0.284,0.308,0.311,0.245,0.421,0.427,0.431,0.501,0.249,0.506,0.352,0.506,0.264,0.256,0.228]},{"k":4,"meanSil":0.286,"scores":[0.281,0.32,0.406,0.159,0.352,0.417,0.22,0.348,0.19,0.292,0.383,0.172,0.435,0.305,0.411,0.266,0.31,0.237,0.315,0.233,0.355,0.225,0.271,0.389,0.345,0.434,0.403,0.266,0.3,0.225]},{"k":5,"meanSil":0.234,"scores":[0.293,0.178,0.319,0.355,0.112,0.226,0.33,0.123,0.376,0.137,0.297,0.294,0.151,0.208,0.133,0.28,0.184,0.146,0.272,0.35,0.182,0.321,0.202,0.123,0.343,0.195,0.087,0.305,0.274,0.346]},{"k":6,"meanSil":0.295,"scores":[0.208,0.326,0.292,0.2,0.159,0.357,0.357,0.232,0.228,0.246,0.154,0.211,0.443,0.317,0.442,0.194,0.196,0.313,0.233,0.263,0.275,0.27,0.351,0.264,0.246,0.414,0.243,0.294,0.328,0.309]},{"k":7,"meanSil":0.248,"scores":[0.169,0.196,0.188,0.194,0.299,0.164,0.149,0.306,0.192,0.135,0.192,0.111,0.271,0.16,0.242,0.212,0.312,0.372,0.341,0.23,0.144,0.358,0.256,0.35,0.366,0.233,0.142,0.284,0.34,0.16]},{"k":8,"meanSil":0.216,"scores":[0.229,0.361,0.213,0.324,0.319,0.289,0.082,0.087,0.117,0.218,0.269,0.294,0.363,0.311,0.255,0.317,0.322,0.246,0.171,0.2,0.329,0.27,0.171,0.347,0.254,0.165,0.319,0.111,0.175,0.072]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && Array.isArray(customData[0]?.scores)) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const barH = (IH - 20) / n\r
    const y = d3.scaleLinear().domain([0, n]).range([0, IH])\r
    const x = d3.scaleLinear().domain([-1, 1]).range([0, IW])\r
\r
    data.forEach((d, i) => {\r
      const yPos = y(i) + barH / 2\r
      const meanX = x(d.meanSil)\r
\r
      // Mean silhouette bar\r
      svg.append('rect').attr('x', meanX - 2).attr('y', yPos - barH * 0.3)\r
        .attr('width', 4).attr('height', barH * 0.6)\r
        .attr('fill', colors[0]).attr('rx', 2)\r
\r
      // Individual scores (horizontal strips)\r
      d.scores.forEach((s, si) => {\r
        const sw = Math.abs(x(s) - x(0))\r
        const sx = s >= 0 ? x(0) : x(s)\r
        const stripH = Math.max(0.5, barH * 0.8 / d.scores.length - 1)\r
        svg.append('rect').attr('x', sx).attr('y', yPos - barH * 0.4 + si * (barH * 0.8 / d.scores.length))\r
          .attr('width', sw).attr('height', stripH)\r
          .attr('fill', s >= 0 ? colors[0] : colors[3]).attr('opacity', 0.6)\r
      })\r
\r
      // Label\r
      svg.append('text').attr('x', M.left - 6).attr('y', yPos + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '11px').text('k=' + d.k)\r
      svg.append('text').attr('x', meanX + 6).attr('y', yPos + 4)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(d.meanSil.toFixed(2))\r
    })\r
\r
    // Zero line\r
    svg.append('line').attr('x1', x(0)).attr('x2', x(0)).attr('y1', M.top).attr('y2', M.top + IH)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Silhouette Coefficient')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Silhouette Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};