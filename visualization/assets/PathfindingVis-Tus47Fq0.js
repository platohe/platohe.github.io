var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
const ALGORITHMS = [\r
  { id: 'astar', name: 'A*', heuristic: true },\r
  { id: 'dijkstra', name: 'Dijkstra', heuristic: false },\r
  { id: 'bfs', name: 'BFS', heuristic: false },\r
  { id: 'dfs', name: 'DFS', heuristic: false }\r
]\r
\r
const DEFAULT_DATA = {\r
  cols: 30,\r
  rows: 20,\r
  start: { x: 2, y: 10 },\r
  end: { x: 27, y: 10 },\r
  walls: [],\r
  algorithm: 'astar',\r
  speed: 30\r
}\r
\r
const COLORS = {\r
  empty: '#e2e8f0',\r
  wall: '#1e293b',\r
  start: '#10b981',\r
  end: '#ef4444',\r
  visited: '#3b82f6',\r
  path: '#f59e0b',\r
  frontier: '#8b5cf6'\r
}\r
\r
export const meta = {\r
  id: 'pathfinding-vis',\r
  title: 'Pathfinding Vis',\r
  desc: 'Pathfinding Vis — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PathfindingVis',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","pathfinding-vis"],\r
}\r
\r
export default function PathfindingVis({ data: customData }) {\r
  const ref = useRef(null)\r
  const [algorithm, setAlgorithm] = useState('astar')\r
  const [running, setRunning] = useState(false)\r
  const [speed, setSpeed] = useState(30)\r
  const [grid, setGrid] = useState([])\r
  const [step, setStep] = useState(0)\r
  const [visitedCount, setVisitedCount] = useState(0)\r
  const [pathLength, setPathLength] = useState(0)\r
  const [found, setFound] = useState(false)\r
  const [drawingWall, setDrawingWall] = useState(false)\r
  const [erasing, setErasing] = useState(false)\r
\r
  useEffect(() => {\r
    const input = (customData && typeof customData === 'object') ? { ...DEFAULT_DATA, ...customData } : DEFAULT_DATA\r
    const { cols, rows, start, end, walls, algorithm: alg } = input\r
    setAlgorithm(alg)\r
    initializeGrid(cols, rows, start, end, walls)\r
  }, [customData])\r
\r
  function initializeGrid(cols, rows, start, end, walls) {\r
    const newGrid = Array(rows).fill(null).map((_, y) =>\r
      Array(cols).fill(null).map((_, x) => ({\r
        x, y,\r
        type: 'empty',\r
        g: Infinity,\r
        f: Infinity,\r
        parent: null\r
      }))\r
    )\r
\r
    if (walls && walls.length > 0) {\r
      walls.forEach(w => {\r
        if (newGrid[w.y] && newGrid[w.y][w.x]) newGrid[w.y][w.x].type = 'wall'\r
      })\r
    }\r
\r
    if (start) newGrid[start.y][start.x].type = 'start'\r
    if (end) newGrid[end.y][end.x].type = 'end'\r
\r
    setGrid(newGrid)\r
    setStep(0)\r
    setVisitedCount(0)\r
    setPathLength(0)\r
    setFound(false)\r
  }\r
\r
  function getNeighbors(grid, node) {\r
    const { cols, rows } = getGridSize()\r
    const neighbors = []\r
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]\r
\r
    for (const [dx, dy] of dirs) {\r
      const nx = node.x + dx\r
      const ny = node.y + dy\r
      if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {\r
        const neighbor = grid[ny][nx]\r
        if (neighbor.type !== 'wall') neighbors.push(neighbor)\r
      }\r
    }\r
    return neighbors\r
  }\r
\r
  function getGridSize() {\r
    return { cols: grid[0]?.length || 30, rows: grid.length || 20 }\r
  }\r
\r
  function heuristic(a, b) {\r
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)\r
  }\r
\r
  function* pathfindingGenerator(grid, start, end, algorithm) {\r
    const openSet = [start]\r
    const closedSet = new Set()\r
    const visited = []\r
\r
    start.g = 0\r
    start.f = algorithm === 'astar' ? heuristic(start, end) : 0\r
\r
    const openSetKey = (node) => \`\${node.x},\${node.y}\`\r
\r
    while (openSet.length > 0) {\r
      let currentIdx = 0\r
      for (let i = 1; i < openSet.length; i++) {\r
        if (openSet[i].f < openSet[currentIdx].f ||\r
            (openSet[i].f === openSet[currentIdx].f && openSet[i].g < openSet[currentIdx].g)) {\r
          currentIdx = i\r
        }\r
      }\r
\r
      const current = openSet[currentIdx]\r
\r
      if (current === end || (current.x === end.x && current.y === end.y)) {\r
        const path = []\r
        let curr = current\r
        while (curr.parent) {\r
          path.push(curr)\r
          curr = curr.parent\r
        }\r
        path.reverse()\r
        yield { type: 'found', path, visited }\r
        return\r
      }\r
\r
      openSet.splice(currentIdx, 1)\r
      closedSet.add(\`\${current.x},\${current.y}\`)\r
\r
      if (current.type !== 'start' && current.type !== 'end') {\r
        current.type = 'visited'\r
        visited.push(current)\r
        yield { type: 'visit', node: current, visited: [...visited] }\r
      }\r
\r
      const neighbors = getNeighbors(grid, current)\r
      for (const neighbor of neighbors) {\r
        if (closedSet.has(\`\${neighbor.x},\${neighbor.y}\`)) continue\r
\r
        const tentativeG = current.g + 1\r
\r
        if (neighbor.g > tentativeG) {\r
          neighbor.parent = current\r
          neighbor.g = tentativeG\r
          neighbor.f = neighbor.g + (algorithm === 'astar' ? heuristic(neighbor, end) : 0)\r
\r
          if (!openSet.some(n => n === neighbor)) {\r
            openSet.push(neighbor)\r
            if (neighbor.type !== 'start' && neighbor.type !== 'end') {\r
              neighbor.type = 'frontier'\r
              yield { type: 'frontier', node: neighbor }\r
            }\r
          }\r
        }\r
      }\r
\r
      yield { type: 'step', visited: [...visited], openSet: [...openSet] }\r
    }\r
\r
    yield { type: 'not_found', visited }\r
  }\r
\r
  const handleCellClick = (x, y, e) => {\r
    if (running) return\r
    const node = grid[y][x]\r
    if (!node) return\r
\r
    if (e.shiftKey || e.button === 2) {\r
      if (node.type === 'wall') {\r
        node.type = 'empty'\r
        setGrid([...grid])\r
      }\r
    } else if (e.ctrlKey || e.metaKey) {\r
      const oldEnd = grid.flat().find(n => n.type === 'end')\r
      if (oldEnd) oldEnd.type = 'empty'\r
      node.type = 'end'\r
      setGrid([...grid])\r
    } else {\r
      const oldStart = grid.flat().find(n => n.type === 'start')\r
      if (oldStart) oldStart.type = 'empty'\r
      node.type = 'start'\r
      setGrid([...grid])\r
    }\r
  }\r
\r
  const handleMouseDown = (x, y, e) => {\r
    if (running) return\r
    const node = grid[y]?.[x]\r
    if (!node || node.type === 'start' || node.type === 'end') return\r
\r
    if (node.type === 'wall') {\r
      setErasing(true)\r
      node.type = 'empty'\r
    } else {\r
      setDrawingWall(true)\r
      node.type = 'wall'\r
    }\r
    setGrid([...grid])\r
  }\r
\r
  const handleMouseMove = (x, y) => {\r
    if (!drawingWall && !erasing) return\r
    const node = grid[y]?.[x]\r
    if (!node || node.type === 'start' || node.type === 'end') return\r
\r
    if (drawingWall) node.type = 'wall'\r
    else if (erasing) node.type = 'empty'\r
    setGrid([...grid])\r
  }\r
\r
  const handleMouseUp = () => {\r
    setDrawingWall(false)\r
    setErasing(false)\r
  }\r
\r
  useEffect(() => {\r
    if (running) {\r
      setRunning(false)\r
      return\r
    }\r
\r
    const newGrid = grid.map(row => row.map(cell => ({\r
      ...cell,\r
      g: Infinity,\r
      f: Infinity,\r
      parent: null,\r
      type: cell.type === 'visited' || cell.type === 'frontier' ? 'empty' : cell.type\r
    })))\r
\r
    const start = newGrid.flat().find(n => n.type === 'start')\r
    const end = newGrid.flat().find(n => n.type === 'end')\r
\r
    if (!start || !end) return\r
\r
    setGrid(newGrid)\r
    setRunning(true)\r
    setStep(0)\r
    setVisitedCount(0)\r
    setPathLength(0)\r
    setFound(false)\r
\r
    const generator = pathfindingGenerator(newGrid, start, end, algorithm)\r
    const interval = setInterval(() => {\r
      const result = generator.next()\r
      if (result.done) {\r
        setRunning(false)\r
        if (result.value?.type === 'found') {\r
          setFound(true)\r
          setPathLength(result.value.path.length)\r
          const nextGrid = grid.map(row => row.map(cell => {\r
            if (cell.type === 'visited' || cell.type === 'frontier') return { ...cell, type: 'empty' }\r
            return cell\r
          }))\r
          result.value.path.forEach(node => {\r
            if (node.type !== 'start' && node.type !== 'end') {\r
              nextGrid[node.y][node.x].type = 'path'\r
            }\r
          })\r
          setGrid(nextGrid)\r
          setPathLength(result.value.path.length)\r
        }\r
      } else {\r
        const action = result.value\r
        if (action.type === 'visit') {\r
          setVisitedCount(c => c + 1)\r
          const nextGrid = grid.map(row => row.map(cell => {\r
            const visitedNode = action.visited.find(v => v.x === cell.x && v.y === cell.y)\r
            if (visitedNode && cell.type !== 'start' && cell.type !== 'end') {\r
              return { ...cell, type: 'visited' }\r
            }\r
            if (cell.type === 'frontier' && !action.openSet.some(n => n.x === cell.x && n.y === cell.y)) {\r
              return { ...cell, type: 'empty' }\r
            }\r
            return cell\r
          }))\r
          action.openSet.forEach(node => {\r
            if (node.type !== 'start' && node.type !== 'end' && node.type !== 'visited') {\r
              nextGrid[node.y][node.x].type = 'frontier'\r
            }\r
          })\r
          setGrid(nextGrid)\r
          setVisitedCount(c => c + 1)\r
        } else if (action.type === 'frontier') {\r
          const nextGrid = grid.map(row => row.map(cell =>\r
            cell.x === action.node.x && cell.y === action.node.y ? { ...cell, type: 'frontier' } : cell\r
          ))\r
          setGrid(nextGrid)\r
        }\r
        setStep(s => s + 1)\r
      }\r
    }, speed)\r
\r
    return () => clearInterval(interval)\r
  }, [running, algorithm, speed, step])\r
\r
  const handleReset = () => {\r
    const input = (customData && typeof customData === 'object') ? { ...DEFAULT_DATA, ...customData } : DEFAULT_DATA\r
    initializeGrid(input.cols, input.rows, input.start, input.end, input.walls)\r
    setRunning(false)\r
  }\r
\r
  const DEFAULT_DATA = {\r
    cols: 30,\r
    rows: 20,\r
    start: { x: 2, y: 10 },\r
    end: { x: 27, y: 10 },\r
    walls: [],\r
    algorithm: 'astar',\r
    speed: 30\r
  }\r
\r
  const COLORS = {\r
    empty: '#e2e8f0',\r
    wall: '#1e293b',\r
    start: '#10b981',\r
    end: '#ef4444',\r
    visited: '#3b82f6',\r
    path: '#f59e0b',\r
    frontier: '#8b5cf6'\r
  }\r
\r
  const ALGORITHMS = [\r
    { id: 'astar', name: 'A*', heuristic: true },\r
    { id: 'dijkstra', name: 'Dijkstra', heuristic: false },\r
    { id: 'bfs', name: 'BFS', heuristic: false },\r
    { id: 'dfs', name: 'DFS', heuristic: false }\r
  ]\r
\r
  const currentAlg = ALGORITHMS.find(a => a.id === algorithm)\r
\r
\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>\r
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '8px 16px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>\r
        <div style={{ display: 'flex', gap: '4px' }}>\r
          {ALGORITHMS.map(alg => (\r
            <button\r
              key={alg.id}\r
              onClick={() => { setAlgorithm(alg.id); setRunning(false) }}\r
              disabled={running}\r
              style={{\r
                padding: '4px 8px',\r
                fontSize: '11px',\r
                border: '1px solid var(--border)',\r
                borderRadius: 4,\r
                background: algorithm === alg.id ? colors[0] : 'var(--bg)',\r
                color: algorithm === alg.id ? 'white' : 'var(--text)',\r
                cursor: running ? 'not-allowed' : 'pointer',\r
                opacity: running ? 0.6 : 1\r
              }}\r
            >\r
              {alg.name}\r
            </button>\r
          ))}\r
        </div>\r
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: 'auto' }}>\r
          <label style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Speed:</label>\r
          <input\r
            type="range"\r
            min="10"\r
            max="200"\r
            value={speed}\r
            onChange={(e) => setSpeed(parseInt(e.target.value))}\r
            style={{ width: '80px' }}\r
          />\r
          <button onClick={() => setRunning(!running)} disabled={found && running} style={{ padding: '2px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', cursor: 'pointer' }}>\r
            {running ? 'Pause' : 'Run'}\r
          </button>\r
          <button onClick={handleReset} style={{ padding: '2px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', cursor: 'pointer' }}>\r
            Reset\r
          </button>\r
        </div>\r
      </div>\r
      <div style={{ display: 'flex', gap: '16px', padding: '8px 16px', fontSize: '11px', color: 'var(--text-secondary)', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>\r
        <span>Algorithm: {currentAlg?.name}</span>\r
        <span>Visited: {visitedCount}</span>\r
        <span>Path Length: {pathLength}</span>\r
        <span>{found ? '✓ Path Found' : running ? '⟳ Searching...' : 'Ready'}</span>\r
      </div>\r
      <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>\r
        <svg ref={ref} width={grid[0]?.length * 20} height={grid.length * 20} viewBox={\`0 0 \${(grid[0]?.length || 30) * 20} \${(grid.length || 20) * 20}\`} style={{ border: '1px solid var(--border)', borderRadius: 4 }}>\r
          {grid.map((row, y) => row.map((cell, x) => (\r
            <rect\r
              key={\`\${x},\${y}\`}\r
              x={x * 20}\r
              y={y * 20}\r
              width={19}\r
              height={19}\r
              fill={COLORS[cell.type] || COLORS.empty}\r
              stroke="none"\r
              onClick={(e) => handleCellClick(cell.x, cell.y, e)}\r
              onMouseDown={(e) => handleMouseDown(cell.x, cell.y, e)}\r
              onMouseEnter={() => handleMouseMove(cell.x, cell.y)}\r
              onMouseUp={handleMouseUp}\r
              style={{ cursor: cell.type === 'start' || cell.type === 'end' ? 'default' : 'crosshair' }}\r
            />\r
          )))}\r
        </svg>\r
      </div>\r
    </div>\r
  )\r
}`;export{e as default};