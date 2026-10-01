var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'spectral-density',\r
  title: 'Spectral Density',\r
  desc: 'Spectral Density — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpectralDensity',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spectral-density"],\r
}\r
\r
export default function SpectralDensity({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"signal":[0.02,0.43,0.874,1.069,1.059,1.101,0.962,0.949,0.964,0.917,0.945,1.138,1.118,0.942,0.735,0.551,0.346,0.16,-0.011,0.165,0.423,0.49,0.785,0.756,0.751,0.535,0.306,0.156,-0.121,-0.374,-0.43,-0.35,-0.497,-0.576,-0.9,-1.163,-1.541,-1.769,-1.769,-1.699,-1.552,-1.149,-0.881,-0.55,-0.247,-0.116,-0.164,-0.234,-0.203,-0.122,-0.018,0.288,0.467,0.575,0.622,0.349,0.349,0.077,0.082,-0.052,0.11,0.37,0.765,1.089,1.322,1.463,1.264,1.283,1.199,0.972,1.015,0.908,0.972,0.967,0.655,0.537,0.061,-0.295,-0.777,-1.022,-1.192,-1.113,-1.032,-0.776,-0.718,-0.619,-0.559,-0.667,-0.695,-0.758,-0.813,-0.675,-0.565,-0.46,-0.269,-0.385,-0.438,-0.628,-1.001,-1.058,-0.986,-0.97,-0.518,-0.324,0.133,0.418,0.516,0.661,0.671,0.836,0.886,1.036,1.335,1.585,1.592,1.673,1.43,1.086,0.873,0.425,0.086,0.089,0.054,0.175,0.281,0.204,0.268,0.148,-0.063,-0.241,-0.207,-0.221,-0.241,-0.145,-0.06,-0.136,-0.24,-0.352,-0.786,-1.062,-1.518,-1.68,-1.615,-1.549,-1.33,-1.108,-0.936,-0.768,-0.759,-0.711,-0.492,-0.412,-0.092,0.282,0.622,0.914,0.998,1.018,0.88,0.673,0.529,0.292,0.243,0.419,0.487,0.609,0.762,0.745,0.809,0.648,0.624,0.585,0.72,0.905,1.059,1.12,1.091,1.111,0.769,0.447,0.031,-0.448,-0.802,-0.879,-0.906,-1.031,-0.996,-1.007,-1.015,-1.241,-1.277,-1.314,-1.251,-1.182,-0.879,-0.533,-0.187,0.015,0.059,0.008],"sampleRate":256}\r
\r
  // Compute FFT using Cooley-Tukey algorithm\r
  function fft(signal) {\r
    const n = signal.length\r
    if (n <= 1) return signal.map(v => ({ re: v, im: 0 }))\r
\r
    // Check if power of 2\r
    if ((n & (n - 1)) !== 0) {\r
      // Pad to next power of 2\r
      const nextPow2 = Math.pow(2, Math.ceil(Math.log2(n)))\r
      const padded = [...signal, ...new Array(nextPow2 - n).fill(0)]\r
      return fft(padded)\r
    }\r
\r
    // Bit-reversal permutation\r
    const result = new Array(n)\r
    for (let i = 0; i < n; i++) {\r
      let rev = 0\r
      for (let j = 0, bit = n >> 1; bit > 0; bit >>= 1) {\r
        rev = (rev << 1) | ((i & bit) ? 1 : 0)\r
      }\r
      result[i] = { re: signal[rev], im: 0 }\r
    }\r
\r
    // Cooley-Tukey\r
    for (let len = 2; len <= n; len <<= 1) {\r
      const angle = -2 * Math.PI / len\r
      const wlen = { re: Math.cos(angle), im: Math.sin(angle) }\r
      for (let i = 0; i < n; i += len) {\r
        let w = { re: 1, im: 0 }\r
        for (let j = 0; j < len / 2; j++) {\r
          const u = result[i + j]\r
          const v = result[i + j + len / 2]\r
          const temp = {\r
            re: w.re * v.re - w.im * v.im,\r
            im: w.re * v.im + w.im * v.re\r
          }\r
          result[i + j] = { re: u.re + temp.re, im: u.im + temp.im }\r
          result[i + j + len / 2] = { re: u.re - temp.re, im: u.im - temp.im }\r
          // Multiply w by wlen\r
          w = {\r
            re: w.re * wlen.re - w.im * wlen.im,\r
            im: w.re * wlen.im + w.im * wlen.re\r
          }\r
        }\r
      }\r
    }\r
\r
    return result\r
  }\r
\r
  // Compute power spectral density\r
  function computePSD(signal, sampleRate) {\r
    const fftResult = fft(signal)\r
    const n = fftResult.length\r
    const psd = new Array(Math.floor(n / 2))\r
\r
    for (let i = 0; i < psd.length; i++) {\r
      const re = fftResult[i].re\r
      const im = fftResult[i].im\r
      const power = (re * re + im * im) / signal.length\r
      const freq = i * sampleRate / n\r
      psd[i] = { frequency: freq, power: power * 2 } // *2 for single-sided\r
    }\r
\r
    return psd\r
  }\r
\r
  // Welch's method (overlapping segments with windowing)\r
  function welchPSD(signal, sampleRate, segmentLength = 64, overlap = 0.5) {\r
    const step = Math.floor(segmentLength * (1 - overlap))\r
    const nSegments = Math.floor((signal.length - segmentLength) / step) + 1\r
    const psdAccum = new Array(Math.floor(segmentLength / 2)).fill(0)\r
\r
    for (let seg = 0; seg < nSegments; seg++) {\r
      const start = seg * step\r
      const segment = signal.slice(start, start + segmentLength)\r
      if (segment.length < segmentLength) break\r
\r
      // Apply Hann window\r
      const windowed = segment.map((v, i) => \r
        v * 0.5 * (1 - Math.cos(2 * Math.PI * i / (segmentLength - 1)))\r
      )\r
\r
      const psd = computePSD(windowed, sampleRate)\r
      for (let i = 0; i < psd.length; i++) {\r
        psdAccum[i] += psd[i].power\r
      }\r
    }\r
\r
    return psdAccum.map((power, i) => ({\r
      frequency: i * sampleRate / segmentLength,\r
      power: power / nSegments\r
    }))\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { signal, sampleRate } = data\r
\r
    if (!signal || signal.length === 0) return\r
\r
    // Compute PSD using Welch's method\r
    const psd = welchPSD(signal, sampleRate || 256, 64, 0.5)\r
\r
    // Convert to dB scale\r
    const psdDb = psd.map(p => ({\r
      frequency: p.frequency,\r
      power: 10 * Math.log10(Math.max(p.power, 1e-10))\r
    }))\r
\r
    const maxFreq = d3.max(psdDb, d => d.frequency)\r
    const minFreq = d3.min(psdDb, d => d.frequency)\r
    const maxPower = d3.max(psdDb, d => d.power)\r
    const minPower = d3.min(psdDb, d => d.power)\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, maxFreq])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([minPower - 5, maxPower + 5])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // PSD line\r
    const line = d3.line()\r
      .x(d => x(d.frequency))\r
      .y(d => y(d.power))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    // Area under curve\r
    const area = d3.area()\r
      .x(d => x(d.frequency))\r
      .y0(IH)\r
      .y1(d => y(d.power))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(psdDb)\r
      .attr('d', area)\r
      .attr('fill', colors[0])\r
      .attr('opacity', 0.15)\r
\r
    g.append('path')\r
      .datum(psdDb)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2)\r
\r
    // Peak annotations\r
    const peaks = []\r
    for (let i = 1; i < psdDb.length - 1; i++) {\r
      if (psdDb[i].power > psdDb[i - 1].power && psdDb[i].power > psdDb[i + 1].power) {\r
        if (psdDb[i].power > d3.mean(psdDb.map(p => p.power)) + d3.deviation(psdDb.map(p => p.power))) {\r
          peaks.push(psdDb[i])\r
        }\r
      }\r
    }\r
\r
    peaks.slice(0, 5).forEach(peak => {\r
      g.append('circle')\r
        .attr('cx', x(peak.frequency))\r
        .attr('cy', y(peak.power))\r
        .attr('r', 5)\r
        .attr('fill', colors[2])\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1.5)\r
\r
      g.append('text')\r
        .attr('x', x(peak.frequency) + 8)\r
        .attr('y', y(peak.power) - 8)\r
        .attr('font-size', '9px')\r
        .attr('fill', colors[2])\r
        .attr('font-weight', 600)\r
        .text(\`\${peak.frequency.toFixed(1)} Hz\`)\r
    })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 38)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('Frequency (Hz)')\r
\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('Power (dB)')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Power Spectral Density (Welch Method)')\r
\r
    // Info\r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', IH + 20)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '9px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Sample Rate: \${sampleRate} Hz | Welch Method (64-sample segments, 50% overlap)\`)\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};