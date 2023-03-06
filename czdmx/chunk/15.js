/*! For license information please see 15.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"117":function(t,a,n){"use strict";n.r(a),n.d(a,"taro_tabbar",(function(){return f}));var i=n(28),s=n(16),l=n(21),b=n(124),__spreadArray=function(t,a){for(var n=0,i=a.length,s=t.length;n<i;n++,s++)t[s]=a[n];return t},d=function splitUrl(t){var a,n=t||"",i={"path":null,"query":null,"fragment":null};return(a=n.indexOf("#"))>-1&&(i.fragment=n.substring(a+1),n=n.substring(0,a)),(a=n.indexOf("?"))>-1&&(i.query=n.substring(a+1),n=n.substring(0,a)),i.path=n,i};function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,a){for(var n=a,i=n+1,s=t.length;i<s;n+=1,i+=1)t[n]=t[i];t.pop()}var c=function TabbarItem(t){var a=t.index,n=t.isSelected,s=void 0!==n&&n,l=t.textColor,d=t.iconPath,c=t.badgeText,h=t.showRedDot,u=void 0!==h&&h,f=t.text,g=t.onSelect,p=Object(b.c)("weui-tabbar__item",{"weui-bar__item_on":s});return Object(i.e)("a",{"key":a,"href":"javascript:;","class":p,"onClick":function v(){g(a)}},Object(i.e)("span",{"style":{"display":"inline-block","position":"relative"}},Object(i.e)("img",{"src":d,"alt":"","class":"weui-tabbar__icon"}),!!c&&Object(i.e)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},c),u&&Object(i.e)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),Object(i.e)("p",{"class":"weui-tabbar__label","style":{"color":l}},f))},h=function addLeadingSlash(t){return"/"===t[0]?t:"/"+t},u=function stripBasename(t,a){return function hasBasename(t,a){return new RegExp("^"+a+"(\\/|\\?|#|$)","i").test(t)}(t,a)?t.substr(a.length):t},f=function(){function e(t){var a=this;Object(i.g)(this,t),this.onLongPress=Object(i.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=0,this.getOriginUrl=function(t){var n=a.customRoutes.filter((function(a){var n=a[1];return d(n).path===d(t).path}));return n.length?n[0][0]:t},this.getSelectedIndex=function(t){var n=-1;return a.list.forEach((function(a,i){var s=a.pagePath;d(t).path===d(s).path&&(n=i)})),n},this.switchTab=function(t){a.selectedIndex=t,Object(s.h)({"url":a.list[t].pagePath})},this.switchTabHandler=function(t){var n=t.url,i=t.successHandler,s=t.errorHandler,l=function resolvePathname(t,a){void 0===a&&(a="");var n,i=t&&t.split("/")||[],s=a&&a.split("/")||[],l=t&&isAbsolute(t),b=a&&isAbsolute(a),d=l||b;if(t&&isAbsolute(t)?s=i:i.length&&(s.pop(),s=s.concat(i)),!s.length)return"/";if(s.length){var c=s[s.length-1];n="."===c||".."===c||""===c}else n=!1;for(var h=0,u=s.length;u>=0;u--){var f=s[u];"."===f?spliceOne(s,u):".."===f?(spliceOne(s,u),h++):h&&(spliceOne(s,u),h--)}if(!d)for(;h--;h)s.unshift("..");!d||""===s[0]||s[0]&&isAbsolute(s[0])||s.unshift("");var g=s.join("/");return n&&"/"!==g.substr(-1)&&(g+="/"),g}(n,a.getOriginUrl(a.getCurrentUrl()||a.homePage)),b=a.getSelectedIndex(l);b>-1?(a.switchTab(b),i({"errMsg":"switchTab:ok"})):s({"errMsg":'switchTab:fail page "'+l+'" is not found'})},this.routerChangeHandler=function(t){var n,i,s=null===(n=null==t?void 0:t.toLocation)||void 0===n?void 0:n.path;if("string"==typeof s){var l=a.conf.basename||"/";i=u(h(s||a.homePage),l)||"/"}else i=a.getCurrentUrl();a.selectedIndex=a.getSelectedIndex(a.getOriginUrl(i))},this.setTabBarBadgeHandler=function(t){var n=t.index,i=t.text,s=t.successHandler,l=t.errorHandler,b=__spreadArray([],a.list);n in b?(b[n].showRedDot=!1,b[n].badgeText=i,s({"errMsg":"setTabBarBadge:ok"})):l({"errMsg":"setTabBarBadge:fail tabbar item not found"}),a.list=b},this.removeTabBarBadgeHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].badgeText=null,l[n].badgeText=null,i({"errMsg":"removeTabBarBadge:ok"})):s({"errMsg":"removeTabBarBadge:fail tabbar item not found"}),a.list=l},this.showTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].badgeText=null,l[n].showRedDot=!0,i({"errMsg":"showTabBarRedDot:ok"})):s({"errMsg":"showTabBarRedDot:fail tabbar item not found"}),a.list=l},this.hideTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].showRedDot=!1,i({"errMsg":"hideTabBarRedDot:ok"})):s({"errMsg":"hideTabBarRedDot:fail tabbar item not found"}),a.list=l},this.showTabBarHandler=function(t){var n=t.successHandler;a.status=0,n({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(t){var n=t.animation,i=t.successHandler;a.status=n?2:1,i({"errMsg":"hideTabBar:ok"})},this.setTabBarStyleHandler=function(t){var n=t.color,i=t.selectedColor,s=t.backgroundColor,l=t.borderStyle,b=t.successHandler;s&&(a.backgroundColor=s),l&&(a.borderStyle=l),n&&(a.color=n),i&&(a.selectedColor=i),b({"errMsg":"setTabBarStyle:ok"})},this.setTabBarItemHandler=function(t){var n=t.index,i=t.iconPath,s=t.selectedIconPath,l=t.text,b=t.successHandler,d=t.errorHandler,c=__spreadArray([],a.list);n in c?(i&&(c[n].iconPath=i),s&&(c[n].selectedIconPath=s),l&&(c[n].text=l),b({"errMsg":"setTabBarItem:ok"})):d({"errMsg":"setTabBarItem:fail tabbar item not found"}),a.list=c};var n=this.conf.list,l=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(n)||n.length<2||n.length>5)throw new Error("tabBar 配置错误");this.homePage=h(this.conf.homePage);var b=function o(t){var a,n=l[t];t=h(t),"string"==typeof n?c.customRoutes.push([t,h(n)]):(null==n?void 0:n.length)>0&&(a=c.customRoutes).push.apply(a,n.map((function(a){return[t,h(a)]})))},c=this;for(var f in l)b(f);n.forEach((function(t){0!==t.pagePath.indexOf("/")&&(t.pagePath="/"+t.pagePath)})),this.list=n,this.borderStyle=this.conf.borderStyle,this.backgroundColor=this.conf.backgroundColor,this.color=this.conf.color,this.selectedColor=this.conf.selectedColor}return e.prototype.getCurrentUrl=function(){var t,a=this.conf.mode,n=this.conf.basename||"/";if("hash"===a){var i=window.location.href,s=i.indexOf("#");t=-1===s?"":i.substring(s+1)}else t=location.pathname;var l=h(u(t,n));return"/"===l?this.homePage:l},e.prototype.bindEvent=function(){l.a.eventCenter.on("__taroRouterChange",this.routerChangeHandler),l.a.eventCenter.on("__taroSwitchTab",this.switchTabHandler),l.a.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.a.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.a.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.a.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.a.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),l.a.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler),l.a.eventCenter.on("__taroSetTabBarStyle",this.setTabBarStyleHandler),l.a.eventCenter.on("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.removeEvent=function(){l.a.eventCenter.off("__taroRouterChange",this.routerChangeHandler),l.a.eventCenter.off("__taroSwitchTab",this.switchTabHandler),l.a.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.a.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.a.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.a.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.a.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),l.a.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler),l.a.eventCenter.off("__taroSetTabBarStyle",this.setTabBarStyleHandler),l.a.eventCenter.off("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},e.prototype.disconnectedCallback=function(){this.removeEvent()},e.prototype.render=function(){var t,a,n=this,s=this.tabbarPos,l=void 0===s?"bottom":s,d=this.status,h=Object(b.c)("weui-tabbar",((t={})["taro-tabbar__border-"+(this.borderStyle||"black")]=!0,t)),u=-1===this.selectedIndex||1===d,f=2===d;return Object(i.e)(i.a,{"class":Object(b.c)("taro-tabbar__tabbar","taro-tabbar__tabbar-"+l,(a={},a["taro-tabbar__tabbar-hide"]=u,a["taro-tabbar__tabbar-slideout"]=f,a))},Object(i.e)("div",{"class":h,"style":{"backgroundColor":this.backgroundColor||"","height":"inherit"}},this.list.map((function(t,a){var s,l,b=n.selectedIndex===a;return b?(s=n.selectedColor||"",l=t.selectedIconPath):(s=n.color||"",l=t.iconPath),Object(i.e)(c,{"index":a,"onSelect":n.switchTab.bind(n),"isSelected":b,"textColor":s,"iconPath":l,"text":t.text,"badgeText":t.badgeText,"showRedDot":t.showRedDot})}))))},Object.defineProperty(e.prototype,"tabbar",{"get":function get(){return Object(i.d)(this)},"enumerable":!1,"configurable":!0}),e}();f.style="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-direction:column;flex-direction:column;height:100%}.taro-tabbar__panel{overflow:auto;position:relative;-ms-flex:1;flex:1;-webkit-overflow-scrolling:auto}.taro-tabbar__tabbar{position:relative;width:100%;height:50px;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom)}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"},"124":function(t,a,n){"use strict";(function(t){n.d(a,"a",(function(){return createCommonjsModule})),n.d(a,"b",(function(){return s})),n.d(a,"c",(function(){return l})),n.d(a,"d",(function(){return getDefaultExportFromCjs}));var i=n(6),s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,a,n){return t(n={"path":a,"exports":{},"require":function require(t,a){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var l=createCommonjsModule((function(t){!function(){var a={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var l=Object(i.a)(s);if("string"===l||"number"===l)t.push(s);else if(Array.isArray(s)){if(s.length){var b=r.apply(null,s);b&&t.push(b)}}else if("object"===l)if(s.toString===Object.prototype.toString)for(var d in s)a.call(s,d)&&s[d]&&t.push(d);else t.push(s.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))}).call(this,n(41))}}]);