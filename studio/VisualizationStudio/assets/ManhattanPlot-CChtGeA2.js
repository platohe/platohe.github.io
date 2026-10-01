var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'manhattan-plot',\r
  title: 'Manhattan Plot',\r
  desc: 'Manhattan Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ManhattanPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","manhattan-plot"],\r
}\r
\r
export default function ManhattanPlot({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"chr":1,"pos":601103.752,"pvalue":0,"gene":"GENE_0"},{"chr":2,"pos":1852465.793,"pvalue":0,"gene":"GENE_1"},{"chr":3,"pos":2174813.899,"pvalue":0,"gene":"GENE_2"},{"chr":4,"pos":3273227.994,"pvalue":0,"gene":"GENE_3"},{"chr":5,"pos":4865474.648,"pvalue":0,"gene":"GENE_4"},{"chr":6,"pos":5249923.734,"pvalue":0,"gene":"GENE_5"},{"chr":7,"pos":6745737.565,"pvalue":0,"gene":"GENE_6"},{"chr":8,"pos":7197253.838,"pvalue":0,"gene":"GENE_7"},{"chr":9,"pos":8686612.018,"pvalue":0,"gene":"GENE_8"},{"chr":10,"pos":9003842.952,"pvalue":0,"gene":"GENE_9"},{"chr":11,"pos":10837337.426,"pvalue":0.039,"gene":"GENE_10"},{"chr":12,"pos":11592323.991,"pvalue":0.056,"gene":"GENE_11"},{"chr":13,"pos":12266955.987,"pvalue":0.032,"gene":"GENE_12"},{"chr":14,"pos":13185689.007,"pvalue":0,"gene":"GENE_13"},{"chr":15,"pos":14530335.606,"pvalue":0.061,"gene":"GENE_14"},{"chr":16,"pos":15173005.234,"pvalue":0,"gene":"GENE_15"},{"chr":17,"pos":16487739.917,"pvalue":0,"gene":"GENE_16"},{"chr":18,"pos":17319461.746,"pvalue":0,"gene":"GENE_17"},{"chr":19,"pos":18037439.214,"pvalue":0.039,"gene":"GENE_18"},{"chr":20,"pos":19556599.779,"pvalue":0,"gene":"GENE_19"},{"chr":21,"pos":20245174.674,"pvalue":0,"gene":"GENE_20"},{"chr":22,"pos":21209510.489,"pvalue":0,"gene":"GENE_21"},{"chr":1,"pos":22738621.373,"pvalue":0,"gene":"GENE_22"},{"chr":2,"pos":23507996.289,"pvalue":0.002,"gene":"GENE_23"},{"chr":3,"pos":24284206.983,"pvalue":0,"gene":"GENE_24"},{"chr":4,"pos":25074694.63,"pvalue":0,"gene":"GENE_25"},{"chr":5,"pos":26680768.932,"pvalue":0,"gene":"GENE_26"},{"chr":6,"pos":27927839.9,"pvalue":0.02,"gene":"GENE_27"},{"chr":7,"pos":28943735.247,"pvalue":0,"gene":"GENE_28"},{"chr":8,"pos":29942294.551,"pvalue":0.008,"gene":"GENE_29"},{"chr":9,"pos":30110943.166,"pvalue":0.075,"gene":"GENE_30"},{"chr":10,"pos":31360445.686,"pvalue":0,"gene":"GENE_31"},{"chr":11,"pos":32611922.019,"pvalue":0,"gene":"GENE_32"},{"chr":12,"pos":33077582.406,"pvalue":0,"gene":"GENE_33"},{"chr":13,"pos":34934867.732,"pvalue":0.001,"gene":"GENE_34"},{"chr":14,"pos":35706585.395,"pvalue":0.004,"gene":"GENE_35"},{"chr":15,"pos":36520316.354,"pvalue":0,"gene":"GENE_36"},{"chr":16,"pos":37120592.573,"pvalue":0,"gene":"GENE_37"},{"chr":17,"pos":38562800.215,"pvalue":0,"gene":"GENE_38"},{"chr":18,"pos":39433990.37,"pvalue":0,"gene":"GENE_39"},{"chr":19,"pos":40336962.082,"pvalue":0,"gene":"GENE_40"},{"chr":20,"pos":41322957.795,"pvalue":0,"gene":"GENE_41"},{"chr":21,"pos":42295208.678,"pvalue":0,"gene":"GENE_42"},{"chr":22,"pos":43843125.768,"pvalue":0,"gene":"GENE_43"},{"chr":1,"pos":44994011.488,"pvalue":0,"gene":"GENE_44"},{"chr":2,"pos":45431891.47,"pvalue":0,"gene":"GENE_45"},{"chr":3,"pos":46295929.515,"pvalue":0.016,"gene":"GENE_46"},{"chr":4,"pos":47696721.512,"pvalue":0,"gene":"GENE_47"},{"chr":5,"pos":48785942.581,"pvalue":0,"gene":"GENE_48"},{"chr":6,"pos":49093641.347,"pvalue":0,"gene":"GENE_49"},{"chr":7,"pos":50821950.807,"pvalue":0.009,"gene":"GENE_50"},{"chr":8,"pos":51972746.416,"pvalue":0.004,"gene":"GENE_51"},{"chr":9,"pos":52709429.653,"pvalue":0,"gene":"GENE_52"},{"chr":10,"pos":53223182.13,"pvalue":0,"gene":"GENE_53"},{"chr":11,"pos":54163437.466,"pvalue":0,"gene":"GENE_54"},{"chr":12,"pos":55335931.155,"pvalue":0.002,"gene":"GENE_55"},{"chr":13,"pos":56628903.389,"pvalue":0,"gene":"GENE_56"},{"chr":14,"pos":57326377.964,"pvalue":0,"gene":"GENE_57"},{"chr":15,"pos":58392945.787,"pvalue":0.009,"gene":"GENE_58"},{"chr":16,"pos":59863702.189,"pvalue":0,"gene":"GENE_59"},{"chr":17,"pos":60009526.387,"pvalue":0,"gene":"GENE_60"},{"chr":18,"pos":61635263.819,"pvalue":0,"gene":"GENE_61"},{"chr":19,"pos":62908164.479,"pvalue":0.002,"gene":"GENE_62"},{"chr":20,"pos":63603932.549,"pvalue":0,"gene":"GENE_63"},{"chr":21,"pos":64184023.445,"pvalue":0.042,"gene":"GENE_64"},{"chr":22,"pos":65705551.789,"pvalue":0,"gene":"GENE_65"},{"chr":1,"pos":66291492.116,"pvalue":0.001,"gene":"GENE_66"},{"chr":2,"pos":67336599.876,"pvalue":0.058,"gene":"GENE_67"},{"chr":3,"pos":68220895.424,"pvalue":0,"gene":"GENE_68"},{"chr":4,"pos":69572351.665,"pvalue":0,"gene":"GENE_69"},{"chr":5,"pos":70163866.162,"pvalue":0.004,"gene":"GENE_70"},{"chr":6,"pos":71560964.15,"pvalue":0,"gene":"GENE_71"},{"chr":7,"pos":72394656.332,"pvalue":0,"gene":"GENE_72"},{"chr":8,"pos":73418355.551,"pvalue":0,"gene":"GENE_73"},{"chr":9,"pos":74398513.585,"pvalue":0,"gene":"GENE_74"},{"chr":10,"pos":75895641.4,"pvalue":0,"gene":"GENE_75"},{"chr":11,"pos":76495262.548,"pvalue":0,"gene":"GENE_76"},{"chr":12,"pos":77546362.075,"pvalue":0,"gene":"GENE_77"},{"chr":13,"pos":78235407.009,"pvalue":0,"gene":"GENE_78"},{"chr":14,"pos":79298780.231,"pvalue":0,"gene":"GENE_79"},{"chr":15,"pos":80669295.691,"pvalue":0.002,"gene":"GENE_80"},{"chr":16,"pos":81169304.594,"pvalue":0,"gene":"GENE_81"},{"chr":17,"pos":82314224.436,"pvalue":0.01,"gene":"GENE_82"},{"chr":18,"pos":83313794.809,"pvalue":0.046,"gene":"GENE_83"},{"chr":19,"pos":84577535.841,"pvalue":0.002,"gene":"GENE_84"},{"chr":20,"pos":85481534.098,"pvalue":0,"gene":"GENE_85"},{"chr":21,"pos":86712049.846,"pvalue":0,"gene":"GENE_86"},{"chr":22,"pos":87811699.538,"pvalue":0,"gene":"GENE_87"},{"chr":1,"pos":88154142.475,"pvalue":0,"gene":"GENE_88"},{"chr":2,"pos":89525675.22,"pvalue":0,"gene":"GENE_89"},{"chr":3,"pos":90894506.015,"pvalue":0,"gene":"GENE_90"},{"chr":4,"pos":91146595.941,"pvalue":0,"gene":"GENE_91"},{"chr":5,"pos":92807592.53,"pvalue":0.002,"gene":"GENE_92"},{"chr":6,"pos":93389643.611,"pvalue":0,"gene":"GENE_93"},{"chr":7,"pos":94984491.041,"pvalue":0,"gene":"GENE_94"},{"chr":8,"pos":95859482.177,"pvalue":0,"gene":"GENE_95"},{"chr":9,"pos":96743620.659,"pvalue":0.037,"gene":"GENE_96"},{"chr":10,"pos":97069340.309,"pvalue":0.004,"gene":"GENE_97"},{"chr":11,"pos":98506542.603,"pvalue":0,"gene":"GENE_98"},{"chr":12,"pos":99760799.35,"pvalue":0,"gene":"GENE_99"},{"chr":13,"pos":100815977.361,"pvalue":0,"gene":"GENE_100"},{"chr":14,"pos":101836976.056,"pvalue":0,"gene":"GENE_101"},{"chr":15,"pos":102599389.212,"pvalue":0,"gene":"GENE_102"},{"chr":16,"pos":103446906.724,"pvalue":0,"gene":"GENE_103"},{"chr":17,"pos":104680988.862,"pvalue":0,"gene":"GENE_104"},{"chr":18,"pos":105937531.749,"pvalue":0,"gene":"GENE_105"},{"chr":19,"pos":106329331.351,"pvalue":0,"gene":"GENE_106"},{"chr":20,"pos":107151594.616,"pvalue":0,"gene":"GENE_107"},{"chr":21,"pos":108019970.093,"pvalue":0.021,"gene":"GENE_108"},{"chr":22,"pos":109647656.606,"pvalue":0,"gene":"GENE_109"},{"chr":1,"pos":110955941.888,"pvalue":0,"gene":"GENE_110"},{"chr":2,"pos":111466247.692,"pvalue":0,"gene":"GENE_111"},{"chr":3,"pos":112145152.502,"pvalue":0.001,"gene":"GENE_112"},{"chr":4,"pos":113139138.628,"pvalue":0.042,"gene":"GENE_113"},{"chr":5,"pos":114290984.591,"pvalue":0,"gene":"GENE_114"},{"chr":6,"pos":115568763.913,"pvalue":0,"gene":"GENE_115"},{"chr":7,"pos":116793571.446,"pvalue":0,"gene":"GENE_116"},{"chr":8,"pos":117195925.108,"pvalue":0,"gene":"GENE_117"},{"chr":9,"pos":118517804.779,"pvalue":0,"gene":"GENE_118"},{"chr":10,"pos":119469027.914,"pvalue":0,"gene":"GENE_119"},{"chr":11,"pos":120425053.564,"pvalue":0,"gene":"GENE_120"},{"chr":12,"pos":121307595.283,"pvalue":0.007,"gene":"GENE_121"},{"chr":13,"pos":122504597.226,"pvalue":0.001,"gene":"GENE_122"},{"chr":14,"pos":123530557.373,"pvalue":0,"gene":"GENE_123"},{"chr":15,"pos":124647374.478,"pvalue":0,"gene":"GENE_124"},{"chr":16,"pos":125134825.354,"pvalue":0.093,"gene":"GENE_125"},{"chr":17,"pos":126148177.334,"pvalue":0,"gene":"GENE_126"},{"chr":18,"pos":127069298.19,"pvalue":0,"gene":"GENE_127"},{"chr":19,"pos":128430398.759,"pvalue":0,"gene":"GENE_128"},{"chr":20,"pos":129098791.27,"pvalue":0,"gene":"GENE_129"},{"chr":21,"pos":130056734.931,"pvalue":0,"gene":"GENE_130"},{"chr":22,"pos":131229709.703,"pvalue":0,"gene":"GENE_131"},{"chr":1,"pos":132564050.244,"pvalue":0.018,"gene":"GENE_132"},{"chr":2,"pos":133966392.707,"pvalue":0,"gene":"GENE_133"},{"chr":3,"pos":134661200.527,"pvalue":0,"gene":"GENE_134"},{"chr":4,"pos":135548808.243,"pvalue":0,"gene":"GENE_135"},{"chr":5,"pos":136527054.26,"pvalue":0.004,"gene":"GENE_136"},{"chr":6,"pos":137078086.144,"pvalue":0.017,"gene":"GENE_137"},{"chr":7,"pos":138059574.188,"pvalue":0.001,"gene":"GENE_138"},{"chr":8,"pos":139672140.489,"pvalue":0,"gene":"GENE_139"},{"chr":9,"pos":140561001.383,"pvalue":0,"gene":"GENE_140"},{"chr":10,"pos":141022132.868,"pvalue":0,"gene":"GENE_141"},{"chr":11,"pos":142337837.182,"pvalue":0.001,"gene":"GENE_142"},{"chr":12,"pos":143833101.445,"pvalue":0,"gene":"GENE_143"},{"chr":13,"pos":144204966.03,"pvalue":0,"gene":"GENE_144"},{"chr":14,"pos":145952097.842,"pvalue":0.001,"gene":"GENE_145"},{"chr":15,"pos":146518360.29,"pvalue":0,"gene":"GENE_146"},{"chr":16,"pos":147935346.664,"pvalue":0,"gene":"GENE_147"},{"chr":17,"pos":148568536.106,"pvalue":0,"gene":"GENE_148"},{"chr":18,"pos":149311975.923,"pvalue":0,"gene":"GENE_149"},{"chr":19,"pos":150750250.578,"pvalue":0,"gene":"GENE_150"},{"chr":20,"pos":151687277.049,"pvalue":0,"gene":"GENE_151"},{"chr":21,"pos":152546014.195,"pvalue":0,"gene":"GENE_152"},{"chr":22,"pos":153984315.065,"pvalue":0,"gene":"GENE_153"},{"chr":1,"pos":154308718.738,"pvalue":0,"gene":"GENE_154"},{"chr":2,"pos":155667919.998,"pvalue":0,"gene":"GENE_155"},{"chr":3,"pos":156386848.33,"pvalue":0,"gene":"GENE_156"},{"chr":4,"pos":157316958.572,"pvalue":0,"gene":"GENE_157"},{"chr":5,"pos":158413245.081,"pvalue":0,"gene":"GENE_158"},{"chr":6,"pos":159532860.614,"pvalue":0,"gene":"GENE_159"},{"chr":7,"pos":160617862.138,"pvalue":0,"gene":"GENE_160"},{"chr":8,"pos":161691519.3,"pvalue":0.006,"gene":"GENE_161"},{"chr":9,"pos":162286740.076,"pvalue":0,"gene":"GENE_162"},{"chr":10,"pos":163486644.889,"pvalue":0.001,"gene":"GENE_163"},{"chr":11,"pos":164630765.611,"pvalue":0,"gene":"GENE_164"},{"chr":12,"pos":165738299.59,"pvalue":0,"gene":"GENE_165"},{"chr":13,"pos":166185889.777,"pvalue":0,"gene":"GENE_166"},{"chr":14,"pos":167902558.737,"pvalue":0,"gene":"GENE_167"},{"chr":15,"pos":168471323.969,"pvalue":0.026,"gene":"GENE_168"},{"chr":16,"pos":169499906.675,"pvalue":0,"gene":"GENE_169"},{"chr":17,"pos":170675253.535,"pvalue":0,"gene":"GENE_170"},{"chr":18,"pos":171442782.657,"pvalue":0,"gene":"GENE_171"},{"chr":19,"pos":172717272.757,"pvalue":0,"gene":"GENE_172"},{"chr":20,"pos":173043317.976,"pvalue":0.005,"gene":"GENE_173"},{"chr":21,"pos":174097561.243,"pvalue":0.011,"gene":"GENE_174"},{"chr":22,"pos":175375356.051,"pvalue":0,"gene":"GENE_175"},{"chr":1,"pos":176837855.682,"pvalue":0,"gene":"GENE_176"},{"chr":2,"pos":177084749.519,"pvalue":0.055,"gene":"GENE_177"},{"chr":3,"pos":178270268.522,"pvalue":0,"gene":"GENE_178"},{"chr":4,"pos":179269672.518,"pvalue":0,"gene":"GENE_179"},{"chr":5,"pos":180626093.669,"pvalue":0,"gene":"GENE_180"},{"chr":6,"pos":181888140.743,"pvalue":0,"gene":"GENE_181"},{"chr":7,"pos":182099783.734,"pvalue":0,"gene":"GENE_182"},{"chr":8,"pos":183239801.351,"pvalue":0,"gene":"GENE_183"},{"chr":9,"pos":184278732.397,"pvalue":0.001,"gene":"GENE_184"},{"chr":10,"pos":185720454.206,"pvalue":0,"gene":"GENE_185"},{"chr":11,"pos":186488104.055,"pvalue":0,"gene":"GENE_186"},{"chr":12,"pos":187109078.385,"pvalue":0,"gene":"GENE_187"},{"chr":13,"pos":188689091.085,"pvalue":0,"gene":"GENE_188"},{"chr":14,"pos":189116590.459,"pvalue":0.034,"gene":"GENE_189"},{"chr":15,"pos":190033156.847,"pvalue":0,"gene":"GENE_190"},{"chr":16,"pos":191240153.786,"pvalue":0.001,"gene":"GENE_191"},{"chr":17,"pos":192990385.763,"pvalue":0,"gene":"GENE_192"},{"chr":18,"pos":193840004.695,"pvalue":0,"gene":"GENE_193"},{"chr":19,"pos":194649142.491,"pvalue":0.055,"gene":"GENE_194"},{"chr":20,"pos":195734710.449,"pvalue":0,"gene":"GENE_195"},{"chr":21,"pos":196375879.717,"pvalue":0.002,"gene":"GENE_196"},{"chr":22,"pos":197785484.339,"pvalue":0,"gene":"GENE_197"},{"chr":1,"pos":198138108.26,"pvalue":0.022,"gene":"GENE_198"},{"chr":2,"pos":199772554.37,"pvalue":0,"gene":"GENE_199"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    // Group by chromosome\r
    const chrGroups = d3.group(data, d => d.chr)\r
    const chrs = Array.from(chrGroups.keys()).sort((a, b) => a - b)\r
\r
    // Calculate x positions for each chromosome\r
    const chrOffsets = {}\r
    let currentOffset = 0\r
    const chrWidth = IW / chrs.length * 0.9\r
    const gap = IW / chrs.length * 0.1\r
\r
    chrs.forEach((chr, i) => {\r
      chrOffsets[chr] = currentOffset\r
      currentOffset += chrWidth + gap\r
    })\r
\r
    const maxNegLogP = d3.max(data, d => -Math.log10(Math.max(d.pvalue, Number.EPSILON)))\r
    const thresholdLine = -Math.log10(5e-8) // Genome-wide significance\r
\r
    const x = d => chrOffsets[d.chr] + (d.pos / d3.max(chrGroups.get(d.chr), p => p.pos)) * chrWidth\r
    const y = d3.scaleLinear().domain([0, maxNegLogP * 1.1]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Significance threshold line\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', y(thresholdLine)).attr('y2', y(thresholdLine))\r
      .attr('stroke', colors[2])\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '6,4')\r
\r
    g.append('text')\r
      .attr('x', IW - 10).attr('y', y(thresholdLine) - 8)\r
      .attr('font-size', '10px').attr('fill', colors[2]).attr('font-weight', 600)\r
      .text('Genome-wide significance (5e-8)')\r
\r
    // Suggestive line\r
    const suggestiveLine = -Math.log10(1e-5)\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', y(suggestiveLine)).attr('y2', y(suggestiveLine))\r
      .attr('stroke', colors[1])\r
      .attr('stroke-width', 1)\r
      .attr('stroke-dasharray', '4,4')\r
\r
    // Chromosome separators\r
    chrs.forEach((chr, i) => {\r
      const offset = chrOffsets[chr]\r
      if (i > 0) {\r
        g.append('line')\r
          .attr('x1', offset - gap/2).attr('x2', offset - gap/2)\r
          .attr('y1', 0).attr('y2', IH)\r
          .attr('stroke', 'var(--border)')\r
          .attr('stroke-dasharray', '4,4')\r
      }\r
    })\r
\r
    // Points\r
    g.selectAll('.snp')\r
      .data(data)\r
      .enter()\r
      .append('circle')\r
      .attr('class', 'snp')\r
      .attr('cx', x)\r
      .attr('cy', d => y(-Math.log10(Math.max(d.pvalue, Number.EPSILON))))\r
      .attr('r', 2.5)\r
      .attr('fill', d => colors[(d.chr - 1) % colors.length])\r
      .attr('opacity', 0.6)\r
      .on('mouseover', function(event, d) {\r
        d3.select(this).attr('r', 5).attr('opacity', 1)\r
        showTooltip(event, d)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this).attr('r', 2.5).attr('opacity', 0.6)\r
        hideTooltip()\r
      })\r
\r
    // Chromosome labels\r
    chrs.forEach(chr => {\r
      const points = chrGroups.get(chr)\r
      const midX = chrOffsets[chr] + chrWidth / 2\r
      g.append('text')\r
        .attr('x', midX)\r
        .attr('y', IH + 20)\r
        .attr('text-anchor', 'middle')\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text-secondary)')\r
        .text(\`chr\${chr}\`)\r
    })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(d3.scaleLinear().domain([0, IW]).range([0, IW])).ticks(0).tickSize(0))\r
      .call(g => g.select('.domain').remove())\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Y-axis label\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('-log10(p-value)')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Manhattan Plot - GWAS Results')\r
\r
    // Tooltip\r
    const tooltip = d3.select('body').append('div')\r
      .style('position', 'absolute')\r
      .style('pointer-events', 'none')\r
      .style('opacity', 0)\r
      .style('background', 'var(--bg-card)')\r
      .style('border', '1px solid var(--border)')\r
      .style('border-radius', '6px')\r
      .style('padding', '8px 12px')\r
      .style('font-size', '11px')\r
      .style('color', 'var(--text)')\r
      .style('box-shadow', '0 4px 12px rgba(0,0,0,0.15)')\r
      .style('z-index', 1000)\r
\r
    function showTooltip(event, d) {\r
      tooltip.html(\`\r
        <strong>\${d.gene}</strong><br/>\r
        Chromosome: \${d.chr}<br/>\r
        Position: \${d.pos.toLocaleString()}<br/>\r
        p-value: \${d.pvalue.toExponential(2)}<br/>\r
        -log10(p): \${(-Math.log10(Math.max(d.pvalue, Number.EPSILON))).toFixed(2)}\r
      \`)\r
        .style('left', \`\${event.pageX + 10}px\`)\r
        .style('top', \`\${event.pageY - 10}px\`)\r
        .style('opacity', 1)\r
    }\r
\r
    function hideTooltip() {\r
      tooltip.style('opacity', 0)\r
    }\r
\r
    return () => {\r
      tooltip.remove()\r
    }\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};