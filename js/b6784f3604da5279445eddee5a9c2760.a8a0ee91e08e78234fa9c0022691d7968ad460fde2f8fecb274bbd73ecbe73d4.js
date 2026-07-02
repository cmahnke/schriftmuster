(()=>{var aa=Object.defineProperty;var R_=Object.getOwnPropertyDescriptor;var I_=Object.getOwnPropertyNames;var b_=Object.prototype.hasOwnProperty;var S=(n,e)=>()=>(n&&(e=n(n=0)),e);var S_=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),A_=(n,e)=>{for(var t in e)aa(n,t,{get:e[t],enumerable:!0})},L_=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of I_(e))!b_.call(n,s)&&s!==t&&aa(n,s,{get:()=>e[s],enumerable:!(i=R_(e,s))||i.enumerable});return n};var Ah=n=>L_(aa({},"__esModule",{value:!0}),n);var Mh={};A_(Mh,{$:()=>Lh,default:()=>P_,jQuery:()=>Lh});function M_(n,e){if(typeof n>"u"||!n.document)throw new Error("jQuery requires a window with a document");var t=[],i=Object.getPrototypeOf,s=t.slice,o=t.flat?function(r){return t.flat.call(r)}:function(r){return t.concat.apply([],r)},l=t.push,c=t.indexOf,f={},m=f.toString,_=f.hasOwnProperty,x=_.toString,C=x.call(Object),T={};function R(r){return r==null?r+"":typeof r=="object"?f[m.call(r)]||"object":typeof r}function M(r){return r!=null&&r===r.window}function P(r){var a=!!r&&r.length,u=R(r);return typeof r=="function"||M(r)?!1:u==="array"||a===0||typeof a=="number"&&a>0&&a-1 in r}var O=n.document,z={type:!0,src:!0,nonce:!0,noModule:!0};function j(r,a,u){u=u||O;var h,g=u.createElement("script");g.text=r;for(h in z)a&&a[h]&&(g[h]=a[h]);u.head.appendChild(g).parentNode&&g.parentNode.removeChild(g)}var N="4.0.0",F=/HTML$/i,d=function(r,a){return new d.fn.init(r,a)};d.fn=d.prototype={jquery:N,constructor:d,length:0,toArray:function(){return s.call(this)},get:function(r){return r==null?s.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var a=d.merge(this.constructor(),r);return a.prevObject=this,a},each:function(r){return d.each(this,r)},map:function(r){return this.pushStack(d.map(this,function(a,u){return r.call(a,u,a)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(r,a){return(a+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(r,a){return a%2}))},eq:function(r){var a=this.length,u=+r+(r<0?a:0);return this.pushStack(u>=0&&u<a?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()}},d.extend=d.fn.extend=function(){var r,a,u,h,g,p,y=arguments[0]||{},v=1,E=arguments.length,w=!1;for(typeof y=="boolean"&&(w=y,y=arguments[v]||{},v++),typeof y!="object"&&typeof y!="function"&&(y={}),v===E&&(y=this,v--);v<E;v++)if((r=arguments[v])!=null)for(a in r)h=r[a],!(a==="__proto__"||y===h)&&(w&&h&&(d.isPlainObject(h)||(g=Array.isArray(h)))?(u=y[a],g&&!Array.isArray(u)?p=[]:!g&&!d.isPlainObject(u)?p={}:p=u,g=!1,y[a]=d.extend(w,p,h)):h!==void 0&&(y[a]=h));return y},d.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var a,u;return!r||m.call(r)!=="[object Object]"?!1:(a=i(r),a?(u=_.call(a,"constructor")&&a.constructor,typeof u=="function"&&x.call(u)===C):!0)},isEmptyObject:function(r){var a;for(a in r)return!1;return!0},globalEval:function(r,a,u){j(r,{nonce:a&&a.nonce},u)},each:function(r,a){var u,h=0;if(P(r))for(u=r.length;h<u&&a.call(r[h],h,r[h])!==!1;h++);else for(h in r)if(a.call(r[h],h,r[h])===!1)break;return r},text:function(r){var a,u="",h=0,g=r.nodeType;if(!g)for(;a=r[h++];)u+=d.text(a);return g===1||g===11?r.textContent:g===9?r.documentElement.textContent:g===3||g===4?r.nodeValue:u},makeArray:function(r,a){var u=a||[];return r!=null&&(P(Object(r))?d.merge(u,typeof r=="string"?[r]:r):l.call(u,r)),u},inArray:function(r,a,u){return a==null?-1:c.call(a,r,u)},isXMLDoc:function(r){var a=r&&r.namespaceURI,u=r&&(r.ownerDocument||r).documentElement;return!F.test(a||u&&u.nodeName||"HTML")},contains:function(r,a){var u=a&&a.parentNode;return r===u||!!(u&&u.nodeType===1&&(r.contains?r.contains(u):r.compareDocumentPosition&&r.compareDocumentPosition(u)&16))},merge:function(r,a){for(var u=+a.length,h=0,g=r.length;h<u;h++)r[g++]=a[h];return r.length=g,r},grep:function(r,a,u){for(var h,g=[],p=0,y=r.length,v=!u;p<y;p++)h=!a(r[p],p),h!==v&&g.push(r[p]);return g},map:function(r,a,u){var h,g,p=0,y=[];if(P(r))for(h=r.length;p<h;p++)g=a(r[p],p,u),g!=null&&y.push(g);else for(p in r)g=a(r[p],p,u),g!=null&&y.push(g);return o(y)},guid:1,support:T}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=t[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,a){f["[object "+a+"]"]=a.toLowerCase()});function K(r,a){return r.nodeName&&r.nodeName.toLowerCase()===a.toLowerCase()}var W=t.pop,k="[\\x20\\t\\r\\n\\f]",U=O.documentMode,se=U&&new RegExp(":enabled|:disabled|\\["+k+"*name"+k+"*="+k+`*(?:''|"")`),Y=new RegExp("^"+k+"+|((?:^|[^\\\\])(?:\\\\.)*)"+k+"+$","g"),ie="(?:\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",pe=new RegExp("^"+k+"*([>+~]|"+k+")"+k+"*"),Ge=new RegExp(k+"|>"),Xe=/[+~]/,Q=O.documentElement,oe=Q.matches||Q.msMatchesSelector;function ce(){var r=[];function a(u,h){return r.push(u+" ")>d.expr.cacheLength&&delete a[r.shift()],a[u+" "]=h}return a}function We(r){return r&&typeof r.getElementsByTagName<"u"&&r}var Le="\\["+k+"*("+ie+")(?:"+k+"*([*^$|!~]?=)"+k+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ie+"))|)"+k+"*\\]",De=":("+ie+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Le+")*)|.*)\\)|)",be={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+Le),PSEUDO:new RegExp("^"+De),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+k+"*(even|odd|(([+-]|)(\\d*)n|)"+k+"*(?:([+-]|)"+k+"*(\\d+)|))"+k+"*\\)|)","i")},jt=new RegExp(De),xt=new RegExp("\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\([^\\r\\n\\f])","g"),rt=function(r,a){var u="0x"+r.slice(1)-65536;return a||(u<0?String.fromCharCode(u+65536):String.fromCharCode(u>>10|55296,u&1023|56320))};function we(r){return r.replace(xt,rt)}function Ve(r){d.error("Syntax error, unrecognized expression: "+r)}var Xn=new RegExp("^"+k+"*,"+k+"*"),dt=ce();function Wn(r,a){var u,h,g,p,y,v,E,w=dt[r+" "];if(w)return a?0:w.slice(0);for(y=r,v=[],E=d.expr.preFilter;y;){(!u||(h=Xn.exec(y)))&&(h&&(y=y.slice(h[0].length)||y),v.push(g=[])),u=!1,(h=pe.exec(y))&&(u=h.shift(),g.push({value:u,type:h[0].replace(Y," ")}),y=y.slice(u.length));for(p in be)(h=d.expr.match[p].exec(y))&&(!E[p]||(h=E[p](h)))&&(u=h.shift(),g.push({value:u,type:p,matches:h}),y=y.slice(u.length));if(!u)break}return a?y.length:y?Ve(r):dt(r,v).slice(0)}var us={ATTR:function(r){return r[1]=we(r[1]),r[3]=we(r[3]||r[4]||r[5]||""),r[2]==="~="&&(r[3]=" "+r[3]+" "),r.slice(0,4)},CHILD:function(r){return r[1]=r[1].toLowerCase(),r[1].slice(0,3)==="nth"?(r[3]||Ve(r[0]),r[4]=+(r[4]?r[5]+(r[6]||1):2*(r[3]==="even"||r[3]==="odd")),r[5]=+(r[7]+r[8]||r[3]==="odd")):r[3]&&Ve(r[0]),r},PSEUDO:function(r){var a,u=!r[6]&&r[2];return be.CHILD.test(r[0])?null:(r[3]?r[2]=r[4]||r[5]||"":u&&jt.test(u)&&(a=Wn(u,!0))&&(a=u.indexOf(")",u.length-a)-u.length)&&(r[0]=r[0].slice(0,a),r[2]=u.slice(0,a)),r.slice(0,3))}};function ui(r){for(var a=0,u=r.length,h="";a<u;a++)h+=r[a].value;return h}function Ne(r,a,u,h,g,p,y){var v=0,E=r.length,w=u==null;if(R(u)==="object"){g=!0;for(v in u)Ne(r,a,v,u[v],!0,p,y)}else if(h!==void 0&&(g=!0,typeof h!="function"&&(y=!0),w&&(y?(a.call(r,h),a=null):(w=a,a=function(b,L,I){return w.call(d(b),I)})),a))for(;v<E;v++)a(r[v],u,y?h:h.call(r[v],v,a(r[v],u)));return g?r:w?a.call(r):E?a(r[0],u):p}var Me=/[^\x20\t\r\n\f]+/g;d.fn.extend({attr:function(r,a){return Ne(this,d.attr,r,a,arguments.length>1)},removeAttr:function(r){return this.each(function(){d.removeAttr(this,r)})}}),d.extend({attr:function(r,a,u){var h,g,p=r.nodeType;if(!(p===3||p===8||p===2)){if(typeof r.getAttribute>"u")return d.prop(r,a,u);if((p!==1||!d.isXMLDoc(r))&&(g=d.attrHooks[a.toLowerCase()]),u!==void 0){if(u===null||u===!1&&a.toLowerCase().indexOf("aria-")!==0){d.removeAttr(r,a);return}return g&&"set"in g&&(h=g.set(r,u,a))!==void 0?h:(r.setAttribute(a,u),u)}return g&&"get"in g&&(h=g.get(r,a))!==null?h:(h=r.getAttribute(a),h??void 0)}},attrHooks:{},removeAttr:function(r,a){var u,h=0,g=a&&a.match(Me);if(g&&r.nodeType===1)for(;u=g[h++];)r.removeAttribute(u)}}),U&&(d.attrHooks.type={set:function(r,a){if(a==="radio"&&K(r,"input")){var u=r.value;return r.setAttribute("type",a),u&&(r.value=u),a}}});var ci=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function hi(r,a){return a?r==="\0"?"\uFFFD":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}d.escapeSelector=function(r){return(r+"").replace(ci,hi)};var cs=t.sort,fr=t.splice,yn;function Uo(r,a){if(r===a)return yn=!0,0;var u=!r.compareDocumentPosition-!a.compareDocumentPosition;return u||(u=(r.ownerDocument||r)==(a.ownerDocument||a)?r.compareDocumentPosition(a):1,u&1?r==O||r.ownerDocument==O&&d.contains(O,r)?-1:a==O||a.ownerDocument==O&&d.contains(O,a)?1:0:u&4?-1:1)}d.uniqueSort=function(r){var a,u=[],h=0,g=0;if(yn=!1,cs.call(r,Uo),yn){for(;a=r[g++];)a===r[g]&&(h=u.push(g));for(;h--;)fr.call(r,u[h],1)}return r},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(s.apply(this)))};var Pe,hs,gt,Fc,tn,nn=0,vm=0,kc=ce(),zc=ce(),fs=ce(),Cm=new RegExp(k+"+","g"),wm=new RegExp("^"+ie+"$"),jc=d.extend({needsContext:new RegExp("^"+k+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+k+"*((?:-\\d)?\\d*)"+k+"*\\)|)(?=[^-]|$)","i")},be),Tm=/^(?:input|select|textarea|button)$/i,Rm=/^h\d$/i,Im=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bm=function(){fi()},Sm=ds(function(r){return r.disabled===!0&&K(r,"fieldset")},{dir:"parentNode",next:"legend"});function At(r,a,u,h){var g,p,y,v,E,w,b,L=a&&a.ownerDocument,I=a?a.nodeType:9;if(u=u||[],typeof r!="string"||!r||I!==1&&I!==9&&I!==11)return u;if(!h&&(fi(a),a=a||gt,tn)){if(I!==11&&(E=Im.exec(r)))if(g=E[1]){if(I===9)return(y=a.getElementById(g))&&l.call(u,y),u;if(L&&(y=L.getElementById(g))&&d.contains(a,y))return l.call(u,y),u}else{if(E[2])return l.apply(u,a.getElementsByTagName(r)),u;if((g=E[3])&&a.getElementsByClassName)return l.apply(u,a.getElementsByClassName(g)),u}if(!fs[r+" "]&&(!se||!se.test(r))){if(b=r,L=a,I===1&&(Ge.test(r)||pe.test(r))){for(L=Xe.test(r)&&We(a.parentNode)||a,(L!=a||U)&&((v=a.getAttribute("id"))?v=d.escapeSelector(v):a.setAttribute("id",v=d.expando)),w=Wn(r),p=w.length;p--;)w[p]=(v?"#"+v:":scope")+" "+ui(w[p]);b=w.join(",")}try{return l.apply(u,L.querySelectorAll(b)),u}catch{fs(r,!0)}finally{v===d.expando&&a.removeAttribute("id")}}}return Xc(r.replace(Y,"$1"),a,u,h)}function Ut(r){return r[d.expando]=!0,r}function Am(r){return function(a){return K(a,"input")&&a.type===r}}function Lm(r){return function(a){return(K(a,"input")||K(a,"button"))&&a.type===r}}function Uc(r){return function(a){return"form"in a?a.parentNode&&a.disabled===!1?"label"in a?"label"in a.parentNode?a.parentNode.disabled===r:a.disabled===r:a.isDisabled===r||a.isDisabled!==!r&&Sm(a)===r:a.disabled===r:"label"in a?a.disabled===r:!1}}function Vn(r){return Ut(function(a){return a=+a,Ut(function(u,h){for(var g,p=r([],u.length,a),y=p.length;y--;)u[g=p[y]]&&(u[g]=!(h[g]=u[g]))})})}function fi(r){var a,u=r?r.ownerDocument||r:O;u==gt||u.nodeType!==9||(gt=u,Fc=gt.documentElement,tn=!d.isXMLDoc(gt),U&&O!=gt&&(a=gt.defaultView)&&a.top!==a&&a.addEventListener("unload",bm))}At.matches=function(r,a){return At(r,null,null,a)},At.matchesSelector=function(r,a){if(fi(r),tn&&!fs[a+" "]&&(!se||!se.test(a)))try{return oe.call(r,a)}catch{fs(a,!0)}return At(a,gt,null,[r]).length>0},d.expr={cacheLength:50,createPseudo:Ut,match:jc,find:{ID:function(r,a){if(typeof a.getElementById<"u"&&tn){var u=a.getElementById(r);return u?[u]:[]}},TAG:function(r,a){return typeof a.getElementsByTagName<"u"?a.getElementsByTagName(r):a.querySelectorAll(r)},CLASS:function(r,a){if(typeof a.getElementsByClassName<"u"&&tn)return a.getElementsByClassName(r)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:us,filter:{ID:function(r){var a=we(r);return function(u){return u.getAttribute("id")===a}},TAG:function(r){var a=we(r).toLowerCase();return r==="*"?function(){return!0}:function(u){return K(u,a)}},CLASS:function(r){var a=kc[r+" "];return a||(a=new RegExp("(^|"+k+")"+r+"("+k+"|$)"))&&kc(r,function(u){return a.test(typeof u.className=="string"&&u.className||typeof u.getAttribute<"u"&&u.getAttribute("class")||"")})},ATTR:function(r,a,u){return function(h){var g=d.attr(h,r);return g==null?a==="!=":a?(g+="",a==="="?g===u:a==="!="?g!==u:a==="^="?u&&g.indexOf(u)===0:a==="*="?u&&g.indexOf(u)>-1:a==="$="?u&&g.slice(-u.length)===u:a==="~="?(" "+g.replace(Cm," ")+" ").indexOf(u)>-1:a==="|="?g===u||g.slice(0,u.length+1)===u+"-":!1):!0}},CHILD:function(r,a,u,h,g){var p=r.slice(0,3)!=="nth",y=r.slice(-4)!=="last",v=a==="of-type";return h===1&&g===0?function(E){return!!E.parentNode}:function(E,w,b){var L,I,A,G,H,B=p!==y?"nextSibling":"previousSibling",xe=E.parentNode,ye=v&&E.nodeName.toLowerCase(),at=!b&&!v,qe=!1;if(xe){if(p){for(;B;){for(A=E;A=A[B];)if(v?K(A,ye):A.nodeType===1)return!1;H=B=r==="only"&&!H&&"nextSibling"}return!0}if(H=[y?xe.firstChild:xe.lastChild],y&&at){for(I=xe[d.expando]||(xe[d.expando]={}),L=I[r]||[],G=L[0]===nn&&L[1],qe=G&&L[2],A=G&&xe.childNodes[G];A=++G&&A&&A[B]||(qe=G=0)||H.pop();)if(A.nodeType===1&&++qe&&A===E){I[r]=[nn,G,qe];break}}else if(at&&(I=E[d.expando]||(E[d.expando]={}),L=I[r]||[],G=L[0]===nn&&L[1],qe=G),qe===!1)for(;(A=++G&&A&&A[B]||(qe=G=0)||H.pop())&&!((v?K(A,ye):A.nodeType===1)&&++qe&&(at&&(I=A[d.expando]||(A[d.expando]={}),I[r]=[nn,qe]),A===E)););return qe-=g,qe===h||qe%h===0&&qe/h>=0}}},PSEUDO:function(r,a){var u=d.expr.pseudos[r]||d.expr.setFilters[r.toLowerCase()]||Ve("unsupported pseudo: "+r);return u[d.expando]?u(a):u}},pseudos:{not:Ut(function(r){var a=[],u=[],h=Vo(r.replace(Y,"$1"));return h[d.expando]?Ut(function(g,p,y,v){for(var E,w=h(g,null,v,[]),b=g.length;b--;)(E=w[b])&&(g[b]=!(p[b]=E))}):function(g,p,y){return a[0]=g,h(a,null,y,u),a[0]=null,!u.pop()}}),has:Ut(function(r){return function(a){return At(r,a).length>0}}),contains:Ut(function(r){return r=we(r),function(a){return(a.textContent||d.text(a)).indexOf(r)>-1}}),lang:Ut(function(r){return wm.test(r||"")||Ve("unsupported lang: "+r),r=we(r).toLowerCase(),function(a){var u;do if(u=tn?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang"))return u=u.toLowerCase(),u===r||u.indexOf(r+"-")===0;while((a=a.parentNode)&&a.nodeType===1);return!1}}),target:function(r){var a=n.location&&n.location.hash;return a&&a.slice(1)===r.id},root:function(r){return r===Fc},focus:function(r){return r===gt.activeElement&&gt.hasFocus()&&!!(r.type||r.href||~r.tabIndex)},enabled:Uc(!1),disabled:Uc(!0),checked:function(r){return K(r,"input")&&!!r.checked||K(r,"option")&&!!r.selected},selected:function(r){return U&&r.parentNode&&r.parentNode.selectedIndex,r.selected===!0},empty:function(r){for(r=r.firstChild;r;r=r.nextSibling)if(r.nodeType<6)return!1;return!0},parent:function(r){return!d.expr.pseudos.empty(r)},header:function(r){return Rm.test(r.nodeName)},input:function(r){return Tm.test(r.nodeName)},button:function(r){return K(r,"input")&&r.type==="button"||K(r,"button")},text:function(r){return K(r,"input")&&r.type==="text"},first:Vn(function(){return[0]}),last:Vn(function(r,a){return[a-1]}),eq:Vn(function(r,a,u){return[u<0?u+a:u]}),even:Vn(function(r,a){for(var u=0;u<a;u+=2)r.push(u);return r}),odd:Vn(function(r,a){for(var u=1;u<a;u+=2)r.push(u);return r}),lt:Vn(function(r,a,u){var h;for(u<0?h=u+a:u>a?h=a:h=u;--h>=0;)r.push(h);return r}),gt:Vn(function(r,a,u){for(var h=u<0?u+a:u;++h<a;)r.push(h);return r})}},d.expr.pseudos.nth=d.expr.pseudos.eq;for(Pe in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.expr.pseudos[Pe]=Am(Pe);for(Pe in{submit:!0,reset:!0})d.expr.pseudos[Pe]=Lm(Pe);function Gc(){}Gc.prototype=d.expr.pseudos,d.expr.setFilters=new Gc;function ds(r,a,u){var h=a.dir,g=a.next,p=g||h,y=u&&p==="parentNode",v=vm++;return a.first?function(E,w,b){for(;E=E[h];)if(E.nodeType===1||y)return r(E,w,b);return!1}:function(E,w,b){var L,I,A=[nn,v];if(b){for(;E=E[h];)if((E.nodeType===1||y)&&r(E,w,b))return!0}else for(;E=E[h];)if(E.nodeType===1||y)if(I=E[d.expando]||(E[d.expando]={}),g&&K(E,g))E=E[h]||E;else{if((L=I[p])&&L[0]===nn&&L[1]===v)return A[2]=L[2];if(I[p]=A,A[2]=r(E,w,b))return!0}return!1}}function Go(r){return r.length>1?function(a,u,h){for(var g=r.length;g--;)if(!r[g](a,u,h))return!1;return!0}:r[0]}function Mm(r,a,u){for(var h=0,g=a.length;h<g;h++)At(r,a[h],u);return u}function gs(r,a,u,h,g){for(var p,y=[],v=0,E=r.length,w=a!=null;v<E;v++)(p=r[v])&&(!u||u(p,h,g))&&(y.push(p),w&&a.push(v));return y}function Xo(r,a,u,h,g,p){return h&&!h[d.expando]&&(h=Xo(h)),g&&!g[d.expando]&&(g=Xo(g,p)),Ut(function(y,v,E,w){var b,L,I,A,G=[],H=[],B=v.length,xe=y||Mm(a||"*",E.nodeType?[E]:E,[]),ye=r&&(y||!a)?gs(xe,G,r,E,w):xe;if(u?(A=g||(y?r:B||h)?[]:v,u(ye,A,E,w)):A=ye,h)for(b=gs(A,H),h(b,[],E,w),L=b.length;L--;)(I=b[L])&&(A[H[L]]=!(ye[H[L]]=I));if(y){if(g||r){if(g){for(b=[],L=A.length;L--;)(I=A[L])&&b.push(ye[L]=I);g(null,A=[],b,w)}for(L=A.length;L--;)(I=A[L])&&(b=g?c.call(y,I):G[L])>-1&&(y[b]=!(v[b]=I))}}else A=gs(A===v?A.splice(B,A.length):A),g?g(null,v,A,w):l.apply(v,A)})}function Wo(r){for(var a,u,h,g=r.length,p=d.expr.relative[r[0].type],y=p||d.expr.relative[" "],v=p?1:0,E=ds(function(L){return L===a},y,!0),w=ds(function(L){return c.call(a,L)>-1},y,!0),b=[function(L,I,A){var G=!p&&(A||I!=hs)||((a=I).nodeType?E(L,I,A):w(L,I,A));return a=null,G}];v<g;v++)if(u=d.expr.relative[r[v].type])b=[ds(Go(b),u)];else{if(u=d.expr.filter[r[v].type].apply(null,r[v].matches),u[d.expando]){for(h=++v;h<g&&!d.expr.relative[r[h].type];h++);return Xo(v>1&&Go(b),v>1&&ui(r.slice(0,v-1).concat({value:r[v-2].type===" "?"*":""})).replace(Y,"$1"),u,v<h&&Wo(r.slice(v,h)),h<g&&Wo(r=r.slice(h)),h<g&&ui(r))}b.push(u)}return Go(b)}function Pm(r,a){var u=a.length>0,h=r.length>0,g=function(p,y,v,E,w){var b,L,I,A=0,G="0",H=p&&[],B=[],xe=hs,ye=p||h&&d.expr.find.TAG("*",w),at=nn+=xe==null?1:Math.random()||.1;for(w&&(hs=y==gt||y||w);(b=ye[G])!=null;G++){if(h&&b){for(L=0,!y&&b.ownerDocument!=gt&&(fi(b),v=!tn);I=r[L++];)if(I(b,y||gt,v)){l.call(E,b);break}w&&(nn=at)}u&&((b=!I&&b)&&A--,p&&H.push(b))}if(A+=G,u&&G!==A){for(L=0;I=a[L++];)I(H,B,y,v);if(p){if(A>0)for(;G--;)H[G]||B[G]||(B[G]=W.call(E));B=gs(B)}l.apply(E,B),w&&!p&&B.length>0&&A+a.length>1&&d.uniqueSort(E)}return w&&(nn=at,hs=xe),H};return u?Ut(g):g}function Vo(r,a){var u,h=[],g=[],p=zc[r+" "];if(!p){for(a||(a=Wn(r)),u=a.length;u--;)p=Wo(a[u]),p[d.expando]?h.push(p):g.push(p);p=zc(r,Pm(g,h)),p.selector=r}return p}function Xc(r,a,u,h){var g,p,y,v,E,w=typeof r=="function"&&r,b=!h&&Wn(r=w.selector||r);if(u=u||[],b.length===1){if(p=b[0]=b[0].slice(0),p.length>2&&(y=p[0]).type==="ID"&&a.nodeType===9&&tn&&d.expr.relative[p[1].type]){if(a=(d.expr.find.ID(we(y.matches[0]),a)||[])[0],a)w&&(a=a.parentNode);else return u;r=r.slice(p.shift().value.length)}for(g=jc.needsContext.test(r)?0:p.length;g--&&(y=p[g],!d.expr.relative[v=y.type]);)if((E=d.expr.find[v])&&(h=E(we(y.matches[0]),Xe.test(p[0].type)&&We(a.parentNode)||a))){if(p.splice(g,1),r=h.length&&ui(p),!r)return l.apply(u,h),u;break}}return(w||Vo(r,b))(h,a,!tn,u,!a||Xe.test(r)&&We(a.parentNode)||a),u}fi(),d.find=At,At.compile=Vo,At.select=Xc,At.setDocument=fi,At.tokenize=Wn;function di(r,a,u){for(var h=[],g=u!==void 0;(r=r[a])&&r.nodeType!==9;)if(r.nodeType===1){if(g&&d(r).is(u))break;h.push(r)}return h}function Wc(r,a){for(var u=[];r;r=r.nextSibling)r.nodeType===1&&r!==a&&u.push(r);return u}var Vc=d.expr.match.needsContext,Kc=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Bc(r){return r[0]==="<"&&r[r.length-1]===">"&&r.length>=3}function Ko(r,a,u){return typeof a=="function"?d.grep(r,function(h,g){return!!a.call(h,g,h)!==u}):a.nodeType?d.grep(r,function(h){return h===a!==u}):typeof a!="string"?d.grep(r,function(h){return c.call(a,h)>-1!==u}):d.filter(a,r,u)}d.filter=function(r,a,u){var h=a[0];return u&&(r=":not("+r+")"),a.length===1&&h.nodeType===1?d.find.matchesSelector(h,r)?[h]:[]:d.find.matches(r,d.grep(a,function(g){return g.nodeType===1}))},d.fn.extend({find:function(r){var a,u,h=this.length,g=this;if(typeof r!="string")return this.pushStack(d(r).filter(function(){for(a=0;a<h;a++)if(d.contains(g[a],this))return!0}));for(u=this.pushStack([]),a=0;a<h;a++)d.find(r,g[a],u);return h>1?d.uniqueSort(u):u},filter:function(r){return this.pushStack(Ko(this,r||[],!1))},not:function(r){return this.pushStack(Ko(this,r||[],!0))},is:function(r){return!!Ko(this,typeof r=="string"&&Vc.test(r)?d(r):r||[],!1).length}});var ps,Om=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Dm=d.fn.init=function(r,a){var u,h;if(!r)return this;if(r.nodeType)return this[0]=r,this.length=1,this;if(typeof r=="function")return ps.ready!==void 0?ps.ready(r):r(d);if(u=r+"",Bc(u))u=[null,r,null];else if(typeof r=="string")u=Om.exec(r);else return d.makeArray(r,this);if(u&&(u[1]||!a))if(u[1]){if(a=a instanceof d?a[0]:a,d.merge(this,d.parseHTML(u[1],a&&a.nodeType?a.ownerDocument||a:O,!0)),Kc.test(u[1])&&d.isPlainObject(a))for(u in a)typeof this[u]=="function"?this[u](a[u]):this.attr(u,a[u]);return this}else return h=O.getElementById(u[2]),h&&(this[0]=h,this.length=1),this;else return!a||a.jquery?(a||ps).find(r):this.constructor(a).find(r)};Dm.prototype=d.fn,ps=d(O);var Nm=/^(?:parents|prev(?:Until|All))/,Fm={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(r){var a=d(r,this),u=a.length;return this.filter(function(){for(var h=0;h<u;h++)if(d.contains(this,a[h]))return!0})},closest:function(r,a){var u,h=0,g=this.length,p=[],y=typeof r!="string"&&d(r);if(!Vc.test(r)){for(;h<g;h++)for(u=this[h];u&&u!==a;u=u.parentNode)if(u.nodeType<11&&(y?y.index(u)>-1:u.nodeType===1&&d.find.matchesSelector(u,r))){p.push(u);break}}return this.pushStack(p.length>1?d.uniqueSort(p):p)},index:function(r){return r?typeof r=="string"?c.call(d(r),this[0]):c.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,a){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(r,a))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function qc(r,a){for(;(r=r[a])&&r.nodeType!==1;);return r}d.each({parent:function(r){var a=r.parentNode;return a&&a.nodeType!==11?a:null},parents:function(r){return di(r,"parentNode")},parentsUntil:function(r,a,u){return di(r,"parentNode",u)},next:function(r){return qc(r,"nextSibling")},prev:function(r){return qc(r,"previousSibling")},nextAll:function(r){return di(r,"nextSibling")},prevAll:function(r){return di(r,"previousSibling")},nextUntil:function(r,a,u){return di(r,"nextSibling",u)},prevUntil:function(r,a,u){return di(r,"previousSibling",u)},siblings:function(r){return Wc((r.parentNode||{}).firstChild,r)},children:function(r){return Wc(r.firstChild)},contents:function(r){return r.contentDocument!=null&&i(r.contentDocument)?r.contentDocument:(K(r,"template")&&(r=r.content||r),d.merge([],r.childNodes))}},function(r,a){d.fn[r]=function(u,h){var g=d.map(this,a,u);return r.slice(-5)!=="Until"&&(h=u),h&&typeof h=="string"&&(g=d.filter(h,g)),this.length>1&&(Fm[r]||d.uniqueSort(g),Nm.test(r)&&g.reverse()),this.pushStack(g)}});function km(r){var a={};return d.each(r.match(Me)||[],function(u,h){a[h]=!0}),a}d.Callbacks=function(r){r=typeof r=="string"?km(r):d.extend({},r);var a,u,h,g,p=[],y=[],v=-1,E=function(){for(g=g||r.once,h=a=!0;y.length;v=-1)for(u=y.shift();++v<p.length;)p[v].apply(u[0],u[1])===!1&&r.stopOnFalse&&(v=p.length,u=!1);r.memory||(u=!1),a=!1,g&&(u?p=[]:p="")},w={add:function(){return p&&(u&&!a&&(v=p.length-1,y.push(u)),(function b(L){d.each(L,function(I,A){typeof A=="function"?(!r.unique||!w.has(A))&&p.push(A):A&&A.length&&R(A)!=="string"&&b(A)})})(arguments),u&&!a&&E()),this},remove:function(){return d.each(arguments,function(b,L){for(var I;(I=d.inArray(L,p,I))>-1;)p.splice(I,1),I<=v&&v--}),this},has:function(b){return b?d.inArray(b,p)>-1:p.length>0},empty:function(){return p&&(p=[]),this},disable:function(){return g=y=[],p=u="",this},disabled:function(){return!p},lock:function(){return g=y=[],!u&&!a&&(p=u=""),this},locked:function(){return!!g},fireWith:function(b,L){return g||(L=L||[],L=[b,L.slice?L.slice():L],y.push(L),a||E()),this},fire:function(){return w.fireWith(this,arguments),this},fired:function(){return!!h}};return w};function gi(r){return r}function ms(r){throw r}function Hc(r,a,u,h){var g;try{r&&typeof(g=r.promise)=="function"?g.call(r).done(a).fail(u):r&&typeof(g=r.then)=="function"?g.call(r,a,u):a.apply(void 0,[r].slice(h))}catch(p){u(p)}}d.extend({Deferred:function(r){var a=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],u="pending",h={state:function(){return u},always:function(){return g.done(arguments).fail(arguments),this},catch:function(p){return h.then(null,p)},pipe:function(){var p=arguments;return d.Deferred(function(y){d.each(a,function(v,E){var w=typeof p[E[4]]=="function"&&p[E[4]];g[E[1]](function(){var b=w&&w.apply(this,arguments);b&&typeof b.promise=="function"?b.promise().progress(y.notify).done(y.resolve).fail(y.reject):y[E[0]+"With"](this,w?[b]:arguments)})}),p=null}).promise()},then:function(p,y,v){var E=0;function w(b,L,I,A){return function(){var G=this,H=arguments,B=function(){var ye,at;if(!(b<E)){if(ye=I.apply(G,H),ye===L.promise())throw new TypeError("Thenable self-resolution");at=ye&&(typeof ye=="object"||typeof ye=="function")&&ye.then,typeof at=="function"?A?at.call(ye,w(E,L,gi,A),w(E,L,ms,A)):(E++,at.call(ye,w(E,L,gi,A),w(E,L,ms,A),w(E,L,gi,L.notifyWith))):(I!==gi&&(G=void 0,H=[ye]),(A||L.resolveWith)(G,H))}},xe=A?B:function(){try{B()}catch(ye){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(ye,xe.error),b+1>=E&&(I!==ms&&(G=void 0,H=[ye]),L.rejectWith(G,H))}};b?xe():(d.Deferred.getErrorHook&&(xe.error=d.Deferred.getErrorHook()),n.setTimeout(xe))}}return d.Deferred(function(b){a[0][3].add(w(0,b,typeof v=="function"?v:gi,b.notifyWith)),a[1][3].add(w(0,b,typeof p=="function"?p:gi)),a[2][3].add(w(0,b,typeof y=="function"?y:ms))}).promise()},promise:function(p){return p!=null?d.extend(p,h):h}},g={};return d.each(a,function(p,y){var v=y[2],E=y[5];h[y[1]]=v.add,E&&v.add(function(){u=E},a[3-p][2].disable,a[3-p][3].disable,a[0][2].lock,a[0][3].lock),v.add(y[3].fire),g[y[0]]=function(){return g[y[0]+"With"](this===g?void 0:this,arguments),this},g[y[0]+"With"]=v.fireWith}),h.promise(g),r&&r.call(g,g),g},when:function(r){var a=arguments.length,u=a,h=Array(u),g=s.call(arguments),p=d.Deferred(),y=function(v){return function(E){h[v]=this,g[v]=arguments.length>1?s.call(arguments):E,--a||p.resolveWith(h,g)}};if(a<=1&&(Hc(r,p.done(y(u)).resolve,p.reject,!a),p.state()==="pending"||typeof(g[u]&&g[u].then)=="function"))return p.then();for(;u--;)Hc(g[u],y(u),p.reject);return p.promise()}});var zm=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(r,a){r&&zm.test(r.name)&&n.console.warn("jQuery.Deferred exception",r,a)},d.readyException=function(r){n.setTimeout(function(){throw r})};var Bo=d.Deferred();d.fn.ready=function(r){return Bo.then(r).catch(function(a){d.readyException(a)}),this},d.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(r!==!0&&--d.readyWait>0)&&Bo.resolveWith(O,[d]))}}),d.ready.then=Bo.then;function _s(){O.removeEventListener("DOMContentLoaded",_s),n.removeEventListener("load",_s),d.ready()}O.readyState!=="loading"?n.setTimeout(d.ready):(O.addEventListener("DOMContentLoaded",_s),n.addEventListener("load",_s));var jm=/-([a-z])/g;function Um(r,a){return a.toUpperCase()}function Kn(r){return r.replace(jm,Um)}function dr(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType}function gr(){this.expando=d.expando+gr.uid++}gr.uid=1,gr.prototype={cache:function(r){var a=r[this.expando];return a||(a=Object.create(null),dr(r)&&(r.nodeType?r[this.expando]=a:Object.defineProperty(r,this.expando,{value:a,configurable:!0}))),a},set:function(r,a,u){var h,g=this.cache(r);if(typeof a=="string")g[Kn(a)]=u;else for(h in a)g[Kn(h)]=a[h];return u},get:function(r,a){return a===void 0?this.cache(r):r[this.expando]&&r[this.expando][Kn(a)]},access:function(r,a,u){return a===void 0||a&&typeof a=="string"&&u===void 0?this.get(r,a):(this.set(r,a,u),u!==void 0?u:a)},remove:function(r,a){var u,h=r[this.expando];if(h!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(Kn):(a=Kn(a),a=a in h?[a]:a.match(Me)||[]),u=a.length;u--;)delete h[a[u]];(a===void 0||d.isEmptyObject(h))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var a=r[this.expando];return a!==void 0&&!d.isEmptyObject(a)}};var Z=new gr,st=new gr,Gm=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Xm=/[A-Z]/g;function Wm(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Gm.test(r)?JSON.parse(r):r}function Yc(r,a,u){var h;if(u===void 0&&r.nodeType===1)if(h="data-"+a.replace(Xm,"-$&").toLowerCase(),u=r.getAttribute(h),typeof u=="string"){try{u=Wm(u)}catch{}st.set(r,a,u)}else u=void 0;return u}d.extend({hasData:function(r){return st.hasData(r)||Z.hasData(r)},data:function(r,a,u){return st.access(r,a,u)},removeData:function(r,a){st.remove(r,a)},_data:function(r,a,u){return Z.access(r,a,u)},_removeData:function(r,a){Z.remove(r,a)}}),d.fn.extend({data:function(r,a){var u,h,g,p=this[0],y=p&&p.attributes;if(r===void 0){if(this.length&&(g=st.get(p),p.nodeType===1&&!Z.get(p,"hasDataAttrs"))){for(u=y.length;u--;)y[u]&&(h=y[u].name,h.indexOf("data-")===0&&(h=Kn(h.slice(5)),Yc(p,h,g[h])));Z.set(p,"hasDataAttrs",!0)}return g}return typeof r=="object"?this.each(function(){st.set(this,r)}):Ne(this,function(v){var E;if(p&&v===void 0)return E=st.get(p,r),E!==void 0||(E=Yc(p,r),E!==void 0)?E:void 0;this.each(function(){st.set(this,r,v)})},null,a,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){st.remove(this,r)})}}),d.extend({queue:function(r,a,u){var h;if(r)return a=(a||"fx")+"queue",h=Z.get(r,a),u&&(!h||Array.isArray(u)?h=Z.set(r,a,d.makeArray(u)):h.push(u)),h||[]},dequeue:function(r,a){a=a||"fx";var u=d.queue(r,a),h=u.length,g=u.shift(),p=d._queueHooks(r,a),y=function(){d.dequeue(r,a)};g==="inprogress"&&(g=u.shift(),h--),g&&(a==="fx"&&u.unshift("inprogress"),delete p.stop,g.call(r,y,p)),!h&&p&&p.empty.fire()},_queueHooks:function(r,a){var u=a+"queueHooks";return Z.get(r,u)||Z.set(r,u,{empty:d.Callbacks("once memory").add(function(){Z.remove(r,[a+"queue",u])})})}}),d.fn.extend({queue:function(r,a){var u=2;return typeof r!="string"&&(a=r,r="fx",u--),arguments.length<u?d.queue(this[0],r):a===void 0?this:this.each(function(){var h=d.queue(this,r,a);d._queueHooks(this,r),r==="fx"&&h[0]!=="inprogress"&&d.dequeue(this,r)})},dequeue:function(r){return this.each(function(){d.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,a){var u,h=1,g=d.Deferred(),p=this,y=this.length,v=function(){--h||g.resolveWith(p,[p])};for(typeof r!="string"&&(a=r,r=void 0),r=r||"fx";y--;)u=Z.get(p[y],r+"queueHooks"),u&&u.empty&&(h++,u.empty.add(v));return v(),g.promise(a)}});var Zc=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,pr=new RegExp("^(?:([+-])=|)("+Zc+")([a-z%]*)$","i"),xn=["Top","Right","Bottom","Left"];function ys(r,a){return r=a||r,r.style.display==="none"||r.style.display===""&&d.css(r,"display")==="none"}var Vm=/^[a-z]/,Km=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function xs(r){return Vm.test(r)&&Km.test(r[0].toUpperCase()+r.slice(1))}function $c(r,a,u,h){var g,p,y=20,v=h?function(){return h.cur()}:function(){return d.css(r,a,"")},E=v(),w=u&&u[3]||(xs(a)?"px":""),b=r.nodeType&&(!xs(a)||w!=="px"&&+E)&&pr.exec(d.css(r,a));if(b&&b[3]!==w){for(E=E/2,w=w||b[3],b=+E||1;y--;)d.style(r,a,b+w),(1-p)*(1-(p=v()/E||.5))<=0&&(y=0),b=b/p;b=b*2,d.style(r,a,b+w),u=u||[]}return u&&(b=+b||+E||0,g=u[1]?b+(u[1]+1)*u[2]:+u[2],h&&(h.unit=w,h.start=b,h.end=g)),g}var Bm=/^-ms-/;function qo(r){return Kn(r.replace(Bm,"ms-"))}var Qc={};function qm(r){var a,u=r.ownerDocument,h=r.nodeName,g=Qc[h];return g||(a=u.body.appendChild(u.createElement(h)),g=d.css(a,"display"),a.parentNode.removeChild(a),g==="none"&&(g="block"),Qc[h]=g,g)}function pi(r,a){for(var u,h,g=[],p=0,y=r.length;p<y;p++)h=r[p],h.style&&(u=h.style.display,a?(u==="none"&&(g[p]=Z.get(h,"display")||null,g[p]||(h.style.display="")),h.style.display===""&&ys(h)&&(g[p]=qm(h))):u!=="none"&&(g[p]="none",Z.set(h,"display",u)));for(p=0;p<y;p++)g[p]!=null&&(r[p].style.display=g[p]);return r}d.fn.extend({show:function(){return pi(this,!0)},hide:function(){return pi(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){ys(this)?d(this).show():d(this).hide()})}});var mr=function(r){return d.contains(r.ownerDocument,r)||r.getRootNode(Hm)===r.ownerDocument},Hm={composed:!0};Q.getRootNode||(mr=function(r){return d.contains(r.ownerDocument,r)});var Jc=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,rn={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};rn.tbody=rn.tfoot=rn.colgroup=rn.caption=rn.thead,rn.th=rn.td;function ot(r,a){var u;return typeof r.getElementsByTagName<"u"?u=t.slice.call(r.getElementsByTagName(a||"*")):typeof r.querySelectorAll<"u"?u=r.querySelectorAll(a||"*"):u=[],a===void 0||a&&K(r,a)?d.merge([r],u):u}var eh=/^$|^module$|\/(?:java|ecma)script/i;function Ho(r,a){for(var u=0,h=r.length;u<h;u++)Z.set(r[u],"globalEval",!a||Z.get(a[u],"globalEval"))}var Ym=/<|&#?\w+;/;function th(r,a,u,h,g){for(var p,y,v,E,w,b,L=a.createDocumentFragment(),I=[],A=0,G=r.length;A<G;A++)if(p=r[A],p||p===0)if(R(p)==="object"&&(p.nodeType||P(p)))d.merge(I,p.nodeType?[p]:p);else if(!Ym.test(p))I.push(a.createTextNode(p));else{for(y=y||L.appendChild(a.createElement("div")),v=(Jc.exec(p)||["",""])[1].toLowerCase(),E=rn[v]||t,b=E.length;--b>-1;)y=y.appendChild(a.createElement(E[b]));y.innerHTML=d.htmlPrefilter(p),d.merge(I,y.childNodes),y=L.firstChild,y.textContent=""}for(L.textContent="",A=0;p=I[A++];){if(h&&d.inArray(p,h)>-1){g&&g.push(p);continue}if(w=mr(p),y=ot(L.appendChild(p),"script"),w&&Ho(y),u)for(b=0;p=y[b++];)eh.test(p.type||"")&&u.push(p)}return L}function Zm(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function $m(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function mi(r,a,u,h){a=o(a);var g,p,y,v,E,w,b=0,L=r.length,I=L-1,A=a[0],G=typeof A=="function";if(G)return r.each(function(H){var B=r.eq(H);a[0]=A.call(this,H,B.html()),mi(B,a,u,h)});if(L&&(g=th(a,r[0].ownerDocument,!1,r,h),p=g.firstChild,g.childNodes.length===1&&(g=p),p||h)){for(y=d.map(ot(g,"script"),Zm),v=y.length;b<L;b++)E=g,b!==I&&(E=d.clone(E,!0,!0),v&&d.merge(y,ot(E,"script"))),u.call(r[b],E,b);if(v)for(w=y[y.length-1].ownerDocument,d.map(y,$m),b=0;b<v;b++)E=y[b],eh.test(E.type||"")&&!Z.get(E,"globalEval")&&d.contains(w,E)&&(E.src&&(E.type||"").toLowerCase()!=="module"?d._evalUrl&&!E.noModule&&d._evalUrl(E.src,{nonce:E.nonce,crossOrigin:E.crossOrigin},w):j(E.textContent,E,w))}return r}var Es=/^(?:checkbox|radio)$/i,nh=/^([^.]*)(?:\.(.+)|)/;function _i(){return!0}function yi(){return!1}function Yo(r,a,u,h,g,p){var y,v;if(typeof a=="object"){typeof u!="string"&&(h=h||u,u=void 0);for(v in a)Yo(r,v,u,h,a[v],p);return r}if(h==null&&g==null?(g=u,h=u=void 0):g==null&&(typeof u=="string"?(g=h,h=void 0):(g=h,h=u,u=void 0)),g===!1)g=yi;else if(!g)return r;return p===1&&(y=g,g=function(E){return d().off(E),y.apply(this,arguments)},g.guid=y.guid||(y.guid=d.guid++)),r.each(function(){d.event.add(this,a,g,h,u)})}d.event={add:function(r,a,u,h,g){var p,y,v,E,w,b,L,I,A,G,H,B=Z.get(r);if(dr(r))for(u.handler&&(p=u,u=p.handler,g=p.selector),g&&d.find.matchesSelector(Q,g),u.guid||(u.guid=d.guid++),(E=B.events)||(E=B.events=Object.create(null)),(y=B.handle)||(y=B.handle=function(xe){return typeof d<"u"&&d.event.triggered!==xe.type?d.event.dispatch.apply(r,arguments):void 0}),a=(a||"").match(Me)||[""],w=a.length;w--;)v=nh.exec(a[w])||[],A=H=v[1],G=(v[2]||"").split(".").sort(),A&&(L=d.event.special[A]||{},A=(g?L.delegateType:L.bindType)||A,L=d.event.special[A]||{},b=d.extend({type:A,origType:H,data:h,handler:u,guid:u.guid,selector:g,needsContext:g&&d.expr.match.needsContext.test(g),namespace:G.join(".")},p),(I=E[A])||(I=E[A]=[],I.delegateCount=0,(!L.setup||L.setup.call(r,h,G,y)===!1)&&r.addEventListener&&r.addEventListener(A,y)),L.add&&(L.add.call(r,b),b.handler.guid||(b.handler.guid=u.guid)),g?I.splice(I.delegateCount++,0,b):I.push(b))},remove:function(r,a,u,h,g){var p,y,v,E,w,b,L,I,A,G,H,B=Z.hasData(r)&&Z.get(r);if(!(!B||!(E=B.events))){for(a=(a||"").match(Me)||[""],w=a.length;w--;){if(v=nh.exec(a[w])||[],A=H=v[1],G=(v[2]||"").split(".").sort(),!A){for(A in E)d.event.remove(r,A+a[w],u,h,!0);continue}for(L=d.event.special[A]||{},A=(h?L.delegateType:L.bindType)||A,I=E[A]||[],v=v[2]&&new RegExp("(^|\\.)"+G.join("\\.(?:.*\\.|)")+"(\\.|$)"),y=p=I.length;p--;)b=I[p],(g||H===b.origType)&&(!u||u.guid===b.guid)&&(!v||v.test(b.namespace))&&(!h||h===b.selector||h==="**"&&b.selector)&&(I.splice(p,1),b.selector&&I.delegateCount--,L.remove&&L.remove.call(r,b));y&&!I.length&&((!L.teardown||L.teardown.call(r,G,B.handle)===!1)&&d.removeEvent(r,A,B.handle),delete E[A])}d.isEmptyObject(E)&&Z.remove(r,"handle events")}},dispatch:function(r){var a,u,h,g,p,y,v=new Array(arguments.length),E=d.event.fix(r),w=(Z.get(this,"events")||Object.create(null))[E.type]||[],b=d.event.special[E.type]||{};for(v[0]=E,a=1;a<arguments.length;a++)v[a]=arguments[a];if(E.delegateTarget=this,!(b.preDispatch&&b.preDispatch.call(this,E)===!1)){for(y=d.event.handlers.call(this,E,w),a=0;(g=y[a++])&&!E.isPropagationStopped();)for(E.currentTarget=g.elem,u=0;(p=g.handlers[u++])&&!E.isImmediatePropagationStopped();)(!E.rnamespace||p.namespace===!1||E.rnamespace.test(p.namespace))&&(E.handleObj=p,E.data=p.data,h=((d.event.special[p.origType]||{}).handle||p.handler).apply(g.elem,v),h!==void 0&&(E.result=h)===!1&&(E.preventDefault(),E.stopPropagation()));return b.postDispatch&&b.postDispatch.call(this,E),E.result}},handlers:function(r,a){var u,h,g,p,y,v=[],E=a.delegateCount,w=r.target;if(E&&!(r.type==="click"&&r.button>=1)){for(;w!==this;w=w.parentNode||this)if(w.nodeType===1&&!(r.type==="click"&&w.disabled===!0)){for(p=[],y={},u=0;u<E;u++)h=a[u],g=h.selector+" ",y[g]===void 0&&(y[g]=h.needsContext?d(g,this).index(w)>-1:d.find(g,this,null,[w]).length),y[g]&&p.push(h);p.length&&v.push({elem:w,handlers:p})}}return w=this,E<a.length&&v.push({elem:w,handlers:a.slice(E)}),v},addProp:function(r,a){Object.defineProperty(d.Event.prototype,r,{enumerable:!0,configurable:!0,get:typeof a=="function"?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(u){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(r){return r[d.expando]?r:new d.Event(r)},special:d.extend(Object.create(null),{load:{noBubble:!0},click:{setup:function(r){var a=this||r;return Es.test(a.type)&&a.click&&K(a,"input")&&vs(a,"click",!0),!1},trigger:function(r){var a=this||r;return Es.test(a.type)&&a.click&&K(a,"input")&&vs(a,"click"),!0},_default:function(r){var a=r.target;return Es.test(a.type)&&a.click&&K(a,"input")&&Z.get(a,"click")||K(a,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.preventDefault()}}})};function vs(r,a,u){if(!u){Z.get(r,a)===void 0&&d.event.add(r,a,_i);return}Z.set(r,a,!1),d.event.add(r,a,{namespace:!1,handler:function(h){var g,p=Z.get(this,a);if(h.isTrigger&1&&this[a]){if(p.length)(d.event.special[a]||{}).delegateType&&h.stopPropagation();else if(p=s.call(arguments),Z.set(this,a,p),this[a](),g=Z.get(this,a),Z.set(this,a,!1),p!==g)return h.stopImmediatePropagation(),h.preventDefault(),g&&g.value}else p.length&&(Z.set(this,a,{value:d.event.trigger(p[0],p.slice(1),this)}),h.stopPropagation(),h.isImmediatePropagationStopped=_i)}})}d.removeEvent=function(r,a,u){r.removeEventListener&&r.removeEventListener(a,u)},d.Event=function(r,a){if(!(this instanceof d.Event))return new d.Event(r,a);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented?_i:yi,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,a&&d.extend(this,a),this.timeStamp=r&&r.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:yi,isPropagationStopped:yi,isImmediatePropagationStopped:yi,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=_i,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=_i,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=_i,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(r,a){function u(h){var g=d.event.fix(h);g.type=h.type==="focusin"?"focus":"blur",g.isSimulated=!0,g.target===g.currentTarget&&Z.get(this,"handle")(g)}d.event.special[r]={setup:function(){if(vs(this,r,!0),U)this.addEventListener(a,u);else return!1},trigger:function(){return vs(this,r),!0},teardown:function(){if(U)this.removeEventListener(a,u);else return!1},_default:function(h){return Z.get(h.target,r)},delegateType:a}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,a){d.event.special[r]={delegateType:a,bindType:a,handle:function(u){var h,g=this,p=u.relatedTarget,y=u.handleObj;return(!p||p!==g&&!d.contains(g,p))&&(u.type=y.origType,h=y.handler.apply(this,arguments),u.type=a),h}}}),d.fn.extend({on:function(r,a,u,h){return Yo(this,r,a,u,h)},one:function(r,a,u,h){return Yo(this,r,a,u,h,1)},off:function(r,a,u){var h,g;if(r&&r.preventDefault&&r.handleObj)return h=r.handleObj,d(r.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof r=="object"){for(g in r)this.off(g,a,r[g]);return this}return(a===!1||typeof a=="function")&&(u=a,a=void 0),u===!1&&(u=yi),this.each(function(){d.event.remove(this,r,u,a)})}});var Qm=/<script|<style|<link/i;function ih(r,a){return K(r,"table")&&K(a.nodeType!==11?a:a.firstChild,"tr")&&d(r).children("tbody")[0]||r}function rh(r,a){var u,h,g,p=Z.get(r,"events");if(a.nodeType===1){if(p){Z.remove(a,"handle events");for(u in p)for(h=0,g=p[u].length;h<g;h++)d.event.add(a,u,p[u][h])}st.hasData(r)&&st.set(a,d.extend({},st.get(r)))}}function sh(r,a,u){for(var h,g=a?d.filter(a,r):r,p=0;(h=g[p])!=null;p++)!u&&h.nodeType===1&&d.cleanData(ot(h)),h.parentNode&&(u&&mr(h)&&Ho(ot(h,"script")),h.parentNode.removeChild(h));return r}d.extend({htmlPrefilter:function(r){return r},clone:function(r,a,u){var h,g,p,y,v=r.cloneNode(!0),E=mr(r);if(U&&(r.nodeType===1||r.nodeType===11)&&!d.isXMLDoc(r))for(y=ot(v),p=ot(r),h=0,g=p.length;h<g;h++)K(y[h],"textarea")&&(y[h].defaultValue=p[h].defaultValue);if(a)if(u)for(p=p||ot(r),y=y||ot(v),h=0,g=p.length;h<g;h++)rh(p[h],y[h]);else rh(r,v);return y=ot(v,"script"),y.length>0&&Ho(y,!E&&ot(r,"script")),v},cleanData:function(r){for(var a,u,h,g=d.event.special,p=0;(u=r[p])!==void 0;p++)if(dr(u)){if(a=u[Z.expando]){if(a.events)for(h in a.events)g[h]?d.event.remove(u,h):d.removeEvent(u,h,a.handle);u[Z.expando]=void 0}u[st.expando]&&(u[st.expando]=void 0)}}}),d.fn.extend({detach:function(r){return sh(this,r,!0)},remove:function(r){return sh(this,r)},text:function(r){return Ne(this,function(a){return a===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,r,arguments.length)},append:function(){return mi(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=ih(this,r);a.appendChild(r)}})},prepend:function(){return mi(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=ih(this,r);a.insertBefore(r,a.firstChild)}})},before:function(){return mi(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return mi(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,a=0;(r=this[a])!=null;a++)r.nodeType===1&&(d.cleanData(ot(r,!1)),r.textContent="");return this},clone:function(r,a){return r=r??!1,a=a??r,this.map(function(){return d.clone(this,r,a)})},html:function(r){return Ne(this,function(a){var u=this[0]||{},h=0,g=this.length;if(a===void 0&&u.nodeType===1)return u.innerHTML;if(typeof a=="string"&&!Qm.test(a)&&!rn[(Jc.exec(a)||["",""])[1].toLowerCase()]){a=d.htmlPrefilter(a);try{for(;h<g;h++)u=this[h]||{},u.nodeType===1&&(d.cleanData(ot(u,!1)),u.innerHTML=a);u=0}catch{}}u&&this.empty().append(a)},null,r,arguments.length)},replaceWith:function(){var r=[];return mi(this,arguments,function(a){var u=this.parentNode;d.inArray(this,r)<0&&(d.cleanData(ot(this)),u&&u.replaceChild(a,this))},r)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,a){d.fn[r]=function(u){for(var h,g=[],p=d(u),y=p.length-1,v=0;v<=y;v++)h=v===y?this:this.clone(!0),d(p[v])[a](h),l.apply(g,h);return this.pushStack(g)}});var Jm=new RegExp("^("+Zc+")(?!px)[a-z%]+$","i"),Zo=/^--/;function Cs(r){var a=r.ownerDocument.defaultView;return a||(a=n),a.getComputedStyle(r)}function e_(r,a,u){var h,g,p={};for(g in a)p[g]=r.style[g],r.style[g]=a[g];h=u.call(r);for(g in a)r.style[g]=p[g];return h}function oh(r,a,u){var h,g=Zo.test(a);return u=u||Cs(r),u&&(h=u.getPropertyValue(a)||u[a],g&&h&&(h=h.replace(Y,"$1")||void 0),h===""&&!mr(r)&&(h=d.style(r,a))),h!==void 0?h+"":h}var ah=["Webkit","Moz","ms"],lh=O.createElement("div").style;function t_(r){for(var a=r[0].toUpperCase()+r.slice(1),u=ah.length;u--;)if(r=ah[u]+a,r in lh)return r}function $o(r){return r in lh?r:t_(r)||r}var uh,ch,En=O.createElement("table");function hh(){if(!(!En||!En.style)){var r,a=O.createElement("col"),u=O.createElement("tr"),h=O.createElement("td");if(En.style.cssText="position:absolute;left:-11111px;border-collapse:separate;border-spacing:0",u.style.cssText="box-sizing:content-box;border:1px solid;height:1px",h.style.cssText="height:9px;width:9px;padding:0",a.span=2,Q.appendChild(En).appendChild(a).parentNode.appendChild(u).appendChild(h).parentNode.appendChild(h.cloneNode(!0)),En.offsetWidth===0){Q.removeChild(En);return}r=n.getComputedStyle(u),ch=U||Math.round(parseFloat(n.getComputedStyle(a).width))===18,uh=Math.round(parseFloat(r.height)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth))===u.offsetHeight,Q.removeChild(En),En=null}}d.extend(T,{reliableTrDimensions:function(){return hh(),uh},reliableColDimensions:function(){return hh(),ch}});var n_={position:"absolute",visibility:"hidden",display:"block"},fh={letterSpacing:"0",fontWeight:"400"};function dh(r,a,u){var h=pr.exec(a);return h?Math.max(0,h[2]-(u||0))+(h[3]||"px"):a}function gh(r,a,u,h,g,p){var y=a==="width"?1:0,v=0,E=0,w=0;if(u===(h?"border":"content"))return 0;for(;y<4;y+=2)u==="margin"&&(w+=d.css(r,u+xn[y],!0,g)),h?(u==="content"&&(E-=d.css(r,"padding"+xn[y],!0,g)),u!=="margin"&&(E-=d.css(r,"border"+xn[y]+"Width",!0,g))):(E+=d.css(r,"padding"+xn[y],!0,g),u!=="padding"?E+=d.css(r,"border"+xn[y]+"Width",!0,g):v+=d.css(r,"border"+xn[y]+"Width",!0,g));return!h&&p>=0&&(E+=Math.max(0,Math.ceil(r["offset"+a[0].toUpperCase()+a.slice(1)]-p-E-v-.5))||0),E+w}function ph(r,a,u){var h=Cs(r),g=U||u,p=g&&d.css(r,"boxSizing",!1,h)==="border-box",y=p,v=oh(r,a,h),E="offset"+a[0].toUpperCase()+a.slice(1);if(Jm.test(v)){if(!u)return v;v="auto"}return(v==="auto"||U&&p||!T.reliableColDimensions()&&K(r,"col")||!T.reliableTrDimensions()&&K(r,"tr"))&&r.getClientRects().length&&(p=d.css(r,"boxSizing",!1,h)==="border-box",y=E in r,y&&(v=r[E])),v=parseFloat(v)||0,v+gh(r,a,u||(p?"border":"content"),y,h,v)+"px"}d.extend({cssHooks:{},style:function(r,a,u,h){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var g,p,y,v=qo(a),E=Zo.test(a),w=r.style;if(E||(a=$o(v)),y=d.cssHooks[a]||d.cssHooks[v],u!==void 0){if(p=typeof u,p==="string"&&(g=pr.exec(u))&&g[1]&&(u=$c(r,a,g),p="number"),u==null||u!==u)return;p==="number"&&(u+=g&&g[3]||(xs(v)?"px":"")),U&&u===""&&a.indexOf("background")===0&&(w[a]="inherit"),(!y||!("set"in y)||(u=y.set(r,u,h))!==void 0)&&(E?w.setProperty(a,u):w[a]=u)}else return y&&"get"in y&&(g=y.get(r,!1,h))!==void 0?g:w[a]}},css:function(r,a,u,h){var g,p,y,v=qo(a),E=Zo.test(a);return E||(a=$o(v)),y=d.cssHooks[a]||d.cssHooks[v],y&&"get"in y&&(g=y.get(r,!0,u)),g===void 0&&(g=oh(r,a,h)),g==="normal"&&a in fh&&(g=fh[a]),u===""||u?(p=parseFloat(g),u===!0||isFinite(p)?p||0:g):g}}),d.each(["height","width"],function(r,a){d.cssHooks[a]={get:function(u,h,g){if(h)return d.css(u,"display")==="none"?e_(u,n_,function(){return ph(u,a,g)}):ph(u,a,g)},set:function(u,h,g){var p,y=Cs(u),v=g&&d.css(u,"boxSizing",!1,y)==="border-box",E=g?gh(u,a,g,v,y):0;return E&&(p=pr.exec(h))&&(p[3]||"px")!=="px"&&(u.style[a]=h,h=d.css(u,a)),dh(u,h,E)}}}),d.each({margin:"",padding:"",border:"Width"},function(r,a){d.cssHooks[r+a]={expand:function(u){for(var h=0,g={},p=typeof u=="string"?u.split(" "):[u];h<4;h++)g[r+xn[h]+a]=p[h]||p[h-2]||p[0];return g}},r!=="margin"&&(d.cssHooks[r+a].set=dh)}),d.fn.extend({css:function(r,a){return Ne(this,function(u,h,g){var p,y,v={},E=0;if(Array.isArray(h)){for(p=Cs(u),y=h.length;E<y;E++)v[h[E]]=d.css(u,h[E],!1,p);return v}return g!==void 0?d.style(u,h,g):d.css(u,h)},r,a,arguments.length>1)}});function Et(r,a,u,h,g){return new Et.prototype.init(r,a,u,h,g)}d.Tween=Et,Et.prototype={constructor:Et,init:function(r,a,u,h,g,p){this.elem=r,this.prop=u,this.easing=g||d.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=h,this.unit=p||(xs(u)?"px":"")},cur:function(){var r=Et.propHooks[this.prop];return r&&r.get?r.get(this):Et.propHooks._default.get(this)},run:function(r){var a,u=Et.propHooks[this.prop];return this.options.duration?this.pos=a=d.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=a=r,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):Et.propHooks._default.set(this),this}},Et.prototype.init.prototype=Et.prototype,Et.propHooks={_default:{get:function(r){var a;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(a=d.css(r.elem,r.prop,""),!a||a==="auto"?0:a)},set:function(r){d.fx.step[r.prop]?d.fx.step[r.prop](r):r.elem.nodeType===1&&(d.cssHooks[r.prop]||r.elem.style[$o(r.prop)]!=null)?d.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},d.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},d.fx=Et.prototype.init,d.fx.step={};var xi,ws,i_=/^(?:toggle|show|hide)$/,r_=/queueHooks$/;function Qo(){ws&&(O.hidden===!1&&n.requestAnimationFrame?n.requestAnimationFrame(Qo):n.setTimeout(Qo,13),d.fx.tick())}function mh(){return n.setTimeout(function(){xi=void 0}),xi=Date.now()}function Ts(r,a){var u,h=0,g={height:r};for(a=a?1:0;h<4;h+=2-a)u=xn[h],g["margin"+u]=g["padding"+u]=r;return a&&(g.opacity=g.width=r),g}function _h(r,a,u){for(var h,g=(Lt.tweeners[a]||[]).concat(Lt.tweeners["*"]),p=0,y=g.length;p<y;p++)if(h=g[p].call(u,a,r))return h}function s_(r,a,u){var h,g,p,y,v,E,w,b,L="width"in a||"height"in a,I=this,A={},G=r.style,H=r.nodeType&&ys(r),B=Z.get(r,"fxshow");u.queue||(y=d._queueHooks(r,"fx"),y.unqueued==null&&(y.unqueued=0,v=y.empty.fire,y.empty.fire=function(){y.unqueued||v()}),y.unqueued++,I.always(function(){I.always(function(){y.unqueued--,d.queue(r,"fx").length||y.empty.fire()})}));for(h in a)if(g=a[h],i_.test(g)){if(delete a[h],p=p||g==="toggle",g===(H?"hide":"show"))if(g==="show"&&B&&B[h]!==void 0)H=!0;else continue;A[h]=B&&B[h]||d.style(r,h)}if(E=!d.isEmptyObject(a),!(!E&&d.isEmptyObject(A))){L&&r.nodeType===1&&(u.overflow=[G.overflow,G.overflowX,G.overflowY],w=B&&B.display,w==null&&(w=Z.get(r,"display")),b=d.css(r,"display"),b==="none"&&(w?b=w:(pi([r],!0),w=r.style.display||w,b=d.css(r,"display"),pi([r]))),(b==="inline"||b==="inline-block"&&w!=null)&&d.css(r,"float")==="none"&&(E||(I.done(function(){G.display=w}),w==null&&(b=G.display,w=b==="none"?"":b)),G.display="inline-block")),u.overflow&&(G.overflow="hidden",I.always(function(){G.overflow=u.overflow[0],G.overflowX=u.overflow[1],G.overflowY=u.overflow[2]})),E=!1;for(h in A)E||(B?"hidden"in B&&(H=B.hidden):B=Z.set(r,"fxshow",{display:w}),p&&(B.hidden=!H),H&&pi([r],!0),I.done(function(){H||pi([r]),Z.remove(r,"fxshow");for(h in A)d.style(r,h,A[h])})),E=_h(H?B[h]:0,h,I),h in B||(B[h]=E.start,H&&(E.end=E.start,E.start=0))}}function o_(r,a){var u,h,g,p,y;for(u in r)if(h=qo(u),g=a[h],p=r[u],Array.isArray(p)&&(g=p[1],p=r[u]=p[0]),u!==h&&(r[h]=p,delete r[u]),y=d.cssHooks[h],y&&"expand"in y){p=y.expand(p),delete r[h];for(u in p)u in r||(r[u]=p[u],a[u]=g)}else a[h]=g}function Lt(r,a,u){var h,g,p=0,y=Lt.prefilters.length,v=d.Deferred().always(function(){delete E.elem}),E=function(){if(g)return!1;for(var L=xi||mh(),I=Math.max(0,w.startTime+w.duration-L),A=1-(I/w.duration||0),G=0,H=w.tweens.length;G<H;G++)w.tweens[G].run(A);return v.notifyWith(r,[w,A,I]),A<1&&H?I:(H||v.notifyWith(r,[w,1,0]),v.resolveWith(r,[w]),!1)},w=v.promise({elem:r,props:d.extend({},a),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},u),originalProperties:a,originalOptions:u,startTime:xi||mh(),duration:u.duration,tweens:[],createTween:function(L,I){var A=d.Tween(r,w.opts,L,I,w.opts.specialEasing[L]||w.opts.easing);return w.tweens.push(A),A},stop:function(L){var I=0,A=L?w.tweens.length:0;if(g)return this;for(g=!0;I<A;I++)w.tweens[I].run(1);return L?(v.notifyWith(r,[w,1,0]),v.resolveWith(r,[w,L])):v.rejectWith(r,[w,L]),this}}),b=w.props;for(o_(b,w.opts.specialEasing);p<y;p++)if(h=Lt.prefilters[p].call(w,r,b,w.opts),h)return typeof h.stop=="function"&&(d._queueHooks(w.elem,w.opts.queue).stop=h.stop.bind(h)),h;return d.map(b,_h,w),typeof w.opts.start=="function"&&w.opts.start.call(r,w),w.progress(w.opts.progress).done(w.opts.done,w.opts.complete).fail(w.opts.fail).always(w.opts.always),d.fx.timer(d.extend(E,{elem:r,anim:w,queue:w.opts.queue})),w}d.Animation=d.extend(Lt,{tweeners:{"*":[function(r,a){var u=this.createTween(r,a);return $c(u.elem,r,pr.exec(a),u),u}]},tweener:function(r,a){typeof r=="function"?(a=r,r=["*"]):r=r.match(Me);for(var u,h=0,g=r.length;h<g;h++)u=r[h],Lt.tweeners[u]=Lt.tweeners[u]||[],Lt.tweeners[u].unshift(a)},prefilters:[s_],prefilter:function(r,a){a?Lt.prefilters.unshift(r):Lt.prefilters.push(r)}}),d.speed=function(r,a,u){var h=r&&typeof r=="object"?d.extend({},r):{complete:u||a||typeof r=="function"&&r,duration:r,easing:u&&a||a&&typeof a!="function"&&a};return d.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in d.fx.speeds?h.duration=d.fx.speeds[h.duration]:h.duration=d.fx.speeds._default),(h.queue==null||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){typeof h.old=="function"&&h.old.call(this),h.queue&&d.dequeue(this,h.queue)},h},d.fn.extend({fadeTo:function(r,a,u,h){return this.filter(ys).css("opacity",0).show().end().animate({opacity:a},r,u,h)},animate:function(r,a,u,h){var g=d.isEmptyObject(r),p=d.speed(a,u,h),y=function(){var v=Lt(this,d.extend({},r),p);(g||Z.get(this,"finish"))&&v.stop(!0)};return y.finish=y,g||p.queue===!1?this.each(y):this.queue(p.queue,y)},stop:function(r,a,u){var h=function(g){var p=g.stop;delete g.stop,p(u)};return typeof r!="string"&&(u=a,a=r,r=void 0),a&&this.queue(r||"fx",[]),this.each(function(){var g=!0,p=r!=null&&r+"queueHooks",y=d.timers,v=Z.get(this);if(p)v[p]&&v[p].stop&&h(v[p]);else for(p in v)v[p]&&v[p].stop&&r_.test(p)&&h(v[p]);for(p=y.length;p--;)y[p].elem===this&&(r==null||y[p].queue===r)&&(y[p].anim.stop(u),g=!1,y.splice(p,1));(g||!u)&&d.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var a,u=Z.get(this),h=u[r+"queue"],g=u[r+"queueHooks"],p=d.timers,y=h?h.length:0;for(u.finish=!0,d.queue(this,r,[]),g&&g.stop&&g.stop.call(this,!0),a=p.length;a--;)p[a].elem===this&&p[a].queue===r&&(p[a].anim.stop(!0),p.splice(a,1));for(a=0;a<y;a++)h[a]&&h[a].finish&&h[a].finish.call(this);delete u.finish})}}),d.each(["toggle","show","hide"],function(r,a){var u=d.fn[a];d.fn[a]=function(h,g,p){return h==null||typeof h=="boolean"?u.apply(this,arguments):this.animate(Ts(a,!0),h,g,p)}}),d.each({slideDown:Ts("show"),slideUp:Ts("hide"),slideToggle:Ts("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,a){d.fn[r]=function(u,h,g){return this.animate(a,u,h,g)}}),d.timers=[],d.fx.tick=function(){var r,a=0,u=d.timers;for(xi=Date.now();a<u.length;a++)r=u[a],!r()&&u[a]===r&&u.splice(a--,1);u.length||d.fx.stop(),xi=void 0},d.fx.timer=function(r){d.timers.push(r),d.fx.start()},d.fx.start=function(){ws||(ws=!0,Qo())},d.fx.stop=function(){ws=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(r,a){return r=d.fx&&d.fx.speeds[r]||r,a=a||"fx",this.queue(a,function(u,h){var g=n.setTimeout(u,r);h.stop=function(){n.clearTimeout(g)}})};var a_=/^(?:input|select|textarea|button)$/i,l_=/^(?:a|area)$/i;d.fn.extend({prop:function(r,a){return Ne(this,d.prop,r,a,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[d.propFix[r]||r]})}}),d.extend({prop:function(r,a,u){var h,g,p=r.nodeType;if(!(p===3||p===8||p===2))return(p!==1||!d.isXMLDoc(r))&&(a=d.propFix[a]||a,g=d.propHooks[a]),u!==void 0?g&&"set"in g&&(h=g.set(r,u,a))!==void 0?h:r[a]=u:g&&"get"in g&&(h=g.get(r,a))!==null?h:r[a]},propHooks:{tabIndex:{get:function(r){var a=r.getAttribute("tabindex");return a?parseInt(a,10):a_.test(r.nodeName)||l_.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),U&&(d.propHooks.selected={get:function(r){var a=r.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(r){var a=r.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function Bn(r){var a=r.match(Me)||[];return a.join(" ")}function Ei(r){return r.getAttribute&&r.getAttribute("class")||""}function Jo(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Me)||[]:[]}d.fn.extend({addClass:function(r){var a,u,h,g,p,y;return typeof r=="function"?this.each(function(v){d(this).addClass(r.call(this,v,Ei(this)))}):(a=Jo(r),a.length?this.each(function(){if(h=Ei(this),u=this.nodeType===1&&" "+Bn(h)+" ",u){for(p=0;p<a.length;p++)g=a[p],u.indexOf(" "+g+" ")<0&&(u+=g+" ");y=Bn(u),h!==y&&this.setAttribute("class",y)}}):this)},removeClass:function(r){var a,u,h,g,p,y;return typeof r=="function"?this.each(function(v){d(this).removeClass(r.call(this,v,Ei(this)))}):arguments.length?(a=Jo(r),a.length?this.each(function(){if(h=Ei(this),u=this.nodeType===1&&" "+Bn(h)+" ",u){for(p=0;p<a.length;p++)for(g=a[p];u.indexOf(" "+g+" ")>-1;)u=u.replace(" "+g+" "," ");y=Bn(u),h!==y&&this.setAttribute("class",y)}}):this):this.attr("class","")},toggleClass:function(r,a){var u,h,g,p;return typeof r=="function"?this.each(function(y){d(this).toggleClass(r.call(this,y,Ei(this),a),a)}):typeof a=="boolean"?a?this.addClass(r):this.removeClass(r):(u=Jo(r),u.length?this.each(function(){for(p=d(this),g=0;g<u.length;g++)h=u[g],p.hasClass(h)?p.removeClass(h):p.addClass(h)}):this)},hasClass:function(r){var a,u,h=0;for(a=" "+r+" ";u=this[h++];)if(u.nodeType===1&&(" "+Bn(Ei(u))+" ").indexOf(a)>-1)return!0;return!1}}),d.fn.extend({val:function(r){var a,u,h,g=this[0];return arguments.length?(h=typeof r=="function",this.each(function(p){var y;this.nodeType===1&&(h?y=r.call(this,p,d(this).val()):y=r,y==null?y="":typeof y=="number"?y+="":Array.isArray(y)&&(y=d.map(y,function(v){return v==null?"":v+""})),a=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,y,"value")===void 0)&&(this.value=y))})):g?(a=d.valHooks[g.type]||d.valHooks[g.nodeName.toLowerCase()],a&&"get"in a&&(u=a.get(g,"value"))!==void 0?u:(u=g.value,u??"")):void 0}}),d.extend({valHooks:{select:{get:function(r){var a,u,h,g=r.options,p=r.selectedIndex,y=r.type==="select-one",v=y?null:[],E=y?p+1:g.length;for(p<0?h=E:h=y?p:0;h<E;h++)if(u=g[h],u.selected&&!u.disabled&&(!u.parentNode.disabled||!K(u.parentNode,"optgroup"))){if(a=d(u).val(),y)return a;v.push(a)}return v},set:function(r,a){for(var u,h,g=r.options,p=d.makeArray(a),y=g.length;y--;)h=g[y],(h.selected=d.inArray(d(h).val(),p)>-1)&&(u=!0);return u||(r.selectedIndex=-1),p}}}}),U&&(d.valHooks.option={get:function(r){var a=r.getAttribute("value");return a??Bn(d.text(r))}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(r,a){if(Array.isArray(a))return r.checked=d.inArray(d(r).val(),a)>-1}}});var yh=/^(?:focusinfocus|focusoutblur)$/,xh=function(r){r.stopPropagation()};d.extend(d.event,{trigger:function(r,a,u,h){var g,p,y,v,E,w,b,L,I=[u||O],A=_.call(r,"type")?r.type:r,G=_.call(r,"namespace")?r.namespace.split("."):[];if(p=L=y=u=u||O,!(u.nodeType===3||u.nodeType===8)&&!yh.test(A+d.event.triggered)&&(A.indexOf(".")>-1&&(G=A.split("."),A=G.shift(),G.sort()),E=A.indexOf(":")<0&&"on"+A,r=r[d.expando]?r:new d.Event(A,typeof r=="object"&&r),r.isTrigger=h?2:3,r.namespace=G.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+G.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=u),a=a==null?[r]:d.makeArray(a,[r]),b=d.event.special[A]||{},!(!h&&b.trigger&&b.trigger.apply(u,a)===!1))){if(!h&&!b.noBubble&&!M(u)){for(v=b.delegateType||A,yh.test(v+A)||(p=p.parentNode);p;p=p.parentNode)I.push(p),y=p;y===(u.ownerDocument||O)&&I.push(y.defaultView||y.parentWindow||n)}for(g=0;(p=I[g++])&&!r.isPropagationStopped();)L=p,r.type=g>1?v:b.bindType||A,w=(Z.get(p,"events")||Object.create(null))[r.type]&&Z.get(p,"handle"),w&&w.apply(p,a),w=E&&p[E],w&&w.apply&&dr(p)&&(r.result=w.apply(p,a),r.result===!1&&r.preventDefault());return r.type=A,!h&&!r.isDefaultPrevented()&&(!b._default||b._default.apply(I.pop(),a)===!1)&&dr(u)&&E&&typeof u[A]=="function"&&!M(u)&&(y=u[E],y&&(u[E]=null),d.event.triggered=A,r.isPropagationStopped()&&L.addEventListener(A,xh),u[A](),r.isPropagationStopped()&&L.removeEventListener(A,xh),d.event.triggered=void 0,y&&(u[E]=y)),r.result}},simulate:function(r,a,u){var h=d.extend(new d.Event,u,{type:r,isSimulated:!0});d.event.trigger(h,null,a)}}),d.fn.extend({trigger:function(r,a){return this.each(function(){d.event.trigger(r,a,this)})},triggerHandler:function(r,a){var u=this[0];if(u)return d.event.trigger(r,a,u,!0)}});var _r=n.location,Eh={guid:Date.now()},ea=/\?/;d.parseXML=function(r){var a,u;if(!r||typeof r!="string")return null;try{a=new n.DOMParser().parseFromString(r,"text/xml")}catch{}return u=a&&a.getElementsByTagName("parsererror")[0],(!a||u)&&d.error("Invalid XML: "+(u?d.map(u.childNodes,function(h){return h.textContent}).join(`
`):r)),a};var u_=/\[\]$/,vh=/\r?\n/g,c_=/^(?:submit|button|image|reset|file)$/i,h_=/^(?:input|select|textarea|keygen)/i;function ta(r,a,u,h){var g;if(Array.isArray(a))d.each(a,function(p,y){u||u_.test(r)?h(r,y):ta(r+"["+(typeof y=="object"&&y!=null?p:"")+"]",y,u,h)});else if(!u&&R(a)==="object")for(g in a)ta(r+"["+g+"]",a[g],u,h);else h(r,a)}d.param=function(r,a){var u,h=[],g=function(p,y){var v=typeof y=="function"?y():y;h[h.length]=encodeURIComponent(p)+"="+encodeURIComponent(v??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!d.isPlainObject(r))d.each(r,function(){g(this.name,this.value)});else for(u in r)ta(u,r[u],a,g);return h.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=d.prop(this,"elements");return r?d.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!d(this).is(":disabled")&&h_.test(this.nodeName)&&!c_.test(r)&&(this.checked||!Es.test(r))}).map(function(r,a){var u=d(this).val();return u==null?null:Array.isArray(u)?d.map(u,function(h){return{name:a.name,value:h.replace(vh,`\r
`)}}):{name:a.name,value:u.replace(vh,`\r
`)}}).get()}});var f_=/%20/g,d_=/#.*$/,g_=/([?&])_=[^&]*/,p_=/^(.*?):[ \t]*([^\r\n]*)$/mg,m_=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,__=/^(?:GET|HEAD)$/,y_=/^\/\//,Ch={},na={},wh="*/".concat("*"),ia=O.createElement("a");ia.href=_r.href;function Th(r){return function(a,u){typeof a!="string"&&(u=a,a="*");var h,g=0,p=a.toLowerCase().match(Me)||[];if(typeof u=="function")for(;h=p[g++];)h[0]==="+"?(h=h.slice(1)||"*",(r[h]=r[h]||[]).unshift(u)):(r[h]=r[h]||[]).push(u)}}function Rh(r,a,u,h){var g={},p=r===na;function y(v){var E;return g[v]=!0,d.each(r[v]||[],function(w,b){var L=b(a,u,h);if(typeof L=="string"&&!p&&!g[L])return a.dataTypes.unshift(L),y(L),!1;if(p)return!(E=L)}),E}return y(a.dataTypes[0])||!g["*"]&&y("*")}function ra(r,a){var u,h,g=d.ajaxSettings.flatOptions||{};for(u in a)a[u]!==void 0&&((g[u]?r:h||(h={}))[u]=a[u]);return h&&d.extend(!0,r,h),r}function x_(r,a,u){for(var h,g,p,y,v=r.contents,E=r.dataTypes;E[0]==="*";)E.shift(),h===void 0&&(h=r.mimeType||a.getResponseHeader("Content-Type"));if(h){for(g in v)if(v[g]&&v[g].test(h)){E.unshift(g);break}}if(E[0]in u)p=E[0];else{for(g in u){if(!E[0]||r.converters[g+" "+E[0]]){p=g;break}y||(y=g)}p=p||y}if(p)return p!==E[0]&&E.unshift(p),u[p]}function E_(r,a,u,h){var g,p,y,v,E,w={},b=r.dataTypes.slice();if(b[1])for(y in r.converters)w[y.toLowerCase()]=r.converters[y];for(p=b.shift();p;)if(r.responseFields[p]&&(u[r.responseFields[p]]=a),!E&&h&&r.dataFilter&&(a=r.dataFilter(a,r.dataType)),E=p,p=b.shift(),p){if(p==="*")p=E;else if(E!=="*"&&E!==p){if(y=w[E+" "+p]||w["* "+p],!y){for(g in w)if(v=g.split(" "),v[1]===p&&(y=w[E+" "+v[0]]||w["* "+v[0]],y)){y===!0?y=w[g]:w[g]!==!0&&(p=v[0],b.unshift(v[1]));break}}if(y!==!0)if(y&&r.throws)a=y(a);else try{a=y(a)}catch(L){return{state:"parsererror",error:y?L:"No conversion from "+E+" to "+p}}}}return{state:"success",data:a}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_r.href,type:"GET",isLocal:m_.test(_r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wh,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,a){return a?ra(ra(r,d.ajaxSettings),a):ra(d.ajaxSettings,r)},ajaxPrefilter:Th(Ch),ajaxTransport:Th(na),ajax:function(r,a){typeof r=="object"&&(a=r,r=void 0),a=a||{};var u,h,g,p,y,v,E,w,b,L,I=d.ajaxSetup({},a),A=I.context||I,G=I.context&&(A.nodeType||A.jquery)?d(A):d.event,H=d.Deferred(),B=d.Callbacks("once memory"),xe=I.statusCode||{},ye={},at={},qe="canceled",ue={readyState:0,getResponseHeader:function(he){var Se;if(E){if(!p)for(p={};Se=p_.exec(g);)p[Se[1].toLowerCase()+" "]=(p[Se[1].toLowerCase()+" "]||[]).concat(Se[2]);Se=p[he.toLowerCase()+" "]}return Se==null?null:Se.join(", ")},getAllResponseHeaders:function(){return E?g:null},setRequestHeader:function(he,Se){return E==null&&(he=at[he.toLowerCase()]=at[he.toLowerCase()]||he,ye[he]=Se),this},overrideMimeType:function(he){return E==null&&(I.mimeType=he),this},statusCode:function(he){var Se;if(he)if(E)ue.always(he[ue.status]);else for(Se in he)xe[Se]=[xe[Se],he[Se]];return this},abort:function(he){var Se=he||qe;return u&&u.abort(Se),Rs(0,Se),this}};if(H.promise(ue),I.url=((r||I.url||_r.href)+"").replace(y_,_r.protocol+"//"),I.type=a.method||a.type||I.method||I.type,I.dataTypes=(I.dataType||"*").toLowerCase().match(Me)||[""],I.crossDomain==null){v=O.createElement("a");try{v.href=I.url,v.href=v.href,I.crossDomain=ia.protocol+"//"+ia.host!=v.protocol+"//"+v.host}catch{I.crossDomain=!0}}if(Rh(Ch,I,a,ue),I.data&&I.processData&&typeof I.data!="string"&&(I.data=d.param(I.data,I.traditional)),E)return ue;w=d.event&&I.global,w&&d.active++===0&&d.event.trigger("ajaxStart"),I.type=I.type.toUpperCase(),I.hasContent=!__.test(I.type),h=I.url.replace(d_,""),I.hasContent?I.data&&I.processData&&(I.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(I.data=I.data.replace(f_,"+")):(L=I.url.slice(h.length),I.data&&(I.processData||typeof I.data=="string")&&(h+=(ea.test(h)?"&":"?")+I.data,delete I.data),I.cache===!1&&(h=h.replace(g_,"$1"),L=(ea.test(h)?"&":"?")+"_="+Eh.guid+++L),I.url=h+L),I.ifModified&&(d.lastModified[h]&&ue.setRequestHeader("If-Modified-Since",d.lastModified[h]),d.etag[h]&&ue.setRequestHeader("If-None-Match",d.etag[h])),(I.data&&I.hasContent&&I.contentType!==!1||a.contentType)&&ue.setRequestHeader("Content-Type",I.contentType),ue.setRequestHeader("Accept",I.dataTypes[0]&&I.accepts[I.dataTypes[0]]?I.accepts[I.dataTypes[0]]+(I.dataTypes[0]!=="*"?", "+wh+"; q=0.01":""):I.accepts["*"]);for(b in I.headers)ue.setRequestHeader(b,I.headers[b]);if(I.beforeSend&&(I.beforeSend.call(A,ue,I)===!1||E))return ue.abort();if(qe="abort",B.add(I.complete),ue.done(I.success),ue.fail(I.error),u=Rh(na,I,a,ue),!u)Rs(-1,"No Transport");else{if(ue.readyState=1,w&&G.trigger("ajaxSend",[ue,I]),E)return ue;I.async&&I.timeout>0&&(y=n.setTimeout(function(){ue.abort("timeout")},I.timeout));try{E=!1,u.send(ye,Rs)}catch(he){if(E)throw he;Rs(-1,he)}}function Rs(he,Se,Sh,T_){var vn,oa,yr,vi,Ci,Gt=Se;E||(E=!0,y&&n.clearTimeout(y),u=void 0,g=T_||"",ue.readyState=he>0?4:0,vn=he>=200&&he<300||he===304,Sh&&(vi=x_(I,ue,Sh)),!vn&&d.inArray("script",I.dataTypes)>-1&&d.inArray("json",I.dataTypes)<0&&(I.converters["text script"]=function(){}),vi=E_(I,vi,ue,vn),vn?(I.ifModified&&(Ci=ue.getResponseHeader("Last-Modified"),Ci&&(d.lastModified[h]=Ci),Ci=ue.getResponseHeader("etag"),Ci&&(d.etag[h]=Ci)),he===204||I.type==="HEAD"?Gt="nocontent":he===304?Gt="notmodified":(Gt=vi.state,oa=vi.data,yr=vi.error,vn=!yr)):(yr=Gt,(he||!Gt)&&(Gt="error",he<0&&(he=0))),ue.status=he,ue.statusText=(Se||Gt)+"",vn?H.resolveWith(A,[oa,Gt,ue]):H.rejectWith(A,[ue,Gt,yr]),ue.statusCode(xe),xe=void 0,w&&G.trigger(vn?"ajaxSuccess":"ajaxError",[ue,I,vn?oa:yr]),B.fireWith(A,[ue,Gt]),w&&(G.trigger("ajaxComplete",[ue,I]),--d.active||d.event.trigger("ajaxStop")))}return ue},getJSON:function(r,a,u){return d.get(r,a,u,"json")},getScript:function(r,a){return d.get(r,void 0,a,"script")}}),d.each(["get","post"],function(r,a){d[a]=function(u,h,g,p){return(typeof h=="function"||h===null)&&(p=p||g,g=h,h=void 0),d.ajax(d.extend({url:u,type:a,dataType:p,data:h,success:g},d.isPlainObject(u)&&u))}}),d.ajaxPrefilter(function(r){var a;for(a in r.headers)a.toLowerCase()==="content-type"&&(r.contentType=r.headers[a]||"")}),d._evalUrl=function(r,a,u){return d.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,scriptAttrs:a.crossOrigin?{crossOrigin:a.crossOrigin}:void 0,converters:{"text script":function(){}},dataFilter:function(h){d.globalEval(h,a,u)}})},d.fn.extend({wrapAll:function(r){var a;return this[0]&&(typeof r=="function"&&(r=r.call(this[0])),a=d(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(r){return typeof r=="function"?this.each(function(a){d(this).wrapInner(r.call(this,a))}):this.each(function(){var a=d(this),u=a.contents();u.length?u.wrapAll(r):a.append(r)})},wrap:function(r){var a=typeof r=="function";return this.each(function(u){d(this).wrapAll(a?r.call(this,u):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(r){return!d.expr.pseudos.visible(r)},d.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},d.ajaxSettings.xhr=function(){return new n.XMLHttpRequest};var v_={0:200};d.ajaxTransport(function(r){var a;return{send:function(u,h){var g,p=r.xhr();if(p.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(g in r.xhrFields)p[g]=r.xhrFields[g];r.mimeType&&p.overrideMimeType&&p.overrideMimeType(r.mimeType),!r.crossDomain&&!u["X-Requested-With"]&&(u["X-Requested-With"]="XMLHttpRequest");for(g in u)p.setRequestHeader(g,u[g]);a=function(y){return function(){a&&(a=p.onload=p.onerror=p.onabort=p.ontimeout=null,y==="abort"?p.abort():y==="error"?h(p.status,p.statusText):h(v_[p.status]||p.status,p.statusText,(p.responseType||"text")==="text"?{text:p.responseText}:{binary:p.response},p.getAllResponseHeaders()))}},p.onload=a(),p.onabort=p.onerror=p.ontimeout=a("error"),a=a("abort");try{p.send(r.hasContent&&r.data||null)}catch(y){if(a)throw y}},abort:function(){a&&a()}}});function Ih(r){return r.scriptAttrs||!r.headers&&(r.crossDomain||r.async&&d.inArray("json",r.dataTypes)<0)}d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},converters:{"text script":function(r){return d.globalEval(r),r}}}),d.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),Ih(r)&&(r.type="GET")}),d.ajaxTransport("script",function(r){if(Ih(r)){var a,u;return{send:function(h,g){a=d("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",u=function(p){a.remove(),u=null,p&&g(p.type==="error"?404:200,p.type)}),O.head.appendChild(a[0])},abort:function(){u&&u()}}}});var bh=[],sa=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=bh.pop()||d.expando+"_"+Eh.guid++;return this[r]=!0,r}}),d.ajaxPrefilter("jsonp",function(r,a,u){var h,g,p,y=r.jsonp!==!1&&(sa.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&sa.test(r.data)&&"data");return h=r.jsonpCallback=typeof r.jsonpCallback=="function"?r.jsonpCallback():r.jsonpCallback,y?r[y]=r[y].replace(sa,"$1"+h):r.jsonp!==!1&&(r.url+=(ea.test(r.url)?"&":"?")+r.jsonp+"="+h),r.converters["script json"]=function(){return p||d.error(h+" was not called"),p[0]},r.dataTypes[0]="json",g=n[h],n[h]=function(){p=arguments},u.always(function(){g===void 0?d(n).removeProp(h):n[h]=g,r[h]&&(r.jsonpCallback=a.jsonpCallback,bh.push(h)),p&&typeof g=="function"&&g(p[0]),p=g=void 0}),"script"}),d.ajaxPrefilter(function(r,a){typeof r.data!="string"&&!d.isPlainObject(r.data)&&!Array.isArray(r.data)&&!("processData"in a)&&(r.processData=!1),r.data instanceof n.FormData&&(r.contentType=!1)}),d.parseHTML=function(r,a,u){if(typeof r!="string"&&!Bc(r+""))return[];typeof a=="boolean"&&(u=a,a=!1);var h,g;return a||(a=new n.DOMParser().parseFromString("","text/html")),h=Kc.exec(r),g=!u&&[],h?[a.createElement(h[1])]:(h=th([r],a,g),g&&g.length&&d(g).remove(),d.merge([],h.childNodes))},d.fn.load=function(r,a,u){var h,g,p,y=this,v=r.indexOf(" ");return v>-1&&(h=Bn(r.slice(v)),r=r.slice(0,v)),typeof a=="function"?(u=a,a=void 0):a&&typeof a=="object"&&(g="POST"),y.length>0&&d.ajax({url:r,type:g||"GET",dataType:"html",data:a}).done(function(E){p=arguments,y.html(h?d("<div>").append(d.parseHTML(E)).find(h):E)}).always(u&&function(E,w){y.each(function(){u.apply(this,p||[E.responseText,w,E])})}),this},d.expr.pseudos.animated=function(r){return d.grep(d.timers,function(a){return r===a.elem}).length},d.offset={setOffset:function(r,a,u){var h,g,p,y,v,E,w,b=d.css(r,"position"),L=d(r),I={};b==="static"&&(r.style.position="relative"),v=L.offset(),p=d.css(r,"top"),E=d.css(r,"left"),w=(b==="absolute"||b==="fixed")&&(p+E).indexOf("auto")>-1,w?(h=L.position(),y=h.top,g=h.left):(y=parseFloat(p)||0,g=parseFloat(E)||0),typeof a=="function"&&(a=a.call(r,u,d.extend({},v))),a.top!=null&&(I.top=a.top-v.top+y),a.left!=null&&(I.left=a.left-v.left+g),"using"in a?a.using.call(r,I):L.css(I)}},d.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(g){d.offset.setOffset(this,r,g)});var a,u,h=this[0];if(h)return h.getClientRects().length?(a=h.getBoundingClientRect(),u=h.ownerDocument.defaultView,{top:a.top+u.pageYOffset,left:a.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,a,u,h=this[0],g={top:0,left:0};if(d.css(h,"position")==="fixed")a=h.getBoundingClientRect();else{for(a=this.offset(),u=h.ownerDocument,r=h.offsetParent||u.documentElement;r&&r!==u.documentElement&&d.css(r,"position")==="static";)r=r.offsetParent||u.documentElement;r&&r!==h&&r.nodeType===1&&d.css(r,"position")!=="static"&&(g=d(r).offset(),g.top+=d.css(r,"borderTopWidth",!0),g.left+=d.css(r,"borderLeftWidth",!0))}return{top:a.top-g.top-d.css(h,"marginTop",!0),left:a.left-g.left-d.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&d.css(r,"position")==="static";)r=r.offsetParent;return r||Q})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,a){var u=a==="pageYOffset";d.fn[r]=function(h){return Ne(this,function(g,p,y){var v;if(M(g)?v=g:g.nodeType===9&&(v=g.defaultView),y===void 0)return v?v[a]:g[p];v?v.scrollTo(u?v.pageXOffset:y,u?y:v.pageYOffset):g[p]=y},r,h,arguments.length)}}),d.each({Height:"height",Width:"width"},function(r,a){d.each({padding:"inner"+r,content:a,"":"outer"+r},function(u,h){d.fn[h]=function(g,p){var y=arguments.length&&(u||typeof g!="boolean"),v=u||(g===!0||p===!0?"margin":"border");return Ne(this,function(E,w,b){var L;return M(E)?h.indexOf("outer")===0?E["inner"+r]:E.document.documentElement["client"+r]:E.nodeType===9?(L=E.documentElement,Math.max(E.body["scroll"+r],L["scroll"+r],E.body["offset"+r],L["offset"+r],L["client"+r])):b===void 0?d.css(E,w,v):d.style(E,w,b,v)},a,y?g:void 0,y)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,a){d.fn[a]=function(u){return this.on(a,u)}}),d.fn.extend({bind:function(r,a,u){return this.on(r,null,a,u)},unbind:function(r,a){return this.off(r,null,a)},delegate:function(r,a,u,h){return this.on(a,r,u,h)},undelegate:function(r,a,u){return arguments.length===1?this.off(r,"**"):this.off(a,r||"**",u)},hover:function(r,a){return this.on("mouseenter",r).on("mouseleave",a||r)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,a){d.fn[a]=function(u,h){return arguments.length>0?this.on(a,null,u,h):this.trigger(a)}}),d.proxy=function(r,a){var u,h,g;if(typeof a=="string"&&(u=r[a],a=r,r=u),typeof r=="function")return h=s.call(arguments,2),g=function(){return r.apply(a||this,h.concat(s.call(arguments)))},g.guid=r.guid=r.guid||d.guid++,g},d.holdReady=function(r){r?d.readyWait++:d.ready(!0)},d.expr[":"]=d.expr.filters=d.expr.pseudos,typeof define=="function"&&define.amd&&define("jquery",[],function(){return d});var C_=n.jQuery,w_=n.$;return d.noConflict=function(r){return n.$===d&&(n.$=w_),r&&n.jQuery===d&&(n.jQuery=C_),d},typeof e>"u"&&(n.jQuery=n.$=d),d}var Lh,P_,Ph=S(()=>{Lh=M_(window,!0),P_=Lh});var Dh=S_((lx,Oh)=>{"use strict";var{jQuery:O_}=(Ph(),Ah(Mh));Oh.exports=O_});function ee(n,e){if(!n)throw new Error(e)}var lt=S(()=>{});var Fe,Nh=S(()=>{Fe={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}});function la(n){let e=vt();for(let t=0,i=n.length;t<i;++t)Er(e,n[t]);return e}function D_(n,e,t){let i=Math.min.apply(null,n),s=Math.min.apply(null,e),o=Math.max.apply(null,n),l=Math.max.apply(null,e);return Cn(i,s,o,l,t)}function kh(n,e){return e?(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e):n.slice()}function Is(n,e,t){let i,s;return e<n[0]?i=n[0]-e:n[2]<e?i=e-n[2]:i=0,t<n[1]?s=n[1]-t:n[3]<t?s=t-n[3]:s=0,i*i+s*s}function wi(n,e){return ua(n,e[0],e[1])}function ua(n,e,t){return n[0]<=e&&e<=n[2]&&n[1]<=t&&t<=n[3]}function Fh(n,e){let t=n[0],i=n[1],s=n[2],o=n[3],l=e[0],c=e[1],f=Fe.UNKNOWN;return l<t?f=f|Fe.LEFT:l>s&&(f=f|Fe.RIGHT),c<i?f=f|Fe.BELOW:c>o&&(f=f|Fe.ABOVE),f===Fe.UNKNOWN&&(f=Fe.INTERSECTING),f}function vt(){return[1/0,1/0,-1/0,-1/0]}function Cn(n,e,t,i,s){return s?(s[0]=n,s[1]=e,s[2]=t,s[3]=i,s):[n,e,t,i]}function qn(n){return Cn(1/0,1/0,-1/0,-1/0,n)}function zh(n,e){let t=n[0],i=n[1];return Cn(t,i,t,i,e)}function jh(n,e,t,i,s){let o=qn(s);return ca(o,n,e,t,i)}function xr(n,e){return n[0]==e[0]&&n[2]==e[2]&&n[1]==e[1]&&n[3]==e[3]}function Uh(n,e){return e[0]<n[0]&&(n[0]=e[0]),e[2]>n[2]&&(n[2]=e[2]),e[1]<n[1]&&(n[1]=e[1]),e[3]>n[3]&&(n[3]=e[3]),n}function Er(n,e){e[0]<n[0]&&(n[0]=e[0]),e[0]>n[2]&&(n[2]=e[0]),e[1]<n[1]&&(n[1]=e[1]),e[1]>n[3]&&(n[3]=e[1])}function ca(n,e,t,i,s){for(;t<i;t+=s)N_(n,e[t],e[t+1]);return n}function N_(n,e,t){n[0]=Math.min(n[0],e),n[1]=Math.min(n[1],t),n[2]=Math.max(n[2],e),n[3]=Math.max(n[3],t)}function bs(n,e){let t;return t=e(Ti(n)),t||(t=e(Ri(n)),t)||(t=e(Ii(n)),t)||(t=e(ut(n)),t)?t:!1}function vr(n){let e=0;return wn(n)||(e=ae(n)*Oe(n)),e}function Ti(n){return[n[0],n[1]]}function Ri(n){return[n[2],n[1]]}function Xt(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function Gh(n,e){let t;if(e==="bottom-left")t=Ti(n);else if(e==="bottom-right")t=Ri(n);else if(e==="top-left")t=ut(n);else if(e==="top-right")t=Ii(n);else throw new Error("Invalid corner");return t}function Cr(n,e,t,i,s){let[o,l,c,f,m,_,x,C]=ha(n,e,t,i);return Cn(Math.min(o,c,m,x),Math.min(l,f,_,C),Math.max(o,c,m,x),Math.max(l,f,_,C),s)}function ha(n,e,t,i){let s=e*i[0]/2,o=e*i[1]/2,l=Math.cos(t),c=Math.sin(t),f=s*l,m=s*c,_=o*l,x=o*c,C=n[0],T=n[1];return[C-f+x,T-m-_,C-f-x,T-m+_,C+f-x,T+m+_,C+f+x,T+m-_,C-f+x,T-m-_]}function Oe(n){return n[3]-n[1]}function Wt(n,e,t){let i=t||vt();return sn(n,e)?(n[0]>e[0]?i[0]=n[0]:i[0]=e[0],n[1]>e[1]?i[1]=n[1]:i[1]=e[1],n[2]<e[2]?i[2]=n[2]:i[2]=e[2],n[3]<e[3]?i[3]=n[3]:i[3]=e[3]):qn(i),i}function ut(n){return[n[0],n[3]]}function Ii(n){return[n[2],n[3]]}function ae(n){return n[2]-n[0]}function sn(n,e){return n[0]<=e[2]&&n[2]>=e[0]&&n[1]<=e[3]&&n[3]>=e[1]}function wn(n){return n[2]<n[0]||n[3]<n[1]}function Xh(n,e){return e?(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e):n}function Wh(n,e,t){let i=!1,s=Fh(n,e),o=Fh(n,t);if(s===Fe.INTERSECTING||o===Fe.INTERSECTING)i=!0;else{let l=n[0],c=n[1],f=n[2],m=n[3],_=e[0],x=e[1],C=t[0],T=t[1],R=(T-x)/(C-_),M,P;o&Fe.ABOVE&&!(s&Fe.ABOVE)&&(M=C-(T-m)/R,i=M>=l&&M<=f),!i&&o&Fe.RIGHT&&!(s&Fe.RIGHT)&&(P=T-(C-f)*R,i=P>=c&&P<=m),!i&&o&Fe.BELOW&&!(s&Fe.BELOW)&&(M=C-(T-c)/R,i=M>=l&&M<=f),!i&&o&Fe.LEFT&&!(s&Fe.LEFT)&&(P=T-(C-l)*R,i=P>=c&&P<=m)}return i}function Vh(n,e,t,i){if(wn(n))return qn(t);let s=[];if(i>1){let c=n[2]-n[0],f=n[3]-n[1];for(let m=0;m<i;++m)s.push(n[0]+c*m/i,n[1],n[2],n[1]+f*m/i,n[2]-c*m/i,n[3],n[0],n[3]-f*m/i)}else s=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]];e(s,s,2);let o=[],l=[];for(let c=0,f=s.length;c<f;c+=2)o.push(s[c]),l.push(s[c+1]);return D_(o,l,t)}function F_(n,e){let t=e.getExtent(),i=Xt(n);if(e.canWrapX()&&(i[0]<t[0]||i[0]>=t[2])){let s=ae(t),l=Math.floor((i[0]-t[0])/s)*s;n[0]-=l,n[2]-=l}return n}function Kh(n,e,t){if(e.canWrapX()){let i=e.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[i[0],n[1],i[2],n[3]]];F_(n,e);let s=ae(i);if(ae(n)>s&&!t)return[[i[0],n[1],i[2],n[3]]];if(n[0]<i[0])return[[n[0]+s,n[1],i[2],n[3]],[i[0],n[1],n[2],n[3]]];if(n[2]>i[2])return[[n[0],n[1],i[2],n[3]],[i[0],n[1],n[2]-s,n[3]]]}return[n]}var Ee=S(()=>{Nh()});function j_(n){let e=n.getComplianceLevelSupportedFeatures();return e===void 0&&(e=Hn[Ie.VERSION1].level0),{url:n.imageInfo["@id"]===void 0?void 0:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),supports:e.supports,formats:[...e.formats,n.imageInfo.formats===void 0?[]:n.imageInfo.formats],qualities:[...e.qualities,n.imageInfo.qualities===void 0?[]:n.imageInfo.qualities],resolutions:n.imageInfo.scale_factors,tileSize:n.imageInfo.tile_width!==void 0?n.imageInfo.tile_height!==void 0?[n.imageInfo.tile_width,n.imageInfo.tile_height]:[n.imageInfo.tile_width,n.imageInfo.tile_width]:n.imageInfo.tile_height!=null?[n.imageInfo.tile_height,n.imageInfo.tile_height]:void 0}}function U_(n){let e=n.getComplianceLevelSupportedFeatures(),t=Array.isArray(n.imageInfo.profile)&&n.imageInfo.profile.length>1,i=t&&n.imageInfo.profile[1].supports?n.imageInfo.profile[1].supports:[],s=t&&n.imageInfo.profile[1].formats?n.imageInfo.profile[1].formats:[],o=t&&n.imageInfo.profile[1].qualities?n.imageInfo.profile[1].qualities:[];return{url:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(l){return[l.width,l.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(l){return l.width})[0],n.imageInfo.tiles.map(function(l){return l.height===void 0?l.width:l.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(l){return l.scaleFactors})[0],supports:[...e.supports,...i],formats:[...e.formats,...s],qualities:[...e.qualities,...o]}}function G_(n){let e=n.getComplianceLevelSupportedFeatures(),t=n.imageInfo.extraFormats===void 0?e.formats:[...e.formats,...n.imageInfo.extraFormats],i=n.imageInfo.preferredFormats!==void 0&&Array.isArray(n.imageInfo.preferredFormats)&&n.imageInfo.preferredFormats.length>0?n.imageInfo.preferredFormats.filter(function(s){return["jpg","png","gif"].includes(s)}).reduce(function(s,o){return s===void 0&&t.includes(o)?o:s},void 0):void 0;return{url:n.imageInfo.id,sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(s){return[s.width,s.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(s){return s.width})[0],n.imageInfo.tiles.map(function(s){return s.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(s){return s.scaleFactors})[0],supports:n.imageInfo.extraFeatures===void 0?e.supports:[...e.supports,...n.imageInfo.extraFeatures],formats:t,qualities:n.imageInfo.extraQualities===void 0?e.qualities:[...e.qualities,...n.imageInfo.extraQualities],preferredFormat:i}}var Ie,Hn,k_,Bh,z_,Ss,fa,da,ga=S(()=>{lt();Ie={VERSION1:"version1",VERSION2:"version2",VERSION3:"version3"},Hn={};Hn[Ie.VERSION1]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}};Hn[Ie.VERSION2]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}};Hn[Ie.VERSION3]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}};Hn.none={none:{supports:[],formats:[],qualities:[]}};k_=/^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/,Bh=/^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/,z_=/(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;Ss={};Ss[Ie.VERSION1]=j_;Ss[Ie.VERSION2]=U_;Ss[Ie.VERSION3]=G_;fa=class{constructor(e){this.setImageInfo(e)}setImageInfo(e){typeof e=="string"?this.imageInfo=JSON.parse(e):this.imageInfo=e}getImageApiVersion(){if(this.imageInfo===void 0)return;let e=this.imageInfo["@context"]||"ol-no-context";typeof e=="string"&&(e=[e]);for(let t=0;t<e.length;t++)switch(e[t]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return Ie.VERSION1;case"http://iiif.io/api/image/2/context.json":return Ie.VERSION2;case"http://iiif.io/api/image/3/context.json":return Ie.VERSION3;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(Ie.VERSION1)&&this.imageInfo.identifier)return Ie.VERSION1;break;default:}ee(!1,"Cannot determine IIIF Image API version from provided image information JSON")}getComplianceLevelEntryFromProfile(e){if(!(this.imageInfo===void 0||this.imageInfo.profile===void 0))switch(e===void 0&&(e=this.getImageApiVersion()),e){case Ie.VERSION1:if(k_.test(this.imageInfo.profile))return this.imageInfo.profile;break;case Ie.VERSION3:if(z_.test(this.imageInfo.profile))return this.imageInfo.profile;break;case Ie.VERSION2:if(typeof this.imageInfo.profile=="string"&&Bh.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&typeof this.imageInfo.profile[0]=="string"&&Bh.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0];break;default:}}getComplianceLevelFromProfile(e){let t=this.getComplianceLevelEntryFromProfile(e);if(t===void 0)return;let i=t.match(/level[0-2](?:\.json)?$/g);return Array.isArray(i)?i[0].replace(".json",""):void 0}getComplianceLevelSupportedFeatures(){if(this.imageInfo===void 0)return;let e=this.getImageApiVersion(),t=this.getComplianceLevelFromProfile(e);return t===void 0?Hn.none.none:Hn[e][t]}getTileSourceOptions(e){let t=e||{},i=this.getImageApiVersion();if(i===void 0)return;let s=i===void 0?void 0:Ss[i](this);if(s!==void 0)return{url:s.url,version:i,size:[this.imageInfo.width,this.imageInfo.height],sizes:s.sizes,format:t.format!==void 0&&s.formats.includes(t.format)?t.format:s.preferredFormat!==void 0?s.preferredFormat:"jpg",supports:s.supports,quality:t.quality&&s.qualities.includes(t.quality)?t.quality:s.qualities.includes("native")?"native":"default",resolutions:Array.isArray(s.resolutions)?s.resolutions.sort(function(o,l){return l-o}):void 0,tileSize:s.tileSize}}},da=fa});function pa(n){return n[0]>0&&n[1]>0}function qh(n,e,t){return t===void 0&&(t=[0,0]),t[0]=n[0]*e+.5|0,t[1]=n[1]*e+.5|0,t}function ve(n,e){return Array.isArray(n)?n:(e===void 0?e=[n,n]:(e[0]=n,e[1]=n),e)}var Mt=S(()=>{});function Yn(n,e,t,i,s){return s!==void 0?(s.minX=n,s.maxX=e,s.minY=t,s.maxY=i,s):new As(n,e,t,i)}var As,Ls,ma=S(()=>{As=class{constructor(e,t,i,s){this.minX=e,this.maxX=t,this.minY=i,this.maxY=s}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}};Ls=As});function Zn(n,e){return n>e?1:n<e?-1:0}function bi(n,e,t){if(n[0]<=e)return 0;let i=n.length;if(e<=n[i-1])return i-1;if(typeof t=="function"){for(let s=1;s<i;++s){let o=n[s];if(o===e)return s;if(o<e)return t(e,n[s-1],o)>0?s-1:s}return i-1}if(t>0){for(let s=1;s<i;++s)if(n[s]<e)return s-1;return i-1}if(t<0){for(let s=1;s<i;++s)if(n[s]<=e)return s;return i-1}for(let s=1;s<i;++s){if(n[s]==e)return s;if(n[s]<e)return n[s-1]-e<e-n[s]?s-1:s}return i-1}function Hh(n,e){let t=Array.isArray(e)?e:[e],i=t.length;for(let s=0;s<i;s++)n[n.length]=t[s]}function Tn(n,e){let t=n.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function Yh(n,e,t){let i=e||Zn;return n.every(function(s,o){if(o===0)return!0;let l=i(n[o-1],s);return!(l>0||t&&l===0)})}var Ct=S(()=>{});function Zh(n,e,t,i,s){return!bs(s,function(l){return!Rn(n,e,t,i,l[0],l[1])})}function Rn(n,e,t,i,s,o){let l=0,c=n[t-i],f=n[t-i+1];for(;e<t;e+=i){let m=n[e],_=n[e+1];f<=o?_>o&&(m-c)*(o-f)-(s-c)*(_-f)>0&&l++:_<=o&&(m-c)*(o-f)-(s-c)*(_-f)<0&&l--,c=m,f=_}return l!==0}function Ms(n,e,t,i,s,o){if(t.length===0||!Rn(n,e,t[0],i,s,o))return!1;for(let l=1,c=t.length;l<c;++l)if(Rn(n,t[l-1],t[l],i,s,o))return!1;return!0}var Ps=S(()=>{Ee()});function $h(n,e,t,i,s){let o;for(e+=i;e<t;e+=i)if(o=s(n.slice(e-i,e),n.slice(e,e+i)),o)return o;return!1}var Qh=S(()=>{});function Jh(n,e,t,i,s,o){return o=o??ca(vt(),n,e,t,i),sn(s,o)?o[0]>=s[0]&&o[2]<=s[2]||o[1]>=s[1]&&o[3]<=s[3]?!0:$h(n,e,t,i,function(l,c){return Wh(s,l,c)}):!1}function _a(n,e,t,i,s){return!!(Jh(n,e,t,i,s)||Rn(n,e,t,i,s[0],s[1])||Rn(n,e,t,i,s[0],s[3])||Rn(n,e,t,i,s[2],s[1])||Rn(n,e,t,i,s[2],s[3]))}function ef(n,e,t,i,s){if(!_a(n,e,t[0],i,s))return!1;if(t.length===1)return!0;for(let o=1,l=t.length;o<l;++o)if(Zh(n,t[o-1],t[o],i,s)&&!Jh(n,t[o-1],t[o],i,s))return!1;return!0}var ya=S(()=>{Ee();Ps();Qh()});function ge(n,e,t){return Math.min(Math.max(n,e),t)}function tf(n,e,t,i,s,o){let l=s-t,c=o-i;if(l!==0||c!==0){let f=((n-t)*l+(e-i)*c)/(l*l+c*c);f>1?(t=s,i=o):f>0&&(t+=l*f,i+=c*f)}return on(n,e,t,i)}function on(n,e,t,i){let s=t-n,o=i-e;return s*s+o*o}function nf(n){let e=n.length;for(let i=0;i<e;i++){let s=i,o=Math.abs(n[i][i]);for(let c=i+1;c<e;c++){let f=Math.abs(n[c][i]);f>o&&(o=f,s=c)}if(o===0)return null;let l=n[s];n[s]=n[i],n[i]=l;for(let c=i+1;c<e;c++){let f=-n[c][i]/n[i][i];for(let m=i;m<e+1;m++)i==m?n[c][m]=0:n[c][m]+=f*n[i][m]}}let t=new Array(e);for(let i=e-1;i>=0;i--){t[i]=n[i][e]/n[i][i];for(let s=i-1;s>=0;s--)n[s][e]-=n[s][i]*t[i]}return t}function Os(n){return n*180/Math.PI}function Pt(n){return n*Math.PI/180}function an(n,e){let t=n%e;return t*e<0?t+e:t}function rf(n,e,t){return n+t*(e-n)}function Ds(n,e){let t=Math.pow(10,e);return Math.round(n*t)/t}function wr(n,e){return Math.floor(Ds(n,e))}function Tr(n,e){return Math.ceil(Ds(n,e))}function Ns(n,e,t){if(n>=e&&n<t)return n;let i=t-e;return((n-e)%i+i)%i+e}var ke=S(()=>{});function ne(){throw new Error("Unimplemented abstract method.")}function me(n){return n.ol_uid||(n.ol_uid=String(++X_))}var X_,ze=S(()=>{X_=0});function Si(n,e,t,i){return i!==void 0?(i[0]=n,i[1]=e,i[2]=t,i):[n,e,t]}function W_(n,e,t){return n+"/"+e+"/"+t}function Ai(n,e,t,i,s){return`${me(n)},${e},${W_(t,i,s)}`}function sf(n){return V_(n[0],n[1],n[2])}function V_(n,e,t){return(e<<n)+t}function of(n,e){let t=n[0],i=n[1],s=n[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;let o=e.getFullTileRange(t);return o?o.containsXY(i,s):!0}var Li=S(()=>{ze()});var Mi,In,xa,ks,Ea=S(()=>{ma();Ct();lt();Ee();ya();ke();Mt();Li();Mi=[0,0,0],In=5,xa=class{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,ee(Yh(this.resolutions_,(s,o)=>o-s,!0),"`resolutions` must be sorted in descending order");let t;if(!e.origins){for(let s=0,o=this.resolutions_.length-1;s<o;++s)if(!t)t=this.resolutions_[s]/this.resolutions_[s+1];else if(this.resolutions_[s]/this.resolutions_[s+1]!==t){t=void 0;break}}this.zoomFactor_=t,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,ee(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));let i=e.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=ut(i)),ee(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,ee(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:256,ee(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i!==void 0?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map((s,o)=>{let l=new Ls(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(i){let c=this.getTileRangeForExtentAndZ(i,o);l.minX=Math.max(c.minX,l.minX),l.maxX=Math.min(c.maxX,l.maxX),l.minY=Math.max(c.minY,l.minY),l.maxY=Math.min(c.maxY,l.maxY)}return l}):i&&this.calculateTileRanges_(i)}forEachTileCoord(e,t,i){let s=this.getTileRangeForExtentAndZ(e,t);for(let o=s.minX,l=s.maxX;o<=l;++o)for(let c=s.minY,f=s.maxY;c<=f;++c)i([t,o,c])}forEachTileCoordParentTileRange(e,t,i,s){let o,l,c,f=null,m=e[0]-1;for(this.zoomFactor_===2?(l=e[1],c=e[2]):f=this.getTileCoordExtent(e,s);m>=this.minZoom;){if(l!==void 0&&c!==void 0?(l=Math.floor(l/2),c=Math.floor(c/2),o=Yn(l,l,c,c,i)):o=this.getTileRangeForExtentAndZ(f,m,i),t(m,o))return!0;--m}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getOrigins(){return this.origins_}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,i){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){let o=e[1]*2,l=e[2]*2;return Yn(o,o+1,l,l+1,t)}let s=this.getTileCoordExtent(e,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,i){if(t>this.maxZoom||t<this.minZoom)return null;let s=e[0],o=e[1],l=e[2];if(t===s)return Yn(o,l,o,l,i);if(this.zoomFactor_){let f=Math.pow(this.zoomFactor_,t-s),m=Math.floor(o*f),_=Math.floor(l*f);if(t<s)return Yn(m,m,_,_,i);let x=Math.floor(f*(o+1))-1,C=Math.floor(f*(l+1))-1;return Yn(m,x,_,C,i)}let c=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(c,t,i)}getTileRangeForExtentAndZ(e,t,i){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,Mi);let s=Mi[1],o=Mi[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,Mi);let l=Mi[1],c=Mi[2];return Yn(s,l,o,c,i)}getTileCoordCenter(e){let t=this.getOrigin(e[0]),i=this.getResolution(e[0]),s=ve(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*s[0]*i,t[1]-(e[2]+.5)*s[1]*i]}getTileCoordExtent(e,t){let i=this.getOrigin(e[0]),s=this.getResolution(e[0]),o=ve(this.getTileSize(e[0]),this.tmpSize_),l=i[0]+e[1]*o[0]*s,c=i[1]-(e[2]+1)*o[1]*s,f=l+o[0]*s,m=c+o[1]*s;return Cn(l,c,f,m,t)}getTileCoordForCoordAndResolution(e,t,i){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,i)}getTileCoordForXYAndResolution_(e,t,i,s,o){let l=this.getZForResolution(i),c=i/this.getResolution(l),f=this.getOrigin(l),m=ve(this.getTileSize(l),this.tmpSize_),_=c*(e-f[0])/i/m[0],x=c*(f[1]-t)/i/m[1];return s?(_=Tr(_,In)-1,x=Tr(x,In)-1):(_=wr(_,In),x=wr(x,In)),Si(l,_,x,o)}getTileCoordForXYAndZ_(e,t,i,s,o){let l=this.getOrigin(i),c=this.getResolution(i),f=ve(this.getTileSize(i),this.tmpSize_),m=(e-l[0])/c/f[0],_=(l[1]-t)/c/f[1];return s?(m=Tr(m,In)-1,_=Tr(_,In)-1):(m=wr(m,In),_=wr(_,In)),Si(i,m,_,o)}getTileCoordForCoordAndZ(e,t,i){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,i)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){let i=bi(this.resolutions_,e,t||0);return ge(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return _a(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){let t=this.resolutions_.length,i=new Array(t);for(let s=this.minZoom;s<t;++s)i[s]=this.getTileRangeForExtentAndZ(e,s);this.fullTileRanges_=i}},ks=xa});var $,bn=S(()=>{$={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}});function Sn(n){for(let e in n)delete n[e]}function zs(n){let e;for(e in n)return!1;return!e}var $n=S(()=>{});function J(n,e,t,i,s){if(s){let l=t;t=function(c){return n.removeEventListener(e,t),l.call(i??this,c)}}else i&&i!==n&&(t=t.bind(i));let o={target:n,type:e,listener:t};return n.addEventListener(e,t),o}function Pi(n,e,t,i){return J(n,e,t,i,!0)}function le(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),Sn(n))}var wt=S(()=>{$n()});var V,Te=S(()=>{V={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}});var va,An,Rr=S(()=>{va=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}},An=va});function Qn(){return!0}function ln(){return!1}function Jn(){}function af(n){let e,t,i;return function(){let s=Array.prototype.slice.call(arguments);return(!t||this!==i||!Tn(s,t))&&(i=this,t=s,e=n.apply(this,arguments)),e}}function lf(n){function e(){let t;try{t=n()}catch(i){return Promise.reject(i)}return t instanceof Promise?t:Promise.resolve(t)}return e()}var pt=S(()=>{Ct()});var Ca,He,un=S(()=>{Ca=class{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}},He=Ca});var wa,Ln,Ir=S(()=>{Rr();pt();$n();un();wa=class extends An{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;let i=this.listeners_||(this.listeners_={}),s=i[e]||(i[e]=[]);s.includes(t)||s.push(t)}dispatchEvent(e){let t=typeof e=="string",i=t?e:e.type,s=this.listeners_&&this.listeners_[i];if(!s)return;let o=t?new He(e):e;o.target||(o.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),c=this.pendingRemovals_||(this.pendingRemovals_={});i in l||(l[i]=0,c[i]=0),++l[i];let f;for(let m=0,_=s.length;m<_;++m)if("handleEvent"in s[m]?f=s[m].handleEvent(o):f=s[m].call(this,o),f===!1||o.propagationStopped){f=!1;break}if(--l[i]===0){let m=c[i];for(delete c[i];m--;)this.removeEventListener(i,Jn);delete l[i]}return f}disposeInternal(){this.listeners_&&Sn(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){if(!this.listeners_)return;let i=this.listeners_[e];if(!i)return;let s=i.indexOf(t);s!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(i[s]=Jn,++this.pendingRemovals_[e]):(i.splice(s,1),i.length===0&&delete this.listeners_[e]))}},Ln=wa});var ei,K_,Qx,uf,Ta,cf,Ye,Ra,js,Vt=S(()=>{ei=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",K_=ei.includes("safari")&&!ei.includes("chrom"),Qx=K_&&(ei.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(ei)),uf=ei.includes("webkit")&&!ei.includes("edge"),Ta=ei.includes("macintosh"),cf=typeof devicePixelRatio<"u"?devicePixelRatio:1,Ye=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Ra=typeof Image<"u"&&Image.prototype.decode,js=(function(){let n=!1;try{let e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return n})()});function hf(n,e,t){let i=n,s=!0,o=!1,l=!1,c=[Pi(i,V.LOAD,function(){l=!0,o||e()})];return i.src&&Ra?(o=!0,i.decode().then(function(){s&&e()}).catch(function(f){s&&(l?e():t())})):c.push(Pi(i,V.ERROR,t)),function(){s=!1,c.forEach(le)}}function B_(n,e){return new Promise((t,i)=>{function s(){l(),t(n)}function o(){l(),i(new Error("Image load error"))}function l(){n.removeEventListener("load",s),n.removeEventListener("error",o)}n.addEventListener("load",s),n.addEventListener("error",o),e&&(n.src=e)})}function ff(n,e){return e&&(n.src=e),n.src&&Ra?new Promise((t,i)=>n.decode().then(()=>t(n)).catch(s=>n.complete&&n.width?t(n):i(s))):B_(n)}var Ia=S(()=>{wt();Te();Vt()});var X,Kt=S(()=>{X={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}});function ba(n){return Math.pow(n,3)}function Tt(n){return 1-ba(1-n)}function df(n){return 3*n*n-2*n*n*n}function gf(n){return n}var Mn=S(()=>{});var Sa,Oi,Us=S(()=>{Kt();Mn();Te();Ir();ze();Sa=class extends Ln{constructor(e,t,i){super(),i=i||{},this.tileCoord=e,this.state=t,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(V.CHANGE)}release(){this.setState(X.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==X.EMPTY){if(this.state!==X.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}}load(){ne()}getAlpha(e,t){if(!this.transition_)return 1;let i=this.transitionStarts_[e];if(!i)i=t,this.transitionStarts_[e]=i;else if(i===-1)return 1;let s=t-i+1e3/60;return s>=this.transition_?1:ba(s/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}disposeInternal(){this.release(),super.disposeInternal()}},Oi=Sa});function Ce(n,e,t,i){let s;return t&&t.length?s=t.shift():Ye?s=new class extends OffscreenCanvas{style={}}(n??300,e??150):s=document.createElement("canvas"),n&&(s.width=n),e&&(s.height=e),s.getContext("2d",i)}function Di(){return Aa||(Aa=Ce(1,1)),Aa}function br(n){let e=n.canvas;e.width=1,e.height=1,n.clearRect(0,0,1,1)}function Ni(n,e){let t=e.parentNode;t&&t.replaceChild(n,e)}function pf(n){for(;n.lastChild;)n.lastChild.remove()}function mf(n,e){let t=n.childNodes;for(let i=0;;++i){let s=t[i],o=e[i];if(!s&&!o)break;if(s!==o){if(!s){n.appendChild(o);continue}if(!o){n.removeChild(s),--i;continue}n.insertBefore(o,s)}}}function Gs(){return new Proxy({childNodes:[],appendChild:function(e){return this.childNodes.push(e),e},remove:function(){},removeChild:function(e){let t=this.childNodes.indexOf(e);if(t===-1)throw new Error("Node to remove was not found");return this.childNodes.splice(t,1),e},insertBefore:function(e,t){let i=this.childNodes.indexOf(t);if(i===-1)throw new Error("Reference node not found");return this.childNodes.splice(i,0,e),e},style:{}},{get(e,t,i){return t==="firstElementChild"?e.childNodes.length>0?e.childNodes[0]:null:Reflect.get(e,t,i)}})}function Ot(n){return typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}var Aa,Ze=S(()=>{Vt()});function q_(){let n=Ce(1,1);return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,1,1),n.canvas}var La,Fi,Xs=S(()=>{Ia();Us();Kt();Ze();Vt();La=class extends Oi{constructor(e,t,i,s,o,l){super(e,t,l),this.crossOrigin_=s?.crossOrigin,this.referrerPolicy_=s?.referrerPolicy,this.src_=i,this.key=i,this.image_,Ye?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=o}getImage(){return this.image_}setImage(e){this.image_=e,this.state=X.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){this.state=X.ERROR,this.unlistenImage_(),this.image_=q_(),this.changed()}handleImageLoad_(){if(Ye)this.state=X.LOADED;else{let e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=X.LOADED:this.state=X.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==X.ERROR&&(this.state=X.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==X.IDLE&&(this.state=X.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=hf(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}};Fi=La});function Ws(...n){H_>_f.warn||console.warn(...n)}var _f,H_,Ma=S(()=>{_f={info:1,warn:2,error:3,none:4},H_=_f.info});function yf(n,e){return n[0]+=+e[0],n[1]+=+e[1],n}function ti(n,e){let t=!0;for(let i=n.length-1;i>=0;--i)if(n[i]!=e[i]){t=!1;break}return t}function ki(n,e){let t=Math.cos(e),i=Math.sin(e),s=n[0]*t-n[1]*i,o=n[1]*t+n[0]*i;return n[0]=s,n[1]=o,n}function xf(n,e){return n[0]*=e,n[1]*=e,n}function Ef(n,e){if(e.canWrapX()){let t=ae(e.getExtent()),i=vf(n,e,t);i&&(n[0]-=i*t)}return n}function vf(n,e,t){let i=e.getExtent(),s=0;return e.canWrapX()&&(n[0]<i[0]||n[0]>i[2])&&(t=t||ae(i),s=Math.floor((n[0]-i[0])/t)),s}var zi=S(()=>{Ee()});var cn,Pa=S(()=>{cn={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937}});var Oa,ji,Vs=S(()=>{Pa();Oa=class{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||cn[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}},ji=Oa});function Cf(n,e,t,i){let s=n.length;t=t>1?t:2,i=i??t,e===void 0&&(t>2?e=n.slice():e=new Array(s));for(let o=0;o<s;o+=i){e[o]=Ui*n[o]/180;let l=Sr*Math.log(Math.tan(Math.PI*(+n[o+1]+90)/360));l>Ks?l=Ks:l<-Ks&&(l=-Ks),e[o+1]=l}return e}function wf(n,e,t,i){let s=n.length;t=t>1?t:2,i=i??t,e===void 0&&(t>2?e=n.slice():e=new Array(s));for(let o=0;o<s;o+=i)e[o]=180*n[o]/Ui,e[o+1]=360*Math.atan(Math.exp(n[o+1]/Sr))/Math.PI-90;return e}var Sr,Ui,Y_,Z_,Ks,Pn,Da,Tf=S(()=>{Vs();Sr=6378137,Ui=Math.PI*Sr,Y_=[-Ui,-Ui,Ui,Ui],Z_=[-180,-85,180,85],Ks=Sr*Math.log(Math.tan(Math.PI/2)),Pn=class extends ji{constructor(e){super({code:e,units:"m",extent:Y_,global:!0,worldExtent:Z_,getPointResolution:function(t,i){return t/Math.cosh(i[1]/Sr)}})}},Da=[new Pn("EPSG:3857"),new Pn("EPSG:102100"),new Pn("EPSG:102113"),new Pn("EPSG:900913"),new Pn("http://www.opengis.net/def/crs/EPSG/0/3857"),new Pn("http://www.opengis.net/gml/srs/epsg.xml#3857")]});var $_,Rf,Q_,hn,Na,If=S(()=>{Vs();$_=6378137,Rf=[-180,-90,180,90],Q_=Math.PI*$_/180,hn=class extends ji{constructor(e,t){super({code:e,units:"degrees",extent:Rf,axisOrientation:t,global:!0,metersPerUnit:Q_,worldExtent:Rf})}},Na=[new hn("CRS:84"),new hn("EPSG:4326","neu"),new hn("urn:ogc:def:crs:OGC:1.3:CRS84"),new hn("urn:ogc:def:crs:OGC:2:84"),new hn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new hn("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new hn("http://www.opengis.net/def/crs/EPSG/0/4326","neu")]});function bf(n){return Fa[n]||Fa[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Sf(n,e){Fa[n]=e}var Fa,Af=S(()=>{Fa={}});function Xi(n,e,t){let i=n.getCode(),s=e.getCode();i in Gi||(Gi[i]={}),Gi[i][s]=t}function Bs(n,e){return n in Gi&&e in Gi[n]?Gi[n][e]:null}var Gi,Lf=S(()=>{Gi={}});function oy(n,e,t){let i=n-5e5,l=(t.north?e:e-1e7)/qs/(Hs*kf),c=l+ny*Math.sin(2*l)+iy*Math.sin(4*l)+ry*Math.sin(6*l)+sy*Math.sin(8*l),f=Math.sin(c),m=f*f,_=Math.cos(c),x=f/_,C=x*x,T=C*C,R=1-Rt*m,M=Math.sqrt(1-Rt*m),P=Hs/M,O=(1-Rt)/R,z=ni*_**2,j=z*z,N=i/(P*qs),F=N*N,d=F*N,K=d*N,W=K*N,k=W*N,U=c-x/O*(F/2-K/24*(5+3*C+10*z-4*j-9*ni))+k/720*(61+90*C+298*z+45*T-252*ni-3*j),se=(N-d/6*(1+2*C+z)+W/120*(5-2*z+28*C-3*j+8*ni+24*T))/_;return se=Ns(se+Pt(zf(t.number)),-Math.PI,Math.PI),[Os(se),Os(U)]}function uy(n,e,t){n=Ns(n,ay,ly),e<Pf?e=Pf:e>Of&&(e=Of);let i=Pt(e),s=Math.sin(i),o=Math.cos(i),l=s/o,c=l*l,f=c*c,m=Pt(n),_=zf(t.number),x=Pt(_),C=Hs/Math.sqrt(1-Rt*s**2),T=ni*o**2,R=o*Ns(m-x,-Math.PI,Math.PI),M=R*R,P=M*R,O=P*R,z=O*R,j=z*R,N=Hs*(kf*i-J_*Math.sin(2*i)+ey*Math.sin(4*i)-ty*Math.sin(6*i)),F=qs*C*(R+P/6*(1-c+T)+z/120*(5-18*c+f+72*T-58*ni))+5e5,d=qs*(N+C*l*(M/2+O/24*(5-c+9*T+4*T**2)+j/720*(61-58*c+f+600*T-330*ni)));return t.north||(d+=1e7),[F,d]}function zf(n){return(n-1)*6-180+3}function jf(n){let e=0;for(let s of cy){let o=n.match(s);if(o){e=parseInt(o[1]);break}}if(!e)return null;let t=0,i=!1;return e>32700&&e<32761?t=e-32700:e>32600&&e<32661&&(i=!0,t=e-32600),t?{number:t,north:i}:null}function Df(n,e){return function(t,i,s,o){let l=t.length;s=s>1?s:2,o=o??s,i||(s>2?i=t.slice():i=new Array(l));for(let c=0;c<l;c+=o){let f=t[c],m=t[c+1],_=n(f,m,e);i[c]=_[0],i[c+1]=_[1]}return i}}function Uf(n){return jf(n)?new ji({code:n,units:"m"}):null}function Gf(n){let e=jf(n.getCode());return e?{forward:Df(uy,e),inverse:Df(oy,e)}:null}var qs,Rt,Ys,Zs,ni,Mf,Wi,Nf,ka,za,Ff,kf,J_,ey,ty,ny,iy,ry,sy,Hs,Pf,Of,ay,ly,cy,Xf=S(()=>{ke();Vs();qs=.9996,Rt=.00669438,Ys=Rt*Rt,Zs=Ys*Rt,ni=Rt/(1-Rt),Mf=Math.sqrt(1-Rt),Wi=(1-Mf)/(1+Mf),Nf=Wi*Wi,ka=Nf*Wi,za=ka*Wi,Ff=za*Wi,kf=1-Rt/4-3*Ys/64-5*Zs/256,J_=3*Rt/8+3*Ys/32+45*Zs/1024,ey=15*Ys/256+45*Zs/1024,ty=35*Zs/3072,ny=3/2*Wi-27/32*ka+269/512*Ff,iy=21/16*Nf-55/32*za,ry=151/96*ka-417/128*Ff,sy=1097/512*za,Hs=6378137;Pf=-80,Of=84,ay=-180,ly=180;cy=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/]});function ja(n,e,t){t=t||hy;let i=Pt(n[1]),s=Pt(e[1]),o=(s-i)/2,l=Pt(e[0]-n[0])/2,c=Math.sin(o)*Math.sin(o)+Math.sin(l)*Math.sin(l)*Math.cos(i)*Math.cos(s);return 2*t*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}var hy,Wf=S(()=>{ke();hy=63710088e-1});function Kf(n){Ga=!(n===void 0?!0:n)}function Wa(n,e){if(e!==void 0){for(let t=0,i=n.length;t<i;++t)e[t]=n[t];e=e}else e=n.slice();return e}function Xa(n){Sf(n.getCode(),n),Xi(n,n,Wa)}function gy(n){n.forEach(Xa)}function $e(n){if(typeof n!="string")return n;let e=bf(n);if(e)return e;for(let t of dy){let i=t(n);if(i)return i}return null}function Va(n,e,t,i){n=$e(n);let s,o=n.getPointResolutionFunc();if(o){if(s=o(e,t),i&&i!==n.getUnits()){let l=n.getMetersPerUnit();l&&(s=s*l/cn[i])}}else{let l=n.getUnits();if(l=="degrees"&&!i||i=="degrees")s=e;else{let c=Ka(n,$e("EPSG:4326"));if(!c&&l!=="degrees")s=e*n.getMetersPerUnit();else{let m=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];m=c(m,m,2);let _=ja(m.slice(0,2),m.slice(2,4)),x=ja(m.slice(4,6),m.slice(6,8));s=(_+x)/2}let f=i?cn[i]:n.getMetersPerUnit();f!==void 0&&(s/=f)}}return s}function Vf(n){gy(n),n.forEach(function(e){n.forEach(function(t){e!==t&&Xi(e,t,Wa)})})}function py(n,e,t,i){n.forEach(function(s){e.forEach(function(o){Xi(s,o,t),Xi(o,s,i)})})}function $s(n,e){return n?typeof n=="string"?$e(n):n:$e(e)}function Bf(n){return(function(e,t,i,s){let o=e.length;i=i!==void 0?i:2,s=s??i,t=t!==void 0?t:new Array(o);for(let l=0;l<o;l+=s){let c=n(e.slice(l,l+i)),f=c.length;for(let m=0,_=s;m<_;++m)t[l+m]=m>=f?e[l+m]:c[m]}return t})}function Vi(n,e){if(n===e)return!0;let t=n.getUnits()===e.getUnits();return(n.getCode()===e.getCode()||Ka(n,e)===Wa)&&t}function Ka(n,e){let t=n.getCode(),i=e.getCode(),s=Bs(t,i);if(s)return s;let o=null,l=null;for(let f of fy)o||(o=f(n)),l||(l=f(e));if(!o&&!l)return null;let c="EPSG:4326";if(l)if(o)s=Ua(o.inverse,l.forward);else{let f=Bs(t,c);f&&(s=Ua(f,l.forward))}else{let f=Bs(c,i);f&&(s=Ua(o.inverse,f))}return s&&(Xa(n),Xa(e),Xi(n,e,s)),s}function Ua(n,e){return function(t,i,s,o){return i=n(t,i,s,o),e(i,i,s,o)}}function ii(n,e){let t=$e(n),i=$e(e);return Ka(t,i)}function Ki(n,e,t){let i=ii(e,t);if(!i){let s=$e(e).getCode(),o=$e(t).getCode();throw new Error(`No transform available between ${s} and ${o}`)}return i(n,void 0,n.length)}function qf(n,e,t,i){let s=ii(e,t);return Vh(n,s,void 0,i)}function Hf(){return fn}function Ar(n,e){return fn?Ki(n,e,fn):n}function mt(n,e){return fn?Ki(n,fn,e):(Ga&&!ti(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(Ga=!1,Ws("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),n)}function Yf(n,e){return fn?qf(n,e,fn):n}function Bt(n,e){return fn?qf(n,fn,e):n}function my(){Vf(Da),Vf(Na),py(Na,Da,Cf,wf)}var fy,dy,Ga,fn,Dt=S(()=>{Ma();zi();Ee();Pa();Tf();If();Af();Lf();Xf();Wf();fy=[Gf],dy=[Uf],Ga=!0;fn=null;my()});function Zf(n,e,t,i,s){n.beginPath(),n.moveTo(0,0),n.lineTo(e,t),n.lineTo(i,s),n.closePath(),n.save(),n.clip(),n.fillRect(0,0,Math.max(e,i)+1,Math.max(t,s)),n.restore()}function qa(n,e){return Math.abs(n[e*4]-210)>2||Math.abs(n[e*4+3]-.75*255)>2}function _y(){if(Ba===void 0){let n=Ce(6,6,ri);n.globalCompositeOperation="lighter",n.fillStyle="rgba(210, 0, 0, 0.75)",Zf(n,4,5,4,0),Zf(n,4,5,0,5);let e=n.getImageData(0,0,3,3).data;Ba=qa(e,0)||qa(e,4)||qa(e,8),br(n),ri.push(n.canvas)}return Ba}function $f(n,e,t,i){let s=Ki(t,e,n),o=Va(e,i,t),l=e.getMetersPerUnit();l!==void 0&&(o*=l);let c=n.getMetersPerUnit();c!==void 0&&(o/=c);let f=n.getExtent();if(!f||wi(f,s)){let m=Va(n,o,s)/o;isFinite(m)&&m>0&&(o/=m)}return o}function Qf(n,e,t,i){let s=Xt(t),o=$f(n,e,s,i);return(!isFinite(o)||o<=0)&&bs(t,function(l){return o=$f(n,e,l,i),isFinite(o)&&o>0}),o}function Jf(n,e,t,i,s,o,l,c,f,m,_,x,C,T){let R=Ce(Math.round(t*n),Math.round(t*e),ri);if(x||(R.imageSmoothingEnabled=!1),f.length===0)return R.canvas;R.scale(t,t);function M(F){return Math.round(F*t)/t}R.globalCompositeOperation="lighter";let P=vt();f.forEach(function(F,d,K){Uh(P,F.extent)});let O,z=t/i,j=(x?1:1+Math.pow(2,-24))/z;if(!C||f.length!==1||m!==0){if(O=Ce(Math.round(ae(P)*z),Math.round(Oe(P)*z),ri),x||(O.imageSmoothingEnabled=!1),s&&T){let F=(s[0]-P[0])*z,d=-(s[3]-P[3])*z,K=ae(s)*z,W=Oe(s)*z;O.rect(F,d,K,W),O.clip()}f.forEach(function(F,d,K){if(F.image.width>0&&F.image.height>0){if(F.clipExtent){O.save();let Y=(F.clipExtent[0]-P[0])*z,ie=-(F.clipExtent[3]-P[3])*z,pe=ae(F.clipExtent)*z,Ge=Oe(F.clipExtent)*z;O.rect(x?Y:Math.round(Y),x?ie:Math.round(ie),x?pe:Math.round(Y+pe)-Math.round(Y),x?Ge:Math.round(ie+Ge)-Math.round(ie)),O.clip()}let W=(F.extent[0]-P[0])*z,k=-(F.extent[3]-P[3])*z,U=ae(F.extent)*z,se=Oe(F.extent)*z;O.drawImage(F.image,m,m,F.image.width-2*m,F.image.height-2*m,x?W:Math.round(W),x?k:Math.round(k),x?U:Math.round(W+U)-Math.round(W),x?se:Math.round(k+se)-Math.round(k)),F.clipExtent&&O.restore()}})}let N=ut(l);return c.getTriangles().forEach(function(F,d,K){let W=F.source,k=F.target,U=W[0][0],se=W[0][1],Y=W[1][0],ie=W[1][1],pe=W[2][0],Ge=W[2][1],Xe=M((k[0][0]-N[0])/o),Q=M(-(k[0][1]-N[1])/o),oe=M((k[1][0]-N[0])/o),ce=M(-(k[1][1]-N[1])/o),We=M((k[2][0]-N[0])/o),Le=M(-(k[2][1]-N[1])/o),De=U,be=se;U=0,se=0,Y-=De,ie-=be,pe-=De,Ge-=be;let jt=[[Y,ie,0,0,oe-Xe],[pe,Ge,0,0,We-Xe],[0,0,Y,ie,ce-Q],[0,0,pe,Ge,Le-Q]],xt=nf(jt);if(!xt)return;if(R.save(),R.beginPath(),_y()||!x){R.moveTo(oe,ce);let we=4,Ve=Xe-oe,Xn=Q-ce;for(let dt=0;dt<we;dt++)R.lineTo(oe+M((dt+1)*Ve/we),ce+M(dt*Xn/(we-1))),dt!=we-1&&R.lineTo(oe+M((dt+1)*Ve/we),ce+M((dt+1)*Xn/(we-1)));R.lineTo(We,Le)}else R.moveTo(oe,ce),R.lineTo(Xe,Q),R.lineTo(We,Le);R.clip(),R.transform(xt[0],xt[2],xt[1],xt[3],Xe,Q),R.translate(P[0]-De,P[3]-be);let rt;if(O)rt=O.canvas,R.scale(j,-j);else{let we=f[0],Ve=we.extent;rt=we.image,R.scale(ae(Ve)/rt.width,-Oe(Ve)/rt.height)}R.drawImage(rt,0,0),R.restore()}),O&&(br(O),ri.push(O.canvas)),_&&(R.save(),R.globalCompositeOperation="source-over",R.strokeStyle="black",R.lineWidth=1,c.getTriangles().forEach(function(F,d,K){let W=F.target,k=(W[0][0]-N[0])/o,U=-(W[0][1]-N[1])/o,se=(W[1][0]-N[0])/o,Y=-(W[1][1]-N[1])/o,ie=(W[2][0]-N[0])/o,pe=-(W[2][1]-N[1])/o;R.beginPath(),R.moveTo(se,Y),R.lineTo(k,U),R.lineTo(ie,pe),R.closePath(),R.stroke()}),R.restore()),R.canvas}var Ba,ri,ed=S(()=>{Ze();Ee();ke();Dt();ri=[]});function dn(){return[1,0,0,1,0,0]}function Ke(n,e){let t=e[0],i=e[1];return e[0]=n[0]*t+n[2]*i+n[4],e[1]=n[1]*t+n[3]*i+n[5],e}function gn(n,e,t,i,s,o,l,c){let f=Math.sin(o),m=Math.cos(o);return n[0]=i*m,n[1]=s*f,n[2]=-i*f,n[3]=s*m,n[4]=l*i*m-c*i*f+e,n[5]=l*s*f+c*s*m+t,n}function Js(n,e){let t=yy(e);ee(t!==0,"Transformation matrix cannot be inverted");let i=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5];return n[0]=l/t,n[1]=-s/t,n[2]=-o/t,n[3]=i/t,n[4]=(o*f-l*c)/t,n[5]=-(i*f-s*c)/t,n}function yy(n){return n[0]*n[3]-n[1]*n[2]}function td(n){return"matrix("+n.join(", ")+")"}function Qs(n){return n.substring(7,n.length-1).split(",").map(parseFloat)}function nd(n,e){let t=Qs(n),i=Qs(e);for(let s=0;s<6;++s)if(Math.round((t[s]-i[s])*xy[s])!==0)return!1;return!0}var rv,xy,On=S(()=>{lt();rv=new Array(6);xy=[1e5,1e5,1e5,1e5,2,2]});var Ey,id,Ha,rd,sd=S(()=>{Ee();ke();Dt();On();Ey=10,id=.25,Ha=class{constructor(e,t,i,s,o,l,c){this.sourceProj_=e,this.targetProj_=t;let f={},m=c?Bf(j=>Ke(c,Ki(j,this.targetProj_,this.sourceProj_))):ii(this.targetProj_,this.sourceProj_);this.transformInv_=function(j){let N=j[0]+"/"+j[1];return f[N]||(f[N]=m(j)),f[N]},this.maxSourceExtent_=s,this.errorThresholdSquared_=o*o,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!s&&!!this.sourceProj_.getExtent()&&ae(s)>=ae(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?ae(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?ae(this.targetProj_.getExtent()):null;let _=ut(i),x=Ii(i),C=Ri(i),T=Ti(i),R=this.transformInv_(_),M=this.transformInv_(x),P=this.transformInv_(C),O=this.transformInv_(T),z=Ey+(l?Math.max(0,Math.ceil(Math.log2(vr(i)/(l*l*256*256)))):0);if(this.addQuad_(_,x,C,T,R,M,P,O,z),this.wrapsXInSource_){let j=1/0;this.triangles_.forEach(function(N,F,d){j=Math.min(j,N.source[0][0],N.source[1][0],N.source[2][0])}),this.triangles_.forEach(N=>{if(Math.max(N.source[0][0],N.source[1][0],N.source[2][0])-j>this.sourceWorldWidth_/2){let F=[[N.source[0][0],N.source[0][1]],[N.source[1][0],N.source[1][1]],[N.source[2][0],N.source[2][1]]];F[0][0]-j>this.sourceWorldWidth_/2&&(F[0][0]-=this.sourceWorldWidth_),F[1][0]-j>this.sourceWorldWidth_/2&&(F[1][0]-=this.sourceWorldWidth_),F[2][0]-j>this.sourceWorldWidth_/2&&(F[2][0]-=this.sourceWorldWidth_);let d=Math.min(F[0][0],F[1][0],F[2][0]);Math.max(F[0][0],F[1][0],F[2][0])-d<this.sourceWorldWidth_/2&&(N.source=F)}})}f={}}addTriangle_(e,t,i,s,o,l){this.triangles_.push({source:[s,o,l],target:[e,t,i]})}addQuad_(e,t,i,s,o,l,c,f,m){let _=la([o,l,c,f]),x=this.sourceWorldWidth_?ae(_)/this.sourceWorldWidth_:null,C=this.sourceWorldWidth_,T=this.sourceProj_.canWrapX()&&x>.5&&x<1,R=!1;if(m>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){let P=la([e,t,i,s]);R=ae(P)/this.targetWorldWidth_>id||R}!T&&this.sourceProj_.isGlobal()&&x&&(R=x>id||R)}if(!R&&this.maxSourceExtent_&&isFinite(_[0])&&isFinite(_[1])&&isFinite(_[2])&&isFinite(_[3])&&!sn(_,this.maxSourceExtent_))return;let M=0;if(!R&&(!isFinite(o[0])||!isFinite(o[1])||!isFinite(l[0])||!isFinite(l[1])||!isFinite(c[0])||!isFinite(c[1])||!isFinite(f[0])||!isFinite(f[1]))){if(m>0)R=!0;else if(M=(!isFinite(o[0])||!isFinite(o[1])?8:0)+(!isFinite(l[0])||!isFinite(l[1])?4:0)+(!isFinite(c[0])||!isFinite(c[1])?2:0)+(!isFinite(f[0])||!isFinite(f[1])?1:0),M!=1&&M!=2&&M!=4&&M!=8)return}if(m>0){if(!R){let P=[(e[0]+i[0])/2,(e[1]+i[1])/2],O=this.transformInv_(P),z;T?z=(an(o[0],C)+an(c[0],C))/2-an(O[0],C):z=(o[0]+c[0])/2-O[0];let j=(o[1]+c[1])/2-O[1];R=z*z+j*j>this.errorThresholdSquared_}if(R){if(Math.abs(e[0]-i[0])<=Math.abs(e[1]-i[1])){let P=[(t[0]+i[0])/2,(t[1]+i[1])/2],O=this.transformInv_(P),z=[(s[0]+e[0])/2,(s[1]+e[1])/2],j=this.transformInv_(z);this.addQuad_(e,t,P,z,o,l,O,j,m-1),this.addQuad_(z,P,i,s,j,O,c,f,m-1)}else{let P=[(e[0]+t[0])/2,(e[1]+t[1])/2],O=this.transformInv_(P),z=[(i[0]+s[0])/2,(i[1]+s[1])/2],j=this.transformInv_(z);this.addQuad_(e,P,z,s,o,O,j,f,m-1),this.addQuad_(P,t,i,z,O,l,c,j,m-1)}return}}if(T){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(M&11)==0&&this.addTriangle_(e,i,s,o,c,f),(M&14)==0&&this.addTriangle_(e,i,t,o,c,l),M&&((M&13)==0&&this.addTriangle_(t,s,e,l,f,o),(M&7)==0&&this.addTriangle_(t,s,i,l,f,c))}calculateSourceExtent(){let e=vt();return this.triangles_.forEach(function(t,i,s){let o=t.source;Er(e,o[0]),Er(e,o[1]),Er(e,o[2])}),e}getTriangles(){return this.triangles_}},rd=Ha});var Ya,eo,Za=S(()=>{Us();Kt();Ze();wt();Te();Ee();ke();ed();sd();Ya=class extends Oi{constructor(e,t,i,s,o,l,c,f,m,_,x,C){super(o,X.IDLE,C),this.renderEdges_=x!==void 0?x:!1,this.pixelRatio_=c,this.gutter_=f,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=s,this.wrappedTileCoord_=l||o,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=e.canWrapX()?e.getExtent():void 0;let T=s.getTileCoordExtent(this.wrappedTileCoord_),R=this.targetTileGrid_.getExtent(),M=this.sourceTileGrid_.getExtent(),P=R?Wt(T,R):T;if(vr(P)===0){this.state=X.EMPTY;return}let O=e.getExtent();O&&(M?M=Wt(M,O):M=O);let z=s.getResolution(this.wrappedTileCoord_[0]),j=Qf(e,i,P,z);if(!isFinite(j)||j<=0){this.state=X.EMPTY;return}let N=_!==void 0?_:.5;if(this.triangulation_=new rd(e,i,P,M,j*N,z),this.triangulation_.getTriangles().length===0){this.state=X.EMPTY;return}this.sourceZ_=t.getZForResolution(j);let F=this.triangulation_.calculateSourceExtent();if(M&&(e.canWrapX()?(F[1]=ge(F[1],M[1],M[3]),F[3]=ge(F[3],M[1],M[3])):F=Wt(F,M)),!vr(F))this.state=X.EMPTY;else{let d=0,K=0;e.canWrapX()&&(d=ae(O),K=Math.floor((F[0]-O[0])/d)),Kh(F.slice(),e,!0).forEach(k=>{let U=t.getTileRangeForExtentAndZ(k,this.sourceZ_);for(let se=U.minX;se<=U.maxX;se++)for(let Y=U.minY;Y<=U.maxY;Y++){let ie=K*d;this.sourceTiles_.push({getTile:()=>m(this.sourceZ_,se,Y,c),offset:ie})}++K}),this.sourceTiles_.length===0&&(this.state=X.EMPTY)}}getImage(){return this.canvas_}reproject_(){let e=[];if(this.sourceTiles_.forEach(t=>{let i=t.tile;if(i&&i.getState()==X.LOADED){let s=this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);s[0]+=t.offset,s[2]+=t.offset;let o=this.clipExtent_?.slice();o&&(o[0]+=t.offset,o[2]+=t.offset),e.push({extent:s,clipExtent:o,image:i.getImage()})}}),this.sourceTiles_.length=0,e.length===0)this.state=X.ERROR;else{let t=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(t),s=typeof i=="number"?i:i[0],o=typeof i=="number"?i:i[1],l=this.targetTileGrid_.getResolution(t),c=this.sourceTileGrid_.getResolution(this.sourceZ_),f=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=Jf(s,o,this.pixelRatio_,c,this.sourceTileGrid_.getExtent(),l,f,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=X.LOADED}this.changed()}load(){for(let e of this.sourceTiles_)e.tile=e.getTile();if(this.state==X.IDLE){this.state=X.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:t})=>{let i=t.getState();if(i==X.IDLE||i==X.LOADING){e++;let s=J(t,V.CHANGE,o=>{let l=t.getState();(l==X.LOADED||l==X.ERROR||l==X.EMPTY)&&(le(s),e--,e===0&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(s)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:t},i,s){t.getState()==X.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(le),this.sourcesListenerKeys_=null}release(){this.canvas_&&(br(this.canvas_.getContext("2d")),ri.push(this.canvas_),this.canvas_=null),this.sourceTiles_.length=0,super.release()}},eo=Ya});function to(n){let e=n.getDefaultTileGrid();return e||(e=wy(n),n.setDefaultTileGrid(e)),e}function od(n,e,t){let i=e[0],s=n.getTileCoordCenter(e),o=ad(t);if(!wi(o,s)){let l=ae(o),c=Math.ceil((o[0]-s[0])/l);return s[0]+=l*c,n.getTileCoordForCoordAndZ(s,i)}return e}function vy(n,e,t,i){i=i!==void 0?i:"top-left";let s=Cy(n,e,t);return new ks({extent:n,origin:Gh(n,i),resolutions:s,tileSize:t})}function Cy(n,e,t,i){e=e!==void 0?e:42,t=ve(t!==void 0?t:256);let s=Oe(n),o=ae(n);i=i>0?i:Math.max(o/t[0],s/t[1]);let l=e+1,c=new Array(l);for(let f=0;f<l;++f)c[f]=i/Math.pow(2,f);return c}function wy(n,e,t,i){let s=ad(n);return vy(s,e,t,i)}function ad(n){n=$e(n);let e=n.getExtent();if(!e){let t=180*cn.degrees/n.getMetersPerUnit();e=Cn(-t,-t,t,t)}return e}var $a=S(()=>{Ee();Dt();Mt();Ea()});function ld(n,e,t,i,s){return n.replace(Ty,e.toString()).replace(Ry,t.toString()).replace(Iy,i.toString()).replace(by,function(){if(s===void 0)throw new Error("If the URL template has a {-y} placeholder, the grid extent must be known");return(s-i).toString()})}function ud(n){let e=[],t=/\{([a-z])-([a-z])\}/.exec(n);if(t){let i=t[1].charCodeAt(0),s=t[2].charCodeAt(0),o;for(o=i;o<=s;++o)e.push(n.replace(t[0],String.fromCharCode(o)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(n),t){let i=parseInt(t[2],10);for(let s=parseInt(t[1],10);s<=i;s++)e.push(n.replace(t[0],s.toString()));return e}return e.push(n),e}var Ty,Ry,Iy,by,Qa=S(()=>{Ty=/\{z\}/g,Ry=/\{x\}/g,Iy=/\{y\}/g,by=/\{-y\}/g});function Sy(n,e){return(function(t,i,s){if(!t)return;let o,l=t[0];if(e){let c=e.getFullTileRange(l);c&&(o=c.getHeight()-1)}return ld(n,l,t[1],t[2],o)})}function cd(n,e){let t=n.length,i=new Array(t);for(let s=0;s<t;++s)i[s]=Sy(n[s],e);return Ay(i)}function Ay(n){return n.length===1?n[0]:(function(e,t,i){if(!e)return;let s=sf(e),o=an(s,n.length);return n[o](e,t,i)})}var hd=S(()=>{ke();Li();Qa()});var pn,Lr=S(()=>{pn={PROPERTYCHANGE:"propertychange"}});function Ly(n){if(Array.isArray(n))for(let e=0,t=n.length;e<t;++e)le(n[e]);else le(n)}var Bi,no,Ja=S(()=>{wt();Te();Ir();Bi=class extends Ln{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(V.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){let i=e.length,s=new Array(i);for(let o=0;o<i;++o)s[o]=J(this,e[o],t);return s}return J(this,e,t)}onceInternal(e,t){let i;if(Array.isArray(e)){let s=e.length;i=new Array(s);for(let o=0;o<s;++o)i[o]=Pi(this,e[o],t)}else i=Pi(this,e,t);return t.ol_key=i,i}unInternal(e,t){let i=t.ol_key;if(i)Ly(i);else if(Array.isArray(e))for(let s=0,o=e.length;s<o;++s)this.removeEventListener(e[s],t);else this.removeEventListener(e,t)}};Bi.prototype.on;Bi.prototype.once;Bi.prototype.un;no=Bi});var io,el,je,qt=S(()=>{Lr();Ja();un();$n();ze();io=class extends He{constructor(e,t,i){super(e),this.key=t,this.oldValue=i}},el=class extends no{constructor(e){super(),this.on,this.once,this.un,me(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let i;i=`change:${e}`,this.hasListener(i)&&this.dispatchEvent(new io(i,e,t)),i=pn.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new io(i,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,i){let s=this.values_||(this.values_={});if(i)s[e]=t;else{let o=s[e];s[e]=t,o!==t&&this.notify(e,o)}}setProperties(e,t){for(let i in e)this.set(i,e[i],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){let i=this.values_[e];delete this.values_[e],zs(this.values_)&&(this.values_=null),t||this.notify(e,i)}}},je=el});function fd(n){return n?typeof n=="function"?n:(Array.isArray(n)||(n=[n]),e=>n):null}var tl,dd,gd=S(()=>{qt();Dt();tl=class extends je{constructor(e){super(),this.projection=$e(e.projection),this.attributions_=fd(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible??!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;let t=this;this.viewPromise_=new Promise(function(i,s){t.viewResolver=i,t.viewRejector=s})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=fd(e),this.changed()}setState(e){this.state_=e,this.changed()}};dd=tl});var nl,ro,pd,md=S(()=>{un();Mt();Li();$a();ze();gd();nl=class extends dd{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;let t=[256,256];this.tileGrid&&ve(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),t),this.tmpSize=[0,0],this.key_=e.key||me(this),this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getResolutions(e){let t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,i,s,o,l){return ne()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:to(e)}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,i){let s=this.getTileGridForProjection(i),o=this.getTilePixelRatio(t),l=ve(s.getTileSize(e),this.tmpSize);return o==1?l:qh(l,o,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){let i=t!==void 0?t:this.getProjection(),s=t!==void 0?this.getTileGridForProjection(i):this.tileGrid||this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(e=od(s,e,i)),of(e,s)?e:null}clear(){}refresh(){this.clear(),super.refresh()}},ro=class extends He{constructor(e,t){super(e),this.tile=t}},pd=nl});var so,_d=S(()=>{so={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"}});var il,yd,xd=S(()=>{Kt();hd();Qa();ze();md();_d();il=class n extends pd{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===n.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){let t=e.target,i=me(t),s=t.getState(),o;s==X.LOADING?(this.tileLoadingKeys_[i]=!0,o=so.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],o=s==X.ERROR?so.TILELOADERROR:s==X.LOADED?so.TILELOADEND:void 0),o!=null&&this.dispatchEvent(new ro(o,t))}setTileLoadFunction(e){this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){let t=ud(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;let t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(cd(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,i){}},yd=il});function My(n,e){if(Ye){let t=n.getCrossOrigin(),i="same-origin",s="same-origin";t==="anonymous"||t===""?(i="cors",s="omit"):t==="use-credentials"&&(i="cors",s="include");let o={mode:i,credentials:s,referrerPolicy:n.getReferrerPolicy()};fetch(e,o).then(l=>{if(!l.ok)throw new Error(`HTTP ${l.status}`);return l.blob()}).then(l=>createImageBitmap(l)).then(l=>{let c=n.getImage();c.width=l.width,c.height=l.height,c.getContext("2d").drawImage(l,0,0),l.close?.(),c.dispatchEvent(new Event("load"))}).catch(()=>{n.getImage().dispatchEvent(new Event("error"))});return}n.getImage().src=e}var rl,Ed,vd=S(()=>{Xs();Kt();Te();Vt();Dt();Za();Li();$a();ze();xd();rl=class extends yd{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:My,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.referrerPolicy=e.referrerPolicy,this.tileClass=e.tileClass!==void 0?e.tileClass:Fi,this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(e){return this.getProjection()&&e&&!Vi(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getTileGridForProjection(e){let t=this.getProjection();if(this.tileGrid&&(!t||Vi(t,e)))return this.tileGrid;let i=me(e);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=to(e)),this.tileGridForProjection[i]}createTile_(e,t,i,s,o,l){let c=[e,t,i],f=this.getTileCoordForTileUrlFunction(c,o),m=f?this.tileUrlFunction(f,s,o):void 0,_=new this.tileClass(c,m!==void 0?X.IDLE:X.EMPTY,m!==void 0?m:"",{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return _.key=l,_.addEventListener(V.CHANGE,this.handleTileChange.bind(this)),_}getTile(e,t,i,s,o,l){let c=this.getProjection();if(!c||!o||Vi(c,o))return this.getTileInternal(e,t,i,s,c||o);let f=[e,t,i],m=this.getKey(),_=this.getTileGridForProjection(c),x=this.getTileGridForProjection(o),C=this.getTileCoordForTileUrlFunction(f,o),T=new eo(c,_,o,x,f,C,this.getTilePixelRatio(s),this.getGutter(),(R,M,P,O)=>this.getTileInternal(R,M,P,O,c,l),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return T.key=m,T}getTileInternal(e,t,i,s,o,l){let c=this.getKey(),f=Ai(this,c,e,t,i);if(l&&l.containsKey(f))return l.get(f);let m=this.createTile_(e,t,i,s,o,c);return l?.set(f,m),m}setRenderReprojectionEdges(e){this.renderReprojectionEdges_!=e&&(this.renderReprojectionEdges_=e,this.changed())}setTileGridForProjection(e,t){let i=$e(e);if(i){let s=me(i);s in this.tileGridForProjection||(this.tileGridForProjection[s]=t)}}};Ed=rl});var oo,Cd=S(()=>{Xs();Kt();Ze();oo=class extends Fi{constructor(e,t,i,s,o,l,c){super(t,i,s,o,l,c),this.zoomifyImage_=null,this.tileSize_=e}getImage(){if(this.zoomifyImage_)return this.zoomifyImage_;let e=super.getImage();if(this.state==X.LOADED){let t=this.tileSize_;if(e.width==t[0]&&e.height==t[1])return this.zoomifyImage_=e,e;let i=Ce(t[0],t[1]);return i.drawImage(e,0,0),this.zoomifyImage_=i.canvas,i.canvas}return e}}});function Mr(n){return n.toLocaleString("en",{maximumFractionDigits:10})}var sl,ol,wd=S(()=>{lt();Ee();ga();Mt();Ea();vd();Cd();sl=class extends Ed{constructor(e){let t=e||{},i=t.url||"";i=i+(i.lastIndexOf("/")===i.length-1||i===""?"":"/");let s=t.version||Ie.VERSION2,o=t.sizes||[],l=t.size;ee(l!=null&&Array.isArray(l)&&l.length==2&&!isNaN(l[0])&&l[0]>0&&!isNaN(l[1])&&l[1]>0,"Missing or invalid `size`");let c=l[0],f=l[1],m=t.tileSize,_=t.tilePixelRatio||1,x=t.format||"jpg",C=t.quality||(t.version==Ie.VERSION1?"native":"default"),T=t.resolutions||[],R=t.supports||[],M=t.extent||[0,-f,c,0],P=o!=null&&Array.isArray(o)&&o.length>0,O=m!==void 0&&(typeof m=="number"&&Number.isInteger(m)&&m>0||Array.isArray(m)&&m.length>0),z=R!=null&&Array.isArray(R)&&(R.includes("regionByPx")||R.includes("regionByPct"))&&(R.includes("sizeByWh")||R.includes("sizeByH")||R.includes("sizeByW")||R.includes("sizeByPct")),j,N,F;if(T.sort(function(k,U){return U-k}),O||z)if(m!=null&&(typeof m=="number"&&Number.isInteger(m)&&m>0?(j=m,N=m):Array.isArray(m)&&m.length>0&&((m.length==1||m[1]==null&&Number.isInteger(m[0]))&&(j=m[0],N=m[0]),m.length==2&&(Number.isInteger(m[0])&&Number.isInteger(m[1])?(j=m[0],N=m[1]):m[0]==null&&Number.isInteger(m[1])&&(j=m[1],N=m[1])))),(j===void 0||N===void 0)&&(j=256,N=256),T.length==0){F=Math.max(Math.ceil(Math.log(c/j)/Math.LN2),Math.ceil(Math.log(f/N)/Math.LN2));for(let k=F;k>=0;k--)T.push(Math.pow(2,k))}else{let k=Math.max(...T);F=Math.round(Math.log(k)/Math.LN2)}else if(j=c,N=f,T=[],P){o.sort(function(U,se){return U[0]-se[0]}),F=-1;let k=[];for(let U=0;U<o.length;U++){let se=c/o[U][0];if(T.length>0&&T[T.length-1]==se){k.push(U);continue}T.push(se),F++}if(k.length>0)for(let U=0;U<k.length;U++)o.splice(k[U]-U,1)}else T.push(1),o.push([c,f]),F=0;let d=new ks({tileSize:[j,N],extent:M,origin:ut(M),resolutions:T}),K=function(k,U,se){let Y,ie,pe=k[0];if(pe>F)return;let Ge=k[1],Xe=k[2],Q=T[pe];if(!(Ge===void 0||Xe===void 0||Q===void 0||Ge<0||Math.ceil(c/Q/j)<=Ge||Xe<0||Math.ceil(f/Q/N)<=Xe)){if(z||O){let oe=Ge*j*Q,ce=Xe*N*Q,We=j*Q,Le=N*Q,De=j,be=N;if(oe+We>c&&(We=c-oe),ce+Le>f&&(Le=f-ce),oe+j*Q>c&&(De=Math.floor((c-oe+Q-1)/Q)),ce+N*Q>f&&(be=Math.floor((f-ce+Q-1)/Q)),oe==0&&We==c&&ce==0&&Le==f)Y="full";else if(!z||R.includes("regionByPx"))Y=oe+","+ce+","+We+","+Le;else if(R.includes("regionByPct")){let jt=Mr(oe/c*100),xt=Mr(ce/f*100),rt=Mr(We/c*100),we=Mr(Le/f*100);Y="pct:"+jt+","+xt+","+rt+","+we}s==Ie.VERSION3&&(!z||R.includes("sizeByWh"))?ie=De+","+be:!z||R.includes("sizeByW")?ie=De+",":R.includes("sizeByH")?ie=","+be:R.includes("sizeByWh")?ie=De+","+be:R.includes("sizeByPct")&&(ie="pct:"+Mr(100/Q))}else if(Y="full",P){let oe=o[pe][0],ce=o[pe][1];s==Ie.VERSION3?oe==c&&ce==f?ie="max":ie=oe+","+ce:oe==c?ie="full":ie=oe+","}else ie=s==Ie.VERSION3?"max":"full";return i+Y+"/"+ie+"/0/"+C+"."+x}},W=oo.bind(null,ve(m||256).map(function(k){return k*_}));super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:W,tileGrid:d,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:K,transition:t.transition}),this.zDirection=t.zDirection}},ol=sl});var et,ao=S(()=>{et={ADD:"add",REMOVE:"remove"}});var Td,qi,al,tt,Pr=S(()=>{ao();qt();un();Td={LENGTH:"length"},qi=class extends He{constructor(e,t,i){super(e),this.element=t,this.index=i}},al=class extends je{constructor(e,t){if(super(),this.on,this.once,this.un,t=t||{},this.unique_=!!t.unique,this.array_=e??[],this.unique_)for(let i=1,s=this.array_.length;i<s;++i)this.assertUnique_(this.array_[i],i);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,i=e.length;t<i;++t)this.push(e[t]);return this}forEach(e){let t=this.array_;for(let i=0,s=t.length;i<s;++i)e(t[i],i,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Td.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new qi(et.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){let t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){let t=this.array_;for(let i=0,s=t.length;i<s;++i)if(t[i]===e)return this.removeAt(i)}removeAt(e){if(e<0||e>=this.getLength())return;let t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new qi(et.REMOVE,t,e)),t}setAt(e,t){let i=this.getLength();if(e>=i){this.insertAt(e,t);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t,e);let s=this.array_[e];this.array_[e]=t,this.dispatchEvent(new qi(et.REMOVE,s,e)),this.dispatchEvent(new qi(et.ADD,t,e))}updateLength_(){this.set(Td.LENGTH,this.array_.length)}assertUnique_(e,t){let i=this.array_;for(let s=0,o=i.length;s<o;++s)if(i[s]===e&&s!==t)throw new Error("Duplicate item added to a unique collection")}},tt=al});var ll,Dn,ul=S(()=>{un();ll=class extends He{constructor(e,t,i){super(e),this.map=t,this.frameState=i!==void 0?i:null}},Dn=ll});var cl,Ht,hl=S(()=>{ul();cl=class extends Dn{constructor(e,t,i,s,o,l){super(e,t,o),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=s!==void 0?s:!1,this.activePointers=l}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}},Ht=cl});var _e,Or=S(()=>{Te();_e={SINGLECLICK:"singleclick",CLICK:V.CLICK,DBLCLICK:V.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}});var Dr,fl=S(()=>{Dr={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}});var dl,Rd,Id=S(()=>{hl();Or();wt();Te();Ir();Vt();fl();dl=class extends Ln{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;let i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=J(i,Dr.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=J(i,Dr.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(V.TOUCHMOVE,this.boundHandleTouchMove_,js?{passive:!1}:!1)}emulateClick_(e){let t=new Ht(_e.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new Ht(_e.DBLCLICK,this.map_,e),this.dispatchEvent(t)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;let i=new Ht(_e.SINGLECLICK,this.map_,e);this.dispatchEvent(i)},250)}updateActivePointers_(e){let t=e,i=t.pointerId;if(t.type==_e.POINTERUP||t.type==_e.POINTERCANCEL){delete this.trackedTouches_[i];for(let s in this.trackedTouches_)if(this.trackedTouches_[s].target!==t.target){delete this.trackedTouches_[s];break}}else(t.type==_e.POINTERDOWN||t.type==_e.POINTERMOVE)&&(this.trackedTouches_[i]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);let t=new Ht(_e.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(le),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);let t=new Ht(_e.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){let i=this.map_.getOwnerDocument();this.dragListenerKeys_.push(J(i,_e.POINTERMOVE,this.handlePointerMove_,this),J(i,_e.POINTERUP,this.handlePointerUp_,this),J(this.element_,_e.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==i&&this.dragListenerKeys_.push(J(this.element_.getRootNode(),_e.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;let t=new Ht(_e.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;let t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Ht(_e.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){let t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(le(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(V.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(le(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(le),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}},Rd=dl});var Yt,gl=S(()=>{Yt={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"}});var Ae,pl=S(()=>{Ae={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"}});var Nr,ml,bd,Sd=S(()=>{lt();$n();Nr=1/0,ml=class{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Sn(this.queuedElements_)}dequeue(){let e=this.elements_,t=this.priorities_,i=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));let s=this.keyFunction_(i);return delete this.queuedElements_[s],i}enqueue(e){ee(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");let t=this.priorityFunction_(e);return t!=Nr?(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){let t=this.elements_,i=this.priorities_,s=t.length,o=t[e],l=i[e],c=e;for(;e<s>>1;){let f=this.getLeftChildIndex_(e),m=this.getRightChildIndex_(e),_=m<s&&i[m]<i[f]?m:f;t[e]=t[_],i[e]=i[_],e=_}t[e]=o,i[e]=l,this.siftDown_(c,e)}siftDown_(e,t){let i=this.elements_,s=this.priorities_,o=i[t],l=s[t];for(;t>e;){let c=this.getParentIndex_(t);if(s[c]>l)i[t]=i[c],s[t]=s[c],t=c;else break}i[t]=o,s[t]=l}reprioritize(){let e=this.priorityFunction_,t=this.elements_,i=this.priorities_,s=0,o=t.length,l,c,f;for(c=0;c<o;++c)l=t[c],f=e(l),f==Nr?delete this.queuedElements_[this.keyFunction_(l)]:(i[s]=f,t[s++]=l);t.length=s,i.length=s,this.heapify_()}},bd=ml});function Ld(n,e,t,i,s){if(!n||!(t in n.wantedTiles))return Nr;if(!n.wantedTiles[t][e.getKey()])return Nr;let o=n.viewState.center,l=i[0]-o[0],c=i[1]-o[1];return 65536*Math.log(s)+Math.sqrt(l*l+c*c)/s}var _l,Ad,Md=S(()=>{Kt();Te();Sd();_l=class extends bd{constructor(e,t){super(i=>e.apply(null,i),i=>i[0].getKey()),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){let t=super.enqueue(e);return t&&e[0].addEventListener(V.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){let t=e.target,i=t.getState();if(i===X.LOADED||i===X.ERROR||i===X.EMPTY){i!==X.ERROR&&t.removeEventListener(V.CHANGE,this.boundHandleTileChange_);let s=t.getKey();s in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[s],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let i=0;for(;this.tilesLoading_<e&&i<t&&this.getCount()>0;){let s=this.dequeue()[0],o=s.getKey();s.getState()===X.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++i,s.load())}}},Ad=_l});var ct,yl=S(()=>{ct={ANIMATING:0,INTERACTING:1}});var It,Pd=S(()=>{It={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"}});function xl(n,e,t){return(function(i,s,o,l,c){if(!i)return;if(!s&&!e)return i;let f=e?0:o[0]*s,m=e?0:o[1]*s,_=c?c[0]:0,x=c?c[1]:0,C=n[0]+f/2+_,T=n[2]-f/2+_,R=n[1]+m/2+x,M=n[3]-m/2+x;C>T&&(C=(T+C)/2,T=C),R>M&&(R=(M+R)/2,M=R);let P=ge(i[0],C,T),O=ge(i[1],R,M);if(l&&t&&s){let z=30*s;P+=-z*Math.log(1+Math.max(0,C-i[0])/z)+z*Math.log(1+Math.max(0,i[0]-T)/z),O+=-z*Math.log(1+Math.max(0,R-i[1])/z)+z*Math.log(1+Math.max(0,i[1]-M)/z)}return[P,O]})}function Od(n){return n}var Dd=S(()=>{ke()});function El(n,e,t,i,s,o,l){o=o||[],l=l||2;let c=0;for(let f=e;f<t;f+=i){let m=n[f],_=n[f+1];o[c++]=s[0]*m+s[2]*_+s[4],o[c++]=s[1]*m+s[3]*_+s[5];for(let x=2;x<l;x++)o[c++]=n[f+x]}return o&&o.length!=c&&(o.length=c),o}function Nd(n,e,t,i,s,o,l){l=l||[];let c=Math.cos(s),f=Math.sin(s),m=o[0],_=o[1],x=0;for(let C=e;C<t;C+=i){let T=n[C]-m,R=n[C+1]-_;l[x++]=m+T*c-R*f,l[x++]=_+T*f+R*c;for(let M=C+2;M<C+i;++M)l[x++]=n[M]}return l&&l.length!=x&&(l.length=x),l}function Fd(n,e,t,i,s,o,l,c){c=c||[];let f=l[0],m=l[1],_=0;for(let x=e;x<t;x+=i){let C=n[x]-f,T=n[x+1]-m;c[_++]=f+s*C,c[_++]=m+o*T;for(let R=x+2;R<x+i;++R)c[_++]=n[R]}return c&&c.length!=_&&(c.length=_),c}function kd(n,e,t,i,s,o,l){l=l||[];let c=0;for(let f=e;f<t;f+=i){l[c++]=n[f]+s,l[c++]=n[f+1]+o;for(let m=f+2;m<f+i;++m)l[c++]=n[m]}return l&&l.length!=c&&(l.length=c),l}var vl=S(()=>{});var zd,Py,Cl,jd,Ud=S(()=>{qt();Ee();pt();Dt();On();ze();vl();zd=dn(),Py=[NaN,NaN],Cl=class extends je{constructor(){super(),this.extent_=vt(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=af((e,t,i)=>{if(!i)return this.getSimplifiedGeometry(t);let s=this.clone();return s.applyTransform(i),s.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return ne()}closestPointXY(e,t,i,s){return ne()}containsXY(e,t){return this.closestPointXY(e,t,Py,Number.MIN_VALUE)===0}getClosestPoint(e,t){return t=t||[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return ne()}getExtent(e){if(this.extentRevision_!=this.getRevision()){let t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&qn(t),this.extentRevision_=this.getRevision()}return Xh(this.extent_,e)}rotate(e,t){ne()}scale(e,t,i){ne()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return ne()}getType(){return ne()}applyTransform(e){ne()}intersectsExtent(e){return ne()}translate(e,t){ne()}transform(e,t){let i=$e(e),s=i.getUnits()=="tile-pixels"?function(o,l,c){let f=i.getExtent(),m=i.getWorldExtent(),_=Oe(m)/Oe(f);gn(zd,m[0],m[3],_,-_,0,0,0);let x=El(o,0,o.length,c,zd,l),C=ii(i,t);return C?C(x,x,c):x}:ii(i,t);return this.applyTransform(s),this}},jd=Cl});function Oy(n){let e;return n==2?e="XY":n==3?e="XYZ":n==4&&(e="XYZM"),e}function Gd(n){let e;return n=="XY"?e=2:n=="XYZ"||n=="XYM"?e=3:n=="XYZM"&&(e=4),e}var wl,Hi,lo=S(()=>{Ee();ze();Ud();vl();wl=class extends jd{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(e){return jh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return ne()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;let t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=Gd(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){ne()}setLayout(e,t,i){let s;if(e)s=Gd(e);else{for(let o=0;o<i;++o){if(t.length===0){this.layout="XY",this.stride=2;return}t=t[0]}s=t.length,e=Oy(s)}this.layout=e,this.stride=s}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.layout.startsWith("XYZ")?3:2,this.stride),this.changed())}rotate(e,t){let i=this.getFlatCoordinates();if(i){let s=this.getStride();Nd(i,0,i.length,s,e,t,i),this.changed()}}scale(e,t,i){t===void 0&&(t=e),i||(i=Xt(this.getExtent()));let s=this.getFlatCoordinates();if(s){let o=this.getStride();Fd(s,0,s.length,o,e,t,i,s),this.changed()}}translate(e,t){let i=this.getFlatCoordinates();if(i){let s=this.getStride();kd(i,0,i.length,s,e,t,i),this.changed()}}};Hi=wl});function Tl(n,e,t,i){let s=0,o=n[t-i],l=n[t-i+1],c=0,f=0;for(;e<t;e+=i){let m=n[e]-o,_=n[e+1]-l;s+=f*m-c*_,c=m,f=_}return s/2}function Xd(n,e,t,i){let s=0;for(let o=0,l=t.length;o<l;++o){let c=t[o];s+=Tl(n,e,c,i),e=c}return s}var Rl=S(()=>{});function Wd(n,e,t,i,s,o,l){let c=n[e],f=n[e+1],m=n[t]-c,_=n[t+1]-f,x;if(m===0&&_===0)x=e;else{let C=((s-c)*m+(o-f)*_)/(m*m+_*_);if(C>1)x=t;else if(C>0){for(let T=0;T<i;++T)l[T]=rf(n[e+T],n[t+T],C);l.length=i;return}else x=e}for(let C=0;C<i;++C)l[C]=n[x+C];l.length=i}function Il(n,e,t,i,s){let o=n[e],l=n[e+1];for(e+=i;e<t;e+=i){let c=n[e],f=n[e+1],m=on(o,l,c,f);m>s&&(s=m),o=c,l=f}return s}function Vd(n,e,t,i,s){for(let o=0,l=t.length;o<l;++o){let c=t[o];s=Il(n,e,c,i,s),e=c}return s}function bl(n,e,t,i,s,o,l,c,f,m,_){if(e==t)return m;let x,C;if(s===0){if(C=on(l,c,n[e],n[e+1]),C<m){for(x=0;x<i;++x)f[x]=n[e+x];return f.length=i,C}return m}_=_||[NaN,NaN];let T=e+i;for(;T<t;)if(Wd(n,T-i,T,i,l,c,_),C=on(l,c,_[0],_[1]),C<m){for(m=C,x=0;x<i;++x)f[x]=_[x];f.length=i,T+=i}else T+=i*Math.max((Math.sqrt(C)-Math.sqrt(m))/s|0,1);if(o&&(Wd(n,t-i,e,i,l,c,_),C=on(l,c,_[0],_[1]),C<m)){for(m=C,x=0;x<i;++x)f[x]=_[x];f.length=i}return m}function Kd(n,e,t,i,s,o,l,c,f,m,_){_=_||[NaN,NaN];for(let x=0,C=t.length;x<C;++x){let T=t[x];m=bl(n,e,T,i,s,o,l,c,f,m,_),e=T}return m}var Sl=S(()=>{ke()});function Bd(n,e,t,i){for(let s=0,o=t.length;s<o;++s)n[e++]=t[s];return e}function Al(n,e,t,i){for(let s=0,o=t.length;s<o;++s){let l=t[s];for(let c=0;c<i;++c)n[e++]=l[c]}return e}function qd(n,e,t,i,s){s=s||[];let o=0;for(let l=0,c=t.length;l<c;++l){let f=Al(n,e,t[l],i);s[o++]=f,e=f}return s.length=o,s}var uo=S(()=>{});function Ll(n,e,t,i,s){s=s!==void 0?s:[];let o=0;for(let l=e;l<t;l+=i)s[o++]=n.slice(l,l+i);return s.length=o,s}function Hd(n,e,t,i,s){s=s!==void 0?s:[];let o=0;for(let l=0,c=t.length;l<c;++l){let f=t[l];s[o++]=Ll(n,e,f,i,s[o]),e=f}return s.length=o,s}var Ml=S(()=>{});function Yd(n,e,t,i,s,o,l){let c=(t-e)/i;if(c<3){for(;e<t;e+=i)o[l++]=n[e],o[l++]=n[e+1];return l}let f=new Array(c);f[0]=1,f[c-1]=1;let m=[e,t-i],_=0;for(;m.length>0;){let x=m.pop(),C=m.pop(),T=0,R=n[C],M=n[C+1],P=n[x],O=n[x+1];for(let z=C+i;z<x;z+=i){let j=n[z],N=n[z+1],F=tf(j,N,R,M,P,O);F>T&&(_=z,T=F)}T>s&&(f[(_-e)/i]=1,C+i<_&&m.push(C,_),_+i<x&&m.push(_,x))}for(let x=0;x<c;++x)f[x]&&(o[l++]=n[e+x*i],o[l++]=n[e+x*i+1]);return l}function Yi(n,e){return e*Math.round(n/e)}function Dy(n,e,t,i,s,o,l){if(e==t)return l;let c=Yi(n[e],s),f=Yi(n[e+1],s);e+=i,o[l++]=c,o[l++]=f;let m,_;do if(m=Yi(n[e],s),_=Yi(n[e+1],s),e+=i,e==t)return o[l++]=m,o[l++]=_,l;while(m==c&&_==f);for(;e<t;){let x=Yi(n[e],s),C=Yi(n[e+1],s);if(e+=i,x==m&&C==_)continue;let T=m-c,R=_-f,M=x-c,P=C-f;if(T*P==R*M&&(T<0&&M<T||T==M||T>0&&M>T)&&(R<0&&P<R||R==P||R>0&&P>R)){m=x,_=C;continue}o[l++]=m,o[l++]=_,c=m,f=_,m=x,_=C}return o[l++]=m,o[l++]=_,l}function Zd(n,e,t,i,s,o,l,c){for(let f=0,m=t.length;f<m;++f){let _=t[f];l=Dy(n,e,_,i,s,o,l),c.push(l),e=_}return l}var Pl=S(()=>{ke()});var Ol,Dl,$d=S(()=>{Ee();lo();Rl();Sl();uo();Ml();Pl();Ol=class n extends Hi{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new n(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,i,s){return s<Is(this.getExtent(),e,t)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Il(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),bl(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,i,s))}getArea(){return Tl(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return Ll(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){let t=[];return t.length=Yd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new n(t,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Al(this.flatCoordinates,0,e,this.stride),this.changed()}},Dl=Ol});var Nl,Qd,Jd=S(()=>{Ee();ke();lo();uo();Nl=class n extends Hi{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){let e=new n(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,i,s){let o=this.flatCoordinates,l=on(e,t,o[0],o[1]);if(l<s){let c=this.stride;for(let f=0;f<c;++f)i[f]=o[f];return i.length=c,l}return s}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return zh(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return ua(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Bd(this.flatCoordinates,0,e,this.stride),this.changed()}},Qd=Nl});function eg(n,e,t,i,s,o,l){let c,f,m,_,x,C,T,R=s[o+1],M=[];for(let z=0,j=t.length;z<j;++z){let N=t[z];for(_=n[N-i],C=n[N-i+1],c=e;c<N;c+=i)x=n[c],T=n[c+1],(R<=C&&T<=R||C<=R&&R<=T)&&(m=(R-C)/(T-C)*(x-_)+_,M.push(m)),_=x,C=T}let P=NaN,O=-1/0;for(M.sort(Zn),_=M[0],c=1,f=M.length;c<f;++c){x=M[c];let z=Math.abs(x-_);z>O&&(m=(_+x)/2,Ms(n,e,t,i,m,R)&&(P=m,O=z)),_=x}return isNaN(P)&&(P=s[o]),l?(l.push(P,R,O),l):[P,R,O]}var tg=S(()=>{Ct();Ps()});function ng(n,e,t,i){for(;e<t-i;){for(let s=0;s<i;++s){let o=n[e+s];n[e+s]=n[t-i+s],n[t-i+s]=o}e+=i,t-=i}}var ig=S(()=>{});function rg(n,e,t,i){let s=0,o=n[t-i],l=n[t-i+1];for(;e<t;e+=i){let c=n[e],f=n[e+1];s+=(c-o)*(f+l),o=c,l=f}return s===0?void 0:s>0}function sg(n,e,t,i,s){s=s!==void 0?s:!1;for(let o=0,l=t.length;o<l;++o){let c=t[o],f=rg(n,e,c,i);if(o===0){if(s&&f||!s&&!f)return!1}else if(s&&!f||!s&&f)return!1;e=c}return!0}function Fl(n,e,t,i,s){s=s!==void 0?s:!1;for(let o=0,l=t.length;o<l;++o){let c=t[o],f=rg(n,e,c,i);(o===0?s&&f||!s&&!f:s&&!f||!s&&f)&&ng(n,e,c,i),e=c}return e}var og=S(()=>{ig()});function kl(n){if(wn(n))throw new Error("Cannot create polygon from empty extent");let e=n[0],t=n[1],i=n[2],s=n[3],o=[e,t,e,s,i,s,i,t,e,t];return new co(o,"XY",[o.length])}var co,ag,zl=S(()=>{Ct();Ee();$d();Jd();lo();Rl();Sl();Ps();uo();Ml();tg();ya();og();Pl();co=class n extends Hi{constructor(e,t,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&i?(this.setFlatCoordinates(t,e),this.ends_=i):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?Hh(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let e=new n(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,i,s){return s<Is(this.getExtent(),e,t)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Vd(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Kd(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,i,s))}containsXY(e,t){return Ms(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return Xd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),Fl(t,0,this.ends_,this.stride,e)):t=this.flatCoordinates,Hd(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){let e=Xt(this.getExtent());this.flatInteriorPoint_=eg(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new Qd(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new Dl(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){let e=this.layout,t=this.flatCoordinates,i=this.ends_,s=[],o=0;for(let l=0,c=i.length;l<c;++l){let f=i[l],m=new Dl(t.slice(o,f),e);s.push(m),o=f}return s}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let e=this.flatCoordinates;sg(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Fl(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){let t=[],i=[];return t.length=Zd(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),t,0,i),new n(t,"XY",i)}getType(){return"Polygon"}intersectsExtent(e){return ef(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);let i=qd(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}},ag=co});function jl(n,e,t,i){let s=ae(e)/t[0],o=Oe(e)/t[1];return i?Math.min(n,Math.max(s,o)):Math.min(n,Math.min(s,o))}function Ul(n,e,t){let i=Math.min(n,e),s=50;return i*=Math.log(1+s*Math.max(0,n/e-1))/s+1,t&&(i=Math.max(i,t),i/=Math.log(1+s*Math.max(0,t/n-1))/s+1),ge(i,t/2,e*2)}function lg(n,e,t,i){return e=e!==void 0?e:!0,(function(s,o,l,c){if(s!==void 0){let f=n[0],m=n[n.length-1],_=t?jl(f,t,l,i):f;if(c)return e?Ul(s,_,m):ge(s,m,_);let x=Math.min(_,s),C=Math.floor(bi(n,x,o));return n[C]>_&&C<n.length-1?n[C+1]:n[C]}})}function ug(n,e,t,i,s,o){return i=i!==void 0?i:!0,t=t!==void 0?t:0,(function(l,c,f,m){if(l!==void 0){let _=s?jl(e,s,f,o):e;if(m)return i?Ul(l,_,t):ge(l,t,_);let x=1e-9,C=Math.ceil(Math.log(e/_)/Math.log(n)-x),T=-c*(.5-x)+.5,R=Math.min(_,l),M=Math.floor(Math.log(e/R)/Math.log(n)+T),P=Math.max(C,M),O=e/Math.pow(n,P);return ge(O,t,_)}})}function Gl(n,e,t,i,s){return t=t!==void 0?t:!0,(function(o,l,c,f){if(o!==void 0){let m=i?jl(n,i,c,s):n;return!t||!f?ge(o,e,m):Ul(o,m,e)}})}var cg=S(()=>{Ct();Ee();ke()});function Zi(n){if(n!==void 0)return 0}function Xl(n){if(n!==void 0)return n}function hg(n){let e=2*Math.PI/n;return(function(t,i){if(i)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t})}function fg(n){let e=n===void 0?Pt(5):n;return(function(t,i){return i||t===void 0?t:Math.abs(t)<=e?0:t})}var ho=S(()=>{ke()});function fo(n,e){setTimeout(function(){n(e)},0)}function Ny(n){if(n.extent!==void 0){let t=n.smoothExtentConstraint!==void 0?n.smoothExtentConstraint:!0;return xl(n.extent,n.constrainOnlyCenter,t)}let e=$s(n.projection,"EPSG:3857");if(n.multiWorld!==!0&&e.isGlobal()){let t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,xl(t,!1,!1)}return Od}function Fy(n){let e,t,i,l=n.minZoom!==void 0?n.minZoom:Wl,c=n.maxZoom!==void 0?n.maxZoom:28,f=n.zoomFactor!==void 0?n.zoomFactor:2,m=n.multiWorld!==void 0?n.multiWorld:!1,_=n.smoothResolutionConstraint!==void 0?n.smoothResolutionConstraint:!0,x=n.showFullExtent!==void 0?n.showFullExtent:!1,C=$s(n.projection,"EPSG:3857"),T=C.getExtent(),R=n.constrainOnlyCenter,M=n.extent;if(!m&&!M&&C.isGlobal()&&(R=!1,M=T),n.resolutions!==void 0){let P=n.resolutions;t=P[l],i=P[c]!==void 0?P[c]:P[P.length-1],n.constrainResolution?e=lg(P,_,!R&&M,x):e=Gl(t,i,_,!R&&M,x)}else{let O=(T?Math.max(ae(T),Oe(T)):360*cn.degrees/C.getMetersPerUnit())/256/Math.pow(2,Wl),z=O/Math.pow(2,28-Wl);t=n.maxResolution,t!==void 0?l=0:t=O/Math.pow(f,l),i=n.minResolution,i===void 0&&(n.maxZoom!==void 0?n.maxResolution!==void 0?i=t/Math.pow(f,c):i=O/Math.pow(f,c):i=z),c=l+Math.floor(Math.log(t/i)/Math.log(f)),i=t/Math.pow(f,c-l),n.constrainResolution?e=ug(f,t,i,_,!R&&M,x):e=Gl(t,i,_,!R&&M,x)}return{constraint:e,maxResolution:t,minResolution:i,minZoom:l,zoomFactor:f}}function ky(n){if(n.enableRotation!==void 0?n.enableRotation:!0){let t=n.constrainRotation;return t===void 0||t===!0?fg():t===!1?Xl:typeof t=="number"?hg(t):Xl}return Zi}function zy(n){return!(n.sourceCenter&&n.targetCenter&&!ti(n.sourceCenter,n.targetCenter)||n.sourceResolution!==n.targetResolution||n.sourceRotation!==n.targetRotation)}function Vl(n,e,t,i,s){let o=Math.cos(-s),l=Math.sin(-s),c=n[0]*o-n[1]*l,f=n[1]*o+n[0]*l;c+=(e[0]/2-t[0])*i,f+=(t[1]-e[1]/2)*i,l=-l;let m=c*o-f*l,_=f*o+c*l;return[m,_]}var Wl,Kl,ht,go=S(()=>{qt();yl();Pd();Ct();lt();Dd();zi();Mn();Ee();pt();zl();ke();Dt();cg();ho();Wl=0,Kl=class extends je{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=$s(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&Kf(),e.center&&(e.center=mt(e.center,this.projection_)),e.extent&&(e.extent=Bt(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){let t=Object.assign({},e);for(let c in It)delete t[c];this.setProperties(t,!0);let i=Fy(e);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=i.minZoom;let s=Ny(e),o=i.constraint,l=ky(e);this.constraints_={center:s,resolution:o,rotation:l},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;let i=this.getCenterInternal();if(i){let s=e||[0,0,0,0];t=t||[0,0,0,0];let o=this.getResolution(),l=o/2*(s[3]-t[3]+t[1]-s[1]),c=o/2*(s[0]-t[0]+t[2]-s[2]);this.setCenterInternal([i[0]+l,i[1]-c])}}getUpdatedOptions_(e){let t=this.getProperties();return t.resolution!==void 0?t.resolution=this.getResolution():t.zoom=this.getZoom(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);let t=new Array(arguments.length);for(let i=0;i<t.length;++i){let s=arguments[i];s.center&&(s=Object.assign({},s),s.center=mt(s.center,this.getProjection())),s.anchor&&(s=Object.assign({},s),s.anchor=mt(s.anchor,this.getProjection())),t[i]=s}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,i;t>1&&typeof arguments[t-1]=="function"&&(i=arguments[t-1],--t);let s=0;for(;s<t&&!this.isDef();++s){let _=arguments[s];_.center&&this.setCenterInternal(_.center),_.zoom!==void 0?this.setZoom(_.zoom):_.resolution&&this.setResolution(_.resolution),_.rotation!==void 0&&this.setRotation(_.rotation)}if(s===t){i&&fo(i,!0);return}let o=Date.now(),l=this.targetCenter_.slice(),c=this.targetResolution_,f=this.targetRotation_,m=[];for(;s<t;++s){let _=arguments[s],x={start:o,complete:!1,anchor:_.anchor,duration:_.duration!==void 0?_.duration:1e3,easing:_.easing||df,callback:i};if(_.center&&(x.sourceCenter=l,x.targetCenter=_.center.slice(),l=x.targetCenter),_.zoom!==void 0?(x.sourceResolution=c,x.targetResolution=this.getResolutionForZoom(_.zoom),c=x.targetResolution):_.resolution&&(x.sourceResolution=c,x.targetResolution=_.resolution,c=x.targetResolution),_.rotation!==void 0){x.sourceRotation=f;let C=an(_.rotation-f+Math.PI,2*Math.PI)-Math.PI;x.targetRotation=f+C,f=x.targetRotation}zy(x)?x.complete=!0:o+=x.duration,m.push(x)}this.animations_.push(m),this.setHint(ct.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[ct.ANIMATING]>0}getInteracting(){return this.hints_[ct.INTERACTING]>0}cancelAnimations(){this.setHint(ct.ANIMATING,-this.hints_[ct.ANIMATING]);let e;for(let t=0,i=this.animations_.length;t<i;++t){let s=this.animations_[t];if(s[0].callback&&fo(s[0].callback,!1),!e)for(let o=0,l=s.length;o<l;++o){let c=s[o];if(!c.complete){e=c.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;let e=Date.now(),t=!1;for(let i=this.animations_.length-1;i>=0;--i){let s=this.animations_[i],o=!0;for(let l=0,c=s.length;l<c;++l){let f=s[l];if(f.complete)continue;let m=e-f.start,_=f.duration>0?m/f.duration:1;_>=1?(f.complete=!0,_=1):o=!1;let x=f.easing(_);if(f.sourceCenter){let C=f.sourceCenter[0],T=f.sourceCenter[1],R=f.targetCenter[0],M=f.targetCenter[1];this.nextCenter_=f.targetCenter;let P=C+x*(R-C),O=T+x*(M-T);this.targetCenter_=[P,O]}if(f.sourceResolution&&f.targetResolution){let C=x===1?f.targetResolution:f.sourceResolution+x*(f.targetResolution-f.sourceResolution);if(f.anchor){let T=this.getViewportSize_(this.getRotation()),R=this.constraints_.resolution(C,0,T,!0);this.targetCenter_=this.calculateCenterZoom(R,f.anchor)}this.nextResolution_=f.targetResolution,this.targetResolution_=C,this.applyTargetState_(!0)}if(f.sourceRotation!==void 0&&f.targetRotation!==void 0){let C=x===1?an(f.targetRotation+Math.PI,2*Math.PI)-Math.PI:f.sourceRotation+x*(f.targetRotation-f.sourceRotation);if(f.anchor){let T=this.constraints_.rotation(C,!0);this.targetCenter_=this.calculateCenterRotate(T,f.anchor)}this.nextRotation_=f.targetRotation,this.targetRotation_=C}if(this.applyTargetState_(!0),t=!0,!f.complete)break}if(o){this.animations_[i]=null,this.setHint(ct.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;let l=s[0].callback;l&&fo(l,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let i,s=this.getCenterInternal();return s!==void 0&&(i=[s[0]-t[0],s[1]-t[1]],ki(i,e-this.getRotation()),yf(i,t)),i}calculateCenterZoom(e,t){let i,s=this.getCenterInternal(),o=this.getResolution();if(s!==void 0&&o!==void 0){let l=t[0]-e*(t[0]-s[0])/o,c=t[1]-e*(t[1]-s[1])/o;i=[l,c]}return i}getViewportSize_(e){let t=this.viewportSize_;if(e){let i=t[0],s=t[1];return[Math.abs(i*Math.cos(e))+Math.abs(s*Math.sin(e)),Math.abs(i*Math.sin(e))+Math.abs(s*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){let e=this.getCenterInternal();return e&&Ar(e,this.getProjection())}getCenterInternal(){return this.get(It.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){let t=this.calculateExtentInternal(e);return Yf(t,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();let t=this.getCenterInternal();ee(t,"The view center is not defined");let i=this.getResolution();ee(i!==void 0,"The view resolution is not defined");let s=this.getRotation();return ee(s!==void 0,"The view rotation is not defined"),Cr(t,i,s,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(It.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Bt(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t=t||this.getViewportSizeMinusPadding_();let i=ae(e)/t[0],s=Oe(e)/t[1];return Math.max(i,s)}getResolutionForValueFunction(e){e=e||2;let t=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,s=Math.log(t/i)/Math.log(e);return(function(o){return t/Math.pow(e,o*s)})}getRotation(){return this.get(It.ROTATION)}getValueForResolutionFunction(e){let t=Math.log(e||2),i=this.getConstrainedResolution(this.maxResolution_),s=this.minResolution_,o=Math.log(i/s)/t;return(function(l){return Math.log(i/l)/t/o})}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e),i=this.padding_;return i&&(t=[t[0]-i[1]-i[3],t[1]-i[0]-i[2]]),t}getState(){let e=this.getProjection(),t=this.getResolution(),i=this.getRotation(),s=this.getCenterInternal(),o=this.padding_;if(o){let l=this.getViewportSizeMinusPadding_();s=Vl(s,this.getViewportSize_(),[l[0]/2+o[3],l[1]/2+o[0]],t,i)}return{center:s.slice(0),projection:e!==void 0?e:null,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e,t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,i,s;if(this.resolutions_){let o=bi(this.resolutions_,e,1);t=o,i=this.resolutions_[o],o==this.resolutions_.length-1?s=2:s=i/this.resolutions_[o+1]}else i=this.maxResolution_,s=this.zoomFactor_;return t+Math.log(i/e)/Math.log(s)}getResolutionForZoom(e){if(this.resolutions_?.length){if(this.resolutions_.length===1)return this.resolutions_[0];let t=ge(Math.floor(e),0,this.resolutions_.length-2),i=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/Math.pow(i,ge(e-t,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,t){let i;if(ee(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){ee(!wn(e),"Cannot fit empty extent provided as `geometry`");let s=Bt(e,this.getProjection());i=kl(s)}else if(e.getType()==="Circle"){let s=Bt(e.getExtent(),this.getProjection());i=kl(s),i.rotate(this.getRotation(),Xt(s))}else{let s=Hf();s?i=e.clone().transform(s,this.getProjection()):i=e}this.fitInternal(i,t)}rotatedExtentForGeometry(e){let t=this.getRotation(),i=Math.cos(t),s=Math.sin(-t),o=e.getFlatCoordinates(),l=e.getStride(),c=1/0,f=1/0,m=-1/0,_=-1/0;for(let x=0,C=o.length;x<C;x+=l){let T=o[x]*i-o[x+1]*s,R=o[x]*s+o[x+1]*i;c=Math.min(c,T),f=Math.min(f,R),m=Math.max(m,T),_=Math.max(_,R)}return[c,f,m,_]}fitInternal(e,t){t=t||{};let i=t.size;i||(i=this.getViewportSizeMinusPadding_());let s=t.padding!==void 0?t.padding:[0,0,0,0],o=t.nearest!==void 0?t.nearest:!1,l;t.minResolution!==void 0?l=t.minResolution:t.maxZoom!==void 0?l=this.getResolutionForZoom(t.maxZoom):l=0;let c=this.rotatedExtentForGeometry(e),f=this.getResolutionForExtentInternal(c,[i[0]-s[1]-s[3],i[1]-s[0]-s[2]]);f=isNaN(f)?l:Math.max(f,l),f=this.getConstrainedResolution(f,o?0:1);let m=this.getRotation(),_=Math.sin(m),x=Math.cos(m),C=Xt(c);C[0]+=(s[1]-s[3])/2*f,C[1]+=(s[0]-s[2])/2*f;let T=C[0]*x-C[1]*_,R=C[1]*x+C[0]*_,M=this.getConstrainedCenter([T,R],f),P=t.callback?t.callback:Jn;t.duration!==void 0?this.animateInternal({resolution:f,center:M,duration:t.duration,easing:t.easing},P):(this.targetResolution_=f,this.targetCenter_=M,this.applyTargetState_(!1,!0),fo(P,!0))}centerOn(e,t,i){this.centerOnInternal(mt(e,this.getProjection()),t,i)}centerOnInternal(e,t,i){this.setCenterInternal(Vl(e,t,i,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,i,s){let o,l=this.padding_;if(l&&e){let c=this.getViewportSizeMinusPadding_(-i),f=Vl(e,s,[c[0]/2+l[3],c[1]/2+l[0]],t,i);o=[e[0]-f[0],e[1]-f[1]]}return o}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){let t=Ar(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){let t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t=t&&mt(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){let i=this.getAnimating()||this.getInteracting(),s=this.getViewportSize_(this.getRotation()),o=this.constraints_.resolution(this.targetResolution_*e,0,s,i);t&&(this.targetCenter_=this.calculateCenterZoom(o,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(Math.pow(this.zoomFactor_,-e),t)}adjustRotation(e,t){t&&(t=mt(t,this.getProjection())),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){let i=this.getAnimating()||this.getInteracting(),s=this.constraints_.rotation(this.targetRotation_+e,i);t&&(this.targetCenter_=this.calculateCenterRotate(s,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&mt(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){let i=this.getAnimating()||this.getInteracting()||t,s=this.constraints_.rotation(this.targetRotation_,i),o=this.getViewportSize_(s),l=this.constraints_.resolution(this.targetResolution_,0,o,i),c=this.constraints_.center(this.targetCenter_,l,o,i,this.calculateCenterShift(this.targetCenter_,l,s,o));this.get(It.ROTATION)!==s&&this.set(It.ROTATION,s),this.get(It.RESOLUTION)!==l&&(this.set(It.RESOLUTION,l),this.set("zoom",this.getZoom(),!0)),(!c||!this.get(It.CENTER)||!ti(this.get(It.CENTER),c))&&this.set(It.CENTER,c),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,i){e=e!==void 0?e:200;let s=t||0,o=this.constraints_.rotation(this.targetRotation_),l=this.getViewportSize_(o),c=this.constraints_.resolution(this.targetResolution_,s,l),f=this.constraints_.center(this.targetCenter_,c,l,!1,this.calculateCenterShift(this.targetCenter_,c,o,l));if(e===0&&!this.cancelAnchor_){this.targetResolution_=c,this.targetRotation_=o,this.targetCenter_=f,this.applyTargetState_();return}i=i||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==c||this.getRotation()!==o||!this.getCenterInternal()||!ti(this.getCenterInternal(),f))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:o,center:f,resolution:c,duration:e,easing:Tt,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(ct.INTERACTING,1)}endInteraction(e,t,i){i=i&&mt(i,this.getProjection()),this.endInteractionInternal(e,t,i)}endInteractionInternal(e,t,i){this.getInteracting()&&(this.setHint(ct.INTERACTING,-1),this.resolveConstraints(e,t,i))}getConstrainedCenter(e,t){let i=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),i)}getConstrainedZoom(e,t){let i=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(i,t))}getConstrainedResolution(e,t){t=t||0;let i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,i)}};ht=Kl});var Fr,Zt,Bl,Nn,ql,Ow,$i=S(()=>{Fr="ol-hidden",Zt="ol-unselectable",Bl="ol-unsupported",Nn="ol-control",ql="ol-collapsed",Ow=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`].join(""),"i")});var Hl,bt,Qi=S(()=>{gl();qt();wt();pt();Hl=class extends je{constructor(e){super();let t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&this.element?.remove();for(let t=0,i=this.listenerKeys.length;t<i;++t)le(this.listenerKeys[t]);if(this.listenerKeys.length=0,this.map_=e,e){let t=this.target_??e.getOverlayContainerStopEvent();this.element&&t.appendChild(this.element),this.render!==Jn&&this.listenerKeys.push(J(e,Yt.POSTRENDER,this.render,this)),e.render()}}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}},bt=Hl});var Yl,dg,gg=S(()=>{Ct();$i();Ze();Te();pt();Qi();Yl=class extends bt{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.attributions_=e.attributions;let t=e.className!==void 0?e.className:"ol-attribution",i=e.tipLabel!==void 0?e.tipLabel:"Attributions",s=e.expandClassName!==void 0?e.expandClassName:t+"-expand",o=e.collapseLabel!==void 0?e.collapseLabel:"\u203A",l=e.collapseClassName!==void 0?e.collapseClassName:t+"-collapse";typeof o=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=o,this.collapseLabel_.className=l):this.collapseLabel_=o;let c=e.label!==void 0?e.label:"i";typeof c=="string"?(this.label_=document.createElement("span"),this.label_.textContent=c,this.label_.className=s):this.label_=c;let f=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(f),this.toggleButton_.addEventListener(V.CLICK,this.handleClick_.bind(this),!1);let m=t+" "+Zt+" "+Nn+(this.collapsed_&&this.collapsible_?" "+ql:"")+(this.collapsible_?"":" ol-uncollapsible"),_=this.element;_.className=m,_.appendChild(this.toggleButton_),_.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){let t=this.getMap().getAllLayers(),i=new Set(t.flatMap(s=>s.getAttributions(e)));if(this.attributions_!==void 0&&(Array.isArray(this.attributions_)?this.attributions_.forEach(s=>i.add(s)):i.add(this.attributions_)),!this.overrideCollapsible_){let s=!t.some(o=>o.getSource()?.getAttributionsCollapsible()===!1);this.setCollapsible(s)}return Array.from(i)}async updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}let t=await Promise.all(this.collectSourceAttributions_(e).map(s=>lf(()=>s))),i=t.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!Tn(t,this.renderedAttributions_)){pf(this.ulElement_);for(let s=0,o=t.length;s<o;++s){let l=document.createElement("li");l.innerHTML=t[s],this.ulElement_.appendChild(l)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(ql),this.collapsed_?Ni(this.collapseLabel_,this.label_):Ni(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}},dg=Yl});var Zl,kr,$l=S(()=>{$i();Mn();Te();Qi();Zl=class extends bt{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});let t=e.className!==void 0?e.className:"ol-rotate",i=e.label!==void 0?e.label:"\u21E7",s=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof i=="string"?(this.label_=document.createElement("span"),this.label_.className=s,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(s));let o=e.tipLabel?e.tipLabel:"Reset rotation",l=document.createElement("button");l.className=t+"-reset",l.setAttribute("type","button"),l.title=o,l.appendChild(this.label_),l.addEventListener(V.CLICK,this.handleClick_.bind(this),!1);let c=t+" "+Zt+" "+Nn,f=this.element;f.className=c,f.appendChild(l),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(Fr)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){let t=this.getMap().getView();if(!t)return;let i=t.getRotation();i!==void 0&&(this.duration_>0&&i%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:Tt}):t.setRotation(0))}render(e){let t=e.frameState;if(!t)return;let i=t.viewState.rotation;if(i!=this.rotation_){let s="rotate("+i+"rad)";if(this.autoHide_){let o=this.element.classList.contains(Fr);!o&&i===0?this.element.classList.add(Fr):o&&i!==0&&this.element.classList.remove(Fr)}this.label_.style.transform=s}this.rotation_=i}},kr=Zl});var Ql,zr,Jl=S(()=>{$i();Mn();Te();Qi();Ql=class extends bt{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});let t=e.className!==void 0?e.className:"ol-zoom",i=e.delta!==void 0?e.delta:1,s=e.zoomInClassName!==void 0?e.zoomInClassName:t+"-in",o=e.zoomOutClassName!==void 0?e.zoomOutClassName:t+"-out",l=e.zoomInLabel!==void 0?e.zoomInLabel:"+",c=e.zoomOutLabel!==void 0?e.zoomOutLabel:"\u2013",f=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",m=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",_=document.createElement("button");_.className=s,_.setAttribute("type","button"),_.title=f,_.appendChild(typeof l=="string"?document.createTextNode(l):l),_.addEventListener(V.CLICK,this.handleClick_.bind(this,i),!1);let x=document.createElement("button");x.className=o,x.setAttribute("type","button"),x.title=m,x.appendChild(typeof c=="string"?document.createTextNode(c):c),x.addEventListener(V.CLICK,this.handleClick_.bind(this,-i),!1);let C=t+" "+Zt+" "+Nn,T=this.element;T.className=C,T.appendChild(_),T.appendChild(x),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){let i=this.getMap().getView();if(!i)return;let s=i.getZoom();if(s!==void 0){let o=i.getConstrainedZoom(s+e);this.duration_>0?(i.getAnimating()&&i.cancelAnimations(),i.animate({zoom:o,duration:this.duration_,easing:Tt})):i.setZoom(o)}}},zr=Ql});function pg(n){n=n||{};let e=new tt;return(n.zoom===void 0||n.zoom)&&e.push(new zr(n.zoomOptions)),(n.rotate===void 0||n.rotate)&&e.push(new kr(n.rotateOptions)),(n.attribution===void 0||n.attribution)&&e.push(new dg(n.attributionOptions)),e}var mg=S(()=>{Pr();gg();$l();Jl()});var eu,_g,yg=S(()=>{eu=class{constructor(e,t,i){this.decay_=e,this.minVelocity_=t,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;let e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let i=t-3;for(;i>0&&this.points_[i+2]>e;)i-=3;let s=this.points_[t+2]-this.points_[i+2];if(s<1e3/60)return!1;let o=this.points_[t]-this.points_[i],l=this.points_[t+1]-this.points_[i+1];return this.angle_=Math.atan2(l,o),this.initialVelocity_=Math.sqrt(o*o+l*l)/s,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}},_g=eu});var tu,xg=S(()=>{tu={ACTIVE:"active"}});function Eg(n,e,t){let i=n.getCenterInternal();if(i){let s=[i[0]+e[0],i[1]+e[1]];n.animateInternal({duration:t!==void 0?t:250,easing:gf,center:n.getConstrainedCenter(s)})}}function Ji(n,e,t,i){let s=n.getZoom();if(s===void 0)return;let o=n.getConstrainedZoom(s+e),l=n.getResolutionForZoom(o);n.getAnimating()&&n.cancelAnimations(),n.animate({resolution:l,anchor:t,duration:i!==void 0?i:250,easing:Tt})}var nu,$t,er=S(()=>{qt();Mn();xg();nu=class extends je{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(tu.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(tu.ACTIVE,e)}setMap(e){this.map_=e}};$t=nu});var iu,vg,Cg=S(()=>{Or();er();iu=class extends $t{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let t=!1;if(e.type==_e.DBLCLICK){let i=e.originalEvent,s=e.map,o=e.coordinate,l=i.shiftKey?-this.delta_:this.delta_,c=s.getView();Ji(c,l,o,this.duration_),i.preventDefault(),t=!0}return!t}},vg=iu});function jr(n){let e=arguments;return function(t){let i=!0;for(let s=0,o=e.length;s<o&&(i=i&&e[s](t),!!i);++s);return i}}var wg,jy,po,Tg,mo,_o,Rg,Ig,yo,xo,bg,Fn=S(()=>{pt();Vt();wg=function(n){let e=n.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},jy=function(n){let e=n.map.getTargetElement(),t=e.getRootNode(),i=n.map.getOwnerDocument().activeElement;return t instanceof ShadowRoot?t.host.contains(i):e.contains(i)},po=function(n){let e=n.map.getTargetElement(),t=e.getRootNode();return(t instanceof ShadowRoot?t.host:e).hasAttribute("tabindex")?jy(n):!0},Tg=Qn,mo=function(n){let e=n.originalEvent;return"pointerId"in e&&e.button==0&&!(uf&&Ta&&e.ctrlKey)},_o=function(n){let e=n.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},Rg=function(n){let e=n.originalEvent;return Ta?e.metaKey:e.ctrlKey},Ig=function(n){let e=n.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},yo=function(n){let e=n.originalEvent,t=e.target.tagName;return t!=="INPUT"&&t!=="SELECT"&&t!=="TEXTAREA"&&!e.target.isContentEditable},xo=function(n){let e=n.originalEvent;return"pointerId"in e&&e.pointerType=="mouse"},bg=function(n){let e=n.originalEvent;return"pointerId"in e&&e.isPrimary&&e.button===0}});function tr(n){let e=n.length,t=0,i=0;for(let s=0;s<e;s++)t+=n[s].clientX,i+=n[s].clientY;return{clientX:t/e,clientY:i/e}}var ru,Qt,nr=S(()=>{Or();er();ru=class extends $t{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==_e.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==_e.POINTERUP){let i=this.handleUpEvent(e);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(e.type==_e.POINTERDOWN){let i=this.handleDownEvent(e);this.handlingDownUpSequence=i,t=this.stopDown(i)}else e.type==_e.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}};Qt=ru});var su,Sg,Ag=S(()=>{zi();Mn();Fn();pt();nr();su=class extends Qt{constructor(e){super({stopDown:ln}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;let t=e.condition?e.condition:jr(_o,bg);this.condition_=e.onFocusOnly?jr(po,t):t,this.noKinetic_=!1}handleDragEvent(e){let t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());let i=this.targetPointers,s=t.getEventPixel(tr(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(s[0],s[1]),this.lastCentroid){let o=[this.lastCentroid[0]-s[0],s[1]-this.lastCentroid[1]],c=e.map.getView();xf(o,c.getResolution()),ki(o,c.getRotation()),c.adjustCenterInternal(o)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=s,this.lastPointersCount_=i.length,e.originalEvent.preventDefault()}handleUpEvent(e){let t=e.map,i=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){let s=this.kinetic_.getDistance(),o=this.kinetic_.getAngle(),l=i.getCenterInternal(),c=t.getPixelFromCoordinateInternal(l),f=t.getCoordinateFromPixelInternal([c[0]-s*Math.cos(o),c[1]-s*Math.sin(o)]);i.animateInternal({center:i.getConstrainedCenter(f),duration:500,easing:Tt})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){let i=e.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}},Sg=su});var ou,Lg,Mg=S(()=>{Fn();pt();ho();nr();ou=class extends Qt{constructor(e){e=e||{},super({stopDown:ln}),this.condition_=e.condition?e.condition:wg,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!xo(e))return;let t=e.map,i=t.getView();if(i.getConstraints().rotation===Zi)return;let s=t.getSize(),o=e.pixel,l=Math.atan2(s[1]/2-o[1],o[0]-s[0]/2);if(this.lastAngle_!==void 0){let c=l-this.lastAngle_;i.adjustRotationInternal(-c)}this.lastAngle_=l}handleUpEvent(e){return xo(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return xo(e)&&mo(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}},Lg=ou});var au,Pg,Og=S(()=>{Rr();zl();au=class extends An{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){let e=this.startPixel_,t=this.endPixel_,i="px",s=this.element_.style;s.left=Math.min(e[0],t[0])+i,s.top=Math.min(e[1],t[1])+i,s.width=Math.abs(t[0]-e[0])+i,s.height=Math.abs(t[1]-e[1])+i}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);let t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;let e=this.startPixel_,t=this.endPixel_,s=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);s[4]=s[0].slice(),this.geometry_?this.geometry_.setCoordinates([s]):this.geometry_=new ag([s])}getGeometry(){return this.geometry_}},Pg=au});var ir,si,lu,Dg,Ng=S(()=>{un();Fn();Og();nr();ir={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"},si=class extends He{constructor(e,t,i){super(e),this.coordinate=t,this.mapBrowserEvent=i}},lu=class extends Qt{constructor(e){super(),this.on,this.once,this.un,e=e??{},this.box_=new Pg(e.className||"ol-dragbox"),this.minArea_=e.minArea??64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition??mo,this.boxEndCondition_=e.boxEndCondition??this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,i){let s=i[0]-t[0],o=i[1]-t[1];return s*s+o*o>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.startPixel_&&(this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new si(ir.BOXDRAG,e.coordinate,e)))}handleUpEvent(e){if(!this.startPixel_)return!1;let t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new si(t?ir.BOXEND:ir.BOXCANCEL,e.coordinate,e)),this.box_.setMap(null),this.startPixel_=null,!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new si(ir.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}setActive(e){e||(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new si(ir.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setActive(e)}setMap(e){this.getMap()&&(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new si(ir.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setMap(e)}},Dg=lu});var uu,Fg,kg=S(()=>{Mn();Fn();Ng();uu=class extends Dg{constructor(e){e=e||{};let t=e.condition?e.condition:Ig;super({condition:t,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){let i=this.getMap().getView(),s=this.getGeometry();if(this.out_){let o=i.rotatedExtentForGeometry(s),l=i.getResolutionForExtentInternal(o),c=i.getResolution()/l;s=s.clone(),s.scale(c*c)}i.fitInternal(s,{duration:this.duration_,easing:Tt})}},Fg=uu});var kn,zg=S(()=>{kn={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"}});var cu,jg,Ug=S(()=>{zi();Te();zg();Fn();er();cu=class extends $t{constructor(e){super(),e=e||{},this.defaultCondition_=function(t){return _o(t)&&yo(t)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let t=!1;if(e.type==V.KEYDOWN){let i=e.originalEvent,s=i.key;if(this.condition_(e)&&(s==kn.DOWN||s==kn.LEFT||s==kn.RIGHT||s==kn.UP)){let l=e.map.getView(),c=l.getResolution()*this.pixelDelta_,f=0,m=0;s==kn.DOWN?m=-c:s==kn.LEFT?f=-c:s==kn.RIGHT?f=c:m=c;let _=[f,m];ki(_,l.getRotation()),Eg(l,_,this.duration_),i.preventDefault(),t=!0}}return!t}},jg=cu});var hu,Gg,Xg=S(()=>{Te();Fn();er();hu=class extends $t{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(t){return!Rg(t)&&yo(t)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let t=!1;if(e.type==V.KEYDOWN||e.type==V.KEYPRESS){let i=e.originalEvent,s=i.key;if(this.condition_(e)&&(s==="+"||s==="-")){let o=e.map,l=s==="+"?this.delta_:-this.delta_,c=o.getView();Ji(c,l,void 0,this.duration_),i.preventDefault(),t=!0}}return!t}},Gg=hu});var Uy,Gy,Xy,fu,Wg,Vg=S(()=>{wt();Te();Fn();ke();er();Uy=40,Gy=300,Xy=3,fu=class extends $t{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;let t=e.condition?e.condition:Tg;this.condition_=e.onFocusOnly?jr(po,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300,this.ctrlKeyPressed_=!1,this.ctrlKeyListenerKeys_=[]}setMap(e){if(this.ctrlKeyListenerKeys_.forEach(le),this.ctrlKeyListenerKeys_.length=0,this.ctrlKeyPressed_=!1,super.setMap(e),e){let t=e.getOwnerDocument();this.ctrlKeyListenerKeys_.push(J(t,"keydown",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!0)}),J(t,"keyup",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!1)}))}}endInteraction_(){this.trackpadTimeoutId_=void 0;let e=this.getMap();if(!e)return;let t=e.getView(),i=this.lastDelta_?this.lastDelta_>0?1:-1:0;t.endInteraction(this.constrainResolution_||t.getConstrainResolution()?100:void 0,i,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null)}handleEvent(e){if(!this.condition_(e)||e.type!==V.WHEEL)return!0;let i=e.map,s=e.originalEvent;s.preventDefault();let o=s.ctrlKey&&!this.ctrlKeyPressed_;s.ctrlKey||(this.ctrlKeyPressed_=!1),this.useAnchor_&&(this.lastAnchor_=e.pixel);let l=s.deltaY;switch(s.deltaMode){case WheelEvent.DOM_DELTA_LINE:l*=Uy;break;case WheelEvent.DOM_DELTA_PAGE:l*=Gy;break;default:}if(l===0)return!1;this.lastDelta_=l;let c=Date.now();this.startTime_===void 0&&(this.startTime_=c),(!this.mode_||c-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(l)<4?"trackpad":"wheel");let f=i.getView();if(this.mode_==="trackpad")return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(f.getAnimating()&&f.cancelAnimations(),f.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),o&&(l=l*Xy),f.adjustZoom(-l/this.deltaPerZoom_,this.lastAnchor_?i.getCoordinateFromPixel(this.lastAnchor_):null),this.startTime_=c,!1;this.totalDelta_+=l;let m=Math.max(this.timeout_-(c-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),m),!1}handleWheelZoom_(e){let t=e.getView();t.getAnimating()&&t.cancelAnimations();let i=-ge(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),Ji(t,i,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}},Wg=fu});var du,Kg,Bg=S(()=>{pt();ho();nr();du=class extends Qt{constructor(e){e=e||{};let t=e;t.stopDown||(t.stopDown=ln),super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let t=0,i=this.targetPointers[0],s=this.targetPointers[1],o=Math.atan2(s.clientY-i.clientY,s.clientX-i.clientX);if(this.lastAngle_!==void 0){let f=o-this.lastAngle_;this.rotationDelta_+=f,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=f}this.lastAngle_=o;let l=e.map,c=l.getView();c.getConstraints().rotation!==Zi&&(this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(tr(this.targetPointers))),this.rotating_&&(l.render(),c.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}},Kg=du});var gu,qg,Hg=S(()=>{pt();nr();gu=class extends Qt{constructor(e){e=e||{};let t=e;t.stopDown||(t.stopDown=ln),super(t),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1,i=this.targetPointers[0],s=this.targetPointers[1],o=i.clientX-s.clientX,l=i.clientY-s.clientY,c=Math.sqrt(o*o+l*l);this.lastDistance_!==void 0&&(t=this.lastDistance_/c),this.lastDistance_=c;let f=e.map,m=f.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=f.getCoordinateFromPixelInternal(f.getEventPixel(tr(this.targetPointers))),f.render(),m.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){let i=e.map.getView(),s=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,s),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}},qg=gu});function Yg(n){n=n||{};let e=new tt,t=new _g(-.005,.05,100);return(n.altShiftDragRotate===void 0||n.altShiftDragRotate)&&e.push(new Lg),(n.doubleClickZoom===void 0||n.doubleClickZoom)&&e.push(new vg({delta:n.zoomDelta,duration:n.zoomDuration})),(n.dragPan===void 0||n.dragPan)&&e.push(new Sg({onFocusOnly:n.onFocusOnly,kinetic:t})),(n.pinchRotate===void 0||n.pinchRotate)&&e.push(new Kg),(n.pinchZoom===void 0||n.pinchZoom)&&e.push(new qg({duration:n.zoomDuration})),(n.keyboard===void 0||n.keyboard)&&(e.push(new jg),e.push(new Gg({delta:n.zoomDelta,duration:n.zoomDuration}))),(n.mouseWheelZoom===void 0||n.mouseWheelZoom)&&e.push(new Wg({onFocusOnly:n.onFocusOnly,duration:n.zoomDuration})),(n.shiftDragZoom===void 0||n.shiftDragZoom)&&e.push(new Fg({duration:n.zoomDuration})),e}var Zg=S(()=>{Pr();yg();Cg();Ag();Mg();kg();Ug();Xg();Vg();Bg();Hg()});var fe,pu=S(()=>{fe={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"}});var mu,Eo,_u=S(()=>{qt();lt();ke();ze();pu();mu=class extends je{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;let t=Object.assign({},e);typeof e.properties=="object"&&(delete t.properties,Object.assign(t,e.properties)),t[fe.OPACITY]=e.opacity!==void 0?e.opacity:1,ee(typeof t[fe.OPACITY]=="number","Layer opacity must be a number"),t[fe.VISIBLE]=e.visible!==void 0?e.visible:!0,t[fe.Z_INDEX]=e.zIndex,t[fe.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,t[fe.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,t[fe.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,t[fe.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=t.className!==void 0?t.className:"ol-layer",delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){let t=this.state_||{layer:this,managed:e===void 0?!0:e},i=this.getZIndex();return t.opacity=ge(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=i===void 0&&!t.managed?1/0:i,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return ne()}getLayerStatesArray(e){return ne()}getExtent(){return this.get(fe.EXTENT)}getMaxResolution(){return this.get(fe.MAX_RESOLUTION)}getMinResolution(){return this.get(fe.MIN_RESOLUTION)}getMinZoom(){return this.get(fe.MIN_ZOOM)}getMaxZoom(){return this.get(fe.MAX_ZOOM)}getOpacity(){return this.get(fe.OPACITY)}getSourceState(){return ne()}getVisible(){return this.get(fe.VISIBLE)}getZIndex(){return this.get(fe.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(fe.EXTENT,e)}setMaxResolution(e){this.set(fe.MAX_RESOLUTION,e)}setMinResolution(e){this.set(fe.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(fe.MAX_ZOOM,e)}setMinZoom(e){this.set(fe.MIN_ZOOM,e)}setOpacity(e){ee(typeof e=="number","Layer opacity must be a number"),this.set(fe.OPACITY,e)}setVisible(e){this.set(fe.VISIBLE,e)}setZIndex(e){this.set(fe.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}},Eo=mu});var zn,Nt,yu,xu,Ur,$g=S(()=>{Pr();ao();Lr();lt();wt();un();Te();Ee();$n();ze();_u();zn={ADDLAYER:"addlayer",REMOVELAYER:"removelayer"},Nt=class extends He{constructor(e,t){super(e),this.layer=t}},yu={LAYERS:"layers"},xu=class n extends Eo{constructor(e){e=e||{};let t=Object.assign({},e);delete t.layers;let i=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(yu.LAYERS,this.handleLayersChanged_),i?Array.isArray(i)?i=new tt(i.slice(),{unique:!0}):ee(typeof i.getArray=="function","Expected `layers` to be an array or a `Collection`"):i=new tt(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(le),this.layersListenerKeys_.length=0;let e=this.getLayers();this.layersListenerKeys_.push(J(e,et.ADD,this.handleLayersAdd_,this),J(e,et.REMOVE,this.handleLayersRemove_,this));for(let i in this.listenerKeys_)this.listenerKeys_[i].forEach(le);Sn(this.listenerKeys_);let t=e.getArray();for(let i=0,s=t.length;i<s;i++){let o=t[i];this.registerLayerListeners_(o),this.dispatchEvent(new Nt(zn.ADDLAYER,o))}this.changed()}registerLayerListeners_(e){let t=[J(e,pn.PROPERTYCHANGE,this.handleLayerChange_,this),J(e,V.CHANGE,this.handleLayerChange_,this)];e instanceof n&&t.push(J(e,zn.ADDLAYER,this.handleLayerGroupAdd_,this),J(e,zn.REMOVELAYER,this.handleLayerGroupRemove_,this)),this.listenerKeys_[me(e)]=t}handleLayerGroupAdd_(e){this.dispatchEvent(new Nt(zn.ADDLAYER,e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new Nt(zn.REMOVELAYER,e.layer))}handleLayersAdd_(e){let t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new Nt(zn.ADDLAYER,t)),this.changed()}handleLayersRemove_(e){let t=e.element,i=me(t);this.listenerKeys_[i].forEach(le),delete this.listenerKeys_[i],this.dispatchEvent(new Nt(zn.REMOVELAYER,t)),this.changed()}getLayers(){return this.get(yu.LAYERS)}setLayers(e){let t=this.getLayers();if(t){let i=t.getArray();for(let s=0,o=i.length;s<o;++s)this.dispatchEvent(new Nt(zn.REMOVELAYER,i[s]))}this.set(yu.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){let t=e!==void 0?e:[],i=t.length;this.getLayers().forEach(function(l){l.getLayerStatesArray(t)});let s=this.getLayerState(),o=s.zIndex;!e&&s.zIndex===void 0&&(o=0);for(let l=i,c=t.length;l<c;l++){let f=t[l];f.opacity*=s.opacity,f.visible=f.visible&&s.visible,f.maxResolution=Math.min(f.maxResolution,s.maxResolution),f.minResolution=Math.max(f.minResolution,s.minResolution),f.minZoom=Math.max(f.minZoom,s.minZoom),f.maxZoom=Math.min(f.maxZoom,s.maxZoom),s.extent!==void 0&&(f.extent!==void 0?f.extent=Wt(f.extent,s.extent):f.extent=s.extent),f.zIndex===void 0&&(f.zIndex=o)}return t}getSourceState(){return"ready"}},Ur=xu});var ft,Gr=S(()=>{ft={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"}});function Xr(n,e){if(!n.visible)return!1;let t=e.resolution;if(t<n.minResolution||t>=n.maxResolution)return!1;let i=e.zoom;return i>n.minZoom&&i<=n.maxZoom}var Eu,oi,rr=S(()=>{go();lt();wt();Te();Ee();Gr();_u();pu();Eu=class extends Eo{constructor(e){let t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(fe.SOURCE,this.handleSourcePropertyChange_);let i=e.source?e.source:null;this.setSource(i)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(fe.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){let e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(le(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;let e=this.getSource();e&&(this.sourceChangeKey_=J(e,V.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t,i=this.getMapInternal();!e&&i&&(e=i.getView()),e instanceof ht?t={viewState:e.getState(),extent:e.calculateExtent()}:t=e,!t.layerStatesArray&&i&&(t.layerStatesArray=i.getLayerGroup().getLayerStatesArray());let s;if(t.layerStatesArray){if(s=t.layerStatesArray.find(l=>l.layer===this),!s)return!1}else s=this.getLayerState();let o=this.getExtent();return Xr(s,t.viewState)&&(!o||sn(o,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t=this.getSource()?.getAttributions();if(!t)return[];let i=e instanceof ht?e.getViewStateAndExtent():e,s=t(i);return Array.isArray(s)||(s=[s]),s}render(e,t){let i=this.getRenderer();return i.prepareFrame(e)?(this.rendered=!0,i.renderFrame(e,t)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(e,t){}renderDeferred(e){let t=this.getRenderer();t&&t.renderDeferred(e)}setMapInternal(e){e||this.unrender(),this.set(fe.MAP,e)}getMapInternal(){return this.get(fe.MAP)}setMap(e){this.mapPrecomposeKey_&&(le(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(le(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=J(e,ft.PRECOMPOSE,this.handlePrecompose_,this),this.mapRenderKey_=J(this,V.CHANGE,e.render,e),this.changed())}handlePrecompose_(e){let t=e.frameState.layerStatesArray,i=this.getLayerState(!1);ee(!t.some(s=>s.layer===i.layer),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),t.push(i)}setSource(e){this.set(fe.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}clearRenderer(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_)}disposeInternal(){this.clearRenderer(),this.setSource(null),super.disposeInternal()}};oi=Eu});function vo(n,e,t=0,i=n.length-1,s=Wy){for(;i>t;){if(i-t>600){let f=i-t+1,m=e-t+1,_=Math.log(f),x=.5*Math.exp(2*_/3),C=.5*Math.sqrt(_*x*(f-x)/f)*(m-f/2<0?-1:1),T=Math.max(t,Math.floor(e-m*x/f+C)),R=Math.min(i,Math.floor(e+(f-m)*x/f+C));vo(n,e,T,R,s)}let o=n[e],l=t,c=i;for(Wr(n,t,e),s(n[i],o)>0&&Wr(n,t,i);l<c;){for(Wr(n,l,c),l++,c--;s(n[l],o)<0;)l++;for(;s(n[c],o)>0;)c--}s(n[t],o)===0?Wr(n,t,c):(c++,Wr(n,c,i)),c<=e&&(t=c+1),e<=c&&(i=c-1)}}function Wr(n,e,t){let i=n[e];n[e]=n[t],n[t]=i}function Wy(n,e){return n<e?-1:n>e?1:0}var Qg=S(()=>{});function Vy(n,e,t){if(!t)return e.indexOf(n);for(let i=0;i<e.length;i++)if(t(n,e[i]))return i;return-1}function sr(n,e){Vr(n,0,n.children.length,e,n)}function Vr(n,e,t,i,s){s||(s=or(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let o=e;o<t;o++){let l=n.children[o];Kr(s,n.leaf?i(l):l)}return s}function Kr(n,e){return n.minX=Math.min(n.minX,e.minX),n.minY=Math.min(n.minY,e.minY),n.maxX=Math.max(n.maxX,e.maxX),n.maxY=Math.max(n.maxY,e.maxY),n}function Ky(n,e){return n.minX-e.minX}function By(n,e){return n.minY-e.minY}function vu(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function Co(n){return n.maxX-n.minX+(n.maxY-n.minY)}function qy(n,e){return(Math.max(e.maxX,n.maxX)-Math.min(e.minX,n.minX))*(Math.max(e.maxY,n.maxY)-Math.min(e.minY,n.minY))}function Hy(n,e){let t=Math.max(n.minX,e.minX),i=Math.max(n.minY,e.minY),s=Math.min(n.maxX,e.maxX),o=Math.min(n.maxY,e.maxY);return Math.max(0,s-t)*Math.max(0,o-i)}function Cu(n,e){return n.minX<=e.minX&&n.minY<=e.minY&&e.maxX<=n.maxX&&e.maxY<=n.maxY}function wo(n,e){return e.minX<=n.maxX&&e.minY<=n.maxY&&e.maxX>=n.minX&&e.maxY>=n.minY}function or(n){return{children:n,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Jg(n,e,t,i,s){let o=[e,t];for(;o.length;){if(t=o.pop(),e=o.pop(),t-e<=i)continue;let l=e+Math.ceil((t-e)/i/2)*i;vo(n,l,e,t,s),o.push(e,l,l,t)}}var Br,ep=S(()=>{Qg();Br=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let t=this.data,i=[];if(!wo(e,t))return i;let s=this.toBBox,o=[];for(;t;){for(let l=0;l<t.children.length;l++){let c=t.children[l],f=t.leaf?s(c):c;wo(e,f)&&(t.leaf?i.push(c):Cu(e,f)?this._all(c,i):o.push(c))}t=o.pop()}return i}collides(e){let t=this.data;if(!wo(e,t))return!1;let i=[];for(;t;){for(let s=0;s<t.children.length;s++){let o=t.children[s],l=t.leaf?this.toBBox(o):o;if(wo(e,l)){if(t.leaf||Cu(e,l))return!0;i.push(o)}}t=i.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let i=0;i<e.length;i++)this.insert(e[i]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=t;else if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){let i=this.data;this.data=t,t=i}this._insert(t,this.data.height-t.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=or([]),this}remove(e,t){if(!e)return this;let i=this.data,s=this.toBBox(e),o=[],l=[],c,f,m;for(;i||o.length;){if(i||(i=o.pop(),f=o[o.length-1],c=l.pop(),m=!0),i.leaf){let _=Vy(e,i.children,t);if(_!==-1)return i.children.splice(_,1),o.push(i),this._condense(o),this}!m&&!i.leaf&&Cu(i,s)?(o.push(i),l.push(c),c=0,f=i,i=i.children[0]):f?(c++,i=f.children[c],m=!1):i=null}return this}toBBox(e){return e}compareMinX(e,t){return e.minX-t.minX}compareMinY(e,t){return e.minY-t.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let i=[];for(;e;)e.leaf?t.push(...e.children):i.push(...e.children),e=i.pop();return t}_build(e,t,i,s){let o=i-t+1,l=this._maxEntries,c;if(o<=l)return c=or(e.slice(t,i+1)),sr(c,this.toBBox),c;s||(s=Math.ceil(Math.log(o)/Math.log(l)),l=Math.ceil(o/Math.pow(l,s-1))),c=or([]),c.leaf=!1,c.height=s;let f=Math.ceil(o/l),m=f*Math.ceil(Math.sqrt(l));Jg(e,t,i,m,this.compareMinX);for(let _=t;_<=i;_+=m){let x=Math.min(_+m-1,i);Jg(e,_,x,f,this.compareMinY);for(let C=_;C<=x;C+=f){let T=Math.min(C+f-1,x);c.children.push(this._build(e,C,T,s-1))}}return sr(c,this.toBBox),c}_chooseSubtree(e,t,i,s){for(;s.push(t),!(t.leaf||s.length-1===i);){let o=1/0,l=1/0,c;for(let f=0;f<t.children.length;f++){let m=t.children[f],_=vu(m),x=qy(e,m)-_;x<l?(l=x,o=_<o?_:o,c=m):x===l&&_<o&&(o=_,c=m)}t=c||t.children[0]}return t}_insert(e,t,i){let s=i?e:this.toBBox(e),o=[],l=this._chooseSubtree(s,this.data,t,o);for(l.children.push(e),Kr(l,s);t>=0&&o[t].children.length>this._maxEntries;)this._split(o,t),t--;this._adjustParentBBoxes(s,o,t)}_split(e,t){let i=e[t],s=i.children.length,o=this._minEntries;this._chooseSplitAxis(i,o,s);let l=this._chooseSplitIndex(i,o,s),c=or(i.children.splice(l,i.children.length-l));c.height=i.height,c.leaf=i.leaf,sr(i,this.toBBox),sr(c,this.toBBox),t?e[t-1].children.push(c):this._splitRoot(i,c)}_splitRoot(e,t){this.data=or([e,t]),this.data.height=e.height+1,this.data.leaf=!1,sr(this.data,this.toBBox)}_chooseSplitIndex(e,t,i){let s,o=1/0,l=1/0;for(let c=t;c<=i-t;c++){let f=Vr(e,0,c,this.toBBox),m=Vr(e,c,i,this.toBBox),_=Hy(f,m),x=vu(f)+vu(m);_<o?(o=_,s=c,l=x<l?x:l):_===o&&x<l&&(l=x,s=c)}return s||i-t}_chooseSplitAxis(e,t,i){let s=e.leaf?this.compareMinX:Ky,o=e.leaf?this.compareMinY:By,l=this._allDistMargin(e,t,i,s),c=this._allDistMargin(e,t,i,o);l<c&&e.children.sort(s)}_allDistMargin(e,t,i,s){e.children.sort(s);let o=this.toBBox,l=Vr(e,0,t,o),c=Vr(e,i-t,i,o),f=Co(l)+Co(c);for(let m=t;m<i-t;m++){let _=e.children[m];Kr(l,e.leaf?o(_):_),f+=Co(l)}for(let m=i-t-1;m>=t;m--){let _=e.children[m];Kr(c,e.leaf?o(_):_),f+=Co(c)}return f}_adjustParentBBoxes(e,t,i){for(let s=i;s>=0;s--)Kr(t[s],e)}_condense(e){for(let t=e.length-1,i;t>=0;t--)e[t].children.length===0?t>0?(i=e[t-1].children,i.splice(i.indexOf(e[t]),1)):this.clear():sr(e[t],this.toBBox)}}});function Yy(){return wu||(wu=Ce(1,1,void 0,{willReadFrequently:!0,desynchronized:!0})),wu}function To(n,e){return n.endsWith("%")?Number(n.substring(0,n.length-1))/e:Number(n)}function Hr(n){throw new Error('failed to parse "'+n+'" as color')}function tp(n){if(n.toLowerCase().startsWith("rgb")){let o=n.match($y)||n.match(Zy)||n.match(Qy);if(o){let l=o[4],c=100/255;return[ge(To(o[1],c)+.5|0,0,255),ge(To(o[2],c)+.5|0,0,255),ge(To(o[3],c)+.5|0,0,255),l!==void 0?ge(To(l,100),0,1):1]}Hr(n)}if(n.startsWith("#")){if(Jy.test(n)){let o=n.substring(1),l=o.length<=4?1:2,c=[0,0,0,255];for(let f=0,m=o.length;f<m;f+=l){let _=parseInt(o.substring(f,f+l),16);l===1&&(_+=_<<4),c[f/l]=_}return c[3]=c[3]/255,c}Hr(n)}let e=Yy();e.fillStyle="#abcdef";let t=e.fillStyle;e.fillStyle=n,e.fillStyle===t&&(e.fillStyle="#fedcba",t=e.fillStyle,e.fillStyle=n,e.fillStyle===t&&Hr(n));let i=e.fillStyle;if(i.startsWith("#")||i.startsWith("rgba"))return tp(i);e.clearRect(0,0,1,1),e.fillRect(0,0,1,1);let s=Array.from(e.getImageData(0,0,1,1).data);return s[3]=Ds(s[3]/255,3),s}function np(n){return typeof n=="string"?n:Zr(n)}function ip(n){if(n.length===4)return n;let e=n.slice();return e[3]=1,e}function Ru(n){return n>.0031308?Math.pow(n,1/2.4)*269.025-14.025:n*3294.6}function Iu(n){return n>.2068965?Math.pow(n,3):(n-4/29)*(108/841)}function bu(n){return n>10.314724?Math.pow((n+14.025)/269.025,2.4):n/3294.6}function Su(n){return n>.0088564?Math.pow(n,1/3):n/(108/841)+4/29}function Au(n){let e=bu(n[0]),t=bu(n[1]),i=bu(n[2]),s=Su(e*.222488403+t*.716873169+i*.06060791),o=500*(Su(e*.452247074+t*.399439023+i*.148375274)-s),l=200*(s-Su(e*.016863605+t*.117638439+i*.865350722)),c=Math.atan2(l,o)*(180/Math.PI);return[116*s-16,Math.sqrt(o*o+l*l),c<0?c+360:c,n[3]]}function rp(n){let e=(n[0]+16)/116,t=n[1],i=n[2]*Math.PI/180,s=Iu(e),o=Iu(e+t/500*Math.cos(i)),l=Iu(e-t/200*Math.sin(i)),c=Ru(o*3.021973625-s*1.617392459-l*.404875592),f=Ru(o*-.943766287+s*1.916279586+l*.027607165),m=Ru(o*.069407491-s*.22898585+l*1.159737864);return[ge(c+.5|0,0,255),ge(f+.5|0,0,255),ge(m+.5|0,0,255),n[3]]}function Yr(n){if(n==="none")return Ro;if(qr.hasOwnProperty(n))return qr[n];if(Tu>=e0){let t=0;for(let i in qr)(t++&3)===0&&(delete qr[i],--Tu)}let e=tp(n);e.length!==4&&Hr(n);for(let t of e)isNaN(t)&&Hr(n);return qr[n]=e,++Tu,e}function St(n){return Array.isArray(n)?n:Yr(n)}function Zr(n){let e=n[0];e!=(e|0)&&(e=e+.5|0);let t=n[1];t!=(t|0)&&(t=t+.5|0);let i=n[2];i!=(i|0)&&(i=i+.5|0);let s=n[3]===void 0?1:Math.round(n[3]*1e3)/1e3;return"rgba("+e+","+t+","+i+","+s+")"}var Ro,wu,Zy,$y,Qy,Jy,e0,qr,Tu,Ft=S(()=>{Ze();ke();Ro=[NaN,NaN,NaN,0];Zy=/^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,$y=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,Qy=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,Jy=/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;e0=1024,qr={},Tu=0});function n0(n){return n in Pu}function Qr(n){let e=[];for(let t of t0)Jr(n,t)&&e.push(Pu[t]);return e.length===0?"untyped":e.length<3?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e[e.length-1]}function Jr(n,e){return(n&e)===e}function jn(n,e){return n===e}function Ou(){return{variables:new Set,properties:new Set,featureId:!1,geometryType:!1,mCoordinate:!1,mapState:!1}}function Ue(n,e,t){switch(typeof n){case"boolean":{if(jn(e,nt))return new Re(nt,n?"true":"false");if(!Jr(e,Qe))throw new Error(`got a boolean, but expected ${Qr(e)}`);return new Re(Qe,n)}case"number":{if(jn(e,$r))return new Re($r,ve(n));if(jn(e,Qe))return new Re(Qe,!!n);if(jn(e,nt))return new Re(nt,n.toString());if(!Jr(e,re))throw new Error(`got a number, but expected ${Qr(e)}`);return new Re(re,n)}case"string":{if(jn(e,_t))return new Re(_t,Yr(n));if(jn(e,Qe))return new Re(Qe,!!n);if(!Jr(e,nt))throw new Error(`got a string, but expected ${Qr(e)}`);return new Re(nt,n)}default:}if(!Array.isArray(n))throw new Error("expression must be an array or a primitive value");if(n.length===0)throw new Error("empty expression");if(typeof n[0]=="string")return g0(n,e,t);for(let i of n)if(typeof i!="number")throw new Error("expected an array of numbers");if(jn(e,$r)){if(n.length!==2)throw new Error(`expected an array of two values for a size, got ${n.length}`);return new Re($r,n)}if(jn(e,_t)){if(n.length===3)return new Re(_t,[...n,1]);if(n.length===4)return new Re(_t,n);throw new Error(`expected an array of 3 or 4 values for a color, got ${n.length}`)}if(!Jr(e,Un))throw new Error(`got an array of numbers, but expected ${Qr(e)}`);return new Re(Un,n)}function sp(n,e,t){let i=n.length-1,s=new Array(i);for(let o=0;o<i;++o){let l=n[o+1];switch(typeof l){case"number":{s[o]=new Re(re,l);break}case"string":{s[o]=new Re(nt,l);break}default:throw new Error(`expected a string key or numeric array index for a get operation, got ${l}`)}o===0&&t.properties.add(String(l))}return s}function r0(n,e,t){let i=n[1];if(typeof i!="string")throw new Error("expected a string argument for var operation");return t.variables.add(i),[new Re(nt,i)]}function s0(n,e,t){t.featureId=!0}function o0(n,e,t){t.geometryType=!0}function a0(n,e,t){t.mCoordinate=!0}function Lu(n,e,t){t.mapState=!0}function ar(n,e,t){let i=n[0];if(n.length!==1)throw new Error(`expected no arguments for ${i} operation`);return[]}function te(n,e){return function(t,i,s){let o=t[0],l=t.length-1;if(n===e){if(l!==n){let c=n===1?"":"s";throw new Error(`expected ${n} argument${c} for ${o}, got ${l}`)}}else if(l<n||l>e){let c=e===1/0?`${n} or more`:`${n} to ${e}`;throw new Error(`expected ${c} arguments for ${o}, got ${l}`)}}}function op(n,e,t){let i=n.length-1,s=new Array(i);for(let o=0;o<i;++o){let l=Ue(n[o+1],e,t);s[o]=l}return s}function de(n){return function(e,t,i){let s=e.length-1,o=new Array(s);for(let l=0;l<s;++l){let c=Ue(e[l+1],n,i);o[l]=c}return o}}function l0(n,e,t){let i=n[0],s=n.length-1;if(s%2===0)throw new Error(`expected an odd number of arguments for ${i}, got ${s} instead`)}function ap(n,e,t){let i=n[0],s=n.length-1;if(s%2===1)throw new Error(`expected an even number of arguments for operation ${i}, got ${s} instead`)}function u0(n,e,t){let i=n.length-1,s=nt|re|Qe,o=Ue(n[1],s,t),l=Ue(n[n.length-1],e,t),c=new Array(i-2);for(let f=0;f<i-2;f+=2){try{let m=Ue(n[f+2],o.type,t);c[f]=m}catch(m){throw new Error(`failed to parse argument ${f+1} of match expression: ${m.message}`)}try{let m=Ue(n[f+3],l.type,t);c[f+1]=m}catch(m){throw new Error(`failed to parse argument ${f+2} of match expression: ${m.message}`)}}return[o,...c,l]}function c0(n,e,t){let i=n[1],s;switch(i[0]){case"linear":s=1;break;case"exponential":let f=i[1];if(typeof f!="number"||f<=0)throw new Error(`expected a number base for exponential interpolation, got ${JSON.stringify(f)} instead`);s=f;break;default:throw new Error(`invalid interpolation type: ${JSON.stringify(i)}`)}let o=new Re(re,s),l;try{l=Ue(n[2],re,t)}catch(f){throw new Error(`failed to parse argument 1 in interpolate expression: ${f.message}`)}let c=new Array(n.length-3);for(let f=0;f<c.length;f+=2){try{let m=Ue(n[f+3],re,t);c[f]=m}catch(m){throw new Error(`failed to parse argument ${f+2} for interpolate expression: ${m.message}`)}try{let m=Ue(n[f+4],e,t);c[f+1]=m}catch(m){throw new Error(`failed to parse argument ${f+3} for interpolate expression: ${m.message}`)}}return[o,l,...c]}function h0(n,e,t){let i=Ue(n[n.length-1],e,t),s=new Array(n.length-1);for(let o=0;o<s.length-1;o+=2){try{let l=Ue(n[o+1],Qe,t);s[o]=l}catch(l){throw new Error(`failed to parse argument ${o} of case expression: ${l.message}`)}try{let l=Ue(n[o+2],i.type,t);s[o+1]=l}catch(l){throw new Error(`failed to parse argument ${o+1} of case expression: ${l.message}`)}}return s[s.length-1]=i,s}function f0(n,e,t){let i=n[2];if(!Array.isArray(i))throw new Error('the second argument for the "in" operator must be an array');let s;if(i[0]==="literal"){if(i=i[1],!Array.isArray(i))throw new Error('failed to parse "in" expression: the literal operator must be followed by an array')}else if(typeof i[0]=="string")throw new Error('for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions');typeof i[0]=="string"?s=nt:s=re;let o=new Array(i.length);for(let c=0;c<o.length;c++)try{let f=Ue(i[c],s,t);o[c]=f}catch(f){throw new Error(`failed to parse haystack item ${c} for "in" expression: ${f.message}`)}return[Ue(n[1],s,t),...o]}function d0(n,e,t){let i;try{i=Ue(n[1],re,t)}catch(l){throw new Error(`failed to parse first argument in palette expression: ${l.message}`)}let s=n[2];if(!Array.isArray(s))throw new Error("the second argument of palette must be an array");let o=new Array(s.length);for(let l=0;l<o.length;l++){let c;try{c=Ue(s[l],_t,t)}catch(f){throw new Error(`failed to parse color at index ${l} in palette expression: ${f.message}`)}if(!(c instanceof Re))throw new Error(`the palette color at index ${l} must be a literal value`);o[l]=c}return[i,...o]}function q(...n){return function(e,t,i){let s=e[0],o;for(let l=0;l<n.length;l++){let c=n[l](e,t,i);if(l==n.length-1){if(!c)throw new Error("expected last argument validator to return the parsed args");o=c}}return new Mu(t,s,...o)}}function g0(n,e,t){let i=n[0],s=i0[i];if(!s)throw new Error(`unknown operator: ${i}`);return s(n,e,t)}function Du(n){if(!n)return"";let e=n.getType();switch(e){case"Point":case"LineString":case"Polygon":return e;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return e.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return Du(n.getGeometries()[0]);default:return""}}var ai,Qe,re,nt,_t,Un,$r,Io,Pu,t0,Re,Mu,D,i0,Nu=S(()=>{Ct();Ft();Mt();ai=0,Qe=1<<ai++,re=1<<ai++,nt=1<<ai++,_t=1<<ai++,Un=1<<ai++,$r=1<<ai++,Io=Math.pow(2,ai)-1,Pu={[Qe]:"boolean",[re]:"number",[nt]:"string",[_t]:"color",[Un]:"number[]",[$r]:"size"},t0=Object.keys(Pu).map(Number).sort(Zn);Re=class{constructor(e,t){if(!n0(e))throw new Error(`literal expressions must have a specific type, got ${Qr(e)}`);this.type=e,this.value=t}},Mu=class{constructor(e,t,...i){this.type=e,this.operator=t,this.args=i}};D={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",LineMetric:"line-metric",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Coalesce:"coalesce",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette",ToString:"to-string",Has:"has"},i0={[D.Get]:q(te(1,1/0),sp),[D.Var]:q(te(1,1),r0),[D.Has]:q(te(1,1/0),sp),[D.Id]:q(s0,ar),[D.Concat]:q(te(2,1/0),de(nt)),[D.GeometryType]:q(o0,ar),[D.LineMetric]:q(a0,ar),[D.Resolution]:q(Lu,ar),[D.Zoom]:q(Lu,ar),[D.Time]:q(Lu,ar),[D.Any]:q(te(2,1/0),de(Qe)),[D.All]:q(te(2,1/0),de(Qe)),[D.Not]:q(te(1,1),de(Qe)),[D.Equal]:q(te(2,2),de(Io)),[D.NotEqual]:q(te(2,2),de(Io)),[D.GreaterThan]:q(te(2,2),de(re)),[D.GreaterThanOrEqualTo]:q(te(2,2),de(re)),[D.LessThan]:q(te(2,2),de(re)),[D.LessThanOrEqualTo]:q(te(2,2),de(re)),[D.Multiply]:q(te(2,1/0),op),[D.Coalesce]:q(te(2,1/0),op),[D.Divide]:q(te(2,2),de(re)),[D.Add]:q(te(2,1/0),de(re)),[D.Subtract]:q(te(2,2),de(re)),[D.Clamp]:q(te(3,3),de(re)),[D.Mod]:q(te(2,2),de(re)),[D.Pow]:q(te(2,2),de(re)),[D.Abs]:q(te(1,1),de(re)),[D.Floor]:q(te(1,1),de(re)),[D.Ceil]:q(te(1,1),de(re)),[D.Round]:q(te(1,1),de(re)),[D.Sin]:q(te(1,1),de(re)),[D.Cos]:q(te(1,1),de(re)),[D.Atan]:q(te(1,2),de(re)),[D.Sqrt]:q(te(1,1),de(re)),[D.Match]:q(te(4,1/0),ap,u0),[D.Between]:q(te(3,3),de(re)),[D.Interpolate]:q(te(6,1/0),ap,c0),[D.Case]:q(te(3,1/0),l0,h0),[D.In]:q(te(2,2),f0),[D.Number]:q(te(1,1/0),de(Io)),[D.String]:q(te(1,1/0),de(Io)),[D.Array]:q(te(1,1/0),de(re)),[D.Color]:q(te(1,4),de(re)),[D.Band]:q(te(1,3),de(re)),[D.Palette]:q(te(2,2),d0),[D.ToString]:q(te(1,1),de(Qe|re|nt|_t))}});function Fu(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function zt(n,e,t){let i=Ue(n,e,t);return kt(i,t)}function kt(n,e){if(n instanceof Re){if(n.type===_t&&typeof n.value=="string"){let i=Yr(n.value);return function(){return i}}return function(){return n.value}}let t=n.operator;switch(t){case D.Number:case D.String:case D.Coalesce:return p0(n,e);case D.Get:case D.Var:case D.Has:return m0(n,e);case D.Id:return i=>i.featureId;case D.GeometryType:return i=>i.geometryType;case D.Concat:{let i=n.args.map(s=>kt(s,e));return s=>"".concat(...i.map(o=>o(s).toString()))}case D.Resolution:return i=>i.resolution;case D.Any:case D.All:case D.Between:case D.In:case D.Not:return y0(n,e);case D.Equal:case D.NotEqual:case D.LessThan:case D.LessThanOrEqualTo:case D.GreaterThan:case D.GreaterThanOrEqualTo:return _0(n,e);case D.Multiply:case D.Divide:case D.Add:case D.Subtract:case D.Clamp:case D.Mod:case D.Pow:case D.Abs:case D.Floor:case D.Ceil:case D.Round:case D.Sin:case D.Cos:case D.Atan:case D.Sqrt:return x0(n,e);case D.Case:return E0(n,e);case D.Match:return v0(n,e);case D.Interpolate:return C0(n,e);case D.ToString:return w0(n,e);default:throw new Error(`Unsupported operator ${t}`)}}function p0(n,e){let t=n.operator,i=n.args.length,s=new Array(i);for(let o=0;o<i;++o)s[o]=kt(n.args[o],e);switch(t){case D.Coalesce:return o=>{for(let l=0;l<i;++l){let c=s[l](o);if(typeof c<"u"&&c!==null)return c}throw new Error("Expected one of the values to be non-null")};case D.Number:case D.String:return o=>{for(let l=0;l<i;++l){let c=s[l](o);if(typeof c===t)return c}throw new Error(`Expected one of the values to be a ${t}`)};default:throw new Error(`Unsupported assertion operator ${t}`)}}function m0(n,e){let i=n.args[0].value;switch(n.operator){case D.Get:return s=>{let o=n.args,l=s.properties[i];for(let c=1,f=o.length;c<f;++c){let _=o[c].value;l=l[_]}return l};case D.Var:return s=>s.variables[i];case D.Has:return s=>{let o=n.args;if(!(i in s.properties))return!1;let l=s.properties[i];for(let c=1,f=o.length;c<f;++c){let _=o[c].value;if(!l||!Object.hasOwn(l,_))return!1;l=l[_]}return!0};default:throw new Error(`Unsupported accessor operator ${n.operator}`)}}function _0(n,e){let t=n.operator,i=kt(n.args[0],e),s=kt(n.args[1],e);switch(t){case D.Equal:return o=>i(o)===s(o);case D.NotEqual:return o=>i(o)!==s(o);case D.LessThan:return o=>i(o)<s(o);case D.LessThanOrEqualTo:return o=>i(o)<=s(o);case D.GreaterThan:return o=>i(o)>s(o);case D.GreaterThanOrEqualTo:return o=>i(o)>=s(o);default:throw new Error(`Unsupported comparison operator ${t}`)}}function y0(n,e){let t=n.operator,i=n.args.length,s=new Array(i);for(let o=0;o<i;++o)s[o]=kt(n.args[o],e);switch(t){case D.Any:return o=>{for(let l=0;l<i;++l)if(s[l](o))return!0;return!1};case D.All:return o=>{for(let l=0;l<i;++l)if(!s[l](o))return!1;return!0};case D.Between:return o=>{let l=s[0](o),c=s[1](o),f=s[2](o);return l>=c&&l<=f};case D.In:return o=>{let l=s[0](o);for(let c=1;c<i;++c)if(l===s[c](o))return!0;return!1};case D.Not:return o=>!s[0](o);default:throw new Error(`Unsupported logical operator ${t}`)}}function x0(n,e){let t=n.operator,i=n.args.length,s=new Array(i);for(let o=0;o<i;++o)s[o]=kt(n.args[o],e);switch(t){case D.Multiply:return o=>{let l=1;for(let c=0;c<i;++c)l*=s[c](o);return l};case D.Divide:return o=>s[0](o)/s[1](o);case D.Add:return o=>{let l=0;for(let c=0;c<i;++c)l+=s[c](o);return l};case D.Subtract:return o=>s[0](o)-s[1](o);case D.Clamp:return o=>{let l=s[0](o),c=s[1](o);if(l<c)return c;let f=s[2](o);return l>f?f:l};case D.Mod:return o=>s[0](o)%s[1](o);case D.Pow:return o=>Math.pow(s[0](o),s[1](o));case D.Abs:return o=>Math.abs(s[0](o));case D.Floor:return o=>Math.floor(s[0](o));case D.Ceil:return o=>Math.ceil(s[0](o));case D.Round:return o=>Math.round(s[0](o));case D.Sin:return o=>Math.sin(s[0](o));case D.Cos:return o=>Math.cos(s[0](o));case D.Atan:return i===2?o=>Math.atan2(s[0](o),s[1](o)):o=>Math.atan(s[0](o));case D.Sqrt:return o=>Math.sqrt(s[0](o));default:throw new Error(`Unsupported numeric operator ${t}`)}}function E0(n,e){let t=n.args.length,i=new Array(t);for(let s=0;s<t;++s)i[s]=kt(n.args[s],e);return s=>{for(let o=0;o<t-1;o+=2)if(i[o](s))return i[o+1](s);return i[t-1](s)}}function v0(n,e){let t=n.args.length,i=new Array(t);for(let s=0;s<t;++s)i[s]=kt(n.args[s],e);return s=>{let o=i[0](s);for(let l=1;l<t-1;l+=2)if(o===i[l](s))return i[l+1](s);return i[t-1](s)}}function C0(n,e){let t=n.args.length,i=new Array(t);for(let s=0;s<t;++s)i[s]=kt(n.args[s],e);return s=>{let o=i[0](s),l=i[1](s),c,f;for(let m=2;m<t;m+=2){let _=i[m](s),x=i[m+1](s),C=Array.isArray(x);if(C&&(x=ip(x)),_>=l)return m===2?x:C?T0(o,l,c,f,_,x):es(o,l,c,f,_,x);c=_,f=x}return f}}function w0(n,e){let t=n.operator,i=n.args.length,s=new Array(i);for(let o=0;o<i;++o)s[o]=kt(n.args[o],e);if(t===D.ToString)return o=>{let l=s[0](o);return n.args[0].type===_t?Zr(l):l.toString()};throw new Error(`Unsupported convert operator ${t}`)}function es(n,e,t,i,s,o){let l=s-t;if(l===0)return i;let c=e-t,f=n===1?c/l:(Math.pow(n,c)-1)/(Math.pow(n,l)-1);return i+f*(o-i)}function T0(n,e,t,i,s,o){if(s-t===0)return i;let c=Au(i),f=Au(o),m=f[2]-c[2];m>180?m-=360:m<-180&&(m+=360);let _=[es(n,e,t,c[0],s,f[0]),es(n,e,t,c[1],s,f[1]),c[2]+es(n,e,t,0,s,m),es(n,e,t,i[3],s,o[3])];return rp(_)}var lp=S(()=>{Ft();Nu()});function ku(n,e){let t=e?St(e):"null";return n+":"+t}var zu,Je,ts=S(()=>{bn();Ft();Ze();zu=class{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=1024}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(let t in this.cache_){let i=this.cache_[t];(e++&3)===0&&!i.hasListener()&&(delete this.cache_[t],delete this.patternCache_[t],--this.cacheSize_)}}}get(e,t){let i=ku(e,t);return i in this.cache_?this.cache_[i]:null}getPattern(e,t){let i=ku(e,t);return i in this.patternCache_?this.patternCache_[i]:null}set(e,t,i,s){let o=ku(e,t),l=o in this.cache_;this.cache_[o]=i,s&&(i.getImageState()===$.IDLE&&i.load(),i.getImageState()===$.LOADING?i.ready().then(()=>{this.patternCache_[o]=Di().createPattern(i.getImage(1),"repeat")}):this.patternCache_[o]=Di().createPattern(i.getImage(1),"repeat")),l||++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}};Je=new zu});function Gn(n,e,t,i,s,o){let l=e===void 0?void 0:Je.get(e,s);return l||(l=new bo(n,n&&"src"in n?n.src||void 0:e,t,i,s),Je.set(e,s,l,o)),o&&l&&!Je.getPattern(e,s)&&Je.set(e,s,l,o),l}var ns,bo,up,is=S(()=>{Ia();bn();Ft();Ze();Te();Ir();ts();ns=null,bo=class extends Ln{constructor(e,t,i,s,o){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=i?.crossOrigin,this.referrerPolicy_=i?.referrerPolicy,this.canvas_={},this.color_=o,this.imageState_=s===void 0?$.IDLE:s,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=t,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===$.LOADED){ns||(ns=Ce(1,1,void 0,{willReadFrequently:!0})),ns.drawImage(this.image_,0,0);try{ns.getImageData(0,0,1,1),this.tainted_=!1}catch{ns=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(V.CHANGE)}handleImageError_(){this.imageState_=$.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=$.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}setImage(e){this.image_=e}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){let e=this.size_[0],t=this.size_[1],i=Ce(e,t);i.fillRect(0,0,e,t),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===$.IDLE){this.image_||this.initializeImage_(),this.imageState_=$.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&ff(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==$.LOADED)return;let t=this.image_,i=Ce(Math.ceil(t.width*e),Math.ceil(t.height*e)),s=i.canvas;i.scale(e,e),i.drawImage(t,0,0),i.globalCompositeOperation="multiply",i.fillStyle=np(this.color_),i.fillRect(0,0,s.width/e,s.height/e),i.globalCompositeOperation="destination-in",i.drawImage(t,0,0),this.canvas_[e]=s}ready(){return this.ready_||(this.ready_=new Promise(e=>{if(this.imageState_===$.LOADED||this.imageState_===$.ERROR)e();else{let t=()=>{(this.imageState_===$.LOADED||this.imageState_===$.ERROR)&&(this.removeEventListener(V.CHANGE,t),e())};this.addEventListener(V.CHANGE,t)}})),this.ready_}};up=bo});function ju(n){return n?Array.isArray(n)?Zr(n):typeof n=="object"&&"src"in n?R0(n):n:null}function R0(n){if(!n.offset||!n.size)return Je.getPattern(n.src,n.color);let e=n.src+":"+n.offset,t=Je.getPattern(e,n.color);if(t)return t;let i=Je.get(n.src,null);if(i.getImageState()!==$.LOADED)return null;let s=Ce(n.size[0],n.size[1]);return s.drawImage(i.getImage(1),n.offset[0],n.offset[1],n.size[0],n.size[1],0,0,n.size[0],n.size[1]),Gn(s.canvas,e,void 0,$.LOADED,n.color,!0),Je.getPattern(e,n.color)}var cp=S(()=>{bn();Ft();Ze();is();ts()});var Uu,Gu,Xu,hp,fp,dp,gp,Wu=S(()=>{qt();Uu="#000",Gu="round",Xu="round",hp=10,fp="#000",dp=1,gp=new je});var Vu,So,Ku=S(()=>{Mt();ze();Vu=class n{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=ve(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){let e=this.getScale();return new n({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return ne()}getImage(e){return ne()}getHitDetectionImage(){return ne()}getPixelRatio(e){return 1}getImageState(){return ne()}getImageSize(){return ne()}getOrigin(){return ne()}getSize(){return ne()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=ve(e)}listenImageChange(e){ne()}load(){ne()}unlistenImageChange(e){ne()}ready(){return Promise.resolve()}},So=Vu});var Bu,Ao,qu=S(()=>{bn();Ft();cp();Ze();Wu();is();ts();Ku();Bu=class n extends So{constructor(e){super({opacity:1,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode}),this.hitDetectionCanvas_=null,this.fill_=e.fill!==void 0?e.fill:null,this.origin_=[0,0],this.points_=e.points,this.radius=e.radius,this.radius2_=e.radius2,this.angle_=e.angle!==void 0?e.angle:0,this.stroke_=e.stroke!==void 0?e.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?$.LOADING:$.LOADED,this.imageState_===$.LOADING&&this.ready().then(()=>this.imageState_=$.LOADED),this.render()}clone(){let e=this.getScale(),t=new n({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}getAnchor(){let e=this.size_,t=this.getDisplacement(),i=this.getScaleArray();return[e[0]/2-t[0]/i[0],e[1]/2+t[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(e){let t=this.fill_?.getKey(),i=`${e},${this.angle_},${this.radius},${this.radius2_},${this.points_},${t}`+Object.values(this.renderOptions_).join(","),s=Je.get(i,null)?.getImage(1);if(!s){let o=this.renderOptions_,l=Math.ceil(o.size*e),c=Ce(l,l);this.draw_(o,c,e),s=c.canvas;let f=new up(s,void 0,null,$.LOADED,null);Je.set(i,null,f),createImageBitmap(s).then(m=>{f.setImage(m)})}return s}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius}setRadius(e){this.radius!==e&&(this.radius=e,this.render())}getRadius2(){return this.radius2_}setRadius2(e){this.radius2_!==e&&(this.radius2_=e,this.render())}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,t,i){if(t===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return t;let s=this.radius,o=this.radius2_===void 0?s:this.radius2_;if(s<o){let d=s;s=o,o=d}let l=this.radius2_===void 0?this.points_:this.points_*2,c=2*Math.PI/l,f=o*Math.sin(c),m=Math.sqrt(o*o-f*f),_=s-m,x=Math.sqrt(f*f+_*_),C=x/f;if(e==="miter"&&C<=i)return C*t;let T=t/2/C,R=t/2*(_/x),P=Math.sqrt((s+T)*(s+T)+R*R)-s;if(this.radius2_===void 0||e==="bevel")return P*2;let O=s*Math.sin(c),z=Math.sqrt(s*s-O*O),j=o-z,F=Math.sqrt(O*O+j*j)/O;if(F<=i){let d=F*t/2-o-s;return 2*Math.max(P,d)}return P*2}createRenderOptions(){let e=Gu,t=Xu,i=0,s=null,o=0,l,c=0;this.stroke_&&(l=ju(this.stroke_.getColor()??fp),c=this.stroke_.getWidth()??dp,s=this.stroke_.getLineDash(),o=this.stroke_.getLineDashOffset()??0,t=this.stroke_.getLineJoin()??Xu,e=this.stroke_.getLineCap()??Gu,i=this.stroke_.getMiterLimit()??hp);let f=this.calculateLineJoinSize_(t,c,i),m=Math.max(this.radius,this.radius2_||0),_=Math.ceil(2*m+f);return{strokeStyle:l,strokeWidth:c,size:_,lineCap:e,lineDash:s,lineDashOffset:o,lineJoin:t,miterLimit:i}}render(){this.renderOptions_=this.createRenderOptions();let e=this.renderOptions_.size;this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,t,i){if(t.scale(i,i),t.translate(e.size/2,e.size/2),this.createPath_(t),this.fill_){let s=this.fill_.getColor();s===null&&(s=Uu),t.fillStyle=ju(s),t.fill()}e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}createHitDetectionCanvas_(e){let t;if(this.fill_){let i=this.fill_.getColor(),s=0;typeof i=="string"&&(i=St(i)),i===null?s=1:Array.isArray(i)&&(s=i.length===4?i[3]:1),s===0&&(t=Ce(e.size,e.size),this.drawHitDetectionCanvas_(e,t))}return t?t.canvas:this.getImage(1)}createPath_(e){let t=this.points_,i=this.radius;if(t===1/0)e.arc(0,0,i,0,2*Math.PI);else{let s=this.radius2_===void 0?i:this.radius2_;this.radius2_!==void 0&&(t*=2);let o=this.angle_-Math.PI/2,l=2*Math.PI/t;for(let c=0;c<t;c++){let f=o+c*l,m=c%2===0?i:s;e.lineTo(m*Math.cos(f),m*Math.sin(f))}e.closePath()}}drawHitDetectionCanvas_(e,t){t.translate(e.size/2,e.size/2),this.createPath_(t),t.fillStyle=Uu,t.fill(),e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}},Ao=Bu});var Hu,Lo,Yu=S(()=>{qu();Hu=class n extends Ao{constructor(e){e=e||{radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale!==void 0?e.scale:1,rotation:e.rotation!==void 0?e.rotation:0,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode})}clone(){let e=this.getScale(),t=new n({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}},Lo=Hu});var Zu,li,Mo=S(()=>{bn();Ft();ze();is();Zu=class n{constructor(e){e=e||{},this.patternImage_=null,this.color_=null,e.color!==void 0&&this.setColor(e.color)}clone(){let e=this.getColor();return new n({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(e){if(e!==null&&typeof e=="object"&&"src"in e){let t=Gn(null,e.src,{crossOrigin:"anonymous"},void 0,e.offset?null:e.color?e.color:null,!(e.offset&&e.size));t.ready().then(()=>{this.patternImage_=null}),t.getImageState()===$.IDLE&&t.load(),t.getImageState()===$.LOADING&&(this.patternImage_=t)}this.color_=e}getKey(){let e=this.getColor();return e?e instanceof CanvasPattern||e instanceof CanvasGradient?me(e):typeof e=="object"&&"src"in e?e.src+":"+e.offset:St(e).toString():""}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}},li=Zu});function pp(n,e,t,i){return t!==void 0&&i!==void 0?[t/n,i/e]:t!==void 0?t/n:i!==void 0?i/e:1}var $u,mp,_p=S(()=>{bn();lt();Ft();Te();ze();is();Ku();$u=class n extends So{constructor(e){e=e||{};let t=e.opacity!==void 0?e.opacity:1,i=e.rotation!==void 0?e.rotation:0,s=e.scale!==void 0?e.scale:1,o=e.rotateWithView!==void 0?e.rotateWithView:!1;super({opacity:t,rotation:i,scale:s,displacement:e.displacement!==void 0?e.displacement:[0,0],rotateWithView:o,declutterMode:e.declutterMode}),this.anchor_=e.anchor!==void 0?e.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin!==void 0?e.anchorOrigin:"top-left",this.anchorXUnits_=e.anchorXUnits!==void 0?e.anchorXUnits:"fraction",this.anchorYUnits_=e.anchorYUnits!==void 0?e.anchorYUnits:"fraction",this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null,this.referrerPolicy_=e.referrerPolicy;let l=e.img!==void 0?e.img:null,c=e.src;ee(!(c!==void 0&&l),"`image` and `src` cannot be provided at the same time"),(c===void 0||c.length===0)&&l&&(c=l.src||me(l)),ee(c!==void 0&&c.length>0,"A defined and non-empty `src` or `image` must be provided"),ee(!((e.width!==void 0||e.height!==void 0)&&e.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let f;if(e.src!==void 0?f=$.IDLE:l!==void 0&&("complete"in l?l.complete?f=l.src?$.LOADED:$.IDLE:f=$.LOADING:f=$.LOADED),this.color_=e.color!==void 0?St(e.color):null,this.iconImage_=Gn(l,c,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},f,this.color_),this.offset_=e.offset!==void 0?e.offset:[0,0],this.offsetOrigin_=e.offsetOrigin!==void 0?e.offsetOrigin:"top-left",this.origin_=null,this.size_=e.size!==void 0?e.size:null,this.initialOptions_,e.width!==void 0||e.height!==void 0){let m,_;if(e.size)[m,_]=e.size;else{let x=this.getImage(1);if(x.width&&x.height)m=x.width,_=x.height;else if(x instanceof HTMLImageElement){this.initialOptions_=e;let C=()=>{if(this.unlistenImageChange(C),!this.initialOptions_)return;let T=this.iconImage_.getSize();this.setScale(pp(T[0],T[1],e.width,e.height))};this.listenImageChange(C);return}}m!==void 0&&this.setScale(pp(m,_,e.width,e.height))}}clone(){let e,t,i;return this.initialOptions_?(t=this.initialOptions_.width,i=this.initialOptions_.height):(e=this.getScale(),e=Array.isArray(e)?e.slice():e),new n({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:e,width:t,height:i,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;let s=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!s)return null;e=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(e[0]*=s[0]),this.anchorYUnits_=="fraction"&&(e[1]*=s[1])}if(this.anchorOrigin_!="top-left"){if(!s)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(e[0]=-e[0]+s[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(e[1]=-e[1]+s[1])}this.normalizedAnchor_=e}let t=this.getDisplacement(),i=this.getScaleArray();return[e[0]-t[0]/i[0],e[1]+t[1]/i[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}setColor(e){let t=e?St(e):null;if(this.color_===t||this.color_&&t&&this.color_.length===t.length&&this.color_.every((l,c)=>l===t[c]))return;this.color_=t;let i=this.getSrc(),s=i!==void 0?null:this.getHitDetectionImage(),o=i!==void 0?$.IDLE:this.iconImage_.getImageState();this.iconImage_=Gn(s,i,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},o,this.color_)}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!="top-left"){let t=this.getSize(),i=this.iconImage_.getSize();if(!t||!i)return null;e=e.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(e[0]=i[0]-t[0]-e[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(e[1]=i[1]-t[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}setSrc(e){this.iconImage_=Gn(null,e,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},$.IDLE,this.color_)}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==$.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){let e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==$.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(V.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(V.CHANGE,e)}ready(){return this.iconImage_.ready()}},mp=$u});var Qu,Po,Ju=S(()=>{Qu=class n{constructor(e){e=e||{},this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.offset_=e.offset,this.width_=e.width}clone(){let e=this.getColor();return new n({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),offset:this.getOffset(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getOffset(){return this.offset_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setOffset(e){this.offset_=e}setWidth(e){this.width_=e}},Po=Qu});function xp(n){let e;if(typeof n=="function")e=n;else{let t;Array.isArray(n)?t=n:(ee(typeof n.getZIndex=="function","Expected an `Style` or an array of `Style`"),t=[n]),e=function(){return t}}return e}function tc(n,e){if(!ec){let t=new li({color:"rgba(255,255,255,0.4)"}),i=new Po({color:"#3399CC",width:1.25});ec=[new Oo({image:new Lo({fill:t,stroke:i,radius:5}),fill:t,stroke:i})]}return ec}function yp(n){return n.getGeometry()}var Oo,ec,lr,nc=S(()=>{lt();Yu();Mo();Ju();Oo=class n{constructor(e){e=e||{},this.geometry_=null,this.geometryFunction_=yp,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}clone(){let e=this.getGeometry();return e&&typeof e=="object"&&(e=e.clone()),new n({geometry:e??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e=="function"?this.geometryFunction_=e:typeof e=="string"?this.geometryFunction_=function(t){return t.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=yp,this.geometry_=e}setZIndex(e){this.zIndex_=e}};ec=null;lr=Oo});var I0,ic,Ep,vp=S(()=>{Mt();Mo();I0="#333",ic=class n{constructor(e){e=e||{},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.keepUpright_=e.keepUpright,this.scale_=e.scale,this.scaleArray_=ve(e.scale!==void 0?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill!==void 0?e.fill:new li({color:I0}),this.maxAngle_=e.maxAngle!==void 0?e.maxAngle:Math.PI/4,this.placement_=e.placement!==void 0?e.placement:"point",this.overflow_=!!e.overflow,this.stroke_=e.stroke!==void 0?e.stroke:null,this.offsetX_=e.offsetX!==void 0?e.offsetX:0,this.offsetY_=e.offsetY!==void 0?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding,this.declutterMode_=e.declutterMode}clone(){let e=this.getScale();return new n({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),keepUpright:this.getKeepUpright(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()instanceof li?this.getFill().clone():this.getFill(),stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getKeepUpright(){return this.keepUpright_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setKeepUpright(e){this.keepUpright_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=ve(e!==void 0?e:1)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}},Ep=ic});function b0(n){return!0}function Rp(n){let e=Ou(),t=S0(n,e),i=Fu();return function(s,o){if(i.properties=s.getPropertiesInternal(),i.resolution=o,e.featureId){let l=s.getId();l!==void 0?i.featureId=l:i.featureId=null}return e.geometryType&&(i.geometryType=Du(s.getGeometry())),t(i)}}function oc(n){let e=Ou(),t=n.length,i=new Array(t);for(let l=0;l<t;++l)i[l]=rc(n[l],e);let s=Fu(),o=new Array(t);return function(l,c){if(s.properties=l.getPropertiesInternal(),s.resolution=c,e.featureId){let m=l.getId();m!==void 0?s.featureId=m:s.featureId=null}let f=0;for(let m=0;m<t;++m){let _=i[m](s);_&&(o[f]=_,f+=1)}return o.length=f,o}}function S0(n,e){let t=n.length,i=new Array(t);for(let s=0;s<t;++s){let o=n[s],l="filter"in o?zt(o.filter,Qe,e):b0,c;if(Array.isArray(o.style)){let f=o.style.length;c=new Array(f);for(let m=0;m<f;++m)c[m]=rc(o.style[m],e)}else c=[rc(o.style,e)];i[s]={filter:l,styles:c}}return function(s){let o=[],l=!1;for(let c=0;c<t;++c){let f=i[c].filter;if(f(s)&&!(n[c].else&&l)){l=!0;for(let m of i[c].styles){let _=m(s);_&&o.push(_)}}}return o}}function rc(n,e){let t=rs(n,"",e),i=ss(n,"",e),s=A0(n,e),o=L0(n,e),l=Be(n,"z-index",e);if(!t&&!i&&!s&&!o&&!zs(n))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(n));let c=new lr;return function(f){let m=!0;if(t){let _=t(f);_&&(m=!1),c.setFill(_)}if(i){let _=i(f);_&&(m=!1),c.setStroke(_)}if(s){let _=s(f);_&&(m=!1),c.setText(_)}if(o){let _=o(f);_&&(m=!1),c.setImage(_)}return l&&c.setZIndex(l(f)),m?null:c}}function rs(n,e,t){let i;if(e+"fill-pattern-src"in n)i=D0(n,e+"fill-",t);else{if(n[e+"fill-color"]==="none")return o=>null;i=No(n,e+"fill-color",t)}if(!i)return null;let s=new li;return function(o){let l=i(o);return l===Ro?null:(s.setColor(l),s)}}function ss(n,e,t){let i=Be(n,e+"stroke-width",t),s=No(n,e+"stroke-color",t);if(!i&&!s)return null;let o=mn(n,e+"stroke-line-cap",t),l=mn(n,e+"stroke-line-join",t),c=Ip(n,e+"stroke-line-dash",t),f=Be(n,e+"stroke-line-dash-offset",t),m=Be(n,e+"stroke-miter-limit",t),_=Be(n,e+"stroke-offset",t),x=new Po;return function(C){if(s){let T=s(C);if(T===Ro)return null;x.setColor(T)}if(i&&x.setWidth(i(C)),o){let T=o(C);if(T!=="butt"&&T!=="round"&&T!=="square")throw new Error("Expected butt, round, or square line cap");x.setLineCap(T)}if(l){let T=l(C);if(T!=="bevel"&&T!=="round"&&T!=="miter")throw new Error("Expected bevel, round, or miter line join");x.setLineJoin(T)}return c&&x.setLineDash(c(C)),f&&x.setLineDashOffset(f(C)),m&&x.setMiterLimit(m(C)),_&&x.setOffset(_(C)),x}}function A0(n,e){let t="text-",i=mn(n,t+"value",e);if(!i)return null;let s=rs(n,t,e),o=rs(n,t+"background-",e),l=ss(n,t,e),c=ss(n,t+"background-",e),f=mn(n,t+"font",e),m=Be(n,t+"max-angle",e),_=Be(n,t+"offset-x",e),x=Be(n,t+"offset-y",e),C=ur(n,t+"overflow",e),T=mn(n,t+"placement",e),R=Be(n,t+"repeat",e),M=Fo(n,t+"scale",e),P=ur(n,t+"rotate-with-view",e),O=Be(n,t+"rotation",e),z=mn(n,t+"align",e),j=mn(n,t+"justify",e),N=mn(n,t+"baseline",e),F=ur(n,t+"keep-upright",e),d=Ip(n,t+"padding",e),K=ko(n,t+"declutter-mode"),W=new Ep({declutterMode:K});return function(k){if(W.setText(i(k)),s&&W.setFill(s(k)),o&&W.setBackgroundFill(o(k)),l&&W.setStroke(l(k)),c&&W.setBackgroundStroke(c(k)),f&&W.setFont(f(k)),m&&W.setMaxAngle(m(k)),_&&W.setOffsetX(_(k)),x&&W.setOffsetY(x(k)),C&&W.setOverflow(C(k)),T){let U=T(k);if(U!=="point"&&U!=="line")throw new Error("Expected point or line for text-placement");W.setPlacement(U)}if(R&&W.setRepeat(R(k)),M&&W.setScale(M(k)),P&&W.setRotateWithView(P(k)),O&&W.setRotation(O(k)),z){let U=z(k);if(U!=="left"&&U!=="center"&&U!=="right"&&U!=="end"&&U!=="start")throw new Error("Expected left, right, center, start, or end for text-align");W.setTextAlign(U)}if(j){let U=j(k);if(U!=="left"&&U!=="right"&&U!=="center")throw new Error("Expected left, right, or center for text-justify");W.setJustify(U)}if(N){let U=N(k);if(U!=="bottom"&&U!=="top"&&U!=="middle"&&U!=="alphabetic"&&U!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");W.setTextBaseline(U)}return d&&W.setPadding(d(k)),F&&W.setKeepUpright(F(k)),W}}function L0(n,e){return"icon-src"in n?M0(n,e):"shape-points"in n?P0(n,e):"circle-radius"in n?O0(n,e):null}function M0(n,e){let t="icon-",i=t+"src",s=bp(n[i],i),o=Do(n,t+"anchor",e),l=Fo(n,t+"scale",e),c=Be(n,t+"opacity",e),f=Do(n,t+"displacement",e),m=Be(n,t+"rotation",e),_=ur(n,t+"rotate-with-view",e),x=wp(n,t+"anchor-origin"),C=Tp(n,t+"anchor-x-units"),T=Tp(n,t+"anchor-y-units"),R=_n(n,t+"color"),M,P=null;R!==void 0&&(Array.isArray(R)&&R.length>0&&typeof R[0]=="string"?P=No(n,t+"color",e):M=Sp(R,t+"color"));let O=F0(n,t+"cross-origin"),z=k0(n,t+"offset"),j=wp(n,t+"offset-origin"),N=sc(n,t+"width"),F=sc(n,t+"height"),d=N0(n,t+"size"),K=ko(n,t+"declutter-mode"),W={src:s,anchorOrigin:x,anchorXUnits:C,anchorYUnits:T,crossOrigin:O,offset:z,offsetOrigin:j,height:F,width:N,size:d,declutterMode:K},k=null;return function(U){if(k)P&&k.setColor(P(U));else{let se=P?P(U):M;k=new mp(se!==void 0?Object.assign({},W,{color:se}):Object.assign({},W))}return c&&k.setOpacity(c(U)),f&&k.setDisplacement(f(U)),m&&k.setRotation(m(U)),_&&k.setRotateWithView(_(U)),l&&k.setScale(l(U)),o&&k.setAnchor(o(U)),k}}function P0(n,e){let t="shape-",i=t+"points",s=t+"radius",o=ac(n[i],i);if(!(s in n))throw new Error(`Expected a number for ${s}`);let l=Be(n,s,e),c=typeof n[s]=="number"?n[s]:5,f=t+"radius2",m=Be(n,f,e),_=typeof n[f]=="number"?n[f]:void 0,x=rs(n,t,e),C=ss(n,t,e),T=Fo(n,t+"scale",e),R=Do(n,t+"displacement",e),M=Be(n,t+"rotation",e),P=ur(n,t+"rotate-with-view",e),O=sc(n,t+"angle"),z=ko(n,t+"declutter-mode"),j=new Ao({points:o,radius:c,radius2:_,angle:O,declutterMode:z});return function(N){return l&&j.setRadius(l(N)),m&&j.setRadius2(m(N)),x&&j.setFill(x(N)),C&&j.setStroke(C(N)),R&&j.setDisplacement(R(N)),M&&j.setRotation(M(N)),P&&j.setRotateWithView(P(N)),T&&j.setScale(T(N)),j}}function O0(n,e){let t="circle-",i=rs(n,t,e),s=ss(n,t,e),o=Be(n,t+"radius",e),l=Fo(n,t+"scale",e),c=Do(n,t+"displacement",e),f=Be(n,t+"rotation",e),m=ur(n,t+"rotate-with-view",e),_=ko(n,t+"declutter-mode"),x=new Lo({radius:5,declutterMode:_});return function(C){return o&&x.setRadius(o(C)),i&&x.setFill(i(C)),s&&x.setStroke(s(C)),c&&x.setDisplacement(c(C)),f&&x.setRotation(f(C)),m&&x.setRotateWithView(m(C)),l&&x.setScale(l(C)),x}}function _n(n,e){if(!(e in n))return;let t=n[e];return t===void 0?void 0:t}function Be(n,e,t){let i=_n(n,e);if(i===void 0)return;let s=zt(i,re,t);return function(o){return ac(s(o),e)}}function mn(n,e,t){let i=_n(n,e);if(i===void 0)return null;let s=zt(i,nt,t);return function(o){return bp(s(o),e)}}function D0(n,e,t){let i=mn(n,e+"pattern-src",t),s=Cp(n,e+"pattern-offset",t),o=Cp(n,e+"pattern-size",t),l=No(n,e+"color",t);return function(c){return{src:i(c),offset:s&&s(c),size:o&&o(c),color:l&&l(c)}}}function ur(n,e,t){let i=_n(n,e);if(i===void 0)return null;let s=zt(i,Qe,t);return function(o){let l=s(o);if(typeof l!="boolean")throw new Error(`Expected a boolean for ${e}`);return l}}function No(n,e,t){let i=_n(n,e);if(i===void 0)return null;let s=zt(i,_t,t);return function(o){return Sp(s(o),e)}}function Ip(n,e,t){let i=_n(n,e);if(i===void 0)return null;if(Array.isArray(i)&&(i.length===0||typeof i[0]!="string")){let o=i.map((l,c)=>{if(typeof l=="number")return()=>l;let f=zt(l,re,t);return function(m){return ac(f(m),`${e}[${c}]`)}});return function(l){let c=new Array(o.length);for(let f=0;f<o.length;++f)c[f]=o[f](l);return c}}let s=zt(i,Un,t);return function(o){return os(s(o),e)}}function Do(n,e,t){let i=_n(n,e);if(i===void 0)return null;let s=zt(i,Un,t);return function(o){let l=os(s(o),e);if(l.length!==2)throw new Error(`Expected two numbers for ${e}`);return l}}function Cp(n,e,t){let i=_n(n,e);if(i===void 0)return null;let s=zt(i,Un,t);return function(o){return Ap(s(o),e)}}function Fo(n,e,t){let i=_n(n,e);if(i===void 0)return null;let s=zt(i,Un|re,t);return function(o){return z0(s(o),e)}}function sc(n,e){let t=n[e];if(t!==void 0){if(typeof t!="number")throw new Error(`Expected a number for ${e}`);return t}}function N0(n,e){let t=n[e];if(t!==void 0){if(typeof t=="number")return ve(t);if(!Array.isArray(t))throw new Error(`Expected a number or size array for ${e}`);if(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number")throw new Error(`Expected a number or size array for ${e}`);return t}}function F0(n,e){let t=n[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);return t}}function wp(n,e){let t=n[e];if(t!==void 0){if(t!=="bottom-left"&&t!=="bottom-right"&&t!=="top-left"&&t!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);return t}}function Tp(n,e){let t=n[e];if(t!==void 0){if(t!=="pixels"&&t!=="fraction")throw new Error(`Expected pixels or fraction for ${e}`);return t}}function k0(n,e){let t=n[e];if(t!==void 0)return os(t,e)}function ko(n,e){let t=n[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);if(t!=="declutter"&&t!=="obstacle"&&t!=="none")throw new Error(`Expected declutter, obstacle, or none for ${e}`);return t}}function os(n,e){if(!Array.isArray(n))throw new Error(`Expected an array for ${e}`);let t=n.length;for(let i=0;i<t;++i)if(typeof n[i]!="number")throw new Error(`Expected an array of numbers for ${e}`);return n}function bp(n,e){if(typeof n!="string")throw new Error(`Expected a string for ${e}`);return n}function ac(n,e){if(typeof n!="number")throw new Error(`Expected a number for ${e}`);return n}function Sp(n,e){if(typeof n=="string")return n;let t=os(n,e),i=t.length;if(i<3||i>4)throw new Error(`Expected a color with 3 or 4 values for ${e}`);return t}function Ap(n,e){let t=os(n,e);if(t.length!==2)throw new Error(`Expected an array of two numbers for ${e}`);return t}function z0(n,e){return typeof n=="number"?n:Ap(n,e)}var Lp=S(()=>{Ft();lp();Nu();$n();Mt();Yu();Mo();_p();qu();Ju();nc();vp()});function j0(n){if(n===void 0)return tc;if(!n)return null;if(typeof n=="function"||n instanceof lr)return n;if(!Array.isArray(n))return oc([n]);if(n.length===0)return[];let e=n.length,t=n[0];if(t instanceof lr){let s=new Array(e);for(let o=0;o<e;++o){let l=n[o];if(!(l instanceof lr))throw new Error("Expected a list of style instances");s[o]=l}return s}if("style"in t){let s=new Array(e);for(let o=0;o<e;++o){let l=n[o];if(!("style"in l))throw new Error("Expected a list of rules with a style property");s[o]=l}return Rp(s)}return oc(n)}var Mp,lc,Pp,Op=S(()=>{ep();Lp();nc();rr();Mp={RENDER_ORDER:"renderOrder"},lc=class extends oi{constructor(e){e=e||{};let t=Object.assign({},e);delete t.style,delete t.renderBuffer,delete t.updateWhileAnimating,delete t.updateWhileInteracting,super(t),this.declutter_=e.declutter?String(e.declutter):void 0,this.renderBuffer_=e.renderBuffer!==void 0?e.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0?e.updateWhileAnimating:!1,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0?e.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(Mp.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e,t){let i=this.getDeclutter();i in e.declutter||(e.declutter[i]=new Br(9)),this.getRenderer().renderDeclutter(e,t)}setRenderOrder(e){this.set(Mp.RENDER_ORDER,e)}setStyle(e){this.style_=e===void 0?tc:e;let t=j0(e);this.styleFunction_=e===null?void 0:xp(t),this.changed()}setDeclutter(e){this.declutter_=e?String(e):void 0,this.changed()}};Pp=lc});var uc,zo,cc=S(()=>{un();uc=class extends He{constructor(e,t,i,s){super(e),this.inversePixelTransform=t,this.frameState=i,this.context=s}},zo=uc});function U0(n,e){Je.expire()}var hc,Dp,Np=S(()=>{Rr();zi();Ee();pt();rr();ts();On();ze();hc=class extends An{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){ne()}calculateMatrices2D(e){let t=e.viewState,i=e.coordinateToPixelTransform,s=e.pixelToCoordinateTransform;gn(i,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),Js(s,i)}forEachFeatureAtCoordinate(e,t,i,s,o,l,c,f){let m,_=t.viewState;function x(N,F,d,K){return o.call(l,F,N?d:null,K)}let C=_.projection,T=Ef(e.slice(),C),R=[[0,0]];if(C.canWrapX()&&s){let N=C.getExtent(),F=ae(N);R.push([-F,0],[F,0])}let M=t.layerStatesArray,P=M.length,O=[],z=[];for(let N=0;N<R.length;N++)for(let F=P-1;F>=0;--F){let d=M[F],K=d.layer;if(K.hasRenderer()&&Xr(d,_)&&c.call(f,K)){let W=K.getRenderer(),k=K.getSource();if(W&&k){let U=k.getWrapX()?T:e,se=x.bind(null,d.managed);z[0]=U[0]+R[N][0],z[1]=U[1]+R[N][1],m=W.forEachFeatureAtCoordinate(z,t,i,se,O)}if(m)return m}}if(O.length===0)return;let j=1/O.length;return O.forEach((N,F)=>N.distanceSq+=F*j),O.sort((N,F)=>N.distanceSq-F.distanceSq),O.some(N=>m=N.callback(N.feature,N.layer,N.geometry)),m}hasFeatureAtCoordinate(e,t,i,s,o,l){return this.forEachFeatureAtCoordinate(e,t,i,s,Qn,this,o,l)!==void 0}getMap(){return this.map_}renderFrame(e){ne()}scheduleExpireIconCache(e){Je.canExpireCache()&&e.postRenderFunctions.push(U0)}};Dp=hc});var fc,Fp,kp=S(()=>{Lr();$i();Ze();wt();Vt();Op();rr();cc();Gr();Wu();On();Np();fc=class extends Dp{constructor(e){super(e),this.fontChangeListenerKey_=J(gp,pn.PROPERTYCHANGE,e.redrawText,e),this.element_=Ye?Gs():document.createElement("div");let t=this.element_.style;t.position="absolute",t.width="100%",t.height="100%",t.zIndex="0",this.element_.className=Zt+" ol-layers";let i=e.getViewport();i&&i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,t){let i=this.getMap();if(i.hasListener(e)){let s=new zo(e,void 0,t);i.dispatchEvent(s)}}disposeInternal(){le(this.fontChangeListenerKey_),this.element_.remove(),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(ft.PRECOMPOSE,e);let t=e.layerStatesArray.sort((m,_)=>m.zIndex-_.zIndex);t.some(m=>m.layer instanceof Pp&&m.layer.getDeclutter())&&(e.declutter={});let s=e.viewState;this.children_.length=0;let o=[],l=null;for(let m=0,_=t.length;m<_;++m){let x=t[m];e.layerIndex=m;let C=x.layer,T=C.getSourceState();if(!Xr(x,s)||T!="ready"&&T!="undefined"){C.unrender();continue}let R=C.render(e,l);R&&(R!==l&&(this.children_.push(R),l=R),o.push(x))}this.declutter(e,o),mf(this.element_,this.children_);let f=this.getMap().getTargetElement();if(Ot(f)){let m=f.getContext("2d");for(let _ of this.children_){let x=_.firstElementChild||_,C=_.style.backgroundColor;if(C&&(!Ot(x)||x.width>0)&&(m.fillStyle=C,m.fillRect(0,0,f.width,f.height)),Ot(x)&&x.width>0){m.save();let T=_.style.opacity||x.style.opacity;m.globalAlpha=T===""?1:Number(T);let R=x.style.transform;if(R)m.transform(...Qs(R));else{let M=parseFloat(x.style.width)/x.width,P=parseFloat(x.style.height)/x.height;m.transform(M,0,0,P,0,0)}m.drawImage(x,0,0),m.restore()}}}this.dispatchRenderEvent(ft.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}declutter(e,t){if(e.declutter){for(let i=t.length-1;i>=0;--i){let s=t[i],o=s.layer;o.getDeclutter()&&o.renderDeclutter(e,s)}t.forEach(i=>i.layer.renderDeferred(e))}}},Fp=fc});function zp(n){if(n instanceof oi){n.setMapInternal(null);return}n instanceof Ur&&n.getLayers().forEach(zp)}function jp(n,e){if(n instanceof oi){n.setMapInternal(e);return}if(n instanceof Ur){let t=n.getLayers().getArray();for(let i=0,s=t.length;i<s;++i)jp(t[i],e)}}function G0(n){let e=null;n.keyboardEventTarget!==void 0&&(e=typeof n.keyboardEventTarget=="string"?document.getElementById(n.keyboardEventTarget):n.keyboardEventTarget);let t={},i=n.layers&&typeof n.layers.getLayers=="function"?n.layers:new Ur({layers:n.layers});t[Ae.LAYERGROUP]=i,t[Ae.TARGET]=n.target,t[Ae.VIEW]=n.view instanceof ht?n.view:new ht;let s;n.controls!==void 0&&(Array.isArray(n.controls)?s=new tt(n.controls.slice()):(ee(typeof n.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),s=n.controls));let o;n.interactions!==void 0&&(Array.isArray(n.interactions)?o=new tt(n.interactions.slice()):(ee(typeof n.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),o=n.interactions));let l;return n.overlays!==void 0?Array.isArray(n.overlays)?l=new tt(n.overlays.slice()):(ee(typeof n.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),l=n.overlays):l=new tt,{controls:s,interactions:o,keyboardEventTarget:e,overlays:l,values:t}}var dc,gc,Up=S(()=>{Pr();ao();hl();Id();Or();ul();gl();pl();qt();Lr();Md();go();yl();Ct();lt();Ma();mg();Ze();wt();Te();Ee();pt();Vt();Zg();$g();rr();fl();Dt();Gr();kp();Mt();On();ze();dc=class extends je{constructor(e){super(),e=e||{},this.on,this.once,this.un;let t=G0(e);this.renderComplete_=!1,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:cf,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=dn(),this.pixelToCoordinateTransform_=dn(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,Ye||(this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_)),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,Ye||(this.resizeObserver_=new ResizeObserver(()=>this.updateSize())),this.controls=t.controls||(Ye?new tt:pg()),this.interactions=t.interactions||(Ye?new tt:Yg({onFocusOnly:!0})),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Ad(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Ae.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Ae.VIEW,this.handleViewChanged_),this.addChangeListener(Ae.SIZE,this.handleSizeChanged_),this.addChangeListener(Ae.TARGET,this.handleTargetChanged_),this.setProperties(t.values);let i=this;e.view&&!(e.view instanceof ht)&&e.view.then(function(s){i.setView(new ht(s))}),this.controls.addEventListener(et.ADD,s=>{s.element.setMap(this)}),this.controls.addEventListener(et.REMOVE,s=>{s.element.setMap(null)}),this.interactions.addEventListener(et.ADD,s=>{s.element.setMap(this)}),this.interactions.addEventListener(et.REMOVE,s=>{s.element.setMap(null)}),this.overlays_.addEventListener(et.ADD,s=>{this.addOverlayInternal_(s.element)}),this.overlays_.addEventListener(et.REMOVE,s=>{let o=s.element.getId();o!==void 0&&delete this.overlayIdIndex_[o.toString()],s.element.setMap(null)}),this.controls.forEach(s=>{s.setMap(this)}),this.interactions.forEach(s=>{s.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){jp(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){let t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_?.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,i){if(!this.frameState_||!this.renderer_)return;let s=this.getCoordinateFromPixelInternal(e);i=i!==void 0?i:{};let o=i.hitTolerance!==void 0?i.hitTolerance:0,l=i.layerFilter!==void 0?i.layerFilter:Qn,c=i.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(s,this.frameState_,o,c,t,null,l,null)}getFeaturesAtPixel(e,t){let i=[];return this.forEachFeatureAtPixel(e,function(s){i.push(s)},t),i}getAllLayers(){let e=[];function t(i){i.forEach(function(s){s instanceof Ur?t(s.getLayers()):e.push(s)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;let i=this.getCoordinateFromPixelInternal(e);t=t!==void 0?t:{};let s=t.layerFilter!==void 0?t.layerFilter:Qn,o=t.hitTolerance!==void 0?t.hitTolerance:0,l=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,o,l,s,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){let i=this.viewport_.getBoundingClientRect(),s=this.getSize(),o=i.width/s[0],l=i.height/s[1],c="changedTouches"in e?e.changedTouches[0]:e;return[(c.clientX-i.left)/o,(c.clientY-i.top)/l]}getTarget(){return this.get(Ae.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return Ar(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){let t=this.frameState_;return t?Ke(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){let t=this.overlayIdIndex_[e.toString()];return t!==void 0?t:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Ae.LAYERGROUP)}setLayers(e){let t=this.getLayerGroup();if(e instanceof tt){t.setLayers(e);return}let i=t.getLayers();i.clear(),i.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){let e=this.getLayerGroup().getLayerStatesArray();for(let t=0,i=e.length;t<i;++t){let s=e[t];if(!s.visible)continue;let o=s.layer.getRenderer();if(o&&!o.ready)return!0;let l=s.layer.getSource();if(l&&l.loading)return!0}return!1}getPixelFromCoordinate(e){let t=mt(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){let t=this.frameState_;return t?Ke(t.coordinateToPixelTransform,e.slice(0,2)):null}getPixelRatio(){return this.pixelRatio_}setPixelRatio(e){this.pixelRatio_!==e&&(this.pixelRatio_=e,this.render())}getRenderer(){return this.renderer_}getSize(){return this.get(Ae.SIZE)}getView(){return this.get(Ae.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){let e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,i,s){return Ld(this.frameState_,e,t,i,s)}handleBrowserEvent(e,t){t=t||e.type;let i=new Ht(t,this,e);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(e){if(!this.frameState_)return;let t=e.originalEvent,i=t.type;if(i===Dr.POINTERDOWN||i===V.WHEEL||i===V.KEYDOWN){let s=this.getOwnerDocument(),o=this.viewport_.getRootNode?this.viewport_.getRootNode():s,l=t.target,c=o instanceof ShadowRoot?o.host===l?o.host.ownerDocument:o:o===s?s.documentElement:o;if(this.overlayContainerStopEvent_.contains(l)||!c.contains(l))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){let s=this.getInteractions().getArray().slice();for(let o=s.length-1;o>=0;o--){let l=s[o];if(l.getMap()!==this||!l.getActive()||!this.getTargetElement())continue;if(!l.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){let e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let s=this.maxTilesLoading_,o=s,l=e?e.viewHints:void 0,c=l?l[ct.ANIMATING]||l[ct.INTERACTING]:!1;if(c){let f=Date.now()-e.time>8;s=f?0:8,o=f?0:2}t.getTilesLoading()<s&&(c&&t.reprioritize(),t.loadMoreTiles(s,o))}e&&this.renderer_&&!e.animate&&(this.renderComplete_?(this.hasListener(ft.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(ft.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Dn(Yt.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Dn(Yt.LOADSTART,this,e))));let i=this.postRenderFunctions_;if(e)for(let s=0,o=i.length;s<o;++s)i[s](this,e);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let i=0,s=this.targetChangeHandlerKeys_.length;i<s;++i)le(this.targetChangeHandlerKeys_[i]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(V.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(V.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,this.viewport_.remove()}if(this.targetElement_&&!Ot(this.targetElement_)){this.resizeObserver_?.unobserve(this.targetElement_);let i=this.targetElement_.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.unobserve(i.host),this.setSize(void 0)}let e=this.getTarget(),t=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{if(Ot(t)||t.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Fp(this)),!Ot(t)){this.mapBrowserEventHandler_=new Rd(this,this.moveTolerance_);for(let s in _e)this.mapBrowserEventHandler_.addEventListener(_e[s],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(V.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(V.WHEEL,this.boundHandleBrowserEvent_,js?{passive:!1}:!1);let i;if(this.keyboardEventTarget_)i=this.keyboardEventTarget_;else{let s=t.getRootNode();i=s instanceof ShadowRoot?s.host:t}if(this.targetChangeHandlerKeys_=[J(i,V.KEYDOWN,this.handleBrowserEvent,this),J(i,V.KEYPRESS,this.handleBrowserEvent,this)],t instanceof HTMLElement){let s=t.getRootNode();s instanceof ShadowRoot&&this.resizeObserver_.observe(s.host),this.resizeObserver_?.observe(t)}}this.updateSize()}}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(le(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(le(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);let e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=J(e,pn.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=J(e,V.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(le),this.layerGroupPropertyListenerKeys_=null);let e=this.getLayerGroup();e&&(this.handleLayerAdd_(new Nt("addlayer",e)),this.layerGroupPropertyListenerKeys_=[J(e,pn.PROPERTYCHANGE,this.render,this),J(e,V.CHANGE,this.render,this),J(e,"addlayer",this.handleLayerAdd_,this),J(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){if(!this.frameState_)return;let e=this.frameState_.layerStatesArray;for(let t=0,i=e.length;t<i;++t){let s=e[t].layer;s.hasRenderer()&&s.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){zp(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){let t=this.getSize(),i=this.getView(),s=this.frameState_,o=null;if(t!==void 0&&pa(t)&&i&&i.isDef()){let l=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),c=i.getState();if(o={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:Cr(c.center,c.resolution,c.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:c,viewHints:l,wantedTiles:{},mapId:me(this),renderTargets:{}},c.nextCenter&&c.nextResolution){let f=isNaN(c.nextRotation)?c.rotation:c.nextRotation;o.nextExtent=Cr(c.nextCenter,c.nextResolution,f,t)}}this.frameState_=o,this.renderer_.renderFrame(o),o&&(o.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,o.postRenderFunctions),s&&(!this.previousExtent_||!wn(this.previousExtent_)&&!xr(o.extent,this.previousExtent_))&&(this.dispatchEvent(new Dn(Yt.MOVESTART,this,s)),this.previousExtent_=qn(this.previousExtent_)),this.previousExtent_&&!o.viewHints[ct.ANIMATING]&&!o.viewHints[ct.INTERACTING]&&!xr(o.extent,this.previousExtent_)&&(this.dispatchEvent(new Dn(Yt.MOVEEND,this,o)),kh(o.extent,this.previousExtent_))),this.dispatchEvent(new Dn(Yt.POSTRENDER,this,o)),this.renderComplete_=(this.hasListener(Yt.LOADSTART)||this.hasListener(Yt.LOADEND)||this.hasListener(ft.RENDERCOMPLETE))&&!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady(),this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){let t=this.getLayerGroup();t&&this.handleLayerRemove_(new Nt("removelayer",t)),this.set(Ae.LAYERGROUP,e)}setSize(e){this.set(Ae.SIZE,e)}setTarget(e){this.set(Ae.TARGET,e)}setView(e){if(!e||e instanceof ht){this.set(Ae.VIEW,e);return}this.set(Ae.VIEW,new ht);let t=this;e.then(function(i){t.setView(new ht(i))})}updateSize(){let e=this.getTargetElement(),t;if(e){let s,o;if(Ot(e)){let l=e.getContext("2d").getTransform();s=e.width/l.a,o=e.height/l.d}else{let l=getComputedStyle(e);s=e.offsetWidth-parseFloat(l.borderLeftWidth)-parseFloat(l.paddingLeft)-parseFloat(l.paddingRight)-parseFloat(l.borderRightWidth),o=e.offsetHeight-parseFloat(l.borderTopWidth)-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom)-parseFloat(l.borderBottomWidth)}!isNaN(s)&&!isNaN(o)&&(t=[Math.max(0,s),Math.max(0,o)],!pa(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&Ws("No map visible because the map container's width or height are 0."))}let i=this.getSize();t&&(!i||!Tn(t,i))&&(this.updateViewportSize_(t),this.setSize(t))}updateViewportSize_(e){let t=this.getView();t&&t.setViewportSize(e)}};gc=dc});function jo(n){return n instanceof Image||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement||n instanceof ImageBitmap?n:null}var X0,W0,pc,mc,Gp=S(()=>{Us();Kt();X0=new Error("disposed"),W0=[256,256],pc=class extends Oi{constructor(e){let t=X.IDLE;super(e.tileCoord,t,{transition:e.transition,interpolate:e.interpolate}),this.loader_=e.loader,this.data_=null,this.error_=null,this.size_=e.size||null,this.controller_=e.controller||null}getSize(){if(this.size_)return this.size_;let e=jo(this.data_);return e?[e.width,e.height]:W0}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==X.IDLE&&this.state!==X.ERROR)return;this.state=X.LOADING,this.changed();let e=this;this.loader_().then(function(t){e.data_=t,e.state=X.LOADED,e.changed()}).catch(function(t){e.error_=t,e.state=X.ERROR,e.changed()})}disposeInternal(){this.controller_&&(this.controller_.abort(X0),this.controller_=null),super.disposeInternal()}},mc=pc});var _c,yc,Xp=S(()=>{Rr();lt();_c=class{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}deleteOldest(){let e=this.pop();e instanceof An&&e.dispose()}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.deleteOldest()}clear(){for(;this.oldest_;)this.deleteOldest()}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){let i=this.entries_[e];return ee(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(e){let t=this.entries_[e];return ee(t!==void 0,"Tried to get a value for a key that does not exist in the cache"),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){let e=new Array(this.count_),t=0,i;for(i=this.newest_;i;i=i.older)e[t++]=i.key_;return e}getValues(){let e=new Array(this.count_),t=0,i;for(i=this.newest_;i;i=i.older)e[t++]=i.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){return this.entries_[e]?.value_}pop(){let e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){ee(!(e in this.entries_),"Tried to set a value for a key that is used already");let i={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[e]=i,++this.count_}setSize(e){this.highWaterMark=e}},yc=_c});var xc,Wp,Vp=S(()=>{Ze();xc=class{constructor(){this.instructions_=[],this.zIndex=0,this.offset_=0,this.context_=new Proxy(Di(),{get:(e,t)=>{if(typeof Di()[t]=="function")return this.push_(t),this.pushMethodArgs_},set:(e,t,i)=>(this.push_(t,i),!0)})}push_(...e){let t=this.instructions_,i=this.zIndex+this.offset_;t[i]||(t[i]=[]),t[i].push(...e)}pushMethodArgs_=(...e)=>(this.push_(e),this);pushFunction(e){this.push_(e)}getContext(){return this.context_}draw(e){this.instructions_.forEach(t=>{for(let i=0,s=t.length;i<s;++i){let o=t[i];if(typeof o=="function"){o(e);continue}let l=t[++i];if(typeof e[o]=="function")e[o](...l);else{if(typeof l=="function"){e[o]=l(e);continue}e[o]=l}}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}},Wp=xc});var V0,Ec,Kp,Bp=S(()=>{bn();Ja();Te();ze();V0=5,Ec=class extends no{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.staleKeys_=new Array,this.maxStaleKeys=V0}getStaleKeys(){return this.staleKeys_}prependStaleKey(e){this.staleKeys_.unshift(e),this.staleKeys_.length>this.maxStaleKeys&&(this.staleKeys_.length=this.maxStaleKeys)}getFeatures(e){return ne()}getData(e){return null}prepareFrame(e){return ne()}renderFrame(e,t){return ne()}forEachFeatureAtCoordinate(e,t,i,s,o){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){let t=e.target;(t.getState()===$.LOADED||t.getState()===$.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=$.LOADED&&t!=$.ERROR&&e.addEventListener(V.CHANGE,this.boundHandleImageChange_),t==$.IDLE&&(e.load(),t=e.getState()),t==$.LOADED}renderIfReadyAndVisible(){let e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}renderDeferred(e){}disposeInternal(){delete this.layer_,super.disposeInternal()}},Kp=Ec});function K0(){cr=Ce(1,1,void 0,{willReadFrequently:!0})}var cr,vc,qp,Hp=S(()=>{Ct();Ft();Ze();Ee();Vt();cc();Gr();Vp();On();Bp();cr=null;vc=class extends Kp{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=dn(),this.pixelTransform=dn(),this.inversePixelTransform=dn(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.frameState=null}getImageData(e,t,i){cr||K0(),cr.clearRect(0,0,1,1);let s;try{cr.drawImage(e,t,i,1,1,0,0,1,1),s=cr.getImageData(0,0,1,1).data}catch{return cr=null,null}return s}getBackground(e){let i=this.getLayer().getBackground();return typeof i=="function"&&(i=i(e.viewState.resolution)),i||void 0}useContainer(e,t,i){let s=this.getLayer().getClassName(),o,l;if(e&&e.className===s&&(!i||e&&e.style.backgroundColor&&Tn(St(e.style.backgroundColor),St(i)))){let c=e.firstElementChild;Ot(c)&&(l=c.getContext("2d"))}if(l&&nd(l.canvas.style.transform,t)?(this.container=e,this.context=l,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){o=Ye?Gs():document.createElement("div"),o.className=s;let c=o.style;c.position="absolute",c.width="100%",c.height="100%",l=Ce();let f=l.canvas;o.appendChild(f),c=f.style,c.position="absolute",c.left="0",c.transformOrigin="top left",this.container=o,this.context=l}!this.containerReused&&i&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=i)}clipUnrotated(e,t,i){let s=ut(i),o=Ii(i),l=Ri(i),c=Ti(i);Ke(t.coordinateToPixelTransform,s),Ke(t.coordinateToPixelTransform,o),Ke(t.coordinateToPixelTransform,l),Ke(t.coordinateToPixelTransform,c);let f=this.inversePixelTransform;Ke(f,s),Ke(f,o),Ke(f,l),Ke(f,c),e.save(),e.beginPath(),e.moveTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(l[0]),Math.round(l[1])),e.lineTo(Math.round(c[0]),Math.round(c[1])),e.clip()}prepareContainer(e,t){let i=e.extent,s=e.viewState.resolution,o=e.viewState.rotation,l=e.pixelRatio,c=Math.round(ae(i)/s*l),f=Math.round(Oe(i)/s*l);gn(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/l,1/l,o,-c/2,-f/2),Js(this.inversePixelTransform,this.pixelTransform);let m=td(this.pixelTransform);if(this.useContainer(t,m,this.getBackground(e)),!this.containerReused){let _=this.context.canvas;_.width!=c||_.height!=f?(_.width=c,_.height=f):this.context.clearRect(0,0,c,f),m!==_.style.transform&&(_.style.transform=m)}}dispatchRenderEvent_(e,t,i){let s=this.getLayer();if(s.hasListener(e)){let o=new zo(e,this.inversePixelTransform,i,t);s.dispatchEvent(o)}}preRender(e,t){this.frameState=t,!t.declutter&&this.dispatchRenderEvent_(ft.PRERENDER,e,t)}postRender(e,t){t.declutter||this.dispatchRenderEvent_(ft.POSTRENDER,e,t)}renderDeferredInternal(e){}getRenderContext(e){return e.declutter&&!this.deferredContext_&&(this.deferredContext_=new Wp),e.declutter?this.deferredContext_.getContext():this.context}renderDeferred(e){e.declutter&&(this.dispatchRenderEvent_(ft.PRERENDER,this.context,e),e.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(e),this.dispatchRenderEvent_(ft.POSTRENDER,this.context,e))}getRenderTransform(e,t,i,s,o,l,c){let f=o/2,m=l/2,_=s/t,x=-_,C=-e[0]+c,T=-e[1];return gn(this.tempTransform,f,m,_,x,-i,C,T)}disposeInternal(){delete this.frameState,super.disposeInternal()}},qp=vc});function Cc(n,e,t){if(!(t in n))return n[t]=new Set([e]),!0;let i=n[t],s=i.has(e);return s||i.add(e),!s}function B0(n,e,t){let i=n[t];return i?i.delete(e):!1}function Yp(n,e){let t=n.layerStatesArray[n.layerIndex];t.extent&&(e=Wt(e,Bt(t.extent,n.viewState.projection)));let i=t.layer.getRenderSource();if(!i.getWrapX()){let s=i.getTileGridForProjection(n.viewState.projection).getExtent();s&&(e=Wt(e,s))}return e}var wc,Zp,$p=S(()=>{Gp();Xs();ma();Kt();Ct();Ee();Dt();Za();Mt();Xp();Li();On();ze();Hp();wc=class extends qp{constructor(e,t){super(e),t=t||{},this.extentChanged=!0,this.renderComplete=!1,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedTiles=[],this.renderedSourceKey_,this.renderedSourceRevision_,this.tempExtent=vt(),this.tempTileRange_=new Ls(0,0,0,0),this.tempTileCoord_=Si(0,0,0);let i=t.cacheSize!==void 0?t.cacheSize:512;this.tileCache_=new yc(i),this.sourceTileCache_=null,this.layerExtent=null,this.maxStaleKeys=i*.5}getTileCache(){return this.tileCache_}getSourceTileCache(){return this.sourceTileCache_||(this.sourceTileCache_=new yc(512)),this.sourceTileCache_}getOrCreateTile(e,t,i,s){let o=this.tileCache_,c=this.getLayer().getSource(),f=Ai(c,c.getKey(),e,t,i),m;if(o.containsKey(f))m=o.get(f);else{let _=s.viewState.projection,x=c.getProjection();if(m=c.getTile(e,t,i,s.pixelRatio,_,!x||Vi(x,_)?void 0:this.getSourceTileCache()),!m)return null;o.set(f,m)}return m}getTile(e,t,i,s){let o=this.getOrCreateTile(e,t,i,s);return o||null}getData(e){let t=this.frameState;if(!t)return null;let i=this.getLayer(),s=Ke(t.pixelToCoordinateTransform,e.slice()),o=i.getExtent();if(o&&!wi(o,s))return null;let l=t.viewState,c=i.getRenderSource(),f=c.getTileGridForProjection(l.projection),m=c.getTilePixelRatio(t.pixelRatio);for(let _=f.getZForResolution(l.resolution);_>=f.getMinZoom();--_){let x=f.getTileCoordForCoordAndZ(s,_),C=this.getTile(_,x[1],x[2],t);if(!C||C.getState()!==X.LOADED)continue;let T=f.getOrigin(_),R=ve(f.getTileSize(_)),M=f.getResolution(_),P;if(C instanceof Fi||C instanceof eo)P=C.getImage();else if(C instanceof mc){if(P=jo(C.getData()),!P)continue}else continue;let O=Math.floor(m*((s[0]-T[0])/M-x[1]*R[0])),z=Math.floor(m*((T[1]-s[1])/M-x[2]*R[1])),j=Math.round(m*c.getGutterForProjection(l.projection));return this.getImageData(P,O+j,z+j)}return null}prepareFrame(e){this.renderedProjection?e.viewState.projection!==this.renderedProjection&&(this.tileCache_.clear(),this.renderedProjection=e.viewState.projection):this.renderedProjection=e.viewState.projection;let t=this.getLayer().getSource();if(!t)return!1;let i=t.getRevision();return this.renderedSourceRevision_?this.renderedSourceRevision_!==i&&(this.renderedSourceRevision_=i,this.renderedSourceKey_===t.getKey()&&(this.tileCache_.clear(),this.sourceTileCache_?.clear())):this.renderedSourceRevision_=i,!0}enqueueTilesForNextExtent(){return!0}enqueueTiles(e,t,i,s,o){let l=e.viewState,c=this.getLayer(),f=c.getRenderSource(),m=f.getTileGridForProjection(l.projection),_=me(f);_ in e.wantedTiles||(e.wantedTiles[_]={});let x=e.wantedTiles[_],C=c.getMapInternal(),T=Math.max(i-o,m.getMinZoom(),m.getZForResolution(Math.min(c.getMaxResolution(),C?C.getView().getResolutionForZoom(Math.max(c.getMinZoom(),0)):m.getResolution(0)),f.zDirection)),R=l.rotation,M=R?ha(l.center,l.resolution,R,e.size):void 0;for(let P=i;P>=T;--P){let O=m.getTileRangeForExtentAndZ(t,P,this.tempTileRange_),z=m.getResolution(P);for(let j=O.minX;j<=O.maxX;++j)for(let N=O.minY;N<=O.maxY;++N){if(R&&!m.tileCoordIntersectsViewport([P,j,N],M))continue;let F=this.getTile(P,j,N,e);if(!F||!Cc(s,F,P))continue;let K=F.getKey();if(x[K]=!0,F.getState()===X.IDLE&&!e.tileQueue.isKeyQueued(K)){let W=Si(P,j,N,this.tempTileCoord_);e.tileQueue.enqueue([F,_,m.getTileCoordCenter(W),z])}}}}findStaleTile_(e,t){let i=this.tileCache_,s=e[0],o=e[1],l=e[2],c=this.getStaleKeys();for(let f=0;f<c.length;++f){let m=Ai(this.getLayer().getSource(),c[f],s,o,l);if(i.containsKey(m)){let _=i.peek(m);if(_.getState()===X.LOADED)return _.endTransition(me(this)),Cc(t,_,s),!0}}return!1}findAltTiles_(e,t,i,s){let o=e.getTileRangeForTileCoordAndZ(t,i,this.tempTileRange_);if(!o)return!1;let l=!0,c=this.tileCache_,f=this.getLayer().getRenderSource(),m=f.getKey();for(let _=o.minX;_<=o.maxX;++_)for(let x=o.minY;x<=o.maxY;++x){let C=Ai(f,m,i,_,x),T=!1;if(c.containsKey(C)){let R=c.peek(C);R.getState()===X.LOADED&&(Cc(s,R,i),T=!0)}T||(l=!1)}return l}renderFrame(e,t){this.renderComplete=!0;let i=e.layerStatesArray[e.layerIndex],s=e.viewState,o=s.projection,l=s.resolution,c=s.center,f=e.pixelRatio,m=this.getLayer(),_=m.getSource(),x=_.getTileGridForProjection(o),C=x.getZForResolution(l,_.zDirection),T=x.getResolution(C),R=_.getKey();this.renderedSourceKey_?this.renderedSourceKey_!==R&&(this.prependStaleKey(this.renderedSourceKey_),this.renderedSourceKey_=R):this.renderedSourceKey_=R;let M=e.extent,P=_.getTilePixelRatio(f);this.prepareContainer(e,t);let O=this.context.canvas.width,z=this.context.canvas.height;this.layerExtent=i.extent?Bt(i.extent,o):null,this.layerExtent&&(M=Wt(M,this.layerExtent));let j=T*O/2/P,N=T*z/2/P,F=[c[0]-j,c[1]-N,c[0]+j,c[1]+N],d={};this.renderedTiles.length=0;let K=m.getPreload();if(e.nextExtent&&this.enqueueTilesForNextExtent()){let Q=x.getZForResolution(s.nextResolution,_.zDirection),oe=Yp(e,e.nextExtent);this.enqueueTiles(e,oe,Q,d,K)}let W=Yp(e,M);if(this.enqueueTiles(e,W,C,d,0),K>0&&setTimeout(()=>{this.enqueueTiles(e,W,C-1,d,K-1)},0),!(C in d))return this.container;let k=me(this),U=e.time;for(let Q of d[C]){let oe=Q.getState();if(oe===X.EMPTY)continue;let ce=Q.tileCoord;if(oe===X.LOADED&&Q.getAlpha(k,U)===1){Q.endTransition(k);continue}if(oe!==X.ERROR&&(this.renderComplete=!1),this.findStaleTile_(ce,d)){B0(d,Q,C),e.animate=!0;continue}if(this.findAltTiles_(x,ce,C+1,d))continue;let De=x.getMinZoom();for(let be=C-1;be>=De&&!this.findAltTiles_(x,ce,be,d);--be);}let se=T/l*f/P,Y=this.getRenderContext(e);gn(this.tempTransform,O/2,z/2,se,se,0,-O/2,-z/2),this.layerExtent&&this.clipUnrotated(Y,e,this.layerExtent),_.getInterpolate()||(Y.imageSmoothingEnabled=!1),this.preRender(Y,e);let ie=Object.keys(d).map(Number);ie.sort(Zn);let pe,Ge=[],Xe=[];for(let Q=ie.length-1;Q>=0;--Q){let oe=ie[Q],ce=_.getTilePixelSize(oe,f,o),Le=x.getResolution(oe)/T,De=ce[0]*Le*se,be=ce[1]*Le*se,jt=x.getTileCoordForCoordAndZ(ut(F),oe),xt=x.getTileCoordExtent(jt),rt=Ke(this.tempTransform,[P*(xt[0]-F[0])/T,P*(F[3]-xt[3])/T]),we=P*_.getGutterForProjection(o);for(let Ve of d[oe]){if(Ve.getState()!==X.LOADED)continue;let Xn=Ve.tileCoord,dt=jt[1]-Xn[1],Wn=Math.round(rt[0]-(dt-1)*De),us=jt[2]-Xn[2],ui=Math.round(rt[1]-(us-1)*be),Ne=Math.round(rt[0]-dt*De),Me=Math.round(rt[1]-us*be),ci=Wn-Ne,hi=ui-Me,cs=ie.length===1,fr=!1;pe=[Ne,Me,Ne+ci,Me,Ne+ci,Me+hi,Ne,Me+hi];for(let yn=0,Uo=Ge.length;yn<Uo;++yn)if(!cs&&oe<Xe[yn]){let Pe=Ge[yn];sn([Ne,Me,Ne+ci,Me+hi],[Pe[0],Pe[3],Pe[4],Pe[7]])&&(fr||(Y.save(),fr=!0),Y.beginPath(),Y.moveTo(pe[0],pe[1]),Y.lineTo(pe[2],pe[3]),Y.lineTo(pe[4],pe[5]),Y.lineTo(pe[6],pe[7]),Y.moveTo(Pe[6],Pe[7]),Y.lineTo(Pe[4],Pe[5]),Y.lineTo(Pe[2],Pe[3]),Y.lineTo(Pe[0],Pe[1]),Y.clip())}Ge.push(pe),Xe.push(oe),this.drawTile(Ve,e,Ne,Me,ci,hi,we,cs),fr&&Y.restore(),this.renderedTiles.unshift(Ve),this.updateUsedTiles(e.usedTiles,_,Ve)}}if(this.renderedResolution=T,this.extentChanged=!this.renderedExtent_||!xr(this.renderedExtent_,F),this.renderedExtent_=F,this.renderedPixelRatio=f,this.postRender(this.context,e),this.layerExtent&&Y.restore(),Y.imageSmoothingEnabled=!0,this.renderComplete){let Q=(oe,ce)=>{let We=me(_),Le=ce.wantedTiles[We],De=Le?Object.keys(Le).length:0;this.updateCacheSize(De),this.tileCache_.expireCache(),this.sourceTileCache_?.expireCache()};e.postRenderFunctions.push(Q)}return this.container}updateCacheSize(e){this.tileCache_.highWaterMark=Math.max(this.tileCache_.highWaterMark,e*2)}drawTile(e,t,i,s,o,l,c,f){let m;if(e instanceof mc){if(m=jo(e.getData()),!m)throw new Error("Rendering array data is not yet supported")}else m=this.getTileImage(e);if(!m)return;let _=this.getRenderContext(t),x=me(this),C=t.layerStatesArray[t.layerIndex],T=C.opacity*(f?e.getAlpha(x,t.time):1),R=T!==_.globalAlpha;R&&(_.save(),_.globalAlpha=T),_.drawImage(m,c,c,m.width-2*c,m.height-2*c,i,s,o,l),R&&_.restore(),T!==C.opacity?t.animate=!0:f&&e.endTransition(x)}getImage(){let e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}updateUsedTiles(e,t,i){let s=me(t);s in e||(e[s]={}),e[s][i.getKey()]=!0}},Zp=wc});var as,Qp=S(()=>{as={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"}});var Tc,Jp,em=S(()=>{rr();Qp();Tc=class extends oi{constructor(e){e=e||{};let t=Object.assign({},e),i=e.cacheSize;delete e.cacheSize,delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.cacheSize_=i,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(as.PRELOAD)}setPreload(e){this.set(as.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(as.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(as.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}},Jp=Tc});var Rc,Ic,tm=S(()=>{$p();em();Rc=class extends Jp{constructor(e){super(e)}createRenderer(){return new Zp(this,{cacheSize:this.getCacheSize()})}},Ic=Rc});function rm(n){let e=n.body;return!!(e.webkitRequestFullscreen||e.requestFullscreen&&n.fullscreenEnabled)}function sm(n){return!!(n.webkitIsFullScreen||n.fullscreenElement)}function om(n){n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}function q0(n){n.webkitRequestFullscreen?n.webkitRequestFullscreen():om(n)}function H0(n){n.exitFullscreen?n.exitFullscreen():n.webkitExitFullscreen&&n.webkitExitFullscreen()}var nm,im,bc,Sc,am=S(()=>{pl();$i();Ze();wt();Te();Qi();nm=["fullscreenchange","webkitfullscreenchange"],im={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"},bc=class extends bt{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target}),this.on,this.once,this.un,this.keys_=e.keys!==void 0?e.keys:!1,this.source_=e.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=e.className!==void 0?e.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=e.activeClassName!==void 0?e.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=e.inactiveClassName!==void 0?e.inactiveClassName.split(" "):[this.cssClassName_+"-false"];let t=e.label!==void 0?e.label:"\u2922";this.labelNode_=typeof t=="string"?document.createTextNode(t):t;let i=e.labelActive!==void 0?e.labelActive:"\xD7";this.labelActiveNode_=typeof i=="string"?document.createTextNode(i):i;let s=e.tipLabel?e.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=s,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener(V.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${Zt} ${Nn}`,this.element.appendChild(this.button_)}handleClick_(e){e.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){let e=this.getMap();if(!e)return;let t=e.getOwnerDocument();if(rm(t))if(sm(t))H0(t);else{let i;this.source_?i=typeof this.source_=="string"?t.getElementById(this.source_):this.source_:i=e.getTargetElement(),this.keys_?q0(i):om(i)}}handleFullScreenChange_(){let e=this.getMap();if(!e)return;let t=this.isInFullscreen_;this.isInFullscreen_=sm(e.getOwnerDocument()),t!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(Ni(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(im.ENTERFULLSCREEN)):(Ni(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(im.LEAVEFULLSCREEN)),e.updateSize())}setClassName_(e,t){t?(e.classList.remove(...this.inactiveClassName_),e.classList.add(...this.activeClassName_)):(e.classList.remove(...this.activeClassName_),e.classList.add(...this.inactiveClassName_))}setMap(e){let t=this.getMap();t&&t.removeChangeListener(Ae.TARGET,this.boundHandleMapTargetChange_),super.setMap(e),this.handleMapTargetChange_(),e&&e.addChangeListener(Ae.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){let e=this.documentListeners_;for(let i=0,s=e.length;i<s;++i)le(e[i]);e.length=0;let t=this.getMap();if(t){let i=t.getOwnerDocument();rm(i)?this.element.classList.remove(Bl):this.element.classList.add(Bl);for(let s=0,o=nm.length;s<o;++s)e.push(J(i,nm[s],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}};Sc=bc});var lm=S(()=>{Qi();am();$l();Jl()});function yt(n){return(e,...t)=>Y0(n,e,t)}function hr(n,e){return yt(Z0(n,e).get)}function Lc(){let n={colorSpace:Ac.DEFAULT_COLORSPACE,colorType:"float16",toneMapping:{mode:"extended"}};return Array.isArray(navigator.userAgent.match(/Version\/[\d.]+.*Safari/))&&(n.colorSpace="display-p3"),n}function _m(){HTMLCanvasElement.prototype._getContext=HTMLCanvasElement.prototype.getContext,HTMLCanvasElement.prototype.getContext=function(n,e){return e!==void 0?e=Object.assign({},e,Lc()):e=Lc(),this._getContext(n,e)}}function Pc(){try{let n=window.matchMedia("(dynamic-range: high)").matches;return!!((window.matchMedia("(color-gamut: rec2020)").matches||window.matchMedia("(color-gamut: p3)").matches)&&n)}catch(n){return console.error("Exception during check for HDR",n),!1}}function ym(){if(!Pc()||!sx())return!1;try{let n=document.createElement("canvas");if(!n.getContext)return!1;let e=Lc();return n.getContext("2d",e)!==null}catch(n){return console.error("Bad canvas ColorSpace test - make sure that the Chromium browser flag 'enable-experimental-web-platform-features' has been enabled",n),!1}return!1}function sx(){try{new ImageData(new Float16Array(4),1,1,{pixelFormat:"rgba-float16"})}catch(n){return console.error("Browser doesn't support Float16Array",n),!1}return!0}var Ac,Y0,Z0,Mc,$0,VA,KA,cm,Q0,BA,J0,ex,um,hm,it,tx,fm,dm,gm,nx,ix,pm,qA,HA,Jt,en,mm,ls,rx,xm=S(()=>{Ac=class{static DEFAULT_COLORSPACE="rec2100-hlg";static SDR_MULTIPLIER=2**16-1;data;height;width;constructor(e,t){this.height=t,this.width=e}static fromImageData(e){throw new Error("Method not implemented!")}static fromImageDataArray(e,t,i){throw new Error("Method not implemented!")}static async loadSDRImageData(e){return fetch(e).then(t=>t.blob()).then(t=>createImageBitmap(t)).then(t=>{let{width:i,height:s}=t,l=new OffscreenCanvas(i,s).getContext("2d");return l.drawImage(t,0,0),l.getImageData(0,0,i,s)})}getPixel(e,t){let i=(t*this.width+e)*4;return this.data.slice(i,i+4)}setPixel(e,t,i){let s=(t*this.width+e)*4;this.data[s+0]=i[0],this.data[s+1]=i[1],this.data[s+2]=i[2],this.data[s+3]=i[3]}clone(){let e=Object.create(Object.getPrototypeOf(this));return Object.assign(e,this),e}};({apply:Y0,getOwnPropertyDescriptor:Z0,getPrototypeOf:Mc}=Reflect),{EPSILON:$0,isFinite:VA,isNaN:KA}=Number,{iterator:cm,toStringTag:Q0}=Symbol,{abs:BA}=Math,J0=ArrayBuffer,ex=J0.prototype;hr(ex,"byteLength");um=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;um&&hr(um.prototype,"byteLength");hm=Mc(Uint8Array);hm.from;it=hm.prototype;it[cm];yt(it.keys);yt(it.values);yt(it.entries);yt(it.set);yt(it.reverse);yt(it.fill);yt(it.copyWithin);yt(it.sort);yt(it.slice);yt(it.subarray);hr(it,"buffer");hr(it,"byteOffset");hr(it,"length");hr(it,Q0);tx=Uint8Array,fm=Uint16Array,dm=Uint32Array,gm=Mc([][cm]());yt(gm.next);yt((function*(){})().next);Mc(gm);nx=1/$0,ix=6103515625e-14,pm=.0009765625,qA=pm*ix,HA=pm*nx,Jt=new fm(512),en=new tx(512);for(let n=0;n<256;++n){let e=n-127;e<-24?(Jt[n]=0,Jt[n|256]=32768,en[n]=24,en[n|256]=24):e<-14?(Jt[n]=1024>>-e-14,Jt[n|256]=1024>>-e-14|32768,en[n]=-e-1,en[n|256]=-e-1):e<=15?(Jt[n]=e+15<<10,Jt[n|256]=e+15<<10|32768,en[n]=13,en[n|256]=13):e<128?(Jt[n]=31744,Jt[n|256]=64512,en[n]=24,en[n|256]=24):(Jt[n]=31744,Jt[n|256]=64512,en[n]=13,en[n|256]=13)}mm=new dm(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,mm[n]=e|t}for(let n=1024;n<2048;++n)mm[n]=939524096+(n-1024<<13);ls=new dm(64);for(let n=1;n<31;++n)ls[n]=n<<23;ls[31]=1199570944;ls[32]=2147483648;for(let n=33;n<63;++n)ls[n]=2147483648+(n-32<<23);ls[63]=3347054592;rx=new fm(64);for(let n=1;n<64;++n)n!==32&&(rx[n]=1024)});var ox={};var Oc,Dc,Nc,Em=S(()=>{wd();ga();Up();tm();go();lm();Dt();xm();Oc=class extends ht{constructor(e){let t=e||{};super(e),this.pauseableAnimations_=[],this.animationsPointer_=-1,this.lastAnimation_={},this.initalCenter=this.getCenter()}getPauseableAnimation_(){return this.pauseableAnimations_.length-1>this.animationsPointer_?(this.animationsPointer_++,this.pauseableAnimations_[this.animationsPointer_]):(this.animationsPointer_=0,this.pauseableAnimations_[this.animationsPointer_])}nextAnimation_(e){if(e===void 0||e){var t=this,i=this.getPauseableAnimation_();this.animate(i,function(s){t.nextAnimation_(s)})}}pauseAnimation(){if(!this.getAnimating())return;var e=this.animations_[0][0],t=Date.now(),i=t-e.start;let s={center:e.center,zoom:e.zoom,rotation:e.rotation,duration:e.duration-i};this.lastAnimation_=s,this.cancelAnimations()}startAnimation_(){if(!this.getAnimating()){Object.keys(this.lastAnimation_).length!==0&&(this.lastAnimation_={});var e=this;this.animate(this.getPauseableAnimation_,function(t){e.nextAnimation_(t)})}}resumeAnimation(){if(!this.getAnimating())if(Object.keys(this.lastAnimation_).length===0)this.startAnimation_();else{var e=this;this.animate(this.lastAnimation_,function(t){e.nextAnimation_(t)})}}setPauseableAnimation(e){var t=new Array(arguments.length);for(let s=0;s<t.length;++s){var i=arguments[s];t[s]=i}this.animationsPointer_=-1,this.pauseableAnimations_=t}getPauseableAnimation(){return this.pauseableAnimations_}setCenter(e){this.initalCenter=e,this.setCenterInternal(mt(e,this.getProjection()))}isNoopAnimation(e){return!1}setResolutions(e){this.resolutions_=e}setExtent(e){var t={};t.extent=Bt(e,this.projection_),this.applyOptions_(t)}},Dc=class extends bt{constructor(e){let t=e||{},i=t.tipLabel?t.tipLabel:"Rotate 90\xB0 left",s=document.createElement("button");s.innerHTML='<i class="icon-left"></i>',s.title=i;let o=document.createElement("div");o.className="rotate-left ol-unselectable ol-control",o.appendChild(s),super({element:o,target:t.target}),s.addEventListener("click",this.handleRotateLeft.bind(this),!1)}handleRotateLeft(){var e=this.getMap().getView().getRotation();this.getMap().getView().setRotation(e+-90*Math.PI/180)}},Nc=class extends bt{constructor(e){let t=e||{},i=t.tipLabel?t.tipLabel:"Rotate 90\xB0 right",s=document.createElement("button");s.innerHTML='<i class="icon-right"></i>',s.title=i;let o=document.createElement("div");o.className="rotate-right ol-unselectable ol-control",o.appendChild(s),super({element:o,target:t.target}),s.addEventListener("click",this.handleRotateRight.bind(this),!1)}handleRotateRight(){var e=this.getMap().getView().getRotation();this.getMap().getView().setRotation(e+90*Math.PI/180)}};window.addMap=function(n,e,t,i,s){var o=0;t!==void 0&&t!=0&&(o=t*Math.PI/180),s===void 0&&(s=!1);var l="en";document.documentElement.lang!==void 0&&(l=new Intl.Locale(document.documentElement.lang).language);var c={de:{zoomIn:"Vergr\xF6\xDFern",zoomOut:"Verkleinern",fullscreen:"Vollbildansicht",rotate:"Rotation zur\xFCcksetzen",rotateLeft:"90\xB0 nach links drehen",rotateRight:"90\xB0 nach rechst drehen"},en:{zoomIn:"Zoom in",zoomOut:"Zoom out",fullscreen:"Toggle full-screen",rotate:"Reset rotation",rotateLeft:"Rotate 90\xB0 left",rotateRight:"Rotate 90\xB0 right"}};console.log("Setting up "+l),s&&Pc()&&ym()&&(_m(),console.log("Enabled HDR Canvas"));var f=new Ic,m=new gc({controls:[new zr({zoomInTipLabel:c[l].zoomIn,zoomOutTipLabel:c[l].zoomOut}),new Sc({tipLabel:c[l].fullscreen}),new kr({tipLabel:c[l].rotate}),new Dc({tipLabel:c[l].rotateLeft}),new Nc({tipLabel:c[l].rotateRight})],layers:[f],target:n});return fetch(e).then(function(_){_.json().then(function(x){var C=new da(x).getTileSourceOptions();if(C===void 0||C.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}C.zDirection=-1,i!==void 0&&i!=""&&(C.url=i);var T=new ol(C);f.setSource(T),m.setView(new ht({resolutions:T.getTileGrid().getResolutions(),extent:T.getTileGrid().getExtent(),constrainOnlyCenter:!0,rotation:o})),m.getView().fit(T.getTileGrid().getExtent())}).catch(function(x){console.log("Could not read image info json. "+x)})}).catch(function(){console.log("Could not read data from URL.")}),m};window.animatedMap=function(n,e,t,i,s,o,l,c){var f=0;t!==void 0&&t!=0&&(f=t*Math.PI/180);var m=new Ic,_=new gc({controls:[],layers:[m],target:n}),x=new Oc({constrainOnlyCenter:!0,rotation:f});return fetch(e).then(function(C){C.json().then(function(T){var R=new da(T).getTileSourceOptions();if(R===void 0||R.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}R.zDirection=-1,i!==void 0&&i!=""&&(R.url=i);var M=new ol(R);m.setSource(M),x.setExtent(M.getTileGrid().getExtent()),x.setResolutions(M.getTileGrid().getResolutions()),_.setView(x),_.getView().fit(M.getTileGrid().getExtent()),s!==void 0&&s!==""&&_.getView().setZoom(s),c!==void 0&&c!==""&&_.getView().setCenter(c)}).catch(function(T){console.log(`Could not read image info json from "${e}".`+T)})}).catch(function(){console.log("Could not read data from URL.")}),o!==void 0&&o!==""&&l!==void 0&&(Array.isArray(o)?x.setPauseableAnimation(...o):x.setPauseableAnimation(o),_.once("rendercomplete",function(){l.addEventListener("mouseenter",function(){x.resumeAnimation()}),l.addEventListener("mouseleave",function(C){x.pauseAnimation()})})),_}});window.$=window.jQuery=Dh();Em();})();
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
