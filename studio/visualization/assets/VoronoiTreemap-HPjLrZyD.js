var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'voronoi-treemap',\r
  title: 'Voronoi Treemap',\r
  desc: 'Voronoi Treemap — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiTreemap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["math-&-simulation","voronoi-treemap"],\r
}\r
\r
export default function VoronoiTreemap({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const isValidHierarchy=o=>o&&typeof o==='object'&&!Array.isArray(o)&&typeof o.name==='string'\r
    const fallbackData=defaultDataMap.VoronoiTreemap||{name:'root',children:[{name:'A',value:40},{name:'B',value:30},{name:'C',value:20},{name:'D',value:10}]}\r
    const rawChartData=isValidHierarchy(data)?data: (isValidHierarchy(chartData)?chartData:fallbackData)\r
    const chartDataSafe=rawChartData\r
    const width = 500\r
    const height = 400\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    // Flatten tree items with values\r
    const root = d3.hierarchy(chartDataSafe)\r
      .sum(d => {\r
        const v=d.value\r
        const n=Number(v)\r
        return Number.isFinite(n)&&n>0? n:0\r
      })\r
      .sort((a, b) => (b.value||0) - (a.value||0))\r
\r
    const leaves = root.leaves().filter(d=>d&&Number.isFinite(d.value)&&d.value>0)\r
    if(!leaves.length) return\r
\r
    // Generate random seed points for Voronoi cells bounded within outer polygon\r
    const points = leaves.map((d, i) => {\r
      const angle = (i / leaves.length) * 2 * Math.PI\r
      const r = Math.min(width, height) / 3 * Math.sqrt(Math.random())\r
      const x=width / 2 + r * Math.cos(angle)\r
      const y=height / 2 + r * Math.sin(angle)\r
      return {\r
        x: Number.isFinite(x)?x:width/2,\r
        y: Number.isFinite(y)?y:height/2,\r
        data: d\r
      }\r
    }).filter(p=>Number.isFinite(p.x)&&Number.isFinite(p.y))\r
\r
    if(points.length<2) return\r
    let delaunay, voronoi\r
    try{\r
      delaunay = d3.Delaunay.from(points, d => d.x, d => d.y)\r
      voronoi = delaunay.voronoi([20, 20, width - 20, height - 20])\r
    }catch(e){ return }\r
\r
    const colors = d3.scaleOrdinal(d3.schemeTableau10)\r
\r
    const cellsGroup = svg.append('g')\r
\r
    points.forEach((p, i) => {\r
      let pathD\r
      try{ pathD = voronoi.renderCell(i) }catch(e){ return }\r
      if(!pathD||pathD.includes('NaN')) return\r
      if(!Number.isFinite(p.x)||!Number.isFinite(p.y)) return\r
      cellsGroup.append('path')\r
        .attr('d', pathD)\r
        .attr('fill', colors(p.data.parent ? p.data.parent.data.name : i))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 2)\r
        .attr('opacity', 0.85)\r
\r
      // Cell text label\r
      cellsGroup.append('text')\r
        .attr('x', p.x)\r
        .attr('y', p.y)\r
        .attr('text-anchor', 'middle')\r
        .attr('alignment-baseline', 'middle')\r
        .attr('fill', '#f8fafc')\r
        .style('font-weight', 'bold')\r
        .style('font-size', '10px')\r
        .style('pointer-events', 'none')\r
        .text(p.data.data.name??'')\r
    })\r
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