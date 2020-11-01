var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="app";var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=0;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.CSS;var h=v.document||{head:{}};var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=function(e){return Promise.resolve(e)};var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var w={};var b=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=N(e,n);var o=R(r,i);var l=S(n);m.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return m.rel(s,a,o,l)}))}))}};var R=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var N=function(e,r){if(r&4)return h;if(r&8)return v;return e};var S=function(e){return(e&2)!==0};var _="{visibility:hidden}.hydrated{visibility:inherit}";var x="http://www.w3.org/1999/xlink";var k=function(e,r){if(r===void 0){r=""}{return function(){return}}};var L=function(e,r){{return function(){return}}};var C=new WeakMap;var T=function(e,r,t){var n=Fe.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Fe.set(e,n)};var j=function(e,r,t,n){var a=P(r.$tagName$);var i=Fe.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=C.get(e);var o=void 0;if(!s){C.set(e,s=new Set)}if(!s.has(a)){{if(m.$cssShim$){o=m.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var E=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=k("attachStyles",r.$tagName$);var i=j(p&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h");if(n&2){t.classList.add(i+"-s")}}a()};var P=function(e,r){return"sc-"+e};var A={};var M="http://www.w3.org/2000/svg";var U="http://www.w3.org/1999/xhtml";var O=function(e){return e!=null};var I=function(e){e=typeof e;return e==="object"||e==="function"};var B=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var z=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!I(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?q(null,a):a)}l=o}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,V)}var c=q(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var q=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var H=e("H",{});var D=function(e){return e&&e.$tag$===H};var V={forEach:function(e,r){return e.map(F).forEach(r)},map:function(e,r){return e.map(F).map(r).map(W)}};var F=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var W=function(e){var r=q(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var G=function(e,r,t,n,a,i){if(t!==n){var s=qe(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=J(t);var $=J(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(qe(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){m.rel(e,r,t,false)}if(n){m.ael(e,r,n,false)}}else{var c=I(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(p){}}var h=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;h=true}}if(n==null||n===false){if(h){e.removeAttributeNS(x,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(x,r,n)}else{e.setAttribute(r,n)}}}}};var Q=/\s/;var J=function(e){return!e?[]:e.split(Q)};var K=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||A;var s=r.$attrs$||A;{for(n in i){if(!(n in s)){G(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){G(a,n,i[n],s[n],t,r.$flags$)}};var X=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var d;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{if(!$){$=l.$tag$==="svg"}c=l.$elm$=h.createElementNS($?M:U,l.$flags$&2?"slot-fb":l.$tag$);if($&&l.$tag$==="foreignObject"){$=false}{K(null,l,$)}if(O(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=X(e,l,u,c);if(v){c.appendChild(v)}}}{if(l.$tag$==="svg"){$=false}else if(c.tagName==="foreignObject"){$=true}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===l.$tag$&&e.$elm$){Y(e.$elm$,false)}}}return c};var Y=function(e,r){m.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){ae(a).insertBefore(a,ne(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){Y(a,r)}}m.$flags$&=~1};var Z=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=X(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,ne(r))}}}};var ee=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;$e(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{Y(a,true)}}a.remove()}}};var re=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var $=r[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(te(f,c)){ie(f,c);f=r[++a];c=n[++i]}else if(te($,v)){ie($,v);$=r[--l];v=n[--u]}else if(te(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){Y(f.$elm$.parentNode,false)}ie(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(te($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){Y($.$elm$.parentNode,false)}ie($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=X(r&&r[i],t,s,e)}else{ie(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=X(r&&r[i],t,i,e);c=n[++i]}if(d){{ae(f.$elm$).insertBefore(d,ne(f.$elm$))}}}}if(a>l){Z(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){ee(r,a,l)}};var te=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var ne=function(e){return e&&e["s-ol"]||e};var ae=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ie=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{K(e,r,$)}}if(n!==null&&a!==null){re(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}Z(t,null,r,a,0,a.length-1)}else if(n!==null){ee(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var se=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}se(t)}}};var oe=[];var le=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(fe(t,a)){i=oe.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{oe.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){oe.map((function(e){if(fe(e.$nodeToRelocate$,t["s-sn"])){i=oe.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!oe.some((function(e){return e.$nodeToRelocate$===t}))){oe.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){le(r)}}};var fe=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var $e=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map($e)}};var ue=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||q(null,null);var u=D(r)?r:z(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=p&&(n.$flags$&1)!==0;l=false}ie($,u);{m.$flags$|=1;if(f){le(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var w=void 0;var b=0;for(;b<oe.length;b++){c=oe[b];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(b=0;b<oe.length;b++){c=oe[b];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){w=d["s-nr"];if(w&&w["s-sn"]===v["s-sn"]&&g===w.parentNode){w=w.nextSibling;if(!w||!w["s-nr"]){y=w;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){se(u.$elm$)}m.$flags$&=~1;oe.length=0}};var ce=e("g",(function(e){return Ie(e).$hostElement$}));var ve=e("c",(function(e,r,t){var n=ce(e);return{emit:function(e){return de(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var de=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var he=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var me=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=k("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return pe(e,a,r)};he(e,n);var s;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return Re(a,r,t)}));e.$queuedListeners$=null}}{s=Re(a,"componentWillLoad")}}t();return Ne(s,(function(){return rr(i)}))};var pe=function(e,r,t){var n=e.$hostElement$;var a=k("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){E(e)}var s=k("render",e.$cmpMeta$.$tagName$);{{ue(e,ge(r))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return ye(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var ge=function(e){try{e=e.render&&e.render()}catch(r){He(r)}return e};var ye=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=k("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{Re(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{Se(t)}{Re(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){be()}}}else{{Re(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ze((function(){return me(e,false)}))}e.$flags$&=~(4|512)}};var we=function(e){{var r=Ie(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){me(r,false)}return t}};var be=function(e){{Se(h.documentElement)}{m.$flags$|=2}Ze((function(){return de(v,"appload",{detail:{namespace:n}})}))};var Re=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){He(n)}}return undefined};var Ne=function(e,r){return e&&e.then?e.then(r):r()};var Se=function(e){return e.classList.add("hydrated")};var _e=function(e,r){if(e!=null&&!I(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var xe=function(e,r){return Ie(e).$instanceValues$.get(r)};var ke=function(e,r,t,n){var a=Ie(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=_e(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){He(n)}}))}}if((s&(2|16))===2){me(a,false)}}}};var Le=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return xe(this,n)},set:function(e){ke(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=Ie(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;m.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var Ce=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Ve(a);if(!s.then)return[3,2];e=L();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Le(s,a,2);s.isProxied=true}t=k("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){He(c)}{n.$flags$&=~8}{n.$flags$|=128}t();Te(n.$lazyInstance$);i=P(a.$tagName$);if(!(!Fe.has(i)&&s.style))return[3,5];o=k("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-a265097c.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=u.sent();u.label=4;case 4:T(i,l,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return me(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Te=function(e){{Re(e,"connectedCallback")}};var je=function(e){if((m.$flags$&1)===0){var r=Ie(e);var t=r.$cmpMeta$;var n=k("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){Ee(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){he(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ce(e,r,t)}}else{b(e,r,t.$listeners$);Te(r.$lazyInstance$)}n()}};var Ee=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Pe=function(e){if((m.$flags$&1)===0){var r=Ie(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Re(t,"disconnectedCallback")}{Re(t,"componentDidUnload")}}};var Ae=e("b",(function(e,r){if(r===void 0){r={}}var t=k();var n=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var o=s.querySelector("meta[charset]");var l=h.createElement("style");var f=[];var $;var u=true;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;if(r.syncQueue){m.$flags$|=4}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!p&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;ze(r,t);if(t.$flags$&1){if(p){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{m.jmp((function(){return je(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return Pe(e)}))};r.prototype.forceUpdate=function(){we(this)};r.prototype.componentOnReady=function(){return Ie(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Le(o,t,1))}}))}));{l.innerHTML=n+_;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return $=setTimeout(be,30)}))}}t()}));var Me=function(e){var r=new URL(e,m.$resourcesUrl$);return r.origin!==v.location.origin?r.href:r.pathname};var Ue=e("d",(function(e,r){if(r in w){return w[r]}else if(r==="window"){return v}else if(r==="document"){return h}else if(r==="isServer"||r==="isPrerender"){return false}else if(r==="isClient"){return true}else if(r==="resourcesUrl"||r==="publicPath"){return Me(".")}else if(r==="queue"){return{write:rr,read:er,tick:{then:function(e){return Ze(e)}}}}return undefined}));var Oe=new WeakMap;var Ie=function(e){return Oe.get(e)};var Be=e("r",(function(e,r){return Oe.set(r.$lazyInstance$=e,r)}));var ze=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,t,r.$listeners$);return Oe.set(e,t)};var qe=function(e,r){return r in e};var He=function(e){return console.error(e)};var De=new Map;var Ve=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=De.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{De.set(i,e)}return e[a]}),He)};var Fe=new Map;var We=[];var Ge=[];var Qe=[];var Je=function(e,r){return function(t){e.push(t);if(!c){c=true;if(r&&m.$flags$&4){Ze(Ye)}else{m.raf(Ye)}}}};var Ke=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){He(t)}}e.length=0};var Xe=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){He(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Ye=function(){u++;Ke(We);var e=(m.$flags$&6)===2?performance.now()+10*Math.ceil(u*(1/22)):Infinity;Xe(Ge,e);Xe(Qe,e);if(Ge.length>0){Qe.push.apply(Qe,Ge);Ge.length=0}if(c=We.length+Ge.length+Qe.length>0){m.raf(Ye)}else{u=0}};var Ze=function(e){return g().then(e)};var er=Je(We,false);var rr=Je(Ge,true);var tr=e("a",(function(){if(!(d&&d.supports&&d.supports("color","var(--c)"))){return r.import("./p-5bf6a5f5.system.js").then((function(){if(m.$cssShim$=v.__cssshim){return m.$cssShim$.i()}else{return 0}}))}return g()}));var nr=e("p",(function(){{m.$cssShim$=v.__cssshim}var e=Array.from(h.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,v.location.href)).href;{ar(t.resourcesUrl,e)}if(!v.customElements){return r.import("./p-693f2c7c.system.js").then((function(){return t}))}}return g(t)}));var ar=function(e,r){var t=B(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;v[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=h.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(v[t].m);o.remove()}}));a.set(i,s);h.head.appendChild(o)}return s}}}}}}));