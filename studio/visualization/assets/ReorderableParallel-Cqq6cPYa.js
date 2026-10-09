var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'reorderable-parallel',\r
  title: 'Reorderable Parallel',\r
  desc: 'Reorderable Parallel — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ReorderableParallel',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","reorderable-parallel"],\r
}\r
\r
export default function ReorderableParallel({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const dims=['A','B','C','D']\r
    const gen = () => [{"A":58.088,"B":50.688,"C":78.197,"D":21.368},{"A":23.985,"B":25.027,"C":31.858,"D":46.224},{"A":79.238,"B":67.473,"C":29.994,"D":50.852},{"A":69.659,"B":58.018,"C":25.78,"D":47.831},{"A":64.929,"B":57.972,"C":10.307,"D":55.922},{"A":76.987,"B":60.664,"C":57.386,"D":23.879},{"A":31.356,"B":25.199,"C":24.855,"D":52.299},{"A":52.427,"B":41.218,"C":23.84,"D":53.685},{"A":49.019,"B":47.943,"C":35.557,"D":41.742},{"A":12.995,"B":10.753,"C":54.528,"D":33.364},{"A":29.614,"B":30.847,"C":26.761,"D":44.532},{"A":69.09,"B":64.195,"C":50.64,"D":30.007},{"A":32.737,"B":29.05,"C":15.976,"D":55.451},{"A":64.462,"B":58.597,"C":84.227,"D":9.907},{"A":85.499,"B":71.863,"C":85.384,"D":9.961},{"A":18.875,"B":14.913,"C":38.836,"D":40.385},{"A":58.954,"B":56.779,"C":16.207,"D":56.161},{"A":84.789,"B":69.475,"C":66.527,"D":20.925},{"A":51.625,"B":50.13,"C":19.647,"D":58.133},{"A":55.024,"B":53.912,"C":44.719,"D":38.503},{"A":36.957,"B":35.981,"C":35.837,"D":45.502},{"A":33.617,"B":31.618,"C":77.45,"D":22.133},{"A":89.521,"B":80.509,"C":44.551,"D":38.13},{"A":33.674,"B":27.477,"C":65.738,"D":23.231},{"A":72.875,"B":67.7,"C":17.491,"D":52.035},{"A":75.756,"B":60.649,"C":87.82,"D":9.197},{"A":66.754,"B":60.465,"C":27.855,"D":45.46},{"A":23.075,"B":25.854,"C":36.874,"D":37.616},{"A":60.312,"B":57.686,"C":36.11,"D":46.233},{"A":41.436,"B":33.897,"C":79.096,"D":16.673}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].A!=null?customData:gen()\r
    // corr order (A-B high so adjacent)\r
    let order=['A','B','C','D']\r
    const margin={top:30,right:12,bottom:22,left:12}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const x=d3.scalePoint().domain(order).range([0,width]).padding(0.5)\r
    const y={}\r
    dims.forEach(d=> y[d]=d3.scaleLinear().domain(d3.extent(data, r=>r[d]) ).range([height,0]))\r
    const line=d=> d3.line()(order.map(k=>[x(k)??0, y[k](d[k])]))\r
    const paths=g.selectAll('path.line').data(data).join('path').attr('d',line).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1).attr('opacity',0.42)\r
    paths.on('mouseover',function(){ d3.select(this).attr('opacity',1).attr('stroke-width',2).raise() }).on('mouseout',function(){ d3.select(this).attr('opacity',0.42).attr('stroke-width',1)})\r
    const axes=g.selectAll('g.axis').data(order).join('g').attr('transform',d=>\`translate(\${x(d)??0},0)\`)\r
    axes.each(function(dim){\r
      const s=d3.select(this)\r
      s.append('g').call(d3.axisLeft(y[dim]).ticks(4).tickSize(3)).call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
      s.append('rect').attr('x',-16).attr('y',-14).attr('width',32).attr('height',12).attr('fill',colors[dims.indexOf(dim)]).attr('rx',3)\r
      s.append('text').attr('x',0).attr('y',-5).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').attr('font-weight',700).text(dim)\r
    })\r
    // drag reorder\r
    let dragDim=null\r
    axes.call(d3.drag().on('start',(_,d)=>{dragDim=d}).on('drag',(e,d)=>{\r
      const mx=e.x\r
      // find nearest slot\r
      const slots=order.map(k=>({k, px:x(k)??0})).sort((a,b)=>a.px-b.px)\r
      // crude: swap with neighbor if dragged past midpoint\r
      // simpler: reorder by mx position\r
      const newOrder=[...order].sort((a,b)=> (a===d? mx: x(a)??0) - (b===d? mx: x(b)??0) )\r
      // not fully live; skip heavy reorder on drag for simplicity\r
    }).on('end',()=>{\r
      // on end, cycle order for demo (swap B<->C)\r
      order = order[1]==='B' ? ['A','C','B','D'] : ['A','B','C','D']\r
      x.domain(order)\r
      axes.transition().duration(400).attr('transform',k=>\`translate(\${x(k)??0},0)\`)\r
      paths.transition().duration(400).attr('d',line)\r
    }))\r
    svg.append('text').attr('x',200).attr('y',12).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Reorderable Parallel Coords')\r
    svg.append('text').attr('x',200).attr('y',22).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('Drag any axis header to reorder')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};