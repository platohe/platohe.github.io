import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{N as t,R as n,z as r}from"./src-DfVJmg0Q.js";import"./utils-CYHuYYOg.js";var i=e(r(),1),a=n(),o={id:`force-graph-web-worker`,title:`Force Graph Web Worker`,desc:`Force Graph Web Worker — a networks chart visualization`,category:`Networks`,component:`ForceGraphWebWorker`,complexity:`beginner`,interactivity:[`none`],d3Api:[`d3-scale`,`d3-hierarchy`],tags:[`networks`,`force-graph-web-worker`]};function s({data:e}){let n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let r=t(n.current);r.selectAll(`*`).remove();let i=e&&(Array.isArray(e)&&e.length>0||!Array.isArray(e)&&typeof e==`object`&&Object.keys(e).length>0)?e:[{id:0,group:0,label:`A`},{id:1,group:1,label:`B`},{id:2,group:2,label:`C`},{id:3,group:3,label:`D`},{id:4,group:0,label:`A`},{id:5,group:1,label:`B`},{id:6,group:2,label:`C`},{id:7,group:3,label:`D`},{id:8,group:0,label:`A`},{id:9,group:1,label:`B`},{id:10,group:2,label:`C`},{id:11,group:3,label:`D`},{id:12,group:0,label:`A`},{id:13,group:1,label:`B`},{id:14,group:2,label:`C`},{id:15,group:3,label:`D`},{id:16,group:0,label:`A`},{id:17,group:1,label:`B`},{id:18,group:2,label:`C`},{id:19,group:3,label:`D`},{id:20,group:0,label:`A`},{id:21,group:1,label:`B`},{id:22,group:2,label:`C`},{id:23,group:3,label:`D`},{id:24,group:0,label:`A`},{id:25,group:1,label:`B`},{id:26,group:2,label:`C`},{id:27,group:3,label:`D`},{id:28,group:0,label:`A`},{id:29,group:1,label:`B`},{id:30,group:2,label:`C`},{id:31,group:3,label:`D`},{id:32,group:0,label:`A`},{id:33,group:1,label:`B`},{id:34,group:2,label:`C`},{id:35,group:3,label:`D`},{id:36,group:0,label:`A`},{id:37,group:1,label:`B`},{id:38,group:2,label:`C`},{id:39,group:3,label:`D`}],a=[];i.forEach((e,t)=>{let n=1+Math.floor(Math.random()*3);for(let e=0;e<n;e++){let e=Math.floor(Math.random()*i.length);e!==t&&a.push({source:t,target:e})}});let o=[`#6366f1`,`#f59e0b`,`#10b981`,`#ef4444`],s=null,c=null;try{if(typeof Worker<`u`){let e=new Blob([`
      self.onmessage = function(e) {
        const { nodes, links, width, height } = e.data
        
        // Simple force simulation
        const nodesCopy = JSON.parse(JSON.stringify(nodes))
        const linksCopy = JSON.parse(JSON.stringify(links))
        
        // Initialize positions randomly
        nodesCopy.forEach(node => {
          node.x = Math.random() * width
          node.y = Math.random() * height
          node.vx = 0
          node.vy = 0
        })
        
        // Simulation parameters
        const k = 0.01 // spring constant
        const repulsion = 5000
        const damping = 0.9
        const centerStrength = 0.01
        
        function simulate() {
          // Apply repulsion
          for (let i = 0; i < nodesCopy.length; i++) {
            for (let j = i + 1; j < nodesCopy.length; j++) {
              const dx = nodesCopy[j].x - nodesCopy[i].x
              const dy = nodesCopy[j].y - nodesCopy[i].y
              const dist = Math.sqrt(dx * dx + dy * dy) || 1
              const force = repulsion / (dist * dist)
              
              const fx = (dx / dist) * force
              const fy = (dy / dist) * force
              
              nodesCopy[i].vx -= fx
              nodesCopy[i].vy -= fy
              nodesCopy[j].vx += fx
              nodesCopy[j].vy += fy
            }
          }
          
          // Apply spring forces
          linksCopy.forEach(link => {
            const source = nodesCopy[link.source]
            const target = nodesCopy[link.target]
            if (!source || !target) return
            
            const dx = target.x - source.x
            const dy = target.y - source.y
            const dist = Math.sqrt(dx * dx + dy * dy) || 1
            const force = (dist - 50) * k
            
            const fx = (dx / dist) * force
            const fy = (dy / dist) * force
            
            source.vx += fx
            source.vy += fy
            target.vx -= fx
            target.vy -= fy
          })
          
          // Apply center force
          nodesCopy.forEach(node => {
            node.vx += (width / 2 - node.x) * centerStrength
            node.vy += (height / 2 - node.y) * centerStrength
          })
          
          // Update positions with damping
          nodesCopy.forEach(node => {
            node.vx *= damping
            node.vy *= damping
            node.x += node.vx
            node.y += node.vy
            
            // Keep within bounds
            node.x = Math.max(20, Math.min(width - 20, node.x))
            node.y = Math.max(20, Math.min(height - 20, node.y))
          })
          
          // Send updated positions
          self.postMessage({ type: 'tick', nodes: nodesCopy.map(n => ({ id: n.id, x: n.x, y: n.y })) })
        }
        
        // Run simulation
        let iteration = 0
        const interval = setInterval(() => {
          simulate()
          iteration++
          if (iteration > 300) {
            clearInterval(interval)
            self.postMessage({ type: 'done' })
          }
        }, 16)
      }
    `],{type:`application/javascript`});c=URL.createObjectURL(e),s=new Worker(c)}}catch{s=null}let l=r.append(`g`).attr(`transform`,`translate(10, 17)`);i.forEach(e=>{e.x=Math.random()*380,e.y=Math.random()*265});let u=l.selectAll(`line`).data(a).join(`line`).attr(`stroke`,`var(--border)`).attr(`stroke-width`,1).attr(`stroke-opacity`,.5),d=l.selectAll(`circle`).data(i).join(`circle`).attr(`r`,e=>e.group===0?10:7).attr(`fill`,e=>o[e.group]).attr(`stroke`,`var(--bg)`).attr(`stroke-width`,2),f=l.selectAll(`text`).data(i).join(`text`).attr(`text-anchor`,`middle`).attr(`fill`,`white`).attr(`font-size`,`9px`).attr(`font-weight`,`bold`).attr(`pointer-events`,`none`).text(e=>e.label);return s&&(s.onmessage=function(e){if(e.data.type===`tick`){let t=e.data.nodes;d.attr(`cx`,e=>{let n=t.find(t=>t.id===e.id);return n?n.x:e.x}).attr(`cy`,e=>{let n=t.find(t=>t.id===e.id);return n?n.y:e.y}),f.attr(`x`,e=>{let n=t.find(t=>t.id===e.id);return n?n.x:e.x}).attr(`y`,e=>{let n=t.find(t=>t.id===e.id);return n?n.y+4:e.y+4}),u.attr(`x1`,e=>{let n=t.find(t=>t.id===e.source.id);return n?n.x:e.source.x}).attr(`y1`,e=>{let n=t.find(t=>t.id===e.source.id);return n?n.y:e.source.y}).attr(`x2`,e=>{let n=t.find(t=>t.id===e.target.id);return n?n.x:e.target.x}).attr(`y2`,e=>{let n=t.find(t=>t.id===e.target.id);return n?n.y:e.target.y})}else e.data.type===`done`&&(s.terminate(),c&&URL.revokeObjectURL(c))},s.postMessage({nodes:i,links:a,width:380,height:265})),()=>{s&&s.terminate(),c&&URL.revokeObjectURL(c)}},[e]),(0,a.jsx)(`svg`,{ref:n,width:400,height:300,viewBox:`0 0 400 300`})}export{s as default,o as meta};