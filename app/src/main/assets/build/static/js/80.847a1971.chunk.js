(this["webpackJsonpwebview-poc"]=this["webpackJsonpwebview-poc"]||[]).push([[80],{93:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return o}));var r=n(20),i=n(86),c=n(55),o=(n(43),function(t,e,n,o,a){var u=t.ownerDocument.defaultView,s=Object(i.i)(t),f=function(t){return s?-t.deltaX:t.deltaX},v=function(t){return s?-t.velocityX:t.velocityX};return Object(c.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=u.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/u.innerWidth;o(e)},onEnd:function(t){var e=f(t),n=u.innerWidth,i=e/n,c=v(t),o=c>=0&&(c>.2||e>n/2),s=(o?1-i:i)*n,h=0;if(s>5){var w=s/Math.abs(c);h=Math.min(w,540)}a(o,i<=0?.01:Object(r.k)(0,i,.9999),h)}})})}}]);
//# sourceMappingURL=80.847a1971.chunk.js.map