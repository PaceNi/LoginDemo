webpackJsonp([1],{"6zR1":function(t,e){},EgJE:function(t,e){t.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAABGdBTUEAALGPC/xhBQAAAzZJREFUWAnFmL9OG0EQxs9nBHLhxsgygtLYlijSWC7zAiRR2pR5BpSQPEICEW8QKWXaKAkvQOkuBZKxKUEgC0uIwjKS7cxvdXO6W27tOxOHkdb7b2a+b2f3bvac8zLI+fl5bTwev55MJs/FbEvKppR1KTdSLqVc+L5/ks/nf1Sr1a70U0luntZ0Os13Op23uVxuT9o78/R1XvRPRf+o0Wh8k/ZYx5PqmSTOzs5eiKODLOA2CGSk7Nfr9d/2nPYTSQioL6v/JErvVfEf1IcSlY9CaGL7ekCi3+8XB4PBdyGyays/ti8Ejkul0ptyuXwX9eVHO0RgWQTAYWGB/xhurCNb8HkZEbAWuhtsdTgcbgeHUB69X+HMkhvyKL/Uw2oiIavPSzlw4Y5GI+/uLraNLtVwHH3sXAIeuMyv8MN7QKrEdwCO2u02++lVKhVP2GMyUySq3vX1tScH0Wu1Wt7a2toDffG3E+B+NZEQ5b0HWsHA/f29IUAXx93u7Bch8+ghEMfeJYrr8yqGlUuxWCyaCOj81dWVkwgEmFchcti7BFzwfXKBS0nH2YKNjQ3tGiA7IjYB9NNsHfgrQTIKAVyNWq1mpnSlWm9vb3u9Xi8WAQiovsufjoPPwSQbphJ1rASob29vveFwGNpnIRAYbXEwScepBSLRrXkkAXA3IcF9IJOwBYVCIWZDn/EFZB0SXEgyCWcgGgGM6TO+gNxAghtRarGfgmhEOCP2U5PC8SUkLlIoGhWbAGej2WzGzsgCRLgS+idpSCQR4JDyarYPaxYi4PtcSueRIBfgWCXpMUwigt08Ad/nViyrOXUpkw01F6CTREBtbSLYzcq+4ILPmSDRHKkju15dXTUhZ5xcANAsYR49hK3C3iWKay410slL6P6QUJIMSOdkw1nJyLYjAhBISuPoEgXJLc+kHptI0JCybzvSPo6yEMAOfRcB5sEDl7YhQUNY8V1wSPs/yGGAZ6DCOyY92Q5ftuWn1LvLIiKrPxYCr6QOvz/CSADKBN8FKC6DBH4D/yEBg5sERkS4/svcu6T5Bce+yBfYh2gE1E9sO3RQa9map/sWVRLUEpWn/SqPkqG9rP8n/gLyYbuDCok/MAAAAABJRU5ErkJggg=="},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=(n("6zR1"),n("OxAK"),n("XSKG"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}),o=n("VU/8")({data:function(){return{}},created:function(){},methods:{}},s,!1,null,null,null).exports,a=n("/ocq"),h=n("//Fk"),c=n.n(h),l={name:"login",data:function(){return{pageTitle:"登陆/注册",loginTxt:"登录",phoneVal:"",codeVal:"",hasPhone:!1,rightPhone:!1,hasCode:!1,rightCode:!1,isgetCode:!1,timeLeng:60,timeInt:null,reSend:!1,beginCount:!1,sending:!1,code:"",getCodeOK:!1,out:!1,logined:!1,popClass:"icon-sign",popMin:!1,popOut:!1,msg:"",loginMain:!0,flag:1}},components:{},created:function(){},methods:{getCodeF:function(){var t=this;if(this.checkPhone(),this.rightPhone){if(this.flag){this.sendfunc();new c.a(function(e,n){"18852956186"==t.phoneVal||"18521796320"==t.phoneVal?(t.createCode(),e(t.code)):e("error")}).then(function(e){"error"!==e?(t.timefunc(),t.isgetCode=!0,console.log("开始倒计时"),t.getCodeOK=!0,setTimeout(function(){return t.out=!0},5e3),setTimeout(function(){t.getCodeOK=!1,t.out=!1},6e3)):(t.popMinShow("icon-sign","发送失败"),console.log("发送失败"),t.sending=!1,t.reSend=!0)}).catch(function(t){})}}else this.rightPhone||(this.hasPhone?this.popMinShow("icon-sign","请填写正确的手机号"):this.hasPhone||this.popMinShow("icon-sign","请输入手机号"))},createCode:function(){for(var t="",e=0;e<4;e++)t+=Math.floor(10*Math.random());this.code=t},clearPhoneF:function(){this.phoneVal=""},clearCodeF:function(){this.codeVal=""},countDown:function(){this.rightPhone&&(this.timeLeng--,this.timeLeng<=0&&this.clearCountF())},clearCountF:function(){this.timeInt&&(clearInterval(this.timeInt),this.timeLeng=60,this.timeInt=null,this.beginCount=!1,this.reSend=!0)},sendfunc:function(){this.sending=!0,this.reSend=!1},timefunc:function(){this.sending=!1,this.beginCount=!0,this.reSend=!1,this.timeInt=setInterval(this.countDown,1e3)},getPopMin:function(t){this.popMinShow("icon-sign","60s后重新获取")},loginFun:function(){var t=this;this.rightCode&&this.rightCode&&!this.logined&&(this.logined=!0,this.loginTxt="登录中...",setTimeout(function(){t.loginTxt="登录",t.loginMain=!1},3e3))},popMinShow:function(t,e){var n=this;this.flag&&(this.flag=0,this.popMin=!0,this.popClass=t,this.msg=e,setTimeout(function(){return n.popOut=!0},2e3),setTimeout(function(){n.popOut=!1,n.popMin=!1,n.popClass="",n.msg="",n.flag=1},3e3))},checkPhone:function(){var t=/^1[34578]\d{9}$/.test(this.phoneVal);this.phoneVal.length>0?this.hasPhone=!0:this.hasPhone=!1,this.rightPhone=!!t}},watch:{phoneVal:function(){var t=/^1[34578]\d{9}$/.test(this.phoneVal);this.phoneVal.length>0&&this.phoneVal.length<12?this.hasPhone=!0:this.phoneVal.length>11?(this.phoneVal=this.phoneVal.slice(0,11),this.hasPhone=!1):this.hasPhone=!1,this.rightPhone=!!t},codeVal:function(){this.codeVal.length>0?this.hasCode=!0:this.hasCode=!1,4==this.codeVal.length&&this.isgetCode?this.rightCode=!0:this.rightCode=!1}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[t.loginMain?i("div",{staticClass:"loginMain "},[i("div",{staticClass:"loginTitle"},[t._v("登陆/注册")]),t._v(" "),i("ul",[i("li",{staticClass:"first"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneVal,expression:"phoneVal"}],staticClass:"input",attrs:{type:"number",name:"phone",maxlength:"11",placeholder:"请输入手机号"},domProps:{value:t.phoneVal},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getCodeF()},input:function(e){e.target.composing||(t.phoneVal=e.target.value)}}}),t._v(" "),i("button",{staticClass:"getCode",class:{active:t.rightPhone,hide:t.beginCount||t.reSend||t.sending},on:{click:function(e){t.getCodeF()}}},[t._v("获取验证码")]),t._v(" "),t.sending?i("button",{staticClass:"getCode status"},[t._v("发送中...")]):t._e(),t._v(" "),t.beginCount?i("button",{staticClass:"getCode status",on:{click:function(e){t.getPopMin()}}},[t._v("已发送("+t._s(t.timeLeng)+"s)")]):t._e(),t._v(" "),t.reSend?i("button",{staticClass:"getCode active status",on:{click:function(e){t.getCodeF()}}},[t._v("重新获取")]):t._e(),t._v(" "),t.hasPhone?i("span",{staticClass:"clearTel clear",on:{click:function(e){t.clearPhoneF()}}},[i("img",{attrs:{src:n("EgJE"),alt:""}})]):t._e()]),t._v(" "),i("li",{staticClass:"second"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.codeVal,expression:"codeVal"}],staticClass:"input",attrs:{type:"number",name:"code",placeholder:"请输入验证码"},domProps:{value:t.codeVal},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.loginFun()},input:function(e){e.target.composing||(t.codeVal=e.target.value)}}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.hasCode,expression:"hasCode"}],staticClass:"clearCode clear",on:{click:function(e){t.clearCodeF()}}},[i("img",{attrs:{src:n("EgJE"),alt:""}})])]),t._v(" "),i("li",{staticClass:"third"},[i("div",{staticClass:"loginButton",class:{active:t.rightPhone&&t.rightCode},on:{click:function(e){t.loginFun()}}},[t._v("\n          "+t._s(t.loginTxt)+"\n        ")])])])]):t._e(),t._v(" "),i("div",{staticClass:"popMin animated",class:{fadeIn:t.popMin&&!t.popOut,hide:!t.popMin,fadeOut:t.popOut}},[i("span",{staticClass:"icon_imp",class:t.popClass}),t._v(" "),i("p",{staticClass:"txt"},[t._v(t._s(t.msg))])]),t._v(" "),i("div",{staticClass:"popMsg animated2",class:{fadeInDown:t.getCodeOK&&!t.out,hide:!t.getCodeOK,fadeOutUp:t.out}},[t._m(0,!1,!1),t._v(" "),i("div",{staticClass:"msg"},[i("p",[t._v("10690716159995199")]),t._v(" "),i("p",[t._v("【loginTest】您的验证码是"+t._s(t.code)+"，请于5分钟内正确输入")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"normal clearfix"},[e("img",{staticClass:"left",attrs:{src:n("SQQq")}}),this._v(" "),e("span",[this._v("信息")]),this._v(" "),e("span",{staticClass:"right"},[this._v("现在")])])}]},r=n("VU/8")(l,u,!1,null,null,null).exports;i.a.use(a.a);var g=new a.a({routes:[{path:"/",name:"login",component:r}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:g,template:"<App/>",components:{App:o}})},OxAK:function(t,e){},SQQq:function(t,e,n){t.exports=n.p+"static/img/timg.94b8ac8.jpeg"},XSKG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c83737034113be653850.js.map