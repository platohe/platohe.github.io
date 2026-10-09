var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'realtime-streamgraph',\r
  title: 'Realtime Streamgraph',\r
  desc: 'Realtime Streamgraph — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'RealtimeStreamgraph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","realtime-streamgraph"],\r
}\r
\r
export default function RealtimeStreamgraph({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const initialData = data || defaultDataMap.RealtimeStreamgraph\r
    const width = 600\r
    const height = 380\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    let activeData = [...initialData]\r
    // Derive keys from data shape\r
    const keys = initialData && initialData.length > 0\r
      ? Object.keys(initialData[0]).filter(k => typeof initialData[0][k] === 'number')\r
      : ['GroupA', 'GroupB', 'GroupC', 'GroupD']\r
\r
    const x = d3.scaleLinear()\r
      .domain([1, activeData.length])\r
      .range([0, width])\r
\r
    const colors = d3.scaleOrdinal()\r
      .domain(keys)\r
      .range(['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#ef4444'])\r
\r
    const stack = d3.stack()\r
      .keys(keys)\r
      .offset(d3.stackOffsetWiggle)\r
\r
    let series = stack(activeData)\r
\r
    const y = d3.scaleLinear()\r
      .domain([\r
        d3.min(series, s => d3.min(s, d => d[0])),\r
        d3.max(series, s => d3.max(s, d => d[1]))\r
      ])\r
      .range([height, 0])\r
\r
    const area = d3.area()\r
      .x((d, i) => x(i + 1))\r
      .y0(d => y(d[0]))\r
      .y1(d => y(d[1]))\r
      .curve(d3.curveBasis)\r
\r
    const paths = svg.append('g')\r
      .selectAll('path')\r
      .data(series)\r
      .join('path')\r
        .attr('fill', d => colors(d.key))\r
        .attr('d', area)\r
\r
    const timer = d3.timer(elapsed => {\r
      activeData = activeData.map((d, i) => {\r
        const next = { ...d }\r
        keys.forEach((k, ki) => {\r
          const phase = elapsed / (400 + ki * 50) + i\r
          next[k] = Math.max(5, d[k] + (ki % 2 === 0 ? Math.sin(phase) : Math.cos(phase)) * 3)\r
        })\r
        return next\r
      })\r
\r
      series = stack(activeData)\r
      y.domain([\r
        d3.min(series, s => d3.min(s, d => d[0])),\r
        d3.max(series, s => d3.max(s, d => d[1]))\r
      ])\r
\r
      paths.data(series).attr('d', area)\r
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