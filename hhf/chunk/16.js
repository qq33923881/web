/*! For license information please see 16.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"109":function(t,n,o){"use strict";o.r(n),o.d(n,"taro_navigator_core",(function(){return a}));var i=o(31),s=o(17),c=o(135),a=function(){function e(t){Object(i.g)(this,t),this.onSuccess=Object(i.c)(this,"cuccess",7),this.onFail=Object(i.c)(this,"fail",7),this.onComplete=Object(i.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}return e.prototype.onClick=function(){var t=this,n=t.openType,o=t.onSuccess,i=t.onFail,c=t.onComplete,a=Promise.resolve();switch(n){case"navigate":a=Object(s.e)({"url":this.url});break;case"redirect":a=Object(s.g)({"url":this.url});break;case"switchTab":a=Object(s.h)({"url":this.url});break;case"reLaunch":a=Object(s.f)({"url":this.url});break;case"navigateBack":a=Object(s.d)({"delta":this.delta});break;case"exit":a=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'))}a&&a.then((function(t){o.emit(t)})).catch((function(t){i.emit(t)})).finally((function(){c.emit()}))},e.prototype.render=function(){var t,n=this.isHover,o=this.hoverClass;return Object(i.e)(i.a,{"class":Object(c.c)((t={},t[o]=n,t))})},e}();a.style=".navigator-hover{background:#efefef}"},"135":function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return createCommonjsModule})),o.d(n,"b",(function(){return s})),o.d(n,"c",(function(){return c})),o.d(n,"d",(function(){return getDefaultExportFromCjs}));var i=o(6),s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,n,o){return t(o={"path":n,"exports":{},"require":function require(t,n){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}var c=createCommonjsModule((function(t){!function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var c=Object(i.a)(s);if("string"===c||"number"===c)t.push(s);else if(Array.isArray(s)){if(s.length){var a=r.apply(null,s);a&&t.push(a)}}else if("object"===c)if(s.toString===Object.prototype.toString)for(var u in s)n.call(s,u)&&s[u]&&t.push(u);else t.push(s.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))}).call(this,o(52))}}]);