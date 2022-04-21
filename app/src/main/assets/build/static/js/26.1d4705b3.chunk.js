/*! For license information please see 26.1d4705b3.chunk.js.LICENSE.txt */
(this["webpackJsonpwebview-poc"]=this["webpackJsonpwebview-poc"]||[]).push([[26,64,65],{137:function(n,e,t){"use strict";t.r(e),t.d(e,"ion_spinner",(function(){return o}));var r=t(32),s=t(27),i=t(83),a=t(90),o=function(){function n(n){Object(r.r)(this,n),this.paused=!1}return n.prototype.getName=function(){var n=this.name||s.c.get("spinner"),e=Object(s.b)(this);return n||("ios"===e?"lines":"circular")},n.prototype.render=function(){var n,e=this,t=Object(s.b)(e),o=e.getName(),f=a.S[o]||a.S.lines,u="number"===typeof e.duration&&e.duration>10?e.duration:f.dur,p=[];if(void 0!==f.circles)for(var m=0;m<f.circles;m++)p.push(c(f,u,m,f.circles));else if(void 0!==f.lines)for(m=0;m<f.lines;m++)p.push(l(f,u,m,f.lines));return Object(r.h)(r.H,{class:Object(i.c)(e.color,(n={},n[t]=!0,n["spinner-".concat(o)]=!0,n["spinner-paused"]=e.paused||s.c.getBoolean("_testing"),n)),role:"progressbar",style:f.elmDuration?{animationDuration:u+"ms"}:{}},p)},n}(),c=function(n,e,t,s){var i=n.fn(e,t,s);return i.style["animation-duration"]=e+"ms",Object(r.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(r.h)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:n.elmDuration?{animationDuration:e+"ms"}:{}}))},l=function(n,e,t,s){var i=n.fn(e,t,s);return i.style["animation-duration"]=e+"ms",Object(r.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(r.h)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};o.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},83:function(n,e,t){"use strict";t.r(e),t.d(e,"c",(function(){return i})),t.d(e,"g",(function(){return a})),t.d(e,"h",(function(){return s})),t.d(e,"o",(function(){return c}));var r=t(14),s=function(n,e){return null!==e.closest(n)},i=function(n,e){var t;return"string"===typeof n&&n.length>0?Object.assign(((t={"ion-color":!0})["ion-color-".concat(n)]=!0,t),e):e},a=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return e[n]=!0})),e},o=/^[a-z][a-z0-9+\-.]*:/,c=function(n,e,t,s){return Object(r.a)(void 0,void 0,void 0,(function(){var i;return Object(r.c)(this,(function(r){return null!=n&&"#"!==n[0]&&!o.test(n)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(n,t,s)]):[2,!1]}))}))}},90:function(n,e,t){"use strict";t.r(e),t.d(e,"S",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,e,t){var r="".concat(n*e/t-n,"ms"),s=2*Math.PI*e/t;return{r:5,style:{top:"".concat(9*Math.sin(s),"px"),left:"".concat(9*Math.cos(s),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,e,t){var r=e/t,s="".concat(n*r-n,"ms"),i=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,e){var t=-110*e+"ms";return{r:6,style:{left:"".concat(9-9*e,"px"),"animation-delay":t}}}},lines:{dur:1e3,lines:8,fn:function(n,e,t){return{y1:14,y2:26,style:{transform:"rotate(".concat(360/t*e+(e<t/2?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}},"lines-small":{dur:1e3,lines:8,fn:function(n,e,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(360/t*e+(e<t/2?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}},"lines-sharp":{dur:1e3,lines:12,fn:function(n,e,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}},"lines-sharp-small":{dur:1e3,lines:12,fn:function(n,e,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}}}}}]);
//# sourceMappingURL=26.1d4705b3.chunk.js.map