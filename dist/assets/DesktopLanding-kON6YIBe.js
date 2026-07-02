import{S as i5,p as gf,r as Ct,s as Aa,a as Vi,n as Ea,e as ka,i as xf,t as r5,b as Ur,f as s5,c as o5,d as vf,g as fd,h as C,j as hd,u as a5,k as l5,l as c5,m as u5,R as Be,o as h,q as D,P as xe,v as Hr,w as f5,x as Pa,y as dd,T as pd,z as md,A as gn,E as sl,N as h5,B as hs,F as d5,C as p5,W as m5,D as g5,G as ra,H as hn,I as Ki,J as x5,L as v5,K as y5,M as b5,O as yf,Q as w5,U as sa,V as C5,X as gd,Y as S5}from"./index-B8lI0-RW.js";var T5=class extends i5{constructor(e,n){super(),this.options=n,this.#n=e,this.#r=null,this.#i=gf(),this.bindMethods(),this.setOptions(n)}#n;#e=void 0;#p=void 0;#t=void 0;#o;#u;#i;#r;#m;#f;#h;#a;#l;#s;#d=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),bf(this.#e,this.options)?this.#c():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ra(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ra(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#w(),this.#e.removeObserver(this)}setOptions(e){const n=this.options,r=this.#e;if(this.options=this.#n.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Ct(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#C(),this.#e.setOptions(this.options),n._defaulted&&!Aa(this.options,n)&&this.#n.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const s=this.hasListeners();s&&wf(this.#e,r,this.options,n)&&this.#c(),this.updateResult(),s&&(this.#e!==r||Ct(this.options.enabled,this.#e)!==Ct(n.enabled,this.#e)||Vi(this.options.staleTime,this.#e)!==Vi(n.staleTime,this.#e))&&this.#g();const a=this.#x();s&&(this.#e!==r||Ct(this.options.enabled,this.#e)!==Ct(n.enabled,this.#e)||a!==this.#s)&&this.#v(a)}getOptimisticResult(e){const n=this.#n.getQueryCache().build(this.#n,e),r=this.createResult(n,e);return M5(this,r)&&(this.#t=r,this.#u=this.options,this.#o=this.#e.state),r}getCurrentResult(){return this.#t}trackResult(e,n){return new Proxy(e,{get:(r,s)=>(this.trackProp(s),n?.(s),s==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#i.status==="pending"&&this.#i.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(r,s))})}trackProp(e){this.#d.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=this.#n.defaultQueryOptions(e),r=this.#n.getQueryCache().build(this.#n,n);return r.fetch().then(()=>this.createResult(r,n))}fetch(e){return this.#c({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#c(e){this.#C();let n=this.#e.fetch(this.options,e);return e?.throwOnError||(n=n.catch(Ea)),n}#g(){this.#b();const e=Vi(this.options.staleTime,this.#e);if(ka.isServer()||this.#t.isStale||!xf(e))return;const r=r5(this.#t.dataUpdatedAt,e)+1;this.#a=Ur.setTimeout(()=>{this.#t.isStale||this.updateResult()},r)}#x(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(e){this.#w(),this.#s=e,!(ka.isServer()||Ct(this.options.enabled,this.#e)===!1||!xf(this.#s)||this.#s===0)&&(this.#l=Ur.setInterval(()=>{(this.options.refetchIntervalInBackground||s5.isFocused())&&this.#c()},this.#s))}#y(){this.#g(),this.#v(this.#x())}#b(){this.#a!==void 0&&(Ur.clearTimeout(this.#a),this.#a=void 0)}#w(){this.#l!==void 0&&(Ur.clearInterval(this.#l),this.#l=void 0)}createResult(e,n){const r=this.#e,s=this.options,a=this.#t,u=this.#o,l=this.#u,p=e!==r?e.state:this.#p,{state:m}=e;let g={...m},y=!1,b;if(n._optimisticResults){const B=this.hasListeners(),H=!B&&bf(e,n),U=B&&wf(e,r,n,s);(H||U)&&(g={...g,...o5(m.data,e.options)}),n._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:k,errorUpdatedAt:_,status:E}=g;b=g.data;let S=!1;if(n.placeholderData!==void 0&&b===void 0&&E==="pending"){let B;a?.isPlaceholderData&&n.placeholderData===l?.placeholderData?(B=a.data,S=!0):B=typeof n.placeholderData=="function"?n.placeholderData(this.#h?.state.data,this.#h):n.placeholderData,B!==void 0&&(E="success",b=vf(a?.data,B,n),y=!0)}if(n.select&&b!==void 0&&!S)if(a&&b===u?.data&&n.select===this.#m)b=this.#f;else try{this.#m=n.select,b=n.select(b),b=vf(a?.data,b,n),this.#f=b,this.#r=null}catch(B){this.#r=B}this.#r&&(k=this.#r,b=this.#f,_=Date.now(),E="error");const P=g.fetchStatus==="fetching",j=E==="pending",I=E==="error",L=j&&P,$=b!==void 0,G={status:E,fetchStatus:g.fetchStatus,isPending:j,isSuccess:E==="success",isError:I,isInitialLoading:L,isLoading:L,data:b,dataUpdatedAt:g.dataUpdatedAt,error:k,errorUpdatedAt:_,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:g.dataUpdateCount>p.dataUpdateCount||g.errorUpdateCount>p.errorUpdateCount,isFetching:P,isRefetching:P&&!j,isLoadingError:I&&!$,isPaused:g.fetchStatus==="paused",isPlaceholderData:y,isRefetchError:I&&$,isStale:ol(e,n),refetch:this.refetch,promise:this.#i,isEnabled:Ct(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const B=G.data!==void 0,H=G.status==="error"&&!B,U=ve=>{H?ve.reject(G.error):B&&ve.resolve(G.data)},ne=()=>{const ve=this.#i=G.promise=gf();U(ve)},pe=this.#i;switch(pe.status){case"pending":e.queryHash===r.queryHash&&U(pe);break;case"fulfilled":(H||G.data!==pe.value)&&ne();break;case"rejected":(!H||G.error!==pe.reason)&&ne();break}}return G}updateResult(){const e=this.#t,n=this.createResult(this.#e,this.options);if(this.#o=this.#e.state,this.#u=this.options,this.#o.data!==void 0&&(this.#h=this.#e),Aa(n,e))return;this.#t=n;const r=()=>{if(!e)return!0;const{notifyOnChangeProps:s}=this.options,a=typeof s=="function"?s():s;if(a==="all"||!a&&!this.#d.size)return!0;const u=new Set(a??this.#d);return this.options.throwOnError&&u.add("error"),Object.keys(this.#t).some(l=>{const f=l;return this.#t[f]!==e[f]&&u.has(f)})};this.#S({listeners:r()})}#C(){const e=this.#n.getQueryCache().build(this.#n,this.options);if(e===this.#e)return;const n=this.#e;this.#e=e,this.#p=e.state,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#S(e){fd.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(this.#t)}),this.#n.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function _5(e,n){return Ct(n.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&Ct(n.retryOnMount,e)===!1)}function bf(e,n){return _5(e,n)||e.state.data!==void 0&&Ra(e,n,n.refetchOnMount)}function Ra(e,n,r){if(Ct(n.enabled,e)!==!1&&Vi(n.staleTime,e)!=="static"){const s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&ol(e,n)}return!1}function wf(e,n,r,s){return(e!==n||Ct(s.enabled,e)===!1)&&(!r.suspense||e.state.status!=="error")&&ol(e,r)}function ol(e,n){return Ct(n.enabled,e)!==!1&&e.isStaleByTime(Vi(n.staleTime,e))}function M5(e,n){return!Aa(e.getCurrentResult(),n)}var xd=C.createContext(!1),A5=()=>C.useContext(xd);xd.Provider;function E5(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var k5=C.createContext(E5()),P5=()=>C.useContext(k5),R5=(e,n,r)=>{const s=r?.state.error&&typeof e.throwOnError=="function"?hd(e.throwOnError,[r.state.error,r]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||s)&&(n.isReset()||(e.retryOnMount=!1))},j5=e=>{C.useEffect(()=>{e.clearReset()},[e])},I5=({result:e,errorResetBoundary:n,throwOnError:r,query:s,suspense:a})=>e.isError&&!n.isReset()&&!e.isFetching&&s&&(a&&e.data===void 0||hd(r,[e.error,s])),L5=e=>{if(e.suspense){const r=a=>a==="static"?a:Math.max(a??1e3,1e3),s=e.staleTime;e.staleTime=typeof s=="function"?(...a)=>r(s(...a)):r(s),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},D5=(e,n)=>e.isLoading&&e.isFetching&&!n,F5=(e,n)=>e?.suspense&&n.isPending,Cf=(e,n,r)=>n.fetchOptimistic(e).catch(()=>{r.clearReset()});function V5(e,n,r){const s=A5(),a=P5(),u=a5(),l=u.defaultQueryOptions(e);u.getDefaultOptions().queries?._experimental_beforeQuery?.(l);const f=u.getQueryCache().get(l.queryHash),p=e.subscribed!==!1;l._optimisticResults=s?"isRestoring":p?"optimistic":void 0,L5(l),R5(l,a,f),j5(a);const m=!u.getQueryCache().get(l.queryHash),[g]=C.useState(()=>new n(u,l)),y=g.getOptimisticResult(l),b=!s&&p;if(C.useSyncExternalStore(C.useCallback(k=>{const _=b?g.subscribe(fd.batchCalls(k)):Ea;return g.updateResult(),_},[g,b]),()=>g.getCurrentResult(),()=>g.getCurrentResult()),C.useEffect(()=>{g.setOptions(l)},[l,g]),F5(l,y))throw Cf(l,g,a);if(I5({result:y,errorResetBoundary:a,throwOnError:l.throwOnError,query:f,suspense:l.suspense}))throw y.error;return u.getDefaultOptions().queries?._experimental_afterQuery?.(l,y),l.experimental_prefetchInRender&&!ka.isServer()&&D5(y,s)&&(m?Cf(l,g,a):f?.promise)?.catch(Ea).finally(()=>{g.updateResult()}),l.notifyOnChangeProps?y:g.trackResult(y)}function vd(e,n){return V5(e,T5)}var Qt={};const O5=l5(c5);var Sf;function z5(){if(Sf)return Qt;Sf=1,Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.default=Qt.Normalize=Qt.normalize=void 0;var e=O5,n=(0,e.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);Qt.normalize=n;var r=(0,e.createGlobalStyle)(n);Qt.Normalize=r,r.displayName="Normalize";var s=n;return Qt.default=s,Qt}var B5=z5();const $5=u5`
  ${B5.normalize}
  
  *, ::before, ::after {
    border-width: 0;
    border-style: solid;
    border-color: theme('borderColor.DEFAULT', currentColor);
  }

  blockquote, dl, dd, h1, h2, h3,
  h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  img, svg, video, canvas, audio, 
  iframe, embed, object {
    display: block;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    background-color: ${({theme:e})=>e.backgroundImage?"transparent":e.colors?.body};
      background-image: url(${({theme:e})=>e.newBackgroundImage?e.newBackgroundImage:e.backgroundImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
    color: ${({theme:e})=>e.colors?.text[100]};
  }

  /* ===== Custom Scroll Bar ===== */
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.25);
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.scrollHandle};
    border-radius: 6px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors?.scrollHandleHover};
  }

  input[type=text] {
    background-color: transparent !important;
    color: ${({theme:e})=>e.colors?.text[100]};
    caret-color: ${({theme:e})=>e.colors?.primary};
    border: none;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none !important;
  }

  /* Remove browser autofill background and keep text color consistent */
  input[type=text]:-webkit-autofill,
  input[type=text]:-webkit-autofill:hover,
  input[type=text]:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({theme:e})=>e.colors?.text[100]};
    box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 9999s ease-in-out 0s;
  }

  /* Optional: subtle selection color that doesn't create a solid block */
  ::selection {
    background: rgba(255, 255, 255, 0.15);
  }
  input[type=text]:focus-visible {
    outline: none;
  }

  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`,yd=D.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  color: #eceff4;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  z-index: ${({$hasActiveContextMenu:e})=>e?1e4:5}; /* below windows, raise when context menu is open */
`,W5=D.div`
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.28);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 6px 18px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.12s ease,
    background 0.12s ease,
    box-shadow 0.12s ease;
  box-shadow: ${({$active:e})=>e?"0 0 0 2px rgba(0, 180, 255, 0.9), 0 6px 18px rgba(0, 0, 0, 0.3)":"0 0 0 1px rgba(255, 255, 255, 0.08), 0 6px 18px rgba(0, 0, 0, 0.3)"};

  ${yd}:hover & {
    background: rgba(0, 0, 0, 0.36);
    transform: translateY(-1px);
  }
`,U5=D.div`
  font-size: 12px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
`,Nr=({onOpen:e,href:n,target:r="_blank",label:s,icon:a,style:u,active:l,onContextMenu:f,contextMenu:p})=>{const m=Be.useRef({x:0,y:0}),g=Be.useRef({x:0,y:0}),y=(S,P)=>{S.current={x:P.x,y:P.y}},b=S=>y(m,{x:S.clientX,y:S.clientY}),k=S=>y(g,{x:S.clientX,y:S.clientY}),_=S=>{if(S.key==="Enter"||S.key===" ")return S.preventDefault(),e?e():n&&window.open(n,r)},E=()=>{if(m.current.x===g.current.x)return e?e():n&&window.open(n,r)};return h.jsxs(yd,{role:"button",tabIndex:0,"aria-label":`Open ${s}`,onClick:E,onMouseDown:b,onMouseUp:k,onKeyDown:_,onContextMenu:f,style:u,$hasActiveContextMenu:!!p,children:[h.jsx(W5,{$active:l,children:a}),h.jsx(U5,{children:s}),p]})},pn={AppsIcon:h.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[h.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),h.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),h.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),h.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),Terminal:h.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[h.jsx("rect",{x:"3",y:"4",width:"18",height:"14",rx:"4",stroke:"currentColor",strokeWidth:"1.6"}),h.jsx("path",{d:"M7 9l3 3-3 3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M12 15h5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]}),LinkedIn:h.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:h.jsx("path",{d:"M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.33 6 7.66V24h-5v-7.58c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.97-2.9 4v7.72h-5V8z"})}),Instagram:h.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 2500 2500",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",children:[h.jsx("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),h.jsx("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsxs("g",{id:"SVGRepo_iconCarrier",children:[h.jsxs("defs",{children:[h.jsxs("radialGradient",{id:"0",cx:"332.14",cy:"2511.81",r:"3263.54",gradientUnits:"userSpaceOnUse",children:[h.jsx("stop",{offset:".09","stop-color":"#959595ff"}),h.jsx("stop",{offset:".78","stop-color":"#f6f6f6ff"})]}),h.jsxs("radialGradient",{id:"1",cx:"1516.14",cy:"2623.81",r:"2572.12",gradientUnits:"userSpaceOnUse",children:[h.jsx("stop",{offset:".64","stop-color":"#939393ff","stop-opacity":"0"}),h.jsx("stop",{offset:"1","stop-color":"#939393ff"})]})]}),h.jsx("path",{d:"M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57",fill:"url(#0)"}),h.jsx("path",{d:"M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57",fill:"url(#1)"})]})]}),GitHub:h.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:h.jsx("path",{d:"M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.66.25 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.61-5.48 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0012 .5z"})}),Facebook:h.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:h.jsx("path",{d:"M22 12a10 10 0 10-11.5 9.95V14.9H7.9V12h2.6V9.8c0-2.57 1.54-3.99 3.9-3.99 1.13 0 2.33.2 2.33.2v2.56h-1.31c-1.29 0-1.69.8-1.69 1.63V12h2.88l-.46 2.9h-2.42v7.05A10 10 0 0022 12z"})}),Blog:h.jsx("img",{src:"https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",alt:"dev.to logo",width:"28",height:"28"}),PDF:h.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/337/337946.png",alt:"PDF icon",width:"28",height:"28"}),Browser:h.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[h.jsx("path",{fill:"#7D4698",d:"M24 2C11.8 2 2 11.8 2 24s9.8 22 22 22 22-9.8 22-22S36.2 2 24 2z"}),h.jsx("path",{fill:"#FFFFFF",d:"M24 7c9.4 0 17 7.6 17 17s-7.6 17-17 17S7 33.4 7 24 14.6 7 24 7z"}),h.jsx("path",{fill:"#7D4698",d:"M24 10c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14zm0 3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"}),h.jsx("path",{fill:"#7D4698",d:"M24 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"}),h.jsx("circle",{fill:"#7D4698",cx:"24",cy:"24",r:"5"})]}),Fullscreen:h.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:h.jsx("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),FullscreenExit:h.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[h.jsx("path",{d:"M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M8 8l3 3M16 16l-3-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),Email:h.jsxs("svg",{fill:"#292929ff",viewBox:"0 0 24 24",width:"32",height:"32",id:"email","data-name":"Flat Color",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),h.jsx("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsxs("g",{id:"SVGRepo_iconCarrier",children:[h.jsx("rect",{id:"primary",x:"2",y:"4",width:"20",height:"16",rx:"2",fill:"#000000"}),h.jsx("path",{id:"secondary",d:"M21.25,4.45A2,2,0,0,0,20,4H4a2,2,0,0,0-1.25.45A1,1,0,0,0,2.76,6l8,6.29a2,2,0,0,0,2.48,0l8-6.29a1,1,0,0,0,0-1.56Z",fill:"#c6c6c6ff"})]})]})},Tf=[...xe.personalInfo.socials,{value:"Email",href:"/email"}],bd=()=>{const[e,n]=C.useState({visible:!1,windowKey:null});C.useEffect(()=>{const a=()=>{e.visible&&s()};return e.visible&&document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[e.visible]);const r=(a,u)=>{a.preventDefault(),n({visible:!0,windowKey:u})},s=()=>{n({visible:!1,windowKey:null})};return{handleContextMenu:r,setContextMenu:n,contextMenu:e,closeContextMenu:s}},H5=D.div`
  position: absolute;
  min-width: 160px;
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: ${({theme:e})=>`1px solid ${e.colors?.scrollHandle}`};
  border-radius: 10px;
  padding: 6px;
  z-index: 10000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  ${({$position:e="bottom"})=>{switch(e){case"top":return`
          /* Position above element centered */
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
        `;case"top-left":return`
          /* Position above element aligned left */
          bottom: 100%;
          right: 0;
          margin-bottom: 8px;
        `;case"top-right":return`
          /* Position above element aligned right */
          bottom: 100%;
          left: 0;
          margin-bottom: 8px;
        `;case"bottom-left":return`
          /* Position below element aligned left */
          top: 100%;
          right: 0;
          margin-top: 8px;
        `;case"bottom-right":return`
          /* Position below element aligned right */
          top: 100%;
          left: 0;
          margin-top: 8px;
        `;default:return`
          /* Position below element centered (default) */
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
        `}}}

  /* Keep inside screen boundaries */
  max-width: calc(100vw - 24px);
  @media (max-height: 600px) {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 8px;
  }
`,N5=D.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  color: #eceff4;
  cursor: pointer;
  font-size: 13px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  text-align: left;
  border-radius: 6px;
  transition: all 0.1s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &:active {
    background: rgba(255, 255, 255, 0.12);
  }
`,Pn=({items:e,onClose:n,position:r="bottom"})=>{const s=a=>{a.stopPropagation()};return h.jsx(H5,{$position:r,onClick:s,children:e.map((a,u)=>h.jsxs(N5,{onClick:()=>{a.onClick(),n()},disabled:a.disabled,children:[a.icon&&h.jsx("span",{children:a.icon}),a.label]},u))})},G5=h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"})}),K5=h.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M20 9H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z"}),h.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),Y5=h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M4 12h16"})}),q5=h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),wd=h.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),h.jsx("polyline",{points:"15 3 21 3 21 9"}),h.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),ri=e=>{const{visible:n,maximized:r,toggleMaximize:s,minimize:a,close:u,open:l}=e,f=[{icon:r?K5:G5,label:r?"Restore":"Maximize",onClick:()=>s?.(),disabled:!s}];return n&&a&&f.push({icon:Y5,label:"Minimize",onClick:()=>a?.(),disabled:!a}),f.push({icon:q5,label:"Close",onClick:()=>u?.(),disabled:!u}),{taskbar:f,"desktop-shortcuts":[{icon:wd,label:"Open",onClick:()=>l?.(),disabled:!l}]}};var Li={exports:{}};var X5=Li.exports,_f;function Z5(){return _f||(_f=1,(function(e,n){(function(){var r,s="4.18.1",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",p="Invalid `imports` option passed into `_.template`",m="__lodash_hash_undefined__",g=500,y="__lodash_placeholder__",b=1,k=2,_=4,E=1,S=2,P=1,j=2,I=4,L=8,$=16,W=32,G=64,B=128,H=256,U=512,ne=30,pe="...",ve=800,fe=16,oe=1,re=2,ue=3,q=1/0,me=9007199254740991,De=17976931348623157e292,N=NaN,te=4294967295,Me=te-1,$e=te>>>1,Xe=[["ary",B],["bind",P],["bindKey",j],["curry",L],["curryRight",$],["flip",U],["partial",W],["partialRight",G],["rearg",H]],tn="[object Arguments]",Vn="[object Array]",b0="[object AsyncFunction]",ui="[object Boolean]",fi="[object Date]",w0="[object DOMException]",Ji="[object Error]",er="[object Function]",Fl="[object GeneratorFunction]",Mt="[object Map]",hi="[object Number]",C0="[object Null]",Ut="[object Object]",Vl="[object Promise]",S0="[object Proxy]",di="[object RegExp]",At="[object Set]",pi="[object String]",tr="[object Symbol]",T0="[object Undefined]",mi="[object WeakMap]",_0="[object WeakSet]",gi="[object ArrayBuffer]",On="[object DataView]",Ds="[object Float32Array]",Fs="[object Float64Array]",Vs="[object Int8Array]",Os="[object Int16Array]",zs="[object Int32Array]",Bs="[object Uint8Array]",$s="[object Uint8ClampedArray]",Ws="[object Uint16Array]",Us="[object Uint32Array]",M0=/\b__p \+= '';/g,A0=/\b(__p \+=) '' \+/g,E0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ol=/&(?:amp|lt|gt|quot|#39);/g,zl=/[&<>"']/g,k0=RegExp(Ol.source),P0=RegExp(zl.source),R0=/<%-([\s\S]+?)%>/g,j0=/<%([\s\S]+?)%>/g,Bl=/<%=([\s\S]+?)%>/g,I0=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L0=/^\w*$/,D0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hs=/[\\^$.*+?()[\]{}|]/g,F0=RegExp(Hs.source),Ns=/^\s+/,V0=/\s/,O0=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,z0=/\{\n\/\* \[wrapped with (.+)\] \*/,B0=/,? & /,$0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,$l=/[()=,{}\[\]\/\s]/,W0=/\\(\\)?/g,U0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Wl=/\w*$/,H0=/^[-+]0x[0-9a-f]+$/i,N0=/^0b[01]+$/i,G0=/^\[object .+?Constructor\]$/,K0=/^0o[0-7]+$/i,Y0=/^(?:0|[1-9]\d*)$/,q0=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nr=/($^)/,X0=/['\n\r\u2028\u2029\\]/g,ir="\\ud800-\\udfff",Z0="\\u0300-\\u036f",Q0="\\ufe20-\\ufe2f",J0="\\u20d0-\\u20ff",Ul=Z0+Q0+J0,Hl="\\u2700-\\u27bf",Nl="a-z\\xdf-\\xf6\\xf8-\\xff",e1="\\xac\\xb1\\xd7\\xf7",t1="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",n1="\\u2000-\\u206f",i1=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Gl="A-Z\\xc0-\\xd6\\xd8-\\xde",Kl="\\ufe0e\\ufe0f",Yl=e1+t1+n1+i1,Gs="['’]",r1="["+ir+"]",ql="["+Yl+"]",rr="["+Ul+"]",Xl="\\d+",s1="["+Hl+"]",Zl="["+Nl+"]",Ql="[^"+ir+Yl+Xl+Hl+Nl+Gl+"]",Ks="\\ud83c[\\udffb-\\udfff]",o1="(?:"+rr+"|"+Ks+")",Jl="[^"+ir+"]",Ys="(?:\\ud83c[\\udde6-\\uddff]){2}",qs="[\\ud800-\\udbff][\\udc00-\\udfff]",zn="["+Gl+"]",ec="\\u200d",tc="(?:"+Zl+"|"+Ql+")",a1="(?:"+zn+"|"+Ql+")",nc="(?:"+Gs+"(?:d|ll|m|re|s|t|ve))?",ic="(?:"+Gs+"(?:D|LL|M|RE|S|T|VE))?",rc=o1+"?",sc="["+Kl+"]?",l1="(?:"+ec+"(?:"+[Jl,Ys,qs].join("|")+")"+sc+rc+")*",c1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",oc=sc+rc+l1,f1="(?:"+[s1,Ys,qs].join("|")+")"+oc,h1="(?:"+[Jl+rr+"?",rr,Ys,qs,r1].join("|")+")",d1=RegExp(Gs,"g"),p1=RegExp(rr,"g"),Xs=RegExp(Ks+"(?="+Ks+")|"+h1+oc,"g"),m1=RegExp([zn+"?"+Zl+"+"+nc+"(?="+[ql,zn,"$"].join("|")+")",a1+"+"+ic+"(?="+[ql,zn+tc,"$"].join("|")+")",zn+"?"+tc+"+"+nc,zn+"+"+ic,u1,c1,Xl,f1].join("|"),"g"),g1=RegExp("["+ec+ir+Ul+Kl+"]"),x1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,v1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],y1=-1,Ae={};Ae[Ds]=Ae[Fs]=Ae[Vs]=Ae[Os]=Ae[zs]=Ae[Bs]=Ae[$s]=Ae[Ws]=Ae[Us]=!0,Ae[tn]=Ae[Vn]=Ae[gi]=Ae[ui]=Ae[On]=Ae[fi]=Ae[Ji]=Ae[er]=Ae[Mt]=Ae[hi]=Ae[Ut]=Ae[di]=Ae[At]=Ae[pi]=Ae[mi]=!1;var _e={};_e[tn]=_e[Vn]=_e[gi]=_e[On]=_e[ui]=_e[fi]=_e[Ds]=_e[Fs]=_e[Vs]=_e[Os]=_e[zs]=_e[Mt]=_e[hi]=_e[Ut]=_e[di]=_e[At]=_e[pi]=_e[tr]=_e[Bs]=_e[$s]=_e[Ws]=_e[Us]=!0,_e[Ji]=_e[er]=_e[mi]=!1;var b1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},w1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},S1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},T1=parseFloat,_1=parseInt,ac=typeof Hr=="object"&&Hr&&Hr.Object===Object&&Hr,M1=typeof self=="object"&&self&&self.Object===Object&&self,He=ac||M1||Function("return this")(),Zs=n&&!n.nodeType&&n,yn=Zs&&!0&&e&&!e.nodeType&&e,lc=yn&&yn.exports===Zs,Qs=lc&&ac.process,pt=(function(){try{var M=yn&&yn.require&&yn.require("util").types;return M||Qs&&Qs.binding&&Qs.binding("util")}catch{}})(),cc=pt&&pt.isArrayBuffer,uc=pt&&pt.isDate,fc=pt&&pt.isMap,hc=pt&&pt.isRegExp,dc=pt&&pt.isSet,pc=pt&&pt.isTypedArray;function ot(M,F,R){switch(R.length){case 0:return M.call(F);case 1:return M.call(F,R[0]);case 2:return M.call(F,R[0],R[1]);case 3:return M.call(F,R[0],R[1],R[2])}return M.apply(F,R)}function A1(M,F,R,Y){for(var ie=-1,ye=M==null?0:M.length;++ie<ye;){var Ve=M[ie];F(Y,Ve,R(Ve),M)}return Y}function at(M,F){for(var R=-1,Y=M==null?0:M.length;++R<Y&&F(M[R],R,M)!==!1;);return M}function E1(M,F){for(var R=M==null?0:M.length;R--&&F(M[R],R,M)!==!1;);return M}function mc(M,F){for(var R=-1,Y=M==null?0:M.length;++R<Y;)if(!F(M[R],R,M))return!1;return!0}function nn(M,F){for(var R=-1,Y=M==null?0:M.length,ie=0,ye=[];++R<Y;){var Ve=M[R];F(Ve,R,M)&&(ye[ie++]=Ve)}return ye}function sr(M,F){var R=M==null?0:M.length;return!!R&&Bn(M,F,0)>-1}function Js(M,F,R){for(var Y=-1,ie=M==null?0:M.length;++Y<ie;)if(R(F,M[Y]))return!0;return!1}function Ee(M,F){for(var R=-1,Y=M==null?0:M.length,ie=Array(Y);++R<Y;)ie[R]=F(M[R],R,M);return ie}function rn(M,F){for(var R=-1,Y=F.length,ie=M.length;++R<Y;)M[ie+R]=F[R];return M}function eo(M,F,R,Y){var ie=-1,ye=M==null?0:M.length;for(Y&&ye&&(R=M[++ie]);++ie<ye;)R=F(R,M[ie],ie,M);return R}function k1(M,F,R,Y){var ie=M==null?0:M.length;for(Y&&ie&&(R=M[--ie]);ie--;)R=F(R,M[ie],ie,M);return R}function to(M,F){for(var R=-1,Y=M==null?0:M.length;++R<Y;)if(F(M[R],R,M))return!0;return!1}var P1=no("length");function R1(M){return M.split("")}function j1(M){return M.match($0)||[]}function gc(M,F,R){var Y;return R(M,function(ie,ye,Ve){if(F(ie,ye,Ve))return Y=ye,!1}),Y}function or(M,F,R,Y){for(var ie=M.length,ye=R+(Y?1:-1);Y?ye--:++ye<ie;)if(F(M[ye],ye,M))return ye;return-1}function Bn(M,F,R){return F===F?H1(M,F,R):or(M,xc,R)}function I1(M,F,R,Y){for(var ie=R-1,ye=M.length;++ie<ye;)if(Y(M[ie],F))return ie;return-1}function xc(M){return M!==M}function vc(M,F){var R=M==null?0:M.length;return R?ro(M,F)/R:N}function no(M){return function(F){return F==null?r:F[M]}}function io(M){return function(F){return M==null?r:M[F]}}function yc(M,F,R,Y,ie){return ie(M,function(ye,Ve,Se){R=Y?(Y=!1,ye):F(R,ye,Ve,Se)}),R}function L1(M,F){var R=M.length;for(M.sort(F);R--;)M[R]=M[R].value;return M}function ro(M,F){for(var R,Y=-1,ie=M.length;++Y<ie;){var ye=F(M[Y]);ye!==r&&(R=R===r?ye:R+ye)}return R}function so(M,F){for(var R=-1,Y=Array(M);++R<M;)Y[R]=F(R);return Y}function D1(M,F){return Ee(F,function(R){return[R,M[R]]})}function bc(M){return M&&M.slice(0,Tc(M)+1).replace(Ns,"")}function lt(M){return function(F){return M(F)}}function oo(M,F){return Ee(F,function(R){return M[R]})}function xi(M,F){return M.has(F)}function wc(M,F){for(var R=-1,Y=M.length;++R<Y&&Bn(F,M[R],0)>-1;);return R}function Cc(M,F){for(var R=M.length;R--&&Bn(F,M[R],0)>-1;);return R}function F1(M,F){for(var R=M.length,Y=0;R--;)M[R]===F&&++Y;return Y}var V1=io(b1),O1=io(w1);function z1(M){return"\\"+S1[M]}function B1(M,F){return M==null?r:M[F]}function $n(M){return g1.test(M)}function $1(M){return x1.test(M)}function W1(M){for(var F,R=[];!(F=M.next()).done;)R.push(F.value);return R}function ao(M){var F=-1,R=Array(M.size);return M.forEach(function(Y,ie){R[++F]=[ie,Y]}),R}function Sc(M,F){return function(R){return M(F(R))}}function sn(M,F){for(var R=-1,Y=M.length,ie=0,ye=[];++R<Y;){var Ve=M[R];(Ve===F||Ve===y)&&(M[R]=y,ye[ie++]=R)}return ye}function ar(M){var F=-1,R=Array(M.size);return M.forEach(function(Y){R[++F]=Y}),R}function U1(M){var F=-1,R=Array(M.size);return M.forEach(function(Y){R[++F]=[Y,Y]}),R}function H1(M,F,R){for(var Y=R-1,ie=M.length;++Y<ie;)if(M[Y]===F)return Y;return-1}function N1(M,F,R){for(var Y=R+1;Y--;)if(M[Y]===F)return Y;return Y}function Wn(M){return $n(M)?K1(M):P1(M)}function Et(M){return $n(M)?Y1(M):R1(M)}function Tc(M){for(var F=M.length;F--&&V0.test(M.charAt(F)););return F}var G1=io(C1);function K1(M){for(var F=Xs.lastIndex=0;Xs.test(M);)++F;return F}function Y1(M){return M.match(Xs)||[]}function q1(M){return M.match(m1)||[]}var X1=(function M(F){F=F==null?He:Un.defaults(He.Object(),F,Un.pick(He,v1));var R=F.Array,Y=F.Date,ie=F.Error,ye=F.Function,Ve=F.Math,Se=F.Object,lo=F.RegExp,Z1=F.String,mt=F.TypeError,lr=R.prototype,Q1=ye.prototype,Hn=Se.prototype,cr=F["__core-js_shared__"],ur=Q1.toString,be=Hn.hasOwnProperty,J1=0,_c=(function(){var t=/[^.]+$/.exec(cr&&cr.keys&&cr.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""})(),fr=Hn.toString,em=ur.call(Se),tm=He._,nm=lo("^"+ur.call(be).replace(Hs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hr=lc?F.Buffer:r,on=F.Symbol,dr=F.Uint8Array,Mc=hr?hr.allocUnsafe:r,pr=Sc(Se.getPrototypeOf,Se),Ac=Se.create,Ec=Hn.propertyIsEnumerable,mr=lr.splice,kc=on?on.isConcatSpreadable:r,vi=on?on.iterator:r,bn=on?on.toStringTag:r,gr=(function(){try{var t=_n(Se,"defineProperty");return t({},"",{}),t}catch{}})(),im=F.clearTimeout!==He.clearTimeout&&F.clearTimeout,rm=Y&&Y.now!==He.Date.now&&Y.now,sm=F.setTimeout!==He.setTimeout&&F.setTimeout,xr=Ve.ceil,vr=Ve.floor,co=Se.getOwnPropertySymbols,om=hr?hr.isBuffer:r,Pc=F.isFinite,am=lr.join,lm=Sc(Se.keys,Se),Oe=Ve.max,Ye=Ve.min,cm=Y.now,um=F.parseInt,Rc=Ve.random,fm=lr.reverse,uo=_n(F,"DataView"),yi=_n(F,"Map"),fo=_n(F,"Promise"),Nn=_n(F,"Set"),bi=_n(F,"WeakMap"),wi=_n(Se,"create"),yr=bi&&new bi,Gn={},hm=Mn(uo),dm=Mn(yi),pm=Mn(fo),mm=Mn(Nn),gm=Mn(bi),br=on?on.prototype:r,Ci=br?br.valueOf:r,jc=br?br.toString:r;function x(t){if(Re(t)&&!se(t)&&!(t instanceof de)){if(t instanceof gt)return t;if(be.call(t,"__wrapped__"))return Iu(t)}return new gt(t)}var Kn=(function(){function t(){}return function(i){if(!ke(i))return{};if(Ac)return Ac(i);t.prototype=i;var o=new t;return t.prototype=r,o}})();function wr(){}function gt(t,i){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}x.templateSettings={escape:R0,evaluate:j0,interpolate:Bl,variable:"",imports:{_:x}},x.prototype=wr.prototype,x.prototype.constructor=x,gt.prototype=Kn(wr.prototype),gt.prototype.constructor=gt;function de(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=te,this.__views__=[]}function xm(){var t=new de(this.__wrapped__);return t.__actions__=nt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=nt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=nt(this.__views__),t}function vm(){if(this.__filtered__){var t=new de(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function ym(){var t=this.__wrapped__.value(),i=this.__dir__,o=se(t),c=i<0,d=o?t.length:0,v=Rg(0,d,this.__views__),w=v.start,T=v.end,A=T-w,V=c?T:w-1,O=this.__iteratees__,z=O.length,K=0,Z=Ye(A,this.__takeCount__);if(!o||!c&&d==A&&Z==A)return nu(t,this.__actions__);var ee=[];e:for(;A--&&K<Z;){V+=i;for(var le=-1,Q=t[V];++le<z;){var he=O[le],ge=he.iteratee,ft=he.type,Je=ge(Q);if(ft==re)Q=Je;else if(!Je){if(ft==oe)continue e;break e}}ee[K++]=Q}return ee}de.prototype=Kn(wr.prototype),de.prototype.constructor=de;function wn(t){var i=-1,o=t==null?0:t.length;for(this.clear();++i<o;){var c=t[i];this.set(c[0],c[1])}}function bm(){this.__data__=wi?wi(null):{},this.size=0}function wm(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i}function Cm(t){var i=this.__data__;if(wi){var o=i[t];return o===m?r:o}return be.call(i,t)?i[t]:r}function Sm(t){var i=this.__data__;return wi?i[t]!==r:be.call(i,t)}function Tm(t,i){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=wi&&i===r?m:i,this}wn.prototype.clear=bm,wn.prototype.delete=wm,wn.prototype.get=Cm,wn.prototype.has=Sm,wn.prototype.set=Tm;function Ht(t){var i=-1,o=t==null?0:t.length;for(this.clear();++i<o;){var c=t[i];this.set(c[0],c[1])}}function _m(){this.__data__=[],this.size=0}function Mm(t){var i=this.__data__,o=Cr(i,t);if(o<0)return!1;var c=i.length-1;return o==c?i.pop():mr.call(i,o,1),--this.size,!0}function Am(t){var i=this.__data__,o=Cr(i,t);return o<0?r:i[o][1]}function Em(t){return Cr(this.__data__,t)>-1}function km(t,i){var o=this.__data__,c=Cr(o,t);return c<0?(++this.size,o.push([t,i])):o[c][1]=i,this}Ht.prototype.clear=_m,Ht.prototype.delete=Mm,Ht.prototype.get=Am,Ht.prototype.has=Em,Ht.prototype.set=km;function Nt(t){var i=-1,o=t==null?0:t.length;for(this.clear();++i<o;){var c=t[i];this.set(c[0],c[1])}}function Pm(){this.size=0,this.__data__={hash:new wn,map:new(yi||Ht),string:new wn}}function Rm(t){var i=Lr(this,t).delete(t);return this.size-=i?1:0,i}function jm(t){return Lr(this,t).get(t)}function Im(t){return Lr(this,t).has(t)}function Lm(t,i){var o=Lr(this,t),c=o.size;return o.set(t,i),this.size+=o.size==c?0:1,this}Nt.prototype.clear=Pm,Nt.prototype.delete=Rm,Nt.prototype.get=jm,Nt.prototype.has=Im,Nt.prototype.set=Lm;function Cn(t){var i=-1,o=t==null?0:t.length;for(this.__data__=new Nt;++i<o;)this.add(t[i])}function Dm(t){return this.__data__.set(t,m),this}function Fm(t){return this.__data__.has(t)}Cn.prototype.add=Cn.prototype.push=Dm,Cn.prototype.has=Fm;function kt(t){var i=this.__data__=new Ht(t);this.size=i.size}function Vm(){this.__data__=new Ht,this.size=0}function Om(t){var i=this.__data__,o=i.delete(t);return this.size=i.size,o}function zm(t){return this.__data__.get(t)}function Bm(t){return this.__data__.has(t)}function $m(t,i){var o=this.__data__;if(o instanceof Ht){var c=o.__data__;if(!yi||c.length<a-1)return c.push([t,i]),this.size=++o.size,this;o=this.__data__=new Nt(c)}return o.set(t,i),this.size=o.size,this}kt.prototype.clear=Vm,kt.prototype.delete=Om,kt.prototype.get=zm,kt.prototype.has=Bm,kt.prototype.set=$m;function Ic(t,i){var o=se(t),c=!o&&An(t),d=!o&&!c&&fn(t),v=!o&&!c&&!d&&Zn(t),w=o||c||d||v,T=w?so(t.length,Z1):[],A=T.length;for(var V in t)(i||be.call(t,V))&&!(w&&(V=="length"||d&&(V=="offset"||V=="parent")||v&&(V=="buffer"||V=="byteLength"||V=="byteOffset")||Yt(V,A)))&&T.push(V);return T}function Lc(t){var i=t.length;return i?t[So(0,i-1)]:r}function Wm(t,i){return Dr(nt(t),Sn(i,0,t.length))}function Um(t){return Dr(nt(t))}function ho(t,i,o){(o!==r&&!Rt(t[i],o)||o===r&&!(i in t))&&Ft(t,i,o)}function Si(t,i,o){var c=t[i];(!(be.call(t,i)&&Rt(c,o))||o===r&&!(i in t))&&Ft(t,i,o)}function Cr(t,i){for(var o=t.length;o--;)if(Rt(t[o][0],i))return o;return-1}function Hm(t,i,o,c){return an(t,function(d,v,w){i(c,d,o(d),w)}),c}function Dc(t,i){return t&&Ot(i,We(i),t)}function Nm(t,i){return t&&Ot(i,rt(i),t)}function Ft(t,i,o){i=="__proto__"&&gr?gr(t,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[i]=o}function po(t,i){for(var o=-1,c=i.length,d=R(c),v=t==null;++o<c;)d[o]=v?r:qo(t,i[o]);return d}function Sn(t,i,o){return t===t&&(o!==r&&(t=t<=o?t:o),i!==r&&(t=t>=i?t:i)),t}function xt(t,i,o,c,d,v){var w,T=i&b,A=i&k,V=i&_;if(o&&(w=d?o(t,c,d,v):o(t)),w!==r)return w;if(!ke(t))return t;var O=se(t);if(O){if(w=Ig(t),!T)return nt(t,w)}else{var z=qe(t),K=z==er||z==Fl;if(fn(t))return su(t,T);if(z==Ut||z==tn||K&&!d){if(w=A||K?{}:Tu(t),!T)return A?Cg(t,Nm(w,t)):wg(t,Dc(w,t))}else{if(!_e[z])return d?t:{};w=Lg(t,z,T)}}v||(v=new kt);var Z=v.get(t);if(Z)return Z;v.set(t,w),Ju(t)?t.forEach(function(Q){w.add(xt(Q,i,o,Q,t,v))}):Zu(t)&&t.forEach(function(Q,he){w.set(he,xt(Q,i,o,he,t,v))});var ee=V?A?Lo:Io:A?rt:We,le=O?r:ee(t);return at(le||t,function(Q,he){le&&(he=Q,Q=t[he]),Si(w,he,xt(Q,i,o,he,t,v))}),w}function Gm(t){var i=We(t);return function(o){return Fc(o,t,i)}}function Fc(t,i,o){var c=o.length;if(t==null)return!c;for(t=Se(t);c--;){var d=o[c],v=i[d],w=t[d];if(w===r&&!(d in t)||!v(w))return!1}return!0}function Vc(t,i,o){if(typeof t!="function")throw new mt(l);return Pi(function(){t.apply(r,o)},i)}function Ti(t,i,o,c){var d=-1,v=sr,w=!0,T=t.length,A=[],V=i.length;if(!T)return A;o&&(i=Ee(i,lt(o))),c?(v=Js,w=!1):i.length>=a&&(v=xi,w=!1,i=new Cn(i));e:for(;++d<T;){var O=t[d],z=o==null?O:o(O);if(O=c||O!==0?O:0,w&&z===z){for(var K=V;K--;)if(i[K]===z)continue e;A.push(O)}else v(i,z,c)||A.push(O)}return A}var an=uu(Vt),Oc=uu(go,!0);function Km(t,i){var o=!0;return an(t,function(c,d,v){return o=!!i(c,d,v),o}),o}function Sr(t,i,o){for(var c=-1,d=t.length;++c<d;){var v=t[c],w=i(v);if(w!=null&&(T===r?w===w&&!ut(w):o(w,T)))var T=w,A=v}return A}function Ym(t,i,o,c){var d=t.length;for(o=ae(o),o<0&&(o=-o>d?0:d+o),c=c===r||c>d?d:ae(c),c<0&&(c+=d),c=o>c?0:tf(c);o<c;)t[o++]=i;return t}function zc(t,i){var o=[];return an(t,function(c,d,v){i(c,d,v)&&o.push(c)}),o}function Ne(t,i,o,c,d){var v=-1,w=t.length;for(o||(o=Fg),d||(d=[]);++v<w;){var T=t[v];i>0&&o(T)?i>1?Ne(T,i-1,o,c,d):rn(d,T):c||(d[d.length]=T)}return d}var mo=fu(),Bc=fu(!0);function Vt(t,i){return t&&mo(t,i,We)}function go(t,i){return t&&Bc(t,i,We)}function Tr(t,i){return nn(i,function(o){return qt(t[o])})}function Tn(t,i){i=cn(i,t);for(var o=0,c=i.length;t!=null&&o<c;)t=t[Pt(i[o++])];return o&&o==c?t:r}function $c(t,i,o){var c=i(t);return se(t)?c:rn(c,o(t))}function Ze(t){return t==null?t===r?T0:C0:bn&&bn in Se(t)?Pg(t):Ug(t)}function xo(t,i){return t>i}function qm(t,i){return t!=null&&be.call(t,i)}function Xm(t,i){return t!=null&&i in Se(t)}function Zm(t,i,o){return t>=Ye(i,o)&&t<Oe(i,o)}function vo(t,i,o){for(var c=o?Js:sr,d=t[0].length,v=t.length,w=v,T=R(v),A=1/0,V=[];w--;){var O=t[w];w&&i&&(O=Ee(O,lt(i))),A=Ye(O.length,A),T[w]=!o&&(i||d>=120&&O.length>=120)?new Cn(w&&O):r}O=t[0];var z=-1,K=T[0];e:for(;++z<d&&V.length<A;){var Z=O[z],ee=i?i(Z):Z;if(Z=o||Z!==0?Z:0,!(K?xi(K,ee):c(V,ee,o))){for(w=v;--w;){var le=T[w];if(!(le?xi(le,ee):c(t[w],ee,o)))continue e}K&&K.push(ee),V.push(Z)}}return V}function Qm(t,i,o,c){return Vt(t,function(d,v,w){i(c,o(d),v,w)}),c}function _i(t,i,o){i=cn(i,t),t=Eu(t,i);var c=t==null?t:t[Pt(yt(i))];return c==null?r:ot(c,t,o)}function Wc(t){return Re(t)&&Ze(t)==tn}function Jm(t){return Re(t)&&Ze(t)==gi}function eg(t){return Re(t)&&Ze(t)==fi}function Mi(t,i,o,c,d){return t===i?!0:t==null||i==null||!Re(t)&&!Re(i)?t!==t&&i!==i:tg(t,i,o,c,Mi,d)}function tg(t,i,o,c,d,v){var w=se(t),T=se(i),A=w?Vn:qe(t),V=T?Vn:qe(i);A=A==tn?Ut:A,V=V==tn?Ut:V;var O=A==Ut,z=V==Ut,K=A==V;if(K&&fn(t)){if(!fn(i))return!1;w=!0,O=!1}if(K&&!O)return v||(v=new kt),w||Zn(t)?wu(t,i,o,c,d,v):Eg(t,i,A,o,c,d,v);if(!(o&E)){var Z=O&&be.call(t,"__wrapped__"),ee=z&&be.call(i,"__wrapped__");if(Z||ee){var le=Z?t.value():t,Q=ee?i.value():i;return v||(v=new kt),d(le,Q,o,c,v)}}return K?(v||(v=new kt),kg(t,i,o,c,d,v)):!1}function ng(t){return Re(t)&&qe(t)==Mt}function yo(t,i,o,c){var d=o.length,v=d,w=!c;if(t==null)return!v;for(t=Se(t);d--;){var T=o[d];if(w&&T[2]?T[1]!==t[T[0]]:!(T[0]in t))return!1}for(;++d<v;){T=o[d];var A=T[0],V=t[A],O=T[1];if(w&&T[2]){if(V===r&&!(A in t))return!1}else{var z=new kt;if(c)var K=c(V,O,A,t,i,z);if(!(K===r?Mi(O,V,E|S,c,z):K))return!1}}return!0}function Uc(t){if(!ke(t)||Og(t))return!1;var i=qt(t)?nm:G0;return i.test(Mn(t))}function ig(t){return Re(t)&&Ze(t)==di}function rg(t){return Re(t)&&qe(t)==At}function sg(t){return Re(t)&&$r(t.length)&&!!Ae[Ze(t)]}function Hc(t){return typeof t=="function"?t:t==null?st:typeof t=="object"?se(t)?Kc(t[0],t[1]):Gc(t):pf(t)}function bo(t){if(!ki(t))return lm(t);var i=[];for(var o in Se(t))be.call(t,o)&&o!="constructor"&&i.push(o);return i}function og(t){if(!ke(t))return Wg(t);var i=ki(t),o=[];for(var c in t)c=="constructor"&&(i||!be.call(t,c))||o.push(c);return o}function wo(t,i){return t<i}function Nc(t,i){var o=-1,c=it(t)?R(t.length):[];return an(t,function(d,v,w){c[++o]=i(d,v,w)}),c}function Gc(t){var i=Fo(t);return i.length==1&&i[0][2]?Mu(i[0][0],i[0][1]):function(o){return o===t||yo(o,t,i)}}function Kc(t,i){return Oo(t)&&_u(i)?Mu(Pt(t),i):function(o){var c=qo(o,t);return c===r&&c===i?Xo(o,t):Mi(i,c,E|S)}}function _r(t,i,o,c,d){t!==i&&mo(i,function(v,w){if(d||(d=new kt),ke(v))ag(t,i,w,o,_r,c,d);else{var T=c?c(Bo(t,w),v,w+"",t,i,d):r;T===r&&(T=v),ho(t,w,T)}},rt)}function ag(t,i,o,c,d,v,w){var T=Bo(t,o),A=Bo(i,o),V=w.get(A);if(V){ho(t,o,V);return}var O=v?v(T,A,o+"",t,i,w):r,z=O===r;if(z){var K=se(A),Z=!K&&fn(A),ee=!K&&!Z&&Zn(A);O=A,K||Z||ee?se(T)?O=T:Ie(T)?O=nt(T):Z?(z=!1,O=su(A,!0)):ee?(z=!1,O=ou(A,!0)):O=[]:Ri(A)||An(A)?(O=T,An(T)?O=nf(T):(!ke(T)||qt(T))&&(O=Tu(A))):z=!1}z&&(w.set(A,O),d(O,A,c,v,w),w.delete(A)),ho(t,o,O)}function Yc(t,i){var o=t.length;if(o)return i+=i<0?o:0,Yt(i,o)?t[i]:r}function qc(t,i,o){i.length?i=Ee(i,function(v){return se(v)?function(w){return Tn(w,v.length===1?v[0]:v)}:v}):i=[st];var c=-1;i=Ee(i,lt(J()));var d=Nc(t,function(v,w,T){var A=Ee(i,function(V){return V(v)});return{criteria:A,index:++c,value:v}});return L1(d,function(v,w){return bg(v,w,o)})}function lg(t,i){return Xc(t,i,function(o,c){return Xo(t,c)})}function Xc(t,i,o){for(var c=-1,d=i.length,v={};++c<d;){var w=i[c],T=Tn(t,w);o(T,w)&&Ai(v,cn(w,t),T)}return v}function cg(t){return function(i){return Tn(i,t)}}function Co(t,i,o,c){var d=c?I1:Bn,v=-1,w=i.length,T=t;for(t===i&&(i=nt(i)),o&&(T=Ee(t,lt(o)));++v<w;)for(var A=0,V=i[v],O=o?o(V):V;(A=d(T,O,A,c))>-1;)T!==t&&mr.call(T,A,1),mr.call(t,A,1);return t}function Zc(t,i){for(var o=t?i.length:0,c=o-1;o--;){var d=i[o];if(o==c||d!==v){var v=d;Yt(d)?mr.call(t,d,1):Mo(t,d)}}return t}function So(t,i){return t+vr(Rc()*(i-t+1))}function ug(t,i,o,c){for(var d=-1,v=Oe(xr((i-t)/(o||1)),0),w=R(v);v--;)w[c?v:++d]=t,t+=o;return w}function To(t,i){var o="";if(!t||i<1||i>me)return o;do i%2&&(o+=t),i=vr(i/2),i&&(t+=t);while(i);return o}function ce(t,i){return $o(Au(t,i,st),t+"")}function fg(t){return Lc(Qn(t))}function hg(t,i){var o=Qn(t);return Dr(o,Sn(i,0,o.length))}function Ai(t,i,o,c){if(!ke(t))return t;i=cn(i,t);for(var d=-1,v=i.length,w=v-1,T=t;T!=null&&++d<v;){var A=Pt(i[d]),V=o;if(A==="__proto__"||A==="constructor"||A==="prototype")return t;if(d!=w){var O=T[A];V=c?c(O,A,T):r,V===r&&(V=ke(O)?O:Yt(i[d+1])?[]:{})}Si(T,A,V),T=T[A]}return t}var Qc=yr?function(t,i){return yr.set(t,i),t}:st,dg=gr?function(t,i){return gr(t,"toString",{configurable:!0,enumerable:!1,value:Qo(i),writable:!0})}:st;function pg(t){return Dr(Qn(t))}function vt(t,i,o){var c=-1,d=t.length;i<0&&(i=-i>d?0:d+i),o=o>d?d:o,o<0&&(o+=d),d=i>o?0:o-i>>>0,i>>>=0;for(var v=R(d);++c<d;)v[c]=t[c+i];return v}function mg(t,i){var o;return an(t,function(c,d,v){return o=i(c,d,v),!o}),!!o}function Mr(t,i,o){var c=0,d=t==null?c:t.length;if(typeof i=="number"&&i===i&&d<=$e){for(;c<d;){var v=c+d>>>1,w=t[v];w!==null&&!ut(w)&&(o?w<=i:w<i)?c=v+1:d=v}return d}return _o(t,i,st,o)}function _o(t,i,o,c){var d=0,v=t==null?0:t.length;if(v===0)return 0;i=o(i);for(var w=i!==i,T=i===null,A=ut(i),V=i===r;d<v;){var O=vr((d+v)/2),z=o(t[O]),K=z!==r,Z=z===null,ee=z===z,le=ut(z);if(w)var Q=c||ee;else V?Q=ee&&(c||K):T?Q=ee&&K&&(c||!Z):A?Q=ee&&K&&!Z&&(c||!le):Z||le?Q=!1:Q=c?z<=i:z<i;Q?d=O+1:v=O}return Ye(v,Me)}function Jc(t,i){for(var o=-1,c=t.length,d=0,v=[];++o<c;){var w=t[o],T=i?i(w):w;if(!o||!Rt(T,A)){var A=T;v[d++]=w===0?0:w}}return v}function eu(t){return typeof t=="number"?t:ut(t)?N:+t}function ct(t){if(typeof t=="string")return t;if(se(t))return Ee(t,ct)+"";if(ut(t))return jc?jc.call(t):"";var i=t+"";return i=="0"&&1/t==-q?"-0":i}function ln(t,i,o){var c=-1,d=sr,v=t.length,w=!0,T=[],A=T;if(o)w=!1,d=Js;else if(v>=a){var V=i?null:Mg(t);if(V)return ar(V);w=!1,d=xi,A=new Cn}else A=i?[]:T;e:for(;++c<v;){var O=t[c],z=i?i(O):O;if(O=o||O!==0?O:0,w&&z===z){for(var K=A.length;K--;)if(A[K]===z)continue e;i&&A.push(z),T.push(O)}else d(A,z,o)||(A!==T&&A.push(z),T.push(O))}return T}function Mo(t,i){i=cn(i,t);var o=-1,c=i.length;if(!c)return!0;for(;++o<c;){var d=Pt(i[o]);if(d==="__proto__"&&!be.call(t,"__proto__")||(d==="constructor"||d==="prototype")&&o<c-1)return!1}var v=Eu(t,i);return v==null||delete v[Pt(yt(i))]}function tu(t,i,o,c){return Ai(t,i,o(Tn(t,i)),c)}function Ar(t,i,o,c){for(var d=t.length,v=c?d:-1;(c?v--:++v<d)&&i(t[v],v,t););return o?vt(t,c?0:v,c?v+1:d):vt(t,c?v+1:0,c?d:v)}function nu(t,i){var o=t;return o instanceof de&&(o=o.value()),eo(i,function(c,d){return d.func.apply(d.thisArg,rn([c],d.args))},o)}function Ao(t,i,o){var c=t.length;if(c<2)return c?ln(t[0]):[];for(var d=-1,v=R(c);++d<c;)for(var w=t[d],T=-1;++T<c;)T!=d&&(v[d]=Ti(v[d]||w,t[T],i,o));return ln(Ne(v,1),i,o)}function iu(t,i,o){for(var c=-1,d=t.length,v=i.length,w={};++c<d;){var T=c<v?i[c]:r;o(w,t[c],T)}return w}function Eo(t){return Ie(t)?t:[]}function ko(t){return typeof t=="function"?t:st}function cn(t,i){return se(t)?t:Oo(t,i)?[t]:ju(we(t))}var gg=ce;function un(t,i,o){var c=t.length;return o=o===r?c:o,!i&&o>=c?t:vt(t,i,o)}var ru=im||function(t){return He.clearTimeout(t)};function su(t,i){if(i)return t.slice();var o=t.length,c=Mc?Mc(o):new t.constructor(o);return t.copy(c),c}function Po(t){var i=new t.constructor(t.byteLength);return new dr(i).set(new dr(t)),i}function xg(t,i){var o=i?Po(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}function vg(t){var i=new t.constructor(t.source,Wl.exec(t));return i.lastIndex=t.lastIndex,i}function yg(t){return Ci?Se(Ci.call(t)):{}}function ou(t,i){var o=i?Po(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}function au(t,i){if(t!==i){var o=t!==r,c=t===null,d=t===t,v=ut(t),w=i!==r,T=i===null,A=i===i,V=ut(i);if(!T&&!V&&!v&&t>i||v&&w&&A&&!T&&!V||c&&w&&A||!o&&A||!d)return 1;if(!c&&!v&&!V&&t<i||V&&o&&d&&!c&&!v||T&&o&&d||!w&&d||!A)return-1}return 0}function bg(t,i,o){for(var c=-1,d=t.criteria,v=i.criteria,w=d.length,T=o.length;++c<w;){var A=au(d[c],v[c]);if(A){if(c>=T)return A;var V=o[c];return A*(V=="desc"?-1:1)}}return t.index-i.index}function lu(t,i,o,c){for(var d=-1,v=t.length,w=o.length,T=-1,A=i.length,V=Oe(v-w,0),O=R(A+V),z=!c;++T<A;)O[T]=i[T];for(;++d<w;)(z||d<v)&&(O[o[d]]=t[d]);for(;V--;)O[T++]=t[d++];return O}function cu(t,i,o,c){for(var d=-1,v=t.length,w=-1,T=o.length,A=-1,V=i.length,O=Oe(v-T,0),z=R(O+V),K=!c;++d<O;)z[d]=t[d];for(var Z=d;++A<V;)z[Z+A]=i[A];for(;++w<T;)(K||d<v)&&(z[Z+o[w]]=t[d++]);return z}function nt(t,i){var o=-1,c=t.length;for(i||(i=R(c));++o<c;)i[o]=t[o];return i}function Ot(t,i,o,c){var d=!o;o||(o={});for(var v=-1,w=i.length;++v<w;){var T=i[v],A=c?c(o[T],t[T],T,o,t):r;A===r&&(A=t[T]),d?Ft(o,T,A):Si(o,T,A)}return o}function wg(t,i){return Ot(t,Vo(t),i)}function Cg(t,i){return Ot(t,Cu(t),i)}function Er(t,i){return function(o,c){var d=se(o)?A1:Hm,v=i?i():{};return d(o,t,J(c,2),v)}}function Yn(t){return ce(function(i,o){var c=-1,d=o.length,v=d>1?o[d-1]:r,w=d>2?o[2]:r;for(v=t.length>3&&typeof v=="function"?(d--,v):r,w&&Qe(o[0],o[1],w)&&(v=d<3?r:v,d=1),i=Se(i);++c<d;){var T=o[c];T&&t(i,T,c,v)}return i})}function uu(t,i){return function(o,c){if(o==null)return o;if(!it(o))return t(o,c);for(var d=o.length,v=i?d:-1,w=Se(o);(i?v--:++v<d)&&c(w[v],v,w)!==!1;);return o}}function fu(t){return function(i,o,c){for(var d=-1,v=Se(i),w=c(i),T=w.length;T--;){var A=w[t?T:++d];if(o(v[A],A,v)===!1)break}return i}}function Sg(t,i,o){var c=i&P,d=Ei(t);function v(){var w=this&&this!==He&&this instanceof v?d:t;return w.apply(c?o:this,arguments)}return v}function hu(t){return function(i){i=we(i);var o=$n(i)?Et(i):r,c=o?o[0]:i.charAt(0),d=o?un(o,1).join(""):i.slice(1);return c[t]()+d}}function qn(t){return function(i){return eo(hf(ff(i).replace(d1,"")),t,"")}}function Ei(t){return function(){var i=arguments;switch(i.length){case 0:return new t;case 1:return new t(i[0]);case 2:return new t(i[0],i[1]);case 3:return new t(i[0],i[1],i[2]);case 4:return new t(i[0],i[1],i[2],i[3]);case 5:return new t(i[0],i[1],i[2],i[3],i[4]);case 6:return new t(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new t(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=Kn(t.prototype),c=t.apply(o,i);return ke(c)?c:o}}function Tg(t,i,o){var c=Ei(t);function d(){for(var v=arguments.length,w=R(v),T=v,A=Xn(d);T--;)w[T]=arguments[T];var V=v<3&&w[0]!==A&&w[v-1]!==A?[]:sn(w,A);if(v-=V.length,v<o)return xu(t,i,kr,d.placeholder,r,w,V,r,r,o-v);var O=this&&this!==He&&this instanceof d?c:t;return ot(O,this,w)}return d}function du(t){return function(i,o,c){var d=Se(i);if(!it(i)){var v=J(o,3);i=We(i),o=function(T){return v(d[T],T,d)}}var w=t(i,o,c);return w>-1?d[v?i[w]:w]:r}}function pu(t){return Kt(function(i){var o=i.length,c=o,d=gt.prototype.thru;for(t&&i.reverse();c--;){var v=i[c];if(typeof v!="function")throw new mt(l);if(d&&!w&&Ir(v)=="wrapper")var w=new gt([],!0)}for(c=w?c:o;++c<o;){v=i[c];var T=Ir(v),A=T=="wrapper"?Do(v):r;A&&zo(A[0])&&A[1]==(B|L|W|H)&&!A[4].length&&A[9]==1?w=w[Ir(A[0])].apply(w,A[3]):w=v.length==1&&zo(v)?w[T]():w.thru(v)}return function(){var V=arguments,O=V[0];if(w&&V.length==1&&se(O))return w.plant(O).value();for(var z=0,K=o?i[z].apply(this,V):O;++z<o;)K=i[z].call(this,K);return K}})}function kr(t,i,o,c,d,v,w,T,A,V){var O=i&B,z=i&P,K=i&j,Z=i&(L|$),ee=i&U,le=K?r:Ei(t);function Q(){for(var he=arguments.length,ge=R(he),ft=he;ft--;)ge[ft]=arguments[ft];if(Z)var Je=Xn(Q),ht=F1(ge,Je);if(c&&(ge=lu(ge,c,d,Z)),v&&(ge=cu(ge,v,w,Z)),he-=ht,Z&&he<V){var Le=sn(ge,Je);return xu(t,i,kr,Q.placeholder,o,ge,Le,T,A,V-he)}var jt=z?o:this,Zt=K?jt[t]:t;return he=ge.length,T?ge=Hg(ge,T):ee&&he>1&&ge.reverse(),O&&A<he&&(ge.length=A),this&&this!==He&&this instanceof Q&&(Zt=le||Ei(Zt)),Zt.apply(jt,ge)}return Q}function mu(t,i){return function(o,c){return Qm(o,t,i(c),{})}}function Pr(t,i){return function(o,c){var d;if(o===r&&c===r)return i;if(o!==r&&(d=o),c!==r){if(d===r)return c;typeof o=="string"||typeof c=="string"?(o=ct(o),c=ct(c)):(o=eu(o),c=eu(c)),d=t(o,c)}return d}}function Ro(t){return Kt(function(i){return i=Ee(i,lt(J())),ce(function(o){var c=this;return t(i,function(d){return ot(d,c,o)})})})}function Rr(t,i){i=i===r?" ":ct(i);var o=i.length;if(o<2)return o?To(i,t):i;var c=To(i,xr(t/Wn(i)));return $n(i)?un(Et(c),0,t).join(""):c.slice(0,t)}function _g(t,i,o,c){var d=i&P,v=Ei(t);function w(){for(var T=-1,A=arguments.length,V=-1,O=c.length,z=R(O+A),K=this&&this!==He&&this instanceof w?v:t;++V<O;)z[V]=c[V];for(;A--;)z[V++]=arguments[++T];return ot(K,d?o:this,z)}return w}function gu(t){return function(i,o,c){return c&&typeof c!="number"&&Qe(i,o,c)&&(o=c=r),i=Xt(i),o===r?(o=i,i=0):o=Xt(o),c=c===r?i<o?1:-1:Xt(c),ug(i,o,c,t)}}function jr(t){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=bt(i),o=bt(o)),t(i,o)}}function xu(t,i,o,c,d,v,w,T,A,V){var O=i&L,z=O?w:r,K=O?r:w,Z=O?v:r,ee=O?r:v;i|=O?W:G,i&=~(O?G:W),i&I||(i&=-4);var le=[t,i,d,Z,z,ee,K,T,A,V],Q=o.apply(r,le);return zo(t)&&ku(Q,le),Q.placeholder=c,Pu(Q,t,i)}function jo(t){var i=Ve[t];return function(o,c){if(o=bt(o),c=c==null?0:Ye(ae(c),292),c&&Pc(o)){var d=(we(o)+"e").split("e"),v=i(d[0]+"e"+(+d[1]+c));return d=(we(v)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return i(o)}}var Mg=Nn&&1/ar(new Nn([,-0]))[1]==q?function(t){return new Nn(t)}:ta;function vu(t){return function(i){var o=qe(i);return o==Mt?ao(i):o==At?U1(i):D1(i,t(i))}}function Gt(t,i,o,c,d,v,w,T){var A=i&j;if(!A&&typeof t!="function")throw new mt(l);var V=c?c.length:0;if(V||(i&=-97,c=d=r),w=w===r?w:Oe(ae(w),0),T=T===r?T:ae(T),V-=d?d.length:0,i&G){var O=c,z=d;c=d=r}var K=A?r:Do(t),Z=[t,i,o,c,d,O,z,v,w,T];if(K&&$g(Z,K),t=Z[0],i=Z[1],o=Z[2],c=Z[3],d=Z[4],T=Z[9]=Z[9]===r?A?0:t.length:Oe(Z[9]-V,0),!T&&i&(L|$)&&(i&=-25),!i||i==P)var ee=Sg(t,i,o);else i==L||i==$?ee=Tg(t,i,T):(i==W||i==(P|W))&&!d.length?ee=_g(t,i,o,c):ee=kr.apply(r,Z);var le=K?Qc:ku;return Pu(le(ee,Z),t,i)}function yu(t,i,o,c){return t===r||Rt(t,Hn[o])&&!be.call(c,o)?i:t}function bu(t,i,o,c,d,v){return ke(t)&&ke(i)&&(v.set(i,t),_r(t,i,r,bu,v),v.delete(i)),t}function Ag(t){return Ri(t)?r:t}function wu(t,i,o,c,d,v){var w=o&E,T=t.length,A=i.length;if(T!=A&&!(w&&A>T))return!1;var V=v.get(t),O=v.get(i);if(V&&O)return V==i&&O==t;var z=-1,K=!0,Z=o&S?new Cn:r;for(v.set(t,i),v.set(i,t);++z<T;){var ee=t[z],le=i[z];if(c)var Q=w?c(le,ee,z,i,t,v):c(ee,le,z,t,i,v);if(Q!==r){if(Q)continue;K=!1;break}if(Z){if(!to(i,function(he,ge){if(!xi(Z,ge)&&(ee===he||d(ee,he,o,c,v)))return Z.push(ge)})){K=!1;break}}else if(!(ee===le||d(ee,le,o,c,v))){K=!1;break}}return v.delete(t),v.delete(i),K}function Eg(t,i,o,c,d,v,w){switch(o){case On:if(t.byteLength!=i.byteLength||t.byteOffset!=i.byteOffset)return!1;t=t.buffer,i=i.buffer;case gi:return!(t.byteLength!=i.byteLength||!v(new dr(t),new dr(i)));case ui:case fi:case hi:return Rt(+t,+i);case Ji:return t.name==i.name&&t.message==i.message;case di:case pi:return t==i+"";case Mt:var T=ao;case At:var A=c&E;if(T||(T=ar),t.size!=i.size&&!A)return!1;var V=w.get(t);if(V)return V==i;c|=S,w.set(t,i);var O=wu(T(t),T(i),c,d,v,w);return w.delete(t),O;case tr:if(Ci)return Ci.call(t)==Ci.call(i)}return!1}function kg(t,i,o,c,d,v){var w=o&E,T=Io(t),A=T.length,V=Io(i),O=V.length;if(A!=O&&!w)return!1;for(var z=A;z--;){var K=T[z];if(!(w?K in i:be.call(i,K)))return!1}var Z=v.get(t),ee=v.get(i);if(Z&&ee)return Z==i&&ee==t;var le=!0;v.set(t,i),v.set(i,t);for(var Q=w;++z<A;){K=T[z];var he=t[K],ge=i[K];if(c)var ft=w?c(ge,he,K,i,t,v):c(he,ge,K,t,i,v);if(!(ft===r?he===ge||d(he,ge,o,c,v):ft)){le=!1;break}Q||(Q=K=="constructor")}if(le&&!Q){var Je=t.constructor,ht=i.constructor;Je!=ht&&"constructor"in t&&"constructor"in i&&!(typeof Je=="function"&&Je instanceof Je&&typeof ht=="function"&&ht instanceof ht)&&(le=!1)}return v.delete(t),v.delete(i),le}function Kt(t){return $o(Au(t,r,Fu),t+"")}function Io(t){return $c(t,We,Vo)}function Lo(t){return $c(t,rt,Cu)}var Do=yr?function(t){return yr.get(t)}:ta;function Ir(t){for(var i=t.name+"",o=Gn[i],c=be.call(Gn,i)?o.length:0;c--;){var d=o[c],v=d.func;if(v==null||v==t)return d.name}return i}function Xn(t){var i=be.call(x,"placeholder")?x:t;return i.placeholder}function J(){var t=x.iteratee||Jo;return t=t===Jo?Hc:t,arguments.length?t(arguments[0],arguments[1]):t}function Lr(t,i){var o=t.__data__;return Vg(i)?o[typeof i=="string"?"string":"hash"]:o.map}function Fo(t){for(var i=We(t),o=i.length;o--;){var c=i[o],d=t[c];i[o]=[c,d,_u(d)]}return i}function _n(t,i){var o=B1(t,i);return Uc(o)?o:r}function Pg(t){var i=be.call(t,bn),o=t[bn];try{t[bn]=r;var c=!0}catch{}var d=fr.call(t);return c&&(i?t[bn]=o:delete t[bn]),d}var Vo=co?function(t){return t==null?[]:(t=Se(t),nn(co(t),function(i){return Ec.call(t,i)}))}:na,Cu=co?function(t){for(var i=[];t;)rn(i,Vo(t)),t=pr(t);return i}:na,qe=Ze;(uo&&qe(new uo(new ArrayBuffer(1)))!=On||yi&&qe(new yi)!=Mt||fo&&qe(fo.resolve())!=Vl||Nn&&qe(new Nn)!=At||bi&&qe(new bi)!=mi)&&(qe=function(t){var i=Ze(t),o=i==Ut?t.constructor:r,c=o?Mn(o):"";if(c)switch(c){case hm:return On;case dm:return Mt;case pm:return Vl;case mm:return At;case gm:return mi}return i});function Rg(t,i,o){for(var c=-1,d=o.length;++c<d;){var v=o[c],w=v.size;switch(v.type){case"drop":t+=w;break;case"dropRight":i-=w;break;case"take":i=Ye(i,t+w);break;case"takeRight":t=Oe(t,i-w);break}}return{start:t,end:i}}function jg(t){var i=t.match(z0);return i?i[1].split(B0):[]}function Su(t,i,o){i=cn(i,t);for(var c=-1,d=i.length,v=!1;++c<d;){var w=Pt(i[c]);if(!(v=t!=null&&o(t,w)))break;t=t[w]}return v||++c!=d?v:(d=t==null?0:t.length,!!d&&$r(d)&&Yt(w,d)&&(se(t)||An(t)))}function Ig(t){var i=t.length,o=new t.constructor(i);return i&&typeof t[0]=="string"&&be.call(t,"index")&&(o.index=t.index,o.input=t.input),o}function Tu(t){return typeof t.constructor=="function"&&!ki(t)?Kn(pr(t)):{}}function Lg(t,i,o){var c=t.constructor;switch(i){case gi:return Po(t);case ui:case fi:return new c(+t);case On:return xg(t,o);case Ds:case Fs:case Vs:case Os:case zs:case Bs:case $s:case Ws:case Us:return ou(t,o);case Mt:return new c;case hi:case pi:return new c(t);case di:return vg(t);case At:return new c;case tr:return yg(t)}}function Dg(t,i){var o=i.length;if(!o)return t;var c=o-1;return i[c]=(o>1?"& ":"")+i[c],i=i.join(o>2?", ":" "),t.replace(O0,`{
/* [wrapped with `+i+`] */
`)}function Fg(t){return se(t)||An(t)||!!(kc&&t&&t[kc])}function Yt(t,i){var o=typeof t;return i=i??me,!!i&&(o=="number"||o!="symbol"&&Y0.test(t))&&t>-1&&t%1==0&&t<i}function Qe(t,i,o){if(!ke(o))return!1;var c=typeof i;return(c=="number"?it(o)&&Yt(i,o.length):c=="string"&&i in o)?Rt(o[i],t):!1}function Oo(t,i){if(se(t))return!1;var o=typeof t;return o=="number"||o=="symbol"||o=="boolean"||t==null||ut(t)?!0:L0.test(t)||!I0.test(t)||i!=null&&t in Se(i)}function Vg(t){var i=typeof t;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?t!=="__proto__":t===null}function zo(t){var i=Ir(t),o=x[i];if(typeof o!="function"||!(i in de.prototype))return!1;if(t===o)return!0;var c=Do(o);return!!c&&t===c[0]}function Og(t){return!!_c&&_c in t}var zg=cr?qt:ia;function ki(t){var i=t&&t.constructor,o=typeof i=="function"&&i.prototype||Hn;return t===o}function _u(t){return t===t&&!ke(t)}function Mu(t,i){return function(o){return o==null?!1:o[t]===i&&(i!==r||t in Se(o))}}function Bg(t){var i=zr(t,function(c){return o.size===g&&o.clear(),c}),o=i.cache;return i}function $g(t,i){var o=t[1],c=i[1],d=o|c,v=d<(P|j|B),w=c==B&&o==L||c==B&&o==H&&t[7].length<=i[8]||c==(B|H)&&i[7].length<=i[8]&&o==L;if(!(v||w))return t;c&P&&(t[2]=i[2],d|=o&P?0:I);var T=i[3];if(T){var A=t[3];t[3]=A?lu(A,T,i[4]):T,t[4]=A?sn(t[3],y):i[4]}return T=i[5],T&&(A=t[5],t[5]=A?cu(A,T,i[6]):T,t[6]=A?sn(t[5],y):i[6]),T=i[7],T&&(t[7]=T),c&B&&(t[8]=t[8]==null?i[8]:Ye(t[8],i[8])),t[9]==null&&(t[9]=i[9]),t[0]=i[0],t[1]=d,t}function Wg(t){var i=[];if(t!=null)for(var o in Se(t))i.push(o);return i}function Ug(t){return fr.call(t)}function Au(t,i,o){return i=Oe(i===r?t.length-1:i,0),function(){for(var c=arguments,d=-1,v=Oe(c.length-i,0),w=R(v);++d<v;)w[d]=c[i+d];d=-1;for(var T=R(i+1);++d<i;)T[d]=c[d];return T[i]=o(w),ot(t,this,T)}}function Eu(t,i){return i.length<2?t:Tn(t,vt(i,0,-1))}function Hg(t,i){for(var o=t.length,c=Ye(i.length,o),d=nt(t);c--;){var v=i[c];t[c]=Yt(v,o)?d[v]:r}return t}function Bo(t,i){if(!(i==="constructor"&&typeof t[i]=="function")&&i!="__proto__")return t[i]}var ku=Ru(Qc),Pi=sm||function(t,i){return He.setTimeout(t,i)},$o=Ru(dg);function Pu(t,i,o){var c=i+"";return $o(t,Dg(c,Ng(jg(c),o)))}function Ru(t){var i=0,o=0;return function(){var c=cm(),d=fe-(c-o);if(o=c,d>0){if(++i>=ve)return arguments[0]}else i=0;return t.apply(r,arguments)}}function Dr(t,i){var o=-1,c=t.length,d=c-1;for(i=i===r?c:i;++o<i;){var v=So(o,d),w=t[v];t[v]=t[o],t[o]=w}return t.length=i,t}var ju=Bg(function(t){var i=[];return t.charCodeAt(0)===46&&i.push(""),t.replace(D0,function(o,c,d,v){i.push(d?v.replace(W0,"$1"):c||o)}),i});function Pt(t){if(typeof t=="string"||ut(t))return t;var i=t+"";return i=="0"&&1/t==-q?"-0":i}function Mn(t){if(t!=null){try{return ur.call(t)}catch{}try{return t+""}catch{}}return""}function Ng(t,i){return at(Xe,function(o){var c="_."+o[0];i&o[1]&&!sr(t,c)&&t.push(c)}),t.sort()}function Iu(t){if(t instanceof de)return t.clone();var i=new gt(t.__wrapped__,t.__chain__);return i.__actions__=nt(t.__actions__),i.__index__=t.__index__,i.__values__=t.__values__,i}function Gg(t,i,o){(o?Qe(t,i,o):i===r)?i=1:i=Oe(ae(i),0);var c=t==null?0:t.length;if(!c||i<1)return[];for(var d=0,v=0,w=R(xr(c/i));d<c;)w[v++]=vt(t,d,d+=i);return w}function Kg(t){for(var i=-1,o=t==null?0:t.length,c=0,d=[];++i<o;){var v=t[i];v&&(d[c++]=v)}return d}function Yg(){var t=arguments.length;if(!t)return[];for(var i=R(t-1),o=arguments[0],c=t;c--;)i[c-1]=arguments[c];return rn(se(o)?nt(o):[o],Ne(i,1))}var qg=ce(function(t,i){return Ie(t)?Ti(t,Ne(i,1,Ie,!0)):[]}),Xg=ce(function(t,i){var o=yt(i);return Ie(o)&&(o=r),Ie(t)?Ti(t,Ne(i,1,Ie,!0),J(o,2)):[]}),Zg=ce(function(t,i){var o=yt(i);return Ie(o)&&(o=r),Ie(t)?Ti(t,Ne(i,1,Ie,!0),r,o):[]});function Qg(t,i,o){var c=t==null?0:t.length;return c?(i=o||i===r?1:ae(i),vt(t,i<0?0:i,c)):[]}function Jg(t,i,o){var c=t==null?0:t.length;return c?(i=o||i===r?1:ae(i),i=c-i,vt(t,0,i<0?0:i)):[]}function e2(t,i){return t&&t.length?Ar(t,J(i,3),!0,!0):[]}function t2(t,i){return t&&t.length?Ar(t,J(i,3),!0):[]}function n2(t,i,o,c){var d=t==null?0:t.length;return d?(o&&typeof o!="number"&&Qe(t,i,o)&&(o=0,c=d),Ym(t,i,o,c)):[]}function Lu(t,i,o){var c=t==null?0:t.length;if(!c)return-1;var d=o==null?0:ae(o);return d<0&&(d=Oe(c+d,0)),or(t,J(i,3),d)}function Du(t,i,o){var c=t==null?0:t.length;if(!c)return-1;var d=c-1;return o!==r&&(d=ae(o),d=o<0?Oe(c+d,0):Ye(d,c-1)),or(t,J(i,3),d,!0)}function Fu(t){var i=t==null?0:t.length;return i?Ne(t,1):[]}function i2(t){var i=t==null?0:t.length;return i?Ne(t,q):[]}function r2(t,i){var o=t==null?0:t.length;return o?(i=i===r?1:ae(i),Ne(t,i)):[]}function s2(t){for(var i=-1,o=t==null?0:t.length,c={};++i<o;){var d=t[i];Ft(c,d[0],d[1])}return c}function Vu(t){return t&&t.length?t[0]:r}function o2(t,i,o){var c=t==null?0:t.length;if(!c)return-1;var d=o==null?0:ae(o);return d<0&&(d=Oe(c+d,0)),Bn(t,i,d)}function a2(t){var i=t==null?0:t.length;return i?vt(t,0,-1):[]}var l2=ce(function(t){var i=Ee(t,Eo);return i.length&&i[0]===t[0]?vo(i):[]}),c2=ce(function(t){var i=yt(t),o=Ee(t,Eo);return i===yt(o)?i=r:o.pop(),o.length&&o[0]===t[0]?vo(o,J(i,2)):[]}),u2=ce(function(t){var i=yt(t),o=Ee(t,Eo);return i=typeof i=="function"?i:r,i&&o.pop(),o.length&&o[0]===t[0]?vo(o,r,i):[]});function f2(t,i){return t==null?"":am.call(t,i)}function yt(t){var i=t==null?0:t.length;return i?t[i-1]:r}function h2(t,i,o){var c=t==null?0:t.length;if(!c)return-1;var d=c;return o!==r&&(d=ae(o),d=d<0?Oe(c+d,0):Ye(d,c-1)),i===i?N1(t,i,d):or(t,xc,d,!0)}function d2(t,i){return t&&t.length?Yc(t,ae(i)):r}var p2=ce(Ou);function Ou(t,i){return t&&t.length&&i&&i.length?Co(t,i):t}function m2(t,i,o){return t&&t.length&&i&&i.length?Co(t,i,J(o,2)):t}function g2(t,i,o){return t&&t.length&&i&&i.length?Co(t,i,r,o):t}var x2=Kt(function(t,i){var o=t==null?0:t.length,c=po(t,i);return Zc(t,Ee(i,function(d){return Yt(d,o)?+d:d}).sort(au)),c});function v2(t,i){var o=[];if(!(t&&t.length))return o;var c=-1,d=[],v=t.length;for(i=J(i,3);++c<v;){var w=t[c];i(w,c,t)&&(o.push(w),d.push(c))}return Zc(t,d),o}function Wo(t){return t==null?t:fm.call(t)}function y2(t,i,o){var c=t==null?0:t.length;return c?(o&&typeof o!="number"&&Qe(t,i,o)?(i=0,o=c):(i=i==null?0:ae(i),o=o===r?c:ae(o)),vt(t,i,o)):[]}function b2(t,i){return Mr(t,i)}function w2(t,i,o){return _o(t,i,J(o,2))}function C2(t,i){var o=t==null?0:t.length;if(o){var c=Mr(t,i);if(c<o&&Rt(t[c],i))return c}return-1}function S2(t,i){return Mr(t,i,!0)}function T2(t,i,o){return _o(t,i,J(o,2),!0)}function _2(t,i){var o=t==null?0:t.length;if(o){var c=Mr(t,i,!0)-1;if(Rt(t[c],i))return c}return-1}function M2(t){return t&&t.length?Jc(t):[]}function A2(t,i){return t&&t.length?Jc(t,J(i,2)):[]}function E2(t){var i=t==null?0:t.length;return i?vt(t,1,i):[]}function k2(t,i,o){return t&&t.length?(i=o||i===r?1:ae(i),vt(t,0,i<0?0:i)):[]}function P2(t,i,o){var c=t==null?0:t.length;return c?(i=o||i===r?1:ae(i),i=c-i,vt(t,i<0?0:i,c)):[]}function R2(t,i){return t&&t.length?Ar(t,J(i,3),!1,!0):[]}function j2(t,i){return t&&t.length?Ar(t,J(i,3)):[]}var I2=ce(function(t){return ln(Ne(t,1,Ie,!0))}),L2=ce(function(t){var i=yt(t);return Ie(i)&&(i=r),ln(Ne(t,1,Ie,!0),J(i,2))}),D2=ce(function(t){var i=yt(t);return i=typeof i=="function"?i:r,ln(Ne(t,1,Ie,!0),r,i)});function F2(t){return t&&t.length?ln(t):[]}function V2(t,i){return t&&t.length?ln(t,J(i,2)):[]}function O2(t,i){return i=typeof i=="function"?i:r,t&&t.length?ln(t,r,i):[]}function Uo(t){if(!(t&&t.length))return[];var i=0;return t=nn(t,function(o){if(Ie(o))return i=Oe(o.length,i),!0}),so(i,function(o){return Ee(t,no(o))})}function zu(t,i){if(!(t&&t.length))return[];var o=Uo(t);return i==null?o:Ee(o,function(c){return ot(i,r,c)})}var z2=ce(function(t,i){return Ie(t)?Ti(t,i):[]}),B2=ce(function(t){return Ao(nn(t,Ie))}),$2=ce(function(t){var i=yt(t);return Ie(i)&&(i=r),Ao(nn(t,Ie),J(i,2))}),W2=ce(function(t){var i=yt(t);return i=typeof i=="function"?i:r,Ao(nn(t,Ie),r,i)}),U2=ce(Uo);function H2(t,i){return iu(t||[],i||[],Si)}function N2(t,i){return iu(t||[],i||[],Ai)}var G2=ce(function(t){var i=t.length,o=i>1?t[i-1]:r;return o=typeof o=="function"?(t.pop(),o):r,zu(t,o)});function Bu(t){var i=x(t);return i.__chain__=!0,i}function K2(t,i){return i(t),t}function Fr(t,i){return i(t)}var Y2=Kt(function(t){var i=t.length,o=i?t[0]:0,c=this.__wrapped__,d=function(v){return po(v,t)};return i>1||this.__actions__.length||!(c instanceof de)||!Yt(o)?this.thru(d):(c=c.slice(o,+o+(i?1:0)),c.__actions__.push({func:Fr,args:[d],thisArg:r}),new gt(c,this.__chain__).thru(function(v){return i&&!v.length&&v.push(r),v}))});function q2(){return Bu(this)}function X2(){return new gt(this.value(),this.__chain__)}function Z2(){this.__values__===r&&(this.__values__=ef(this.value()));var t=this.__index__>=this.__values__.length,i=t?r:this.__values__[this.__index__++];return{done:t,value:i}}function Q2(){return this}function J2(t){for(var i,o=this;o instanceof wr;){var c=Iu(o);c.__index__=0,c.__values__=r,i?d.__wrapped__=c:i=c;var d=c;o=o.__wrapped__}return d.__wrapped__=t,i}function ex(){var t=this.__wrapped__;if(t instanceof de){var i=t;return this.__actions__.length&&(i=new de(this)),i=i.reverse(),i.__actions__.push({func:Fr,args:[Wo],thisArg:r}),new gt(i,this.__chain__)}return this.thru(Wo)}function tx(){return nu(this.__wrapped__,this.__actions__)}var nx=Er(function(t,i,o){be.call(t,o)?++t[o]:Ft(t,o,1)});function ix(t,i,o){var c=se(t)?mc:Km;return o&&Qe(t,i,o)&&(i=r),c(t,J(i,3))}function rx(t,i){var o=se(t)?nn:zc;return o(t,J(i,3))}var sx=du(Lu),ox=du(Du);function ax(t,i){return Ne(Vr(t,i),1)}function lx(t,i){return Ne(Vr(t,i),q)}function cx(t,i,o){return o=o===r?1:ae(o),Ne(Vr(t,i),o)}function $u(t,i){var o=se(t)?at:an;return o(t,J(i,3))}function Wu(t,i){var o=se(t)?E1:Oc;return o(t,J(i,3))}var ux=Er(function(t,i,o){be.call(t,o)?t[o].push(i):Ft(t,o,[i])});function fx(t,i,o,c){t=it(t)?t:Qn(t),o=o&&!c?ae(o):0;var d=t.length;return o<0&&(o=Oe(d+o,0)),Wr(t)?o<=d&&t.indexOf(i,o)>-1:!!d&&Bn(t,i,o)>-1}var hx=ce(function(t,i,o){var c=-1,d=typeof i=="function",v=it(t)?R(t.length):[];return an(t,function(w){v[++c]=d?ot(i,w,o):_i(w,i,o)}),v}),dx=Er(function(t,i,o){Ft(t,o,i)});function Vr(t,i){var o=se(t)?Ee:Nc;return o(t,J(i,3))}function px(t,i,o,c){return t==null?[]:(se(i)||(i=i==null?[]:[i]),o=c?r:o,se(o)||(o=o==null?[]:[o]),qc(t,i,o))}var mx=Er(function(t,i,o){t[o?0:1].push(i)},function(){return[[],[]]});function gx(t,i,o){var c=se(t)?eo:yc,d=arguments.length<3;return c(t,J(i,4),o,d,an)}function xx(t,i,o){var c=se(t)?k1:yc,d=arguments.length<3;return c(t,J(i,4),o,d,Oc)}function vx(t,i){var o=se(t)?nn:zc;return o(t,Br(J(i,3)))}function yx(t){var i=se(t)?Lc:fg;return i(t)}function bx(t,i,o){(o?Qe(t,i,o):i===r)?i=1:i=ae(i);var c=se(t)?Wm:hg;return c(t,i)}function wx(t){var i=se(t)?Um:pg;return i(t)}function Cx(t){if(t==null)return 0;if(it(t))return Wr(t)?Wn(t):t.length;var i=qe(t);return i==Mt||i==At?t.size:bo(t).length}function Sx(t,i,o){var c=se(t)?to:mg;return o&&Qe(t,i,o)&&(i=r),c(t,J(i,3))}var Tx=ce(function(t,i){if(t==null)return[];var o=i.length;return o>1&&Qe(t,i[0],i[1])?i=[]:o>2&&Qe(i[0],i[1],i[2])&&(i=[i[0]]),qc(t,Ne(i,1),[])}),Or=rm||function(){return He.Date.now()};function _x(t,i){if(typeof i!="function")throw new mt(l);return t=ae(t),function(){if(--t<1)return i.apply(this,arguments)}}function Uu(t,i,o){return i=o?r:i,i=t&&i==null?t.length:i,Gt(t,B,r,r,r,r,i)}function Hu(t,i){var o;if(typeof i!="function")throw new mt(l);return t=ae(t),function(){return--t>0&&(o=i.apply(this,arguments)),t<=1&&(i=r),o}}var Ho=ce(function(t,i,o){var c=P;if(o.length){var d=sn(o,Xn(Ho));c|=W}return Gt(t,c,i,o,d)}),Nu=ce(function(t,i,o){var c=P|j;if(o.length){var d=sn(o,Xn(Nu));c|=W}return Gt(i,c,t,o,d)});function Gu(t,i,o){i=o?r:i;var c=Gt(t,L,r,r,r,r,r,i);return c.placeholder=Gu.placeholder,c}function Ku(t,i,o){i=o?r:i;var c=Gt(t,$,r,r,r,r,r,i);return c.placeholder=Ku.placeholder,c}function Yu(t,i,o){var c,d,v,w,T,A,V=0,O=!1,z=!1,K=!0;if(typeof t!="function")throw new mt(l);i=bt(i)||0,ke(o)&&(O=!!o.leading,z="maxWait"in o,v=z?Oe(bt(o.maxWait)||0,i):v,K="trailing"in o?!!o.trailing:K);function Z(Le){var jt=c,Zt=d;return c=d=r,V=Le,w=t.apply(Zt,jt),w}function ee(Le){return V=Le,T=Pi(he,i),O?Z(Le):w}function le(Le){var jt=Le-A,Zt=Le-V,mf=i-jt;return z?Ye(mf,v-Zt):mf}function Q(Le){var jt=Le-A,Zt=Le-V;return A===r||jt>=i||jt<0||z&&Zt>=v}function he(){var Le=Or();if(Q(Le))return ge(Le);T=Pi(he,le(Le))}function ge(Le){return T=r,K&&c?Z(Le):(c=d=r,w)}function ft(){T!==r&&ru(T),V=0,c=A=d=T=r}function Je(){return T===r?w:ge(Or())}function ht(){var Le=Or(),jt=Q(Le);if(c=arguments,d=this,A=Le,jt){if(T===r)return ee(A);if(z)return ru(T),T=Pi(he,i),Z(A)}return T===r&&(T=Pi(he,i)),w}return ht.cancel=ft,ht.flush=Je,ht}var Mx=ce(function(t,i){return Vc(t,1,i)}),Ax=ce(function(t,i,o){return Vc(t,bt(i)||0,o)});function Ex(t){return Gt(t,U)}function zr(t,i){if(typeof t!="function"||i!=null&&typeof i!="function")throw new mt(l);var o=function(){var c=arguments,d=i?i.apply(this,c):c[0],v=o.cache;if(v.has(d))return v.get(d);var w=t.apply(this,c);return o.cache=v.set(d,w)||v,w};return o.cache=new(zr.Cache||Nt),o}zr.Cache=Nt;function Br(t){if(typeof t!="function")throw new mt(l);return function(){var i=arguments;switch(i.length){case 0:return!t.call(this);case 1:return!t.call(this,i[0]);case 2:return!t.call(this,i[0],i[1]);case 3:return!t.call(this,i[0],i[1],i[2])}return!t.apply(this,i)}}function kx(t){return Hu(2,t)}var Px=gg(function(t,i){i=i.length==1&&se(i[0])?Ee(i[0],lt(J())):Ee(Ne(i,1),lt(J()));var o=i.length;return ce(function(c){for(var d=-1,v=Ye(c.length,o);++d<v;)c[d]=i[d].call(this,c[d]);return ot(t,this,c)})}),No=ce(function(t,i){var o=sn(i,Xn(No));return Gt(t,W,r,i,o)}),qu=ce(function(t,i){var o=sn(i,Xn(qu));return Gt(t,G,r,i,o)}),Rx=Kt(function(t,i){return Gt(t,H,r,r,r,i)});function jx(t,i){if(typeof t!="function")throw new mt(l);return i=i===r?i:ae(i),ce(t,i)}function Ix(t,i){if(typeof t!="function")throw new mt(l);return i=i==null?0:Oe(ae(i),0),ce(function(o){var c=o[i],d=un(o,0,i);return c&&rn(d,c),ot(t,this,d)})}function Lx(t,i,o){var c=!0,d=!0;if(typeof t!="function")throw new mt(l);return ke(o)&&(c="leading"in o?!!o.leading:c,d="trailing"in o?!!o.trailing:d),Yu(t,i,{leading:c,maxWait:i,trailing:d})}function Dx(t){return Uu(t,1)}function Fx(t,i){return No(ko(i),t)}function Vx(){if(!arguments.length)return[];var t=arguments[0];return se(t)?t:[t]}function Ox(t){return xt(t,_)}function zx(t,i){return i=typeof i=="function"?i:r,xt(t,_,i)}function Bx(t){return xt(t,b|_)}function $x(t,i){return i=typeof i=="function"?i:r,xt(t,b|_,i)}function Wx(t,i){return i==null||Fc(t,i,We(i))}function Rt(t,i){return t===i||t!==t&&i!==i}var Ux=jr(xo),Hx=jr(function(t,i){return t>=i}),An=Wc((function(){return arguments})())?Wc:function(t){return Re(t)&&be.call(t,"callee")&&!Ec.call(t,"callee")},se=R.isArray,Nx=cc?lt(cc):Jm;function it(t){return t!=null&&$r(t.length)&&!qt(t)}function Ie(t){return Re(t)&&it(t)}function Gx(t){return t===!0||t===!1||Re(t)&&Ze(t)==ui}var fn=om||ia,Kx=uc?lt(uc):eg;function Yx(t){return Re(t)&&t.nodeType===1&&!Ri(t)}function qx(t){if(t==null)return!0;if(it(t)&&(se(t)||typeof t=="string"||typeof t.splice=="function"||fn(t)||Zn(t)||An(t)))return!t.length;var i=qe(t);if(i==Mt||i==At)return!t.size;if(ki(t))return!bo(t).length;for(var o in t)if(be.call(t,o))return!1;return!0}function Xx(t,i){return Mi(t,i)}function Zx(t,i,o){o=typeof o=="function"?o:r;var c=o?o(t,i):r;return c===r?Mi(t,i,r,o):!!c}function Go(t){if(!Re(t))return!1;var i=Ze(t);return i==Ji||i==w0||typeof t.message=="string"&&typeof t.name=="string"&&!Ri(t)}function Qx(t){return typeof t=="number"&&Pc(t)}function qt(t){if(!ke(t))return!1;var i=Ze(t);return i==er||i==Fl||i==b0||i==S0}function Xu(t){return typeof t=="number"&&t==ae(t)}function $r(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=me}function ke(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}function Re(t){return t!=null&&typeof t=="object"}var Zu=fc?lt(fc):ng;function Jx(t,i){return t===i||yo(t,i,Fo(i))}function ev(t,i,o){return o=typeof o=="function"?o:r,yo(t,i,Fo(i),o)}function tv(t){return Qu(t)&&t!=+t}function nv(t){if(zg(t))throw new ie(u);return Uc(t)}function iv(t){return t===null}function rv(t){return t==null}function Qu(t){return typeof t=="number"||Re(t)&&Ze(t)==hi}function Ri(t){if(!Re(t)||Ze(t)!=Ut)return!1;var i=pr(t);if(i===null)return!0;var o=be.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&ur.call(o)==em}var Ko=hc?lt(hc):ig;function sv(t){return Xu(t)&&t>=-me&&t<=me}var Ju=dc?lt(dc):rg;function Wr(t){return typeof t=="string"||!se(t)&&Re(t)&&Ze(t)==pi}function ut(t){return typeof t=="symbol"||Re(t)&&Ze(t)==tr}var Zn=pc?lt(pc):sg;function ov(t){return t===r}function av(t){return Re(t)&&qe(t)==mi}function lv(t){return Re(t)&&Ze(t)==_0}var cv=jr(wo),uv=jr(function(t,i){return t<=i});function ef(t){if(!t)return[];if(it(t))return Wr(t)?Et(t):nt(t);if(vi&&t[vi])return W1(t[vi]());var i=qe(t),o=i==Mt?ao:i==At?ar:Qn;return o(t)}function Xt(t){if(!t)return t===0?t:0;if(t=bt(t),t===q||t===-q){var i=t<0?-1:1;return i*De}return t===t?t:0}function ae(t){var i=Xt(t),o=i%1;return i===i?o?i-o:i:0}function tf(t){return t?Sn(ae(t),0,te):0}function bt(t){if(typeof t=="number")return t;if(ut(t))return N;if(ke(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=ke(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=bc(t);var o=N0.test(t);return o||K0.test(t)?_1(t.slice(2),o?2:8):H0.test(t)?N:+t}function nf(t){return Ot(t,rt(t))}function fv(t){return t?Sn(ae(t),-me,me):t===0?t:0}function we(t){return t==null?"":ct(t)}var hv=Yn(function(t,i){if(ki(i)||it(i)){Ot(i,We(i),t);return}for(var o in i)be.call(i,o)&&Si(t,o,i[o])}),rf=Yn(function(t,i){Ot(i,rt(i),t)}),sf=Yn(function(t,i,o,c){Ot(i,rt(i),t,c)}),Yo=Yn(function(t,i,o,c){Ot(i,We(i),t,c)}),dv=Kt(po);function pv(t,i){var o=Kn(t);return i==null?o:Dc(o,i)}var mv=ce(function(t,i){t=Se(t);var o=-1,c=i.length,d=c>2?i[2]:r;for(d&&Qe(i[0],i[1],d)&&(c=1);++o<c;)for(var v=i[o],w=rt(v),T=-1,A=w.length;++T<A;){var V=w[T],O=t[V];(O===r||Rt(O,Hn[V])&&!be.call(t,V))&&(t[V]=v[V])}return t}),gv=ce(function(t){return t.push(r,bu),ot(of,r,t)});function xv(t,i){return gc(t,J(i,3),Vt)}function vv(t,i){return gc(t,J(i,3),go)}function yv(t,i){return t==null?t:mo(t,J(i,3),rt)}function bv(t,i){return t==null?t:Bc(t,J(i,3),rt)}function wv(t,i){return t&&Vt(t,J(i,3))}function Cv(t,i){return t&&go(t,J(i,3))}function Sv(t){return t==null?[]:Tr(t,We(t))}function Tv(t){return t==null?[]:Tr(t,rt(t))}function qo(t,i,o){var c=t==null?r:Tn(t,i);return c===r?o:c}function _v(t,i){return t!=null&&Su(t,i,qm)}function Xo(t,i){return t!=null&&Su(t,i,Xm)}var Mv=mu(function(t,i,o){i!=null&&typeof i.toString!="function"&&(i=fr.call(i)),t[i]=o},Qo(st)),Av=mu(function(t,i,o){i!=null&&typeof i.toString!="function"&&(i=fr.call(i)),be.call(t,i)?t[i].push(o):t[i]=[o]},J),Ev=ce(_i);function We(t){return it(t)?Ic(t):bo(t)}function rt(t){return it(t)?Ic(t,!0):og(t)}function kv(t,i){var o={};return i=J(i,3),Vt(t,function(c,d,v){Ft(o,i(c,d,v),c)}),o}function Pv(t,i){var o={};return i=J(i,3),Vt(t,function(c,d,v){Ft(o,d,i(c,d,v))}),o}var Rv=Yn(function(t,i,o){_r(t,i,o)}),of=Yn(function(t,i,o,c){_r(t,i,o,c)}),jv=Kt(function(t,i){var o={};if(t==null)return o;var c=!1;i=Ee(i,function(v){return v=cn(v,t),c||(c=v.length>1),v}),Ot(t,Lo(t),o),c&&(o=xt(o,b|k|_,Ag));for(var d=i.length;d--;)Mo(o,i[d]);return o});function Iv(t,i){return af(t,Br(J(i)))}var Lv=Kt(function(t,i){return t==null?{}:lg(t,i)});function af(t,i){if(t==null)return{};var o=Ee(Lo(t),function(c){return[c]});return i=J(i),Xc(t,o,function(c,d){return i(c,d[0])})}function Dv(t,i,o){i=cn(i,t);var c=-1,d=i.length;for(d||(d=1,t=r);++c<d;){var v=t==null?r:t[Pt(i[c])];v===r&&(c=d,v=o),t=qt(v)?v.call(t):v}return t}function Fv(t,i,o){return t==null?t:Ai(t,i,o)}function Vv(t,i,o,c){return c=typeof c=="function"?c:r,t==null?t:Ai(t,i,o,c)}var lf=vu(We),cf=vu(rt);function Ov(t,i,o){var c=se(t),d=c||fn(t)||Zn(t);if(i=J(i,4),o==null){var v=t&&t.constructor;d?o=c?new v:[]:ke(t)?o=qt(v)?Kn(pr(t)):{}:o={}}return(d?at:Vt)(t,function(w,T,A){return i(o,w,T,A)}),o}function zv(t,i){return t==null?!0:Mo(t,i)}function Bv(t,i,o){return t==null?t:tu(t,i,ko(o))}function $v(t,i,o,c){return c=typeof c=="function"?c:r,t==null?t:tu(t,i,ko(o),c)}function Qn(t){return t==null?[]:oo(t,We(t))}function Wv(t){return t==null?[]:oo(t,rt(t))}function Uv(t,i,o){return o===r&&(o=i,i=r),o!==r&&(o=bt(o),o=o===o?o:0),i!==r&&(i=bt(i),i=i===i?i:0),Sn(bt(t),i,o)}function Hv(t,i,o){return i=Xt(i),o===r?(o=i,i=0):o=Xt(o),t=bt(t),Zm(t,i,o)}function Nv(t,i,o){if(o&&typeof o!="boolean"&&Qe(t,i,o)&&(i=o=r),o===r&&(typeof i=="boolean"?(o=i,i=r):typeof t=="boolean"&&(o=t,t=r)),t===r&&i===r?(t=0,i=1):(t=Xt(t),i===r?(i=t,t=0):i=Xt(i)),t>i){var c=t;t=i,i=c}if(o||t%1||i%1){var d=Rc();return Ye(t+d*(i-t+T1("1e-"+((d+"").length-1))),i)}return So(t,i)}var Gv=qn(function(t,i,o){return i=i.toLowerCase(),t+(o?uf(i):i)});function uf(t){return Zo(we(t).toLowerCase())}function ff(t){return t=we(t),t&&t.replace(q0,V1).replace(p1,"")}function Kv(t,i,o){t=we(t),i=ct(i);var c=t.length;o=o===r?c:Sn(ae(o),0,c);var d=o;return o-=i.length,o>=0&&t.slice(o,d)==i}function Yv(t){return t=we(t),t&&P0.test(t)?t.replace(zl,O1):t}function qv(t){return t=we(t),t&&F0.test(t)?t.replace(Hs,"\\$&"):t}var Xv=qn(function(t,i,o){return t+(o?"-":"")+i.toLowerCase()}),Zv=qn(function(t,i,o){return t+(o?" ":"")+i.toLowerCase()}),Qv=hu("toLowerCase");function Jv(t,i,o){t=we(t),i=ae(i);var c=i?Wn(t):0;if(!i||c>=i)return t;var d=(i-c)/2;return Rr(vr(d),o)+t+Rr(xr(d),o)}function ey(t,i,o){t=we(t),i=ae(i);var c=i?Wn(t):0;return i&&c<i?t+Rr(i-c,o):t}function ty(t,i,o){t=we(t),i=ae(i);var c=i?Wn(t):0;return i&&c<i?Rr(i-c,o)+t:t}function ny(t,i,o){return o||i==null?i=0:i&&(i=+i),um(we(t).replace(Ns,""),i||0)}function iy(t,i,o){return(o?Qe(t,i,o):i===r)?i=1:i=ae(i),To(we(t),i)}function ry(){var t=arguments,i=we(t[0]);return t.length<3?i:i.replace(t[1],t[2])}var sy=qn(function(t,i,o){return t+(o?"_":"")+i.toLowerCase()});function oy(t,i,o){return o&&typeof o!="number"&&Qe(t,i,o)&&(i=o=r),o=o===r?te:o>>>0,o?(t=we(t),t&&(typeof i=="string"||i!=null&&!Ko(i))&&(i=ct(i),!i&&$n(t))?un(Et(t),0,o):t.split(i,o)):[]}var ay=qn(function(t,i,o){return t+(o?" ":"")+Zo(i)});function ly(t,i,o){return t=we(t),o=o==null?0:Sn(ae(o),0,t.length),i=ct(i),t.slice(o,o+i.length)==i}function cy(t,i,o){var c=x.templateSettings;o&&Qe(t,i,o)&&(i=r),t=we(t),i=Yo({},i,c,yu);var d=Yo({},i.imports,c.imports,yu),v=We(d),w=oo(d,v);at(v,function(Q){if($l.test(Q))throw new ie(p)});var T,A,V=0,O=i.interpolate||nr,z="__p += '",K=lo((i.escape||nr).source+"|"+O.source+"|"+(O===Bl?U0:nr).source+"|"+(i.evaluate||nr).source+"|$","g"),Z="//# sourceURL="+(be.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++y1+"]")+`
`;t.replace(K,function(Q,he,ge,ft,Je,ht){return ge||(ge=ft),z+=t.slice(V,ht).replace(X0,z1),he&&(T=!0,z+=`' +
__e(`+he+`) +
'`),Je&&(A=!0,z+=`';
`+Je+`;
__p += '`),ge&&(z+=`' +
((__t = (`+ge+`)) == null ? '' : __t) +
'`),V=ht+Q.length,Q}),z+=`';
`;var ee=be.call(i,"variable")&&i.variable;if(!ee)z=`with (obj) {
`+z+`
}
`;else if($l.test(ee))throw new ie(f);z=(A?z.replace(M0,""):z).replace(A0,"$1").replace(E0,"$1;"),z="function("+(ee||"obj")+`) {
`+(ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+z+`return __p
}`;var le=df(function(){return ye(v,Z+"return "+z).apply(r,w)});if(le.source=z,Go(le))throw le;return le}function uy(t){return we(t).toLowerCase()}function fy(t){return we(t).toUpperCase()}function hy(t,i,o){if(t=we(t),t&&(o||i===r))return bc(t);if(!t||!(i=ct(i)))return t;var c=Et(t),d=Et(i),v=wc(c,d),w=Cc(c,d)+1;return un(c,v,w).join("")}function dy(t,i,o){if(t=we(t),t&&(o||i===r))return t.slice(0,Tc(t)+1);if(!t||!(i=ct(i)))return t;var c=Et(t),d=Cc(c,Et(i))+1;return un(c,0,d).join("")}function py(t,i,o){if(t=we(t),t&&(o||i===r))return t.replace(Ns,"");if(!t||!(i=ct(i)))return t;var c=Et(t),d=wc(c,Et(i));return un(c,d).join("")}function my(t,i){var o=ne,c=pe;if(ke(i)){var d="separator"in i?i.separator:d;o="length"in i?ae(i.length):o,c="omission"in i?ct(i.omission):c}t=we(t);var v=t.length;if($n(t)){var w=Et(t);v=w.length}if(o>=v)return t;var T=o-Wn(c);if(T<1)return c;var A=w?un(w,0,T).join(""):t.slice(0,T);if(d===r)return A+c;if(w&&(T+=A.length-T),Ko(d)){if(t.slice(T).search(d)){var V,O=A;for(d.global||(d=lo(d.source,we(Wl.exec(d))+"g")),d.lastIndex=0;V=d.exec(O);)var z=V.index;A=A.slice(0,z===r?T:z)}}else if(t.indexOf(ct(d),T)!=T){var K=A.lastIndexOf(d);K>-1&&(A=A.slice(0,K))}return A+c}function gy(t){return t=we(t),t&&k0.test(t)?t.replace(Ol,G1):t}var xy=qn(function(t,i,o){return t+(o?" ":"")+i.toUpperCase()}),Zo=hu("toUpperCase");function hf(t,i,o){return t=we(t),i=o?r:i,i===r?$1(t)?q1(t):j1(t):t.match(i)||[]}var df=ce(function(t,i){try{return ot(t,r,i)}catch(o){return Go(o)?o:new ie(o)}}),vy=Kt(function(t,i){return at(i,function(o){o=Pt(o),Ft(t,o,Ho(t[o],t))}),t});function yy(t){var i=t==null?0:t.length,o=J();return t=i?Ee(t,function(c){if(typeof c[1]!="function")throw new mt(l);return[o(c[0]),c[1]]}):[],ce(function(c){for(var d=-1;++d<i;){var v=t[d];if(ot(v[0],this,c))return ot(v[1],this,c)}})}function by(t){return Gm(xt(t,b))}function Qo(t){return function(){return t}}function wy(t,i){return t==null||t!==t?i:t}var Cy=pu(),Sy=pu(!0);function st(t){return t}function Jo(t){return Hc(typeof t=="function"?t:xt(t,b))}function Ty(t){return Gc(xt(t,b))}function _y(t,i){return Kc(t,xt(i,b))}var My=ce(function(t,i){return function(o){return _i(o,t,i)}}),Ay=ce(function(t,i){return function(o){return _i(t,o,i)}});function ea(t,i,o){var c=We(i),d=Tr(i,c);o==null&&!(ke(i)&&(d.length||!c.length))&&(o=i,i=t,t=this,d=Tr(i,We(i)));var v=!(ke(o)&&"chain"in o)||!!o.chain,w=qt(t);return at(d,function(T){var A=i[T];t[T]=A,w&&(t.prototype[T]=function(){var V=this.__chain__;if(v||V){var O=t(this.__wrapped__),z=O.__actions__=nt(this.__actions__);return z.push({func:A,args:arguments,thisArg:t}),O.__chain__=V,O}return A.apply(t,rn([this.value()],arguments))})}),t}function Ey(){return He._===this&&(He._=tm),this}function ta(){}function ky(t){return t=ae(t),ce(function(i){return Yc(i,t)})}var Py=Ro(Ee),Ry=Ro(mc),jy=Ro(to);function pf(t){return Oo(t)?no(Pt(t)):cg(t)}function Iy(t){return function(i){return t==null?r:Tn(t,i)}}var Ly=gu(),Dy=gu(!0);function na(){return[]}function ia(){return!1}function Fy(){return{}}function Vy(){return""}function Oy(){return!0}function zy(t,i){if(t=ae(t),t<1||t>me)return[];var o=te,c=Ye(t,te);i=J(i),t-=te;for(var d=so(c,i);++o<t;)i(o);return d}function By(t){return se(t)?Ee(t,Pt):ut(t)?[t]:nt(ju(we(t)))}function $y(t){var i=++J1;return we(t)+i}var Wy=Pr(function(t,i){return t+i},0),Uy=jo("ceil"),Hy=Pr(function(t,i){return t/i},1),Ny=jo("floor");function Gy(t){return t&&t.length?Sr(t,st,xo):r}function Ky(t,i){return t&&t.length?Sr(t,J(i,2),xo):r}function Yy(t){return vc(t,st)}function qy(t,i){return vc(t,J(i,2))}function Xy(t){return t&&t.length?Sr(t,st,wo):r}function Zy(t,i){return t&&t.length?Sr(t,J(i,2),wo):r}var Qy=Pr(function(t,i){return t*i},1),Jy=jo("round"),e5=Pr(function(t,i){return t-i},0);function t5(t){return t&&t.length?ro(t,st):0}function n5(t,i){return t&&t.length?ro(t,J(i,2)):0}return x.after=_x,x.ary=Uu,x.assign=hv,x.assignIn=rf,x.assignInWith=sf,x.assignWith=Yo,x.at=dv,x.before=Hu,x.bind=Ho,x.bindAll=vy,x.bindKey=Nu,x.castArray=Vx,x.chain=Bu,x.chunk=Gg,x.compact=Kg,x.concat=Yg,x.cond=yy,x.conforms=by,x.constant=Qo,x.countBy=nx,x.create=pv,x.curry=Gu,x.curryRight=Ku,x.debounce=Yu,x.defaults=mv,x.defaultsDeep=gv,x.defer=Mx,x.delay=Ax,x.difference=qg,x.differenceBy=Xg,x.differenceWith=Zg,x.drop=Qg,x.dropRight=Jg,x.dropRightWhile=e2,x.dropWhile=t2,x.fill=n2,x.filter=rx,x.flatMap=ax,x.flatMapDeep=lx,x.flatMapDepth=cx,x.flatten=Fu,x.flattenDeep=i2,x.flattenDepth=r2,x.flip=Ex,x.flow=Cy,x.flowRight=Sy,x.fromPairs=s2,x.functions=Sv,x.functionsIn=Tv,x.groupBy=ux,x.initial=a2,x.intersection=l2,x.intersectionBy=c2,x.intersectionWith=u2,x.invert=Mv,x.invertBy=Av,x.invokeMap=hx,x.iteratee=Jo,x.keyBy=dx,x.keys=We,x.keysIn=rt,x.map=Vr,x.mapKeys=kv,x.mapValues=Pv,x.matches=Ty,x.matchesProperty=_y,x.memoize=zr,x.merge=Rv,x.mergeWith=of,x.method=My,x.methodOf=Ay,x.mixin=ea,x.negate=Br,x.nthArg=ky,x.omit=jv,x.omitBy=Iv,x.once=kx,x.orderBy=px,x.over=Py,x.overArgs=Px,x.overEvery=Ry,x.overSome=jy,x.partial=No,x.partialRight=qu,x.partition=mx,x.pick=Lv,x.pickBy=af,x.property=pf,x.propertyOf=Iy,x.pull=p2,x.pullAll=Ou,x.pullAllBy=m2,x.pullAllWith=g2,x.pullAt=x2,x.range=Ly,x.rangeRight=Dy,x.rearg=Rx,x.reject=vx,x.remove=v2,x.rest=jx,x.reverse=Wo,x.sampleSize=bx,x.set=Fv,x.setWith=Vv,x.shuffle=wx,x.slice=y2,x.sortBy=Tx,x.sortedUniq=M2,x.sortedUniqBy=A2,x.split=oy,x.spread=Ix,x.tail=E2,x.take=k2,x.takeRight=P2,x.takeRightWhile=R2,x.takeWhile=j2,x.tap=K2,x.throttle=Lx,x.thru=Fr,x.toArray=ef,x.toPairs=lf,x.toPairsIn=cf,x.toPath=By,x.toPlainObject=nf,x.transform=Ov,x.unary=Dx,x.union=I2,x.unionBy=L2,x.unionWith=D2,x.uniq=F2,x.uniqBy=V2,x.uniqWith=O2,x.unset=zv,x.unzip=Uo,x.unzipWith=zu,x.update=Bv,x.updateWith=$v,x.values=Qn,x.valuesIn=Wv,x.without=z2,x.words=hf,x.wrap=Fx,x.xor=B2,x.xorBy=$2,x.xorWith=W2,x.zip=U2,x.zipObject=H2,x.zipObjectDeep=N2,x.zipWith=G2,x.entries=lf,x.entriesIn=cf,x.extend=rf,x.extendWith=sf,ea(x,x),x.add=Wy,x.attempt=df,x.camelCase=Gv,x.capitalize=uf,x.ceil=Uy,x.clamp=Uv,x.clone=Ox,x.cloneDeep=Bx,x.cloneDeepWith=$x,x.cloneWith=zx,x.conformsTo=Wx,x.deburr=ff,x.defaultTo=wy,x.divide=Hy,x.endsWith=Kv,x.eq=Rt,x.escape=Yv,x.escapeRegExp=qv,x.every=ix,x.find=sx,x.findIndex=Lu,x.findKey=xv,x.findLast=ox,x.findLastIndex=Du,x.findLastKey=vv,x.floor=Ny,x.forEach=$u,x.forEachRight=Wu,x.forIn=yv,x.forInRight=bv,x.forOwn=wv,x.forOwnRight=Cv,x.get=qo,x.gt=Ux,x.gte=Hx,x.has=_v,x.hasIn=Xo,x.head=Vu,x.identity=st,x.includes=fx,x.indexOf=o2,x.inRange=Hv,x.invoke=Ev,x.isArguments=An,x.isArray=se,x.isArrayBuffer=Nx,x.isArrayLike=it,x.isArrayLikeObject=Ie,x.isBoolean=Gx,x.isBuffer=fn,x.isDate=Kx,x.isElement=Yx,x.isEmpty=qx,x.isEqual=Xx,x.isEqualWith=Zx,x.isError=Go,x.isFinite=Qx,x.isFunction=qt,x.isInteger=Xu,x.isLength=$r,x.isMap=Zu,x.isMatch=Jx,x.isMatchWith=ev,x.isNaN=tv,x.isNative=nv,x.isNil=rv,x.isNull=iv,x.isNumber=Qu,x.isObject=ke,x.isObjectLike=Re,x.isPlainObject=Ri,x.isRegExp=Ko,x.isSafeInteger=sv,x.isSet=Ju,x.isString=Wr,x.isSymbol=ut,x.isTypedArray=Zn,x.isUndefined=ov,x.isWeakMap=av,x.isWeakSet=lv,x.join=f2,x.kebabCase=Xv,x.last=yt,x.lastIndexOf=h2,x.lowerCase=Zv,x.lowerFirst=Qv,x.lt=cv,x.lte=uv,x.max=Gy,x.maxBy=Ky,x.mean=Yy,x.meanBy=qy,x.min=Xy,x.minBy=Zy,x.stubArray=na,x.stubFalse=ia,x.stubObject=Fy,x.stubString=Vy,x.stubTrue=Oy,x.multiply=Qy,x.nth=d2,x.noConflict=Ey,x.noop=ta,x.now=Or,x.pad=Jv,x.padEnd=ey,x.padStart=ty,x.parseInt=ny,x.random=Nv,x.reduce=gx,x.reduceRight=xx,x.repeat=iy,x.replace=ry,x.result=Dv,x.round=Jy,x.runInContext=M,x.sample=yx,x.size=Cx,x.snakeCase=sy,x.some=Sx,x.sortedIndex=b2,x.sortedIndexBy=w2,x.sortedIndexOf=C2,x.sortedLastIndex=S2,x.sortedLastIndexBy=T2,x.sortedLastIndexOf=_2,x.startCase=ay,x.startsWith=ly,x.subtract=e5,x.sum=t5,x.sumBy=n5,x.template=cy,x.times=zy,x.toFinite=Xt,x.toInteger=ae,x.toLength=tf,x.toLower=uy,x.toNumber=bt,x.toSafeInteger=fv,x.toString=we,x.toUpper=fy,x.trim=hy,x.trimEnd=dy,x.trimStart=py,x.truncate=my,x.unescape=gy,x.uniqueId=$y,x.upperCase=xy,x.upperFirst=Zo,x.each=$u,x.eachRight=Wu,x.first=Vu,ea(x,(function(){var t={};return Vt(x,function(i,o){be.call(x.prototype,o)||(t[o]=i)}),t})(),{chain:!1}),x.VERSION=s,at(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){x[t].placeholder=x}),at(["drop","take"],function(t,i){de.prototype[t]=function(o){o=o===r?1:Oe(ae(o),0);var c=this.__filtered__&&!i?new de(this):this.clone();return c.__filtered__?c.__takeCount__=Ye(o,c.__takeCount__):c.__views__.push({size:Ye(o,te),type:t+(c.__dir__<0?"Right":"")}),c},de.prototype[t+"Right"]=function(o){return this.reverse()[t](o).reverse()}}),at(["filter","map","takeWhile"],function(t,i){var o=i+1,c=o==oe||o==ue;de.prototype[t]=function(d){var v=this.clone();return v.__iteratees__.push({iteratee:J(d,3),type:o}),v.__filtered__=v.__filtered__||c,v}}),at(["head","last"],function(t,i){var o="take"+(i?"Right":"");de.prototype[t]=function(){return this[o](1).value()[0]}}),at(["initial","tail"],function(t,i){var o="drop"+(i?"":"Right");de.prototype[t]=function(){return this.__filtered__?new de(this):this[o](1)}}),de.prototype.compact=function(){return this.filter(st)},de.prototype.find=function(t){return this.filter(t).head()},de.prototype.findLast=function(t){return this.reverse().find(t)},de.prototype.invokeMap=ce(function(t,i){return typeof t=="function"?new de(this):this.map(function(o){return _i(o,t,i)})}),de.prototype.reject=function(t){return this.filter(Br(J(t)))},de.prototype.slice=function(t,i){t=ae(t);var o=this;return o.__filtered__&&(t>0||i<0)?new de(o):(t<0?o=o.takeRight(-t):t&&(o=o.drop(t)),i!==r&&(i=ae(i),o=i<0?o.dropRight(-i):o.take(i-t)),o)},de.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},de.prototype.toArray=function(){return this.take(te)},Vt(de.prototype,function(t,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),d=x[c?"take"+(i=="last"?"Right":""):i],v=c||/^find/.test(i);d&&(x.prototype[i]=function(){var w=this.__wrapped__,T=c?[1]:arguments,A=w instanceof de,V=T[0],O=A||se(w),z=function(he){var ge=d.apply(x,rn([he],T));return c&&K?ge[0]:ge};O&&o&&typeof V=="function"&&V.length!=1&&(A=O=!1);var K=this.__chain__,Z=!!this.__actions__.length,ee=v&&!K,le=A&&!Z;if(!v&&O){w=le?w:new de(this);var Q=t.apply(w,T);return Q.__actions__.push({func:Fr,args:[z],thisArg:r}),new gt(Q,K)}return ee&&le?t.apply(this,T):(Q=this.thru(z),ee?c?Q.value()[0]:Q.value():Q)})}),at(["pop","push","shift","sort","splice","unshift"],function(t){var i=lr[t],o=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",c=/^(?:pop|shift)$/.test(t);x.prototype[t]=function(){var d=arguments;if(c&&!this.__chain__){var v=this.value();return i.apply(se(v)?v:[],d)}return this[o](function(w){return i.apply(se(w)?w:[],d)})}}),Vt(de.prototype,function(t,i){var o=x[i];if(o){var c=o.name+"";be.call(Gn,c)||(Gn[c]=[]),Gn[c].push({name:i,func:o})}}),Gn[kr(r,j).name]=[{name:"wrapper",func:r}],de.prototype.clone=xm,de.prototype.reverse=vm,de.prototype.value=ym,x.prototype.at=Y2,x.prototype.chain=q2,x.prototype.commit=X2,x.prototype.next=Z2,x.prototype.plant=J2,x.prototype.reverse=ex,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=tx,x.prototype.first=x.prototype.head,vi&&(x.prototype[vi]=Q2),x}),Un=X1();yn?((yn.exports=Un)._=Un,Zs._=Un):He._=Un}).call(X5)})(Li,Li.exports)),Li.exports}var Q5=Z5();const Ue=f5(Q5),ns=(e=0)=>{let n="  ";for(let r=0;r<e;r++)n+=" ";return n},Cd=(e,n,r)=>e[0]!==n||!Ue.includes(r,e[1])||e.length>2,J5=(e,n,r,s)=>{if(e==="projects "||e==="socials ")return n(`${e}go`),[];if(e==="projects g"||e==="socials g")return n(`${e}o`),[];if(Ue.startsWith(e,"socials go "))return["1.Github","2.Facebook","3.Linkedin"].forEach(a=>{s=[...s,a]}),s;if(Ue.startsWith(e,"projects go "))return["1.Blog"].forEach(a=>{s=[...s,a]}),s},Sd=e=>{if(!e||typeof e!="string")return!1;const n=e.trim();return n.startsWith("/")&&!n.startsWith("//")&&!/^https?:\/\//i.test(n)},al=C.createContext({});function Dn(e){const n=C.useRef(null);return n.current===null&&(n.current=e()),n.current}const e3=typeof window<"u",As=e3?C.useLayoutEffect:C.useEffect,Es=C.createContext(null);function ll(e,n){e.indexOf(n)===-1&&e.push(n)}function ds(e,n){const r=e.indexOf(n);r>-1&&e.splice(r,1)}const Wt=(e,n,r)=>r>n?n:r<e?e:r;let cl=()=>{};const xn={},Td=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),_d=e=>typeof e=="object"&&e!==null,Md=e=>/^0[^.\s]+$/u.test(e);function Ad(e){let n;return()=>(n===void 0&&(n=e()),n)}const Tt=e=>e,Yi=(...e)=>e.reduce((n,r)=>s=>r(n(s))),Ui=(e,n,r)=>{const s=n-e;return s?(r-e)/s:1};class ul{constructor(){this.subscriptions=[]}add(n){return ll(this.subscriptions,n),()=>ds(this.subscriptions,n)}notify(n,r,s){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](n,r,s);else for(let u=0;u<a;u++){const l=this.subscriptions[u];l&&l(n,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const dt=e=>e*1e3,St=e=>e/1e3,Ed=(e,n)=>n?e*(1e3/n):0,kd=(e,n,r)=>(((1-3*r+3*n)*e+(3*r-6*n))*e+3*n)*e,t3=1e-7,n3=12;function i3(e,n,r,s,a){let u,l,f=0;do l=n+(r-n)/2,u=kd(l,s,a)-e,u>0?r=l:n=l;while(Math.abs(u)>t3&&++f<n3);return l}function qi(e,n,r,s){if(e===n&&r===s)return Tt;const a=u=>i3(u,0,1,e,r);return u=>u===0||u===1?u:kd(a(u),n,s)}const Pd=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Rd=e=>n=>1-e(1-n),jd=qi(.33,1.53,.69,.99),fl=Rd(jd),Id=Pd(fl),Ld=e=>e>=1?1:(e*=2)<1?.5*fl(e):.5*(2-Math.pow(2,-10*(e-1))),hl=e=>1-Math.sin(Math.acos(e)),Dd=Rd(hl),Fd=Pd(hl),r3=qi(.42,0,1,1),s3=qi(0,0,.58,1),Vd=qi(.42,0,.58,1),o3=e=>Array.isArray(e)&&typeof e[0]!="number",Od=e=>Array.isArray(e)&&typeof e[0]=="number",a3={linear:Tt,easeIn:r3,easeInOut:Vd,easeOut:s3,circIn:hl,circInOut:Fd,circOut:Dd,backIn:fl,backInOut:Id,backOut:jd,anticipate:Ld},l3=e=>typeof e=="string",Mf=e=>{if(Od(e)){cl(e.length===4);const[n,r,s,a]=e;return qi(n,r,s,a)}else if(l3(e))return a3[e];return e},Gr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function c3(e){let n=new Set,r=new Set,s=!1,a=!1;const u=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function f(m){u.has(m)&&(p.schedule(m),e()),m(l)}const p={schedule:(m,g=!1,y=!1)=>{const k=y&&s?n:r;return g&&u.add(m),k.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(l=m,s){a=!0;return}s=!0;const g=n;n=r,r=g,n.forEach(f),n.clear(),s=!1,a&&(a=!1,p.process(m))}};return p}const u3=40;function zd(e,n){let r=!1,s=!0;const a={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,l=Gr.reduce((I,L)=>(I[L]=c3(u),I),{}),{setup:f,read:p,resolveKeyframes:m,preUpdate:g,update:y,preRender:b,render:k,postRender:_}=l,E=()=>{const I=xn.useManualTiming,L=I?a.timestamp:performance.now();r=!1,I||(a.delta=s?1e3/60:Math.max(Math.min(L-a.timestamp,u3),1)),a.timestamp=L,a.isProcessing=!0,f.process(a),p.process(a),m.process(a),g.process(a),y.process(a),b.process(a),k.process(a),_.process(a),a.isProcessing=!1,r&&n&&(s=!1,e(E))},S=()=>{r=!0,s=!0,a.isProcessing||e(E)};return{schedule:Gr.reduce((I,L)=>{const $=l[L];return I[L]=(W,G=!1,B=!1)=>(r||S(),$.schedule(W,G,B)),I},{}),cancel:I=>{for(let L=0;L<Gr.length;L++)l[Gr[L]].cancel(I)},state:a,steps:l}}const{schedule:Ce,cancel:en,state:Ge,steps:oa}=zd(typeof requestAnimationFrame<"u"?requestAnimationFrame:Tt,!0);let is;function f3(){is=void 0}const et={now:()=>(is===void 0&&et.set(Ge.isProcessing||xn.useManualTiming?Ge.timestamp:performance.now()),is),set:e=>{is=e,queueMicrotask(f3)}},Bd=e=>n=>typeof n=="string"&&n.startsWith(e),$d=Bd("--"),h3=Bd("var(--"),dl=e=>h3(e)?d3.test(e.split("/*")[0].trim()):!1,d3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Af(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ai={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Hi={...ai,transform:e=>Wt(0,1,e)},Kr={...ai,default:1},Oi=e=>Math.round(e*1e5)/1e5,pl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function p3(e){return e==null}const m3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ml=(e,n)=>r=>!!(typeof r=="string"&&m3.test(r)&&r.startsWith(e)||n&&!p3(r)&&Object.prototype.hasOwnProperty.call(r,n)),Wd=(e,n,r)=>s=>{if(typeof s!="string")return s;const[a,u,l,f]=s.match(pl);return{[e]:parseFloat(a),[n]:parseFloat(u),[r]:parseFloat(l),alpha:f!==void 0?parseFloat(f):1}},g3=e=>Wt(0,255,e),aa={...ai,transform:e=>Math.round(g3(e))},Rn={test:ml("rgb","red"),parse:Wd("red","green","blue"),transform:({red:e,green:n,blue:r,alpha:s=1})=>"rgba("+aa.transform(e)+", "+aa.transform(n)+", "+aa.transform(r)+", "+Oi(Hi.transform(s))+")"};function x3(e){let n="",r="",s="",a="";return e.length>5?(n=e.substring(1,3),r=e.substring(3,5),s=e.substring(5,7),a=e.substring(7,9)):(n=e.substring(1,2),r=e.substring(2,3),s=e.substring(3,4),a=e.substring(4,5),n+=n,r+=r,s+=s,a+=a),{red:parseInt(n,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:a?parseInt(a,16)/255:1}}const ja={test:ml("#"),parse:x3,transform:Rn.transform},Xi=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Jt=Xi("deg"),$t=Xi("%"),X=Xi("px"),v3=Xi("vh"),y3=Xi("vw"),Ef={...$t,parse:e=>$t.parse(e)/100,transform:e=>$t.transform(e*100)},ti={test:ml("hsl","hue"),parse:Wd("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:r,alpha:s=1})=>"hsla("+Math.round(e)+", "+$t.transform(Oi(n))+", "+$t.transform(Oi(r))+", "+Oi(Hi.transform(s))+")"},Fe={test:e=>Rn.test(e)||ja.test(e)||ti.test(e),parse:e=>Rn.test(e)?Rn.parse(e):ti.test(e)?ti.parse(e):ja.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Rn.transform(e):ti.transform(e),getAnimatableNone:e=>{const n=Fe.parse(e);return n.alpha=0,Fe.transform(n)}},b3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function w3(e){return isNaN(e)&&typeof e=="string"&&(e.match(pl)?.length||0)+(e.match(b3)?.length||0)>0}const Ud="number",Hd="color",C3="var",S3="var(",kf="${}",T3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function si(e){const n=e.toString(),r=[],s={color:[],number:[],var:[]},a=[];let u=0;const f=n.replace(T3,p=>(Fe.test(p)?(s.color.push(u),a.push(Hd),r.push(Fe.parse(p))):p.startsWith(S3)?(s.var.push(u),a.push(C3),r.push(p)):(s.number.push(u),a.push(Ud),r.push(parseFloat(p))),++u,kf)).split(kf);return{values:r,split:f,indexes:s,types:a}}function _3(e){return si(e).values}function Nd({split:e,types:n}){const r=e.length;return s=>{let a="";for(let u=0;u<r;u++)if(a+=e[u],s[u]!==void 0){const l=n[u];l===Ud?a+=Oi(s[u]):l===Hd?a+=Fe.transform(s[u]):a+=s[u]}return a}}function M3(e){return Nd(si(e))}const A3=e=>typeof e=="number"?0:Fe.test(e)?Fe.getAnimatableNone(e):e,E3=(e,n)=>typeof e=="number"?n?.trim().endsWith("/")?e:0:A3(e);function k3(e){const n=si(e);return Nd(n)(n.values.map((s,a)=>E3(s,n.split[a])))}const Dt={test:w3,parse:_3,createTransformer:M3,getAnimatableNone:k3};function la(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(n-e)*6*r:r<1/2?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function P3({hue:e,saturation:n,lightness:r,alpha:s}){e/=360,n/=100,r/=100;let a=0,u=0,l=0;if(!n)a=u=l=r;else{const f=r<.5?r*(1+n):r+n-r*n,p=2*r-f;a=la(p,f,e+1/3),u=la(p,f,e),l=la(p,f,e-1/3)}return{red:Math.round(a*255),green:Math.round(u*255),blue:Math.round(l*255),alpha:s}}function ps(e,n){return r=>r>0?n:e}const Te=(e,n,r)=>e+(n-e)*r,ca=(e,n,r)=>{const s=e*e,a=r*(n*n-s)+s;return a<0?0:Math.sqrt(a)},R3=[ja,Rn,ti],j3=e=>R3.find(n=>n.test(e));function Pf(e){const n=j3(e);if(!n)return!1;let r=n.parse(e);return n===ti&&(r=P3(r)),r}const Rf=(e,n)=>{const r=Pf(e),s=Pf(n);if(!r||!s)return ps(e,n);const a={...r};return u=>(a.red=ca(r.red,s.red,u),a.green=ca(r.green,s.green,u),a.blue=ca(r.blue,s.blue,u),a.alpha=Te(r.alpha,s.alpha,u),Rn.transform(a))},Ia=new Set(["none","hidden"]);function I3(e,n){return Ia.has(e)?r=>r<=0?e:n:r=>r>=1?n:e}function L3(e,n){return r=>Te(e,n,r)}function gl(e){return typeof e=="number"?L3:typeof e=="string"?dl(e)?ps:Fe.test(e)?Rf:V3:Array.isArray(e)?Gd:typeof e=="object"?Fe.test(e)?Rf:D3:ps}function Gd(e,n){const r=[...e],s=r.length,a=e.map((u,l)=>gl(u)(u,n[l]));return u=>{for(let l=0;l<s;l++)r[l]=a[l](u);return r}}function D3(e,n){const r={...e,...n},s={};for(const a in r)e[a]!==void 0&&n[a]!==void 0&&(s[a]=gl(e[a])(e[a],n[a]));return a=>{for(const u in s)r[u]=s[u](a);return r}}function F3(e,n){const r=[],s={color:0,var:0,number:0};for(let a=0;a<n.values.length;a++){const u=n.types[a],l=e.indexes[u][s[u]],f=e.values[l]??0;r[a]=f,s[u]++}return r}const V3=(e,n)=>{const r=Dt.createTransformer(n),s=si(e),a=si(n);return s.indexes.var.length===a.indexes.var.length&&s.indexes.color.length===a.indexes.color.length&&s.indexes.number.length>=a.indexes.number.length?Ia.has(e)&&!a.values.length||Ia.has(n)&&!s.values.length?I3(e,n):Yi(Gd(F3(s,a),a.values),r):ps(e,n)};function Kd(e,n,r){return typeof e=="number"&&typeof n=="number"&&typeof r=="number"?Te(e,n,r):gl(e)(e,n)}const O3=e=>{const n=({timestamp:r})=>e(r);return{start:(r=!0)=>Ce.update(n,r),stop:()=>en(n),now:()=>Ge.isProcessing?Ge.timestamp:et.now()}},Yd=(e,n,r=10)=>{let s="";const a=Math.max(Math.round(n/r),2);for(let u=0;u<a;u++)s+=Math.round(e(u/(a-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},ms=2e4;function xl(e){let n=0;const r=50;let s=e.next(n);for(;!s.done&&n<ms;)n+=r,s=e.next(n);return n>=ms?1/0:n}function z3(e,n=100,r){const s=r({...e,keyframes:[0,n]}),a=Math.min(xl(s),ms);return{type:"keyframes",ease:u=>s.next(a*u).value/n,duration:St(a)}}const je={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function La(e,n){return e*Math.sqrt(1-n*n)}const B3=12;function $3(e,n,r){let s=r;for(let a=1;a<B3;a++)s=s-e(s)/n(s);return s}const ua=.001;function W3({duration:e=je.duration,bounce:n=je.bounce,velocity:r=je.velocity,mass:s=je.mass}){let a,u,l=1-n;l=Wt(je.minDamping,je.maxDamping,l),e=Wt(je.minDuration,je.maxDuration,St(e)),l<1?(a=m=>{const g=m*l,y=g*e,b=g-r,k=La(m,l),_=Math.exp(-y);return ua-b/k*_},u=m=>{const y=m*l*e,b=y*r+r,k=Math.pow(l,2)*Math.pow(m,2)*e,_=Math.exp(-y),E=La(Math.pow(m,2),l);return(-a(m)+ua>0?-1:1)*((b-k)*_)/E}):(a=m=>{const g=Math.exp(-m*e),y=(m-r)*e+1;return-ua+g*y},u=m=>{const g=Math.exp(-m*e),y=(r-m)*(e*e);return g*y});const f=5/e,p=$3(a,u,f);if(e=dt(e),isNaN(p))return{stiffness:je.stiffness,damping:je.damping,duration:e};{const m=Math.pow(p,2)*s;return{stiffness:m,damping:l*2*Math.sqrt(s*m),duration:e}}}const U3=["duration","bounce"],H3=["stiffness","damping","mass"];function jf(e,n){return n.some(r=>e[r]!==void 0)}function N3(e){let n={velocity:je.velocity,stiffness:je.stiffness,damping:je.damping,mass:je.mass,isResolvedFromDuration:!1,...e};if(!jf(e,H3)&&jf(e,U3))if(n.velocity=0,e.visualDuration){const r=e.visualDuration,s=2*Math.PI/(r*1.2),a=s*s,u=2*Wt(.05,1,1-(e.bounce||0))*Math.sqrt(a);n={...n,mass:je.mass,stiffness:a,damping:u}}else{const r=W3({...e,velocity:0});n={...n,...r,mass:je.mass},n.isResolvedFromDuration=!0}return n}function gs(e=je.visualDuration,n=je.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:s,restDelta:a}=r;const u=r.keyframes[0],l=r.keyframes[r.keyframes.length-1],f={done:!1,value:u},{stiffness:p,damping:m,mass:g,duration:y,velocity:b,isResolvedFromDuration:k}=N3({...r,velocity:-St(r.velocity||0)}),_=b||0,E=m/(2*Math.sqrt(p*g)),S=l-u,P=St(Math.sqrt(p/g)),j=Math.abs(S)<5;s||(s=j?je.restSpeed.granular:je.restSpeed.default),a||(a=j?je.restDelta.granular:je.restDelta.default);let I,L,$,W,G,B;if(E<1)$=La(P,E),W=(_+E*P*S)/$,I=U=>{const ne=Math.exp(-E*P*U);return l-ne*(W*Math.sin($*U)+S*Math.cos($*U))},G=E*P*W+S*$,B=E*P*S-W*$,L=U=>Math.exp(-E*P*U)*(G*Math.sin($*U)+B*Math.cos($*U));else if(E===1){I=ne=>l-Math.exp(-P*ne)*(S+(_+P*S)*ne);const U=_+P*S;L=ne=>Math.exp(-P*ne)*(P*U*ne-_)}else{const U=P*Math.sqrt(E*E-1);I=fe=>{const oe=Math.exp(-E*P*fe),re=Math.min(U*fe,300);return l-oe*((_+E*P*S)*Math.sinh(re)+U*S*Math.cosh(re))/U};const ne=(_+E*P*S)/U,pe=E*P*ne-S*U,ve=E*P*S-ne*U;L=fe=>{const oe=Math.exp(-E*P*fe),re=Math.min(U*fe,300);return oe*(pe*Math.sinh(re)+ve*Math.cosh(re))}}const H={calculatedDuration:k&&y||null,velocity:U=>dt(L(U)),next:U=>{if(!k&&E<1){const pe=Math.exp(-E*P*U),ve=Math.sin($*U),fe=Math.cos($*U),oe=l-pe*(W*ve+S*fe),re=dt(pe*(G*ve+B*fe));return f.done=Math.abs(re)<=s&&Math.abs(l-oe)<=a,f.value=f.done?l:oe,f}const ne=I(U);if(k)f.done=U>=y;else{const pe=dt(L(U));f.done=Math.abs(pe)<=s&&Math.abs(l-ne)<=a}return f.value=f.done?l:ne,f},toString:()=>{const U=Math.min(xl(H),ms),ne=Yd(pe=>H.next(U*pe).value,U,30);return U+"ms "+ne},toTransition:()=>{}};return H}gs.applyToOptions=e=>{const n=z3(e,100,gs);return e.ease=n.ease,e.duration=dt(n.duration),e.type="keyframes",e};const G3=5;function qd(e,n,r){const s=Math.max(n-G3,0);return Ed(r-e(s),n-s)}function Da({keyframes:e,velocity:n=0,power:r=.8,timeConstant:s=325,bounceDamping:a=10,bounceStiffness:u=500,modifyTarget:l,min:f,max:p,restDelta:m=.5,restSpeed:g}){const y=e[0],b={done:!1,value:y},k=B=>f!==void 0&&B<f||p!==void 0&&B>p,_=B=>f===void 0?p:p===void 0||Math.abs(f-B)<Math.abs(p-B)?f:p;let E=r*n;const S=y+E,P=l===void 0?S:l(S);P!==S&&(E=P-y);const j=B=>-E*Math.exp(-B/s),I=B=>P+j(B),L=B=>{const H=j(B),U=I(B);b.done=Math.abs(H)<=m,b.value=b.done?P:U};let $,W;const G=B=>{k(b.value)&&($=B,W=gs({keyframes:[b.value,_(b.value)],velocity:qd(I,B,b.value),damping:a,stiffness:u,restDelta:m,restSpeed:g}))};return G(0),{calculatedDuration:null,next:B=>{let H=!1;return!W&&$===void 0&&(H=!0,L(B),G(B)),$!==void 0&&B>=$?W.next(B-$):(!H&&L(B),b)}}}function K3(e,n,r){const s=[],a=r||xn.mix||Kd,u=e.length-1;for(let l=0;l<u;l++){let f=a(e[l],e[l+1]);if(n){const p=Array.isArray(n)?n[l]||Tt:n;f=Yi(p,f)}s.push(f)}return s}function Xd(e,n,{clamp:r=!0,ease:s,mixer:a}={}){const u=e.length;if(cl(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const l=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const f=K3(n,s,a),p=f.length,m=g=>{if(l&&g<e[0])return n[0];let y=0;if(p>1)for(;y<e.length-2&&!(g<e[y+1]);y++);const b=Ui(e[y],e[y+1],g);return f[y](b)};return r?g=>m(Wt(e[0],e[u-1],g)):m}function Y3(e,n){const r=e[e.length-1];for(let s=1;s<=n;s++){const a=Ui(0,n,s);e.push(Te(r,1,a))}}function q3(e){const n=[0];return Y3(n,e.length-1),n}function X3(e,n){return e.map(r=>r*n)}function Z3(e,n){return e.map(()=>n||Vd).splice(0,e.length-1)}function zi({duration:e=300,keyframes:n,times:r,ease:s="easeInOut"}){const a=o3(s)?s.map(Mf):Mf(s),u={done:!1,value:n[0]},l=X3(r&&r.length===n.length?r:q3(n),e),f=Xd(l,n,{ease:Array.isArray(a)?a:Z3(n,a)});return{calculatedDuration:e,next:p=>(u.value=f(p),u.done=p>=e,u)}}const Q3=e=>e!==null;function ks(e,{repeat:n,repeatType:r="loop"},s,a=1){const u=e.filter(Q3),f=a<0||n&&r!=="loop"&&n%2===1?0:u.length-1;return!f||s===void 0?u[f]:s}const J3={decay:Da,inertia:Da,tween:zi,keyframes:zi,spring:gs};function Zd(e){typeof e.type=="string"&&(e.type=J3[e.type])}class vl{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,r){return this.finished.then(n,r)}}const eb=e=>e/100;class xs extends vl{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==et.now()&&this.tick(et.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Zd(n);const{type:r=zi,repeat:s=0,repeatDelay:a=0,repeatType:u,velocity:l=0}=n;let{keyframes:f}=n;const p=r||zi;p!==zi&&typeof f[0]!="number"&&(this.mixKeyframes=Yi(eb,Kd(f[0],f[1])),f=[0,100]);const m=p({...n,keyframes:f});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...f].reverse(),velocity:-l})),m.calculatedDuration===null&&(m.calculatedDuration=xl(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+a,this.totalDuration=this.resolvedDuration*(s+1)-a,this.generator=m}updateTime(n){const r=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(n,r=!1){const{generator:s,totalDuration:a,mixKeyframes:u,mirroredGenerator:l,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:m=0,keyframes:g,repeat:y,repeatType:b,repeatDelay:k,type:_,onUpdate:E,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-a/this.speed,this.startTime)),r?this.currentTime=n:this.updateTime(n);const P=this.currentTime-m*(this.playbackSpeed>=0?1:-1),j=this.playbackSpeed>=0?P<0:P>a;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let I=this.currentTime,L=s;if(y){const B=Math.min(this.currentTime,a)/f;let H=Math.floor(B),U=B%1;!U&&B>=1&&(U=1),U===1&&H--,H=Math.min(H,y+1),H%2&&(b==="reverse"?(U=1-U,k&&(U-=k/f)):b==="mirror"&&(L=l)),I=Wt(0,1,U)*f}let $;j?(this.delayState.value=g[0],$=this.delayState):$=L.next(I),u&&!j&&($.value=u($.value));let{done:W}=$;!j&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);const G=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return G&&_!==Da&&($.value=ks(g,this.options,S,this.speed)),E&&E($.value),G&&this.finish(),$}then(n,r){return this.finished.then(n,r)}get duration(){return St(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+St(n)}get time(){return St(this.currentTime)}set time(n){n=dt(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const r=this.generator.next(n).value;return qd(s=>this.generator.next(s).value,n,r)}get speed(){return this.playbackSpeed}set speed(n){const r=this.playbackSpeed!==n;r&&this.driver&&this.updateTime(et.now()),this.playbackSpeed=n,r&&this.driver&&(this.time=St(this.currentTime))}play(){if(this.isStopped)return;const{driver:n=O3,startTime:r}=this.options;this.driver||(this.driver=n(a=>this.tick(a))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(et.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),n.observe(this)}}function tb(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const jn=e=>e*180/Math.PI,Fa=e=>{const n=jn(Math.atan2(e[1],e[0]));return Va(n)},nb={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Fa,rotateZ:Fa,skewX:e=>jn(Math.atan(e[1])),skewY:e=>jn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Va=e=>(e=e%360,e<0&&(e+=360),e),If=Fa,Lf=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Df=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ib={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Lf,scaleY:Df,scale:e=>(Lf(e)+Df(e))/2,rotateX:e=>Va(jn(Math.atan2(e[6],e[5]))),rotateY:e=>Va(jn(Math.atan2(-e[2],e[0]))),rotateZ:If,rotate:If,skewX:e=>jn(Math.atan(e[4])),skewY:e=>jn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Oa(e){return e.includes("scale")?1:0}function za(e,n){if(!e||e==="none")return Oa(n);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,a;if(r)s=ib,a=r;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=nb,a=f}if(!a)return Oa(n);const u=s[n],l=a[1].split(",").map(sb);return typeof u=="function"?u(l):l[u]}const rb=(e,n)=>{const{transform:r="none"}=getComputedStyle(e);return za(r,n)};function sb(e){return parseFloat(e.trim())}const li=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ci=new Set([...li,"pathRotation"]),Ff=e=>e===ai||e===X,ob=new Set(["x","y","z"]),ab=li.filter(e=>!ob.has(e));function lb(e){const n=[];return ab.forEach(r=>{const s=e.getValue(r);s!==void 0&&(n.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),n}const mn={width:({x:e},{paddingLeft:n="0",paddingRight:r="0",boxSizing:s})=>{const a=e.max-e.min;return s==="border-box"?a:a-parseFloat(n)-parseFloat(r)},height:({y:e},{paddingTop:n="0",paddingBottom:r="0",boxSizing:s})=>{const a=e.max-e.min;return s==="border-box"?a:a-parseFloat(n)-parseFloat(r)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>za(n,"x"),y:(e,{transform:n})=>za(n,"y")};mn.translateX=mn.x;mn.translateY=mn.y;const In=new Set;let Ba=!1,$a=!1,Wa=!1;function Qd(){if($a){const e=Array.from(In).filter(s=>s.needsMeasurement),n=new Set(e.map(s=>s.element)),r=new Map;n.forEach(s=>{const a=lb(s);a.length&&(r.set(s,a),s.render())}),e.forEach(s=>s.measureInitialState()),n.forEach(s=>{s.render();const a=r.get(s);a&&a.forEach(([u,l])=>{s.getValue(u)?.set(l)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}$a=!1,Ba=!1,In.forEach(e=>e.complete(Wa)),In.clear()}function Jd(){In.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&($a=!0)})}function cb(){Wa=!0,Jd(),Qd(),Wa=!1}class yl{constructor(n,r,s,a,u,l=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=r,this.name=s,this.motionValue=a,this.element=u,this.isAsync=l}scheduleResolve(){this.state="scheduled",this.isAsync?(In.add(this),Ba||(Ba=!0,Ce.read(Jd),Ce.resolveKeyframes(Qd))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:r,element:s,motionValue:a}=this;if(n[0]===null){const u=a?.get(),l=n[n.length-1];if(u!==void 0)n[0]=u;else if(s&&r){const f=s.readValue(r,l);f!=null&&(n[0]=f)}n[0]===void 0&&(n[0]=l),a&&u===void 0&&a.set(n[0])}tb(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),In.delete(this)}cancel(){this.state==="scheduled"&&(In.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ub=e=>e.startsWith("--");function ep(e,n,r){ub(n)?e.style.setProperty(n,r):e.style[n]=r}const fb={};function tp(e,n){const r=Ad(e);return()=>fb[n]??r()}const hb=tp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),np=tp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Di=([e,n,r,s])=>`cubic-bezier(${e}, ${n}, ${r}, ${s})`,Vf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Di([0,.65,.55,1]),circOut:Di([.55,0,1,.45]),backIn:Di([.31,.01,.66,-.59]),backOut:Di([.33,1.53,.69,.99])};function ip(e,n){if(e)return typeof e=="function"?np()?Yd(e,n):"ease-out":Od(e)?Di(e):Array.isArray(e)?e.map(r=>ip(r,n)||Vf.easeOut):Vf[e]}function db(e,n,r,{delay:s=0,duration:a=300,repeat:u=0,repeatType:l="loop",ease:f="easeOut",times:p}={},m=void 0){const g={[n]:r};p&&(g.offset=p);const y=ip(f,a);Array.isArray(y)&&(g.easing=y);const b={delay:s,duration:a,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:l==="reverse"?"alternate":"normal"};return m&&(b.pseudoElement=m),e.animate(g,b)}function rp(e){return typeof e=="function"&&"applyToOptions"in e}function pb({type:e,...n}){return rp(e)&&np()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class sp extends vl{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:r,name:s,keyframes:a,pseudoElement:u,allowFlatten:l=!1,finalKeyframe:f,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=l,this.options=n,cl(typeof n.type!="string");const m=pb(n);this.animation=db(r,s,a,m,u),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=ks(a,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(g),ep(r,s,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const n=this.options?.element;!this.isPseudoElement&&n?.isConnected&&this.animation.commitStyles?.()}get duration(){const n=this.animation.effect?.getComputedTiming?.().duration||0;return St(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+St(n)}get time(){return St(Number(this.animation.currentTime)||0)}set time(n){const r=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=dt(n),r&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:r,rangeEnd:s,observe:a}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,n&&hb()?(this.animation.timeline=n,r&&(this.animation.rangeStart=r),s&&(this.animation.rangeEnd=s),Tt):a(this)}}const op={anticipate:Ld,backInOut:Id,circInOut:Fd};function mb(e){return e in op}function gb(e){typeof e.ease=="string"&&mb(e.ease)&&(e.ease=op[e.ease])}const fa=10;class xb extends sp{constructor(n){gb(n),Zd(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:r,onUpdate:s,onComplete:a,element:u,...l}=this.options;if(!r)return;if(n!==void 0){r.set(n);return}const f=new xs({...l,autoplay:!1}),p=Math.max(fa,et.now()-this.startTime),m=Wt(0,fa,p-fa),g=f.sample(p).value,{name:y}=this.options;u&&y&&ep(u,y,g),r.setWithVelocity(f.sample(Math.max(0,p-m)).value,g,m),f.stop()}}const Of=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Dt.test(e)||e==="0")&&!e.startsWith("url("));function vb(e){const n=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}function yb(e,n,r,s){const a=e[0];if(a===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],l=Of(a,n),f=Of(u,n);return!l||!f?!1:vb(e)||(r==="spring"||rp(r))&&s}function Ua(e){e.duration=0,e.type="keyframes"}const ap=new Set(["opacity","clipPath","filter","transform"]),bb=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function wb(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&bb.test(e[n]))return!0;return!1}const Cb=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Sb=Ad(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Tb(e){const{motionValue:n,name:r,repeatDelay:s,repeatType:a,damping:u,type:l,keyframes:f}=e;if(!(n?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:g}=n.owner.getProps();return Sb()&&r&&(ap.has(r)||Cb.has(r)&&wb(f))&&(r!=="transform"||!g)&&!m&&!s&&a!=="mirror"&&u!==0&&l!=="inertia"}const _b=40;class Mb extends vl{constructor({autoplay:n=!0,delay:r=0,type:s="keyframes",repeat:a=0,repeatDelay:u=0,repeatType:l="loop",keyframes:f,name:p,motionValue:m,element:g,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=et.now();const b={autoplay:n,delay:r,type:s,repeat:a,repeatDelay:u,repeatType:l,name:p,motionValue:m,element:g,...y},k=g?.KeyframeResolver||yl;this.keyframeResolver=new k(f,(_,E,S)=>this.onKeyframesResolved(_,E,b,!S),p,m,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(n,r,s,a){this.keyframeResolver=void 0;const{name:u,type:l,velocity:f,delay:p,isHandoff:m,onUpdate:g}=s;this.resolvedAt=et.now();let y=!0;yb(n,u,l,f)||(y=!1,(xn.instantAnimations||!p)&&g?.(ks(n,s,r)),n[0]=n[n.length-1],Ua(s),s.repeat=0);const k={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>_b?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:n},_=y&&!m&&Tb(k),E=k.motionValue?.owner?.current;let S;if(_)try{S=new xb({...k,element:E})}catch{S=new xs(k)}else S=new xs(k);S.finished.then(()=>{this.notifyFinished()}).catch(Tt),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(n,r){return this.finished.finally(n).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),cb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function lp(e,n,r,s=0,a=1){const u=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(n),l=e.size,f=(l-1)*s;return typeof r=="function"?r(u,l):a===1?u*s:f-u*s}const zf=30,Ab=e=>!isNaN(parseFloat(e)),Bi={current:void 0};class Eb{constructor(n,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const a=et.now();if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=r.owner}setCurrent(n){this.current=n,this.updatedAt=et.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Ab(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,r){this.events[n]||(this.events[n]=new ul);const s=this.events[n].add(r);return n==="change"?()=>{s(),Ce.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,r){this.passiveEffect=n,this.stopPassiveEffect=r}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-s}jump(n,r=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Bi.current&&Bi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=et.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>zf)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,zf);return Ed(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(n){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=n(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fn(e,n){return new Eb(e,n)}function cp(e,n){if(e?.inherit&&n){const{inherit:r,...s}=e;return{...n,...s}}return e}function bl(e,n){const r=e?.[n]??e?.default??e;return r!==e?cp(r,e):r}const kb={type:"spring",stiffness:500,damping:25,restSpeed:10},Pb=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Rb={type:"keyframes",duration:.8},jb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ib=(e,{keyframes:n})=>n.length>2?Rb:ci.has(e)?e.startsWith("scale")?Pb(n[1]):kb:jb,Lb=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Db(e){for(const n in e)if(!Lb.has(n))return!0;return!1}const wl=(e,n,r,s={},a,u)=>l=>{const f=bl(s,e)||{},p=f.delay||s.delay||0;let{elapsed:m=0}=s;m=m-dt(p);const g={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:n.getVelocity(),...f,delay:-m,onUpdate:b=>{n.set(b),f.onUpdate&&f.onUpdate(b)},onComplete:()=>{l(),f.onComplete&&f.onComplete()},name:e,motionValue:n,element:u?void 0:a};Db(f)||Object.assign(g,Ib(e,g)),g.duration&&(g.duration=dt(g.duration)),g.repeatDelay&&(g.repeatDelay=dt(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Ua(g),g.delay===0&&(y=!0)),(xn.instantAnimations||xn.skipAnimations||a?.shouldSkipAnimations||f.skipAnimations)&&(y=!0,Ua(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,y&&!u&&n.get()!==void 0){const b=ks(g.keyframes,f);if(b!==void 0){Ce.update(()=>{g.onUpdate(b),g.onComplete()});return}}return f.isSync?new xs(g):new Mb(g)},Fb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Vb(e){const n=Fb.exec(e);if(!n)return[,];const[,r,s,a]=n;return[`--${r??s}`,a]}function up(e,n,r=1){const[s,a]=Vb(e);if(!s)return;const u=window.getComputedStyle(n).getPropertyValue(s);if(u){const l=u.trim();return Td(l)?parseFloat(l):l}return dl(a)?up(a,n,r+1):a}function Bf(e){const n=[{},{}];return e?.values.forEach((r,s)=>{n[0][s]=r.get(),n[1][s]=r.getVelocity()}),n}function Cl(e,n,r,s){if(typeof n=="function"){const[a,u]=Bf(s);n=n(r!==void 0?r:e.custom,a,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[a,u]=Bf(s);n=n(r!==void 0?r:e.custom,a,u)}return n}function Ln(e,n,r){const s=e.getProps();return Cl(s,n,r!==void 0?r:s.custom,e)}const fp=new Set(["width","height","top","left","right","bottom",...li]),Ha=e=>Array.isArray(e);function Ob(e,n,r){e.hasValue(n)?e.getValue(n).set(r):e.addValue(n,Fn(r))}function zb(e){return Ha(e)?e[e.length-1]||0:e}function Bb(e,n){const r=Ln(e,n);let{transitionEnd:s={},transition:a={},...u}=r||{};u={...u,...s};for(const l in u){const f=zb(u[l]);Ob(e,l,f)}}const Ke=e=>!!(e&&e.getVelocity);function $b(e){return!!(Ke(e)&&e.add)}function Na(e,n){const r=e.getValue("willChange");if($b(r))return r.add(n);if(!r&&xn.WillChange){const s=new xn.WillChange("auto");e.addValue("willChange",s),s.add(n)}}function Sl(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Wb="framerAppearId",hp="data-"+Sl(Wb);function dp(e){return e.props[hp]}function Ub({protectedKeys:e,needsAnimating:n},r){const s=e.hasOwnProperty(r)&&n[r]!==!0;return n[r]=!1,s}function pp(e,n,{delay:r=0,transitionOverride:s,type:a}={}){let{transition:u,transitionEnd:l,...f}=n;const p=e.getDefaultTransition();u=u?cp(u,p):p;const m=u?.reduceMotion,g=u?.skipAnimations;s&&(u=s);const y=[],b=a&&e.animationState&&e.animationState.getState()[a],k=u?.path;k&&k.animateVisualElement(e,f,u,r,y);for(const _ in f){const E=e.getValue(_,e.latestValues[_]??null),S=f[_];if(S===void 0||b&&Ub(b,_))continue;const P={delay:r,...bl(u||{},_)};g&&(P.skipAnimations=!0);const j=E.get();if(j!==void 0&&!E.isAnimating()&&!Array.isArray(S)&&S===j&&!P.velocity){Ce.update(()=>E.set(S));continue}let I=!1;if(window.MotionHandoffAnimation){const W=dp(e);if(W){const G=window.MotionHandoffAnimation(W,_,Ce);G!==null&&(P.startTime=G,I=!0)}}Na(e,_);const L=m??e.shouldReduceMotion;E.start(wl(_,E,S,L&&fp.has(_)?{type:!1}:P,e,I));const $=E.animation;$&&y.push($)}if(l){const _=()=>Ce.update(()=>{l&&Bb(e,l)});y.length?Promise.all(y).then(_):_()}return y}function Ga(e,n,r={}){const s=Ln(e,n,r.type==="exit"?e.presenceContext?.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(a=r.transitionOverride);const u=s?()=>Promise.all(pp(e,s,r)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:y}=a;return Hb(e,n,p,m,g,y,r)}:()=>Promise.resolve(),{when:f}=a;if(f){const[p,m]=f==="beforeChildren"?[u,l]:[l,u];return p().then(()=>m())}else return Promise.all([u(),l(r.delay)])}function Hb(e,n,r=0,s=0,a=0,u=1,l){const f=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),f.push(Ga(p,n,{...l,delay:r+(typeof s=="function"?0:s)+lp(e.variantChildren,p,s,a,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(f)}function Nb(e,n,r={}){e.notify("AnimationStart",n);let s;if(Array.isArray(n)){const a=n.map(u=>Ga(e,u,r));s=Promise.all(a)}else if(typeof n=="string")s=Ga(e,n,r);else{const a=typeof n=="function"?Ln(e,n,r.custom):n;s=Promise.all(pp(e,a,r))}return s.then(()=>{e.notify("AnimationComplete",n)})}const Gb={test:e=>e==="auto",parse:e=>e},mp=e=>n=>n.test(e),gp=[ai,X,$t,Jt,y3,v3,Gb],$f=e=>gp.find(mp(e));function Kb(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Md(e):!0}const Yb=new Set(["brightness","contrast","saturate","opacity"]);function qb(e){const[n,r]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[s]=r.match(pl)||[];if(!s)return e;const a=r.replace(s,"");let u=Yb.has(n)?1:0;return s!==r&&(u*=100),n+"("+u+a+")"}const Xb=/\b([a-z-]*)\(.*?\)/gu,Ka={...Dt,getAnimatableNone:e=>{const n=e.match(Xb);return n?n.map(qb).join(" "):e}},Ya={...Dt,getAnimatableNone:e=>{const n=Dt.parse(e);return Dt.createTransformer(e)(n.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Wf={...ai,transform:Math.round},Zb={rotate:Jt,pathRotation:Jt,rotateX:Jt,rotateY:Jt,rotateZ:Jt,scale:Kr,scaleX:Kr,scaleY:Kr,scaleZ:Kr,skew:Jt,skewX:Jt,skewY:Jt,distance:X,translateX:X,translateY:X,translateZ:X,x:X,y:X,z:X,perspective:X,transformPerspective:X,opacity:Hi,originX:Ef,originY:Ef,originZ:X},vs={borderWidth:X,borderTopWidth:X,borderRightWidth:X,borderBottomWidth:X,borderLeftWidth:X,borderRadius:X,borderTopLeftRadius:X,borderTopRightRadius:X,borderBottomRightRadius:X,borderBottomLeftRadius:X,width:X,maxWidth:X,height:X,maxHeight:X,top:X,right:X,bottom:X,left:X,inset:X,insetBlock:X,insetBlockStart:X,insetBlockEnd:X,insetInline:X,insetInlineStart:X,insetInlineEnd:X,padding:X,paddingTop:X,paddingRight:X,paddingBottom:X,paddingLeft:X,paddingBlock:X,paddingBlockStart:X,paddingBlockEnd:X,paddingInline:X,paddingInlineStart:X,paddingInlineEnd:X,margin:X,marginTop:X,marginRight:X,marginBottom:X,marginLeft:X,marginBlock:X,marginBlockStart:X,marginBlockEnd:X,marginInline:X,marginInlineStart:X,marginInlineEnd:X,fontSize:X,backgroundPositionX:X,backgroundPositionY:X,...Zb,zIndex:Wf,fillOpacity:Hi,strokeOpacity:Hi,numOctaves:Wf},Qb={...vs,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Ka,WebkitFilter:Ka,mask:Ya,WebkitMask:Ya},xp=e=>Qb[e],Jb=new Set([Ka,Ya]);function vp(e,n){let r=xp(e);return Jb.has(r)||(r=Dt),r.getAnimatableNone?r.getAnimatableNone(n):void 0}const e4=new Set(["auto","none","0"]);function t4(e,n,r){let s=0,a;for(;s<e.length&&!a;){const u=e[s];typeof u=="string"&&!e4.has(u)&&si(u).values.length&&(a=e[s]),s++}if(a&&r)for(const u of n)e[u]=vp(r,a)}class n4 extends yl{constructor(n,r,s,a,u){super(n,r,s,a,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let y=n[g];if(typeof y=="string"&&(y=y.trim(),dl(y))){const b=up(y,r.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!fp.has(s)||n.length!==2)return;const[a,u]=n,l=$f(a),f=$f(u),p=Af(a),m=Af(u);if(p!==m&&mn[s]){this.needsMeasurement=!0;return}if(l!==f)if(Ff(l)&&Ff(f))for(let g=0;g<n.length;g++){const y=n[g];typeof y=="string"&&(n[g]=parseFloat(y))}else mn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:r}=this,s=[];for(let a=0;a<n.length;a++)(n[a]===null||Kb(n[a]))&&s.push(a);s.length&&t4(n,s,r)}measureInitialState(){const{element:n,unresolvedKeyframes:r,name:s}=this;if(!n||!n.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=mn[s](n.measureViewportBox(),window.getComputedStyle(n.current)),r[0]=this.measuredOrigin;const a=r[r.length-1];a!==void 0&&n.getValue(s,a).jump(a,!1)}measureEndState(){const{element:n,name:r,unresolvedKeyframes:s}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const u=s.length-1,l=s[u];s[u]=mn[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,p])=>{n.getValue(f).set(p)}),this.resolveNoneKeyframes()}}const Tl=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function yp(e,n,r){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let s=document;const a=r?.[e]??s.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e).filter(s=>s!=null)}const qa=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function rs(e){return _d(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:_l}=zd(queueMicrotask,!1),Lt={x:!1,y:!1};function bp(){return Lt.x||Lt.y}function i4(e){return e==="x"||e==="y"?Lt[e]?null:(Lt[e]=!0,()=>{Lt[e]=!1}):Lt.x||Lt.y?null:(Lt.x=Lt.y=!0,()=>{Lt.x=Lt.y=!1})}function wp(e,n){const r=yp(e),s=new AbortController,a={passive:!0,...n,signal:s.signal};return[r,a,()=>s.abort()]}function r4(e){return!(e.pointerType==="touch"||bp())}function s4(e,n,r={}){const[s,a,u]=wp(e,r);return s.forEach(l=>{let f=!1,p=!1,m;const g=()=>{l.removeEventListener("pointerleave",_)},y=S=>{m&&(m(S),m=void 0),g()},b=S=>{f=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,y(S))},k=()=>{f=!0,window.addEventListener("pointerup",b,a),window.addEventListener("pointercancel",b,a)},_=S=>{if(S.pointerType!=="touch"){if(f){p=!0;return}y(S)}},E=S=>{if(!r4(S))return;p=!1;const P=n(l,S);typeof P=="function"&&(m=P,l.addEventListener("pointerleave",_,a))};l.addEventListener("pointerenter",E,a),l.addEventListener("pointerdown",k,a)}),u}const Cp=(e,n)=>n?e===n?!0:Cp(e,n.parentElement):!1,Ml=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,o4=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function a4(e){return o4.has(e.tagName)||e.isContentEditable===!0}const l4=new Set(["INPUT","SELECT","TEXTAREA"]);function c4(e){return l4.has(e.tagName)||e.isContentEditable===!0}const ss=new WeakSet;function Uf(e){return n=>{n.key==="Enter"&&e(n)}}function ha(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const u4=(e,n)=>{const r=e.currentTarget;if(!r)return;const s=Uf(()=>{if(ss.has(r))return;ha(r,"down");const a=Uf(()=>{ha(r,"up")}),u=()=>ha(r,"cancel");r.addEventListener("keyup",a,n),r.addEventListener("blur",u,n)});r.addEventListener("keydown",s,n),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),n)};function Hf(e){return Ml(e)&&!bp()}const Nf=new WeakSet;function f4(e,n,r={}){const[s,a,u]=wp(e,r),l=f=>{const p=f.currentTarget;if(!Hf(f)||Nf.has(f))return;ss.add(p),r.stopPropagation&&Nf.add(f);const m=n(p,f),g={...a,capture:!0},y=(_,E)=>{window.removeEventListener("pointerup",b,g),window.removeEventListener("pointercancel",k,g),ss.has(p)&&ss.delete(p),Hf(_)&&typeof m=="function"&&m(_,{success:E})},b=_=>{y(_,p===window||p===document||r.useGlobalTarget||Cp(p,_.target))},k=_=>{y(_,!1)};window.addEventListener("pointerup",b,g),window.addEventListener("pointercancel",k,g)};return s.forEach(f=>{(r.useGlobalTarget?window:f).addEventListener("pointerdown",l,a),rs(f)&&(f.addEventListener("focus",m=>u4(m,a)),!a4(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),u}function Al(e){return _d(e)&&"ownerSVGElement"in e}const os=new WeakMap;let as;const Sp=(e,n,r)=>(s,a)=>a&&a[0]?a[0][e+"Size"]:Al(s)&&"getBBox"in s?s.getBBox()[n]:s[r],h4=Sp("inline","width","offsetWidth"),d4=Sp("block","height","offsetHeight");function p4({target:e,borderBoxSize:n}){os.get(e)?.forEach(r=>{r(e,{get width(){return h4(e,n)},get height(){return d4(e,n)}})})}function m4(e){e.forEach(p4)}function g4(){typeof ResizeObserver>"u"||(as=new ResizeObserver(m4))}function x4(e,n){as||g4();const r=yp(e);return r.forEach(s=>{let a=os.get(s);a||(a=new Set,os.set(s,a)),a.add(n),as?.observe(s)}),()=>{r.forEach(s=>{const a=os.get(s);a?.delete(n),a?.size||as?.unobserve(s)})}}const ls=new Set;let ni;function v4(){ni=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ls.forEach(n=>n(e))},window.addEventListener("resize",ni)}function y4(e){return ls.add(e),ni||v4(),()=>{ls.delete(e),!ls.size&&typeof ni=="function"&&(window.removeEventListener("resize",ni),ni=void 0)}}function Gf(e,n){return typeof e=="function"?y4(e):x4(e,n)}function b4(e){return Al(e)&&e.tagName==="svg"}function w4(...e){const n=!Array.isArray(e[0]),r=n?0:-1,s=e[0+r],a=e[1+r],u=e[2+r],l=e[3+r],f=Xd(a,u,l);return n?f(s):f}const C4=[...gp,Fe,Dt],S4=e=>C4.find(mp(e)),Kf=()=>({translate:0,scale:1,origin:0,originPoint:0}),ii=()=>({x:Kf(),y:Kf()}),Yf=()=>({min:0,max:0}),ze=()=>({x:Yf(),y:Yf()}),T4=new WeakMap;function Ps(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Ni(e){return typeof e=="string"||Array.isArray(e)}const El=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],kl=["initial",...El];function Rs(e){return Ps(e.animate)||kl.some(n=>Ni(e[n]))}function Tp(e){return!!(Rs(e)||e.variants)}function _4(e,n,r){for(const s in n){const a=n[s],u=r[s];if(Ke(a))e.addValue(s,a);else if(Ke(u))e.addValue(s,Fn(a,{owner:e}));else if(u!==a)if(e.hasValue(s)){const l=e.getValue(s);l.liveStyle===!0?l.jump(a):l.hasAnimated||l.set(a)}else{const l=e.getStaticValue(s);e.addValue(s,Fn(l!==void 0?l:a,{owner:e}))}}for(const s in r)n[s]===void 0&&e.removeValue(s);return n}const Xa={current:null},_p={current:!1},M4=typeof window<"u";function A4(){if(_p.current=!0,!!M4)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Xa.current=e.matches;e.addEventListener("change",n),n()}else Xa.current=!1}const qf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ys={};function Mp(e){ys=e}function E4(){return ys}class k4{scrapeMotionValuesFromProps(n,r,s){return{}}constructor({parent:n,props:r,presenceContext:s,reducedMotionConfig:a,skipAnimations:u,blockInitialAnimation:l,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=yl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const k=et.now();this.renderScheduledAt<k&&(this.renderScheduledAt=k,Ce.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=g,this.parent=n,this.props=r,this.presenceContext=s,this.depth=n?n.depth+1:0,this.reducedMotionConfig=a,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!l,this.isControllingVariants=Rs(r),this.isVariantNode=Tp(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(r,{},this);for(const k in b){const _=b[k];m[k]!==void 0&&Ke(_)&&_.set(m[k])}}mount(n){if(this.hasBeenMounted)for(const r in this.initialValues)this.values.get(r)?.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=n,T4.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_p.current||A4(),this.shouldReduceMotion=Xa.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),en(this.notifyUpdate),en(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,r){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),r.accelerate&&ap.has(n)&&this.current instanceof HTMLElement){const{factory:l,keyframes:f,times:p,ease:m,duration:g}=r.accelerate,y=new sp({element:this.current,name:n,keyframes:f,times:p,ease:m,duration:dt(g)}),b=l(y);this.valueSubscriptions.set(n,()=>{b(),y.cancel()});return}const s=ci.has(n);s&&this.onBindTransform&&this.onBindTransform();const a=r.on("change",l=>{this.latestValues[n]=l,this.props.onUpdate&&Ce.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,r)),this.valueSubscriptions.set(n,()=>{a(),u&&u()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in ys){const r=ys[n];if(!r)continue;const{isEnabled:s,Feature:a}=r;if(!this.features[n]&&a&&s(this.props)&&(this.features[n]=new a(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,r){this.latestValues[n]=r}update(n,r){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<qf.length;s++){const a=qf[s];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const u="on"+a,l=n[u];l&&(this.propEventSubscriptions[a]=this.on(a,l))}this.prevMotionValues=_4(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(n),()=>r.variantChildren.delete(n)}addValue(n,r){const s=this.values.get(n);r!==s&&(s&&this.removeValue(n),this.bindToMotionValue(n,r),this.values.set(n,r),this.latestValues[n]=r.get())}removeValue(n){this.values.delete(n);const r=this.valueSubscriptions.get(n);r&&(r(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,r){if(this.props.values&&this.props.values[n])return this.props.values[n];let s=this.values.get(n);return s===void 0&&r!==void 0&&(s=Fn(r===null?void 0:r,{owner:this}),this.addValue(n,s)),s}readValue(n,r){let s=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return s!=null&&(typeof s=="string"&&(Td(s)||Md(s))?s=parseFloat(s):!S4(s)&&Dt.test(r)&&(s=vp(n,r)),this.setBaseTarget(n,Ke(s)?s.get():s)),Ke(s)?s.get():s}setBaseTarget(n,r){this.baseTarget[n]=r}getBaseTarget(n){const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const u=Cl(this.props,r,this.presenceContext?.custom);u&&(s=u[n])}if(r&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,n);return a!==void 0&&!Ke(a)?a:this.initialValues[n]!==void 0&&s===void 0?void 0:this.baseTarget[n]}on(n,r){return this.events[n]||(this.events[n]=new ul),this.events[n].add(r)}notify(n,...r){this.events[n]&&this.events[n].notify(...r)}scheduleRenderMicrotask(){_l.render(this.render)}}class Ap extends k4{constructor(){super(...arguments),this.KeyframeResolver=n4}sortInstanceNodePosition(n,r){return n.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(n,r){const s=n.style;return s?s[r]:void 0}removeValueFromRenderState(n,{vars:r,style:s}){delete r[n],delete s[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Ke(n)&&(this.childSubscription=n.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class vn{constructor(n){this.isMounted=!1,this.node=n}update(){}}function Ep({top:e,left:n,right:r,bottom:s}){return{x:{min:n,max:r},y:{min:e,max:s}}}function P4({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function R4(e,n){if(!n)return e;const r=n({x:e.left,y:e.top}),s=n({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function da(e){return e===void 0||e===1}function Za({scale:e,scaleX:n,scaleY:r}){return!da(e)||!da(n)||!da(r)}function kn(e){return Za(e)||kp(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function kp(e){return Xf(e.x)||Xf(e.y)}function Xf(e){return e&&e!=="0%"}function bs(e,n,r){const s=e-r,a=n*s;return r+a}function Zf(e,n,r,s,a){return a!==void 0&&(e=bs(e,a,s)),bs(e,r,s)+n}function Qa(e,n=0,r=1,s,a){e.min=Zf(e.min,n,r,s,a),e.max=Zf(e.max,n,r,s,a)}function Pp(e,{x:n,y:r}){Qa(e.x,n.translate,n.scale,n.originPoint),Qa(e.y,r.translate,r.scale,r.originPoint)}const Qf=.999999999999,Jf=1.0000000000001;function j4(e,n,r,s=!1){const a=r.length;if(!a)return;n.x=n.y=1;let u,l;for(let f=0;f<a;f++){u=r[f],l=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Bt(e.x,-u.scroll.offset.x),Bt(e.y,-u.scroll.offset.y)),l&&(n.x*=l.x.scale,n.y*=l.y.scale,Pp(e,l)),s&&kn(u.latestValues)&&cs(e,u.latestValues,u.layout?.layoutBox))}n.x<Jf&&n.x>Qf&&(n.x=1),n.y<Jf&&n.y>Qf&&(n.y=1)}function Bt(e,n){e.min+=n,e.max+=n}function eh(e,n,r,s,a=.5){const u=Te(e.min,e.max,a);Qa(e,n,r,u,s)}function th(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function cs(e,n,r){const s=r??e;eh(e.x,th(n.x,s.x),n.scaleX,n.scale,n.originX),eh(e.y,th(n.y,s.y),n.scaleY,n.scale,n.originY)}function Rp(e,n){return Ep(R4(e.getBoundingClientRect(),n))}function I4(e,n,r){const s=Rp(e,r),{scroll:a}=n;return a&&(Bt(s.x,a.offset.x),Bt(s.y,a.offset.y)),s}const L4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},D4=li.length;function F4(e,n,r){let s="",a=!0;for(let l=0;l<D4;l++){const f=li[l],p=e[f];if(p===void 0)continue;let m=!0;if(typeof p=="number")m=p===(f.startsWith("scale")?1:0);else{const g=parseFloat(p);m=f.startsWith("scale")?g===1:g===0}if(!m||r){const g=qa(p,vs[f]);if(!m){a=!1;const y=L4[f]||f;s+=`${y}(${g}) `}r&&(n[f]=g)}}const u=e.pathRotation;return u&&(a=!1,s+=`rotate(${qa(u,vs.pathRotation)}) `),s=s.trim(),r?s=r(n,a?"":s):a&&(s="none"),s}function Pl(e,n,r){const{style:s,vars:a,transformOrigin:u}=e;let l=!1,f=!1;for(const p in n){const m=n[p];if(ci.has(p)){l=!0;continue}else if($d(p)){a[p]=m;continue}else{const g=qa(m,vs[p]);p.startsWith("origin")?(f=!0,u[p]=g):s[p]=g}}if(n.transform||(l||r?s.transform=F4(n,e.transform,r):s.transform&&(s.transform="none")),f){const{originX:p="50%",originY:m="50%",originZ:g=0}=u;s.transformOrigin=`${p} ${m} ${g}`}}function jp(e,{style:n,vars:r},s,a){const u=e.style;let l;for(l in n)u[l]=n[l];a?.applyProjectionStyles(u,s);for(l in r)u.setProperty(l,r[l])}function nh(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const ji={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(X.test(e))e=parseFloat(e);else return e;const r=nh(e,n.target.x),s=nh(e,n.target.y);return`${r}% ${s}%`}},V4={correct:(e,{treeScale:n,projectionDelta:r})=>{const s=e,a=Dt.parse(e);if(a.length>5)return s;const u=Dt.createTransformer(e),l=typeof a[0]!="number"?1:0,f=r.x.scale*n.x,p=r.y.scale*n.y;a[0+l]/=f,a[1+l]/=p;const m=Te(f,p,.5);return typeof a[2+l]=="number"&&(a[2+l]/=m),typeof a[3+l]=="number"&&(a[3+l]/=m),u(a)}},Ja={borderRadius:{...ji,applyTo:[...Tl]},borderTopLeftRadius:ji,borderTopRightRadius:ji,borderBottomLeftRadius:ji,borderBottomRightRadius:ji,boxShadow:V4};function Ip(e,{layout:n,layoutId:r}){return ci.has(e)||e.startsWith("origin")||(n||r!==void 0)&&(!!Ja[e]||e==="opacity")}function Rl(e,n,r){const s=e.style,a=n?.style,u={};if(!s)return u;for(const l in s)(Ke(s[l])||a&&Ke(a[l])||Ip(l,e)||r?.getValue(l)?.liveStyle!==void 0)&&(u[l]=s[l]);return u}function O4(e){return window.getComputedStyle(e)}class z4 extends Ap{constructor(){super(...arguments),this.type="html",this.renderInstance=jp}readValueFromInstance(n,r){if(ci.has(r))return this.projection?.isProjecting?Oa(r):rb(n,r);{const s=O4(n),a=($d(r)?s.getPropertyValue(r):s[r])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(n,{transformPagePoint:r}){return Rp(n,r)}build(n,r,s){Pl(n,r,s.transformTemplate)}scrapeMotionValuesFromProps(n,r,s){return Rl(n,r,s)}}const B4={offset:"stroke-dashoffset",array:"stroke-dasharray"},$4={offset:"strokeDashoffset",array:"strokeDasharray"};function W4(e,n,r=1,s=0,a=!0){e.pathLength=1;const u=a?B4:$4;e[u.offset]=`${-s}`,e[u.array]=`${n} ${r}`}const U4=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Lp(e,{attrX:n,attrY:r,attrScale:s,pathLength:a,pathSpacing:u=1,pathOffset:l=0,...f},p,m,g){if(Pl(e,f,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:b}=e;y.transform&&(b.transform=y.transform,delete y.transform),(b.transform||y.transformOrigin)&&(b.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),b.transform&&(b.transformBox=g?.transformBox??"fill-box",delete y.transformBox);for(const k of U4)y[k]!==void 0&&(b[k]=y[k],delete y[k]);n!==void 0&&(y.x=n),r!==void 0&&(y.y=r),s!==void 0&&(y.scale=s),a!==void 0&&W4(y,a,u,l,!1)}const Dp=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Fp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function H4(e,n,r,s){jp(e,n,void 0,s);for(const a in n.attrs)e.setAttribute(Dp.has(a)?a:Sl(a),n.attrs[a])}function Vp(e,n,r){const s=Rl(e,n,r);for(const a in e)if(Ke(e[a])||Ke(n[a])){const u=li.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;s[u]=e[a]}return s}class N4 extends Ap{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(n,r){return n[r]}readValueFromInstance(n,r){if(ci.has(r)){const s=xp(r);return s&&s.default||0}return r=Dp.has(r)?r:Sl(r),n.getAttribute(r)}scrapeMotionValuesFromProps(n,r,s){return Vp(n,r,s)}build(n,r,s){Lp(n,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(n,r,s,a){H4(n,r,s,a)}mount(n){this.isSVGTag=Fp(n.tagName),super.mount(n)}}const G4=kl.length;function Op(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?Op(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const n={};for(let r=0;r<G4;r++){const s=kl[r],a=e.props[s];(Ni(a)||a===!1)&&(n[s]=a)}return n}function zp(e,n){if(!Array.isArray(n))return!1;const r=n.length;if(r!==e.length)return!1;for(let s=0;s<r;s++)if(n[s]!==e[s])return!1;return!0}const K4=[...El].reverse(),Y4=El.length;function q4(e){return n=>Promise.all(n.map(({animation:r,options:s})=>Nb(e,r,s)))}function X4(e){let n=q4(e),r=ih(),s=!0,a=!1;const u=m=>(g,y)=>{const b=Ln(e,y,m==="exit"?e.presenceContext?.custom:void 0);if(b){const{transition:k,transitionEnd:_,...E}=b;g={...g,...E,..._}}return g};function l(m){n=m(e)}function f(m){const{props:g}=e,y=Op(e.parent)||{},b=[],k=new Set;let _={},E=1/0;for(let P=0;P<Y4;P++){const j=K4[P],I=r[j],L=g[j]!==void 0?g[j]:y[j],$=Ni(L),W=j===m?I.isActive:null;W===!1&&(E=P);let G=L===y[j]&&L!==g[j]&&$;if(G&&(s||a)&&e.manuallyAnimateOnMount&&(G=!1),I.protectedKeys={..._},!I.isActive&&W===null||!L&&!I.prevProp||Ps(L)||typeof L=="boolean")continue;if(j==="exit"&&I.isActive&&W!==!0){I.prevResolvedValues&&(_={..._,...I.prevResolvedValues});continue}const B=Z4(I.prevProp,L);let H=B||j===m&&I.isActive&&!G&&$||P>E&&$,U=!1;const ne=Array.isArray(L)?L:[L];let pe=ne.reduce(u(j),{});W===!1&&(pe={});const{prevResolvedValues:ve={}}=I,fe={...ve,...pe},oe=q=>{H=!0,k.has(q)&&(U=!0,k.delete(q)),I.needsAnimating[q]=!0;const me=e.getValue(q);me&&(me.liveStyle=!1)};for(const q in fe){const me=pe[q],De=ve[q];if(_.hasOwnProperty(q))continue;let N=!1;Ha(me)&&Ha(De)?N=!zp(me,De)||B:N=me!==De,N?me!=null?oe(q):k.add(q):me!==void 0&&k.has(q)?oe(q):I.protectedKeys[q]=!0}I.prevProp=L,I.prevResolvedValues=pe,I.isActive&&(_={..._,...pe}),(s||a)&&e.blockInitialAnimation&&(H=!1);const re=G&&B;H&&(!re||U)&&b.push(...ne.map(q=>{const me={type:j};if(typeof q=="string"&&(s||a)&&!re&&e.manuallyAnimateOnMount&&e.parent){const{parent:De}=e,N=Ln(De,q);if(De.enteringChildren&&N){const{delayChildren:te}=N.transition||{};me.delay=lp(De.enteringChildren,e,te)}}return{animation:q,options:me}}))}if(k.size){const P={};if(typeof g.initial!="boolean"){const j=Ln(e,Array.isArray(g.initial)?g.initial[0]:g.initial);j&&j.transition&&(P.transition=j.transition)}k.forEach(j=>{const I=e.getBaseTarget(j),L=e.getValue(j);L&&(L.liveStyle=!0),P[j]=I??null}),b.push({animation:P})}let S=!!b.length;return s&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(S=!1),s=!1,a=!1,S?n(b):Promise.resolve()}function p(m,g){if(r[m].isActive===g)return Promise.resolve();e.variantChildren?.forEach(b=>b.animationState?.setActive(m,g)),r[m].isActive=g;const y=f(m);for(const b in r)r[b].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:l,getState:()=>r,reset:()=>{r=ih(),a=!0}}}function Z4(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!zp(n,e):!1}function En(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ih(){return{animate:En(!0),whileInView:En(),whileHover:En(),whileTap:En(),whileDrag:En(),whileFocus:En(),exit:En()}}function el(e,n){e.min=n.min,e.max=n.max}function It(e,n){el(e.x,n.x),el(e.y,n.y)}function rh(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const Bp=1e-4,Q4=1-Bp,J4=1+Bp,$p=.01,ew=0-$p,tw=0+$p;function tt(e){return e.max-e.min}function nw(e,n,r){return Math.abs(e-n)<=r}function sh(e,n,r,s=.5){e.origin=s,e.originPoint=Te(n.min,n.max,e.origin),e.scale=tt(r)/tt(n),e.translate=Te(r.min,r.max,e.origin)-e.originPoint,(e.scale>=Q4&&e.scale<=J4||isNaN(e.scale))&&(e.scale=1),(e.translate>=ew&&e.translate<=tw||isNaN(e.translate))&&(e.translate=0)}function $i(e,n,r,s){sh(e.x,n.x,r.x,s?s.originX:void 0),sh(e.y,n.y,r.y,s?s.originY:void 0)}function oh(e,n,r,s=0){const a=s?Te(r.min,r.max,s):r.min;e.min=a+n.min,e.max=e.min+tt(n)}function iw(e,n,r,s){oh(e.x,n.x,r.x,s?.x),oh(e.y,n.y,r.y,s?.y)}function ah(e,n,r,s=0){const a=s?Te(r.min,r.max,s):r.min;e.min=n.min-a,e.max=e.min+tt(n)}function ws(e,n,r,s){ah(e.x,n.x,r.x,s?.x),ah(e.y,n.y,r.y,s?.y)}function lh(e,n,r,s,a){return e-=n,e=bs(e,1/r,s),a!==void 0&&(e=bs(e,1/a,s)),e}function rw(e,n=0,r=1,s=.5,a,u=e,l=e){if($t.test(n)&&(n=parseFloat(n),n=Te(l.min,l.max,n/100)-l.min),typeof n!="number")return;let f=Te(u.min,u.max,s);e===u&&(f-=n),e.min=lh(e.min,n,r,f,a),e.max=lh(e.max,n,r,f,a)}function ch(e,n,[r,s,a],u,l){rw(e,n[r],n[s],n[a],n.scale,u,l)}const sw=["x","scaleX","originX"],ow=["y","scaleY","originY"];function uh(e,n,r,s){ch(e.x,n,sw,r?r.x:void 0,s?s.x:void 0),ch(e.y,n,ow,r?r.y:void 0,s?s.y:void 0)}function fh(e){return e.translate===0&&e.scale===1}function Wp(e){return fh(e.x)&&fh(e.y)}function hh(e,n){return e.min===n.min&&e.max===n.max}function aw(e,n){return hh(e.x,n.x)&&hh(e.y,n.y)}function dh(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Up(e,n){return dh(e.x,n.x)&&dh(e.y,n.y)}function ph(e){return tt(e.x)/tt(e.y)}function mh(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function zt(e){return[e("x"),e("y")]}function lw(e,n,r){let s="";const a=e.x.translate/n.x,u=e.y.translate/n.y,l=r?.z||0;if((a||u||l)&&(s=`translate3d(${a}px, ${u}px, ${l}px) `),(n.x!==1||n.y!==1)&&(s+=`scale(${1/n.x}, ${1/n.y}) `),r){const{transformPerspective:m,rotate:g,pathRotation:y,rotateX:b,rotateY:k,skewX:_,skewY:E}=r;m&&(s=`perspective(${m}px) ${s}`),g&&(s+=`rotate(${g}deg) `),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),k&&(s+=`rotateY(${k}deg) `),_&&(s+=`skewX(${_}deg) `),E&&(s+=`skewY(${E}deg) `)}const f=e.x.scale*n.x,p=e.y.scale*n.y;return(f!==1||p!==1)&&(s+=`scale(${f}, ${p})`),s||"none"}const cw=Tl.length,gh=e=>typeof e=="string"?parseFloat(e):e,xh=e=>typeof e=="number"||X.test(e);function uw(e,n,r,s,a,u){a?(e.opacity=Te(0,r.opacity??1,fw(s)),e.opacityExit=Te(n.opacity??1,0,hw(s))):u&&(e.opacity=Te(n.opacity??1,r.opacity??1,s));for(let l=0;l<cw;l++){const f=Tl[l];let p=vh(n,f),m=vh(r,f);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||xh(p)===xh(m)?(e[f]=Math.max(Te(gh(p),gh(m),s),0),($t.test(m)||$t.test(p))&&(e[f]+="%")):e[f]=m}(n.rotate||r.rotate)&&(e.rotate=Te(n.rotate||0,r.rotate||0,s))}function vh(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const fw=Hp(0,.5,Dd),hw=Hp(.5,.95,Tt);function Hp(e,n,r){return s=>s<e?0:s>n?1:r(Ui(e,n,s))}function dw(e,n,r){const s=Ke(e)?e:Fn(e);return s.start(wl("",s,n,r)),s.animation}function Gi(e,n,r,s={passive:!0}){return e.addEventListener(n,r,s),()=>e.removeEventListener(n,r,s)}const pw=(e,n)=>e.depth-n.depth;class mw{constructor(){this.children=[],this.isDirty=!1}add(n){ll(this.children,n),this.isDirty=!0}remove(n){ds(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(pw),this.isDirty=!1,this.children.forEach(n)}}function gw(e,n){const r=et.now(),s=({timestamp:a})=>{const u=a-r;u>=n&&(en(s),e(u-n))};return Ce.setup(s,!0),()=>en(s)}function us(e){return Ke(e)?e.get():e}class xw{constructor(){this.members=[]}add(n){ll(this.members,n);for(let r=this.members.length-1;r>=0;r--){const s=this.members[r];if(s===n||s===this.lead||s===this.prevLead)continue;const a=s.instance;(!a||a.isConnected===!1)&&!s.snapshot&&(ds(this.members,s),s.unmount())}n.scheduleRender()}remove(n){if(ds(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(n){for(let r=this.members.indexOf(n)-1;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1&&s.instance?.isConnected!==!1)return this.promote(s),!0}return!1}promote(n,r){const s=this.lead;if(n!==s&&(this.prevLead=s,this.lead=n,n.show(),s)){s.updateSnapshot(),n.scheduleRender();const{layoutDependency:a}=s.options,{layoutDependency:u}=n.options;(a===void 0||a!==u)&&(n.resumeFrom=s,r&&(s.preserveOpacity=!0),s.snapshot&&(n.snapshot=s.snapshot,n.snapshot.latestValues=s.animationValues||s.latestValues),n.root?.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(n=>{n.options.onExitComplete?.(),n.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const fs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},pa=["","X","Y","Z"],vw=1e3;let yw=0;function ma(e,n,r,s){const{latestValues:a}=n;a[e]&&(r[e]=a[e],n.setStaticValue(e,0),s&&(s[e]=0))}function Np(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const r=dp(n);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:a,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",Ce,!(a||u))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&Np(s)}function Gp({attachResizeListener:e,defaultParent:n,measureScroll:r,checkIsScrollRoot:s,resetTransform:a}){return class{constructor(l={},f=n?.()){this.id=yw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Cw),this.nodes.forEach(Ew),this.nodes.forEach(kw),this.nodes.forEach(Sw)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new mw)}addEventListener(l,f){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new ul),this.eventHandlers.get(l).add(f)}notifyListeners(l,...f){const p=this.eventHandlers.get(l);p&&p.notify(...f)}hasListeners(l){return this.eventHandlers.has(l)}mount(l){if(this.instance)return;this.isSVG=Al(l)&&!b4(l),this.instance=l;const{layoutId:f,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),e){let g,y=0;const b=()=>this.root.updateBlockedByResize=!1;Ce.read(()=>{y=window.innerWidth}),e(l,()=>{const k=window.innerWidth;k!==y&&(y=k,this.root.updateBlockedByResize=!0,g&&g(),g=gw(b,250),fs.hasAnimatedSinceResize&&(fs.hasAnimatedSinceResize=!1,this.nodes.forEach(wh)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&m&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:b,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||m.getDefaultTransition()||Lw,{onLayoutAnimationStart:E,onLayoutAnimationComplete:S}=m.getProps(),P=!this.targetLayout||!Up(this.targetLayout,k),j=!y&&b;if(this.options.layoutRoot||this.resumeFrom||j||y&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...bl(_,"layout"),onPlay:E,onComplete:S};(m.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(g,j,I.path)}else y||wh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),en(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Pw),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Np(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,(typeof y.latestValues.x=="string"||typeof y.latestValues.y=="string")&&(y.isLayoutDirty=!0),y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(_w),this.nodes.forEach(yh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(bh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Mw),this.nodes.forEach(Aw),this.nodes.forEach(bw),this.nodes.forEach(ww)):this.nodes.forEach(bh),this.clearAllSnapshots();const f=et.now();Ge.delta=Wt(0,1e3/60,f-Ge.timestamp),Ge.timestamp=f,Ge.isProcessing=!0,oa.update.process(Ge),oa.preRender.process(Ge),oa.render.process(Ge),Ge.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_l.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Tw),this.sharedNodes.forEach(Rw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!tt(this.snapshot.measuredBox.x)&&!tt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ze()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(f=!1),f&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!a)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!Wp(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;l&&this.instance&&(f||kn(this.latestValues)||g)&&(a(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return l&&(p=this.removeTransform(p)),Dw(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:l}=this.options;if(!l)return ze();const f=l.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Fw))){const{scroll:m}=this.root;m&&(Bt(f.x,m.offset.x),Bt(f.y,m.offset.y))}return f}removeElementScroll(l){const f=ze();if(It(f,l),this.scroll?.wasRoot)return f;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:g,options:y}=m;m!==this.root&&g&&y.layoutScroll&&(g.wasRoot&&It(f,l),Bt(f.x,g.offset.x),Bt(f.y,g.offset.y))}return f}applyTransform(l,f=!1,p){const m=p||ze();It(m,l);for(let g=0;g<this.path.length;g++){const y=this.path[g];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(Bt(m.x,-y.scroll.offset.x),Bt(m.y,-y.scroll.offset.y)),kn(y.latestValues)&&cs(m,y.latestValues,y.layout?.layoutBox)}return kn(this.latestValues)&&cs(m,this.latestValues,this.layout?.layoutBox),m}removeTransform(l){const f=ze();It(f,l);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!kn(m.latestValues))continue;let g;m.instance&&(Za(m.latestValues)&&m.updateSnapshot(),g=ze(),It(g,m.measurePageBox())),uh(f,m.latestValues,m.snapshot?.layoutBox,g)}return kn(this.latestValues)&&uh(f,this.latestValues),f}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ge.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(l||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!this.layout||!(g||y))return;this.resolvedRelativeTargetAt=Ge.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):It(this.target,this.layout.layoutBox),Pp(this.target,this.targetDelta)):It(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Za(this.parent.latestValues)||kp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(l,f,p){this.relativeParent=l,this.linkedParentVersion=l.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),ws(this.relativeTargetOrigin,f,p,this.options.layoutAnchor||void 0),It(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const l=this.getLead(),f=!!this.resumingFrom||this!==l;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ge.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;It(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,b=this.treeScale.y;j4(this.layoutCorrected,this.treeScale,this.path,f),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=ze());const{target:k}=l;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rh(this.prevProjectionDelta.x,this.projectionDelta.x),rh(this.prevProjectionDelta.y,this.projectionDelta.y)),$i(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==b||!mh(this.projectionDelta.x,this.prevProjectionDelta.x)||!mh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){if(this.options.visualElement?.scheduleRender(),l){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ii(),this.projectionDelta=ii(),this.projectionDeltaWithTransform=ii()}setAnimationOrigin(l,f=!1,p){const m=this.snapshot,g=m?m.latestValues:{},y={...this.latestValues},b=ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const k=ze(),_=m?m.source:void 0,E=this.layout?this.layout.source:void 0,S=_!==E,P=this.getStack(),j=!P||P.members.length<=1,I=!!(S&&!j&&this.options.crossfade===!0&&!this.path.some(Iw));this.animationProgress=0;let L;const $=p?.interpolateProjection(l);this.mixTargetDelta=W=>{const G=W/1e3,B=$?.(G);B?(b.x.translate=B.x,b.x.scale=Te(l.x.scale,1,G),b.x.origin=l.x.origin,b.x.originPoint=l.x.originPoint,b.y.translate=B.y,b.y.scale=Te(l.y.scale,1,G),b.y.origin=l.y.origin,b.y.originPoint=l.y.originPoint):(Ch(b.x,l.x,G),Ch(b.y,l.y,G)),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ws(k,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),jw(this.relativeTarget,this.relativeTargetOrigin,k,G),L&&aw(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=ze()),It(L,this.relativeTarget)),S&&(this.animationValues=y,uw(y,g,this.latestValues,G,I,j)),B&&B.rotate!==void 0&&(this.animationValues||(this.animationValues=y),this.animationValues.pathRotation=B.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(en(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ce.update(()=>{fs.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fn(0)),this.motionValue.jump(0,!1),this.currentAnimation=dw(this.motionValue,[0,1e3],{...l,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:f,target:p,layout:m,latestValues:g}=l;if(!(!f||!p||!m)){if(this!==l&&this.layout&&m&&Kp(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||ze();const y=tt(this.layout.layoutBox.x);p.x.min=l.target.x.min,p.x.max=p.x.min+y;const b=tt(this.layout.layoutBox.y);p.y.min=l.target.y.min,p.y.max=p.y.min+b}It(f,p),cs(f,g),$i(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(l,f){this.sharedNodes.has(l)||this.sharedNodes.set(l,new xw),this.sharedNodes.get(l).add(f);const m=f.options.initialPromotionConfig;f.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(f):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){const{layoutId:l}=this.options;return l?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:l}=this.options;return l?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:f,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),l&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let f=!1;const{latestValues:p}=l;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const m={};p.z&&ma("z",l,m,this.animationValues);for(let g=0;g<pa.length;g++)ma(`rotate${pa[g]}`,l,m,this.animationValues),ma(`skew${pa[g]}`,l,m,this.animationValues);l.render();for(const g in m)l.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);l.scheduleRender()}applyProjectionStyles(l,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){l.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,l.visibility="",l.opacity="",l.pointerEvents=us(f?.pointerEvents)||"",l.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(l.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,l.pointerEvents=us(f?.pointerEvents)||""),this.hasProjected&&!kn(this.latestValues)&&(l.transform=p?p({},""):"none",this.hasProjected=!1);return}l.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let y=lw(this.projectionDeltaWithTransform,this.treeScale,g);p&&(y=p(g,y)),l.transform=y;const{x:b,y:k}=this.projectionDelta;l.transformOrigin=`${b.origin*100}% ${k.origin*100}% 0`,m.animationValues?l.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:l.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const _ in Ja){if(g[_]===void 0)continue;const{correct:E,applyTo:S,isCSSVariable:P}=Ja[_],j=y==="none"?g[_]:E(g[_],m);if(S){const I=S.length;for(let L=0;L<I;L++)l[S[L]]=j}else P?this.options.visualElement.renderState.vars[_]=j:l[_]=j}this.options.layoutId&&(l.pointerEvents=m===this?us(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>l.currentAnimation?.stop()),this.root.nodes.forEach(yh),this.root.sharedNodes.clear()}}}function bw(e){e.updateLayout()}function ww(e){const n=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=e.layout,{animationType:a}=e.options,u=n.source!==e.layout.source;if(a==="size")zt(g=>{const y=u?n.measuredBox[g]:n.layoutBox[g],b=tt(y);y.min=r[g].min,y.max=y.min+b});else if(a==="x"||a==="y"){const g=a==="x"?"y":"x";el(u?n.measuredBox[g]:n.layoutBox[g],r[g])}else Kp(a,n.layoutBox,r)&&zt(g=>{const y=u?n.measuredBox[g]:n.layoutBox[g],b=tt(r[g]);y.max=y.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[g].max=e.relativeTarget[g].min+b)});const l=ii();$i(l,r,n.layoutBox);const f=ii();u?$i(f,e.applyTransform(s,!0),n.measuredBox):$i(f,r,n.layoutBox);const p=!Wp(l);let m=!1;if(!e.resumeFrom){const g=e.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:y,layout:b}=g;if(y&&b){const k=e.options.layoutAnchor||void 0,_=ze();ws(_,n.layoutBox,y.layoutBox,k);const E=ze();ws(E,r,b.layoutBox,k),Up(_,E)||(m=!0),g.options.layoutRoot&&(e.relativeTarget=E,e.relativeTargetOrigin=_,e.relativeParent=g)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:f,layoutDelta:l,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Cw(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Sw(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Tw(e){e.clearSnapshot()}function yh(e){e.clearMeasurements()}function _w(e){e.isLayoutDirty=!0,e.updateLayout()}function bh(e){e.isLayoutDirty=!1}function Mw(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Aw(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function wh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ew(e){e.resolveTargetDelta()}function kw(e){e.calcProjection()}function Pw(e){e.resetSkewAndRotation()}function Rw(e){e.removeLeadSnapshot()}function Ch(e,n,r){e.translate=Te(n.translate,0,r),e.scale=Te(n.scale,1,r),e.origin=n.origin,e.originPoint=n.originPoint}function Sh(e,n,r,s){e.min=Te(n.min,r.min,s),e.max=Te(n.max,r.max,s)}function jw(e,n,r,s){Sh(e.x,n.x,r.x,s),Sh(e.y,n.y,r.y,s)}function Iw(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Lw={duration:.45,ease:[.4,0,.1,1]},Th=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),_h=Th("applewebkit/")&&!Th("chrome/")?Math.round:Tt;function Mh(e){e.min=_h(e.min),e.max=_h(e.max)}function Dw(e){Mh(e.x),Mh(e.y)}function Kp(e,n,r){return e==="position"||e==="preserve-aspect"&&!nw(ph(n),ph(r),.2)}function Fw(e){return e!==e.root&&e.scroll?.wasRoot}const Vw=Gp({attachResizeListener:(e,n)=>Gi(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),ga={current:void 0},Yp=Gp({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ga.current){const e=new Vw({});e.mount(window),e.setOptions({layoutScroll:!0}),ga.current=e}return ga.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),js=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Ah(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Ow(...e){return n=>{let r=!1;const s=e.map(a=>{const u=Ah(a,n);return!r&&typeof u=="function"&&(r=!0),u});if(r)return()=>{for(let a=0;a<s.length;a++){const u=s[a];typeof u=="function"?u():Ah(e[a],null)}}}}function zw(...e){return C.useCallback(Ow(...e),e)}class Bw extends C.Component{getSnapshotBeforeUpdate(n){const r=this.props.childRef.current;if(rs(r)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=r.offsetParent,a=rs(s)&&s.offsetWidth||0,u=rs(s)&&s.offsetHeight||0,l=getComputedStyle(r),f=this.props.sizeRef.current;f.height=parseFloat(l.height),f.width=parseFloat(l.width),f.top=r.offsetTop,f.left=r.offsetLeft,f.right=a-f.width-f.left,f.bottom=u-f.height-f.top,f.direction=l.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function $w({children:e,isPresent:n,anchorX:r,anchorY:s,root:a,pop:u}){const l=C.useId(),f=C.useRef(null),p=C.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:m}=C.useContext(js),g=e.props?.ref??e?.ref,y=zw(f,g);return C.useInsertionEffect(()=>{const{width:b,height:k,top:_,left:E,right:S,bottom:P,direction:j}=p.current;if(n||u===!1||!f.current||!b||!k)return;const I=j==="rtl",L=r==="left"?I?`right: ${S}`:`left: ${E}`:I?`left: ${E}`:`right: ${S}`,$=s==="bottom"?`bottom: ${P}`:`top: ${_}`;f.current.dataset.motionPopId=l;const W=document.createElement("style");m&&(W.nonce=m);const G=a??document.head;return G.appendChild(W),W.sheet&&W.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${k}px !important;
            ${L}px !important;
            ${$}px !important;
          }
        `),()=>{f.current?.removeAttribute("data-motion-pop-id"),G.contains(W)&&G.removeChild(W)}},[n]),h.jsx(Bw,{isPresent:n,childRef:f,sizeRef:p,pop:u,children:u===!1?e:C.cloneElement(e,{ref:y})})}const Ww=({children:e,initial:n,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:u,mode:l,anchorX:f,anchorY:p,root:m})=>{const g=Dn(Uw),y=C.useId(),b=C.useRef(r),k=C.useRef(s);As(()=>{b.current=r,k.current=s});let _=!0,E=C.useMemo(()=>(_=!1,{id:y,initial:n,isPresent:r,custom:a,onExitComplete:S=>{g.set(S,!0);for(const P of g.values())if(!P)return;s&&s()},register:S=>(g.set(S,!1),()=>{g.delete(S),!b.current&&!g.size&&k.current?.()})}),[r,g,s]);return u&&_&&(E={...E}),C.useMemo(()=>{g.forEach((S,P)=>g.set(P,!1))},[r]),C.useEffect(()=>{!r&&!g.size&&s&&s()},[r]),e=h.jsx($w,{pop:l==="popLayout",isPresent:r,anchorX:f,anchorY:p,root:m,children:e}),h.jsx(Es.Provider,{value:E,children:e})};function Uw(){return new Map}function qp(e=!0){const n=C.useContext(Es);if(n===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=n,u=C.useId();C.useEffect(()=>{if(e)return a(u)},[e]);const l=C.useCallback(()=>e&&s&&s(u),[u,s,e]);return!r&&s?[!1,l]:[!0]}const Yr=e=>e.key||"";function Eh(e){const n=[];return C.Children.forEach(e,r=>{C.isValidElement(r)&&n.push(r)}),n}const Hw=({children:e,custom:n,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:u="sync",propagate:l=!1,anchorX:f="left",anchorY:p="top",root:m})=>{const[g,y]=qp(l),b=C.useMemo(()=>Eh(e),[e]),k=l&&!g?[]:b.map(Yr),_=C.useRef(!0),E=C.useRef(b),S=Dn(()=>new Map),P=C.useRef(new Set),[j,I]=C.useState(b),[L,$]=C.useState(b);As(()=>{_.current=!1,E.current=b;for(let B=0;B<L.length;B++){const H=Yr(L[B]);k.includes(H)?(S.delete(H),P.current.delete(H)):S.get(H)!==!0&&S.set(H,!1)}},[L,k.length,k.join("-")]);const W=[];if(b!==j){let B=[...b];for(let H=0;H<L.length;H++){const U=L[H],ne=Yr(U);k.includes(ne)||(B.splice(H,0,U),W.push(U))}return u==="wait"&&W.length&&(B=W),$(Eh(B)),I(b),null}const{forceRender:G}=C.useContext(al);return h.jsx(h.Fragment,{children:L.map(B=>{const H=Yr(B),U=l&&!g?!1:b===L||k.includes(H),ne=()=>{if(P.current.has(H))return;if(S.has(H))P.current.add(H),S.set(H,!0);else return;let pe=!0;S.forEach(ve=>{ve||(pe=!1)}),pe&&(G?.(),$(E.current),l&&y?.(),s&&s())};return h.jsx(Ww,{isPresent:U,initial:!_.current||r?void 0:!1,custom:n,presenceAffectsLayout:a,mode:u,root:m,onExitComplete:U?void 0:ne,anchorX:f,anchorY:p,children:B},H)})})},Xp=C.createContext({strict:!1}),kh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Ph=!1;function Nw(){if(Ph)return;const e={};for(const n in kh)e[n]={isEnabled:r=>kh[n].some(s=>!!r[s])};Mp(e),Ph=!0}function Zp(){return Nw(),E4()}function Gw(e){const n=Zp();for(const r in e)n[r]={...n[r],...e[r]};Mp(n)}const Kw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Cs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Kw.has(e)}let Qp=e=>!Cs(e);function Yw(e){typeof e=="function"&&(Qp=n=>n.startsWith("on")?!Cs(n):e(n))}try{Yw(require("@emotion/is-prop-valid").default)}catch{}function qw(e,n,r){const s={};for(const a in e)a==="values"&&typeof e.values=="object"||Ke(e[a])||(Qp(a)||r===!0&&Cs(a)||!n&&!Cs(a)||e.draggable&&a.startsWith("onDrag"))&&(s[a]=e[a]);return s}const Is=C.createContext({});function Xw(e,n){if(Rs(e)){const{initial:r,animate:s}=e;return{initial:r===!1||Ni(r)?r:void 0,animate:Ni(s)?s:void 0}}return e.inherit!==!1?n:{}}function Zw(e){const{initial:n,animate:r}=Xw(e,C.useContext(Is));return C.useMemo(()=>({initial:n,animate:r}),[Rh(n),Rh(r)])}function Rh(e){return Array.isArray(e)?e.join(" "):e}const jl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Jp(e,n,r){for(const s in n)!Ke(n[s])&&!Ip(s,r)&&(e[s]=n[s])}function Qw({transformTemplate:e},n){return C.useMemo(()=>{const r=jl();return Pl(r,n,e),Object.assign({},r.vars,r.style)},[n])}function Jw(e,n){const r=e.style||{},s={};return Jp(s,r,e),Object.assign(s,Qw(e,n)),s}function e6(e,n){const r={},s=Jw(e,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=s,r}const e0=()=>({...jl(),attrs:{}});function t6(e,n,r,s){const a=C.useMemo(()=>{const u=e0();return Lp(u,n,Fp(s),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};Jp(u,e.style,e),a.style={...u,...a.style}}return a}const n6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Il(e){return typeof e!="string"||e.includes("-")?!1:!!(n6.indexOf(e)>-1||/[A-Z]/u.test(e))}function i6(e,n,r,{latestValues:s},a,u=!1,l){const p=(l??Il(e)?t6:e6)(n,s,a,e),m=qw(n,typeof e=="string",u),g=e!==C.Fragment?{...m,...p,ref:r}:{},{children:y}=n,b=C.useMemo(()=>Ke(y)?y.get():y,[y]);return C.createElement(e,{...g,children:b})}function r6({scrapeMotionValuesFromProps:e,createRenderState:n},r,s,a){return{latestValues:s6(r,s,a,e),renderState:n()}}function s6(e,n,r,s){const a={},u=s(e,{});for(const b in u)a[b]=us(u[b]);let{initial:l,animate:f}=e;const p=Rs(e),m=Tp(e);n&&m&&!p&&e.inherit!==!1&&(l===void 0&&(l=n.initial),f===void 0&&(f=n.animate));let g=r?r.initial===!1:!1;g=g||l===!1;const y=g?f:l;if(y&&typeof y!="boolean"&&!Ps(y)){const b=Array.isArray(y)?y:[y];for(let k=0;k<b.length;k++){const _=Cl(e,b[k]);if(_){const{transitionEnd:E,transition:S,...P}=_;for(const j in P){let I=P[j];if(Array.isArray(I)){const L=g?I.length-1:0;I=I[L]}I!==null&&(a[j]=I)}for(const j in E)a[j]=E[j]}}}return a}const t0=e=>(n,r)=>{const s=C.useContext(Is),a=C.useContext(Es),u=()=>r6(e,n,s,a);return r?u():Dn(u)},o6=t0({scrapeMotionValuesFromProps:Rl,createRenderState:jl}),a6=t0({scrapeMotionValuesFromProps:Vp,createRenderState:e0}),l6=Symbol.for("motionComponentSymbol");function c6(e,n,r){const s=C.useRef(r);C.useInsertionEffect(()=>{s.current=r});const a=C.useRef(null);return C.useCallback(u=>{u&&e.onMount?.(u),n&&(u?n.mount(u):n.unmount());const l=s.current;if(typeof l=="function")if(u){const f=l(u);typeof f=="function"&&(a.current=f)}else a.current?(a.current(),a.current=null):l(u);else l&&(l.current=u)},[n])}const n0=C.createContext({});function ei(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function u6(e,n,r,s,a,u){const{visualElement:l}=C.useContext(Is),f=C.useContext(Xp),p=C.useContext(Es),m=C.useContext(js),g=m.reducedMotion,y=m.skipAnimations,b=C.useRef(null),k=C.useRef(!1);s=s||f.renderer,!b.current&&s&&(b.current=s(e,{visualState:n,parent:l,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:y,isSVG:u}),k.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const _=b.current,E=C.useContext(n0);_&&!_.projection&&a&&(_.type==="html"||_.type==="svg")&&f6(b.current,r,a,E);const S=C.useRef(!1);C.useInsertionEffect(()=>{_&&S.current&&_.update(r,p)});const P=r[hp],j=C.useRef(!!P&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(P)&&window.MotionHasOptimisedAnimation?.(P));return As(()=>{k.current=!0,_&&(S.current=!0,window.MotionIsMounted=!0,_.updateFeatures(),_.scheduleRenderMicrotask(),j.current&&_.animationState&&_.animationState.animateChanges())}),C.useEffect(()=>{_&&(!j.current&&_.animationState&&_.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(P)}),j.current=!1),_.enteringChildren=void 0)}),_}function f6(e,n,r,s){const{layoutId:a,layout:u,drag:l,dragConstraints:f,layoutScroll:p,layoutRoot:m,layoutAnchor:g,layoutCrossfade:y}=n;e.projection=new r(e.latestValues,n["data-framer-portal-id"]?void 0:i0(e.parent)),e.projection.setOptions({layoutId:a,layout:u,alwaysMeasureLayout:!!l||f&&ei(f),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:m,layoutAnchor:g})}function i0(e){if(e)return e.options.allowProjection!==!1?e.projection:i0(e.parent)}function xa(e,{forwardMotionProps:n=!1,type:r}={},s,a){s&&Gw(s);const u=r?r==="svg":Il(e),l=u?a6:o6;function f(m,g){let y;const b={...C.useContext(js),...m,layoutId:h6(m)},{isStatic:k}=b,_=Zw(m),E=l(m,k);if(!k&&typeof window<"u"){d6();const S=p6(b);y=S.MeasureLayout,_.visualElement=u6(e,E,b,a,S.ProjectionNode,u)}return h.jsxs(Is.Provider,{value:_,children:[y&&_.visualElement?h.jsx(y,{visualElement:_.visualElement,...b}):null,i6(e,m,c6(E,_.visualElement,g),E,k,n,u)]})}f.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const p=C.forwardRef(f);return p[l6]=e,p}function h6({layoutId:e}){const n=C.useContext(al).id;return n&&e!==void 0?n+"-"+e:e}function d6(e,n){C.useContext(Xp).strict}function p6(e){const n=Zp(),{drag:r,layout:s}=n;if(!r&&!s)return{};const a={...r,...s};return{MeasureLayout:r?.isEnabled(e)||s?.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function m6(e,n){if(typeof Proxy>"u")return xa;const r=new Map,s=(u,l)=>xa(u,l,e,n),a=(u,l)=>s(u,l);return new Proxy(a,{get:(u,l)=>l==="create"?s:(r.has(l)||r.set(l,xa(l,void 0,e,n)),r.get(l))})}const g6=(e,n)=>n.isSVG??Il(e)?new N4(n):new z4(n,{allowProjection:e!==C.Fragment});class x6 extends vn{constructor(n){super(n),n.animationState||(n.animationState=X4(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Ps(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:r}=this.node.prevProps||{};n!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let v6=0;class y6 extends vn{constructor(){super(...arguments),this.id=v6++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===s)return;if(n&&s===!1){if(this.isExitComplete){const{initial:u,custom:l}=this.node.getProps();if(typeof u=="string"||typeof u=="object"&&u!==null&&!Array.isArray(u)){const f=Ln(this.node,u,l);if(f){const{transition:p,transitionEnd:m,...g}=f;for(const y in g)this.node.getValue(y)?.jump(g[y])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const a=this.node.animationState.setActive("exit",!n);r&&!n&&a.then(()=>{this.isExitComplete=!0,r(this.id)})}mount(){const{register:n,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const b6={animation:{Feature:x6},exit:{Feature:y6}};function Zi(e){return{point:{x:e.pageX,y:e.pageY}}}const w6=e=>n=>Ml(n)&&e(n,Zi(n));function Wi(e,n,r,s){return Gi(e,n,w6(r),s)}const r0=({current:e})=>e?e.ownerDocument.defaultView:null,jh=(e,n)=>Math.abs(e-n);function C6(e,n){const r=jh(e.x,n.x),s=jh(e.y,n.y);return Math.sqrt(r**2+s**2)}const Ih=new Set(["auto","scroll"]);class s0{constructor(n,r,{transformPagePoint:s,contextWindow:a=window,dragSnapToOrigin:u=!1,distanceThreshold:l=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=_=>{this.handleScroll(_.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=qr(this.lastRawMoveEventInfo,this.transformPagePoint));const _=va(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,S=C6(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!S)return;const{point:P}=_,{timestamp:j}=Ge;this.history.push({...P,timestamp:j});const{onStart:I,onMove:L}=this.handlers;E||(I&&I(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,_)},this.handlePointerMove=(_,E)=>{this.lastMoveEvent=_,this.lastRawMoveEventInfo=E,this.lastMoveEventInfo=qr(E,this.transformPagePoint),Ce.update(this.updatePoint,!0)},this.handlePointerUp=(_,E)=>{this.end();const{onEnd:S,onSessionEnd:P,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=va(_.type==="pointercancel"?this.lastMoveEventInfo:qr(E,this.transformPagePoint),this.history);this.startEvent&&S&&S(_,I),P&&P(_,I)},!Ml(n))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=s,this.distanceThreshold=l,this.contextWindow=a||window;const p=Zi(n),m=qr(p,this.transformPagePoint),{point:g}=m,{timestamp:y}=Ge;this.history=[{...g,timestamp:y}];const{onSessionStart:b}=r;b&&b(n,va(m,this.history));const k={passive:!0,capture:!0};this.removeListeners=Yi(Wi(this.contextWindow,"pointermove",this.handlePointerMove,k),Wi(this.contextWindow,"pointerup",this.handlePointerUp,k),Wi(this.contextWindow,"pointercancel",this.handlePointerUp,k)),f&&this.startScrollTracking(f)}startScrollTracking(n){let r=n.parentElement;for(;r;){const s=getComputedStyle(r);(Ih.has(s.overflowX)||Ih.has(s.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const r=this.scrollPositions.get(n);if(!r)return;const s=n===window,a=s?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:a.x-r.x,y:a.y-r.y};u.x===0&&u.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,a),Ce.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),en(this.updatePoint)}}function qr(e,n){return n?{point:n(e.point)}:e}function Lh(e,n){return{x:e.x-n.x,y:e.y-n.y}}function va({point:e},n){return{point:e,delta:Lh(e,o0(n)),offset:Lh(e,S6(n)),velocity:T6(n,.1)}}function S6(e){return e[0]}function o0(e){return e[e.length-1]}function T6(e,n){if(e.length<2)return{x:0,y:0};let r=e.length-1,s=null;const a=o0(e);for(;r>=0&&(s=e[r],!(a.timestamp-s.timestamp>dt(n)));)r--;if(!s)return{x:0,y:0};s===e[0]&&e.length>2&&a.timestamp-s.timestamp>dt(n)*2&&(s=e[1]);const u=St(a.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const l={x:(a.x-s.x)/u,y:(a.y-s.y)/u};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function _6(e,{min:n,max:r},s){return n!==void 0&&e<n?e=s?Te(n,e,s.min):Math.max(e,n):r!==void 0&&e>r&&(e=s?Te(r,e,s.max):Math.min(e,r)),e}function Dh(e,n,r){return{min:n!==void 0?e.min+n:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function M6(e,{top:n,left:r,bottom:s,right:a}){return{x:Dh(e.x,r,a),y:Dh(e.y,n,s)}}function Fh(e,n){let r=n.min-e.min,s=n.max-e.max;return n.max-n.min<e.max-e.min&&([r,s]=[s,r]),{min:r,max:s}}function A6(e,n){return{x:Fh(e.x,n.x),y:Fh(e.y,n.y)}}function E6(e,n){let r=.5;const s=tt(e),a=tt(n);return a>s?r=Ui(n.min,n.max-s,e.min):s>a&&(r=Ui(e.min,e.max-a,n.min)),Wt(0,1,r)}function k6(e,n){const r={};return n.min!==void 0&&(r.min=n.min-e.min),n.max!==void 0&&(r.max=n.max-e.min),r}const tl=.35;function P6(e=tl){return e===!1?e=0:e===!0&&(e=tl),{x:Vh(e,"left","right"),y:Vh(e,"top","bottom")}}function Vh(e,n,r){return{min:Oh(e,n),max:Oh(e,r)}}function Oh(e,n){return typeof e=="number"?e:e[n]||0}const R6=new WeakMap;class j6{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:r=!1,distanceThreshold:s}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const u=y=>{r&&this.snapToCursor(Zi(y).point),this.stopAnimation()},l=(y,b)=>{const{drag:k,dragPropagation:_,onDragStart:E}=this.getProps();if(k&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=i4(k),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zt(P=>{let j=this.getAxisMotionValue(P).get()||0;if($t.test(j)){const{projection:I}=this.visualElement;if(I&&I.layout){const L=I.layout.layoutBox[P];L&&(j=tt(L)*(parseFloat(j)/100))}}this.originPoint[P]=j}),E&&Ce.update(()=>E(y,b),!1,!0),Na(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},f=(y,b)=>{this.latestPointerEvent=y,this.latestPanInfo=b;const{dragPropagation:k,dragDirectionLock:_,onDirectionLock:E,onDrag:S}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:P}=b;if(_&&this.currentDirection===null){this.currentDirection=L6(P),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",b.point,P),this.updateAxis("y",b.point,P),this.visualElement.render(),S&&Ce.update(()=>S(y,b),!1,!0)},p=(y,b)=>{this.latestPointerEvent=y,this.latestPanInfo=b,this.stop(y,b),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new s0(n,{onSessionStart:u,onStart:l,onMove:f,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:r0(this.visualElement),element:this.visualElement.current})}stop(n,r){const s=n||this.latestPointerEvent,a=r||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!a||!s)return;const{velocity:l}=a;this.startAnimation(l);const{onDragEnd:f}=this.getProps();f&&Ce.postRender(()=>f(s,a))}cancel(){this.isDragging=!1;const{projection:n,animationState:r}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,r,s){const{drag:a}=this.getProps();if(!s||!Xr(n,a,this.currentDirection))return;const u=this.getAxisMotionValue(n);let l=this.originPoint[n]+s[n];this.constraints&&this.constraints[n]&&(l=_6(l,this.constraints[n],this.elastic[n])),u.set(l)}resolveConstraints(){const{dragConstraints:n,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,a=this.constraints;n&&ei(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=M6(s.layoutBox,n):this.constraints=!1,this.elastic=P6(r),a!==this.constraints&&!ei(n)&&s&&this.constraints&&!this.hasMutatedConstraints&&zt(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=k6(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:r}=this.getProps();if(!n||!ei(n))return!1;const s=n.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;a.root&&(a.root.scroll=void 0,a.root.updateScroll());const u=I4(s,a.root,this.visualElement.getTransformPagePoint());let l=A6(a.layout.layoutBox,u);if(r){const f=r(P4(l));this.hasMutatedConstraints=!!f,f&&(l=Ep(f))}return l}startAnimation(n){const{drag:r,dragMomentum:s,dragElastic:a,dragTransition:u,dragSnapToOrigin:l,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},m=zt(g=>{if(!Xr(g,r,this.currentDirection))return;let y=p&&p[g]||{};(l===!0||l===g)&&(y={min:0,max:0});const b=a?200:1e6,k=a?40:1e7,_={type:"inertia",velocity:s?n[g]:0,bounceStiffness:b,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,_)});return Promise.all(m).then(f)}startAxisValueAnimation(n,r){const s=this.getAxisMotionValue(n);return Na(this.visualElement,n),s.start(wl(n,s,0,r,this.visualElement,!1))}stopAnimation(){zt(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const r=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps()[r];return a||this.visualElement.getValue(n,this.visualElement.latestValues[n]??0)}snapToCursor(n){zt(r=>{const{drag:s}=this.getProps();if(!Xr(r,s,this.currentDirection))return;const{projection:a}=this.visualElement,u=this.getAxisMotionValue(r);if(a&&a.layout){const{min:l,max:f}=a.layout.layoutBox[r],p=u.get()||0;u.set(n[r]-Te(l,f,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!ei(r)||!s||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};zt(l=>{const f=this.getAxisMotionValue(l);if(f&&this.constraints!==!1){const p=f.get();a[l]=E6({min:p,max:p},this.constraints[l])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),zt(l=>{if(!Xr(l,n,null))return;const f=this.getAxisMotionValue(l),{min:p,max:m}=this.constraints[l];f.set(Te(p,m,a[l]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;R6.set(this.visualElement,this);const n=this.visualElement.current,r=Wi(n,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps(),b=m.target,k=b!==n&&c4(b);g&&y&&!k&&this.start(m)});let s;const a=()=>{const{dragConstraints:m}=this.getProps();ei(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),s||(s=I6(n,m.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,l=u.addEventListener("measure",a);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Ce.read(a);const f=Gi(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(zt(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=m[y].translate,b.set(b.get()+m[y].translate))}),this.visualElement.render())}));return()=>{f(),r(),l(),p&&p(),s&&s()}}getProps(){const n=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:a=!1,dragConstraints:u=!1,dragElastic:l=tl,dragMomentum:f=!0}=n;return{...n,drag:r,dragDirectionLock:s,dragPropagation:a,dragConstraints:u,dragElastic:l,dragMomentum:f}}}function zh(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function I6(e,n,r){const s=Gf(e,zh(r)),a=Gf(n,zh(r));return()=>{s(),a()}}function Xr(e,n,r){return(n===!0||n===e)&&(r===null||r===e)}function L6(e,n=10){let r=null;return Math.abs(e.y)>n?r="y":Math.abs(e.x)>n&&(r="x"),r}class D6 extends vn{constructor(n){super(n),this.removeGroupControls=Tt,this.removeListeners=Tt,this.controls=new j6(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Tt}update(){const{dragControls:n}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};n!==r&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ya=e=>(n,r)=>{e&&Ce.update(()=>e(n,r),!1,!0)};class F6 extends vn{constructor(){super(...arguments),this.removePointerDownListener=Tt}onPointerDown(n){this.session=new s0(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:r0(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:r,onPan:s,onPanEnd:a}=this.node.getProps();return{onSessionStart:ya(n),onStart:ya(r),onMove:ya(s),onEnd:(u,l)=>{delete this.session,a&&Ce.postRender(()=>a(u,l))}}}mount(){this.removePointerDownListener=Wi(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ba=!1;class V6 extends C.Component{componentDidMount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:s,layoutId:a}=this.props,{projection:u}=n;u&&(r.group&&r.group.add(u),s&&s.register&&a&&s.register(u),ba&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),fs.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:r,visualElement:s,drag:a,isPresent:u}=this.props,{projection:l}=s;return l&&(l.isPresent=u,n.layoutDependency!==r&&l.setOptions({...l.options,layoutDependency:r}),ba=!0,a||n.layoutDependency!==r||r===void 0||n.isPresent!==u?l.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?l.promote():l.relegate()||Ce.postRender(()=>{const f=l.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:r}=this.props,{projection:s}=n;s&&(s.options.layoutAnchor=r,s.root.didUpdate(),_l.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:a}=n;ba=!0,a&&(a.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(a),s&&s.deregister&&s.deregister(a))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function a0(e){const[n,r]=qp(),s=C.useContext(al);return h.jsx(V6,{...e,layoutGroup:s,switchLayoutGroup:C.useContext(n0),isPresent:n,safeToRemove:r})}const O6={pan:{Feature:F6},drag:{Feature:D6,ProjectionNode:Yp,MeasureLayout:a0}};function Bh(e,n,r){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",r==="Start");const a="onHover"+r,u=s[a];u&&Ce.postRender(()=>u(n,Zi(n)))}class z6 extends vn{mount(){const{current:n}=this.node;n&&(this.unmount=s4(n,(r,s)=>(Bh(this.node,s,"Start"),a=>Bh(this.node,a,"End"))))}unmount(){}}class B6 extends vn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yi(Gi(this.node.current,"focus",()=>this.onFocus()),Gi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $h(e,n,r){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",r==="Start");const a="onTap"+(r==="End"?"":r),u=s[a];u&&Ce.postRender(()=>u(n,Zi(n)))}class $6 extends vn{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:r,propagate:s}=this.node.props;this.unmount=f4(n,(a,u)=>($h(this.node,u,"Start"),(l,{success:f})=>$h(this.node,l,f?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:s?.tap===!1})}unmount(){}}const nl=new WeakMap,wa=new WeakMap,W6=e=>{const n=nl.get(e.target);n&&n(e)},U6=e=>{e.forEach(W6)};function H6({root:e,...n}){const r=e||document;wa.has(r)||wa.set(r,{});const s=wa.get(r),a=JSON.stringify(n);return s[a]||(s[a]=new IntersectionObserver(U6,{root:e,...n})),s[a]}function N6(e,n,r){const s=H6(n);return nl.set(e,r),s.observe(e),()=>{nl.delete(e),s.unobserve(e)}}const G6={some:0,all:1};class K6 extends vn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:n={}}=this.node.getProps(),{root:r,margin:s,amount:a="some",once:u}=n,l={root:r?r.current:void 0,rootMargin:s,threshold:typeof a=="number"?a:G6[a]},f=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),b=m?g:y;b&&b(p)};this.stopObserver=N6(this.node.current,l,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:r}=this.node;["amount","margin","root"].some(Y6(n,r))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function Y6({viewport:e={}},{viewport:n={}}={}){return r=>e[r]!==n[r]}const q6={inView:{Feature:K6},tap:{Feature:$6},focus:{Feature:B6},hover:{Feature:z6}},X6={layout:{ProjectionNode:Yp,MeasureLayout:a0}},Z6={...b6,...q6,...O6,...X6},Q6=m6(Z6,g6);function Ss(e){const n=Dn(()=>Fn(e)),{isStatic:r}=C.useContext(js);if(r){const[,s]=C.useState(e);C.useEffect(()=>n.on("change",s),[])}return n}function l0(e,n){const r=Ss(n()),s=()=>r.set(n());return s(),As(()=>{const a=()=>Ce.preRender(s,!1,!0),u=e.map(l=>l.on("change",a));return()=>{u.forEach(l=>l()),en(s)}}),r}function J6(e){Bi.current=[],e();const n=l0(Bi.current,e);return Bi.current=void 0,n}function c0(e,n,r,s){if(typeof e=="function")return J6(e);if(r!==void 0&&!Array.isArray(r)&&typeof n!="function")return e8(e,n,r,s);const l=typeof n=="function"?n:w4(n,r,s),f=Array.isArray(e)?Wh(e,l):Wh([e],([m])=>l(m)),p=Array.isArray(e)?void 0:e.accelerate;return p&&!p.isTransformed&&typeof n!="function"&&Array.isArray(r)&&s?.clamp!==!1&&(f.accelerate={...p,times:n,keyframes:r,isTransformed:!0,...s?.ease?{ease:s.ease}:{}}),f}function Wh(e,n){const r=Dn(()=>[]);return l0(e,()=>{r.length=0;const s=e.length;for(let a=0;a<s;a++)r[a]=e[a].get();return n(r)})}function e8(e,n,r,s){const a=Dn(()=>Object.keys(r)),u=Dn(()=>({}));for(const l of a)u[l]=c0(e,n,r[l],s);return u}const Qi=Q6,t8="draggable_positions",n8=e=>{if(Be.isValidElement(e)){const n=e.type,r=typeof n=="function"?n.name:String(n);if(typeof n=="function"){if(e?.props){const s=e.props;return s.label?`${r}_${s.label}`:r}return r}if(typeof n=="string")return n}return"default"},i8=D(Qi.div)`
  position: fixed;
  cursor: grab;
  user-select: none;
  z-index: 10;

  &:active {
    cursor: grabbing;
  }

  /* Add shadow while dragging */
  &:active > * {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`,Fi=({children:e,initialX:n,initialY:r})=>{const s=n8(e),a=t8,[u,l]=C.useState(10),f=Be.useRef(null),p=Ss(null),m=Ss(null);Be.useLayoutEffect(()=>{const _=Pa(a,{})[s];if(_)p.set(_.x),m.set(_.y);else if(n!==void 0&&r!==void 0)p.set(n),m.set(r);else if(f.current){const E=f.current.getBoundingClientRect();p.set(E.left),m.set(E.top)}},[s,p,m,n,r]);const g=()=>{l(100),setTimeout(()=>l(10),300)},y=C.useCallback(()=>{const k=f.current?.offsetWidth||280,_=f.current?.offsetHeight||280;return{left:-20,right:window.innerWidth-k+20,top:-20,bottom:window.innerHeight-_+20}},[]),b=C.useCallback(()=>{const _={...Pa(a,{}),[s]:{x:p.get(),y:m.get()}};dd(a,_)},[s,p,m]);return h.jsx(i8,{ref:f,drag:!0,dragMomentum:!1,dragElastic:0,style:{...{zIndex:u},x:p,y:m},onMouseDown:g,onDragEnd:b,dragConstraints:y(),children:e})},r8=D.div`
  position: fixed;
  display: grid;
  z-index: 10; /* below windows */
  ${({hidden:e})=>e&&"display:none;"}

  ${({$mobileExpanded:e})=>e?`
    top: 12px; left: 12px; right: 12px; bottom: 60px;
    overflow: auto;
  `:`
    top: 24px; left: 24px; bottom: 60px;
  `}
`,s8=({onOpenTerminal:e,onOpenWelcome:n,onOpenResume:r,hidden:s,activeTerminal:a,activeBrowser:u,activeResume:l,mobileExpanded:f,terminal:p,welcome:m,resume:g,onOpenBrowserWithUrl:y})=>{const{contextMenu:b,handleContextMenu:k,closeContextMenu:_}=bd(),E=L=>{if(f){const ve=window.innerWidth,fe=Math.max(1,Math.floor(ve/116)),oe=L%fe,re=Math.floor(L/fe);return{x:oe*116,y:12+re*116}}const $=106,W=106,G=window.innerHeight-60-24,B=Math.max(1,Math.floor(G/$)),H=L%B;return{x:24+Math.floor(L/B)*W,y:24+H*$}},S=E(0),P=E(1),j=2,I=j+Tf.length;return h.jsxs(r8,{hidden:s,$mobileExpanded:f,children:[h.jsx(Fi,{initialX:S.x,initialY:S.y,children:h.jsx(Nr,{label:"Browser",onOpen:n,icon:pn.Browser,active:u,onContextMenu:m?L=>k(L,"welcome"):void 0,contextMenu:b.visible&&b.windowKey==="welcome"&&m?h.jsx(Pn,{items:ri(m)["desktop-shortcuts"],onClose:_,position:"bottom-right"}):void 0})}),h.jsx(Fi,{initialX:P.x,initialY:P.y,children:h.jsx(Nr,{label:"Terminal",onOpen:e,icon:pn.Terminal,active:a,onContextMenu:p?L=>k(L,"terminal"):void 0,contextMenu:b.visible&&b.windowKey==="terminal"&&p?h.jsx(Pn,{items:ri(p)["desktop-shortcuts"],onClose:_,position:"bottom-right"}):void 0})}),Tf.map((L,$)=>{const W=L.value,G=pn[W],B=`shortcut-${$}`,H=L.href&&!Sd(L.href)?()=>window.open(L.href,"_blank"):()=>y?.(L.href),U=E(j+$);return h.jsx(Fi,{initialX:U.x,initialY:U.y,children:h.jsx(Nr,{label:L.value,href:L.href,onOpen:H,icon:G,onContextMenu:ne=>k(ne,B),contextMenu:b.visible&&b.windowKey===B?h.jsx(Pn,{items:[{icon:wd,label:"Open",onClick:()=>{H?.(),_()},disabled:!H}],onClose:_,position:"bottom-right"}):void 0})},$)}),h.jsx(Fi,{initialX:E(I).x,initialY:E(I).y,children:h.jsx(Nr,{label:"Resume",onOpen:r,icon:pn.PDF,active:l,onContextMenu:g?L=>k(L,"resume"):void 0,contextMenu:b.visible&&b.windowKey==="resume"&&g?h.jsx(Pn,{items:ri(g)["desktop-shortcuts"],onClose:_,position:"bottom-right"}):void 0})})]})},o8=D.button`
  position: relative;
  z-index: 100; /* below app windows so they can cover it when overlapping */
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  background: transparent;
  color: #eceff4;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  font-weight: 500;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  transition:
    transform 0.1s ease,
    background 0.15s ease,
    border-color 0.15s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.46);
  }
  &:active {
    transform: translateY(1px);
  }
`,a8=({exit:e})=>e?h.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[h.jsx("path",{d:"M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M8 8l3 3M16 16l-3-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}):h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:h.jsx("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),l8=({isFullscreen:e,onToggle:n})=>{const[r,s]=C.useState(!0),a=()=>{s(!1),n()};return h.jsxs(o8,{onClick:a,"aria-label":e?"Exit fullscreen":"Enter fullscreen",children:[h.jsx(pd,{id:md.FULLSCREEN_HINT,showCondition:r&&gn(),onClose:()=>s(!1)}),h.jsx(a8,{exit:e})]})},Uh=(e,n)=>e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!n}),c8=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),u8=D.div`
  color: #eceff4;
  font-size: 13px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  font-weight: 500;
  text-align: right;
  line-height: 1.3;
  user-select: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
  &:active {
    background: rgba(255, 255, 255, 0.13);
  }
`,f8=({onClick:e,id:n})=>{const[r,s]=Be.useState(new Date);return Be.useEffect(()=>{const a=setInterval(()=>s(new Date),6e4);return()=>clearInterval(a)},[]),h.jsxs(u8,{id:n,onClick:e,"aria-label":`Current time: ${Uh(r)}. Click to open calendar.`,role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),e?.())},children:[h.jsx("div",{children:Uh(r,gn())}),!gn()&&h.jsx("div",{style:{fontSize:"11px",opacity:.7},children:c8(r)})]})},u0=(e,n,r,s)=>{C.useEffect(()=>{if(!e)return;const a=u=>{if(s){const l=document.querySelector(s);if(l&&l.contains(u.target))return}r.current&&!r.current.contains(u.target)&&n?.()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e,n,r,s]),C.useEffect(()=>{if(!e)return;const a=u=>{u.key==="Escape"&&n?.()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,n])},h8=sl`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,d8=D.div`
  position: fixed;
  bottom: 56px;
  right: 12px;
  width: 280px;
  background: rgba(18, 18, 24, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 16px;
  z-index: 10000;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.5),
    0 2px 8px rgba(0, 0, 0, 0.3);
  animation: ${h8} 0.18s ease-out;
  user-select: none;
`,p8=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,m8=D.span`
  color: #eceff4;
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  font-weight: 600;
  letter-spacing: 0.3px;
`,Hh=D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.primary};
  cursor: pointer;
  font-size: 14px;
  transition:
    background 0.15s ease,
    color 0.15s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #eceff4;
  }
  &:active {
    transform: scale(0.92);
  }
`,g8=D.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 4px;
`,x8=D.span`
  text-align: center;
  font-size: 10px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text[100]};
  padding: 2px 0 6px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`,v8=D.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`,y8=D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background: ${({$isToday:e,theme:n})=>e?n.colors.primary:"transparent"};
  color: ${({$isToday:e,$isCurrentMonth:n,theme:r})=>e||n?r.colors.text[100]:"rgba(236,239,244,0.25)"};
  font-size: 12px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  font-weight: ${({$isToday:e})=>e?"700":"400"};
  cursor: ${({$isEmpty:e})=>e?"default":"pointer"};
  transition:
    background 0.12s ease,
    color 0.12s ease;
  pointer-events: ${({$isEmpty:e})=>e?"none":"auto"};
  box-shadow: ${({$isToday:e,theme:n})=>e?`0 0 10px ${n.colors.primary}`:"none"};

  &:hover {
    background: ${({$isToday:e,theme:n})=>e?n.colors.primary:"rgba(255, 255, 255, 0.1)"};
  }
`,b8=D.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 12px 0 10px;
`,w8=D.div`
  text-align: center;
  font-size: 11px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  color: ${({theme:e})=>e.colors.text[100]};
  font-weight: 500;
  letter-spacing: 0.3px;
`,C8=["Su","Mo","Tu","We","Th","Fr","Sa"],Nh=["January","February","March","April","May","June","July","August","September","October","November","December"];function S8(e,n){return new Date(e,n+1,0).getDate()}function T8(e,n){return new Date(e,n,1).getDay()}const _8=({isOpen:e,onClose:n,$parentID:r})=>{const s=new Date,[a,u]=C.useState(s.getFullYear()),[l,f]=C.useState(s.getMonth()),p=C.useRef(null);u0(e??!1,n??(()=>{}),p,`[id*=${r}]`);const m=()=>{l===0?(f(11),u(S=>S-1)):f(S=>S-1)},g=()=>{l===11?(f(0),u(S=>S+1)):f(S=>S+1)},y=S8(a,l),b=T8(a,l),k=[...Array(b).fill(null),...Array.from({length:y},(S,P)=>P+1)];for(;k.length%7!==0;)k.push(null);const _=S=>S===s.getDate()&&l===s.getMonth()&&a===s.getFullYear(),E=s.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return e?h.jsxs(d8,{ref:p,role:"dialog","aria-label":"Calendar",children:[h.jsxs(p8,{children:[h.jsx(Hh,{onClick:m,"aria-label":"Previous month",title:"Previous month",children:"‹"}),h.jsxs(m8,{children:[Nh[l]," ",a]}),h.jsx(Hh,{onClick:g,"aria-label":"Next month",title:"Next month",children:"›"})]}),h.jsx(g8,{children:C8.map(S=>h.jsx(x8,{children:S},S))}),h.jsx(v8,{children:k.map((S,P)=>h.jsx(y8,{$isToday:S!==null&&_(S),$isCurrentMonth:S!==null,$isEmpty:S===null,"aria-label":S!==null?`${Nh[l]} ${S}, ${a}${_(S)?" (today)":""}`:void 0,"aria-current":S!==null&&_(S)?"date":void 0,children:S??""},P))}),h.jsx(b8,{}),h.jsx(w8,{children:E})]}):null},M8=e=>Be.useCallback(()=>{e.setWidgetState(n=>({...n,calendar:!n.calendar}))},[e.setWidgetState]),A8=e=>Be.useCallback(()=>{e.setWidgetState(n=>({...n,calendar:!1}))},[e.setWidgetState]),E8=e=>Be.useCallback(()=>{e.setWidgetState(n=>({...n,announcement:!n.announcement}))},[e.setWidgetState]),k8=e=>Be.useCallback(()=>{e.setWidgetState(n=>({...n,announcement:!1}))},[e.setWidgetState]),P8=[{id:"1",title:"Mobile Responsiveness",description:"Full mobile support with optimized layout for touch devices",date:"March 2026",icon:"new"},{id:"2",title:"Taskbar",description:"A full Linux styled taskbar showing app drawer, running apps, clock etc",date:"April 2026",icon:"new"},{id:"3",title:"Performance Optimizations",description:"Reduced bundle size by 40% and improved load times",date:"March 2026",icon:"improvement"},{id:"4",title:"Accessibility Fixes",description:"Full keyboard navigation support and improved screen reader compatibility",date:"March 2026",icon:"fix"}];class R8{config;constructor(n){this.config=n}async call(n,r={}){const s=new URLSearchParams(r).toString(),a=await fetch(`${h5}${n}?${s}`);if(!a.ok)throw new Error("API error");return a.json()}async getPinnedRepositories(){try{const n=await this.call("github",{path:"pinned-repos",username:this.config.username});if(!Array.isArray(n))throw new Error("Invalid data format received from GitHub API");return n.map(r=>({name:r.name,description:r.description,url:r.url,stargazerCount:r.stargazers_count||0,forkCount:r.forks_count||0}))}catch(n){throw this.handleError(n,"Failed to fetch pinned repositories"),n}}async getTopClosedIssues(){try{const n=await this.call("github",{path:"top-closed-issues"});if(!Array.isArray(n))throw new Error("Invalid data format received from GitHub API");return n}catch(n){throw this.handleError(n,"Failed to fetch closed issues"),n}}handleError(n,r){const s=n instanceof Error?n.message:"Unknown error";throw hs.error(`${r}: ${s}`),new Error(`${r}: ${s}`)}}const j8=e=>{const n=[{prefix:"Fix:",icon:"fix"},{prefix:"Refactor:",icon:"improvement"},{prefix:"Feature:",icon:"new"}];for(const{prefix:s,icon:a}of n)if(e.startsWith(s))return{cleanedTitle:e.slice(s.length).trim(),icon:a};const r=e.indexOf(":");return r>0&&r<20?{cleanedTitle:e.slice(r+1).trim(),icon:"fix"}:{cleanedTitle:e,icon:"fix"}},I8=e=>{const{cleanedTitle:n,icon:r}=j8(e.title);return{id:`issue-${e.number}`,title:n,icon:r,description:`Closed issue with ${e.comments.totalCount} comments`,date:new Date(e.closedAt).toLocaleDateString(),href:e.url}},L8=e=>e.map(I8),D8=()=>({username:xe.personalInfo.uname}),F8=({onClick:e,title:n,id:r})=>h.jsx(V8,{id:r,onClick:e,title:n,children:"✨"}),V8=D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: #eceff4;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.15s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    right: 6px;
    width: 6px;
    height: 6px;
    background: #4caf50;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(76, 175, 80, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
    }
  }
`,O8=D.div`
  position: absolute;
  bottom: 56px;
  right: 12px;
  width: 380px;
  max-height: 480px;
  background: rgba(12, 12, 12, 1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(16px)"};
  opacity: ${({$isOpen:e})=>e?1:0};
  pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9998;

  @media (max-width: 480px) {
    width: calc(100vw - 24px);
    right: 12px;
    left: 12px;
  }
`,z8=D.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: #eceff4;
    font-family:
      system-ui,
      -apple-system,
      Segoe UI,
      Roboto,
      sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,B8=D.div`
  max-height: 380px;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }
`,Gh=D.div`
  padding: 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }
`,Kh=D.div`
  font-size: 14px;
  font-weight: 500;
  color: #eceff4;
  margin-bottom: 4px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`,Yh=D.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
`,qh=D.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 6px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
`,Xh=D.span`
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  background: ${({$type:e})=>{switch(e){case"new":return"rgba(76, 175, 80, 0.2)";case"improvement":return"rgba(33, 150, 243, 0.2)";case"fix":return"rgba(255, 193, 7, 0.2)";default:return"rgba(255, 255, 255, 0.1)"}}};
  color: ${({$type:e})=>{switch(e){case"new":return"#4caf50";case"improvement":return"#2196f3";case"fix":return"#ffc107";default:return"rgba(255, 255, 255, 0.7)"}}};
`,$8=({isOpen:e,onClose:n,$parentID:r})=>{const s=C.useRef(null);u0(e??!1,n??(()=>{}),s,`[id*=${r}]`);const{data:a,isLoading:u,isError:l}=vd({queryKey:["github-new-features"],queryFn:async()=>{const p=D8();return await new R8(p).getTopClosedIssues()},staleTime:300*1e3,gcTime:600*1e3}),f=!a||l?P8:L8(a);return h.jsxs(O8,{ref:s,$isOpen:!!e,onClick:p=>p.stopPropagation(),children:[h.jsxs(z8,{children:[h.jsx("h3",{children:"✨ What's New"}),h.jsxs("span",{style:{fontSize:"12px",color:"rgba(255, 255, 255, 0.5)"},children:[f.length," updates"]})]}),!u&&h.jsx(B8,{children:f.map(p=>p.href?h.jsx("a",{href:p.href,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"block"},children:h.jsxs(Gh,{children:[h.jsxs(Kh,{children:[p.title,p.icon&&h.jsx(Xh,{$type:p.icon,children:p.icon})]}),h.jsx(Yh,{children:p.description}),h.jsx(qh,{children:p.date})]},p.id)}):h.jsxs(Gh,{children:[h.jsxs(Kh,{children:[p.title,p.icon&&h.jsx(Xh,{$type:p.icon,children:p.icon})]}),h.jsx(Yh,{children:p.description}),h.jsx(qh,{children:p.date})]},p.id))}),u&&h.jsx("div",{style:{textAlign:"center"},children:"Loading..."})]})},W8=[{id:"announcement-taskbar-button",component:F8,position:"right",order:10,enabled:!0,getProps:e=>({onClick:E8(e),title:"What's New"})},{id:"announcement-banner",component:$8,position:"right",order:11,enabled:!0,getProps:e=>({$parentID:"announcement-taskbar-button",title:"What's New",isOpen:e.widgetState.announcement,onClose:k8(e)})},{id:"clock",component:f8,position:"right",order:20,enabled:!0,getProps:e=>({title:"Clock",onClick:M8(e)})},{id:"calendar-panel",component:_8,position:"right",order:21,enabled:!0,getProps:e=>({$parentID:"clock",title:"Calendar Panel",isOpen:e.widgetState.calendar,onClose:A8(e)})}],U8=()=>{const[e,n]=C.useState(!1),r=async()=>{const l=document.documentElement;try{!document.fullscreenElement&&l.requestFullscreen?await l.requestFullscreen():l.webkitRequestFullscreen?await l.webkitRequestFullscreen():l.msRequestFullscreen&&await l.msRequestFullscreen()}catch{throw""}},s=async()=>{try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.msExitFullscreen&&await document.msExitFullscreen()}catch{throw""}},a=async()=>{e?await s():await r()},u=()=>{const l=()=>n(!!document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement);return document.addEventListener("fullscreenchange",l),document.addEventListener("webkitfullscreenchange",l),document.addEventListener("msfullscreenchange",l),()=>{document.removeEventListener("fullscreenchange",l),document.removeEventListener("webkitfullscreenchange",l),document.removeEventListener("msfullscreenchange",l)}};return C.useEffect(u,[]),{isFullscreen:e,toggleFullscreen:a,exitFullscreen:s,requestFullscreen:r}},H8=D.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background: rgba(12, 12, 12, 0.43);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  padding: 0 12px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.35);
`,N8=D.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
`,G8=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 2;
`,K8=D.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 1;
`,Y8=D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: #eceff4;
  cursor: pointer;
  transition: background 0.15s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    transform: scale(0.95);
  }
`,Ca=D.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 8px;
  background: ${({$active:e})=>e?"rgba(255, 255, 255, 0.12)":"transparent"};
  border: none;
  color: #eceff4;
  cursor: pointer;
  font-size: 13px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  font-weight: 500;
  transition: background 0.15s ease;
  position: relative;
  max-width: 180px;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({$active:e})=>e?"100%":"3px"};
    height: 3px;
    border-radius: 2px;
    background: ${({theme:e})=>e.colors.primary};
    transition: width 0.2s ease;
  }
  &:hover::after {
    width: 16px;
  }
`,q8=D.div`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.12);
  margin: 0 4px;
`,X8=({terminal:e,welcome:n,resume:r})=>{const[,s]=C.useState(!1),a=gn(),[u,l]=C.useState({calendar:!1,announcement:!1}),{contextMenu:f,setContextMenu:p,handleContextMenu:m,closeContextMenu:g}=bd(),{isFullscreen:y,toggleFullscreen:b}=U8(),k=C.useMemo(()=>ri(e).taskbar,[e.visible,e.maximized,e.toggleMaximize,e.minimize,e.close]),_=C.useMemo(()=>ri(n).taskbar,[n.visible,n.maximized,n.toggleMaximize,n.minimize,n.close]),E=C.useMemo(()=>ri(r).taskbar,[r.visible,r.maximized,r.toggleMaximize,r.minimize,r.close]),S=I=>{p({visible:!1,windowKey:null}),I.mounted?I.visible?I.minimize?.():(I.bringToFront(),I.open?.()):I.open?.()},P=()=>{s(I=>I?(e.toggleMaximize?.(),n.toggleMaximize?.(),r.toggleMaximize?.(),!1):(e.minimize?.(),n.minimize?.(),r.minimize?.(),!0))},j=W8.filter(I=>I.position==="right"&&I.enabled).sort((I,L)=>I.order-L.order);return h.jsxs(H8,{role:"toolbar","aria-label":"Application taskbar",children:[!a&&h.jsx(N8,{children:h.jsx(Y8,{onClick:P,"aria-label":"Show applications",title:"Show applications",children:pn.AppsIcon})}),h.jsxs(G8,{children:[e.mounted&&h.jsxs(h.Fragment,{children:[h.jsxs(Ca,{$active:e.visible,onClick:()=>S(e),onContextMenu:I=>m(I,"terminal"),title:"Terminal","aria-label":"Terminal window",children:[pn.Terminal,!a&&h.jsx("span",{children:"Terminal"})]}),f.visible&&f.windowKey==="terminal"&&h.jsx(Pn,{items:k,onClose:g,position:"top"})]}),n.mounted&&h.jsxs(Ca,{$active:n.visible,onClick:()=>S(n),onContextMenu:I=>m(I,"welcome"),title:"Browser","aria-label":"Browser window",children:[pn.Browser,!a&&h.jsx("span",{children:"Browser"}),f.visible&&f.windowKey==="welcome"&&h.jsx(Pn,{items:_,onClose:g,position:"top"})]}),r.mounted&&h.jsxs(h.Fragment,{children:[h.jsxs(Ca,{$active:r.visible,onClick:()=>S(r),onContextMenu:I=>m(I,"resume"),title:"Resume","aria-label":"Resume window",children:[pn.PDF,!a&&h.jsx("span",{children:"Resume"})]}),f.visible&&f.windowKey==="resume"&&h.jsx(Pn,{items:E,onClose:g,position:"top"})]})]}),h.jsxs(K8,{children:[j.map(I=>{const L=I.getProps({widgetState:u,setWidgetState:l});return h.jsx(I.component,{...L,id:I.id},I.id)}),h.jsx(q8,{}),h.jsx(l8,{isFullscreen:y,onToggle:b})]})]})},Z8=520,Q8=340,Zr=(e,n,r)=>Math.max(n,Math.min(r,e)),Ll=({close:e,minimize:n,maximized:r=!1,toggleMaximize:s,x:a=140,y:u=60,width:l=900,height:f=560,move:p,resize:m,visible:g=!0,bringToFront:y,z:b,title:k,children:_})=>{const E=C.useRef({x:a,y:u}),S=C.useRef({width:l,height:f});C.useEffect(()=>{E.current={x:a,y:u}},[a,u]),C.useEffect(()=>{S.current={width:l,height:f}},[l,f]);const P=C.useRef(!1),j=C.useRef({mx:0,my:0,sx:0,sy:0}),[,I]=C.useState(!1),L=C.useRef(null),$=C.useCallback(H=>{if(!r){if(P.current){const U=H.clientX-j.current.mx,ne=H.clientY-j.current.my,pe=window.innerWidth,ve=window.innerHeight,fe=Zr(j.current.sx+U,-S.current.width+10,pe-10),oe=Zr(j.current.sy+ne,-S.current.height+10,ve-10);return p&&p(fe,oe)}else if(L.current){const{dir:U,mx:ne,my:pe,sx:ve,sy:fe,sw:oe,sh:re}=L.current;let ue=oe,q=re,me=ve,De=fe;const N=H.clientX-ne,te=H.clientY-pe;U.includes("e")&&(ue=oe+N),U.includes("s")&&(q=re+te),U.includes("w")&&(ue=oe-N,me=ve+N),U.includes("n")&&(q=re-te,De=fe+te),ue=Math.max(Z8,ue),q=Math.max(Q8,q);const Me=window.innerWidth,$e=window.innerHeight;return me=Zr(me,-ue+10,Me-10),De=Zr(De,-q+10,$e-10),m&&m(ue,q,me,De)}}},[r,p,m]),W=C.useCallback(()=>{P.current=!1,L.current=null,window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",W);const H=setTimeout(()=>I(!1),0);return()=>clearTimeout(H)},[$]),G=H=>{r||(P.current=!0,I(!1),j.current={mx:H.clientX,my:H.clientY,sx:E.current.x,sy:E.current.y},window.addEventListener("mousemove",$),window.addEventListener("mouseup",W))},B=H=>U=>{r||(U.stopPropagation(),L.current={dir:H,mx:U.clientX,my:U.clientY,sx:E.current.x,sy:E.current.y,sw:S.current.width,sh:S.current.height},I(!1),window.addEventListener("mousemove",$),window.addEventListener("mouseup",W))};return h.jsxs(d5,{x:a,y:u,width:l,height:f,$maximized:r,hidden:!g,$isTransforming:!P.current&&!L.current,z:b,onClick:y,children:[h.jsxs(p5,{onMouseDown:H=>(G(H),y&&y()),children:[h.jsx(m5,{children:k}),h.jsxs(g5,{"aria-label":"Window controls",children:[n&&h.jsx(ra,{$variant:"min",title:"Minimize","aria-label":"Minimize",onClick:n,children:h.jsx("svg",{viewBox:"0 0 10 10","aria-hidden":"true",children:h.jsx("rect",{x:"1",y:"5",width:"8",height:"1",rx:"0.5"})})}),s&&h.jsx(ra,{$variant:"max",title:"Maximize","aria-label":"Maximize",onClick:s,children:h.jsx("svg",{viewBox:"0 0 10 10","aria-hidden":"true",children:h.jsx("rect",{x:"2",y:"2",width:"6",height:"6",fill:"none",stroke:"currentColor",strokeWidth:"1"})})}),h.jsx(ra,{$variant:"close",title:"Close","aria-label":"Close",onClick:e,children:h.jsx("svg",{viewBox:"0 0 10 10","aria-hidden":"true",children:h.jsx("path",{d:"M2 2 L8 8 M8 2 L2 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),!r&&h.jsxs(h.Fragment,{children:[h.jsx(hn,{$pos:"n",onMouseDown:B("n")}),h.jsx(hn,{$pos:"s",onMouseDown:B("s")}),h.jsx(hn,{$pos:"e",onMouseDown:B("e")}),h.jsx(hn,{$pos:"w",onMouseDown:B("w")}),h.jsx(hn,{$pos:"ne",onMouseDown:B("ne")}),h.jsx(hn,{$pos:"nw",onMouseDown:B("nw")}),h.jsx(hn,{$pos:"se",onMouseDown:B("se")}),h.jsx(hn,{$pos:"sw",onMouseDown:B("sw")})]}),_]})},J8=D.div`
  ${({theme:e})=>e.backgroundImage&&`
    height: 36px; display:flex; align-items:center; padding: 0 12px 0 16px;
    background: rgba(24, 24, 24, 0.85);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-family: system-ui, -apple-system, sans-serif;
    justify-content: space-between;
    gap: 12px;
  `}
`,e7=D.div`
  flex: 1;
  height: 24px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #eceff4;
  font-size: 13px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,t7=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,n7=D.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  color: #eceff4;
  text-decoration: none;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    transform 0.1s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    transform: translateY(1px);
  }
`,i7=D.div`
  height: ${({$maximized:e})=>e?"calc(100vh - 32px - 36px - 50px)":"calc(100% - 32px - 36px)"};
  overflow: hidden;
`,r7=D.div`
  width: 100%;
  height: 100%;
  & iframe,
  & embed {
    width: 100%;
    height: 100%;
    border: 0;
  }
`,s7=e=>{const r=C.useContext(Ki)?.resumePath;return h.jsxs(Ll,{...e,title:"Resume",children:[h.jsxs(J8,{children:[h.jsx(e7,{children:r}),h.jsx(t7,{children:h.jsxs(n7,{href:r,download:!0,children:[h.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[h.jsx("path",{d:"M12 3v12m0 0l-4-4m4 4l4-4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M5 21h14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),"Download"]})})]}),h.jsx(i7,{$maximized:e.maximized,children:h.jsx(r7,{children:h.jsx("iframe",{src:`${r}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`,title:"Resume PDF"})})})]})},o7=D.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  p {
    margin-top: 0.5rem;
    line-height: 1.5rem;
  }
`,a7=D.span`
  font-weight: 700;
`;D.span`
  font-weight: 700;
`;const l7=()=>h.jsxs(o7,{"data-testid":"about",children:[h.jsxs("p",{children:["Hi, my name is"," ",h.jsx(a7,{children:xe.personalInfo.name}),"."]}),xe.personalInfo.aboutMe]}),Ii=D.div`
  padding-bottom: 0.25rem;
`,oi=D.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`,Dl=D.div`
  margin-top: ${e=>e.$marginY?"0.75rem":"0.25rem"};
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
`,_t=C.createContext({arg:[],history:[],rerender:!1,index:0}),c7=()=>{const{arg:e,clearHistory:n}=C.useContext(_t);return C.useEffect(()=>{e.length<1&&n?.()},[]),e.length>0?h.jsx(Dl,{children:"Usage: clear"}):h.jsx(h.Fragment,{})},u7=()=>{const{arg:e}=C.useContext(_t);let n=Ue.join(e," ");return n=Ue.trim(n,"'"),n=Ue.trim(n,'"'),n=Ue.trim(n,"`"),h.jsx(oi,{children:n})},f7=D.div`
  margin-bottom: 0.75rem;
`,h7=D.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .desc {
    color: ${({theme:e})=>e.colors?.text[200]};
  }
`,d7=()=>h.jsxs(oi,{"data-testid":"education",children:[h.jsx(f7,{children:"Education:"}),p7.map(({title:e,desc:n})=>h.jsxs(h7,{children:[h.jsx("div",{className:"title",children:e}),h.jsx("div",{className:"desc",children:n})]},e))]}),p7=[{title:"Master of Science in Computer Science",desc:"University of Geneva | 2018 - 2020"},{title:"Bachelor of Engineering in Computer Science",desc:"KCG College of Technology | 2014 - 2018"}],m7=()=>{const{history:e,rerender:n}=C.useContext(_t),r=Ue.split(e[0]," ");n&&r[0]==="email"&&r.length<=1&&window.open("mailto:"+xe.personalInfo.email,"_self");const s=()=>{window.open("mailto:"+xe.personalInfo.email,"_self")};return h.jsxs(oi,{children:[h.jsx("span",{onClick:s,style:{cursor:"pointer",textDecoration:"underline",color:"inherit"},children:xe.personalInfo.email}),h.jsxs(oi,{children:["(or) ",h.jsx("br",{}),"Open the Email app on desktop to get it touch with me."," "]})]})},dn=({children:e})=>h.jsx(oi,{children:e}),g7=()=>{const{history:e,rerender:n,setRerender:r}=C.useContext(_t),s=e.at(-1);if(n&&r&&s==="resume"){const u=C.useContext(Ki)?.resumePath;window.open(u,"_blank"),r(!1)}return h.jsx("span",{})},f0=D.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`,h0=D.div`
  margin-bottom: 0.25rem;
`,d0=D.span`
  color: ${({theme:e})=>e.colors?.text[300]};

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`,p0=D.span`
  color: ${({theme:e})=>e.colors?.text[200]};
  margin-bottom: 0.75rem;

  @media (max-width: 550px) {
    display: block;
  }
`,x7=D.div`
  font-size: 0.875rem;
  margin-top: 1rem;

  @media (max-width: 550px) {
    display: none;
  }

  div {
    margin-top: 0.25rem;
  }
`,il=[{cmd:"about",desc:`about ${xe.personalInfo.name}`,tab:8},{cmd:"clear",desc:"clear the terminal",tab:8},{cmd:"echo",desc:"print out anything",tab:9},{cmd:"education",desc:"my education background",tab:4},{cmd:"email",desc:"send me an email",tab:8},{cmd:"resume",desc:"go to my resume",tab:7},{cmd:"help",desc:"check available commands",tab:9},{cmd:"history",desc:"view command history",tab:6},{cmd:"projects",desc:"view projects that I've coded",tab:5},{cmd:"pwd",desc:"print current working directory",tab:10},{cmd:"socials",desc:"check out my social accounts",tab:6},{cmd:"welcome",desc:"display hero section",tab:6},{cmd:"whoami",desc:"about current user",tab:7}],v7=["sudo","neofetch","uname","ls"],y7=()=>{const{executeCommand:e}=C.useContext(_t),n=r=>{e&&e(r)};return h.jsxs(f0,{"data-testid":"help",children:[il.map(({cmd:r,desc:s,tab:a})=>h.jsxs(h0,{children:[h.jsx(d0,{onClick:()=>n(r),style:{cursor:"pointer"},children:r}),ns(a),h.jsxs(p0,{children:["- ",s]})]},r)),h.jsxs(x7,{children:[h.jsx("div",{children:"Tab or Ctrl + i  => autocompletes the command"}),h.jsxs("div",{children:["Up Arrow ",ns(5)," => go back to previous command"]}),h.jsxs("div",{children:["Ctrl + l ",ns(5)," => clear the terminal"]}),h.jsx("div",{children:"Click on any command above to execute it"})]})]})},b7=D.div`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }

  div {
    @media (min-width: 1024px) {
      flex-basis: 50%;
    }
  }
`,w7=D.pre`
  margin-top: 0.5rem;

  @media (max-width: 550px) {
    display: none;
  }
`,C7=D.div`
  text-align: center;
`,S7=D.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 550px) {
    display: none;
  }
`,T7=D.pre`
  @media (max-width: 550px) {
    display: none;
  }
`;D.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;const _7=D.span`
  color: ${({theme:e})=>e.colors?.text[300]};

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;D.a`
  color: ${({theme:e})=>e.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({theme:e})=>e.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;const M7=()=>{const{executeCommand:e}=C.useContext(_t),n=()=>{e&&e("help")};return h.jsx(b7,{"data-testid":"welcome",children:h.jsxs("div",{className:"info-section",children:[h.jsx(w7,{children:`
                  ***** **                                                       **    
     ******  ****                                                       **   
    **   *  *  ***                                                      **   
   *    *  *    ***                                                     **   
       *  *      ** ***  ****                  ****                     **   
      ** **      **  **** **** *    ****      * **** *    ****      *** **   
      ** **      **   **   ****    * ***  *  **  ****    * ***  *  ********* 
    **** **      *    **          *   ****  ****        *   ****  **   ****  
   * *** **     *     **         **    **     ***      **    **   **    **   
      ** *******      **         **    **       ***    **    **   **    **   
      ** ******       **         **    **         ***  **    **   **    **   
      ** **           **         **    **    ****  **  **    **   **    **   
      ** **           ***        **    **   * **** *   **    **   **    **   
      ** **            ***        ***** **     ****     ***** **   *****     
 **   ** **                        ***   **              ***   **   ***      
***   *  *                                                                   
 ***    *                                                                    
  ******                                                                     
    ***      
          `}),h.jsx(C7,{children:h.jsx(S7,{children:`
        ***** **                                                       **    
     ******  ****                                                       **   
    **   *  *  ***                                                      **   
   *    *  *    ***                                                     **   
       *  *      ** ***  ****                  ****                     **   
      ** **      **  **** **** *    ****      * **** *    ****      *** **   
      ** **      **   **   ****    * ***  *  **  ****    * ***  *  ********* 
    **** **      *    **          *   ****  ****        *   ****  **   ****  
   * *** **     *     **         **    **     ***      **    **   **    **   
      ** *******      **         **    **       ***    **    **   **    **   
      ** ******       **         **    **         ***  **    **   **    **   
      ** **           **         **    **    ****  **  **    **   **    **   
      ** **           ***        **    **   * **** *   **    **   **    **   
      ** **            ***        ***** **     ****     ***** **   *****     
 **   ** **                        ***   **              ***   **   ***      
***   *  *                                                                   
 ***    *                                                                    
  ******                                                                     
    ***      
          `})}),h.jsxs("div",{children:["For a list of available commands, type `",h.jsx(_7,{onClick:n,style:{cursor:"pointer"},children:"help"}),"`"]}),h.jsx("br",{})]})})},A7=()=>{const{history:e,index:n,executeCommand:r}=C.useContext(_t),s=Ue.reverse(Ue.slice(e,n)),a=u=>{r&&r(u)};return h.jsx(oi,{"data-testid":"history",children:s.map(u=>h.jsx("div",{onClick:()=>a(u),style:{cursor:"pointer",textDecoration:"underline",color:"inherit"},children:u},Ue.uniqueId(`${u}_`)))})},E7=D.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`,k7=D.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`,P7=D.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: ${({theme:e})=>e.colors?.primary};

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`,R7=D.div`
  color: ${({theme:e})=>e.colors?.text[200]};
  text-align: justify;
  line-height: 1.5rem;
  max-width: 500px;
`,Sa={projects:{placeholder:"project-no",example:"4"},socials:{placeholder:"social-no",example:"1"}},Ts=({cmd:e,$marginY:n=!1})=>{const{executeCommand:r}=C.useContext(_t),s="go",a=()=>{r&&r(`${e} ${s} ${Sa[e].example}`)};return h.jsxs(Dl,{"data-testid":`${e}-invalid-arg`,$marginY:n,children:["Usage: ",e," ",s," <",Sa[e].placeholder,"> ",h.jsx("br",{}),"eg:"," ",h.jsxs("span",{onClick:a,style:{cursor:"pointer",textDecoration:"underline",color:"inherit"},children:[e," ",s," ",Sa[e].example]})]})},j7=()=>{const{arg:e,setRerender:n,history:r,rerender:s}=C.useContext(_t),a=r.at(-1),u=f=>(window.open(f,"_blank"),n?.(!1),null),l=()=>Cd(e,"go",["1","2","3","4"])?h.jsx(Ts,{cmd:"projects"}):s&&n&&a===`projects ${e.join(" ")}`&&u(xe.projects.data?.[parseInt(e[1])-1].href);return e.length>0||e.length>2?l():h.jsxs("div",{"data-testid":"projects",children:[xe.projects.data?.map(({value:f,description:p,href:m=""},g)=>h.jsxs(E7,{children:[h.jsx(P7,{onClick:()=>u(m),style:{cursor:"pointer"},children:`${g+1}. ${f}`}),h.jsx(R7,{children:p})]},g)),h.jsx(Ts,{cmd:"projects",$marginY:!0})]})},I7=()=>{const{arg:e,history:n,rerender:r,setRerender:s}=C.useContext(_t),a=n.at(-1),u=f=>(window.open(f,"_blank"),s?.(!1),null),l=()=>Cd(e,"go",["1","2","3","4"])?h.jsx(Ts,{cmd:"socials"}):r&&s&&a===`socials ${e.join(" ")}`&&u(xe.personalInfo.socials[parseInt(e[1])-1].href);return e.length>0||e.length>2?l():h.jsxs(f0,{"data-testid":"socials",children:[h.jsx(k7,{children:"Here are my social links"}),xe.personalInfo.socials.map(({value:f,href:p=""},m)=>h.jsxs(h0,{children:[h.jsx(d0,{onClick:()=>u(p),style:{cursor:"pointer"},children:`${m+1}. ${f}`}),ns(m+1),h.jsxs(p0,{children:["- ",p]})]},m)),h.jsx(Ts,{cmd:"socials",$marginY:!0})]})},L7=({index:e,cmd:n})=>{const{arg:r}=C.useContext(_t);if(!["projects","socials","echo"].includes(n)&&r.length>0)return h.jsxs(Dl,{"data-testid":"usage-output",children:["Usage: ",n]});if(n==="sudo"){const a=["sudo",...r].join(" ");return h.jsxs(Ii,{children:[h.jsxs(dn,{children:[a,": command not found"]}),h.jsx(dn,{children:"Hint: sudo: unable to resolve host linux: Name or service not known"}),h.jsx(dn,{children:"Hint: you are already root"})]})}return n==="neofetch"?h.jsx(Ii,{children:h.jsx(dn,{children:`Linux 2026.2 
 Kernel: 6.5.0-linux-amd64 
 Shell: bash 5.2.15 
 Resolution: 1920x1080 
 DE: XFCE 
 WM: Xfwm4 
 CPU: Intel i7-9750H (12) @ 4.5GHz 
 Memory: 2.1GiB / 16GiB`})}):n==="uname"?h.jsx(Ii,{children:h.jsx(dn,{children:"Linux"})}):n==="ls"?h.jsx(Ii,{children:h.jsx(dn,{children:"Desktop Documents Downloads Music Pictures Public Templates Videos"})}):h.jsx(Ii,{"data-testid":e===0?"latest-output":null,children:{about:h.jsx(l7,{}),clear:h.jsx(c7,{}),echo:h.jsx(u7,{}),education:h.jsx(d7,{}),email:h.jsx(m7,{}),resume:h.jsx(g7,{}),help:h.jsx(y7,{}),history:h.jsx(A7,{}),projects:h.jsx(j7,{}),pwd:h.jsxs(dn,{children:["/home/",xe.personalInfo.uname]}),socials:h.jsx(I7,{}),welcome:h.jsx(M7,{}),whoami:h.jsx(dn,{children:"linux"})}[n]})},D7=D.span`
  display: inline-block;
  margin-right: 0.75rem;
`,F7=D.span`
  color: #ff6b6b;
`,V7=D.span`
  color: #ff6b6b;
`,Zh=()=>{const n=C.useContext(Ki)?.currentTheme.id;return h.jsxs(D7,{children:[h.jsx(V7,{children:n}),"@",h.jsx(F7,{children:n}),":~$"]})},O7=D.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 0;

  padding: 1.25rem;
  padding-top: 0.75rem;

  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;

  /* Prettier, modern scrollbar for the terminal */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: ${({theme:e})=>e.colors?.scrollHandle} transparent; /* Firefox */

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.22),
      rgba(0, 0, 0, 0.28)
    );
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.colors?.scrollHandle},
      ${({theme:e})=>e.colors?.scrollHandleHover}
    );
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: padding-box;
    transition:
      background 0.2s ease,
      border-color 0.2s ease;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.colors?.scrollHandleHover},
      ${({theme:e})=>e.colors?.scrollHandleHover}
    );
    border-color: transparent;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  ${({theme:e})=>e.backgroundImage&&`
    /* Let the window frame provide the glass backdrop; keep inner terminal transparent */
    background-color: transparent;
  `}
`,z7=D.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`,B7=D.div`
  margin-bottom: 0.25rem;
`,Qh=D.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`,Jh=D.br`
  @media (min-width: 550px) {
    display: none;
  }
`,$7=D.form`
  @media (min-width: 550px) {
    display: flex;
  }
`,W7=D.input`
  flex-grow: 1;

  @media (max-width: 550px) {
    min-width: 85%;
  }
`,U7=D.span`
  margin-right: 0.875rem;
`,H7=()=>{const e=C.useRef(null),n=C.useRef(null),[r,s]=C.useState(""),[a,u]=C.useState(["welcome","about"]),[l,f]=C.useState(!1),[p,m]=C.useState([]),[g,y]=C.useState(null),b=C.useCallback(j=>{f(!1),s(j.target.value)},[r]),k=j=>{j.preventDefault(),u([...a,r]),s(""),f(!0),m([]),y(null)},_=()=>{u([]),m([])},E=j=>{u([...a,j]),f(!0),m([]),y(null)},S=()=>{n.current&&n.current.focus()},P=j=>{f(!1);const I=j.ctrlKey&&j.key.toLowerCase()==="i",L=j.ctrlKey&&j.key.toLowerCase()==="l";if(j.key==="Tab"||I){if(j.preventDefault(),!r)return;let $=[];il.forEach(({cmd:G})=>{Ue.startsWith(G,r)&&($=[...$,G])});const W=J5(r,s,m,$);if($=W?[...$,...W]:$,$.length>1)m($);else if($.length===1){const G=Ue.split(r," ");s(G.length!==1?`${G[0]} ${G[1]} ${$[0]}`:$[0]),m([])}}if(L&&_(),j.key==="ArrowUp"){if(a.length===0)return;const $=g===null?a.length-1:Math.max(0,g-1);y($),s(a[$]),n?.current?.blur()}if(j.key==="ArrowDown"){if(g===null)return;if(g===a.length-1){s(""),y(null);return}const $=Math.min(a.length-1,g+1);y($),s(a[$]),n?.current?.blur()}};return C.useEffect(()=>{const j=setTimeout(()=>{n?.current?.focus()},1);return()=>clearTimeout(j)},[n,r,g]),C.useEffect(()=>{const j=e?.current;j&&(j.scrollTop=j.scrollHeight)},[a,l]),h.jsxs(O7,{"data-testid":"terminal-wrapper",ref:e,onClick:S,children:[a.map((j,I)=>{const L=Ue.split(Ue.trim(j)," "),$=Ue.find(il,{cmd:L[0]}),W={arg:Ue.drop(L),history:a,rerender:l,index:I,clearHistory:_,executeCommand:E,setRerender:f};return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx(Zh,{}),h.jsx(Jh,{}),h.jsx(Qh,{children:">"}),h.jsx("span",{"data-testid":"input-command",children:j})]}),$||v7.includes(L[0])?h.jsx(_t.Provider,{value:W,children:h.jsx(L7,{index:I,cmd:L[0]})}):j===""?h.jsx(B7,{}):h.jsxs(z7,{"data-testid":`not-found-${I}`,children:["command not found: ",j]})]},Ue.uniqueId(`${j}_`))}),p.length>1&&h.jsx("div",{children:p.map(j=>h.jsx(U7,{children:j},j))}),h.jsxs($7,{onSubmit:k,children:[h.jsxs("label",{htmlFor:"terminal-input",children:[h.jsx(Zh,{})," ",h.jsx(Jh,{}),h.jsx(Qh,{children:">"})]}),h.jsx(W7,{title:"terminal-input",type:"text",id:"terminal-input",autoComplete:"off",spellCheck:"false",autoFocus:!0,autoCapitalize:"off",ref:n,value:r,onKeyDown:P,onChange:b})]})]})},N7=D.div`
  ${({theme:e})=>e.backgroundImage&&`
    background: rgba(24, 24, 24, 0.85);
    height: 28px; display: flex; align-items: center; padding: 0 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-family: system-ui, -apple-system, sans-serif;
  `}
`,Jn=D.span`
  ${({theme:e})=>e.backgroundImage&&`
    font-size: 12px; color: #ECEFF4; padding: 4px 8px; cursor: pointer; border-radius: 4px; transition: all 0.2s ease;
    &:hover { background: rgba(255, 255, 255, 0.08); transform: translateY(-1px); }
  `}
`,G7=D.div`
  ${({theme:e})=>e.backgroundImage&&`
    font-size: 0.8rem; background: transparent; display: flex; flex-direction: column; align-items: stretch; overflow: hidden;
  `}
  height: ${({$maximized:e})=>e?"calc(100vh - 32px - 28px - 50px)":"calc(100% - 32px - 28px)"};
  & > * {
    flex: 1 1 auto;
    min-height: 0;
  }
`,K7=e=>h.jsxs(Ll,{...e,title:"Terminal",children:[h.jsxs(N7,{children:[h.jsx(Jn,{children:"File"}),h.jsx(Jn,{children:"Edit"}),h.jsx(Jn,{children:"View"}),h.jsx(Jn,{children:"Search"}),h.jsx(Jn,{children:"Terminal"}),h.jsx(Jn,{children:"Help"})]}),h.jsx(G7,{$maximized:e.maximized,children:h.jsx(H7,{})})]}),Y7=({close:e,minimize:n,maximized:r=!1,toggleMaximize:s,x:a=140,y:u=60,width:l=900,height:f=560,move:p,resize:m,visible:g=!0,bringToFront:y,z:b,children:k,mounted:_,href:E})=>{const S=()=>{E&&window.open(E,"_blank")};return h.jsxs(Ll,{mounted:_,close:e,minimize:n,maximized:r,toggleMaximize:s,x:a,y:u,width:l,height:f,move:p,resize:m,visible:g,bringToFront:y,z:b,title:"Browser",children:[h.jsx(x5,{children:h.jsx(v5,{children:xe.personalInfo.website+E})}),h.jsx(y5,{$maximized:r,children:E&&!Sd(E)?h.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[h.jsx("iframe",{src:E,style:{width:"100%",height:"100%",border:"none",backgroundColor:"white"},title:`Browser - ${E}`,sandbox:"allow-scripts allow-same-origin allow-forms allow-popups",referrerPolicy:"no-referrer"}),h.jsx("div",{style:{position:"absolute",bottom:16,right:16},children:h.jsx("button",{onClick:S,style:{padding:"8px 16px",backgroundColor:"#2e3440",color:"#eceff4",border:"none",borderRadius:6,cursor:"pointer",fontSize:12,fontWeight:500},children:"Open in new tab ↗"})})]}):k})]})},q7={textDecoration:"none",padding:"8px 12px",borderRadius:"999px",fontSize:"0.92rem"},X7=({href:e,style:n,value:r})=>h.jsx("a",{href:e,target:"_blank",rel:"noreferrer",style:{...q7,...n},children:r});var m0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ed=Be.createContext&&Be.createContext(m0),Z7=["attr","size","title"];function Q7(e,n){if(e==null)return{};var r,s,a=J7(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(s=0;s<u.length;s++)r=u[s],n.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function J7(e,n){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function _s(){return _s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},_s.apply(null,arguments)}function td(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,s)}return r}function Ms(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?td(Object(r),!0).forEach(function(s){eC(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):td(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function eC(e,n,r){return(n=tC(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function tC(e){var n=nC(e,"string");return typeof n=="symbol"?n:n+""}function nC(e,n){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,n);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function g0(e){return e&&e.map((n,r)=>Be.createElement(n.tag,Ms({key:r},n.attr),g0(n.child)))}function Pe(e){return n=>Be.createElement(iC,_s({attr:Ms({},e.attr)},n),g0(e.child))}function iC(e){var n=r=>{var s=e.attr,a=e.size,u=e.title,l=Q7(e,Z7),f=a||r.size||"1em",p;return r.className&&(p=r.className),e.className&&(p=(p?p+" ":"")+e.className),Be.createElement("svg",_s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,l,{className:p,style:Ms(Ms({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&Be.createElement("title",null,u),e.children)};return ed!==void 0?Be.createElement(ed.Consumer,null,r=>n(r)):n(m0)}function rC(e){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"},child:[]}]})(e)}function sC(e){return Pe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm52.7 93c8.8-15.2 28.3-20.5 43.5-11.7 15.3 8.8 20.5 28.3 11.7 43.6-8.8 15.2-28.3 20.5-43.5 11.7-15.3-8.9-20.5-28.4-11.7-43.6zM87.4 287.9c-17.6 0-31.9-14.3-31.9-31.9 0-17.6 14.3-31.9 31.9-31.9 17.6 0 31.9 14.3 31.9 31.9 0 17.6-14.3 31.9-31.9 31.9zm28.1 3.1c22.3-17.9 22.4-51.9 0-69.9 8.6-32.8 29.1-60.7 56.5-79.1l23.7 39.6c-51.5 36.3-51.5 112.5 0 148.8L172 370c-27.4-18.3-47.8-46.3-56.5-79zm228.7 131.7c-15.3 8.8-34.7 3.6-43.5-11.7-8.8-15.3-3.6-34.8 11.7-43.6 15.2-8.8 34.7-3.6 43.5 11.7 8.8 15.3 3.6 34.8-11.7 43.6zm.3-69.5c-26.7-10.3-56.1 6.6-60.5 35-5.2 1.4-48.9 14.3-96.7-9.4l22.5-40.3c57 26.5 123.4-11.7 128.9-74.4l46.1.7c-2.3 34.5-17.3 65.5-40.3 88.4zm-5.9-105.3c-5.4-62-71.3-101.2-128.9-74.4l-22.5-40.3c47.9-23.7 91.5-10.8 96.7-9.4 4.4 28.3 33.8 45.3 60.5 35 23.1 22.9 38 53.9 40.2 88.5l-46 .6z"},child:[]}]})(e)}function oC(e){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"},child:[]}]})(e)}function aC(e){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M289.6 97.5l31.6 31.7-76.3 76.5V97.5zm-162.4 31.7l76.3 76.5V97.5h-44.7zm41.5-41.6h44.7v127.9l10.8 10.8 10.8-10.8V87.6h44.7L224.2 32zm26.2 168.1l-10.8-10.8H55.5v-44.8L0 255.7l55.5 55.6v-44.8h128.6l10.8-10.8zm79.3-20.7h107.9v-44.8l-31.6-31.7zm173.3 20.7L392 200.1v44.8H264.3l-10.8 10.8 10.8 10.8H392v44.8l55.5-55.6zM65.4 176.2l32.5-31.7 90.3 90.5h15.3v-15.3l-90.3-90.5 31.6-31.7H65.4zm316.7-78.7h-78.5l31.6 31.7-90.3 90.5V235h15.3l90.3-90.5 31.6 31.7zM203.5 413.9V305.8l-76.3 76.5 31.6 31.7h44.7zM65.4 235h108.8l-76.3-76.5-32.5 31.7zm316.7 100.2l-31.6 31.7-90.3-90.5h-15.3v15.3l90.3 90.5-31.6 31.7h78.5zm0-58.8H274.2l76.3 76.5 31.6-31.7zm-60.9 105.8l-76.3-76.5v108.1h44.7zM97.9 352.9l76.3-76.5H65.4v44.8zm181.8 70.9H235V295.9l-10.8-10.8-10.8 10.8v127.9h-44.7l55.5 55.6zm-166.5-41.6l90.3-90.5v-15.3h-15.3l-90.3 90.5-32.5-31.7v78.7h79.4z"},child:[]}]})(e)}function lC(e){return Pe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"},child:[]}]})(e)}function cC(e){return Pe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function uC(e){return Pe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},child:[]}]})(e)}function fC(e){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function hC(e){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(e)}function dC(e){return Pe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(e)}function pC(e){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function mC(e){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function gC(e){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function xC(e){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function vC(e){return Pe({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z"},child:[]}]})(e)}function yC(e){return Pe({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155"},child:[]}]})(e)}function bC(e){return Pe({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.805 2.197v.066h.156v.44h.072v-.44h.156v-.066zm.9 0l-.175.353-.172-.353h-.087v.506h.067V2.3l.172.35h.045l.172-.35v.404h.066v-.506zm-4.257 1c-.204.31-.424.66-.66 1.06l-.04.062a44.457 44.457 0 00-1.265 2.29c-.187.36-.38.742-.577 1.146l2.267-.25c.66-.302.955-.578 1.242-.976a15.5 15.5 0 00.23-.342c.23-.363.46-.763.663-1.16.197-.386.37-.767.505-1.11.083-.22.15-.422.198-.6.042-.158.074-.307.1-.45-.884.15-1.965.295-2.668.33zM11.894 7.78l-.077.16c-.078.16-.157.32-.236.488-.086.18-.172.364-.26.552l-.132.287a75.265 75.265 0 00-1.427 3.3c-.163.397-.327.807-.493 1.23-.15.38-.297.765-.45 1.164l-.02.06c-.15.396-.3.802-.453 1.22l-.01.027.72-.08a.213.213 0 01-.042-.006c.863-.106 2.01-.75 2.75-1.547.342-.367.652-.8.94-1.306.213-.377.413-.795.604-1.258.168-.405.328-.843.48-1.318-.196.105-.423.18-.673.235a2.184 2.184 0 01-.273.046c.806-.31 1.314-.905 1.683-1.64a2.816 2.816 0 01-.968.428c-.06.012-.116.022-.174.03l-.043.006h.002c.278-.118.514-.248.718-.403a2.571 2.571 0 00.637-.698l.063-.104.077-.154a8.107 8.107 0 00.367-.85l.03-.088a3.04 3.04 0 00.123-.463.733.733 0 01-.094.065c-.243.145-.66.277-.996.34l.663-.074-.664.073h-.017l-.1.017c.006-.003.01-.006.017-.008l-2.265.25-.013.022zM8.27 16.45c-.117.323-.236.654-.355.992l-.005.015c-.016.046-.032.094-.05.142-.08.227-.15.432-.31.9.264.12.475.435.675.793a1.44 1.44 0 00-.466-.99c1.293.06 2.41-.27 2.99-1.217.05-.084.096-.173.14-.268-.26.333-.59.474-1.2.44 0 0-.004 0-.005.002l.004-.002c.9-.404 1.354-.79 1.754-1.433.094-.153.186-.32.28-.503-.788.81-1.702 1.04-2.664.865l-.72.078a6.43 6.43 0 00-.067.183zM15.42.112c-.376.222-1 .85-1.748 1.763l.686 1.294c.48-.687.97-1.307 1.462-1.836l.058-.062c-.02.02-.04.04-.057.062-.16.176-.644.74-1.375 1.863.703-.035 1.784-.18 2.666-.33.262-1.47-.258-2.142-.258-2.142s-.66-1.07-1.436-.61zm-3.084 6.402a40.253 40.253 0 011.306-2.26l.04-.064c.224-.352.45-.693.677-1.02l-.685-1.293-.157.192c-.197.245-.403.51-.613.79a39.853 39.853 0 00-2.016 2.97l-.022.038.893 1.763c.19-.378.38-.752.575-1.118zm-3.73 8.32c.158-.406.319-.81.483-1.225.156-.394.32-.79.484-1.19a91.133 91.133 0 011.6-3.604l.205-.424c.12-.243.237-.485.36-.724a.125.125 0 01.02-.04l-.895-1.763-.044.07c-.207.34-.414.687-.617 1.042a38.056 38.056 0 00-1.092 2.04l-.094.193a24.573 24.573 0 00-1.258 3.087 18.492 18.492 0 00-.52 1.997l.896 1.77c.117-.317.24-.638.364-.963zm-1.376-.476a13.38 13.38 0 00-.234 1.692c0 .02-.004.04-.005.06-.28-.45-1.03-.888-1.026-.884.537.778.944 1.55 1.005 2.31-.29.058-.684-.027-1.14-.195.475.436.83.556.97.588-.434.03-.89.328-1.346.67.668-.27 1.21-.38 1.596-.29-.61 1.74-1.23 3.655-1.843 5.69a.538.538 0 00.364-.354c.11-.368.84-2.786 1.978-5.965l.097-.27.028-.078c.12-.332.246-.672.374-1.02l.09-.237v-.004L7.24 14.3c-.003.02-.01.04-.012.06z"},child:[]}]})(e)}const Qr={"Microsoft 365 & Windows":[{icon:oC,href:"https://www.microsoft.com/en-us/microsoft-365",label:"Microsoft 365"},{icon:rC,href:"https://www.microsoft.com/en-us/windows-server",label:"Windows Server 2019/2022"},{icon:cC,href:"https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",label:"Active Directory & GPO"},{icon:mC,href:"https://www.microsoft.com/en-us/microsoft-365/exchange/email",label:"Exchange Online"}],Networking:[{icon:yC,href:"https://www.cisco.com/",label:"Cisco L2/L3 Switching"},{icon:dC,href:"https://en.wikipedia.org/wiki/Virtual_LAN",label:"VLANs / OSPF / BGP"},{icon:hC,href:"https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-top",label:"DNS / DHCP"},{icon:pC,href:"https://en.wikipedia.org/wiki/Virtual_private_network",label:"VPN / SSL/TLS"}],"Systems & Cloud":[{icon:sC,href:"https://ubuntu.com/",label:"Ubuntu"},{icon:aC,href:"https://www.centos.org/",label:"CentOS"},{icon:lC,href:"https://aws.amazon.com/",label:"AWS (EC2, S3, IAM, VPC)"},{icon:bC,href:"https://httpd.apache.org/",label:"Apache"},{icon:vC,href:"https://nginx.org/",label:"Nginx"},{icon:uC,href:"https://www.gnu.org/software/bash/",label:"Bash Scripting"}],"Security & Operations":[{icon:fC,href:"https://en.wikipedia.org/wiki/Firewall_(computing)",label:"Firewall Management"},{icon:xC,href:"https://www.zabbix.com/",label:"Zabbix Monitoring"},{icon:gC,href:"https://en.wikipedia.org/wiki/Backup",label:"Backup & Recovery"}]},wC=D.section`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 32px 0;
`,CC=D.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);
`,SC=D.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,TC=D.img`
  margin-right: auto;
`,_C=D.p`
  margin: 6px 0 0 0;
  font-size: 1.05rem;
  color: #d8dee9;
`,MC=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
`,AC=()=>{const n=C.useContext(Ki)?.resumePath,r=xe.quickLinks.map(s=>s.value==="Resume"?{...s,href:n}:s);return h.jsxs("div",{children:[h.jsxs(wC,{children:[h.jsx(T7,{children:h.jsx(CC,{src:xe.personalInfo.profileImage,alt:xe.personalInfo.name})}),h.jsxs(SC,{children:[h.jsx(TC,{src:xe.personalInfo.fullNameLogo,alt:xe.personalInfo.name,height:"35"}),h.jsx(_C,{children:xe.personalInfo.title}),h.jsx(MC,{role:"group","aria-label":"Quick links",children:r.map((s,a)=>h.jsx(X7,{href:s.href,value:s.value,style:s.style},a))})]})]}),h.jsxs("section",{style:{marginBottom:"24px"},children:[h.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"1.5rem",color:"#99ddcc",fontWeight:600},children:"About Me"}),h.jsx("p",{style:{margin:0,lineHeight:"1.6",color:"#D8DEE9",fontSize:"1rem"},children:xe.personalInfo.aboutDescription})]}),h.jsxs("section",{style:{padding:"32px 0"},children:[h.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"1.5rem",color:"#99ddcc",fontWeight:600},children:xe.skillsOverview.value}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px"},children:[h.jsxs("div",{style:{display:"flex",flexDirection:"column",background:"rgba(136, 192, 208, 0.1)",padding:"12px",borderRadius:"8px",border:"1px solid rgba(136, 192, 208, 0.25)"},children:[h.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"1rem",color:"#99ddcc"},children:"Microsoft 365 & Windows"}),h.jsx("p",{style:{display:"flex",justifyContent:"center",gap:"10px",margin:0,color:"#D8DEE9",fontSize:"1.5rem"},children:Qr["Microsoft 365 & Windows"].map((s,a)=>h.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},title:s.label,children:h.jsx(s.icon,{})},a))})]}),h.jsxs("div",{style:{background:"rgba(163, 190, 140, 0.1)",padding:"12px",borderRadius:"8px",border:"1px solid rgba(163, 190, 140, 0.25)"},children:[h.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"1rem",color:"#A3BE8C"},children:"Networking"}),h.jsx("p",{style:{display:"flex",justifyContent:"center",gap:"10px",margin:0,color:"#D8DEE9",fontSize:"1.5rem"},children:Qr.Networking.map((s,a)=>h.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},title:s.label,children:h.jsx(s.icon,{})},a))})]}),h.jsxs("div",{style:{background:"rgba(129, 161, 193, 0.1)",padding:"12px",borderRadius:"8px",border:"1px solid rgba(129, 161, 193, 0.25)"},children:[h.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"1rem",color:"#81A1C1"},children:"Security & Operations"}),h.jsx("p",{style:{display:"flex",justifyContent:"center",gap:"10px",margin:0,color:"#D8DEE9",fontSize:"1.5rem"},children:Qr["Security & Operations"].map((s,a)=>h.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},title:s.label,children:h.jsx(s.icon,{})},a))})]}),h.jsxs("div",{style:{background:"rgba(180, 142, 173, 0.1)",padding:"12px",borderRadius:"8px",border:"1px solid rgba(180, 142, 173, 0.25)"},children:[h.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"1rem",color:"#B48EAD"},children:"Systems & Cloud"}),h.jsx("p",{style:{display:"flex",justifyContent:"center",gap:"10px",margin:0,color:"#D8DEE9",fontSize:"1.5rem"},children:Qr["Systems & Cloud"].map((s,a)=>h.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},title:s.label,children:h.jsx(s.icon,{})},a))})]})]})]})]})},EC=D.div`
  position: relative;
  background-color: "linear-gradient(135deg, rgba(136, 192, 208, 0.10) 0%, rgba(94, 129, 172, 0.10) 100%)";
  padding: 2rem;
  cursor: pointer;
  border-radius: 14px;
  border: 1px solid rgba(136, 192, 208, 0.25);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  overflow: hidden;
  --mouse-x: 50%;
  --mouse-y: 50%;
  --spotlight-color: ${e=>e.theme.colors.primary}1A;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      var(--spotlight-color),
      transparent 80%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover::before,
  &:focus-within::before {
    opacity: 0.6;
  }

  &::before,
  &::after,
  > :first-child::before,
  > :first-child::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #99ddcc6a;
    opacity: 0.7;
    pointer-events: none;
  }

  &::before {
    top: 12px;
    left: 14px;
  }
  &::after {
    top: 12px;
    right: 14px;
  }
  > :first-child::before {
    bottom: 12px;
    left: 14px;
  }
  > :first-child::after {
    bottom: 12px;
    right: 14px;
  }
`,rl=({style:e,href:n,value:r,icon:s,iconSize:a,description:u})=>{if(s!==void 0&&typeof s!="string")throw TypeError("Highlight card icons should be strings to local resource or CDN");const l=C.useRef(null),f=p=>{if(!l.current)return;const m=l.current.getBoundingClientRect(),g=p.clientX-m.left,y=p.clientY-m.top;l.current.style.setProperty("--mouse-x",`${g}px`),l.current.style.setProperty("--mouse-y",`${y}px`),l.current.style.setProperty("--spotlight-color","rgba(221, 221, 221, 0.11)")};return h.jsxs(EC,{ref:l,onMouseMove:f,style:{...e},onMouseEnter:p=>{p.currentTarget.style.transform="translateY(-1px)",p.currentTarget.style.boxShadow="0 14px 30px rgba(136, 192, 208, 0.05)"},onClick:()=>window.open(n,"_blank"),onMouseLeave:p=>{p.currentTarget.style.transform="translateY(0)",p.currentTarget.style.boxShadow="none"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px",gap:"10px"},children:[s&&h.jsx("img",{src:s,alt:r,height:a||"24"}),h.jsx("h3",{style:{margin:0,color:"#99ddcc",fontSize:"1.05rem"},children:r})]}),h.jsx("p",{style:{margin:0,lineHeight:1.6,color:"#D8DEE9"},children:u})]})},kC=D.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 32px 0;
`,PC=D.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 16px 0;
  font-size: 1.5rem;
  color: #99ddcc;
  font-weight: 600;
  border-bottom: 2px solid rgba(136, 192, 208, 0.3);
  padding-bottom: 8px;
`,RC=D.p`
  margin: 0 0 20px 0;
  color: #d8dee9;
  line-height: 1.6;
  font-size: 1rem;
`,jC=()=>{const{experience:e,achievements:n}=xe;return h.jsxs("div",{children:[h.jsxs(PC,{children:[e.value,h.jsx("img",{src:xe.personalInfo.logo,alt:xe.personalInfo.name,height:"35"})]}),h.jsx(RC,{children:e.description}),h.jsx(kC,{children:e.data?.map(r=>h.jsx(rl,{...r},r.value))}),h.jsxs("section",{style:{padding:"32px 0"},children:[h.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"1.2rem",color:"#A3BE8C",fontWeight:600},children:n.value}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"12px"},children:n.data?.map(r=>h.jsxs("div",{style:{background:"rgba(163, 190, 140, 0.1)",padding:"12px",borderRadius:"8px",border:"1px solid rgba(163, 190, 140, 0.25)"},children:[h.jsx("h4",{style:{margin:"0 0 6px 0",fontSize:"0.9rem",color:"#A3BE8C"},children:r.value}),h.jsx("p",{style:{margin:0,color:"#D8DEE9",fontSize:"0.85rem"},children:r.description})]},r.value))})]})]})},nd=D.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 32px 0;
`,id=D.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 16px 0;
  font-size: 1.5rem;
  color: #99ddcc;
  font-weight: 600;
  border-bottom: 2px solid rgba(136, 192, 208, 0.3);
  padding-bottom: 8px;
`,IC=()=>{const{education:e,certifications:n}=xe;return h.jsxs(C.Fragment,{children:[h.jsxs(id,{children:[e.value,h.jsx("img",{src:xe.personalInfo.logo,alt:xe.personalInfo.name,height:"35"})]}),h.jsx(nd,{children:e.data?.map(r=>h.jsx(rl,{...r},r.value))}),h.jsx(id,{children:"Certifications"}),h.jsx(nd,{children:n.data?.map(r=>h.jsx(rl,{...r},r.value))})]})},LC={welcome:[{id:"about-me",label:"About Me",content:AC},{id:"experience",label:"Experience",content:jC},{id:"education",label:"Education & Certifications",content:IC}]},Ls=sl`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,DC=sl`
  0% { transform: scale(0.8); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(0.8); opacity: 1; }
`,FC=D.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30px;
  height: 100%;
  scrollbar-width: thin; /* Firefox */
  animation: ${Ls} 0.3s ease-out;
`,VC=D.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 48px;
  width: 60%;
  align-self: center;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    width: 100%;
    align-self: unset;
  }
`,OC=D.div`
  margin-bottom: 32px;
  padding-left: 45px;
  @media (max-width: 550px) {
    padding-left: 0;
  }
`,zC=D.h2`
  color: ${({theme:e})=>e.colors.text[100]};
  margin: 0 0 8px 0;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`,BC=D.p`
  color: ${({theme:e})=>e.colors.text[200]};
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
`,Jr=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`,es=D.label`
  color: ${({theme:e})=>e.colors.text[100]};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`,x0=e=>`
  padding: 14px 16px;
  border: 2px solid #6a6162ff !important;
  border-radius: 10px;
  background-color: transparent !important;  
  color: ${e.colors.text[100]};
  font-size: 0.95rem;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: ${e.colors.text[100]};
    opacity: 0.7;
  }

  &:invalid:not(:placeholder-shown) {
    border-color: #bf616a !important;
  }
`,Ta=D.input`
  ${({theme:e})=>x0(e)}
`,$C=D.textarea`
  ${({theme:e})=>x0(e)}
  min-height: 140px;
  resize: vertical;
  line-height: 1.6;
`,ts=D.span`
  color: #bf616a;
  font-size: 0.8rem;
  font-weight: 500;
  padding-left: 4px;
  animation: ${Ls} 0.2s ease-out;
`,WC=D.button`
  position: relative;
  padding: 14px 28px;
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 12px;
  box-shadow: 0 4px 14px ${({theme:e})=>`${e.colors.primary}40`};
  min-height: 52px;
  width: 100%;
  margin-bottom: 48px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({theme:e})=>`${e.colors.primary}55`};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${({theme:e})=>`${e.colors.primary}40`};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 576px) {
    padding: 12px 20px;
    min-height: 48px;
    font-size: 0.95rem;
  }
`,UC=D.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${DC} 0.8s infinite;
  margin-right: 8px;
  vertical-align: middle;
`,HC=D.div`
  padding: 20px;
  background: linear-gradient(135deg, #a3be8c, #88c0d0);
  color: #2e3440;
  border-radius: 10px;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;
  animation: ${Ls} 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(163, 190, 140, 0.3);
`,NC=D.div`
  padding: 20px;
  background: linear-gradient(135deg, #bf616a, #d08770);
  color: #2e3440;
  border-radius: 10px;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;
  animation: ${Ls} 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(191, 97, 106, 0.3);

  p {
    margin: 8px 0;
    font-weight: 500;
    font-size: 0.95rem;
  }

  a {
    color: #2e3440;
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      color: #eceff4;
    }
  }
`,_a=D.a`
  color: ${({theme:e})=>e.colors.text[200]};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: underline;
  }
`,GC=D.div`
  padding: 24px;
  background-color: ${({theme:e})=>`${e.colors.scrollHandle}10`};
  border-radius: 12px;
  height: fit-content;
  position: sticky;
  top: 0;

  h4 {
    color: ${({theme:e})=>e.colors.text[100]};
    margin: 0 0 16px 0;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    color: ${({theme:e})=>e.colors.text[200]};
    margin: 10px 0;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    word-break: break-all;
  }

  @media (max-width: 576px) {
    padding-bottom: 50px;
    position: static;

    h4 {
      font-size: 0.95rem;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.825rem;
      margin: 8px 0;
    }
  }
`,KC=()=>{const e=C.useRef(null),[n,r]=C.useState({name:"",email:"",subject:"",message:""}),[s,a]=C.useState(!1),[u,l]=C.useState(!1),[f,p]=C.useState(!1),[m,g]=C.useState({}),[y,b]=C.useState(!1),k=S=>{const{name:P,value:j}=S.target;b(!1),r(I=>({...I,[P]:j})),m[P]&&g(I=>{const L={...I};return delete L[P],L}),l(!1),p(!1)},_=()=>{const S={};n.name.trim()||(S.name="Name is required");const P=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return n.email.trim()?P.test(n.email)||(S.email="Please enter a valid email address"):S.email="Email is required",n.subject.trim()||(S.subject="Subject is required"),n.message.trim()||(S.message="Message is required"),g(S),Object.keys(S).length===0},E=async S=>{if(S.preventDefault(),!!_()){b(!0),a(!0),l(!1),p(!1);try{await b5({message:{type:"contact_form",...n,submittedAt:new Date().toISOString(),userAgent:navigator.userAgent}}),hs.info("Email form submitted and saved to database"),l(!0),p(!1),r({name:"",email:"",subject:"",message:""})}catch(P){hs.info(`Email form failed: ${P}`),l(!1),p(!0)}finally{a(!1),b(!1)}}};return C.useEffect(()=>{const S=e?.current;S&&(S.scrollTop=S.scrollHeight)},[u,f,m,s,y]),h.jsxs(FC,{ref:e,children:[h.jsxs(OC,{children:[h.jsx(zC,{children:"Get In Touch"}),h.jsx(BC,{children:"Have a question, project idea, or just want to say hello? Fill out the form below and I'll get back to you as soon as possible."})]}),u&&h.jsx(HC,{children:"✓ Thank you! Your message has been sent successfully."}),f&&h.jsxs(NC,{children:["✗ There was an error sending your message.",h.jsxs("p",{children:["You can email me directly at:"," ",h.jsx("a",{href:`mailto:${xe.personalInfo.email}`,children:xe.personalInfo.email})]}),h.jsx("p",{children:"Or reach out through social links on the right."})]}),h.jsxs(VC,{children:[h.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:20,width:"100%",maxWidth:650},onSubmit:E,name:"contact",method:"POST",noValidate:!0,children:[h.jsxs(Jr,{children:[h.jsx(es,{htmlFor:"name",children:"Name"}),h.jsx(Ta,{id:"name",name:"name",type:"text",placeholder:"Your full name",autoComplete:"name",value:n.name,onChange:k,required:!0}),m.name&&h.jsx(ts,{children:m.name})]}),h.jsxs(Jr,{children:[h.jsx(es,{htmlFor:"email",children:"Email"}),h.jsx(Ta,{id:"email",name:"email",type:"email",placeholder:"your@email.com",autoComplete:"email",value:n.email,onChange:k,required:!0,pattern:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"}),m.email&&h.jsx(ts,{children:m.email})]}),h.jsxs(Jr,{children:[h.jsx(es,{htmlFor:"subject",children:"Subject"}),h.jsx(Ta,{id:"subject",name:"subject",type:"text",placeholder:"What's this about?",autoComplete:"off",value:n.subject,onChange:k,required:!0}),m.subject&&h.jsx(ts,{children:m.subject})]}),h.jsxs(Jr,{children:[h.jsx(es,{htmlFor:"message",children:"Message"}),h.jsx($C,{id:"message",name:"message",placeholder:"Write your message here...",autoComplete:"off",value:n.message,onChange:k,required:!0}),m.message&&h.jsx(ts,{children:m.message})]}),h.jsx(WC,{type:"submit",disabled:s,children:s?h.jsxs(h.Fragment,{children:[h.jsx(UC,{}),"Sending Message..."]}):"Send Message"})]}),h.jsxs(GC,{children:[h.jsx("h4",{children:"Other ways to reach me"}),h.jsxs("p",{children:["📧 Email:"," ",h.jsx(_a,{href:`mailto:${xe.personalInfo.email}`,children:xe.personalInfo.email})]}),h.jsxs("p",{children:[h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),h.jsx(_a,{href:"https://linkedin.com/in/rahul-pradhan-1aa911271/",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/rahul-pradhan-1aa911271/"})]}),h.jsxs("p",{children:[h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),h.jsx(_a,{href:"https://github.com/rahulpradhan",target:"_blank",rel:"noopener noreferrer",children:"github.com/rahulpradhan"})]})]})]})]})},YC=D.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`,qC=D.div`
  display: flex;
  background: rgba(22, 22, 22, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0 8px;
  height: 40px;
  align-items: center;
  gap: 2px;

  @media (max-width: 550px) {
    flex-direction: column;
    padding: 0;
    border-bottom: none;
    gap: 0;
  }
`,XC=D.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #d8dee9;
  padding: 8px 16px;
  font-size: 13px;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px 6px 0 0;
  transition: all 0.2s ease;
  margin: 0;
  ${({$isBrowserTabs:e})=>!e&&"width: 100%;"}

  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: #eceff4;
  }

  ${({$isActive:e})=>e&&yf`
      background: ${({theme:n})=>n.colors.body};
      color: ${({theme:n})=>n.colors.text[100]};
      border-bottom: 2px solid ${({theme:n})=>n.colors.primary};
      box-shadow: 0 2px 8px ${({theme:n})=>n.colors.body};

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: ${({theme:n})=>n.colors.text[200]};
      }
    `}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.3);
  }

  @media (max-width: 550px) {
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 12px 16px;
    text-align: left;
    width: 100%;
    background: rgba(40, 40, 40, 1);

    &:last-child {
      border-bottom: none;
    }

    ${({$isActive:e})=>e&&yf`
        border-bottom: none;
        background: ${({theme:n})=>n.colors.primary};
        color: #ffffffff;

        &::after {
          display: none;
        }
      `}
  }
`,ZC=D.div`
  flex: 1;
  padding: 16px;
  background: rgba(24, 24, 24, 0.85);
  background-image: radial-gradient(
    circle,
    hsl(240, 5%, 65%, 0.15) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  color: #eceff4;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  overflow: auto;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 550px) {
    padding: 20px 16px;
    scrollbar-width: thin;
  }
`,QC=D.button`
  display: flex;
  background: rgba(32, 32, 32, 0.95);
  border: none;
  color: #eceff4;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;

  @media (max-width: 550px) {
    display: flex;
  }

  &:hover {
    background: rgba(40, 40, 40, 0.95);
  }
`,JC=D.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0)"};

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme:e})=>e.colors.primary};
  }
`,e9=D.div`
  display: flex;
  flex-direction: column;
  background: rgba(40, 40, 40, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow-y: auto;

  @media (max-width: 550px) {
    display: contents;
    > * {
      z-index: 1000;
      transform-origin: top center;
      animation: slideDown 0.28s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-4px) scaleY(0.96);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scaleY(1);
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }
`,v0=({tabs:e,activeTabId:n,onTabChange:r,onCloseTab:s})=>{const[a,u]=C.useState(n||e[0]?.id||""),[l,f]=C.useState(!1),[p,m]=C.useState(!1);C.useEffect(()=>{m(gn())},[]);const g=!!s;C.useEffect(()=>{n&&n!==a&&u(n)},[n]);const y=S=>{u(S),r?.(S),f(!1)},b=(S,P)=>{P.stopPropagation(),s?.(S)},k=e.find(S=>S.id===a),_=()=>{f(!l)},E=e.map(S=>h.jsxs(XC,{$isActive:a===S.id,$isBrowserTabs:g,onClick:()=>y(S.id),role:"tab","aria-selected":a===S.id,"aria-controls":`tab-panel-${S.id}`,id:`tab-${S.id}`,children:[S.label,s&&h.jsx(w5,{onClick:P=>b(S.id,P),"aria-label":`Close ${S.label} tab`,title:"Close tab",children:h.jsx("svg",{viewBox:"0 0 10 10","aria-hidden":"true",children:h.jsx("path",{d:"M2 2 L8 8 M8 2 L2 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]},S.id));return h.jsxs(YC,{children:[h.jsx(qC,{role:"tablist","aria-label":"Navigation tabs",children:p?h.jsxs(h.Fragment,{children:[h.jsxs(QC,{onClick:_,"aria-expanded":l,children:[h.jsx("span",{children:k?.label||e[0]?.label}),h.jsx(JC,{$isOpen:l,children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M6 9l6 6 6-6"})})})]}),l&&h.jsx(e9,{children:E})]}):E}),h.jsx(ZC,{role:"tabpanel",id:`tab-panel-${k?.id}`,"aria-labelledby":`tab-${k?.id}`,children:k?.content?Be.createElement(k.content,{}):null})]})},rd={"/home":{title:"Home",component:v0,tabs:LC.welcome},"/email":{title:"Email",component:KC}},sd="/home",t9=e=>{const{href:n}=e,r=n??sd,[s,a]=C.useState([]),[u,l]=C.useState(sd);if(r in rd){const f=rd[r],p=f.component;return C.useEffect(()=>{const m={id:r,label:f.title,content:()=>{let g=[];return"tabs"in f&&(g=f.tabs),h.jsx(p,{tabs:g,...e})}};a(g=>(l(m.id),g.find(y=>y.id===r)?g:[...g,m]))},[r]),h.jsx(Y7,{...e,href:r,children:h.jsx(v0,{tabs:s,activeTabId:u,onCloseTab:m=>{a(g=>{const y=g.filter(b=>b.id!==m);return y.length===0&&e.close(),l(y[0].id),y})},...e})})}return null},wt={width:window.innerWidth-150,height:window.innerHeight-150},od="window-state",n9=300,Ma=["mounted","visible","maximized","x","y","width","height"],ad=(e,n,r)=>{const{width:s,height:a}=r;return{x:Math.max(0,Math.round((e-s)/2)),y:Math.max(0,Math.round((n-a)/2))}},i9=()=>{const[e,n]=C.useState(gn());C.useState(()=>{n(gn())});const[,r]=C.useState(500),s=C.useCallback(N=>{r(te=>{const Me=te+1;return N($e=>({...$e,z:Me})),Me})},[]),a=C.useCallback(()=>{s(re)},[s]),u=C.useCallback(()=>{s(fe)},[s]),l=C.useCallback(()=>{s(q)},[s]),f=C.useCallback(N=>{N(te=>({...te,mounted:!0,visible:!0,maximized:!0}))},[]),p=C.useCallback((N,te)=>{const{width:Me,height:$e}=te,{x:Xe,y:tn}=ad(window.innerWidth,window.innerHeight,te);N(Vn=>({...Vn,mounted:!0,visible:!0,maximized:!1,x:Xe,y:tn,width:Me,height:$e}))},[]),m=C.useCallback((N,te)=>{e?f(N):p(N,te)},[e,f,p]),g=C.useCallback(()=>{m(fe,wt),u()},[m,u]),y=C.useCallback(()=>{fe(N=>({...N,mounted:!1,visible:!1,maximized:!1}))},[]),b=C.useCallback(()=>{fe(N=>({...N,visible:!1,maximized:!1}))},[]),k=C.useCallback(()=>{fe(N=>({...N,maximized:!N.maximized,visible:!0}))},[]),_=C.useCallback((N,te)=>{fe(Me=>({...Me,x:N,y:te})),u()},[u]),E=C.useCallback((N,te,Me,$e)=>{fe(Xe=>({...Xe,width:N,height:te,x:Me!==void 0?Me:Xe.x,y:$e!==void 0?$e:Xe.y})),u()},[u]),S=C.useCallback(()=>{re(N=>({...N,href:void 0})),m(re,wt),a()},[m,a]),P=C.useCallback(N=>{re(te=>({...te,href:N})),m(re,wt),a()},[m,a]),j=C.useCallback(()=>{re(N=>({...N,mounted:!1,visible:!1,maximized:!1}))},[]),I=C.useCallback(()=>{re(N=>({...N,visible:!1,maximized:!1}))},[]),L=C.useCallback(()=>{re(N=>({...N,maximized:!N.maximized,visible:!0}))},[]),$=C.useCallback((N,te)=>{re(Me=>({...Me,x:N,y:te})),a()},[a]),W=C.useCallback((N,te,Me,$e)=>{re(Xe=>({...Xe,width:N,height:te,x:Me!==void 0?Me:Xe.x,y:$e!==void 0?$e:Xe.y})),a()},[a]),G=C.useCallback(()=>{m(q,wt),l()},[m,l]),B=C.useCallback(()=>{q(N=>({...N,mounted:!1,visible:!1,maximized:!1}))},[]),H=C.useCallback(()=>{q(N=>({...N,visible:!1,maximized:!1}))},[]),U=C.useCallback(()=>{q(N=>({...N,maximized:!N.maximized,visible:!0}))},[]),ne=C.useCallback((N,te)=>{q(Me=>({...Me,x:N,y:te})),l()},[l]),pe=C.useCallback((N,te,Me,$e)=>{q(Xe=>({...Xe,width:N,height:te,x:Me!==void 0?Me:Xe.x,y:$e!==void 0?$e:Xe.y})),l()},[l]),[ve,fe]=C.useState({mounted:!1,visible:!1,maximized:!1,x:0,y:0,z:200,width:wt.width,height:wt.height,bringToFront:u,open:g,close:y,minimize:b,toggleMaximize:k,resize:E,move:_}),[oe,re]=C.useState({mounted:!0,visible:!0,maximized:!1,x:140,y:60,z:300,width:wt.width,height:wt.height,bringToFront:a,open:S,openWithUrl:P,close:j,minimize:I,toggleMaximize:L,resize:W,move:$}),[ue,q]=C.useState({mounted:!1,visible:!1,maximized:!1,x:160,y:80,z:400,width:wt.width,height:wt.height,bringToFront:l,open:G,close:B,minimize:H,toggleMaximize:U,resize:pe,move:ne}),me=C.useCallback(()=>{if(e)f(re),fe(N=>({...N,mounted:!1,visible:!1,maximized:!1,x:0,y:0}));else{p(re,wt),a();const N=ad(window.innerWidth,window.innerHeight,wt);fe(te=>({...te,mounted:!0,visible:!0,maximized:!1,x:N.x-30,y:N.y-30}))}},[e,f,p,a]);C.useEffect(()=>{const N=Pa(od,null);if(!N||e){me();return}N.terminal&&fe(te=>({...te,...N.terminal})),N.welcome&&re(te=>({...te,...N.welcome})),N.resume&&q(te=>({...te,...N.resume}))},[e]);const De=C.useMemo(()=>({terminal:sa(ve,Ma),welcome:sa(oe,Ma),resume:sa(ue,Ma)}),[ve,oe,ue]);return C.useEffect(()=>{if(e)return;const N=setTimeout(()=>{dd(od,De)},n9);return()=>clearTimeout(N)},[e,De]),{terminal:ve,welcome:oe,resume:ue,initializeWindows:me}};function r9(e){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(e)}function s9(e){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(e)}function y0(e){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(e)}function o9(e){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(e)}function a9(e){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(e)}function l9(e){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]}]})(e)}class c9{config;constructor(n={}){this.config={query:n.query||"nature",perPage:n.perPage||10}}async searchPhotos(n,r){try{const s={path:"search/photos",query:n||this.config.query||"nature",page:r?.toString()||"1",per_page:(this.config.perPage??10).toString(),orientation:"landscape"},a=await C5("unsplash",s);if(!a||typeof a!="object")throw new Error("Invalid data format received from Unsplash API");const u=a;return{total:u.total,totalPages:u.total_pages,results:u.results.map(l=>({id:l.id,description:l.description,altDescription:l.alt_description,url:l.urls.regular,thumbUrl:l.urls.thumb,regularUrl:l.urls.regular,width:l.width,height:l.height,photographer:{name:l.user.name,username:l.user.username,profileUrl:l.user.links.html}}))}}catch(s){throw this.handleError(s,"Failed to search photos"),s}}handleError(n,r){const s=n instanceof Error?n.message:"Unknown error";throw hs.error(`${r}: ${s}`),new Error(`${r}: ${s}`)}}const u9=D.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #555;
  border-radius: ${e=>e.$round?"50%":"24px"};
  padding: 16px;
  --outer-r: 24px;
  --p-distance: 12px;
  background-color: rgba(43, 43, 43, 0.18);
  backdrop-filter: blur(8px);

  ${e=>e.$round&&`
    border: 1px solid #555;
  `}
`,f9=D(Qi.div)`
  display: flex;
`,h9=D(Qi.div)`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #555;
  border-radius: calc(var(--outer-r) - var(--p-distance));
  background-color: #0d0716;
  overflow: hidden;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  ${e=>e.$round&&`
    background-color: #0d0716;
    position: relative;
    bottom: 0.1em;
    border: 1px solid #555;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
  `}
`,d9=D.div`
  margin-bottom: 16px;
  padding: 20px;
  padding-top: 20px;

  ${e=>e.$round&&`
    padding: 0;
    margin: 0;
  `}
`,p9=D.span`
  display: flex;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
`,m9=D.div`
  margin-bottom: 4px;
  font-weight: 900;
  font-size: 18px;
  color: #fff;
`,g9=D.p`
  font-size: 14px;
  color: #fff;
`,x9=D.div`
  display: flex;
  width: 100%;
  justify-content: center;

  ${e=>e.$round&&`
    position: absolute;
    z-index: 2;
    bottom: 3em;
    left: 50%;
    transform: translateX(-50%);
  `}
`,v9=D.div`
  margin-top: 16px;
  display: flex;
  width: 150px;
  justify-content: space-between;
  padding: 0 32px;
`,y9=D(Qi.div)`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 150ms;

  ${e=>e.$active?`
    background-color: ${e.$round?"#333333":e.theme.colors.primary};
  `:`
    background-color: ${e.$round?"rgba(51, 51, 51, 0.4)":e.theme.colors.text[100]};
  `}
`,b9=[{title:"Text Animations",description:"Cool text animations for your projects.",id:1,icon:h.jsx(o9,{})},{title:"Animations",description:"Smooth animations for your projects.",id:2,icon:h.jsx(l9,{})},{title:"Components",description:"Reusable components for your projects.",id:3,icon:h.jsx(s9,{})},{title:"Backgrounds",description:"Beautiful backgrounds and patterns for your projects.",id:4,icon:h.jsx(r9,{})},{title:"Common UI",description:"Common UI components are coming soon!",id:5,icon:h.jsx(a9,{})}],ld=0,cd=500,ud=16,w9={type:"spring",stiffness:300,damping:30};function C9({item:e,index:n,itemWidth:r,round:s,trackItemOffset:a,x:u,transition:l,currentTheme:f,themeSwitcher:p}){const m=[-(n+1)*a,-n*a,-(n-1)*a],y=c0(u,m,[90,0,-90],{clamp:!1});return h.jsx(h9,{$round:s,style:{width:r,height:s?r:"100%",rotateY:y},transition:l,children:h.jsxs(d9,{$round:s,children:[!e.url&&h.jsxs(h.Fragment,{children:[h.jsx(p9,{children:e.icon}),h.jsx(m9,{children:e.title}),h.jsx(g9,{children:e.description})]}),e.url&&h.jsx("img",{src:e.url,alt:e.title,onClick:()=>{p({...f,newBackgroundImage:e.url})},style:{width:"100%",height:s?r-80:"180px",objectFit:"cover",objectPosition:"center",borderRadius:"12px",aspectRatio:"16 / 9",cursor:"pointer",userSelect:"none"},loading:"lazy",draggable:!1})]})},`${e?.id??n}-${n}`)}function S9({currentTheme:e=gd.ubuntu,themeSwitcher:n,items:r=b9,baseWidth:s=300,autoplay:a=!1,autoplayDelay:u=3e3,pauseOnHover:l=!1,loop:f=!1,round:p=!1}){const{data:m,isError:g,refetch:y}=vd({queryKey:["unsplash-photos",e.name],queryFn:async()=>new c9({query:e.name,perPage:5}).searchPhotos(`Linux ${e.name} wallpaper technology opensource`),enabled:!!e.name,staleTime:18e5,retry:2});C.useEffect(()=>{y()},[e.name,y]);const b=C.useMemo(()=>g||!m?.results?.length?r:m.results.map((ue,q)=>({title:e.name,description:ue.altDescription||ue.description||`${e.name} wallpaper`,id:q,icon:h.jsx(y0,{}),url:ue.regularUrl||ue.url})),[m,g,e.name,r]),_=s-16*2,E=_+ud,S=C.useMemo(()=>f?b.length===0?[]:[b[b.length-1],...b,b[0]]:b,[b,f]),[P,j]=C.useState(f?1:0),I=Ss(0),[L,$]=C.useState(!1),[W,G]=C.useState(!1),[B,H]=C.useState(!1),U=C.useRef(null);C.useEffect(()=>{if(l&&U.current){const ue=U.current,q=()=>$(!0),me=()=>$(!1);return ue.addEventListener("mouseenter",q),ue.addEventListener("mouseleave",me),()=>{ue.removeEventListener("mouseenter",q),ue.removeEventListener("mouseleave",me)}}},[l]),C.useEffect(()=>{if(!a||S.length<=1||l&&L)return;const ue=setInterval(()=>{j(q=>Math.min(q+1,S.length-1))},u);return()=>clearInterval(ue)},[a,u,L,l,S.length]),C.useEffect(()=>{const ue=f?1:0;j(ue),I.set(-ue*E)},[b.length,f,E,I]),C.useEffect(()=>{!f&&P>S.length-1&&j(Math.max(0,S.length-1))},[S.length,f,P]);const ne=W?{duration:0}:w9,pe=()=>{H(!0)},ve=()=>{if(!f||S.length<=1){H(!1);return}const ue=S.length-1;if(P===ue){G(!0);const q=1;j(q),I.set(-q*E),requestAnimationFrame(()=>{G(!1),H(!1)});return}if(P===0){G(!0);const q=r.length;j(q),I.set(-q*E),requestAnimationFrame(()=>{G(!1),H(!1)});return}H(!1)},fe=(ue,q)=>{const{offset:me,velocity:De}=q,N=me.x<-ld||De.x<-cd?1:me.x>ld||De.x>cd?-1:0;N!==0&&j(te=>{const Me=te+N,$e=S.length-1;return Math.max(0,Math.min(Me,$e))})},oe=f?{}:{dragConstraints:{left:-E*Math.max(S.length-1,0),right:0}},re=b.length===0?0:f?(P-1+b.length)%b.length:Math.min(P,b.length-1);return h.jsxs(u9,{ref:U,$round:p,style:{...p&&{height:`${s}px`}},children:[h.jsx(f9,{drag:B?!1:"x",...oe,style:{width:_,gap:`${ud}px`,perspective:1e3,perspectiveOrigin:`${P*E+_/2}px 50%`,x:I},onDragEnd:fe,animate:{x:-(P*E)},transition:ne,onAnimationStart:pe,onAnimationComplete:ve,children:S.map((ue,q)=>h.jsx(C9,{item:ue,index:q,itemWidth:_,round:p,trackItemOffset:E,x:I,transition:ne,currentTheme:e,themeSwitcher:n},`${ue?.id??q}-${q}`))}),h.jsx(x9,{$round:p,children:h.jsx(v9,{children:b.map((ue,q)=>h.jsx(y9,{$active:re===q,$round:p,animate:{scale:re===q?1.2:1},onClick:()=>j(f?q+1:q),transition:{duration:.15}},q))})})]})}const T9=D.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  opacity: ${e=>e.disabled?.5:1};

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 100ms ease;
  }
`,_9=D(Qi.div)`
  position: absolute;
  z-index: 9999;
  background-color: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  ${e=>{switch(e.$position){case"top-left":return`
          bottom: calc(100% + 12px);
          right: 0;
          transform-origin: bottom right;
        `;case"top":return`
          bottom: calc(100% + 12px);
          left: 50%;
          transform-origin: bottom center;
          transform: translateX(${e.$offsetX}px);
        `;case"top-right":return`
          bottom: calc(100% + 12px);
          left: 0;
          transform-origin: bottom left;
        `;case"left":return`
          right: calc(100% + 12px);
          top: 50%;
          transform-origin: right center;
          transform: translateY(${e.$offsetY}px);
        `;case"center":return`
          top: 50%;
          left: 50%;
          transform-origin: center;
        `;case"right":return`
          left: calc(100% + 12px);
          top: 50%;
          transform-origin: left center;
          transform: translateY(${e.$offsetY}px);
        `;case"bottom-left":return`
          top: calc(100% + 12px);
          right: 0;
          transform-origin: top right;
        `;case"bottom":return`
          top: calc(100% + 12px);
          left: 50%;
          transform-origin: top center;
          transform: translateX(${e.$offsetX}px);
        `;default:return`
          top: calc(100% + 12px);
          left: 0;
          transform-origin: top left;
        `}}}
`;function M9({children:e,isMobile:n,widget:r,preferredPosition:s="top-right",onClick:a,closeOnOutsideClick:u=!0,disabled:l=!1,className:f,widgetClassName:p,widgetDimensions:m={width:320,height:400}}){const[g,y]=C.useState(!1),[b,k]=C.useState(s),[_,E]=C.useState(0),[S,P]=C.useState(0),j=C.useRef(null),I=C.useRef(null),L=C.useCallback(()=>{if(!j.current)return;const W=j.current.getBoundingClientRect(),G=window.innerWidth,B=window.innerHeight,H=12,U={top:W.top-H,bottom:B-W.bottom-H,left:W.left-H,right:G-W.right-H};let ne=s;const pe=["top","bottom","right","left"];for(const oe of pe){const re=oe==="top"||oe==="bottom"?U[oe]>=m.height:!0,ue=oe==="left"||oe==="right"?U[oe]>=m.width:!0;if(re&&ue){ne=oe;break}}let ve=0,fe=0;if(ne==="top"||ne==="bottom"){const oe=W.left+W.width/2-m.width/2,re=oe+m.width;oe<0&&(ve=Math.abs(oe)+16),re>G&&(ve=-(re-G)-16)}if(ne==="left"||ne==="right"){const oe=W.top+W.height/2-m.height/2,re=oe+m.height;oe<0&&(fe=Math.abs(oe)+16),re>B&&(fe=-(re-B)-16)}k(ne),E(ve),P(fe)},[s,m]),$=()=>{l||(a?.(),L(),y(W=>!W))};return C.useEffect(()=>{if(!u||!g)return;const W=G=>{const B=j.current&&!j.current.contains(G.target),H=I.current&&!I.current.contains(G.target);B&&H&&y(!1)};return document.addEventListener("mousedown",W),document.addEventListener("touchstart",W),()=>{document.removeEventListener("mousedown",W),document.removeEventListener("touchstart",W)}},[g,u]),C.useEffect(()=>{const W=G=>{G.key==="Escape"&&g&&y(!1)};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[g]),n?h.jsx(h.Fragment,{children:h.jsxs(T9,{ref:j,onClick:$,disabled:l,className:f,"aria-expanded":g,"aria-haspopup":"true",children:[e,h.jsx(Hw,{children:g&&h.jsx(_9,{ref:I,className:p,$position:b,$offsetX:_,$offsetY:S,initial:{opacity:0,scale:.85,translateY:b==="top"?10:b==="bottom"?-10:0,translateX:b==="left"?10:b==="right"?-10:0},animate:{opacity:1,scale:1,translateY:0,translateX:0},exit:{opacity:0,scale:.85,translateY:b==="top"?10:b==="bottom"?-10:0,translateX:b==="left"?10:b==="right"?-10:0},transition:{type:"spring",stiffness:400,damping:30,duration:.2},onClick:W=>W.stopPropagation(),children:r})})]})}):r}const k9=({currentTheme:e,themeSwitcher:n,themeLoaded:r,resumePath:s,isBGChange:a,setIsBGChange:u})=>{const{terminal:l,welcome:f,resume:p}=i9(),[m,g]=C.useState(!1),[y,b]=C.useState(!0);C.useEffect(()=>{g(gn())},[]),C.useEffect(()=>{window.addEventListener("keydown",_=>["ArrowUp","ArrowDown"].indexOf(_.code)>-1&&_.preventDefault(),!1)},[]),C.useEffect(()=>{const _=e.colors?.body,E=document.querySelector("meta[name='theme-color']"),S=document.querySelector("link[rel='mask-icon']"),P=document.querySelector("meta[name='msapplication-TileColor']");E?.setAttribute("content",_),P?.setAttribute("content",_),S?.setAttribute("color",_)},[gd]);const k={initialX:m?0:window.innerWidth-310,initialY:m?window.innerHeight-280:250};return h.jsxs(S5,{theme:e,children:[h.jsx($5,{theme:e}),h.jsx("h1",{className:"sr-only","aria-label":xe.personalInfo.name,children:xe.personalInfo.name}),h.jsxs(Ki.Provider,{value:{themeSwitcher:n,currentTheme:e,themeLoaded:r,resumePath:s,setIsBGChange:u,isBGChange:a},children:[h.jsx(s8,{onOpenTerminal:l.open,onOpenWelcome:f.open,onOpenBrowserWithUrl:f.openWithUrl,onOpenResume:p.open,hidden:l.maximized||f.maximized||p.maximized,activeTerminal:!m&&l.mounted&&l.visible,activeBrowser:!m&&f.mounted&&f.visible,activeResume:!m&&p.mounted&&p.visible,mobileExpanded:m,terminal:l,welcome:f,resume:p}),h.jsx(X8,{terminal:l,welcome:f,resume:p}),f.mounted&&h.jsx(t9,{close:f.close,minimize:m?void 0:f.minimize,toggleMaximize:m?void 0:f.toggleMaximize,maximized:f.maximized,visible:f.visible,mounted:f.mounted,x:f.x,y:f.y,z:f.z,width:f.width,height:f.height,move:f.move,resize:f.resize,bringToFront:f.bringToFront,href:f.href}),l.mounted&&h.jsx(K7,{close:l.close,minimize:m?void 0:l.minimize,toggleMaximize:m?void 0:l.toggleMaximize,maximized:l.maximized,visible:l.visible,mounted:l.mounted,x:l.x,y:l.y,z:l.z,width:l.width,height:l.height,move:l.move,resize:l.resize,bringToFront:l.bringToFront}),p.mounted&&h.jsx(s7,{close:p.close,minimize:m?void 0:p.minimize,toggleMaximize:m?void 0:p.toggleMaximize,maximized:p.maximized,visible:p.visible,mounted:l.mounted,x:p.x,y:p.y,z:p.z,width:p.width,height:p.height,move:p.move,resize:p.resize,bringToFront:p.bringToFront}),h.jsxs(Fi,{...k,children:[h.jsx(M9,{isMobile:m,onClick:()=>b(!1),widget:h.jsx(S9,{currentTheme:e,themeSwitcher:n,baseWidth:m?250:300,autoplay:!1,loop:!0}),children:h.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",backgroundColor:"rgba(20, 20, 20, 0.9)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.3)"},children:h.jsx(y0,{size:24,color:"white"})})}),h.jsx("div",{style:{position:"relative",bottom:m?"60px":"50px"},children:h.jsx(pd,{id:md.CAROUSEL_HINT,showCondition:y,onClose:()=>b(!1)})})]})]})]})};export{k9 as default};
