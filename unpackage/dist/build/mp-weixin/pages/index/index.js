(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"5f45":function(n,t,e){"use strict";e.r(t);var o=e("dfb6"),i=e("f6a8");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("ffc6");var c,u=e("f0c5"),f=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"069a5d6e",null,!1,o["a"],c);t["default"]=f.exports},bd4a:function(n,t,e){},c41f:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("fe00"),i=function(){e.e("components/self-button").then(function(){return resolve(e("a566"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/self-bg").then(function(){return resolve(e("d3d9"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/self-content").then(function(){return resolve(e("6a0b"))}.bind(null,e)).catch(e.oe)},u={data:function(){return{}},components:{selfButton:i,selfBg:a,selfContent:c},onLoad:function(){},methods:{workHandleClick:function(){n.navigateTo({url:"/pages/workLogin/index"})},guestHandleClick:function(){(0,o.getGuestInfo)().then((function(t){if(t.success){var e=t.data;if(0===e.checkStatus)n.navigateTo({url:"/pages/guestFirst/index"});else{var o={visitorType:e.visitorType,visitors:e.visitors,reason:e.reason,companyName:e.companyName,visitDate:e.visitDate,targetLocation:e.targetLocation,phone:e.phone,mainVisitors:[{name:e.name,idNo:e.idNo}],checkStatus:e.checkStatus,isolation:e.isolation?e.isolation:"",openTime:e.openTime?e.openTime:""};n.navigateTo({url:"/pages/guestInfo/index?detail=".concat(JSON.stringify(o))})}}}))},workGetuserinfo:function(n){},guestGetuserinfo:function(n){}}};t.default=u}).call(this,e("543d")["default"])},dfb6:function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}))},eb40:function(n,t,e){"use strict";(function(n){e("d48c");o(e("66fd"));var t=o(e("5f45"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},f6a8:function(n,t,e){"use strict";e.r(t);var o=e("c41f"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},ffc6:function(n,t,e){"use strict";var o=e("bd4a"),i=e.n(o);i.a}},[["eb40","common/runtime","common/vendor"]]]);