const ve=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function _(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=_(i);fetch(i.href,n)}};ve();var O,u,_e,A,ne,R,L={},oe=[],me=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(t,e){for(var _ in e)t[_]=e[_];return t}function re(t){var e=t.parentNode;e&&e.removeChild(t)}function ye(t,e,_){var r,i,n,c={};for(n in e)n=="key"?r=e[n]:n=="ref"?i=e[n]:c[n]=e[n];if(arguments.length>2&&(c.children=arguments.length>3?O.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)c[n]===void 0&&(c[n]=t.defaultProps[n]);return C(t,c,r,i,null)}function C(t,e,_,r,i){var n={type:t,props:e,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++_e:i};return i==null&&u.vnode!=null&&u.vnode(n),n}function $(t){return t.children}function S(t,e){this.props=t,this.context=e}function x(t,e){if(e==null)return t.__?x(t.__,t.__.__k.indexOf(t)+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?x(t):null}function ie(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return ie(t)}}function j(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!N.__r++||R!==u.debounceRendering)&&((R=u.debounceRendering)||ne)(N)}function N(){for(var t;N.__r=A.length;)t=A.sort(function(e,_){return e.__v.__b-_.__v.__b}),A=[],t.some(function(e){var _,r,i,n,c,a;e.__d&&(c=(n=(_=e).__v).__e,(a=_.__P)&&(r=[],(i=E({},n)).__v=n.__v+1,B(a,n,i,_.__n,a.ownerSVGElement!==void 0,n.__h!=null?[c]:null,r,c==null?x(n):c,n.__h),se(r,n),n.__e!=c&&ie(n)))})}function le(t,e,_,r,i,n,c,a,d,p){var o,h,s,l,f,F,v,m=r&&r.__k||oe,k=m.length;for(_.__k=[],o=0;o<e.length;o++)if((l=_.__k[o]=(l=e[o])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?C(null,l,null,null,l):Array.isArray(l)?C($,{children:l},null,null,null):l.__b>0?C(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=_,l.__b=_.__b+1,(s=m[o])===null||s&&l.key==s.key&&l.type===s.type)m[o]=void 0;else for(h=0;h<k;h++){if((s=m[h])&&l.key==s.key&&l.type===s.type){m[h]=void 0;break}s=null}B(t,l,s=s||L,i,n,c,a,d,p),f=l.__e,(h=l.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,l),v.push(h,l.__c||f,l)),f!=null?(F==null&&(F=f),typeof l.type=="function"&&l.__k===s.__k?l.__d=d=ce(l,d,t):d=ue(t,l,s,m,f,d),typeof _.type=="function"&&(_.__d=d)):d&&s.__e==d&&d.parentNode!=t&&(d=x(s))}for(_.__e=F,o=k;o--;)m[o]!=null&&(typeof _.type=="function"&&m[o].__e!=null&&m[o].__e==_.__d&&(_.__d=x(r,o+1)),ae(m[o],m[o]));if(v)for(o=0;o<v.length;o++)fe(v[o],v[++o],v[++o])}function ce(t,e,_){for(var r,i=t.__k,n=0;i&&n<i.length;n++)(r=i[n])&&(r.__=t,e=typeof r.type=="function"?ce(r,e,_):ue(_,r,r,i,r.__e,e));return e}function ue(t,e,_,r,i,n){var c,a,d;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(_==null||i!=n||i.parentNode==null)e:if(n==null||n.parentNode!==t)t.appendChild(i),c=null;else{for(a=n,d=0;(a=a.nextSibling)&&d<r.length;d+=2)if(a==i)break e;t.insertBefore(i,n),c=n}return c!==void 0?c:i.nextSibling}function ge(t,e,_,r,i){var n;for(n in _)n==="children"||n==="key"||n in e||M(t,n,null,_[n],r);for(n in e)i&&typeof e[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||_[n]===e[n]||M(t,n,e[n],_[n],r)}function q(t,e,_){e[0]==="-"?t.setProperty(e,_):t[e]=_==null?"":typeof _!="number"||me.test(e)?_:_+"px"}function M(t,e,_,r,i){var n;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)_&&e in _||q(t.style,e,"");if(_)for(e in _)r&&_[e]===r[e]||q(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=_,_?r||t.addEventListener(e,n?K:G,n):t.removeEventListener(e,n?K:G,n);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=_==null?"":_;break e}catch{}typeof _=="function"||(_!=null&&(_!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,_):t.removeAttribute(e))}}function G(t){this.l[t.type+!1](u.event?u.event(t):t)}function K(t){this.l[t.type+!0](u.event?u.event(t):t)}function B(t,e,_,r,i,n,c,a,d){var p,o,h,s,l,f,F,v,m,k,w,V,H,b=e.type;if(e.constructor!==void 0)return null;_.__h!=null&&(d=_.__h,a=e.__e=_.__e,e.__h=null,n=[a]),(p=u.__b)&&p(e);try{e:if(typeof b=="function"){if(v=e.props,m=(p=b.contextType)&&r[p.__c],k=p?m?m.props.value:p.__:r,_.__c?F=(o=e.__c=_.__c).__=o.__E:("prototype"in b&&b.prototype.render?e.__c=o=new b(v,k):(e.__c=o=new S(v,k),o.constructor=b,o.render=ke),m&&m.sub(o),o.props=v,o.state||(o.state={}),o.context=k,o.__n=r,h=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=E({},o.__s)),E(o.__s,b.getDerivedStateFromProps(v,o.__s))),s=o.props,l=o.state,h)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,k),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,k)===!1||e.__v===_.__v){o.props=v,o.state=o.__s,e.__v!==_.__v&&(o.__d=!1),o.__v=e,e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(P){P&&(P.__=e)}),o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,k),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,l,f)})}if(o.context=k,o.props=v,o.__v=e,o.__P=t,w=u.__r,V=0,"prototype"in b&&b.prototype.render)o.state=o.__s,o.__d=!1,w&&w(e),p=o.render(o.props,o.state,o.context);else do o.__d=!1,w&&w(e),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++V<25);o.state=o.__s,o.getChildContext!=null&&(r=E(E({},r),o.getChildContext())),h||o.getSnapshotBeforeUpdate==null||(f=o.getSnapshotBeforeUpdate(s,l)),H=p!=null&&p.type===$&&p.key==null?p.props.children:p,le(t,Array.isArray(H)?H:[H],e,_,r,i,n,c,a,d),o.base=e.__e,e.__h=null,o.__h.length&&c.push(o),F&&(o.__E=o.__=null),o.__e=!1}else n==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=be(_.__e,e,_,r,i,n,c,d);(p=u.diffed)&&p(e)}catch(P){e.__v=null,(d||n!=null)&&(e.__e=a,e.__h=!!d,n[n.indexOf(a)]=null),u.__e(P,e,_)}}function se(t,e){u.__c&&u.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(r){r.call(_)})}catch(r){u.__e(r,_.__v)}})}function be(t,e,_,r,i,n,c,a){var d,p,o,h=_.props,s=e.props,l=e.type,f=0;if(l==="svg"&&(i=!0),n!=null){for(;f<n.length;f++)if((d=n[f])&&"setAttribute"in d==!!l&&(l?d.localName===l:d.nodeType===3)){t=d,n[f]=null;break}}if(t==null){if(l===null)return document.createTextNode(s);t=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,s.is&&s),n=null,a=!1}if(l===null)h===s||a&&t.data===s||(t.data=s);else{if(n=n&&O.call(t.childNodes),p=(h=_.props||L).dangerouslySetInnerHTML,o=s.dangerouslySetInnerHTML,!a){if(n!=null)for(h={},f=0;f<t.attributes.length;f++)h[t.attributes[f].name]=t.attributes[f].value;(o||p)&&(o&&(p&&o.__html==p.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(ge(t,s,h,i,a),o)e.__k=[];else if(f=e.props.children,le(t,Array.isArray(f)?f:[f],e,_,r,i&&l!=="foreignObject",n,c,n?n[0]:_.__k&&x(_,0),a),n!=null)for(f=n.length;f--;)n[f]!=null&&re(n[f]);a||("value"in s&&(f=s.value)!==void 0&&(f!==t.value||l==="progress"&&!f||l==="option"&&f!==h.value)&&M(t,"value",f,h.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==t.checked&&M(t,"checked",f,h.checked,!1))}return t}function fe(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(r){u.__e(r,_)}}function ae(t,e,_){var r,i;if(u.unmount&&u.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||fe(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){u.__e(n,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&ae(r[i],e,typeof t.type!="function");_||t.__e==null||re(t.__e),t.__e=t.__d=void 0}function ke(t,e,_){return this.constructor(t,_)}function Ee(t,e,_){var r,i,n;u.__&&u.__(t,e),i=(r=typeof _=="function")?null:_&&_.__k||e.__k,n=[],B(e,t=(!r&&_||e).__k=ye($,null,[t]),i||L,L,e.ownerSVGElement!==void 0,!r&&_?[_]:i?null:e.firstChild?O.call(e.childNodes):null,n,!r&&_?_:i?i.__e:e.firstChild,r),se(n,t)}O=oe.slice,u={__e:function(t,e,_,r){for(var i,n,c;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),c=i.__d),c)return i.__E=i}catch(a){t=a}throw t}},_e=0,S.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof t=="function"&&(t=t(E({},_),this.props)),t&&E(_,t),t!=null&&this.__v&&(e&&this.__h.push(e),j(this))},S.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),j(this))},S.prototype.render=$,A=[],ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N.__r=0;var de,y,U,Y,W=0,pe=[],T=[],J=u.__b,Q=u.__r,X=u.diffed,Z=u.__c,ee=u.unmount;function Fe(t,e){u.__h&&u.__h(y,t,W||e),W=0;var _=y.__H||(y.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({__V:T}),_.__[t]}function I(t){return W=1,xe(he,t)}function xe(t,e,_){var r=Fe(de++,2);return r.t=t,r.__c||(r.__=[_?_(e):he(void 0,e),function(i){var n=r.t(r.__[0],i);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=y),r.__}function we(){for(var t;t=pe.shift();)if(t.__P)try{t.__H.__h.forEach(D),t.__H.__h.forEach(z),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){y=null,J&&J(t)},u.__r=function(t){Q&&Q(t),de=0;var e=(y=t.__c).__H;e&&(U===y?(e.__h=[],y.__h=[],e.__.forEach(function(_){_.__V=T,_.u=void 0})):(e.__h.forEach(D),e.__h.forEach(z),e.__h=[])),U=y},u.diffed=function(t){X&&X(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(pe.push(e)!==1&&Y===u.requestAnimationFrame||((Y=u.requestAnimationFrame)||function(_){var r,i=function(){clearTimeout(n),te&&cancelAnimationFrame(r),setTimeout(_)},n=setTimeout(i,100);te&&(r=requestAnimationFrame(i))})(we)),e.__H.__.forEach(function(_){_.u&&(_.__H=_.u),_.__V!==T&&(_.__=_.__V),_.u=void 0,_.__V=T})),U=y=null},u.__c=function(t,e){e.some(function(_){try{_.__h.forEach(D),_.__h=_.__h.filter(function(r){return!r.__||z(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],u.__e(r,_.__v)}}),Z&&Z(t,e)},u.unmount=function(t){ee&&ee(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(r){try{D(r)}catch(i){e=i}}),e&&u.__e(e,_.__v))};var te=typeof requestAnimationFrame=="function";function D(t){var e=y,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),y=e}function z(t){var e=y;t.__c=t.__(),y=e}function he(t,e){return typeof e=="function"?e(t):e}var Ae=0;function g(t,e,_,r,i){var n,c,a={};for(c in e)c=="ref"?n=e[c]:a[c]=e[c];var d={type:t,props:a,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ae,__source:i,__self:r};if(typeof t=="function"&&(n=t.defaultProps))for(c in n)a[c]===void 0&&(a[c]=n[c]);return u.vnode&&u.vnode(d),d}const $e={"\u{1FAA8}":["\u{1F5DE}","\u{1F596}"],"\u{1F5DE}":["\u2702\uFE0F","\u{1F98E}"],"\u2702\uFE0F":["\u{1FAA8}","\u{1F596}"],"\u{1F98E}":["\u{1FAA8}","\u2702\uFE0F"],"\u{1F596}":["\u{1F5DE}","\u{1F98E}"]},He=()=>g(Se,{winningOptions:$e}),Pe=t=>Math.round(Math.random()*1e3)%t.length,Ce=(t,e,_,r)=>{const i=r[_[t]];return console.log(i),i.includes(e)?"You win!":e==_[t]?"TIE":"You Lose :("},Se=t=>{const e=t.winningOptions,_=Object.keys(e),[r,i]=I("\u2753"),[n,c]=I("\u2753"),[a,d]=I("PICK TO BEGIN"),p=o=>{i(o);const h=Pe(_);c(_[h]),d(Ce(h,o,_,e))};return g($,{children:[g("div",{class:"flexy",children:_.map(o=>g("button",{onClick:()=>p(o),class:"button",children:o}))}),g("h1",{class:"result",children:a}),g("div",{class:"flexy",children:[g("span",{style:{margin:"0.5em"},children:[g("h1",{children:"\u{1F5A5} "}),g("div",{class:"button",children:n})]}),g("span",{children:[g("h1",{children:"  \u{1F64B}\u200D\u2640\uFE0F"}),g("div",{class:"button",children:r})]})]})]})};Ee(g(He,{}),document.getElementById("app"));