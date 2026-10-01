var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'page-rank',\r
  title: 'Page Rank',\r
  desc: 'Page Rank — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PageRank',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","page-rank"],\r
}\r
\r
export default function PageRankViz({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":0,"name":"Node 0"},{"id":1,"name":"Node 1"},{"id":2,"name":"Node 2"},{"id":3,"name":"Node 3"},{"id":4,"name":"Node 4"},{"id":5,"name":"Node 5"},{"id":6,"name":"Node 6"},{"id":7,"name":"Node 7"},{"id":8,"name":"Node 8"},{"id":9,"name":"Node 9"},{"id":10,"name":"Node 10"},{"id":11,"name":"Node 11"},{"id":12,"name":"Node 12"},{"id":13,"name":"Node 13"},{"id":14,"name":"Node 14"},{"id":15,"name":"Node 15"},{"id":16,"name":"Node 16"},{"id":17,"name":"Node 17"},{"id":18,"name":"Node 18"},{"id":19,"name":"Node 19"},{"id":20,"name":"Node 20"},{"id":21,"name":"Node 21"},{"id":22,"name":"Node 22"},{"id":23,"name":"Node 23"},{"id":24,"name":"Node 24"},{"id":25,"name":"Node 25"},{"id":26,"name":"Node 26"},{"id":27,"name":"Node 27"},{"id":28,"name":"Node 28"},{"id":29,"name":"Node 29"}],"edges":[{"source":18,"target":13},{"source":25,"target":20},{"source":5,"target":15},{"source":8,"target":18},{"source":25,"target":14},{"source":7,"target":26},{"source":22,"target":9},{"source":5,"target":15},{"source":20,"target":18},{"source":0,"target":14},{"source":25,"target":1},{"source":17,"target":0},{"source":8,"target":1},{"source":5,"target":23},{"source":15,"target":0},{"source":5,"target":25},{"source":14,"target":24},{"source":9,"target":13},{"source":1,"target":1},{"source":16,"target":17},{"source":7,"target":19},{"source":6,"target":9},{"source":22,"target":25},{"source":15,"target":6},{"source":8,"target":8},{"source":2,"target":19},{"source":20,"target":20},{"source":27,"target":2},{"source":28,"target":12},{"source":28,"target":4},{"source":3,"target":0},{"source":10,"target":14},{"source":18,"target":26},{"source":2,"target":21},{"source":28,"target":8},{"source":21,"target":5},{"source":15,"target":24},{"source":3,"target":29},{"source":16,"target":27},{"source":13,"target":17},{"source":10,"target":17},{"source":9,"target":21},{"source":8,"target":13},{"source":25,"target":20},{"source":29,"target":26},{"source":12,"target":16},{"source":8,"target":3},{"source":20,"target":9},{"source":23,"target":27},{"source":2,"target":14},{"source":24,"target":3},{"source":29,"target":5},{"source":21,"target":20},{"source":6,"target":12},{"source":4,"target":19},{"source":10,"target":6},{"source":18,"target":26},{"source":9,"target":23},{"source":11,"target":3},{"source":25,"target":11},{"source":0,"target":22},{"source":19,"target":26},{"source":27,"target":6},{"source":18,"target":14},{"source":5,"target":1},{"source":21,"target":21},{"source":8,"target":8},{"source":10,"target":0},{"source":6,"target":29},{"source":17,"target":29},{"source":4,"target":5},{"source":16,"target":8},{"source":11,"target":13},{"source":12,"target":20},{"source":11,"target":10},{"source":26,"target":9},{"source":14,"target":18},{"source":16,"target":17},{"source":7,"target":9},{"source":8,"target":9}]}\r
\r
  // PageRank algorithm\r
  function computePageRank(nodes, edges, damping = 0.85, iterations = 50) {\r
    const n = nodes.length\r
    const outEdges = new Array(n).fill(0).map(() => [])\r
    const inEdges = new Array(n).fill(0).map(() => [])\r
    \r
    edges.forEach(e => {\r
      outEdges[e.source].push(e.target)\r
      inEdges[e.target].push(e.source)\r
    })\r
\r
    let ranks = new Array(n).fill(1 / n)\r
    \r
    for (let iter = 0; iter < iterations; iter++) {\r
      const newRanks = new Array(n).fill(0)\r
      let danglingSum = 0\r
      \r
      for (let i = 0; i < n; i++) {\r
        if (outEdges[i].length === 0) {\r
          danglingSum += ranks[i]\r
        } else {\r
          const share = ranks[i] / outEdges[i].length\r
          outEdges[i].forEach(target => {\r
            newRanks[target] += share\r
          })\r
        }\r
      }\r
      \r
      // Add dangling and teleportation\r
      for (let i = 0; i < n; i++) {\r
        newRanks[i] = (1 - 0.85) / n + 0.85 * (newRanks[i] + danglingSum / n)\r
      }\r
      \r
      ranks = newRanks\r
    }\r
    \r
    return ranks\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { nodes, edges } = data\r
    const n = nodes.length\r
\r
    const ranks = computePageRank(nodes, edges)\r
    const maxRank = d3.max(ranks)\r
    const minRank = d3.min(ranks)\r
\r
    // Create layout - nodes positioned by rank\r
    const sortedIndices = d3.range(n).sort((a, b) => ranks[b] - ranks[a])\r
    \r
    const y = d3.scaleLinear().domain([0, n - 1]).range([0, IH])\r
    const x = d3.scaleLinear().domain([0, d3.max(ranks) * 1.1]).range([0, IW])\r
    const colorScale = d3.scaleSequential(d3.interpolateViridis).domain([0, n - 1])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(d3.scaleLinear().domain([0, d3.max(ranks) * 1.1]).range([IH, 0])).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Bars - sorted by rank\r
    const barHeight = IH / n * 0.8\r
    \r
    sortedIndices.forEach((idx, i) => {\r
      const rank = ranks[idx]\r
      const barY = y(i)\r
      const barWidth = x(ranks[idx])\r
      \r
      g.append('rect')\r
        .attr('x', 0)\r
        .attr('y', barY)\r
        .attr('width', barWidth)\r
        .attr('height', barHeight)\r
        .attr('fill', d3.interpolateViridis(i / (n - 1)))\r
        .attr('opacity', 0.8)\r
\r
      // Node label\r
      g.append('text')\r
        .attr('x', barWidth + 5)\r
        .attr('y', barY + barHeight / 2 + 4)\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text)')\r
        .text(\`Node \${idx}: \${ranks[idx].toFixed(4)}\`)\r
    })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('PageRank Centrality')\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', d3.interpolateViridis(0))\r
    lg.append('text').attr('x', 16).attr('y', 10).attr('font-size', '10px').attr('fill', 'var(--text)').text('High Rank')\r
    lg.append('rect').attr('x', 0).attr('y', 18).attr('width', 12).attr('height', 12).attr('fill', d3.interpolateViridis(1))\r
    lg.append('text').attr('x', 16).attr('y', 28).attr('font-size', '10px').attr('fill', 'var(--text)').text('Low Rank')\r
\r
    // Stats\r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', 30)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Damping: 0.85 | Iterations: 50 | Nodes: \${nodes.length}\`)\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};