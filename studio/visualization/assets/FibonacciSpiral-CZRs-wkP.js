var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// FibonacciSpiral: Quarter arcs through fibonacci squares.\r
export const meta = {\r
  id: 'fibonacci-spiral',\r
  title: 'Fibonacci Spiral',\r
  desc: 'Fibonacci Spiral — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'FibonacciSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","fibonacci-spiral"],\r
}\r
\r
export default function FibonacciSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
const fib=[1,1,2,3,5,8,13]; let x=cx-60,y=cy,dir=0\r
    fib.forEach((f,i)=>{ const s=f*7\r
     const [dx,dy]=[[1,0],[0,-1],[-1,0],[0,1]][dir%4]\r
     const arc=d3.arc().innerRadius(0).outerRadius(s).startAngle(dir*Math.PI/2).endAngle((dir+1)*Math.PI/2)\r
     g.append('path').attr('d',arc({})).attr('transform','translate('+x+','+y+')').attr('fill','none').attr('stroke',colors[i%colors.length]).attr('stroke-width',1.8)\r
     x+=dx*s; y+=dy*s; dir=(dir+1)%4 })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};