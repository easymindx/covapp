System.register(["./p-7f8680f3.system.js","./p-2fd10c65.system.js","./p-6e40ec41.system.js","./p-51a870c5.system.js"],(function(t){"use strict";var e,a,i,n;return{setters:[function(t){e=t.r;a=t.h;i=t.H},function(){},function(){},function(t){n=t.a}],execute:function(){var r=".icon{display:block;width:48px;height:48px;color:var(--c-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--c-primary)}.icon__fill--secondary-color{fill:var(--c-secondary)}.icon--small{width:24px;height:24px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle-light{border-radius:50%;background-color:#fff;padding:0.85em}.icon--rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.icon--animated-transform{-webkit-transition:-webkit-transform 0.2s ease;transition:-webkit-transform 0.2s ease;transition:transform 0.2s ease;transition:transform 0.2s ease, -webkit-transform 0.2s ease}";var o=t("d4l_icon_arrow_back",function(){function t(t){e(this,t);this.classes=""}t.prototype.render=function(){return a(i,{"aria-hidden":"true",role:"presentation"},a("svg",{class:"icon "+this.classes,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",focusable:this.focusable},a("g",{fill:"none","fill-rule":"evenodd"},a("path",{d:"M0 0h24v24H0z"}),a("path",{fill:"currentColor",d:"M20 11v2H7.8l5.6 5.6L12 20l-8-8 8-8 1.4 1.4L7.8 11H20z"}))))};return t}());o.style=r;var s=".navigation-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 1em 0.75em}.navigation-header h2{margin:0;font-size:1.25em;font-weight:500;margin-left:0.5em;padding:0.5em 0;text-align:left}.navigation-header>button{color:var(--c-gray);padding:1em 1em 1em 0.5em}.navigation-header svg.icon{color:var(--c-gray)}.navigation-header--border-bottom{border-bottom:1px solid var(--c-gray-lightest)}";var l=t("ia_navigation_header",function(){function t(t){e(this,t);this.classes="";this.headline="";this.hasBackButton=true}t.prototype.render=function(){var t=this,e=t.headline,i=t.classes,r=t.handleClick,o=t.hasBackButton;return a("div",{class:"navigation-header "+i},r&&o&&a("button",{"data-test":"navBack",type:"button",class:"u-button-reset",onClick:r},a("d4l-icon-arrow-back",{classes:"icon--small"}),a("span",{class:"u-visually-hidden"},n.t("navigation_header_back_button_label"))),a("h2",null,e))};return t}());l.style=s}}}));