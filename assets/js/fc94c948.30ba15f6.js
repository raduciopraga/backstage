/*! For license information please see fc94c948.30ba15f6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[928122],{651017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"discovery",title:"Azure DevOps Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in an Azure DevOps organization"},s=void 0,a={id:"integrations/azure/discovery",title:"Azure DevOps Discovery",description:"Automatically discovering catalog entities from repositories in an Azure DevOps organization",source:"@site/../docs/integrations/azure/discovery.md",sourceDirName:"integrations/azure",slug:"/integrations/azure/discovery",permalink:"/docs/integrations/azure/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/azure/discovery.md",tags:[],version:"current",frontMatter:{id:"discovery",title:"Azure DevOps Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in an Azure DevOps organization"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/azure/locations"},next:{title:"Org Data",permalink:"/docs/integrations/azure/org"}},c={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Code Search Feature",id:"code-search-feature",level:3},{value:"Azure Integration",id:"azure-integration",level:3},{value:"Installation",id:"installation",level:2},{value:"Alternative Processor",id:"alternative-processor",level:2}];function u(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",em:"em",ol:"ol"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Azure DevOps integration has a special entity provider for discovering\ncatalog entities within an Azure DevOps. The provider will crawl your Azure\nDevOps organization and register entities matching the configured path. This can\nbe useful as an alternative to static locations or manually adding things to the\ncatalog."}),"\n",(0,r.jsx)(t.p,{children:"This guide explains how to install and configure the Azure DevOps Entity Provider (recommended) or the Azure DevOps Processor."}),"\n",(0,r.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(t.h3,{id:"code-search-feature",children:"Code Search Feature"}),"\n",(0,r.jsx)(t.p,{children:"Azure discovery is driven by the Code Search feature in Azure DevOps, this may not be enabled by default. For Azure\nDevOps Services you can confirm this by looking at the installed extensions in your Organization Settings. For Azure\nDevOps Server you'll find this information in your Collection Settings."}),"\n",(0,r.jsxs)(t.p,{children:["If the Code Search extension is not listed then you can install it from the ",(0,r.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search&targetId=f9352dac-ba6e-434e-9241-a848a510ce3f&utm_source=vstsproduct&utm_medium=SearchExtStatus",children:"Visual Studio Marketplace"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"azure-integration",children:"Azure Integration"}),"\n",(0,r.jsxs)(t.p,{children:["Setup ",(0,r.jsx)(t.a,{href:"/docs/integrations/azure/locations",children:"Azure integration"})," with ",(0,r.jsx)(t.code,{children:"host"})," and ",(0,r.jsx)(t.code,{children:"token"}),". Host must be ",(0,r.jsx)(t.code,{children:"dev.azure.com"})," for Cloud users, otherwise set this to your on-premise hostname."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"At your configuration, you add one or more provider configs:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    azureDevOps:\n      yourProviderId: # identifies your dataset / provider independent of config changes\n        organization: myorg\n        project: myproject\n        repository: service-* # this will match all repos starting with service-*\n        path: /catalog-info.yaml\n        schedule: # optional; same options as in TaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n      yourSecondProviderId: # identifies your dataset / provider independent of config changes\n        organization: myorg\n        project: '*' # this will match all projects\n        repository: '*' # this will match all repos\n        path: /catalog-info.yaml\n      anotherProviderId: # another identifier\n        organization: myorg\n        project: myproject\n        repository: '*' # this will match all repos\n        path: /src/*/catalog-info.yaml # this will search for files deep inside the /src folder\n      yetAnotherProviderId: # guess, what? Another one :)\n        host: selfhostedazure.yourcompany.com\n        organization: myorg\n        project: myproject\n        branch: development\n"})}),"\n",(0,r.jsx)(t.p,{children:"The parameters available are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"host:"})})," ",(0,r.jsx)(t.em,{children:"(optional)"})," Leave empty for Cloud hosted, otherwise set to your self-hosted instance host."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"organization:"})})," Your Organization slug (or Collection for on-premise users). Required."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"project:"})})," ",(0,r.jsx)(t.em,{children:"(required)"})," Your project slug. Wildcards are supported as shown on the examples above. Using '*' will search all projects. For a project name containing spaces, use both single and double quotes as in ",(0,r.jsx)(t.code,{children:"project: '\"My Project Name\"'"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"repository:"})})," ",(0,r.jsx)(t.em,{children:"(optional)"})," The repository name. Wildcards are supported as show on the examples above. If not set, all repositories will be searched."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"path:"})})," ",(0,r.jsx)(t.em,{children:"(optional)"})," Where to find catalog-info.yaml files. Defaults to /catalog-info.yaml."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"branch:"})})," ",(0,r.jsx)(t.em,{children:"(optional)"})," The branch name to use."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"schedule"})}),":\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"initialDelay"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"scope"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\n",(0,r.jsx)(t.code,{children:"'global'"})," or ",(0,r.jsx)(t.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Note:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The path parameter follows the same rules as the search on Azure DevOps web interface. For more details visit the ",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/devops/project/search/get-started-search?view=azure-devops",children:"official search documentation"}),"."]}),"\n",(0,r.jsx)(t.li,{children:'To use branch parameters, it is necessary that the desired branch be added to the "Searchable branches" list within Azure DevOps Repositories. To do this, follow the instructions below:'}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Access your Azure DevOps and open the repository in which you want to add the branch."}),"\n",(0,r.jsx)(t.li,{children:'Click on "Settings" in the lower-left corner of the screen.'}),"\n",(0,r.jsx)(t.li,{children:'Select the "Options" option in the left navigation bar.'}),"\n",(0,r.jsx)(t.li,{children:'In the "Searchable branches" section, click on the "Add" button to add a new branch.'}),"\n",(0,r.jsx)(t.li,{children:'In the window that appears, enter the name of the branch you want to add and click "Add".'}),"\n",(0,r.jsx)(t.li,{children:'The added branch will now appear in the "Searchable branches" list.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"As this provider is not one of the default providers, you will first need to install\nthe Azure catalog plugin:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-azure\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once you've done that, you'll also need to add the segment below to ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/catalog.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { AzureDevOpsEntityProvider } from '@backstage/plugin-catalog-backend-module-azure';\n\nconst builder = await CatalogBuilder.create(env);\n/** ... other processors and/or providers ... */\n/* highlight-add-start */\nbuilder.addEntityProvider(\n  AzureDevOpsEntityProvider.fromConfig(env.config, {\n    logger: env.logger,\n    // optional: alternatively, use scheduler with schedule defined in app-config.yaml\n    schedule: env.scheduler.createScheduledTaskRunner({\n      frequency: { minutes: 30 },\n      timeout: { minutes: 3 },\n    }),\n    // optional: alternatively, use schedule\n    scheduler: env.scheduler,\n  }),\n);\n/* highlight-add-end */\n"})}),"\n",(0,r.jsx)(t.h2,{id:"alternative-processor",children:"Alternative Processor"}),"\n",(0,r.jsxs)(t.p,{children:["As an alternative to the entity provider ",(0,r.jsx)(t.code,{children:"AzureDevOpsEntityProvider"}),", you can still use the ",(0,r.jsx)(t.code,{children:"AzureDevopsDiscoveryProcessor"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { AzureDevOpsDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-azure';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-next-line */\n  builder.addProcessor(\n    AzureDevOpsDiscoveryProcessor.fromConfig(env.config, {\n      logger: env.logger,\n    }),\n  );\n\n  // ..\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    # Scan all repositories for a catalog-info.yaml in the root of the default branch\n    - type: azure-discovery\n      target: https://dev.azure.com/myorg/myproject\n    # Or use a custom pattern for a subset of all repositories with default repository\n    - type: azure-discovery\n      target: https://dev.azure.com/myorg/myproject/_git/service-*\n    # Or use a custom file format and location\n    - type: azure-discovery\n      target: https://dev.azure.com/myorg/myproject/_git/*?path=/src/*/catalog-info.yaml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note the ",(0,r.jsx)(t.code,{children:"azure-discovery"})," type, as this is not a regular ",(0,r.jsx)(t.code,{children:"url"})," processor."]}),"\n",(0,r.jsx)(t.p,{children:"When using a custom pattern, the target is composed of five parts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The base instance URL, ",(0,r.jsx)(t.code,{children:"https://dev.azure.com"})," in this case"]}),"\n",(0,r.jsxs)(t.li,{children:["The organization name which is required, ",(0,r.jsx)(t.code,{children:"myorg"})," in this case"]}),"\n",(0,r.jsxs)(t.li,{children:["The project name which is optional, ",(0,r.jsx)(t.code,{children:"myproject"})," in this case. This defaults to *, which scans all the projects where the token has access to."]}),"\n",(0,r.jsxs)(t.li,{children:["The repository blob to scan, which accepts * wildcard tokens and must be\nadded after ",(0,r.jsx)(t.code,{children:"_git/"}),". This can simply be ",(0,r.jsx)(t.code,{children:"*"})," to scan all repositories in the\nproject."]}),"\n",(0,r.jsxs)(t.li,{children:["The path within each repository to find the catalog YAML file. This will\nusually be ",(0,r.jsx)(t.code,{children:"/catalog-info.yaml"}),", ",(0,r.jsx)(t.code,{children:"/src/*/catalog-info.yaml"})," or a similar\nvariation for catalog files stored in the root directory of each repository."]}),"\n"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function v(){}function j(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var x=j.prototype=new v;x.constructor=j,y(x,g.prototype),x.isPureReactComponent=!0;var b=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!z.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+A(c,0):i,b(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),D(s,t,o,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",b(e))for(var l=0;l<e.length;l++){var u=i+A(a=e[l],l);c+=D(a,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=D(a=a.value,t,o,u=i+A(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return D(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null},R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:T,ReactCurrentOwner:_};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=j,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!z.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);