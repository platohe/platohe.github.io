var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'betweenness-centrality',\r
  title: 'Betweenness Centrality',\r
  desc: 'Betweenness Centrality — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BetweennessCentrality',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","betweenness-centrality"],\r
}\r
\r
export default function BetweennessCentrality({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":0,"name":"Node 0"},{"id":1,"name":"Node 1"},{"id":2,"name":"Node 2"},{"id":3,"name":"Node 3"},{"id":4,"name":"Node 4"},{"id":5,"name":"Node 5"},{"id":6,"name":"Node 6"},{"id":7,"name":"Node 7"},{"id":8,"name":"Node 8"},{"id":9,"name":"Node 9"},{"id":10,"name":"Node 10"},{"id":11,"name":"Node 11"},{"id":12,"name":"Node 12"},{"id":13,"name":"Node 13"},{"id":14,"name":"Node 14"},{"id":15,"name":"Node 15"},{"id":16,"name":"Node 16"},{"id":17,"name":"Node 17"},{"id":18,"name":"Node 18"},{"id":19,"name":"Node 19"},{"id":20,"name":"Node 20"},{"id":21,"name":"Node 21"},{"id":22,"name":"Node 22"},{"id":23,"name":"Node 23"},{"id":24,"name":"Node 24"},{"id":25,"name":"Node 25"},{"id":26,"name":"Node 26"},{"id":27,"name":"Node 27"},{"id":28,"name":"Node 28"},{"id":29,"name":"Node 29"}],"edges":[{"source":18,"target":13},{"source":25,"target":20},{"source":5,"target":15},{"source":8,"target":18},{"source":25,"target":14},{"source":7,"target":26},{"source":22,"target":9},{"source":5,"target":15},{"source":20,"target":18},{"source":0,"target":14},{"source":25,"target":1},{"source":17,"target":0},{"source":8,"target":1},{"source":5,"target":23},{"source":15,"target":0},{"source":5,"target":25},{"source":14,"target":24},{"source":9,"target":13},{"source":1,"target":1},{"source":16,"target":17},{"source":7,"target":19},{"source":6,"target":9},{"source":22,"target":25},{"source":15,"target":6},{"source":8,"target":8},{"source":2,"target":19},{"source":20,"target":20},{"source":27,"target":2},{"source":28,"target":12},{"source":28,"target":4},{"source":3,"target":0},{"source":10,"target":14},{"source":18,"target":26},{"source":2,"target":21},{"source":28,"target":8},{"source":21,"target":5},{"source":15,"target":24},{"source":3,"target":29},{"source":16,"target":27},{"source":13,"target":17},{"source":10,"target":17},{"source":9,"target":21},{"source":8,"target":13},{"source":25,"target":20},{"source":29,"target":26},{"source":12,"target":16},{"source":8,"target":3},{"source":20,"target":9},{"source":23,"target":27},{"source":2,"target":14},{"source":24,"target":3},{"source":29,"target":5},{"source":21,"target":20},{"source":6,"target":12},{"source":4,"target":19},{"source":10,"target":6},{"source":18,"target":26},{"source":9,"target":23},{"source":11,"target":3},{"source":25,"target":11},{"source":0,"target":22},{"source":19,"target":26},{"source":27,"target":6},{"source":18,"target":14},{"source":5,"target":1},{"source":21,"target":21},{"source":8,"target":8},{"source":10,"target":0},{"source":6,"target":29},{"source":17,"target":29},{"source":4,"target":5},{"source":16,"target":8},{"source":11,"target":13},{"source":12,"target":20},{"source":11,"target":10},{"source":26,"target":9},{"source":14,"target":18},{"source":16,"target":17},{"source":7,"target":9},{"source":8,"target":9}]}\r
\r
  // Brandes algorithm for Betweenness Centrality\r
  function computeBetweenness(nodes, edges, normalized = true) {\r
    const n = nodes.length\r
    const adj = new Array(n).fill(0).map(() => [])\r
    edges.forEach(e => {\r
      if (e.source !== e.target) {\r
        adj[e.source].push(e.target)\r
        adj[e.target].push(e.source)\r
      }\r
    })\r
\r
    const betweenness = new Array(n).fill(0)\r
\r
    for (let s = 0; s < n; s++) {\r
      // Single-source shortest paths\r
      const stack = []\r
      const pred = new Array(n).fill(0).map(() => [])\r
      const sigma = new Array(n).fill(0)\r
      const dist = new Array(n).fill(-1)\r
      sigma[s] = 1\r
      dist[s] = 0\r
\r
      const queue = [s]\r
      while (queue.length > 0) {\r
        const v = queue.shift()\r
        stack.push(v)\r
        adj[v].forEach(w => {\r
          if (dist[w] < 0) {\r
            dist[w] = dist[v] + 1\r
            queue.push(w)\r
          }\r
          if (dist[w] === dist[v] + 1) {\r
            sigma[w] += sigma[v]\r
            pred[w].push(v)\r
          }\r
        })\r
      }\r
\r
      // Accumulation\r
      const delta = new Array(n).fill(0)\r
      while (stack.length > 0) {\r
        const w = stack.pop()\r
        const coeff = (1 + delta[w]) / sigma[w]\r
        pred[w].forEach(v => {\r
          delta[v] += sigma[v] * coeff\r
        })\r
        if (w !== s) {\r
          betweenness[w] += delta[w]\r
        }\r
      }\r
    }\r
\r
    if (normalized) {\r
      const scale = n <= 2 ? 1 : 2 / ((n - 1) * (n - 2))\r
      betweenness.forEach((v, i) => { betweenness[i] = v * scale })\r
    }\r
\r
    return betweenness\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const src = (customData && Array.isArray(customData.nodes) && Array.isArray(customData.edges))\r
      ? customData\r
      : DEFAULT_DATA\r
    const { nodes } = src\r
    const n = nodes.length\r
    // Drop malformed / out-of-range / self-loop edges before any adjacency indexing\r
    const edges = src.edges.filter(e =>\r
      e && Number.isInteger(e.source) && Number.isInteger(e.target) &&\r
      e.source >= 0 && e.source < n && e.target >= 0 && e.target < n && e.source !== e.target)\r
\r
    const adj = new Array(n).fill(0).map(() => [])\r
    edges.forEach(e => {\r
      if (e.source !== e.target) {\r
        adj[e.source].push(e.target)\r
        adj[e.target].push(e.source)\r
      }\r
    })\r
\r
    const betweenness = computeBetweenness(nodes, edges)\r
    const maxBC = d3.max(betweenness)\r
\r
    // Force-directed layout with size proportional to betweenness\r
    const simulation = d3.forceSimulation(nodes.map((d, i) => ({ \r
      ...d, \r
      betweenness: betweenness[i] \r
    })))\r
      .force('link', d3.forceLink(edges).id(d => d.id).distance(40).strength(0.3))\r
      .force('charge', d3.forceManyBody().strength(-200))\r
      .force('center', d3.forceCenter(IW / 2, IH / 2))\r
      .force('collision', d3.forceCollide().radius(d => 10 + d.betweenness * 100))\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Links\r
    const link = g.append('g')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-opacity', 0.2)\r
      .selectAll('line')\r
      .data(edges)\r
      .join('line')\r
      .attr('stroke-width', 1)\r
\r
    // Nodes - size proportional to betweenness\r
    const minBC = d3.min(betweenness)\r
    const sizeScale = d3.scaleSqrt().domain([minBC, maxBC]).range([5, 25])\r
    const colorScale = d3.scaleSequential(d3.interpolateReds).domain([0, maxBC])\r
\r
    const node = g.append('g')\r
      .selectAll('circle')\r
      .data(nodes.map((d, i) => ({ ...d, bc: betweenness[i] })))\r
      .join('circle')\r
      .attr('r', d => sizeScale(d.bc))\r
      .attr('fill', d => colorScale(d.bc))\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .call(drag(simulation))\r
\r
    // Labels\r
    const label = g.append('g')\r
      .selectAll('text')\r
      .data(nodes.map((d, i) => ({ ...d, bc: betweenness[i] })))\r
      .join('text')\r
      .attr('font-size', '9px')\r
      .attr('fill', 'var(--text)')\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .text(d => d.id)\r
\r
    simulation.on('tick', () => {\r
      link\r
        .attr('x1', d => d.source.x)\r
        .attr('y1', d => d.source.y)\r
        .attr('x2', d => d.target.x)\r
        .attr('y2', d => d.target.y)\r
\r
      node\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.y)\r
\r
      label\r
        .attr('x', d => d.x ?? IW / 2)\r
        .attr('y', d => (d.y ?? IH / 2) + 20)\r
    })\r
\r
    function drag(simulation) {\r
      function dragstarted(event, d) {\r
        if (!event.active) simulation.alphaTarget(0.3).restart()\r
        d.fx = d.x\r
        d.fy = d.y\r
      }\r
      function dragged(event, d) {\r
        d.fx = event.x\r
        d.fy = event.y\r
      }\r
      function dragended(event, d) {\r
        if (!event.active) simulation.alphaTarget(0)\r
        d.fx = null\r
        d.fy = null\r
      }\r
      return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)\r
    }\r
\r
    // Color legend\r
    const legendWidth = 100\r
    const legendHeight = 12\r
    const legendX = IW - legendWidth - 20\r
    const legendY = 20\r
\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'bcGrad').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')\r
    d3.range(0, 1.01, 0.01).forEach(t => {\r
      grad.append('stop')\r
        .attr('offset', \`\${t * 100}%\`)\r
        .attr('stop-color', d3.interpolateReds(t))\r
    })\r
\r
    g.append('rect')\r
      .attr('x', legendX).attr('y', legendY)\r
      .attr('width', legendWidth).attr('height', legendHeight)\r
      .attr('fill', 'url(#bcGrad)')\r
\r
    g.append('text')\r
      .attr('x', legendX).attr('y', legendY - 4)\r
      .attr('font-size', '9px').attr('fill', 'var(--text-secondary)')\r
      .text('Low BC')\r
\r
    g.append('text')\r
      .attr('x', legendX + legendWidth).attr('y', legendY - 4)\r
      .attr('text-anchor', 'end').attr('font-size', '9px').attr('fill', 'var(--text-secondary)')\r
      .text('High BC')\r
\r
    // Stats\r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', 30)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Max BC: \${d3.max(betweenness).toFixed(3)} | Mean: \${d3.mean(betweenness).toFixed(3)}\`)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Betweenness Centrality')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};