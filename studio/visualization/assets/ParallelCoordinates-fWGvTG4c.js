var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'parallel-coordinates',\r
  title: 'Parallel Coordinates',\r
  desc: 'Parallel Coordinates — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'ParallelCoordinates',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["lines","parallel-coordinates"],\r
}\r
\r
export default function ParallelCoordinates({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Parallel coordinates data\r
    const DEFAULT_DATA = [{"id":0,"x1":60.11,"x2":44.829,"x3":85.247,"x4":66.973,"category":"A"},{"id":1,"x1":17.481,"x2":52.659,"x3":27.323,"x4":62.474,"category":"B"},{"id":2,"x1":86.547,"x2":47.232,"x3":24.992,"x4":88.206,"category":"C"},{"id":3,"x1":74.574,"x2":30.7,"x3":19.725,"x4":50.073,"category":"A"},{"id":4,"x1":68.661,"x2":61.062,"x3":0.384,"x4":47.078,"category":"B"},{"id":5,"x1":83.734,"x2":5.121,"x3":59.232,"x4":3.154,"category":"C"},{"id":6,"x1":26.696,"x2":6.178,"x3":18.569,"x4":78.355,"category":"A"},{"id":7,"x1":53.034,"x2":2.712,"x3":17.301,"x4":84.269,"category":"B"},{"id":8,"x1":48.774,"x2":80.902,"x3":31.946,"x4":44.99,"category":"C"},{"id":9,"x1":3.744,"x2":5.139,"x3":55.66,"x4":59.673,"category":"A"},{"id":10,"x1":24.517,"x2":64.569,"x3":20.951,"x4":30.363,"category":"B"},{"id":11,"x1":73.862,"x2":85.871,"x3":50.8,"x4":20.419,"category":"C"},{"id":12,"x1":28.421,"x2":29.299,"x3":7.469,"x4":65.986,"category":"A"},{"id":13,"x1":68.077,"x2":69.309,"x3":92.784,"x4":8.797,"category":"B"},{"id":14,"x1":94.374,"x2":43.114,"x3":94.229,"x4":13.73,"category":"C"},{"id":15,"x1":11.094,"x2":1.584,"x3":36.045,"x4":48.172,"category":"A"},{"id":16,"x1":61.192,"x2":89.956,"x3":7.758,"x4":71.96,"category":"B"},{"id":17,"x1":93.487,"x2":27.825,"x3":70.659,"x4":17.962,"category":"C"},{"id":18,"x1":52.032,"x2":82.189,"x3":12.059,"x4":99.564,"category":"A"},{"id":19,"x1":56.28,"x2":91.612,"x3":43.399,"x4":57.845,"category":"B"},{"id":20,"x1":33.696,"x2":59.624,"x3":32.296,"x4":72.941,"category":"C"},{"id":21,"x1":29.521,"x2":44.976,"x3":84.313,"x4":69.507,"category":"A"},{"id":22,"x1":99.401,"x2":89.02,"x3":43.189,"x4":54.521,"category":"B"},{"id":23,"x1":29.593,"x2":10.088,"x3":69.672,"x4":31.331,"category":"C"},{"id":24,"x1":78.594,"x2":90.478,"x3":9.364,"x4":47.539,"category":"A"},{"id":25,"x1":82.195,"x2":12.998,"x3":97.275,"x4":17.839,"category":"B"},{"id":26,"x1":70.943,"x2":69.969,"x3":22.318,"x4":41.286,"category":"C"},{"id":27,"x1":16.344,"x2":65.467,"x3":33.593,"x4":20.695,"category":"A"},{"id":28,"x1":62.89,"x2":88.688,"x3":32.638,"x4":79.243,"category":"B"},{"id":29,"x1":39.295,"x2":13.139,"x3":86.37,"x4":36.971,"category":"C"},{"id":30,"x1":0.953,"x2":73.742,"x3":63.526,"x4":87.592,"category":"A"},{"id":31,"x1":90.816,"x2":20.899,"x3":60.393,"x4":48.924,"category":"B"},{"id":32,"x1":18.402,"x2":4.747,"x3":70.555,"x4":70.837,"category":"C"},{"id":33,"x1":29.149,"x2":27.548,"x3":33.66,"x4":2.911,"category":"A"},{"id":34,"x1":22.09,"x2":99.352,"x3":57.235,"x4":98.856,"category":"B"},{"id":35,"x1":16.387,"x2":17.083,"x3":56.096,"x4":29.25,"category":"C"},{"id":36,"x1":39.466,"x2":43.441,"x3":41.836,"x4":68.614,"category":"A"},{"id":37,"x1":39.851,"x2":33.612,"x3":89.564,"x4":32.732,"category":"B"},{"id":38,"x1":49.526,"x2":61.087,"x3":54.636,"x4":58.93,"category":"C"},{"id":39,"x1":23.541,"x2":32.537,"x3":29.878,"x4":32.057,"category":"A"},{"id":40,"x1":66.93,"x2":22.089,"x3":16.93,"x4":69.499,"category":"B"},{"id":41,"x1":31.422,"x2":12.491,"x3":31.379,"x4":4.242,"category":"C"},{"id":42,"x1":57.754,"x2":20.769,"x3":48.153,"x4":37.993,"category":"A"},{"id":43,"x1":71.205,"x2":91.263,"x3":81.17,"x4":43.936,"category":"B"},{"id":44,"x1":15.414,"x2":86.763,"x3":52.568,"x4":84.038,"category":"C"},{"id":45,"x1":89.451,"x2":45.01,"x3":14.66,"x4":61.874,"category":"A"},{"id":46,"x1":80.759,"x2":20.841,"x3":38.964,"x4":54.566,"category":"B"},{"id":47,"x1":98.449,"x2":49.2,"x3":85.948,"x4":84.319,"category":"C"},{"id":48,"x1":74.362,"x2":5.354,"x3":6.934,"x4":16.93,"category":"A"},{"id":49,"x1":50.654,"x2":67.666,"x3":76.08,"x4":99.146,"category":"B"}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const dimensions = ['x1', 'x2', 'x3', 'x4']\r
    const categories = ['A', 'B', 'C']\r
    const colors = { A: '#6366f1', B: '#f59e0b', C: '#10b981' }\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scalePoint()\r
      .domain(dimensions)\r
      .range([0, width])\r
\r
    const y = {}\r
    dimensions.forEach(dim => {\r
      y[dim] = d3.scaleLinear()\r
        .domain(d3.extent(data, d => d[dim]))\r
        .range([height, 0])\r
    })\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Draw lines\r
    const line = d3.line()\r
      .defined(d => !isNaN(d[1]))\r
      .x(d => x(d[0]))\r
      .y(d => y[d[0]](d[1]))\r
\r
    data.forEach(d => {\r
      const lineData = dimensions.map(dim => [dim, d[dim]])\r
      \r
      g.append('path')\r
        .datum(lineData)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[d.category])\r
        .attr('stroke-width', 1)\r
        .attr('opacity', 0.6)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 2)\r
            .attr('opacity', 1)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 1)\r
            .attr('opacity', 0.6)\r
        })\r
    })\r
\r
    // Draw axes\r
    dimensions.forEach(dim => {\r
      const axis = g.append('g')\r
        .attr('transform', \`translate(\${x(dim)},0)\`)\r
      \r
      axis.call(d3.axisLeft(y[dim]).ticks(5).tickSize(0).tickPadding(8))\r
        .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
        .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
      // Axis labels\r
      axis.append('text')\r
        .attr('y', -10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .text(dim)\r
    })\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', 'translate(290, 30)')\r
\r
    categories.forEach((cat, i) => {\r
      const legendItem = legend.append('g')\r
        .attr('transform', \`translate(0, \${i * 20})\`)\r
\r
      legendItem.append('rect')\r
        .attr('width', 16)\r
        .attr('height', 16)\r
        .attr('fill', colors[cat])\r
        .attr('rx', 2)\r
\r
      legendItem.append('text')\r
        .attr('x', 22)\r
        .attr('y', 12)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(\`Group \${cat}\`)\r
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
      .text('Parallel Coordinates')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};