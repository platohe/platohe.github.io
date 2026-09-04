var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'conway-life',\r
  title: 'Conway Life',\r
  desc: 'Conway Life — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConwayLife',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","conway-life"],\r
}\r
\r
export default function ConwayLife({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"cols":32,"rows":24,"speedMs":150}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const cols = config.cols || 32\r
    const rows = config.rows || 24\r
    const margin = { top: 35, right: 20, bottom: 15, left: 20 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const cellW = plotW / cols\r
    const cellH = plotH / rows\r
\r
    // Initialize grid with Gliders, Pulsars, and Acorn\r
    let grid = Array.from({ length: rows }, () => Array(cols).fill(0))\r
\r
    // Place Glider 1\r
    const glider = [[0, 1], [1, 2], [2, 0], [2, 1], [2, 2]]\r
    glider.forEach(([r, c]) => {\r
      grid[r + 3][c + 4] = 1\r
    })\r
\r
    // Place Glider 2\r
    glider.forEach(([r, c]) => {\r
      grid[r + 10][c + 15] = 1\r
    })\r
\r
    // Place Blinker / Pulsar pattern\r
    const pattern = [[0, 1], [1, 1], [2, 1], [1, 0], [2, -1]]\r
    pattern.forEach(([r, c]) => {\r
      if (r + 12 < rows && c + 24 < cols) grid[r + 12][c + 24] = 1\r
    })\r
\r
    // Random noise in corner\r
    for (let r = 5; r < 10; r++) {\r
      for (let c = 12; c < 16; c++) {\r
        if (Math.random() > 0.4) grid[r][c] = 1\r
      }\r
    }\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const cellsG = g.append('g')\r
\r
    function step() {\r
      const nextGrid = Array.from({ length: rows }, () => Array(cols).fill(0))\r
\r
      for (let r = 0; r < rows; r++) {\r
        for (let c = 0; c < cols; c++) {\r
          let neighbors = 0\r
          for (let dr = -1; dr <= 1; dr++) {\r
            for (let dc = -1; dc <= 1; dc++) {\r
              if (dr === 0 && dc === 0) continue\r
              const nr = (r + dr + rows) % rows\r
              const nc = (c + dc + cols) % cols\r
              neighbors += grid[nr][nc]\r
            }\r
          }\r
\r
          if (grid[r][c] === 1) {\r
            nextGrid[r][c] = (neighbors === 2 || neighbors === 3) ? 1 : 0\r
          } else {\r
            nextGrid[r][c] = neighbors === 3 ? 1 : 0\r
          }\r
        }\r
      }\r
\r
      grid = nextGrid\r
\r
      // Render cells\r
      const activeCells = []\r
      for (let r = 0; r < rows; r++) {\r
        for (let c = 0; c < cols; c++) {\r
          if (grid[r][c] === 1) {\r
            activeCells.push({ r, c, id: \`\${r}-\${c}\` })\r
          }\r
        }\r
      }\r
\r
      cellsG.selectAll('rect')\r
        .data(activeCells, d => d.id)\r
        .join(\r
          enter => enter.append('rect')\r
            .attr('x', d => d.c * cellW)\r
            .attr('y', d => d.r * cellH)\r
            .attr('width', cellW - 1)\r
            .attr('height', cellH - 1)\r
            .attr('fill', '#10b981')\r
            .attr('rx', 1.5),\r
          update => update,\r
          exit => exit.remove()\r
        )\r
    }\r
\r
    step()\r
    const interval = setInterval(step, config.speedMs || 150)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text("Conway's Game of Life (Cellular Automata)")\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Live Toroidal Simulation')\r
\r
    return () => clearInterval(interval)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};