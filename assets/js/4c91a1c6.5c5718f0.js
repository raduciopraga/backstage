/*! For license information please see 4c91a1c6.5c5718f0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[249606],{837438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(824246),o=n(511151);const a={id:"plugin-techdocs-module-addons-contrib.expandablenavigation",title:"ExpandableNavigation()",description:"API reference for ExpandableNavigation()"},c=void 0,u={id:"reference/plugin-techdocs-module-addons-contrib.expandablenavigation",title:"ExpandableNavigation()",description:"API reference for ExpandableNavigation()",source:"@site/../docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",permalink:"/docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-module-addons-contrib.expandablenavigation",title:"ExpandableNavigation()",description:"API reference for ExpandableNavigation()"}},i={},s=[{value:"Example",id:"example",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-module-addons-contrib",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",children:(0,r.jsx)(t.code,{children:"ExpandableNavigation"})})]}),"\n",(0,r.jsx)(t.p,{children:"TechDocs addon that lets you expand/collapse the TechDocs main navigation and keep the preferred state in local storage. The addon will render as a button next to the site name if the documentation has nested navigation."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function ExpandableNavigation(): JSX.Element | null\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"JSX.Element | null"}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Here's a simple example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';\nimport { ExpandableNavigation } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    // other plugin routes\n    <Route path=\"/docs\" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path=\"/docs/:namespace/:kind/:name/*\"\n      element={<TechDocsReaderPage />}\n    >\n      <TechDocsAddons>\n        <ExpandableNavigation />\n      </TechDocsAddons>\n    </Route>\n  </FlatRoutes>;\n};\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:u.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var _=v.prototype=new g;_.constructor=v,y(_,b.prototype),_.isPureReactComponent=!0;var x=Array.isArray,E=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var o,a={},c=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:n,type:e,key:c,ref:u,props:a,_owner:j.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return c=c(i=e),e=""===a?"."+C(i,0):a,x(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),P(c,t,o,"",(function(e){return e}))):null!=c&&(R(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(i=0,a=""===a?".":a+":",x(e))for(var s=0;s<e.length;s++){var l=a+C(u=e[s],s);i+=P(u,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)i+=P(u=u.value,t,o,l=a+C(u,s++),c);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},D={transition:null},N={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:D,ReactCurrentOwner:j};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)E.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:a,ref:c,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||c:a(e),r.createElement(o.Provider,{value:u},t)}}}]);