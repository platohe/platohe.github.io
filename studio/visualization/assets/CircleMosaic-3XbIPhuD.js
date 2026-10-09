var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'circle-mosaic',\r
  title: 'Circle Mosaic',\r
  desc: 'Circle Mosaic — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleMosaic',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-mosaic"],\r
}\r
\r
export default function CircleMosaic({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    // mosaic of sized circles in a loose hex-ish field\r
    let seed = 21\r
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }\r
    for (let row = 0; row < 6; row++) {\r
      for (let col = 0; col < 9; col++) {\r
        const x = 34 + col * 42 + (row % 2 ? 20 : 0)\r
        const y = 32 + row * 46\r
        const rr = 6 + rnd() * 13\r
        g.append('circle').attr('cx', x).attr('cy', y).attr('r', rr)\r
          .attr('fill', colors[Math.floor(rnd() * colors.length)]).attr('fill-opacity', 0.78)\r
      }\r
    }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};