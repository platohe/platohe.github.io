var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'community-detection',\r
  title: 'Community Detection',\r
  desc: 'Community Detection — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CommunityDetection',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","community-detection"],\r
}\r
\r
export default function CommunityDetection({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":0,"group":0},{"id":1,"group":0},{"id":2,"group":0},{"id":3,"group":0},{"id":4,"group":0},{"id":5,"group":0},{"id":6,"group":0},{"id":7,"group":0},{"id":8,"group":0},{"id":9,"group":0},{"id":10,"group":1},{"id":11,"group":1},{"id":12,"group":1},{"id":13,"group":1},{"id":14,"group":1},{"id":15,"group":1},{"id":16,"group":1},{"id":17,"group":1},{"id":18,"group":1},{"id":19,"group":1},{"id":20,"group":2},{"id":21,"group":2},{"id":22,"group":2},{"id":23,"group":2},{"id":24,"group":2},{"id":25,"group":2},{"id":26,"group":2},{"id":27,"group":2},{"id":28,"group":2},{"id":29,"group":2},{"id":30,"group":3},{"id":31,"group":3},{"id":32,"group":3},{"id":33,"group":3},{"id":34,"group":3},{"id":35,"group":3},{"id":36,"group":3},{"id":37,"group":3},{"id":38,"group":3},{"id":39,"group":3},{"id":40,"group":4},{"id":41,"group":4},{"id":42,"group":4},{"id":43,"group":4},{"id":44,"group":4},{"id":45,"group":4},{"id":46,"group":4},{"id":47,"group":4},{"id":48,"group":4},{"id":49,"group":4}],"edges":[{"source":30,"target":22},{"source":42,"target":33},{"source":8,"target":26},{"source":13,"target":31},{"source":43,"target":23},{"source":12,"target":44},{"source":37,"target":15},{"source":9,"target":25},{"source":34,"target":30},{"source":0,"target":23},{"source":41,"target":2},{"source":29,"target":1},{"source":13,"target":3},{"source":9,"target":39},{"source":26,"target":1},{"source":8,"target":42},{"source":24,"target":40},{"source":15,"target":22},{"source":1,"target":2},{"source":27,"target":29},{"source":12,"target":32},{"source":10,"target":15},{"source":36,"target":42},{"source":25,"target":10},{"source":14,"target":14},{"source":3,"target":32},{"source":34,"target":34},{"source":46,"target":4},{"source":47,"target":21},{"source":47,"target":6},{"source":5,"target":0},{"source":18,"target":24},{"source":30,"target":44},{"source":3,"target":35},{"source":46,"target":13},{"source":35,"target":8},{"source":26,"target":41},{"source":6,"target":49},{"source":28,"target":45},{"source":21,"target":28},{"source":16,"target":29},{"source":16,"target":36},{"source":14,"target":22},{"source":42,"target":34},{"source":49,"target":44},{"source":21,"target":27},{"source":14,"target":5},{"source":34,"target":15},{"source":39,"target":45},{"source":4,"target":23},{"source":41,"target":6},{"source":48,"target":8},{"source":35,"target":34},{"source":11,"target":20},{"source":8,"target":32},{"source":16,"target":10},{"source":31,"target":44},{"source":16,"target":39},{"source":19,"target":6},{"source":43,"target":18},{"source":0,"target":36},{"source":31,"target":43},{"source":45,"target":10},{"source":30,"target":24},{"source":9,"target":2},{"source":35,"target":35},{"source":14,"target":13},{"source":16,"target":1},{"source":11,"target":49},{"source":28,"target":49},{"source":8,"target":8},{"source":28,"target":14},{"source":19,"target":21},{"source":20,"target":34},{"source":19,"target":16},{"source":44,"target":16},{"source":24,"target":30},{"source":27,"target":29},{"source":11,"target":16},{"source":14,"target":16},{"source":33,"target":11},{"source":8,"target":34},{"source":15,"target":6},{"source":15,"target":2},{"source":28,"target":10},{"source":24,"target":18},{"source":35,"target":45},{"source":40,"target":21},{"source":7,"target":43},{"source":26,"target":42},{"source":44,"target":22},{"source":7,"target":30},{"source":40,"target":10},{"source":19,"target":27},{"source":49,"target":24},{"source":42,"target":42},{"source":37,"target":2},{"source":3,"target":8},{"source":25,"target":33},{"source":38,"target":49},{"source":40,"target":31},{"source":41,"target":42},{"source":29,"target":17},{"source":22,"target":43},{"source":34,"target":17},{"source":46,"target":31},{"source":16,"target":42},{"source":7,"target":18},{"source":0,"target":4},{"source":32,"target":36},{"source":47,"target":43},{"source":23,"target":35},{"source":7,"target":13},{"source":6,"target":2},{"source":14,"target":22},{"source":28,"target":35},{"source":39,"target":39},{"source":9,"target":33},{"source":25,"target":22},{"source":23,"target":22},{"source":21,"target":16},{"source":15,"target":7},{"source":25,"target":13},{"source":26,"target":27},{"source":32,"target":21},{"source":6,"target":0},{"source":7,"target":47},{"source":3,"target":43},{"source":21,"target":25},{"source":4,"target":41},{"source":2,"target":18},{"source":11,"target":35},{"source":28,"target":4},{"source":48,"target":37},{"source":33,"target":39},{"source":27,"target":40},{"source":26,"target":8},{"source":3,"target":4},{"source":2,"target":13},{"source":33,"target":33},{"source":28,"target":48},{"source":1,"target":19},{"source":16,"target":14},{"source":41,"target":26},{"source":10,"target":47},{"source":47,"target":13},{"source":25,"target":43},{"source":46,"target":34},{"source":28,"target":40},{"source":15,"target":24}]}\r
\r
  // Simplified Louvain-style community detection\r
  function detectCommunities(nodes, edges) {\r
    const n = nodes.length\r
    const adjacency = new Array(n).fill(0).map(() => [])\r
    const degrees = new Array(n).fill(0)\r
    \r
    edges.forEach(e => {\r
      if (e.source !== e.target) {\r
        adjacency[e.source].push(e.target)\r
        adjacency[e.target].push(e.source)\r
        degrees[e.source]++\r
        degrees[e.target]++\r
      }\r
    })\r
    \r
    // Initialize each node in its own community\r
    let communities = nodes.map((_, i) => i)\r
    \r
    // Modularity calculation\r
    function modularity(comm) {\r
      let Q = 0\r
      const m = edges.length\r
      \r
      for (let i = 0; i < n; i++) {\r
        for (let j = 0; j < n; j++) {\r
          if (comm[i] === comm[j]) {\r
            let Aij = 0\r
            if (i !== j) {\r
              // Check if edge exists\r
              Aij = edges.some(e => (e.source === i && e.target === j) || (e.source === j && e.target === i)) ? 1 : 0\r
            }\r
            const expected = (degrees[i] * degrees[j]) / (2 * edges.length)\r
            Q += (Aij - expected) / (2 * m)\r
          }\r
        }\r
      }\r
      return Q\r
    }\r
    \r
    // Simple label propagation (simplified Louvain)\r
    let changed = true\r
    let iterations = 0\r
    while (changed && iterations < 20) {\r
      changed = false\r
      const order = d3.shuffle(d3.range(n))\r
      \r
      for (const i of order) {\r
        const neighborComms = {}\r
        adjacency[i].forEach(nbr => {\r
          const c = communities[nbr]\r
          neighborComms[c] = (neighborComms[c] || 0) + 1\r
        })\r
        \r
        if (Object.keys(neighborComms).length > 0) {\r
          const bestComm = Object.entries(neighborComms).sort((a, b) => b[1] - a[1])[0][0]\r
          if (bestComm !== communities[i]) {\r
            communities[i] = +bestComm\r
            changed = true\r
          }\r
        }\r
      }\r
      iterations++\r
    }\r
    \r
    // Remap communities to consecutive IDs\r
    const uniqueComms = [...new Set(communities)]\r
    const commMap = {}\r
    uniqueComms.forEach((c, i) => { commMap[c] = i })\r
    communities = communities.map(c => commMap[c])\r
    \r
    return { communities, modularity: modularity(communities) }\r
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
    const adjacency = new Array(n).fill(0).map(() => [])\r
    const degrees = new Array(n).fill(0)\r
    \r
    edges.forEach(e => {\r
      if (e.source !== e.target) {\r
        adjacency[e.source].push(e.target)\r
        adjacency[e.target].push(e.source)\r
        degrees[e.source]++\r
        degrees[e.target]++\r
      }\r
    })\r
\r
    const { communities, modularity } = detectCommunities(nodes, edges)\r
    const nCommunities = Math.max(...communities) + 1\r
\r
    // Force-directed layout with community coloring\r
    const simulation = d3.forceSimulation(nodes.map((d, i) => ({ ...d, community: communities[i] })))\r
      .force('link', d3.forceLink(edges).id(d => d.id).distance(30).strength(0.5))\r
      .force('charge', d3.forceManyBody().strength(-100))\r
      .force('center', d3.forceCenter(IW / 2, IH / 2))\r
      .force('collision', d3.forceCollide().radius(15))\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Links\r
    const link = g.append('g')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-opacity', 0.3)\r
      .selectAll('line')\r
      .data(edges)\r
      .join('line')\r
      .attr('stroke-width', d => Math.sqrt(d.value || 1))\r
\r
    // Nodes\r
    const node = g.append('g')\r
      .selectAll('circle')\r
      .data(nodes.map((d, i) => ({ ...d, community: communities[i] })))\r
      .join('circle')\r
      .attr('r', 10)\r
      .attr('fill', d => colors[d.community % colors.length])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .call(drag(simulation))\r
\r
    // Labels\r
    const label = g.append('g')\r
      .selectAll('text')\r
      .data(nodes.map((d, i) => ({ ...d, community: communities[i] })))\r
      .join('text')\r
      .attr('font-size', '9px')\r
      .attr('fill', 'var(--text)')\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .text(d => d.id)\r
\r
    simulation.on('tick', () => {\r
      link\r
        .attr('x1', d => d.source?.x ?? IW / 2)\r
        .attr('y1', d => d.source?.y ?? IH / 2)\r
        .attr('x2', d => d.target?.x ?? IW / 2)\r
        .attr('y2', d => d.target?.y ?? IH / 2)\r
\r
      node\r
        .attr('cx', d => d.x ?? IW / 2)\r
        .attr('cy', d => d.y ?? IH / 2)\r
\r
      label\r
        .attr('x', d => d.x ?? IW / 2)\r
        .attr('y', d => (d.y ?? IH / 2) + 16)\r
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
    // Community legend\r
    const uniqueComms = [...new Set(communities)]\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    uniqueComms.forEach((c, i) => {\r
      lg.append('circle')\r
        .attr('cx', 0).attr('cy', i * 20 + 10).attr('r', 8)\r
        .attr('fill', colors[c % colors.length])\r
      lg.append('text')\r
        .attr('x', 16).attr('y', i * 20 + 14)\r
        .attr('font-size', '10px').attr('fill', 'var(--text)')\r
        .text(\`Community \${c}\`)\r
    })\r
\r
    // Modularity score\r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', 30)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '11px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Modularity Q: \${modularity.toFixed(3)} | Communities: \${new Set(communities).size}\`)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Community Detection (Louvain-style)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};