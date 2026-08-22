(()=>{var ga=Object.defineProperty;var Ay=Object.getOwnPropertyDescriptor;var Ly=Object.getOwnPropertyNames;var My=Object.prototype.hasOwnProperty;var S=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Py=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Oy=(n,e)=>{for(var t in e)ga(n,t,{get:e[t],enumerable:!0})},Dy=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ly(e))!My.call(n,r)&&r!==t&&ga(n,r,{get:()=>e[r],enumerable:!(i=Ay(e,r))||i.enumerable});return n};var Mh=n=>Dy(ga({},"__esModule",{value:!0}),n);var Oh={};Oy(Oh,{$:()=>Ph,default:()=>Fy,jQuery:()=>Ph});function Ny(n,e){if(typeof n>"u"||!n.document)throw new Error("jQuery requires a window with a document");var t=[],i=Object.getPrototypeOf,r=t.slice,o=t.flat?function(s){return t.flat.call(s)}:function(s){return t.concat.apply([],s)},l=t.push,c=t.indexOf,f={},m=f.toString,y=f.hasOwnProperty,x=y.toString,w=x.call(Object),T={};function R(s){return s==null?s+"":typeof s=="object"?f[m.call(s)]||"object":typeof s}function L(s){return s!=null&&s===s.window}function O(s){var a=!!s&&s.length,u=R(s);return typeof s=="function"||L(s)?!1:u==="array"||a===0||typeof a=="number"&&a>0&&a-1 in s}var P=n.document,z={type:!0,src:!0,nonce:!0,noModule:!0};function j(s,a,u){u=u||P;var h,g=u.createElement("script");g.text=s;for(h in z)a&&a[h]&&(g[h]=a[h]);u.head.appendChild(g).parentNode&&g.parentNode.removeChild(g)}var N="4.0.0",F=/HTML$/i,d=function(s,a){return new d.fn.init(s,a)};d.fn=d.prototype={jquery:N,constructor:d,length:0,toArray:function(){return r.call(this)},get:function(s){return s==null?r.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var a=d.merge(this.constructor(),s);return a.prevObject=this,a},each:function(s){return d.each(this,s)},map:function(s){return this.pushStack(d.map(this,function(a,u){return s.call(a,u,a)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(s,a){return(a+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(s,a){return a%2}))},eq:function(s){var a=this.length,u=+s+(s<0?a:0);return this.pushStack(u>=0&&u<a?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()}},d.extend=d.fn.extend=function(){var s,a,u,h,g,p,_=arguments[0]||{},v=1,E=arguments.length,C=!1;for(typeof _=="boolean"&&(C=_,_=arguments[v]||{},v++),typeof _!="object"&&typeof _!="function"&&(_={}),v===E&&(_=this,v--);v<E;v++)if((s=arguments[v])!=null)for(a in s)h=s[a],!(a==="__proto__"||_===h)&&(C&&h&&(d.isPlainObject(h)||(g=Array.isArray(h)))?(u=_[a],g&&!Array.isArray(u)?p=[]:!g&&!d.isPlainObject(u)?p={}:p=u,g=!1,_[a]=d.extend(C,p,h)):h!==void 0&&(_[a]=h));return _},d.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var a,u;return!s||m.call(s)!=="[object Object]"?!1:(a=i(s),a?(u=y.call(a,"constructor")&&a.constructor,typeof u=="function"&&x.call(u)===w):!0)},isEmptyObject:function(s){var a;for(a in s)return!1;return!0},globalEval:function(s,a,u){j(s,{nonce:a&&a.nonce},u)},each:function(s,a){var u,h=0;if(O(s))for(u=s.length;h<u&&a.call(s[h],h,s[h])!==!1;h++);else for(h in s)if(a.call(s[h],h,s[h])===!1)break;return s},text:function(s){var a,u="",h=0,g=s.nodeType;if(!g)for(;a=s[h++];)u+=d.text(a);return g===1||g===11?s.textContent:g===9?s.documentElement.textContent:g===3||g===4?s.nodeValue:u},makeArray:function(s,a){var u=a||[];return s!=null&&(O(Object(s))?d.merge(u,typeof s=="string"?[s]:s):l.call(u,s)),u},inArray:function(s,a,u){return a==null?-1:c.call(a,s,u)},isXMLDoc:function(s){var a=s&&s.namespaceURI,u=s&&(s.ownerDocument||s).documentElement;return!F.test(a||u&&u.nodeName||"HTML")},contains:function(s,a){var u=a&&a.parentNode;return s===u||!!(u&&u.nodeType===1&&(s.contains?s.contains(u):s.compareDocumentPosition&&s.compareDocumentPosition(u)&16))},merge:function(s,a){for(var u=+a.length,h=0,g=s.length;h<u;h++)s[g++]=a[h];return s.length=g,s},grep:function(s,a,u){for(var h,g=[],p=0,_=s.length,v=!u;p<_;p++)h=!a(s[p],p),h!==v&&g.push(s[p]);return g},map:function(s,a,u){var h,g,p=0,_=[];if(O(s))for(h=s.length;p<h;p++)g=a(s[p],p,u),g!=null&&_.push(g);else for(p in s)g=a(s[p],p,u),g!=null&&_.push(g);return o(_)},guid:1,support:T}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=t[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,a){f["[object "+a+"]"]=a.toLowerCase()});function V(s,a){return s.nodeName&&s.nodeName.toLowerCase()===a.toLowerCase()}var X=t.pop,k="[\\x20\\t\\r\\n\\f]",U=P.documentMode,ne=U&&new RegExp(":enabled|:disabled|\\["+k+"*name"+k+"*="+k+`*(?:''|"")`),fe=new RegExp("^"+k+"+|((?:^|[^\\\\])(?:\\\\.)*)"+k+"+$","g"),ie="(?:\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Oe=new RegExp("^"+k+"*([>+~]|"+k+")"+k+"*"),Ue=new RegExp(k+"|>"),le=/[+~]/,q=P.documentElement,ue=q.matches||q.msMatchesSelector;function me(){var s=[];function a(u,h){return s.push(u+" ")>d.expr.cacheLength&&delete a[s.shift()],a[u+" "]=h}return a}function Re(s){return s&&typeof s.getElementsByTagName<"u"&&s}var Se="\\["+k+"*("+ie+")(?:"+k+"*([*^$|!~]?=)"+k+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ie+"))|)"+k+"*\\]",Ae=":("+ie+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Se+")*)|.*)\\)|)",De={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+Se),PSEUDO:new RegExp("^"+Ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+k+"*(even|odd|(([+-]|)(\\d*)n|)"+k+"*(?:([+-]|)"+k+"*(\\d+)|))"+k+"*\\)|)","i")},xn=new RegExp(Ae),nt=new RegExp("\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\([^\\r\\n\\f])","g"),_t=function(s,a){var u="0x"+s.slice(1)-65536;return a||(u<0?String.fromCharCode(u+65536):String.fromCharCode(u>>10|55296,u&1023|56320))};function de(s){return s.replace(nt,_t)}function it(s){d.error("Syntax error, unrecognized expression: "+s)}var Vn=new RegExp("^"+k+"*,"+k+"*"),xt=me();function En(s,a){var u,h,g,p,_,v,E,C=xt[s+" "];if(C)return a?0:C.slice(0);for(_=s,v=[],E=d.expr.preFilter;_;){(!u||(h=Vn.exec(_)))&&(h&&(_=_.slice(h[0].length)||_),v.push(g=[])),u=!1,(h=Oe.exec(_))&&(u=h.shift(),g.push({value:u,type:h[0].replace(fe," ")}),_=_.slice(u.length));for(p in De)(h=d.expr.match[p].exec(_))&&(!E[p]||(h=E[p](h)))&&(u=h.shift(),g.push({value:u,type:p,matches:h}),_=_.slice(u.length));if(!u)break}return a?_.length:_?it(s):xt(s,v).slice(0)}var qo={ATTR:function(s){return s[1]=de(s[1]),s[3]=de(s[3]||s[4]||s[5]||""),s[2]==="~="&&(s[3]=" "+s[3]+" "),s.slice(0,4)},CHILD:function(s){return s[1]=s[1].toLowerCase(),s[1].slice(0,3)==="nth"?(s[3]||it(s[0]),s[4]=+(s[4]?s[5]+(s[6]||1):2*(s[3]==="even"||s[3]==="odd")),s[5]=+(s[7]+s[8]||s[3]==="odd")):s[3]&&it(s[0]),s},PSEUDO:function(s){var a,u=!s[6]&&s[2];return De.CHILD.test(s[0])?null:(s[3]?s[2]=s[4]||s[5]||"":u&&xn.test(u)&&(a=En(u,!0))&&(a=u.indexOf(")",u.length-a)-u.length)&&(s[0]=s[0].slice(0,a),s[2]=u.slice(0,a)),s.slice(0,3))}};function zt(s){for(var a=0,u=s.length,h="";a<u;a++)h+=s[a].value;return h}function $e(s,a,u,h,g,p,_){var v=0,E=s.length,C=u==null;if(R(u)==="object"){g=!0;for(v in u)$e(s,a,v,u[v],!0,p,_)}else if(h!==void 0&&(g=!0,typeof h!="function"&&(_=!0),C&&(_?(a.call(s,h),a=null):(C=a,a=function(I,M,b){return C.call(d(I),b)})),a))for(;v<E;v++)a(s[v],u,_?h:h.call(s[v],v,a(s[v],u)));return g?s:C?a.call(s):E?a(s[0],u):p}var rt=/[^\x20\t\r\n\f]+/g;d.fn.extend({attr:function(s,a){return $e(this,d.attr,s,a,arguments.length>1)},removeAttr:function(s){return this.each(function(){d.removeAttr(this,s)})}}),d.extend({attr:function(s,a,u){var h,g,p=s.nodeType;if(!(p===3||p===8||p===2)){if(typeof s.getAttribute>"u")return d.prop(s,a,u);if((p!==1||!d.isXMLDoc(s))&&(g=d.attrHooks[a.toLowerCase()]),u!==void 0){if(u===null||u===!1&&a.toLowerCase().indexOf("aria-")!==0){d.removeAttr(s,a);return}return g&&"set"in g&&(h=g.set(s,u,a))!==void 0?h:(s.setAttribute(a,u),u)}return g&&"get"in g&&(h=g.get(s,a))!==null?h:(h=s.getAttribute(a),h??void 0)}},attrHooks:{},removeAttr:function(s,a){var u,h=0,g=a&&a.match(rt);if(g&&s.nodeType===1)for(;u=g[h++];)s.removeAttribute(u)}}),U&&(d.attrHooks.type={set:function(s,a){if(a==="radio"&&V(s,"input")){var u=s.value;return s.setAttribute("type",a),u&&(s.value=u),a}}});var fr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function cs(s,a){return a?s==="\0"?"\uFFFD":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}d.escapeSelector=function(s){return(s+"").replace(fr,cs)};var dr=t.sort,gr=t.splice,fi;function Kn(s,a){if(s===a)return fi=!0,0;var u=!s.compareDocumentPosition-!a.compareDocumentPosition;return u||(u=(s.ownerDocument||s)==(a.ownerDocument||a)?s.compareDocumentPosition(a):1,u&1?s==P||s.ownerDocument==P&&d.contains(P,s)?-1:a==P||a.ownerDocument==P&&d.contains(P,a)?1:0:u&4?-1:1)}d.uniqueSort=function(s){var a,u=[],h=0,g=0;if(fi=!1,dr.call(s,Kn),fi){for(;a=s[g++];)a===s[g]&&(h=u.push(g));for(;h--;)gr.call(s,u[h],1)}return s},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(r.apply(this)))};var vn,hs,dt,zc,tn,nn=0,Rm=0,jc=me(),Uc=me(),fs=me(),bm=new RegExp(k+"+","g"),Im=new RegExp("^"+ie+"$"),Gc=d.extend({needsContext:new RegExp("^"+k+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+k+"*((?:-\\d)?\\d*)"+k+"*\\)|)(?=[^-]|$)","i")},De),Sm=/^(?:input|select|textarea|button)$/i,Am=/^h\d$/i,Lm=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Mm=function(){di()},Pm=ds(function(s){return s.disabled===!0&&V(s,"fieldset")},{dir:"parentNode",next:"legend"});function At(s,a,u,h){var g,p,_,v,E,C,I,M=a&&a.ownerDocument,b=a?a.nodeType:9;if(u=u||[],typeof s!="string"||!s||b!==1&&b!==9&&b!==11)return u;if(!h&&(di(a),a=a||dt,tn)){if(b!==11&&(E=Lm.exec(s)))if(g=E[1]){if(b===9)return(_=a.getElementById(g))&&l.call(u,_),u;if(M&&(_=M.getElementById(g))&&d.contains(a,_))return l.call(u,_),u}else{if(E[2])return l.apply(u,a.getElementsByTagName(s)),u;if((g=E[3])&&a.getElementsByClassName)return l.apply(u,a.getElementsByClassName(g)),u}if(!fs[s+" "]&&(!ne||!ne.test(s))){if(I=s,M=a,b===1&&(Ue.test(s)||Oe.test(s))){for(M=le.test(s)&&Re(a.parentNode)||a,(M!=a||U)&&((v=a.getAttribute("id"))?v=d.escapeSelector(v):a.setAttribute("id",v=d.expando)),C=En(s),p=C.length;p--;)C[p]=(v?"#"+v:":scope")+" "+zt(C[p]);I=C.join(",")}try{return l.apply(u,M.querySelectorAll(I)),u}catch{fs(s,!0)}finally{v===d.expando&&a.removeAttribute("id")}}}return Vc(s.replace(fe,"$1"),a,u,h)}function jt(s){return s[d.expando]=!0,s}function Om(s){return function(a){return V(a,"input")&&a.type===s}}function Dm(s){return function(a){return(V(a,"input")||V(a,"button"))&&a.type===s}}function Xc(s){return function(a){return"form"in a?a.parentNode&&a.disabled===!1?"label"in a?"label"in a.parentNode?a.parentNode.disabled===s:a.disabled===s:a.isDisabled===s||a.isDisabled!==!s&&Pm(a)===s:a.disabled===s:"label"in a?a.disabled===s:!1}}function Bn(s){return jt(function(a){return a=+a,jt(function(u,h){for(var g,p=s([],u.length,a),_=p.length;_--;)u[g=p[_]]&&(u[g]=!(h[g]=u[g]))})})}function di(s){var a,u=s?s.ownerDocument||s:P;u==dt||u.nodeType!==9||(dt=u,zc=dt.documentElement,tn=!d.isXMLDoc(dt),U&&P!=dt&&(a=dt.defaultView)&&a.top!==a&&a.addEventListener("unload",Mm))}At.matches=function(s,a){return At(s,null,null,a)},At.matchesSelector=function(s,a){if(di(s),tn&&!fs[a+" "]&&(!ne||!ne.test(a)))try{return ue.call(s,a)}catch{fs(a,!0)}return At(a,dt,null,[s]).length>0},d.expr={cacheLength:50,createPseudo:jt,match:Gc,find:{ID:function(s,a){if(typeof a.getElementById<"u"&&tn){var u=a.getElementById(s);return u?[u]:[]}},TAG:function(s,a){return typeof a.getElementsByTagName<"u"?a.getElementsByTagName(s):a.querySelectorAll(s)},CLASS:function(s,a){if(typeof a.getElementsByClassName<"u"&&tn)return a.getElementsByClassName(s)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:qo,filter:{ID:function(s){var a=de(s);return function(u){return u.getAttribute("id")===a}},TAG:function(s){var a=de(s).toLowerCase();return s==="*"?function(){return!0}:function(u){return V(u,a)}},CLASS:function(s){var a=jc[s+" "];return a||(a=new RegExp("(^|"+k+")"+s+"("+k+"|$)"))&&jc(s,function(u){return a.test(typeof u.className=="string"&&u.className||typeof u.getAttribute<"u"&&u.getAttribute("class")||"")})},ATTR:function(s,a,u){return function(h){var g=d.attr(h,s);return g==null?a==="!=":a?(g+="",a==="="?g===u:a==="!="?g!==u:a==="^="?u&&g.indexOf(u)===0:a==="*="?u&&g.indexOf(u)>-1:a==="$="?u&&g.slice(-u.length)===u:a==="~="?(" "+g.replace(bm," ")+" ").indexOf(u)>-1:a==="|="?g===u||g.slice(0,u.length+1)===u+"-":!1):!0}},CHILD:function(s,a,u,h,g){var p=s.slice(0,3)!=="nth",_=s.slice(-4)!=="last",v=a==="of-type";return h===1&&g===0?function(E){return!!E.parentNode}:function(E,C,I){var M,b,A,G,H,B=p!==_?"nextSibling":"previousSibling",Ee=E.parentNode,xe=v&&E.nodeName.toLowerCase(),at=!I&&!v,We=!1;if(Ee){if(p){for(;B;){for(A=E;A=A[B];)if(v?V(A,xe):A.nodeType===1)return!1;H=B=s==="only"&&!H&&"nextSibling"}return!0}if(H=[_?Ee.firstChild:Ee.lastChild],_&&at){for(b=Ee[d.expando]||(Ee[d.expando]={}),M=b[s]||[],G=M[0]===nn&&M[1],We=G&&M[2],A=G&&Ee.childNodes[G];A=++G&&A&&A[B]||(We=G=0)||H.pop();)if(A.nodeType===1&&++We&&A===E){b[s]=[nn,G,We];break}}else if(at&&(b=E[d.expando]||(E[d.expando]={}),M=b[s]||[],G=M[0]===nn&&M[1],We=G),We===!1)for(;(A=++G&&A&&A[B]||(We=G=0)||H.pop())&&!((v?V(A,xe):A.nodeType===1)&&++We&&(at&&(b=A[d.expando]||(A[d.expando]={}),b[s]=[nn,We]),A===E)););return We-=g,We===h||We%h===0&&We/h>=0}}},PSEUDO:function(s,a){var u=d.expr.pseudos[s]||d.expr.setFilters[s.toLowerCase()]||it("unsupported pseudo: "+s);return u[d.expando]?u(a):u}},pseudos:{not:jt(function(s){var a=[],u=[],h=$o(s.replace(fe,"$1"));return h[d.expando]?jt(function(g,p,_,v){for(var E,C=h(g,null,v,[]),I=g.length;I--;)(E=C[I])&&(g[I]=!(p[I]=E))}):function(g,p,_){return a[0]=g,h(a,null,_,u),a[0]=null,!u.pop()}}),has:jt(function(s){return function(a){return At(s,a).length>0}}),contains:jt(function(s){return s=de(s),function(a){return(a.textContent||d.text(a)).indexOf(s)>-1}}),lang:jt(function(s){return Im.test(s||"")||it("unsupported lang: "+s),s=de(s).toLowerCase(),function(a){var u;do if(u=tn?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang"))return u=u.toLowerCase(),u===s||u.indexOf(s+"-")===0;while((a=a.parentNode)&&a.nodeType===1);return!1}}),target:function(s){var a=n.location&&n.location.hash;return a&&a.slice(1)===s.id},root:function(s){return s===zc},focus:function(s){return s===dt.activeElement&&dt.hasFocus()&&!!(s.type||s.href||~s.tabIndex)},enabled:Xc(!1),disabled:Xc(!0),checked:function(s){return V(s,"input")&&!!s.checked||V(s,"option")&&!!s.selected},selected:function(s){return U&&s.parentNode&&s.parentNode.selectedIndex,s.selected===!0},empty:function(s){for(s=s.firstChild;s;s=s.nextSibling)if(s.nodeType<6)return!1;return!0},parent:function(s){return!d.expr.pseudos.empty(s)},header:function(s){return Am.test(s.nodeName)},input:function(s){return Sm.test(s.nodeName)},button:function(s){return V(s,"input")&&s.type==="button"||V(s,"button")},text:function(s){return V(s,"input")&&s.type==="text"},first:Bn(function(){return[0]}),last:Bn(function(s,a){return[a-1]}),eq:Bn(function(s,a,u){return[u<0?u+a:u]}),even:Bn(function(s,a){for(var u=0;u<a;u+=2)s.push(u);return s}),odd:Bn(function(s,a){for(var u=1;u<a;u+=2)s.push(u);return s}),lt:Bn(function(s,a,u){var h;for(u<0?h=u+a:u>a?h=a:h=u;--h>=0;)s.push(h);return s}),gt:Bn(function(s,a,u){for(var h=u<0?u+a:u;++h<a;)s.push(h);return s})}},d.expr.pseudos.nth=d.expr.pseudos.eq;for(vn in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.expr.pseudos[vn]=Om(vn);for(vn in{submit:!0,reset:!0})d.expr.pseudos[vn]=Dm(vn);function Wc(){}Wc.prototype=d.expr.pseudos,d.expr.setFilters=new Wc;function ds(s,a,u){var h=a.dir,g=a.next,p=g||h,_=u&&p==="parentNode",v=Rm++;return a.first?function(E,C,I){for(;E=E[h];)if(E.nodeType===1||_)return s(E,C,I);return!1}:function(E,C,I){var M,b,A=[nn,v];if(I){for(;E=E[h];)if((E.nodeType===1||_)&&s(E,C,I))return!0}else for(;E=E[h];)if(E.nodeType===1||_)if(b=E[d.expando]||(E[d.expando]={}),g&&V(E,g))E=E[h]||E;else{if((M=b[p])&&M[0]===nn&&M[1]===v)return A[2]=M[2];if(b[p]=A,A[2]=s(E,C,I))return!0}return!1}}function Ho(s){return s.length>1?function(a,u,h){for(var g=s.length;g--;)if(!s[g](a,u,h))return!1;return!0}:s[0]}function Nm(s,a,u){for(var h=0,g=a.length;h<g;h++)At(s,a[h],u);return u}function gs(s,a,u,h,g){for(var p,_=[],v=0,E=s.length,C=a!=null;v<E;v++)(p=s[v])&&(!u||u(p,h,g))&&(_.push(p),C&&a.push(v));return _}function Yo(s,a,u,h,g,p){return h&&!h[d.expando]&&(h=Yo(h)),g&&!g[d.expando]&&(g=Yo(g,p)),jt(function(_,v,E,C){var I,M,b,A,G=[],H=[],B=v.length,Ee=_||Nm(a||"*",E.nodeType?[E]:E,[]),xe=s&&(_||!a)?gs(Ee,G,s,E,C):Ee;if(u?(A=g||(_?s:B||h)?[]:v,u(xe,A,E,C)):A=xe,h)for(I=gs(A,H),h(I,[],E,C),M=I.length;M--;)(b=I[M])&&(A[H[M]]=!(xe[H[M]]=b));if(_){if(g||s){if(g){for(I=[],M=A.length;M--;)(b=A[M])&&I.push(xe[M]=b);g(null,A=[],I,C)}for(M=A.length;M--;)(b=A[M])&&(I=g?c.call(_,b):G[M])>-1&&(_[I]=!(v[I]=b))}}else A=gs(A===v?A.splice(B,A.length):A),g?g(null,v,A,C):l.apply(v,A)})}function Zo(s){for(var a,u,h,g=s.length,p=d.expr.relative[s[0].type],_=p||d.expr.relative[" "],v=p?1:0,E=ds(function(M){return M===a},_,!0),C=ds(function(M){return c.call(a,M)>-1},_,!0),I=[function(M,b,A){var G=!p&&(A||b!=hs)||((a=b).nodeType?E(M,b,A):C(M,b,A));return a=null,G}];v<g;v++)if(u=d.expr.relative[s[v].type])I=[ds(Ho(I),u)];else{if(u=d.expr.filter[s[v].type].apply(null,s[v].matches),u[d.expando]){for(h=++v;h<g&&!d.expr.relative[s[h].type];h++);return Yo(v>1&&Ho(I),v>1&&zt(s.slice(0,v-1).concat({value:s[v-2].type===" "?"*":""})).replace(fe,"$1"),u,v<h&&Zo(s.slice(v,h)),h<g&&Zo(s=s.slice(h)),h<g&&zt(s))}I.push(u)}return Ho(I)}function Fm(s,a){var u=a.length>0,h=s.length>0,g=function(p,_,v,E,C){var I,M,b,A=0,G="0",H=p&&[],B=[],Ee=hs,xe=p||h&&d.expr.find.TAG("*",C),at=nn+=Ee==null?1:Math.random()||.1;for(C&&(hs=_==dt||_||C);(I=xe[G])!=null;G++){if(h&&I){for(M=0,!_&&I.ownerDocument!=dt&&(di(I),v=!tn);b=s[M++];)if(b(I,_||dt,v)){l.call(E,I);break}C&&(nn=at)}u&&((I=!b&&I)&&A--,p&&H.push(I))}if(A+=G,u&&G!==A){for(M=0;b=a[M++];)b(H,B,_,v);if(p){if(A>0)for(;G--;)H[G]||B[G]||(B[G]=X.call(E));B=gs(B)}l.apply(E,B),C&&!p&&B.length>0&&A+a.length>1&&d.uniqueSort(E)}return C&&(nn=at,hs=Ee),H};return u?jt(g):g}function $o(s,a){var u,h=[],g=[],p=Uc[s+" "];if(!p){for(a||(a=En(s)),u=a.length;u--;)p=Zo(a[u]),p[d.expando]?h.push(p):g.push(p);p=Uc(s,Fm(g,h)),p.selector=s}return p}function Vc(s,a,u,h){var g,p,_,v,E,C=typeof s=="function"&&s,I=!h&&En(s=C.selector||s);if(u=u||[],I.length===1){if(p=I[0]=I[0].slice(0),p.length>2&&(_=p[0]).type==="ID"&&a.nodeType===9&&tn&&d.expr.relative[p[1].type]){if(a=(d.expr.find.ID(de(_.matches[0]),a)||[])[0],a)C&&(a=a.parentNode);else return u;s=s.slice(p.shift().value.length)}for(g=Gc.needsContext.test(s)?0:p.length;g--&&(_=p[g],!d.expr.relative[v=_.type]);)if((E=d.expr.find[v])&&(h=E(de(_.matches[0]),le.test(p[0].type)&&Re(a.parentNode)||a))){if(p.splice(g,1),s=h.length&&zt(p),!s)return l.apply(u,h),u;break}}return(C||$o(s,I))(h,a,!tn,u,!a||le.test(s)&&Re(a.parentNode)||a),u}di(),d.find=At,At.compile=$o,At.select=Vc,At.setDocument=di,At.tokenize=En;function gi(s,a,u){for(var h=[],g=u!==void 0;(s=s[a])&&s.nodeType!==9;)if(s.nodeType===1){if(g&&d(s).is(u))break;h.push(s)}return h}function Kc(s,a){for(var u=[];s;s=s.nextSibling)s.nodeType===1&&s!==a&&u.push(s);return u}var Bc=d.expr.match.needsContext,qc=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Hc(s){return s[0]==="<"&&s[s.length-1]===">"&&s.length>=3}function Qo(s,a,u){return typeof a=="function"?d.grep(s,function(h,g){return!!a.call(h,g,h)!==u}):a.nodeType?d.grep(s,function(h){return h===a!==u}):typeof a!="string"?d.grep(s,function(h){return c.call(a,h)>-1!==u}):d.filter(a,s,u)}d.filter=function(s,a,u){var h=a[0];return u&&(s=":not("+s+")"),a.length===1&&h.nodeType===1?d.find.matchesSelector(h,s)?[h]:[]:d.find.matches(s,d.grep(a,function(g){return g.nodeType===1}))},d.fn.extend({find:function(s){var a,u,h=this.length,g=this;if(typeof s!="string")return this.pushStack(d(s).filter(function(){for(a=0;a<h;a++)if(d.contains(g[a],this))return!0}));for(u=this.pushStack([]),a=0;a<h;a++)d.find(s,g[a],u);return h>1?d.uniqueSort(u):u},filter:function(s){return this.pushStack(Qo(this,s||[],!1))},not:function(s){return this.pushStack(Qo(this,s||[],!0))},is:function(s){return!!Qo(this,typeof s=="string"&&Bc.test(s)?d(s):s||[],!1).length}});var ps,km=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,zm=d.fn.init=function(s,a){var u,h;if(!s)return this;if(s.nodeType)return this[0]=s,this.length=1,this;if(typeof s=="function")return ps.ready!==void 0?ps.ready(s):s(d);if(u=s+"",Hc(u))u=[null,s,null];else if(typeof s=="string")u=km.exec(s);else return d.makeArray(s,this);if(u&&(u[1]||!a))if(u[1]){if(a=a instanceof d?a[0]:a,d.merge(this,d.parseHTML(u[1],a&&a.nodeType?a.ownerDocument||a:P,!0)),qc.test(u[1])&&d.isPlainObject(a))for(u in a)typeof this[u]=="function"?this[u](a[u]):this.attr(u,a[u]);return this}else return h=P.getElementById(u[2]),h&&(this[0]=h,this.length=1),this;else return!a||a.jquery?(a||ps).find(s):this.constructor(a).find(s)};zm.prototype=d.fn,ps=d(P);var jm=/^(?:parents|prev(?:Until|All))/,Um={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(s){var a=d(s,this),u=a.length;return this.filter(function(){for(var h=0;h<u;h++)if(d.contains(this,a[h]))return!0})},closest:function(s,a){var u,h=0,g=this.length,p=[],_=typeof s!="string"&&d(s);if(!Bc.test(s)){for(;h<g;h++)for(u=this[h];u&&u!==a;u=u.parentNode)if(u.nodeType<11&&(_?_.index(u)>-1:u.nodeType===1&&d.find.matchesSelector(u,s))){p.push(u);break}}return this.pushStack(p.length>1?d.uniqueSort(p):p)},index:function(s){return s?typeof s=="string"?c.call(d(s),this[0]):c.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,a){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(s,a))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Yc(s,a){for(;(s=s[a])&&s.nodeType!==1;);return s}d.each({parent:function(s){var a=s.parentNode;return a&&a.nodeType!==11?a:null},parents:function(s){return gi(s,"parentNode")},parentsUntil:function(s,a,u){return gi(s,"parentNode",u)},next:function(s){return Yc(s,"nextSibling")},prev:function(s){return Yc(s,"previousSibling")},nextAll:function(s){return gi(s,"nextSibling")},prevAll:function(s){return gi(s,"previousSibling")},nextUntil:function(s,a,u){return gi(s,"nextSibling",u)},prevUntil:function(s,a,u){return gi(s,"previousSibling",u)},siblings:function(s){return Kc((s.parentNode||{}).firstChild,s)},children:function(s){return Kc(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(V(s,"template")&&(s=s.content||s),d.merge([],s.childNodes))}},function(s,a){d.fn[s]=function(u,h){var g=d.map(this,a,u);return s.slice(-5)!=="Until"&&(h=u),h&&typeof h=="string"&&(g=d.filter(h,g)),this.length>1&&(Um[s]||d.uniqueSort(g),jm.test(s)&&g.reverse()),this.pushStack(g)}});function Gm(s){var a={};return d.each(s.match(rt)||[],function(u,h){a[h]=!0}),a}d.Callbacks=function(s){s=typeof s=="string"?Gm(s):d.extend({},s);var a,u,h,g,p=[],_=[],v=-1,E=function(){for(g=g||s.once,h=a=!0;_.length;v=-1)for(u=_.shift();++v<p.length;)p[v].apply(u[0],u[1])===!1&&s.stopOnFalse&&(v=p.length,u=!1);s.memory||(u=!1),a=!1,g&&(u?p=[]:p="")},C={add:function(){return p&&(u&&!a&&(v=p.length-1,_.push(u)),(function I(M){d.each(M,function(b,A){typeof A=="function"?(!s.unique||!C.has(A))&&p.push(A):A&&A.length&&R(A)!=="string"&&I(A)})})(arguments),u&&!a&&E()),this},remove:function(){return d.each(arguments,function(I,M){for(var b;(b=d.inArray(M,p,b))>-1;)p.splice(b,1),b<=v&&v--}),this},has:function(I){return I?d.inArray(I,p)>-1:p.length>0},empty:function(){return p&&(p=[]),this},disable:function(){return g=_=[],p=u="",this},disabled:function(){return!p},lock:function(){return g=_=[],!u&&!a&&(p=u=""),this},locked:function(){return!!g},fireWith:function(I,M){return g||(M=M||[],M=[I,M.slice?M.slice():M],_.push(M),a||E()),this},fire:function(){return C.fireWith(this,arguments),this},fired:function(){return!!h}};return C};function pi(s){return s}function ms(s){throw s}function Zc(s,a,u,h){var g;try{s&&typeof(g=s.promise)=="function"?g.call(s).done(a).fail(u):s&&typeof(g=s.then)=="function"?g.call(s,a,u):a.apply(void 0,[s].slice(h))}catch(p){u(p)}}d.extend({Deferred:function(s){var a=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],u="pending",h={state:function(){return u},always:function(){return g.done(arguments).fail(arguments),this},catch:function(p){return h.then(null,p)},pipe:function(){var p=arguments;return d.Deferred(function(_){d.each(a,function(v,E){var C=typeof p[E[4]]=="function"&&p[E[4]];g[E[1]](function(){var I=C&&C.apply(this,arguments);I&&typeof I.promise=="function"?I.promise().progress(_.notify).done(_.resolve).fail(_.reject):_[E[0]+"With"](this,C?[I]:arguments)})}),p=null}).promise()},then:function(p,_,v){var E=0;function C(I,M,b,A){return function(){var G=this,H=arguments,B=function(){var xe,at;if(!(I<E)){if(xe=b.apply(G,H),xe===M.promise())throw new TypeError("Thenable self-resolution");at=xe&&(typeof xe=="object"||typeof xe=="function")&&xe.then,typeof at=="function"?A?at.call(xe,C(E,M,pi,A),C(E,M,ms,A)):(E++,at.call(xe,C(E,M,pi,A),C(E,M,ms,A),C(E,M,pi,M.notifyWith))):(b!==pi&&(G=void 0,H=[xe]),(A||M.resolveWith)(G,H))}},Ee=A?B:function(){try{B()}catch(xe){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(xe,Ee.error),I+1>=E&&(b!==ms&&(G=void 0,H=[xe]),M.rejectWith(G,H))}};I?Ee():(d.Deferred.getErrorHook&&(Ee.error=d.Deferred.getErrorHook()),n.setTimeout(Ee))}}return d.Deferred(function(I){a[0][3].add(C(0,I,typeof v=="function"?v:pi,I.notifyWith)),a[1][3].add(C(0,I,typeof p=="function"?p:pi)),a[2][3].add(C(0,I,typeof _=="function"?_:ms))}).promise()},promise:function(p){return p!=null?d.extend(p,h):h}},g={};return d.each(a,function(p,_){var v=_[2],E=_[5];h[_[1]]=v.add,E&&v.add(function(){u=E},a[3-p][2].disable,a[3-p][3].disable,a[0][2].lock,a[0][3].lock),v.add(_[3].fire),g[_[0]]=function(){return g[_[0]+"With"](this===g?void 0:this,arguments),this},g[_[0]+"With"]=v.fireWith}),h.promise(g),s&&s.call(g,g),g},when:function(s){var a=arguments.length,u=a,h=Array(u),g=r.call(arguments),p=d.Deferred(),_=function(v){return function(E){h[v]=this,g[v]=arguments.length>1?r.call(arguments):E,--a||p.resolveWith(h,g)}};if(a<=1&&(Zc(s,p.done(_(u)).resolve,p.reject,!a),p.state()==="pending"||typeof(g[u]&&g[u].then)=="function"))return p.then();for(;u--;)Zc(g[u],_(u),p.reject);return p.promise()}});var Xm=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(s,a){s&&Xm.test(s.name)&&n.console.warn("jQuery.Deferred exception",s,a)},d.readyException=function(s){n.setTimeout(function(){throw s})};var Jo=d.Deferred();d.fn.ready=function(s){return Jo.then(s).catch(function(a){d.readyException(a)}),this},d.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(s!==!0&&--d.readyWait>0)&&Jo.resolveWith(P,[d]))}}),d.ready.then=Jo.then;function ys(){P.removeEventListener("DOMContentLoaded",ys),n.removeEventListener("load",ys),d.ready()}P.readyState!=="loading"?n.setTimeout(d.ready):(P.addEventListener("DOMContentLoaded",ys),n.addEventListener("load",ys));var Wm=/-([a-z])/g;function Vm(s,a){return a.toUpperCase()}function qn(s){return s.replace(Wm,Vm)}function pr(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType}function mr(){this.expando=d.expando+mr.uid++}mr.uid=1,mr.prototype={cache:function(s){var a=s[this.expando];return a||(a=Object.create(null),pr(s)&&(s.nodeType?s[this.expando]=a:Object.defineProperty(s,this.expando,{value:a,configurable:!0}))),a},set:function(s,a,u){var h,g=this.cache(s);if(typeof a=="string")g[qn(a)]=u;else for(h in a)g[qn(h)]=a[h];return u},get:function(s,a){return a===void 0?this.cache(s):s[this.expando]&&s[this.expando][qn(a)]},access:function(s,a,u){return a===void 0||a&&typeof a=="string"&&u===void 0?this.get(s,a):(this.set(s,a,u),u!==void 0?u:a)},remove:function(s,a){var u,h=s[this.expando];if(h!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(qn):(a=qn(a),a=a in h?[a]:a.match(rt)||[]),u=a.length;u--;)delete h[a[u]];(a===void 0||d.isEmptyObject(h))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var a=s[this.expando];return a!==void 0&&!d.isEmptyObject(a)}};var Z=new mr,st=new mr,Km=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Bm=/[A-Z]/g;function qm(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Km.test(s)?JSON.parse(s):s}function $c(s,a,u){var h;if(u===void 0&&s.nodeType===1)if(h="data-"+a.replace(Bm,"-$&").toLowerCase(),u=s.getAttribute(h),typeof u=="string"){try{u=qm(u)}catch{}st.set(s,a,u)}else u=void 0;return u}d.extend({hasData:function(s){return st.hasData(s)||Z.hasData(s)},data:function(s,a,u){return st.access(s,a,u)},removeData:function(s,a){st.remove(s,a)},_data:function(s,a,u){return Z.access(s,a,u)},_removeData:function(s,a){Z.remove(s,a)}}),d.fn.extend({data:function(s,a){var u,h,g,p=this[0],_=p&&p.attributes;if(s===void 0){if(this.length&&(g=st.get(p),p.nodeType===1&&!Z.get(p,"hasDataAttrs"))){for(u=_.length;u--;)_[u]&&(h=_[u].name,h.indexOf("data-")===0&&(h=qn(h.slice(5)),$c(p,h,g[h])));Z.set(p,"hasDataAttrs",!0)}return g}return typeof s=="object"?this.each(function(){st.set(this,s)}):$e(this,function(v){var E;if(p&&v===void 0)return E=st.get(p,s),E!==void 0||(E=$c(p,s),E!==void 0)?E:void 0;this.each(function(){st.set(this,s,v)})},null,a,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){st.remove(this,s)})}}),d.extend({queue:function(s,a,u){var h;if(s)return a=(a||"fx")+"queue",h=Z.get(s,a),u&&(!h||Array.isArray(u)?h=Z.set(s,a,d.makeArray(u)):h.push(u)),h||[]},dequeue:function(s,a){a=a||"fx";var u=d.queue(s,a),h=u.length,g=u.shift(),p=d._queueHooks(s,a),_=function(){d.dequeue(s,a)};g==="inprogress"&&(g=u.shift(),h--),g&&(a==="fx"&&u.unshift("inprogress"),delete p.stop,g.call(s,_,p)),!h&&p&&p.empty.fire()},_queueHooks:function(s,a){var u=a+"queueHooks";return Z.get(s,u)||Z.set(s,u,{empty:d.Callbacks("once memory").add(function(){Z.remove(s,[a+"queue",u])})})}}),d.fn.extend({queue:function(s,a){var u=2;return typeof s!="string"&&(a=s,s="fx",u--),arguments.length<u?d.queue(this[0],s):a===void 0?this:this.each(function(){var h=d.queue(this,s,a);d._queueHooks(this,s),s==="fx"&&h[0]!=="inprogress"&&d.dequeue(this,s)})},dequeue:function(s){return this.each(function(){d.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,a){var u,h=1,g=d.Deferred(),p=this,_=this.length,v=function(){--h||g.resolveWith(p,[p])};for(typeof s!="string"&&(a=s,s=void 0),s=s||"fx";_--;)u=Z.get(p[_],s+"queueHooks"),u&&u.empty&&(h++,u.empty.add(v));return v(),g.promise(a)}});var Qc=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,yr=new RegExp("^(?:([+-])=|)("+Qc+")([a-z%]*)$","i"),wn=["Top","Right","Bottom","Left"];function _s(s,a){return s=a||s,s.style.display==="none"||s.style.display===""&&d.css(s,"display")==="none"}var Hm=/^[a-z]/,Ym=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function xs(s){return Hm.test(s)&&Ym.test(s[0].toUpperCase()+s.slice(1))}function Jc(s,a,u,h){var g,p,_=20,v=h?function(){return h.cur()}:function(){return d.css(s,a,"")},E=v(),C=u&&u[3]||(xs(a)?"px":""),I=s.nodeType&&(!xs(a)||C!=="px"&&+E)&&yr.exec(d.css(s,a));if(I&&I[3]!==C){for(E=E/2,C=C||I[3],I=+E||1;_--;)d.style(s,a,I+C),(1-p)*(1-(p=v()/E||.5))<=0&&(_=0),I=I/p;I=I*2,d.style(s,a,I+C),u=u||[]}return u&&(I=+I||+E||0,g=u[1]?I+(u[1]+1)*u[2]:+u[2],h&&(h.unit=C,h.start=I,h.end=g)),g}var Zm=/^-ms-/;function ea(s){return qn(s.replace(Zm,"ms-"))}var eh={};function $m(s){var a,u=s.ownerDocument,h=s.nodeName,g=eh[h];return g||(a=u.body.appendChild(u.createElement(h)),g=d.css(a,"display"),a.parentNode.removeChild(a),g==="none"&&(g="block"),eh[h]=g,g)}function mi(s,a){for(var u,h,g=[],p=0,_=s.length;p<_;p++)h=s[p],h.style&&(u=h.style.display,a?(u==="none"&&(g[p]=Z.get(h,"display")||null,g[p]||(h.style.display="")),h.style.display===""&&_s(h)&&(g[p]=$m(h))):u!=="none"&&(g[p]="none",Z.set(h,"display",u)));for(p=0;p<_;p++)g[p]!=null&&(s[p].style.display=g[p]);return s}d.fn.extend({show:function(){return mi(this,!0)},hide:function(){return mi(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){_s(this)?d(this).show():d(this).hide()})}});var _r=function(s){return d.contains(s.ownerDocument,s)||s.getRootNode(Qm)===s.ownerDocument},Qm={composed:!0};q.getRootNode||(_r=function(s){return d.contains(s.ownerDocument,s)});var th=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,rn={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};rn.tbody=rn.tfoot=rn.colgroup=rn.caption=rn.thead,rn.th=rn.td;function ot(s,a){var u;return typeof s.getElementsByTagName<"u"?u=t.slice.call(s.getElementsByTagName(a||"*")):typeof s.querySelectorAll<"u"?u=s.querySelectorAll(a||"*"):u=[],a===void 0||a&&V(s,a)?d.merge([s],u):u}var nh=/^$|^module$|\/(?:java|ecma)script/i;function ta(s,a){for(var u=0,h=s.length;u<h;u++)Z.set(s[u],"globalEval",!a||Z.get(a[u],"globalEval"))}var Jm=/<|&#?\w+;/;function ih(s,a,u,h,g){for(var p,_,v,E,C,I,M=a.createDocumentFragment(),b=[],A=0,G=s.length;A<G;A++)if(p=s[A],p||p===0)if(R(p)==="object"&&(p.nodeType||O(p)))d.merge(b,p.nodeType?[p]:p);else if(!Jm.test(p))b.push(a.createTextNode(p));else{for(_=_||M.appendChild(a.createElement("div")),v=(th.exec(p)||["",""])[1].toLowerCase(),E=rn[v]||t,I=E.length;--I>-1;)_=_.appendChild(a.createElement(E[I]));_.innerHTML=d.htmlPrefilter(p),d.merge(b,_.childNodes),_=M.firstChild,_.textContent=""}for(M.textContent="",A=0;p=b[A++];){if(h&&d.inArray(p,h)>-1){g&&g.push(p);continue}if(C=_r(p),_=ot(M.appendChild(p),"script"),C&&ta(_),u)for(I=0;p=_[I++];)nh.test(p.type||"")&&u.push(p)}return M}function ey(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function ty(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function yi(s,a,u,h){a=o(a);var g,p,_,v,E,C,I=0,M=s.length,b=M-1,A=a[0],G=typeof A=="function";if(G)return s.each(function(H){var B=s.eq(H);a[0]=A.call(this,H,B.html()),yi(B,a,u,h)});if(M&&(g=ih(a,s[0].ownerDocument,!1,s,h),p=g.firstChild,g.childNodes.length===1&&(g=p),p||h)){for(_=d.map(ot(g,"script"),ey),v=_.length;I<M;I++)E=g,I!==b&&(E=d.clone(E,!0,!0),v&&d.merge(_,ot(E,"script"))),u.call(s[I],E,I);if(v)for(C=_[_.length-1].ownerDocument,d.map(_,ty),I=0;I<v;I++)E=_[I],nh.test(E.type||"")&&!Z.get(E,"globalEval")&&d.contains(C,E)&&(E.src&&(E.type||"").toLowerCase()!=="module"?d._evalUrl&&!E.noModule&&d._evalUrl(E.src,{nonce:E.nonce,crossOrigin:E.crossOrigin},C):j(E.textContent,E,C))}return s}var Es=/^(?:checkbox|radio)$/i,rh=/^([^.]*)(?:\.(.+)|)/;function _i(){return!0}function xi(){return!1}function na(s,a,u,h,g,p){var _,v;if(typeof a=="object"){typeof u!="string"&&(h=h||u,u=void 0);for(v in a)na(s,v,u,h,a[v],p);return s}if(h==null&&g==null?(g=u,h=u=void 0):g==null&&(typeof u=="string"?(g=h,h=void 0):(g=h,h=u,u=void 0)),g===!1)g=xi;else if(!g)return s;return p===1&&(_=g,g=function(E){return d().off(E),_.apply(this,arguments)},g.guid=_.guid||(_.guid=d.guid++)),s.each(function(){d.event.add(this,a,g,h,u)})}d.event={add:function(s,a,u,h,g){var p,_,v,E,C,I,M,b,A,G,H,B=Z.get(s);if(pr(s))for(u.handler&&(p=u,u=p.handler,g=p.selector),g&&d.find.matchesSelector(q,g),u.guid||(u.guid=d.guid++),(E=B.events)||(E=B.events=Object.create(null)),(_=B.handle)||(_=B.handle=function(Ee){return typeof d<"u"&&d.event.triggered!==Ee.type?d.event.dispatch.apply(s,arguments):void 0}),a=(a||"").match(rt)||[""],C=a.length;C--;)v=rh.exec(a[C])||[],A=H=v[1],G=(v[2]||"").split(".").sort(),A&&(M=d.event.special[A]||{},A=(g?M.delegateType:M.bindType)||A,M=d.event.special[A]||{},I=d.extend({type:A,origType:H,data:h,handler:u,guid:u.guid,selector:g,needsContext:g&&d.expr.match.needsContext.test(g),namespace:G.join(".")},p),(b=E[A])||(b=E[A]=[],b.delegateCount=0,(!M.setup||M.setup.call(s,h,G,_)===!1)&&s.addEventListener&&s.addEventListener(A,_)),M.add&&(M.add.call(s,I),I.handler.guid||(I.handler.guid=u.guid)),g?b.splice(b.delegateCount++,0,I):b.push(I))},remove:function(s,a,u,h,g){var p,_,v,E,C,I,M,b,A,G,H,B=Z.hasData(s)&&Z.get(s);if(!(!B||!(E=B.events))){for(a=(a||"").match(rt)||[""],C=a.length;C--;){if(v=rh.exec(a[C])||[],A=H=v[1],G=(v[2]||"").split(".").sort(),!A){for(A in E)d.event.remove(s,A+a[C],u,h,!0);continue}for(M=d.event.special[A]||{},A=(h?M.delegateType:M.bindType)||A,b=E[A]||[],v=v[2]&&new RegExp("(^|\\.)"+G.join("\\.(?:.*\\.|)")+"(\\.|$)"),_=p=b.length;p--;)I=b[p],(g||H===I.origType)&&(!u||u.guid===I.guid)&&(!v||v.test(I.namespace))&&(!h||h===I.selector||h==="**"&&I.selector)&&(b.splice(p,1),I.selector&&b.delegateCount--,M.remove&&M.remove.call(s,I));_&&!b.length&&((!M.teardown||M.teardown.call(s,G,B.handle)===!1)&&d.removeEvent(s,A,B.handle),delete E[A])}d.isEmptyObject(E)&&Z.remove(s,"handle events")}},dispatch:function(s){var a,u,h,g,p,_,v=new Array(arguments.length),E=d.event.fix(s),C=(Z.get(this,"events")||Object.create(null))[E.type]||[],I=d.event.special[E.type]||{};for(v[0]=E,a=1;a<arguments.length;a++)v[a]=arguments[a];if(E.delegateTarget=this,!(I.preDispatch&&I.preDispatch.call(this,E)===!1)){for(_=d.event.handlers.call(this,E,C),a=0;(g=_[a++])&&!E.isPropagationStopped();)for(E.currentTarget=g.elem,u=0;(p=g.handlers[u++])&&!E.isImmediatePropagationStopped();)(!E.rnamespace||p.namespace===!1||E.rnamespace.test(p.namespace))&&(E.handleObj=p,E.data=p.data,h=((d.event.special[p.origType]||{}).handle||p.handler).apply(g.elem,v),h!==void 0&&(E.result=h)===!1&&(E.preventDefault(),E.stopPropagation()));return I.postDispatch&&I.postDispatch.call(this,E),E.result}},handlers:function(s,a){var u,h,g,p,_,v=[],E=a.delegateCount,C=s.target;if(E&&!(s.type==="click"&&s.button>=1)){for(;C!==this;C=C.parentNode||this)if(C.nodeType===1&&!(s.type==="click"&&C.disabled===!0)){for(p=[],_={},u=0;u<E;u++)h=a[u],g=h.selector+" ",_[g]===void 0&&(_[g]=h.needsContext?d(g,this).index(C)>-1:d.find(g,this,null,[C]).length),_[g]&&p.push(h);p.length&&v.push({elem:C,handlers:p})}}return C=this,E<a.length&&v.push({elem:C,handlers:a.slice(E)}),v},addProp:function(s,a){Object.defineProperty(d.Event.prototype,s,{enumerable:!0,configurable:!0,get:typeof a=="function"?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(u){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(s){return s[d.expando]?s:new d.Event(s)},special:d.extend(Object.create(null),{load:{noBubble:!0},click:{setup:function(s){var a=this||s;return Es.test(a.type)&&a.click&&V(a,"input")&&vs(a,"click",!0),!1},trigger:function(s){var a=this||s;return Es.test(a.type)&&a.click&&V(a,"input")&&vs(a,"click"),!0},_default:function(s){var a=s.target;return Es.test(a.type)&&a.click&&V(a,"input")&&Z.get(a,"click")||V(a,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.preventDefault()}}})};function vs(s,a,u){if(!u){Z.get(s,a)===void 0&&d.event.add(s,a,_i);return}Z.set(s,a,!1),d.event.add(s,a,{namespace:!1,handler:function(h){var g,p=Z.get(this,a);if(h.isTrigger&1&&this[a]){if(p.length)(d.event.special[a]||{}).delegateType&&h.stopPropagation();else if(p=r.call(arguments),Z.set(this,a,p),this[a](),g=Z.get(this,a),Z.set(this,a,!1),p!==g)return h.stopImmediatePropagation(),h.preventDefault(),g&&g.value}else p.length&&(Z.set(this,a,{value:d.event.trigger(p[0],p.slice(1),this)}),h.stopPropagation(),h.isImmediatePropagationStopped=_i)}})}d.removeEvent=function(s,a,u){s.removeEventListener&&s.removeEventListener(a,u)},d.Event=function(s,a){if(!(this instanceof d.Event))return new d.Event(s,a);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented?_i:xi,this.target=s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,a&&d.extend(this,a),this.timeStamp=s&&s.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:xi,isPropagationStopped:xi,isImmediatePropagationStopped:xi,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=_i,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=_i,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=_i,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(s,a){function u(h){var g=d.event.fix(h);g.type=h.type==="focusin"?"focus":"blur",g.isSimulated=!0,g.target===g.currentTarget&&Z.get(this,"handle")(g)}d.event.special[s]={setup:function(){if(vs(this,s,!0),U)this.addEventListener(a,u);else return!1},trigger:function(){return vs(this,s),!0},teardown:function(){if(U)this.removeEventListener(a,u);else return!1},_default:function(h){return Z.get(h.target,s)},delegateType:a}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,a){d.event.special[s]={delegateType:a,bindType:a,handle:function(u){var h,g=this,p=u.relatedTarget,_=u.handleObj;return(!p||p!==g&&!d.contains(g,p))&&(u.type=_.origType,h=_.handler.apply(this,arguments),u.type=a),h}}}),d.fn.extend({on:function(s,a,u,h){return na(this,s,a,u,h)},one:function(s,a,u,h){return na(this,s,a,u,h,1)},off:function(s,a,u){var h,g;if(s&&s.preventDefault&&s.handleObj)return h=s.handleObj,d(s.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof s=="object"){for(g in s)this.off(g,a,s[g]);return this}return(a===!1||typeof a=="function")&&(u=a,a=void 0),u===!1&&(u=xi),this.each(function(){d.event.remove(this,s,u,a)})}});var ny=/<script|<style|<link/i;function sh(s,a){return V(s,"table")&&V(a.nodeType!==11?a:a.firstChild,"tr")&&d(s).children("tbody")[0]||s}function oh(s,a){var u,h,g,p=Z.get(s,"events");if(a.nodeType===1){if(p){Z.remove(a,"handle events");for(u in p)for(h=0,g=p[u].length;h<g;h++)d.event.add(a,u,p[u][h])}st.hasData(s)&&st.set(a,d.extend({},st.get(s)))}}function ah(s,a,u){for(var h,g=a?d.filter(a,s):s,p=0;(h=g[p])!=null;p++)!u&&h.nodeType===1&&d.cleanData(ot(h)),h.parentNode&&(u&&_r(h)&&ta(ot(h,"script")),h.parentNode.removeChild(h));return s}d.extend({htmlPrefilter:function(s){return s},clone:function(s,a,u){var h,g,p,_,v=s.cloneNode(!0),E=_r(s);if(U&&(s.nodeType===1||s.nodeType===11)&&!d.isXMLDoc(s))for(_=ot(v),p=ot(s),h=0,g=p.length;h<g;h++)V(_[h],"textarea")&&(_[h].defaultValue=p[h].defaultValue);if(a)if(u)for(p=p||ot(s),_=_||ot(v),h=0,g=p.length;h<g;h++)oh(p[h],_[h]);else oh(s,v);return _=ot(v,"script"),_.length>0&&ta(_,!E&&ot(s,"script")),v},cleanData:function(s){for(var a,u,h,g=d.event.special,p=0;(u=s[p])!==void 0;p++)if(pr(u)){if(a=u[Z.expando]){if(a.events)for(h in a.events)g[h]?d.event.remove(u,h):d.removeEvent(u,h,a.handle);u[Z.expando]=void 0}u[st.expando]&&(u[st.expando]=void 0)}}}),d.fn.extend({detach:function(s){return ah(this,s,!0)},remove:function(s){return ah(this,s)},text:function(s){return $e(this,function(a){return a===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,s,arguments.length)},append:function(){return yi(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=sh(this,s);a.appendChild(s)}})},prepend:function(){return yi(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=sh(this,s);a.insertBefore(s,a.firstChild)}})},before:function(){return yi(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return yi(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,a=0;(s=this[a])!=null;a++)s.nodeType===1&&(d.cleanData(ot(s,!1)),s.textContent="");return this},clone:function(s,a){return s=s??!1,a=a??s,this.map(function(){return d.clone(this,s,a)})},html:function(s){return $e(this,function(a){var u=this[0]||{},h=0,g=this.length;if(a===void 0&&u.nodeType===1)return u.innerHTML;if(typeof a=="string"&&!ny.test(a)&&!rn[(th.exec(a)||["",""])[1].toLowerCase()]){a=d.htmlPrefilter(a);try{for(;h<g;h++)u=this[h]||{},u.nodeType===1&&(d.cleanData(ot(u,!1)),u.innerHTML=a);u=0}catch{}}u&&this.empty().append(a)},null,s,arguments.length)},replaceWith:function(){var s=[];return yi(this,arguments,function(a){var u=this.parentNode;d.inArray(this,s)<0&&(d.cleanData(ot(this)),u&&u.replaceChild(a,this))},s)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,a){d.fn[s]=function(u){for(var h,g=[],p=d(u),_=p.length-1,v=0;v<=_;v++)h=v===_?this:this.clone(!0),d(p[v])[a](h),l.apply(g,h);return this.pushStack(g)}});var iy=new RegExp("^("+Qc+")(?!px)[a-z%]+$","i"),ia=/^--/;function ws(s){var a=s.ownerDocument.defaultView;return a||(a=n),a.getComputedStyle(s)}function ry(s,a,u){var h,g,p={};for(g in a)p[g]=s.style[g],s.style[g]=a[g];h=u.call(s);for(g in a)s.style[g]=p[g];return h}function lh(s,a,u){var h,g=ia.test(a);return u=u||ws(s),u&&(h=u.getPropertyValue(a)||u[a],g&&h&&(h=h.replace(fe,"$1")||void 0),h===""&&!_r(s)&&(h=d.style(s,a))),h!==void 0?h+"":h}var uh=["Webkit","Moz","ms"],ch=P.createElement("div").style;function sy(s){for(var a=s[0].toUpperCase()+s.slice(1),u=uh.length;u--;)if(s=uh[u]+a,s in ch)return s}function ra(s){return s in ch?s:sy(s)||s}var hh,fh,Cn=P.createElement("table");function dh(){if(!(!Cn||!Cn.style)){var s,a=P.createElement("col"),u=P.createElement("tr"),h=P.createElement("td");if(Cn.style.cssText="position:absolute;left:-11111px;border-collapse:separate;border-spacing:0",u.style.cssText="box-sizing:content-box;border:1px solid;height:1px",h.style.cssText="height:9px;width:9px;padding:0",a.span=2,q.appendChild(Cn).appendChild(a).parentNode.appendChild(u).appendChild(h).parentNode.appendChild(h.cloneNode(!0)),Cn.offsetWidth===0){q.removeChild(Cn);return}s=n.getComputedStyle(u),fh=U||Math.round(parseFloat(n.getComputedStyle(a).width))===18,hh=Math.round(parseFloat(s.height)+parseFloat(s.borderTopWidth)+parseFloat(s.borderBottomWidth))===u.offsetHeight,q.removeChild(Cn),Cn=null}}d.extend(T,{reliableTrDimensions:function(){return dh(),hh},reliableColDimensions:function(){return dh(),fh}});var oy={position:"absolute",visibility:"hidden",display:"block"},gh={letterSpacing:"0",fontWeight:"400"};function ph(s,a,u){var h=yr.exec(a);return h?Math.max(0,h[2]-(u||0))+(h[3]||"px"):a}function mh(s,a,u,h,g,p){var _=a==="width"?1:0,v=0,E=0,C=0;if(u===(h?"border":"content"))return 0;for(;_<4;_+=2)u==="margin"&&(C+=d.css(s,u+wn[_],!0,g)),h?(u==="content"&&(E-=d.css(s,"padding"+wn[_],!0,g)),u!=="margin"&&(E-=d.css(s,"border"+wn[_]+"Width",!0,g))):(E+=d.css(s,"padding"+wn[_],!0,g),u!=="padding"?E+=d.css(s,"border"+wn[_]+"Width",!0,g):v+=d.css(s,"border"+wn[_]+"Width",!0,g));return!h&&p>=0&&(E+=Math.max(0,Math.ceil(s["offset"+a[0].toUpperCase()+a.slice(1)]-p-E-v-.5))||0),E+C}function yh(s,a,u){var h=ws(s),g=U||u,p=g&&d.css(s,"boxSizing",!1,h)==="border-box",_=p,v=lh(s,a,h),E="offset"+a[0].toUpperCase()+a.slice(1);if(iy.test(v)){if(!u)return v;v="auto"}return(v==="auto"||U&&p||!T.reliableColDimensions()&&V(s,"col")||!T.reliableTrDimensions()&&V(s,"tr"))&&s.getClientRects().length&&(p=d.css(s,"boxSizing",!1,h)==="border-box",_=E in s,_&&(v=s[E])),v=parseFloat(v)||0,v+mh(s,a,u||(p?"border":"content"),_,h,v)+"px"}d.extend({cssHooks:{},style:function(s,a,u,h){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var g,p,_,v=ea(a),E=ia.test(a),C=s.style;if(E||(a=ra(v)),_=d.cssHooks[a]||d.cssHooks[v],u!==void 0){if(p=typeof u,p==="string"&&(g=yr.exec(u))&&g[1]&&(u=Jc(s,a,g),p="number"),u==null||u!==u)return;p==="number"&&(u+=g&&g[3]||(xs(v)?"px":"")),U&&u===""&&a.indexOf("background")===0&&(C[a]="inherit"),(!_||!("set"in _)||(u=_.set(s,u,h))!==void 0)&&(E?C.setProperty(a,u):C[a]=u)}else return _&&"get"in _&&(g=_.get(s,!1,h))!==void 0?g:C[a]}},css:function(s,a,u,h){var g,p,_,v=ea(a),E=ia.test(a);return E||(a=ra(v)),_=d.cssHooks[a]||d.cssHooks[v],_&&"get"in _&&(g=_.get(s,!0,u)),g===void 0&&(g=lh(s,a,h)),g==="normal"&&a in gh&&(g=gh[a]),u===""||u?(p=parseFloat(g),u===!0||isFinite(p)?p||0:g):g}}),d.each(["height","width"],function(s,a){d.cssHooks[a]={get:function(u,h,g){if(h)return d.css(u,"display")==="none"?ry(u,oy,function(){return yh(u,a,g)}):yh(u,a,g)},set:function(u,h,g){var p,_=ws(u),v=g&&d.css(u,"boxSizing",!1,_)==="border-box",E=g?mh(u,a,g,v,_):0;return E&&(p=yr.exec(h))&&(p[3]||"px")!=="px"&&(u.style[a]=h,h=d.css(u,a)),ph(u,h,E)}}}),d.each({margin:"",padding:"",border:"Width"},function(s,a){d.cssHooks[s+a]={expand:function(u){for(var h=0,g={},p=typeof u=="string"?u.split(" "):[u];h<4;h++)g[s+wn[h]+a]=p[h]||p[h-2]||p[0];return g}},s!=="margin"&&(d.cssHooks[s+a].set=ph)}),d.fn.extend({css:function(s,a){return $e(this,function(u,h,g){var p,_,v={},E=0;if(Array.isArray(h)){for(p=ws(u),_=h.length;E<_;E++)v[h[E]]=d.css(u,h[E],!1,p);return v}return g!==void 0?d.style(u,h,g):d.css(u,h)},s,a,arguments.length>1)}});function Et(s,a,u,h,g){return new Et.prototype.init(s,a,u,h,g)}d.Tween=Et,Et.prototype={constructor:Et,init:function(s,a,u,h,g,p){this.elem=s,this.prop=u,this.easing=g||d.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=h,this.unit=p||(xs(u)?"px":"")},cur:function(){var s=Et.propHooks[this.prop];return s&&s.get?s.get(this):Et.propHooks._default.get(this)},run:function(s){var a,u=Et.propHooks[this.prop];return this.options.duration?this.pos=a=d.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=a=s,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):Et.propHooks._default.set(this),this}},Et.prototype.init.prototype=Et.prototype,Et.propHooks={_default:{get:function(s){var a;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(a=d.css(s.elem,s.prop,""),!a||a==="auto"?0:a)},set:function(s){d.fx.step[s.prop]?d.fx.step[s.prop](s):s.elem.nodeType===1&&(d.cssHooks[s.prop]||s.elem.style[ra(s.prop)]!=null)?d.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},d.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},d.fx=Et.prototype.init,d.fx.step={};var Ei,Cs,ay=/^(?:toggle|show|hide)$/,ly=/queueHooks$/;function sa(){Cs&&(P.hidden===!1&&n.requestAnimationFrame?n.requestAnimationFrame(sa):n.setTimeout(sa,13),d.fx.tick())}function _h(){return n.setTimeout(function(){Ei=void 0}),Ei=Date.now()}function Ts(s,a){var u,h=0,g={height:s};for(a=a?1:0;h<4;h+=2-a)u=wn[h],g["margin"+u]=g["padding"+u]=s;return a&&(g.opacity=g.width=s),g}function xh(s,a,u){for(var h,g=(Lt.tweeners[a]||[]).concat(Lt.tweeners["*"]),p=0,_=g.length;p<_;p++)if(h=g[p].call(u,a,s))return h}function uy(s,a,u){var h,g,p,_,v,E,C,I,M="width"in a||"height"in a,b=this,A={},G=s.style,H=s.nodeType&&_s(s),B=Z.get(s,"fxshow");u.queue||(_=d._queueHooks(s,"fx"),_.unqueued==null&&(_.unqueued=0,v=_.empty.fire,_.empty.fire=function(){_.unqueued||v()}),_.unqueued++,b.always(function(){b.always(function(){_.unqueued--,d.queue(s,"fx").length||_.empty.fire()})}));for(h in a)if(g=a[h],ay.test(g)){if(delete a[h],p=p||g==="toggle",g===(H?"hide":"show"))if(g==="show"&&B&&B[h]!==void 0)H=!0;else continue;A[h]=B&&B[h]||d.style(s,h)}if(E=!d.isEmptyObject(a),!(!E&&d.isEmptyObject(A))){M&&s.nodeType===1&&(u.overflow=[G.overflow,G.overflowX,G.overflowY],C=B&&B.display,C==null&&(C=Z.get(s,"display")),I=d.css(s,"display"),I==="none"&&(C?I=C:(mi([s],!0),C=s.style.display||C,I=d.css(s,"display"),mi([s]))),(I==="inline"||I==="inline-block"&&C!=null)&&d.css(s,"float")==="none"&&(E||(b.done(function(){G.display=C}),C==null&&(I=G.display,C=I==="none"?"":I)),G.display="inline-block")),u.overflow&&(G.overflow="hidden",b.always(function(){G.overflow=u.overflow[0],G.overflowX=u.overflow[1],G.overflowY=u.overflow[2]})),E=!1;for(h in A)E||(B?"hidden"in B&&(H=B.hidden):B=Z.set(s,"fxshow",{display:C}),p&&(B.hidden=!H),H&&mi([s],!0),b.done(function(){H||mi([s]),Z.remove(s,"fxshow");for(h in A)d.style(s,h,A[h])})),E=xh(H?B[h]:0,h,b),h in B||(B[h]=E.start,H&&(E.end=E.start,E.start=0))}}function cy(s,a){var u,h,g,p,_;for(u in s)if(h=ea(u),g=a[h],p=s[u],Array.isArray(p)&&(g=p[1],p=s[u]=p[0]),u!==h&&(s[h]=p,delete s[u]),_=d.cssHooks[h],_&&"expand"in _){p=_.expand(p),delete s[h];for(u in p)u in s||(s[u]=p[u],a[u]=g)}else a[h]=g}function Lt(s,a,u){var h,g,p=0,_=Lt.prefilters.length,v=d.Deferred().always(function(){delete E.elem}),E=function(){if(g)return!1;for(var M=Ei||_h(),b=Math.max(0,C.startTime+C.duration-M),A=1-(b/C.duration||0),G=0,H=C.tweens.length;G<H;G++)C.tweens[G].run(A);return v.notifyWith(s,[C,A,b]),A<1&&H?b:(H||v.notifyWith(s,[C,1,0]),v.resolveWith(s,[C]),!1)},C=v.promise({elem:s,props:d.extend({},a),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},u),originalProperties:a,originalOptions:u,startTime:Ei||_h(),duration:u.duration,tweens:[],createTween:function(M,b){var A=d.Tween(s,C.opts,M,b,C.opts.specialEasing[M]||C.opts.easing);return C.tweens.push(A),A},stop:function(M){var b=0,A=M?C.tweens.length:0;if(g)return this;for(g=!0;b<A;b++)C.tweens[b].run(1);return M?(v.notifyWith(s,[C,1,0]),v.resolveWith(s,[C,M])):v.rejectWith(s,[C,M]),this}}),I=C.props;for(cy(I,C.opts.specialEasing);p<_;p++)if(h=Lt.prefilters[p].call(C,s,I,C.opts),h)return typeof h.stop=="function"&&(d._queueHooks(C.elem,C.opts.queue).stop=h.stop.bind(h)),h;return d.map(I,xh,C),typeof C.opts.start=="function"&&C.opts.start.call(s,C),C.progress(C.opts.progress).done(C.opts.done,C.opts.complete).fail(C.opts.fail).always(C.opts.always),d.fx.timer(d.extend(E,{elem:s,anim:C,queue:C.opts.queue})),C}d.Animation=d.extend(Lt,{tweeners:{"*":[function(s,a){var u=this.createTween(s,a);return Jc(u.elem,s,yr.exec(a),u),u}]},tweener:function(s,a){typeof s=="function"?(a=s,s=["*"]):s=s.match(rt);for(var u,h=0,g=s.length;h<g;h++)u=s[h],Lt.tweeners[u]=Lt.tweeners[u]||[],Lt.tweeners[u].unshift(a)},prefilters:[uy],prefilter:function(s,a){a?Lt.prefilters.unshift(s):Lt.prefilters.push(s)}}),d.speed=function(s,a,u){var h=s&&typeof s=="object"?d.extend({},s):{complete:u||a||typeof s=="function"&&s,duration:s,easing:u&&a||a&&typeof a!="function"&&a};return d.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in d.fx.speeds?h.duration=d.fx.speeds[h.duration]:h.duration=d.fx.speeds._default),(h.queue==null||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){typeof h.old=="function"&&h.old.call(this),h.queue&&d.dequeue(this,h.queue)},h},d.fn.extend({fadeTo:function(s,a,u,h){return this.filter(_s).css("opacity",0).show().end().animate({opacity:a},s,u,h)},animate:function(s,a,u,h){var g=d.isEmptyObject(s),p=d.speed(a,u,h),_=function(){var v=Lt(this,d.extend({},s),p);(g||Z.get(this,"finish"))&&v.stop(!0)};return _.finish=_,g||p.queue===!1?this.each(_):this.queue(p.queue,_)},stop:function(s,a,u){var h=function(g){var p=g.stop;delete g.stop,p(u)};return typeof s!="string"&&(u=a,a=s,s=void 0),a&&this.queue(s||"fx",[]),this.each(function(){var g=!0,p=s!=null&&s+"queueHooks",_=d.timers,v=Z.get(this);if(p)v[p]&&v[p].stop&&h(v[p]);else for(p in v)v[p]&&v[p].stop&&ly.test(p)&&h(v[p]);for(p=_.length;p--;)_[p].elem===this&&(s==null||_[p].queue===s)&&(_[p].anim.stop(u),g=!1,_.splice(p,1));(g||!u)&&d.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var a,u=Z.get(this),h=u[s+"queue"],g=u[s+"queueHooks"],p=d.timers,_=h?h.length:0;for(u.finish=!0,d.queue(this,s,[]),g&&g.stop&&g.stop.call(this,!0),a=p.length;a--;)p[a].elem===this&&p[a].queue===s&&(p[a].anim.stop(!0),p.splice(a,1));for(a=0;a<_;a++)h[a]&&h[a].finish&&h[a].finish.call(this);delete u.finish})}}),d.each(["toggle","show","hide"],function(s,a){var u=d.fn[a];d.fn[a]=function(h,g,p){return h==null||typeof h=="boolean"?u.apply(this,arguments):this.animate(Ts(a,!0),h,g,p)}}),d.each({slideDown:Ts("show"),slideUp:Ts("hide"),slideToggle:Ts("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,a){d.fn[s]=function(u,h,g){return this.animate(a,u,h,g)}}),d.timers=[],d.fx.tick=function(){var s,a=0,u=d.timers;for(Ei=Date.now();a<u.length;a++)s=u[a],!s()&&u[a]===s&&u.splice(a--,1);u.length||d.fx.stop(),Ei=void 0},d.fx.timer=function(s){d.timers.push(s),d.fx.start()},d.fx.start=function(){Cs||(Cs=!0,sa())},d.fx.stop=function(){Cs=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(s,a){return s=d.fx&&d.fx.speeds[s]||s,a=a||"fx",this.queue(a,function(u,h){var g=n.setTimeout(u,s);h.stop=function(){n.clearTimeout(g)}})};var hy=/^(?:input|select|textarea|button)$/i,fy=/^(?:a|area)$/i;d.fn.extend({prop:function(s,a){return $e(this,d.prop,s,a,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[d.propFix[s]||s]})}}),d.extend({prop:function(s,a,u){var h,g,p=s.nodeType;if(!(p===3||p===8||p===2))return(p!==1||!d.isXMLDoc(s))&&(a=d.propFix[a]||a,g=d.propHooks[a]),u!==void 0?g&&"set"in g&&(h=g.set(s,u,a))!==void 0?h:s[a]=u:g&&"get"in g&&(h=g.get(s,a))!==null?h:s[a]},propHooks:{tabIndex:{get:function(s){var a=s.getAttribute("tabindex");return a?parseInt(a,10):hy.test(s.nodeName)||fy.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),U&&(d.propHooks.selected={get:function(s){var a=s.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(s){var a=s.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function Hn(s){var a=s.match(rt)||[];return a.join(" ")}function vi(s){return s.getAttribute&&s.getAttribute("class")||""}function oa(s){return Array.isArray(s)?s:typeof s=="string"?s.match(rt)||[]:[]}d.fn.extend({addClass:function(s){var a,u,h,g,p,_;return typeof s=="function"?this.each(function(v){d(this).addClass(s.call(this,v,vi(this)))}):(a=oa(s),a.length?this.each(function(){if(h=vi(this),u=this.nodeType===1&&" "+Hn(h)+" ",u){for(p=0;p<a.length;p++)g=a[p],u.indexOf(" "+g+" ")<0&&(u+=g+" ");_=Hn(u),h!==_&&this.setAttribute("class",_)}}):this)},removeClass:function(s){var a,u,h,g,p,_;return typeof s=="function"?this.each(function(v){d(this).removeClass(s.call(this,v,vi(this)))}):arguments.length?(a=oa(s),a.length?this.each(function(){if(h=vi(this),u=this.nodeType===1&&" "+Hn(h)+" ",u){for(p=0;p<a.length;p++)for(g=a[p];u.indexOf(" "+g+" ")>-1;)u=u.replace(" "+g+" "," ");_=Hn(u),h!==_&&this.setAttribute("class",_)}}):this):this.attr("class","")},toggleClass:function(s,a){var u,h,g,p;return typeof s=="function"?this.each(function(_){d(this).toggleClass(s.call(this,_,vi(this),a),a)}):typeof a=="boolean"?a?this.addClass(s):this.removeClass(s):(u=oa(s),u.length?this.each(function(){for(p=d(this),g=0;g<u.length;g++)h=u[g],p.hasClass(h)?p.removeClass(h):p.addClass(h)}):this)},hasClass:function(s){var a,u,h=0;for(a=" "+s+" ";u=this[h++];)if(u.nodeType===1&&(" "+Hn(vi(u))+" ").indexOf(a)>-1)return!0;return!1}}),d.fn.extend({val:function(s){var a,u,h,g=this[0];return arguments.length?(h=typeof s=="function",this.each(function(p){var _;this.nodeType===1&&(h?_=s.call(this,p,d(this).val()):_=s,_==null?_="":typeof _=="number"?_+="":Array.isArray(_)&&(_=d.map(_,function(v){return v==null?"":v+""})),a=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,_,"value")===void 0)&&(this.value=_))})):g?(a=d.valHooks[g.type]||d.valHooks[g.nodeName.toLowerCase()],a&&"get"in a&&(u=a.get(g,"value"))!==void 0?u:(u=g.value,u??"")):void 0}}),d.extend({valHooks:{select:{get:function(s){var a,u,h,g=s.options,p=s.selectedIndex,_=s.type==="select-one",v=_?null:[],E=_?p+1:g.length;for(p<0?h=E:h=_?p:0;h<E;h++)if(u=g[h],u.selected&&!u.disabled&&(!u.parentNode.disabled||!V(u.parentNode,"optgroup"))){if(a=d(u).val(),_)return a;v.push(a)}return v},set:function(s,a){for(var u,h,g=s.options,p=d.makeArray(a),_=g.length;_--;)h=g[_],(h.selected=d.inArray(d(h).val(),p)>-1)&&(u=!0);return u||(s.selectedIndex=-1),p}}}}),U&&(d.valHooks.option={get:function(s){var a=s.getAttribute("value");return a??Hn(d.text(s))}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(s,a){if(Array.isArray(a))return s.checked=d.inArray(d(s).val(),a)>-1}}});var Eh=/^(?:focusinfocus|focusoutblur)$/,vh=function(s){s.stopPropagation()};d.extend(d.event,{trigger:function(s,a,u,h){var g,p,_,v,E,C,I,M,b=[u||P],A=y.call(s,"type")?s.type:s,G=y.call(s,"namespace")?s.namespace.split("."):[];if(p=M=_=u=u||P,!(u.nodeType===3||u.nodeType===8)&&!Eh.test(A+d.event.triggered)&&(A.indexOf(".")>-1&&(G=A.split("."),A=G.shift(),G.sort()),E=A.indexOf(":")<0&&"on"+A,s=s[d.expando]?s:new d.Event(A,typeof s=="object"&&s),s.isTrigger=h?2:3,s.namespace=G.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+G.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=u),a=a==null?[s]:d.makeArray(a,[s]),I=d.event.special[A]||{},!(!h&&I.trigger&&I.trigger.apply(u,a)===!1))){if(!h&&!I.noBubble&&!L(u)){for(v=I.delegateType||A,Eh.test(v+A)||(p=p.parentNode);p;p=p.parentNode)b.push(p),_=p;_===(u.ownerDocument||P)&&b.push(_.defaultView||_.parentWindow||n)}for(g=0;(p=b[g++])&&!s.isPropagationStopped();)M=p,s.type=g>1?v:I.bindType||A,C=(Z.get(p,"events")||Object.create(null))[s.type]&&Z.get(p,"handle"),C&&C.apply(p,a),C=E&&p[E],C&&C.apply&&pr(p)&&(s.result=C.apply(p,a),s.result===!1&&s.preventDefault());return s.type=A,!h&&!s.isDefaultPrevented()&&(!I._default||I._default.apply(b.pop(),a)===!1)&&pr(u)&&E&&typeof u[A]=="function"&&!L(u)&&(_=u[E],_&&(u[E]=null),d.event.triggered=A,s.isPropagationStopped()&&M.addEventListener(A,vh),u[A](),s.isPropagationStopped()&&M.removeEventListener(A,vh),d.event.triggered=void 0,_&&(u[E]=_)),s.result}},simulate:function(s,a,u){var h=d.extend(new d.Event,u,{type:s,isSimulated:!0});d.event.trigger(h,null,a)}}),d.fn.extend({trigger:function(s,a){return this.each(function(){d.event.trigger(s,a,this)})},triggerHandler:function(s,a){var u=this[0];if(u)return d.event.trigger(s,a,u,!0)}});var xr=n.location,wh={guid:Date.now()},aa=/\?/;d.parseXML=function(s){var a,u;if(!s||typeof s!="string")return null;try{a=new n.DOMParser().parseFromString(s,"text/xml")}catch{}return u=a&&a.getElementsByTagName("parsererror")[0],(!a||u)&&d.error("Invalid XML: "+(u?d.map(u.childNodes,function(h){return h.textContent}).join(`
`):s)),a};var dy=/\[\]$/,Ch=/\r?\n/g,gy=/^(?:submit|button|image|reset|file)$/i,py=/^(?:input|select|textarea|keygen)/i;function la(s,a,u,h){var g;if(Array.isArray(a))d.each(a,function(p,_){u||dy.test(s)?h(s,_):la(s+"["+(typeof _=="object"&&_!=null?p:"")+"]",_,u,h)});else if(!u&&R(a)==="object")for(g in a)la(s+"["+g+"]",a[g],u,h);else h(s,a)}d.param=function(s,a){var u,h=[],g=function(p,_){var v=typeof _=="function"?_():_;h[h.length]=encodeURIComponent(p)+"="+encodeURIComponent(v??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!d.isPlainObject(s))d.each(s,function(){g(this.name,this.value)});else for(u in s)la(u,s[u],a,g);return h.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=d.prop(this,"elements");return s?d.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!d(this).is(":disabled")&&py.test(this.nodeName)&&!gy.test(s)&&(this.checked||!Es.test(s))}).map(function(s,a){var u=d(this).val();return u==null?null:Array.isArray(u)?d.map(u,function(h){return{name:a.name,value:h.replace(Ch,`\r
`)}}):{name:a.name,value:u.replace(Ch,`\r
`)}}).get()}});var my=/%20/g,yy=/#.*$/,_y=/([?&])_=[^&]*/,xy=/^(.*?):[ \t]*([^\r\n]*)$/mg,Ey=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,vy=/^(?:GET|HEAD)$/,wy=/^\/\//,Th={},ua={},Rh="*/".concat("*"),ca=P.createElement("a");ca.href=xr.href;function bh(s){return function(a,u){typeof a!="string"&&(u=a,a="*");var h,g=0,p=a.toLowerCase().match(rt)||[];if(typeof u=="function")for(;h=p[g++];)h[0]==="+"?(h=h.slice(1)||"*",(s[h]=s[h]||[]).unshift(u)):(s[h]=s[h]||[]).push(u)}}function Ih(s,a,u,h){var g={},p=s===ua;function _(v){var E;return g[v]=!0,d.each(s[v]||[],function(C,I){var M=I(a,u,h);if(typeof M=="string"&&!p&&!g[M])return a.dataTypes.unshift(M),_(M),!1;if(p)return!(E=M)}),E}return _(a.dataTypes[0])||!g["*"]&&_("*")}function ha(s,a){var u,h,g=d.ajaxSettings.flatOptions||{};for(u in a)a[u]!==void 0&&((g[u]?s:h||(h={}))[u]=a[u]);return h&&d.extend(!0,s,h),s}function Cy(s,a,u){for(var h,g,p,_,v=s.contents,E=s.dataTypes;E[0]==="*";)E.shift(),h===void 0&&(h=s.mimeType||a.getResponseHeader("Content-Type"));if(h){for(g in v)if(v[g]&&v[g].test(h)){E.unshift(g);break}}if(E[0]in u)p=E[0];else{for(g in u){if(!E[0]||s.converters[g+" "+E[0]]){p=g;break}_||(_=g)}p=p||_}if(p)return p!==E[0]&&E.unshift(p),u[p]}function Ty(s,a,u,h){var g,p,_,v,E,C={},I=s.dataTypes.slice();if(I[1])for(_ in s.converters)C[_.toLowerCase()]=s.converters[_];for(p=I.shift();p;)if(s.responseFields[p]&&(u[s.responseFields[p]]=a),!E&&h&&s.dataFilter&&(a=s.dataFilter(a,s.dataType)),E=p,p=I.shift(),p){if(p==="*")p=E;else if(E!=="*"&&E!==p){if(_=C[E+" "+p]||C["* "+p],!_){for(g in C)if(v=g.split(" "),v[1]===p&&(_=C[E+" "+v[0]]||C["* "+v[0]],_)){_===!0?_=C[g]:C[g]!==!0&&(p=v[0],I.unshift(v[1]));break}}if(_!==!0)if(_&&s.throws)a=_(a);else try{a=_(a)}catch(M){return{state:"parsererror",error:_?M:"No conversion from "+E+" to "+p}}}}return{state:"success",data:a}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xr.href,type:"GET",isLocal:Ey.test(xr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rh,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,a){return a?ha(ha(s,d.ajaxSettings),a):ha(d.ajaxSettings,s)},ajaxPrefilter:bh(Th),ajaxTransport:bh(ua),ajax:function(s,a){typeof s=="object"&&(a=s,s=void 0),a=a||{};var u,h,g,p,_,v,E,C,I,M,b=d.ajaxSetup({},a),A=b.context||b,G=b.context&&(A.nodeType||A.jquery)?d(A):d.event,H=d.Deferred(),B=d.Callbacks("once memory"),Ee=b.statusCode||{},xe={},at={},We="canceled",ae={readyState:0,getResponseHeader:function(ce){var Me;if(E){if(!p)for(p={};Me=xy.exec(g);)p[Me[1].toLowerCase()+" "]=(p[Me[1].toLowerCase()+" "]||[]).concat(Me[2]);Me=p[ce.toLowerCase()+" "]}return Me==null?null:Me.join(", ")},getAllResponseHeaders:function(){return E?g:null},setRequestHeader:function(ce,Me){return E==null&&(ce=at[ce.toLowerCase()]=at[ce.toLowerCase()]||ce,xe[ce]=Me),this},overrideMimeType:function(ce){return E==null&&(b.mimeType=ce),this},statusCode:function(ce){var Me;if(ce)if(E)ae.always(ce[ae.status]);else for(Me in ce)Ee[Me]=[Ee[Me],ce[Me]];return this},abort:function(ce){var Me=ce||We;return u&&u.abort(Me),Rs(0,Me),this}};if(H.promise(ae),b.url=((s||b.url||xr.href)+"").replace(wy,xr.protocol+"//"),b.type=a.method||a.type||b.method||b.type,b.dataTypes=(b.dataType||"*").toLowerCase().match(rt)||[""],b.crossDomain==null){v=P.createElement("a");try{v.href=b.url,v.href=v.href,b.crossDomain=ca.protocol+"//"+ca.host!=v.protocol+"//"+v.host}catch{b.crossDomain=!0}}if(Ih(Th,b,a,ae),b.data&&b.processData&&typeof b.data!="string"&&(b.data=d.param(b.data,b.traditional)),E)return ae;C=d.event&&b.global,C&&d.active++===0&&d.event.trigger("ajaxStart"),b.type=b.type.toUpperCase(),b.hasContent=!vy.test(b.type),h=b.url.replace(yy,""),b.hasContent?b.data&&b.processData&&(b.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(b.data=b.data.replace(my,"+")):(M=b.url.slice(h.length),b.data&&(b.processData||typeof b.data=="string")&&(h+=(aa.test(h)?"&":"?")+b.data,delete b.data),b.cache===!1&&(h=h.replace(_y,"$1"),M=(aa.test(h)?"&":"?")+"_="+wh.guid+++M),b.url=h+M),b.ifModified&&(d.lastModified[h]&&ae.setRequestHeader("If-Modified-Since",d.lastModified[h]),d.etag[h]&&ae.setRequestHeader("If-None-Match",d.etag[h])),(b.data&&b.hasContent&&b.contentType!==!1||a.contentType)&&ae.setRequestHeader("Content-Type",b.contentType),ae.setRequestHeader("Accept",b.dataTypes[0]&&b.accepts[b.dataTypes[0]]?b.accepts[b.dataTypes[0]]+(b.dataTypes[0]!=="*"?", "+Rh+"; q=0.01":""):b.accepts["*"]);for(I in b.headers)ae.setRequestHeader(I,b.headers[I]);if(b.beforeSend&&(b.beforeSend.call(A,ae,b)===!1||E))return ae.abort();if(We="abort",B.add(b.complete),ae.done(b.success),ae.fail(b.error),u=Ih(ua,b,a,ae),!u)Rs(-1,"No Transport");else{if(ae.readyState=1,C&&G.trigger("ajaxSend",[ae,b]),E)return ae;b.async&&b.timeout>0&&(_=n.setTimeout(function(){ae.abort("timeout")},b.timeout));try{E=!1,u.send(xe,Rs)}catch(ce){if(E)throw ce;Rs(-1,ce)}}function Rs(ce,Me,Lh,Sy){var Tn,da,Er,wi,Ci,Ut=Me;E||(E=!0,_&&n.clearTimeout(_),u=void 0,g=Sy||"",ae.readyState=ce>0?4:0,Tn=ce>=200&&ce<300||ce===304,Lh&&(wi=Cy(b,ae,Lh)),!Tn&&d.inArray("script",b.dataTypes)>-1&&d.inArray("json",b.dataTypes)<0&&(b.converters["text script"]=function(){}),wi=Ty(b,wi,ae,Tn),Tn?(b.ifModified&&(Ci=ae.getResponseHeader("Last-Modified"),Ci&&(d.lastModified[h]=Ci),Ci=ae.getResponseHeader("etag"),Ci&&(d.etag[h]=Ci)),ce===204||b.type==="HEAD"?Ut="nocontent":ce===304?Ut="notmodified":(Ut=wi.state,da=wi.data,Er=wi.error,Tn=!Er)):(Er=Ut,(ce||!Ut)&&(Ut="error",ce<0&&(ce=0))),ae.status=ce,ae.statusText=(Me||Ut)+"",Tn?H.resolveWith(A,[da,Ut,ae]):H.rejectWith(A,[ae,Ut,Er]),ae.statusCode(Ee),Ee=void 0,C&&G.trigger(Tn?"ajaxSuccess":"ajaxError",[ae,b,Tn?da:Er]),B.fireWith(A,[ae,Ut]),C&&(G.trigger("ajaxComplete",[ae,b]),--d.active||d.event.trigger("ajaxStop")))}return ae},getJSON:function(s,a,u){return d.get(s,a,u,"json")},getScript:function(s,a){return d.get(s,void 0,a,"script")}}),d.each(["get","post"],function(s,a){d[a]=function(u,h,g,p){return(typeof h=="function"||h===null)&&(p=p||g,g=h,h=void 0),d.ajax(d.extend({url:u,type:a,dataType:p,data:h,success:g},d.isPlainObject(u)&&u))}}),d.ajaxPrefilter(function(s){var a;for(a in s.headers)a.toLowerCase()==="content-type"&&(s.contentType=s.headers[a]||"")}),d._evalUrl=function(s,a,u){return d.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,scriptAttrs:a.crossOrigin?{crossOrigin:a.crossOrigin}:void 0,converters:{"text script":function(){}},dataFilter:function(h){d.globalEval(h,a,u)}})},d.fn.extend({wrapAll:function(s){var a;return this[0]&&(typeof s=="function"&&(s=s.call(this[0])),a=d(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(s){return typeof s=="function"?this.each(function(a){d(this).wrapInner(s.call(this,a))}):this.each(function(){var a=d(this),u=a.contents();u.length?u.wrapAll(s):a.append(s)})},wrap:function(s){var a=typeof s=="function";return this.each(function(u){d(this).wrapAll(a?s.call(this,u):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(s){return!d.expr.pseudos.visible(s)},d.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},d.ajaxSettings.xhr=function(){return new n.XMLHttpRequest};var Ry={0:200};d.ajaxTransport(function(s){var a;return{send:function(u,h){var g,p=s.xhr();if(p.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(g in s.xhrFields)p[g]=s.xhrFields[g];s.mimeType&&p.overrideMimeType&&p.overrideMimeType(s.mimeType),!s.crossDomain&&!u["X-Requested-With"]&&(u["X-Requested-With"]="XMLHttpRequest");for(g in u)p.setRequestHeader(g,u[g]);a=function(_){return function(){a&&(a=p.onload=p.onerror=p.onabort=p.ontimeout=null,_==="abort"?p.abort():_==="error"?h(p.status,p.statusText):h(Ry[p.status]||p.status,p.statusText,(p.responseType||"text")==="text"?{text:p.responseText}:{binary:p.response},p.getAllResponseHeaders()))}},p.onload=a(),p.onabort=p.onerror=p.ontimeout=a("error"),a=a("abort");try{p.send(s.hasContent&&s.data||null)}catch(_){if(a)throw _}},abort:function(){a&&a()}}});function Sh(s){return s.scriptAttrs||!s.headers&&(s.crossDomain||s.async&&d.inArray("json",s.dataTypes)<0)}d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},converters:{"text script":function(s){return d.globalEval(s),s}}}),d.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),Sh(s)&&(s.type="GET")}),d.ajaxTransport("script",function(s){if(Sh(s)){var a,u;return{send:function(h,g){a=d("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",u=function(p){a.remove(),u=null,p&&g(p.type==="error"?404:200,p.type)}),P.head.appendChild(a[0])},abort:function(){u&&u()}}}});var Ah=[],fa=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Ah.pop()||d.expando+"_"+wh.guid++;return this[s]=!0,s}}),d.ajaxPrefilter("jsonp",function(s,a,u){var h,g,p,_=s.jsonp!==!1&&(fa.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&fa.test(s.data)&&"data");return h=s.jsonpCallback=typeof s.jsonpCallback=="function"?s.jsonpCallback():s.jsonpCallback,_?s[_]=s[_].replace(fa,"$1"+h):s.jsonp!==!1&&(s.url+=(aa.test(s.url)?"&":"?")+s.jsonp+"="+h),s.converters["script json"]=function(){return p||d.error(h+" was not called"),p[0]},s.dataTypes[0]="json",g=n[h],n[h]=function(){p=arguments},u.always(function(){g===void 0?d(n).removeProp(h):n[h]=g,s[h]&&(s.jsonpCallback=a.jsonpCallback,Ah.push(h)),p&&typeof g=="function"&&g(p[0]),p=g=void 0}),"script"}),d.ajaxPrefilter(function(s,a){typeof s.data!="string"&&!d.isPlainObject(s.data)&&!Array.isArray(s.data)&&!("processData"in a)&&(s.processData=!1),s.data instanceof n.FormData&&(s.contentType=!1)}),d.parseHTML=function(s,a,u){if(typeof s!="string"&&!Hc(s+""))return[];typeof a=="boolean"&&(u=a,a=!1);var h,g;return a||(a=new n.DOMParser().parseFromString("","text/html")),h=qc.exec(s),g=!u&&[],h?[a.createElement(h[1])]:(h=ih([s],a,g),g&&g.length&&d(g).remove(),d.merge([],h.childNodes))},d.fn.load=function(s,a,u){var h,g,p,_=this,v=s.indexOf(" ");return v>-1&&(h=Hn(s.slice(v)),s=s.slice(0,v)),typeof a=="function"?(u=a,a=void 0):a&&typeof a=="object"&&(g="POST"),_.length>0&&d.ajax({url:s,type:g||"GET",dataType:"html",data:a}).done(function(E){p=arguments,_.html(h?d("<div>").append(d.parseHTML(E)).find(h):E)}).always(u&&function(E,C){_.each(function(){u.apply(this,p||[E.responseText,C,E])})}),this},d.expr.pseudos.animated=function(s){return d.grep(d.timers,function(a){return s===a.elem}).length},d.offset={setOffset:function(s,a,u){var h,g,p,_,v,E,C,I=d.css(s,"position"),M=d(s),b={};I==="static"&&(s.style.position="relative"),v=M.offset(),p=d.css(s,"top"),E=d.css(s,"left"),C=(I==="absolute"||I==="fixed")&&(p+E).indexOf("auto")>-1,C?(h=M.position(),_=h.top,g=h.left):(_=parseFloat(p)||0,g=parseFloat(E)||0),typeof a=="function"&&(a=a.call(s,u,d.extend({},v))),a.top!=null&&(b.top=a.top-v.top+_),a.left!=null&&(b.left=a.left-v.left+g),"using"in a?a.using.call(s,b):M.css(b)}},d.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(g){d.offset.setOffset(this,s,g)});var a,u,h=this[0];if(h)return h.getClientRects().length?(a=h.getBoundingClientRect(),u=h.ownerDocument.defaultView,{top:a.top+u.pageYOffset,left:a.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,a,u,h=this[0],g={top:0,left:0};if(d.css(h,"position")==="fixed")a=h.getBoundingClientRect();else{for(a=this.offset(),u=h.ownerDocument,s=h.offsetParent||u.documentElement;s&&s!==u.documentElement&&d.css(s,"position")==="static";)s=s.offsetParent||u.documentElement;s&&s!==h&&s.nodeType===1&&d.css(s,"position")!=="static"&&(g=d(s).offset(),g.top+=d.css(s,"borderTopWidth",!0),g.left+=d.css(s,"borderLeftWidth",!0))}return{top:a.top-g.top-d.css(h,"marginTop",!0),left:a.left-g.left-d.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&d.css(s,"position")==="static";)s=s.offsetParent;return s||q})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,a){var u=a==="pageYOffset";d.fn[s]=function(h){return $e(this,function(g,p,_){var v;if(L(g)?v=g:g.nodeType===9&&(v=g.defaultView),_===void 0)return v?v[a]:g[p];v?v.scrollTo(u?v.pageXOffset:_,u?_:v.pageYOffset):g[p]=_},s,h,arguments.length)}}),d.each({Height:"height",Width:"width"},function(s,a){d.each({padding:"inner"+s,content:a,"":"outer"+s},function(u,h){d.fn[h]=function(g,p){var _=arguments.length&&(u||typeof g!="boolean"),v=u||(g===!0||p===!0?"margin":"border");return $e(this,function(E,C,I){var M;return L(E)?h.indexOf("outer")===0?E["inner"+s]:E.document.documentElement["client"+s]:E.nodeType===9?(M=E.documentElement,Math.max(E.body["scroll"+s],M["scroll"+s],E.body["offset"+s],M["offset"+s],M["client"+s])):I===void 0?d.css(E,C,v):d.style(E,C,I,v)},a,_?g:void 0,_)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,a){d.fn[a]=function(u){return this.on(a,u)}}),d.fn.extend({bind:function(s,a,u){return this.on(s,null,a,u)},unbind:function(s,a){return this.off(s,null,a)},delegate:function(s,a,u,h){return this.on(a,s,u,h)},undelegate:function(s,a,u){return arguments.length===1?this.off(s,"**"):this.off(a,s||"**",u)},hover:function(s,a){return this.on("mouseenter",s).on("mouseleave",a||s)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,a){d.fn[a]=function(u,h){return arguments.length>0?this.on(a,null,u,h):this.trigger(a)}}),d.proxy=function(s,a){var u,h,g;if(typeof a=="string"&&(u=s[a],a=s,s=u),typeof s=="function")return h=r.call(arguments,2),g=function(){return s.apply(a||this,h.concat(r.call(arguments)))},g.guid=s.guid=s.guid||d.guid++,g},d.holdReady=function(s){s?d.readyWait++:d.ready(!0)},d.expr[":"]=d.expr.filters=d.expr.pseudos,typeof define=="function"&&define.amd&&define("jquery",[],function(){return d});var by=n.jQuery,Iy=n.$;return d.noConflict=function(s){return n.$===d&&(n.$=Iy),s&&n.jQuery===d&&(n.jQuery=by),d},typeof e>"u"&&(n.jQuery=n.$=d),d}var Ph,Fy,Dh=S(()=>{Ph=Ny(window,!0),Fy=Ph});var Fh=Py((mx,Nh)=>{"use strict";var{jQuery:ky}=(Dh(),Mh(Oh));Nh.exports=ky});function J(n,e){if(!n)throw new Error(e)}var lt=S(()=>{});var Fe,kh=S(()=>{Fe={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}});function pa(n){let e=vt();for(let t=0,i=n.length;t<i;++t)wr(e,n[t]);return e}function zy(n,e,t){let i=Math.min.apply(null,n),r=Math.min.apply(null,e),o=Math.max.apply(null,n),l=Math.max.apply(null,e);return Rn(i,r,o,l,t)}function jh(n,e){return e?(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e):n.slice()}function bs(n,e,t){let i,r;return e<n[0]?i=n[0]-e:n[2]<e?i=e-n[2]:i=0,t<n[1]?r=n[1]-t:n[3]<t?r=t-n[3]:r=0,i*i+r*r}function Ti(n,e){return ma(n,e[0],e[1])}function jy(n,e){return n[0]<=e[0]&&e[2]<=n[2]&&n[1]<=e[1]&&e[3]<=n[3]}function ma(n,e,t){return n[0]<=e&&e<=n[2]&&n[1]<=t&&t<=n[3]}function zh(n,e){let t=n[0],i=n[1],r=n[2],o=n[3],l=e[0],c=e[1],f=Fe.UNKNOWN;return l<t?f=f|Fe.LEFT:l>r&&(f=f|Fe.RIGHT),c<i?f=f|Fe.BELOW:c>o&&(f=f|Fe.ABOVE),f===Fe.UNKNOWN&&(f=Fe.INTERSECTING),f}function vt(){return[1/0,1/0,-1/0,-1/0]}function Rn(n,e,t,i,r){return r?(r[0]=n,r[1]=e,r[2]=t,r[3]=i,r):[n,e,t,i]}function Yn(n){return Rn(1/0,1/0,-1/0,-1/0,n)}function Uh(n,e){let t=n[0],i=n[1];return Rn(t,i,t,i,e)}function Gh(n,e,t,i,r){let o=Yn(r);return ya(o,n,e,t,i)}function vr(n,e){return n[0]==e[0]&&n[2]==e[2]&&n[1]==e[1]&&n[3]==e[3]}function Xh(n,e){return e[0]<n[0]&&(n[0]=e[0]),e[2]>n[2]&&(n[2]=e[2]),e[1]<n[1]&&(n[1]=e[1]),e[3]>n[3]&&(n[3]=e[3]),n}function wr(n,e){e[0]<n[0]&&(n[0]=e[0]),e[0]>n[2]&&(n[2]=e[0]),e[1]<n[1]&&(n[1]=e[1]),e[1]>n[3]&&(n[3]=e[1])}function ya(n,e,t,i,r){for(;t<i;t+=r)Uy(n,e[t],e[t+1]);return n}function Uy(n,e,t){n[0]=Math.min(n[0],e),n[1]=Math.min(n[1],t),n[2]=Math.max(n[2],e),n[3]=Math.max(n[3],t)}function Is(n,e){let t;return t=e(Ri(n)),t||(t=e(bi(n)),t)||(t=e(Ii(n)),t)||(t=e(ut(n)),t)?t:!1}function Cr(n){let e=0;return bn(n)||(e=se(n)*Ne(n)),e}function Ri(n){return[n[0],n[1]]}function bi(n){return[n[2],n[1]]}function Gt(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function Wh(n,e){let t;if(e==="bottom-left")t=Ri(n);else if(e==="bottom-right")t=bi(n);else if(e==="top-left")t=ut(n);else if(e==="top-right")t=Ii(n);else throw new Error("Invalid corner");return t}function Tr(n,e,t,i,r){let[o,l,c,f,m,y,x,w]=_a(n,e,t,i);return Rn(Math.min(o,c,m,x),Math.min(l,f,y,w),Math.max(o,c,m,x),Math.max(l,f,y,w),r)}function _a(n,e,t,i){let r=e*i[0]/2,o=e*i[1]/2,l=Math.cos(t),c=Math.sin(t),f=r*l,m=r*c,y=o*l,x=o*c,w=n[0],T=n[1];return[w-f+x,T-m-y,w-f-x,T-m+y,w+f-x,T+m+y,w+f+x,T+m-y,w-f+x,T-m-y]}function Ne(n){return n[3]-n[1]}function Xt(n,e,t){let i=t||vt();return Wt(n,e)?(n[0]>e[0]?i[0]=n[0]:i[0]=e[0],n[1]>e[1]?i[1]=n[1]:i[1]=e[1],n[2]<e[2]?i[2]=n[2]:i[2]=e[2],n[3]<e[3]?i[3]=n[3]:i[3]=e[3]):Yn(i),i}function Gy(n,e){if(!Wt(n,e))return[n.slice()];if(jy(e,n))return[];let[t,i,r,o]=n,l=Math.max(t,e[0]),c=Math.max(i,e[1]),f=Math.min(r,e[2]),m=Math.min(o,e[3]),y=[];return l>t&&y.push([t,i,l,o]),f<r&&y.push([f,i,r,o]),c>i&&y.push([l,i,f,c]),m<o&&y.push([l,m,f,o]),y}function ut(n){return[n[0],n[3]]}function Ii(n){return[n[2],n[3]]}function se(n){return n[2]-n[0]}function Wt(n,e){return n[0]<=e[2]&&n[2]>=e[0]&&n[1]<=e[3]&&n[3]>=e[1]}function bn(n){return n[2]<n[0]||n[3]<n[1]}function Vh(n,e){return e?(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e):n}function Kh(n,e,t){let i=!1,r=zh(n,e),o=zh(n,t);if(r===Fe.INTERSECTING||o===Fe.INTERSECTING)i=!0;else{let l=n[0],c=n[1],f=n[2],m=n[3],y=e[0],x=e[1],w=t[0],T=t[1],R=(T-x)/(w-y),L,O;o&Fe.ABOVE&&!(r&Fe.ABOVE)&&(L=w-(T-m)/R,i=L>=l&&L<=f),!i&&o&Fe.RIGHT&&!(r&Fe.RIGHT)&&(O=T-(w-f)*R,i=O>=c&&O<=m),!i&&o&Fe.BELOW&&!(r&Fe.BELOW)&&(L=w-(T-c)/R,i=L>=l&&L<=f),!i&&o&Fe.LEFT&&!(r&Fe.LEFT)&&(O=T-(w-l)*R,i=O>=c&&O<=m)}return i}function Bh(n,e,t,i){if(bn(n))return Yn(t);let r=[];if(i>1){let c=n[2]-n[0],f=n[3]-n[1];for(let m=0;m<i;++m)r.push(n[0]+c*m/i,n[1],n[2],n[1]+f*m/i,n[2]-c*m/i,n[3],n[0],n[3]-f*m/i)}else r=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]];e(r,r,2);let o=[],l=[];for(let c=0,f=r.length;c<f;c+=2)o.push(r[c]),l.push(r[c+1]);return zy(o,l,t)}function Xy(n,e){let t=e.getExtent(),i=Gt(n);if(e.canWrapX()&&(i[0]<t[0]||i[0]>=t[2])){let r=se(t),l=Math.floor((i[0]-t[0])/r)*r;n[0]-=l,n[2]-=l}return n}function qh(n,e,t){if(e.canWrapX()){let i=e.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[i[0],n[1],i[2],n[3]]];Xy(n,e);let r=se(i);if(se(n)>r&&!t)return[[i[0],n[1],i[2],n[3]]];if(n[0]<i[0])return[[n[0]+r,n[1],i[2],n[3]],[i[0],n[1],n[2],n[3]]];if(n[2]>i[2])return[[n[0],n[1],i[2],n[3]],[i[0],n[1],n[2]-r,n[3]]]}return[n]}function Hh(n,e){let t=[n];for(let i=0,r=e.length;i<r&&t.length>0;++i){let o=[];for(let l=0,c=t.length;l<c;++l)o.push(...Gy(t[l],e[i]));t=o}return t}var ve=S(()=>{kh()});function Ky(n){let e=n.getComplianceLevelSupportedFeatures();return e===void 0&&(e=Zn[Le.VERSION1].level0),{url:n.imageInfo["@id"]===void 0?void 0:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),supports:e.supports,formats:[...e.formats,n.imageInfo.formats===void 0?[]:n.imageInfo.formats],qualities:[...e.qualities,n.imageInfo.qualities===void 0?[]:n.imageInfo.qualities],resolutions:n.imageInfo.scale_factors,tileSize:n.imageInfo.tile_width!==void 0?n.imageInfo.tile_height!==void 0?[n.imageInfo.tile_width,n.imageInfo.tile_height]:[n.imageInfo.tile_width,n.imageInfo.tile_width]:n.imageInfo.tile_height!=null?[n.imageInfo.tile_height,n.imageInfo.tile_height]:void 0}}function By(n){let e=n.getComplianceLevelSupportedFeatures(),t=Array.isArray(n.imageInfo.profile)&&n.imageInfo.profile.length>1,i=t&&n.imageInfo.profile[1].supports?n.imageInfo.profile[1].supports:[],r=t&&n.imageInfo.profile[1].formats?n.imageInfo.profile[1].formats:[],o=t&&n.imageInfo.profile[1].qualities?n.imageInfo.profile[1].qualities:[];return{url:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(l){return[l.width,l.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(l){return l.width})[0],n.imageInfo.tiles.map(function(l){return l.height===void 0?l.width:l.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(l){return l.scaleFactors})[0],supports:[...e.supports,...i],formats:[...e.formats,...r],qualities:[...e.qualities,...o]}}function qy(n){let e=n.getComplianceLevelSupportedFeatures(),t=n.imageInfo.extraFormats===void 0?e.formats:[...e.formats,...n.imageInfo.extraFormats],i=n.imageInfo.preferredFormats!==void 0&&Array.isArray(n.imageInfo.preferredFormats)&&n.imageInfo.preferredFormats.length>0?n.imageInfo.preferredFormats.filter(function(r){return["jpg","png","gif"].includes(r)}).reduce(function(r,o){return r===void 0&&t.includes(o)?o:r},void 0):void 0;return{url:n.imageInfo.id,sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(r){return[r.width,r.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(r){return r.width})[0],n.imageInfo.tiles.map(function(r){return r.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(r){return r.scaleFactors})[0],supports:n.imageInfo.extraFeatures===void 0?e.supports:[...e.supports,...n.imageInfo.extraFeatures],formats:t,qualities:n.imageInfo.extraQualities===void 0?e.qualities:[...e.qualities,...n.imageInfo.extraQualities],preferredFormat:i}}var Le,Zn,Wy,Yh,Vy,Ss,xa,Ea,va=S(()=>{lt();Le={VERSION1:"version1",VERSION2:"version2",VERSION3:"version3"},Zn={};Zn[Le.VERSION1]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}};Zn[Le.VERSION2]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}};Zn[Le.VERSION3]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}};Zn.none={none:{supports:[],formats:[],qualities:[]}};Wy=/^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/,Yh=/^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/,Vy=/(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;Ss={};Ss[Le.VERSION1]=Ky;Ss[Le.VERSION2]=By;Ss[Le.VERSION3]=qy;xa=class{constructor(e){this.setImageInfo(e)}setImageInfo(e){typeof e=="string"?this.imageInfo=JSON.parse(e):this.imageInfo=e}getImageApiVersion(){if(this.imageInfo===void 0)return;let e=this.imageInfo["@context"]||"ol-no-context";typeof e=="string"&&(e=[e]);for(let t=0;t<e.length;t++)switch(e[t]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return Le.VERSION1;case"http://iiif.io/api/image/2/context.json":return Le.VERSION2;case"http://iiif.io/api/image/3/context.json":return Le.VERSION3;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(Le.VERSION1)&&this.imageInfo.identifier)return Le.VERSION1;break;default:}J(!1,"Cannot determine IIIF Image API version from provided image information JSON")}getComplianceLevelEntryFromProfile(e){if(!(this.imageInfo===void 0||this.imageInfo.profile===void 0))switch(e===void 0&&(e=this.getImageApiVersion()),e){case Le.VERSION1:if(Wy.test(this.imageInfo.profile))return this.imageInfo.profile;break;case Le.VERSION3:if(Vy.test(this.imageInfo.profile))return this.imageInfo.profile;break;case Le.VERSION2:if(typeof this.imageInfo.profile=="string"&&Yh.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&typeof this.imageInfo.profile[0]=="string"&&Yh.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0];break;default:}}getComplianceLevelFromProfile(e){let t=this.getComplianceLevelEntryFromProfile(e);if(t===void 0)return;let i=t.match(/level[0-2](?:\.json)?$/g);return Array.isArray(i)?i[0].replace(".json",""):void 0}getComplianceLevelSupportedFeatures(){if(this.imageInfo===void 0)return;let e=this.getImageApiVersion(),t=this.getComplianceLevelFromProfile(e);return t===void 0?Zn.none.none:Zn[e][t]}getTileSourceOptions(e){let t=e||{},i=this.getImageApiVersion();if(i===void 0)return;let r=i===void 0?void 0:Ss[i](this);if(r!==void 0)return{url:r.url,version:i,size:[this.imageInfo.width,this.imageInfo.height],sizes:r.sizes,format:t.format!==void 0&&r.formats.includes(t.format)?t.format:r.preferredFormat!==void 0?r.preferredFormat:"jpg",supports:r.supports,quality:t.quality&&r.qualities.includes(t.quality)?t.quality:r.qualities.includes("native")?"native":"default",resolutions:Array.isArray(r.resolutions)?r.resolutions.sort(function(o,l){return l-o}):void 0,tileSize:r.tileSize}}},Ea=xa});function wa(n){return n[0]>0&&n[1]>0}function Zh(n,e,t){return t===void 0&&(t=[0,0]),t[0]=n[0]*e+.5|0,t[1]=n[1]*e+.5|0,t}function we(n,e){return Array.isArray(n)?n:(e===void 0?e=[n,n]:(e[0]=n,e[1]=n),e)}var Mt=S(()=>{});function $n(n,e,t,i,r){return r!==void 0?(r.minX=n,r.maxX=e,r.minY=t,r.maxY=i,r):new As(n,e,t,i)}var As,Ls,Ca=S(()=>{As=class{constructor(e,t,i,r){this.minX=e,this.maxX=t,this.minY=i,this.maxY=r}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}};Ls=As});function Qn(n,e){return n>e?1:n<e?-1:0}function Si(n,e,t){if(n[0]<=e)return 0;let i=n.length;if(e<=n[i-1])return i-1;if(typeof t=="function"){for(let r=1;r<i;++r){let o=n[r];if(o===e)return r;if(o<e)return t(e,n[r-1],o)>0?r-1:r}return i-1}if(t>0){for(let r=1;r<i;++r)if(n[r]<e)return r-1;return i-1}if(t<0){for(let r=1;r<i;++r)if(n[r]<=e)return r;return i-1}for(let r=1;r<i;++r){if(n[r]==e)return r;if(n[r]<e)return n[r-1]-e<e-n[r]?r-1:r}return i-1}function $h(n,e){let t=Array.isArray(e)?e:[e],i=t.length;for(let r=0;r<i;r++)n[n.length]=t[r]}function In(n,e){let t=n.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function Qh(n,e,t){let i=e||Qn;return n.every(function(r,o){if(o===0)return!0;let l=i(n[o-1],r);return!(l>0||t&&l===0)})}var wt=S(()=>{});function Jh(n,e,t,i,r){return!Is(r,function(l){return!Sn(n,e,t,i,l[0],l[1])})}function Sn(n,e,t,i,r,o){let l=0,c=n[t-i],f=n[t-i+1];for(;e<t;e+=i){let m=n[e],y=n[e+1];f<=o?y>o&&(m-c)*(o-f)-(r-c)*(y-f)>0&&l++:y<=o&&(m-c)*(o-f)-(r-c)*(y-f)<0&&l--,c=m,f=y}return l!==0}function Ms(n,e,t,i,r,o){if(t.length===0||!Sn(n,e,t[0],i,r,o))return!1;for(let l=1,c=t.length;l<c;++l)if(Sn(n,t[l-1],t[l],i,r,o))return!1;return!0}var Ps=S(()=>{ve()});function ef(n,e,t,i,r){let o;for(e+=i;e<t;e+=i)if(o=r(n.slice(e-i,e),n.slice(e,e+i)),o)return o;return!1}var tf=S(()=>{});function Os(n,e,t,i,r,o){return o=o??ya(vt(),n,e,t,i),Wt(r,o)?o[0]>=r[0]&&o[2]<=r[2]||o[1]>=r[1]&&o[3]<=r[3]?!0:ef(n,e,t,i,function(l,c){return Kh(r,l,c)}):!1}function Ta(n,e,t,i,r){return!!(Os(n,e,t,i,r)||Sn(n,e,t,i,r[0],r[1])||Sn(n,e,t,i,r[0],r[3])||Sn(n,e,t,i,r[2],r[1])||Sn(n,e,t,i,r[2],r[3]))}function nf(n,e,t,i,r){if(!Ta(n,e,t[0],i,r))return!1;if(t.length===1)return!0;for(let o=1,l=t.length;o<l;++o)if(Jh(n,t[o-1],t[o],i,r)&&!Os(n,t[o-1],t[o],i,r))return!1;return!0}var Ds=S(()=>{ve();Ps();tf()});function ge(n,e,t){return Math.min(Math.max(n,e),t)}function rf(n,e,t,i,r,o){let l=r-t,c=o-i;if(l!==0||c!==0){let f=((n-t)*l+(e-i)*c)/(l*l+c*c);f>1?(t=r,i=o):f>0&&(t+=l*f,i+=c*f)}return sn(n,e,t,i)}function sn(n,e,t,i){let r=t-n,o=i-e;return r*r+o*o}function sf(n){let e=n.length;for(let i=0;i<e;i++){let r=i,o=Math.abs(n[i][i]);for(let c=i+1;c<e;c++){let f=Math.abs(n[c][i]);f>o&&(o=f,r=c)}if(o===0)return null;let l=n[r];n[r]=n[i],n[i]=l;for(let c=i+1;c<e;c++){let f=-n[c][i]/n[i][i];for(let m=i;m<e+1;m++)i==m?n[c][m]=0:n[c][m]+=f*n[i][m]}}let t=new Array(e);for(let i=e-1;i>=0;i--){t[i]=n[i][e]/n[i][i];for(let r=i-1;r>=0;r--)n[r][e]-=n[r][i]*t[i]}return t}function Ns(n){return n*180/Math.PI}function Pt(n){return n*Math.PI/180}function on(n,e){let t=n%e;return t*e<0?t+e:t}function of(n,e,t){return n+t*(e-n)}function Fs(n,e){let t=Math.pow(10,e);return Math.round(n*t)/t}function Rr(n,e){return Math.floor(Fs(n,e))}function br(n,e){return Math.ceil(Fs(n,e))}function ks(n,e,t){if(n>=e&&n<t)return n;let i=t-e;return((n-e)%i+i)%i+e}var ke=S(()=>{});function ee(){throw new Error("Unimplemented abstract method.")}function ye(n){return n.ol_uid||(n.ol_uid=String(++Hy))}var Hy,ze=S(()=>{Hy=0});function Ai(n,e,t,i){return i!==void 0?(i[0]=n,i[1]=e,i[2]=t,i):[n,e,t]}function Yy(n,e,t){return n+"/"+e+"/"+t}function Li(n,e,t,i,r){return`${ye(n)},${e},${Yy(t,i,r)}`}function af(n){return Zy(n[0],n[1],n[2])}function Zy(n,e,t){return(e<<n)+t}function lf(n,e){let t=n[0],i=n[1],r=n[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;let o=e.getFullTileRange(t);return o?o.containsXY(i,r):!0}var Mi=S(()=>{ze()});var Pi,An,Ra,js,ba=S(()=>{Ca();wt();lt();ve();Ds();ke();Mt();Mi();Pi=[0,0,0],An=5,Ra=class{constructor(e){let t=e.minZoom,i=e.resolutions;t===void 0&&i&&(t=i.findIndex(l=>l!==void 0)),this.minZoom=t!==void 0?t:0,this.resolutions_=i,J(Qh(this.resolutions_,(l,c)=>c-l,!0),"`resolutions` must be sorted in descending order");let r;if(!e.origins){for(let l=0,c=this.resolutions_.length-1;l<c;++l)if(!r)r=this.resolutions_[l]/this.resolutions_[l+1];else if(this.resolutions_[l]/this.resolutions_[l+1]!==r){r=void 0;break}}this.zoomFactor_=r,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,J(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));let o=e.extent;o!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=ut(o)),J(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,J(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:256,J(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=o!==void 0?o:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.tileRanges!==void 0?this.fullTileRanges_=e.tileRanges:e.sizes!==void 0?this.fullTileRanges_=e.sizes.map((l,c)=>{let f=new Ls(Math.min(0,l[0]),Math.max(l[0]-1,-1),Math.min(0,l[1]),Math.max(l[1]-1,-1));if(o){let m=this.getTileRangeForExtentAndZ(o,c);f.minX=Math.max(m.minX,f.minX),f.maxX=Math.min(m.maxX,f.maxX),f.minY=Math.max(m.minY,f.minY),f.maxY=Math.min(m.maxY,f.maxY)}return f}):o&&this.calculateTileRanges_(o)}forEachTileCoord(e,t,i){let r=this.getTileRangeForExtentAndZ(e,t);for(let o=r.minX,l=r.maxX;o<=l;++o)for(let c=r.minY,f=r.maxY;c<=f;++c)i([t,o,c])}forEachTileCoordParentTileRange(e,t,i,r){let o,l,c,f=null,m=e[0]-1;for(this.zoomFactor_===2?(l=e[1],c=e[2]):f=this.getTileCoordExtent(e,r);m>=this.minZoom;){if(l!==void 0&&c!==void 0?(l=Math.floor(l/2),c=Math.floor(c/2),o=$n(l,l,c,c,i)):o=this.getTileRangeForExtentAndZ(f,m,i),t(m,o))return!0;--m}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getOrigins(){return this.origins_}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,i){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){let o=e[1]*2,l=e[2]*2;return $n(o,o+1,l,l+1,t)}let r=this.getTileCoordExtent(e,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,i){if(t>this.maxZoom||t<this.minZoom)return null;let r=e[0],o=e[1],l=e[2];if(t===r)return $n(o,l,o,l,i);if(this.zoomFactor_){let f=Math.pow(this.zoomFactor_,t-r),m=Math.floor(o*f),y=Math.floor(l*f);if(t<r)return $n(m,m,y,y,i);let x=Math.floor(f*(o+1))-1,w=Math.floor(f*(l+1))-1;return $n(m,x,y,w,i)}let c=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(c,t,i)}getTileRangeForExtentAndZ(e,t,i){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,Pi);let r=Pi[1],o=Pi[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,Pi);let l=Pi[1],c=Pi[2];return $n(r,l,o,c,i)}getTileCoordCenter(e){let t=this.getOrigin(e[0]),i=this.getResolution(e[0]),r=we(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*r[0]*i,t[1]-(e[2]+.5)*r[1]*i]}getTileCoordExtent(e,t){let i=this.getOrigin(e[0]),r=this.getResolution(e[0]),o=we(this.getTileSize(e[0]),this.tmpSize_),l=i[0]+e[1]*o[0]*r,c=i[1]-(e[2]+1)*o[1]*r,f=l+o[0]*r,m=c+o[1]*r;return Rn(l,c,f,m,t)}getTileCoordForCoordAndResolution(e,t,i){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,i)}getTileCoordForXYAndResolution_(e,t,i,r,o){let l=this.getZForResolution(i),c=i/this.getResolution(l),f=this.getOrigin(l),m=we(this.getTileSize(l),this.tmpSize_),y=c*(e-f[0])/i/m[0],x=c*(f[1]-t)/i/m[1];return r?(y=br(y,An)-1,x=br(x,An)-1):(y=Rr(y,An),x=Rr(x,An)),Ai(l,y,x,o)}getTileCoordForXYAndZ_(e,t,i,r,o){let l=this.getOrigin(i),c=this.getResolution(i),f=we(this.getTileSize(i),this.tmpSize_),m=(e-l[0])/c/f[0],y=(l[1]-t)/c/f[1];return r?(m=br(m,An)-1,y=br(y,An)-1):(m=Rr(m,An),y=Rr(y,An)),Ai(i,m,y,o)}getTileCoordForCoordAndZ(e,t,i){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,i)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){let i=Si(this.resolutions_,e,t||0);return ge(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return Ta(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){let t=this.resolutions_.length,i=new Array(t);for(let r=this.minZoom;r<t;++r)i[r]=this.getTileRangeForExtentAndZ(e,r);this.fullTileRanges_=i}},js=Ra});var $,Ln=S(()=>{$={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}});function Mn(n){for(let e in n)delete n[e]}function Us(n){let e;for(e in n)return!1;return!e}var Jn=S(()=>{});function Q(n,e,t,i,r){if(r){let l=t;t=function(c){return n.removeEventListener(e,t),l.call(i??this,c)}}else i&&i!==n&&(t=t.bind(i));let o={target:n,type:e,listener:t};return n.addEventListener(e,t),o}function Oi(n,e,t,i){return Q(n,e,t,i,!0)}function oe(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),Mn(n))}var Ct=S(()=>{Jn()});var K,be=S(()=>{K={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}});var Ia,Pn,Ir=S(()=>{Ia=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}},Pn=Ia});function ei(){return!0}function an(){return!1}function ti(){}function uf(n){let e,t,i;return function(){let r=Array.prototype.slice.call(arguments);return(!t||this!==i||!In(r,t))&&(i=this,t=r,e=n.apply(this,arguments)),e}}function cf(n){function e(){let t;try{t=n()}catch(i){return Promise.reject(i)}return t instanceof Promise?t:Promise.resolve(t)}return e()}var gt=S(()=>{wt()});var Sa,Ve,ln=S(()=>{Sa=class{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}},Ve=Sa});var Aa,On,Sr=S(()=>{Ir();gt();Jn();ln();Aa=class extends Pn{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;let i=this.listeners_||(this.listeners_={}),r=i[e]||(i[e]=[]);r.includes(t)||r.push(t)}dispatchEvent(e){let t=typeof e=="string",i=t?e:e.type,r=this.listeners_&&this.listeners_[i];if(!r)return;let o=t?new Ve(e):e;o.target||(o.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),c=this.pendingRemovals_||(this.pendingRemovals_={});i in l||(l[i]=0,c[i]=0),++l[i];let f;for(let m=0,y=r.length;m<y;++m)if("handleEvent"in r[m]?f=r[m].handleEvent(o):f=r[m].call(this,o),f===!1||o.propagationStopped){f=!1;break}if(--l[i]===0){let m=c[i];for(delete c[i];m--;)this.removeEventListener(i,ti);delete l[i]}return f}disposeInternal(){this.listeners_&&Mn(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){if(!this.listeners_)return;let i=this.listeners_[e];if(!i)return;let r=i.indexOf(t);r!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(i[r]=ti,++this.pendingRemovals_[e]):(i.splice(r,1),i.length===0&&delete this.listeners_[e]))}},On=Aa});var ni,$y,oE,hf,La,ff,Ke,Ma,Gs,Vt=S(()=>{ni=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",$y=ni.includes("safari")&&!ni.includes("chrom"),oE=$y&&(ni.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(ni)),hf=ni.includes("webkit")&&!ni.includes("edge"),La=ni.includes("macintosh"),ff=typeof devicePixelRatio<"u"?devicePixelRatio:1,Ke=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Ma=typeof Image<"u"&&Image.prototype.decode,Gs=(function(){let n=!1;try{let e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return n})()});function df(n,e,t){let i=n,r=!0,o=!1,l=!1,c=[Oi(i,K.LOAD,function(){l=!0,o||e()})];return i.src&&Ma?(o=!0,i.decode().then(function(){r&&e()}).catch(function(f){r&&(l?e():t())})):c.push(Oi(i,K.ERROR,t)),function(){r=!1,c.forEach(oe)}}function Qy(n,e){return new Promise((t,i)=>{function r(){l(),t(n)}function o(){l(),i(new Error("Image load error"))}function l(){n.removeEventListener("load",r),n.removeEventListener("error",o)}n.addEventListener("load",r),n.addEventListener("error",o),e&&(n.src=e)})}function gf(n,e){return e&&(n.src=e),n.src&&Ma?new Promise((t,i)=>n.decode().then(()=>t(n)).catch(r=>n.complete&&n.width?t(n):i(r))):Qy(n)}var Pa=S(()=>{Ct();be();Vt()});var W,Kt=S(()=>{W={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}});function Oa(n){return Math.pow(n,3)}function Tt(n){return 1-Oa(1-n)}function pf(n){return 3*n*n-2*n*n*n}function mf(n){return n}var Dn=S(()=>{});var Da,Di,Xs=S(()=>{Kt();Dn();be();Sr();ze();Da=class extends On{constructor(e,t,i){super(),i=i||{},this.tileCoord=e,this.state=t,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(K.CHANGE)}release(){this.setState(W.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==W.EMPTY){if(this.state!==W.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}}load(){ee()}getAlpha(e,t){if(!this.transition_)return 1;let i=this.transitionStarts_[e];if(!i)i=t,this.transitionStarts_[e]=i;else if(i===-1)return 1;let r=t-i+1e3/60;return r>=this.transition_?1:Oa(r/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}disposeInternal(){this.release(),super.disposeInternal()}},Di=Da});function Ce(n,e,t,i){let r;return t&&t.length?r=t.shift():Ke?r=new class extends OffscreenCanvas{style={}}(n??300,e??150):r=document.createElement("canvas"),n&&(r.width=n),e&&(r.height=e),r.getContext("2d",i)}function Ar(){return Na||(Na=Ce(1,1)),Na}function Lr(n){let e=n.canvas;e.width=1,e.height=1,n.clearRect(0,0,1,1)}function Ni(n,e){let t=e.parentNode;t&&t.replaceChild(n,e)}function yf(n){for(;n.lastChild;)n.lastChild.remove()}function _f(n,e){let t=n.childNodes;for(let i=0;;++i){let r=t[i],o=e[i];if(!r&&!o)break;if(r!==o){if(!r){n.appendChild(o);continue}if(!o){n.removeChild(r),--i;continue}n.insertBefore(o,r)}}}function Ws(){return new Proxy({childNodes:[],appendChild:function(e){return this.childNodes.push(e),e},remove:function(){},removeChild:function(e){let t=this.childNodes.indexOf(e);if(t===-1)throw new Error("Node to remove was not found");return this.childNodes.splice(t,1),e},insertBefore:function(e,t){let i=this.childNodes.indexOf(t);if(i===-1)throw new Error("Reference node not found");return this.childNodes.splice(i,0,e),e},style:{}},{get(e,t,i){return t==="firstElementChild"?e.childNodes.length>0?e.childNodes[0]:null:Reflect.get(e,t,i)}})}function pt(n){return typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}var Na,Be=S(()=>{Vt()});function Jy(){let n=Ce(1,1);return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,1,1),n.canvas}var Fa,Fi,Vs=S(()=>{Pa();Xs();Kt();Be();Vt();Fa=class extends Di{constructor(e,t,i,r,o,l){super(e,t,l),this.crossOrigin_=r?.crossOrigin,this.referrerPolicy_=r?.referrerPolicy,this.src_=i,this.key=i,this.image_,Ke?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=o}getImage(){return this.image_}setImage(e){this.image_=e,this.state=W.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){this.state=W.ERROR,this.unlistenImage_(),this.image_=Jy(),this.changed()}handleImageLoad_(){if(Ke)this.state=W.LOADED;else{let e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=W.LOADED:this.state=W.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==W.ERROR&&(this.state=W.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==W.IDLE&&(this.state=W.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=df(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}};Fi=Fa});function Ks(...n){e_>xf.warn||console.warn(...n)}var xf,e_,ka=S(()=>{xf={info:1,warn:2,error:3,none:4},e_=xf.info});function Ef(n,e){return n[0]+=+e[0],n[1]+=+e[1],n}function ii(n,e){let t=!0;for(let i=n.length-1;i>=0;--i)if(n[i]!=e[i]){t=!1;break}return t}function ki(n,e){let t=Math.cos(e),i=Math.sin(e),r=n[0]*t-n[1]*i,o=n[1]*t+n[0]*i;return n[0]=r,n[1]=o,n}function vf(n,e){return n[0]*=e,n[1]*=e,n}function wf(n,e){if(e.canWrapX()){let t=se(e.getExtent()),i=Cf(n,e,t);i&&(n[0]-=i*t)}return n}function Cf(n,e,t){let i=e.getExtent(),r=0;return e.canWrapX()&&(n[0]<i[0]||n[0]>i[2])&&(t=t||se(i),r=Math.floor((n[0]-i[0])/t)),r}var zi=S(()=>{ve()});var un,za=S(()=>{un={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937}});var ja,ji,Bs=S(()=>{za();ja=class{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||un[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}},ji=ja});function Tf(n,e,t,i){let r=n.length;t=t>1?t:2,i=i??t,e===void 0&&(t>2?e=n.slice():e=new Array(r));for(let o=0;o<r;o+=i){e[o]=Ui*n[o]/180;let l=Mr*Math.log(Math.tan(Math.PI*(+n[o+1]+90)/360));l>qs?l=qs:l<-qs&&(l=-qs),e[o+1]=l}return e}function Rf(n,e,t,i){let r=n.length;t=t>1?t:2,i=i??t,e===void 0&&(t>2?e=n.slice():e=new Array(r));for(let o=0;o<r;o+=i)e[o]=180*n[o]/Ui,e[o+1]=360*Math.atan(Math.exp(n[o+1]/Mr))/Math.PI-90;return e}var Mr,Ui,t_,n_,qs,Nn,Ua,bf=S(()=>{Bs();Mr=6378137,Ui=Math.PI*Mr,t_=[-Ui,-Ui,Ui,Ui],n_=[-180,-85,180,85],qs=Mr*Math.log(Math.tan(Math.PI/2)),Nn=class extends ji{constructor(e){super({code:e,units:"m",extent:t_,global:!0,worldExtent:n_,getPointResolution:function(t,i){return t/Math.cosh(i[1]/Mr)}})}},Ua=[new Nn("EPSG:3857"),new Nn("EPSG:102100"),new Nn("EPSG:102113"),new Nn("EPSG:900913"),new Nn("http://www.opengis.net/def/crs/EPSG/0/3857"),new Nn("http://www.opengis.net/gml/srs/epsg.xml#3857")]});var i_,If,r_,cn,Ga,Sf=S(()=>{Bs();i_=6378137,If=[-180,-90,180,90],r_=Math.PI*i_/180,cn=class extends ji{constructor(e,t){super({code:e,units:"degrees",extent:If,axisOrientation:t,global:!0,metersPerUnit:r_,worldExtent:If})}},Ga=[new cn("CRS:84"),new cn("EPSG:4326","neu"),new cn("urn:ogc:def:crs:OGC:1.3:CRS84"),new cn("urn:ogc:def:crs:OGC:2:84"),new cn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new cn("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new cn("http://www.opengis.net/def/crs/EPSG/0/4326","neu")]});function Af(n){return Xa[n]||Xa[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Lf(n,e){Xa[n]=e}var Xa,Mf=S(()=>{Xa={}});function Xi(n,e,t){let i=n.getCode(),r=e.getCode();i in Gi||(Gi[i]={}),Gi[i][r]=t}function Hs(n,e){return n in Gi&&e in Gi[n]?Gi[n][e]:null}var Gi,Pf=S(()=>{Gi={}});function f_(n,e,t){let i=n-5e5,l=(t.north?e:e-1e7)/Ys/(Zs*jf),c=l+l_*Math.sin(2*l)+u_*Math.sin(4*l)+c_*Math.sin(6*l)+h_*Math.sin(8*l),f=Math.sin(c),m=f*f,y=Math.cos(c),x=f/y,w=x*x,T=w*w,R=1-Rt*m,L=Math.sqrt(1-Rt*m),O=Zs/L,P=(1-Rt)/R,z=ri*y**2,j=z*z,N=i/(O*Ys),F=N*N,d=F*N,V=d*N,X=V*N,k=X*N,U=c-x/P*(F/2-V/24*(5+3*w+10*z-4*j-9*ri))+k/720*(61+90*w+298*z+45*T-252*ri-3*j),ne=(N-d/6*(1+2*w+z)+X/120*(5-2*z+28*w-3*j+8*ri+24*T))/y;return ne=ks(ne+Pt(Uf(t.number)),-Math.PI,Math.PI),[Ns(ne),Ns(U)]}function p_(n,e,t){n=ks(n,d_,g_),e<Df?e=Df:e>Nf&&(e=Nf);let i=Pt(e),r=Math.sin(i),o=Math.cos(i),l=r/o,c=l*l,f=c*c,m=Pt(n),y=Uf(t.number),x=Pt(y),w=Zs/Math.sqrt(1-Rt*r**2),T=ri*o**2,R=o*ks(m-x,-Math.PI,Math.PI),L=R*R,O=L*R,P=O*R,z=P*R,j=z*R,N=Zs*(jf*i-s_*Math.sin(2*i)+o_*Math.sin(4*i)-a_*Math.sin(6*i)),F=Ys*w*(R+O/6*(1-c+T)+z/120*(5-18*c+f+72*T-58*ri))+5e5,d=Ys*(N+w*l*(L/2+P/24*(5-c+9*T+4*T**2)+j/720*(61-58*c+f+600*T-330*ri)));return t.north||(d+=1e7),[F,d]}function Uf(n){return(n-1)*6-180+3}function Gf(n){let e=0;for(let r of m_){let o=n.match(r);if(o){e=parseInt(o[1]);break}}if(!e)return null;let t=0,i=!1;return e>32700&&e<32761?t=e-32700:e>32600&&e<32661&&(i=!0,t=e-32600),t?{number:t,north:i}:null}function Ff(n,e){return function(t,i,r,o){let l=t.length;r=r>1?r:2,o=o??r,i||(r>2?i=t.slice():i=new Array(l));for(let c=0;c<l;c+=o){let f=t[c],m=t[c+1],y=n(f,m,e);i[c]=y[0],i[c+1]=y[1]}return i}}function Xf(n){return Gf(n)?new ji({code:n,units:"m"}):null}function Wf(n){let e=Gf(n.getCode());return e?{forward:Ff(p_,e),inverse:Ff(f_,e)}:null}var Ys,Rt,$s,Qs,ri,Of,Wi,kf,Wa,Va,zf,jf,s_,o_,a_,l_,u_,c_,h_,Zs,Df,Nf,d_,g_,m_,Vf=S(()=>{ke();Bs();Ys=.9996,Rt=.00669438,$s=Rt*Rt,Qs=$s*Rt,ri=Rt/(1-Rt),Of=Math.sqrt(1-Rt),Wi=(1-Of)/(1+Of),kf=Wi*Wi,Wa=kf*Wi,Va=Wa*Wi,zf=Va*Wi,jf=1-Rt/4-3*$s/64-5*Qs/256,s_=3*Rt/8+3*$s/32+45*Qs/1024,o_=15*$s/256+45*Qs/1024,a_=35*Qs/3072,l_=3/2*Wi-27/32*Wa+269/512*zf,u_=21/16*kf-55/32*Va,c_=151/96*Wa-417/128*zf,h_=1097/512*Va,Zs=6378137;Df=-80,Nf=84,d_=-180,g_=180;m_=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/]});function Ka(n,e,t){t=t||y_;let i=Pt(n[1]),r=Pt(e[1]),o=(r-i)/2,l=Pt(e[0]-n[0])/2,c=Math.sin(o)*Math.sin(o)+Math.sin(l)*Math.sin(l)*Math.cos(i)*Math.cos(r);return 2*t*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}var y_,Kf=S(()=>{ke();y_=63710088e-1});function qf(n){qa=!(n===void 0?!0:n)}function Ya(n,e){if(e!==void 0){for(let t=0,i=n.length;t<i;++t)e[t]=n[t];e=e}else e=n.slice();return e}function Ha(n){Lf(n.getCode(),n),Xi(n,n,Ya)}function E_(n){n.forEach(Ha)}function qe(n){if(typeof n!="string")return n;let e=Af(n);if(e)return e;for(let t of x_){let i=t(n);if(i)return i}return null}function Za(n,e,t,i){n=qe(n);let r,o=n.getPointResolutionFunc();if(o){if(r=o(e,t),i&&i!==n.getUnits()){let l=n.getMetersPerUnit();l&&(r=r*l/un[i])}}else{let l=n.getUnits();if(l=="degrees"&&!i||i=="degrees")r=e;else{let c=$a(n,qe("EPSG:4326"));if(!c&&l!=="degrees")r=e*n.getMetersPerUnit();else{let m=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];m=c(m,m,2);let y=Ka(m.slice(0,2),m.slice(2,4)),x=Ka(m.slice(4,6),m.slice(6,8));r=(y+x)/2}let f=i?un[i]:n.getMetersPerUnit();f!==void 0&&(r/=f)}}return r}function Bf(n){E_(n),n.forEach(function(e){n.forEach(function(t){e!==t&&Xi(e,t,Ya)})})}function v_(n,e,t,i){n.forEach(function(r){e.forEach(function(o){Xi(r,o,t),Xi(o,r,i)})})}function Js(n,e){return n?typeof n=="string"?qe(n):n:qe(e)}function Hf(n){return(function(e,t,i,r){let o=e.length;i=i!==void 0?i:2,r=r??i,t=t!==void 0?t:new Array(o);for(let l=0;l<o;l+=r){let c=n(e.slice(l,l+i)),f=c.length;for(let m=0,y=r;m<y;++m)t[l+m]=m>=f?e[l+m]:c[m]}return t})}function Vi(n,e){if(n===e)return!0;let t=n.getUnits()===e.getUnits();return(n.getCode()===e.getCode()||$a(n,e)===Ya)&&t}function $a(n,e){let t=n.getCode(),i=e.getCode(),r=Hs(t,i);if(r)return r;let o=null,l=null;for(let f of __)o||(o=f(n)),l||(l=f(e));if(!o&&!l)return null;let c="EPSG:4326";if(l)if(o)r=Ba(o.inverse,l.forward);else{let f=Hs(t,c);f&&(r=Ba(f,l.forward))}else{let f=Hs(c,i);f&&(r=Ba(o.inverse,f))}return r&&(Ha(n),Ha(e),Xi(n,e,r)),r}function Ba(n,e){return function(t,i,r,o){return i=n(t,i,r,o),e(i,i,r,o)}}function si(n,e){let t=qe(n),i=qe(e);return $a(t,i)}function Ki(n,e,t){let i=si(e,t);if(!i){let r=qe(e).getCode(),o=qe(t).getCode();throw new Error(`No transform available between ${r} and ${o}`)}return i(n,void 0,n.length)}function Yf(n,e,t,i){let r=si(e,t);return Bh(n,r,void 0,i)}function Zf(){return hn}function Pr(n,e){return hn?Ki(n,e,hn):n}function mt(n,e){return hn?Ki(n,hn,e):(qa&&!ii(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(qa=!1,Ks("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),n)}function $f(n,e){return hn?Yf(n,e,hn):n}function Bt(n,e){return hn?Yf(n,hn,e):n}function w_(){Bf(Ua),Bf(Ga),v_(Ga,Ua,Tf,Rf)}var __,x_,qa,hn,Ot=S(()=>{ka();zi();ve();za();bf();Sf();Mf();Pf();Vf();Kf();__=[Wf],x_=[Xf],qa=!0;hn=null;w_()});function Qf(n,e,t,i,r){n.beginPath(),n.moveTo(0,0),n.lineTo(e,t),n.lineTo(i,r),n.closePath(),n.save(),n.clip(),n.fillRect(0,0,Math.max(e,i)+1,Math.max(t,r)),n.restore()}function Ja(n,e){return Math.abs(n[e*4]-210)>2||Math.abs(n[e*4+3]-.75*255)>2}function C_(){if(Qa===void 0){let n=Ce(6,6,oi);n.globalCompositeOperation="lighter",n.fillStyle="rgba(210, 0, 0, 0.75)",Qf(n,4,5,4,0),Qf(n,4,5,0,5);let e=n.getImageData(0,0,3,3).data;Qa=Ja(e,0)||Ja(e,4)||Ja(e,8),Lr(n),oi.push(n.canvas)}return Qa}function Jf(n,e,t,i){let r=Ki(t,e,n),o=Za(e,i,t),l=e.getMetersPerUnit();l!==void 0&&(o*=l);let c=n.getMetersPerUnit();c!==void 0&&(o/=c);let f=n.getExtent();if(!f||Ti(f,r)){let m=Za(n,o,r)/o;isFinite(m)&&m>0&&(o/=m)}return o}function ed(n,e,t,i){let r=Gt(t),o=Jf(n,e,r,i);return(!isFinite(o)||o<=0)&&Is(t,function(l){return o=Jf(n,e,l,i),isFinite(o)&&o>0}),o}function td(n,e,t,i,r,o,l,c,f,m,y,x,w,T){let R=Ce(Math.round(t*n),Math.round(t*e),oi);if(x||(R.imageSmoothingEnabled=!1),f.length===0)return R.canvas;R.scale(t,t);function L(F){return Math.round(F*t)/t}R.globalCompositeOperation="lighter";let O=vt();f.forEach(function(F,d,V){Xh(O,F.extent)});let P,z=t/i,j=(x?1:1+Math.pow(2,-24))/z;if(!w||f.length!==1||m!==0){if(P=Ce(Math.round(se(O)*z),Math.round(Ne(O)*z),oi),x||(P.imageSmoothingEnabled=!1),r&&T){let F=(r[0]-O[0])*z,d=-(r[3]-O[3])*z,V=se(r)*z,X=Ne(r)*z;P.rect(F,d,V,X),P.clip()}f.forEach(function(F,d,V){if(F.image.width>0&&F.image.height>0){if(F.clipExtent){P.save();let fe=(F.clipExtent[0]-O[0])*z,ie=-(F.clipExtent[3]-O[3])*z,Oe=se(F.clipExtent)*z,Ue=Ne(F.clipExtent)*z;P.rect(x?fe:Math.round(fe),x?ie:Math.round(ie),x?Oe:Math.round(fe+Oe)-Math.round(fe),x?Ue:Math.round(ie+Ue)-Math.round(ie)),P.clip()}let X=(F.extent[0]-O[0])*z,k=-(F.extent[3]-O[3])*z,U=se(F.extent)*z,ne=Ne(F.extent)*z;P.drawImage(F.image,m,m,F.image.width-2*m,F.image.height-2*m,x?X:Math.round(X),x?k:Math.round(k),x?U:Math.round(X+U)-Math.round(X),x?ne:Math.round(k+ne)-Math.round(k)),F.clipExtent&&P.restore()}})}let N=ut(l);return c.getTriangles().forEach(function(F,d,V){let X=F.source,k=F.target,U=X[0][0],ne=X[0][1],fe=X[1][0],ie=X[1][1],Oe=X[2][0],Ue=X[2][1],le=L((k[0][0]-N[0])/o),q=L(-(k[0][1]-N[1])/o),ue=L((k[1][0]-N[0])/o),me=L(-(k[1][1]-N[1])/o),Re=L((k[2][0]-N[0])/o),Se=L(-(k[2][1]-N[1])/o),Ae=U,De=ne;U=0,ne=0,fe-=Ae,ie-=De,Oe-=Ae,Ue-=De;let xn=[[fe,ie,0,0,ue-le],[Oe,Ue,0,0,Re-le],[0,0,fe,ie,me-q],[0,0,Oe,Ue,Se-q]],nt=sf(xn);if(!nt)return;if(R.save(),R.beginPath(),C_()||!x){R.moveTo(ue,me);let de=4,it=le-ue,Vn=q-me;for(let xt=0;xt<de;xt++)R.lineTo(ue+L((xt+1)*it/de),me+L(xt*Vn/(de-1))),xt!=de-1&&R.lineTo(ue+L((xt+1)*it/de),me+L((xt+1)*Vn/(de-1)));R.lineTo(Re,Se)}else R.moveTo(ue,me),R.lineTo(le,q),R.lineTo(Re,Se);R.clip(),R.transform(nt[0],nt[2],nt[1],nt[3],le,q),R.translate(O[0]-Ae,O[3]-De);let _t;if(P)_t=P.canvas,R.scale(j,-j);else{let de=f[0],it=de.extent;_t=de.image,R.scale(se(it)/_t.width,-Ne(it)/_t.height)}R.drawImage(_t,0,0),R.restore()}),P&&(Lr(P),oi.push(P.canvas)),y&&(R.save(),R.globalCompositeOperation="source-over",R.strokeStyle="black",R.lineWidth=1,c.getTriangles().forEach(function(F,d,V){let X=F.target,k=(X[0][0]-N[0])/o,U=-(X[0][1]-N[1])/o,ne=(X[1][0]-N[0])/o,fe=-(X[1][1]-N[1])/o,ie=(X[2][0]-N[0])/o,Oe=-(X[2][1]-N[1])/o;R.beginPath(),R.moveTo(ne,fe),R.lineTo(k,U),R.lineTo(ie,Oe),R.closePath(),R.stroke()}),R.restore()),R.canvas}var Qa,oi,nd=S(()=>{Be();ve();ke();Ot();oi=[]});function fn(){return T_.slice(0)}function Ge(n,e){let t=e[0],i=e[1];return e[0]=n[0]*t+n[2]*i+n[4],e[1]=n[1]*t+n[3]*i+n[5],e}function dn(n,e,t,i,r,o,l,c){let f=Math.sin(o),m=Math.cos(o);return n[0]=i*m,n[1]=r*f,n[2]=-i*f,n[3]=r*m,n[4]=l*i*m-c*i*f+e,n[5]=l*r*f+c*r*m+t,n}function to(n,e){let t=R_(e);J(t!==0,"Transformation matrix cannot be inverted");let i=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5];return n[0]=l/t,n[1]=-r/t,n[2]=-o/t,n[3]=i/t,n[4]=(o*f-l*c)/t,n[5]=-(i*f-r*c)/t,n}function R_(n){return n[0]*n[3]-n[1]*n[2]}function id(n){return"matrix("+n.join(", ")+")"}function eo(n){return n.substring(7,n.length-1).split(",").map(parseFloat)}function rd(n,e){let t=eo(n),i=eo(e);for(let r=0;r<6;++r)if(Math.round((t[r]-i[r])*b_[r])!==0)return!1;return!0}var T_,fv,b_,Fn=S(()=>{lt();T_=[1,0,0,1,0,0],fv=new Array(6);b_=[1e5,1e5,1e5,1e5,2,2]});var I_,sd,el,od,ad=S(()=>{ve();ke();Ot();Fn();I_=10,sd=.25,el=class{constructor(e,t,i,r,o,l,c){this.sourceProj_=e,this.targetProj_=t;let f={},m=c?Hf(j=>Ge(c,Ki(j,this.targetProj_,this.sourceProj_))):si(this.targetProj_,this.sourceProj_);this.transformInv_=function(j){let N=j[0]+"/"+j[1];return f[N]||(f[N]=m(j)),f[N]},this.maxSourceExtent_=r,this.errorThresholdSquared_=o*o,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&se(r)>=se(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?se(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?se(this.targetProj_.getExtent()):null;let y=ut(i),x=Ii(i),w=bi(i),T=Ri(i),R=this.transformInv_(y),L=this.transformInv_(x),O=this.transformInv_(w),P=this.transformInv_(T),z=I_+(l?Math.max(0,Math.ceil(Math.log2(Cr(i)/(l*l*256*256)))):0);if(this.addQuad_(y,x,w,T,R,L,O,P,z),this.wrapsXInSource_){let j=1/0;this.triangles_.forEach(function(N,F,d){j=Math.min(j,N.source[0][0],N.source[1][0],N.source[2][0])}),this.triangles_.forEach(N=>{if(Math.max(N.source[0][0],N.source[1][0],N.source[2][0])-j>this.sourceWorldWidth_/2){let F=[[N.source[0][0],N.source[0][1]],[N.source[1][0],N.source[1][1]],[N.source[2][0],N.source[2][1]]];F[0][0]-j>this.sourceWorldWidth_/2&&(F[0][0]-=this.sourceWorldWidth_),F[1][0]-j>this.sourceWorldWidth_/2&&(F[1][0]-=this.sourceWorldWidth_),F[2][0]-j>this.sourceWorldWidth_/2&&(F[2][0]-=this.sourceWorldWidth_);let d=Math.min(F[0][0],F[1][0],F[2][0]);Math.max(F[0][0],F[1][0],F[2][0])-d<this.sourceWorldWidth_/2&&(N.source=F)}})}f={}}addTriangle_(e,t,i,r,o,l){this.triangles_.push({source:[r,o,l],target:[e,t,i]})}addQuad_(e,t,i,r,o,l,c,f,m){let y=pa([o,l,c,f]),x=this.sourceWorldWidth_?se(y)/this.sourceWorldWidth_:null,w=this.sourceWorldWidth_,T=this.sourceProj_.canWrapX()&&x>.5&&x<1,R=!1;if(m>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){let O=pa([e,t,i,r]);R=se(O)/this.targetWorldWidth_>sd||R}!T&&this.sourceProj_.isGlobal()&&x&&(R=x>sd||R)}if(!R&&this.maxSourceExtent_&&isFinite(y[0])&&isFinite(y[1])&&isFinite(y[2])&&isFinite(y[3])&&!Wt(y,this.maxSourceExtent_))return;let L=0;if(!R&&(!isFinite(o[0])||!isFinite(o[1])||!isFinite(l[0])||!isFinite(l[1])||!isFinite(c[0])||!isFinite(c[1])||!isFinite(f[0])||!isFinite(f[1]))){if(m>0)R=!0;else if(L=(!isFinite(o[0])||!isFinite(o[1])?8:0)+(!isFinite(l[0])||!isFinite(l[1])?4:0)+(!isFinite(c[0])||!isFinite(c[1])?2:0)+(!isFinite(f[0])||!isFinite(f[1])?1:0),L!=1&&L!=2&&L!=4&&L!=8)return}if(m>0){if(!R){let O=[(e[0]+i[0])/2,(e[1]+i[1])/2],P=this.transformInv_(O),z;T?z=(on(o[0],w)+on(c[0],w))/2-on(P[0],w):z=(o[0]+c[0])/2-P[0];let j=(o[1]+c[1])/2-P[1];R=z*z+j*j>this.errorThresholdSquared_}if(R){if(Math.abs(e[0]-i[0])<=Math.abs(e[1]-i[1])){let O=[(t[0]+i[0])/2,(t[1]+i[1])/2],P=this.transformInv_(O),z=[(r[0]+e[0])/2,(r[1]+e[1])/2],j=this.transformInv_(z);this.addQuad_(e,t,O,z,o,l,P,j,m-1),this.addQuad_(z,O,i,r,j,P,c,f,m-1)}else{let O=[(e[0]+t[0])/2,(e[1]+t[1])/2],P=this.transformInv_(O),z=[(i[0]+r[0])/2,(i[1]+r[1])/2],j=this.transformInv_(z);this.addQuad_(e,O,z,r,o,P,j,f,m-1),this.addQuad_(O,t,i,z,P,l,c,j,m-1)}return}}if(T){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(L&11)==0&&this.addTriangle_(e,i,r,o,c,f),(L&14)==0&&this.addTriangle_(e,i,t,o,c,l),L&&((L&13)==0&&this.addTriangle_(t,r,e,l,f,o),(L&7)==0&&this.addTriangle_(t,r,i,l,f,c))}calculateSourceExtent(){let e=vt();return this.triangles_.forEach(function(t,i,r){let o=t.source;wr(e,o[0]),wr(e,o[1]),wr(e,o[2])}),e}getTriangles(){return this.triangles_}},od=el});var tl,no,nl=S(()=>{Xs();Kt();Be();Ct();be();ve();ke();nd();ad();tl=class extends Di{constructor(e,t,i,r,o,l,c,f,m,y,x,w){super(o,W.IDLE,w),this.renderEdges_=x!==void 0?x:!1,this.pixelRatio_=c,this.gutter_=f,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=r,this.wrappedTileCoord_=l||o,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=e.canWrapX()?e.getExtent():void 0;let T=r.getTileCoordExtent(this.wrappedTileCoord_),R=this.targetTileGrid_.getExtent(),L=this.sourceTileGrid_.getExtent(),O=R?Xt(T,R):T;if(Cr(O)===0){this.state=W.EMPTY;return}let P=e.getExtent();P&&(L?L=Xt(L,P):L=P);let z=r.getResolution(this.wrappedTileCoord_[0]),j=ed(e,i,O,z);if(!isFinite(j)||j<=0){this.state=W.EMPTY;return}let N=y!==void 0?y:.5;if(this.triangulation_=new od(e,i,O,L,j*N,z),this.triangulation_.getTriangles().length===0){this.state=W.EMPTY;return}this.sourceZ_=t.getZForResolution(j);let F=this.triangulation_.calculateSourceExtent();if(L&&(e.canWrapX()?(F[1]=ge(F[1],L[1],L[3]),F[3]=ge(F[3],L[1],L[3])):F=Xt(F,L)),!Cr(F))this.state=W.EMPTY;else{let d=0,V=0;e.canWrapX()&&(d=se(P),V=Math.floor((F[0]-P[0])/d)),qh(F.slice(),e,!0).forEach(k=>{let U=t.getTileRangeForExtentAndZ(k,this.sourceZ_);for(let ne=U.minX;ne<=U.maxX;ne++)for(let fe=U.minY;fe<=U.maxY;fe++){let ie=V*d;this.sourceTiles_.push({getTile:()=>m(this.sourceZ_,ne,fe,c),offset:ie})}++V}),this.sourceTiles_.length===0&&(this.state=W.EMPTY)}}getImage(){return this.canvas_}reproject_(){let e=[];if(this.sourceTiles_.forEach(t=>{let i=t.tile;if(i&&i.getState()==W.LOADED){let r=this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);r[0]+=t.offset,r[2]+=t.offset;let o=this.clipExtent_?.slice();o&&(o[0]+=t.offset,o[2]+=t.offset),e.push({extent:r,clipExtent:o,image:i.getImage()})}}),this.sourceTiles_.length=0,e.length===0)this.state=W.ERROR;else{let t=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(t),r=typeof i=="number"?i:i[0],o=typeof i=="number"?i:i[1],l=this.targetTileGrid_.getResolution(t),c=this.sourceTileGrid_.getResolution(this.sourceZ_),f=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=td(r,o,this.pixelRatio_,c,this.sourceTileGrid_.getExtent(),l,f,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=W.LOADED}this.changed()}load(){for(let e of this.sourceTiles_)e.tile=e.getTile();if(this.state==W.IDLE){this.state=W.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:t})=>{let i=t.getState();if(i==W.IDLE||i==W.LOADING){e++;let r=Q(t,K.CHANGE,o=>{let l=t.getState();(l==W.LOADED||l==W.ERROR||l==W.EMPTY)&&(oe(r),e--,e===0&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(r)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:t},i,r){t.getState()==W.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(oe),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Lr(this.canvas_.getContext("2d")),oi.push(this.canvas_),this.canvas_=null),this.sourceTiles_.length=0,super.release()}},no=tl});function io(n){let e=n.getDefaultTileGrid();return e||(e=L_(n),n.setDefaultTileGrid(e)),e}function ld(n,e,t){let i=e[0],r=n.getTileCoordCenter(e),o=ud(t);if(!Ti(o,r)){let l=se(o),c=Math.ceil((o[0]-r[0])/l);return r[0]+=l*c,n.getTileCoordForCoordAndZ(r,i)}return e}function S_(n,e,t,i){i=i!==void 0?i:"top-left";let r=A_(n,e,t);return new js({extent:n,origin:Wh(n,i),resolutions:r,tileSize:t})}function A_(n,e,t,i){e=e!==void 0?e:42,t=we(t!==void 0?t:256);let r=Ne(n),o=se(n);i=i>0?i:Math.max(o/t[0],r/t[1]);let l=e+1,c=new Array(l);for(let f=0;f<l;++f)c[f]=i/Math.pow(2,f);return c}function L_(n,e,t,i){let r=ud(n);return S_(r,e,t,i)}function ud(n){n=qe(n);let e=n.getExtent();if(!e){let t=180*un.degrees/n.getMetersPerUnit();e=Rn(-t,-t,t,t)}return e}var il=S(()=>{ve();Ot();Mt();ba()});function cd(n,e,t,i,r){return n.replace(M_,e.toString()).replace(P_,t.toString()).replace(O_,i.toString()).replace(D_,function(){if(r===void 0)throw new Error("If the URL template has a {-y} placeholder, the grid extent must be known");return(r-i).toString()})}function hd(n){let e=[],t=/\{([a-z])-([a-z])\}/.exec(n);if(t){let i=t[1].charCodeAt(0),r=t[2].charCodeAt(0),o;for(o=i;o<=r;++o)e.push(n.replace(t[0],String.fromCharCode(o)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(n),t){let i=parseInt(t[2],10);for(let r=parseInt(t[1],10);r<=i;r++)e.push(n.replace(t[0],r.toString()));return e}return e.push(n),e}var M_,P_,O_,D_,rl=S(()=>{M_=/\{z\}/g,P_=/\{x\}/g,O_=/\{y\}/g,D_=/\{-y\}/g});function N_(n,e){return(function(t,i,r){if(!t)return;let o,l=t[0];if(e){let c=e.getFullTileRange(l);c&&(o=c.getHeight()-1)}return cd(n,l,t[1],t[2],o)})}function fd(n,e){let t=n.length,i=new Array(t);for(let r=0;r<t;++r)i[r]=N_(n[r],e);return F_(i)}function F_(n){return n.length===1?n[0]:(function(e,t,i){if(!e)return;let r=af(e),o=on(r,n.length);return n[o](e,t,i)})}var dd=S(()=>{ke();Mi();rl()});var gn,Or=S(()=>{gn={PROPERTYCHANGE:"propertychange"}});function k_(n){if(Array.isArray(n))for(let e=0,t=n.length;e<t;++e)oe(n[e]);else oe(n)}var Bi,ro,sl=S(()=>{Ct();be();Sr();Bi=class extends On{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(K.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){let i=e.length,r=new Array(i);for(let o=0;o<i;++o)r[o]=Q(this,e[o],t);return r}return Q(this,e,t)}onceInternal(e,t){let i;if(Array.isArray(e)){let r=e.length;i=new Array(r);for(let o=0;o<r;++o)i[o]=Oi(this,e[o],t)}else i=Oi(this,e,t);return t.ol_key=i,i}unInternal(e,t){let i=t.ol_key;if(i)k_(i);else if(Array.isArray(e))for(let r=0,o=e.length;r<o;++r)this.removeEventListener(e[r],t);else this.removeEventListener(e,t)}};Bi.prototype.on;Bi.prototype.once;Bi.prototype.un;ro=Bi});var so,ol,je,qt=S(()=>{Or();sl();ln();Jn();ze();so=class extends Ve{constructor(e,t,i){super(e),this.key=t,this.oldValue=i}},ol=class extends ro{constructor(e){super(),this.on,this.once,this.un,ye(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let i;i=`change:${e}`,this.hasListener(i)&&this.dispatchEvent(new so(i,e,t)),i=gn.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new so(i,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,i){let r=this.values_||(this.values_={});if(i)r[e]=t;else{let o=r[e];r[e]=t,o!==t&&this.notify(e,o)}}setProperties(e,t){for(let i in e)this.set(i,e[i],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){let i=this.values_[e];delete this.values_[e],Us(this.values_)&&(this.values_=null),t||this.notify(e,i)}}},je=ol});function gd(n){return n?typeof n=="function"?n:(Array.isArray(n)||(n=[n]),e=>n):null}var al,pd,md=S(()=>{qt();Ot();al=class extends je{constructor(e){super(),this.projection=qe(e.projection),this.attributions_=gd(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible??!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;let t=this;this.viewPromise_=new Promise(function(i,r){t.viewResolver=i,t.viewRejector=r})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}ready(){let e=this.getState();return e==="ready"?Promise.resolve():e==="error"?Promise.reject(new Error("Source failed to load")):new Promise((t,i)=>{let r=()=>{let o=this.getState();o==="ready"?(this.un("change",r),t()):o==="error"&&(this.un("change",r),i(new Error("Source failed to load")))};this.on("change",r)})}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=gd(e),this.changed()}setState(e){this.state_=e,this.changed()}};pd=al});var ll,oo,yd,_d=S(()=>{ln();Mt();Mi();il();ze();md();ll=class extends pd{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;let t=[256,256];this.tileGrid&&we(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),t),this.tmpSize=[0,0],this.key_=e.key||ye(this),this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getResolutions(e){let t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,i,r,o,l){return ee()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:io(e)}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,i){let r=this.getTileGridForProjection(i),o=this.getTilePixelRatio(t),l=we(r.getTileSize(e),this.tmpSize);return o==1?l:Zh(l,o,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){let i=t!==void 0?t:this.getProjection(),r=t!==void 0?this.getTileGridForProjection(i):this.tileGrid||this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(e=ld(r,e,i)),lf(e,r)?e:null}clear(){}refresh(){this.clear(),super.refresh()}},oo=class extends Ve{constructor(e,t){super(e),this.tile=t}},yd=ll});var ao,xd=S(()=>{ao={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"}});var ul,Ed,vd=S(()=>{Kt();dd();rl();ze();_d();xd();ul=class n extends yd{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===n.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){let t=e.target,i=ye(t),r=t.getState(),o;r==W.LOADING?(this.tileLoadingKeys_[i]=!0,o=ao.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],o=r==W.ERROR?ao.TILELOADERROR:r==W.LOADED?ao.TILELOADEND:void 0),o!=null&&this.dispatchEvent(new oo(o,t))}setTileLoadFunction(e){this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){let t=hd(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;let t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(fd(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,i){}},Ed=ul});function z_(n,e){if(Ke){let t=n.getCrossOrigin(),i="same-origin",r="same-origin";t==="anonymous"||t===""?(i="cors",r="omit"):t==="use-credentials"&&(i="cors",r="include");let o={mode:i,credentials:r,referrerPolicy:n.getReferrerPolicy()};fetch(e,o).then(l=>{if(!l.ok)throw new Error(`HTTP ${l.status}`);return l.blob()}).then(l=>createImageBitmap(l)).then(l=>{let c=n.getImage();c.width=l.width,c.height=l.height,c.getContext("2d").drawImage(l,0,0),l.close?.(),c.dispatchEvent(new Event("load"))}).catch(()=>{n.getImage().dispatchEvent(new Event("error"))});return}n.getImage().src=e}var cl,wd,Cd=S(()=>{Vs();Kt();be();Vt();Ot();nl();Mi();il();ze();vd();cl=class extends Ed{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:z_,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.referrerPolicy=e.referrerPolicy,this.tileClass=e.tileClass!==void 0?e.tileClass:Fi,this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(e){return this.getProjection()&&e&&!Vi(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getTileGridForProjection(e){let t=this.getProjection();if(this.tileGrid&&(!t||Vi(t,e)))return this.tileGrid;let i=ye(e);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=io(e)),this.tileGridForProjection[i]}createTile_(e,t,i,r,o,l){let c=[e,t,i],f=this.getTileCoordForTileUrlFunction(c,o),m=f?this.tileUrlFunction(f,r,o):void 0,y=new this.tileClass(c,m!==void 0?W.IDLE:W.EMPTY,m!==void 0?m:"",{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return y.key=l,y.addEventListener(K.CHANGE,this.handleTileChange.bind(this)),y}getTile(e,t,i,r,o,l){let c=this.getProjection();if(!c||!o||Vi(c,o))return this.getTileInternal(e,t,i,r,c||o);let f=[e,t,i],m=this.getKey(),y=this.getTileGridForProjection(c),x=this.getTileGridForProjection(o),w=this.getTileCoordForTileUrlFunction(f,o),T=new no(c,y,o,x,f,w,this.getTilePixelRatio(r),this.getGutter(),(R,L,O,P)=>this.getTileInternal(R,L,O,P,c,l),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return T.key=m,T}getTileInternal(e,t,i,r,o,l){let c=this.getKey(),f=Li(this,c,e,t,i);if(l&&l.containsKey(f))return l.get(f);let m=this.createTile_(e,t,i,r,o,c);return l?.set(f,m),m}setRenderReprojectionEdges(e){this.renderReprojectionEdges_!=e&&(this.renderReprojectionEdges_=e,this.changed())}setTileGridForProjection(e,t){let i=qe(e);if(i){let r=ye(i);r in this.tileGridForProjection||(this.tileGridForProjection[r]=t)}}};wd=cl});var lo,Td=S(()=>{Vs();Kt();Be();lo=class extends Fi{constructor(e,t,i,r,o,l,c){super(t,i,r,o,l,c),this.zoomifyImage_=null,this.tileSize_=e}getImage(){if(this.zoomifyImage_)return this.zoomifyImage_;let e=super.getImage();if(this.state==W.LOADED){let t=this.tileSize_;if(e.width==t[0]&&e.height==t[1])return this.zoomifyImage_=e,e;let i=Ce(t[0],t[1]);return i.drawImage(e,0,0),this.zoomifyImage_=i.canvas,i.canvas}return e}}});function Dr(n){return n.toLocaleString("en",{maximumFractionDigits:10})}var hl,fl,Rd=S(()=>{lt();ve();va();Mt();ba();Cd();Td();hl=class extends wd{constructor(e){let t=e||{},i=t.url||"";i=i+(i.lastIndexOf("/")===i.length-1||i===""?"":"/");let r=t.version||Le.VERSION2,o=t.sizes||[],l=t.size;J(l!=null&&Array.isArray(l)&&l.length==2&&!isNaN(l[0])&&l[0]>0&&!isNaN(l[1])&&l[1]>0,"Missing or invalid `size`");let c=l[0],f=l[1],m=t.tileSize,y=t.tilePixelRatio||1,x=t.format||"jpg",w=t.quality||(t.version==Le.VERSION1?"native":"default"),T=t.resolutions||[],R=t.supports||[],L=t.extent||[0,-f,c,0],O=o!=null&&Array.isArray(o)&&o.length>0,P=m!==void 0&&(typeof m=="number"&&Number.isInteger(m)&&m>0||Array.isArray(m)&&m.length>0),z=R!=null&&Array.isArray(R)&&(R.includes("regionByPx")||R.includes("regionByPct"))&&(R.includes("sizeByWh")||R.includes("sizeByH")||R.includes("sizeByW")||R.includes("sizeByPct")),j,N,F;if(T.sort(function(k,U){return U-k}),P||z)if(m!=null&&(typeof m=="number"&&Number.isInteger(m)&&m>0?(j=m,N=m):Array.isArray(m)&&m.length>0&&((m.length==1||m[1]==null&&Number.isInteger(m[0]))&&(j=m[0],N=m[0]),m.length==2&&(Number.isInteger(m[0])&&Number.isInteger(m[1])?(j=m[0],N=m[1]):m[0]==null&&Number.isInteger(m[1])&&(j=m[1],N=m[1])))),(j===void 0||N===void 0)&&(j=256,N=256),T.length==0){F=Math.max(Math.ceil(Math.log(c/j)/Math.LN2),Math.ceil(Math.log(f/N)/Math.LN2));for(let k=F;k>=0;k--)T.push(Math.pow(2,k))}else{let k=Math.max(...T);F=Math.round(Math.log(k)/Math.LN2)}else if(j=c,N=f,T=[],O){o.sort(function(U,ne){return U[0]-ne[0]}),F=-1;let k=[];for(let U=0;U<o.length;U++){let ne=c/o[U][0];if(T.length>0&&T[T.length-1]==ne){k.push(U);continue}T.push(ne),F++}if(k.length>0)for(let U=0;U<k.length;U++)o.splice(k[U]-U,1)}else T.push(1),o.push([c,f]),F=0;let d=new js({tileSize:[j,N],extent:L,origin:ut(L),resolutions:T}),V=function(k,U,ne){let fe,ie,Oe=k[0];if(Oe>F)return;let Ue=k[1],le=k[2],q=T[Oe];if(!(Ue===void 0||le===void 0||q===void 0||Ue<0||Math.ceil(c/q/j)<=Ue||le<0||Math.ceil(f/q/N)<=le)){if(z||P){let ue=Ue*j*q,me=le*N*q,Re=j*q,Se=N*q,Ae=j,De=N;if(ue+Re>c&&(Re=c-ue),me+Se>f&&(Se=f-me),ue+j*q>c&&(Ae=Math.floor((c-ue+q-1)/q)),me+N*q>f&&(De=Math.floor((f-me+q-1)/q)),ue==0&&Re==c&&me==0&&Se==f)fe="full";else if(!z||R.includes("regionByPx"))fe=ue+","+me+","+Re+","+Se;else if(R.includes("regionByPct")){let xn=Dr(ue/c*100),nt=Dr(me/f*100),_t=Dr(Re/c*100),de=Dr(Se/f*100);fe="pct:"+xn+","+nt+","+_t+","+de}r==Le.VERSION3&&(!z||R.includes("sizeByWh"))?ie=Ae+","+De:!z||R.includes("sizeByW")?ie=Ae+",":R.includes("sizeByH")?ie=","+De:R.includes("sizeByWh")?ie=Ae+","+De:R.includes("sizeByPct")&&(ie="pct:"+Dr(100/q))}else if(fe="full",O){let ue=o[Oe][0],me=o[Oe][1];r==Le.VERSION3?ue==c&&me==f?ie="max":ie=ue+","+me:ue==c?ie="full":ie=ue+","}else ie=r==Le.VERSION3?"max":"full";return i+fe+"/"+ie+"/0/"+w+"."+x}},X=lo.bind(null,we(m||256).map(function(k){return k*y}));super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:X,tileGrid:d,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:V,transition:t.transition}),this.zDirection=t.zDirection}},fl=hl});var Qe,uo=S(()=>{Qe={ADD:"add",REMOVE:"remove"}});var bd,qi,dl,Je,Nr=S(()=>{uo();qt();ln();bd={LENGTH:"length"},qi=class extends Ve{constructor(e,t,i){super(e),this.element=t,this.index=i}},dl=class extends je{constructor(e,t){if(super(),this.on,this.once,this.un,t=t||{},this.unique_=!!t.unique,this.array_=e??[],this.unique_)for(let i=1,r=this.array_.length;i<r;++i)this.assertUnique_(this.array_[i],i);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,i=e.length;t<i;++t)this.push(e[t]);return this}forEach(e){let t=this.array_;for(let i=0,r=t.length;i<r;++i)e(t[i],i,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(bd.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new qi(Qe.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){let t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){let t=this.array_;for(let i=0,r=t.length;i<r;++i)if(t[i]===e)return this.removeAt(i)}removeAt(e){if(e<0||e>=this.getLength())return;let t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new qi(Qe.REMOVE,t,e)),t}setAt(e,t){let i=this.getLength();if(e>=i){this.insertAt(e,t);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t,e);let r=this.array_[e];this.array_[e]=t,this.dispatchEvent(new qi(Qe.REMOVE,r,e)),this.dispatchEvent(new qi(Qe.ADD,t,e))}updateLength_(){this.set(bd.LENGTH,this.array_.length)}assertUnique_(e,t){let i=this.array_;for(let r=0,o=i.length;r<o;++r)if(i[r]===e&&r!==t)throw new Error("Duplicate item added to a unique collection")}},Je=dl});var gl,kn,pl=S(()=>{ln();gl=class extends Ve{constructor(e,t,i){super(e),this.map=t,this.frameState=i!==void 0?i:null}},kn=gl});var ml,Ht,yl=S(()=>{pl();ml=class extends kn{constructor(e,t,i,r,o,l){super(e,t,o),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0?r:!1,this.activePointers=l}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}},Ht=ml});var _e,Fr=S(()=>{be();_e={SINGLECLICK:"singleclick",CLICK:K.CLICK,DBLCLICK:K.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}});var kr,_l=S(()=>{kr={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}});var xl,Id,Sd=S(()=>{yl();Fr();Ct();be();Sr();Vt();_l();xl=class extends On{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;let i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=Q(i,kr.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=Q(i,kr.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(K.TOUCHMOVE,this.boundHandleTouchMove_,Gs?{passive:!1}:!1)}emulateClick_(e){let t=new Ht(_e.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new Ht(_e.DBLCLICK,this.map_,e),this.dispatchEvent(t)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;let i=new Ht(_e.SINGLECLICK,this.map_,e);this.dispatchEvent(i)},250)}updateActivePointers_(e){let t=e,i=t.pointerId;if(t.type==_e.POINTERUP||t.type==_e.POINTERCANCEL){delete this.trackedTouches_[i];for(let r in this.trackedTouches_)if(this.trackedTouches_[r].target!==t.target){delete this.trackedTouches_[r];break}}else(t.type==_e.POINTERDOWN||t.type==_e.POINTERMOVE)&&(this.trackedTouches_[i]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);let t=new Ht(_e.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(oe),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);let t=new Ht(_e.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){let i=this.map_.getOwnerDocument();this.dragListenerKeys_.push(Q(i,_e.POINTERMOVE,this.handlePointerMove_,this),Q(i,_e.POINTERUP,this.handlePointerUp_,this),Q(this.element_,_e.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==i&&this.dragListenerKeys_.push(Q(this.element_.getRootNode(),_e.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;let t=new Ht(_e.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;let t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Ht(_e.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){let t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(oe(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(K.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(oe(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(oe),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}},Id=xl});var Yt,El=S(()=>{Yt={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"}});var Pe,vl=S(()=>{Pe={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"}});var zr,wl,Ad,Ld=S(()=>{lt();Jn();zr=1/0,wl=class{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Mn(this.queuedElements_)}dequeue(){let e=this.elements_,t=this.priorities_,i=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));let r=this.keyFunction_(i);return delete this.queuedElements_[r],i}enqueue(e){J(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");let t=this.priorityFunction_(e);return t!=zr?(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){let t=this.elements_,i=this.priorities_,r=t.length,o=t[e],l=i[e],c=e;for(;e<r>>1;){let f=this.getLeftChildIndex_(e),m=this.getRightChildIndex_(e),y=m<r&&i[m]<i[f]?m:f;t[e]=t[y],i[e]=i[y],e=y}t[e]=o,i[e]=l,this.siftDown_(c,e)}siftDown_(e,t){let i=this.elements_,r=this.priorities_,o=i[t],l=r[t];for(;t>e;){let c=this.getParentIndex_(t);if(r[c]>l)i[t]=i[c],r[t]=r[c],t=c;else break}i[t]=o,r[t]=l}reprioritize(){let e=this.priorityFunction_,t=this.elements_,i=this.priorities_,r=0,o=t.length,l,c,f;for(c=0;c<o;++c)l=t[c],f=e(l),f==zr?delete this.queuedElements_[this.keyFunction_(l)]:(i[r]=f,t[r++]=l);t.length=r,i.length=r,this.heapify_()}},Ad=wl});function Pd(n,e,t,i,r){if(!n||!(t in n.wantedTiles))return zr;if(!n.wantedTiles[t][e.getKey()])return zr;let o=n.viewState.center,l=i[0]-o[0],c=i[1]-o[1];return 65536*Math.log(r)+Math.sqrt(l*l+c*c)/r}var Cl,Md,Od=S(()=>{Kt();be();Ld();Cl=class extends Ad{constructor(e,t){super(i=>e.apply(null,i),i=>i[0].getKey()),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){let t=super.enqueue(e);return t&&e[0].addEventListener(K.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){let t=e.target,i=t.getState();if(i===W.LOADED||i===W.ERROR||i===W.EMPTY){i!==W.ERROR&&t.removeEventListener(K.CHANGE,this.boundHandleTileChange_);let r=t.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let i=0;for(;this.tilesLoading_<e&&i<t&&this.getCount()>0;){let r=this.dequeue()[0],o=r.getKey();r.getState()===W.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++i,r.load())}}},Md=Cl});var ct,Tl=S(()=>{ct={ANIMATING:0,INTERACTING:1}});var bt,Dd=S(()=>{bt={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"}});function Rl(n,e,t){return(function(i,r,o,l,c){if(!i)return;if(!r&&!e)return i;let f=e?0:o[0]*r,m=e?0:o[1]*r,y=c?c[0]:0,x=c?c[1]:0,w=n[0]+f/2+y,T=n[2]-f/2+y,R=n[1]+m/2+x,L=n[3]-m/2+x;w>T&&(w=(T+w)/2,T=w),R>L&&(R=(L+R)/2,L=R);let O=ge(i[0],w,T),P=ge(i[1],R,L);if(l&&t&&r){let z=30*r;O+=-z*Math.log(1+Math.max(0,w-i[0])/z)+z*Math.log(1+Math.max(0,i[0]-T)/z),P+=-z*Math.log(1+Math.max(0,R-i[1])/z)+z*Math.log(1+Math.max(0,i[1]-L)/z)}return[O,P]})}function Nd(n){return n}var Fd=S(()=>{ke()});function bl(n,e,t,i,r,o,l){o=o||[],l=l||2;let c=0;for(let f=e;f<t;f+=i){let m=n[f],y=n[f+1];o[c++]=r[0]*m+r[2]*y+r[4],o[c++]=r[1]*m+r[3]*y+r[5];for(let x=2;x<l;x++)o[c++]=n[f+x]}return o&&o.length!=c&&(o.length=c),o}function kd(n,e,t,i,r,o,l){l=l||[];let c=Math.cos(r),f=Math.sin(r),m=o[0],y=o[1],x=0;for(let w=e;w<t;w+=i){let T=n[w]-m,R=n[w+1]-y;l[x++]=m+T*c-R*f,l[x++]=y+T*f+R*c;for(let L=w+2;L<w+i;++L)l[x++]=n[L]}return l&&l.length!=x&&(l.length=x),l}function zd(n,e,t,i,r,o,l,c){c=c||[];let f=l[0],m=l[1],y=0;for(let x=e;x<t;x+=i){let w=n[x]-f,T=n[x+1]-m;c[y++]=f+r*w,c[y++]=m+o*T;for(let R=x+2;R<x+i;++R)c[y++]=n[R]}return c&&c.length!=y&&(c.length=y),c}function jd(n,e,t,i,r,o,l){l=l||[];let c=0;for(let f=e;f<t;f+=i){l[c++]=n[f]+r,l[c++]=n[f+1]+o;for(let m=f+2;m<f+i;++m)l[c++]=n[m]}return l&&l.length!=c&&(l.length=c),l}var Il=S(()=>{});var Ud,j_,Sl,Gd,Xd=S(()=>{qt();ve();gt();Ot();Fn();ze();Il();Ud=fn(),j_=[NaN,NaN],Sl=class extends je{constructor(){super(),this.extent_=vt(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=uf((e,t,i)=>{if(!i)return this.getSimplifiedGeometry(t);let r=this.clone();return r.applyTransform(i),r.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return ee()}closestPointXY(e,t,i,r){return ee()}containsXY(e,t){return this.closestPointXY(e,t,j_,Number.MIN_VALUE)===0}getClosestPoint(e,t){return t=t||[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return ee()}getExtent(e){if(this.extentRevision_!=this.getRevision()){let t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&Yn(t),this.extentRevision_=this.getRevision()}return Vh(this.extent_,e)}rotate(e,t){ee()}scale(e,t,i){ee()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return ee()}getType(){return ee()}applyTransform(e){ee()}intersectsExtent(e){return ee()}translate(e,t){ee()}transform(e,t){let i=qe(e),r=i.getUnits()=="tile-pixels"?function(o,l,c){let f=i.getExtent(),m=i.getWorldExtent(),y=Ne(m)/Ne(f);dn(Ud,m[0],m[3],y,-y,0,0,0);let x=bl(o,0,o.length,c,Ud,l),w=si(i,t);return w?w(x,x,c):x}:si(i,t);return this.applyTransform(r),this}},Gd=Sl});function U_(n){let e;return n==2?e="XY":n==3?e="XYZ":n==4&&(e="XYZM"),e}function Wd(n){let e;return n=="XY"?e=2:n=="XYZ"||n=="XYM"?e=3:n=="XYZM"&&(e=4),e}var Al,Hi,co=S(()=>{ve();ze();Xd();Il();Al=class extends Gd{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(e){return Gh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return ee()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;let t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=Wd(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){ee()}setLayout(e,t,i){let r;if(e)r=Wd(e);else{for(let o=0;o<i;++o){if(t.length===0){this.layout="XY",this.stride=2;return}t=t[0]}r=t.length,e=U_(r)}this.layout=e,this.stride=r}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.layout.startsWith("XYZ")?3:2,this.stride),this.changed())}rotate(e,t){let i=this.getFlatCoordinates();if(i){let r=this.getStride();kd(i,0,i.length,r,e,t,i),this.changed()}}scale(e,t,i){t===void 0&&(t=e),i||(i=Gt(this.getExtent()));let r=this.getFlatCoordinates();if(r){let o=this.getStride();zd(r,0,r.length,o,e,t,i,r),this.changed()}}translate(e,t){let i=this.getFlatCoordinates();if(i){let r=this.getStride();jd(i,0,i.length,r,e,t,i),this.changed()}}};Hi=Al});function Ll(n,e,t,i){let r=0,o=n[t-i],l=n[t-i+1],c=0,f=0;for(;e<t;e+=i){let m=n[e]-o,y=n[e+1]-l;r+=f*m-c*y,c=m,f=y}return r/2}function Vd(n,e,t,i){let r=0;for(let o=0,l=t.length;o<l;++o){let c=t[o];r+=Ll(n,e,c,i),e=c}return r}var Ml=S(()=>{});function Kd(n,e,t,i,r,o,l){let c=n[e],f=n[e+1],m=n[t]-c,y=n[t+1]-f,x;if(m===0&&y===0)x=e;else{let w=((r-c)*m+(o-f)*y)/(m*m+y*y);if(w>1)x=t;else if(w>0){for(let T=0;T<i;++T)l[T]=of(n[e+T],n[t+T],w);l.length=i;return}else x=e}for(let w=0;w<i;++w)l[w]=n[x+w];l.length=i}function Pl(n,e,t,i,r){let o=n[e],l=n[e+1];for(e+=i;e<t;e+=i){let c=n[e],f=n[e+1],m=sn(o,l,c,f);m>r&&(r=m),o=c,l=f}return r}function Bd(n,e,t,i,r){for(let o=0,l=t.length;o<l;++o){let c=t[o];r=Pl(n,e,c,i,r),e=c}return r}function Ol(n,e,t,i,r,o,l,c,f,m,y){if(e==t)return m;let x,w;if(r===0){if(w=sn(l,c,n[e],n[e+1]),w<m){for(x=0;x<i;++x)f[x]=n[e+x];return f.length=i,w}return m}y=y||[NaN,NaN];let T=e+i;for(;T<t;)if(Kd(n,T-i,T,i,l,c,y),w=sn(l,c,y[0],y[1]),w<m){for(m=w,x=0;x<i;++x)f[x]=y[x];f.length=i,T+=i}else T+=i*Math.max((Math.sqrt(w)-Math.sqrt(m))/r|0,1);if(o&&(Kd(n,t-i,e,i,l,c,y),w=sn(l,c,y[0],y[1]),w<m)){for(m=w,x=0;x<i;++x)f[x]=y[x];f.length=i}return m}function qd(n,e,t,i,r,o,l,c,f,m,y){y=y||[NaN,NaN];for(let x=0,w=t.length;x<w;++x){let T=t[x];m=Ol(n,e,T,i,r,o,l,c,f,m,y),e=T}return m}var Dl=S(()=>{ke()});function Hd(n,e,t,i){for(let r=0,o=t.length;r<o;++r)n[e++]=t[r];return e}function Nl(n,e,t,i){for(let r=0,o=t.length;r<o;++r){let l=t[r];for(let c=0;c<i;++c)n[e++]=l[c]}return e}function Yd(n,e,t,i,r){r=r||[];let o=0;for(let l=0,c=t.length;l<c;++l){let f=Nl(n,e,t[l],i);r[o++]=f,e=f}return r.length=o,r}var ho=S(()=>{});function Fl(n,e,t,i,r){r=r!==void 0?r:[];let o=0;for(let l=e;l<t;l+=i)r[o++]=n.slice(l,l+i);return r.length=o,r}function Zd(n,e,t,i,r){r=r!==void 0?r:[];let o=0;for(let l=0,c=t.length;l<c;++l){let f=t[l];r[o++]=Fl(n,e,f,i,r[o]),e=f}return r.length=o,r}var kl=S(()=>{});function $d(n,e,t,i,r,o,l){let c=(t-e)/i;if(c<3){for(;e<t;e+=i)o[l++]=n[e],o[l++]=n[e+1];return l}let f=new Array(c);f[0]=1,f[c-1]=1;let m=[e,t-i],y=0;for(;m.length>0;){let x=m.pop(),w=m.pop(),T=0,R=n[w],L=n[w+1],O=n[x],P=n[x+1];for(let z=w+i;z<x;z+=i){let j=n[z],N=n[z+1],F=rf(j,N,R,L,O,P);F>T&&(y=z,T=F)}T>r&&(f[(y-e)/i]=1,w+i<y&&m.push(w,y),y+i<x&&m.push(y,x))}for(let x=0;x<c;++x)f[x]&&(o[l++]=n[e+x*i],o[l++]=n[e+x*i+1]);return l}function Yi(n,e){return e*Math.round(n/e)}function G_(n,e,t,i,r,o,l){if(e==t)return l;let c=Yi(n[e],r),f=Yi(n[e+1],r);e+=i,o[l++]=c,o[l++]=f;let m,y;do if(m=Yi(n[e],r),y=Yi(n[e+1],r),e+=i,e==t)return o[l++]=m,o[l++]=y,l;while(m==c&&y==f);for(;e<t;){let x=Yi(n[e],r),w=Yi(n[e+1],r);if(e+=i,x==m&&w==y)continue;let T=m-c,R=y-f,L=x-c,O=w-f;if(T*O==R*L&&(T<0&&L<T||T==L||T>0&&L>T)&&(R<0&&O<R||R==O||R>0&&O>R)){m=x,y=w;continue}o[l++]=m,o[l++]=y,c=m,f=y,m=x,y=w}return o[l++]=m,o[l++]=y,l}function Qd(n,e,t,i,r,o,l,c){for(let f=0,m=t.length;f<m;++f){let y=t[f];l=G_(n,e,y,i,r,o,l),c.push(l),e=y}return l}var zl=S(()=>{ke()});var jl,Ul,Jd=S(()=>{ve();co();Ml();Dl();ho();kl();Ds();zl();jl=class n extends Hi{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new n(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,i,r){return r<bs(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Pl(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ol(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,i,r))}getArea(){return Ll(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return Fl(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){let t=[];return t.length=$d(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new n(t,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return Os(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Nl(this.flatCoordinates,0,e,this.stride),this.changed()}},Ul=jl});var Gl,eg,tg=S(()=>{ve();ke();co();ho();Gl=class n extends Hi{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){let e=new n(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,i,r){let o=this.flatCoordinates,l=sn(e,t,o[0],o[1]);if(l<r){let c=this.stride;for(let f=0;f<c;++f)i[f]=o[f];return i.length=c,l}return r}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return Uh(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return ma(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Hd(this.flatCoordinates,0,e,this.stride),this.changed()}},eg=Gl});function ng(n,e,t,i,r,o,l){let c,f,m,y,x,w,T,R=r[o+1],L=[];for(let z=0,j=t.length;z<j;++z){let N=t[z];for(y=n[N-i],w=n[N-i+1],c=e;c<N;c+=i)x=n[c],T=n[c+1],(R<=w&&T<=R||w<=R&&R<=T)&&(m=(R-w)/(T-w)*(x-y)+y,L.push(m)),y=x,w=T}let O=NaN,P=-1/0;for(L.sort(Qn),y=L[0],c=1,f=L.length;c<f;++c){x=L[c];let z=Math.abs(x-y);z>P&&(m=(y+x)/2,Ms(n,e,t,i,m,R)&&(O=m,P=z)),y=x}return isNaN(O)&&(O=r[o]),l?(l.push(O,R,P),l):[O,R,P]}var ig=S(()=>{wt();Ps()});function rg(n,e,t,i){for(;e<t-i;){for(let r=0;r<i;++r){let o=n[e+r];n[e+r]=n[t-i+r],n[t-i+r]=o}e+=i,t-=i}}var sg=S(()=>{});function og(n,e,t,i){let r=0,o=n[t-i],l=n[t-i+1];for(;e<t;e+=i){let c=n[e],f=n[e+1];r+=(c-o)*(f+l),o=c,l=f}return r===0?void 0:r>0}function ag(n,e,t,i,r){r=r!==void 0?r:!1;for(let o=0,l=t.length;o<l;++o){let c=t[o],f=og(n,e,c,i);if(o===0){if(r&&f||!r&&!f)return!1}else if(r&&!f||!r&&f)return!1;e=c}return!0}function Xl(n,e,t,i,r){r=r!==void 0?r:!1;for(let o=0,l=t.length;o<l;++o){let c=t[o],f=og(n,e,c,i);(o===0?r&&f||!r&&!f:r&&!f||!r&&f)&&rg(n,e,c,i),e=c}return e}var lg=S(()=>{sg()});function Wl(n){if(bn(n))throw new Error("Cannot create polygon from empty extent");let e=n[0],t=n[1],i=n[2],r=n[3],o=[e,t,e,r,i,r,i,t,e,t];return new fo(o,"XY",[o.length])}var fo,ug,Vl=S(()=>{wt();ve();Jd();tg();co();Ml();Dl();Ps();ho();kl();ig();Ds();lg();zl();fo=class n extends Hi{constructor(e,t,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&i?(this.setFlatCoordinates(t,e),this.ends_=i):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?$h(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let e=new n(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,i,r){return r<bs(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Bd(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),qd(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,i,r))}containsXY(e,t){return Ms(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return Vd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),Xl(t,0,this.ends_,this.stride,e)):t=this.flatCoordinates,Zd(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){let e=Gt(this.getExtent());this.flatInteriorPoint_=ng(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new eg(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new Ul(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){let e=this.layout,t=this.flatCoordinates,i=this.ends_,r=[],o=0;for(let l=0,c=i.length;l<c;++l){let f=i[l],m=new Ul(t.slice(o,f),e);r.push(m),o=f}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let e=this.flatCoordinates;ag(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Xl(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){let t=[],i=[];return t.length=Qd(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),t,0,i),new n(t,"XY",i)}getType(){return"Polygon"}intersectsExtent(e){return nf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);let i=Yd(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}},ug=fo});function Kl(n,e,t,i){let r=se(e)/t[0],o=Ne(e)/t[1];return i?Math.min(n,Math.max(r,o)):Math.min(n,Math.min(r,o))}function Bl(n,e,t){let i=Math.min(n,e),r=50;return i*=Math.log(1+r*Math.max(0,n/e-1))/r+1,t&&(i=Math.max(i,t),i/=Math.log(1+r*Math.max(0,t/n-1))/r+1),ge(i,t/2,e*2)}function cg(n,e,t,i){return e=e!==void 0?e:!0,(function(r,o,l,c){if(r!==void 0){let f=n[0],m=n[n.length-1],y=t?Kl(f,t,l,i):f;if(c)return e?Bl(r,y,m):ge(r,m,y);let x=Math.min(y,r),w=Math.floor(Si(n,x,o));return n[w]>y&&w<n.length-1?n[w+1]:n[w]}})}function hg(n,e,t,i,r,o){return i=i!==void 0?i:!0,t=t!==void 0?t:0,(function(l,c,f,m){if(l!==void 0){let y=r?Kl(e,r,f,o):e;if(m)return i?Bl(l,y,t):ge(l,t,y);let x=1e-9,w=Math.ceil(Math.log(e/y)/Math.log(n)-x),T=-c*(.5-x)+.5,R=Math.min(y,l),L=Math.floor(Math.log(e/R)/Math.log(n)+T),O=Math.max(w,L),P=e/Math.pow(n,O);return ge(P,t,y)}})}function ql(n,e,t,i,r){return t=t!==void 0?t:!0,(function(o,l,c,f){if(o!==void 0){let m=i?Kl(n,i,c,r):n;return!t||!f?ge(o,e,m):Bl(o,m,e)}})}var fg=S(()=>{wt();ve();ke()});function Zi(n){if(n!==void 0)return 0}function Hl(n){if(n!==void 0)return n}function dg(n){let e=2*Math.PI/n;return(function(t,i){if(i)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t})}function gg(n){let e=n===void 0?Pt(5):n;return(function(t,i){return i||t===void 0?t:Math.abs(t)<=e?0:t})}var go=S(()=>{ke()});function po(n,e){setTimeout(function(){n(e)},0)}function X_(n){if(n.extent!==void 0){let t=n.smoothExtentConstraint!==void 0?n.smoothExtentConstraint:!0;return Rl(n.extent,n.constrainOnlyCenter,t)}let e=Js(n.projection,"EPSG:3857");if(n.multiWorld!==!0&&e.isGlobal()){let t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,Rl(t,!1,!1)}return Nd}function W_(n){let e,t,i,l=n.minZoom!==void 0?n.minZoom:Yl,c=n.maxZoom!==void 0?n.maxZoom:28,f=n.zoomFactor!==void 0?n.zoomFactor:2,m=n.multiWorld!==void 0?n.multiWorld:!1,y=n.smoothResolutionConstraint!==void 0?n.smoothResolutionConstraint:!0,x=n.showFullExtent!==void 0?n.showFullExtent:!1,w=Js(n.projection,"EPSG:3857"),T=w.getExtent(),R=n.constrainOnlyCenter,L=n.extent;if(!m&&!L&&w.isGlobal()&&(R=!1,L=T),n.resolutions!==void 0){let O=n.resolutions;t=O[l],i=O[c]!==void 0?O[c]:O[O.length-1],n.constrainResolution?e=cg(O,y,!R&&L,x):e=ql(t,i,y,!R&&L,x)}else{let P=(T?Math.max(se(T),Ne(T)):360*un.degrees/w.getMetersPerUnit())/256/Math.pow(2,Yl),z=P/Math.pow(2,28-Yl);t=n.maxResolution,t!==void 0?l=0:t=P/Math.pow(f,l),i=n.minResolution,i===void 0&&(n.maxZoom!==void 0?n.maxResolution!==void 0?i=t/Math.pow(f,c):i=P/Math.pow(f,c):i=z),c=l+Math.floor(Math.log(t/i)/Math.log(f)),i=t/Math.pow(f,c-l),n.constrainResolution?e=hg(f,t,i,y,!R&&L,x):e=ql(t,i,y,!R&&L,x)}return{constraint:e,maxResolution:t,minResolution:i,minZoom:l,zoomFactor:f}}function V_(n){if(n.enableRotation!==void 0?n.enableRotation:!0){let t=n.constrainRotation;return t===void 0||t===!0?gg():t===!1?Hl:typeof t=="number"?dg(t):Hl}return Zi}function K_(n){return!(n.sourceCenter&&n.targetCenter&&!ii(n.sourceCenter,n.targetCenter)||n.sourceResolution!==n.targetResolution||n.sourceRotation!==n.targetRotation)}function Zl(n,e,t,i,r){let o=Math.cos(-r),l=Math.sin(-r),c=n[0]*o-n[1]*l,f=n[1]*o+n[0]*l;c+=(e[0]/2-t[0])*i,f+=(t[1]-e[1]/2)*i,l=-l;let m=c*o-f*l,y=f*o+c*l;return[m,y]}var Yl,$l,ht,mo=S(()=>{qt();Tl();Dd();wt();lt();Fd();zi();Dn();ve();gt();Vl();ke();Ot();fg();go();Yl=0,$l=class extends je{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Js(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&qf(),e.center&&(e.center=mt(e.center,this.projection_)),e.extent&&(e.extent=Bt(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){let t=Object.assign({},e);for(let c in bt)delete t[c];this.setProperties(t,!0);let i=W_(e);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=i.minZoom;let r=X_(e),o=i.constraint,l=V_(e);this.constraints_={center:r,resolution:o,rotation:l},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;let i=this.getCenterInternal();if(i){let r=e||[0,0,0,0];t=t||[0,0,0,0];let o=this.getResolution(),l=o/2*(r[3]-t[3]+t[1]-r[1]),c=o/2*(r[0]-t[0]+t[2]-r[2]);this.setCenterInternal([i[0]+l,i[1]-c])}}getUpdatedOptions_(e){let t=this.getProperties();return t.resolution!==void 0?t.resolution=this.getResolution():t.zoom=this.getZoom(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);let t=new Array(arguments.length);for(let i=0;i<t.length;++i){let r=arguments[i];r.center&&(r=Object.assign({},r),r.center=mt(r.center,this.getProjection())),r.anchor&&(r=Object.assign({},r),r.anchor=mt(r.anchor,this.getProjection())),t[i]=r}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,i;t>1&&typeof arguments[t-1]=="function"&&(i=arguments[t-1],--t);let r=0;for(;r<t&&!this.isDef();++r){let y=arguments[r];y.center&&this.setCenterInternal(y.center),y.zoom!==void 0?this.setZoom(y.zoom):y.resolution&&this.setResolution(y.resolution),y.rotation!==void 0&&this.setRotation(y.rotation)}if(r===t){i&&po(i,!0);return}let o=Date.now(),l=this.targetCenter_.slice(),c=this.targetResolution_,f=this.targetRotation_,m=[];for(;r<t;++r){let y=arguments[r],x={start:o,complete:!1,anchor:y.anchor,duration:y.duration!==void 0?y.duration:1e3,easing:y.easing||pf,callback:i};if(y.center&&(x.sourceCenter=l,x.targetCenter=y.center.slice(),l=x.targetCenter),y.zoom!==void 0?(x.sourceResolution=c,x.targetResolution=this.getResolutionForZoom(y.zoom),c=x.targetResolution):y.resolution&&(x.sourceResolution=c,x.targetResolution=y.resolution,c=x.targetResolution),y.rotation!==void 0){x.sourceRotation=f;let w=on(y.rotation-f+Math.PI,2*Math.PI)-Math.PI;x.targetRotation=f+w,f=x.targetRotation}K_(x)?x.complete=!0:o+=x.duration,m.push(x)}this.animations_.push(m),this.setHint(ct.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[ct.ANIMATING]>0}getInteracting(){return this.hints_[ct.INTERACTING]>0}cancelAnimations(){this.setHint(ct.ANIMATING,-this.hints_[ct.ANIMATING]);let e;for(let t=0,i=this.animations_.length;t<i;++t){let r=this.animations_[t];if(r[0].callback&&po(r[0].callback,!1),!e)for(let o=0,l=r.length;o<l;++o){let c=r[o];if(!c.complete){e=c.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;let e=Date.now(),t=!1;for(let i=this.animations_.length-1;i>=0;--i){let r=this.animations_[i],o=!0;for(let l=0,c=r.length;l<c;++l){let f=r[l];if(f.complete)continue;let m=e-f.start,y=f.duration>0?m/f.duration:1;y>=1?(f.complete=!0,y=1):o=!1;let x=f.easing(y);if(f.sourceCenter){let w=f.sourceCenter[0],T=f.sourceCenter[1],R=f.targetCenter[0],L=f.targetCenter[1];this.nextCenter_=f.targetCenter;let O=w+x*(R-w),P=T+x*(L-T);this.targetCenter_=[O,P]}if(f.sourceResolution&&f.targetResolution){let w=x===1?f.targetResolution:f.sourceResolution+x*(f.targetResolution-f.sourceResolution);if(f.anchor){let T=this.getViewportSize_(this.getRotation()),R=this.constraints_.resolution(w,0,T,!0);this.targetCenter_=this.calculateCenterZoom(R,f.anchor)}this.nextResolution_=f.targetResolution,this.targetResolution_=w,this.applyTargetState_(!0)}if(f.sourceRotation!==void 0&&f.targetRotation!==void 0){let w=x===1?on(f.targetRotation+Math.PI,2*Math.PI)-Math.PI:f.sourceRotation+x*(f.targetRotation-f.sourceRotation);if(f.anchor){let T=this.constraints_.rotation(w,!0);this.targetCenter_=this.calculateCenterRotate(T,f.anchor)}this.nextRotation_=f.targetRotation,this.targetRotation_=w}if(this.applyTargetState_(!0),t=!0,!f.complete)break}if(o){this.animations_[i]=null,this.setHint(ct.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;let l=r[0].callback;l&&po(l,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let i,r=this.getCenterInternal();return r!==void 0&&(i=[r[0]-t[0],r[1]-t[1]],ki(i,e-this.getRotation()),Ef(i,t)),i}calculateCenterZoom(e,t){let i,r=this.getCenterInternal(),o=this.getResolution();if(r!==void 0&&o!==void 0){let l=t[0]-e*(t[0]-r[0])/o,c=t[1]-e*(t[1]-r[1])/o;i=[l,c]}return i}getViewportSize_(e){let t=this.viewportSize_;if(e){let i=t[0],r=t[1];return[Math.abs(i*Math.cos(e))+Math.abs(r*Math.sin(e)),Math.abs(i*Math.sin(e))+Math.abs(r*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){let e=this.getCenterInternal();return e&&Pr(e,this.getProjection())}getCenterInternal(){return this.get(bt.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){let t=this.calculateExtentInternal(e);return $f(t,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();let t=this.getCenterInternal();J(t,"The view center is not defined");let i=this.getResolution();J(i!==void 0,"The view resolution is not defined");let r=this.getRotation();return J(r!==void 0,"The view rotation is not defined"),Tr(t,i,r,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(bt.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Bt(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t=t||this.getViewportSizeMinusPadding_();let i=se(e)/t[0],r=Ne(e)/t[1];return Math.max(i,r)}getResolutionForValueFunction(e){e=e||2;let t=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,r=Math.log(t/i)/Math.log(e);return(function(o){return t/Math.pow(e,o*r)})}getRotation(){return this.get(bt.ROTATION)}getValueForResolutionFunction(e){let t=Math.log(e||2),i=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,o=Math.log(i/r)/t;return(function(l){return Math.log(i/l)/t/o})}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e),i=this.padding_;return i&&(t=[t[0]-i[1]-i[3],t[1]-i[0]-i[2]]),t}getState(){let e=this.getProjection(),t=this.getResolution(),i=this.getRotation(),r=this.getCenterInternal(),o=this.padding_;if(o){let l=this.getViewportSizeMinusPadding_();r=Zl(r,this.getViewportSize_(),[l[0]/2+o[3],l[1]/2+o[0]],t,i)}return{center:r.slice(0),projection:e!==void 0?e:null,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e,t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,i,r;if(this.resolutions_){let o=Si(this.resolutions_,e,1);t=o,i=this.resolutions_[o],o==this.resolutions_.length-1?r=2:r=i/this.resolutions_[o+1]}else i=this.maxResolution_,r=this.zoomFactor_;return t+Math.log(i/e)/Math.log(r)}getResolutionForZoom(e){if(this.resolutions_?.length){if(this.resolutions_.length===1)return this.resolutions_[0];let t=ge(Math.floor(e),0,this.resolutions_.length-2),i=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/Math.pow(i,ge(e-t,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,t){let i;if(J(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){J(!bn(e),"Cannot fit empty extent provided as `geometry`");let r=Bt(e,this.getProjection());i=Wl(r)}else if(e.getType()==="Circle"){let r=Bt(e.getExtent(),this.getProjection());i=Wl(r),i.rotate(this.getRotation(),Gt(r))}else{let r=Zf();r?i=e.clone().transform(r,this.getProjection()):i=e}this.fitInternal(i,t)}rotatedExtentForGeometry(e){let t=this.getRotation(),i=Math.cos(t),r=Math.sin(-t),o=e.getFlatCoordinates(),l=e.getStride(),c=1/0,f=1/0,m=-1/0,y=-1/0;for(let x=0,w=o.length;x<w;x+=l){let T=o[x]*i-o[x+1]*r,R=o[x]*r+o[x+1]*i;c=Math.min(c,T),f=Math.min(f,R),m=Math.max(m,T),y=Math.max(y,R)}return[c,f,m,y]}fitInternal(e,t){t=t||{};let i=t.size;i||(i=this.getViewportSizeMinusPadding_());let r=t.padding!==void 0?t.padding:[0,0,0,0],o=t.nearest!==void 0?t.nearest:!1,l;t.minResolution!==void 0?l=t.minResolution:t.maxZoom!==void 0?l=this.getResolutionForZoom(t.maxZoom):l=0;let c=this.rotatedExtentForGeometry(e),f=this.getResolutionForExtentInternal(c,[i[0]-r[1]-r[3],i[1]-r[0]-r[2]]);f=isNaN(f)?l:Math.max(f,l),f=this.getConstrainedResolution(f,o?0:1);let m=this.getRotation(),y=Math.sin(m),x=Math.cos(m),w=Gt(c);w[0]+=(r[1]-r[3])/2*f,w[1]+=(r[0]-r[2])/2*f;let T=w[0]*x-w[1]*y,R=w[1]*x+w[0]*y,L=this.getConstrainedCenter([T,R],f),O=t.callback?t.callback:ti;t.duration!==void 0?this.animateInternal({resolution:f,center:L,duration:t.duration,easing:t.easing},O):(this.targetResolution_=f,this.targetCenter_=L,this.applyTargetState_(!1,!0),po(O,!0))}centerOn(e,t,i){this.centerOnInternal(mt(e,this.getProjection()),t,i)}centerOnInternal(e,t,i){this.setCenterInternal(Zl(e,t,i,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,i,r){let o,l=this.padding_;if(l&&e){let c=this.getViewportSizeMinusPadding_(-i),f=Zl(e,r,[c[0]/2+l[3],c[1]/2+l[0]],t,i);o=[e[0]-f[0],e[1]-f[1]]}return o}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){let t=Pr(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){let t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t=t&&mt(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){let i=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),o=this.constraints_.resolution(this.targetResolution_*e,0,r,i);t&&(this.targetCenter_=this.calculateCenterZoom(o,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(Math.pow(this.zoomFactor_,-e),t)}adjustRotation(e,t){t&&(t=mt(t,this.getProjection())),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){let i=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+e,i);t&&(this.targetCenter_=this.calculateCenterRotate(r,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&mt(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){let i=this.getAnimating()||this.getInteracting()||t,r=this.constraints_.rotation(this.targetRotation_,i),o=this.getViewportSize_(r),l=this.constraints_.resolution(this.targetResolution_,0,o,i),c=this.constraints_.center(this.targetCenter_,l,o,i,this.calculateCenterShift(this.targetCenter_,l,r,o));this.get(bt.ROTATION)!==r&&this.set(bt.ROTATION,r),this.get(bt.RESOLUTION)!==l&&(this.set(bt.RESOLUTION,l),this.set("zoom",this.getZoom(),!0)),(!c||!this.get(bt.CENTER)||!ii(this.get(bt.CENTER),c))&&this.set(bt.CENTER,c),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,i){e=e!==void 0?e:200;let r=t||0,o=this.constraints_.rotation(this.targetRotation_),l=this.getViewportSize_(o),c=this.constraints_.resolution(this.targetResolution_,r,l),f=this.constraints_.center(this.targetCenter_,c,l,!1,this.calculateCenterShift(this.targetCenter_,c,o,l));if(e===0&&!this.cancelAnchor_){this.targetResolution_=c,this.targetRotation_=o,this.targetCenter_=f,this.applyTargetState_();return}i=i||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==c||this.getRotation()!==o||!this.getCenterInternal()||!ii(this.getCenterInternal(),f))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:o,center:f,resolution:c,duration:e,easing:Tt,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(ct.INTERACTING,1)}endInteraction(e,t,i){i=i&&mt(i,this.getProjection()),this.endInteractionInternal(e,t,i)}endInteractionInternal(e,t,i){this.getInteracting()&&(this.setHint(ct.INTERACTING,-1),this.resolveConstraints(e,t,i))}getConstrainedCenter(e,t){let i=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),i)}getConstrainedZoom(e,t){let i=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(i,t))}getConstrainedResolution(e,t){t=t||0;let i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,i)}};ht=$l});var jr,Zt,Ql,zn,Jl,X1,$i=S(()=>{jr="ol-hidden",Zt="ol-unselectable",Ql="ol-unsupported",zn="ol-control",Jl="ol-collapsed",X1=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`].join(""),"i")});var eu,It,Qi=S(()=>{El();qt();Ct();gt();eu=class extends je{constructor(e){super();let t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&this.element?.remove();for(let t=0,i=this.listenerKeys.length;t<i;++t)oe(this.listenerKeys[t]);if(this.listenerKeys.length=0,this.map_=e,e){let t=this.target_??e.getOverlayContainerStopEvent();this.element&&t.appendChild(this.element),this.render!==ti&&this.listenerKeys.push(Q(e,Yt.POSTRENDER,this.render,this)),e.render()}}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}},It=eu});var tu,pg,mg=S(()=>{wt();$i();Be();be();gt();Qi();tu=class extends It{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.attributions_=e.attributions;let t=e.className!==void 0?e.className:"ol-attribution",i=e.tipLabel!==void 0?e.tipLabel:"Attributions",r=e.expandClassName!==void 0?e.expandClassName:t+"-expand",o=e.collapseLabel!==void 0?e.collapseLabel:"\u203A",l=e.collapseClassName!==void 0?e.collapseClassName:t+"-collapse";typeof o=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=o,this.collapseLabel_.className=l):this.collapseLabel_=o;let c=e.label!==void 0?e.label:"i";typeof c=="string"?(this.label_=document.createElement("span"),this.label_.textContent=c,this.label_.className=r):this.label_=c;let f=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(f),this.toggleButton_.addEventListener(K.CLICK,this.handleClick_.bind(this),!1);let m=t+" "+Zt+" "+zn+(this.collapsed_&&this.collapsible_?" "+Jl:"")+(this.collapsible_?"":" ol-uncollapsible"),y=this.element;y.className=m,y.appendChild(this.toggleButton_),y.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){let t=this.getMap().getAllLayers(),i=new Set(t.flatMap(r=>r.getAttributions(e)));if(this.attributions_!==void 0&&(Array.isArray(this.attributions_)?this.attributions_.forEach(r=>i.add(r)):i.add(this.attributions_)),!this.overrideCollapsible_){let r=!t.some(o=>o.getSource()?.getAttributionsCollapsible()===!1);this.setCollapsible(r)}return Array.from(i)}async updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}let t=await Promise.all(this.collectSourceAttributions_(e).map(r=>cf(()=>r))),i=t.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!In(t,this.renderedAttributions_)){yf(this.ulElement_);for(let r=0,o=t.length;r<o;++r){let l=document.createElement("li");l.innerHTML=t[r],this.ulElement_.appendChild(l)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(Jl),this.collapsed_?Ni(this.collapseLabel_,this.label_):Ni(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}},pg=tu});var nu,Ur,iu=S(()=>{$i();Dn();be();Qi();nu=class extends It{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});let t=e.className!==void 0?e.className:"ol-rotate",i=e.label!==void 0?e.label:"\u21E7",r=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof i=="string"?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(r));let o=e.tipLabel?e.tipLabel:"Reset rotation",l=document.createElement("button");l.className=t+"-reset",l.setAttribute("type","button"),l.title=o,l.appendChild(this.label_),l.addEventListener(K.CLICK,this.handleClick_.bind(this),!1);let c=t+" "+Zt+" "+zn,f=this.element;f.className=c,f.appendChild(l),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(jr)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){let t=this.getMap().getView();if(!t)return;let i=t.getRotation();i!==void 0&&(this.duration_>0&&i%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:Tt}):t.setRotation(0))}render(e){let t=e.frameState;if(!t)return;let i=t.viewState.rotation;if(i!=this.rotation_){let r="rotate("+i+"rad)";if(this.autoHide_){let o=this.element.classList.contains(jr);!o&&i===0?this.element.classList.add(jr):o&&i!==0&&this.element.classList.remove(jr)}this.label_.style.transform=r}this.rotation_=i}},Ur=nu});var ru,Gr,su=S(()=>{$i();Dn();be();Qi();ru=class extends It{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});let t=e.className!==void 0?e.className:"ol-zoom",i=e.delta!==void 0?e.delta:1,r=e.zoomInClassName!==void 0?e.zoomInClassName:t+"-in",o=e.zoomOutClassName!==void 0?e.zoomOutClassName:t+"-out",l=e.zoomInLabel!==void 0?e.zoomInLabel:"+",c=e.zoomOutLabel!==void 0?e.zoomOutLabel:"\u2013",f=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",m=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",y=document.createElement("button");y.className=r,y.setAttribute("type","button"),y.title=f,y.appendChild(typeof l=="string"?document.createTextNode(l):l),y.addEventListener(K.CLICK,this.handleClick_.bind(this,i),!1);let x=document.createElement("button");x.className=o,x.setAttribute("type","button"),x.title=m,x.appendChild(typeof c=="string"?document.createTextNode(c):c),x.addEventListener(K.CLICK,this.handleClick_.bind(this,-i),!1);let w=t+" "+Zt+" "+zn,T=this.element;T.className=w,T.appendChild(y),T.appendChild(x),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){let i=this.getMap().getView();if(!i)return;let r=i.getZoom();if(r!==void 0){let o=i.getConstrainedZoom(r+e);this.duration_>0?(i.getAnimating()&&i.cancelAnimations(),i.animate({zoom:o,duration:this.duration_,easing:Tt})):i.setZoom(o)}}},Gr=ru});function yg(n){n=n||{};let e=new Je;return(n.zoom===void 0||n.zoom)&&e.push(new Gr(n.zoomOptions)),(n.rotate===void 0||n.rotate)&&e.push(new Ur(n.rotateOptions)),(n.attribution===void 0||n.attribution)&&e.push(new pg(n.attributionOptions)),e}var _g=S(()=>{Nr();mg();iu();su()});var ou,xg,Eg=S(()=>{ou=class{constructor(e,t,i){this.decay_=e,this.minVelocity_=t,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;let e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let i=t-3;for(;i>0&&this.points_[i+2]>e;)i-=3;let r=this.points_[t+2]-this.points_[i+2];if(r<1e3/60)return!1;let o=this.points_[t]-this.points_[i],l=this.points_[t+1]-this.points_[i+1];return this.angle_=Math.atan2(l,o),this.initialVelocity_=Math.sqrt(o*o+l*l)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}},xg=ou});var au,vg=S(()=>{au={ACTIVE:"active"}});function wg(n,e,t){let i=n.getCenterInternal();if(i){let r=[i[0]+e[0],i[1]+e[1]];n.animateInternal({duration:t!==void 0?t:250,easing:mf,center:n.getConstrainedCenter(r)})}}function Ji(n,e,t,i){let r=n.getZoom();if(r===void 0)return;let o=n.getConstrainedZoom(r+e),l=n.getResolutionForZoom(o);n.getAnimating()&&n.cancelAnimations(),n.animate({resolution:l,anchor:t,duration:i!==void 0?i:250,easing:Tt})}var lu,$t,er=S(()=>{qt();Dn();vg();lu=class extends je{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(au.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(au.ACTIVE,e)}setMap(e){this.map_=e}};$t=lu});var uu,Cg,Tg=S(()=>{Fr();er();uu=class extends $t{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let t=!1;if(e.type==_e.DBLCLICK){let i=e.originalEvent,r=e.map,o=e.coordinate,l=i.shiftKey?-this.delta_:this.delta_,c=r.getView();Ji(c,l,o,this.duration_),i.preventDefault(),t=!0}return!t}},Cg=uu});function Xr(n){let e=arguments;return function(t){let i=!0;for(let r=0,o=e.length;r<o&&(i=i&&e[r](t),!!i);++r);return i}}var Rg,B_,yo,bg,_o,xo,Ig,Sg,Eo,vo,Ag,jn=S(()=>{gt();Vt();Rg=function(n){let e=n.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},B_=function(n){let e=n.map.getTargetElement(),t=e.getRootNode(),i=n.map.getOwnerDocument().activeElement;return t instanceof ShadowRoot?t.host.contains(i):e.contains(i)},yo=function(n){let e=n.map.getTargetElement(),t=e.getRootNode();return(t instanceof ShadowRoot?t.host:e).hasAttribute("tabindex")?B_(n):!0},bg=ei,_o=function(n){let e=n.originalEvent;return"pointerId"in e&&e.button==0&&!(hf&&La&&e.ctrlKey)},xo=function(n){let e=n.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},Ig=function(n){let e=n.originalEvent;return La?e.metaKey:e.ctrlKey},Sg=function(n){let e=n.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Eo=function(n){let e=n.originalEvent,t=e.target.tagName;return t!=="INPUT"&&t!=="SELECT"&&t!=="TEXTAREA"&&!e.target.isContentEditable},vo=function(n){let e=n.originalEvent;return"pointerId"in e&&e.pointerType=="mouse"},Ag=function(n){let e=n.originalEvent;return"pointerId"in e&&e.isPrimary&&e.button===0}});function tr(n){let e=n.length,t=0,i=0;for(let r=0;r<e;r++)t+=n[r].clientX,i+=n[r].clientY;return{clientX:t/e,clientY:i/e}}var cu,Qt,nr=S(()=>{Fr();er();cu=class extends $t{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==_e.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==_e.POINTERUP){let i=this.handleUpEvent(e);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(e.type==_e.POINTERDOWN){let i=this.handleDownEvent(e);this.handlingDownUpSequence=i,t=this.stopDown(i)}else e.type==_e.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}};Qt=cu});var hu,Lg,Mg=S(()=>{zi();Dn();jn();gt();nr();hu=class extends Qt{constructor(e){super({stopDown:an}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;let t=e.condition?e.condition:Xr(xo,Ag);this.condition_=e.onFocusOnly?Xr(yo,t):t,this.noKinetic_=!1}handleDragEvent(e){let t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());let i=this.targetPointers,r=t.getEventPixel(tr(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){let o=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],c=e.map.getView();vf(o,c.getResolution()),ki(o,c.getRotation()),c.adjustCenterInternal(o)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=i.length,e.originalEvent.preventDefault()}handleUpEvent(e){let t=e.map,i=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){let r=this.kinetic_.getDistance(),o=this.kinetic_.getAngle(),l=i.getCenterInternal(),c=t.getPixelFromCoordinateInternal(l),f=t.getCoordinateFromPixelInternal([c[0]-r*Math.cos(o),c[1]-r*Math.sin(o)]);i.animateInternal({center:i.getConstrainedCenter(f),duration:500,easing:Tt})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){let i=e.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}},Lg=hu});var fu,Pg,Og=S(()=>{jn();gt();go();nr();fu=class extends Qt{constructor(e){e=e||{},super({stopDown:an}),this.condition_=e.condition?e.condition:Rg,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!vo(e))return;let t=e.map,i=t.getView();if(i.getConstraints().rotation===Zi)return;let r=t.getSize(),o=e.pixel,l=Math.atan2(r[1]/2-o[1],o[0]-r[0]/2);if(this.lastAngle_!==void 0){let c=l-this.lastAngle_;i.adjustRotationInternal(-c)}this.lastAngle_=l}handleUpEvent(e){return vo(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return vo(e)&&_o(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}},Pg=fu});var du,Dg,Ng=S(()=>{Ir();Vl();du=class extends Pn{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){let e=this.startPixel_,t=this.endPixel_,i="px",r=this.element_.style;r.left=Math.min(e[0],t[0])+i,r.top=Math.min(e[1],t[1])+i,r.width=Math.abs(t[0]-e[0])+i,r.height=Math.abs(t[1]-e[1])+i}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);let t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;let e=this.startPixel_,t=this.endPixel_,r=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);r[4]=r[0].slice(),this.geometry_?this.geometry_.setCoordinates([r]):this.geometry_=new ug([r])}getGeometry(){return this.geometry_}},Dg=du});var ir,ai,gu,Fg,kg=S(()=>{ln();jn();Ng();nr();ir={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"},ai=class extends Ve{constructor(e,t,i){super(e),this.coordinate=t,this.mapBrowserEvent=i}},gu=class extends Qt{constructor(e){super(),this.on,this.once,this.un,e=e??{},this.box_=new Dg(e.className||"ol-dragbox"),this.minArea_=e.minArea??64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition??_o,this.boxEndCondition_=e.boxEndCondition??this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,i){let r=i[0]-t[0],o=i[1]-t[1];return r*r+o*o>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.startPixel_&&(this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new ai(ir.BOXDRAG,e.coordinate,e)))}handleUpEvent(e){if(!this.startPixel_)return!1;let t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new ai(t?ir.BOXEND:ir.BOXCANCEL,e.coordinate,e)),this.box_.setMap(null),this.startPixel_=null,!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new ai(ir.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}setActive(e){e||(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new ai(ir.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setActive(e)}setMap(e){this.getMap()&&(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new ai(ir.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setMap(e)}},Fg=gu});var pu,zg,jg=S(()=>{Dn();jn();kg();pu=class extends Fg{constructor(e){e=e||{};let t=e.condition?e.condition:Sg;super({condition:t,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){let i=this.getMap().getView(),r=this.getGeometry();if(this.out_){let o=i.rotatedExtentForGeometry(r),l=i.getResolutionForExtentInternal(o),c=i.getResolution()/l;r=r.clone(),r.scale(c*c)}i.fitInternal(r,{duration:this.duration_,easing:Tt})}},zg=pu});var Un,Ug=S(()=>{Un={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"}});var mu,Gg,Xg=S(()=>{zi();be();Ug();jn();er();mu=class extends $t{constructor(e){super(),e=e||{},this.defaultCondition_=function(t){return xo(t)&&Eo(t)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let t=!1;if(e.type==K.KEYDOWN){let i=e.originalEvent,r=i.key;if(this.condition_(e)&&(r==Un.DOWN||r==Un.LEFT||r==Un.RIGHT||r==Un.UP)){let l=e.map.getView(),c=l.getResolution()*this.pixelDelta_,f=0,m=0;r==Un.DOWN?m=-c:r==Un.LEFT?f=-c:r==Un.RIGHT?f=c:m=c;let y=[f,m];ki(y,l.getRotation()),wg(l,y,this.duration_),i.preventDefault(),t=!0}}return!t}},Gg=mu});var yu,Wg,Vg=S(()=>{be();jn();er();yu=class extends $t{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(t){return!Ig(t)&&Eo(t)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let t=!1;if(e.type==K.KEYDOWN||e.type==K.KEYPRESS){let i=e.originalEvent,r=i.key;if(this.condition_(e)&&(r==="+"||r==="-")){let o=e.map,l=r==="+"?this.delta_:-this.delta_,c=o.getView();Ji(c,l,void 0,this.duration_),i.preventDefault(),t=!0}}return!t}},Wg=yu});var q_,H_,Y_,_u,Kg,Bg=S(()=>{Ct();be();jn();ke();er();q_=40,H_=300,Y_=3,_u=class extends $t{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;let t=e.condition?e.condition:bg;this.condition_=e.onFocusOnly?Xr(yo,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300,this.ctrlKeyPressed_=!1,this.ctrlKeyListenerKeys_=[]}setMap(e){if(this.ctrlKeyListenerKeys_.forEach(oe),this.ctrlKeyListenerKeys_.length=0,this.ctrlKeyPressed_=!1,super.setMap(e),e){let t=e.getOwnerDocument();this.ctrlKeyListenerKeys_.push(Q(t,"keydown",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!0)}),Q(t,"keyup",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!1)}))}}endInteraction_(){this.trackpadTimeoutId_=void 0;let e=this.getMap();if(!e)return;let t=e.getView(),i=this.lastDelta_?this.lastDelta_>0?1:-1:0;t.endInteraction(this.constrainResolution_||t.getConstrainResolution()?100:void 0,i,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null)}handleEvent(e){if(!this.condition_(e)||e.type!==K.WHEEL)return!0;let i=e.map,r=e.originalEvent;r.preventDefault();let o=r.ctrlKey&&!this.ctrlKeyPressed_;r.ctrlKey||(this.ctrlKeyPressed_=!1),this.useAnchor_&&(this.lastAnchor_=e.pixel);let l=r.deltaY;switch(r.deltaMode){case WheelEvent.DOM_DELTA_LINE:l*=q_;break;case WheelEvent.DOM_DELTA_PAGE:l*=H_;break;default:}if(l===0)return!1;this.lastDelta_=l;let c=Date.now();this.startTime_===void 0&&(this.startTime_=c),(!this.mode_||c-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(l)<4?"trackpad":"wheel");let f=i.getView();if(this.mode_==="trackpad")return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(f.getAnimating()&&f.cancelAnimations(),f.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),o&&(l=l*Y_),f.adjustZoom(-l/this.deltaPerZoom_,this.lastAnchor_?i.getCoordinateFromPixel(this.lastAnchor_):null),this.startTime_=c,!1;this.totalDelta_+=l;let m=Math.max(this.timeout_-(c-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),m),!1}handleWheelZoom_(e){let t=e.getView();t.getAnimating()&&t.cancelAnimations();let i=-ge(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),Ji(t,i,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}},Kg=_u});var xu,qg,Hg=S(()=>{gt();go();nr();xu=class extends Qt{constructor(e){e=e||{};let t=e;t.stopDown||(t.stopDown=an),super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let t=0,i=this.targetPointers[0],r=this.targetPointers[1],o=Math.atan2(r.clientY-i.clientY,r.clientX-i.clientX);if(this.lastAngle_!==void 0){let f=o-this.lastAngle_;this.rotationDelta_+=f,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=f}this.lastAngle_=o;let l=e.map,c=l.getView();c.getConstraints().rotation!==Zi&&(this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(tr(this.targetPointers))),this.rotating_&&(l.render(),c.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}},qg=xu});var Eu,Yg,Zg=S(()=>{gt();nr();Eu=class extends Qt{constructor(e){e=e||{};let t=e;t.stopDown||(t.stopDown=an),super(t),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1,i=this.targetPointers[0],r=this.targetPointers[1],o=i.clientX-r.clientX,l=i.clientY-r.clientY,c=Math.sqrt(o*o+l*l);this.lastDistance_!==void 0&&(t=this.lastDistance_/c),this.lastDistance_=c;let f=e.map,m=f.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=f.getCoordinateFromPixelInternal(f.getEventPixel(tr(this.targetPointers))),f.render(),m.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){let i=e.map.getView(),r=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,r),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}},Yg=Eu});function $g(n){n=n||{};let e=new Je,t=new xg(-.005,.05,100);return(n.altShiftDragRotate===void 0||n.altShiftDragRotate)&&e.push(new Pg),(n.doubleClickZoom===void 0||n.doubleClickZoom)&&e.push(new Cg({delta:n.zoomDelta,duration:n.zoomDuration})),(n.dragPan===void 0||n.dragPan)&&e.push(new Lg({onFocusOnly:n.onFocusOnly,kinetic:t})),(n.pinchRotate===void 0||n.pinchRotate)&&e.push(new qg),(n.pinchZoom===void 0||n.pinchZoom)&&e.push(new Yg({duration:n.zoomDuration})),(n.keyboard===void 0||n.keyboard)&&(e.push(new Gg),e.push(new Wg({delta:n.zoomDelta,duration:n.zoomDuration}))),(n.mouseWheelZoom===void 0||n.mouseWheelZoom)&&e.push(new Kg({onFocusOnly:n.onFocusOnly,duration:n.zoomDuration})),(n.shiftDragZoom===void 0||n.shiftDragZoom)&&e.push(new zg({duration:n.zoomDuration})),e}var Qg=S(()=>{Nr();Eg();Tg();Mg();Og();jg();Xg();Vg();Bg();Hg();Zg()});var he,vu=S(()=>{he={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"}});var wu,wo,Cu=S(()=>{qt();lt();ke();ze();vu();wu=class extends je{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;let t=Object.assign({},e);typeof e.properties=="object"&&(delete t.properties,Object.assign(t,e.properties)),t[he.OPACITY]=e.opacity!==void 0?e.opacity:1,J(typeof t[he.OPACITY]=="number","Layer opacity must be a number"),t[he.VISIBLE]=e.visible!==void 0?e.visible:!0,t[he.Z_INDEX]=e.zIndex,t[he.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,t[he.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,t[he.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,t[he.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=t.className!==void 0?t.className:"ol-layer",delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){let t=this.state_||{layer:this,managed:e===void 0?!0:e},i=this.getZIndex();return t.opacity=ge(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=i===void 0&&!t.managed?1/0:i,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return ee()}getLayerStatesArray(e){return ee()}getExtent(){return this.get(he.EXTENT)}getMaxResolution(){return this.get(he.MAX_RESOLUTION)}getMinResolution(){return this.get(he.MIN_RESOLUTION)}getMinZoom(){return this.get(he.MIN_ZOOM)}getMaxZoom(){return this.get(he.MAX_ZOOM)}getOpacity(){return this.get(he.OPACITY)}getSourceState(){return ee()}getVisible(){return this.get(he.VISIBLE)}getZIndex(){return this.get(he.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(he.EXTENT,e)}setMaxResolution(e){this.set(he.MAX_RESOLUTION,e)}setMinResolution(e){this.set(he.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(he.MAX_ZOOM,e)}setMinZoom(e){this.set(he.MIN_ZOOM,e)}setOpacity(e){J(typeof e=="number","Layer opacity must be a number"),this.set(he.OPACITY,e)}setVisible(e){this.set(he.VISIBLE,e)}setZIndex(e){this.set(he.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}},wo=wu});var Gn,Dt,Tu,Ru,Wr,Jg=S(()=>{Nr();uo();Or();lt();Ct();ln();be();ve();Jn();ze();Cu();Gn={ADDLAYER:"addlayer",REMOVELAYER:"removelayer"},Dt=class extends Ve{constructor(e,t){super(e),this.layer=t}},Tu={LAYERS:"layers"},Ru=class n extends wo{constructor(e){e=e||{};let t=Object.assign({},e);delete t.layers;let i=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(Tu.LAYERS,this.handleLayersChanged_),i?Array.isArray(i)?i=new Je(i.slice(),{unique:!0}):J(typeof i.getArray=="function","Expected `layers` to be an array or a `Collection`"):i=new Je(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(oe),this.layersListenerKeys_.length=0;let e=this.getLayers();this.layersListenerKeys_.push(Q(e,Qe.ADD,this.handleLayersAdd_,this),Q(e,Qe.REMOVE,this.handleLayersRemove_,this));for(let i in this.listenerKeys_)this.listenerKeys_[i].forEach(oe);Mn(this.listenerKeys_);let t=e.getArray();for(let i=0,r=t.length;i<r;i++){let o=t[i];this.registerLayerListeners_(o),this.dispatchEvent(new Dt(Gn.ADDLAYER,o))}this.changed()}registerLayerListeners_(e){let t=[Q(e,gn.PROPERTYCHANGE,this.handleLayerChange_,this),Q(e,K.CHANGE,this.handleLayerChange_,this)];e instanceof n&&t.push(Q(e,Gn.ADDLAYER,this.handleLayerGroupAdd_,this),Q(e,Gn.REMOVELAYER,this.handleLayerGroupRemove_,this)),this.listenerKeys_[ye(e)]=t}handleLayerGroupAdd_(e){this.dispatchEvent(new Dt(Gn.ADDLAYER,e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new Dt(Gn.REMOVELAYER,e.layer))}handleLayersAdd_(e){let t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new Dt(Gn.ADDLAYER,t)),this.changed()}handleLayersRemove_(e){let t=e.element,i=ye(t);this.listenerKeys_[i].forEach(oe),delete this.listenerKeys_[i],this.dispatchEvent(new Dt(Gn.REMOVELAYER,t)),this.changed()}getLayers(){return this.get(Tu.LAYERS)}setLayers(e){let t=this.getLayers();if(t){let i=t.getArray();for(let r=0,o=i.length;r<o;++r)this.dispatchEvent(new Dt(Gn.REMOVELAYER,i[r]))}this.set(Tu.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){let t=e!==void 0?e:[],i=t.length;this.getLayers().forEach(function(l){l.getLayerStatesArray(t)});let r=this.getLayerState(),o=r.zIndex;!e&&r.zIndex===void 0&&(o=0);for(let l=i,c=t.length;l<c;l++){let f=t[l];f.opacity*=r.opacity,f.visible=f.visible&&r.visible,f.maxResolution=Math.min(f.maxResolution,r.maxResolution),f.minResolution=Math.max(f.minResolution,r.minResolution),f.minZoom=Math.max(f.minZoom,r.minZoom),f.maxZoom=Math.min(f.maxZoom,r.maxZoom),r.extent!==void 0&&(f.extent!==void 0?f.extent=Xt(f.extent,r.extent):f.extent=r.extent),f.zIndex===void 0&&(f.zIndex=o)}return t}getSourceState(){return"ready"}},Wr=Ru});var ft,Vr=S(()=>{ft={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"}});function Kr(n,e){if(!n.visible)return!1;let t=e.resolution;if(t<n.minResolution||t>=n.maxResolution)return!1;let i=e.zoom;return i>n.minZoom&&i<=n.maxZoom}var bu,li,rr=S(()=>{mo();lt();Ct();be();ve();Vr();Cu();vu();bu=class extends wo{constructor(e){let t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(he.SOURCE,this.handleSourcePropertyChange_);let i=e.source?e.source:null;this.setSource(i)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(he.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){let e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(oe(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;let e=this.getSource();e&&(this.sourceChangeKey_=Q(e,K.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t,i=this.getMapInternal();!e&&i&&(e=i.getView()),e instanceof ht?t={viewState:e.getState(),extent:e.calculateExtent()}:t=e,!t.layerStatesArray&&i&&(t.layerStatesArray=i.getLayerGroup().getLayerStatesArray());let r;if(t.layerStatesArray){if(r=t.layerStatesArray.find(l=>l.layer===this),!r)return!1}else r=this.getLayerState();let o=this.getExtent();return Kr(r,t.viewState)&&(!o||Wt(o,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t=this.getSource()?.getAttributions();if(!t)return[];let i=e instanceof ht?e.getViewStateAndExtent():e,r=t(i);return Array.isArray(r)||(r=[r]),r}render(e,t){let i=this.getRenderer();return i.prepareFrame(e)?(this.rendered=!0,i.renderFrame(e,t)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(e,t){}renderDeferred(e){let t=this.getRenderer();t&&t.renderDeferred(e)}setMapInternal(e){e||this.unrender(),this.set(he.MAP,e)}getMapInternal(){return this.get(he.MAP)}setMap(e){this.mapPrecomposeKey_&&(oe(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(oe(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=Q(e,ft.PRECOMPOSE,this.handlePrecompose_,this),this.mapRenderKey_=Q(this,K.CHANGE,e.render,e),this.changed())}handlePrecompose_(e){let t=e.frameState.layerStatesArray,i=this.getLayerState(!1);J(!t.some(r=>r.layer===i.layer),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),t.push(i)}setSource(e){this.set(he.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}clearRenderer(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_)}disposeInternal(){this.clearRenderer(),this.setSource(null),super.disposeInternal()}};li=bu});function Co(n,e,t=0,i=n.length-1,r=Z_){for(;i>t;){if(i-t>600){let f=i-t+1,m=e-t+1,y=Math.log(f),x=.5*Math.exp(2*y/3),w=.5*Math.sqrt(y*x*(f-x)/f)*(m-f/2<0?-1:1),T=Math.max(t,Math.floor(e-m*x/f+w)),R=Math.min(i,Math.floor(e+(f-m)*x/f+w));Co(n,e,T,R,r)}let o=n[e],l=t,c=i;for(Br(n,t,e),r(n[i],o)>0&&Br(n,t,i);l<c;){for(Br(n,l,c),l++,c--;r(n[l],o)<0;)l++;for(;r(n[c],o)>0;)c--}r(n[t],o)===0?Br(n,t,c):(c++,Br(n,c,i)),c<=e&&(t=c+1),e<=c&&(i=c-1)}}function Br(n,e,t){let i=n[e];n[e]=n[t],n[t]=i}function Z_(n,e){return n<e?-1:n>e?1:0}var ep=S(()=>{});function $_(n,e,t){if(!t)return e.indexOf(n);for(let i=0;i<e.length;i++)if(t(n,e[i]))return i;return-1}function sr(n,e){qr(n,0,n.children.length,e,n)}function qr(n,e,t,i,r){r||(r=or(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let o=e;o<t;o++){let l=n.children[o];Hr(r,n.leaf?i(l):l)}return r}function Hr(n,e){return n.minX=Math.min(n.minX,e.minX),n.minY=Math.min(n.minY,e.minY),n.maxX=Math.max(n.maxX,e.maxX),n.maxY=Math.max(n.maxY,e.maxY),n}function Q_(n,e){return n.minX-e.minX}function J_(n,e){return n.minY-e.minY}function Iu(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function To(n){return n.maxX-n.minX+(n.maxY-n.minY)}function e0(n,e){return(Math.max(e.maxX,n.maxX)-Math.min(e.minX,n.minX))*(Math.max(e.maxY,n.maxY)-Math.min(e.minY,n.minY))}function t0(n,e){let t=Math.max(n.minX,e.minX),i=Math.max(n.minY,e.minY),r=Math.min(n.maxX,e.maxX),o=Math.min(n.maxY,e.maxY);return Math.max(0,r-t)*Math.max(0,o-i)}function Su(n,e){return n.minX<=e.minX&&n.minY<=e.minY&&e.maxX<=n.maxX&&e.maxY<=n.maxY}function Ro(n,e){return e.minX<=n.maxX&&e.minY<=n.maxY&&e.maxX>=n.minX&&e.maxY>=n.minY}function or(n){return{children:n,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function tp(n,e,t,i,r){let o=[e,t];for(;o.length;){if(t=o.pop(),e=o.pop(),t-e<=i)continue;let l=e+Math.ceil((t-e)/i/2)*i;Co(n,l,e,t,r),o.push(e,l,l,t)}}var Yr,np=S(()=>{ep();Yr=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let t=this.data,i=[];if(!Ro(e,t))return i;let r=this.toBBox,o=[];for(;t;){for(let l=0;l<t.children.length;l++){let c=t.children[l],f=t.leaf?r(c):c;Ro(e,f)&&(t.leaf?i.push(c):Su(e,f)?this._all(c,i):o.push(c))}t=o.pop()}return i}collides(e){let t=this.data;if(!Ro(e,t))return!1;let i=[];for(;t;){for(let r=0;r<t.children.length;r++){let o=t.children[r],l=t.leaf?this.toBBox(o):o;if(Ro(e,l)){if(t.leaf||Su(e,l))return!0;i.push(o)}}t=i.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let i=0;i<e.length;i++)this.insert(e[i]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=t;else if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){let i=this.data;this.data=t,t=i}this._insert(t,this.data.height-t.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=or([]),this}remove(e,t){if(!e)return this;let i=this.data,r=this.toBBox(e),o=[],l=[],c,f,m;for(;i||o.length;){if(i||(i=o.pop(),f=o[o.length-1],c=l.pop(),m=!0),i.leaf){let y=$_(e,i.children,t);if(y!==-1)return i.children.splice(y,1),o.push(i),this._condense(o),this}!m&&!i.leaf&&Su(i,r)?(o.push(i),l.push(c),c=0,f=i,i=i.children[0]):f?(c++,i=f.children[c],m=!1):i=null}return this}toBBox(e){return e}compareMinX(e,t){return e.minX-t.minX}compareMinY(e,t){return e.minY-t.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let i=[];for(;e;)e.leaf?t.push(...e.children):i.push(...e.children),e=i.pop();return t}_build(e,t,i,r){let o=i-t+1,l=this._maxEntries,c;if(o<=l)return c=or(e.slice(t,i+1)),sr(c,this.toBBox),c;r||(r=Math.ceil(Math.log(o)/Math.log(l)),l=Math.ceil(o/Math.pow(l,r-1))),c=or([]),c.leaf=!1,c.height=r;let f=Math.ceil(o/l),m=f*Math.ceil(Math.sqrt(l));tp(e,t,i,m,this.compareMinX);for(let y=t;y<=i;y+=m){let x=Math.min(y+m-1,i);tp(e,y,x,f,this.compareMinY);for(let w=y;w<=x;w+=f){let T=Math.min(w+f-1,x);c.children.push(this._build(e,w,T,r-1))}}return sr(c,this.toBBox),c}_chooseSubtree(e,t,i,r){for(;r.push(t),!(t.leaf||r.length-1===i);){let o=1/0,l=1/0,c;for(let f=0;f<t.children.length;f++){let m=t.children[f],y=Iu(m),x=e0(e,m)-y;x<l?(l=x,o=y<o?y:o,c=m):x===l&&y<o&&(o=y,c=m)}t=c||t.children[0]}return t}_insert(e,t,i){let r=i?e:this.toBBox(e),o=[],l=this._chooseSubtree(r,this.data,t,o);for(l.children.push(e),Hr(l,r);t>=0&&o[t].children.length>this._maxEntries;)this._split(o,t),t--;this._adjustParentBBoxes(r,o,t)}_split(e,t){let i=e[t],r=i.children.length,o=this._minEntries;this._chooseSplitAxis(i,o,r);let l=this._chooseSplitIndex(i,o,r),c=or(i.children.splice(l,i.children.length-l));c.height=i.height,c.leaf=i.leaf,sr(i,this.toBBox),sr(c,this.toBBox),t?e[t-1].children.push(c):this._splitRoot(i,c)}_splitRoot(e,t){this.data=or([e,t]),this.data.height=e.height+1,this.data.leaf=!1,sr(this.data,this.toBBox)}_chooseSplitIndex(e,t,i){let r,o=1/0,l=1/0;for(let c=t;c<=i-t;c++){let f=qr(e,0,c,this.toBBox),m=qr(e,c,i,this.toBBox),y=t0(f,m),x=Iu(f)+Iu(m);y<o?(o=y,r=c,l=x<l?x:l):y===o&&x<l&&(l=x,r=c)}return r||i-t}_chooseSplitAxis(e,t,i){let r=e.leaf?this.compareMinX:Q_,o=e.leaf?this.compareMinY:J_,l=this._allDistMargin(e,t,i,r),c=this._allDistMargin(e,t,i,o);l<c&&e.children.sort(r)}_allDistMargin(e,t,i,r){e.children.sort(r);let o=this.toBBox,l=qr(e,0,t,o),c=qr(e,i-t,i,o),f=To(l)+To(c);for(let m=t;m<i-t;m++){let y=e.children[m];Hr(l,e.leaf?o(y):y),f+=To(l)}for(let m=i-t-1;m>=t;m--){let y=e.children[m];Hr(c,e.leaf?o(y):y),f+=To(c)}return f}_adjustParentBBoxes(e,t,i){for(let r=i;r>=0;r--)Hr(t[r],e)}_condense(e){for(let t=e.length-1,i;t>=0;t--)e[t].children.length===0?t>0?(i=e[t-1].children,i.splice(i.indexOf(e[t]),1)):this.clear():sr(e[t],this.toBBox)}}});function n0(){return Au||(Au=Ce(1,1,void 0,{willReadFrequently:!0,desynchronized:!0})),Au}function bo(n,e){return n.endsWith("%")?Number(n.substring(0,n.length-1))/e:Number(n)}function $r(n){throw new Error('failed to parse "'+n+'" as color')}function ip(n){if(n.toLowerCase().startsWith("rgb")){let o=n.match(r0)||n.match(i0)||n.match(s0);if(o){let l=o[4],c=100/255;return[ge(bo(o[1],c)+.5|0,0,255),ge(bo(o[2],c)+.5|0,0,255),ge(bo(o[3],c)+.5|0,0,255),l!==void 0?ge(bo(l,100),0,1):1]}$r(n)}if(n.startsWith("#")){if(o0.test(n)){let o=n.substring(1),l=o.length<=4?1:2,c=[0,0,0,255];for(let f=0,m=o.length;f<m;f+=l){let y=parseInt(o.substring(f,f+l),16);l===1&&(y+=y<<4),c[f/l]=y}return c[3]=c[3]/255,c}$r(n)}let e=n0();e.fillStyle="#abcdef";let t=e.fillStyle;e.fillStyle=n,e.fillStyle===t&&(e.fillStyle="#fedcba",t=e.fillStyle,e.fillStyle=n,e.fillStyle===t&&$r(n));let i=e.fillStyle;if(i.startsWith("#")||i.startsWith("rgba"))return ip(i);e.clearRect(0,0,1,1),e.fillRect(0,0,1,1);let r=Array.from(e.getImageData(0,0,1,1).data);return r[3]=Fs(r[3]/255,3),r}function rp(n){return typeof n=="string"?n:Jr(n)}function sp(n){if(n.length===4)return n;let e=n.slice();return e[3]=1,e}function Mu(n){return n>.0031308?Math.pow(n,1/2.4)*269.025-14.025:n*3294.6}function Pu(n){return n>.2068965?Math.pow(n,3):(n-4/29)*(108/841)}function Ou(n){return n>10.314724?Math.pow((n+14.025)/269.025,2.4):n/3294.6}function Du(n){return n>.0088564?Math.pow(n,1/3):n/(108/841)+4/29}function Nu(n){let e=Ou(n[0]),t=Ou(n[1]),i=Ou(n[2]),r=Du(e*.222488403+t*.716873169+i*.06060791),o=500*(Du(e*.452247074+t*.399439023+i*.148375274)-r),l=200*(r-Du(e*.016863605+t*.117638439+i*.865350722)),c=Math.atan2(l,o)*(180/Math.PI);return[116*r-16,Math.sqrt(o*o+l*l),c<0?c+360:c,n[3]]}function op(n){let e=(n[0]+16)/116,t=n[1],i=n[2]*Math.PI/180,r=Pu(e),o=Pu(e+t/500*Math.cos(i)),l=Pu(e-t/200*Math.sin(i)),c=Mu(o*3.021973625-r*1.617392459-l*.404875592),f=Mu(o*-.943766287+r*1.916279586+l*.027607165),m=Mu(o*.069407491-r*.22898585+l*1.159737864);return[ge(c+.5|0,0,255),ge(f+.5|0,0,255),ge(m+.5|0,0,255),n[3]]}function Qr(n){if(n==="none")return Io;if(Zr.hasOwnProperty(n))return Zr[n];if(Lu>=a0){let t=0;for(let i in Zr)(t++&3)===0&&(delete Zr[i],--Lu)}let e=ip(n);e.length!==4&&$r(n);for(let t of e)isNaN(t)&&$r(n);return Zr[n]=e,++Lu,e}function St(n){return Array.isArray(n)?n:Qr(n)}function Jr(n){let e=n[0];e!=(e|0)&&(e=e+.5|0);let t=n[1];t!=(t|0)&&(t=t+.5|0);let i=n[2];i!=(i|0)&&(i=i+.5|0);let r=n[3]===void 0?1:Math.round(n[3]*1e3)/1e3;return"rgba("+e+","+t+","+i+","+r+")"}var Io,Au,i0,r0,s0,o0,a0,Zr,Lu,Nt=S(()=>{Be();ke();Io=[NaN,NaN,NaN,0];i0=/^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,r0=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,s0=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,o0=/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;a0=1024,Zr={},Lu=0});function u0(n){return n in ku}function pn(n){let e=[];for(let t of l0)es(n,t)&&e.push(ku[t]);return e.length===0?"untyped":e.length<3?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e[e.length-1]}function es(n,e){return(n&e)===e}function So(n,e){return!!(n&e)}function Xn(n,e){return n===e}function Po(n){return{variables:new Map,properties:new Map,featureId:!1,geometryType:!1,mCoordinate:!1,mapState:!1,inputVariables:n}}function Ie(n,e,t){switch(typeof n){case"boolean":{if(Xn(e,Ye))return new Te(Ye,n?"true":"false");if(!es(e,He))throw new Error(`got a boolean, but expected ${pn(e)}`);return new Te(He,n)}case"number":{if(Xn(e,ui))return new Te(ui,we(n));if(Xn(e,He))return new Te(He,!!n);if(Xn(e,Ye))return new Te(Ye,n.toString());if(!es(e,re))throw new Error(`got a number, but expected ${pn(e)}`);return new Te(re,n)}case"string":{if(Xn(e,et))return new Te(et,Qr(n));if(Xn(e,He))return new Te(He,!!n);if(!es(e,Ye))throw new Error(`got a string, but expected ${pn(e)}`);return new Te(Ye,n)}default:}if(!Array.isArray(n))throw new Error("expression must be an array or a primitive value");if(n.length===0)throw new Error("empty expression");if(typeof n[0]=="string")return v0(n,e,t);for(let i of n)if(typeof i!="number")throw new Error("expected an array of numbers");if(Xn(e,ui)){if(n.length!==2)throw new Error(`expected an array of two values for a size, got ${n.length}`);return new Te(ui,n)}if(Xn(e,et)){if(n.length===3)return new Te(et,[...n,1]);if(n.length===4)return new Te(et,n);throw new Error(`expected an array of 3 or 4 values for a color, got ${n.length}`)}if(!es(e,mn))throw new Error(`got an array of numbers, but expected ${pn(e)}`);return new Te(mn,n)}function ap(n,e,t){let i=n.length-1,r=new Array(i);for(let o=0;o<i;++o){let l=n[o+1];switch(typeof l){case"number":{r[o]=new Te(re,l);break}case"string":{r[o]=new Te(Ye,l);break}default:throw new Error(`expected a string key or numeric array index for a get operation, got ${l}`)}o===0&&t.properties.set(String(l),e)}return r}function h0(){return function(n,e,t){let i=n[1];if(typeof i!="string")throw new Error("expected a string argument for var operation");let r=e,o=t.inputVariables?.[i];if(o!==void 0){let l=Ie(o,Lo,t);if(!(l instanceof Te))throw new Error(`style variables should only be literal values (no expressions!), variable name: ${i}`);let c=l.type;if(typeof o=="string"&&So(r,et)&&!So(r,Ye)?c=et:Array.isArray(o)&&o.length===2&&So(r,ui)&&!So(r,mn)&&(c=ui),r&=c,r===Ao)throw new Error(`the type expected from the var operator (${pn(e)}) did not have any overlap with the type of the corresponding style variables (${pn(c)}), variable name: ${i}`)}if(t.variables.has(i)){let l=t.variables.get(i);if(r&=l,r===Ao)throw new Error(`a new type expected from the var operator (${pn(e)}) did not have any overlap with the previous type expected for it (${pn(l)}), variable name: ${i}`)}return t.variables.set(i,r),new Mo(r,"var",new Te(Ye,i))}}function f0(n,e,t){t.featureId=!0}function d0(n,e,t){t.geometryType=!0}function g0(n,e,t){t.mCoordinate=!0}function Fu(n,e,t){t.mapState=!0}function ar(n,e,t){let i=n[0];if(n.length!==1)throw new Error(`expected no arguments for ${i} operation`);return[]}function te(n,e){return function(t,i,r){let o=t[0],l=t.length-1;if(n===e){if(l!==n){let c=n===1?"":"s";throw new Error(`expected ${n} argument${c} for ${o}, got ${l}`)}}else if(l<n||l>e){let c=e===1/0?`${n} or more`:`${n} to ${e}`;throw new Error(`expected ${c} arguments for ${o}, got ${l}`)}}}function lp(n,e,t){let i=n.length-1,r=new Array(i);for(let o=0;o<i;++o){let l=Ie(n[o+1],e,t);r[o]=l}return r}function pe(n){return function(e,t,i){let r=e.length-1,o=new Array(r);for(let l=0;l<r;++l){let c=Ie(e[l+1],n,i);o[l]=c}return o}}function up(){return function(n,e,t){let i=n[0],r=n.length-1,o=new Array(r),l=Lo;for(let c=0;c<r;++c){let f=Ie(n[c+1],l,t);l&=f.type}if(l===Ao)throw new Error(`no common type was found among the arguments of ${i}`);for(let c=0;c<r;++c){let f=Ie(n[c+1],l,t);o[c]=f}return o}}function p0(n,e,t){let i=n[0],r=n.length-1;if(r%2===0)throw new Error(`expected an odd number of arguments for ${i}, got ${r} instead`)}function cp(n,e,t){let i=n[0],r=n.length-1;if(r%2===1)throw new Error(`expected an even number of arguments for operation ${i}, got ${r} instead`)}function m0(n,e,t){let i=n.length-1,r=Ie(n[n.length-1],e,t),o=Ye|re|He,l=new Array(i-2);for(let f=0;f<i-2;f+=2){try{let m=Ie(n[f+2],o,t);o&=m.type}catch(m){throw new Error(`failed to parse argument ${f+1} of match expression: ${m.message}`)}if(o===Ao)throw new Error("no common type was found among the arguments of match expression")}for(let f=0;f<i-2;f+=2){try{let m=Ie(n[f+2],o,t);l[f]=m}catch(m){throw new Error(`failed to parse argument ${f+1} of match expression: ${m.message}`)}try{let m=Ie(n[f+3],r.type,t);l[f+1]=m}catch(m){throw new Error(`failed to parse argument ${f+2} of match expression: ${m.message}`)}}return[Ie(n[1],o,t),...l,r]}function y0(n,e,t){let i=n[1],r;switch(i[0]){case"linear":r=1;break;case"exponential":let f=i[1];if(typeof f!="number"||f<=0)throw new Error(`expected a number base for exponential interpolation, got ${JSON.stringify(f)} instead`);r=f;break;default:throw new Error(`invalid interpolation type: ${JSON.stringify(i)}`)}let o=new Te(re,r),l;try{l=Ie(n[2],re,t)}catch(f){throw new Error(`failed to parse argument 1 in interpolate expression: ${f.message}`)}let c=new Array(n.length-3);for(let f=0;f<c.length;f+=2){try{let m=Ie(n[f+3],re,t);c[f]=m}catch(m){throw new Error(`failed to parse argument ${f+2} for interpolate expression: ${m.message}`)}try{let m=Ie(n[f+4],e,t);c[f+1]=m}catch(m){throw new Error(`failed to parse argument ${f+3} for interpolate expression: ${m.message}`)}}return[o,l,...c]}function _0(n,e,t){let i=Ie(n[n.length-1],e,t),r=new Array(n.length-1);for(let o=0;o<r.length-1;o+=2){try{let l=Ie(n[o+1],He,t);r[o]=l}catch(l){throw new Error(`failed to parse argument ${o} of case expression: ${l.message}`)}try{let l=Ie(n[o+2],i.type,t);r[o+1]=l}catch(l){throw new Error(`failed to parse argument ${o+1} of case expression: ${l.message}`)}}return r[r.length-1]=i,r}function x0(n,e,t){let i=n[2];if(!Array.isArray(i))throw new Error('the second argument for the "in" operator must be an array');let r;if(i[0]==="literal"){if(i=i[1],!Array.isArray(i))throw new Error('failed to parse "in" expression: the literal operator must be followed by an array')}else if(typeof i[0]=="string")throw new Error('for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions');typeof i[0]=="string"?r=Ye:r=re;let o=new Array(i.length);for(let c=0;c<o.length;c++)try{let f=Ie(i[c],r,t);o[c]=f}catch(f){throw new Error(`failed to parse haystack item ${c} for "in" expression: ${f.message}`)}return[Ie(n[1],r,t),...o]}function E0(n,e,t){let i;try{i=Ie(n[1],re,t)}catch(l){throw new Error(`failed to parse first argument in palette expression: ${l.message}`)}let r=n[2];if(!Array.isArray(r))throw new Error("the second argument of palette must be an array");let o=new Array(r.length);for(let l=0;l<o.length;l++){let c;try{c=Ie(r[l],et,t)}catch(f){throw new Error(`failed to parse color at index ${l} in palette expression: ${f.message}`)}if(!(c instanceof Te))throw new Error(`the palette color at index ${l} must be a literal value`);o[l]=c}return[i,...o]}function Y(...n){return function(e,t,i){let r=e[0],o;for(let l=0;l<n.length;l++){let c=n[l](e,t,i);if(l==n.length-1){if(!c)throw new Error("expected last argument validator to return the parsed args");o=c}}return new Mo(t,r,...o)}}function v0(n,e,t){let i=n[0],r=c0[i];if(!r)throw new Error(`unknown operator: ${i}`);return r(n,e,t)}function Oo(n){if(!n)return"";let e=n.getType();switch(e){case"Point":case"LineString":case"Polygon":return e;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return e.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return Oo(n.getGeometries()[0]);default:return""}}var ci,Ao,He,re,Ye,et,mn,ui,Lo,ku,l0,Te,Mo,D,c0,zu=S(()=>{wt();Nt();Mt();ci=0,Ao=0,He=1<<ci++,re=1<<ci++,Ye=1<<ci++,et=1<<ci++,mn=1<<ci++,ui=1<<ci++,Lo=Math.pow(2,ci)-1,ku={[He]:"boolean",[re]:"number",[Ye]:"string",[et]:"color",[mn]:"number[]",[ui]:"size"},l0=Object.keys(ku).map(Number).sort(Qn);Te=class{constructor(e,t){if(!u0(e))throw new Error(`literal expressions must have a specific type, got ${pn(e)}`);this.type=e,this.value=t}},Mo=class{constructor(e,t,...i){this.type=e,this.operator=t,this.args=i}};D={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",LineMetric:"line-metric",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Coalesce:"coalesce",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette",ToString:"to-string",Has:"has"},c0={[D.Get]:Y(te(1,1/0),ap),[D.Var]:h0(),[D.Has]:Y(te(1,1/0),ap),[D.Id]:Y(f0,ar),[D.Concat]:Y(te(2,1/0),pe(Ye)),[D.GeometryType]:Y(d0,ar),[D.LineMetric]:Y(g0,ar),[D.Resolution]:Y(Fu,ar),[D.Zoom]:Y(Fu,ar),[D.Time]:Y(Fu,ar),[D.Any]:Y(te(2,1/0),pe(He)),[D.All]:Y(te(2,1/0),pe(He)),[D.Not]:Y(te(1,1),pe(He)),[D.Equal]:Y(te(2,2),up()),[D.NotEqual]:Y(te(2,2),up()),[D.GreaterThan]:Y(te(2,2),pe(re)),[D.GreaterThanOrEqualTo]:Y(te(2,2),pe(re)),[D.LessThan]:Y(te(2,2),pe(re)),[D.LessThanOrEqualTo]:Y(te(2,2),pe(re)),[D.Multiply]:Y(te(2,1/0),lp),[D.Coalesce]:Y(te(2,1/0),lp),[D.Divide]:Y(te(2,2),pe(re)),[D.Add]:Y(te(2,1/0),pe(re)),[D.Subtract]:Y(te(2,2),pe(re)),[D.Clamp]:Y(te(3,3),pe(re)),[D.Mod]:Y(te(2,2),pe(re)),[D.Pow]:Y(te(2,2),pe(re)),[D.Abs]:Y(te(1,1),pe(re)),[D.Floor]:Y(te(1,1),pe(re)),[D.Ceil]:Y(te(1,1),pe(re)),[D.Round]:Y(te(1,1),pe(re)),[D.Sin]:Y(te(1,1),pe(re)),[D.Cos]:Y(te(1,1),pe(re)),[D.Atan]:Y(te(1,2),pe(re)),[D.Sqrt]:Y(te(1,1),pe(re)),[D.Match]:Y(te(4,1/0),cp,m0),[D.Between]:Y(te(3,3),pe(re)),[D.Interpolate]:Y(te(6,1/0),cp,y0),[D.Case]:Y(te(3,1/0),p0,_0),[D.In]:Y(te(2,2),x0),[D.Number]:Y(te(1,1/0),pe(Lo)),[D.String]:Y(te(1,1/0),pe(Lo)),[D.Array]:Y(te(1,1/0),pe(re)),[D.Color]:Y(te(1,4),pe(re)),[D.Band]:Y(te(1,3),pe(re)),[D.Palette]:Y(te(2,2),E0),[D.ToString]:Y(te(1,1),pe(He|re|Ye|et))}});function ju(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function kt(n,e,t){let i=Ie(n,e,t);return Ft(i,t)}function Ft(n,e){if(n instanceof Te){if(n.type===et&&typeof n.value=="string"){let i=Qr(n.value);return function(){return i}}return function(){return n.value}}let t=n.operator;switch(t){case D.Number:case D.String:case D.Coalesce:return w0(n,e);case D.Get:case D.Var:case D.Has:return C0(n,e);case D.Id:return i=>i.featureId;case D.GeometryType:return i=>i.geometryType;case D.Concat:{let i=n.args.map(r=>Ft(r,e));return r=>"".concat(...i.map(o=>o(r).toString()))}case D.Resolution:return i=>i.resolution;case D.Any:case D.All:case D.Between:case D.In:case D.Not:return R0(n,e);case D.Equal:case D.NotEqual:case D.LessThan:case D.LessThanOrEqualTo:case D.GreaterThan:case D.GreaterThanOrEqualTo:return T0(n,e);case D.Multiply:case D.Divide:case D.Add:case D.Subtract:case D.Clamp:case D.Mod:case D.Pow:case D.Abs:case D.Floor:case D.Ceil:case D.Round:case D.Sin:case D.Cos:case D.Atan:case D.Sqrt:return b0(n,e);case D.Case:return I0(n,e);case D.Match:return S0(n,e);case D.Interpolate:return A0(n,e);case D.ToString:return L0(n,e);default:throw new Error(`Unsupported operator ${t}`)}}function w0(n,e){let t=n.operator,i=n.args.length,r=new Array(i);for(let o=0;o<i;++o)r[o]=Ft(n.args[o],e);switch(t){case D.Coalesce:return o=>{for(let l=0;l<i;++l){let c=r[l](o);if(typeof c<"u"&&c!==null)return c}throw new Error("Expected one of the values to be non-null")};case D.Number:case D.String:return o=>{for(let l=0;l<i;++l){let c=r[l](o);if(typeof c===t)return c}throw new Error(`Expected one of the values to be a ${t}`)};default:throw new Error(`Unsupported assertion operator ${t}`)}}function C0(n,e){let i=n.args[0].value;switch(n.operator){case D.Get:return r=>{let o=n.args,l=r.properties[i];for(let c=1,f=o.length;c<f;++c){let y=o[c].value;l=l[y]}return l};case D.Var:return r=>r.variables[i];case D.Has:return r=>{let o=n.args;if(!(i in r.properties))return!1;let l=r.properties[i];for(let c=1,f=o.length;c<f;++c){let y=o[c].value;if(!l||!Object.hasOwn(l,y))return!1;l=l[y]}return!0};default:throw new Error(`Unsupported accessor operator ${n.operator}`)}}function T0(n,e){let t=n.operator,i=Ft(n.args[0],e),r=Ft(n.args[1],e);switch(t){case D.Equal:return o=>i(o)===r(o);case D.NotEqual:return o=>i(o)!==r(o);case D.LessThan:return o=>i(o)<r(o);case D.LessThanOrEqualTo:return o=>i(o)<=r(o);case D.GreaterThan:return o=>i(o)>r(o);case D.GreaterThanOrEqualTo:return o=>i(o)>=r(o);default:throw new Error(`Unsupported comparison operator ${t}`)}}function R0(n,e){let t=n.operator,i=n.args.length,r=new Array(i);for(let o=0;o<i;++o)r[o]=Ft(n.args[o],e);switch(t){case D.Any:return o=>{for(let l=0;l<i;++l)if(r[l](o))return!0;return!1};case D.All:return o=>{for(let l=0;l<i;++l)if(!r[l](o))return!1;return!0};case D.Between:return o=>{let l=r[0](o),c=r[1](o),f=r[2](o);return l>=c&&l<=f};case D.In:return o=>{let l=r[0](o);for(let c=1;c<i;++c)if(l===r[c](o))return!0;return!1};case D.Not:return o=>!r[0](o);default:throw new Error(`Unsupported logical operator ${t}`)}}function b0(n,e){let t=n.operator,i=n.args.length,r=new Array(i);for(let o=0;o<i;++o)r[o]=Ft(n.args[o],e);switch(t){case D.Multiply:return o=>{let l=1;for(let c=0;c<i;++c)l*=r[c](o);return l};case D.Divide:return o=>r[0](o)/r[1](o);case D.Add:return o=>{let l=0;for(let c=0;c<i;++c)l+=r[c](o);return l};case D.Subtract:return o=>r[0](o)-r[1](o);case D.Clamp:return o=>{let l=r[0](o),c=r[1](o);if(l<c)return c;let f=r[2](o);return l>f?f:l};case D.Mod:return o=>r[0](o)%r[1](o);case D.Pow:return o=>Math.pow(r[0](o),r[1](o));case D.Abs:return o=>Math.abs(r[0](o));case D.Floor:return o=>Math.floor(r[0](o));case D.Ceil:return o=>Math.ceil(r[0](o));case D.Round:return o=>Math.round(r[0](o));case D.Sin:return o=>Math.sin(r[0](o));case D.Cos:return o=>Math.cos(r[0](o));case D.Atan:return i===2?o=>Math.atan2(r[0](o),r[1](o)):o=>Math.atan(r[0](o));case D.Sqrt:return o=>Math.sqrt(r[0](o));default:throw new Error(`Unsupported numeric operator ${t}`)}}function I0(n,e){let t=n.args.length,i=new Array(t);for(let r=0;r<t;++r)i[r]=Ft(n.args[r],e);return r=>{for(let o=0;o<t-1;o+=2)if(i[o](r))return i[o+1](r);return i[t-1](r)}}function S0(n,e){let t=n.args.length,i=new Array(t);for(let r=0;r<t;++r)i[r]=Ft(n.args[r],e);return r=>{let o=i[0](r);for(let l=1;l<t-1;l+=2)if(o===i[l](r))return i[l+1](r);return i[t-1](r)}}function A0(n,e){let t=n.args.length,i=new Array(t);for(let r=0;r<t;++r)i[r]=Ft(n.args[r],e);return r=>{let o=i[0](r),l=i[1](r),c,f;for(let m=2;m<t;m+=2){let y=i[m](r),x=i[m+1](r),w=Array.isArray(x);if(w&&(x=sp(x)),y>=l)return m===2?x:w?M0(o,l,c,f,y,x):ts(o,l,c,f,y,x);c=y,f=x}return f}}function L0(n,e){let t=n.operator,i=n.args.length,r=new Array(i);for(let o=0;o<i;++o)r[o]=Ft(n.args[o],e);if(t===D.ToString)return o=>{let l=r[0](o);return n.args[0].type===et?Jr(l):l.toString()};throw new Error(`Unsupported convert operator ${t}`)}function ts(n,e,t,i,r,o){let l=r-t;if(l===0)return i;let c=e-t,f=n===1?c/l:(Math.pow(n,c)-1)/(Math.pow(n,l)-1);return i+f*(o-i)}function M0(n,e,t,i,r,o){if(r-t===0)return i;let c=Nu(i),f=Nu(o),m=f[2]-c[2];m>180?m-=360:m<-180&&(m+=360);let y=[ts(n,e,t,c[0],r,f[0]),ts(n,e,t,c[1],r,f[1]),c[2]+ts(n,e,t,0,r,m),ts(n,e,t,i[3],r,o[3])];return op(y)}var hp=S(()=>{Nt();zu()});function Uu(n,e){let t=e?St(e):"null";return n+":"+t}var Gu,Ze,ns=S(()=>{Ln();Nt();Be();Gu=class{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=1024}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(let t in this.cache_){let i=this.cache_[t];(e++&3)===0&&!i.hasListener()&&(delete this.cache_[t],delete this.patternCache_[t],--this.cacheSize_)}}}get(e,t){let i=Uu(e,t);return i in this.cache_?this.cache_[i]:null}getPattern(e,t){let i=Uu(e,t);return i in this.patternCache_?this.patternCache_[i]:null}set(e,t,i,r){let o=Uu(e,t),l=o in this.cache_;this.cache_[o]=i,r&&(i.getImageState()===$.IDLE&&i.load(),i.getImageState()===$.LOADING?i.ready().then(()=>{this.patternCache_[o]=Ar().createPattern(i.getImage(1),"repeat")}):this.patternCache_[o]=Ar().createPattern(i.getImage(1),"repeat")),l||++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}};Ze=new Gu});function Wn(n,e,t,i,r,o){let l=e===void 0?void 0:Ze.get(e,r);return l||(l=new Do(n,n&&"src"in n?n.src||void 0:e,t,i,r),Ze.set(e,r,l,o)),o&&l&&!Ze.getPattern(e,r)&&Ze.set(e,r,l,o),l}var is,Do,fp,rs=S(()=>{Pa();Ln();Nt();Be();be();Sr();ns();is=null,Do=class extends On{constructor(e,t,i,r,o){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=i?.crossOrigin,this.referrerPolicy_=i?.referrerPolicy,this.canvas_={},this.color_=o,this.imageState_=r===void 0?$.IDLE:r,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=t,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===$.LOADED){is||(is=Ce(1,1,void 0,{willReadFrequently:!0})),is.drawImage(this.image_,0,0);try{is.getImageData(0,0,1,1),this.tainted_=!1}catch{is=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(K.CHANGE)}handleImageError_(){this.imageState_=$.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=$.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}setImage(e){this.image_=e}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){let e=this.size_[0],t=this.size_[1],i=Ce(e,t);i.fillRect(0,0,e,t),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===$.IDLE){this.image_||this.initializeImage_(),this.imageState_=$.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&gf(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==$.LOADED)return;let t=this.image_,i=Ce(Math.ceil(t.width*e),Math.ceil(t.height*e)),r=i.canvas;i.scale(e,e),i.drawImage(t,0,0),i.globalCompositeOperation="multiply",i.fillStyle=rp(this.color_),i.fillRect(0,0,r.width/e,r.height/e),i.globalCompositeOperation="destination-in",i.drawImage(t,0,0),this.canvas_[e]=r}ready(){return this.ready_||(this.ready_=new Promise(e=>{if(this.imageState_===$.LOADED||this.imageState_===$.ERROR)e();else{let t=()=>{(this.imageState_===$.LOADED||this.imageState_===$.ERROR)&&(this.removeEventListener(K.CHANGE,t),e())};this.addEventListener(K.CHANGE,t)}})),this.ready_}};fp=Do});function Xu(n){return n?Array.isArray(n)?Jr(n):typeof n=="object"&&"src"in n?P0(n):n:null}function P0(n){if(!n.offset||!n.size)return Ze.getPattern(n.src,n.color);let e=n.src+":"+n.offset,t=Ze.getPattern(e,n.color);if(t)return t;let i=Ze.get(n.src,null);if(i.getImageState()!==$.LOADED)return null;let r=Ce(n.size[0],n.size[1]);return r.drawImage(i.getImage(1),n.offset[0],n.offset[1],n.size[0],n.size[1],0,0,n.size[0],n.size[1]),Wn(r.canvas,e,void 0,$.LOADED,n.color,!0),Ze.getPattern(e,n.color)}var dp=S(()=>{Ln();Nt();Be();rs();ns()});var Wu,Vu,Ku,gp,pp,mp,yp,Bu=S(()=>{qt();Wu="#000",Vu="round",Ku="round",gp=10,pp="#000",mp=1,yp=new je});var qu,No,Hu=S(()=>{Mt();ze();qu=class n{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=we(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){let e=this.getScale();return new n({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return ee()}getImage(e){return ee()}getHitDetectionImage(){return ee()}getPixelRatio(e){return 1}getImageState(){return ee()}getImageSize(){return ee()}getOrigin(){return ee()}getSize(){return ee()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=we(e)}listenImageChange(e){ee()}load(){ee()}unlistenImageChange(e){ee()}ready(){return Promise.resolve()}},No=qu});var Yu,Fo,Zu=S(()=>{Ln();Nt();dp();Be();Bu();rs();ns();Hu();Yu=class n extends No{constructor(e){super({opacity:1,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode}),this.hitDetectionCanvas_=null,this.fill_=e.fill!==void 0?e.fill:null,this.origin_=[0,0],this.points_=e.points,this.radius=e.radius,this.radius2_=e.radius2,this.angle_=e.angle!==void 0?e.angle:0,this.stroke_=e.stroke!==void 0?e.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?$.LOADING:$.LOADED,this.imageState_===$.LOADING&&this.ready().then(()=>this.imageState_=$.LOADED),this.render()}clone(){let e=this.getScale(),t=new n({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}getAnchor(){let e=this.size_,t=this.getDisplacement(),i=this.getScaleArray();return[e[0]/2-t[0]/i[0],e[1]/2+t[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(e){let t=this.fill_?.getKey(),i=`${e},${this.angle_},${this.radius},${this.radius2_},${this.points_},${t}`+Object.values(this.renderOptions_).join(","),r=Ze.get(i,null)?.getImage(1);if(!r){let o=this.renderOptions_,l=Math.ceil(o.size*e),c=Ce(l,l);this.draw_(o,c,e),r=c.canvas;let f=new fp(r,void 0,null,$.LOADED,null);Ze.set(i,null,f),createImageBitmap(r).then(m=>{f.setImage(m)})}return r}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius}setRadius(e){this.radius!==e&&(this.radius=e,this.render())}getRadius2(){return this.radius2_}setRadius2(e){this.radius2_!==e&&(this.radius2_=e,this.render())}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,t,i){if(t===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return t;let r=this.radius,o=this.radius2_===void 0?r:this.radius2_;if(r<o){let d=r;r=o,o=d}let l=this.radius2_===void 0?this.points_:this.points_*2,c=2*Math.PI/l,f=o*Math.sin(c),m=Math.sqrt(o*o-f*f),y=r-m,x=Math.sqrt(f*f+y*y),w=x/f;if(e==="miter"&&w<=i)return w*t;let T=t/2/w,R=t/2*(y/x),O=Math.sqrt((r+T)*(r+T)+R*R)-r;if(this.radius2_===void 0||e==="bevel")return O*2;let P=r*Math.sin(c),z=Math.sqrt(r*r-P*P),j=o-z,F=Math.sqrt(P*P+j*j)/P;if(F<=i){let d=F*t/2-o-r;return 2*Math.max(O,d)}return O*2}createRenderOptions(){let e=Vu,t=Ku,i=0,r=null,o=0,l,c=0;this.stroke_&&(l=Xu(this.stroke_.getColor()??pp),c=this.stroke_.getWidth()??mp,r=this.stroke_.getLineDash(),o=this.stroke_.getLineDashOffset()??0,t=this.stroke_.getLineJoin()??Ku,e=this.stroke_.getLineCap()??Vu,i=this.stroke_.getMiterLimit()??gp);let f=this.calculateLineJoinSize_(t,c,i),m=Math.max(this.radius,this.radius2_||0),y=Math.ceil(2*m+f);return{strokeStyle:l,strokeWidth:c,size:y,lineCap:e,lineDash:r,lineDashOffset:o,lineJoin:t,miterLimit:i}}render(){this.renderOptions_=this.createRenderOptions();let e=this.renderOptions_.size;this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,t,i){if(t.scale(i,i),t.translate(e.size/2,e.size/2),this.createPath_(t),this.fill_){let r=this.fill_.getColor();r===null&&(r=Wu),t.fillStyle=Xu(r),t.fill()}e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}createHitDetectionCanvas_(e){let t;if(this.fill_){let i=this.fill_.getColor(),r=0;typeof i=="string"&&(i=St(i)),i===null?r=1:Array.isArray(i)&&(r=i.length===4?i[3]:1),r===0&&(t=Ce(e.size,e.size),this.drawHitDetectionCanvas_(e,t))}return t?t.canvas:this.getImage(1)}createPath_(e){let t=this.points_,i=this.radius;if(t===1/0)e.arc(0,0,i,0,2*Math.PI);else{let r=this.radius2_===void 0?i:this.radius2_;this.radius2_!==void 0&&(t*=2);let o=this.angle_-Math.PI/2,l=2*Math.PI/t;for(let c=0;c<t;c++){let f=o+c*l,m=c%2===0?i:r;e.lineTo(m*Math.cos(f),m*Math.sin(f))}e.closePath()}}drawHitDetectionCanvas_(e,t){t.translate(e.size/2,e.size/2),this.createPath_(t),t.fillStyle=Wu,t.fill(),e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}},Fo=Yu});var $u,ko,Qu=S(()=>{Zu();$u=class n extends Fo{constructor(e){e=e||{radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale!==void 0?e.scale:1,rotation:e.rotation!==void 0?e.rotation:0,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode})}clone(){let e=this.getScale(),t=new n({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}},ko=$u});var Ju,hi,zo=S(()=>{Ln();Nt();ze();rs();Ju=class n{constructor(e){e=e||{},this.patternImage_=null,this.color_=null,e.color!==void 0&&this.setColor(e.color)}clone(){let e=this.getColor();return new n({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(e){if(e!==null&&typeof e=="object"&&"src"in e){let t=Wn(null,e.src,{crossOrigin:"anonymous"},void 0,e.offset?null:e.color?e.color:null,!(e.offset&&e.size));t.ready().then(()=>{this.patternImage_=null}),t.getImageState()===$.IDLE&&t.load(),t.getImageState()===$.LOADING&&(this.patternImage_=t)}this.color_=e}getKey(){let e=this.getColor();return e?e instanceof CanvasPattern||e instanceof CanvasGradient?ye(e):typeof e=="object"&&"src"in e?e.src+":"+e.offset:St(e).toString():""}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}},hi=Ju});function _p(n,e,t,i){return t!==void 0&&i!==void 0?[t/n,i/e]:t!==void 0?t/n:i!==void 0?i/e:1}var ec,xp,Ep=S(()=>{Ln();lt();Nt();be();ze();rs();Hu();ec=class n extends No{constructor(e){e=e||{};let t=e.opacity!==void 0?e.opacity:1,i=e.rotation!==void 0?e.rotation:0,r=e.scale!==void 0?e.scale:1,o=e.rotateWithView!==void 0?e.rotateWithView:!1;super({opacity:t,rotation:i,scale:r,displacement:e.displacement!==void 0?e.displacement:[0,0],rotateWithView:o,declutterMode:e.declutterMode}),this.anchor_=e.anchor!==void 0?e.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin!==void 0?e.anchorOrigin:"top-left",this.anchorXUnits_=e.anchorXUnits!==void 0?e.anchorXUnits:"fraction",this.anchorYUnits_=e.anchorYUnits!==void 0?e.anchorYUnits:"fraction",this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null,this.referrerPolicy_=e.referrerPolicy;let l=e.img!==void 0?e.img:null,c=e.src;J(!(c!==void 0&&l),"`image` and `src` cannot be provided at the same time"),(c===void 0||c.length===0)&&l&&(c=l.src||ye(l)),J(c!==void 0&&c.length>0,"A defined and non-empty `src` or `image` must be provided"),J(!((e.width!==void 0||e.height!==void 0)&&e.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let f;if(e.src!==void 0?f=$.IDLE:l!==void 0&&("complete"in l?l.complete?f=l.src?$.LOADED:$.IDLE:f=$.LOADING:f=$.LOADED),this.color_=e.color!==void 0?St(e.color):null,this.iconImage_=Wn(l,c,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},f,this.color_),this.offset_=e.offset!==void 0?e.offset:[0,0],this.offsetOrigin_=e.offsetOrigin!==void 0?e.offsetOrigin:"top-left",this.origin_=null,this.size_=e.size!==void 0?e.size:null,this.initialOptions_,e.width!==void 0||e.height!==void 0){let m,y;if(e.size)[m,y]=e.size;else{let x=this.getImage(1);if(x.width&&x.height)m=x.width,y=x.height;else if(x instanceof HTMLImageElement){this.initialOptions_=e;let w=()=>{if(this.unlistenImageChange(w),!this.initialOptions_)return;let T=this.iconImage_.getSize();this.setScale(_p(T[0],T[1],e.width,e.height))};this.listenImageChange(w);return}}m!==void 0&&this.setScale(_p(m,y,e.width,e.height))}}clone(){let e,t,i;return this.initialOptions_?(t=this.initialOptions_.width,i=this.initialOptions_.height):(e=this.getScale(),e=Array.isArray(e)?e.slice():e),new n({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:e,width:t,height:i,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;let r=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!r)return null;e=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(e[0]*=r[0]),this.anchorYUnits_=="fraction"&&(e[1]*=r[1])}if(this.anchorOrigin_!="top-left"){if(!r)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(e[0]=-e[0]+r[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(e[1]=-e[1]+r[1])}this.normalizedAnchor_=e}let t=this.getDisplacement(),i=this.getScaleArray();return[e[0]-t[0]/i[0],e[1]+t[1]/i[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}setColor(e){let t=e?St(e):null;if(this.color_===t||this.color_&&t&&this.color_.length===t.length&&this.color_.every((l,c)=>l===t[c]))return;this.color_=t;let i=this.getSrc(),r=i!==void 0?null:this.getHitDetectionImage(),o=i!==void 0?$.IDLE:this.iconImage_.getImageState();this.iconImage_=Wn(r,i,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},o,this.color_)}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!="top-left"){let t=this.getSize(),i=this.iconImage_.getSize();if(!t||!i)return null;e=e.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(e[0]=i[0]-t[0]-e[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(e[1]=i[1]-t[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}setSrc(e){this.iconImage_=Wn(null,e,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},$.IDLE,this.color_)}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==$.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){let e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==$.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(K.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(K.CHANGE,e)}ready(){return this.iconImage_.ready()}},xp=ec});var tc,jo,nc=S(()=>{tc=class n{constructor(e){e=e||{},this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.offset_=e.offset,this.width_=e.width}clone(){let e=this.getColor();return new n({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),offset:this.getOffset(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getOffset(){return this.offset_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setOffset(e){this.offset_=e}setWidth(e){this.width_=e}},jo=tc});function wp(n){let e;if(typeof n=="function")e=n;else{let t;Array.isArray(n)?t=n:(J(typeof n.getZIndex=="function","Expected an `Style` or an array of `Style`"),t=[n]),e=function(){return t}}return e}function rc(n,e){if(!ic){let t=new hi({color:"rgba(255,255,255,0.4)"}),i=new jo({color:"#3399CC",width:1.25});ic=[new Uo({image:new ko({fill:t,stroke:i,radius:5}),fill:t,stroke:i})]}return ic}function vp(n){return n.getGeometry()}var Uo,ic,lr,sc=S(()=>{lt();Qu();zo();nc();Uo=class n{constructor(e){e=e||{},this.geometry_=null,this.geometryFunction_=vp,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}clone(){let e=this.getGeometry();return e&&typeof e=="object"&&(e=e.clone()),new n({geometry:e??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e=="function"?this.geometryFunction_=e:typeof e=="string"?this.geometryFunction_=function(t){return t.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=vp,this.geometry_=e}setZIndex(e){this.zIndex_=e}};ic=null;lr=Uo});var O0,oc,Cp,Tp=S(()=>{Mt();zo();O0="#333",oc=class n{constructor(e){e=e||{},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.keepUpright_=e.keepUpright,this.scale_=e.scale,this.scaleArray_=we(e.scale!==void 0?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill!==void 0?e.fill:new hi({color:O0}),this.maxAngle_=e.maxAngle!==void 0?e.maxAngle:Math.PI/4,this.placement_=e.placement!==void 0?e.placement:"point",this.overflow_=!!e.overflow,this.stroke_=e.stroke!==void 0?e.stroke:null,this.offsetX_=e.offsetX!==void 0?e.offsetX:0,this.offsetY_=e.offsetY!==void 0?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding,this.declutterMode_=e.declutterMode}clone(){let e=this.getScale();return new n({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),keepUpright:this.getKeepUpright(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()instanceof hi?this.getFill().clone():this.getFill(),stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getKeepUpright(){return this.keepUpright_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setKeepUpright(e){this.keepUpright_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=we(e!==void 0?e:1)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}},Cp=oc});function D0(n){return!0}function N0(n,e){e=e??Po();let t=F0(n,e),i=ju();return function(r,o){if(i.properties=r.getPropertiesInternal(),i.resolution=o,e.featureId){let l=r.getId();l!==void 0?i.featureId=l:i.featureId=null}return e.geometryType&&(i.geometryType=Oo(r.getGeometry())),t(i)}}function Rp(n,e){e=e??Po();let t=n.length,i=new Array(t);for(let l=0;l<t;++l)i[l]=ac(n[l],e);let r=ju(),o=new Array(t);return function(l,c){if(r.properties=l.getPropertiesInternal(),r.resolution=c,e.featureId){let m=l.getId();m!==void 0?r.featureId=m:r.featureId=null}e.geometryType&&(r.geometryType=Oo(l.getGeometry()));let f=0;for(let m=0;m<t;++m){let y=i[m](r);y&&(o[f]=y,f+=1)}return o.length=f,o}}function Ap(n,e){if(e=e??Po(),!Array.isArray(n))return Rp([n],e);let t=n.length;if("style"in n[0]){let o=new Array(t);for(let l=0;l<t;++l){let c=n[l];if(!("style"in c))throw new Error("Expected a list of rules with a style property");o[l]=c}return N0(o,e)}return Rp(n,e)}function F0(n,e){let t=n.length,i=new Array(t);for(let r=0;r<t;++r){let o=n[r],l="filter"in o?kt(o.filter,He,e):D0,c;if(Array.isArray(o.style)){let f=o.style.length;c=new Array(f);for(let m=0;m<f;++m)c[m]=ac(o.style[m],e)}else c=[ac(o.style,e)];i[r]={filter:l,styles:c}}return function(r){let o=[],l=!1;for(let c=0;c<t;++c){let f=i[c].filter;if(f(r)&&!(n[c].else&&l)){l=!0;for(let m of i[c].styles){let y=m(r);y&&o.push(y)}}}return o}}function ac(n,e){let t=ss(n,"",e),i=os(n,"",e),r=k0(n,e),o=z0(n,e),l=Xe(n,"z-index",e);if(!t&&!i&&!r&&!o&&!Us(n))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(n));let c=new lr;return function(f){let m=!0;if(t){let y=t(f);y&&(m=!1),c.setFill(y)}if(i){let y=i(f);y&&(m=!1),c.setStroke(y)}if(r){let y=r(f);y&&(m=!1),c.setText(y)}if(o){let y=o(f);y&&(m=!1),c.setImage(y)}return l&&c.setZIndex(l(f)),m?null:c}}function ss(n,e,t){let i;if(e+"fill-pattern-src"in n)i=X0(n,e+"fill-",t);else{if(n[e+"fill-color"]==="none")return o=>null;i=Xo(n,e+"fill-color",t)}if(!i)return null;let r=new hi;return function(o){let l=i(o);return l===Io?null:(r.setColor(l),r)}}function os(n,e,t){let i=Xe(n,e+"stroke-width",t),r=Xo(n,e+"stroke-color",t);if(!i&&!r)return null;let o=yn(n,e+"stroke-line-cap",t),l=yn(n,e+"stroke-line-join",t),c=Lp(n,e+"stroke-line-dash",t),f=Xe(n,e+"stroke-line-dash-offset",t),m=Xe(n,e+"stroke-miter-limit",t),y=Xe(n,e+"stroke-offset",t),x=new jo;return function(w){if(r){let T=r(w);if(T===Io)return null;x.setColor(T)}if(i&&x.setWidth(i(w)),o){let T=o(w);if(T!=="butt"&&T!=="round"&&T!=="square")throw new Error("Expected butt, round, or square line cap");x.setLineCap(T)}if(l){let T=l(w);if(T!=="bevel"&&T!=="round"&&T!=="miter")throw new Error("Expected bevel, round, or miter line join");x.setLineJoin(T)}return c&&x.setLineDash(c(w)),f&&x.setLineDashOffset(f(w)),m&&x.setMiterLimit(m(w)),y&&x.setOffset(y(w)),x}}function k0(n,e){let t="text-",i=yn(n,t+"value",e);if(!i)return null;let r=ss(n,t,e),o=ss(n,t+"background-",e),l=os(n,t,e),c=os(n,t+"background-",e),f=yn(n,t+"font",e),m=Xe(n,t+"max-angle",e),y=Xe(n,t+"offset-x",e),x=Xe(n,t+"offset-y",e),w=ur(n,t+"overflow",e),T=yn(n,t+"placement",e),R=Xe(n,t+"repeat",e),L=Wo(n,t+"scale",e),O=ur(n,t+"rotate-with-view",e),P=Xe(n,t+"rotation",e),z=yn(n,t+"align",e),j=yn(n,t+"justify",e),N=yn(n,t+"baseline",e),F=ur(n,t+"keep-upright",e),d=Lp(n,t+"padding",e),V=Vo(n,t+"declutter-mode"),X=new Cp({declutterMode:V});return function(k){if(X.setText(i(k)),r&&X.setFill(r(k)),o&&X.setBackgroundFill(o(k)),l&&X.setStroke(l(k)),c&&X.setBackgroundStroke(c(k)),f&&X.setFont(f(k)),m&&X.setMaxAngle(m(k)),y&&X.setOffsetX(y(k)),x&&X.setOffsetY(x(k)),w&&X.setOverflow(w(k)),T){let U=T(k);if(U!=="point"&&U!=="line")throw new Error("Expected point or line for text-placement");X.setPlacement(U)}if(R&&X.setRepeat(R(k)),L&&X.setScale(L(k)),O&&X.setRotateWithView(O(k)),P&&X.setRotation(P(k)),z){let U=z(k);if(U!=="left"&&U!=="center"&&U!=="right"&&U!=="end"&&U!=="start")throw new Error("Expected left, right, center, start, or end for text-align");X.setTextAlign(U)}if(j){let U=j(k);if(U!=="left"&&U!=="right"&&U!=="center")throw new Error("Expected left, right, or center for text-justify");X.setJustify(U)}if(N){let U=N(k);if(U!=="bottom"&&U!=="top"&&U!=="middle"&&U!=="alphabetic"&&U!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");X.setTextBaseline(U)}return d&&X.setPadding(d(k)),F&&X.setKeepUpright(F(k)),X}}function z0(n,e){return"icon-src"in n?j0(n,e):"shape-points"in n?U0(n,e):"circle-radius"in n?G0(n,e):null}function j0(n,e){let t="icon-",i=t+"src",r=Mp(n[i],i),o=Go(n,t+"anchor",e),l=Wo(n,t+"scale",e),c=Xe(n,t+"opacity",e),f=Go(n,t+"displacement",e),m=Xe(n,t+"rotation",e),y=ur(n,t+"rotate-with-view",e),x=Ip(n,t+"anchor-origin"),w=Sp(n,t+"anchor-x-units"),T=Sp(n,t+"anchor-y-units"),R=_n(n,t+"color"),L,O=null;R!==void 0&&(Array.isArray(R)&&R.length>0&&typeof R[0]=="string"?O=Xo(n,t+"color",e):L=Pp(R,t+"color"));let P=V0(n,t+"cross-origin"),z=K0(n,t+"offset"),j=Ip(n,t+"offset-origin"),N=lc(n,t+"width"),F=lc(n,t+"height"),d=W0(n,t+"size"),V=Vo(n,t+"declutter-mode"),X={src:r,anchorOrigin:x,anchorXUnits:w,anchorYUnits:T,crossOrigin:P,offset:z,offsetOrigin:j,height:F,width:N,size:d,declutterMode:V},k=null;return function(U){if(k)O&&k.setColor(O(U));else{let ne=O?O(U):L;k=new xp(ne!==void 0?Object.assign({},X,{color:ne}):Object.assign({},X))}return c&&k.setOpacity(c(U)),f&&k.setDisplacement(f(U)),m&&k.setRotation(m(U)),y&&k.setRotateWithView(y(U)),l&&k.setScale(l(U)),o&&k.setAnchor(o(U)),k}}function U0(n,e){let t="shape-",i=t+"points",r=t+"radius",o=uc(n[i],i);if(!(r in n))throw new Error(`Expected a number for ${r}`);let l=Xe(n,r,e),c=typeof n[r]=="number"?n[r]:5,f=t+"radius2",m=Xe(n,f,e),y=typeof n[f]=="number"?n[f]:void 0,x=ss(n,t,e),w=os(n,t,e),T=Wo(n,t+"scale",e),R=Go(n,t+"displacement",e),L=Xe(n,t+"rotation",e),O=ur(n,t+"rotate-with-view",e),P=lc(n,t+"angle"),z=Vo(n,t+"declutter-mode"),j=new Fo({points:o,radius:c,radius2:y,angle:P,declutterMode:z});return function(N){return l&&j.setRadius(l(N)),m&&j.setRadius2(m(N)),x&&j.setFill(x(N)),w&&j.setStroke(w(N)),R&&j.setDisplacement(R(N)),L&&j.setRotation(L(N)),O&&j.setRotateWithView(O(N)),T&&j.setScale(T(N)),j}}function G0(n,e){let t="circle-",i=ss(n,t,e),r=os(n,t,e),o=Xe(n,t+"radius",e),l=Wo(n,t+"scale",e),c=Go(n,t+"displacement",e),f=Xe(n,t+"rotation",e),m=ur(n,t+"rotate-with-view",e),y=Vo(n,t+"declutter-mode"),x=new ko({radius:5,declutterMode:y});return function(w){return o&&x.setRadius(o(w)),i&&x.setFill(i(w)),r&&x.setStroke(r(w)),c&&x.setDisplacement(c(w)),f&&x.setRotation(f(w)),m&&x.setRotateWithView(m(w)),l&&x.setScale(l(w)),x}}function _n(n,e){if(!(e in n))return;let t=n[e];return t===void 0?void 0:t}function Xe(n,e,t){let i=_n(n,e);if(i===void 0)return;let r=kt(i,re,t);return function(o){return uc(r(o),e)}}function yn(n,e,t){let i=_n(n,e);if(i===void 0)return null;let r=kt(i,Ye,t);return function(o){return Mp(r(o),e)}}function X0(n,e,t){let i=yn(n,e+"pattern-src",t),r=bp(n,e+"pattern-offset",t),o=bp(n,e+"pattern-size",t),l=Xo(n,e+"color",t);return function(c){return{src:i(c),offset:r&&r(c),size:o&&o(c),color:l&&l(c)}}}function ur(n,e,t){let i=_n(n,e);if(i===void 0)return null;let r=kt(i,He,t);return function(o){let l=r(o);if(typeof l!="boolean")throw new Error(`Expected a boolean for ${e}`);return l}}function Xo(n,e,t){let i=_n(n,e);if(i===void 0)return null;let r=kt(i,et,t);return function(o){return Pp(r(o),e)}}function Lp(n,e,t){let i=_n(n,e);if(i===void 0)return null;if(Array.isArray(i)&&(i.length===0||typeof i[0]!="string")){let o=i.map((l,c)=>{if(typeof l=="number")return()=>l;let f=kt(l,re,t);return function(m){return uc(f(m),`${e}[${c}]`)}});return function(l){let c=new Array(o.length);for(let f=0;f<o.length;++f)c[f]=o[f](l);return c}}let r=kt(i,mn,t);return function(o){return as(r(o),e)}}function Go(n,e,t){let i=_n(n,e);if(i===void 0)return null;let r=kt(i,mn,t);return function(o){let l=as(r(o),e);if(l.length!==2)throw new Error(`Expected two numbers for ${e}`);return l}}function bp(n,e,t){let i=_n(n,e);if(i===void 0)return null;let r=kt(i,mn,t);return function(o){return Op(r(o),e)}}function Wo(n,e,t){let i=_n(n,e);if(i===void 0)return null;let r=kt(i,mn|re,t);return function(o){return B0(r(o),e)}}function lc(n,e){let t=n[e];if(t!==void 0){if(typeof t!="number")throw new Error(`Expected a number for ${e}`);return t}}function W0(n,e){let t=n[e];if(t!==void 0){if(typeof t=="number")return we(t);if(!Array.isArray(t))throw new Error(`Expected a number or size array for ${e}`);if(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number")throw new Error(`Expected a number or size array for ${e}`);return t}}function V0(n,e){let t=n[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);return t}}function Ip(n,e){let t=n[e];if(t!==void 0){if(t!=="bottom-left"&&t!=="bottom-right"&&t!=="top-left"&&t!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);return t}}function Sp(n,e){let t=n[e];if(t!==void 0){if(t!=="pixels"&&t!=="fraction")throw new Error(`Expected pixels or fraction for ${e}`);return t}}function K0(n,e){let t=n[e];if(t!==void 0)return as(t,e)}function Vo(n,e){let t=n[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);if(t!=="declutter"&&t!=="obstacle"&&t!=="none")throw new Error(`Expected declutter, obstacle, or none for ${e}`);return t}}function as(n,e){if(!Array.isArray(n))throw new Error(`Expected an array for ${e}`);let t=n.length;for(let i=0;i<t;++i)if(typeof n[i]!="number")throw new Error(`Expected an array of numbers for ${e}`);return n}function Mp(n,e){if(typeof n!="string")throw new Error(`Expected a string for ${e}`);return n}function uc(n,e){if(typeof n!="number")throw new Error(`Expected a number for ${e}`);return n}function Pp(n,e){if(typeof n=="string")return n;let t=as(n,e),i=t.length;if(i<3||i>4)throw new Error(`Expected a color with 3 or 4 values for ${e}`);return t}function Op(n,e){let t=as(n,e);if(t.length!==2)throw new Error(`Expected an array of two numbers for ${e}`);return t}function B0(n,e){return typeof n=="number"?n:Op(n,e)}var Dp=S(()=>{Nt();hp();zu();Jn();Mt();Qu();zo();Ep();Zu();nc();sc();Tp()});function q0(n){if(n===void 0)return rc;if(!n)return null;if(typeof n=="function"||n instanceof lr)return n;if(Array.isArray(n)&&n.length===0)return[];if(Array.isArray(n)&&n[0]instanceof lr){let t=n.length,i=new Array(t);for(let r=0;r<t;++r){let o=n[r];if(!(o instanceof lr))throw new Error("Expected a list of style instances");i[r]=o}return i}return Ap(n)}var Np,cc,Fp,kp=S(()=>{np();Dp();sc();rr();Np={RENDER_ORDER:"renderOrder"},cc=class extends li{constructor(e){e=e||{};let t=Object.assign({},e);delete t.style,delete t.renderBuffer,delete t.updateWhileAnimating,delete t.updateWhileInteracting,super(t),this.declutter_=e.declutter?String(e.declutter):void 0,this.renderBuffer_=e.renderBuffer!==void 0?e.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0?e.updateWhileAnimating:!1,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0?e.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(Np.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e,t){let i=this.getDeclutter();i in e.declutter||(e.declutter[i]=new Yr(9)),this.getRenderer().renderDeclutter(e,t)}setRenderOrder(e){this.set(Np.RENDER_ORDER,e)}setStyle(e){this.style_=e===void 0?rc:e;let t=q0(e);this.styleFunction_=e===null?void 0:wp(t),this.changed()}setDeclutter(e){this.declutter_=e?String(e):void 0,this.changed()}};Fp=cc});var hc,Ko,fc=S(()=>{ln();hc=class extends Ve{constructor(e,t,i,r){super(e),this.inversePixelTransform=t,this.frameState=i,this.context=r}},Ko=hc});function H0(n,e){Ze.expire()}var dc,zp,jp=S(()=>{Ir();zi();ve();gt();rr();ns();Fn();ze();dc=class extends Pn{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){ee()}calculateMatrices2D(e){let t=e.viewState,i=e.coordinateToPixelTransform,r=e.pixelToCoordinateTransform;dn(i,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),to(r,i)}forEachFeatureAtCoordinate(e,t,i,r,o,l,c,f){let m,y=t.viewState;function x(N,F,d,V){return o.call(l,F,N?d:null,V)}let w=y.projection,T=wf(e.slice(),w),R=[[0,0]];if(w.canWrapX()&&r){let N=w.getExtent(),F=se(N);R.push([-F,0],[F,0])}let L=t.layerStatesArray,O=L.length,P=[],z=[];for(let N=0;N<R.length;N++)for(let F=O-1;F>=0;--F){let d=L[F],V=d.layer;if(V.hasRenderer()&&Kr(d,y)&&c.call(f,V)){let X=V.getRenderer(),k=V.getSource();if(X&&k){let U=k.getWrapX()?T:e,ne=x.bind(null,d.managed);z[0]=U[0]+R[N][0],z[1]=U[1]+R[N][1],m=X.forEachFeatureAtCoordinate(z,t,i,ne,P)}if(m)return m}}if(P.length===0)return;let j=1/P.length;return P.forEach((N,F)=>N.distanceSq+=F*j),P.sort((N,F)=>N.distanceSq-F.distanceSq),P.some(N=>m=N.callback(N.feature,N.layer,N.geometry)),m}hasFeatureAtCoordinate(e,t,i,r,o,l){return this.forEachFeatureAtCoordinate(e,t,i,r,ei,this,o,l)!==void 0}getMap(){return this.map_}renderFrame(e){ee()}scheduleExpireIconCache(e){Ze.canExpireCache()&&e.postRenderFunctions.push(H0)}};zp=dc});var gc,Up,Gp=S(()=>{Or();$i();Be();Ct();Vt();kp();rr();fc();Vr();Bu();Fn();jp();gc=class extends zp{constructor(e){super(e),this.fontChangeListenerKey_=Q(yp,gn.PROPERTYCHANGE,e.redrawText,e),this.element_=Ke?Ws():document.createElement("div");let t=this.element_.style;t.position="absolute",t.width="100%",t.height="100%",t.zIndex="0",this.element_.className=Zt+" ol-layers";let i=e.getViewport();i&&i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,t){let i=this.getMap();if(i.hasListener(e)){let r=new Ko(e,void 0,t);i.dispatchEvent(r)}}disposeInternal(){oe(this.fontChangeListenerKey_),this.element_.remove(),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(ft.PRECOMPOSE,e);let t=e.layerStatesArray.sort((y,x)=>y.zIndex-x.zIndex);t.some(y=>y.layer instanceof Fp&&y.layer.getDeclutter())&&(e.declutter={});let r=e.viewState;this.children_.length=0;let l=this.getMap().getTargetElement(),c;pt(l)&&(c=l.getContext("2d"),c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,l.width,l.height));let f=[],m=c?l:null;for(let y=0,x=t.length;y<x;++y){let w=t[y];e.layerIndex=y;let T=w.layer,R=T.getSourceState();if(!Kr(w,r)||R!="ready"&&R!="undefined"){T.unrender();continue}let L=T.render(e,m);L&&(L!==m&&(this.children_.push(L),m=L),f.push(w))}this.declutter(e,f),_f(this.element_,this.children_);for(let y of c?this.children_:[]){let x=y.firstElementChild||y,w=y.style.backgroundColor;if(w&&(!pt(x)||x.width>0)&&(c.fillStyle=w,c.fillRect(0,0,c.canvas.width,c.canvas.height)),!pt(x)||x.width===0)continue;c.save();let T=y.style.opacity||x.style.opacity;c.globalAlpha=T===""?1:Number(T);let R=x.style.transform;if(R)c.transform(...eo(R));else{let L=parseFloat(x.style.width)/x.width,O=parseFloat(x.style.height)/x.height;c.transform(L,0,0,O,0,0)}c.drawImage(x,0,0),c.restore()}this.dispatchRenderEvent(ft.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}declutter(e,t){if(e.declutter){for(let i=t.length-1;i>=0;--i){let r=t[i],o=r.layer;o.getDeclutter()&&o.renderDeclutter(e,r)}t.forEach(i=>i.layer.renderDeferred(e))}}},Up=gc});function Xp(n){if(n instanceof li){n.setMapInternal(null);return}n instanceof Wr&&n.getLayers().forEach(Xp)}function Wp(n,e){if(n instanceof li){n.setMapInternal(e);return}if(n instanceof Wr){let t=n.getLayers().getArray();for(let i=0,r=t.length;i<r;++i)Wp(t[i],e)}}function Y0(n){let e=null;n.keyboardEventTarget!==void 0&&(e=typeof n.keyboardEventTarget=="string"?document.getElementById(n.keyboardEventTarget):n.keyboardEventTarget);let t={},i=n.layers&&typeof n.layers.getLayers=="function"?n.layers:new Wr({layers:n.layers});t[Pe.LAYERGROUP]=i,t[Pe.TARGET]=n.target,t[Pe.VIEW]=n.view instanceof ht?n.view:new ht;let r;n.controls!==void 0&&(Array.isArray(n.controls)?r=new Je(n.controls.slice()):(J(typeof n.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),r=n.controls));let o;n.interactions!==void 0&&(Array.isArray(n.interactions)?o=new Je(n.interactions.slice()):(J(typeof n.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),o=n.interactions));let l;return n.overlays!==void 0?Array.isArray(n.overlays)?l=new Je(n.overlays.slice()):(J(typeof n.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),l=n.overlays):l=new Je,{controls:r,interactions:o,keyboardEventTarget:e,overlays:l,values:t}}var pc,mc,Vp=S(()=>{Nr();uo();yl();Sd();Fr();pl();El();vl();qt();Or();Od();mo();Tl();wt();lt();ka();_g();Be();Ct();be();ve();gt();Vt();Qg();Jg();rr();_l();Ot();Vr();Gp();Mt();Fn();ze();pc=class extends je{constructor(e){super(),e=e||{},this.on,this.once,this.un;let t=Y0(e);this.renderComplete_=!1,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:ff,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=fn(),this.pixelToCoordinateTransform_=fn(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,Ke||(this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_)),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,Ke||(this.resizeObserver_=new ResizeObserver(()=>this.updateSize())),this.controls=t.controls||(Ke?new Je:yg()),this.interactions=t.interactions||(Ke?new Je:$g({onFocusOnly:!0})),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Md(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Pe.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Pe.VIEW,this.handleViewChanged_),this.addChangeListener(Pe.SIZE,this.handleSizeChanged_),this.addChangeListener(Pe.TARGET,this.handleTargetChanged_),this.setProperties(t.values);let i=this;e.view&&!(e.view instanceof ht)&&e.view.then(function(r){i.setView(new ht(r))}),this.controls.addEventListener(Qe.ADD,r=>{r.element.setMap(this)}),this.controls.addEventListener(Qe.REMOVE,r=>{r.element.setMap(null)}),this.interactions.addEventListener(Qe.ADD,r=>{r.element.setMap(this)}),this.interactions.addEventListener(Qe.REMOVE,r=>{r.element.setMap(null)}),this.overlays_.addEventListener(Qe.ADD,r=>{this.addOverlayInternal_(r.element)}),this.overlays_.addEventListener(Qe.REMOVE,r=>{let o=r.element.getId();o!==void 0&&delete this.overlayIdIndex_[o.toString()],r.element.setMap(null)}),this.controls.forEach(r=>{r.setMap(this)}),this.interactions.forEach(r=>{r.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){Wp(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){let t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_?.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,i){if(!this.frameState_||!this.renderer_)return;let r=this.getCoordinateFromPixelInternal(e);i=i!==void 0?i:{};let o=i.hitTolerance!==void 0?i.hitTolerance:0,l=i.layerFilter!==void 0?i.layerFilter:ei,c=i.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,o,c,t,null,l,null)}getFeaturesAtPixel(e,t){let i=[];return this.forEachFeatureAtPixel(e,function(r){i.push(r)},t),i}getAllLayers(){let e=[];function t(i){i.forEach(function(r){r instanceof Wr?t(r.getLayers()):e.push(r)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;let i=this.getCoordinateFromPixelInternal(e);t=t!==void 0?t:{};let r=t.layerFilter!==void 0?t.layerFilter:ei,o=t.hitTolerance!==void 0?t.hitTolerance:0,l=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,o,l,r,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){let i=this.viewport_.getBoundingClientRect(),r=this.getSize(),o=i.width/r[0],l=i.height/r[1],c="changedTouches"in e?e.changedTouches[0]:e;return[(c.clientX-i.left)/o,(c.clientY-i.top)/l]}getTarget(){return this.get(Pe.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return Pr(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){let t=this.frameState_;return t?Ge(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){let t=this.overlayIdIndex_[e.toString()];return t!==void 0?t:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Pe.LAYERGROUP)}setLayers(e){let t=this.getLayerGroup();if(e instanceof Je){t.setLayers(e);return}let i=t.getLayers();i.clear(),i.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){let e=this.getLayerGroup().getLayerStatesArray();for(let t=0,i=e.length;t<i;++t){let r=e[t];if(!r.visible)continue;let o=r.layer.getRenderer();if(o&&!o.ready)return!0;let l=r.layer.getSource();if(l&&l.loading)return!0}return!1}getPixelFromCoordinate(e){let t=mt(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){let t=this.frameState_;return t?Ge(t.coordinateToPixelTransform,e.slice(0,2)):null}getPixelRatio(){return this.pixelRatio_}setPixelRatio(e){this.pixelRatio_!==e&&(this.pixelRatio_=e,this.render())}getRenderer(){return this.renderer_}getSize(){return this.get(Pe.SIZE)}getView(){return this.get(Pe.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){let e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,i,r){return Pd(this.frameState_,e,t,i,r)}handleBrowserEvent(e,t){t=t||e.type;let i=new Ht(t,this,e);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(e){if(!this.frameState_)return;let t=e.originalEvent,i=t.type;if(i===kr.POINTERDOWN||i===K.WHEEL||i===K.KEYDOWN){let r=this.getOwnerDocument(),o=this.viewport_.getRootNode?this.viewport_.getRootNode():r,l=t.target,c=o instanceof ShadowRoot?o.host===l?o.host.ownerDocument:o:o===r?r.documentElement:o;if(this.overlayContainerStopEvent_.contains(l)||!c.contains(l))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){let r=this.getInteractions().getArray().slice();for(let o=r.length-1;o>=0;o--){let l=r[o];if(l.getMap()!==this||!l.getActive()||!this.getTargetElement())continue;if(!l.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){let e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let r=this.maxTilesLoading_,o=r,l=e?e.viewHints:void 0,c=l?l[ct.ANIMATING]||l[ct.INTERACTING]:!1;if(c){let f=Date.now()-e.time>8;r=f?0:8,o=f?0:2}t.getTilesLoading()<r&&(c&&t.reprioritize(),t.loadMoreTiles(r,o))}e&&this.renderer_&&!e.animate&&(this.renderComplete_?(this.hasListener(ft.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(ft.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new kn(Yt.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new kn(Yt.LOADSTART,this,e))));let i=this.postRenderFunctions_;if(e)for(let r=0,o=i.length;r<o;++r)i[r](this,e);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let i=0,r=this.targetChangeHandlerKeys_.length;i<r;++i)oe(this.targetChangeHandlerKeys_[i]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(K.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(K.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,this.viewport_.remove()}if(this.targetElement_&&!pt(this.targetElement_)){this.resizeObserver_?.unobserve(this.targetElement_);let i=this.targetElement_.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.unobserve(i.host),this.setSize(void 0)}let e=this.getTarget(),t=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{if(pt(t)||t.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Up(this)),!pt(t)){this.mapBrowserEventHandler_=new Id(this,this.moveTolerance_);for(let r in _e)this.mapBrowserEventHandler_.addEventListener(_e[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(K.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(K.WHEEL,this.boundHandleBrowserEvent_,Gs?{passive:!1}:!1);let i;if(this.keyboardEventTarget_)i=this.keyboardEventTarget_;else{let r=t.getRootNode();i=r instanceof ShadowRoot?r.host:t}if(this.targetChangeHandlerKeys_=[Q(i,K.KEYDOWN,this.handleBrowserEvent,this),Q(i,K.KEYPRESS,this.handleBrowserEvent,this)],!pt(t)){let r=t.getRootNode();r instanceof ShadowRoot&&this.resizeObserver_.observe(r.host),this.resizeObserver_?.observe(t)}}this.updateSize()}}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(oe(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(oe(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);let e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=Q(e,gn.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Q(e,K.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(oe),this.layerGroupPropertyListenerKeys_=null);let e=this.getLayerGroup();e&&(this.handleLayerAdd_(new Dt("addlayer",e)),this.layerGroupPropertyListenerKeys_=[Q(e,gn.PROPERTYCHANGE,this.render,this),Q(e,K.CHANGE,this.render,this),Q(e,"addlayer",this.handleLayerAdd_,this),Q(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){if(!this.frameState_)return;let e=this.frameState_.layerStatesArray;for(let t=0,i=e.length;t<i;++t){let r=e[t].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){Xp(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){let t=this.getSize(),i=this.getView(),r=this.frameState_,o=null;if(t!==void 0&&wa(t)&&i&&i.isDef()){let l=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),c=i.getState();if(o={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:Tr(c.center,c.resolution,c.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:c,viewHints:l,wantedTiles:{},mapId:ye(this),renderTargets:{}},c.nextCenter&&c.nextResolution){let f=isNaN(c.nextRotation)?c.rotation:c.nextRotation;o.nextExtent=Tr(c.nextCenter,c.nextResolution,f,t)}}this.frameState_=o,this.renderer_.renderFrame(o),o&&(o.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,o.postRenderFunctions),r&&(!this.previousExtent_||!bn(this.previousExtent_)&&!vr(o.extent,this.previousExtent_))&&(this.dispatchEvent(new kn(Yt.MOVESTART,this,r)),this.previousExtent_=Yn(this.previousExtent_)),this.previousExtent_&&!o.viewHints[ct.ANIMATING]&&!o.viewHints[ct.INTERACTING]&&!vr(o.extent,this.previousExtent_)&&(this.dispatchEvent(new kn(Yt.MOVEEND,this,o)),jh(o.extent,this.previousExtent_))),this.dispatchEvent(new kn(Yt.POSTRENDER,this,o)),this.renderComplete_=(this.hasListener(Yt.LOADSTART)||this.hasListener(Yt.LOADEND)||this.hasListener(ft.RENDERCOMPLETE))&&!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady(),this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){let t=this.getLayerGroup();t&&this.handleLayerRemove_(new Dt("removelayer",t)),this.set(Pe.LAYERGROUP,e)}setSize(e){this.set(Pe.SIZE,e)}setTarget(e){this.set(Pe.TARGET,e)}setView(e){if(!e||e instanceof ht){this.set(Pe.VIEW,e);return}this.set(Pe.VIEW,new ht);let t=this;e.then(function(i){t.setView(new ht(i))})}updateSize(){let e=this.getTargetElement(),t;if(e){let r,o;if(pt(e)){let l=e.getContext("2d").getTransform();r=e.width/l.a,o=e.height/l.d}else{let l=getComputedStyle(e);r=e.offsetWidth-parseFloat(l.borderLeftWidth)-parseFloat(l.paddingLeft)-parseFloat(l.paddingRight)-parseFloat(l.borderRightWidth),o=e.offsetHeight-parseFloat(l.borderTopWidth)-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom)-parseFloat(l.borderBottomWidth)}!isNaN(r)&&!isNaN(o)&&(t=[Math.max(0,r),Math.max(0,o)],!wa(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&Ks("No map visible because the map container's width or height are 0."))}let i=this.getSize();t&&(!i||!In(t,i))&&(this.updateViewportSize_(t),this.setSize(t))}updateViewportSize_(e){let t=this.getView();t&&t.setViewportSize(e)}};mc=pc});function Bo(n){return n instanceof Image||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement||n instanceof ImageBitmap?n:null}var Z0,$0,yc,_c,Kp=S(()=>{Xs();Kt();Z0=new Error("disposed"),$0=[256,256],yc=class extends Di{constructor(e){let t=W.IDLE;super(e.tileCoord,t,{transition:e.transition,interpolate:e.interpolate}),this.loader_=e.loader,this.data_=null,this.error_=null,this.size_=e.size||null,this.controller_=e.controller||null}getSize(){if(this.size_)return this.size_;let e=Bo(this.data_);return e?[e.width,e.height]:$0}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==W.IDLE&&this.state!==W.ERROR)return;this.state=W.LOADING,this.changed();let e=this;this.loader_().then(function(t){e.data_=t,e.state=W.LOADED,e.changed()}).catch(function(t){e.error_=t,e.state=W.ERROR,e.changed()})}disposeInternal(){this.controller_&&(this.controller_.abort(Z0),this.controller_=null),super.disposeInternal()}},_c=yc});var xc,Ec,Bp=S(()=>{Ir();lt();xc=class{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}deleteOldest(){let e=this.pop();e instanceof Pn&&e.dispose()}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.deleteOldest()}clear(){for(;this.oldest_;)this.deleteOldest()}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){let i=this.entries_[e];return J(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(e){let t=this.entries_[e];return J(t!==void 0,"Tried to get a value for a key that does not exist in the cache"),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){let e=new Array(this.count_),t=0,i;for(i=this.newest_;i;i=i.older)e[t++]=i.key_;return e}getValues(){let e=new Array(this.count_),t=0,i;for(i=this.newest_;i;i=i.older)e[t++]=i.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){return this.entries_[e]?.value_}pop(){let e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){J(!(e in this.entries_),"Tried to set a value for a key that is used already");let i={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[e]=i,++this.count_}setSize(e){this.highWaterMark=e}},Ec=xc});var vc,qp,Hp=S(()=>{Be();vc=class{constructor(){this.instructions_=[],this.zIndex=0,this.offset_=0,this.pendingMethod_,this.context_=new Proxy(Ar(),{get:(e,t)=>{if(typeof e[t]=="function")return this.pendingMethod_=t,this.pushMethodArgs_},set:(e,t,i)=>(this.push_(t,i),!0)})}push_(...e){let t=this.instructions_,i=this.zIndex+this.offset_;t[i]||(t[i]=[]),t[i].push(...e)}pushMethodArgs_=(...e)=>{this.push_(this.pendingMethod_,e)};pushFunction(e){this.push_(e)}getContext(){return this.context_}draw(e){this.instructions_.forEach(t=>{for(let i=0,r=t.length;i<r;++i){let o=t[i];if(typeof o=="function"){o(e);continue}let l=t[++i];typeof e[o]=="function"?e[o](...l):typeof l=="function"?e[o]=l(e):e[o]=l}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}},qp=vc});var Q0,wc,Yp,Zp=S(()=>{Ln();sl();be();ze();Q0=5,wc=class extends ro{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.staleKeys_=new Array,this.maxStaleKeys=Q0,this.renderedSourceKey_}getStaleKeys(){return this.staleKeys_}prependStaleKey(e){this.staleKeys_.unshift(e),this.staleKeys_.length>this.maxStaleKeys&&(this.staleKeys_.length=this.maxStaleKeys)}updateStaleKeys(e){this.renderedSourceKey_?this.renderedSourceKey_!==e&&(this.prependStaleKey(this.renderedSourceKey_),this.renderedSourceKey_=e):this.renderedSourceKey_=e}getFeatures(e){return ee()}getData(e){return null}prepareFrame(e){return ee()}renderFrame(e,t){return ee()}forEachFeatureAtCoordinate(e,t,i,r,o){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){let t=e.target;(t.getState()===$.LOADED||t.getState()===$.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=$.LOADED&&t!=$.ERROR&&e.addEventListener(K.CHANGE,this.boundHandleImageChange_),t==$.IDLE&&(e.load(),t=e.getState()),t==$.LOADED}renderIfReadyAndVisible(){let e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}renderDeferred(e){}disposeInternal(){delete this.layer_,super.disposeInternal()}},Yp=wc});function J0(){cr=Ce(1,1,void 0,{willReadFrequently:!0})}var cr,Cc,$p,Qp=S(()=>{wt();Nt();Be();ve();Vt();fc();Vr();Hp();Fn();Zp();cr=null;Cc=class extends Yp{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=fn(),this.pixelTransform=fn(),this.inversePixelTransform=fn(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.frameState=null}getImageData(e,t,i){cr||J0(),cr.clearRect(0,0,1,1);let r;try{cr.drawImage(e,t,i,1,1,0,0,1,1),r=cr.getImageData(0,0,1,1).data}catch{return cr=null,null}return r}getBackground(e){let i=this.getLayer().getBackground();return typeof i=="function"&&(i=i(e.viewState.resolution)),i||void 0}useContainer(e,t,i,r,o){if(pt(e)&&this.pixelTransform[1]===0&&this.pixelTransform[2]===0&&this.pixelTransform[4]===0&&this.pixelTransform[5]===0&&e.width===r&&e.height===o){let m=e,y=m.getContext("2d");if(y){this.container=e,this.context=y,this.containerReused=!0,i&&(y.fillStyle=i,y.fillRect(0,0,m.width,m.height));return}}let l=this.getLayer().getClassName(),c,f;if(e&&e.className===l&&(!i||e&&e.style.backgroundColor&&In(St(e.style.backgroundColor),St(i)))){let m=e.firstElementChild;pt(m)&&(f=m.getContext("2d"))}if(f&&rd(f.canvas.style.transform,t)?(this.container=e,this.context=f,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){c=Ke?Ws():document.createElement("div"),c.className=l;let m=c.style;m.position="absolute",m.width="100%",m.height="100%",f=Ce();let y=f.canvas;c.appendChild(y),m=y.style,m.position="absolute",m.left="0",m.transformOrigin="top left",this.container=c,this.context=f}!this.containerReused&&i&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=i)}clipUnrotated(e,t,i){let r=ut(i),o=Ii(i),l=bi(i),c=Ri(i);Ge(t.coordinateToPixelTransform,r),Ge(t.coordinateToPixelTransform,o),Ge(t.coordinateToPixelTransform,l),Ge(t.coordinateToPixelTransform,c);let f=this.inversePixelTransform;Ge(f,r),Ge(f,o),Ge(f,l),Ge(f,c),e.save(),e.beginPath(),e.moveTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(l[0]),Math.round(l[1])),e.lineTo(Math.round(c[0]),Math.round(c[1])),e.clip()}prepareContainer(e,t){let i=e.extent,r=e.viewState.resolution,o=e.viewState.rotation,l=e.pixelRatio,c=Math.round(se(i)/r*l),f=Math.round(Ne(i)/r*l);dn(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/l,1/l,o,-c/2,-f/2),to(this.inversePixelTransform,this.pixelTransform);let m=id(this.pixelTransform),y=this.getBackground(e);if(this.useContainer(t,m,y,c,f),!this.containerReused){let x=this.context.canvas;x.width!=c||x.height!=f?(x.width=c,x.height=f):this.context.clearRect(0,0,c,f),m!==x.style.transform&&(x.style.transform=m)}}dispatchRenderEvent_(e,t,i){let r=this.getLayer();if(r.hasListener(e)){let o=new Ko(e,this.inversePixelTransform,i,t);r.dispatchEvent(o)}}preRender(e,t){this.frameState=t,!t.declutter&&this.dispatchRenderEvent_(ft.PRERENDER,e,t)}postRender(e,t){t.declutter||this.dispatchRenderEvent_(ft.POSTRENDER,e,t)}renderDeferredInternal(e){}getRenderContext(e){return e.declutter&&!this.deferredContext_&&(this.deferredContext_=new qp),e.declutter?this.deferredContext_.getContext():this.context}renderDeferred(e){e.declutter&&(this.dispatchRenderEvent_(ft.PRERENDER,this.context,e),e.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(e),this.dispatchRenderEvent_(ft.POSTRENDER,this.context,e))}getRenderTransform(e,t,i,r,o,l,c){let f=o/2,m=l/2,y=r/t,x=-y,w=-e[0]+c,T=-e[1];return dn(this.tempTransform,f,m,y,x,-i,w,T)}disposeInternal(){delete this.frameState,super.disposeInternal()}},$p=Cc});function Tc(n,e,t){if(!(t in n))return n[t]=new Set([e]),!0;let i=n[t],r=i.has(e);return r||i.add(e),!r}function ex(n,e,t){let i=n[t];return i?i.delete(e):!1}function Jp(n,e){let t=n.layerStatesArray[n.layerIndex];t.extent&&(e=Xt(e,Bt(t.extent,n.viewState.projection)));let i=t.layer.getRenderSource();if(!i.getWrapX()){let r=i.getTileGridForProjection(n.viewState.projection).getExtent();r&&(e=Xt(e,r))}return e}var Rc,em,tm=S(()=>{Kp();Vs();Ca();Kt();wt();ve();Ot();nl();Mt();Bp();Mi();Fn();ze();Qp();Rc=class extends $p{constructor(e,t){super(e),t=t||{},this.extentChanged=!0,this.renderComplete=!1,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedTiles=[],this.renderedSourceRevision_,this.tempExtent=vt(),this.tempTileRange_=new Ls(0,0,0,0),this.tempTileCoord_=Ai(0,0,0);let i=t.cacheSize!==void 0?t.cacheSize:512;this.tileCache_=new Ec(i),this.sourceTileCache_=null,this.layerExtent=null,this.maxStaleKeys=i*.5}getTileCache(){return this.tileCache_}getSourceTileCache(){return this.sourceTileCache_||(this.sourceTileCache_=new Ec(512)),this.sourceTileCache_}getOrCreateTile(e,t,i,r){let o=this.tileCache_,c=this.getLayer().getSource(),f=Li(c,c.getKey(),e,t,i),m;if(o.containsKey(f))m=o.get(f);else{let y=r.viewState.projection,x=c.getProjection();if(m=c.getTile(e,t,i,r.pixelRatio,y,!x||Vi(x,y)?void 0:this.getSourceTileCache()),!m)return null;o.set(f,m)}return m}getTile(e,t,i,r){let o=this.getOrCreateTile(e,t,i,r);return o||null}getData(e){let t=this.frameState;if(!t)return null;let i=this.getLayer(),r=Ge(t.pixelToCoordinateTransform,e.slice()),o=i.getExtent();if(o&&!Ti(o,r))return null;let l=t.viewState,c=i.getRenderSource(),f=c.getTileGridForProjection(l.projection),m=c.getTilePixelRatio(t.pixelRatio);for(let y=f.getZForResolution(l.resolution);y>=f.getMinZoom();--y){let x=f.getTileCoordForCoordAndZ(r,y),w=this.getTile(y,x[1],x[2],t);if(!w||w.getState()!==W.LOADED)continue;let T=f.getOrigin(y),R=we(f.getTileSize(y)),L=f.getResolution(y),O;if(w instanceof Fi||w instanceof no)O=w.getImage();else if(w instanceof _c){if(O=Bo(w.getData()),!O)continue}else continue;let P=Math.floor(m*((r[0]-T[0])/L-x[1]*R[0])),z=Math.floor(m*((T[1]-r[1])/L-x[2]*R[1])),j=Math.round(m*c.getGutterForProjection(l.projection));return this.getImageData(O,P+j,z+j)}return null}prepareFrame(e){this.renderedProjection?e.viewState.projection!==this.renderedProjection&&(this.tileCache_.clear(),this.renderedProjection=e.viewState.projection):this.renderedProjection=e.viewState.projection;let t=this.getLayer().getSource();if(!t)return!1;let i=t.getRevision();return this.renderedSourceRevision_?this.renderedSourceRevision_!==i&&(this.renderedSourceRevision_=i,this.renderedSourceKey_===t.getKey()&&(this.tileCache_.clear(),this.sourceTileCache_?.clear())):this.renderedSourceRevision_=i,!0}enqueueTilesForNextExtent(){return!0}enqueueTiles(e,t,i,r,o){let l=e.viewState,c=this.getLayer(),f=c.getRenderSource(),m=f.getTileGridForProjection(l.projection),y=ye(f);y in e.wantedTiles||(e.wantedTiles[y]={});let x=e.wantedTiles[y],w=c.getMapInternal(),T=Math.max(i-o,m.getMinZoom(),m.getZForResolution(Math.min(c.getMaxResolution(),w?w.getView().getResolutionForZoom(Math.max(c.getMinZoom(),0)):m.getResolution(0)),f.zDirection)),R=l.rotation,L=R?_a(l.center,l.resolution,R,e.size):void 0;for(let O=i;O>=T;--O){let P=m.getTileRangeForExtentAndZ(t,O,this.tempTileRange_),z=m.getResolution(O);for(let j=P.minX;j<=P.maxX;++j)for(let N=P.minY;N<=P.maxY;++N){if(R&&!m.tileCoordIntersectsViewport([O,j,N],L))continue;let F=this.getTile(O,j,N,e);if(!F||!Tc(r,F,O))continue;let V=F.getKey();if(x[V]=!0,F.getState()===W.IDLE&&!e.tileQueue.isKeyQueued(V)){let X=Ai(O,j,N,this.tempTileCoord_);e.tileQueue.enqueue([F,y,m.getTileCoordCenter(X),z])}}}}findStaleTile_(e,t){let i=this.tileCache_,r=e[0],o=e[1],l=e[2],c=this.getStaleKeys();for(let f=0;f<c.length;++f){let m=Li(this.getLayer().getSource(),c[f],r,o,l);if(i.containsKey(m)){let y=i.peek(m);if(y.getState()===W.LOADED)return y.endTransition(ye(this)),Tc(t,y,r),!0}}return!1}findAltTiles_(e,t,i,r){let o=e.getTileRangeForTileCoordAndZ(t,i,this.tempTileRange_);if(!o)return!1;let l=!0,c=this.tileCache_,f=this.getLayer().getRenderSource(),m=f.getKey();for(let y=o.minX;y<=o.maxX;++y)for(let x=o.minY;x<=o.maxY;++x){let w=Li(f,m,i,y,x),T=!1;if(c.containsKey(w)){let R=c.peek(w);R.getState()===W.LOADED&&(Tc(r,R,i),T=!0)}T||(l=!1)}return l}renderFrame(e,t){this.renderComplete=!0;let i=e.layerStatesArray[e.layerIndex],r=e.viewState,o=r.projection,l=r.resolution,c=r.center,f=e.pixelRatio,m=this.getLayer(),y=m.getSource(),x=y.getTileGridForProjection(o),w=x.getZForResolution(l,y.zDirection),T=x.getResolution(w);this.updateStaleKeys(y.getKey());let R=e.extent,L=y.getTilePixelRatio(f);this.prepareContainer(e,t);let O=this.context.canvas.width,P=this.context.canvas.height;this.layerExtent=i.extent?Bt(i.extent,o):null,this.layerExtent&&(R=Xt(R,this.layerExtent));let z=T*O/2/L,j=T*P/2/L,N=[c[0]-z,c[1]-j,c[0]+z,c[1]+j],F={};this.renderedTiles.length=0;let d=m.getPreload();if(e.nextExtent&&this.enqueueTilesForNextExtent()){let le=x.getZForResolution(r.nextResolution,y.zDirection),q=Jp(e,e.nextExtent);this.enqueueTiles(e,q,le,F,d)}let V=Jp(e,R);if(this.enqueueTiles(e,V,w,F,0),d>0&&setTimeout(()=>{this.enqueueTiles(e,V,w-1,F,d-1)},0),!(w in F))return this.container;let X=ye(this),k=e.time;for(let le of F[w]){let q=le.getState();if(q===W.EMPTY)continue;let ue=le.tileCoord;if(q===W.LOADED&&le.getAlpha(X,k)===1){le.endTransition(X);continue}if(q!==W.ERROR&&(this.renderComplete=!1),this.findStaleTile_(ue,F)){ex(F,le,w),e.animate=!0;continue}if(this.findAltTiles_(x,ue,w+1,F))continue;let Se=x.getMinZoom();for(let Ae=w-1;Ae>=Se&&!this.findAltTiles_(x,ue,Ae,F);--Ae);}let U=T/l*f/L,ne=this.getRenderContext(e);dn(this.tempTransform,O/2,P/2,U,U,0,-O/2,-P/2),this.layerExtent&&this.clipUnrotated(ne,e,this.layerExtent),y.getInterpolate()||(ne.imageSmoothingEnabled=!1),this.preRender(ne,e);let fe=Object.keys(F).map(Number);fe.sort(Qn);let ie=[],Oe=[],Ue=[];for(let le=fe.length-1;le>=0;--le){let q=fe[le],ue=y.getTilePixelSize(q,f,o),Re=x.getResolution(q)/T,Se=ue[0]*Re*U,Ae=ue[1]*Re*U,De=x.getTileCoordForCoordAndZ(ut(N),q),xn=x.getTileCoordExtent(De),nt=Ge(this.tempTransform,[L*(xn[0]-N[0])/T,L*(N[3]-xn[3])/T]),_t=L*y.getGutterForProjection(o);for(let de of F[q]){if(de.getState()!==W.LOADED)continue;let it=de.tileCoord,Vn=De[1]-it[1],xt=Math.round(nt[0]-(Vn-1)*Se),En=De[2]-it[2],qo=Math.round(nt[1]-(En-1)*Ae),zt=Math.round(nt[0]-Vn*Se),$e=Math.round(nt[1]-En*Ae),rt=xt-zt,fr=qo-$e,cs=q===w;if(cs&&de.inTransition(X)){Ue.push({tile:de,x:zt,y:$e,w:rt,h:fr,gutter:_t}),this.renderedTiles.unshift(de),this.updateUsedTiles(e.usedTiles,y,de);continue}let dr=[zt,$e,zt+rt,$e+fr],gr=[];for(let Kn=0,vn=ie.length;Kn<vn;++Kn)q<Oe[Kn]&&Wt(dr,ie[Kn])&&gr.push(ie[Kn]);let fi;gr.length>0&&(fi=Hh(dr,gr)),ie.push(dr),Oe.push(q),this.drawTile(de,e,zt,$e,rt,fr,_t,cs,fi),this.renderedTiles.unshift(de),this.updateUsedTiles(e.usedTiles,y,de)}}for(let le=0,q=Ue.length;le<q;++le){let{tile:ue,x:me,y:Re,w:Se,h:Ae,gutter:De}=Ue[le];this.drawTile(ue,e,me,Re,Se,Ae,De,!0,void 0)}if(this.renderedResolution=T,this.extentChanged=!this.renderedExtent_||!vr(this.renderedExtent_,N),this.renderedExtent_=N,this.renderedPixelRatio=f,this.postRender(this.context,e),this.layerExtent&&ne.restore(),ne.imageSmoothingEnabled=!0,this.renderComplete){let le=(q,ue)=>{let me=ye(y),Re=ue.wantedTiles[me],Se=Re?Object.keys(Re).length:0;this.updateCacheSize(Se),this.tileCache_.expireCache(),this.sourceTileCache_?.expireCache()};e.postRenderFunctions.push(le)}return this.container}updateCacheSize(e){this.tileCache_.highWaterMark=Math.max(this.tileCache_.highWaterMark,e*2)}drawTile(e,t,i,r,o,l,c,f,m){let y;if(e instanceof _c){if(y=Bo(e.getData()),!y)throw new Error("Rendering array data is not yet supported")}else y=this.getTileImage(e);if(!y)return;let x=this.getRenderContext(t),w=ye(this),T=t.layerStatesArray[t.layerIndex],R=T.opacity*(f?e.getAlpha(w,t.time):1),L=R!==x.globalAlpha;L&&(x.save(),x.globalAlpha=R);let O=y.width-2*c,P=y.height-2*c;if(m){let z=O/o,j=P/l;for(let N=0,F=m.length;N<F;++N){let d=m[N],V=d[0],X=d[1],k=d[2]-d[0],U=d[3]-d[1];x.drawImage(y,c+(V-i)*z,c+(X-r)*j,k*z,U*j,V,X,k,U)}}else x.drawImage(y,c,c,O,P,i,r,o,l);L&&x.restore(),R!==T.opacity?t.animate=!0:f&&e.endTransition(w)}getImage(){let e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}updateUsedTiles(e,t,i){let r=ye(t);r in e||(e[r]={}),e[r][i.getKey()]=!0}},em=Rc});var ls,nm=S(()=>{ls={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"}});var bc,im,rm=S(()=>{rr();nm();bc=class extends li{constructor(e){e=e||{};let t=Object.assign({},e),i=e.cacheSize;delete e.cacheSize,delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.cacheSize_=i,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(ls.PRELOAD)}setPreload(e){this.set(ls.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(ls.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(ls.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}},im=bc});var Ic,Sc,sm=S(()=>{tm();rm();Ic=class extends im{constructor(e){super(e)}createRenderer(){return new em(this,{cacheSize:this.getCacheSize()})}},Sc=Ic});function lm(n){let e=n.body;return!!(e.webkitRequestFullscreen||e.requestFullscreen&&n.fullscreenEnabled)}function um(n){return!!(n.webkitIsFullScreen||n.fullscreenElement)}function cm(n){n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}function tx(n){n.webkitRequestFullscreen?n.webkitRequestFullscreen():cm(n)}function nx(n){n.exitFullscreen?n.exitFullscreen():n.webkitExitFullscreen&&n.webkitExitFullscreen()}var om,am,Ac,Lc,hm=S(()=>{vl();$i();Be();Ct();be();Qi();om=["fullscreenchange","webkitfullscreenchange"],am={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"},Ac=class extends It{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target}),this.on,this.once,this.un,this.keys_=e.keys!==void 0?e.keys:!1,this.source_=e.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=e.className!==void 0?e.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=e.activeClassName!==void 0?e.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=e.inactiveClassName!==void 0?e.inactiveClassName.split(" "):[this.cssClassName_+"-false"];let t=e.label!==void 0?e.label:"\u2922";this.labelNode_=typeof t=="string"?document.createTextNode(t):t;let i=e.labelActive!==void 0?e.labelActive:"\xD7";this.labelActiveNode_=typeof i=="string"?document.createTextNode(i):i;let r=e.tipLabel?e.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=r,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener(K.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${Zt} ${zn}`,this.element.appendChild(this.button_)}handleClick_(e){e.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){let e=this.getMap();if(!e)return;let t=e.getOwnerDocument();if(lm(t))if(um(t))nx(t);else{let i;this.source_?i=typeof this.source_=="string"?t.getElementById(this.source_):this.source_:i=e.getTargetElement(),this.keys_?tx(i):cm(i)}}handleFullScreenChange_(){let e=this.getMap();if(!e)return;let t=this.isInFullscreen_;this.isInFullscreen_=um(e.getOwnerDocument()),t!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(Ni(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(am.ENTERFULLSCREEN)):(Ni(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(am.LEAVEFULLSCREEN)),e.updateSize())}setClassName_(e,t){t?(e.classList.remove(...this.inactiveClassName_),e.classList.add(...this.activeClassName_)):(e.classList.remove(...this.activeClassName_),e.classList.add(...this.inactiveClassName_))}setMap(e){let t=this.getMap();t&&t.removeChangeListener(Pe.TARGET,this.boundHandleMapTargetChange_),super.setMap(e),this.handleMapTargetChange_(),e&&e.addChangeListener(Pe.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){let e=this.documentListeners_;for(let i=0,r=e.length;i<r;++i)oe(e[i]);e.length=0;let t=this.getMap();if(t){let i=t.getOwnerDocument();lm(i)?this.element.classList.remove(Ql):this.element.classList.add(Ql);for(let r=0,o=om.length;r<o;++r)e.push(Q(i,om[r],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}};Lc=Ac});var fm=S(()=>{Qi();hm();iu();su()});function yt(n){return(e,...t)=>ix(n,e,t)}function hr(n,e){return yt(rx(n,e).get)}function Pc(){let n={colorSpace:Mc.DEFAULT_COLORSPACE,colorType:"float16",toneMapping:{mode:"extended"}};return Array.isArray(navigator.userAgent.match(/Version\/[\d.]+.*Safari/))&&(n.colorSpace="display-p3"),n}function vm(){HTMLCanvasElement.prototype._getContext=HTMLCanvasElement.prototype.getContext,HTMLCanvasElement.prototype.getContext=function(n,e){return e!==void 0?e=Object.assign({},e,Pc()):e=Pc(),this._getContext(n,e)}}function Dc(){try{let n=window.matchMedia("(dynamic-range: high)").matches;return!!((window.matchMedia("(color-gamut: rec2020)").matches||window.matchMedia("(color-gamut: p3)").matches)&&n)}catch(n){return console.error("Exception during check for HDR",n),!1}}function wm(){if(!Dc()||!dx())return!1;try{let n=document.createElement("canvas");if(!n.getContext)return!1;let e=Pc();return n.getContext("2d",e)!==null}catch(n){return console.error("Bad canvas ColorSpace test - make sure that the Chromium browser flag 'enable-experimental-web-platform-features' has been enabled",n),!1}return!1}function dx(){try{new ImageData(new Float16Array(4),1,1,{pixelFormat:"rgba-float16"})}catch(n){return console.error("Browser doesn't support Float16Array",n),!1}return!0}var Mc,ix,rx,Oc,sx,JA,eL,gm,ox,tL,ax,lx,dm,pm,tt,ux,mm,ym,_m,cx,hx,xm,nL,iL,Jt,en,Em,us,fx,Cm=S(()=>{Mc=class{static DEFAULT_COLORSPACE="rec2100-hlg";static SDR_MULTIPLIER=2**16-1;data;height;width;constructor(e,t){this.height=t,this.width=e}static fromImageData(e){throw new Error("Method not implemented!")}static fromImageDataArray(e,t,i){throw new Error("Method not implemented!")}static async loadSDRImageData(e){return fetch(e).then(t=>t.blob()).then(t=>createImageBitmap(t)).then(t=>{let{width:i,height:r}=t,l=new OffscreenCanvas(i,r).getContext("2d");return l.drawImage(t,0,0),l.getImageData(0,0,i,r)})}getPixel(e,t){let i=(t*this.width+e)*4;return this.data.slice(i,i+4)}setPixel(e,t,i){let r=(t*this.width+e)*4;this.data[r+0]=i[0],this.data[r+1]=i[1],this.data[r+2]=i[2],this.data[r+3]=i[3]}clone(){let e=Object.create(Object.getPrototypeOf(this));return Object.assign(e,this),e}};({apply:ix,getOwnPropertyDescriptor:rx,getPrototypeOf:Oc}=Reflect),{EPSILON:sx,isFinite:JA,isNaN:eL}=Number,{iterator:gm,toStringTag:ox}=Symbol,{abs:tL}=Math,ax=ArrayBuffer,lx=ax.prototype;hr(lx,"byteLength");dm=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;dm&&hr(dm.prototype,"byteLength");pm=Oc(Uint8Array);pm.from;tt=pm.prototype;tt[gm];yt(tt.keys);yt(tt.values);yt(tt.entries);yt(tt.set);yt(tt.reverse);yt(tt.fill);yt(tt.copyWithin);yt(tt.sort);yt(tt.slice);yt(tt.subarray);hr(tt,"buffer");hr(tt,"byteOffset");hr(tt,"length");hr(tt,ox);ux=Uint8Array,mm=Uint16Array,ym=Uint32Array,_m=Oc([][gm]());yt(_m.next);yt((function*(){})().next);Oc(_m);cx=1/sx,hx=6103515625e-14,xm=.0009765625,nL=xm*hx,iL=xm*cx,Jt=new mm(512),en=new ux(512);for(let n=0;n<256;++n){let e=n-127;e<-24?(Jt[n]=0,Jt[n|256]=32768,en[n]=24,en[n|256]=24):e<-14?(Jt[n]=1024>>-e-14,Jt[n|256]=1024>>-e-14|32768,en[n]=-e-1,en[n|256]=-e-1):e<=15?(Jt[n]=e+15<<10,Jt[n|256]=e+15<<10|32768,en[n]=13,en[n|256]=13):e<128?(Jt[n]=31744,Jt[n|256]=64512,en[n]=24,en[n|256]=24):(Jt[n]=31744,Jt[n|256]=64512,en[n]=13,en[n|256]=13)}Em=new ym(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Em[n]=e|t}for(let n=1024;n<2048;++n)Em[n]=939524096+(n-1024<<13);us=new ym(64);for(let n=1;n<31;++n)us[n]=n<<23;us[31]=1199570944;us[32]=2147483648;for(let n=33;n<63;++n)us[n]=2147483648+(n-32<<23);us[63]=3347054592;fx=new mm(64);for(let n=1;n<64;++n)n!==32&&(fx[n]=1024)});var gx={};var Nc,Fc,kc,Tm=S(()=>{Rd();va();Vp();sm();mo();fm();Ot();Cm();Nc=class extends ht{constructor(e){let t=e||{};super(e),this.pauseableAnimations_=[],this.animationsPointer_=-1,this.lastAnimation_={},this.initalCenter=this.getCenter()}getPauseableAnimation_(){return this.pauseableAnimations_.length-1>this.animationsPointer_?(this.animationsPointer_++,this.pauseableAnimations_[this.animationsPointer_]):(this.animationsPointer_=0,this.pauseableAnimations_[this.animationsPointer_])}nextAnimation_(e){if(e===void 0||e){var t=this,i=this.getPauseableAnimation_();this.animate(i,function(r){t.nextAnimation_(r)})}}pauseAnimation(){if(!this.getAnimating())return;var e=this.animations_[0][0],t=Date.now(),i=t-e.start;let r={center:e.center,zoom:e.zoom,rotation:e.rotation,duration:e.duration-i};this.lastAnimation_=r,this.cancelAnimations()}startAnimation_(){if(!this.getAnimating()){Object.keys(this.lastAnimation_).length!==0&&(this.lastAnimation_={});var e=this;this.animate(this.getPauseableAnimation_,function(t){e.nextAnimation_(t)})}}resumeAnimation(){if(!this.getAnimating())if(Object.keys(this.lastAnimation_).length===0)this.startAnimation_();else{var e=this;this.animate(this.lastAnimation_,function(t){e.nextAnimation_(t)})}}setPauseableAnimation(e){var t=new Array(arguments.length);for(let r=0;r<t.length;++r){var i=arguments[r];t[r]=i}this.animationsPointer_=-1,this.pauseableAnimations_=t}getPauseableAnimation(){return this.pauseableAnimations_}setCenter(e){this.initalCenter=e,this.setCenterInternal(mt(e,this.getProjection()))}isNoopAnimation(e){return!1}setResolutions(e){this.resolutions_=e}setExtent(e){var t={};t.extent=Bt(e,this.projection_),this.applyOptions_(t)}},Fc=class extends It{constructor(e){let t=e||{},i=t.tipLabel?t.tipLabel:"Rotate 90\xB0 left",r=document.createElement("button");r.innerHTML='<i class="icon-left"></i>',r.title=i;let o=document.createElement("div");o.className="rotate-left ol-unselectable ol-control",o.appendChild(r),super({element:o,target:t.target}),r.addEventListener("click",this.handleRotateLeft.bind(this),!1)}handleRotateLeft(){var e=this.getMap().getView().getRotation();this.getMap().getView().setRotation(e+-90*Math.PI/180)}},kc=class extends It{constructor(e){let t=e||{},i=t.tipLabel?t.tipLabel:"Rotate 90\xB0 right",r=document.createElement("button");r.innerHTML='<i class="icon-right"></i>',r.title=i;let o=document.createElement("div");o.className="rotate-right ol-unselectable ol-control",o.appendChild(r),super({element:o,target:t.target}),r.addEventListener("click",this.handleRotateRight.bind(this),!1)}handleRotateRight(){var e=this.getMap().getView().getRotation();this.getMap().getView().setRotation(e+90*Math.PI/180)}};window.addMap=function(n,e,t,i,r){var o=0;t!==void 0&&t!=0&&(o=t*Math.PI/180),r===void 0&&(r=!1);var l="en";document.documentElement.lang!==void 0&&(l=new Intl.Locale(document.documentElement.lang).language);var c={de:{zoomIn:"Vergr\xF6\xDFern",zoomOut:"Verkleinern",fullscreen:"Vollbildansicht",rotate:"Rotation zur\xFCcksetzen",rotateLeft:"90\xB0 nach links drehen",rotateRight:"90\xB0 nach rechst drehen"},en:{zoomIn:"Zoom in",zoomOut:"Zoom out",fullscreen:"Toggle full-screen",rotate:"Reset rotation",rotateLeft:"Rotate 90\xB0 left",rotateRight:"Rotate 90\xB0 right"}};console.log("Setting up "+l),r&&Dc()&&wm()&&(vm(),console.log("Enabled HDR Canvas"));var f=new Sc,m=new mc({controls:[new Gr({zoomInTipLabel:c[l].zoomIn,zoomOutTipLabel:c[l].zoomOut}),new Lc({tipLabel:c[l].fullscreen}),new Ur({tipLabel:c[l].rotate}),new Fc({tipLabel:c[l].rotateLeft}),new kc({tipLabel:c[l].rotateRight})],layers:[f],target:n});return fetch(e).then(function(y){y.json().then(function(x){var w=new Ea(x).getTileSourceOptions();if(w===void 0||w.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}w.zDirection=-1,i!==void 0&&i!=""&&(w.url=i);var T=new fl(w);f.setSource(T),m.setView(new ht({resolutions:T.getTileGrid().getResolutions(),extent:T.getTileGrid().getExtent(),constrainOnlyCenter:!0,rotation:o})),m.getView().fit(T.getTileGrid().getExtent())}).catch(function(x){console.log("Could not read image info json. "+x)})}).catch(function(){console.log("Could not read data from URL.")}),m};window.animatedMap=function(n,e,t,i,r,o,l,c){var f=0;t!==void 0&&t!=0&&(f=t*Math.PI/180);var m=new Sc,y=new mc({controls:[],layers:[m],target:n}),x=new Nc({constrainOnlyCenter:!0,rotation:f});return fetch(e).then(function(w){w.json().then(function(T){var R=new Ea(T).getTileSourceOptions();if(R===void 0||R.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}R.zDirection=-1,i!==void 0&&i!=""&&(R.url=i);var L=new fl(R);m.setSource(L),x.setExtent(L.getTileGrid().getExtent()),x.setResolutions(L.getTileGrid().getResolutions()),y.setView(x),y.getView().fit(L.getTileGrid().getExtent()),r!==void 0&&r!==""&&y.getView().setZoom(r),c!==void 0&&c!==""&&y.getView().setCenter(c)}).catch(function(T){console.log(`Could not read image info json from "${e}".`+T)})}).catch(function(){console.log("Could not read data from URL.")}),o!==void 0&&o!==""&&l!==void 0&&(Array.isArray(o)?x.setPauseableAnimation(...o):x.setPauseableAnimation(o),y.once("rendercomplete",function(){l.addEventListener("mouseenter",function(){x.resumeAnimation()}),l.addEventListener("mouseleave",function(w){x.pauseAnimation()})})),y}});window.$=window.jQuery=Fh();Tm();})();
/*! Bundled license information:

jquery/dist-module/jquery.module.js:
  (*!
   * jQuery JavaScript Library v4.0.0
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.com/license/
   *
   * Date: 2026-01-18T00:20Z
   *)
*/

;
(() => {
  // node_modules/tify/dist/tify.js
  var import_meta = {};
  function Nn(t) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const e of t.split(",")) i[e] = 1;
    return (e) => e in i;
  }
  var Te = {};
  var Kt = [];
  var lt = () => {
  };
  var ar = () => false;
  var Zi = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
  var Un = (t) => t.startsWith("onUpdate:");
  var ze = Object.assign;
  var Wn = (t, i) => {
    const e = t.indexOf(i);
    e > -1 && t.splice(e, 1);
  };
  var jo = Object.prototype.hasOwnProperty;
  var _e = (t, i) => jo.call(t, i);
  var de = Array.isArray;
  var Xt = (t) => Ki(t) === "[object Map]";
  var lr = (t) => Ki(t) === "[object Set]";
  var fe = (t) => typeof t == "function";
  var De = (t) => typeof t == "string";
  var wt = (t) => typeof t == "symbol";
  var be = (t) => t !== null && typeof t == "object";
  var ur = (t) => (be(t) || fe(t)) && fe(t.then) && fe(t.catch);
  var cr = Object.prototype.toString;
  var Ki = (t) => cr.call(t);
  var Go = (t) => Ki(t).slice(8, -1);
  var hr = (t) => Ki(t) === "[object Object]";
  var Xi = (t) => De(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t;
  var ai = Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var Yi = (t) => {
    const i = /* @__PURE__ */ Object.create(null);
    return (e) => i[e] || (i[e] = t(e));
  };
  var qo = /-\w/g;
  var Je = Yi((t) => t.replace(qo, (i) => i.slice(1).toUpperCase()));
  var Zo = /\B([A-Z])/g;
  var Dt = Yi((t) => t.replace(Zo, "-$1").toLowerCase());
  var Ji = Yi((t) => t.charAt(0).toUpperCase() + t.slice(1));
  var dn = Yi((t) => t ? `on${Ji(t)}` : "");
  var Pt = (t, i) => !Object.is(t, i);
  var Pi = (t, ...i) => {
    for (let e = 0; e < t.length; e++) t[e](...i);
  };
  var dr = (t, i, e, n = false) => {
    Object.defineProperty(t, i, { configurable: true, enumerable: false, writable: n, value: e });
  };
  var jn = (t) => {
    const i = parseFloat(t);
    return isNaN(i) ? t : i;
  };
  var gs;
  var Qi = () => gs || (gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Rt(t) {
    if (de(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) {
        const n = t[e], r = De(n) ? Jo(n) : Rt(n);
        if (r) for (const s in r) i[s] = r[s];
      }
      return i;
    } else if (De(t) || be(t)) return t;
  }
  var Ko = /;(?![^(]*\))/g;
  var Xo = /:([^]+)/;
  var Yo = /\/\*[^]*?\*\//g;
  function Jo(t) {
    const i = {};
    return t.replace(Yo, "").split(Ko).forEach((e) => {
      if (e) {
        const n = e.split(Xo);
        n.length > 1 && (i[n[0].trim()] = n[1].trim());
      }
    }), i;
  }
  function Pe(t) {
    let i = "";
    if (De(t)) i = t;
    else if (de(t)) for (let e = 0; e < t.length; e++) {
      const n = Pe(t[e]);
      n && (i += n + " ");
    }
    else if (be(t)) for (const e in t) t[e] && (i += e + " ");
    return i.trim();
  }
  var Qo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var $o = Nn(Qo);
  function fr(t) {
    return !!t || t === "";
  }
  var pr = (t) => !!(t && t.__v_isRef === true);
  var B = (t) => De(t) ? t : t == null ? "" : de(t) || be(t) && (t.toString === cr || !fe(t.toString)) ? pr(t) ? B(t.value) : JSON.stringify(t, gr, 2) : String(t);
  var gr = (t, i) => pr(i) ? gr(t, i.value) : Xt(i) ? { [`Map(${i.size})`]: [...i.entries()].reduce((e, [n, r], s) => (e[fn(n, s) + " =>"] = r, e), {}) } : lr(i) ? { [`Set(${i.size})`]: [...i.values()].map((e) => fn(e)) } : wt(i) ? fn(i) : be(i) && !de(i) && !hr(i) ? String(i) : i;
  var fn = (t, i = "") => {
    var e;
    return wt(t) ? `Symbol(${(e = t.description) != null ? e : i})` : t;
  };
  var Fe;
  var ea = class {
    constructor(i = false) {
      this.detached = i, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Fe, !i && Fe && (this.index = (Fe.scopes || (Fe.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let i, e;
        if (this.scopes) for (i = 0, e = this.scopes.length; i < e; i++) this.scopes[i].pause();
        for (i = 0, e = this.effects.length; i < e; i++) this.effects[i].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let i, e;
        if (this.scopes) for (i = 0, e = this.scopes.length; i < e; i++) this.scopes[i].resume();
        for (i = 0, e = this.effects.length; i < e; i++) this.effects[i].resume();
      }
    }
    run(i) {
      if (this._active) {
        const e = Fe;
        try {
          return Fe = this, i();
        } finally {
          Fe = e;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Fe, Fe = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Fe = this.prevScope, this.prevScope = void 0);
    }
    stop(i) {
      if (this._active) {
        this._active = false;
        let e, n;
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].stop();
        for (this.effects.length = 0, e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
        if (this.cleanups.length = 0, this.scopes) {
          for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !i) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  };
  function mr() {
    return Fe;
  }
  function ta(t, i = false) {
    Fe && Fe.cleanups.push(t);
  }
  var xe;
  var pn = /* @__PURE__ */ new WeakSet();
  var vr = class {
    constructor(i) {
      this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fe && Fe.active && Fe.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, pn.has(this) && (pn.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wr(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, ms(this), _r(this);
      const i = xe, e = tt;
      xe = this, tt = true;
      try {
        return this.fn();
      } finally {
        Tr(this), xe = i, tt = e, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let i = this.deps; i; i = i.nextDep) Zn(i);
        this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? pn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Rn(this) && this.run();
    }
    get dirty() {
      return Rn(this);
    }
  };
  var yr = 0;
  var li;
  var ui;
  function wr(t, i = false) {
    if (t.flags |= 8, i) {
      t.next = ui, ui = t;
      return;
    }
    t.next = li, li = t;
  }
  function Gn() {
    yr++;
  }
  function qn() {
    if (--yr > 0) return;
    if (ui) {
      let i = ui;
      for (ui = void 0; i; ) {
        const e = i.next;
        i.next = void 0, i.flags &= -9, i = e;
      }
    }
    let t;
    for (; li; ) {
      let i = li;
      for (li = void 0; i; ) {
        const e = i.next;
        if (i.next = void 0, i.flags &= -9, i.flags & 1) try {
          i.trigger();
        } catch (n) {
          t || (t = n);
        }
        i = e;
      }
    }
    if (t) throw t;
  }
  function _r(t) {
    for (let i = t.deps; i; i = i.nextDep) i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
  }
  function Tr(t) {
    let i, e = t.depsTail, n = e;
    for (; n; ) {
      const r = n.prevDep;
      n.version === -1 ? (n === e && (e = r), Zn(n), ia(n)) : i = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
    }
    t.deps = i, t.depsTail = e;
  }
  function Rn(t) {
    for (let i = t.deps; i; i = i.nextDep) if (i.dep.version !== i.version || i.dep.computed && (xr(i.dep.computed) || i.dep.version !== i.version)) return true;
    return !!t._dirty;
  }
  function xr(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === fi) || (t.globalVersion = fi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Rn(t)))) return;
    t.flags |= 2;
    const i = t.dep, e = xe, n = tt;
    xe = t, tt = true;
    try {
      _r(t);
      const r = t.fn(t._value);
      (i.version === 0 || Pt(r, t._value)) && (t.flags |= 128, t._value = r, i.version++);
    } catch (r) {
      throw i.version++, r;
    } finally {
      xe = e, tt = n, Tr(t), t.flags &= -3;
    }
  }
  function Zn(t, i = false) {
    const { dep: e, prevSub: n, nextSub: r } = t;
    if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), e.subs === t && (e.subs = n, !n && e.computed)) {
      e.computed.flags &= -5;
      for (let s = e.computed.deps; s; s = s.nextDep) Zn(s, true);
    }
    !i && !--e.sc && e.map && e.map.delete(e.key);
  }
  function ia(t) {
    const { prevDep: i, nextDep: e } = t;
    i && (i.nextDep = e, t.prevDep = void 0), e && (e.prevDep = i, t.nextDep = void 0);
  }
  var tt = true;
  var br = [];
  function gt() {
    br.push(tt), tt = false;
  }
  function mt() {
    const t = br.pop();
    tt = t === void 0 ? true : t;
  }
  function ms(t) {
    const { cleanup: i } = t;
    if (t.cleanup = void 0, i) {
      const e = xe;
      xe = void 0;
      try {
        i();
      } finally {
        xe = e;
      }
    }
  }
  var fi = 0;
  var na = class {
    constructor(i, e) {
      this.sub = i, this.dep = e, this.version = e.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  };
  var $i = class {
    constructor(i) {
      this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(i) {
      if (!xe || !tt || xe === this.computed) return;
      let e = this.activeLink;
      if (e === void 0 || e.sub !== xe) e = this.activeLink = new na(xe, this), xe.deps ? (e.prevDep = xe.depsTail, xe.depsTail.nextDep = e, xe.depsTail = e) : xe.deps = xe.depsTail = e, Er(e);
      else if (e.version === -1 && (e.version = this.version, e.nextDep)) {
        const n = e.nextDep;
        n.prevDep = e.prevDep, e.prevDep && (e.prevDep.nextDep = n), e.prevDep = xe.depsTail, e.nextDep = void 0, xe.depsTail.nextDep = e, xe.depsTail = e, xe.deps === e && (xe.deps = n);
      }
      return e;
    }
    trigger(i) {
      this.version++, fi++, this.notify(i);
    }
    notify(i) {
      Gn();
      try {
        for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
      } finally {
        qn();
      }
    }
  };
  function Er(t) {
    if (t.dep.sc++, t.sub.flags & 4) {
      const i = t.dep.computed;
      if (i && !t.dep.subs) {
        i.flags |= 20;
        for (let n = i.deps; n; n = n.nextDep) Er(n);
      }
      const e = t.dep.subs;
      e !== t && (t.prevSub = e, e && (e.nextSub = t)), t.dep.subs = t;
    }
  }
  var Hi = /* @__PURE__ */ new WeakMap();
  var Bt = /* @__PURE__ */ Symbol("");
  var Dn = /* @__PURE__ */ Symbol("");
  var pi = /* @__PURE__ */ Symbol("");
  function Be(t, i, e) {
    if (tt && xe) {
      let n = Hi.get(t);
      n || Hi.set(t, n = /* @__PURE__ */ new Map());
      let r = n.get(e);
      r || (n.set(e, r = new $i()), r.map = n, r.key = e), r.track();
    }
  }
  function ft(t, i, e, n, r, s) {
    const o = Hi.get(t);
    if (!o) {
      fi++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if (Gn(), i === "clear") o.forEach(l);
    else {
      const a = de(t), u = a && Xi(e);
      if (a && e === "length") {
        const c = Number(n);
        o.forEach((h, f) => {
          (f === "length" || f === pi || !wt(f) && f >= c) && l(h);
        });
      } else switch ((e !== void 0 || o.has(void 0)) && l(o.get(e)), u && l(o.get(pi)), i) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Bt)), Xt(t) && l(o.get(Dn)));
          break;
        case "delete":
          a || (l(o.get(Bt)), Xt(t) && l(o.get(Dn)));
          break;
        case "set":
          Xt(t) && l(o.get(Bt));
          break;
      }
    }
    qn();
  }
  function sa(t, i) {
    const e = Hi.get(t);
    return e && e.get(i);
  }
  function Gt(t) {
    const i = we(t);
    return i === t ? i : (Be(i, "iterate", pi), Ke(t) ? i : i.map(it));
  }
  function en(t) {
    return Be(t = we(t), "iterate", pi), t;
  }
  function Et(t, i) {
    return vt(t) ? $t(Vt(t) ? it(i) : i) : it(i);
  }
  var ra = { __proto__: null, [Symbol.iterator]() {
    return gn(this, Symbol.iterator, (t) => Et(this, t));
  }, concat(...t) {
    return Gt(this).concat(...t.map((i) => de(i) ? Gt(i) : i));
  }, entries() {
    return gn(this, "entries", (t) => (t[1] = Et(this, t[1]), t));
  }, every(t, i) {
    return ht(this, "every", t, i, void 0, arguments);
  }, filter(t, i) {
    return ht(this, "filter", t, i, (e) => e.map((n) => Et(this, n)), arguments);
  }, find(t, i) {
    return ht(this, "find", t, i, (e) => Et(this, e), arguments);
  }, findIndex(t, i) {
    return ht(this, "findIndex", t, i, void 0, arguments);
  }, findLast(t, i) {
    return ht(this, "findLast", t, i, (e) => Et(this, e), arguments);
  }, findLastIndex(t, i) {
    return ht(this, "findLastIndex", t, i, void 0, arguments);
  }, forEach(t, i) {
    return ht(this, "forEach", t, i, void 0, arguments);
  }, includes(...t) {
    return mn(this, "includes", t);
  }, indexOf(...t) {
    return mn(this, "indexOf", t);
  }, join(t) {
    return Gt(this).join(t);
  }, lastIndexOf(...t) {
    return mn(this, "lastIndexOf", t);
  }, map(t, i) {
    return ht(this, "map", t, i, void 0, arguments);
  }, pop() {
    return ni(this, "pop");
  }, push(...t) {
    return ni(this, "push", t);
  }, reduce(t, ...i) {
    return vs(this, "reduce", t, i);
  }, reduceRight(t, ...i) {
    return vs(this, "reduceRight", t, i);
  }, shift() {
    return ni(this, "shift");
  }, some(t, i) {
    return ht(this, "some", t, i, void 0, arguments);
  }, splice(...t) {
    return ni(this, "splice", t);
  }, toReversed() {
    return Gt(this).toReversed();
  }, toSorted(t) {
    return Gt(this).toSorted(t);
  }, toSpliced(...t) {
    return Gt(this).toSpliced(...t);
  }, unshift(...t) {
    return ni(this, "unshift", t);
  }, values() {
    return gn(this, "values", (t) => Et(this, t));
  } };
  function gn(t, i, e) {
    const n = en(t), r = n[i]();
    return n !== t && !Ke(t) && (r._next = r.next, r.next = () => {
      const s = r._next();
      return s.done || (s.value = e(s.value)), s;
    }), r;
  }
  var oa = Array.prototype;
  function ht(t, i, e, n, r, s) {
    const o = en(t), l = o !== t && !Ke(t), a = o[i];
    if (a !== oa[i]) {
      const h = a.apply(t, s);
      return l ? it(h) : h;
    }
    let u = e;
    o !== t && (l ? u = function(h, f) {
      return e.call(this, Et(t, h), f, t);
    } : e.length > 2 && (u = function(h, f) {
      return e.call(this, h, f, t);
    }));
    const c = a.call(o, u, n);
    return l && r ? r(c) : c;
  }
  function vs(t, i, e, n) {
    const r = en(t);
    let s = e;
    return r !== t && (Ke(t) ? e.length > 3 && (s = function(o, l, a) {
      return e.call(this, o, l, a, t);
    }) : s = function(o, l, a) {
      return e.call(this, o, Et(t, l), a, t);
    }), r[i](s, ...n);
  }
  function mn(t, i, e) {
    const n = we(t);
    Be(n, "iterate", pi);
    const r = n[i](...e);
    return (r === -1 || r === false) && nn(e[0]) ? (e[0] = we(e[0]), n[i](...e)) : r;
  }
  function ni(t, i, e = []) {
    gt(), Gn();
    const n = we(t)[i].apply(t, e);
    return qn(), mt(), n;
  }
  var aa = Nn("__proto__,__v_isRef,__isVue");
  var Cr = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(wt));
  function la(t) {
    wt(t) || (t = String(t));
    const i = we(this);
    return Be(i, "has", t), i.hasOwnProperty(t);
  }
  var Sr = class {
    constructor(i = false, e = false) {
      this._isReadonly = i, this._isShallow = e;
    }
    get(i, e, n) {
      if (e === "__v_skip") return i.__v_skip;
      const r = this._isReadonly, s = this._isShallow;
      if (e === "__v_isReactive") return !r;
      if (e === "__v_isReadonly") return r;
      if (e === "__v_isShallow") return s;
      if (e === "__v_raw") return n === (r ? s ? ya : Ar : s ? Dr : Rr).get(i) || Object.getPrototypeOf(i) === Object.getPrototypeOf(n) ? i : void 0;
      const o = de(i);
      if (!r) {
        let a;
        if (o && (a = ra[e])) return a;
        if (e === "hasOwnProperty") return la;
      }
      const l = Reflect.get(i, e, Le(i) ? i : n);
      if ((wt(e) ? Cr.has(e) : aa(e)) || (r || Be(i, "get", e), s)) return l;
      if (Le(l)) {
        const a = o && Xi(e) ? l : l.value;
        return r && be(a) ? Oi(a) : a;
      }
      return be(l) ? r ? Oi(l) : tn(l) : l;
    }
  };
  var Pr = class extends Sr {
    constructor(i = false) {
      super(false, i);
    }
    set(i, e, n, r) {
      let s = i[e];
      const o = de(i) && Xi(e);
      if (!this._isShallow) {
        const u = vt(s);
        if (!Ke(n) && !vt(n) && (s = we(s), n = we(n)), !o && Le(s) && !Le(n)) return u || (s.value = n), true;
      }
      const l = o ? Number(e) < i.length : _e(i, e), a = Reflect.set(i, e, n, Le(i) ? i : r);
      return i === we(r) && (l ? Pt(n, s) && ft(i, "set", e, n) : ft(i, "add", e, n)), a;
    }
    deleteProperty(i, e) {
      const n = _e(i, e);
      i[e];
      const r = Reflect.deleteProperty(i, e);
      return r && n && ft(i, "delete", e, void 0), r;
    }
    has(i, e) {
      const n = Reflect.has(i, e);
      return (!wt(e) || !Cr.has(e)) && Be(i, "has", e), n;
    }
    ownKeys(i) {
      return Be(i, "iterate", de(i) ? "length" : Bt), Reflect.ownKeys(i);
    }
  };
  var ua = class extends Sr {
    constructor(i = false) {
      super(true, i);
    }
    set(i, e) {
      return true;
    }
    deleteProperty(i, e) {
      return true;
    }
  };
  var ca = new Pr();
  var ha = new ua();
  var da = new Pr(true);
  var An = (t) => t;
  var Ei = (t) => Reflect.getPrototypeOf(t);
  function fa(t, i, e) {
    return function(...n) {
      const r = this.__v_raw, s = we(r), o = Xt(s), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, u = r[t](...n), c = e ? An : i ? $t : it;
      return !i && Be(s, "iterate", a ? Dn : Bt), ze(Object.create(u), { next() {
        const { value: h, done: f } = u.next();
        return f ? { value: h, done: f } : { value: l ? [c(h[0]), c(h[1])] : c(h), done: f };
      } });
    };
  }
  function Ci(t) {
    return function(...i) {
      return t === "delete" ? false : t === "clear" ? void 0 : this;
    };
  }
  function pa(t, i) {
    const e = { get(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      t || (Pt(r, l) && Be(o, "get", r), Be(o, "get", l));
      const { has: a } = Ei(o), u = i ? An : t ? $t : it;
      if (a.call(o, r)) return u(s.get(r));
      if (a.call(o, l)) return u(s.get(l));
      s !== o && s.get(r);
    }, get size() {
      const r = this.__v_raw;
      return !t && Be(we(r), "iterate", Bt), r.size;
    }, has(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      return t || (Pt(r, l) && Be(o, "has", r), Be(o, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    }, forEach(r, s) {
      const o = this, l = o.__v_raw, a = we(l), u = i ? An : t ? $t : it;
      return !t && Be(a, "iterate", Bt), l.forEach((c, h) => r.call(s, u(c), u(h), o));
    } };
    return ze(e, t ? { add: Ci("add"), set: Ci("set"), delete: Ci("delete"), clear: Ci("clear") } : { add(r) {
      !i && !Ke(r) && !vt(r) && (r = we(r));
      const s = we(this);
      return Ei(s).has.call(s, r) || (s.add(r), ft(s, "add", r, r)), this;
    }, set(r, s) {
      !i && !Ke(s) && !vt(s) && (s = we(s));
      const o = we(this), { has: l, get: a } = Ei(o);
      let u = l.call(o, r);
      u || (r = we(r), u = l.call(o, r));
      const c = a.call(o, r);
      return o.set(r, s), u ? Pt(s, c) && ft(o, "set", r, s) : ft(o, "add", r, s), this;
    }, delete(r) {
      const s = we(this), { has: o, get: l } = Ei(s);
      let a = o.call(s, r);
      a || (r = we(r), a = o.call(s, r)), l && l.call(s, r);
      const u = s.delete(r);
      return a && ft(s, "delete", r, void 0), u;
    }, clear() {
      const r = we(this), s = r.size !== 0, o = r.clear();
      return s && ft(r, "clear", void 0, void 0), o;
    } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      e[r] = fa(r, t, i);
    }), e;
  }
  function Kn(t, i) {
    const e = pa(t, i);
    return (n, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? n : Reflect.get(_e(e, r) && r in n ? e : n, r, s);
  }
  var ga = { get: Kn(false, false) };
  var ma = { get: Kn(false, true) };
  var va = { get: Kn(true, false) };
  var Rr = /* @__PURE__ */ new WeakMap();
  var Dr = /* @__PURE__ */ new WeakMap();
  var Ar = /* @__PURE__ */ new WeakMap();
  var ya = /* @__PURE__ */ new WeakMap();
  function wa(t) {
    switch (t) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function _a(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : wa(Go(t));
  }
  function tn(t) {
    return vt(t) ? t : Xn(t, false, ca, ga, Rr);
  }
  function Ta(t) {
    return Xn(t, false, da, ma, Dr);
  }
  function Oi(t) {
    return Xn(t, true, ha, va, Ar);
  }
  function Xn(t, i, e, n, r) {
    if (!be(t) || t.__v_raw && !(i && t.__v_isReactive)) return t;
    const s = _a(t);
    if (s === 0) return t;
    const o = r.get(t);
    if (o) return o;
    const l = new Proxy(t, s === 2 ? n : e);
    return r.set(t, l), l;
  }
  function Vt(t) {
    return vt(t) ? Vt(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function vt(t) {
    return !!(t && t.__v_isReadonly);
  }
  function Ke(t) {
    return !!(t && t.__v_isShallow);
  }
  function nn(t) {
    return t ? !!t.__v_raw : false;
  }
  function we(t) {
    const i = t && t.__v_raw;
    return i ? we(i) : t;
  }
  function xa(t) {
    return !_e(t, "__v_skip") && Object.isExtensible(t) && dr(t, "__v_skip", true), t;
  }
  var it = (t) => be(t) ? tn(t) : t;
  var $t = (t) => be(t) ? Oi(t) : t;
  function Le(t) {
    return t ? t.__v_isRef === true : false;
  }
  function gi(t) {
    return Lr(t, false);
  }
  function Ue(t) {
    return Lr(t, true);
  }
  function Lr(t, i) {
    return Le(t) ? t : new ba(t, i);
  }
  var ba = class {
    constructor(i, e) {
      this.dep = new $i(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = e ? i : we(i), this._value = e ? i : it(i), this.__v_isShallow = e;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(i) {
      const e = this._rawValue, n = this.__v_isShallow || Ke(i) || vt(i);
      i = n ? i : we(i), Pt(i, e) && (this._rawValue = i, this._value = n ? i : it(i), this.dep.trigger());
    }
  };
  function sn(t) {
    return Le(t) ? t.value : t;
  }
  function Se(t) {
    return fe(t) ? t() : sn(t);
  }
  var Ea = { get: (t, i, e) => i === "__v_raw" ? t : sn(Reflect.get(t, i, e)), set: (t, i, e, n) => {
    const r = t[i];
    return Le(r) && !Le(e) ? (r.value = e, true) : Reflect.set(t, i, e, n);
  } };
  function Ir(t) {
    return Vt(t) ? t : new Proxy(t, Ea);
  }
  var Ca = class {
    constructor(i) {
      this.__v_isRef = true, this._value = void 0;
      const e = this.dep = new $i(), { get: n, set: r } = i(e.track.bind(e), e.trigger.bind(e));
      this._get = n, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(i) {
      this._set(i);
    }
  };
  function Sa(t) {
    return new Ca(t);
  }
  var Pa = class {
    constructor(i, e, n) {
      this._object = i, this._key = e, this._defaultValue = n, this.__v_isRef = true, this._value = void 0, this._raw = we(i);
      let r = true, s = i;
      if (!de(i) || !Xi(String(e))) do
        r = !nn(s) || Ke(s);
      while (r && (s = s.__v_raw));
      this._shallow = r;
    }
    get value() {
      let i = this._object[this._key];
      return this._shallow && (i = sn(i)), this._value = i === void 0 ? this._defaultValue : i;
    }
    set value(i) {
      if (this._shallow && Le(this._raw[this._key])) {
        const e = this._object[this._key];
        if (Le(e)) {
          e.value = i;
          return;
        }
      }
      this._object[this._key] = i;
    }
    get dep() {
      return sa(this._raw, this._key);
    }
  };
  var Ra = class {
    constructor(i) {
      this._getter = i, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  };
  function Da(t, i, e) {
    return Le(t) ? t : fe(t) ? new Ra(t) : be(t) && arguments.length > 1 ? Aa(t, i, e) : gi(t);
  }
  function Aa(t, i, e) {
    return new Pa(t, i, e);
  }
  var La = class {
    constructor(i, e, n) {
      this.fn = i, this.setter = e, this._value = void 0, this.dep = new $i(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !e, this.isSSR = n;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && xe !== this) return wr(this, true), true;
    }
    get value() {
      const i = this.dep.track();
      return xr(this), i && (i.version = this.dep.version), this._value;
    }
    set value(i) {
      this.setter && this.setter(i);
    }
  };
  function Ia(t, i, e = false) {
    let n, r;
    return fe(t) ? n = t : (n = t.get, r = t.set), new La(n, r, e);
  }
  var Si = {};
  var Fi = /* @__PURE__ */ new WeakMap();
  var Mt;
  function Ma(t, i = false, e = Mt) {
    if (e) {
      let n = Fi.get(e);
      n || Fi.set(e, n = []), n.push(t);
    }
  }
  function Ha(t, i, e = Te) {
    const { immediate: n, deep: r, once: s, scheduler: o, augmentJob: l, call: a } = e, u = (k) => r ? k : Ke(k) || r === false || r === 0 ? pt(k, 1) : pt(k);
    let c, h, f, m, v = false, y = false;
    if (Le(t) ? (h = () => t.value, v = Ke(t)) : Vt(t) ? (h = () => u(t), v = true) : de(t) ? (y = true, v = t.some((k) => Vt(k) || Ke(k)), h = () => t.map((k) => {
      if (Le(k)) return k.value;
      if (Vt(k)) return u(k);
      if (fe(k)) return a ? a(k, 2) : k();
    })) : fe(t) ? i ? h = a ? () => a(t, 2) : t : h = () => {
      if (f) {
        gt();
        try {
          f();
        } finally {
          mt();
        }
      }
      const k = Mt;
      Mt = c;
      try {
        return a ? a(t, 3, [m]) : t(m);
      } finally {
        Mt = k;
      }
    } : h = lt, i && r) {
      const k = h, N = r === true ? 1 / 0 : r;
      h = () => pt(k(), N);
    }
    const x = mr(), T = () => {
      c.stop(), x && x.active && Wn(x.effects, c);
    };
    if (s && i) {
      const k = i;
      i = (...N) => {
        k(...N), T();
      };
    }
    let C = y ? new Array(t.length).fill(Si) : Si;
    const H = (k) => {
      if (!(!(c.flags & 1) || !c.dirty && !k)) if (i) {
        const N = c.run();
        if (r || v || (y ? N.some((Y, K) => Pt(Y, C[K])) : Pt(N, C))) {
          f && f();
          const Y = Mt;
          Mt = c;
          try {
            const K = [N, C === Si ? void 0 : y && C[0] === Si ? [] : C, m];
            C = N, a ? a(i, 3, K) : i(...K);
          } finally {
            Mt = Y;
          }
        }
      } else c.run();
    };
    return l && l(H), c = new vr(h), c.scheduler = o ? () => o(H, false) : H, m = (k) => Ma(k, false, c), f = c.onStop = () => {
      const k = Fi.get(c);
      if (k) {
        if (a) a(k, 4);
        else for (const N of k) N();
        Fi.delete(c);
      }
    }, i ? n ? H(true) : C = c.run() : o ? o(H.bind(null, true), true) : c.run(), T.pause = c.pause.bind(c), T.resume = c.resume.bind(c), T.stop = T, T;
  }
  function pt(t, i = 1 / 0, e) {
    if (i <= 0 || !be(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Map(), (e.get(t) || 0) >= i)) return t;
    if (e.set(t, i), i--, Le(t)) pt(t.value, i, e);
    else if (de(t)) for (let n = 0; n < t.length; n++) pt(t[n], i, e);
    else if (lr(t) || Xt(t)) t.forEach((n) => {
      pt(n, i, e);
    });
    else if (hr(t)) {
      for (const n in t) pt(t[n], i, e);
      for (const n of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, n) && pt(t[n], i, e);
    }
    return t;
  }
  function Ti(t, i, e, n) {
    try {
      return n ? t(...n) : t();
    } catch (r) {
      rn(r, i, e);
    }
  }
  function ut(t, i, e, n) {
    if (fe(t)) {
      const r = Ti(t, i, e, n);
      return r && ur(r) && r.catch((s) => {
        rn(s, i, e);
      }), r;
    }
    if (de(t)) {
      const r = [];
      for (let s = 0; s < t.length; s++) r.push(ut(t[s], i, e, n));
      return r;
    }
  }
  function rn(t, i, e, n = true) {
    const r = i ? i.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = i && i.appContext.config || Te;
    if (i) {
      let l = i.parent;
      const a = i.proxy, u = `https://vuejs.org/error-reference/#runtime-${e}`;
      for (; l; ) {
        const c = l.ec;
        if (c) {
          for (let h = 0; h < c.length; h++) if (c[h](t, a, u) === false) return;
        }
        l = l.parent;
      }
      if (s) {
        gt(), Ti(s, null, 10, [t, a, u]), mt();
        return;
      }
    }
    Oa(t, e, r, n, o);
  }
  function Oa(t, i, e, n = true, r = false) {
    if (r) throw t;
    console.error(t);
  }
  var We = [];
  var ot = -1;
  var Yt = [];
  var Ct = null;
  var qt = 0;
  var Mr = Promise.resolve();
  var ki = null;
  function Yn(t) {
    const i = ki || Mr;
    return t ? i.then(this ? t.bind(this) : t) : i;
  }
  function Fa(t) {
    let i = ot + 1, e = We.length;
    for (; i < e; ) {
      const n = i + e >>> 1, r = We[n], s = mi(r);
      s < t || s === t && r.flags & 2 ? i = n + 1 : e = n;
    }
    return i;
  }
  function Jn(t) {
    if (!(t.flags & 1)) {
      const i = mi(t), e = We[We.length - 1];
      !e || !(t.flags & 2) && i >= mi(e) ? We.push(t) : We.splice(Fa(i), 0, t), t.flags |= 1, Hr();
    }
  }
  function Hr() {
    ki || (ki = Mr.then(Fr));
  }
  function ka(t) {
    de(t) ? Yt.push(...t) : Ct && t.id === -1 ? Ct.splice(qt + 1, 0, t) : t.flags & 1 || (Yt.push(t), t.flags |= 1), Hr();
  }
  function ys(t, i, e = ot + 1) {
    for (; e < We.length; e++) {
      const n = We[e];
      if (n && n.flags & 2) {
        if (t && n.id !== t.uid) continue;
        We.splice(e, 1), e--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
      }
    }
  }
  function Or(t) {
    if (Yt.length) {
      const i = [...new Set(Yt)].sort((e, n) => mi(e) - mi(n));
      if (Yt.length = 0, Ct) {
        Ct.push(...i);
        return;
      }
      for (Ct = i, qt = 0; qt < Ct.length; qt++) {
        const e = Ct[qt];
        e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
      }
      Ct = null, qt = 0;
    }
  }
  var mi = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
  function Fr(t) {
    try {
      for (ot = 0; ot < We.length; ot++) {
        const i = We[ot];
        i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), Ti(i, i.i, i.i ? 15 : 14), i.flags & 4 || (i.flags &= -2));
      }
    } finally {
      for (; ot < We.length; ot++) {
        const i = We[ot];
        i && (i.flags &= -2);
      }
      ot = -1, We.length = 0, Or(), ki = null, (We.length || Yt.length) && Fr();
    }
  }
  var He = null;
  var kr = null;
  function Bi(t) {
    const i = He;
    return He = t, kr = t && t.type.__scopeId || null, i;
  }
  function Ye(t, i = He, e) {
    if (!i || t._n) return t;
    const n = (...r) => {
      n._d && Ui(-1);
      const s = Bi(i);
      let o;
      try {
        o = t(...r);
      } finally {
        Bi(s), n._d && Ui(1);
      }
      return o;
    };
    return n._n = true, n._c = true, n._d = true, n;
  }
  function ke(t, i) {
    if (He === null) return t;
    const e = un(He), n = t.dirs || (t.dirs = []);
    for (let r = 0; r < i.length; r++) {
      let [s, o, l, a = Te] = i[r];
      s && (fe(s) && (s = { mounted: s, updated: s }), s.deep && pt(o), n.push({ dir: s, instance: e, value: o, oldValue: void 0, arg: l, modifiers: a }));
    }
    return t;
  }
  function Lt(t, i, e, n) {
    const r = t.dirs, s = i && i.dirs;
    for (let o = 0; o < r.length; o++) {
      const l = r[o];
      s && (l.oldValue = s[o].value);
      let a = l.dir[n];
      a && (gt(), ut(a, e, 8, [t.el, l, t, i]), mt());
    }
  }
  function Ba(t, i) {
    if (Ve) {
      let e = Ve.provides;
      const n = Ve.parent && Ve.parent.provides;
      n === e && (e = Ve.provides = Object.create(n)), e[t] = i;
    }
  }
  function Ri(t, i, e = false) {
    const n = xi();
    if (n || Qt) {
      let r = Qt ? Qt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
      if (r && t in r) return r[t];
      if (arguments.length > 1) return e && fe(i) ? i.call(n && n.proxy) : i;
    }
  }
  var Va = /* @__PURE__ */ Symbol.for("v-scx");
  var za = () => Ri(Va);
  function ws(t, i) {
    return Qn(t, null, i);
  }
  function et(t, i, e) {
    return Qn(t, i, e);
  }
  function Qn(t, i, e = Te) {
    const { immediate: n, deep: r, flush: s, once: o } = e, l = ze({}, e), a = i && n || !i && s !== "post";
    let u;
    if (wi) {
      if (s === "sync") {
        const m = za();
        u = m.__watcherHandles || (m.__watcherHandles = []);
      } else if (!a) {
        const m = () => {
        };
        return m.stop = lt, m.resume = lt, m.pause = lt, m;
      }
    }
    const c = Ve;
    l.call = (m, v, y) => ut(m, c, v, y);
    let h = false;
    s === "post" ? l.scheduler = (m) => {
      qe(m, c && c.suspense);
    } : s !== "sync" && (h = true, l.scheduler = (m, v) => {
      v ? m() : Jn(m);
    }), l.augmentJob = (m) => {
      i && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
    };
    const f = Ha(t, i, l);
    return wi && (u ? u.push(f) : a && f()), f;
  }
  function Na(t, i, e) {
    const n = this.proxy, r = De(t) ? t.includes(".") ? Br(n, t) : () => n[t] : t.bind(n, n);
    let s;
    fe(i) ? s = i : (s = i.handler, e = i);
    const o = bi(this), l = Qn(r, s.bind(n), e);
    return o(), l;
  }
  function Br(t, i) {
    const e = i.split(".");
    return () => {
      let n = t;
      for (let r = 0; r < e.length && n; r++) n = n[e[r]];
      return n;
    };
  }
  var Ua = /* @__PURE__ */ Symbol("_vte");
  var Wa = (t) => t.__isTeleport;
  var ja = /* @__PURE__ */ Symbol("_leaveCb");
  function $n(t, i) {
    t.shapeFlag & 6 && t.component ? (t.transition = i, $n(t.component.subTree, i)) : t.shapeFlag & 128 ? (t.ssContent.transition = i.clone(t.ssContent), t.ssFallback.transition = i.clone(t.ssFallback)) : t.transition = i;
  }
  function Vi() {
    const t = xi();
    return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
  }
  function Vr(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function Ga(t) {
    const i = xi(), e = Ue(null);
    if (i) {
      const r = i.refs === Te ? i.refs = {} : i.refs;
      Object.defineProperty(r, t, { enumerable: true, get: () => e.value, set: (s) => e.value = s });
    }
    return e;
  }
  var zi = /* @__PURE__ */ new WeakMap();
  function ci(t, i, e, n, r = false) {
    if (de(t)) {
      t.forEach((v, y) => ci(v, i && (de(i) ? i[y] : i), e, n, r));
      return;
    }
    if (Jt(n) && !r) {
      n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ci(t, i, e, n.component.subTree);
      return;
    }
    const s = n.shapeFlag & 4 ? un(n.component) : n.el, o = r ? null : s, { i: l, r: a } = t, u = i && i.r, c = l.refs === Te ? l.refs = {} : l.refs, h = l.setupState, f = we(h), m = h === Te ? ar : (v) => _e(f, v);
    if (u != null && u !== a) {
      if (_s(i), De(u)) c[u] = null, m(u) && (h[u] = null);
      else if (Le(u)) {
        u.value = null;
        const v = i;
        v.k && (c[v.k] = null);
      }
    }
    if (fe(a)) Ti(a, l, 12, [o, c]);
    else {
      const v = De(a), y = Le(a);
      if (v || y) {
        const x = () => {
          if (t.f) {
            const T = v ? m(a) ? h[a] : c[a] : a.value;
            if (r) de(T) && Wn(T, s);
            else if (de(T)) T.includes(s) || T.push(s);
            else if (v) c[a] = [s], m(a) && (h[a] = c[a]);
            else {
              const C = [s];
              a.value = C, t.k && (c[t.k] = C);
            }
          } else v ? (c[a] = o, m(a) && (h[a] = o)) : y && (a.value = o, t.k && (c[t.k] = o));
        };
        if (o) {
          const T = () => {
            x(), zi.delete(t);
          };
          T.id = -1, zi.set(t, T), qe(T, e);
        } else _s(t), x();
      }
    }
  }
  function _s(t) {
    const i = zi.get(t);
    i && (i.flags |= 8, zi.delete(t));
  }
  Qi().requestIdleCallback;
  Qi().cancelIdleCallback;
  var Jt = (t) => !!t.type.__asyncLoader;
  var zr = (t) => t.type.__isKeepAlive;
  function qa(t, i) {
    Nr(t, "a", i);
  }
  function Za(t, i) {
    Nr(t, "da", i);
  }
  function Nr(t, i, e = Ve) {
    const n = t.__wdc || (t.__wdc = () => {
      let r = e;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
    if (on(i, n, e), e) {
      let r = e.parent;
      for (; r && r.parent; ) zr(r.parent.vnode) && Ka(n, i, e, r), r = r.parent;
    }
  }
  function Ka(t, i, e, n) {
    const r = on(i, t, n, true);
    Ur(() => {
      Wn(n[i], r);
    }, e);
  }
  function on(t, i, e = Ve, n = false) {
    if (e) {
      const r = e[t] || (e[t] = []), s = i.__weh || (i.__weh = (...o) => {
        gt();
        const l = bi(e), a = ut(i, e, t, o);
        return l(), mt(), a;
      });
      return n ? r.unshift(s) : r.push(s), s;
    }
  }
  var _t = (t) => (i, e = Ve) => {
    (!wi || t === "sp") && on(t, (...n) => i(...n), e);
  };
  var Xa = _t("bm");
  var es = _t("m");
  var Ya = _t("bu");
  var Ja = _t("u");
  var Qa = _t("bum");
  var Ur = _t("um");
  var $a = _t("sp");
  var el = _t("rtg");
  var tl = _t("rtc");
  function il(t, i = Ve) {
    on("ec", t, i);
  }
  var Wr = "components";
  function jr(t, i) {
    return qr(Wr, t, true, i) || t;
  }
  var Gr = /* @__PURE__ */ Symbol.for("v-ndc");
  function nl(t) {
    return De(t) ? qr(Wr, t, false) || t : t || Gr;
  }
  function qr(t, i, e = true, n = false) {
    const r = He || Ve;
    if (r) {
      const s = r.type;
      {
        const l = Nl(s, false);
        if (l && (l === i || l === Je(i) || l === Ji(Je(i)))) return s;
      }
      const o = Ts(r[t] || s[t], i) || Ts(r.appContext[t], i);
      return !o && n ? s : o;
    }
  }
  function Ts(t, i) {
    return t && (t[i] || t[Je(i)] || t[Ji(Je(i))]);
  }
  function Ce(t, i, e, n) {
    let r;
    const s = e, o = de(t);
    if (o || De(t)) {
      const l = o && Vt(t);
      let a = false, u = false;
      l && (a = !Ke(t), u = vt(t), t = en(t)), r = new Array(t.length);
      for (let c = 0, h = t.length; c < h; c++) r[c] = i(a ? u ? $t(it(t[c])) : it(t[c]) : t[c], c, void 0, s);
    } else if (typeof t == "number") {
      r = new Array(t);
      for (let l = 0; l < t; l++) r[l] = i(l + 1, l, void 0, s);
    } else if (be(t)) if (t[Symbol.iterator]) r = Array.from(t, (l, a) => i(l, a, void 0, s));
    else {
      const l = Object.keys(t);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = i(t[c], c, a, s);
      }
    }
    else r = [];
    return r;
  }
  function xs(t, i, e = {}, n, r) {
    if (He.ce || He.parent && Jt(He.parent) && He.parent.ce) {
      const u = Object.keys(e).length > 0;
      return i !== "default" && (e.name = i), E(), le(ue, null, [ie("slot", e, n)], u ? -2 : 64);
    }
    let s = t[i];
    s && s._c && (s._d = false), E();
    const o = s && Zr(s(e)), l = e.key || o && o.key, a = le(ue, { key: (l && !wt(l) ? l : `_${i}`) + (!o && n ? "_fb" : "") }, o || [], o && t._ === 1 ? 64 : -2);
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = true), a;
  }
  function Zr(t) {
    return t.some((i) => yi(i) ? !(i.type === yt || i.type === ue && !Zr(i.children)) : true) ? t : null;
  }
  var Ln = (t) => t ? fo(t) ? un(t) : Ln(t.parent) : null;
  var hi = ze(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => Ln(t.parent), $root: (t) => Ln(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => Xr(t), $forceUpdate: (t) => t.f || (t.f = () => {
    Jn(t.update);
  }), $nextTick: (t) => t.n || (t.n = Yn.bind(t.proxy)), $watch: (t) => Na.bind(t) });
  var vn = (t, i) => t !== Te && !t.__isScriptSetup && _e(t, i);
  var sl = { get({ _: t }, i) {
    if (i === "__v_skip") return true;
    const { ctx: e, setupState: n, data: r, props: s, accessCache: o, type: l, appContext: a } = t;
    if (i[0] !== "$") {
      const f = o[i];
      if (f !== void 0) switch (f) {
        case 1:
          return n[i];
        case 2:
          return r[i];
        case 4:
          return e[i];
        case 3:
          return s[i];
      }
      else {
        if (vn(n, i)) return o[i] = 1, n[i];
        if (r !== Te && _e(r, i)) return o[i] = 2, r[i];
        if (_e(s, i)) return o[i] = 3, s[i];
        if (e !== Te && _e(e, i)) return o[i] = 4, e[i];
        In && (o[i] = 0);
      }
    }
    const u = hi[i];
    let c, h;
    if (u) return i === "$attrs" && Be(t.attrs, "get", ""), u(t);
    if ((c = l.__cssModules) && (c = c[i])) return c;
    if (e !== Te && _e(e, i)) return o[i] = 4, e[i];
    if (h = a.config.globalProperties, _e(h, i)) return h[i];
  }, set({ _: t }, i, e) {
    const { data: n, setupState: r, ctx: s } = t;
    return vn(r, i) ? (r[i] = e, true) : n !== Te && _e(n, i) ? (n[i] = e, true) : _e(t.props, i) || i[0] === "$" && i.slice(1) in t ? false : (s[i] = e, true);
  }, has({ _: { data: t, setupState: i, accessCache: e, ctx: n, appContext: r, props: s, type: o } }, l) {
    let a;
    return !!(e[l] || t !== Te && l[0] !== "$" && _e(t, l) || vn(i, l) || _e(s, l) || _e(n, l) || _e(hi, l) || _e(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  }, defineProperty(t, i, e) {
    return e.get != null ? t._.accessCache[i] = 0 : _e(e, "value") && this.set(t, i, e.value, null), Reflect.defineProperty(t, i, e);
  } };
  function bs(t) {
    return de(t) ? t.reduce((i, e) => (i[e] = null, i), {}) : t;
  }
  var In = true;
  function rl(t) {
    const i = Xr(t), e = t.proxy, n = t.ctx;
    In = false, i.beforeCreate && Es(i.beforeCreate, t, "bc");
    const { data: r, computed: s, methods: o, watch: l, provide: a, inject: u, created: c, beforeMount: h, mounted: f, beforeUpdate: m, updated: v, activated: y, deactivated: x, beforeDestroy: T, beforeUnmount: C, destroyed: H, unmounted: k, render: N, renderTracked: Y, renderTriggered: K, errorCaptured: q, serverPrefetch: ee, expose: ce, inheritAttrs: te, components: j, directives: ne, filters: he } = i;
    if (u && ol(u, n, null), o) for (const pe in o) {
      const ae = o[pe];
      fe(ae) && (n[pe] = ae.bind(e));
    }
    if (r) {
      const pe = r.call(e, e);
      be(pe) && (t.data = tn(pe));
    }
    if (In = true, s) for (const pe in s) {
      const ae = s[pe], Ae = fe(ae) ? ae.bind(e, e) : fe(ae.get) ? ae.get.bind(e, e) : lt, Re = !fe(ae) && fe(ae.set) ? ae.set.bind(e) : lt, Qe = Me({ get: Ae, set: Re });
      Object.defineProperty(n, pe, { enumerable: true, configurable: true, get: () => Qe.value, set: (je) => Qe.value = je });
    }
    if (l) for (const pe in l) Kr(l[pe], n, e, pe);
    if (a) {
      const pe = fe(a) ? a.call(e) : a;
      Reflect.ownKeys(pe).forEach((ae) => {
        Ba(ae, pe[ae]);
      });
    }
    c && Es(c, t, "c");
    function me(pe, ae) {
      de(ae) ? ae.forEach((Ae) => pe(Ae.bind(e))) : ae && pe(ae.bind(e));
    }
    if (me(Xa, h), me(es, f), me(Ya, m), me(Ja, v), me(qa, y), me(Za, x), me(il, q), me(tl, Y), me(el, K), me(Qa, C), me(Ur, k), me($a, ee), de(ce)) if (ce.length) {
      const pe = t.exposed || (t.exposed = {});
      ce.forEach((ae) => {
        Object.defineProperty(pe, ae, { get: () => e[ae], set: (Ae) => e[ae] = Ae, enumerable: true });
      });
    } else t.exposed || (t.exposed = {});
    N && t.render === lt && (t.render = N), te != null && (t.inheritAttrs = te), j && (t.components = j), ne && (t.directives = ne), ee && Vr(t);
  }
  function ol(t, i, e = lt) {
    de(t) && (t = Mn(t));
    for (const n in t) {
      const r = t[n];
      let s;
      be(r) ? "default" in r ? s = Ri(r.from || n, r.default, true) : s = Ri(r.from || n) : s = Ri(r), Le(s) ? Object.defineProperty(i, n, { enumerable: true, configurable: true, get: () => s.value, set: (o) => s.value = o }) : i[n] = s;
    }
  }
  function Es(t, i, e) {
    ut(de(t) ? t.map((n) => n.bind(i.proxy)) : t.bind(i.proxy), i, e);
  }
  function Kr(t, i, e, n) {
    let r = n.includes(".") ? Br(e, n) : () => e[n];
    if (De(t)) {
      const s = i[t];
      fe(s) && et(r, s);
    } else if (fe(t)) et(r, t.bind(e));
    else if (be(t)) if (de(t)) t.forEach((s) => Kr(s, i, e, n));
    else {
      const s = fe(t.handler) ? t.handler.bind(e) : i[t.handler];
      fe(s) && et(r, s, t);
    }
  }
  function Xr(t) {
    const i = t.type, { mixins: e, extends: n } = i, { mixins: r, optionsCache: s, config: { optionMergeStrategies: o } } = t.appContext, l = s.get(i);
    let a;
    return l ? a = l : !r.length && !e && !n ? a = i : (a = {}, r.length && r.forEach((u) => Ni(a, u, o, true)), Ni(a, i, o)), be(i) && s.set(i, a), a;
  }
  function Ni(t, i, e, n = false) {
    const { mixins: r, extends: s } = i;
    s && Ni(t, s, e, true), r && r.forEach((o) => Ni(t, o, e, true));
    for (const o in i) if (!(n && o === "expose")) {
      const l = al[o] || e && e[o];
      t[o] = l ? l(t[o], i[o]) : i[o];
    }
    return t;
  }
  var al = { data: Cs, props: Ss, emits: Ss, methods: oi, computed: oi, beforeCreate: Ne, created: Ne, beforeMount: Ne, mounted: Ne, beforeUpdate: Ne, updated: Ne, beforeDestroy: Ne, beforeUnmount: Ne, destroyed: Ne, unmounted: Ne, activated: Ne, deactivated: Ne, errorCaptured: Ne, serverPrefetch: Ne, components: oi, directives: oi, watch: ul, provide: Cs, inject: ll };
  function Cs(t, i) {
    return i ? t ? function() {
      return ze(fe(t) ? t.call(this, this) : t, fe(i) ? i.call(this, this) : i);
    } : i : t;
  }
  function ll(t, i) {
    return oi(Mn(t), Mn(i));
  }
  function Mn(t) {
    if (de(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) i[t[e]] = t[e];
      return i;
    }
    return t;
  }
  function Ne(t, i) {
    return t ? [...new Set([].concat(t, i))] : i;
  }
  function oi(t, i) {
    return t ? ze(/* @__PURE__ */ Object.create(null), t, i) : i;
  }
  function Ss(t, i) {
    return t ? de(t) && de(i) ? [.../* @__PURE__ */ new Set([...t, ...i])] : ze(/* @__PURE__ */ Object.create(null), bs(t), bs(i ?? {})) : i;
  }
  function ul(t, i) {
    if (!t) return i;
    if (!i) return t;
    const e = ze(/* @__PURE__ */ Object.create(null), t);
    for (const n in i) e[n] = Ne(t[n], i[n]);
    return e;
  }
  function Yr() {
    return { app: null, config: { isNativeTag: ar, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
  }
  var cl = 0;
  function hl(t, i) {
    return function(n, r = null) {
      fe(n) || (n = ze({}, n)), r != null && !be(r) && (r = null);
      const s = Yr(), o = /* @__PURE__ */ new WeakSet(), l = [];
      let a = false;
      const u = s.app = { _uid: cl++, _component: n, _props: r, _container: null, _context: s, _instance: null, version: jl, get config() {
        return s.config;
      }, set config(c) {
      }, use(c, ...h) {
        return o.has(c) || (c && fe(c.install) ? (o.add(c), c.install(u, ...h)) : fe(c) && (o.add(c), c(u, ...h))), u;
      }, mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      }, component(c, h) {
        return h ? (s.components[c] = h, u) : s.components[c];
      }, directive(c, h) {
        return h ? (s.directives[c] = h, u) : s.directives[c];
      }, mount(c, h, f) {
        if (!a) {
          const m = u._ceVNode || ie(n, r);
          return m.appContext = s, f === true ? f = "svg" : f === false && (f = void 0), t(m, c, f), a = true, u._container = c, c.__vue_app__ = u, un(m.component);
        }
      }, onUnmount(c) {
        l.push(c);
      }, unmount() {
        a && (ut(l, u._instance, 16), t(null, u._container), delete u._container.__vue_app__);
      }, provide(c, h) {
        return s.provides[c] = h, u;
      }, runWithContext(c) {
        const h = Qt;
        Qt = u;
        try {
          return c();
        } finally {
          Qt = h;
        }
      } };
      return u;
    };
  }
  var Qt = null;
  var dl = (t, i) => i === "modelValue" || i === "model-value" ? t.modelModifiers : t[`${i}Modifiers`] || t[`${Je(i)}Modifiers`] || t[`${Dt(i)}Modifiers`];
  function fl(t, i, ...e) {
    if (t.isUnmounted) return;
    const n = t.vnode.props || Te;
    let r = e;
    const s = i.startsWith("update:"), o = s && dl(n, i.slice(7));
    o && (o.trim && (r = e.map((c) => De(c) ? c.trim() : c)), o.number && (r = e.map(jn)));
    let l, a = n[l = dn(i)] || n[l = dn(Je(i))];
    !a && s && (a = n[l = dn(Dt(i))]), a && ut(a, t, 6, r);
    const u = n[l + "Once"];
    if (u) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[l]) return;
      t.emitted[l] = true, ut(u, t, 6, r);
    }
  }
  var pl = /* @__PURE__ */ new WeakMap();
  function Jr(t, i, e = false) {
    const n = e ? pl : i.emitsCache, r = n.get(t);
    if (r !== void 0) return r;
    const s = t.emits;
    let o = {}, l = false;
    if (!fe(t)) {
      const a = (u) => {
        const c = Jr(u, i, true);
        c && (l = true, ze(o, c));
      };
      !e && i.mixins.length && i.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
    }
    return !s && !l ? (be(t) && n.set(t, null), null) : (de(s) ? s.forEach((a) => o[a] = null) : ze(o, s), be(t) && n.set(t, o), o);
  }
  function an(t, i) {
    return !t || !Zi(i) ? false : (i = i.slice(2).replace(/Once$/, ""), _e(t, i[0].toLowerCase() + i.slice(1)) || _e(t, Dt(i)) || _e(t, i));
  }
  function Ps(t) {
    const { type: i, vnode: e, proxy: n, withProxy: r, propsOptions: [s], slots: o, attrs: l, emit: a, render: u, renderCache: c, props: h, data: f, setupState: m, ctx: v, inheritAttrs: y } = t, x = Bi(t);
    let T, C;
    try {
      if (e.shapeFlag & 4) {
        const k = r || n, N = k;
        T = at(u.call(N, k, c, h, m, f, v)), C = l;
      } else {
        const k = i;
        T = at(k.length > 1 ? k(h, { attrs: l, slots: o, emit: a }) : k(h, null)), C = i.props ? l : gl(l);
      }
    } catch (k) {
      di.length = 0, rn(k, t, 1), T = ie(yt);
    }
    let H = T;
    if (C && y !== false) {
      const k = Object.keys(C), { shapeFlag: N } = H;
      k.length && N & 7 && (s && k.some(Un) && (C = ml(C, s)), H = ei(H, C, false, true));
    }
    return e.dirs && (H = ei(H, null, false, true), H.dirs = H.dirs ? H.dirs.concat(e.dirs) : e.dirs), e.transition && $n(H, e.transition), T = H, Bi(x), T;
  }
  var gl = (t) => {
    let i;
    for (const e in t) (e === "class" || e === "style" || Zi(e)) && ((i || (i = {}))[e] = t[e]);
    return i;
  };
  var ml = (t, i) => {
    const e = {};
    for (const n in t) (!Un(n) || !(n.slice(9) in i)) && (e[n] = t[n]);
    return e;
  };
  function vl(t, i, e) {
    const { props: n, children: r, component: s } = t, { props: o, children: l, patchFlag: a } = i, u = s.emitsOptions;
    if (i.dirs || i.transition) return true;
    if (e && a >= 0) {
      if (a & 1024) return true;
      if (a & 16) return n ? Rs(n, o, u) : !!o;
      if (a & 8) {
        const c = i.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          const f = c[h];
          if (o[f] !== n[f] && !an(u, f)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : n === o ? false : n ? o ? Rs(n, o, u) : true : !!o;
    return false;
  }
  function Rs(t, i, e) {
    const n = Object.keys(i);
    if (n.length !== Object.keys(t).length) return true;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      if (i[s] !== t[s] && !an(e, s)) return true;
    }
    return false;
  }
  function yl({ vnode: t, parent: i }, e) {
    for (; i; ) {
      const n = i.subTree;
      if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t) (t = i.vnode).el = e, i = i.parent;
      else break;
    }
  }
  var Qr = {};
  var $r = () => Object.create(Qr);
  var eo = (t) => Object.getPrototypeOf(t) === Qr;
  function wl(t, i, e, n = false) {
    const r = {}, s = $r();
    t.propsDefaults = /* @__PURE__ */ Object.create(null), to(t, i, r, s);
    for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
    e ? t.props = n ? r : Ta(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
  }
  function _l(t, i, e, n) {
    const { props: r, attrs: s, vnode: { patchFlag: o } } = t, l = we(r), [a] = t.propsOptions;
    let u = false;
    if ((n || o > 0) && !(o & 16)) {
      if (o & 8) {
        const c = t.vnode.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          let f = c[h];
          if (an(t.emitsOptions, f)) continue;
          const m = i[f];
          if (a) if (_e(s, f)) m !== s[f] && (s[f] = m, u = true);
          else {
            const v = Je(f);
            r[v] = Hn(a, l, v, m, t, false);
          }
          else m !== s[f] && (s[f] = m, u = true);
        }
      }
    } else {
      to(t, i, r, s) && (u = true);
      let c;
      for (const h in l) (!i || !_e(i, h) && ((c = Dt(h)) === h || !_e(i, c))) && (a ? e && (e[h] !== void 0 || e[c] !== void 0) && (r[h] = Hn(a, l, h, void 0, t, true)) : delete r[h]);
      if (s !== l) for (const h in s) (!i || !_e(i, h)) && (delete s[h], u = true);
    }
    u && ft(t.attrs, "set", "");
  }
  function to(t, i, e, n) {
    const [r, s] = t.propsOptions;
    let o = false, l;
    if (i) for (let a in i) {
      if (ai(a)) continue;
      const u = i[a];
      let c;
      r && _e(r, c = Je(a)) ? !s || !s.includes(c) ? e[c] = u : (l || (l = {}))[c] = u : an(t.emitsOptions, a) || (!(a in n) || u !== n[a]) && (n[a] = u, o = true);
    }
    if (s) {
      const a = we(e), u = l || Te;
      for (let c = 0; c < s.length; c++) {
        const h = s[c];
        e[h] = Hn(r, a, h, u[h], t, !_e(u, h));
      }
    }
    return o;
  }
  function Hn(t, i, e, n, r, s) {
    const o = t[e];
    if (o != null) {
      const l = _e(o, "default");
      if (l && n === void 0) {
        const a = o.default;
        if (o.type !== Function && !o.skipFactory && fe(a)) {
          const { propsDefaults: u } = r;
          if (e in u) n = u[e];
          else {
            const c = bi(r);
            n = u[e] = a.call(null, i), c();
          }
        } else n = a;
        r.ce && r.ce._setProp(e, n);
      }
      o[0] && (s && !l ? n = false : o[1] && (n === "" || n === Dt(e)) && (n = true));
    }
    return n;
  }
  var Tl = /* @__PURE__ */ new WeakMap();
  function io(t, i, e = false) {
    const n = e ? Tl : i.propsCache, r = n.get(t);
    if (r) return r;
    const s = t.props, o = {}, l = [];
    let a = false;
    if (!fe(t)) {
      const c = (h) => {
        a = true;
        const [f, m] = io(h, i, true);
        ze(o, f), m && l.push(...m);
      };
      !e && i.mixins.length && i.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
    }
    if (!s && !a) return be(t) && n.set(t, Kt), Kt;
    if (de(s)) for (let c = 0; c < s.length; c++) {
      const h = Je(s[c]);
      Ds(h) && (o[h] = Te);
    }
    else if (s) for (const c in s) {
      const h = Je(c);
      if (Ds(h)) {
        const f = s[c], m = o[h] = de(f) || fe(f) ? { type: f } : ze({}, f), v = m.type;
        let y = false, x = true;
        if (de(v)) for (let T = 0; T < v.length; ++T) {
          const C = v[T], H = fe(C) && C.name;
          if (H === "Boolean") {
            y = true;
            break;
          } else H === "String" && (x = false);
        }
        else y = fe(v) && v.name === "Boolean";
        m[0] = y, m[1] = x, (y || _e(m, "default")) && l.push(h);
      }
    }
    const u = [o, l];
    return be(t) && n.set(t, u), u;
  }
  function Ds(t) {
    return t[0] !== "$" && !ai(t);
  }
  var ts = (t) => t === "_" || t === "_ctx" || t === "$stable";
  var is = (t) => de(t) ? t.map(at) : [at(t)];
  var xl = (t, i, e) => {
    if (i._n) return i;
    const n = Ye((...r) => is(i(...r)), e);
    return n._c = false, n;
  };
  var no = (t, i, e) => {
    const n = t._ctx;
    for (const r in t) {
      if (ts(r)) continue;
      const s = t[r];
      if (fe(s)) i[r] = xl(r, s, n);
      else if (s != null) {
        const o = is(s);
        i[r] = () => o;
      }
    }
  };
  var so = (t, i) => {
    const e = is(i);
    t.slots.default = () => e;
  };
  var ro = (t, i, e) => {
    for (const n in i) (e || !ts(n)) && (t[n] = i[n]);
  };
  var bl = (t, i, e) => {
    const n = t.slots = $r();
    if (t.vnode.shapeFlag & 32) {
      const r = i._;
      r ? (ro(n, i, e), e && dr(n, "_", r, true)) : no(i, n);
    } else i && so(t, i);
  };
  var El = (t, i, e) => {
    const { vnode: n, slots: r } = t;
    let s = true, o = Te;
    if (n.shapeFlag & 32) {
      const l = i._;
      l ? e && l === 1 ? s = false : ro(r, i, e) : (s = !i.$stable, no(i, r)), o = i;
    } else i && (so(t, i), o = { default: 1 });
    if (s) for (const l in r) !ts(l) && o[l] == null && delete r[l];
  };
  var qe = Dl;
  function Cl(t) {
    return Sl(t);
  }
  function Sl(t, i) {
    const e = Qi();
    e.__VUE__ = true;
    const { insert: n, remove: r, patchProp: s, createElement: o, createText: l, createComment: a, setText: u, setElementText: c, parentNode: h, nextSibling: f, setScopeId: m = lt, insertStaticContent: v } = t, y = (P, D, F, U = null, z = null, d = null, w = void 0, S = null, L = !!D.dynamicChildren) => {
      if (P === D) return;
      P && !si(P, D) && (U = $e(P), je(P, z, d, true), P = null), D.patchFlag === -2 && (L = false, D.dynamicChildren = null);
      const { type: I, ref: V, shapeFlag: M } = D;
      switch (I) {
        case ln:
          x(P, D, F, U);
          break;
        case yt:
          T(P, D, F, U);
          break;
        case Di:
          P == null && C(D, F, U, w);
          break;
        case ue:
          j(P, D, F, U, z, d, w, S, L);
          break;
        default:
          M & 1 ? N(P, D, F, U, z, d, w, S, L) : M & 6 ? ne(P, D, F, U, z, d, w, S, L) : (M & 64 || M & 128) && I.process(P, D, F, U, z, d, w, S, L, st);
      }
      V != null && z ? ci(V, P && P.ref, d, D || P, !D) : V == null && P && P.ref != null && ci(P.ref, null, d, P, true);
    }, x = (P, D, F, U) => {
      if (P == null) n(D.el = l(D.children), F, U);
      else {
        const z = D.el = P.el;
        D.children !== P.children && u(z, D.children);
      }
    }, T = (P, D, F, U) => {
      P == null ? n(D.el = a(D.children || ""), F, U) : D.el = P.el;
    }, C = (P, D, F, U) => {
      [P.el, P.anchor] = v(P.children, D, F, U, P.el, P.anchor);
    }, H = ({ el: P, anchor: D }, F, U) => {
      let z;
      for (; P && P !== D; ) z = f(P), n(P, F, U), P = z;
      n(D, F, U);
    }, k = ({ el: P, anchor: D }) => {
      let F;
      for (; P && P !== D; ) F = f(P), r(P), P = F;
      r(D);
    }, N = (P, D, F, U, z, d, w, S, L) => {
      if (D.type === "svg" ? w = "svg" : D.type === "math" && (w = "mathml"), P == null) Y(D, F, U, z, d, w, S, L);
      else {
        const I = P.el && P.el._isVueCE ? P.el : null;
        try {
          I && I._beginPatch(), ee(P, D, z, d, w, S, L);
        } finally {
          I && I._endPatch();
        }
      }
    }, Y = (P, D, F, U, z, d, w, S) => {
      let L, I;
      const { props: V, shapeFlag: M, transition: W, dirs: Z } = P;
      if (L = P.el = o(P.type, d, V && V.is, V), M & 8 ? c(L, P.children) : M & 16 && q(P.children, L, null, U, z, yn(P, d), w, S), Z && Lt(P, null, U, "created"), K(L, P, P.scopeId, w, U), V) {
        for (const X in V) X !== "value" && !ai(X) && s(L, X, null, V[X], d, U);
        "value" in V && s(L, "value", null, V.value, d), (I = V.onVnodeBeforeMount) && rt(I, U, P);
      }
      Z && Lt(P, null, U, "beforeMount");
      const se = Pl(z, W);
      se && W.beforeEnter(L), n(L, D, F), ((I = V && V.onVnodeMounted) || se || Z) && qe(() => {
        I && rt(I, U, P), se && W.enter(L), Z && Lt(P, null, U, "mounted");
      }, z);
    }, K = (P, D, F, U, z) => {
      if (F && m(P, F), U) for (let d = 0; d < U.length; d++) m(P, U[d]);
      if (z) {
        let d = z.subTree;
        if (D === d || uo(d.type) && (d.ssContent === D || d.ssFallback === D)) {
          const w = z.vnode;
          K(P, w, w.scopeId, w.slotScopeIds, z.parent);
        }
      }
    }, q = (P, D, F, U, z, d, w, S, L = 0) => {
      for (let I = L; I < P.length; I++) {
        const V = P[I] = S ? St(P[I]) : at(P[I]);
        y(null, V, D, F, U, z, d, w, S);
      }
    }, ee = (P, D, F, U, z, d, w) => {
      const S = D.el = P.el;
      let { patchFlag: L, dynamicChildren: I, dirs: V } = D;
      L |= P.patchFlag & 16;
      const M = P.props || Te, W = D.props || Te;
      let Z;
      if (F && It(F, false), (Z = W.onVnodeBeforeUpdate) && rt(Z, F, D, P), V && Lt(D, P, F, "beforeUpdate"), F && It(F, true), (M.innerHTML && W.innerHTML == null || M.textContent && W.textContent == null) && c(S, ""), I ? ce(P.dynamicChildren, I, S, F, U, yn(D, z), d) : w || ae(P, D, S, null, F, U, yn(D, z), d, false), L > 0) {
        if (L & 16) te(S, M, W, F, z);
        else if (L & 2 && M.class !== W.class && s(S, "class", null, W.class, z), L & 4 && s(S, "style", M.style, W.style, z), L & 8) {
          const se = D.dynamicProps;
          for (let X = 0; X < se.length; X++) {
            const oe = se[X], g = M[oe], p = W[oe];
            (p !== g || oe === "value") && s(S, oe, g, p, z, F);
          }
        }
        L & 1 && P.children !== D.children && c(S, D.children);
      } else !w && I == null && te(S, M, W, F, z);
      ((Z = W.onVnodeUpdated) || V) && qe(() => {
        Z && rt(Z, F, D, P), V && Lt(D, P, F, "updated");
      }, U);
    }, ce = (P, D, F, U, z, d, w) => {
      for (let S = 0; S < D.length; S++) {
        const L = P[S], I = D[S], V = L.el && (L.type === ue || !si(L, I) || L.shapeFlag & 198) ? h(L.el) : F;
        y(L, I, V, null, U, z, d, w, true);
      }
    }, te = (P, D, F, U, z) => {
      if (D !== F) {
        if (D !== Te) for (const d in D) !ai(d) && !(d in F) && s(P, d, D[d], null, z, U);
        for (const d in F) {
          if (ai(d)) continue;
          const w = F[d], S = D[d];
          w !== S && d !== "value" && s(P, d, S, w, z, U);
        }
        "value" in F && s(P, "value", D.value, F.value, z);
      }
    }, j = (P, D, F, U, z, d, w, S, L) => {
      const I = D.el = P ? P.el : l(""), V = D.anchor = P ? P.anchor : l("");
      let { patchFlag: M, dynamicChildren: W, slotScopeIds: Z } = D;
      Z && (S = S ? S.concat(Z) : Z), P == null ? (n(I, F, U), n(V, F, U), q(D.children || [], F, V, z, d, w, S, L)) : M > 0 && M & 64 && W && P.dynamicChildren && P.dynamicChildren.length === W.length ? (ce(P.dynamicChildren, W, F, z, d, w, S), (D.key != null || z && D === z.subTree) && oo(P, D, true)) : ae(P, D, F, V, z, d, w, S, L);
    }, ne = (P, D, F, U, z, d, w, S, L) => {
      D.slotScopeIds = S, P == null ? D.shapeFlag & 512 ? z.ctx.activate(D, F, U, w, L) : he(D, F, U, z, d, w, L) : ye(P, D, L);
    }, he = (P, D, F, U, z, d, w) => {
      const S = P.component = Fl(P, U, z);
      if (zr(P) && (S.ctx.renderer = st), kl(S, false, w), S.asyncDep) {
        if (z && z.registerDep(S, me, w), !P.el) {
          const L = S.subTree = ie(yt);
          T(null, L, D, F), P.placeholder = L.el;
        }
      } else me(S, P, D, F, z, d, w);
    }, ye = (P, D, F) => {
      const U = D.component = P.component;
      if (vl(P, D, F)) if (U.asyncDep && !U.asyncResolved) {
        pe(U, D, F);
        return;
      } else U.next = D, U.update();
      else D.el = P.el, U.vnode = D;
    }, me = (P, D, F, U, z, d, w) => {
      const S = () => {
        if (P.isMounted) {
          let { next: M, bu: W, u: Z, parent: se, vnode: X } = P;
          {
            const b = ao(P);
            if (b) {
              M && (M.el = X.el, pe(P, M, w)), b.asyncDep.then(() => {
                P.isUnmounted || S();
              });
              return;
            }
          }
          let oe = M, g;
          It(P, false), M ? (M.el = X.el, pe(P, M, w)) : M = X, W && Pi(W), (g = M.props && M.props.onVnodeBeforeUpdate) && rt(g, se, M, X), It(P, true);
          const p = Ps(P), _ = P.subTree;
          P.subTree = p, y(_, p, h(_.el), $e(_), P, z, d), M.el = p.el, oe === null && yl(P, p.el), Z && qe(Z, z), (g = M.props && M.props.onVnodeUpdated) && qe(() => rt(g, se, M, X), z);
        } else {
          let M;
          const { el: W, props: Z } = D, { bm: se, m: X, parent: oe, root: g, type: p } = P, _ = Jt(D);
          It(P, false), se && Pi(se), !_ && (M = Z && Z.onVnodeBeforeMount) && rt(M, oe, D), It(P, true);
          {
            g.ce && g.ce._def.shadowRoot !== false && g.ce._injectChildStyle(p);
            const b = P.subTree = Ps(P);
            y(null, b, F, U, P, z, d), D.el = b.el;
          }
          if (X && qe(X, z), !_ && (M = Z && Z.onVnodeMounted)) {
            const b = D;
            qe(() => rt(M, oe, b), z);
          }
          (D.shapeFlag & 256 || oe && Jt(oe.vnode) && oe.vnode.shapeFlag & 256) && P.a && qe(P.a, z), P.isMounted = true, D = F = U = null;
        }
      };
      P.scope.on();
      const L = P.effect = new vr(S);
      P.scope.off();
      const I = P.update = L.run.bind(L), V = P.job = L.runIfDirty.bind(L);
      V.i = P, V.id = P.uid, L.scheduler = () => Jn(V), It(P, true), I();
    }, pe = (P, D, F) => {
      D.component = P;
      const U = P.vnode.props;
      P.vnode = D, P.next = null, _l(P, D.props, U, F), El(P, D.children, F), gt(), ys(P), mt();
    }, ae = (P, D, F, U, z, d, w, S, L = false) => {
      const I = P && P.children, V = P ? P.shapeFlag : 0, M = D.children, { patchFlag: W, shapeFlag: Z } = D;
      if (W > 0) {
        if (W & 128) {
          Re(I, M, F, U, z, d, w, S, L);
          return;
        } else if (W & 256) {
          Ae(I, M, F, U, z, d, w, S, L);
          return;
        }
      }
      Z & 8 ? (V & 16 && nt(I, z, d), M !== I && c(F, M)) : V & 16 ? Z & 16 ? Re(I, M, F, U, z, d, w, S, L) : nt(I, z, d, true) : (V & 8 && c(F, ""), Z & 16 && q(M, F, U, z, d, w, S, L));
    }, Ae = (P, D, F, U, z, d, w, S, L) => {
      P = P || Kt, D = D || Kt;
      const I = P.length, V = D.length, M = Math.min(I, V);
      let W;
      for (W = 0; W < M; W++) {
        const Z = D[W] = L ? St(D[W]) : at(D[W]);
        y(P[W], Z, F, null, z, d, w, S, L);
      }
      I > V ? nt(P, z, d, true, false, M) : q(D, F, U, z, d, w, S, L, M);
    }, Re = (P, D, F, U, z, d, w, S, L) => {
      let I = 0;
      const V = D.length;
      let M = P.length - 1, W = V - 1;
      for (; I <= M && I <= W; ) {
        const Z = P[I], se = D[I] = L ? St(D[I]) : at(D[I]);
        if (si(Z, se)) y(Z, se, F, null, z, d, w, S, L);
        else break;
        I++;
      }
      for (; I <= M && I <= W; ) {
        const Z = P[M], se = D[W] = L ? St(D[W]) : at(D[W]);
        if (si(Z, se)) y(Z, se, F, null, z, d, w, S, L);
        else break;
        M--, W--;
      }
      if (I > M) {
        if (I <= W) {
          const Z = W + 1, se = Z < V ? D[Z].el : U;
          for (; I <= W; ) y(null, D[I] = L ? St(D[I]) : at(D[I]), F, se, z, d, w, S, L), I++;
        }
      } else if (I > W) for (; I <= M; ) je(P[I], z, d, true), I++;
      else {
        const Z = I, se = I, X = /* @__PURE__ */ new Map();
        for (I = se; I <= W; I++) {
          const Q = D[I] = L ? St(D[I]) : at(D[I]);
          Q.key != null && X.set(Q.key, I);
        }
        let oe, g = 0;
        const p = W - se + 1;
        let _ = false, b = 0;
        const O = new Array(p);
        for (I = 0; I < p; I++) O[I] = 0;
        for (I = Z; I <= M; I++) {
          const Q = P[I];
          if (g >= p) {
            je(Q, z, d, true);
            continue;
          }
          let ve;
          if (Q.key != null) ve = X.get(Q.key);
          else for (oe = se; oe <= W; oe++) if (O[oe - se] === 0 && si(Q, D[oe])) {
            ve = oe;
            break;
          }
          ve === void 0 ? je(Q, z, d, true) : (O[ve - se] = I + 1, ve >= b ? b = ve : _ = true, y(Q, D[ve], F, null, z, d, w, S, L), g++);
        }
        const G = _ ? Rl(O) : Kt;
        for (oe = G.length - 1, I = p - 1; I >= 0; I--) {
          const Q = se + I, ve = D[Q], re = D[Q + 1], Oe = Q + 1 < V ? re.el || lo(re) : U;
          O[I] === 0 ? y(null, ve, F, Oe, z, d, w, S, L) : _ && (oe < 0 || I !== G[oe] ? Qe(ve, F, Oe, 2) : oe--);
        }
      }
    }, Qe = (P, D, F, U, z = null) => {
      const { el: d, type: w, transition: S, children: L, shapeFlag: I } = P;
      if (I & 6) {
        Qe(P.component.subTree, D, F, U);
        return;
      }
      if (I & 128) {
        P.suspense.move(D, F, U);
        return;
      }
      if (I & 64) {
        w.move(P, D, F, st);
        return;
      }
      if (w === ue) {
        n(d, D, F);
        for (let M = 0; M < L.length; M++) Qe(L[M], D, F, U);
        n(P.anchor, D, F);
        return;
      }
      if (w === Di) {
        H(P, D, F);
        return;
      }
      if (U !== 2 && I & 1 && S) if (U === 0) S.beforeEnter(d), n(d, D, F), qe(() => S.enter(d), z);
      else {
        const { leave: M, delayLeave: W, afterLeave: Z } = S, se = () => {
          P.ctx.isUnmounted ? r(d) : n(d, D, F);
        }, X = () => {
          d._isLeaving && d[ja](true), M(d, () => {
            se(), Z && Z();
          });
        };
        W ? W(d, se, X) : X();
      }
      else n(d, D, F);
    }, je = (P, D, F, U = false, z = false) => {
      const { type: d, props: w, ref: S, children: L, dynamicChildren: I, shapeFlag: V, patchFlag: M, dirs: W, cacheIndex: Z } = P;
      if (M === -2 && (z = false), S != null && (gt(), ci(S, null, F, P, true), mt()), Z != null && (D.renderCache[Z] = void 0), V & 256) {
        D.ctx.deactivate(P);
        return;
      }
      const se = V & 1 && W, X = !Jt(P);
      let oe;
      if (X && (oe = w && w.onVnodeBeforeUnmount) && rt(oe, D, P), V & 6) Ut(P.component, F, U);
      else {
        if (V & 128) {
          P.suspense.unmount(F, U);
          return;
        }
        se && Lt(P, null, D, "beforeUnmount"), V & 64 ? P.type.remove(P, D, F, st, U) : I && !I.hasOnce && (d !== ue || M > 0 && M & 64) ? nt(I, D, F, false, true) : (d === ue && M & 384 || !z && V & 16) && nt(L, D, F), U && ge(P);
      }
      (X && (oe = w && w.onVnodeUnmounted) || se) && qe(() => {
        oe && rt(oe, D, P), se && Lt(P, null, D, "unmounted");
      }, F);
    }, ge = (P) => {
      const { type: D, el: F, anchor: U, transition: z } = P;
      if (D === ue) {
        Nt(F, U);
        return;
      }
      if (D === Di) {
        k(P);
        return;
      }
      const d = () => {
        r(F), z && !z.persisted && z.afterLeave && z.afterLeave();
      };
      if (P.shapeFlag & 1 && z && !z.persisted) {
        const { leave: w, delayLeave: S } = z, L = () => w(F, d);
        S ? S(P.el, d, L) : L();
      } else d();
    }, Nt = (P, D) => {
      let F;
      for (; P !== D; ) F = f(P), r(P), P = F;
      r(D);
    }, Ut = (P, D, F) => {
      const { bum: U, scope: z, job: d, subTree: w, um: S, m: L, a: I } = P;
      As(L), As(I), U && Pi(U), z.stop(), d && (d.flags |= 8, je(w, P, D, F)), S && qe(S, D), qe(() => {
        P.isUnmounted = true;
      }, D);
    }, nt = (P, D, F, U = false, z = false, d = 0) => {
      for (let w = d; w < P.length; w++) je(P[w], D, F, U, z);
    }, $e = (P) => {
      if (P.shapeFlag & 6) return $e(P.component.subTree);
      if (P.shapeFlag & 128) return P.suspense.next();
      const D = f(P.anchor || P.el), F = D && D[Ua];
      return F ? f(F) : D;
    };
    let bt = false;
    const Wt = (P, D, F) => {
      let U;
      P == null ? D._vnode && (je(D._vnode, null, null, true), U = D._vnode.component) : y(D._vnode || null, P, D, null, null, null, F), D._vnode = P, bt || (bt = true, ys(U), Or(), bt = false);
    }, st = { p: y, um: je, m: Qe, r: ge, mt: he, mc: q, pc: ae, pbc: ce, n: $e, o: t };
    return { render: Wt, hydrate: void 0, createApp: hl(Wt) };
  }
  function yn({ type: t, props: i }, e) {
    return e === "svg" && t === "foreignObject" || e === "mathml" && t === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : e;
  }
  function It({ effect: t, job: i }, e) {
    e ? (t.flags |= 32, i.flags |= 4) : (t.flags &= -33, i.flags &= -5);
  }
  function Pl(t, i) {
    return (!t || t && !t.pendingBranch) && i && !i.persisted;
  }
  function oo(t, i, e = false) {
    const n = t.children, r = i.children;
    if (de(n) && de(r)) for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = St(r[s]), l.el = o.el), !e && l.patchFlag !== -2 && oo(o, l)), l.type === ln && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = s + (t.type === ue ? 1 : 0)), l.type === yt && !l.el && (l.el = o.el);
    }
  }
  function Rl(t) {
    const i = t.slice(), e = [0];
    let n, r, s, o, l;
    const a = t.length;
    for (n = 0; n < a; n++) {
      const u = t[n];
      if (u !== 0) {
        if (r = e[e.length - 1], t[r] < u) {
          i[n] = r, e.push(n);
          continue;
        }
        for (s = 0, o = e.length - 1; s < o; ) l = s + o >> 1, t[e[l]] < u ? s = l + 1 : o = l;
        u < t[e[s]] && (s > 0 && (i[n] = e[s - 1]), e[s] = n);
      }
    }
    for (s = e.length, o = e[s - 1]; s-- > 0; ) e[s] = o, o = i[o];
    return e;
  }
  function ao(t) {
    const i = t.subTree.component;
    if (i) return i.asyncDep && !i.asyncResolved ? i : ao(i);
  }
  function As(t) {
    if (t) for (let i = 0; i < t.length; i++) t[i].flags |= 8;
  }
  function lo(t) {
    if (t.placeholder) return t.placeholder;
    const i = t.component;
    return i ? lo(i.subTree) : null;
  }
  var uo = (t) => t.__isSuspense;
  function Dl(t, i) {
    i && i.pendingBranch ? de(t) ? i.effects.push(...t) : i.effects.push(t) : ka(t);
  }
  var ue = /* @__PURE__ */ Symbol.for("v-fgt");
  var ln = /* @__PURE__ */ Symbol.for("v-txt");
  var yt = /* @__PURE__ */ Symbol.for("v-cmt");
  var Di = /* @__PURE__ */ Symbol.for("v-stc");
  var di = [];
  var Ze = null;
  function E(t = false) {
    di.push(Ze = t ? null : []);
  }
  function Al() {
    di.pop(), Ze = di[di.length - 1] || null;
  }
  var vi = 1;
  function Ui(t, i = false) {
    vi += t, t < 0 && Ze && i && (Ze.hasOnce = true);
  }
  function co(t) {
    return t.dynamicChildren = vi > 0 ? Ze || Kt : null, Al(), vi > 0 && Ze && Ze.push(t), t;
  }
  function A(t, i, e, n, r, s) {
    return co(R(t, i, e, n, r, s, true));
  }
  function le(t, i, e, n, r) {
    return co(ie(t, i, e, n, r, true));
  }
  function yi(t) {
    return t ? t.__v_isVNode === true : false;
  }
  function si(t, i) {
    return t.type === i.type && t.key === i.key;
  }
  var ho = ({ key: t }) => t ?? null;
  var Ai = ({ ref: t, ref_key: i, ref_for: e }) => (typeof t == "number" && (t = "" + t), t != null ? De(t) || Le(t) || fe(t) ? { i: He, r: t, k: i, f: !!e } : t : null);
  function R(t, i = null, e = null, n = 0, r = null, s = t === ue ? 0 : 1, o = false, l = false) {
    const a = { __v_isVNode: true, __v_skip: true, type: t, props: i, key: i && ho(i), ref: i && Ai(i), scopeId: kr, slotScopeIds: null, children: e, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: n, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: He };
    return l ? (ns(a, e), s & 128 && t.normalize(a)) : e && (a.shapeFlag |= De(e) ? 8 : 16), vi > 0 && !o && Ze && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Ze.push(a), a;
  }
  var ie = Ll;
  function Ll(t, i = null, e = null, n = 0, r = null, s = false) {
    if ((!t || t === Gr) && (t = yt), yi(t)) {
      const l = ei(t, i, true);
      return e && ns(l, e), vi > 0 && !s && Ze && (l.shapeFlag & 6 ? Ze[Ze.indexOf(t)] = l : Ze.push(l)), l.patchFlag = -2, l;
    }
    if (Ul(t) && (t = t.__vccOpts), i) {
      i = Il(i);
      let { class: l, style: a } = i;
      l && !De(l) && (i.class = Pe(l)), be(a) && (nn(a) && !de(a) && (a = ze({}, a)), i.style = Rt(a));
    }
    const o = De(t) ? 1 : uo(t) ? 128 : Wa(t) ? 64 : be(t) ? 4 : fe(t) ? 2 : 0;
    return R(t, i, e, n, r, o, s, true);
  }
  function Il(t) {
    return t ? nn(t) || eo(t) ? ze({}, t) : t : null;
  }
  function ei(t, i, e = false, n = false) {
    const { props: r, ref: s, patchFlag: o, children: l, transition: a } = t, u = i ? Ml(r || {}, i) : r, c = { __v_isVNode: true, __v_skip: true, type: t.type, props: u, key: u && ho(u), ref: i && i.ref ? e && s ? de(s) ? s.concat(Ai(i)) : [s, Ai(i)] : Ai(i) : s, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: i && t.type !== ue ? o === -1 ? 16 : o | 16 : o, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: a, component: t.component, suspense: t.suspense, ssContent: t.ssContent && ei(t.ssContent), ssFallback: t.ssFallback && ei(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
    return a && n && $n(c, a.clone(c)), c;
  }
  function Ge(t = " ", i = 0) {
    return ie(ln, null, t, i);
  }
  function J(t = "", i = false) {
    return i ? (E(), le(yt, null, t)) : ie(yt, null, t);
  }
  function at(t) {
    return t == null || typeof t == "boolean" ? ie(yt) : de(t) ? ie(ue, null, t.slice()) : yi(t) ? St(t) : ie(ln, null, String(t));
  }
  function St(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : ei(t);
  }
  function ns(t, i) {
    let e = 0;
    const { shapeFlag: n } = t;
    if (i == null) i = null;
    else if (de(i)) e = 16;
    else if (typeof i == "object") if (n & 65) {
      const r = i.default;
      r && (r._c && (r._d = false), ns(t, r()), r._c && (r._d = true));
      return;
    } else {
      e = 32;
      const r = i._;
      !r && !eo(i) ? i._ctx = He : r === 3 && He && (He.slots._ === 1 ? i._ = 1 : (i._ = 2, t.patchFlag |= 1024));
    }
    else fe(i) ? (i = { default: i, _ctx: He }, e = 32) : (i = String(i), n & 64 ? (e = 16, i = [Ge(i)]) : e = 8);
    t.children = i, t.shapeFlag |= e;
  }
  function Ml(...t) {
    const i = {};
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      for (const r in n) if (r === "class") i.class !== n.class && (i.class = Pe([i.class, n.class]));
      else if (r === "style") i.style = Rt([i.style, n.style]);
      else if (Zi(r)) {
        const s = i[r], o = n[r];
        o && s !== o && !(de(s) && s.includes(o)) && (i[r] = s ? [].concat(s, o) : o);
      } else r !== "" && (i[r] = n[r]);
    }
    return i;
  }
  function rt(t, i, e, n = null) {
    ut(t, i, 7, [e, n]);
  }
  var Hl = Yr();
  var Ol = 0;
  function Fl(t, i, e) {
    const n = t.type, r = (i ? i.appContext : t.appContext) || Hl, s = { uid: Ol++, vnode: t, type: n, parent: i, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new ea(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: i ? i.provides : Object.create(r.provides), ids: i ? i.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: io(n, r), emitsOptions: Jr(n, r), emit: null, emitted: null, propsDefaults: Te, inheritAttrs: n.inheritAttrs, ctx: Te, data: Te, props: Te, attrs: Te, slots: Te, refs: Te, setupState: Te, setupContext: null, suspense: e, suspenseId: e ? e.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return s.ctx = { _: s }, s.root = i ? i.root : s, s.emit = fl.bind(null, s), t.ce && t.ce(s), s;
  }
  var Ve = null;
  var xi = () => Ve || He;
  var Wi;
  var On;
  {
    const t = Qi(), i = (e, n) => {
      let r;
      return (r = t[e]) || (r = t[e] = []), r.push(n), (s) => {
        r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
      };
    };
    Wi = i("__VUE_INSTANCE_SETTERS__", (e) => Ve = e), On = i("__VUE_SSR_SETTERS__", (e) => wi = e);
  }
  var bi = (t) => {
    const i = Ve;
    return Wi(t), t.scope.on(), () => {
      t.scope.off(), Wi(i);
    };
  };
  var Ls = () => {
    Ve && Ve.scope.off(), Wi(null);
  };
  function fo(t) {
    return t.vnode.shapeFlag & 4;
  }
  var wi = false;
  function kl(t, i = false, e = false) {
    i && On(i);
    const { props: n, children: r } = t.vnode, s = fo(t);
    wl(t, n, s, i), bl(t, r, e || i);
    const o = s ? Bl(t, i) : void 0;
    return i && On(false), o;
  }
  function Bl(t, i) {
    const e = t.type;
    t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, sl);
    const { setup: n } = e;
    if (n) {
      gt();
      const r = t.setupContext = n.length > 1 ? zl(t) : null, s = bi(t), o = Ti(n, t, 0, [t.props, r]), l = ur(o);
      if (mt(), s(), (l || t.sp) && !Jt(t) && Vr(t), l) {
        if (o.then(Ls, Ls), i) return o.then((a) => {
          Is(t, a);
        }).catch((a) => {
          rn(a, t, 0);
        });
        t.asyncDep = o;
      } else Is(t, o);
    } else po(t);
  }
  function Is(t, i, e) {
    fe(i) ? t.type.__ssrInlineRender ? t.ssrRender = i : t.render = i : be(i) && (t.setupState = Ir(i)), po(t);
  }
  function po(t, i, e) {
    const n = t.type;
    t.render || (t.render = n.render || lt);
    {
      const r = bi(t);
      gt();
      try {
        rl(t);
      } finally {
        mt(), r();
      }
    }
  }
  var Vl = { get(t, i) {
    return Be(t, "get", ""), t[i];
  } };
  function zl(t) {
    const i = (e) => {
      t.exposed = e || {};
    };
    return { attrs: new Proxy(t.attrs, Vl), slots: t.slots, emit: t.emit, expose: i };
  }
  function un(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Ir(xa(t.exposed)), { get(i, e) {
      if (e in i) return i[e];
      if (e in hi) return hi[e](t);
    }, has(i, e) {
      return e in i || e in hi;
    } })) : t.proxy;
  }
  function Nl(t, i = true) {
    return fe(t) ? t.displayName || t.name : t.name || i && t.__name;
  }
  function Ul(t) {
    return fe(t) && "__vccOpts" in t;
  }
  var Me = (t, i) => Ia(t, i, wi);
  function Wl(t, i, e) {
    try {
      Ui(-1);
      const n = arguments.length;
      return n === 2 ? be(i) && !de(i) ? yi(i) ? ie(t, null, [i]) : ie(t, i) : ie(t, null, i) : (n > 3 ? e = Array.prototype.slice.call(arguments, 2) : n === 3 && yi(e) && (e = [e]), ie(t, i, e));
    } finally {
      Ui(1);
    }
  }
  var jl = "3.5.27";
  var Fn;
  var Ms = typeof window < "u" && window.trustedTypes;
  if (Ms) try {
    Fn = Ms.createPolicy("vue", { createHTML: (t) => t });
  } catch {
  }
  var go = Fn ? (t) => Fn.createHTML(t) : (t) => t;
  var Gl = "http://www.w3.org/2000/svg";
  var ql = "http://www.w3.org/1998/Math/MathML";
  var dt = typeof document < "u" ? document : null;
  var Hs = dt && dt.createElement("template");
  var Zl = { insert: (t, i, e) => {
    i.insertBefore(t, e || null);
  }, remove: (t) => {
    const i = t.parentNode;
    i && i.removeChild(t);
  }, createElement: (t, i, e, n) => {
    const r = i === "svg" ? dt.createElementNS(Gl, t) : i === "mathml" ? dt.createElementNS(ql, t) : e ? dt.createElement(t, { is: e }) : dt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  }, createText: (t) => dt.createTextNode(t), createComment: (t) => dt.createComment(t), setText: (t, i) => {
    t.nodeValue = i;
  }, setElementText: (t, i) => {
    t.textContent = i;
  }, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => dt.querySelector(t), setScopeId(t, i) {
    t.setAttribute(i, "");
  }, insertStaticContent(t, i, e, n, r, s) {
    const o = e ? e.previousSibling : i.lastChild;
    if (r && (r === s || r.nextSibling)) for (; i.insertBefore(r.cloneNode(true), e), !(r === s || !(r = r.nextSibling)); ) ;
    else {
      Hs.innerHTML = go(n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t);
      const l = Hs.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; ) l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      i.insertBefore(l, e);
    }
    return [o ? o.nextSibling : i.firstChild, e ? e.previousSibling : i.lastChild];
  } };
  var Kl = /* @__PURE__ */ Symbol("_vtc");
  function Xl(t, i, e) {
    const n = t[Kl];
    n && (i = (i ? [i, ...n] : [...n]).join(" ")), i == null ? t.removeAttribute("class") : e ? t.setAttribute("class", i) : t.className = i;
  }
  var ji = /* @__PURE__ */ Symbol("_vod");
  var mo = /* @__PURE__ */ Symbol("_vsh");
  var Xe = { name: "show", beforeMount(t, { value: i }, { transition: e }) {
    t[ji] = t.style.display === "none" ? "" : t.style.display, e && i ? e.beforeEnter(t) : ri(t, i);
  }, mounted(t, { value: i }, { transition: e }) {
    e && i && e.enter(t);
  }, updated(t, { value: i, oldValue: e }, { transition: n }) {
    !i != !e && (n ? i ? (n.beforeEnter(t), ri(t, true), n.enter(t)) : n.leave(t, () => {
      ri(t, false);
    }) : ri(t, i));
  }, beforeUnmount(t, { value: i }) {
    ri(t, i);
  } };
  function ri(t, i) {
    t.style.display = i ? t[ji] : "none", t[mo] = !i;
  }
  var Yl = /* @__PURE__ */ Symbol("");
  var Jl = /(?:^|;)\s*display\s*:/;
  function Ql(t, i, e) {
    const n = t.style, r = De(e);
    let s = false;
    if (e && !r) {
      if (i) if (De(i)) for (const o of i.split(";")) {
        const l = o.slice(0, o.indexOf(":")).trim();
        e[l] == null && Li(n, l, "");
      }
      else for (const o in i) e[o] == null && Li(n, o, "");
      for (const o in e) o === "display" && (s = true), Li(n, o, e[o]);
    } else if (r) {
      if (i !== e) {
        const o = n[Yl];
        o && (e += ";" + o), n.cssText = e, s = Jl.test(e);
      }
    } else i && t.removeAttribute("style");
    ji in t && (t[ji] = s ? n.display : "", t[mo] && (n.display = "none"));
  }
  var Os = /\s*!important$/;
  function Li(t, i, e) {
    if (de(e)) e.forEach((n) => Li(t, i, n));
    else if (e == null && (e = ""), i.startsWith("--")) t.setProperty(i, e);
    else {
      const n = $l(t, i);
      Os.test(e) ? t.setProperty(Dt(n), e.replace(Os, ""), "important") : t[n] = e;
    }
  }
  var Fs = ["Webkit", "Moz", "ms"];
  var wn = {};
  function $l(t, i) {
    const e = wn[i];
    if (e) return e;
    let n = Je(i);
    if (n !== "filter" && n in t) return wn[i] = n;
    n = Ji(n);
    for (let r = 0; r < Fs.length; r++) {
      const s = Fs[r] + n;
      if (s in t) return wn[i] = s;
    }
    return i;
  }
  var ks = "http://www.w3.org/1999/xlink";
  function Bs(t, i, e, n, r, s = $o(i)) {
    n && i.startsWith("xlink:") ? e == null ? t.removeAttributeNS(ks, i.slice(6, i.length)) : t.setAttributeNS(ks, i, e) : e == null || s && !fr(e) ? t.removeAttribute(i) : t.setAttribute(i, s ? "" : wt(e) ? String(e) : e);
  }
  function Vs(t, i, e, n, r) {
    if (i === "innerHTML" || i === "textContent") {
      e != null && (t[i] = i === "innerHTML" ? go(e) : e);
      return;
    }
    const s = t.tagName;
    if (i === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const l = s === "OPTION" ? t.getAttribute("value") || "" : t.value, a = e == null ? t.type === "checkbox" ? "on" : "" : String(e);
      (l !== a || !("_value" in t)) && (t.value = a), e == null && t.removeAttribute(i), t._value = e;
      return;
    }
    let o = false;
    if (e === "" || e == null) {
      const l = typeof t[i];
      l === "boolean" ? e = fr(e) : e == null && l === "string" ? (e = "", o = true) : l === "number" && (e = 0, o = true);
    }
    try {
      t[i] = e;
    } catch {
    }
    o && t.removeAttribute(r || i);
  }
  function Zt(t, i, e, n) {
    t.addEventListener(i, e, n);
  }
  function eu(t, i, e, n) {
    t.removeEventListener(i, e, n);
  }
  var zs = /* @__PURE__ */ Symbol("_vei");
  function tu(t, i, e, n, r = null) {
    const s = t[zs] || (t[zs] = {}), o = s[i];
    if (n && o) o.value = n;
    else {
      const [l, a] = iu(i);
      if (n) {
        const u = s[i] = ru(n, r);
        Zt(t, l, u, a);
      } else o && (eu(t, l, o, a), s[i] = void 0);
    }
  }
  var Ns = /(?:Once|Passive|Capture)$/;
  function iu(t) {
    let i;
    if (Ns.test(t)) {
      i = {};
      let n;
      for (; n = t.match(Ns); ) t = t.slice(0, t.length - n[0].length), i[n[0].toLowerCase()] = true;
    }
    return [t[2] === ":" ? t.slice(3) : Dt(t.slice(2)), i];
  }
  var _n = 0;
  var nu = Promise.resolve();
  var su = () => _n || (nu.then(() => _n = 0), _n = Date.now());
  function ru(t, i) {
    const e = (n) => {
      if (!n._vts) n._vts = Date.now();
      else if (n._vts <= e.attached) return;
      ut(ou(n, e.value), i, 5, [n]);
    };
    return e.value = t, e.attached = su(), e;
  }
  function ou(t, i) {
    if (de(i)) {
      const e = t.stopImmediatePropagation;
      return t.stopImmediatePropagation = () => {
        e.call(t), t._stopped = true;
      }, i.map((n) => (r) => !r._stopped && n && n(r));
    } else return i;
  }
  var Us = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123;
  var au = (t, i, e, n, r, s) => {
    const o = r === "svg";
    i === "class" ? Xl(t, n, o) : i === "style" ? Ql(t, e, n) : Zi(i) ? Un(i) || tu(t, i, e, n, s) : (i[0] === "." ? (i = i.slice(1), true) : i[0] === "^" ? (i = i.slice(1), false) : lu(t, i, n, o)) ? (Vs(t, i, n), !t.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && Bs(t, i, n, o, s, i !== "value")) : t._isVueCE && (/[A-Z]/.test(i) || !De(n)) ? Vs(t, Je(i), n, s, i) : (i === "true-value" ? t._trueValue = n : i === "false-value" && (t._falseValue = n), Bs(t, i, n, o));
  };
  function lu(t, i, e, n) {
    if (n) return !!(i === "innerHTML" || i === "textContent" || i in t && Us(i) && fe(e));
    if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "sandbox" && t.tagName === "IFRAME" || i === "form" || i === "list" && t.tagName === "INPUT" || i === "type" && t.tagName === "TEXTAREA") return false;
    if (i === "width" || i === "height") {
      const r = t.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Us(i) && De(e) ? false : i in t;
  }
  var Ws = (t) => {
    const i = t.props["onUpdate:modelValue"] || false;
    return de(i) ? (e) => Pi(i, e) : i;
  };
  function uu(t) {
    t.target.composing = true;
  }
  function js(t) {
    const i = t.target;
    i.composing && (i.composing = false, i.dispatchEvent(new Event("input")));
  }
  var Tn = /* @__PURE__ */ Symbol("_assign");
  function Gs(t, i, e) {
    return i && (t = t.trim()), e && (t = jn(t)), t;
  }
  var Gi = { created(t, { modifiers: { lazy: i, trim: e, number: n } }, r) {
    t[Tn] = Ws(r);
    const s = n || r.props && r.props.type === "number";
    Zt(t, i ? "change" : "input", (o) => {
      o.target.composing || t[Tn](Gs(t.value, e, s));
    }), (e || s) && Zt(t, "change", () => {
      t.value = Gs(t.value, e, s);
    }), i || (Zt(t, "compositionstart", uu), Zt(t, "compositionend", js), Zt(t, "change", js));
  }, mounted(t, { value: i }) {
    t.value = i ?? "";
  }, beforeUpdate(t, { value: i, oldValue: e, modifiers: { lazy: n, trim: r, number: s } }, o) {
    if (t[Tn] = Ws(o), t.composing) return;
    const l = (s || t.type === "number") && !/^0\d/.test(t.value) ? jn(t.value) : t.value, a = i ?? "";
    l !== a && (document.activeElement === t && t.type !== "range" && (n && i === e || r && t.value.trim() === a) || (t.value = a));
  } };
  var cu = ["ctrl", "shift", "alt", "meta"];
  var hu = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, i) => cu.some((e) => t[`${e}Key`] && !i.includes(e)) };
  var zt = (t, i) => {
    const e = t._withMods || (t._withMods = {}), n = i.join(".");
    return e[n] || (e[n] = (r, ...s) => {
      for (let o = 0; o < i.length; o++) {
        const l = hu[i[o]];
        if (l && l(r, i)) return;
      }
      return t(r, ...s);
    });
  };
  var du = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
  var Ot = (t, i) => {
    const e = t._withKeys || (t._withKeys = {}), n = i.join(".");
    return e[n] || (e[n] = (r) => {
      if (!("key" in r)) return;
      const s = Dt(r.key);
      if (i.some((o) => o === s || du[o] === s)) return t(r);
    });
  };
  var fu = ze({ patchProp: au }, Zl);
  var qs;
  function pu() {
    return qs || (qs = Cl(fu));
  }
  var gu = (...t) => {
    const i = pu().createApp(...t), { mount: e } = i;
    return i.mount = (n) => {
      const r = vu(n);
      if (!r) return;
      const s = i._component;
      !fe(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const o = e(r, false, mu(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
    }, i;
  };
  function mu(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function vu(t) {
    return De(t) ? document.querySelector(t) : t;
  }
  var $ = (t, i) => {
    const e = t.__vccOpts || t;
    for (const [n, r] of i) e[n] = r;
    return e;
  };
  var yu = {};
  var wu = { class: "tify-icon -close", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function _u(t, i) {
    return E(), A("svg", wu, [...i[0] || (i[0] = [R("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, null, -1)])]);
  }
  var vo = $(yu, [["render", _u]]);
  var Tu = { blobBaseUrl: "https://github.com/tify-iiif-viewer/tify/blob/v0.35.0", bugsUrl: "https://github.com/tify-iiif-viewer/tify/issues", license: "AGPL-3.0", repositoryUrl: "https://github.com/tify-iiif-viewer/tify", version: "0.35.0" };
  var xu = { computed: { env: () => Tu } };
  var bu = { class: "tify-help", tabindex: "0" };
  var Eu = { class: "tify-sr-only" };
  var Cu = ["innerHTML"];
  var Su = { class: "tify-list" };
  var Pu = ["href"];
  var Ru = ["href"];
  var Du = ["href"];
  var Au = ["href"];
  var Lu = { class: "tify-help-footer" };
  var Iu = ["innerHTML"];
  function Mu(t, i, e, n, r, s) {
    return E(), A("section", bu, [R("h2", Eu, B(t.$translate("Help")), 1), R("h3", null, B(t.$translate("About TIFY")), 1), R("p", { innerHTML: t.$translate("$info") }, null, 8, Cu), R("ul", Su, [R("li", null, [R("a", { href: s.env.repositoryUrl }, B(t.$translate("Source code")), 9, Pu)]), R("li", null, [R("a", { href: `${s.env.blobBaseUrl}/doc` }, B(t.$translate("Documentation")), 9, Ru)]), R("li", null, [R("a", { href: `${s.env.blobBaseUrl}/CONTRIBUTORS.md` }, B(t.$translate("Contributors")), 9, Du)]), R("li", null, [R("a", { href: s.env.bugsUrl }, B(t.$translate("Report a bug")), 9, Au)])]), R("footer", Lu, [R("p", { innerHTML: t.$translate("$copyright") }, null, 8, Iu), R("p", null, [Ge(B(t.$translate("Version")) + " ", 1), R("b", null, B(s.env.version), 1)])])]);
  }
  var Hu = $(xu, [["render", Mu]]);
  var Ou = {};
  var Fu = { class: "tify-icon -plus", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function ku(t, i) {
    return E(), A("svg", Fu, [...i[0] || (i[0] = [R("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, null, -1)])]);
  }
  var ss = $(Ou, [["render", ku]]);
  var Bu = {};
  var Vu = { class: "tify-icon -minus", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function zu(t, i) {
    return E(), A("svg", Vu, [...i[0] || (i[0] = [R("path", { d: "M19,13H5V11H19V13Z" }, null, -1)])]);
  }
  var rs = $(Bu, [["render", zu]]);
  var Nu = { name: "CollectionNode", props: { item: { type: Object, default: () => {
  } } }, data() {
    return { children: null, expanded: false };
  }, computed: { id() {
    return this.$getId(Vi());
  } }, methods: { toggleChildren() {
    if (this.expanded) {
      this.expanded = false;
      return;
    }
    if (this.children) {
      this.expanded = true;
      return;
    }
    if (this.item.children) {
      this.children = this.item.children, this.expanded = true;
      return;
    }
    this.$store.fetchJson(this.item["@id"] || this.item.id).then((t) => {
      this.children = t.collections || t.items || t.manifests || [], this.expanded = true;
    }, (t) => {
      const i = t.response && (t.response.statusText || t.response.data) || t.message;
      this.$store.addError(`Error loading IIIF manifest: ${i}`), this.children = false;
    });
  } } };
  var Uu = ["aria-controls", "aria-expanded", "aria-label"];
  var Wu = ["id"];
  var ju = ["id"];
  function Gu(t, i, e, n, r, s) {
    const o = rs, l = ss, a = jr("CollectionNode", true);
    return E(), A("li", { class: Pe(["tify-collection-item", { "-current": t.$store.manifest && t.$store.manifest.id === (e.item["@id"] || e.item.id) }]) }, [e.item.type === "Collection" ? (E(), A("button", { key: 0, type: "button", class: "tify-collection-link -has-children", "aria-controls": s.id, "aria-expanded": r.expanded, "aria-label": t.$translate(r.expanded ? "Collapse" : "Expand"), onClick: i[0] || (i[0] = (u) => s.toggleChildren()) }, [r.expanded ? (E(), le(o, { key: 0 })) : (E(), le(l, { key: 1 })), Ge(" " + B(t.$store.localize(e.item.label)), 1)], 8, Uu)) : (E(), A("a", { key: 1, href: "javascript:;", class: "tify-collection-link", onClick: i[1] || (i[1] = (u) => t.$store.loadManifest(e.item["@id"] || e.item.id, { expectedType: e.item.type, reset: true })) }, B(t.$store.localize(e.item.label)), 1)), r.children !== false ? ke((E(), A("ol", { key: 2, id: s.id, class: "tify-collection-list" }, [(E(true), A(ue, null, Ce(r.children, (u) => (E(), le(a, { key: u.id, item: u }, null, 8, ["item"]))), 128))], 8, Wu)), [[Xe, r.expanded]]) : ke((E(), A("p", { key: 3, id: s.id, class: "tify-collection-error" }, B(t.$translate("Could not load child manifest")), 9, ju)), [[Xe, r.expanded]])], 2);
  }
  var qu = $(Nu, [["render", Gu]]);
  var Zu = { data() {
    return { filter: "" };
  }, computed: { filteredItems() {
    const t = this.filter.trim().toLowerCase().split(/\s+/);
    return this.$store.collection.items.filter((i) => {
      const e = this.$store.localize(i.label).toLowerCase();
      return t.every((n) => e.includes(n));
    });
  } } };
  var Ku = { class: "tify-collection", tabindex: "0" };
  var Xu = { class: "tify-collection-header" };
  var Yu = { class: "tify-sr-only" };
  var Ju = { key: 0, class: "tify-collection-controls" };
  var Qu = ["aria-label", "placeholder"];
  var $u = ["disabled"];
  var ec = { key: 0, class: "tify-collection-list" };
  var tc = { key: 1, class: "tify-collection-no-results" };
  function ic(t, i, e, n, r, s) {
    const o = qu;
    return E(), A("section", Ku, [R("header", Xu, [R("h2", Yu, B(t.$translate("Collection")), 1), t.$store.collection.items.length > 5 ? (E(), A("div", Ju, [ke(R("input", { "onUpdate:modelValue": i[0] || (i[0] = (l) => r.filter = l), "aria-label": t.$translate("Filter collection"), class: "tify-collection-filter", placeholder: t.$translate("Filter collection"), type: "text", onKeydown: [i[1] || (i[1] = Ot(zt((l) => r.filter ? r.filter = "" : l.target.blur(), ["prevent"]), ["esc"])), i[2] || (i[2] = zt(() => {
    }, ["stop"]))] }, null, 40, Qu), [[Gi, r.filter]]), R("button", { type: "button", class: "tify-collection-reset", disabled: !r.filter, onClick: i[3] || (i[3] = (l) => r.filter = "") }, B(t.$translate("Reset")), 9, $u)])) : J("", true)]), s.filteredItems.length ? (E(), A("ol", ec, [(E(true), A(ue, null, Ce(s.filteredItems, (l) => (E(), le(o, { key: l.id, item: l }, null, 8, ["item"]))), 128))])) : (E(), A("p", tc, B(t.$translate("No results")), 1))]);
  }
  var nc = $(Zu, [["render", ic]]);
  function yo(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Ii = { exports: {} };
  var sc = Ii.exports;
  var Zs;
  function rc() {
    return Zs || (Zs = 1, (function(t) {
      (function(i) {
        if (typeof e != "function") {
          var e = function(v) {
            return v;
          };
          e.nonNative = true;
        }
        const n = e("plaintext"), r = e("html"), s = e("comment"), o = /<(\w*)>/g, l = /<\/?([^\s\/>]+)/;
        function a(v, y, x) {
          v = v || "", y = y || [], x = x || "";
          let T = c(y, x);
          return h(v, T);
        }
        function u(v, y) {
          v = v || [], y = y || "";
          let x = c(v, y);
          return function(C) {
            return h(C || "", x);
          };
        }
        a.init_streaming_mode = u;
        function c(v, y) {
          return v = f(v), { allowable_tags: v, tag_replacement: y, state: n, tag_buffer: "", depth: 0, in_quote_char: "" };
        }
        function h(v, y) {
          if (typeof v != "string") throw new TypeError("'html' parameter must be a string");
          let x = y.allowable_tags, T = y.tag_replacement, C = y.state, H = y.tag_buffer, k = y.depth, N = y.in_quote_char, Y = "";
          for (let K = 0, q = v.length; K < q; K++) {
            let ee = v[K];
            if (C === n) switch (ee) {
              case "<":
                C = r, H += ee;
                break;
              default:
                Y += ee;
                break;
            }
            else if (C === r) switch (ee) {
              case "<":
                if (N) break;
                k++;
                break;
              case ">":
                if (N) break;
                if (k) {
                  k--;
                  break;
                }
                N = "", C = n, H += ">", x.has(m(H)) ? Y += H : Y += T, H = "";
                break;
              case '"':
              case "'":
                ee === N ? N = "" : N = N || ee, H += ee;
                break;
              case "-":
                H === "<!-" && (C = s), H += ee;
                break;
              case " ":
              case `
`:
                if (H === "<") {
                  C = n, Y += "< ", H = "";
                  break;
                }
                H += ee;
                break;
              default:
                H += ee;
                break;
            }
            else if (C === s) switch (ee) {
              case ">":
                H.slice(-2) == "--" && (C = n), H = "";
                break;
              default:
                H += ee;
                break;
            }
          }
          return y.state = C, y.tag_buffer = H, y.depth = k, y.in_quote_char = N, Y;
        }
        function f(v) {
          let y = /* @__PURE__ */ new Set();
          if (typeof v == "string") {
            let x;
            for (; x = o.exec(v); ) y.add(x[1]);
          } else !e.nonNative && typeof v[e.iterator] == "function" ? y = new Set(v) : typeof v.forEach == "function" && v.forEach(y.add, y);
          return y;
        }
        function m(v) {
          let y = l.exec(v);
          return y ? y[1].toLowerCase() : null;
        }
        t.exports ? t.exports = a : i.striptags = a;
      })(sc);
    })(Ii)), Ii.exports;
  }
  var oc = rc();
  var wo = yo(oc);
  var ac = { props: { number: { type: Number, required: true }, wrap: { type: Boolean, default: false } }, computed: { classes() {
    return { L: "tify-page-name-label", P: "tify-page-name-number" };
  }, label() {
    return wo(this.$store.localize(this.$store.manifest.items[this.number - 1].label)) || this.$translate("$n/a");
  }, html() {
    return `<span>${this.$store.options.pageLabelFormat}</span>`.replace("P", `${this.number}`).replace("L", `</span>${this.label}<span>`).replace("<span></span>", "");
  } } };
  var lc = ["innerHTML"];
  function uc(t, i, e, n, r, s) {
    return E(), A("span", { class: Pe(["tify-page-name", { "-wrap": e.wrap }]), innerHTML: s.html }, null, 10, lc);
  }
  var ti = $(ac, [["render", uc]]);
  var cc = {};
  var hc = { class: "tify-icon -chevron-up", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function dc(t, i) {
    return E(), A("svg", hc, [...i[0] || (i[0] = [R("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, null, -1)])]);
  }
  var _o = $(cc, [["render", dc]]);
  var fc = {};
  var pc = { class: "tify-icon -chevron-down", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gc(t, i) {
    return E(), A("svg", pc, [...i[0] || (i[0] = [R("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, null, -1)])]);
  }
  var To = $(fc, [["render", gc]]);
  function cn(t) {
    const i = ["a", "b", "br", "i", "img", "p", "span"], e = { a: ["href"], img: ["alt", "src"] };
    let n = wo(t, i);
    const r = /<(\w+)((\s+.+?(\s*=\s*(?:".*?"|'.*?'|.*?|[\^'">\s]+))?)+\s*|\s*)>/g;
    return n = n.replace(r, (s, o, l) => {
      if (!l) return `<${o}>`;
      const a = /(?:([^\s"'=]+)(?:=(?:"(.*?)"|'(.*?)'|([^\s>]+)))?)/g, u = [];
      return l.replace(a, (c, h) => {
        var f;
        (f = e[o]) != null && f.includes(h) && u.push(c);
      }), u.length > 0 ? `<${o} ${u.join(" ")}>` : `<${o}>`;
    }), n;
  }
  function Ks(t, i) {
    if (!(t instanceof Array) || !i || new Set(t).size !== t.length) return false;
    for (let e = 0, n = t.length; e < n; e += 1) if (!Number.isInteger(t[e]) || e > 0 && t[e] > 0 && t[e] <= t[e - 1] || t[e] < -1 || t[e] > i) return false;
    return true;
  }
  function os(t, i = ["https:", "http:"]) {
    let e;
    try {
      e = new URL(t);
    } catch {
      return false;
    }
    return i.includes(e.protocol);
  }
  var mc = { props: { metadata: { type: Array, default: () => [] } }, data() {
    return { infoItems: [] };
  }, watch: { metadata() {
    this.init();
  }, "$store.options.view": { handler(t) {
    t === "info" && this.init();
  }, immediate: true } }, methods: { init() {
    this.$nextTick(() => {
      var t;
      (t = this.$refs.contents) == null || t.forEach((i, e) => {
        const n = i.offsetHeight;
        this.infoItems[e] = { collapsed: true, exceedsHeight: true }, this.$nextTick(() => {
          const r = i.offsetHeight, s = n >= r;
          this.infoItems[e] = { collapsed: s, exceedsHeight: s };
        });
      });
    });
  }, filterHtml: cn, isValidUrl: os } };
  var vc = { class: "tify-info-metadata" };
  var yc = { key: 0 };
  var wc = { class: "tify-info-value" };
  var _c = ["href"];
  var Tc = ["innerHTML"];
  var xc = ["onClick"];
  function bc(t, i, e, n, r, s) {
    const o = To, l = _o;
    return E(), A("div", vc, [(E(true), A(ue, null, Ce(e.metadata, (a, u) => (E(), A("div", { key: u }, [a.label ? (E(), A("h4", yc, B(t.$store.localize(a.label)), 1)) : J("", true), R("div", { ref_for: true, ref: "contents", class: Pe(["tify-info-content", { "-collapsed": r.infoItems[u] && r.infoItems[u].collapsed }]) }, [R("div", wc, [s.isValidUrl(a.value) ? (E(), A("p", { key: `url-${u}` }, [R("a", { href: a.value }, B(a.value), 9, _c)])) : (E(), A("div", { key: `html-${u}`, innerHTML: s.filterHtml(t.$store.localize(a.value)) || t.$translate("$n/a") }, null, 8, Tc))]), r.infoItems[u] && r.infoItems[u].exceedsHeight ? (E(), A("button", { key: 0, type: "button", class: "tify-info-toggle", onClick: (c) => r.infoItems[u].collapsed = !r.infoItems[u].collapsed }, [r.infoItems[u].collapsed ? (E(), A(ue, { key: 0 }, [ie(o), Ge(" " + B(t.$translate("Expand")), 1)], 64)) : (E(), A(ue, { key: 1 }, [ie(l), Ge(" " + B(t.$translate("Collapse")), 1)], 64))], 8, xc)) : J("", true)], 2)]))), 128))]);
  }
  var Ec = $(mc, [["render", bc]]);
  function Cc(t, i) {
    try {
      return new Date(t).toLocaleDateString(i, { month: "long", day: "numeric", year: "numeric" });
    } catch {
      return t;
    }
  }
  var Sc = { data() {
    return { collectionDataShown: false };
  }, computed: { hasProvider() {
    var t;
    return (t = this.manifestOrCollection.provider) == null ? void 0 : t.some((i) => {
      var e;
      return this.$store.localize(i.label) || ((e = i.homepage) == null ? void 0 : e.length);
    });
  }, homepages() {
    return [].concat(this.manifestOrCollection.homepage || []);
  }, logos() {
    var i;
    let t = [].concat(this.manifestOrCollection.logo || []);
    return (i = this.manifestOrCollection.provider) == null || i.forEach((e) => {
      e.logo && (t = t.concat(e.logo));
    }), t = [...new Map(t.map((e) => [e.id, e])).values()], t = t.map((e) => {
      var n, r, s, o;
      return { id: e.id, link: ((r = (n = e.service) == null ? void 0 : n[0]) == null ? void 0 : r.id) || ((o = (s = e.service) == null ? void 0 : s[0]) == null ? void 0 : o["@id"]) };
    }), t;
  }, manifestOrCollection() {
    return this.collectionDataShown ? this.$store.collection : this.$store.manifest || this.$store.collection || {};
  }, metadataItems() {
    return this.$store.manifest.items.map((t, i) => ({ metadata: t.metadata, number: i + 1 })).filter(({ metadata: t, number: i }) => (t == null ? void 0 : t.length) && this.$store.options.pages.includes(i));
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0).map((t) => {
      var n, r;
      const i = { page: t, media: [] }, e = (r = (n = this.$store.manifest.items[t - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      return e == null || e.forEach((s) => {
        var l;
        const o = ((l = s.body) == null ? void 0 : l.items) || [s.body];
        i.media.push(...o.filter((a) => a.label).map((a) => ({ label: a.label })));
      }), i;
    });
  } }, methods: { filterHtml: cn, formatDate: Cc, isValidUrl: os } };
  var Pc = { class: "tify-info", tabindex: "0" };
  var Rc = { class: "tify-sr-only" };
  var Dc = { key: 0, class: "tify-info-header" };
  var Ac = ["aria-pressed"];
  var Lc = ["aria-pressed"];
  var Ic = { key: 1, class: "tify-info-section -title" };
  var Mc = { key: 2, class: "tify-info-section -time" };
  var Hc = { key: 3, class: "tify-info-section -place" };
  var Oc = { key: 4, class: "tify-info-section -metadata" };
  var Fc = { key: 5, class: "tify-info-section -description" };
  var kc = { key: 6, class: "tify-info-section -metadata -structure" };
  var Bc = { key: 0, class: "tify-info-structure" };
  var Vc = { key: 7, class: "tify-info-section -pages" };
  var zc = { class: "tify-list -unstyled" };
  var Nc = { key: 0, class: "tify-info-image-labels" };
  var Uc = { key: 8, class: "tify-info-section -related" };
  var Wc = { class: "tify-list" };
  var jc = ["href"];
  var Gc = ["href"];
  var qc = { key: 9, class: "tify-info-section -attribution" };
  var Zc = ["innerHTML"];
  var Kc = { key: 10, class: "tify-info-section -license" };
  var Xc = ["href"];
  var Yc = { key: 11, class: "tify-info-section -provider" };
  var Jc = { key: 0 };
  var Qc = { key: 1, class: "tify-list" };
  var $c = ["href"];
  var eh = { key: 12, class: "tify-info-section -logo" };
  var th = ["href"];
  var ih = ["src", "alt"];
  var nh = ["src", "alt"];
  function sh(t, i, e, n, r, s) {
    var a, u, c, h;
    const o = Ec, l = ti;
    return E(), A("section", Pc, [R("h2", Rc, B(t.$translate("Info")), 1), t.$store.collection && t.$store.manifest ? (E(), A("div", Dc, [R("button", { type: "button", class: "tify-info-button", "aria-pressed": !r.collectionDataShown, onClick: i[0] || (i[0] = (f) => r.collectionDataShown = false) }, B(t.$translate("Document")), 9, Ac), R("button", { type: "button", class: "tify-info-button", "aria-pressed": r.collectionDataShown, onClick: i[1] || (i[1] = (f) => r.collectionDataShown = true) }, B(t.$translate("Collection")), 9, Lc)])) : J("", true), s.manifestOrCollection.label ? (E(), A("div", Ic, [R("h3", null, B(t.$translate("Title")), 1), R("p", null, B(t.$store.localize(s.manifestOrCollection.label)), 1)])) : J("", true), s.manifestOrCollection.navDate ? (E(), A("div", Mc, [R("h3", null, B(t.$translate("Date")), 1), R("p", null, B(s.formatDate(s.manifestOrCollection.navDate, t.$store.options.language)), 1)])) : J("", true), s.manifestOrCollection.navPlace ? (E(), A("div", Hc, [R("h3", null, B(t.$translate("Place")), 1), (E(true), A(ue, null, Ce(s.manifestOrCollection.navPlace.features, (f) => (E(), A("p", { key: f.id }, B(t.$store.localize(f.properties.label)), 1))), 128))])) : J("", true), s.manifestOrCollection.metadata && s.manifestOrCollection.metadata.length ? (E(), A("div", Oc, [R("h3", null, B(t.$translate("Metadata")), 1), t.$store.options.view === "info" ? (E(), le(o, { key: 0, metadata: s.manifestOrCollection.metadata }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.summary ? (E(), A("div", Fc, [R("h3", null, B(t.$translate("Description")), 1), t.$store.options.view === "info" ? (E(), le(o, { key: 0, metadata: [{ value: s.manifestOrCollection.summary }] }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.structures && ((a = t.$store.currentStructure) != null && a.label || (u = t.$store.currentStructure) != null && u.metadata) ? (E(), A("div", kc, [R("h3", null, B(t.$translate("Current Section")), 1), (c = t.$store.currentStructure) != null && c.label ? (E(), A("p", Bc, B(t.$store.localize(t.$store.currentStructure.label)), 1)) : J("", true), t.$store.options.view === "info" && ((h = t.$store.currentStructure) != null && h.metadata) ? (E(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.currentStructure.metadata }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.type === "Manifest" ? (E(), A("div", Vc, [R("h3", null, B(t.$translate(s.pages.length > 1 ? "Current Pages" : "Current Page")), 1), R("ol", zc, [(E(true), A(ue, null, Ce(s.pages, (f) => (E(), A("li", { key: f }, [ie(l, { number: f.page, wrap: "" }, null, 8, ["number"]), f.media.length ? (E(), A("ul", Nc, [(E(true), A(ue, null, Ce(f.media, (m, v) => (E(), A("li", { key: v }, B(t.$store.localize(m.label)), 1))), 128))])) : J("", true), t.$store.manifest.items[f.page - 1].metadata ? (E(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.manifest.items[f.page - 1].metadata }, null, 8, ["metadata"])) : J("", true)]))), 128))])])) : J("", true), s.homepages.length ? (E(), A("div", Uc, [R("h3", null, B(t.$translate("Related Resources")), 1), R("ul", Wc, [(E(true), A(ue, null, Ce(s.homepages, (f, m) => (E(), A("li", { key: m }, [typeof f == "string" ? (E(), A("a", { key: 0, href: f }, B(f), 9, jc)) : (E(), A("a", { key: 1, href: f.id }, B(f.label ? t.$store.localize(f.label) : f.id), 9, Gc))]))), 128))])])) : J("", true), s.manifestOrCollection.requiredStatement ? (E(), A("div", qc, [R("h3", null, B(t.$store.localize(s.manifestOrCollection.requiredStatement.label)), 1), R("div", { innerHTML: s.filterHtml(t.$store.localize(s.manifestOrCollection.requiredStatement.value)) }, null, 8, Zc)])) : J("", true), s.manifestOrCollection.rights ? (E(), A("div", Kc, [R("h3", null, B(t.$translate("License")), 1), R("p", null, [R("a", { href: s.manifestOrCollection.rights }, B(s.manifestOrCollection.rights), 9, Xc)])])) : J("", true), s.hasProvider ? (E(), A("div", Yc, [R("h3", null, B(t.$translate("Provided by")), 1), (E(true), A(ue, null, Ce(s.manifestOrCollection.provider, (f) => {
      var m, v;
      return E(), A("div", { key: f.id }, [f.label ? (E(), A("p", Jc, B(t.$store.localize(f.label)), 1)) : J("", true), (m = f.homepage) != null && m.length || (v = f.seeAlso) != null && v.length ? (E(), A("ul", Qc, [(E(true), A(ue, null, Ce([...f.homepage || [], ...f.seeAlso || []], (y) => (E(), A("li", { key: y.id }, [R("a", { href: y.id }, B(y.label ? t.$store.localize(y.label) : y.id), 9, $c)]))), 128))])) : J("", true)]);
    }), 128))])) : J("", true), s.logos.length ? (E(), A("div", eh, [(E(true), A(ue, null, Ce(s.logos, (f, m) => (E(), A("p", { key: m }, [f.link ? (E(), A("a", { key: 0, href: f.link }, [R("img", { class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, ih)], 8, th)) : (E(), A("img", { key: 1, class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, nh))]))), 128))])) : J("", true)]);
  }
  var rh = $(Sc, [["render", sh]]);
  var oh = { name: "TocList", props: { level: { type: Number, default: 0 }, structures: { type: Array, default: () => [] }, purpose: { type: String, default: "" } }, data() {
    var t;
    return { expandedStructures: this.level === 0 && this.structures.length === 1 && ((t = this.structures[0].items) != null && t.some((i) => i.items)) ? [true] : [] };
  }, computed: { id() {
    return this.$getId(Vi());
  } }, methods: { getFirstPage(t) {
    if (t.items) return this.getFirstPage(t.items[0]);
    const i = this.$store.manifest.items.findIndex((e) => e.id === t.id);
    return i < 0 ? 1 : i + 1;
  }, getFirstPageLabel(t) {
    var e;
    const i = this.getFirstPage(t);
    return this.$store.localize((e = this.$store.manifest.items[i - 1]) == null ? void 0 : e.label);
  }, getLastPage(t) {
    if (t.items) return this.getLastPage(t.items.at(-1));
    const i = this.$store.manifest.items.findLastIndex((e) => e.id === t.id);
    return i < 0 ? this.$store.manifest.items.length : i + 1;
  }, isCurrentPageInStructure(t) {
    if (this.$store.manifest.items.filter((r, s) => this.$store.options.pages.includes(s + 1)).map((r) => r.id).some((r) => {
      var s;
      return (s = t.items) == null ? void 0 : s.some((o) => o.id === r);
    })) return true;
    const e = t.firstPage || this.getFirstPage(t), n = t.lastPage || this.getLastPage(t);
    return this.$store.options.pages.some((r) => r >= e && r <= n);
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, toggleAllChildren(t = null) {
    if (this.$refs.children) {
      for (let i = this.structures.length - 1; i >= 0; i -= 1) this.toggleChildren(i, t);
      this.$refs.children.forEach((i) => {
        i.toggleAllChildren(t);
      });
    }
  }, toggleChildren(t, i = null) {
    var n;
    (n = this.structures[t].items) != null && n.some((r) => r.items) && (this.expandedStructures[t] = i !== null ? i : !this.expandedStructures[t]);
  } } };
  var ah = { class: "tify-toc-list" };
  var lh = ["aria-controls", "aria-expanded", "aria-label", "title", "onClick"];
  var uh = ["href"];
  var ch = ["onClick"];
  var hh = { class: "tify-toc-label" };
  var dh = { class: "tify-toc-page" };
  var fh = ["onClick"];
  var ph = { class: "tify-toc-label" };
  function gh(t, i, e, n, r, s) {
    const o = rs, l = ss, a = jr("TocList", true);
    return E(), A("ul", ah, [(E(true), A(ue, null, Ce(e.structures, (u, c) => {
      var h, f;
      return E(), A("li", { key: c, class: Pe(["tify-toc-structure", { "-current": s.isCurrentPageInStructure(u), "-expanded": r.expandedStructures[c] }]) }, [(h = u.items) != null && h.some((m) => m.items) ? (E(), A("button", { key: 0, type: "button", class: "tify-toc-toggle", "aria-controls": `${s.id}-${c}`, "aria-expanded": !!r.expandedStructures[c], "aria-label": t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), title: t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), onClick: (m) => s.toggleChildren(c) }, [r.expandedStructures[c] ? (E(), le(o, { key: 0 })) : (E(), le(l, { key: 1 }))], 8, lh)) : J("", true), e.purpose === "pdf" ? (E(), A("a", { key: 1, class: "tify-toc-link", href: u.rendering[0].id, download: "" }, B(t.$store.localize(u.label)) + " (" + B(u.items.length) + "\xA0" + B(t.$translate(u.items.length === 1 ? "page" : "pages")) + ") ", 9, uh)) : u.label && t.$store.localize(u.label) !== s.getFirstPageLabel(u) ? (E(), A("a", { key: 2, class: "tify-toc-link -dots", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", hh, B(t.$store.localize(u.label)), 1), R("span", dh, B(s.getFirstPageLabel(u) || "\u2014"), 1)], 8, ch)) : (E(), A("a", { key: 3, class: "tify-toc-link", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", ph, B(t.$store.localize(u.label, "string") || s.getFirstPageLabel(u) || t.$translate("$n/a")), 1)], 8, fh)), (f = u.items) != null && f.some((m) => m.items) ? ke((E(), le(a, { key: 4, id: `${s.id}-${c}`, ref_for: true, ref: "children", level: e.level + 1, purpose: e.purpose, structures: u.items }, null, 8, ["id", "level", "purpose", "structures"])), [[Xe, r.expandedStructures[c]]]) : J("", true)], 2);
    }), 128))]);
  }
  var xo = $(oh, [["render", gh]]);
  var mh = {};
  var vh = { class: "tify-icon -filmstrip", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function yh(t, i) {
    return E(), A("svg", vh, [...i[0] || (i[0] = [R("path", { d: "M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" }, null, -1)])]);
  }
  var wh = $(mh, [["render", yh]]);
  var _h = {};
  var Th = { class: "tify-icon -waveform", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function xh(t, i) {
    return E(), A("svg", Th, [...i[0] || (i[0] = [R("path", { d: "M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z" }, null, -1)])]);
  }
  var bh = $(_h, [["render", xh]]);
  var Eh = { data() {
    return { otherItems: [], perElementPdfLinksVisible: false };
  }, computed: { hasElementPdfLinks() {
    var i, e;
    return (e = (i = this.$store.manifest.structures) == null ? void 0 : i[0]) != null && e.rendering ? this.$store.manifest.structures[0].rendering.some((n) => n.format && n.format === "application/pdf") : false;
  }, media() {
    const t = [];
    return this.$store.options.pages.filter((i) => i > 0).forEach((i) => {
      var n, r;
      const e = (r = (n = this.$store.manifest.items[i - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      e == null || e.forEach((s, o) => {
        var a;
        (((a = s.body) == null ? void 0 : a.items) || [s.body]).forEach((u, c) => {
          var m;
          const h = (m = u.format) == null ? void 0 : m.split("/")[1], f = { fileName: u.id.split("/").at(-1), format: h == null ? void 0 : h.toUpperCase(), label: u.label, type: u.type, url: u.id, page: i, itemIndex: o, layerIndex: c };
          if (u.service) {
            const v = [].concat(u.service)[0], y = ["ImageService2", "ImageService3"].includes(v.type || v["@type"]) ? "default" : "native", x = v.type === "ImageService3" ? "max" : "full", T = v.id || v["@id"], C = T.at(-1) === "/" ? "" : "/";
            f.url = `${T}${C}full/${x}/0/${y}.${h === "jpeg" ? "jpg" : h}`;
          }
          t.push(f);
        });
      });
    }), t;
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  }, renderings() {
    return [].concat(this.$store.manifest.rendering || []);
  } } };
  var Ch = { class: "tify-export", tabindex: "0" };
  var Sh = { class: "tify-sr-only" };
  var Ph = { key: 0, class: "tify-export-section -links" };
  var Rh = { class: "tify-export-list" };
  var Dh = ["href"];
  var Ah = { class: "tify-export-link-media" };
  var Lh = ["src"];
  var Ih = { class: "tify-export-link-text" };
  var Mh = { key: 0, class: "tify-export-link-hint" };
  var Hh = { class: "tify-export-link-format" };
  var Oh = { key: 1, class: "tify-export-section -renderings" };
  var Fh = { class: "tify-list" };
  var kh = ["href"];
  var Bh = { key: 0, class: "tify-export-container" };
  var Vh = ["aria-controls", "aria-expanded", "aria-label"];
  var zh = ["id"];
  var Nh = { class: "tify-export-section -iiif" };
  var Uh = { class: "tify-list" };
  var Wh = { key: 0 };
  var jh = ["href"];
  var Gh = ["href"];
  var qh = { key: 2, class: "tify-export-section -other" };
  var Zh = { class: "tify-list" };
  var Kh = ["href"];
  function Xh(t, i, e, n, r, s) {
    var h, f, m;
    const o = bh, l = wh, a = ti, u = vo, c = xo;
    return E(), A("section", Ch, [R("h2", Sh, B(t.$translate("Export [noun]")), 1), t.$store.manifest ? (E(), A("div", Ph, [R("h3", null, B(t.$translate("Media Files")), 1), R("ul", Rh, [(E(true), A(ue, null, Ce(s.media, (v) => (E(), A("li", { key: v.url }, [R("a", { href: v.url, class: "tify-export-link", download: "", rel: "noopener noreferrer", target: "_blank" }, [R("span", Ah, [t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex) ? (E(), A("img", { key: 0, src: t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex), alt: "" }, null, 8, Lh)) : v.type === "Sound" ? (E(), le(o, { key: 1 })) : v.type === "Video" ? (E(), le(l, { key: 2 })) : J("", true)]), R("span", Ih, [ie(a, { number: v.page, wrap: true }, null, 8, ["number"]), v.label ? (E(), A("span", Mh, B(t.$store.localize(v.label)), 1)) : J("", true), R("span", Hh, [v.type === "Sound" ? (E(), A(ue, { key: 0 }, [Ge(B(t.$translate("Audio")) + " \xB7 ", 1)], 64)) : v.type === "Video" ? (E(), A(ue, { key: 1 }, [Ge(B(t.$translate("Video")) + " \xB7 ", 1)], 64)) : v.type === "Image" ? (E(), A(ue, { key: 2 }, [Ge(B(t.$translate("Image")) + " \xB7 ", 1)], 64)) : J("", true), Ge(" " + B(v.format), 1)])])], 8, Dh)]))), 128))])])) : J("", true), (h = t.$store.manifest) != null && h.rendering ? (E(), A("div", Oh, [R("h3", null, B(t.$translate("Renderings")), 1), R("ul", Fh, [(E(true), A(ue, null, Ce(s.renderings, (v) => (E(), A("li", { key: v.id }, [R("a", { href: v.id }, B(t.$store.localize(v.label)), 9, kh)]))), 128))]), s.hasElementPdfLinks ? (E(), A("div", Bh, [R("button", { type: "button", class: Pe(["tify-export-toggle", { "-close": r.perElementPdfLinksVisible }]), "aria-controls": t.$getId("export-pdf-list"), "aria-expanded": r.perElementPdfLinksVisible, "aria-label": r.perElementPdfLinksVisible ? t.$translate("Close PDF list") : null, onClick: i[0] || (i[0] = (v) => r.perElementPdfLinksVisible = !r.perElementPdfLinksVisible) }, [r.perElementPdfLinksVisible ? (E(), le(u, { key: 1 })) : (E(), A(ue, { key: 0 }, [Ge(B(t.$translate("PDFs for each element")), 1)], 64))], 10, Vh), ke(R("div", { id: t.$getId("export-pdf-list"), class: "tify-export-toc" }, [R("h4", null, B(t.$translate("PDFs for each element")), 1), ie(c, { ref: "children", purpose: "pdf", level: 0, structures: t.$store.structures }, null, 8, ["structures"])], 8, zh), [[Xe, r.perElementPdfLinksVisible]])])) : J("", true)])) : J("", true), R("div", Nh, [i[1] || (i[1] = R("h3", null, "IIIF", -1)), R("ul", Uh, [t.$store.options.childManifestUrl ? (E(), A("li", Wh, [R("a", { href: t.$store.options.childManifestUrl, download: "manifest.json" }, B(t.$translate("IIIF manifest (current document)")), 9, jh)])) : J("", true), R("li", null, [R("a", { href: t.$store.options.manifestUrl, download: "manifest.json" }, B(t.$translate(t.$store.collection ? "IIIF manifest (collection)" : "IIIF manifest")), 9, Gh)])])]), (m = (f = t.$store.manifest) == null ? void 0 : f.seeAlso) != null && m.length ? (E(), A("div", qh, [R("h3", null, B(t.$translate("Other Formats")), 1), R("ul", Zh, [(E(true), A(ue, null, Ce(t.$store.manifest.seeAlso, (v) => (E(), A("li", { key: v.id }, [R("a", { href: v.id, download: "" }, B(v.label ? t.$store.localize(v.label) : v.id), 9, Kh)]))), 128))])])) : J("", true)]);
  }
  var Yh = $(Eh, [["render", Xh]]);
  function qi(t, i, e = 120) {
    const n = t, r = e === true ? 120 : e;
    if (!r || r < 0) {
      n.scrollTop = i;
      return;
    }
    const o = (i - t.scrollTop) / r / 0.1;
    setTimeout(() => {
      n.scrollTop += o, n.scrollTop !== i && qi(n, i, r - 10);
    }, 10);
  }
  function kn(t, i, e = true) {
    const n = i.querySelectorAll(t);
    if (!n.length) return;
    let r = n[0];
    const s = n[n.length - 1];
    Array.prototype.forEach.call(n, (u) => {
      u.dataset.level >= r.dataset.level && (r = u);
    });
    const o = i.getBoundingClientRect(), l = r.getBoundingClientRect(), a = s.getBoundingClientRect();
    if (l.top < o.top) {
      const u = l.top - o.top + i.scrollTop;
      qi(i, u - 50, e);
    } else if (a.bottom > o.bottom) {
      const u = a.bottom - o.bottom + i.scrollTop;
      qi(i, u + 50, e);
    }
  }
  var Xs = ".tify-toc-structure.-current";
  var Jh = { data() {
    return { isInited: false };
  }, computed: { isNested() {
    return this.$store.structures.filter((t) => {
      var i;
      return (i = t.items) == null ? void 0 : i.some((e) => e.items);
    }).length;
  } }, watch: { "$store.options.pages": function() {
    this.$nextTick(() => kn(Xs, this.$el));
  }, "$store.options.view": { handler(t) {
    t === "toc" && this.$nextTick(this.init);
  }, immediate: true } }, methods: { init() {
    this.isInited = true, this.$nextTick(() => kn(Xs, this.$el, false));
  } } };
  var Qh = { class: "tify-toc", tabindex: "0" };
  var $h = { class: "tify-sr-only" };
  var ed = { key: 0, class: "tify-toc-header" };
  function td(t, i, e, n, r, s) {
    const o = xo;
    return E(), A("section", Qh, [R("h2", $h, B(t.$translate("Table of Contents")), 1), s.isNested ? (E(), A("div", ed, [R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[0] || (i[0] = (l) => t.$refs.children.toggleAllChildren(true)) }, B(t.$translate("Expand all")), 1), R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[1] || (i[1] = (l) => t.$refs.children.toggleAllChildren(false)) }, B(t.$translate("Collapse all")), 1)])) : J("", true), r.isInited ? (E(), le(o, { key: 1, ref: "children", level: 0, structures: t.$store.structures }, null, 8, ["structures"])) : J("", true)]);
  }
  var id = $(Jh, [["render", td]]);
  var nd = {};
  var sd = { class: "tify-icon -image-broken-variant", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function rd(t, i) {
    return E(), A("svg", sd, [...i[0] || (i[0] = [R("path", { d: "M21,5V11.59L18,8.58L14,12.59L10,8.59L6,12.59L3,9.58V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M18,11.42L21,14.43V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V12.42L6,15.41L10,11.41L14,15.41" }, null, -1)])]);
  }
  var od = $(nd, [["render", rd]]);
  var ad = 750;
  var ld = { data() {
    return { itemHeight: 0, itemVMargin: 0, items: [{}], itemsPerRow: 0, lastScrollTop: 0, resizeObserver: null, resizeTimeout: null, style: {}, thumbnailWidth: 0, touchTimeout: null };
  }, watch: { "$store.options.pages": function(t) {
    this.$nextTick(() => {
      const i = ".tify-thumbnails-item.-current";
      t.length > 2 || t.length > 1 && t[1] !== t[0] + 1 || (this.$refs.container.querySelector(i) ? kn(i, this.$el) : this.scrollToCurrentPage());
    });
  }, "$store.options.view": { handler(t) {
    t === "thumbnails" && this.$nextTick(this.init);
  }, immediate: true } }, mounted() {
    this.style.flex = this.$el.style.flex;
  }, unmounted() {
    var t;
    (t = this.resizeObserver) == null || t.disconnect(), clearTimeout(this.resizeTimeout);
  }, methods: { init() {
    this.updateDimensions(), this.scrollToCurrentPage(false), this.resizeObserver = new ResizeObserver(this.onResize), this.resizeObserver.observe(this.$el);
  }, onResize() {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
      this.$store.options.view === "thumbnails" && this.updateDimensions();
    }, 200);
  }, updateDimensions() {
    if (!this.$refs.container) return;
    const t = this.$refs.container.querySelector(".tify-thumbnails-item"), i = t.currentStyle || window.getComputedStyle(t), e = parseInt(i.marginTop, 10) + parseFloat(i.marginBottom, 10);
    this.itemHeight = t.offsetHeight + e, this.itemVerticalMargin = e;
    const n = parseInt(i.marginLeft, 10) + parseFloat(i.marginRight, 10), r = t.offsetWidth + n;
    this.thumbnailWidth = t.offsetWidth, this.itemsPerRow = Math.floor(this.$refs.container.clientWidth / r);
    const o = Math.ceil(this.$store.manifest.items.length / this.itemsPerRow) * this.itemHeight;
    this.$refs.container.style.height = `${o}px`, this.redrawThumbnails(), this.scrollToCurrentPage(false);
  }, redrawThumbnails() {
    const t = this.$el.scrollTop, i = Math.floor(t / this.itemHeight) * this.itemsPerRow + 1, n = Math.ceil(this.$el.offsetHeight / this.itemHeight) * this.itemsPerRow, r = i + this.itemsPerRow + n, s = Math.min(this.$store.manifest.items.length, r), o = [];
    for (let l = i; l <= s; l += 1) o.push({ thumbnailUrl: this.$store.getThumbnailUrl(l, this.thumbnailWidth), page: l });
    this.items = o, this.$nextTick(() => {
      const l = Math.floor(i / this.itemsPerRow);
      this.$refs.container.style.paddingTop = `${l * this.itemHeight}px`;
    });
  }, scrollToCurrentPage(t = true) {
    const e = Math.floor((this.$store.options.pages[0] - 1) / this.itemsPerRow) * this.itemHeight + (this.itemVMargin - 50);
    t ? qi(this.$el, e) : this.$el.scrollTop = e;
  }, setPageAndSwitchView(t, i = false) {
    if (i) {
      const e = this.$store.options.pages.slice(0), n = e.indexOf(t);
      n < 0 ? (e.push(t), e.sort((r, s) => r - s), e[0] === 0 && e.shift()) : e.length > 1 && e.splice(n, 1), this.$store.updateOptions({ pages: e });
      return;
    }
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, touchStartTogglePage(t) {
    this.lastScrollTop = this.$el.scrollTop, this.touchTimeout = setTimeout(() => {
      this.$el.scrollTop === this.lastScrollTop && this.setPageAndSwitchView(t, true);
    }, ad);
  }, touchEnd() {
    clearTimeout(this.touchTimeout);
  } } };
  var ud = { class: "tify-sr-only" };
  var cd = { ref: "container", class: "tify-thumbnails-list" };
  var hd = ["onClick", "onTouchstart"];
  var dd = ["src"];
  var fd = { key: 1, class: "tify-thumbnails-image" };
  var pd = { class: "tify-sr-only" };
  function gd(t, i, e, n, r, s) {
    const o = od, l = ti;
    return E(), A("section", { class: "tify-thumbnails", tabindex: "0", onScroll: i[1] || (i[1] = (...a) => s.redrawThumbnails && s.redrawThumbnails(...a)) }, [R("h2", ud, B(t.$translate("Pages")), 1), R("ol", cd, [(E(true), A(ue, null, Ce(r.items, (a) => (E(), A("li", { key: a.page, class: Pe(["tify-thumbnails-item", { "-current": t.$store.options.pages.includes(a.page) }]) }, [R("button", { type: "button", class: "tify-thumbnails-button", onClick: zt((u) => s.setPageAndSwitchView(a.page, u.ctrlKey), ["prevent"]), onTouchstart: (u) => s.touchStartTogglePage(a.page), onTouchend: i[0] || (i[0] = (...u) => s.touchEnd && s.touchEnd(...u)) }, [a.thumbnailUrl ? (E(), A("img", { key: 0, class: "tify-thumbnails-image", alt: "", src: a.thumbnailUrl }, null, 8, dd)) : (E(), A("span", fd, [ie(o), R("span", pd, B(t.$translate("Image missing")), 1)])), ie(l, { number: a.page || 1 }, null, 8, ["number"])], 40, hd)], 2))), 128))], 512)], 32);
  }
  var md = $(ld, [["render", gd]]);
  var vd = { computed: { pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  } }, watch: { "$store.options.annotationId": function() {
    this.scrollToCurrentAnnotation();
  }, "$store.annotationsAvailable": function() {
    this.$store.options.annotationId && this.scrollToCurrentAnnotation();
  } }, mounted() {
    this.$store.options.annotationId && this.$store.annotationsAvailable && this.scrollToCurrentAnnotation();
  }, methods: { filterHtml: cn, scrollToCurrentAnnotation() {
    this.$nextTick(() => {
      var i;
      const t = (i = this.$refs.currentItem) == null ? void 0 : i[0];
      t && t.scrollIntoView({ behavior: "smooth", block: t.offsetHeight < this.$refs.panel.offsetHeight / 2 ? "center" : "start" });
    });
  } } };
  var yd = { ref: "panel", class: "tify-text", tabindex: "0" };
  var wd = { class: "tify-sr-only" };
  var _d = { key: 0, class: "tify-text-pages" };
  var Td = { key: 0 };
  var xd = { class: "tify-text-list" };
  var bd = ["onClick", "onKeydown", "innerHTML"];
  var Ed = { key: 1, class: "tify-text-none" };
  function Cd(t, i, e, n, r, s) {
    const o = ti;
    return E(), A("section", yd, [R("h2", wd, B(t.$translate("Text")), 1), t.$store.annotationsAvailable !== false ? (E(), A("div", _d, [(E(true), A(ue, null, Ce(s.pages, (l) => (E(), A("div", { key: l, class: "tify-text-page" }, [t.$store.pageCount > 1 ? (E(), A("h3", Td, [ie(o, { number: l }, null, 8, ["number"])])) : J("", true), R("ul", xd, [(E(true), A(ue, null, Ce(t.$store.annotations[l], (a, u) => (E(), A("li", { key: `${l}-${u}`, ref_for: true, ref: t.$store.options.annotationId === a.id ? "currentItem" : "", class: Pe(["tify-text-item", { "-current": t.$store.options.annotationId === a.id }]) }, [R("div", { role: "button", tabindex: "0", class: "tify-text-toggle", onClick: (c) => t.$store.toggleAnnotationId(a.id), onKeydown: Ot((c) => t.$store.toggleAnnotationId(a.id), ["enter", "space"]), innerHTML: s.filterHtml(a.html) }, null, 40, bd)], 2))), 128))])]))), 128))])) : (E(), A("p", Ed, B(t.$translate("Text not available for this page")), 1))], 512);
  }
  var Sd = $(vd, [["render", Cd]]);
  var Pd = {};
  var Rd = { class: "tify-icon -volume-high", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Dd(t, i) {
    return E(), A("svg", Rd, [...i[0] || (i[0] = [R("path", { d: "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" }, null, -1)])]);
  }
  var Ad = $(Pd, [["render", Dd]]);
  var Ld = {};
  var Id = { class: "tify-icon -volume-medium", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Md(t, i) {
    return E(), A("svg", Id, [...i[0] || (i[0] = [R("path", { d: "M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" }, null, -1)])]);
  }
  var Hd = $(Ld, [["render", Md]]);
  var Od = {};
  var Fd = { class: "tify-icon -volume-low", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function kd(t, i) {
    return E(), A("svg", Fd, [...i[0] || (i[0] = [R("path", { d: "M7,9V15H11L16,20V4L11,9H7Z" }, null, -1)])]);
  }
  var Bd = $(Od, [["render", kd]]);
  var Vd = {};
  var zd = { class: "tify-icon -volume-variant-off", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Nd(t, i) {
    return E(), A("svg", zd, [...i[0] || (i[0] = [R("path", { d: "M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z" }, null, -1)])]);
  }
  var Ud = $(Vd, [["render", Nd]]);
  var Wd = {};
  var jd = { class: "tify-icon -closed-caption-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gd(t, i) {
    return E(), A("svg", jd, [...i[0] || (i[0] = [R("path", { d: "M5,4C4.45,4 4,4.18 3.59,4.57C3.2,4.96 3,5.44 3,6V18C3,18.56 3.2,19.04 3.59,19.43C4,19.82 4.45,20 5,20H19C19.5,20 20,19.81 20.39,19.41C20.8,19 21,18.53 21,18V6C21,5.47 20.8,5 20.39,4.59C20,4.19 19.5,4 19,4H5M4.5,5.5H19.5V18.5H4.5V5.5M7,9C6.7,9 6.47,9.09 6.28,9.28C6.09,9.47 6,9.7 6,10V14C6,14.3 6.09,14.53 6.28,14.72C6.47,14.91 6.7,15 7,15H10C10.27,15 10.5,14.91 10.71,14.72C10.91,14.53 11,14.3 11,14V13H9.5V13.5H7.5V10.5H9.5V11H11V10C11,9.7 10.91,9.47 10.71,9.28C10.5,9.09 10.27,9 10,9H7M14,9C13.73,9 13.5,9.09 13.29,9.28C13.09,9.47 13,9.7 13,10V14C13,14.3 13.09,14.53 13.29,14.72C13.5,14.91 13.73,15 14,15H17C17.3,15 17.53,14.91 17.72,14.72C17.91,14.53 18,14.3 18,14V13H16.5V13.5H14.5V10.5H16.5V11H18V10C18,9.7 17.91,9.47 17.72,9.28C17.53,9.09 17.3,9 17,9H14Z" }, null, -1)])]);
  }
  var qd = $(Wd, [["render", Gd]]);
  var Zd = {};
  var Kd = { class: "tify-icon -closed-caption", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xd(t, i) {
    return E(), A("svg", Kd, [...i[0] || (i[0] = [R("path", { d: "M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" }, null, -1)])]);
  }
  var Yd = $(Zd, [["render", Xd]]);
  function hn(t) {
    return mr() ? (ta(t), true) : false;
  }
  function Ys() {
    const t = /* @__PURE__ */ new Set(), i = (s) => {
      t.delete(s);
    };
    return { on: (s) => {
      t.add(s);
      const o = () => i(s);
      return hn(o), { off: o };
    }, off: i, trigger: (...s) => Promise.all(Array.from(t).map((o) => o(...s))), clear: () => {
      t.clear();
    } };
  }
  var as = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  var Jd = Object.prototype.toString;
  var bo = (t) => Jd.call(t) === "[object Object]";
  var Ht = () => {
  };
  var Qd = $d();
  function $d() {
    var t, i;
    return as && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((i = window == null ? void 0 : window.navigator) == null ? void 0 : i.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }
  function ef(...t) {
    if (t.length !== 1) return Da(...t);
    const i = t[0];
    return typeof i == "function" ? Oi(Sa(() => ({ get: i, set: Ht }))) : gi(i);
  }
  function tf(t, i) {
    function e(...n) {
      return new Promise((r, s) => {
        Promise.resolve(t(() => i.apply(this, n), { fn: i, thisArg: this, args: n })).then(r).catch(s);
      });
    }
    return e;
  }
  var nf = (t) => t();
  function xn(t) {
    return Array.isArray(t) ? t : [t];
  }
  function sf(t) {
    return xi();
  }
  function rf(t, i = true, e) {
    sf() ? es(t, e) : i ? t() : Yn(t);
  }
  function Js(t, i, e = {}) {
    const { eventFilter: n = nf, ...r } = e, s = tf(n, i);
    let o, l, a;
    if (r.flush === "sync") {
      let u = false;
      l = () => {
      }, o = (c) => {
        u = true, c(), u = false;
      }, a = et(t, (...c) => {
        u || s(...c);
      }, r);
    } else {
      const u = [];
      let c = 0, h = 0;
      l = () => {
        c = h;
      }, u.push(et(t, () => {
        h++;
      }, { ...r, flush: "sync" })), o = (f) => {
        const m = h;
        f(), c += h - m;
      }, u.push(et(t, (...f) => {
        const m = c > 0 && c === h;
        c = 0, h = 0, !m && s(...f);
      }, r)), a = () => {
        u.forEach((f) => f());
      };
    }
    return { stop: a, ignoreUpdates: o, ignorePrevAsyncUpdates: l };
  }
  function of(t, i, e) {
    return et(t, i, { ...e, immediate: true });
  }
  var Eo = as ? window : void 0;
  var Co = as ? window.document : void 0;
  function Ft(t) {
    var i;
    const e = Se(t);
    return (i = e == null ? void 0 : e.$el) != null ? i : e;
  }
  function Ee(...t) {
    const i = [], e = () => {
      i.forEach((l) => l()), i.length = 0;
    }, n = (l, a, u, c) => (l.addEventListener(a, u, c), () => l.removeEventListener(a, u, c)), r = Me(() => {
      const l = xn(Se(t[0])).filter((a) => a != null);
      return l.every((a) => typeof a != "string") ? l : void 0;
    }), s = of(() => {
      var l, a;
      return [(a = (l = r.value) == null ? void 0 : l.map((u) => Ft(u))) != null ? a : [Eo].filter((u) => u != null), xn(Se(r.value ? t[1] : t[0])), xn(sn(r.value ? t[2] : t[1])), Se(r.value ? t[3] : t[2])];
    }, ([l, a, u, c]) => {
      if (e(), !(l != null && l.length) || !(a != null && a.length) || !(u != null && u.length)) return;
      const h = bo(c) ? { ...c } : c;
      i.push(...l.flatMap((f) => a.flatMap((m) => u.map((v) => n(f, m, v, h)))));
    }, { flush: "post" }), o = () => {
      s(), e();
    };
    return hn(e), o;
  }
  var Qs = false;
  function So(t, i, e = {}) {
    const { window: n = Eo, ignore: r = [], capture: s = true, detectIframe: o = false, controls: l = false } = e;
    if (!n) return l ? { stop: Ht, cancel: Ht, trigger: Ht } : Ht;
    if (Qd && !Qs) {
      Qs = true;
      const x = { passive: true };
      Array.from(n.document.body.children).forEach((T) => T.addEventListener("click", Ht, x)), n.document.documentElement.addEventListener("click", Ht, x);
    }
    let a = true;
    const u = (x) => Se(r).some((T) => {
      if (typeof T == "string") return Array.from(n.document.querySelectorAll(T)).some((C) => C === x.target || x.composedPath().includes(C));
      {
        const C = Ft(T);
        return C && (x.target === C || x.composedPath().includes(C));
      }
    });
    function c(x) {
      const T = Se(x);
      return T && T.$.subTree.shapeFlag === 16;
    }
    function h(x, T) {
      const C = Se(x), H = C.$.subTree && C.$.subTree.children;
      return H == null || !Array.isArray(H) ? false : H.some((k) => k.el === T.target || T.composedPath().includes(k.el));
    }
    const f = (x) => {
      const T = Ft(t);
      if (x.target != null && !(!(T instanceof Element) && c(t) && h(t, x)) && !(!T || T === x.target || x.composedPath().includes(T))) {
        if ("detail" in x && x.detail === 0 && (a = !u(x)), !a) {
          a = true;
          return;
        }
        i(x);
      }
    };
    let m = false;
    const v = [Ee(n, "click", (x) => {
      m || (m = true, setTimeout(() => {
        m = false;
      }, 0), f(x));
    }, { passive: true, capture: s }), Ee(n, "pointerdown", (x) => {
      const T = Ft(t);
      a = !u(x) && !!(T && !x.composedPath().includes(T));
    }, { passive: true }), o && Ee(n, "blur", (x) => {
      setTimeout(() => {
        var T;
        const C = Ft(t);
        ((T = n.document.activeElement) == null ? void 0 : T.tagName) === "IFRAME" && !(C != null && C.contains(n.document.activeElement)) && i(x);
      }, 0);
    }, { passive: true })].filter(Boolean), y = () => v.forEach((x) => x());
    return l ? { stop: y, cancel: () => {
      a = false;
    }, trigger: (x) => {
      a = true, f(x), a = false;
    } } : y;
  }
  function af() {
    const t = Ue(false), i = xi();
    return i && es(() => {
      t.value = true;
    }, i), t;
  }
  function lf(t) {
    const i = af();
    return Me(() => (i.value, !!t()));
  }
  var $s = ["fullscreenchange", "webkitfullscreenchange", "webkitendfullscreen", "mozfullscreenchange", "MSFullscreenChange"];
  function uf(t, i = {}) {
    const { document: e = Co, autoExit: n = false } = i, r = Me(() => {
      var C;
      return (C = Ft(t)) != null ? C : e == null ? void 0 : e.documentElement;
    }), s = Ue(false), o = Me(() => ["requestFullscreen", "webkitRequestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].find((C) => e && C in e || r.value && C in r.value)), l = Me(() => ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].find((C) => e && C in e || r.value && C in r.value)), a = Me(() => ["fullScreen", "webkitIsFullScreen", "webkitDisplayingFullscreen", "mozFullScreen", "msFullscreenElement"].find((C) => e && C in e || r.value && C in r.value)), u = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].find((C) => e && C in e), c = lf(() => r.value && e && o.value !== void 0 && l.value !== void 0 && a.value !== void 0), h = () => u ? (e == null ? void 0 : e[u]) === r.value : false, f = () => {
      if (a.value) {
        if (e && e[a.value] != null) return e[a.value];
        {
          const C = r.value;
          if ((C == null ? void 0 : C[a.value]) != null) return !!C[a.value];
        }
      }
      return false;
    };
    async function m() {
      if (!(!c.value || !s.value)) {
        if (l.value) if ((e == null ? void 0 : e[l.value]) != null) await e[l.value]();
        else {
          const C = r.value;
          (C == null ? void 0 : C[l.value]) != null && await C[l.value]();
        }
        s.value = false;
      }
    }
    async function v() {
      if (!c.value || s.value) return;
      f() && await m();
      const C = r.value;
      o.value && (C == null ? void 0 : C[o.value]) != null && (await C[o.value](), s.value = true);
    }
    async function y() {
      await (s.value ? m() : v());
    }
    const x = () => {
      const C = f();
      (!C || C && h()) && (s.value = C);
    }, T = { capture: false, passive: true };
    return Ee(e, $s, x, T), Ee(() => Ft(r), $s, x, T), rf(x, false), n && hn(m), { isSupported: c, isFullscreen: s, enter: v, exit: m, toggle: y };
  }
  function bn(t, i) {
    Se(t) && i(Se(t));
  }
  function cf(t) {
    let i = [];
    for (let e = 0; e < t.length; ++e) i = [...i, [t.start(e), t.end(e)]];
    return i;
  }
  function En(t) {
    return Array.from(t).map(({ label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }, a) => ({ id: a, label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }));
  }
  var hf = { src: "", tracks: [] };
  function df(t, i = {}) {
    t = ef(t), i = { ...hf, ...i };
    const { document: e = Co } = i, n = { passive: true }, r = Ue(0), s = Ue(0), o = Ue(false), l = Ue(1), a = Ue(false), u = Ue(false), c = Ue(false), h = Ue(1), f = Ue(false), m = gi([]), v = gi([]), y = Ue(-1), x = Ue(false), T = Ue(false), C = e && "pictureInPictureEnabled" in e, H = Ys(), k = Ys(), N = (j) => {
      bn(t, (ne) => {
        if (j) {
          const he = typeof j == "number" ? j : j.id;
          ne.textTracks[he].mode = "disabled";
        } else for (let he = 0; he < ne.textTracks.length; ++he) ne.textTracks[he].mode = "disabled";
        y.value = -1;
      });
    }, Y = (j, ne = true) => {
      bn(t, (he) => {
        const ye = typeof j == "number" ? j : j.id;
        ne && N(), he.textTracks[ye].mode = "showing", y.value = ye;
      });
    }, K = () => new Promise((j, ne) => {
      bn(t, async (he) => {
        C && (x.value ? e.exitPictureInPicture().then(j).catch(ne) : he.requestPictureInPicture().then(j).catch(ne));
      });
    });
    ws(() => {
      if (!e) return;
      const j = Se(t);
      if (!j) return;
      const ne = Se(i.src);
      let he = [];
      ne && (typeof ne == "string" ? he = [{ src: ne }] : Array.isArray(ne) ? he = ne : bo(ne) && (he = [ne]), j.querySelectorAll("source").forEach((ye) => {
        ye.remove();
      }), he.forEach(({ src: ye, type: me, media: pe }) => {
        const ae = e.createElement("source");
        ae.setAttribute("src", ye), ae.setAttribute("type", me || ""), ae.setAttribute("media", pe || ""), Ee(ae, "error", H.trigger, n), j.appendChild(ae);
      }), j.load());
    }), et([t, l], () => {
      const j = Se(t);
      j && (j.volume = l.value);
    }), et([t, T], () => {
      const j = Se(t);
      j && (j.muted = T.value);
    }), et([t, h], () => {
      const j = Se(t);
      j && (j.playbackRate = h.value);
    }), ws(() => {
      if (!e) return;
      const j = Se(i.tracks), ne = Se(t);
      !j || !j.length || !ne || (ne.querySelectorAll("track").forEach((he) => he.remove()), j.forEach(({ default: he, kind: ye, label: me, src: pe, srcLang: ae }, Ae) => {
        const Re = e.createElement("track");
        Re.default = he || false, Re.kind = ye, Re.label = me, Re.src = pe, Re.srclang = ae, Re.default && (y.value = Ae), ne.appendChild(Re);
      }));
    });
    const { ignoreUpdates: q } = Js(r, (j) => {
      const ne = Se(t);
      ne && (ne.currentTime = j);
    }), { ignoreUpdates: ee } = Js(c, (j) => {
      const ne = Se(t);
      ne && (j ? ne.play().catch((he) => {
        throw k.trigger(he), he;
      }) : ne.pause());
    });
    Ee(t, "timeupdate", () => q(() => r.value = Se(t).currentTime), n), Ee(t, "durationchange", () => s.value = Se(t).duration, n), Ee(t, "progress", () => m.value = cf(Se(t).buffered), n), Ee(t, "seeking", () => o.value = true, n), Ee(t, "seeked", () => o.value = false, n), Ee(t, ["waiting", "loadstart"], () => {
      a.value = true, ee(() => c.value = false);
    }, n), Ee(t, "loadeddata", () => a.value = false, n), Ee(t, "playing", () => {
      a.value = false, u.value = false, ee(() => c.value = true);
    }, n), Ee(t, "ratechange", () => h.value = Se(t).playbackRate, n), Ee(t, "stalled", () => f.value = true, n), Ee(t, "ended", () => u.value = true, n), Ee(t, "pause", () => ee(() => c.value = false), n), Ee(t, "play", () => ee(() => c.value = true), n), Ee(t, "enterpictureinpicture", () => x.value = true, n), Ee(t, "leavepictureinpicture", () => x.value = false, n), Ee(t, "volumechange", () => {
      const j = Se(t);
      j && (l.value = j.volume, T.value = j.muted);
    }, n);
    const ce = [], te = et([t], () => {
      const j = Se(t);
      j && (te(), ce[0] = Ee(j.textTracks, "addtrack", () => v.value = En(j.textTracks), n), ce[1] = Ee(j.textTracks, "removetrack", () => v.value = En(j.textTracks), n), ce[2] = Ee(j.textTracks, "change", () => v.value = En(j.textTracks), n));
    });
    return hn(() => ce.forEach((j) => j())), { currentTime: r, duration: s, waiting: a, seeking: o, ended: u, stalled: f, buffered: m, playing: c, rate: h, volume: l, muted: T, tracks: v, selectedTrack: y, enableTrack: Y, disableTrack: N, supportsPictureInPicture: C, togglePictureInPicture: K, isPictureInPicture: x, onSourceError: H.on, onPlaybackError: k.on };
  }
  function ls(t) {
    return !!(t.altKey || t.ctrlKey || t.metaKey || ["INPUT", "SELECT", "TEXTAREA"].includes(t.target.nodeName) && t.target.type !== "range");
  }
  var ff = { props: { label: { default: null, type: String }, position: { default: "bottom", type: String }, shortcut: { default: null, type: String } }, emits: ["open"], data() {
    return { open: false };
  }, computed: { id() {
    return this.$.appContext.config.globalProperties.$getId ? this.$getId(Vi()) : Vi();
  } }, mounted() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).addEventListener("keydown", this.onKeydown), So(this.$el, () => {
      this.open = false;
    });
  }, beforeUnmount() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).removeEventListener("keydown", this.onKeydown);
  }, methods: { onKeydown(t) {
    if (!ls(t)) {
      if (t.key === "Escape") {
        this.open = false;
        return;
      }
      t.key === this.shortcut && (this.open = !this.open, this.open && this.$emit("open"), t.preventDefault());
    }
  } } };
  var pf = { class: "tify-dropdown" };
  var gf = ["aria-controls", "aria-expanded", "aria-label", "title"];
  var mf = ["id"];
  function vf(t, i, e, n, r, s) {
    return E(), A("div", pf, [R("button", { type: "button", class: "tify-dropdown-button", "aria-controls": s.id, "aria-expanded": r.open, "aria-label": e.label, title: e.label, onClick: i[0] || (i[0] = (o) => {
      r.open = !r.open, r.open && t.$emit("open");
    }) }, [xs(t.$slots, "button")], 8, gf), ke(R("div", { id: s.id, class: Pe(`tify-dropdown-content -${e.position}`), onClick: i[1] || (i[1] = (o) => o.target.closest("a, button") && (r.open = false)) }, [xs(t.$slots, "default")], 10, mf), [[Xe, r.open]])]);
  }
  var us = $(ff, [["render", vf]]);
  var yf = {};
  var wf = { class: "tify-icon -play-speed", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function _f(t, i) {
    return E(), A("svg", wf, [...i[0] || (i[0] = [R("path", { d: "M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z" }, null, -1)])]);
  }
  var Tf = $(yf, [["render", _f]]);
  var xf = {};
  var bf = { class: "tify-icon -pause", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Ef(t, i) {
    return E(), A("svg", bf, [...i[0] || (i[0] = [R("path", { d: "M14,19H18V5H14M6,19H10V5H6V19Z" }, null, -1)])]);
  }
  var Cf = $(xf, [["render", Ef]]);
  var Sf = {};
  var Pf = { class: "tify-icon -play", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Rf(t, i) {
    return E(), A("svg", Pf, [...i[0] || (i[0] = [R("path", { d: "M8,5.14V19.14L19,12.14L8,5.14Z" }, null, -1)])]);
  }
  var Df = $(Sf, [["render", Rf]]);
  var Af = {};
  var Lf = { class: "tify-icon -loading", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function If(t, i) {
    return E(), A("svg", Lf, [...i[0] || (i[0] = [R("path", { d: "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" }, null, -1)])]);
  }
  var Mf = $(Af, [["render", If]]);
  var Hf = { props: { src: { required: true, type: String }, format: { required: true, type: String }, hasImage: { type: Boolean, default: false } }, data() {
    return { currentSubtitle: null, media: df(Ga("av")), mouseInterval: null, mouseMoving: true, rates: [0.5, 0.75, 1, 1.25, 1.5, 2] };
  }, computed: { type() {
    var t;
    return (t = this.format) == null ? void 0 : t.split("/")[0];
  }, subtitles() {
    var i, e;
    const t = (e = (i = this.$store.manifest.items[this.$store.options.pages[0] - 1].annotations) == null ? void 0 : i[0].items) == null ? void 0 : e[0].body;
    return t ? t.items || [t] : [];
  } }, watch: { currentSubtitle(t) {
    Object.values(this.$refs.av.textTracks).forEach((i) => {
      i.mode = i.language === (t == null ? void 0 : t.language) ? "showing" : "disabled";
    });
  } }, beforeUnmount() {
    clearInterval(this.mouseInterval);
  }, mounted() {
    window.addEventListener("mousemove", this.onMouseMove);
  }, unmounted() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }, methods: { formatTime(t) {
    const i = Math.floor(t / 3600), e = Math.floor(t % 3600 / 60), n = Math.floor(t % 60);
    return [...this.media.duration > 3600 ? [i.toString().padStart(2, "0")] : [], e.toString().padStart(2, "0"), n.toString().padStart(2, "0")].join(":");
  }, onMouseMove() {
    clearTimeout(this.mouseInterval), this.mouseMoving = true, this.mouseInterval = setInterval(() => {
      this.mouseMoving = this.$store.options.view || this.media.paused;
    }, 2e3);
  } } };
  var Of = ["src", "type"];
  var Ff = ["srclang", "src"];
  var kf = { class: "tify-player-controls" };
  var Bf = ["aria-label"];
  var Vf = ["max", "aria-label"];
  var zf = { class: "tify-player-time" };
  var Nf = { class: "tify-player-elapsed" };
  var Uf = { class: "tify-player-duration" };
  var Wf = { class: "tify-sr-only" };
  var jf = { key: 0, class: "tify-player-select-badge" };
  var Gf = { class: "tify-player-select-title" };
  var qf = { class: "tify-button-list" };
  var Zf = ["aria-pressed", "onClick"];
  var Kf = { class: "tify-sr-only" };
  var Xf = { class: "tify-player-select-title" };
  var Yf = { class: "tify-button-list" };
  var Jf = ["aria-pressed", "onClick"];
  var Qf = ["aria-pressed"];
  var $f = ["aria-label", "disabled"];
  var ep = ["aria-label"];
  function tp(t, i, e, n, r, s) {
    const o = Mf, l = Df, a = Cf, u = Tf, c = us, h = Yd, f = qd, m = Ud, v = Bd, y = Hd, x = Ad;
    return E(), A("div", { class: Pe(["tify-player", `
			-${s.type}
			${r.mouseMoving || r.media.paused ? "-mousing" : ""}
			${r.media.playing || r.media.waiting ? "-playing" : ""}
			${e.hasImage && (s.type === "audio" || !r.media.currentTime) ? "-bottom" : ""}
		`]), onKeydown: i[7] || (i[7] = Ot(zt((T) => r.media.playing = !r.media.playing, ["prevent"]), ["space"])) }, [(E(), le(nl(s.type), { ref: "av", class: "tify-player-av", poster: t.$store.getThumbnailUrl(t.$store.options.pages[0], 0), preload: "metadata", crossorigin: "anonymous", onClick: i[0] || (i[0] = (T) => {
      r.media.playing = !r.media.playing, s.onMouseMove();
    }) }, { default: Ye(() => [R("source", { src: e.src, type: e.format }, null, 8, Of), (E(true), A(ue, null, Ce(s.subtitles, (T) => (E(), A("track", { key: T.id, kind: "captions", srclang: T.language, src: T.id }, null, 8, Ff))), 128))]), _: 1 }, 8, ["poster"])), s.type === "video" ? (E(), A("div", { key: 0, class: Pe(["tify-player-overlay", { "-hidden": r.media.playing || e.hasImage && !r.media.currentTime }]) }, [r.media.waiting ? (E(), le(o, { key: 0, class: "-spin" })) : r.media.currentTime ? J("", true) : (E(), le(l, { key: 1 }))], 2)) : J("", true), R("div", kf, [R("div", null, [R("button", { type: "button", class: "tify-player-play-pause", "aria-label": t.$translate(r.media.paused ? "Play [verb]" : "Pause [verb]"), onClick: i[1] || (i[1] = (T) => r.media.playing = !r.media.playing) }, [r.media.playing || r.media.seeking && r.media.waiting ? (E(), le(a, { key: 0 })) : (E(), le(l, { key: 1 }))], 8, Bf), ke(R("input", { "onUpdate:modelValue": i[2] || (i[2] = (T) => r.media.currentTime = T), type: "range", class: "tify-player-seekbar", min: "0", max: r.media.duration, step: "any", "aria-label": t.$translate("Current time"), style: Rt(`--value: ${r.media.currentTime / r.media.duration * 100}%`) }, null, 12, Vf), [[Gi, r.media.currentTime, void 0, { number: true }]]), R("span", zf, [R("span", Nf, B(s.formatTime(r.media.currentTime)), 1), R("span", Uf, " / " + B(s.formatTime(r.media.duration)), 1)]), ie(c, { class: "tify-player-select -rate", alignment: "center", position: "top", shortcut: "r" }, { button: Ye(() => [R("span", Wf, B(t.$translate("Playback rate")), 1), ie(u), r.media.rate !== 1 ? (E(), A("span", jf, B(r.media.rate.toLocaleString(t.$store.options.language)) + "x ", 1)) : J("", true)]), default: Ye(() => [R("h3", Gf, B(t.$translate("Playback rate")), 1), R("ol", qf, [(E(true), A(ue, null, Ce(r.rates, (T) => (E(), A("li", { key: T }, [R("button", { type: "button", "aria-pressed": T === r.media.rate, onClick: (C) => r.media.rate = T }, B(T === 1 ? t.$translate("Normal") : `${T.toLocaleString(t.$store.options.language)}x`), 9, Zf)]))), 128))])]), _: 1 }), s.subtitles.length ? (E(), le(c, { key: 0, class: "tify-player-select -captions", alignment: "center", position: "top", shortcut: "c" }, { button: Ye(() => [R("span", Kf, B(t.$translate("Closed Captions")), 1), r.currentSubtitle ? (E(), le(h, { key: 0 })) : (E(), le(f, { key: 1 }))]), default: Ye(() => [R("h3", Xf, B(t.$translate("Closed Captions")), 1), R("ol", Yf, [(E(true), A(ue, null, Ce(s.subtitles, (T) => (E(), A("li", { key: T.id }, [R("button", { type: "button", "aria-pressed": T === r.currentSubtitle, onClick: (C) => r.currentSubtitle = T }, B(t.$store.localize(T.label) || T.language), 9, Jf)]))), 128)), R("li", null, [R("button", { type: "button", "aria-pressed": !r.currentSubtitle, onClick: i[3] || (i[3] = (T) => r.currentSubtitle = null) }, B(t.$translate("None")), 9, Qf)])])]), _: 1 })) : J("", true)]), R("div", null, [R("button", { type: "button", class: "tify-player-mute", "aria-label": t.$translate("Toggle mute"), disabled: r.media.volume === 0, onClick: i[4] || (i[4] = (T) => r.media.muted = !r.media.muted) }, [r.media.muted ? (E(), le(m, { key: 0 })) : r.media.volume < 0.34 ? (E(), le(v, { key: 1 })) : r.media.volume < 0.67 ? (E(), le(y, { key: 2 })) : (E(), le(x, { key: 3 }))], 8, $f), ke(R("input", { "onUpdate:modelValue": i[5] || (i[5] = (T) => r.media.volume = T), type: "range", class: "tify-player-volume", min: "0", max: "1", step: "0.01", "aria-label": t.$translate("Volume"), style: Rt(`--value: ${r.media.volume * 100}%`), onInput: i[6] || (i[6] = (T) => r.media.muted = r.media.volume === 0) }, null, 44, ep), [[Gi, r.media.volume, void 0, { number: true }]])])])], 34);
  }
  var ip = $(Hf, [["render", tp]]);
  var np = {};
  var sp = { class: "tify-icon -chevron-right", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function rp(t, i) {
    return E(), A("svg", sp, [...i[0] || (i[0] = [R("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }, null, -1)])]);
  }
  var Po = $(np, [["render", rp]]);
  var op = {};
  var ap = { class: "tify-icon -chevron-left", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function lp(t, i) {
    return E(), A("svg", ap, [...i[0] || (i[0] = [R("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" }, null, -1)])]);
  }
  var Ro = $(op, [["render", lp]]);
  var up = {};
  var cp = { class: "tify-icon -layers-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function hp(t, i) {
    return E(), A("svg", cp, [...i[0] || (i[0] = [R("path", { d: "M12,18.54L19.37,12.8L21,14.07L12,21.07L3,14.07L4.62,12.81L12,18.54M12,16L3,9L12,2L21,9L12,16M12,4.53L6.26,9L12,13.47L17.74,9L12,4.53Z" }, null, -1)])]);
  }
  var dp = $(up, [["render", hp]]);
  var fp = {};
  var pp = { class: "tify-icon -comment-off-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gp(t, i) {
    return E(), A("svg", pp, [...i[0] || (i[0] = [R("path", { d: "M7.2 4L5.2 2H20C21.11 2 22 2.9 22 4V16C22 16.76 21.57 17.41 20.95 17.75L19.2 16H20V4H7.2M22.11 21.46L20.84 22.73L16.11 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4C2 3.97 2 3.93 2 3.9L1.11 3L2.39 1.73L22.11 21.46M14.11 16L4 5.89V16H10V19.08L13.08 16H14.11Z" }, null, -1)])]);
  }
  var mp = $(fp, [["render", gp]]);
  var vp = {};
  var yp = { class: "tify-icon -comment-text-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function wp(t, i) {
    return E(), A("svg", yp, [...i[0] || (i[0] = [R("path", { d: "M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z" }, null, -1)])]);
  }
  var _p = $(vp, [["render", wp]]);
  var Tp = {};
  var xp = { class: "tify-icon -backup-restore", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function bp(t, i) {
    return E(), A("svg", xp, [...i[0] || (i[0] = [R("path", { d: "M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" }, null, -1)])]);
  }
  var Ep = $(Tp, [["render", bp]]);
  var Cp = {};
  var Sp = { class: "tify-icon -palette-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Pp(t, i) {
    return E(), A("svg", Sp, [...i[0] || (i[0] = [R("path", { d: "M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z" }, null, -1)])]);
  }
  var Rp = $(Cp, [["render", Pp]]);
  var Dp = {};
  var Ap = { class: "tify-icon -circle-half-full", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Lp(t, i) {
    return E(), A("svg", Ap, [...i[0] || (i[0] = [R("path", { d: "M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z" }, null, -1)])]);
  }
  var Ip = $(Dp, [["render", Lp]]);
  var Mp = {};
  var Hp = { class: "tify-icon -lightbulb-on-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Op(t, i) {
    return E(), A("svg", Hp, [...i[0] || (i[0] = [R("path", { d: "M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z" }, null, -1)])]);
  }
  var Fp = $(Mp, [["render", Op]]);
  var kp = { emits: ["update"], computed: { saturation() {
    const t = this.$store.options.filters.saturate;
    return typeof t == "number" ? t : 1;
  } } };
  var Bp = ["value"];
  var Vp = ["value"];
  var zp = ["value"];
  function Np(t, i, e, n, r, s) {
    const o = Fp, l = Ip, a = Rp;
    return E(), A(ue, null, [R("p", null, [R("label", null, [ie(o), Ge(" " + B(t.$translate("Brightness")) + " ", 1), R("b", null, B(Math.round((t.$store.options.filters.brightness || 1) * 100)) + "\xA0%", 1), R("input", { ref: "firstSlider", max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.brightness || 1, style: Rt(`--value: ${((t.$store.options.filters.brightness || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[0] || (i[0] = (u) => t.$emit("update", "brightness", u)) }, null, 44, Bp)])]), R("p", null, [R("label", null, [ie(l), Ge(" " + B(t.$translate("Contrast")) + " ", 1), R("b", null, B(Math.round((t.$store.options.filters.contrast || 1) * 100)) + "\xA0%", 1), R("input", { max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.contrast || 1, style: Rt(`--value: ${((t.$store.options.filters.contrast || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[1] || (i[1] = (u) => t.$emit("update", "contrast", u)) }, null, 44, Vp)])]), R("p", null, [R("label", null, [ie(a), Ge(" " + B(t.$translate("Saturation")) + " ", 1), R("b", null, B(Math.round(s.saturation * 100)) + "\xA0%", 1), R("input", { max: "3", min: "0", step: ".01", type: "range", value: s.saturation, style: Rt(`--value: ${s.saturation / 3 * 100}%`), onInput: i[2] || (i[2] = (u) => t.$emit("update", "saturate", u)) }, null, 44, zp)])])], 64);
  }
  var Up = $(kp, [["render", Np]]);
  var Wp = {};
  var jp = { class: "tify-icon -tune", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gp(t, i) {
    return E(), A("svg", jp, [...i[0] || (i[0] = [R("path", { d: "M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" }, null, -1)])]);
  }
  var qp = $(Wp, [["render", Gp]]);
  var Zp = {};
  var Kp = { class: "tify-icon -rotate-right", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xp(t, i) {
    return E(), A("svg", Kp, [...i[0] || (i[0] = [R("path", { d: "M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z" }, null, -1)])]);
  }
  var Yp = $(Zp, [["render", Xp]]);
  var Jp = {};
  var Qp = { class: "tify-icon -aspect-ratio", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function $p(t, i) {
    return E(), A("svg", Qp, [...i[0] || (i[0] = [R("path", { d: "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z" }, null, -1)])]);
  }
  var eg = $(Jp, [["render", $p]]);
  var Mi = { exports: {} };
  var tg = Mi.exports;
  var er;
  function ig() {
    return er || (er = 1, (function(t) {
      function i(e) {
        return new i.Viewer(e);
      }
      (function(e) {
        e.version = { versionStr: "5.0.1", major: parseInt("5", 10), minor: parseInt("0", 10), revision: parseInt("1", 10) };
        var n = { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object AsyncFunction]": "function", "[object Promise]": "promise", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regexp", "[object Object]": "object" }, r = Object.prototype.toString, s = Object.prototype.hasOwnProperty;
        e.isFunction = function(o) {
          return e.type(o) === "function";
        }, e.isArray = Array.isArray || function(o) {
          return e.type(o) === "array";
        }, e.isWindow = function(o) {
          return o && typeof o == "object" && "setInterval" in o;
        }, e.type = function(o) {
          return o == null ? String(o) : n[r.call(o)] || "object";
        }, e.isPlainObject = function(o) {
          if (!o || i.type(o) !== "object" || o.nodeType || e.isWindow(o) || o.constructor && !s.call(o, "constructor") && !s.call(o.constructor.prototype, "isPrototypeOf")) return false;
          var l;
          for (var a in o) l = a;
          return l === void 0 || s.call(o, l);
        }, e.isEmptyObject = function(o) {
          for (var l in o) return false;
          return true;
        }, e.freezeObject = function(o) {
          return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(l) {
            return l;
          }, e.freezeObject(o);
        }, e.supportsCanvas = (function() {
          var o = document.createElement("canvas");
          return !!(e.isFunction(o.getContext) && o.getContext("2d"));
        })(), e.isCanvasTainted = function(o) {
          var l = false;
          try {
            o.getContext("2d").getImageData(0, 0, 1, 1);
          } catch {
            l = true;
          }
          return l;
        }, e.supportsAddEventListener = (function() {
          return !!(document.documentElement.addEventListener && document.addEventListener);
        })(), e.supportsRemoveEventListener = (function() {
          return !!(document.documentElement.removeEventListener && document.removeEventListener);
        })(), e.supportsEventListenerOptions = (function() {
          var o = 0;
          if (e.supportsAddEventListener) try {
            var l = { get capture() {
              return o++, false;
            }, get once() {
              return o++, false;
            }, get passive() {
              return o++, false;
            } };
            window.addEventListener("test", null, l), window.removeEventListener("test", null, l);
          } catch {
            o = 0;
          }
          return o >= 3;
        })(), e.getCurrentPixelDensityRatio = function() {
          if (e.supportsCanvas) {
            var o = document.createElement("canvas").getContext("2d"), l = window.devicePixelRatio || 1, a = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
            return Math.max(l, 1) / a;
          } else return 1;
        }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
      })(i), (function(e) {
        e.extend = function() {
          var a, u, c, h, f, m, v = arguments[0] || {}, y = arguments.length, x = false, T = 1;
          for (typeof v == "boolean" && (x = v, v = arguments[1] || {}, T = 2), typeof v != "object" && !i.isFunction(v) && (v = {}), y === T && (v = this, --T); T < y; T++) if (a = arguments[T], a !== null || a !== void 0) for (u in a) {
            var C = Object.getOwnPropertyDescriptor(a, u);
            if (C !== void 0) {
              if (C.get || C.set) {
                Object.defineProperty(v, u, C);
                continue;
              }
              h = C.value;
            } else {
              e.console.warn('Could not copy inherited property "' + u + '".');
              continue;
            }
            v !== h && (x && h && (i.isPlainObject(h) || (f = i.isArray(h))) ? (c = v[u], f ? (f = false, m = c && i.isArray(c) ? c : []) : m = c && i.isPlainObject(c) ? c : {}, v[u] = i.extend(x, m, h)) : h !== void 0 && (v[u] = h));
          }
          return v;
        };
        var n = function() {
          if (typeof navigator != "object") return false;
          var a = navigator.userAgent;
          return typeof a != "string" ? false : a.indexOf("iPhone") !== -1 || a.indexOf("iPad") !== -1 || a.indexOf("iPod") !== -1;
        };
        e.extend(e, { DEFAULT_SETTINGS: { xmlPath: null, tileSources: null, tileHost: null, initialPage: 0, crossOriginPolicy: false, ajaxWithCredentials: false, loadTilesWithAjax: false, ajaxHeaders: {}, splitHashDataForPost: false, panHorizontal: true, panVertical: true, constrainDuringPan: false, wrapHorizontal: false, wrapVertical: false, visibilityRatio: 0.5, minPixelRatio: 0.5, defaultZoomLevel: 0, minZoomLevel: null, maxZoomLevel: null, homeFillsViewer: false, clickTimeThreshold: 300, clickDistThreshold: 5, dblClickTimeThreshold: 300, dblClickDistThreshold: 20, springStiffness: 6.5, animationTime: 1.2, gestureSettingsMouse: { dragToPan: true, scrollToZoom: true, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsTouch: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: true, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsPen: { dragToPan: true, scrollToZoom: false, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsUnknown: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: false, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, zoomPerClick: 2, zoomPerScroll: 1.2, zoomPerDblClickDrag: 1.2, zoomPerSecond: 1, blendTime: 0, alwaysBlend: false, autoHideControls: true, immediateRender: false, minZoomImageRatio: 0.9, maxZoomPixelRatio: 1.1, smoothTileEdgesMinZoom: 1.1, iOSDevice: n(), pixelsPerWheelLine: 40, pixelsPerArrowPress: 40, autoResize: true, preserveImageSizeOnResize: false, minScrollDeltaTime: 50, rotationIncrement: 90, maxTilesPerFrame: 1, showSequenceControl: true, sequenceControlAnchor: null, preserveViewport: false, preserveOverlays: false, navPrevNextWrap: false, showNavigationControl: true, navigationControlAnchor: null, showZoomControl: true, showHomeControl: true, showFullPageControl: true, showRotationControl: false, showFlipControl: false, controlsFadeDelay: 2e3, controlsFadeLength: 1500, mouseNavEnabled: true, showNavigator: false, navigatorElement: null, navigatorId: null, navigatorPosition: null, navigatorSizeRatio: 0.2, navigatorMaintainSizeRatio: false, navigatorTop: null, navigatorLeft: null, navigatorHeight: null, navigatorWidth: null, navigatorAutoResize: true, navigatorAutoFade: true, navigatorRotate: true, navigatorBackground: "#000", navigatorOpacity: 0.8, navigatorBorderColor: "#555", navigatorDisplayRegionColor: "#900", degrees: 0, flipped: false, overlayPreserveContentDirection: true, opacity: 1, compositeOperation: null, drawer: ["webgl", "canvas", "html"], drawerOptions: { webgl: {}, canvas: {}, html: {}, custom: {} }, preload: false, imageSmoothingEnabled: true, placeholderFillStyle: null, subPixelRoundingForTransparency: null, showReferenceStrip: false, referenceStripScroll: "horizontal", referenceStripElement: null, referenceStripHeight: null, referenceStripWidth: null, referenceStripPosition: "BOTTOM_LEFT", referenceStripSizeRatio: 0.2, collectionRows: 3, collectionColumns: 0, collectionLayout: "horizontal", collectionMode: false, collectionTileSize: 800, collectionTileMargin: 80, imageLoaderLimit: 0, maxImageCacheCount: 200, timeout: 3e4, tileRetryMax: 0, tileRetryDelay: 2500, prefixUrl: "/images/", navImages: { zoomIn: { REST: "zoomin_rest.png", GROUP: "zoomin_grouphover.png", HOVER: "zoomin_hover.png", DOWN: "zoomin_pressed.png" }, zoomOut: { REST: "zoomout_rest.png", GROUP: "zoomout_grouphover.png", HOVER: "zoomout_hover.png", DOWN: "zoomout_pressed.png" }, home: { REST: "home_rest.png", GROUP: "home_grouphover.png", HOVER: "home_hover.png", DOWN: "home_pressed.png" }, fullpage: { REST: "fullpage_rest.png", GROUP: "fullpage_grouphover.png", HOVER: "fullpage_hover.png", DOWN: "fullpage_pressed.png" }, rotateleft: { REST: "rotateleft_rest.png", GROUP: "rotateleft_grouphover.png", HOVER: "rotateleft_hover.png", DOWN: "rotateleft_pressed.png" }, rotateright: { REST: "rotateright_rest.png", GROUP: "rotateright_grouphover.png", HOVER: "rotateright_hover.png", DOWN: "rotateright_pressed.png" }, flip: { REST: "flip_rest.png", GROUP: "flip_grouphover.png", HOVER: "flip_hover.png", DOWN: "flip_pressed.png" }, previous: { REST: "previous_rest.png", GROUP: "previous_grouphover.png", HOVER: "previous_hover.png", DOWN: "previous_pressed.png" }, next: { REST: "next_rest.png", GROUP: "next_grouphover.png", HOVER: "next_hover.png", DOWN: "next_pressed.png" } }, debugMode: false, debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"], silenceMultiImageWarnings: false }, delegate: function(a, u) {
          return function() {
            var c = arguments;
            return c === void 0 && (c = []), u.apply(a, c);
          };
        }, BROWSERS: { UNKNOWN: 0, IE: 1, FIREFOX: 2, SAFARI: 3, CHROME: 4, OPERA: 5, EDGE: 6, CHROMEEDGE: 7 }, SUBPIXEL_ROUNDING_OCCURRENCES: { NEVER: 0, ONLY_AT_REST: 1, ALWAYS: 2 }, _viewers: /* @__PURE__ */ new Map(), getViewer: function(a) {
          return e._viewers.get(this.getElement(a));
        }, getElement: function(a) {
          return typeof a == "string" && (a = document.getElementById(a)), a;
        }, getElementPosition: function(a) {
          var u = new e.Point(), c, h;
          for (a = e.getElement(a), c = e.getElementStyle(a).position === "fixed", h = l(a, c); h; ) u.x += a.offsetLeft, u.y += a.offsetTop, c && (u = u.plus(e.getPageScroll())), a = h, c = e.getElementStyle(a).position === "fixed", h = l(a, c);
          return u;
        }, getElementOffset: function(a) {
          a = e.getElement(a);
          var u = a && a.ownerDocument, c, h, f = { top: 0, left: 0 };
          return u ? (c = u.documentElement, typeof a.getBoundingClientRect < "u" && (f = a.getBoundingClientRect()), h = u === u.window ? u : u.nodeType === 9 ? u.defaultView || u.parentWindow : false, new e.Point(f.left + (h.pageXOffset || c.scrollLeft) - (c.clientLeft || 0), f.top + (h.pageYOffset || c.scrollTop) - (c.clientTop || 0))) : new e.Point();
        }, getElementSize: function(a) {
          return a = e.getElement(a), new e.Point(a.clientWidth, a.clientHeight);
        }, getElementStyle: document.documentElement.currentStyle ? function(a) {
          return a = e.getElement(a), a.currentStyle;
        } : function(a) {
          return a = e.getElement(a), window.getComputedStyle(a, "");
        }, getCssPropertyWithVendorPrefix: function(a) {
          var u = {};
          return e.getCssPropertyWithVendorPrefix = function(c) {
            if (u[c] !== void 0) return u[c];
            var h = document.createElement("div").style, f = null;
            if (h[c] !== void 0) f = c;
            else for (var m = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], v = e.capitalizeFirstLetter(c), y = 0; y < m.length; y++) {
              var x = m[y] + v;
              if (h[x] !== void 0) {
                f = x;
                break;
              }
            }
            return u[c] = f, f;
          }, e.getCssPropertyWithVendorPrefix(a);
        }, capitalizeFirstLetter: function(a) {
          return a.charAt(0).toUpperCase() + a.slice(1);
        }, positiveModulo: function(a, u) {
          var c = a % u;
          return c < 0 && (c += u), c;
        }, pointInElement: function(a, u) {
          a = e.getElement(a);
          var c = e.getElementOffset(a), h = e.getElementSize(a);
          return u.x >= c.x && u.x < c.x + h.x && u.y < c.y + h.y && u.y >= c.y;
        }, getMousePosition: function(a) {
          if (typeof a.pageX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.pageX, c.y = u.pageY, c;
          };
          else if (typeof a.clientX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c.y = u.clientY + document.body.scrollTop + document.documentElement.scrollTop, c;
          };
          else throw new Error("Unknown event mouse position, no known technique.");
          return e.getMousePosition(a);
        }, getPageScroll: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.pageXOffset == "number") e.getPageScroll = function() {
            return new e.Point(window.pageXOffset, window.pageYOffset);
          };
          else if (u.scrollLeft || u.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.body.scrollLeft, document.body.scrollTop);
          };
          else if (a.scrollLeft || a.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop);
          };
          else return new e.Point(0, 0);
          return e.getPageScroll();
        }, setPageScroll: function(a) {
          if (typeof window.scrollTo < "u") e.setPageScroll = function(h) {
            window.scrollTo(h.x, h.y);
          };
          else {
            var u = e.getPageScroll();
            if (u.x === a.x && u.y === a.y) return;
            document.body.scrollLeft = a.x, document.body.scrollTop = a.y;
            var c = e.getPageScroll();
            if (c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.body.scrollLeft = h.x, document.body.scrollTop = h.y;
              };
              return;
            }
            if (document.documentElement.scrollLeft = a.x, document.documentElement.scrollTop = a.y, c = e.getPageScroll(), c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.documentElement.scrollLeft = h.x, document.documentElement.scrollTop = h.y;
              };
              return;
            }
            e.setPageScroll = function(h) {
            };
          }
          e.setPageScroll(a);
        }, getWindowSize: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.innerWidth == "number") e.getWindowSize = function() {
            return new e.Point(window.innerWidth, window.innerHeight);
          };
          else if (a.clientWidth || a.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.documentElement.clientWidth, document.documentElement.clientHeight);
          };
          else if (u.clientWidth || u.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.body.clientWidth, document.body.clientHeight);
          };
          else throw new Error("Unknown window size, no known technique.");
          return e.getWindowSize();
        }, makeCenteredNode: function(a) {
          a = e.getElement(a);
          var u = [e.makeNeutralElement("div"), e.makeNeutralElement("div"), e.makeNeutralElement("div")];
          return e.extend(u[0].style, { display: "table", height: "100%", width: "100%" }), e.extend(u[1].style, { display: "table-row" }), e.extend(u[2].style, { display: "table-cell", verticalAlign: "middle", textAlign: "center" }), u[0].appendChild(u[1]), u[1].appendChild(u[2]), u[2].appendChild(a), u[0];
        }, makeNeutralElement: function(a) {
          var u = document.createElement(a), c = u.style;
          return c.background = "transparent none", c.border = "none", c.margin = "0px", c.padding = "0px", c.position = "static", u;
        }, now: function() {
          return Date.now ? e.now = Date.now : e.now = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, e.now();
        }, makeTransparentImage: function(a) {
          var u = e.makeNeutralElement("img");
          return u.src = a, u;
        }, setElementOpacity: function(a, u, c) {
          var h, f;
          a = e.getElement(a), c && !e.Browser.alpha && (u = Math.round(u)), e.Browser.opacity ? a.style.opacity = u < 1 ? u : "" : u < 1 ? (h = Math.round(100 * u), f = "alpha(opacity=" + h + ")", a.style.filter = f) : a.style.filter = "";
        }, setElementTouchActionNone: function(a) {
          a = e.getElement(a), typeof a.style.touchAction < "u" ? a.style.touchAction = "none" : typeof a.style.msTouchAction < "u" && (a.style.msTouchAction = "none");
        }, setElementPointerEvents: function(a, u) {
          a = e.getElement(a), typeof a.style < "u" && typeof a.style.pointerEvents < "u" && (a.style.pointerEvents = u);
        }, setElementPointerEventsNone: function(a) {
          e.setElementPointerEvents(a, "none");
        }, addClass: function(a, u) {
          a = e.getElement(a), a.className ? (" " + a.className + " ").indexOf(" " + u + " ") === -1 && (a.className += " " + u) : a.className = u;
        }, indexOf: function(a, u, c) {
          return Array.prototype.indexOf ? this.indexOf = function(h, f, m) {
            return h.indexOf(f, m);
          } : this.indexOf = function(h, f, m) {
            var v, y = m || 0, x;
            if (!h) throw new TypeError();
            if (x = h.length, x === 0 || y >= x) return -1;
            for (y < 0 && (y = x - Math.abs(y)), v = y; v < x; v++) if (h[v] === f) return v;
            return -1;
          }, this.indexOf(a, u, c);
        }, removeClass: function(a, u) {
          var c, h = [], f;
          for (a = e.getElement(a), c = a.className.split(/\s+/), f = 0; f < c.length; f++) c[f] && c[f] !== u && h.push(c[f]);
          a.className = h.join(" ");
        }, normalizeEventListenerOptions: function(a) {
          var u;
          return typeof a < "u" ? typeof a == "boolean" ? u = e.supportsEventListenerOptions ? { capture: a } : a : u = e.supportsEventListenerOptions ? a : typeof a.capture < "u" ? a.capture : false : u = e.supportsEventListenerOptions ? { capture: false } : false, u;
        }, addEvent: (function() {
          if (e.supportsAddEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.addEventListener(u, c, h);
          };
          if (document.documentElement.attachEvent && document.attachEvent) return function(a, u, c) {
            a = e.getElement(a), a.attachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), removeEvent: (function() {
          if (e.supportsRemoveEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.removeEventListener(u, c, h);
          };
          if (document.documentElement.detachEvent && document.detachEvent) return function(a, u, c) {
            a = e.getElement(a), a.detachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), cancelEvent: function(a) {
          a.preventDefault();
        }, eventIsCanceled: function(a) {
          return a.defaultPrevented;
        }, stopEvent: function(a) {
          a.stopPropagation();
        }, createCallback: function(a, u) {
          console.error("The createCallback function is deprecated and will be removed in future versions. Please use alternativeFunction instead.");
          var c = [], h;
          for (h = 2; h < arguments.length; h++) c.push(arguments[h]);
          return function() {
            var f = c.concat([]), m;
            for (m = 0; m < arguments.length; m++) f.push(arguments[m]);
            return u.apply(a, f);
          };
        }, getUrlParameter: function(a) {
          var u = o[a];
          return u || null;
        }, getUrlProtocol: function(a) {
          var u = a.match(/^([a-z]+:)\/\//i);
          return u === null ? window.location.protocol : u[1].toLowerCase();
        }, createAjaxRequest: function() {
          if (window.XMLHttpRequest) return e.createAjaxRequest = function() {
            return new XMLHttpRequest();
          }, new XMLHttpRequest();
          throw new Error("Browser doesn't support XMLHttpRequest.");
        }, makeAjaxRequest: function(a, u, c) {
          var h, f, m, v;
          e.isPlainObject(a) && (u = a.success, c = a.error, h = a.withCredentials, f = a.headers, m = a.responseType || null, v = a.postData || null, a = a.url);
          var y = e.getUrlProtocol(a), x = e.createAjaxRequest();
          if (!e.isFunction(u)) throw new Error("makeAjaxRequest requires a success callback");
          x.onreadystatechange = function() {
            x.readyState === 4 && (x.onreadystatechange = function() {
            }, x.status >= 200 && x.status < 300 || x.status === 0 && y !== "http:" && y !== "https:" ? u(x) : e.isFunction(c) ? c(x) : e.console.error("AJAX request returned %d: %s", x.status, a));
          };
          var T = v ? "POST" : "GET";
          try {
            if (x.open(T, a, true), m && (x.responseType = m), f) for (var C in f) Object.prototype.hasOwnProperty.call(f, C) && f[C] && x.setRequestHeader(C, f[C]);
            h && (x.withCredentials = true), x.send(v);
          } catch (H) {
            e.console.error("%s while making AJAX request: %s", H.name, H.message), x.onreadystatechange = function() {
            }, e.isFunction(c) && c(x, H);
          }
          return x;
        }, jsonp: function(a) {
          var u, c = a.url, h = document.head || document.getElementsByTagName("head")[0] || document.documentElement, f = a.callbackName || "openseadragon" + e.now(), m = window[f], v = "$1" + f + "$2", y = a.param || "callback", x = a.callback;
          c = c.replace(/(=)\?(&|$)|\?\?/i, v), c += (/\?/.test(c) ? "&" : "?") + y + "=" + f, window[f] = function(T) {
            if (m) window[f] = m;
            else try {
              delete window[f];
            } catch {
            }
            x && e.isFunction(x) && x(T);
          }, u = document.createElement("script"), (a.async !== void 0 || a.async !== false) && (u.async = "async"), a.scriptCharset && (u.charset = a.scriptCharset), u.src = c, u.onload = u.onreadystatechange = function(T, C) {
            (C || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, h && u.parentNode && h.removeChild(u), u = void 0);
          }, h.insertBefore(u, h.firstChild);
        }, createFromDZI: function() {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        }, parseXml: function(a) {
          if (window.DOMParser) e.parseXml = function(u) {
            var c = null, h;
            return h = new DOMParser(), c = h.parseFromString(u, "text/xml"), c;
          };
          else throw new Error("Browser doesn't support XML DOM.");
          return e.parseXml(a);
        }, parseJSON: function(a) {
          return e.parseJSON = window.JSON.parse, e.parseJSON(a);
        }, imageFormatSupported: function(a) {
          return a = a || "", !!s[a.toLowerCase()];
        }, setImageFormatsSupported: function(a) {
          e.extend(s, a);
        } });
        var r = function(a) {
        };
        e.console = window.console || { log: r, debug: r, info: r, warn: r, error: r, assert: r }, e.Browser = { vendor: e.BROWSERS.UNKNOWN, version: 0, alpha: true };
        var s = { avif: true, bmp: false, jpeg: true, jpg: true, png: true, tif: false, wdp: false, webp: true }, o = {};
        (function() {
          var a = navigator.appVersion, u = navigator.userAgent, c;
          switch (navigator.appName) {
            case "Microsoft Internet Explorer":
              window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(u.substring(u.indexOf("MSIE") + 5, u.indexOf(";", u.indexOf("MSIE")))));
              break;
            case "Netscape":
              window.addEventListener && (u.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edge") + 5))) : u.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edg") + 4))) : u.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(u.substring(u.indexOf("Firefox") + 8))) : u.indexOf("Safari") >= 0 ? (e.Browser.vendor = u.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(u.substring(u.substring(0, u.indexOf("Safari")).lastIndexOf("/") + 1, u.indexOf("Safari")))) : (c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), c.exec(u) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
              break;
            case "Opera":
              e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(a);
              break;
          }
          var h = window.location.search.substring(1), f = h.split("&"), m, v, y;
          for (y = 0; y < f.length; y++) if (m = f[y], v = m.indexOf("="), v > 0) {
            var x = m.substring(0, v), T = m.substring(v + 1);
            try {
              o[x] = decodeURIComponent(T);
            } catch {
              e.console.error("Ignoring malformed URL parameter: %s=%s", x, T);
            }
          }
          e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = true, e.Browser.vendor === e.BROWSERS.IE && e.console.error("Internet Explorer is not supported by OpenSeadragon");
        })(), (function(a) {
          var u = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame, c = a.cancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelAnimationFrame || a.msCancelAnimationFrame;
          if (u && c) e.requestAnimationFrame = function() {
            return u.apply(a, arguments);
          }, e.cancelAnimationFrame = function() {
            return c.apply(a, arguments);
          };
          else {
            var h = [], f = [], m = 0, v;
            e.requestAnimationFrame = function(y) {
              return h.push([++m, y]), v || (v = setInterval(function() {
                if (h.length) {
                  var x = e.now(), T = f;
                  for (f = h, h = T; f.length; ) f.shift()[1](x);
                } else clearInterval(v), v = void 0;
              }, 1e3 / 50)), m;
            }, e.cancelAnimationFrame = function(y) {
              var x, T;
              for (x = 0, T = h.length; x < T; x += 1) if (h[x][0] === y) {
                h.splice(x, 1);
                return;
              }
              for (x = 0, T = f.length; x < T; x += 1) if (f[x][0] === y) {
                f.splice(x, 1);
                return;
              }
            };
          }
        })(window);
        function l(a, u) {
          return u && a !== document.body ? document.body : a.offsetParent;
        }
      })(i), (function(e, n) {
        t.exports ? t.exports = n() : e.OpenSeadragon = n();
      })(tg, function() {
        return i;
      }), (function(e) {
        class n {
          constructor(s) {
            s || (s = [0, 0, 0, 0, 0, 0, 0, 0, 0]), this.values = s;
          }
          static makeIdentity() {
            return new n([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          }
          static makeTranslation(s, o) {
            return new n([1, 0, 0, 0, 1, 0, s, o, 1]);
          }
          static makeRotation(s) {
            var o = Math.cos(s), l = Math.sin(s);
            return new n([o, -l, 0, l, o, 0, 0, 0, 1]);
          }
          static makeScaling(s, o) {
            return new n([s, 0, 0, 0, o, 0, 0, 0, 1]);
          }
          multiply(s) {
            let o = this.values, l = s.values;
            var a = o[0], u = o[1], c = o[2], h = o[3], f = o[4], m = o[5], v = o[6], y = o[7], x = o[8], T = l[0], C = l[1], H = l[2], k = l[3], N = l[4], Y = l[5], K = l[6], q = l[7], ee = l[8];
            return new n([T * a + C * h + H * v, T * u + C * f + H * y, T * c + C * m + H * x, k * a + N * h + Y * v, k * u + N * f + Y * y, k * c + N * m + Y * x, K * a + q * h + ee * v, K * u + q * f + ee * y, K * c + q * m + ee * x]);
          }
        }
        e.Mat3 = n;
      })(i), (function(e) {
        var n = { supportsFullScreen: false, isFullScreen: function() {
          return false;
        }, getFullScreenElement: function() {
          return null;
        }, requestFullScreen: function() {
        }, exitFullScreen: function() {
        }, cancelFullScreen: function() {
        }, fullScreenEventName: "", fullScreenErrorEventName: "" };
        document.exitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.fullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.requestFullscreen().catch(function(s) {
            e.console.error("Fullscreen request failed: ", s);
          });
        }, n.exitFullScreen = function() {
          document.exitFullscreen().catch(function(r) {
            e.console.error("Error while exiting fullscreen: ", r);
          });
        }, n.fullScreenEventName = "fullscreenchange", n.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.msFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.msRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.msExitFullscreen();
        }, n.fullScreenEventName = "MSFullscreenChange", n.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.webkitExitFullscreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitCurrentFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.webkitCancelFullScreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.mozFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.mozRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.mozCancelFullScreen();
        }, n.fullScreenEventName = "mozfullscreenchange", n.fullScreenErrorEventName = "mozfullscreenerror"), n.isFullScreen = function() {
          return n.getFullScreenElement() !== null;
        }, n.cancelFullScreen = function() {
          e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), n.exitFullScreen();
        }, e.extend(e, n);
      })(i), (function(e) {
        e.EventSource = function() {
          this.events = {}, this._rejectedEventList = {};
        }, e.EventSource.prototype = { addOnceHandler: function(n, r, s, o, l) {
          var a = this;
          o = o || 1;
          var u = 0, c = function(h) {
            return u++, u === o && a.removeHandler(n, c), r(h);
          };
          return this.addHandler(n, c, s, l);
        }, addHandler: function(n, r, s, o) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var l = this.events[n];
          if (l || (this.events[n] = l = []), r && e.isFunction(r)) {
            var a = l.length, u = { handler: r, userData: s || null, priority: o || 0 };
            for (l[a] = u; a > 0 && l[a - 1].priority < l[a].priority; ) l[a] = l[a - 1], l[a - 1] = u, a--;
          }
          return true;
        }, removeHandler: function(n, r) {
          var s = this.events[n], o = [], l;
          if (s && e.isArray(s)) {
            for (l = 0; l < s.length; l++) s[l].handler !== r && o.push(s[l]);
            this.events[n] = o;
          }
        }, numberOfHandlers: function(n) {
          var r = this.events[n];
          return r ? r.length : 0;
        }, removeAllHandlers: function(n) {
          if (n) this.events[n] = [];
          else for (var r in this.events) this.events[r] = [];
        }, getHandler: function(n) {
          var r = this.events[n];
          return !r || !r.length ? null : (r = r.length === 1 ? [r[0]] : Array.apply(null, r), function(s, o) {
            var l, a = r.length;
            for (l = 0; l < a; l++) r[l] && (o.eventSource = s, o.userData = r[l].userData, r[l].handler(o));
          });
        }, raiseEvent: function(n, r) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var s = this.getHandler(n);
          return s && s(this, r || {}), true;
        }, rejectEventHandler(n, r = "") {
          this._rejectedEventList[n] = r;
        }, allowEventHandler(n) {
          delete this._rejectedEventList[n];
        } };
      })(i), (function(e) {
        var n = {};
        e.MouseTracker = function(g) {
          var p = arguments;
          e.isPlainObject(g) || (g = { element: p[0], clickTimeThreshold: p[1], clickDistThreshold: p[2] }), this.hash = Math.random(), this.element = e.getElement(g.element), this.clickTimeThreshold = g.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = g.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = g.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = g.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = g.userData || null, this.stopDelay = g.stopDelay || 50, this.preProcessEventHandler = g.preProcessEventHandler || null, this.contextMenuHandler = g.contextMenuHandler || null, this.enterHandler = g.enterHandler || null, this.leaveHandler = g.leaveHandler || null, this.exitHandler = g.exitHandler || null, this.overHandler = g.overHandler || null, this.outHandler = g.outHandler || null, this.pressHandler = g.pressHandler || null, this.nonPrimaryPressHandler = g.nonPrimaryPressHandler || null, this.releaseHandler = g.releaseHandler || null, this.nonPrimaryReleaseHandler = g.nonPrimaryReleaseHandler || null, this.moveHandler = g.moveHandler || null, this.scrollHandler = g.scrollHandler || null, this.clickHandler = g.clickHandler || null, this.dblClickHandler = g.dblClickHandler || null, this.dragHandler = g.dragHandler || null, this.dragEndHandler = g.dragEndHandler || null, this.pinchHandler = g.pinchHandler || null, this.stopHandler = g.stopHandler || null, this.keyDownHandler = g.keyDownHandler || null, this.keyUpHandler = g.keyUpHandler || null, this.keyHandler = g.keyHandler || null, this.focusHandler = g.focusHandler || null, this.blurHandler = g.blurHandler || null;
          var _ = this;
          n[this.hash] = { click: function(b) {
            H(_, b);
          }, dblclick: function(b) {
            k(_, b);
          }, keydown: function(b) {
            N(_, b);
          }, keyup: function(b) {
            Y(_, b);
          }, keypress: function(b) {
            K(_, b);
          }, focus: function(b) {
            q(_, b);
          }, blur: function(b) {
            ee(_, b);
          }, contextmenu: function(b) {
            ce(_, b);
          }, wheel: function(b) {
            te(_, b);
          }, mousewheel: function(b) {
            j(_, b);
          }, DOMMouseScroll: function(b) {
            j(_, b);
          }, MozMousePixelScroll: function(b) {
            j(_, b);
          }, losecapture: function(b) {
            he(_, b);
          }, mouseenter: function(b) {
            ge(_, b);
          }, mouseleave: function(b) {
            Nt(_, b);
          }, mouseover: function(b) {
            Ut(_, b);
          }, mouseout: function(b) {
            nt(_, b);
          }, mousedown: function(b) {
            $e(_, b);
          }, mouseup: function(b) {
            bt(_, b);
          }, mousemove: function(b) {
            ii(_, b);
          }, touchstart: function(b) {
            ye(_, b);
          }, touchend: function(b) {
            me(_, b);
          }, touchmove: function(b) {
            pe(_, b);
          }, touchcancel: function(b) {
            ae(_, b);
          }, gesturestart: function(b) {
            Ae(_, b);
          }, gesturechange: function(b) {
            Re(_, b);
          }, gotpointercapture: function(b) {
            Qe(_, b);
          }, lostpointercapture: function(b) {
            je(_, b);
          }, pointerenter: function(b) {
            ge(_, b);
          }, pointerleave: function(b) {
            Nt(_, b);
          }, pointerover: function(b) {
            Ut(_, b);
          }, pointerout: function(b) {
            nt(_, b);
          }, pointerdown: function(b) {
            $e(_, b);
          }, pointerup: function(b) {
            bt(_, b);
          }, pointermove: function(b) {
            ii(_, b);
          }, pointercancel: function(b) {
            F(_, b);
          }, pointerupcaptured: function(b) {
            Wt(_, b);
          }, pointermovecaptured: function(b) {
            P(_, b);
          }, tracking: false, activePointersLists: [], lastClickPos: null, dblClickTimeOut: null, pinchGPoints: [], lastPinchDist: 0, currentPinchDist: 0, lastPinchCenter: null, currentPinchCenter: null, sentDragEvent: false }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), g.startDisabled || this.setTracking(true);
        }, e.MouseTracker.prototype = { destroy: function() {
          a(this), this.element = null, n[this.hash] = null, delete n[this.hash];
        }, isTracking: function() {
          return n[this.hash].tracking;
        }, setTracking: function(g) {
          return g ? l(this) : a(this), this;
        }, getActivePointersListByType: function(g) {
          var p = n[this.hash], _, b = p ? p.activePointersLists.length : 0, O;
          for (_ = 0; _ < b; _++) if (p.activePointersLists[_].type === g) return p.activePointersLists[_];
          return O = new e.MouseTracker.GesturePointList(g), p && p.activePointersLists.push(O), O;
        }, getActivePointerCount: function() {
          var g = n[this.hash], p, _ = g.activePointersLists.length, b = 0;
          for (p = 0; p < _; p++) b += g.activePointersLists[p].getLength();
          return b;
        }, preProcessEventHandler: function() {
        }, contextMenuHandler: function() {
        }, enterHandler: function() {
        }, leaveHandler: function() {
        }, exitHandler: function() {
        }, overHandler: function() {
        }, outHandler: function() {
        }, pressHandler: function() {
        }, nonPrimaryPressHandler: function() {
        }, releaseHandler: function() {
        }, nonPrimaryReleaseHandler: function() {
        }, moveHandler: function() {
        }, scrollHandler: function() {
        }, clickHandler: function() {
        }, dblClickHandler: function() {
        }, dragHandler: function() {
        }, dragEndHandler: function() {
        }, pinchHandler: function() {
        }, stopHandler: function() {
        }, keyDownHandler: function() {
        }, keyUpHandler: function() {
        }, keyHandler: function() {
        }, focusHandler: function() {
        }, blurHandler: function() {
        } };
        var r = (function() {
          try {
            return window.self !== window.top;
          } catch {
            return true;
          }
        })();
        function s(g) {
          try {
            return g.addEventListener && g.removeEventListener;
          } catch {
            return false;
          }
        }
        e.MouseTracker.gesturePointVelocityTracker = /* @__PURE__ */ (function() {
          var g = [], p = 0, _ = 0, b = function(ve, re) {
            return ve.hash.toString() + re.type + re.id.toString();
          }, O = function() {
            var ve, re = g.length, Oe, Ie, jt = e.now(), ds, fs, ps;
            for (ds = jt - _, _ = jt, ve = 0; ve < re; ve++) Oe = g[ve], Ie = Oe.gPoint, Ie.direction = Math.atan2(Ie.currentPos.y - Oe.lastPos.y, Ie.currentPos.x - Oe.lastPos.x), fs = Oe.lastPos.distanceTo(Ie.currentPos), Oe.lastPos = Ie.currentPos, ps = 1e3 * fs / (ds + 1), Ie.speed = 0.75 * ps + 0.25 * Ie.speed;
          }, G = function(ve, re) {
            var Oe = b(ve, re);
            g.push({ guid: Oe, gPoint: re, lastPos: re.currentPos }), g.length === 1 && (_ = e.now(), p = window.setInterval(O, 50));
          }, Q = function(ve, re) {
            var Oe = b(ve, re), Ie, jt = g.length;
            for (Ie = 0; Ie < jt; Ie++) if (g[Ie].guid === Oe) {
              g.splice(Ie, 1), jt--, jt === 0 && window.clearInterval(p);
              break;
            }
          };
          return { addPoint: G, removePoint: Q };
        })(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = true, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setPointerCapture) && e.isFunction(g.releasePointerCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = false, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setCapture) && e.isFunction(g.releaseCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(g) {
          this._gPoints = [], this.type = g, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
        }, e.MouseTracker.GesturePointList.prototype = { getLength: function() {
          return this._gPoints.length;
        }, asArray: function() {
          return this._gPoints;
        }, add: function(g) {
          return this._gPoints.push(g);
        }, removeById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) {
            this._gPoints.splice(p, 1);
            break;
          }
          return this._gPoints.length;
        }, getByIndex: function(g) {
          return g < this._gPoints.length ? this._gPoints[g] : null;
        }, getById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) return this._gPoints[p];
          return null;
        }, getPrimary: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].isPrimary) return this._gPoints[p];
          return null;
        }, addContact: function() {
          ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
        }, removeContact: function() {
          --this.contacts, this.contacts < 0 && (this.contacts = 0);
        } };
        function o(g) {
          var p = n[g.hash], _, b, O, G, Q, ve = p.activePointersLists.length;
          for (_ = 0; _ < ve; _++) if (O = p.activePointersLists[_], O.getLength() > 0) {
            for (Q = [], G = O.asArray(), b = 0; b < G.length; b++) Q.push(G[b]);
            for (b = 0; b < Q.length; b++) z(g, O, Q[b]);
          }
          for (_ = 0; _ < ve; _++) p.activePointersLists.pop();
          p.sentDragEvent = false;
        }
        function l(g) {
          var p = n[g.hash], _, b;
          if (!p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.addEvent(g.element, _, p[_], _ === e.MouseTracker.wheelEventName ? { passive: false, capture: false } : false);
            o(g), p.tracking = true;
          }
        }
        function a(g) {
          var p = n[g.hash], _, b;
          if (p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.removeEvent(g.element, _, p[_], false);
            o(g), p.tracking = false;
          }
        }
        function u(g, p) {
          var _ = n[g.hash];
          if (p === "pointerevent") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "mouse") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "touch") return { upName: "touchend", upHandler: _.touchendcaptured, moveName: "touchmove", moveHandler: _.touchmovecaptured };
          throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
        }
        function c(g, p) {
          var _;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) try {
            g.element.setPointerCapture(p.id);
          } catch {
            e.console.warn("setPointerCapture() called on invalid pointer ID");
            return;
          }
          else g.element.setCapture(true);
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.addEvent(window.top, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true);
          S(g, p, true);
        }
        function h(g, p) {
          var _, b, O;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) {
            if (b = g.getActivePointersListByType(p.type), O = b.getById(p.id), !O || !O.captured) return;
            try {
              g.element.releasePointerCapture(p.id);
            } catch {
            }
          } else g.element.releaseCapture();
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.removeEvent(window.top, _.upName, _.upHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true);
          S(g, p, false);
        }
        function f(g) {
          return e.MouseTracker.havePointerEvents ? g.pointerId : e.MouseTracker.mousePointerId;
        }
        function m(g) {
          return e.MouseTracker.havePointerEvents && g.pointerType ? g.pointerType : "mouse";
        }
        function v(g) {
          return e.MouseTracker.havePointerEvents ? g.isPrimary : true;
        }
        function y(g) {
          return e.getMousePosition(g);
        }
        function x(g, p) {
          return T(y(g), p);
        }
        function T(g, p) {
          var _ = e.getElementOffset(p);
          return g.minus(_);
        }
        function C(g, p) {
          return new e.Point((g.x + p.x) / 2, (g.y + p.y) / 2);
        }
        function H(g, p) {
          var _ = { originalEvent: p, eventType: "click", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function k(g, p) {
          var _ = { originalEvent: p, eventType: "dblclick", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function N(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keydown", pointerType: "", isEmulated: false };
          w(g, b), g.keyDownHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyDownHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function Y(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keyup", pointerType: "", isEmulated: false };
          w(g, b), g.keyUpHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyUpHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function K(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keypress", pointerType: "", isEmulated: false };
          w(g, b), g.keyHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function q(g, p) {
          var _ = { originalEvent: p, eventType: "focus", pointerType: "", isEmulated: false };
          w(g, _), g.focusHandler && !_.preventGesture && g.focusHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function ee(g, p) {
          var _ = { originalEvent: p, eventType: "blur", pointerType: "", isEmulated: false };
          w(g, _), g.blurHandler && !_.preventGesture && g.blurHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function ce(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "contextmenu", pointerType: "mouse", isEmulated: false };
          w(g, b), g.contextMenuHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, position: T(y(p), g.element), originalEvent: b.originalEvent, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.contextMenuHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function te(g, p) {
          ne(g, p, p);
        }
        function j(g, p) {
          var _ = { target: p.target || p.srcElement, type: "wheel", shiftKey: p.shiftKey || false, clientX: p.clientX, clientY: p.clientY, pageX: p.pageX ? p.pageX : p.clientX, pageY: p.pageY ? p.pageY : p.clientY, deltaMode: p.type === "MozMousePixelScroll" ? 0 : 1, deltaX: 0, deltaZ: 0 };
          e.MouseTracker.wheelEventName === "mousewheel" ? _.deltaY = -p.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : _.deltaY = p.detail, ne(g, _, p);
        }
        function ne(g, p, _) {
          var b = 0, O, G = null;
          b = p.deltaY ? p.deltaY < 0 ? 1 : -1 : 0, O = { originalEvent: p, eventType: "wheel", pointerType: "mouse", isEmulated: p !== _ }, w(g, O), g.scrollHandler && !O.preventGesture && !O.defaultPrevented && (G = { eventSource: g, pointerType: "mouse", position: x(p, g.element), scroll: b, shift: p.shiftKey, isTouchEvent: false, originalEvent: _, preventDefault: O.preventDefault || O.defaultPrevented, userData: g.userData }, g.scrollHandler(G)), O.stopPropagation && e.stopEvent(_), (G && G.preventDefault || O.preventDefault && !O.defaultPrevented) && e.cancelEvent(_);
        }
        function he(g, p) {
          var _ = { id: e.MouseTracker.mousePointerId, type: "mouse" }, b = { originalEvent: p, eventType: "lostpointercapture", pointerType: "mouse", isEmulated: false };
          w(g, b), p.target === g.element && S(g, _, false), b.stopPropagation && e.stopEvent(p);
        }
        function ye(g, p) {
          var _, b, O = p.changedTouches.length, G, Q = g.getActivePointersListByType("touch");
          _ = e.now(), Q.getLength() > p.touches.length - O && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
          var ve = { originalEvent: p, eventType: "pointerdown", pointerType: "touch", isEmulated: false };
          for (w(g, ve), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", isPrimary: Q.getLength() === 0, currentPos: y(p.changedTouches[b]), currentTime: _ }, L(g, ve, G), W(g, ve, G, 0), S(g, G, true);
          ve.preventDefault && !ve.defaultPrevented && e.cancelEvent(p), ve.stopPropagation && e.stopEvent(p);
        }
        function me(g, p) {
          var _, b, O = p.changedTouches.length, G;
          _ = e.now();
          var Q = { originalEvent: p, eventType: "pointerup", pointerType: "touch", isEmulated: false };
          for (w(g, Q), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, Z(g, Q, G, 0), S(g, G, false), I(g, Q, G);
          Q.preventDefault && !Q.defaultPrevented && e.cancelEvent(p), Q.stopPropagation && e.stopEvent(p);
        }
        function pe(g, p) {
          var _, b, O = p.changedTouches.length, G;
          _ = e.now();
          var Q = { originalEvent: p, eventType: "pointermove", pointerType: "touch", isEmulated: false };
          for (w(g, Q), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, se(g, Q, G);
          Q.preventDefault && !Q.defaultPrevented && e.cancelEvent(p), Q.stopPropagation && e.stopEvent(p);
        }
        function ae(g, p) {
          var _ = p.changedTouches.length, b, O, G = { originalEvent: p, eventType: "pointercancel", pointerType: "touch", isEmulated: false };
          for (w(g, G), b = 0; b < _; b++) O = { id: p.changedTouches[b].identifier, type: "touch" }, X(g, G, O);
          G.stopPropagation && e.stopEvent(p);
        }
        function Ae(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function Re(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function Qe(g, p) {
          var _ = { originalEvent: p, eventType: "gotpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && S(g, { id: p.pointerId, type: m(p) }, true), _.stopPropagation && e.stopEvent(p);
        }
        function je(g, p) {
          var _ = { originalEvent: p, eventType: "lostpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && S(g, { id: p.pointerId, type: m(p) }, false), _.stopPropagation && e.stopEvent(p);
        }
        function ge(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerenter", pointerType: _.type, isEmulated: false };
          w(g, b), L(g, b, _);
        }
        function Nt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerleave", pointerType: _.type, isEmulated: false };
          w(g, b), I(g, b, _);
        }
        function Ut(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerover", pointerType: _.type, isEmulated: false };
          w(g, b), V(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function nt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerout", pointerType: _.type, isEmulated: false };
          w(g, b), M(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function $e(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = e.MouseTracker.havePointerEvents && _.type === "touch", O = { originalEvent: p, eventType: "pointerdown", pointerType: _.type, isEmulated: false };
          w(g, O), W(g, O, _, p.button), O.preventDefault && !O.defaultPrevented && e.cancelEvent(p), O.stopPropagation && e.stopEvent(p), O.shouldCapture && (b ? S(g, _, true) : c(g, _));
        }
        function bt(g, p) {
          st(g, p);
        }
        function Wt(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && st(g, p), e.stopEvent(p);
        }
        function st(g, p) {
          var _;
          _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() };
          var b = { originalEvent: p, eventType: "pointerup", pointerType: _.type, isEmulated: false };
          w(g, b), Z(g, b, _, p.button), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p), b.shouldReleaseCapture && (p.target === g.element ? h(g, _) : S(g, _, false));
        }
        function ii(g, p) {
          D(g, p);
        }
        function P(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && D(g, p), e.stopEvent(p);
        }
        function D(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointermove", pointerType: _.type, isEmulated: false };
          w(g, b), se(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function F(g, p) {
          var _ = { id: p.pointerId, type: m(p) }, b = { originalEvent: p, eventType: "pointercancel", pointerType: _.type, isEmulated: false };
          w(g, b), X(g, b, _), b.stopPropagation && e.stopEvent(p);
        }
        function U(g, p) {
          return p.speed = 0, p.direction = 0, p.contactPos = p.currentPos, p.contactTime = p.currentTime, p.lastPos = p.currentPos, p.lastTime = p.currentTime, g.add(p);
        }
        function z(g, p, _) {
          var b, O = p.getById(_.id);
          return O ? (O.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), h(g, O)), p.removeContact(), b = p.removeById(_.id)) : b = p.getLength(), b;
        }
        function d(g, p) {
          switch (p.eventType) {
            case "pointermove":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerover":
            case "pointerout":
            case "contextmenu":
            case "keydown":
            case "keyup":
            case "keypress":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "pointerdown":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerup":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "wheel":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasScrollHandler, p.stopPropagation = false;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
              p.isStoppable = true, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "click":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.clickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "dblclick":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.dblClickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "focus":
            case "blur":
            case "pointerenter":
            case "pointerleave":
            default:
              p.isStoppable = false, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
          }
        }
        function w(g, p) {
          p.eventSource = g, p.eventPhase = p.originalEvent && typeof p.originalEvent.eventPhase < "u" ? p.originalEvent.eventPhase : 0, p.defaultPrevented = e.eventIsCanceled(p.originalEvent), p.shouldCapture = false, p.shouldReleaseCapture = false, p.userData = g.userData, d(g, p), g.preProcessEventHandler && g.preProcessEventHandler(p);
        }
        function S(g, p, _) {
          var b = g.getActivePointersListByType(p.type), O = b.getById(p.id);
          O ? _ && !O.captured ? (O.captured = true, b.captureCount++) : !_ && O.captured && (O.captured = false, b.captureCount--, b.captureCount < 0 && (b.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
        }
        function L(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O;
          O = b.getById(_.id), O ? (O.insideElement = true, O.lastPos = O.currentPos, O.lastTime = O.currentTime, O.currentPos = _.currentPos, O.currentTime = _.currentTime, _ = O) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, U(b, _)), g.enterHandler && g.enterHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function I(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O, G;
          O = b.getById(_.id), O ? (O.captured ? (O.insideElement = false, O.lastPos = O.currentPos, O.lastTime = O.currentTime, O.currentPos = _.currentPos, O.currentTime = _.currentTime) : z(g, b, O), _ = O) : (_.captured = false, _.insideElementPressed = false), (g.leaveHandler || g.exitHandler) && (G = { eventSource: g, pointerType: _.type, position: _.currentPos && T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }, g.leaveHandler && g.leaveHandler(G), g.exitHandler && g.exitHandler(G));
        }
        function V(g, p, _) {
          var b, O;
          b = g.getActivePointersListByType(_.type), O = b.getById(_.id), O ? _ = O : (_.captured = false, _.insideElementPressed = false), g.overHandler && g.overHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function M(g, p, _) {
          var b, O;
          b = g.getActivePointersListByType(_.type), O = b.getById(_.id), O ? _ = O : (_.captured = false, _.insideElementPressed = false), g.outHandler && g.outHandler({ eventSource: g, pointerType: _.type, position: _.currentPos && T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function W(g, p, _, b) {
          var O = n[g.hash], G = g.getActivePointersListByType(_.type), Q;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons |= 1 : b === 1 ? G.buttons |= 4 : b === 2 ? G.buttons |= 2 : b === 3 ? G.buttons |= 8 : b === 4 ? G.buttons |= 16 : b === 5 && (G.buttons |= 32), b !== 0) {
            p.shouldCapture = false, p.shouldReleaseCapture = false, g.nonPrimaryPressHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryPressHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          Q = G.getById(_.id), Q ? (Q.insideElementPressed = true, Q.insideElement = true, Q.originalTarget = p.originalEvent.target, Q.contactPos = _.currentPos, Q.contactTime = _.currentTime, Q.lastPos = Q.currentPos, Q.lastTime = Q.currentTime, Q.currentPos = _.currentPos, Q.currentTime = _.currentTime, _ = Q) : (_.captured = false, _.insideElementPressed = true, _.insideElement = true, _.originalTarget = p.originalEvent.target, U(G, _)), G.addContact(), !p.preventGesture && !p.defaultPrevented ? (p.shouldCapture = true, p.shouldReleaseCapture = false, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(g, _), G.contacts === 1 ? g.pressHandler && !p.preventGesture && g.pressHandler({ eventSource: g, pointerType: _.type, position: T(_.contactPos, g.element), buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : G.contacts === 2 && g.pinchHandler && _.type === "touch" && (O.pinchGPoints = G.asArray(), O.lastPinchDist = O.currentPinchDist = O.pinchGPoints[0].currentPos.distanceTo(O.pinchGPoints[1].currentPos), O.lastPinchCenter = O.currentPinchCenter = C(O.pinchGPoints[0].currentPos, O.pinchGPoints[1].currentPos))) : (p.shouldCapture = false, p.shouldReleaseCapture = false);
        }
        function Z(g, p, _, b) {
          var O = n[g.hash], G = g.getActivePointersListByType(_.type), Q, ve, re, Oe = false, Ie;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons ^= -2 : b === 1 ? G.buttons ^= -5 : b === 2 ? G.buttons ^= -3 : b === 3 ? G.buttons ^= -9 : b === 4 ? G.buttons ^= -17 : b === 5 && (G.buttons ^= -33), p.shouldCapture = false, b !== 0) {
            p.shouldReleaseCapture = false, g.nonPrimaryReleaseHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryReleaseHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          re = G.getById(_.id), re ? (G.removeContact(), re.captured && (Oe = true), re.lastPos = re.currentPos, re.lastTime = re.currentTime, re.currentPos = _.currentPos, re.currentTime = _.currentTime, re.insideElement || z(g, G, re), Q = re.currentPos, ve = re.currentTime) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, U(G, _), re = _), !p.preventGesture && !p.defaultPrevented && (Oe ? (p.shouldReleaseCapture = true, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(g, re), G.contacts === 0 ? (g.releaseHandler && Q && g.releaseHandler({ eventSource: g, pointerType: re.type, position: T(Q, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), g.dragEndHandler && O.sentDragEvent && g.dragEndHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), speed: re.speed, direction: re.direction, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), O.sentDragEvent = false, (g.clickHandler || g.dblClickHandler) && re.insideElement && (Ie = ve - re.contactTime <= g.clickTimeThreshold && re.contactPos.distanceTo(Q) <= g.clickDistThreshold, g.clickHandler && g.clickHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), quick: Ie, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, originalTarget: re.originalTarget, userData: g.userData }), g.dblClickHandler && Ie && (G.clicks++, G.clicks === 1 ? (O.lastClickPos = Q, O.dblClickTimeOut = setTimeout(function() {
            G.clicks = 0;
          }, g.dblClickTimeThreshold)) : G.clicks === 2 && (clearTimeout(O.dblClickTimeOut), G.clicks = 0, O.lastClickPos.distanceTo(Q) <= g.dblClickDistThreshold && g.dblClickHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), O.lastClickPos = null)))) : G.contacts === 2 && g.pinchHandler && re.type === "touch" && (O.pinchGPoints = G.asArray(), O.lastPinchDist = O.currentPinchDist = O.pinchGPoints[0].currentPos.distanceTo(O.pinchGPoints[1].currentPos), O.lastPinchCenter = O.currentPinchCenter = C(O.pinchGPoints[0].currentPos, O.pinchGPoints[1].currentPos))) : (p.shouldReleaseCapture = false, g.releaseHandler && Q && (g.releaseHandler({ eventSource: g, pointerType: re.type, position: T(Q, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function se(g, p, _) {
          var b = n[g.hash], O = g.getActivePointersListByType(_.type), G, Q, ve;
          if (typeof p.originalEvent.buttons < "u" && (O.buttons = p.originalEvent.buttons), G = O.getById(_.id), G) G.lastPos = G.currentPos, G.lastTime = G.currentTime, G.currentPos = _.currentPos, G.currentTime = _.currentTime;
          else return;
          p.shouldCapture = false, p.shouldReleaseCapture = false, g.stopHandler && _.type === "mouse" && (clearTimeout(g.stopTimeOut), g.stopTimeOut = setTimeout(function() {
            oe(g, p.originalEvent, _.type);
          }, g.stopDelay)), O.contacts === 0 ? g.moveHandler && g.moveHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: O.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : O.contacts === 1 ? (g.moveHandler && (G = O.asArray()[0], g.moveHandler({ eventSource: g, pointerType: G.type, position: T(G.currentPos, g.element), buttons: O.buttons, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.dragHandler && !p.preventGesture && !p.defaultPrevented && (G = O.asArray()[0], ve = G.currentPos.minus(G.lastPos), g.dragHandler({ eventSource: g, pointerType: G.type, position: T(G.currentPos, g.element), buttons: O.buttons, delta: ve, speed: G.speed, direction: G.direction, shift: p.originalEvent.shiftKey, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true, b.sentDragEvent = true)) : O.contacts === 2 && (g.moveHandler && (Q = O.asArray(), g.moveHandler({ eventSource: g, pointerType: Q[0].type, position: T(C(Q[0].currentPos, Q[1].currentPos), g.element), buttons: O.buttons, isTouchEvent: Q[0].type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.pinchHandler && _.type === "touch" && !p.preventGesture && !p.defaultPrevented && (ve = b.pinchGPoints[0].currentPos.distanceTo(b.pinchGPoints[1].currentPos), ve !== b.currentPinchDist && (b.lastPinchDist = b.currentPinchDist, b.currentPinchDist = ve, b.lastPinchCenter = b.currentPinchCenter, b.currentPinchCenter = C(b.pinchGPoints[0].currentPos, b.pinchGPoints[1].currentPos), g.pinchHandler({ eventSource: g, pointerType: "touch", gesturePoints: b.pinchGPoints, lastCenter: T(b.lastPinchCenter, g.element), center: T(b.currentPinchCenter, g.element), lastDistance: b.lastPinchDist, distance: b.currentPinchDist, shift: p.originalEvent.shiftKey, originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function X(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O;
          O = b.getById(_.id), O && z(g, b, O);
        }
        function oe(g, p, _) {
          g.stopHandler && g.stopHandler({ eventSource: g, pointerType: _, position: x(p, g.element), buttons: g.getActivePointersListByType(_).buttons, isTouchEvent: _ === "touch", originalEvent: p, userData: g.userData });
        }
      })(i), (function(e) {
        e.ControlAnchor = { NONE: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, ABSOLUTE: 5 }, e.Control = function(n, r, s) {
          var o = n.parentNode;
          typeof r == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), r = { anchor: r }), r.attachToViewer = typeof r.attachToViewer > "u" ? true : r.attachToViewer, this.autoFade = typeof r.autoFade > "u" ? true : r.autoFade, this.element = n, this.anchor = r.anchor, this.container = s, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof r.top == "number" ? r.top + "px" : r.top, this.wrapper.style.left = typeof r.left == "number" ? r.left + "px" : r.left, this.wrapper.style.height = typeof r.height == "number" ? r.height + "px" : r.height, this.wrapper.style.width = typeof r.width == "number" ? r.width + "px" : r.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), r.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : o.appendChild(this.wrapper);
        }, e.Control.prototype = { destroy: function() {
          this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
        }, isVisible: function() {
          return this.wrapper.style.display !== "none";
        }, setVisible: function(n) {
          this.wrapper.style.display = n ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
        }, setOpacity: function(n) {
          e.setElementOpacity(this.wrapper, n, true);
        } };
      })(i), (function(e) {
        e.ControlDock = function(r) {
          var s = ["topleft", "topright", "bottomright", "bottomleft"], o, l;
          for (e.extend(true, this, { id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6), container: e.makeNeutralElement("div"), controls: [] }, r), this.container.onsubmit = function() {
            return false;
          }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), e.getElementStyle(this.element).position === "static" && (this.element.style.position = "relative"), this.container.style.width = "100%", this.container.style.height = "100%"), l = 0; l < s.length; l++) o = s[l], this.controls[o] = e.makeNeutralElement("div"), this.controls[o].style.position = "absolute", o.match("left") && (this.controls[o].style.left = "0px"), o.match("right") && (this.controls[o].style.right = "0px"), o.match("top") && (this.controls[o].style.top = "0px"), o.match("bottom") && (this.controls[o].style.bottom = "0px");
          this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
        }, e.ControlDock.prototype = { addControl: function(r, s) {
          r = e.getElement(r);
          var o = null;
          if (!(n(this, r) >= 0)) {
            switch (s.anchor) {
              case e.ControlAnchor.TOP_RIGHT:
                o = this.controls.topright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.BOTTOM_RIGHT:
                o = this.controls.bottomright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.BOTTOM_LEFT:
                o = this.controls.bottomleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.TOP_LEFT:
                o = this.controls.topleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.ABSOLUTE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
              default:
              case e.ControlAnchor.NONE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
            }
            this.controls.push(new e.Control(r, s, o)), r.style.display = "inline-block";
          }
        }, removeControl: function(r) {
          r = e.getElement(r);
          var s = n(this, r);
          return s >= 0 && (this.controls[s].destroy(), this.controls.splice(s, 1)), this;
        }, clearControls: function() {
          for (; this.controls.length > 0; ) this.controls.pop().destroy();
          return this;
        }, areControlsEnabled: function() {
          var r;
          for (r = this.controls.length - 1; r >= 0; r--) if (this.controls[r].isVisible()) return true;
          return false;
        }, setControlsEnabled: function(r) {
          var s;
          for (s = this.controls.length - 1; s >= 0; s--) this.controls[s].setVisible(r);
          return this;
        } };
        function n(r, s) {
          var o = r.controls, l;
          for (l = o.length - 1; l >= 0; l--) if (o[l].element === s) return l;
          return -1;
        }
      })(i), (function(e) {
        e.Placement = e.freezeObject({ CENTER: 0, TOP_LEFT: 1, TOP: 2, TOP_RIGHT: 3, RIGHT: 4, BOTTOM_RIGHT: 5, BOTTOM: 6, BOTTOM_LEFT: 7, LEFT: 8, properties: { 0: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false }, 1: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 2: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 3: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: true, isVerticallyCentered: false, isBottom: false }, 4: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: true, isBottom: false }, 5: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: false, isBottom: true }, 6: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 7: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 8: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false } } });
      })(i), (function(e) {
        var n = {}, r = 1;
        e.Viewer = function(d) {
          var w = arguments, S = this, L;
          e.isPlainObject(d) || (d = { id: w[0], xmlPath: w.length > 1 ? w[1] : void 0, prefixUrl: w.length > 2 ? w[2] : void 0, controls: w.length > 3 ? w[3] : void 0, overlays: w.length > 4 ? w[4] : void 0 }), d.config && (e.extend(true, d, d.config), delete d.config);
          let I = ["useCanvas"];
          if (d.drawerOptions = Object.assign({}, I.reduce((M, W) => (M[W] = d[W], delete d[W], M), {}), d.drawerOptions), e.extend(true, this, { id: d.id, hash: d.hash || r++, initialPage: 0, element: null, container: null, canvas: null, overlays: [], overlaysContainer: null, previousBody: [], customControls: [], source: null, drawer: null, world: null, viewport: null, navigator: null, collectionViewport: null, collectionDrawer: null, navImages: null, buttonGroup: null, profiler: null }, e.DEFAULT_SETTINGS, d), typeof this.hash > "u") throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
          typeof n[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), n[this.hash] = { fsBoundsDelta: new e.Point(1, 1), prevContainerSize: null, animating: false, forceRedraw: false, needsResize: false, forceResize: false, mouseInside: false, group: null, zooming: false, zoomFactor: null, lastZoomTime: null, fullPage: false, onfullscreenchange: null, lastClickTime: null, draggingToZoom: false }, this._sequenceIndex = 0, this._firstOpen = true, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(M) {
            var W = e.getString("Errors.OpenFailed", M.eventSource, M.message);
            S._showMessage(W);
          }), e.ControlDock.call(this, d), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", (function(M) {
            M.width = "100%", M.height = "100%", M.overflow = "hidden", M.position = "absolute", M.top = "0px", M.left = "0px";
          })(this.canvas.style), e.setElementTouchActionNone(this.canvas), d.tabIndex !== "" && (this.canvas.tabIndex = d.tabIndex === void 0 ? 0 : d.tabIndex), this.container.className = "openseadragon-container", (function(M) {
            M.width = "100%", M.height = "100%", M.position = "relative", M.overflow = "hidden", M.left = "0px", M.top = "0px", M.textAlign = "left";
          })(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({ userData: "Viewer.innerTracker", element: this.canvas, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, contextMenuHandler: e.delegate(this, x), keyDownHandler: e.delegate(this, T), keyHandler: e.delegate(this, C), clickHandler: e.delegate(this, H), dblClickHandler: e.delegate(this, k), dragHandler: e.delegate(this, N), dragEndHandler: e.delegate(this, Y), enterHandler: e.delegate(this, K), leaveHandler: e.delegate(this, q), pressHandler: e.delegate(this, ee), releaseHandler: e.delegate(this, ce), nonPrimaryPressHandler: e.delegate(this, te), nonPrimaryReleaseHandler: e.delegate(this, j), scrollHandler: e.delegate(this, me), pinchHandler: e.delegate(this, ne), focusHandler: e.delegate(this, he), blurHandler: e.delegate(this, ye) }), this.outerTracker = new e.MouseTracker({ userData: "Viewer.outerTracker", element: this.container, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, enterHandler: e.delegate(this, pe), leaveHandler: e.delegate(this, ae) }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), n[this.hash].prevContainerSize = s(this.container), window.ResizeObserver ? (this._autoResizePolling = false, this._resizeObserver = new ResizeObserver(function() {
            n[S.hash].needsResize = true;
          }), this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = true, this.world = new e.World({ viewer: this }), this.world.addHandler("add-item", function(M) {
            S.source = S.world.getItemAt(0).source, n[S.hash].forceRedraw = true, S._updateRequestId || (S._updateRequestId = u(S, Ae));
          }), this.world.addHandler("remove-item", function(M) {
            S.world.getItemCount() ? S.source = S.world.getItemAt(0).source : S.source = null, n[S.hash].forceRedraw = true;
          }), this.world.addHandler("metrics-change", function(M) {
            S.viewport && S.viewport._setContentBounds(S.world.getHomeBounds(), S.world.getContentFactor());
          }), this.world.addHandler("item-index-change", function(M) {
            S.source = S.world.getItemAt(0).source;
          }), this.viewport = new e.Viewport({ containerSize: n[this.hash].prevContainerSize, springStiffness: this.springStiffness, animationTime: this.animationTime, minZoomImageRatio: this.minZoomImageRatio, maxZoomPixelRatio: this.maxZoomPixelRatio, visibilityRatio: this.visibilityRatio, wrapHorizontal: this.wrapHorizontal, wrapVertical: this.wrapVertical, defaultZoomLevel: this.defaultZoomLevel, minZoomLevel: this.minZoomLevel, maxZoomLevel: this.maxZoomLevel, viewer: this, degrees: this.degrees, flipped: this.flipped, overlayPreserveContentDirection: this.overlayPreserveContentDirection, navigatorRotate: this.navigatorRotate, homeFillsViewer: this.homeFillsViewer, margins: this.viewportMargins, silenceMultiImageWarnings: this.silenceMultiImageWarnings }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({ jobLimit: this.imageLoaderLimit, timeout: d.timeout, tileRetryMax: this.tileRetryMax, tileRetryDelay: this.tileRetryDelay }), this.tileCache = new e.TileCache({ maxImageCacheCount: this.maxImageCacheCount }), Object.prototype.hasOwnProperty.call(this.drawerOptions, "useCanvas") && (e.console.error('useCanvas is deprecated, use the "drawer" option to indicate preferred drawer(s)'), this.drawerOptions.useCanvas || (this.drawer = e.HTMLDrawer), delete this.drawerOptions.useCanvas);
          let V = Array.isArray(this.drawer) ? this.drawer : [this.drawer];
          V.length === 0 && (V = [e.DEFAULT_SETTINGS.drawer].flat(), e.console.warn("No valid drawers were selected. Using the default value.")), this.drawer = null;
          for (const M of V) if (this.requestDrawer(M, { mainDrawer: true, redrawImmediately: false })) break;
          if (!this.drawer) throw e.console.error("No drawer could be created!"), "Error with creating the selected drawer(s)";
          for (this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (L = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (L = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({ element: this.navigatorElement, id: this.navigatorId, position: this.navigatorPosition, sizeRatio: this.navigatorSizeRatio, maintainSizeRatio: this.navigatorMaintainSizeRatio, top: this.navigatorTop, left: this.navigatorLeft, width: this.navigatorWidth, height: this.navigatorHeight, autoResize: this.navigatorAutoResize, autoFade: this.navigatorAutoFade, prefixUrl: this.prefixUrl, viewer: this, navigatorRotate: this.navigatorRotate, background: this.navigatorBackground, opacity: this.navigatorOpacity, borderColor: this.navigatorBorderColor, displayRegionColor: this.navigatorDisplayRegionColor, crossOriginPolicy: this.crossOriginPolicy, animationTime: this.animationTime, drawer: this.drawer.getType(), loadTilesWithAjax: this.loadTilesWithAjax, ajaxHeaders: this.ajaxHeaders, ajaxWithCredentials: this.ajaxWithCredentials })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), L = 0; L < this.customControls.length; L++) this.addControl(this.customControls[L].id, { anchor: this.customControls[L].anchor });
          e.requestAnimationFrame(function() {
            h(S);
          }), e._viewers.set(this.element, this);
        }, e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, { isOpen: function() {
          return !!this.world.getItemCount();
        }, openDzi: function(d) {
          return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, openTileSource: function(d) {
          return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, get buttons() {
          return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
        }, open: function(d, w) {
          var S = this;
          if (this.close(), !d) return this;
          if (this.sequenceMode && e.isArray(d)) return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof w < "u" && !isNaN(w) && (this.initialPage = w), this.tileSources = d, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
          if (e.isArray(d) || (d = [d]), !d.length) return this;
          this._opening = true;
          for (var L = d.length, I = 0, V = 0, M, W = function() {
            if (I + V === L) if (I) {
              (S._firstOpen || !S.preserveViewport) && (S.viewport.goHome(true), S.viewport.update()), S._firstOpen = false;
              var X = d[0];
              if (X.tileSource && (X = X.tileSource), S.overlays && !S.preserveOverlays) for (var oe = 0; oe < S.overlays.length; oe++) S.currentOverlays[oe] = l(S, S.overlays[oe]);
              S._drawOverlays(), S._opening = false, S.raiseEvent("open", { source: X });
            } else S._opening = false, S.raiseEvent("open-failed", M);
          }, Z = function(X) {
            (!e.isPlainObject(X) || !X.tileSource) && (X = { tileSource: X }), X.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete X.index), X.collectionImmediately === void 0 && (X.collectionImmediately = true);
            var oe = X.success;
            X.success = function(p) {
              if (I++, X.tileSource.overlays) for (var _ = 0; _ < X.tileSource.overlays.length; _++) S.addOverlay(X.tileSource.overlays[_]);
              oe && oe(p), W();
            };
            var g = X.error;
            X.error = function(p) {
              V++, M || (M = p), g && g(p), W();
            }, S.addTiledImage(X);
          }, se = 0; se < d.length; se++) Z(d[se]);
          return this;
        }, close: function() {
          return n[this.hash] ? (this._opening = false, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), n[this.hash].animating = false, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
        }, destroy: function() {
          if (n[this.hash]) {
            if (this.raiseEvent("before-destroy"), this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this._resizeObserver && this._resizeObserver.disconnect(), this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), n[this.navigator.hash] = null, delete n[this.navigator.hash], this.navigator = null), this.buttonGroup) this.buttonGroup.destroy();
            else if (this.customButtons) for (; this.customButtons.length; ) this.customButtons.pop().destroy();
            if (this.paging && this.paging.destroy(), this.element) for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
            this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), n[this.hash] = null, delete n[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null, this.raiseEvent("destroy"), this.removeAllHandlers();
          }
        }, requestDrawer(d, w) {
          const S = { mainDrawer: true, redrawImmediately: true, drawerOptions: null };
          w = e.extend(true, S, w);
          const L = w.mainDrawer, I = w.redrawImmediately, V = w.drawerOptions, M = this.drawer;
          let W = null;
          if (d && d.prototype instanceof e.DrawerBase ? (W = d, d = "custom") : typeof d == "string" && (W = e.determineDrawer(d)), W || e.console.warn("Unsupported drawer! Drawer must be an existing string type, or a class that extends OpenSeadragon.DrawerBase."), W && W.isSupported()) {
            M && L && M.destroy();
            const Z = new W({ viewer: this, viewport: this.viewport, element: this.canvas, debugGridColor: this.debugGridColor, options: V || this.drawerOptions[d] });
            return L && (this.drawer = Z, I && this.forceRedraw()), Z;
          }
          return false;
        }, isMouseNavEnabled: function() {
          return this.innerTracker.isTracking();
        }, setMouseNavEnabled: function(d) {
          return this.innerTracker.setTracking(d), this.outerTracker.setTracking(d), this.raiseEvent("mouse-enabled", { enabled: d }), this;
        }, areControlsEnabled: function() {
          var d = this.controls.length, w;
          for (w = 0; w < this.controls.length; w++) d = d && this.controls[w].isVisible();
          return d;
        }, setControlsEnabled: function(d) {
          return d ? m(this) : h(this), this.raiseEvent("controls-enabled", { enabled: d }), this;
        }, setDebugMode: function(d) {
          for (var w = 0; w < this.world.getItemCount(); w++) this.world.getItemAt(w).debugMode = d;
          this.debugMode = d, this.forceRedraw();
        }, setAjaxHeaders: function(d, w) {
          if (d === null && (d = {}), !e.isPlainObject(d)) {
            console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          if (w === void 0 && (w = true), this.ajaxHeaders = d, w) {
            for (var S = 0; S < this.world.getItemCount(); S++) this.world.getItemAt(S)._updateAjaxHeaders(true);
            if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, true), this.referenceStrip && this.referenceStrip.miniViewers) for (var L in this.referenceStrip.miniViewers) this.referenceStrip.miniViewers[L].setAjaxHeaders(this.ajaxHeaders, true);
          }
        }, addButton: function(d) {
          this.buttonGroup.addButton(d);
        }, isFullPage: function() {
          return n[this.hash] && n[this.hash].fullPage;
        }, setFullPage: function(d) {
          var w = document.body, S = w.style, L = document.documentElement.style, I = this, V, M;
          if (d === this.isFullPage()) return this;
          var W = { fullPage: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-page", W), W.preventDefaultAction) return this;
          if (d && this.element) {
            for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = S.margin, this.docMargin = L.margin, S.margin = "0", L.margin = "0", this.bodyPadding = S.padding, this.docPadding = L.padding, S.padding = "0", L.padding = "0", this.bodyWidth = S.width, this.docWidth = L.width, S.width = "100%", L.width = "100%", this.bodyHeight = S.height, this.docHeight = L.height, S.height = "100%", L.height = "100%", this.bodyDisplay = S.display, S.display = "block", this.previousBody = [], n[this.hash].prevElementParent = this.element.parentNode, n[this.hash].prevNextSibling = this.element.nextSibling, n[this.hash].prevElementWidth = this.element.style.width, n[this.hash].prevElementHeight = this.element.style.height, V = w.childNodes.length, M = 0; M < V; M++) this.previousBody.push(w.childNodes[0]), w.removeChild(w.childNodes[0]);
            this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, w.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), w.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), n[this.hash].fullPage = true, e.delegate(this, pe)({});
          } else {
            for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, S.margin = this.bodyMargin, L.margin = this.docMargin, S.padding = this.bodyPadding, L.padding = this.docPadding, S.width = this.bodyWidth, L.width = this.docWidth, S.height = this.bodyHeight, L.height = this.docHeight, S.display = this.bodyDisplay, w.removeChild(this.element), V = this.previousBody.length, M = 0; M < V; M++) w.appendChild(this.previousBody.shift());
            e.removeClass(this.element, "fullpage"), n[this.hash].prevElementParent.insertBefore(this.element, n[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (w.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = n[this.hash].prevElementWidth, this.element.style.height = n[this.hash].prevElementHeight;
            var Z = 0, se = function() {
              e.setPageScroll(I.pageScroll);
              var X = e.getPageScroll();
              Z++, Z < 10 && (X.x !== I.pageScroll.x || X.y !== I.pageScroll.y) && e.requestAnimationFrame(se);
            };
            e.requestAnimationFrame(se), n[this.hash].fullPage = false, e.delegate(this, ae)({});
          }
          return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: d }), this;
        }, setFullScreen: function(d) {
          var w = this;
          if (!e.supportsFullScreen) return this.setFullPage(d);
          if (e.isFullScreen() === d) return this;
          var S = { fullScreen: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-screen", S), S.preventDefaultAction) return this;
          if (d) {
            if (this.setFullPage(true), !this.isFullPage()) return this;
            this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
            var L = function() {
              var I = e.isFullScreen();
              I || (e.removeEvent(document, e.fullScreenEventName, L), e.removeEvent(document, e.fullScreenErrorEventName, L), w.setFullPage(false), w.isFullPage() && (w.element.style.width = w.fullPageStyleWidth, w.element.style.height = w.fullPageStyleHeight)), w.navigator && w.viewport && setTimeout(function() {
                w.navigator.update(w.viewport);
              }), w.raiseEvent("full-screen", { fullScreen: I });
            };
            e.addEvent(document, e.fullScreenEventName, L), e.addEvent(document, e.fullScreenErrorEventName, L), e.requestFullScreen(document.body);
          } else e.exitFullScreen();
          return this;
        }, isVisible: function() {
          return this.container.style.visibility !== "hidden";
        }, isFullScreen: function() {
          return e.isFullScreen() && this.isFullPage();
        }, setVisible: function(d) {
          return this.container.style.visibility = d ? "" : "hidden", this.raiseEvent("visible", { visible: d }), this;
        }, addTiledImage: function(d) {
          e.console.assert(d, "[Viewer.addTiledImage] options is required"), e.console.assert(d.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(!d.replace || d.index > -1 && d.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
          var w = this;
          d.replace && (d.replaceItem = w.world.getItemAt(d.index)), this._hideMessage(), d.placeholderFillStyle === void 0 && (d.placeholderFillStyle = this.placeholderFillStyle), d.opacity === void 0 && (d.opacity = this.opacity), d.preload === void 0 && (d.preload = this.preload), d.compositeOperation === void 0 && (d.compositeOperation = this.compositeOperation), d.crossOriginPolicy === void 0 && (d.crossOriginPolicy = d.tileSource.crossOriginPolicy !== void 0 ? d.tileSource.crossOriginPolicy : this.crossOriginPolicy), d.ajaxWithCredentials === void 0 && (d.ajaxWithCredentials = this.ajaxWithCredentials), d.loadTilesWithAjax === void 0 && (d.loadTilesWithAjax = this.loadTilesWithAjax), e.isPlainObject(d.ajaxHeaders) || (d.ajaxHeaders = {});
          var S = { options: d };
          function L(M) {
            for (var W = 0; W < w._loadQueue.length; W++) if (w._loadQueue[W] === S) {
              w._loadQueue.splice(W, 1);
              break;
            }
            w._loadQueue.length === 0 && I(S), w.raiseEvent("add-item-failed", M), d.error && d.error(M);
          }
          function I(M) {
            w.collectionMode && (w.world.arrange({ immediately: M.options.collectionImmediately, rows: w.collectionRows, columns: w.collectionColumns, layout: w.collectionLayout, tileSize: w.collectionTileSize, tileMargin: w.collectionTileMargin }), w.world.setAutoRefigureSizes(true));
          }
          if (e.isArray(d.tileSource)) {
            setTimeout(function() {
              L({ message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.", source: d.tileSource, options: d });
            });
            return;
          }
          this._loadQueue.push(S);
          function V() {
            for (var M, W, Z; w._loadQueue.length && (M = w._loadQueue[0], !!M.tileSource); ) {
              if (w._loadQueue.splice(0, 1), M.options.replace) {
                var se = w.world.getIndexOfItem(M.options.replaceItem);
                se !== -1 && (M.options.index = se), w.world.removeItem(M.options.replaceItem);
              }
              W = new e.TiledImage({ viewer: w, source: M.tileSource, viewport: w.viewport, drawer: w.drawer, tileCache: w.tileCache, imageLoader: w.imageLoader, x: M.options.x, y: M.options.y, width: M.options.width, height: M.options.height, fitBounds: M.options.fitBounds, fitBoundsPlacement: M.options.fitBoundsPlacement, clip: M.options.clip, placeholderFillStyle: M.options.placeholderFillStyle, opacity: M.options.opacity, preload: M.options.preload, degrees: M.options.degrees, flipped: M.options.flipped, compositeOperation: M.options.compositeOperation, springStiffness: w.springStiffness, animationTime: w.animationTime, minZoomImageRatio: w.minZoomImageRatio, wrapHorizontal: w.wrapHorizontal, wrapVertical: w.wrapVertical, maxTilesPerFrame: w.maxTilesPerFrame, immediateRender: w.immediateRender, blendTime: w.blendTime, alwaysBlend: w.alwaysBlend, minPixelRatio: w.minPixelRatio, smoothTileEdgesMinZoom: w.smoothTileEdgesMinZoom, iOSDevice: w.iOSDevice, crossOriginPolicy: M.options.crossOriginPolicy, ajaxWithCredentials: M.options.ajaxWithCredentials, loadTilesWithAjax: M.options.loadTilesWithAjax, ajaxHeaders: M.options.ajaxHeaders, debugMode: w.debugMode, subPixelRoundingForTransparency: w.subPixelRoundingForTransparency }), w.collectionMode && w.world.setAutoRefigureSizes(false), w.navigator && (Z = e.extend({}, M.options, { replace: false, originalTiledImage: W, tileSource: M.tileSource }), w.navigator.addTiledImage(Z)), w.world.addItem(W, { index: M.options.index }), w._loadQueue.length === 0 && I(M), w.world.getItemCount() === 1 && !w.preserveViewport && w.viewport.goHome(true), M.options.success && M.options.success({ item: W });
            }
          }
          o(this, d.tileSource, d, function(M) {
            S.tileSource = M, V();
          }, function(M) {
            M.options = d, L(M), V();
          });
        }, addSimpleImage: function(d) {
          e.console.assert(d, "[Viewer.addSimpleImage] options is required"), e.console.assert(d.url, "[Viewer.addSimpleImage] options.url is required");
          var w = e.extend({}, d, { tileSource: { type: "image", url: d.url } });
          delete w.url, this.addTiledImage(w);
        }, addLayer: function(d) {
          var w = this;
          e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
          var S = e.extend({}, d, { success: function(L) {
            w.raiseEvent("add-layer", { options: d, drawer: L.item });
          }, error: function(L) {
            w.raiseEvent("add-layer-failed", L);
          } });
          return this.addTiledImage(S), this;
        }, getLayerAtLevel: function(d) {
          return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(d);
        }, getLevelOfLayer: function(d) {
          return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(d);
        }, getLayersCount: function() {
          return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
        }, setLayerLevel: function(d, w) {
          return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(d, w);
        }, removeLayer: function(d) {
          return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(d);
        }, forceRedraw: function() {
          return n[this.hash].forceRedraw = true, this;
        }, forceResize: function() {
          n[this.hash].needsResize = true, n[this.hash].forceResize = true;
        }, bindSequenceControls: function() {
          var d = e.delegate(this, v), w = e.delegate(this, y), S = e.delegate(this, this.goToNextPage), L = e.delegate(this, this.goToPreviousPage), I = this.navImages, V = true;
          return this.showSequenceControl && ((this.previousButton || this.nextButton) && (V = false), this.previousButton = new e.Button({ element: this.previousButton ? e.getElement(this.previousButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.PreviousPage"), srcRest: ge(this.prefixUrl, I.previous.REST), srcGroup: ge(this.prefixUrl, I.previous.GROUP), srcHover: ge(this.prefixUrl, I.previous.HOVER), srcDown: ge(this.prefixUrl, I.previous.DOWN), onRelease: L, onFocus: d, onBlur: w }), this.nextButton = new e.Button({ element: this.nextButton ? e.getElement(this.nextButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.NextPage"), srcRest: ge(this.prefixUrl, I.next.REST), srcGroup: ge(this.prefixUrl, I.next.GROUP), srcHover: ge(this.prefixUrl, I.next.HOVER), srcDown: ge(this.prefixUrl, I.next.DOWN), onRelease: S, onFocus: d, onBlur: w }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), V && (this.paging = new e.ButtonGroup({ buttons: [this.previousButton, this.nextButton], clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, { anchor: e.ControlAnchor.BOTTOM_RIGHT }) : this.addControl(this.pagingControl, { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }))), this;
        }, bindStandardControls: function() {
          var d = e.delegate(this, Nt), w = e.delegate(this, nt), S = e.delegate(this, Wt), L = e.delegate(this, Ut), I = e.delegate(this, st), V = e.delegate(this, P), M = e.delegate(this, D), W = e.delegate(this, F), Z = e.delegate(this, U), se = e.delegate(this, z), X = e.delegate(this, v), oe = e.delegate(this, y), g = this.navImages, p = [], _ = true;
          return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (_ = false), this.showZoomControl && (p.push(this.zoomInButton = new e.Button({ element: this.zoomInButton ? e.getElement(this.zoomInButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomIn"), srcRest: ge(this.prefixUrl, g.zoomIn.REST), srcGroup: ge(this.prefixUrl, g.zoomIn.GROUP), srcHover: ge(this.prefixUrl, g.zoomIn.HOVER), srcDown: ge(this.prefixUrl, g.zoomIn.DOWN), onPress: d, onRelease: w, onClick: S, onEnter: d, onExit: w, onFocus: X, onBlur: oe })), p.push(this.zoomOutButton = new e.Button({ element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomOut"), srcRest: ge(this.prefixUrl, g.zoomOut.REST), srcGroup: ge(this.prefixUrl, g.zoomOut.GROUP), srcHover: ge(this.prefixUrl, g.zoomOut.HOVER), srcDown: ge(this.prefixUrl, g.zoomOut.DOWN), onPress: L, onRelease: w, onClick: I, onEnter: L, onExit: w, onFocus: X, onBlur: oe }))), this.showHomeControl && p.push(this.homeButton = new e.Button({ element: this.homeButton ? e.getElement(this.homeButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Home"), srcRest: ge(this.prefixUrl, g.home.REST), srcGroup: ge(this.prefixUrl, g.home.GROUP), srcHover: ge(this.prefixUrl, g.home.HOVER), srcDown: ge(this.prefixUrl, g.home.DOWN), onRelease: V, onFocus: X, onBlur: oe })), this.showFullPageControl && p.push(this.fullPageButton = new e.Button({ element: this.fullPageButton ? e.getElement(this.fullPageButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.FullPage"), srcRest: ge(this.prefixUrl, g.fullpage.REST), srcGroup: ge(this.prefixUrl, g.fullpage.GROUP), srcHover: ge(this.prefixUrl, g.fullpage.HOVER), srcDown: ge(this.prefixUrl, g.fullpage.DOWN), onRelease: M, onFocus: X, onBlur: oe })), this.showRotationControl && (p.push(this.rotateLeftButton = new e.Button({ element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateLeft"), srcRest: ge(this.prefixUrl, g.rotateleft.REST), srcGroup: ge(this.prefixUrl, g.rotateleft.GROUP), srcHover: ge(this.prefixUrl, g.rotateleft.HOVER), srcDown: ge(this.prefixUrl, g.rotateleft.DOWN), onRelease: W, onFocus: X, onBlur: oe })), p.push(this.rotateRightButton = new e.Button({ element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateRight"), srcRest: ge(this.prefixUrl, g.rotateright.REST), srcGroup: ge(this.prefixUrl, g.rotateright.GROUP), srcHover: ge(this.prefixUrl, g.rotateright.HOVER), srcDown: ge(this.prefixUrl, g.rotateright.DOWN), onRelease: Z, onFocus: X, onBlur: oe }))), this.showFlipControl && p.push(this.flipButton = new e.Button({ element: this.flipButton ? e.getElement(this.flipButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Flip"), srcRest: ge(this.prefixUrl, g.flip.REST), srcGroup: ge(this.prefixUrl, g.flip.GROUP), srcHover: ge(this.prefixUrl, g.flip.HOVER), srcDown: ge(this.prefixUrl, g.flip.DOWN), onRelease: se, onFocus: X, onBlur: oe })), _ ? (this.buttonGroup = new e.ButtonGroup({ buttons: p, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, ii)), this.toolbar ? this.toolbar.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }) : this.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT })) : this.customButtons = p), this;
        }, currentPage: function() {
          return this._sequenceIndex;
        }, goToPage: function(d) {
          return this.tileSources && d >= 0 && d < this.tileSources.length && (this._sequenceIndex = d, this._updateSequenceButtons(d), this.open(this.tileSources[d]), this.referenceStrip && this.referenceStrip.setFocus(d), this.raiseEvent("page", { page: d })), this;
        }, addOverlay: function(d, w, S, L) {
          var I;
          if (e.isPlainObject(d) ? I = d : I = { element: d, location: w, placement: S, onDraw: L }, d = e.getElement(I.element), a(this.currentOverlays, d) >= 0) return this;
          var V = l(this, I);
          return this.currentOverlays.push(V), V.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", { element: d, location: I.location, placement: I.placement }), this;
        }, updateOverlay: function(d, w, S) {
          var L;
          return d = e.getElement(d), L = a(this.currentOverlays, d), L >= 0 && (this.currentOverlays[L].update(w, S), n[this.hash].forceRedraw = true, this.raiseEvent("update-overlay", { element: d, location: w, placement: S })), this;
        }, removeOverlay: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 && (this.currentOverlays[w].destroy(), this.currentOverlays.splice(w, 1), n[this.hash].forceRedraw = true, this.raiseEvent("remove-overlay", { element: d })), this;
        }, clearOverlays: function() {
          for (; this.currentOverlays.length > 0; ) this.currentOverlays.pop().destroy();
          return n[this.hash].forceRedraw = true, this.raiseEvent("clear-overlay", {}), this;
        }, getOverlayById: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 ? this.currentOverlays[w] : null;
        }, _updateSequenceButtons: function(d) {
          this.nextButton && (!this.tileSources || this.tileSources.length - 1 === d ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (d > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
        }, _showMessage: function(d) {
          this._hideMessage();
          var w = e.makeNeutralElement("div");
          w.appendChild(document.createTextNode(d)), this.messageDiv = e.makeCenteredNode(w), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
        }, _hideMessage: function() {
          var d = this.messageDiv;
          d && (d.parentNode.removeChild(d), delete this.messageDiv);
        }, gestureSettingsByDeviceType: function(d) {
          switch (d) {
            case "mouse":
              return this.gestureSettingsMouse;
            case "touch":
              return this.gestureSettingsTouch;
            case "pen":
              return this.gestureSettingsPen;
            default:
              return this.gestureSettingsUnknown;
          }
        }, _drawOverlays: function() {
          var d, w = this.currentOverlays.length;
          for (d = 0; d < w; d++) this.currentOverlays[d].drawHTML(this.overlaysContainer, this.viewport);
        }, _cancelPendingImages: function() {
          this._loadQueue = [];
        }, removeReferenceStrip: function() {
          this.showReferenceStrip = false, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
        }, addReferenceStrip: function() {
          if (this.showReferenceStrip = true, this.sequenceMode) {
            if (this.referenceStrip) return;
            this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({ id: this.referenceStripElement, position: this.referenceStripPosition, sizeRatio: this.referenceStripSizeRatio, scroll: this.referenceStripScroll, height: this.referenceStripHeight, width: this.referenceStripWidth, tileSources: this.tileSources, prefixUrl: this.prefixUrl, viewer: this }), this.referenceStrip.setFocus(this._sequenceIndex));
          } else e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
        }, _addUpdatePixelDensityRatioEvent: function() {
          this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _removeUpdatePixelDensityRatioEvent: function() {
          e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _updatePixelDensityRatio: function() {
          var d = e.pixelDensityRatio, w = e.getCurrentPixelDensityRatio();
          d !== w && (e.pixelDensityRatio = w, this.forceResize());
        }, goToPreviousPage: function() {
          var d = this._sequenceIndex - 1;
          this.navPrevNextWrap && d < 0 && (d += this.tileSources.length), this.goToPage(d);
        }, goToNextPage: function() {
          var d = this._sequenceIndex + 1;
          this.navPrevNextWrap && d >= this.tileSources.length && (d = 0), this.goToPage(d);
        }, isAnimating: function() {
          return n[this.hash].animating;
        } });
        function s(d) {
          return d = e.getElement(d), new e.Point(d.clientWidth === 0 ? 1 : d.clientWidth, d.clientHeight === 0 ? 1 : d.clientHeight);
        }
        function o(d, w, S, L, I) {
          var V = d;
          if (e.type(w) === "string") {
            if (w.match(/^\s*<.*>\s*$/)) w = e.parseXml(w);
            else if (w.match(/^\s*[{[].*[}\]]\s*$/)) try {
              var M = e.parseJSON(w);
              w = M;
            } catch {
            }
          }
          function W(Z, se) {
            Z.ready ? L(Z) : (Z.addHandler("ready", function() {
              L(Z);
            }), Z.addHandler("open-failed", function(X) {
              I({ message: X.message, source: se });
            }));
          }
          setTimeout(function() {
            if (e.type(w) === "string") w = new e.TileSource({ url: w, crossOriginPolicy: S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : d.crossOriginPolicy, ajaxWithCredentials: d.ajaxWithCredentials, ajaxHeaders: S.ajaxHeaders ? S.ajaxHeaders : d.ajaxHeaders, splitHashDataForPost: d.splitHashDataForPost, success: function(oe) {
              L(oe.tileSource);
            } }), w.addHandler("open-failed", function(oe) {
              I(oe);
            });
            else if (e.isPlainObject(w) || w.nodeType) if (w.crossOriginPolicy === void 0 && (S.crossOriginPolicy !== void 0 || d.crossOriginPolicy !== void 0) && (w.crossOriginPolicy = S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : d.crossOriginPolicy), w.ajaxWithCredentials === void 0 && (w.ajaxWithCredentials = d.ajaxWithCredentials), e.isFunction(w.getTileUrl)) {
              var Z = new e.TileSource(w);
              Z.getTileUrl = w.getTileUrl, L(Z);
            } else {
              var se = e.TileSource.determineType(V, w);
              if (!se) {
                I({ message: "Unable to load TileSource", source: w });
                return;
              }
              var X = se.prototype.configure.apply(V, [w]);
              W(new se(X), w);
            }
            else W(w, w);
          });
        }
        function l(d, w) {
          if (w instanceof e.Overlay) return w;
          var S = null;
          if (w.element) S = e.getElement(w.element);
          else {
            var L = w.id ? w.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
            S = e.getElement(w.id), S || (S = document.createElement("a"), S.href = "#/overlay/" + L), S.id = L, e.addClass(S, w.className ? w.className : "openseadragon-overlay");
          }
          var I = w.location, V = w.width, M = w.height;
          if (!I) {
            var W = w.x, Z = w.y;
            if (w.px !== void 0) {
              var se = d.viewport.imageToViewportRectangle(new e.Rect(w.px, w.py, V || 0, M || 0));
              W = se.x, Z = se.y, V = V !== void 0 ? se.width : void 0, M = M !== void 0 ? se.height : void 0;
            }
            I = new e.Point(W, Z);
          }
          var X = w.placement;
          return X && e.type(X) === "string" && (X = e.Placement[w.placement.toUpperCase()]), new e.Overlay({ element: S, location: I, placement: X, onDraw: w.onDraw, checkResize: w.checkResize, width: V, height: M, rotationMode: w.rotationMode });
        }
        function a(d, w) {
          var S;
          for (S = d.length - 1; S >= 0; S--) if (d[S].element === w) return S;
          return -1;
        }
        function u(d, w) {
          return e.requestAnimationFrame(function() {
            w(d);
          });
        }
        function c(d) {
          e.requestAnimationFrame(function() {
            f(d);
          });
        }
        function h(d) {
          d.autoHideControls && (d.controlsShouldFade = true, d.controlsFadeBeginTime = e.now() + d.controlsFadeDelay, window.setTimeout(function() {
            c(d);
          }, d.controlsFadeDelay));
        }
        function f(d) {
          var w, S, L, I;
          if (d.controlsShouldFade) {
            for (w = e.now(), S = w - d.controlsFadeBeginTime, L = 1 - S / d.controlsFadeLength, L = Math.min(1, L), L = Math.max(0, L), I = d.controls.length - 1; I >= 0; I--) d.controls[I].autoFade && d.controls[I].setOpacity(L);
            L > 0 && c(d);
          }
        }
        function m(d) {
          var w;
          for (d.controlsShouldFade = false, w = d.controls.length - 1; w >= 0; w--) d.controls[w].setOpacity(1);
        }
        function v() {
          m(this);
        }
        function y() {
          h(this);
        }
        function x(d) {
          var w = { tracker: d.eventSource, position: d.position, originalEvent: d.originalEvent, preventDefault: d.preventDefault };
          this.raiseEvent("canvas-contextmenu", w), d.preventDefault = w.preventDefault;
        }
        function T(d) {
          var w = { originalEvent: d.originalEvent, preventDefaultAction: false, preventVerticalPan: d.preventVerticalPan || !this.panVertical, preventHorizontalPan: d.preventHorizontalPan || !this.panHorizontal };
          if (this.raiseEvent("canvas-key", w), !w.preventDefaultAction && !d.ctrl && !d.alt && !d.meta) switch (d.keyCode) {
            case 38:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 40:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 37:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 39:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 187:
              this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 189:
              this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 48:
              this.viewport.goHome(), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 87:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 83:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 65:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 68:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 82:
              d.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 70:
              this.viewport.toggleFlip(), d.preventDefault = true;
              break;
            case 74:
              this.goToPreviousPage();
              break;
            case 75:
              this.goToNextPage();
              break;
            default:
              d.preventDefault = false;
              break;
          }
          else d.preventDefault = false;
        }
        function C(d) {
          var w = { originalEvent: d.originalEvent };
          this.raiseEvent("canvas-key-press", w);
        }
        function H(d) {
          var w, S = document.activeElement === this.canvas;
          S || this.canvas.focus(), this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x);
          var L = { tracker: d.eventSource, position: d.position, quick: d.quick, shift: d.shift, originalEvent: d.originalEvent, originalTarget: d.originalTarget, preventDefaultAction: false };
          this.raiseEvent("canvas-click", L), !L.preventDefaultAction && this.viewport && d.quick && (w = this.gestureSettingsByDeviceType(d.pointerType), w.clickToZoom === true && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()), w.dblClickDragToZoom && (n[this.hash].draggingToZoom === true ? (n[this.hash].lastClickTime = null, n[this.hash].draggingToZoom = false) : n[this.hash].lastClickTime = e.now()));
        }
        function k(d) {
          var w, S = { tracker: d.eventSource, position: d.position, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          this.raiseEvent("canvas-double-click", S), !S.preventDefaultAction && this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickToZoom && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()));
        }
        function N(d) {
          var w, S = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, delta: d.delta, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag", S), w = this.gestureSettingsByDeviceType(d.pointerType), !S.preventDefaultAction && this.viewport) {
            if (w.dblClickDragToZoom && n[this.hash].draggingToZoom) {
              var L = Math.pow(this.zoomPerDblClickDrag, d.delta.y / 50);
              this.viewport.zoomBy(L);
            } else if (w.dragToPan && !n[this.hash].draggingToZoom) {
              if (this.panHorizontal || (d.delta.x = 0), this.panVertical || (d.delta.y = 0), this.viewport.flipped && (d.delta.x = -d.delta.x), this.constrainDuringPan) {
                var I = this.viewport.deltaPointsFromPixels(d.delta.negate());
                this.viewport.centerSpringX.target.value += I.x, this.viewport.centerSpringY.target.value += I.y;
                var V = this.viewport.getConstrainedBounds();
                this.viewport.centerSpringX.target.value -= I.x, this.viewport.centerSpringY.target.value -= I.y, V.xConstrained && (d.delta.x = 0), V.yConstrained && (d.delta.y = 0);
              }
              this.viewport.panBy(this.viewport.deltaPointsFromPixels(d.delta.negate()), w.flickEnabled && !this.constrainDuringPan);
            }
          }
        }
        function Y(d) {
          var w, S = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag-end", S), w = this.gestureSettingsByDeviceType(d.pointerType), !S.preventDefaultAction && this.viewport) {
            if (!n[this.hash].draggingToZoom && w.dragToPan && w.flickEnabled && d.speed >= w.flickMinSpeed) {
              var L = 0;
              this.panHorizontal && (L = w.flickMomentum * d.speed * Math.cos(d.direction));
              var I = 0;
              this.panVertical && (I = w.flickMomentum * d.speed * Math.sin(d.direction));
              var V = this.viewport.pixelFromPoint(this.viewport.getCenter(true)), M = this.viewport.pointFromPixel(new e.Point(V.x - L, V.y - I));
              this.viewport.panTo(M, false);
            }
            this.viewport.applyConstraints();
          }
          w.dblClickDragToZoom && n[this.hash].draggingToZoom === true && (n[this.hash].draggingToZoom = false);
        }
        function K(d) {
          this.raiseEvent("canvas-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function q(d) {
          this.raiseEvent("canvas-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function ee(d) {
          var w;
          if (this.raiseEvent("canvas-press", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent }), w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickDragToZoom) {
            var S = n[this.hash].lastClickTime, L = e.now();
            if (S === null) return;
            L - S < this.dblClickTimeThreshold && (n[this.hash].draggingToZoom = true), n[this.hash].lastClickTime = null;
          }
        }
        function ce(d) {
          this.raiseEvent("canvas-release", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent });
        }
        function te(d) {
          this.raiseEvent("canvas-nonprimary-press", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function j(d) {
          this.raiseEvent("canvas-nonprimary-release", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function ne(d) {
          var w, S, L, I, V = { tracker: d.eventSource, pointerType: d.pointerType, gesturePoints: d.gesturePoints, lastCenter: d.lastCenter, center: d.center, lastDistance: d.lastDistance, distance: d.distance, shift: d.shift, originalEvent: d.originalEvent, preventDefaultPanAction: false, preventDefaultZoomAction: false, preventDefaultRotateAction: false };
          if (this.raiseEvent("canvas-pinch", V), this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.pinchToZoom && (!V.preventDefaultPanAction || !V.preventDefaultZoomAction) && (S = this.viewport.pointFromPixel(d.center, true), w.zoomToRefPoint && !V.preventDefaultPanAction && (L = this.viewport.pointFromPixel(d.lastCenter, true), I = L.minus(S), this.panHorizontal || (I.x = 0), this.panVertical || (I.y = 0), this.viewport.panBy(I, true)), V.preventDefaultZoomAction || this.viewport.zoomBy(d.distance / d.lastDistance, S, true), this.viewport.applyConstraints()), w.pinchRotate && !V.preventDefaultRotateAction)) {
            var M = Math.atan2(d.gesturePoints[0].currentPos.y - d.gesturePoints[1].currentPos.y, d.gesturePoints[0].currentPos.x - d.gesturePoints[1].currentPos.x), W = Math.atan2(d.gesturePoints[0].lastPos.y - d.gesturePoints[1].lastPos.y, d.gesturePoints[0].lastPos.x - d.gesturePoints[1].lastPos.x);
            S = this.viewport.pointFromPixel(d.center, true), this.viewport.rotateTo(this.viewport.getRotation(true) + (M - W) * (180 / Math.PI), S, true);
          }
        }
        function he(d) {
          this.raiseEvent("canvas-focus", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function ye(d) {
          this.raiseEvent("canvas-blur", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function me(d) {
          var w, S, L, I, V;
          I = e.now(), V = I - this._lastScrollTime, V > this.minScrollDeltaTime ? (this._lastScrollTime = I, w = { tracker: d.eventSource, position: d.position, scroll: d.scroll, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false, preventDefault: true }, this.raiseEvent("canvas-scroll", w), !w.preventDefaultAction && this.viewport && (this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x), S = this.gestureSettingsByDeviceType(d.pointerType), S.scrollToZoom && (L = Math.pow(this.zoomPerScroll, d.scroll), this.viewport.zoomBy(L, S.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints())), d.preventDefault = w.preventDefault) : d.preventDefault = true;
        }
        function pe(d) {
          n[this.hash].mouseInside = true, m(this), this.raiseEvent("container-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function ae(d) {
          d.pointers < 1 && (n[this.hash].mouseInside = false, n[this.hash].animating || h(this)), this.raiseEvent("container-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function Ae(d) {
          Qe(d), d.isOpen() ? d._updateRequestId = u(d, Ae) : d._updateRequestId = false;
        }
        function Re(d, w) {
          var S = d.viewport, L = S.getZoom(), I = S.getCenter();
          S.resize(w, d.preserveImageSizeOnResize), S.panTo(I, true);
          var V;
          if (d.preserveImageSizeOnResize) V = n[d.hash].prevContainerSize.x / w.x;
          else {
            var M = new e.Point(0, 0), W = new e.Point(n[d.hash].prevContainerSize.x, n[d.hash].prevContainerSize.y).distanceTo(M), Z = new e.Point(w.x, w.y).distanceTo(M);
            V = Z / W * n[d.hash].prevContainerSize.x / w.x;
          }
          S.zoomTo(L * V, null, true), n[d.hash].prevContainerSize = w, n[d.hash].forceRedraw = true, n[d.hash].needsResize = false, n[d.hash].forceResize = false;
        }
        function Qe(d) {
          if (!(d._opening || !n[d.hash])) {
            if (d.autoResize || n[d.hash].forceResize) {
              var w;
              if (d._autoResizePolling) {
                w = s(d.container);
                var S = n[d.hash].prevContainerSize;
                w.equals(S) || (n[d.hash].needsResize = true);
              }
              n[d.hash].needsResize && Re(d, w || s(d.container));
            }
            var L = d.viewport.update(), I = d.world.update(L) || L;
            L && d.raiseEvent("viewport-change"), d.referenceStrip && (I = d.referenceStrip.update(d.viewport) || I);
            var V = n[d.hash].animating;
            !V && I && (d.raiseEvent("animation-start"), m(d));
            var M = V && !I;
            M && (n[d.hash].animating = false), (I || M || n[d.hash].forceRedraw || d.world.needsDraw()) && (je(d), d._drawOverlays(), d.navigator && d.navigator.update(d.viewport), n[d.hash].forceRedraw = false, I && d.raiseEvent("animation")), M && (d.raiseEvent("animation-finish"), n[d.hash].mouseInside || h(d)), n[d.hash].animating = I;
          }
        }
        function je(d) {
          d.imageLoader.clear(), d.world.draw(), d.raiseEvent("update-viewport", {});
        }
        function ge(d, w) {
          return d ? d + w : w;
        }
        function Nt() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = this.zoomPerSecond, n[this.hash].zooming = true, $e(this);
        }
        function Ut() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = 1 / this.zoomPerSecond, n[this.hash].zooming = true, $e(this);
        }
        function nt() {
          n[this.hash].zooming = false;
        }
        function $e(d) {
          e.requestAnimationFrame(e.delegate(d, bt));
        }
        function bt() {
          var d, w, S;
          n[this.hash].zooming && this.viewport && (d = e.now(), w = d - n[this.hash].lastZoomTime, S = Math.pow(n[this.hash].zoomFactor, w / 1e3), this.viewport.zoomBy(S), this.viewport.applyConstraints(), n[this.hash].lastZoomTime = d, $e(this));
        }
        function Wt() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints());
        }
        function st() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints());
        }
        function ii() {
          this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
        }
        function P() {
          this.viewport && this.viewport.goHome();
        }
        function D() {
          this.isFullPage() && !e.isFullScreen() ? this.setFullPage(false) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
        }
        function F() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d += this.rotationIncrement : d -= this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function U() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d -= this.rotationIncrement : d += this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function z() {
          this.viewport.toggleFlip();
        }
        e.determineDrawer = function(d) {
          for (let w in i) {
            const S = i[w], L = S.prototype;
            if (L && L instanceof i.DrawerBase && e.isFunction(L.getType) && L.getType.call(S) === d) return S;
          }
          return null;
        };
      })(i), (function(e) {
        e.Navigator = function(u) {
          var c = u.viewer, h = this, f, m;
          u.element || u.id ? (u.element ? (u.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."), u.element.id ? u.id = u.element.id : u.id = "navigator-" + e.now(), this.element = u.element) : this.element = document.getElementById(u.id), u.controlOptions = { anchor: e.ControlAnchor.NONE, attachToViewer: false, autoFade: false }) : (u.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), u.controlOptions = { anchor: e.ControlAnchor.TOP_RIGHT, attachToViewer: true, autoFade: u.autoFade }, u.position && (u.position === "BOTTOM_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : u.position === "BOTTOM_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : u.position === "TOP_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : u.position === "TOP_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : u.position === "ABSOLUTE" && (u.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, u.controlOptions.top = u.top, u.controlOptions.left = u.left, u.controlOptions.height = u.height, u.controlOptions.width = u.width))), this.element.id = u.id, this.element.className += " navigator", u = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio }, u, { element: this.element, tabIndex: -1, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: u.animationTime, autoResize: false, minZoomImageRatio: 1, background: u.background, opacity: u.opacity, borderColor: u.borderColor, displayRegionColor: u.displayRegionColor }), u.minPixelRatio = this.minPixelRatio = c.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), u.controlOptions.anchor !== e.ControlAnchor.NONE && (function(x, T) {
            x.margin = "0px", x.border = T + "px solid " + u.borderColor, x.padding = "0px", x.background = u.background, x.opacity = u.opacity, x.overflow = "hidden";
          })(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", (function(x, T) {
            x.position = "relative", x.top = "0px", x.left = "0px", x.fontSize = "0px", x.overflow = "hidden", x.border = T + "px solid " + u.displayRegionColor, x.margin = "0px", x.padding = "0px", x.background = "transparent", x.float = "left", x.cssFloat = "left", x.zIndex = 999999999, x.cursor = "default", x.boxSizing = "content-box";
          })(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), c.addControl(this.element, u.controlOptions), this._resizeWithViewer = u.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && u.controlOptions.anchor !== e.ControlAnchor.NONE, u.width && u.height ? (this.setWidth(u.width), this.setHeight(u.height)) : this._resizeWithViewer && (f = e.getElementSize(c.element), this.element.style.height = Math.round(f.y * u.sizeRatio) + "px", this.element.style.width = Math.round(f.x * u.sizeRatio) + "px", this.oldViewerSize = f, m = e.getElementSize(this.element), this.elementArea = m.x * m.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [u]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
          function v(x, T) {
            l(h.displayRegionContainer, x), l(h.displayRegion, -x), h.viewport.setRotation(x, T);
          }
          if (u.navigatorRotate) {
            var y = u.viewer.viewport ? u.viewer.viewport.getRotation() : u.viewer.degrees || 0;
            v(y, true), u.viewer.addHandler("rotate", function(x) {
              v(x.degrees, x.immediately);
            });
          }
          this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({ userData: "Navigator.innerTracker", element: this.element, dragHandler: e.delegate(this, r), clickHandler: e.delegate(this, n), releaseHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), preProcessEventHandler: function(x) {
            x.eventType === "wheel" && (x.preventDefault = true);
          } }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
            h.viewport && h.viewport.goHome(true);
          }), c.world.addHandler("item-index-change", function(x) {
            window.setTimeout(function() {
              var T = h.world.getItemAt(x.previousIndex);
              h.world.setItemIndex(T, x.newIndex);
            }, 1);
          }), c.world.addHandler("remove-item", function(x) {
            var T = x.item, C = h._getMatchingItem(T);
            C && h.world.removeItem(C);
          }), this.update(c.viewport);
        }, e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, { updateSize: function() {
          if (this.viewport) {
            var u = new e.Point(this.container.clientWidth === 0 ? 1 : this.container.clientWidth, this.container.clientHeight === 0 ? 1 : this.container.clientHeight);
            u.equals(this.oldContainerSize) || (this.viewport.resize(u, true), this.viewport.goHome(true), this.oldContainerSize = u, this.world.update(), this.world.draw(), this.update(this.viewer.viewport));
          }
        }, setWidth: function(u) {
          this.width = u, this.element.style.width = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setHeight: function(u) {
          this.height = u, this.element.style.height = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setFlip: function(u) {
          return this.viewport.setFlip(u), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
        }, setDisplayTransform: function(u) {
          a(this.canvas, u), a(this.element, u);
        }, update: function(u) {
          var c, h, f, m, v, y;
          if (u || (u = this.viewer.viewport), c = e.getElementSize(this.viewer.element), this._resizeWithViewer && c.x && c.y && !c.equals(this.oldViewerSize) && (this.oldViewerSize = c, this.maintainSizeRatio || !this.elementArea ? (h = c.x * this.sizeRatio, f = c.y * this.sizeRatio) : (h = Math.sqrt(this.elementArea * (c.x / c.y)), f = this.elementArea / h), this.element.style.width = Math.round(h) + "px", this.element.style.height = Math.round(f) + "px", this.elementArea || (this.elementArea = h * f), this.updateSize()), u && this.viewport) {
            if (m = u.getBoundsNoRotate(true), v = this.viewport.pixelFromPointNoRotate(m.getTopLeft(), false), y = this.viewport.pixelFromPointNoRotate(m.getBottomRight(), false).minus(this.totalBorderWidths), !this.navigatorRotate) {
              var x = u.getRotation(true);
              l(this.displayRegion, -x);
            }
            var T = this.displayRegion.style;
            T.display = this.world.getItemCount() ? "block" : "none", T.top = v.y.toFixed(2) + "px", T.left = v.x.toFixed(2) + "px";
            var C = y.x - v.x, H = y.y - v.y;
            T.width = Math.round(Math.max(C, 0)) + "px", T.height = Math.round(Math.max(H, 0)) + "px";
          }
        }, addTiledImage: function(u) {
          var c = this, h = u.originalTiledImage;
          delete u.original;
          var f = e.extend({}, u, { success: function(m) {
            var v = m.item;
            v._originalForNavigator = h, c._matchBounds(v, h, true), c._matchOpacity(v, h), c._matchCompositeOperation(v, h);
            function y() {
              c._matchBounds(v, h);
            }
            function x() {
              c._matchOpacity(v, h);
            }
            function T() {
              c._matchCompositeOperation(v, h);
            }
            h.addHandler("bounds-change", y), h.addHandler("clip-change", y), h.addHandler("opacity-change", x), h.addHandler("composite-operation-change", T);
          } });
          return e.Viewer.prototype.addTiledImage.apply(this, [f]);
        }, destroy: function() {
          return e.Viewer.prototype.destroy.apply(this);
        }, _getMatchingItem: function(u) {
          for (var c = this.world.getItemCount(), h, f = 0; f < c; f++) if (h = this.world.getItemAt(f), h._originalForNavigator === u) return h;
          return null;
        }, _matchBounds: function(u, c, h) {
          var f = c.getBoundsNoRotate();
          u.setPosition(f.getTopLeft(), h), u.setWidth(f.width, h), u.setRotation(c.getRotation(), h), u.setClip(c.getClip()), u.setFlip(c.getFlip());
        }, _matchOpacity: function(u, c) {
          u.setOpacity(c.opacity);
        }, _matchCompositeOperation: function(u, c) {
          u.setCompositeOperation(c.compositeOperation);
        } });
        function n(u) {
          var c = { tracker: u.eventSource, position: u.position, quick: u.quick, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          if (this.viewer.raiseEvent("navigator-click", c), !c.preventDefaultAction && u.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
            this.viewer.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x);
            var h = this.viewport.pointFromPixel(u.position);
            this.panVertical ? this.panHorizontal || (h.x = this.viewer.viewport.getCenter(true).x) : h.y = this.viewer.viewport.getCenter(true).y, this.viewer.viewport.panTo(h), this.viewer.viewport.applyConstraints();
          }
        }
        function r(u) {
          var c = { tracker: u.eventSource, position: u.position, delta: u.delta, speed: u.speed, direction: u.direction, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          this.viewer.raiseEvent("navigator-drag", c), !c.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (u.delta.x = 0), this.panVertical || (u.delta.y = 0), this.viewer.viewport.flipped && (u.delta.x = -u.delta.x), this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(u.delta)), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
        }
        function s(u) {
          u.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
        }
        function o(u) {
          var c = { tracker: u.eventSource, position: u.position, scroll: u.scroll, shift: u.shift, originalEvent: u.originalEvent, preventDefault: u.preventDefault };
          this.viewer.raiseEvent("navigator-scroll", c), u.preventDefault = c.preventDefault;
        }
        function l(u, c) {
          a(u, "rotate(" + c + "deg)");
        }
        function a(u, c) {
          u.style.webkitTransform = c, u.style.mozTransform = c, u.style.msTransform = c, u.style.oTransform = c, u.style.transform = c;
        }
      })(i), (function(e) {
        var n = { Errors: { Dzc: "Sorry, we don't support Deep Zoom Collections!", Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.", Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.", Status: "This space unintentionally left blank ({0} {1}).", OpenFailed: "Unable to open {0}: {1}" }, Tooltips: { FullPage: "Toggle full page", Home: "Go home", ZoomIn: "Zoom in", ZoomOut: "Zoom out", NextPage: "Next page", PreviousPage: "Previous page", RotateLeft: "Rotate left", RotateRight: "Rotate right", Flip: "Flip Horizontally" } };
        e.extend(e, { getString: function(r) {
          var s = r.split("."), o = null, l = arguments, a = n, u;
          for (u = 0; u < s.length - 1; u++) a = a[s[u]] || {};
          return o = a[s[u]], typeof o != "string" && (e.console.error("Untranslated source string:", r), o = ""), o.replace(/\{\d+\}/g, function(c) {
            var h = parseInt(c.match(/\d+/), 10) + 1;
            return h < l.length ? l[h] : "";
          });
        }, setString: function(r, s) {
          var o = r.split("."), l = n, a;
          for (a = 0; a < o.length - 1; a++) l[o[a]] || (l[o[a]] = {}), l = l[o[a]];
          l[o[a]] = s;
        } });
      })(i), (function(e) {
        e.Point = function(n, r) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0;
        }, e.Point.prototype = { clone: function() {
          return new e.Point(this.x, this.y);
        }, plus: function(n) {
          return new e.Point(this.x + n.x, this.y + n.y);
        }, minus: function(n) {
          return new e.Point(this.x - n.x, this.y - n.y);
        }, times: function(n) {
          return new e.Point(this.x * n, this.y * n);
        }, divide: function(n) {
          return new e.Point(this.x / n, this.y / n);
        }, negate: function() {
          return new e.Point(-this.x, -this.y);
        }, distanceTo: function(n) {
          return Math.sqrt(Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2));
        }, squaredDistanceTo: function(n) {
          return Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2);
        }, apply: function(n) {
          return new e.Point(n(this.x), n(this.y));
        }, equals: function(n) {
          return n instanceof e.Point && this.x === n.x && this.y === n.y;
        }, rotate: function(n, r) {
          r = r || new e.Point(0, 0);
          var s, o;
          if (n % 90 === 0) {
            var l = e.positiveModulo(n, 360);
            switch (l) {
              case 0:
                s = 1, o = 0;
                break;
              case 90:
                s = 0, o = 1;
                break;
              case 180:
                s = -1, o = 0;
                break;
              case 270:
                s = 0, o = -1;
                break;
            }
          } else {
            var a = n * Math.PI / 180;
            s = Math.cos(a), o = Math.sin(a);
          }
          var u = s * (this.x - r.x) - o * (this.y - r.y) + r.x, c = o * (this.x - r.x) + s * (this.y - r.y) + r.y;
          return new e.Point(u, c);
        }, toString: function() {
          return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
        } };
      })(i), (function(e) {
        e.TileSource = function(r, s, o, l, a, u) {
          var c = this, h = arguments, f, m;
          if (e.isPlainObject(r) ? f = r : f = { width: h[0], height: h[1], tileSize: h[2], tileOverlap: h[3], minLevel: h[4], maxLevel: h[5] }, e.EventSource.call(this), e.extend(true, this, f), !this.success) {
            for (m = 0; m < arguments.length; m++) if (e.isFunction(arguments[m])) {
              this.success = arguments[m];
              break;
            }
          }
          this.success && this.addHandler("ready", function(v) {
            c.success(v);
          }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = false, this.getImageInfo(this.url)) : (this.ready = true, this.aspectRatio = f.width && f.height ? f.width / f.height : 1, this.dimensions = new e.Point(f.width, f.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = f.tileOverlap ? f.tileOverlap : 0, this.minLevel = f.minLevel ? f.minLevel : 0, this.maxLevel = f.maxLevel !== void 0 && f.maxLevel !== null ? f.maxLevel : f.width && f.height ? Math.ceil(Math.log(Math.max(f.width, f.height)) / Math.log(2)) : 0, this.success && e.isFunction(this.success) && this.success(this));
        }, e.TileSource.prototype = { getTileSize: function(r) {
          return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth;
        }, getTileWidth: function(r) {
          return this._tileWidth ? this._tileWidth : this.getTileSize(r);
        }, getTileHeight: function(r) {
          return this._tileHeight ? this._tileHeight : this.getTileSize(r);
        }, setMaxLevel: function(r) {
          this.maxLevel = r, this._memoizeLevelScale();
        }, getLevelScale: function(r) {
          return this._memoizeLevelScale(), this.getLevelScale(r);
        }, _memoizeLevelScale: function() {
          var r = {}, s;
          for (s = 0; s <= this.maxLevel; s++) r[s] = 1 / Math.pow(2, this.maxLevel - s);
          this.getLevelScale = function(o) {
            return r[o];
          };
        }, getNumTiles: function(r) {
          var s = this.getLevelScale(r), o = Math.ceil(s * this.dimensions.x / this.getTileWidth(r)), l = Math.ceil(s * this.dimensions.y / this.getTileHeight(r));
          return new e.Point(o, l);
        }, getPixelRatio: function(r) {
          var s = this.dimensions.times(this.getLevelScale(r)), o = 1 / s.x * e.pixelDensityRatio, l = 1 / s.y * e.pixelDensityRatio;
          return new e.Point(o, l);
        }, getClosestLevel: function() {
          var r, s;
          for (r = this.minLevel + 1; r <= this.maxLevel && (s = this.getNumTiles(r), !(s.x > 1 || s.y > 1)); r++) ;
          return r - 1;
        }, getTileAtPoint: function(r, s) {
          var o = s.x >= 0 && s.x <= 1 && s.y >= 0 && s.y <= 1 / this.aspectRatio;
          e.console.assert(o, "[TileSource.getTileAtPoint] must be called with a valid point.");
          var l = this.dimensions.x * this.getLevelScale(r), a = s.x * l, u = s.y * l, c = Math.floor(a / this.getTileWidth(r)), h = Math.floor(u / this.getTileHeight(r));
          s.x >= 1 && (c = this.getNumTiles(r).x - 1);
          var f = 1e-15;
          return s.y >= 1 / this.aspectRatio - f && (h = this.getNumTiles(r).y - 1), new e.Point(c, h);
        }, getTileBounds: function(r, s, o, l) {
          var a = this.dimensions.times(this.getLevelScale(r)), u = this.getTileWidth(r), c = this.getTileHeight(r), h = s === 0 ? 0 : u * s - this.tileOverlap, f = o === 0 ? 0 : c * o - this.tileOverlap, m = u + (s === 0 ? 1 : 2) * this.tileOverlap, v = c + (o === 0 ? 1 : 2) * this.tileOverlap, y = 1 / a.x;
          return m = Math.min(m, a.x - h), v = Math.min(v, a.y - f), l ? new e.Rect(0, 0, m, v) : new e.Rect(h * y, f * y, m * y, v * y);
        }, getImageInfo: function(r) {
          var s = this, o, l, a, u, c, h, f;
          r && (c = r.split("/"), h = c[c.length - 1], f = h.lastIndexOf("."), f > -1 && (c[c.length - 1] = h.slice(0, f)));
          var m = null;
          if (this.splitHashDataForPost) {
            var v = r.indexOf("#");
            v !== -1 && (m = r.substring(v + 1), r = r.substr(0, v));
          }
          l = function(y) {
            typeof y == "string" && (y = e.parseXml(y));
            var x = e.TileSource.determineType(s, y, r);
            if (!x) {
              s.raiseEvent("open-failed", { message: "Unable to load TileSource", source: r });
              return;
            }
            u = x.prototype.configure.apply(s, [y, r, m]), u.ajaxWithCredentials === void 0 && (u.ajaxWithCredentials = s.ajaxWithCredentials), a = new x(u), s.ready = true, s.raiseEvent("ready", { tileSource: a });
          }, r.match(/\.js$/) ? (o = r.split("/").pop().replace(".js", ""), e.jsonp({ url: r, async: false, callbackName: o, callback: l })) : e.makeAjaxRequest({ url: r, postData: m, withCredentials: this.ajaxWithCredentials, headers: this.ajaxHeaders, success: function(y) {
            var x = n(y);
            l(x);
          }, error: function(y, x) {
            var T;
            try {
              T = "HTTP " + y.status + " attempting to load TileSource: " + r;
            } catch {
              var C;
              typeof x > "u" || !x.toString ? C = "Unknown error" : C = x.toString(), T = C + " attempting to load TileSource: " + r;
            }
            e.console.error(T), s.raiseEvent("open-failed", { message: T, source: r, postData: m });
          } });
        }, supports: function(r, s) {
          return false;
        }, configure: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTileUrl: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTilePostData: function(r, s, o) {
          return null;
        }, getTileAjaxHeaders: function(r, s, o) {
          return {};
        }, getTileHashKey: function(r, s, o, l, a, u) {
          function c(h) {
            return a ? h + "+" + JSON.stringify(a) : h;
          }
          return c(typeof l != "string" ? r + "/" + s + "_" + o : l);
        }, tileExists: function(r, s, o) {
          var l = this.getNumTiles(r);
          return r >= this.minLevel && r <= this.maxLevel && s >= 0 && o >= 0 && s < l.x && o < l.y;
        }, hasTransparency: function(r, s, o, l) {
          return !!r || s.match(".png");
        }, downloadTileStart: function(r) {
          var s = r.userData, o = new Image();
          s.image = o, s.request = null;
          var l = function(a) {
            if (!o) {
              r.finish(null, s.request, "Image load failed: undefined Image instance.");
              return;
            }
            o.onload = o.onerror = o.onabort = null, r.finish(a ? null : o, s.request, a);
          };
          o.onload = function() {
            l();
          }, o.onabort = o.onerror = function() {
            l("Image load aborted.");
          }, r.loadWithAjax ? s.request = e.makeAjaxRequest({ url: r.src, withCredentials: r.ajaxWithCredentials, headers: r.ajaxHeaders, responseType: "arraybuffer", postData: r.postData, success: function(a) {
            var u;
            try {
              u = new window.Blob([a.response]);
            } catch (f) {
              var c = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
              if (f.name === "TypeError" && c) {
                var h = new c();
                h.append(a.response), u = h.getBlob();
              }
            }
            u.size === 0 ? l("Empty image response.") : o.src = (window.URL || window.webkitURL).createObjectURL(u);
          }, error: function(a) {
            l("Image load aborted - XHR error");
          } }) : (r.crossOriginPolicy !== false && (o.crossOrigin = r.crossOriginPolicy), o.src = r.src);
        }, downloadTileAbort: function(r) {
          r.userData.request && r.userData.request.abort();
          var s = r.userData.image;
          r.userData.image && (s.onload = s.onerror = s.onabort = null);
        }, createTileCache: function(r, s, o) {
          r._data = s;
        }, destroyTileCache: function(r) {
          r._data = null, r._renderedContext = null;
        }, getTileCacheData: function(r) {
          return r._data;
        }, getTileCacheDataAsImage: function(r) {
          return r._data;
        }, getTileCacheDataAsContext2D: function(r) {
          if (!r._renderedContext) {
            var s = document.createElement("canvas");
            s.width = r._data.width, s.height = r._data.height, r._renderedContext = s.getContext("2d"), r._renderedContext.drawImage(r._data, 0, 0), r._data = null;
          }
          return r._renderedContext;
        } }, e.extend(true, e.TileSource.prototype, e.EventSource.prototype);
        function n(r) {
          var s = r.responseText, o = r.status, l, a;
          if (r) {
            if (r.status !== 200 && r.status !== 0) throw o = r.status, l = o === 404 ? "Not Found" : r.statusText, new Error(e.getString("Errors.Status", o, l));
          } else throw new Error(e.getString("Errors.Security"));
          if (s.match(/^\s*<.*/)) try {
            a = r.responseXML && r.responseXML.documentElement ? r.responseXML : e.parseXml(s);
          } catch {
            a = r.responseText;
          }
          else if (s.match(/\s*[{[].*/)) try {
            a = e.parseJSON(s);
          } catch {
            a = s;
          }
          else a = s;
          return a;
        }
        e.TileSource.determineType = function(r, s, o) {
          var l;
          for (l in i) if (l.match(/.+TileSource$/) && e.isFunction(i[l]) && e.isFunction(i[l].prototype.supports) && i[l].prototype.supports.call(r, s, o)) return i[l];
          return e.console.error("No TileSource was able to open %s %s", o, s), null;
        };
      })(i), (function(e) {
        e.DziTileSource = function(s, o, l, a, u, c, h, f, m) {
          var v, y, x, T;
          if (e.isPlainObject(s) ? T = s : T = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4], fileFormat: arguments[5], displayRects: arguments[6], minLevel: arguments[7], maxLevel: arguments[8] }, this._levelRects = {}, this.tilesUrl = T.tilesUrl, this.fileFormat = T.fileFormat, this.displayRects = T.displayRects, this.displayRects) for (v = this.displayRects.length - 1; v >= 0; v--) for (y = this.displayRects[v], x = y.minLevel; x <= y.maxLevel; x++) this._levelRects[x] || (this._levelRects[x] = []), this._levelRects[x].push(y);
          e.TileSource.apply(this, [T]);
        }, e.extend(e.DziTileSource.prototype, e.TileSource.prototype, { supports: function(s, o) {
          var l;
          return s.Image ? l = s.Image.xmlns : s.documentElement && (s.documentElement.localName === "Image" || s.documentElement.tagName === "Image") && (l = s.documentElement.namespaceURI), l = (l || "").toLowerCase(), l.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || l.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
        }, configure: function(s, o, l) {
          var a;
          return e.isPlainObject(s) ? a = r(this, s) : a = n(this, s), o && !a.tilesUrl && (a.tilesUrl = o.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, "$1_files/"), o.search(/\.(dzi|xml|js)\?/) !== -1 ? a.queryParams = o.match(/\?.*/) : a.queryParams = ""), a;
        }, getTileUrl: function(s, o, l) {
          return [this.tilesUrl, s, "/", o, "_", l, ".", this.fileFormat, this.queryParams].join("");
        }, tileExists: function(s, o, l) {
          var a = this._levelRects[s], u, c, h, f, m, v, y;
          if (this.minLevel && s < this.minLevel || this.maxLevel && s > this.maxLevel) return false;
          if (!a || !a.length) return true;
          for (y = a.length - 1; y >= 0; y--) if (u = a[y], !(s < u.minLevel || s > u.maxLevel) && (c = this.getLevelScale(s), h = u.x * c, f = u.y * c, m = h + u.width * c, v = f + u.height * c, h = Math.floor(h / this._tileWidth), f = Math.floor(f / this._tileWidth), m = Math.ceil(m / this._tileWidth), v = Math.ceil(v / this._tileWidth), h <= o && o < m && f <= l && l < v)) return true;
          return false;
        } });
        function n(s, o) {
          if (!o || !o.documentElement) throw new Error(e.getString("Errors.Xml"));
          var l = o.documentElement, a = l.localName || l.tagName, u = o.documentElement.namespaceURI, c = null, h = [], f, m, v, y, x;
          if (a === "Image") try {
            if (y = l.getElementsByTagName("Size")[0], y === void 0 && (y = l.getElementsByTagNameNS(u, "Size")[0]), c = { Image: { xmlns: "http://schemas.microsoft.com/deepzoom/2008", Url: l.getAttribute("Url"), Format: l.getAttribute("Format"), DisplayRect: null, Overlap: parseInt(l.getAttribute("Overlap"), 10), TileSize: parseInt(l.getAttribute("TileSize"), 10), Size: { Height: parseInt(y.getAttribute("Height"), 10), Width: parseInt(y.getAttribute("Width"), 10) } } }, !e.imageFormatSupported(c.Image.Format)) throw new Error(e.getString("Errors.ImageFormat", c.Image.Format.toUpperCase()));
            for (f = l.getElementsByTagName("DisplayRect"), f === void 0 && (f = l.getElementsByTagNameNS(u, "DisplayRect")[0]), x = 0; x < f.length; x++) m = f[x], v = m.getElementsByTagName("Rect")[0], v === void 0 && (v = m.getElementsByTagNameNS(u, "Rect")[0]), h.push({ Rect: { X: parseInt(v.getAttribute("X"), 10), Y: parseInt(v.getAttribute("Y"), 10), Width: parseInt(v.getAttribute("Width"), 10), Height: parseInt(v.getAttribute("Height"), 10), MinLevel: parseInt(m.getAttribute("MinLevel"), 10), MaxLevel: parseInt(m.getAttribute("MaxLevel"), 10) } });
            return h.length && (c.Image.DisplayRect = h), r(s, c);
          } catch (H) {
            throw H instanceof Error ? H : new Error(e.getString("Errors.Dzi"));
          }
          else {
            if (a === "Collection") throw new Error(e.getString("Errors.Dzc"));
            if (a === "Error") {
              var T = l.getElementsByTagName("Message")[0], C = T.firstChild.nodeValue;
              throw new Error(C);
            }
          }
          throw new Error(e.getString("Errors.Dzi"));
        }
        function r(s, o) {
          var l = o.Image, a = l.Url, u = l.Format, c = l.Size, h = l.DisplayRect || [], f = parseInt(c.Width, 10), m = parseInt(c.Height, 10), v = parseInt(l.TileSize, 10), y = parseInt(l.Overlap, 10), x = [], T, C;
          for (C = 0; C < h.length; C++) T = h[C].Rect, x.push(new e.DisplayRect(parseInt(T.X, 10), parseInt(T.Y, 10), parseInt(T.Width, 10), parseInt(T.Height, 10), parseInt(T.MinLevel, 10), parseInt(T.MaxLevel, 10)));
          return e.extend(true, { width: f, height: m, tileSize: v, tileOverlap: y, minLevel: null, maxLevel: null, tilesUrl: a, fileFormat: u, displayRects: x }, o);
        }
      })(i), (function(e) {
        e.IIIFTileSource = function(l) {
          if (e.extend(true, this, l), this._id = this["@id"] || this.id || this.identifier || null, !(this.height && this.width && this._id)) throw new Error("IIIF required parameters (width, height, or id) not provided.");
          if (l.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = l.version, this.tile_width && this.tile_height) l.tileWidth = this.tile_width, l.tileHeight = this.tile_height;
          else if (this.tile_width) l.tileSize = this.tile_width;
          else if (this.tile_height) l.tileSize = this.tile_height;
          else if (this.tiles) if (this.tiles.length === 1) l.tileWidth = this.tiles[0].width, l.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
          else {
            this.scale_factors = [];
            for (var a = 0; a < this.tiles.length; a++) for (var u = 0; u < this.tiles[a].scaleFactors.length; u++) {
              var c = this.tiles[a].scaleFactors[u];
              this.scale_factors.push(c), l.tileSizePerScaleFactor[c] = { width: this.tiles[a].width, height: this.tiles[a].height || this.tiles[a].width };
            }
          }
          else if (n(l)) {
            for (var h = Math.min(this.height, this.width), f = [256, 512, 1024], m = [], v = 0; v < f.length; v++) f[v] <= h && m.push(f[v]);
            m.length > 0 ? l.tileSize = Math.max.apply(null, m) : l.tileSize = h;
          } else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = true, l.levels = r(this), e.extend(true, l, { width: l.levels[l.levels.length - 1].width, height: l.levels[l.levels.length - 1].height, tileSize: Math.max(l.height, l.width), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length - 1 }), this.levels = l.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
          if (!l.maxLevel && !this.emulateLegacyImagePyramid) if (!this.scale_factors) l.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
          else {
            var y = Math.max.apply(null, this.scale_factors);
            l.maxLevel = Math.round(Math.log(y) * Math.LOG2E);
          }
          if (this.sizes) {
            var x = this.sizes.length;
            (x === l.maxLevel || x === l.maxLevel + 1) && (this.levelSizes = this.sizes.slice().sort((T, C) => T.width - C.width), x === l.maxLevel && this.levelSizes.push({ width: this.width, height: this.height }));
          }
          e.TileSource.apply(this, [l]);
        }, e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, { supports: function(l, a) {
          return l.protocol && l.protocol === "http://iiif.io/api/image" || l["@context"] && (l["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || l["@context"] === "http://iiif.io/api/image/1/context.json") || l.profile && l.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || l.identifier && l.width && l.height ? true : !!(l.documentElement && l.documentElement.tagName === "info" && l.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
        }, configure: function(l, a, u) {
          if (e.isPlainObject(l)) {
            if (!l["@context"]) l["@context"] = "http://iiif.io/api/image/1.0/context.json", l["@id"] = a.replace("/info.json", ""), l.version = 1;
            else {
              var h = l["@context"];
              if (Array.isArray(h)) {
                for (var f = 0; f < h.length; f++) if (typeof h[f] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(h[f]) || h[f] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                  h = h[f];
                  break;
                }
              }
              switch (h) {
                case "http://iiif.io/api/image/1/context.json":
                case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                  l.version = 1;
                  break;
                case "http://iiif.io/api/image/2/context.json":
                  l.version = 2;
                  break;
                case "http://iiif.io/api/image/3/context.json":
                  l.version = 3;
                  break;
                default:
                  e.console.error("Data has a @context property which contains no known IIIF context URI.");
              }
            }
            if (l.preferredFormats) {
              for (var m = 0; m < l.preferredFormats.length; m++) if (i.imageFormatSupported(l.preferredFormats[m])) {
                l.tileFormat = l.preferredFormats[m];
                break;
              }
            }
            return l;
          } else {
            var c = s(l);
            return c["@context"] = "http://iiif.io/api/image/1.0/context.json", c["@id"] = a.replace("/info.xml", ""), c.version = 1, c;
          }
        }, getTileWidth: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileWidth.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].width : this._tileWidth;
        }, getTileHeight: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileHeight.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].height : this._tileHeight;
        }, getLevelScale: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = NaN;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (a = this.levels[l].width / this.levels[this.maxLevel].width), a;
          }
          return e.TileSource.prototype.getLevelScale.call(this, l);
        }, getNumTiles: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = this.getLevelScale(l);
            return a ? new e.Point(1, 1) : new e.Point(0, 0);
          }
          if (this.levelSizes) {
            var u = this.levelSizes[l], c = Math.ceil(u.width / this.getTileWidth(l)), h = Math.ceil(u.height / this.getTileHeight(l));
            return new e.Point(c, h);
          } else return e.TileSource.prototype.getNumTiles.call(this, l);
        }, getTileAtPoint: function(l, a) {
          if (this.emulateLegacyImagePyramid) return new e.Point(0, 0);
          if (this.levelSizes) {
            var u = a.x >= 0 && a.x <= 1 && a.y >= 0 && a.y <= 1 / this.aspectRatio;
            e.console.assert(u, "[TileSource.getTileAtPoint] must be called with a valid point.");
            var c = this.levelSizes[l].width, h = a.x * c, f = a.y * c, m = Math.floor(h / this.getTileWidth(l)), v = Math.floor(f / this.getTileHeight(l));
            a.x >= 1 && (m = this.getNumTiles(l).x - 1);
            var y = 1e-15;
            return a.y >= 1 / this.aspectRatio - y && (v = this.getNumTiles(l).y - 1), new e.Point(m, v);
          }
          return e.TileSource.prototype.getTileAtPoint.call(this, l, a);
        }, getTileUrl: function(l, a, u) {
          if (this.emulateLegacyImagePyramid) {
            var c = null;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (c = this.levels[l].url), c;
          }
          var h = "0", f = Math.pow(0.5, this.maxLevel - l), m, v, y, x, T, C, H, k, N, Y, K, q, ee, ce, te, j;
          return this.levelSizes ? (m = this.levelSizes[l].width, v = this.levelSizes[l].height) : (m = Math.ceil(this.width * f), v = Math.ceil(this.height * f)), y = this.getTileWidth(l), x = this.getTileHeight(l), T = Math.round(y / f), C = Math.round(x / f), this.version === 1 ? te = "native." + this.tileFormat : te = "default." + this.tileFormat, m < y && v < x ? (this.version === 2 && m === this.width ? q = "full" : this.version === 3 && m === this.width && v === this.height ? q = "max" : this.version === 3 ? q = m + "," + v : q = m + ",", H = "full") : (k = a * T, N = u * C, Y = Math.min(T, this.width - k), K = Math.min(C, this.height - N), a === 0 && u === 0 && Y === this.width && K === this.height ? H = "full" : H = [k, N, Y, K].join(","), ee = Math.min(y, m - a * y), ce = Math.min(x, v - u * x), this.version === 2 && ee === this.width ? q = "full" : this.version === 3 && ee === this.width && ce === this.height ? q = "max" : this.version === 3 ? q = ee + "," + ce : q = ee + ","), j = [this._id, H, q, h, te].join("/"), j;
        }, __testonly__: { canBeTiled: n, constructLevels: r } });
        function n(l) {
          var a = ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json", "level0", "https://iiif.io/api/image/3/level0.json"], u = Array.isArray(l.profile) ? l.profile[0] : l.profile, c = a.indexOf(u) !== -1, h = false;
          return l.version === 2 && l.profile.length > 1 && l.profile[1].supports && (h = l.profile[1].supports.indexOf("sizeByW") !== -1), l.version === 3 && l.extraFeatures && (h = l.extraFeatures.indexOf("sizeByWh") !== -1), !c || h;
        }
        function r(l) {
          for (var a = [], u = 0; u < l.sizes.length; u++) a.push({ url: l._id + "/full/" + l.sizes[u].width + "," + (l.version === 3 ? l.sizes[u].height : "") + "/0/default." + l.tileFormat, width: l.sizes[u].width, height: l.sizes[u].height });
          return a.sort(function(c, h) {
            return c.width - h.width;
          });
        }
        function s(l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null;
          if (u === "info") try {
            return c = {}, o(a, c), c;
          } catch (h) {
            throw h instanceof Error ? h : new Error(e.getString("Errors.IIIF"));
          }
          throw new Error(e.getString("Errors.IIIF"));
        }
        function o(l, a, u) {
          var c, h;
          if (l.nodeType === 3 && u) h = l.nodeValue.trim(), h.match(/^\d*$/) && (h = Number(h)), a[u] ? (e.isArray(a[u]) || (a[u] = [a[u]]), a[u].push(h)) : a[u] = h;
          else if (l.nodeType === 1) for (c = 0; c < l.childNodes.length; c++) o(l.childNodes[c], a, l.nodeName);
        }
      })(i), (function(e) {
        e.OsmTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] }, (!a.width || !a.height) && (a.width = 65572864, a.height = 65572864), a.tileSize || (a.tileSize = 256, a.tileOverlap = 0), a.tilesUrl || (a.tilesUrl = "http://tile.openstreetmap.org/"), a.minLevel = 8, e.TileSource.apply(this, [a]);
        }, e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "openstreetmaps";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          return this.tilesUrl + (n - 8) + "/" + r + "/" + s + ".png";
        } });
      })(i), (function(e) {
        e.TmsTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] };
          var u = Math.ceil(a.width / 256) * 256, c = Math.ceil(a.height / 256) * 256, h;
          u > c ? h = u / 256 : h = c / 256, a.maxLevel = Math.ceil(Math.log(h) / Math.log(2)) - 1, a.tileSize = 256, a.width = u, a.height = c, e.TileSource.apply(this, [a]);
        }, e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "tiledmapservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = this.getNumTiles(n).y - 1;
          return this.tilesUrl + n + "/" + r + "/" + (o - s) + ".png";
        } });
      })(i), (function(e) {
        e.ZoomifyTileSource = function(n) {
          typeof n.tileSize > "u" && (n.tileSize = 256), typeof n.fileFormat > "u" && (n.fileFormat = "jpg", this.fileFormat = n.fileFormat);
          var r = { x: n.width, y: n.height };
          for (n.imageSizes = [{ x: n.width, y: n.height }], n.gridSize = [this._getGridSize(n.width, n.height, n.tileSize)]; parseInt(r.x, 10) > n.tileSize || parseInt(r.y, 10) > n.tileSize; ) r.x = Math.floor(r.x / 2), r.y = Math.floor(r.y / 2), n.imageSizes.push({ x: r.x, y: r.y }), n.gridSize.push(this._getGridSize(r.x, r.y, n.tileSize));
          n.imageSizes.reverse(), n.gridSize.reverse(), n.minLevel = 0, n.maxLevel = n.gridSize.length - 1, i.TileSource.apply(this, [n]);
        }, e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, { _getGridSize: function(n, r, s) {
          return { x: Math.ceil(n / s), y: Math.ceil(r / s) };
        }, _calculateAbsoluteTileNumber: function(n, r, s) {
          for (var o = 0, l = {}, a = 0; a < n; a++) l = this.gridSize[a], o += l.x * l.y;
          return l = this.gridSize[n], o += l.x * s + r, o;
        }, supports: function(n, r) {
          return n.type && n.type === "zoomifytileservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = 0, l = this._calculateAbsoluteTileNumber(n, r, s);
          return o = Math.floor(l / 256), this.tilesUrl + "TileGroup" + o + "/" + n + "-" + r + "-" + s + "." + this.fileFormat;
        } });
      })(i), (function(e) {
        e.LegacyTileSource = function(o) {
          var l, a, u;
          e.isArray(o) && (l = { type: "legacy-image-pyramid", levels: o }), l.levels = n(l.levels), l.levels.length > 0 ? (a = l.levels[l.levels.length - 1].width, u = l.levels[l.levels.length - 1].height) : (a = 0, u = 0, e.console.error("No supported image formats found")), e.extend(true, l, { width: a, height: u, tileSize: Math.max(u, a), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length > 0 ? l.levels.length - 1 : 0 }), e.TileSource.apply(this, [l]), this.levels = l.levels;
        }, e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, { supports: function(o, l) {
          return o.type && o.type === "legacy-image-pyramid" || o.documentElement && o.documentElement.getAttribute("type") === "legacy-image-pyramid";
        }, configure: function(o, l, a) {
          var u;
          return e.isPlainObject(o) ? u = s(this, o) : u = r(this, o), u;
        }, getLevelScale: function(o) {
          var l = NaN;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (l = this.levels[o].width / this.levels[this.maxLevel].width), l;
        }, getNumTiles: function(o) {
          var l = this.getLevelScale(o);
          return l ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(o, l, a) {
          var u = null;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (u = this.levels[o].url), u;
        } });
        function n(o) {
          var l = [], a, u;
          for (u = 0; u < o.length; u++) a = o[u], a.height && a.width && a.url ? l.push({ url: a.url, width: Number(a.width), height: Number(a.height) }) : e.console.error("Unsupported image format: %s", a.url ? a.url : "<no URL>");
          return l.sort(function(c, h) {
            return c.height - h.height;
          });
        }
        function r(o, l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null, h = [], f, m;
          if (u === "image") try {
            for (c = { type: a.getAttribute("type"), levels: [] }, h = a.getElementsByTagName("level"), m = 0; m < h.length; m++) f = h[m], c.levels.push({ url: f.getAttribute("url"), width: parseInt(f.getAttribute("width"), 10), height: parseInt(f.getAttribute("height"), 10) });
            return s(o, c);
          } catch (v) {
            throw v instanceof Error ? v : new Error("Unknown error parsing Legacy Image Pyramid XML.");
          }
          else {
            if (u === "collection") throw new Error("Legacy Image Pyramid Collections not yet supported.");
            if (u === "error") throw new Error("Error: " + l);
          }
          throw new Error("Unknown element " + u);
        }
        function s(o, l) {
          return l.levels;
        }
      })(i), (function(e) {
        e.ImageTileSource = function(n) {
          n = e.extend({ buildPyramid: true, crossOriginPolicy: false, ajaxWithCredentials: false }, n), e.TileSource.apply(this, [n]);
        }, e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "image";
        }, configure: function(n, r, s) {
          return n;
        }, getImageInfo: function(n) {
          var r = this._image = new Image(), s = this;
          this.crossOriginPolicy && (r.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (r.useCredentials = this.ajaxWithCredentials), e.addEvent(r, "load", function() {
            s.width = r.naturalWidth, s.height = r.naturalHeight, s.aspectRatio = s.width / s.height, s.dimensions = new e.Point(s.width, s.height), s._tileWidth = s.width, s._tileHeight = s.height, s.tileOverlap = 0, s.minLevel = 0, s.levels = s._buildLevels(), s.maxLevel = s.levels.length - 1, s.ready = true, s.raiseEvent("ready", { tileSource: s });
          }), e.addEvent(r, "error", function() {
            s.raiseEvent("open-failed", { message: "Error loading image at " + n, source: n });
          }), r.src = n;
        }, getLevelScale: function(n) {
          var r = NaN;
          return n >= this.minLevel && n <= this.maxLevel && (r = this.levels[n].width / this.levels[this.maxLevel].width), r;
        }, getNumTiles: function(n) {
          var r = this.getLevelScale(n);
          return r ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].url), o;
        }, getContext2D: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].context2D), o;
        }, destroy: function(n) {
          this._freeupCanvasMemory(n);
        }, _buildLevels: function() {
          var n = [{ url: this._image.src, width: this._image.naturalWidth, height: this._image.naturalHeight }];
          if (!this.buildPyramid || !e.supportsCanvas) return delete this._image, n;
          var r = this._image.naturalWidth, s = this._image.naturalHeight, o = document.createElement("canvas"), l = o.getContext("2d");
          if (o.width = r, o.height = s, l.drawImage(this._image, 0, 0, r, s), n[0].context2D = l, delete this._image, e.isCanvasTainted(o)) return n;
          for (; r >= 2 && s >= 2; ) {
            r = Math.floor(r / 2), s = Math.floor(s / 2);
            var a = document.createElement("canvas"), u = a.getContext("2d");
            a.width = r, a.height = s, u.drawImage(o, 0, 0, r, s), n.splice(0, 0, { context2D: u, width: r, height: s }), o = a, l = u;
          }
          return n;
        }, _freeupCanvasMemory: function(n) {
          for (var r = 0; r < this.levels.length; r++) this.levels[r].context2D && (this.levels[r].context2D.canvas.height = 0, this.levels[r].context2D.canvas.width = 0, n && n.raiseEvent("image-unloaded", { context2D: this.levels[r].context2D }));
        } });
      })(i), (function(e) {
        e.TileSourceCollection = function(n, r, s, o) {
          e.console.error("TileSourceCollection is deprecated; use World instead");
        };
      })(i), (function(e) {
        e.ButtonState = { REST: 0, GROUP: 1, HOVER: 2, DOWN: 3 }, e.Button = function(u) {
          var c = this;
          e.EventSource.call(this), e.extend(true, this, { tooltip: null, srcRest: null, srcGroup: null, srcHover: null, srcDown: null, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, fadeDelay: 0, fadeLength: 2e3, onPress: null, onRelease: null, onClick: null, onEnter: null, onExit: null, onFocus: null, onBlur: null, userData: null }, u), this.element = u.element || e.makeNeutralElement("div"), u.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = false, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({ userData: "Button.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(h) {
            h.insideElementPressed ? (l(c, e.ButtonState.DOWN), c.raiseEvent("enter", { originalEvent: h.originalEvent })) : h.buttonDownAny || l(c, e.ButtonState.HOVER);
          }, focusHandler: function(h) {
            c.tracker.enterHandler(h), c.raiseEvent("focus", { originalEvent: h.originalEvent });
          }, leaveHandler: function(h) {
            a(c, e.ButtonState.GROUP), h.insideElementPressed && c.raiseEvent("exit", { originalEvent: h.originalEvent });
          }, blurHandler: function(h) {
            c.tracker.leaveHandler(h), c.raiseEvent("blur", { originalEvent: h.originalEvent });
          }, pressHandler: function(h) {
            l(c, e.ButtonState.DOWN), c.raiseEvent("press", { originalEvent: h.originalEvent });
          }, releaseHandler: function(h) {
            h.insideElementPressed && h.insideElementReleased ? (a(c, e.ButtonState.HOVER), c.raiseEvent("release", { originalEvent: h.originalEvent })) : h.insideElementPressed ? a(c, e.ButtonState.GROUP) : l(c, e.ButtonState.HOVER);
          }, clickHandler: function(h) {
            h.quick && c.raiseEvent("click", { originalEvent: h.originalEvent });
          }, keyHandler: function(h) {
            h.keyCode === 13 ? (c.raiseEvent("click", { originalEvent: h.originalEvent }), c.raiseEvent("release", { originalEvent: h.originalEvent }), h.preventDefault = true) : h.preventDefault = false;
          } }), a(this, e.ButtonState.REST);
        }, e.extend(e.Button.prototype, e.EventSource.prototype, { notifyGroupEnter: function() {
          l(this, e.ButtonState.GROUP);
        }, notifyGroupExit: function() {
          a(this, e.ButtonState.REST);
        }, disable: function() {
          this.notifyGroupExit(), this.element.disabled = true, this.tracker.setTracking(false), e.setElementOpacity(this.element, 0.2, true);
        }, enable: function() {
          this.element.disabled = false, this.tracker.setTracking(true), e.setElementOpacity(this.element, 1, true), this.notifyGroupEnter();
        }, destroy: function() {
          this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
        } });
        function n(u) {
          e.requestAnimationFrame(function() {
            r(u);
          });
        }
        function r(u) {
          var c, h, f;
          u.shouldFade && (c = e.now(), h = c - u.fadeBeginTime, f = 1 - h / u.fadeLength, f = Math.min(1, f), f = Math.max(0, f), u.imgGroup && e.setElementOpacity(u.imgGroup, f, true), f > 0 && n(u));
        }
        function s(u) {
          u.shouldFade = true, u.fadeBeginTime = e.now() + u.fadeDelay, window.setTimeout(function() {
            n(u);
          }, u.fadeDelay);
        }
        function o(u) {
          u.shouldFade = false, u.imgGroup && e.setElementOpacity(u.imgGroup, 1, true);
        }
        function l(u, c) {
          u.element.disabled || (c >= e.ButtonState.GROUP && u.currentState === e.ButtonState.REST && (o(u), u.currentState = e.ButtonState.GROUP), c >= e.ButtonState.HOVER && u.currentState === e.ButtonState.GROUP && (u.imgHover && (u.imgHover.style.visibility = ""), u.currentState = e.ButtonState.HOVER), c >= e.ButtonState.DOWN && u.currentState === e.ButtonState.HOVER && (u.imgDown && (u.imgDown.style.visibility = ""), u.currentState = e.ButtonState.DOWN));
        }
        function a(u, c) {
          u.element.disabled || (c <= e.ButtonState.HOVER && u.currentState === e.ButtonState.DOWN && (u.imgDown && (u.imgDown.style.visibility = "hidden"), u.currentState = e.ButtonState.HOVER), c <= e.ButtonState.GROUP && u.currentState === e.ButtonState.HOVER && (u.imgHover && (u.imgHover.style.visibility = "hidden"), u.currentState = e.ButtonState.GROUP), c <= e.ButtonState.REST && u.currentState === e.ButtonState.GROUP && (s(u), u.currentState = e.ButtonState.REST));
        }
      })(i), (function(e) {
        e.ButtonGroup = function(n) {
          e.extend(true, this, { buttons: [], clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, labelText: "" }, n);
          var r = this.buttons.concat([]), s = this, o;
          if (this.element = n.element || e.makeNeutralElement("div"), !n.group) for (this.element.style.display = "inline-block", o = 0; o < r.length; o++) this.element.appendChild(r[o].element);
          e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({ userData: "ButtonGroup.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(l) {
            var a;
            for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupEnter();
          }, leaveHandler: function(l) {
            var a;
            if (!l.insideElementPressed) for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupExit();
          } });
        }, e.ButtonGroup.prototype = { addButton: function(n) {
          this.buttons.push(n), this.element.appendChild(n.element);
        }, emulateEnter: function() {
          this.tracker.enterHandler({ eventSource: this.tracker });
        }, emulateLeave: function() {
          this.tracker.leaveHandler({ eventSource: this.tracker });
        }, destroy: function() {
          for (; this.buttons.length; ) {
            var n = this.buttons.pop();
            this.element.removeChild(n.element), n.destroy();
          }
          this.tracker.destroy(), this.element = null;
        } };
      })(i), (function(e) {
        e.Rect = function(n, r, s, o, l) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0, this.width = typeof s == "number" ? s : 0, this.height = typeof o == "number" ? o : 0, this.degrees = typeof l == "number" ? l : 0, this.degrees = e.positiveModulo(this.degrees, 360);
          var a, u;
          this.degrees >= 270 ? (a = this.getTopRight(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 270) : this.degrees >= 180 ? (a = this.getBottomRight(), this.x = a.x, this.y = a.y, this.degrees -= 180) : this.degrees >= 90 && (a = this.getBottomLeft(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 90);
        }, e.Rect.fromSummits = function(n, r, s) {
          var o = n.distanceTo(r), l = n.distanceTo(s), a = r.minus(n), u = Math.atan(a.y / a.x);
          return a.x < 0 ? u += Math.PI : a.y < 0 && (u += 2 * Math.PI), new e.Rect(n.x, n.y, o, l, u / Math.PI * 180);
        }, e.Rect.prototype = { clone: function() {
          return new e.Rect(this.x, this.y, this.width, this.height, this.degrees);
        }, getAspectRatio: function() {
          return this.width / this.height;
        }, getTopLeft: function() {
          return new e.Point(this.x, this.y);
        }, getBottomRight: function() {
          return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getTopRight: function() {
          return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
        }, getBottomLeft: function() {
          return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getCenter: function() {
          return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft());
        }, getSize: function() {
          return new e.Point(this.width, this.height);
        }, equals: function(n) {
          return n instanceof e.Rect && this.x === n.x && this.y === n.y && this.width === n.width && this.height === n.height && this.degrees === n.degrees;
        }, times: function(n) {
          return new e.Rect(this.x * n, this.y * n, this.width * n, this.height * n, this.degrees);
        }, translate: function(n) {
          return new e.Rect(this.x + n.x, this.y + n.y, this.width, this.height, this.degrees);
        }, union: function(n) {
          var r = this.getBoundingBox(), s = n.getBoundingBox(), o = Math.min(r.x, s.x), l = Math.min(r.y, s.y), a = Math.max(r.x + r.width, s.x + s.width), u = Math.max(r.y + r.height, s.y + s.height);
          return new e.Rect(o, l, a - o, u - l);
        }, intersection: function(n) {
          var r = 1e-10, s = [], o = this.getTopLeft();
          n.containsPoint(o, r) && s.push(o);
          var l = this.getTopRight();
          n.containsPoint(l, r) && s.push(l);
          var a = this.getBottomLeft();
          n.containsPoint(a, r) && s.push(a);
          var u = this.getBottomRight();
          n.containsPoint(u, r) && s.push(u);
          var c = n.getTopLeft();
          this.containsPoint(c, r) && s.push(c);
          var h = n.getTopRight();
          this.containsPoint(h, r) && s.push(h);
          var f = n.getBottomLeft();
          this.containsPoint(f, r) && s.push(f);
          var m = n.getBottomRight();
          this.containsPoint(m, r) && s.push(m);
          for (var v = this._getSegments(), y = n._getSegments(), x = 0; x < v.length; x++) for (var T = v[x], C = 0; C < y.length; C++) {
            var H = y[C], k = N(T[0], T[1], H[0], H[1]);
            k && s.push(k);
          }
          function N(j, ne, he, ye) {
            var me = ne.minus(j), pe = ye.minus(he), ae = -pe.x * me.y + me.x * pe.y;
            if (ae === 0) return null;
            var Ae = (me.x * (j.y - he.y) - me.y * (j.x - he.x)) / ae, Re = (pe.x * (j.y - he.y) - pe.y * (j.x - he.x)) / ae;
            return -r <= Ae && Ae <= 1 - r && -r <= Re && Re <= 1 - r ? new e.Point(j.x + Re * me.x, j.y + Re * me.y) : null;
          }
          if (s.length === 0) return null;
          for (var Y = s[0].x, K = s[0].x, q = s[0].y, ee = s[0].y, ce = 1; ce < s.length; ce++) {
            var te = s[ce];
            te.x < Y && (Y = te.x), te.x > K && (K = te.x), te.y < q && (q = te.y), te.y > ee && (ee = te.y);
          }
          return new e.Rect(Y, q, K - Y, ee - q);
        }, _getSegments: function() {
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight();
          return [[n, r], [r, o], [o, s], [s, n]];
        }, rotate: function(n, r) {
          if (n = e.positiveModulo(n, 360), n === 0) return this.clone();
          r = r || this.getCenter();
          var s = this.getTopLeft().rotate(n, r), o = this.getTopRight().rotate(n, r), l = o.minus(s);
          l = l.apply(function(u) {
            var c = 1e-15;
            return Math.abs(u) < c ? 0 : u;
          });
          var a = Math.atan(l.y / l.x);
          return l.x < 0 ? a += Math.PI : l.y < 0 && (a += 2 * Math.PI), new e.Rect(s.x, s.y, this.width, this.height, a / Math.PI * 180);
        }, getBoundingBox: function() {
          if (this.degrees === 0) return this.clone();
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight(), l = Math.min(n.x, r.x, s.x, o.x), a = Math.max(n.x, r.x, s.x, o.x), u = Math.min(n.y, r.y, s.y, o.y), c = Math.max(n.y, r.y, s.y, o.y);
          return new e.Rect(l, u, a - l, c - u);
        }, getIntegerBoundingBox: function() {
          var n = this.getBoundingBox(), r = Math.floor(n.x), s = Math.floor(n.y), o = Math.ceil(n.width + n.x - r), l = Math.ceil(n.height + n.y - s);
          return new e.Rect(r, s, o, l);
        }, containsPoint: function(n, r) {
          r = r || 0;
          var s = this.getTopLeft(), o = this.getTopRight(), l = this.getBottomLeft(), a = o.minus(s), u = l.minus(s);
          return (n.x - s.x) * a.x + (n.y - s.y) * a.y >= -r && (n.x - o.x) * a.x + (n.y - o.y) * a.y <= r && (n.x - s.x) * u.x + (n.y - s.y) * u.y >= -r && (n.x - l.x) * u.x + (n.y - l.y) * u.y <= r;
        }, toString: function() {
          return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
        } };
      })(i), (function(e) {
        var n = {};
        e.ReferenceStrip = function(f) {
          var m = this, v = f.viewer, y = e.getElementSize(v.element), x, T, C;
          for (f.id || (f.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = f.id, this.element.className = "referencestrip"), f = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio, position: e.DEFAULT_SETTINGS.referenceStripPosition, scroll: e.DEFAULT_SETTINGS.referenceStripScroll, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold }, f, { element: this.element }), e.extend(this, f), n[this.id] = { animating: false }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, T = this.element.style, T.marginTop = "0px", T.marginRight = "0px", T.marginBottom = "0px", T.marginLeft = "0px", T.left = "0px", T.bottom = "0px", T.border = "0px", T.background = "#000", T.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = v, this.tracker = new e.MouseTracker({ userData: "ReferenceStrip.tracker", element: this.element, clickHandler: e.delegate(this, r), dragHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), enterHandler: e.delegate(this, a), leaveHandler: e.delegate(this, u), keyDownHandler: e.delegate(this, c), keyHandler: e.delegate(this, h), preProcessEventHandler: function(H) {
            H.eventType === "wheel" && (H.preventDefault = true);
          } }), f.width && f.height ? (this.element.style.width = f.width + "px", this.element.style.height = f.height + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : f.scroll === "horizontal" ? (this.element.style.width = y.x * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.height = y.y * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : (this.element.style.height = y.y * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.width = y.x * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.TOP_LEFT })), this.panelWidth = y.x * this.sizeRatio + 8, this.panelHeight = y.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, C = 0; C < v.tileSources.length; C++) x = e.makeNeutralElement("div"), x.id = this.element.id + "-" + C, x.style.width = m.panelWidth + "px", x.style.height = m.panelHeight + "px", x.style.display = "inline", x.style.float = "left", x.style.cssFloat = "left", x.style.padding = "2px", e.setElementTouchActionNone(x), e.setElementPointerEventsNone(x), this.element.appendChild(x), x.activePanel = false, this.panels.push(x);
          l(this, this.scroll === "vertical" ? y.y : y.x, 0), this.setFocus(0);
        }, e.ReferenceStrip.prototype = { setFocus: function(f) {
          var m = this.element.querySelector("#" + this.element.id + "-" + f), v = e.getElementSize(this.viewer.canvas), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = -Number(this.element.style.marginLeft.replace("px", "")), C = -Number(this.element.style.marginTop.replace("px", "")), H;
          this.currentSelected !== m && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = m, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (H = Number(f) * (this.panelWidth + 3), H > T + v.x - this.panelWidth ? (H = Math.min(H, y - v.x), this.element.style.marginLeft = -H + "px", l(this, v.x, -H)) : H < T && (H = Math.max(0, H - v.x / 2), this.element.style.marginLeft = -H + "px", l(this, v.x, -H))) : (H = Number(f) * (this.panelHeight + 3), H > C + v.y - this.panelHeight ? (H = Math.min(H, x - v.y), this.element.style.marginTop = -H + "px", l(this, v.y, -H)) : H < C && (H = Math.max(0, H - v.y / 2), this.element.style.marginTop = -H + "px", l(this, v.y, -H))), this.currentPage = f, a.call(this, { eventSource: this.tracker }));
        }, update: function() {
          return !!n[this.id].animating;
        }, destroy: function() {
          if (this.miniViewers) for (var f in this.miniViewers) this.miniViewers[f].destroy();
          this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
        } };
        function r(f) {
          if (f.quick) {
            var m;
            this.scroll === "horizontal" ? m = Math.floor(f.position.x / (this.panelWidth + 4)) : m = Math.floor(f.position.y / this.panelHeight), this.viewer.goToPage(m);
          }
          this.element.focus();
        }
        function s(f) {
          if (this.dragging = true, this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? -f.delta.x > 0 ? m > -(y - T.x) && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, T.x, m + f.delta.x * 2)) : -f.delta.x < 0 && m < 0 && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, T.x, m + f.delta.x * 2)) : -f.delta.y > 0 ? v > -(x - T.y) && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, T.y, v + f.delta.y * 2)) : -f.delta.y < 0 && v < 0 && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, T.y, v + f.delta.y * 2));
          }
        }
        function o(f) {
          if (this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? f.scroll > 0 ? m > -(y - T.x) && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, T.x, m - f.scroll * 60)) : f.scroll < 0 && m < 0 && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, T.x, m - f.scroll * 60)) : f.scroll < 0 ? v > T.y - x && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, T.y, v + f.scroll * 60)) : f.scroll > 0 && v < 0 && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, T.y, v + f.scroll * 60)), f.preventDefault = true;
          }
        }
        function l(f, m, v) {
          var y, x, T, C, H, k;
          for (f.scroll === "horizontal" ? y = f.panelWidth : y = f.panelHeight, x = Math.ceil(m / y) + 5, T = Math.ceil((Math.abs(v) + m) / y) + 1, x = T - x, x = x < 0 ? 0 : x, H = x; H < T && H < f.panels.length; H++) if (k = f.panels[H], !k.activePanel) {
            var N, Y = f.viewer.tileSources[H];
            Y.referenceStripThumbnailUrl ? N = { type: "image", url: Y.referenceStripThumbnailUrl } : N = Y, C = new e.Viewer({ id: k.id, tileSources: [N], element: k, navigatorSizeRatio: f.sizeRatio, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: 0, loadTilesWithAjax: f.viewer.loadTilesWithAjax, ajaxHeaders: f.viewer.ajaxHeaders, drawer: "canvas" }), e.setElementPointerEventsNone(C.canvas), e.setElementPointerEventsNone(C.container), C.innerTracker.setTracking(false), C.outerTracker.setTracking(false), f.miniViewers[k.id] = C, k.activePanel = true;
          }
        }
        function a(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "0px" : m.style.marginLeft = "0px";
        }
        function u(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "-" + e.getElementSize(m).y / 2 + "px" : m.style.marginLeft = "-" + e.getElementSize(m).x / 2 + "px";
        }
        function c(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 38:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 40:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 37:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 39:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
        function h(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 61:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 45:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 48:
            case 119:
            case 87:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 115:
            case 83:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 97:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 100:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
      })(i), (function(e) {
        e.DisplayRect = function(n, r, s, o, l, a) {
          e.Rect.apply(this, [n, r, s, o]), this.minLevel = l, this.maxLevel = a;
        }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
      })(i), (function(e) {
        e.Spring = function(r) {
          var s = arguments;
          typeof r != "object" && (r = { initial: s.length && typeof s[0] == "number" ? s[0] : void 0, springStiffness: s.length > 1 ? s[1].springStiffness : 5, animationTime: s.length > 1 ? s[1].animationTime : 1.5 }), e.console.assert(typeof r.springStiffness == "number" && r.springStiffness !== 0, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), e.console.assert(typeof r.animationTime == "number" && r.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), r.exponential && (this._exponential = true, delete r.exponential), e.extend(true, this, r), this.current = { value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1, time: e.now() }, e.console.assert(!this._exponential || this.current.value !== 0, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = { value: this.current.value, time: this.current.time }, this.target = { value: this.current.value, time: this.current.time }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, e.Spring.prototype = { resetTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = r, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, springTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = r, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, shiftBy: function(r) {
          this.start.value += r, this.target.value += r, this._exponential && (e.console.assert(this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, setExponential: function(r) {
          this._exponential = r, this._exponential && (e.console.assert(this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, update: function() {
          this.current.time = e.now();
          let r, s;
          if (this._exponential ? (r = this.start._logValue, s = this.target._logValue) : (r = this.start.value, s = this.target.value), this.current.time >= this.target.time) this.current.value = this.target.value;
          else {
            let o = r + (s - r) * n(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time));
            this._exponential ? this.current.value = Math.exp(o) : this.current.value = o;
          }
          return this.current.value !== this.target.value;
        }, isAtTargetValue: function() {
          return this.current.value === this.target.value;
        } };
        function n(r, s) {
          return (1 - Math.exp(r * -s)) / (1 - Math.exp(-r));
        }
      })(i), (function(e) {
        e.ImageJob = function(r) {
          e.extend(true, this, { timeout: e.DEFAULT_SETTINGS.timeout, jobId: null, tries: 0 }, r), this.data = null, this.userData = {}, this.errorMsg = null;
        }, e.ImageJob.prototype = { start: function() {
          this.tries++;
          var r = this, s = this.abort;
          this.jobId = window.setTimeout(function() {
            r.finish(null, null, "Image load exceeded timeout (" + r.timeout + " ms)");
          }, this.timeout), this.abort = function() {
            r.source.downloadTileAbort(r), typeof s == "function" && s();
          }, this.source.downloadTileStart(this);
        }, finish: function(r, s, o) {
          this.data = r, this.request = s, this.errorMsg = o, this.jobId && window.clearTimeout(this.jobId), this.callback(this);
        } }, e.ImageLoader = function(r) {
          e.extend(true, this, { jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit, timeout: e.DEFAULT_SETTINGS.timeout, jobQueue: [], failedTiles: [], jobsInProgress: 0 }, r);
        }, e.ImageLoader.prototype = { addJob: function(r) {
          if (!r.source) {
            e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
            var s = e.TileSource.prototype;
            r.source = { downloadTileStart: s.downloadTileStart, downloadTileAbort: s.downloadTileAbort };
          }
          var o = this, l = function(c) {
            n(o, c, r.callback);
          }, a = { src: r.src, tile: r.tile || {}, source: r.source, loadWithAjax: r.loadWithAjax, ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null, crossOriginPolicy: r.crossOriginPolicy, ajaxWithCredentials: r.ajaxWithCredentials, postData: r.postData, callback: l, abort: r.abort, timeout: this.timeout }, u = new e.ImageJob(a);
          !this.jobLimit || this.jobsInProgress < this.jobLimit ? (u.start(), this.jobsInProgress++) : this.jobQueue.push(u);
        }, clear: function() {
          for (var r = 0; r < this.jobQueue.length; r++) {
            var s = this.jobQueue[r];
            typeof s.abort == "function" && s.abort();
          }
          this.jobQueue = [];
        } };
        function n(r, s, o) {
          s.errorMsg !== "" && (s.data === null || s.data === void 0) && s.tries < 1 + r.tileRetryMax && r.failedTiles.push(s);
          var l;
          r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (l = r.jobQueue.shift(), l.start(), r.jobsInProgress++), r.tileRetryMax > 0 && r.jobQueue.length === 0 && (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.failedTiles.length > 0 && (l = r.failedTiles.shift(), setTimeout(function() {
            l.start();
          }, r.tileRetryDelay), r.jobsInProgress++), o(s.data, s.errorMsg, s.request);
        }
      })(i), (function(e) {
        e.Tile = function(n, r, s, o, l, a, u, c, h, f, m, v) {
          this.level = n, this.x = r, this.y = s, this.bounds = o, this.positionedBounds = new i.Rect(o.x, o.y, o.width, o.height), this.sourceBounds = f, this.exists = l, this._url = a, this.postData = m, this.context2D = u, this.loadWithAjax = c, this.ajaxHeaders = h, v === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), v = e.TileSource.prototype.getTileHashKey(n, r, s, a, h, m)), this.cacheKey = v, this.loaded = false, this.loading = false, this.element = null, this.imgElement = null, this.style = null, this.position = null, this.size = null, this.flipped = false, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.hasTransparency = false, this.beingDrawn = false, this.lastTouchTime = 0, this.isRightMost = false, this.isBottomMost = false;
        }, e.Tile.prototype = { toString: function() {
          return this.level + "/" + this.x + "_" + this.y;
        }, _hasTransparencyChannel: function() {
          return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."), !!this.context2D || this.getUrl().match(".png");
        }, get image() {
          return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."), this.getImage();
        }, get url() {
          return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."), this.getUrl();
        }, getImage: function() {
          return this.cacheImageRecord.getImage();
        }, getUrl: function() {
          return typeof this._url == "function" ? this._url() : this._url;
        }, getCanvasContext: function() {
          return this.context2D || this.cacheImageRecord && this.cacheImageRecord.getRenderedContext();
        }, getScaleForEdgeSmoothing: function() {
          var n;
          if (this.cacheImageRecord) n = this.cacheImageRecord.getRenderedContext();
          else if (this.context2D) n = this.context2D;
          else return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
          return n.canvas.width / (this.size.x * e.pixelDensityRatio);
        }, getTranslationForEdgeSmoothing: function(n, r, s) {
          var o = Math.max(1, Math.ceil((s.x - r.x) / 2)), l = Math.max(1, Math.ceil((s.y - r.y) / 2));
          return new e.Point(o, l).minus(this.position.times(e.pixelDensityRatio).times(n || 1).apply(function(a) {
            return a % 1;
          }));
        }, unload: function() {
          this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = false, this.loading = false;
        } };
      })(i), (function(e) {
        e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({ NO_ROTATION: 1, EXACT: 2, BOUNDING_BOX: 3 }), e.Overlay = function(n, r, s) {
          var o;
          e.isPlainObject(n) ? o = n : o = { element: n, location: r, placement: s }, this.elementWrapper = document.createElement("div"), this.element = o.element, this.elementWrapper.appendChild(this.element), this.element.id ? this.elementWrapper.id = "overlay-wrapper-" + this.element.id : this.elementWrapper.id = "overlay-wrapper", this.style = this.elementWrapper.style, this._init(o);
        }, e.Overlay.prototype = { _init: function(n) {
          this.location = n.location, this.placement = n.placement === void 0 ? e.Placement.TOP_LEFT : n.placement, this.onDraw = n.onDraw, this.checkResize = n.checkResize === void 0 ? true : n.checkResize, this.width = n.width === void 0 ? null : n.width, this.height = n.height === void 0 ? null : n.height, this.rotationMode = n.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height), this.position = this.location;
        }, adjust: function(n, r) {
          var s = e.Placement.properties[this.placement];
          s && (s.isHorizontallyCentered ? n.x -= r.x / 2 : s.isRight && (n.x -= r.x), s.isVerticallyCentered ? n.y -= r.y / 2 : s.isBottom && (n.y -= r.y));
        }, destroy: function() {
          var n = this.elementWrapper, r = this.style;
          n.parentNode && (n.parentNode.removeChild(n), n.prevElementParent && (r.display = "none", document.body.appendChild(n))), this.onDraw = null, r.top = "", r.left = "", r.position = "", this.width !== null && (r.width = ""), this.height !== null && (r.height = "");
          var s = e.getCssPropertyWithVendorPrefix("transformOrigin"), o = e.getCssPropertyWithVendorPrefix("transform");
          s && o && (r[s] = "", r[o] = "");
        }, drawHTML: function(n, r) {
          var s = this.elementWrapper;
          s.parentNode !== n && (s.prevElementParent = s.parentNode, s.prevNextSibling = s.nextSibling, n.appendChild(s), this.style.position = "absolute", this.size = e.getElementSize(this.elementWrapper));
          var o = this._getOverlayPositionAndSize(r), l = o.position, a = this.size = o.size, u = "";
          r.overlayPreserveContentDirection && (u = r.flipped ? " scaleX(-1)" : " scaleX(1)");
          var c = r.flipped ? -o.rotate : o.rotate, h = r.flipped ? " scaleX(-1)" : "";
          if (this.onDraw) this.onDraw(l, a, this.element);
          else {
            var f = this.style, m = this.element.style;
            m.display = "block", f.left = l.x + "px", f.top = l.y + "px", this.width !== null && (m.width = a.x + "px"), this.height !== null && (m.height = a.y + "px");
            var v = e.getCssPropertyWithVendorPrefix("transformOrigin"), y = e.getCssPropertyWithVendorPrefix("transform");
            v && y && (c && !r.flipped ? (m[y] = "", f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)") : !c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = h) : c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)" + h) : (m[y] = "", f[v] = "", f[y] = "")), f.display = "flex";
          }
        }, _getOverlayPositionAndSize: function(n) {
          var r = n.pixelFromPoint(this.location, true), s = this._getSizeInPixels(n);
          this.adjust(r, s);
          var o = 0;
          if (n.getRotation(true) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION) if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
            var l = new e.Rect(r.x, r.y, s.x, s.y), a = this._getBoundingBox(l, n.getRotation(true));
            r = a.getTopLeft(), s = a.getSize();
          } else o = n.getRotation(true);
          return n.flipped && (r.x = n.getContainerSize().x - r.x), { position: r, size: s, rotate: o };
        }, _getSizeInPixels: function(n) {
          var r = this.size.x, s = this.size.y;
          if (this.width !== null || this.height !== null) {
            var o = n.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0, this.height || 0), true);
            this.width !== null && (r = o.x), this.height !== null && (s = o.y);
          }
          if (this.checkResize && (this.width === null || this.height === null)) {
            var l = this.size = e.getElementSize(this.elementWrapper);
            this.width === null && (r = l.x), this.height === null && (s = l.y);
          }
          return new e.Point(r, s);
        }, _getBoundingBox: function(n, r) {
          var s = this._getPlacementPoint(n);
          return n.rotate(r, s).getBoundingBox();
        }, _getPlacementPoint: function(n) {
          var r = new e.Point(n.x, n.y), s = e.Placement.properties[this.placement];
          return s && (s.isHorizontallyCentered ? r.x += n.width / 2 : s.isRight && (r.x += n.width), s.isVerticallyCentered ? r.y += n.height / 2 : s.isBottom && (r.y += n.height)), r;
        }, _getTransformOrigin: function() {
          var n = "", r = e.Placement.properties[this.placement];
          return r && (r.isLeft ? n = "left" : r.isRight && (n = "right"), r.isTop ? n += " top" : r.isBottom && (n += " bottom")), n;
        }, update: function(n, r) {
          var s = e.isPlainObject(n) ? n : { location: n, placement: r };
          this._init({ location: s.location || this.location, placement: s.placement !== void 0 ? s.placement : this.placement, onDraw: s.onDraw || this.onDraw, checkResize: s.checkResize || this.checkResize, width: s.width !== void 0 ? s.width : this.width, height: s.height !== void 0 ? s.height : this.height, rotationMode: s.rotationMode || this.rotationMode });
        }, getBounds: function(n) {
          e.console.assert(n, "A viewport must now be passed to Overlay.getBounds.");
          var r = this.width, s = this.height;
          if (r === null || s === null) {
            var o = n.deltaPointsFromPixelsNoRotate(this.size, true);
            r === null && (r = o.x), s === null && (s = o.y);
          }
          var l = this.location.clone();
          return this.adjust(l, new e.Point(r, s)), this._adjustBoundsForRotation(n, new e.Rect(l.x, l.y, r, s));
        }, _adjustBoundsForRotation: function(n, r) {
          if (!n || n.getRotation(true) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT) return r;
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
            if (this.width === null || this.height === null) return r;
            var s = this._getOverlayPositionAndSize(n);
            return n.viewerElementToViewportRectangle(new e.Rect(s.position.x, s.position.y, s.size.x, s.size.y));
          }
          return r.rotate(-n.getRotation(true), this._getPlacementPoint(r));
        } };
      })(i), (function(e) {
        const n = e;
        n.DrawerBase = class {
          constructor(s) {
            e.console.assert(s.viewer, "[Drawer] options.viewer is required"), e.console.assert(s.viewport, "[Drawer] options.viewport is required"), e.console.assert(s.element, "[Drawer] options.element is required"), this.viewer = s.viewer, this.viewport = s.viewport, this.debugGridColor = typeof s.debugGridColor == "string" ? [s.debugGridColor] : s.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, this.options = s.options || {}, this.container = e.getElement(s.element), this._renderingTarget = this._createDrawingElement(), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", this.canvas.style.left = "0", e.setElementOpacity(this.canvas, this.viewer.opacity, true), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._checkForAPIOverrides();
          }
          get canvas() {
            return this._renderingTarget;
          }
          get element() {
            return e.console.error("Drawer.element is deprecated. Use Drawer.container instead."), this.container;
          }
          getType() {
            e.console.error("Drawer.getType must be implemented by child class");
          }
          static isSupported() {
            e.console.error("Drawer.isSupported must be implemented by child class");
          }
          _createDrawingElement() {
            return e.console.error("Drawer._createDrawingElement must be implemented by child class"), null;
          }
          draw(s) {
            e.console.error("Drawer.draw must be implemented by child class");
          }
          canRotate() {
            e.console.error("Drawer.canRotate must be implemented by child class");
          }
          destroy() {
            e.console.error("Drawer.destroy must be implemented by child class");
          }
          minimumOverlapRequired(s) {
            return false;
          }
          setImageSmoothingEnabled(s) {
            e.console.error("Drawer.setImageSmoothingEnabled must be implemented by child class");
          }
          drawDebuggingRect(s) {
            e.console.warn("[drawer].drawDebuggingRect is not implemented by this drawer");
          }
          clear() {
            e.console.warn("[drawer].clear() is deprecated. The drawer is responsible for clearing itself as needed before drawing tiles.");
          }
          _checkForAPIOverrides() {
            if (this._createDrawingElement === e.DrawerBase.prototype._createDrawingElement) throw new Error("[drawer]._createDrawingElement must be implemented by child class");
            if (this.draw === e.DrawerBase.prototype.draw) throw new Error("[drawer].draw must be implemented by child class");
            if (this.canRotate === e.DrawerBase.prototype.canRotate) throw new Error("[drawer].canRotate must be implemented by child class");
            if (this.destroy === e.DrawerBase.prototype.destroy) throw new Error("[drawer].destroy must be implemented by child class");
            if (this.setImageSmoothingEnabled === e.DrawerBase.prototype.setImageSmoothingEnabled) throw new Error("[drawer].setImageSmoothingEnabled must be implemented by child class");
          }
          viewportToDrawerRectangle(s) {
            var o = this.viewport.pixelFromPointNoRotate(s.getTopLeft(), true), l = this.viewport.deltaPixelsFromPointsNoRotate(s.getSize(), true);
            return new e.Rect(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio, l.x * e.pixelDensityRatio, l.y * e.pixelDensityRatio);
          }
          viewportCoordToDrawerCoord(s) {
            var o = this.viewport.pixelFromPointNoRotate(s, true);
            return new e.Point(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio);
          }
          _calculateCanvasSize() {
            var s = e.pixelDensityRatio, o = this.viewport.getContainerSize();
            return new n.Point(Math.round(o.x * s), Math.round(o.y * s));
          }
          _raiseTiledImageDrawnEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("tiled-image-drawn", { tiledImage: s, tiles: o });
          }
          _raiseDrawerErrorEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("drawer-error", { tiledImage: s, drawer: this, error: o });
          }
        };
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(o) {
            super(o), this.viewer.rejectEventHandler("tile-drawing", "The HTMLDrawer does not raise the tile-drawing event"), this.viewer.allowEventHandler("tile-drawn");
          }
          static isSupported() {
            return true;
          }
          getType() {
            return "html";
          }
          minimumOverlapRequired(o) {
            return true;
          }
          _createDrawingElement() {
            return e.makeNeutralElement("div");
          }
          draw(o) {
            var l = this;
            this._prepareNewFrame(), o.forEach(function(a) {
              a.opacity !== 0 && l._drawTiles(a);
            });
          }
          canRotate() {
            return false;
          }
          destroy() {
            this.container.removeChild(this.canvas);
          }
          setImageSmoothingEnabled() {
          }
          _prepareNewFrame() {
            this.canvas.innerHTML = "";
          }
          _drawTiles(o) {
            var l = o.getTilesToDraw().map((c) => c.tile);
            if (!(o.opacity === 0 || l.length === 0 && !o.placeholderFillStyle)) for (var a = l.length - 1; a >= 0; a--) {
              var u = l[a];
              this._drawTile(u), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: o, tile: u });
            }
          }
          _drawTile(o) {
            e.console.assert(o, "[Drawer._drawTile] tile is required");
            let l = this.canvas;
            if (!o.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToHTML] attempting to draw tile %s when it's not cached", o.toString());
              return;
            }
            if (!o.loaded) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", o.toString());
              return;
            }
            if (!o.element) {
              var a = o.getImage();
              if (!a) return;
              o.element = e.makeNeutralElement("div"), o.imgElement = a.cloneNode(), o.imgElement.style.msInterpolationMode = "nearest-neighbor", o.imgElement.style.width = "100%", o.imgElement.style.height = "100%", o.style = o.element.style, o.style.position = "absolute";
            }
            o.element.parentNode !== l && l.appendChild(o.element), o.imgElement.parentNode !== o.element && o.element.appendChild(o.imgElement), o.style.top = o.position.y + "px", o.style.left = o.position.x + "px", o.style.height = o.size.y + "px", o.style.width = o.size.x + "px", o.flipped && (o.style.transform = "scaleX(-1)"), e.setElementOpacity(o.element, o.opacity);
          }
        }
        e.HTMLDrawer = r;
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(c) {
            super(c), this.context = this.canvas.getContext("2d"), this.sketchCanvas = null, this.sketchContext = null, this._imageSmoothingEnabled = true, this.viewer.allowEventHandler("tile-drawn"), this.viewer.allowEventHandler("tile-drawing");
          }
          static isSupported() {
            return e.supportsCanvas;
          }
          getType() {
            return "canvas";
          }
          _createDrawingElement() {
            let c = e.makeNeutralElement("canvas"), h = this._calculateCanvasSize();
            return c.width = h.x, c.height = h.y, c;
          }
          draw(c) {
            this._prepareNewFrame(), this.viewer.viewport.getFlip() !== this._viewportFlipped && this._flip();
            for (const h of c) h.opacity !== 0 && this._drawTiles(h);
          }
          canRotate() {
            return true;
          }
          destroy() {
            this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null, this.container.removeChild(this.canvas);
          }
          minimumOverlapRequired(c) {
            return true;
          }
          setImageSmoothingEnabled(c) {
            this._imageSmoothingEnabled = !!c, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw();
          }
          drawDebuggingRect(c) {
            var h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.strokeStyle = this.debugGridColor[0], h.fillStyle = this.debugGridColor[0], h.strokeRect(c.x * e.pixelDensityRatio, c.y * e.pixelDensityRatio, c.width * e.pixelDensityRatio, c.height * e.pixelDensityRatio), h.restore();
          }
          get _viewportFlipped() {
            return this.context.getTransform().a < 0;
          }
          _raiseTileDrawingEvent(c, h, f, m) {
            this.viewer.raiseEvent("tile-drawing", { tiledImage: c, context: h, tile: f, rendered: m });
          }
          _prepareNewFrame() {
            var c = this._calculateCanvasSize();
            if ((this.canvas.width !== c.x || this.canvas.height !== c.y) && (this.canvas.width = c.x, this.canvas.height = c.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
              var h = this._calculateSketchCanvasSize();
              this.sketchCanvas.width = h.x, this.sketchCanvas.height = h.y, this._updateImageSmoothingEnabled(this.sketchContext);
            }
            this._clear();
          }
          _clear(c, h) {
            var f = this._getContext(c);
            if (h) f.clearRect(h.x, h.y, h.width, h.height);
            else {
              var m = f.canvas;
              f.clearRect(0, 0, m.width, m.height);
            }
          }
          _drawTiles(c) {
            var h = c.getTilesToDraw().map((j) => j.tile);
            if (!(c.opacity === 0 || h.length === 0 && !c.placeholderFillStyle)) {
              var f = h[0], m;
              f && (m = c.opacity < 1 || c.compositeOperation && c.compositeOperation !== "source-over" || !c._isBottomItem() && c.source.hasTransparency(f.context2D, f.getUrl(), f.ajaxHeaders, f.postData));
              var v, y, x = this.viewport.getZoom(true), T = c.viewportToImageZoom(x);
              h.length > 1 && T > c.smoothTileEdgesMinZoom && !c.iOSDevice && c.getRotation(true) % 360 === 0 && (m = true, v = f.getScaleForEdgeSmoothing(), y = f.getTranslationForEdgeSmoothing(v, this._getCanvasSize(false), this._getCanvasSize(true)));
              var C;
              m && (v || (C = this.viewport.viewportToViewerElementRectangle(c.getClippedBounds(true)).getIntegerBoundingBox(), C = C.times(e.pixelDensityRatio)), this._clear(true, C)), v || this._setRotations(c, m);
              var H = false;
              if (c._clip) {
                this._saveContext(m);
                var k = c.imageToViewportRectangle(c._clip, true);
                k = k.rotate(-c.getRotation(true), c._getRotationPoint(true));
                var N = this.viewportToDrawerRectangle(k);
                v && (N = N.times(v)), y && (N = N.translate(y)), this._setClip(N, m), H = true;
              }
              if (c._croppingPolygons) {
                var Y = this;
                H || this._saveContext(m);
                try {
                  var K = c._croppingPolygons.map(function(j) {
                    return j.map(function(ne) {
                      var he = c.imageToViewportCoordinates(ne.x, ne.y, true).rotate(-c.getRotation(true), c._getRotationPoint(true)), ye = Y.viewportCoordToDrawerCoord(he);
                      return v && (ye = ye.times(v)), y && (ye = ye.plus(y)), ye;
                    });
                  });
                  this._clipWithPolygons(K, m);
                } catch (j) {
                  e.console.error(j);
                }
                H = true;
              }
              if (c._hasOpaqueTile = false, c.placeholderFillStyle && c._hasOpaqueTile === false) {
                let j = this.viewportToDrawerRectangle(c.getBoundsNoRotate(true));
                v && (j = j.times(v)), y && (j = j.translate(y));
                let ne = null;
                typeof c.placeholderFillStyle == "function" ? ne = c.placeholderFillStyle(c, this.context) : ne = c.placeholderFillStyle, this._drawRectangle(j, ne, m);
              }
              var q = a(c.subPixelRoundingForTransparency), ee = false;
              if (q === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS) ee = true;
              else if (q === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
                var ce = this.viewer && this.viewer.isAnimating();
                ee = !ce;
              }
              for (var te = 0; te < h.length; te++) f = h[te], this._drawTile(f, c, m, v, y, ee, c.source), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: c, tile: f });
              H && this._restoreContext(m), v || (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m)), m && (v && this._setRotations(c), this.blendSketch({ opacity: c.opacity, scale: v, translate: y, compositeOperation: c.compositeOperation, bounds: C }), v && (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false))), this._drawDebugInfo(c, h), this._raiseTiledImageDrawnEvent(c, h);
            }
          }
          _drawDebugInfo(c, h) {
            if (c.debugMode) for (var f = h.length - 1; f >= 0; f--) {
              var m = h[f];
              try {
                this._drawDebugInfoOnTile(m, h.length, f, c);
              } catch (v) {
                e.console.error(v);
              }
            }
          }
          _clipWithPolygons(c, h) {
            var f = this._getContext(h);
            f.beginPath();
            for (const m of c) for (const [v, y] of m.entries()) f[v === 0 ? "moveTo" : "lineTo"](y.x, y.y);
            f.clip();
          }
          _drawTile(c, h, f, m, v, y, x) {
            e.console.assert(c, "[Drawer._drawTile] tile is required"), e.console.assert(h, "[Drawer._drawTile] drawingHandler is required");
            var T = this._getContext(f);
            m = m || 1, this._drawTileToCanvas(c, T, h, m, v, y, x);
          }
          _drawTileToCanvas(c, h, f, m, v, y, x) {
            var T = c.position.times(e.pixelDensityRatio), C = c.size.times(e.pixelDensityRatio), H;
            if (!c.context2D && !c.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToCanvas] attempting to draw tile %s when it's not cached", c.toString());
              return;
            }
            if (H = c.getCanvasContext(), !c.loaded || !H) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", c.toString());
              return;
            }
            h.save(), typeof m == "number" && m !== 1 && (T = T.times(m), C = C.times(m)), v instanceof e.Point && (T = T.plus(v)), h.globalAlpha === 1 && c.hasTransparency && (y && (T.x = Math.round(T.x), T.y = Math.round(T.y), C.x = Math.round(C.x), C.y = Math.round(C.y)), h.clearRect(T.x, T.y, C.x, C.y)), this._raiseTileDrawingEvent(f, h, c, H);
            var k, N;
            c.sourceBounds ? (k = Math.min(c.sourceBounds.width, H.canvas.width), N = Math.min(c.sourceBounds.height, H.canvas.height)) : (k = H.canvas.width, N = H.canvas.height), h.translate(T.x + C.x / 2, 0), c.flipped && h.scale(-1, 1), h.drawImage(H.canvas, 0, 0, k, N, -C.x / 2, T.y, C.x, C.y), h.restore();
          }
          _getContext(c) {
            var h = this.context;
            if (c) {
              if (this.sketchCanvas === null) {
                this.sketchCanvas = document.createElement("canvas");
                var f = this._calculateSketchCanvasSize();
                if (this.sketchCanvas.width = f.x, this.sketchCanvas.height = f.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
                  var m = this;
                  this.viewer.addHandler("rotate", function v() {
                    if (m.viewport.getRotation() !== 0) {
                      m.viewer.removeHandler("rotate", v);
                      var y = m._calculateSketchCanvasSize();
                      m.sketchCanvas.width = y.x, m.sketchCanvas.height = y.y;
                    }
                  });
                }
                this._updateImageSmoothingEnabled(this.sketchContext);
              }
              h = this.sketchContext;
            }
            return h;
          }
          _saveContext(c) {
            this._getContext(c).save();
          }
          _restoreContext(c) {
            this._getContext(c).restore();
          }
          _setClip(c, h) {
            var f = this._getContext(h);
            f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip();
          }
          _drawRectangle(c, h, f) {
            var m = this._getContext(f);
            m.save(), m.fillStyle = h, m.fillRect(c.x, c.y, c.width, c.height), m.restore();
          }
          blendSketch(c, h, f, m) {
            var v = c;
            e.isPlainObject(v) || (v = { opacity: c, scale: h, translate: f, compositeOperation: m }), c = v.opacity, m = v.compositeOperation;
            var y = v.bounds;
            if (this.context.save(), this.context.globalAlpha = c, m && (this.context.globalCompositeOperation = m), y) y.x < 0 && (y.width += y.x, y.x = 0), y.x + y.width > this.canvas.width && (y.width = this.canvas.width - y.x), y.y < 0 && (y.height += y.y, y.y = 0), y.y + y.height > this.canvas.height && (y.height = this.canvas.height - y.y), this.context.drawImage(this.sketchCanvas, y.x, y.y, y.width, y.height, y.x, y.y, y.width, y.height);
            else {
              h = v.scale || 1, f = v.translate;
              var x = f instanceof e.Point ? f : new e.Point(0, 0), T = 0, C = 0;
              if (f) {
                var H = this.sketchCanvas.width - this.canvas.width, k = this.sketchCanvas.height - this.canvas.height;
                T = Math.round(H / 2), C = Math.round(k / 2);
              }
              this.context.drawImage(this.sketchCanvas, x.x - T * h, x.y - C * h, (this.canvas.width + 2 * T) * h, (this.canvas.height + 2 * C) * h, -T, -C, this.canvas.width + 2 * T, this.canvas.height + 2 * C);
            }
            this.context.restore();
          }
          _drawDebugInfoOnTile(c, h, f, m) {
            var v = this.viewer.world.getIndexOfItem(m) % this.debugGridColor.length, y = this.context;
            y.save(), y.lineWidth = 2 * e.pixelDensityRatio, y.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", y.strokeStyle = this.debugGridColor[v], y.fillStyle = this.debugGridColor[v], this._setRotations(m), this._viewportFlipped && this._flip({ point: c.position.plus(c.size.divide(2)) }), y.strokeRect(c.position.x * e.pixelDensityRatio, c.position.y * e.pixelDensityRatio, c.size.x * e.pixelDensityRatio, c.size.y * e.pixelDensityRatio);
            var x = (c.position.x + c.size.x / 2) * e.pixelDensityRatio, T = (c.position.y + c.size.y / 2) * e.pixelDensityRatio;
            y.translate(x, T);
            const C = this.viewport.getRotation(true);
            y.rotate(Math.PI / 180 * -C), y.translate(-x, -T), c.x === 0 && c.y === 0 && (y.fillText("Zoom: " + this.viewport.getZoom(), c.position.x * e.pixelDensityRatio, (c.position.y - 30) * e.pixelDensityRatio), y.fillText("Pan: " + this.viewport.getBounds().toString(), c.position.x * e.pixelDensityRatio, (c.position.y - 20) * e.pixelDensityRatio)), y.fillText("Level: " + c.level, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 20) * e.pixelDensityRatio), y.fillText("Column: " + c.x, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 30) * e.pixelDensityRatio), y.fillText("Row: " + c.y, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 40) * e.pixelDensityRatio), y.fillText("Order: " + f + " of " + h, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 50) * e.pixelDensityRatio), y.fillText("Size: " + c.size.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 60) * e.pixelDensityRatio), y.fillText("Position: " + c.position.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), m.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), y.restore();
          }
          _updateImageSmoothingEnabled(c) {
            c.msImageSmoothingEnabled = this._imageSmoothingEnabled, c.imageSmoothingEnabled = this._imageSmoothingEnabled;
          }
          _getCanvasSize(c) {
            var h = this._getContext(c).canvas;
            return new e.Point(h.width, h.height);
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _setRotations(c, h = false) {
            var f = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), useSketch: h, saveContext: f }), f = false), c.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: c.getRotation(true), point: this.viewport.pixelFromPointNoRotate(c._getRotationPoint(true), true), useSketch: h, saveContext: f });
          }
          _offsetForRotation(c) {
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.save(), f.translate(h.x, h.y), f.rotate(Math.PI / 180 * c.degrees), f.translate(-h.x, -h.y);
          }
          _flip(c) {
            c = c || {};
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.translate(h.x, 0), f.scale(-1, 1), f.translate(-h.x, 0);
          }
          _restoreRotationChanges(c) {
            var h = this._getContext(c);
            h.restore();
          }
          _calculateCanvasSize() {
            var c = e.pixelDensityRatio, h = this.viewport.getContainerSize();
            return { x: Math.round(h.x * c), y: Math.round(h.y * c) };
          }
          _calculateSketchCanvasSize() {
            var c = this._calculateCanvasSize();
            if (this.viewport.getRotation() === 0) return c;
            var h = Math.ceil(Math.sqrt(c.x * c.x + c.y * c.y));
            return { x: h, y: h };
          }
        }
        e.CanvasDrawer = r;
        var s = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        function o(u) {
          return u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        }
        function l(u) {
          return o(u) ? s : u;
        }
        function a(u) {
          if (typeof u == "number") return l(u);
          if (!u || !e.Browser) return s;
          var c = u[e.Browser.vendor];
          return o(c) && (c = u["*"]), l(c);
        }
      })(i), (function(e) {
        const n = e;
        n.WebGLDrawer = class extends n.DrawerBase {
          constructor(s) {
            super(s), this._destroyed = false, this._TextureMap = /* @__PURE__ */ new Map(), this._TileMap = /* @__PURE__ */ new Map(), this._gl = null, this._firstPass = null, this._secondPass = null, this._glFrameBuffer = null, this._renderToTexture = null, this._glFramebufferToCanvasTransform = null, this._outputCanvas = null, this._outputContext = null, this._clippingCanvas = null, this._clippingContext = null, this._renderingCanvas = null, this._backupCanvasDrawer = null, this._imageSmoothingEnabled = true, this._boundToTileReady = (o) => this._tileReadyHandler(o), this._boundToImageUnloaded = (o) => this._imageUnloadedHandler(o), this.viewer.addHandler("tile-ready", this._boundToTileReady), this.viewer.addHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.rejectEventHandler("tile-drawn", "The WebGLDrawer does not raise the tile-drawn event"), this.viewer.rejectEventHandler("tile-drawing", "The WebGLDrawer does not raise the tile-drawing event"), this._setupCanvases(), this._setupRenderer(), this.context = this._outputContext;
          }
          destroy() {
            if (this._destroyed) return;
            let s = this._gl;
            var o = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS);
            for (let a = 0; a < o; ++a) s.activeTexture(s.TEXTURE0 + a), s.bindTexture(s.TEXTURE_2D, null), s.bindTexture(s.TEXTURE_CUBE_MAP, null);
            s.bindBuffer(s.ARRAY_BUFFER, null), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, null), s.bindRenderbuffer(s.RENDERBUFFER, null), s.bindFramebuffer(s.FRAMEBUFFER, null), this._unloadTextures(), s.deleteBuffer(this._secondPass.bufferOutputPosition), s.deleteFramebuffer(this._glFrameBuffer), this._renderingCanvas.width = this._renderingCanvas.height = 1, this._clippingCanvas.width = this._clippingCanvas.height = 1, this._outputCanvas.width = this._outputCanvas.height = 1, this._renderingCanvas = null, this._clippingCanvas = this._clippingContext = null, this._outputCanvas = this._outputContext = null;
            let l = s.getExtension("WEBGL_lose_context");
            l && l.loseContext(), this.viewer.removeHandler("tile-ready", this._boundToTileReady), this.viewer.removeHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.removeHandler("resize", this._resizeHandler), this._gl = null, this._backupCanvasDrawer && (this._backupCanvasDrawer.destroy(), this._backupCanvasDrawer = null), this.container.removeChild(this.canvas), this.viewer.drawer === this && (this.viewer.drawer = null), this._destroyed = true;
          }
          canRotate() {
            return true;
          }
          static isSupported() {
            let s = document.createElement("canvas"), o = e.isFunction(s.getContext) && s.getContext("webgl"), l = o && o.getExtension("WEBGL_lose_context");
            return l && l.loseContext(), !!o;
          }
          getType() {
            return "webgl";
          }
          minimumOverlapRequired(s) {
            return s.isTainted();
          }
          _createDrawingElement() {
            let s = e.makeNeutralElement("canvas"), o = this._calculateCanvasSize();
            return s.width = o.x, s.height = o.y, s;
          }
          _getBackupCanvasDrawer() {
            return this._backupCanvasDrawer || (this._backupCanvasDrawer = this.viewer.requestDrawer("canvas", { mainDrawer: false }), this._backupCanvasDrawer.canvas.style.setProperty("visibility", "hidden")), this._backupCanvasDrawer;
          }
          draw(s) {
            let o = this._gl;
            const l = this.viewport.getBoundsNoRotateWithMargins(true);
            let a = { bounds: l, center: new n.Point(l.x + l.width / 2, l.y + l.height / 2), rotation: this.viewport.getRotation(true) * Math.PI / 180 }, u = this.viewport.flipped ? -1 : 1, c = e.Mat3.makeTranslation(-a.center.x, -a.center.y), h = e.Mat3.makeScaling(2 / a.bounds.width * u, -2 / a.bounds.height), f = e.Mat3.makeRotation(-a.rotation), m = h.multiply(f).multiply(c);
            o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), this._outputContext.clearRect(0, 0, this._outputCanvas.width, this._outputCanvas.height);
            let v = false;
            s.forEach((y, x) => {
              if (y.isTainted()) {
                v && (this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), v = false);
                const T = this._getBackupCanvasDrawer();
                T.draw([y]), this._outputContext.drawImage(T.canvas, 0, 0);
              } else {
                let T = y.getTilesToDraw();
                if (y.placeholderFillStyle && y._hasOpaqueTile === false && this._drawPlaceholder(y), T.length === 0 || y.getOpacity() === 0) return;
                let C = T[0], H = y.compositeOperation || this.viewer.compositeOperation || y._clip || y._croppingPolygons || y.debugMode, k = H || y.opacity < 1 || C.hasTransparency;
                H && (v && this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), o.useProgram(this._firstPass.shaderProgram), k ? (o.bindFramebuffer(o.FRAMEBUFFER, this._glFrameBuffer), o.clear(o.COLOR_BUFFER_BIT)) : o.bindFramebuffer(o.FRAMEBUFFER, null);
                let N = m, Y = y.getRotation(true);
                if (Y % 360 !== 0) {
                  let j = e.Mat3.makeRotation(-Y * Math.PI / 180), ne = y.getBoundsNoRotate(true).getCenter(), he = e.Mat3.makeTranslation(ne.x, ne.y), ye = e.Mat3.makeTranslation(-ne.x, -ne.y), me = he.multiply(j).multiply(ye);
                  N = m.multiply(me);
                }
                let K = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
                if (K <= 0) throw new Error(`WegGL error: bad value for gl parameter MAX_TEXTURE_IMAGE_UNITS (${K}). This could happen
                        if too many contexts have been created and not released, or there is another problem with the graphics card.`);
                let q = new Float32Array(K * 12), ee = new Array(K), ce = new Array(K), te = new Array(K);
                for (let j = 0; j < T.length; j++) {
                  let ne = T[j].tile, he = j % K, ye = he + 1, me = ne.getCanvasContext(), pe = me ? this._TextureMap.get(me.canvas) : null;
                  if (pe || (this._tileReadyHandler({ tile: ne, tiledImage: y }), pe = me ? this._TextureMap.get(me.canvas) : null), pe && this._getTileData(ne, y, pe, N, he, q, ee, ce, te), ye === K || j === T.length - 1) {
                    for (let ae = 0; ae <= ye; ae++) o.activeTexture(o.TEXTURE0 + ae), o.bindTexture(o.TEXTURE_2D, ee[ae]);
                    o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.bufferData(o.ARRAY_BUFFER, q, o.DYNAMIC_DRAW), ce.forEach((ae, Ae) => {
                      o.uniformMatrix3fv(this._firstPass.uTransformMatrices[Ae], false, ae);
                    }), o.uniform1fv(this._firstPass.uOpacities, new Float32Array(te)), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), o.vertexAttribPointer(this._firstPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.vertexAttribPointer(this._firstPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferIndex), o.vertexAttribPointer(this._firstPass.aIndex, 1, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6 * ye);
                  }
                }
                k && (o.useProgram(this._secondPass.shaderProgram), o.bindFramebuffer(o.FRAMEBUFFER, null), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, this._renderToTexture), this._gl.uniform1f(this._secondPass.uOpacityMultiplier, y.opacity), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), o.vertexAttribPointer(this._secondPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), o.vertexAttribPointer(this._secondPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6)), v = true, H && (this._applyContext2dPipeline(y, T, x), v = false, o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), x === 0 && this._raiseTiledImageDrawnEvent(y, T.map((j) => j.tile));
              }
            }), v && this._outputContext.drawImage(this._renderingCanvas, 0, 0);
          }
          setImageSmoothingEnabled(s) {
            this._imageSmoothingEnabled !== s && (this._imageSmoothingEnabled = s, this._unloadTextures(), this.viewer.world.draw());
          }
          drawDebuggingRect(s) {
            let o = this._outputContext;
            o.save(), o.lineWidth = 2 * e.pixelDensityRatio, o.strokeStyle = this.debugGridColor[0], o.fillStyle = this.debugGridColor[0], o.strokeRect(s.x * e.pixelDensityRatio, s.y * e.pixelDensityRatio, s.width * e.pixelDensityRatio, s.height * e.pixelDensityRatio), o.restore();
          }
          _getTextureDataFromTile(s) {
            return s.getCanvasContext().canvas;
          }
          _applyContext2dPipeline(s, o, l) {
            if (this._outputContext.save(), this._outputContext.globalCompositeOperation = l === 0 ? null : s.compositeOperation || this.viewer.compositeOperation, s._croppingPolygons || s._clip ? (this._renderToClippingCanvas(s), this._outputContext.drawImage(this._clippingCanvas, 0, 0)) : this._outputContext.drawImage(this._renderingCanvas, 0, 0), this._outputContext.restore(), s.debugMode) {
              const a = this.viewer.viewport.getFlip();
              a && this._flip(), this._drawDebugInfo(o, s, a), a && this._flip();
            }
          }
          _getTileData(s, o, l, a, u, c, h, f, m) {
            let v = l.texture, y = l.position;
            c.set(y, u * 12);
            let x = this._calculateOverlapFraction(s, o), T = s.positionedBounds.width * x.x, C = s.positionedBounds.height * x.y, H = s.positionedBounds.x + (s.x === 0 ? 0 : T), k = s.positionedBounds.y + (s.y === 0 ? 0 : C), N = s.positionedBounds.x + s.positionedBounds.width - (s.isRightMost ? 0 : T), Y = s.positionedBounds.y + s.positionedBounds.height - (s.isBottomMost ? 0 : C), K = N - H, q = Y - k, ee = new e.Mat3([K, 0, 0, 0, q, 0, H, k, 1]);
            if (s.flipped) {
              let te = e.Mat3.makeTranslation(0.5, 0), j = e.Mat3.makeTranslation(-0.5, 0), ne = te.multiply(e.Mat3.makeScaling(-1, 1)).multiply(j);
              ee = ee.multiply(ne);
            }
            let ce = a.multiply(ee);
            m[u] = s.opacity, h[u] = v, f[u] = ce.values;
          }
          _textureFilter() {
            return this._imageSmoothingEnabled ? this._gl.LINEAR : this._gl.NEAREST;
          }
          _setupRenderer() {
            let s = this._gl;
            s || e.console.error("_setupCanvases must be called before _setupRenderer"), this._unitQuad = this._makeQuadVertexBuffer(0, 1, 0, 1), this._makeFirstPassShaderProgram(), this._makeSecondPassShaderProgram(), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this._renderingCanvas.width, this._renderingCanvas.height, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), this._glFrameBuffer = s.createFramebuffer(), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA);
          }
          _makeFirstPassShaderProgram() {
            let s = this._glNumTextures = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), o = () => [...Array(s).keys()].map((v) => `uniform mat3 u_matrix_${v};`).join(`
`), l = () => [...Array(s).keys()].map((v) => `${v > 0 ? "else " : ""}if(int(a_index) == ${v}) { transform_matrix = u_matrix_${v}; }`).join(`
`);
            const a = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;
            attribute float a_index;

            ${o()} // create a uniform mat3 for each potential tile to draw

            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {

                mat3 transform_matrix; // value will be set by the if/elses in makeConditional()

                ${l()}

                gl_Position = vec4(transform_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
                v_image_index = a_index;
            }
            `, u = `
            precision mediump float;

            // our textures
            uniform sampler2D u_images[${s}];
            // our opacities
            uniform float u_opacities[${s}];

            // the varyings passed in from the vertex shader.
            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {
                // can't index directly with a variable, need to use a loop iterator hack
                for(int i = 0; i < ${s}; ++i){
                    if(i == int(v_image_index)){
                        gl_FragColor = texture2D(u_images[i], v_texture_position) * u_opacities[i];
                    }
                }
            }
            `;
            let c = this._gl, h = this.constructor.initShaderProgram(c, a, u);
            c.useProgram(h), this._firstPass = { shaderProgram: h, aOutputPosition: c.getAttribLocation(h, "a_output_position"), aTexturePosition: c.getAttribLocation(h, "a_texture_position"), aIndex: c.getAttribLocation(h, "a_index"), uTransformMatrices: [...Array(this._glNumTextures).keys()].map((v) => c.getUniformLocation(h, `u_matrix_${v}`)), uImages: c.getUniformLocation(h, "u_images"), uOpacities: c.getUniformLocation(h, "u_opacities"), bufferOutputPosition: c.createBuffer(), bufferTexturePosition: c.createBuffer(), bufferIndex: c.createBuffer() }, c.uniform1iv(this._firstPass.uImages, [...Array(s).keys()]);
            let f = new Float32Array(s * 12);
            for (let v = 0; v < s; ++v) f.set(Float32Array.from(this._unitQuad), v * 12);
            c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), c.bufferData(c.ARRAY_BUFFER, f, c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aOutputPosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), c.enableVertexAttribArray(this._firstPass.aTexturePosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferIndex);
            let m = [...Array(this._glNumTextures).keys()].map((v) => Array(6).fill(v)).flat();
            c.bufferData(c.ARRAY_BUFFER, new Float32Array(m), c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aIndex);
          }
          _makeSecondPassShaderProgram() {
            const s = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;

            uniform mat3 u_matrix;

            varying vec2 v_texture_position;

            void main() {
                gl_Position = vec4(u_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
            }
            `, o = `
            precision mediump float;

            // our texture
            uniform sampler2D u_image;

            // the texCoords passed in from the vertex shader.
            varying vec2 v_texture_position;

            // the opacity multiplier for the image
            uniform float u_opacity_multiplier;

            void main() {
                gl_FragColor = texture2D(u_image, v_texture_position);
                gl_FragColor *= u_opacity_multiplier;
            }
            `;
            let l = this._gl, a = this.constructor.initShaderProgram(l, s, o);
            l.useProgram(a), this._secondPass = { shaderProgram: a, aOutputPosition: l.getAttribLocation(a, "a_output_position"), aTexturePosition: l.getAttribLocation(a, "a_texture_position"), uMatrix: l.getUniformLocation(a, "u_matrix"), uImage: l.getUniformLocation(a, "u_image"), uOpacityMultiplier: l.getUniformLocation(a, "u_opacity_multiplier"), bufferOutputPosition: l.createBuffer(), bufferTexturePosition: l.createBuffer() }, l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.STATIC_DRAW), l.enableVertexAttribArray(this._secondPass.aOutputPosition), l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.DYNAMIC_DRAW), l.enableVertexAttribArray(this._secondPass.aTexturePosition);
            let u = e.Mat3.makeScaling(2, 2).multiply(e.Mat3.makeTranslation(-0.5, -0.5));
            l.uniformMatrix3fv(this._secondPass.uMatrix, false, u.values);
          }
          _resizeRenderer() {
            let s = this._gl, o = this._renderingCanvas.width, l = this._renderingCanvas.height;
            s.viewport(0, 0, o, l), s.deleteTexture(this._renderToTexture), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, o, l, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0);
          }
          _setupCanvases() {
            let s = this;
            this._outputCanvas = this.canvas, this._outputContext = this._outputCanvas.getContext("2d"), this._renderingCanvas = document.createElement("canvas"), this._clippingCanvas = document.createElement("canvas"), this._clippingContext = this._clippingCanvas.getContext("2d"), this._renderingCanvas.width = this._clippingCanvas.width = this._outputCanvas.width, this._renderingCanvas.height = this._clippingCanvas.height = this._outputCanvas.height, this._gl = this._renderingCanvas.getContext("webgl"), this._resizeHandler = function() {
              s._outputCanvas !== s.viewer.drawer.canvas && (s._outputCanvas.style.width = s.viewer.drawer.canvas.clientWidth + "px", s._outputCanvas.style.height = s.viewer.drawer.canvas.clientHeight + "px");
              let o = s._calculateCanvasSize();
              (s._outputCanvas.width !== o.x || s._outputCanvas.height !== o.y) && (s._outputCanvas.width = o.x, s._outputCanvas.height = o.y), s._renderingCanvas.style.width = s._outputCanvas.clientWidth + "px", s._renderingCanvas.style.height = s._outputCanvas.clientHeight + "px", s._renderingCanvas.width = s._clippingCanvas.width = s._outputCanvas.width, s._renderingCanvas.height = s._clippingCanvas.height = s._outputCanvas.height, s._resizeRenderer();
            }, this.viewer.addHandler("resize", this._resizeHandler);
          }
          _makeQuadVertexBuffer(s, o, l, a) {
            return new Float32Array([s, a, o, a, s, l, s, l, o, a, o, l]);
          }
          _tileReadyHandler(s) {
            let o = s.tile, l = s.tiledImage;
            if (l.isTainted()) return;
            let a = o.getCanvasContext(), u = a && a.canvas;
            if (!u || e.isCanvasTainted(u)) {
              l.isTainted() || (l.setTainted(true), e.console.warn("WebGL cannot be used to draw this TiledImage because it has tainted data. Does crossOriginPolicy need to be set?"), this._raiseDrawerErrorEvent(l, "Tainted data cannot be used by the WebGLDrawer. Falling back to CanvasDrawer for this TiledImage."));
              return;
            }
            if (!this._TextureMap.get(u)) {
              let h = this._gl, f = h.createTexture(), m, v = l.source.tileOverlap, y, x;
              if (o.sourceBounds ? (y = Math.min(o.sourceBounds.width, u.width) / u.width, x = Math.min(o.sourceBounds.height, u.height) / u.height) : (y = 1, x = 1), v > 0) {
                let C = this._calculateOverlapFraction(o, l), H = (o.x === 0 ? 0 : C.x) * y, k = (o.y === 0 ? 0 : C.y) * x, N = (o.isRightMost ? 1 : 1 - C.x) * y, Y = (o.isBottomMost ? 1 : 1 - C.y) * x;
                m = this._makeQuadVertexBuffer(H, N, k, Y);
              } else y === 1 && x === 1 ? m = this._unitQuad : m = this._makeQuadVertexBuffer(0, y, 0, x);
              let T = { texture: f, position: m };
              this._TextureMap.set(u, T), h.activeTexture(h.TEXTURE0), h.bindTexture(h.TEXTURE_2D, f), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this._textureFilter()), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this._textureFilter()), this._uploadImageData(a);
            }
          }
          _calculateOverlapFraction(s, o) {
            let l = o.source.tileOverlap, a = s.sourceBounds.width, u = s.sourceBounds.height, c = (s.x === 0 ? 0 : l) + (s.isRightMost ? 0 : l), h = (s.y === 0 ? 0 : l) + (s.isBottomMost ? 0 : l), f = l / (a + c), m = l / (u + h);
            return { x: f, y: m };
          }
          _unloadTextures() {
            Array.from(this._TextureMap.keys()).forEach((o) => {
              this._cleanupImageData(o);
            });
          }
          _uploadImageData(s) {
            let o = this._gl, l = s.canvas;
            try {
              if (!l) throw s;
              o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, l);
            } catch (a) {
              e.console.error("Error uploading image data to WebGL", a);
            }
          }
          _imageUnloadedHandler(s) {
            let o = s.context2D.canvas;
            this._cleanupImageData(o);
          }
          _cleanupImageData(s) {
            let o = this._TextureMap.get(s);
            this._TextureMap.delete(s), o && this._gl.deleteTexture(o.texture);
          }
          _setClip() {
          }
          _renderToClippingCanvas(s) {
            if (this._clippingContext.clearRect(0, 0, this._clippingCanvas.width, this._clippingCanvas.height), this._clippingContext.save(), this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            if (s._clip) {
              let l = [{ x: s._clip.x, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y + s._clip.height }, { x: s._clip.x, y: s._clip.y + s._clip.height }].map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              });
              this._clippingContext.beginPath(), l.forEach((a, u) => {
                this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
              }), this._clippingContext.clip(), this._setClip();
            }
            if (s._croppingPolygons) {
              let o = s._croppingPolygons.map((l) => l.map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              }));
              this._clippingContext.beginPath(), o.forEach((l) => {
                l.forEach((a, u) => {
                  this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
                });
              }), this._clippingContext.clip();
            }
            if (this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            this._clippingContext.drawImage(this._renderingCanvas, 0, 0), this._clippingContext.restore();
          }
          _setRotations(s) {
            var o = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), saveContext: o }), o = false), s.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: s.getRotation(true), point: this.viewport.pixelFromPointNoRotate(s._getRotationPoint(true), true), saveContext: o });
          }
          _offsetForRotation(s) {
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.save(), l.translate(o.x, o.y), l.rotate(Math.PI / 180 * s.degrees), l.translate(-o.x, -o.y);
          }
          _flip(s) {
            s = s || {};
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.translate(o.x, 0), l.scale(-1, 1), l.translate(-o.x, 0);
          }
          _drawDebugInfo(s, o, l) {
            for (var a = s.length - 1; a >= 0; a--) {
              var u = s[a].tile;
              try {
                this._drawDebugInfoOnTile(u, s.length, a, o, l);
              } catch (c) {
                e.console.error(c);
              }
            }
          }
          _drawDebugInfoOnTile(s, o, l, a, u) {
            var c = this.viewer.world.getIndexOfItem(a) % this.debugGridColor.length, h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", h.strokeStyle = this.debugGridColor[c], h.fillStyle = this.debugGridColor[c], this._setRotations(a), u && this._flip({ point: s.position.plus(s.size.divide(2)) }), h.strokeRect(s.position.x * e.pixelDensityRatio, s.position.y * e.pixelDensityRatio, s.size.x * e.pixelDensityRatio, s.size.y * e.pixelDensityRatio);
            var f = (s.position.x + s.size.x / 2) * e.pixelDensityRatio, m = (s.position.y + s.size.y / 2) * e.pixelDensityRatio;
            h.translate(f, m);
            const v = this.viewport.getRotation(true);
            h.rotate(Math.PI / 180 * -v), h.translate(-f, -m), s.x === 0 && s.y === 0 && (h.fillText("Zoom: " + this.viewport.getZoom(), s.position.x * e.pixelDensityRatio, (s.position.y - 30) * e.pixelDensityRatio), h.fillText("Pan: " + this.viewport.getBounds().toString(), s.position.x * e.pixelDensityRatio, (s.position.y - 20) * e.pixelDensityRatio)), h.fillText("Level: " + s.level, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 20) * e.pixelDensityRatio), h.fillText("Column: " + s.x, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 30) * e.pixelDensityRatio), h.fillText("Row: " + s.y, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 40) * e.pixelDensityRatio), h.fillText("Order: " + l + " of " + o, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 50) * e.pixelDensityRatio), h.fillText("Size: " + s.size.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 60) * e.pixelDensityRatio), h.fillText("Position: " + s.position.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), a.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), h.restore();
          }
          _drawPlaceholder(s) {
            const o = s.getBounds(true), l = this.viewportToDrawerRectangle(s.getBounds(true)), a = this._outputContext;
            let u;
            typeof s.placeholderFillStyle == "function" ? u = s.placeholderFillStyle(s, a) : u = s.placeholderFillStyle, this._offsetForRotation({ degrees: this.viewer.viewport.getRotation(true) }), a.fillStyle = u, a.translate(l.x, l.y), a.rotate(Math.PI / 180 * o.degrees), a.translate(-l.x, -l.y), a.fillRect(l.x, l.y, l.width, l.height), this._restoreRotationChanges();
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _restoreRotationChanges() {
            var s = this._outputContext;
            s.restore();
          }
          static initShaderProgram(s, o, l) {
            function a(f, m, v) {
              const y = f.createShader(m);
              return f.shaderSource(y, v), f.compileShader(y), f.getShaderParameter(y, f.COMPILE_STATUS) ? y : (e.console.error(`An error occurred compiling the shaders: ${f.getShaderInfoLog(y)}`), f.deleteShader(y), null);
            }
            const u = a(s, s.VERTEX_SHADER, o), c = a(s, s.FRAGMENT_SHADER, l), h = s.createProgram();
            return s.attachShader(h, u), s.attachShader(h, c), s.linkProgram(h), s.getProgramParameter(h, s.LINK_STATUS) ? h : (e.console.error(`Unable to initialize the shader program: ${s.getProgramInfoLog(h)}`), null);
          }
        };
      })(i), (function(e) {
        e.Viewport = function(n) {
          var r = arguments;
          r.length && r[0] instanceof e.Point && (n = { containerSize: r[0], contentSize: r[1], config: r[2] }), n.config && (e.extend(true, n, n.config), delete n.config), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n.margins || {}), delete n.margins, n.initialDegrees = n.degrees, delete n.degrees, e.extend(true, this, { containerSize: null, contentSize: null, zoomPoint: null, rotationPivot: null, viewer: null, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio, visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel, minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel, maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel, initialDegrees: e.DEFAULT_SETTINGS.degrees, flipped: e.DEFAULT_SETTINGS.flipped, homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer, silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings }, n), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.centerSpringY = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.zoomSpring = new e.Spring({ exponential: true, initial: 1, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.degreesSpring = new e.Spring({ initial: n.initialDegrees, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(true), this.update();
        }, e.Viewport.prototype = { get degrees() {
          return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."), this.getRotation();
        }, set degrees(n) {
          e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."), this.rotateTo(n);
        }, resetContentSize: function(n) {
          return e.console.assert(n, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(n instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(n.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(n.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, n.y / n.x), n.x), this;
        }, setHomeBounds: function(n, r) {
          e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(n, r);
        }, _setContentBounds: function(n, r) {
          e.console.assert(n, "[Viewport._setContentBounds] bounds is required"), e.console.assert(n instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(n.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(n.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = n.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(r), this._contentBounds = n.rotate(this.getRotation()).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(r), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", { contentSize: this._contentSizeNoRotate.clone(), contentFactor: r, homeBounds: this._contentBoundsNoRotate.clone(), contentBounds: this._contentBounds.clone() });
        }, getHomeZoom: function() {
          if (this.defaultZoomLevel) return this.defaultZoomLevel;
          var n = this._contentAspectRatio / this.getAspectRatio(), r;
          return this.homeFillsViewer ? r = n >= 1 ? n : 1 : r = n >= 1 ? 1 : n, r / this._contentBounds.width;
        }, getHomeBounds: function() {
          return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
        }, getHomeBoundsNoRotate: function() {
          var n = this._contentBounds.getCenter(), r = 1 / this.getHomeZoom(), s = r / this.getAspectRatio();
          return new e.Rect(n.x - r / 2, n.y - s / 2, r, s);
        }, goHome: function(n) {
          return this.viewer && this.viewer.raiseEvent("home", { immediately: n }), this.fitBounds(this.getHomeBounds(), n);
        }, getMinZoom: function() {
          var n = this.getHomeZoom(), r = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * n;
          return r;
        }, getMaxZoom: function() {
          var n = this.maxZoomLevel;
          return n || (n = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, n /= this._contentBounds.width), Math.max(n, this.getHomeZoom());
        }, getAspectRatio: function() {
          return this._containerInnerSize.x / this._containerInnerSize.y;
        }, getContainerSize: function() {
          return new e.Point(this.containerSize.x, this.containerSize.y);
        }, getMargins: function() {
          return e.extend({}, this._margins);
        }, setMargins: function(n) {
          e.console.assert(e.type(n) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(-this.getRotation(n));
        }, getBoundsNoRotate: function(n) {
          var r = this.getCenter(n), s = 1 / this.getZoom(n), o = s / this.getAspectRatio();
          return new e.Rect(r.x - s / 2, r.y - o / 2, s, o);
        }, getBoundsWithMargins: function(n) {
          return this.getBoundsNoRotateWithMargins(n).rotate(-this.getRotation(n), this.getCenter(n));
        }, getBoundsNoRotateWithMargins: function(n) {
          var r = this.getBoundsNoRotate(n), s = this._containerInnerSize.x * this.getZoom(n);
          return r.x -= this._margins.left / s, r.y -= this._margins.top / s, r.width += (this._margins.left + this._margins.right) / s, r.height += (this._margins.top + this._margins.bottom) / s, r;
        }, getCenter: function(n) {
          var r = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value), s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value), o, l, a, u, c, h, f, m;
          return n ? r : this.zoomPoint ? (o = this.pixelFromPoint(this.zoomPoint, true), l = this.getZoom(), a = 1 / l, u = a / this.getAspectRatio(), c = new e.Rect(r.x - a / 2, r.y - u / 2, a, u), h = this._pixelFromPoint(this.zoomPoint, c), f = h.minus(o).rotate(-this.getRotation(true)), m = f.divide(this._containerInnerSize.x * l), s.plus(m)) : s;
        }, getZoom: function(n) {
          return n ? this.zoomSpring.current.value : this.zoomSpring.target.value;
        }, _applyZoomConstraints: function(n) {
          return Math.max(Math.min(n, this.getMaxZoom()), this.getMinZoom());
        }, _applyBoundaryConstraints: function(n) {
          var r = this.viewportToViewerElementRectangle(n).getBoundingBox(), s = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox(), o = false, l = false;
          if (!this.wrapHorizontal) {
            var a = r.x + r.width, u = s.x + s.width, c, h, f;
            r.width > s.width ? c = this.visibilityRatio * s.width : c = this.visibilityRatio * r.width, h = s.x - a + c, f = u - r.x - c, c > s.width ? (r.x += (h + f) / 2, o = true) : f < 0 ? (r.x += f, o = true) : h > 0 && (r.x += h, o = true);
          }
          if (!this.wrapVertical) {
            var m = r.y + r.height, v = s.y + s.height, y, x, T;
            r.height > s.height ? y = this.visibilityRatio * s.height : y = this.visibilityRatio * r.height, x = s.y - m + y, T = v - r.y - y, y > s.height ? (r.y += (x + T) / 2, l = true) : T < 0 ? (r.y += T, l = true) : x > 0 && (r.y += x, l = true);
          }
          var C = o || l, H = C ? this.viewerElementToViewportRectangle(r) : n.clone();
          return H.xConstrained = o, H.yConstrained = l, H.constraintApplied = C, H;
        }, _raiseConstraintsEvent: function(n) {
          this.viewer && this.viewer.raiseEvent("constrain", { immediately: n });
        }, applyConstraints: function(n) {
          var r = this.getZoom(), s = this._applyZoomConstraints(r);
          r !== s && this.zoomTo(s, this.zoomPoint, n);
          var o = this.getConstrainedBounds(false);
          return o.constraintApplied && (this.fitBounds(o, n), this._raiseConstraintsEvent(n)), this;
        }, ensureVisible: function(n) {
          return this.applyConstraints(n);
        }, _fitBounds: function(n, r) {
          r = r || {};
          var s = r.immediately || false, o = r.constraints || false, l = this.getAspectRatio(), a = n.getCenter(), u = new e.Rect(n.x, n.y, n.width, n.height, n.degrees + this.getRotation()).getBoundingBox();
          u.getAspectRatio() >= l ? u.height = u.width / l : u.width = u.height * l, u.x = a.x - u.width / 2, u.y = a.y - u.height / 2;
          var c = 1 / u.width;
          if (s) return this.panTo(a, true), this.zoomTo(c, null, true), o && this.applyConstraints(true), this;
          var h = this.getCenter(true), f = this.getZoom(true);
          this.panTo(h, true), this.zoomTo(f, null, true);
          var m = this.getBounds(), v = this.getZoom();
          if (v === 0 || Math.abs(c / v - 1) < 1e-8) return this.zoomTo(c, null, true), this.panTo(a, s), o && this.applyConstraints(false), this;
          if (o) {
            this.panTo(a, false), c = this._applyZoomConstraints(c), this.zoomTo(c, null, false);
            var y = this.getConstrainedBounds();
            this.panTo(h, true), this.zoomTo(f, null, true), this.fitBounds(y);
          } else {
            var x = u.rotate(-this.getRotation()), T = x.getTopLeft().times(c).minus(m.getTopLeft().times(v)).divide(c - v);
            this.zoomTo(c, T, s);
          }
          return this;
        }, fitBounds: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: false });
        }, fitBoundsWithConstraints: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: true });
        }, fitVertically: function(n) {
          var r = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
          return this.fitBounds(r, n);
        }, fitHorizontally: function(n) {
          var r = new e.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
          return this.fitBounds(r, n);
        }, getConstrainedBounds: function(n) {
          var r, s;
          return r = this.getBounds(n), s = this._applyBoundaryConstraints(r), s;
        }, panBy: function(n, r) {
          var s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
          return this.panTo(s.plus(n), r);
        }, panTo: function(n, r) {
          return r ? (this.centerSpringX.resetTo(n.x), this.centerSpringY.resetTo(n.y)) : (this.centerSpringX.springTo(n.x), this.centerSpringY.springTo(n.y)), this.viewer && this.viewer.raiseEvent("pan", { center: n, immediately: r }), this;
        }, zoomBy: function(n, r, s) {
          return this.zoomTo(this.zoomSpring.target.value * n, r, s);
        }, zoomTo: function(n, r, s) {
          var o = this;
          return this.zoomPoint = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s ? this._adjustCenterSpringsForZoomPoint(function() {
            o.zoomSpring.resetTo(n);
          }) : this.zoomSpring.springTo(n), this.viewer && this.viewer.raiseEvent("zoom", { zoom: n, refPoint: r, immediately: s }), this;
        }, setRotation: function(n, r) {
          return this.rotateTo(n, null, r);
        }, getRotation: function(n) {
          return n ? this.degreesSpring.current.value : this.degreesSpring.target.value;
        }, setRotationWithPivot: function(n, r, s) {
          return this.rotateTo(n, r, s);
        }, rotateTo: function(n, r, s) {
          if (!this.viewer || !this.viewer.drawer.canRotate()) return this;
          if (this.degreesSpring.target.value === n && this.degreesSpring.isAtTargetValue()) return this;
          if (this.rotationPivot = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s) if (this.rotationPivot) {
            var o = n - this._oldDegrees;
            if (!o) return this.rotationPivot = null, this;
            this._rotateAboutPivot(n);
          } else this.degreesSpring.resetTo(n);
          else {
            var l = e.positiveModulo(this.degreesSpring.current.value, 360), a = e.positiveModulo(n, 360), u = a - l;
            u > 180 ? a -= 360 : u < -180 && (a += 360);
            var c = l - a;
            this.degreesSpring.resetTo(n + c), this.degreesSpring.springTo(n);
          }
          return this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: n, immediately: !!s, pivot: this.rotationPivot || this.getCenter() }), this;
        }, rotateBy: function(n, r, s) {
          return this.rotateTo(this.degreesSpring.target.value + n, r, s);
        }, resize: function(n, r) {
          var s = this.getBoundsNoRotate(), o = s, l;
          this.containerSize.x = n.x, this.containerSize.y = n.y, this._updateContainerInnerSize(), r && (l = n.x / this.containerSize.x, o.width = s.width * l, o.height = o.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", { newContainerSize: n, maintain: r });
          var a = this.fitBounds(o, true);
          return this.viewer && this.viewer.raiseEvent("after-resize", { newContainerSize: n, maintain: r }), a;
        }, _updateContainerInnerSize: function() {
          this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)));
        }, update: function() {
          var n = this;
          this._adjustCenterSpringsForZoomPoint(function() {
            n.zoomSpring.update();
          }), this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null), this.centerSpringX.update(), this.centerSpringY.update(), this.rotationPivot ? this._rotateAboutPivot(true) : this.degreesSpring.update();
          var r = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
          this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value;
          var s = r || !this.zoomSpring.isAtTargetValue() || !this.centerSpringX.isAtTargetValue() || !this.centerSpringY.isAtTargetValue() || !this.degreesSpring.isAtTargetValue();
          return s;
        }, _rotateAboutPivot: function(n) {
          var r = n === true, s = this.rotationPivot.minus(this.getCenter());
          this.centerSpringX.shiftBy(s.x), this.centerSpringY.shiftBy(s.y), r ? this.degreesSpring.update() : this.degreesSpring.resetTo(n);
          var o = this.degreesSpring.current.value - this._oldDegrees, l = s.rotate(o * -1).times(-1);
          this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y);
        }, _adjustCenterSpringsForZoomPoint: function(n) {
          if (this.zoomPoint) {
            var r = this.pixelFromPoint(this.zoomPoint, true);
            n();
            var s = this.pixelFromPoint(this.zoomPoint, true), o = s.minus(r), l = this.deltaPointsFromPixels(o, true);
            this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
          } else n();
        }, deltaPixelsFromPointsNoRotate: function(n, r) {
          return n.times(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPixelsFromPoints: function(n, r) {
          return this.deltaPixelsFromPointsNoRotate(n.rotate(this.getRotation(r)), r);
        }, deltaPointsFromPixelsNoRotate: function(n, r) {
          return n.divide(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPointsFromPixels: function(n, r) {
          return this.deltaPointsFromPixelsNoRotate(n, r).rotate(-this.getRotation(r));
        }, pixelFromPointNoRotate: function(n, r) {
          return this._pixelFromPointNoRotate(n, this.getBoundsNoRotate(r));
        }, pixelFromPoint: function(n, r) {
          return this._pixelFromPoint(n, this.getBoundsNoRotate(r));
        }, _pixelFromPointNoRotate: function(n, r) {
          return n.minus(r.getTopLeft()).times(this._containerInnerSize.x / r.width).plus(new e.Point(this._margins.left, this._margins.top));
        }, _pixelFromPoint: function(n, r) {
          return this._pixelFromPointNoRotate(n.rotate(this.getRotation(true), this.getCenter(true)), r);
        }, pointFromPixelNoRotate: function(n, r) {
          var s = this.getBoundsNoRotate(r);
          return n.minus(new e.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / s.width).plus(s.getTopLeft());
        }, pointFromPixel: function(n, r) {
          return this.pointFromPixelNoRotate(n, r).rotate(-this.getRotation(r), this.getCenter(r));
        }, _viewportToImageDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n * this._contentSizeNoRotate.x / s, r * this._contentSizeNoRotate.x / s);
        }, viewportToImageCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.viewportToImageCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.viewportToImageCoordinates(n, r, true);
            }
          }
          return this._viewportToImageDelta(n - this._contentBoundsNoRotate.x, r - this._contentBoundsNoRotate.y);
        }, _imageToViewportDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n / this._contentSizeNoRotate.x * s, r / this._contentSizeNoRotate.x * s);
        }, imageToViewportCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.imageToViewportCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.imageToViewportCoordinates(n, r, true);
            }
          }
          var l = this._imageToViewportDelta(n, r);
          return l.x += this._contentBoundsNoRotate.x, l.y += this._contentBoundsNoRotate.y, l;
        }, imageToViewportRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.imageToViewportRectangle(n, r, s, o, true);
            }
          }
          var c = this.imageToViewportCoordinates(l.x, l.y), h = this._imageToViewportDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewportToImageRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.viewportToImageRectangle(n, r, s, o, true);
            }
          }
          var c = this.viewportToImageCoordinates(l.x, l.y), h = this._viewportToImageDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewerElementToViewportCoordinates: function(n) {
          return this.pointFromPixel(n, true);
        }, viewportToViewerElementCoordinates: function(n) {
          return this.pixelFromPoint(n, true);
        }, viewerElementToViewportRectangle: function(n) {
          return e.Rect.fromSummits(this.pointFromPixel(n.getTopLeft(), true), this.pointFromPixel(n.getTopRight(), true), this.pointFromPixel(n.getBottomLeft(), true));
        }, viewportToViewerElementRectangle: function(n) {
          return e.Rect.fromSummits(this.pixelFromPoint(n.getTopLeft(), true), this.pixelFromPoint(n.getTopRight(), true), this.pixelFromPoint(n.getBottomLeft(), true));
        }, windowToViewportCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToViewportCoordinates(r);
        }, viewportToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");
          var r = this.viewportToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewportToImageZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.viewportToImageZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = l / o * a;
          return n * u;
        }, imageToViewportZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image. Instead, use [TiledImage.imageToViewportZoom] for the specific image of interest");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.imageToViewportZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = o / l / a;
          return n * u;
        }, toggleFlip: function() {
          return this.setFlip(!this.getFlip()), this;
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          return this.flipped === n ? this : (this.flipped = n, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: n }), this);
        }, getMaxZoomPixelRatio: function() {
          return this.maxZoomPixelRatio;
        }, setMaxZoomPixelRatio: function(n, r = true, s = false) {
          e.console.assert(!isNaN(n), "[Viewport.setMaxZoomPixelRatio] ratio must be a number"), !isNaN(n) && (this.maxZoomPixelRatio = n, r && this.getZoom() > this.getMaxZoom() && this.applyConstraints(s));
        } };
      })(i), (function(e) {
        e.TiledImage = function(n) {
          this._initialized = false, e.console.assert(n.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(n.drawer, "[TiledImage] options.drawer is required"), e.console.assert(n.viewer, "[TiledImage] options.viewer is required"), e.console.assert(n.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(n.source, "[TiledImage] options.source is required"), e.console.assert(!n.clip || n.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), e.EventSource.call(this), this._tileCache = n.tileCache, delete n.tileCache, this._drawer = n.drawer, delete n.drawer, this._imageLoader = n.imageLoader, delete n.imageLoader, n.clip instanceof e.Rect && (this._clip = n.clip.clone()), delete n.clip;
          var r = n.x || 0;
          delete n.x;
          var s = n.y || 0;
          delete n.y, this.normHeight = n.source.dimensions.y / n.source.dimensions.x, this.contentAspectX = n.source.dimensions.x / n.source.dimensions.y;
          var o = 1;
          n.width ? (o = n.width, delete n.width, n.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete n.height)) : n.height && (o = n.height / this.normHeight, delete n.height);
          var l = n.fitBounds;
          delete n.fitBounds;
          var a = n.fitBoundsPlacement || i.Placement.CENTER;
          delete n.fitBoundsPlacement;
          var u = n.degrees || 0;
          delete n.degrees;
          var c = n.ajaxHeaders;
          delete n.ajaxHeaders, e.extend(true, this, { viewer: null, tilesMatrix: {}, coverage: {}, loadingCoverage: {}, lastDrawn: [], lastResetTime: 0, _needsDraw: true, _needsUpdate: true, _hasOpaqueTile: false, _tilesLoading: 0, _tilesToDraw: [], _lastDrawn: [], _isBlending: false, _wasBlending: false, _isTainted: false, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, immediateRender: e.DEFAULT_SETTINGS.immediateRender, blendTime: e.DEFAULT_SETTINGS.blendTime, alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend, minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio, smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom, iOSDevice: e.DEFAULT_SETTINGS.iOSDevice, debugMode: e.DEFAULT_SETTINGS.debugMode, crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy, ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials, placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle, opacity: e.DEFAULT_SETTINGS.opacity, preload: e.DEFAULT_SETTINGS.preload, compositeOperation: e.DEFAULT_SETTINGS.compositeOperation, subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency, maxTilesPerFrame: e.DEFAULT_SETTINGS.maxTilesPerFrame }, n), this._preload = this.preload, delete this.preload, this._fullyLoaded = false, this._xSpring = new e.Spring({ initial: r, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._ySpring = new e.Spring({ initial: s, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._scaleSpring = new e.Spring({ initial: o, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._degreesSpring = new e.Spring({ initial: u, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._updateForScale(), l && this.fitBounds(l, a, true), this._ownAjaxHeaders = {}, this.setAjaxHeaders(c, false), this._initialized = true;
        }, e.extend(e.TiledImage.prototype, e.EventSource.prototype, { needsDraw: function() {
          return this._needsDraw;
        }, redraw: function() {
          this._needsDraw = true;
        }, getFullyLoaded: function() {
          return this._fullyLoaded;
        }, _setFullyLoaded: function(n) {
          n !== this._fullyLoaded && (this._fullyLoaded = n, this.raiseEvent("fully-loaded-change", { fullyLoaded: this._fullyLoaded }));
        }, reset: function() {
          this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = true;
        }, update: function(n) {
          let r = this._xSpring.update(), s = this._ySpring.update(), o = this._scaleSpring.update(), l = this._degreesSpring.update(), a = r || s || o || l || this._needsUpdate;
          if (a || n || !this._fullyLoaded) {
            let u = this._updateLevelsForViewport();
            this._setFullyLoaded(u);
          }
          return this._needsUpdate = false, a ? (this._updateForScale(), this._raiseBoundsChange(), this._needsDraw = true, true) : false;
        }, setDrawn: function() {
          return this._needsDraw = this._isBlending || this._wasBlending, this._needsDraw;
        }, setTainted(n) {
          this._isTainted = n;
        }, isTainted() {
          return this._isTainted;
        }, destroy: function() {
          this.reset(), this.source.destroy && this.source.destroy(this.viewer);
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getBoundsNoRotate: function(n) {
          return n ? new e.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget);
        }, getWorldBounds: function() {
          return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
        }, getClippedBounds: function(n) {
          var r = this.getBoundsNoRotate(n);
          if (this._clip) {
            var s = n ? this._worldWidthCurrent : this._worldWidthTarget, o = s / this.source.dimensions.x, l = this._clip.times(o);
            r = new e.Rect(r.x + l.x, r.y + l.y, l.width, l.height);
          }
          return r.rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getTileBounds: function(n, r, s) {
          var o = this.source.getNumTiles(n), l = (o.x + r % o.x) % o.x, a = (o.y + s % o.y) % o.y, u = this.source.getTileBounds(n, l, a);
          return this.getFlip() && (u.x = Math.max(0, 1 - u.x - u.width)), u.x += (r - l) / o.x, u.y += this._worldHeightCurrent / this._worldWidthCurrent * ((s - a) / o.y), u;
        }, getContentSize: function() {
          return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
        }, getSizeInWindowCoordinates: function() {
          var n = this.imageToWindowCoordinates(new e.Point(0, 0)), r = this.imageToWindowCoordinates(this.getContentSize());
          return new e.Point(r.x - n.x, r.y - n.y);
        }, _viewportToImageDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n * (this.source.dimensions.x / o), r * (this.source.dimensions.y * this.contentAspectX / o));
        }, viewportToImageCoordinates: function(n, r, s) {
          var o;
          return n instanceof e.Point ? (s = r, o = n) : o = new e.Point(n, r), o = o.rotate(-this.getRotation(s), this._getRotationPoint(s)), s ? this._viewportToImageDelta(o.x - this._xSpring.current.value, o.y - this._ySpring.current.value) : this._viewportToImageDelta(o.x - this._xSpring.target.value, o.y - this._ySpring.target.value);
        }, _imageToViewportDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n / this.source.dimensions.x * o, r / this.source.dimensions.y / this.contentAspectX * o);
        }, imageToViewportCoordinates: function(n, r, s) {
          n instanceof e.Point && (s = r, r = n.y, n = n.x);
          var o = this._imageToViewportDelta(n, r, s);
          return s ? (o.x += this._xSpring.current.value, o.y += this._ySpring.current.value) : (o.x += this._xSpring.target.value, o.y += this._ySpring.target.value), o.rotate(this.getRotation(s), this._getRotationPoint(s));
        }, imageToViewportRectangle: function(n, r, s, o, l) {
          var a = n;
          a instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.imageToViewportCoordinates(a.getTopLeft(), l), c = this._imageToViewportDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees + this.getRotation(l));
        }, viewportToImageRectangle: function(n, r, s, o, l) {
          var a = n;
          n instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.viewportToImageCoordinates(a.getTopLeft(), l), c = this._viewportToImageDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees - this.getRotation(l));
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.viewport.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.viewport.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          var r = n.minus(i.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(i.getElementPosition(this.viewer.element));
        }, _viewportToTiledImageRectangle: function(n) {
          var r = this._scaleSpring.current.value;
          return n = n.rotate(-this.getRotation(true), this._getRotationPoint(true)), new e.Rect((n.x - this._xSpring.current.value) / r, (n.y - this._ySpring.current.value) / r, n.width / r, n.height / r, n.degrees);
        }, viewportToImageZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return r * n;
        }, imageToViewportZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return n / r;
        }, setPosition: function(n, r) {
          var s = this._xSpring.target.value === n.x && this._ySpring.target.value === n.y;
          if (r) {
            if (s && this._xSpring.current.value === n.x && this._ySpring.current.value === n.y) return;
            this._xSpring.resetTo(n.x), this._ySpring.resetTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._xSpring.springTo(n.x), this._ySpring.springTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, setWidth: function(n, r) {
          this._setScale(n, r);
        }, setHeight: function(n, r) {
          this._setScale(n / this.normHeight, r);
        }, setCroppingPolygons: function(n) {
          var r = function(o) {
            return o instanceof e.Point || typeof o.x == "number" && typeof o.y == "number";
          }, s = function(o) {
            return o.map(function(l) {
              try {
                if (r(l)) return { x: l.x, y: l.y };
                throw new Error();
              } catch {
                throw new Error("A Provided cropping polygon point is not supported");
              }
            });
          };
          try {
            if (!e.isArray(n)) throw new Error("Provided cropping polygon is not an array");
            this._croppingPolygons = n.map(function(o) {
              return s(o);
            }), this._needsDraw = true;
          } catch (o) {
            e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(o), this.resetCroppingPolygons();
          }
        }, resetCroppingPolygons: function() {
          this._croppingPolygons = null, this._needsDraw = true;
        }, fitBounds: function(n, r, s) {
          r = r || e.Placement.CENTER;
          var o = e.Placement.properties[r], l = this.contentAspectX, a = 0, u = 0, c = 1, h = 1;
          if (this._clip && (l = this._clip.getAspectRatio(), c = this._clip.width / this.source.dimensions.x, h = this._clip.height / this.source.dimensions.y, n.getAspectRatio() > l ? (a = this._clip.x / this._clip.height * n.height, u = this._clip.y / this._clip.height * n.height) : (a = this._clip.x / this._clip.width * n.width, u = this._clip.y / this._clip.width * n.width)), n.getAspectRatio() > l) {
            var f = n.height / h, m = 0;
            o.isHorizontallyCentered ? m = (n.width - n.height * l) / 2 : o.isRight && (m = n.width - n.height * l), this.setPosition(new e.Point(n.x - a + m, n.y - u), s), this.setHeight(f, s);
          } else {
            var v = n.width / c, y = 0;
            o.isVerticallyCentered ? y = (n.height - n.width / l) / 2 : o.isBottom && (y = n.height - n.width / l), this.setPosition(new e.Point(n.x - a, n.y - u + y), s), this.setWidth(v, s);
          }
        }, getClip: function() {
          return this._clip ? this._clip.clone() : null;
        }, setClip: function(n) {
          e.console.assert(!n || n instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), n instanceof e.Rect ? this._clip = n.clone() : this._clip = null, this._needsUpdate = true, this._needsDraw = true, this.raiseEvent("clip-change");
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          this.flipped = n;
        }, get flipped() {
          return this._flipped;
        }, set flipped(n) {
          let r = this._flipped !== !!n;
          this._flipped = !!n, r && (this.update(true), this._needsDraw = true, this._raiseBoundsChange());
        }, get wrapHorizontal() {
          return this._wrapHorizontal;
        }, set wrapHorizontal(n) {
          let r = this._wrapHorizontal !== !!n;
          this._wrapHorizontal = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get wrapVertical() {
          return this._wrapVertical;
        }, set wrapVertical(n) {
          let r = this._wrapVertical !== !!n;
          this._wrapVertical = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get debugMode() {
          return this._debugMode;
        }, set debugMode(n) {
          this._debugMode = !!n, this._needsDraw = true;
        }, getOpacity: function() {
          return this.opacity;
        }, setOpacity: function(n) {
          this.opacity = n;
        }, get opacity() {
          return this._opacity;
        }, set opacity(n) {
          n !== this.opacity && (this._opacity = n, this._needsDraw = true, this.raiseEvent("opacity-change", { opacity: this.opacity }));
        }, getPreload: function() {
          return this._preload;
        }, setPreload: function(n) {
          this._preload = !!n, this._needsDraw = true;
        }, getRotation: function(n) {
          return n ? this._degreesSpring.current.value : this._degreesSpring.target.value;
        }, setRotation: function(n, r) {
          this._degreesSpring.target.value === n && this._degreesSpring.isAtTargetValue() || (r ? this._degreesSpring.resetTo(n) : this._degreesSpring.springTo(n), this._needsDraw = true, this._needsUpdate = true, this._raiseBoundsChange());
        }, getDrawArea: function() {
          if (this._opacity === 0 && !this._preload) return false;
          var n = this._viewportToTiledImageRectangle(this.viewport.getBoundsWithMargins(true));
          if (!this.wrapHorizontal && !this.wrapVertical) {
            var r = this._viewportToTiledImageRectangle(this.getClippedBounds(true));
            n = n.intersection(r);
          }
          return n;
        }, getTilesToDraw: function() {
          let n = this._tilesToDraw.flat();
          return this._updateTilesInViewport(n), n = this._tilesToDraw.flat(), n.forEach((r) => {
            r.tile.beingDrawn = true;
          }), this._lastDrawn = n, n;
        }, _getRotationPoint: function(n) {
          return this.getBoundsNoRotate(n).getCenter();
        }, get compositeOperation() {
          return this._compositeOperation;
        }, set compositeOperation(n) {
          n !== this._compositeOperation && (this._compositeOperation = n, this._needsDraw = true, this.raiseEvent("composite-operation-change", { compositeOperation: this._compositeOperation }));
        }, getCompositeOperation: function() {
          return this._compositeOperation;
        }, setCompositeOperation: function(n) {
          this.compositeOperation = n;
        }, setAjaxHeaders: function(n, r) {
          if (n === null && (n = {}), !e.isPlainObject(n)) {
            console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          this._ownAjaxHeaders = n, this._updateAjaxHeaders(r);
        }, _updateAjaxHeaders: function(n) {
          if (n === void 0 && (n = true), e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders, n) {
            var r, s, o, l;
            for (var a in this.tilesMatrix) {
              r = this.source.getNumTiles(a);
              for (var u in this.tilesMatrix[a]) {
                s = (r.x + u % r.x) % r.x;
                for (var c in this.tilesMatrix[a][u]) if (o = (r.y + c % r.y) % r.y, l = this.tilesMatrix[a][u][c], l.loadWithAjax = this.loadTilesWithAjax, l.loadWithAjax) {
                  var h = this.source.getTileAjaxHeaders(a, s, o);
                  l.ajaxHeaders = e.extend({}, this.ajaxHeaders, h);
                } else l.ajaxHeaders = null;
              }
            }
            for (var f = 0; f < this._imageLoader.jobQueue.length; f++) {
              var m = this._imageLoader.jobQueue[f];
              m.loadWithAjax = m.tile.loadWithAjax, m.ajaxHeaders = m.tile.loadWithAjax ? m.tile.ajaxHeaders : null;
            }
          }
        }, _setScale: function(n, r) {
          var s = this._scaleSpring.target.value === n;
          if (r) {
            if (s && this._scaleSpring.current.value === n) return;
            this._scaleSpring.resetTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._scaleSpring.springTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, _updateForScale: function() {
          this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
        }, _raiseBoundsChange: function() {
          this.raiseEvent("bounds-change");
        }, _isBottomItem: function() {
          return this.viewer.world.getItemAt(0) === this;
        }, _getLevelsInterval: function() {
          var n = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))), r = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), true).x * this._scaleSpring.current.value, s = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(r / this.minPixelRatio) / Math.log(2))));
          return s = Math.max(s, this.source.minLevel || 0), n = Math.min(n, s), { lowestLevel: n, highestLevel: s };
        }, _updateLevelsForViewport: function() {
          var n = this._getLevelsInterval(), r = n.lowestLevel, s = n.highestLevel, o = [], l = this.getDrawArea(), a = e.now();
          if (this._lastDrawn.forEach((N) => {
            N.tile.beingDrawn = false;
          }), this._tilesToDraw = [], this._tilesLoading = 0, this.loadingCoverage = {}, !l) return this._needsDraw = false, this._fullyLoaded;
          var u = new Array(s - r + 1);
          for (let N = 0, Y = s; Y >= r; Y--, N++) u[N] = Y;
          for (let N = s + 1; N <= this.source.maxLevel; N++) {
            var c = this.tilesMatrix[N] && this.tilesMatrix[N][0] && this.tilesMatrix[N][0][0];
            if (c && c.isBottomMost && c.isRightMost && c.loaded) {
              u.push(N);
              break;
            }
          }
          let h = false;
          for (let N = 0; N < u.length; N++) {
            let Y = u[N];
            var f = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Y), true).x * this._scaleSpring.current.value;
            if (N === u.length - 1 || f >= this.minPixelRatio) h = true;
            else if (!h) continue;
            var m = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Y), false).x * this._scaleSpring.current.value, v = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), false).x * this._scaleSpring.current.value, y = this.immediateRender ? 1 : v, x = Math.min(1, (f - 0.5) / 0.5), T = y / Math.abs(y - m), C = this._updateLevel(Y, x, T, l, a, o);
            o = C.bestTiles;
            var H = C.updatedTiles.filter((K) => K.loaded), k = /* @__PURE__ */ (function(K, q, ee) {
              return function(ce) {
                return { tile: ce, level: K, levelOpacity: q, currentTime: ee };
              };
            })(Y, x, a);
            if (this._tilesToDraw[Y] = H.map(k), this._providesCoverage(this.coverage, Y)) break;
          }
          return o && o.length > 0 ? (o.forEach(function(N) {
            N && !N.context2D && this._loadTile(N, a);
          }, this), this._needsDraw = true, false) : this._tilesLoading === 0;
        }, _updateTilesInViewport: function(n) {
          let r = e.now(), s = this;
          this._tilesLoading = 0, this._wasBlending = this._isBlending, this._isBlending = false, this.loadingCoverage = {};
          let o = n.length ? n[0].level : 0;
          if (!this.getDrawArea()) return;
          function a(c) {
            let h = c.tile;
            if (h && h.loaded) {
              let f = s._blendTile(h, h.x, h.y, c.level, c.levelOpacity, r, o);
              s._isBlending = s._isBlending || f, s._needsDraw = s._needsDraw || f || s._wasBlending;
            }
          }
          let u = 0;
          for (let c = 0; c < n.length; c++) {
            let h = n[c];
            a(h), this._providesCoverage(this.coverage, h.level) && (u = Math.max(u, h.level));
          }
          if (u > 0) for (let c in this._tilesToDraw) c < u && delete this._tilesToDraw[c];
        }, _blendTile: function(n, r, s, o, l, a, u) {
          let c = 1e3 * this.blendTime, h, f;
          return n.blendStart || (n.blendStart = a), h = a - n.blendStart, f = c ? Math.min(1, h / c) : 1, o === u && (f = 1, h = c), this.alwaysBlend && (f *= l), n.opacity = f, f === 1 && (this._setCoverage(this.coverage, o, r, s, true), this._hasOpaqueTile = true), h < c;
        }, _updateLevel: function(n, r, s, o, l, a) {
          var u = o.getBoundingBox().getTopLeft(), c = o.getBoundingBox().getBottomRight();
          this.viewer && this.viewer.raiseEvent("update-level", { tiledImage: this, havedrawn: true, level: n, opacity: r, visibility: s, drawArea: o, topleft: u, bottomright: c, currenttime: l, best: a }), this._resetCoverage(this.coverage, n), this._resetCoverage(this.loadingCoverage, n);
          var h = this._getCornerTiles(n, u, c), f = h.topLeft, m = h.bottomRight, v = this.source.getNumTiles(n), y = this.viewport.pixelFromPoint(this.viewport.getCenter());
          this.getFlip() && (m.x += 1, this.wrapHorizontal || (m.x = Math.min(m.x, v.x - 1)));
          for (var x = Math.max(0, (m.x - f.x) * (m.y - f.y)), T = new Array(x), C = 0, H = f.x; H <= m.x; H++) for (var k = f.y; k <= m.y; k++) {
            var N;
            if (this.getFlip()) {
              var Y = (v.x + H % v.x) % v.x;
              N = H + v.x - Y - Y - 1;
            } else N = H;
            if (o.intersection(this.getTileBounds(n, N, k)) !== null) {
              var K = this._updateTile(N, k, n, s, y, v, l, a);
              a = K.bestTiles, T[C] = K.tile, C += 1;
            }
          }
          return { bestTiles: a, updatedTiles: T };
        }, _positionTile: function(n, r, s, o, l) {
          var a = n.bounds.getTopLeft();
          a.x *= this._scaleSpring.current.value, a.y *= this._scaleSpring.current.value, a.x += this._xSpring.current.value, a.y += this._ySpring.current.value;
          var u = n.bounds.getSize();
          u.x *= this._scaleSpring.current.value, u.y *= this._scaleSpring.current.value, n.positionedBounds.x = a.x, n.positionedBounds.y = a.y, n.positionedBounds.width = u.x, n.positionedBounds.height = u.y;
          var c = s.pixelFromPointNoRotate(a, true), h = s.pixelFromPointNoRotate(a, false), f = s.deltaPixelsFromPointsNoRotate(u, true), m = s.deltaPixelsFromPointsNoRotate(u, false), v = h.plus(m.divide(2)), y = o.squaredDistanceTo(v);
          this.viewer.drawer.minimumOverlapRequired(this) && (r || (f = f.plus(new e.Point(1, 1))), n.isRightMost && this.wrapHorizontal && (f.x += 0.75), n.isBottomMost && this.wrapVertical && (f.y += 0.75)), n.position = c, n.size = f, n.squaredDistance = y, n.visibility = l;
        }, _updateTile: function(n, r, s, o, l, a, u, c) {
          var h = this._getTile(n, r, s, u, a);
          this.viewer && this.viewer.raiseEvent("update-tile", { tiledImage: this, tile: h }), this._setCoverage(this.coverage, s, n, r, false);
          var f = h.loaded || h.loading || this._isCovered(this.loadingCoverage, s, n, r);
          if (this._setCoverage(this.loadingCoverage, s, n, r, f), !h.exists) return { bestTiles: c, tile: h };
          if (h.loaded && h.opacity === 1 && this._setCoverage(this.coverage, s, n, r, true), this._positionTile(h, this.source.tileOverlap, this.viewport, l, o), !h.loaded) if (h.context2D) this._setTileLoaded(h);
          else {
            var m = this._tileCache.getImageRecord(h.cacheKey);
            m && this._setTileLoaded(h, m.getData());
          }
          return h.loading ? this._tilesLoading++ : f || (c = this._compareTiles(c, h, this.maxTilesPerFrame)), { bestTiles: c, tile: h };
        }, _getCornerTiles: function(n, r, s) {
          var o, l;
          this.wrapHorizontal ? (o = e.positiveModulo(r.x, 1), l = e.positiveModulo(s.x, 1)) : (o = Math.max(0, r.x), l = Math.min(1, s.x));
          var a, u, c = 1 / this.source.aspectRatio;
          this.wrapVertical ? (a = e.positiveModulo(r.y, c), u = e.positiveModulo(s.y, c)) : (a = Math.max(0, r.y), u = Math.min(c, s.y));
          var h = this.source.getTileAtPoint(n, new e.Point(o, a)), f = this.source.getTileAtPoint(n, new e.Point(l, u)), m = this.source.getNumTiles(n);
          return this.wrapHorizontal && (h.x += m.x * Math.floor(r.x), f.x += m.x * Math.floor(s.x)), this.wrapVertical && (h.y += m.y * Math.floor(r.y / c), f.y += m.y * Math.floor(s.y / c)), { topLeft: h, bottomRight: f };
        }, _getTile: function(n, r, s, o, l) {
          var a, u, c, h, f, m, v, y, x, T, C = this.tilesMatrix, H = this.source;
          return C[s] || (C[s] = {}), C[s][n] || (C[s][n] = {}), (!C[s][n][r] || !C[s][n][r].flipped != !this.flipped) && (a = (l.x + n % l.x) % l.x, u = (l.y + r % l.y) % l.y, c = this.getTileBounds(s, n, r), h = H.getTileBounds(s, a, u, true), f = H.tileExists(s, a, u), m = H.getTileUrl(s, a, u), v = H.getTilePostData(s, a, u), this.loadTilesWithAjax ? (y = H.getTileAjaxHeaders(s, a, u), e.isPlainObject(this.ajaxHeaders) && (y = e.extend({}, this.ajaxHeaders, y))) : y = null, x = H.getContext2D ? H.getContext2D(s, a, u) : void 0, T = new e.Tile(s, n, r, c, f, m, x, this.loadTilesWithAjax, y, h, v, H.getTileHashKey(s, a, u, m, y, v)), this.getFlip() ? a === 0 && (T.isRightMost = true) : a === l.x - 1 && (T.isRightMost = true), u === l.y - 1 && (T.isBottomMost = true), T.flipped = this.flipped, C[s][n][r] = T), T = C[s][n][r], T.lastTouchTime = o, T;
        }, _loadTile: function(n, r) {
          var s = this;
          n.loading = true, this._imageLoader.addJob({ src: n.getUrl(), tile: n, source: this.source, postData: n.postData, loadWithAjax: n.loadWithAjax, ajaxHeaders: n.ajaxHeaders, crossOriginPolicy: this.crossOriginPolicy, ajaxWithCredentials: this.ajaxWithCredentials, callback: function(o, l, a) {
            s._onTileLoad(n, r, o, l, a);
          }, abort: function() {
            n.loading = false;
          } });
        }, _onTileLoad: function(n, r, s, o, l) {
          if (s) n.exists = true;
          else {
            e.console.error("Tile %s failed to load: %s - error: %s", n, n.getUrl(), o), this.viewer.raiseEvent("tile-load-failed", { tile: n, tiledImage: this, time: r, message: o, tileRequest: l }), n.loading = false, n.exists = false;
            return;
          }
          if (r < this.lastResetTime) {
            e.console.warn("Ignoring tile %s loaded before reset: %s", n, n.getUrl()), n.loading = false;
            return;
          }
          var a = this, u = function() {
            var c = a.source, h = c.getClosestLevel();
            a._setTileLoaded(n, s, h, l);
          };
          u();
        }, _setTileLoaded: function(n, r, s, o) {
          var l = 0, a = false, u = this;
          function c() {
            return a && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."), l++, h;
          }
          function h() {
            l--, l === 0 && (n.loading = false, n.loaded = true, n.hasTransparency = u.source.hasTransparency(n.context2D, n.getUrl(), n.ajaxHeaders, n.postData), n.context2D || u._tileCache.cacheTile({ data: r, tile: n, cutoff: s, tiledImage: u }), u.viewer.raiseEvent("tile-ready", { tile: n, tiledImage: u, tileRequest: o }), u._needsDraw = true);
          }
          var f = c();
          this.viewer.raiseEvent("tile-loaded", { tile: n, tiledImage: this, tileRequest: o, get image() {
            return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."), r;
          }, data: r, getCompletionCallback: c }), a = true, f();
        }, _compareTiles: function(n, r, s) {
          return n ? (n.push(r), this._sortTiles(n), n.length > s && n.pop(), n) : [r];
        }, _sortTiles: function(n) {
          n.sort(function(r, s) {
            return r === null ? 1 : s === null ? -1 : r.visibility === s.visibility ? r.squaredDistance - s.squaredDistance : s.visibility - r.visibility;
          });
        }, _providesCoverage: function(n, r, s, o) {
          var l, a, u, c;
          if (!n[r]) return false;
          if (s === void 0 || o === void 0) {
            l = n[r];
            for (u in l) if (Object.prototype.hasOwnProperty.call(l, u)) {
              a = l[u];
              for (c in a) if (Object.prototype.hasOwnProperty.call(a, c) && !a[c]) return false;
            }
            return true;
          }
          return n[r][s] === void 0 || n[r][s][o] === void 0 || n[r][s][o] === true;
        }, _isCovered: function(n, r, s, o) {
          return s === void 0 || o === void 0 ? this._providesCoverage(n, r + 1) : this._providesCoverage(n, r + 1, 2 * s, 2 * o) && this._providesCoverage(n, r + 1, 2 * s, 2 * o + 1) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o + 1);
        }, _setCoverage: function(n, r, s, o, l) {
          if (!n[r]) {
            e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", r);
            return;
          }
          n[r][s] || (n[r][s] = {}), n[r][s][o] = l;
        }, _resetCoverage: function(n, r) {
          n[r] = {};
        } });
      })(i), (function(e) {
        var n = function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = s.tile, this.tiledImage = s.tiledImage;
        }, r = function(s) {
          e.console.assert(s, "[ImageRecord] options is required"), e.console.assert(s.data, "[ImageRecord] options.data is required"), this._tiles = [], s.create.apply(null, [this, s.data, s.ownerTile]), this._destroyImplementation = s.destroy.bind(null, this), this.getImage = s.getImage.bind(null, this), this.getData = s.getData.bind(null, this), this.getRenderedContext = s.getRenderedContext.bind(null, this);
        };
        r.prototype = { destroy: function() {
          this._destroyImplementation(), this._tiles = null;
        }, addTile: function(s) {
          e.console.assert(s, "[ImageRecord.addTile] tile is required"), this._tiles.push(s);
        }, removeTile: function(s) {
          for (var o = 0; o < this._tiles.length; o++) if (this._tiles[o] === s) {
            this._tiles.splice(o, 1);
            return;
          }
          e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", s);
        }, getTileCount: function() {
          return this._tiles.length;
        } }, e.TileCache = function(s) {
          s = s || {}, this._maxImageCacheCount = s.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
        }, e.TileCache.prototype = { numTilesLoaded: function() {
          return this._tilesLoaded.length;
        }, cacheTile: function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
          var o = s.cutoff || 0, l = this._tilesLoaded.length, a = this._imagesLoaded[s.tile.cacheKey];
          if (a || (s.data || (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."), s.data = s.image), e.console.assert(s.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"), a = this._imagesLoaded[s.tile.cacheKey] = new r({ data: s.data, ownerTile: s.tile, create: s.tiledImage.source.createTileCache, destroy: s.tiledImage.source.destroyTileCache, getImage: s.tiledImage.source.getTileCacheDataAsImage, getData: s.tiledImage.source.getTileCacheData, getRenderedContext: s.tiledImage.source.getTileCacheDataAsContext2D }), this._imagesLoadedCount++), a.addTile(s.tile), s.tile.cacheImageRecord = a, this._imagesLoadedCount > this._maxImageCacheCount) {
            for (var u = null, c = -1, h = null, f, m, v, y, x, T, C = this._tilesLoaded.length - 1; C >= 0; C--) if (T = this._tilesLoaded[C], f = T.tile, !(f.level <= o || f.beingDrawn)) {
              if (!u) {
                u = f, c = C, h = T;
                continue;
              }
              y = f.lastTouchTime, m = u.lastTouchTime, x = f.level, v = u.level, (y < m || y === m && x > v) && (u = f, c = C, h = T);
            }
            u && c >= 0 && (this._unloadTile(h), l = c);
          }
          this._tilesLoaded[l] = new n({ tile: s.tile, tiledImage: s.tiledImage });
        }, clearTilesFor: function(s) {
          e.console.assert(s, "[TileCache.clearTilesFor] tiledImage is required");
          for (var o, l = 0; l < this._tilesLoaded.length; ++l) o = this._tilesLoaded[l], o.tiledImage === s && (this._unloadTile(o), this._tilesLoaded.splice(l, 1), l--);
        }, getImageRecord: function(s) {
          return e.console.assert(s, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[s];
        }, _unloadTile: function(s) {
          e.console.assert(s, "[TileCache._unloadTile] tileRecord is required");
          var o = s.tile, l = s.tiledImage;
          let a = o.getCanvasContext && o.getCanvasContext();
          o.unload(), o.cacheImageRecord = null;
          var u = this._imagesLoaded[o.cacheKey];
          u && (u.removeTile(o), u.getTileCount() || (u.destroy(), delete this._imagesLoaded[o.cacheKey], this._imagesLoadedCount--, a && (a.canvas.width = 0, a.canvas.height = 0, l.viewer.raiseEvent("image-unloaded", { context2D: a, tile: o }))), l.viewer.raiseEvent("tile-unloaded", { tile: o, tiledImage: l }));
        } };
      })(i), (function(e) {
        e.World = function(n) {
          var r = this;
          e.console.assert(n.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = n.viewer, this._items = [], this._needsDraw = false, this._autoRefigureSizes = true, this._needsSizesFigured = false, this._delegatedFigureSizes = function(s) {
            r._autoRefigureSizes ? r._figureSizes() : r._needsSizesFigured = true;
          }, this._figureSizes();
        }, e.extend(e.World.prototype, e.EventSource.prototype, { addItem: function(n, r) {
          if (e.console.assert(n, "[World.addItem] item is required"), e.console.assert(n instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), r = r || {}, r.index !== void 0) {
            var s = Math.max(0, Math.min(this._items.length, r.index));
            this._items.splice(s, 0, n);
          } else this._items.push(n);
          this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = true, this._needsDraw = true, n.addHandler("bounds-change", this._delegatedFigureSizes), n.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", { item: n });
        }, getItemAt: function(n) {
          return e.console.assert(n !== void 0, "[World.getItemAt] index is required"), this._items[n];
        }, getIndexOfItem: function(n) {
          return e.console.assert(n, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, n);
        }, getItemCount: function() {
          return this._items.length;
        }, setItemIndex: function(n, r) {
          e.console.assert(n, "[World.setItemIndex] item is required"), e.console.assert(r !== void 0, "[World.setItemIndex] index is required");
          var s = this.getIndexOfItem(n);
          if (r >= this._items.length) throw new Error("Index bigger than number of layers.");
          r === s || s === -1 || (this._items.splice(s, 1), this._items.splice(r, 0, n), this._needsDraw = true, this.raiseEvent("item-index-change", { item: n, previousIndex: s, newIndex: r }));
        }, removeItem: function(n) {
          e.console.assert(n, "[World.removeItem] item is required");
          var r = e.indexOf(this._items, n);
          r !== -1 && (n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy(), this._items.splice(r, 1), this._figureSizes(), this._needsDraw = true, this._raiseRemoveItem(n));
        }, removeAll: function() {
          this.viewer._cancelPendingImages();
          var n, r;
          for (r = 0; r < this._items.length; r++) n = this._items[r], n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy();
          var s = this._items;
          for (this._items = [], this._figureSizes(), this._needsDraw = true, r = 0; r < s.length; r++) n = s[r], this._raiseRemoveItem(n);
        }, resetItems: function() {
          for (var n = 0; n < this._items.length; n++) this._items[n].reset();
        }, update: function(n) {
          for (var r = false, s = 0; s < this._items.length; s++) r = this._items[s].update(n) || r;
          return r;
        }, draw: function() {
          this.viewer.drawer.draw(this._items), this._needsDraw = false, this._items.forEach((n) => {
            this._needsDraw = n.setDrawn() || this._needsDraw;
          });
        }, needsDraw: function() {
          for (var n = 0; n < this._items.length; n++) if (this._items[n].needsDraw()) return true;
          return this._needsDraw;
        }, getHomeBounds: function() {
          return this._homeBounds.clone();
        }, getContentFactor: function() {
          return this._contentFactor;
        }, setAutoRefigureSizes: function(n) {
          this._autoRefigureSizes = n, n & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = false);
        }, arrange: function(n) {
          n = n || {};
          var r = n.immediately || false, s = n.layout || e.DEFAULT_SETTINGS.collectionLayout, o = n.rows || e.DEFAULT_SETTINGS.collectionRows, l = n.columns || e.DEFAULT_SETTINGS.collectionColumns, a = n.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, u = n.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, c = a + u, h;
          !n.rows && l ? h = l : h = Math.ceil(this._items.length / o);
          var f = 0, m = 0, v, y, x, T, C;
          this.setAutoRefigureSizes(false);
          for (var H = 0; H < this._items.length; H++) H && H % h === 0 && (s === "horizontal" ? (m += c, f = 0) : (f += c, m = 0)), v = this._items[H], y = v.getBounds(), y.width > y.height ? x = a : x = a * (y.width / y.height), T = x * (y.height / y.width), C = new e.Point(f + (a - x) / 2, m + (a - T) / 2), v.setPosition(C, r), v.setWidth(x, r), s === "horizontal" ? f += c : m += c;
          this.setAutoRefigureSizes(true);
        }, _figureSizes: function() {
          var n = this._homeBounds ? this._homeBounds.clone() : null, r = this._contentSize ? this._contentSize.clone() : null, s = this._contentFactor || 0;
          if (!this._items.length) this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
          else {
            var o = this._items[0], l = o.getBounds();
            this._contentFactor = o.getContentSize().x / l.width;
            for (var a = o.getClippedBounds().getBoundingBox(), u = a.x, c = a.y, h = a.x + a.width, f = a.y + a.height, m = 1; m < this._items.length; m++) o = this._items[m], l = o.getBounds(), this._contentFactor = Math.max(this._contentFactor, o.getContentSize().x / l.width), a = o.getClippedBounds().getBoundingBox(), u = Math.min(u, a.x), c = Math.min(c, a.y), h = Math.max(h, a.x + a.width), f = Math.max(f, a.y + a.height);
            this._homeBounds = new e.Rect(u, c, h - u, f - c), this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor);
          }
          (this._contentFactor !== s || !this._homeBounds.equals(n) || !this._contentSize.equals(r)) && this.raiseEvent("metrics-change", {});
        }, _raiseRemoveItem: function(n) {
          this.raiseEvent("remove-item", { item: n });
        } });
      })(i);
    })(Mi)), Mi.exports;
  }
  var ng = ig();
  var Cn = yo(ng);
  function Do(t) {
    if (typeof t != "string") return null;
    const i = t.match(/xywh=(\d+),(\d+),(\d+),(\d+)$/);
    return i ? i.slice(1).map(Number) : null;
  }
  function cs() {
    let t, i;
    const e = new Promise((n, r) => {
      t = n, i = r;
    });
    return e.resolve = t, e.reject = i, e;
  }
  var Sn = 5e-3;
  var tr = 1.5;
  var sg = { data() {
    return { defaultCanvasCss: "", loadingTimeout: null, avResource: null, overlayElements: [], promise: cs(), tileSources: [], viewer: null, viewerState: { isReset: true } };
  }, computed: { filtersActive() {
    return Object.keys(this.$store.options.filters).length > 0;
  }, paginationButtons() {
    var e;
    const t = ((e = this.$store.manifest.viewingDirection) == null ? void 0 : e.split("-to-")) || ["left", "right"], i = [{ hidden: this.$store.isFirstPage, title: this.$translate("Previous page"), onClick: this.$store.goToPreviousPage, position: t[0] }, { hidden: this.$store.isLastPage, title: this.$translate("Next page"), onClick: this.$store.goToNextPage, position: t[1] }];
    return this.$store.isReversed && i.reverse(), i.filter((n) => !n.hidden);
  }, multiLayerResources() {
    return this.$store.options.pages.filter((t) => t > 0).map((t, i) => {
      var e, n, r, s, o;
      return { pageIndex: i, items: (o = (s = (r = (n = (e = this.$store.manifest.items[t - 1].items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.items };
    }).filter((t) => {
      var i;
      return ((i = t.items) == null ? void 0 : i.length) > 1;
    });
  } }, watch: { "$store.annotations": { handler() {
    this.updateOverlays();
  }, deep: true }, "$store.options.annotationId": function(t) {
    var s;
    if (!this.viewer || ((s = this.overlayElements.find((o) => o.classList.contains("-current"))) == null || s.classList.remove("-current"), !t)) return;
    const i = this.viewer.viewport.getBounds(), e = this.overlayElements.find((o) => o.id === t);
    if (!e) return;
    e.classList.add("-current");
    const r = this.viewer.getOverlayById(e).getBounds(this.viewer.viewport);
    i.intersection(r) || (r.x -= 0.03, r.y -= 0.03, r.width += 0.06, r.height += 0.06, this.viewer.viewport.fitBoundsWithConstraints(r));
  }, "$store.options.pages": function(t, i) {
    const e = t.length !== i.length;
    this.loadInfo(e);
  }, "$store.options.view": function() {
    this.updateOverlays();
  } }, mounted() {
    this.loadInfo(), this.$store.readyPromises.push(this.promise), this.$store.rootElement.addEventListener("keydown", this.onKeydown), this.$store.rootElement.addEventListener("keypress", this.onKeypress);
  }, beforeUnmount() {
    this.viewer && this.viewer.destroy(), this.$store.rootElement.removeEventListener("keydown", this.onKeydown), this.$store.rootElement.removeEventListener("keypress", this.onKeypress);
  }, methods: { initViewer(t) {
    const i = [];
    let e = 0, n = 0;
    const r = this.$store.isReversed ? this.$store.options.pages.toReversed() : this.$store.options.pages;
    if (r.filter((s) => s > 0).forEach((s, o) => {
      this.tileSources.filter((a) => a.$meta.page === s && a.$meta.layerIndex === (this.$store.options.layers[o] || 0)).forEach((a, u) => {
        var v;
        e = e || a[this.$store.isVertical ? "height" : "width"];
        const c = a[this.$store.isVertical ? "height" : "width"] / e;
        this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === 1 || this.$store.isReversed && s === this.$store.pageCount) && (i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: 0, [this.$store.isVertical ? "height" : "width"]: c }), n += 1 + Sn);
        const h = { tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }, { target: f } = ((v = this.$store.manifest.items[s - 1].items[0]) == null ? void 0 : v.items[u]) || {}, m = Do((f == null ? void 0 : f.id) || f);
        m ? [h.x, h.y, h.width] = m.map((y) => y / e) : n += c + Sn, this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === this.$store.pageCount || this.$store.isReversed && s === 1) && i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }), i.push(h);
      });
    }), this.viewer) {
      this.viewer.addOnceHandler("open", () => {
        if (this.viewerState.isReset || t) this.resetImage();
        else {
          if (this.viewer.viewport.applyConstraints(true), !this.$store.options.optionsResetOnPageChange) return;
          this.$store.options.optionsResetOnPageChange.forEach((s) => {
            if (s === "filters") this.resetFilters();
            else if (s === "pan") {
              const o = this.viewer.viewport.getBounds();
              if (o.x <= 0 && o.y <= 0) return;
              const l = r[0] ? 0 : 1;
              this.viewer.viewport.panTo({ x: o.x > 0 ? o.width / 2 + l : this.$store.options.pan.x, y: o.y > 0 ? o.height / 2 : this.$store.options.pan.y }), this.$store.updateOptions({ pan: {} });
            } else s === "rotation" ? (this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null })) : s === "zoom" && (this.viewer.viewport.goHome(), this.$store.updateOptions({ zoom: null }));
          });
        }
      }), this.viewer.open(i);
      return;
    }
    this.viewer = Cn({ animationTime: 0.4, drawer: "canvas", element: this.$refs.image, immediateRender: this.$store.isContainerWidthAtLeast("small"), placeholderFillStyle: "grey", preserveImageSizeOnResize: true, preserveViewport: true, showNavigationControl: false, showZoomControl: false, tileSources: i, visibilityRatio: 0.2, ...this.$store.options.viewer }), this.viewer.addHandler("canvas-key", (s) => {
      var o;
      ["f", "F", "r", "R", "S", "W", "+", "=", "-", "_"].includes((o = s.originalEvent) == null ? void 0 : o.key) && (s.preventDefaultAction = true);
    }), this.viewer.gestureSettingsMouse.clickToZoom = false, this.viewer.addHandler("animation-finish", () => {
      if (this.viewerState.isReset) {
        this.removeImageOptions();
        return;
      }
      const s = this.viewer.viewport.getCenter();
      this.$store.updateOptions({ pan: { x: Math.round(s.x * 1e3) / 1e3, y: Math.round(s.y * 1e3) / 1e3 }, zoom: Math.round(this.viewer.viewport.getZoom() * 1e3) / 1e3 });
    }), this.viewer.addHandler("open", () => {
      this.startLoadingWatch(), this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0 || this.$store.options.zoom ? ((this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0) && this.viewer.viewport.panTo({ x: this.$store.options.pan.x, y: this.$store.options.pan.y }, true), this.$store.options.zoom && this.viewer.viewport.zoomTo(this.$store.options.zoom, null, true)) : this.viewer.viewport.goHome(), this.$store.options.rotation !== null && this.viewer.viewport.setRotation(this.$store.options.rotation), this.updateOverlays();
    }), this.viewer.addHandler("pan", this.updateViewerState), this.viewer.addHandler("resize", () => {
      this.viewerState.isReset && this.$nextTick(() => this.viewer.viewport.goHome(true)), this.updateViewerState();
    }), this.viewer.addHandler("rotate", this.updateViewerState), this.viewer.addHandler("zoom", this.updateViewerState), this.viewer.addHandler("tile-load-failed", (s) => {
      this.$store.addError(`Error loading image: ${s.message}`);
    }), this.defaultCanvasCss = this.viewer.drawer.canvas.style.cssText, this.updateFilterStyle(), this.$api.expose(this.resetImage), this.$api.expose(this.viewer, "viewer"), this.promise.resolve();
  }, loadInfo(t = false) {
    this.stopLoadingWatch(), this.avResource = null;
    let i, e;
    const n = [];
    this.$store.options.pages.filter((r) => r > 0).forEach((r, s) => {
      var a, u, c;
      const o = this.$store.manifest.items[r - 1], l = this.$store.options.layers[s] || 0;
      (c = (u = (a = o.items) == null ? void 0 : a[0]) == null ? void 0 : u.items) == null || c.forEach((h, f) => {
        var y, x, T, C, H, k, N, Y;
        const m = ((x = (y = h.body) == null ? void 0 : y.items) == null ? void 0 : x[l]) || h.body;
        if (!m) {
          this.$store.addError(`Resource missing for page ${r}`);
          return;
        }
        if (["Sound", "Video"].includes(m == null ? void 0 : m.type)) {
          if (this.$store.options.pages[1] > -1) {
            this.$store.updateOptions({ pages: [r] });
            return;
          }
          this.avResource = {}, e = { format: m.format, type: m.type, url: m.id }, this.$nextTick(() => {
            this.avResource = e;
          });
          const K = o.accompanyingCanvas || o.placeholderCanvas, q = (k = (H = (C = (T = K == null ? void 0 : K.items) == null ? void 0 : T[0]) == null ? void 0 : C.items) == null ? void 0 : H[0]) == null ? void 0 : k.body;
          i = ((N = q == null ? void 0 : q.items) == null ? void 0 : N[l]) || q;
        } else i = m;
        if (i && this.tileSources.find((K) => K.$meta.page === r && K.$meta.itemIndex === f && K.$meta.layerIndex === l)) return;
        const v = ((Y = i == null ? void 0 : i.source) == null ? void 0 : Y.service) || (i == null ? void 0 : i.service);
        if (v) {
          const K = [].concat(v)[0], q = K.id || K["@id"], ee = `${q}${q.at(-1) === "/" ? "" : "/"}info.json`;
          n.push(this.$store.fetchJson(ee).then((ce) => ({ ...ce, $meta: { page: r, itemIndex: f, layerIndex: l } }), (ce) => {
            let te;
            ce.response && ce.response.statusText ? te = ce.response.statusText : ce.message && (te = ce.message), this.$store.addError(`Error loading info file for page ${r}${te ? `: ${te}` : ""}`);
          }));
        } else i != null && i.id && this.tileSources.push({ $meta: { page: r, itemIndex: f, layerIndex: l }, type: "image", url: i.id, width: i.width, height: i.height });
      }), !i && !e && this.$store.addError(`Image missing for page ${r}`);
    }), n.length ? Promise.all(n).then((r) => {
      r.filter(Boolean).forEach((o) => {
        var l, a;
        if (this.$store.options.preferredImageFormat) {
          const u = o.extraFormats || ((a = (l = o.profile) == null ? void 0 : l[1]) == null ? void 0 : a.formats);
          u != null && u.includes(this.$store.options.preferredImageFormat) && (o.tileFormat = this.$store.options.preferredImageFormat);
        }
        this.tileSources.push(o);
      }), this.$store.options.pages.filter((o) => o > 0).every((o, l) => {
        var a;
        return ((a = r[l]) == null ? void 0 : a.$meta.page) === o;
      }) && this.initViewer(t);
    }) : i && this.initViewer(t);
  }, onKeydown(t) {
    t.key === "Escape" && this.$store.rootElement.focus(), [45, 48, 96].includes(t.keyCode) && (t.shiftKey ? this.resetImage(t) : this.viewer.viewport.goHome());
  }, onKeypress(t) {
    if (!ls(t)) switch (t.key) {
      case "I":
        this.resetFilters();
        break;
      case "r":
      case "R":
        this.rotateRight(t);
        break;
      case "+":
      case "=":
      case "W":
        this.zoomIn();
        break;
      case "-":
      case "_":
      case "S":
        this.zoomOut();
        break;
    }
  }, removeImageOptions() {
    this.$store.updateOptions({ pan: {}, zoom: null });
  }, resetFilters() {
    this.viewer.drawer.canvas.style.cssText = this.defaultCanvasCss, this.$store.updateOptions({ filters: {} });
  }, resetImage(t) {
    t && (this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null }), this.filtersActive && this.resetFilters()), this.viewer.viewport.goHome(), this.removeImageOptions();
  }, rotateRight(t) {
    const { viewport: i } = this.viewer, e = t && t.shiftKey ? 0 : (i.getRotation() + 90) % 360;
    i.setRotation(e), this.$store.updateOptions({ rotation: e || null });
  }, setFilter(t, i) {
    const e = i.target.valueAsNumber;
    e === 1 ? delete this.$store.options.filters[t] : this.$store.options.filters[t] = e, this.$store.updateOptions({ filters: this.$store.options.filters }), this.updateFilterStyle();
  }, startLoadingWatch() {
    this.$store.loading = 0;
    for (let t = this.viewer.world.getItemCount() - 1; t >= 0; t -= 1) {
      const i = this.viewer.world.getItemAt(t);
      if (i && i._tilesLoading) {
        this.$store.loading = 1;
        break;
      }
    }
    this.loadingTimeout = setTimeout(this.startLoadingWatch, 200);
  }, stopLoadingWatch() {
    clearTimeout(this.loadingTimeout);
  }, toggleOverlays() {
    this.$store.updateOptions({ annotationsVisible: this.$store.options.annotationsVisible !== false ? false : null });
  }, updateFilterStyle() {
    if (!this.filtersActive) return;
    const t = [];
    Object.keys(this.$store.options.filters).forEach((e) => {
      t.push(`${e}(${this.$store.options.filters[e]})`);
    });
    const i = t.join(" ");
    this.viewer.drawer.canvas.style.cssText = `${this.defaultCanvasCss} filter: ${i}`;
  }, updateOverlays() {
    if (!this.viewer || !this.$store.options.pages.filter((e) => e > 0).every((e) => this.tileSources.some((n) => n.$meta.page === e)) || (this.viewer.clearOverlays(), this.overlayElements = [], !this.$store.annotationsActive)) return;
    let t, i = 0;
    this.$store.options.pages.filter((e) => e > -1).forEach((e, n) => {
      var s, o, l, a;
      const r = this.tileSources.find((u) => u.$meta.page === (e === 0 ? 1 : e) && u.$meta.layerIndex === (this.$store.options.layers[n] || 0));
      if (n === 0) {
        if (t = r[this.$store.isVertical ? "height" : "width"], e === 0) return;
      } else {
        const u = this.$store.options.pages[n - 1], c = ((s = this.$store.manifest.items[u - 1]) == null ? void 0 : s[this.$store.isVertical ? "height" : "width"]) || t;
        i += (Sn + c / t) * (this.$store.isReversed ? -1 : 1);
      }
      (l = (o = this.$store.annotations[e]) == null ? void 0 : o[0]) != null && l.coords && ((a = this.$store.annotations[e]) == null || a.forEach((u, c) => {
        const h = document.createElement("button");
        h.ariaLabel = `${e}/${c}`, h.className = `tify-media-overlay${this.$store.options.annotationId === u.id ? " -current" : ""}`, h.id = u.id, h.type = "button", new Cn.MouseTracker({ element: h, clickHandler: (f) => {
          f.quick && setTimeout(() => this.$store.toggleAnnotationId(u.id), 5);
        }, keyDownHandler: (f) => f.keyCode === 13 && this.$store.toggleAnnotationId(u.id) }), this.viewer.addOverlay({ element: h, location: new Cn.Rect(u.coords[0] / t + (this.$store.isVertical ? 0 : i), u.coords[1] / t + (this.$store.isVertical ? i : 0), u.coords[2] / t, u.coords[3] / t) }), this.overlayElements.push(h);
      }));
    });
  }, updateViewerState() {
    const t = this.viewer.viewport.getZoom();
    this.viewerState.isMaxZoom = t >= this.viewer.viewport.getMaxZoom(), this.viewerState.isMinZoom = t <= this.viewer.viewport.getMinZoom();
    const i = this.viewer.viewport.getHomeBounds(), e = this.viewer.viewport.getBounds();
    this.viewerState.isReset = Math.abs(i.height - e.height) < 1e-9 && Math.abs(i.width - e.width) < 1e-9 && Math.abs(i.x - e.x) < 1e-9 && Math.abs(i.y - e.y) < 1e-9;
  }, zoomIn() {
    this.viewer.viewport.zoomBy(tr), this.viewer.viewport.applyConstraints();
  }, zoomOut() {
    this.viewer.viewport.zoomBy(1 / tr), this.viewer.viewport.applyConstraints();
  } } };
  var rg = { class: "tify-media", "aria-live": "polite" };
  var og = { class: "tify-sr-only" };
  var ag = { key: 0, class: "tify-media-buttons -controls" };
  var lg = ["disabled", "title", "aria-label"];
  var ug = ["disabled", "title", "aria-label"];
  var cg = ["disabled", "title", "aria-label"];
  var hg = ["title", "aria-label"];
  var dg = { class: "tify-sr-only" };
  var fg = ["disabled"];
  var pg = ["title", "aria-label"];
  var gg = { class: "tify-sr-only" };
  var mg = { key: 0 };
  var vg = { class: "tify-button-list" };
  var yg = ["aria-pressed", "onClick"];
  var wg = { class: "tify-media-buttons -pagination" };
  var _g = ["title", "aria-label", "onClick"];
  function Tg(t, i, e, n, r, s) {
    var K;
    const o = ss, l = rs, a = eg, u = Yp, c = qp, h = Up, f = Ep, m = us, v = _p, y = mp, x = dp, T = ti, C = Ro, H = Po, k = _o, N = To, Y = ip;
    return E(), A("section", rg, [R("h2", og, B(t.$translate("Media")), 1), R("div", { ref: "image", class: Pe(["tify-media-image", { "-annotations-hidden": t.$store.options.annotationsVisible === false }]) }, null, 2), r.viewer ? (E(), A("div", ag, [R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMaxZoom, title: t.$translate("Zoom in"), "aria-label": t.$translate("Zoom in"), onClick: i[0] || (i[0] = (q) => s.zoomIn()) }, [ie(o)], 8, lg), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMinZoom, title: t.$translate("Zoom out"), "aria-label": t.$translate("Zoom out"), onClick: i[1] || (i[1] = (q) => s.zoomOut()) }, [ie(l)], 8, ug), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isReset, title: t.$translate("Reset"), "aria-label": t.$translate("Reset"), onClick: i[2] || (i[2] = (q) => s.resetImage(!!q.shiftKey)) }, [ie(a)], 8, cg), R("button", { type: "button", class: Pe(["tify-media-button", { "-active": !!t.$store.options.rotation }]), title: t.$translate("Rotate"), "aria-label": t.$translate("Rotate"), onClick: i[3] || (i[3] = (q) => s.rotateRight(q)) }, [ie(u)], 10, hg), ie(m, { class: Pe(["tify-media-dropdown -filters", { "-active": s.filtersActive }]), alignment: "center", position: "right", label: t.$translate("Toggle image filters"), shortcut: "i" }, { button: Ye(() => [ie(c)]), default: Ye(() => [R("h3", dg, B(t.$translate("Image filters")), 1), ie(h, { onUpdate: i[4] || (i[4] = (q, ee) => s.setFilter(q, ee)) }), R("p", null, [R("button", { type: "button", class: "tify-media-reset", disabled: !s.filtersActive, onClick: i[5] || (i[5] = zt((q) => s.resetFilters(), ["stop"])) }, [ie(f), Ge(" " + B(t.$translate("Reset")), 1)], 8, fg)])]), _: 1 }, 8, ["class", "label"]), t.$store.annotations.length && (t.$store.options.view === "text" || !t.$store.isContainerWidthAtLeast("medium")) ? (E(), A("button", { key: 0, type: "button", class: "tify-media-button", title: t.$translate("Toggle annotations"), "aria-label": t.$translate("Toggle annotations"), onClick: i[6] || (i[6] = (q) => s.toggleOverlays()) }, [t.$store.options.annotationsVisible !== false ? (E(), le(v, { key: 0 })) : (E(), le(y, { key: 1 }))], 8, pg)) : J("", true), s.multiLayerResources.length ? (E(), le(m, { key: 1, class: Pe(["tify-media-dropdown -layers", { "-active": t.$store.options.layers.some(Boolean) }]), alignment: "center", position: "right", label: t.$translate("Toggle image layer select"), shortcut: "c" }, { button: Ye(() => [ie(x)]), default: Ye(() => [R("h3", gg, B(t.$translate("Layer")), 1), (E(true), A(ue, null, Ce(s.multiLayerResources, (q) => (E(), A(ue, { key: q.pageIndex }, [t.$store.options.pages.filter((ee) => ee > 0).length > 1 ? (E(), A("h4", mg, [ie(T, { number: t.$store.options.pages[q.pageIndex], wrap: true }, null, 8, ["number"])])) : J("", true), R("ol", vg, [(E(true), A(ue, null, Ce(q.items, (ee, ce) => (E(), A("li", { key: ee.id }, [R("button", { type: "button", "aria-pressed": ce === (t.$store.options.layers[q.pageIndex] || 0), onClick: (te) => {
      t.$store.options.layers[q.pageIndex] = ce, s.loadInfo();
    } }, B(t.$store.localize(ee.label)), 9, yg)]))), 128))])], 64))), 128))]), _: 1 }, 8, ["class", "label"])) : J("", true)])) : J("", true), R("div", wg, [(E(true), A(ue, null, Ce(s.paginationButtons, (q) => (E(), A("button", { key: q.position, type: "button", class: Pe(["tify-media-button", `-${q.position}`]), title: q.title, "aria-label": q.title, onClick: q.onClick }, [q.position === "left" ? (E(), le(C, { key: 0 })) : q.position === "right" ? (E(), le(H, { key: 1 })) : q.position === "top" ? (E(), le(k, { key: 2 })) : q.position === "bottom" ? (E(), le(N, { key: 3 })) : J("", true)], 10, _g))), 128))]), (K = r.avResource) != null && K.url ? (E(), le(Y, { key: 1, src: r.avResource.url, format: r.avResource.format, hasImage: !!r.viewer }, null, 8, ["src", "format", "hasImage"])) : J("", true)]);
  }
  var xg = $(sg, [["render", Tg]]);
  var bg = {};
  var Eg = { class: "tify-icon -fullscreen-exit", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Cg(t, i) {
    return E(), A("svg", Eg, [...i[0] || (i[0] = [R("path", { d: "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z" }, null, -1)])]);
  }
  var Sg = $(bg, [["render", Cg]]);
  var Pg = {};
  var Rg = { class: "tify-icon -fullscreen", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Dg(t, i) {
    return E(), A("svg", Rg, [...i[0] || (i[0] = [R("path", { d: "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" }, null, -1)])]);
  }
  var Ag = $(Pg, [["render", Dg]]);
  var Lg = {};
  var Ig = { class: "tify-icon -help-circle-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Mg(t, i) {
    return E(), A("svg", Ig, [...i[0] || (i[0] = [R("path", { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, null, -1)])]);
  }
  var Hg = $(Lg, [["render", Mg]]);
  var Og = {};
  var Fg = { class: "tify-icon -list-box-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function kg(t, i) {
    return E(), A("svg", Fg, [...i[0] || (i[0] = [R("path", { d: "M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" }, null, -1)])]);
  }
  var Bg = $(Og, [["render", kg]]);
  var Vg = {};
  var zg = { class: "tify-icon -tray-arrow-down", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Ng(t, i) {
    return E(), A("svg", zg, [...i[0] || (i[0] = [R("path", { d: "M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" }, null, -1)])]);
  }
  var Ug = $(Vg, [["render", Ng]]);
  var Wg = {};
  var jg = { class: "tify-icon -information-variant", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gg(t, i) {
    return E(), A("svg", jg, [...i[0] || (i[0] = [R("path", { d: "M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" }, null, -1)])]);
  }
  var qg = $(Wg, [["render", Gg]]);
  var Zg = {};
  var Kg = { class: "tify-icon -table-of-contents", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xg(t, i) {
    return E(), A("svg", Kg, [...i[0] || (i[0] = [R("path", { d: "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z" }, null, -1)])]);
  }
  var Yg = $(Zg, [["render", Xg]]);
  var Jg = {};
  var Qg = { class: "tify-icon -text", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function $g(t, i) {
    return E(), A("svg", Qg, [...i[0] || (i[0] = [R("path", { d: "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" }, null, -1)])]);
  }
  var em = $(Jg, [["render", $g]]);
  var tm = {};
  var im = { class: "tify-icon -image-area", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function nm(t, i) {
    return E(), A("svg", im, [...i[0] || (i[0] = [R("path", { d: "M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" }, null, -1)])]);
  }
  var sm = $(tm, [["render", nm]]);
  var rm = {};
  var om = { class: "tify-icon -dots-grid", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function am(t, i) {
    return E(), A("svg", om, [...i[0] || (i[0] = [R("path", { d: "M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z" }, null, -1)])]);
  }
  var lm = $(rm, [["render", am]]);
  var um = {};
  var cm = { class: "tify-icon -page-last", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function hm(t, i) {
    return E(), A("svg", cm, [...i[0] || (i[0] = [R("path", { d: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z" }, null, -1)])]);
  }
  var dm = $(um, [["render", hm]]);
  var fm = {};
  var pm = { class: "tify-icon -skip-next", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gm(t, i) {
    return E(), A("svg", pm, [...i[0] || (i[0] = [R("path", { d: "M16,18H18V6H16M6,18L14.5,12L6,6V18Z" }, null, -1)])]);
  }
  var mm = $(fm, [["render", gm]]);
  var vm = {};
  var ym = { class: "tify-icon -skip-previous", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function wm(t, i) {
    return E(), A("svg", ym, [...i[0] || (i[0] = [R("path", { d: "M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" }, null, -1)])]);
  }
  var _m = $(vm, [["render", wm]]);
  var Tm = {};
  var xm = { class: "tify-icon -page-first", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function bm(t, i) {
    return E(), A("svg", xm, [...i[0] || (i[0] = [R("path", { d: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z" }, null, -1)])]);
  }
  var Em = $(Tm, [["render", bm]]);
  var Cm = {};
  var Sm = ["disabled", "title", "aria-label"];
  var Pm = ["disabled", "title", "aria-label"];
  var Rm = ["disabled", "title", "aria-label"];
  var Dm = ["disabled", "title", "aria-label"];
  var Am = ["disabled", "title", "aria-label"];
  var Lm = ["disabled", "title", "aria-label"];
  function Im(t, i) {
    const e = Em, n = _m, r = Ro, s = Po, o = mm, l = dm;
    return E(), A("div", { class: Pe(["tify-header-button-group -pagination", { "-reversed": t.$store.isReversed, "-vertical": t.$store.isVertical }]) }, [R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("First page"), "aria-label": t.$translate("First page"), onClick: i[0] || (i[0] = (a) => t.$store.goToFirstPage()) }, [ie(e)], 8, Sm), t.$store.sections.length > 1 ? (E(), A("button", { key: 0, type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous section"), "aria-label": t.$translate("Previous section"), onClick: i[1] || (i[1] = (a) => t.$store.goToPreviousSection()) }, [ie(n)], 8, Pm)) : J("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous page"), "aria-label": t.$translate("Previous page"), onClick: i[2] || (i[2] = (a) => t.$store.goToPreviousPage()) }, [ie(r)], 8, Rm), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Next page"), "aria-label": t.$translate("Next page"), onClick: i[3] || (i[3] = (a) => t.$store.goToNextPage()) }, [ie(s)], 8, Dm), t.$store.sections.length > 1 ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button", disabled: t.$store.isLastSection, title: t.$translate("Next section"), "aria-label": t.$translate("Next section"), onClick: i[4] || (i[4] = (a) => t.$store.goToNextSection()) }, [ie(o)], 8, Am)) : J("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Last page"), "aria-label": t.$translate("Last page"), onClick: i[5] || (i[5] = (a) => t.$store.goToLastPage()) }, [ie(l)], 8, Lm)], 2);
  }
  var Mm = $(Cm, [["render", Im]]);
  var Hm = {};
  var Om = { class: "tify-icon -book-open-blank-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Fm(t, i) {
    return E(), A("svg", Om, [...i[0] || (i[0] = [R("path", { d: "M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H11V19H3M21,19H13V6H21V19Z" }, null, -1)])]);
  }
  var km = $(Hm, [["render", Fm]]);
  var Bm = {};
  var Vm = { class: "tify-icon -view-module", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function zm(t, i) {
    return E(), A("svg", Vm, [...i[0] || (i[0] = [R("path", { d: "M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z" }, null, -1)])]);
  }
  var Nm = $(Bm, [["render", zm]]);
  var Um = { data() {
    return { filter: "", filteredCanvases: [], highlightIndex: 0 };
  }, watch: { filter() {
    this.updateFilteredCanvases(), this.$nextTick(() => this.updateScroll());
  } }, mounted() {
    this.updateFilteredCanvases();
  }, methods: { onKeyDownArrow() {
    this.highlightIndex < this.filteredCanvases.length - 1 && (this.highlightIndex += 1, this.updateScroll());
  }, onKeyUpArrow() {
    this.highlightIndex > 0 && (this.highlightIndex -= 1, this.updateScroll());
  }, onOpen() {
    this.filter = "", this.highlightIndex = this.$store.options.pages.at(-1) - 1, this.$nextTick(() => {
      window.matchMedia("(pointer: coarse)").matches || this.$refs.search.focus(), this.updateScroll();
    });
  }, resetFilter(t) {
    this.filter && (this.filter = "", t.stopPropagation());
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, updateFilteredCanvases() {
    const t = [], i = this.filter.toLowerCase();
    let e = -1;
    this.$store.manifest.items.forEach((n, r) => {
      const o = this.$store.localize(n.label).toLowerCase().includes(i), l = (r + 1).toFixed().includes(i);
      if (o || l) {
        const a = n;
        a.page = r + 1, a.page === this.$store.options.pages[0] && (e = t.length), t.push(a);
      }
    }), this.highlightIndex = e < 0 ? 0 : e, this.filteredCanvases = t;
  }, updateScroll() {
    const { list: t } = this.$refs, i = t.children[this.highlightIndex];
    t && i && (t.scrollTop = i.offsetTop - t.offsetHeight / 2 + i.offsetHeight / 2);
  } } };
  var Wm = { class: "tify-sr-only" };
  var jm = { class: "tify-sr-only" };
  var Gm = { class: "tify-page-select-filter" };
  var qm = ["aria-label"];
  var Zm = { ref: "list", class: "tify-button-list tify-page-select-list" };
  var Km = ["onClick"];
  function Xm(t, i, e, n, r, s) {
    const o = ti, l = us;
    return E(), le(l, { class: "tify-page-select", shortcut: "x", onOpen: s.onOpen }, { button: Ye(() => [R("span", Wm, B(`${t.$translate("Current Page")} `), 1), ie(o, { number: t.$store.options.pages.find((a) => a > 0) }, null, 8, ["number"]), R("span", jm, " / " + B(t.$translate("Toggle page select")), 1)]), default: Ye(() => [R("div", Gm, [ke(R("input", { ref: "search", "onUpdate:modelValue": i[0] || (i[0] = (a) => r.filter = a), "aria-label": t.$translate("Filter pages"), type: "text", class: "tify-page-select-input", onKeyup: i[1] || (i[1] = Ot((a) => t.$refs.list.querySelectorAll("a")[r.highlightIndex].click(), ["enter"])), onKeydown: [i[2] || (i[2] = Ot((a) => s.resetFilter(), ["esc"])), i[3] || (i[3] = Ot(zt((a) => s.onKeyUpArrow(), ["prevent"]), ["up"])), i[4] || (i[4] = Ot(zt((a) => s.onKeyDownArrow(), ["prevent"]), ["down"]))] }, null, 40, qm), [[Gi, r.filter]])]), R("ol", Zm, [(E(true), A(ue, null, Ce(r.filteredCanvases, (a, u) => (E(), A("li", { key: u }, [R("a", { href: "javascript:;", class: Pe({ "-current": t.$store.options.pages.includes(a.page), "-highlighted": r.highlightIndex === u }), onClick: (c) => s.setPage(a.page) }, [ie(o, { number: a.page, wrap: true }, null, 8, ["number"])], 10, Km)]))), 128))], 512)]), _: 1 }, 8, ["onOpen"]);
  }
  var Ym = $(Um, [["render", Xm]]);
  var Jm = { props: { textEnabled: Boolean, tocEnabled: Boolean }, data() {
    return { controlsVisible: false, fullscreen: uf(this.$store.rootElement.parentNode) };
  }, computed: { doublePageEnabled() {
    var t;
    return (t = this.$store.manifest.behavior) != null && t.some((i) => ["continuous", "individuals"].includes(i)) ? false : this.$store.manifest.items.some((i) => {
      var e, n, r, s, o;
      return ((o = (s = (r = (n = (e = i.items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.type) === "Image";
    });
  }, title() {
    return this.$store.localize((this.$store.manifest || this.$store.collection || {}).label).replace(/(\S{1,10})\s+(\S{1,10})$/, "$1\xA0$2");
  } }, created() {
    this.$api.expose(this.setView), this.$api.expose(this.toggleDoublePage), this.$api.expose(this.fullscreen.toggle, "toggleFullscreen");
  }, mounted() {
    this.$store.rootElement.addEventListener("keydown", this.onKeyDown), So(this.$refs.controls, () => {
      this.closeControlsPopup();
    });
  }, beforeUnmount() {
    this.$store.rootElement.removeEventListener("keydown", this.onKeyDown);
  }, methods: { closeControlsPopup() {
    this.controlsVisible = false;
  }, onKeyDown(t) {
    if (ls(t)) return;
    if (t.key === "Escape") {
      this.controlsVisible = false;
      return;
    }
    switch (t.key) {
      case "Backspace":
        this.$refs.switchViewSmall.offsetParent && this.toggleView(null);
        break;
      case "1":
        this.$store.manifest && this.textEnabled && this.toggleView("text");
        break;
      case "2":
        this.$store.manifest && this.toggleView("thumbnails");
        break;
      case "3":
        this.$store.manifest && this.tocEnabled && this.toggleView("toc");
        break;
      case "4":
        this.toggleView("info");
        break;
      case "5":
        (this.$store.collection || this.$store.manifest) && this.toggleView("export");
        break;
      case "6":
        this.$store.collection && this.toggleView("collection");
        break;
      case "7":
        this.toggleView("help");
        break;
      case "b":
        this.$store.manifest && this.toggleDoublePage();
        break;
      case "f":
        this.fullscreen.toggle();
        break;
    }
    if (!this.$store.manifest) return;
    const { pages: i } = this.$store.options;
    switch (t.key) {
      case "q":
      case ",":
        i[0] > 1 && this.$store.goToPreviousPage();
        break;
      case "e":
      case ".":
        this.isLastPage || this.$store.goToNextPage();
        break;
      case "Q":
        i[0] > 1 && this.$store.goToFirstPage();
        break;
      case "E":
        this.isLastPage || this.$store.goToLastPage();
        break;
    }
  }, setView(t) {
    this.$store.updateOptions({ view: t });
  }, toggleControlsPopup() {
    this.controlsVisible = !this.controlsVisible;
  }, toggleDoublePage(t) {
    const { pages: i } = this.$store.options;
    if (!this.doublePageEnabled) return i[0];
    let e;
    return i.length > 1 && t !== true || t === false ? e = [i[1] > 0 ? i[1] : i[0]] : e = [i[0], this.$store.getFacingPage(i[0])].sort(), this.$store.updateOptions({ pages: e }), e;
  }, toggleView(t) {
    this.closeControlsPopup();
    const i = t === this.$store.options.view && this.$store.manifest && this.$store.isContainerWidthAtLeast("medium") ? null : t;
    return this.$store.updateOptions({ view: i }), i;
  } } };
  var Qm = { class: "tify-header" };
  var $m = { class: "tify-header-column -title" };
  var ev = ["title"];
  var tv = { key: 0, class: "tify-header-column -pagination" };
  var iv = { class: "tify-sr-only" };
  var nv = { class: "tify-header-button-group -page-select" };
  var sv = ["title", "aria-label", "aria-pressed"];
  var rv = { ref: "controls", class: "tify-header-column -controls" };
  var ov = { class: "tify-sr-only" };
  var av = { ref: "switchViewSmall", class: "tify-header-button-group -toggle" };
  var lv = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var uv = ["id"];
  var cv = { class: "tify-header-button-group -view" };
  var hv = ["aria-controls", "aria-expanded"];
  var dv = { class: "tify-header-button-label" };
  var fv = ["aria-controls", "aria-expanded"];
  var pv = { class: "tify-header-button-label" };
  var gv = ["aria-controls", "aria-expanded"];
  var mv = { class: "tify-header-button-label" };
  var vv = ["aria-controls", "aria-expanded"];
  var yv = { class: "tify-header-button-label" };
  var wv = ["aria-controls", "aria-expanded"];
  var _v = { class: "tify-header-button-label" };
  var Tv = ["aria-controls", "aria-expanded"];
  var xv = { class: "tify-header-button-label" };
  var bv = ["aria-controls", "aria-expanded"];
  var Ev = { class: "tify-header-button-label" };
  var Cv = { class: "tify-header-button-group -view" };
  var Sv = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var Pv = { class: "tify-header-button-label" };
  var Rv = ["title", "aria-label"];
  var Dv = { class: "tify-header-button-label" };
  var Av = ["title", "aria-label"];
  var Lv = { class: "tify-header-button-label" };
  function Iv(t, i, e, n, r, s) {
    const o = Ym, l = Nm, a = km, u = Mm, c = lm, h = sm, f = em, m = Yg, v = qg, y = Ug, x = Bg, T = Hg, C = Ag, H = Sg;
    return E(), A("header", Qm, [R("div", $m, [R("h1", { class: "tify-header-title", title: s.title }, B(s.title), 9, ev)]), t.$store.pageCount > 1 ? (E(), A("div", tv, [R("h2", iv, B(t.$translate("Page")), 1), R("div", nv, [ie(o), s.doublePageEnabled ? (E(), A("button", { key: 0, type: "button", class: Pe(["tify-header-button", { "-vertical": t.$store.isVertical }]), title: t.$translate("Toggle double-page"), "aria-label": t.$translate("Toggle double-page"), "aria-pressed": t.$store.options.pages.length > 1, onClick: i[0] || (i[0] = (...k) => s.toggleDoublePage && s.toggleDoublePage(...k)) }, [t.$store.isCustomPageView ? (E(), le(l, { key: 0 })) : (E(), le(a, { key: 1 }))], 10, sv)) : J("", true)]), t.$store.pageCount > 1 ? (E(), le(u, { key: 0 })) : J("", true)])) : J("", true), R("div", rv, [R("h2", ov, B(t.$translate("View [noun]")), 1), R("div", av, [R("button", { type: "button", "aria-controls": t.$getId("controls"), "aria-expanded": r.controlsVisible, class: "tify-header-button", title: t.$translate("View [noun]"), "aria-label": t.$translate("View [noun]"), onClick: i[1] || (i[1] = (...k) => s.toggleControlsPopup && s.toggleControlsPopup(...k)) }, [ie(c)], 8, lv)], 512), R("div", { id: t.$getId("controls"), class: Pe(["tify-dropdown-content -bottom -mobile-only", { "-visible": r.controlsVisible }]) }, [R("div", cv, [t.$store.manifest ? (E(), A("button", { key: 0, type: "button", class: "tify-header-button -media", "aria-controls": t.$getId("media"), "aria-expanded": !t.$store.options.view, onClick: i[2] || (i[2] = (k) => s.toggleView(null)) }, [ie(h), R("span", dv, B(t.$translate("Media")), 1)], 8, hv)) : J("", true), e.textEnabled ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button", "aria-controls": t.$getId("text"), "aria-expanded": t.$store.options.view === "text", onClick: i[3] || (i[3] = (k) => s.toggleView("text")) }, [ie(f), R("span", pv, B(t.$translate("Text")), 1)], 8, fv)) : J("", true), t.$store.manifest ? (E(), A("button", { key: 2, type: "button", class: "tify-header-button", "aria-controls": t.$getId("thumbnails"), "aria-expanded": t.$store.options.view === "thumbnails", onClick: i[4] || (i[4] = (k) => s.toggleView("thumbnails")) }, [ie(l), R("span", mv, B(t.$translate("Pages")), 1)], 8, gv)) : J("", true), e.tocEnabled ? (E(), A("button", { key: 3, type: "button", class: "tify-header-button", "aria-controls": t.$getId("toc"), "aria-expanded": t.$store.options.view === "toc", onClick: i[5] || (i[5] = (k) => s.toggleView("toc")) }, [ie(m), R("span", yv, B(t.$translate("Contents")), 1)], 8, vv)) : J("", true), R("button", { type: "button", class: "tify-header-button", "aria-controls": t.$getId("info"), "aria-expanded": t.$store.options.view === "info", onClick: i[6] || (i[6] = (k) => s.toggleView("info")) }, [ie(v), R("span", _v, B(t.$translate("Info")), 1)], 8, wv), t.$store.collection || t.$store.manifest ? (E(), A("button", { key: 4, type: "button", class: "tify-header-button", "aria-controls": t.$getId("export"), "aria-expanded": t.$store.options.view === "export", onClick: i[7] || (i[7] = (k) => s.toggleView("export")) }, [ie(y), R("span", xv, B(t.$translate("Export [noun]")), 1)], 8, Tv)) : J("", true), t.$store.collection ? (E(), A("button", { key: 5, type: "button", class: "tify-header-button", "aria-controls": t.$getId("collection"), "aria-expanded": t.$store.options.view === "collection", onClick: i[8] || (i[8] = (k) => s.toggleView("collection")) }, [ie(x), R("span", Ev, B(t.$translate("Collection")), 1)], 8, bv)) : J("", true)]), R("div", Cv, [R("button", { type: "button", class: "tify-header-button -icon-only", "aria-controls": t.$getId("help"), "aria-expanded": t.$store.options.view === "help", title: t.$translate("Help"), "aria-label": t.$translate("Help"), onClick: i[9] || (i[9] = (k) => s.toggleView("help")) }, [ie(T), R("span", Pv, B(t.$translate("Help")), 1)], 8, Sv), r.fullscreen.isFullscreen ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Exit fullscreen"), "aria-label": t.$translate("Exit fullscreen"), onClick: i[11] || (i[11] = (k) => r.fullscreen.toggle()) }, [ie(H), R("span", Lv, B(t.$translate("Exit fullscreen")), 1)], 8, Av)) : (E(), A("button", { key: 0, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Fullscreen"), "aria-label": t.$translate("Fullscreen"), onClick: i[10] || (i[10] = (k) => r.fullscreen.toggle()) }, [ie(C), R("span", Dv, B(t.$translate("Fullscreen")), 1)], 8, Rv))]), t.$store.pageCount > 1 ? (E(), le(u, { key: 0 })) : J("", true)], 10, uv)], 512)]);
  }
  var Mv = $(Jm, [["render", Iv]]);
  var Hv = { version: "0.35.0" };
  var Ov = { props: { readyPromise: { type: Object, default: null, required: true } }, data() {
    return { readyToRender: false };
  }, computed: { hasText() {
    var t, i;
    return (i = (t = this.$store.manifest) == null ? void 0 : t.items) == null ? void 0 : i.some((e) => "annotations" in e);
  }, hasToc() {
    return this.$store.structures.length > 0;
  } }, watch: { "$store.options.pages": function(t, i) {
    i && (this.$store.options.layers = []), this.$store.annotationsActive && this.$store.loadAnnotations();
  }, "$store.options.view": function() {
    this.$store.annotationsActive && this.$store.loadAnnotations();
  } }, created() {
    this.$api.expose(this.setLanguage), this.$api.expose(this.$store.setPage), this.$api.expose(this.$store.updateOptions);
  }, mounted() {
    if (this.$store.rootElement = this.$el, !this.$store.options.manifestUrl) {
      if (this.$store.options.contentStateEnabled) {
        const t = new URLSearchParams(window.location.search);
        this.$store.options.manifestUrl = t.get("iiif-content") || "";
      }
      if (!this.$store.options.manifestUrl) {
        this.$store.addError("Missing IIIF manifest URL");
        return;
      }
    }
    Promise.all([this.$store.loadManifest(this.$store.options.manifestUrl), this.setLanguage(this.$store.options.language)]).then(() => {
      this.readyToRender = true, this.$nextTick(() => {
        Promise.all(this.$store.readyPromises).then(() => {
          setTimeout(this.readyPromise.resolve);
        });
      });
    }, (t) => {
      this.readyPromise.reject(t);
    });
  }, beforeUnmount() {
    clearTimeout(this.$store.urlUpdateTimeout), window.removeEventListener("popstate", this.$store.initOptions);
  }, methods: { setLanguage(t) {
    const i = cs();
    if (t === "en") return this.$store.options.language = "en", this.$translate.setTranslation(null), i.resolve(t), i;
    if (this.$store.options.translationsDirUrl === null) return i.reject(new Error("Could not determine translationsDirUrl")), i;
    const e = `${this.$store.options.translationsDirUrl}/${t}.json?${Hv.version}`;
    return this.$store.fetchJson(e).then((n) => {
      this.$store.options.language = t, this.$translate.setTranslation(n), i.resolve(t);
    }, (n) => {
      const r = n.response ? n.response.statusText : n.message;
      this.$store.addError(`Error loading translation \u201C${t}\u201D: ${r}`), i.resolve(this.$store.options.language);
    }), i;
  } } };
  var Fv = { key: 1, class: "tify-main" };
  var kv = { key: 2, class: "tify-loading", role: "status" };
  var Bv = { class: "tify-sr-only" };
  var Vv = { key: 3, class: "tify-error" };
  var zv = ["aria-label"];
  var Nv = { class: "tify-error-messages" };
  function Uv(t, i, e, n, r, s) {
    const o = Mv, l = xg, a = Sd, u = md, c = id, h = Yh, f = rh, m = nc, v = Hu, y = vo;
    return E(), A("article", { class: Pe(["tify", t.$store.options.colorMode === "auto" ? "" : `-${t.$store.options.colorMode}`]), tabindex: "-1" }, [r.readyToRender && (t.$store.collection || t.$store.manifest) ? (E(), le(o, { key: 0, textEnabled: s.hasText, tocEnabled: s.hasToc }, null, 8, ["textEnabled", "tocEnabled"])) : J("", true), r.readyToRender ? (E(), A("div", Fv, [t.$store.manifest ? (E(), A(ue, { key: 0 }, [ie(l, { id: t.$getId("media") }, null, 8, ["id"]), s.hasText ? ke((E(), le(a, { key: 0, id: t.$getId("text") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "text"]]) : J("", true), ke(ie(u, { id: t.$getId("thumbnails") }, null, 8, ["id"]), [[Xe, t.$store.options.view === "thumbnails"]]), s.hasToc ? ke((E(), le(c, { key: 1, id: t.$getId("toc") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "toc"]]) : J("", true)], 64)) : J("", true), t.$store.collection || t.$store.manifest ? ke((E(), le(h, { key: 1, id: t.$getId("export") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "export"]]) : J("", true), t.$store.collection || t.$store.manifest ? ke((E(), le(f, { key: 2, id: t.$getId("info") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "info"]]) : J("", true), t.$store.collection ? ke((E(), le(m, { key: 3, id: t.$getId("collection") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "collection"]]) : J("", true), ke(ie(v, { id: t.$getId("help") }, null, 8, ["id"]), [[Xe, t.$store.options.view === "help"]])])) : J("", true), t.$store.loading ? (E(), A("div", kv, [R("span", Bv, B(t.$translate("Loading")), 1)])) : J("", true), t.$store.errors.size ? (E(), A("section", Vv, [R("button", { type: "button", class: "tify-error-close", "aria-label": t.$translate("Dismiss"), onClick: i[0] || (i[0] = (x) => t.$store.clearErrors()) }, [ie(y)], 8, zv), R("div", Nv, [(E(true), A(ue, null, Ce(t.$store.errors, (x) => (E(), A("p", { key: x }, B(x), 1))), 128))])])) : J("", true)], 2);
  }
  var Wv = $(Ov, [["render", Uv]]);
  var jv = { annotationId: null, annotationsVisible: null, childManifestAutoloaded: true, childManifestUrl: null, colorMode: "auto", container: null, contentStateEnabled: false, fallbackLanguage: "en", filters: {}, language: "en", layers: [], manifestUrl: null, optionsResetOnPageChange: ["pan"], pageLabelFormat: "P&nbsp;\xB7 L", pages: null, pan: {}, preferredImageFormat: null, rotation: null, translationsDirUrl: null, urlQueryKey: null, urlQueryParams: ["annotationId", "annotationsVisible", "childManifestUrl", "layers", "filters", "pages", "pan", "rotation", "view", "zoom"], view: null, viewer: {}, zoom: null };
  function Gv(t) {
    return { expose(i, e) {
      t[e || i.name.replace("bound ", "")] = i;
    } };
  }
  var qv = { install: (t, i) => {
    t.config.globalProperties.$api = new Gv(i.instance);
  } };
  var Zv = "TIFY is a slim and mobile-friendly IIIF document viewer, released under the <a href='https://www.gnu.org/licenses/agpl-3.0.html.en'>GNU Affero General Public License 3.0</a>.";
  var Kv = "Copyright &copy; 2017&ndash;2026 <a href='https://www.uni-goettingen.de/en/'>G\xF6ttingen University</a>&nbsp;/ <a href='https://www.sub.uni-goettingen.de/en/'>G\xF6ttingen State and University Library</a>";
  var Xv = { $info: Zv, $copyright: Kv, "$n/a": "\u2012" };
  var Yv = { install: (t) => {
    const i = gi(null);
    t.config.globalProperties.$translate = (e) => {
      var s, o, l;
      const { language: n } = t.config.globalProperties.$store.options, r = (o = (s = t.config.globalProperties.$store.options.translations) == null ? void 0 : s[n]) == null ? void 0 : o[e];
      return r || ((l = i.value) != null && l[e] ? i.value[e] : Xv[e] || e.replace(/\s*\[.+?\]/g, ""));
    }, t.config.globalProperties.$translate.setTranslation = (e) => {
      i.value = e;
    };
  } };
  var Jv = { install: (t) => {
    const i = crypto != null && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString().slice(2);
    t.config.globalProperties.$getId = (e) => `${i}-${e}`;
  } };
  function _i(t) {
    "@babel/helpers - typeof";
    return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, _i(t);
  }
  function Qv(t, i) {
    if (_i(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
      var n = e.call(t, i);
      if (_i(n) != "object") return n;
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(t);
  }
  function $v(t) {
    var i = Qv(t, "string");
    return _i(i) == "symbol" ? i : i + "";
  }
  function ir(t, i, e) {
    return (i = $v(i)) in t ? Object.defineProperty(t, i, { value: e, enumerable: true, configurable: true, writable: true }) : t[i] = e, t;
  }
  function ey(t) {
    return Array.isArray(t) ? t : t ? [t] : [];
  }
  function ct(t) {
    for (let i in t) (t[i] === void 0 || t[i] === null) && delete t[i];
    return t;
  }
  var ty = "http://library.stanford.edu/iiif/image-api/compliance.html#level0";
  var iy = "http://library.stanford.edu/iiif/image-api/compliance.html#level1";
  var Ao = "http://library.stanford.edu/iiif/image-api/compliance.html#level2";
  var ny = "http://library.stanford.edu/iiif/image-api/conformance.html#level0";
  var sy = "http://library.stanford.edu/iiif/image-api/conformance.html#level1";
  var Lo = "http://library.stanford.edu/iiif/image-api/conformance.html#level2";
  var ry = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0";
  var oy = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1";
  var Io = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2";
  var ay = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0";
  var ly = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1";
  var Mo = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2";
  var uy = "http://iiif.io/api/image/1/level0.json";
  var cy = "http://iiif.io/api/image/1/profiles/level0.json";
  var hy = "http://iiif.io/api/image/1/level1.json";
  var dy = "http://iiif.io/api/image/1/profiles/level1.json";
  var Ho = "http://iiif.io/api/image/1/level2.json";
  var Oo = "http://iiif.io/api/image/1/profiles/level2.json";
  var fy = "http://iiif.io/api/image/2/level0.json";
  var py = "http://iiif.io/api/image/2/profiles/level0.json";
  var gy = "http://iiif.io/api/image/2/level1.json";
  var my = "http://iiif.io/api/image/2/profiles/level1.json";
  var Fo = "http://iiif.io/api/image/2/level2.json";
  var ko = "http://iiif.io/api/image/2/profiles/level2.json";
  var vy = "level0";
  var yy = "level1";
  var Bo = "level2";
  var wy = "http://iiif.io/api/image/2/level0";
  var _y = "http://iiif.io/api/image/2/level1";
  var Vo = "http://iiif.io/api/image/2/level2";
  var Ty = [Vo, Ao, Lo, Io, Mo, Ho, Oo, Fo, ko, Bo];
  var xy = [wy, _y, Vo, ty, iy, Ao, ny, sy, Lo, ry, oy, Io, ay, ly, Mo, uy, cy, hy, dy, Ho, Oo, fy, py, gy, my, Fo, ko, vy, yy, Bo];
  var by = xy;
  var nr = ["sc:Collection", "sc:Manifest", "sc:Canvas", "sc:AnnotationList", "oa:Annotation", "sc:Range", "sc:Layer", "sc:Sequence", "oa:Choice", "Service", "ContentResource"];
  function Ey(t) {
    if (t == null) throw Error("Null or undefined is not a valid entity.");
    if (Array.isArray(t)) throw Error("Array is not a valid entity");
    if (typeof t != "object") throw Error(`${typeof t} is not a valid entity`);
    if (typeof t["@type"] == "string") {
      let i = nr.indexOf(t["@type"]);
      if (i !== -1) return nr[i];
    }
    if (t.profile) return "Service";
    if (t.format || t["@type"]) return "ContentResource";
    throw Error("Resource type is not known");
  }
  var Cy = class zo {
    constructor(i, e = {}) {
      ir(this, "traversals", void 0), ir(this, "options", void 0), this.traversals = { collection: [], manifest: [], canvas: [], annotationList: [], sequence: [], annotation: [], contentResource: [], choice: [], range: [], service: [], layer: [], ...i }, this.options = { convertPropsToArray: true, mergeMemberProperties: true, allowUndefinedReturn: false, ...e };
    }
    static all(i) {
      return new zo({ collection: [i], manifest: [i], canvas: [i], annotationList: [i], sequence: [i], annotation: [i], contentResource: [i], choice: [i], range: [i], service: [i], layer: [i] });
    }
    traverseCollection(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCollectionItems(i))), this.traversals.collection);
    }
    traverseCollectionItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.manifests || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Manifest" } : s), ...(i.collections || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Collection" } : s), ...i.members || []], n = [], r = e.filter((s) => n.includes(s["@id"]) ? false : (n.push(s["@id"]), true));
        delete i.collections, delete i.manifests, i.members = r;
      }
      return i.manifests && (i.manifests = i.manifests.map((e) => this.traverseManifest(typeof e == "string" ? { "@id": e, "@type": "sc:Manifest" } : e))), i.collections && (i.collections = i.collections.map((e) => this.traverseCollection(typeof e == "string" ? { "@id": e, "@type": "sc:Collection" } : e))), i.members && (i.members = i.members.map((e) => typeof e == "string" ? e : e["@type"] === "sc:Collection" ? this.traverseCollection(e) : e["@type"] === "sc:Manifest" ? this.traverseManifest(e) : this.traverseUnknown(e))), i;
    }
    traverseManifest(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseManifestItems(i))), this.traversals.manifest);
    }
    traverseManifestItems(i) {
      return i.sequences && (i.sequences = i.sequences.map((e) => this.traverseSequence(e))), i.structures && (i.structures = i.structures.map((e) => this.traverseRange(e))), i;
    }
    traverseSequence(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseSequenceItems(i))), this.traversals.sequence);
    }
    traverseSequenceItems(i) {
      return i.canvases && (i.canvases = i.canvases.map((e) => this.traverseCanvas(e))), i;
    }
    traverseCanvas(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCanvasItems(i))), this.traversals.canvas);
    }
    traverseCanvasItems(i) {
      return i.images && (i.images = i.images.map((e) => (e.on && e["@type"] !== "oa:Annotation" && e["@type"] !== "Annotation" && (e["@type"] = "oa:Annotation"), this.traverseAnnotation(e)))), i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseRange(i) {
      return i["@type"] !== "sc:Range" && (i["@type"] = "sc:Range"), this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseRangeItems(i))), this.traversals.range);
    }
    traverseRangeItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.ranges || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Range" } : n), ...(i.canvases || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Canvas" } : n), ...i.members || []];
        delete i.ranges, delete i.canvases, i.members = e.length ? e.map((n) => this.traverseUnknown(n)) : void 0;
      }
      return i;
    }
    traverseAnnotationList(i) {
      let e = typeof i == "string" ? { "@id": i, "@type": "sc:AnnotationList" } : i;
      return this.traverseType(this.traverseDescriptive(this.traverseAnnotationListItems(e)), this.traversals.annotationList);
    }
    traverseAnnotationListItems(i) {
      return i.resources && (i.resources = i.resources.map((e) => this.traverseAnnotation(e))), i;
    }
    traverseAnnotation(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseAnnotationItems(i))), this.traversals.annotation);
    }
    traverseAnnotationItems(i) {
      return i.resource && (Array.isArray(i.resource) ? i.resource = i.resource.map((e) => this.traverseContentResource(e)) : i.resource = this.traverseContentResource(i.resource)), i.on, i;
    }
    traverseLayer(i) {
      return this.traverseType(this.traverseLinking(this.traverseLayerItems(i)), this.traversals.layer);
    }
    traverseLayerItems(i) {
      return i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseChoice(i) {
      return this.traverseType(this.traverseChoiceItems(i), this.traversals.choice);
    }
    traverseChoiceItems(i) {
      return i.default && i.default !== "rdf:nil" && (i.default = this.traverseContentResource(i.default)), i.item && i.item !== "rdf:nil" && (i.item = i.item.map((e) => this.traverseContentResource(e))), i;
    }
    traverseService(i) {
      return this.traverseType(this.traverseLinking(i), this.traversals.service);
    }
    traverseContentResource(i) {
      return i["@type"] === "oa:Choice" ? this.traverseChoice(i) : this.traverseType(this.traverseDescriptive(this.traverseLinking(i)), this.traversals.contentResource);
    }
    traverseUnknown(i) {
      if (!i["@type"] || typeof i == "string") return i;
      switch (Ey(i)) {
        case "sc:Collection":
          return this.traverseCollection(i);
        case "sc:Manifest":
          return this.traverseManifest(i);
        case "sc:Canvas":
          return this.traverseCanvas(i);
        case "sc:Sequence":
          return this.traverseSequence(i);
        case "sc:Range":
          return this.traverseRange(i);
        case "oa:Annotation":
          return this.traverseAnnotation(i);
        case "sc:AnnotationList":
          return this.traverseAnnotationList(i);
        case "sc:Layer":
          return this.traverseLayer(i);
        case "Service":
          return this.traverseService(i);
        case "oa:Choice":
          return this.traverseChoice(i);
        case "ContentResource":
          return this.traverseContentResource(i);
      }
      return i.profile ? this.traverseService(i) : i;
    }
    traverseImageResource(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) typeof s == "string" ? r.push(this.traverseContentResource({ "@id": s, "@type": "dctypes:Image" })) : r.push(this.traverseContentResource(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseDescriptive(i) {
      return i.thumbnail && (i.thumbnail = this.traverseImageResource(i.thumbnail)), i.logo && (i.logo = this.traverseImageResource(i.logo)), i;
    }
    traverseOneOrMoreServices(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) r.push(this.traverseService(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseLinking(i) {
      return i.related && (i.related = this.traverseOneOrManyType(i.related, this.traversals.contentResource)), i.rendering && (i.rendering = this.traverseOneOrManyType(i.rendering, this.traversals.contentResource)), i.service && (i.service = this.traverseOneOrMoreServices(i.service)), i.seeAlso && (i.seeAlso = this.traverseOneOrManyType(i.seeAlso, this.traversals.contentResource)), i.within && (typeof i.within == "string" || (i.within = this.traverseOneOrManyType(i.within, this.traversals.contentResource))), i.startCanvas && (typeof i.startCanvas == "string" ? i.startCanvas = this.traverseType({ "@id": i.startCanvas, "@type": "sc:Canvas" }, this.traversals.canvas) : i.startCanvas && this.traverseType(i.startCanvas, this.traversals.canvas)), i.contentLayer && (typeof i.contentLayer == "string" ? i.contentLayer = this.traverseLayer({ "@id": i.contentLayer, "@type": "sc:Layer" }) : i.contentLayer = this.traverseLayer(i.contentLayer)), i;
    }
    traverseOneOrManyType(i, e) {
      if (!Array.isArray(i)) if (this.options.convertPropsToArray) i = [i];
      else return this.traverseType(i, e);
      return i.map((n) => this.traverseType(n, e));
    }
    traverseType(i, e) {
      return e.reduce((n, r) => {
        let s = r(n);
        return s === void 0 && !this.options.allowUndefinedReturn ? n : s;
      }, i);
    }
  };
  var Sy = ["http://iiif.io/api/image/2/level1", "http://iiif.io/api/image/2/level2", "http://library.stanford.edu/iiif/image-api/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/conformance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2", "http://iiif.io/api/image/1/level1.json", "http://iiif.io/api/image/1/profiles/level1.json", "http://iiif.io/api/image/1/level2.json", "http://iiif.io/api/image/1/profiles/level2.json", "http://iiif.io/api/image/2/level1.json", "http://iiif.io/api/image/2/profiles/level1.json", "http://iiif.io/api/image/2/level2.json", "http://iiif.io/api/image/2/profiles/level2.json", "level1", "level2"];
  var Bn = { attributionLabel: "Attribution", providerId: "http://example.org/provider", providerName: "" };
  function Py(t) {
    if (typeof t == "string") return [t];
    if (!t) return [];
    let i = Array.isArray(t) ? t : [t], e = [];
    for (let n of i) {
      if (typeof n == "string") {
        e.push(n);
        continue;
      }
      e.push({ "@language": n["@language"] || n.language, "@value": n["@value"] || n.value });
    }
    return e;
  }
  function kt(t, i = "none") {
    if (!t) return { none: [""] };
    let e = Py(t), n = {};
    for (let r of e) {
      if (typeof r == "string") {
        n[i] = n[i] ? n[i] : [], n[i].push(r || "");
        continue;
      }
      if (!r["@language"]) {
        n[i] = n[i] ? n[i] : [], n[i].push(r["@value"] || "");
        continue;
      }
      let s = r["@language"];
      n[s] = n[s] ? n[s] : [], n[s].push(r["@value"] || "");
    }
    return Object.keys(n).length === 0 ? { none: [""] } : n;
  }
  function No(t) {
    if (Array.isArray(t)) return No(t.find((i) => typeof i == "string"));
    if (Ty.indexOf(t) !== -1) return "level2";
    if (Sy.indexOf(t) !== -1) return "level1";
    if (by.indexOf(t) !== -1) return "level0";
    if (typeof t == "string") return t;
  }
  function Ry(t) {
    let i = Array.isArray(t) ? t : [t];
    for (let e of i) switch (e) {
      case "http://iiif.io/api/image/2/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2":
        return "ImageService2";
      case "http://iiif.io/api/image/1/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
        return "ImageService1";
      case "http://iiif.io/api/annex/openannotation/context.json":
        return "ImageApiSelector";
    }
  }
  function Dy(t) {
    switch (t) {
      case "http://iiif.io/api/image/2/level0.json":
      case "http://iiif.io/api/image/2/level1.json":
      case "http://iiif.io/api/image/2/level2.json":
        return "ImageService2";
      case "http://iiif.io/api/auth/1/kiosk":
      case "http://iiif.io/api/auth/1/login":
      case "http://iiif.io/api/auth/1/clickthrough":
      case "http://iiif.io/api/auth/1/external":
      case "http://iiif.io/api/auth/0/kiosk":
      case "http://iiif.io/api/auth/0/login":
      case "http://iiif.io/api/auth/0/clickthrough":
      case "http://iiif.io/api/auth/0/external":
        return "AuthCookieService1";
      case "http://iiif.io/api/auth/1/token":
      case "http://iiif.io/api/auth/0/token":
        return "AuthTokenService1";
      case "http://iiif.io/api/auth/1/logout":
      case "http://iiif.io/api/auth/0/logout":
        return "AuthLogoutService1";
      case "http://iiif.io/api/search/1/search":
      case "http://iiif.io/api/search/0/search":
        return "SearchService1";
      case "http://iiif.io/api/search/1/autocomplete":
      case "http://iiif.io/api/search/0/autocomplete":
        return "AutoCompleteService1";
    }
  }
  function sr(t) {
    for (let i of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (t.startsWith(`${i}:`)) return t.slice(i.length + 1);
    return t;
  }
  var Ay = ["Collection", "Manifest", "Annotation", "AnnotationPage", "Range", "Service"];
  function hs(t) {
    let i = t["@id"] || t.id, e = t["@type"] || t.type, n = t.profile || void 0, r = t["@context"] || void 0;
    if (n) {
      let s = Dy(n);
      if (s) return s;
    }
    if (r) {
      let s = Ry(r);
      if (s) return s;
    }
    if (e) {
      if (Array.isArray(e)) {
        if (e.indexOf("oa:CssStylesheet") !== -1) return "CssStylesheet";
        if (e.indexOf("cnt:ContentAsText") !== -1) return "TextualBody";
        e = e[0];
      }
      for (let s of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (e.startsWith(`${s}:`)) {
        e = e.slice(s.length + 1);
        break;
      }
      switch (e) {
        case "Layer":
          return "AnnotationCollection";
        case "AnnotationList":
          return "AnnotationPage";
        case "cnt:ContentAsText":
          return "TextualBody";
      }
    }
    if (e && Ay.indexOf(e) !== -1) return e;
    if (t.format) {
      if (t.format.startsWith("image/")) return "Image";
      if (t.format.startsWith("text/") || t.format === "application/pdf") return "Text";
      if (t.format.startsWith("application/")) return "Dataset";
    }
    return i && (i.endsWith(".jpg") || i.endsWith(".png") || i.endsWith(".jpeg")) ? "Image" : e || "unknown";
  }
  var Ly = /^|["'\\>]http(s)?:\/\/(creativecommons.org|rightsstatements.org)\/[^"'\\<\n]+/gm;
  function Iy(t) {
    let i = t.match(Ly);
    return i ? i[0] : t;
  }
  function My(t, i = "Rights/License", e = "none") {
    let n = null, r = [], s = Array.isArray(t) ? t : [t];
    for (let o of s) {
      let l = o ? Iy(o) : void 0;
      if (l && (l.indexOf("creativecommons.org") !== -1 || l.indexOf("rightsstatements.org") !== -1)) {
        n = l.startsWith("https://") ? `http://${l.slice(8)}` : l;
        continue;
      }
      l && r.push({ label: { [e]: [i] }, value: { [e]: [l] } });
    }
    return [n, r];
  }
  var Hy = ["http://iiif.io/api/presentation/2/context.json", "http://iiif.io/api/image/2/context.json", "http://iiif.io/api/image/1/context.json", "http://library.stanford.edu/iiif/image-api/1.1/context.json", "http://iiif.io/api/search/1/context.json", "http://iiif.io/api/search/0/context.json", "http://iiif.io/api/auth/1/context.json", "http://iiif.io/api/auth/0/context.json", "http://iiif.io/api/annex/openannotation/context.json"];
  function Oy(t) {
    if (t) {
      let i = Array.isArray(t) ? t : [t], e = [];
      for (let n of i) n === "http://iiif.io/api/presentation/2/context.json" && e.push("http://iiif.io/api/presentation/3/context.json"), Hy.indexOf(n) === -1 && e.push(n);
      if (i.length) return e.length === 1 ? e[0] : e;
    }
  }
  function Fy(t) {
    return t ? t.map((i) => ({ label: kt(i.label), value: kt(i.value) })) : [];
  }
  var rr = 0;
  function Uo(t, i) {
    let e = encodeURI(t.id || t["@id"] || "").trim();
    return e && i ? `${e}/${i}` : e || (rr++, `http://example.org/${t["@type"]}${i ? `/${i}` : ""}/${rr}`);
  }
  function Tt(t) {
    let i = [...t.behavior || []];
    t.viewingHint && i.push(t.viewingHint);
    let e;
    return Array.isArray(t.motivation) ? e = t.motivation.map(sr) : t.motivation && (e = sr(t.motivation)), { "@context": t["@context"] ? Oy(t["@context"]) : void 0, id: (t["@id"] || Uo(t)).trim(), type: hs(t), behavior: i.length ? i : void 0, height: t.height ? t.height : void 0, width: t.width ? t.width : void 0, motivation: e, viewingDirection: t.viewingDirection, profile: t.profile, format: t.format ? t.format : void 0, duration: void 0, timeMode: void 0 };
  }
  function xt(t) {
    let [i, e] = My(t.license), n = [...t.metadata ? Fy(t.metadata) : [], ...e];
    return { rights: i, metadata: n.length ? n : void 0, label: t.label ? kt(t.label) : void 0, requiredStatement: t.attribution ? { label: kt(Bn.attributionLabel), value: kt(t.attribution) } : void 0, navDate: t.navDate, summary: t.description ? kt(t.description) : void 0, thumbnail: ky(t.thumbnail) };
  }
  function ky(t) {
    return t && (Array.isArray(t) ? t : [t]).map((e) => typeof e == "string" ? { id: e, type: "Image" } : (e.type === "unknown" && (e.type = "Image"), e));
  }
  function By(t) {
    if (!t.within) return;
    let i = Array.isArray(t.within) ? t.within : [t.within], e = [];
    for (let n of i) if (typeof n == "string") {
      if (n) switch (t["@type"]) {
        case "sc:Manifest":
          e.push({ id: n, type: "Collection" });
          break;
      }
    } else n["@id"] && e.push({ id: n["@id"], type: hs(n) });
    return e.length ? e : void 0;
  }
  function At(t) {
    let i = t.related ? Array.isArray(t.related) ? t.related : [t.related] : [], e = t.contentLayer;
    return { provider: t.logo || i.length ? [{ id: Bn.providerId, type: "Agent", homepage: i.length ? [i[0]] : void 0, logo: t.logo ? Array.isArray(t.logo) ? t.logo : [t.logo] : void 0, label: kt(Bn.providerName) }] : void 0, partOf: By(t), rendering: t.rendering, seeAlso: t.seeAlso, start: t.startCanvas, service: t.service ? ey(t.service) : void 0, supplementary: e ? [e] : void 0 };
  }
  function Vy(t) {
    return { chars: t.chars, format: t.format ? t.format : void 0, language: t.language };
  }
  function Pn(t, i) {
    return t ? typeof t == "string" ? { id: t, type: i } : typeof (t == null ? void 0 : t["@id"]) == "string" ? { id: t["@id"], type: i } : typeof t.id == "string" ? { id: t.id, type: i } : null : null;
  }
  function zy(t) {
    let i = {};
    if (t.first) {
      let e = Pn(t.first, "Collection");
      e && (i.first = e);
    }
    if ((t.total || t.total === 0) && (i.total = t.total), t.prev) {
      let e = Pn(t.prev, "Collection");
      e && (i.prev = e);
    }
    if (t.next) {
      let e = Pn(t.next, "Collection");
      e && (i.next = e);
    }
    return i;
  }
  function Ny(t) {
    let i = [];
    for (let e of t) {
      let n = { ...e };
      n.items && n.items.length === 0 && delete n.items, i.push(n);
    }
    return i;
  }
  function Uy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), ...zy(t), items: Ny(t.members) });
  }
  function Wy(t) {
    let i = [], e = [], n, r;
    for (let o of t.sequences || []) o.canvases.length && i.push(...o.canvases), o.behavior && e.push(...o.behavior), o.viewingDirection && (r = o.viewingDirection), o.startCanvas && (n = o.startCanvas);
    let s = Tt(t);
    return e.length && (s.behavior ? s.behavior.push(...e) : s.behavior = e), ct({ ...s, ...xt(t), ...At(t), viewingDirection: r, start: n, items: i, structures: jy(t.structures) });
  }
  function jy(t) {
    if (!t) return t;
    let i = /* @__PURE__ */ new Map();
    for (let n of t) i.set(n.id, n);
    let e = [];
    for (let n of t) if (n.items) {
      let r = n.items.map((s) => typeof s == "string" ? (e.push(s), i.get(s) || s) : s && s.id ? (e.push(s.id), i.get(s.id) || s) : s);
      n.items = r;
    }
    return t.filter((n) => e.indexOf(n.id) === -1);
  }
  function Gy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), annotations: t.otherContent && t.otherContent.length ? t.otherContent : void 0, items: t.images && t.images.length ? [{ id: Uo(t, "annotation-page"), type: "AnnotationPage", items: t.images }] : void 0 });
  }
  function qy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), items: t.resources && t.resources.length ? t.resources : void 0 });
  }
  function Zy(t) {
    return !t.canvases || t.canvases.length === 0 ? { canvases: [], behavior: [] } : { canvases: t.canvases, behavior: t.viewingHint ? [t.viewingHint] : [], viewingDirection: t.viewingDirection, startCanvas: t.startCanvas };
  }
  function Ky(t) {
    function i(e) {
      if (Array.isArray(e)) {
        if (e.length > 1) return { type: "List", items: e.map(i) };
        e = e[0];
      }
      if (typeof e == "string") return encodeURI(e).trim();
      if ("@type" in e) {
        let n;
        if (typeof e.full == "string") n = e.full;
        else if (e.full["@type"] === "dctypes:Image") n = { id: e.full["@id"], type: "Image" };
        else if (e.full["@type"] === "sc:Canvas") n = { id: e.full["@id"], type: "Canvas" };
        else throw Error(`Unsupported source type on annotation: ${e.full["@type"]}`);
        return { type: "SpecificResource", source: n, selector: Vn(e.selector) };
      } else return encodeURI(e["@id"]).trim();
    }
    return ct({ ...Tt(t), ...xt(t), ...At(t), target: i(t.on), body: Array.isArray(t.resource) ? t.resource.map(or) : or(t.resource) });
  }
  function or(t) {
    return t.type === "Choice" ? t : Wo(t);
  }
  function Wo(t) {
    let i = t;
    return ct({ ...Tt(i), ...xt(i), ...At(i), ...Vy(i) });
  }
  function Xy(t) {
    let i = [];
    return t.default && t.default !== "rdf:nil" && i.push(t.default), t.item && t.item !== "rdf:nil" && i.push(...t.item), ct({ ...Tt(t), ...xt(t), items: i });
  }
  function Yy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), items: t.members });
  }
  function Jy(t) {
    let { "@id": i, "@type": e, "@context": n, profile: r, ...s } = t, o = {};
    return i && (o["@id"] = i), o["@type"] = hs(t), o["@type"] === "unknown" && (n && n.length && (o["@context"] = n), o["@type"] = "Service"), r && (o.profile = No(r)), ct({ ...o, ...s });
  }
  function Qy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t) });
  }
  var $y = new Cy({ collection: [Uy], manifest: [Wy], canvas: [Gy], annotationList: [qy], sequence: [Zy], annotation: [Ky], contentResource: [Wo], choice: [Xy], range: [Yy], service: [Jy], layer: [Qy] });
  function e1(t) {
    return t && t["@context"] && (t["@context"] === "http://iiif.io/api/presentation/2/context.json" || Array.isArray(t["@context"]) && t["@context"].indexOf("http://iiif.io/api/presentation/2/context.json") !== -1 || t["@context"] === "http://www.shared-canvas.org/ns/context.json") || t["@context"] === "http://iiif.io/api/image/2/context.json" || t["@id"] && t["@type"] === "sc:Collection" || t["@id"] && t["@type"] === "sc:Manifest" ? (t["@context"] || (t["@context"] = "http://iiif.io/api/presentation/2/context.json"), $y.traverseUnknown(t)) : t;
  }
  function Vn(t) {
    if ((Array.isArray(t["@type"]) && t["@type"].includes("oa:SvgSelector") || t["@type"] == "oa:SvgSelector") && ("chars" in t || "value" in t)) return { type: "SvgSelector", value: "chars" in t ? t.chars : t.value };
    if (t["@type"] === "oa:FragmentSelector") return { type: "FragmentSelector", value: t.value };
    if (t["@type"] === "oa:Choice") return [Vn(t.default), ...(Array.isArray(t.item) ? t.item : [t.item]).map(Vn)];
    if (t["@type"] == "iiif:ImageApiSelector") return { type: "ImageApiSelector", region: "region" in t ? t.region : void 0, rotation: "rotation" in t ? t.rotation : void 0 };
    throw Error(`Unsupported selector type: ${t["@type"]}`);
  }
  var t1 = e1;
  function zn(t) {
    var s, o, l, a, u;
    const { related: i } = t, { requiredStatement: e } = t, { viewingDirection: n } = t, r = t1(t);
    return t["@context"] === "http://iiif.io/api/presentation/2/context.json" && ([].concat(i || []).forEach((c) => {
      r.homepage = r.homepage || [], r.homepage.push(typeof c == "string" ? c : { id: c["@id"], label: c.label, format: c.format });
    }), (s = r.provider) == null || s.forEach((c, h) => {
      c.homepage && (r.provider[h].homepage = c.homepage.filter((f) => f.id !== "http://example.org/undefined/1" && !r.homepage.find((m) => m.id === f.id)));
    }), ((u = (a = (l = (o = r.provider) == null ? void 0 : o[0]) == null ? void 0 : l.label) == null ? void 0 : a.none) == null ? void 0 : u[0]) === "Unknown" && (delete r.provider[0].label, e && !r.requiredStatement && (r.requiredStatement = e)), r.viewingDirection = n), r;
  }
  function i1(t = {}) {
    const i = tn({ annotations: [], annotationsAvailable: null, collection: null, errors: /* @__PURE__ */ new Set(), loading: 0, manifest: t.manifest ? zn(t.manifest) : null, options: t.options || {}, readyPromises: [], rootElement: t.rootElement || null, urlUpdateTimeout: null, annotationsActive: Me(() => i.options.view === "text" || !i.options.view && !i.isContainerWidthAtLeast("medium")), currentStructure: Me(() => {
      if (!(i.manifest.structures instanceof Array)) return false;
      const e = [];
      i.options.pages.filter((o) => o > 0).forEach((o) => {
        e.push(i.manifest.items[o - 1].id);
      });
      const { length: n } = i.manifest.structures;
      let r, s;
      for (let o = n - 1; o >= 0; o -= 1) {
        const l = i.manifest.structures[o], { items: a } = l;
        if (a != null && a.some((u) => e.includes(u.id))) {
          const u = l.items.length;
          if ((u < s || !s) && (r = o, s = u, s === 0)) break;
        }
      }
      return typeof r == "number" && r >= 0 ? i.manifest.structures[r] : false;
    }), isCustomPageView: Me(() => {
      const { pages: e } = i.options;
      return e.length === 1 ? false : e.length > 2 ? true : e[0] < 1 || e[1] < 1 ? false : e[1] - e[0] !== 1;
    }), isFirstPage: Me(() => i.options.pages[0] === 1 || i.options.pages[1] === 1), isLastPage: Me(() => i.options.pages.at(-1) === i.pageCount), isLastSection: Me(() => {
      var s;
      const { pages: e } = i.options, n = e.length - 1;
      return (e[n] ? e[n] : e[n - 1]) >= ((s = i.sections[i.sections.length - 1]) == null ? void 0 : s.firstPage);
    }), isReversed: Me(() => ["right-to-left", "bottom-to-top"].includes(i.manifest.viewingDirection)), isVertical: Me(() => ["top-to-bottom", "bottom-to-top"].includes(i.manifest.viewingDirection)), pageCount: Me(() => {
      var e, n;
      return (n = (e = i.manifest) == null ? void 0 : e.items) == null ? void 0 : n.length;
    }), sections: Me(() => {
      if (!i.manifest.structures) return [];
      const e = [];
      return i.manifest.structures.forEach((n) => {
        if (!n.items) {
          e.push({ firstPage: 1, lastPage: i.pageCount });
          return;
        }
        const r = n.items[0].id, s = i.manifest.items.findIndex((a) => a.id === r) + 1, o = n.items[n.items.length - 1].id, l = i.manifest.items.findIndex((a) => a.id === o) + 1;
        e.push({ firstPage: s, lastPage: l });
      }), e;
    }), structures: Me(() => {
      var a, u, c;
      if (!((a = i.manifest) != null && a.structures)) return [];
      const e = (c = (u = i.manifest.structures[0]) == null ? void 0 : u.behavior) != null && c.includes("top") ? i.manifest.structures[0].items || [] : i.manifest.structures, n = [], r = i.manifest.items, s = e.length;
      for (let h = 0; h < s; h += 1) {
        const f = { ...e[h] };
        if (f.items) {
          const m = f.items[0].id;
          f.firstPage = r.findIndex((y) => y.id === m) + 1;
          const v = f.items.at(-1).id;
          f.lastPage = r.findIndex((y) => y.id === v) + 1;
        }
        f.level = 0, n.push(f);
      }
      let o = 0;
      for (let h = 0; h < n.length; h += 1) {
        const f = n[h];
        for (let m = h + 1; m < n.length; m += 1) {
          const v = n[m];
          v.firstPage >= f.firstPage && v.lastPage <= f.lastPage && (f.items = (f.items || []).filter((y) => y.label), f.items.push(v), v.level += 1, o = Math.max(o, v.level));
        }
      }
      const l = (h, f = 0) => {
        for (let m = 0; m < h.length; m += 1) {
          const v = h[m];
          v.level > f ? h.splice(m, 1) : v.items && l(v.items, f + 1);
        }
      };
      for (let h = 0; h < o; h += 1) l(n);
      return n;
    }), addError(e) {
      i.errors.add(e), console.warn(e);
    }, clearErrors() {
      i.errors.clear();
    }, async fetchJson(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return i.loading = 0, Promise.reject(new Error(n.status));
      const r = await n.json().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, async fetchText(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return console.warn("Error loading annotation"), "";
      const r = await n.text().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, getFacingPage(e) {
      var s, o, l, a, u;
      if ((s = i.manifest.items[e - 1].behavior) != null && s.includes("non-paged")) return -1;
      if (e === 1) return 0;
      const n = i.manifest.items.slice(0, e - 1).filter((c) => {
        var h;
        return (h = c.behavior) == null ? void 0 : h.includes("non-paged");
      });
      return (e + n.length % 2) % 2 === 1 ? (l = (o = i.manifest.items[e - 1 - 1]) == null ? void 0 : o.behavior) != null && l.includes("non-paged") ? -1 : e - 1 : (u = (a = i.manifest.items[e - 1 + 1]) == null ? void 0 : a.behavior) != null && u.includes("non-paged") ? -1 : e < i.pageCount ? e + 1 : 0;
    }, getPageLabel(e, n) {
      const r = i.localize(n, "");
      return r ? i.options.pageLabelFormat.replace("P", e).replace("L", r) : i.options.pageLabelFormat.includes("P") ? `${e}` : "\u2014";
    }, getStartPages() {
      var n;
      let e = 1;
      if (i.manifest.items && i.manifest.start) {
        const r = i.manifest.items.findIndex((s) => s.id === i.manifest.start.id);
        e = r >= 0 ? r + 1 : 1;
      }
      return i.isContainerWidthAtLeast("medium") && ((n = i.manifest.behavior) != null && n.includes("paged")) ? [e, i.getFacingPage(e)].sort() : [e];
    }, getThumbnailUrl(e, n, r = 0, s = 0) {
      var h, f, m, v, y, x, T;
      const o = i.manifest.items[e - 1], l = (h = o.thumbnail) == null ? void 0 : h[0];
      if (l != null && l.id && (l == null ? void 0 : l.width) >= n) return l.id;
      const a = (y = (v = (m = (f = o.items) == null ? void 0 : f[0]) == null ? void 0 : m.items) == null ? void 0 : v[r]) == null ? void 0 : y.body, u = a != null && a.items ? a.items[s] : a, c = (l == null ? void 0 : l.service) || ((x = u == null ? void 0 : u.source) == null ? void 0 : x.service) || (u == null ? void 0 : u.service);
      if (c) {
        const C = [].concat(c)[0], H = ["ImageService2", "ImageService3"].includes(C.type || C["@type"]) ? "default" : "native", k = C.id || C["@id"];
        let N = n;
        l != null && l.service && ((T = C.sizes) == null || T.forEach((q) => {
          q.width >= N && q.width <= N * 2 && (N = q.width);
        }));
        const Y = "jpg", K = k.at(-1) === "/" ? "" : "/";
        return `${k}${K}full/${N},/0/${H}.${Y}`;
      }
      return (u == null ? void 0 : u.type) === "Image" ? (l == null ? void 0 : l.id) || (u == null ? void 0 : u.id) : "";
    }, goToFirstPage() {
      i.setPage(1);
    }, goToNextPage() {
      const e = i.options.pages.at(-1);
      e < i.pageCount && i.setPage(e + 1);
    }, goToNextSection() {
      const { pages: e } = i.options, n = e.length - 1, r = e[n] ? e[n] : e[n - 1];
      let s = 0;
      for (; r >= i.sections[s].firstPage || r && r >= i.sections[s].firstPage; ) s += 1;
      i.setPage(i.sections[s].firstPage);
    }, goToLastPage() {
      i.setPage(i.pageCount);
    }, goToPreviousPage() {
      const e = i.options.pages.find((n) => n > 0);
      e > 1 && i.setPage(e - 1);
    }, goToPreviousSection() {
      const { pages: e } = i.options, n = e[0] ? e[0] : e[1];
      let r = i.sections.length - 1;
      for (; n <= i.sections[r].firstPage || n && n <= i.sections[r].firstPage; ) r -= 1;
      i.setPage(i.sections[r].firstPage);
    }, isContainerWidthAtLeast(e) {
      return i.rootElement && window.getComputedStyle(i.rootElement, "::after").content.includes(e);
    }, loadAnnotations() {
      var e;
      i.annotationsAvailable = null, (e = i.options.pages) == null || e.filter((n) => n > 0).forEach(async (n) => {
        if (i.annotations[n]) return;
        const r = i.manifest.items[n - 1];
        if (!("annotations" in r)) {
          i.annotationsAvailable = false;
          return;
        }
        i.annotations[n] = [];
        let s = r.annotations[0].items;
        if (!s) {
          const o = r.annotations[0].id;
          try {
            const l = await i.fetchJson(o);
            s = l.resources || l.items;
          } catch (l) {
            const a = l.response ? l.response.statusText : l.message;
            console.warn(`Could not load annotations: ${a}`), i.annotationsAvailable = false;
            return;
          }
        }
        s instanceof Array && s.forEach(async (o, l) => {
          var m, v, y, x, T, C, H, k, N, Y, K, q;
          let a;
          const u = o.id || o["@id"] || ((m = o.resource) == null ? void 0 : m.id) || ((v = o.resource) == null ? void 0 : v["@id"]);
          if ((y = o.resource) != null && y.chars) a = o.resource.chars;
          else if ((T = (x = o.resource) == null ? void 0 : x[0]) != null && T.chars) a = (H = (C = o.resource) == null ? void 0 : C[0]) == null ? void 0 : H.chars;
          else if ((k = o.resource) != null && k.label) a = `<i>${o.resource.label}</i>`;
          else {
            const ee = [].concat(o.body);
            a = (await Promise.all(ee.map(async (te) => {
              var ne, he, ye, me;
              if ((te == null ? void 0 : te.type) === "Image") return `<img src="${te.id}" alt="">`;
              if (te != null && te.value) return te.value;
              if ((ne = te == null ? void 0 : te.body) != null && ne.value) return te.body.value;
              const j = ((he = te == null ? void 0 : te.items) == null ? void 0 : he[0].id) || ((ye = te == null ? void 0 : te.body) == null ? void 0 : ye.id) || ((me = te == null ? void 0 : te.body) == null ? void 0 : me["@id"]) || (te == null ? void 0 : te.id) || u;
              return os(j) ? i.fetchText(j) : "";
            }))).join("<br>");
          }
          if (!a) return;
          (o.format || ((N = o.body) == null ? void 0 : N.format)) === "text/plain" && (a = a.replace(/\n/g, " <br>")), i.annotationsAvailable = true;
          const c = { id: u, html: cn(a) }, h = ((K = (Y = o.on) == null ? void 0 : Y.selector) == null ? void 0 : K.value) || (typeof o.on == "string" ? o.on : null) || ((q = o.target) == null ? void 0 : q.id) || o.target, f = Do(h);
          f && (c.coords = f), i.annotations[n][l] = c;
        });
      });
    }, initOptions(e) {
      let n = {};
      if (i.options.urlQueryKey) try {
        const r = new URLSearchParams(window.location.search);
        n = JSON.parse(r.get(i.options.urlQueryKey)) || {};
      } catch {
      }
      n.view === "fulltext" ? n.view = "text" : ["scan", ""].includes(n.view) && (n.view = null), n.pages && !Ks(n.pages, i.pageCount) && (i.addError("Invalid pages, reset to start page"), n.pages = null), i.options.urlQueryParams.forEach((r) => {
        i.options[r] = n[r] ?? i.options[r];
      }), i.options.pages = e && e.type === "popstate" ? n.pages || i.getStartPages() : n.pages || i.options.pages || i.getStartPages(), i.options.pan = n.panX || n.panY ? { x: n.panX, y: n.panY } : n.pan || i.options.pan, i.options.rotation = parseInt(n.rotation, 10) || i.options.rotation, i.options.view = n.view || n.view === "" ? n.view : i.options.view, i.options.zoom = parseFloat(n.zoom) || i.options.zoom;
    }, loadManifest(e, n = {}) {
      const r = cs();
      return i.fetchJson(e).then(async (s) => {
        const o = zn(s);
        if (n.expectedType && o.type !== n.expectedType) {
          const a = `Expected manifest of type ${n.expectedType}, but got ${o.type}`;
          return i.addError(a), r.reject(a), r;
        }
        if (i.manifest = null, await Yn(), o.type === "Manifest") return i.manifest = o, i.initOptions(), window.addEventListener("popstate", i.initOptions), n.reset && i.updateOptions({ childManifestUrl: e, pages: i.getStartPages(), pan: {}, rotation: null, view: i.isContainerWidthAtLeast("medium") ? "collection" : null, zoom: null }), r.resolve(), r;
        if (o.type === "Collection") {
          i.collection = o;
          const a = new URLSearchParams(window.location.search);
          let u = {};
          try {
            u = JSON.parse(a.get(i.options.urlQueryKey)) || {};
          } catch {
          }
          let c = "";
          if (i.options.urlQueryParams.includes("childManifestUrl") && u.childManifestUrl ? c = u.childManifestUrl : i.collection.manifests && i.options.childManifestAutoloaded && (c = i.collection.manifests[0].id), c) await i.loadManifest(c, { expectedType: "Manifest" }), i.updateOptions({ childManifestUrl: c });
          else {
            const h = u.view || i.options.view;
            i.updateOptions({ view: ["collection", "help", "info"].includes(h) ? h : "collection" });
          }
          return r.resolve(), r;
        }
        const l = "Please provide a valid IIIF Presentation API manifest";
        return i.addError(l), r.reject(l), r;
      }, (s) => {
        const l = `Error loading IIIF manifest: ${s.response && (s.response.statusText || s.response.data) || s.message}`;
        return i.addError(l), r.reject(l), r;
      });
    }, localize(e) {
      if (!i.options.language) throw new Error("language not set");
      if (!e) return "";
      if (typeof e == "string") return e;
      const s = e[i.options.language] || e[i.options.fallbackLanguage] || Object.values(e)[0] || "";
      return ([].concat(s).join("\xA0\xB7 ") || "").trim();
    }, setPage(e) {
      var r;
      let n = [].concat(e);
      if (!Ks(n, i.pageCount)) throw new RangeError("Invalid pages");
      return n.length === 1 && ((r = i.options.pages) == null ? void 0 : r.length) === 2 && !this.isCustomPageView && (n = [n[0], i.getFacingPage(n[0])].sort()), i.updateOptions({ pages: n }), n;
    }, toggleAnnotationId(e) {
      const n = { annotationId: i.options.annotationId === e ? null : e, annotationsVisible: i.options.annotationId ? null : i.annotationsVisible };
      n.annotationId && !i.isContainerWidthAtLeast("medium") && (n.view = i.options.view ? null : "text"), i.updateOptions(n);
    }, updateOptions(e) {
      clearTimeout(i.urlUpdateTimeout), Object.assign(i.options, e), e.pages && i.clearErrors(), i.options.urlQueryKey && (i.urlUpdateTimeout = setTimeout(() => {
        const n = {};
        i.options.urlQueryParams.forEach((s) => {
          const o = i.options[s];
          o === null || s === "layers" && !o.some(Boolean) || s === "pages" && o.toString() === i.getStartPages().toString() || typeof o == "object" && !Object.keys(o).length ? delete n[s] : n[s] = i.options[s];
        });
        const r = new URL(window.location);
        Object.keys(n).length ? r.searchParams.set(i.options.urlQueryKey, JSON.stringify(n)) : r.searchParams.delete(i.options.urlQueryKey), window.history && (e.pages || e.view ? window.history.pushState({}, "", r) : window.history.replaceState({}, "", r));
      }, 100));
    } });
    return i;
  }
  var n1 = { convertManifest: zn, install: (t, i = {}) => {
    t.config.globalProperties.$store = new i1(i);
  } };
  window.Tify = function(i = {}) {
    if (this.options = { ...JSON.parse(JSON.stringify(jv)), ...i }, !this.options.translationsDirUrl) try {
      const { url: s } = import_meta;
      this.options.translationsDirUrl = `${s.slice(0, s.lastIndexOf("/"))}/translations`;
    } catch {
    }
    let e = null;
    this.ready = new Promise((s, o) => {
      e = { resolve: s, reject: o };
    });
    const n = this;
    this.app = gu({ render: () => Wl(Wv, { readyPromise: e }) }).use(qv, { instance: n }).use(Yv).use(Jv).use(n1, { options: this.options });
    let r = false;
    this.mount = (s) => {
      if (r) throw new Error("TIFY is already mounted");
      const o = typeof s == "string" ? document.querySelector(s) : s;
      if (!o) throw new Error("Container element not found");
      this.app.mount(o), r = true;
    }, this.destroy = () => {
      this.app.unmount();
    }, this.options.container && this.mount(this.options.container);
  };
  var a1 = window.Tify;

  // <stdin>
  function addTify(selector, uri, lang = "en") {
    if (document.documentElement.lang !== void 0) {
      lang = document.documentElement.lang;
    }
    const tify = new Tify({
      container: selector,
      manifestUrl: uri,
      language: lang,
      translationsDirUrl: "/tify/translations/"
    });
    return tify;
  }
  window.iiifPresentationViewer = addTify;
})();
/*! Bundled license information:

tify/dist/tify.js:
  (*!
  TIFY v0.35.0
  (c) 2017-2026 Göttingen State and University Library (https://www.sub.uni-goettingen.de/)
  AGPL-3.0
  https://tify.rocks/
  *)
  (**
  * @vue/shared v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/reactivity v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/runtime-core v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

tify/dist/tify.js:
  (**
  * @vue/runtime-dom v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! openseadragon 5.0.1 *)
  (*! Built on 2024-12-09 *)
  (*! Git commit: v5.0.1-0-480de92d *)
  (*! http://openseadragon.github.io *)
  (*! License: http://openseadragon.github.io/license/ *)
*/
