(()=>{"use strict";var e,t={647:(e,t,s)=>{var a=s(751),n=s(351),l=s(641),o=s(33);const i={name:"HomeComponent",data:()=>({hello:"Twitter"})};var r=s(262);const c=(0,r.A)(i,[["render",function(e,t,s,a,n,i){return(0,l.uX)(),(0,l.CE)("div",{class:(0,o.C4)(e.$style.foo)},"The default page for stuffs.",2)}],["__cssModules",{$style:{}}]]),u={name:"ProjectComponent",data:()=>({hello:"Twitter"})},d=(0,r.A)(u,[["render",function(e,t,s,a,n,i){return(0,l.uX)(),(0,l.CE)("div",{class:(0,o.C4)(e.$style.foo)},"All my projects are here!",2)}],["__cssModules",{$style:{}}]]),p=[(0,l.Fv)(' Hey there! My name is Veilza, and I&#39;m a hobbyist software developer and have been for the past decade. Recently I&#39;ve also gotten into game development and vtubing, too! <br><br> I&#39;ve been into programming for a <b>long</b> time, since I was 10, making little websites. Across all this time, I&#39;ve gotten pretty okay at making things, and my passion for software has only blossomed more and more the more stuff I make! <br><br> I&#39;ve done lots of things, mostly web development-related, but I&#39;ve made software like chatbots and helpful little programs too (mostly lost to the sands of time nowadays, before I used version control systems.) <br><br> My very first big collaborative project was working on the <a href="https://github.com/Rayji96/foundry-V5" target="_blank">World of Darkness 5e</a> system for <a href="https://foundryvtt.com/packages/vtm5e/" target="_blank">FoundryVTT</a>, adding support for Werewolf the Apocalypse 5th edition that had just released. Since then, I&#39;ve been its lead developer and helped to add a ton of new features! And clean up a lot of old code along the way. <br><br> I&#39;ve done various contributions to other projects and made a few other modules of my own for Foundry too, but I would say 80% of what I do is solo projects. Not to say that I don&#39;t like working with people! But I like to push myself and I can rarely ask that of other people. ',19)],m=["src"],y=(0,l.eW)(),h=(0,l.eW)(),k=(0,l.eW)(),f=(0,l.eW)(),b=(0,l.eW)(),v=(0,l.eW)(),g=(0,l.eW)(),L=(0,l.eW)(),C=(0,l.eW)(),$=(0,l.eW)(" If you ever need to contact me and know my schedule, here's a handy little tool!~ "),w=(0,l.Lk)("br",null,null,-1),I=(0,l.Lk)("br",null,null,-1),W=(0,l.Lk)("br",null,null,-1),M=(0,l.Lk)("br",null,null,-1),_=(0,l.eW)(" As for a "),T=(0,l.Lk)("b",null,[(0,l.Lk)("i",null,"schedule")],-1),E=(0,l.eW)("... "),A=(0,l.Lk)("br",null,null,-1),j=(0,l.Lk)("br",null,null,-1),x=(0,l.eW)(" I don't really adhere to one, but I'm usually busy from 8AM to 5PM Monday to Friday, and outside of those hours I'm most available from 2:30AM onwards. (Yes, I'm a creature of the night- Don't worry about it.) "),S=(0,l.eW)(),D=(0,l.eW)(),P=[(0,l.eW)("Start playing Varien, Marshmello, Alesso, Alan Walker.. you're gonna have me vibing "),(0,l.Lk)("b",null,"all",-1),(0,l.eW)("night.")],O=(0,l.eW)(),F=(0,l.eW)(),X=(0,l.eW)(" I'll listen to almost anything, though. These are just my go-tos. "),H=(0,l.eW)(),R=(0,l.eW)(),V=(0,l.eW)(),N=(0,l.eW)(),G=s.p+"chibi.webp?bc2486c32cd0738a8b276ec9dbd8d6a6",K={name:"AboutComponent",data:()=>({chibi:G,currentTime:""}),created(){this.updateTime(),this.timer=setInterval(this.updateTime,1e3)},beforeDestroy(){clearInterval(this.timer)},methods:{updateTime(){const e=new Date;this.currentTime=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",hour:"2-digit",minute:"2-digit",second:"2-digit",year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}}},J={name:"ServicesComponent",data:()=>({hello:"Twitter"})},z={name:"ContactComponent",data:()=>({hello:"Twitter"})},B=[{path:"/",component:c},{path:"/projects",component:d},{path:"/about",component:(0,r.A)(K,[["render",function(e,t,s,a,n,i){return(0,l.uX)(),(0,l.CE)("div",{class:(0,o.C4)(e.$style.panels)},[(0,l.Lk)("div",{class:(0,o.C4)(e.$style.panel)},[(0,l.Lk)("div",{class:(0,o.C4)(e.$style["panel-title"])},"Lil' History",2),(0,l.Lk)("div",{class:(0,o.C4)(e.$style["panel-body"])},p,2)],2),(0,l.Lk)("img",{src:e.chibi},null,8,m),(0,l.Lk)("div",{class:(0,o.C4)(e.$style.panel)},[(0,l.Lk)("div",{class:(0,o.C4)(e.$style["panel-title"])},"Programming Experience",2),(0,l.Lk)("ul",{class:(0,o.C4)(e.$style["panel-body"])},[(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"JavaScript",2),y,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"My main language of choice. Various libraries and frameworks, including Node.js, Vue, React, and Angular. This entire website is made with Node and Vue!",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Python",2),h,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"If I were to ever make a big collaborative project, Python would be my go-to. Love its rigid rules.",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Ruby",2),k,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"I used Ruby and Ruby on Rails to make websites/chatbots before, very fun to play around with!",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"GDScript",2),f,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Since I've started developing games in Godot, I've loved the ease of use of GDScript.",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"C#",2),b,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Mainly in the context of game development!",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"PHP",2),v,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"This was my very first programming language I began with, before Laravel even released. I'm glad Laravel released.",2)])],2)],2),(0,l.Lk)("div",{class:(0,o.C4)(e.$style.panel)},[(0,l.Lk)("div",{class:(0,o.C4)(e.$style["panel-title"])},"Languages",2),(0,l.Lk)("ul",{class:(0,o.C4)(e.$style["panel-body"])},[(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"English",2),g,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"My native language!",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Indonesian",2),L,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"I'm not exactly fluent, but I can understand most Indonesian I come across and can speak it a little. Mostly reading and writing for now, though!",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Japanese",2),C,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Actively learning now! I'm not the best but I would say that I'm on a decent learning path to fluency~! (With the eventual goal of moving to Japan.)",2)])],2)],2),(0,l.Lk)("div",{class:(0,o.C4)(e.$style.panel)},[(0,l.Lk)("div",{class:(0,o.C4)(e.$style["panel-title"])},"Current Time & Schedule",2),(0,l.Lk)("ul",{class:(0,o.C4)(e.$style["panel-body"])},[$,w,I,(0,l.eW)(" The current time for me is "+(0,o.v_)(e.currentTime)+" ",1),W,M,_,T,E,A,j,x],2)],2),(0,l.Lk)("div",{class:(0,o.C4)(e.$style.panel)},[(0,l.Lk)("div",{class:(0,o.C4)(e.$style["panel-title"])},"Music Tastes",2),(0,l.Lk)("ul",{class:(0,o.C4)(e.$style["panel-body"])},[(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Pop",2),S,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Don't listen to what my Spotify says, my top artists are Billie Eilish and EDEN, along with anything you can find in the Pop Danthology mixes.",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"EDM",2),D,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},P,2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Dubstep",2),O,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Headhunterz, Knife Party, Krewella, and Tristam my loves. There'll always be a place in my heart for dubstep.",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Rap & Hip-hop",2),F,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Dr. Dre, Future, Tech N9ne, Juice WRLD, Nicki Minaj, Gunna. Ya gurl loves her rap and hip-hop artists.",2)])],2),X],2),(0,l.Lk)("div",{class:(0,o.C4)(e.$style.panel)},[(0,l.Lk)("div",{class:(0,o.C4)(e.$style["panel-title"])},"Top 5s...",2),(0,l.Lk)("ul",{class:(0,o.C4)(e.$style["panel-body"])},[(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Shows",2),H,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Digimon, Code Lyoko",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Games",2),R,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"Warframe, Dishonored, League of Legends (I'm not held hostage to say this, I promise.)",2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Songs",2),V,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},null,2)]),(0,l.Lk)("li",null,[(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-name"])},"Artists",2),N,(0,l.Lk)("span",{class:(0,o.C4)(e.$style["item-description"])},"H",2)])],2)],2)],2)}],["__cssModules",{$style:{panels:"panels--yH7wAG",panel:"panel--CLxK9I","panel-title":"panel-title--HS_ERq","panel-body":"panel-body--_u4_wr","item-name":"item-name--KE02h6","item-description":"item-description--Zu5WPW"}}]])},{path:"/services",component:(0,r.A)(J,[["render",function(e,t,s,a,n,i){return(0,l.uX)(),(0,l.CE)("div",{class:(0,o.C4)(e.$style.foo)},"Here's some service, for your service needs!",2)}],["__cssModules",{$style:{}}]])},{path:"/contact",component:(0,r.A)(z,[["render",function(e,t,s,a,n,i){return(0,l.uX)(),(0,l.CE)("div",{class:(0,o.C4)(e.$style.foo)},"Xitter",2)}],["__cssModules",{$style:{}}]])}],Y=(0,n.aE)({history:(0,n.Bt)(),routes:B}),Z=(s.p,{id:"app"}),q=["src"],Q=s.p+"navicon.webp?05e8e0f9d670e64a05ca5b52adecf952",U={name:"NavbarComponent",data:()=>({isMenuVisible:!1,navbarimg:Q,links:[{text:"Home",href:"/"},{text:"Projects Overview",href:"/projects"},{text:"About Me!",href:"/about"},{text:"Services",href:"/services"},{text:"Contact",href:"/contact"}]}),methods:{toggleMenu(){this.isMenuVisible=!this.isMenuVisible}}},ee={name:"TemplateComponent",components:{Navbar:(0,r.A)(U,[["render",function(e,t,s,a,n,i){const r=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("nav",{class:(0,o.C4)(e.$style.navbar)},[(0,l.bF)(r,{to:e.links[0].href,class:(0,o.C4)(e.$style["image-link"])},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.navbarimg},null,8,q)])),_:1},8,["to","class"]),(0,l.Lk)("ul",{class:(0,o.C4)(e.$style["nav-links"])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.links,(e=>((0,l.uX)(),(0,l.CE)("li",{key:e.text},[(0,l.bF)(r,{to:e.href},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.text),1)])),_:2},1032,["to"])])))),128))],2),(0,l.Lk)("div",{class:(0,o.C4)(e.$style["menu-icon"]),onClick:t[0]||(t[0]=(...t)=>e.toggleMenu&&e.toggleMenu(...t))},"☰",2),(0,l.Lk)("div",{class:(0,o.C4)([e.$style["waffle-menu"],{[e.$style.show]:e.isMenuVisible}]),id:"waffleMenu"},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.links,(e=>((0,l.uX)(),(0,l.Wv)(r,{key:e.text,to:e.href},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.text),1)])),_:2},1032,["to"])))),128))],2)],2)}],["__cssModules",{$style:{navbar:"navbar--adkzY0","image-link":"image-link--OSWsIK","nav-links":"nav-links--uXPJiE","waffle-menu":"waffle-menu--r1mGEc","menu-icon":"menu-icon--ExuY_D",show:"show--SRx6Qw"}}]])}},te=(0,r.A)(ee,[["render",function(e,t,s,a,n,i){const r=(0,l.g2)("Navbar"),c=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",Z,[(0,l.bF)(r),(0,l.Lk)("div",{class:(0,o.C4)(e.$style["page-body"])},[(0,l.bF)(c)],2)])}],["__cssModules",{$style:{"page-body":"page-body--Lo9JZO"}}]]),se=(0,a.Ef)(te);se.use(Y),se.mount("#app")}},s={};function a(e){var n=s[e];if(void 0!==n)return n.exports;var l=s[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,s,n,l)=>{if(!s){var o=1/0;for(u=0;u<e.length;u++){for(var[s,n,l]=e[u],i=!0,r=0;r<s.length;r++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](s[r])))?s.splice(r--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[s,n,l]},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var n=s.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=s[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var n,l,[o,i,r]=s,c=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(r)var u=r(a)}for(t&&t(s);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},s=self.webpackChunkveilza_github_io=self.webpackChunkveilza_github_io||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var n=a.O(void 0,[841],(()=>a(647)));n=a.O(n)})();