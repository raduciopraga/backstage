/*! For license information please see b7514cd6.e6c1149e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[505616],{57951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"react-router-stable-migration",title:"React Router 6.0 Migration",description:"Guide for how to migrate from React Router v6 beta to React Router v6 stable"},i=void 0,s={id:"tutorials/react-router-stable-migration",title:"React Router 6.0 Migration",description:"Guide for how to migrate from React Router v6 beta to React Router v6 stable",source:"@site/../docs/tutorials/react-router-stable-migration.md",sourceDirName:"tutorials",slug:"/tutorials/react-router-stable-migration",permalink:"/docs/tutorials/react-router-stable-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/react-router-stable-migration.md",tags:[],version:"current",frontMatter:{id:"react-router-stable-migration",title:"React Router 6.0 Migration",description:"Guide for how to migrate from React Router v6 beta to React Router v6 stable"},sidebar:"docs",previous:{title:"Adding Custom Plugin to Existing Monorepo App",permalink:"/docs/tutorials/quickstart-app-plugin"},next:{title:"Migrating to React 18",permalink:"/docs/tutorials/react18-migration"}},c={},l=[{value:"Migration",id:"migration",level:2},{value:"Step 1 - Upgrade to Backstage 1.6",id:"step-1---upgrade-to-backstage-16",level:3},{value:"Step 2 - Move <code>react-router</code> to <code>peerDependencies</code>",id:"step-2---move-react-router-to-peerdependencies",level:3},{value:"Step 3 - Ensure that your external plugins are updated",id:"step-3---ensure-that-your-external-plugins-are-updated",level:3},{value:"Step 4 - Bump the React Router dependencies in your app",id:"step-4---bump-the-react-router-dependencies-in-your-app",level:3},{value:"Step 5 - Breaking Changes",id:"step-5---breaking-changes",level:3},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Route paths",id:"route-paths",level:3},{value:"Routes and Route components",id:"routes-and-route-components",level:3},{value:"<code>PermissionedRoute</code>",id:"permissionedroute",level:3},{value:"<code>&lt;Navigate /&gt;</code> component",id:"navigate--component",level:3},{value:"<code>NavLink</code>",id:"navlink",level:3},{value:"For Plugin Authors",id:"for-plugin-authors",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function u(e){const t=Object.assign({p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",a:"a",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Backstage has for a long time been using ",(0,r.jsx)(t.code,{children:"react-router"})," version ",(0,r.jsx)(t.code,{children:"6.0.0-beta.0"}),".\nWe adopted this unstable version because v6 had some new features that fit\nreally well with Backstage, particularly relative routing. Because we jumped on\nthis early and unstable version, we knew that we would at some point need a\nbreaking migration to the stable version of ",(0,r.jsx)(t.code,{children:"react-router"})," v6, which is the\npoint we're at now!"]}),"\n",(0,r.jsxs)(t.p,{children:["This migration is required but controlled by each app, meaning that you choose\nwhen you want to migrate your app. There will however be some point in the\nfuture where we drop support for the beta version of ",(0,r.jsx)(t.code,{children:"react-router"}),", at which\ntime you would be forced to migrate."]}),"\n",(0,r.jsxs)(t.p,{children:["The stable version of React Router v6 brings a number of improvements and bug\nfixes. Notably, the way that paths are resolved has been improved, which fixes a\nbug where paths like ",(0,r.jsx)(t.code,{children:"/catalog"})," and ",(0,r.jsx)(t.code,{children:"/catalog-import"})," could get confused."]}),"\n",(0,r.jsx)(t.h2,{id:"migration",children:"Migration"}),"\n",(0,r.jsx)(t.h3,{id:"step-1---upgrade-to-backstage-16",children:"Step 1 - Upgrade to Backstage 1.6"}),"\n",(0,r.jsxs)(t.p,{children:["The first Backstage release to support ",(0,r.jsx)(t.code,{children:"react-router"})," v6 is ",(0,r.jsx)(t.code,{children:"1.6"}),". You should upgrade to this version first before you start migrating. If you are an early bird and want to try out migration before that release, it is also shipped in ",(0,r.jsx)(t.code,{children:"1.6.0-next.1"}),"."]}),"\n",(0,r.jsxs)(t.h3,{id:"step-2---move-react-router-to-peerdependencies",children:["Step 2 - Move ",(0,r.jsx)(t.code,{children:"react-router"})," to ",(0,r.jsx)(t.code,{children:"peerDependencies"})]}),"\n",(0,r.jsxs)(t.p,{children:["It's important that only one version of ",(0,r.jsx)(t.code,{children:"react-router"})," is installed in the\nproject at a time. Similar to how the ",(0,r.jsx)(t.code,{children:"react"})," version is handled, all plugins\nand packages now declare a peer dependency on the React Router dependencies,\nrather than a direct dependency. The only exception to this is the app package\n(in ",(0,r.jsx)(t.code,{children:"packages/app/package.json"}),"), which has the direct dependencies that end up\ndeciding what version of React Router that you are using in your project."]}),"\n",(0,r.jsxs)(t.p,{children:["Your internal packages might specify a dependency on ",(0,r.jsx)(t.code,{children:"react-router"})," or ",(0,r.jsx)(t.code,{children:"react-router-dom"})," in their ",(0,r.jsx)(t.code,{children:"package.json"}),", and it's important that those are converted to ",(0,r.jsx)(t.code,{children:"peerDependencies"})," so that we can control the version of ",(0,r.jsx)(t.code,{children:"react-router"})," in the app ",(0,r.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"You can automate this step by running the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn backstage-cli migrate react-router-deps\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For those interested in doing this manually, apply the below change to all ",(0,r.jsx)(t.code,{children:"package.json"})," files except the one at ",(0,r.jsx)(t.code,{children:"packages/app/package.json"})," or any other app packages. Skip moving any dependencies that don't already exist, and move both ",(0,r.jsx)(t.code,{children:"dependencies"})," and ",(0,r.jsx)(t.code,{children:"devDependencies"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",metastring:'title="package.json"',children:' dependencies {\n   ...\n-  "react-router-dom": "^6.0.0-beta.0",\n-  "react-router": "^6.0.0-beta.0"\n },\n peerDependencies: {\n   ...\n+  "react-router-dom": "6.0.0-beta.0 || ^6.3.0",\n+  "react-router": "6.0.0-beta.0 || ^6.3.0"\n },\n'})}),"\n",(0,r.jsx)(t.h3,{id:"step-3---ensure-that-your-external-plugins-are-updated",children:"Step 3 - Ensure that your external plugins are updated"}),"\n",(0,r.jsxs)(t.p,{children:["It's important that you also update your external plugins to their latest version as these will have to perform the same ",(0,r.jsx)(t.code,{children:"peerDependencies"})," update."]}),"\n",(0,r.jsxs)(t.p,{children:["During this migration there may be external plugins that need updating. If you encounter any plugins outside of the ",(0,r.jsx)(t.code,{children:"@backstage"})," scope that are incompatible with your installation, make sure to check for an existing issue or raise a new one at the plugin's GitHub repository."]}),"\n",(0,r.jsx)(t.h3,{id:"step-4---bump-the-react-router-dependencies-in-your-app",children:"Step 4 - Bump the React Router dependencies in your app"}),"\n",(0,r.jsxs)(t.p,{children:["Now it's time to do the actual migration to the latest version of React Router. At this time of writing that is ",(0,r.jsx)(t.code,{children:"6.3.0"}),", but that is of course a moving target."]}),"\n",(0,r.jsxs)(t.p,{children:["The first step is to modify ",(0,r.jsx)(t.code,{children:"packages/app/package.json"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",metastring:'title="package.json"',children:'-    "react-router": "6.0.0-beta.0",\n-    "react-router-dom": "6.0.0-beta.0",\n+    "react-router": "^6.3.0",\n+    "react-router-dom": "^6.3.0",\n'})}),"\n",(0,r.jsx)(t.p,{children:"In case you happen to have multiple app packages in your project, apply the same change to all those packages."}),"\n",(0,r.jsxs)(t.p,{children:["Once the change has been made, run ",(0,r.jsx)(t.code,{children:"yarn install"}),", and then ",(0,r.jsx)(t.code,{children:"yarn why react-router"})," to validate the installation. You should see the following line in the log as the only resulting entry:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'=> Found "react-router@6.3.0"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If you see multiple entries, and especially ",(0,r.jsx)(t.code,{children:'=> Found "react-router@6.0.0-beta.0"'}),", then your dependencies have not yet been fully migrated to support React Router v6 stable. Double check the steps above, using the information that the Yarn ",(0,r.jsx)(t.code,{children:"why"})," command logged. Repeat the same process for ",(0,r.jsx)(t.code,{children:"yarn why react-router-dom"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you end up being stuck not being able to move your entire project to stable versions cleanly, then you can use Yarn ",(0,r.jsx)(t.code,{children:'"resolutions"'})," overrides in your root ",(0,r.jsx)(t.code,{children:"package.json"}),". Try to avoid this option as it may lead to hidden breakages at runtime, and verify any plugins that needed the override. A better option is likely to hold off migrating for a while until plugins have had time to be updated."]}),"\n",(0,r.jsx)(t.h3,{id:"step-5---breaking-changes",children:"Step 5 - Breaking Changes"}),"\n",(0,r.jsxs)(t.p,{children:["For a new app created with ",(0,r.jsx)(t.code,{children:"npx @backstage/create-app"}),", the above steps are all you need to do. If you have created internal plugins and customizations then be sure to review the breaking changes in the ",(0,r.jsx)(t.a,{href:"https://reactrouter.com/docs/en/v6/upgrading/reach#breaking-updates",children:"React Router changelog"})," and validate all parts of your app. We've summarized the most important breaking changes below."]}),"\n",(0,r.jsx)(t.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"https://reactrouter.com/docs/en/v6/upgrading/reach#breaking-updates",children:"changelog"})," for a full list of breaking changes. Below we highlight a couple of the most important ones."]}),"\n",(0,r.jsx)(t.h3,{id:"route-paths",children:"Route paths"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Route"})," components must always contain a ",(0,r.jsx)(t.code,{children:"path"})," or ",(0,r.jsx)(t.code,{children:"index"})," prop."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Routes>\n  {/* Invalid */}\n  <Route element={<Example />} />\n\n  {/* Valid */}\n  <Route path="/" element={<Example />} />\n\n  {/* Valid but discouraged due to incompatibility with react-router beta */}\n  <Route index element={<Example />} />\n</Routes>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Absolute route paths within each ",(0,r.jsx)(t.code,{children:"Routes"})," element must now match their own location, meaning that the following is invalid:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Routes>\n  <Route path="/foo">\n    <Route path="/bar" /> {/* INVALID, must be "/foo/bar" or "bar" */}\n  </Route>\n</Routes>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"routes-and-route-components",children:"Routes and Route components"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Routes"})," and ",(0,r.jsx)(t.code,{children:"Route"})," component both received a large related breaking changes. It is no longer possible\nto have anything but ",(0,r.jsx)(t.code,{children:"Route"})," elements and React fragments be a child of a ",(0,r.jsx)(t.code,{children:"Routes"})," element. This means that\nstructures like these:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Routes>\n  <MyComponent path="/foo" />\n  ...\n</Routes>\n'})}),"\n",(0,r.jsx)(t.p,{children:"need to be migrated to this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Routes>\n  <Route path="/foo" element={<MyComponent />} />\n  ...\n</Routes>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Somewhat related to the ",(0,r.jsx)(t.code,{children:"Routes"})," change, it is no longer possible to render a\n",(0,r.jsx)(t.code,{children:"Route"})," element by itself, outside of a ",(0,r.jsx)(t.code,{children:"Routes"})," wrapper. Previously, rendering\nsuch a ",(0,r.jsx)(t.code,{children:"Route"})," element would cause the contents of its ",(0,r.jsx)(t.code,{children:"element"})," prop to be\nrendered instead, but it will now throw an error."]}),"\n",(0,r.jsx)(t.h3,{id:"permissionedroute",children:(0,r.jsx)(t.code,{children:"PermissionedRoute"})}),"\n",(0,r.jsxs)(t.p,{children:["Because of the above change, the ",(0,r.jsx)(t.code,{children:"PermissionedRoute"})," component no longer works in all situations with React Router v6 stable. It has been deprecated in favor of the new ",(0,r.jsx)(t.code,{children:"RequirePermission"})," component, which can be placed anywhere in order to perform a permissions check."]}),"\n",(0,r.jsxs)(t.p,{children:["It's crucial that you update to ",(0,r.jsx)(t.code,{children:"RequirePermission"})," at the same time as you update to React Router v6 stable as the ",(0,r.jsx)(t.code,{children:"PermissionedRoute"})," component will no longer function."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'{/* highlight-remove-start */}\n<PermissionedRoute\n  path="/catalog-import"\n  permission={catalogEntityCreatePermission}\n  element={<CatalogImportPage />}\n{/* highlight-remove-end */}\n{/* highlight-add-start */}\n<Route\n  path="/catalog-import"\n  element={\n    <RequirePermission permission={catalogEntityCreatePermission}>\n      <CatalogImportPage />\n    </RequirePermission>\n  }\n{/* highlight-add-end */}\n/>\n'})}),"\n",(0,r.jsxs)(t.h3,{id:"navigate--component",children:[(0,r.jsx)(t.code,{children:"<Navigate />"})," component"]}),"\n",(0,r.jsxs)(t.p,{children:["When migrating over to React Router v6 stable, you might also see browser console warnings for the ",(0,r.jsx)(t.code,{children:"Navigate"})," component. This will need to be wrapped up in a ",(0,r.jsx)(t.code,{children:"Route"})," component with the ",(0,r.jsx)(t.code,{children:"Navigate"})," component in the ",(0,r.jsx)(t.code,{children:"element"})," prop."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'{\n  /* highlight-remove-next-line */\n}\n<Navigate key="/" to="catalog" />;\n{\n  /* highlight-add-next-line */\n}\n<Route path="/" element={<Navigate to="catalog" />} />;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"navlink",children:(0,r.jsx)(t.code,{children:"NavLink"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"NavLink"})," component no longer has the ",(0,r.jsx)(t.code,{children:"activeClassName"})," and ",(0,r.jsx)(t.code,{children:"activeStyle"})," props. Instead, the ",(0,r.jsx)(t.code,{children:"className"})," and ",(0,r.jsx)(t.code,{children:"style"})," props accept a callback that receives a boolean indicating whether the link is active."]}),"\n",(0,r.jsx)(t.h2,{id:"for-plugin-authors",children:"For Plugin Authors"}),"\n",(0,r.jsxs)(t.p,{children:["There are a few things to keep in mind when migrating a published plugin. You of course need to make sure that dependencies on React Router are moved to ",(0,r.jsx)(t.code,{children:"peerDependencies"})," as described above.\nIn addition, you need to make sure that your plugin truly is compatible with both versions of React Router at runtime. To help you achieve that, you can follow these additional guidelines:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Bump the version of ",(0,r.jsx)(t.code,{children:"react-router"})," and ",(0,r.jsx)(t.code,{children:"react-router-dom"})," in your own project to use the stable version. Place them in ",(0,r.jsx)(t.code,{children:"devDependencies"})," if your plugin is a single package project. The stable version is more strict, so this is the better baseline to work from."]}),"\n",(0,r.jsxs)(t.li,{children:["Make sure all ",(0,r.jsx)(t.code,{children:"Route"})," elements have a ",(0,r.jsx)(t.code,{children:"path"})," prop. Do not use the new ",(0,r.jsx)(t.code,{children:"index"})," props, as it is not supported by the beta version. Use ",(0,r.jsx)(t.code,{children:'path="/"'})," for the index routes within a ",(0,r.jsx)(t.code,{children:"Routes"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If you are using ",(0,r.jsx)(t.code,{children:"NavLink"}),", use both the new and old APIs simultaneously, and work around any TypeScript errors."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.p,{children:"Check the browser console for React Router related error messages."}),"\n",(0,r.jsxs)(t.p,{children:["Check ",(0,r.jsx)(t.code,{children:"yarn.lock"})," for packages depending on older versions of ",(0,r.jsx)(t.code,{children:"react-router"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn why react-router\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function x(){}function j(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=j.prototype=new x;b.constructor=j,g(b,y.prototype),b.isPureReactComponent=!0;var v=Array.isArray,R=Object.prototype.hasOwnProperty,w={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,o)&&!k.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+E(c,0):a,v(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",v(e))for(var l=0;l<e.length;l++){var u=a+E(s=e[l],l);c+=P(s,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=P(s=s.value,t,o,u=a+E(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function N(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},O={transition:null},$={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:O,ReactCurrentOwner:w};t.Children={map:N,forEach:function(e,t,n){N(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=j,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)R.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}}}]);