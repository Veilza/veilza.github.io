(()=>{"use strict";var e,t={617:(e,t,r)=>{var n=r(751),s=r(351),o=r(641),i=r(33);const l={data:()=>({hello:"Twitter"})};var a=r(262);const u={data:()=>({hello:"Twitter"})},c={data:()=>({hello:"Twitter"})},f={data:()=>({hello:"Twitter"})},v={data:()=>({hello:"Twitter"})},p=[{path:"/",component:(0,a.A)(l,[["render",function(e,t,r,n,s,l){return(0,o.uX)(),(0,o.CE)("div",{class:(0,i.C4)(e.$style.foo)},"The default page for stuffs.",2)}],["__cssModules",{$style:{}}]])},{path:"/projects",component:(0,a.A)(u,[["render",function(e,t,r,n,s,l){return(0,o.uX)(),(0,o.CE)("div",{class:(0,i.C4)(e.$style.foo)},"All my projects are here!",2)}],["__cssModules",{$style:{}}]])},{path:"/about",component:(0,a.A)(c,[["render",function(e,t,r,n,s,l){return(0,o.uX)(),(0,o.CE)("div",{class:(0,i.C4)(e.$style.foo)},"About me, all in here!",2)}],["__cssModules",{$style:{}}]])},{path:"/services",component:(0,a.A)(f,[["render",function(e,t,r,n,s,l){return(0,o.uX)(),(0,o.CE)("div",{class:(0,i.C4)(e.$style.foo)},"Here's some service, for your service needs!",2)}],["__cssModules",{$style:{}}]])},{path:"/contact",component:(0,a.A)(v,[["render",function(e,t,r,n,s,l){return(0,o.uX)(),(0,o.CE)("div",{class:(0,i.C4)(e.$style.foo)},"Xitter",2)}],["__cssModules",{$style:{}}]])}],d=(0,s.aE)({history:(0,s.Bt)(),routes:p}),h={id:"app"},b=["src"],m=r.p+"navicon.webp?05e8e0f9d670e64a05ca5b52adecf952",g={data:()=>({isMenuVisible:!1,navbarimg:m,links:[{text:"Home",href:"/"},{text:"Projects Overview",href:"/projects"},{text:"About Me!",href:"/about"},{text:"Services",href:"/services"},{text:"Contact",href:"/contact"}]}),methods:{toggleMenu(){this.isMenuVisible=!this.isMenuVisible}}},y={name:"TemplateComponent",components:{Navbar:(0,a.A)(g,[["render",function(e,t,r,n,s,l){const a=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",{class:(0,i.C4)(e.$style.navbar)},[(0,o.bF)(a,{to:e.links[0].href,class:(0,i.C4)(e.$style["image-link"])},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:e.navbarimg},null,8,b)])),_:1},8,["to","class"]),(0,o.Lk)("ul",{class:(0,i.C4)(e.$style["nav-links"])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.links,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.text},[(0,o.bF)(a,{to:e.href},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.text),1)])),_:2},1032,["to"])])))),128))],2),(0,o.Lk)("div",{class:(0,i.C4)(e.$style["menu-icon"]),onClick:t[0]||(t[0]=(...t)=>e.toggleMenu&&e.toggleMenu(...t))},"☰",2),(0,o.Lk)("div",{class:(0,i.C4)([e.$style["waffle-menu"],{[e.$style.show]:e.isMenuVisible}]),id:"waffleMenu"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.links,(e=>((0,o.uX)(),(0,o.Wv)(a,{key:e.text,to:e.href},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.text),1)])),_:2},1032,["to"])))),128))],2)],2)}],["__cssModules",{$style:{navbar:"navbar--adkzY0","image-link":"image-link--OSWsIK","nav-links":"nav-links--uXPJiE","waffle-menu":"waffle-menu--r1mGEc","menu-icon":"menu-icon--ExuY_D",show:"show--SRx6Qw"}}]])}},k=(0,a.A)(y,[["render",function(e,t,r,n,s,i){const l=(0,o.g2)("Navbar"),a=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",h,[(0,o.bF)(l),(0,o.bF)(a)])}],["__cssModules",{$style:{}}]]),w=(0,n.Ef)(k);w.use(d),w.mount("#app")}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,s,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,s,o]=e[c],l=!0,a=0;a<r.length;a++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,s,o]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var s,o,[i,l,a]=r,u=0;if(i.some((t=>0!==e[t]))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(a)var c=a(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self.webpackChunkveilza_github_io=self.webpackChunkveilza_github_io||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=n.O(void 0,[841],(()=>n(617)));s=n.O(s)})();