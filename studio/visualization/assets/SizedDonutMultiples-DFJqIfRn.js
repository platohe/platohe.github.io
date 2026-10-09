var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'sized-donut-multiples',\r
  title: 'Sized Donut Multiples',\r
  desc: 'Sized Donut Multiples — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SizedDonutMultiples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sized-donut-multiples"],\r
}\r
\r
export default function SizedDonutMultiples({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Multiple donut charts with different sizes\r
    const DEFAULT_DATA = [{"id":1,"x":80,"y":80,"size":50,"data":[30,20,15,35],"labels":["A","B","C","D"]},{"id":2,"x":200,"y":80,"size":70,"data":[25,35,20,20],"labels":["A","B","C","D"]},{"id":3,"x":320,"y":80,"size":60,"data":[40,25,20,15],"labels":["A","B","C","D"]},{"id":4,"x":80,"y":200,"size":65,"data":[20,30,25,25],"labels":["A","B","C","D"]},{"id":5,"x":200,"y":200,"size":55,"data":[35,20,25,20],"labels":["A","B","C","D"]},{"id":6,"x":320,"y":200,"size":75,"data":[25,25,25,25],"labels":["A","B","C","D"]}]\r
\r
    const charts = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']\r
\r
    charts.forEach((chart) => {\r
      const g = svg.append('g')\r
        .attr('transform', \`translate(\${chart.x}, \${chart.y})\`)\r
\r
      const pie = d3.pie()\r
        .value((d) => d)\r
        .sort(null)\r
\r
      const arc = d3.arc()\r
        .innerRadius(chart.size * 0.5)\r
        .outerRadius(chart.size)\r
\r
      const arcs = pie(chart.data)\r
\r
      g.selectAll('path')\r
        .data(arcs)\r
        .join('path')\r
        .attr('d', arc)\r
        .attr('fill', (d, i) => colors[i % colors.length])\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function(event, d) {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('transform', 'scale(1.1)')\r
            .attr('stroke', '#6366f1')\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('transform', 'scale(1)')\r
            .attr('stroke', 'var(--bg)')\r
        })\r
\r
      // Add size label\r
      g.append('text')\r
        .attr('x', 0)\r
        .attr('y', chart.size + 15)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(\`Size: \${chart.size}\`)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Sized Donut Multiples')\r
\r
    // Description\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 295)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '9px')\r
      .text('Multiple donut charts with varying sizes')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};