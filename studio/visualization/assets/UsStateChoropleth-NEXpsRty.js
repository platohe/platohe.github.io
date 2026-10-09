var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'us-state-choropleth',\r
  title: 'Us State Choropleth',\r
  desc: 'Us State Choropleth — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'UsStateChoropleth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","us-state-choropleth"],\r
}\r
\r
export default function UsStateChoropleth({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Simplified US state boundaries\r
    const DEFAULT_DATA = [{"id":"WA","name":"Washington","points":[[30,20],[70,15],[80,40],[40,50]]},{"id":"OR","name":"Oregon","points":[[30,50],[80,40],[90,70],[40,80]]},{"id":"CA","name":"California","points":[[30,80],[90,70],[100,130],[40,140]]},{"id":"NV","name":"Nevada","points":[[90,70],[130,65],[140,110],[100,130]]},{"id":"ID","name":"Idaho","points":[[80,40],[130,35],[140,70],[90,70]]},{"id":"UT","name":"Utah","points":[[130,65],[170,60],[180,100],[140,110]]},{"id":"AZ","name":"Arizona","points":[[100,130],[140,110],[150,160],[110,170]]},{"id":"MT","name":"Montana","points":[[130,35],[200,30],[210,60],[140,70]]},{"id":"WY","name":"Wyoming","points":[[140,70],[210,60],[220,100],[150,110]]},{"id":"CO","name":"Colorado","points":[[150,110],[220,100],[230,140],[160,150]]},{"id":"NM","name":"New Mexico","points":[[110,170],[160,150],[170,190],[120,200]]},{"id":"ND","name":"North Dakota","points":[[200,30],[260,25],[270,50],[210,60]]},{"id":"SD","name":"South Dakota","points":[[210,60],[270,50],[280,80],[220,100]]},{"id":"NE","name":"Nebraska","points":[[220,100],[280,80],[290,110],[230,140]]},{"id":"KS","name":"Kansas","points":[[230,140],[290,110],[300,150],[240,180]]},{"id":"OK","name":"Oklahoma","points":[[240,180],[300,150],[310,190],[250,220]]},{"id":"TX","name":"Texas","points":[[250,220],[350,200],[360,260],[260,280]]},{"id":"MN","name":"Minnesota","points":[[260,25],[310,20],[320,50],[270,50]]},{"id":"IA","name":"Iowa","points":[[270,50],[320,50],[330,80],[280,80]]},{"id":"MO","name":"Missouri","points":[[280,80],[330,80],[340,120],[290,110]]},{"id":"AR","name":"Arkansas","points":[[290,110],[340,120],[350,160],[300,150]]},{"id":"LA","name":"Louisiana","points":[[300,150],[350,160],[360,200],[310,190]]},{"id":"WI","name":"Wisconsin","points":[[310,20],[350,15],[360,50],[320,50]]},{"id":"IL","name":"Illinois","points":[[320,50],[360,50],[370,90],[330,80]]},{"id":"MS","name":"Mississippi","points":[[330,80],[370,90],[380,140],[340,120]]},{"id":"MI","name":"Michigan","points":[[350,15],[390,10],[400,50],[360,50]]},{"id":"IN","name":"Indiana","points":[[360,50],[400,50],[410,90],[370,90]]},{"id":"KY","name":"Kentucky","points":[[340,120],[410,90],[420,130],[350,160]]},{"id":"TN","name":"Tennessee","points":[[350,160],[420,130],[430,170],[360,200]]},{"id":"AL","name":"Alabama","points":[[360,200],[430,170],[440,220],[370,230]]},{"id":"OH","name":"Ohio","points":[[400,50],[440,45],[450,90],[410,90]]},{"id":"GA","name":"Georgia","points":[[410,90],[480,60],[490,110],[420,130]]},{"id":"FL","name":"Florida","points":[[420,130],[490,110],[500,160],[430,170]]},{"id":"SC","name":"South Carolina","points":[[430,170],[500,160],[510,200],[440,220]]},{"id":"NC","name":"North Carolina","points":[[440,220],[510,200],[520,240],[450,250]]},{"id":"VA","name":"Virginia","points":[[450,250],[520,240],[530,280],[460,290]]},{"id":"WV","name":"West Virginia","points":[[460,290],[530,280],[540,320],[470,330]]},{"id":"PA","name":"Pennsylvania","points":[[470,330],[540,320],[550,360],[480,370]]},{"id":"NY","name":"New York","points":[[480,370],[550,360],[560,400],[490,410]]},{"id":"VT","name":"Vermont","points":[[490,410],[560,400],[570,440],[500,450]]},{"id":"NH","name":"New Hampshire","points":[[500,450],[570,440],[580,480],[510,490]]},{"id":"ME","name":"Maine","points":[[510,490],[580,480],[590,520],[520,530]]},{"id":"MA","name":"Massachusetts","points":[[520,530],[590,520],[600,560],[530,570]]},{"id":"RI","name":"Rhode Island","points":[[530,570],[600,560],[610,600],[540,610]]},{"id":"CT","name":"Connecticut","points":[[540,610],[610,600],[620,640],[550,650]]},{"id":"NJ","name":"New Jersey","points":[[550,650],[620,640],[630,680],[560,690]]},{"id":"DE","name":"Delaware","points":[[560,690],[630,680],[640,720],[570,730]]},{"id":"MD","name":"Maryland","points":[[570,730],[640,720],[650,760],[580,770]]}]\r
\r
    const states = (Array.isArray(customData) && customData.length > 0 && customData[0]?.points) ? customData : DEFAULT_DATA\r
\r
    // Sample values for each state\r
    const values = DEFAULT_DATA.reduce((acc, state) => {\r
      acc[state.id] = Math.floor(Math.random() * 100) + 20\r
      return acc\r
    }, {})\r
\r
    const color = d3.scaleSequential(d3.interpolateBlues)\r
      .domain([d3.min(Object.values(values)), d3.max(Object.values(values))])\r
\r
    const path = d3.line()\r
      .x((d) => d[0] * 0.6 + 20) // Scale down to fit\r
      .y((d) => d[1] * 0.4 + 10)\r
      .curve(d3.curveCatmullRom.alpha(0.3))\r
\r
    states.forEach((s) => {\r
      svg.append('path')\r
        .attr('d', path(s.points) + 'Z')\r
        .attr('fill', color(values[s.id]))\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 2)\r
            .attr('stroke', '#6366f1')\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 1)\r
            .attr('stroke', 'var(--bg)')\r
        })\r
\r
      // Only show label for larger states\r
      if (s.points.length > 4) {\r
        const cx = d3.mean(s.points, (d) => d[0]) * 0.6 + 20\r
        const cy = d3.mean(s.points, (d) => d[1]) * 0.4 + 10\r
        svg.append('text')\r
          .attr('x', cx).attr('y', cy + 3)\r
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
          .attr('fill', 'white').attr('font-size', '8px').attr('font-weight', 600)\r
          .text(s.id)\r
      }\r
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
      .text('US State Choropleth')\r
\r
    // Legend\r
    const gradW = 80, gradH = 8\r
    const grad = svg.append('defs').append('linearGradient').attr('id', 'usGrad')\r
      .attr('x1', '0%').attr('x2', '100%').attr('y1', '0%').attr('y2', '0%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', color(20))\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', color(120))\r
\r
    svg.append('rect').attr('x', 310).attr('y', 275).attr('width', gradW).attr('height', gradH).attr('fill', 'url(#usGrad)').attr('rx', 4)\r
    svg.append('text').attr('x', 308).attr('y', 281).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('20')\r
    svg.append('text').attr('x', 392).attr('y', 281).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('120')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};