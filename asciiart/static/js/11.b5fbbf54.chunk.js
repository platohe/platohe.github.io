(this.webpackJsonpawesomeasciiart=this.webpackJsonpawesomeasciiart||[]).push([[11],{128:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")(),f=Object.prototype.toString,l=Math.max,m=Math.min,v=function(){return u.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function d(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=o.test(e);return c||i.test(e)?a(e.slice(2),c?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,a,c,s,u=0,f=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function j(e){return u=e,c=setTimeout(w,t),f?y(e):a}function g(e){var n=e-s;return void 0===s||n>=t||n<0||p&&e-u>=i}function w(){var e=v();if(g(e))return O(e);c=setTimeout(w,function(e){var n=t-(e-s);return p?m(n,i-(e-u)):n}(e))}function O(e){return c=void 0,b&&r?y(e):(r=o=void 0,a)}function k(){var e=v(),n=g(e);if(r=arguments,o=this,s=e,n){if(void 0===c)return j(s);if(p)return c=setTimeout(w,t),y(s)}return void 0===c&&(c=setTimeout(w,t)),a}return t=d(t)||0,h(n)&&(f=!!n.leading,i=(p="maxWait"in n)?l(d(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=s=o=c=void 0},k.flush=function(){return void 0===c?a:O(v())},k}}).call(this,n(68))},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(30);var o=n(45);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},836:function(e,t,n){"use strict";n.r(t);var r=n(13),o=n(14),i=n(5),a=n(16),c=n(15),s=n(0),u=n.n(s),f=n(827),l=n(128),m=n.n(l),v=(n(41),n(3)),h=n(125),d=n(140),p=n(133),b=n.n(p),y=n(136),j=n(134),g=n(126),w={hash:0,text:"",sortBy:4,western:{},eastern:{},combined:{},pieces:[],getNames:function(){var e;return(null===(e=x())||void 0===e?void 0:e.names)||[]},categories:{western:{value:1,checked:!0},eastern:{value:1,checked:!1}}},O=!1;function k(){return(k=Object(j.a)(b.a.mark((function e(){var t,n,r,o,i,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=2;break}return e.abrupt("return");case 2:return t={checked:!0},n={chcked:!1},e.next=6,fetch("data/emoticon-western.json");case 6:return r=e.sent,e.next=9,r.json();case 9:return o=e.sent,t.emoticons=o.emoticons,t.names=o.names.filter((function(e){return"western"!==e.name&&"favorite"!==e.name})),t.nameDictionary=new Set(o.names.map((function(e){return e.name}))),e.next=15,fetch("data/emoticon-eastern.json");case 15:return r=e.sent,e.next=18,r.json();case 18:o=e.sent,n.emoticons=o.emoticons,n.names=o.names.filter((function(e){return"eastern"!==e.name&&"favorite"!==e.name})),n.nameDictionary=new Set(o.names.map((function(e){return e.name}))),i={},a=new Map,n.names.forEach((function(e){return a.set(e.name,e.value)})),t.names.forEach((function(e){var t=e.name,n=e.value;a.has(t)?a.set(t,a.get(t)+e.value):a.set(t,n)})),i.names=[],a.forEach((function(e,t){i.names.push({name:t,value:e})})),i.names.sort((function(e,t){return t.value-e.value})),i.nameDictionary=new Set([].concat(Object(y.a)(t.nameDictionary),Object(y.a)(n.nameDictionary))),[].concat(Object(y.a)(t.emoticons),Object(y.a)(n.emoticons)).forEach((function(e,t){e.id=t+1,e.name=e.tags.join(", ");var n=[];e.tags.forEach((function(e){return n.push.apply(n,Object(y.a)(e.split(/ |-|\/|\\|\.|,|\?|!|\u2018|\u2019|'|"|'|:|;|\(|\)/)))})),e.words=Object(y.a)(new Set(n)),e.visible=!0,e.styles=0,e.categories.includes("western")&&(e.styles+=1),e.categories.includes("eastern")&&(e.styles+=2),e.categories.includes("favorite")&&(e.styles+=8),w.pieces.push(e)})),w.western=t,w.categories.western.value=t.emoticons.length,w.eastern=n,w.categories.eastern.value=n.emoticons.length,w.combined=i,Object(h.a)("emoticons",w.pieces),O=!0;case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){var e=w.western,t=w.eastern,n=w.combined;return e.checked&&t.checked?n:e.checked?e:t.checked?t:void 0}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=x(),r=n?n.nameDictionary:void 0,o=w.western.checked,i=w.eastern.checked;e=e.split(" ").map((function(e){return e.trim().toLowerCase()})).filter((function(e){return e.length}));var a=0;w.pieces.forEach((function(n){if(n.visible=!1,!(t>0&&a>t)){var c=n.words,s=n.data,u=n.styles;if((o||0===(1&u))&&(i||0===(2&u)))if(e.length)for(var f=function(t){var o=e[t],i=s.includes(o);if(i||(i=c.some((function(e){return!!e.startsWith(o)&&!(e.length>o.length&&r&&r.has(e))}))),i)return n.visible=!0,a++,"break"},l=0;l<e.length;l++){if("break"===f(l))break}else 0!==(8&u)&&(n.visible=!0)}}))}function S(){var e={text:w.text,sortBy:w.sortBy};""!==JSON.stringify(e)&&Object(g.b)("emoticon#pref",e)}var D=w,R=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={items:100},o.renderInput=o.renderInput.bind(Object(i.a)(o)),o.onEvent=o.onEvent.bind(Object(i.a)(o)),o.onRefresh=o.onRefresh.bind(Object(i.a)(o)),o.onQuickGenerate=m()((function(e){return o.onRefresh(e,25)}),300),o.onFullGenerate=m()((function(e){return o.onRefresh(e)}),1e3),o}return Object(o.a)(n,[{key:"componentDidMount",value:function(e){var t=this;(function(){return k.apply(this,arguments)})().then((function(){!function(){var e=Object(g.a)("emoticon#pref");w.text=(null===e||void 0===e?void 0:e.text)||"",w.sortBy=null===e||void 0===e?void 0:e.sortBy}();var e=D.text;t.input.setValue(e),t.onRefresh(e)})),Object(v.b)("emoticons",this.onEvent)}},{key:"componentWillUnmount",value:function(){Object(v.c)("emoticons",this.onEvent)}},{key:"onEvent",value:function(e,t){if(e.startsWith("event@scrolled"))return this.input&&this.input.blur(),void("event@scrolled-to-bottom"===e&&(console.log("emoticons: ".concat(e)),this.setState({items:this.state.items+100})));switch(console.log("emoticons: ".concat(e)),e){case"event@refresh":this.forceUpdate();break;case"event@tag-clicked":var n=t;D.text=n,this.input.setValue(n),this.onRefresh(n);break;case"event@favorite-changed":Object(h.b)("emoticons",D.pieces)}}},{key:"onRefresh",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;D.text=e,S(),E(e,t),this.forceUpdate()}},{key:"renderInput",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(f.a,{placeholder:"Search emoticons",ref:function(t){return e.input=t},onChange:function(t){var n=t.target.value;n!==D.text&&(e.onQuickGenerate(n),e.onFullGenerate(n))}}))}},{key:"render",value:function(){return u.a.createElement(d.a,{title:"Emoticon",store:D,clusters:["western","eastern"],inputRender:this.renderInput,maxPieces:this.state.items,showSummary:!0,filterBy:"name"})}}]),n}(u.a.Component);t.default=R}}]);
//# sourceMappingURL=11.b5fbbf54.chunk.js.map