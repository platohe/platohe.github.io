var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'radial-bar-race',\r
  title: 'Radial Bar Race',\r
  desc: 'Radial Bar Race — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'RadialBarRace',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","radial-bar-race"],\r
}\r
\r
export default function RadialBarRace({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.RadialBarRace\r
    const width = 500\r
    const height = 500\r
    const innerRadius = 80\r
    const outerRadius = width / 2 - 40\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scaleBand()\r
      .domain(chartData.map(d => d.label))\r
      .range([0, 2 * Math.PI])\r
      .padding(0.2)\r
\r
    const y = d3.scaleRadial()\r
      .domain([0, d3.max(chartData, d => d.value) || 100])\r
      .range([innerRadius, outerRadius])\r
\r
    const color = d3.scaleOrdinal(d3.schemeCategory10)\r
\r
    const arc = d3.arc()\r
      .innerRadius(innerRadius)\r
      .outerRadius(d => y(d.value))\r
      .startAngle(d => x(d.label))\r
      .endAngle(d => x(d.label) + x.bandwidth())\r
      .padAngle(0.01)\r
      .padRadius(innerRadius)\r
\r
    const bars = svg.append('g')\r
      .selectAll('path')\r
      .data(chartData)\r
      .join('path')\r
        .attr('fill', d => color(d.label))\r
        .attr('d', arc)\r
\r
    // Animated bar race pulse\r
    const timer = d3.timer(elapsed => {\r
      const animatedData = chartData.map(d => ({\r
        ...d,\r
        value: Math.max(10, d.value + Math.sin(elapsed / 500 + d.value) * 15)\r
      }))\r
\r
      y.domain([0, d3.max(animatedData, d => d.value) || 100])\r
\r
      bars.data(animatedData)\r
        .attr('d', arc)\r
    })\r
\r
    // Category labels\r
    const labelGroup = svg.append('g')\r
      .attr('text-anchor', 'middle')\r
\r
    chartData.forEach(d => {\r
      const angle = x(d.label) + x.bandwidth() / 2\r
      const r = outerRadius + 18\r
      const lx = r * Math.sin(angle)\r
      const ly = -r * Math.cos(angle)\r
\r
      labelGroup.append('text')\r
        .attr('x', lx)\r
        .attr('y', ly)\r
        .attr('fill', '#cbd5e1')\r
        .attr('alignment-baseline', 'middle')\r
        .text(d.label)\r
    })\r
\r
    return () => timer.stop()\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};