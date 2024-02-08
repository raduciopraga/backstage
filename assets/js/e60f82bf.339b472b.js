/*! For license information please see e60f82bf.339b472b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[489412],{868378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(824246),c=n(511151);const a={id:"backend-dynamic-feature-service.isbackenddynamicplugininstaller",title:"isBackendDynamicPluginInstaller()",description:"API reference for isBackendDynamicPluginInstaller()"},o=void 0,i={id:"reference/backend-dynamic-feature-service.isbackenddynamicplugininstaller",title:"isBackendDynamicPluginInstaller()",description:"API reference for isBackendDynamicPluginInstaller()",source:"@site/../docs/reference/backend-dynamic-feature-service.isbackenddynamicplugininstaller.md",sourceDirName:"reference",slug:"/reference/backend-dynamic-feature-service.isbackenddynamicplugininstaller",permalink:"/docs/reference/backend-dynamic-feature-service.isbackenddynamicplugininstaller",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-dynamic-feature-service.isbackenddynamicplugininstaller.md",tags:[],version:"current",frontMatter:{id:"backend-dynamic-feature-service.isbackenddynamicplugininstaller",title:"isBackendDynamicPluginInstaller()",description:"API reference for isBackendDynamicPluginInstaller()"}},u={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-dynamic-feature-service",children:(0,r.jsx)(t.code,{children:"@backstage/backend-dynamic-feature-service"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-dynamic-feature-service.isbackenddynamicplugininstaller",children:(0,r.jsx)(t.code,{children:"isBackendDynamicPluginInstaller"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function isBackendDynamicPluginInstaller(obj: any): obj is BackendDynamicPluginInstaller;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"obj"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["obj is ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-dynamic-feature-service.backenddynamicplugininstaller",children:"BackendDynamicPluginInstaller"})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:c,type:e,key:s,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function v(){}function _(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var k=_.prototype=new v;k.constructor=_,m(k,b.prototype),k.isPureReactComponent=!0;var g=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var c,a={},o=null,i=null;if(null!=t)for(c in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,c)&&!S.hasOwnProperty(c)&&(a[c]=t[c]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(c in u=e.defaultProps)void 0===a[c]&&(a[c]=u[c]);return{$$typeof:n,type:e,key:o,ref:i,props:a,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,c,a,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return o=o(u=e),e=""===a?"."+R(u,0):a,g(o)?(c="",null!=e&&(c=e.replace(w,"$&/")+"/"),C(o,t,c,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,c+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(u=0,a=""===a?".":a+":",g(e))for(var s=0;s<e.length;s++){var l=a+R(i=e[s],s);u+=C(i,t,c,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)u+=C(i=i.value,t,c,l=a+R(i,s++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function I(e,t,n){if(null==e)return e;var r=[],c=0;return C(e,r,"","",(function(e){return t.call(n,e,c++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},D={transition:null},B={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:D,ReactCurrentOwner:x};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=c,t.Profiler=o,t.PureComponent=_,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=m({},e.props),a=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)j.call(t,s)&&!S.hasOwnProperty(s)&&(c[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){u=Array(s);for(var l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}return{$$typeof:n,type:e.type,key:a,ref:o,props:c,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var r=n(667294);const c=r.createContext({});function a(e){const t=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:a(e),r.createElement(c.Provider,{value:i},t)}}}]);