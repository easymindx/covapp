System.register(["./p-7f8680f3.system.js"],(function(i){"use strict";var t,n;return{setters:[function(i){t=i.r;n=i.h}],execute:function(){var e=".notification-bar{display:-ms-flexbox;display:flex;border-radius:var(--border-radius-medium, var(--border-radius-m));background-color:var(--c-primary-extra-lightest);color:var(--c-primary);font-size:1rem;padding:1.25em 1.5em}.notification-bar--slim{padding:0.875em}.notification-bar__icon{-ms-flex:none;flex:none;margin-right:1em}.notification-bar__headline{font-size:1em;font-weight:500}.notification-bar__text{-ms-flex:0 1 auto;flex:0 1 auto;overflow:hidden;font-size:0.875em}.notification-bar__link{text-decoration:none;font-weight:500;color:inherit}.notification-bar__link:hover{text-decoration:underline}.notification-bar--no-background-color{background-color:initial}.notification-bar--bgcolor-red{background-color:var(--c-error)}.notification-bar--color-gray{color:var(--c-gray)}.notification-bar--color-white{color:#fff}.notification-bar--centered{-ms-flex-pack:center;justify-content:center}.notification-bar--centered .notification-bar__icon{margin-right:0.5em}.notification-bar--centered .notification-bar__headline{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media (min-width: 768px){.notification-bar{-ms-flex-align:center;align-items:center}}";var o=i("d4l_notification_bar",function(){function i(i){t(this,i);this.classes="";this.text="";this.headline="";this.textLink="";this.link="";this.centered=false;this.hasLink=false;this.getIconInfo=function(){return n("div",{class:"notification-bar__icon"},n("d4l-icon-info",{classes:"icon--small icon--current-color"}))}}i.prototype.componentWillLoad=function(){this.hasLink=!!this.text.length&&!!this.textLink.length};i.prototype.render=function(){var i=this,t=i.classes,e=i.text,o=i.headline,r=i.textLink,a=i.link,c=i.hasLink,s=i.centered;return n("aside",{class:"notification-bar "+t},!s&&this.getIconInfo(),n("div",{class:"notification-bar__content"},!!o.length&&n("div",{class:"notification-bar__headline"},s&&this.getIconInfo(),o),n("div",{class:"notification-bar__text"},e," ",c&&n("a",{class:"notification-bar__link",href:a,rel:"noopener noreferrer"},r))))};return i}());o.style=e}}}));