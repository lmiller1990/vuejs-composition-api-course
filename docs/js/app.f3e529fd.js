(function(t){function e(e){for(var s,a,o=e[0],i=e[1],u=e[2],d=0,b=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],s=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(s=!1)}s&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},c=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vuejs-composition-api-course/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0013":function(t,e,n){},"151f":function(t,e,n){"use strict";n("4608")},"354c":function(t,e,n){"use strict";n("0013")},4608:function(t,e,n){},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./uk":"ada2","./uk.js":"ada2","./uz":"2e8c","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=c,t.exports=r,r.id="4678"},"5ad0":function(t,e,n){"use strict";n("9099")},9099:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var s=n("9ab4"),r=n("7a23");const c=Object(r["i"])("div",{class:"modal-background"},null,-1),a=Object(r["i"])("div",{class:"modal-content"},[Object(r["i"])("div",{id:"modal"})],-1),o={class:"section"},i={class:"container"};function u(t,e,n,s,u,l){const d=Object(r["B"])("navbar"),b=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",{class:"modal",style:t.style},[c,a,Object(r["i"])("button",{onClick:e[1]||(e[1]=(...e)=>t.hide&&t.hide(...e)),class:"modal-close is-large"})],4),Object(r["i"])("section",o,[Object(r["i"])("div",i,[Object(r["i"])(d),Object(r["i"])(b)])])],64)}const l={class:"navbar"},d={class:"navbar-end"},b={key:0,class:"buttons"},j=Object(r["h"])(" New Post "),f={key:1,class:"buttons"};function p(t,e,n,s,c,a){const o=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",l,[Object(r["i"])("div",d,[t.auth?(Object(r["t"])(),Object(r["f"])("div",b,[Object(r["i"])(o,{class:"button",to:"/posts/new"},{default:Object(r["I"])(()=>[j]),_:1}),Object(r["i"])("button",{class:"button",onClick:e[1]||(e[1]=(...e)=>t.signOut&&t.signOut(...e))}," Sign Out ")])):(Object(r["t"])(),Object(r["f"])("div",f,[Object(r["i"])("button",{class:"button","data-test":"sign-up",onClick:e[2]||(e[2]=(...e)=>t.signUp&&t.signUp(...e))}," Sign Up "),Object(r["i"])("button",{class:"button",onClick:e[3]||(e[3]=(...e)=>t.signIn&&t.signIn(...e))}," Sign In ")]))])]),(Object(r["t"])(),Object(r["f"])(r["c"],{to:"#modal"},[(Object(r["t"])(),Object(r["f"])(Object(r["C"])(t.component)))]))],64)}const O=Object(r["L"])("data-v-44253169"),v=O((t,e,n,s,c,a)=>{const o=Object(r["B"])("form-input");return Object(r["t"])(),Object(r["f"])("form",{onSubmit:e[3]||(e[3]=Object(r["K"])((...e)=>t.submit&&t.submit(...e),["prevent"]))},[Object(r["i"])(o,{modelValue:t.username,"onUpdate:modelValue":e[1]||(e[1]=e=>t.username=e),name:"Username",type:"text",error:t.usernameStatus.message},null,8,["modelValue","error"]),Object(r["i"])(o,{modelValue:t.password,"onUpdate:modelValue":e[2]||(e[2]=e=>t.password=e),name:"Password",type:"password",error:t.passwordStatus.message},null,8,["modelValue","error"]),Object(r["i"])("button",{class:"button is-primary",disabled:!t.usernameStatus.valid||!t.passwordStatus.valid}," Submit ",8,["disabled"])],32)}),h={class:"field"},m={class:"control"},g={class:"is-danger help"};function y(t,e,n,s,c,a){return Object(r["t"])(),Object(r["f"])("div",h,[Object(r["i"])("label",{class:"label",name:t.name},Object(r["E"])(t.name),9,["name"]),Object(r["i"])("div",m,[Object(r["i"])("input",{class:"input",id:t.name,type:t.type,value:t.modelValue,onInput:e[1]||(e[1]=(...e)=>t.handleInput&&t.handleInput(...e))},null,40,["id","type","value"])]),Object(r["i"])("p",g,Object(r["E"])(t.error),1)])}var w=Object(r["j"])({props:{name:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},error:{type:String}},setup:function(t,e){var n=function(t){e.emit("update:modelValue",t.target.value)};return{handleInput:n}}});w.render=y;var k=w;function S(){return{type:"required"}}function I(t){return{type:"length",options:t}}function P(t,e){for(var n=0,s=e;n<s.length;n++){var r=s[n];if("required"===r.type&&(!t||0===t.length))return{valid:!1,message:"This value is required."};if("length"===r.type&&(t.length<r.options.min||t.length>r.options.max))return{valid:!1,message:"The value must be between "+r.options.min+" and "+r.options.max}}return{valid:!0}}var T=n("bc3a"),z=n.n(T),E=Symbol("store"),M=function(){function t(t){this.state=Object(r["x"])(t)}return t.prototype.install=function(t){t.provide(E,this)},t.prototype.getState=function(){return Object(r["y"])(this.state)},t.prototype.createPost=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,z.a.post("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),this.state.posts.ids.push(e.data.id),[2]}}))}))},t.prototype.updatePost=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,z.a.put("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),[2]}}))}))},t.prototype.createUser=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,z.a.post("/users",t)];case 1:return e=n.sent(),this.state.authors.all.set(e.data.id,e.data),this.state.authors.ids.push(e.data.id),this.state.authors.currentUserId=e.data.id,console.log(this.state.authors),[2]}}))}))},t.prototype.fetchPosts=function(){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,c;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return[4,z.a.get("/posts")];case 1:for(t=s.sent(),e={ids:[],all:new Map,loaded:!0},n=0,r=t.data;n<r.length;n++)c=r[n],e.ids.push(c.id),e.all.set(c.id,c);return this.state.posts=e,[2]}}))}))},t}(),x=new Map,U=new M({authors:{all:new Map,ids:[],loaded:!1,currentUserId:void 0},posts:{all:x,ids:[],loaded:!1}});function _(){var t=Object(r["m"])(E);if(!t)throw Error("Did you forgot to call provide?");return t}U.getState().posts.loaded;var B=Object(r["z"])(!1),q=Object(r["z"])();function A(){return{component:q,show:B,showModal:function(){return B.value=!0},hideModal:function(){return B.value=!1}}}var V=Object(r["j"])({components:{FormInput:k},setup:function(){var t=this,e=Object(r["z"])("username"),n=Object(r["d"])((function(){return P(e.value,[S(),I({min:5,max:10})])})),c=Object(r["z"])("password"),a=Object(r["d"])((function(){return P(c.value,[S(),I({min:10,max:40})])})),o=_(),i=A(),u=function(r){return Object(s["b"])(t,void 0,void 0,(function(){var t;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return n.value.valid&&a.value.valid?(t={id:"-1",username:e.value,password:c.value},[4,o.createUser(t)]):[2];case 1:return s.sent(),i.hideModal(),[2]}}))}))};return{usernameStatus:n,username:e,submit:u,password:c,passwordStatus:a}}});n("151f");V.render=v,V.__scopeId="data-v-44253169";var C=V,L=Object(r["j"])({components:{Signup:C},setup:function(){var t=A(),e=_(),n=Object(r["d"])((function(){return!!e.getState().authors.currentUserId})),s=function(){var e=Object(r["j"])({setup:function(){return function(){return Object(r["l"])("div","Demo")}}});t.component.value=Object(r["n"])(e),t.showModal()},c=function(){t.component.value=Object(r["n"])(C),t.showModal()},a=function(){};return{component:t.component,signIn:s,signUp:c,signOut:a,auth:n}}});L.render=p;var D=L,H=Object(r["j"])({name:"App",components:{Navbar:D,FormInput:k},setup:function(){var t=A(),e=Object(r["d"])((function(){return{display:t.show.value?"block":"none"}}));return{style:e,hide:function(){t.hideModal()}}}});n("354c");H.render=u;var N=H,W=n("c1df"),F=n.n(W),J={id:"1",title:"Today",created:F()().subtract(1,"second"),authorId:"1"},G={id:"2",title:"This Week",created:F()().subtract(2,"days"),authorId:"1"},K={id:"3",title:"This Month",created:F()().subtract(12,"days"),authorId:"1"},$=n("6c02");function Q(t,e,n,s,c,a){const o=Object(r["B"])("timeline"),i=Object(r["B"])("spinner");return Object(r["t"])(),Object(r["f"])(r["b"],null,{default:Object(r["I"])(()=>[Object(r["i"])(o)]),fallback:Object(r["I"])(()=>[Object(r["i"])(i)]),_:1})}const R=Object(r["L"])("data-v-404a6766");Object(r["w"])("data-v-404a6766");const X={class:"message is-primary is-marginless"},Y={class:"message-header"},Z={class:"is-primary panel"},tt={class:"panel-tabs"};Object(r["u"])();const et=R((t,e,n,s,c,a)=>{const o=Object(r["B"])("timeline-post");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",X,[Object(r["i"])("div",Y,[Object(r["i"])("div",null,"Posts for "+Object(r["E"])(t.currentPeriod.toLowerCase()),1)])]),Object(r["i"])("nav",Z,[Object(r["i"])("span",tt,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(t.periods,e=>(Object(r["t"])(),Object(r["f"])("a",{key:e,class:{"is-active":e===t.currentPeriod},"data-test":e,onClick:n=>t.setPeriod(e)},Object(r["E"])(e),11,["data-test","onClick"]))),128))]),(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(t.posts,t=>(Object(r["t"])(),Object(r["f"])(o,{key:t.id,post:t,class:"panel-block"},null,8,["post"]))),128))])],64)}),nt=Object(r["L"])("data-v-6cd469de");Object(r["w"])("data-v-6cd469de");const st={class:"is-flex is-flex-direction-column is-align-items-flex-start"};Object(r["u"])();const rt=nt((t,e,n,s,c,a)=>{const o=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])(o,{key:t.post.id,class:"panel-block",to:t.to},{default:nt(()=>[Object(r["i"])("div",st,[Object(r["i"])("a",null,Object(r["E"])(t.post.title),1),Object(r["i"])("div",null,Object(r["E"])(t.post.created.format("Do MMM")),1)])]),_:1},8,["to"])});var ct=Object(r["j"])({name:"TimelinePost",props:{post:{type:Object,required:!0}},setup:function(t){return{to:"/posts/"+t.post.id}}});ct.render=rt,ct.__scopeId="data-v-6cd469de";var at=ct,ot=Object(r["j"])({name:"Timeline",components:{TimelinePost:at},setup:function(){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,c,a,o;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return t=["Today","This Week","This Month"],e=Object(r["z"])("Today"),n=_(),n.getState().posts.loaded?[3,2]:[4,n.fetchPosts()];case 1:s.sent(),s.label=2;case 2:return c=n.getState().posts.ids.reduce((function(t,e){var s=n.getState().posts.all.get(e);if(!s)throw Error("This post was not found");return t.concat(s)}),[]),a=Object(r["d"])((function(){return c.filter((function(t){return"Today"===e.value?t.created.isAfter(F()().subtract(1,"day")):"This Week"===e.value?t.created.isAfter(F()().subtract(1,"week")):"This Month"===e.value&&t.created.isAfter(F()().subtract(1,"month"))}))})),o=function(t){e.value=t},[2,{posts:a,periods:t,setPeriod:o,currentPeriod:e}]}}))}))}});ot.render=et,ot.__scopeId="data-v-404a6766";var it=ot;const ut={class:"progress is-primary is-small"};function lt(t,e){return Object(r["t"])(),Object(r["f"])("progress",ut)}const dt={};dt.render=lt;var bt=dt,jt=Object(r["j"])({name:"App",components:{Timeline:it,Spinner:bt}});jt.render=Q;var ft=jt;function pt(t,e,n,s,c,a){const o=Object(r["B"])("post-writer");return Object(r["t"])(),Object(r["f"])(o,{post:t.newPost,onSave:t.save},null,8,["post","onSave"])}const Ot={class:"columns"},vt={class:"column"},ht={class:"field"},mt=Object(r["i"])("div",{class:"label"},"New Post",-1),gt={class:"columns"},yt={class:"column"},wt={class:"column"},kt={class:"columns"},St={class:"column"};function It(t,e,n,s,c,a){return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",Ot,[Object(r["i"])("div",vt,[Object(r["i"])("div",ht,[mt,Object(r["J"])(Object(r["i"])("input",{type:"text",class:"input","onUpdate:modelValue":e[1]||(e[1]=e=>t.title=e),"data-test":"title"},null,512),[[r["G"],t.title]])])])]),Object(r["i"])("div",gt,[Object(r["i"])("div",yt,[Object(r["i"])("div",{contenteditable:"",ref:"contentEditable",onInput:e[2]||(e[2]=(...e)=>t.handleInput&&t.handleInput(...e)),"data-test":"content"},null,544)]),Object(r["i"])("div",wt,[Object(r["i"])("div",{innerHTML:t.html},null,8,["innerHTML"])])]),Object(r["i"])("div",kt,[Object(r["i"])("div",St,[Object(r["i"])("button",{onClick:e[3]||(e[3]=(...e)=>t.save&&t.save(...e)),class:"button is-primary is-pulled-right","data-test":"submit"}," Submit ")])])],64)}var Pt=n("0e54"),Tt=n("1487"),zt=n.n(Tt),Et=n("b047"),Mt=n.n(Et),xt=Object(r["j"])({props:{post:{type:Object,required:!0}},emits:{save:function(t){return!0}},setup:function(t,e){var n=Object(r["z"])(t.post.title),c=Object(r["z"])("## Title\nEnter your post content..."),a=Object(r["z"])(""),o=function(t){a.value=Object(Pt["parse"])(t,{gfm:!0,breaks:!0,highlight:function(t){return zt.a.highlightAuto(t).value}})};Object(r["H"])(c,Mt()((function(t){o(t)}),250),{immediate:!0});var i=Object(r["z"])(null),u=function(){if(!i.value)throw Error("This should never happen");c.value=i.value.innerText||""};Object(r["r"])((function(){if(!i.value)throw Error("This should never happen");i.value.innerText=c.value}));var l=function(){var r=Object(s["a"])(Object(s["a"])({},t.post),{title:n.value,html:a.value,markdown:c.value});e.emit("save",r)};return{save:l,html:a,title:n,handleInput:u,content:c,contentEditable:i}}});n("5ad0");xt.render=It;var Ut=xt,_t=Object(r["j"])({components:{PostWriter:Ut},setup:function(){var t=this,e=_(),n=Object($["d"])(),r=e.getState().authors.currentUserId;if(!r)throw Error("currentUserId was not found.");var c={id:"-1",title:"Enter your title...",created:F()().subtract(1,"second"),authorId:r},a=function(r){return Object(s["b"])(t,void 0,void 0,(function(){return Object(s["c"])(this,(function(t){switch(t.label){case 0:return[4,e.createPost(r)];case 1:return t.sent(),n.push("/"),[2]}}))}))};return{newPost:c,save:a}}});_t.render=pt;var Bt=_t;function qt(t,e,n,s,c,a){const o=Object(r["B"])("post-viewer"),i=Object(r["B"])("spinner");return Object(r["t"])(),Object(r["f"])(r["b"],null,{default:Object(r["I"])(()=>[Object(r["i"])(o)]),fallback:Object(r["I"])(()=>[Object(r["i"])(i)]),_:1})}const At={class:"columns"},Vt=Object(r["i"])("div",{class:"column"},null,-1),Ct={class:"column is-two-thirds"},Lt=Object(r["h"])(" Edit "),Dt=Object(r["i"])("div",{class:"column"},null,-1);function Ht(t,e,n,s,c,a){const o=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])("div",At,[Vt,Object(r["i"])("div",Ct,[t.canEdit?(Object(r["t"])(),Object(r["f"])(o,{key:0,to:`/posts/${t.post.id}/edit`,class:"button is-link is-rounded","data-test":"can-edit"},{default:Object(r["I"])(()=>[Lt]),_:1},8,["to"])):Object(r["g"])("",!0),Object(r["i"])("h1",null,Object(r["E"])(t.post.title),1),Object(r["i"])("div",{innerHTML:t.post.html},null,8,["innerHTML"])]),Dt])}var Nt=Object(r["j"])({setup:function(t){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return t=_(),e=Object($["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPosts()];case 1:s.sent(),s.label=2;case 2:if(n=t.getState().posts.all.get(e),!n)throw Error("Post was not found.");return r=n.authorId===t.getState().authors.currentUserId,[2,{post:n,canEdit:r}]}}))}))}});Nt.render=Ht;var Wt=Nt,Ft=Object(r["j"])({components:{PostViewer:Wt,Spinner:bt}});Ft.render=qt;var Jt=Ft;function Gt(t,e,n,s,c,a){const o=Object(r["B"])("post-editor"),i=Object(r["B"])("spinner");return Object(r["t"])(),Object(r["f"])(r["b"],null,{default:Object(r["I"])(()=>[Object(r["i"])(o)]),fallback:Object(r["I"])(()=>[Object(r["i"])(i)]),_:1})}function Kt(t,e,n,s,c,a){const o=Object(r["B"])("post-writer");return Object(r["t"])(),Object(r["f"])(o,{post:t.post,onSave:t.save},null,8,["post","onSave"])}var $t=Object(r["j"])({components:{PostWriter:Ut},setup:function(t){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,c,a=this;return Object(s["c"])(this,(function(o){switch(o.label){case 0:return t=_(),e=Object($["d"])(),n=Object($["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPosts()];case 1:o.sent(),o.label=2;case 2:if(r=t.getState().posts.all.get(n),!r)throw Error("Post was not found.");return r.authorId!==t.getState().authors.currentUserId&&e.push("/"),c=function(n){return Object(s["b"])(a,void 0,void 0,(function(){return Object(s["c"])(this,(function(s){switch(s.label){case 0:return[4,t.updatePost(n)];case 1:return s.sent(),e.push("/"),[2]}}))}))},[2,{post:r,save:c}]}}))}))}});$t.render=Kt;var Qt=$t,Rt=Object(r["j"])({components:{PostEditor:Qt,Spinner:bt}});Rt.render=Gt;var Xt=Rt;function Yt(t){var e=Object($["a"])({history:Object($["b"])("/vuejs-composition-api-course"),routes:[{path:"/",component:ft},{path:"/posts/:id/edit",component:Xt,meta:{requiresAuth:!0}},{path:"/posts/:id",component:Jt},{path:"/posts/new",component:Bt,meta:{requiresAuth:!0}}]});return e.beforeEach((function(e,n,s){var r=!!t.getState().authors.currentUserId;e.meta.requiresAuth?e.meta.requiresAuth&&r?s():s({path:"/"}):s()})),e}var Zt=n("0f40"),te=n.n(Zt);n("9f21");function ee(){return new Promise((function(t){setTimeout(t,500)}))}z.a.get=function(t){return Object(s["b"])(void 0,void 0,void 0,(function(){return Object(s["c"])(this,(function(e){switch(e.label){case 0:return"/posts"!==t?[3,2]:[4,ee()];case 1:return e.sent(),[2,Promise.resolve({data:[J,G,K]})];case 2:return[2]}}))}))},z.a.post=function(t,e){return Object(s["b"])(void 0,void 0,void 0,(function(){var n,r,c;return Object(s["c"])(this,(function(a){switch(a.label){case 0:return"/posts"!==t?[3,2]:(r=te()(100,1e4),[4,ee()]);case 1:return a.sent(),n=Object(s["a"])(Object(s["a"])({},e),{id:r.toString(),title:e.title,created:e.created,authorId:e.authorId}),[2,Promise.resolve({data:n})];case 2:return"/users"!==t?[3,4]:(r=te()(100,1e4),[4,ee()]);case 3:return a.sent(),c={id:r.toString(),username:e.username},[2,Promise.resolve({data:c})];case 4:return[2]}}))}))},z.a.put=function(t,e){return Object(s["b"])(void 0,void 0,void 0,(function(){var n;return Object(s["c"])(this,(function(r){switch(r.label){case 0:return"/posts"!==t?[3,2]:[4,ee()];case 1:return r.sent(),n=Object(s["a"])(Object(s["a"])({},e),{title:e.title,created:e.created,authorId:e.authorId}),[2,Promise.resolve({data:n})];case 2:return[2]}}))}))};var ne=Object(r["e"])(N),se=Yt(U);ne.use(se),ne.use(U),ne.mount("#app")}});
//# sourceMappingURL=app.f3e529fd.js.map