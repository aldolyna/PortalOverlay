/*! For license information please see 0.f7936f50.chunk.js.LICENSE.txt */
(this["webpackJsonpwebview-poc"]=this["webpackJsonpwebview-poc"]||[]).push([[0,51,80],{86:function(t,e,n){"use strict";n.r(e),n.d(e,"i",(function(){return r}));var r=function(t){return t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())}},93:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return u}));var r=n(20),i=n(86),o=n(55),u=(n(43),function(t,e,n,u,c){var a=t.ownerDocument.defaultView,s=Object(i.i)(t),d=function(t){return s?-t.deltaX:t.deltaX},f=function(t){return s?-t.velocityX:t.velocityX};return Object(o.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=a.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=d(t)/a.innerWidth;u(e)},onEnd:function(t){var e=d(t),n=a.innerWidth,i=e/n,o=f(t),u=o>=0&&(o>.2||e>n/2),s=(u?1-i:i)*n,v=0;if(s>5){var w=s/Math.abs(o);v=Math.min(w,540)}c(u,i<=0?.01:Object(r.k)(0,i,.9999),v)}})})}}]);
//# sourceMappingURL=0.f7936f50.chunk.js.map