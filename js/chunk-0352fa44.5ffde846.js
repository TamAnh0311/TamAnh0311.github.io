(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0352fa44"],{"0f91":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=s("3245");t.EmailJSResponseStatus=c.EmailJSResponseStatus;var n=s("5129"),o=null,l="https://api.emailjs.com";function u(i,n,r){return void 0===r&&(r={}),new Promise(function(s,a){var e=new XMLHttpRequest;for(var t in e.addEventListener("load",function(e){var t=new c.EmailJSResponseStatus(e.target);(200===t.status||"OK"===t.text?s:a)(t)}),e.addEventListener("error",function(e){a(new c.EmailJSResponseStatus(e.target))}),e.open("POST",i,!0),r)e.setRequestHeader(t,r[t]);e.send(n)})}function a(e,t){o=e,l=t||"https://api.emailjs.com"}function i(e,t,s,a){var i,n,r={lib_version:"2.4.1",user_id:a||o,service_id:e,template_id:t,template_params:(i=s,(n=document.getElementById("g-recaptcha-response"))&&n.value&&(i["g-recaptcha-response"]=n.value),n=null,i)};return u(l+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function r(e,t,s,a){if("string"==typeof s&&(s=document.querySelector(s)),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";n.UI.progressState(s);var i=new FormData(s);return i.append("lib_version","2.4.1"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",a||o),u(l+"/api/v1.0/email/send-form",i).then(function(e){return n.UI.successState(s),e},function(e){return n.UI.errorState(s),Promise.reject(e)})}t.init=a,t.send=i,t.sendForm=r,t.default={init:a,send:i,sendForm:r}},2532:function(e,t,s){"use strict";var a=s("23e7"),i=s("5a34"),n=s("1d80");a({target:"String",proto:!0,forced:!s("ab13")("includes")},{includes:function(e){return!!~String(n(this)).indexOf(i(e),1<arguments.length?arguments[1]:void 0)}})},3245:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function a(e){this.status=e.status,this.text=e.responseText}t.EmailJSResponseStatus=a},"37e8":function(e,t,s){var a=s("83ab"),r=s("9bf2"),c=s("825a"),o=s("df75");e.exports=a?Object.defineProperties:function(e,t){c(e);for(var s,a=o(t),i=a.length,n=0;n<i;)r.f(e,s=a[n++],t[s]);return e}},"44d2":function(e,t,s){var a=s("b622"),i=s("7c73"),n=s("9bf2"),r=a("unscopables"),c=Array.prototype;null==c[r]&&n.f(c,r,{configurable:!0,value:i(null)}),e.exports=function(e){c[r][e]=!0}},"44e7":function(e,t,s){var a=s("861d"),i=s("c6b6"),n=s("b622")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==i(e))}},5129:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(i.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},i.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},i.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},i.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},i.PROGRESS="emailjs-sending",i.DONE="emailjs-success",i.ERROR="emailjs-error",i);function i(){}t.UI=a},"5a34":function(e,t,s){var a=s("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"7c73":function(e,t,s){function a(){}function i(e){return"<script>"+e+"</"+f+">"}var n,r=s("825a"),c=s("37e8"),o=s("7839"),l=s("d012"),u=s("1be4"),d=s("cc12"),m=s("f772"),p="prototype",f="script",v=m("IE_PROTO"),h=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;h=n?function(e){e.write(i("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=d("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(i("document.F=Object")),e.close(),e.F);for(var s=o.length;s--;)delete h[p][o[s]];return h()};l[v]=!0,e.exports=Object.create||function(e,t){var s;return null!==e?(a[p]=r(e),s=new a,a[p]=null,s[v]=e):s=h(),void 0===t?s:c(s,t)}},"97d5":function(e,t,s){"use strict";s.r(t);var a=(s("c740"),s("caad6"),s("b0c0"),s("d3b7"),s("2532"),s("0f91")),i=s.n(a),n=s("4360"),r=s("d697"),c={name:"Contact",components:{UpDownBtn:function(){return s.e("chunk-2d207d19").then(s.bind(null,"a1c6"))}},data:function(){return{showEmail:!1,isError:!1,formErr:[],directMessage:{name:"",email:"",subject:"",content:""}}},computed:{isMobile:function(){return n.a.state.isMobile},contactItem:function(){return r.a.contactItem}},methods:{formValidate:function(e){this.directMessage.name&&this.directMessage.email&&this.directMessage.content&&(this.sendMessage(),this.isError=!1),this.isError=!0,this.formErr=[],this.directMessage.name||this.formErr.push("Name required!"),this.directMessage.email?this.validEmail(this.directMessage.email)||this.formErr.push("Valid email address required."):this.formErr.push("Email address required!"),this.directMessage.email||this.formErr.push("Email content required!"),e.preventDefault()},validEmail:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},sendMessage:function(){var e=this,t={template_params:{from_name:this.directMessage.name,from_email:this.directMessage.email,subject:this.directMessage.subject,message:this.directMessage.content}};i.a.send("gmail","template_6tzrBLEy",t,"user_iN8gsQFj7PKzAV3d6fdFK").then(function(){e.$emit("sendNoti","<h4>Thank you!</h4><p>Your message has been successfully sent. </p><p>I will contact you very soon!</p>"),e.clearEmail()}).catch(function(){e.$emit("sendNoti","<h4>Oops! Some errors occured.</h4><p>Please try again later!</p>")})},showEmailPanel:function(){this.showEmail=!this.showEmail},clearEmail:function(){this.directMessage.content="",this.directMessage.subject="",this.directMessage.name="",this.directMessage.email=""},clearTextbox:function(){this.directMessage.content=""},checkErr:function(t){return-1<this.formErr.findIndex(function(e){return e.includes(t)})}}},o=s("2877"),l=Object(o.a)(c,function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{attrs:{id:"contact"}},[a("div",{staticClass:"contact-content page-padding"},[a("div",{staticClass:"header"},[a("h2",{staticClass:"title"},[s._v("Get in Touch")]),a("UpDownBtn",{attrs:{upBlock:"portfolio",downBlock:"footer"}})],1),a("div",{staticClass:"contact-block"},[a("p",{staticClass:"title"},[s._v("Please feel free to contact me if you need any further information.")]),a("div",{staticClass:"contact-links"},s._l(s.contactItem,function(e,t){return a("div",{key:t,staticClass:"contact-links__item"},[a("a",{attrs:{href:s.isMobile?e.href:"javascript:void(0)"}},[a("span",{staticClass:"material-icons"},[s._v(s._s(e.icon))]),a("p",[s._v(" "+s._s(e.content)+" ")])])])}),0)]),a("div",{staticClass:"email-block__header"},[a("p",{staticClass:"title"},[s._v("Or send me direct message")]),s.isMobile?a("span",{staticClass:"material-icons",class:{"hide-panel":s.showEmail},on:{click:s.showEmailPanel}},[s._v(" arrow_drop_down ")]):s._e()]),a("transition",{attrs:{name:"slide-down",mode:"out-in"}},[!s.isMobile||s.showEmail?a("div",{staticClass:"email-block"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"email-block__item"},[a("label",{staticClass:"title"},[s._v("Name*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.directMessage.name,expression:"directMessage.name"}],staticClass:"text-input",class:{error:0<s.formErr.length&&s.checkErr("Name")},attrs:{type:"text",name:"name"},domProps:{value:s.directMessage.name},on:{input:function(e){e.target.composing||s.$set(s.directMessage,"name",e.target.value)}}})]),a("div",{staticClass:"email-block__item"},[a("label",{staticClass:"title"},[s._v("Email*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.directMessage.email,expression:"directMessage.email"}],staticClass:"text-input email",class:{error:0<s.formErr.length&&s.checkErr("address")},attrs:{type:"text",name:"email"},domProps:{value:s.directMessage.email},on:{input:function(e){e.target.composing||s.$set(s.directMessage,"email",e.target.value)}}})]),a("div",{staticClass:"email-block__item"},[a("label",{staticClass:"title"},[s._v("Subject")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.directMessage.subject,expression:"directMessage.subject"}],staticClass:"text-input",attrs:{type:"text",name:"subject"},domProps:{value:s.directMessage.subject},on:{input:function(e){e.target.composing||s.$set(s.directMessage,"subject",e.target.value)}}})])]),a("div",{staticClass:"col-md-6 lp5"},[a("div",{staticClass:"email-block__item"},[a("label",{staticClass:"title"},[s._v("Message*")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:s.directMessage.content,expression:"directMessage.content"}],staticClass:"text-area",class:{error:0<s.formErr.length&&s.checkErr("content")},attrs:{name:"message"},domProps:{value:s.directMessage.content},on:{input:function(e){e.target.composing||s.$set(s.directMessage,"content",e.target.value)}}})])]),a("transition",{attrs:{name:"slide-down",mode:"in-out"}},[0<s.formErr.length?a("div",{staticClass:"email-noti"},s._l(s.formErr,function(e,t){return a("span",{key:t},[s._v(" "+s._s(e)+" ")])}),0):s._e()]),a("div",{staticClass:"btn-block"},[a("div",[a("input",{staticClass:"btn btn-clear",attrs:{type:"reset",value:"Clear Message",name:"reset"},on:{click:s.clearTextbox}})]),a("div",[a("input",{staticClass:"btn btn-submit",class:{error:s.isError},attrs:{type:"submit",value:"Send Message",name:"submit"},on:{click:s.formValidate}})])])],1)]):s._e()]),!s.showEmail&&s.isMobile?a("div",{staticClass:"bottom-card vertical-align",on:{click:s.showEmailPanel}},[a("p",[s._v("Tap here to open email sending form")])]):s._e()],1)])},[],!1,null,null,null);t.default=l.exports},ab13:function(e,t,s){var a=s("b622")("match");e.exports=function(t){var s=/./;try{"/./"[t](s)}catch(e){try{return s[a]=!1,"/./"[t](s)}catch(e){}}return!1}},b0c0:function(e,t,s){var a=s("83ab"),i=s("9bf2").f,n=Function.prototype,r=n.toString,c=/^\s*function ([^ (]*)/;!a||"name"in n||i(n,"name",{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(e){return""}}})},c740:function(e,t,s){"use strict";var a=s("23e7"),i=s("b727").findIndex,n=s("44d2"),r=s("ae40"),c="findIndex",o=!0,l=r(c);c in[]&&Array(1)[c](function(){o=!1}),a({target:"Array",proto:!0,forced:o||!l},{findIndex:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(c)},caad6:function(e,t,s){"use strict";var a=s("23e7"),i=s("4d64").includes,n=s("44d2");a({target:"Array",proto:!0,forced:!s("ae40")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n("includes")}}]);