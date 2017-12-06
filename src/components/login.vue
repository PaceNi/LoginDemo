<template>
  <section>
    <div class="loginMain ">
      <div class="loginTitle">登陆/注册</div>
      <ul>
        <li class="first">
          <input class="input" type="number" name="phone" v-model="phoneVal" maxlength="11"  @keyup.enter="getCodeF()" placeholder="请输入手机号" />
          <button class="getCode" @click="getCodeF()" :class="{active:rightPhone,hide:beginCount || reSend || sending}">获取验证码</button>
          <button class="getCode" v-show="sending" @click="getPopMin('sending')">发送中...</button>
          <button class="getCode" v-show="beginCount" @click="getPopMin('counting')">已发送({{timeLeng}}s)</button>
          <button class="getCode active" @click="getCodeF()" v-show="reSend">重新获取</button>
          <span class="clearTel clear" v-show="hasPhone" @click="clearPhoneF()">
            <img src="../../static/img/cha.jpg" alt="" />
          </span>
        </li>
        <li class="second">
          <input class="input" type="number" name="code" v-model="codeVal"  @keyup.enter="loginFun()"  placeholder="请输入验证码" />
          <span class="clearCode clear" @click="clearCodeF()" v-show="hasCode">
            <img src="../../static/img/cha.jpg" alt="" />
          </span>
        </li>
        <li class="third">
          <div class="loginButton" :class="{active:rightPhone && rightCode}" @click="loginFun()" >
            {{ loginTxt }}
          </div>
        </li>
      </ul>
    </div>
    <popMsg :getCodeOK="getCodeOK" :out="out" :code="code"></popMsg>
    <popMin :popMin="popMin" :popOut="popOut" :popClass="popClass" :msg="msg"></popMin>
  </section>
</template>

<script>
import popMsg from './popMsg'
import popMin from './popMin.vue'

export default {
  name: 'login',
  data () {
    return {
      pageTitle: '登陆/注册',
      loginTxt: '登录',
      phoneVal: '',
      codeVal: '',
      hasPhone: false,
      rightPhone: false,
      hasCode: false,
      rightCode: false,
      isgetCode: false,
      timeLeng: 60,
      timeInt: null,
      reSend: false,
      beginCount: false,
      sending: false,
      code: '',
      getCodeOK: false,
      out: false,
      logined: false,
      popClass: '',
      popMin: false,
      popOut: false,
      msg: '',
    }
  },
  created () {

  },
  components: {
    popMin,
    popMsg,
  },
  methods: { 
    getCodeF: function() {
      if (this.rightPhone){
        this.sendfunc()  // 发送中
        // 用延迟模拟ajax请求
        setTimeout(() => {
          if(this.phoneVal=='18852956186' || this.phoneVal=='18521796320'){
            this.timefunc()//倒计时
            this.isgetCode = true
            this.getCodeOK = true;//获取验证码
            this.code='1234'
            setTimeout(() => this.out = true,5000);//隐藏验证码样式
          } else {
            this.popMinShow("icon-sign","发送失败")
            // 发送失败后重置
            this.sending = false
            this.reSend = true
          }
        },1000);//隐藏验证码样式
      } else if (!this.rightPhone){
        if(this.hasPhone){
          this.popMinShow("icon-sign","请填写正确的手机号")
        } else {
          this.popMinShow("icon-sign","请输入手机号")
        }
      }
    },
    clearPhoneF: function(){
      this.phoneVal = ''
    },
    clearCodeF: function() {
      this.codeVal = ''
    },
    countDown: function(){  //倒计时函数
      console.log("开始倒计时")
      if (this.rightPhone) {
        this.timeLeng--
        if (this.timeLeng <= 0) {
          this.clearCountF()
        }
      }
    },
    clearCountF: function(){
      if (this.timeInt) {
        clearInterval(this.timeInt)
        this.timeLeng = 60
        this.timeInt = null
        this.beginCount = false
        this.reSend = true
      }
    },
    sendfunc: function(){
      this.sending = true
      this.reSend = false
    },
    timefunc: function(){
      this.sending = false
      this.beginCount = true
      this.reSend = false
      this.timeInt = setInterval(this.countDown,1000)
    },
    getPopMin: function(str) {
      if ( str==='sending' ) {
        this.popMinShow("icon-sign","发送中，请稍候")
      } else if ( str==='counting' ) {
        this.popMinShow("icon-sign","60s后重新获取")
      }
    },
    loginFun: function() {
      if(this.rightCode && this.rightCode && !this.logined){
        this.logined = true
        this.loginTxt = '登录中...'
        // 模拟登录成功
        setTimeout(() => {
          this.loginTxt = '登录'
          this.$destroy(true)//登录成功后销毁组件
          },3000);
      }
    },
    popMinShow: function(icon, msg){
      this.popMin = true
      this.popClass = icon
      this.msg = msg
      setTimeout(() => this.popOut = true ,2000);
      setTimeout(() => {
        this.popOut = false//2s后提示消失
        this.popMin = false
        this.popClass = ''
        this.msg = ''
      },3000);
    }
  },
  watch:{
    phoneVal: function(){
      let phonTest = (/^1[34578]\d{9}$/.test(this.phoneVal));
      if (this.phoneVal.length > 0 && this.phoneVal.length < 12){
        this.hasPhone = true
      } else if (this.phoneVal.length > 11){
        this.phoneVal = this.phoneVal.slice(0,11)
        this.hasPhone = false
      } else {
        this.hasPhone = false
      }
      if (phonTest) {
        this.rightPhone = true
      } else {
        this.rightPhone = false
      }
    },
    codeVal: function() {
      if (this.codeVal.length > 0){
        this.hasCode = true
      } else {
        this.hasCode = false
      }
      if (this.codeVal.length == 4 && this.isgetCode) {
        this.rightCode = true
      } else {
        this.rightCode = false
      }
    }
  },
  detached () { 
    //触发事件 myVue.$destroy(true),其中参数true控制是否删除DOM节点或者myVue.$remove()
    //在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。
    console.log("删除DOM成功");
  },
  destroyed () {
    //触发方式,在console里面打myVue.$destroy();其中myVue.$destroy(true)是删除DOM节点,会触发detached函数,但是实例仍然存在
    //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
    console.log("已销毁");
  },
}
</script>
