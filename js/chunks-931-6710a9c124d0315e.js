(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8473:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",a="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},27487:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(67835),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},58828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let r=n(43219),o=r._(n(2784)),u=n(26847),l=n(88474),f=n(23813),i=n(32024),a=n(88482),c=n(14583),s=n(33145),d=n(89082),p=n(27487),h=n(83497),y=n(8473),v=new Set;function _(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(v.has(u))return;v.add(u)}let f=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:v,children:m,prefetch:g=null,passHref:O,replace:C,shallow:j,scroll:E,locale:M,onClick:P,onMouseEnter:T,onTouchStart:k,legacyBehavior:x=!1,...R}=e;n=m,x&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let A=o.default.useContext(c.RouterContext),I=o.default.useContext(s.AppRouterContext),N=null!=A?A:I,L=!A,S=!1!==g,w=null===g?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:U,as:K}=o.default.useMemo(()=>{if(!A){let e=b(f);return{href:e,as:v?b(v):e}}let[e,t]=(0,u.resolveHref)(A,f,!0);return{href:e,as:v?(0,u.resolveHref)(A,v):t||e}},[A,f,v]),F=o.default.useRef(U),H=o.default.useRef(K);x&&(r=o.default.Children.only(n));let D=x?r&&"object"==typeof r&&r.ref:t,[V,G,z]=(0,d.useIntersection)({rootMargin:"200px"}),B=o.default.useCallback(e=>{(H.current!==K||F.current!==U)&&(z(),H.current=K,F.current=U),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[K,D,U,z,V]);o.default.useEffect(()=>{N&&G&&S&&_(N,U,K,{locale:M},{kind:w},L)},[K,U,G,M,S,null==A?void 0:A.locale,N,L,w]);let q={ref:B,onClick(e){x||"function"!=typeof P||P(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,u,f,i,a,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let h=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:f,locale:a,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(h):h()}(e,N,U,K,C,j,E,M,L,S)},onMouseEnter(e){x||"function"!=typeof T||T(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(S||!L)&&_(N,U,K,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:w},L)},onTouchStart(e){x||"function"!=typeof k||k(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(S||!L)&&_(N,U,K,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:w},L)}};if((0,i.isAbsoluteUrl)(K))q.href=K;else if(!x||O||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(K,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);q.href=t||(0,h.addBasePath)((0,a.addLocale)(K,e,null==A?void 0:A.defaultLocale))}return x?o.default.cloneElement(r,q):o.default.createElement("a",{...R,...q},n)}),g=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},89082:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(2784),o=n(63646),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(a||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39097:function(e,t,n){e.exports=n(58828)},39237:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(57442),o=n(32509),u=n(35743),l=n(68023),f=n(31053),i=n(52322),a=e=>(0,i.jsx)("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...e,children:(0,i.jsx)("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),c=(0,l.G)((e,t)=>{let{icon:n,iconSpacing:l="0.75rem",...c}=e,s=(0,u.gO)(c,t);return(0,i.jsxs)(r.C,{...s,className:(0,f.cx)("chakra-menu__menuitem-option",c.className),children:[null!==n&&(0,i.jsx)(o.O,{fontSize:"0.8em",marginEnd:l,opacity:e.isChecked?1:0,children:n||(0,i.jsx)(a,{})}),(0,i.jsx)("span",{style:{flex:1},children:s.children})]})});c.id="MenuItemOption",c.displayName="MenuItemOption"},44035:function(e,t,n){"use strict";n.d(t,{_:function(){return f}});var r=n(69024),o=n(35743),u=n(31053),l=n(52322),f=e=>{let{className:t,title:n,...f}=e,i=(0,o.Vg)(f);return(0,l.jsx)(r.k,{title:n,className:(0,u.cx)("chakra-menu__option-group",t),...i})};f.displayName="MenuOptionGroup"}}]);
//# sourceMappingURL=931-6710a9c124d0315e.js.map