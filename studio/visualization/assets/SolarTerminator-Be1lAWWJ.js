var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const DEFAULT_DATA = [{"date":"2024-06-21T12:00:00Z","opacity":0.8}]\r
\r
export const meta = {\r
  id: 'solar-terminator',\r
  title: 'Solar Terminator',\r
  desc: 'Solar Terminator — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SolarTerminator',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","solar-terminator"],\r
}\r
\r
export default function SolarTerminator({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (Array.isArray(customData) && customData.length > 0)\r
      ? customData[0]\r
      : DEFAULT_DATA[0]\r
\r
    const width = 380, height = 250\r
    const land = [\r
      [[50, 30], [120, 25], [130, 60], [80, 80], [50, 70]],\r
      [[140, 20], [200, 15], [210, 50], [160, 60], [130, 45]],\r
      [[80, 90], [140, 85], [150, 120], [100, 130], [70, 110]],\r
      [[200, 80], [260, 75], [270, 110], [220, 120], [190, 100]],\r
      [[280, 30], [340, 25], [350, 70], [300, 80], [270, 60]],\r
    ]\r
\r
    land.forEach((poly) => {\r
      const path = d3.line().x(d => d[0]).y(d => d[1]).curve(d3.curveCatmullRom.alpha(0.3))(poly) + 'Z'\r
      svg.append('path')\r
        .attr('d', path)\r
        .attr('fill', '#38bdf8')\r
        .attr('opacity', config.opacity || 0.8)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1)\r
    })\r
\r
    const terminatorPts = Array.from({ length: 50 }, (_, i) => {\r
      const y = (i / 49) * height + 25\r
      const x = width / 2 + Math.sin(y / height * Math.PI * 2) * 80\r
      return [x, y]\r
    })\r
\r
    svg.append('path')\r
      .attr('d', d3.line().x((d) => d[0]).y((d) => d[1])(terminatorPts))\r
      .attr('fill', 'none')\r
      .attr('stroke', '#fbbf24')\r
      .attr('stroke-width', 2.5)\r
      .attr('stroke-dasharray', '4,4')\r
\r
    svg.append('text').attr('x', 60).attr('y', 25).attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Day')\r
    svg.append('text').attr('x', 320).attr('y', 25).attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Night')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};