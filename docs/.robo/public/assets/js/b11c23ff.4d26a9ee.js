/*! For license information please see b11c23ff.4d26a9ee.js.LICENSE.txt */
"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[3360],{9324:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(5893),i=n(1151);const s={image:"https://preview.robojs.dev?path=/cli/robo"},t="\u2699\ufe0f Robo CLI",l={id:"cli/robo",title:"\u2699\ufe0f Robo CLI",description:"The Robo.js CLI helps you manage your bot project like a boss. Here's a quick overview of the available commands and options, grouped by their purpose:",source:"@site/docs/cli/robo.mdx",sourceDirName:"cli",slug:"/cli/robo",permalink:"/cli/robo",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/cli/robo.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1715586458e3,frontMatter:{image:"https://preview.robojs.dev?path=/cli/robo"},sidebar:"tutorialSidebar",previous:{title:"\u26a1 Create Robo",permalink:"/cli/create-robo"},next:{title:"\u2728 Robo.js Overview",permalink:"/robojs/overview"}},d={},c=[{value:"Running",id:"running",level:3},{value:"Building",id:"building",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Other",id:"other",level:3},{value:"Distributing",id:"distributing",level:3}];function a(e){const o={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"\ufe0f-robo-cli",children:"\u2699\ufe0f Robo CLI"}),"\n",(0,r.jsx)(o.p,{children:"The Robo.js CLI helps you manage your bot project like a boss. Here's a quick overview of the available commands and options, grouped by their purpose:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"Options:\n  -V, --version         output the version number\n  -h, --help            display help for command\n\nCommands:\n  dev [options]         Ready, set, code your bot to life! Starts development mode.\n  start [options]       Starts your bot in production mode.\n\n  build [options]       Builds your bot for production.\n  build plugin          Optimizes your source files to be published as a plugin via npm.\n\n  help [command]        Display help for command\n  upgrade               Updates Robo.js and all installed plugins.\n\n  deploy [options]      Deploys your bot to RoboPlay!\n  invite                Generates a link for servers to add your Robo.\n"})}),"\n",(0,r.jsx)(o.h3,{id:"running",children:"Running"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"dev"})}),": The primary way to run your Robo during development. It behaves similarly to ",(0,r.jsx)(o.code,{children:"nodemon"})," or ",(0,r.jsx)(o.code,{children:"ts-node-dev"}),", restarting your project when changes are detected. This command runs ",(0,r.jsx)(o.code,{children:"build"})," behind the scenes, automatically updating bot commands."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"start"})}),": Used for running your Robo in production after running ",(0,r.jsx)(o.code,{children:"build"}),". This is only necessary if you're self-hosting instead of using RoboPlay to host your Robo for free."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"building",children:"Building"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"build"})}),": Prepares your project for production by compiling your source files, generating a manifest file, and registering any command updates. You need to run this command before using ",(0,r.jsx)(o.code,{children:"start"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"build plugin"})}),": Works similarly to ",(0,r.jsx)(o.code,{children:"build"}),", but optimizes your source files to be published as a plugin via npm."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"plugins",children:"Plugins"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"add"})}),": Installs a plugin from npm and registers it with your Robo. You can also use this command to install plugins from a local directory!"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"remove"})}),": Uninstalls a plugin from your Robo and removes its config file."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"help"})}),": Displays help for this CLI or a specific command. Can be used like this: ",(0,r.jsx)(o.code,{children:"robo help"})," or also as a command option ",(0,r.jsx)(o.code,{children:"robo build --help"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"upgrade"})}),": Updates Robo.js and all installed plugins."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"distributing",children:"Distributing"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"deploy"})}),": Bundles your Robo's source files and hosts it on RoboPlay for free (currently invite-only)."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"invite"})}),": Generates an invite link to add your Robo onto Discord servers with permissions and all. For more information on adding your bot, refer to the ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"/docs/adding-to-server",children:"Adding to Discord Servers"})})," docs."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},5251:(e,o,n)=>{var r=n(7294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var r,s={},c=null,a=null;for(r in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(a=o.ref),o)t.call(o,r)&&!d.hasOwnProperty(r)&&(s[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===s[r]&&(s[r]=o[r]);return{$$typeof:i,type:e,key:c,ref:a,props:s,_owner:l.current}}o.Fragment=s,o.jsx=c,o.jsxs=c},5893:(e,o,n)=>{e.exports=n(5251)},1151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>t});var r=n(7294);const i={},s=r.createContext(i);function t(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);