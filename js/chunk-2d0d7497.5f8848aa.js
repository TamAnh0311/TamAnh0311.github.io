(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d7497"],{"75be":function(t,i,n){"use strict";n.r(i);var e={name:"Notification",props:{message:{type:String,default:"<p>This is a notification</p>"}},methods:{closeNoti:function(){this.$emit("closeNoti")}},mounted:function(){document.getElementById("content-noti").innerHTML=this.message}},s=n("2877"),a=Object(s.a)(e,function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"notification vertical-align"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:i.closeNoti,expression:"closeNoti"}],staticClass:"notification-card"},[n("div",{staticClass:"notification-header"},[i._m(0),n("span",{staticClass:"material-icons hand-cursor",on:{click:function(t){return i.closeNoti()}}},[i._v(" cancel ")])]),n("div",{staticClass:"notification-content",attrs:{id:"content-noti"}}),n("div",{staticClass:"notification-btn"},[n("input",{staticClass:"btn btn-noti",attrs:{type:"submit",value:"Got it!",name:"submit"},on:{click:function(t){return i.closeNoti()}}})])])])},[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"header-title"},[n("span",{staticClass:"material-icons"},[t._v(" report ")]),n("h4",[t._v(" Notify ")])])}],!1,null,null,null);i.default=a.exports}}]);