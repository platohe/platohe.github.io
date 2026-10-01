var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const DEFAULT_DATA = [{"x":120,"y":110,"r":65,"color":"#6366f1"},{"x":250,"y":130,"r":75,"color":"#f59e0b"},{"x":180,"y":190,"r":60,"color":"#10b981"}]\r
\r
export const meta = {\r
  id: 'watercolor',\r
  title: 'Watercolor',\r
  desc: 'Watercolor — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Watercolor',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","watercolor"],\r
}\r
\r
export default function Watercolor({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const shapes = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const roughness = 0.5\r
\r
    shapes.forEach((shape, idx) => {\r
      const { x, y, r, color } = shape\r
      const points = 12\r
      const pts = Array.from({ length: points }, (_, j) => {\r
        const angle = (j / points) * 2 * Math.PI\r
        const rr = r * (0.7 + roughness * Math.sin(angle * 3))\r
        return [x + rr * Math.cos(angle), y + rr * Math.sin(angle)]\r
      })\r
\r
      const pathStr = d3.line().curve(d3.curveCatmullRomClosed)(pts)\r
      svg.append('path')\r
        .attr('d', pathStr)\r
        .attr('fill', color)\r
        .attr('opacity', 0.45)\r
        .attr('stroke', color)\r
        .attr('stroke-width', 2)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};