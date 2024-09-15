/*! For license information please see 641b70ff.02dea50b.js.LICENSE.txt */
"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[7101],{7346:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=n(5893),s=n(1151),r=n(5396),a=n(352);const i={image:"https://preview.robojs.dev?path=/hosting/roboplay"},l="\ud83d\ude80 RoboPlay",c={id:"hosting/roboplay",title:"\ud83d\ude80 RoboPlay",description:"Robo.js is built to work seamlessly with RoboPlay, a WavePlay service. They were built for each other from the ground up to make deploying and managing your Robo.js projects as easy as possible.",source:"@site/docs/hosting/roboplay.mdx",sourceDirName:"hosting",slug:"/hosting/roboplay",permalink:"/hosting/roboplay",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/hosting/roboplay.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1715586458e3,frontMatter:{image:"https://preview.robojs.dev?path=/hosting/roboplay"},sidebar:"tutorialSidebar",previous:{title:"\u2728 Overview",permalink:"/hosting/overview"},next:{title:"\ud83d\udd28 Self-hosting",permalink:"/hosting/self-host"}},d={},h=[{value:"Deploying",id:"deploying",level:2},{value:"Features",id:"features",level:2},{value:"Checking Status",id:"checking-status",level:3},{value:"Managing Pods",id:"managing-pods",level:3},{value:"Checking Logs",id:"checking-logs",level:3},{value:"Waitlist",id:"waitlist",level:2}];function u(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"-roboplay",children:"\ud83d\ude80 RoboPlay"}),"\n",(0,t.jsxs)(o.p,{children:["Robo.js is built to work seamlessly with ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://roboplay.dev",children:"RoboPlay"})}),", a ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://waveplay.com",children:"WavePlay"})})," service. They were built for each other from the ground up to make deploying and managing your Robo.js projects as easy as possible."]}),"\n",(0,t.jsxs)(o.p,{children:["Looking to self-host? Check out the ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"./self-host",children:"Self-Hosting"})})," section!"]}),"\n",(0,t.jsx)(o.h2,{id:"deploying",children:"Deploying"}),"\n",(0,t.jsx)(o.p,{children:"Just run this one command:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx robo deploy\n"})}),"\n",(0,t.jsx)(o.p,{children:"This command will optimize your project and host it on RoboPlay. First-time deployers will be guided through a quick setup process, and you'll be up and running in no time!"}),"\n",(0,t.jsx)(o.p,{children:"The same command can be used to update your Robo. Feel free to run this command anytime you want to push new updates."}),"\n",(0,t.jsx)(o.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(o.p,{children:["RoboPlay offers ",(0,t.jsx)(o.strong,{children:"Pods"}),", which are like virtual private servers (VPS) for your Robo. Currently, each RoboPlay account comes with 1 free Beta Pod. Want more? We'll be offering additional Pods for a small fee in the future."]}),"\n",(0,t.jsx)(o.h3,{id:"checking-status",children:"Checking Status"}),"\n",(0,t.jsx)(o.p,{children:"To check the status of RoboPlay and your deployed Robos, run:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx robo cloud status\n"})}),"\n",(0,t.jsxs)(o.p,{children:["This will let you know if your Robos are up and running, or if there are any issues. You can also check our ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://status.roboplay.dev",children:"status page"})})," for updates."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Note:"})," Pods live independently from our main RoboPlay infrastructure, so rest assured that your Robos will stay up and running even if RoboPlay itself experiences downtime."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"managing-pods",children:"Managing Pods"}),"\n",(0,t.jsx)(o.p,{children:"You can manage your pods with the command:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx robo cloud stop\n"})}),"\n",(0,t.jsxs)(o.p,{children:["This will stop your selected pod and bring your Robo offline. Stopping your pod will ",(0,t.jsx)(o.em,{children:"not"})," delete any data, so you can start it back up whenever you're ready."]}),"\n",(0,t.jsx)(o.p,{children:"To start it back up, run:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx robo cloud start\n"})}),"\n",(0,t.jsx)(o.p,{children:"And that's it! Your Robo will be back online and ready to serve. Keep in mind that deploying again will automatically start your Robo."}),"\n",(0,t.jsx)(o.h3,{id:"checking-logs",children:"Checking Logs"}),"\n",(0,t.jsx)(o.p,{children:"To check the logs of your Robo, run:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx robo cloud logs\n"})}),"\n",(0,t.jsx)(o.p,{children:"This will show you the logs of your Robo, helping you debug any issues that may arise during runtime."}),"\n",(0,t.jsx)(o.h2,{id:"waitlist",children:"Waitlist"}),"\n",(0,t.jsxs)(o.p,{children:["RoboPlay is currently in beta, so we're rolling out access slowly. If you're interested in trying it out, you can sign up for the waitlist at ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://roboplay.dev",children:"roboplay.dev"})}),". We'll let you know as soon as your invite is ready!"]}),"\n",(0,t.jsx)(o.p,{children:"You can also join our Discord server to chat with the community and get the latest updates on RoboPlay. Who knows? You might even get bumped up the list!"}),"\n",(0,t.jsx)(a._,{children:(0,t.jsx)(r.Z,{href:"https://roboplay.dev/discord",title:"\u2728 Discord Server",description:"Join our Discord community!"})}),"\n",(0,t.jsx)(o.admonition,{title:"Sage AI",type:"tip",children:(0,t.jsxs)(o.p,{children:["You can also chat with Sage, our AI Robo, on Discord! Sage is powered by ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"../plugins/ai",children:"@robojs/ai"})})," and can answer your questions about Robo.js, Discord Activities, and more."]})})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5396:(e,o,n)=>{n.d(o,{Z:()=>a});var t=n(7294),s=n(3692),r=n(2503);const a=e=>{const{description:o,href:n,title:a}=e;return t.createElement(s.Z,{className:"col col--6 nodecor margin-bottom--lg",to:n},t.createElement("div",{className:"card padding--lg cardContent"},t.createElement(r.Z,{as:"h4",className:"text--truncate cardTitle"},a),t.createElement("p",{className:"text--truncate cardDescription"},o)))}},352:(e,o,n)=>{n.d(o,{_:()=>s});var t=n(7294);const s=e=>{const{children:o}=e;return t.createElement("div",{className:"row cardContainer"},o)}},5251:(e,o,n)=>{var t=n(7294),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var t,r={},c=null,d=null;for(t in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(d=o.ref),o)a.call(o,t)&&!l.hasOwnProperty(t)&&(r[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===r[t]&&(r[t]=o[t]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:i.current}}o.Fragment=r,o.jsx=c,o.jsxs=c},5893:(e,o,n)=>{e.exports=n(5251)},1151:(e,o,n)=>{n.d(o,{Z:()=>i,a:()=>a});var t=n(7294);const s={},r=t.createContext(s);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);