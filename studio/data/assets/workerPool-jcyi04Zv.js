const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-D5ofur8N.js","./index-Dirn3Ond.css"])))=>i.map(i=>d[i]);
var k=Object.defineProperty;var p=(i,e,t)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var c=(i,e,t)=>p(i,typeof e!="symbol"?e+"":e,t);import{_ as d}from"./index-D5ofur8N.js";const u=new Set(["md5","sha1","sha256","sha512","blake2b","blake2s","crypto-hash","generate-all-hashes","sha3-hash","hmac-generate","pbkdf2-derive","hkdf-derive","bcrypt-parse","aes-encrypt","aes-decrypt","aes-cipher","rsa-encrypt","rsa-decrypt","rsa-cipher","ecdsa-sign","ecdsa-verify","hmac-sign","hmac-verify","chacha20-encrypt","chacha20-decrypt","json-beautify","json-minify","csv-to-json","json-to-csv","xml-beautify","xml-minify","json-pretty","gzip-base64","deflate-base64","sort-lines","unique-lines","tf-idf","sentiment-analysis","text-similarity","ner-extract","readability-scores","text-summary","keyword-extract","entropy","entropy-calc","number-stats","benford-analysis"]);let f=0;class w{constructor(e,t,r,s,a,o){this.id=e,this.opId=t,this.input=r,this.args=s,this.resolve=a,this.reject=o,this.startTime=Date.now()}}class y{constructor(e=2){c(this,"_workerForTask",new Map);this.workerCount=Math.min(e,4),this.workers=[],this.availableWorkers=[],this.taskQueue=[],this.activeTasks=new Map,this._initialized=!1}init(){if(this._initialized)return this;try{for(let e=0;e<this.workerCount;e++){const t=this._createWorker(e);t&&(this.workers.push(t),this.availableWorkers.push(t))}this._initialized=!0}catch(e){console.warn("[WorkerPool] Failed to initialize workers:",e),this._initialized=!1}return this}_createWorker(e){try{const t=`
        let _ops = {}
        self.addEventListener('message', async (e) => {
          const { type, taskId, opId, input, args } = e.data
          if (type !== 'run') return
          try {
            // Operations are registered in the main thread and passed to worker via init message
            const op = _ops[opId]
            if (!op) throw new Error('Operation not found in worker: ' + opId)
            const startTime = performance.now()
            const result = await op.run(input, args || {})
            const duration = performance.now() - startTime
            self.postMessage({
              type: 'result',
              taskId,
              opId,
              output: result,
              duration,
            })
          } catch (error) {
            self.postMessage({
              type: 'error',
              taskId,
              opId,
              error: error.message,
            })
          }
        })
      `,r=new Blob([t],{type:"application/javascript"}),s=new Worker(URL.createObjectURL(r));return s.onerror=a=>{console.warn(`[WorkerPool] Worker ${e} error:`,a.message),this._removeWorker(s)},s.addEventListener("message",a=>this._onMessage(a)),s}catch(t){return console.warn(`[WorkerPool] Failed to create worker ${e}:`,t),null}}_removeWorker(e){const t=this.workers.indexOf(e);if(t>=0){this.workers.splice(t,1);const r=this.availableWorkers.indexOf(e);r>=0&&this.availableWorkers.splice(r,1)}e.terminate()}_onMessage(e){const{type:t,taskId:r,output:s,error:a,duration:o}=e.data;if(t!=="result"&&t!=="error")return;const n=this.activeTasks.get(r);if(!n)return;this.activeTasks.delete(r);const l=this._findWorkerForTask(r);l&&!this.availableWorkers.includes(l)&&this.availableWorkers.push(l),t==="result"?n.resolve({output:s,duration:o}):n.reject(new Error(a)),this._processQueue()}_findWorkerForTask(e){for(const t of this.workers)if(t===this._workerForTask.get(e))return t;return null}_processQueue(){if(this.taskQueue.length===0||this.availableWorkers.length===0)return;const e=this.taskQueue.shift(),t=this.availableWorkers.pop();if(!t){this.taskQueue.unshift(e);return}this.activeTasks.set(e.id,e),this._workerForTask.set(e.id,t),t.postMessage({type:"run",taskId:e.id,opId:e.opId,input:e.input,args:e.args})}async submit(e,t,r){const s=++f;return new Promise((a,o)=>{const n=new w(s,e,t,r,a,o);this.availableWorkers.length>0?this._dispatchTask(n):(this.taskQueue.push(n),setTimeout(()=>this._processQueue(),0)),setTimeout(()=>{this.activeTasks.has(s)&&(this.activeTasks.delete(s),this._workerForTask.delete(s),o(new Error(`Operation '${e}' timed out after 30s`)))},3e4)})}_dispatchTask(e){const t=this.availableWorkers.pop();if(!t){this.taskQueue.push(e);return}this.activeTasks.set(e.id,e),this._workerForTask.set(e.id,t),t.postMessage({type:"run",taskId:e.id,opId:e.opId,input:e.input,args:e.args})}isReady(){return this._initialized&&this.workers.length>0}getStats(){return{workerCount:this.workers.length,available:this.availableWorkers.length,active:this.activeTasks.size,queued:this.taskQueue.length,initialized:this._initialized}}destroy(){for(const e of this.workers)e.terminate();this.workers=[],this.availableWorkers=[],this.taskQueue=[],this.activeTasks.clear(),this._workerForTask.clear(),this._initialized=!1}}let h=null;function m(){return h||(h=new y,h.init()),h}async function g(i,e,t){const r=m();if(u.has(i)&&r.isReady())try{return(await r.submit(i,e,t)).output}catch(a){console.warn(`[WorkerPool] Worker execution failed for ${i}, falling back to main thread:`,a)}const{runOperation:s}=await d(async()=>{const{runOperation:a}=await import("./index-D5ofur8N.js").then(o=>o.d);return{runOperation:a}},__vite__mapDeps([0,1]),import.meta.url);return s(i,e,t)}function b(i){return u.has(i)}export{m as getWorkerPool,g as runHeavyOp,b as shouldUseWorker};
