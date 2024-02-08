/*! For license information please see c9ea806d.ff5e4955.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[758020],{513696:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(824246),s=t(511151);const o={id:"plugin-signals-react.signalapi.subscribe",title:"SignalApi.subscribe()",description:"API reference for SignalApi.subscribe()"},i=void 0,c={id:"reference/plugin-signals-react.signalapi.subscribe",title:"SignalApi.subscribe()",description:"API reference for SignalApi.subscribe()",source:"@site/../docs/reference/plugin-signals-react.signalapi.subscribe.md",sourceDirName:"reference",slug:"/reference/plugin-signals-react.signalapi.subscribe",permalink:"/docs/reference/plugin-signals-react.signalapi.subscribe",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-signals-react.signalapi.subscribe.md",tags:[],version:"current",frontMatter:{id:"plugin-signals-react.signalapi.subscribe",title:"SignalApi.subscribe()",description:"API reference for SignalApi.subscribe()"}},a={},u=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-signals-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-signals-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-signals-react.signalapi",children:(0,n.jsx)(r.code,{children:"SignalApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-signals-react.signalapi.subscribe",children:(0,n.jsx)(r.code,{children:"subscribe"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"subscribe(channel: string, onMessage: (message: JsonObject) => void): SignalSubscriber;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"channel"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onMessage"}),(0,n.jsxs)(r.td,{children:["(message: ",(0,n.jsx)(r.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),") => void"]}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-signals-react.signalsubscriber",children:"SignalSubscriber"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,r,t)=>{var n=t(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,o={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:u,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function g(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}function m(){}function _(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var j=_.prototype=new m;j.constructor=_,y(j,g.prototype),j.isPureReactComponent=!0;var v=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var s,o={},i=null,c=null;if(null!=r)for(s in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)x.call(r,s)&&!k.hasOwnProperty(s)&&(o[s]=r[s]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===o[s]&&(o[s]=a[s]);return{$$typeof:t,type:e,key:i,ref:c,props:o,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,s,o,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return i=i(a=e),e=""===o?"."+C(a,0):o,v(i)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),O(i,r,s,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),r.push(i)),1;if(a=0,o=""===o?".":o+":",v(e))for(var u=0;u<e.length;u++){var l=o+C(c=e[u],u);a+=O(c,r,s,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)a+=O(c=c.value,r,s,l=o+C(c,u++),i);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,r,t){if(null==e)return e;var n=[],s=0;return O(e,n,"","",(function(e){return r.call(t,e,s++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=s,r.Profiler=i,r.PureComponent=_,r.StrictMode=o,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=y({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,c=S.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in r)x.call(r,u)&&!k.hasOwnProperty(u)&&(s[u]=void 0===r[u]&&void 0!==a?a[u]:r[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];s.children=a}return{$$typeof:t,type:e.type,key:o,ref:i,props:s,_owner:c}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return A.current.useCallback(e,r)},r.useContext=function(e){return A.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return A.current.useDeferredValue(e)},r.useEffect=function(e,r){return A.current.useEffect(e,r)},r.useId=function(){return A.current.useId()},r.useImperativeHandle=function(e,r,t){return A.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return A.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return A.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return A.current.useMemo(e,r)},r.useReducer=function(e,r,t){return A.current.useReducer(e,r,t)},r.useRef=function(e){return A.current.useRef(e)},r.useState=function(e){return A.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return A.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return A.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>o});var n=t(667294);const s=n.createContext({});function o(e){const r=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:o(e),n.createElement(s.Provider,{value:c},r)}}}]);