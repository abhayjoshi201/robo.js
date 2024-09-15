"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[4448],{1191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(5893),s=t(1151),l=t(5396),a=t(352),o=t(4263);const i={image:"https://preview.robojs.dev?path=/plugins/overview"},c="\u2728 Robo Plugins",d={id:"plugins/overview",title:"\u2728 Robo Plugins",description:"Robo Plugins are special. They let you add features to your Robo with one command and integrate seamlessly thanks to the Robo File Structure. What's more, anyone can create a plugin.",source:"@site/docs/plugins/overview.mdx",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/plugins/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/plugins/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1719205204e3,frontMatter:{image:"https://preview.robojs.dev?path=/plugins/overview"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd28 Self-hosting",permalink:"/hosting/self-host"},next:{title:"\u2728 Overview",permalink:"/plugins/overview"}},h={},u=[{value:"Using Robo CLI",id:"using-robo-cli",level:2},{value:"Install",id:"install",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Updates",id:"updates",level:3},{value:"Manually",id:"manually",level:2},{value:"Package Manager",id:"package-manager",level:3},{value:"Register Plugin",id:"register-plugin",level:3},{value:"Learn More",id:"learn-more",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-robo-plugins",children:"\u2728 Robo Plugins"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Robo Plugins"})," are special. They let you add features to your ",(0,r.jsx)(n.strong,{children:"Robo"})," with one command and integrate seamlessly thanks to the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./robojs/files",children:"Robo File Structure"})}),". What's more, anyone can ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./create-robo/plugins",children:"create a plugin"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can install and manage plugins in ",(0,r.jsx)(n.strong,{children:"Robo.js"})," either using the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"../robojs/cli",children:"Robo CLI"})})," or manually."]}),"\n",(0,r.jsx)(n.h2,{id:"using-robo-cli",children:"Using Robo CLI"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Robo CLI"})," has its own commands install the plugin's ",(0,r.jsx)(n.strong,{children:"NPM package"})," and ",(0,r.jsx)(n.strong,{children:"register it"})," in your Robo's ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"../robojs/config",children:"configuration"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When dealing with NPM packages, ",(0,r.jsx)(n.strong,{children:"Robo CLI"})," will use the executor command's package manager."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Command"}),(0,r.jsx)(n.th,{children:"Package Manager"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"npx robo add"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"npm install"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pnpm robo add"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pnpm add"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"yarn robo add"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"yarn add"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bun robo add"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bun add"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(n.p,{children:["Run in your terminal, replacing ",(0,r.jsx)(n.code,{children:"<package>"})," with the name of the plugin you want to install (e.g. ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./ai",children:"@robojs/ai"})}),"):"]}),"\n",(0,r.jsxs)(o.o,{execute:!0,children:["robo add ","package"]}),"\n",(0,r.jsxs)(n.p,{children:["This will install the package and register it in your Robo's ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"../robojs/config",children:"configuration"})}),". To install many at once:"]}),"\n",(0,r.jsx)(o.o,{execute:!0,children:"robo add @robojs/ai @robojs/moderation @robojs/server"}),"\n",(0,r.jsx)(n.p,{children:"You can also create a new Robo project with plugins pre-installed:"}),"\n",(0,r.jsxs)(o.o,{create:!0,children:["projectName"," --plugins @robojs/ai @robojs/server"]}),"\n",(0,r.jsx)(n.h3,{id:"uninstall",children:"Uninstall"}),"\n",(0,r.jsx)(n.p,{children:"To remove a plugin:"}),"\n",(0,r.jsxs)(o.o,{execute:!0,children:["robo remove ","package"]}),"\n",(0,r.jsxs)(n.p,{children:["This will uninstall the package and remove it from your Robo's ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"../robojs/config",children:"configuration"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"updates",children:"Updates"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:"robo upgrade"})," to not only update ",(0,r.jsx)(n.strong,{children:"Robo.js"})," itself, but also all installed plugins."]}),"\n",(0,r.jsx)(o.o,{execute:!0,children:"robo upgrade"}),"\n",(0,r.jsx)(n.p,{children:"This will show you a list of updates and changelogs for you to select."}),"\n",(0,r.jsx)(n.h2,{id:"manually",children:"Manually"}),"\n",(0,r.jsxs)(n.p,{children:["Don't want to use the ",(0,r.jsx)(n.strong,{children:"Robo CLI"}),"? You can still install plugins manually. It's not as convenient as using the ",(0,r.jsx)(n.strong,{children:"Robo CLI"}),", but it's still a straightforward process."]}),"\n",(0,r.jsx)(n.p,{children:"Here's how you can do it:"}),"\n",(0,r.jsx)(n.h3,{id:"package-manager",children:"Package Manager"}),"\n",(0,r.jsx)(n.p,{children:"Use the package manager of your choice to install the plugin:"}),"\n",(0,r.jsx)(o.o,{install:!0,children:"package"}),"\n",(0,r.jsxs)(n.p,{children:["The same goes for ",(0,r.jsx)(n.code,{children:"bun"}),", ",(0,r.jsx)(n.code,{children:"pnpm"}),", and ",(0,r.jsx)(n.code,{children:"yarn"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"register-plugin",children:"Register Plugin"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Robo.js"})," knows which plugins to use by looking the ",(0,r.jsx)(n.code,{children:"/config/plugins"})," directory."]}),"\n",(0,r.jsxs)(n.p,{children:["For each plugin you want, create an ",(0,r.jsx)(n.code,{children:".mjs"})," file in ",(0,r.jsx)(n.code,{children:"/config/plugins"})," with the same name as the plugin's package. The file should export the plugin's configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="config/plugins/<package>.mjs"',children:"export default {\n\t// ... plugin configuration\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Remember to delete the file if you uninstall the plugin."}),"\n",(0,r.jsx)(n.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,r.jsxs)(a._,{children:[(0,r.jsx)(l.Z,{href:"./create",title:"\ud83d\udd0c Creating Plugins",description:"Make your own plugins for Robo.js."}),(0,r.jsx)(l.Z,{href:"./directory",title:"\ud83d\uddc3\ufe0f Plugin Directory",description:"Browse plugins for your Robo."})]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5396:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),s=t(3692),l=t(2503);const a=e=>{const{description:n,href:t,title:a}=e;return r.createElement(s.Z,{className:"col col--6 nodecor margin-bottom--lg",to:t},r.createElement("div",{className:"card padding--lg cardContent"},r.createElement(l.Z,{as:"h4",className:"text--truncate cardTitle"},a),r.createElement("p",{className:"text--truncate cardDescription"},n)))}},352:(e,n,t)=>{t.d(n,{_:()=>s});var r=t(7294);const s=e=>{const{children:n}=e;return r.createElement("div",{className:"row cardContainer"},n)}},4263:(e,n,t)=>{t.d(n,{o:()=>g});var r=t(5317),s=t(8849),l=t.n(s),a=t(7294);const o=e=>{const{defaultValue:n,onSelect:t,options:s}=e,[o,i]=(0,a.useState)(!1),[c,d]=(0,a.useState)(n??s[0]);(0,a.useEffect)((()=>{d(n??s[0])}),[n,s]);const h=e=>()=>{d(e),t(e),i(!1)};return a.createElement("div",{className:"select-container"},a.createElement("button",{className:"select-row",onClick:()=>{i(!o)}},a.createElement("span",{className:"select-text no-margin"},c.label),a.createElement(l(),{path:o?r.Waq:r.CW,size:"16px",color:"rgb(161, 161, 161)"})),o&&a.createElement("menu",{className:"select-menu"},s.map((e=>a.createElement("button",{key:e.value,className:e.value===c.value?"select-menu-active":void 0,onClick:h(e)},e.label)))))};var i=t(640),c=t.n(i);var d=t(5103),h=t(8583);const u=(0,d.cn)("npm");const p=[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"},{label:"PNPM",value:"pnpm"}],g=e=>{const{children:n,create:t,execute:s,install:i,title:d="Terminal"}=e,[g]=[async e=>c()(e)],[m,j]=function(){const[e,n]=(0,h.KO)(u);return[e,n]}(),x=p.find((e=>e.value===m));let b=n;"string"==typeof b&&(b=b.trim());let v="";t?v=function(e){if("npm"===e)return"npx create-robo";if("yarn"===e)return"yarn create robo";if("pnpm"===e)return"pnpm create robo"}(x.value)+" ":s?v=function(e){if("npm"===e)return"npx";if("yarn"===e)return"yarn";if("pnpm"===e)return"pnpm";if("bun"===e)return"bun"}(x.value)+" ":i&&b?v=function(e){if("npm"===e)return"npm install";if("yarn"===e)return"yarn add";if("pnpm"===e)return"pnpm add";if("bun"===e)return"bun add"}(x.value)+" ":i&&(v=x.value+" install");return a.createElement("div",{className:"margin-bottom--lg terminal"},a.createElement("div",{className:"terminal-header"},a.createElement(l(),{path:r.aTZ,size:"16px",color:"rgb(161, 161, 161)"}),a.createElement("span",{className:"terminal-header-text"},d),a.createElement("div",{className:"spacer"}),a.createElement(o,{defaultValue:x,onSelect:e=>{console.log(e),j(e.value)},options:p}),a.createElement("button",{onClick:()=>{g(v+b)}},a.createElement(l(),{path:r.a0Z,size:"20px",color:"rgb(161, 161, 161)"}))),a.createElement("pre",{className:"prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar terminal-bg"},a.createElement("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"},a.createElement("span",{className:"token-line"},t||s||i?a.createElement(a.Fragment,null,a.createElement("span",{className:"token plain"},v),a.createElement("strong",null,a.createElement("span",{className:"token plain"},b))):a.createElement("span",{className:"token plain"},b)))))}}}]);