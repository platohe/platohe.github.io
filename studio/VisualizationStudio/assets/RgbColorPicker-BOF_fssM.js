var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'rgb-color-picker',\r
  title: 'Rgb Color Picker',\r
  desc: 'Rgb Color Picker — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RgbColorPicker',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","rgb-color-picker"],\r
}\r
\r
export default function RgbColorPicker({ data: customData }) {\r
  const ref = useRef(null)\r
  const [color, setColor] = useState({ r: 100, g: 150, b: 200 })\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const width = 380, height = 265\r
    const margin = { top: 20, right: 20, bottom: 60, left: 60 }\r
    const innerWidth = width - margin.left - margin.right\r
    const innerHeight = height - margin.top - margin.bottom\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Color preview\r
    const colorPreview = g.append('rect')\r
      .attr('x', innerWidth / 2 - 40)\r
      .attr('y', 10)\r
      .attr('width', 80)\r
      .attr('height', 80)\r
      .attr('fill', \`rgb(\${color.r},\${color.g},\${color.b})\`)\r
      .attr('rx', 8)\r
      .attr('stroke', '#ccc')\r
      .attr('stroke-width', 2)\r
\r
    // Color text\r
    const colorText = g.append('text')\r
      .attr('x', innerWidth / 2)\r
      .attr('y', 110)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text(\`rgb(\${color.r}, \${color.g}, \${color.b})\`)\r
\r
    // Sliders\r
    const sliders = [\r
      { channel: 'r', label: 'Red', color: '#ef4444', y: 130 },\r
      { channel: 'g', label: 'Green', color: '#10b981', y: 170 },\r
      { channel: 'b', label: 'Blue', color: '#3b82f6', y: 210 }\r
    ]\r
\r
    sliders.forEach(({ channel, label, color: sliderColor, y }) => {\r
      // Label\r
      g.append('text')\r
        .attr('x', -10)\r
        .attr('y', y + 4)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .text(label)\r
\r
      // Track\r
      g.append('rect')\r
        .attr('x', 0)\r
        .attr('y', y)\r
        .attr('width', innerWidth)\r
        .attr('height', 8)\r
        .attr('fill', '#e5e7eb')\r
        .attr('rx', 4)\r
\r
      // Gradient track\r
      const gradient = g.append('defs')\r
        .append('linearGradient')\r
        .attr('id', \`\${channel}Gradient\`)\r
        .attr('x1', '0%').attr('x2', '100%')\r
\r
      if (channel === 'r') {\r
        gradient.append('stop').attr('offset', '0%').attr('stop-color', \`rgb(0,\${color.g},\${color.b})\`)\r
        gradient.append('stop').attr('offset', '100%').attr('stop-color', \`rgb(255,\${color.g},\${color.b})\`)\r
      } else if (channel === 'g') {\r
        gradient.append('stop').attr('offset', '0%').attr('stop-color', \`rgb(\${color.r},0,\${color.b})\`)\r
        gradient.append('stop').attr('offset', '100%').attr('stop-color', \`rgb(\${color.r},255,\${color.b})\`)\r
      } else {\r
        gradient.append('stop').attr('offset', '0%').attr('stop-color', \`rgb(\${color.r},\${color.g},0)\`)\r
        gradient.append('stop').attr('offset', '100%').attr('stop-color', \`rgb(\${color.r},\${color.g},255)\`)\r
      }\r
\r
      g.append('rect')\r
        .attr('x', 0)\r
        .attr('y', y)\r
        .attr('width', innerWidth)\r
        .attr('height', 8)\r
        .attr('fill', \`url(#\${channel}Gradient)\`)\r
        .attr('rx', 4)\r
\r
      // Slider handle\r
      const handleX = (color[channel] / 255) * innerWidth\r
      const handle = g.append('circle')\r
        .attr('cx', handleX)\r
        .attr('cy', y + 4)\r
        .attr('r', 10)\r
        .attr('fill', sliderColor)\r
        .attr('stroke', 'white')\r
        .attr('stroke-width', 2)\r
        .attr('cursor', 'pointer')\r
        .call(d3.drag()\r
          .on('drag', (event) => {\r
            const newX = Math.max(0, Math.min(innerWidth, event.x))\r
            const newValue = Math.round((newX / innerWidth) * 255)\r
            setColor(prev => ({ ...prev, [channel]: newValue }))\r
          })\r
        )\r
\r
      // Value text\r
      g.append('text')\r
        .attr('x', innerWidth + 10)\r
        .attr('y', y + 4)\r
        .attr('text-anchor', 'start')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '11px')\r
        .text(color[channel])\r
    })\r
\r
    // Update preview and text when color changes\r
    setColor(color) // This will trigger re-render\r
\r
  }, [color])\r
\r
  // Update D3 visualization when color state changes\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    const preview = svg.select('rect')\r
    const text = svg.selectAll('text').filter((d, i, nodes) => \r
      d3.select(nodes[i]).text().includes('rgb')\r
    )\r
\r
    preview.attr('fill', \`rgb(\${color.r},\${color.g},\${color.b})\`)\r
    text.text(\`rgb(\${color.r}, \${color.g}, \${color.b})\`)\r
\r
    // Update slider positions and gradients\r
    const sliders = ['r', 'g', 'b']\r
    const innerWidth = 300\r
\r
    sliders.forEach((channel, i) => {\r
      const handleX = (color[channel] / 255) * innerWidth\r
      svg.selectAll('circle')\r
        .filter((d, j, nodes) => j === i)\r
        .attr('cx', handleX)\r
\r
      // Update gradient\r
      const gradient = svg.select(\`#\${channel}Gradient\`)\r
      if (channel === 'r') {\r
        gradient.selectAll('stop').attr('stop-color', (d, j) => \r
          j === 0 ? \`rgb(0,\${color.g},\${color.b})\` : \`rgb(255,\${color.g},\${color.b})\`\r
        )\r
      } else if (channel === 'g') {\r
        gradient.selectAll('stop').attr('stop-color', (d, j) => \r
          j === 0 ? \`rgb(\${color.r},0,\${color.b})\` : \`rgb(\${color.r},255,\${color.b})\`\r
        )\r
      } else {\r
        gradient.selectAll('stop').attr('stop-color', (d, j) => \r
          j === 0 ? \`rgb(\${color.r},\${color.g},0)\` : \`rgb(\${color.r},\${color.g},255)\`\r
        )\r
      }\r
\r
      // Update value text\r
      svg.selectAll('text')\r
        .filter((d, j, nodes) => {\r
          const text = d3.select(nodes[j]).text()\r
          return !isNaN(text) && text.length <= 3\r
        })\r
        .filter((d, j, nodes) => j === i + 1) // Skip the main color text\r
        .text(color[channel])\r
    })\r
  }, [color])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};