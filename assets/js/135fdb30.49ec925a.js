/*! For license information please see 135fdb30.49ec925a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[146451],{469195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var r=n(824246),o=n(511151);const c={id:"plugin-scaffolder-backend-module-yeoman",title:"@backstage/plugin-scaffolder-backend-module-yeoman",description:"API Reference for @backstage/plugin-scaffolder-backend-module-yeoman"},a=void 0,u={id:"reference/plugin-scaffolder-backend-module-yeoman",title:"@backstage/plugin-scaffolder-backend-module-yeoman",description:"API Reference for @backstage/plugin-scaffolder-backend-module-yeoman",source:"@site/../docs/reference/plugin-scaffolder-backend-module-yeoman.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-yeoman",permalink:"/docs/reference/plugin-scaffolder-backend-module-yeoman",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-yeoman.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-yeoman",title:"@backstage/plugin-scaffolder-backend-module-yeoman",description:"API Reference for @backstage/plugin-scaffolder-backend-module-yeoman"}},s={},i=[{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",div:"div"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-yeoman",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-yeoman"})})]}),"\n",(0,r.jsxs)(t.p,{children:["A module for the scaffolder backend that lets you template projects using ",(0,r.jsx)(t.a,{href:"https://yeoman.io/",children:"Yeoman"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-yeoman.createrunyeomanaction",children:"createRunYeomanAction()"})}),(0,r.jsxs)(t.td,{children:["Creates a ",(0,r.jsxs)(t.code,{children:["run",(0,r.jsx)(t.div,{})]})," Scaffolder action."]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-yeoman.yeomanmodule",children:"yeomanModule"})}),(0,r.jsx)(t.td,{children:"The Yeoman Module for the Scaffolder Backend"})]})})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,c={},i=null,l=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:l,props:c,_owner:u.current}}t.Fragment=c,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function _(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var k=v.prototype=new _;k.constructor=v,h(k,b.prototype),k.isPureReactComponent=!0;var j=Array.isArray,g=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,c={},a=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)g.call(t,o)&&!S.hasOwnProperty(o)&&(c[o]=t[o]);var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];c.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:u,props:c,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===c?"."+C(s,0):c,j(a)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(a,t,o,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),t.push(a)),1;if(s=0,c=""===c?".":c+":",j(e))for(var i=0;i<e.length;i++){var l=c+C(u=e[i],i);s+=$(u,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)s+=$(u=u.value,t,o,l=c+C(u,i++),a);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:x};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=c,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)g.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==s?s[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){s=Array(i);for(var l=0;l<i;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:n,type:e.type,key:c,ref:a,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>c});var r=n(667294);const o=r.createContext({});function c(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||a:c(e),r.createElement(o.Provider,{value:u},t)}}}]);