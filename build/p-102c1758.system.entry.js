System.register(["./p-7f8680f3.system.js"],(function(r){"use strict";var o,e,a;return{setters:[function(r){o=r.r;e=r.h;a=r.H}],execute:function(){var n=".sc-d4l-accordion-h{display:block;--c-header-background:var(--c-primary);--c-header-text:#fff}.accordion__header.sc-d4l-accordion{background-color:var(--c-header-background);color:var(--c-header-text);border-radius:var(--border-radius-small, var(--border-radius-s))}.accordion__header--no-bottom-border-radius.sc-d4l-accordion{border-bottom-left-radius:0;border-bottom-right-radius:0}.accordion__header.sc-d4l-accordion button.sc-d4l-accordion{border:0;background:transparent;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;padding:1em 0.75em;color:inherit}.accordion__panel.sc-d4l-accordion{border:1px solid var(--c-header-background);border-radius:0 0 var(--border-radius-small, var(--border-radius-s))\n    var(--border-radius-small, var(--border-radius-s));padding:0 0.5em}.accordion__panel[hidden='true'].sc-d4l-accordion{display:none}.accordion--no-panel-border.sc-d4l-accordion-h .accordion__panel.sc-d4l-accordion{border:0}.accordion--no-panel-padding.sc-d4l-accordion-h .accordion__panel.sc-d4l-accordion{padding:0}";var c=r("d4l_accordion",function(){function r(r){var e=this;o(this,r);this.classes="";this.open=false;this.onExpandButtonClick=function(){e.open=!e.open}}r.prototype.componentDidLoad=function(){if(this.headerBackgroundColor){this.accordionElement.style.setProperty("--c-header-background",this.headerBackgroundColor)}if(this.headerTextColor){this.accordionElement.style.setProperty("--c-header-text",this.headerTextColor)}};r.prototype.render=function(){var r=this;var o=this,n=o.classes,c=o.open,d=o.onExpandButtonClick,i=o.buttonProps;return e(a,{class:"accordion "+n,role:"region",open:c,ref:function(o){return r.accordionElement=o}},e("div",{class:"accordion__header "+(c&&"accordion__header--no-bottom-border-radius")},e("button",Object.assign({"aria-expanded":c.toString(),onClick:function(){return d()}},i),e("slot",{name:"accordion-header"}),e("d4l-icon-arrow",{classes:"icon--medium icon--circle-light icon--animated-transform "+(c&&"icon--rotate-180"),focusable:"false"}))),e("div",{class:"accordion__panel",hidden:!c},e("slot",{name:"accordion-panel"})))};return r}());c.style=n}}}));