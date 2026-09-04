var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'word-cloud',\r
  title: 'Word Cloud',\r
  desc: 'Word Cloud — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WordCloud',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","word-cloud"],\r
}\r
\r
export default function WordCloud({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Visualization","size":42},{"text":"D3","size":56},{"text":"JavaScript","size":36},{"text":"React","size":38},{"text":"Chart","size":32},{"text":"Graph","size":28},{"text":"Analytics","size":34},{"text":"Dashboard","size":30},{"text":"Interactive","size":26},{"text":"Plot","size":24},{"text":"Chart.js","size":22},{"text":"SVG","size":28},{"text":"Canvas","size":24},{"text":"Web","size":20},{"text":"Code","size":22},{"text":"Design","size":26},{"text":"UI","size":18}]\r
    const words = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 265\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899']\r
\r
    // Simple spiral placement\r
    const placed = []\r
    const cx = width / 2, cy = height / 2\r
\r
    words.forEach((w) => {\r
      const fontSize = w.size\r
      let x = cx, y = cy\r
      let angle = 0\r
      let spiralR = 0\r
      let found = false\r
\r
      while (!found && spiralR < 180) {\r
        x = cx + spiralR * Math.cos(angle)\r
        y = cy + spiralR * Math.sin(angle)\r
\r
        const overlapping = placed.some((p) => {\r
          const dx = x - p.x, dy = y - p.y\r
          return Math.sqrt(dx * dx + dy * dy) < (fontSize + p.size) / 2 + 4\r
        })\r
\r
        if (!overlapping) {\r
          found = true\r
        } else {\r
          angle += 0.3\r
          spiralR = 10 + angle * 5\r
        }\r
      }\r
\r
      if (found) {\r
        placed.push({ text: w.text, x, y, size: fontSize })\r
        svg.append('text')\r
          .attr('x', x).attr('y', y)\r
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
          .attr('fill', color[Math.floor(Math.random() * color.length)])\r
          .attr('font-size', \`\${fontSize}px\`)\r
          .attr('font-weight', 700)\r
          .text(w.text)\r
      }\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};