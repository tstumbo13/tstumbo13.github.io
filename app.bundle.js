(()=>{var zd=Object.create;var wa=Object.defineProperty;var Td=Object.getOwnPropertyDescriptor;var _d=Object.getOwnPropertyNames;var Pd=Object.getPrototypeOf,Rd=Object.prototype.hasOwnProperty;var Ze=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Bd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of _d(t))!Rd.call(e,o)&&o!==n&&wa(e,o,{get:()=>t[o],enumerable:!(r=Td(t,o))||r.enumerable});return e};var wr=(e,t,n)=>(n=e!=null?zd(Pd(e)):{},Bd(t||!e||!e.__esModule?wa(n,"default",{value:e,enumerable:!0}):n,e));var Ra=Ze(L=>{"use strict";var En=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),Dd=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),ka=Symbol.iterator;function Hd(e){return e===null||typeof e!="object"?null:(e=ka&&e[ka]||e["@@iterator"],typeof e=="function"?e:null)}var Na={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ca=Object.assign,Ea={};function Yt(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||Na}Yt.prototype.isReactComponent={};Yt.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ba(){}ba.prototype=Yt.prototype;function Jo(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||Na}var Go=Jo.prototype=new ba;Go.constructor=Jo;Ca(Go,Yt.prototype);Go.isPureReactComponent=!0;var xa=Array.isArray,za=Object.prototype.hasOwnProperty,Xo={current:null},Ta={key:!0,ref:!0,__self:!0,__source:!0};function _a(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)za.call(t,r)&&!Ta.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:En,type:e,key:i,ref:l,props:o,_owner:Xo.current}}function $d(e,t){return{$$typeof:En,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qo(e){return typeof e=="object"&&e!==null&&e.$$typeof===En}function Vd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sa=/\/+/g;function Ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vd(""+e.key):t.toString(36)}function xr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case En:case Ld:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ko(l,0):r,xa(o)?(n="",e!=null&&(n=e.replace(Sa,"$&/")+"/"),xr(o,t,n,"",function(c){return c})):o!=null&&(qo(o)&&(o=$d(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Sa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",xa(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Ko(i,s);l+=xr(i,t,n,u,o)}else if(u=Hd(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Ko(i,s++),l+=xr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function kr(e,t,n){if(e==null)return e;var r=[],o=0;return xr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Sr={transition:null},Yd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Xo};function Pa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!qo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Yt;L.Fragment=Dd;L.Profiler=Od;L.PureComponent=Jo;L.StrictMode=Md;L.Suspense=jd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;L.act=Pa;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ca({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Xo.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)za.call(t,u)&&!Ta.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:En,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};L.createElement=_a;L.createFactory=function(e){var t=_a.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Ad,render:e}};L.isValidElement=qo;L.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Qd}};L.memo=function(e,t){return{$$typeof:Wd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};L.unstable_act=Pa;L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1"});var Nr=Ze((Bm,Ba)=>{"use strict";Ba.exports=Ra()});var Ua=Ze(j=>{"use strict";function ni(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Cr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Fe(e){return e.length===0?null:e[0]}function br(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>Cr(s,n))u<o&&0>Cr(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>Cr(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function Cr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(La=performance,j.unstable_now=function(){return La.now()}):(Zo=Date,Da=Zo.now(),j.unstable_now=function(){return Zo.now()-Da});var La,Zo,Da,Qe=[],ct=[],Kd=1,Pe=null,se=3,zr=!1,Rt=!1,zn=!1,Ia=typeof setTimeout=="function"?setTimeout:null,Fa=typeof clearTimeout=="function"?clearTimeout:null,Ma=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ri(e){for(var t=Fe(ct);t!==null;){if(t.callback===null)br(ct);else if(t.startTime<=e)br(ct),t.sortIndex=t.expirationTime,ni(Qe,t);else break;t=Fe(ct)}}function oi(e){if(zn=!1,ri(e),!Rt)if(Fe(Qe)!==null)Rt=!0,li(ii);else{var t=Fe(ct);t!==null&&ai(oi,t.startTime-e)}}function ii(e,t){Rt=!1,zn&&(zn=!1,Fa(Tn),Tn=-1),zr=!0;var n=se;try{for(ri(t),Pe=Fe(Qe);Pe!==null&&(!(Pe.expirationTime>t)||e&&!Wa());){var r=Pe.callback;if(typeof r=="function"){Pe.callback=null,se=Pe.priorityLevel;var o=r(Pe.expirationTime<=t);t=j.unstable_now(),typeof o=="function"?Pe.callback=o:Pe===Fe(Qe)&&br(Qe),ri(t)}else br(Qe);Pe=Fe(Qe)}if(Pe!==null)var i=!0;else{var l=Fe(ct);l!==null&&ai(oi,l.startTime-t),i=!1}return i}finally{Pe=null,se=n,zr=!1}}var Tr=!1,Er=null,Tn=-1,Aa=5,ja=-1;function Wa(){return!(j.unstable_now()-ja<Aa)}function ei(){if(Er!==null){var e=j.unstable_now();ja=e;var t=!0;try{t=Er(!0,e)}finally{t?bn():(Tr=!1,Er=null)}}else Tr=!1}var bn;typeof Ma=="function"?bn=function(){Ma(ei)}:typeof MessageChannel<"u"?(ti=new MessageChannel,Oa=ti.port2,ti.port1.onmessage=ei,bn=function(){Oa.postMessage(null)}):bn=function(){Ia(ei,0)};var ti,Oa;function li(e){Er=e,Tr||(Tr=!0,bn())}function ai(e,t){Tn=Ia(function(){e(j.unstable_now())},t)}j.unstable_IdlePriority=5;j.unstable_ImmediatePriority=1;j.unstable_LowPriority=4;j.unstable_NormalPriority=3;j.unstable_Profiling=null;j.unstable_UserBlockingPriority=2;j.unstable_cancelCallback=function(e){e.callback=null};j.unstable_continueExecution=function(){Rt||zr||(Rt=!0,li(ii))};j.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Aa=0<e?Math.floor(1e3/e):5};j.unstable_getCurrentPriorityLevel=function(){return se};j.unstable_getFirstCallbackNode=function(){return Fe(Qe)};j.unstable_next=function(e){switch(se){case 1:case 2:case 3:var t=3;break;default:t=se}var n=se;se=t;try{return e()}finally{se=n}};j.unstable_pauseExecution=function(){};j.unstable_requestPaint=function(){};j.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=se;se=e;try{return t()}finally{se=n}};j.unstable_scheduleCallback=function(e,t,n){var r=j.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Kd++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,ni(ct,e),Fe(Qe)===null&&e===Fe(ct)&&(zn?(Fa(Tn),Tn=-1):zn=!0,ai(oi,n-r))):(e.sortIndex=o,ni(Qe,e),Rt||zr||(Rt=!0,li(ii))),e};j.unstable_shouldYield=Wa;j.unstable_wrapCallback=function(e){var t=se;return function(){var n=se;se=t;try{return e.apply(this,arguments)}finally{se=n}}}});var $a=Ze((Dm,Ha)=>{"use strict";Ha.exports=Ua()});var Kc=Ze(_e=>{"use strict";var Jd=Nr(),ze=$a();function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xs=new Set,Gn={};function $t(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Xs.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,Gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Va={},Qa={};function Xd(e){return Pi.call(Qa,e)?!0:Pi.call(Va,e)?!1:Gd.test(e)?Qa[e]=!0:(Va[e]=!0,!1)}function qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zd(e,t,n,r){if(t===null||typeof t>"u"||qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function Nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sl,Nl);ae[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sl,Nl);ae[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sl,Nl);ae[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cl(e,t,n,r){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zd(t,n,o,r)&&(n=null),r||o===null?Xd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_r=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),Ri=Symbol.for("react.profiler"),qs=Symbol.for("react.provider"),Zs=Symbol.for("react.context"),bl=Symbol.for("react.forward_ref"),Bi=Symbol.for("react.suspense"),Li=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),eu=Symbol.for("react.offscreen"),Ya=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,si;function In(e){if(si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);si=t&&t[1]||""}return`
`+si+e}var ui=!1;function ci(e,t){if(!e||ui)return"";ui=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ui=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function ep(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=ci(e.type,!1),e;case 11:return e=ci(e.type.render,!1),e;case 1:return e=ci(e.type,!0),e;default:return""}}function Di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Gt:return"Portal";case Ri:return"Profiler";case El:return"StrictMode";case Bi:return"Suspense";case Li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zs:return(e.displayName||"Context")+".Consumer";case qs:return(e._context.displayName||"Context")+".Provider";case bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return t=e.displayName||null,t!==null?t:Di(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return Di(e(t))}catch{}}return null}function tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Di(t);case 8:return t===El?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function np(e){var t=tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=np(e))}function nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mi(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ka(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&Cl(e,"checked",t,!1)}function Oi(e,t){ru(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ii(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ii(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Fn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function ou(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,lu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){rp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var op=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,cn=null,dn=null;function qa(e){if(e=vr(e)){if(typeof Hi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Lo(t),Hi(e.stateNode,e.type,t))}}function uu(e){cn?dn?dn.push(e):dn=[e]:cn=e}function cu(){if(cn){var e=cn,t=dn;if(dn=cn=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function du(e,t){return e(t)}function pu(){}var di=!1;function fu(e,t,n){if(di)return e(t,n);di=!0;try{return du(e,t,n)}finally{di=!1,(cn!==null||dn!==null)&&(pu(),cu())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var $i=!1;if(it)try{Kt={},Object.defineProperty(Kt,"passive",{get:function(){$i=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{$i=!1}var Kt;function ip(e,t,n,r,o,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Un=!1,io=null,lo=!1,Vi=null,lp={onError:function(e){Un=!0,io=e}};function ap(e,t,n,r,o,i,l,s,u){Un=!1,io=null,ip.apply(lp,arguments)}function sp(e,t,n,r,o,i,l,s,u){if(ap.apply(this,arguments),Un){if(Un){var c=io;Un=!1,io=null}else throw Error(k(198));lo||(lo=!0,Vi=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Za(e){if(Vt(e)!==e)throw Error(k(188))}function up(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Za(o),e;if(i===r)return Za(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function vu(e){return e=up(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hu(e);if(t!==null)return t;e=e.sibling}return null}var gu=ze.unstable_scheduleCallback,es=ze.unstable_cancelCallback,cp=ze.unstable_shouldYield,dp=ze.unstable_requestPaint,X=ze.unstable_now,pp=ze.unstable_getCurrentPriorityLevel,_l=ze.unstable_ImmediatePriority,yu=ze.unstable_UserBlockingPriority,ao=ze.unstable_NormalPriority,fp=ze.unstable_LowPriority,wu=ze.unstable_IdlePriority,_o=null,Ge=null;function mp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:gp,vp=Math.log,hp=Math.LN2;function gp(e){return e>>>=0,e===0?32:31-(vp(e)/hp|0)|0}var Br=64,Lr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=An(s):(i&=l,i!==0&&(r=An(i)))}else l=n&~o,l!==0?r=An(l):i!==0&&(r=An(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),o=1<<n,r|=e[n],t&=~o;return r}function yp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-He(i),s=1<<l,u=o[l];u===-1?((s&n)===0||(s&r)!==0)&&(o[l]=yp(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ku(){var e=Br;return Br<<=1,(Br&4194240)===0&&(Br=64),e}function pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-He(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function xu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Su,Rl,Nu,Cu,Eu,Yi=!1,Dr=[],yt=null,wt=null,kt=null,Zn=new Map,er=new Map,mt=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ts(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function Pn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=vr(t),t!==null&&Rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sp(e,t,n,r,o){switch(t){case"focusin":return yt=Pn(yt,e,t,n,r,o),!0;case"dragenter":return wt=Pn(wt,e,t,n,r,o),!0;case"mouseover":return kt=Pn(kt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zn.set(i,Pn(Zn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,er.set(i,Pn(er.get(i)||null,e,t,n,r,o)),!0}return!1}function bu(e){var t=Dt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=mu(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){Nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ui=r,n.target.dispatchEvent(r),Ui=null}else return t=vr(n),t!==null&&Rl(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){Kr(e)&&n.delete(t)}function Np(){Yi=!1,yt!==null&&Kr(yt)&&(yt=null),wt!==null&&Kr(wt)&&(wt=null),kt!==null&&Kr(kt)&&(kt=null),Zn.forEach(ns),er.forEach(ns)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yi||(Yi=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Np)))}function tr(e){function t(o){return Rn(o,e)}if(0<Dr.length){Rn(Dr[0],e);for(var n=1;n<Dr.length;n++){var r=Dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&Rn(yt,e),wt!==null&&Rn(wt,e),kt!==null&&Rn(kt,e),Zn.forEach(t),er.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)bu(n),n.blockedOn===null&&mt.shift()}var pn=ut.ReactCurrentBatchConfig,uo=!0;function Cp(e,t,n,r){var o=F,i=pn.transition;pn.transition=null;try{F=1,Bl(e,t,n,r)}finally{F=o,pn.transition=i}}function Ep(e,t,n,r){var o=F,i=pn.transition;pn.transition=null;try{F=4,Bl(e,t,n,r)}finally{F=o,pn.transition=i}}function Bl(e,t,n,r){if(uo){var o=Ki(e,t,n,r);if(o===null)wi(e,t,r,co,n),ts(e,r);else if(Sp(o,e,t,n,r))r.stopPropagation();else if(ts(e,r),t&4&&-1<xp.indexOf(e)){for(;o!==null;){var i=vr(o);if(i!==null&&Su(i),i=Ki(e,t,n,r),i===null&&wi(e,t,r,co,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wi(e,t,r,null,n)}}var co=null;function Ki(e,t,n,r){if(co=null,e=Tl(r),e=Dt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case _l:return 1;case yu:return 4;case ao:case fp:return 16;case wu:return 536870912;default:return 16}default:return 16}}var ht=null,Ll=null,Jr=null;function Tu(){if(Jr)return Jr;var e,t=Ll,n=t.length,r,o="value"in ht?ht.value:ht.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Jr=o.slice(e,1<r?1-r:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function rs(){return!1}function Te(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mr:rs,this.isPropagationStopped=rs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Te(Sn),mr=K({},Sn,{view:0,detail:0}),bp=Te(mr),fi,mi,Bn,Po=K({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(fi=e.screenX-Bn.screenX,mi=e.screenY-Bn.screenY):mi=fi=0,Bn=e),fi)},movementY:function(e){return"movementY"in e?e.movementY:mi}}),os=Te(Po),zp=K({},Po,{dataTransfer:0}),Tp=Te(zp),_p=K({},mr,{relatedTarget:0}),vi=Te(_p),Pp=K({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=Te(Pp),Bp=K({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=Te(Bp),Dp=K({},Sn,{data:0}),is=Te(Dp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function Ml(){return Fp}var Ap=K({},mr,{key:function(e){if(e.key){var t=Mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jp=Te(Ap),Wp=K({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ls=Te(Wp),Up=K({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),Hp=Te(Up),$p=K({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=Te($p),Qp=K({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=Te(Qp),Kp=[9,13,27,32],Ol=it&&"CompositionEvent"in window,Hn=null;it&&"documentMode"in document&&(Hn=document.documentMode);var Jp=it&&"TextEvent"in window&&!Hn,_u=it&&(!Ol||Hn&&8<Hn&&11>=Hn),as=" ",ss=!1;function Pu(e,t){switch(e){case"keyup":return Kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Gp(e,t){switch(e){case"compositionend":return Ru(t);case"keypress":return t.which!==32?null:(ss=!0,as);case"textInput":return e=t.data,e===as&&ss?null:e;default:return null}}function Xp(e,t){if(qt)return e==="compositionend"||!Ol&&Pu(e,t)?(e=Tu(),Jr=Ll=ht=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function Bu(e,t,n,r){uu(r),t=po(t,"onChange"),0<t.length&&(n=new Dl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,nr=null;function Zp(e){Hu(e,0)}function Ro(e){var t=tn(e);if(nu(t))return e}function ef(e,t){if(e==="change")return t}var Lu=!1;it&&(it?(Ir="oninput"in document,Ir||(hi=document.createElement("div"),hi.setAttribute("oninput","return;"),Ir=typeof hi.oninput=="function"),Or=Ir):Or=!1,Lu=Or&&(!document.documentMode||9<document.documentMode));var Or,Ir,hi;function cs(){$n&&($n.detachEvent("onpropertychange",Du),nr=$n=null)}function Du(e){if(e.propertyName==="value"&&Ro(nr)){var t=[];Bu(t,nr,e,Tl(e)),fu(Zp,t)}}function tf(e,t,n){e==="focusin"?(cs(),$n=t,nr=n,$n.attachEvent("onpropertychange",Du)):e==="focusout"&&cs()}function nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(nr)}function rf(e,t){if(e==="click")return Ro(t)}function of(e,t){if(e==="input"||e==="change")return Ro(t)}function lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:lf;function rr(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Pi.call(t,o)||!Ve(e[o],t[o]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function af(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ps(n,i);var l=ps(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sf=it&&"documentMode"in document&&11>=document.documentMode,Zt=null,Ji=null,Vn=null,Gi=!1;function fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gi||Zt==null||Zt!==oo(r)||(r=Zt,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vn&&rr(Vn,r)||(Vn=r,r=po(Ji,"onSelect"),0<r.length&&(t=new Dl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},gi={},Iu={};it&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Bo(e){if(gi[e])return gi[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Iu)return gi[e]=t[n];return e}var Fu=Bo("animationend"),Au=Bo("animationiteration"),ju=Bo("animationstart"),Wu=Bo("transitionend"),Uu=new Map,ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Uu.set(e,t),$t(t,[e])}for(Ar=0;Ar<ms.length;Ar++)jr=ms[Ar],vs=jr.toLowerCase(),hs=jr[0].toUpperCase()+jr.slice(1),Tt(vs,"on"+hs);var jr,vs,hs,Ar;Tt(Fu,"onAnimationEnd");Tt(Au,"onAnimationIteration");Tt(ju,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Wu,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function gs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sp(r,t,void 0,e),e.currentTarget=null}function Hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;gs(o,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;gs(o,s,c),i=u}}}if(lo)throw e=Vi,lo=!1,Vi=null,e}function U(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function yi(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Wr]){e[Wr]=!0,Xs.forEach(function(n){n!=="selectionchange"&&(uf.has(n)||yi(n,!1,e),yi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,yi("selectionchange",!1,t))}}function $u(e,t,n,r){switch(zu(t)){case 1:var o=Cp;break;case 4:o=Ep;break;default:o=Bl}n=o.bind(null,t,n,e),o=void 0,!$i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Dt(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}fu(function(){var c=i,m=Tl(n),v=[];e:{var h=Uu.get(e);if(h!==void 0){var g=Dl,x=e;switch(e){case"keypress":if(Gr(n)===0)break e;case"keydown":case"keyup":g=jp;break;case"focusin":x="focus",g=vi;break;case"focusout":x="blur",g=vi;break;case"beforeblur":case"afterblur":g=vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Hp;break;case Fu:case Au:case ju:g=Rp;break;case Wu:g=Vp;break;case"scroll":g=bp;break;case"wheel":g=Yp;break;case"copy":case"cut":case"paste":g=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ls}var y=(t&4)!==0,T=!y&&e==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var p=c,f;p!==null;){f=p;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=qn(p,d),w!=null&&y.push(ir(p,w,f)))),T)break;p=p.return}0<y.length&&(h=new g(h,x,null,n,m),v.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Ui&&(x=n.relatedTarget||n.fromElement)&&(Dt(x)||x[lt]))break e;if((g||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Dt(x):null,x!==null&&(T=Vt(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=os,w="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=ls,w="onPointerLeave",d="onPointerEnter",p="pointer"),T=g==null?h:tn(g),f=x==null?h:tn(x),h=new y(w,p+"leave",g,n,m),h.target=T,h.relatedTarget=f,w=null,Dt(m)===c&&(y=new y(d,p+"enter",x,n,m),y.target=f,y.relatedTarget=T,w=y),T=w,g&&x)t:{for(y=g,d=x,p=0,f=y;f;f=Jt(f))p++;for(f=0,w=d;w;w=Jt(w))f++;for(;0<p-f;)y=Jt(y),p--;for(;0<f-p;)d=Jt(d),f--;for(;p--;){if(y===d||d!==null&&y===d.alternate)break t;y=Jt(y),d=Jt(d)}y=null}else y=null;g!==null&&ys(v,h,g,y,!1),x!==null&&T!==null&&ys(v,T,x,y,!0)}}e:{if(h=c?tn(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var N=ef;else if(us(h))if(Lu)N=of;else{N=nf;var C=tf}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=rf);if(N&&(N=N(e,c))){Bu(v,N,n,m);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ii(h,"number",h.value)}switch(C=c?tn(c):window,e){case"focusin":(us(C)||C.contentEditable==="true")&&(Zt=C,Ji=c,Vn=null);break;case"focusout":Vn=Ji=Zt=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,fs(v,n,m);break;case"selectionchange":if(sf)break;case"keydown":case"keyup":fs(v,n,m)}var z;if(Ol)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else qt?Pu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(_u&&n.locale!=="ko"&&(qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&qt&&(z=Tu()):(ht=m,Ll="value"in ht?ht.value:ht.textContent,qt=!0)),C=po(c,_),0<C.length&&(_=new is(_,e,null,n,m),v.push({event:_,listeners:C}),z?_.data=z:(z=Ru(n),z!==null&&(_.data=z)))),(z=Jp?Gp(e,n):Xp(e,n))&&(c=po(c,"onBeforeInput"),0<c.length&&(m=new is("onBeforeInput","beforeinput",null,n,m),v.push({event:m,listeners:c}),m.data=z))}Hu(v,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=qn(e,n),i!=null&&r.unshift(ir(e,i,o)),i=qn(e,t),i!=null&&r.push(ir(e,i,o))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ys(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=qn(n,i),u!=null&&l.unshift(ir(n,u,s))):o||(u=qn(n,i),u!=null&&l.push(ir(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var cf=/\r\n?/g,df=/\u0000|\uFFFD/g;function ws(e){return(typeof e=="string"?e:""+e).replace(cf,`
`).replace(df,"")}function Ur(e,t,n){if(t=ws(t),ws(e)!==t&&n)throw Error(k(425))}function fo(){}var Xi=null,qi=null;function Zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,ks=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof ks<"u"?function(e){return ks.resolve(null).then(e).catch(mf)}:el;function mf(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);tr(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Nn,lr="__reactProps$"+Nn,lt="__reactContainer$"+Nn,tl="__reactEvents$"+Nn,vf="__reactListeners$"+Nn,hf="__reactHandles$"+Nn;function Dt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xs(e);e!==null;){if(n=e[Je])return n;e=xs(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Je]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Lo(e){return e[lr]||null}var nl=[],nn=-1;function _t(e){return{current:e}}function H(e){0>nn||(e.current=nl[nn],nl[nn]=null,nn--)}function W(e,t){nn++,nl[nn]=e.current,e.current=t}var zt={},pe=_t(zt),xe=_t(!1),At=zt;function hn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function mo(){H(xe),H(pe)}function Ss(e,t,n){if(pe.current!==zt)throw Error(k(168));W(pe,t),W(xe,n)}function Vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,tp(e)||"Unknown",o));return K({},n,r)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,At=pe.current,W(pe,e),W(xe,xe.current),!0}function Ns(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Vu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,H(xe),H(pe),W(pe,e)):H(xe),W(xe,n)}var tt=null,Do=!1,xi=!1;function Qu(e){tt===null?tt=[e]:tt.push(e)}function gf(e){Do=!0,Qu(e)}function Pt(){if(!xi&&tt!==null){xi=!0;var e=0,t=F;try{var n=tt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Do=!1}catch(o){throw tt!==null&&(tt=tt.slice(e+1)),gu(_l,Pt),o}finally{F=t,xi=!1}}return null}var rn=[],on=0,ho=null,go=0,Re=[],Be=0,jt=null,nt=1,rt="";function Bt(e,t){rn[on++]=go,rn[on++]=ho,ho=e,go=t}function Yu(e,t,n){Re[Be++]=nt,Re[Be++]=rt,Re[Be++]=jt,jt=e;var r=nt;e=rt;var o=32-He(r)-1;r&=~(1<<o),n+=1;var i=32-He(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,nt=1<<32-He(t)+o|n<<o|r,rt=i+e}else nt=1<<i|n<<o|r,rt=e}function Fl(e){e.return!==null&&(Bt(e,1),Yu(e,1,0))}function Al(e){for(;e===ho;)ho=rn[--on],rn[on]=null,go=rn[--on],rn[on]=null;for(;e===jt;)jt=Re[--Be],Re[Be]=null,rt=Re[--Be],Re[Be]=null,nt=Re[--Be],Re[Be]=null}var be=null,Ee=null,$=!1,Ue=null;function Ku(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Ee=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Ee=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if($){var t=Ee;if(t){var n=t;if(!Cs(e,t)){if(rl(e))throw Error(k(418));t=xt(n.nextSibling);var r=be;t&&Cs(e,t)?Ku(r,n):(e.flags=e.flags&-4097|2,$=!1,be=e)}}else{if(rl(e))throw Error(k(418));e.flags=e.flags&-4097|2,$=!1,be=e}}}function Es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Hr(e){if(e!==be)return!1;if(!$)return Es(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zi(e.type,e.memoizedProps)),t&&(t=Ee)){if(rl(e))throw Ju(),Error(k(418));for(;t;)Ku(e,t),t=xt(t.nextSibling)}if(Es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=be?xt(e.stateNode.nextSibling):null;return!0}function Ju(){for(var e=Ee;e;)e=xt(e.nextSibling)}function gn(){Ee=be=null,$=!1}function jl(e){Ue===null?Ue=[e]:Ue.push(e)}var yf=ut.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function $r(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bs(e){var t=e._init;return t(e._payload)}function Gu(e){function t(d,p){if(e){var f=d.deletions;f===null?(d.deletions=[p],d.flags|=16):f.push(p)}}function n(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function r(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function o(d,p){return d=Et(d,p),d.index=0,d.sibling=null,d}function i(d,p,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<p?(d.flags|=2,p):f):(d.flags|=2,p)):(d.flags|=1048576,p)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,p,f,w){return p===null||p.tag!==6?(p=Ti(f,d.mode,w),p.return=d,p):(p=o(p,f),p.return=d,p)}function u(d,p,f,w){var N=f.type;return N===Xt?m(d,p,f.props.children,w,f.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===pt&&bs(N)===p.type)?(w=o(p,f.props),w.ref=Ln(d,p,f),w.return=d,w):(w=ro(f.type,f.key,f.props,null,d.mode,w),w.ref=Ln(d,p,f),w.return=d,w)}function c(d,p,f,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=_i(f,d.mode,w),p.return=d,p):(p=o(p,f.children||[]),p.return=d,p)}function m(d,p,f,w,N){return p===null||p.tag!==7?(p=Ft(f,d.mode,w,N),p.return=d,p):(p=o(p,f),p.return=d,p)}function v(d,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ti(""+p,d.mode,f),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _r:return f=ro(p.type,p.key,p.props,null,d.mode,f),f.ref=Ln(d,null,p),f.return=d,f;case Gt:return p=_i(p,d.mode,f),p.return=d,p;case pt:var w=p._init;return v(d,w(p._payload),f)}if(Fn(p)||_n(p))return p=Ft(p,d.mode,f,null),p.return=d,p;$r(d,p)}return null}function h(d,p,f,w){var N=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:s(d,p,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _r:return f.key===N?u(d,p,f,w):null;case Gt:return f.key===N?c(d,p,f,w):null;case pt:return N=f._init,h(d,p,N(f._payload),w)}if(Fn(f)||_n(f))return N!==null?null:m(d,p,f,w,null);$r(d,f)}return null}function g(d,p,f,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,s(p,d,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _r:return d=d.get(w.key===null?f:w.key)||null,u(p,d,w,N);case Gt:return d=d.get(w.key===null?f:w.key)||null,c(p,d,w,N);case pt:var C=w._init;return g(d,p,f,C(w._payload),N)}if(Fn(w)||_n(w))return d=d.get(f)||null,m(p,d,w,N,null);$r(p,w)}return null}function x(d,p,f,w){for(var N=null,C=null,z=p,_=p=0,A=null;z!==null&&_<f.length;_++){z.index>_?(A=z,z=null):A=z.sibling;var B=h(d,z,f[_],w);if(B===null){z===null&&(z=A);break}e&&z&&B.alternate===null&&t(d,z),p=i(B,p,_),C===null?N=B:C.sibling=B,C=B,z=A}if(_===f.length)return n(d,z),$&&Bt(d,_),N;if(z===null){for(;_<f.length;_++)z=v(d,f[_],w),z!==null&&(p=i(z,p,_),C===null?N=z:C.sibling=z,C=z);return $&&Bt(d,_),N}for(z=r(d,z);_<f.length;_++)A=g(z,d,_,f[_],w),A!==null&&(e&&A.alternate!==null&&z.delete(A.key===null?_:A.key),p=i(A,p,_),C===null?N=A:C.sibling=A,C=A);return e&&z.forEach(function(q){return t(d,q)}),$&&Bt(d,_),N}function y(d,p,f,w){var N=_n(f);if(typeof N!="function")throw Error(k(150));if(f=N.call(f),f==null)throw Error(k(151));for(var C=N=null,z=p,_=p=0,A=null,B=f.next();z!==null&&!B.done;_++,B=f.next()){z.index>_?(A=z,z=null):A=z.sibling;var q=h(d,z,B.value,w);if(q===null){z===null&&(z=A);break}e&&z&&q.alternate===null&&t(d,z),p=i(q,p,_),C===null?N=q:C.sibling=q,C=q,z=A}if(B.done)return n(d,z),$&&Bt(d,_),N;if(z===null){for(;!B.done;_++,B=f.next())B=v(d,B.value,w),B!==null&&(p=i(B,p,_),C===null?N=B:C.sibling=B,C=B);return $&&Bt(d,_),N}for(z=r(d,z);!B.done;_++,B=f.next())B=g(z,d,_,B.value,w),B!==null&&(e&&B.alternate!==null&&z.delete(B.key===null?_:B.key),p=i(B,p,_),C===null?N=B:C.sibling=B,C=B);return e&&z.forEach(function(S){return t(d,S)}),$&&Bt(d,_),N}function T(d,p,f,w){if(typeof f=="object"&&f!==null&&f.type===Xt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _r:e:{for(var N=f.key,C=p;C!==null;){if(C.key===N){if(N=f.type,N===Xt){if(C.tag===7){n(d,C.sibling),p=o(C,f.props.children),p.return=d,d=p;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===pt&&bs(N)===C.type){n(d,C.sibling),p=o(C,f.props),p.ref=Ln(d,C,f),p.return=d,d=p;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===Xt?(p=Ft(f.props.children,d.mode,w,f.key),p.return=d,d=p):(w=ro(f.type,f.key,f.props,null,d.mode,w),w.ref=Ln(d,p,f),w.return=d,d=w)}return l(d);case Gt:e:{for(C=f.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(d,p.sibling),p=o(p,f.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else t(d,p);p=p.sibling}p=_i(f,d.mode,w),p.return=d,d=p}return l(d);case pt:return C=f._init,T(d,p,C(f._payload),w)}if(Fn(f))return x(d,p,f,w);if(_n(f))return y(d,p,f,w);$r(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(d,p.sibling),p=o(p,f),p.return=d,d=p):(n(d,p),p=Ti(f,d.mode,w),p.return=d,d=p),l(d)):n(d,p)}return T}var yn=Gu(!0),Xu=Gu(!1),yo=_t(null),wo=null,ln=null,Wl=null;function Ul(){Wl=ln=wo=null}function Hl(e){var t=yo.current;H(yo),e._currentValue=t}function il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){wo=e,Wl=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ke=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(wo===null)throw Error(k(308));ln=e,wo.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Mt=null;function $l(e){Mt===null?Mt=[e]:Mt.push(e)}function qu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,$l(t)):(n.next=o.next,o.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ft=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(I&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,at(e,n)}return o=r.interleaved,o===null?(t.next=t,$l(r)):(t.next=o.next,o.next=t),r.interleaved=t,at(e,n)}function Xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}function zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var o=e.updateQueue;ft=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(i!==null){var v=o.baseState;l=0,m=c=u=null,s=i;do{var h=s.lane,g=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(h=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){v=x.call(g,v,h);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(g,v,h):x,h==null)break e;v=K({},v,h);break e;case 2:ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=g,u=v):m=m.next=g,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(m===null&&(u=v),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ut|=l,e.lanes=l,e.memoizedState=v}}function Ts(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var hr={},Xe=_t(hr),ar=_t(hr),sr=_t(hr);function Ot(e){if(e===hr)throw Error(k(174));return e}function Ql(e,t){switch(W(sr,t),W(ar,e),W(Xe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ai(t,e)}H(Xe),W(Xe,t)}function wn(){H(Xe),H(ar),H(sr)}function ec(e){Ot(sr.current);var t=Ot(Xe.current),n=Ai(t,e.type);t!==n&&(W(ar,e),W(Xe,n))}function Yl(e){ar.current===e&&(H(Xe),H(ar))}var Q=_t(0);function xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Si=[];function Kl(){for(var e=0;e<Si.length;e++)Si[e]._workInProgressVersionPrimary=null;Si.length=0}var qr=ut.ReactCurrentDispatcher,Ni=ut.ReactCurrentBatchConfig,Wt=0,Y=null,ee=null,re=null,So=!1,Qn=!1,ur=0,wf=0;function ue(){throw Error(k(321))}function Jl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Gl(e,t,n,r,o,i){if(Wt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?Nf:Cf,e=n(r,o),Qn){i=0;do{if(Qn=!1,ur=0,25<=i)throw Error(k(301));i+=1,re=ee=null,t.updateQueue=null,qr.current=Ef,e=n(r,o)}while(Qn)}if(qr.current=No,t=ee!==null&&ee.next!==null,Wt=0,re=ee=Y=null,So=!1,t)throw Error(k(300));return e}function Xl(){var e=ur!==0;return ur=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Oe(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(k(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function cr(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=Oe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var m=c.lane;if((Wt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=v,l=r):u=u.next=v,Y.lanes|=m,Ut|=m}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,Ve(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,Ut|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ei(e){var t=Oe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ve(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function tc(){}function nc(e,t){var n=Y,r=Oe(),o=t(),i=!Ve(r.memoizedState,o);if(i&&(r.memoizedState=o,ke=!0),r=r.queue,ql(ic.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,dr(9,oc.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(k(349));(Wt&30)!==0||rc(n,t,o)}return o}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function oc(e,t,n,r){t.value=n,t.getSnapshot=r,lc(t)&&ac(e)}function ic(e,t,n){return n(function(){lc(t)&&ac(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function ac(e){var t=at(e,1);t!==null&&$e(t,e,1,-1)}function _s(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sf.bind(null,Y,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sc(){return Oe().memoizedState}function Zr(e,t,n,r){var o=Ke();Y.flags|=e,o.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var o=Oe();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&Jl(r,l.deps)){o.memoizedState=dr(t,n,i,r);return}}Y.flags|=e,o.memoizedState=dr(1|t,n,i,r)}function Ps(e,t){return Zr(8390656,8,e,t)}function ql(e,t){return Mo(2048,8,e,t)}function uc(e,t){return Mo(4,2,e,t)}function cc(e,t){return Mo(4,4,e,t)}function dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pc(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,dc.bind(null,t,e),n)}function Zl(){}function fc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vc(e,t,n){return(Wt&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n):(Ve(n,t)||(n=ku(),Y.lanes|=n,Ut|=n,e.baseState=!0),t)}function kf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Ni.transition;Ni.transition={};try{e(!1),t()}finally{F=n,Ni.transition=r}}function hc(){return Oe().memoizedState}function xf(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e))yc(t,n);else if(n=qu(e,t,n,r),n!==null){var o=ve();$e(n,e,r,o),wc(n,t,r)}}function Sf(e,t,n){var r=Ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))yc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ve(s,l)){var u=t.interleaved;u===null?(o.next=o,$l(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=qu(e,t,o,r),n!==null&&(o=ve(),$e(n,e,r,o),wc(n,t,r))}}function gc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function yc(e,t){Qn=So=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}var No={readContext:Me,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Nf={readContext:Me,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Ps,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4194308,4,dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:_s,useDebugValue:Zl,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=_s(!1),t=e[0];return e=kf.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Ke();if($){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),oe===null)throw Error(k(349));(Wt&30)!==0||rc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ps(ic.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,oc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ke(),t=oe.identifierPrefix;if($){var n=rt,r=nt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cf={readContext:Me,useCallback:fc,useContext:Me,useEffect:ql,useImperativeHandle:pc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:mc,useReducer:Ci,useRef:sc,useState:function(){return Ci(cr)},useDebugValue:Zl,useDeferredValue:function(e){var t=Oe();return vc(t,ee.memoizedState,e)},useTransition:function(){var e=Ci(cr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:hc,unstable_isNewReconciler:!1},Ef={readContext:Me,useCallback:fc,useContext:Me,useEffect:ql,useImperativeHandle:pc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:mc,useReducer:Ei,useRef:sc,useState:function(){return Ei(cr)},useDebugValue:Zl,useDeferredValue:function(e){var t=Oe();return ee===null?t.memoizedState=e:vc(t,ee.memoizedState,e)},useTransition:function(){var e=Ei(cr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:hc,unstable_isNewReconciler:!1};function je(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),o=Ct(e),i=ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=St(e,i,o),t!==null&&($e(t,e,o,r),Xr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),o=Ct(e),i=ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=St(e,i,o),t!==null&&($e(t,e,o,r),Xr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Ct(e),o=ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=St(e,o,r),t!==null&&($e(t,e,r,n),Xr(t,e,r))}};function Rs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(o,i):!0}function kc(e,t,n){var r=!1,o=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(o=Se(t)?At:pe.current,r=t.contextTypes,i=(r=r!=null)?hn(e,o):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function al(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Vl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Me(i):(i=Se(t)?At:pe.current,o.context=hn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ll(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Oo.enqueueReplaceState(o,o.state,null),ko(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=ep(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function bi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bf=typeof WeakMap=="function"?WeakMap:Map;function xc(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,yl=r),sl(e,t)},n}function Sc(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){sl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jf.bind(null,e,t,n),t.then(e,e))}function Ds(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ms(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var zf=ut.ReactCurrentOwner,ke=!1;function me(e,t,n,r){t.child=e===null?Xu(t,null,n,r):yn(t,e.child,n,r)}function Os(e,t,n,r,o){n=n.render;var i=t.ref;return fn(t,o),r=Gl(e,t,n,r,i,o),n=Xl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):($&&n&&Fl(t),t.flags|=1,me(e,t,r,o),t.child)}function Is(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Nc(e,t,i,r,o)):(e=ro(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(l,r)&&e.ref===t.ref)return st(e,t,o)}return t.flags|=1,e=Et(i,r),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(rr(i,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,st(e,t,o)}return ul(e,t,n,r,o)}function Cc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(sn,Ce),Ce|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(sn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(sn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(sn,Ce),Ce|=r;return me(e,t,o,n),t.child}function Ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,n,r,o){var i=Se(n)?At:pe.current;return i=hn(t,i),fn(t,o),n=Gl(e,t,n,r,i,o),r=Xl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):($&&r&&Fl(t),t.flags|=1,me(e,t,n,o),t.child)}function Fs(e,t,n,r,o){if(Se(n)){var i=!0;vo(t)}else i=!1;if(fn(t,o),t.stateNode===null)eo(e,t),kc(t,n,r),al(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=Se(n)?At:pe.current,c=hn(t,c));var m=n.getDerivedStateFromProps,v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Bs(t,l,r,c),ft=!1;var h=t.memoizedState;l.state=h,ko(t,r,l,o),u=t.memoizedState,s!==r||h!==u||xe.current||ft?(typeof m=="function"&&(ll(t,n,m,r),u=t.memoizedState),(s=ft||Rs(t,n,s,r,h,u,c))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Zu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:je(t.type,s),l.props=c,v=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=Se(n)?At:pe.current,u=hn(t,u));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||h!==u)&&Bs(t,l,r,u),ft=!1,h=t.memoizedState,l.state=h,ko(t,r,l,o);var x=t.memoizedState;s!==v||h!==x||xe.current||ft?(typeof g=="function"&&(ll(t,n,g,r),x=t.memoizedState),(c=ft||Rs(t,n,c,r,h,x,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return cl(e,t,n,r,i,o)}function cl(e,t,n,r,o,i){Ec(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ns(t,n,!1),st(e,t,i);r=t.stateNode,zf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=yn(t,e.child,null,i),t.child=yn(t,null,s,i)):me(e,t,s,i),t.memoizedState=r.state,o&&Ns(t,n,!0),t.child}function bc(e){var t=e.stateNode;t.pendingContext?Ss(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ss(e,t.context,!1),Ql(e,t.containerInfo)}function As(e,t,n,r,o){return gn(),jl(o),t.flags|=256,me(e,t,n,r),t.child}var dl={dehydrated:null,treeContext:null,retryLane:0};function pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zc(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Q,o&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ao(l,r,0,null),e=Ft(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=pl(n),t.memoizedState=dl,e):ea(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Tf(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Et(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Et(s,i):(i=Ft(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?pl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=dl,r}return i=e.child,e=i.sibling,r=Et(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ea(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vr(e,t,n,r){return r!==null&&jl(r),yn(t,e.child,null,n),e=ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tf(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=bi(Error(k(422))),Vr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ao({mode:"visible",children:r.children},o,0,null),i=Ft(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&yn(t,e.child,null,l),t.child.memoizedState=pl(l),t.memoizedState=dl,i);if((t.mode&1)===0)return Vr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=bi(i,r,void 0),Vr(e,t,l,r)}if(s=(l&e.childLanes)!==0,ke||s){if(r=oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,at(e,o),$e(r,e,o,-1))}return la(),r=bi(Error(k(421))),Vr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Wf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ee=xt(o.nextSibling),be=t,$=!0,Ue=null,e!==null&&(Re[Be++]=nt,Re[Be++]=rt,Re[Be++]=jt,nt=e.id,rt=e.overflow,jt=t),t=ea(t,r.children),t.flags|=4096,t)}function js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),il(e.return,t,n)}function zi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Tc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=Q.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&js(e,n,t);else if(e.tag===19)js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zi(t,!0,n,null,i);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _f(e,t,n){switch(t.tag){case 3:bc(t),gn();break;case 5:ec(t);break;case 1:Se(t.type)&&vo(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(yo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?zc(e,t,n):(W(Q,Q.current&1),e=st(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Tc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Cc(e,t,n)}return st(e,t,n)}var _c,fl,Pc,Rc;_c=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fl=function(){};Pc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ot(Xe.current);var i=null;switch(n){case"input":o=Mi(e,o),r=Mi(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=Fi(e,o),r=Fi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}ji(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pf(e,t,n){var r=t.pendingProps;switch(Al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Se(t.type)&&mo(),ce(t),null;case 3:return r=t.stateNode,wn(),H(xe),H(pe),Kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ue!==null&&(xl(Ue),Ue=null))),fl(e,t),ce(t),null;case 5:Yl(t);var o=Ot(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ce(t),null}if(e=Ot(Xe.current),Hr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Je]=t,r[lr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<jn.length;o++)U(jn[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Ka(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Ga(r,i),U("invalid",r)}ji(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ur(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ur(r.textContent,s,e),o=["children",""+s]):Gn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&U("scroll",r)}switch(n){case"input":Pr(r),Ja(r,i,!0);break;case"textarea":Pr(r),Xa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[lr]=r,_c(e,t,!1,!1),t.stateNode=e;e:{switch(l=Wi(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<jn.length;o++)U(jn[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":Ka(e,r),o=Mi(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ga(e,r),o=Fi(e,r),U("invalid",e);break;default:o=r}ji(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?su(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&Cl(e,i,u,l))}switch(n){case"input":Pr(e),Ja(e,r,!1);break;case"textarea":Pr(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Ot(sr.current),Ot(Xe.current),Hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(i=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Ur(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ur(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ee!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ju(),gn(),t.flags|=98560,i=!1;else if(i=Hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Je]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else Ue!==null&&(xl(Ue),Ue=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Q.current&1)!==0?te===0&&(te=3):la())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return wn(),fl(e,t),e===null&&or(t.stateNode.containerInfo),ce(t),null;case 10:return Hl(t.type._context),ce(t),null;case 17:return Se(t.type)&&mo(),ce(t),null;case 19:if(H(Q),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Dn(i,!1);else{if(te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=xo(e),l!==null){for(t.flags|=128,Dn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>xn&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304)}else{if(!r)if(e=xo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!$)return ce(t),null}else 2*X()-i.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ia(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ce&1073741824)!==0&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Rf(e,t){switch(Al(t),t.tag){case 1:return Se(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),H(xe),H(pe),Kl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Yl(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return wn(),null;case 10:return Hl(t.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var Qr=!1,de=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,b=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function ml(e,t,n){try{n()}catch(r){J(e,t,r)}}var Ws=!1;function Lf(e,t){if(Xi=uo,e=Ou(),Il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,m=0,v=e,h=null;t:for(;;){for(var g;v!==n||o!==0&&v.nodeType!==3||(s=l+o),v!==i||r!==0&&v.nodeType!==3||(u=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(g=v.firstChild)!==null;)h=v,v=g;for(;;){if(v===e)break t;if(h===n&&++c===o&&(s=l),h===i&&++m===r&&(u=l),(g=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=g}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qi={focusedElem:e,selectionRange:n},uo=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,T=x.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:je(t.type,y),T);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return x=Ws,Ws=!1,x}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ml(t,n,i)}o=o.next}while(o!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[lr],delete t[tl],delete t[vf],delete t[hf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lc(e){return e.tag===5||e.tag===3||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}var ie=null,We=!1;function dt(e,t,n){for(n=n.child;n!==null;)Dc(e,t,n),n=n.sibling}function Dc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:de||an(n,t);case 6:var r=ie,o=We;ie=null,dt(e,t,n),ie=r,We=o,ie!==null&&(We?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(We?(e=ie,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),tr(e)):ki(ie,n.stateNode));break;case 4:r=ie,o=We,ie=n.stateNode.containerInfo,We=!0,dt(e,t,n),ie=r,We=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&ml(n,t,l),o=o.next}while(o!==r)}dt(e,t,n);break;case 1:if(!de&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,dt(e,t,n),de=r):dt(e,t,n);break;default:dt(e,t,n)}}function Hs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bf),t.forEach(function(r){var o=Uf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,We=!1;break e;case 3:ie=s.stateNode.containerInfo,We=!0;break e;case 4:ie=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(ie===null)throw Error(k(160));Dc(i,l,o),ie=null,We=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){J(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ye(e),r&4){try{Yn(3,e,e.return),Io(3,e)}catch(y){J(e,e.return,y)}try{Yn(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Ae(t,e),Ye(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Ae(t,e),Ye(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{Xn(o,"")}catch(y){J(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ru(o,i),Wi(s,l);var c=Wi(s,i);for(l=0;l<u.length;l+=2){var m=u[l],v=u[l+1];m==="style"?su(o,v):m==="dangerouslySetInnerHTML"?lu(o,v):m==="children"?Xn(o,v):Cl(o,m,v,c)}switch(s){case"input":Oi(o,i);break;case"textarea":ou(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?un(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[lr]=i}catch(y){J(e,e.return,y)}}break;case 6:if(Ae(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(Ae(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Ae(t,e),Ye(e);break;case 13:Ae(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ra=X())),r&4&&Hs(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||m,Ae(t,e),de=c):Ae(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&(e.mode&1)!==0)for(b=e,m=e.child;m!==null;){for(v=b=m;b!==null;){switch(h=b,g=h.child,h.tag){case 0:case 11:case 14:case 15:Yn(4,h,h.return);break;case 1:an(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:an(h,h.return);break;case 22:if(h.memoizedState!==null){Vs(v);continue}}g!==null?(g.return=h,b=g):Vs(v)}m=m.sibling}e:for(m=null,v=e;;){if(v.tag===5){if(m===null){m=v;try{o=v.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=au("display",l))}catch(y){J(e,e.return,y)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(y){J(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ae(t,e),Ye(e),r&4&&Hs(e);break;case 21:break;default:Ae(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xn(o,""),r.flags&=-33);var i=Us(e);gl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Us(e);hl(e,s,l);break;default:throw Error(k(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Df(e,t,n){b=e,Oc(e,t,n)}function Oc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Qr;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||de;s=Qr;var c=de;if(Qr=l,(de=u)&&!c)for(b=o;b!==null;)l=b,u=l.child,l.tag===22&&l.memoizedState!==null?Qs(o):u!==null?(u.return=l,b=u):Qs(o);for(;i!==null;)b=i,Oc(i,t,n),i=i.sibling;b=o,Qr=s,de=c}$s(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,b=i):$s(e,t,n)}}function $s(e){for(;b!==null;){var t=b;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:de||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ts(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ts(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&tr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&vl(t)}catch(h){J(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Vs(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Qs(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{vl(t)}catch(u){J(t,i,u)}break;case 5:var l=t.return;try{vl(t)}catch(u){J(t,l,u)}}}catch(u){J(t,t.return,u)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var Mf=Math.ceil,Co=ut.ReactCurrentDispatcher,ta=ut.ReactCurrentOwner,De=ut.ReactCurrentBatchConfig,I=0,oe=null,Z=null,le=0,Ce=0,sn=_t(0),te=0,pr=null,Ut=0,Fo=0,na=0,Kn=null,we=null,ra=0,xn=1/0,et=null,Eo=!1,yl=null,Nt=null,Yr=!1,gt=null,bo=0,Jn=0,wl=null,to=-1,no=0;function ve(){return(I&6)!==0?X():to!==-1?to:to=X()}function Ct(e){return(e.mode&1)===0?1:(I&2)!==0&&le!==0?le&-le:yf.transition!==null?(no===0&&(no=ku()),no):(e=F,e!==0||(e=window.event,e=e===void 0?16:zu(e.type)),e)}function $e(e,t,n,r){if(50<Jn)throw Jn=0,wl=null,Error(k(185));fr(e,n,r),((I&2)===0||e!==oe)&&(e===oe&&((I&2)===0&&(Fo|=n),te===4&&vt(e,le)),Ne(e,r),n===1&&I===0&&(t.mode&1)===0&&(xn=X()+500,Do&&Pt()))}function Ne(e,t){var n=e.callbackNode;wp(e,t);var r=so(e,e===oe?le:0);if(r===0)n!==null&&es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&es(n),t===1)e.tag===0?gf(Ys.bind(null,e)):Qu(Ys.bind(null,e)),ff(function(){(I&6)===0&&Pt()}),n=null;else{switch(xu(r)){case 1:n=_l;break;case 4:n=yu;break;case 16:n=ao;break;case 536870912:n=wu;break;default:n=ao}n=$c(n,Ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ic(e,t){if(to=-1,no=0,(I&6)!==0)throw Error(k(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=so(e,e===oe?le:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=zo(e,r);else{t=r;var o=I;I|=2;var i=Ac();(oe!==e||le!==t)&&(et=null,xn=X()+500,It(e,t));do try{Ff();break}catch(s){Fc(e,s)}while(!0);Ul(),Co.current=i,I=o,Z!==null?t=0:(oe=null,le=0,t=te)}if(t!==0){if(t===2&&(o=Qi(e),o!==0&&(r=o,t=kl(e,o))),t===1)throw n=pr,It(e,0),vt(e,r),Ne(e,X()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Of(o)&&(t=zo(e,r),t===2&&(i=Qi(e),i!==0&&(r=i,t=kl(e,i))),t===1))throw n=pr,It(e,0),vt(e,r),Ne(e,X()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Lt(e,we,et);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=ra+500-X(),10<t)){if(so(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=el(Lt.bind(null,e,we,et),t);break}Lt(e,we,et);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-He(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mf(r/1960))-r,10<r){e.timeoutHandle=el(Lt.bind(null,e,we,et),r);break}Lt(e,we,et);break;case 5:Lt(e,we,et);break;default:throw Error(k(329))}}}return Ne(e,X()),e.callbackNode===n?Ic.bind(null,e):null}function kl(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=zo(e,t),e!==2&&(t=we,we=n,t!==null&&xl(t)),e}function xl(e){we===null?we=e:we.push.apply(we,e)}function Of(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ve(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~na,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Ys(e){if((I&6)!==0)throw Error(k(327));mn();var t=so(e,0);if((t&1)===0)return Ne(e,X()),null;var n=zo(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=kl(e,r))}if(n===1)throw n=pr,It(e,0),vt(e,t),Ne(e,X()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,we,et),Ne(e,X()),null}function oa(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(xn=X()+500,Do&&Pt())}}function Ht(e){gt!==null&&gt.tag===0&&(I&6)===0&&mn();var t=I;I|=1;var n=De.transition,r=F;try{if(De.transition=null,F=1,e)return e()}finally{F=r,De.transition=n,I=t,(I&6)===0&&Pt()}}function ia(){Ce=sn.current,H(sn)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pf(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:wn(),H(xe),H(pe),Kl();break;case 5:Yl(r);break;case 4:wn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Hl(r.type._context);break;case 22:case 23:ia()}n=n.return}if(oe=e,Z=e=Et(e.current,null),le=Ce=t,te=0,pr=null,na=Fo=Ut=0,we=Kn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Mt=null}return e}function Fc(e,t){do{var n=Z;try{if(Ul(),qr.current=No,So){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}So=!1}if(Wt=0,re=ee=Y=null,Qn=!1,ur=0,ta.current=null,n===null||n.return===null){te=1,pr=t,Z=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=le,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,v=m.tag;if((m.mode&1)===0&&(v===0||v===11||v===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Ds(l);if(g!==null){g.flags&=-257,Ms(g,l,s,i,t),g.mode&1&&Ls(i,c,t),t=g,u=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(u),t.updateQueue=y}else x.add(u);break e}else{if((t&1)===0){Ls(i,c,t),la();break e}u=Error(k(426))}}else if($&&s.mode&1){var T=Ds(l);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),Ms(T,l,s,i,t),jl(kn(u,s));break e}}i=u=kn(u,s),te!==4&&(te=2),Kn===null?Kn=[i]:Kn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=xc(i,u,t);zs(i,d);break e;case 1:s=u;var p=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Nt===null||!Nt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Sc(i,s,t);zs(i,w);break e}}i=i.return}while(i!==null)}Wc(n)}catch(N){t=N,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Ac(){var e=Co.current;return Co.current=No,e===null?No:e}function la(){(te===0||te===3||te===2)&&(te=4),oe===null||(Ut&268435455)===0&&(Fo&268435455)===0||vt(oe,le)}function zo(e,t){var n=I;I|=2;var r=Ac();(oe!==e||le!==t)&&(et=null,It(e,t));do try{If();break}catch(o){Fc(e,o)}while(!0);if(Ul(),I=n,Co.current=r,Z!==null)throw Error(k(261));return oe=null,le=0,te}function If(){for(;Z!==null;)jc(Z)}function Ff(){for(;Z!==null&&!cp();)jc(Z)}function jc(e){var t=Hc(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Wc(e):Z=t,ta.current=null}function Wc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Pf(n,t,Ce),n!==null){Z=n;return}}else{if(n=Rf(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Lt(e,t,n){var r=F,o=De.transition;try{De.transition=null,F=1,Af(e,t,n,r)}finally{De.transition=o,F=r}return null}function Af(e,t,n,r){do mn();while(gt!==null);if((I&6)!==0)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kp(e,i),e===oe&&(Z=oe=null,le=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yr||(Yr=!0,$c(ao,function(){return mn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=De.transition,De.transition=null;var l=F;F=1;var s=I;I|=4,ta.current=null,Lf(e,n),Mc(n,e),af(qi),uo=!!Xi,qi=Xi=null,e.current=n,Df(n,e,o),dp(),I=s,F=l,De.transition=i}else e.current=n;if(Yr&&(Yr=!1,gt=e,bo=o),i=e.pendingLanes,i===0&&(Nt=null),mp(n.stateNode,r),Ne(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Eo)throw Eo=!1,e=yl,yl=null,e;return(bo&1)!==0&&e.tag!==0&&mn(),i=e.pendingLanes,(i&1)!==0?e===wl?Jn++:(Jn=0,wl=e):Jn=0,Pt(),null}function mn(){if(gt!==null){var e=xu(bo),t=De.transition,n=F;try{if(De.transition=null,F=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,bo=0,(I&6)!==0)throw Error(k(331));var o=I;for(I|=4,b=e.current;b!==null;){var i=b,l=i.child;if((b.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(b=c;b!==null;){var m=b;switch(m.tag){case 0:case 11:case 15:Yn(8,m,i)}var v=m.child;if(v!==null)v.return=m,b=v;else for(;b!==null;){m=b;var h=m.sibling,g=m.return;if(Bc(m),m===c){b=null;break}if(h!==null){h.return=g,b=h;break}b=g}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}b=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,b=l;else e:for(;b!==null;){if(i=b,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Yn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,b=d;break e}b=i.return}}var p=e.current;for(b=p;b!==null;){l=b;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,b=f;else e:for(l=p;b!==null;){if(s=b,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Io(9,s)}}catch(N){J(s,s.return,N)}if(s===l){b=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,b=w;break e}b=s.return}}if(I=o,Pt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{F=n,De.transition=t}}return!1}function Ks(e,t,n){t=kn(n,t),t=xc(e,t,1),e=St(e,t,1),t=ve(),e!==null&&(fr(e,1,t),Ne(e,t))}function J(e,t,n){if(e.tag===3)Ks(e,e,n);else for(;t!==null;){if(t.tag===3){Ks(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=kn(n,e),e=Sc(t,e,1),t=St(t,e,1),e=ve(),t!==null&&(fr(t,1,e),Ne(t,e));break}}t=t.return}}function jf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(le&n)===n&&(te===4||te===3&&(le&130023424)===le&&500>X()-ra?It(e,0):na|=n),Ne(e,t)}function Uc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var n=ve();e=at(e,t),e!==null&&(fr(e,t,n),Ne(e,n))}function Wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uc(e,n)}function Uf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Uc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ke=!1,_f(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,$&&(t.flags&1048576)!==0&&Yu(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eo(e,t),e=t.pendingProps;var o=hn(t,pe.current);fn(t,n),o=Gl(null,t,r,e,o,n);var i=Xl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(i=!0,vo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vl(t),o.updater=Oo,t.stateNode=o,o._reactInternals=t,al(t,r,e,n),t=cl(null,t,r,!0,i,n)):(t.tag=0,$&&i&&Fl(t),me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$f(r),e=je(r,e),o){case 0:t=ul(null,t,r,e,n);break e;case 1:t=Fs(null,t,r,e,n);break e;case 11:t=Os(null,t,r,e,n);break e;case 14:t=Is(null,t,r,je(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),Fs(e,t,r,o,n);case 3:e:{if(bc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Zu(e,t),ko(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=kn(Error(k(423)),t),t=As(e,t,r,n,o);break e}else if(r!==o){o=kn(Error(k(424)),t),t=As(e,t,r,n,o);break e}else for(Ee=xt(t.stateNode.containerInfo.firstChild),be=t,$=!0,Ue=null,n=Xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===o){t=st(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return ec(t),e===null&&ol(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Zi(r,o)?l=null:i!==null&&Zi(r,i)&&(t.flags|=32),Ec(e,t),me(e,t,l,n),t.child;case 6:return e===null&&ol(t),null;case 13:return zc(e,t,n);case 4:return Ql(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),Os(e,t,r,o,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(yo,r._currentValue),r._currentValue=l,i!==null)if(Ve(i.value,l)){if(i.children===o.children&&!xe.current){t=st(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ot(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),il(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),il(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fn(t,n),o=Me(o),r=r(o),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,o=je(r,t.pendingProps),o=je(r.type,o),Is(e,t,r,o,n);case 15:return Nc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),eo(e,t),t.tag=1,Se(r)?(e=!0,vo(t)):e=!1,fn(t,n),kc(t,r,o),al(t,r,o,n),cl(null,t,r,!0,e,n);case 19:return Tc(e,t,n);case 22:return Cc(e,t,n)}throw Error(k(156,t.tag))};function $c(e,t){return gu(e,t)}function Hf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new Hf(e,t,n,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bl)return 11;if(e===zl)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")aa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xt:return Ft(n.children,o,i,t);case El:l=8,o|=8;break;case Ri:return e=Le(12,n,t,o|2),e.elementType=Ri,e.lanes=i,e;case Bi:return e=Le(13,n,t,o),e.elementType=Bi,e.lanes=i,e;case Li:return e=Le(19,n,t,o),e.elementType=Li,e.lanes=i,e;case eu:return Ao(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qs:l=10;break e;case Zs:l=9;break e;case bl:l=11;break e;case zl:l=14;break e;case pt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Le(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ft(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=Le(22,e,r,t),e.elementType=eu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ti(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function _i(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sa(e,t,n,r,o,i,l,s,u){return e=new Vf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(i),e}function Qf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vc(e){if(!e)return zt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Se(n))return Vu(e,n,t)}return t}function Qc(e,t,n,r,o,i,l,s,u){return e=sa(n,r,!0,e,o,i,l,s,u),e.context=Vc(null),n=e.current,r=ve(),o=Ct(n),i=ot(r,o),i.callback=t??null,St(n,i,o),e.current.lanes=o,fr(e,o,r),Ne(e,r),e}function jo(e,t,n,r){var o=t.current,i=ve(),l=Ct(o);return n=Vc(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(o,t,l),e!==null&&($e(e,o,l,i),Xr(e,o,l)),l}function To(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Js(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ua(e,t){Js(e,t),(e=e.alternate)&&Js(e,t)}function Yf(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}Wo.prototype.render=ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));jo(e,t,null,null)};Wo.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){jo(null,e,null,null)}),t[lt]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&bu(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gs(){}function Kf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=To(l);i.call(c)}}var l=Qc(t,r,e,0,null,!1,!1,"",Gs);return e._reactRootContainer=l,e[lt]=l.current,or(e.nodeType===8?e.parentNode:e),Ht(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=To(u);s.call(c)}}var u=sa(e,0,!1,null,null,!1,!1,"",Gs);return e._reactRootContainer=u,e[lt]=u.current,or(e.nodeType===8?e.parentNode:e),Ht(function(){jo(t,u,n,r)}),u}function Ho(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=To(l);s.call(u)}}jo(t,l,e,o)}else l=Kf(n,t,e,o,r);return To(l)}Su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(Pl(t,n|1),Ne(t,X()),(I&6)===0&&(xn=X()+500,Pt()))}break;case 13:Ht(function(){var r=at(e,1);if(r!==null){var o=ve();$e(r,e,1,o)}}),ua(e,1)}};Rl=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=ve();$e(t,e,134217728,n)}ua(e,134217728)}};Nu=function(e){if(e.tag===13){var t=Ct(e),n=at(e,t);if(n!==null){var r=ve();$e(n,e,t,r)}ua(e,t)}};Cu=function(){return F};Eu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Hi=function(e,t,n){switch(t){case"input":if(Oi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Lo(r);if(!o)throw Error(k(90));nu(r),Oi(r,o)}}}break;case"textarea":ou(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};du=oa;pu=Ht;var Jf={usingClientEntryPoint:!1,Events:[vr,tn,Lo,uu,cu,oa]},Mn={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||Yf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(On=__REACT_DEVTOOLS_GLOBAL_HOOK__,!On.isDisabled&&On.supportsFiber))try{_o=On.inject(Gf),Ge=On}catch{}var On;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(t))throw Error(k(200));return Qf(e,t,null,n)};_e.createRoot=function(e,t){if(!da(e))throw Error(k(299));var n=!1,r="",o=Yc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sa(e,1,!1,null,null,n,!1,r,o),e[lt]=t.current,or(e.nodeType===8?e.parentNode:e),new ca(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=vu(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Ht(e)};_e.hydrate=function(e,t,n){if(!Uo(t))throw Error(k(200));return Ho(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!da(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Yc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Qc(t,null,e,1,n??null,o,!1,i,l),e[lt]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Wo(t)};_e.render=function(e,t,n){if(!Uo(t))throw Error(k(200));return Ho(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(k(40));return e._reactRootContainer?(Ht(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};_e.unstable_batchedUpdates=oa;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ho(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426"});var Xc=Ze((Om,Gc)=>{"use strict";function Jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jc)}catch(e){console.error(e)}}Jc(),Gc.exports=Kc()});var Zc=Ze(pa=>{"use strict";var qc=Xc();pa.createRoot=qc.createRoot,pa.hydrateRoot=qc.hydrateRoot;var Im});var td=Ze($o=>{"use strict";var Xf=Nr(),qf=Symbol.for("react.element"),Zf=Symbol.for("react.fragment"),em=Object.prototype.hasOwnProperty,tm=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nm={key:!0,ref:!0,__self:!0,__source:!0};function ed(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)em.call(t,r)&&!nm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:qf,type:e,key:i,ref:l,props:o,_owner:tm.current}}$o.Fragment=Zf;$o.jsx=ed;$o.jsxs=ed});var fa=Ze((jm,nd)=>{"use strict";nd.exports=td()});var R=wr(Nr()),hd=wr(Zc()),a=wr(fa()),V={"two-hand-swing":{name:"Two-Hand Swing",category:"Power",difficulty:"Beginner",targets:"Glutes \xB7 Hamstrings \xB7 Core",cue:"Hinge at the hips. Drive through the heels. Snap the hips to float the bell to chest height.",videoId:"1Qi0NQW89Oc",pairs:["goblet-squat","press","row","farmer-carry"]},"single-arm-swing":{name:"Single-Arm Swing",category:"Power",difficulty:"Intermediate",targets:"Glutes \xB7 Core \xB7 Grip",cue:"Same hinge as the two-hand. Free hand mirrors the bell. Resist the twist at the top.",pairs:["clean","press","row","snatch"]},clean:{name:"Single-Arm Clean",category:"Power",difficulty:"Intermediate",targets:"Posterior Chain \xB7 Shoulders",cue:"Zip the bell up the body. Catch in the rack position with a soft, silent landing.",optional:"With two matched bells, clean both at once for the Double Clean \u2014 symmetric, heavier work.",pairs:["press","goblet-squat","row","snatch"]},snatch:{name:"Single-Arm Snatch",category:"Power",difficulty:"Advanced",targets:"Full Body \xB7 Conditioning",cue:"High pull, punch through, catch overhead in one fluid motion. The bell rests, not lands.",pairs:["goblet-squat","farmer-carry","push-press","overhead-carry"]},"push-press":{name:"Push Press",category:"Power",difficulty:"Intermediate",targets:"Shoulders \xB7 Legs \xB7 Core",cue:"Dip the knees a few inches. Drive up. Use leg drive to punch the bell overhead.",optional:"With two matched bells, work both sides at once for a Double Push Press.",pairs:["row","goblet-squat","two-hand-swing","snatch"]},"sumo-pull":{name:"Sumo High Pull",category:"Power",difficulty:"Intermediate",targets:"Posterior Chain \xB7 Traps",cue:"Wide stance, toes out. Pull from the hips. Elbows lead the bell up to chin height.",pairs:["thruster","two-hand-swing","snatch","farmer-carry"]},"goblet-squat":{name:"Goblet Squat",category:"Strength",difficulty:"Beginner",targets:"Quads \xB7 Glutes \xB7 Core",cue:"Hold the bell at chest by the horns. Elbows track between the knees. Sit between the heels.",pairs:["two-hand-swing","press","deadlift","halo"]},"front-rack-squat":{name:"Front Rack Squat",category:"Strength",difficulty:"Intermediate",targets:"Quads \xB7 Upper Back \xB7 Core",cue:"Bell in the rack, elbow tight to the ribs. Squat with a vertical torso. Sit between the heels.",optional:"With two matched bells, hold both in the rack position for a double front rack squat.",pairs:["press","two-hand-swing","row","halo"]},press:{name:"Strict Press",category:"Strength",difficulty:"Beginner",targets:"Shoulders \xB7 Triceps \xB7 Core",cue:"Brace the trunk. Press straight overhead. Finish with the bicep past the ear.",optional:"If you have two matched bells, press both at the same time for a heavier symmetric variation.",pairs:["row","two-hand-swing","goblet-squat","halo"]},"clean-and-press":{name:"Clean & Press",category:"Strength",difficulty:"Intermediate",targets:"Full Body \xB7 Shoulders",cue:"Clean to rack. Brief pause. Press overhead. One fluid sequence, one breath cycle.",pairs:["goblet-squat","row","snatch","farmer-carry"]},row:{name:"Bent-Over Row",category:"Strength",difficulty:"Beginner",targets:"Lats \xB7 Mid-Back \xB7 Biceps",cue:"Hinge to forty-five degrees. Pull the bell to the hip. Squeeze the shoulder blade hard.",pairs:["press","two-hand-swing","deadlift","farmer-carry"]},"renegade-row":{name:"Plank Row",category:"Strength",difficulty:"Advanced",targets:"Lats \xB7 Core \xB7 Shoulders",cue:"Plank position, one hand on the bell. Row to the hip. Switch sides each rep. Fight the rotation \u2014 keep the hips square.",optional:"For trainees with two matched bells, this becomes the classic Renegade Row \u2014 plank over both bells, alternating rows.",pairs:["thruster","two-hand-swing","push-press","figure-eight"]},deadlift:{name:"Kettlebell Deadlift",category:"Strength",difficulty:"Beginner",targets:"Hamstrings \xB7 Glutes \xB7 Back",cue:"Push the floor away. Hinge, do not squat. Lock out with the glutes, not the lower back.",pairs:["press","row","farmer-carry","single-leg-deadlift"]},"single-leg-deadlift":{name:"Single-Leg Deadlift",category:"Strength",difficulty:"Intermediate",targets:"Hamstrings \xB7 Glutes \xB7 Balance",cue:"Hinge over a planted leg. Back leg lifts like a kickstand. Pull the bell to standing.",pairs:["row","press","goblet-squat","halo"]},"reverse-lunge":{name:"Reverse Lunge",category:"Strength",difficulty:"Beginner",targets:"Quads \xB7 Glutes \xB7 Hips",cue:"Hold the bell in goblet or rack. Step back, drop the rear knee. Drive through the front heel.",optional:"With two matched bells, hold one in each hand at your sides (suitcase) or both in rack for more load.",pairs:["press","row","halo","goblet-squat"]},thruster:{name:"Thruster",category:"Conditioning",difficulty:"Intermediate",targets:"Legs \xB7 Shoulders \xB7 Core",cue:"Bell in the rack on one side. Front squat, then drive up and press the bell overhead in one motion. Use the legs to launch.",optional:"For trainees with two matched bells, work both sides at once as a Double Thruster \u2014 same movement, symmetric load.",pairs:["row","two-hand-swing","farmer-carry","renegade-row"]},"farmer-carry":{name:"Farmer Carry",category:"Conditioning",difficulty:"Beginner",targets:"Grip \xB7 Core \xB7 Traps",cue:"Tall posture. Tight midline. Shoulders packed. Walk with purpose, never with slack.",pairs:["two-hand-swing","goblet-squat","press","deadlift"]},"suitcase-carry":{name:"Suitcase Carry",category:"Conditioning",difficulty:"Beginner",targets:"Obliques \xB7 Grip \xB7 Core",cue:"One bell, one side. Stay tall and square. Do not let the loaded side dip.",pairs:["two-hand-swing","press","row","single-leg-deadlift"]},"turkish-getup":{name:"Turkish Get-Up",category:"Stability",difficulty:"Advanced",targets:"Full Body \xB7 Shoulder \xB7 Core",cue:"Eyes on the bell. Press, roll to elbow, post the hand, sweep the leg, stand. Reverse it.",pairs:["two-hand-swing","windmill","press","overhead-carry"]},"bottoms-up-press":{name:"Bottoms-Up Press",category:"Stability",difficulty:"Advanced",targets:"Shoulders \xB7 Grip \xB7 Core",cue:"Press the bell with the bottom up, handle in hand. Crush the grip. Stay tight head to toe.",pairs:["row","two-hand-swing","halo","turkish-getup"]},"overhead-carry":{name:"Overhead Carry",category:"Stability",difficulty:"Intermediate",targets:"Shoulders \xB7 Core \xB7 Posture",cue:"Bell locked out overhead. Bicep past the ear. Walk with purpose \u2014 eyes forward.",pairs:["press","snatch","turkish-getup","windmill"]},halo:{name:"Halo",category:"Mobility",difficulty:"Beginner",targets:"Shoulders \xB7 Thoracic Spine",cue:"Circle the bell around the head. Keep the elbows tight, ribs down, eyes forward.",pairs:["press","goblet-squat","turkish-getup","windmill"]},windmill:{name:"Windmill",category:"Mobility",difficulty:"Intermediate",targets:"Obliques \xB7 Shoulders \xB7 Hips",cue:"Eyes locked on the bell overhead. Push the hip out. Reach the free hand to the floor.",pairs:["turkish-getup","press","halo","cossack-squat"]},"around-the-world":{name:"Around the World",category:"Mobility",difficulty:"Beginner",targets:"Shoulders \xB7 Core \xB7 Coordination",cue:"Pass the bell around the waist in a circle. Stay tall. Switch direction halfway through.",pairs:["halo","goblet-squat","press","windmill"]},"cossack-squat":{name:"Cossack Squat",category:"Mobility",difficulty:"Intermediate",targets:"Hips \xB7 Adductors \xB7 Ankles",cue:"Wide stance, bell at chest. Shift weight to one side; opposite foot rolls to its heel.",pairs:["windmill","halo","press","goblet-squat"]},"figure-eight":{name:"Figure 8",category:"Core",difficulty:"Intermediate",targets:"Core \xB7 Coordination",cue:"Weave the bell between the legs in a figure eight. Stay low. Stay loose. Stay smooth.",pairs:["russian-twist","snatch","thruster","two-hand-swing"]},"russian-twist":{name:"Russian Twist",category:"Core",difficulty:"Beginner",targets:"Obliques \xB7 Abs",cue:"Seated, lean back to forty-five. Rotate the bell side to side. Tap the floor each rep.",pairs:["figure-eight","halo","farmer-carry","deadlift"]}},cd=["Power","Strength","Conditioning","Stability","Mobility","Core"],dd=["Beginner","Intermediate","Advanced"],rm=[{id:"foundation",name:"The Foundation",tag:"Beginner",duration:"~18 min",bells:1,description:"Master the basics. Three rounds of the six fundamental movements. Light load. Perfect form.",blocks:[{id:"halo",mode:"reps",reps:"5 each way",rest:30},{type:"round",rounds:3,name:"Strength Circuit",restBetweenRounds:60,blocks:[{id:"goblet-squat",mode:"reps",reps:"10",rest:30},{id:"two-hand-swing",mode:"time",duration:25,rest:30},{id:"press",mode:"reps",reps:"5 each side",rest:30},{id:"row",mode:"reps",reps:"8 each side",rest:45}]},{id:"farmer-carry",mode:"time",duration:45,rest:0}]},{id:"forge",name:"The Engine",tag:"Intermediate",duration:"~25 min",bells:1,description:"Build the engine. Three rounds of clean, press, squat, and row. Power finisher.",blocks:[{id:"halo",mode:"reps",reps:"8 each way",rest:20},{id:"two-hand-swing",mode:"time",duration:40,rest:60},{type:"round",rounds:3,name:"Strength Circuit",restBetweenRounds:75,blocks:[{id:"clean",mode:"reps",reps:"6 each side",rest:30},{id:"press",mode:"reps",reps:"5 each side",rest:30},{id:"goblet-squat",mode:"reps",reps:"10",rest:30},{id:"row",mode:"reps",reps:"8 each side",rest:45}]},{id:"thruster",mode:"time",duration:30,rest:60},{id:"farmer-carry",mode:"time",duration:60,rest:0}]},{id:"anvil",name:"The Anvil",tag:"Advanced",duration:"~32 min",bells:1,description:"Heavy strength work. Five rounds of compound lifts, three rounds of power. Slow on the way down. Ballistic on the way up.",blocks:[{id:"turkish-getup",mode:"reps",reps:"2 each side",rest:75},{type:"round",rounds:5,name:"Heavy Block",restBetweenRounds:90,blocks:[{id:"deadlift",mode:"reps",reps:"5 (heavy)",rest:75},{id:"press",mode:"reps",reps:"4 each side (heavy)",rest:75},{id:"front-rack-squat",mode:"reps",reps:"6 (heavy)",rest:60}]},{type:"round",rounds:3,name:"Power Finisher",restBetweenRounds:60,blocks:[{id:"snatch",mode:"reps",reps:"5 each side",rest:30},{id:"windmill",mode:"reps",reps:"3 each side",rest:45}]},{id:"two-hand-swing",mode:"time",duration:60,rest:0}]},{id:"emom-iron",name:"EMOM Iron",tag:"Conditioning \xB7 Circuit",duration:"~14 min",bells:1,description:"Every minute on the minute. Four rounds of three movements. Beat the clock.",blocks:[{id:"halo",mode:"reps",reps:"5 each way",rest:30},{type:"round",rounds:4,name:"EMOM Circuit",blocks:[{id:"two-hand-swing",mode:"reps",reps:"15",rest:15},{id:"goblet-squat",mode:"reps",reps:"10",rest:15},{id:"push-press",mode:"reps",reps:"6 each side",rest:30}]},{id:"farmer-carry",mode:"time",duration:60,rest:0}]},{id:"inferno",name:"Inferno",tag:"Conditioning",duration:"~15 min",bells:1,description:"Forty seconds on, twenty off. Three rounds. Burn the lungs to ash.",blocks:[{type:"round",rounds:3,name:"Burn Circuit",restBetweenRounds:60,blocks:[{id:"two-hand-swing",mode:"time",duration:40,rest:20},{id:"goblet-squat",mode:"time",duration:40,rest:20},{id:"figure-eight",mode:"time",duration:40,rest:60}]},{id:"farmer-carry",mode:"time",duration:60,rest:0}]},{id:"iron-core",name:"Iron Core",tag:"Core Focus",duration:"~16 min",bells:1,description:"Bracing. Rotation. Anti-rotation. Three rounds of midline work, bookended by halos and carries.",blocks:[{id:"halo",mode:"reps",reps:"8 each way",rest:30},{id:"turkish-getup",mode:"reps",reps:"2 each side",rest:60},{type:"round",rounds:3,name:"Core Circuit",restBetweenRounds:60,blocks:[{id:"windmill",mode:"reps",reps:"3 each side",rest:30},{id:"russian-twist",mode:"time",duration:30,rest:30},{id:"figure-eight",mode:"time",duration:30,rest:30}]},{id:"farmer-carry",mode:"time",duration:60,rest:0}]}],rd="forge-custom-workouts-v1",od="forge-history-v1",id="forge-settings-v1",ld="forge-notes-v1",ad={sound:!0,vibration:!0},om=`
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

  :root {
    --ink: #0d0c0a;
    --char: #161413;
    --surface: #1c1a17;
    --surface-2: #25221e;
    --bone: #efe9d9;
    --bone-dim: #d6cfbd;
    --ash: #b0a99a;
    --sage: #6b8068;
    --sage-deep: #455a44;
    --steel: #9a9588;
    --border: #2e2a25;
  }
  * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
  body { margin: 0; }

  .forge-root {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    background: var(--ink);
    color: var(--bone);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  .forge-root::before {
    content: '';
    position: fixed; inset: 0;
    pointer-events: none;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    z-index: 100;
  }

  .display {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    letter-spacing: 0.01em;
    line-height: 0.92;
    text-transform: uppercase;
  }
  .label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ash);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border);
    background: var(--ink);
    position: sticky; top: 0; z-index: 10;
    gap: 10px;
    flex-wrap: wrap;
  }
  .brand { display: flex; align-items: center; gap: 10px; }
  .brand-mark { width: 26px; height: 26px; color: var(--sage); }
  .brand-name {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: 22px;
    letter-spacing: 0.05em;
  }
  .brand-name .accent { color: var(--sage); }

  .header-right { display: flex; gap: 8px; align-items: center; }

  .nav {
    display: flex;
    gap: 2px;
    padding: 3px;
    background: var(--surface);
    border: 1px solid var(--border);
  }
  .nav button {
    background: transparent;
    border: none;
    color: var(--ash);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 7px 9px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .nav button.active { background: var(--sage); color: var(--ink); font-weight: 700; }
  .nav button:not(.active):hover { color: var(--bone); }

  .gear-btn {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--ash);
    width: 34px; height: 34px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.15s;
    padding: 0;
  }
  .gear-btn:hover { color: var(--sage); border-color: var(--sage); }

  .container { padding: 24px 20px 80px; max-width: 720px; margin: 0 auto; }

  .hero { padding: 28px 0 36px; border-bottom: 1px solid var(--border); margin-bottom: 28px; }
  .hero-eyebrow {
    color: var(--sage);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .hero-title { font-size: clamp(52px, 13vw, 92px); }
  .hero-sub {
    margin-top: 18px;
    color: var(--bone);
    font-size: 14px;
    font-weight: 500;
    max-width: 34ch;
    line-height: 1.55;
  }

  .workout-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 22px 22px 24px;
    margin-bottom: 14px;
    cursor: pointer;
    transition: all 0.18s ease;
    position: relative;
    overflow: hidden;
  }
  .workout-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--sage);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.25s ease;
  }
  .workout-card:hover { background: var(--surface-2); border-color: var(--sage-deep); }
  .workout-card:hover::before { transform: scaleY(1); }
  .workout-card.custom::before { transform: scaleY(1); background: var(--steel); }
  .workout-card.custom:hover::before { background: var(--sage); }
  .workout-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 12px; flex-wrap: wrap; }
  .workout-tag {
    color: var(--sage);
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
  }
  .workout-tag.custom { color: var(--steel); }
  .workout-dur { color: var(--bone-dim); font-size: 12px; font-weight: 500; letter-spacing: 0.08em; }
  .workout-name { font-size: 36px; margin-bottom: 10px; }
  .workout-desc { color: var(--bone); font-size: 13px; font-weight: 500; line-height: 1.6; }

  .card-actions {
    display: flex; gap: 8px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .card-actions button {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 12px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .card-actions button:hover { border-color: var(--sage); color: var(--sage); }
  .card-actions button.danger:hover { border-color: var(--sage-deep); color: var(--sage-deep); }

  .exercise-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
  }
  .exercise-row:last-child { border-bottom: none; }
  .ex-name {
    font-size: 20px;
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .ex-targets { color: var(--bone-dim); font-size: 12px; font-weight: 500; margin-top: 4px; letter-spacing: 0.04em; }
  .ex-diff {
    display: inline-block;
    font-size: 9px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 2px 8px;
    border: 1px solid var(--border);
    color: var(--bone-dim);
    margin-top: 6px;
    margin-right: 6px;
  }
  .ex-diff.Beginner { border-color: #8a7e6a; color: #b8b39e; }
  .ex-diff.Intermediate { border-color: #c4a44a; color: #d4b96c; }
  .ex-diff.Advanced { border-color: var(--sage-deep); color: var(--sage); }

  .ex-optional {
    color: var(--bone-dim);
    font-size: 13px;
    font-weight: 500;
    line-height: 1.55;
    margin-top: 10px;
    padding: 8px 12px;
    border-left: 2px solid var(--sage-deep);
    background: var(--char);
    font-style: italic;
    max-width: 50ch;
  }
  .ex-optional span { color: var(--bone-dim); font-style: normal; }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: var(--sage);
    color: var(--ink);
    border: none;
    padding: 18px 28px;
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    width: 100%;
    transition: all 0.15s;
    text-decoration: none;
  }
  .btn:hover { background: var(--bone); }
  .btn:active { transform: translateY(1px); }
  .btn:disabled { background: var(--surface-2); color: var(--ash); cursor: not-allowed; }
  .btn.ghost { background: transparent; color: var(--bone); border: 1px solid var(--border); }
  .btn.ghost:hover { border-color: var(--sage); color: var(--sage); background: transparent; }
  .btn.small { padding: 12px 18px; font-size: 13px; width: auto; }

  .back-link {
    color: var(--ash);
    background: none; border: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0;
    margin-bottom: 24px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .back-link:hover { color: var(--sage); }

  /* Active workout */
  .active-screen { min-height: 100vh; display: flex; flex-direction: column; background: var(--ink); }
  .active-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .progress-bar {
    flex: 1; height: 2px;
    background: var(--surface);
    margin: 0 16px;
    position: relative; overflow: hidden;
  }
  .progress-bar-fill {
    position: absolute; inset: 0;
    background: var(--sage);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  .active-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 20px;
    text-align: center;
  }
  .round-badge {
    display: inline-block;
    color: var(--steel);
    background: var(--surface);
    border: 1px solid var(--border);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 5px 12px;
    margin-bottom: 14px;
  }
  .round-badge .accent { color: var(--sage); font-weight: 700; }
  .phase-label {
    color: var(--sage);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }
  .phase-label.rest { color: var(--steel); }
  .active-name { font-size: clamp(48px, 12vw, 88px); margin-bottom: 16px; max-width: 14ch; }
  .active-meta {
    color: var(--bone-dim);
    font-size: 12px;
    letter-spacing: 0.12em;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
  .timer {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: clamp(120px, 32vw, 220px);
    line-height: 0.9;
    color: var(--bone);
    font-variant-numeric: tabular-nums;
    margin-bottom: 18px;
    transition: color 0.15s;
  }
  .timer.urgent { color: var(--sage); }
  .timer.rest { color: var(--steel); }
  .reps-display {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: clamp(80px, 22vw, 160px);
    color: var(--sage);
    line-height: 1;
    margin-bottom: 20px;
  }
  .cue { color: var(--bone); font-size: 14px; font-weight: 500; max-width: 36ch; line-height: 1.6; margin: 0 auto 24px; }
  .up-next {
    margin-top: auto;
    padding: 18px 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    width: 100%;
    max-width: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .up-next .label { font-size: 9px; }
  .up-next-name {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 4px;
  }
  .controls { display: flex; gap: 10px; padding: 14px 20px 20px; border-top: 1px solid var(--border); }

  /* Complete */
  .complete-screen {
    min-height: 100vh;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    padding: 40px 20px; text-align: center;
  }
  .complete-title { font-size: clamp(72px, 18vw, 140px); margin-bottom: 18px; color: var(--sage); }
  .complete-sub {
    color: var(--bone-dim);
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 48px;
  }
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    width: 100%; max-width: 480px;
    margin-bottom: 40px;
  }
  .stat { background: var(--char); padding: 24px 12px; }
  .stat-num {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: 36px;
    color: var(--bone);
  }
  .stat-lbl { font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ash); margin-top: 4px; }

  .footer-note {
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    color: var(--ash);
    font-size: 10px;
    letter-spacing: 0.08em;
    line-height: 1.7;
    text-align: center;
  }
  .lib-section { margin-bottom: 32px; }
  .lib-cat-title { font-size: 28px; margin-bottom: 16px; color: var(--bone); }
  .lib-cat-rule { height: 1px; background: var(--border); margin-bottom: 8px; position: relative; }
  .lib-cat-rule::after {
    content: '';
    position: absolute; left: 0; top: 0;
    height: 100%; width: 40px;
    background: var(--sage);
  }

  /* Demo + pairs */
  .demo-link {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 8px 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center; gap: 8px;
    transition: all 0.15s;
  }
  .demo-link:hover { border-color: var(--sage); color: var(--sage); }
  .demo-link .play-tri { color: var(--sage); font-size: 11px; }

  .pair-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; align-items: center; }
  .pair-chip {
    background: var(--char);
    border: 1px solid var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.04em;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .pair-chip:hover { border-color: var(--sage); color: var(--sage); background: var(--surface); }
  .pair-label {
    display: inline-block;
    color: var(--steel);
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-right: 6px;
  }

  .ex-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; align-items: center; }

  /* Filter chips */
  .filter-bar {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin-bottom: 24px;
    align-items: center;
  }
  .filter-bar-label {
    color: var(--steel);
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-right: 4px;
  }
  .filter-chip {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 6px 12px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .filter-chip:hover { border-color: var(--sage); color: var(--sage); }
  .filter-chip.on { background: var(--sage); color: var(--ink); border-color: var(--sage); font-weight: 700; }

  /* Search */
  .search-wrap { position: relative; margin-bottom: 14px; }
  .search-input {
    width: 100%;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--bone);
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    padding: 11px 36px 11px 14px;
    outline: none;
    transition: border-color 0.15s;
  }
  .search-input:focus { border-color: var(--sage); }
  .search-input::placeholder { color: var(--ash); letter-spacing: 0.04em; }
  .search-clear {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--ash);
    width: 32px; height: 32px;
    cursor: pointer;
    font-size: 12px;
    font-family: 'JetBrains Mono', monospace;
    padding: 0;
  }
  .search-clear:hover { color: var(--sage); }
  .search-empty {
    text-align: center;
    color: var(--ash);
    font-size: 11px;
    letter-spacing: 0.1em;
    padding: 24px 12px;
    border: 1px dashed var(--border);
    margin: 12px 0;
  }
  .search-empty .accent { color: var(--bone-dim); }

  /* Streak card */
  .streak-card {
    background: linear-gradient(135deg, var(--char) 0%, var(--surface) 100%);
    border: 1px solid var(--border);
    border-left: 4px solid var(--sage);
    padding: 22px 22px;
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  .streak-main { display: flex; align-items: baseline; gap: 14px; }
  .streak-num {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: 56px;
    color: var(--sage);
    line-height: 0.9;
    font-variant-numeric: tabular-nums;
  }
  .streak-lbl {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--bone);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .streak-eyebrow {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ash);
    margin-bottom: 4px;
  }
  .streak-side { text-align: right; }
  .streak-side-num {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: var(--bone);
    line-height: 1;
  }
  .streak-side-lbl {
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ash);
    margin-top: 4px;
  }

  /* Notes */
  .note-textarea {
    width: 100%;
    background: var(--ink);
    border: 1px solid var(--border);
    color: var(--bone);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    line-height: 1.5;
    padding: 12px;
    resize: vertical;
    min-height: 80px;
    outline: none;
    transition: border-color 0.15s;
  }
  .note-textarea:focus { border-color: var(--sage); }
  .note-textarea::placeholder { color: var(--ash); }

  .note-indicator {
    display: inline-block;
    font-size: 8px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 2px 7px;
    background: var(--char);
    border: 1px solid var(--sage);
    color: var(--sage);
    margin-top: 0;
    margin-right: 6px;
    font-weight: 700;
  }

  .active-note {
    margin: 4px auto 22px;
    padding: 11px 14px;
    background: var(--surface);
    border-left: 2px solid var(--sage);
    color: var(--bone);
    font-size: 12px;
    line-height: 1.5;
    max-width: 36ch;
    text-align: left;
  }
  .active-note-label {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 4px;
    font-weight: 700;
  }

  /* Share / import */
  .share-preview {
    background: var(--ink);
    border: 1px solid var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    line-height: 1.6;
    padding: 14px;
    white-space: pre-wrap;
    max-height: 260px;
    overflow-y: auto;
    margin-bottom: 14px;
  }
  .import-textarea {
    width: 100%;
    background: var(--ink);
    border: 1px solid var(--border);
    color: var(--bone);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    line-height: 1.5;
    padding: 12px;
    min-height: 200px;
    resize: vertical;
    outline: none;
    transition: border-color 0.15s;
  }
  .import-textarea:focus { border-color: var(--sage); }
  .import-error {
    color: var(--sage);
    font-size: 11px;
    letter-spacing: 0.04em;
    margin-top: 10px;
    padding: 10px 12px;
    border: 1px solid var(--sage-deep);
    background: rgba(196, 58, 10, 0.08);
  }
  .format-toggle {
    display: inline-flex;
    border: 1px solid var(--border);
    overflow: hidden;
    margin-bottom: 14px;
  }
  .format-toggle button {
    background: transparent;
    border: none;
    color: var(--ash);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 7px 14px;
    cursor: pointer;
  }
  .format-toggle button.on { background: var(--sage); color: var(--ink); font-weight: 700; }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--sage);
    color: var(--ink);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
    padding: 12px 22px;
    z-index: 300;
    animation: toastIn 0.2s ease;
    border: 1px solid var(--sage-deep);
  }
  @keyframes toastIn {
    from { opacity: 0; transform: translate(-50%, 12px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }

  /* Modal */
  .modal-backdrop {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.78);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 200;
    animation: fadeIn 0.2s ease;
  }
  .modal-sheet {
    background: var(--char);
    border-top: 2px solid var(--sage);
    width: 100%; max-width: 640px;
    max-height: 92vh;
    overflow-y: auto;
    padding: 24px;
    animation: slideUp 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
    position: relative;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;
  }
  .modal-cat {
    color: var(--sage);
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .modal-title { font-size: clamp(28px, 7vw, 38px); margin: 0 0 8px; max-width: 16ch; }
  .modal-targets { color: var(--bone-dim); font-size: 12px; font-weight: 500; letter-spacing: 0.05em; }
  .modal-close {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--bone);
    width: 36px; height: 36px;
    cursor: pointer;
    font-size: 14px;
    flex-shrink: 0;
    transition: all 0.15s;
    font-family: 'JetBrains Mono', monospace;
  }
  .modal-close:hover { background: var(--sage); color: var(--ink); border-color: var(--sage); }
  .video-wrap {
    position: relative; width: 100%;
    padding-bottom: 56.25%;
    background: var(--ink);
    margin-bottom: 18px;
    border: 1px solid var(--border);
  }
  .video-wrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
  .video-placeholder {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 48px 24px;
    background: var(--ink);
    border: 1px dashed var(--border);
    color: var(--ash);
    margin-bottom: 18px;
    text-align: center;
  }
  .video-placeholder .ph-icon { color: var(--steel); }
  .video-placeholder .ph-text {
    color: var(--bone-dim); font-size: 12px;
    line-height: 1.6; max-width: 28ch;
    margin-top: 12px;
  }
  .modal-cue {
    color: var(--bone);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
    padding: 14px 16px;
    background: var(--ink);
    border-left: 2px solid var(--sage);
    margin-bottom: 18px;
  }
  .modal-cue strong {
    color: var(--bone);
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .modal-section { margin-bottom: 18px; }
  .modal-section-title {
    color: var(--ash);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp {
    from { transform: translateY(24px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Builder */
  .builder-section { margin-bottom: 28px; }
  .builder-section-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
  }
  .builder-section-title {
    color: var(--bone);
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .builder-section-count { color: var(--sage); font-size: 11px; letter-spacing: 0.16em; }

  .name-input {
    width: 100%;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--bone);
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    padding: 16px 18px;
    margin-bottom: 8px;
    transition: border-color 0.15s;
  }
  .name-input:focus { outline: none; border-color: var(--sage); }
  .name-input::placeholder { color: var(--ash); }

  .block-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 14px 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .block-card.in-round { background: var(--char); border-color: var(--border); }
  .block-num {
    color: var(--ash);
    font-size: 11px;
    letter-spacing: 0.1em;
    min-width: 28px;
    font-variant-numeric: tabular-nums;
  }
  .block-main { flex: 1; min-width: 0; }
  .block-name {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 17px;
    text-transform: uppercase;
    color: var(--bone);
    margin-bottom: 6px;
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .block-controls { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
  .mode-toggle { display: inline-flex; border: 1px solid var(--border); overflow: hidden; }
  .mode-toggle button {
    background: transparent;
    border: none;
    color: var(--ash);
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 5px 9px;
    cursor: pointer;
  }
  .mode-toggle button.on { background: var(--sage); color: var(--ink); font-weight: 700; }

  .field {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--border);
    padding: 0 0 0 8px;
    background: var(--ink);
  }
  .field-lbl { color: var(--ash); font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; }
  .field input {
    background: transparent;
    border: none;
    color: var(--bone);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 500;
    width: 52px;
    padding: 5px 8px;
    outline: none;
    text-align: center;
  }
  .field input.reps-input { width: 86px; text-align: left; }

  .block-side { display: flex; flex-direction: column; gap: 4px; }
  .icon-btn {
    background: var(--ink);
    border: 1px solid var(--border);
    color: var(--ash);
    width: 26px; height: 22px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-family: 'JetBrains Mono', monospace;
    transition: all 0.15s;
    padding: 0;
  }
  .icon-btn:hover { color: var(--sage); border-color: var(--sage); }
  .icon-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .icon-btn.danger:hover { color: var(--sage-deep); border-color: var(--sage-deep); }

  /* Round card */
  .round-card {
    border: 1px solid var(--border);
    border-left: 3px solid var(--sage);
    background: var(--surface);
    padding: 14px;
    margin-bottom: 10px;
  }
  .round-head {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px dashed var(--border);
  }
  .round-head-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
  .round-head-fields {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .round-head-actions { display: flex; gap: 6px; }
  .round-title {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--sage);
  }
  .round-rounds {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--border);
    padding: 0 0 0 10px;
    background: var(--ink);
  }
  .round-rounds input {
    background: transparent;
    border: none;
    color: var(--bone);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    width: 42px;
    padding: 5px 6px;
    text-align: center;
    outline: none;
  }
  .round-add-btn {
    margin-top: 10px;
    width: 100%;
    background: transparent;
    border: 1px dashed var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 10px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .round-add-btn:hover { border-color: var(--sage); color: var(--sage); }

  .builder-add-row { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
  .builder-add-btn {
    flex: 1;
    min-width: 140px;
    background: transparent;
    border: 1px dashed var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .builder-add-btn:hover { border-color: var(--sage); color: var(--sage); border-style: solid; }
  .builder-add-btn.circuit { color: var(--sage); border-color: var(--sage); border-style: solid; }
  .builder-add-btn.circuit:hover { background: var(--sage); color: var(--ink); }

  .picker-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 0;
    border-bottom: 1px solid var(--border);
    gap: 10px;
  }
  .picker-row:last-child { border-bottom: none; }
  .picker-name {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    color: var(--bone);
    line-height: 1.15;
  }
  .picker-meta { color: var(--bone-dim); font-size: 12px; font-weight: 500; letter-spacing: 0.04em; margin-top: 4px; }
  .add-btn {
    background: transparent;
    border: 1px solid var(--sage);
    color: var(--sage);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 6px 12px;
    cursor: pointer;
    transition: all 0.15s;
    flex-shrink: 0;
  }
  .add-btn:hover { background: var(--sage); color: var(--ink); }
  .add-btn.added { border-color: var(--steel); color: var(--steel); }

  .empty-state {
    padding: 36px 24px;
    text-align: center;
    border: 1px dashed var(--border);
    color: var(--ash);
    margin-bottom: 24px;
  }
  .empty-state-icon { color: var(--steel); margin-bottom: 12px; }
  .empty-state-text { font-size: 12px; line-height: 1.6; max-width: 30ch; margin: 0 auto; }

  .save-bar {
    position: sticky; bottom: 0;
    background: var(--ink);
    border-top: 1px solid var(--border);
    padding: 16px 0;
    display: flex; gap: 10px;
    margin-top: 32px;
    z-index: 5;
  }

  /* History */
  .history-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    margin-bottom: 28px;
  }
  .history-stat { background: var(--char); padding: 18px 10px; text-align: center; }
  .history-stat-num {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: 32px;
    color: var(--bone);
    line-height: 0.95;
  }
  .history-stat-num.accent { color: var(--sage); }
  .history-stat-lbl {
    font-size: 9px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ash);
    margin-top: 6px;
  }

  .history-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 16px 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: all 0.15s;
    position: relative;
  }
  .history-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 2px;
    background: var(--sage);
    transform: scaleY(0);
    transition: transform 0.2s;
    transform-origin: top;
  }
  .history-card:hover { background: var(--surface-2); border-color: var(--sage-deep); }
  .history-card:hover::before { transform: scaleY(1); }
  .history-date {
    color: var(--sage);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .history-name {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    color: var(--bone);
    line-height: 1.1;
    margin-bottom: 4px;
  }
  .history-meta { color: var(--bone-dim); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .history-dur {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 900;
    font-size: 22px;
    color: var(--sage);
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
  }

  /* Settings */
  .setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
    gap: 12px;
  }
  .setting-row:last-of-type { border-bottom: none; }
  .setting-info { flex: 1; }
  .setting-name {
    font-family: 'Big Shoulders Stencil Display', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    color: var(--bone);
    margin-bottom: 3px;
  }
  .setting-desc { color: var(--bone-dim); font-size: 13px; font-weight: 500; line-height: 1.55; }

  .toggle {
    width: 44px;
    height: 22px;
    background: var(--surface);
    border: 1px solid var(--border);
    position: relative;
    cursor: pointer;
    transition: all 0.15s;
    padding: 0;
    flex-shrink: 0;
  }
  .toggle.on { background: var(--sage); border-color: var(--sage); }
  .toggle-thumb {
    position: absolute;
    top: 1px; left: 1px;
    width: 18px; height: 18px;
    background: var(--bone);
    transition: transform 0.15s;
  }
  .toggle.on .toggle-thumb { transform: translateX(22px); background: var(--ink); }

  .danger-btn {
    width: 100%;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--bone-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 10px;
    cursor: pointer;
    transition: all 0.15s;
    margin-top: 8px;
  }
  .danger-btn:hover { border-color: var(--sage-deep); color: var(--sage-deep); }

  /* Picker modal (multi-add) */
  .picker-summary {
    color: var(--sage);
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 14px;
    padding: 10px 14px;
    background: var(--ink);
    border: 1px solid var(--border);
  }
  .picker-cat-title {
    color: var(--sage);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin: 18px 0 6px;
  }
  .picker-cat-title:first-of-type { margin-top: 0; }
`,gr=({size:e=28})=>(0,a.jsxs)("svg",{viewBox:"0 0 100 100",width:e,height:e,fill:"currentColor",children:[(0,a.jsx)("path",{d:"M38 14 Q38 6 50 6 Q62 6 62 14 L62 28 Q62 30 60 30 L58 30 Q56 30 56 28 L56 18 Q56 12 50 12 Q44 12 44 18 L44 28 Q44 30 42 30 L40 30 Q38 30 38 28 Z"}),(0,a.jsx)("ellipse",{cx:"50",cy:"62",rx:"34",ry:"32"}),(0,a.jsx)("rect",{x:"34",y:"28",width:"32",height:"8",rx:"2"})]}),pd=()=>(0,a.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,a.jsx)("polyline",{points:"15 18 9 12 15 6"})}),im=({size:e=18})=>(0,a.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,a.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),Qt=e=>{let t=[];return(e||[]).forEach(n=>{if(n.type==="round"&&Array.isArray(n.blocks)){let r=n.rounds||1;for(let o=1;o<=r;o++)n.blocks.forEach((i,l)=>{let s=l===n.blocks.length-1,u=o===r,c=i.rest;s&&!u&&n.restBetweenRounds!==void 0&&n.restBetweenRounds!==null&&(c=n.restBetweenRounds),t.push({...i,rest:c,roundCurrent:o,roundTotal:r,roundName:n.name,isInterRoundRest:s&&!u})})}else t.push({...n})}),t},fd=(e,t)=>{if(!t)return!0;let n=t.toLowerCase();return e.name.toLowerCase().includes(n)||e.targets&&e.targets.toLowerCase().includes(n)||e.category&&e.category.toLowerCase().includes(n)},lm=e=>{let t=e instanceof Date?e:new Date(e);return`${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`},am=e=>{if(!e||e.length===0)return{current:0,longest:0,daysTrained:0};let t=new Set;e.forEach(u=>t.add(lm(u.completedAt)));let n=Array.from(t).map(u=>{let[c,m,v]=u.split("-").map(Number);return new Date(c,m,v)}).sort((u,c)=>c-u),r=new Date;r.setHours(0,0,0,0);let o=new Date(r);o.setDate(o.getDate()-1);let i=0;if(n[0].getTime()===r.getTime()||n[0].getTime()===o.getTime()){i=1;let u=n[0];for(let c=1;c<n.length&&Math.round((u-n[c])/864e5)===1;c++)i++,u=n[c]}let l=n.length>0?1:0,s=1;for(let u=1;u<n.length;u++)Math.round((n[u-1]-n[u])/864e5)===1?(s++,l=Math.max(l,s)):s=1;return{current:i,longest:l,daysTrained:n.length}},sm=e=>{let t=[];t.push((e.name||"Workout").toUpperCase());let n=[e.duration,e.tag].filter(Boolean).join(" \xB7 ");n&&t.push(n),t.push("");let r=0;return(e.blocks||[]).forEach(o=>{if(o.type==="round"&&Array.isArray(o.blocks)){r++;let i=[];o.name&&i.push(o.name),i.push(`${o.rounds} rounds`),o.restBetweenRounds!==void 0&&o.restBetweenRounds!==null&&i.push(`${o.restBetweenRounds}s between rounds`),t.push(`${String(r).padStart(2,"0")}. CIRCUIT \u2014 ${i.join(", ")}`),o.blocks.forEach(l=>{let s=V[l.id];if(!s)return;let u=l.mode==="time"?`${l.duration}s`:l.reps,c=l.rest>0?` \xB7 ${l.rest}s rest`:"";t.push(`    \u2022 ${s.name} \u2014 ${u}${c}`)})}else{r++;let i=V[o.id];if(!i)return;let l=o.mode==="time"?`${o.duration}s`:o.reps,s=o.rest>0?` \xB7 ${o.rest}s rest`:"";t.push(`${String(r).padStart(2,"0")}. ${i.name} \u2014 ${l}${s}`)}}),t.push(""),t.push("\u2014 Built with HORSEPOWER."),t.join(`
`)},um=e=>{let t=(e.blocks||[]).map(n=>n.type==="round"?{type:"round",rounds:n.rounds,name:n.name,restBetweenRounds:n.restBetweenRounds,blocks:(n.blocks||[]).map(r=>({id:r.id,mode:r.mode,duration:r.duration,reps:r.reps,rest:r.rest}))}:{type:"block",id:n.id,mode:n.mode,duration:n.duration,reps:n.reps,rest:n.rest});return JSON.stringify({forgeVersion:1,name:e.name,tag:e.tag,duration:e.duration,description:e.description,blocks:t},null,2)},cm=e=>{let t;try{t=JSON.parse(e)}catch{throw new Error("Not valid JSON. Paste the full workout text you copied from HORSEPOWER.")}if(!t||typeof t!="object")throw new Error("Empty or invalid workout.");if(!t.name||typeof t.name!="string")throw new Error("Workout is missing a name.");if(!Array.isArray(t.blocks))throw new Error("Workout is missing its sequence (blocks array).");let n=Qt(t.blocks);if(n.length===0)throw new Error("Workout has no movements.");let r=n.find(o=>!V[o.id]);if(r)throw new Error(`Unknown movement: "${r.id}". This workout may be from a newer version.`);return{id:`custom-${Date.now()}`,name:t.name.slice(0,32),tag:"Custom \xB7 Imported",duration:t.duration||Qo(t.blocks),description:t.description||"Imported workout.",blocks:t.blocks.map(o=>o.type?o:{...o,type:"block"}),custom:!0}},sd=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");return t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),!0}catch{return!1}},dm=async(e,t)=>{if(typeof navigator>"u"||!navigator.share)return!1;try{return await navigator.share({title:t,text:e}),!0}catch{return!1}},pm=e=>{let t=Qt(e),n=new Set(t.map(o=>o.id)),r={};return t.forEach(o=>{(V[o.id]?.pairs||[]).forEach(i=>{!n.has(i)&&V[i]&&(r[i]=(r[i]||0)+1)})}),Object.entries(r).sort((o,i)=>i[1]-o[1]).slice(0,5).map(([o])=>o)},Qo=e=>{let t=Qt(e),n=0;return t.forEach(r=>{r.mode==="time"?n+=r.duration||30:n+=25,n+=r.rest||0}),n<60?`~${n}s`:`~${Math.round(n/60)} min`};var md=e=>{try{let t=new Date(e),r=new Date-t,o=Math.floor(r/(1e3*60*60*24));if(o===0){let l=t.getHours(),s=String(t.getMinutes()).padStart(2,"0"),u=l>=12?"PM":"AM";return`Today \xB7 ${l%12||12}:${s} ${u}`}return o===1?"Yesterday":o<7?`${o} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${t.getDate()}`}catch{return e}},Yo=e=>{let t=Math.floor(e/60),n=e%60;return t===0?`${n}s`:n===0?`${t}m`:`${t}m ${n}s`},Vo=null,fm=()=>{if(Vo)return Vo;if(typeof window>"u")return null;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;try{return Vo=new e,Vo}catch{return null}},ma=(e=880,t=100,n=.18)=>{let r=fm();if(r)try{r.state==="suspended"&&r.resume();let o=r.createOscillator(),i=r.createGain();o.connect(i),i.connect(r.destination),o.type="sine",o.frequency.value=e;let l=r.currentTime;i.gain.setValueAtTime(0,l),i.gain.linearRampToValueAtTime(n,l+.005),i.gain.exponentialRampToValueAtTime(1e-4,l+t/1e3),o.start(l),o.stop(l+t/1e3+.02)}catch{}},va=e=>{if(!(typeof navigator>"u"||!navigator.vibrate))try{navigator.vibrate(e)}catch{}};function vd(){let[e,t]=(0,R.useState)("home"),[n,r]=(0,R.useState)("workouts"),[o,i]=(0,R.useState)(null),[l,s]=(0,R.useState)(null),[u,c]=(0,R.useState)(null),[m,v]=(0,R.useState)([]),[h,g]=(0,R.useState)(null),[x,y]=(0,R.useState)([]),[T,d]=(0,R.useState)(ad),[p,f]=(0,R.useState)(!1),[w,N]=(0,R.useState)(null),[C,z]=(0,R.useState)({}),[_,A]=(0,R.useState)(null),[B,q]=(0,R.useState)(null),[S,P]=(0,R.useState)(!1);(0,R.useEffect)(()=>{try{if(typeof window<"u"&&window.localStorage){let E=localStorage.getItem(rd),ne=localStorage.getItem(od),qe=localStorage.getItem(id),Ie=localStorage.getItem(ld);E&&v(JSON.parse(E)),ne&&y(JSON.parse(ne)),qe&&d({...ad,...JSON.parse(qe)}),Ie&&z(JSON.parse(Ie))}}catch(E){console.error("Load failed",E)}},[]);let M=(E,ne)=>{try{typeof window<"u"&&window.localStorage&&localStorage.setItem(E,JSON.stringify(ne))}catch(qe){console.error("Persist failed",qe)}},O=E=>{v(E),M(rd,E)},D=E=>{y(E),M(od,E)},G=E=>{d(E),M(id,E)},ge=E=>{z(E),M(ld,E)},ye=E=>{A(E),setTimeout(()=>A(ne=>ne===E?null:ne),2200)},Cn=(E,ne)=>{let qe=(ne||"").trim(),Ie={...C};qe?Ie[E]=qe:delete Ie[E],ge(Ie)},gd=()=>{confirm("Delete ALL exercise notes? This cannot be undone.")&&ge({})},yd=E=>{let ne=cm(E);O([ne,...m]),ye("Workout imported"),P(!1),r("build")},wd=E=>{i(E),t("active")},kd=E=>{let ne={id:Date.now(),workoutId:E.workoutId,workoutName:E.name,completedAt:new Date().toISOString(),duration:E.duration,movements:E.movements,workoutBlocks:E.workoutBlocks,tag:E.tag,custom:E.custom};D([ne,...x].slice(0,500)),s(E),t("complete")},yr=()=>{t("home"),i(null),s(null)},ha=E=>c(E),xd=()=>c(null),Sd=E=>{if(!E.workoutBlocks)return;let ne={id:E.workoutId,name:E.workoutName,tag:E.tag||"Repeat",duration:Qo(E.workoutBlocks),description:"Run it back.",blocks:E.workoutBlocks,custom:E.custom};N(null),i(ne),t("active")},Nd=()=>{g(null),t("builder")},ga=E=>{g(E),t("builder")},Cd=E=>{let qe=m.some(Ie=>Ie.id===E.id)?m.map(Ie=>Ie.id===E.id?E:Ie):[E,...m];O(qe),g(null),t("home"),r("build")},ya=E=>{confirm("Delete this workout?")&&O(m.filter(ne=>ne.id!==E))},Ed=()=>{confirm("Clear all workout history? This cannot be undone.")&&D([])},bd=()=>{confirm("Delete ALL custom workouts? This cannot be undone.")&&O([])};return(0,a.jsxs)("div",{className:"forge-root",children:[(0,a.jsx)("style",{children:om}),e==="home"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"header",children:[(0,a.jsxs)("div",{className:"brand",children:[(0,a.jsx)(gr,{}),(0,a.jsxs)("div",{className:"brand-name",children:["HORSEPOWER",(0,a.jsx)("span",{className:"accent",children:"."})]})]}),(0,a.jsxs)("div",{className:"header-right",children:[(0,a.jsxs)("div",{className:"nav",children:[(0,a.jsx)("button",{className:n==="workouts"?"active":"",onClick:()=>r("workouts"),children:"Workouts"}),(0,a.jsx)("button",{className:n==="library"?"active":"",onClick:()=>r("library"),children:"Library"}),(0,a.jsx)("button",{className:n==="build"?"active":"",onClick:()=>r("build"),children:"Build"}),(0,a.jsx)("button",{className:n==="history"?"active":"",onClick:()=>r("history"),children:"History"})]}),(0,a.jsx)("button",{className:"gear-btn",onClick:()=>f(!0),"aria-label":"Settings",children:(0,a.jsx)(im,{})})]})]}),(0,a.jsxs)("main",{className:"container",children:[n==="workouts"&&(0,a.jsx)(mm,{onSelect:E=>{i(E),t("detail")}}),n==="library"&&(0,a.jsx)(wm,{onDemo:ha,notes:C}),n==="build"&&(0,a.jsx)(km,{customWorkouts:m,onCreate:Nd,onEdit:ga,onDelete:ya,onStart:E=>{i(E),t("detail")},onShare:q,onImport:()=>P(!0)}),n==="history"&&(0,a.jsx)(xm,{history:x,onSelect:N})]})]}),e==="detail"&&o&&(0,a.jsx)(vm,{workout:o,onStart:()=>wd(o),onBack:yr,onEdit:o.custom?()=>ga(o):null,onDelete:o.custom?()=>{ya(o.id),yr()}:null,onShare:()=>q(o)}),e==="active"&&o&&(0,a.jsx)(hm,{workout:o,onFinish:kd,onQuit:yr,onDemo:ha,settings:T,notes:C}),e==="complete"&&l&&(0,a.jsx)(gm,{stats:l,onHome:yr}),e==="builder"&&(0,a.jsx)(zm,{existing:h,onSave:Cd,onCancel:()=>{g(null),t("home"),r("build")}}),u&&(0,a.jsx)(ym,{exercise:u,onClose:xd,onPairClick:E=>c({id:E,...V[E]}),note:C[u.id]||"",onSaveNote:E=>{Cn(u.id,E),E.trim()&&ye("Note saved")}}),p&&(0,a.jsx)(Em,{settings:T,onUpdate:G,onClose:()=>f(!1),onClearHistory:Ed,onClearCustoms:bd,onClearNotes:gd,historyCount:x.length,customCount:m.length,notesCount:Object.keys(C).length}),w&&(0,a.jsx)(Sm,{entry:w,onClose:()=>N(null),onRepeat:()=>Sd(w)}),B&&(0,a.jsx)(Nm,{workout:B,onClose:()=>q(null),onToast:ye}),S&&(0,a.jsx)(Cm,{onClose:()=>P(!1),onImport:yd}),_&&(0,a.jsx)("div",{className:"toast",children:_})]})}function mm({onSelect:e}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"hero",children:[(0,a.jsx)("h1",{className:"display hero-title",children:"Kettlebell workouts built for the long run."}),(0,a.jsx)("p",{className:"hero-sub",children:"Six sessions. One bell. All horsepower."})]}),(0,a.jsx)("div",{className:"label",style:{marginBottom:14},children:"Preset Workouts"}),rm.map(t=>(0,a.jsxs)("article",{className:"workout-card",onClick:()=>e(t),children:[(0,a.jsxs)("div",{className:"workout-meta",children:[(0,a.jsx)("span",{className:"workout-tag",children:t.tag}),(0,a.jsx)("span",{className:"workout-dur",children:t.duration})]}),(0,a.jsx)("h2",{className:"display workout-name",children:t.name}),(0,a.jsx)("p",{className:"workout-desc",children:t.description})]},t.id)),(0,a.jsxs)("div",{className:"footer-note",children:["Train smart. Consult a physician before starting any new exercise program.",(0,a.jsx)("br",{}),"Stop if you feel sharp pain. The bell will be there tomorrow."]})]})}function vm({workout:e,onStart:t,onBack:n,onEdit:r,onDelete:o,onShare:i}){let l=0;return(0,a.jsxs)("main",{className:"container",children:[(0,a.jsxs)("button",{className:"back-link",onClick:n,children:[(0,a.jsx)(pd,{})," Back"]}),(0,a.jsxs)("div",{className:"workout-meta",children:[(0,a.jsx)("span",{className:"workout-tag"+(e.custom?" custom":""),children:e.tag}),(0,a.jsx)("span",{className:"workout-dur",children:e.duration})]}),(0,a.jsx)("h1",{className:"display",style:{fontSize:"clamp(48px, 12vw, 80px)",marginBottom:16},children:e.name}),(0,a.jsx)("p",{style:{color:"var(--bone-dim)",fontSize:13,lineHeight:1.6,marginBottom:32,maxWidth:"36ch"},children:e.description}),(0,a.jsx)("button",{className:"btn",onClick:t,children:"\u25B8 Begin Training"}),(r||o||i)&&(0,a.jsxs)("div",{className:"card-actions",style:{marginTop:16,borderTop:"none",paddingTop:0},children:[i&&(0,a.jsx)("button",{onClick:i,children:"\u2197 Share"}),r&&(0,a.jsx)("button",{onClick:r,children:"\u270E Edit"}),o&&(0,a.jsx)("button",{className:"danger",onClick:o,children:"\u2715 Delete"})]}),(0,a.jsx)("div",{className:"label",style:{marginTop:40,marginBottom:16},children:"The Sequence"}),(0,a.jsx)("div",{children:e.blocks.map((s,u)=>{if(s.type==="round"&&s.blocks)return(0,a.jsxs)("div",{className:"round-card",style:{marginBottom:12},children:[(0,a.jsxs)("div",{className:"round-head",style:{marginBottom:8,paddingBottom:8},children:[(0,a.jsxs)("div",{className:"round-head-top",style:{marginBottom:s.restBetweenRounds!==void 0?8:0},children:[(0,a.jsxs)("span",{className:"round-title",children:[s.name||"Circuit"," \xD7 ",s.rounds]}),(0,a.jsxs)("span",{style:{color:"var(--ash)",fontSize:11,letterSpacing:"0.1em"},children:[s.blocks.length," mvmts"]})]}),s.restBetweenRounds!==void 0&&(0,a.jsxs)("div",{style:{color:"var(--steel)",fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase"},children:[s.restBetweenRounds,"s rest between rounds"]})]}),s.blocks.map((v,h)=>{l++;let g=V[v.id];if(!g)return null;let x=v.mode==="time"?`${v.duration}s`:v.reps;return(0,a.jsxs)("div",{className:"exercise-row",style:{paddingLeft:8},children:[(0,a.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"baseline"},children:[(0,a.jsx)("span",{style:{color:"var(--ash)",fontSize:11,minWidth:24},children:String(l).padStart(2,"0")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"ex-name",children:g.name}),(0,a.jsx)("div",{className:"ex-targets",children:g.targets})]})]}),(0,a.jsxs)("div",{style:{textAlign:"right"},children:[(0,a.jsx)("div",{style:{fontFamily:"'Big Shoulders Stencil Display', sans-serif",fontWeight:900,fontSize:22,color:"var(--sage)"},children:x}),v.rest>0&&(0,a.jsxs)("div",{style:{fontSize:10,color:"var(--ash)",letterSpacing:"0.1em"},children:[v.rest,"s rest"]})]})]},h)})]},u);l++;let c=V[s.id];if(!c)return null;let m=s.mode==="time"?`${s.duration}s`:s.reps;return(0,a.jsxs)("div",{className:"exercise-row",children:[(0,a.jsxs)("div",{style:{display:"flex",gap:16,alignItems:"baseline"},children:[(0,a.jsx)("span",{style:{color:"var(--ash)",fontSize:11,minWidth:24},children:String(l).padStart(2,"0")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"ex-name",children:c.name}),(0,a.jsx)("div",{className:"ex-targets",children:c.targets})]})]}),(0,a.jsxs)("div",{style:{textAlign:"right"},children:[(0,a.jsx)("div",{style:{fontFamily:"'Big Shoulders Stencil Display', sans-serif",fontWeight:900,fontSize:22,color:"var(--sage)"},children:m}),s.rest>0&&(0,a.jsxs)("div",{style:{fontSize:10,color:"var(--ash)",letterSpacing:"0.1em"},children:[s.rest,"s rest"]})]})]},u)})})]})}function hm({workout:e,onFinish:t,onQuit:n,onDemo:r,settings:o,notes:i={}}){let l=(0,R.useMemo)(()=>Qt(e.blocks),[e]),[s,u]=(0,R.useState)(0),[c,m]=(0,R.useState)("work"),[v,h]=(0,R.useState)(()=>{let S=l[0];return S&&S.mode==="time"?S.duration:null}),[g,x]=(0,R.useState)(!1),y=(0,R.useRef)(Date.now()),T=(0,R.useRef)(null),d=l[s],p=d?V[d.id]:null,f=s===l.length-1,w=f?null:V[l[s+1]?.id],N=f?null:l[s+1],C=S=>{S==="count"?(o.sound&&ma(880,80,.15),o.vibration&&va(60)):S==="go"?(o.sound&&ma(1200,220,.22),o.vibration&&va([180,80,180])):S==="rest"&&(o.sound&&ma(440,180,.18),o.vibration&&va(120))};(0,R.useEffect)(()=>{if(!(g||v===null))return T.current=setInterval(()=>{h(S=>S<=1?(clearInterval(T.current),C(c==="work"?"rest":"go"),z(),0):((S===4||S===3||S===2)&&C("count"),S-1))},1e3),()=>clearInterval(T.current)},[g,s,c]);let z=()=>{c==="work"&&d&&d.rest>0&&!f?(m("rest"),h(d.rest)):_()},_=()=>{if(f){let M=Math.round((Date.now()-y.current)/1e3);t({workoutId:e.id,name:e.name,movements:l.length,duration:M,workoutBlocks:e.blocks,tag:e.tag,custom:e.custom});return}let S=s+1,P=l[S];u(S),m("work"),h(P.mode==="time"?P.duration:null)},A=S=>{let P=Math.floor(S/60),M=S%60;return P>0?`${P}:${String(M).padStart(2,"0")}`:String(M)},B=(s+(c==="rest"?.5:0))/l.length,q=v!==null&&v<=3&&v>0;return p?(0,a.jsxs)("div",{className:"active-screen",children:[(0,a.jsxs)("div",{className:"active-header",children:[(0,a.jsx)("button",{className:"back-link",style:{margin:0},onClick:n,children:"\u2715 End"}),(0,a.jsx)("div",{className:"progress-bar",children:(0,a.jsx)("div",{className:"progress-bar-fill",style:{transform:`scaleX(${B})`}})}),(0,a.jsxs)("span",{style:{color:"var(--ash)",fontSize:11,letterSpacing:"0.1em",minWidth:40,textAlign:"right"},children:[s+1,"/",l.length]})]}),(0,a.jsxs)("div",{className:"active-body",children:[d.roundTotal&&(0,a.jsxs)("div",{className:"round-badge",children:[d.roundName?`${d.roundName} \xB7 `:"",c==="rest"&&d.isInterRoundRest?(0,a.jsxs)(a.Fragment,{children:["Round ",d.roundCurrent," done \u2014 ",(0,a.jsxs)("span",{className:"accent",children:["Round ",d.roundCurrent+1]})," next"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:"accent",children:["Round ",d.roundCurrent]})," of ",d.roundTotal]})]}),c==="work"?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"phase-label",children:"\u2014 Work"}),(0,a.jsx)("h2",{className:"display active-name",children:p.name}),(0,a.jsx)("div",{className:"active-meta",children:d.mode==="reps"?`Target \xB7 ${d.reps}`:`Hold for ${d.duration} seconds`}),d.mode==="time"?(0,a.jsx)("div",{className:"timer"+(q?" urgent":""),children:A(v)}):(0,a.jsx)("div",{className:"reps-display",children:d.reps}),(0,a.jsx)("p",{className:"cue",children:p.cue}),i[d.id]&&(0,a.jsxs)("div",{className:"active-note",children:[(0,a.jsx)("span",{className:"active-note-label",children:"\u2014 Your Note"}),i[d.id]]}),(0,a.jsxs)("button",{className:"demo-link",onClick:()=>r({id:d.id,...p}),children:[(0,a.jsx)("span",{className:"play-tri",children:"\u25B6"})," ",i[d.id]?"Edit Note \xB7 Form Demo":"Watch Form Demo"]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"phase-label rest",children:"\u2014 Recover"}),(0,a.jsx)("h2",{className:"display active-name",style:{color:"var(--bone-dim)"},children:"Breathe."}),(0,a.jsx)("div",{className:"active-meta",children:"Reset the grip. Reset the mind."}),(0,a.jsx)("div",{className:"timer rest"+(q?" urgent":""),children:A(v)}),w&&(0,a.jsxs)("p",{className:"cue",children:["Up next \u2014 ",(0,a.jsx)("strong",{style:{color:"var(--bone)"},children:w.name})]})]}),c==="work"&&w&&(0,a.jsxs)("div",{className:"up-next",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"label",children:"Up Next"}),(0,a.jsx)("div",{className:"up-next-name",children:w.name})]}),(0,a.jsx)("span",{style:{color:"var(--ash)",fontSize:11},children:N.mode==="time"?`${N.duration}s`:N.reps})]})]}),(0,a.jsxs)("div",{className:"controls",children:[(0,a.jsx)("button",{className:"btn ghost small",style:{flex:1},onClick:()=>x(S=>!S),disabled:d.mode==="reps"&&c==="work",children:g?"\u25B8 Resume":"\u23F8 Pause"}),d.mode==="reps"&&c==="work"?(0,a.jsx)("button",{className:"btn small",style:{flex:2},onClick:z,children:"\u2713 Done \u2014 Next"}):(0,a.jsx)("button",{className:"btn small",style:{flex:2},onClick:_,children:"Skip \u25B8"})]})]}):null}function gm({stats:e,onHome:t}){let n=Math.floor(e.duration/60),r=e.duration%60;return(0,a.jsxs)("div",{className:"complete-screen",children:[(0,a.jsx)("div",{className:"phase-label",style:{color:"var(--sage)"},children:"\u2014 Workout Complete"}),(0,a.jsx)("h1",{className:"display complete-title",children:"Done."}),(0,a.jsx)("p",{className:"complete-sub",children:e.name}),(0,a.jsxs)("div",{className:"stat-grid",children:[(0,a.jsxs)("div",{className:"stat",children:[(0,a.jsxs)("div",{className:"stat-num",children:[n,(0,a.jsx)("span",{style:{fontSize:18,color:"var(--ash)"},children:"m"})," ",r,(0,a.jsx)("span",{style:{fontSize:18,color:"var(--ash)"},children:"s"})]}),(0,a.jsx)("div",{className:"stat-lbl",children:"Time"})]}),(0,a.jsxs)("div",{className:"stat",children:[(0,a.jsx)("div",{className:"stat-num",children:e.movements}),(0,a.jsx)("div",{className:"stat-lbl",children:"Movements"})]}),(0,a.jsxs)("div",{className:"stat",children:[(0,a.jsx)("div",{className:"stat-num",style:{color:"var(--sage)"},children:"1"}),(0,a.jsx)("div",{className:"stat-lbl",children:"Bell"})]})]}),(0,a.jsx)("button",{className:"btn",style:{maxWidth:320},onClick:t,children:"Return Home"})]})}function ym({exercise:e,onClose:t,onPairClick:n,note:r,onSaveNote:o}){let i=`https://www.youtube.com/results?search_query=${encodeURIComponent("kettlebell "+e.name+" form tutorial")}`,[l,s]=(0,R.useState)(r||""),u=(0,R.useRef)(r||"");(0,R.useEffect)(()=>{s(r||""),u.current=r||""},[r,e.id]),(0,R.useEffect)(()=>{let v=document.body.style.overflow;document.body.style.overflow="hidden";let h=g=>{g.key==="Escape"&&t()};return window.addEventListener("keydown",h),()=>{document.body.style.overflow=v,window.removeEventListener("keydown",h)}},[t]);let c=()=>{let v=l.trim();v!==u.current&&(u.current=v,o&&o(v))},m=(e.pairs||[]).filter(v=>V[v]);return(0,a.jsx)("div",{className:"modal-backdrop",onClick:()=>{c(),t()},children:(0,a.jsxs)("div",{className:"modal-sheet",onClick:v=>v.stopPropagation(),children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"modal-cat",children:[e.category," \xB7 ",e.difficulty," \xB7 Form Demo"]}),(0,a.jsx)("h3",{className:"display modal-title",children:e.name}),(0,a.jsx)("div",{className:"modal-targets",children:e.targets})]}),(0,a.jsx)("button",{className:"modal-close",onClick:()=>{c(),t()},"aria-label":"Close",children:"\u2715"})]}),e.videoId?(0,a.jsx)("div",{className:"video-wrap",children:(0,a.jsx)("iframe",{src:`https://www.youtube-nocookie.com/embed/${e.videoId}?rel=0&modestbranding=1`,title:`${e.name} tutorial`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):(0,a.jsxs)("div",{className:"video-placeholder",children:[(0,a.jsx)("div",{className:"ph-icon",children:(0,a.jsx)(gr,{size:44})}),(0,a.jsx)("div",{className:"ph-text",children:"Tap below to pull current form tutorials from YouTube."})]}),(0,a.jsxs)("div",{className:"modal-cue",children:[(0,a.jsx)("strong",{children:"Coaching Cue"}),e.cue]}),e.optional&&(0,a.jsxs)("div",{className:"ex-optional",style:{maxWidth:"none",marginTop:0,marginBottom:18},children:["\u2197 ",(0,a.jsx)("strong",{style:{fontStyle:"normal",color:"var(--sage)",fontWeight:700,fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase",display:"block",marginBottom:4},children:"Optional Variation"}),(0,a.jsx)("span",{children:e.optional})]}),(0,a.jsxs)("div",{className:"modal-section",children:[(0,a.jsx)("div",{className:"modal-section-title",children:"\u2014 Your Notes"}),(0,a.jsx)("textarea",{className:"note-textarea",value:l,onChange:v=>s(v.target.value),onBlur:c,placeholder:"Personal cues, weight used, what to fix next time...",maxLength:500}),(0,a.jsxs)("div",{style:{fontSize:9,letterSpacing:"0.12em",color:"var(--ash)",marginTop:4,textTransform:"uppercase"},children:["Saves automatically \xB7 ",500-l.length," chars left"]})]}),m.length>0&&(0,a.jsxs)("div",{className:"modal-section",children:[(0,a.jsx)("div",{className:"modal-section-title",children:"\u2014 Pairs Well With"}),(0,a.jsx)("div",{className:"pair-chips",children:m.map(v=>(0,a.jsx)("button",{className:"pair-chip",onClick:()=>{c(),n(v)},children:V[v].name},v))})]}),(0,a.jsxs)("a",{className:"btn",href:i,target:"_blank",rel:"noopener noreferrer",onClick:c,children:["\u25B8 ",e.videoId?"More Demos on YouTube":"Watch on YouTube"]})]})})}function wm({onDemo:e,notes:t={}}){let[n,r]=(0,R.useState)("All"),[o,i]=(0,R.useState)(""),l={};Object.entries(V).forEach(([u,c])=>{n!=="All"&&c.difficulty!==n||fd(c,o)&&(l[c.category]||(l[c.category]=[]),l[c.category].push({id:u,...c}))});let s=Object.values(l).reduce((u,c)=>u+c.length,0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"hero",children:[(0,a.jsx)("div",{className:"hero-eyebrow",children:"\u2014 The Movements"}),(0,a.jsx)("h1",{className:"display hero-title",children:"A bell. A body. Twenty-seven lifts."}),(0,a.jsx)("p",{className:"hero-sub",children:"Every swing, press, lunge, and carry that builds the work."})]}),(0,a.jsxs)("div",{className:"search-wrap",children:[(0,a.jsx)("input",{className:"search-input",type:"text",placeholder:"Search by name, target, or category...",value:o,onChange:u=>i(u.target.value)}),o&&(0,a.jsx)("button",{className:"search-clear",onClick:()=>i(""),"aria-label":"Clear search",children:"\u2715"})]}),(0,a.jsxs)("div",{className:"filter-bar",children:[(0,a.jsx)("span",{className:"filter-bar-label",children:"Level"}),(0,a.jsx)("button",{className:"filter-chip"+(n==="All"?" on":""),onClick:()=>r("All"),children:"All"}),dd.map(u=>(0,a.jsx)("button",{className:"filter-chip"+(n===u?" on":""),onClick:()=>r(u),children:u},u))]}),o&&s>0&&(0,a.jsxs)("div",{className:"label",style:{marginBottom:14},children:[s," match",s!==1?"es":"",' for "',o,'"']}),cd.filter(u=>l[u]).map(u=>(0,a.jsxs)("section",{className:"lib-section",children:[(0,a.jsx)("h2",{className:"display lib-cat-title",children:u}),(0,a.jsx)("div",{className:"lib-cat-rule"}),l[u].map(c=>(0,a.jsx)("div",{className:"exercise-row",style:{alignItems:"flex-start",flexDirection:"column",gap:0},children:(0,a.jsxs)("div",{style:{width:"100%"},children:[(0,a.jsx)("div",{className:"ex-name",children:c.name}),(0,a.jsx)("div",{className:"ex-targets",style:{marginBottom:6},children:c.targets}),(0,a.jsx)("span",{className:"ex-diff "+c.difficulty,children:c.difficulty}),t[c.id]&&(0,a.jsx)("span",{className:"note-indicator",children:"\u{1F4DD} Note"}),(0,a.jsx)("div",{style:{color:"var(--bone)",fontSize:13,fontWeight:500,lineHeight:1.6,maxWidth:"50ch",marginTop:8},children:c.cue}),c.optional&&(0,a.jsxs)("div",{className:"ex-optional",children:["\u2197 ",(0,a.jsx)("span",{children:c.optional})]}),t[c.id]&&(0,a.jsxs)("div",{className:"active-note",style:{margin:"10px 0 0"},children:[(0,a.jsx)("span",{className:"active-note-label",children:"\u2014 Your Note"}),t[c.id]]}),c.pairs&&c.pairs.length>0&&(0,a.jsxs)("div",{className:"pair-chips",children:[(0,a.jsx)("span",{className:"pair-label",children:"Pairs"}),c.pairs.filter(m=>V[m]).map(m=>(0,a.jsx)("button",{className:"pair-chip",onClick:()=>e({id:m,...V[m]}),children:V[m].name},m))]}),(0,a.jsx)("div",{className:"ex-actions",children:(0,a.jsxs)("button",{className:"demo-link",onClick:()=>e(c),children:[(0,a.jsx)("span",{className:"play-tri",children:"\u25B6"})," ",t[c.id]?"View / Edit Note":"Watch Form Demo"]})})]})},c.id))]},u)),s===0&&(0,a.jsx)("div",{className:"search-empty",children:o?(0,a.jsxs)(a.Fragment,{children:["No movements match ",(0,a.jsxs)("span",{className:"accent",children:['"',o,'"']}),n!=="All"?(0,a.jsxs)(a.Fragment,{children:[" at ",(0,a.jsx)("span",{className:"accent",children:n})," level"]}):"","."]}):"No movements match this filter."})]})}function km({customWorkouts:e,onCreate:t,onEdit:n,onDelete:r,onStart:o,onShare:i,onImport:l}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"hero",children:[(0,a.jsx)("div",{className:"hero-eyebrow",children:"\u2014 Forge Your Own"}),(0,a.jsx)("h1",{className:"display hero-title",children:"Your bell. Your strides. Your rules."}),(0,a.jsx)("p",{className:"hero-sub",children:"Build a workout from the library. Add circuits. Save it. Run it."})]}),(0,a.jsxs)("div",{className:"action-btn-row",style:{marginBottom:32},children:[(0,a.jsx)("button",{className:"btn",onClick:t,children:"+ Create New"}),(0,a.jsx)("button",{className:"btn ghost",onClick:l,children:"\u2193 Import"})]}),e.length===0?(0,a.jsxs)("div",{className:"empty-state",children:[(0,a.jsx)("div",{className:"empty-state-icon",children:(0,a.jsx)(gr,{size:44})}),(0,a.jsx)("div",{className:"empty-state-text",children:"No custom workouts yet. Hit Create to forge one, or Import to paste in a shared workout."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"label",style:{marginBottom:14},children:"Your Workouts"}),e.map(s=>{let u=Qt(s.blocks);return(0,a.jsxs)("article",{className:"workout-card custom",children:[(0,a.jsxs)("div",{className:"workout-meta",children:[(0,a.jsxs)("span",{className:"workout-tag custom",children:["Custom \xB7 ",u.length," movements"]}),(0,a.jsx)("span",{className:"workout-dur",children:s.duration})]}),(0,a.jsx)("h2",{className:"display workout-name",onClick:()=>o(s),style:{cursor:"pointer"},children:s.name}),(0,a.jsxs)("p",{className:"workout-desc",children:[u.slice(0,3).map(c=>V[c.id]?.name).filter(Boolean).join(" \xB7 "),u.length>3?` \xB7 +${u.length-3} more`:""]}),(0,a.jsxs)("div",{className:"card-actions",children:[(0,a.jsx)("button",{onClick:()=>o(s),children:"\u25B8 Start"}),(0,a.jsx)("button",{onClick:()=>n(s),children:"\u270E Edit"}),(0,a.jsx)("button",{onClick:()=>i&&i(s),children:"\u2197 Share"}),(0,a.jsx)("button",{className:"danger",onClick:()=>r(s.id),children:"\u2715 Delete"})]})]},s.id)})]})]})}function xm({history:e,onSelect:t}){let n=e.length,r=e.reduce((l,s)=>l+s.duration,0),o=e.reduce((l,s)=>l+s.movements,0),i=(0,R.useMemo)(()=>am(e),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"hero",children:[(0,a.jsx)("div",{className:"hero-eyebrow",children:"\u2014 Training Log"}),(0,a.jsx)("h1",{className:"display hero-title",children:"The work behind you."}),(0,a.jsx)("p",{className:"hero-sub",children:"Every session you've finished. Every rep that's already counted."})]}),n===0?(0,a.jsxs)("div",{className:"empty-state",children:[(0,a.jsx)("div",{className:"empty-state-icon",children:(0,a.jsx)(gr,{size:44})}),(0,a.jsx)("div",{className:"empty-state-text",children:"No completed workouts yet. Finish one and it'll show up here."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"streak-card",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"streak-eyebrow",children:"\u2014 Current Streak"}),(0,a.jsxs)("div",{className:"streak-main",children:[(0,a.jsx)("div",{className:"streak-num",children:i.current}),(0,a.jsxs)("div",{className:"streak-lbl",children:[i.current===1?"Day":"Days",i.current===0&&(0,a.jsx)("span",{style:{color:"var(--ash)",fontSize:11,marginLeft:8,letterSpacing:"0.1em"},children:"\u2014 Show up today. Start the count."})]})]})]}),(0,a.jsxs)("div",{className:"streak-side",children:[(0,a.jsx)("div",{className:"streak-side-num",children:i.longest}),(0,a.jsx)("div",{className:"streak-side-lbl",children:"Longest"})]})]}),(0,a.jsxs)("div",{className:"history-stats",children:[(0,a.jsxs)("div",{className:"history-stat",children:[(0,a.jsx)("div",{className:"history-stat-num accent",children:n}),(0,a.jsx)("div",{className:"history-stat-lbl",children:"Sessions"})]}),(0,a.jsxs)("div",{className:"history-stat",children:[(0,a.jsx)("div",{className:"history-stat-num",children:Yo(r)}),(0,a.jsx)("div",{className:"history-stat-lbl",children:"Total Time"})]}),(0,a.jsxs)("div",{className:"history-stat",children:[(0,a.jsx)("div",{className:"history-stat-num",children:i.daysTrained}),(0,a.jsx)("div",{className:"history-stat-lbl",children:"Days Trained"})]})]}),(0,a.jsx)("div",{className:"label",style:{marginBottom:12},children:"Recent Sessions \xB7 Tap to View"}),e.map(l=>(0,a.jsxs)("div",{className:"history-card",onClick:()=>t&&t(l),children:[(0,a.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,a.jsx)("div",{className:"history-date",children:md(l.completedAt)}),(0,a.jsx)("div",{className:"history-name",children:l.workoutName}),(0,a.jsxs)("div",{className:"history-meta",children:[l.movements," movements"]})]}),(0,a.jsx)("div",{className:"history-dur",children:Yo(l.duration)})]},l.id))]})]})}function Sm({entry:e,onClose:t,onRepeat:n}){(0,R.useEffect)(()=>{let c=document.body.style.overflow;document.body.style.overflow="hidden";let m=v=>{v.key==="Escape"&&t()};return window.addEventListener("keydown",m),()=>{document.body.style.overflow=c,window.removeEventListener("keydown",m)}},[t]);let r=e.workoutBlocks||[],o=r.length>0,i=0,l=o?Qt(r):[],s={Beginner:0,Intermediate:0,Advanced:0};l.forEach(c=>{let m=V[c.id];m&&s[m.difficulty]!==void 0&&s[m.difficulty]++});let u=Object.entries(s).sort((c,m)=>m[1]-c[1])[0];return(0,a.jsx)("div",{className:"modal-backdrop",onClick:t,children:(0,a.jsxs)("div",{className:"modal-sheet",onClick:c=>c.stopPropagation(),children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"modal-cat",children:["\u2014 ",md(e.completedAt)]}),(0,a.jsx)("h3",{className:"display modal-title",children:e.workoutName}),(0,a.jsxs)("div",{className:"modal-targets",children:[e.tag&&(0,a.jsxs)("span",{children:[e.tag," \xB7 "]}),Yo(e.duration)," \xB7 ",e.movements," movements"]})]}),(0,a.jsx)("button",{className:"modal-close",onClick:t,"aria-label":"Close",children:"\u2715"})]}),(0,a.jsxs)("div",{className:"history-stats",style:{marginBottom:20},children:[(0,a.jsxs)("div",{className:"history-stat",children:[(0,a.jsx)("div",{className:"history-stat-num accent",children:Yo(e.duration)}),(0,a.jsx)("div",{className:"history-stat-lbl",children:"Time"})]}),(0,a.jsxs)("div",{className:"history-stat",children:[(0,a.jsx)("div",{className:"history-stat-num",children:e.movements}),(0,a.jsx)("div",{className:"history-stat-lbl",children:"Movements"})]}),(0,a.jsxs)("div",{className:"history-stat",children:[(0,a.jsx)("div",{className:"history-stat-num",style:{fontSize:18},children:u&&u[1]>0?u[0]:"\u2014"}),(0,a.jsx)("div",{className:"history-stat-lbl",children:"Mostly"})]})]}),o?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"modal-section-title",children:"\u2014 The Sequence"}),(0,a.jsx)("div",{style:{marginBottom:20},children:r.map((c,m)=>{if(c.type==="round"&&c.blocks)return(0,a.jsxs)("div",{className:"round-card",style:{marginBottom:10},children:[(0,a.jsxs)("div",{className:"round-head",style:{marginBottom:8,paddingBottom:8},children:[(0,a.jsxs)("div",{className:"round-head-top",style:{marginBottom:c.restBetweenRounds!==void 0?6:0},children:[(0,a.jsxs)("span",{className:"round-title",children:[c.name||"Circuit"," \xD7 ",c.rounds]}),(0,a.jsxs)("span",{style:{color:"var(--ash)",fontSize:11,letterSpacing:"0.1em"},children:[c.blocks.length," mvmts"]})]}),c.restBetweenRounds!==void 0&&(0,a.jsxs)("div",{style:{color:"var(--steel)",fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase"},children:[c.restBetweenRounds,"s rest between rounds"]})]}),c.blocks.map((g,x)=>{i++;let y=V[g.id];if(!y)return null;let T=g.mode==="time"?`${g.duration}s`:g.reps;return(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"10px 0",borderBottom:x<c.blocks.length-1?"1px solid var(--border)":"none"},children:[(0,a.jsxs)("div",{style:{display:"flex",gap:10,alignItems:"baseline",flex:1,minWidth:0},children:[(0,a.jsx)("span",{style:{color:"var(--ash)",fontSize:10,minWidth:22},children:String(i).padStart(2,"0")}),(0,a.jsx)("div",{style:{minWidth:0,flex:1},children:(0,a.jsx)("div",{style:{fontFamily:"'Big Shoulders Stencil Display', sans-serif",fontWeight:700,fontSize:15,textTransform:"uppercase",color:"var(--bone)"},children:y.name})})]}),(0,a.jsxs)("div",{style:{textAlign:"right"},children:[(0,a.jsx)("div",{style:{fontFamily:"'Big Shoulders Stencil Display', sans-serif",fontWeight:900,fontSize:18,color:"var(--sage)"},children:T}),g.rest>0&&(0,a.jsxs)("div",{style:{fontSize:9,color:"var(--ash)",letterSpacing:"0.1em"},children:[g.rest,"s rest"]})]})]},x)})]},m);i++;let v=V[c.id];if(!v)return null;let h=c.mode==="time"?`${c.duration}s`:c.reps;return(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"12px 0",borderBottom:"1px solid var(--border)"},children:[(0,a.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"baseline",flex:1,minWidth:0},children:[(0,a.jsx)("span",{style:{color:"var(--ash)",fontSize:11,minWidth:22},children:String(i).padStart(2,"0")}),(0,a.jsxs)("div",{style:{minWidth:0},children:[(0,a.jsx)("div",{style:{fontFamily:"'Big Shoulders Stencil Display', sans-serif",fontWeight:700,fontSize:17,textTransform:"uppercase",color:"var(--bone)"},children:v.name}),(0,a.jsx)("div",{style:{color:"var(--ash)",fontSize:10,letterSpacing:"0.04em",marginTop:2},children:v.targets})]})]}),(0,a.jsxs)("div",{style:{textAlign:"right"},children:[(0,a.jsx)("div",{style:{fontFamily:"'Big Shoulders Stencil Display', sans-serif",fontWeight:900,fontSize:20,color:"var(--sage)"},children:h}),c.rest>0&&(0,a.jsxs)("div",{style:{fontSize:10,color:"var(--ash)",letterSpacing:"0.1em"},children:[c.rest,"s rest"]})]})]},m)})}),(0,a.jsx)("button",{className:"btn",onClick:n,children:"\u25B8 Run This Again"})]}):(0,a.jsx)("div",{className:"empty-state",children:(0,a.jsx)("div",{className:"empty-state-text",children:"This session was completed before workout details were tracked. The duration and movement count are still saved."})})]})})}function Nm({workout:e,onClose:t,onToast:n}){let[r,o]=(0,R.useState)("text"),i=(0,R.useMemo)(()=>sm(e),[e]),l=(0,R.useMemo)(()=>um(e),[e]),s=r==="text"?i:l,u=typeof navigator<"u"&&!!navigator.share;(0,R.useEffect)(()=>{let v=document.body.style.overflow;document.body.style.overflow="hidden";let h=g=>{g.key==="Escape"&&t()};return window.addEventListener("keydown",h),()=>{document.body.style.overflow=v,window.removeEventListener("keydown",h)}},[t]);let c=async()=>{let v=await sd(s);n(v?"Copied to clipboard":"Copy failed")},m=async()=>{if(!await dm(s,e.name)){let h=await sd(s);n(h?"Copied to clipboard":"Share failed")}};return(0,a.jsx)("div",{className:"modal-backdrop",onClick:t,children:(0,a.jsxs)("div",{className:"modal-sheet",onClick:v=>v.stopPropagation(),children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"modal-cat",children:"\u2014 Share Workout"}),(0,a.jsx)("h3",{className:"display modal-title",children:e.name}),(0,a.jsx)("div",{className:"modal-targets",children:"Send to a friend or save as backup"})]}),(0,a.jsx)("button",{className:"modal-close",onClick:t,"aria-label":"Close",children:"\u2715"})]}),(0,a.jsxs)("div",{className:"format-toggle",children:[(0,a.jsx)("button",{className:r==="text"?"on":"",onClick:()=>o("text"),children:"Text \xB7 Shareable"}),(0,a.jsx)("button",{className:r==="json"?"on":"",onClick:()=>o("json"),children:"JSON \xB7 Re-importable"})]}),(0,a.jsx)("div",{className:"share-preview",children:s}),(0,a.jsxs)("div",{className:"action-btn-row",children:[(0,a.jsx)("button",{className:"btn small",onClick:c,children:"Copy"}),u&&(0,a.jsx)("button",{className:"btn ghost small",onClick:m,children:"\u2197 Share via..."})]}),(0,a.jsx)("div",{style:{color:"var(--ash)",fontSize:10,letterSpacing:"0.12em",lineHeight:1.6,marginTop:8},children:r==="text"?"TEXT format is human-readable \u2014 good for messages, notes, or posting. Cannot be re-imported.":"JSON format preserves the full workout structure \u2014 paste into another HORSEPOWER install to import."})]})})}function Cm({onClose:e,onImport:t}){let[n,r]=(0,R.useState)(""),[o,i]=(0,R.useState)(null);return(0,R.useEffect)(()=>{let u=document.body.style.overflow;document.body.style.overflow="hidden";let c=m=>{m.key==="Escape"&&e()};return window.addEventListener("keydown",c),()=>{document.body.style.overflow=u,window.removeEventListener("keydown",c)}},[e]),(0,a.jsx)("div",{className:"modal-backdrop",onClick:e,children:(0,a.jsxs)("div",{className:"modal-sheet",onClick:u=>u.stopPropagation(),children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"modal-cat",children:"\u2014 Import Workout"}),(0,a.jsx)("h3",{className:"display modal-title",children:"Paste JSON"}),(0,a.jsx)("div",{className:"modal-targets",children:"Bring in a workout shared from another HORSEPOWER install"})]}),(0,a.jsx)("button",{className:"modal-close",onClick:e,"aria-label":"Close",children:"\u2715"})]}),(0,a.jsx)("div",{className:"action-btn-row",style:{marginBottom:14},children:(0,a.jsx)("button",{className:"btn ghost small",onClick:async()=>{i(null);try{if(navigator.clipboard&&navigator.clipboard.readText){let u=await navigator.clipboard.readText();r(u)}}catch{i("Could not read clipboard. Paste manually below.")}},children:"\u2193 Paste from Clipboard"})}),(0,a.jsx)("textarea",{className:"import-textarea",value:n,onChange:u=>{r(u.target.value),i(null)},placeholder:'Paste the JSON workout here. It should start with { "forgeVersion": 1, ...'}),o&&(0,a.jsx)("div",{className:"import-error",children:o}),(0,a.jsx)("button",{className:"btn",onClick:()=>{i(null);try{t(n)}catch(u){i(u.message||"Import failed")}},disabled:!n.trim(),style:{marginTop:16},children:"\u25B8 Import Workout"})]})})}function Em({settings:e,onUpdate:t,onClose:n,onClearHistory:r,onClearCustoms:o,onClearNotes:i,historyCount:l,customCount:s,notesCount:u}){(0,R.useEffect)(()=>{let m=document.body.style.overflow;document.body.style.overflow="hidden";let v=h=>{h.key==="Escape"&&n()};return window.addEventListener("keydown",v),()=>{document.body.style.overflow=m,window.removeEventListener("keydown",v)}},[n]);let c=m=>t({...e,[m]:!e[m]});return(0,a.jsx)("div",{className:"modal-backdrop",onClick:n,children:(0,a.jsxs)("div",{className:"modal-sheet",onClick:m=>m.stopPropagation(),children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"modal-cat",children:"\u2014 Settings"}),(0,a.jsx)("h3",{className:"display modal-title",children:"Customize"})]}),(0,a.jsx)("button",{className:"modal-close",onClick:n,"aria-label":"Close",children:"\u2715"})]}),(0,a.jsx)("div",{className:"modal-section-title",children:"\u2014 Workout Cues"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"setting-row",children:[(0,a.jsxs)("div",{className:"setting-info",children:[(0,a.jsx)("div",{className:"setting-name",children:"Sound"}),(0,a.jsx)("div",{className:"setting-desc",children:"Beep on 3-2-1 countdown and at interval transitions."})]}),(0,a.jsx)("button",{className:"toggle"+(e.sound?" on":""),onClick:()=>c("sound"),"aria-label":"Toggle sound",children:(0,a.jsx)("span",{className:"toggle-thumb"})})]}),(0,a.jsxs)("div",{className:"setting-row",children:[(0,a.jsxs)("div",{className:"setting-info",children:[(0,a.jsx)("div",{className:"setting-name",children:"Vibration"}),(0,a.jsx)("div",{className:"setting-desc",children:"Haptic pulse on countdown and transitions (mobile only)."})]}),(0,a.jsx)("button",{className:"toggle"+(e.vibration?" on":""),onClick:()=>c("vibration"),"aria-label":"Toggle vibration",children:(0,a.jsx)("span",{className:"toggle-thumb"})})]})]}),(0,a.jsx)("div",{className:"modal-section-title",style:{marginTop:24},children:"\u2014 Manage Data"}),(0,a.jsxs)("button",{className:"danger-btn",onClick:r,disabled:l===0,children:["Clear Workout History (",l," ",l===1?"session":"sessions",")"]}),(0,a.jsxs)("button",{className:"danger-btn",onClick:o,disabled:s===0,children:["Delete All Custom Workouts (",s,")"]}),(0,a.jsxs)("button",{className:"danger-btn",onClick:i,disabled:!u,children:["Delete All Exercise Notes (",u||0,")"]}),(0,a.jsxs)("div",{style:{marginTop:28,paddingTop:18,borderTop:"1px solid var(--border)",color:"var(--ash)",fontSize:10,letterSpacing:"0.1em",lineHeight:1.7,textAlign:"center"},children:["HORSEPOWER \xB7 Kettlebell Discipline",(0,a.jsx)("br",{}),"Train smart. The bell will be there tomorrow."]})]})})}function bm({open:e,onClose:t,onAdd:n,title:r,currentBlocks:o}){let[i,l]=(0,R.useState)("All"),[s,u]=(0,R.useState)(""),[c,m]=(0,R.useState)({});if((0,R.useEffect)(()=>{if(!e)return;let y=document.body.style.overflow;document.body.style.overflow="hidden";let T=d=>{d.key==="Escape"&&t()};return window.addEventListener("keydown",T),()=>{document.body.style.overflow=y,window.removeEventListener("keydown",T)}},[e,t]),(0,R.useEffect)(()=>{e&&(m({}),u(""))},[e]),!e)return null;let v={};Object.entries(V).forEach(([y,T])=>{i!=="All"&&T.difficulty!==i||fd(T,s)&&(v[T.category]||(v[T.category]=[]),v[T.category].push({id:y,...T}))});let h=y=>{n(y),m(T=>({...T,[y]:(T[y]||0)+1}))},g=Object.values(c).reduce((y,T)=>y+T,0),x=Object.values(v).reduce((y,T)=>y+T.length,0);return(0,a.jsx)("div",{className:"modal-backdrop",onClick:t,children:(0,a.jsxs)("div",{className:"modal-sheet",onClick:y=>y.stopPropagation(),children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"modal-cat",children:"\u2014 Library Picker"}),(0,a.jsx)("h3",{className:"display modal-title",children:r})]}),(0,a.jsx)("button",{className:"modal-close",onClick:t,"aria-label":"Close",children:"\u2715"})]}),(0,a.jsxs)("div",{className:"search-wrap",children:[(0,a.jsx)("input",{className:"search-input",type:"text",placeholder:"Search by name, target, or category...",value:s,onChange:y=>u(y.target.value)}),s&&(0,a.jsx)("button",{className:"search-clear",onClick:()=>u(""),"aria-label":"Clear search",children:"\u2715"})]}),(0,a.jsxs)("div",{className:"filter-bar",children:[(0,a.jsx)("span",{className:"filter-bar-label",children:"Level"}),(0,a.jsx)("button",{className:"filter-chip"+(i==="All"?" on":""),onClick:()=>l("All"),children:"All"}),dd.map(y=>(0,a.jsx)("button",{className:"filter-chip"+(i===y?" on":""),onClick:()=>l(y),children:y},y))]}),g>0&&(0,a.jsxs)("div",{className:"picker-summary",children:["\u2713 Added ",g," ",g===1?"movement":"movements"," this session"]}),cd.filter(y=>v[y]).map(y=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"picker-cat-title",children:y}),v[y].map(T=>{let d=c[T.id]||0;return(0,a.jsxs)("div",{className:"picker-row",children:[(0,a.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,a.jsx)("div",{className:"picker-name",children:T.name}),(0,a.jsxs)("div",{className:"picker-meta",children:[(0,a.jsx)("span",{className:"ex-diff "+T.difficulty,style:{marginTop:0,marginRight:6,padding:"1px 6px",fontSize:8},children:T.difficulty}),T.targets]})]}),(0,a.jsxs)("button",{className:"add-btn"+(d>0?" added":""),onClick:()=>h(T.id),children:["+ Add",d>0?` (${d})`:""]})]},T.id)})]},y)),x===0&&(0,a.jsx)("div",{className:"search-empty",style:{marginTop:12},children:s?(0,a.jsxs)(a.Fragment,{children:["No movements match ",(0,a.jsxs)("span",{className:"accent",children:['"',s,'"']}),"."]}):"No movements match this filter."}),(0,a.jsx)("button",{className:"btn",onClick:t,style:{marginTop:20},children:"Done"})]})})}function zm({existing:e,onSave:t,onCancel:n}){let[r,o]=(0,R.useState)(e?.name||""),[i,l]=(0,R.useState)(()=>e?.blocks?e.blocks.map(S=>S.type?S:{...S,type:"block"}):[]),[s,u]=(0,R.useState)(!1),[c,m]=(0,R.useState)({type:"top"}),v=()=>{m({type:"top"}),u(!0)},h=S=>{m({type:"round",roundIdx:S}),u(!0)},g=S=>{c.type==="top"?l(P=>[...P,{type:"block",id:S,mode:"time",duration:30,reps:"10",rest:30}]):l(P=>P.map((M,O)=>O!==c.roundIdx?M:{...M,blocks:[...M.blocks||[],{id:S,mode:"time",duration:30,reps:"10",rest:30}]}))},x=()=>{l(S=>[...S,{type:"round",rounds:3,name:"",blocks:[]}])},y=S=>l(P=>P.filter((M,O)=>O!==S)),T=(S,P)=>{l(M=>M.map((O,D)=>D!==S?O:{...O,blocks:O.blocks.filter((G,ge)=>ge!==P)}))},d=(S,P)=>{l(M=>{let O=S+P;if(O<0||O>=M.length)return M;let D=[...M];return[D[S],D[O]]=[D[O],D[S]],D})},p=(S,P,M)=>{l(O=>O.map((D,G)=>{if(G!==S)return D;let ge=P+M;if(ge<0||ge>=D.blocks.length)return D;let ye=[...D.blocks];return[ye[P],ye[ge]]=[ye[ge],ye[P]],{...D,blocks:ye}}))},f=(S,P,M)=>{l(O=>O.map((D,G)=>G===S?{...D,[P]:M}:D))},w=(S,P,M,O)=>{l(D=>D.map((G,ge)=>ge!==S?G:{...G,blocks:G.blocks.map((ye,Cn)=>Cn===P?{...ye,[M]:O}:ye)}))},N=(S,P)=>{l(M=>M.map((O,D)=>D===S?{...O,rounds:Math.max(1,Math.min(20,P))}:O))},C=(S,P)=>{l(M=>M.map((O,D)=>D===S?{...O,restBetweenRounds:Math.max(0,Math.min(600,P))}:O))},z=Qt(i),_=r.trim().length>0&&z.length>0,A=()=>{_&&t({id:e?.id||`custom-${Date.now()}`,name:r.trim(),tag:"Custom",duration:Qo(i),description:"Your custom forge.",blocks:i,custom:!0})},B=pm(i),q=0;return(0,a.jsxs)("main",{className:"container",children:[(0,a.jsxs)("button",{className:"back-link",onClick:n,children:[(0,a.jsx)(pd,{})," Cancel"]}),(0,a.jsxs)("div",{className:"hero-eyebrow",children:["\u2014 ",e?"Edit Workout":"New Workout"]}),(0,a.jsx)("input",{className:"name-input",type:"text",placeholder:"WORKOUT NAME",value:r,maxLength:32,onChange:S=>o(S.target.value)}),(0,a.jsx)("div",{className:"label",style:{marginBottom:24},children:z.length>0?`${Qo(i)} \xB7 ${z.length} movement${z.length!==1?"s":""} (flattened)`:"Add movements below"}),(0,a.jsxs)("div",{className:"builder-section",children:[(0,a.jsxs)("div",{className:"builder-section-head",children:[(0,a.jsx)("span",{className:"builder-section-title",children:"The Sequence"}),(0,a.jsxs)("span",{className:"builder-section-count",children:[i.length," block",i.length!==1?"s":""]})]}),i.length===0?(0,a.jsxs)("div",{className:"empty-state",children:[(0,a.jsx)("div",{className:"empty-state-icon",children:(0,a.jsx)(gr,{size:36})}),(0,a.jsx)("div",{className:"empty-state-text",children:"Tap the buttons below to add a movement or a circuit."})]}):i.map((S,P)=>{if(S.type==="round"){let O=S.restBetweenRounds===void 0?"":S.restBetweenRounds;return(0,a.jsxs)("div",{className:"round-card",children:[(0,a.jsxs)("div",{className:"round-head",children:[(0,a.jsxs)("div",{className:"round-head-top",children:[(0,a.jsxs)("span",{className:"round-title",children:[S.name||"Circuit"," \xD7 ",S.rounds]}),(0,a.jsxs)("div",{className:"round-head-actions",children:[(0,a.jsx)("button",{className:"icon-btn",onClick:()=>d(P,-1),disabled:P===0,"aria-label":"Move up",children:"\u2191"}),(0,a.jsx)("button",{className:"icon-btn",onClick:()=>d(P,1),disabled:P===i.length-1,"aria-label":"Move down",children:"\u2193"}),(0,a.jsx)("button",{className:"icon-btn danger",onClick:()=>y(P),"aria-label":"Remove circuit",children:"\u2715"})]})]}),(0,a.jsxs)("div",{className:"round-head-fields",children:[(0,a.jsxs)("div",{className:"round-rounds",children:[(0,a.jsx)("span",{className:"field-lbl",style:{paddingLeft:0},children:"Rounds"}),(0,a.jsx)("input",{type:"number",min:"1",max:"20",value:S.rounds,onChange:D=>N(P,parseInt(D.target.value)||1)})]}),(0,a.jsxs)("div",{className:"round-rounds",children:[(0,a.jsx)("span",{className:"field-lbl",style:{paddingLeft:0},children:"Rest btwn"}),(0,a.jsx)("input",{type:"number",min:"0",max:"600",placeholder:"\u2014",value:O,onChange:D=>{let G=D.target.value;G===""?C(P,void 0):C(P,parseInt(G)||0)}}),(0,a.jsx)("span",{className:"field-lbl",style:{paddingRight:8},children:"s"})]})]})]}),S.blocks.length===0?(0,a.jsx)("div",{style:{padding:16,textAlign:"center",color:"var(--ash)",fontSize:11,letterSpacing:"0.1em"},children:"Empty circuit. Add movements below."}):S.blocks.map((D,G)=>{q++;let ge=V[D.id];return ge?(0,a.jsx)(ud,{inRound:!0,num:q,block:D,name:ge.name,onChange:(ye,Cn)=>w(P,G,ye,Cn),onMoveUp:()=>p(P,G,-1),onMoveDown:()=>p(P,G,1),onRemove:()=>T(P,G),canUp:G>0,canDown:G<S.blocks.length-1},G):null}),(0,a.jsx)("button",{className:"round-add-btn",onClick:()=>h(P),children:"+ Add Movement to Circuit"})]},P)}q++;let M=V[S.id];return M?(0,a.jsx)(ud,{num:q,block:S,name:M.name,onChange:(O,D)=>f(P,O,D),onMoveUp:()=>d(P,-1),onMoveDown:()=>d(P,1),onRemove:()=>y(P),canUp:P>0,canDown:P<i.length-1},P):null}),(0,a.jsxs)("div",{className:"builder-add-row",children:[(0,a.jsx)("button",{className:"builder-add-btn",onClick:v,children:"+ Add Movement"}),(0,a.jsx)("button",{className:"builder-add-btn circuit",onClick:x,children:"+ Add Circuit"})]})]}),B.length>0&&(0,a.jsxs)("div",{className:"builder-section",children:[(0,a.jsxs)("div",{className:"builder-section-head",children:[(0,a.jsx)("span",{className:"builder-section-title",children:"Suggested Next"}),(0,a.jsx)("span",{className:"builder-section-count",children:"based on pairings"})]}),(0,a.jsx)("div",{className:"pair-chips",children:B.map(S=>(0,a.jsxs)("button",{className:"pair-chip",onClick:()=>{l(P=>[...P,{type:"block",id:S,mode:"time",duration:30,reps:"10",rest:30}])},children:["+ ",V[S].name]},S))})]}),(0,a.jsxs)("div",{className:"save-bar",children:[(0,a.jsx)("button",{className:"btn ghost small",style:{flex:1},onClick:n,children:"Cancel"}),(0,a.jsx)("button",{className:"btn small",style:{flex:2},onClick:A,disabled:!_,children:e?"Save Changes":"Save Workout"})]}),(0,a.jsx)(bm,{open:s,onClose:()=>u(!1),onAdd:g,title:c.type==="round"?"Add to Circuit":"Add Movement"})]})}function ud({inRound:e,num:t,block:n,name:r,onChange:o,onMoveUp:i,onMoveDown:l,onRemove:s,canUp:u,canDown:c}){return(0,a.jsxs)("div",{className:"block-card"+(e?" in-round":""),children:[(0,a.jsx)("span",{className:"block-num",children:String(t).padStart(2,"0")}),(0,a.jsxs)("div",{className:"block-main",children:[(0,a.jsx)("div",{className:"block-name",children:r}),(0,a.jsxs)("div",{className:"block-controls",children:[(0,a.jsxs)("div",{className:"mode-toggle",children:[(0,a.jsx)("button",{className:n.mode==="time"?"on":"",onClick:()=>o("mode","time"),children:"Time"}),(0,a.jsx)("button",{className:n.mode==="reps"?"on":"",onClick:()=>o("mode","reps"),children:"Reps"})]}),n.mode==="time"?(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("span",{className:"field-lbl",children:"For"}),(0,a.jsx)("input",{type:"number",min:"5",max:"600",value:n.duration,onChange:m=>o("duration",parseInt(m.target.value)||30)}),(0,a.jsx)("span",{className:"field-lbl",style:{paddingRight:8},children:"s"})]}):(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("span",{className:"field-lbl",children:"Reps"}),(0,a.jsx)("input",{type:"text",className:"reps-input",value:n.reps,onChange:m=>o("reps",m.target.value),placeholder:"10"})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("span",{className:"field-lbl",children:"Rest"}),(0,a.jsx)("input",{type:"number",min:"0",max:"600",value:n.rest,onChange:m=>o("rest",parseInt(m.target.value)||0)}),(0,a.jsx)("span",{className:"field-lbl",style:{paddingRight:8},children:"s"})]})]})]}),(0,a.jsxs)("div",{className:"block-side",children:[(0,a.jsx)("button",{className:"icon-btn",onClick:i,disabled:!u,"aria-label":"Move up",children:"\u2191"}),(0,a.jsx)("button",{className:"icon-btn",onClick:l,disabled:!c,"aria-label":"Move down",children:"\u2193"}),(0,a.jsx)("button",{className:"icon-btn danger",onClick:s,"aria-label":"Remove",children:"\u2715"})]})]})}var Tm=document.getElementById("root"),_m=(0,hd.createRoot)(Tm);_m.render((0,a.jsx)(vd,{}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").catch(e=>{console.warn("SW registration failed:",e)})});})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
