(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d207d19"],{a1c6:function(n,o,t){"use strict";t.r(o);var c={name:"UpDownBtn",props:{upBlock:String,downBlock:String,isEnd:{type:Boolean,default:!1}},computed:{upBlockCom:function(){return this.upBlock}},methods:{goTo:function(n){this.$scrollTo("#".concat(n))}}},a=t("2877"),s=Object(a.a)(c,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"up-down-btn"},[t("span",{staticClass:"material-icons",on:{click:function(n){return o.goTo(o.upBlock)}}},[o._v("keyboard_arrow_up")]),o.isEnd?o._e():t("span",{staticClass:"material-icons",on:{click:function(n){return o.goTo(o.downBlock)}}},[o._v(" keyboard_arrow_down ")])])},[],!1,null,null,null);o.default=s.exports}}]);