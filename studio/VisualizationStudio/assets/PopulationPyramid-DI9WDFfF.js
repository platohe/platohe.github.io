var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'population-pyramid',\r
  title: 'Population Pyramid',\r
  desc: 'Population Pyramid — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PopulationPyramid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","population-pyramid"],\r
}\r
\r
export default function PopulationPyramid({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Population pyramid data\r
    const DEFAULT_DATA = [{"age":"0-9","male":15,"female":14},{"age":"10-19","male":18,"female":17},{"age":"20-29","male":22,"female":21},{"age":"30-39","male":25,"female":24},{"age":"40-49","male":20,"female":20},{"age":"50-59","male":15,"female":16},{"age":"60-69","male":10,"female":12},{"age":"70+","male":5,"female":8}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 30 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const maxValue = d3.max(data, d => Math.max(d.male, d.female))\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, maxValue])\r
      .range([0, width / 2 - 10])\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.age))\r
      .range([0, height])\r
      .padding(0.1)\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Male bars (left side)\r
    g.selectAll('.male-bar')\r
      .data(data)\r
      .join('rect')\r
      .attr('class', 'male-bar')\r
      .attr('x', d => width / 2 - x(d.male))\r
      .attr('y', d => y(d.age))\r
      .attr('width', d => x(d.male))\r
      .attr('height', y.bandwidth())\r
      .attr('fill', '#6366f1')\r
      .attr('opacity', 0.8)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('opacity', 1)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('opacity', 0.8)\r
      })\r
\r
    // Female bars (right side)\r
    g.selectAll('.female-bar')\r
      .data(data)\r
      .join('rect')\r
      .attr('class', 'female-bar')\r
      .attr('x', width / 2 + 10)\r
      .attr('y', d => y(d.age))\r
      .attr('width', d => x(d.female))\r
      .attr('height', y.bandwidth())\r
      .attr('fill', '#f59e0b')\r
      .attr('opacity', 0.8)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('opacity', 1)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('opacity', 0.8)\r
      })\r
\r
    // Age labels\r
    g.selectAll('.age-label')\r
      .data(data)\r
      .join('text')\r
      .attr('class', 'age-label')\r
      .attr('x', width / 2)\r
      .attr('y', d => y(d.age) + y.bandwidth() / 2)\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text(d => d.age)\r
\r
    // Center line\r
    g.append('line')\r
      .attr('x1', width / 2)\r
      .attr('y1', 0)\r
      .attr('x2', width / 2)\r
      .attr('y2', height)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    // Male label\r
    svg.append('text')\r
      .attr('x', margin.left + 50)\r
      .attr('y', height + margin.top + 30)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', '#6366f1')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 600)\r
      .text('Male')\r
\r
    // Female label\r
    svg.append('text')\r
      .attr('x', width + margin.left - 50)\r
      .attr('y', height + margin.top + 30)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', '#f59e0b')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 600)\r
      .text('Female')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Population Pyramid')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};