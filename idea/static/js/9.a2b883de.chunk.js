(this.webpackJsonpawesomeidea=this.webpackJsonpawesomeidea||[]).push([[9],{1452:function(e,t,n){"use strict";n.r(t);var a=n(87),o=n(24),c=n(25),r=n(44),i=n(41),s=n(40),l=n(2),u=n(0),d=(n(66),n(531)),h=n(109),g=n(912),p=n(13),b=n(125),f=n(592),m=n(23),v=(n(69),d.a.TextArea),y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).item=Object(m.d)(e.item),a.item.url=decodeURIComponent(a.item.url||""),a.state={errorMessage:""},a.onPropsChanged=a.onPropsChanged.bind(Object(r.a)(a)),a.onUrlChanged=a.onUrlChanged.bind(Object(r.a)(a)),a.onTitleChanged=a.onTitleChanged.bind(Object(r.a)(a)),a.onCancel=a.onCancel.bind(Object(r.a)(a)),a.onDone=a.onDone.bind(Object(r.a)(a)),a}return Object(c.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.item&&(this.item=Object(m.d)(e.item),this.item.url=decodeURIComponent(this.item.url||""),this.setState({errorMessage:""}))}},{key:"onPropsChanged",value:function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var o=Object(a.a)(n[t],2),c=o[0],r=o[1];this.item[c]=r}this.setState({errorMessage:""})}},{key:"onUrlChanged",value:function(e){this.onPropsChanged({url:e.target.value.trim()})}},{key:"onTitleChanged",value:function(e){this.onPropsChanged({title:e.target.value})}},{key:"onCancel",value:function(){p.b.postEvent("dlg#editItem#cancelled")}},{key:"onDone",value:function(){var e=this.item,t=e.url,n="";e.title.trim().length||(n+="Title cannot be empty"),t.trim().length?Object(b.c)(t)||(n+="".concat(n.length?", ":"","Invalid URL")):n+="".concat(n.length?", ":"","URL cannot be empty"),n?this.setState({errorMessage:n}):p.b.postEvent("dlg#editItem#OK",this.item)}},{key:"renderToolbar",value:function(){return Object(l.jsxs)("div",{style:{display:"flex"},className:"border-bottom-line",children:[Object(l.jsx)("div",{children:this.props.title||"Edit"}),Object(l.jsx)("div",{style:{flex:"auto"}}),Object(l.jsx)(h.a,{type:"link",onClick:this.onCancel,style:{marginRight:"8px"},children:"Cancel"}),Object(l.jsx)(h.a,{type:"primary",onClick:this.onDone,children:"Done"})]})}},{key:"render",value:function(){var e=this.state.errorMessage,t=this.item,n=t.tags,a=t.url,o=t.title;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:this.renderToolbar()}),e&&Object(l.jsx)(g.a,{message:e,banner:!0,closable:!0}),Object(l.jsx)("div",{className:"itemedit-title",children:"Tags"}),Object(l.jsx)(f.a,{tags:n}),Object(l.jsx)(d.a,{type:"url",style:{margin:"16px 0 0 0"},value:a,placeholder:"URL",onChange:this.onUrlChanged}),Object(l.jsx)(v,{style:{margin:"16px 0 0 0"},value:o,onChange:this.onTitleChanged,placeholder:"Title",autoSize:{minRows:5,maxRows:10}})]})}}]),n}(u.Component);t.default=y},592:function(e,t,n){"use strict";var a=n(28),o=n(24),c=n(25),r=n(44),i=n(41),s=n(40),l=n(2),u=n(0),d=(n(66),n(656)),h=n(135),g=n(531),p=n(199),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,tagValue:""},a.tags=e.tags,a.validateTags(),a.onDeleteTag=a.onDeleteTag.bind(Object(r.a)(a)),a.onStartEditTag=a.onStartEditTag.bind(Object(r.a)(a)),a.onChangeTag=a.onChangeTag.bind(Object(r.a)(a)),a.onEndEditTag=a.onEndEditTag.bind(Object(r.a)(a)),a}return Object(c.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.tags=e.tags,this.validateTags()}},{key:"validateTags",value:function(){var e=this.tags,t=Object(a.a)(new Set(e.map((function(e){return(e=e.trim().toLowerCase()).startsWith("#")&&(e=e.substr(1)),e}))));e.splice(0,e.length),t.forEach((function(t){t.length&&e.push(t)}))}},{key:"onDeleteTag",value:function(e){e=e.trim().toLowerCase();var t=this.tags.findIndex((function(t){return t===e}));-1!==t&&(this.tags.splice(t,1),this.forceUpdate())}},{key:"onStartEditTag",value:function(){var e=this;this.setState({isEditing:!0},(function(){return e.tagInput.focus()}))}},{key:"onChangeTag",value:function(e){this.setState({tagValue:e.target.value})}},{key:"onEndEditTag",value:function(){this.tags.push(this.state.tagValue.trim().toLowerCase()),this.validateTags(),this.setState({isEditing:!1,tagValue:""})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.buttonTitle,o=this.state,c=o.isEditing,r=o.tagValue;return Object(l.jsxs)("div",{style:{lineHeight:2},children:[n&&Object(l.jsx)("span",{style:{marginRight:"8px"},children:n}),this.tags.map((function(t,n){var a=t.length>20,o=Object(l.jsx)(d.a,{color:"green",closable:!0,onClose:function(){return e.onDeleteTag(t)},children:a?"".concat(t.slice(0,20),"..."):t},t);return a?Object(l.jsx)(h.a,{title:t,children:o},t):o})),c&&Object(l.jsx)(g.a,{ref:function(t){return e.tagInput=t},type:"text",size:"small",style:{width:78},value:r,onChange:this.onChangeTag,onBlur:this.onEndEditTag,onPressEnter:this.onEndEditTag}),!c&&Object(l.jsxs)(d.a,{onClick:this.onStartEditTag,style:{background:"#fff",borderStyle:"dashed"},children:[Object(l.jsx)(p.a,{type:"plus"})," ",a||"New Tag"]})]})}}]),n}(u.Component);t.a=b},656:function(e,t,n){"use strict";var a=n(6),o=n.n(a),c=n(4),r=n.n(c),i=n(34),s=n.n(i),l=n(0),u=n(5),d=n.n(u),h=n(43),g=n(100),p=n.n(g),b=n(82),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},m=function(e){var t,n=e.prefixCls,a=e.className,c=e.checked,i=e.onChange,s=e.onClick,u=f(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,l.useContext(b.b).getPrefixCls)("tag",n),g=d()(h,(t={},o()(t,"".concat(h,"-checkable"),!0),o()(t,"".concat(h,"-checkable-checked"),c),t),a);return l.createElement("span",r()({},u,{className:g,onClick:function(e){i&&i(!c),s&&s(e)}}))},v=n(200),y=n(201),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},O=new RegExp("^(".concat(v.a.join("|"),")(-inverse)?$")),C=new RegExp("^(".concat(v.b.join("|"),")$")),E=function(e,t){var n,a=e.prefixCls,c=e.className,i=e.style,u=e.children,g=e.icon,f=e.color,m=e.onClose,v=e.closeIcon,E=e.closable,x=void 0!==E&&E,k=j(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),T=l.useContext(b.b),w=T.getPrefixCls,N=T.direction,S=l.useState(!0),P=s()(S,2),I=P[0],R=P[1];l.useEffect((function(){"visible"in k&&R(k.visible)}),[k.visible]);var U=function(){return!!f&&(O.test(f)||C.test(f))},L=r()({backgroundColor:f&&!U()?f:void 0},i),M=U(),D=w("tag",a),V=d()(D,(n={},o()(n,"".concat(D,"-").concat(f),M),o()(n,"".concat(D,"-has-color"),f&&!M),o()(n,"".concat(D,"-hidden"),!I),o()(n,"".concat(D,"-rtl"),"rtl"===N),n),c),A=function(e){e.stopPropagation(),m&&m(e),e.defaultPrevented||"visible"in k||R(!1)},_="onClick"in k||u&&"a"===u.type,F=Object(h.a)(k,["visible"]),H=g||null,W=H?l.createElement(l.Fragment,null,H,l.createElement("span",null,u)):u,z=l.createElement("span",r()({},F,{ref:t,className:V,style:L}),W,x?v?l.createElement("span",{className:"".concat(D,"-close-icon"),onClick:A},v):l.createElement(p.a,{className:"".concat(D,"-close-icon"),onClick:A}):null);return _?l.createElement(y.a,null,z):z},x=l.forwardRef(E);x.displayName="Tag",x.CheckableTag=m;t.a=x},912:function(e,t,n){"use strict";var a=n(4),o=n.n(a),c=n(6),r=n.n(c),i=n(34),s=n.n(i),l=n(0),u=n(100),d=n.n(u),h=n(202),g=n.n(h),p=n(205),b=n.n(p),f=n(203),m=n.n(f),v=n(204),y=n.n(v),j=n(206),O=n.n(j),C=n(208),E=n.n(C),x=n(207),k=n.n(x),T=n(145),w=n.n(T),N=n(72),S=n(5),P=n.n(S),I=n(82);var R=n(45),U=n.n(R),L=n(49),M=n.n(L),D=n(50),V=n.n(D),A=n(51),_=n.n(A),F=function(e){V()(n,e);var t=_()(n);function n(){var e;return U()(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return M()(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,a=e.children,o=this.state,c=o.error,r=o.info,i=r&&r.componentStack?r.componentStack:null,s="undefined"===typeof t?(c||"").toString():t,u="undefined"===typeof n?i:n;return c?l.createElement($,{type:"error",message:s,description:l.createElement("pre",null,u)}):a}}]),n}(l.Component),H=n(33),W=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},z={success:O.a,info:k.a,error:w.a,warning:E.a},B={success:g.a,info:m.a,error:y.a,warning:b.a},J=function(e){var t,n=e.description,a=e.prefixCls,c=e.message,i=e.banner,u=e.className,h=void 0===u?"":u,g=e.style,p=e.onMouseEnter,b=e.onMouseLeave,f=e.onClick,m=e.afterClose,v=e.showIcon,y=e.closable,j=e.closeText,O=e.action,C=W(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),E=l.useState(!1),x=s()(E,2),k=x[0],T=x[1],w=l.useRef(),S=l.useContext(I.b),R=S.getPrefixCls,U=S.direction,L=R("alert",a),M=function(e){var t;T(!0),null===(t=C.onClose)||void 0===t||t.call(C,e)},D=!!j||y,V=function(){var e=C.type;return void 0!==e?e:i?"warning":"info"}(),A=!(!i||void 0!==v)||v,_=P()(L,"".concat(L,"-").concat(V),(t={},r()(t,"".concat(L,"-with-description"),!!n),r()(t,"".concat(L,"-no-icon"),!A),r()(t,"".concat(L,"-banner"),!!i),r()(t,"".concat(L,"-rtl"),"rtl"===U),t),h),F=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(C);return l.createElement(N.b,{visible:!k,motionName:"".concat(L,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:m},(function(e){var t=e.className,a=e.style;return l.createElement("div",o()({ref:w,"data-show":!k,className:P()(_,t),style:o()(o()({},g),a),onMouseEnter:p,onMouseLeave:b,onClick:f,role:"alert"},F),A?function(){var e=C.icon,t=(n?B:z)[V]||null;return e?Object(H.c)(e,l.createElement("span",{className:"".concat(L,"-icon")},e),(function(){return{className:P()("".concat(L,"-icon"),r()({},e.props.className,e.props.className))}})):l.createElement(t,{className:"".concat(L,"-icon")})}():null,l.createElement("div",{className:"".concat(L,"-content")},l.createElement("div",{className:"".concat(L,"-message")},c),l.createElement("div",{className:"".concat(L,"-description")},n)),O?l.createElement("div",{className:"".concat(L,"-action")},O):null,D?l.createElement("button",{type:"button",onClick:M,className:"".concat(L,"-close-icon"),tabIndex:0},j?l.createElement("span",{className:"".concat(L,"-close-text")},j):l.createElement(d.a,null)):null)}))};J.ErrorBoundary=F;var $=t.a=J}}]);
//# sourceMappingURL=9.a2b883de.chunk.js.map