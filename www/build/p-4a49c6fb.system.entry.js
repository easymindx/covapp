System.register(["./p-7f8680f3.system.js"],(function(t){"use strict";var e,i,n;return{setters:[function(t){e=t.r;i=t.h;n=t.H}],execute:function(){var r=':host{color:var(--c-primary);font-weight:500;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:10px 0;padding:50px 0;--slider-width:270px}.slider{width:var(--slider-width);overflow:hidden;text-align:center}.slider__container{--n-slides:1;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;list-style:none;padding:0;margin:0;-ms-flex:0 0 100%;flex:0 0 100%;width:calc(var(--slider-width) * var(--n-slides));-webkit-transform:translateX(calc(var(--current-slide) * (var(--slider-width) * -1)));transform:translateX(calc(var(--current-slide) * (var(--slider-width) * -1)));-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out}.slider__slide{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;width:var(--slider-width);padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider__controls{padding:0 20px}.slider__controls>button{padding:10px;margin:5px;position:relative;border:0;background:none}.slider__controls>button:before{content:"";position:absolute;width:8px;height:8px;background-color:var(--c-primary-lighter);border-radius:50%;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.slider__controls>button.is-active:before{background-color:var(--c-primary)}';var s=t("d4l_slider",function(){function t(t){e(this,t);this.classes="";this.ariaLabel="slider";this.slides=[];this.positionX0=null;this.numberOfSlides=0;this.currentActiveSlide=0;this.containerWidth=270}t.prototype.unifyTouchEvents=function(t){return t.changedTouches?t.changedTouches[0]:t};t.prototype.navigateToSlide=function(t){this.sliderContainer.style.setProperty("--current-slide",t);this.currentActiveSlide=t};t.prototype.swipeStart=function(t){this.positionX0=this.unifyTouchEvents(t).clientX};t.prototype.swipeMove=function(t){if(this.positionX0||this.positionX0===0){var e=this.unifyTouchEvents(t).clientX-this.positionX0;var i=Math.sign(e);if((this.currentActiveSlide>0||i<0)&&(this.currentActiveSlide<this.numberOfSlides-1||i>0))this.sliderContainer.style.setProperty("--current-slide",(this.currentActiveSlide-=i).toString());this.positionX0=null}};t.prototype.componentWillLoad=function(){this.numberOfSlides=this.slides.length};t.prototype.componentDidLoad=function(){this.sliderContainer.style.setProperty("--n-slides",this.numberOfSlides.toString());this.containerWidth=this.sliderContainer.parentElement.offsetWidth};t.prototype.render=function(){var t=this;var e=this,r=e.classes,s=e.ariaLabel,o=e.slides,l=e.currentActiveSlide;return i(n,{role:"region","aria-label":s,onTouchStart:function(e){return t.swipeStart(e)},onTouchEnd:function(e){return t.swipeMove(e)},onMouseDown:function(e){return t.swipeStart(e)},onMouseUp:function(e){return t.swipeMove(e)}},i("div",{class:"slider "+r},i("ul",{class:"slider__container",ref:function(e){return t.sliderContainer=e}},!!o.length&&o.map((function(t){return i("li",{class:"slider__slide"},t.icon&&i("d4l-icon",{"icon-name":t.icon}),i("p",null,t.text))}))),i("div",{class:"slider__controls"},o.map((function(e,n){return i("button",{class:"slider__buttonDot "+(n===l?"is-active":""),"aria-label":"Slide "+(n+1)+" — "+e.label,title:e.label,onClick:function(){return t.navigateToSlide(n)}})})))))};return t}());s.style=r}}}));