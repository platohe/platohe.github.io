const U=`
  precision highp float;
  attribute vec2 aPosition;
  varying vec2 vUV;
  void main() {
    vUV = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,p=`
  precision highp float;
  varying vec2 vUV;
  uniform sampler2D uGreen;
  uniform sampler2D uRed;
  uniform sampler2D uBlue;
  uniform int uBayer;
  uniform vec2 uDims;
  uniform vec2 uTexel;

  void main() {
    int px = int(vUV.x * uDims.x);
    int py = int(vUV.y * uDims.y);
    int pos = mod(py, 2) * 2 + mod(px, 2);
    int chan;
    if (uBayer == 0)      chan = pos == 0 ? 0 : (pos == 1 ? 1 : (pos == 2 ? 2 : 1));
    else if (uBayer == 1) chan = pos == 0 ? 1 : (pos == 1 ? 0 : (pos == 2 ? 1 : 2));
    else if (uBayer == 2) chan = pos == 0 ? 2 : (pos == 1 ? 1 : (pos == 2 ? 0 : 1));
    else                  chan = pos == 0 ? 1 : (pos == 1 ? 2 : (pos == 2 ? 1 : 0));

    float g = texture2D(uGreen, vUV).r;
    float r = texture2D(uRed,   vUV).r;
    float b = texture2D(uBlue,  vUV).r;
    float gr = (texture2D(uGreen, vUV + vec2(-uTexel.x, 0.0)).r
             +  texture2D(uGreen, vUV + vec2( uTexel.x, 0.0)).r
             +  texture2D(uGreen, vUV + vec2(0.0,-uTexel.y)).r
             +  texture2D(uGreen, vUV + vec2(0.0, uTexel.y)).r) * 0.25;

    if (chan == 1)      gl_FragColor = vec4(r, g, b, 1.0);
    else if (chan == 0) gl_FragColor = vec4(r, gr, gr, 1.0);
    else                gl_FragColor = vec4(gr, gr, b, 1.0);
  }
`;class A{constructor(){this.gl=null,this.isWebGL2=!1,this.program=null,this.available=!1}async init(){return this.gl?this.available:this._initPromise?this._initPromise:(this._initPromise=this._doInit(),this._initPromise)}async _doInit(){try{const e=document.createElement("canvas"),o=e.getContext("webgl2",{preserveDrawingBuffer:!0});if(this.isWebGL2=!!o,o)this.gl=o;else{const n=e.getContext("webgl",{preserveDrawingBuffer:!0});if(!n)return this._fail(),!1;if(!n.getExtension("OES_texture_float"))return this._fail(),!1;this.gl=n}const r=this.gl,i=this._createProgram(U,p);return i?(this.program=i,this.quad=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.quad),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),r.STATIC_DRAW),this.canvas=e,this.available=!0,!0):(this._fail(),!1)}catch(e){return console.warn("[GLRAWDemosaic] init failed, using CPU demosaic:",e.message),this._fail(),!1}}_fail(){this.gl=null,this.program=null,this.available=!1}_createProgram(e,o){const r=this.gl,i=this._compile(e,r.VERTEX_SHADER),n=this._compile(o,r.FRAGMENT_SHADER);if(!i||!n)return null;const u=r.createProgram();return r.attachShader(u,i),r.attachShader(u,n),r.bindAttribLocation(u,0,"aPosition"),r.linkProgram(u),r.getProgramParameter(u,r.LINK_STATUS)?u:(console.warn("[GLRAWDemosaic] program link failed:",r.getProgramInfoLog(u)),null)}_compile(e,o){const r=this.gl,i=r.createShader(o);return r.shaderSource(i,e),r.compileShader(i),r.getShaderParameter(i,r.COMPILE_STATUS)?i:(console.warn("[GLRAWDemosaic] shader compile failed:",r.getShaderInfoLog(i)),r.deleteShader(i),null)}_makeChannelTexture(e,o,r,i){const n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),this.isWebGL2?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R32F,r,i,0,e.RED,e.FLOAT,new Float32Array(o))):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,r,i,0,e.LUMINANCE,e.FLOAT,new Float32Array(o))),n}async demosaic({green:e,red:o,blue:r,width:i,height:n,bayer:u=0}){if(!await this.init())return{rgba:null,width:i,height:n,canvas:null,gl:!1};const t=this.gl;if(!this.canvas)return{rgba:null,width:i,height:n,canvas:null,gl:!1};const a=this.canvas.width=i,s=this.canvas.height=n;t.viewport(0,0,a,s),t.useProgram(this.program);const f=this._makeChannelTexture(t,e,a,s),h=this._makeChannelTexture(t,o||e,a,s),_=this._makeChannelTexture(t,r||e,a,s),T={uGreen:t.getUniformLocation(this.program,"uGreen"),uRed:t.getUniformLocation(this.program,"uRed"),uBlue:t.getUniformLocation(this.program,"uBlue"),uBayer:t.getUniformLocation(this.program,"uBayer"),uDims:t.getUniformLocation(this.program,"uDims"),uTexel:t.getUniformLocation(this.program,"uTexel")};t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,f),t.uniform1i(T.uGreen,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,h),t.uniform1i(T.uRed,1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,_),t.uniform1i(T.uBlue,2),t.uniform1i(T.uBayer,u),t.uniform2f(T.uDims,a,s),t.uniform2f(T.uTexel,1/a,1/s),t.bindBuffer(t.ARRAY_BUFFER,this.quad),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.drawArrays(t.TRIANGLES,0,3);const R=t.readPixels(0,0,a,s,t.RGBA,t.UNSIGNED_BYTE);t.deleteTexture(f),t.deleteTexture(h),t.deleteTexture(_),t.bindTexture(t.TEXTURE_2D,null);const m=new Uint8Array(a*s*4);for(let c=0;c<s;c++){const l=c*a*4,x=(s-1-c)*a*4;m.set(R.subarray(l,l+a*4),x)}let E=null;if(typeof document<"u"){E=document.createElement("canvas"),E.width=a,E.height=s;const c=E.getContext("2d"),l=c.createImageData(a,s);l.data.set(m),c.putImageData(l,0,0)}return{rgba:m,width:a,height:s,canvas:E,gl:!0}}}const d=new A;export{d as glRAWDemosaic};
