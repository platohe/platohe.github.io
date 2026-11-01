var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
export const meta = {\r
  id: 'schelling-segregation',\r
  title: 'Schelling Segregation',\r
  desc: 'Schelling Segregation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SchellingSegregation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","schelling-segregation"],\r
}\r
\r
export default function SchellingSegregation({ data: customData }) {\r
  const ref = useRef(null)\r
  const [running, setRunning] = useState(true)\r
  const [step, setStep] = useState(0)\r
  const [segregationIndex, setSegregationIndex] = useState(0)\r
\r
  const DEFAULT_DATA = {\r
    width: 60,\r
    height: 40,\r
    density: 0.9,\r
    threshold: 0.33,\r
    numTypes: 2,\r
    speed: 30\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && typeof customData === 'object') ? { ...DEFAULT_DATA, ...customData } : DEFAULT_DATA\r
    const { width, height, density, threshold, numTypes, speed } = input\r
\r
    // Initialize grid: 0 = empty, 1..numTypes = agent types\r
    let grid = d3.range(height).map(() => \r
      d3.range(width).map(() => {\r
        if (Math.random() > density) return 0\r
        return Math.floor(Math.random() * numTypes) + 1\r
      })\r
    )\r
\r
    const cellSize = 8\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + (IW - width * cellSize) / 2}, \${M.top + (IH - height * cellSize) / 2})\`)\r
\r
    // Create cells\r
    const cells = g.selectAll('.cell')\r
      .data(d3.range(height * width))\r
      .join('rect')\r
      .attr('class', 'cell')\r
      .attr('x', (d, i) => (i % width) * 8)\r
      .attr('y', (d, i) => Math.floor(i / width) * 8)\r
      .attr('width', 7)\r
      .attr('height', 7)\r
      .attr('stroke', 'none')\r
      .attr('fill', (d, i) => cellColor(grid[Math.floor(i / width)][i % width]))\r
\r
    // Color mapping\r
    function cellColor(state) {\r
      if (state === 0) return '#e2e8f0'  // empty\r
      const hues = [0, 120, 240, 60, 300, 180]\r
      return d3.hsl(hues[(state - 1) % hues.length], 0.7, 0.5)\r
    }\r
\r
    // Calculate segregation index\r
    function calculateSegregation() {\r
      let totalSame = 0\r
      let totalNeighbors = 0\r
      \r
      for (let y = 0; y < height; y++) {\r
        for (let x = 0; x < width; x++) {\r
          const state = grid[y][x]\r
          if (state === 0) continue\r
          \r
          let same = 0\r
          let total = 0\r
          \r
          for (let dy = -1; dy <= 1; dy++) {\r
            for (let dx = -1; dx <= 1; dx++) {\r
              if (dx === 0 && dy === 0) continue\r
              const nx = x + dx\r
              const ny = y + dy\r
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {\r
                total++\r
                if (grid[ny][nx] === state) same++\r
              }\r
            }\r
            \r
            if (total > 0) {\r
              totalSame += same\r
              totalNeighbors += total\r
            }\r
          }\r
        }\r
      }\r
      \r
      return totalNeighbors > 0 ? totalSame / totalNeighbors : 0\r
    }\r
\r
    // Step function\r
    function step() {\r
      let moved = 0\r
      const unhappy = []\r
      \r
      // Find unhappy agents\r
      for (let y = 0; y < height; y++) {\r
        for (let x = 0; x < width; x++) {\r
          const state = grid[y][x]\r
          if (state === 0) continue\r
          \r
          let same = 0\r
          let total = 0\r
          \r
          for (let dy = -1; dy <= 1; dy++) {\r
            for (let dx = -1; dx <= 1; dx++) {\r
              if (dx === 0 && dy === 0) continue\r
              const nx = x + dx\r
              const ny = y + dy\r
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {\r
                total++\r
                if (grid[ny][nx] === state) same++\r
              }\r
            }\r
          }\r
          \r
          if (total > 0 && same / total < threshold) {\r
            unhappy.push({ x, y, type: state })\r
          }\r
        }\r
      }\r
      \r
      // Move unhappy agents to random empty spots\r
      const empties = []\r
      for (let y = 0; y < height; y++) {\r
        for (let x = 0; x < width; x++) {\r
          if (grid[y][x] === 0) empties.push({ x, y })\r
        }\r
      }\r
      \r
      // Shuffle empties\r
      for (let i = empties.length - 1; i > 0; i--) {\r
        const j = Math.floor(Math.random() * (i + 1))\r
        ;[empties[i], empties[j]] = [empties[j], empties[i]]\r
      }\r
      \r
      // Move agents\r
      for (let i = 0; i < Math.min(unhappy.length, empties.length); i++) {\r
        const agent = unhappy[i]\r
        const empty = empties[i]\r
        grid[empty.y][empty.x] = agent.type\r
        grid[agent.y][agent.x] = 0\r
        moved++\r
      }\r
      \r
      // Update segregation index\r
      const seg = calculateSegregation()\r
      setSegregationIndex(seg)\r
      setStep(step + 1)\r
      \r
      // Update cells\r
      cells.data(d3.range(height * width))\r
        .attr('fill', (d, i) => cellColor(grid[Math.floor(i / width)][i % width]))\r
      \r
      return moved > 0\r
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
        <h3 style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>Schelling Segregation Model</h3>\r
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '11px', color: 'var(--text-secondary)' }}>\r
          <span>Step: {step}</span>\r
          <span>Segregation: {(segregationIndex * 100).toFixed(1)}%</span>\r
          <button onClick={() => setRunning(!running)} style={{ padding: '2px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', cursor: 'pointer' }}>\r
            {running ? 'Pause' : 'Run'}\r
          </button>\r
          <button onClick={() => setStep(0)} style={{ padding: '2px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', cursor: 'pointer' }}>\r
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