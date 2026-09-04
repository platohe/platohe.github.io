var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'bivariate-chart',\r
  title: 'Bivariate Chart',\r
  desc: 'Bivariate Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BivariateChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bivariate-chart"],\r
}\r
\r
export default function BivariateChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Bivariate scatter with colored quadrants\r
    const DEFAULT_DATA = [{"x":20.221,"y":-10.342,"category":"A"},{"x":33.947,"y":-65.037,"category":"A"},{"x":-45.354,"y":24.949,"category":"A"},{"x":-5.537,"y":-50.015,"category":"A"},{"x":49.148,"y":-38.6,"category":"B"},{"x":0.146,"y":37.322,"category":"A"},{"x":-99.231,"y":-5.844,"category":"A"},{"x":-89.758,"y":18.465,"category":"B"},{"x":-46.609,"y":-87.644,"category":"B"},{"x":56.709,"y":6.067,"category":"B"},{"x":-65.399,"y":68.538,"category":"B"},{"x":61.805,"y":-36.108,"category":"B"},{"x":-92.512,"y":-89.721,"category":"A"},{"x":19.346,"y":-50.965,"category":"A"},{"x":-58.098,"y":-39.274,"category":"A"},{"x":71.742,"y":1.599,"category":"B"},{"x":-43.159,"y":-41.402,"category":"B"},{"x":31.972,"y":36.154,"category":"A"},{"x":85.568,"y":-82.406,"category":"A"},{"x":-13.773,"y":88.459,"category":"B"},{"x":-77.811,"y":-96.831,"category":"B"},{"x":-3.655,"y":22.384,"category":"A"},{"x":-84.484,"y":43.92,"category":"A"},{"x":-44.35,"y":41.317,"category":"B"},{"x":4.063,"y":64.378,"category":"B"},{"x":99.128,"y":12.56,"category":"A"},{"x":-13.202,"y":15.691,"category":"B"},{"x":19.248,"y":-35.408,"category":"A"},{"x":-40.958,"y":-10.047,"category":"A"},{"x":39.013,"y":98.802,"category":"A"},{"x":-13.622,"y":9.043,"category":"B"},{"x":-79.825,"y":39.344,"category":"B"},{"x":57.189,"y":80.955,"category":"B"},{"x":-4.922,"y":64.39,"category":"B"},{"x":94.549,"y":-64.321,"category":"A"},{"x":39.938,"y":-55.364,"category":"B"},{"x":-67.313,"y":30.933,"category":"B"},{"x":-58.609,"y":25.781,"category":"A"},{"x":-34.724,"y":58.485,"category":"B"},{"x":-73.721,"y":72.74,"category":"B"},{"x":-98.095,"y":47.484,"category":"A"},{"x":75.185,"y":81.633,"category":"B"},{"x":20.787,"y":-2.152,"category":"B"},{"x":-90.505,"y":41.11,"category":"A"},{"x":-41.702,"y":-44.903,"category":"B"},{"x":-94.179,"y":-55.821,"category":"A"},{"x":14.47,"y":97.713,"category":"B"},{"x":-65.833,"y":12.193,"category":"B"},{"x":-21.069,"y":-13.118,"category":"B"},{"x":37.227,"y":-20.297,"category":"B"},{"x":79.128,"y":-34.537,"category":"B"},{"x":22.174,"y":9.272,"category":"A"},{"x":-52.919,"y":-34.927,"category":"B"},{"x":-35.887,"y":33.859,"category":"B"},{"x":-66.139,"y":38.997,"category":"B"},{"x":-75.018,"y":-37.241,"category":"B"},{"x":15.507,"y":-58.462,"category":"B"},{"x":-24.014,"y":42.41,"category":"A"},{"x":62.34,"y":-12.128,"category":"B"},{"x":73.526,"y":5.135,"category":"A"},{"x":78.901,"y":-9.979,"category":"B"},{"x":23.749,"y":61.519,"category":"B"},{"x":-22.071,"y":9.132,"category":"A"},{"x":-1.6,"y":71.896,"category":"A"},{"x":48.724,"y":-89.291,"category":"B"},{"x":-66.14,"y":1.309,"category":"A"},{"x":52.16,"y":98.291,"category":"A"},{"x":26.323,"y":67.395,"category":"A"},{"x":19.878,"y":-29.784,"category":"B"},{"x":75.676,"y":36.198,"category":"B"},{"x":87.506,"y":25.188,"category":"B"},{"x":68.934,"y":-69.681,"category":"B"},{"x":-96.006,"y":-82.9,"category":"A"},{"x":45.273,"y":91.188,"category":"A"},{"x":-6.75,"y":41.496,"category":"B"},{"x":-45.38,"y":-72.172,"category":"B"},{"x":-41.803,"y":-11.803,"category":"A"},{"x":43.274,"y":58.714,"category":"A"},{"x":-60.815,"y":33.271,"category":"A"},{"x":-11.291,"y":-6.194,"category":"B"}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear()\r
      .domain([-100, 100])\r
      .range([0, width])\r
\r
    const y = d3.scaleLinear()\r
      .domain([-100, 100])\r
      .range([height, 0])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Draw quadrant backgrounds\r
    g.append('rect')\r
      .attr('x', 0)\r
      .attr('y', 0)\r
      .attr('width', width / 2)\r
      .attr('height', height / 2)\r
      .attr('fill', '#6366f1')\r
      .attr('opacity', 0.1)\r
\r
    g.append('rect')\r
      .attr('x', width / 2)\r
      .attr('y', 0)\r
      .attr('width', width / 2)\r
      .attr('height', height / 2)\r
      .attr('fill', '#f59e0b')\r
      .attr('opacity', 0.1)\r
\r
    g.append('rect')\r
      .attr('x', 0)\r
      .attr('y', height / 2)\r
      .attr('width', width / 2)\r
      .attr('height', height / 2)\r
      .attr('fill', '#10b981')\r
      .attr('opacity', 0.1)\r
\r
    g.append('rect')\r
      .attr('x', width / 2)\r
      .attr('y', height / 2)\r
      .attr('width', width / 2)\r
      .attr('height', height / 2)\r
      .attr('fill', '#ef4444')\r
      .attr('opacity', 0.1)\r
\r
    // Draw quadrant lines\r
    g.append('line')\r
      .attr('x1', width / 2)\r
      .attr('y1', 0)\r
      .attr('x2', width / 2)\r
      .attr('y2', height)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
      .attr('stroke-dasharray', '5,5')\r
\r
    g.append('line')\r
      .attr('x1', 0)\r
      .attr('y1', height / 2)\r
      .attr('x2', width)\r
      .attr('y2', height / 2)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
      .attr('stroke-dasharray', '5,5')\r
\r
    // Draw data points\r
    g.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.x))\r
      .attr('cy', d => y(d.y))\r
      .attr('r', 5)\r
      .attr('fill', d => d.category === 'A' ? '#6366f1' : '#f59e0b')\r
      .attr('opacity', 0.7)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 8)\r
          .attr('opacity', 1)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 5)\r
          .attr('opacity', 0.7)\r
      })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Bivariate Scatter Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};