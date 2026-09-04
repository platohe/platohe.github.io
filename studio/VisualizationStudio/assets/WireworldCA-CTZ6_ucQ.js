var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
export const meta = {\r
  id: 'wireworld-ca',\r
  title: 'Wireworld C A',\r
  desc: 'Wireworld C A — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WireworldCA',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","wireworld-c-a"],\r
}\r
\r
export default function WireworldCA({ data: customData }) {\r
  const ref = useRef(null)\r
  const [running, setRunning] = useState(true)\r
  const [tick, setTick] = useState(0)\r
\r
  const DEFAULT_DATA = {\r
    width: 60,\r
    height: 40,\r
    pGrow: 0.02,\r
    pLightning: 0.0003,\r
    speed: 50\r
  }\r
\r
  const EMPTY = 0\r
  const TREE = 1\r
  const FIRE = 2\r
  const ASH = 3\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && typeof customData === 'object') ? { ...DEFAULT_DATA, ...customData } : DEFAULT_DATA\r
    const { width, height, pGrow, pLightning, speed } = input\r
\r
    // Initialize grid\r
    let grid = d3.range(height).map(() => \r
      d3.range(width).map(() => (Math.random() < 0.5 ? TREE : EMPTY))\r
    )\r
\r
    // Place initial lightning\r
    for (let i = 0; i < 3; i++) {\r
      grid[Math.floor(height/2) + i][Math.floor(width/2)] = FIRE\r
    }\r
\r
    const cellSize = Math.min(IW, IH) / Math.max(width, height)\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + (IW - width * cellSize) / 2}, \${M.top + (IH - height * cellSize) / 2})\`)\r
\r
    // Create cells\r
    const cells = g.selectAll('.cell')\r
      .data(d3.range(height * width))\r
      .join('rect')\r
      .attr('class', 'cell')\r
      .attr('x', (d, i) => (i % width) * cellSize)\r
      .attr('y', (d, i) => Math.floor(i / width) * cellSize)\r
      .attr('width', cellSize)\r
      .attr('height', cellSize)\r
      .attr('stroke', 'none')\r
      .attr('fill', (d, i) => {\r
        const row = Math.floor(i / width)\r
        const col = i % width\r
        return cellColor(grid[row][col])\r
      })\r
\r
    // Color mapping\r
    function cellColor(state) {\r
      switch (state) {\r
        case EMPTY: return '#e2e8f0'  // slate-200\r
        case TREE: return '#166534'   // green-900\r
        case FIRE: return '#ef4444'   // red-500\r
        case ASH: return '#64748b'    // slate-500\r
        default: return '#000'\r
      }\r
    }\r
\r
    // Step function\r
    function step() {\r
      const newGrid = grid.map(row => [...row])\r
\r
      for (let y = 0; y < height; y++) {\r
        for (let x = 0; x < width; x++) {\r
          const state = grid[y][x]\r
          if (state === FIRE) {\r
            newGrid[y][x] = ASH\r
          } else if (state === ASH) {\r
            newGrid[y][x] = EMPTY\r
          } else if (state === EMPTY) {\r
            if (Math.random() < pGrow) {\r
              newGrid[y][x] = TREE\r
            } else if (Math.random() < pLightning) {\r
              newGrid[y][x] = FIRE\r
            }\r
          } else if (state === TREE) {\r
            // Check neighbors for fire\r
            let hasFireNeighbor = false\r
            for (let dy = -1; dy <= 1; dy++) {\r
              for (let dx = -1; dx <= 1; dx++) {\r
                if (dx === 0 && dy === 0) continue\r
                const nx = x + dx\r
                const ny = y + dy\r
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {\r
                  if (grid[ny][nx] === FIRE) {\r
                    hasFireNeighbor = true\r
                  }\r
                }\r
              }\r
            }\r
            if (hasFireNeighbor) {\r
              newGrid[y][x] = FIRE\r
            }\r
          }\r
        }\r
      }\r
\r
      grid = newGrid\r
      setTick(t => t + 1)\r
\r
      // Update cells\r
      cells.data(d3.range(height * width))\r
        .attr('fill', (d, i) => {\r
          const row = Math.floor(i / width)\r
          const col = i % width\r
          return cellColor(grid[row][col])\r
        })\r
    }\r
\r
    let interval = setInterval(() => {\r
      if (running) step()\r
    }, speed)\r
\r
    return () => clearInterval(interval)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>\r
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>\r
        <h3 style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>Wireworld Cellular Automaton</h3>\r
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '11px', color: 'var(--text-secondary)' }}>\r
          <span>Step: {tick}</span>\r
          <button onClick={() => setRunning(!running)} style={{ padding: '2px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', cursor: 'pointer' }}>\r
            {running ? 'Pause' : 'Run'}\r
          </button>\r
          <button onClick={() => setTick(0)} style={{ padding: '2px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', cursor: 'pointer' }}>\r
            Reset\r
          </button>\r
        </div>\r
      </div>\r
      <div style={{ flex: 1, position: 'relative' }}>\r
        <svg ref={ref} width={W} height={H - 40} viewBox={\`0 0 \${W} \${H - 40}\`} />\r
      </div>\r
    </div>\r
  )\r
}`;export{e as default};