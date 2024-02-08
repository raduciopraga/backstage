/*! For license information please see d9668dee.141cfa6c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[782847],{653113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(824246),i=r(511151);const o={id:"plugin-tech-insights-node.factretriever",title:"FactRetriever",description:"API reference for FactRetriever"},c=void 0,s={id:"reference/plugin-tech-insights-node.factretriever",title:"FactRetriever",description:"API reference for FactRetriever",source:"@site/../docs/reference/plugin-tech-insights-node.factretriever.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights-node.factretriever",permalink:"/docs/reference/plugin-tech-insights-node.factretriever",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights-node.factretriever.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights-node.factretriever",title:"FactRetriever",description:"API reference for FactRetriever"}},a={},u=[{value:"Properties",id:"properties",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-tech-insights-node"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever",children:(0,n.jsx)(t.code,{children:"FactRetriever"})})]}),"\n",(0,n.jsx)(t.p,{children:"FactRetriever interface"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface FactRetriever \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.description",children:"description?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," A short display description for the fact retriever to be used in the interface."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.entityfilter",children:"entityFilter?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Record<string, string | symbol | (string | symbol)[]>[] | Record<string, string | symbol | (string | symbol)[]>"}),(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," An optional object/array of objects of entity filters to indicate if this fact retriever is valid for an entity type. If omitted, the retriever should apply to all entities."]}),(0,n.jsx)(t.p,{children:"Should be defined for example: { field: 'kind', values: ['component'] } { field: 'metadata.name', values: ['component-1', 'component-2'] }"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.handler",children:"handler"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["(ctx: ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretrievercontext",children:"FactRetrieverContext"}),") => Promise<",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.techinsightfact",children:"TechInsightFact"}),"[]>"]}),(0,n.jsx)(t.td,{children:"Handler function that needs to be implemented to retrieve fact values for entities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.id",children:"id"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A unique identifier of the retriever. Used to identify and store individual facts returned from this retriever and schemas defined by this retriever."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.schema",children:"schema"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-common.factschema",children:"FactSchema"})}),(0,n.jsx)(t.td,{children:"A fact schema defining the shape of data returned from the handler method for each entity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.title",children:"title?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," A short display title for the fact retriever to be used in the interface"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.version",children:"version"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Semver string indicating the version of this fact retriever This version is used to determine if the schema this fact retriever matches the data this fact retriever provides."}),(0,n.jsx)(t.p,{children:"Should be incremented on changes to returned data from the handler or if the schema changes."})]})]})]})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,o={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||p}function j(){}function x(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=m.prototype;var g=x.prototype=new j;g.constructor=x,y(g,m.prototype),g.isPureReactComponent=!0;var b=Array.isArray,_=Object.prototype.hasOwnProperty,S={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var i,o={},c=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,i)&&!R.hasOwnProperty(i)&&(o[i]=t[i]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===o[i]&&(o[i]=a[i]);return{$$typeof:r,type:e,key:c,ref:s,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,i,o,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return c=c(a=e),e=""===o?"."+C(a,0):o,b(c)?(i="",null!=e&&(i=e.replace(w,"$&/")+"/"),O(c,t,i,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,i+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(a=0,o=""===o?".":o+":",b(e))for(var u=0;u<e.length;u++){var l=o+C(s=e[u],u);a+=O(s,t,i,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)a+=O(s=s.value,t,i,l=o+C(s,u++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,r){if(null==e)return e;var n=[],i=0;return O(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null},A={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=c,t.PureComponent=x,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=y({},e.props),o=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)_.call(t,u)&&!R.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];i.children=a}return{$$typeof:r,type:e.type,key:o,ref:c,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return F.current.useCallback(e,t)},t.useContext=function(e){return F.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return F.current.useDeferredValue(e)},t.useEffect=function(e,t){return F.current.useEffect(e,t)},t.useId=function(){return F.current.useId()},t.useImperativeHandle=function(e,t,r){return F.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return F.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return F.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return F.current.useMemo(e,t)},t.useReducer=function(e,t,r){return F.current.useReducer(e,t,r)},t.useRef=function(e){return F.current.useRef(e)},t.useState=function(e){return F.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return F.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return F.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>o});var n=r(667294);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:o(e),n.createElement(i.Provider,{value:s},t)}}}]);