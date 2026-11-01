var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'animation-scrubber',\r
  title: 'Animation Scrubber',\r
  desc: 'Animation Scrubber — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'AnimationScrubber',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","animation-scrubber"],\r
}\r
\r
export default function AnimationScrubber() {\r
  const svgRef = useRef(null)\r
  const [playing, setPlaying] = useState(false)\r
  const [currentFrame, setCurrentFrame] = useState(0)\r
  const [loop, setLoop] = useState(true)\r
  const [duration] = useState(100)\r
  const [playbackRate, setPlaybackRate] = useState(1)\r
  const rafRef = useRef(null)\r
  const lastTimeRef = useRef(0)\r
\r
  // Static setup — runs once, does NOT depend on playing\r
  useEffect(() => {\r
    const svg = d3.select(svgRef.current)\r
    svg.selectAll('*').remove()\r
    svg.attr('width', W).attr('height', H).attr('viewBox', \`0 0 \${W} \${H}\`)\r
\r
    // Background preview — animated bars that reflect currentFrame\r
    const previewG = svg.append('g').attr('class', 'preview-bars')\r
    const barCount = 12\r
    const bw = W / barCount * 0.65\r
    const gap = W / barCount * 0.35\r
    for (let i = 0; i < barCount; i++) {\r
      previewG.append('rect')\r
        .attr('class', \`pbar-\${i}\`)\r
        .attr('x', i * (bw + gap) + gap / 2)\r
        .attr('width', bw)\r
        .attr('rx', 3)\r
        .attr('fill', colors[i % colors.length])\r
    }\r
\r
    // Timeline track\r
    const timelineY = H - 38\r
    const timelineWidth = W - 40\r
    const trackX = 20\r
\r
    svg.append('rect')\r
      .attr('x', trackX).attr('y', timelineY).attr('width', timelineWidth).attr('height', 6)\r
      .attr('fill', '#e2e8f0').attr('rx', 3)\r
\r
    svg.append('rect')\r
      .attr('id', 'scrub-progress')\r
      .attr('x', trackX).attr('y', timelineY).attr('width', 0).attr('height', 6)\r
      .attr('fill', colors[0]).attr('rx', 3)\r
\r
    svg.append('circle')\r
      .attr('id', 'scrub-playhead')\r
      .attr('cx', trackX).attr('cy', timelineY + 3).attr('r', 8)\r
      .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 2)\r
      .style('cursor', 'pointer')\r
\r
    // Make track interactive — click to scrub\r
    svg.append('rect')\r
      .attr('x', trackX).attr('y', timelineY - 8).attr('width', timelineWidth).attr('height', 22)\r
      .attr('fill', 'transparent').style('cursor', 'pointer')\r
      .on('click', (event) => {\r
        const [mx] = d3.pointer(event)\r
        const progress = Math.max(0, Math.min(1, (mx - trackX) / timelineWidth))\r
        setCurrentFrame(Math.round(progress * (duration - 1)))\r
      })\r
\r
    svg.append('text')\r
      .attr('id', 'scrub-frame-label')\r
      .attr('x', W / 2).attr('y', timelineY - 14)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text, #0f172a)')\r
      .attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Frame 0 / 99')\r
\r
    // Keyframe markers\r
    const kg = svg.append('g')\r
    for (let i = 0; i < 10; i++) {\r
      const kx = trackX + (i / 9) * timelineWidth\r
      kg.append('circle').attr('cx', kx).attr('cy', timelineY + 3).attr('r', 2.5)\r
        .attr('fill', '#cbd5e1').attr('opacity', 0.9)\r
    }\r
\r
    // Drag for playhead\r
    const drag = d3.drag().on('drag', (event) => {\r
      const x = Math.max(trackX, Math.min(trackX + timelineWidth, event.x))\r
      const p = (x - trackX) / timelineWidth\r
      setCurrentFrame(Math.round(p * (duration - 1)))\r
    })\r
    svg.select('#scrub-playhead').call(drag)\r
\r
    return () => { svg.selectAll('*').remove() }\r
  }, [duration])\r
\r
  // Sync progress visuals + preview bars on frame change (no SVG rebuild)\r
  useEffect(() => {\r
    const trackX = 20\r
    const timelineWidth = W - 40\r
    const progress = currentFrame / Math.max(1, duration - 1)\r
    const x = trackX + progress * timelineWidth\r
    const svg = d3.select(svgRef.current)\r
    svg.select('#scrub-progress').attr('width', progress * timelineWidth)\r
    svg.select('#scrub-playhead').attr('cx', x)\r
    svg.select('#scrub-frame-label').text(\`Frame \${currentFrame} / \${duration - 1}\`)\r
\r
    // Update preview bars to visualize playback (so Play does animate something)\r
    const barCount = 12\r
    const previewH = 160\r
    const baseY = 30\r
    for (let i = 0; i < barCount; i++) {\r
      const phase = (currentFrame / duration) * Math.PI * 2 + i * 0.7\r
      const h = 18 + Math.abs(Math.sin(phase)) * (previewH - 40) * (0.5 + 0.5 * Math.sin(i * 0.4))\r
      svg.select(\`.pbar-\${i}\`)\r
        .attr('y', baseY + previewH - h)\r
        .attr('height', h)\r
        .attr('opacity', 0.85)\r
    }\r
  }, [currentFrame, duration])\r
\r
  // Animation loop — independent of SVG setup, so Play actually advances frames\r
  useEffect(() => {\r
    if (!playing) {\r
      if (rafRef.current) cancelAnimationFrame(rafRef.current)\r
      return\r
    }\r
    lastTimeRef.current = performance.now()\r
    const tick = (now) => {\r
      const delta = now - lastTimeRef.current\r
      const frameDuration = (1000 / 30) / playbackRate\r
      if (delta >= frameDuration) {\r
        setCurrentFrame(prev => {\r
          const nxt = prev + 1\r
          if (nxt >= duration) {\r
            if (loop) return 0\r
            setPlaying(false)\r
            return duration - 1\r
          }\r
          return nxt\r
        })\r
        lastTimeRef.current = now\r
      }\r
      rafRef.current = requestAnimationFrame(tick)\r
    }\r
    rafRef.current = requestAnimationFrame(tick)\r
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }\r
  }, [playing, playbackRate, loop, duration])\r
\r
  return (\r
    <div style={{ width: W, height: H, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, paddingTop: 6 }}>\r
      <svg ref={svgRef} width={W} height={H - 56} viewBox={\`0 0 \${W} \${H - 56}\`} style={{ display: 'block' }} />\r
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>\r
        <button\r
          onClick={() => setPlaying(p => !p)}\r
          style={{ background: playing ? colors[3] : colors[0], color: '#fff', border: 'none', borderRadius: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', minWidth: 76 }}\r
        >\r
          {playing ? '⏸ Pause' : '▶ Play'}\r
        </button>\r
        <button\r
          onClick={() => { setPlaying(false); setCurrentFrame(0) }}\r
          style={{ background: colors[1], color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}\r
        >\r
          ⏹ Stop\r
        </button>\r
        {[0.5, 1, 2, 4].map(rate => (\r
          <button\r
            key={rate}\r
            onClick={() => setPlaybackRate(rate)}\r
            style={{\r
              background: playbackRate === rate ? colors[0] : '#e2e8f0',\r
              color: playbackRate === rate ? '#fff' : '#0f172a',\r
              border: 'none', borderRadius: 6, padding: '6px 10px', fontSize: 11, fontWeight: playbackRate === rate ? 600 : 400, cursor: 'pointer', minWidth: 36\r
            }}\r
          >\r
            {rate}x\r
          </button>\r
        ))}\r
        <button\r
          onClick={() => setLoop(l => !l)}\r
          style={{\r
            background: loop ? colors[0] : '#e2e8f0',\r
            color: loop ? '#fff' : '#0f172a',\r
            border: 'none', borderRadius: 6, padding: '6px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer'\r
          }}\r
        >\r
          Loop {loop ? 'on' : 'off'}\r
        </button>\r
      </div>\r
    </div>\r
  )\r
}\r
`;export{e as default};