var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'gridded-population-map',\r
  title: 'Gridded Population Map',\r
  desc: 'Gridded Population Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GriddedPopulationMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gridded-population-map"],\r
}\r
\r
export default function GriddedPopulationMap({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cols=16, rows=9\r
    const gen = () => [{"x":0,"y":0,"v":40},{"x":1,"y":0,"v":0},{"x":2,"y":0,"v":18},{"x":3,"y":0,"v":26},{"x":4,"y":0,"v":74},{"x":5,"y":0,"v":24},{"x":6,"y":0,"v":0},{"x":7,"y":0,"v":0},{"x":8,"y":0,"v":20},{"x":9,"y":0,"v":59},{"x":10,"y":0,"v":5},{"x":11,"y":0,"v":71},{"x":12,"y":0,"v":52},{"x":13,"y":0,"v":26},{"x":14,"y":0,"v":19},{"x":15,"y":0,"v":0},{"x":0,"y":1,"v":7},{"x":1,"y":1,"v":72},{"x":2,"y":1,"v":69},{"x":3,"y":1,"v":40},{"x":4,"y":1,"v":9},{"x":5,"y":1,"v":52},{"x":6,"y":1,"v":56},{"x":7,"y":1,"v":29},{"x":8,"y":1,"v":0},{"x":9,"y":1,"v":0},{"x":10,"y":1,"v":21},{"x":11,"y":1,"v":28},{"x":12,"y":1,"v":57},{"x":13,"y":1,"v":60},{"x":14,"y":1,"v":0},{"x":15,"y":1,"v":80},{"x":0,"y":2,"v":80},{"x":1,"y":2,"v":13},{"x":2,"y":2,"v":33},{"x":3,"y":2,"v":53},{"x":4,"y":2,"v":0},{"x":5,"y":2,"v":62},{"x":6,"y":2,"v":0},{"x":7,"y":2,"v":61},{"x":8,"y":2,"v":46},{"x":9,"y":2,"v":0},{"x":10,"y":2,"v":84},{"x":11,"y":2,"v":78},{"x":12,"y":2,"v":51},{"x":13,"y":2,"v":52},{"x":14,"y":2,"v":63},{"x":15,"y":2,"v":40},{"x":0,"y":3,"v":0},{"x":1,"y":3,"v":84},{"x":2,"y":3,"v":0},{"x":3,"y":3,"v":48},{"x":4,"y":3,"v":13},{"x":5,"y":3,"v":30},{"x":6,"y":3,"v":0},{"x":7,"y":3,"v":0},{"x":8,"y":3,"v":43},{"x":9,"y":3,"v":0},{"x":10,"y":3,"v":82},{"x":11,"y":3,"v":61},{"x":12,"y":3,"v":22},{"x":13,"y":3,"v":18},{"x":14,"y":3,"v":31},{"x":15,"y":3,"v":55},{"x":0,"y":4,"v":0},{"x":1,"y":4,"v":68},{"x":2,"y":4,"v":15},{"x":3,"y":4,"v":0},{"x":4,"y":4,"v":5},{"x":5,"y":4,"v":0},{"x":6,"y":4,"v":75},{"x":7,"y":4,"v":0},{"x":8,"y":4,"v":53},{"x":9,"y":4,"v":19},{"x":10,"y":4,"v":61},{"x":11,"y":4,"v":28},{"x":12,"y":4,"v":31},{"x":13,"y":4,"v":22},{"x":14,"y":4,"v":0},{"x":15,"y":4,"v":84},{"x":0,"y":5,"v":18},{"x":1,"y":5,"v":28},{"x":2,"y":5,"v":39},{"x":3,"y":5,"v":59},{"x":4,"y":5,"v":31},{"x":5,"y":5,"v":0},{"x":6,"y":5,"v":44},{"x":7,"y":5,"v":48},{"x":8,"y":5,"v":23},{"x":9,"y":5,"v":28},{"x":10,"y":5,"v":58},{"x":11,"y":5,"v":18},{"x":12,"y":5,"v":30},{"x":13,"y":5,"v":30},{"x":14,"y":5,"v":51},{"x":15,"y":5,"v":43},{"x":0,"y":6,"v":61},{"x":1,"y":6,"v":0},{"x":2,"y":6,"v":0},{"x":3,"y":6,"v":17},{"x":4,"y":6,"v":0},{"x":5,"y":6,"v":72},{"x":6,"y":6,"v":0},{"x":7,"y":6,"v":16},{"x":8,"y":6,"v":69},{"x":9,"y":6,"v":36},{"x":10,"y":6,"v":83},{"x":11,"y":6,"v":73},{"x":12,"y":6,"v":0},{"x":13,"y":6,"v":0},{"x":14,"y":6,"v":10},{"x":15,"y":6,"v":45},{"x":0,"y":7,"v":65},{"x":1,"y":7,"v":0},{"x":2,"y":7,"v":0},{"x":3,"y":7,"v":71},{"x":4,"y":7,"v":0},{"x":5,"y":7,"v":33},{"x":6,"y":7,"v":75},{"x":7,"y":7,"v":32},{"x":8,"y":7,"v":0},{"x":9,"y":7,"v":31},{"x":10,"y":7,"v":0},{"x":11,"y":7,"v":34},{"x":12,"y":7,"v":11},{"x":13,"y":7,"v":63},{"x":14,"y":7,"v":0},{"x":15,"y":7,"v":0},{"x":0,"y":8,"v":61},{"x":1,"y":8,"v":26},{"x":2,"y":8,"v":8},{"x":3,"y":8,"v":40},{"x":4,"y":8,"v":62},{"x":5,"y":8,"v":0},{"x":6,"y":8,"v":0},{"x":7,"y":8,"v":58},{"x":8,"y":8,"v":40},{"x":9,"y":8,"v":41},{"x":10,"y":8,"v":31},{"x":11,"y":8,"v":16},{"x":12,"y":8,"v":26},{"x":13,"y":8,"v":48},{"x":14,"y":8,"v":39},{"x":15,"y":8,"v":5}]\r
    const cells=Array.isArray(customData)&&customData.length&&customData[0].v!=null?customData:gen()\r
    const margin={top:30,right:12,bottom:12,left:12}\r
    const cw=(W-margin.left-margin.right)/cols, rh= (200)/rows\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('rect').attr('width',W-margin.left-margin.right).attr('height',200).attr('fill','var(--bg)').attr('stroke','var(--border)').attr('rx',6)\r
    const color=d3.scaleSequential(d3.interpolateYlOrRd).domain([0,90])\r
    cells.forEach(c=>{\r
      if(c.v===0) return\r
      g.append('rect').attr('x',c.x*cw+0.8).attr('y',c.y*rh+0.8).attr('width',cw-1.6).attr('height',rh-1.6).attr('fill',color(c.v)).attr('rx',2)\r
    })\r
    // coast outline faint\r
    g.append('rect').attr('width',W-margin.left-margin.right).attr('height',200).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3').attr('opacity',0.22).attr('rx',6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Gridded Population Map')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};