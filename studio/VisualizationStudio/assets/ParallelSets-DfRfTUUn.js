var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'parallel-sets',\r
  title: 'Parallel Sets',\r
  desc: 'Parallel Sets — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ParallelSets',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","parallel-sets"],\r
}\r
\r
export default function ParallelSets({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ParallelSets\r
    const width = 400\r
    const height = 300\r
    const margin = { top: 30, right: 50, bottom: 30, left: 50 }\r
\r
    const dimensions = ['Category', 'Type', 'Status']\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scalePoint()\r
      .domain(dimensions)\r
      .range([margin.left, width - margin.right])\r
\r
    const colors = d3.scaleOrdinal(d3.schemeCategory10)\r
\r
    // Render ribbon flows between consecutive dimensions\r
    const flowsGroup = svg.append('g')\r
      .attr('fill-opacity', 0.5)\r
\r
    chartData.forEach(d => {\r
      for (let i = 0; i < dimensions.length - 1; i++) {\r
        const dimA = dimensions[i]\r
        const dimB = dimensions[i + 1]\r
        const xA = x(dimA)\r
        const xB = x(dimB)\r
        const yA = 60 + (hash(d[dimA]) % (height - 110))\r
        const yB = 60 + (hash(d[dimB]) % (height - 110))\r
\r
        flowsGroup.append('path')\r
          .attr('d', d3.linkHorizontal()\r
            .x(p => p[0])\r
            .y(p => p[1])({ source: [xA, yA], target: [xB, yB] }))\r
          .attr('stroke', colors(d[dimA]))\r
          .attr('stroke-width', Math.max(3, d.value / 3))\r
          .attr('fill', 'none')\r
      }\r
    })\r
\r
    // Render dimension axes\r
    dimensions.forEach(dim => {\r
      const px = x(dim)\r
      svg.append('line')\r
        .attr('x1', px)\r
        .attr('y1', 50)\r
        .attr('x2', px)\r
        .attr('y2', height - 40)\r
        .attr('stroke', '#475569')\r
        .attr('stroke-width', 2)\r
\r
      svg.append('text')\r
        .attr('x', px)\r
        .attr('y', 35)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', '#f8fafc')\r
        .style('font-weight', 'bold')\r
        .text(dim)\r
    })\r
\r
    function hash(str) {\r
      let h = 0\r
      for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0\r
      return Math.abs(h)\r
    }\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};