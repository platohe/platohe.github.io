var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'scatterplot-matrix',\r
  title: 'Scatterplot Matrix',\r
  desc: 'Scatterplot Matrix — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ScatterplotMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatterplot-matrix"],\r
}\r
\r
export default function ScatterplotMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Generate sample multivariate data\r
    const DEFAULT_DATA = [{"id":0,"x1":60.11,"x2":44.829,"x3":85.247,"x4":66.973,"category":0},{"id":1,"x1":52.659,"x2":27.323,"x3":62.474,"x4":86.547,"category":1},{"id":2,"x1":24.992,"x2":88.206,"x3":74.574,"x4":30.7,"category":0},{"id":3,"x1":50.073,"x2":68.661,"x3":61.062,"x4":0.384,"category":1},{"id":4,"x1":83.734,"x2":5.121,"x3":59.232,"x4":3.154,"category":0},{"id":5,"x1":6.178,"x2":18.569,"x3":78.355,"x4":53.034,"category":0},{"id":6,"x1":17.301,"x2":84.269,"x3":48.774,"x4":80.902,"category":0},{"id":7,"x1":44.99,"x2":3.744,"x3":5.139,"x4":55.66,"category":1},{"id":8,"x1":24.517,"x2":64.569,"x3":20.951,"x4":30.363,"category":2},{"id":9,"x1":85.871,"x2":50.8,"x3":20.419,"x4":28.421,"category":0},{"id":10,"x1":7.469,"x2":65.986,"x3":68.077,"x4":69.309,"category":2},{"id":11,"x1":8.797,"x2":94.374,"x3":43.114,"x4":94.229,"category":0},{"id":12,"x1":11.094,"x2":1.584,"x3":36.045,"x4":48.172,"category":1},{"id":13,"x1":89.956,"x2":7.758,"x3":71.96,"x4":93.487,"category":0},{"id":14,"x1":70.659,"x2":17.962,"x3":52.032,"x4":82.189,"category":0},{"id":15,"x1":99.564,"x2":56.28,"x3":91.612,"x4":43.399,"category":1},{"id":16,"x1":33.696,"x2":59.624,"x3":32.296,"x4":72.941,"category":0},{"id":17,"x1":44.976,"x2":84.313,"x3":69.507,"x4":99.401,"category":2},{"id":18,"x1":43.189,"x2":54.521,"x3":29.593,"x4":10.088,"category":2},{"id":19,"x1":31.331,"x2":78.594,"x3":90.478,"x4":9.364,"category":1},{"id":20,"x1":82.195,"x2":12.998,"x3":97.275,"x4":17.839,"category":2},{"id":21,"x1":69.969,"x2":22.318,"x3":41.286,"x4":16.344,"category":1},{"id":22,"x1":33.593,"x2":20.695,"x3":62.89,"x4":88.688,"category":0},{"id":23,"x1":79.243,"x2":39.295,"x3":13.139,"x4":86.37,"category":1},{"id":24,"x1":0.953,"x2":73.742,"x3":63.526,"x4":87.592,"category":2},{"id":25,"x1":20.899,"x2":60.393,"x3":48.924,"x4":18.402,"category":0},{"id":26,"x1":70.555,"x2":70.837,"x3":29.149,"x4":27.548,"category":1},{"id":27,"x1":2.911,"x2":22.09,"x3":99.352,"x4":57.235,"category":2},{"id":28,"x1":16.387,"x2":17.083,"x3":56.096,"x4":29.25,"category":1},{"id":29,"x1":43.441,"x2":41.836,"x3":68.614,"x4":39.851,"category":1},{"id":30,"x1":89.564,"x2":32.732,"x3":49.526,"x4":61.087,"category":1},{"id":31,"x1":58.93,"x2":23.541,"x3":32.537,"x4":29.878,"category":0},{"id":32,"x1":66.93,"x2":22.089,"x3":16.93,"x4":69.499,"category":0},{"id":33,"x1":12.491,"x2":31.379,"x3":4.242,"x4":57.754,"category":0},{"id":34,"x1":48.153,"x2":37.993,"x3":71.205,"x4":91.263,"category":2},{"id":35,"x1":43.936,"x2":15.414,"x3":86.763,"x4":52.568,"category":2},{"id":36,"x1":89.451,"x2":45.01,"x3":14.66,"x4":61.874,"category":2},{"id":37,"x1":20.841,"x2":38.964,"x3":54.566,"x4":98.449,"category":1},{"id":38,"x1":85.948,"x2":84.319,"x3":74.362,"x4":5.354,"category":0},{"id":39,"x1":16.93,"x2":50.654,"x3":67.666,"x4":76.08,"category":2},{"id":40,"x1":81.598,"x2":63.161,"x3":83.698,"x4":85.296,"category":1},{"id":41,"x1":35.108,"x2":44.691,"x3":87.838,"x4":68.099,"category":1},{"id":42,"x1":93.753,"x2":62.594,"x3":32.933,"x4":84.467,"category":0},{"id":43,"x1":36.575,"x2":1.997,"x3":8.55,"x4":64.766,"category":2},{"id":44,"x1":95.594,"x2":87.946,"x3":46.625,"x4":70.748,"category":0},{"id":45,"x1":27.31,"x2":13.914,"x3":4.768,"x4":29.098,"category":1},{"id":46,"x1":56.876,"x2":71.637,"x3":79.357,"x4":78.479,"category":0},{"id":47,"x1":66.636,"x2":51.78,"x3":44.354,"x4":46.903,"category":1},{"id":48,"x1":42.505,"x2":33.192,"x3":30.76,"x4":14.765,"category":1},{"id":49,"x1":26.74,"x2":53.056,"x3":54.796,"x4":64.737,"category":1}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const dimensions = ['x1', 'x2', 'x3', 'x4']\r
    const dimensionNames = ['Var A', 'Var B', 'Var C', 'Var D']\r
    const size = 80\r
    const padding = 15\r
    const color = ['#6366f1', '#f59e0b', '#10b981']\r
\r
    // Create scales for each dimension\r
    const scales = {}\r
    dimensions.forEach(dim => {\r
      scales[dim] = d3.scaleLinear()\r
        .domain(d3.extent(data, d => d[dim]))\r
        .range([padding, size - padding])\r
    })\r
\r
    // Create SPLOM grid\r
    const g = svg.append('g')\r
      .attr('transform', 'translate(30, 30)')\r
\r
    dimensions.forEach((dimY, i) => {\r
      dimensions.forEach((dimX, j) => {\r
        const cellX = j * (size + padding)\r
        const cellY = i * (size + padding)\r
\r
        // Skip diagonal (or could show histograms)\r
        if (i === j) {\r
          // Show diagonal as histogram\r
          const cell = g.append('g')\r
            .attr('transform', \`translate(\${cellX}, \${cellY})\`)\r
\r
          const histogram = d3.histogram()\r
            .value(d => d[dimX])\r
            .domain(scales[dimX].domain())\r
            .thresholds(8)\r
\r
          const bins = histogram(data)\r
          const maxBinCount = bins.length > 0 ? d3.max(bins, d => d.length) : 0\r
\r
          const binScale = d3.scaleLinear()\r
            .domain([0, maxBinCount])\r
            .range([size - padding, padding])\r
\r
          cell.selectAll('rect')\r
            .data(bins)\r
            .join('rect')\r
            .attr('x', d => scales[dimX](d.x0))\r
            .attr('y', d => binScale(d.length))\r
            .attr('width', d => Math.max(0, scales[dimX](d.x1) - scales[dimX](d.x0) - 1))\r
            .attr('height', d => size - padding - binScale(d.length))\r
            .attr('fill', '#6366f1')\r
            .attr('opacity', 0.6)\r
\r
          // Add dimension label\r
          cell.append('text')\r
            .attr('x', size / 2)\r
            .attr('y', size - 2)\r
            .attr('text-anchor', 'middle')\r
            .attr('fill', 'var(--text-secondary)')\r
            .attr('font-size', '10px')\r
            .text(dimensionNames[j])\r
        } else {\r
          // Show scatterplot\r
          const cell = g.append('g')\r
            .attr('transform', \`translate(\${cellX}, \${cellY})\`)\r
\r
          // Add border\r
          cell.append('rect')\r
            .attr('width', size)\r
            .attr('height', size)\r
            .attr('fill', 'none')\r
            .attr('stroke', 'var(--border)')\r
            .attr('stroke-width', 0.5)\r
\r
          // Add points\r
          cell.selectAll('circle')\r
            .data(data)\r
            .join('circle')\r
            .attr('cx', d => scales[dimX](d[dimX]))\r
            .attr('cy', d => scales[dimY](d[dimY]))\r
            .attr('r', 3)\r
            .attr('fill', d => color[d.category])\r
            .attr('opacity', 0.7)\r
            .attr('cursor', 'pointer')\r
            .on('mouseover', function() {\r
              d3.select(this)\r
                .transition()\r
                .duration(100)\r
                .attr('r', 5)\r
                .attr('opacity', 1)\r
            })\r
            .on('mouseout', function() {\r
              d3.select(this)\r
                .transition()\r
                .duration(100)\r
                .attr('r', 3)\r
                .attr('opacity', 0.7)\r
            })\r
\r
          // Add dimension labels\r
          if (i === dimensions.length - 1) {\r
            cell.append('text')\r
              .attr('x', size / 2)\r
              .attr('y', size - 2)\r
              .attr('text-anchor', 'middle')\r
              .attr('fill', 'var(--text-secondary)')\r
              .attr('font-size', '10px')\r
              .text(dimensionNames[j])\r
          }\r
\r
          if (j === 0) {\r
            cell.append('text')\r
              .attr('x', 2)\r
              .attr('y', size / 2)\r
              .attr('text-anchor', 'start')\r
              .attr('dominant-baseline', 'middle')\r
              .attr('fill', 'var(--text-secondary)')\r
              .attr('font-size', '10px')\r
              .text(dimensionNames[i])\r
          }\r
        }\r
      })\r
    })\r
\r
    // Add legend\r
    const legend = svg.append('g')\r
      .attr('transform', 'translate(30, 400)')\r
\r
    color.forEach((c, i) => {\r
      const legendItem = legend.append('g')\r
        .attr('transform', \`translate(\${i * 60}, 0)\`)\r
\r
      legendItem.append('circle')\r
        .attr('r', 5)\r
        .attr('fill', c)\r
\r
      legendItem.append('text')\r
        .attr('x', 10)\r
        .attr('y', 4)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(\`Group \${i + 1}\`)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 12)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Scatterplot Matrix (SPLOM)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 450" />\r
}`;export{e as default};