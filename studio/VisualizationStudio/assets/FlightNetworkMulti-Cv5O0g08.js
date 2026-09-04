var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'flight-network-multi',\r
  title: 'Flight Network Multi',\r
  desc: 'Flight Network Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FlightNetworkMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","flight-network-multi"],\r
}\r
\r
export default function FlightNetworkMulti({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"routes":[{"from":[50,80],"to":[300,120]},{"from":[80,150],"to":[280,200]},{"from":[120,60],"to":[250,180]}],"airports":[{"pos":[50,80],"name":"JFK"},{"pos":[300,120],"name":"LHR"},{"pos":[80,150],"name":"SFO"},{"pos":[280,200],"name":"HND"}]}\r
    const data = (customData && customData.routes && customData.airports) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    data.routes.forEach(r => {\r
      const [x1, y1] = r.from; const [x2, y2] = r.to\r
      const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2 - 40\r
      g.append('path').attr('d', \`M \${x1} \${y1} Q \${mx} \${my} \${x2} \${y2}\`).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1.4).attr('opacity', 0.6)\r
    })\r
    data.airports.forEach(a => {\r
      g.append('circle').attr('cx', a.pos[0]).attr('cy', a.pos[1]).attr('r', 4).attr('fill', colors[1]).attr('stroke', '#fff').attr('stroke-width', 1.2)\r
      g.append('text').attr('x', a.pos[0] + 6).attr('y', a.pos[1] - 6).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(a.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};