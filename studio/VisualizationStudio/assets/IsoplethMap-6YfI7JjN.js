var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'isopleth-map',\r
  title: 'Isopleth Map',\r
  desc: 'Isopleth Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IsoplethMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","isopleth-map"],\r
}\r
\r
export default function IsoplethMap({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [{"x":212.353,"y":106.209,"v":85.247},{"x":234.315,"y":59.718,"v":52.659},{"x":107.433,"y":136.207,"v":86.547},{"x":171.141,"y":72.487,"v":88.206},{"x":258.636,"y":82.19,"v":19.725},{"x":180.233,"y":146.724,"v":61.062},{"x":21.23,"y":110.033,"v":83.734},{"x":36.387,"y":130.695,"v":3.154},{"x":105.426,"y":40.503,"v":18.569},{"x":270.735,"y":120.157,"v":2.712},{"x":75.362,"y":173.257,"v":48.774},{"x":278.887,"y":84.308,"v":44.99},{"x":31.981,"y":38.737,"v":55.66},{"x":210.953,"y":71.68,"v":64.569},{"x":87.043,"y":81.617,"v":73.862},{"x":294.787,"y":116.359,"v":20.419},{"x":110.946,"y":79.809,"v":7.469},{"x":231.155,"y":145.731,"v":69.309},{"x":316.909,"y":44.955,"v":94.374},{"x":157.964,"y":190.19,"v":13.73},{"x":55.502,"y":32.693,"v":36.045},{"x":174.151,"y":134.027,"v":89.956},{"x":44.826,"y":152.332,"v":93.487},{"x":109.04,"y":150.12,"v":17.962},{"x":186.501,"y":169.722,"v":12.059},{"x":338.604,"y":125.676,"v":91.612},{"x":158.877,"y":128.337,"v":33.696},{"x":210.797,"y":84.903,"v":72.941},{"x":114.467,"y":106.46,"v":84.313},{"x":242.421,"y":198.982,"v":89.02},{"x":158.205,"y":122.686,"v":29.593},{"x":52.281,"y":148.443,"v":31.331},{"x":271.502,"y":183.812,"v":9.364},{"x":172.125,"y":169.732,"v":12.998},{"x":331.279,"y":60.327,"v":70.943},{"x":243.901,"y":67.941,"v":41.286},{"x":72.3,"y":141.293,"v":33.593},{"x":86.225,"y":136.914,"v":88.688},{"x":124.441,"y":164.713,"v":39.295},{"x":62.046,"y":176.829,"v":36.971},{"x":23.048,"y":155.362,"v":63.526},{"x":300.295,"y":184.388,"v":20.899}]\r
    const pts=Array.isArray(customData)&&customData.length&&customData[0].v!=null?customData:gen()\r
    const margin={top:28,right:12,bottom:12,left:12}\r
    const width=W-margin.left-margin.right, height=200\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('rect').attr('width',width).attr('height',height).attr('fill','#f8fafc').attr('stroke','var(--border)').attr('rx',6)\r
    // contours via density\r
    const contours=d3.contourDensity().x(d=>d.x).y(d=>d.y).size([width,height]).bandwidth(18).thresholds(6)(pts)\r
    const color=d3.scaleSequential(d3.interpolateYlOrRd).domain([0,6])\r
    g.selectAll('path').data(contours).join('path').attr('d',d3.geoPath()).attr('fill',d=>color(d.value)).attr('fill-opacity',0.55).attr('stroke',d=>d3.color(color(d.value)).darker(0.4)).attr('stroke-width',0.8)\r
    g.selectAll('circle').data(pts).join('circle').attr('cx',d=>d.x).attr('cy',d=>d.y).attr('r',2.2).attr('fill','#0f172a').attr('opacity',0.62)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Isopleth Map (Density Contours)')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};