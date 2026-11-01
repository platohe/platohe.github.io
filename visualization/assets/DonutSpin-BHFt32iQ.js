var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'donut-spin',\r
  title: 'Donut Spin',\r
  desc: 'Donut Spin — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'DonutSpin',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","donut-spin"],\r
}\r
\r
export default function DonutSpin({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, R = 80\r
    const arc = d3.arc().innerRadius(R * 0.6).outerRadius(R)\r
    const angles = [Math.PI * 0.5, Math.PI * 0.8, Math.PI * 0.6, Math.PI * 0.4, Math.PI * 0.7]\r
    let startAngle = 0\r
    const arcs = angles.map((a, i) =>\r
      svg.append('path').attr('fill', colors[i % colors.length]).attr('opacity', 0.8)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      startAngle = elapsed * 0.001\r
      arcs.forEach((a, i) => {\r
        a.attr('d', arc({ startAngle: startAngle + i * 1.2, endAngle: startAngle + i * 1.2 + angles[i] }))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};