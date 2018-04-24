
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([4],{125:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=a(l),o=n(238),r=a(o),d=function(e,t){var n=document.querySelector(t);n&&((0,r.default)(n),e.preventDefault(),e.stopPropagation())},u=function(e){var t=e.href,n=e.children;return i.default.createElement("a",{style:{color:"white"},href:t,onClick:function(e){return d(e,t)}},n)};t.default=u},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.color={white:"#FFFFFF",sumi:"#2D333A",black:"#2E2E2C",yellow:"#FFE733",orange:"#FFB762",green:"#3EF6C0",cyan:"#58EFF7",blue:"#6DCEFF"},t.breakpoint={pc:"q1024px",tablet:"768px",mobile:"480px"},t.size={h1:"144px",h2:"72px",h3:"36px",h4:"24px",h5:"20px",h6:"18px",header:"44px"},t.font={regular:"'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif",bold:"'Hiragino Kaku Gothic Std', 'Meiryo', sans-serif"}},235:function(e,t,n){e.exports=n(236)},236:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=a(l),o=n(7),r=(a(o),n(19)),d=n(237),u=a(d),c=n(240),f=a(c),p=n(245),s=a(p),h=n(100),m="\nbody {\n    font-family : "+r.font.regular+";\n    color       : "+r.color.black+";\n    background  : "+r.color.white+";\n    margin      : 0;\n    padding     : 0;\n}\n\na, a:hover, a:visited {\n    color : "+r.color.sumi+";\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family : "+r.font.bold+";\n    color       : "+r.color.black+";\n    margin      : 0;\n    a, a:hover, a:visited {\n        text-decoration: none;\n        color: "+r.color.black+";\n    }\n}\n\nh1 { font-size: "+r.size.h1+"; line-height: "+r.size.h1+"; margin: 0; }\nh2 { font-size: "+r.size.h2+"; line-height: "+r.size.h2+"; margin: 0; }\nh3 { font-size: "+r.size.h3+"; line-height: "+r.size.h3+"; margin: 0; }\nh4 { font-size: "+r.size.h4+"; line-height: "+r.size.h4+"; margin: 0; }\n\n@media (max-width: "+r.breakpoint.tablet+") {\n    h1 { font-size: "+r.size.h2+"; line-height: "+r.size.h2+"; margin: 0; }\n    h2 { font-size: "+r.size.h3+"; line-height: "+r.size.h3+"; margin: 0; }\n    h3 { font-size: "+r.size.h4+"; line-height: "+r.size.h4+"; margin: 0; }\n    h4 { font-size: "+r.size.h5+"; line-height: "+r.size.h5+"; margin: 0; }\n}\n";t.default=function(){return i.default.createElement("div",null,i.default.createElement(h.Helmet,null,i.default.createElement("meta",{charSet:"utf-8"}),i.default.createElement("title",null,"Kyoto.js - JavaScript Community in Kyoto"),i.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.default.createElement("meta",{name:"twitter:card",content:"summary"}),i.default.createElement("meta",{name:"twitter:site",content:"@kyoto_js"}),i.default.createElement("meta",{property:"og:title",content:"Kyoto.js - JavaScript Community in Kyoto"}),i.default.createElement("meta",{property:"og:type",content:"website"}),i.default.createElement("meta",{property:"og:url",content:"http://kyoto.js.org/"}),i.default.createElement("meta",{property:"og:image",content:"http://kyoto.js.org/static/logo960.png"}),i.default.createElement("meta",{property:"og:description",content:"Kyoto.js is a JavaScript Community in Kyoto. We hold meetups a few times a year, and are always talking about JavaScript and frontend technologies on Slack!"}),i.default.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/icons/180.png"}),i.default.createElement("link",{rel:"apple-touch-icon-precomposed",href:"/static/icons/180.png"}),i.default.createElement("link",{rel:"shortcut icon",href:"/static/icons/192.png"}),i.default.createElement("link",{rel:"icon",sizes:"192x192",href:"/static/icons/192.png"}),i.default.createElement("link",{rel:"icon",type:"image/png",href:"/static/icons/192.png",sizes:"192x192"}),i.default.createElement("meta",{name:"theme-color",content:"#ffffff"}),i.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css"}),i.default.createElement("style",null,m)),i.default.createElement(u.default,null),i.default.createElement(f.default,null),i.default.createElement(s.default,null))}},237:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(7),u=a(d),c=n(125),f=(a(c),n(239)),p=a(f),s=n(19),h=(0,i.default)(["\n  background : ",";\n  position   : fixed;\n  top        : 0;\n  left       : 0;\n  width      : 100%;\n  height     : ",";\n  z-index    : 9999;\n\n  display         : flex;\n  flex-direction  : row;\n  justify-content : space-between;\n\n  overflow: hidden;\n"],["\n  background : ",";\n  position   : fixed;\n  top        : 0;\n  left       : 0;\n  width      : 100%;\n  height     : ",";\n  z-index    : 9999;\n\n  display         : flex;\n  flex-direction  : row;\n  justify-content : space-between;\n\n  overflow: hidden;\n"]),m=(0,i.default)(["\n  width : 140px;\n  a {\n    display : block;\n    height  : 100%;\n  }\n  img {\n    margin: 7px;\n  }\n"],["\n  width : 140px;\n  a {\n    display : block;\n    height  : 100%;\n  }\n  img {\n    margin: 7px;\n  }\n"]),g=(0,i.default)(["\n  display         : flex;\n  flex-flow       : row nowrap;\n  justify-content : flex-end;\n  padding         : 0;\n  margin          : 0;\n  height          : 100%;\n"],["\n  display         : flex;\n  flex-flow       : row nowrap;\n  justify-content : flex-end;\n  padding         : 0;\n  margin          : 0;\n  height          : 100%;\n"]),x=u.default.header(h,s.color.sumi,s.size.header),w=u.default.h4(m),E=u.default.ul(g),b=function(){return r.default.createElement(x,null,r.default.createElement(w,null,r.default.createElement("a",{href:"/"},r.default.createElement("img",{src:"/static/logo120_white.png"}),"　")),r.default.createElement("nav",{className:"Header__Navigation"},r.default.createElement(E,null,r.default.createElement(p.default,{link:"#slack",img:"/static/slack.png"},"Slack"),r.default.createElement(p.default,{link:"#meetup",img:"/static/meetup.png"},"Meetup"),r.default.createElement(p.default,{link:"#blog",img:"/static/blog.png"},"Blog"))))};t.default=b},238:function(e,t,n){var a,l;!function(i,o){"use strict";a=o,void 0!==(l="function"==typeof a?a.call(t,n,t,e):a)&&(e.exports=l)}(0,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var e=function(e,t){return"HTML"===e.nodeName?-t:e.getBoundingClientRect().top+t},t=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},n=function(e,n,a,l){return a>l?n:e+(n-e)*t(a/l)},a=function(t,a,l,i){a=a||500,i=i||window;var o=i.scrollTop||window.pageYOffset;if("number"==typeof t)var r=parseInt(t);else var r=e(t,o);var d=Date.now(),u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},c=function(){var e=Date.now()-d;i!==window?i.scrollTop=n(o,r,e,a):window.scroll(0,n(o,r,e,a)),e>a?"function"==typeof l&&l(t):u(c)};c()},l=function(e){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var t=document.getElementById(this.hash.substring(1));t&&a(t,500,function(e){location.replace("#"+e.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),n=t.length;e=t[--n];)e.addEventListener("click",l,!1)}),a}})},239:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(125),u=a(d),c=n(7),f=a(c),p=n(19),s=(0,i.default)(["\n  display : block;\n  a {\n    display         : block;\n    height          : 100%;\n    color           : ",";\n    text-decoration : none;\n  }\n  span {\n    margin-right   : 10px;\n    line-height    : ",";\n    vertical-align : top;\n    font-weight    : bold;\n  }\n  @media (max-width: ",") {\n    span {\n      display : none;\n    }\n  }\n  img {\n    filter  : invert(1);\n    width   : 44px;\n    height  : 44px;\n    padding : 6px;\n  }\n"],["\n  display : block;\n  a {\n    display         : block;\n    height          : 100%;\n    color           : ",";\n    text-decoration : none;\n  }\n  span {\n    margin-right   : 10px;\n    line-height    : ",";\n    vertical-align : top;\n    font-weight    : bold;\n  }\n  @media (max-width: ",") {\n    span {\n      display : none;\n    }\n  }\n  img {\n    filter  : invert(1);\n    width   : 44px;\n    height  : 44px;\n    padding : 6px;\n  }\n"]),h=function(){return!(!window||!window.matchMedia("(max-width: "+p.breakpoint.mobile+")").matches)},m=f.default.li(s,p.color.white,p.size.header,p.breakpoint.mobile),g=function(e){var t=e.link,n=e.img,a=e.children;return r.default.createElement(m,null,r.default.createElement(u.default,{href:t},r.default.createElement("img",{src:n}),r.default.createElement("span",{className:h?"mobile":""},a)))};t.default=g},240:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(7),u=a(d),c=n(19),f=n(241),p=a(f),s=n(242),h=a(s),m=n(243),g=a(m),x=n(244),w=a(x),E=(0,i.default)(["\n  position : relative;\n  top      : ",";\n  width    : 100%;\n  margin   : 0 auto;\n  padding-bottom : ",";\n"],["\n  position : relative;\n  top      : ",";\n  width    : 100%;\n  margin   : 0 auto;\n  padding-bottom : ",";\n"]),b=(0,i.default)(["\n  width         : 100%;\n  margin-top    : -",";\n  padding-top   : ",";\n  @media (max-width: ",") {\n    margin-bottom : 30px;\n  }\n"],["\n  width         : 100%;\n  margin-top    : -",";\n  padding-top   : ",";\n  @media (max-width: ",") {\n    margin-bottom : 30px;\n  }\n"]),y=(0,i.default)(["\n  @media (max-width: ",") {\n    margin-bottom : 60px;\n  }\n"],["\n  @media (max-width: ",") {\n    margin-bottom : 60px;\n  }\n"]),k=u.default.div(E,c.size.header,c.size.header),v=u.default.section(b,c.size.header,c.size.header,c.breakpoint.tablet),z=(v.extend(y,c.breakpoint.tablet),function(){return r.default.createElement(k,null,r.default.createElement(v,{id:"top"},r.default.createElement(p.default,null)),r.default.createElement(v,{id:"slack"},r.default.createElement(h.default,null)),r.default.createElement(v,{id:"meetup"},r.default.createElement(g.default,null)),r.default.createElement(v,{id:"blog"},r.default.createElement(w.default,null)))});t.default=z},241:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(7),u=a(d),c=n(19),f=n(60),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),s=n(61),h=a(s),m=(0,i.default)(["\n"],["\n"]),g=(0,i.default)(["\n  -webkit-filter: drop-shadow(4px 0.5px 0 ",") drop-shadow(-4px -0.2px 0 ",");\n  @media (max-width: ",") {\n    -webkit-filter: drop-shadow(2px 0.5px 0 ",") drop-shadow(-3px -0.2px 0 ",");\n  }\n  @media (max-width: ",") {\n    -webkit-filter: drop-shadow(1px 0.5px 0 ",") drop-shadow(-2px -0.2px 0 ",");\n  }\n"],["\n  -webkit-filter: drop-shadow(4px 0.5px 0 ",") drop-shadow(-4px -0.2px 0 ",");\n  @media (max-width: ",") {\n    -webkit-filter: drop-shadow(2px 0.5px 0 ",") drop-shadow(-3px -0.2px 0 ",");\n  }\n  @media (max-width: ",") {\n    -webkit-filter: drop-shadow(1px 0.5px 0 ",") drop-shadow(-2px -0.2px 0 ",");\n  }\n"]),x=(0,i.default)(["\n  margin-bottom: 60px;\n\n  @media (max-width: ",") {\n    font-size     : ",";\n    line-height   : ",";\n    margin-bottom : 30px;\n    margin-top    : -10px;\n  }\n"],["\n  margin-bottom: 60px;\n\n  @media (max-width: ",") {\n    font-size     : ",";\n    line-height   : ",";\n    margin-bottom : 30px;\n    margin-top    : -10px;\n  }\n"]),w=(0,i.default)(["\n  width      : 33%;\n  text-align : center;\n\n  @media (max-width: $width-tablet) {\n      width   : 140px;\n      padding : 0;\n  }\n"],["\n  width      : 33%;\n  text-align : center;\n\n  @media (max-width: $width-tablet) {\n      width   : 140px;\n      padding : 0;\n  }\n"]),E=(0,i.default)(["\n  display   : block;\n  width     : 100%;\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n  font-family: ",";\n  font-weight: 900;\n  text-decoration: none;\n\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n\n  &:hover {\n    filter: drop-shadow(0 2px 0 ",");\n  }\n"],["\n  display   : block;\n  width     : 100%;\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n  font-family: ",";\n  font-weight: 900;\n  text-decoration: none;\n\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n\n  &:hover {\n    filter: drop-shadow(0 2px 0 ",");\n  }\n"]),b=(0,i.default)(["\n  display   : block;\n  width     : 70%;\n  max-width : 128px;\n  margin    : 20px auto;\n  @media (max-width: ",") {\n      margin: 5px auto;\n  }\n"],["\n  display   : block;\n  width     : 70%;\n  max-width : 128px;\n  margin    : 20px auto;\n  @media (max-width: ",") {\n      margin: 5px auto;\n  }\n"]),y=p.SectionEl.extend(m),k=p.HeaderEl,v=p.TitleEl.extend(g,c.color.green,c.color.cyan,c.breakpoint.tablet,c.color.green,c.color.cyan,c.breakpoint.mobile,c.color.green,c.color.cyan),z=p.SubTitleEl.extend(x,c.breakpoint.tablet,c.size.h4,c.size.h3),_=p.CellsEl,j=p.CellEl.extend(w),M=u.default.a(E,c.size.h3,c.size.h3,c.font.bold,c.breakpoint.tablet,c.size.h4,c.breakpoint.mobile,c.size.h6,function(e){return e.shadow}),S=u.default.img(b,c.breakpoint.tablet);t.default=function(){return r.default.createElement(y,null,r.default.createElement(k,null,r.default.createElement(v,{color:c.color.green},r.default.createElement(h.default,{href:"/",src:"/static/logo960.png",alt:"Kyoto.js"})),r.default.createElement(z,{height:"90"},"JavaScript Community in Kyoto")),r.default.createElement(_,null,r.default.createElement(j,null,r.default.createElement(M,{shadow:c.color.green,href:"#slack"},r.default.createElement(S,{src:"/static/slack.png"}),r.default.createElement("span",null,"Slack"))),r.default.createElement(j,null,r.default.createElement(M,{shadow:c.color.orange,href:"#meetup"},r.default.createElement(S,{src:"/static/meetup.png"}),r.default.createElement("span",null,"Meetup"))),r.default.createElement(j,null,r.default.createElement(M,{shadow:c.color.yellow,href:"#blog"},r.default.createElement(S,{src:"/static/blog.png"}),r.default.createElement("span",null,"Blog")))))}},242:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(7),u=a(d),c=n(19),f=n(60),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),s=n(61),h=(a(s),(0,i.default)(["\n  text-align     : center;\n  vertical-align : top;\n  margin         : 20px auto 60px;\n"],["\n  text-align     : center;\n  vertical-align : top;\n  margin         : 20px auto 60px;\n"])),m=(0,i.default)(["\n  @media (max-width: ",") {\n      padding: 20px;\n  }\n"],["\n  @media (max-width: ",") {\n      padding: 20px;\n  }\n"]),g=p.SectionEl,x=p.HighlightEl,w=p.HeaderEl,E=p.TitleEl,b=p.TitleImageEl,y=p.SubTitleEl,k=(u.default.div(h),p.CellsEl),v=p.CellEl.extend(m,c.breakpoint.tablet);t.default=function(){return r.default.createElement(g,null,r.default.createElement(w,null,r.default.createElement(E,{color:c.color.blue},r.default.createElement(b,{src:"/static/logo_slack960.png",alt:"Kyoto.js Slack"})),r.default.createElement(y,null,"Get Invitation ",r.default.createElement(x,{shadow:c.color.blue,href:"https://join.slack.com/t/kyotojs/shared_invite/enQtMzUyMDY4NTMwNTk3LWJjYWNjMmQ2MjhhYTM0YWU3OTg0ZjA2ZWIyYThkMGU2MWI2ODRkNTJmNDE5NzMzNDYzNjIzMDIxY2Q3NTkyNTU"},"HERE!"))),r.default.createElement(k,null,r.default.createElement(v,null,r.default.createElement("h4",null,"We talk about..."),r.default.createElement("ul",null,r.default.createElement("li",null,"JavaScript"),r.default.createElement("li",null,"TypeScript, flowtype"),r.default.createElement("li",null,"React, Angular, Vue"),r.default.createElement("li",null,"CSS, Sass, PostCSS")),r.default.createElement("p",{className:"andMore"},"...and more!")),r.default.createElement(v,null,r.default.createElement("h4",null,"Members"),r.default.createElement("p",null,"59 people joined now!"))))}},243:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(7),u=a(d),c=n(19),f=n(60),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),s=n(61),h=(a(s),(0,i.default)(["\n  text-align     : center;\n  vertical-align : top;\n  margin         : 20px auto 60px;\n"],["\n  text-align     : center;\n  vertical-align : top;\n  margin         : 20px auto 60px;\n"])),m=(0,i.default)(["\n  @media (max-width: ",") {\n      padding: 20px;\n  }\n"],["\n  @media (max-width: ",") {\n      padding: 20px;\n  }\n"]),g=p.SectionEl,x=p.HighlightEl,w=p.HeaderEl,E=p.TitleEl,b=p.TitleImageEl,y=p.SubTitleEl,k=(u.default.div(h),p.CellsEl),v=p.CellEl.extend(m,c.breakpoint.tablet);t.default=function(){return r.default.createElement(g,null,r.default.createElement(w,null,r.default.createElement(E,{color:c.color.orange},r.default.createElement(b,{src:"/static/logo_meetup960.png",alt:"Kyoto.js Meetup"})),r.default.createElement(y,{height:"60"},"Talk about JavaScript!")),r.default.createElement(k,null,r.default.createElement(v,null,r.default.createElement("h4",null,"Next: ",r.default.createElement(x,{shadow:c.color.orange,href:"http://kyotojs.connpass.com/event/60422/"},"Kyoto.js 13")),r.default.createElement("ul",null,r.default.createElement("li",null,"Time: 2017-07-29 (Sat) 13:00"),r.default.createElement("li",null,"Place: Hatena 9F, Kyoto")),"See ",r.default.createElement("a",{target:"_blank",href:"https://kyotojs.connpass.com/event/60422/"},"event page")," for details!"),r.default.createElement(v,null,r.default.createElement("h4",null,"Past Meetups"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("a",{target:"_blank",href:"https://kyotojs.connpass.com/event/46417"},"Kyoto.js #12")),r.default.createElement("li",null,r.default.createElement("a",{target:"_blank",href:"https://kyotojs.connpass.com/event/39462/"},"Kyoto.js #11")),r.default.createElement("li",null,r.default.createElement("a",{target:"_blank",href:"https://kyotojs.doorkeeper.jp/events/42568"},"Kyoto.js #10")),r.default.createElement("li",null,r.default.createElement("a",{target:"_blank",href:"https://kyotojs.doorkeeper.jp/events/37515"},"Kyoto.js #9")),r.default.createElement("li",null,r.default.createElement("a",{target:"_blank",href:"https://kyotojs.doorkeeper.jp/events/10869"},"Kyoto.なんか"))),r.default.createElement("p",null,"See ",r.default.createElement("a",{href:"https://kyotojs.doorkeeper.jp/events/past"},"DoorKeeper")," for more details."))))}},244:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(7),u=a(d),c=n(19),f=n(60),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),s=n(61),h=(a(s),(0,i.default)(["\n  @media (max-width: ",") {\n    font-size     : ",";\n    line-height   : ",";\n    margin-bottom : 30px;\n    margin-top    : -10px;\n  }\n"],["\n  @media (max-width: ",") {\n    font-size     : ",";\n    line-height   : ",";\n    margin-bottom : 30px;\n    margin-top    : -10px;\n  }\n"])),m=(0,i.default)(["\n  width      : 33%;\n  text-align : center;\n\n  @media (max-width: $width-tablet) {\n      width   : 140px;\n      padding : 0;\n  }\n"],["\n  width      : 33%;\n  text-align : center;\n\n  @media (max-width: $width-tablet) {\n      width   : 140px;\n      padding : 0;\n  }\n"]),g=(0,i.default)(["\n  display   : block;\n  width     : 100%;\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n  font-family: $bold;\n  font-weight: 900;\n  text-decoration: none;\n\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n\n  &:hover {\n    filter: drop-shadow(0 2px 0 ",");\n  }\n"],["\n  display   : block;\n  width     : 100%;\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n  font-family: $bold;\n  font-weight: 900;\n  text-decoration: none;\n\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n  @media (max-width: ",") {\n      font-size: ",";\n  }\n\n  &:hover {\n    filter: drop-shadow(0 2px 0 ",");\n  }\n"]),x=(0,i.default)(["\n  display   : block;\n  width     : 70%;\n  max-width : 128px;\n  margin    : 20px auto;\n  @media (max-width: ",") {\n      margin: 5px auto;\n  }\n"],["\n  display   : block;\n  width     : 70%;\n  max-width : 128px;\n  margin    : 20px auto;\n  @media (max-width: ",") {\n      margin: 5px auto;\n  }\n"]),w=(0,i.default)(["\n  display: block;\n  width: 110%;\n  max-width: 480px;\n  text-align: center;\n"],["\n  display: block;\n  width: 110%;\n  max-width: 480px;\n  text-align: center;\n"]),E=p.SectionEl,b=p.HighlightEl,y=p.HeaderEl,k=p.TitleEl,v=p.TitleImageEl,z=p.SubTitleEl.extend(h,c.breakpoint.tablet,c.size.h4,c.size.h3),_=p.CellsEl,j=p.CellEl.extend(m),M=(u.default.a(g,c.size.h3,c.size.h3,c.breakpoint.tablet,c.size.h4,c.breakpoint.mobile,c.size.h6,function(e){return e.color}),u.default.img(x,c.breakpoint.tablet),u.default.img(w));t.default=function(){return r.default.createElement(E,null,r.default.createElement(y,null,r.default.createElement(k,{color:c.color.yellow},r.default.createElement(v,{src:"/static/logo_blog960.png",alt:"Kyoto.js Blog"})),r.default.createElement(z,{height:"90"},r.default.createElement(b,{shadow:c.color.yellow,href:"http://kyotojs.hatenablog.jp/"},"kyotojs.hatenablog.jp"))),r.default.createElement(_,null,r.default.createElement(j,null,r.default.createElement("p",null,"Kyoto.js Blog reports out meetups. If you are interested, please tell us and write posts about JavaScript!!"),r.default.createElement("p",null,"kyotojs.hatenablog.jp is powered by ",r.default.createElement("a",{href:"http://hatenablog.com/"},"Hatena Blog"),".")),r.default.createElement(j,null,r.default.createElement("a",{href:"http://kyotojs.hatenablog.jp/"},r.default.createElement(M,{src:"/static/blog_screenshot.png",alt:"Kyoto.js Blog Screenshot"})))))}},245:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),i=a(l),o=n(0),r=a(o),d=n(7),u=a(d),c=n(19),f=(0,i.default)(["\n  width       : 100%;\n  height      : 150px;\n  background  : ",";\n  color       : ",";\n  text-align  : center;\n  padding-top : 60px;\n\n  @media (max-width: ",") {\n      height: 60px;\n      padding-top: 20px;\n  }\n\n  img {\n    transform: translateY(-1px);\n  }\n}"],["\n  width       : 100%;\n  height      : 150px;\n  background  : ",";\n  color       : ",";\n  text-align  : center;\n  padding-top : 60px;\n\n  @media (max-width: ",") {\n      height: 60px;\n      padding-top: 20px;\n  }\n\n  img {\n    transform: translateY(-1px);\n  }\n}"]),p=u.default.footer(f,c.color.sumi,c.color.white,c.breakpoint.tablet);t.default=function(){return r.default.createElement(p,null,"from ",r.default.createElement("img",{src:"/static/shrine.png"})," with ❤")}},60:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HighlightEl=t.CellEl=t.CellsEl=t.SubTitleEl=t.TitleImageEl=t.TitleEl=t.HeaderEl=t.SectionEl=void 0;var l=n(8),i=a(l),o=n(7),r=a(o),d=n(19),u=(0,i.default)(["\n  width     : 100%;\n  max-width : 960px;\n  margin    : 0 auto;\n  margin-bottom: 120px;\n"],["\n  width     : 100%;\n  max-width : 960px;\n  margin    : 0 auto;\n  margin-bottom: 120px;\n"]),c=(0,i.default)(["\n  text-align: center;\n"],["\n  text-align: center;\n"]),f=(0,i.default)(["\n  text-align: center;\n  max-height : 320px;\n\n  filter: ",";\n  @media (max-width: ",") {\n      filter: ",";\n  }\n  @media (max-width: ",") {\n      filter: drop-shadow(1px 0 0 ",");\n  }\n"],["\n  text-align: center;\n  max-height : 320px;\n\n  filter: ",";\n  @media (max-width: ",") {\n      filter: ",";\n  }\n  @media (max-width: ",") {\n      filter: drop-shadow(1px 0 0 ",");\n  }\n"]),p=(0,i.default)(["\n  width: 100%;\n"],["\n  width: 100%;\n"]),s=(0,i.default)(["\n  height         : ","px;\n  line-height    : ","px;\n  text-align     : center;\n  vertical-align : top;\n  @media (max-width: ",") {\n    height        : auto;\n    font-size     : ",";\n    line-height   : ",";\n  }\n"],["\n  height         : ","px;\n  line-height    : ","px;\n  text-align     : center;\n  vertical-align : top;\n  @media (max-width: ",") {\n    height        : auto;\n    font-size     : ",";\n    line-height   : ",";\n  }\n"]),h=(0,i.default)(["\n  display         : flex;\n  flex-flow       : row wrap;\n  justify-content : space-around;\n"],["\n  display         : flex;\n  flex-flow       : row wrap;\n  justify-content : space-around;\n"]),m=(0,i.default)(["\n  flex       : 1;\n  min-width  : 240px;\n  padding    : 20px 40px;\n  box-sizing : border-box;\n"],["\n  flex       : 1;\n  min-width  : 240px;\n  padding    : 20px 40px;\n  box-sizing : border-box;\n"]),g=(0,i.default)(["\n  text-shadow     : 2px 0 0 ",";\n  text-decoration : underline;\n  @media (max-width: ",") {\n      text-shadow : 1px 0 0 ",";\n  }\n  &:hover {\n      color       : ",";\n      text-shadow : 2px 2px 0 ",";\n  }\n"],["\n  text-shadow     : 2px 0 0 ",";\n  text-decoration : underline;\n  @media (max-width: ",") {\n      text-shadow : 1px 0 0 ",";\n  }\n  &:hover {\n      color       : ",";\n      text-shadow : 2px 2px 0 ",";\n  }\n"]);t.SectionEl=r.default.section(u),t.HeaderEl=r.default.div(c),t.TitleEl=r.default.h1(f,function(e){return"drop-shadow(4px 0 0 "+e.color+")"},d.breakpoint.tablet,function(e){return"drop-shadow(2px 0 0 "+e.color+")"},d.breakpoint.mobile,function(e){return e.color}),t.TitleImageEl=r.default.img(p),t.SubTitleEl=r.default.h3(s,function(e){return e.height},function(e){return e.height},d.breakpoint.tablet,d.size.h5,d.size.h3),t.CellsEl=r.default.div(h),t.CellEl=r.default.div(m),t.HighlightEl=r.default.a(g,function(e){return e.shadow},d.breakpoint.tablet,function(e){return e.shadow},function(e){return e.shadow},d.color.black)},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.href,n=e.alt,a=e.src;return l.default.createElement("a",{href:t,style:{display:"block",maxWidth:"100%"}},l.default.createElement("img",{src:a,alt:n,style:{width:"100%"}}))}}},[235]);
            return { page: comp.default }
          })
        