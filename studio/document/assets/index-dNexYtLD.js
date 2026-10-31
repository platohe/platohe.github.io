import{_ as Et}from"./index-DbB2MZ1-.js";var Ot=Object.defineProperty,_t=r=>{throw TypeError(r)},Ft=(r,n,e)=>n in r?Ot(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,ge=(r,n,e)=>Ft(r,typeof n!="symbol"?n+"":n,e),ot=(r,n,e)=>n.has(r)||_t("Cannot "+e),dn=(r,n,e)=>(ot(r,n,"read from private field"),n.get(r)),Ue=(r,n,e)=>n.has(r)?_t("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,e),Yn=(r,n,e,t)=>(ot(r,n,"write to private field"),n.set(r,e),e),Ln,Z;const lt=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),Dn=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});let $n=class Xn{static __wrap(n){const e=Object.create(Xn.prototype);return e.__wbg_ptr=n,Ve.register(e,e.__wbg_ptr,e),e}static __unwrap(n){return n instanceof Xn?n.__destroy_into_raw():0}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Ve.unregister(this),n}free(){const n=this.__destroy_into_raw();_.__wbg_lint_free(n,0)}static from_json(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h,i=_.lint_from_json(e,t);if(i[2])throw an(i[1]);return Xn.__wrap(i[0])}get_problem_text(){let n,e;try{const t=_.lint_get_problem_text(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}lint_kind(){let n,e;try{const t=_.lint_lint_kind(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}lint_kind_pretty(){let n,e;try{const t=_.lint_lint_kind_pretty(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}message(){let n,e;try{const t=_.lint_message(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}message_html(){let n,e;try{const t=_.lint_message_html(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}span(){const n=_.lint_span(this.__wbg_ptr);return se.__wrap(n)}suggestion_count(){return _.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const n=_.lint_suggestions(this.__wbg_ptr);var e=Pn(n[0],n[1]);return _.__wbindgen_free(n[0],n[1]*4,4),e}to_json(){let n,e;try{const t=_.lint_to_json(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}};Symbol.dispose&&($n.prototype[Symbol.dispose]=$n.prototype.free);let Se=class $e{static __wrap(n){const e=Object.create($e.prototype);return e.__wbg_ptr=n,Ie.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Ie.unregister(this),n}free(){const n=this.__destroy_into_raw();_.__wbg_linter_free(n,0)}apply_suggestion(n,e,t){let i,s;try{const g=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),u=h;fe(e,$n),fe(t,Hn);const l=_.linter_apply_suggestion(this.__wbg_ptr,g,u,e.__wbg_ptr,t.__wbg_ptr);var a=l[0],c=l[1];if(l[3])throw a=0,c=0,an(l[2]);return i=a,s=c,b(a,c)}finally{_.__wbindgen_free(i,s,1)}}clear_ignored_lints(){_.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){_.linter_clear_words(this.__wbg_ptr)}context_hash(n,e){const t=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),i=h;fe(e,$n);const s=_.linter_context_hash(this.__wbg_ptr,t,i,e.__wbg_ptr);return BigInt.asUintN(64,s)}export_ignored_lints(){let n,e;try{const t=_.linter_export_ignored_lints(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}export_words(){const n=_.linter_export_words(this.__wbg_ptr);var e=Pn(n[0],n[1]);return _.__wbindgen_free(n[0],n[1]*4,4),e}generate_stats_file(){let n,e;try{const t=_.linter_generate_stats_file(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}get_dialect(){return _.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let n,e;try{const t=_.linter_get_lint_config_as_json(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}get_lint_config_as_object(){return _.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let n,e;try{const t=_.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}get_lint_descriptions_as_object(){return _.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let n,e;try{const t=_.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}get_lint_descriptions_html_as_object(){return _.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let n,e;try{const t=_.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}get_structured_lint_config_as_object(){return _.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(n){const e=Dt(n,_.__wbindgen_malloc),t=h;_.linter_ignore_hashes(this.__wbg_ptr,e,t)}ignore_lints(n,e){const t=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),i=h,s=Ae(e,_.__wbindgen_malloc),a=h;_.linter_ignore_lints(this.__wbg_ptr,t,i,s,a)}import_ignored_lints(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h,i=_.linter_import_ignored_lints(this.__wbg_ptr,e,t);if(i[1])throw an(i[0])}import_stats_file(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h,i=_.linter_import_stats_file(this.__wbg_ptr,e,t);if(i[1])throw an(i[0])}import_weirpack(n){const e=Ut(n,_.__wbindgen_malloc),t=h,i=_.linter_import_weirpack(this.__wbg_ptr,e,t);if(i[2])throw an(i[1]);return an(i[0])}import_words(n){const e=Ae(n,_.__wbindgen_malloc),t=h;_.linter_import_words(this.__wbg_ptr,e,t)}is_likely_english(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h;return _.linter_is_likely_english(this.__wbg_ptr,e,t)!==0}isolate_english(n){let e,t;try{const i=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),s=h,a=_.linter_isolate_english(this.__wbg_ptr,i,s);return e=a[0],t=a[1],b(a[0],a[1])}finally{_.__wbindgen_free(e,t,1)}}lint(n,e,t,i,s,a){const c=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),g=h;var u=on(i)?0:O(i,_.__wbindgen_malloc,_.__wbindgen_realloc),l=h;const f=_.linter_lint(this.__wbg_ptr,c,g,e,t,u,l,s,a);var d=Pn(f[0],f[1]);return _.__wbindgen_free(f[0],f[1]*4,4),d}static new(n){const e=_.linter_new(n);return $e.__wrap(e)}organized_lints(n,e,t,i,s,a){const c=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),g=h;var u=on(i)?0:O(i,_.__wbindgen_malloc,_.__wbindgen_realloc),l=h;const f=_.linter_organized_lints(this.__wbg_ptr,c,g,e,t,u,l,s,a);var d=Pn(f[0],f[1]);return _.__wbindgen_free(f[0],f[1]*4,4),d}set_lint_config_from_json(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h,i=_.linter_set_lint_config_from_json(this.__wbg_ptr,e,t);if(i[1])throw an(i[0])}set_lint_config_from_object(n){const e=_.linter_set_lint_config_from_object(this.__wbg_ptr,n);if(e[1])throw an(e[0])}summarize_stats(n,e){return _.linter_summarize_stats(this.__wbg_ptr,!on(n),on(n)?BigInt(0):n,!on(e),on(e)?BigInt(0):e)}};Symbol.dispose&&(Se.prototype[Symbol.dispose]=Se.prototype.free);let ie=class ct{static __wrap(n){const e=Object.create(ct.prototype);return e.__wbg_ptr=n,Be.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Be.unregister(this),n}free(){const n=this.__destroy_into_raw();_.__wbg_organizedgroup_free(n,0)}get group(){let n,e;try{const t=_.__wbg_get_organizedgroup_group(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}get lints(){const n=_.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var e=Pn(n[0],n[1]);return _.__wbindgen_free(n[0],n[1]*4,4),e}set group(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h;_.__wbg_set_organizedgroup_group(this.__wbg_ptr,e,t)}set lints(n){const e=Ae(n,_.__wbindgen_malloc),t=h;_.__wbg_set_organizedgroup_lints(this.__wbg_ptr,e,t)}};Symbol.dispose&&(ie.prototype[Symbol.dispose]=ie.prototype.free);let se=class Zn{static __wrap(n){const e=Object.create(Zn.prototype);return e.__wbg_ptr=n,Pe.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Pe.unregister(this),n}free(){const n=this.__destroy_into_raw();_.__wbg_span_free(n,0)}get end(){return _.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return _.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(n){_.__wbg_set_span_end(this.__wbg_ptr,n)}set start(n){_.__wbg_set_span_start(this.__wbg_ptr,n)}static from_json(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h,i=_.span_from_json(e,t);if(i[2])throw an(i[1]);return Zn.__wrap(i[0])}is_empty(){return _.span_is_empty(this.__wbg_ptr)!==0}len(){return _.span_len(this.__wbg_ptr)>>>0}static new(n,e){const t=_.span_new(n,e);return Zn.__wrap(t)}to_json(){let n,e;try{const t=_.span_to_json(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}};Symbol.dispose&&(se.prototype[Symbol.dispose]=se.prototype.free);let Hn=class je{static __wrap(n){const e=Object.create(je.prototype);return e.__wbg_ptr=n,Ge.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Ge.unregister(this),n}free(){const n=this.__destroy_into_raw();_.__wbg_suggestion_free(n,0)}static from_json(n){const e=O(n,_.__wbindgen_malloc,_.__wbindgen_realloc),t=h,i=_.suggestion_from_json(e,t);if(i[2])throw an(i[1]);return je.__wrap(i[0])}get_replacement_text(){let n,e;try{const t=_.suggestion_get_replacement_text(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}kind(){return _.suggestion_kind(this.__wbg_ptr)}to_json(){let n,e;try{const t=_.suggestion_to_json(this.__wbg_ptr);return n=t[0],e=t[1],b(t[0],t[1])}finally{_.__wbindgen_free(n,e,1)}}};Symbol.dispose&&(Hn.prototype[Symbol.dispose]=Hn.prototype.free);const Mt=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function kt(){return _.get_default_lint_config()}function zt(){let r,n;try{const e=_.get_default_lint_config_as_json();return r=e[0],n=e[1],b(e[0],e[1])}finally{_.__wbindgen_free(r,n,1)}}function Rt(){_.setup()}function Nt(r){let n,e;try{const t=O(r,_.__wbindgen_malloc,_.__wbindgen_realloc),i=h,s=_.to_title_case(t,i);return n=s[0],e=s[1],b(s[0],s[1])}finally{_.__wbindgen_free(n,e,1)}}function gt(){return{__proto__:null,"./harper_wasm_slim_bg.js":{__proto__:null,__wbg_Error_408e67f47ca7b58b:function(n,e){return Error(b(n,e))},__wbg_String_8564e559799eccda:function(n,e){const t=String(e),i=O(t,_.__wbindgen_malloc,_.__wbindgen_realloc),s=h;Q().setInt32(n+4,s,!0),Q().setInt32(n+0,i,!0)},__wbg___wbindgen_boolean_get_c9c83ebd41b34df3:function(n){const e=n,t=typeof e=="boolean"?e:void 0;return on(t)?16777215:t?1:0},__wbg___wbindgen_debug_string_a57024b9c6e4a48b:function(n,e){const t=xe(e),i=O(t,_.__wbindgen_malloc,_.__wbindgen_realloc),s=h;Q().setInt32(n+4,s,!0),Q().setInt32(n+0,i,!0)},__wbg___wbindgen_is_function_5e4570eb24ffa122:function(n){return typeof n=="function"},__wbg___wbindgen_is_object_a2790eb24c211ea0:function(n){const e=n;return typeof e=="object"&&e!==null},__wbg___wbindgen_is_string_e6f02f0ea5f20a32:function(n){return typeof n=="string"},__wbg___wbindgen_jsval_loose_eq_acf2776254a8d832:function(n,e){return n==e},__wbg___wbindgen_number_get_136b9679cab35cfb:function(n,e){const t=e,i=typeof t=="number"?t:void 0;Q().setFloat64(n+8,on(i)?0:i,!0),Q().setInt32(n+0,!on(i),!0)},__wbg___wbindgen_string_get_d154f1e671052120:function(n,e){const t=e,i=typeof t=="string"?t:void 0;var s=on(i)?0:O(i,_.__wbindgen_malloc,_.__wbindgen_realloc),a=h;Q().setInt32(n+4,a,!0),Q().setInt32(n+0,s,!0)},__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,e){throw new Error(b(n,e))},__wbg_call_1c5886ab9c57d1c7:function(){return xn(function(n,e){return n.call(e)},arguments)},__wbg_done_669171204c3dcae2:function(n){return n.done},__wbg_entries_7774d489e1da5f4f:function(n){return Object.entries(n)},__wbg_error_757e9472f8410341:function(n,e){let t,i;try{t=n,i=e,console.error(b(n,e))}finally{_.__wbindgen_free(t,i,1)}},__wbg_getRandomValues_a608c4436c19407a:function(){return xn(function(n,e){globalThis.crypto.getRandomValues(ue(n,e))},arguments)},__wbg_getRandomValues_e446ea5ffdd14ee5:function(){return xn(function(n,e){globalThis.crypto.getRandomValues(ue(n,e))},arguments)},__wbg_getTime_63fb0332e6c4ec17:function(n){return n.getTime()},__wbg_get_c0c8f8d7da0c03dd:function(n,e){return n[e>>>0]},__wbg_get_d173c0308df22d37:function(){return xn(function(n,e){return Reflect.get(n,e)},arguments)},__wbg_get_unchecked_e20b893aeafc3fca:function(n,e){return n[e>>>0]},__wbg_instanceof_ArrayBuffer_993d02d2d254cad1:function(n){let e;try{e=n instanceof ArrayBuffer}catch{e=!1}return e},__wbg_instanceof_Uint8Array_f935dbb0aa7cdeed:function(n){let e;try{e=n instanceof Uint8Array}catch{e=!1}return e},__wbg_iterator_5cebbb86e33c6dd6:function(){return Symbol.iterator},__wbg_length_36bd29c6848c2144:function(n){return n.length},__wbg_length_ecfa2c63d3d0d82c:function(n){return n.length},__wbg_lint_new:function(n){return $n.__wrap(n)},__wbg_lint_unwrap:function(n){return $n.__unwrap(n)},__wbg_log_1f8cbb01c83d06c2:function(n,e,t,i,s,a,c,g){let u,l;try{u=n,l=e,console.log(b(n,e),b(t,i),b(s,a),b(c,g))}finally{_.__wbindgen_free(u,l,1)}},__wbg_log_a54ca6b45e09078a:function(n,e){let t,i;try{t=n,i=e,console.log(b(n,e))}finally{_.__wbindgen_free(t,i,1)}},__wbg_mark_6b7f03786f5e4d61:function(n,e){performance.mark(b(n,e))},__wbg_measure_0e21b33a1c6e3a29:function(){return xn(function(n,e,t,i){let s,a,c,g;try{s=n,a=e,c=t,g=i,performance.measure(b(n,e),b(t,i))}finally{_.__wbindgen_free(s,a,1),_.__wbindgen_free(c,g,1)}},arguments)},__wbg_new_0_f117d868b403dc07:function(){return new Date},__wbg_new_116be93542d39019:function(){return new Array},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_77cc4f4f472aeb81:function(n){return new Uint8Array(n)},__wbg_new_cdf041679ded4c5f:function(){return new Map},__wbg_new_ebe3e0f6837f0879:function(){return new Object},__wbg_next_42cf16ee0dafc9e2:function(){return xn(function(n){return n.next()},arguments)},__wbg_next_8f26b64fa5e9f64b:function(n){return n.next},__wbg_organizedgroup_new:function(n){return ie.__wrap(n)},__wbg_prototypesetcall_de8e0d9553586985:function(n,e,t){Uint8Array.prototype.set.call(ue(n,e),t)},__wbg_set_014226dfeca53178:function(n,e,t){return n.set(e,t)},__wbg_set_6be42768c690e380:function(n,e,t){n[e]=t},__wbg_set_a80955eb93b145c6:function(n,e,t){n[e>>>0]=t},__wbg_stack_3b0d974bbf31e44f:function(n,e){const t=e.stack,i=O(t,_.__wbindgen_malloc,_.__wbindgen_realloc),s=h;Q().setInt32(n+4,s,!0),Q().setInt32(n+0,i,!0)},__wbg_suggestion_new:function(n){return Hn.__wrap(n)},__wbg_value_1e2369fab29b420e:function(n){return n.value},__wbindgen_cast_0000000000000001:function(n){return n},__wbindgen_cast_0000000000000002:function(n,e){return b(n,e)},__wbindgen_init_externref_table:function(){const n=_.__wbindgen_externrefs,e=n.grow(4);n.set(0,void 0),n.set(e+0,void 0),n.set(e+1,null),n.set(e+2,!0),n.set(e+3,!1)}}}}const Ve=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>_.__wbg_lint_free(r,1)),Ie=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>_.__wbg_linter_free(r,1)),Be=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>_.__wbg_organizedgroup_free(r,1)),Pe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>_.__wbg_span_free(r,1)),Ge=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>_.__wbg_suggestion_free(r,1));function ft(r){const n=_.__externref_table_alloc();return _.__wbindgen_externrefs.set(n,r),n}function fe(r,n){if(!(r instanceof n))throw new Error(`expected instance of ${n.name}`)}function xe(r){const n=typeof r;if(n=="number"||n=="boolean"||r==null)return`${r}`;if(n=="string")return`"${r}"`;if(n=="symbol"){const i=r.description;return i==null?"Symbol":`Symbol(${i})`}if(n=="function"){const i=r.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(r)){const i=r.length;let s="[";i>0&&(s+=xe(r[0]));for(let a=1;a<i;a++)s+=", "+xe(r[a]);return s+="]",s}const e=/\[object ([^\]]+)\]/.exec(toString.call(r));let t;if(e&&e.length>1)t=e[1];else return toString.call(r);if(t=="Object")try{return"Object("+JSON.stringify(r)+")"}catch{return"Object"}return r instanceof Error?`${r.name}: ${r.message}
${r.stack}`:t}function Pn(r,n){r=r>>>0;const e=Q(),t=[];for(let i=r;i<r+4*n;i+=4)t.push(_.__wbindgen_externrefs.get(e.getUint32(i,!0)));return _.__externref_drop_slice(r,n),t}function ue(r,n){return r=r>>>0,Wn().subarray(r/1,r/1+n)}let Un=null;function Ct(){return(Un===null||Un.byteLength===0)&&(Un=new BigUint64Array(_.memory.buffer)),Un}let vn=null;function Q(){return(vn===null||vn.buffer.detached===!0||vn.buffer.detached===void 0&&vn.buffer!==_.memory.buffer)&&(vn=new DataView(_.memory.buffer)),vn}function b(r,n){return It(r>>>0,n)}let Vn=null;function Wn(){return(Vn===null||Vn.byteLength===0)&&(Vn=new Uint8Array(_.memory.buffer)),Vn}function xn(r,n){try{return r.apply(this,n)}catch(e){const t=ft(e);_.__wbindgen_exn_store(t)}}function on(r){return r==null}function Dt(r,n){const e=n(r.length*8,8)>>>0;return Ct().set(r,e/8),h=r.length,e}function Ut(r,n){const e=n(r.length*1,1)>>>0;return Wn().set(r,e/1),h=r.length,e}function Ae(r,n){const e=n(r.length*4,4)>>>0;for(let t=0;t<r.length;t++){const i=ft(r[t]);Q().setUint32(e+4*t,i,!0)}return h=r.length,e}function O(r,n,e){if(e===void 0){const c=Gn.encode(r),g=n(c.length,1)>>>0;return Wn().subarray(g,g+c.length).set(c),h=c.length,g}let t=r.length,i=n(t,1)>>>0;const s=Wn();let a=0;for(;a<t;a++){const c=r.charCodeAt(a);if(c>127)break;s[i+a]=c}if(a!==t){a!==0&&(r=r.slice(a)),i=e(i,t,t=a+r.length*3,1)>>>0;const c=Wn().subarray(i+a,i+t),g=Gn.encodeInto(r,c);a+=g.written,i=e(i,t,a,1)>>>0}return h=a,i}function an(r){const n=_.__wbindgen_externrefs.get(r);return _.__externref_table_dealloc(r),n}let ne=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ne.decode();const Vt=2146435072;let de=0;function It(r,n){return de+=n,de>=Vt&&(ne=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),ne.decode(),de=n),ne.decode(Wn().subarray(r,r+n))}const Gn=new TextEncoder;"encodeInto"in Gn||(Gn.encodeInto=function(r,n){const e=Gn.encode(r);return n.set(e),{read:r.length,written:e.length}});let h=0,_;function ut(r,n){return _=r.exports,Un=null,vn=null,Vn=null,_.__wbindgen_start(),_}async function Bt(r,n){if(typeof Response=="function"&&r instanceof Response){if(!r.ok)throw new Error(`failed to fetch Wasm: ${r.status} ${r.statusText} fetching '${r.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,n)}catch(i){if(e(r.type)&&r.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const t=await r.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(r,n);return t instanceof WebAssembly.Instance?{instance:t,module:r}:t}function e(t){switch(t){case"basic":case"cors":case"default":return!0}return!1}}function Pt(r){if(_!==void 0)return _;r!==void 0&&(Object.getPrototypeOf(r)===Object.prototype?{module:r}=r:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const n=gt();r instanceof WebAssembly.Module||(r=new WebAssembly.Module(r));const e=new WebAssembly.Instance(r,n);return ut(e)}async function dt(r){if(_!==void 0)return _;r!==void 0&&(Object.getPrototypeOf(r)===Object.prototype?{module_or_path:r}=r:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),r===void 0&&(r=new URL);const n=gt();(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));const{instance:e}=await Bt(await r,n);return ut(e)}const Gt=Object.freeze(Object.defineProperty({__proto__:null,Dialect:lt,Language:Dn,Lint:$n,Linter:Se,OrganizedGroup:ie,Span:se,Suggestion:Hn,SuggestionKind:Mt,default:dt,get_default_lint_config:kt,get_default_lint_config_as_json:zt,initSync:Pt,setup:Rt,to_title_case:Nt},Symbol.toStringTag,{value:"Module"})),Jt=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),qt=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});class tn{static __wrap(n){const e=Object.create(tn.prototype);return e.__wbg_ptr=n,Je.register(e,e.__wbg_ptr,e),e}static __unwrap(n){return n instanceof tn?n.__destroy_into_raw():0}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Je.unregister(this),n}free(){const n=this.__destroy_into_raw();o.__wbg_lint_free(n,0)}static from_json(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v,i=o.lint_from_json(e,t);if(i[2])throw _n(i[1]);return tn.__wrap(i[0])}get_problem_text(){let n,e;try{const t=o.lint_get_problem_text(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}lint_kind(){let n,e;try{const t=o.lint_lint_kind(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}lint_kind_pretty(){let n,e;try{const t=o.lint_lint_kind_pretty(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}message(){let n,e;try{const t=o.lint_message(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}message_html(){let n,e;try{const t=o.lint_message_html(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}span(){const n=o.lint_span(this.__wbg_ptr);return mn.__wrap(n)}suggestion_count(){return o.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const n=o.lint_suggestions(this.__wbg_ptr);var e=Jn(n[0],n[1]);return o.__wbindgen_free(n[0],n[1]*4,4),e}to_json(){let n,e;try{const t=o.lint_to_json(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}}Symbol.dispose&&(tn.prototype[Symbol.dispose]=tn.prototype.free);class En{static __wrap(n){const e=Object.create(En.prototype);return e.__wbg_ptr=n,qe.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,qe.unregister(this),n}free(){const n=this.__destroy_into_raw();o.__wbg_linter_free(n,0)}apply_suggestion(n,e,t){let i,s;try{const g=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),u=v;pe(e,tn),pe(t,yn);const l=o.linter_apply_suggestion(this.__wbg_ptr,g,u,e.__wbg_ptr,t.__wbg_ptr);var a=l[0],c=l[1];if(l[3])throw a=0,c=0,_n(l[2]);return i=a,s=c,m(a,c)}finally{o.__wbindgen_free(i,s,1)}}clear_ignored_lints(){o.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){o.linter_clear_words(this.__wbg_ptr)}context_hash(n,e){const t=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),i=v;pe(e,tn);const s=o.linter_context_hash(this.__wbg_ptr,t,i,e.__wbg_ptr);return BigInt.asUintN(64,s)}export_ignored_lints(){let n,e;try{const t=o.linter_export_ignored_lints(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}export_words(){const n=o.linter_export_words(this.__wbg_ptr);var e=Jn(n[0],n[1]);return o.__wbindgen_free(n[0],n[1]*4,4),e}generate_stats_file(){let n,e;try{const t=o.linter_generate_stats_file(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}get_dialect(){return o.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let n,e;try{const t=o.linter_get_lint_config_as_json(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}get_lint_config_as_object(){return o.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let n,e;try{const t=o.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}get_lint_descriptions_as_object(){return o.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let n,e;try{const t=o.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}get_lint_descriptions_html_as_object(){return o.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let n,e;try{const t=o.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}get_structured_lint_config_as_object(){return o.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(n){const e=nr(n,o.__wbindgen_malloc),t=v;o.linter_ignore_hashes(this.__wbg_ptr,e,t)}ignore_lints(n,e){const t=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),i=v,s=We(e,o.__wbindgen_malloc),a=v;o.linter_ignore_lints(this.__wbg_ptr,t,i,s,a)}import_ignored_lints(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v,i=o.linter_import_ignored_lints(this.__wbg_ptr,e,t);if(i[1])throw _n(i[0])}import_stats_file(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v,i=o.linter_import_stats_file(this.__wbg_ptr,e,t);if(i[1])throw _n(i[0])}import_weirpack(n){const e=er(n,o.__wbindgen_malloc),t=v,i=o.linter_import_weirpack(this.__wbg_ptr,e,t);if(i[2])throw _n(i[1]);return _n(i[0])}import_words(n){const e=We(n,o.__wbindgen_malloc),t=v;o.linter_import_words(this.__wbg_ptr,e,t)}is_likely_english(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v;return o.linter_is_likely_english(this.__wbg_ptr,e,t)!==0}isolate_english(n){let e,t;try{const i=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),s=v,a=o.linter_isolate_english(this.__wbg_ptr,i,s);return e=a[0],t=a[1],m(a[0],a[1])}finally{o.__wbindgen_free(e,t,1)}}lint(n,e,t,i,s,a){const c=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),g=v;var u=ln(i)?0:F(i,o.__wbindgen_malloc,o.__wbindgen_realloc),l=v;const f=o.linter_lint(this.__wbg_ptr,c,g,e,t,u,l,s,a);var d=Jn(f[0],f[1]);return o.__wbindgen_free(f[0],f[1]*4,4),d}static new(n){const e=o.linter_new(n);return En.__wrap(e)}organized_lints(n,e,t,i,s,a){const c=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),g=v;var u=ln(i)?0:F(i,o.__wbindgen_malloc,o.__wbindgen_realloc),l=v;const f=o.linter_organized_lints(this.__wbg_ptr,c,g,e,t,u,l,s,a);var d=Jn(f[0],f[1]);return o.__wbindgen_free(f[0],f[1]*4,4),d}set_lint_config_from_json(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v,i=o.linter_set_lint_config_from_json(this.__wbg_ptr,e,t);if(i[1])throw _n(i[0])}set_lint_config_from_object(n){const e=o.linter_set_lint_config_from_object(this.__wbg_ptr,n);if(e[1])throw _n(e[0])}summarize_stats(n,e){return o.linter_summarize_stats(this.__wbg_ptr,!ln(n),ln(n)?BigInt(0):n,!ln(e),ln(e)?BigInt(0):e)}}Symbol.dispose&&(En.prototype[Symbol.dispose]=En.prototype.free);class On{static __wrap(n){const e=Object.create(On.prototype);return e.__wbg_ptr=n,He.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,He.unregister(this),n}free(){const n=this.__destroy_into_raw();o.__wbg_organizedgroup_free(n,0)}get group(){let n,e;try{const t=o.__wbg_get_organizedgroup_group(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}get lints(){const n=o.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var e=Jn(n[0],n[1]);return o.__wbindgen_free(n[0],n[1]*4,4),e}set group(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v;o.__wbg_set_organizedgroup_group(this.__wbg_ptr,e,t)}set lints(n){const e=We(n,o.__wbindgen_malloc),t=v;o.__wbg_set_organizedgroup_lints(this.__wbg_ptr,e,t)}}Symbol.dispose&&(On.prototype[Symbol.dispose]=On.prototype.free);class mn{static __wrap(n){const e=Object.create(mn.prototype);return e.__wbg_ptr=n,Ke.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Ke.unregister(this),n}free(){const n=this.__destroy_into_raw();o.__wbg_span_free(n,0)}get end(){return o.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return o.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(n){o.__wbg_set_span_end(this.__wbg_ptr,n)}set start(n){o.__wbg_set_span_start(this.__wbg_ptr,n)}static from_json(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v,i=o.span_from_json(e,t);if(i[2])throw _n(i[1]);return mn.__wrap(i[0])}is_empty(){return o.span_is_empty(this.__wbg_ptr)!==0}len(){return o.span_len(this.__wbg_ptr)>>>0}static new(n,e){const t=o.span_new(n,e);return mn.__wrap(t)}to_json(){let n,e;try{const t=o.span_to_json(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}}Symbol.dispose&&(mn.prototype[Symbol.dispose]=mn.prototype.free);class yn{static __wrap(n){const e=Object.create(yn.prototype);return e.__wbg_ptr=n,Qe.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Qe.unregister(this),n}free(){const n=this.__destroy_into_raw();o.__wbg_suggestion_free(n,0)}static from_json(n){const e=F(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=v,i=o.suggestion_from_json(e,t);if(i[2])throw _n(i[1]);return yn.__wrap(i[0])}get_replacement_text(){let n,e;try{const t=o.suggestion_get_replacement_text(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}kind(){return o.suggestion_kind(this.__wbg_ptr)}to_json(){let n,e;try{const t=o.suggestion_to_json(this.__wbg_ptr);return n=t[0],e=t[1],m(t[0],t[1])}finally{o.__wbindgen_free(n,e,1)}}}Symbol.dispose&&(yn.prototype[Symbol.dispose]=yn.prototype.free);const Ht=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function Kt(){return o.get_default_lint_config()}function Qt(){let r,n;try{const e=o.get_default_lint_config_as_json();return r=e[0],n=e[1],m(e[0],e[1])}finally{o.__wbindgen_free(r,n,1)}}function Yt(){o.setup()}function Xt(r){let n,e;try{const t=F(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=v,s=o.to_title_case(t,i);return n=s[0],e=s[1],m(s[0],s[1])}finally{o.__wbindgen_free(n,e,1)}}function pt(){return{__proto__:null,"./harper_wasm_bg.js":{__proto__:null,__wbg_Error_408e67f47ca7b58b:function(n,e){return Error(m(n,e))},__wbg_String_8564e559799eccda:function(n,e){const t=String(e),i=F(t,o.__wbindgen_malloc,o.__wbindgen_realloc),s=v;Y().setInt32(n+4,s,!0),Y().setInt32(n+0,i,!0)},__wbg___wbindgen_boolean_get_c9c83ebd41b34df3:function(n){const e=n,t=typeof e=="boolean"?e:void 0;return ln(t)?16777215:t?1:0},__wbg___wbindgen_debug_string_a57024b9c6e4a48b:function(n,e){const t=Le(e),i=F(t,o.__wbindgen_malloc,o.__wbindgen_realloc),s=v;Y().setInt32(n+4,s,!0),Y().setInt32(n+0,i,!0)},__wbg___wbindgen_is_function_5e4570eb24ffa122:function(n){return typeof n=="function"},__wbg___wbindgen_is_object_a2790eb24c211ea0:function(n){const e=n;return typeof e=="object"&&e!==null},__wbg___wbindgen_is_string_e6f02f0ea5f20a32:function(n){return typeof n=="string"},__wbg___wbindgen_jsval_loose_eq_acf2776254a8d832:function(n,e){return n==e},__wbg___wbindgen_number_get_136b9679cab35cfb:function(n,e){const t=e,i=typeof t=="number"?t:void 0;Y().setFloat64(n+8,ln(i)?0:i,!0),Y().setInt32(n+0,!ln(i),!0)},__wbg___wbindgen_string_get_d154f1e671052120:function(n,e){const t=e,i=typeof t=="string"?t:void 0;var s=ln(i)?0:F(i,o.__wbindgen_malloc,o.__wbindgen_realloc),a=v;Y().setInt32(n+4,a,!0),Y().setInt32(n+0,s,!0)},__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,e){throw new Error(m(n,e))},__wbg_call_1c5886ab9c57d1c7:function(){return An(function(n,e){return n.call(e)},arguments)},__wbg_done_669171204c3dcae2:function(n){return n.done},__wbg_entries_7774d489e1da5f4f:function(n){return Object.entries(n)},__wbg_error_757e9472f8410341:function(n,e){let t,i;try{t=n,i=e,console.error(m(n,e))}finally{o.__wbindgen_free(t,i,1)}},__wbg_getRandomValues_a608c4436c19407a:function(){return An(function(n,e){globalThis.crypto.getRandomValues(we(n,e))},arguments)},__wbg_getRandomValues_e446ea5ffdd14ee5:function(){return An(function(n,e){globalThis.crypto.getRandomValues(we(n,e))},arguments)},__wbg_getTime_63fb0332e6c4ec17:function(n){return n.getTime()},__wbg_get_c0c8f8d7da0c03dd:function(n,e){return n[e>>>0]},__wbg_get_d173c0308df22d37:function(){return An(function(n,e){return Reflect.get(n,e)},arguments)},__wbg_get_unchecked_e20b893aeafc3fca:function(n,e){return n[e>>>0]},__wbg_instanceof_ArrayBuffer_993d02d2d254cad1:function(n){let e;try{e=n instanceof ArrayBuffer}catch{e=!1}return e},__wbg_instanceof_Uint8Array_f935dbb0aa7cdeed:function(n){let e;try{e=n instanceof Uint8Array}catch{e=!1}return e},__wbg_iterator_5cebbb86e33c6dd6:function(){return Symbol.iterator},__wbg_length_36bd29c6848c2144:function(n){return n.length},__wbg_length_ecfa2c63d3d0d82c:function(n){return n.length},__wbg_lint_new:function(n){return tn.__wrap(n)},__wbg_lint_unwrap:function(n){return tn.__unwrap(n)},__wbg_log_1f8cbb01c83d06c2:function(n,e,t,i,s,a,c,g){let u,l;try{u=n,l=e,console.log(m(n,e),m(t,i),m(s,a),m(c,g))}finally{o.__wbindgen_free(u,l,1)}},__wbg_log_a54ca6b45e09078a:function(n,e){let t,i;try{t=n,i=e,console.log(m(n,e))}finally{o.__wbindgen_free(t,i,1)}},__wbg_mark_6b7f03786f5e4d61:function(n,e){performance.mark(m(n,e))},__wbg_measure_0e21b33a1c6e3a29:function(){return An(function(n,e,t,i){let s,a,c,g;try{s=n,a=e,c=t,g=i,performance.measure(m(n,e),m(t,i))}finally{o.__wbindgen_free(s,a,1),o.__wbindgen_free(c,g,1)}},arguments)},__wbg_new_0_f117d868b403dc07:function(){return new Date},__wbg_new_116be93542d39019:function(){return new Array},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_77cc4f4f472aeb81:function(n){return new Uint8Array(n)},__wbg_new_cdf041679ded4c5f:function(){return new Map},__wbg_new_ebe3e0f6837f0879:function(){return new Object},__wbg_next_42cf16ee0dafc9e2:function(){return An(function(n){return n.next()},arguments)},__wbg_next_8f26b64fa5e9f64b:function(n){return n.next},__wbg_organizedgroup_new:function(n){return On.__wrap(n)},__wbg_prototypesetcall_de8e0d9553586985:function(n,e,t){Uint8Array.prototype.set.call(we(n,e),t)},__wbg_set_014226dfeca53178:function(n,e,t){return n.set(e,t)},__wbg_set_6be42768c690e380:function(n,e,t){n[e]=t},__wbg_set_a80955eb93b145c6:function(n,e,t){n[e>>>0]=t},__wbg_stack_3b0d974bbf31e44f:function(n,e){const t=e.stack,i=F(t,o.__wbindgen_malloc,o.__wbindgen_realloc),s=v;Y().setInt32(n+4,s,!0),Y().setInt32(n+0,i,!0)},__wbg_suggestion_new:function(n){return yn.__wrap(n)},__wbg_value_1e2369fab29b420e:function(n){return n.value},__wbindgen_cast_0000000000000001:function(n){return n},__wbindgen_cast_0000000000000002:function(n,e){return m(n,e)},__wbindgen_init_externref_table:function(){const n=o.__wbindgen_externrefs,e=n.grow(4);n.set(0,void 0),n.set(e+0,void 0),n.set(e+1,null),n.set(e+2,!0),n.set(e+3,!1)}}}}const Je=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>o.__wbg_lint_free(r,1)),qe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>o.__wbg_linter_free(r,1)),He=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>o.__wbg_organizedgroup_free(r,1)),Ke=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>o.__wbg_span_free(r,1)),Qe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>o.__wbg_suggestion_free(r,1));function wt(r){const n=o.__externref_table_alloc();return o.__wbindgen_externrefs.set(n,r),n}function pe(r,n){if(!(r instanceof n))throw new Error(`expected instance of ${n.name}`)}function Le(r){const n=typeof r;if(n=="number"||n=="boolean"||r==null)return`${r}`;if(n=="string")return`"${r}"`;if(n=="symbol"){const i=r.description;return i==null?"Symbol":`Symbol(${i})`}if(n=="function"){const i=r.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(r)){const i=r.length;let s="[";i>0&&(s+=Le(r[0]));for(let a=1;a<i;a++)s+=", "+Le(r[a]);return s+="]",s}const e=/\[object ([^\]]+)\]/.exec(toString.call(r));let t;if(e&&e.length>1)t=e[1];else return toString.call(r);if(t=="Object")try{return"Object("+JSON.stringify(r)+")"}catch{return"Object"}return r instanceof Error?`${r.name}: ${r.message}
${r.stack}`:t}function Jn(r,n){r=r>>>0;const e=Y(),t=[];for(let i=r;i<r+4*n;i+=4)t.push(o.__wbindgen_externrefs.get(e.getUint32(i,!0)));return o.__externref_drop_slice(r,n),t}function we(r,n){return r=r>>>0,Tn().subarray(r/1,r/1+n)}let In=null;function Zt(){return(In===null||In.byteLength===0)&&(In=new BigUint64Array(o.memory.buffer)),In}let Sn=null;function Y(){return(Sn===null||Sn.buffer.detached===!0||Sn.buffer.detached===void 0&&Sn.buffer!==o.memory.buffer)&&(Sn=new DataView(o.memory.buffer)),Sn}function m(r,n){return rr(r>>>0,n)}let Bn=null;function Tn(){return(Bn===null||Bn.byteLength===0)&&(Bn=new Uint8Array(o.memory.buffer)),Bn}function An(r,n){try{return r.apply(this,n)}catch(e){const t=wt(e);o.__wbindgen_exn_store(t)}}function ln(r){return r==null}function nr(r,n){const e=n(r.length*8,8)>>>0;return Zt().set(r,e/8),v=r.length,e}function er(r,n){const e=n(r.length*1,1)>>>0;return Tn().set(r,e/1),v=r.length,e}function We(r,n){const e=n(r.length*4,4)>>>0;for(let t=0;t<r.length;t++){const i=wt(r[t]);Y().setUint32(e+4*t,i,!0)}return v=r.length,e}function F(r,n,e){if(e===void 0){const c=qn.encode(r),g=n(c.length,1)>>>0;return Tn().subarray(g,g+c.length).set(c),v=c.length,g}let t=r.length,i=n(t,1)>>>0;const s=Tn();let a=0;for(;a<t;a++){const c=r.charCodeAt(a);if(c>127)break;s[i+a]=c}if(a!==t){a!==0&&(r=r.slice(a)),i=e(i,t,t=a+r.length*3,1)>>>0;const c=Tn().subarray(i+a,i+t),g=qn.encodeInto(r,c);a+=g.written,i=e(i,t,a,1)>>>0}return v=a,i}function _n(r){const n=o.__wbindgen_externrefs.get(r);return o.__externref_table_dealloc(r),n}let ee=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ee.decode();const tr=2146435072;let be=0;function rr(r,n){return be+=n,be>=tr&&(ee=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),ee.decode(),be=n),ee.decode(Tn().subarray(r,r+n))}const qn=new TextEncoder;"encodeInto"in qn||(qn.encodeInto=function(r,n){const e=qn.encode(r);return n.set(e),{read:r.length,written:e.length}});let v=0,o;function bt(r,n){return o=r.exports,In=null,Sn=null,Bn=null,o.__wbindgen_start(),o}async function ir(r,n){if(typeof Response=="function"&&r instanceof Response){if(!r.ok)throw new Error(`failed to fetch Wasm: ${r.status} ${r.statusText} fetching '${r.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,n)}catch(i){if(e(r.type)&&r.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const t=await r.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(r,n);return t instanceof WebAssembly.Instance?{instance:t,module:r}:t}function e(t){switch(t){case"basic":case"cors":case"default":return!0}return!1}}function sr(r){if(o!==void 0)return o;r!==void 0&&(Object.getPrototypeOf(r)===Object.prototype?{module:r}=r:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const n=pt();r instanceof WebAssembly.Module||(r=new WebAssembly.Module(r));const e=new WebAssembly.Instance(r,n);return bt(e)}async function ar(r){if(o!==void 0)return o;r!==void 0&&(Object.getPrototypeOf(r)===Object.prototype?{module_or_path:r}=r:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),r===void 0&&(r=new URL);const n=pt();(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));const{instance:e}=await ir(await r,n);return bt(e)}const _r=Object.freeze(Object.defineProperty({__proto__:null,Dialect:Jt,Language:qt,Lint:tn,Linter:En,OrganizedGroup:On,Span:mn,Suggestion:yn,SuggestionKind:Ht,default:ar,get_default_lint_config:Kt,get_default_lint_config_as_json:Qt,initSync:sr,setup:Yt,to_title_case:Xt},Symbol.toStringTag,{value:"Module"})),or=class te extends Promise{constructor(n){super(e=>{e()}),Ue(this,Ln),Ue(this,Z),Yn(this,Ln,n)}static from(n){return new te(e=>{e(n())})}static resolve(n){return new te(e=>{e(n)})}static reject(n){return new te((e,t)=>{t(n)})}then(n,e){return dn(this,Z)??Yn(this,Z,new Promise(dn(this,Ln))),dn(this,Z).then(n,e)}catch(n){return dn(this,Z)??Yn(this,Z,new Promise(dn(this,Ln))),dn(this,Z).catch(n)}finally(n){return dn(this,Z)??Yn(this,Z,new Promise(dn(this,Ln))),dn(this,Z).finally(n)}};Ln=new WeakMap;Z=new WeakMap;let Ne=or;const lr=(r,n,e,t)=>{if(e==="length"||e==="prototype"||e==="arguments"||e==="caller")return;const i=Object.getOwnPropertyDescriptor(r,e),s=Object.getOwnPropertyDescriptor(n,e);!cr(i,s)&&t||Object.defineProperty(r,e,s)},cr=function(r,n){return r===void 0||r.configurable||r.writable===n.writable&&r.enumerable===n.enumerable&&r.configurable===n.configurable&&(r.writable||r.value===n.value)},gr=(r,n)=>{const e=Object.getPrototypeOf(n);e!==Object.getPrototypeOf(r)&&Object.setPrototypeOf(r,e)},fr=(r,n)=>`/* Wrapped ${r}*/
${n}`,ur=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),dr=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),pr=(r,n,e)=>{const t=e===""?"":`with ${e.trim()}() `,i=fr.bind(null,t,n.toString());Object.defineProperty(i,"name",dr),Object.defineProperty(r,"toString",{...ur,value:i})};function wr(r,n,{ignoreNonConfigurable:e=!1}={}){const{name:t}=r;for(const i of Reflect.ownKeys(n))lr(r,n,i,e);return gr(r,n),pr(r,n,t),r}const br=new WeakMap;function Ye(r,{cacheKey:n=([t])=>t,cache:e=new Map}={}){const t=new Map,i=function(...s){const a=n(s);if(t.has(a))return t.get(a);const c=(async()=>{try{if(e&&await e.has(a))return await e.get(a);const u=await r.apply(this,s);try{return u}finally{e&&await e.set(a,u)}}finally{t.delete(a)}})();return t.set(a,c),c};return wr(i,r,{ignoreNonConfigurable:!0}),br.set(i,e),i}function mt(r){return r.includes("harper_wasm_slim")?"slim":"full"}function mr(r){return r.glueFlavor??mt(typeof r.url=="string"?r.url:r.url.href)}function yr(r){return r==="slim"?Gt:_r}function hr(r,n){return n==="slim"?r:r.includes("harper_wasm_bg.wasm")?r.replace("harper_wasm_bg.wasm","harper_wasm_slim_bg.wasm"):null}function Xe(r){return typeof process<"u"&&r.startsWith("file://")?Et(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url).then(n=>new Promise((e,t)=>{n.readFile(new URL(r).pathname,(i,s)=>{i&&t(i),e(s)})})):r}async function Ze(r,n){const e=yr(n),t=hr(r,n);if(t!=null)try{await dt({module_or_path:Xe(t)})}catch(i){if(n==="slim")throw i}return await e.default({module_or_path:Xe(r)}),e}const vr={full:Ye(r=>Ze(r,"full")),slim:Ye(r=>Ze(r,"slim"))};function yt(r,n){return vr[n](r)}function Xr(r,n){return ht.create(r,n)}class ht{constructor(){ge(this,"url",""),ge(this,"glueFlavor","full"),ge(this,"inner",null)}static create(n,e){const t=new Sr;return t.url=n,t.glueFlavor=e??mt(typeof n=="string"?n:n.href),t.inner=Ne.from(()=>yt(typeof t.url=="string"?t.url:t.url.href,t.glueFlavor)),t}async getDefaultLintConfigAsJSON(){return(await this.inner).get_default_lint_config_as_json()}async getDefaultLintConfig(){return(await this.inner).get_default_lint_config()}async toTitleCase(n){return(await this.inner).to_title_case(n)}async setup(){(await this.inner).setup()}}class Sr extends ht{async createLinter(n){return(await this.getBinaryModule()).Linter.new(n??lt.American)}async getBinaryModule(){return await Ne.from(()=>yt(typeof this.url=="string"?this.url:this.url.href,this.glueFlavor))}}var $r=Object.defineProperty,jr=(r,n,e)=>n in r?$r(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,nn=(r,n,e)=>jr(r,typeof n!="symbol"?n+"":n,e);function xr(r){switch(r){case"plaintext":return Dn.Plain;case"typst":return Dn.Typst;case"markdown":case void 0:return Dn.Markdown;default:return console.warn(`Unknown Harper language '${String(r)}'; using markdown.`),Dn.Markdown}}function nt(r,n){return[r,xr(n==null?void 0:n.language),(n==null?void 0:n.forceAllHeadings)??!1,n==null?void 0:n.regex_mask,(n==null?void 0:n.dedup)??!0,(n==null?void 0:n.isolateEnglish)??!1]}class Zr{constructor(n){nn(this,"binary"),nn(this,"inner"),nn(this,"disposed",!1),this.binary=n.binary,this.binary.setup(),this.inner=this.createInner(n.dialect)}createInner(n){return Ne.from(async()=>(await this.binary.setup(),this.binary.createLinter(n)))}async setup(){await this.lint("",{language:"plaintext"});const n=await this.exportIgnoredLints();await this.importIgnoredLints(n)}async lint(n,e){return(await this.inner).lint(...nt(n,e))}async organizedLints(n,e){const i=(await this.inner).organized_lints(...nt(n,e)),s={};for(const a of i)s[a.group]=a.lints,a.free();return s}async applySuggestion(n,e,t){return(await this.inner).apply_suggestion(n,e,t)}async isLikelyEnglish(n){return(await this.inner).is_likely_english(n)}async isolateEnglish(n){return(await this.inner).isolate_english(n)}async getLintConfig(){return(await this.inner).get_lint_config_as_object()}async getDefaultLintConfigAsJSON(){return await this.binary.getDefaultLintConfigAsJSON()}async getDefaultLintConfig(){return await this.binary.getDefaultLintConfig()}async getStructuredLintConfig(){return(await this.inner).get_structured_lint_config_as_object()}async getStructuredLintConfigJSON(){return(await this.inner).get_structured_lint_config_as_json()}async setLintConfig(n){(await this.inner).set_lint_config_from_object(n)}async getLintConfigAsJSON(){return(await this.inner).get_lint_config_as_json()}async setLintConfigWithJSON(n){(await this.inner).set_lint_config_from_json(n)}async toTitleCase(n){return await this.binary.toTitleCase(n)}async getLintDescriptions(){return(await this.inner).get_lint_descriptions_as_object()}async getLintDescriptionsAsJSON(){return(await this.inner).get_lint_descriptions_as_json()}async getLintDescriptionsHTML(){return(await this.inner).get_lint_descriptions_html_as_object()}async getLintDescriptionsHTMLAsJSON(){return(await this.inner).get_lint_descriptions_html_as_json()}async ignoreLint(n,e){return await this.ignoreLints(n,[e])}async ignoreLints(n,e){(await this.inner).ignore_lints(n,e)}async ignoreLintHash(n){(await this.inner).ignore_hashes(new BigUint64Array([n]))}async exportIgnoredLints(){return(await this.inner).export_ignored_lints()}async importIgnoredLints(n){(await this.inner).import_ignored_lints(n)}async contextHash(n,e){return(await this.inner).context_hash(n,e)}async clearIgnoredLints(){(await this.inner).clear_ignored_lints()}async clearWords(){return(await this.inner).clear_words()}async importWords(n){return(await this.inner).import_words(n)}async exportWords(){return(await this.inner).export_words()}async getDialect(){return(await this.inner).get_dialect()}async setDialect(n){const e=await this.inner;return e.get_dialect()!==n&&(e.free(),this.inner=this.createInner(n)),Promise.resolve()}async summarizeStats(n,e){return(await this.inner).summarize_stats(n,e)}async generateStatsFile(){return(await this.inner).generate_stats_file()}async importStatsFile(n){return(await this.inner).import_stats_file(n)}async loadWeirpackFromBlob(n){const e=new Uint8Array(await n.arrayBuffer());return this.loadWeirpackFromBytes(e)}async loadWeirpackFromBytes(n){const e=await this.inner,t=n instanceof Uint8Array?n:Uint8Array.from(n);return e.import_weirpack(t)}async dispose(){if(this.disposed)return;this.disposed=!0,(await this.inner).free()}}function Ar(r,n){if(!r)throw new Error("Assertion failed")}class Lr{constructor(n){nn(this,"binary"),this.binary=n,this.binary.setup()}async serializeArg(n){var e;const{Lint:t,Span:i,Suggestion:s}=await this.binary.getBinaryModule();if(Array.isArray(n))return{json:JSON.stringify(await Promise.all(n.map(c=>this.serializeArg(c)))),type:"Array"};const a=typeof n;switch(a){case"string":case"number":case"boolean":case"undefined":return{json:JSON.stringify(n),type:a};case"bigint":return{json:n.toString(),type:a}}if(n.to_json!==void 0){const c=n.to_json();let g;const u=(e=n.constructor)==null?void 0:e.name;if(n instanceof t||u==="Lint"?g="Lint":n instanceof s||u==="Suggestion"?g="Suggestion":(n instanceof i||u==="Span")&&(g="Span"),g===void 0)throw new Error("Unhandled case: type undefined");return{json:c,type:g}}if(a=="object")return{json:JSON.stringify(await Promise.all(Object.entries(n).map(([c,g])=>this.serializeArg([c,g])))),type:"object"};throw new Error(`Unhandled case: ${n}`)}async serialize(n){return{procName:n.procName,args:await Promise.all(n.args.map(e=>this.serializeArg(e)))}}async deserializeArg(n){const{Lint:e,Span:t,Suggestion:i}=await this.binary.getBinaryModule();switch(n.type){case"bigint":return BigInt(n.json);case"undefined":return;case"boolean":case"number":case"string":return JSON.parse(n.json);case"Suggestion":return i.from_json(n.json);case"Lint":return e.from_json(n.json);case"Span":return t.from_json(n.json);case"Array":{const s=JSON.parse(n.json);return Ar(Array.isArray(s)),await Promise.all(s.map(a=>this.deserializeArg(a)))}case"object":{const s=JSON.parse(n.json);return Object.fromEntries(await Promise.all(s.map(a=>this.deserializeArg(a))))}default:throw new Error(`Unhandled case: ${n.type}`)}}async deserialize(n){return{procName:n.procName,args:await Promise.all(n.args.map(e=>this.deserializeArg(e)))}}}const vt=`var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _executor, _promise;
const Dialect$1 = Object.freeze({
  American: 0,
  "0": "American",
  British: 1,
  "1": "British",
  Australian: 2,
  "2": "Australian",
  Canadian: 3,
  "3": "Canadian",
  Indian: 4,
  "4": "Indian"
});
const Language$1 = Object.freeze({
  Plain: 0,
  "0": "Plain",
  Markdown: 1,
  "1": "Markdown",
  Typst: 2,
  "2": "Typst"
});
let Lint$1 = class Lint {
  static __wrap(ptr) {
    const obj = Object.create(Lint.prototype);
    obj.__wbg_ptr = ptr;
    LintFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof Lint)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LintFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_lint_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Lint}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.lint_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Lint.__wrap(ret[0]);
  }
  /**
   * Get the content of the source material pointed to by [\`Self::span\`]
   * @returns {string}
   */
  get_problem_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_get_problem_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_lint_kind(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind_pretty() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_lint_kind_pretty(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error.
   * @returns {string}
   */
  message() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_message(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error as HTML.
   * @returns {string}
   */
  message_html() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_message_html(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the location of the problematic text.
   * @returns {Span}
   */
  span() {
    const ret = wasm$1.lint_span(this.__wbg_ptr);
    return Span$1.__wrap(ret);
  }
  /**
   * Equivalent to calling \`.length\` on the result of \`suggestions()\`.
   * @returns {number}
   */
  suggestion_count() {
    const ret = wasm$1.lint_suggestion_count(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Get an array of any suggestions that may resolve the issue.
   * @returns {Suggestion[]}
   */
  suggestions() {
    const ret = wasm$1.lint_suggestions(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Lint$1.prototype[Symbol.dispose] = Lint$1.prototype.free;
let Linter$1 = class Linter {
  static __wrap(ptr) {
    const obj = Object.create(Linter.prototype);
    obj.__wbg_ptr = ptr;
    LinterFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LinterFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_linter_free(ptr, 0);
  }
  /**
   * Apply a suggestion from a given lint.
   * This action will be logged to the Linter's statistics.
   * @param {string} source_text
   * @param {Lint} lint
   * @param {Suggestion} suggestion
   * @returns {string}
   */
  apply_suggestion(source_text, lint, suggestion) {
    let deferred3_0;
    let deferred3_1;
    try {
      const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN$1;
      _assertClass$1(lint, Lint$1);
      _assertClass$1(suggestion, Suggestion$1);
      const ret = wasm$1.linter_apply_suggestion(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr, suggestion.__wbg_ptr);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0$1(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0$1(ptr2, len2);
    } finally {
      wasm$1.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  clear_ignored_lints() {
    wasm$1.linter_clear_ignored_lints(this.__wbg_ptr);
  }
  /**
   * Clear the user dictionary.
   */
  clear_words() {
    wasm$1.linter_clear_words(this.__wbg_ptr);
  }
  /**
   * Compute the context hash of a given lint.
   * @param {string} source_text
   * @param {Lint} lint
   * @returns {bigint}
   */
  context_hash(source_text, lint) {
    const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    _assertClass$1(lint, Lint$1);
    const ret = wasm$1.linter_context_hash(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * Export the linter's ignored lints as a privacy-respecting JSON list of hashes.
   * @returns {string}
   */
  export_ignored_lints() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_export_ignored_lints(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Export words from the dictionary.
   * Note: this will only return words previously added by [\`Self::import_words\`].
   * @returns {string[]}
   */
  export_words() {
    const ret = wasm$1.linter_export_words(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  generate_stats_file() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_generate_stats_file(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the dialect this struct was constructed for.
   * @returns {Dialect}
   */
  get_dialect() {
    const ret = wasm$1.linter_get_dialect(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_lint_config_as_object() {
    const ret = wasm$1.linter_get_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {string}
   */
  get_lint_descriptions_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_descriptions_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {any}
   */
  get_lint_descriptions_as_object() {
    const ret = wasm$1.linter_get_lint_descriptions_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {string}
   */
  get_lint_descriptions_html_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {any}
   */
  get_lint_descriptions_html_as_object() {
    const ret = wasm$1.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_structured_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_structured_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_structured_lint_config_as_object() {
    const ret = wasm$1.linter_get_structured_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Add a specific context hash to the ignored lints list.
   * @param {BigUint64Array} hashes
   */
  ignore_hashes(hashes) {
    const ptr0 = passArray64ToWasm0$1(hashes, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.linter_ignore_hashes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {string} source_text
   * @param {Lint[]} lints
   */
  ignore_lints(source_text, lints) {
    const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ptr1 = passArrayJsValueToWasm0$1(lints, wasm$1.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN$1;
    wasm$1.linter_ignore_lints(this.__wbg_ptr, ptr0, len0, ptr1, len1);
  }
  /**
   * Import into the linter's ignored lints from a privacy-respecting JSON list of hashes.
   * @param {string} json
   */
  import_ignored_lints(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_ignored_lints(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {string} file
   */
  import_stats_file(file) {
    const ptr0 = passStringToWasm0$1(file, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_stats_file(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * Load a Weirpack from raw bytes, merging its rules into the current linter.
   * Returns test failures if any are found, and does not import in that case.
   * @param {Uint8Array} bytes
   * @returns {any}
   */
  import_weirpack(bytes) {
    const ptr0 = passArray8ToWasm0$1(bytes, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_weirpack(this.__wbg_ptr, ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return takeFromExternrefTable0$1(ret[0]);
  }
  /**
   * Import words into the dictionary.
   * @param {string[]} additional_words
   */
  import_words(additional_words) {
    const ptr0 = passArrayJsValueToWasm0$1(additional_words, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.linter_import_words(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Helper method to quickly check if a plain string is likely intended to be English
   * @param {string} text
   * @returns {boolean}
   */
  is_likely_english(text) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_is_likely_english(this.__wbg_ptr, ptr0, len0);
    return ret !== 0;
  }
  /**
   * Helper method to remove non-English text from a plain English document.
   * @param {string} text
   * @returns {string}
   */
  isolate_english(text) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN$1;
      const ret = wasm$1.linter_isolate_english(this.__wbg_ptr, ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Perform the configured linting on the provided text.
   *
   * If the provided regex mask cannot be parsed, this method will return an empty array.
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {Lint[]}
   */
  lint(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    var ptr1 = isLikeNone$1(regex_mask) ? 0 : passStringToWasm0$1(regex_mask, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_lint(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * Construct a new \`Linter\`.
   * Note that this can mean constructing the curated dictionary, which is the most expensive operation
   * in Harper.
   * @param {Dialect} dialect
   * @returns {Linter}
   */
  static new(dialect) {
    const ret = wasm$1.linter_new(dialect);
    return Linter.__wrap(ret);
  }
  /**
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {OrganizedGroup[]}
   */
  organized_lints(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    var ptr1 = isLikeNone$1(regex_mask) ? 0 : passStringToWasm0$1(regex_mask, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_organized_lints(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * @param {string} json
   */
  set_lint_config_from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_set_lint_config_from_json(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {any} object
   */
  set_lint_config_from_object(object) {
    const ret = wasm$1.linter_set_lint_config_from_object(this.__wbg_ptr, object);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {bigint | null} [start_time]
   * @param {bigint | null} [end_time]
   * @returns {any}
   */
  summarize_stats(start_time, end_time) {
    const ret = wasm$1.linter_summarize_stats(this.__wbg_ptr, !isLikeNone$1(start_time), isLikeNone$1(start_time) ? BigInt(0) : start_time, !isLikeNone$1(end_time), isLikeNone$1(end_time) ? BigInt(0) : end_time);
    return ret;
  }
};
if (Symbol.dispose) Linter$1.prototype[Symbol.dispose] = Linter$1.prototype.free;
let OrganizedGroup$1 = class OrganizedGroup {
  static __wrap(ptr) {
    const obj = Object.create(OrganizedGroup.prototype);
    obj.__wbg_ptr = ptr;
    OrganizedGroupFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OrganizedGroupFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_organizedgroup_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get group() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.__wbg_get_organizedgroup_group(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {Lint[]}
   */
  get lints() {
    const ret = wasm$1.__wbg_get_organizedgroup_lints(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {string} arg0
   */
  set group(arg0) {
    const ptr0 = passStringToWasm0$1(arg0, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.__wbg_set_organizedgroup_group(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {Lint[]} arg0
   */
  set lints(arg0) {
    const ptr0 = passArrayJsValueToWasm0$1(arg0, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.__wbg_set_organizedgroup_lints(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) OrganizedGroup$1.prototype[Symbol.dispose] = OrganizedGroup$1.prototype.free;
let Span$1 = class Span {
  static __wrap(ptr) {
    const obj = Object.create(Span.prototype);
    obj.__wbg_ptr = ptr;
    SpanFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SpanFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_span_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get end() {
    const ret = wasm$1.__wbg_get_span_end(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  get start() {
    const ret = wasm$1.__wbg_get_span_start(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set end(arg0) {
    wasm$1.__wbg_set_span_end(this.__wbg_ptr, arg0);
  }
  /**
   * @param {number} arg0
   */
  set start(arg0) {
    wasm$1.__wbg_set_span_start(this.__wbg_ptr, arg0);
  }
  /**
   * @param {string} json
   * @returns {Span}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.span_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Span.__wrap(ret[0]);
  }
  /**
   * @returns {boolean}
   */
  is_empty() {
    const ret = wasm$1.span_is_empty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  len() {
    const ret = wasm$1.span_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} start
   * @param {number} end
   * @returns {Span}
   */
  static new(start, end) {
    const ret = wasm$1.span_new(start, end);
    return Span.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.span_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Span$1.prototype[Symbol.dispose] = Span$1.prototype.free;
let Suggestion$1 = class Suggestion {
  static __wrap(ptr) {
    const obj = Object.create(Suggestion.prototype);
    obj.__wbg_ptr = ptr;
    SuggestionFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SuggestionFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_suggestion_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Suggestion}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.suggestion_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Suggestion.__wrap(ret[0]);
  }
  /**
   * Get the text that is going to replace the problematic section.
   * If [\`Self::kind\`] is \`SuggestionKind::Remove\`, this will return an empty
   * string.
   * @returns {string}
   */
  get_replacement_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.suggestion_get_replacement_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {SuggestionKind}
   */
  kind() {
    const ret = wasm$1.suggestion_kind(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.suggestion_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Suggestion$1.prototype[Symbol.dispose] = Suggestion$1.prototype.free;
const SuggestionKind$1 = Object.freeze({
  /**
   * Replace the problematic text.
   */
  Replace: 0,
  "0": "Replace",
  /**
   * Remove the problematic text.
   */
  Remove: 1,
  "1": "Remove",
  /**
   * Insert additional text after the error.
   */
  InsertAfter: 2,
  "2": "InsertAfter"
});
function get_default_lint_config$1() {
  const ret = wasm$1.get_default_lint_config();
  return ret;
}
function get_default_lint_config_as_json$1() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm$1.get_default_lint_config_as_json();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0$1(ret[0], ret[1]);
  } finally {
    wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function setup$1() {
  wasm$1.setup();
}
function to_title_case$1(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.to_title_case(ptr0, len0);
    deferred2_0 = ret[0];
    deferred2_1 = ret[1];
    return getStringFromWasm0$1(ret[0], ret[1]);
  } finally {
    wasm$1.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function __wbg_get_imports$1() {
  const import0 = {
    __proto__: null,
    __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
      const ret = Error(getStringFromWasm0$1(arg0, arg1));
      return ret;
    },
    __wbg_String_8564e559799eccda: function(arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_boolean_get_c9c83ebd41b34df3: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone$1(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
      const ret = debugString$1(arg1);
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_a2790eb24c211ea0: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_e6f02f0ea5f20a32: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_acf2776254a8d832: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_136b9679cab35cfb: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0$1().setFloat64(arg0 + 8 * 1, isLikeNone$1(ret) ? 0 : ret, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, !isLikeNone$1(ret), true);
    },
    __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone$1(ret) ? 0 : passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
      throw new Error(getStringFromWasm0$1(arg0, arg1));
    },
    __wbg_call_1c5886ab9c57d1c7: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_669171204c3dcae2: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_7774d489e1da5f4f: function(arg0) {
      const ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_757e9472f8410341: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0$1(arg0, arg1));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_getRandomValues_a608c4436c19407a: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_e446ea5ffdd14ee5: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_63fb0332e6c4ec17: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_c0c8f8d7da0c03dd: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_d173c0308df22d37: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_unchecked_e20b893aeafc3fca: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_993d02d2d254cad1: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_f935dbb0aa7cdeed: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_5cebbb86e33c6dd6: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_36bd29c6848c2144: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_ecfa2c63d3d0d82c: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_lint_new: function(arg0) {
      const ret = Lint$1.__wrap(arg0);
      return ret;
    },
    __wbg_lint_unwrap: function(arg0) {
      const ret = Lint$1.__unwrap(arg0);
      return ret;
    },
    __wbg_log_1f8cbb01c83d06c2: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0$1(arg0, arg1), getStringFromWasm0$1(arg2, arg3), getStringFromWasm0$1(arg4, arg5), getStringFromWasm0$1(arg6, arg7));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_log_a54ca6b45e09078a: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0$1(arg0, arg1));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_mark_6b7f03786f5e4d61: function(arg0, arg1) {
      performance.mark(getStringFromWasm0$1(arg0, arg1));
    },
    __wbg_measure_0e21b33a1c6e3a29: function() {
      return handleError$1(function(arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          deferred1_0 = arg2;
          deferred1_1 = arg3;
          performance.measure(getStringFromWasm0$1(arg0, arg1), getStringFromWasm0$1(arg2, arg3));
        } finally {
          wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
          wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }, arguments);
    },
    __wbg_new_0_f117d868b403dc07: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_116be93542d39019: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_77cc4f4f472aeb81: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_cdf041679ded4c5f: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_ebe3e0f6837f0879: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_next_42cf16ee0dafc9e2: function() {
      return handleError$1(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_next_8f26b64fa5e9f64b: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup$1.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0$1(arg0, arg1), arg2);
    },
    __wbg_set_014226dfeca53178: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_a80955eb93b145c6: function(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_suggestion_new: function(arg0) {
      const ret = Suggestion$1.__wrap(arg0);
      return ret;
    },
    __wbg_value_1e2369fab29b420e: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_cast_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000002: function(arg0, arg1) {
      const ret = getStringFromWasm0$1(arg0, arg1);
      return ret;
    },
    __wbindgen_init_externref_table: function() {
      const table = wasm$1.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./harper_wasm_slim_bg.js": import0
  };
}
const LintFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_lint_free(ptr, 1));
const LinterFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_linter_free(ptr, 1));
const OrganizedGroupFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_organizedgroup_free(ptr, 1));
const SpanFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_span_free(ptr, 1));
const SuggestionFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_suggestion_free(ptr, 1));
function addToExternrefTable0$1(obj) {
  const idx = wasm$1.__externref_table_alloc();
  wasm$1.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function _assertClass$1(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(\`expected instance of \${klass.name}\`);
  }
}
function debugString$1(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return \`\${val}\`;
  }
  if (type == "string") {
    return \`"\${val}"\`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return \`Symbol(\${description})\`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return \`Function(\${name})\`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString$1(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString$1(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return \`\${val.name}: \${val.message}
\${val.stack}\`;
  }
  return className;
}
function getArrayJsValueFromWasm0$1(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0$1();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm$1.__wbindgen_externrefs.get(mem.getUint32(i, true)));
  }
  wasm$1.__externref_drop_slice(ptr, len);
  return result;
}
function getArrayU8FromWasm0$1(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0$1().subarray(ptr / 1, ptr / 1 + len);
}
let cachedBigUint64ArrayMemory0$1 = null;
function getBigUint64ArrayMemory0$1() {
  if (cachedBigUint64ArrayMemory0$1 === null || cachedBigUint64ArrayMemory0$1.byteLength === 0) {
    cachedBigUint64ArrayMemory0$1 = new BigUint64Array(wasm$1.memory.buffer);
  }
  return cachedBigUint64ArrayMemory0$1;
}
let cachedDataViewMemory0$1 = null;
function getDataViewMemory0$1() {
  if (cachedDataViewMemory0$1 === null || cachedDataViewMemory0$1.buffer.detached === true || cachedDataViewMemory0$1.buffer.detached === void 0 && cachedDataViewMemory0$1.buffer !== wasm$1.memory.buffer) {
    cachedDataViewMemory0$1 = new DataView(wasm$1.memory.buffer);
  }
  return cachedDataViewMemory0$1;
}
function getStringFromWasm0$1(ptr, len) {
  return decodeText$1(ptr >>> 0, len);
}
let cachedUint8ArrayMemory0$1 = null;
function getUint8ArrayMemory0$1() {
  if (cachedUint8ArrayMemory0$1 === null || cachedUint8ArrayMemory0$1.byteLength === 0) {
    cachedUint8ArrayMemory0$1 = new Uint8Array(wasm$1.memory.buffer);
  }
  return cachedUint8ArrayMemory0$1;
}
function handleError$1(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0$1(e);
    wasm$1.__wbindgen_exn_store(idx);
  }
}
function isLikeNone$1(x) {
  return x === void 0 || x === null;
}
function passArray64ToWasm0$1(arg, malloc) {
  const ptr = malloc(arg.length * 8, 8) >>> 0;
  getBigUint64ArrayMemory0$1().set(arg, ptr / 8);
  WASM_VECTOR_LEN$1 = arg.length;
  return ptr;
}
function passArray8ToWasm0$1(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0$1().set(arg, ptr / 1);
  WASM_VECTOR_LEN$1 = arg.length;
  return ptr;
}
function passArrayJsValueToWasm0$1(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0$1(array[i]);
    getDataViewMemory0$1().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN$1 = array.length;
  return ptr;
}
function passStringToWasm0$1(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder$1.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0$1().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN$1 = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0$1();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0$1().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder$1.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN$1 = offset;
  return ptr;
}
function takeFromExternrefTable0$1(idx) {
  const value = wasm$1.__wbindgen_externrefs.get(idx);
  wasm$1.__externref_table_dealloc(idx);
  return value;
}
let cachedTextDecoder$1 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder$1.decode();
const MAX_SAFARI_DECODE_BYTES$1 = 2146435072;
let numBytesDecoded$1 = 0;
function decodeText$1(ptr, len) {
  numBytesDecoded$1 += len;
  if (numBytesDecoded$1 >= MAX_SAFARI_DECODE_BYTES$1) {
    cachedTextDecoder$1 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder$1.decode();
    numBytesDecoded$1 = len;
  }
  return cachedTextDecoder$1.decode(getUint8ArrayMemory0$1().subarray(ptr, ptr + len));
}
const cachedTextEncoder$1 = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder$1)) {
  cachedTextEncoder$1.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder$1.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
let WASM_VECTOR_LEN$1 = 0;
let wasm$1;
function __wbg_finalize_init$1(instance, module) {
  wasm$1 = instance.exports;
  cachedBigUint64ArrayMemory0$1 = null;
  cachedDataViewMemory0$1 = null;
  cachedUint8ArrayMemory0$1 = null;
  wasm$1.__wbindgen_start();
  return wasm$1;
}
async function __wbg_load$1(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (!module.ok) {
      throw new Error(\`failed to fetch Wasm: \${module.status} \${module.statusText} fetching '\${module.url}'\`);
    }
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = expectedResponseType(module.type);
        if (validResponse && module.headers.get("Content-Type") !== "application/wasm") {
          console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function initSync$1(module) {
  if (wasm$1 !== void 0) return wasm$1;
  if (module !== void 0) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({ module } = module);
    } else {
      console.warn("using deprecated parameters for \`initSync()\`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports$1();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init$1(instance);
}
async function __wbg_init$1(module_or_path) {
  if (wasm$1 !== void 0) return wasm$1;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL();
  }
  const imports = __wbg_get_imports$1();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module } = await __wbg_load$1(await module_or_path, imports);
  return __wbg_finalize_init$1(instance);
}
var defaultGlue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Dialect: Dialect$1,
  Language: Language$1,
  Lint: Lint$1,
  Linter: Linter$1,
  OrganizedGroup: OrganizedGroup$1,
  Span: Span$1,
  Suggestion: Suggestion$1,
  SuggestionKind: SuggestionKind$1,
  default: __wbg_init$1,
  get_default_lint_config: get_default_lint_config$1,
  get_default_lint_config_as_json: get_default_lint_config_as_json$1,
  initSync: initSync$1,
  setup: setup$1,
  to_title_case: to_title_case$1
});
const Dialect = Object.freeze({
  American: 0,
  "0": "American",
  British: 1,
  "1": "British",
  Australian: 2,
  "2": "Australian",
  Canadian: 3,
  "3": "Canadian",
  Indian: 4,
  "4": "Indian"
});
const Language = Object.freeze({
  Plain: 0,
  "0": "Plain",
  Markdown: 1,
  "1": "Markdown",
  Typst: 2,
  "2": "Typst"
});
class Lint2 {
  static __wrap(ptr) {
    const obj = Object.create(Lint2.prototype);
    obj.__wbg_ptr = ptr;
    LintFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof Lint2)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LintFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_lint_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Lint}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.lint_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Lint2.__wrap(ret[0]);
  }
  /**
   * Get the content of the source material pointed to by [\`Self::span\`]
   * @returns {string}
   */
  get_problem_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_get_problem_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_lint_kind(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind_pretty() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_lint_kind_pretty(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error.
   * @returns {string}
   */
  message() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_message(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error as HTML.
   * @returns {string}
   */
  message_html() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_message_html(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the location of the problematic text.
   * @returns {Span}
   */
  span() {
    const ret = wasm.lint_span(this.__wbg_ptr);
    return Span2.__wrap(ret);
  }
  /**
   * Equivalent to calling \`.length\` on the result of \`suggestions()\`.
   * @returns {number}
   */
  suggestion_count() {
    const ret = wasm.lint_suggestion_count(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Get an array of any suggestions that may resolve the issue.
   * @returns {Suggestion[]}
   */
  suggestions() {
    const ret = wasm.lint_suggestions(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Lint2.prototype[Symbol.dispose] = Lint2.prototype.free;
class Linter2 {
  static __wrap(ptr) {
    const obj = Object.create(Linter2.prototype);
    obj.__wbg_ptr = ptr;
    LinterFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LinterFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_linter_free(ptr, 0);
  }
  /**
   * Apply a suggestion from a given lint.
   * This action will be logged to the Linter's statistics.
   * @param {string} source_text
   * @param {Lint} lint
   * @param {Suggestion} suggestion
   * @returns {string}
   */
  apply_suggestion(source_text, lint, suggestion) {
    let deferred3_0;
    let deferred3_1;
    try {
      const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      _assertClass(lint, Lint2);
      _assertClass(suggestion, Suggestion2);
      const ret = wasm.linter_apply_suggestion(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr, suggestion.__wbg_ptr);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  clear_ignored_lints() {
    wasm.linter_clear_ignored_lints(this.__wbg_ptr);
  }
  /**
   * Clear the user dictionary.
   */
  clear_words() {
    wasm.linter_clear_words(this.__wbg_ptr);
  }
  /**
   * Compute the context hash of a given lint.
   * @param {string} source_text
   * @param {Lint} lint
   * @returns {bigint}
   */
  context_hash(source_text, lint) {
    const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(lint, Lint2);
    const ret = wasm.linter_context_hash(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * Export the linter's ignored lints as a privacy-respecting JSON list of hashes.
   * @returns {string}
   */
  export_ignored_lints() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_export_ignored_lints(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Export words from the dictionary.
   * Note: this will only return words previously added by [\`Self::import_words\`].
   * @returns {string[]}
   */
  export_words() {
    const ret = wasm.linter_export_words(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  generate_stats_file() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_generate_stats_file(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the dialect this struct was constructed for.
   * @returns {Dialect}
   */
  get_dialect() {
    const ret = wasm.linter_get_dialect(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_lint_config_as_object() {
    const ret = wasm.linter_get_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {string}
   */
  get_lint_descriptions_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_descriptions_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {any}
   */
  get_lint_descriptions_as_object() {
    const ret = wasm.linter_get_lint_descriptions_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {string}
   */
  get_lint_descriptions_html_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {any}
   */
  get_lint_descriptions_html_as_object() {
    const ret = wasm.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_structured_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_structured_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_structured_lint_config_as_object() {
    const ret = wasm.linter_get_structured_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Add a specific context hash to the ignored lints list.
   * @param {BigUint64Array} hashes
   */
  ignore_hashes(hashes) {
    const ptr0 = passArray64ToWasm0(hashes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.linter_ignore_hashes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {string} source_text
   * @param {Lint[]} lints
   */
  ignore_lints(source_text, lints) {
    const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayJsValueToWasm0(lints, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    wasm.linter_ignore_lints(this.__wbg_ptr, ptr0, len0, ptr1, len1);
  }
  /**
   * Import into the linter's ignored lints from a privacy-respecting JSON list of hashes.
   * @param {string} json
   */
  import_ignored_lints(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_ignored_lints(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {string} file
   */
  import_stats_file(file) {
    const ptr0 = passStringToWasm0(file, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_stats_file(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Load a Weirpack from raw bytes, merging its rules into the current linter.
   * Returns test failures if any are found, and does not import in that case.
   * @param {Uint8Array} bytes
   * @returns {any}
   */
  import_weirpack(bytes) {
    const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_weirpack(this.__wbg_ptr, ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Import words into the dictionary.
   * @param {string[]} additional_words
   */
  import_words(additional_words) {
    const ptr0 = passArrayJsValueToWasm0(additional_words, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.linter_import_words(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Helper method to quickly check if a plain string is likely intended to be English
   * @param {string} text
   * @returns {boolean}
   */
  is_likely_english(text) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_is_likely_english(this.__wbg_ptr, ptr0, len0);
    return ret !== 0;
  }
  /**
   * Helper method to remove non-English text from a plain English document.
   * @param {string} text
   * @returns {string}
   */
  isolate_english(text) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.linter_isolate_english(this.__wbg_ptr, ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Perform the configured linting on the provided text.
   *
   * If the provided regex mask cannot be parsed, this method will return an empty array.
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {Lint[]}
   */
  lint(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(regex_mask) ? 0 : passStringToWasm0(regex_mask, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.linter_lint(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * Construct a new \`Linter\`.
   * Note that this can mean constructing the curated dictionary, which is the most expensive operation
   * in Harper.
   * @param {Dialect} dialect
   * @returns {Linter}
   */
  static new(dialect) {
    const ret = wasm.linter_new(dialect);
    return Linter2.__wrap(ret);
  }
  /**
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {OrganizedGroup[]}
   */
  organized_lints(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(regex_mask) ? 0 : passStringToWasm0(regex_mask, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.linter_organized_lints(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * @param {string} json
   */
  set_lint_config_from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_set_lint_config_from_json(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {any} object
   */
  set_lint_config_from_object(object) {
    const ret = wasm.linter_set_lint_config_from_object(this.__wbg_ptr, object);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {bigint | null} [start_time]
   * @param {bigint | null} [end_time]
   * @returns {any}
   */
  summarize_stats(start_time, end_time) {
    const ret = wasm.linter_summarize_stats(this.__wbg_ptr, !isLikeNone(start_time), isLikeNone(start_time) ? BigInt(0) : start_time, !isLikeNone(end_time), isLikeNone(end_time) ? BigInt(0) : end_time);
    return ret;
  }
}
if (Symbol.dispose) Linter2.prototype[Symbol.dispose] = Linter2.prototype.free;
class OrganizedGroup2 {
  static __wrap(ptr) {
    const obj = Object.create(OrganizedGroup2.prototype);
    obj.__wbg_ptr = ptr;
    OrganizedGroupFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OrganizedGroupFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_organizedgroup_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get group() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.__wbg_get_organizedgroup_group(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {Lint[]}
   */
  get lints() {
    const ret = wasm.__wbg_get_organizedgroup_lints(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {string} arg0
   */
  set group(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_organizedgroup_group(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {Lint[]} arg0
   */
  set lints(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_organizedgroup_lints(this.__wbg_ptr, ptr0, len0);
  }
}
if (Symbol.dispose) OrganizedGroup2.prototype[Symbol.dispose] = OrganizedGroup2.prototype.free;
class Span2 {
  static __wrap(ptr) {
    const obj = Object.create(Span2.prototype);
    obj.__wbg_ptr = ptr;
    SpanFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SpanFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_span_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get end() {
    const ret = wasm.__wbg_get_span_end(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  get start() {
    const ret = wasm.__wbg_get_span_start(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set end(arg0) {
    wasm.__wbg_set_span_end(this.__wbg_ptr, arg0);
  }
  /**
   * @param {number} arg0
   */
  set start(arg0) {
    wasm.__wbg_set_span_start(this.__wbg_ptr, arg0);
  }
  /**
   * @param {string} json
   * @returns {Span}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.span_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Span2.__wrap(ret[0]);
  }
  /**
   * @returns {boolean}
   */
  is_empty() {
    const ret = wasm.span_is_empty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  len() {
    const ret = wasm.span_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} start
   * @param {number} end
   * @returns {Span}
   */
  static new(start, end) {
    const ret = wasm.span_new(start, end);
    return Span2.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.span_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Span2.prototype[Symbol.dispose] = Span2.prototype.free;
class Suggestion2 {
  static __wrap(ptr) {
    const obj = Object.create(Suggestion2.prototype);
    obj.__wbg_ptr = ptr;
    SuggestionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SuggestionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_suggestion_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Suggestion}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.suggestion_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Suggestion2.__wrap(ret[0]);
  }
  /**
   * Get the text that is going to replace the problematic section.
   * If [\`Self::kind\`] is \`SuggestionKind::Remove\`, this will return an empty
   * string.
   * @returns {string}
   */
  get_replacement_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.suggestion_get_replacement_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {SuggestionKind}
   */
  kind() {
    const ret = wasm.suggestion_kind(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.suggestion_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Suggestion2.prototype[Symbol.dispose] = Suggestion2.prototype.free;
const SuggestionKind = Object.freeze({
  /**
   * Replace the problematic text.
   */
  Replace: 0,
  "0": "Replace",
  /**
   * Remove the problematic text.
   */
  Remove: 1,
  "1": "Remove",
  /**
   * Insert additional text after the error.
   */
  InsertAfter: 2,
  "2": "InsertAfter"
});
function get_default_lint_config() {
  const ret = wasm.get_default_lint_config();
  return ret;
}
function get_default_lint_config_as_json() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm.get_default_lint_config_as_json();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function setup() {
  wasm.setup();
}
function to_title_case(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.to_title_case(ptr0, len0);
    deferred2_0 = ret[0];
    deferred2_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
      const ret = Error(getStringFromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_String_8564e559799eccda: function(arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_boolean_get_c9c83ebd41b34df3: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
      const ret = debugString(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_a2790eb24c211ea0: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_e6f02f0ea5f20a32: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_acf2776254a8d832: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_136b9679cab35cfb: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbg_call_1c5886ab9c57d1c7: function() {
      return handleError(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_669171204c3dcae2: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_7774d489e1da5f4f: function(arg0) {
      const ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_757e9472f8410341: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_getRandomValues_a608c4436c19407a: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_e446ea5ffdd14ee5: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_63fb0332e6c4ec17: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_c0c8f8d7da0c03dd: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_d173c0308df22d37: function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_unchecked_e20b893aeafc3fca: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_993d02d2d254cad1: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_f935dbb0aa7cdeed: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_5cebbb86e33c6dd6: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_36bd29c6848c2144: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_ecfa2c63d3d0d82c: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_lint_new: function(arg0) {
      const ret = Lint2.__wrap(arg0);
      return ret;
    },
    __wbg_lint_unwrap: function(arg0) {
      const ret = Lint2.__unwrap(arg0);
      return ret;
    },
    __wbg_log_1f8cbb01c83d06c2: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_log_a54ca6b45e09078a: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_mark_6b7f03786f5e4d61: function(arg0, arg1) {
      performance.mark(getStringFromWasm0(arg0, arg1));
    },
    __wbg_measure_0e21b33a1c6e3a29: function() {
      return handleError(function(arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          deferred1_0 = arg2;
          deferred1_1 = arg3;
          performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        } finally {
          wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
          wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }, arguments);
    },
    __wbg_new_0_f117d868b403dc07: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_116be93542d39019: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_77cc4f4f472aeb81: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_cdf041679ded4c5f: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_ebe3e0f6837f0879: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_next_42cf16ee0dafc9e2: function() {
      return handleError(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_next_8f26b64fa5e9f64b: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup2.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    },
    __wbg_set_014226dfeca53178: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_a80955eb93b145c6: function(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_suggestion_new: function(arg0) {
      const ret = Suggestion2.__wrap(arg0);
      return ret;
    },
    __wbg_value_1e2369fab29b420e: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_cast_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000002: function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return ret;
    },
    __wbindgen_init_externref_table: function() {
      const table = wasm.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./harper_wasm_bg.js": import0
  };
}
const LintFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_lint_free(ptr, 1));
const LinterFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_linter_free(ptr, 1));
const OrganizedGroupFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_organizedgroup_free(ptr, 1));
const SpanFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_span_free(ptr, 1));
const SuggestionFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_suggestion_free(ptr, 1));
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(\`expected instance of \${klass.name}\`);
  }
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return \`\${val}\`;
  }
  if (type == "string") {
    return \`"\${val}"\`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return \`Symbol(\${description})\`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return \`Function(\${name})\`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return \`\${val.name}: \${val.message}
\${val.stack}\`;
  }
  return className;
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
  }
  wasm.__externref_drop_slice(ptr, len);
  return result;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
let cachedBigUint64ArrayMemory0 = null;
function getBigUint64ArrayMemory0() {
  if (cachedBigUint64ArrayMemory0 === null || cachedBigUint64ArrayMemory0.byteLength === 0) {
    cachedBigUint64ArrayMemory0 = new BigUint64Array(wasm.memory.buffer);
  }
  return cachedBigUint64ArrayMemory0;
}
let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
function getStringFromWasm0(ptr, len) {
  return decodeText(ptr >>> 0, len);
}
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
function passArray64ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 8, 8) >>> 0;
  getBigUint64ArrayMemory0().set(arg, ptr / 8);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0(array[i]);
    getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_externrefs.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
let cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
const cachedTextEncoder = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder)) {
  cachedTextEncoder.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
let WASM_VECTOR_LEN = 0;
let wasm;
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  cachedBigUint64ArrayMemory0 = null;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (!module.ok) {
      throw new Error(\`failed to fetch Wasm: \${module.status} \${module.statusText} fetching '\${module.url}'\`);
    }
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = expectedResponseType(module.type);
        if (validResponse && module.headers.get("Content-Type") !== "application/wasm") {
          console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function initSync(module) {
  if (wasm !== void 0) return wasm;
  if (module !== void 0) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({ module } = module);
    } else {
      console.warn("using deprecated parameters for \`initSync()\`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance);
}
async function __wbg_init(module_or_path) {
  if (wasm !== void 0) return wasm;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL();
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance);
}
var fullGlue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Dialect,
  Language,
  Lint: Lint2,
  Linter: Linter2,
  OrganizedGroup: OrganizedGroup2,
  Span: Span2,
  Suggestion: Suggestion2,
  SuggestionKind,
  default: __wbg_init,
  get_default_lint_config,
  get_default_lint_config_as_json,
  initSync,
  setup,
  to_title_case
});
const _PLazy = class _PLazy extends Promise {
  constructor(executor) {
    super((resolve) => {
      resolve();
    });
    __privateAdd(this, _executor);
    __privateAdd(this, _promise);
    __privateSet(this, _executor, executor);
  }
  static from(function_) {
    return new _PLazy((resolve) => {
      resolve(function_());
    });
  }
  static resolve(value) {
    return new _PLazy((resolve) => {
      resolve(value);
    });
  }
  static reject(error) {
    return new _PLazy((resolve, reject) => {
      reject(error);
    });
  }
  then(onFulfilled, onRejected) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).catch(onRejected);
  }
  finally(onFinally) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).finally(onFinally);
  }
};
_executor = new WeakMap();
_promise = new WeakMap();
let PLazy = _PLazy;
const copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
const canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody) => \`/* Wrapped \${withName}*/
\${fromBody}\`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const changeToString = (to, from, name) => {
  const withName = name === "" ? "" : \`with \${name.trim()}() \`;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
const cacheStore = /* @__PURE__ */ new WeakMap();
function pMemoize(fn, { cacheKey = ([firstArgument]) => firstArgument, cache = /* @__PURE__ */ new Map() } = {}) {
  const promiseCache = /* @__PURE__ */ new Map();
  const memoized = function(...arguments_) {
    const key = cacheKey(arguments_);
    if (promiseCache.has(key)) {
      return promiseCache.get(key);
    }
    const promise = (async () => {
      try {
        if (cache && await cache.has(key)) {
          return await cache.get(key);
        }
        const promise2 = fn.apply(this, arguments_);
        const result = await promise2;
        try {
          return result;
        } finally {
          if (cache) {
            await cache.set(key, result);
          }
        }
      } finally {
        promiseCache.delete(key);
      }
    })();
    promiseCache.set(key, promise);
    return promise;
  };
  mimicFunction(memoized, fn, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  return memoized;
}
function inferGlueFlavor(binary) {
  return binary.includes("harper_wasm_slim") ? "slim" : "full";
}
function loadGlue(glueFlavor) {
  if (glueFlavor === "slim") {
    return defaultGlue;
  }
  return fullGlue;
}
function getDefaultGlueBinary(binary, glueFlavor) {
  if (glueFlavor === "slim") {
    return binary;
  }
  if (binary.includes("harper_wasm_bg.wasm")) {
    return binary.replace("harper_wasm_bg.wasm", "harper_wasm_slim_bg.wasm");
  }
  return null;
}
function getInitInput(binary) {
  if (typeof process !== "undefined" && binary.startsWith("file://")) {
    return Promise.resolve().then(function() {
      return __viteBrowserExternal$1;
    }).then(
      (fs) => new Promise((resolve, reject) => {
        fs.readFile(new URL(binary).pathname, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      })
    );
  }
  return binary;
}
async function loadBinaryUncached(binary, glueFlavor) {
  const exports = loadGlue(glueFlavor);
  const defaultGlueBinary = getDefaultGlueBinary(binary, glueFlavor);
  if (defaultGlueBinary != null) {
    try {
      await __wbg_init$1({ module_or_path: getInitInput(defaultGlueBinary) });
    } catch (err) {
      if (glueFlavor === "slim") {
        throw err;
      }
    }
  }
  await exports.default({ module_or_path: getInitInput(binary) });
  return exports;
}
const loadBinaryByFlavor = {
  full: pMemoize((binary) => loadBinaryUncached(binary, "full")),
  slim: pMemoize((binary) => loadBinaryUncached(binary, "slim"))
};
function loadBinary(binary, glueFlavor) {
  return loadBinaryByFlavor[glueFlavor](binary);
}
class BinaryModuleImpl {
  constructor() {
    __publicField(this, "url", "");
    __publicField(this, "glueFlavor", "full");
    __publicField(this, "inner", null);
  }
  /** Load a binary from a specified URL. This is the only recommended way to construct this type. */
  static create(url, glueFlavor) {
    const module = new SuperBinaryModule();
    module.url = url;
    module.glueFlavor = glueFlavor ?? inferGlueFlavor(typeof url === "string" ? url : url.href);
    module.inner = PLazy.from(
      () => loadBinary(typeof module.url === "string" ? module.url : module.url.href, module.glueFlavor)
    );
    return module;
  }
  async getDefaultLintConfigAsJSON() {
    const exported = await this.inner;
    return exported.get_default_lint_config_as_json();
  }
  async getDefaultLintConfig() {
    const exported = await this.inner;
    return exported.get_default_lint_config();
  }
  async toTitleCase(text) {
    const exported = await this.inner;
    return exported.to_title_case(text);
  }
  async setup() {
    const exported = await this.inner;
    exported.setup();
  }
}
class SuperBinaryModule extends BinaryModuleImpl {
  async createLinter(dialect) {
    const exported = await this.getBinaryModule();
    return exported.Linter.new(dialect ?? Dialect$1.American);
  }
  async getBinaryModule() {
    return await PLazy.from(
      () => loadBinary(typeof this.url === "string" ? this.url : this.url.href, this.glueFlavor)
    );
  }
}
function toWasmLanguage(language) {
  switch (language) {
    case "plaintext":
      return Language$1.Plain;
    case "typst":
      return Language$1.Typst;
    case "markdown":
    case void 0:
      return Language$1.Markdown;
    default:
      console.warn(\`Unknown Harper language '\${String(language)}'; using markdown.\`);
      return Language$1.Markdown;
  }
}
function toWasmLintArgs(text, options) {
  return [
    text,
    toWasmLanguage(options == null ? void 0 : options.language),
    (options == null ? void 0 : options.forceAllHeadings) ?? false,
    options == null ? void 0 : options.regex_mask,
    (options == null ? void 0 : options.dedup) ?? true,
    (options == null ? void 0 : options.isolateEnglish) ?? false
  ];
}
class LocalLinter {
  constructor(init) {
    __publicField(this, "binary");
    __publicField(this, "inner");
    __publicField(this, "disposed", false);
    this.binary = init.binary;
    this.binary.setup();
    this.inner = this.createInner(init.dialect);
  }
  createInner(dialect) {
    return PLazy.from(async () => {
      await this.binary.setup();
      return this.binary.createLinter(dialect);
    });
  }
  async setup() {
    await this.lint("", { language: "plaintext" });
    const exported = await this.exportIgnoredLints();
    await this.importIgnoredLints(exported);
  }
  async lint(text, options) {
    const inner = await this.inner;
    return inner.lint(...toWasmLintArgs(text, options));
  }
  async organizedLints(text, options) {
    const inner = await this.inner;
    const lintGroups = inner.organized_lints(...toWasmLintArgs(text, options));
    const output = {};
    for (const group of lintGroups) {
      output[group.group] = group.lints;
      group.free();
    }
    return output;
  }
  async applySuggestion(text, lint, suggestion) {
    const inner = await this.inner;
    return inner.apply_suggestion(text, lint, suggestion);
  }
  async isLikelyEnglish(text) {
    const inner = await this.inner;
    return inner.is_likely_english(text);
  }
  async isolateEnglish(text) {
    const inner = await this.inner;
    return inner.isolate_english(text);
  }
  async getLintConfig() {
    const inner = await this.inner;
    return inner.get_lint_config_as_object();
  }
  async getDefaultLintConfigAsJSON() {
    return await this.binary.getDefaultLintConfigAsJSON();
  }
  async getDefaultLintConfig() {
    return await this.binary.getDefaultLintConfig();
  }
  async getStructuredLintConfig() {
    const inner = await this.inner;
    return inner.get_structured_lint_config_as_object();
  }
  async getStructuredLintConfigJSON() {
    const inner = await this.inner;
    return inner.get_structured_lint_config_as_json();
  }
  async setLintConfig(config) {
    const inner = await this.inner;
    inner.set_lint_config_from_object(config);
  }
  async getLintConfigAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_config_as_json();
  }
  async setLintConfigWithJSON(config) {
    const inner = await this.inner;
    inner.set_lint_config_from_json(config);
  }
  async toTitleCase(text) {
    return await this.binary.toTitleCase(text);
  }
  async getLintDescriptions() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_as_object();
  }
  async getLintDescriptionsAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_as_json();
  }
  async getLintDescriptionsHTML() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_html_as_object();
  }
  async getLintDescriptionsHTMLAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_html_as_json();
  }
  async ignoreLint(source, lint) {
    return await this.ignoreLints(source, [lint]);
  }
  async ignoreLints(source, lints) {
    const inner = await this.inner;
    inner.ignore_lints(source, lints);
  }
  async ignoreLintHash(hash) {
    const inner = await this.inner;
    inner.ignore_hashes(new BigUint64Array([hash]));
  }
  async exportIgnoredLints() {
    const inner = await this.inner;
    return inner.export_ignored_lints();
  }
  async importIgnoredLints(json) {
    const inner = await this.inner;
    inner.import_ignored_lints(json);
  }
  async contextHash(source, lint) {
    const inner = await this.inner;
    return inner.context_hash(source, lint);
  }
  async clearIgnoredLints() {
    const inner = await this.inner;
    inner.clear_ignored_lints();
  }
  async clearWords() {
    const inner = await this.inner;
    return inner.clear_words();
  }
  async importWords(words) {
    const inner = await this.inner;
    return inner.import_words(words);
  }
  async exportWords() {
    const inner = await this.inner;
    return inner.export_words();
  }
  async getDialect() {
    const inner = await this.inner;
    return inner.get_dialect();
  }
  async setDialect(dialect) {
    const inner = await this.inner;
    if (inner.get_dialect() !== dialect) {
      inner.free();
      this.inner = this.createInner(dialect);
    }
    return Promise.resolve();
  }
  async summarizeStats(start, end) {
    const inner = await this.inner;
    return inner.summarize_stats(start, end);
  }
  async generateStatsFile() {
    const inner = await this.inner;
    return inner.generate_stats_file();
  }
  async importStatsFile(statsFile) {
    const inner = await this.inner;
    return inner.import_stats_file(statsFile);
  }
  /**
   * Load a Weirpack from a Blob.
   *
   * Returns \`undefined\` if tests pass and rules are imported, otherwise returns
   * the Weirpack test failures.
   */
  async loadWeirpackFromBlob(blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    return this.loadWeirpackFromBytes(bytes);
  }
  /**
   * Load a Weirpack from a byte array.
   *
   * Returns \`undefined\` if tests pass and rules are imported, otherwise returns
   * the Weirpack test failures.
   */
  async loadWeirpackFromBytes(bytes) {
    const inner = await this.inner;
    const data = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
    const result = inner.import_weirpack(data);
    return result;
  }
  async dispose() {
    if (this.disposed) {
      return;
    }
    this.disposed = true;
    const inner = await this.inner;
    inner.free();
  }
}
function assert(condition, message) {
  if (!condition) {
    throw new Error("Assertion failed");
  }
}
function isSerializedRequest(v) {
  return typeof v === "object" && v !== null && "procName" in v && "args" in v;
}
class Serializer {
  constructor(binary) {
    __publicField(this, "binary");
    this.binary = binary;
    this.binary.setup();
  }
  async serializeArg(arg) {
    var _a;
    const { Lint: Lint3, Span: Span3, Suggestion: Suggestion3 } = await this.binary.getBinaryModule();
    if (Array.isArray(arg)) {
      return {
        json: JSON.stringify(await Promise.all(arg.map((a) => this.serializeArg(a)))),
        type: "Array"
      };
    }
    const argType = typeof arg;
    switch (argType) {
      case "string":
      case "number":
      case "boolean":
      case "undefined":
        return { json: JSON.stringify(arg), type: argType };
      case "bigint":
        return { json: arg.toString(), type: argType };
    }
    if (arg.to_json !== void 0) {
      const json = arg.to_json();
      let type;
      const constructorName = (_a = arg.constructor) == null ? void 0 : _a.name;
      if (arg instanceof Lint3 || constructorName === "Lint") {
        type = "Lint";
      } else if (arg instanceof Suggestion3 || constructorName === "Suggestion") {
        type = "Suggestion";
      } else if (arg instanceof Span3 || constructorName === "Span") {
        type = "Span";
      }
      if (type === void 0) {
        throw new Error("Unhandled case: type undefined");
      }
      return { json, type };
    }
    if (argType == "object") {
      return {
        json: JSON.stringify(
          await Promise.all(
            Object.entries(arg).map(([key, value]) => this.serializeArg([key, value]))
          )
        ),
        type: "object"
      };
    }
    throw new Error(\`Unhandled case: \${arg}\`);
  }
  async serialize(req) {
    return {
      procName: req.procName,
      args: await Promise.all(req.args.map((arg) => this.serializeArg(arg)))
    };
  }
  async deserializeArg(requestArg) {
    const { Lint: Lint3, Span: Span3, Suggestion: Suggestion3 } = await this.binary.getBinaryModule();
    switch (requestArg.type) {
      case "bigint":
        return BigInt(requestArg.json);
      case "undefined":
        return void 0;
      case "boolean":
      case "number":
      case "string":
        return JSON.parse(requestArg.json);
      case "Suggestion":
        return Suggestion3.from_json(requestArg.json);
      case "Lint":
        return Lint3.from_json(requestArg.json);
      case "Span":
        return Span3.from_json(requestArg.json);
      case "Array": {
        const parsed = JSON.parse(requestArg.json);
        assert(Array.isArray(parsed));
        return await Promise.all(parsed.map((arg) => this.deserializeArg(arg)));
      }
      case "object": {
        const parsed = JSON.parse(requestArg.json);
        return Object.fromEntries(
          await Promise.all(parsed.map((val) => this.deserializeArg(val)))
        );
      }
      default:
        throw new Error(\`Unhandled case: \${requestArg.type}\`);
    }
  }
  async deserialize(request) {
    return {
      procName: request.procName,
      args: await Promise.all(request.args.map((arg) => this.deserializeArg(arg)))
    };
  }
}
self.postMessage("ready");
self.onmessage = (e) => {
  const [binaryUrl, dialect, glueFlavor] = e.data;
  if (typeof binaryUrl !== "string") {
    throw new TypeError(\`Expected binary to be a string of url but got \${typeof binaryUrl}.\`);
  }
  if (glueFlavor !== void 0 && glueFlavor !== "full" && glueFlavor !== "slim") {
    throw new TypeError(\`Expected glue flavor to be "full" or "slim" but got \${glueFlavor}.\`);
  }
  const binary = SuperBinaryModule.create(binaryUrl, glueFlavor);
  const serializer = new Serializer(binary);
  const linter = new LocalLinter({ binary, dialect });
  async function processRequest(v) {
    const { procName, args } = await serializer.deserialize(v);
    if (procName in linter) {
      const res = await linter[procName](...args);
      postMessage(await serializer.serializeArg(res));
    }
  }
  self.onmessage = (e2) => {
    if (isSerializedRequest(e2.data)) {
      processRequest(e2.data);
    }
  };
};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteBrowserExternal
});
`,et=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",vt],{type:"text/javascript;charset=utf-8"});function Wr(r){let n;try{if(n=et&&(self.URL||self.webkitURL).createObjectURL(et),!n)throw"";const e=new Worker(n,{type:"module",name:r==null?void 0:r.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(vt),{type:"module",name:r==null?void 0:r.name})}}class ni{constructor(n){nn(this,"binary"),nn(this,"serializer"),nn(this,"dialect"),nn(this,"worker"),nn(this,"requestQueue"),nn(this,"working",!0),nn(this,"disposed",!1),this.binary=n.binary,this.serializer=new Lr(this.binary),this.dialect=n.dialect,this.worker=new Wr,this.requestQueue=[],this.worker.onmessage=()=>{this.setupMainEventListeners(),this.worker.postMessage([this.binary.url,this.dialect,mr(this.binary)]),this.working=!1,this.submitRemainingRequests()}}setupMainEventListeners(){this.worker.onmessage=n=>{const{resolve:e}=this.requestQueue.shift();this.serializer.deserializeArg(n.data).then(t=>{e(t),this.working=!1,this.submitRemainingRequests()})},this.worker.onmessageerror=n=>{const{reject:e}=this.requestQueue.shift();e(n.data),this.working=!1,this.submitRemainingRequests()}}setup(){return this.rpc("setup",[])}lint(n,e){return this.rpc("lint",[n,e])}organizedLints(n,e){return this.rpc("organizedLints",[n,e])}applySuggestion(n,e,t){return this.rpc("applySuggestion",[n,e,t])}isLikelyEnglish(n){return this.rpc("isLikelyEnglish",[n])}isolateEnglish(n){return this.rpc("isolateEnglish",[n])}async getLintConfig(){return JSON.parse(await this.getLintConfigAsJSON())}setLintConfig(n){return this.setLintConfigWithJSON(JSON.stringify(n))}getLintConfigAsJSON(){return this.rpc("getLintConfigAsJSON",[])}setLintConfigWithJSON(n){return this.rpc("setLintConfigWithJSON",[n])}toTitleCase(n){return this.rpc("toTitleCase",[n])}getLintDescriptionsAsJSON(){return this.rpc("getLintDescriptionsAsJSON",[])}async getLintDescriptions(){return JSON.parse(await this.getLintDescriptionsAsJSON())}getLintDescriptionsHTMLAsJSON(){return this.rpc("getLintDescriptionsHTMLAsJSON",[])}async getLintDescriptionsHTML(){return JSON.parse(await this.getLintDescriptionsHTMLAsJSON())}getDefaultLintConfigAsJSON(){return this.rpc("getDefaultLintConfigAsJSON",[])}async getDefaultLintConfig(){return JSON.parse(await this.getDefaultLintConfigAsJSON())}async getStructuredLintConfig(){return JSON.parse(await this.getStructuredLintConfigJSON())}getStructuredLintConfigJSON(){return this.rpc("getStructuredLintConfigJSON",[])}async dispose(){this.disposed||(await this.rpc("dispose",[]),this.disposed=!0,this.requestQueue=[],this.worker.terminate())}ignoreLint(n,e){return this.ignoreLints(n,[e])}ignoreLints(n,e){return this.rpc("ignoreLints",[n,e])}ignoreLintHash(n){return this.rpc("ignoreLintHash",[n])}exportIgnoredLints(){return this.rpc("exportIgnoredLints",[])}importIgnoredLints(n){return this.rpc("importIgnoredLints",[n])}contextHash(n,e){return this.rpc("contextHash",[n,e])}clearIgnoredLints(){return this.rpc("clearIgnoredLints",[])}clearWords(){return this.rpc("clearWords",[])}importWords(n){return this.rpc("importWords",[n])}exportWords(){return this.rpc("exportWords",[])}getDialect(){return this.rpc("getDialect",[])}setDialect(n){return this.rpc("setDialect",[n])}summarizeStats(n,e){return this.rpc("summarizeStats",[n,e])}generateStatsFile(){return this.rpc("generateStatsFile",[])}importStatsFile(n){return this.rpc("importStatsFile",[n])}async loadWeirpackFromBlob(n){const e=new Uint8Array(await n.arrayBuffer()),t=Array.from(e);return await this.rpc("loadWeirpackFromBytes",[t])}async loadWeirpackFromBytes(n){const e=Array.from(n);return await this.rpc("loadWeirpackFromBytes",[e])}async rpc(n,e){if(this.disposed)throw new Error("WorkerLinter has been disposed.");return new Promise((i,s)=>{this.requestQueue.push({resolve:i,reject:s,request:{procName:n,args:e}}),this.submitRemainingRequests()})}async submitRemainingRequests(){if(!this.working)if(this.working=!0,this.requestQueue.length>0){const{request:n}=this.requestQueue[0],e=await this.serializer.serialize(n);this.worker.postMessage(e)}else this.working=!1}}var W=Uint8Array,H=Uint16Array,Ce=Int32Array,ae=new W([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_e=new W([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Te=new W([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),St=function(r,n){for(var e=new H(31),t=0;t<31;++t)e[t]=n+=1<<r[t-1];for(var i=new Ce(e[30]),t=1;t<30;++t)for(var s=e[t];s<e[t+1];++s)i[s]=s-e[t]<<5|t;return{b:e,r:i}},$t=St(ae,2),jt=$t.b,Ee=$t.r;jt[28]=258,Ee[258]=28;var xt=St(_e,0),Tr=xt.b,tt=xt.r,Oe=new H(32768);for(var x=0;x<32768;++x){var bn=(x&43690)>>1|(x&21845)<<1;bn=(bn&52428)>>2|(bn&13107)<<2,bn=(bn&61680)>>4|(bn&3855)<<4,Oe[x]=((bn&65280)>>8|(bn&255)<<8)>>1}var gn=function(r,n,e){for(var t=r.length,i=0,s=new H(n);i<t;++i)r[i]&&++s[r[i]-1];var a=new H(n);for(i=1;i<n;++i)a[i]=a[i-1]+s[i-1]<<1;var c;if(e){c=new H(1<<n);var g=15-n;for(i=0;i<t;++i)if(r[i])for(var u=i<<4|r[i],l=n-r[i],f=a[r[i]-1]++<<l,d=f|(1<<l)-1;f<=d;++f)c[Oe[f]>>g]=u}else for(c=new H(t),i=0;i<t;++i)r[i]&&(c[i]=Oe[a[r[i]-1]++]>>15-r[i]);return c},hn=new W(288);for(var x=0;x<144;++x)hn[x]=8;for(var x=144;x<256;++x)hn[x]=9;for(var x=256;x<280;++x)hn[x]=7;for(var x=280;x<288;++x)hn[x]=8;var Kn=new W(32);for(var x=0;x<32;++x)Kn[x]=5;var Er=gn(hn,9,0),Or=gn(hn,9,1),Fr=gn(Kn,5,0),Mr=gn(Kn,5,1),me=function(r){for(var n=r[0],e=1;e<r.length;++e)r[e]>n&&(n=r[e]);return n},X=function(r,n,e){var t=n/8|0;return(r[t]|r[t+1]<<8)>>(n&7)&e},ye=function(r,n){var e=n/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(n&7)},De=function(r){return(r+7)/8|0},Qn=function(r,n,e){return(n==null||n<0)&&(n=0),(e==null||e>r.length)&&(e=r.length),new W(r.subarray(n,e))},kr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B=function(r,n,e){var t=new Error(n||kr[r]);if(t.code=r,Error.captureStackTrace&&Error.captureStackTrace(t,B),!e)throw t;return t},zr=function(r,n,e,t){var i=r.length,s=t?t.length:0;if(!i||n.f&&!n.l)return e||new W(0);var a=!e,c=a||n.i!=2;a&&(e=new W(i*3));var g=function(kn){var zn=e.length;if(kn>zn){var Rn=new W(Math.max(zn*2,kn));Rn.set(e),e=Rn}},u=n.f||0,l=n.p||0,f=n.b||0,d=n.l,y=n.d,$=n.m,S=n.n,A=i*8;do{if(!d){u=X(r,l,1);var P=X(r,l+1,3);if(l+=3,P)if(P==1)d=Or,y=Mr,$=9,S=5;else if(P==2){var R=X(r,l,31)+257,D=X(r,l+10,15)+4,E=R+X(r,l+5,31)+1;l+=14;for(var w=new W(E),p=new W(19),j=0;j<D;++j)p[Te[j]]=X(r,l+j*3,7);l+=D*3;for(var fn=me(p),V=(1<<fn)-1,wn=gn(p,fn,1),j=0;j<E;){var J=wn[X(r,l,V)];l+=J&15;var L=J>>4;if(L<16)w[j++]=L;else{var N=0,I=0;for(L==16?(I=3+X(r,l,3),l+=2,N=w[j-1]):L==17?(I=3+X(r,l,7),l+=3):L==18&&(I=11+X(r,l,127),l+=7);I--;)w[j++]=N}}var M=w.subarray(0,R),k=w.subarray(R);$=me(M),S=me(k),d=gn(M,$,1),y=gn(k,S,1)}else B(1);else{var L=De(l)+4,G=r[L-4]|r[L-3]<<8,T=L+G;if(T>i){B(0);break}c&&g(f+G),e.set(r.subarray(L,T),f),n.b=f+=G,n.p=l=T*8,n.f=u;continue}if(l>A){B(0);break}}c&&g(f+131072);for(var rn=(1<<$)-1,Fn=(1<<S)-1,q=l;;q=l){var N=d[ye(r,l)&rn],K=N>>4;if(l+=N&15,l>A){B(0);break}if(N||B(2),K<256)e[f++]=K;else if(K==256){q=l,d=null;break}else{var un=K-254;if(K>264){var j=K-257,U=ae[j];un=X(r,l,(1<<U)-1)+jt[j],l+=U}var z=y[ye(r,l)&Fn],sn=z>>4;z||B(3),l+=z&15;var k=Tr[sn];if(sn>3){var U=_e[sn];k+=ye(r,l)&(1<<U)-1,l+=U}if(l>A){B(0);break}c&&g(f+131072);var Mn=f+un;if(f<k){var jn=s-k,oe=Math.min(k,Mn);for(jn+f<0&&B(3);f<oe;++f)e[f]=t[jn+f]}for(;f<Mn;++f)e[f]=e[f-k]}}n.l=d,n.p=q,n.b=f,n.f=u,d&&(u=1,n.m=$,n.d=y,n.n=S)}while(!u);return f!=e.length&&a?Qn(e,0,f):e.subarray(0,f)},pn=function(r,n,e){e<<=n&7;var t=n/8|0;r[t]|=e,r[t+1]|=e>>8},Nn=function(r,n,e){e<<=n&7;var t=n/8|0;r[t]|=e,r[t+1]|=e>>8,r[t+2]|=e>>16},he=function(r,n){for(var e=[],t=0;t<r.length;++t)r[t]&&e.push({s:t,f:r[t]});var i=e.length,s=e.slice();if(!i)return{t:Lt,l:0};if(i==1){var a=new W(e[0].s+1);return a[e[0].s]=1,{t:a,l:1}}e.sort(function(R,D){return R.f-D.f}),e.push({s:-1,f:25001});var c=e[0],g=e[1],u=0,l=1,f=2;for(e[0]={s:-1,f:c.f+g.f,l:c,r:g};l!=i-1;)c=e[e[u].f<e[f].f?u++:f++],g=e[u!=l&&e[u].f<e[f].f?u++:f++],e[l++]={s:-1,f:c.f+g.f,l:c,r:g};for(var d=s[0].s,t=1;t<i;++t)s[t].s>d&&(d=s[t].s);var y=new H(d+1),$=Fe(e[l-1],y,0);if($>n){var t=0,S=0,A=$-n,P=1<<A;for(s.sort(function(D,E){return y[E.s]-y[D.s]||D.f-E.f});t<i;++t){var L=s[t].s;if(y[L]>n)S+=P-(1<<$-y[L]),y[L]=n;else break}for(S>>=A;S>0;){var G=s[t].s;y[G]<n?S-=1<<n-y[G]++-1:++t}for(;t>=0&&S;--t){var T=s[t].s;y[T]==n&&(--y[T],++S)}$=n}return{t:new W(y),l:$}},Fe=function(r,n,e){return r.s==-1?Math.max(Fe(r.l,n,e+1),Fe(r.r,n,e+1)):n[r.s]=e},rt=function(r){for(var n=r.length;n&&!r[--n];);for(var e=new H(++n),t=0,i=r[0],s=1,a=function(g){e[t++]=g},c=1;c<=n;++c)if(r[c]==i&&c!=n)++s;else{if(!i&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(i),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(i);s=1,i=r[c]}return{c:e.subarray(0,t),n}},Cn=function(r,n){for(var e=0,t=0;t<n.length;++t)e+=r[t]*n[t];return e},At=function(r,n,e){var t=e.length,i=De(n+2);r[i]=t&255,r[i+1]=t>>8,r[i+2]=r[i]^255,r[i+3]=r[i+1]^255;for(var s=0;s<t;++s)r[i+s+4]=e[s];return(i+4+t)*8},it=function(r,n,e,t,i,s,a,c,g,u,l){pn(n,l++,e),++i[256];for(var f=he(i,15),d=f.t,y=f.l,$=he(s,15),S=$.t,A=$.l,P=rt(d),L=P.c,G=P.n,T=rt(S),R=T.c,D=T.n,E=new H(19),w=0;w<L.length;++w)++E[L[w]&31];for(var w=0;w<R.length;++w)++E[R[w]&31];for(var p=he(E,7),j=p.t,fn=p.l,V=19;V>4&&!j[Te[V-1]];--V);var wn=u+5<<3,J=Cn(i,hn)+Cn(s,Kn)+a,N=Cn(i,d)+Cn(s,S)+a+14+3*V+Cn(E,j)+2*E[16]+3*E[17]+7*E[18];if(g>=0&&wn<=J&&wn<=N)return At(n,l,r.subarray(g,g+u));var I,M,k,rn;if(pn(n,l,1+(N<J)),l+=2,N<J){I=gn(d,y,0),M=d,k=gn(S,A,0),rn=S;var Fn=gn(j,fn,0);pn(n,l,G-257),pn(n,l+5,D-1),pn(n,l+10,V-4),l+=14;for(var w=0;w<V;++w)pn(n,l+3*w,j[Te[w]]);l+=3*V;for(var q=[L,R],K=0;K<2;++K)for(var un=q[K],w=0;w<un.length;++w){var U=un[w]&31;pn(n,l,Fn[U]),l+=j[U],U>15&&(pn(n,l,un[w]>>5&127),l+=un[w]>>12)}}else I=Er,M=hn,k=Fr,rn=Kn;for(var w=0;w<c;++w){var z=t[w];if(z>255){var U=z>>18&31;Nn(n,l,I[U+257]),l+=M[U+257],U>7&&(pn(n,l,z>>23&31),l+=ae[U]);var sn=z&31;Nn(n,l,k[sn]),l+=rn[sn],sn>3&&(Nn(n,l,z>>5&8191),l+=_e[sn])}else Nn(n,l,I[z]),l+=M[z]}return Nn(n,l,I[256]),l+M[256]},Rr=new Ce([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Lt=new W(0),Nr=function(r,n,e,t,i,s){var a=s.z||r.length,c=new W(t+a+5*(1+Math.ceil(a/7e3))+i),g=c.subarray(t,c.length-i),u=s.l,l=(s.r||0)&7;if(n){l&&(g[0]=s.r>>3);for(var f=Rr[n-1],d=f>>13,y=f&8191,$=(1<<e)-1,S=s.p||new H(32768),A=s.h||new H($+1),P=Math.ceil(e/3),L=2*P,G=function(ce){return(r[ce]^r[ce+1]<<P^r[ce+2]<<L)&$},T=new Ce(25e3),R=new H(288),D=new H(32),E=0,w=0,p=s.i||0,j=0,fn=s.w||0,V=0;p+2<a;++p){var wn=G(p),J=p&32767,N=A[wn];if(S[J]=N,A[wn]=J,fn<=p){var I=a-p;if((E>7e3||j>24576)&&(I>423||!u)){l=it(r,g,0,T,R,D,w,j,V,p-V,l),j=E=w=0,V=p;for(var M=0;M<286;++M)R[M]=0;for(var M=0;M<30;++M)D[M]=0}var k=2,rn=0,Fn=y,q=J-N&32767;if(I>2&&wn==G(p-q))for(var K=Math.min(d,I)-1,un=Math.min(32767,p),U=Math.min(258,I);q<=un&&--Fn&&J!=N;){if(r[p+k]==r[p+k-q]){for(var z=0;z<U&&r[p+z]==r[p+z-q];++z);if(z>k){if(k=z,rn=q,z>K)break;for(var sn=Math.min(q,z-2),Mn=0,M=0;M<sn;++M){var jn=p-q+M&32767,oe=S[jn],kn=jn-oe&32767;kn>Mn&&(Mn=kn,N=jn)}}}J=N,N=S[J],q+=J-N&32767}if(rn){T[j++]=268435456|Ee[k]<<18|tt[rn];var zn=Ee[k]&31,Rn=tt[rn]&31;w+=ae[zn]+_e[Rn],++R[257+zn],++D[Rn],fn=p+k,++E}else T[j++]=r[p],++R[r[p]]}}for(p=Math.max(p,fn);p<a;++p)T[j++]=r[p],++R[r[p]];l=it(r,g,u,T,R,D,w,j,V,p-V,l),u||(s.r=l&7|g[l/8|0]<<3,l-=7,s.h=A,s.p=S,s.i=p,s.w=fn)}else{for(var p=s.w||0;p<a+u;p+=65535){var le=p+65535;le>=a&&(g[l/8|0]=u,le=a),l=At(g,l+1,r.subarray(p,le))}s.i=a}return Qn(c,0,t+De(l)+i)},Cr=function(){for(var r=new Int32Array(256),n=0;n<256;++n){for(var e=n,t=9;--t;)e=(e&1&&-306674912)^e>>>1;r[n]=e}return r}(),Dr=function(){var r=-1;return{p:function(n){for(var e=r,t=0;t<n.length;++t)e=Cr[e&255^n[t]]^e>>>8;r=e},d:function(){return~r}}},Ur=function(r,n,e,t,i){if(!i&&(i={l:1},n.dictionary)){var s=n.dictionary.subarray(-32768),a=new W(s.length+r.length);a.set(s),a.set(r,s.length),r=a,i.w=s.length}return Nr(r,n.level==null?6:n.level,n.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(r.length)))*1.5):20:12+n.mem,e,t,i)},Wt=function(r,n){var e={};for(var t in r)e[t]=r[t];for(var t in n)e[t]=n[t];return e},cn=function(r,n){return r[n]|r[n+1]<<8},en=function(r,n){return(r[n]|r[n+1]<<8|r[n+2]<<16|r[n+3]<<24)>>>0},ve=function(r,n){return en(r,n)+en(r,n+4)*4294967296},C=function(r,n,e){for(;e;++n)r[n]=e,e>>>=8};function Vr(r,n){return Ur(r,n||{},0,0)}function Ir(r,n){return zr(r,{i:2},n&&n.out,n&&n.dictionary)}var Tt=function(r,n,e,t){for(var i in r){var s=r[i],a=n+i,c=t;Array.isArray(s)&&(c=Wt(t,s[1]),s=s[0]),s instanceof W?e[a]=[s,c]:(e[a+="/"]=[new W(0),c],Tt(s,a,e,t))}},st=typeof TextEncoder<"u"&&new TextEncoder,Me=typeof TextDecoder<"u"&&new TextDecoder,Br=0;try{Me.decode(Lt,{stream:!0}),Br=1}catch{}var Pr=function(r){for(var n="",e=0;;){var t=r[e++],i=(t>127)+(t>223)+(t>239);if(e+i>r.length)return{s:n,r:Qn(r,e-1)};i?i==3?(t=((t&15)<<18|(r[e++]&63)<<12|(r[e++]&63)<<6|r[e++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|r[e++]&63):n+=String.fromCharCode((t&15)<<12|(r[e++]&63)<<6|r[e++]&63):n+=String.fromCharCode(t)}};function ke(r,n){var e;if(st)return st.encode(r);for(var t=r.length,i=new W(r.length+(r.length>>1)),s=0,a=function(u){i[s++]=u},e=0;e<t;++e){if(s+5>i.length){var c=new W(s+8+(t-e<<1));c.set(i),i=c}var g=r.charCodeAt(e);g<128||n?a(g):g<2048?(a(192|g>>6),a(128|g&63)):g>55295&&g<57344?(g=65536+(g&1047552)|r.charCodeAt(++e)&1023,a(240|g>>18),a(128|g>>12&63),a(128|g>>6&63),a(128|g&63)):(a(224|g>>12),a(128|g>>6&63),a(128|g&63))}return Qn(i,0,s)}function ze(r,n){if(n){for(var e="",t=0;t<r.length;t+=16384)e+=String.fromCharCode.apply(null,r.subarray(t,t+16384));return e}else{if(Me)return Me.decode(r);var i=Pr(r),s=i.s,e=i.r;return e.length&&B(8),s}}var Gr=function(r,n){return n+30+cn(r,n+26)+cn(r,n+28)},Jr=function(r,n,e){var t=cn(r,n+28),i=ze(r.subarray(n+46,n+46+t),!(cn(r,n+8)&2048)),s=n+46+t,a=en(r,n+20),c=e&&a==4294967295?qr(r,s):[a,en(r,n+24),en(r,n+42)],g=c[0],u=c[1],l=c[2];return[cn(r,n+10),g,u,i,s+cn(r,n+30)+cn(r,n+32),l]},qr=function(r,n){for(;cn(r,n)!=1;n+=4+cn(r,n+2));return[ve(r,n+12),ve(r,n+4),ve(r,n+20)]},Re=function(r){var n=0;if(r)for(var e in r){var t=r[e].length;t>65535&&B(9),n+=t+4}return n},at=function(r,n,e,t,i,s,a,c){var g=t.length,u=e.extra,l=c&&c.length,f=Re(u);C(r,n,a!=null?33639248:67324752),n+=4,a!=null&&(r[n++]=20,r[n++]=e.os),r[n]=20,n+=2,r[n++]=e.flag<<1|(s<0&&8),r[n++]=i&&8,r[n++]=e.compression&255,r[n++]=e.compression>>8;var d=new Date(e.mtime==null?Date.now():e.mtime),y=d.getFullYear()-1980;if((y<0||y>119)&&B(10),C(r,n,y<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),n+=4,s!=-1&&(C(r,n,e.crc),C(r,n+4,s<0?-s-2:s),C(r,n+8,e.size)),C(r,n+12,g),C(r,n+14,f),n+=16,a!=null&&(C(r,n,l),C(r,n+6,e.attrs),C(r,n+10,a),n+=14),r.set(t,n),n+=g,f)for(var $ in u){var S=u[$],A=S.length;C(r,n,+$),C(r,n+2,A),r.set(S,n+4),n+=4+A}return l&&(r.set(c,n),n+=l),n},Hr=function(r,n,e,t,i){C(r,n,101010256),C(r,n+8,e),C(r,n+10,e),C(r,n+12,t),C(r,n+16,i)};function Kr(r,n){n||(n={});var e={},t=[];Tt(r,"",e,n);var i=0,s=0;for(var a in e){var c=e[a],g=c[0],u=c[1],l=u.level==0?0:8,f=ke(a),d=f.length,y=u.comment,$=y&&ke(y),S=$&&$.length,A=Re(u.extra);d>65535&&B(11);var P=l?Vr(g,u):g,L=P.length,G=Dr();G.p(g),t.push(Wt(u,{size:g.length,crc:G.d(),c:P,f,m:$,u:d!=a.length||$&&y.length!=S,o:i,compression:l})),i+=30+d+A+L,s+=76+2*(d+A)+(S||0)+L}for(var T=new W(s+22),R=i,D=s-i,E=0;E<t.length;++E){var f=t[E];at(T,f.o,f,f.f,f.u,f.c.length);var w=30+f.f.length+Re(f.extra);T.set(f.c,f.o+w),at(T,i,f,f.f,f.u,f.c.length,f.o,f.m),i+=16+w+(f.m?f.m.length:0)}return Hr(T,i,t.length,D,R),T}function Qr(r,n){for(var e={},t=r.length-22;en(r,t)!=101010256;--t)(!t||r.length-t>65558)&&B(13);var i=cn(r,t+8);if(!i)return{};var s=en(r,t+16),a=s==4294967295||i==65535;if(a){var c=en(r,t-12);a=en(r,c)==101075792,a&&(i=en(r,c+32),s=en(r,c+48))}for(var g=0;g<i;++g){var u=Jr(r,s,a),l=u[0],f=u[1],d=u[2],y=u[3],$=u[4],S=u[5],A=Gr(r,S);s=$,l?l==8?e[y]=Ir(r.subarray(A,A+f),{out:new W(d)}):B(14,"unknown compression type "+l):e[y]=Qn(r,A,A+f)}return e}const re="manifest.json";function ei(r){if(!r.has(re))throw new Error("Weirpack is missing manifest.json");const n={};for(const[e,t]of r.entries())n[e]=ke(t);return Kr(n,{level:6})}function ti(r){const n=Qr(r),e=n[re];if(!e)throw new Error("Weirpack is missing manifest.json");const t=ze(e),i=JSON.parse(t),s=new Map;s.set(re,t);const a=Object.keys(n);a.sort();for(const c of a){const g=n[c];!g||c===re||s.set(c,ze(g))}return{manifest:i,files:s}}export{lt as Dialect,Zr as LocalLinter,Mt as SuggestionKind,ni as WorkerLinter,Xr as createBinaryModuleFromUrl,ei as packWeirpackFiles,ti as unpackWeirpackBytes};
