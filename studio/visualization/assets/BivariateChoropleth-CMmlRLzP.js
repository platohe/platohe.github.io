var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'bivariate-choropleth',\r
  title: 'Bivariate Choropleth',\r
  desc: 'Bivariate Choropleth — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BivariateChoropleth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bivariate-choropleth"],\r
}\r
\r
export default function BivariateChoropleth({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.BivariateChoropleth\r
    const width = 600\r
    const height = 400\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    // 3x3 Bivariate Color Scheme (e.g. Pink x Cyan)\r
    const scheme = [\r
      '#e8e8e8', '#ace4e4', '#5ac8c8',\r
      '#dfb0d6', '#a5add3', '#5698c4',\r
      '#be64ac', '#8c62aa', '#3b4994'\r
    ]\r
\r
    // Quantile scales for 2 dimensions (x: Income, y: Education)\r
    const xQuantile = d3.scaleQuantile()\r
      .domain(chartData.map(d => d.income))\r
      .range([0, 1, 2])\r
\r
    const yQuantile = d3.scaleQuantile()\r
      .domain(chartData.map(d => d.education))\r
      .range([0, 1, 2])\r
\r
    function color(d) {\r
      const xi = xQuantile(d.income)\r
      const yi = yQuantile(d.education)\r
      return scheme[yi * 3 + xi]\r
    }\r
\r
    // Map region paths\r
    const regionsGroup = svg.append('g')\r
\r
    chartData.forEach(d => {\r
      regionsGroup.append('path')\r
        .attr('d', d.path)\r
        .attr('fill', color(d))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1.5)\r
\r
      if (d.name) {\r
        // Label centroid\r
        const bounds = pathCentroid(d.path)\r
        regionsGroup.append('text')\r
          .attr('x', bounds.x)\r
          .attr('y', bounds.y)\r
          .attr('text-anchor', 'middle')\r
          .attr('alignment-baseline', 'middle')\r
          .attr('fill', '#f8fafc')\r
          .style('font-weight', 'bold')\r
          .style('font-size', '10px')\r
          .text(d.name)\r
      }\r
    })\r
\r
    // 3x3 Legend Matrix\r
    const legendSize = 14\r
    const legendG = svg.append('g')\r
      .attr('transform', \`translate(\${width - 110}, \${height - 110})\`)\r
\r
    for (let yi = 0; yi < 3; yi++) {\r
      for (let xi = 0; xi < 3; xi++) {\r
        legendG.append('rect')\r
          .attr('x', xi * legendSize)\r
          .attr('y', (2 - yi) * legendSize)\r
          .attr('width', legendSize - 1)\r
          .attr('height', legendSize - 1)\r
          .attr('fill', scheme[yi * 3 + xi])\r
      }\r
    }\r
\r
    legendG.append('text')\r
      .attr('x', 0)\r
      .attr('y', 3 * legendSize + 12)\r
      .attr('fill', '#cbd5e1')\r
      .style('font-size', '9px')\r
      .text('Income →')\r
\r
    legendG.append('text')\r
      .attr('x', -20)\r
      .attr('y', legendSize * 1.5)\r
      .attr('fill', '#cbd5e1')\r
      .style('font-size', '9px')\r
      .attr('transform', \`rotate(-90, -20, \${legendSize * 1.5})\`)\r
      .text('Education →')\r
\r
    function pathCentroid(pathStr) {\r
      // Rough bounding center estimate from SVG path string M x y L x y\r
      const coords = pathStr.match(/[-+]?[0-9]*\\.?[0-9]+/g)\r
      if (!coords || coords.length < 4) return { x: width / 2, y: height / 2 }\r
      let xs = 0, ys = 0, count = 0\r
      for (let i = 0; i < coords.length; i += 2) {\r
        xs += parseFloat(coords[i])\r
        ys += parseFloat(coords[i + 1])\r
        count++\r
      }\r
      return { x: xs / count, y: ys / count }\r
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