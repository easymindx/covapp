System.register(["./p-7f8680f3.system.js"],(function(e){"use strict";var i,s,r;return{setters:[function(e){i=e.r;s=e.h;r=e.H}],execute:function(){var t=".responsive-image.sc-d4l-responsive-image{display:inline-block}.responsive-image.sc-d4l-responsive-image img.sc-d4l-responsive-image{display:block}.responsive-image--portrait.sc-d4l-responsive-image img.sc-d4l-responsive-image{border-radius:50%;overflow:hidden}.responsive-image--clickable.sc-d4l-responsive-image{cursor:pointer}";var c=e("d4l_responsive_image",function(){function e(e){i(this,e);this.classes="";this.mobileSrc="";this.tabletSrc="";this.desktopSrc="";this.widescreenSrc="";this.alt="";this.breakpoints={mobile:0,tablet:768,desktop:960,widescreen:1152}}Object.defineProperty(e.prototype,"defaultSrc",{get:function(){return this.mobileSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},enumerable:true,configurable:true});e.prototype.render=function(){var e=this,i=e.alt,t=e.classes,c=e.handleClick,n=e.defaultSrc,a=e.mobileSrc,o=e.tabletSrc,l=e.desktopSrc,d=e.widescreenSrc;var p=this.breakpoints,m=p.mobile,A=p.tablet,u=p.desktop,g=p.widescreen;return s(r,null,s("picture",{class:"responsive-image "+(c?"responsive-image--clickable":"")+" "+t,onClick:c},d&&s("source",{media:"(min-width: "+g+"px)",srcSet:d}),l&&s("source",{media:"(min-width: "+u+"px)",srcSet:l}),o&&s("source",{media:"(min-width: "+A+"px)",srcSet:o}),a&&s("source",{media:"(min-width: "+m+"px)",srcSet:a}),s("img",{loading:"lazy",src:n,alt:i})))};return e}());c.style=t}}}));